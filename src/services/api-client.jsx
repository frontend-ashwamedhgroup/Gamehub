import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3c7f2b7d977344089493872bd93693f0",
  },
});
