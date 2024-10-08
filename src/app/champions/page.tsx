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
    <div className="p-10">
      <div className="mb-10">
        <h1 className="text-6xl text-center">챔피언 리스트</h1>
      </div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {champions.map((champion) => (
          <li
            key={champion.id}
            className="border-2 border-cyan-700 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-200 flex flex-col justify-between"
            style={{ width: "300px", height: "300px" }}
          >
            <Link href={`/champions/${champion.id}`}>
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
                alt="이미지 없음"
                width={300}
                height={300}
                priority
              />
              <h2 className="text-lg font-semibold mt-2 text-center">
                {champion.name}
              </h2>
              <h3 className="text-lg font-semibold mt-2 text-center">
                {champion.title}
              </h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
