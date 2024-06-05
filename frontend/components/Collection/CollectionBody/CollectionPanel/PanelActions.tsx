import 'Frontend/themes/Collection/CollectionList/CollectionPanel/PanelActions.css';
import PanelActionLearningButton
    from "Frontend/components/Collection/CollectionBody/CollectionPanel/PanelActions/PanelActionLearningButton";
import PanelActionMasteringButton
    from "Frontend/components/Collection/CollectionBody/CollectionPanel/PanelActions/PanelActionMasteringButton";
import PanelActionEditButton
    from "Frontend/components/Collection/CollectionBody/CollectionPanel/PanelActions/PanelActionEditButton";
import {CollectionContext} from "Frontend/components/Collection/CollectionBody";
import {useContext} from "react";

export default function PanelActions() {
    const collection = useContext(CollectionContext)
    return (
        <div className={"panel-actions"}>
            <PanelActionLearningButton/>
            <PanelActionMasteringButton/>
            <div style={{flex: 1, minHeight: 50}}/>
            {  // @ts-ignore
                (collection.profileId > 0) && <PanelActionEditButton/>
            }
        </div>
    )
}