'use client';

import { useQuery } from '@tanstack/react-query';

type Post = {
	id: number;
	title: string;
};

export default function ReactQueryPage() {
	const { data, isLoading } = useQuery({
		queryKey: ['posts'],

		queryFn: async () => {
			const res = await fetch('https://jsonplaceholder.typicode.com/posts');

			return res.json();
		},
	});

	if (isLoading) {
		return <p>로딩중...</p>;
	}

	return (
		<div className="rounded-lg border bg-white p-6">
			<h1 className="mb-4 text-2xl font-bold">React Query</h1>

			{data?.slice(0, 5).map((post: Post) => (
				<div key={post.id} className="mb-2 rounded border p-3">
					{post.title}
				</div>
			))}
		</div>
	);
}
