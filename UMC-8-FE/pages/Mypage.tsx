import { useEffect, useState } from "react";
import { ResponseMyInfoDto } from "../types/auth";
import { getMyInfo } from './../src/apis/auth';

const MyPage = () => {
  const [data, setData] = useState<ResponseMyInfoDto | null>(null);

  useEffect(() => {
    const getData = async () => {
      const response = await getMyInfo();
      console.log(response);

      setData(response);
    };

    getData();
  }, []);

  return (
    <div>
      {data ? (
        <>
          <div>이름: {data.data.name}</div>
          <div>이메일: {data.data.email}</div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default MyPage;