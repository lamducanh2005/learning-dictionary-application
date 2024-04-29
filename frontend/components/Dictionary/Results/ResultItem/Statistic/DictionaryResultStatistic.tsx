import 'Frontend/themes/Dictionary/Results/ResultItem/DictionaryResultStatistic.css';
import {Doughnut} from "react-chartjs-2";
import {useContext, useEffect, useState} from "react";
import {WordContext} from "Frontend/components/Dictionary/Results/DictionaryResultItem";
import {ProfileContext} from "Frontend/App";
import {WordService} from "Frontend/generated/endpoints";
import {ArcElement, Chart as ChartJS, Legend, Tooltip} from "chart.js";

export default function DictionaryResultStatistic(props: any) {
    ChartJS.register(ArcElement, Tooltip, Legend);
    const word = useContext(WordContext);
    const profile = useContext(ProfileContext);
    const [mastery, setMastery] = useState(0);

    useEffect(() => {
        const updateMastery = async () => {
            // @ts-ignore
            setMastery(await WordService.getMasteryRate(word.id, profile.id))
        }
        updateMastery();
    }, [word, profile]);

    const data = {
        labels: ["Thành thạo", "Chưa thành thạo"],
        datasets: [
            {
                data: [mastery, 100 - mastery],
                backgroundColor: ["#26c000", "#e8efe8"],
                hoverBackgroundColor: ["#1a8600", "#e8efe8"],
                borderWidth: 0,
            }
        ]
    }

    const options = {
        plugins: {
            legend: {display: false},
            tooltip: {enabled: false}
        }
    };

    return(
        <div className={"dictionary-result-statistic"}>
            <div className={"text"}>
                <div className={"title"}>Mức thành thạo của bạn</div>
                <div className={"percentage"}>{mastery}%</div>
            </div>
            <div className={"chart"}>
                <Doughnut data={data} options={options}/>
            </div>
        </div>
    )
}