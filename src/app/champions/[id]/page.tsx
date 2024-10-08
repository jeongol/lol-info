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
    <div className="p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-6">{champion.name}</h1>
      <h2 className="text-2xl font-semibold text-center mb-4">
        {champion.title}
      </h2>
      <div className="flex justify-center mb-6">
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
          alt="오류"
          width={1000}
          height={1000}
          className="rounded-lg shadow-lg"
        />
      </div>
      <p className="text-lg text-gray-700 text-center max-w-[1000px] mb-4">
        {champion.blurb}
      </p>
    </div>
  );
}
