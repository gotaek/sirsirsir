import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import WorkPart1 from '../components/workPart1';
import WorkPart2 from '../components/workPart2';
import WorkPart3 from '../components/workPart3';
import WorkPart4 from '../components/workPart4';
import data from '../data.json';

export interface Part1Data {
  explanation1: string;
  image: string;
  explanation2: string;
}

export interface Part2Data {
  explanation: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  image6: string;
}

export interface Part3Data {
  explanation1: string;
  explanation2: string;
  image1: string;
  image2: string;
  image3: string;
}

export interface Part4Data {
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  explanation: string;
  title: string;
  date: string;
}

interface ContentsData {
  part1: Part1Data;
  part2: Part2Data;
  part3: Part3Data;
  part4: Part4Data;
}

export default function PageWork() {
  const params = useParams();
  const [partData, setPartData] = useState<ContentsData | undefined>(undefined);

  useEffect(() => {
    if (params.id) {
      const [pageName, pageIndex] = params.id.split('-');
      let partData;
      if (pageName === 'sirs' && data[0].category === 'past') {
        partData = data[0].contents[Number(pageIndex) - 1];
      } else if (pageName === 'irs' && data[1].category === 'present') {
        partData = data[1].contents[Number(pageIndex) - 1];
      } else if (pageName === 'ir' && data[2].category === 'future') {
        partData = data[2].contents[Number(pageIndex) - 1];
      }
      setPartData(partData);
    }
  }, [params.id, partData]);

  if (!partData) {
    return null; // Return null or a loading indicator if partData is not available yet
  }

  const { part1, part2, part3, part4 } = partData;

  return (
    <div className="pageWork">
      <WorkPart1 data={part1} />
      <WorkPart2 data={part2} />
      <WorkPart3 data={part3} />
      <WorkPart4 data={part4} />
    </div>
  );
}
