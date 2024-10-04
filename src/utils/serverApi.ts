// 오픈

"use server";

import { champion } from "@/types/Champion";
import { Item } from "@/types/Items";

// version 불러오기
export const requestVersion = async () => {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  const versionData = await res.json();
  const version = versionData[0];
  return version;
};

// 챔피언 목록 불러오기 (Isr) (버전 적용)
export const requestChampion = async () => {
  const version = await requestVersion();
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`,
    {
      next: {
        revalidate: 86400,
      },
    }
  );
  const championData = await res.json();
  const champion: champion[] = Object.values(championData.data);
  return champion;
};

// 아이템 상세정보 불러오기 (버전 적용)
export const requestItems = async () => {
  const version = await requestVersion();
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`
  );
  const itemsData = await res.json();
  const items: Item[] = Object.values(itemsData.data);
  return items;
};

// 키값 / 이미지 url 주소 확인

// 챔피언 상세정보 불러오기 (버전 적용)
export const requestChampionDetail = async (id: string) => {
  const version = await requestVersion();
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${id}.json`
  );
  const championDetailData = await res.json();
  return championDetailData.data[id];
};

//

// 아이템 변환 코드 참고용
// // const filteredItems = items
// ?.filter((item) => item.maps["11"] && item.gold.purchasable)
// .sort((a, b) => a.gold.total - b.gold.total);
