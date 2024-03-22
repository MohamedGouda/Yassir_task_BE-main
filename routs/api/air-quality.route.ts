import * as express from "express";
import { ControllerNames } from "../../common/enums/controller-name.enum";
import { airQualityController } from "../../controller/air-quality.controller";


export class airQualityRoute {
    private _controllerName: ControllerNames = ControllerNames.airQuality;
    private _UserController: airQualityController = new airQualityController();

    public Routes(app: express.Application) {
        app.route(`/${ControllerNames.ENTRY_ROUTE}/${this._controllerName}`).get( this._UserController.getAirQualityForNearestCity);
    }

}
