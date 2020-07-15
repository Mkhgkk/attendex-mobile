import client from "./client";

const apiEndPoint = "/members";

const getMemberDetail = () => client.get(`${apiEndPoint}/me`);

export default {
  getMemberDetail,
};
