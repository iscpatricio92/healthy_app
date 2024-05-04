import { useProfile } from "../../hook/useUser";
const DashboardPage = () => {
  const { user } = useProfile();
  return (
    <div className="flex flex-col">
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
