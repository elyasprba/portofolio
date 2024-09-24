interface WorkingExperianceProps {
  company: string;
  workExperience: string;
  description: string;
  role: string;
}

export const WorkingExperiance = ({
  company,
  workExperience,
  description,
  role,
}: WorkingExperianceProps) => {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="sm:flex items-center">
          <h3 className="text-md font-bold text-gray-700">{company}</h3>
          <div className="mx-2 hidden sm:block">-</div>
          <p className="text-sm font-bold text-gray-600">{role}</p>
        </div>
        <p className="text-sm text-gray-600 pb-3">{workExperience}</p>
        <p className="text-sm text-gray-400 text-start">{description}</p>
      </div>
    </>
  );
};
