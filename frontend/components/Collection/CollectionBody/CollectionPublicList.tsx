import Collection from "Frontend/generated/com/application/models/Collection";
import {useEffect, useState} from "react";
import {CollectionService} from "Frontend/generated/endpoints";
import CollectionPublicItem from "Frontend/components/Collection/CollectionBody/CollectionList/CollectionPublicItem";
import 'Frontend/themes/Collection/CollectionList/CollectionPublicList.css';

export default function CollectionPublicList(props: any) {

    const [collections, setCollections] = useState<Collection[]>([]);

    useEffect(() => {
        const updateCollections = async () => {
            const response = await CollectionService.getAllCollectionsByProfileId(0);
            if (response.length > 0) setCollections(response);
        }
        updateCollections();
    }, [props.isRefresh]);

    return (
        <div className={"collection-public-list"}>
            <div className={"header"}>
                <div className={"title"}>Bộ sưu tập hệ thống</div>
            </div>
            <div className={"body"}>
                {
                    collections.map((collection: Collection) => {
                        return <CollectionPublicItem key={collection.id} collection={collection}
                                                     onClick={props.onOpen}/>
                    })
                }
            </div>
        </div>
    )
}