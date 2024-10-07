// 챔피언 로테이션 페이지

// 챔피언 로테이션 type 정의
export interface championRotation {
  result: {
    freeChampionIds: number[];
    freeChampionIdsForNewPlayers: number[];
    maxNewPlayerLevel: number;
  };
}

// 챔피언 기본 정보 type 정의
export interface champion {
  id: string;
  name: string;
  title: string;
  image: championImage;
  biurb: string;
  key: string;
}

// 챔피언 이미지 type 정의
export interface championImage {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

// 챔피언 리스트 type 정의 (추가적인 로테이션에 사용)
export interface championList {
  data: Record<string, champion>;
}
