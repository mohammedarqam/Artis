webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutUsPage = /** @class */ (function () {
    function AboutUsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutUsPage_1 = AboutUsPage;
    AboutUsPage.prototype.gtHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    AboutUsPage.prototype.gtAbout = function () {
        this.navCtrl.setRoot(AboutUsPage_1);
    };
    AboutUsPage.prototype.gtContactUs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */]);
    };
    AboutUsPage = AboutUsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about-us',template:/*ion-inline-start:"C:\Users\pc\Desktop\artis\src\pages\about-us\about-us.html"*/'<ion-content>\n  <ion-grid>\n  \n    <!-- Menu Row -->\n    <ion-row>\n      <ion-col col-4>\n        <img src="assets/imgs/logo.png" class="mainLogo" >\n      </ion-col>\n      <ion-col col-8  >\n  \n        <ion-item no-lines>\n          <p item-end color="darkphone" padding-right ion-text >+91-40-40185150</p>\n        </ion-item>\n  \n        <ion-buttons end>\n          <button ion-button small color="darkphone" (click)="gtHome()" clear >Home</button>\n          <button ion-button small color="primary" clear (click)="gtAbout()" >About us</button>\n          <button ion-button small clear color="darkphone" >Products</button>\n          <button ion-button small clear color="darkphone" >Modules</button>\n          <button ion-button small clear color="darkphone" >Request a Demo</button>\n          <button ion-button small clear color="darkphone" (click)="gtContactUs()" >Contact Us</button>\n  \n          <button ion-button color="darkphone" clear icon-only>\n              <ion-icon name="search"></ion-icon>\n          </button> \n    \n        </ion-buttons>\n  \n  \n        </ion-col>\n        </ion-row> \n  \n<!-- Image Row -->\n    <ion-row>\n      <ion-card text-align: left>\n        <img src="assets/imgs/abt/mainBanner.png"  class="bb"  />\n      </ion-card>\n  <!-- Company overview row -->\n\n  <ion-card color="primary"  >\n    <ion-card-content>\n      <p class="head">Company overview</p>\n      <p class="cardCont" >Fertility treatment software needs to be able to manage\n         all the interactions between the various stakeholders of the hospital.\n          It also should be able to cater to tracking the progress of the treatments\n           and help patients view the progress. This is due to the fact, that \n           IVF treatment cycle involves regular interaction and co-ordination\n            between people such as clinicians, embryologist, nursing staff, admin\n            . manager, front office staff, the pharmacy stock keeper and\n             the IVF patient.</p>\n\n      <p class="cardCont" >\n          ARTis™ (Assisted Reproductive Technology Information System) – a  unique and futuristic web-based Fertility treatment software that addresses the need for clinical, administrative, and patient support services of your IVF centre.\n          Our solution springs out of a thorough understanding of the IVF process and managing IVF centers. This simple and effective solution is a result of the collaborative effort of proven and highly experienced IT professionals and IVF specialists.\n        </p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content>\n        <p class="head">WHY ARTis</p>\n      <p class="cardCont" ion-text color="primary" >Following are the factors to be considered\n         while choosing a good Fertility treatment software.\n          ARTis scores well on all these key factors and help\n           you scale up in your operations and grow in line with your\n            plans. ARTis is a fully integrated, comprehensive \n            solution and yet easy to set up and use. It helps in\n             optimization of the hospital resources and decision making.\n              Being a cloud offering, it supports doctors to\n               remotely support multiple centres.\n      </p>\n\n      <ion-grid>\n        <ion-row>\n          <ion-col push-1 col-2>\n            <img src="assets/imgs/abt/person1.png">\n          </ion-col>\n          <ion-col padding-horizontal col-8 push-1>\n            <p ion-text padding-bottom padding-left text-justify	 >  \n              Kaladhar Gorantala has 20+ years of experience in Information \n              technology services industry having worked in a \n              renowned IT organization in \n              India. As CEO of ARTis, he is focused on helping \n              IVF centers across the globe, in running their IVF centers effectively, \n              by offering a world class IVF software product ARTis.\n            </p>\n            <p ion-text padding-left text-justify	>\n              He brings in huge experience in working with global customers across the \n              geographies and handling large scale projects \n              and programs across the various industry segments. He has \n              played project and program management \n              roles for a number of Fortune 500 \n              companies. Having worked in wide range of \n              ERP products, he has brought in huge amount of standardization \n              in the product to take care of all the business processes \n              related to running advanced IVF speciality medical practice.\n            </p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col push-1 col-2>\n          <p class="pTitle" >Kaladhar Gorantala</p>\n          <p class="pDes" >CEO, Sadguru Information Systems Pvt. Ltd.</p>    \n          </ion-col>\n        </ion-row>\n\n\n        <ion-row>\n            <ion-col push-1 col-2>\n              <img src="assets/imgs/abt/person2.png">\n            </ion-col>\n            <ion-col padding-horizontal col-8 push-1>\n              <p ion-text padding-bottom padding-left text-justify	 >  \n                  Sarat is chief architect of the product ARTis. He has more than 18 years of experience working in a number of startups in United States and India in various capacities. His experience covers various spectra of web technologies and has exposure of working on a number of industry domains, from automation software in the mechanical industry, Healthcare sector IT products and innovative HR solutions in recruitment space. He is a champion in Ruby on Rails Framework, a widely used architecture in the present day web technology solutions and platforms.\n                </p>\n              <p ion-text padding-left text-justify	>\n                  He was responsible for the design, development, quality assurance and deployment of the product ARTis in a collaborative effort with the medical and embryology experts and other technical evangelists and teams.              \n              </p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col push-1 col-2>\n            <p class="pTitle" >Saratchandra Kongara</p>\n            <p class="pDes" >Principal Technology Architect</p>    \n            </ion-col>\n          </ion-row>\n      </ion-grid>\n      </ion-card-content>\n      </ion-card>\n  \n\n\n  <ion-card color="primary" >\n    <ion-card-content>\n        <p class="head">ARTis Team</p>\n      <ion-grid>\n        <ion-row>\n          <ion-col push-1 col-2>\n            <img src="assets/imgs/abt/icon1.png">\n          </ion-col>\n          <ion-col padding-horizontal col-8 push-1>\n            <p ion-text padding-bottom padding-left text-justify	 >  \n                S Mughal is an experienced sales and marketing professional, specialized in selling clinical software to the NHS and private health sector and originally she was also a qualified nurse and midwife. She is involved in data integration and cyber security in the medical industry.\n            </p>\n            <p ion-text padding-bottom padding-left text-justify	 >  \n                J Pugh has a vast experience in the Sales and Marketing within the Pharmaceutical industry and fertility market industry. She has been working closely with the NHS and have a vast understanding of the needs and levers of the NHS.\n            </p>\n            <p ion-text padding-left text-justify	>\n                Our ARTis team in Europe will play the key role of relationship management to be close to the clients and provide the required help, ably supported by the technical team form our India team.  \n            </p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col push-1 col-2>\n          <p class="pTitle" >ARTis Europe Team</p>\n          </ion-col>\n        </ion-row>\n\n\n        <ion-row>\n            <ion-col push-1 col-2>\n              <img src="assets/imgs/abt/icon2.png">\n            </ion-col>\n            <ion-col padding-horizontal col-8 push-1>\n              <p ion-text padding-bottom padding-left text-justify	 >  \n                  ARTis technical team consists of highly skilled professionals with great credentials in building products with the latest web technologies. Team is working on a number of enhancements based on the feedback from the clients and based on the industry needs thereby making the product more robust. Predictive analytics, Enhancing clinical staff operations, Improving patient experience, Integrating with the external entities are some of the key areas being worked on.\n              </p>\n              <p ion-text padding-left text-justify	>\n                  Team is also focused on providing streamlined support to our clients and helping them demonstrate service differentiation and achieve better results and increased patient satisfaction. \n              </p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col push-1 col-2>\n            <p class="pTitle" >ARTis Technical Team</p>\n            </ion-col>\n          </ion-row>\n      </ion-grid>\n      </ion-card-content>\n      </ion-card>\n\n\n  <ion-card color="primary">\n    <ion-card-content>\n      <ion-grid  >\n        <ion-row  >\n\n          <ion-col  col-4 class="colsf2">\n            <ion-list no-lines style="text-align : center;" >\n              <p   class="ftrHead" padding-left>Quick Links</p>\n              <ion-item color="primary" class="ftrText" >Home</ion-item>\n              <ion-item color="primary" class="ftrText">Why ARTis?</ion-item>\n              <ion-item color="primary" class="ftrText">ARTis Advantage</ion-item>\n              <ion-item color="primary" class="ftrText">ARTis Modules</ion-item>\n              <ion-item color="primary" class="ftrText">Request for Demo</ion-item>\n            </ion-list>\n          </ion-col>\n\n          <ion-col col-4  class="colsf2" >\n            <ion-list no-lines>\n                <p   class="ftrHead" padding-left >USER BENEFITS</p>\n                <ion-item color="primary" class="ftrText" >Medical Director/Clinician</ion-item>\n                <ion-item color="primary" class="ftrText">Embryologist</ion-item>\n                <ion-item color="primary" class="ftrText">Fertility Nurse Specialist</ion-item>\n                <ion-item color="primary" class="ftrText">IVF Patient</ion-item>\n                <ion-item color="primary" class="ftrText">Centre Manager</ion-item>\n            </ion-list>\n          </ion-col>\n          <ion-col col-4  style="padding-left: 10%;" > \n            <ion-list no-lines>\n                <p   class="ftrHead" padding-left >CONTACT</p>\n            <ion-item color="primary" class="ftrText" >T: +91-40-40185150</ion-item>\n            <ion-item color="primary" class="ftrText">T: +91-40-40207772</ion-item>\n            <ion-item color="primary" class="ftrText">M: +91-98663 04146</ion-item>\n            <ion-item color="primary" class="ftrText">E:  info@artisivf.com</ion-item>\n            <ion-item color="primary" >\n              <button ion-button round clear color="whiter">\n                <ion-icon name="logo-facebook" color="primary"></ion-icon>\n              </button>\n              <!-- <ion-icon round name="logo-facebook"></ion-icon>\n              <ion-icon name=""></ion-icon>\n              <ion-icon name=""></ion-icon> -->\n            </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n<ion-toolbar>\n  <p ion-text color="darkphone" class="copy" >Copyright 2009 - 2018 ARTis | All Rights Reserved</p>\n</ion-toolbar>\n\n\n</ion-row>\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc\Desktop\artis\src\pages\about-us\about-us.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], AboutUsPage);
    return AboutUsPage;
    var AboutUsPage_1;
}());

//# sourceMappingURL=about-us.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_us_about_us__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContactPage_1 = ContactPage;
    ContactPage.prototype.gtHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    ContactPage.prototype.gtAbout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__about_us_about_us__["a" /* AboutUsPage */]);
    };
    ContactPage.prototype.gtContactUs = function () {
        this.navCtrl.setRoot(ContactPage_1);
    };
    ContactPage = ContactPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\pc\Desktop\artis\src\pages\contact\contact.html"*/'<ion-content>\n  <ion-grid>\n  \n    <!-- Menu Row -->\n    <ion-row>\n      <ion-col col-4>\n          <img src="assets/imgs/logo.png" class="mainLogo" >\n      </ion-col>\n      <ion-col col-8  >\n  \n        <ion-item no-lines>\n          <p item-end color="darkphone" padding-right ion-text >+91-40-40185150</p>\n        </ion-item>\n  \n        <ion-buttons end>\n          <button ion-button small color="darkphone" (click)="gtHome()" clear >Home</button>\n          <button ion-button small color="darkphone" clear (click)="gtAbout()" >About us</button>\n          <button ion-button small clear color="darkphone" >Products</button>\n          <button ion-button small clear color="darkphone" >Modules</button>\n          <button ion-button small clear color="darkphone" >Request a Demo</button>\n          <button ion-button small clear color="primary" (click)="gtContactUs()" >Contact Us</button>\n  \n          <button ion-button color="darkphone" clear icon-only>\n              <ion-icon name="search"></ion-icon>\n          </button> \n    \n        </ion-buttons>\n  \n  \n        </ion-col>\n        </ion-row> \n  \n<!-- Image Row -->\n    <ion-row>\n      <ion-card text-align: left>\n        <img src="assets/imgs/contact/bannerMain.png"  class="bb"  />\n\n        <ion-card class="fromDiv">\n          <ion-card-content>\n            <ion-item>\n              <ion-label stacked>Name</ion-label>\n              <ion-input type="text" [(ngModel)]="name"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>Phone</ion-label>\n              <ion-input type="number" [(ngModel)]="phone"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>Email</ion-label>\n              <ion-input type="email" [(ngModel)]="email"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>Message</ion-label>\n              <ion-textarea [(ngModel)]="message" ></ion-textarea>\n            </ion-item>\n          </ion-card-content>\n        </ion-card>\n\n      </ion-card>\n\n      <ion-card>\n        <ion-grid>\n\n        <ion-row>\n            <ion-col push-2 col-4>\n              <ion-row  padding-bottom>\n              <p class="AddHead" ion-text color="primary" >\n                Corporate Office\n              </p>\n              <p class="address" padding-vertical color="darkphone" ion-text >\n                  Sadguru Information Systems Pvt Ltd<br/>\n                  (A Unit of Sadguru Healthcare Services Private Ltd.)<br/>\n                  Plot No. 8-2-120/112/A/7,<br/>\n                  Road No.9, Jubilee Hills,<br/>\n                  Hyderabad – 500033<br/>\n              </p>\n              <p class="address"  padding-vertical color="darkphone" ion-text >\n                  Phone: +91-40-40185150, +91–40-40207772<br/>\n                  Mobile: +91 98663 04146<br/>\n                  Email: info@artisivf.com<br/>\n              </p>\n              </ion-row>\n\n              <ion-row  padding-bottom>\n              <p class="AddHead" ion-text color="primary" >\n                  Europe Branch Office\n              </p>\n              <p class="address" padding-vertical color="darkphone" ion-text >\n                  Ashley House, 114 Heath Lane, Lowton,<br />\n                  Cheshire, WA3 2SJ, United Kingdom\n              </p>\n              <p class="address"  padding-vertical color="darkphone" ion-text >\n                  Phone: +44 19427 15330\n              </p>\n              </ion-row>\n\n\n\n            </ion-col>\n\n            <ion-col push-2 col-5 padding-left >\n              <ion-card class="mapCard"  >\n\n                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.9940958488783!2d78.41790936425468!3d17.412070988063842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb96da995be851%3A0xc9ea64e52021e030!2sEbani+Advertising!5e0!3m2!1sen!2sin!4v1540367704716" \n                    class="frameC" allowfullscreen>\n                    </iframe>\n\n\n              </ion-card>\n            </ion-col>\n\n\n\n      </ion-row>\n\n\n        </ion-grid>\n      </ion-card>\n\n\n\n\n  <ion-card color="primary">\n    <ion-card-content>\n      <ion-grid  >\n        <ion-row  >\n\n          <ion-col  col-4 class="colsf2">\n            <ion-list no-lines style="text-align : center;" >\n              <p   class="ftrHead" padding-left>Quick Links</p>\n              <ion-item color="primary" class="ftrText" >Home</ion-item>\n              <ion-item color="primary" class="ftrText">Why ARTis?</ion-item>\n              <ion-item color="primary" class="ftrText">ARTis Advantage</ion-item>\n              <ion-item color="primary" class="ftrText">ARTis Modules</ion-item>\n              <ion-item color="primary" class="ftrText">Request for Demo</ion-item>\n            </ion-list>\n          </ion-col>\n\n          <ion-col col-4  class="colsf2" >\n            <ion-list no-lines>\n                <p   class="ftrHead" padding-left >USER BENEFITS</p>\n                <ion-item color="primary" class="ftrText" >Medical Director/Clinician</ion-item>\n                <ion-item color="primary" class="ftrText">Embryologist</ion-item>\n                <ion-item color="primary" class="ftrText">Fertility Nurse Specialist</ion-item>\n                <ion-item color="primary" class="ftrText">IVF Patient</ion-item>\n                <ion-item color="primary" class="ftrText">Centre Manager</ion-item>\n            </ion-list>\n          </ion-col>\n          <ion-col col-4  style="padding-left: 10%;" > \n            <ion-list no-lines>\n                <p   class="ftrHead" padding-left >CONTACT</p>\n            <ion-item color="primary" class="ftrText" >T: +91-40-40185150</ion-item>\n            <ion-item color="primary" class="ftrText">T: +91-40-40207772</ion-item>\n            <ion-item color="primary" class="ftrText">M: +91-98663 04146</ion-item>\n            <ion-item color="primary" class="ftrText">E:  info@artisivf.com</ion-item>\n            <ion-item color="primary" >\n              <button ion-button round clear color="whiter">\n                <ion-icon name="logo-facebook" color="primary"></ion-icon>\n              </button>\n              <!-- <ion-icon round name="logo-facebook"></ion-icon>\n              <ion-icon name=""></ion-icon>\n              <ion-icon name=""></ion-icon> -->\n            </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n<ion-toolbar>\n  <p ion-text color="darkphone" class="copy" >Copyright 2009 - 2018 ARTis | All Rights Reserved</p>\n</ion-toolbar>\n\n\n\n</ion-row>\n</ion-grid>\n    \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc\Desktop\artis\src\pages\contact\contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
    ], ContactPage);
    return ContactPage;
    var ContactPage_1;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_us_about_us__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_us_about_us__["a" /* AboutUsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */], name: 'Home', segment: 'home' },
                        { component: __WEBPACK_IMPORTED_MODULE_7__pages_about_us_about_us__["a" /* AboutUsPage */], name: 'About Us', segment: 'about-us' },
                        { component: __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */], name: 'Contact Us', segment: 'contact-us' }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_us_about_us__["a" /* AboutUsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\pc\Desktop\artis\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\pc\Desktop\artis\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_us_about_us__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_contact__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage_1 = HomePage;
    HomePage.prototype.gtHome = function () {
        this.navCtrl.setRoot(HomePage_1);
    };
    HomePage.prototype.gtAbout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__about_us_about_us__["a" /* AboutUsPage */]);
    };
    HomePage.prototype.gtContactUs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__contact_contact__["a" /* ContactPage */]);
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\pc\Desktop\artis\src\pages\home\home.html"*/'<ion-content>\n<ion-grid>\n\n  <!-- Menu Row -->\n  <ion-row>\n    <ion-col col-4>\n      <img src="assets/imgs/logo.png" class="mainLogo" >\n    </ion-col>\n    <ion-col col-8  >\n\n      <ion-item no-lines>\n        <p item-end color="darkphone" padding-right ion-text >+91-40-40185150</p>\n      </ion-item>\n\n      <ion-buttons end>\n        <button ion-button small color="primary" (click)="gtHome()" clear >Home</button>\n        <button ion-button small color="darkphone" clear (click)="gtAbout()" >About us</button>\n        <button ion-button small clear color="darkphone" >Products</button>\n        <button ion-button small clear color="darkphone" >Modules</button>\n        <button ion-button small clear color="darkphone" >Request a Demo</button>\n        <button ion-button small clear color="darkphone" (click)="gtContactUs()" >Contact Us</button>\n\n        <button ion-button color="darkphone" clear icon-only>\n            <ion-icon name="search"></ion-icon>\n        </button> \n  \n      </ion-buttons>\n\n\n      </ion-col>\n      </ion-row> \n\n  <!-- Image Row -->\n  <ion-row>\n    <ion-card text-align: left class="bb" >\n      <img src="assets/imgs/mainBanner.jpg"   />\n      <p class="imgText">THE SIMPLEST <br/> WAY TO MANAGE <br/> YOUR IVF PRACTICE</p>\n    </ion-card>\n\n  <!-- About Us row -->\n\n  <ion-card color="primary"  >\n    <ion-card-content>\n      <p class="head">ABOUT US</p>\n      <p class="cardCont" >Fertility treatment software needs to be able to manage\n         all the interactions between the various stakeholders of the hospital.\n          It also should be able to cater to tracking the progress of the treatments\n           and help patients view the progress. This is due to the fact, that \n           IVF treatment cycle involves regular interaction and co-ordination\n            between people such as clinicians, embryologist, nursing staff, admin\n            . manager, front office staff, the pharmacy stock keeper and\n             the IVF patient.</p>\n\n      <p class="cardCont" >\n          ARTis™ (Assisted Reproductive Technology Information System) – a  unique and futuristic web-based Fertility treatment software that addresses the need for clinical, administrative, and patient support services of your IVF centre.\n          Our solution springs out of a thorough understanding of the IVF process and managing IVF centers. This simple and effective solution is a result of the collaborative effort of proven and highly experienced IT professionals and IVF specialists.\n        </p>\n    </ion-card-content>\n  </ion-card>\n\n  <!-- Why Artis row -->\n\n  <ion-card>\n    <ion-card-content>\n        <p class="head">WHY ARTis</p>\n      <p class="cardCont">Following are the factors to be considered\n         while choosing a good Fertility treatment software.\n          ARTis scores well on all these key factors and help\n           you scale up in your operations and grow in line with your\n            plans. ARTis is a fully integrated, comprehensive \n            solution and yet easy to set up and use. It helps in\n             optimization of the hospital resources and decision making.\n              Being a cloud offering, it supports doctors to\n               remotely support multiple centres.\n      </p>\n      <ion-grid>\n        <ion-row class="cardCont" >\n\n          <ion-col col-3 class="whyCols" >\n            <img src="assets/imgs/why/1.png" class="whyIcons" >\n            <p class="cardIconCont">Tracks the entire\n                workflow and the\n                complete Journey\n                of the Patient \n            </p>\n          </ion-col>\n \n         <ion-col col-3 class="whyCols" >\n            <img src="assets/imgs/why/2.png" class="whyIcons" >\n            <p class="cardIconCont" >Fully integrated\n                comprehensive solution,\n                includes clinical and\n                administrative modules\n            </p>\n          </ion-col>\n\n\n         <ion-col col-3 class="whyCols" >\n            <img src="assets/imgs/why/3.png" class="whyIcons" >\n            <p class="cardIconCont">Solution for every\n                challenge faced by\n                an advanced IVF centre\n            </p>\n          </ion-col>\n\n          \n         <ion-col col-3 >\n            <img src="assets/imgs/why/4.png" class="whyIcons" >\n            <p class="cardIconCont">Critical success\n                factor for the\n                superior performance\n                of your IVF centre\n            </p>\n          </ion-col>\n\n         <ion-col col-3  class="whyCols" >\n            <img src="assets/imgs/why/5.png" class="whyIcons" >\n            <p class="cardIconCont">Needs of every\n                stake-holder of your\n                IVF centre are taken\n                into consideration\n            </p>\n          </ion-col>\n\n         <ion-col col-3 class="whyCols" >\n            <img src="assets/imgs/why/6.png" class="whyIcons" >\n            <p class="cardIconCont">\n                Flexible pricing\n                options to choose\n                from based on your\n                specific needs               \n            </p>\n          </ion-col>\n\n         <ion-col col-3 class="whyCols" >\n            <img src="assets/imgs/why/7.png" class="whyIcons" >\n            <p class="cardIconCont">\n                Multiple Centre\n                Operations made\n                simple with ARTis \n            </p>\n          </ion-col>\n\n         <ion-col col-3 >\n            <img src="assets/imgs/why/8.png" class="whyIcons" >\n            <p class="cardIconCont">\n                Smart Analytics\n                and Reports that\n                help better decision\n                making and gain control\n            </p>\n          </ion-col>\n\n\n\n\n        </ion-row>\n      </ion-grid>\n\n    </ion-card-content>\n  </ion-card>\n\n  <!-- Our Products -->\n\n  <ion-card  class="microBg" >\n    <ion-card-content  >\n      <p class="head">OUR PRODUCTS</p>\n\n      <ion-grid  padding-vertical >\n        <ion-row  >\n          \n          <ion-col col-4>\n            <div class="productsDiv">\n              <img src="assets/imgs/logo.png" class="ourPimg" style="left: 25%;" />\n            </div>\n            <p class="ourPtext" >Comprehensive ARTis product<br/>\n                with complete features</p>\n          </ion-col>\n\n          <ion-col col-4>\n              <div class="productsDiv">\n                <img src="assets/imgs/logo.png" class="ourPimg" style="left: 7%;"/>\n                <p class="textplog">Lite</p>\n              </div>\n              <p class="ourPtext" >Standard ARTis product suitable <br/>for smaller setups  </p>\n            </ion-col>\n  \n          <ion-col col-4>\n              <div class="productsDiv">\n                <img src="assets/imgs/logo.png" class="ourPimg" style="left: 7%;"/>\n                <p class="textplog">Witness</p>\n              </div>\n              <p class="ourPtext" >Advanced electronic witnessing<br/>system for IVF Centres</p>\n            </ion-col>\n          <ion-col col-4 push-2 >\n              <div class="productsDiv">\n                <img src="assets/imgs/logo.png" class="ourPimg" style="left: 7%;"/>\n                <p class="textplog">PGD</p>\n              </div>\n              <p class="ourPtext" >\n                  Product for Genetics service <br/>\n                  providers to seem lessly<br/>\n                  connect with the IVF centres<br/>\n                  for daily transactions<br/>\n              </p>\n            </ion-col>\n\n\n          <ion-col col-4 push-2 >\n              <div class="productsDiv">\n                <img src="assets/imgs/logo.png" class="ourPimg" style="left: 7%;"/>\n                <p class="textplog">Cryo</p>\n              </div>\n              <p class="ourPtext" >\n                Offers effective management <br/>\n                of Gamete freezing\n              </p>\n            </ion-col>\n\n          <!-- <ion-col col-4>\n            <ion-card color="light" >\n              <ion-card-content>\n                <ion-card-title>ARTis Cryo</ion-card-title>\n              </ion-card-content>\n            </ion-card>\n            <p>\n            </p>\n          </ion-col> -->\n        </ion-row>\n      </ion-grid>\n\n\n    </ion-card-content>\n  </ion-card>\n\n  <!-- For me -->\n\n    <ion-card class="cardCont"  >\n      <p class="head">WHAT’S IN IT FOR ME ?</p>\n      <p  ion-text color="primary" >\n          ARTis Fertility treatment software is comprehensive and hence took requirements and needs of every stake holder into consideration. It has something for every business user of the IVF clinic or hospital and it facilitates the various interactions among the users and hence makes the workflow very effective and efficient.\n      </p>\n      <ion-grid>\n        <ion-row style="align-items : center;" >\n\n          <ion-col  class="colsFooter" >\n            <img src="assets/imgs/forme/1.png" class="whyIcons" >\n            <p class="cardIconCont">\n              Clinician / <br/> \n              Director\n            </p>\n          </ion-col>\n\n          <ion-col  class="colsFooter" >\n            <img src="assets/imgs/forme/2.png" class="whyIcons" >\n            <p class="cardIconCont">\n                Fertility Nurse\n                Specialist              \n            </p>\n          </ion-col>\n\n          <ion-col  class="colsFooter" >\n            <img src="assets/imgs/forme/3.png" class="whyIcons" >\n            <p class="cardIconCont">\n              Embryologist\n            </p>\n          </ion-col>\n\n          <ion-col  class="colsFooter" >\n            <img src="assets/imgs/forme/4.png" class="whyIcons" >\n            <p class="cardIconCont">\n              Patient\n            </p>\n          </ion-col>\n\n          <ion-col   >\n            <img src="assets/imgs/forme/5.png" class="whyIcons" >\n            <p class="cardIconCont">\n                Centre\n                Manager\n            </p>\n          </ion-col>\n\n\n        </ion-row>\n      </ion-grid>\n  </ion-card>\n\n\n  <!-- Footer -->\n  <ion-card color="primary">\n    <ion-card-content>\n      <ion-grid  >\n        <ion-row  >\n\n          <ion-col  col-4 class="colsf2">\n            <ion-list no-lines style="text-align : center;" >\n              <p   class="ftrHead" padding-left>Quick Links</p>\n              <ion-item color="primary" class="ftrText" >Home</ion-item>\n              <ion-item color="primary" class="ftrText">Why ARTis?</ion-item>\n              <ion-item color="primary" class="ftrText">ARTis Advantage</ion-item>\n              <ion-item color="primary" class="ftrText">ARTis Modules</ion-item>\n              <ion-item color="primary" class="ftrText">Request for Demo</ion-item>\n            </ion-list>\n          </ion-col>\n\n          <ion-col col-4  class="colsf2" >\n            <ion-list no-lines>\n                <p   class="ftrHead" padding-left >USER BENEFITS</p>\n                <ion-item color="primary" class="ftrText" >Medical Director/Clinician</ion-item>\n                <ion-item color="primary" class="ftrText">Embryologist</ion-item>\n                <ion-item color="primary" class="ftrText">Fertility Nurse Specialist</ion-item>\n                <ion-item color="primary" class="ftrText">IVF Patient</ion-item>\n                <ion-item color="primary" class="ftrText">Centre Manager</ion-item>\n            </ion-list>\n          </ion-col>\n          <ion-col col-4  style="padding-left: 10%;" > \n            <ion-list no-lines>\n                <p   class="ftrHead" padding-left >CONTACT</p>\n            <ion-item color="primary" class="ftrText" >T: +91-40-40185150</ion-item>\n            <ion-item color="primary" class="ftrText">T: +91-40-40207772</ion-item>\n            <ion-item color="primary" class="ftrText">M: +91-98663 04146</ion-item>\n            <ion-item color="primary" class="ftrText">E:  info@artisivf.com</ion-item>\n            <ion-item color="primary" >\n              <button ion-button round clear color="whiter">\n                <ion-icon name="logo-facebook" color="primary"></ion-icon>\n              </button>\n              <!-- <ion-icon round name="logo-facebook"></ion-icon>\n              <ion-icon name=""></ion-icon>\n              <ion-icon name=""></ion-icon> -->\n            </ion-item>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n<ion-toolbar>\n  <p ion-text color="darkphone" class="copy" >Copyright 2009 - 2018 ARTis | All Rights Reserved</p>\n</ion-toolbar>\n\n\n</ion-row>\n\n</ion-grid>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\pc\Desktop\artis\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map