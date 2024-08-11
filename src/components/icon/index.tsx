import { ReactNode } from 'react';

interface IconProps {
  link: string;
  icon: ReactNode;
}

export const Icon = ({ link, icon }: IconProps) => {
  return (
    <>
      <a
        href={link}
        target="_blank"
        className="w-7 h-7 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
      >
        {icon}
      </a>
    </>
  );
};
