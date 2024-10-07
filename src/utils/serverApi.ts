"use server";

import { champion } from "@/types/Champion";
import { item } from "@/types/Items";

// 버전 불러오기
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
  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`,
    {
      next: {
        revalidate: 86400,
      },
    }
  );
  const championData = await response.json();
  const champion: champion[] = Object.values(championData.data);
  return champion;
};

// 챔피언 상세정보 불러오기 (버전 적용)
export const requestChampionDetail = async (id: string) => {
  const version = await requestVersion();
  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${id}.json`
  );
  const championDetailData = await response.json();
  return championDetailData.data[id];
};

// 아이템 목록 불러오기 (버전 적용)
export const requestItems = async () => {
  const version = await requestVersion();
  const response = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`
  );
  const itemsData = await response.json();
  const items: item[] = Object.values(itemsData.data);
  return items;
};
