import { http, HttpResponse } from "msw";

import { hotelLists } from "./mockHotelLists";

const todos = ["먹기", "자기", "놀기"];
export const handlers = [
  // 호텔목록
  http.get("/hotels", (resolver) => {
    return HttpResponse.json([hotelLists]);
  }),
  http.get("/todos", (resolver) => {
    return HttpResponse.json([todos]);
  }),
  // 호텔 추가
  // http.post("/todos", (req, res, ctx) => {
  //   todos.push(req.body);
  //   return res(ctx.status(201));
  // }),
];
