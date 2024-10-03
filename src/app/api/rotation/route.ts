import { NextResponse } from "next/server";
import { ChampionRotation } from "../../../types/ChampionRotation";

// api key 가져오기
const apiKey = process.env.RIOT_API_KEY;

// riot api 호출
export const request = async () => {
  const res = await fetch(
    "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
    {
      headers: {
        "X-Riot-Token": `${apiKey}`,
      },
    }
  );

  // ChampionRotation 타입으로 변환
  const data: ChampionRotation = await res.json();

  // json 형태로 응답
  return NextResponse.json({ data });
};
