import { useMutation } from "react-query";
import { baseRepository } from "../../repositories/base";

export const useMutationCreate = (url) => {
  const mutationRes = useMutation((variables) =>
    baseRepository.post(url, variables).then((res) => res.data),
  );

  const mutate = (variables, options) => {
    mutationRes.mutate(variables, { ...options });
  };

  const invalidateQueries = () => {};

  const returnItem = {
    data: mutationRes.data,
    isLoading: mutationRes.isLoading,
    isSuccess: mutationRes.isSuccess,
    invalidateQueries,
    mutate,
  };

  return returnItem;
};
