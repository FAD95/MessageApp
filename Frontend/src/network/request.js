import axios from "axios"

const request = route => {
  try {
    return axios.get(route)
  } catch (e) {
    console.error(e)
  }
}
export default request
