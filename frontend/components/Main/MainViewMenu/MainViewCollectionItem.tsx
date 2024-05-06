import {motion} from "framer-motion";

export default function MainViewCollectionItem(props: any) {
    return (
        <div className={"main-view-menu-item collection"}>
            <div className={"title"}>Bộ sưu tập</div>
            <div className={"description"}>
                Những mục tiêu học tập từ vựng của bạn, hãy sưu tập chúng trong
                những bộ sưu tập để dễ dàng quản lý tiến độ mục tiêu.
            </div>
            <motion.a
                className={"button"}
                whileHover={{
                    scale: 1.05,
                    backgroundColor: '#cb4d97',
                    color: '#fff4fb',
                    borderColor: '#cb4d97',
                    boxShadow: '0 0 5px #aaa'
                }}
                whileTap={{
                    scale: 0.95,
                    backgroundColor: '#8e2d6d',
                    color: '#e596c4',
                    borderColor: '#8e2d6d'
                }}
                href={"lambda/collection"}
            >Xem các bộ sưu tập
            </motion.a>
        </div>
    )
}