import 'Frontend/themes/Collection/CollectionList/CollectionPanel/PanelWordList.css';
import {useContext} from "react";
import {CollectionContext} from "Frontend/components/Collection/CollectionBody";
import Word from "Frontend/generated/com/application/models/Word";
import PanelWordListItem
    from "Frontend/components/Collection/CollectionBody/CollectionList/CollectionPanel/PanelWordListItem";

export default function PanelWordList() {

    const collection = useContext(CollectionContext);


    return (
        <div className={"panel-word-list"}>
            {   //@ts-ignore
                collection.words.map((word: Word) => {
                    return <PanelWordListItem key={word.id} word={word}/>
                })
            }
        </div>
    )
}