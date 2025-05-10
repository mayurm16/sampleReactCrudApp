import React from "react";
import { Outlet, NavLink } from "react-router";
export const Sidebar = () => {
  const menuItems = [
    {
      text: "CREATE",
      url: "/",
      key: "createRecord",
    },
    {
      text: "UPDATE",
      url: "/update",
      key: "updateRecord",
    },
    {
      text: "FETCH",
      url: "/fetch",
      key: "fetchRecord",
    },
    {
      text: "DELETE",
      url: "/delete",
      key: "deleteRecord",
    },
  ];
  return (
    <>
   
      <div className="sidebarcontainer">
        <div className="sidebar">
          <ul >
            {menuItems.map((menuItem) => (
              <li className="nav-item" key={menuItem.key}>
                <NavLink  className="nav-item" key={menuItem.key} to={menuItem.url}>
                  {menuItem.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Sidebar;
