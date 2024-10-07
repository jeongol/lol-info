import Link from "next/link";

export default function Home() {
  return (
    <>
      <section>
        <h1>리그오브레전드 정보사이트</h1>
        <p>롤 정보 사이트 입니다.</p>
        <ul className="text-3xl">
          <Link href="/rotation">금주 무료 챔피언</Link>
        </ul>
        <ul className="text-3xl">
          <Link href="/champions">챔피언 정보</Link>
        </ul>
        <ul className="text-3xl">
          <Link href="/items">아이템 정보</Link>
        </ul>
      </section>
    </>
  );
}
