import {useContext, useEffect, useState} from "react";
import Collection from "Frontend/generated/com/application/models/Collection";
import {CollectionService} from "Frontend/generated/endpoints";
import {ProfileContext} from "Frontend/App";
import 'Frontend/themes/Collection/CollectionList/CollectionPrivateList.css';
import CollectionPrivateItem from "Frontend/components/Collection/CollectionBody/PrivateList/CollectionPrivateItem";
import CollectionCreateButton from "Frontend/components/Collection/CollectionBody/PrivateList/CollectionCreateButton";
import {set} from "@polymer/polymer/lib/utils/path";

export default function CollectionPrivateList(props: any) {

    const profile = useContext(ProfileContext)
    const [collections, setCollections] = useState<Collection[]>([]);
    const [isAdding, setIsAdding] = useState<boolean>();

    useEffect(() => {
        const updateCollections = async () => {
            const response =
                await CollectionService.getAllCollectionsByProfileId((profile.id) ? profile.id : 1);
            setCollections(response);
            console.table(response);
        }
        updateCollections();

    }, [isAdding]);

    const handleAdd = async (newCollection: Collection) => {
        await CollectionService.addCollection(newCollection);
        setIsAdding(!isAdding);
    }

    return (
        <div className={"collection-private-list"}>
            <div className={"header"}>
                <div className={"title"}>Bộ sưu tập của {profile.name}</div>
                <div style={{flex: 1}}/>
                <CollectionCreateButton onAdd={handleAdd}/>
            </div>
            <div className={"body"}>
                {collections.map((collection) => {
                    return <CollectionPrivateItem key={collection.id} collection={collection}/>
                })}
            </div>
        </div>
    )
}