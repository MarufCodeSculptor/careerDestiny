import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../utilities/localStorage';

const JobDetails = () => {
  const jobs = useLoaderData();
  //   console.log(jobs);

  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find(job => job.id === idInt);
  //   console.log(job);

  const handleApplyJob = () => {
    saveJobApplication(idInt);
    toast('You have applied successfully');
  };

  return (
    <div className="container mx-auto bg-green-200 rounded-lg min-h-screen">
      <h2 className="text-4xl text-center font-bold  p-10 text-blue-500">
        Jod Details
      </h2>
      <hr className="border border-dotted border-black my-5 lg:my-10" />
      <div className="grid gap-4 md:grid-cols-4 h-full">
        <div className="md:col-span-3 border-2 border-blue-700 h-full">
          <h2 className="text-4xl">Details coming here</h2>
          <h2>Job Details of: {job.job_title}</h2>
          <p>{job.company_name}</p>
        </div>
        <div className="border-2 border-blue-700  h-full">
          <h2 className="text-2xl">Side things</h2>
          {/*         apply buton-------------------- */}
          <button onClick={handleApplyJob} className="btn btn-primary w-full">
            Apply Now
          </button>
        </div>
      </div>

      <div className="font-bold w-fit mx-auto rounded-lg uppercase bg-yellow-400 p-5 mt-20">
        {' '}
        ...under construction ...
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
