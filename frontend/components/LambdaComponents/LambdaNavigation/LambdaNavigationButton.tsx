import {HamburgerIcon} from "@chakra-ui/icons";
import LambdaNavigation from "Frontend/components/LambdaComponents/LambdaNavigation/LambdaNavigation";
import {useDisclosure} from "@chakra-ui/react";

export default function LambdaNavigationButton() {

    const {isOpen, onOpen, onClose} = useDisclosure();

    return(
        <div
            className={"lambda-navigation-button"}
            style={{
                backgroundColor: '#ffffff',
                boxShadow: '#eee 0px 0px 5px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                height: '40px',
                aspectRatio: '1 / 1',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            onClick={onOpen}
        >
            <HamburgerIcon />
            <LambdaNavigation isOpen={isOpen} onClose={onClose} />
        </div>
    )
}