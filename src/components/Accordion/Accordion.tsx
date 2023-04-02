import React, { FC, PropsWithChildren } from 'react';
import type { AccordionProps } from './types';

export const Accordion: FC<PropsWithChildren> & AccordionProps = React.memo(({ children }) => {
	return <>{children}</>;
});

Accordion.displayName = 'Accordion';
