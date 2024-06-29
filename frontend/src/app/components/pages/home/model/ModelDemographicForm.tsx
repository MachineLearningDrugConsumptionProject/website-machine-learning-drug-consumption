'use client'

import SelectInput from "@/app/components/forms/SelectInput";
import { PredictDemographicDto, PredictDemographicSchema, PredictDto } from "@/dto/PredictDto";
import { cn } from "@/utils/cn";
import { zodResolver } from "@hookform/resolvers/zod";
import { Baby, CircleArrowDown } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ModelFormEnum } from "./ModelForm";
// ['Age', 'Gender', 'Education', 'Country', 'Ethnicity']

interface ModelDemographicFormProps {
    currentForm: ModelFormEnum
    handleAddData: (data: PredictDemographicDto) => void
    setCurrentForm: (form: ModelFormEnum) => void
}

export default function ModelDemographicForm({ currentForm, handleAddData, setCurrentForm }: ModelDemographicFormProps) {

    const ageOptions = [
        '18 - 24',
        '25 - 34',
        '35 - 44',
        '45 - 54',
        '55 - 64',
        '65+'
    ]

    const genderOptions = [
        'Female',
        'Male'
    ];

    const educationOptions = [
        'Left School Before 16 years',
        'Left School at 16 years',
        'Left School at 17 years',
        'Left School at 18 years',
        'Some College, No Certificate Or Degree',
        'Professional Certificate/Diploma',
        'University Degree',
        'Masters Degree',
        'Doctorate Degree'
    ];

    const countryOptions = [
        'Australia',
        'Canada',
        'New Zealand',
        'Other',
        'Republic of Ireland',
        'UK',
        'USA'
    ];

    const ethnicityOptions = [
        'Asian',
        'Black',
        'Mixed-Black/Asian',
        'Mixed-White/Asian',
        'Mixed-White/Black',
        'Other',
        'White'
    ];

    const { register, handleSubmit, formState: { errors, isValid } } = useForm<PredictDemographicDto>({ resolver: zodResolver(PredictDemographicSchema) })

    const onSubmit: SubmitHandler<PredictDemographicDto> = (data) => {
        handleAddData(data)
        setCurrentForm(ModelFormEnum.PSYCHOLOGIC)
    }

    return (

        <form onSubmit={handleSubmit(onSubmit)} className={cn(`container grid grid-cols-2 w-full h-full gap-x-8 gap-y-6 transition-all duration-500`,
            { 'opacity-0 hidden': currentForm === ModelFormEnum.PSYCHOLOGIC }
        )
        }>

            <SelectInput
                icon={<Baby size={24} className="text-dark-accent" />}
                label="Age"
                desc="Select the age group of the individual."
                options={ageOptions}
                error={errors.age?.message}
                {...register('age')}
            />
            <SelectInput
                icon={<Baby size={24} className="text-dark-accent" />}
                label="Gender"
                desc="Select the gender identity of the individual."
                options={genderOptions}
                error={errors.gender?.message}
                {...register('gender')}
            />
            <SelectInput
                icon={<Baby size={24} className="text-dark-accent" />}
                label="Country"
                desc="Select the country of residence."
                options={countryOptions}
                error={errors.country?.message}
                {...register('country')}
            />
            <SelectInput
                icon={<Baby size={24} className="text-dark-accent" />}
                label="Ethnicity"
                desc="Select the ethnic group the individual belongs to"
                options={ethnicityOptions}
                error={errors.ethnicity?.message}
                {...register('ethnicity')}
            />

            <div className="col-span-2 flex w-full justify-center">
                <SelectInput
                    icon={<Baby size={24} className="text-dark-accent" />}
                    label="Education"
                    desc="Select the highest level of education completed."
                    options={educationOptions}
                    error={errors.education?.message}
                    {...register('education')}
                />
            </div>
            <div className="absolute w-full bottom-10 left-0 flex">
                <button type="submit" className={`w-fit h-fit mx-auto  ${isValid ? 'animate-bounce ' : ''}`}>
                    <CircleArrowDown size={40} className="text-dark-accent " />
                </button>
            </div>

        </form>
    )
}