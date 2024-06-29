'use client'

import { useState } from "react";
import ModelDemographicForm from "./ModelDemographicForm";
import { PredictDemographicDto, PredictDto, PredictPsychologicDto } from "@/dto/PredictDto";
import ModelPsychologicForm from "./ModelPsychologicForm";
import axios from "axios";

export enum ModelFormEnum {
    DEMOGRAPHIC = 'DEMOGRAPHIC',
    PSYCHOLOGIC = 'PSYCHOLOGIC'
}

export default function ModelForm() {

    const [currentForm, setCurrentForm] = useState<ModelFormEnum>(ModelFormEnum.DEMOGRAPHIC)
    const [data, setData] = useState<Partial<PredictDto>>()
    const [predictResult, setPredictResult] = useState<string | null>(null); // Initialize with null

    const handleAddDemographicData = (demographicData: PredictDemographicDto) => {
        setData(prevData => ({
            ...prevData,
            ...demographicData
        }));
        setCurrentForm(ModelFormEnum.PSYCHOLOGIC)
    }

    const handleAddPsychologicData = async (psychologicData: PredictPsychologicDto) => {
        setData(prevData => ({
            ...prevData,
            ...psychologicData
        }));
       
        const requestData = {
            age: data?.PredictDemographicSchema?.age,
            gender: data?.PredictDemographicSchema?.gender,
            education: data?.PredictDemographicSchema?.education,
            country: data?.PredictDemographicSchema?.country,
            ethnicity: data?.PredictDemographicSchema?.ethnicity,

            n_score: data?.PredictPsychologicSchema?.nScore,
            e_score: data?.PredictPsychologicSchema?.eScore,
            o_score: data?.PredictPsychologicSchema?.oScore,
            a_score: data?.PredictPsychologicSchema?.aScore,
            c_score: data?.PredictPsychologicSchema?.cScore,
            impulsive: data?.PredictPsychologicSchema?.impulsive,
            ss: data?.PredictPsychologicSchema?.ss,

        }

        console.log(requestData);
        
        try {
            const baseURL = 'http://localhost:8000';
            const response = await axios.post(`${baseURL}/predict`, requestData);
    
            if (response.status === 200) {
                console.log(response);
                
                setPredictResult(response.data.prediction); // Assuming Flask returns { prediction: result } in JSON
            } else {
                throw new Error('Failed to get prediction');
            }
    
        } catch (error) {
            console.error('Error:', error);
            // Handle error scenario in your UI if needed
        }   
    }

    return (
        <div className="flex flex-col min-h-screen justify-center items-center w-full h-full relative py-32">

            <div className="flex flex-col justify-center items-center h-full gap-y-16 bg-light-background rounded-2xl 
            bg-opacity-20 p-16">

                <div className="flex flex-col justify-center items-center w-full h-full gap-y-2">

                    <h3 className="text-5xl font-medium text-light-accent">Try our model for free</h3>
                    <p className="text-xl text-dark-primary">start by inputting the demographic characteristic</p>

                </div>

                <ModelDemographicForm currentForm={currentForm} handleAddData={handleAddDemographicData} />
                <ModelPsychologicForm currentForm={currentForm} handleAddData={handleAddPsychologicData} />
            </div>
        </div>
    )
}