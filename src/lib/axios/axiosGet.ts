import axios from "./index";

export const axiosGet = async (route: string, params?: any, config?: Axios.AxiosXHRConfigBase<unknown> | undefined) => {
  let response;
  try {
    const { data } = await axios.get(route, { params, ...config });
    response = data;
  } catch (error:any) {
    throw error.response?.data;
  }

  return response;
};