import Image from 'next/image';

export default function Home() {
	return (
		<section className="rounded-xl border bg-white p-8">
			<p className="mb-2 text-[13px] font-semibold text-blue-600">
				App Router Practice
			</p>

			<h2 className="mb-4 text-[28px] font-bold">
				Next.js App Router 실습 프로젝트
			</h2>

			<p className="mb-8 text-[14px] leading-6 text-gray-600">
				이 프로젝트는 layout.tsx, page.tsx, routing, rendering, fetching,
				상태관리, 인증처리를 학습하기 위한 간단한 실습 프로젝트입니다.
			</p>

			<div className="grid grid-cols-3 gap-4">
				<div className="rounded-lg border p-5">
					<h3 className="mb-2 text-[15px] font-bold">Routing</h3>
					<p className="text-[13px] text-gray-500">
						page.tsx와 폴더 구조로 URL을 만듭니다.
					</p>
				</div>

				<div className="rounded-lg border p-5">
					<h3 className="mb-2 text-[15px] font-bold">Layout</h3>
					<p className="text-[13px] text-gray-500">
						공통 Header, Footer를 layout.tsx에서 관리합니다.
					</p>
				</div>

				<div className="rounded-lg border p-5">
					<h3 className="mb-2 text-[15px] font-bold">Rendering</h3>
					<p className="text-[13px] text-gray-500">
						SSR, SSG, ISR 렌더링 전략을 실습합니다.
					</p>
				</div>
			</div>
		</section>
	);
}
