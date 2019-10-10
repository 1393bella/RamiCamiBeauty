(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'contactus', component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_2__["ContactUsComponent"] },
    { path: '', pathMatch: 'full', redirectTo: '/home' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  body{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  .my-container{\n  margin:0 auto;\n  text-align: center;\n}\n\n  .visit_box{\n    height: 1150px;\n    /* background-color: rgb(146, 123, 123); */\n    background-image: url('pattern_pink_2.jpg');\n    background-repeat: repeat;\n    background-size: cover;\n    /* width: 100%; */\n    margin: 0;\n    padding: 0;\n    text-align: center; \n    margin: 0 auto;\n  }\n\n  .map {\n      height: 50%;\n      width: 70%;\n      background-image: url('map_3.png');\n      background-position: center;\n      margin: 0 auto;\n      border: 2px solid rgb(41, 40, 40);\n      \n    }\n\n  .contact_box{\n    height: 800px;\n    /* background-color: rgb(57, 173, 181); */\n    background-image: url('geometric_pink_gold.jpg');\n    margin: 0;\n    padding: 0;\n    width: auto;\n  }\n\n  h2{\n    font-family: 'Tangerine', cursive;\n    font-size: 4.5rem;\n    \n  }\n\n  h4{\n    font-family: 'Tangerine', cursive;\n    font-size: 3.5rem;\n  }\n\n  p{\n    font-family: 'Tangerine', cursive;\n    text-decoration: none;\n    font-size: 2.5rem;\n    \n  }\n\n  .squarelink{\n    font-family: 'Tangerine', cursive;\n    /* text-decoration: none; */\n    font-size: 2.5rem;\n    text-align:center;\n     margin:0 auto;\n    /* position: absolute;\n    left: 45%;\n    margin-left: -45px; */\n    \n  }\n\n  /* nav bars start responsive decoration  search column hover*/\n\n  /* body {\n  font-family: Roboto, Arial, sans-serif;\n  font-size: 16px;\n  background-color: #f4f4f4;\n} */\n\n  .box {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 15px;\n  \n}\n\n  .site-nav {\n  height: 100px;\n  background-color:black;\n  color: #FFF;\n  box-shadow: 0px 2px 4px 0px rgba(104, 57, 49, 0.27);\n}\n\n  .site-nav .box {\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n  .site-nav .logo a {\n  text-decoration: none;\n  color: #F88;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-size: 1.3em;\n  font-weight: normal;\n}\n\n  .site-nav #mobile-menu-toggle {\n  all: unset;\n  display: none;\n  position: relative;\n  z-index: 9999;\n  align-items: center;\n  box-sizing: border-box;\n  height: 40px;\n  padding: 0 10px;\n  border: 1px solid rgba(255, 255, 255, 0.4);\n  cursor: pointer;\n}\n\n  .site-nav #mobile-menu-toggle span {\n  font-size: 15px;\n  margin-left: 5px;\n  text-transform: uppercase;\n  letter-spacing: .5px;\n}\n\n  .site-nav #mobile-menu-toggle .fas {\n  font-size: 20px;\n  color: #F88;\n}\n\n  @media screen and (max-width: 960px) {\n  .site-nav #mobile-menu-toggle {\n    display: flex;\n  }\n}\n\n  .site-nav .nav-menu {\n  display: flex;\n  align-items: center;\n  list-style: none;\n}\n\n  .site-nav .nav-menu a {\n  display: block;\n  height: 70px;\n  padding: 0 15px;\n  line-height: 70px;\n  text-decoration: none;\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 14px;\n  text-transform: uppercase;\n  letter-spacing: .5px;\n  position: relative;\n  z-index: 1;\n  transition: color .2s ease;\n}\n\n  .site-nav .nav-menu a:hover {\n  color: #FFF;\n}\n\n  .site-nav .nav-menu li.active a :hover{\n  background-color: #F88;\n  color: #FFF;\n}\n\n  @media screen and (max-width: 960px) {\n  .site-nav .nav-menu {\n    position: fixed;\n    z-index: 999;\n    width: 250px;\n    height: 100vh;\n    background-color: #28333e;\n    top: 0;\n    right: -250px;\n    padding-top: 70px;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: flex-start;\n    transition: right .2s ease;\n  }\n  .site-nav .nav-menu.active {\n    right: 0;\n  }\n  .site-nav .nav-menu li {\n    width: 100%;\n  }\n  .site-nav .nav-menu li a {\n    height: 45px;\n    line-height: 45px;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  }\n}\n\n  /* nav bars end responsive decoration  */\n\n  /*   \n  @media (max-width: 992px) {\n    .container h1 {font-size: 30px;}\n    .container ul li {width: calc(100% / 4);}\n  }\n  \n  @media (max-width: 768px) {\n    .container {width: 100%;}\n  }\n  \n  @media (max-width: 480px) {\n    .container {margin: 20px auto;}\n    .container ul li {width: calc(100% / 2);}\n  }\n  @media (max-width: 360px) {\n    .container {margin: 0 auto;}\n    .container ul li {width: calc(100% / 1);}\n  } */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0VBQ3hCOztFQUVGO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7RUFFRTtJQUNFLGNBQWM7SUFDZCwwQ0FBMEM7SUFDMUMsMkNBQXVEO0lBQ3ZELHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGNBQWM7RUFDaEI7O0VBRUE7TUFDSSxXQUFXO01BQ1gsVUFBVTtNQUNWLGtDQUE4QztNQUM5QywyQkFBMkI7TUFDM0IsY0FBYztNQUNkLGlDQUFpQzs7SUFFbkM7O0VBR0Y7SUFDRSxhQUFhO0lBQ2IseUNBQXlDO0lBQ3pDLGdEQUE0RDtJQUM1RCxTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGlDQUFpQztJQUNqQyxpQkFBaUI7O0VBRW5COztFQUVBO0lBQ0UsaUNBQWlDO0lBQ2pDLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlDQUFpQztJQUNqQyxxQkFBcUI7SUFDckIsaUJBQWlCOztFQUVuQjs7RUFFQTtJQUNFLGlDQUFpQztJQUNqQywyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLGlCQUFpQjtLQUNoQixhQUFhO0lBQ2Q7O3lCQUVxQjs7RUFFdkI7O0VBZUYsNkRBQTZEOztFQUU3RDs7OztHQUlHOztFQUVIO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxlQUFlOztBQUVqQjs7RUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLG1EQUFtRDtBQUNyRDs7RUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7RUFDQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztFQUNBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGVBQWU7RUFDZiwwQ0FBMEM7RUFDMUMsZUFBZTtBQUNqQjs7RUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLG9CQUFvQjtBQUN0Qjs7RUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0VBQ0E7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGOztFQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0VBQ0E7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLCtCQUErQjtFQUMvQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLDBCQUEwQjtBQUM1Qjs7RUFDQTtFQUNFLFdBQVc7QUFDYjs7RUFDQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0VBQ0E7RUFDRTtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsTUFBTTtJQUNOLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QiwyQkFBMkI7SUFDM0IsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSxRQUFRO0VBQ1Y7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpREFBaUQ7RUFDbkQ7QUFDRjs7RUFFQSx3Q0FBd0M7O0VBWXhDOzs7Ozs7Ozs7Ozs7Ozs7OztLQWlCSyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuXG4gIGJvZHl7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICBcbi5teS1jb250YWluZXJ7XG4gIG1hcmdpbjowIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiAgXG4gIC52aXNpdF9ib3h7XG4gICAgaGVpZ2h0OiAxMTUwcHg7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0NiwgMTIzLCAxMjMpOyAqL1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vYXNzZXRzL3BhdHRlcm5fcGlua18yLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuXG4gIC5tYXAge1xuICAgICAgaGVpZ2h0OiA1MCU7XG4gICAgICB3aWR0aDogNzAlO1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi9hc3NldHMvbWFwXzMucG5nXCIpO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoNDEsIDQwLCA0MCk7XG4gICAgICBcbiAgICB9XG5cblxuICAuY29udGFjdF9ib3h7XG4gICAgaGVpZ2h0OiA4MDBweDtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTcsIDE3MywgMTgxKTsgKi9cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLy4uL2Fzc2V0cy9nZW9tZXRyaWNfcGlua19nb2xkLmpwZ1wiKTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuXG4gIGgye1xuICAgIGZvbnQtZmFtaWx5OiAnVGFuZ2VyaW5lJywgY3Vyc2l2ZTtcbiAgICBmb250LXNpemU6IDQuNXJlbTtcbiAgICBcbiAgfVxuXG4gIGg0e1xuICAgIGZvbnQtZmFtaWx5OiAnVGFuZ2VyaW5lJywgY3Vyc2l2ZTtcbiAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgfVxuXG4gIHB7XG4gICAgZm9udC1mYW1pbHk6ICdUYW5nZXJpbmUnLCBjdXJzaXZlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICBcbiAgfVxuXG4gIC5zcXVhcmVsaW5re1xuICAgIGZvbnQtZmFtaWx5OiAnVGFuZ2VyaW5lJywgY3Vyc2l2ZTtcbiAgICAvKiB0ZXh0LWRlY29yYXRpb246IG5vbmU7ICovXG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgIG1hcmdpbjowIGF1dG87XG4gICAgLyogcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDQ1JTtcbiAgICBtYXJnaW4tbGVmdDogLTQ1cHg7ICovXG4gICAgXG4gIH1cblxuXG4gIFxuXG5cblxuXG5cbiAgXG5cblxuXG5cblxuLyogbmF2IGJhcnMgc3RhcnQgcmVzcG9uc2l2ZSBkZWNvcmF0aW9uICBzZWFyY2ggY29sdW1uIGhvdmVyKi9cbiAgXG4vKiBib2R5IHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbn0gKi8gIFxuXG4uYm94IHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIFxufVxuXG4uc2l0ZS1uYXYge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xuICBjb2xvcjogI0ZGRjtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggMHB4IHJnYmEoMTA0LCA1NywgNDksIDAuMjcpO1xufVxuLnNpdGUtbmF2IC5ib3gge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zaXRlLW5hdiAubG9nbyBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI0Y4ODtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5zaXRlLW5hdiAjbW9iaWxlLW1lbnUtdG9nZ2xlIHtcbiAgYWxsOiB1bnNldDtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTk5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2l0ZS1uYXYgI21vYmlsZS1tZW51LXRvZ2dsZSBzcGFuIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogLjVweDtcbn1cbi5zaXRlLW5hdiAjbW9iaWxlLW1lbnUtdG9nZ2xlIC5mYXMge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjRjg4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgLnNpdGUtbmF2ICNtb2JpbGUtbWVudS10b2dnbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn1cbi5zaXRlLW5hdiAubmF2LW1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLnNpdGUtbmF2IC5uYXYtbWVudSBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogNzBweDtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBsaW5lLWhlaWdodDogNzBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAuNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIHRyYW5zaXRpb246IGNvbG9yIC4ycyBlYXNlO1xufVxuLnNpdGUtbmF2IC5uYXYtbWVudSBhOmhvdmVyIHtcbiAgY29sb3I6ICNGRkY7XG59XG4uc2l0ZS1uYXYgLm5hdi1tZW51IGxpLmFjdGl2ZSBhIDpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4ODtcbiAgY29sb3I6ICNGRkY7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAuc2l0ZS1uYXYgLm5hdi1tZW51IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogOTk5O1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODMzM2U7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAtMjUwcHg7XG4gICAgcGFkZGluZy10b3A6IDcwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgdHJhbnNpdGlvbjogcmlnaHQgLjJzIGVhc2U7XG4gIH1cbiAgLnNpdGUtbmF2IC5uYXYtbWVudS5hY3RpdmUge1xuICAgIHJpZ2h0OiAwO1xuICB9XG4gIC5zaXRlLW5hdiAubmF2LW1lbnUgbGkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5zaXRlLW5hdiAubmF2LW1lbnUgbGkgYSB7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIH1cbn1cblxuLyogbmF2IGJhcnMgZW5kIHJlc3BvbnNpdmUgZGVjb3JhdGlvbiAgKi9cblxuXG5cblxuXG5cblxuXG5cblxuXG4vKiAgIFxuICBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAuY29udGFpbmVyIGgxIHtmb250LXNpemU6IDMwcHg7fVxuICAgIC5jb250YWluZXIgdWwgbGkge3dpZHRoOiBjYWxjKDEwMCUgLyA0KTt9XG4gIH1cbiAgXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5jb250YWluZXIge3dpZHRoOiAxMDAlO31cbiAgfVxuICBcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgLmNvbnRhaW5lciB7bWFyZ2luOiAyMHB4IGF1dG87fVxuICAgIC5jb250YWluZXIgdWwgbGkge3dpZHRoOiBjYWxjKDEwMCUgLyAyKTt9XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gICAgLmNvbnRhaW5lciB7bWFyZ2luOiAwIGF1dG87fVxuICAgIC5jb250YWluZXIgdWwgbGkge3dpZHRoOiBjYWxjKDEwMCUgLyAxKTt9XG4gIH0gKi8iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n        <!-- nav-bar starts -->\n        <script>\n            \n          // this makes nav bar smaller and turn to mobile icon \n          const mobileMenuToggle = document.querySelector('#mobile-menu-toggle');\n          const mobileMenu = document.querySelector('.nav-menu');\n        \n          mobileMenuToggle.addEventListener('click', toggleMenu);\n        \n          function toggleMenu(e){\n          this.querySelector('.fas').classList.toggle('fa-bars');\n          this.querySelector('.fas').classList.toggle('fa-times');\n          mobileMenu.classList.toggle('active');\n          }\n          \n        \n          </script>\n        \n        \n        <nav class=\"site-nav\">\n            \n          <div class=\"box\">\n            \n            <h1 class=\"logo\">\n              <a href=\"#\">RamiCami</a>\n            </h1>\n            \n            <!-- <button id=\"mobile-menu-toggle\" type=\"button\">\n              <i class=\"fas fa-bars\"></i>\n              <span>Menu</span>\n            </button>\n            \n            <ul class=\"nav-menu\">\n              <li class=\"active\">\n                <a href=\"#\">Home</a>\n              </li>\n              <li>\n                <a href=\"#\">About</a>\n              </li>\n              <li>\n                <a href=\"#\">Services</a>\n              </li>\n              <li>\n                <a href=\"#\">Contact</a>\n              </li>\n            </ul>\n             -->\n          </div>\n          \n        </nav>\n\n        <!-- nav-bar ends -->\n\n\n  \n  <router-outlet></router-outlet>\n\n\n  <div class=\"visit_box\"  data-aos=\"fade-right\" data-aos-duration=\"2000\" >\n    <br>\n      <h2 style=\"text-align:center\">Visit Us:</h2>\n      \n      <h4 style=\"text-align:center\">Opening hours:</h4>\n      \n      <p style=\"text-align:center\"><span>   Monday-Friday: 9am-8pm  </span> </p>\n      <p style=\"text-align:center\"><span>  Saturday: 9am-7pm </span>  </p>\n      <p style=\"text-align:center\"> <span>  Sunday: 9am-5pm </span>  </p>\n      \n      \n      <h4 style=\"text-align:center\">Our location:</h4>\n      \n      <p style=\"text-align:center\">  2337 North  Clark street, Chicago, IL </p>\n      \n      <div class=\"map\" data-aos=\"fade-up\" data-aos-duration=\"3000\">\n        \n        <!-- <img src=\"./../assets/Screen Shot 2019-09-15 at 9.13.29 PM.png\"> -->\n      </div>\n      <br>\n      \n      </div>\n\n\n\n\n\n\n\n      <div class=\"contact_box\" data-aos=\"fade-left\" data-aos-duration=\"2000\">\n          <br>\n            <h2 style=\"text-align:center\">Contact Us</h2>\n            <p style=\"text-align:center\"> phone: 773 248 9096</p>\n            <p  style=\"text-align:center\">e-mail: ramicamibeauty@gmail.com</p>\n            <div style=\"text-align: center\"><a class=\"squarelink\"  href=\"https://squareup.com/appointments/book/FJAHH4ST74XK0\">book an appointment</a></div>\n            <app-contact-us></app-contact-us>\n      </div>\n\n\n\n\n\n\n\n\n\n\n        <br>\n        <br>\n\n        <footer id=\"footer\" style=\"text-align:center\">\n          <div id=\"footerDesign\" style=\"text-align:center\"> © web application developed By Bermet Japar 2019\n            <br>\n          </div>\n        </footer>\n        <br>\n        <br>\n\n \n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_2__);



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'RamiCamiBeauty';
    }
    AppComponent.prototype.ngOnInit = function () {
        aos__WEBPACK_IMPORTED_MODULE_2__["init"]();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__["ContactUsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.css":
/*!*****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/* \n  .contact_box{\n    height: 1000px;\n  \n    background-image: url(\"../../assets/geometric_pink_gold.jpg\");\n    margin: 0;\n    padding: 0;\n    width: auto;\n  }\n\n  h2{\n    font-family: 'Tangerine', cursive;\n    font-size: 4.5rem;\n  }\n\n  h4{\n    font-family: 'Tangerine', cursive;\n    font-size: 3.5rem;\n  }\n\n  p{\n    font-family: 'Tangerine', cursive;\n    text-decoration: none;\n    font-size: 2.5rem;\n    \n  } */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* \nstyle code for contact form start\nbody{\n    background-color: #25274d;\n}\n.contact{\n    /* margin-top: 100px; \n    padding: 4%;\n    height: 400px;\n}\n.col-md-3{\n    background: #e196b4;\n    padding: 4%;\n    border-top-left-radius: 0.5rem;\n    border-bottom-left-radius: 0.5rem;\n}\n.contact-info{\n    margin-top:10%;\n}\n.contact-info img{\n    margin-bottom: 15%;\n}\n.contact-info h2{\n    margin-bottom: 10%;\n}\n.col-md-9{\n  /* background-image: url(\"../../assets/three_marble.jpg\"); \n    background: #fff;\n    padding: 3%;\n    border-top-right-radius: 0.5rem;\n    border-bottom-right-radius: 0.5rem;\n}\n.contact-form label{\n    font-weight:600;\n}\n.contact-form button{\n    background: #25274d;\n    color: #fff;\n    font-weight: 600;\n    width: 25%;\n}\n.contact-form button:focus{\n    box-shadow:none;\n}\nend\n*/\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* social media icons  starts here  */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.socialicons {\n    text-align: center;\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    margin-top: 220px;\n\n  }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.wrapper {\n    /* display: inline-flex; */\n    margin-top: 50px;\n    padding: 0;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    width:60%;\n    background-position: center;\n    margin: 0 auto;\n  }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\ni {\n    padding: 0px 10px;\n  }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.wrapper a:nth-child(1) {\n    color: #4867AA;\n    cursor: pointer;\n    text-shadow: 0px 7px 10px rgba(0, 0, 0, 0.4);\n    transition: all ease-in-out 150ms;\n  }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.wrapper a:nth-child(1):hover {\n    margin-top: -10px;\n    text-shadow: 0px 16px 10px rgba(0, 0, 0, 0.3);\n    transform: translate(0, -8);\n  }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.wrapper   a:nth-child(2) {\n    color:#813DB4;\n    cursor: pointer;\n    text-shadow: 0px 7px 10px rgba(0, 0, 0, 0.4);\n    transition: all ease-in-out 150ms;\n  }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.wrapper  a:nth-child(2):hover {\n    margin-top: -10px;\n    text-shadow: 0px 16px 10px rgba(0, 0, 0, 0.3);\n    transform: translate(0, -8);\n  }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* this code for twitter if we wanna use twitte icon */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* .wrapper  i :nth-child(2) {\n    color:  #1DA1F2;\n    cursor: pointer;\n    text-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);\n    transition: all ease-in-out 150ms;\n  }\n  \n  .wrapper i:nth-child(2):hover {\n    margin-top: -10px;\n    text-shadow: 0px 14px 10px rgba(0, 0, 0, 0.4);\n    transform: translate(0, -5);\n  } \n*/\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* .wrapper a:nth-child(3) {\n    color: #fffc00;\n    cursor: pointer;\n    text-shadow: 0px 7px 10px rgba(0, 0, 0, 0.4);\n    transition: all ease-in-out 150ms;\n  }\n  .wrapper a:nth-child(3):hover {\n    margin-top: -10px;\n    text-shadow: 0px 16px 10px rgba(0, 0, 0, 0.3);\n    transform: translate(0, -8);\n  }  */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* social media icons  ends here  */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXlCSzs7Ozs7Ozs7Ozs7Ozs7O0FBZUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQTZDQzs7Ozs7Ozs7Ozs7Ozs7O0FBUUQscUNBQXFDOzs7Ozs7Ozs7Ozs7Ozs7QUFHckM7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsaUJBQWlCOztFQUVuQjs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFDRSwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixTQUFTO0lBQ1QsMkJBQTJCO0lBQzNCLGNBQWM7RUFDaEI7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0lBQ0UsaUJBQWlCO0VBQ25COzs7Ozs7Ozs7Ozs7Ozs7QUFFQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0lBQ2YsNENBQTRDO0lBQzVDLGlDQUFpQztFQUNuQzs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFDRSxpQkFBaUI7SUFDakIsNkNBQTZDO0lBQzdDLDJCQUEyQjtFQUM3Qjs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFDRSxhQUFhO0lBQ2IsZUFBZTtJQUNmLDRDQUE0QztJQUM1QyxpQ0FBaUM7RUFDbkM7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLDZDQUE2QztJQUM3QywyQkFBMkI7RUFDN0I7Ozs7Ozs7Ozs7Ozs7OztBQUVBLHNEQUFzRDs7Ozs7Ozs7Ozs7Ozs7O0FBQ3REOzs7Ozs7Ozs7Ozs7Q0FZRDs7Ozs7Ozs7Ozs7Ozs7O0FBRUM7Ozs7Ozs7Ozs7TUFVSTs7Ozs7Ozs7Ozs7Ozs7O0FBSU4sbUNBQW1DIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLyogXG4gIC5jb250YWN0X2JveHtcbiAgICBoZWlnaHQ6IDEwMDBweDtcbiAgXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2dlb21ldHJpY19waW5rX2dvbGQuanBnXCIpO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG5cbiAgaDJ7XG4gICAgZm9udC1mYW1pbHk6ICdUYW5nZXJpbmUnLCBjdXJzaXZlO1xuICAgIGZvbnQtc2l6ZTogNC41cmVtO1xuICB9XG5cbiAgaDR7XG4gICAgZm9udC1mYW1pbHk6ICdUYW5nZXJpbmUnLCBjdXJzaXZlO1xuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xuICB9XG5cbiAgcHtcbiAgICBmb250LWZhbWlseTogJ1RhbmdlcmluZScsIGN1cnNpdmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIFxuICB9ICovXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLyogXG5zdHlsZSBjb2RlIGZvciBjb250YWN0IGZvcm0gc3RhcnRcbmJvZHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI1Mjc0ZDtcbn1cbi5jb250YWN0e1xuICAgIC8qIG1hcmdpbi10b3A6IDEwMHB4OyBcbiAgICBwYWRkaW5nOiA0JTtcbiAgICBoZWlnaHQ6IDQwMHB4O1xufVxuLmNvbC1tZC0ze1xuICAgIGJhY2tncm91bmQ6ICNlMTk2YjQ7XG4gICAgcGFkZGluZzogNCU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC41cmVtO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDAuNXJlbTtcbn1cbi5jb250YWN0LWluZm97XG4gICAgbWFyZ2luLXRvcDoxMCU7XG59XG4uY29udGFjdC1pbmZvIGltZ3tcbiAgICBtYXJnaW4tYm90dG9tOiAxNSU7XG59XG4uY29udGFjdC1pbmZvIGgye1xuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcbn1cbi5jb2wtbWQtOXtcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3RocmVlX21hcmJsZS5qcGdcIik7IFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogMyU7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNXJlbTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC41cmVtO1xufVxuLmNvbnRhY3QtZm9ybSBsYWJlbHtcbiAgICBmb250LXdlaWdodDo2MDA7XG59XG4uY29udGFjdC1mb3JtIGJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kOiAjMjUyNzRkO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgd2lkdGg6IDI1JTtcbn1cbi5jb250YWN0LWZvcm0gYnV0dG9uOmZvY3Vze1xuICAgIGJveC1zaGFkb3c6bm9uZTtcbn1cbmVuZFxuKi9cblxuXG5cblxuXG5cblxuLyogc29jaWFsIG1lZGlhIGljb25zICBzdGFydHMgaGVyZSAgKi9cblxuXG4uc29jaWFsaWNvbnMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi10b3A6IDIyMHB4O1xuXG4gIH0gXG4gICBcbiAgLndyYXBwZXIge1xuICAgIC8qIGRpc3BsYXk6IGlubGluZS1mbGV4OyAqL1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDo2MCU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIFxuICBpIHtcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgfVxuICBcbiAgLndyYXBwZXIgYTpudGgtY2hpbGQoMSkge1xuICAgIGNvbG9yOiAjNDg2N0FBO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDdweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMTUwbXM7XG4gIH1cbiAgXG4gIC53cmFwcGVyIGE6bnRoLWNoaWxkKDEpOmhvdmVyIHtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDE2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTgpO1xuICB9XG4gIFxuICAud3JhcHBlciAgIGE6bnRoLWNoaWxkKDIpIHtcbiAgICBjb2xvcjojODEzREI0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDdweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMTUwbXM7XG4gIH1cbiAgXG4gIC53cmFwcGVyICBhOm50aC1jaGlsZCgyKTpob3ZlciB7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgdGV4dC1zaGFkb3c6IDBweCAxNnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC04KTtcbiAgfVxuICBcbiAgLyogdGhpcyBjb2RlIGZvciB0d2l0dGVyIGlmIHdlIHdhbm5hIHVzZSB0d2l0dGUgaWNvbiAqL1xuICAvKiAud3JhcHBlciAgaSA6bnRoLWNoaWxkKDIpIHtcbiAgICBjb2xvcjogICMxREExRjI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtc2hhZG93OiAwcHggN3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAxNTBtcztcbiAgfVxuICBcbiAgLndyYXBwZXIgaTpudGgtY2hpbGQoMik6aG92ZXIge1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgIHRleHQtc2hhZG93OiAwcHggMTRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNSk7XG4gIH0gXG4qL1xuXG4gIC8qIC53cmFwcGVyIGE6bnRoLWNoaWxkKDMpIHtcbiAgICBjb2xvcjogI2ZmZmMwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1zaGFkb3c6IDBweCA3cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDE1MG1zO1xuICB9XG4gIC53cmFwcGVyIGE6bnRoLWNoaWxkKDMpOmhvdmVyIHtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDE2cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTgpO1xuICB9ICAqL1xuICBcblxuXG4vKiBzb2NpYWwgbWVkaWEgaWNvbnMgIGVuZHMgaGVyZSAgKi8iXX0= */"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.html":
/*!******************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n<!-- <div class=\"contact_box\" data-aos=\"fade-left\" data-aos-duration=\"2000\">\n\t\t<br>\n\t\t  <h2 style=\"text-align:center\">Contact Us</h2>\n\t\t  <p style=\"text-align:center\"> phone: 773 248 9096</p>\n\t\t  <p style=\"text-align:center\">e-mail: ramicamibeauty@gmail.com</p>\n</div> -->\n\n\n\n\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\">\n\n\n<!-- links for social medias effects ends -->\n\n\n<div class=\"container socialicons\">\n\t<div class=\"wrapper\" data-aos=\"flip-down\" data-aos-duration=\"2000\">\n    \n\t\t<a href=\"https://www.facebook.com/RamiCami-Beauty-Salon-110570000321756/\"><i class=\"fa fa-5x fa-facebook-square\"></i></a>\n\t\t<!-- <i class=\"fa fa-5x fa-twitter-square\"></i> -->\n\t\t<a  href=\"https://www.instagram.com/ramicamibeauty/\"><i class=\"fa fa-5x fa-instagram\"></i></a>\n\t\t<!-- <i class=\"fa fa-5x fa-snapchat-square\"></i> -->\n\t\t<!-- <a href=\"gmail\"><i class=\"far fa-envelope\"></i></a> -->\n\t</div>\n\n</div>\n\n\n\n\n\n\n\n\n<!-- <link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\"> --> \n<!-- <script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script> -->\n <!-- <script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>  -->\n\n\n<!-- <div class=\"container contact\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-3\">\n\t\t\t<div class=\"contact-info\">\n\t\t\t\t<img src=\"https://image.ibb.co/kUASdV/contact-image.png\" alt=\"image\"/>\n\t\t\t\t<h2>Contact Us</h2>\n\t\t\t\t<h4>We would love to hear from you !</h4>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-9\">\n\t\t\t<div class=\"contact-form\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t  <label class=\"control-label col-sm-2\" for=\"fname\">First Name:</label>\n\t\t\t\t  <div class=\"col-sm-10\">          \n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"fname\" placeholder=\"Enter First Name\" name=\"fname\">\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t  <label class=\"control-label col-sm-2\" for=\"lname\">Last Name:</label>\n\t\t\t\t  <div class=\"col-sm-10\">          \n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"lname\" placeholder=\"Enter Last Name\" name=\"lname\">\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t  <label class=\"control-label col-sm-2\" for=\"email\">Email:</label>\n\t\t\t\t  <div class=\"col-sm-10\">\n\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\" name=\"email\">\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t  <label class=\"control-label col-sm-2\" for=\"comment\">Comment:</label>\n\t\t\t\t  <div class=\"col-sm-10\">\n\t\t\t\t\t<textarea class=\"form-control\" rows=\"5\" id=\"comment\"></textarea>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">        \n\t\t\t\t  <div class=\"col-sm-offset-2 col-sm-10\">\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default\">Submit</button>\n\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div> -->"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/contact-us/contact-us.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\n    width:100%;\n    \n}\n\n.mainPicture{\n  background-image: url('main_pic_2.jpg');\n  background-size:cover;\n  /* background-repeat: repeat-x; */\n  width: 100%;\n  height: 100%;\n  /* width:100%; */\n}\n\n.my-container{\n    /* border: 1px  solid green ; */\n    margin: 0;\n    padding: 0;\n    \n  }\n\n/* .banana-container{\n    width:1500px; if i want to have a container with a different width\n\n  } */\n\n.banana-row{\n    padding: 0;\n    margin: 0;\n    height: 600px;\n    /* display: inline-block; */\n    background-image: url('main_picture.jpg');\n    background-size:cover;\n    background-position: right;\n    background-repeat: no-repeat;\n    width: 100%;\n    \n    \n  }\n\n.my-row{\n    /* border: 3px solid red; */\n    height: 400px;\n    margin: 0;\n    padding: 0;\n    /* background-color:black; */\n  }\n\n.my-col{\n    margin: 0;\n    padding: 0;\n  }\n\n/* esli my-col pomenyat na parent , to budet otdelnye box */\n\n.parent{\n    /* border: 1px dotted blue; */\n    padding: 0;\n    margin: 0;\n    /* animation start for zoom pictures */\n    /* animation ends */\n\n  }\n\n.hair_box{\n    background-image: url('hair_4.jpg');\n    background-position: center;\n    width:auto;\n    height: 100%;\n    background-size:cover;\n    padding: 0;\n    margin: 0;\n    /* animation start for zoom pictures */\n   \n    /* animation ends */\n\n }\n\n.nail_box{\n     background-image: url('manicure_pic.jpg');\n     width: auto;\n     height: 100%;\n     background-repeat: no-repeat;\n     background-size:cover;\n     padding: 0;\n     margin: 0;\n }\n\n.make-up_box{\n    background-image: url('make_up_4.jpg');\n    background-size:cover;\n    width: auto;\n    height: 100%;\n }\n\n.eyelash{\n     background-image: url('eyelash_6.jpg');\n     background-size:cover;\n     width: auto;\n     height: 100%;\n }\n\n.nameOfSalon{\n    background-image: url('pattern_pink_2.jpg');\n    /* background-color: aqua; */\n    width: auto;\n    height: 100%;\n}\n\n.bridal_service{\n  background-image: url('bridal_7.jpg');\n  background-size:cover;\n  background-position: center;\n    width: auto;\n    height: 100%;\n    \n}\n\n.wax{\n  background-image: url('waxing_7.jpg');\n    background-position: center;\n    width:auto;\n    height: 100%;\n    /* background-size:cover; */\n}\n\nh1{\n  font-family: 'Tangerine', cursive;\n  text-align: left;\n  padding-top: 50px;\n  font-size: 5.5rem;\n  margin-top: 283px;\n  margin-left: 768px;\n  /* position: center; */\n\n}\n\nh2{\n  font-family: 'Tangerine', cursive;\n  font-size: 3.5rem;\n  color: deeppink;\n}\n\n/* ///////////////////////////////////////////////////// */\n\n/* animation start for hover services  */\n\n.parent:hover .nestedsecond,\n.parent:focus .nestedsecond {\n  transform: scale(1.2);\n  transition: all .5s;\n}\n\n.nestedsecond::before {\n  content: \"\";\n  display: none;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: rgba(206, 156, 176, 0.75);\n}\n\n.parent:hover .nestedsecond:before,\n.parent:focus .nestedsecond:before {\n  display: block;\n}\n\n.parent:hover .nestedsecond:before, .parent:focus .nestedsecond:before {\n  display: block;\n}\n\n.parent:hover a, .parent:focus a {\n  display: block;\n}\n\n/* span{\n  color: white; /* Good thing we set a fallback color! */\n\n/* font-family: sans-serif;\n  padding: 25%;\n  position: absolute;\n} */\n\n.parent:hover span,\n.parent:focus span {\n  display: block;\n}\n\n.parent {\n  width: auto; \n  height: 400px;\n  overflow: hidden;\n}\n\n.nestedsecond {\n  height: 100%;\n  width: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  transition: all .5s;\n}\n\na {\n  display: none;\n  font-size: 35px;\n  color: #ffffff !important;\n  font-family: sans-serif;\n  text-align: center;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 50px;\n  cursor: pointer;\n  /*text-decoration: none;*/\n}\n\n.parent:hover .nestedsecond, .parent:focus .nestedsecond {\n  transform: scale(1.5);\n}\n\n@media screen and (max-width: 960px) {\n  .parent {width: 100%; margin: 20px 0px}\n      .wrapper {padding: 20px 20px;}\n}\n\n/* animation end for hover services  */\n\n@media only screen and (max-width: 480px){\n\n\n  .my-container{\n    width:480px;    \n    height:auto;\n    padding: 0;\n  /* /* vertical-align:top;  */\n  }\n\n    .my-row{\n      height: 1300px;\n      \n      margin: 0;\n      padding: 0;\n\n    }\n\n    my-col{\n      width:auto;\n    }\n\n}\n\n@media only screen and (min-width: 481px) and (max-width:812px){\n\n\n    .my-container{\n      width:auto;    \n      height:auto;\n      padding: 0;\n    /* /* vertical-align:top;  */\n    }\n\n    .my-row{\n      height:  auto;\n    }\n\n    .my-col{\n      width:auto;\n     \n    }\n\n\n}\n\n@media only screen \nand (min-width : 375px) \nand (max-width : 812px)\n { \n\n        .banana-row{\n          background-position: right;\n        }\n\n        /* .wrap-container{\n           height: auto;\n           width: 375px; */\n           /* text-align: center; */\n           /* margin: 0 auto; */\n           /* position: absolute;\n              left: 50%;\n              top: 50%;\n              transform: translate(-50%, -50%); */\n  /* display: flex;\n  align-items: center;\n  justify-content: center; \n         \n        }*/\n\n        .my-container{\n          width:375px;\n          margin: 0 auto;\n          text-align: center;\n\n        }\n        /*\n        .my-container h1{\n          margin-right:200px;\n     \n        }\n\n        .banana-row{\n          width:365px;\n        } */\n\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVOztBQUVkOztBQUVBO0VBQ0UsdUNBQW9EO0VBQ3BELHFCQUFxQjtFQUNyQixpQ0FBaUM7RUFDakMsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBR0E7SUFDSSwrQkFBK0I7SUFDL0IsU0FBUztJQUNULFVBQVU7O0VBRVo7O0FBRUE7OztLQUdHOztBQUVIO0lBQ0UsVUFBVTtJQUNWLFNBQVM7SUFDVCxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLHlDQUFzRDtJQUN0RCxxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1QixXQUFXOzs7RUFHYjs7QUFDQTtJQUNFLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsU0FBUztJQUNULFVBQVU7SUFDViw0QkFBNEI7RUFDOUI7O0FBQ0E7SUFDRSxTQUFTO0lBQ1QsVUFBVTtFQUNaOztBQUVBLDJEQUEyRDs7QUFDM0Q7SUFDRSw2QkFBNkI7SUFDN0IsVUFBVTtJQUNWLFNBQVM7SUFDVCxzQ0FBc0M7SUFDdEMsbUJBQW1COztFQUVyQjs7QUFHRjtJQUNJLG1DQUFnRDtJQUNoRCwyQkFBMkI7SUFDM0IsVUFBVTtJQUNWLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLFNBQVM7SUFDVCxzQ0FBc0M7O0lBRXRDLG1CQUFtQjs7Q0FFdEI7O0FBRUQ7S0FDSyx5Q0FBc0Q7S0FDdEQsV0FBVztLQUNYLFlBQVk7S0FDWiw0QkFBNEI7S0FDNUIscUJBQXFCO0tBQ3JCLFVBQVU7S0FDVixTQUFTO0NBQ2I7O0FBR0E7SUFDRyxzQ0FBbUQ7SUFDbkQscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0NBQ2Y7O0FBRUE7S0FDSSxzQ0FBbUQ7S0FDbkQscUJBQXFCO0tBQ3JCLFdBQVc7S0FDWCxZQUFZO0NBQ2hCOztBQUdEO0lBQ0ksMkNBQXdEO0lBQ3hELDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtFQUNFLHFDQUFrRDtFQUNsRCxxQkFBcUI7RUFDckIsMkJBQTJCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZOztBQUVoQjs7QUFFQTtFQUNFLHFDQUFrRDtJQUNoRCwyQkFBMkI7SUFDM0IsVUFBVTtJQUNWLFlBQVk7SUFDWiwyQkFBMkI7QUFDL0I7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixzQkFBc0I7O0FBRXhCOztBQUNBO0VBQ0UsaUNBQWlDO0VBQ2pDLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBLDBEQUEwRDs7QUFNMUQsd0NBQXdDOztBQUN4Qzs7RUFFRSxxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLDJDQUEyQztBQUM3Qzs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7d0RBQ3dEOztBQUN0RDs7O0dBR0M7O0FBRUg7O0VBRUUsY0FBYztBQUNoQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBSTVCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFNBQVM7RUFDVCxRQUFRO0VBQ1IsWUFBWTtFQUNaLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7O0FBRUE7RUFLRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxTQUFTLFdBQVcsRUFBRSxnQkFBZ0I7TUFDbEMsVUFBVSxrQkFBa0IsQ0FBQztBQUNuQzs7QUFFQSxzQ0FBc0M7O0FBS3RDOzs7RUFHRTtJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsVUFBVTtFQUNaLDRCQUE0QjtFQUM1Qjs7SUFFRTtNQUNFLGNBQWM7O01BRWQsU0FBUztNQUNULFVBQVU7O0lBRVo7O0lBRUE7TUFDRSxVQUFVO0lBQ1o7O0FBRUo7O0FBS0E7OztJQUdJO01BQ0UsVUFBVTtNQUNWLFdBQVc7TUFDWCxVQUFVO0lBQ1osNEJBQTRCO0lBQzVCOztJQUVBO01BQ0UsYUFBYTtJQUNmOztJQUVBO01BQ0UsVUFBVTs7SUFFWjs7O0FBR0o7O0FBR0E7Ozs7O1FBS1E7VUFDRSwwQkFBMEI7UUFDNUI7O1FBRUE7OzBCQUVrQjtXQUNmLHdCQUF3QjtXQUN4QixvQkFBb0I7V0FDcEI7OztpREFHc0M7RUFDL0M7Ozs7VUFJUTs7UUFFRjtVQUNFLFdBQVc7VUFDWCxjQUFjO1VBQ2Qsa0JBQWtCOztRQUVwQjtRQUNBOzs7Ozs7OztXQVFHOztDQUVWIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBcbn1cblxuLm1haW5QaWN0dXJle1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvbWFpbl9waWNfMi5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcbiAgLyogYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14OyAqL1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAvKiB3aWR0aDoxMDAlOyAqL1xufVxuXG5cbi5teS1jb250YWluZXJ7XG4gICAgLyogYm9yZGVyOiAxcHggIHNvbGlkIGdyZWVuIDsgKi9cbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBcbiAgfVxuICBcbiAgLyogLmJhbmFuYS1jb250YWluZXJ7XG4gICAgd2lkdGg6MTUwMHB4OyBpZiBpIHdhbnQgdG8gaGF2ZSBhIGNvbnRhaW5lciB3aXRoIGEgZGlmZmVyZW50IHdpZHRoXG5cbiAgfSAqL1xuXG4gIC5iYW5hbmEtcm93e1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogNjAwcHg7XG4gICAgLyogZGlzcGxheTogaW5saW5lLWJsb2NrOyAqL1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9tYWluX3BpY3R1cmUuanBnXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIFxuICAgIFxuICB9XG4gIC5teS1yb3d7XG4gICAgLyogYm9yZGVyOiAzcHggc29saWQgcmVkOyAqL1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjpibGFjazsgKi9cbiAgfVxuICAubXktY29se1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLyogZXNsaSBteS1jb2wgcG9tZW55YXQgbmEgcGFyZW50ICwgdG8gYnVkZXQgb3RkZWxueWUgYm94ICovXG4gIC5wYXJlbnR7XG4gICAgLyogYm9yZGVyOiAxcHggZG90dGVkIGJsdWU7ICovXG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgLyogYW5pbWF0aW9uIHN0YXJ0IGZvciB6b29tIHBpY3R1cmVzICovXG4gICAgLyogYW5pbWF0aW9uIGVuZHMgKi9cblxuICB9XG4gIFxuXG4uaGFpcl9ib3h7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2hhaXJfNC5qcGdcIik7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIHdpZHRoOmF1dG87XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICAvKiBhbmltYXRpb24gc3RhcnQgZm9yIHpvb20gcGljdHVyZXMgKi9cbiAgIFxuICAgIC8qIGFuaW1hdGlvbiBlbmRzICovXG5cbiB9XG5cbi5uYWlsX2JveHtcbiAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL21hbmljdXJlX3BpYy5qcGdcIik7XG4gICAgIHdpZHRoOiBhdXRvO1xuICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcbiAgICAgcGFkZGluZzogMDtcbiAgICAgbWFyZ2luOiAwO1xuIH1cblxuXG4gLm1ha2UtdXBfYm94e1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9tYWtlX3VwXzQuanBnXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gfVxuXG4gLmV5ZWxhc2h7XG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9leWVsYXNoXzYuanBnXCIpO1xuICAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XG4gICAgIHdpZHRoOiBhdXRvO1xuICAgICBoZWlnaHQ6IDEwMCU7XG4gfVxuXG4gXG4ubmFtZU9mU2Fsb257XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3BhdHRlcm5fcGlua18yLmpwZ1wiKTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhOyAqL1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmJyaWRhbF9zZXJ2aWNle1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvYnJpZGFsXzcuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgXG59XG5cbi53YXh7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy93YXhpbmdfNy5qcGdcIik7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIHdpZHRoOmF1dG87XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC8qIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjsgKi9cbn1cblxuaDF7XG4gIGZvbnQtZmFtaWx5OiAnVGFuZ2VyaW5lJywgY3Vyc2l2ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIGZvbnQtc2l6ZTogNS41cmVtO1xuICBtYXJnaW4tdG9wOiAyODNweDtcbiAgbWFyZ2luLWxlZnQ6IDc2OHB4O1xuICAvKiBwb3NpdGlvbjogY2VudGVyOyAqL1xuXG59XG5oMntcbiAgZm9udC1mYW1pbHk6ICdUYW5nZXJpbmUnLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDMuNXJlbTtcbiAgY29sb3I6IGRlZXBwaW5rO1xufVxuXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xuXG5cblxuXG5cbi8qIGFuaW1hdGlvbiBzdGFydCBmb3IgaG92ZXIgc2VydmljZXMgICovXG4ucGFyZW50OmhvdmVyIC5uZXN0ZWRzZWNvbmQsXG4ucGFyZW50OmZvY3VzIC5uZXN0ZWRzZWNvbmQge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gIHRyYW5zaXRpb246IGFsbCAuNXM7XG59XG5cbi5uZXN0ZWRzZWNvbmQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwNiwgMTU2LCAxNzYsIDAuNzUpO1xufVxuXG4ucGFyZW50OmhvdmVyIC5uZXN0ZWRzZWNvbmQ6YmVmb3JlLFxuLnBhcmVudDpmb2N1cyAubmVzdGVkc2Vjb25kOmJlZm9yZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucGFyZW50OmhvdmVyIC5uZXN0ZWRzZWNvbmQ6YmVmb3JlLCAucGFyZW50OmZvY3VzIC5uZXN0ZWRzZWNvbmQ6YmVmb3JlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wYXJlbnQ6aG92ZXIgYSwgLnBhcmVudDpmb2N1cyBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIHNwYW57XG4gIGNvbG9yOiB3aGl0ZTsgLyogR29vZCB0aGluZyB3ZSBzZXQgYSBmYWxsYmFjayBjb2xvciEgKi9cbiAgLyogZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDI1JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufSAqLyBcblxuLnBhcmVudDpob3ZlciBzcGFuLFxuLnBhcmVudDpmb2N1cyBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ucGFyZW50IHtcbiAgd2lkdGg6IGF1dG87IFxuICBoZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubmVzdGVkc2Vjb25kIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjVzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAuNXM7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAuNXM7XG4gIHRyYW5zaXRpb246IGFsbCAuNXM7XG59XG5cbmEge1xuICBkaXNwbGF5OiBub25lO1xuICBmb250LXNpemU6IDM1cHg7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAvKnRleHQtZGVjb3JhdGlvbjogbm9uZTsqL1xufVxuXG4ucGFyZW50OmhvdmVyIC5uZXN0ZWRzZWNvbmQsIC5wYXJlbnQ6Zm9jdXMgLm5lc3RlZHNlY29uZCB7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gIC5wYXJlbnQge3dpZHRoOiAxMDAlOyBtYXJnaW46IDIwcHggMHB4fVxuICAgICAgLndyYXBwZXIge3BhZGRpbmc6IDIwcHggMjBweDt9XG59XG5cbi8qIGFuaW1hdGlvbiBlbmQgZm9yIGhvdmVyIHNlcnZpY2VzICAqL1xuXG5cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KXtcblxuXG4gIC5teS1jb250YWluZXJ7XG4gICAgd2lkdGg6NDgwcHg7ICAgIFxuICAgIGhlaWdodDphdXRvO1xuICAgIHBhZGRpbmc6IDA7XG4gIC8qIC8qIHZlcnRpY2FsLWFsaWduOnRvcDsgICovXG4gIH1cblxuICAgIC5teS1yb3d7XG4gICAgICBoZWlnaHQ6IDEzMDBweDtcbiAgICAgIFxuICAgICAgbWFyZ2luOiAwO1xuICAgICAgcGFkZGluZzogMDtcblxuICAgIH1cblxuICAgIG15LWNvbHtcbiAgICAgIHdpZHRoOmF1dG87XG4gICAgfVxuXG59XG5cblxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOjgxMnB4KXtcblxuXG4gICAgLm15LWNvbnRhaW5lcntcbiAgICAgIHdpZHRoOmF1dG87ICAgIFxuICAgICAgaGVpZ2h0OmF1dG87XG4gICAgICBwYWRkaW5nOiAwO1xuICAgIC8qIC8qIHZlcnRpY2FsLWFsaWduOnRvcDsgICovXG4gICAgfVxuXG4gICAgLm15LXJvd3tcbiAgICAgIGhlaWdodDogIGF1dG87XG4gICAgfVxuXG4gICAgLm15LWNvbHtcbiAgICAgIHdpZHRoOmF1dG87XG4gICAgIFxuICAgIH1cblxuXG59IFxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBcbmFuZCAobWluLXdpZHRoIDogMzc1cHgpIFxuYW5kIChtYXgtd2lkdGggOiA4MTJweClcbiB7IFxuXG4gICAgICAgIC5iYW5hbmEtcm93e1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyogLndyYXAtY29udGFpbmVye1xuICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgIHdpZHRoOiAzNzVweDsgKi9cbiAgICAgICAgICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xuICAgICAgICAgICAvKiBtYXJnaW46IDAgYXV0bzsgKi9cbiAgICAgICAgICAgLyogcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgKi9cbiAgLyogZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxuICAgICAgICAgXG4gICAgICAgIH0qL1xuXG4gICAgICAgIC5teS1jb250YWluZXJ7XG4gICAgICAgICAgd2lkdGg6Mzc1cHg7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIH1cbiAgICAgICAgLypcbiAgICAgICAgLm15LWNvbnRhaW5lciBoMXtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6MjAwcHg7XG4gICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgLmJhbmFuYS1yb3d7XG4gICAgICAgICAgd2lkdGg6MzY1cHg7XG4gICAgICAgIH0gKi9cblxuIH0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div style=\"text-align:center\" class=\"container  my-container\">\n\n  <div class=\"row banana-row\">\n      <!-- <h1 >RamiCami<br>Beauty</h1> -->\n    </div>\n\n<!-- <div class=\"row my-row \">\n   \n          <div class=\"col-sm-6 col-md-4 my-col\">\n\n                <div class=\"nameOfSalon\">\n                      \n                </div>\n          </div>\n\n        <div class=\"col-sm-6 col-md-8 my-col   \">\n            \n              <div class=\"mainPicture\">\n              Row 1 Col 2\n              </div>\n            \n        </div>\n  \n</div> -->\n\n\n\n<div class=\"row  my-row \">       <!--start, end, around, between (for justify-content -{- - - }) -->\n\n      \n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4 my-col\"  data-aos=\"fade-up\" data-aos-duration=\"1700\">\n        <div class=\"parent\">\n         <div class=\"nestedsecond\">\n          <div class=\"hair_box\">\n            <h2>Hair</h2>\n            <a href=\"#\">Hair</a>\n              <!-- Row 2 Col 1<app-main-service></app-main-service> -->\n          </div>\n        </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4 my-col\"  data-aos=\"fade-up\" data-aos-duration=\"1700\">\n          <div class=\"parent\">\n              <div class=\"nestedsecond\">\n                <div class=\"nail_box\">\n                  <h2>Nails</h2>\n                  <a href=\"#\">Nails</a>\n                </div>\n              </div>\n          </div>\n      </div>\n\n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4 my-col\"  data-aos=\"fade-up\" data-aos-duration=\"1700\">\n          <div class=\"parent\">\n              <div class=\"nestedsecond\">\n                <div class=\"eyelash\">\n                  <h2>Eyelash</h2>\n                  <a href=\"#\">Eyelash</a>\n                </div>\n              </div>\n            </div>  \n      </div>\n\n  </div>\n\n    \n\n<div class=\"row  my-row\" >       <!--start, end, around, between (for justify-content -{- - - }) -->\n\n\n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4 my-col\" data-aos=\"fade-up\" data-aos-duration=\"1700\">\n          <div class=\"parent\">\n              <div class=\"nestedsecond\">\n                <div class=\"make-up_box\">\n                    <!-- Row 2 Col 1<app-main-service></app-main-service> -->\n                    <h2>Makeup</h2>\n                    <a href=\"#\">Makeup</a>\n                </div>\n              </div>    \n          </div>\n      </div>\n\n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4 my-col \" data-aos=\"fade-up\" data-aos-duration=\"1700\">\n          <div class=\"parent\">\n              <div class=\"nestedsecond\">\n                  <div class=\"bridal_service\">\n                    <h2>Bridal Service</h2>\n                    <a href=\"#\">Bridal Service</a>\n                  </div>\n                 </div>\n              </div>    \n      </div>\n\n      <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4 my-col\" data-aos=\"fade-up\" data-aos-duration=\"1700\">\n          <div class=\"parent\">\n              <div class=\"nestedsecond\">\n                  <div class=\"wax\">\n                    <h2>Waxing</h2>\n                    <a href=\"#\">Waxing</a>\n                  </div>\n              </div>\n          </div>      \n      </div>\n\n\n\n </div>\n\n\n\n\n\n\n\n</div>\n\n\n<!-- <div class=\"row  my-row\">       <!start, end, around, between (for justify-content -{- - - }) -->\n<!-- <div class=\"col my-col\">\n\n</div>\n\n</div> \n\n\n\n<div class=\"row my-row\" style=\"height:100px\">\n\n</div>  \n\n</div>-->\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bermet/Documents/MEAN_stack/Rami_Cami_Beauty/RamiCamiBeauty/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map