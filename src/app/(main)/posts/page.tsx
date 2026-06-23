import SlowPostList from '@/app/components/SlowPostList';
import Link from 'next/link';
import { Suspense } from 'react';

const posts = [
	{ id: 1, title: '타이틀 1' },
	{ id: 2, title: '타이틀 2' },
	{ id: 3, title: '타이틀 3' },
];

export default function Page() {
	return (
		<div className="rounded-lg border bg-white p-6">
			<h1 className="mb-6 text-2xl font-bold">게시글 목록</h1>

			<div className="space-y-3">
				{/* <PostList /> */}

				{/* 2. 느릴 때 */}
				{/* <SlowPostList /> */}

				<Suspense fallback={<PostListSkeleton />}>
					<SlowPostList />
				</Suspense>
			</div>
		</div>
	);
}

function PostListSkeleton() {
	return (
		<div className="space-y-3">
			<div className="h-[54px] animate-pulse rounded border bg-gray-100" />
			<div className="h-[54px] animate-pulse rounded border bg-gray-100" />
			<div className="h-[54px] animate-pulse rounded border bg-gray-100" />
		</div>
	);
}
