import iconleft from "../assets/img/icon-left.png";
import iconright from "../assets/img/icon-right.png";
import { motion } from "framer-motion";
const Item = ({
    data,
    handleItemClickRight,
    handleItemClickLeft,
    active,
}) => {
    console.log(active);
    return (
        <section
            key={indexedDB}
            className={`mt-[56px] ${
                active ? "flex" : "hidden"
            } gap-[32px] relative w-[1120px] sm:h-auto`}
        >
            <div
                style={{
                    transition: "all 1s ease-out 1.2s",
                }}
                className="w-[57%] h-[426px] flex relative truncate "
            >
                <motion.img
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: true }}
                    transition={{
                        duration: 0.5,
                        delay: 0.2,
                    }}
                    src={data.img}
                    className="rounded-lg image w-[100%] "
                />
            </div>
            <div className="w-[43%] h-[426px] relative">
                <div className="absolute right-0 bottom-0">
                    <div className="flex justify-end gap-[32px]">
                        <div>
                            <img
                                onClick={() =>
                                    handleItemClickLeft()
                                }
                                src={iconleft}
                                alt="iconl"
                                className="h-[48px] w-[48px] transition-all"
                            />
                        </div>
                        <div>
                            <img
                                onClick={() =>
                                    handleItemClickRight()
                                }
                                src={iconright}
                                alt="iconr"
                                className="h-[48px] w-[48px] "
                            />
                        </div>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: true }}
                    transition={{
                        duration: 0.5,
                        delay: 0.2,
                    }}
                    className="font-BeautiqueDisplay text-[56px] h-[90px] text-left mb-[24px] relative parent"
                >
                    0{data.id}.<span>{data.btn}</span>
                    <div className="absolute bottom-0 left-0 w-[30%] h-[5px] bg-primary"></div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: true }}
                    transition={{
                        duration: 0.5,
                        delay: 0.2,
                    }}
                    src={data.img}
                    className="text-left font-interRegular text-lg"
                >
                    <p>{data.description}</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Item;
