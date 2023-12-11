import React from "react";

function LeftSider() {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col text-2xl  gap-3 sm:flex-row">
          <a href="https://www.google.com/">
            {" "}
            <i class="ri-facebook-circle-line  text-gray-400"></i>
          </a>

          <a href="">
            <i class="ri-mail-line text-gray-400 "></i>
          </a>
          <a>
            <i class="ri-instagram-line text-gray-400 "></i>
          </a>
          <a>
            {" "}
            <i class="ri-linkedin-box-line text-gray-400 "></i>
          </a>
          <a>
            <i class="ri-github-line text-gray-400 "></i>
          </a>
        </div>
        <div className="w-[1px] h-40 bg-[#125f63] sm:hidden"></div>
      </div>
    </div>
  );
}

export default LeftSider;
