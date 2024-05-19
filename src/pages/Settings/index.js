import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Roles from "./Roles";
import Modules from "./Module";
import OperationModule from "./OperationModule";

export default function SettingsPage() {
  const { hash } = useLocation();
  const navigate = useNavigate();
  const [_hash, setHash] = useState(hash || "#roles");
  useEffect(() => {
    console.log(_hash, "LOAD OR CHANGE=?");
    navigate(_hash);
  }, [_hash, navigate]);

  const handleActiveTab = (e) => {
    let tab_el = e.target;
    let content_el = tab_el.getAttribute("data-tabs-target");
    if (content_el !== _hash) {
      setHash(content_el);
    }
  };

  //TODO only get the element when is active, today get all tabs including content
  const tabs = {
    Roles: {
      id: "profile-tab",
      target: "#roles",
      element: <Roles />,
    },
    Modules: {
      id: "modules-tab",
      target: "#modules",
      element: <Modules />,
    },
    Other: {
      target: "#operation-module",
      id: "operationModule-tab",
      element: <OperationModule />,
    },
  };
  return (
    <div>
      <div>
        <ul
          className="tabs flex flex-col sm:flex-row "
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          {Object.entries(tabs).map((tab) => (
            <li className="mr-2" role="presentation" key={tab[0]}>
              <button
                className={`  rounded-sm  ${
                  _hash === tab[1].target
                    ? "active border-b-2 border-b-purple-500 border-stroke bg-white dark:text-white  dark:border-strokedar dark:bg-boxdark"
                    : ""
                }  tab py-2 px-6 block hover:text-purple-500`}
                id={`${tab[1].id}`}
                data-tabs-target={`${tab[1].target}`}
                type="button"
                role="tab"
                aria-selected={_hash === tab[1].target ? true : false}
                onClick={handleActiveTab}
              >
                {tab[0]}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div id="myTabContent">
        {Object.entries(tabs).map((tab) => (
          <div
            key={"tab_content" + tab[0]}
            className={
              "bg-gray-50 pb-4 rounded-lg dark:bg-gray-800 " +
              (_hash === tab[1].target ? "active" : "hidden")
            }
            id={tab[1].target}
            role="tabpanel"
          >
            <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
              {tab[1].element}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
