"use client";

import { useSearchParams } from "next/navigation";

export default function PaymentFailPage() {
  const params = useSearchParams();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">
        결제 실패
      </h1>

      <p>
        code:
        {params.get("code")}
      </p>

      <p>
        message:
        {params.get("message")}
      </p>
    </div>
  );
}