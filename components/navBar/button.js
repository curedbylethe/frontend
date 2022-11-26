const Button = ({ userName, dropDownState, setDropDownState }) => {
  return (
    <div>
      <button
        className="flex overflow-hidden text-black align-middle dark:text-white btn btn-link"
        onClick={() => {
          !dropDownState ? setDropDownState(true) : setDropDownState(false);
        }}
      >
        <p className="flex-row sm:text-sm lg:text-lg whitespace-nowrap md:text-lg ">
          {userName}
          {/* heroicon expand more svg */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </p>
      </button>
    </div>
  );
};

export default Button;
