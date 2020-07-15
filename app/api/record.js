import client from "./client";

const apiEndPoint = "/records";

const getRecords = () => client.get(apiEndPoint + "/me");

const newRecord = () => client.post(apiEndPoint);

export default {
  getRecords,
  newRecord,
};
