import React from 'react';
import { useParams } from 'react-router-dom';
import WorkPart1 from '../components/workPart1';
import WorkPart2 from '../components/workPart2';
import WorkPart3 from '../components/workPart3';

export default function PageWork() {
  const params = useParams();
  console.log(params.id);
  // json 가져오는 파트
  // 1번째 파트
  // 2번째 파트
  // 3번째 파트
  // 4번째 파트

  return (
    <div className="pageWork">
      <WorkPart1 />
      <WorkPart2 />
      <WorkPart3 />
    </div>
  );
}
