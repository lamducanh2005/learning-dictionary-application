import {AddIcon} from "@chakra-ui/icons";
import LambdaCollectionPopover from "Frontend/components/LambdaComponents/LambdaCollection/LambdaCollectionPopover";

export default function MinibarAddWordButton() {
    return(
        <LambdaCollectionPopover>
        <div
            className={"minibar-add-word-button"}
            style={{
                backgroundColor: '#ffffff',
                borderRadius: '5px',
                boxShadow: '0 0 10px #eee',
                border: '1px solid #eee',
                cursor: 'pointer',
                height: '100%',
                aspectRatio: '1 / 1',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <AddIcon />
        </div>
        </LambdaCollectionPopover>
    )
}