import { useContext } from "react";
import { IMG_CDN_URL } from "../utils/app.constants.js";
import UserContext from "../utils/UserContext.js";
const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  sla,
  avgRating,
}) => {
  const { user } = useContext(UserContext);
  return (
    <div className="m-4 p-4 w-[250px] min-h-[470px] bg-gray-100 rounded-lg">
      <img
        className="object-cover rounded-lg w-auto min-h-[250px]"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <h2 className="font-bold py-4 text-lg text-nowrap truncate">{name}</h2>
      <h3 className="text-nowrap truncate">{cuisines.join(", ")}</h3>
      <h4>{sla.deliveryTime}</h4>
      <h4>{avgRating} rating</h4>
      <h5 className="font-bold">{user.name}</h5>
    </div>
  );
};
export default RestrauntCard;
