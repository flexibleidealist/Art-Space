import api from "./apiConfig"

export const getAllShows = async () => {
  try { 
    const res = await api.get("/shows")
    return res.data
  } catch (error) {
    throw error
  }
}

export const getShow = async (id) => {
  try {
    const res = await api.get(`/shows/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const createShow = async (showData) => {
  try{
    const res = await api.post(`/shows`, { show: showData })
    return res.data
  } catch (error) {
    throw error
  }
}

export const updateShow = async (id, showData) => {
  try {
    const res = await api.put(`/shows/${id}`, { show: showData })
    return res.data
  } catch (error) {
    throw error
  }
}

export const deleteShow = async (id) => {
  try {
    await api.delete(`/shows/${id}`)
  } catch (error) {
    throw error
  }
}

// export const checkForShow = async (artistID) => {
//   try{
//     const res = await api.get(`/shows/check/${artistID}`)
//     return res.data
//   } catch (error) {
//     throw error
//   }
// }