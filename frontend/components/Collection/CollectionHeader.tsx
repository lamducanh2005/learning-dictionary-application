import LambdaNavigationButton from "Frontend/components/LambdaComponents/LambdaNavigation/LambdaNavigationButton";
import LambdaHeaderTitle from "Frontend/components/LambdaComponents/LambdaHeader/LambdaHeaderTitle";
import LambdaHeader from "Frontend/components/LambdaComponents/LambdaHeader/LambdaHeader";
import 'Frontend/themes/Collection/CollectionHeader.css';

export default function CollectionHeader() {
    return (
        <div className={"collection-header"}>
            <LambdaHeader>
                <LambdaNavigationButton/>
                <div style={{width: "20px"}}/>
                <LambdaHeaderTitle title={"Lambda Collection"}/>
            </LambdaHeader>
        </div>
    )
}