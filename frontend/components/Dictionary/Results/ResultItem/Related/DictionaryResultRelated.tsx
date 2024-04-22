import DictionaryResultRelatedItem
    from "Frontend/components/Dictionary/Results/ResultItem/Related/DictionaryResultRelatedItem";
import {WordContext} from "Frontend/components/Dictionary/Results/DictionaryResultItem";
import {useContext, useEffect, useState} from "react";
import Word from "Frontend/generated/com/application/models/Word";
import WordComparison from "Frontend/generated/com/application/models/WordComparison";
import {WordComparisonService} from "Frontend/generated/endpoints";
import 'Frontend/themes/Dictionary/Results/ResultItem/DictionaryResultRelated.css';

export default function DictionaryResultRelated(props : any) {

    const word: Word = useContext(WordContext);
    const [relatedList, setRelatedList] = useState([] as WordComparison[]);

    useEffect(() => {
        const updateRelatedList = async () =>
            setRelatedList(await WordComparisonService.getComparisonsByWordId((word.id) ? word.id : 0));
        updateRelatedList();
    }, []);

    return(
        <div className={"dictionary-result-related"}>
            <div className={"title"}>Các từ liên quan</div>
            <div className={"wrapper"}>
                {relatedList.map((relatedItem: any) => {
                    return <DictionaryResultRelatedItem key={relatedItem.id} relatedItem={relatedItem}/>
                })}
            </div>
        </div>
    )
}