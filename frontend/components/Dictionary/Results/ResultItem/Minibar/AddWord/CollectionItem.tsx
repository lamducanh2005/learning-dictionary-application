import {motion} from "framer-motion";
import {useContext, useEffect, useState} from "react";
import {WordContext} from "Frontend/components/Dictionary/Results/DictionaryResultItem";
import Collection from "Frontend/generated/com/application/models/Collection";
import {CollectionService} from "Frontend/generated/endpoints";
import {CheckCircleIcon} from "@chakra-ui/icons";

export default function CollectionItem(props: any) {

    const word = useContext(WordContext);
    const collection: Collection = props.collection;
    const [isAdded, setIsAdded] = useState<boolean>();

    useEffect(() => {
        const checkIsAdded = async () => {
            // @ts-ignore
            const response = await CollectionService.checkWordInCollection(word.id, collection.id);
            setIsAdded(response);
        }
        checkIsAdded();
    }, []);

    const handleClick = async () => {
        if (isAdded) {
            // @ts-ignore
            await CollectionService.removeWordFromCollection(word.id, collection.id);
            setIsAdded(false);
        } else {
            // @ts-ignore
            await CollectionService.addWordToCollection(word.id, collection.id);
            setIsAdded(true);
        }
    }

    return (
        <motion.div
            className={"collection-item" + (isAdded ? " added" : "")}
            whileHover={{scale: 1.02}}
            whileTap={{scale: 0.95}}
            onClick={handleClick}
        >
            {props.collection.name}
            <div style={{flex: 1}}/>
            {isAdded ? <CheckCircleIcon color={"rgba(36,189,59,0.75)"}/> : ""}
        </motion.div>
    )
}