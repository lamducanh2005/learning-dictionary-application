import LambdaHeader from "Frontend/components/LambdaComponents/LambdaHeader/LambdaHeader";
import LambdaNavigationButton from "Frontend/components/LambdaComponents/LambdaNavigation/LambdaNavigationButton";
import LambdaHeaderTitle from "Frontend/components/LambdaComponents/LambdaHeader/LambdaHeaderTitle";
import DictionarySearchBox from "Frontend/components/Dictionary/Search/DictionarySearchBox";

export default function DictionaryHeader(props : any) {
    return(
        <div
            className={"dictionary-view-header"}
            style={{ position: 'sticky', top: 0, zIndex: 1000, padding: 10}}
        >
            <LambdaHeader>
                <LambdaNavigationButton/>
                <div style={{width: "20px"}}/>
                <LambdaHeaderTitle title={"Lambda Dictionary"} />
                <div style={{flex: 1}}/>
                <DictionarySearchBox onSearch={props.onSearch}  />
            </LambdaHeader>
        </div>
    )
}