import axios from "axios";

export class AxiosHandler {
  sendAxiosRequest(URL: string) {
    return new Promise(async (resolve, reject) => {
      try {
        const airQualityResult = await axios.get(
          `${URL}&key=${process.env.API_KEY}`
        );
        const currentPollution = airQualityResult.data.data.current.pollution;
        resolve({ Result: { Pollution: currentPollution } });
      } catch (err) {
        reject(err);
      }
    });
  }
}
