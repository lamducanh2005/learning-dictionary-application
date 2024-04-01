import Word from "Frontend/generated/com/application/models/Word";
import LambdaDictionaryResultItem from "Frontend/components/LambdaSearch/LambdaDictionaryResultItem";

export default function LambdaDictionaryResults(props : any) {
    return(
        <div className={"lambda-dictionary-search-results"}>
            {
                props.results.map((result : Word) => {
                    return <LambdaDictionaryResultItem key={result.id} word={result} />
                })
            }
        </div>
    )
}