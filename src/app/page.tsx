import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <section className="text-center p-6">
        <h1 className="text-3xl font-bold mb-4">리그오브레전드 정보사이트</h1>
        <p className="text-lg mb-6">롤 정보 사이트 입니다.</p>
        <ul>
          <li className="mt-6 text-2xl">
            <Link
              href="/rotation"
              className="hover:text-cyan-700 transition-colors duration-300"
            >
              금주 무료 챔피언
            </Link>
          </li>
          <li className="mt-6 text-2xl">
            <Link
              href="/champions"
              className="hover:text-cyan-700 transition-colors duration-300"
            >
              챔피언 정보
            </Link>
          </li>
          <li className="mt-6 text-2xl">
            <Link
              href="/items"
              className="hover:text-cyan-700 transition-colors duration-300"
            >
              아이템 정보
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
