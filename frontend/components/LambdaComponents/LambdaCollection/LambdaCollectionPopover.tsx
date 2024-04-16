import {
    Popover,
    PopoverArrow, PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger
} from "@chakra-ui/react";
import {useContext} from "react";
import {ProfileContext} from "Frontend/App";

export default function LambdaCollectionPopover(props : any) {

    const profile = useContext(ProfileContext)

    return (
        <Popover>
            <PopoverTrigger>
                {props.children}
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverHeader>Thêm vào bộ sưu tập</PopoverHeader>
                <PopoverCloseButton />
                <PopoverBody>

                </PopoverBody>

            </PopoverContent>
        </Popover>
    )
}