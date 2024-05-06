import {
    Button, FormControl, FormLabel, Input,
    Popover,
    PopoverArrow, PopoverBody,
    PopoverCloseButton,
    PopoverContent, PopoverHeader,
    PopoverTrigger,
    Portal, Textarea
} from "@chakra-ui/react";
import {AddIcon} from "@chakra-ui/icons";
import 'Frontend/themes/Collection/CollectionList/CollectionCreateButton.css';
import {motion} from "framer-motion";
import {useContext, useState} from "react";
import Collection from "Frontend/generated/com/application/models/Collection";
import {ProfileContext} from "Frontend/App";

export default function CollectionCreateButton(props: any) {

    const profile = useContext(ProfileContext);
    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const handleSubmit = async () => {
        const newCollection: Collection = {
            profileId: profile.id,
            name: name,
            description: description,
        }
        props.onAdd(newCollection);
        setName("");
        setDescription("");
    }

    return (
        <Popover>
            <PopoverTrigger>
                <motion.button
                    className={"collection-create-button"}
                    whileTap={{scale: 0.8}}
                >
                    <AddIcon color={"white"}/>
                </motion.button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverCloseButton/>
                <PopoverHeader>Thêm bộ sưu tập</PopoverHeader>
                <PopoverBody>
                    <FormControl mt={5} mb={2}>
                        <FormLabel fontSize={14}>Tên bộ sưu tập</FormLabel>
                        <Input
                            fontSize={14}
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <FormLabel fontSize={14} mt={5}>Mô tả</FormLabel>
                        <Textarea
                            fontSize={14}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <Button mt={5} colorScheme='gray' type='submit' onClick={handleSubmit}>Thêm</Button>
                    </FormControl>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}