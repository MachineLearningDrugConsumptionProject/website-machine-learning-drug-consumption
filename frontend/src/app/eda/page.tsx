import Card from "../components/card/Card";
import ModelForm from "../components/pages/home/model/ModelForm";

export default function Model() {

    return (
        <main className="flex min-h-screen flex-col items-center bg-dark-background">
            <div className="flex flex-col min-h-screen items-center w-full h-full py-32">
                <h3 className="text-5xl font-medium text-light-accent">Data Exploration</h3>
                <div className="flex flex-col min-h-screen items-center w-full h-full m-8 gap-4">
                    <Card title="testing" description="testinggg" imagePath="/assets/images/team/WIN_20230504_16_36_44_Pro.jpg"/>
                    <Card title="testing" description="testinggg" imagePath="/assets/images/team/WIN_20230504_16_36_44_Pro.jpg"/>
                    <Card title="testing" description="testinggg" imagePath="/assets/images/team/WIN_20230504_16_36_44_Pro.jpg"/>
                    <Card title="testing" description="testinggg" imagePath="/assets/images/team/WIN_20230504_16_36_44_Pro.jpg"/>
                    <Card title="testing" description="testinggg" imagePath="/assets/images/team/WIN_20230504_16_36_44_Pro.jpg"/>
                    <Card title="testing" description="testinggg" imagePath="/assets/images/team/WIN_20230504_16_36_44_Pro.jpg"/>
                    <Card title="testing" description="testinggg" imagePath="/assets/images/team/WIN_20230504_16_36_44_Pro.jpg"/>
                    <Card title="testing" description="testinggg" imagePath="/assets/images/team/WIN_20230504_16_36_44_Pro.jpg"/>
                </div>
            </div>
        </main>
    )
}