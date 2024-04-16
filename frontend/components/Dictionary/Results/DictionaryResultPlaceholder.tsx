import {SearchIcon} from "@chakra-ui/icons";
import 'Frontend/themes/Dictionary/Results/DictionaryResultPlaceholder.css'

export default function DictionaryResultPlaceholder() {
    return (
        <div className={"dictionary-result-placeholder"}>
            <div className={"placeholder-image"}/>
            <div className={"placeholder-text"}>
                Gõ vào thanh tìm kiếm tra cứu từ vựng.
            </div>
        </div>
    )
}