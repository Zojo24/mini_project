import { http, HttpResponse } from "msw";

import { HotelistsData } from "../data/hotelLists";

export let newHotelsData = [];

export const handlers = [
  // 호텔목록
  http.get("/hotels", (resolver) => {
    return HttpResponse.json([HotelistsData]);
  }),

  http.get("/hotels/:hotelId", ({ request, params }) => {
    const url = new URL(request.url);
    const id = url.pathname.split("/").pop();

    console.log(id);

    const thisHotel = HotelistsData.find((it) => it.id.toString() === id);
    console.log("thisHotel", thisHotel);
    return HttpResponse.json(thisHotel);
  }),

  http.post("/hotels", async ({ request }) => {
    const requestBody = await request.json();
    const newHotel = {
      ...requestBody,
      id: getId(), // 새 ID 할당
    };

    newHotelsData.push(newHotel);
    console.log("newHotel", newHotel);
    console.log("request", requestBody);
    return HttpResponse.json(
      {
        ...requestBody,
        id: getId(),
      }
      // {

      // id: getId(),
      // name: requestBody.name,
      // location: requestBody.location,
      // price: requestBody.price,
      // available: requestBody.available,
      // content: requestBody.content,
      // checkIn: requestBody.checkIn,
      // checkOut: requestBody.checkOut,
      // notSmoking: requestBody.notSmoking,
      // noPet: requestBody.noPet,
      // swimmingpool_open: requestBody.swimmingpool_open,
      // swimmingpool_closed: requestBody.swimmingpool_closed,

      // createdAt: new Date().toLocaleString(),
      // }
    );
  }),
];

let id = 3;
const getId = () => {
  return id++;
};
