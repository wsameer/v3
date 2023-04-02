import SectionTitle from 'components/common/SectionTitle';
import React from 'react';

export const Contact: React.FC = () => {
	return (
		<div className="mx-auto p-6 md:px-10 md:py-12">
			<SectionTitle>
				<span>Let&apos;s Build Something Together</span>
			</SectionTitle>
			<div className="flex flex-col my-16 flex justify-left">
				<p className="w-ful md:w-2/3 text-left">
					Feel free to reach out if you&apos;re looking for a
					developer, have a question, want consultation on your
					project, grab a coffee, or just want to say hi.
				</p>
				<p className="w-ful md:w-2/3 text-left">
					I&apos;ll try my best to get back to you!
				</p>
			</div>
			<div className="flex justify-center md:justify-start">
				<a
					className="inline-flex text-white mt-4 py-2 px-6 focus:outline-none hover:bg-purple-700 rounded-full text-base md:text-lg border-2 border-purple-700 mb-12"
					href="mailto:dev.wsameer@gmail.com?Subject=Hello"
				>
					dev.wsameer[at]gmail[dot]com
				</a>
			</div>
		</div>
	);
};

Contact.displayName = 'Contact';
