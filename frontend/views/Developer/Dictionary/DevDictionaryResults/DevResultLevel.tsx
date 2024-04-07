import {WordService} from "Frontend/generated/endpoints";
import {useEffect, useState} from "react";
import 'Frontend/themes/Developer/DevDictionary/DevDictionaryResults/DevResultLevel.css';

export default function DevResultLevel(props: any) {

    const [level, setLevel] = useState("");

    useEffect(() => {
        const updateLevel = async () => {
            const response = await WordService.getWordById(props.wordId);

            // @ts-ignore
            setLevel(response.level);
        }
        updateLevel();
    }, [props.wordId]);

    const handleSaveLevel = async () => {
        await WordService.setLevelById(props.wordId, level);
    }

    return (
        <div className={"dev-result-level"}>
            <div>Cấp độ:</div>
            <input
                className={"level-input"}
                value={level}
                onChange={(e) => setLevel(e.target.value)}
            />
            <button
                className={"submit-button"}
                onClick={handleSaveLevel}
            >Cập nhật
            </button>
        </div>
    );
}