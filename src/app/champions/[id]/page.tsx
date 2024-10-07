import { Metadata } from "next";
import Image from "next/image";

import { requestChampionDetail } from "@/utils/serverApi";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const champion = await requestChampionDetail(params.id);
  return {
    title: champion.name,
    description: champion.title,
  };
}

export default async function ChampionPage({ params }: { params: Params }) {
  const champion = await requestChampionDetail(params.id);
  return (
    <div>
      <h1>{champion.name}</h1>
      <h2>{champion.title}</h2>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
        alt="오류"
        width={200}
        height={300}
      />
      <p>{champion.blurb}</p>
    </div>
  );
}
