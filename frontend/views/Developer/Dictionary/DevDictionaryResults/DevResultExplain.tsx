import 'Frontend/themes/Developer/DevDictionary/DevDictionaryResults/DevResultExplain.css';
import {useEffect, useState} from "react";
import {WordService} from "Frontend/generated/endpoints";

export default function DevResultExplain(props: any) {

    const [explain, setExplain] = useState("");

    useEffect(() => {
        const updateExplain = async () => {
            const response = await WordService.getWordById(props.wordId);
            // @ts-ignore
            setExplain(response.explain);
        }
        updateExplain();
    }, [props.wordId]);

    const handleSaveExplain = async () => {
        await WordService.setExplainById(props.wordId, explain);
    }

    return (
        <div className={"dev-result-explain"}>
            <div>Giải thích:</div>
            <textarea
                className={"explain-input"}
                value={explain}
                onChange={(e) => setExplain(e.target.value)}
            />
            <button
                className={"submit-button"}
                onClick={handleSaveExplain}
            >Cập nhật giải thích
            </button>
        </div>
    );
}