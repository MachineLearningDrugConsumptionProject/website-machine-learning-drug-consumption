'use client'

import Input from "@/app/components/forms/Input";
import SelectInput from "@/app/components/forms/SelectInput";
import { PredictDemographicDto, PredictDemographicSchema, PredictPsychologicDto, PredictPsychologicSchema } from "@/dto/PredictDto";
import { cn } from "@/utils/cn";
import { zodResolver } from "@hookform/resolvers/zod";
import { Baby, CircleArrowDown } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ModelFormEnum } from "./ModelForm";

interface ModelPsychologicFormProps {
    currentForm: ModelFormEnum,
    handleAddData: (data: PredictPsychologicDto) => void
}

export default function ModelPsychologicForm({ currentForm, handleAddData }: ModelPsychologicFormProps) {

    const { register, handleSubmit, formState: { errors, isValid } } = useForm<PredictPsychologicDto>({ resolver: zodResolver(PredictPsychologicSchema) })

    const onSubmit: SubmitHandler<PredictPsychologicDto> = (data) => {
        console.log("sumbitting data: ", data);
        handleAddData(data)
    }

    return (

        <form onSubmit={handleSubmit(onSubmit)} className={cn(`container grid grid-cols-2 w-full h-full gap-x-8 gap-y-6 transition-all duration-500`,
            { 'opacity-0 hidden': currentForm === ModelFormEnum.DEMOGRAPHIC }
        )
        }>

            <Input
                icon={<Baby size={24} className="text-dark-accent" />}
                label="Neuroticism Score"
                desc="Measures emotional instability, anxiety, and negative emotions under stress"
                error={errors.nScore?.message}
                type="number"
                min={12}
                max={60}
                {...register('nScore', {valueAsNumber: true})}
            />
            <Input
                icon={<Baby size={24} className="text-dark-accent" />}
                label="Extraversion Score"
                desc="Indicates sociability, assertiveness, positive emotions, and stimulation-seeking"
                error={errors.eScore?.message}
                type="number"
                min={12}
                max={60}
                {...register('eScore', {valueAsNumber: true})}
            />
            <Input
                icon={<Baby size={24} className="text-dark-accent" />}
                label="Openness Score"
                desc="Reflects creativity, curiosity, and openness to new ideas and experiences"
                error={errors.oScore?.message}
                type="number"
                min={12}
                max={60}
                {...register('oScore', {valueAsNumber: true})}
            />
            <Input
                icon={<Baby size={24} className="text-dark-accent" />}
                label="Agreeableness Score"
                desc="Measures kindness, empathy, cooperation, and trust in social interactions"
                error={errors.aScore?.message}
                type="number"
                min={12}
                max={60}
                {...register('aScore', {valueAsNumber: true})}
            />

            <Input
                icon={<Baby size={24} className="text-dark-accent" />}
                label="Conscientiousness Score"
                desc="Indicates organization, reliability, self-discipline, and goal-directed behavior"
                error={errors.cScore?.message}
                type="number"
                min={12}
                max={60}
                {...register('cScore', {valueAsNumber: true})}
            />
            <Input
                icon={<Baby size={24} className="text-dark-accent" />}
                label="Implusive"
                desc="Measures tendency to act on impulses without full consideration of consequences"
                error={errors.impulsive?.message}
                type="number"
                min={12}
                max={60}
                {...register('impulsive', {valueAsNumber: true})}
            />
            <Input
                icon={<Baby size={24} className="text-dark-accent" />}
                label="Sensation Seeking"
                desc="Reflects inclination towards seeking thrilling and novel experiences, and willingness to take risks"
                error={errors.ss?.message}
                type="number"
                min={12}
                max={60}
                {...register('ss', {valueAsNumber: true})}
            />

            <div className="col-span-2 w-full flex mt-8">
                <button type="submit" 
                onClick = {()=> handleSubmit}className="relative mx-auto w-fit px-4 py-2 text-lg rounded-full border border-dark-primary font-semibold backdrop-blur overflow-hidden group">
                    <span className="absolute inset-0 bg-light-accent w-0 transition-all duration-500 origin-left group-hover:w-full"></span>
                    <span className="relative z-10 transition-all duration-500 text-light-accent group-hover:text-dark-background">
                        Check our EDA
                    </span>
                </button>
            </div>

        </form>
    )
}