import PanelHeader from "Frontend/components/Collection/CollectionBody/CollectionPanel/PanelHeader";
import PanelWordAmount
    from "Frontend/components/Collection/CollectionBody/CollectionPanel/PanelWordAmount";
import PanelLevelProportion
    from "Frontend/components/Collection/CollectionBody/CollectionPanel/PanelLevelProportion";
import PanelMasteryPercentage
    from "Frontend/components/Collection/CollectionBody/CollectionPanel/PanelMasteryPercentage";
import PanelWordList from "Frontend/components/Collection/CollectionBody/CollectionPanel/PanelWordList";
import PanelActions from "Frontend/components/Collection/CollectionBody/CollectionPanel/PanelActions";
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