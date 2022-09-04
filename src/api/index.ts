import Axios from "axios";

const API = Axios.create({ baseURL: "https://opentdb.com/api.php" });

const getQuizAPI = () => {
  return API.get("/", {
    params: { amount: 10, type: "multiple" },
  });
};

export default getQuizAPI;