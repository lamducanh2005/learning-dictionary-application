import {useEffect, useState} from "react";
import WordComparison from "Frontend/generated/com/application/models/WordComparison";
import DevResultRelatedItem from "Frontend/views/Developer/Dictionary/DevDictionaryResults/DevResultRelatedItem";
import 'Frontend/themes/Developer/DevDictionary/DevDictionaryResults/DevResultRelated.css';
import {WordComparisonService} from "Frontend/generated/endpoints";

export default function DevResultRelated(props: any) {

    const [comparisons, setComparisons] = useState<WordComparison[]>([]);
    const [hasUpdated, setHasUpdated] = useState(false);

    const addComparison = async () => {
        const newComparison: WordComparison = {
            wordId: props.wordId,
            comparedWord: "",
            score: 75,
            explaining: ""
        }

        await WordComparisonService.addComparison(newComparison);
        setHasUpdated(!hasUpdated);
        console.log("Added comparison");
    }

    useEffect(() => {
        const updateComparisons = async () => {
            const response = await WordComparisonService.getComparisonsByWordId(props.wordId);
            setComparisons(response);
        }
        updateComparisons();
    }, [props.wordId, hasUpdated]);

    return (
        <div className={"dev-result-related"}>
            <div className={"wrapper"}>
                <div>Các từ liên quan:</div>
                <div style={{flex: 1}}></div>
                <button onClick={addComparison}>Thêm từ liên quan</button>
            </div>
            {comparisons.map((comparison: WordComparison) => {
                return (
                    <DevResultRelatedItem
                        key={comparison.id}
                        wordId={props.wordId}
                        comparison={comparison}
                        hasUpdated={hasUpdated}
                        onUpdated={setHasUpdated}
                    />
                )
            })}
        </div>
    );
}