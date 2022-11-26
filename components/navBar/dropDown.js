import Link from "next/link";
import { useState } from "react";
import Button from "./button";

const DropDown = ({ userName }) => {
  const [dropDownState, setDropDownState] = useState(false);

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-link rounded-btn">
        <Button
          userName={userName}
          dropDownState={dropDownState}
          setDropDownState={setDropDownState}
        />
      </label>
      {dropDownState && (
        <div>
          <ul
            tabIndex={0}
            className="p-2 mt-4 shadow menu dropdown-content bg-base-100 dark:bg-slate-800 rounded-box w-52"
          >
            <li className="lg:text-base md:text-base dark:hover:bg-slate-700 sm:text-sm">
              <Link href="/login">Sign out</Link>
            </li>
            <li
              className="lg:text-base md:text-base dark:hover:bg-slate-700 sm:text-sm"
              onClick={(e) => {
                e.preventDefault;
              }}
            ></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
