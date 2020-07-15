import client from "./client";

const apiEndPoint = "/places";

const getPlace = () => client.get(apiEndPoint);

export default {
  getPlace,
};
