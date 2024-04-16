import CollectionBody from "Frontend/components/Collection/CollectionBody";
import CollectionHeader from "Frontend/components/Collection/CollectionHeader";

export default function CollectionView() {
    return (
        <div className={"collection-view"}>
            <CollectionHeader/>
            <CollectionBody/>
        </div>
    )
}