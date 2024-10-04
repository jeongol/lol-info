"ues server";

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
          <div key={item.name}>
            {/* 트러블슈팅 */}
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/item/${item.image.full}`}
              alt="이미지 없음"
              width={100}
              height={100}
              priority
            />
            <h2>{item.name}</h2>
            <h3>{item.plaintext}</h3>
          </div>
        ))}
      </ul>
    </div>
  );
}

// 이미지는 나오는데... 빨간 오류 해결할것

// 1. **데이터 페칭 함수 작성**
//     - `utils/serverApi.ts` 파일에 `fetchItemList` 함수를 작성하여 모든 아이템의 목록을 가져옵니다.
// 2. **Server Actions 정의 및 사용**
//     - `app/items/page.tsx` 파일에서 **Server Actions**를 정의하고, 이를 통해 데이터를 가져옵니다.
//     - **Server Actions**는 데이터를 가져와 컴포넌트에 전달합니다.
// 3. **데이터 렌더링**
//     - 가져온 데이터를 기반으로 아이템 목록을 렌더링합니다.
//     - 각 아이템 카드에 링크를 추가하여 상세 페이지로 이동할 수 있도록 합니다.

// async function fetchItems(): Promise<Item> {
//   const itemsData = await requestItems();
//   return Object.values(itemsData.data);
// }
