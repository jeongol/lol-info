// 아이템 정보 정의
export type Item = {
  id: string; // 아이템의 고유 ID
  name: string; // 아이템 이름
  plaintext: string; // 간단한 설명

  image: ItemImage; // 아이템 이미지 정보
};

// 아이템 이미지 정의
export type ItemImage = {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};
