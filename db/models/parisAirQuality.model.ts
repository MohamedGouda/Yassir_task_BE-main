import mongoose from 'mongoose';
import { Collection_Names_Enum } from '../../common/enums/collection-names';

const parisAirQualitySchema = new mongoose.Schema({
    data:{
        type: {}
    },
    createdDate:{
        type: Date,
        default: new Date()
    }
}, { collection: Collection_Names_Enum.PARIS_AIR_DATA });

export const ParisAirQualityModel = mongoose.model(Collection_Names_Enum.PARIS_AIR_DATA, parisAirQualitySchema);
