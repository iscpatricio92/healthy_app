import React, { useEffect, useState } from "react";
import { useAuth } from "../../../context/auth/authContext";
import { useToast } from "../../../hook/useToast";
import { Table } from "../../../components/Table";

import { getModules, updateModules, addModules } from "../../../data/modules";
import Modal from "../../../components/Modal";

const Modules = () => {
  const { getToken } = useAuth();
  const token = getToken();
  const toast = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalAddOpen, setIsAddModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [_formData, setFormData] = useState(null);

  //functions
  const openModal = (content, type) => {
    if (type === "EDIT") {
      setModalContent(content);
      setIsModalOpen(true);
    }
    if (type === "ADD") {
      setModalContent(content);
      setIsAddModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalContent(null);
    setIsModalOpen(false);
    setIsAddModalOpen(false);
  };

  const handleEdit = (module) => {
    openModal();
    //<EditModule data={module} handleFormChange={handleFormChange} />,
    //"EDIT"
  };

  const handleAddModule = () => {
    //openModal(<AddModule handleFormChange={handleFormChange} />, "ADD");
  };

  const handleConfirmAdd = async (e) => {
    e.preventDefault();
    console.log("ADD", _formData);
    try {
      const { status, result, statusCode } = await addModules(token, _formData);
      if (status && result) {
        toast.success("¡Agregado correctamente!");
        getDataModules();
        closeModal();
      } else {
        toast.warning(result?.response?.message);
      }
    } catch (e) {
      toast.error(e?.message);
    }
  };

  const handleConfirmEdit = async (e) => {
    e.preventDefault();

    try {
      const { status, result, statusCode } = await updateModules(
        token,
        _formData
      );
      if (status && result) {
        toast.success("¡Cambio realizado correctamente!");
        getDataModules();
        closeModal();
      } else {
        toast.warning(statusCode);
      }
    } catch (e) {
      toast.error(e);
    }
  };

  const handleFormChange = (formData) => {
    setFormData(formData);
  };

  const getDataModules = async () => {
    try {
      const { status, result, statusCode } = await getModules(token);
      if (status && result) {
        setDataTable({ ...dataTable, data: result });
      } else {
        toast.warning(statusCode);
      }
    } catch (e) {
      console.error("error", e);
    }
  };

  const [dataTable, setDataTable] = useState({
    head: ["Module", "Created", "Status", "Actions"],
    data: [],
    actions: handleEdit,
  });
  //effects
  useEffect(() => {
    getDataModules();
  }, [token]);

  return (
    <div className="max-w-full overflow-x-auto">
      <div className="relative h-14 w-full">
        <button
          className="absolute top-0 right-0 bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          onClick={handleAddModule}
        >
          Add new
        </button>
      </div>
      <Table dataTable={dataTable} />
      <Modal
        isOpen={isModalOpen}
        title="Edit Module"
        onClose={closeModal}
        handleSubmit={handleConfirmEdit}
      >
        {modalContent}
      </Modal>
      <Modal
        isOpen={isModalAddOpen}
        title="Add Module"
        onClose={closeModal}
        handleSubmit={handleConfirmAdd}
      >
        {modalContent}
      </Modal>
    </div>
  );
};

export default Modules;
