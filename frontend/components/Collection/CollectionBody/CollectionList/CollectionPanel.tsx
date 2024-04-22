import PanelHeader from "Frontend/components/Collection/CollectionBody/CollectionList/CollectionPanel/PanelHeader";
import PanelWordAmount
    from "Frontend/components/Collection/CollectionBody/CollectionList/CollectionPanel/PanelWordAmount";
import PanelLevelProportion
    from "Frontend/components/Collection/CollectionBody/CollectionList/CollectionPanel/PanelLevelProportion";
import PanelMasteryPercentage
    from "Frontend/components/Collection/CollectionBody/CollectionList/CollectionPanel/PanelMasteryPercentage";
import PanelWordList from "Frontend/components/Collection/CollectionBody/CollectionList/CollectionPanel/PanelWordList";
import PanelActions from "Frontend/components/Collection/CollectionBody/CollectionList/CollectionPanel/PanelActions";
import 'Frontend/themes/Collection/CollectionList/CollectionPanel.css';
import {motion} from "framer-motion";

export default function CollectionPanel() {
    return (
        <div
            className={"collection-panel"}
            // initial={{ opacity: 0, scale: 0.9 }}
            // animate={{ opacity: 1, scale: 1 }}
        >
            <PanelHeader/>
            <PanelWordAmount/>
            <PanelLevelProportion/>
            <PanelMasteryPercentage/>
            <PanelWordList/>
            <PanelActions/>
        </div>
    )
}