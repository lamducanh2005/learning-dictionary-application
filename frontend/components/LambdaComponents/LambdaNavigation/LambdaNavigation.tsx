import {Drawer, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay} from "@chakra-ui/react";

export default function LambdaNavigation(props : any) {
    return(
        <Drawer
            isOpen={props.isOpen}
            onClose={props.onClose}
            placement={"left"}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Lambda</DrawerHeader>
            </DrawerContent>
        </Drawer>
    )
}