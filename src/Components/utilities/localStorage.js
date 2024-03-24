//  function => for gettingg  jobAplication data's  id from local storage......
const getStoredJobApplication = () => {
  const applicationData = localStorage.getItem('job-applications');
  if (applicationData) {
    return JSON.parse(applicationData);
  }
  return [];
};

//  function => for adding  jobAplication data's  id to local storage......
const saveJobApplication = id => {
  const storedJobapplication = getStoredJobApplication();
  const exists = storedJobapplication.find(jobId => jobId === id);
  if (!exists) {
    storedJobapplication.push(id);
    localStorage.setItem(
      'job-applications',
      JSON.stringify(storedJobapplication)
    );
  }
};

export { saveJobApplication, getStoredJobApplication };
