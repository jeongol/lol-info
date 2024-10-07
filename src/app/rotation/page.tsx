"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { championRotation } from "@/types/championRotation";
import { champion } from "@/types/champion";
import { requestChampion } from "@/utils/serverApi";

export default function ChampionRotation() {
  const [rotationChampions, setRotationChampions] = useState<champion[]>([]);

  useEffect(() => {
    const fetchChampionRotation = async () => {
      const response = await fetch("http://localhost:3000/api/rotation");
      const data: championRotation = await response.json();

      const champions = await requestChampion();

      const filteredChampions = Object.values(champions).filter((champion) => {
        return data.result.freeChampionIds.includes(Number(champion.key));
      });
      setRotationChampions(filteredChampions);
    };

    fetchChampionRotation();
  }, []);

  return (
    <div>
      <h1>무료 챔피언 로테이션</h1>
      <ul>
        {rotationChampions.map((champion) => (
          <li key={champion.id}>
            <h2>{champion.name}</h2>
            <p>{champion.title}</p>
            <Image
              src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
              alt={champion.name}
              width={100}
              height={100}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
