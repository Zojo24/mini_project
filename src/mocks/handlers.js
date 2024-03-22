import { http, HttpResponse } from "msw";

import { hotelLists } from "./mockHotelLists";

const todos = ["먹기", "자기", "놀기"];
export const handlers = [
  // 호텔목록
  http.get("/hotels", (resolver) => {
    return HttpResponse.json([hotelLists]);
  }),
  http.post("/hotels", async ({ request }) => {
    const requestBody = await request.json();

    console.log("request", requestBody);
    return HttpResponse.json({
      name: requestBody.name,
      location: requestBody.location,
      createdAt: new Date().toLocaleString(),
      available: requestBody.available,
    });
  }),
];
