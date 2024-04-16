import {Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay} from "@chakra-ui/react";
import 'Frontend/themes/LambdaComponents/LambdaNavigation/LambdaNavigation.css';
import NavigationDictionaryItem
    from "Frontend/components/LambdaComponents/LambdaNavigation/NavigationItem/NavigationDictionaryItem";
import NavigationCollectionItem
    from "Frontend/components/LambdaComponents/LambdaNavigation/NavigationItem/NavigationCollectionItem";
import NavigationProfile from "Frontend/components/LambdaComponents/LambdaNavigation/NavigationItem/NavigationProfile";
import NavigationAssistantItem
    from "Frontend/components/LambdaComponents/LambdaNavigation/NavigationItem/NavigationAssistantItem";
export default function LambdaNavigation(props : any) {
    return(
        <Drawer isOpen={props.isOpen} onClose={props.onClose} placement={"left"}>
            <DrawerOverlay className={"lambda-navigation-overlay"}/>
            <DrawerContent className={"lambda-navigation-area"}>
                <div className={"lambda-navigation-content"}>
                    <DrawerCloseButton/>
                    <DrawerHeader
                        onClick={() => window.location.href = "/lambda"}
                        style={{cursor: "pointer"}}
                    >Lambda</DrawerHeader>
                    <div className={"lambda-navigation-items"}>
                        <NavigationProfile/>
                        <NavigationDictionaryItem/>
                        <NavigationCollectionItem/>
                        <NavigationAssistantItem/>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    )
}