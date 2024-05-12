import React, { useEffect, useState } from "react";

const EditRol = ({ data, handleSubmit, handleFormChange }) => {
  //TODO check the checkbox, it does the right thing but it seems to indicate the opposite, it may just be labels
  const [formData, setFormData] = useState({
    name: data.name,
    deleteAt: data.deleteAt,
    id: data.id,
  });

  const handleChangeValue = (e) => {
    const { name, value, checked, type } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  useEffect(() => {
    handleFormChange(formData);
  }, [formData, handleFormChange]);

  return (
    <form>
      <div className="mb-5">
        <label htmlFor="name" className="mb-3 block text-base font-medium">
          Rol Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChangeValue}
          className="form-input w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className=" ">
        <label className="mb-3 block text-base font-medium" htmlFor="deleteAt">
          Status
        </label>
        <input
          name="deleteAt"
          type="checkbox"
          className=" form-input form-checkbox h-6 w-6  inline-flex rounded border-gray-300 transition duration-200 ease-in-out"
          checked={formData.deleteAt}
          onChange={handleChangeValue}
        />

        <span className="   ml-2 text-gray-900 font-medium inline-flex items-center space-x-2 ">
          {!formData.deleteAt ? "active" : "inactive"}
        </span>
      </div>
      {formData.deleteAt && (
        <p className="bg-warning/50 mb-5 text-black">
          If you deactivate a role it could cause error for other users
        </p>
      )}
    </form>
  );
};

export default EditRol;
