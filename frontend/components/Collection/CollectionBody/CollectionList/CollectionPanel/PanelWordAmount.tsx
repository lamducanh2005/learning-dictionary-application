import 'Frontend/themes/Collection/CollectionList/CollectionPanel/PanelWordAmount.css';
import {CollectionContext} from "Frontend/components/Collection/CollectionBody";
import {useContext} from "react";

export default function PanelWordAmount() {

    const collection = useContext(CollectionContext)

    return (
        <div className={"panel-word-amount"}>
            <div className={"title"}>
                Bộ sưu tập này gồm có
            </div>
            <div className={"amount"}>
                {(collection.words) ? collection.words.length : 0}
                <span style={{fontSize: 20}}> từ vựng</span>
            </div>
        </div>
    )
}