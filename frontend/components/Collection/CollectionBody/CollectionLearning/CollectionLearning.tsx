import {Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay} from "@chakra-ui/react";
import CollectionLearningTabList
    from "Frontend/components/Collection/CollectionBody/CollectionLearning/CollectionLearningTabList";
import CollectionLearningTabPanel
    from "Frontend/components/Collection/CollectionBody/CollectionLearning/CollectionLearningTabPanel";
import 'Frontend/themes/Collection/CollectionLearning/CollectionLearning.css';
import {createContext, useContext, useState} from "react";
import {CollectionContext} from "Frontend/components/Collection/CollectionBody";

export const CollectionLearningContext = createContext({
    tabIndex: 0,
    setTabIndex: (index: number) => {
    }
});

export default function CollectionLearning(props: any) {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose} isCentered>
            <ModalOverlay className={"collection-learning-overlay"}/>
            <ModalContent className={"collection-learning"}>
                <ModalHeader>Ôn lại</ModalHeader>
                <ModalCloseButton/>
                <ModalBody className={"collection-learning-tab"}>
                    <CollectionLearningContext.Provider value={{tabIndex: tabIndex, setTabIndex: setTabIndex}}>
                        <CollectionLearningTabList/>
                        <CollectionLearningTabPanel/>
                    </CollectionLearningContext.Provider>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}