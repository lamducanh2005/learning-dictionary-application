import {motion} from "framer-motion";

export default function MainViewAssistantItem(props: any) {
    return (
        <div className={"main-view-menu-item assistant"}>
            <div className={"title"}>Trợ lý</div>
            <div className={"description"}>
                Hỗ trợ việc học tiếng Anh của bạn một cách hiệu quả hơn.
            </div>
            <motion.a
                className={"button"}
                animate={{backgroundImage: 'none'}}
                whileHover={{
                    scale: 1.05,
                    backgroundColor: '#3f1de5',
                    color: '#bbe5f5',
                    borderColor: '#3f1de5',
                    boxShadow: '0 0 5px #aaa'
                }}
                whileTap={{
                    scale: 0.95,
                    backgroundColor: '#2b10ad',
                    color: '#96c6d9',
                    borderColor: '#2b10ad',
                }}
                href={"/lambda/assistant"}
            >Gọi trợ lý
            </motion.a>
        </div>
    )
}