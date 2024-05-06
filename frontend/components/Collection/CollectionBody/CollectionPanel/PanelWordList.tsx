import 'Frontend/themes/Collection/CollectionList/CollectionPanel/PanelWordList.css';
import {useContext, useEffect, useState} from "react";
import {CollectionContext, PanelContext} from "Frontend/components/Collection/CollectionBody";
import Word from "Frontend/generated/com/application/models/Word";
import PanelWordListItem
    from "Frontend/components/Collection/CollectionBody/CollectionPanel/PanelWordListItem";
import {CollectionService} from "Frontend/generated/endpoints";

export default function PanelWordList() {

    const collection = useContext(CollectionContext);
    const panel = useContext(PanelContext);
    const [wordList, setWordList] = useState<Word[]>([]);

    useEffect(() => {
        const initWordList = async () => {
            if (collection.id) {
                setWordList(await CollectionService.getAllWordsByCollectionId(collection.id));
            }
        }
        initWordList();
    }, [collection]);

    const handleDelete = async (wordId: number) => {
        if (collection.id) {
            await CollectionService.removeWordFromCollection(wordId, collection.id);
            setWordList(await CollectionService.getAllWordsByCollectionId(collection.id));
            panel.reopenPanel();
        }
    }

    return (
        <div className={"panel-word-list"}>
            {   //@ts-ignore
                wordList.map((word: Word) => {
                    return <PanelWordListItem key={word.id} word={word} onDelete={handleDelete}/>
                })
            }
        </div>
    )
}