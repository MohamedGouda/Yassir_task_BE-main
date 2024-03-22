import { AxiosHandler } from "../handler/axios.handler";
import { airQualityService } from "../services/air-quality.service";

jest.mock("../handler/axios.handler", () => ({
  __esModule: true,
  default: jest.fn().mockImplementation(() => ({
    sendAxiosRequest: jest.fn(),
  })),
}));
let airService: any;
let axiosHandler: any;
describe("airQualityService", () => {
  airService = new airQualityService();
  axiosHandler = new AxiosHandler();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call axiosHandler.sendAxiosRequest with the correct URL", async () => {
    const mockResponse = {
      Result: {
        Pollution: {
          ts: "2024-03-22T12:00:00.000Z",
          aqius: 58,
          mainus: "p2",
          aqicn: 22,
          maincn: "p2",
        },
      },
    };
    const expectedUrl = "http://localhost:7777/api/air-quality?long=90&lat=180";

    jest
      .spyOn(axiosHandler, "sendAxiosRequest")
      .mockResolvedValue(mockResponse);

    await airService.getAirQualityForNearestCity(90, 180);

    expect(axiosHandler.sendAxiosRequest).toHaveBeenCalledWith(expectedUrl);
  });

  it("should return the response from sendAxiosRequest", async () => {
    const mockResponse = {
      Result: {
        Pollution: {
          ts: "2024-03-22T12:00:00.000Z",
          aqius: 58,
          mainus: "p2",
          aqicn: 22,
          maincn: "p2",
        },
      },
    };

    jest
      .spyOn(axiosHandler, "sendAxiosRequest")
      .mockResolvedValue(mockResponse);

    const result = await airService.getAirQualityForNearestCity(100, 120);

    expect(result).toEqual(mockResponse);
  });

  it("should handle errors from sendAxiosRequest", async () => {
    const errorMessage = "Request failed";

    jest
      .spyOn(axiosHandler, "sendAxiosRequest")
      .mockRejectedValue(new Error(errorMessage));

    await expect(
      airService.getAirQualityForNearestCity(90, 180)
    ).rejects.toThrow(errorMessage);
  });
});
