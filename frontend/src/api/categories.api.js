import api from "./axios";

/* USER (read-only) */
export const getCategories = () => api.get("/categories");

/* ADMIN */
export const createCategory = (data) =>
  api.post("/admin/categories", data);

export const updateCategory = (id, data) =>
  api.put(`/admin/categories/${id}`, data);

export const deleteCategory = (id) =>
  api.delete(`/admin/categories/${id}`);
