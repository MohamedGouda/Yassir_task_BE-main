import { Response } from 'express'
import { Collection_Names_Enum } from '../common/enums/collection-names';


export class RequestHandler {


    static handleRes(res: Response, data: any, allRecordCount: any = 0) {
        try {
            let obj: any = {};
            res.send(data);
        } catch (error) {
        }
    }

    static handleErr(res: Response, err: any, status: any) {
        try {
            res.status(status).json(
                {
                    type: 'error',
                    message: err ? err.message ? err.message.split(',') ? err.message.split(',')[0] : 'INTERNAL SERVER ERROR' : "INTERNAL SERVER ERROR" : "INTERNAL SERVER ERROR",
                    error: err ? err.errorType : status
                }
            );
        } catch (error) {
        }
    }
    
    static handleResponse(res: Response, data: any) {
        try {
            res.send(data);
        } catch (error) {
        }
    }

}
