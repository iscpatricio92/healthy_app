import React, { useEffect, useState } from "react";
import { getRoles, updateRoles } from "../../../data/roles";
import { useAuth } from "../../../context/auth/authContext";

import { Table } from "../../../components/Table";
import EditRol from "./editRoles";

import Modal from "../../../components/Modal/";
import { useToast } from "../../../hook/useToast";

export default function Roles() {
  const { getToken } = useAuth();
  const token = getToken();
  const toast = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [_formData, setFormData] = useState(null);

  //functions

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setModalContent(null);
    setIsModalOpen(false);
  };

  const handleEdit = (rol) => {
    openModal(<EditRol data={rol} handleFormChange={handleFormChange} />);
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
        console.log("ERROR", statusCode);
      }
    } catch (e) {
      console.log("ERRORs", e);
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
        <button className="absolute top-0 right-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
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
    </div>
  );
}
