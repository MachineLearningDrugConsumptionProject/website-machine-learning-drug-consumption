import { MemoizedStars } from "../components/aceternity-ui/TextReveal";
import ModelForm from "../components/pages/home/model/ModelForm";

export default function Model() {

    return (
        <main className="flex min-h-screen flex-col items-center bg-dark-background relative">
            <ModelForm />
            <MemoizedStars />
        </main>
    )
}