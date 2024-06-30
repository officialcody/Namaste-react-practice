import { IMG_CDN_URL } from "../utils/app.constants.js";
const CartItem = ({ name, description, price, imageId }) => {
  return (
    <li className="p-3 sm:pb-4">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <div className="flex-shrink-0">
          <img
            className="w-24 h-24 rounded-full"
            src={IMG_CDN_URL + imageId}
            alt={name}
          />
        </div>
        <div className="grid justify-items-stretch flex-1 min-w-0">
          <p className="text-sm p-2 m-2 font-bold text-gray-900 justify-self-center truncate">
            {name}
          </p>
          <p className="text-sm text-gray-500 text-nowrap truncate items">
            {description}
          </p>
        </div>
        <div className="inline-flex items-center text-base font-bold text-gray-900">
          Price: ₹{(price || defaultPrice) / 100}.00
        </div>
      </div>
    </li>
  );
};
export default CartItem;
