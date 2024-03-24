/* eslint-disable react-hooks/exhaustive-deps */
import { useLoaderData } from 'react-router-dom';
import { getStoredJobApplication } from '../utilities/localStorage';
import { useEffect, useState } from 'react';
import AppliedJobsSingleItem from '../AppliedJobsSingleItem/AppliedJobsSingleItem';

const AppliedJobs = () => {
  const [applicationData, setApplicationData] = useState([]);
  const jobs = useLoaderData();
  console.log(applicationData);

  useEffect(() => {
    const appliCationDataKeys = getStoredJobApplication();

    if (jobs.length > 0) {
      const appliedJobs = [];
      appliCationDataKeys.forEach(id => {
        const mathchedData = jobs.find(job => job.id === id);
        appliedJobs.unshift(mathchedData);
      });
      setApplicationData(appliedJobs);
    }
  }, []);

  return (
    <div className="flex gap-5 flex-col items-center justify-center ">
      {applicationData.map(data=><AppliedJobsSingleItem info={data} key={data.id}></AppliedJobsSingleItem>)}
    </div>
  );
};

export default AppliedJobs;
