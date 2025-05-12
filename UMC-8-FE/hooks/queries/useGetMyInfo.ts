import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "../../constants/key.ts";
import { getMyInfo } from './../../src/apis/auth';


function useGetMyInfo(accessToken: string | null) {
  return useQuery({
    queryKey: [QUERY_KEY.myInfo],
    queryFn: getMyInfo,
  });
}

export default useGetMyInfo;
