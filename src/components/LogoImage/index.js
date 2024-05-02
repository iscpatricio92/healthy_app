import { NavLink } from "react-router-dom";

const LogoImage = ({
  isDesktop,
  image,
  alt,
  className,
  urlTo = "/",
  children,
}) => {
  return (
    <NavLink className="flex items-center" to={urlTo}>
      <img src={image} alt={alt} className={className} />
      {children}
    </NavLink>
  );
};
export default LogoImage;
