import React from "react";
import Image from "next/image";

// 아이템 타입 / api 함수 불러오기
import { requestItems, requestVersion } from "../../utils/serverApi";

export default async function itemspages() {
  // 아이템 목록 가져옴
  const items = await requestItems();
  const version = await requestVersion();
  return (
    <div>
      <h1>아이템 리스트</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image.full}`}
              alt="이미지 없음"
              width={100}
              height={100}
              priority
            />
            <h2>{item.name}</h2>
            <h3>{item.plaintext}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
