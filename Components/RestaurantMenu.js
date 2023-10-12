import { useParams } from "react-router-dom"; // import useParams for read `resId`
import {
  swiggy_menu_api_URL,
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from "../constants";
import { MenuShimmer } from "./Shimmer";
import useResMenuData from "../Hooks/useResMenuData"; // imported custom hook useResMenuData which gives restaurant Menu data from swigy api
import useOnline from "../Hooks/useOnline"; // imported custom hook useOnline which checks user is online or not
import UserOffline from "./UserOffline";
import { addItem } from "../Utils/cartSlice";
import { useDispatch } from "react-redux";
const RestaurantMenu = () => {
  const { resId } = useParams(); // call useParams and get value of restaurant id using object destructuring
  const [restaurant, menuItems] = useResMenuData(
    swiggy_menu_api_URL,
    resId,
    RESTAURANT_TYPE_KEY,
    MENU_ITEM_TYPE_KEY
  );

  //disparch
  const dispatch = useDispatch();

  //handle btn

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  const isOnline = useOnline();

  // if user is not Online then return UserOffline component
  if (!isOnline) {
    return <UserOffline />;
  }

  return !restaurant ? (
    <MenuShimmer />
  ) : (
    <div className="restaurant-menu2">
      <div className="restaurant-summary">
        <div className="restaurant-img-container">
          <img
            className="restaurant-img"
            src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
            alt={restaurant?.name}
          />
        </div>

        <div className="restaurant-summary-details">
          <h2 className="restaurant-title">{restaurant?.name}</h2>
          <p className="restaurant-tags">{restaurant?.cuisines?.join(", ")}</p>
          <div className="restaurant-details">
            <div
              className="restaurant-rating"
              style={{
                backgroundClip:
                  restaurant?.avgRating < 4 ? "#DB7C38" : "#48C479",
              }}
            >
              <i className="fa-solid fa-star"></i>
              <span>{restaurant?.avgRating}</span>
            </div>
            {/* <div>{restaurant?.sla?.slaString}</div> */}
            <div>{restaurant?.costForTwoMessage}</div>
          </div>
        </div>
      </div>

      <div className="restaurant-menu-content">
        <div className="menu-items-container">
          <div className="menu-title-wrap">
            <h3 className="menu-title">Recommended</h3>
            <p className="menu-count">{menuItems.length} ITEMS</p>
          </div>
          <div className="menu-items-list">
            {menuItems.map((item) => (
              <div className="menu-item" key={item?.id}>
                <div className="menu-item-details">
                  <h3>{item?.name}</h3>
                  <p className="item-desc">{item?.description}</p>
                  <p className="item-cost">
                  {item?.price > 0
                    ? new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                      }).format(item?.price / 100)
                    : " "}
                </p>
                </div>

                <div className="menu-img-wrapper">
                  {item?.imageId && (
                    <img
                      className="menu-item-img"
                      src={ITEM_IMG_CDN_URL + item?.imageId}
                      alt={item?.name}
                    />
                  )}
                  <button onClick={() => addFoodItem(item)}>Add</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;


//item is array of object with

