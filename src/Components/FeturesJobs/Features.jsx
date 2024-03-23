import { useEffect, useState } from 'react';
import Job from '../Job/Job';

const Features = () => {
  const [jobs, setJobs] = useState([]);
  // this is not the best way to load show all data
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch('jobs.json')
      .then(res => res.json())
      .then(data => setJobs(data));
  }, []);
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-6">
        {jobs.slice(0, dataLength).map(job => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
    </div>
  );
};

export default Features;
