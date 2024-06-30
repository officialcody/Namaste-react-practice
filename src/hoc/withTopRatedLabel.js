export const withTopRatedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute bottom-5 right-0 bg-gradient-to-r from-red-500 from-10% to-yellow-500 to-90%  text-white m-2 p-2 rounded-lg">
          Top Rated
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
