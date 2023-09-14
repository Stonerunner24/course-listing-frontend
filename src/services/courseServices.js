import apiClient from "./services.js";
var baseURL = "/courses/"

export default {
  getAll() {
    return apiClient.get(baseURL);
  },
  get(course_number) {
    return apiClient.get(baseURL+`${course_number}`);
  },
  create(data) {
    return apiClient.post(baseURL, data);
  },
  update(course_number, data) {
    return apiClient.put(baseURL+`${course_number}`, data);
  },
  delete(course_number) {
    console.log('deleting');
    return apiClient.delete(baseURL+`${course_number}`);
  },
};
