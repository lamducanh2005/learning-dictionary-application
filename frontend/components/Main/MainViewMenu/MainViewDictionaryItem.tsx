import {motion} from "framer-motion";

export default function MainViewDictionaryItem(props: any) {
    return (
        <div className={"main-view-menu-item dictionary"}>
            <div className={"title"}>Từ điển</div>
            <div className={"description"}>
                Không đơn giản là dịch nghĩa, bạn được tiếp cận từ vựng tiếng Anh
                theo hướng tương tác với tư duy của mình.
            </div>
            <motion.a
                className={"button"}
                whileHover={{
                    scale: 1.05,
                    backgroundColor: '#935dd5',
                    color: '#f8f3ff',
                    borderColor: '#935dd5',
                    boxShadow: '0 0 5px #aaa'
                }}
                whileTap={{
                    scale: 0.95,
                    backgroundColor: '#5d2d98',
                    color: '#d2b5fc',
                    borderColor: '#5d2d98'
                }}
                href={"/lambda/dictionary"}
            >Mở từ điển
            </motion.a>
        </div>
    )
}