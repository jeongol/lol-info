// 챔피언 로테이션 페이지

// 챔피언 로테이션 type 정의
export interface championRotation {
  result: {
    freeChampionIds: number[];
    freeChampionIdsForNewPlayers: number[];
    maxNewPlayerLevel: number;
  };
}
