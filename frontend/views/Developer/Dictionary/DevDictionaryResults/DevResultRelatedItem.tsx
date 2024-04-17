import {useEffect, useState} from "react";
import {WordComparisonService} from "Frontend/generated/endpoints";
import WordComparison from "Frontend/generated/com/application/models/WordComparison";

export default function DevResultRelatedItem(props: any) {

    const [comparedWord, setComparedWord] = useState(props.comparison.comparedWord);
    const [score, setScore] = useState(props.comparison.score);
    const [explaining, setExplaining] = useState(props.comparison.explaining);

    useEffect(() => {
        const updateComparedWord = async () => await WordComparisonService.setComparedWordById(props.comparison.id, comparedWord);
        updateComparedWord();
    }, [comparedWord]);

    useEffect(() => {
        const updateScore = async () => await WordComparisonService.setScoreById(props.comparison.id, score);
        updateScore();
    }, [score]);

    useEffect(() => {
        const updateExplaining = async () => await WordComparisonService.setExplainingById(props.comparison.id, explaining);
        updateExplaining();
    }, [explaining]);


    return (
        <div className={"dev-result-related-item"}>
            <div className={"wrapper"}>
                <div>Từ được so sánh:</div>
                <input
                    value={comparedWord}
                    onChange={(e) => setComparedWord(e.target.value)}
                />
            </div>
            <div className={"wrapper"}>
                <div>Mức độ tương đồng:</div>
                <input
                    type={"number"}
                    value={score}
                    onChange={(e) => setScore(parseInt(e.target.value))}
                />
            </div>
            <div className={"wrapper"}>
                <div>Giải thích:</div>
                <textarea
                    value={explaining}
                    onChange={(e) => setExplaining(e.target.value)}
                />
            </div>
        </div>
    )
}