import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaPython, FaJs, FaReact, FaNodeJs } from 'react-icons/fa'; 
import { SiFlask, SiDjango, SiTensorflow, SiPostgresql, SiMysql, SiMongodb } from 'react-icons/si'; 

const skills = [
    { icon: <FaPython />, name: 'Python' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <FaReact />, name: 'React' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <SiFlask />, name: 'Flask' },
    { icon: <SiDjango />, name: 'Django' },
    { icon: <SiTensorflow />, name: 'TensorFlow' },
    { icon: <SiPostgresql />, name: 'PostgreSQL' },
    { icon: <SiMysql />, name: 'MySQL' },
    { icon: <SiMongodb />, name: 'MongoDB' },
];

const SkillsCarousel = () => {
    const animationControls = useAnimation();
    const carouselRef = useRef(null);

    useEffect(() => {
        const startLoop = async () => {
            if (!carouselRef.current) return;

            const carouselElement = carouselRef.current;
            const totalWidth = carouselElement.scrollWidth;
            const viewportWidth = carouselElement.offsetWidth;
            const scrollAmount = totalWidth / 2;

            while (true) {
                await animationControls.start({
                    x: -scrollAmount,
                    transition: {
                        duration: 25,
                        ease: 'linear',
                    },
                });
                await animationControls.set({ x: 0 });
            }
        };

        startLoop();
    }, [animationControls]);

    return (
        <div className="overflow-hidden w-full relative">
            <motion.div
                className="flex"
                animate={animationControls}
                style={{ display: 'flex', flexDirection: 'row', width: 'max-content' }}
                ref={carouselRef}
            >
                {skills.concat(skills).map((skill, index) => (
                    <div
                        key={index}
                        className="min-w-[80px] sm:min-w-[100px] p-2 sm:p-5 flex-shrink-0 flex flex-col items-center"
                    >
                        <div className="text-center text-3xl sm:text-4xl md:text-5xl"> {/* Adjust size here */}
                            {skill.icon}
                        </div>
                        <p className="mt-2 text-xs sm:text-sm md:text-base text-center">
                            {skill.name}
                        </p>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default SkillsCarousel;
