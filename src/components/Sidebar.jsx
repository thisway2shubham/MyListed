import React, { useState } from "react";

const Sidebar = () => {
  const [expandSidebar, setExpandSidebar] = useState("h-24");
  const showSidebar = () => {
    setExpandSidebar((prev) => (prev === "h-24" ? "h-[540px]" : "h-24"));
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleMouseOver = () => {
    setIsPopupOpen(true);
  };

  const handleMouseOut = () => {
    setIsPopupOpen(false);
  };

  const PopupComponent = () => {
    return (
      <div class="container">            
              <p class="mb-1 text-neutral-500 dark:text-neutral-300 font-mono">
                Listed Fans,Pune 
                (Maharashtra)
              </p>
              <p class="mb-1 text-neutral-500 dark:text-neutral-300 font-mono">
                7000185743
              </p>
              <p class="mb-1 text-neutral-500 dark:text-neutral-300 font-mono">
              shubhamish1996@
              gmail.com
              </p>
            </div>
         
      
    );
  };

  return (
    <aside
      className={`flex flex-col justify-between bg-black xl:py-16 px-4 py-8 xl:px-12 rounded-3xl text-white w-64 lg:w-1/5 fixed top-0 lg:static overflow-hidden transition-all duration-500 lg:h-auto ${expandSidebar}`}
    >
      <div>
        <h1 className="font-bold text-4xl hover:font-extrabold">
          Board.
          <span
            className="inline-block lg:hidden ml-5 rotate-90 font-extrabold text-4xl"
            onClick={showSidebar}
          >
            &#8250;
          </span>
        </h1>
        <ul className=" mt-14 space-y-10">
          <li className="cursor-pointer flex space-x-2 xl:space-x-5 items-center">
            <img src="./assets/dashboard.png" alt="dashboard" />
            <p className="text-lg hover:font-bold">Dashboard</p>
          </li>
          <li className="cursor-pointer flex space-x-2 xl:space-x-5 items-center">
            <img src="./assets/transaction.png" alt="dashboard" />
            <p className="text-lg hover:font-bold">Transactions</p>
          </li>
          <li className="cursor-pointer flex space-x-2 xl:space-x-5 items-center">
            <img src="./assets/schedule.png" alt="dashboard" />
            <p className="text-lg hover:font-bold">Schedules</p>
          </li>
          <li className="cursor-pointer flex space-x-2 xl:space-x-5 items-center">
            <img src="./assets/user.png" alt="dashboard" />
            <p className="text-lg hover:font-bold">Users</p>
          </li>
          <li className="cursor-pointer flex space-x-2 xl:space-x-5 items-center">
            <img src="./assets/setting.png" alt="dashboard" />
            <p className="text-lg hover:font-bold">Settings</p>
          </li>
        </ul>
      </div>

      <ul className="text-sm space-y-5">
        <li className="cursor-pointer flex space-x-2 xl:space-x-5">
          <p className="text-lg hover:font-bold">Help</p>
        </li>
        <li className="cursor-pointer flex space-x-2 xl:space-x-5">
          <button onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>
            <p className="text-lg hover:font-bold">Contact Us</p>
          </button>
          {isPopupOpen && <PopupComponent />}
          <p className="text-lg hover:font-bold"></p>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;

{
  /* <button>
            <Link to="" onClick={this.contactUs}>Contact Us
              
            </Link>
            <p className="text-lg hover:font-bold"></p>
          </button> */
}
