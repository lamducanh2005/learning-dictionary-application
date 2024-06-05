import 'Frontend/themes/Collection/CollectionMastering/CollectionMasteringEnd.css';
import {AddIcon, MinusIcon, TriangleDownIcon, TriangleUpIcon} from "@chakra-ui/icons";
import {useContext, useEffect, useState} from "react";
import {CollectionService} from "Frontend/generated/endpoints";
import {CollectionContext} from "Frontend/components/Collection/CollectionBody";
import {ProfileContext} from "Frontend/App";
import {MasteringContext} from "Frontend/components/Collection/CollectionBody/CollectionMastering/CollectionMastering";

export default function CollectionMasteringEnd(props: any) {
    const profile = useContext(ProfileContext);
    const collection = useContext(CollectionContext);
    const masteringContext = useContext(MasteringContext);
    const [afterCollectionMastery, setAfterCollectionMastery] = useState<number>()

    useEffect(() => {
        const getCurrentCollectionMastery = async () => { // @ts-ignore
            const response = await CollectionService.getExactMasteryOfCollection(collection.id, profile.id);
            setAfterCollectionMastery(response);
        }
        getCurrentCollectionMastery();
    }, []);

    useEffect(() => {
        console.log('after: ', afterCollectionMastery);
        console.log('before: ', masteringContext.resultAnalysis.beforeCollectionMastery);
    }, [afterCollectionMastery]);


    return (
        <div className={"collection-mastering-end"}>
            <div className={"header"}>
                <div style={{fontSize: '28px', fontWeight: 600}}>Đã hoàn thành</div>
                <div style={{fontSize: '14px', color: '#999'}}>Hãy nghỉ ngơi và xem thành quả của mình đi nào!</div>
            </div>
            <div className={"question-answered"}>
                <div className={"text"}>Số câu đã trả lời</div>
                <div className={"number"}>
                    {masteringContext.resultAnalysis.questionAnswered} / {masteringContext.numberOfQuestion}
                </div>
            </div>
            <div className={"increase-mastery"}>
                <div className={"text"}>Số điểm thành thạo lấy được</div>
                <div className={"number"}>
                    <TriangleUpIcon/>
                    {masteringContext.resultAnalysis.increaseMastery}
                </div>
            </div>
            <div className={"decrease-mastery"}>
                <div className={"text"}>Số điểm thành thạo mất đi</div>
                <div className={"number"}>
                    <TriangleDownIcon/>
                    {masteringContext.resultAnalysis.decreaseMastery}
                </div>
            </div>
            <div className={"collection-mastery-change"}>
                <div className={"text"}>Thành thạo của bộ sưu tập</div>
                <div
                    className={ // @ts-ignore
                        (afterCollectionMastery > masteringContext.resultAnalysis.beforeCollectionMastery) ?
                            "number increase" : "number decrease"
                    }
                >
                    {   // @ts-ignore
                        (afterCollectionMastery > masteringContext.resultAnalysis.beforeCollectionMastery) ?
                            <TriangleUpIcon/> : <TriangleDownIcon/>
                    }
                    {   // @ts-ignore
                        Math.abs(afterCollectionMastery - masteringContext.resultAnalysis.beforeCollectionMastery).toFixed(2) + " %"
                    }
                </div>
            </div>


        </div>
    )
}