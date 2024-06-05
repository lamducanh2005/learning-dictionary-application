import 'Frontend/themes/Collection/CollectionList/CollectionPanel/PanelMasteryPercentage.css';
import {useContext, useEffect, useState} from "react";
import {CollectionService} from "Frontend/generated/endpoints";
import {CollectionContext} from "Frontend/components/Collection/CollectionBody";
import {Doughnut} from "react-chartjs-2";
import {ProfileContext} from "Frontend/App";

export default function PanelMasteryPercentage() {

    const collection = useContext(CollectionContext)
    const profile = useContext(ProfileContext);
    const [mastery, setMastery] = useState(0);

    useEffect(() => {
        const updateMastery = async () => {
            // @ts-ignore
            setMastery(await CollectionService.getMasteryOfCollection(collection.id, profile.id))
        }
        updateMastery();
    }, [collection]);

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
            legend: {
                display: false
            },
            tooltip: {
                enabled: false
            }
        }
    };

    return (
        <div className={"panel-mastery-percentage"}>
            <div className={"text"}>
                <div className={"title"}>Độ thành thạo</div>
                <div className={"percentage"}>{mastery}%</div>
            </div>
            <div className={"chart"}>
                <Doughnut data={data} options={options}/>
            </div>
        </div>
    )
}