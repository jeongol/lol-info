import { NextResponse } from "next/server";

// api key 가져오기
const apiKey = process.env.RIOT_API_KEY;

// riot api 호출
export async function GET() {
  const res = await fetch(
    "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
    {
      headers: {
        "X-Riot-Token": apiKey!,
      },
    }
  );
  const result = await res.json();

  console.log(result);

  return NextResponse.json({ result });
}
