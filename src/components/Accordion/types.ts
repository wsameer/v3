export type AccordionProps = {
	defaultActiveIndex?: number;
};

export type AccordionContextType = {
	activeIndex: number;
	toggleAccordion: (value: number) => void;
};

export type AccordionProviderProps = { children: React.ReactNode };
