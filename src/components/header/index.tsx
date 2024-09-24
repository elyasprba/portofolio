import {
  GithubFillIcon,
  InstagramFillIcon,
  LinkedinFillIcon,
} from '../../assets/components';
import { Icon } from '../icon';
import UserIcon from '../../assets/icon-users.svg';

export const Header = () => {
  return (
    <>
      <header>
        <img
          src={UserIcon}
          alt="My Icon"
          width={125}
          height={125}
          className="border border-slate-200 p-2 rounded-full mx-6 mt-8 sm:mx-14 sm:mt-14"
        />

        <h4 className="text-xl pt-7 text-start font-bold tracking-tight text-gray-700 px-10 sm:px-16 sm:text-2xl">
          Elyas Purba Prastiya
        </h4>
        <p className="pt-1 font-normal text-gray-500 text-start px-10 sm:px-16 text-md">
          Frontend Engineer
        </p>
        <div className="flex justify-between items-center flex-wrap max-w-3xl mx-8 sm:mx-14">
          <div className="flex gap-3 pt-8 pb-8">
            <Icon
              link="https://www.linkedin.com/in/elyasprba/"
              icon={<LinkedinFillIcon />}
            />
            <Icon
              link="https://github.com/elyasprba"
              icon={<GithubFillIcon />}
            />
            <Icon link="#" icon={<InstagramFillIcon />} />
          </div>
          <a
            href="/project"
            className="py-1 px-4 sm:py-2 bg-gray-200 rounded-2xl flex items-center justify-center hover:bg-gray-300 transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:-rotate-2"
          >
            <p className="text-gray-700 font-medium text-sm sm:text-base">
              Projects
            </p>
          </a>
        </div>
      </header>
    </>
  );
};
