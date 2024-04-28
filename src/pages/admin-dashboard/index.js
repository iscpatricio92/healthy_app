import { useEffect, useState } from "react";
import { useTokenValidation, useAuth } from "../../contexts/authContext";
import { getUserInfo } from "../../data/user";
const DashboardPage = () => {
  const { getToken, logout } = useAuth(null);
  const [user, setUser] = useState(null);
  //useTokenValidation();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = getToken();
        const response = await getUserInfo(token);
        console.log(response);
        setUser(response?.result);
      } catch (e) {
        console.error("Error al obtener información del usuario:", e);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="flex flex-col">
      <button className="bg-gray-500 h-3 w-10" onClick={logout}>
        Hola
      </button>
      {user ? (
        <div>
          <h2>Perfil de Usuario</h2>
          <p>Nombre: {user.name}</p>
          <p>User Id: {user.id}</p>
          <p>Profile Image: {user?.image}</p>
          <p>Language {user?.language}</p>
          <p>Rol: {user.rol?.name}</p>
          <p>Rol Id: {user.rol?.id}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default DashboardPage;
