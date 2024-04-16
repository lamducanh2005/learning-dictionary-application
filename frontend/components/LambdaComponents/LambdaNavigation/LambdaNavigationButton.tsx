import {HamburgerIcon} from "@chakra-ui/icons";
import LambdaNavigation from "Frontend/components/LambdaComponents/LambdaNavigation/LambdaNavigation";
import {useDisclosure} from "@chakra-ui/react";
import 'Frontend/themes/LambdaComponents/LambdaNavigation/LambdaNavigationButton.css';
import {motion} from "framer-motion";

export default function LambdaNavigationButton(props: any) {

    const {isOpen, onOpen, onClose} = useDisclosure();

    return(
        <motion.div
            className={"lambda-navigation-button"}
            onClick={onOpen}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            transition={{type: "spring", stiffness: 400, damping: 10}}
        >
            <HamburgerIcon />
            <LambdaNavigation isOpen={isOpen} onClose={onClose} />
        </motion.div>
    )
}