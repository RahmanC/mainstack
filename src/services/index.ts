import httpService from "./httpService";

const url = process.env.REACT_APP_BASE_URL
export const getViews = async () => {
    const respData = await httpService.get(url + "/graph_data")
    return respData.data
}

