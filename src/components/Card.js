import { Link } from "react-router-dom";
import Backup from "../assets/images/backup.jpeg";

export const Card = ({ movie }) => {
  const { id, original_title, overview, poster_path } = movie;
  const image = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : Backup;

  return (
    <div className="flex flex-col max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3">
      <Link to={`/movie/${id}`}>
        <img className="rounded-t-lg w-full" src={image} alt="" />
      </Link>
      <div className="p-4 sm:p-5 flex-grow">
        <Link to={`/movie/${id}`}>
          <h5 className="mb-2 text-lg sm:text-xl font-bold tracking-tight text-gray-900 dark:text-white">{original_title}</h5>
        </Link>
        <p className="mb-2 text-sm sm:text-base font-normal text-gray-700 dark:text-gray-400">{overview}</p>
      </div>
    </div>
  );
};
