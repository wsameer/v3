import React, { useCallback, useState, createContext } from 'react';
import type { AccordionContextType, AccordionProviderProps } from './types';

export const AccordionContext = createContext<AccordionContextType>(null);

const AccordionProvider = ({ children }: AccordionProviderProps) => {
	const [activeIndex, setActiveIndex] = useState<number>(0),
		toggleAccordion = useCallback(
			(index: number) => {
				setActiveIndex(prevIndex =>
					index === prevIndex ? null : index
				);
			},
			[setActiveIndex]
		);
	return (
		<AccordionContext.Provider
			value={{
				activeIndex,
				toggleAccordion
			}}>
			{children}
		</AccordionContext.Provider>
	);
};

const useAccordion = () => {
	const context = React.useContext(AccordionContext);
	if (context === undefined) {
		throw new Error('useAccordion must be used within a AccordionProvider');
	}
	return context;
};

export { useAccordion, AccordionProvider };
