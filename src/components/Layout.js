import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
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
      <div className="pb-44 overflow-x-hidden bg-gray-100 "> {children}</div>

      {/* {footer} */}
      <div className="fixed bottom-10 left-0 right-0 sm:bottom-0">
        <div className="flex w-full justify-center">
          {menuItems.map((item, index) => (
            <div className="flex flex-col justify-end items-center">
              {location.pathname === item.path && (
                <div className="flex flex-col items-center">
                  <div className="h-5 w-10 sm:w-8 bg-gray-500 rounded-t-full sm:hidden "></div>
                  <div className="h-5 w-20 sw:w-8 bg-gray-500 rounded-t-full text-center ">
                    <i className={`${item.icon} text-md text-white`}> </i>
                  </div>
                </div>
              )}
              <div
                className={`px-20 sm:px-10 bg-gray-500 text-white py-2 ${
                  index === 0 && "rounded-l"
                } ${
                  index === menuItems.length - 1 && "rounded-r"
                } flex items-center justify-center space-x-2 `}
              >
                {location.pathname !== item.path && (
                  <i
                    className={`${item.icon} text-white text-xl`}
                    onClick={() => navigate(item.path)}
                  ></i>
                )}
                <Link
                  to={`${item.path}`}
                  className={`text-xl ${
                    item.path !== location.pathname && "sm:hidden"
                  } `}
                >
                  {item.title}
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
