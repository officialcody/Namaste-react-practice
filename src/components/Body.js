import { useContext, useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer.js";
import { SWIGGY_API } from "../utils/app.constants.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withTopRatedLabel } from "../hoc/withTopRatedLabel.js";
import useLocalStorage from "../utils/useLocalStorage.js";
import UserContext from "../utils/UserContext.js";

const RestaurantCardPromoted = withTopRatedLabel(RestaurantCard);

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchText)
  );
  return filterData;
}

function filterTopRatedRestaurants(restaurants) {
  const filteredData = restaurants.filter(
    (restaurant) => restaurant.info.avgRating > 4.2
  );
  return filteredData;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [setItem, getItem, removeItem, clear] = useLocalStorage();

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const jsonData = await data.json();
    console.log(jsonData);
    setRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setItem(
      "res",
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Looks like you are offline</h1>;
  }
  if (restaurants.length === 0) {
    return <Shimmer />;
  }
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <div className="m-4 p-4">
        <input
          type="text"
          className="border border-solid border-black rounded-l"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="m-4 px-4 py-2 bg-green-100 rounded-xl"
          onClick={() => {
            const data = filterData(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
        <button
          className="m-4 px-4 py-2 bg-orange-400 rounded-xl"
          onClick={() => {
            const data = filterTopRatedRestaurants(restaurants);
            setRestaurants(data);
          }}
        >
          Top rated restaurants
        </button>
        <input
          value={user.name}
          onChange={(event) => setUser({ ...user, name: event.target.value })}
        ></input>
        <input
          value={user.email}
          onChange={(event) => setUser({ ...user, email: event.target.value })}
        ></input>
      </div>
      <div className="flex flex-wrap">
        {restaurants.map((restaurant) => {
          console.log(restaurant.info);
          return (
            <Link to={`/restaurant/${restaurant.info.id}`}>
              {restaurant.info.avgRating > 4.5 ? (
                <RestaurantCardPromoted {...restaurant.info} />
              ) : (
                <RestaurantCard {...restaurant.info} />
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
