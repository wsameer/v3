import { MapPin } from "react-feather";

const Divider: React.FC = () => (
  <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
);

export const SideBox: React.FC = () => {
  return (
    <aside className="w-full md:w-72 lg:w-80 md:fixed md:flex-shrink-0">
      <div className="p-10 md:px-4 w-full bg-gray-800 shadow-lg"></div>
      <div className="pb-4 md:mt-4 md:p-4 md:mt-4 md:mb-4 md:px-4 w-full md:w-72 lg:w-80 bg-gray-800 shadow-lg text-center">
        <div className="inline-flex">
          <MapPin className="mt-2 text-gray-300" />
          <p className="mt-2 mx-2 text-gray-300">Toronto, Canada</p>
        </div>
      </div>
      <div></div>
    </aside>
  );
};

SideBox.displayName = "SideBox";
