import {cronJob} from  '../cronJob/paris.air-quality'
export class InitializationHandler {
    constructor(){
        new cronJob().runCronJob()
    }
}