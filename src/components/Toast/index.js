const Toast = ({ data }) => {
  const { message, title, type } = data;
  console.log(data);
  const toastTypes = {
    success: {
      icon: "icon",
      iconClass: "text-green-500",
      containerClass: "bg-green-200",
      progressBarClass: "success",
    },
    warning: {
      icon: "icon",
      iconClass: "text-orange-800",
      containerClass: "bg-orange-200",
      progressBarClass: "warning",
    },
    info: {
      icon: "icon",
      iconClass: "text-blue-800",
      containerClass: "bg-blue-200",
      progressBarClass: "info",
    },
    error: {
      icon: "icon",
      iconClass: "text-red-800",
      containerClass: "bg-red-200",
      progressBarClass: "error",
    },
  };
  const { icon, iconClass, progressBarClass, containerClass } =
    toastTypes[type];
  return (
    <div
      className={`${containerClass} px-6 py-4 mx-2  shadow rounded-md text-lg flex items-center max-w-lg `}
    >
      <svg
        viewBox="0 0 24 24"
        className={`${iconClass} w-5 h-5 sm:w-5 sm:h-5 mr-3`}
      >
        <path
          fill="currentColor"
          d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
        ></path>
      </svg>
      <div className="flex flex-col">
        <span className={`${iconClass}`}>{title}</span>
        <span className={`${iconClass} text-sm`}>{message}</span>
      </div>
    </div>
  );
};

export default Toast;
