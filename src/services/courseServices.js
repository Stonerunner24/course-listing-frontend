import apiClient from "./services.js";

export default {
  getAll() {
    return apiClient.get("/");
  },
  get(course_number) {
    return apiClient.get(`/course-t4/courses/:${course_number}`);
  },
  create(data) {
    return apiClient.post("/course-t4/courses/", data);
  },
  update(course_number, data) {
    return apiClient.put(`/course-t4/courses/:${course_number}`, data);
  },
  delete(course_number) {
    return apiClient.delete(`/course-t4/courses/:${course_number}`);
  },
};
