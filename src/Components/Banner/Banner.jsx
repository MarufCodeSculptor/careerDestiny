const Banner = () => {
  return (
    <div className="min-h-96 bg-indigo-700 flex items-center justify-center">
      <div className="">
        <div className="inline">
          <span className="loading loading-spinner text-info"></span>
          <span className="loading loading-spinner text-success"></span>
          <span className="loading loading-spinner text-warning"></span>
          <span className="loading loading-spinner text-error"></span>
        </div>
        <h3 className="text-3xl text-center  ps-0 p-10 rounded-lg inline ">
          Home page banner
        </h3>
        <div className="inline">
          <span className="loading "></span>
          <span className="loading  loading-spinner text-secondary"></span>
          <span className="loading loading-spinner text-accent"></span>
          <span className="loading loading-spinner text-neutral"></span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
