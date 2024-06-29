import Card from "../components/card/Card";
import ModelForm from "../components/pages/home/model/ModelForm";

export default function Model_Details() {

    return (
        <main className="flex min-h-screen flex-col items-center bg-dark-background">
            <div className="flex flex-col min-h-screen items-center w-full h-full py-32">
                <h3 className="text-5xl font-medium text-light-accent">Model Evaluation</h3>
                <div className="flex flex-col min-h-screen items-center w-full h-full m-8 gap-4">
                    <Card title="data.head()" description="Displaying Initial Data" imagePath="/assets/images/EDA/data_head.jpg"/>
                    <Card title="data.info()" description="Displaying Data Information" imagePath="/assets/images/EDA/data_info.jpg"/>
                </div>
            </div>
        </main>
    )
}