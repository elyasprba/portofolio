interface AboutPros {
  title: string;
  description: string;
}

export const AboutMe = ({ title, description }: AboutPros) => {
  return (
    <>
      <div className="border border-slate-200 p-5 rounded-lg mx-10">
        <h4 className="pb-2 text-base mt-3 text-start font-bold tracking-tight text-gray-700">
          {title}
        </h4>
        <p className="text-sm text-gray-400 text-start">{description}</p>
      </div>
    </>
  );
};
