import { Metadata } from "next";

// api 함수 가져오기
import { requestChampionDetail } from "../../../utils/serverApi";
import { championDetails } from "../../../types/championDetail";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

// params의 타입 정의

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const champion = await requestChampionDetail(params.id);
  return {
    title: champion.name,
    description: champion.title,
  };
}

const ChampionPage = async ({ params }: Params) => {
  const champion: championDetails = await requestChampionDetail(params.id);

  return (
    <div>
      <h1>{champion.name}</h1>
      <h2>{champion.title}</h2>
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`}
        alt={champion.name}
      />
      <p>{champion.blurb}</p>
    </div>
  );
};

export default ChampionPage;
