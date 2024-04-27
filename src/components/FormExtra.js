import { Link } from "react-router-dom";

const FormExtra = ({ isRemember = true, data }) => {
  return (
    <>
      <div className="flex items-center justify-between mt-1">
        {isRemember && (
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-900"
            >
              Remember me
            </label>
          </div>
        )}

        {data.map(({ link, linkText, text }) => (
          <div className="" key={`extraform_${link}`}>
            {text}{" "}
            <Link
              to={link}
              className="font-medium text-purple-600 hover:text-purple-500"
            >
              {linkText}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default FormExtra;
