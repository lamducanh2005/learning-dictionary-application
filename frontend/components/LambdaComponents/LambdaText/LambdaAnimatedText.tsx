import { motion } from "framer-motion"

export default function LambdaAnimatedText(props : any) {
    return(
        <motion.div
            className={"lambda-animated-text"}
            variants={{
                visible: { transition: { staggerChildren: 0.1 }},
                hidden: {}
            }}
            initial={"hidden"}
            whileInView={"visible"}
            style={{
                overflowY: 'scroll',
                scrollbarWidth: 'none',
                height: '100%',
            }}
        >
            {
                props.content.split(props.split).map(
                    (word : string, index : number) => {
                        return(
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0.1 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                            >
                                {word + props.split}
                            </motion.span>
                        )
                    }
                )
            }
        </motion.div>
    )
}