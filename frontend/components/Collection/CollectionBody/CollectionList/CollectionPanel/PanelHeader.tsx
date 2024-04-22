import {useContext, useEffect} from "react";
import {CollectionContext} from "Frontend/components/Collection/CollectionBody";
import 'Frontend/themes/Collection/CollectionList/CollectionPanel/PanelHeader.css';

export default function PanelHeader() {

    const collection = useContext(CollectionContext)
    useEffect(() => {
        console.log(collection);
        collection.description = "This is a new description";
        console.log(collection);
    }, []);

    return (
        <div className={"panel-header"}>
            <div className={"left"}>
                <div className={"collection-name"}>{collection.name}</div>
                <div className={"collection-description"}>{collection.description}</div>
            </div>
            <div className={"right"}>
                <button className={"button"}>Click here</button>
            </div>

        </div>
    )
}