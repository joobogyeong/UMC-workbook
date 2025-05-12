import { useMutation } from "@tanstack/react-query";
import { postLike } from './../../src/apis/lp';
import { ResponseLikeIdDto } from "../../types/lp";
import { queryClient } from "../../src/App";
import { QUERY_KEY } from "../../constants/key";

function usePostLike() {
  return useMutation({
    mutationFn: postLike,
    onSuccess: (data: ResponseLikeIdDto) => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.lps, data.data.lpId],
        exact: true,
      });
    },
  });
}

export default usePostLike;
