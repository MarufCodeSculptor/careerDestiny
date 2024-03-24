const AppliedJobsSingleItem = ({ info }) => {
  return (
    <div className="bg-pink-200 rounded-lg shadow-lg ">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src={info.logo}
              alt={info.company_name}
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {info.job_type}
            </div>
            <h2 className="block mt-1 text-lg leading-tight font-medium text-black">
              {info.job_title}
            </h2>
            <p className="mt-2 text-gray-500">{info.job_description}</p>
            <div className="mt-4">
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a1 1 0 01-.707-.293l-7-7a1 1 0 111.414-1.414L10 15.586l8.293-8.293a1 1 0 111.414 1.414l-9 9A1 1 0 0110 18z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="ml-2 text-sm text-gray-600">{info.location}</p>
              </div>
              <div className="flex items-center mt-2">
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 9a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM8 17a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="ml-2 text-sm text-gray-600">
                  {info.remote_or_onsite}
                </p>
              </div>
              <div className="flex items-center mt-2">
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V5a1 1 0 00-1-1H4zm0-2h12a3 3 0 013 3v12a3 3 0 01-3 3H4a3 3 0 01-3-3V5a3 3 0 013-3z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="ml-2 text-sm text-gray-600">{info.salary}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <div className="p-6">
            <h2 className="text-lg leading-6 font-medium text-gray-900">
              Company Information
            </h2>
            <p className="mt-2 text-sm text-gray-500">{info.company_name}</p>
            <p className="mt-2 text-sm text-gray-500">
              {info.contact_information.address}
            </p>
            <p className="mt-2 text-sm text-gray-500">
              {info.contact_information.email}
            </p>
            <p className="mt-2 text-sm text-gray-500">
              {info.contact_information.phone}
            </p>
            <h2 className="text-lg leading-6 font-medium text-gray-900 mt-4">
              Job Requirements
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              {info.educational_requirements}
            </p>
            <p className="mt-2 text-sm text-gray-500">{info.experiences}</p>
            <h2 className="text-lg leading-6 font-medium text-gray-900 mt-4">
              Job Responsibilities
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              {info.job_responsibility}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobsSingleItem;
