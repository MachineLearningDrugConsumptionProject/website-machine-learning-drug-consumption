import { MemoizedStars } from "../components/aceternity-ui/TextReveal";
import Card from "../components/card/Card";
import ModelForm from "../components/pages/home/model/ModelForm";

export default function EDA() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-dark-background relative py-32">
            <div className="flex flex-col min-h-screen items-center w-full h-full gap-y-16">

                <div className="flex flex-col h-full items-center w-full gap-4">
                    <h3 className="text-5xl font-medium text-light-accent mb-2">Data Exploration</h3>
                    <Card title="data.head()" description="Displaying Initial Data" imagePath="/assets/images/EDA/data_head.jpg" />
                    <Card title="data.info()" description="Displaying Data Information" imagePath="/assets/images/EDA/data_info.jpg" />
                    <Card title="data.describe()" description="Data Summary Statistics" imagePath="/assets/images/EDA/data_desc.jpg" />
                    <Card title="np.round(data.isnull().mean() * 100, 1)" description="Displaying Data Null Percentage" imagePath="/assets/images/EDA/data_null.jpg" />
                    <Card title="data.var()" description="Displaying Data Variance" imagePath="/assets/images/EDA/data_var.jpg" />
                    <Card title="data.hist()" description="Displaying Histogram for Each Column" imagePath="/assets/images/EDA/hist.jpg" />
                    <Card title="sns.boxplot()" description="To See Outlier Data" imagePath="/assets/images/EDA/box.jpg" />
                    <Card title="data.corr()" description="To See The Correlation" imagePath="/assets/images/EDA/corr.jpg" />
                </div>

                <div className="flex flex-col h-full items-center w-full gap-4">
                    <h3 className="text-5xl font-medium text-light-accent mb-2">Data Visualization</h3>
                    <Card title="sns.histplot()" description="Displaying Plot by Drug Usage" imagePath="/assets/images/EDA/hist_ic.jpg" />
                    <Card title="sns.FacetGrid()" description="Display FacetGrid with Hist of the NScore for different combinations of Gender and Education" imagePath="/assets/images/EDA/face.jpg" />
                    <Card title="sns.kdeplot()" description="Display KDE Plot for Numerical Features" imagePath="/assets/images/EDA/kde.jpg" />
                    <Card title="sns.violinplot()" description="Displaying Violin Plot for Categorical Features" imagePath="/assets/images/EDA/violin.jpg" />
                    <Card title="TSNE()" description="Displaying TSNE for each categorical feature" imagePath="/assets/images/EDA/tsne.jpg" />
                    <Card title="sns.heatmap(data.corr())" description="Displaying Heatmap" imagePath="/assets/images/EDA/heatmap.jpg" />
                </div>

                <div className="flex flex-col h-full items-center w-full gap-4">
                    <h3 className="text-5xl font-medium text-light-accent mb-2">Data Preprocessing</h3>
                    <Card title="data.replace()" description="Replacing Data with New Values" imagePath="/assets/images/EDA/replace.jpg" />
                    {/* <Card title="PolynomialFeatures()" description="Feature Engineering" imagePath="/assets/images/EDA/feature.jpg"/> */}
                    <Card title="train_test_split()" description="Splitting Data into Test and Train" imagePath="/assets/images/EDA/traintest.jpg" />
                    <Card title="RobustScaler()" description="Scale Feature" imagePath="/assets/images/EDA/scaler.jpg" />
                </div>
            </div>


            <MemoizedStars />
        </main>
    )
}