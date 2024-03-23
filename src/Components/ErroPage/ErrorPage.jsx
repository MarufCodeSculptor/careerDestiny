import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex h-screen items-center justify-center flex-col">
      <h4 className="text-center text-8xl">
        Opps... <br />
        <span className="text-2xl font-bold">page not found</span>
      </h4>
      <br />
      <Link className="mt-10" to="/">
        {' '}
        <button className="btn btn-primary">Back to Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
