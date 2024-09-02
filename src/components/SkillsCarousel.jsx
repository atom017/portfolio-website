import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Django from '../../public/assets/skills/Django.svg';
import Python from '../../public/assets/skills/Python-Light.svg';
import JavaScript from '../../public/assets/skills/JavaScript.svg';
import Nodejs from '../../public/assets/skills/NodeJS-Light.svg';
import TailwindCSS from '../../public/assets/skills/TailwindCSS-Light.svg';
import Flask from '../../public/assets/skills/Flask-Light.svg';
import Tensorflow from '../../public/assets/skills/TensorFlow-Light.svg';
import PostgreSQL from '../../public/assets/skills/PostgreSQL-Light.svg';
import MySQL from '../../public/assets/skills/MySQL-Light.svg';
import MongoDB from '../../public/assets/skills/MongoDB.svg';
import ReactJs from '../../public/assets/skills/React-Light.svg';

const skills = [
    { img: Django, name: 'Django' },
    { img: Python, name: 'Python' },
    { img: JavaScript, name: 'JavaScript' },
    { img: Nodejs, name: 'Node.js' },
    { img: TailwindCSS, name: 'TailwindCSS' },
    { img: Flask, name: 'Flask' },
    { img: Tensorflow, name: 'TensorFlow' },
    { img: PostgreSQL, name: 'PostgreSQL' },
    { img: MySQL, name: 'MySQL' },
    { img: MongoDB, name: 'MongoDB' },
    { img: ReactJs, name: 'React' },
];

const SkillsCarousel = () => {
    const animationControls = useAnimation();
    const carouselRef = useRef(null);

    useEffect(() => {
        const startLoop = async () => {
            if (!carouselRef.current) return;

            const carouselWidth = carouselRef.current.scrollWidth / 2;
            const viewportWidth = carouselRef.current.offsetWidth;

            // Ensure the carousel scrolls exactly one full loop
            const scrollAmount = carouselWidth / 2;

            while (true) {
                await animationControls.start({
                    x: -scrollAmount,
                    transition: {
                        duration: 20, // Adjust the speed of the scroll
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
                style={{ display: 'flex', width: 'max-content' }}
                ref={carouselRef}
            >
                {skills.concat(skills).map((skill, index) => (
                    <div
                        key={index}
                        className="min-w-[80px] sm:min-w-[100px] p-2 sm:p-5 flex-shrink-0 flex flex-col items-center"
                    >
                        <img
                            src={skill.img}
                            alt={skill.name}
                            className="w-10 h-10 sm:w-16 sm:h-16 object-contain"
                        />
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
