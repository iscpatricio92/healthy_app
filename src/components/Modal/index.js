const Modal = ({ isOpen, onClose, title, children, handleSubmit }) => {
  const modalOverlayClass = isOpen
    ? "fixed inset-0 z-9999 flex items-center justify-center bg-black bg-opacity-50 "
    : "hidden";
  const modalContentClass = isOpen ? "bg-white p-4 w-100" : "hidden";

  if (!isOpen) return null;

  //TODO add an event when the modal is clicked outside or ESC is pressed this should close. the same in the "DropdownUser component"
  return (
    <div className={modalOverlayClass}>
      <div className={modalContentClass}>
        <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 py-1 dark:border-white/10">
          <h5
            className="text-xl font-medium leading-normal text-surface dark:text-white"
            id="exampleModalLabel"
          >
            {title}
          </h5>

          <button
            onClick={onClose}
            type="button"
            aria-label="Close"
            className="box-content rounded-none border-none text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
          >
            <span className="[&amp;>svg]:h-6 [&amp;>svg]:w-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </button>
        </div>
        <div className="py-2">{children}</div>
        <div className="">
          <div className="mt-4 flex justify-end">
            <button
              onClick={onClose}
              className="modal-close px-4 bg-gray-100 p-3 rounded-lg text-black hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="px-4 bg-primary p-3 ml-3 rounded-lg text-white hover:bg-purple-800"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
