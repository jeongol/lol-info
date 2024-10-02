// app/api/rotation/route.ts
import { NextResponse } from "next/server";
import { ChampionRotation } from "../../../types/ChampionRotation.ts";

export async function GET() {
  const apiKey = process.env.RIOT_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: "API key 없음" }, { status: 500 });
  }

  const apiUrl =
    "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations";

  try {
    // Riot Games API 호출
    const response = await fetch(apiUrl, {
      headers: {
        "X-Riot-Token": apiKey,
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "챔피언 로테이션 불러오기 실패" },
        { status: 500 }
      );
    }

    // 응답 데이터를 json 변환
    const data: ChampionRotation = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
