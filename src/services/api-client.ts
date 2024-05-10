import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c6a6d4e84d4547adae17d9bb9e1f97d6",
  },
});
