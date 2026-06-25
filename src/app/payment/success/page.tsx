"use client";

import { useSearchParams } from "next/navigation";

export default function PaymentSuccessPage() {
  const params = useSearchParams();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">
        결제 성공
      </h1>

      <p>
        paymentKey:
        {params.get("paymentKey")}
      </p>

      <p>
        orderId:
        {params.get("orderId")}
      </p>

      <p>
        amount:
        {params.get("amount")}
      </p>
    </div>
  );
}