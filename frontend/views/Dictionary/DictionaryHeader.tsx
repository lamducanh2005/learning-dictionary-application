import LambdaHeader from "Frontend/components/LambdaHeader/LambdaHeader";
import LambdaNavigationButton from "Frontend/components/LambdaNavigation/LambdaNavigationButton";
import LambdaHeaderTitle from "Frontend/components/LambdaHeader/LambdaHeaderTitle";
import LambdaDictionarySearchBox from "Frontend/components/LambdaSearch/LambdaDictionarySearchBox";

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
                <LambdaDictionarySearchBox onSearch={props.onSearch}  />
            </LambdaHeader>
        </div>
    )
}