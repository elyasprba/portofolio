interface WorkingExperianceProps {
  company: string;
  workExperience: string;
  description: string;
}

export const WorkingExperiance = ({
  company,
  workExperience,
  description,
}: WorkingExperianceProps) => {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-md font-bold text-gray-700">{company}</h3>
        <p className="text-sm text-gray-600 pb-3">{workExperience}</p>
        <p className="text-sm text-gray-400 text-start">{description}</p>
      </div>
    </>
  );
};
