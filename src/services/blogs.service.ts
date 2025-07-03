import { axiosGet } from "@/lib/axios/axiosGet";
import { Blog } from "@/types/blogs";

export const fetchAllBlogs = async() =>{
    const { data } = await axiosGet('/blogs/') as { data: Blog[] };
    return data;
}


export const fetchBlog = async({_id} : Blog) => {
    const {data} = await axiosGet("/",_id) as {data:Blog};
    return data

}