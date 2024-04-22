import CollectionPublicList from "Frontend/components/Collection/CollectionBody/CollectionPublicList";
import CollectionPrivateList from "Frontend/components/Collection/CollectionBody/CollectionPrivateList";
import CollectionPanel from "Frontend/components/Collection/CollectionBody/CollectionList/CollectionPanel";
import Collection from "Frontend/generated/com/application/models/Collection";
import {createContext, useRef, useState} from "react";
import 'Frontend/themes/Collection/CollectionBody.css';
import {CollectionService} from "Frontend/generated/endpoints";

export const CollectionContext = createContext({} as Collection);

export default function CollectionBody() {

    const [collection, setCollection] = useState<Collection>({} as Collection);
    const [isAnyOpen, setIsAnyOpen] = useState<boolean>(false);
    const startOfPanel = useRef<null | HTMLDivElement>(null);
    const handleOpen = async (collectionId: number) => {
        setCollection(await CollectionService.getCollectionById(collectionId));
        setIsAnyOpen(true);
        setTimeout(() => {
            startOfPanel.current?.scrollIntoView({behavior: "smooth"});
        }, 1);

    }

    return (
        <div className={"collection-body"}>
            <CollectionPrivateList onOpen={handleOpen}/>

            <CollectionContext.Provider value={collection}>
                <div style={{padding: 50,}} ref={startOfPanel}/>
                {isAnyOpen ? <CollectionPanel key={collection.id}/> : <></>}
            </CollectionContext.Provider>

        </div>
    )
}