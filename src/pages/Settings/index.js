import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Roles from "./Roles";
import Modules from "./Modules";

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
      id: "others-tab",
      target: "#others",
    },
  };
  return (
    <div>
      <div>
        <ul
          className="tabs flex flex-col sm:flex-row"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          {Object.entries(tabs).map((tab) => (
            <li className="mr-2" role="presentation" key={tab[0]}>
              <button
                className={`${
                  _hash === tab[1].target
                    ? "active border-b-2 border-purple-500 bg-white"
                    : ""
                }  tab text-gray-600 py-2 px-6 block hover:text-purple-500`}
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
              "bg-gray-50 py-4 rounded-lg dark:bg-gray-800 " +
              (_hash === tab[1].target ? "active" : "hidden")
            }
            id={tab[1].target}
            role="tabpanel"
          >
            {tab[1].element}
          </div>
        ))}
      </div>
    </div>
  );
}
