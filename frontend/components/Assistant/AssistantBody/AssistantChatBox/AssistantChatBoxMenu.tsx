import {useEffect, useState} from "react";
import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons";

export default function AssistantChatBoxMenu(props: any) {

    const types = {
        'translate-eng-to-vie': 'Dịch Anh - Việt',
        'translate-vie-to-eng': 'Dịch Việt - Anh',
        'explaining': 'Giải thích',
        'synonym': 'Đồng nghĩa',
        'antonym': 'Trái nghĩa',
        'grammar-check': 'Kiểm tra ngữ pháp',
        'paraphrase': 'Tái diễn giải',
    }

    const [choice, setChoice] = useState("translate-eng-to-vie");
    useEffect(() => {
        props.setType(choice);
    }, [choice]);

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon/>} className={"assistant-chat-box-menu"}>
                {
                    // @ts-ignore
                    types[choice]
                }
            </MenuButton>
            <MenuList className={"assistant-chat-box-menu-list"}>
                {Object.entries(types).map(([key, value]) => {
                    return (
                        <MenuItem key={key} className={"assistant-chat-box-menu-item"} onClick={() => setChoice(key)}>
                            {value}
                        </MenuItem>
                    )
                })}
            </MenuList>
        </Menu>
    )
}