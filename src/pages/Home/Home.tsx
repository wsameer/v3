import About from '@components/About';
import Contact from '@components/Contact';
import Experience from '@components/Experience';
import Hero from '@components/Hero';
import Work from '@components/Work';
import Section from '@components/layout/Section';
import { ReactNode, useEffect, useRef } from 'react';

type SectionType = {
	id: string;
	component: ReactNode;
};

export const Home: React.FC = () => {
	const sectionsRef = useRef<Array<HTMLElement>>([]),
		executeScroll = (index: number) =>
			window.scrollTo({
				top: sectionsRef!.current[index]!.offsetTop - 2,
				behavior: 'smooth'
			}),
		sections: Array<SectionType> = [
			{
				id: 'hero',
				component: <Hero executeScroll={executeScroll} />
			},
			{
				id: 'about',
				component: <About />
			},
			{
				id: 'experience',
				component: <Experience />
			},
			{
				id: 'works',
				component: <Work />
			},
			{
				id: 'contact',
				component: <Contact />
			}
		];

	useEffect(() => {
		sectionsRef.current = sectionsRef.current.slice(0, sections.length);
	}, [sections.length]);

	return (
		<main className="ml-0 md:ml-72 lg:ml-80 flex flex-col">
			{sections.map(({ id, component }, key) => (
				<Section
					key={key}
					id={id}
					ref={el => (sectionsRef.current[key] = el)}
					className="text-gray-400 bg-gray-800 md:ml-6 md:mb-6 shadow-lg">
					{component}
				</Section>
			))}
		</main>
	);
};
