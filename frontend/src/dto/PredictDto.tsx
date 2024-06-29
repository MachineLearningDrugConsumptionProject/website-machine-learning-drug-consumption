import { z } from "zod";

// ['Age', 'Gender', 'Education', 'Country', 'Ethnicity']

export const PredictDemographicSchema = z.object({
    age: z.string().min(1),
    gender: z.string().min(1),
    education: z.string().min(1),
    country: z.string().min(1),
    ethnicity: z.string().min(1)
})
// psychology_col = ['Nscore', 'Escore', 'Oscore', 'Ascore', 'Cscore', 'Impulsive', 'SS']

export const PredictPsychologicSchema = z.object({
    nScore: z.number().min(12, { message : 'Neuroticism Score minimal value is 12'}),
    eScore: z.number().min(12, { message : 'Extraversion Score minimal value is 12'}),
    oScore: z.number().min(12, { message : 'Openness Score minimal value is 12'}),
    aScore: z.number().min(12, { message : 'Agreeableness Score minimal value is 12'}),
    cScore: z.number().min(12, { message : 'Conscientiousness minimal value is 12'}),
    impulsive: z.number().min(12, { message : 'Implusive minimal value is 12'}),
    ss: z.number().min(12, { message : 'Sensation Seeking minimal value is 12'}),
})

export const PredictSchema = z.object({
    PredictDemographicSchema,
    PredictPsychologicSchema
})

export type PredictDemographicDto = z.infer<typeof PredictDemographicSchema>
export type PredictPsychologicDto = z.infer<typeof PredictPsychologicSchema>
export type PredictDto = z.infer<typeof PredictSchema>
