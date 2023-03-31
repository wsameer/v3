import JobTitle from './JobTitle';
import PersonName from './PersonName';
import { MapPin } from 'react-feather';

const Divider: React.FC = () => (
    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
);

export const SideBox: React.FC = () => {
    return (
        <aside className="w-full md:w-72 lg:w-80 md:fixed md:flex-shrink-0">
            <div className="p-10 md:px-4 w-full bg-gray-800 shadow-lg">
                {/* <Avatar width={'180'} srcFile={IMAGE_SRC} bgColor="purple" /> */}
                <div className="mt-4 flex flex-col items-center text-center justify-center">
                    <PersonName name={'Sameer Waskar'} />
                    <JobTitle value={'Engineering Manager'} />
                    <Divider />
                    {/* <Socials /> */}
                </div>
            </div>
            <div className="pb-4 md:mt-4 md:p-4 md:mt-4 md:mb-4 md:px-4 w-full md:w-72 lg:w-80 bg-gray-800 shadow-lg text-center">
                <div className="inline-flex">
                    <MapPin className="mt-2 text-gray-300" />
                    <p className="mt-2 mx-2 text-gray-300">Toronto, Canada</p>
                </div>
            </div>
            <div className="pb-8 md:p-10 md:mt-4 mb-4 md:px-4 w-full md:w-72 lg:w-80 bg-gray-800 shadow-lg text-center">
                <a
                    href="https://bit.ly/3jWKpS7"
                    rel="noreferrer"
                    target="_blank"
                    className="inline-flex text-white bg-transparent hover:transparent border-2 border-purple-700 py-2 px-6 focus:outline-none hover:bg-purple-700 rounded-full text-base md:text-lg"
                >
                    Download CV
                </a>
            </div>
        </aside>
    );
};

SideBox.displayName = 'SideBox';
