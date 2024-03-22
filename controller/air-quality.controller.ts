import { Request, Response } from 'express';
import { HttpStatusCode } from "../common/enums/httpStatuses.enum";
import { RequestHandler } from "../helper/http-request-handler.";
import { airQualityService } from "../services/air-quality.service";


export class airQualityController {
    getAirQualityForNearestCity(req: Request, res: Response) {
        new airQualityService().getAirQualityForNearestCity(req.query.long , req.query.lat)
            .then((result: any) => { RequestHandler.handleRes(res, result, 0); })
            .catch((err: Error) => { RequestHandler.handleErr(res, err, HttpStatusCode.INTERNAL_SERVER_ERROR) });
    }

}