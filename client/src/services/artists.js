import api from "./apiConfig"

export const signup = async (artistData) => {
  const res = await api.post("/artists", { artist: artistData })
  const { token } = res.data
  if (token) {
    localStorage.setItem("authToken", token)
    api.defaults.headers.common.authorization = `Bearer ${token}`
    console.log(res.data.artist)
    return res.data.artist
  }
}

export const signin = async (artistData) => {
  const res = await api.post("/artists/login", { artist: artistData })
  const { token } = res.data
  if (token) {
    localStorage.setItem("authToken", token)
    api.defaults.headers.common.authorization = `Bearer ${token}`
    console.log(res.data.artist)
    return res.data.artist
    
  }
}

export const verify = async () => {
  const token = localStorage.getItem("authToken")
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const res = await api.get("artists/verify")
    return res.data
  }
}

export const signout = () => {
  localStorage.removeItem("authToken")
  api.defaults.headers.common.authorization = null

}