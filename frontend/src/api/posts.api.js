import api from "./axios";

/* PUBLIC */
export const getPosts = () => api.get("/posts");
export const getPost = (id) => api.get(`/posts/${id}`);

/* USER */
export const createPost = (data) => api.post("/posts", data);
export const myPosts = () => api.get("/my-posts");
export const updatePost = (id, data) => api.put(`/posts/${id}`, data);
export const deletePost = (id) => api.delete(`/posts/${id}`);

/* ADMIN */
export const adminPosts = () => api.get("/admin/posts");
export const approvePost = (id) =>
  api.patch(`/admin/posts/${id}/approve`);
export const rejectPost = (id) =>
  api.patch(`/admin/posts/${id}/reject`);
