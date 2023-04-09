import React from 'react';
import { useAccordion } from '../AccordionContext';

export const AccordionContent: React.FC<{
	points: Array<string>;
	index: number;
}> = ({ points, index }) => {
	const { activeIndex } = useAccordion();
	return (
		<div
			className={`accordion-content my-2 ml-4 ${
				activeIndex === index ? 'block' : 'hidden'
			}`}>
			<ul className="p-2 list-disc list-outside">
				{points.map((point, index) => (
					<li className="text-sm md:text-md lg:text-lg" key={index}>
						{point}
					</li>
				))}
			</ul>
		</div>
	);
};

AccordionContent.displayName = 'AccordionContent';
