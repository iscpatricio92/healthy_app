const fixedInputClass =
  "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm";
const Input = ({
  handleChange,
  value,
  labelText,
  labelFor,
  id,
  name,
  type,
  isRequired = false,
  placeholder,
  customClass,
  ...rest
}) => {
  switch (type) {
    case "text":
    case "password":
    case "email":
      return (
        <div className="my-5">
          <label htmlFor={labelFor} className="sr-only">
            {labelText}
          </label>
          <input
            onChange={handleChange}
            value={value}
            id={id}
            name={name}
            type={type}
            className={fixedInputClass + customClass}
            placeholder={placeholder}
          />
        </div>
      );
    case "radio":
      return (
        <div className="my-5 flex flex-wrap">
          {rest?.options.map((e) => (
            <div class="flex items-center me-4">
              <input
                key={id}
                type={type}
                name={name}
                value={e}
                onChange={(value) => handleChange(value)}
                checked={value === e}
                className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />

              <label
                key={id + e}
                htmlFor={labelFor}
                className="ms-2 text-sm font-medium"
              >
                {e}
              </label>
            </div>
          ))}
        </div>
      );
    case "dropdown":
      return (
        <div className="my-5">
          <label htmlFor={labelFor}>
            {labelText}
            <select
              name={name}
              placeholder={placeholder}
              value={value}
              onChange={handleChange}
            >
              {rest?.options.map((option) => (
                <option key={id + option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>
      );
    default:
      return null;
  }
};
export default Input;
