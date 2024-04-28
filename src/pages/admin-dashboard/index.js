import { useTokenValidation } from "../../contexts/authContext";
const DashboardPage = () => {
  useTokenValidation();

  return (
    <div>
      <button onClick={() => console.log("hola")}>Hola</button>
    </div>
  );
};

export default DashboardPage;
