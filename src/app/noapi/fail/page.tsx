'use client';

import { useParams } from 'next/navigation';

export default function Page() {
	const params = useParams();
	console.log('paramas >>> ', params);

	return <div>No API Fail Page</div>;
}
