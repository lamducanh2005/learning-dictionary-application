import LambdaHeader from "Frontend/components/LambdaComponents/LambdaHeader/LambdaHeader";
import LambdaNavigationButton from "Frontend/components/LambdaComponents/LambdaNavigation/LambdaNavigationButton";
import LambdaHeaderTitle from "Frontend/components/LambdaComponents/LambdaHeader/LambdaHeaderTitle";
import DictionarySearchBox from "Frontend/components/Dictionary/Search/DictionarySearchBox";
import 'Frontend/themes/Dictionary/DictionaryHeader.css';
import {useContext} from "react";
import {ProfileContext} from "Frontend/App";

export default function DictionaryHeader(props : any) {

    const profile = useContext(ProfileContext);

    return(
        <div className={"dictionary-view-header"}>
            <LambdaHeader>
                <LambdaNavigationButton/>
                <div style={{width: "20px"}}/>
                <LambdaHeaderTitle title={"Lambda Dictionary"} />
                <div className={"flex-spacer"}/>
                <DictionarySearchBox onSearch={props.onSearch}  />
            </LambdaHeader>
        </div>
    )
}