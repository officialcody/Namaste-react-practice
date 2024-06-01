import { IMG_CDN_URL } from "../utils/app.constants.js";
const CartItem = ({ name, description, price, imageId }) => {
  return (
    <div className="m-4 p-4 w-[250px] min-h-[470px] bg-gray-100 rounded-lg">
      <img className="rounded-lg" src={IMG_CDN_URL + imageId} />
      <h2 className="font-bold py-4 text-lg">{name}</h2>
      <h3>{description}</h3>
      <h4>Price: {parseFloat(price / 100)}</h4>
    </div>
  );
};
export default CartItem;
