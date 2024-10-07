import React from "react";
import Image from "next/image";

// 아이템 타입 / api 함수 불러오기
import { requestItems } from "../../utils/serverApi";

export default async function itemspages() {
  // 아이템 목록 가져옴
  const items = await requestItems();

  return (
    <div>
      <h1>아이템 리스트</h1>
      <ul>
        {items.map((item) => (
          <li key={item.name}>
            {/* 트러블슈팅 이미지 커밋 12번째 코드확인 (빨간색 오류) */}
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/item/${item.image.full}`}
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

// 아이템 변환 코드 참고용
// // const filteredItems = items
// ?.filter((item) => item.maps["11"] && item.gold.purchasable)
// .sort((a, b) => a.gold.total - b.gold.total);
