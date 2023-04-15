import React, { ReactNode, HTMLProps } from 'react';

interface SectionProps extends HTMLProps<HTMLDivElement> {
	id: string;
	children: ReactNode;
}

const Section = React.memo(
	React.forwardRef<HTMLDivElement, SectionProps>(
		({ id, children, ...rest }, ref) => {
			return (
				<section
					id={id}
					className="text-gray-400 bg-gray-800 md:ml-6 md:mb-6 shadow-lg"
					ref={ref}
					{...rest}>
					{children}
				</section>
			);
		}
	)
);

Section.displayName = 'Section';

export default Section;
