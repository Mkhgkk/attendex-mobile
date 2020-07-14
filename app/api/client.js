import { create } from "apisauce";
import settings from "../config/settings";

const apiClient = create({
  baseURL: settings.apiUrl,
});

// apiClient.addAsyncRequestTransform(async(request)=>{

// })

export default apiClient;
