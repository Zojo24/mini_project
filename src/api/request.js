const request = {
  fetchMembersJoin: "/api/members/join", //회원가입
  fetchMembersVerify: "/api/members/verify", //이메일인증
  fetchMembersUpload: "/api/members/upload", //이미지등록
  fetchMembersLogin: "/api/members/login", //로그인
  fetchMembersMyInfo: "/api/members/my-info", //마이페이지>개인정보
  fetchMembersMyFav: "/api/members/my-favorite", //마이페이지>즐겨찾는숙소
  fetchMembersMyCart: "/api/members/my-cart", //마이페이지>장바구니
  fetchMembersMyOrder: "/api/members/my-order", //마이페이지>예약내역
  fetchHotels: "/api/hotels", //호텔
  fetchOrders: "/api/orders", //예약추가정보
  fetchOrdersList: "/api/orders/order-list", //마이페이지>예약현황조회
};
export default request;
