import {useMutation} from 'react-query';
import {baseRepository} from '../../../../../../../Downloads/repositories/base';

export const useMutationEdit = (url) => {

    const mutationRes = useMutation(
        (variables) => baseRepository.put(url, variables).then(res => res.data)
    )

    const mutate = (variables, options) => {
        mutationRes.mutate(variables, {...options});
    }

    const invalidateQueries = () => {

    }

    const returnItem = {
        data: mutationRes.data,
        isLoading: mutationRes.isLoading,
        invalidateQueries,
        mutate
    }

    return returnItem;
}