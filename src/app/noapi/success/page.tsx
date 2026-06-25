'use client';

import { useParams } from 'next/navigation';

export default function Page() {
	const params = useParams();

	console.log('paymentType >>> ', params?.paymentType);
	console.log('orderID >>> ', params?.orderID);
	console.log('paymentKey >>> ', params?.paymentKey);
	console.log('amount >>> ', params?.amount);

	return <div>No API Success Page</div>;
}
