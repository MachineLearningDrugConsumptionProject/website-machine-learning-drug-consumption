'use client'

import { useRef, useState } from "react";
import { MemoizedStars } from "../components/aceternity-ui/TextReveal";
import ModelForm, { ModelFormEnum } from "../components/pages/home/model/ModelForm";
import { PredictDemographicDto, PredictDto, PredictPsychologicDto } from "@/dto/PredictDto";
import axios, { all } from "axios";
import ModelPredictResult from "../components/pages/home/model/ModelPredictResult";
import { useInView } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Model() {

    const [currentForm, setCurrentForm] = useState<ModelFormEnum>(ModelFormEnum.DEMOGRAPHIC)
    const [data, setData] = useState<Partial<PredictDto>>()
    const [predictionResult, setPredictionResult] = useState<string | null>(null)

    const handleAddDemographicData = (demographicData: PredictDemographicDto) => {
        setData(prevData => ({
            ...prevData,
            ...demographicData
        }));
    }

    const handleAddPsychologicData = async (psychologicData: PredictPsychologicDto) => {
        setData(prevData => ({
            ...prevData,
            ...psychologicData
        }));

        try {
            const baseURL = 'http://127.0.0.1:8000';
            const response = await axios.post(`${baseURL}/api/predict`, data);

            if (response.status === 200) {
                console.log(response);

                setPredictionResult(response.data.prediction);
            } else {
                throw new Error('Failed to get prediction');
            }

        } catch (error) {
            console.error('Error:', error);
        }
    }

    const handleClear = () => {

        setData({})
        setPredictionResult(null)
        setCurrentForm(ModelFormEnum.DEMOGRAPHIC)
    }

  

    return (
        <main className="flex min-h-screen flex-col items-center bg-dark-background relative">
            <ModelForm handleAddDemographicData={handleAddDemographicData} handleAddPsychologicData={handleAddPsychologicData} currentForm={currentForm} setCurrentForm={setCurrentForm} predictionResult={predictionResult}/>

            {(predictionResult! && currentForm == ModelFormEnum.PSYCHOLOGIC) &&
                <ModelPredictResult result={predictionResult!} handleClear={handleClear} />
            }
            <MemoizedStars />
        </main>
    )
}