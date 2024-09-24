function Project() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white border-4 border-gray-300 rounded-3xl shadow-lg p-10 text-center">
          <h1 className="text-2xl font-bold mb-6">Coming Soon!</h1>
          <div className="pt-10">
            <a
              href="/"
              className="py-1 px-4 sm:py-2 bg-gray-200 rounded-2xl flex items-center justify-center hover:bg-gray-300 transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:-rotate-2"
            >
              <p className="text-gray-700 font-medium text-sm sm:text-base">
                Back To Home
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
