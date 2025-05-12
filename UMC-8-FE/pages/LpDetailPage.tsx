import { useParams } from "react-router-dom";
import useGetLpDetail from "../hooks/queries/useGetLpDetail.ts";
import { Heart } from "lucide-react";
import { Likes, ResponseLikeIdDto, ResponseLpDto } from "../types/lp.ts";
import useGetMyInfo from './../hooks/queries/useGetMyInfo';
import { useAuth } from "../src/context/Authcontext.tsx";
import { UseMutateFunction } from "@tanstack/react-query";
import usePostLike from './../hooks/mutations/usePostLike';
import useDeleteLike from './../hooks/mutations/useDeleteLike';

const LpDetailPage = () => {
    const { lpId } = useParams();
    const { accessToken } = useAuth();
    const {
        data: lp,
        isPending,
        isError,
    }: {
        data: ResponseLpDto | undefined;
        isPending: boolean;
        isError: boolean;
    } = useGetLpDetail({ lpId: Number(lpId) });

    const { data: me } = useGetMyInfo(accessToken);
    const { mutate: likeMutate }: UseMutateFunction<ResponseLikeIdDto> = usePostLike();
    const { mutate: disLikeMutate }: UseMutateFunction<ResponseLikeIdDto> = useDeleteLike();


    const isLiked: boolean | undefined = lp?.data.likes
        .map((like: Likes) => like.userId)
        .includes(me?.data.id as number);


    const handleLikeLp = () => {
        likeMutate({ lpId: Number(lpId) });
    };

    const handleDislikeLp = () => {
        disLikeMutate({ lpId: Number(lpId) });
    };


    if (isPending && isError) {
        return <></>;
    }

    return (
        <div className="mt-12">
            <h1>{lp?.data.id}</h1>
            <h1>{lp?.data.title}</h1>
            <img src={lp?.data.thumbnail} alt={lp?.data.title} />
            <p>{lp?.data.content}</p>

            <button onClick={isLiked ? handleDislikeLp : handleLikeLp}>
                <Heart color={isLiked ? "red" : "black"} fill={isLiked ? "red" : "transparent"} />
            </button>
        </div>
    );
};

export default LpDetailPage;
