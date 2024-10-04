// 아이템 정보 type 정의
export interface Item {
  name: string;
  plaintext: string;
  image: itemImage;

  key: string;
}

// 아이템 이미지 type 정의
export interface itemImage {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}
