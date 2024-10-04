// 서버액션 정의
"use server";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// 챔피언 타입 / api 함수 불러오기
import { requestChampion } from "../../utils/serverApi";

export default async function ChampionsPage() {
  // 챔피언 목록 가져옴
  const champions = await requestChampion();

  return (
    <div>
      <h1>챔피언 리스트</h1>
      <ul>
        {champions.map((champion) => (
          <div key={champion.id}>
            <Link href={`/champions/${champion.id}`}>
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
                alt="이미지 없음"
                width={200}
                height={300}
                priority
              />
              <h2>{champion.name}</h2>
              <h3>{champion.title}</h3>
              <p>{champion.biurb}</p>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
}
