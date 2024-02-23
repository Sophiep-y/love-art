import {useMutation, useQueryClient} from "react-query";
import {baseRepository} from "../../../../../../../Downloads/repositories/base";

export const useMutationDelete = (
    url
) => {
    const mutationRes = useMutation((variables) => {
            return baseRepository
                .delete(`${url}`, null, variables)
                .then((res) => res.data);
        }
    );


    const mutate = (variables, options) => {
        mutationRes.mutate(variables, {...options});
    };

    const queryClient = useQueryClient();

    const invalidateQueries = (querykey) => {
        queryClient.invalidateQueries([querykey?.url]);
    };

    const returnItem = {
        data: mutationRes.data,
        isLoading: mutationRes.isLoading,
        invalidateQueries,
        mutate,
    };

    return returnItem;
};
