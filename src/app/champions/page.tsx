// 서버액션 정의
"ues server";

import React from "react";
// 챔피언 타입, api 함수 불러오기
import { champion } from "../../types/Champion";
import { requestChampion } from "../../utils/serverApi";

async function fetchChampions(): Promise<champion[]> {
  const championData = await requestChampion();
  return Object.values(championData.data);
}

export default async function ChampionsPage() {
  // ISR 적용해서 챔피언 데이터를 가져옴
  const champions = await fetchChampions();

  return (
    <div>
      <h1>Champion List</h1>
      <ul>
        {champions.map((champion: champion) => (
          <li key={champion.id}>
            <h2>
              {champion.name} - {champion.title}
            </h2>
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
              alt={champion.name}
              width={200}
            />
            <p>{champion.biurb}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
