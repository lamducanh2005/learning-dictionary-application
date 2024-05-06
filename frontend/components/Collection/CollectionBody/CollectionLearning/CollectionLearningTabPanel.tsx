import {useContext} from "react";
import {
    CollectionLearningContext
} from "Frontend/components/Collection/CollectionBody/CollectionLearning/CollectionLearning";
import {CollectionContext} from "Frontend/components/Collection/CollectionBody";
import DictionaryResultItem from "Frontend/components/Dictionary/Results/DictionaryResultItem";
import 'Frontend/themes/Collection/CollectionLearning/CollectionLearningTabPanel.css';

export default function CollectionLearningTabPanel(props: any) {
    const CollectionLearning = useContext(CollectionLearningContext);
    const collection = useContext(CollectionContext);

    return (
        <div className={"collection-learning-tab-panel"}>
            <DictionaryResultItem //@ts-ignore
                key={collection.words[CollectionLearning.tabIndex].id} // @ts-ignore
                word={collection.words[CollectionLearning.tabIndex]}
            />
        </div>
    )
}