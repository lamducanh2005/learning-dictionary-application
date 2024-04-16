import CollectionDefaultList from "Frontend/components/Collection/CollectionBody/CollectionDefaultList";
import CollectionPrivateList from "Frontend/components/Collection/CollectionBody/CollectionPrivateList";

export default function CollectionBody() {
    return (
        <div
            className={"collection-body"}
            style={{paddingTop: 150, paddingBottom: 100}}
        >
            <CollectionPrivateList/>
        </div>
    )
}