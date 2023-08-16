
import { motion } from "framer-motion";
import iconleft from "../assets/img/icon-left.png";
import iconright from "../assets/img/icon-right.png";
const Item = ({
    data,
    active,
    handleItemClickRight,
    handleItemClickLeft
}) => {
    
    return (
        <section
            key={indexedDB}
            className={`mt-[56px]  ${
                active ? "grid lg:grid-cols-2" : "hidden"
            } gap-[32px] relative  lg:w-[1120px] sm:grid-cols-1 sm:h-auto sm:w-[100%]`}
        >
            <div className="lg:w-[80%] lg:hidden h-[426px] sm:h-[120%] lg:h-[100%] sm:w-[100%] relative">
                <div className="sm:w-[100%] absolute right-0 bottom-0">
                </div>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: true }}
                    transition={{
                        duration: 0.5,
                        delay: 0.2,
                    }}
                    className="font-BeautiqueDisplay   text-[56px] sm:text-4xl  h-[90px] sm:h-[auto] text-left mb-[24px] sm:mb-[12px] relative parent"
                >
                    0{data.id}.<span>{data.btn}</span>
                </motion.div>
                <div className="absolute top-[40px] left-0 w-[30%]  h-[5px] bg-primary"></div>
            </div>
            <div
                style={{
                    transition: "all 1s ease-out 1.2s",
                }}
                className="lg:w-[100%] sm:w-[100%] h-[426px] flex relative truncate "
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
                    className="rounded-lg image w-[100%]  lg:order-1 sm:order-2 "
                />
            </div>
            <div className="lg:w-[80%] h-[426px] sm:h-[120%] lg:h-[100%] sm:w-[100%] relative">
                <div className="sm:w-[100%] absolute right-0 bottom-10 sm:bottom-[-10px]">
                    <div className="flex justify-end sm:justify-between gap-[32px] ">
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
                    className="sm:hidden font-BeautiqueDisplay lg:order-2 sm:order-1  text-[56px] sm:text-4xl  h-[90px] sm:h-[auto] text-left mb-[24px] sm:mb-[12px] relative parent"
                >
                    0{data.id}.<span>{data.btn}</span>
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
                    className="text-left font-interRegular text-lg lg:order-3 sm:order-3 "
                >
                    <p>{data.description}</p>
                </motion.div>
                <div className="sm:hidden absolute top-[60px] left-0 w-[30%]  h-[5px] bg-primary"></div>
            </div>
        </section>
    );
};

export default Item;
