import { DataAccessLayer } from "../helper/_dal";
import { AxiosHandler } from "../handler/axios.handler";

export class airQualityService {
  private dal = new DataAccessLayer();
  private axiosHandler: AxiosHandler = new AxiosHandler()
  constructor() {}

  async getAirQualityForNearestCity(long: any, lat: any) {
    return new Promise(async (resolve, reject) => {
      try {
        const airQualityResult: any = await this.axiosHandler.sendAxiosRequest(
          `${process.env.URL}?lat=${lat}&lon=${long}&key=${process.env.API_KEY}`
        );
        resolve(airQualityResult);
      } catch (err) {
        reject(err);
      }
    });
  }
}
