import { useEffect, useRef, useState } from "react";

function useThrottle<T>(value: T, delay: number = 500) {
  // 1. 상태 변수 : 최종적으로 스로틀링 적용된 값 저장
  const [throttledValue, setThrottledValue] = useState<T>(value);

  // 2. Ref : 마지막으로 실행된 시간을 기록하는 변수
  const lastExecuted = useRef<number>(Date.now());

  // 3. useEffect : value, delay가 변경될 때마다 아래 로직 실행
  useEffect(() => {
    // 현재 시간과 마지막 실행된 시각 + delay 비교
    if (Date.now() >= lastExecuted.current + delay) {
      // 충분한 시간이 지난 경우
      lastExecuted.current = Date.now();
      setThrottledValue(value); // 값 업데이트 및 리렌더링
    } else {
      // 아직 시간이 지나지 않은 경우, delay 후에 업데이트 예약
      const timerId: number = setTimeout(() => {
        lastExecuted.current = Date.now();
        setThrottledValue(value);
      }, delay);

      // CleanUp Function: 이전 타이머가 있다면 제거하여 중복 방지
      return () => clearTimeout(timerId);
    }
  }, [value, delay]);

  return throttledValue;
}

export default useThrottle;
