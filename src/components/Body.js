import { useContext, useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { SWIGGY_API } from "../utils/app.constants.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withTopRatedLabel } from "../hoc/withTopRatedLabel.js";
import useLocalStorage from "../utils/useLocalStorage.js";
import UserContext from "../utils/UserContext.js";

const RestaurantCardPromoted = withTopRatedLabel(RestaurantCard);

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [setItem, getItem, removeItem, clear] = useLocalStorage();
  const { user, setUser } = useContext(UserContext);

  function filterRestData(searchText) {
    const restData = getItem("res");
    const filterData = restData.filter((restaurant) => {
      return JSON.stringify(restaurant).includes(searchText);
    });
    return filterData;
  }

  function filterTopRatedRestaurants() {
    const resData = getItem("res");
    const filteredData = resData.filter(
      (restaurant) => restaurant.info.avgRating >= 4.5
    );
    return filteredData;
  }

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const jsonData = await data.json();
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

  return (
    <>
      <div className="flex p-2 items-center justify-center bg-orange-200">
        <input
          data-testid="search-input"
          type="text"
          className="border border-solid border-black rounded-md p-1 pl-3 w-40 selection:border-red-300"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          data-testid="search-btn"
          className="m-4 px-4 py-2 bg-red-900 text-white rounded-lg"
          onClick={() => {
            const data = filterRestData(searchText);
            setRestaurants(data);
          }}
        >
          Search
        </button>
        <button
          className="m-4 px-4 py-2 bg-red-900 text-white rounded-xl"
          onClick={() => {
            const data = filterTopRatedRestaurants();
            setRestaurants(data);
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="bg-orange-200">
        <div className="flex items-center justify-center">
          Runtime Change Field
        </div>
        <div className="flex m-2 p-2 items-center justify-center">
          <input
            className="m-2 border border-solid border-black rounded-md p-1 pl-3 w-40 selection:border-red-300"
            placeholder="Name"
            value={user.name}
            onChange={(event) => setUser({ ...user, name: event.target.value })}
          ></input>
          <input
            className="m-2 border border-solid border-black rounded-md p-1 pl-3 w-40 selection:border-red-300"
            placeholder="Email"
            value={user.email}
            onChange={(event) =>
              setUser({ ...user, email: event.target.value })
            }
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap" data-testid="res-list">
        {restaurants.length > 0 ? (
          restaurants.map((restaurant) => {
            return (
              <Link
                key={restaurant.info.id}
                to={`/restaurant/${restaurant.info.id}`}
              >
                {restaurant.info.avgRating >= 4.5 ? (
                  <RestaurantCardPromoted {...restaurant.info} />
                ) : (
                  <RestaurantCard {...restaurant.info} />
                )}
              </Link>
            );
          })
        ) : (
          <div>No Such Restaurants</div>
        )}
      </div>
    </>
  );
};
export default Body;
