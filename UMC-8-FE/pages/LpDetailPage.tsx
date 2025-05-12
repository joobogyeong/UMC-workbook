import { useParams } from "react-router-dom";
import useGetLpDetail from "../hooks/queries/useGetLpDetail.ts";
import { Heart } from "lucide-react";
import { ResponseLpDto } from "../types/lp.ts";

const LpDetailPage = () => {
  const { lpId } = useParams();
  const {
    data: lp,
    isPending,
    isError,
  }: {
    data: ResponseLpDto | undefined;
    isPending: boolean;
    isError: boolean;
  } = useGetLpDetail({ lpId: Number(lpId) });

  if (isPending && isError) {
    return <></>;
  }

  return (
    <div className="mt-12">
      <h1>{lp?.data.id}</h1>
      <h1>{lp?.data.title}</h1>
      <img src={lp?.data.thumbnail} alt={lp?.data.title} />
      <p>{lp?.data.content}</p>

      <button>
        <Heart />
      </button>
    </div>
  );
};

export default LpDetailPage;
