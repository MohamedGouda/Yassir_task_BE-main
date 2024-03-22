import { AxiosHandler } from "../handler/axios.handler";
import { CronJob } from "cron";
import { DataAccessLayer } from "../helper/_dal";
import { ParisAirQualityModel } from "../db/models/parisAirQuality.model";

export class cronJob {
  private axiosHandler: AxiosHandler = new AxiosHandler();
  private dal: DataAccessLayer = new DataAccessLayer();
  constructor() {}

  async fetchAirQuality() {
    return new Promise(async (resolve, reject) => {
      try {
        const url = `${process.env.URL}?lat=${process.env.PARIS_latitude}&lon=${process.env.PARIS_longitude}&key=${process.env.API_KEY}`;
        const response: any = await this.axiosHandler.sendAxiosRequest(url);
        const currentAirDataForParis = new ParisAirQualityModel();
        currentAirDataForParis.data = JSON.stringify(response.Result);
        currentAirDataForParis.createdDate = new Date()
        await this.dal.AddToCollection(currentAirDataForParis);
        resolve("paris air data saved in DB....");
      } catch (error) {
        reject(error);
      }
    });
  }

  async runCronJob() {
    new CronJob(
      "* * * * *",
      async () => {
        console.log("Checking air quality...");
        try {
          const airQualityData = await this.fetchAirQuality();
          console.log("Air quality data:", airQualityData);
        } catch (error: any) {
          console.error("Error in air quality check:", error.message);
        }
      },
      null,
      true
    );
  }
}
