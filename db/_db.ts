import mongoose, { ConnectOptions } from 'mongoose';
import { IDatabase } from '../common/interfaces/db.interface';



export class Database implements IDatabase {
    url: string = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
    connection: any;
    intervalConnection: any = null;
    timeout: number = parseInt(process.env.CONNECTION_TIME_OUT || '3012');

    constructor() { }

    connect() {
        return new Promise((resolve: any, reject: any) => {
            console.log(this.url)
            mongoose.connect(this.url, this.GetOptions(),
                (err: any) => {
                    if (!err) {
                        this.connection = true;
                        console.log(`Connected to DB __ ${this.url}`);
                        resolve();
                    } else {
                        console.log(`err${err}`);
                        reject();
                    }
                });
        });

    }

    private GetOptions() {
        let connectionOptions: ConnectOptions = {
            autoIndex: true,
            maxPoolSize: 10,
            minPoolSize: 10,
            connectTimeoutMS: 10000,
            socketTimeoutMS: 45000,
            keepAlive: true,
            keepAliveInitialDelay: 300000,
        };

        return connectionOptions;
    };
}
