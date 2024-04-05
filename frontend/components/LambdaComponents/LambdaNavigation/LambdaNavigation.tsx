import {Drawer, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay} from "@chakra-ui/react";

export default function LambdaNavigation(props : any) {
    return(
        <Drawer
            isOpen={props.isOpen}
            onClose={props.onClose}
            placement={"left"}
        >
            <DrawerOverlay
                style={{
                    backgroundColor: 'rgba(200, 200, 200, 0.25)',
                    backdropFilter: 'blur(5px)',
                }}
            />
            <DrawerContent
                style={{
                    backgroundColor: '#ffffff',
                    top: 10,
                    left: 10,
                    height: 'calc(100% - 20px)',
                    borderRadius: '10px',
                    border: '1px solid #eee',
                    backdropFilter: 'blur(5px)',
                }}
            >
                <DrawerCloseButton />
                <DrawerHeader>Lambda</DrawerHeader>
            </DrawerContent>
        </Drawer>
    )
}