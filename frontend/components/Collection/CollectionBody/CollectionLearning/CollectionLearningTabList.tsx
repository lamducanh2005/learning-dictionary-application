import {CollectionContext} from "Frontend/components/Collection/CollectionBody";
import {useContext} from "react";
import 'Frontend/themes/Collection/CollectionLearning/CollectionLearningTabList.css';
import Word from "Frontend/generated/com/application/models/Word";
import {
    CollectionLearningContext
} from "Frontend/components/Collection/CollectionBody/CollectionLearning/CollectionLearning";

export default function CollectionLearningTabList(props: any) {
    const collection = useContext(CollectionContext);
    const CollectionLearning = useContext(CollectionLearningContext);

    return (
        <div className={"collection-learning-tab-list"}>
            {collection.words?.map((word: any, index: number) => {
                return (
                    <div
                        key={word.id}
                        className={"collection-learning-tab-item" + (CollectionLearning.tabIndex === index ? " active" : "")}
                        onClick={() => CollectionLearning.setTabIndex(index)}
                    >
                        {word.word}
                    </div>
                )
            })}
        </div>
    )
}