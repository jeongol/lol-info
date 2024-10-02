const api = process.env.RIOT_API_KEY;

if (!api) {
  throw new Error("API key is missing");
}

async function fetchLatestVersion(): Promise<string> {
  try {
    const versionRes = await fetch(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    );
    const versions = await versionRes.json();
    return versions[0]; // 최신 버전은 배열의 첫 번째 요소
  } catch (error) {
    console.error("Error fetching version list:", error);
    throw error;
  }
}

// 챔피언 목록 가져오기
export async function fetchChampionList() {
  try {
    const latestVersion = await fetchLatestVersion();

    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/champion.json`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch champion list");
    }

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching champion list:", error);
    throw error;
  }
}

// 아이템 목록 가져오기
export async function fetchItemList() {
  try {
    const latestVersion = await fetchLatestVersion();

    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/item.json`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch item list");
    }

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching item list:", error);
    throw error;
  }
}
