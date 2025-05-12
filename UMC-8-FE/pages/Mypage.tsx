import { useEffect, useState } from "react";
import { ResponseMyInfoDto } from "../types/auth";
import { getMyInfo } from './../src/apis/auth';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../src/context/Authcontext";

const MyPage = () => {
  const navigate=useNavigate()
  const { logout } = useAuth()
  const [data, setData] = useState<ResponseMyInfoDto | null>(null);

  useEffect(() => {
    const getData = async () => {
      const response = await getMyInfo();
      console.log(response);

      setData(response);
    };

    getData();
  }, []);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black">
  <div className="text-lg font-semibold mb-8">마이페이지</div>

  {data ? (
    <div className="flex flex-col items-center gap-4 w-80 p-6 border border-gray-700 rounded-md bg-gray-900">
      <div className="w-full">
        <label className="block text-sm text-gray-400 mb-1">이름</label>
        <div className="w-full px-4 py-2 bg-gray-800 rounded text-white">
          {data.data?.name}
        </div>
      </div>

      <div className="w-full">
        <label className="block text-sm text-gray-400 mb-1">이메일</label>
        <div className="w-full px-4 py-2 bg-gray-800 rounded text-white">
          {data.data?.email}
        </div>
      </div>

      <div className="w-full flex justify-center">
        <img
          src={data.data?.avatar as string}
          alt="프로필"
          className="w-24 h-24 rounded-full border border-gray-600"
        />
      </div>

      <button
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4 transition-transform hover:scale-95"
        onClick={handleLogout}
      >
        로그아웃
      </button>
    </div>
  ) : (
    <div className="text-gray-400">로딩 중...</div>
  )}
</div>
  );
};

export default MyPage;