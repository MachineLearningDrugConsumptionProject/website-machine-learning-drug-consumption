'use client'

import { useRef, useState } from "react";
import ModelDemographicForm from "./ModelDemographicForm";
import { PredictDemographicDto, PredictDto, PredictPsychologicDto } from "@/dto/PredictDto";
import ModelPsychologicForm from "./ModelPsychologicForm";
import axios from "axios";
import { useInView } from "framer-motion";
import { ArrowDown } from "lucide-react";

export enum ModelFormEnum {
    DEMOGRAPHIC = 'DEMOGRAPHIC',
    PSYCHOLOGIC = 'PSYCHOLOGIC'
}

interface ModelFormProps {
    handleAddDemographicData: (data: PredictDemographicDto) => void,
    handleAddPsychologicData: (data: PredictPsychologicDto) => void,
    currentForm: ModelFormEnum
    setCurrentForm: (form: ModelFormEnum) => void,
    predictionResult: string | null
}

export default function ModelForm({ handleAddDemographicData, handleAddPsychologicData, currentForm, setCurrentForm, predictionResult }: ModelFormProps) {

    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 0.2 })

    return (
        <div ref={ref} className="flex flex-col min-h-screen justify-center items-center w-full h-full relative py-32">

            <div className="flex flex-col justify-center items-center h-full gap-y-16 bg-light-background rounded-2xl 
            bg-opacity-20 p-16">

                <div className="flex flex-col justify-center items-center w-full h-full gap-y-2">

                    <h3 className="text-5xl font-medium text-light-accent">Try our model for free</h3>
                    <p className="text-xl text-dark-primary">start by inputting the demographic characteristic</p>

                </div>

                <ModelDemographicForm currentForm={currentForm} setCurrentForm={setCurrentForm} handleAddData={handleAddDemographicData} />
                <ModelPsychologicForm currentForm={currentForm} setCurrentForm={setCurrentForm} handleAddData={handleAddPsychologicData} />
            </div>

            {
                (predictionResult != null && isInView && currentForm === ModelFormEnum.PSYCHOLOGIC)  &&
                <div className="absolute flex w-full px-32 justify-between bottom-32 animate-pulse">
                    <ArrowDown size={40} className="text-dark-accent animate-bounce opacity-50" />
                    <ArrowDown size={40} className="text-dark-accent animate-bounce opacity-50" />
                </div>
            }
        </div>
    )
}