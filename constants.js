// Image CDN URL for Restaurant card
export const IMG_CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

// Image CDN URL for Restaurant Menu
export const ITEM_IMG_CDN_URL =
  // "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
// Swiggy API to get Restaurant data with corsproxy
export const swiggy_api_URL =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.8585816&lng=75.3497311&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.8585816&lng=75.3497311&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.8585816&lng=75.3497311&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
  // "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING";

// Swiggy API to get Restaurant Menu data with corsproxy
export const swiggy_menu_api_URL =
  "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=";

// shimmer card unit
export const shimmer_card_unit = 20;

// shimmer Menu card unit
export const shimmer_menu_card_unit = 4;



//store links 

export const App_store  =  "https://apps.apple.com/in/app/swiggy-food-grocery-delivery/id989540920"
export const play_store = "https://play.google.com/store/apps/details?id=in.swiggy.android&hl=en&gl=US"

// Social Media Links
export const Linkedin_Link = "https://www.linkedin.com/in/mayur-rajendra-gavhane-1077b123b/";
export const Instagram_Link = "https://www.instagram.com/mayur_gavhane_003/";
export const Github_Link = "https://github.com/mayurgavhane03";
export const Email_Link = "mailto:mayurrgavhane2003@gmail.com";

// Github Authorization Token
export const options = {
  method: "GET",
  headers: {
    Authorization: "",
  },
};

// menu items api card type key
export const MENU_ITEM_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"; //menu😭😭😭😭
export const RESTAURANT_TYPE_KEY =
  "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";
