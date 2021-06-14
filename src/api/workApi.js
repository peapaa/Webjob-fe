import { message } from "antd";
import axiosClient from "./axiosClient";

class WorkApi {
    getAll = (params) => {
        const url = '/works';
        return axiosClient.get(url, { params });
    };
    getOne = (params) => {
        const url = `/works/${params}`;
        return axiosClient.get(url).then(data => {
            return data.data
        });
    };
    postwork = (params) => {
        const url = '/works';
        return axiosClient.post(url, params)
    };
    deletework = (id) => {
        const url = `/works/${id}`;
        return axiosClient.delete(url)
    };
    editwork = (params) => {
        const url = `/works/${params.id}`;
        return axiosClient.patch(url, params).then(data => {
            message.success("Sửa thành công!");
        }).catch(err => {
            message.error("Có lỗi xảy ra!");
        });
    }
}
const workApi = new WorkApi();
export default workApi;