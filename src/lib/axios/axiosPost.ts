import axios from './index'


export const axiosPost = async (route:string, body:any, config:any) => {
    let response;
    try {
      const { data } = await axios.post(route, body, config);
      response = data;
    } catch (error:any) {
      throw error.response?.data;
    }
  
    return response;
  };
  