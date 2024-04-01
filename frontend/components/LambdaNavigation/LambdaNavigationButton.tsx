import {HamburgerIcon} from "@chakra-ui/icons";
import LambdaNavigation from "Frontend/components/LambdaNavigation/LambdaNavigation";
import {useDisclosure} from "@chakra-ui/react";

export default function LambdaNavigationButton() {

    const {isOpen, onOpen, onClose} = useDisclosure();

    return(
        <div
            className={"lambda-navigation-button"}
            style={{
                backgroundColor: '#ddd',
                height: '100%',
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