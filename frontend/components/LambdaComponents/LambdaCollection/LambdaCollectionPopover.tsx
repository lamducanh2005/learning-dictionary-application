import {
    Popover,
    PopoverArrow, PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger
} from "@chakra-ui/react";

export default function LambdaCollectionPopover(props : any) {
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