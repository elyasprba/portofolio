import { Icon } from '../icon';
import {
  BootstrapIcon,
  MaterialUiIcon,
  NextIcon,
  ReactIcon,
  ReactQueryIcon,
  ReduxIcon,
  TailwindIcon,
} from '../../assets/components';

export const TechStack = () => {
  return (
    <>
      <div className="mb-10 mx-4 sm:mx-10">
        <h4 className="text-base text-start font-bold tracking-tight text-gray-700 pb-1 px-5">
          Tech Stack
        </h4>
        <div className="my-5 mx-4 flex sm:justify-center sm:gap-5 gap-1 flex-wrap max-w-3xl">
          <Icon link="https://github.com/elyasprba" icon={<ReactIcon />} />
          <Icon link="https://github.com/elyasprba" icon={<NextIcon />} />
          <Icon link="https://github.com/elyasprba" icon={<ReduxIcon />} />
          <Icon link="https://github.com/elyasprba" icon={<ReactQueryIcon />} />
          <Icon link="https://github.com/elyasprba" icon={<TailwindIcon />} />
          <Icon link="https://github.com/elyasprba" icon={<MaterialUiIcon />} />
          <Icon link="https://github.com/elyasprba" icon={<BootstrapIcon />} />
        </div>
      </div>
    </>
  );
};
