import React from "react";
import Paginate from "./Paginate";

export const Table = ({ dataTable }) => {
  const { head, data, actions } = dataTable;
  console.log(actions);
  return (
    <>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-2 text-left dark:bg-meta-4">
            {head.map((item) => (
              <th
                key={item}
                className={`px-4 py-4 font-medium text-black dark:text-white ${
                  item !== "Actions" ? "min-w-[220px]  xl:pl-11" : ""
                }`}
              >
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((rol) => (
            <tr key={rol.id}>
              <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                <h5 className="font-medium text-black dark:text-white">
                  {rol.name}
                </h5>
              </td>
              <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                <p className="text-black dark:text-white">{rol.createdAt}</p>
              </td>
              <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                <p
                  className={`{
                    ${
                      !rol.deleteAt
                        ? "bg-success text-success"
                        : "text-danger bg-danger"
                    }  
                      inline-flex rounded-full  bg-opacity-10 px-3 py-1 text-sm font-medium `}
                >
                  {!rol.deleteAt ? "active" : "inactive"}
                </p>
              </td>
              <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                <div className="flex items-center space-x-3.5">
                  <button
                    className="hover:text-primary"
                    onClick={() => actions(rol)}
                  >
                    Editar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/*<Paginate data={[]} />*/}
    </>
  );
};
