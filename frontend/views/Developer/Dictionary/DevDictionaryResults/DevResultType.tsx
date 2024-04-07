import 'Frontend/themes/Developer/DevDictionary/DevDictionaryResults/DevResultType.css';
import {useEffect, useState} from "react";
import {WordService} from "Frontend/generated/endpoints";

export default function DevResultType(props: any) {

    const [type, setType] = useState("");

    useEffect(() => {
        const updateType = async () => {
            const response = await WordService.getWordById(props.wordId);

            // @ts-ignore
            setType(response.type);
        }
        updateType();
    }, [props.wordId]);

    const handleSaveType = async () => {
        await WordService.setTypeById(props.wordId, type);
    }

    return (
        <div className={"dev-result-type"}>
            <div>Loại từ:</div>
            <input
                className={"type-input"}
                value={type}
                onChange={(e) => setType(e.target.value)}
            />
            <button
                className={"submit-button"}
                onClick={handleSaveType}
            >Cập nhật
            </button>
        </div>
    );
}