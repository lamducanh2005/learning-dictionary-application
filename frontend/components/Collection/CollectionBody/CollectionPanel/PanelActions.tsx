import 'Frontend/themes/Collection/CollectionList/CollectionPanel/PanelActions.css';
import PanelActionLearningButton
    from "Frontend/components/Collection/CollectionBody/CollectionPanel/PanelActions/PanelActionLearningButton";
import PanelActionMasteringButton
    from "Frontend/components/Collection/CollectionBody/CollectionPanel/PanelActions/PanelActionMasteringButton";
import {motion} from 'framer-motion';
import PanelActionEditButton
    from "Frontend/components/Collection/CollectionBody/CollectionPanel/PanelActions/PanelActionEditButton";

export default function PanelActions() {

    return (
        <div className={"panel-actions"}>
            <PanelActionLearningButton/>
            <PanelActionMasteringButton/>
            <div style={{flex: 1, minHeight: 50}}/>
            <PanelActionEditButton/>
        </div>
    )
}