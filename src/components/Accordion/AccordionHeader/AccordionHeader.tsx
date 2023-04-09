import React, { useCallback, useMemo } from 'react';
import { ChevronDown } from 'react-feather';
import { useAccordion } from '../AccordionContext';
import { Avatar } from '@components/common/Avatar/Avatar';
import useMobileDetect from '@hooks/useMobileDetect';

export type AccordionHeaderProps = {
	organization: string;
	tenure: string;
	logo: string;
	position: string;
};

export const AccordionHeader: React.FC<
	AccordionHeaderProps & { index: number }
> = ({ index, organization, tenure, logo, position }) => {
	const { activeIndex, toggleAccordion } = useAccordion(),
		{ isMobile } = useMobileDetect(),
		getAvatarWith = useCallback(() => (isMobile ? '32' : '48'), [isMobile]),
		avatarWith = useMemo(() => getAvatarWith(), [getAvatarWith]);

	return (
		<div
			className="accordion-header flex items-center"
			onClick={() => toggleAccordion(index)}>
			<div className="flex flex-grow items-center">
				<div className="flex-grow-0 flex-shrink-0 mr-4 avatar">
					<Avatar srcFile={logo} width={avatarWith} bgColor="grey" />
				</div>
				<div className="content">
					<p className="text-xs font-medium mb-1">{tenure}</p>
					<h3 className="font-bold text-base text-gray-300 md:text-xl">
						{position}
					</h3>
					<h4 className="font-semibold text-sm md:text-lg opacity-70 text-grey-300">
						{organization}
					</h4>
				</div>
			</div>
			<div className="action flex-grow-0 flex-shrink-0">
				<button
					className="flex items-center justify-end md:justify-center relative w-5 md:w-9 h-5 md:h-9 rounded-lg focus:outline-none text-gray-400 group"
					aria-label="Expand accordion">
					<ChevronDown
						height="16"
						className={`transition ${
							activeIndex === index ? `rotate-0` : `rotate-90`
						}`}
					/>
				</button>
			</div>
		</div>
	);
};

AccordionHeader.displayName = 'AccordionHeader';
