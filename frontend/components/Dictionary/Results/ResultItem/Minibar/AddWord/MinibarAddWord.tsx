import {useContext, useEffect, useState} from "react";
import {WordContext} from "Frontend/components/Dictionary/Results/DictionaryResultItem";
import {ProfileContext} from "Frontend/App";
import Collection from "Frontend/generated/com/application/models/Collection";
import {CollectionService} from "Frontend/generated/endpoints";
import CollectionItem from "Frontend/components/Dictionary/Results/ResultItem/Minibar/AddWord/CollectionItem";

export default function MinibarAddWord(props: any) {

    const profile = useContext(ProfileContext);
    const word = useContext(WordContext);
    const [collections, setCollections] = useState<Collection[]>();
    useEffect(() => {
        const updateCollections = async () => {
            const response = await CollectionService.getAllCollectionsByProfileId(profile.id ? profile.id : 1);
            setCollections(response);
        }
        updateCollections();
    }, [word]);

    return (
        <div className={"minibar-add-word"}>
            {collections?.map((collection) => {
                return <CollectionItem key={collection.id} collection={collection}/>
            })}
        </div>
    )
}