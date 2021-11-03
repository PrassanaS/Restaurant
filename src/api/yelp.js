import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: "Bearer Z5hxcYAUXmAvCfpl4f3GhqP9sUQRN9rMR6RJBYFad8j6WMJV2IWwK8Yv3Pb9kWxn1VW13pDFt4X1jrRIgi6QK3JDSRsLtLDm9_E38QU2pFIP0Qj8XOuUDTsRo3eAYXYx",
  },
});