
import { airQualityRoute } from './api/air-quality.route';

export class Routes {
    private airQualityRoute: airQualityRoute = new airQualityRoute();

    public Routes(app: any) {
        this.airQualityRoute.Routes(app);
    }
}