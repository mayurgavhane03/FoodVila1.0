import { IMG_CDN_URL } from "../constants";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
  user,
}) => {
  return (
    <div className="restaurant-menu">
      <div className="card ">
        <img src={IMG_CDN_URL + cloudinaryImageId} alt="Img" />
        
        <div className="name-rating-box">
          <h3 className=" ">{name}</h3>
          <div className="name-rating" style={{ backgroundColor: avgRatingString < 4 ? '#DB7C38' : '#48C479' }}>
          {avgRatingString}
        </div>
        
        </div>
        <h5>{cuisines.join(", ")}</h5><h5>{areaName}</h5>
        <span>
          <h4>
            <i className="fa-solid fa-star"></i>
            {avgRatingString}
          </h4>

          <h4>•</h4>
          <h4>{sla?.lastMileTravelString ?? "2.0 km"}</h4>
          <h4>•</h4>
          <h4>{costForTwo ?? "₹200 for two"}</h4>
          <h4>{}</h4>
        </span>
      </div>
    </div>
  );
};

export default RestaurantCard;
