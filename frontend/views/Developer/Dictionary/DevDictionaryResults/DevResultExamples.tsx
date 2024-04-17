import Example from "Frontend/generated/com/application/models/Example";
import {useEffect, useState} from "react";
import {ExampleService, WordService} from "Frontend/generated/endpoints";
import DevResultExampleItem from "Frontend/views/Developer/Dictionary/DevDictionaryResults/DevResultExampleItem";
import 'Frontend/themes/Developer/DevDictionary/DevDictionaryResults/DevResultExamples.css'

export default function DevResultExamples(props: any) {
    const [examples, setExamples] = useState<Example[]>([]);
    const [hasUpdated, setHasUpdated] = useState(false);

    const addExample = async () => {
        const newExample = {
            label: "",
            viExample: "",
            enExample: "",
            wordId: props.wordId,
        }
        await ExampleService.setExample(newExample);
        setHasUpdated(!hasUpdated);
        console.log("Added example");
    }

    useEffect(() => {
        const updateExamples = async () => {
            const response = await WordService.getWordById(props.wordId);
            // @ts-ignore
            setExamples(response.examples);
        }
        updateExamples();
    }, [props.wordId, hasUpdated])

    return (
        <div className={"dev-result-examples"}>
            <div className={"wrapper"}>
                <div>Ví dụ:</div>
                <div style={{flex: 1}}></div>
                <button onClick={addExample}>Thêm ví dụ</button>
            </div>
            {examples.map((example: Example) => {
                return (
                    <DevResultExampleItem
                        key={example.id}
                        wordId={props.wordId}
                        example={example}
                        hasUpdated={hasUpdated}
                        onUpdated={setHasUpdated}
                    />
                )
            })}
        </div>
    );
}