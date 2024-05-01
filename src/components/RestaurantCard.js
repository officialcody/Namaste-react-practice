import { IMG_CDN_URL } from "../utils/app.constants.js";
const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  sla,
  avgRating,
}) => {
  return (
    <div className="m-4 p-4 w-[250px] min-h-[470px] bg-gray-100 rounded-lg">
      <img className="rounded-lg" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold py-4 text-lg">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{sla.deliveryTime} minutes</h4>
      <h4>{avgRating} rating</h4>
    </div>
  );
};
export default RestrauntCard;
