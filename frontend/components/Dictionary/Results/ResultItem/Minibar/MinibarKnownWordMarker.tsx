import {CheckCircleIcon, CheckIcon, QuestionIcon} from "@chakra-ui/icons";
import {Tooltip} from "@chakra-ui/react";
import {useContext, useEffect, useState} from "react";
import {WordService} from "Frontend/generated/endpoints";
import {WordContext} from "Frontend/components/Dictionary/Results/DictionaryResultItem";
export default function MinibarKnownWordMarker(props : any) {

    const word = useContext(WordContext);
    const [isKnown, setIsKnown] = useState(word.known);
    useEffect(() => {
        const updateKnown = async () => {
            if (word.id !== undefined)
                await WordService.setIsKnownById(word.id, isKnown);
        }
        updateKnown();

    }, [isKnown]);

    return (
        <Tooltip
            label={(isKnown) ? "Từ này nằm trong vốn từ của bạn" : "Từ này không thuộc vốn từ của bạn"}
            bg={"rgba(255, 255, 255, 0.75)"}
            color={(isKnown) ? "#00a15e" : "#c20033"}
            p={'5px 10px'}
            closeOnClick={false}
        >
        <div
            className={"minibar-known-word-marker"}
            style={{
                height: '100%',
                backgroundColor: 'rgba(255, 255, 255, 1)',
                borderRadius: '5px',
                boxShadow: '0 0 10px #eee',
                border: '1px solid #eee',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0 30px',
            }}
            onClick={() => { setIsKnown(!isKnown) }}
        >
            {(isKnown) ? <CheckCircleIcon color={"#00a15e"}/> : <QuestionIcon color={"#c20033"}/>}
        </div>
        </Tooltip>
    )
}