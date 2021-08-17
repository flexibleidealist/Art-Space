import api from "./apiConfig"

export const getWork = async (id) => {
  try {
    const res = await api.get(`/works/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const editWork = async (id, workData) => {
  try {
    const res = await api.put(`/works/${id}`, workData)
    return res.data
  } catch (error) {
  throw error
  }
}

export const createWork = async (workData) => {
  try {
    const res = await api.post("/works", workData)
    return res.data
  } catch (error) {
    throw error
  }
}

export const deleteWork = async (id) => {
  try {
    await api.delete(`/works/${id}`)
  } catch (error) {
    throw error
  }
}