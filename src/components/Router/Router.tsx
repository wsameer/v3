import About from 'components/About';
import Hero from 'components/Hero';
import Section from 'components/layout/Section';
import React, { useEffect, useRef } from 'react';

export const Router: React.FC = () => {
    const sectionsRef = useRef<Array<HTMLElement | null>>([]),
        executeScroll = (index: number) =>
            window.scrollTo({
                top: sectionsRef!.current[index]!.offsetTop - 2,
                behavior: 'smooth'
            }),
        sections = [
            {
                id: 'hero',
                component: <Hero executeScroll={executeScroll} />
            },
            {
                id: 'about',
                component: <About />
            }
        ];

    useEffect(() => {
        sectionsRef.current = sectionsRef.current.slice(0, sections.length);
    }, [sections.length]);

    return (
        <div className="ml-0 md:ml-72 lg:ml-80 flex flex-col">
            {sections.map(({ id, component }, key) => (
                <Section
                    key={key}
                    id={id}
                    ref={(el: HTMLElement) => (sectionsRef.current[key] = el)}
                    className="text-gray-400 bg-gray-800 md:ml-6 md:mb-6 shadow-lg"
                >
                    {component}
                </Section>
            ))}
        </div>
    );
};
