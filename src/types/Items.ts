// 아이템 정보 type 정의
export type Item = {
  id: string;
  name: string;
  plaintext: string;

  image: ItemImage;
};

// 아이템 이미지 type 정의
export type ItemImage = {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};
