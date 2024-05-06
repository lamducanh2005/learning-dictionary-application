import 'Frontend/themes/Dictionary/Results/ResultItem/DictionaryResultNote.css';
import {WordContext} from "Frontend/components/Dictionary/Results/DictionaryResultItem";
import {useContext, useEffect, useState} from "react";
import {ProfileContext} from "Frontend/App";
import {WordService} from "Frontend/generated/endpoints";

export default function DictionaryResultNote() {

    const word = useContext(WordContext);
    const profile = useContext(ProfileContext);
    const [note, setNote] = useState("");


    useEffect(() => {  // @ts-ignore
        const updateNote = async () => setNote(await WordService.getNoteForWord(word.id, profile.id));
        updateNote();
    }, []);


    useEffect(() => { // @ts-ignore
        const updateNote = async () => await WordService.setNoteForWord(word.id, profile.id, note);
        updateNote();
    }, [note]);

    return (
        <textarea
            className={"dictionary-result-note"}
            placeholder={"Nhập ghi chú của bạn vào đây"}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            spellCheck={false}
        />


    )
}