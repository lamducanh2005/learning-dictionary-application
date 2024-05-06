import {Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay} from "@chakra-ui/react";
import NavigationProfile from "Frontend/components/LambdaComponents/LambdaNavigation/NavigationItem/NavigationProfile";
import NavigationDictionaryItem
    from "Frontend/components/LambdaComponents/LambdaNavigation/NavigationItem/NavigationDictionaryItem";
import NavigationCollectionItem
    from "Frontend/components/LambdaComponents/LambdaNavigation/NavigationItem/NavigationCollectionItem";
import NavigationAssistantItem
    from "Frontend/components/LambdaComponents/LambdaNavigation/NavigationItem/NavigationAssistantItem";

export default function AssistantHistoryPanel(props: any) {
    return (
        <Drawer isOpen={props.isOpen} onClose={props.onClose} placement={"right"}>
            <DrawerOverlay className={"assistant-history-overlay"}/>
            <DrawerContent className={"assistant-history-panel"}>
                <div className={"assistant-history-content"}>
                    <DrawerCloseButton/>
                    <DrawerHeader>Lịch sử trò chuyện</DrawerHeader>
                </div>

            </DrawerContent>
        </Drawer>
    )
}