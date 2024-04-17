import 'Frontend/themes/Developer/DevDictionary/DevDictionaryResults/DevResultExamples.css'
import {useEffect, useState} from "react";
import {ExampleService, WordService} from "Frontend/generated/endpoints";

export default function DevResultExampleItem(props: any) {

    const [label, setLabel] = useState(props.example.label);
    const [viExample, setViExample] = useState(props.example.viExample);
    const [enExample, setEnExample] = useState(props.example.enExample);

    useEffect(() => {
        var newExample = props.example;
        newExample.label = label;
        newExample.viExample = viExample;
        newExample.enExample = enExample;
        const saveExample = async () => {
            await ExampleService.setExample(newExample);
            console.log("Saved example");
        }

        saveExample();
        props.onUpdated(props.hasUpdated);
    }, [label, viExample, enExample]);

    const removeExample = async () => {
        await ExampleService.deleteExampleById(props.example.id);
        props.onUpdated(!props.hasUpdated);
    }


    return (
        <div className={"dev-result-example-item"}>
            <div className={"wrapper"}>
                <div>Label:</div>
                <input value={label} onChange={(e) => setLabel(e.target.value)}/>
            </div>
            <div className={"wrapper"}>s
                <div>Ví dụ:</div>
                <textarea value={viExample} onChange={(e) => setViExample(e.target.value)}/>
            </div>
            <div className={"wrapper"}>
                <div>Example:</div>
                <textarea value={enExample} onChange={(e) => setEnExample(e.target.value)}/>
            </div>
            <button onClick={removeExample}>Xoá</button>
        </div>
    )
}