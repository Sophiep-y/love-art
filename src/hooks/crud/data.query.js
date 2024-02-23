import {useQuery} from "react-query";
import {baseRepository} from "../../repositories/base";

const getData = async (url, params) => {
    const {data} = await baseRepository.get(url, params);
    return data;
}


const useDataQuery = (
    queryKeys,
    options
) => {
    const queryRes = useQuery([queryKeys.url,
        queryKeys.params], () => getData(`${queryKeys.url}`, queryKeys.params), {
        ...options,
        keepPreviousData: true
    });
    const returnItems = {
        data: queryRes.data,
        isLoading: queryRes.isLoading,
        isFetching: queryRes.isFetching,
        refetch: queryRes.refetch,
        error: queryRes.error
    }

    return returnItems;
}

export {getData, useDataQuery};
