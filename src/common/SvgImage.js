const SvgImage = ({ name, color }) => {
  const image = require(`../assets/images/icons/icon-${name}.svg`);
  if (name && image) return <img src={image} className={color} />;
};
export default SvgImage;
