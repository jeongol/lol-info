import React from "react";
import Image from "next/image";

// 아이템 타입 / api 함수 불러오기
import { requestItems, requestVersion } from "../../utils/serverApi";

export default async function itemspages() {
  // 아이템 목록 가져옴
  const items = await requestItems();
  const version = await requestVersion();

  return (
    <div className="p-10">
      <div className="mb-10">
        <h1 className="text-6xl text-center">아이템 리스트</h1>
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <li
              key={index}
              className="border-2 border-cyan-700 rounded-lg shadow-lg overflow-hidden transition-transform duration-200 flex flex-col justify-between items-center p-4"
              style={{ width: "210px", height: "200px" }}
            >
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image.full}`}
                alt={item.name}
                width={100}
                height={100}
                className="object-contain"
                priority
              />
              <div className="text-center mt-4">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <h3 className="text-sm text-gray-500">{item.plaintext}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
