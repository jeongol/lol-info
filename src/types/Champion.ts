// 챔피언 기본값 type 정의
export type champion = {
  id: string;
  name: string;
  title: string;
  image: ChampionImage;
  biurb: string;

  key: string;
};

// 챔피언 이미지 type 정의
export type ChampionImage = {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};
