import { getNow } from '../lib/time';

type Post = {
	id: number;
	title: string;
	body: string;
};

export const revalidate = 10;

export default async function IsrPage() {
	const now = getNow();

	const res = await fetch('https://jsonplaceholder.typicode.com/posts');

	const posts: Post[] = await res.json();

	return (
		<div className="rounded-lg border bg-white p-6">
			<h1 className="mb-4 text-2xl font-bold">ISR 데이터 페칭</h1>

			<p className="mb-6 text-[14px] text-gray-600">
				이 페이지는 10초마다 다시 생성될 수 있습니다. 생성시간 {now}
			</p>

			<div className="space-y-3">
				{posts.slice(0, 5).map((post) => (
					<div key={post.id} className="rounded border p-4">
						<p className="mb-1 text-[14px] font-bold">{post.title}</p>
						<p className="text-[13px] text-gray-500">{post.body}</p>
					</div>
				))}
			</div>
		</div>
	);
}
