import axios from "axios";

export default {
  getAllItems: function () {
    return axios.get("/api/items");
  },
  getSearchedItems: function (search) {
    return axios.get("api/items/viaSearch/" + search);
  },
};
