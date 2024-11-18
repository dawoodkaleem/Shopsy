// import React from "react";
// import { IoColseOutline } from "react-icons/io5";
import PropTypes from "prop-types";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/80 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
              {/* Header / */}
              <div className="flex items-center justify-between  font-semibold">
                <div>
                  <h1>Order now</h1>
                </div>
                <div>
                  <IoCloseOutline
                    className="text-2xl cursor-pointer  "
                    onClick={() => setOrderPopup(false)}
                  />
                </div>
              </div>
              {/* Form section  */}
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-full border border-gray-800 dark:border-gray-500  dark:bg-gray-800 px-2 py-1 mb-4"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-full border border-gray-800 dark:border-gray-500  dark:bg-gray-800 px-2 py-1 mb-4"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full rounded-full border border-gray-800 dark:border-gray-500  dark:bg-gray-800 px-2 py-1 mb-4"
                />
                <div className="flex justify-center">
                  <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 rounded-full py-1 px-2 text-white">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Prop type validation
Popup.propTypes = {
  orderPopup: PropTypes.bool.isRequired, // Expects a boolean for orderPopup
  setOrderPopup: PropTypes.func.isRequired, // Expects a function for setOrderPopup
};

export default Popup;
