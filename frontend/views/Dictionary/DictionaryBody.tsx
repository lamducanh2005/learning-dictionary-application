import LambdaDictionaryResults from "Frontend/components/LambdaSearch/LambdaDictionaryResults";

export default function DictionaryBody(props : any) {
    return(
        <div className={"dictionary-view-body"}>
            <LambdaDictionaryResults results={props.results} />
        </div>
    )
}