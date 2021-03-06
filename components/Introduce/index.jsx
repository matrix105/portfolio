import React from 'react';
import { FaCode } from 'react-icons/fa';
import { AiOutlineApi, AiOutlineCloudServer,AiFillRobot } from 'react-icons/ai';

import ResumeCard from './ResumeCard';
import Resume from './Resume';

const resumeCards = [
	{
		title: 'ReactJs Development',
		description: 'I develop modern and scalable apps with clean architecture.',
		icon: () => <AiOutlineApi className='text-green-lighter' />
	},
	{
		title: 'Fullstack Development',
		description: 'I desig, build and maintain web applications and webistes for customers in different fields.',
		icon: () => <FaCode className='text-green-lighter' />
	},
	{
		title: 'UI/UX Design',
		description: 'I care about the design of my apps so that will be easy to users to understand.',
		icon: () => <AiOutlineCloudServer className='text-green-lighter' />
	}
	// ,
	// {
	// 	title: 'Machine Learning',
	// 	description: 'The study of computer algorithms that improve automatically through experience.Machine learning algorithms are used in a wide variety of applications, such as email filtering and computer vision, ',
	// 	icon: () => <AiFillRobot className='text-green-lighter' />
	// }
];

const Introduce = () => {
	return (
		<div className='flex flex-wrap justify-center xm:p-12 bg-gray0'>
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
