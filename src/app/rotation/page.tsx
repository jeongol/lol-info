"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { requestChampion } from "@/utils/serverApi";
import { championRotation } from "@/types/ChampionRotation";
import { champion } from "@/types/Champion";

export default function ChampionRotation() {
  const [rotationChampions, setRotationChampions] = useState<champion[]>([]);

  useEffect(() => {
    const fetchChampionRotation = async () => {
      const response = await fetch("/api/rotation");
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
    <div className="p-10">
      <div className="mb-10">
        <h1 className="text-6xl text-center">무료 챔피언 로테이션</h1>
      </div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {rotationChampions.map((champion) => (
          <li
            key={champion.id}
            className="border-2 border-cyan-700 rounded-lg shadow-lg overflow-hidden transition-transform duration-200 flex flex-col justify-between"
            style={{ width: "300px", height: "630px" }}
          >
            <Image
              src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
              alt={champion.name}
              width={300}
              height={300}
              className="object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-center">
                {champion.name}
              </h2>
              <p className="text-sm text-center text-gray-500">
                {champion.title}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
