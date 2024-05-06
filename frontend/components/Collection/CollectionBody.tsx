import CollectionPublicList from "Frontend/components/Collection/CollectionBody/CollectionPublicList";
import CollectionPrivateList from "Frontend/components/Collection/CollectionBody/CollectionPrivateList";
import CollectionPanel from "Frontend/components/Collection/CollectionBody/CollectionPanel";
import Collection from "Frontend/generated/com/application/models/Collection";
import {createContext, useRef, useState} from "react";
import 'Frontend/themes/Collection/CollectionBody.css';
import {CollectionService} from "Frontend/generated/endpoints";
import {set} from "@polymer/polymer/lib/utils/path";

export const CollectionContext = createContext({} as Collection);
export const PanelContext = createContext({
    closePanel: () => {
    },
    reopenPanel: () => {
    }

})
export default function CollectionBody() {

    const [collection, setCollection] = useState<Collection>({} as Collection);
    const [isAnyOpen, setIsAnyOpen] = useState<boolean>(false);
    const startOfPanel = useRef<null | HTMLDivElement>(null);
    const collectionPrivateList = useRef<null | HTMLDivElement>(null);
    const [isRefresh, setRefresh] = useState<boolean>(false);
    const handleOpen = async (collectionId: number) => {
        setCollection(await CollectionService.getCollectionById(collectionId));
        setIsAnyOpen(true);
        setTimeout(() => {
            startOfPanel.current?.scrollIntoView({behavior: "smooth"});
        }, 1);
    }

    const handleReopen = async () => {
        // @ts-ignore
        setCollection(await CollectionService.getCollectionById(collection.id));
        setIsAnyOpen(true);
        setTimeout(() => setRefresh(!isRefresh), 100);
    }

    return (
        <div className={"collection-body"}>
            <div style={{padding: 50,}} ref={collectionPrivateList}/>
            <CollectionPrivateList onOpen={handleOpen} isRefresh={isRefresh}/>

            <CollectionContext.Provider value={collection}>
                <PanelContext.Provider value={{
                    closePanel: () => {
                        collectionPrivateList.current?.scrollIntoView({behavior: "smooth"});
                        setTimeout(() => setRefresh(!isRefresh), 100);
                        setTimeout(() => setIsAnyOpen(false), 300);
                    },
                    reopenPanel: handleReopen
                }}>
                <div style={{padding: 50,}} ref={startOfPanel}/>
                {isAnyOpen ? <CollectionPanel key={collection.id}/> : <></>}
                </PanelContext.Provider>
            </CollectionContext.Provider>
        </div>
    )
}