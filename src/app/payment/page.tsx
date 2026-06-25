'use client';

import { useEffect, useState } from 'react';
import { loadTossPayments } from '@tosspayments/tosspayments-sdk';

const clientKey = process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY!;

const customerKey = 'USER_1';

export default function PaymentPage() {
	const [paymentWidget, setPaymentWidget] = useState<any>(null);

	useEffect(() => {
		const init = async () => {
			const tossPayments = await loadTossPayments(
				'test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm'
			);
			const widgets = tossPayments.widgets({ customerKey });

			// ------ 주문의 결제 금액 설정 ------
			await widgets.setAmount({
				currency: 'KRW',
				value: 50000,
			});

			await Promise.all([
				// ------  결제 UI 렌더링 ------
				widgets.renderPaymentMethods({
					selector: '#payment-method',
					variantKey: 'DEFAULT',
				}),
				// ------  이용약관 UI 렌더링 ------
				widgets.renderAgreement({
					selector: '#agreement',
					variantKey: 'AGREEMENT',
				}),
			]);
			setPaymentWidget(widgets);

			/* setPaymentWidget(widget); */
		};

		init();
	}, []);

	const handlePayment = async () => {
		if (!paymentWidget) {
			return;
		}

		// // 1. API 버전
		await paymentWidget.requestPayment({
			orderId: `ORDER_${Date.now()}`,
			orderName: 'Next.js 실습 상품',

			successUrl: `${window.location.origin}/api/payment/success`, //브라우저에서 url 주소 의미
			failUrl: `${window.location.origin}/api/payment/fail`,
		});

		// await paymentWidget.requestPayment({
		// 	orderId: `ORDER_${Date.now()}`,
		// 	orderName: 'Next.js 실습 상품',
		// 	successUrl: `${window.location.origin}/noapi/success`,
		// 	failUrl: `${window.location.origin}/noapi/fail`,
		// });
	};

	return (
		<div className="mx-auto max-w-2xl p-6">
			<h1 className="mb-6 text-2xl font-bold">토스 결제</h1>

			<div id="payment-method" className="mb-6" />

			<div id="agreement" className="mb-6" />

			<button
				onClick={handlePayment}
				className="rounded bg-blue-600 px-4 py-2 text-white"
			>
				결제하기
			</button>
		</div>
	);
}
