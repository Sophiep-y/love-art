import {http} from "../utils/api";


export default class BaseRepository {
    get = async (url,
                 params,
                 headers) => {
        return http.get(url, {params, headers});
    }

    post = async (
        url,
        body,
        params,
        headers,
    ) => {
        return http.post(url, body, {
            params,
            headers
        });
    }

    put = async (
        url,
        body,
        params,
        headers,
    ) => {
        return http.put(url, body, {
            params,
            headers
        });
    }


    patch = async (
        url,
        body,
        params,
        headers,
    ) => {
        return http.patch(url, body, {
            params,
            headers
        });
    }

    delete = async (
        url,
        body,
        params,
        headers,
    ) => {
        return http.delete(url,
            {
                data: body,
                params,
                headers
            });
    }
}

export const baseRepository = new BaseRepository();