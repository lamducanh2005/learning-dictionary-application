import LambdaHeader from "Frontend/components/LambdaComponents/LambdaHeader/LambdaHeader";
import LambdaHeaderTitle from "Frontend/components/LambdaComponents/LambdaHeader/LambdaHeaderTitle";
import 'Frontend/themes/Main/MainHeader.css';

export default function MainHeader() {
    return (
        <div className={"main-view-header"}>
            <LambdaHeader>
                <LambdaHeaderTitle title={"Lambda"}/>
            </LambdaHeader>
        </div>
    )
}