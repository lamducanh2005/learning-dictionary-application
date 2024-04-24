import 'Frontend/themes/Collection/CollectionList/CollectionPanel/PanelLevelProportion.css';
import {Doughnut} from "react-chartjs-2";
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {useContext, useEffect, useState} from "react";
import {CollectionContext} from "Frontend/components/Collection/CollectionBody";
import {CollectionService} from "Frontend/generated/endpoints";


export default function PanelLevelProportion() {
    ChartJS.register(ArcElement, Tooltip, Legend);

    const collection = useContext(CollectionContext);
    const [levelData, setLevelData] = useState([0, 0, 0, 0, 0, 0]);
    const [difficulty, setDifficulty] = useState<String>("");

    useEffect(() => {
        const updateData = async () => {
            // @ts-ignore
            setLevelData(await CollectionService.getLevelProportionOfCollection(collection.id));
            // @ts-ignore
            setDifficulty(await CollectionService.getLevelOfCollection(collection.id));
        }
        updateData();
    }, [collection]);

    const data = {
        labels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
        datasets: [
            {
                data: levelData,
                backgroundColor: [
                    'rgb(255,214,214)',
                    'rgb(255,168,168)',
                    'rgb(255,97,97)',
                    'rgb(245,42,42)',
                    'rgb(183,19,19)',
                    'rgb(133,7,7)',
                ],
                hoverBackgroundColor: [
                    'rgb(232,180,180)',
                    'rgb(225,133,133)',
                    'rgb(225,72,72)',
                    'rgb(201,20,20)',
                    'rgb(141,7,7)',
                    'rgb(93,1,1)',
                ],
                hoverOffset: 10,
                borderWidth: 0,
            }
        ]
    }

    const options = {
        plugins: {
            legend: {
                display: false
            }
        },
        layout: {
            padding: {left: 5, right: 5, top: 5, bottom: 5}
        }
    }

    return (
        <div className={"panel-level-proportion"}>
            <div className={"text"}>
                <div className={"title"}>Độ khó bộ sưu tập</div>
                <div className={"difficulty"}>{difficulty}</div>
            </div>
            <div className={"chart"}>
                <Doughnut data={data} options={options}/>
            </div>
        </div>
    )
}