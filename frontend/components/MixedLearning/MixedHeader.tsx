import LambdaHeader from "Frontend/components/LambdaComponents/LambdaHeader/LambdaHeader";
import LambdaNavigationButton from "Frontend/components/LambdaComponents/LambdaNavigation/LambdaNavigationButton";
import LambdaHeaderTitle from "Frontend/components/LambdaComponents/LambdaHeader/LambdaHeaderTitle";

export default function MixedHeader(props: any) {
    return (
        <div
            className={"mixed-view-header"}
            style={{position: 'sticky', top: 0, zIndex: 1000, padding: 10}}
        >
            <LambdaHeader>
                <LambdaNavigationButton/>
                <div style={{width: "20px"}}/>
                <LambdaHeaderTitle title={"Lambda Mixed Learning"}/>
            </LambdaHeader>
        </div>
    )
}