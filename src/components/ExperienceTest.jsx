import React from 'react'
import { FaBriefcase, FaBuilding, FaCalendar } from 'react-icons/fa';
import { motion } from 'framer-motion';
const ExperienceTest = ({exp,index}) => {
  
    return (
        <motion.div
            className={`border p-3 h-auto bg-white rounded-lg shadow-md ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-lg">{exp.position}</h3>
            <span className="text-xs text-gray-500">
                <FaCalendar className="inline-block mr-1" /> {exp.duration}
            </span>
            </div>
            <p className="text-sm text-gray-600 mb-2">{exp.organization}</p>
            <p className="text-sm text-gray-700">{exp.description}</p>
        </motion.div>
    )
}

export default ExperienceTest