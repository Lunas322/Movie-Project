import { useEffect, useState } from "react";
import { movieDetail } from "../api/movieDetail";
import { useParams } from "react-router-dom";
import type { DetailType } from "../types/movieTypes";
import Header from "../components/Header";
import Backgrund from "../components/Backgrund";
import DetailCard from "../components/DetailCard";
import Error from "../common/Error";
import Loading from "../common/Loading";

function Detail() {
  const [detail, setDetail] = useState<DetailType>();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const movieId = Number(id);
  
  useEffect(() => {
    async function getDetailData() {
      try {
        setLoading(true);
        const response = await movieDetail(movieId);
        setDetail(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getDetailData();
  }, []);

  if (loading) return <Loading/>;
  if (!detail) return <Error/>;
  return (
    <div className="w-full min-h-screen bg-black text-white">
      <Header />
      <Backgrund detail={detail} />
      <DetailCard detail={detail} movieId={movieId} />
    </div>
  );
}

export default Detail;
