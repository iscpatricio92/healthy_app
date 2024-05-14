import React, { useEffect, useState } from "react";
import { addRoles, getRoles, updateRoles } from "../../../data/roles";
import { useAuth } from "../../../context/auth/authContext";

import { Table } from "../../../components/Table";
import EditRol from "./editRoles";

import Modal from "../../../components/Modal/";
import { useToast } from "../../../hook/useToast";
import AddRol from "./addRoles";

export default function Roles() {
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

  const handleEdit = (rol) => {
    openModal(
      <EditRol data={rol} handleFormChange={handleFormChange} />,
      "EDIT"
    );
  };
  const handleAddRol = () => {
    openModal(<AddRol handleFormChange={handleFormChange} />, "ADD");
  };

  const handleConfirmAdd = async (e) => {
    e.preventDefault();
    try {
      const { status, result } = await addRoles(token, _formData);
      if (status && result) {
        toast.success("¡Agregado correctamente!");
        getDataRoles();
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
      const { status, result, statusCode } = await updateRoles(
        token,
        _formData
      );
      if (status && result) {
        toast.success("¡Cambio realizado correctamente!");
        getDataRoles();
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

  const getDataRoles = async () => {
    try {
      const { status, result, statusCode } = await getRoles(token);
      if (status && result) {
        setDataTable({ ...dataTable, data: result });
      } else {
        toast.warning(statusCode);
      }
    } catch (e) {
      console.error("error", e);
    }
  };
  //states
  const [dataTable, setDataTable] = useState({
    head: ["Rol", "Created", "Status", "Actions"],
    data: [],
    actions: handleEdit,
  });

  //effects
  useEffect(() => {
    getDataRoles();
  }, [token]);

  return (
    <div className="max-w-full overflow-x-auto">
      <div className="relative h-14 w-full">
        <button
          className="absolute top-0 right-0 bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          onClick={handleAddRol}
        >
          Add new
        </button>
      </div>
      <Table dataTable={dataTable} />
      <Modal
        isOpen={isModalOpen}
        title="Edit Rol"
        onClose={closeModal}
        handleSubmit={handleConfirmEdit}
      >
        {modalContent}
      </Modal>
      <Modal
        isOpen={isModalAddOpen}
        title="Add Rol"
        onClose={closeModal}
        handleSubmit={handleConfirmAdd}
      >
        {modalContent}
      </Modal>
    </div>
  );
}
