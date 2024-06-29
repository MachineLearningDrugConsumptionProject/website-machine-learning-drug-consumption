interface ModelPredictResultProps {
    result: string
    handleClear: () => void
}

export default function ModelPredictResult({ result, handleClear }: ModelPredictResultProps) {

    return (

        <div className="flex flex-col w-full min-h-screen items-center justify-center gap-y-12">

                <p className="text-2xl text-dark-primary">Predicted Drug</p>
            <div className="flex flex-col w-full h-full items-center justify-center gap-y-2">
                <h3 className="text-6xl text-dark-accent font-medium">{result}</h3>
            </div>

            <button onClick={handleClear}
                className="relative mx-auto w-fit px-4 py-2 text-lg rounded-full border border-dark-primary font-semibold backdrop-blur overflow-hidden group">
                <span className="absolute inset-0 bg-light-accent w-0 transition-all duration-500 origin-left group-hover:w-full"></span>
                <span className="relative z-10 transition-all duration-500 text-light-accent group-hover:text-dark-background">
                    Try Again
                </span>
            </button>
        </div>
    )
}