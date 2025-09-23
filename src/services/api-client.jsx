import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3c7f2b7d977344089493872bd93693f0",
  },
});

class APIClient {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  getAll = (config) => {
    return axiosInstance.get(this.endpoint, config).then((res) => res.data);
  };
}
export default APIClient;
