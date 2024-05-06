import {useContext, useEffect, useState} from "react";
import Collection from "Frontend/generated/com/application/models/Collection";
import {CollectionService} from "Frontend/generated/endpoints";
import {ProfileContext} from "Frontend/App";
import 'Frontend/themes/Collection/CollectionList/CollectionPrivateList.css';
import CollectionPrivateItem from "Frontend/components/Collection/CollectionBody/CollectionList/CollectionPrivateItem";
import CollectionCreateButton
    from "Frontend/components/Collection/CollectionBody/CollectionList/CollectionCreateButton";
import {set} from "@polymer/polymer/lib/utils/path";

export default function CollectionPrivateList(props: any) {

    const profile = useContext(ProfileContext)
    const [collections, setCollections] = useState<Collection[]>([]);
    const [isAdding, setIsAdding] = useState<boolean>();

    useEffect(() => {
        const updateCollections = async () => {
            if (profile.id) {
                const response =
                    await CollectionService.getAllCollectionsByProfileId(profile.id);
                setCollections(response);
            }
        }
        updateCollections();
        console.log("refreshed")
    }, [isAdding, profile, props.isRefresh]);

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
                {
                    (collections.length === 0) ?
                        <div className={"placeholder"}>Bạn chưa tạo bộ sưu tập nào.</div> :
                        collections.map((collection) => {
                            return <CollectionPrivateItem onClick={props.onOpen} key={collection.id}
                                                          collection={collection}/>
                        })
                }
            </div>
        </div>
    )
}