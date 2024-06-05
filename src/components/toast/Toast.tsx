

type ToastProps = {
  type: string;
  message: string;
  onClose: () => void;
};
const Toast = ({ type, message, onClose }: ToastProps) => {
  const icons: { [key: string]: JSX.Element } = {
    success: (
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
      </svg>
    ),
    danger: (
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
      </svg>
    ),
    warning: (
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
      </svg>
    ),
  };

  const colors: { [key: string]: string } = {
    success:
      "text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200",
    danger: "text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200",
    warning:
      "text-orange-500 bg-orange-100 dark:bg-orange-700 dark:text-orange-200",
  };
  return (
    <div
      className={` fixed bottom-0 left-[20px] flex items-center w-full max-w-xs p-4 mb-4 text-text-1 bg-dark-bg rounded-lg   shadow-sm shadow-gray-600`}
      role="alert"
    >
      <div
        className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg ${colors[type]}`}
      >
        {icons[type]}
        <span className="sr-only">{type} icon</span>
      </div>
      <div className="ms-3 text-sm font-normal ">{message}</div>
      <button
        type="button"
        className="ms-auto -mx-1.5 -my-1.5 bg-input rounded-full text-gray-400 hover:text-text-1  focus:ring-2  p-1.5 hover:opacity-80 inline-flex items-center justify-center h-8 w-8 outline-none"
        onClick={onClose}
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );
};

export default Toast;
