import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest
) {

  console.log('request > ', request)
  console.log('request.nextUrl > ', request.nextUrl)

  const searchParams =
    request.nextUrl.searchParams;

  const paymentKey =
    searchParams.get("paymentKey");

  const orderId =
    searchParams.get("orderId");

  const amount =
    searchParams.get("amount");

  const token = request.cookies.get("accessToken")?.value;

  const response =
    await fetch(
      "http://localhost:33000/api/v1/payment/confirm",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },

        body: JSON.stringify({
          paymentKey,
          orderId,
          amount,
        }),
      }
    );

  console.log("response >> ", response)
  if (!response.ok) {


    const failResponse = NextResponse.redirect(
      new URL("/payment/fail", request.url)
    );

    failResponse.cookies.set(
      "paymentError",
      "결제실패"
    );

    return failResponse;
  }

  const successResponse = NextResponse.redirect(
    new URL("/payment/success", request.url)
  );

  successResponse.cookies.set(
    "paymentInfo",
    JSON.stringify({ paymentKey, orderId, amount })

  );

  return successResponse;

}