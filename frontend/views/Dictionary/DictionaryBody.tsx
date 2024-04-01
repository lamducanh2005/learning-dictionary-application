import LambdaDictionaryResults from "Frontend/components/LambdaSearch/LambdaDictionaryResults";

export default function DictionaryBody(props : any) {
    return(
        <div
            className={"dictionary-view-body"}
            style={{marginTop: 100}}
        >
            <LambdaDictionaryResults results={props.results} />
        </div>
    )
}