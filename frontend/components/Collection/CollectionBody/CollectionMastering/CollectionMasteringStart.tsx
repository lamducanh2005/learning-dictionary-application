import 'Frontend/themes/Collection/CollectionMastering/CollectionMasteringStart.css';
import {motion} from 'framer-motion';

export default function CollectionMasteringStart(props: any) {
    return (
        <div className={"collection-mastering-start"}>
            <div style={{fontSize: 40, fontWeight: 600}}>
                {(props.numberOfQuestion === 0) ? "Không có sẵn câu hỏi" : (props.numberOfQuestion + " câu hỏi")}
            </div>
            <div style={{fontSize: 20, color: '#666'}}>

                {
                    (props.numberOfQuestion === 0) ?
                        "Rất tiếc, hiện tại chưa có sẵn câu hỏi dành cho bạn" :
                        "đang chờ bạn, bạn đã sẵn sàng chinh phục chưa?"
                }
            </div>

            {props.numberOfQuestion > 0 &&
                <div className={"button-group"}>
                    <motion.button
                        className={"return-button"}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        onClick={props.onClose}
                    >Cho tôi đi về
                    </motion.button>
                    <motion.button
                        className={"ready-button"}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        onClick={props.nextQuestion}
                    >Đã sẵn sàng
                    </motion.button>
                </div>
            }
        </div>
    )
}