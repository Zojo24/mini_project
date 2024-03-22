import { http, HttpResponse } from "msw";

let hotelsData = [];

export const handlers = [
  // 호텔목록
  http.get("/hotels", (resolver) => {
    // return HttpResponse.json([hotelLists]);
    return HttpResponse.json([hotelsData]);
  }),
  http.post("/hotels", async ({ request }) => {
    const requestBody = await request.json();
    hotelsData.push(requestBody);
    console.log("request", requestBody);
    return HttpResponse.json({
      name: requestBody.name,
      location: requestBody.location,
      price: requestBody.price,
      available: requestBody.available,
      content: requestBody.content,
      checkIn: requestBody.checkIn,
      checkOut: requestBody.checkOut,
      notSmoking: requestBody.notSmoking,
      noPet: requestBody.noPet,
      swimmingpool_open: requestBody.swimmingpool_open,
      swimmingpool_closed: requestBody.swimmingpool_closed,

      // createdAt: new Date().toLocaleString(),
    });
  }),
];
