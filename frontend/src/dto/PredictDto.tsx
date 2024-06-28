import { z } from "zod";
['Age', 'Gender', 'Education', 'Country', 'Ethnicity']
export const PredictDemographicSchema = z.object({
    age: z.string().min(1),
    
})

export const PredictSchema = z.object({

})