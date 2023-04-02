import React from 'react';
import AccordionContent from '../AccordionContent';
import AccordionHeader from '../AccordionHeader';
import type { AccordionHeaderProps } from '../AccordionHeader/AccordionHeader';

type AccordionItemProps = {
	index: number;
	header: AccordionHeaderProps;
	content: Array<string>;
};

export const AccordionItem: React.FC<AccordionItemProps> = React.memo(
	({ content, index, header }) => {
		return (
			<div className="mb-4 p-4 lg:px-8 shadow-8xl md:shadow-none md:hover:shadow-8xl">
				<AccordionHeader index={index} {...header} />
				<AccordionContent index={index} points={content} />
			</div>
		);
	}
);

AccordionItem.displayName = 'AccordionItem';
