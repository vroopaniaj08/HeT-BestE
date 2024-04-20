import axios from "axios";
class WebMethod{
    getapi(url,token){
        return axios.get(url,{
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          })
    }
    postapi(url,data){
        return axios.post(url,data);
    }
    putapiWithData(url,data,token){
      // console.log("hello")
      return axios.put(url, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      })
    }
}
export default new WebMethod()