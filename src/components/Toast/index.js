import {
  InformationCircleIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/24/solid";
const Toast = ({ data }) => {
  const { message, title, type } = data;
  console.log(data);
  const toastTypes = {
    success: {
      icon: <CheckCircleIcon className="size-6 text-green-400" />,
      textClass: "text-green-800",
      containerClass: "bg-green-100",
      progressBarClass: "success",
    },
    warning: {
      icon: <ExclamationCircleIcon className="size-6 text-orange-400" />,
      textClass: "text-orange-800",
      containerClass: "bg-orange-100",
      progressBarClass: "warning",
    },
    info: {
      icon: <InformationCircleIcon className="size-6 text-blue-400" />,
      textClass: "text-blue-800",
      containerClass: "bg-blue-100",
      progressBarClass: "info",
    },
    error: {
      icon: <ShieldExclamationIcon className="size-6 text-red-400" />,
      textClass: "text-red-800",
      containerClass: "bg-red-100",
      progressBarClass: "error",
    },
  };
  const { icon, textClass, progressBarClass, containerClass } =
    toastTypes[type];
  return (
    <div
      className={`${containerClass} px-3 py-4 mx-2  shadow rounded-md text-lg flex items-center max-w-lg `}
    >
      {icon}
      <div className="flex flex-col ml-2">
        <span className={`${textClass}`}>{title}</span>
        <span className={`${textClass} text-sm`}>{message}</span>
      </div>
    </div>
  );
};

export default Toast;
