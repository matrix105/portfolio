import React from 'react';
import { FaCode, FaRocket, FaCogs } from 'react-icons/fa';
import { AiFillRobot, AiOutlineCloudServer } from 'react-icons/ai';
import { SiOpenai } from 'react-icons/si';

import ResumeCard from './ResumeCard';
import Resume from './Resume';

const resumeCards = [
	{
		title: 'AI & Machine Learning',
		description: 'I engineer intelligent systems that learn, adapt, and evolve. From neural networks to predictive models, I bring the power of AI to solve real-world challenges.',
		icon: () => <SiOpenai className='text-green-lighter' />
	},
	{
		title: 'System Architecture',
		description: 'I design robust, scalable architectures that form the backbone of powerful applications. Building systems that withstand the test of time and traffic.',
		icon: () => <FaCogs className='text-green-lighter' />
	},
	{
		title: 'Full-Stack Development',
		description: 'From database to interface, I craft complete digital solutions. Web apps, landing pages, and digital tools that transform businesses and empower communities.',
		icon: () => <FaCode className='text-green-lighter' />
	},
	{
		title: 'Automation & Integration',
		description: 'I create intelligent automations and seamless integrations that multiply efficiency. Connecting systems to unlock their full potential.',
		icon: () => <AiFillRobot className='text-green-lighter' />
	}
];

const Introduce = () => {
	return (
		<div id="about" className='flex flex-wrap justify-center xm:p-12 bg-gray0'>
			<div className='flex flex-col order-first order-last w-full p-4 md:order-first md:w-1/2'>
				{resumeCards.map((card, i) => {
					return (
						<ResumeCard key={i} card={card} /> )}
					)
				}
			</div>
			<Resume />
		</div>
	);
};

export default Introduce;
