import { useMutation } from "@tanstack/react-query";
import { deleteLike } from "../../src/apis/lp.ts";
import { ResponseLikeIdDto } from "../../types/lp.ts";
import { QUERY_KEY } from "../../constants/key.ts";
import { queryClient } from "../../src/App.tsx";

function useDeleteLike() {
    return useMutation({
        mutationFn: deleteLike,
        onSuccess: (data: ResponseLikeIdDto) => {
            queryClient.invalidateQueries({
                queryKey: [QUERY_KEY.lps, data.data.lpId],
                exact: true,
            });
        },
    });
}

export default useDeleteLike;
