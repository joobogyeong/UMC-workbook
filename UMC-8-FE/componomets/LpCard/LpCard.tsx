import React from "react";
import { Lp } from "../../types/lp";
import { useNavigate } from "react-router-dom";

interface LpCardProps {
  lp: Lp;
}

const LpCard = ({ lp }: LpCardProps) => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/lps/${lp.id}`)}
     className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
      <div className="aspect-square w-full relative overflow-hidden">
        <img
          src={lp.thumbnail}
          alt={lp.title}
          className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 p-1">
          <h3 className="text-white text-sm font-semibold group-hover:text-pink-400">
            {lp.title}
          </h3>
        </div>
      </div>
    </div>


  );
};

export default LpCard;