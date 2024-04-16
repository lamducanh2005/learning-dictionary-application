import 'Frontend/themes/LambdaComponents/LambdaHeader/LambdaHeader.css'
import {motion, useMotionValueEvent, useScroll} from 'framer-motion'
import {useState} from "react";

export default function LambdaHeader(props : any) {

    const { scrollY} = useScroll();
    const [y, setY] = useState(0);

    useMotionValueEvent(scrollY, "change", (latest) => setY(latest));

    return (
        <motion.div
            className={"lambda-header"}
            animate={y > 150 ? "scroll" : "unScroll"}
            variants={{
                unScroll: {},
                scroll: {
                    backgroundColor: 'rgba(248, 248, 248, 0.3)',
                    backdropFilter: 'blur(10px)',
                    height: '60px',
                }
            }}
        >
            <motion.div
                style={{width: 10}}
                animate={y > 150 ? "scroll" : "unScroll"}
                variants={{
                    unScroll: { width: 10 },
                    scroll: { width: 0 }
                }}
            />
            
            {props.children}

            <motion.div
                style={{width: 10}}
                animate={y > 150 ? "scroll" : "unScroll"}
                variants={{
                    unScroll: { width: 10 },
                    scroll: { width: 0 }
                }}
            />
        </motion.div>
    )
}