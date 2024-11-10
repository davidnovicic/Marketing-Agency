import React from "react";
import { Link, useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();
  const menuItems = [
    {
      title: "Home",
      path: "/",
      icon: "ri-home-2-line",
    },
    {
      title: "About",
      path: "/about",
      icon: "ri-info-card-line",
    },
    {
      title: "Clients",
      path: "/clients",
      icon: "ri-group-2-fill",
    },
    {
      title: "Contact",
      path: "/contact",
      icon: "ri-contacts-book-fill",
    },
  ];

  return (
    <div>
      {/* {content} */}
      <div className="pb-44 overflow-x-hidden  "> {children}</div>

      {/* {footer} */}
      <div className="fixed bottom-10 left-0 right-0">
        <div className="flex w-full justify-center">
          {menuItems.map((item, index) => (
            <div className="flex flex-col justify-end">
              {location.pathname === item.path && (
                <div className="flex flex-col items-center">
                  <div className="h-5 w-10 bg-red-200 rounded-t-full "></div>
                  <div className="h-5 w-20 bg-red-200 rounded-t-full text-center ">
                    <i className={`${item.icon} text-md`}> </i>
                  </div>
                </div>
              )}
              <div
                className={`px-20 bg-red-200 py-2 ${
                  index === 0 && "rounded-l"
                } ${
                  index === menuItems.length - 1 && "rounded-r"
                } flex items-center justify-center space-x-2 `}
              >
                {location.pathname !== item.path && (
                  <i className={`${item.icon} text-gray-500 text-xl`}></i>
                )}
                <Link to={`${item.path}`} className="text-xl">
                  {" "}
                  {item.title}{" "}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Layout;
