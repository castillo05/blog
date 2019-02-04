webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".title{\r\n  font-family: \"minecraft\";\r\n}\r\n\r\na{\r\n  color: black;\r\n}\r\n\r\n.cont{\r\n  margin-bottom: 100px;\r\n}\r\n\r\n/* Sticky footer styles\r\n-------------------------------------------------- */\r\n\r\nhtml {\r\n  position: relative;\r\n  min-height: 100%;\r\n}\r\n\r\nbody {\r\n  /* Margin bottom by footer height */\r\n  margin-bottom: 60px;\r\n}\r\n\r\n/* Custom page CSS\r\n-------------------------------------------------- */\r\n\r\n/* Not required for template or sticky footer method. */\r\n\r\nbody > .container {\r\n  padding: 60px 15px 0;\r\n}\r\n\r\n.footer > .container {\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n}\r\n\r\ncode {\r\n  font-size: 80%;\r\n}\r\n\r\n/*Font*/\r\n\r\n@font-face {\r\n  font-family: \"Christmas\";\r\n  src: url('Miraculous&Christmas.4bbcc33a3627e70e0578.ttf') format(\"truetype\")\r\n}\r\n\r\n@font-face {\r\n  font-family: \"boots_spurs\";\r\n  src: url('Boots&Spurs_personal_use_only.9dc62b8077b41e804411.ttf') format(\"truetype\")\r\n}\r\n\r\n@font-face {\r\n  font-family: \"minecraft\";\r\n  src: url('Minecrafter.Alt.dc7947b63602675ec87b.ttf') format(\"truetype\")\r\n}\r\n\r\n@media (max-width: 576px) {\r\n  .img{\r\n         width: 100%;\r\n         display: none;\r\n\r\n     }\r\n\r\n\r\n}\r\n\r\n@media (max-width: 768px) {\r\n .img{\r\n   width: 100%;\r\n\r\n\r\n}\r\n\r\n.title{\r\n  font-size: 1em;\r\n  text-align: center;\r\n}\r\n\r\n}\r\n\r\n@media (max-width: 992px) {\r\n .img{\r\n   width: 100%;\r\n\r\n\r\n}\r\n\r\n.title{\r\n  font-size: 1.3em;\r\n  text-align: center;\r\n}\r\n\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n\n            <router-outlet></router-outlet>\n\n\n\n            <!-- <div class=\"card\" style=\"width: 18rem;\">\n                <img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                  <h5 class=\"card-title\">Card title</h5>\n                  <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                  <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n                </div>\n              </div> -->\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_global__ = __webpack_require__("./src/app/service/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__("./src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_facebook__ = __webpack_require__("./node_modules/ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_categoria_service__ = __webpack_require__("./src/app/service/categoria.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_post_service__ = __webpack_require__("./src/app/service/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppComponent = /** @class */ (function () {
    function AppComponent(_userService, _route, _router, fb, _categoriaService, _postService, meta, modalService) {
        this._userService = _userService;
        this._route = _route;
        this._router = _router;
        this.fb = fb;
        this._categoriaService = _categoriaService;
        this._postService = _postService;
        this.meta = meta;
        this.modalService = modalService;
        this.title = 'jorgecastillodevelop.pro';
        this.page = 2;
        this.contador = 0;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]('', '', '', '', '', '', '', '');
        this.url = __WEBPACK_IMPORTED_MODULE_1__service_global__["a" /* GLOBAL */].url;
        this.meta.updateTag({ name: 'description', content: 'Hola somos codigo nica y en este blog en donde publicamos tutoriales, articulos y muchas cosas mas sobre tecnologia y mas' });
        this.meta.updateTag({ name: 'author', content: 'Jorge Castillo Moreno' });
        this.meta.updateTag({ name: 'keywords', content: 'Jorge Castillo, Informatico, Programador Nicaragua, Tecnologia Nicaragua' });
        this.meta.updateTag({ property: 'og:title', content: 'Jorge Castillo JC Developer Nicaragua Articulos Tutoriales sobre tecnologias' });
        this.meta.updateTag({ property: 'og:type', content: 'artículo' });
        this.meta.updateTag({ property: 'og:description', content: 'JC Developer Nicaragua te ofrece los mejores servicios en el desarrollo de tu sitio web, aplicacion y lo que necesites en el desarrollo de tu negocio a la par de la tecnologia' });
        this.meta.updateTag({ property: 'og:url', content: 'http://www.jorgecastillodeveloper.pro' });
        this.meta.updateTag({ property: 'og:image', content: 'http://www.jorgecastillodeveloper.pro/assets/img/jorge.jpg' });
        this.meta.updateTag({ property: 'og:fb:admins', content: 'https://www.facebook.com/jorgeacastillomoreno/' });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.getCategoria();
        //   console.log(this.identity);
        //   console.log(this.identity);
    };
    AppComponent.prototype.getCategoria = function () {
        var _this = this;
        this._categoriaService.getCategoria(this.token).subscribe(function (response) {
            if (!response.categoria) {
                console.log('No Hay categoria');
            }
            else {
                _this.cate = response.categoria;
                _this._postService.getcountPost().subscribe(function (resp) {
                    _this.countp = resp.postcat;
                    for (var i = 0; i < _this.countp.length; i++) {
                        var element_1 = _this.countp[i];
                        for (var j = 0; j < _this.cate.length; j++) {
                            var element2 = _this.cate[j];
                            if (element_1.category == element2._id) {
                                _this.contador = _this.contador + 1;
                                console.log(_this.contador);
                            }
                        }
                    }
                });
            }
        }, function (error) {
            var errorMessage = error;
            var body = JSON.parse(error._body);
            _this.alertMessage = body.message;
            if (errorMessage != null) {
                _this.alertMessage = body.message;
                console.log(error);
            }
        });
    };
    // Metodo para contar los post por categoria
    AppComponent.prototype.SearchPost = function (search) {
        var _this = this;
        //this._route.params.forEach((params:Params)=>{
        if (search == '') {
            return this._router.navigate(['/']);
        }
        this.search = search;
        // let page=+params['page'];
        // if (!page) {
        //     page=2  
        // } else {
        //     this.page=page+2;
        // }
        this._postService.getsearchpost(this.search).subscribe(function (response) {
            if (!response.searchPost) {
                _this._router.navigate(['/']);
            }
            else {
                _this.posts = response.searchPost;
                _this._router.navigate(['/SearchPost/' + _this.search]);
            }
        }, function (error) {
            var errorMessage = error;
            var body = JSON.parse(error._body);
            _this.alertMessage = body.message;
            if (errorMessage != null) {
                _this.alertMessage = body.message;
                console.log(error);
            }
        });
        // });
    };
    AppComponent.prototype.onSubmit = function () {
        var _this = this;
        this._userService.singup(this.user).subscribe(function (response) {
            var identity = response.user;
            _this.identity = identity;
            //console.log(response.message);
            if (response.message) {
                alert(response.message);
            }
            else if (!_this.identity._id) {
                alert('El Usuario no esta correctamente logeado');
                console.log(_this.identity);
            }
            else {
                //crear elemento del localStorage
                localStorage.setItem('identity', JSON.stringify(identity));
                //Conseguir el token para enviarlo a cada peticion
                _this._userService.singup(_this.user, 'true').subscribe(function (response) {
                    var token = response.token;
                    _this.token = token;
                    if (_this.token.length <= 0) {
                        alert('El Token no se ha generado');
                    }
                    else {
                        //se crea el elemento en el localStorage
                        localStorage.setItem('token', token);
                        _this.user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]('', '', '', '', '', '', '', '');
                    }
                    //    this._router.navigate(['/']);
                }, function (error) {
                    var errorMessage = error;
                    var body = JSON.stringify(error._body);
                    if (errorMessage != null) {
                        _this.errorMessage = body;
                        console.log(error);
                    }
                });
            }
        }, function (error) {
            var errorMessage = error;
            var body = JSON.stringify(error._body);
            if (errorMessage != null) {
                _this.errorMessage = body;
                console.log(error);
                alert(_this.errorMessage);
            }
        });
    };
    AppComponent.prototype.logout = function () {
        localStorage.removeItem('identity');
        localStorage.removeItem('token');
        localStorage.clear();
        this.identity = null;
        this.token = null;
        this._router.navigate(['/']);
    };
    // Modal
    AppComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    AppComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_0__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_6__service_categoria_service__["a" /* CategoriaService */], __WEBPACK_IMPORTED_MODULE_7__service_post_service__["a" /* PostService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_facebook__["b" /* FacebookService */],
            __WEBPACK_IMPORTED_MODULE_6__service_categoria_service__["a" /* CategoriaService */],
            __WEBPACK_IMPORTED_MODULE_7__service_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["Meta"],
            __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_post_filter_component__ = __webpack_require__("./src/app/components/post-filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_user_edit_component__ = __webpack_require__("./src/app/components/user-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_portafolio_add_component__ = __webpack_require__("./src/app/components/portafolio-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_perfil_edit_component__ = __webpack_require__("./src/app/components/perfil-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_post_details_component__ = __webpack_require__("./src/app/components/post-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_sobremi_component__ = __webpack_require__("./src/app/components/sobremi.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_admin_component__ = __webpack_require__("./src/app/components/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_component__ = __webpack_require__("./src/app/components/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_post_list_component__ = __webpack_require__("./src/app/components/post-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_perfil_add_component__ = __webpack_require__("./src/app/components/perfil-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_educacion_add_component__ = __webpack_require__("./src/app/components/educacion-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_educacion_edit_component__ = __webpack_require__("./src/app/components/educacion-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_portafolio_component__ = __webpack_require__("./src/app/components/portafolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_portafolio_edit_component__ = __webpack_require__("./src/app/components/portafolio-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_components_service_component__ = __webpack_require__("./src/app/components/service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_components_contacto_component__ = __webpack_require__("./src/app/components/contacto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_post_add_component__ = __webpack_require__("./src/app/components/post-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng2_ckeditor__ = __webpack_require__("./node_modules/ng2-ckeditor/lib/ng2-ckeditor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_post_edit_component__ = __webpack_require__("./src/app/components/post-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_videogular2_core__ = __webpack_require__("./node_modules/videogular2/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_videogular2_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_videogular2_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ngx_facebook__ = __webpack_require__("./node_modules/ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_categoria_component__ = __webpack_require__("./src/app/components/categoria.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ng2_adsense__ = __webpack_require__("./node_modules/ng2-adsense/esm5/ng2-adsense.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_search_component__ = __webpack_require__("./src/app/components/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_register_component__ = __webpack_require__("./src/app/components/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_user_list_component__ = __webpack_require__("./src/app/components/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_34_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__jaspero_ng2_alerts__ = __webpack_require__("./node_modules/@jaspero/ng2-alerts/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_ngx_youtube_player__ = __webpack_require__("./node_modules/ngx-youtube-player/esm5/ngx-youtube-player.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_login_component__ = __webpack_require__("./src/app/components/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__shared_navbar_navbar_component__ = __webpack_require__("./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__shared_facecomponent_facecomponent_component__ = __webpack_require__("./src/app/shared/facecomponent/facecomponent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__cover_cover_component__ = __webpack_require__("./src/app/cover/cover.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__shared_footer_footer_component__ = __webpack_require__("./src/app/shared/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































// componente de login





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_sobremi_component__["a" /* SobremiComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_post_list_component__["a" /* PostListComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_post_details_component__["a" /* PostDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_perfil_edit_component__["a" /* PerfileditComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_perfil_add_component__["a" /* PerfilAddComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_educacion_add_component__["a" /* EducacionAddComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_educacion_edit_component__["a" /* EducacioneditComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_portafolio_component__["a" /* PortafolioComponent */],
                __WEBPACK_IMPORTED_MODULE_2__components_portafolio_add_component__["a" /* PortafolioAddComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_portafolio_edit_component__["a" /* PortafolioeditComponent */],
                __WEBPACK_IMPORTED_MODULE_21__app_components_service_component__["a" /* ServiceComponent */],
                __WEBPACK_IMPORTED_MODULE_22__app_components_contacto_component__["a" /* ContactoComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_post_add_component__["a" /* PostAddComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_post_edit_component__["a" /* PosteditComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_categoria_component__["a" /* CategoriaComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_user_list_component__["a" /* UserListComponent */],
                __WEBPACK_IMPORTED_MODULE_1__components_user_edit_component__["a" /* UserEditComponent */],
                __WEBPACK_IMPORTED_MODULE_0__components_post_filter_component__["a" /* PostFilterComponent */],
                __WEBPACK_IMPORTED_MODULE_37__components_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_38__shared_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_39__shared_facecomponent_facecomponent_component__["a" /* FacecomponentComponent */],
                __WEBPACK_IMPORTED_MODULE_40__cover_cover_component__["a" /* CoverComponent */],
                __WEBPACK_IMPORTED_MODULE_41__shared_footer_footer_component__["a" /* FooterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13__app_routing__["b" /* routing */],
                __WEBPACK_IMPORTED_MODULE_24_ng2_ckeditor__["CKEditorModule"],
                __WEBPACK_IMPORTED_MODULE_26_videogular2_core__["VgCoreModule"],
                __WEBPACK_IMPORTED_MODULE_27_ngx_facebook__["a" /* FacebookModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_33__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_29_ng2_adsense__["a" /* AdsenseModule */].forRoot({
                    adClient: 'ca-pub-9497107609585223',
                    adSlot: 3266185512 // reemplace con su ranura de google adsense
                }),
                __WEBPACK_IMPORTED_MODULE_34_angular2_notifications__["SimpleNotificationsModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_35__jaspero_ng2_alerts__["b" /* JasperoAlertsModule */],
                __WEBPACK_IMPORTED_MODULE_36_ngx_youtube_player__["a" /* YoutubePlayerModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__app_routing__["a" /* appRoutingProviders */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutingProviders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_register_component__ = __webpack_require__("./src/app/components/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_categoria_component__ = __webpack_require__("./src/app/components/categoria.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_service_component__ = __webpack_require__("./src/app/components/service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_portafolio_add_component__ = __webpack_require__("./src/app/components/portafolio-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_perfil_edit_component__ = __webpack_require__("./src/app/components/perfil-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_sobremi_component__ = __webpack_require__("./src/app/components/sobremi.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_component__ = __webpack_require__("./src/app/components/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_admin_component__ = __webpack_require__("./src/app/components/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_post_details_component__ = __webpack_require__("./src/app/components/post-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_perfil_add_component__ = __webpack_require__("./src/app/components/perfil-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_educacion_add_component__ = __webpack_require__("./src/app/components/educacion-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_educacion_edit_component__ = __webpack_require__("./src/app/components/educacion-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_portafolio_component__ = __webpack_require__("./src/app/components/portafolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_portafolio_edit_component__ = __webpack_require__("./src/app/components/portafolio-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_contacto_component__ = __webpack_require__("./src/app/components/contacto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_post_add_component__ = __webpack_require__("./src/app/components/post-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_post_edit_component__ = __webpack_require__("./src/app/components/post-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_user_list_component__ = __webpack_require__("./src/app/components/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_user_edit_component__ = __webpack_require__("./src/app/components/user-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_post_filter_component__ = __webpack_require__("./src/app/components/post-filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__cover_cover_component__ = __webpack_require__("./src/app/cover/cover.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_login_component__ = __webpack_require__("./src/app/components/login.component.ts");























// Componente de login----

var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_22__cover_cover_component__["a" /* CoverComponent */] },
    { path: 'home/:page', component: __WEBPACK_IMPORTED_MODULE_8__components_home_component__["a" /* HomeComponent */] },
    { path: 'post-detalle', component: __WEBPACK_IMPORTED_MODULE_10__components_post_details_component__["a" /* PostDetailsComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_9__components_admin_component__["a" /* AdminComponent */] },
    { path: 'perfiladd', component: __WEBPACK_IMPORTED_MODULE_11__components_perfil_add_component__["a" /* PerfilAddComponent */] },
    { path: 'updateperfil/:id', component: __WEBPACK_IMPORTED_MODULE_4__components_perfil_edit_component__["a" /* PerfileditComponent */] },
    { path: 'educacionadd', component: __WEBPACK_IMPORTED_MODULE_12__components_educacion_add_component__["a" /* EducacionAddComponent */] },
    { path: 'updateeducacion/:id', component: __WEBPACK_IMPORTED_MODULE_13__components_educacion_edit_component__["a" /* EducacioneditComponent */] },
    { path: 'sobremi', component: __WEBPACK_IMPORTED_MODULE_5__components_sobremi_component__["a" /* SobremiComponent */] },
    { path: 'portafolio', component: __WEBPACK_IMPORTED_MODULE_14__components_portafolio_component__["a" /* PortafolioComponent */] },
    { path: 'portafolioadd', component: __WEBPACK_IMPORTED_MODULE_3__components_portafolio_add_component__["a" /* PortafolioAddComponent */] },
    { path: 'updateportafolio/:id', component: __WEBPACK_IMPORTED_MODULE_15__components_portafolio_edit_component__["a" /* PortafolioeditComponent */] },
    //Rutas para page service
    { path: 'service', component: __WEBPACK_IMPORTED_MODULE_2__components_service_component__["a" /* ServiceComponent */] },
    //Rutas para contactos
    { path: 'contacto', component: __WEBPACK_IMPORTED_MODULE_16__components_contacto_component__["a" /* ContactoComponent */] },
    //Rutas de Post
    { path: 'postdetails/:slug', component: __WEBPACK_IMPORTED_MODULE_10__components_post_details_component__["a" /* PostDetailsComponent */] },
    { path: 'postadd', component: __WEBPACK_IMPORTED_MODULE_17__components_post_add_component__["a" /* PostAddComponent */] },
    { path: 'postedit/:slug', component: __WEBPACK_IMPORTED_MODULE_18__components_post_edit_component__["a" /* PosteditComponent */] },
    { path: 'SearchPost/:search', component: __WEBPACK_IMPORTED_MODULE_21__components_post_filter_component__["a" /* PostFilterComponent */] },
    // Categoria
    { path: 'categoria/:id', component: __WEBPACK_IMPORTED_MODULE_1__components_categoria_component__["a" /* CategoriaComponent */] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_0__components_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_23__components_login_component__["a" /* LoginComponent */] },
    { path: 'userslist', component: __WEBPACK_IMPORTED_MODULE_19__components_user_list_component__["a" /* UserListComponent */] },
    { path: 'useredit/:id', component: __WEBPACK_IMPORTED_MODULE_20__components_user_edit_component__["a" /* UserEditComponent */] }
];
var appRoutingProviders = [];
var routing = __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/components/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_educacion__ = __webpack_require__("./src/app/models/educacion.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_perfil__ = __webpack_require__("./src/app/models/perfil.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_global__ = __webpack_require__("./src/app/service/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user__ = __webpack_require__("./src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_perfil_service__ = __webpack_require__("./src/app/service/perfil.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_educacion_service__ = __webpack_require__("./src/app/service/educacion.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AdminComponent = /** @class */ (function () {
    function AdminComponent(_route, _router, _userService, _perfilService, _educacionService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._perfilService = _perfilService;
        this._educacionService = _educacionService;
        this.chek = false;
        this.titulo = 'Guardar Perfil';
        this.user = new __WEBPACK_IMPORTED_MODULE_4__models_user__["a" /* User */]('', '', '', '', '', '', '', '');
        this.perfil = new __WEBPACK_IMPORTED_MODULE_1__models_perfil__["a" /* Perfil */]('', '', '', '', '', '');
        this.educacion = new __WEBPACK_IMPORTED_MODULE_0__models_educacion__["a" /* Educacion */]('', '', '', '', '', '');
        this.url = __WEBPACK_IMPORTED_MODULE_3__service_global__["a" /* GLOBAL */].url;
    }
    AdminComponent.prototype.ngOnInit = function () {
        console.log('AdminComponent cargado');
        //Consegur el listado de artista
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        console.log(this.identity);
        console.log(this.token);
    };
    AdminComponent.prototype.goTo = function (path) {
        this._router.navigate(path);
    };
    AdminComponent.prototype.onSubmit = function () {
        var _this = this;
        this._userService.singup(this.user).subscribe(function (response) {
            var identity = response.user;
            _this.identity = identity;
            if (!_this.identity._id) {
                alert('El Usuario no esta correctamente logeado');
                console.log(_this.identity);
            }
            else {
                //crear elemento del localStorage
                localStorage.setItem('identity', JSON.stringify(identity));
                //Conseguir el token para enviarlo a cada peticion
                _this._userService.singup(_this.user, 'true').subscribe(function (response) {
                    var token = response.token;
                    _this.token = token;
                    if (_this.token.length <= 0) {
                        alert('El Token no se ha generado');
                    }
                    else {
                        //se crea el elemento en el localStorage
                        localStorage.setItem('token', token);
                        _this.user = new __WEBPACK_IMPORTED_MODULE_4__models_user__["a" /* User */]('', '', '', '', '', '', '', '');
                    }
                    console.log(_this.identity);
                    console.log(_this.token);
                    //this._router.navigate(['/']);
                    _this.goTo(['']);
                }, function (error) {
                    var errorMessage = error;
                    var body = JSON.stringify(error._body);
                    if (errorMessage != null) {
                        // this.errorMessage=body.message;
                        console.log(error);
                    }
                });
            }
        }, function (error) {
            var errorMessage = error;
            var body = JSON.stringify(error._body);
            if (errorMessage != null) {
                // this.errorMessage=body.message;
                console.log(error);
            }
        });
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'admin',
            template: __webpack_require__("./src/app/views/admin.html"),
            styles: [__webpack_require__("./src/app/css.component/admin.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_7__service_perfil_service__["a" /* PerfilService */], __WEBPACK_IMPORTED_MODULE_8__service_educacion_service__["a" /* EducacionService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_7__service_perfil_service__["a" /* PerfilService */],
            __WEBPACK_IMPORTED_MODULE_8__service_educacion_service__["a" /* EducacionService */]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/components/categoria.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_global__ = __webpack_require__("./src/app/service/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_post_service__ = __webpack_require__("./src/app/service/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoriaComponent = /** @class */ (function () {
    function CategoriaComponent(_route, _router, _userService, _postService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._postService = _postService;
        this.titulo = 'jorgecastillodeveloper';
        this.next_page = 1;
        this.prev_page = 1;
        this.page = 20;
        this.url = __WEBPACK_IMPORTED_MODULE_0__service_global__["a" /* GLOBAL */].url;
        this.u = true;
    }
    CategoriaComponent.prototype.ngOnInit = function () {
        //console.log('HomeComponent cargado');
        //Consegur el listado de artista
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        //console.log(this.identity);
        //console.log(this.token);
        this.getPostCate();
        //this.getPostEnd();
    };
    // getPostEnd(){
    //         this._postService.endPost().subscribe(response=>{
    //             if (!response.publication) {
    //                 this._router.navigate(['/']);
    //             } else {
    //                 this.publication=response.publication;
    //                 console.log(response.publication);
    //             }
    //         },error=>{
    //             var errorMessage = <any>error;
    //             var body = JSON.parse(error._body);
    //             this.alertmessage = body.message;
    //             if (errorMessage !=null) { 
    //             this.alertmessage=body.message; 
    //             console.log(error);
    //             }
    //         }
    //     );
    //     }
    CategoriaComponent.prototype.getPostCate = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            // let page=+params['page'];
            // if (!page) {
            //     page=10
            // } else {
            //     this.page=page+2;
            // }
            _this._postService.getPostsCat(_this.token, id).subscribe(function (response) {
                if (!response.posts) {
                    _this._router.navigate(['/']);
                }
                else if (response.total_items == 0) {
                    alert('No hay Post en esta categoria');
                    _this._router.navigate(['/']);
                }
                else {
                    _this.posts = response.posts;
                    _this.img = response.posts.image;
                    _this.u = false;
                }
            }, function (error) {
                var errorMessage = error;
                var body = JSON.parse(error._body);
                _this.alertmessage = body.message;
                if (errorMessage != null) {
                    _this.alertmessage = body.message;
                    console.log(error);
                }
            });
        });
    };
    CategoriaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'home',
            template: __webpack_require__("./src/app/views/categoria.html"),
            styles: [__webpack_require__("./src/app/css.component/home.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__service_post_service__["a" /* PostService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__service_post_service__["a" /* PostService */]])
    ], CategoriaComponent);
    return CategoriaComponent;
}());



/***/ }),

/***/ "./src/app/components/contacto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactoComponent = /** @class */ (function () {
    function ContactoComponent() {
    }
    ContactoComponent.prototype.ngOnInit = function () {
    };
    ContactoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contacto',
            template: __webpack_require__("./src/app/views/contacto.component.html"),
            styles: [__webpack_require__("./src/app/css.component/contacto.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactoComponent);
    return ContactoComponent;
}());



/***/ }),

/***/ "./src/app/components/educacion-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EducacionAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_educacion__ = __webpack_require__("./src/app/models/educacion.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_perfil__ = __webpack_require__("./src/app/models/perfil.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_global__ = __webpack_require__("./src/app/service/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user__ = __webpack_require__("./src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_perfil_service__ = __webpack_require__("./src/app/service/perfil.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_educacion_service__ = __webpack_require__("./src/app/service/educacion.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EducacionAddComponent = /** @class */ (function () {
    function EducacionAddComponent(_route, _router, _userService, _perfilService, _educacionService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._perfilService = _perfilService;
        this._educacionService = _educacionService;
        this.chek = false;
        this.titulo = 'Guardar Educacion';
        this.user = new __WEBPACK_IMPORTED_MODULE_4__models_user__["a" /* User */]('', '', '', '', '', '', '', '');
        this.perfil = new __WEBPACK_IMPORTED_MODULE_1__models_perfil__["a" /* Perfil */]('', '', '', '', '', '');
        this.educacion = new __WEBPACK_IMPORTED_MODULE_0__models_educacion__["a" /* Educacion */]('', '', '', '', '', '');
        this.url = __WEBPACK_IMPORTED_MODULE_3__service_global__["a" /* GLOBAL */].url;
    }
    EducacionAddComponent.prototype.ngOnInit = function () {
        console.log('AdminComponent cargado');
        //Consegur el listado de artista
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        console.log(this.identity);
        console.log(this.token);
        if (this.identity.roles.roles != 'administrador') {
            this._router.navigate(['/']);
        }
    };
    EducacionAddComponent.prototype.onSubmit = function () {
        var _this = this;
        alert('Agregando educacion');
        this._educacionService.saveEducacion(this.token, this.educacion).subscribe(function (response) {
            if (!response.educacion) {
                _this.alertMessage = ('Error en el servidor');
            }
            else {
                _this.alertMessage = ('El Perfil se ha agregado correctamente');
                _this.educacion = response.educacion;
                _this._router.navigate(['/sobremi']);
                console.log(_this.educacion);
            }
        }, function (error) {
            var errorMessage = error;
            var body = JSON.parse(error._body);
            _this.alertMessage = body.message;
            if (errorMessage != null) {
                _this.alertMessage = body.message;
                console.log(error);
            }
        });
    };
    EducacionAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'educacion',
            template: __webpack_require__("./src/app/views/educacion.html"),
            styles: [__webpack_require__("./src/app/css.component/admin.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_7__service_perfil_service__["a" /* PerfilService */], __WEBPACK_IMPORTED_MODULE_8__service_educacion_service__["a" /* EducacionService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_7__service_perfil_service__["a" /* PerfilService */],
            __WEBPACK_IMPORTED_MODULE_8__service_educacion_service__["a" /* EducacionService */]])
    ], EducacionAddComponent);
    return EducacionAddComponent;
}());



/***/ }),

/***/ "./src/app/components/educacion-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EducacioneditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_educacion__ = __webpack_require__("./src/app/models/educacion.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_perfil__ = __webpack_require__("./src/app/models/perfil.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_global__ = __webpack_require__("./src/app/service/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user__ = __webpack_require__("./src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_perfil_service__ = __webpack_require__("./src/app/service/perfil.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_educacion_service__ = __webpack_require__("./src/app/service/educacion.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EducacioneditComponent = /** @class */ (function () {
    function EducacioneditComponent(_route, _router, _userService, _perfilService, _educacionService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._perfilService = _perfilService;
        this._educacionService = _educacionService;
        this.chek = false;
        this.titulo = 'Editar Educacion';
        this.user = new __WEBPACK_IMPORTED_MODULE_4__models_user__["a" /* User */]('', '', '', '', '', '', '', '');
        this.perfil = new __WEBPACK_IMPORTED_MODULE_1__models_perfil__["a" /* Perfil */]('', '', '', '', '', '');
        this.educacion = new __WEBPACK_IMPORTED_MODULE_0__models_educacion__["a" /* Educacion */]('', '', '', '', '', '');
        this.url = __WEBPACK_IMPORTED_MODULE_3__service_global__["a" /* GLOBAL */].url;
    }
    EducacioneditComponent.prototype.ngOnInit = function () {
        console.log('AdminComponent cargado');
        //Consegur el listado de artista
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        console.log(this.identity);
        console.log(this.token);
        this.geteducacionone();
        if (this.identity.roles.roles != 'administrador') {
            this._router.navigate(['/']);
        }
    };
    EducacioneditComponent.prototype.geteducacionone = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._educacionService.getEducacionOne(_this.token, id).subscribe(function (response) {
                if (!response.educacion) {
                    alert('Error...');
                }
                else {
                    _this.educacion = response.educacion;
                }
            }, function (error) {
                var errorMessage = error;
                var body = JSON.parse(error._body);
                _this.alertMessage = body.message;
                if (errorMessage != null) {
                    _this.alertMessage = body.message;
                    console.log(error);
                }
            });
        });
    };
    EducacioneditComponent.prototype.onSubmit = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._educacionService.updateEducacion(_this.token, id, _this.educacion).subscribe(function (response) {
                if (!response.educacion) {
                    _this.alertMessage = ('Error en el servidor');
                }
                else {
                    _this.alertMessage = ('El Elemento se ha actualizado correctamente');
                    //this.artist=response.artist;
                    //this._router.navigate(['/editar-artista']),response.artist._id);
                    //Subir la imagen
                    // if (!this.filesToUpload) { 
                    //     this._router.navigate(['/artista',response.artist._id]);
                    // } else {
                    //         this._UploadService.makeFileRequest(this.url+'upload-image-artist/'+id,[],this.filesToUpload,this.token,'image')
                    //     .then(
                    //             (result)=>{
                    //                 this._router.navigate(['/artists',1]);
                    //             },
                    //             (error)=>{
                    //                 console.log(error);
                    //             }
                    //         );
                    // }
                    _this._router.navigate(['/sobremi']);
                }
            }, function (error) {
                var errorMessage = error;
                var body = JSON.parse(error._body);
                _this.alertMessage = body.message;
                if (errorMessage != null) {
                    _this.alertMessage = body.message;
                    console.log(error);
                }
            });
        });
    };
    EducacioneditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'educacion',
            template: __webpack_require__("./src/app/views/educacion.html"),
            styles: [__webpack_require__("./src/app/css.component/admin.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_7__service_perfil_service__["a" /* PerfilService */], __WEBPACK_IMPORTED_MODULE_8__service_educacion_service__["a" /* EducacionService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_7__service_perfil_service__["a" /* PerfilService */],
            __WEBPACK_IMPORTED_MODULE_8__service_educacion_service__["a" /* EducacionService */]])
    ], EducacioneditComponent);
    return EducacioneditComponent;
}());



/***/ }),

/***/ "./src/app/components/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_global__ = __webpack_require__("./src/app/service/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_post_service__ = __webpack_require__("./src/app/service/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__jaspero_ng2_alerts__ = __webpack_require__("./node_modules/@jaspero/ng2-alerts/dist/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomeComponent = /** @class */ (function () {
    function HomeComponent(_route, _router, _userService, _postService, meta, _service, _alert) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._postService = _postService;
        this.meta = meta;
        this._service = _service;
        this._alert = _alert;
        this.titulo = 'jorgecastillodeveloper';
        this.next_page = 1;
        this.prev_page = 1;
        this.page = 4;
        this.url = __WEBPACK_IMPORTED_MODULE_0__service_global__["a" /* GLOBAL */].url;
        this.u = true;
        this.meta.updateTag({ name: 'author', content: 'Jorge Castillo Moreno' });
        this.meta.updateTag({ name: 'keywords', content: 'Jorge Castillo, Informatico, Programador Nicaragua, Tecnologia Nicaragua' });
        this.meta.updateTag({ property: 'og:title', content: 'Jorge Castillo JC Developer Nicaragua Articulos Tutoriales sobre tecnologias' });
        this.meta.updateTag({ property: 'og:type', content: 'artículo' });
        this.meta.updateTag({ property: 'og:description', content: 'JC Developer Nicaragua te ofrece los mejores servicios en el desarrollo de tu sitio web, aplicacion y lo que necesites en el desarrollo de tu negocio a la par de la tecnologia' });
        this.meta.updateTag({ property: 'og:url', content: 'http://www.jorgecastillodeveloper.pro/sobremi' });
        this.meta.updateTag({ property: 'og:image', content: 'http://www.jorgecastillodeveloper.pro/assets/img/jorge.jpg' });
        this.meta.updateTag({ property: 'og:fb:admins', content: 'https://www.facebook.com/jorgeacastillomoreno/' });
        this.meta.updateTag({ name: 'description', content: 'Hola soy jorge castillo y este es mi blog en donde publico tutoriales, articulos y muchas cosas mas sobre tecnologia y mas' });
    }
    HomeComponent.prototype.ngOnInit = function () {
        //console.log('HomeComponent cargado');
        //Consegur el listado de artista
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        //console.log(this.identity);
        //console.log(this.token);
        this.getPost();
        this.getPostEnd();
        this.open('success');
    };
    HomeComponent.prototype.open = function (type) {
        this._alert.create(type, 'This is a title');
    };
    HomeComponent.prototype.getPostEnd = function () {
        var _this = this;
        this._postService.endPost().subscribe(function (response) {
            if (!response.publication) {
                _this._router.navigate(['/']);
            }
            else {
                //console.log(response.publication);
                _this.publication = response.publication;
            }
        }, function (error) {
            var errorMessage = error;
            var body = JSON.parse(error._body);
            _this.alertmessage = body.message;
            if (errorMessage != null) {
                _this.alertmessage = body.message;
                console.log(error);
            }
        });
    };
    HomeComponent.prototype.getPost = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var page = +params['page'];
            if (!page) {
                page = 2;
            }
            else {
                _this.page = page + 2;
            }
            _this._postService.getPosts(_this.token, page).subscribe(function (response) {
                if (!response.posts) {
                    _this._router.navigate(['/']);
                }
                else {
                    _this.posts = JSON.parse(JSON.stringify(response.posts));
                    _this.u = false;
                }
            }, function (error) {
                var errorMessage = error;
                var body = JSON.parse(error._body);
                _this.alertmessage = body.message;
                if (errorMessage != null) {
                    _this.alertmessage = body.message;
                    console.log(error);
                }
            });
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'home',
            template: __webpack_require__("./src/app/views/home.html"),
            styles: [__webpack_require__("./src/app/css.component/home.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__service_post_service__["a" /* PostService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__service_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["Meta"],
            __WEBPACK_IMPORTED_MODULE_6_angular2_notifications__["NotificationsService"],
            __WEBPACK_IMPORTED_MODULE_7__jaspero_ng2_alerts__["a" /* AlertsService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_global__ = __webpack_require__("./src/app/service/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__("./src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_facebook__ = __webpack_require__("./node_modules/ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(_userService, _route, _router, fb, meta) {
        this._userService = _userService;
        this._route = _route;
        this._router = _router;
        this.fb = fb;
        this.meta = meta;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]('', '', '', '', '', '', '', '');
        this.url = __WEBPACK_IMPORTED_MODULE_1__service_global__["a" /* GLOBAL */].url;
        this.meta.updateTag({ name: 'description', content: 'Hola soy jorge castillo y este es mi blog en donde publico tutoriales, articulos y muchas cosas mas sobre tecnologia y mas' });
        this.meta.updateTag({ name: 'author', content: 'Jorge Castillo Moreno' });
        this.meta.updateTag({ name: 'keywords', content: 'Jorge Castillo, Informatico, Programador Nicaragua, Tecnologia Nicaragua' });
        this.meta.updateTag({ property: 'og:title', content: 'Jorge Castillo JC Developer Nicaragua Articulos Tutoriales sobre tecnologias' });
        this.meta.updateTag({ property: 'og:type', content: 'artículo' });
        this.meta.updateTag({ property: 'og:description', content: 'JC Developer Nicaragua te ofrece los mejores servicios en el desarrollo de tu sitio web, aplicacion y lo que necesites en el desarrollo de tu negocio a la par de la tecnologia' });
        this.meta.updateTag({ property: 'og:url', content: 'http://www.jorgecastillodeveloper.pro' });
        this.meta.updateTag({ property: 'og:image', content: 'http://www.jorgecastillodeveloper.pro/assets/img/jorge.jpg' });
        this.meta.updateTag({ property: 'og:fb:admins', content: 'https://www.facebook.com/jorgeacastillomoreno/' });
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this._userService.singup(this.user).subscribe(function (response) {
            var identity = response.user;
            _this.identity = identity;
            //console.log(response.message);
            if (response.message) {
                alert(response.message);
            }
            else if (!_this.identity._id) {
                alert('El Usuario no esta correctamente logeado');
                console.log(_this.identity);
            }
            else {
                //crear elemento del localStorage
                localStorage.setItem('identity', JSON.stringify(identity));
                //Conseguir el token para enviarlo a cada peticion
                _this._userService.singup(_this.user, 'true').subscribe(function (response) {
                    var token = response.token;
                    _this.token = token;
                    if (_this.token.length <= 0) {
                        alert('El Token no se ha generado');
                    }
                    else {
                        //se crea el elemento en el localStorage
                        localStorage.setItem('token', token);
                        _this.user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]('', '', '', '', '', '', '', '');
                        _this._router.navigate(['/']);
                    }
                }, function (error) {
                    var errorMessage = error;
                    var body = JSON.stringify(error._body);
                    if (errorMessage != null) {
                        _this.errorMessage = body;
                        console.log(error);
                    }
                });
            }
        }, function (error) {
            var errorMessage = error;
            var body = JSON.stringify(error._body);
            if (errorMessage != null) {
                _this.errorMessage = body;
                console.log(error);
                alert(_this.errorMessage);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'login',
            template: __webpack_require__("./src/app/views/login.html"),
            styles: [__webpack_require__("./src/app/css.component/login.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_0__service_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_facebook__["b" /* FacebookService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["Meta"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/perfil-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_educacion__ = __webpack_require__("./src/app/models/educacion.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_perfil__ = __webpack_require__("./src/app/models/perfil.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_global__ = __webpack_require__("./src/app/service/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user__ = __webpack_require__("./src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_perfil_service__ = __webpack_require__("./src/app/service/perfil.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_educacion_service__ = __webpack_require__("./src/app/service/educacion.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PerfilAddComponent = /** @class */ (function () {
    function PerfilAddComponent(_route, _router, _userService, _perfilService, _educacionService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._perfilService = _perfilService;
        this._educacionService = _educacionService;
        this.chek = false;
        this.titulo = 'Guardar Perfil';
        this.user = new __WEBPACK_IMPORTED_MODULE_4__models_user__["a" /* User */]('', '', '', '', '', '', '', '');
        this.perfil = new __WEBPACK_IMPORTED_MODULE_1__models_perfil__["a" /* Perfil */]('', '', '', '', '', '');
        this.educacion = new __WEBPACK_IMPORTED_MODULE_0__models_educacion__["a" /* Educacion */]('', '', '', '', '', '');
        this.url = __WEBPACK_IMPORTED_MODULE_3__service_global__["a" /* GLOBAL */].url;
    }
    PerfilAddComponent.prototype.ngOnInit = function () {
        console.log('AdminComponent cargado');
        //Consegur el listado de artista
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        console.log(this.identity);
        console.log(this.token);
        if (this.identity.roles.roles != 'administrador') {
            this._router.navigate(['/']);
        }
    };
    PerfilAddComponent.prototype.onSubmit = function () {
        var _this = this;
        this._perfilService.savePerfil(this.token, this.perfil).subscribe(function (response) {
            if (!response.perfil) {
                _this.alertMessage = ('Error en el servidor');
            }
            else {
                _this.alertMessage = ('El Perfil se ha agregado correctamente');
                _this.perfil = response.perfil;
                _this._router.navigate(['/sobremi']);
                console.log(_this.perfil);
            }
        }, function (error) {
            var errorMessage = error;
            var body = JSON.parse(error._body);
            _this.alertMessage = body.message;
            if (errorMessage != null) {
                _this.alertMessage = body.message;
                console.log(error);
            }
        });
    };
    PerfilAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'admin',
            template: __webpack_require__("./src/app/views/admin.html"),
            styles: [__webpack_require__("./src/app/css.component/admin.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_7__service_perfil_service__["a" /* PerfilService */], __WEBPACK_IMPORTED_MODULE_8__service_educacion_service__["a" /* EducacionService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_7__service_perfil_service__["a" /* PerfilService */],
            __WEBPACK_IMPORTED_MODULE_8__service_educacion_service__["a" /* EducacionService */]])
    ], PerfilAddComponent);
    return PerfilAddComponent;
}());



/***/ }),

/***/ "./src/app/components/perfil-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfileditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_educacion__ = __webpack_require__("./src/app/models/educacion.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_perfil__ = __webpack_require__("./src/app/models/perfil.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_global__ = __webpack_require__("./src/app/service/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user__ = __webpack_require__("./src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_perfil_service__ = __webpack_require__("./src/app/service/perfil.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_educacion_service__ = __webpack_require__("./src/app/service/educacion.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PerfileditComponent = /** @class */ (function () {
    function PerfileditComponent(_route, _router, _userService, _perfilService, _educacionService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._perfilService = _perfilService;
        this._educacionService = _educacionService;
        this.chek = false;
        this.titulo = 'Editar Perfil';
        this.user = new __WEBPACK_IMPORTED_MODULE_4__models_user__["a" /* User */]('', '', '', '', '', '', '', '');
        this.perfil = new __WEBPACK_IMPORTED_MODULE_1__models_perfil__["a" /* Perfil */]('', '', '', '', '', '');
        this.educacion = new __WEBPACK_IMPORTED_MODULE_0__models_educacion__["a" /* Educacion */]('', '', '', '', '', '');
        this.url = __WEBPACK_IMPORTED_MODULE_3__service_global__["a" /* GLOBAL */].url;
    }
    PerfileditComponent.prototype.ngOnInit = function () {
        //console.log('AdminComponent cargado');
        //Consegur el listado de artista
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        // console.log(this.identity);
        // console.log(this.token);
        this.getperfil();
    };
    PerfileditComponent.prototype.getperfil = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._perfilService.getPerfilone(_this.token, id).subscribe(function (response) {
                if (!response.perfil) {
                    alert('Error...');
                }
                else {
                    _this.perfil = response.perfil;
                    if (_this.identity.roles.roles != 'administrador') {
                        _this._router.navigate(['/']);
                    }
                }
            }, function (error) {
                var errorMessage = error;
                var body = JSON.parse(error._body);
                _this.alertMessage = body.message;
                if (errorMessage != null) {
                    _this.alertMessage = body.message;
                    console.log(error);
                }
            });
        });
    };
    PerfileditComponent.prototype.onSubmit = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._perfilService.updatePerfil(_this.token, id, _this.perfil).subscribe(function (response) {
                if (!response.perfil) {
                    _this.alertMessage = ('Error en el servidor');
                }
                else {
                    _this.alertMessage = ('El artista se ha actualizado correctamente');
                    //this.artist=response.artist;
                    //this._router.navigate(['/editar-artista']),response.artist._id);
                    //Subir la imagen
                    // if (!this.filesToUpload) { 
                    //     this._router.navigate(['/artista',response.artist._id]);
                    // } else {
                    //         this._UploadService.makeFileRequest(this.url+'upload-image-artist/'+id,[],this.filesToUpload,this.token,'image')
                    //     .then(
                    //             (result)=>{
                    //                 this._router.navigate(['/artists',1]);
                    //             },
                    //             (error)=>{
                    //                 console.log(error);
                    //             }
                    //         );
                    // }
                    _this._router.navigate(['/sobremi']);
                }
            }, function (error) {
                var errorMessage = error;
                var body = JSON.parse(error._body);
                _this.alertMessage = body.message;
                if (errorMessage != null) {
                    _this.alertMessage = body.message;
                    console.log(error);
                }
            });
        });
    };
    PerfileditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'admin',
            template: __webpack_require__("./src/app/views/perfil-add.html"),
            styleUrls: [],
            providers: [__WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_7__service_perfil_service__["a" /* PerfilService */], __WEBPACK_IMPORTED_MODULE_8__service_educacion_service__["a" /* EducacionService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_7__service_perfil_service__["a" /* PerfilService */],
            __WEBPACK_IMPORTED_MODULE_8__service_educacion_service__["a" /* EducacionService */]])
    ], PerfileditComponent);
    return PerfileditComponent;
}());



/***/ }),

/***/ "./src/app/components/portafolio-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortafolioAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_portafolio_service__ = __webpack_require__("./src/app/service/portafolio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_portafolio__ = __webpack_require__("./src/app/models/portafolio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_educacion__ = __webpack_require__("./src/app/models/educacion.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_perfil__ = __webpack_require__("./src/app/models/perfil.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_global__ = __webpack_require__("./src/app/service/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_user__ = __webpack_require__("./src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_perfil_service__ = __webpack_require__("./src/app/service/perfil.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service_educacion_service__ = __webpack_require__("./src/app/service/educacion.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var PortafolioAddComponent = /** @class */ (function () {
    function PortafolioAddComponent(_route, _router, _userService, _perfilService, _educacionService, _portafolioService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._perfilService = _perfilService;
        this._educacionService = _educacionService;
        this._portafolioService = _portafolioService;
        this.chek = false;
        this.titulo = 'Guardar Portafolio';
        this.user = new __WEBPACK_IMPORTED_MODULE_6__models_user__["a" /* User */]('', '', '', '', '', '', '', '');
        this.perfil = new __WEBPACK_IMPORTED_MODULE_3__models_perfil__["a" /* Perfil */]('', '', '', '', '', '');
        this.educacion = new __WEBPACK_IMPORTED_MODULE_2__models_educacion__["a" /* Educacion */]('', '', '', '', '', '');
        this.portafolio = new __WEBPACK_IMPORTED_MODULE_1__models_portafolio__["a" /* Portafolio */]('', '', '', '', '', '');
        this.url = __WEBPACK_IMPORTED_MODULE_5__service_global__["a" /* GLOBAL */].url;
    }
    PortafolioAddComponent.prototype.ngOnInit = function () {
        console.log('AdminComponent cargado');
        //Consegur el listado de artista
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        console.log(this.identity);
        console.log(this.token);
        if (this.identity.roles.roles != 'administrador') {
            this._router.navigate(['/']);
        }
    };
    PortafolioAddComponent.prototype.onSubmit = function () {
        var _this = this;
        this._portafolioService.savePortafolio(this.token, this.portafolio).subscribe(function (response) {
            if (!response.portafolio) {
                _this.alertMessage = ('Error en el servidor');
            }
            else {
                _this.alertMessage = ('El Portafolio se ha agregado correctamente');
                _this.portafolio = response.portafolio;
                _this._router.navigate(['/portafolio']);
                console.log(_this.perfil);
            }
        }, function (error) {
            var errorMessage = error;
            var body = JSON.parse(error._body);
            _this.alertMessage = body.message;
            if (errorMessage != null) {
                _this.alertMessage = body.message;
                console.log(error);
            }
        });
    };
    PortafolioAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["Component"])({
            selector: 'portafolio-add',
            template: __webpack_require__("./src/app/views/portafolio-add.html"),
            styles: [__webpack_require__("./src/app/css.component/admin.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_9__service_perfil_service__["a" /* PerfilService */], __WEBPACK_IMPORTED_MODULE_10__service_educacion_service__["a" /* EducacionService */], __WEBPACK_IMPORTED_MODULE_0__service_portafolio_service__["a" /* PortafolioService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_9__service_perfil_service__["a" /* PerfilService */],
            __WEBPACK_IMPORTED_MODULE_10__service_educacion_service__["a" /* EducacionService */],
            __WEBPACK_IMPORTED_MODULE_0__service_portafolio_service__["a" /* PortafolioService */]])
    ], PortafolioAddComponent);
    return PortafolioAddComponent;
}());



/***/ }),

/***/ "./src/app/components/portafolio-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortafolioeditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_upload_service__ = __webpack_require__("./src/app/service/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_portafolio_service__ = __webpack_require__("./src/app/service/portafolio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_portafolio__ = __webpack_require__("./src/app/models/portafolio.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_educacion__ = __webpack_require__("./src/app/models/educacion.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_perfil__ = __webpack_require__("./src/app/models/perfil.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_global__ = __webpack_require__("./src/app/service/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_user__ = __webpack_require__("./src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service_perfil_service__ = __webpack_require__("./src/app/service/perfil.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_educacion_service__ = __webpack_require__("./src/app/service/educacion.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var PortafolioeditComponent = /** @class */ (function () {
    function PortafolioeditComponent(_route, _router, _userService, _perfilService, _educacionService, _portafolioService, _uploadService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._perfilService = _perfilService;
        this._educacionService = _educacionService;
        this._portafolioService = _portafolioService;
        this._uploadService = _uploadService;
        this.is_edit = true;
        this.titulo = 'Editar Portafolio';
        this.user = new __WEBPACK_IMPORTED_MODULE_7__models_user__["a" /* User */]('', '', '', '', '', '', '', '');
        this.perfil = new __WEBPACK_IMPORTED_MODULE_4__models_perfil__["a" /* Perfil */]('', '', '', '', '', '');
        this.educacion = new __WEBPACK_IMPORTED_MODULE_3__models_educacion__["a" /* Educacion */]('', '', '', '', '', '');
        this.portafolio = new __WEBPACK_IMPORTED_MODULE_2__models_portafolio__["a" /* Portafolio */]('', '', '', '', '', '');
        this.url = __WEBPACK_IMPORTED_MODULE_6__service_global__["a" /* GLOBAL */].url;
    }
    PortafolioeditComponent.prototype.ngOnInit = function () {
        console.log('AdminComponent cargado');
        //Consegur el listado de artista
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        console.log(this.identity);
        console.log(this.token);
        this.getportafolioone();
        if (this.identity.roles.roles != 'administrador') {
            this._router.navigate(['/']);
        }
    };
    PortafolioeditComponent.prototype.getportafolioone = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._portafolioService.getPortafolioone(_this.token, id).subscribe(function (response) {
                if (!response.portafolio) {
                    console.log(response.portafolio);
                }
                else {
                    _this.portafolio = response.portafolio;
                }
            }, function (error) {
                var errorMessage = error;
                var body = JSON.parse(error._body);
                _this.alertMessage = body.message;
                if (errorMessage != null) {
                    _this.alertMessage = body.message;
                    console.log(error);
                }
            });
        });
    };
    PortafolioeditComponent.prototype.onSubmit = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._portafolioService.updatePortafolio(_this.token, id, _this.portafolio).subscribe(function (response) {
                if (!response.portafolio) {
                    _this.alertMessage = ('Error en el servidor');
                }
                else {
                    alert('El Elemento se ha actualizado correctamente');
                    _this.portafolio = response.portafolio;
                    // this._router.navigate(['/editar-artista']),response.artist._id);
                    // Subir la imagen
                    if (!_this.filesToUpload) {
                        // this._router.navigate(['/portafolio',response.portafolio._id]);
                        _this._router.navigate(['/portafolio']);
                    }
                    else {
                        _this._uploadService.makeFileRequest(_this.url + 'upload-image-portafolio/' + id, [], _this.filesToUpload, _this.token, 'image')
                            .then(function (result) {
                            // this._router.navigate(['/portafolio',1]);
                            _this._router.navigate(['/portafolio']);
                        }, function (error) {
                            console.log(error);
                        });
                    }
                }
            }, function (error) {
                var errorMessage = error;
                var body = JSON.parse(error._body);
                _this.alertMessage = body.message;
                if (errorMessage != null) {
                    _this.alertMessage = body.message;
                    console.log(error);
                }
            });
        });
    };
    PortafolioeditComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    PortafolioeditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["Component"])({
            selector: 'portafolio-add',
            template: __webpack_require__("./src/app/views/portafolio-add.html"),
            styles: [__webpack_require__("./src/app/css.component/admin.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_10__service_perfil_service__["a" /* PerfilService */], __WEBPACK_IMPORTED_MODULE_11__service_educacion_service__["a" /* EducacionService */], __WEBPACK_IMPORTED_MODULE_1__service_portafolio_service__["a" /* PortafolioService */], __WEBPACK_IMPORTED_MODULE_0__service_upload_service__["a" /* UploadService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_10__service_perfil_service__["a" /* PerfilService */],
            __WEBPACK_IMPORTED_MODULE_11__service_educacion_service__["a" /* EducacionService */],
            __WEBPACK_IMPORTED_MODULE_1__service_portafolio_service__["a" /* PortafolioService */],
            __WEBPACK_IMPORTED_MODULE_0__service_upload_service__["a" /* UploadService */]])
    ], PortafolioeditComponent);
    return PortafolioeditComponent;
}());



/***/ }),

/***/ "./src/app/components/portafolio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortafolioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_perfil_service__ = __webpack_require__("./src/app/service/perfil.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_global__ = __webpack_require__("./src/app/service/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__("./src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_educacion_service__ = __webpack_require__("./src/app/service/educacion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_portafolio_service__ = __webpack_require__("./src/app/service/portafolio.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PortafolioComponent = /** @class */ (function () {
    function PortafolioComponent(_route, _router, _userService, _perfilService, _educacionService, _portafolioService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._perfilService = _perfilService;
        this._educacionService = _educacionService;
        this._portafolioService = _portafolioService;
        this.titulo = 'Sobre Mi';
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]('', '', '', '', '', '', '', '');
        this.url = __WEBPACK_IMPORTED_MODULE_2__service_global__["a" /* GLOBAL */].url;
        this.next_page = 1;
        this.prev_page = 1;
    }
    PortafolioComponent.prototype.ngOnInit = function () {
        console.log('AdminComponent cargado');
        //Consegur el listado de artista
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        console.log(this.identity);
        console.log(this.token);
        this.getportafolios();
        // this.getEducacion();
    };
    PortafolioComponent.prototype.getportafolios = function () {
        // this._route.params.forEach((params:Params)=>{
        //     let page=+params['page'];
        //     if (!page) {
        //         page=1;
        //     } else {
        //         this.next_page=page+1;
        // 		this.prev_page=page-1;
        var _this = this;
        // 		if (this.prev_page==0) {
        // 			this.prev_page=1;
        //         }
        //     }
        this._portafolioService.getPortafolios(this.token).subscribe(function (response) {
            if (!response.portafolios) {
                alert('No hay portafolios agregadas');
            }
            else {
                _this.portafolios = response.portafolios;
            }
        }, function (error) {
            var errorMessage = error;
            var body = JSON.parse(error._body);
            _this.alertMessage = body.message;
            if (errorMessage != null) {
                _this.alertMessage = body.message;
                console.log(error);
            }
        });
    };
    // getEducacion(){
    //     this._educacionService.getEducacion(this.token).subscribe(
    //         response=>{
    //         if (!response.educacions) {
    //             alert('No hay educacion agregadas');
    //         } else {
    //             this.educacions=response.educacions;
    //         }
    //     },error=>{
    //         var errorMessage = <any>error;
    //         var body = JSON.parse(error._body);
    //         this.alertMessage = body.message;
    //         if (errorMessage !=null) { 
    //         this.alertMessage=body.message; 
    //         console.log(error);
    //         }
    //     });
    // }
    PortafolioComponent.prototype.onDeletePortafolio = function (id) {
        var _this = this;
        this._portafolioService.deletePortafolio(this.token, id).subscribe(function (response) {
            if (!response.portafolio) {
                alert('Error el el server');
            }
            else {
                _this.getportafolios();
            }
        }, function (error) {
            var errorMessage = error;
            var body = JSON.parse(error._body);
            _this.alertMessage = body.message;
            if (errorMessage != null) {
                _this.alertMessage = body.message;
                console.log(error);
            }
        });
    };
    PortafolioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'portafolio',
            template: __webpack_require__("./src/app/views/portafolio.html"),
            styles: [__webpack_require__("./src/app/css.component/portafolio.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_0__service_perfil_service__["a" /* PerfilService */], __WEBPACK_IMPORTED_MODULE_6__service_educacion_service__["a" /* EducacionService */], __WEBPACK_IMPORTED_MODULE_7__service_portafolio_service__["a" /* PortafolioService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_0__service_perfil_service__["a" /* PerfilService */],
            __WEBPACK_IMPORTED_MODULE_6__service_educacion_service__["a" /* EducacionService */],
            __WEBPACK_IMPORTED_MODULE_7__service_portafolio_service__["a" /* PortafolioService */]])
    ], PortafolioComponent);
    return PortafolioComponent;
}());



/***/ }),

/***/ "./src/app/components/post-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_categoria__ = __webpack_require__("./src/app/models/categoria.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_categoria_service__ = __webpack_require__("./src/app/service/categoria.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_global__ = __webpack_require__("./src/app/service/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user__ = __webpack_require__("./src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_post__ = __webpack_require__("./src/app/models/post.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_post_service__ = __webpack_require__("./src/app/service/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var PostAddComponent = /** @class */ (function () {
    function PostAddComponent(_route, _router, _userService, _postService, _categoriaService, modalService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._postService = _postService;
        this._categoriaService = _categoriaService;
        this.modalService = modalService;
        this.add = true;
        this.titulo = 'Guardar Post';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.user = new __WEBPACK_IMPORTED_MODULE_4__models_user__["a" /* User */]('', '', '', '', '', '', '', '');
        this.post = new __WEBPACK_IMPORTED_MODULE_7__models_post__["a" /* Post */]('', '', '', '', '', '', '', '', '', '');
        this.cat = new __WEBPACK_IMPORTED_MODULE_0__models_categoria__["a" /* Categoria */]('', '');
        this.url = __WEBPACK_IMPORTED_MODULE_3__service_global__["a" /* GLOBAL */].url;
        this.chek = true;
    }
    PostAddComponent.prototype.ngOnInit = function () {
        console.log('PostAddComponent cargado');
        //Consegur el listado de artista
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.post.description = '<h1>Hola Mundo</h1>';
        this.post.user = this.identity._id;
        //console.log(this.identity.name);
        console.log(this.post);
        this.getCategoria();
    };
    // Modal
    PostAddComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    PostAddComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    // Fin
    PostAddComponent.prototype.saveCat = function () {
        var _this = this;
        this._categoriaService.savecategoria(this.cat).subscribe(function (response) {
            if (response.message) {
                return alert(response.message);
            }
            if (!response.cat) {
                alert(response.message);
            }
            else {
                _this.cat = response.cat;
                _this.getCategoria();
            }
        }, function (error) {
            var errorMessage = error;
            var body = JSON.parse(error._body);
            _this.alertMessage = body.message;
            if (errorMessage != null) {
                _this.alertMessage = body.message;
                console.log(error);
            }
        });
    };
    PostAddComponent.prototype.getCategoria = function () {
        var _this = this;
        this._categoriaService.getCategoria(this.token).subscribe(function (response) {
            if (!response.categoria) {
                console.log('No Hay Categoria');
            }
            else {
                _this.categoria = response.categoria;
                //console.log(response.categoria);
            }
        }, function (error) {
            var errorMessage = error;
            var body = JSON.parse(error._body);
            _this.alertMessage = body.message;
            if (errorMessage != null) {
                _this.alertMessage = body.message;
                console.log(error);
            }
        });
    };
    PostAddComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.post.idvideo) {
            return console.log('No hay video de youtube.com...');
        }
        this._postService.savePost(this.token, this.post).subscribe(function (response) {
            if (response.post) {
                _this.alertMessage = ('El Post se ha agregado correctamente');
                //this.post=response.post;
                console.log(response.post);
                _this._router.navigate(['/postdetails/' + response.post.slug]);
            }
            else {
                _this.alertMessage = ('Error en el servidor');
            }
        }, function (error) {
            var errorMessage = error;
            var body = JSON.parse(error._body);
            _this.alertMessage = body.message;
            if (errorMessage != null) {
                _this.alertMessage = body.message;
                console.log(error);
            }
        });
    };
    PostAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'post-add',
            template: __webpack_require__("./src/app/views/post-add.html"),
            styles: [__webpack_require__("./src/app/css.component/post-add.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_8__service_post_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_1__service_categoria_service__["a" /* CategoriaService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_8__service_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_1__service_categoria_service__["a" /* CategoriaService */],
            __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], PostAddComponent);
    return PostAddComponent;
}());



/***/ }),

/***/ "./src/app/components/post-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_global__ = __webpack_require__("./src/app/service/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_post_service__ = __webpack_require__("./src/app/service/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_facebook__ = __webpack_require__("./node_modules/ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PostDetailsComponent = /** @class */ (function () {
    function PostDetailsComponent(_route, _router, _userService, _postService, fb, meta) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._postService = _postService;
        this.fb = fb;
        this.meta = meta;
        this.titulo = 'Publicaciones';
        this.next_page = 1;
        this.prev_page = 1;
        this.url = __WEBPACK_IMPORTED_MODULE_0__service_global__["a" /* GLOBAL */].url;
        this.getPostOne();
        var params = {
            appId: '1399875313450062',
            xfbml: true,
            version: 'v2.8'
        };
        fb.init(params);
    }
    PostDetailsComponent.prototype.ngOnInit = function () {
        console.log('PostListComponent cargado');
        //Consegur el listado de artista
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        // console.log(this.identity);
        // console.log(this.token);
    };
    PostDetailsComponent.prototype.onStateChange = function (event) {
        this.ytEvent = event.data;
    };
    PostDetailsComponent.prototype.savePlayer = function (player) {
        this.player = player;
    };
    PostDetailsComponent.prototype.playVideo = function () {
        this.player.playVideo();
    };
    PostDetailsComponent.prototype.pauseVideo = function () {
        this.player.pauseVideo();
    };
    PostDetailsComponent.prototype.getPostOne = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var slug = params['slug'];
            _this._postService.getPostsOne(slug).subscribe(function (response) {
                if (!response.publicacion) {
                    _this._router.navigate(['/']);
                }
                else {
                    _this.publicacion = response.publicacion;
                    // console.log(this.publicacion);
                    _this.titulo = _this.publicacion.title;
                    // Meta
                    _this.meta.updateTag({ name: 'title', content: _this.publicacion.title });
                    _this.meta.updateTag({ name: 'description', content: _this.publicacion.resume });
                    _this.meta.updateTag({ name: 'author', content: 'Jorge Castillo Moreno' });
                    _this.meta.updateTag({ name: 'keywords', content: 'Jorge Castillo, Informatico, Programador Nicaragua, Tecnologia Nicaragua' });
                    _this.meta.updateTag({ property: 'og:title', content: _this.publicacion.title });
                    _this.meta.updateTag({ property: 'og:type', content: 'artículo' });
                    _this.meta.updateTag({ property: 'og:description', content: _this.publicacion.resume });
                    _this.meta.updateTag({ property: 'og:url', content: 'http://www.jorgecastillodeveloper.pro/sobremi' });
                    _this.meta.updateTag({ property: 'og:image', content: _this.url + 'get-image-post/' + _this.publicacion.image });
                    _this.meta.updateTag({ property: 'og:fb:admins', content: 'https://www.facebook.com/jorgeacastillomoreno/' });
                    // fin
                }
            }, function (error) {
                var errorMessage = error;
                var body = JSON.parse(error._body);
                _this.alertmessage = body.message;
                if (errorMessage != null) {
                    _this.alertmessage = body.message;
                    console.log(error);
                }
            });
        });
    };
    PostDetailsComponent.prototype.onDeletePost = function (id) {
        var _this = this;
        this._postService.deletePost(this.token, id).subscribe(function (response) {
            if (!response.post) {
                alert('Error el el server');
            }
            else {
                // this.getPost();
                _this._router.navigate(['/']);
            }
        }, function (error) {
            var errorMessage = error;
            var body = JSON.parse(error._body);
            _this.alertmessage = body.message;
            if (errorMessage != null) {
                _this.alertmessage = body.message;
                console.log(error);
            }
        });
    };
    PostDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'post-details',
            template: __webpack_require__("./src/app/views/post-details.html"),
            styles: [__webpack_require__("./src/app/css.component/post-details.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__service_post_service__["a" /* PostService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__service_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_facebook__["b" /* FacebookService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["Meta"]])
    ], PostDetailsComponent);
    return PostDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/post-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PosteditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_upload_service__ = __webpack_require__("./src/app/service/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_global__ = __webpack_require__("./src/app/service/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__("./src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_post_service__ = __webpack_require__("./src/app/service/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_post__ = __webpack_require__("./src/app/models/post.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_categoria_service__ = __webpack_require__("./src/app/service/categoria.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PosteditComponent = /** @class */ (function () {
    function PosteditComponent(_route, _router, _userService, _postService, _uploadService, _categoriaService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._postService = _postService;
        this._uploadService = _uploadService;
        this._categoriaService = _categoriaService;
        this.is_edit = true;
        this.titulo = 'Editar Post';
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]('', '', '', '', '', '', '', '');
        this.post = new __WEBPACK_IMPORTED_MODULE_7__models_post__["a" /* Post */]('', '', '', '', '', '', '', '', '', '');
        this.url = __WEBPACK_IMPORTED_MODULE_2__service_global__["a" /* GLOBAL */].url;
    }
    PosteditComponent.prototype.ngOnInit = function () {
        console.log('posteditComponent cargado');
        //Consegur el listado de artista
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        console.log(this.identity);
        console.log(this.token);
        this.getpostone();
        this.getCategoria();
    };
    PosteditComponent.prototype.getCategoria = function () {
        var _this = this;
        this._categoriaService.getCategoria(this.token).subscribe(function (response) {
            if (!response.categoria) {
                console.log('No Hay Categoria');
            }
            else {
                _this.categoria = response.categoria;
                //console.log(response.categoria);
            }
        }, function (error) {
            var errorMessage = error;
            var body = JSON.parse(error._body);
            _this.alertMessage = body.message;
            if (errorMessage != null) {
                _this.alertMessage = body.message;
                console.log(error);
            }
        });
    };
    PosteditComponent.prototype.getpostone = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var slug = params['slug'];
            _this._postService.getPostsOneEdit(_this.token, slug).subscribe(function (response) {
                if (response.post) {
                    console.log(response.publicacion);
                }
                else {
                    _this.post = response.publicacion;
                    if (_this.identity._id != _this.post.user && _this.identity.roles.roles != 'administrador') {
                        return _this._router.navigate(['/']);
                    }
                }
            }, function (error) {
                var errorMessage = error;
                var body = JSON.parse(error._body);
                _this.alertMessage = body.message;
                if (errorMessage != null) {
                    _this.alertMessage = body.message;
                    console.log(error);
                }
            });
        });
    };
    PosteditComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.post);
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._postService.updatePost(_this.token, _this.post._id, _this.post).subscribe(function (response) {
                if (!response.post) {
                    _this.alertMessage = ('Error en el servidor');
                }
                else {
                    alert('El Elemento se ha actualizado correctamente');
                    _this.post = response.post;
                    // this._router.navigate((['/postdetails']),response.post._id);
                    // Subir la imagen
                    if (!_this.filesToUpload) {
                        // this._router.navigate(['/portafolio',response.portafolio._id]);
                        //this._router.navigate(['/']);
                        _this._router.navigate(['/postdetails/' + response.post.slug]);
                    }
                    else {
                        _this._uploadService.makeFileRequest(_this.url + 'upload-image-post/' + _this.post._id, [], _this.filesToUpload, _this.token, 'image')
                            .then(function (result) {
                            _this.u = false;
                            // this._router.navigate(['/portafolio',1]);
                            _this._router.navigate(['/postdetails/' + response.post.slug]);
                        }, function (error) {
                            console.log(error);
                        });
                    }
                }
            }, function (error) {
                var errorMessage = error;
                var body = JSON.parse(error._body);
                _this.alertMessage = body.message;
                if (errorMessage != null) {
                    _this.alertMessage = body.message;
                    console.log(error);
                }
            });
        });
    };
    PosteditComponent.prototype.UploadVideo = function () {
        var _this = this;
        this.u = true;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._postService.updatePost(_this.token, _this.post._id, _this.post).subscribe(function (response) {
                if (!response.post) {
                    _this.alertMessage = ('Error en el servidor');
                }
                else {
                    alert('El Elemento se ha actualizado correctamente');
                    _this.post = response.post;
                    // this._router.navigate((['/postdetails']),response.post._id);
                    // Subir la imagen
                    if (!_this.filesToUpload) {
                        // this._router.navigate(['/portafolio',response.portafolio._id]);
                        //this._router.navigate(['/']);
                        _this._router.navigate(['/postdetails/' + response.post._id]);
                    }
                    else {
                        _this._uploadService.makeFileRequest(_this.url + 'upload-video-post/' + _this.post._id, [], _this.filesToUpload, _this.token, 'video')
                            .then(function (result) {
                            _this.u = false;
                            // this._router.navigate(['/portafolio',1]);
                            console.log(result);
                            //this.u=true;
                            _this._router.navigate(['/postdetails/' + response.post.slug]);
                        }, function (error) {
                            console.log(error);
                        });
                    }
                }
            }, function (error) {
                var errorMessage = error;
                var body = JSON.parse(error._body);
                _this.alertMessage = body.message;
                if (errorMessage != null) {
                    _this.alertMessage = body.message;
                    console.log(error);
                }
            });
        });
    };
    PosteditComponent.prototype.fileChangeEvent = function (fileInput, obj) {
        var uploadFile = fileInput.target.files[0];
        if (!(/\.(jpg|png|gif)$/i).test(uploadFile.name)) {
            alert('El archivo a adjuntar no es una imagen');
            this.filesToUpload = null;
        }
        else {
            this.filesToUpload = fileInput.target.files;
        }
    };
    PosteditComponent.prototype.fileChangeEvent2 = function (fileInput) {
        var uploadFile = fileInput.target.files[0];
        if (!(/\.(mp4)$/i).test(uploadFile.name)) {
            alert('El archivo a adjuntar no es un video');
            this.filesToUpload = null;
        }
        else {
            this.filesToUpload = fileInput.target.files;
        }
    };
    PosteditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'post-add',
            template: __webpack_require__("./src/app/views/post-add.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_0__service_upload_service__["a" /* UploadService */], __WEBPACK_IMPORTED_MODULE_6__service_post_service__["a" /* PostService */], __WEBPACK_IMPORTED_MODULE_8__service_categoria_service__["a" /* CategoriaService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_6__service_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_0__service_upload_service__["a" /* UploadService */],
            __WEBPACK_IMPORTED_MODULE_8__service_categoria_service__["a" /* CategoriaService */]])
    ], PosteditComponent);
    return PosteditComponent;
}());



/***/ }),

/***/ "./src/app/components/post-filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostFilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_global__ = __webpack_require__("./src/app/service/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__("./src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_facebook__ = __webpack_require__("./node_modules/ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_categoria_service__ = __webpack_require__("./src/app/service/categoria.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_post_service__ = __webpack_require__("./src/app/service/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var PostFilterComponent = /** @class */ (function () {
    function PostFilterComponent(_userService, _route, _router, fb, _categoriaService, _postService, meta, modalService) {
        this._userService = _userService;
        this._route = _route;
        this._router = _router;
        this.fb = fb;
        this._categoriaService = _categoriaService;
        this._postService = _postService;
        this.meta = meta;
        this.modalService = modalService;
        this.title = 'jorgecastillodevelop.pro';
        this.page = 2;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]('', '', '', '', '', '', '', '');
        this.url = __WEBPACK_IMPORTED_MODULE_1__service_global__["a" /* GLOBAL */].url;
        this.meta.updateTag({ name: 'description', content: 'Hola somos codigo nica y en este blog en donde publicamos tutoriales, articulos y muchas cosas mas sobre tecnologia y mas' });
        this.meta.updateTag({ name: 'author', content: 'Jorge Castillo Moreno' });
        this.meta.updateTag({ name: 'keywords', content: 'Jorge Castillo, Informatico, Programador Nicaragua, Tecnologia Nicaragua' });
        this.meta.updateTag({ property: 'og:title', content: 'Jorge Castillo JC Developer Nicaragua Articulos Tutoriales sobre tecnologias' });
        this.meta.updateTag({ property: 'og:type', content: 'artículo' });
        this.meta.updateTag({ property: 'og:description', content: 'JC Developer Nicaragua te ofrece los mejores servicios en el desarrollo de tu sitio web, aplicacion y lo que necesites en el desarrollo de tu negocio a la par de la tecnologia' });
        this.meta.updateTag({ property: 'og:url', content: 'http://www.jorgecastillodeveloper.pro' });
        this.meta.updateTag({ property: 'og:image', content: 'http://www.jorgecastillodeveloper.pro/assets/img/jorge.jpg' });
        this.meta.updateTag({ property: 'og:fb:admins', content: 'https://www.facebook.com/jorgeacastillomoreno/' });
    }
    PostFilterComponent.prototype.ngOnInit = function () {
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.SearchPost();
    };
    PostFilterComponent.prototype.SearchPost = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            _this.search = params['search'];
            if (_this.search == '') {
                _this._router.navigate(['/']);
            }
            // let page=+params['page'];
            // if (!page) {
            //     page=2  
            // } else {
            //     this.page=page+2;
            // }
            _this._postService.getsearchpost(_this.search).subscribe(function (response) {
                if (!response.searchPost) {
                    _this._router.navigate(['/']);
                }
                else {
                    _this.posts = response.searchPost;
                    // console.log(response.searchPost );
                }
            }, function (error) {
                var errorMessage = error;
                var body = JSON.parse(error._body);
                _this.alertMessage = body.message;
                if (errorMessage != null) {
                    _this.alertMessage = body.message;
                    console.log(error);
                }
            });
        });
    };
    PostFilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/views/postfilter.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_0__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_6__service_categoria_service__["a" /* CategoriaService */], __WEBPACK_IMPORTED_MODULE_7__service_post_service__["a" /* PostService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_facebook__["b" /* FacebookService */],
            __WEBPACK_IMPORTED_MODULE_6__service_categoria_service__["a" /* CategoriaService */],
            __WEBPACK_IMPORTED_MODULE_7__service_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["Meta"],
            __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], PostFilterComponent);
    return PostFilterComponent;
}());



/***/ }),

/***/ "./src/app/components/post-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_post_service__ = __webpack_require__("./src/app/service/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostListComponent = /** @class */ (function () {
    function PostListComponent(_route, _router, _userService, _postService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._postService = _postService;
        this.titulo = 'Publicaciones';
        this.next_page = 1;
        this.prev_page = 1;
    }
    PostListComponent.prototype.ngOnInit = function () {
        console.log('PostListComponent cargado');
        //Consegur el listado de artista
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        console.log(this.identity);
        console.log(this.token);
        //this.getPost();
    };
    PostListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'post-list',
            template: __webpack_require__("./src/app/views/post-list.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_0__service_post_service__["a" /* PostService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_0__service_post_service__["a" /* PostService */]])
    ], PostListComponent);
    return PostListComponent;
}());



/***/ }),

/***/ "./src/app/components/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_global__ = __webpack_require__("./src/app/service/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__("./src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_facebook__ = __webpack_require__("./node_modules/ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_userService, _route, _router, fb, meta) {
        this._userService = _userService;
        this._route = _route;
        this._router = _router;
        this.fb = fb;
        this.meta = meta;
        this.title = 'jorgecastillodevelop.pro';
        this.userR = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]('', '', '', '', '', '5a32b2478f27c41d78a7946f', '', '');
        this.url = __WEBPACK_IMPORTED_MODULE_1__service_global__["a" /* GLOBAL */].url;
        this.meta.updateTag({ name: 'description', content: 'Hola soy jorge castillo y este es mi blog en donde publico tutoriales, articulos y muchas cosas mas sobre tecnologia y mas' });
        this.meta.updateTag({ name: 'author', content: 'Jorge Castillo Moreno' });
        this.meta.updateTag({ name: 'keywords', content: 'Jorge Castillo, Informatico, Programador Nicaragua, Tecnologia Nicaragua' });
        this.meta.updateTag({ property: 'og:title', content: 'Jorge Castillo JC Developer Nicaragua Articulos Tutoriales sobre tecnologias' });
        this.meta.updateTag({ property: 'og:type', content: 'artículo' });
        this.meta.updateTag({ property: 'og:description', content: 'JC Developer Nicaragua te ofrece los mejores servicios en el desarrollo de tu sitio web, aplicacion y lo que necesites en el desarrollo de tu negocio a la par de la tecnologia' });
        this.meta.updateTag({ property: 'og:url', content: 'http://www.jorgecastillodeveloper.pro' });
        this.meta.updateTag({ property: 'og:image', content: 'http://www.jorgecastillodeveloper.pro/assets/img/jorge.jpg' });
        this.meta.updateTag({ property: 'og:fb:admins', content: 'https://www.facebook.com/jorgeacastillomoreno/' });
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this._userService.register(this.userR).subscribe(function (response) {
            var identity = response.user;
            _this.identity = identity;
            //console.log(this.identity);
            if (response.message) {
                return alert(response.message);
            }
            if (!_this.identity._id) {
                alert('El Usuario no esta correctamente logeado');
                console.log(_this.identity);
            }
            else {
                _this.userR = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]('', '', '', '', '', '', '', '');
                alert('Registro Satisfactorio...Te hemos enviado un correo a ' + response.user.email);
            }
        }, function (error) {
            var errorMessage = error;
            var body = JSON.stringify(error._body);
            if (errorMessage != null) {
                _this.errorMessage = body;
                console.log(error);
                alert(_this.errorMessage);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'home',
            template: __webpack_require__("./src/app/views/register.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_0__service_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_facebook__["b" /* FacebookService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["Meta"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_global__ = __webpack_require__("./src/app/service/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_post_service__ = __webpack_require__("./src/app/service/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchComponent = /** @class */ (function () {
    function SearchComponent(_route, _router, _userService, _postService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._postService = _postService;
        this.titulo = 'jorgecastillodeveloper';
        this.next_page = 1;
        this.prev_page = 1;
        this.page = 2;
        this.url = __WEBPACK_IMPORTED_MODULE_0__service_global__["a" /* GLOBAL */].url;
        this.u = true;
    }
    SearchComponent.prototype.ngOnInit = function () {
        //console.log('HomeComponent cargado');
        //Consegur el listado de artista
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        //console.log(this.identity);
        //console.log(this.token);
        this.getSearchPost();
        //this.getPostEnd();
    };
    SearchComponent.prototype.getSearchPost = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var search = params['search'];
            var page = +params['page'];
            if (!page) {
                page = 2;
            }
            else {
                _this.page = page + 2;
            }
            _this._postService.getsearchpost(search).subscribe(function (response) {
                if (!response.posts) {
                    _this._router.navigate(['/']);
                }
                else if (response.total_items == 0) {
                    alert('No se encuentra el Post');
                    _this._router.navigate(['/']);
                }
                else {
                    _this.posts = response.posts;
                    _this.u = false;
                }
            }, function (error) {
                var errorMessage = error;
                var body = JSON.parse(error._body);
                _this.alertmessage = body.message;
                if (errorMessage != null) {
                    _this.alertmessage = body.message;
                    console.log(error);
                }
            });
        });
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'home',
            template: __webpack_require__("./src/app/views/categoria.html"),
            styles: [__webpack_require__("./src/app/css.component/home.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__service_post_service__["a" /* PostService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__service_post_service__["a" /* PostService */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/service.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServiceComponent = /** @class */ (function () {
    function ServiceComponent() {
    }
    ServiceComponent.prototype.ngOnInit = function () {
    };
    ServiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-service',
            template: __webpack_require__("./src/app/views/service.component.html"),
            styles: [__webpack_require__("./src/app/css.component/service.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServiceComponent);
    return ServiceComponent;
}());



/***/ }),

/***/ "./src/app/components/sobremi.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SobremiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_perfil_service__ = __webpack_require__("./src/app/service/perfil.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_global__ = __webpack_require__("./src/app/service/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__("./src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_educacion_service__ = __webpack_require__("./src/app/service/educacion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_facebook__ = __webpack_require__("./node_modules/ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SobremiComponent = /** @class */ (function () {
    function SobremiComponent(_route, _router, _userService, _perfilService, _educacionService, fb, meta) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._perfilService = _perfilService;
        this._educacionService = _educacionService;
        this.fb = fb;
        this.meta = meta;
        this.titulo = 'Sobre Mi';
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]('', '', '', '', '', '', '', '');
        this.url = __WEBPACK_IMPORTED_MODULE_2__service_global__["a" /* GLOBAL */].url;
        this.next_page = 1;
        this.prev_page = 1;
        // Meta
        this.meta.updateTag({ name: 'description', content: 'Hola soy jorge castillo y este es mi blog en donde publico tutoriales, articulos y muchas cosas mas sobre tecnologia y mas' });
        this.meta.updateTag({ name: 'author', content: 'Jorge Castillo Moreno' });
        this.meta.updateTag({ name: 'keywords', content: 'Jorge Castillo, Informatico, Programador Nicaragua, Tecnologia Nicaragua' });
        this.meta.updateTag({ property: 'og:title', content: 'Jorge Castillo JC Developer Nicaragua Articulos Tutoriales sobre tecnologias' });
        this.meta.updateTag({ property: 'og:type', content: 'artículo' });
        this.meta.updateTag({ property: 'og:description', content: 'JC Developer Nicaragua te ofrece los mejores servicios en el desarrollo de tu sitio web, aplicacion y lo que necesites en el desarrollo de tu negocio a la par de la tecnologia' });
        this.meta.updateTag({ property: 'og:url', content: 'http://www.jorgecastillodeveloper.pro/sobremi' });
        this.meta.updateTag({ property: 'og:image', content: 'http://www.jorgecastillodeveloper.pro/assets/img/jorge.jpg' });
        this.meta.updateTag({ property: 'og:fb:admins', content: 'https://www.facebook.com/jorgeacastillomoreno/' });
        // fin
        var params = {
            appId: '1399875313450062',
            xfbml: true,
            version: 'v2.8'
        };
        fb.init(params);
    }
    SobremiComponent.prototype.ngOnInit = function () {
        console.log('AdminComponent cargado');
        //Consegur el listado de artista
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        console.log(this.identity);
        console.log(this.token);
        this.getperfil();
        this.getEducacion();
    };
    SobremiComponent.prototype.getperfil = function () {
        // this._route.params.forEach((params:Params)=>{
        //     let page=+params['page'];
        //     if (!page) {
        //         page=1;
        //     } else {
        //         this.next_page=page+1;
        // 		this.prev_page=page-1;
        var _this = this;
        // 		if (this.prev_page==0) {
        // 			this.prev_page=1;
        //         }
        //     }
        this._perfilService.getPerfil(this.token).subscribe(function (response) {
            if (!response.perfils) {
                alert('No hay experiencias agregadas');
            }
            else {
                _this.perfils = response.perfils;
            }
        }, function (error) {
            var errorMessage = error;
            var body = JSON.parse(error._body);
            _this.alertMessage = body.message;
            if (errorMessage != null) {
                _this.alertMessage = body.message;
                console.log(error);
            }
        });
    };
    SobremiComponent.prototype.getEducacion = function () {
        var _this = this;
        this._educacionService.getEducacion(this.token).subscribe(function (response) {
            if (!response.educacions) {
                alert('No hay educacion agregadas');
            }
            else {
                _this.educacions = response.educacions;
            }
        }, function (error) {
            var errorMessage = error;
            var body = JSON.parse(error._body);
            _this.alertMessage = body.message;
            if (errorMessage != null) {
                _this.alertMessage = body.message;
                console.log(error);
            }
        });
    };
    SobremiComponent.prototype.onDeletePerfil = function (id) {
        var _this = this;
        this._perfilService.deleteOerfil(this.token, id).subscribe(function (response) {
            if (!response.perfil) {
                alert('Error el el server');
            }
            else {
                _this.getperfil();
            }
        }, function (error) {
            var errorMessage = error;
            var body = JSON.parse(error._body);
            _this.alertMessage = body.message;
            if (errorMessage != null) {
                _this.alertMessage = body.message;
                console.log(error);
            }
        });
    };
    SobremiComponent.prototype.onDeleteEducacion = function (id) {
        var _this = this;
        this._educacionService.deleteEducacion(this.token, id).subscribe(function (response) {
            if (!response.educacion) {
                alert('Error el el server');
            }
            else {
                _this.getEducacion();
            }
        }, function (error) {
            var errorMessage = error;
            var body = JSON.parse(error._body);
            _this.alertMessage = body.message;
            if (errorMessage != null) {
                _this.alertMessage = body.message;
                console.log(error);
            }
        });
    };
    SobremiComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'sobremi',
            template: __webpack_require__("./src/app/views/sobremi.html"),
            styles: [__webpack_require__("./src/app/css.component/sobremi.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_0__service_perfil_service__["a" /* PerfilService */], __WEBPACK_IMPORTED_MODULE_6__service_educacion_service__["a" /* EducacionService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_0__service_perfil_service__["a" /* PerfilService */],
            __WEBPACK_IMPORTED_MODULE_6__service_educacion_service__["a" /* EducacionService */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_facebook__["b" /* FacebookService */],
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["Meta"]])
    ], SobremiComponent);
    return SobremiComponent;
}());



/***/ }),

/***/ "./src/app/components/user-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_user__ = __webpack_require__("./src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_post_service__ = __webpack_require__("./src/app/service/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserEditComponent = /** @class */ (function () {
    function UserEditComponent(_route, _router, _userService, _postService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._postService = _postService;
        this.titulo = 'Publicaciones';
        this.next_page = 1;
        this.prev_page = 1;
        this.user = new __WEBPACK_IMPORTED_MODULE_0__models_user__["a" /* User */]('', '', '', '', '', '', '', '');
    }
    UserEditComponent.prototype.ngOnInit = function () {
        console.log('PostListComponent cargado');
        //Consegur el listado de artista
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        console.log(this.identity);
        console.log(this.token);
        this.getUser();
    };
    UserEditComponent.prototype.getUser = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._userService.getUserOne(_this.token, id).subscribe(function (response) {
                if (!response.userone) {
                    alert('Error...');
                }
                else {
                    if (_this.identity.roles.roles != 'administrador') {
                        alert('Usted no tiene privilegios de administrador');
                        _this._router.navigate(['/']);
                    }
                    _this.user = response.userone;
                    console.log(response);
                }
            }, function (error) {
                var errorMessage = error;
                var body = JSON.parse(error._body);
                _this.alertmessage = body.message;
                if (errorMessage != null) {
                    _this.alertmessage = body.message;
                    console.log(error);
                }
            });
        });
    };
    UserEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._userService.updateUser(_this.token, _this.user, id).subscribe(function (response) {
                if (!response.user) {
                    _this.alertmessage = ('Error en el servidor');
                }
                else {
                    alert('El Elemento se ha actualizado correctamente');
                    _this.user = response.user;
                    _this._router.navigate(['/userslist']);
                }
            }, function (error) {
                var errorMessage = error;
                var body = JSON.parse(error._body);
                _this.alertmessage = body.message;
                if (errorMessage != null) {
                    _this.alertmessage = body.message;
                    console.log(error);
                }
            });
        });
    };
    UserEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'home',
            template: __webpack_require__("./src/app/views/user-edit.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__service_post_service__["a" /* PostService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__service_post_service__["a" /* PostService */]])
    ], UserEditComponent);
    return UserEditComponent;
}());



/***/ }),

/***/ "./src/app/components/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_post_service__ = __webpack_require__("./src/app/service/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserListComponent = /** @class */ (function () {
    function UserListComponent(_route, _router, _userService, _postService) {
        this._route = _route;
        this._router = _router;
        this._userService = _userService;
        this._postService = _postService;
        this.titulo = 'Publicaciones';
        this.next_page = 1;
        this.prev_page = 1;
    }
    UserListComponent.prototype.ngOnInit = function () {
        console.log('PostListComponent cargado');
        //Consegur el listado de artista
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        console.log(this.identity);
        console.log(this.token);
        this.getUsers();
    };
    UserListComponent.prototype.getUsers = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var page = +params['page'];
            if (!page) {
                page = 1;
            }
            else {
                _this.next_page = page + 1;
                _this.prev_page = page - 1;
                if (_this.prev_page == 0) {
                    _this.prev_page = 1;
                }
            }
            _this._userService.getUsers(_this.token, page).subscribe(function (response) {
                if (!response.users) {
                    _this._router.navigate(['/']);
                }
                else {
                    if (_this.identity.roles.roles != 'administrador') {
                        alert('Usted no tiene privilegios de administrador');
                        _this._router.navigate(['/']);
                    }
                    _this.users = response.users;
                    console.log(response.users);
                }
            }, function (error) {
                var errorMessage = error;
                var body = JSON.parse(error._body);
                _this.alertmessage = body.message;
                if (errorMessage != null) {
                    _this.alertmessage = body.message;
                    console.log(error);
                }
            });
        });
    };
    UserListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'home',
            template: __webpack_require__("./src/app/views/user-list.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_0__service_post_service__["a" /* PostService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_0__service_post_service__["a" /* PostService */]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/cover/cover.component.css":
/***/ (function(module, exports) {

module.exports = "/*\r\n * Globals\r\n */\r\n\r\n/* Links */\r\n\r\na,\r\na:focus,\r\na:hover {\r\n  color: #fff;\r\n}\r\n\r\n/* Custom default button */\r\n\r\n.btn-secondary,\r\n.btn-secondary:hover,\r\n.btn-secondary:focus {\r\n  color: #333;\r\n  text-shadow: none; /* Prevent inheritance from `body` */\r\n  background-color: #fff;\r\n  border: .05rem solid #fff;\r\n}\r\n\r\n/*\r\n * Base structure\r\n */\r\n\r\nhtml,\r\nbody {\r\n  height: 100%;\r\n  color: #fff;\r\n}\r\n\r\nbody {\r\n  display: -ms-flexbox;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -ms-flex-pack: center;\r\n  -webkit-box-pack: center;\r\n  justify-content: center;\r\n  color: #fff;\r\n  text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);\r\n  -webkit-box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);\r\n          box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);\r\n}\r\n\r\nmain{\r\n  margin-top: 15px;\r\n}\r\n\r\n.body{\r\nbackground: rgba(27, 27, 27, .3)\r\n}\r\n\r\n.cover-container {\r\n  max-width: 42em;\r\n}\r\n\r\n/*\r\n * Header\r\n */\r\n\r\n.masthead {\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n.masthead-brand {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.nav-masthead .nav-link {\r\n  padding: .25rem 0;\r\n  font-weight: 700;\r\n  color: rgba(255, 255, 255, .5);\r\n  background-color: transparent;\r\n  border-bottom: .25rem solid transparent;\r\n}\r\n\r\n.nav-masthead .nav-link:hover,\r\n.nav-masthead .nav-link:focus {\r\n  border-bottom-color: rgba(255, 255, 255, .25);\r\n}\r\n\r\n.nav-masthead .nav-link + .nav-link {\r\n  margin-left: 1rem;\r\n}\r\n\r\n.nav-masthead .active {\r\n  color: #fff;\r\n  border-bottom-color: #fff;\r\n}\r\n\r\n@media (min-width: 48em) {\r\n  .masthead-brand {\r\n    float: left;\r\n  }\r\n  .nav-masthead {\r\n    float: right;\r\n  }\r\n}\r\n\r\n/*\r\n * Cover\r\n */\r\n\r\n.cover {\r\n  padding: 0 1.5rem;\r\n}\r\n\r\n.cover .btn-lg {\r\n  padding: .75rem 1.25rem;\r\n  font-weight: 700;\r\n}\r\n\r\n/*\r\n * Footer\r\n */\r\n\r\n.mastfoot {\r\n  color: rgba(255, 255, 255, .5);\r\n}\r\n"

/***/ }),

/***/ "./src/app/cover/cover.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"body\">\n    <div class=\"cover-container d-flex h-100 p-3 mx-auto flex-column text-center\">\n      <header class=\"masthead mb-auto\">\n        <div class=\"inner\">\n          <h3 class=\"masthead-brand\">JC Developer</h3>\n          <nav class=\"nav nav-masthead justify-content-center\">\n            <a class=\"nav-link active\" [routerLink]=\"['/home/2']\">Blog</a>\n            <a class=\"nav-link\" [routerLink]=\"['/sobremi']\">Nosotros</a>\n            <a class=\"nav-link\" [routerLink]=\"['/contacto']\">Contactanos</a>\n          </nav>\n        </div>\n      </header>\n\n\n\n      <main role=\"main\" class=\"inner cover\">\n        <h1 class=\"cover-heading\">Bienvenido a JC DEV.</h1>\n        <p class=\"lead\">Hola soy Jorge Castillo gracias por visitar nuestro sitio web. Somos un equipo que nos dedicamos al diseño y desarrollo\n          de software. Contamos con lo mejor en tecnologia para cubrir con las necesidades tecnologicas de tu empresa o negocio.\n        </p>\n        <p class=\"lead\">\n          <a [routerLink]=\"['/sobremi']\" class=\"btn btn-lg btn-secondary\">Leer Más</a>\n        </p>\n      </main>\n\n      <footer class=\"mastfoot mt-auto\">\n        <div class=\"inner\">\n        </div>\n      </footer>\n    </div>\n  </div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/cover/cover.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CoverComponent = /** @class */ (function () {
    function CoverComponent() {
    }
    CoverComponent.prototype.ngOnInit = function () {
    };
    CoverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cover',
            template: __webpack_require__("./src/app/cover/cover.component.html"),
            styles: [__webpack_require__("./src/app/cover/cover.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CoverComponent);
    return CoverComponent;
}());



/***/ }),

/***/ "./src/app/css.component/admin.component.css":
/***/ (function(module, exports) {

module.exports = "body {\r\n  margin: 0;\r\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  line-height: 1.5;\r\n  color: #212529;\r\n  text-align: left;\r\n  background-color: #fff;\r\n}\r\ninput ,label{\r\n  font-size: 2em;\r\n  color: #ffffff;\r\n  \r\n}\r\n.btn{\r\n  margin-bottom: 80px\r\n}\r\n.container{\r\n  padding-top: 5%;\r\n  background-color: #212529;\r\n}\r\n.form-control {\r\n  display: block;\r\n  width: 100%;\r\n  padding: 0.375rem 0.75rem;\r\n  line-height: 1.5;\r\n  color: #495057;\r\n  background-color: #fff;\r\n  background-image: none;\r\n  background-clip: padding-box;\r\n  border: 1px solid #ced4da;\r\n  border-radius: 0.25rem;\r\n  -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\r\n  transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\r\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\r\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\r\n}\r\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\r\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\r\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\r\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\r\n.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,\r\n.col-xl-auto {\r\n  position: relative;\r\n  width: 100%;\r\n  min-height: 1px;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n}\r\n.col {\r\n  -ms-flex-preferred-size: 0;\r\n      flex-basis: 0;\r\n  -ms-flex-positive: 1;\r\n      -webkit-box-flex: 1;\r\n          flex-grow: 1;\r\n  max-width: 100%;\r\n}\r\n.col-auto {\r\n  -ms-flex: 0 0 auto;\r\n      -webkit-box-flex: 0;\r\n          flex: 0 0 auto;\r\n  width: auto;\r\n  max-width: none;\r\n}\r\n.col-1 {\r\n  -ms-flex: 0 0 8.333333%;\r\n      -webkit-box-flex: 0;\r\n          flex: 0 0 8.333333%;\r\n  max-width: 8.333333%;\r\n}\r\n.col-2 {\r\n  -ms-flex: 0 0 16.666667%;\r\n      -webkit-box-flex: 0;\r\n          flex: 0 0 16.666667%;\r\n  max-width: 16.666667%;\r\n}\r\n.col-3 {\r\n  -ms-flex: 0 0 25%;\r\n      -webkit-box-flex: 0;\r\n          flex: 0 0 25%;\r\n  max-width: 25%;\r\n}\r\n.col-4 {\r\n  -ms-flex: 0 0 33.333333%;\r\n      -webkit-box-flex: 0;\r\n          flex: 0 0 33.333333%;\r\n  max-width: 33.333333%;\r\n}\r\n.col-5 {\r\n  -ms-flex: 0 0 41.666667%;\r\n      -webkit-box-flex: 0;\r\n          flex: 0 0 41.666667%;\r\n  max-width: 41.666667%;\r\n}\r\n.col-6 {\r\n  -ms-flex: 0 0 50%;\r\n      -webkit-box-flex: 0;\r\n          flex: 0 0 50%;\r\n  max-width: 50%;\r\n}\r\n.col-7 {\r\n  -ms-flex: 0 0 58.333333%;\r\n      -webkit-box-flex: 0;\r\n          flex: 0 0 58.333333%;\r\n  max-width: 58.333333%;\r\n}\r\n.col-8 {\r\n  -ms-flex: 0 0 66.666667%;\r\n      -webkit-box-flex: 0;\r\n          flex: 0 0 66.666667%;\r\n  max-width: 66.666667%;\r\n}\r\n.col-9 {\r\n  -ms-flex: 0 0 75%;\r\n      -webkit-box-flex: 0;\r\n          flex: 0 0 75%;\r\n  max-width: 75%;\r\n}\r\n.col-10 {\r\n  -ms-flex: 0 0 83.333333%;\r\n      -webkit-box-flex: 0;\r\n          flex: 0 0 83.333333%;\r\n  max-width: 83.333333%;\r\n}\r\n.col-11 {\r\n  -ms-flex: 0 0 91.666667%;\r\n      -webkit-box-flex: 0;\r\n          flex: 0 0 91.666667%;\r\n  max-width: 91.666667%;\r\n}\r\n.col-12 {\r\n  -ms-flex: 0 0 100%;\r\n      -webkit-box-flex: 0;\r\n          flex: 0 0 100%;\r\n  max-width: 100%;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/css.component/contacto.component.css":
/***/ (function(module, exports) {

module.exports = ".body{\r\n  background: rgba(115, 157, 211, 0.3);\r\n  color: #000;\r\n  margin: 10px;\r\n  border-radius: 18px;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/css.component/home.component.css":
/***/ (function(module, exports) {

module.exports = "/* title */\r\n.card-content{\r\n  background-color: #fff;\r\n}\r\n.card-columns {\r\n    display: inline;\r\n\r\n}\r\n.title {\r\n    font-family: \"minecraft\";\r\n    padding-top: 2em;\r\n}\r\n.pull-right {\r\n    margin-bottom: 80px;\r\n}\r\n.menu-post {\r\n    list-style: none;\r\n    display: -webkit-inline-box;\r\n    float: right;\r\n}\r\n.menu-post li {\r\n    margin-top: 0;\r\n    margin-left: 0.5em;\r\n}\r\n.contenido {\r\n    margin-top: 2em;\r\n}\r\n.description {\r\n    display: block;\r\n    -webkit-margin-before: 1em;\r\n    -webkit-margin-after: 1em;\r\n    -webkit-margin-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n    padding-bottom: 10px;\r\n    padding-top: 10px;\r\n    line-height: 26px;\r\n    width: 700px;\r\n    height: 20px;\r\n    padding: 20px;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    float: right;\r\n}\r\n/* img */\r\n.img {\r\n    height: 100px;\r\n    width: 200px;\r\n    float: left;\r\n    -webkit-box-shadow: 0px 0px 48px 1px rgba(0, 0, 0, 0.75);\r\n    box-shadow: 0px 0px 48px 1px rgba(0, 0, 0, 0.75);\r\n}\r\n.contenido {\r\n    float: right;\r\n    text-align: right;\r\n}\r\n.contenido h3 {\r\n    font-style: oblique;\r\n    font-size: 3em;\r\n    text-decoration: none;\r\n    color: #000000;\r\n}\r\n.contenido a {\r\n    text-decoration: none;\r\n}\r\n.contenido a:hover {\r\n    text-decoration: none;\r\n}\r\n/*Estilo del gift de carga*/\r\n.u {\r\n    text-align: center;\r\n}\r\n@media (max-width: 576px) {\r\n    .img {\r\n        width: 100%;\r\n        display: none;\r\n    }\r\n}\r\n@media (max-width: 768px) {\r\n    .img {\r\n        width: 100%;\r\n    }\r\n}\r\n@media (max-width: 992px) {\r\n    .img {\r\n        width: 100%;\r\n    }\r\n    .description {\r\n        display: block;\r\n        -webkit-margin-before: 1em;\r\n        -webkit-margin-after: 1em;\r\n        -webkit-margin-start: 0px;\r\n        -webkit-margin-end: 0px;\r\n        padding-bottom: 10px;\r\n        padding-top: 10px;\r\n        line-height: 26px;\r\n        width: 300px;\r\n        height: 20px;\r\n        padding: 20px;\r\n        text-overflow: ellipsis;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        float: right;\r\n    }\r\n    .contenido h3 {\r\n        font-style: oblique;\r\n        font-size: 2em;\r\n        text-decoration: none;\r\n        color: #000000;\r\n    }\r\n}\r\n@media (min-width: 1200px) {}\r\n/* Loader */\r\n#loader {\r\n    bottom: 0;\r\n    height: 175px;\r\n    left: 0;\r\n    margin: auto;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    width: 175px;\r\n}\r\n#loader {\r\n    bottom: 0;\r\n    height: 175px;\r\n    left: 0;\r\n    margin: auto;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    width: 175px;\r\n}\r\n#loader .dot {\r\n    bottom: 0;\r\n    height: 100%;\r\n    left: 0;\r\n    margin: auto;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    width: 87.5px;\r\n}\r\n#loader .dot::before {\r\n    border-radius: 100%;\r\n    content: \"\";\r\n    height: 87.5px;\r\n    left: 0;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0);\r\n    width: 87.5px;\r\n}\r\n#loader .dot:nth-child(7n+1) {\r\n    -webkit-transform: rotate(45deg);\r\n            transform: rotate(45deg);\r\n}\r\n#loader .dot:nth-child(7n+1)::before {\r\n    -webkit-animation: 0.8s linear 0.1s normal none infinite running load;\r\n            animation: 0.8s linear 0.1s normal none infinite running load;\r\n    background: #00ff80 none repeat scroll 0 0;\r\n}\r\n#loader .dot:nth-child(7n+2) {\r\n    -webkit-transform: rotate(90deg);\r\n            transform: rotate(90deg);\r\n}\r\n#loader .dot:nth-child(7n+2)::before {\r\n    -webkit-animation: 0.8s linear 0.2s normal none infinite running load;\r\n            animation: 0.8s linear 0.2s normal none infinite running load;\r\n    background: #00ffea none repeat scroll 0 0;\r\n}\r\n#loader .dot:nth-child(7n+3) {\r\n    -webkit-transform: rotate(135deg);\r\n            transform: rotate(135deg);\r\n}\r\n#loader .dot:nth-child(7n+3)::before {\r\n    -webkit-animation: 0.8s linear 0.3s normal none infinite running load;\r\n            animation: 0.8s linear 0.3s normal none infinite running load;\r\n    background: #00aaff none repeat scroll 0 0;\r\n}\r\n#loader .dot:nth-child(7n+4) {\r\n    -webkit-transform: rotate(180deg);\r\n            transform: rotate(180deg);\r\n}\r\n#loader .dot:nth-child(7n+4)::before {\r\n    -webkit-animation: 0.8s linear 0.4s normal none infinite running load;\r\n            animation: 0.8s linear 0.4s normal none infinite running load;\r\n    background: #0040ff none repeat scroll 0 0;\r\n}\r\n#loader .dot:nth-child(7n+5) {\r\n    -webkit-transform: rotate(225deg);\r\n            transform: rotate(225deg);\r\n}\r\n#loader .dot:nth-child(7n+5)::before {\r\n    -webkit-animation: 0.8s linear 0.5s normal none infinite running load;\r\n            animation: 0.8s linear 0.5s normal none infinite running load;\r\n    background: #2a00ff none repeat scroll 0 0;\r\n}\r\n#loader .dot:nth-child(7n+6) {\r\n    -webkit-transform: rotate(270deg);\r\n            transform: rotate(270deg);\r\n}\r\n#loader .dot:nth-child(7n+6)::before {\r\n    -webkit-animation: 0.8s linear 0.6s normal none infinite running load;\r\n            animation: 0.8s linear 0.6s normal none infinite running load;\r\n    background: #9500ff none repeat scroll 0 0;\r\n}\r\n#loader .dot:nth-child(7n+7) {\r\n    -webkit-transform: rotate(315deg);\r\n            transform: rotate(315deg);\r\n}\r\n#loader .dot:nth-child(7n+7)::before {\r\n    -webkit-animation: 0.8s linear 0.7s normal none infinite running load;\r\n            animation: 0.8s linear 0.7s normal none infinite running load;\r\n    background: magenta none repeat scroll 0 0;\r\n}\r\n#loader .dot:nth-child(7n+8) {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n}\r\n#loader .dot:nth-child(7n+8)::before {\r\n    -webkit-animation: 0.8s linear 0.8s normal none infinite running load;\r\n            animation: 0.8s linear 0.8s normal none infinite running load;\r\n    background: #ff0095 none repeat scroll 0 0;\r\n}\r\n#loader .lading {\r\n    background-image: url('1amw.5be365b4576b73da8de3.gif');\r\n    background-position: 50% 50%;\r\n    background-repeat: no-repeat;\r\n    bottom: -40px;\r\n    height: 20px;\r\n    left: 0;\r\n    position: absolute;\r\n    right: 0;\r\n    width: 180px;\r\n}\r\n@-webkit-keyframes load {\r\n    100% {\r\n        opacity: 0;\r\n        -webkit-transform: scale(1);\r\n                transform: scale(1);\r\n    }\r\n}\r\n@keyframes load {\r\n    100% {\r\n        opacity: 0;\r\n        -webkit-transform: scale(1);\r\n                transform: scale(1);\r\n    }\r\n}\r\n@keyframes load {\r\n    100% {\r\n        opacity: 0;\r\n        -webkit-transform: scale(1);\r\n                transform: scale(1);\r\n    }\r\n}\r\n/* normalize */\r\n/*!\r\n * Materialize v1.0.0 (http://materializecss.com)\r\n * Copyright 2014-2017 Materialize\r\n * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)\r\n */\r\n.materialize-red {\r\n    background-color: #e51c23 !important;\r\n}\r\n.materialize-red-text {\r\n    color: #e51c23 !important;\r\n}\r\n.materialize-red.lighten-5 {\r\n    background-color: #fdeaeb !important;\r\n}\r\n.materialize-red-text.text-lighten-5 {\r\n    color: #fdeaeb !important;\r\n}\r\n.materialize-red.lighten-4 {\r\n    background-color: #f8c1c3 !important;\r\n}\r\n.materialize-red-text.text-lighten-4 {\r\n    color: #f8c1c3 !important;\r\n}\r\n.materialize-red.lighten-3 {\r\n    background-color: #f3989b !important;\r\n}\r\n.materialize-red-text.text-lighten-3 {\r\n    color: #f3989b !important;\r\n}\r\n.materialize-red.lighten-2 {\r\n    background-color: #ee6e73 !important;\r\n}\r\n.materialize-red-text.text-lighten-2 {\r\n    color: #ee6e73 !important;\r\n}\r\n.materialize-red.lighten-1 {\r\n    background-color: #ea454b !important;\r\n}\r\n.materialize-red-text.text-lighten-1 {\r\n    color: #ea454b !important;\r\n}\r\n.materialize-red.darken-1 {\r\n    background-color: #d0181e !important;\r\n}\r\n.materialize-red-text.text-darken-1 {\r\n    color: #d0181e !important;\r\n}\r\n.materialize-red.darken-2 {\r\n    background-color: #b9151b !important;\r\n}\r\n.materialize-red-text.text-darken-2 {\r\n    color: #b9151b !important;\r\n}\r\n.materialize-red.darken-3 {\r\n    background-color: #a21318 !important;\r\n}\r\n.materialize-red-text.text-darken-3 {\r\n    color: #a21318 !important;\r\n}\r\n.materialize-red.darken-4 {\r\n    background-color: #8b1014 !important;\r\n}\r\n.materialize-red-text.text-darken-4 {\r\n    color: #8b1014 !important;\r\n}\r\n.red {\r\n    background-color: #F44336 !important;\r\n}\r\n.red-text {\r\n    color: #F44336 !important;\r\n}\r\n.red.lighten-5 {\r\n    background-color: #FFEBEE !important;\r\n}\r\n.red-text.text-lighten-5 {\r\n    color: #FFEBEE !important;\r\n}\r\n.red.lighten-4 {\r\n    background-color: #FFCDD2 !important;\r\n}\r\n.red-text.text-lighten-4 {\r\n    color: #FFCDD2 !important;\r\n}\r\n.red.lighten-3 {\r\n    background-color: #EF9A9A !important;\r\n}\r\n.red-text.text-lighten-3 {\r\n    color: #EF9A9A !important;\r\n}\r\n.red.lighten-2 {\r\n    background-color: #E57373 !important;\r\n}\r\n.red-text.text-lighten-2 {\r\n    color: #E57373 !important;\r\n}\r\n.red.lighten-1 {\r\n    background-color: #EF5350 !important;\r\n}\r\n.red-text.text-lighten-1 {\r\n    color: #EF5350 !important;\r\n}\r\n.red.darken-1 {\r\n    background-color: #E53935 !important;\r\n}\r\n.red-text.text-darken-1 {\r\n    color: #E53935 !important;\r\n}\r\n.red.darken-2 {\r\n    background-color: #D32F2F !important;\r\n}\r\n.red-text.text-darken-2 {\r\n    color: #D32F2F !important;\r\n}\r\n.red.darken-3 {\r\n    background-color: #C62828 !important;\r\n}\r\n.red-text.text-darken-3 {\r\n    color: #C62828 !important;\r\n}\r\n.red.darken-4 {\r\n    background-color: #B71C1C !important;\r\n}\r\n.red-text.text-darken-4 {\r\n    color: #B71C1C !important;\r\n}\r\n.red.accent-1 {\r\n    background-color: #FF8A80 !important;\r\n}\r\n.red-text.text-accent-1 {\r\n    color: #FF8A80 !important;\r\n}\r\n.red.accent-2 {\r\n    background-color: #FF5252 !important;\r\n}\r\n.red-text.text-accent-2 {\r\n    color: #FF5252 !important;\r\n}\r\n.red.accent-3 {\r\n    background-color: #FF1744 !important;\r\n}\r\n.red-text.text-accent-3 {\r\n    color: #FF1744 !important;\r\n}\r\n.red.accent-4 {\r\n    background-color: #D50000 !important;\r\n}\r\n.red-text.text-accent-4 {\r\n    color: #D50000 !important;\r\n}\r\n.pink {\r\n    background-color: #e91e63 !important;\r\n}\r\n.pink-text {\r\n    color: #e91e63 !important;\r\n}\r\n.pink.lighten-5 {\r\n    background-color: #fce4ec !important;\r\n}\r\n.pink-text.text-lighten-5 {\r\n    color: #fce4ec !important;\r\n}\r\n.pink.lighten-4 {\r\n    background-color: #f8bbd0 !important;\r\n}\r\n.pink-text.text-lighten-4 {\r\n    color: #f8bbd0 !important;\r\n}\r\n.pink.lighten-3 {\r\n    background-color: #f48fb1 !important;\r\n}\r\n.pink-text.text-lighten-3 {\r\n    color: #f48fb1 !important;\r\n}\r\n.pink.lighten-2 {\r\n    background-color: #f06292 !important;\r\n}\r\n.pink-text.text-lighten-2 {\r\n    color: #f06292 !important;\r\n}\r\n.pink.lighten-1 {\r\n    background-color: #ec407a !important;\r\n}\r\n.pink-text.text-lighten-1 {\r\n    color: #ec407a !important;\r\n}\r\n.pink.darken-1 {\r\n    background-color: #d81b60 !important;\r\n}\r\n.pink-text.text-darken-1 {\r\n    color: #d81b60 !important;\r\n}\r\n.pink.darken-2 {\r\n    background-color: #c2185b !important;\r\n}\r\n.pink-text.text-darken-2 {\r\n    color: #c2185b !important;\r\n}\r\n.pink.darken-3 {\r\n    background-color: #ad1457 !important;\r\n}\r\n.pink-text.text-darken-3 {\r\n    color: #ad1457 !important;\r\n}\r\n.pink.darken-4 {\r\n    background-color: #880e4f !important;\r\n}\r\n.pink-text.text-darken-4 {\r\n    color: #880e4f !important;\r\n}\r\n.pink.accent-1 {\r\n    background-color: #ff80ab !important;\r\n}\r\n.pink-text.text-accent-1 {\r\n    color: #ff80ab !important;\r\n}\r\n.pink.accent-2 {\r\n    background-color: #ff4081 !important;\r\n}\r\n.pink-text.text-accent-2 {\r\n    color: #ff4081 !important;\r\n}\r\n.pink.accent-3 {\r\n    background-color: #f50057 !important;\r\n}\r\n.pink-text.text-accent-3 {\r\n    color: #f50057 !important;\r\n}\r\n.pink.accent-4 {\r\n    background-color: #c51162 !important;\r\n}\r\n.pink-text.text-accent-4 {\r\n    color: #c51162 !important;\r\n}\r\n.purple {\r\n    background-color: #9c27b0 !important;\r\n}\r\n.purple-text {\r\n    color: #9c27b0 !important;\r\n}\r\n.purple.lighten-5 {\r\n    background-color: #f3e5f5 !important;\r\n}\r\n.purple-text.text-lighten-5 {\r\n    color: #f3e5f5 !important;\r\n}\r\n.purple.lighten-4 {\r\n    background-color: #e1bee7 !important;\r\n}\r\n.purple-text.text-lighten-4 {\r\n    color: #e1bee7 !important;\r\n}\r\n.purple.lighten-3 {\r\n    background-color: #ce93d8 !important;\r\n}\r\n.purple-text.text-lighten-3 {\r\n    color: #ce93d8 !important;\r\n}\r\n.purple.lighten-2 {\r\n    background-color: #ba68c8 !important;\r\n}\r\n.purple-text.text-lighten-2 {\r\n    color: #ba68c8 !important;\r\n}\r\n.purple.lighten-1 {\r\n    background-color: #ab47bc !important;\r\n}\r\n.purple-text.text-lighten-1 {\r\n    color: #ab47bc !important;\r\n}\r\n.purple.darken-1 {\r\n    background-color: #8e24aa !important;\r\n}\r\n.purple-text.text-darken-1 {\r\n    color: #8e24aa !important;\r\n}\r\n.purple.darken-2 {\r\n    background-color: #7b1fa2 !important;\r\n}\r\n.purple-text.text-darken-2 {\r\n    color: #7b1fa2 !important;\r\n}\r\n.purple.darken-3 {\r\n    background-color: #6a1b9a !important;\r\n}\r\n.purple-text.text-darken-3 {\r\n    color: #6a1b9a !important;\r\n}\r\n.purple.darken-4 {\r\n    background-color: #4a148c !important;\r\n}\r\n.purple-text.text-darken-4 {\r\n    color: #4a148c !important;\r\n}\r\n.purple.accent-1 {\r\n    background-color: #ea80fc !important;\r\n}\r\n.purple-text.text-accent-1 {\r\n    color: #ea80fc !important;\r\n}\r\n.purple.accent-2 {\r\n    background-color: #e040fb !important;\r\n}\r\n.purple-text.text-accent-2 {\r\n    color: #e040fb !important;\r\n}\r\n.purple.accent-3 {\r\n    background-color: #d500f9 !important;\r\n}\r\n.purple-text.text-accent-3 {\r\n    color: #d500f9 !important;\r\n}\r\n.purple.accent-4 {\r\n    background-color: #aa00ff !important;\r\n}\r\n.purple-text.text-accent-4 {\r\n    color: #aa00ff !important;\r\n}\r\n.deep-purple {\r\n    background-color: #673ab7 !important;\r\n}\r\n.deep-purple-text {\r\n    color: #673ab7 !important;\r\n}\r\n.deep-purple.lighten-5 {\r\n    background-color: #ede7f6 !important;\r\n}\r\n.deep-purple-text.text-lighten-5 {\r\n    color: #ede7f6 !important;\r\n}\r\n.deep-purple.lighten-4 {\r\n    background-color: #d1c4e9 !important;\r\n}\r\n.deep-purple-text.text-lighten-4 {\r\n    color: #d1c4e9 !important;\r\n}\r\n.deep-purple.lighten-3 {\r\n    background-color: #b39ddb !important;\r\n}\r\n.deep-purple-text.text-lighten-3 {\r\n    color: #b39ddb !important;\r\n}\r\n.deep-purple.lighten-2 {\r\n    background-color: #9575cd !important;\r\n}\r\n.deep-purple-text.text-lighten-2 {\r\n    color: #9575cd !important;\r\n}\r\n.deep-purple.lighten-1 {\r\n    background-color: #7e57c2 !important;\r\n}\r\n.deep-purple-text.text-lighten-1 {\r\n    color: #7e57c2 !important;\r\n}\r\n.deep-purple.darken-1 {\r\n    background-color: #5e35b1 !important;\r\n}\r\n.deep-purple-text.text-darken-1 {\r\n    color: #5e35b1 !important;\r\n}\r\n.deep-purple.darken-2 {\r\n    background-color: #512da8 !important;\r\n}\r\n.deep-purple-text.text-darken-2 {\r\n    color: #512da8 !important;\r\n}\r\n.deep-purple.darken-3 {\r\n    background-color: #4527a0 !important;\r\n}\r\n.deep-purple-text.text-darken-3 {\r\n    color: #4527a0 !important;\r\n}\r\n.deep-purple.darken-4 {\r\n    background-color: #311b92 !important;\r\n}\r\n.deep-purple-text.text-darken-4 {\r\n    color: #311b92 !important;\r\n}\r\n.deep-purple.accent-1 {\r\n    background-color: #b388ff !important;\r\n}\r\n.deep-purple-text.text-accent-1 {\r\n    color: #b388ff !important;\r\n}\r\n.deep-purple.accent-2 {\r\n    background-color: #7c4dff !important;\r\n}\r\n.deep-purple-text.text-accent-2 {\r\n    color: #7c4dff !important;\r\n}\r\n.deep-purple.accent-3 {\r\n    background-color: #651fff !important;\r\n}\r\n.deep-purple-text.text-accent-3 {\r\n    color: #651fff !important;\r\n}\r\n.deep-purple.accent-4 {\r\n    background-color: #6200ea !important;\r\n}\r\n.deep-purple-text.text-accent-4 {\r\n    color: #6200ea !important;\r\n}\r\n.indigo {\r\n    background-color: #3f51b5 !important;\r\n}\r\n.indigo-text {\r\n    color: #3f51b5 !important;\r\n}\r\n.indigo.lighten-5 {\r\n    background-color: #e8eaf6 !important;\r\n}\r\n.indigo-text.text-lighten-5 {\r\n    color: #e8eaf6 !important;\r\n}\r\n.indigo.lighten-4 {\r\n    background-color: #c5cae9 !important;\r\n}\r\n.indigo-text.text-lighten-4 {\r\n    color: #c5cae9 !important;\r\n}\r\n.indigo.lighten-3 {\r\n    background-color: #9fa8da !important;\r\n}\r\n.indigo-text.text-lighten-3 {\r\n    color: #9fa8da !important;\r\n}\r\n.indigo.lighten-2 {\r\n    background-color: #7986cb !important;\r\n}\r\n.indigo-text.text-lighten-2 {\r\n    color: #7986cb !important;\r\n}\r\n.indigo.lighten-1 {\r\n    background-color: #5c6bc0 !important;\r\n}\r\n.indigo-text.text-lighten-1 {\r\n    color: #5c6bc0 !important;\r\n}\r\n.indigo.darken-1 {\r\n    background-color: #3949ab !important;\r\n}\r\n.indigo-text.text-darken-1 {\r\n    color: #3949ab !important;\r\n}\r\n.indigo.darken-2 {\r\n    background-color: #303f9f !important;\r\n}\r\n.indigo-text.text-darken-2 {\r\n    color: #303f9f !important;\r\n}\r\n.indigo.darken-3 {\r\n    background-color: #283593 !important;\r\n}\r\n.indigo-text.text-darken-3 {\r\n    color: #283593 !important;\r\n}\r\n.indigo.darken-4 {\r\n    background-color: #1a237e !important;\r\n}\r\n.indigo-text.text-darken-4 {\r\n    color: #1a237e !important;\r\n}\r\n.indigo.accent-1 {\r\n    background-color: #8c9eff !important;\r\n}\r\n.indigo-text.text-accent-1 {\r\n    color: #8c9eff !important;\r\n}\r\n.indigo.accent-2 {\r\n    background-color: #536dfe !important;\r\n}\r\n.indigo-text.text-accent-2 {\r\n    color: #536dfe !important;\r\n}\r\n.indigo.accent-3 {\r\n    background-color: #3d5afe !important;\r\n}\r\n.indigo-text.text-accent-3 {\r\n    color: #3d5afe !important;\r\n}\r\n.indigo.accent-4 {\r\n    background-color: #304ffe !important;\r\n}\r\n.indigo-text.text-accent-4 {\r\n    color: #304ffe !important;\r\n}\r\n.blue {\r\n    background-color: #2196F3 !important;\r\n}\r\n.blue-text {\r\n    color: #2196F3 !important;\r\n}\r\n.blue.lighten-5 {\r\n    background-color: #E3F2FD !important;\r\n}\r\n.blue-text.text-lighten-5 {\r\n    color: #E3F2FD !important;\r\n}\r\n.blue.lighten-4 {\r\n    background-color: #BBDEFB !important;\r\n}\r\n.blue-text.text-lighten-4 {\r\n    color: #BBDEFB !important;\r\n}\r\n.blue.lighten-3 {\r\n    background-color: #90CAF9 !important;\r\n}\r\n.blue-text.text-lighten-3 {\r\n    color: #90CAF9 !important;\r\n}\r\n.blue.lighten-2 {\r\n    background-color: #64B5F6 !important;\r\n}\r\n.blue-text.text-lighten-2 {\r\n    color: #64B5F6 !important;\r\n}\r\n.blue.lighten-1 {\r\n    background-color: #42A5F5 !important;\r\n}\r\n.blue-text.text-lighten-1 {\r\n    color: #42A5F5 !important;\r\n}\r\n.blue.darken-1 {\r\n    background-color: #1E88E5 !important;\r\n}\r\n.blue-text.text-darken-1 {\r\n    color: #1E88E5 !important;\r\n}\r\n.blue.darken-2 {\r\n    background-color: #1976D2 !important;\r\n}\r\n.blue-text.text-darken-2 {\r\n    color: #1976D2 !important;\r\n}\r\n.blue.darken-3 {\r\n    background-color: #1565C0 !important;\r\n}\r\n.blue-text.text-darken-3 {\r\n    color: #1565C0 !important;\r\n}\r\n.blue.darken-4 {\r\n    background-color: #0D47A1 !important;\r\n}\r\n.blue-text.text-darken-4 {\r\n    color: #0D47A1 !important;\r\n}\r\n.blue.accent-1 {\r\n    background-color: #82B1FF !important;\r\n}\r\n.blue-text.text-accent-1 {\r\n    color: #82B1FF !important;\r\n}\r\n.blue.accent-2 {\r\n    background-color: #448AFF !important;\r\n}\r\n.blue-text.text-accent-2 {\r\n    color: #448AFF !important;\r\n}\r\n.blue.accent-3 {\r\n    background-color: #2979FF !important;\r\n}\r\n.blue-text.text-accent-3 {\r\n    color: #2979FF !important;\r\n}\r\n.blue.accent-4 {\r\n    background-color: #2962FF !important;\r\n}\r\n.blue-text.text-accent-4 {\r\n    color: #2962FF !important;\r\n}\r\n.light-blue {\r\n    background-color: #03a9f4 !important;\r\n}\r\n.light-blue-text {\r\n    color: #03a9f4 !important;\r\n}\r\n.light-blue.lighten-5 {\r\n    background-color: #e1f5fe !important;\r\n}\r\n.light-blue-text.text-lighten-5 {\r\n    color: #e1f5fe !important;\r\n}\r\n.light-blue.lighten-4 {\r\n    background-color: #b3e5fc !important;\r\n}\r\n.light-blue-text.text-lighten-4 {\r\n    color: #b3e5fc !important;\r\n}\r\n.light-blue.lighten-3 {\r\n    background-color: #81d4fa !important;\r\n}\r\n.light-blue-text.text-lighten-3 {\r\n    color: #81d4fa !important;\r\n}\r\n.light-blue.lighten-2 {\r\n    background-color: #4fc3f7 !important;\r\n}\r\n.light-blue-text.text-lighten-2 {\r\n    color: #4fc3f7 !important;\r\n}\r\n.light-blue.lighten-1 {\r\n    background-color: #29b6f6 !important;\r\n}\r\n.light-blue-text.text-lighten-1 {\r\n    color: #29b6f6 !important;\r\n}\r\n.light-blue.darken-1 {\r\n    background-color: #039be5 !important;\r\n}\r\n.light-blue-text.text-darken-1 {\r\n    color: #039be5 !important;\r\n}\r\n.light-blue.darken-2 {\r\n    background-color: #0288d1 !important;\r\n}\r\n.light-blue-text.text-darken-2 {\r\n    color: #0288d1 !important;\r\n}\r\n.light-blue.darken-3 {\r\n    background-color: #0277bd !important;\r\n}\r\n.light-blue-text.text-darken-3 {\r\n    color: #0277bd !important;\r\n}\r\n.light-blue.darken-4 {\r\n    background-color: #01579b !important;\r\n}\r\n.light-blue-text.text-darken-4 {\r\n    color: #01579b !important;\r\n}\r\n.light-blue.accent-1 {\r\n    background-color: #80d8ff !important;\r\n}\r\n.light-blue-text.text-accent-1 {\r\n    color: #80d8ff !important;\r\n}\r\n.light-blue.accent-2 {\r\n    background-color: #40c4ff !important;\r\n}\r\n.light-blue-text.text-accent-2 {\r\n    color: #40c4ff !important;\r\n}\r\n.light-blue.accent-3 {\r\n    background-color: #00b0ff !important;\r\n}\r\n.light-blue-text.text-accent-3 {\r\n    color: #00b0ff !important;\r\n}\r\n.light-blue.accent-4 {\r\n    background-color: #0091ea !important;\r\n}\r\n.light-blue-text.text-accent-4 {\r\n    color: #0091ea !important;\r\n}\r\n.cyan {\r\n    background-color: #00bcd4 !important;\r\n}\r\n.cyan-text {\r\n    color: #00bcd4 !important;\r\n}\r\n.cyan.lighten-5 {\r\n    background-color: #e0f7fa !important;\r\n}\r\n.cyan-text.text-lighten-5 {\r\n    color: #e0f7fa !important;\r\n}\r\n.cyan.lighten-4 {\r\n    background-color: #b2ebf2 !important;\r\n}\r\n.cyan-text.text-lighten-4 {\r\n    color: #b2ebf2 !important;\r\n}\r\n.cyan.lighten-3 {\r\n    background-color: #80deea !important;\r\n}\r\n.cyan-text.text-lighten-3 {\r\n    color: #80deea !important;\r\n}\r\n.cyan.lighten-2 {\r\n    background-color: #4dd0e1 !important;\r\n}\r\n.cyan-text.text-lighten-2 {\r\n    color: #4dd0e1 !important;\r\n}\r\n.cyan.lighten-1 {\r\n    background-color: #26c6da !important;\r\n}\r\n.cyan-text.text-lighten-1 {\r\n    color: #26c6da !important;\r\n}\r\n.cyan.darken-1 {\r\n    background-color: #00acc1 !important;\r\n}\r\n.cyan-text.text-darken-1 {\r\n    color: #00acc1 !important;\r\n}\r\n.cyan.darken-2 {\r\n    background-color: #0097a7 !important;\r\n}\r\n.cyan-text.text-darken-2 {\r\n    color: #0097a7 !important;\r\n}\r\n.cyan.darken-3 {\r\n    background-color: #00838f !important;\r\n}\r\n.cyan-text.text-darken-3 {\r\n    color: #00838f !important;\r\n}\r\n.cyan.darken-4 {\r\n    background-color: #006064 !important;\r\n}\r\n.cyan-text.text-darken-4 {\r\n    color: #006064 !important;\r\n}\r\n.cyan.accent-1 {\r\n    background-color: #84ffff !important;\r\n}\r\n.cyan-text.text-accent-1 {\r\n    color: #84ffff !important;\r\n}\r\n.cyan.accent-2 {\r\n    background-color: #18ffff !important;\r\n}\r\n.cyan-text.text-accent-2 {\r\n    color: #18ffff !important;\r\n}\r\n.cyan.accent-3 {\r\n    background-color: #00e5ff !important;\r\n}\r\n.cyan-text.text-accent-3 {\r\n    color: #00e5ff !important;\r\n}\r\n.cyan.accent-4 {\r\n    background-color: #00b8d4 !important;\r\n}\r\n.cyan-text.text-accent-4 {\r\n    color: #00b8d4 !important;\r\n}\r\n.teal {\r\n    background-color: #009688 !important;\r\n}\r\n.teal-text {\r\n    color: #009688 !important;\r\n}\r\n.teal.lighten-5 {\r\n    background-color: #e0f2f1 !important;\r\n}\r\n.teal-text.text-lighten-5 {\r\n    color: #e0f2f1 !important;\r\n}\r\n.teal.lighten-4 {\r\n    background-color: #b2dfdb !important;\r\n}\r\n.teal-text.text-lighten-4 {\r\n    color: #b2dfdb !important;\r\n}\r\n.teal.lighten-3 {\r\n    background-color: #80cbc4 !important;\r\n}\r\n.teal-text.text-lighten-3 {\r\n    color: #80cbc4 !important;\r\n}\r\n.teal.lighten-2 {\r\n    background-color: #4db6ac !important;\r\n}\r\n.teal-text.text-lighten-2 {\r\n    color: #4db6ac !important;\r\n}\r\n.teal.lighten-1 {\r\n    background-color: #26a69a !important;\r\n}\r\n.teal-text.text-lighten-1 {\r\n    color: #26a69a !important;\r\n}\r\n.teal.darken-1 {\r\n    background-color: #00897b !important;\r\n}\r\n.teal-text.text-darken-1 {\r\n    color: #00897b !important;\r\n}\r\n.teal.darken-2 {\r\n    background-color: #00796b !important;\r\n}\r\n.teal-text.text-darken-2 {\r\n    color: #00796b !important;\r\n}\r\n.teal.darken-3 {\r\n    background-color: #00695c !important;\r\n}\r\n.teal-text.text-darken-3 {\r\n    color: #00695c !important;\r\n}\r\n.teal.darken-4 {\r\n    background-color: #004d40 !important;\r\n}\r\n.teal-text.text-darken-4 {\r\n    color: #004d40 !important;\r\n}\r\n.teal.accent-1 {\r\n    background-color: #a7ffeb !important;\r\n}\r\n.teal-text.text-accent-1 {\r\n    color: #a7ffeb !important;\r\n}\r\n.teal.accent-2 {\r\n    background-color: #64ffda !important;\r\n}\r\n.teal-text.text-accent-2 {\r\n    color: #64ffda !important;\r\n}\r\n.teal.accent-3 {\r\n    background-color: #1de9b6 !important;\r\n}\r\n.teal-text.text-accent-3 {\r\n    color: #1de9b6 !important;\r\n}\r\n.teal.accent-4 {\r\n    background-color: #00bfa5 !important;\r\n}\r\n.teal-text.text-accent-4 {\r\n    color: #00bfa5 !important;\r\n}\r\n.green {\r\n    background-color: #4CAF50 !important;\r\n}\r\n.green-text {\r\n    color: #4CAF50 !important;\r\n}\r\n.green.lighten-5 {\r\n    background-color: #E8F5E9 !important;\r\n}\r\n.green-text.text-lighten-5 {\r\n    color: #E8F5E9 !important;\r\n}\r\n.green.lighten-4 {\r\n    background-color: #C8E6C9 !important;\r\n}\r\n.green-text.text-lighten-4 {\r\n    color: #C8E6C9 !important;\r\n}\r\n.green.lighten-3 {\r\n    background-color: #A5D6A7 !important;\r\n}\r\n.green-text.text-lighten-3 {\r\n    color: #A5D6A7 !important;\r\n}\r\n.green.lighten-2 {\r\n    background-color: #81C784 !important;\r\n}\r\n.green-text.text-lighten-2 {\r\n    color: #81C784 !important;\r\n}\r\n.green.lighten-1 {\r\n    background-color: #66BB6A !important;\r\n}\r\n.green-text.text-lighten-1 {\r\n    color: #66BB6A !important;\r\n}\r\n.green.darken-1 {\r\n    background-color: #43A047 !important;\r\n}\r\n.green-text.text-darken-1 {\r\n    color: #43A047 !important;\r\n}\r\n.green.darken-2 {\r\n    background-color: #388E3C !important;\r\n}\r\n.green-text.text-darken-2 {\r\n    color: #388E3C !important;\r\n}\r\n.green.darken-3 {\r\n    background-color: #2E7D32 !important;\r\n}\r\n.green-text.text-darken-3 {\r\n    color: #2E7D32 !important;\r\n}\r\n.green.darken-4 {\r\n    background-color: #1B5E20 !important;\r\n}\r\n.green-text.text-darken-4 {\r\n    color: #1B5E20 !important;\r\n}\r\n.green.accent-1 {\r\n    background-color: #B9F6CA !important;\r\n}\r\n.green-text.text-accent-1 {\r\n    color: #B9F6CA !important;\r\n}\r\n.green.accent-2 {\r\n    background-color: #69F0AE !important;\r\n}\r\n.green-text.text-accent-2 {\r\n    color: #69F0AE !important;\r\n}\r\n.green.accent-3 {\r\n    background-color: #00E676 !important;\r\n}\r\n.green-text.text-accent-3 {\r\n    color: #00E676 !important;\r\n}\r\n.green.accent-4 {\r\n    background-color: #00C853 !important;\r\n}\r\n.green-text.text-accent-4 {\r\n    color: #00C853 !important;\r\n}\r\n.light-green {\r\n    background-color: #8bc34a !important;\r\n}\r\n.light-green-text {\r\n    color: #8bc34a !important;\r\n}\r\n.light-green.lighten-5 {\r\n    background-color: #f1f8e9 !important;\r\n}\r\n.light-green-text.text-lighten-5 {\r\n    color: #f1f8e9 !important;\r\n}\r\n.light-green.lighten-4 {\r\n    background-color: #dcedc8 !important;\r\n}\r\n.light-green-text.text-lighten-4 {\r\n    color: #dcedc8 !important;\r\n}\r\n.light-green.lighten-3 {\r\n    background-color: #c5e1a5 !important;\r\n}\r\n.light-green-text.text-lighten-3 {\r\n    color: #c5e1a5 !important;\r\n}\r\n.light-green.lighten-2 {\r\n    background-color: #aed581 !important;\r\n}\r\n.light-green-text.text-lighten-2 {\r\n    color: #aed581 !important;\r\n}\r\n.light-green.lighten-1 {\r\n    background-color: #9ccc65 !important;\r\n}\r\n.light-green-text.text-lighten-1 {\r\n    color: #9ccc65 !important;\r\n}\r\n.light-green.darken-1 {\r\n    background-color: #7cb342 !important;\r\n}\r\n.light-green-text.text-darken-1 {\r\n    color: #7cb342 !important;\r\n}\r\n.light-green.darken-2 {\r\n    background-color: #689f38 !important;\r\n}\r\n.light-green-text.text-darken-2 {\r\n    color: #689f38 !important;\r\n}\r\n.light-green.darken-3 {\r\n    background-color: #558b2f !important;\r\n}\r\n.light-green-text.text-darken-3 {\r\n    color: #558b2f !important;\r\n}\r\n.light-green.darken-4 {\r\n    background-color: #33691e !important;\r\n}\r\n.light-green-text.text-darken-4 {\r\n    color: #33691e !important;\r\n}\r\n.light-green.accent-1 {\r\n    background-color: #ccff90 !important;\r\n}\r\n.light-green-text.text-accent-1 {\r\n    color: #ccff90 !important;\r\n}\r\n.light-green.accent-2 {\r\n    background-color: #b2ff59 !important;\r\n}\r\n.light-green-text.text-accent-2 {\r\n    color: #b2ff59 !important;\r\n}\r\n.light-green.accent-3 {\r\n    background-color: #76ff03 !important;\r\n}\r\n.light-green-text.text-accent-3 {\r\n    color: #76ff03 !important;\r\n}\r\n.light-green.accent-4 {\r\n    background-color: #64dd17 !important;\r\n}\r\n.light-green-text.text-accent-4 {\r\n    color: #64dd17 !important;\r\n}\r\n.lime {\r\n    background-color: #cddc39 !important;\r\n}\r\n.lime-text {\r\n    color: #cddc39 !important;\r\n}\r\n.lime.lighten-5 {\r\n    background-color: #f9fbe7 !important;\r\n}\r\n.lime-text.text-lighten-5 {\r\n    color: #f9fbe7 !important;\r\n}\r\n.lime.lighten-4 {\r\n    background-color: #f0f4c3 !important;\r\n}\r\n.lime-text.text-lighten-4 {\r\n    color: #f0f4c3 !important;\r\n}\r\n.lime.lighten-3 {\r\n    background-color: #e6ee9c !important;\r\n}\r\n.lime-text.text-lighten-3 {\r\n    color: #e6ee9c !important;\r\n}\r\n.lime.lighten-2 {\r\n    background-color: #dce775 !important;\r\n}\r\n.lime-text.text-lighten-2 {\r\n    color: #dce775 !important;\r\n}\r\n.lime.lighten-1 {\r\n    background-color: #d4e157 !important;\r\n}\r\n.lime-text.text-lighten-1 {\r\n    color: #d4e157 !important;\r\n}\r\n.lime.darken-1 {\r\n    background-color: #c0ca33 !important;\r\n}\r\n.lime-text.text-darken-1 {\r\n    color: #c0ca33 !important;\r\n}\r\n.lime.darken-2 {\r\n    background-color: #afb42b !important;\r\n}\r\n.lime-text.text-darken-2 {\r\n    color: #afb42b !important;\r\n}\r\n.lime.darken-3 {\r\n    background-color: #9e9d24 !important;\r\n}\r\n.lime-text.text-darken-3 {\r\n    color: #9e9d24 !important;\r\n}\r\n.lime.darken-4 {\r\n    background-color: #827717 !important;\r\n}\r\n.lime-text.text-darken-4 {\r\n    color: #827717 !important;\r\n}\r\n.lime.accent-1 {\r\n    background-color: #f4ff81 !important;\r\n}\r\n.lime-text.text-accent-1 {\r\n    color: #f4ff81 !important;\r\n}\r\n.lime.accent-2 {\r\n    background-color: #eeff41 !important;\r\n}\r\n.lime-text.text-accent-2 {\r\n    color: #eeff41 !important;\r\n}\r\n.lime.accent-3 {\r\n    background-color: #c6ff00 !important;\r\n}\r\n.lime-text.text-accent-3 {\r\n    color: #c6ff00 !important;\r\n}\r\n.lime.accent-4 {\r\n    background-color: #aeea00 !important;\r\n}\r\n.lime-text.text-accent-4 {\r\n    color: #aeea00 !important;\r\n}\r\n.yellow {\r\n    background-color: #ffeb3b !important;\r\n}\r\n.yellow-text {\r\n    color: #ffeb3b !important;\r\n}\r\n.yellow.lighten-5 {\r\n    background-color: #fffde7 !important;\r\n}\r\n.yellow-text.text-lighten-5 {\r\n    color: #fffde7 !important;\r\n}\r\n.yellow.lighten-4 {\r\n    background-color: #fff9c4 !important;\r\n}\r\n.yellow-text.text-lighten-4 {\r\n    color: #fff9c4 !important;\r\n}\r\n.yellow.lighten-3 {\r\n    background-color: #fff59d !important;\r\n}\r\n.yellow-text.text-lighten-3 {\r\n    color: #fff59d !important;\r\n}\r\n.yellow.lighten-2 {\r\n    background-color: #fff176 !important;\r\n}\r\n.yellow-text.text-lighten-2 {\r\n    color: #fff176 !important;\r\n}\r\n.yellow.lighten-1 {\r\n    background-color: #ffee58 !important;\r\n}\r\n.yellow-text.text-lighten-1 {\r\n    color: #ffee58 !important;\r\n}\r\n.yellow.darken-1 {\r\n    background-color: #fdd835 !important;\r\n}\r\n.yellow-text.text-darken-1 {\r\n    color: #fdd835 !important;\r\n}\r\n.yellow.darken-2 {\r\n    background-color: #fbc02d !important;\r\n}\r\n.yellow-text.text-darken-2 {\r\n    color: #fbc02d !important;\r\n}\r\n.yellow.darken-3 {\r\n    background-color: #f9a825 !important;\r\n}\r\n.yellow-text.text-darken-3 {\r\n    color: #f9a825 !important;\r\n}\r\n.yellow.darken-4 {\r\n    background-color: #f57f17 !important;\r\n}\r\n.yellow-text.text-darken-4 {\r\n    color: #f57f17 !important;\r\n}\r\n.yellow.accent-1 {\r\n    background-color: #ffff8d !important;\r\n}\r\n.yellow-text.text-accent-1 {\r\n    color: #ffff8d !important;\r\n}\r\n.yellow.accent-2 {\r\n    background-color: #ffff00 !important;\r\n}\r\n.yellow-text.text-accent-2 {\r\n    color: #ffff00 !important;\r\n}\r\n.yellow.accent-3 {\r\n    background-color: #ffea00 !important;\r\n}\r\n.yellow-text.text-accent-3 {\r\n    color: #ffea00 !important;\r\n}\r\n.yellow.accent-4 {\r\n    background-color: #ffd600 !important;\r\n}\r\n.yellow-text.text-accent-4 {\r\n    color: #ffd600 !important;\r\n}\r\n.amber {\r\n    background-color: #ffc107 !important;\r\n}\r\n.amber-text {\r\n    color: #ffc107 !important;\r\n}\r\n.amber.lighten-5 {\r\n    background-color: #fff8e1 !important;\r\n}\r\n.amber-text.text-lighten-5 {\r\n    color: #fff8e1 !important;\r\n}\r\n.amber.lighten-4 {\r\n    background-color: #ffecb3 !important;\r\n}\r\n.amber-text.text-lighten-4 {\r\n    color: #ffecb3 !important;\r\n}\r\n.amber.lighten-3 {\r\n    background-color: #ffe082 !important;\r\n}\r\n.amber-text.text-lighten-3 {\r\n    color: #ffe082 !important;\r\n}\r\n.amber.lighten-2 {\r\n    background-color: #ffd54f !important;\r\n}\r\n.amber-text.text-lighten-2 {\r\n    color: #ffd54f !important;\r\n}\r\n.amber.lighten-1 {\r\n    background-color: #ffca28 !important;\r\n}\r\n.amber-text.text-lighten-1 {\r\n    color: #ffca28 !important;\r\n}\r\n.amber.darken-1 {\r\n    background-color: #ffb300 !important;\r\n}\r\n.amber-text.text-darken-1 {\r\n    color: #ffb300 !important;\r\n}\r\n.amber.darken-2 {\r\n    background-color: #ffa000 !important;\r\n}\r\n.amber-text.text-darken-2 {\r\n    color: #ffa000 !important;\r\n}\r\n.amber.darken-3 {\r\n    background-color: #ff8f00 !important;\r\n}\r\n.amber-text.text-darken-3 {\r\n    color: #ff8f00 !important;\r\n}\r\n.amber.darken-4 {\r\n    background-color: #ff6f00 !important;\r\n}\r\n.amber-text.text-darken-4 {\r\n    color: #ff6f00 !important;\r\n}\r\n.amber.accent-1 {\r\n    background-color: #ffe57f !important;\r\n}\r\n.amber-text.text-accent-1 {\r\n    color: #ffe57f !important;\r\n}\r\n.amber.accent-2 {\r\n    background-color: #ffd740 !important;\r\n}\r\n.amber-text.text-accent-2 {\r\n    color: #ffd740 !important;\r\n}\r\n.amber.accent-3 {\r\n    background-color: #ffc400 !important;\r\n}\r\n.amber-text.text-accent-3 {\r\n    color: #ffc400 !important;\r\n}\r\n.amber.accent-4 {\r\n    background-color: #ffab00 !important;\r\n}\r\n.amber-text.text-accent-4 {\r\n    color: #ffab00 !important;\r\n}\r\n.orange {\r\n    background-color: #ff9800 !important;\r\n}\r\n.orange-text {\r\n    color: #ff9800 !important;\r\n}\r\n.orange.lighten-5 {\r\n    background-color: #fff3e0 !important;\r\n}\r\n.orange-text.text-lighten-5 {\r\n    color: #fff3e0 !important;\r\n}\r\n.orange.lighten-4 {\r\n    background-color: #ffe0b2 !important;\r\n}\r\n.orange-text.text-lighten-4 {\r\n    color: #ffe0b2 !important;\r\n}\r\n.orange.lighten-3 {\r\n    background-color: #ffcc80 !important;\r\n}\r\n.orange-text.text-lighten-3 {\r\n    color: #ffcc80 !important;\r\n}\r\n.orange.lighten-2 {\r\n    background-color: #ffb74d !important;\r\n}\r\n.orange-text.text-lighten-2 {\r\n    color: #ffb74d !important;\r\n}\r\n.orange.lighten-1 {\r\n    background-color: #ffa726 !important;\r\n}\r\n.orange-text.text-lighten-1 {\r\n    color: #ffa726 !important;\r\n}\r\n.orange.darken-1 {\r\n    background-color: #fb8c00 !important;\r\n}\r\n.orange-text.text-darken-1 {\r\n    color: #fb8c00 !important;\r\n}\r\n.orange.darken-2 {\r\n    background-color: #f57c00 !important;\r\n}\r\n.orange-text.text-darken-2 {\r\n    color: #f57c00 !important;\r\n}\r\n.orange.darken-3 {\r\n    background-color: #ef6c00 !important;\r\n}\r\n.orange-text.text-darken-3 {\r\n    color: #ef6c00 !important;\r\n}\r\n.orange.darken-4 {\r\n    background-color: #e65100 !important;\r\n}\r\n.orange-text.text-darken-4 {\r\n    color: #e65100 !important;\r\n}\r\n.orange.accent-1 {\r\n    background-color: #ffd180 !important;\r\n}\r\n.orange-text.text-accent-1 {\r\n    color: #ffd180 !important;\r\n}\r\n.orange.accent-2 {\r\n    background-color: #ffab40 !important;\r\n}\r\n.orange-text.text-accent-2 {\r\n    color: #ffab40 !important;\r\n}\r\n.orange.accent-3 {\r\n    background-color: #ff9100 !important;\r\n}\r\n.orange-text.text-accent-3 {\r\n    color: #ff9100 !important;\r\n}\r\n.orange.accent-4 {\r\n    background-color: #ff6d00 !important;\r\n}\r\n.orange-text.text-accent-4 {\r\n    color: #ff6d00 !important;\r\n}\r\n.deep-orange {\r\n    background-color: #ff5722 !important;\r\n}\r\n.deep-orange-text {\r\n    color: #ff5722 !important;\r\n}\r\n.deep-orange.lighten-5 {\r\n    background-color: #fbe9e7 !important;\r\n}\r\n.deep-orange-text.text-lighten-5 {\r\n    color: #fbe9e7 !important;\r\n}\r\n.deep-orange.lighten-4 {\r\n    background-color: #ffccbc !important;\r\n}\r\n.deep-orange-text.text-lighten-4 {\r\n    color: #ffccbc !important;\r\n}\r\n.deep-orange.lighten-3 {\r\n    background-color: #ffab91 !important;\r\n}\r\n.deep-orange-text.text-lighten-3 {\r\n    color: #ffab91 !important;\r\n}\r\n.deep-orange.lighten-2 {\r\n    background-color: #ff8a65 !important;\r\n}\r\n.deep-orange-text.text-lighten-2 {\r\n    color: #ff8a65 !important;\r\n}\r\n.deep-orange.lighten-1 {\r\n    background-color: #ff7043 !important;\r\n}\r\n.deep-orange-text.text-lighten-1 {\r\n    color: #ff7043 !important;\r\n}\r\n.deep-orange.darken-1 {\r\n    background-color: #f4511e !important;\r\n}\r\n.deep-orange-text.text-darken-1 {\r\n    color: #f4511e !important;\r\n}\r\n.deep-orange.darken-2 {\r\n    background-color: #e64a19 !important;\r\n}\r\n.deep-orange-text.text-darken-2 {\r\n    color: #e64a19 !important;\r\n}\r\n.deep-orange.darken-3 {\r\n    background-color: #d84315 !important;\r\n}\r\n.deep-orange-text.text-darken-3 {\r\n    color: #d84315 !important;\r\n}\r\n.deep-orange.darken-4 {\r\n    background-color: #bf360c !important;\r\n}\r\n.deep-orange-text.text-darken-4 {\r\n    color: #bf360c !important;\r\n}\r\n.deep-orange.accent-1 {\r\n    background-color: #ff9e80 !important;\r\n}\r\n.deep-orange-text.text-accent-1 {\r\n    color: #ff9e80 !important;\r\n}\r\n.deep-orange.accent-2 {\r\n    background-color: #ff6e40 !important;\r\n}\r\n.deep-orange-text.text-accent-2 {\r\n    color: #ff6e40 !important;\r\n}\r\n.deep-orange.accent-3 {\r\n    background-color: #ff3d00 !important;\r\n}\r\n.deep-orange-text.text-accent-3 {\r\n    color: #ff3d00 !important;\r\n}\r\n.deep-orange.accent-4 {\r\n    background-color: #dd2c00 !important;\r\n}\r\n.deep-orange-text.text-accent-4 {\r\n    color: #dd2c00 !important;\r\n}\r\n.brown {\r\n    background-color: #795548 !important;\r\n}\r\n.brown-text {\r\n    color: #795548 !important;\r\n}\r\n.brown.lighten-5 {\r\n    background-color: #efebe9 !important;\r\n}\r\n.brown-text.text-lighten-5 {\r\n    color: #efebe9 !important;\r\n}\r\n.brown.lighten-4 {\r\n    background-color: #d7ccc8 !important;\r\n}\r\n.brown-text.text-lighten-4 {\r\n    color: #d7ccc8 !important;\r\n}\r\n.brown.lighten-3 {\r\n    background-color: #bcaaa4 !important;\r\n}\r\n.brown-text.text-lighten-3 {\r\n    color: #bcaaa4 !important;\r\n}\r\n.brown.lighten-2 {\r\n    background-color: #a1887f !important;\r\n}\r\n.brown-text.text-lighten-2 {\r\n    color: #a1887f !important;\r\n}\r\n.brown.lighten-1 {\r\n    background-color: #8d6e63 !important;\r\n}\r\n.brown-text.text-lighten-1 {\r\n    color: #8d6e63 !important;\r\n}\r\n.brown.darken-1 {\r\n    background-color: #6d4c41 !important;\r\n}\r\n.brown-text.text-darken-1 {\r\n    color: #6d4c41 !important;\r\n}\r\n.brown.darken-2 {\r\n    background-color: #5d4037 !important;\r\n}\r\n.brown-text.text-darken-2 {\r\n    color: #5d4037 !important;\r\n}\r\n.brown.darken-3 {\r\n    background-color: #4e342e !important;\r\n}\r\n.brown-text.text-darken-3 {\r\n    color: #4e342e !important;\r\n}\r\n.brown.darken-4 {\r\n    background-color: #3e2723 !important;\r\n}\r\n.brown-text.text-darken-4 {\r\n    color: #3e2723 !important;\r\n}\r\n.blue-grey {\r\n    background-color: #607d8b !important;\r\n}\r\n.blue-grey-text {\r\n    color: #607d8b !important;\r\n}\r\n.blue-grey.lighten-5 {\r\n    background-color: #eceff1 !important;\r\n}\r\n.blue-grey-text.text-lighten-5 {\r\n    color: #eceff1 !important;\r\n}\r\n.blue-grey.lighten-4 {\r\n    background-color: #cfd8dc !important;\r\n}\r\n.blue-grey-text.text-lighten-4 {\r\n    color: #cfd8dc !important;\r\n}\r\n.blue-grey.lighten-3 {\r\n    background-color: #b0bec5 !important;\r\n}\r\n.blue-grey-text.text-lighten-3 {\r\n    color: #b0bec5 !important;\r\n}\r\n.blue-grey.lighten-2 {\r\n    background-color: #90a4ae !important;\r\n}\r\n.blue-grey-text.text-lighten-2 {\r\n    color: #90a4ae !important;\r\n}\r\n.blue-grey.lighten-1 {\r\n    background-color: #78909c !important;\r\n}\r\n.blue-grey-text.text-lighten-1 {\r\n    color: #78909c !important;\r\n}\r\n.blue-grey.darken-1 {\r\n    background-color: #546e7a !important;\r\n}\r\n.blue-grey-text.text-darken-1 {\r\n    color: #546e7a !important;\r\n}\r\n.blue-grey.darken-2 {\r\n    background-color: #455a64 !important;\r\n}\r\n.blue-grey-text.text-darken-2 {\r\n    color: #455a64 !important;\r\n}\r\n.blue-grey.darken-3 {\r\n    background-color: #37474f !important;\r\n}\r\n.blue-grey-text.text-darken-3 {\r\n    color: #37474f !important;\r\n}\r\n.blue-grey.darken-4 {\r\n    background-color: #263238 !important;\r\n}\r\n.blue-grey-text.text-darken-4 {\r\n    color: #263238 !important;\r\n}\r\n.grey {\r\n    background-color: #9e9e9e !important;\r\n}\r\n.grey-text {\r\n    color: #9e9e9e !important;\r\n}\r\n.grey.lighten-5 {\r\n    background-color: #fafafa !important;\r\n}\r\n.grey-text.text-lighten-5 {\r\n    color: #fafafa !important;\r\n}\r\n.grey.lighten-4 {\r\n    background-color: #f5f5f5 !important;\r\n}\r\n.grey-text.text-lighten-4 {\r\n    color: #f5f5f5 !important;\r\n}\r\n.grey.lighten-3 {\r\n    background-color: #eeeeee !important;\r\n}\r\n.grey-text.text-lighten-3 {\r\n    color: #eeeeee !important;\r\n}\r\n.grey.lighten-2 {\r\n    background-color: #e0e0e0 !important;\r\n}\r\n.grey-text.text-lighten-2 {\r\n    color: #e0e0e0 !important;\r\n}\r\n.grey.lighten-1 {\r\n    background-color: #bdbdbd !important;\r\n}\r\n.grey-text.text-lighten-1 {\r\n    color: #bdbdbd !important;\r\n}\r\n.grey.darken-1 {\r\n    background-color: #757575 !important;\r\n}\r\n.grey-text.text-darken-1 {\r\n    color: #757575 !important;\r\n}\r\n.grey.darken-2 {\r\n    background-color: #616161 !important;\r\n}\r\n.grey-text.text-darken-2 {\r\n    color: #616161 !important;\r\n}\r\n.grey.darken-3 {\r\n    background-color: #424242 !important;\r\n}\r\n.grey-text.text-darken-3 {\r\n    color: #424242 !important;\r\n}\r\n.grey.darken-4 {\r\n    background-color: #212121 !important;\r\n}\r\n.grey-text.text-darken-4 {\r\n    color: #212121 !important;\r\n}\r\n.black {\r\n    background-color: #000000 !important;\r\n}\r\n.black-text {\r\n    color: #000000 !important;\r\n}\r\n.white {\r\n    background-color: #FFFFFF !important;\r\n}\r\n.white-text {\r\n    color: #FFFFFF !important;\r\n}\r\n.transparent {\r\n    background-color: transparent !important;\r\n}\r\n.transparent-text {\r\n    color: transparent !important;\r\n}\r\n/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\r\n/* Document\r\n     ========================================================================== */\r\n/**\r\n   * 1. Correct the line height in all browsers.\r\n   * 2. Prevent adjustments of font size after orientation changes in\r\n   *    IE on Windows Phone and in iOS.\r\n   */\r\nhtml {\r\n    line-height: 1.15;\r\n    /* 1 */\r\n    -ms-text-size-adjust: 100%;\r\n    /* 2 */\r\n    -webkit-text-size-adjust: 100%;\r\n    /* 2 */\r\n}\r\n/* Sections\r\n     ========================================================================== */\r\n/**\r\n   * Remove the margin in all browsers (opinionated).\r\n   */\r\nbody {\r\n    margin: 0;\r\n}\r\n/**\r\n   * Add the correct display in IE 9-.\r\n   */\r\narticle,\r\naside,\r\nfooter,\r\nheader,\r\nnav,\r\nsection {\r\n    display: block;\r\n}\r\n/**\r\n   * Correct the font size and margin on `h1` elements within `section` and\r\n   * `article` contexts in Chrome, Firefox, and Safari.\r\n   */\r\nh1 {\r\n    font-size: 2em;\r\n    margin: 0.67em 0;\r\n}\r\n/* Grouping content\r\n     ========================================================================== */\r\n/**\r\n   * Add the correct display in IE 9-.\r\n   * 1. Add the correct display in IE.\r\n   */\r\nfigcaption,\r\nfigure,\r\nmain {\r\n    /* 1 */\r\n    display: block;\r\n}\r\n/**\r\n   * Add the correct margin in IE 8.\r\n   */\r\nfigure {\r\n    margin: 1em 40px;\r\n}\r\n/**\r\n   * 1. Add the correct box sizing in Firefox.\r\n   * 2. Show the overflow in Edge and IE.\r\n   */\r\nhr {\r\n    -webkit-box-sizing: content-box;\r\n    box-sizing: content-box;\r\n    /* 1 */\r\n    height: 0;\r\n    /* 1 */\r\n    overflow: visible;\r\n    /* 2 */\r\n}\r\n/**\r\n   * 1. Correct the inheritance and scaling of font size in all browsers.\r\n   * 2. Correct the odd `em` font sizing in all browsers.\r\n   */\r\npre {\r\n    font-family: monospace, monospace;\r\n    /* 1 */\r\n    font-size: 1em;\r\n    /* 2 */\r\n}\r\n/* Text-level semantics\r\n     ========================================================================== */\r\n/**\r\n   * 1. Remove the gray background on active links in IE 10.\r\n   * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\r\n   */\r\na {\r\n    background-color: transparent;\r\n    /* 1 */\r\n    -webkit-text-decoration-skip: objects;\r\n    /* 2 */\r\n}\r\n/**\r\n   * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\r\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n   */\r\nabbr[title] {\r\n    border-bottom: none;\r\n    /* 1 */\r\n    text-decoration: underline;\r\n    /* 2 */\r\n    -webkit-text-decoration: underline dotted;\r\n    text-decoration: underline dotted;\r\n    /* 2 */\r\n}\r\n/**\r\n   * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\r\n   */\r\nb,\r\nstrong {\r\n    font-weight: inherit;\r\n}\r\n/**\r\n   * Add the correct font weight in Chrome, Edge, and Safari.\r\n   */\r\nb,\r\nstrong {\r\n    font-weight: bolder;\r\n}\r\n/**\r\n   * 1. Correct the inheritance and scaling of font size in all browsers.\r\n   * 2. Correct the odd `em` font sizing in all browsers.\r\n   */\r\ncode,\r\nkbd,\r\nsamp {\r\n    font-family: monospace, monospace;\r\n    /* 1 */\r\n    font-size: 1em;\r\n    /* 2 */\r\n}\r\n/**\r\n   * Add the correct font style in Android 4.3-.\r\n   */\r\ndfn {\r\n    font-style: italic;\r\n}\r\n/**\r\n   * Add the correct background and color in IE 9-.\r\n   */\r\nmark {\r\n    background-color: #ff0;\r\n    color: #000;\r\n}\r\n/**\r\n   * Add the correct font size in all browsers.\r\n   */\r\nsmall {\r\n    font-size: 80%;\r\n}\r\n/**\r\n   * Prevent `sub` and `sup` elements from affecting the line height in\r\n   * all browsers.\r\n   */\r\nsub,\r\nsup {\r\n    font-size: 75%;\r\n    line-height: 0;\r\n    position: relative;\r\n    vertical-align: baseline;\r\n}\r\nsub {\r\n    bottom: -0.25em;\r\n}\r\nsup {\r\n    top: -0.5em;\r\n}\r\n/* Embedded content\r\n     ========================================================================== */\r\n/**\r\n   * Add the correct display in IE 9-.\r\n   */\r\naudio,\r\nvideo {\r\n    display: inline-block;\r\n}\r\n/**\r\n   * Add the correct display in iOS 4-7.\r\n   */\r\naudio:not([controls]) {\r\n    display: none;\r\n    height: 0;\r\n}\r\n/**\r\n   * Remove the border on images inside links in IE 10-.\r\n   */\r\nimg {\r\n    border-style: none;\r\n}\r\n/**\r\n   * Hide the overflow in IE.\r\n   */\r\nsvg:not(:root) {\r\n    overflow: hidden;\r\n}\r\n/* Forms\r\n     ========================================================================== */\r\n/**\r\n   * 1. Change the font styles in all browsers (opinionated).\r\n   * 2. Remove the margin in Firefox and Safari.\r\n   */\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n    font-family: sans-serif;\r\n    /* 1 */\r\n    font-size: 100%;\r\n    /* 1 */\r\n    line-height: 1.15;\r\n    /* 1 */\r\n    margin: 0;\r\n    /* 2 */\r\n}\r\n/**\r\n   * Show the overflow in IE.\r\n   * 1. Show the overflow in Edge.\r\n   */\r\nbutton,\r\ninput {\r\n    /* 1 */\r\n    overflow: visible;\r\n}\r\n/**\r\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n   * 1. Remove the inheritance of text transform in Firefox.\r\n   */\r\nbutton,\r\nselect {\r\n    /* 1 */\r\n    text-transform: none;\r\n}\r\n/**\r\n   * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\r\n   *    controls in Android 4.\r\n   * 2. Correct the inability to style clickable types in iOS and Safari.\r\n   */\r\nbutton,\r\nhtml [type=\"button\"],\r\n[type=\"reset\"],\r\n[type=\"submit\"] {\r\n    -webkit-appearance: button;\r\n    /* 2 */\r\n}\r\n/**\r\n   * Remove the inner border and padding in Firefox.\r\n   */\r\nbutton::-moz-focus-inner,\r\n[type=\"button\"]::-moz-focus-inner,\r\n[type=\"reset\"]::-moz-focus-inner,\r\n[type=\"submit\"]::-moz-focus-inner {\r\n    border-style: none;\r\n    padding: 0;\r\n}\r\n/**\r\n   * Restore the focus styles unset by the previous rule.\r\n   */\r\nbutton:-moz-focusring,\r\n[type=\"button\"]:-moz-focusring,\r\n[type=\"reset\"]:-moz-focusring,\r\n[type=\"submit\"]:-moz-focusring {\r\n    outline: 1px dotted ButtonText;\r\n}\r\n/**\r\n   * Correct the padding in Firefox.\r\n   */\r\nfieldset {\r\n    padding: 0.35em 0.75em 0.625em;\r\n}\r\n/**\r\n   * 1. Correct the text wrapping in Edge and IE.\r\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n   * 3. Remove the padding so developers are not caught out when they zero out\r\n   *    `fieldset` elements in all browsers.\r\n   */\r\nlegend {\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    /* 1 */\r\n    color: inherit;\r\n    /* 2 */\r\n    display: table;\r\n    /* 1 */\r\n    max-width: 100%;\r\n    /* 1 */\r\n    padding: 0;\r\n    /* 3 */\r\n    white-space: normal;\r\n    /* 1 */\r\n}\r\n/**\r\n   * 1. Add the correct display in IE 9-.\r\n   * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n   */\r\nprogress {\r\n    display: inline-block;\r\n    /* 1 */\r\n    vertical-align: baseline;\r\n    /* 2 */\r\n}\r\n/**\r\n   * Remove the default vertical scrollbar in IE.\r\n   */\r\ntextarea {\r\n    overflow: auto;\r\n}\r\n/**\r\n   * 1. Add the correct box sizing in IE 10-.\r\n   * 2. Remove the padding in IE 10-.\r\n   */\r\n[type=\"checkbox\"],\r\n[type=\"radio\"] {\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    /* 1 */\r\n    padding: 0;\r\n    /* 2 */\r\n}\r\n/**\r\n   * Correct the cursor style of increment and decrement buttons in Chrome.\r\n   */\r\n[type=\"number\"]::-webkit-inner-spin-button,\r\n[type=\"number\"]::-webkit-outer-spin-button {\r\n    height: auto;\r\n}\r\n/**\r\n   * 1. Correct the odd appearance in Chrome and Safari.\r\n   * 2. Correct the outline style in Safari.\r\n   */\r\n[type=\"search\"] {\r\n    -webkit-appearance: textfield;\r\n    /* 1 */\r\n    outline-offset: -2px;\r\n    /* 2 */\r\n}\r\n/**\r\n   * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\r\n   */\r\n[type=\"search\"]::-webkit-search-cancel-button,\r\n[type=\"search\"]::-webkit-search-decoration {\r\n    -webkit-appearance: none;\r\n}\r\n/**\r\n   * 1. Correct the inability to style clickable types in iOS and Safari.\r\n   * 2. Change font properties to `inherit` in Safari.\r\n   */\r\n::-webkit-file-upload-button {\r\n    -webkit-appearance: button;\r\n    /* 1 */\r\n    font: inherit;\r\n    /* 2 */\r\n}\r\n/* Interactive\r\n     ========================================================================== */\r\n/*\r\n   * Add the correct display in IE 9-.\r\n   * 1. Add the correct display in Edge, IE, and Firefox.\r\n   */\r\ndetails,\r\nmenu {\r\n    display: block;\r\n}\r\n/*\r\n   * Add the correct display in all browsers.\r\n   */\r\nsummary {\r\n    display: list-item;\r\n}\r\n/* Scripting\r\n     ========================================================================== */\r\n/**\r\n   * Add the correct display in IE 9-.\r\n   */\r\ncanvas {\r\n    display: inline-block;\r\n}\r\n/**\r\n   * Add the correct display in IE.\r\n   */\r\ntemplate {\r\n    display: none;\r\n}\r\n/* Hidden\r\n     ========================================================================== */\r\n/**\r\n   * Add the correct display in IE 10-.\r\n   */\r\n[hidden] {\r\n    display: none;\r\n}\r\nhtml {\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}\r\n*,\r\n*:before,\r\n*:after {\r\n    -webkit-box-sizing: inherit;\r\n    box-sizing: inherit;\r\n}\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;\r\n}\r\nul:not(.browser-default) {\r\n    padding-left: 0;\r\n    list-style-type: none;\r\n}\r\nul:not(.browser-default)>li {\r\n    list-style-type: none;\r\n}\r\na {\r\n    color: #039be5;\r\n    text-decoration: none;\r\n    -webkit-tap-highlight-color: transparent;\r\n}\r\n.valign-wrapper {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n}\r\n.clearfix {\r\n    clear: both;\r\n}\r\n.z-depth-0 {\r\n    -webkit-box-shadow: none !important;\r\n    box-shadow: none !important;\r\n}\r\n/* 2dp elevation modified*/\r\n.z-depth-1,\r\nnav,\r\n.card-panel,\r\n.card,\r\n.toast,\r\n.btn,\r\n.btn-large,\r\n.btn-small,\r\n.btn-floating,\r\n.dropdown-content,\r\n.collapsible,\r\n.sidenav {\r\n    -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\r\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n.z-depth-1-half,\r\n.btn:hover,\r\n.btn-large:hover,\r\n.btn-small:hover,\r\n.btn-floating:hover {\r\n    -webkit-box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);\r\n    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);\r\n}\r\n/* 6dp elevation modified*/\r\n.z-depth-2 {\r\n    -webkit-box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);\r\n    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);\r\n}\r\n/* 12dp elevation modified*/\r\n.z-depth-3 {\r\n    -webkit-box-shadow: 0 8px 17px 2px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);\r\n    box-shadow: 0 8px 17px 2px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);\r\n}\r\n/* 16dp elevation */\r\n.z-depth-4 {\r\n    -webkit-box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -7px rgba(0, 0, 0, 0.2);\r\n    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -7px rgba(0, 0, 0, 0.2);\r\n}\r\n/* 24dp elevation */\r\n.z-depth-5,\r\n.modal {\r\n    -webkit-box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);\r\n    box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);\r\n}\r\n.hoverable {\r\n    -webkit-transition: -webkit-box-shadow .25s;\r\n    transition: -webkit-box-shadow .25s;\r\n    transition: box-shadow .25s;\r\n    transition: box-shadow .25s, -webkit-box-shadow .25s;\r\n}\r\n.hoverable:hover {\r\n    -webkit-box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n.divider {\r\n    height: 1px;\r\n    overflow: hidden;\r\n    background-color: #e0e0e0;\r\n}\r\nblockquote {\r\n    margin: 20px 0;\r\n    padding-left: 1.5rem;\r\n    border-left: 5px solid #ee6e73;\r\n}\r\ni {\r\n    line-height: inherit;\r\n}\r\ni.left {\r\n    float: left;\r\n    margin-right: 15px;\r\n}\r\ni.right {\r\n    float: right;\r\n    margin-left: 15px;\r\n}\r\ni.tiny {\r\n    font-size: 1rem;\r\n}\r\ni.small {\r\n    font-size: 2rem;\r\n}\r\ni.medium {\r\n    font-size: 4rem;\r\n}\r\ni.large {\r\n    font-size: 6rem;\r\n}\r\nimg.responsive-img,\r\nvideo.responsive-video {\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n.pagination li {\r\n    display: inline-block;\r\n    border-radius: 2px;\r\n    text-align: center;\r\n    vertical-align: top;\r\n    height: 30px;\r\n}\r\n.pagination li a {\r\n    color: #444;\r\n    display: inline-block;\r\n    font-size: 1.2rem;\r\n    padding: 0 10px;\r\n    line-height: 30px;\r\n}\r\n.pagination li.active a {\r\n    color: #fff;\r\n}\r\n.pagination li.active {\r\n    background-color: #ee6e73;\r\n}\r\n.pagination li.disabled a {\r\n    cursor: default;\r\n    color: #999;\r\n}\r\n.pagination li i {\r\n    font-size: 2rem;\r\n}\r\n.pagination li.pages ul li {\r\n    display: inline-block;\r\n    float: none;\r\n}\r\n@media only screen and (max-width: 992px) {\r\n    .pagination {\r\n        width: 100%;\r\n    }\r\n    .pagination li.prev,\r\n    .pagination li.next {\r\n        width: 10%;\r\n    }\r\n    .pagination li.pages {\r\n        width: 80%;\r\n        overflow: hidden;\r\n        white-space: nowrap;\r\n    }\r\n}\r\n.breadcrumb {\r\n    font-size: 18px;\r\n    color: rgba(255, 255, 255, 0.7);\r\n}\r\n.breadcrumb i,\r\n.breadcrumb [class^=\"mdi-\"],\r\n.breadcrumb [class*=\"mdi-\"],\r\n.breadcrumb i.material-icons {\r\n    display: inline-block;\r\n    float: left;\r\n    font-size: 24px;\r\n}\r\n.breadcrumb:before {\r\n    content: '\\E5CC';\r\n    color: rgba(255, 255, 255, 0.7);\r\n    vertical-align: top;\r\n    display: inline-block;\r\n    font-family: 'Material Icons';\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-size: 25px;\r\n    margin: 0 10px 0 8px;\r\n    -webkit-font-smoothing: antialiased;\r\n}\r\n.breadcrumb:first-child:before {\r\n    display: none;\r\n}\r\n.breadcrumb:last-child {\r\n    color: #fff;\r\n}\r\n.parallax-container {\r\n    position: relative;\r\n    overflow: hidden;\r\n    height: 500px;\r\n}\r\n.parallax-container .parallax {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    z-index: -1;\r\n}\r\n.parallax-container .parallax img {\r\n    opacity: 0;\r\n    position: absolute;\r\n    left: 50%;\r\n    bottom: 0;\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n    -webkit-transform: translateX(-50%);\r\n    transform: translateX(-50%);\r\n}\r\n.pin-top,\r\n.pin-bottom {\r\n    position: relative;\r\n}\r\n.pinned {\r\n    position: fixed !important;\r\n}\r\n/*********************\r\n    Transition Classes\r\n  **********************/\r\nul.staggered-list li {\r\n    opacity: 0;\r\n}\r\n.fade-in {\r\n    opacity: 0;\r\n    -webkit-transform-origin: 0 50%;\r\n    transform-origin: 0 50%;\r\n}\r\n/*********************\r\n    Media Query Classes\r\n  **********************/\r\n@media only screen and (max-width: 600px) {\r\n    .hide-on-small-only,\r\n    .hide-on-small-and-down {\r\n        display: none !important;\r\n    }\r\n}\r\n@media only screen and (max-width: 992px) {\r\n    .hide-on-med-and-down {\r\n        display: none !important;\r\n    }\r\n}\r\n@media only screen and (min-width: 601px) {\r\n    .hide-on-med-and-up {\r\n        display: none !important;\r\n    }\r\n}\r\n@media only screen and (min-width: 600px) and (max-width: 992px) {\r\n    .hide-on-med-only {\r\n        display: none !important;\r\n    }\r\n}\r\n@media only screen and (min-width: 993px) {\r\n    .hide-on-large-only {\r\n        display: none !important;\r\n    }\r\n}\r\n@media only screen and (min-width: 1201px) {\r\n    .hide-on-extra-large-only {\r\n        display: none !important;\r\n    }\r\n}\r\n@media only screen and (min-width: 1201px) {\r\n    .show-on-extra-large {\r\n        display: block !important;\r\n    }\r\n}\r\n@media only screen and (min-width: 993px) {\r\n    .show-on-large {\r\n        display: block !important;\r\n    }\r\n}\r\n@media only screen and (min-width: 600px) and (max-width: 992px) {\r\n    .show-on-medium {\r\n        display: block !important;\r\n    }\r\n}\r\n@media only screen and (max-width: 600px) {\r\n    .show-on-small {\r\n        display: block !important;\r\n    }\r\n}\r\n@media only screen and (min-width: 601px) {\r\n    .show-on-medium-and-up {\r\n        display: block !important;\r\n    }\r\n}\r\n@media only screen and (max-width: 992px) {\r\n    .show-on-medium-and-down {\r\n        display: block !important;\r\n    }\r\n}\r\n@media only screen and (max-width: 600px) {\r\n    .center-on-small-only {\r\n        text-align: center;\r\n    }\r\n}\r\n.page-footer {\r\n    padding-top: 20px;\r\n    color: #fff;\r\n    background-color: #ee6e73;\r\n}\r\n.page-footer .footer-copyright {\r\n    overflow: hidden;\r\n    min-height: 50px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    -webkit-box-pack: justify;\r\n    -ms-flex-pack: justify;\r\n    justify-content: space-between;\r\n    padding: 10px 0px;\r\n    color: rgba(255, 255, 255, 0.8);\r\n    background-color: rgba(51, 51, 51, 0.08);\r\n}\r\ntable,\r\nth,\r\ntd {\r\n    border: none;\r\n}\r\ntable {\r\n    width: 100%;\r\n    display: table;\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}\r\ntable.striped tr {\r\n    border-bottom: none;\r\n}\r\ntable.striped>tbody>tr:nth-child(odd) {\r\n    background-color: rgba(242, 242, 242, 0.5);\r\n}\r\ntable.striped>tbody>tr>td {\r\n    border-radius: 0;\r\n}\r\ntable.highlight>tbody>tr {\r\n    -webkit-transition: background-color .25s ease;\r\n    transition: background-color .25s ease;\r\n}\r\ntable.highlight>tbody>tr:hover {\r\n    background-color: rgba(242, 242, 242, 0.5);\r\n}\r\ntable.centered thead tr th,\r\ntable.centered tbody tr td {\r\n    text-align: center;\r\n}\r\ntr {\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12);\r\n}\r\ntd,\r\nth {\r\n    padding: 15px 5px;\r\n    display: table-cell;\r\n    text-align: left;\r\n    vertical-align: middle;\r\n    border-radius: 2px;\r\n}\r\n@media only screen and (max-width: 992px) {\r\n    table.responsive-table {\r\n        width: 100%;\r\n        border-collapse: collapse;\r\n        border-spacing: 0;\r\n        display: block;\r\n        position: relative;\r\n        /* sort out borders */\r\n    }\r\n    table.responsive-table td:empty:before {\r\n        content: '\\00a0';\r\n    }\r\n    table.responsive-table th,\r\n    table.responsive-table td {\r\n        margin: 0;\r\n        vertical-align: top;\r\n    }\r\n    table.responsive-table th {\r\n        text-align: left;\r\n    }\r\n    table.responsive-table thead {\r\n        display: block;\r\n        float: left;\r\n    }\r\n    table.responsive-table thead tr {\r\n        display: block;\r\n        padding: 0 10px 0 0;\r\n    }\r\n    table.responsive-table thead tr th::before {\r\n        content: \"\\00a0\";\r\n    }\r\n    table.responsive-table tbody {\r\n        display: block;\r\n        width: auto;\r\n        position: relative;\r\n        overflow-x: auto;\r\n        white-space: nowrap;\r\n    }\r\n    table.responsive-table tbody tr {\r\n        display: inline-block;\r\n        vertical-align: top;\r\n    }\r\n    table.responsive-table th {\r\n        display: block;\r\n        text-align: right;\r\n    }\r\n    table.responsive-table td {\r\n        display: block;\r\n        min-height: 1.25em;\r\n        text-align: left;\r\n    }\r\n    table.responsive-table tr {\r\n        border-bottom: none;\r\n        padding: 0 10px;\r\n    }\r\n    table.responsive-table thead {\r\n        border: 0;\r\n        border-right: 1px solid rgba(0, 0, 0, 0.12);\r\n    }\r\n}\r\n.collection {\r\n    margin: 0.5rem 0 1rem 0;\r\n    border: 1px solid #e0e0e0;\r\n    border-radius: 2px;\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n.collection .collection-item {\r\n    background-color: #fff;\r\n    line-height: 1.5rem;\r\n    padding: 10px 20px;\r\n    margin: 0;\r\n    border-bottom: 1px solid #e0e0e0;\r\n}\r\n.collection .collection-item.avatar {\r\n    min-height: 84px;\r\n    padding-left: 72px;\r\n    position: relative;\r\n}\r\n.collection .collection-item.avatar:not(.circle-clipper)>.circle,\r\n.collection .collection-item.avatar :not(.circle-clipper)>.circle {\r\n    position: absolute;\r\n    width: 42px;\r\n    height: 42px;\r\n    overflow: hidden;\r\n    left: 15px;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n.collection .collection-item.avatar i.circle {\r\n    font-size: 18px;\r\n    line-height: 42px;\r\n    color: #fff;\r\n    background-color: #999;\r\n    text-align: center;\r\n}\r\n.collection .collection-item.avatar .title {\r\n    font-size: 16px;\r\n}\r\n.collection .collection-item.avatar p {\r\n    margin: 0;\r\n}\r\n.collection .collection-item.avatar .secondary-content {\r\n    position: absolute;\r\n    top: 16px;\r\n    right: 16px;\r\n}\r\n.collection .collection-item:last-child {\r\n    border-bottom: none;\r\n}\r\n.collection .collection-item.active {\r\n    background-color: #26a69a;\r\n    color: #eafaf9;\r\n}\r\n.collection .collection-item.active .secondary-content {\r\n    color: #fff;\r\n}\r\n.collection a.collection-item {\r\n    display: block;\r\n    -webkit-transition: .25s;\r\n    transition: .25s;\r\n    color: #26a69a;\r\n}\r\n.collection a.collection-item:not(.active):hover {\r\n    background-color: #ddd;\r\n}\r\n.collection.with-header .collection-header {\r\n    background-color: #fff;\r\n    border-bottom: 1px solid #e0e0e0;\r\n    padding: 10px 20px;\r\n}\r\n.collection.with-header .collection-item {\r\n    padding-left: 30px;\r\n}\r\n.collection.with-header .collection-item.avatar {\r\n    padding-left: 72px;\r\n}\r\n.secondary-content {\r\n    float: right;\r\n    color: #26a69a;\r\n}\r\n.collapsible .collection {\r\n    margin: 0;\r\n    border: none;\r\n}\r\n.video-container {\r\n    position: relative;\r\n    padding-bottom: 56.25%;\r\n    height: 0;\r\n    overflow: hidden;\r\n}\r\n.video-container iframe,\r\n.video-container object,\r\n.video-container embed {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.progress {\r\n    position: relative;\r\n    height: 4px;\r\n    display: block;\r\n    width: 100%;\r\n    background-color: #acece6;\r\n    border-radius: 2px;\r\n    margin: 0.5rem 0 1rem 0;\r\n    overflow: hidden;\r\n}\r\n.progress .determinate {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    background-color: #26a69a;\r\n    -webkit-transition: width .3s linear;\r\n    transition: width .3s linear;\r\n}\r\n.progress .indeterminate {\r\n    background-color: #26a69a;\r\n}\r\n.progress .indeterminate:before {\r\n    content: '';\r\n    position: absolute;\r\n    background-color: inherit;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    will-change: left, right;\r\n    -webkit-animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\r\n    animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\r\n}\r\n.progress .indeterminate:after {\r\n    content: '';\r\n    position: absolute;\r\n    background-color: inherit;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    will-change: left, right;\r\n    -webkit-animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\r\n    animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\r\n    -webkit-animation-delay: 1.15s;\r\n    animation-delay: 1.15s;\r\n}\r\n@-webkit-keyframes indeterminate {\r\n    0% {\r\n        left: -35%;\r\n        right: 100%;\r\n    }\r\n    60% {\r\n        left: 100%;\r\n        right: -90%;\r\n    }\r\n    100% {\r\n        left: 100%;\r\n        right: -90%;\r\n    }\r\n}\r\n@keyframes indeterminate {\r\n    0% {\r\n        left: -35%;\r\n        right: 100%;\r\n    }\r\n    60% {\r\n        left: 100%;\r\n        right: -90%;\r\n    }\r\n    100% {\r\n        left: 100%;\r\n        right: -90%;\r\n    }\r\n}\r\n@-webkit-keyframes indeterminate-short {\r\n    0% {\r\n        left: -200%;\r\n        right: 100%;\r\n    }\r\n    60% {\r\n        left: 107%;\r\n        right: -8%;\r\n    }\r\n    100% {\r\n        left: 107%;\r\n        right: -8%;\r\n    }\r\n}\r\n@keyframes indeterminate-short {\r\n    0% {\r\n        left: -200%;\r\n        right: 100%;\r\n    }\r\n    60% {\r\n        left: 107%;\r\n        right: -8%;\r\n    }\r\n    100% {\r\n        left: 107%;\r\n        right: -8%;\r\n    }\r\n}\r\n/*******************\r\n    Utility Classes\r\n  *******************/\r\n.hide {\r\n    display: none !important;\r\n}\r\n.left-align {\r\n    text-align: left;\r\n}\r\n.right-align {\r\n    text-align: right;\r\n}\r\n.center,\r\n.center-align {\r\n    text-align: center;\r\n}\r\n.left {\r\n    float: left !important;\r\n}\r\n.right {\r\n    float: right !important;\r\n}\r\n.no-select,\r\ninput[type=range],\r\ninput[type=range]+.thumb {\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}\r\n.circle {\r\n    border-radius: 50%;\r\n}\r\n.center-block {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.truncate {\r\n    display: block;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n.no-padding {\r\n    padding: 0 !important;\r\n}\r\nspan.badge {\r\n    min-width: 3rem;\r\n    padding: 0 6px;\r\n    margin-left: 14px;\r\n    text-align: center;\r\n    font-size: 1rem;\r\n    line-height: 22px;\r\n    height: 22px;\r\n    color: #757575;\r\n    float: right;\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}\r\nspan.badge.new {\r\n    font-weight: 300;\r\n    font-size: 0.8rem;\r\n    color: #fff;\r\n    background-color: #26a69a;\r\n    border-radius: 2px;\r\n}\r\nspan.badge.new:after {\r\n    content: \" new\";\r\n}\r\nspan.badge[data-badge-caption]::after {\r\n    content: \" \" attr(data-badge-caption);\r\n}\r\nnav ul a span.badge {\r\n    display: inline-block;\r\n    float: none;\r\n    margin-left: 4px;\r\n    line-height: 22px;\r\n    height: 22px;\r\n    -webkit-font-smoothing: auto;\r\n}\r\n.collection-item span.badge {\r\n    margin-top: calc(0.75rem - 11px);\r\n}\r\n.collapsible span.badge {\r\n    margin-left: auto;\r\n}\r\n.sidenav span.badge {\r\n    margin-top: calc(24px - 11px);\r\n}\r\ntable span.badge {\r\n    display: inline-block;\r\n    float: none;\r\n    margin-left: auto;\r\n}\r\n/* This is needed for some mobile phones to display the Google Icon font properly */\r\n.material-icons {\r\n    text-rendering: optimizeLegibility;\r\n    -webkit-font-feature-settings: 'liga';\r\n    font-feature-settings: 'liga';\r\n}\r\n.container {\r\n    margin: 0 auto;\r\n    max-width: 1280px;\r\n    width: 90%;\r\n}\r\n@media only screen and (min-width: 601px) {\r\n    .container {\r\n        width: 85%;\r\n    }\r\n}\r\n@media only screen and (min-width: 993px) {\r\n    .container {\r\n        width: 70%;\r\n    }\r\n}\r\n.col .row {\r\n    margin-left: -0.75rem;\r\n    margin-right: -0.75rem;\r\n}\r\n.section {\r\n    padding-top: 1rem;\r\n    padding-bottom: 1rem;\r\n}\r\n.section.no-pad {\r\n    padding: 0;\r\n}\r\n.section.no-pad-bot {\r\n    padding-bottom: 0;\r\n}\r\n.section.no-pad-top {\r\n    padding-top: 0;\r\n}\r\n.row {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-bottom: 20px;\r\n}\r\n.row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n}\r\n.row .col {\r\n    float: left;\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    padding: 0 0.75rem;\r\n    min-height: 1px;\r\n}\r\n.row .col[class*=\"push-\"],\r\n.row .col[class*=\"pull-\"] {\r\n    position: relative;\r\n}\r\n.row .col.s1 {\r\n    width: 8.3333333333%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n}\r\n.row .col.s2 {\r\n    width: 16.6666666667%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n}\r\n.row .col.s3 {\r\n    width: 25%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n}\r\n.row .col.s4 {\r\n    width: 33.3333333333%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n}\r\n.row .col.s5 {\r\n    width: 41.6666666667%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n}\r\n.row .col.s6 {\r\n    width: 50%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n}\r\n.row .col.s7 {\r\n    width: 58.3333333333%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n}\r\n.row .col.s8 {\r\n    width: 66.6666666667%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n}\r\n.row .col.s9 {\r\n    width: 75%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n}\r\n.row .col.s10 {\r\n    width: 83.3333333333%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n}\r\n.row .col.s11 {\r\n    width: 91.6666666667%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n}\r\n.row .col.s12 {\r\n    width: 100%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n}\r\n.row .col.offset-s1 {\r\n    margin-left: 8.3333333333%;\r\n}\r\n.row .col.pull-s1 {\r\n    right: 8.3333333333%;\r\n}\r\n.row .col.push-s1 {\r\n    left: 8.3333333333%;\r\n}\r\n.row .col.offset-s2 {\r\n    margin-left: 16.6666666667%;\r\n}\r\n.row .col.pull-s2 {\r\n    right: 16.6666666667%;\r\n}\r\n.row .col.push-s2 {\r\n    left: 16.6666666667%;\r\n}\r\n.row .col.offset-s3 {\r\n    margin-left: 25%;\r\n}\r\n.row .col.pull-s3 {\r\n    right: 25%;\r\n}\r\n.row .col.push-s3 {\r\n    left: 25%;\r\n}\r\n.row .col.offset-s4 {\r\n    margin-left: 33.3333333333%;\r\n}\r\n.row .col.pull-s4 {\r\n    right: 33.3333333333%;\r\n}\r\n.row .col.push-s4 {\r\n    left: 33.3333333333%;\r\n}\r\n.row .col.offset-s5 {\r\n    margin-left: 41.6666666667%;\r\n}\r\n.row .col.pull-s5 {\r\n    right: 41.6666666667%;\r\n}\r\n.row .col.push-s5 {\r\n    left: 41.6666666667%;\r\n}\r\n.row .col.offset-s6 {\r\n    margin-left: 50%;\r\n}\r\n.row .col.pull-s6 {\r\n    right: 50%;\r\n}\r\n.row .col.push-s6 {\r\n    left: 50%;\r\n}\r\n.row .col.offset-s7 {\r\n    margin-left: 58.3333333333%;\r\n}\r\n.row .col.pull-s7 {\r\n    right: 58.3333333333%;\r\n}\r\n.row .col.push-s7 {\r\n    left: 58.3333333333%;\r\n}\r\n.row .col.offset-s8 {\r\n    margin-left: 66.6666666667%;\r\n}\r\n.row .col.pull-s8 {\r\n    right: 66.6666666667%;\r\n}\r\n.row .col.push-s8 {\r\n    left: 66.6666666667%;\r\n}\r\n.row .col.offset-s9 {\r\n    margin-left: 75%;\r\n}\r\n.row .col.pull-s9 {\r\n    right: 75%;\r\n}\r\n.row .col.push-s9 {\r\n    left: 75%;\r\n}\r\n.row .col.offset-s10 {\r\n    margin-left: 83.3333333333%;\r\n}\r\n.row .col.pull-s10 {\r\n    right: 83.3333333333%;\r\n}\r\n.row .col.push-s10 {\r\n    left: 83.3333333333%;\r\n}\r\n.row .col.offset-s11 {\r\n    margin-left: 91.6666666667%;\r\n}\r\n.row .col.pull-s11 {\r\n    right: 91.6666666667%;\r\n}\r\n.row .col.push-s11 {\r\n    left: 91.6666666667%;\r\n}\r\n.row .col.offset-s12 {\r\n    margin-left: 100%;\r\n}\r\n.row .col.pull-s12 {\r\n    right: 100%;\r\n}\r\n.row .col.push-s12 {\r\n    left: 100%;\r\n}\r\n@media only screen and (min-width: 601px) {\r\n    .row .col.m1 {\r\n        width: 8.3333333333%;\r\n        margin-left: auto;\r\n        left: auto;\r\n        right: auto;\r\n    }\r\n    .row .col.m2 {\r\n        width: 16.6666666667%;\r\n        margin-left: auto;\r\n        left: auto;\r\n        right: auto;\r\n    }\r\n    .row .col.m3 {\r\n        width: 25%;\r\n        margin-left: auto;\r\n        left: auto;\r\n        right: auto;\r\n    }\r\n    .row .col.m4 {\r\n        width: 33.3333333333%;\r\n        margin-left: auto;\r\n        left: auto;\r\n        right: auto;\r\n    }\r\n    .row .col.m5 {\r\n        width: 41.6666666667%;\r\n        margin-left: auto;\r\n        left: auto;\r\n        right: auto;\r\n    }\r\n    .row .col.m6 {\r\n        width: 50%;\r\n        margin-left: auto;\r\n        left: auto;\r\n        right: auto;\r\n    }\r\n    .row .col.m7 {\r\n        width: 58.3333333333%;\r\n        margin-left: auto;\r\n        left: auto;\r\n        right: auto;\r\n    }\r\n    .row .col.m8 {\r\n        width: 66.6666666667%;\r\n        margin-left: auto;\r\n        left: auto;\r\n        right: auto;\r\n    }\r\n    .row .col.m9 {\r\n        width: 75%;\r\n        margin-left: auto;\r\n        left: auto;\r\n        right: auto;\r\n    }\r\n    .row .col.m10 {\r\n        width: 83.3333333333%;\r\n        margin-left: auto;\r\n        left: auto;\r\n        right: auto;\r\n    }\r\n    .row .col.m11 {\r\n        width: 91.6666666667%;\r\n        margin-left: auto;\r\n        left: auto;\r\n        right: auto;\r\n    }\r\n    .row .col.m12 {\r\n        width: 100%;\r\n        margin-left: auto;\r\n        left: auto;\r\n        right: auto;\r\n    }\r\n    .row .col.offset-m1 {\r\n        margin-left: 8.3333333333%;\r\n    }\r\n    .row .col.pull-m1 {\r\n        right: 8.3333333333%;\r\n    }\r\n    .row .col.push-m1 {\r\n        left: 8.3333333333%;\r\n    }\r\n    .row .col.offset-m2 {\r\n        margin-left: 16.6666666667%;\r\n    }\r\n    .row .col.pull-m2 {\r\n        right: 16.6666666667%;\r\n    }\r\n    .row .col.push-m2 {\r\n        left: 16.6666666667%;\r\n    }\r\n    .row .col.offset-m3 {\r\n        margin-left: 25%;\r\n    }\r\n    .row .col.pull-m3 {\r\n        right: 25%;\r\n    }\r\n    .row .col.push-m3 {\r\n        left: 25%;\r\n    }\r\n    .row .col.offset-m4 {\r\n        margin-left: 33.3333333333%;\r\n    }\r\n    .row .col.pull-m4 {\r\n        right: 33.3333333333%;\r\n    }\r\n    .row .col.push-m4 {\r\n        left: 33.3333333333%;\r\n    }\r\n    .row .col.offset-m5 {\r\n        margin-left: 41.6666666667%;\r\n    }\r\n    .row .col.pull-m5 {\r\n        right: 41.6666666667%;\r\n    }\r\n    .row .col.push-m5 {\r\n        left: 41.6666666667%;\r\n    }\r\n    .row .col.offset-m6 {\r\n        margin-left: 50%;\r\n    }\r\n    .row .col.pull-m6 {\r\n        right: 50%;\r\n    }\r\n    .row .col.push-m6 {\r\n        left: 50%;\r\n    }\r\n    .row .col.offset-m7 {\r\n        margin-left: 58.3333333333%;\r\n    }\r\n    .row .col.pull-m7 {\r\n        right: 58.3333333333%;\r\n    }\r\n    .row .col.push-m7 {\r\n        left: 58.3333333333%;\r\n    }\r\n    .row .col.offset-m8 {\r\n        margin-left: 66.6666666667%;\r\n    }\r\n    .row .col.pull-m8 {\r\n        right: 66.6666666667%;\r\n    }\r\n    .row .col.push-m8 {\r\n        left: 66.6666666667%;\r\n    }\r\n    .row .col.offset-m9 {\r\n        margin-left: 75%;\r\n    }\r\n    .row .col.pull-m9 {\r\n        right: 75%;\r\n    }\r\n    .row .col.push-m9 {\r\n        left: 75%;\r\n    }\r\n    .row .col.offset-m10 {\r\n        margin-left: 83.3333333333%;\r\n    }\r\n    .row .col.pull-m10 {\r\n        right: 83.3333333333%;\r\n    }\r\n    .row .col.push-m10 {\r\n        left: 83.3333333333%;\r\n    }\r\n    .row .col.offset-m11 {\r\n        margin-left: 91.6666666667%;\r\n    }\r\n    .row .col.pull-m11 {\r\n        right: 91.6666666667%;\r\n    }\r\n    .row .col.push-m11 {\r\n        left: 91.6666666667%;\r\n    }\r\n    .row .col.offset-m12 {\r\n        margin-left: 100%;\r\n    }\r\n    .row .col.pull-m12 {\r\n        right: 100%;\r\n    }\r\n    .row .col.push-m12 {\r\n        left: 100%;\r\n    }\r\n}\r\n@media only screen and (min-width: 993px) {\r\n    .row .col.l1 {\r\n        width: 8.3333333333%;\r\n        margin-left: auto;\r\n        left: auto;\r\n        right: auto;\r\n    }\r\n    .row .col.l2 {\r\n        width: 16.6666666667%;\r\n        margin-left: auto;\r\n        left: auto;\r\n        right: auto;\r\n    }\r\n    .row .col.l3 {\r\n        width: 25%;\r\n        margin-left: auto;\r\n        left: auto;\r\n        right: auto;\r\n    }\r\n    .row .col.l4 {\r\n        width: 33.3333333333%;\r\n        margin-left: auto;\r\n        left: auto;\r\n        right: auto;\r\n    }\r\n    .row .col.l5 {\r\n        width: 41.6666666667%;\r\n        margin-left: auto;\r\n        left: auto;\r\n        right: auto;\r\n    }\r\n    .row .col.l6 {\r\n        width: 50%;\r\n        margin-left: auto;\r\n        left: auto;\r\n        right: auto;\r\n    }\r\n    .row .col.l7 {\r\n        width: 58.3333333333%;\r\n        margin-left: auto;\r\n        left: auto;\r\n        right: auto;\r\n    }\r\n    .row .col.l8 {\r\n        width: 66.6666666667%;\r\n        margin-left: auto;\r\n        left: auto;\r\n        right: auto;\r\n    }\r\n    .row .col.l9 {\r\n        width: 75%;\r\n        margin-left: auto;\r\n        left: auto;\r\n        right: auto;\r\n    }\r\n    .row .col.l10 {\r\n        width: 83.3333333333%;\r\n        margin-left: auto;\r\n        left: auto;\r\n        right: auto;\r\n    }\r\n    .row .col.l11 {\r\n        width: 91.6666666667%;\r\n        margin-left: auto;\r\n        left: auto;\r\n        right: auto;\r\n    }\r\n    .row .col.l12 {\r\n        width: 100%;\r\n        margin-left: auto;\r\n        left: auto;\r\n        right: auto;\r\n    }\r\n    .row .col.offset-l1 {\r\n        margin-left: 8.3333333333%;\r\n    }\r\n    .row .col.pull-l1 {\r\n        right: 8.3333333333%;\r\n    }\r\n    .row .col.push-l1 {\r\n        left: 8.3333333333%;\r\n    }\r\n    .row .col.offset-l2 {\r\n        margin-left: 16.6666666667%;\r\n    }\r\n    .row .col.pull-l2 {\r\n        right: 16.6666666667%;\r\n    }\r\n    .row .col.push-l2 {\r\n        left: 16.6666666667%;\r\n    }\r\n    .row .col.offset-l3 {\r\n        margin-left: 25%;\r\n    }\r\n    .row .col.pull-l3 {\r\n        right: 25%;\r\n    }\r\n    .row .col.push-l3 {\r\n        left: 25%;\r\n    }\r\n    .row .col.offset-l4 {\r\n        margin-left: 33.3333333333%;\r\n    }\r\n    .row .col.pull-l4 {\r\n        right: 33.3333333333%;\r\n    }\r\n    .row .col.push-l4 {\r\n        left: 33.3333333333%;\r\n    }\r\n    .row .col.offset-l5 {\r\n        margin-left: 41.6666666667%;\r\n    }\r\n    .row .col.pull-l5 {\r\n        right: 41.6666666667%;\r\n    }\r\n    .row .col.push-l5 {\r\n        left: 41.6666666667%;\r\n    }\r\n    .row .col.offset-l6 {\r\n        margin-left: 50%;\r\n    }\r\n    .row .col.pull-l6 {\r\n        right: 50%;\r\n    }\r\n    .row .col.push-l6 {\r\n        left: 50%;\r\n    }\r\n    .row .col.offset-l7 {\r\n        margin-left: 58.3333333333%;\r\n    }\r\n    .row .col.pull-l7 {\r\n        right: 58.3333333333%;\r\n    }\r\n    .row .col.push-l7 {\r\n        left: 58.3333333333%;\r\n    }\r\n    .row .col.offset-l8 {\r\n        margin-left: 66.6666666667%;\r\n    }\r\n    .row .col.pull-l8 {\r\n        right: 66.6666666667%;\r\n    }\r\n    .row .col.push-l8 {\r\n        left: 66.6666666667%;\r\n    }\r\n    .row .col.offset-l9 {\r\n        margin-left: 75%;\r\n    }\r\n    .row .col.pull-l9 {\r\n        right: 75%;\r\n    }\r\n    .row .col.push-l9 {\r\n        left: 75%;\r\n    }\r\n    .row .col.offset-l10 {\r\n        margin-left: 83.3333333333%;\r\n    }\r\n    .row .col.pull-l10 {\r\n        right: 83.3333333333%;\r\n    }\r\n    .row .col.push-l10 {\r\n        left: 83.3333333333%;\r\n    }\r\n    .row .col.offset-l11 {\r\n        margin-left: 91.6666666667%;\r\n    }\r\n    .row .col.pull-l11 {\r\n        right: 91.6666666667%;\r\n    }\r\n    .row .col.push-l11 {\r\n        left: 91.6666666667%;\r\n    }\r\n    .row .col.offset-l12 {\r\n        margin-left: 100%;\r\n    }\r\n    .row .col.pull-l12 {\r\n        right: 100%;\r\n    }\r\n    .row .col.push-l12 {\r\n        left: 100%;\r\n    }\r\n}\r\n@media only screen and (min-width: 1201px) {\r\n    .row .col.xl1 {\r\n        width: 8.3333333333%;\r\n        margin-left: auto;\r\n        left: auto;\r\n        right: auto;\r\n    }\r\n    .row .col.xl2 {\r\n        width: 16.6666666667%;\r\n        margin-left: auto;\r\n        left: auto;\r\n        right: auto;\r\n    }\r\n    .row .col.xl3 {\r\n        width: 25%;\r\n        margin-left: auto;\r\n        left: auto;\r\n        right: auto;\r\n    }\r\n    .row .col.xl4 {\r\n        width: 33.3333333333%;\r\n        margin-left: auto;\r\n        left: auto;\r\n        right: auto;\r\n    }\r\n    .row .col.xl5 {\r\n        width: 41.6666666667%;\r\n        margin-left: auto;\r\n        left: auto;\r\n        right: auto;\r\n    }\r\n    .row .col.xl6 {\r\n        width: 50%;\r\n        margin-left: auto;\r\n        left: auto;\r\n        right: auto;\r\n    }\r\n    .row .col.xl7 {\r\n        width: 58.3333333333%;\r\n        margin-left: auto;\r\n        left: auto;\r\n        right: auto;\r\n    }\r\n    .row .col.xl8 {\r\n        width: 66.6666666667%;\r\n        margin-left: auto;\r\n        left: auto;\r\n        right: auto;\r\n    }\r\n    .row .col.xl9 {\r\n        width: 75%;\r\n        margin-left: auto;\r\n        left: auto;\r\n        right: auto;\r\n    }\r\n    .row .col.xl10 {\r\n        width: 83.3333333333%;\r\n        margin-left: auto;\r\n        left: auto;\r\n        right: auto;\r\n    }\r\n    .row .col.xl11 {\r\n        width: 91.6666666667%;\r\n        margin-left: auto;\r\n        left: auto;\r\n        right: auto;\r\n    }\r\n    .row .col.xl12 {\r\n        width: 100%;\r\n        margin-left: auto;\r\n        left: auto;\r\n        right: auto;\r\n    }\r\n    .row .col.offset-xl1 {\r\n        margin-left: 8.3333333333%;\r\n    }\r\n    .row .col.pull-xl1 {\r\n        right: 8.3333333333%;\r\n    }\r\n    .row .col.push-xl1 {\r\n        left: 8.3333333333%;\r\n    }\r\n    .row .col.offset-xl2 {\r\n        margin-left: 16.6666666667%;\r\n    }\r\n    .row .col.pull-xl2 {\r\n        right: 16.6666666667%;\r\n    }\r\n    .row .col.push-xl2 {\r\n        left: 16.6666666667%;\r\n    }\r\n    .row .col.offset-xl3 {\r\n        margin-left: 25%;\r\n    }\r\n    .row .col.pull-xl3 {\r\n        right: 25%;\r\n    }\r\n    .row .col.push-xl3 {\r\n        left: 25%;\r\n    }\r\n    .row .col.offset-xl4 {\r\n        margin-left: 33.3333333333%;\r\n    }\r\n    .row .col.pull-xl4 {\r\n        right: 33.3333333333%;\r\n    }\r\n    .row .col.push-xl4 {\r\n        left: 33.3333333333%;\r\n    }\r\n    .row .col.offset-xl5 {\r\n        margin-left: 41.6666666667%;\r\n    }\r\n    .row .col.pull-xl5 {\r\n        right: 41.6666666667%;\r\n    }\r\n    .row .col.push-xl5 {\r\n        left: 41.6666666667%;\r\n    }\r\n    .row .col.offset-xl6 {\r\n        margin-left: 50%;\r\n    }\r\n    .row .col.pull-xl6 {\r\n        right: 50%;\r\n    }\r\n    .row .col.push-xl6 {\r\n        left: 50%;\r\n    }\r\n    .row .col.offset-xl7 {\r\n        margin-left: 58.3333333333%;\r\n    }\r\n    .row .col.pull-xl7 {\r\n        right: 58.3333333333%;\r\n    }\r\n    .row .col.push-xl7 {\r\n        left: 58.3333333333%;\r\n    }\r\n    .row .col.offset-xl8 {\r\n        margin-left: 66.6666666667%;\r\n    }\r\n    .row .col.pull-xl8 {\r\n        right: 66.6666666667%;\r\n    }\r\n    .row .col.push-xl8 {\r\n        left: 66.6666666667%;\r\n    }\r\n    .row .col.offset-xl9 {\r\n        margin-left: 75%;\r\n    }\r\n    .row .col.pull-xl9 {\r\n        right: 75%;\r\n    }\r\n    .row .col.push-xl9 {\r\n        left: 75%;\r\n    }\r\n    .row .col.offset-xl10 {\r\n        margin-left: 83.3333333333%;\r\n    }\r\n    .row .col.pull-xl10 {\r\n        right: 83.3333333333%;\r\n    }\r\n    .row .col.push-xl10 {\r\n        left: 83.3333333333%;\r\n    }\r\n    .row .col.offset-xl11 {\r\n        margin-left: 91.6666666667%;\r\n    }\r\n    .row .col.pull-xl11 {\r\n        right: 91.6666666667%;\r\n    }\r\n    .row .col.push-xl11 {\r\n        left: 91.6666666667%;\r\n    }\r\n    .row .col.offset-xl12 {\r\n        margin-left: 100%;\r\n    }\r\n    .row .col.pull-xl12 {\r\n        right: 100%;\r\n    }\r\n    .row .col.push-xl12 {\r\n        left: 100%;\r\n    }\r\n}\r\nnav {\r\n    color: #fff;\r\n    background-color: #ee6e73;\r\n    width: 100%;\r\n    height: 56px;\r\n    line-height: 56px;\r\n}\r\nnav.nav-extended {\r\n    height: auto;\r\n}\r\nnav.nav-extended .nav-wrapper {\r\n    min-height: 56px;\r\n    height: auto;\r\n}\r\nnav.nav-extended .nav-content {\r\n    position: relative;\r\n    line-height: normal;\r\n}\r\nnav a {\r\n    color: #fff;\r\n}\r\nnav i,\r\nnav [class^=\"mdi-\"],\r\nnav [class*=\"mdi-\"],\r\nnav i.material-icons {\r\n    display: block;\r\n    font-size: 24px;\r\n    height: 56px;\r\n    line-height: 56px;\r\n}\r\nnav .nav-wrapper {\r\n    position: relative;\r\n    height: 100%;\r\n}\r\n@media only screen and (min-width: 993px) {\r\n    nav a.sidenav-trigger {\r\n        display: none;\r\n    }\r\n}\r\nnav .sidenav-trigger {\r\n    float: left;\r\n    position: relative;\r\n    z-index: 1;\r\n    height: 56px;\r\n    margin: 0 18px;\r\n}\r\nnav .sidenav-trigger i {\r\n    height: 56px;\r\n    line-height: 56px;\r\n}\r\nnav .brand-logo {\r\n    position: absolute;\r\n    color: #fff;\r\n    display: inline-block;\r\n    font-size: 2.1rem;\r\n    padding: 0;\r\n}\r\nnav .brand-logo.center {\r\n    left: 50%;\r\n    -webkit-transform: translateX(-50%);\r\n    transform: translateX(-50%);\r\n}\r\n@media only screen and (max-width: 992px) {\r\n    nav .brand-logo {\r\n        left: 50%;\r\n        -webkit-transform: translateX(-50%);\r\n        transform: translateX(-50%);\r\n    }\r\n    nav .brand-logo.left,\r\n    nav .brand-logo.right {\r\n        padding: 0;\r\n        -webkit-transform: none;\r\n        transform: none;\r\n    }\r\n    nav .brand-logo.left {\r\n        left: 0.5rem;\r\n    }\r\n    nav .brand-logo.right {\r\n        right: 0.5rem;\r\n        left: auto;\r\n    }\r\n}\r\nnav .brand-logo.right {\r\n    right: 0.5rem;\r\n    padding: 0;\r\n}\r\nnav .brand-logo i,\r\nnav .brand-logo [class^=\"mdi-\"],\r\nnav .brand-logo [class*=\"mdi-\"],\r\nnav .brand-logo i.material-icons {\r\n    float: left;\r\n    margin-right: 15px;\r\n}\r\nnav .nav-title {\r\n    display: inline-block;\r\n    font-size: 32px;\r\n    padding: 28px 0;\r\n}\r\nnav ul {\r\n    margin: 0;\r\n}\r\nnav ul li {\r\n    -webkit-transition: background-color .3s;\r\n    transition: background-color .3s;\r\n    float: left;\r\n    padding: 0;\r\n}\r\nnav ul li.active {\r\n    background-color: rgba(0, 0, 0, 0.1);\r\n}\r\nnav ul a {\r\n    -webkit-transition: background-color .3s;\r\n    transition: background-color .3s;\r\n    font-size: 1rem;\r\n    color: #fff;\r\n    display: block;\r\n    padding: 0 15px;\r\n    cursor: pointer;\r\n}\r\nnav ul a.btn,\r\nnav ul a.btn-large,\r\nnav ul a.btn-small,\r\nnav ul a.btn-large,\r\nnav ul a.btn-flat,\r\nnav ul a.btn-floating {\r\n    margin-top: -2px;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n}\r\nnav ul a.btn>.material-icons,\r\nnav ul a.btn-large>.material-icons,\r\nnav ul a.btn-small>.material-icons,\r\nnav ul a.btn-large>.material-icons,\r\nnav ul a.btn-flat>.material-icons,\r\nnav ul a.btn-floating>.material-icons {\r\n    height: inherit;\r\n    line-height: inherit;\r\n}\r\nnav ul a:hover {\r\n    background-color: rgba(0, 0, 0, 0.1);\r\n}\r\nnav ul.left {\r\n    float: left;\r\n}\r\nnav form {\r\n    height: 100%;\r\n}\r\nnav .input-field {\r\n    margin: 0;\r\n    height: 100%;\r\n}\r\nnav .input-field input {\r\n    height: 100%;\r\n    font-size: 1.2rem;\r\n    border: none;\r\n    padding-left: 2rem;\r\n}\r\nnav .input-field input:focus,\r\nnav .input-field input[type=text]:valid,\r\nnav .input-field input[type=password]:valid,\r\nnav .input-field input[type=email]:valid,\r\nnav .input-field input[type=url]:valid,\r\nnav .input-field input[type=date]:valid {\r\n    border: none;\r\n    -webkit-box-shadow: none;\r\n    box-shadow: none;\r\n}\r\nnav .input-field label {\r\n    top: 0;\r\n    left: 0;\r\n}\r\nnav .input-field label i {\r\n    color: rgba(255, 255, 255, 0.7);\r\n    -webkit-transition: color .3s;\r\n    transition: color .3s;\r\n}\r\nnav .input-field label.active i {\r\n    color: #fff;\r\n}\r\n.navbar-fixed {\r\n    position: relative;\r\n    height: 56px;\r\n    z-index: 997;\r\n}\r\n.navbar-fixed nav {\r\n    position: fixed;\r\n}\r\n@media only screen and (min-width: 601px) {\r\n    nav.nav-extended .nav-wrapper {\r\n        min-height: 64px;\r\n    }\r\n    nav,\r\n    nav .nav-wrapper i,\r\n    nav a.sidenav-trigger,\r\n    nav a.sidenav-trigger i {\r\n        height: 64px;\r\n        line-height: 64px;\r\n    }\r\n    .navbar-fixed {\r\n        height: 64px;\r\n    }\r\n}\r\na {\r\n    text-decoration: none;\r\n}\r\nhtml {\r\n    line-height: 1.5;\r\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;\r\n    font-weight: normal;\r\n    color: rgba(0, 0, 0, 0.87);\r\n}\r\n@media only screen and (min-width: 0) {\r\n    html {\r\n        font-size: 14px;\r\n    }\r\n}\r\n@media only screen and (min-width: 992px) {\r\n    html {\r\n        font-size: 14.5px;\r\n    }\r\n}\r\n@media only screen and (min-width: 1200px) {\r\n    html {\r\n        font-size: 15px;\r\n    }\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n    font-weight: 400;\r\n    line-height: 1.3;\r\n}\r\nh1 a,\r\nh2 a,\r\nh3 a,\r\nh4 a,\r\nh5 a,\r\nh6 a {\r\n    font-weight: inherit;\r\n}\r\nh1 {\r\n    font-size: 4.2rem;\r\n    line-height: 110%;\r\n    margin: 2.8rem 0 1.68rem 0;\r\n}\r\nh2 {\r\n    font-size: 3.56rem;\r\n    line-height: 110%;\r\n    margin: 2.3733333333rem 0 1.424rem 0;\r\n}\r\nh3 {\r\n    font-size: 2.92rem;\r\n    line-height: 110%;\r\n    margin: 1.9466666667rem 0 1.168rem 0;\r\n}\r\nh4 {\r\n    font-size: 2.28rem;\r\n    line-height: 110%;\r\n    margin: 1.52rem 0 0.912rem 0;\r\n}\r\nh5 {\r\n    font-size: 1.64rem;\r\n    line-height: 110%;\r\n    margin: 1.0933333333rem 0 0.656rem 0;\r\n}\r\nh6 {\r\n    font-size: 1.15rem;\r\n    line-height: 110%;\r\n    margin: 0.7666666667rem 0 0.46rem 0;\r\n}\r\nem {\r\n    font-style: italic;\r\n}\r\nstrong {\r\n    font-weight: 500;\r\n}\r\nsmall {\r\n    font-size: 75%;\r\n}\r\n.light {\r\n    font-weight: 300;\r\n}\r\n.thin {\r\n    font-weight: 200;\r\n}\r\n@media only screen and (min-width: 360px) {\r\n    .flow-text {\r\n        font-size: 1.2rem;\r\n    }\r\n}\r\n@media only screen and (min-width: 390px) {\r\n    .flow-text {\r\n        font-size: 1.224rem;\r\n    }\r\n}\r\n@media only screen and (min-width: 420px) {\r\n    .flow-text {\r\n        font-size: 1.248rem;\r\n    }\r\n}\r\n@media only screen and (min-width: 450px) {\r\n    .flow-text {\r\n        font-size: 1.272rem;\r\n    }\r\n}\r\n@media only screen and (min-width: 480px) {\r\n    .flow-text {\r\n        font-size: 1.296rem;\r\n    }\r\n}\r\n@media only screen and (min-width: 510px) {\r\n    .flow-text {\r\n        font-size: 1.32rem;\r\n    }\r\n}\r\n@media only screen and (min-width: 540px) {\r\n    .flow-text {\r\n        font-size: 1.344rem;\r\n    }\r\n}\r\n@media only screen and (min-width: 570px) {\r\n    .flow-text {\r\n        font-size: 1.368rem;\r\n    }\r\n}\r\n@media only screen and (min-width: 600px) {\r\n    .flow-text {\r\n        font-size: 1.392rem;\r\n    }\r\n}\r\n@media only screen and (min-width: 630px) {\r\n    .flow-text {\r\n        font-size: 1.416rem;\r\n    }\r\n}\r\n@media only screen and (min-width: 660px) {\r\n    .flow-text {\r\n        font-size: 1.44rem;\r\n    }\r\n}\r\n@media only screen and (min-width: 690px) {\r\n    .flow-text {\r\n        font-size: 1.464rem;\r\n    }\r\n}\r\n@media only screen and (min-width: 720px) {\r\n    .flow-text {\r\n        font-size: 1.488rem;\r\n    }\r\n}\r\n@media only screen and (min-width: 750px) {\r\n    .flow-text {\r\n        font-size: 1.512rem;\r\n    }\r\n}\r\n@media only screen and (min-width: 780px) {\r\n    .flow-text {\r\n        font-size: 1.536rem;\r\n    }\r\n}\r\n@media only screen and (min-width: 810px) {\r\n    .flow-text {\r\n        font-size: 1.56rem;\r\n    }\r\n}\r\n@media only screen and (min-width: 840px) {\r\n    .flow-text {\r\n        font-size: 1.584rem;\r\n    }\r\n}\r\n@media only screen and (min-width: 870px) {\r\n    .flow-text {\r\n        font-size: 1.608rem;\r\n    }\r\n}\r\n@media only screen and (min-width: 900px) {\r\n    .flow-text {\r\n        font-size: 1.632rem;\r\n    }\r\n}\r\n@media only screen and (min-width: 930px) {\r\n    .flow-text {\r\n        font-size: 1.656rem;\r\n    }\r\n}\r\n@media only screen and (min-width: 960px) {\r\n    .flow-text {\r\n        font-size: 1.68rem;\r\n    }\r\n}\r\n@media only screen and (max-width: 360px) {\r\n    .flow-text {\r\n        font-size: 1.2rem;\r\n    }\r\n}\r\n.scale-transition {\r\n    -webkit-transition: -webkit-transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important;\r\n    transition: -webkit-transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important;\r\n    transition: transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important;\r\n    transition: transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63), -webkit-transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63) !important;\r\n}\r\n.scale-transition.scale-out {\r\n    -webkit-transform: scale(0);\r\n    transform: scale(0);\r\n    -webkit-transition: -webkit-transform .2s !important;\r\n    transition: -webkit-transform .2s !important;\r\n    transition: transform .2s !important;\r\n    transition: transform .2s, -webkit-transform .2s !important;\r\n}\r\n.scale-transition.scale-in {\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n}\r\n.card-panel {\r\n    -webkit-transition: -webkit-box-shadow .25s;\r\n    transition: -webkit-box-shadow .25s;\r\n    transition: box-shadow .25s;\r\n    transition: box-shadow .25s, -webkit-box-shadow .25s;\r\n    padding: 24px;\r\n    margin: 0.5rem 0 1rem 0;\r\n    border-radius: 2px;\r\n    background-color: #fff;\r\n}\r\n.card {\r\n    position: relative;\r\n    margin: 0.5rem 0 1rem 0;\r\n    background-color: #fff;\r\n    -webkit-transition: -webkit-box-shadow .25s;\r\n    transition: -webkit-box-shadow .25s;\r\n    transition: box-shadow .25s;\r\n    transition: box-shadow .25s, -webkit-box-shadow .25s;\r\n    border-radius: 2px;\r\n}\r\n.card .card-title {\r\n    font-size: 24px;\r\n    font-weight: 300;\r\n}\r\n.card .card-title.activator {\r\n    cursor: pointer;\r\n}\r\n.card.small,\r\n.card.medium,\r\n.card.large {\r\n    position: relative;\r\n}\r\n.card.small .card-image,\r\n.card.medium .card-image,\r\n.card.large .card-image {\r\n    max-height: 60%;\r\n    overflow: hidden;\r\n}\r\n.card.small .card-image+.card-content,\r\n.card.medium .card-image+.card-content,\r\n.card.large .card-image+.card-content {\r\n    max-height: 40%;\r\n}\r\n.card.small .card-content,\r\n.card.medium .card-content,\r\n.card.large .card-content {\r\n    max-height: 100%;\r\n    overflow: hidden;\r\n}\r\n.card.small .card-action,\r\n.card.medium .card-action,\r\n.card.large .card-action {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n.card.small {\r\n    height: 300px;\r\n}\r\n.card.medium {\r\n    height: 400px;\r\n}\r\n.card.large {\r\n    height: 500px;\r\n}\r\n.card.horizontal {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n.card.horizontal.small .card-image,\r\n.card.horizontal.medium .card-image,\r\n.card.horizontal.large .card-image {\r\n    height: 100%;\r\n    max-height: none;\r\n    overflow: visible;\r\n}\r\n.card.horizontal.small .card-image img,\r\n.card.horizontal.medium .card-image img,\r\n.card.horizontal.large .card-image img {\r\n    height: 100%;\r\n}\r\n.card.horizontal .card-image {\r\n    max-width: 50%;\r\n}\r\n.card.horizontal .card-image img {\r\n    border-radius: 2px 0 0 2px;\r\n    max-width: 100%;\r\n    width: auto;\r\n}\r\n.card.horizontal .card-stacked {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-direction: column;\r\n    flex-direction: column;\r\n    -webkit-box-flex: 1;\r\n    -ms-flex: 1;\r\n    flex: 1;\r\n    position: relative;\r\n}\r\n.card.horizontal .card-stacked .card-content {\r\n    -webkit-box-flex: 1;\r\n    -ms-flex-positive: 1;\r\n    flex-grow: 1;\r\n}\r\n.card.sticky-action .card-action {\r\n    z-index: 2;\r\n}\r\n.card.sticky-action .card-reveal {\r\n    z-index: 1;\r\n    padding-bottom: 64px;\r\n}\r\n.card .card-image {\r\n    position: relative;\r\n}\r\n.card .card-image img {\r\n    display: block;\r\n    border-radius: 2px 2px 0 0;\r\n    position: relative;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n}\r\n.card .card-image .card-title {\r\n    color: #fff;\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    max-width: 100%;\r\n    padding: 24px;\r\n}\r\n.card .card-content {\r\n    padding: 24px;\r\n    border-radius: 0 0 2px 2px;\r\n}\r\n.card .card-content p {\r\n    margin: 0;\r\n}\r\n.card .card-content .card-title {\r\n    display: block;\r\n    line-height: 32px;\r\n    margin-bottom: 8px;\r\n}\r\n.card .card-content .card-title i {\r\n    line-height: 32px;\r\n}\r\n.card .card-action {\r\n    background-color: inherit;\r\n    border-top: 1px solid rgba(160, 160, 160, 0.2);\r\n    position: relative;\r\n    padding: 16px 24px;\r\n}\r\n.card .card-action:last-child {\r\n    border-radius: 0 0 2px 2px;\r\n}\r\n.card .card-action a:not(.btn):not(.btn-large):not(.btn-small):not(.btn-large):not(.btn-floating) {\r\n    color: #ffab40;\r\n    margin-right: 24px;\r\n    -webkit-transition: color .3s ease;\r\n    transition: color .3s ease;\r\n    text-transform: uppercase;\r\n}\r\n.card .card-action a:not(.btn):not(.btn-large):not(.btn-small):not(.btn-large):not(.btn-floating):hover {\r\n    color: #ffd8a6;\r\n}\r\n.card .card-reveal {\r\n    padding: 24px;\r\n    position: absolute;\r\n    background-color: #fff;\r\n    width: 100%;\r\n    overflow-y: auto;\r\n    left: 0;\r\n    top: 100%;\r\n    height: 100%;\r\n    z-index: 3;\r\n    display: none;\r\n}\r\n.card .card-reveal .card-title {\r\n    cursor: pointer;\r\n    display: block;\r\n}\r\n#toast-container {\r\n    display: block;\r\n    position: fixed;\r\n    z-index: 10000;\r\n}\r\n@media only screen and (max-width: 600px) {\r\n    #toast-container {\r\n        min-width: 100%;\r\n        bottom: 0%;\r\n    }\r\n}\r\n@media only screen and (min-width: 601px) and (max-width: 992px) {\r\n    #toast-container {\r\n        left: 5%;\r\n        bottom: 7%;\r\n        max-width: 90%;\r\n    }\r\n}\r\n@media only screen and (min-width: 993px) {\r\n    #toast-container {\r\n        top: 10%;\r\n        right: 7%;\r\n        max-width: 86%;\r\n    }\r\n}\r\n.toast {\r\n    border-radius: 2px;\r\n    top: 35px;\r\n    width: auto;\r\n    margin-top: 10px;\r\n    position: relative;\r\n    max-width: 100%;\r\n    height: auto;\r\n    min-height: 48px;\r\n    line-height: 1.5em;\r\n    background-color: #323232;\r\n    padding: 10px 25px;\r\n    font-size: 1.1rem;\r\n    font-weight: 300;\r\n    color: #fff;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    -webkit-box-pack: justify;\r\n    -ms-flex-pack: justify;\r\n    justify-content: space-between;\r\n    cursor: default;\r\n}\r\n.toast .toast-action {\r\n    color: #eeff41;\r\n    font-weight: 500;\r\n    margin-right: -25px;\r\n    margin-left: 3rem;\r\n}\r\n.toast.rounded {\r\n    border-radius: 24px;\r\n}\r\n@media only screen and (max-width: 600px) {\r\n    .toast {\r\n        width: 100%;\r\n        border-radius: 0;\r\n    }\r\n}\r\n.tabs {\r\n    position: relative;\r\n    overflow-x: auto;\r\n    overflow-y: hidden;\r\n    height: 48px;\r\n    width: 100%;\r\n    background-color: #fff;\r\n    margin: 0 auto;\r\n    white-space: nowrap;\r\n}\r\n.tabs.tabs-transparent {\r\n    background-color: transparent;\r\n}\r\n.tabs.tabs-transparent .tab a,\r\n.tabs.tabs-transparent .tab.disabled a,\r\n.tabs.tabs-transparent .tab.disabled a:hover {\r\n    color: rgba(255, 255, 255, 0.7);\r\n}\r\n.tabs.tabs-transparent .tab a:hover,\r\n.tabs.tabs-transparent .tab a.active {\r\n    color: #fff;\r\n}\r\n.tabs.tabs-transparent .indicator {\r\n    background-color: #fff;\r\n}\r\n.tabs.tabs-fixed-width {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n.tabs.tabs-fixed-width .tab {\r\n    -webkit-box-flex: 1;\r\n    -ms-flex-positive: 1;\r\n    flex-grow: 1;\r\n}\r\n.tabs .tab {\r\n    display: inline-block;\r\n    text-align: center;\r\n    line-height: 48px;\r\n    height: 48px;\r\n    padding: 0;\r\n    margin: 0;\r\n    text-transform: uppercase;\r\n}\r\n.tabs .tab a {\r\n    color: rgba(238, 110, 115, 0.7);\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 0 24px;\r\n    font-size: 14px;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    -webkit-transition: color .28s ease, background-color .28s ease;\r\n    transition: color .28s ease, background-color .28s ease;\r\n}\r\n.tabs .tab a:focus,\r\n.tabs .tab a:focus.active {\r\n    background-color: rgba(246, 178, 181, 0.2);\r\n    outline: none;\r\n}\r\n.tabs .tab a:hover,\r\n.tabs .tab a.active {\r\n    background-color: transparent;\r\n    color: #ee6e73;\r\n}\r\n.tabs .tab.disabled a,\r\n.tabs .tab.disabled a:hover {\r\n    color: rgba(238, 110, 115, 0.4);\r\n    cursor: default;\r\n}\r\n.tabs .indicator {\r\n    position: absolute;\r\n    bottom: 0;\r\n    height: 2px;\r\n    background-color: #f6b2b5;\r\n    will-change: left, right;\r\n}\r\n@media only screen and (max-width: 992px) {\r\n    .tabs {\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n    }\r\n    .tabs .tab {\r\n        -webkit-box-flex: 1;\r\n        -ms-flex-positive: 1;\r\n        flex-grow: 1;\r\n    }\r\n    .tabs .tab a {\r\n        padding: 0 12px;\r\n    }\r\n}\r\n.material-tooltip {\r\n    padding: 10px 8px;\r\n    font-size: 1rem;\r\n    z-index: 2000;\r\n    background-color: transparent;\r\n    border-radius: 2px;\r\n    color: #fff;\r\n    min-height: 36px;\r\n    line-height: 120%;\r\n    opacity: 0;\r\n    position: absolute;\r\n    text-align: center;\r\n    max-width: calc(100% - 4px);\r\n    overflow: hidden;\r\n    left: 0;\r\n    top: 0;\r\n    pointer-events: none;\r\n    visibility: hidden;\r\n    background-color: #323232;\r\n}\r\n.backdrop {\r\n    position: absolute;\r\n    opacity: 0;\r\n    height: 7px;\r\n    width: 14px;\r\n    border-radius: 0 0 50% 50%;\r\n    background-color: #323232;\r\n    z-index: -1;\r\n    -webkit-transform-origin: 50% 0%;\r\n    transform-origin: 50% 0%;\r\n    visibility: hidden;\r\n}\r\n.btn,\r\n.btn-large,\r\n.btn-small,\r\n.btn-flat {\r\n    border: none;\r\n    border-radius: 2px;\r\n    display: inline-block;\r\n    height: 36px;\r\n    line-height: 36px;\r\n    padding: 0 16px;\r\n    text-transform: uppercase;\r\n    vertical-align: middle;\r\n    -webkit-tap-highlight-color: transparent;\r\n}\r\n.btn.disabled,\r\n.disabled.btn-large,\r\n.disabled.btn-small,\r\n.btn-floating.disabled,\r\n.btn-large.disabled,\r\n.btn-small.disabled,\r\n.btn-flat.disabled,\r\n.btn:disabled,\r\n.btn-large:disabled,\r\n.btn-small:disabled,\r\n.btn-floating:disabled,\r\n.btn-large:disabled,\r\n.btn-small:disabled,\r\n.btn-flat:disabled,\r\n.btn[disabled],\r\n.btn-large[disabled],\r\n.btn-small[disabled],\r\n.btn-floating[disabled],\r\n.btn-large[disabled],\r\n.btn-small[disabled],\r\n.btn-flat[disabled] {\r\n    pointer-events: none;\r\n    background-color: #DFDFDF !important;\r\n    -webkit-box-shadow: none;\r\n    box-shadow: none;\r\n    color: #9F9F9F !important;\r\n    cursor: default;\r\n}\r\n.btn.disabled:hover,\r\n.disabled.btn-large:hover,\r\n.disabled.btn-small:hover,\r\n.btn-floating.disabled:hover,\r\n.btn-large.disabled:hover,\r\n.btn-small.disabled:hover,\r\n.btn-flat.disabled:hover,\r\n.btn:disabled:hover,\r\n.btn-large:disabled:hover,\r\n.btn-small:disabled:hover,\r\n.btn-floating:disabled:hover,\r\n.btn-large:disabled:hover,\r\n.btn-small:disabled:hover,\r\n.btn-flat:disabled:hover,\r\n.btn[disabled]:hover,\r\n.btn-large[disabled]:hover,\r\n.btn-small[disabled]:hover,\r\n.btn-floating[disabled]:hover,\r\n.btn-large[disabled]:hover,\r\n.btn-small[disabled]:hover,\r\n.btn-flat[disabled]:hover {\r\n    background-color: #DFDFDF !important;\r\n    color: #9F9F9F !important;\r\n}\r\n.btn,\r\n.btn-large,\r\n.btn-small,\r\n.btn-floating,\r\n.btn-large,\r\n.btn-small,\r\n.btn-flat {\r\n    font-size: 14px;\r\n    outline: 0;\r\n}\r\n.btn i,\r\n.btn-large i,\r\n.btn-small i,\r\n.btn-floating i,\r\n.btn-large i,\r\n.btn-small i,\r\n.btn-flat i {\r\n    font-size: 1.3rem;\r\n    line-height: inherit;\r\n}\r\n.btn:focus,\r\n.btn-large:focus,\r\n.btn-small:focus,\r\n.btn-floating:focus {\r\n    background-color: #1d7d74;\r\n}\r\n.btn,\r\n.btn-large,\r\n.btn-small {\r\n    text-decoration: none;\r\n    color: #fff;\r\n    background-color: #26a69a;\r\n    text-align: center;\r\n    letter-spacing: .5px;\r\n    -webkit-transition: background-color .2s ease-out;\r\n    transition: background-color .2s ease-out;\r\n    cursor: pointer;\r\n}\r\n.btn:hover,\r\n.btn-large:hover,\r\n.btn-small:hover {\r\n    background-color: #2bbbad;\r\n}\r\n.btn-floating {\r\n    display: inline-block;\r\n    color: #fff;\r\n    position: relative;\r\n    overflow: hidden;\r\n    z-index: 1;\r\n    width: 40px;\r\n    height: 40px;\r\n    line-height: 40px;\r\n    padding: 0;\r\n    background-color: #26a69a;\r\n    border-radius: 50%;\r\n    -webkit-transition: background-color .3s;\r\n    transition: background-color .3s;\r\n    cursor: pointer;\r\n    vertical-align: middle;\r\n}\r\n.btn-floating:hover {\r\n    background-color: #26a69a;\r\n}\r\n.btn-floating:before {\r\n    border-radius: 0;\r\n}\r\n.btn-floating.btn-large {\r\n    width: 56px;\r\n    height: 56px;\r\n    padding: 0;\r\n}\r\n.btn-floating.btn-large.halfway-fab {\r\n    bottom: -28px;\r\n}\r\n.btn-floating.btn-large i {\r\n    line-height: 56px;\r\n}\r\n.btn-floating.btn-small {\r\n    width: 32.4px;\r\n    height: 32.4px;\r\n}\r\n.btn-floating.btn-small.halfway-fab {\r\n    bottom: -16.2px;\r\n}\r\n.btn-floating.btn-small i {\r\n    line-height: 32.4px;\r\n}\r\n.btn-floating.halfway-fab {\r\n    position: absolute;\r\n    right: 24px;\r\n    bottom: -20px;\r\n}\r\n.btn-floating.halfway-fab.left {\r\n    right: auto;\r\n    left: 24px;\r\n}\r\n.btn-floating i {\r\n    width: inherit;\r\n    display: inline-block;\r\n    text-align: center;\r\n    color: #fff;\r\n    font-size: 1.6rem;\r\n    line-height: 40px;\r\n}\r\nbutton.btn-floating {\r\n    border: none;\r\n}\r\n.fixed-action-btn {\r\n    position: fixed;\r\n    right: 23px;\r\n    bottom: 23px;\r\n    padding-top: 15px;\r\n    margin-bottom: 0;\r\n    z-index: 997;\r\n}\r\n.fixed-action-btn.active ul {\r\n    visibility: visible;\r\n}\r\n.fixed-action-btn.direction-left,\r\n.fixed-action-btn.direction-right {\r\n    padding: 0 0 0 15px;\r\n}\r\n.fixed-action-btn.direction-left ul,\r\n.fixed-action-btn.direction-right ul {\r\n    text-align: right;\r\n    right: 64px;\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n    transform: translateY(-50%);\r\n    height: 100%;\r\n    left: auto;\r\n    /*width 100% only goes to width of button container */\r\n    width: 500px;\r\n}\r\n.fixed-action-btn.direction-left ul li,\r\n.fixed-action-btn.direction-right ul li {\r\n    display: inline-block;\r\n    margin: 7.5px 15px 0 0;\r\n}\r\n.fixed-action-btn.direction-right {\r\n    padding: 0 15px 0 0;\r\n}\r\n.fixed-action-btn.direction-right ul {\r\n    text-align: left;\r\n    direction: rtl;\r\n    left: 64px;\r\n    right: auto;\r\n}\r\n.fixed-action-btn.direction-right ul li {\r\n    margin: 7.5px 0 0 15px;\r\n}\r\n.fixed-action-btn.direction-bottom {\r\n    padding: 0 0 15px 0;\r\n}\r\n.fixed-action-btn.direction-bottom ul {\r\n    top: 64px;\r\n    bottom: auto;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: reverse;\r\n    -ms-flex-direction: column-reverse;\r\n    flex-direction: column-reverse;\r\n}\r\n.fixed-action-btn.direction-bottom ul li {\r\n    margin: 15px 0 0 0;\r\n}\r\n.fixed-action-btn.toolbar {\r\n    padding: 0;\r\n    height: 56px;\r\n}\r\n.fixed-action-btn.toolbar.active>a i {\r\n    opacity: 0;\r\n}\r\n.fixed-action-btn.toolbar ul {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    top: 0;\r\n    bottom: 0;\r\n    z-index: 1;\r\n}\r\n.fixed-action-btn.toolbar ul li {\r\n    -webkit-box-flex: 1;\r\n    -ms-flex: 1;\r\n    flex: 1;\r\n    display: inline-block;\r\n    margin: 0;\r\n    height: 100%;\r\n    -webkit-transition: none;\r\n    transition: none;\r\n}\r\n.fixed-action-btn.toolbar ul li a {\r\n    display: block;\r\n    overflow: hidden;\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: transparent;\r\n    -webkit-box-shadow: none;\r\n    box-shadow: none;\r\n    color: #fff;\r\n    line-height: 56px;\r\n    z-index: 1;\r\n}\r\n.fixed-action-btn.toolbar ul li a i {\r\n    line-height: inherit;\r\n}\r\n.fixed-action-btn ul {\r\n    left: 0;\r\n    right: 0;\r\n    text-align: center;\r\n    position: absolute;\r\n    bottom: 64px;\r\n    margin: 0;\r\n    visibility: hidden;\r\n}\r\n.fixed-action-btn ul li {\r\n    margin-bottom: 15px;\r\n}\r\n.fixed-action-btn ul a.btn-floating {\r\n    opacity: 0;\r\n}\r\n.fixed-action-btn .fab-backdrop {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: -1;\r\n    width: 40px;\r\n    height: 40px;\r\n    background-color: #26a69a;\r\n    border-radius: 50%;\r\n    -webkit-transform: scale(0);\r\n    transform: scale(0);\r\n}\r\n.btn-flat {\r\n    -webkit-box-shadow: none;\r\n    box-shadow: none;\r\n    background-color: transparent;\r\n    color: #343434;\r\n    cursor: pointer;\r\n    -webkit-transition: background-color .2s;\r\n    transition: background-color .2s;\r\n}\r\n.btn-flat:focus,\r\n.btn-flat:hover {\r\n    -webkit-box-shadow: none;\r\n    box-shadow: none;\r\n}\r\n.btn-flat:focus {\r\n    background-color: rgba(0, 0, 0, 0.1);\r\n}\r\n.btn-flat.disabled,\r\n.btn-flat.btn-flat[disabled] {\r\n    background-color: transparent !important;\r\n    color: #b3b2b2 !important;\r\n    cursor: default;\r\n}\r\n.btn-large {\r\n    height: 54px;\r\n    line-height: 54px;\r\n    font-size: 15px;\r\n    padding: 0 28px;\r\n}\r\n.btn-large i {\r\n    font-size: 1.6rem;\r\n}\r\n.btn-small {\r\n    height: 32.4px;\r\n    line-height: 32.4px;\r\n    font-size: 13px;\r\n}\r\n.btn-small i {\r\n    font-size: 1.2rem;\r\n}\r\n.btn-block {\r\n    display: block;\r\n}\r\n.dropdown-content {\r\n    background-color: #fff;\r\n    margin: 0;\r\n    display: none;\r\n    min-width: 100px;\r\n    overflow-y: auto;\r\n    opacity: 0;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    z-index: 9999;\r\n    -webkit-transform-origin: 0 0;\r\n    transform-origin: 0 0;\r\n}\r\n.dropdown-content:focus {\r\n    outline: 0;\r\n}\r\n.dropdown-content li {\r\n    clear: both;\r\n    color: rgba(0, 0, 0, 0.87);\r\n    cursor: pointer;\r\n    min-height: 50px;\r\n    line-height: 1.5rem;\r\n    width: 100%;\r\n    text-align: left;\r\n}\r\n.dropdown-content li:hover,\r\n.dropdown-content li.active {\r\n    background-color: #eee;\r\n}\r\n.dropdown-content li:focus {\r\n    outline: none;\r\n}\r\n.dropdown-content li.divider {\r\n    min-height: 0;\r\n    height: 1px;\r\n}\r\n.dropdown-content li>a,\r\n.dropdown-content li>span {\r\n    font-size: 16px;\r\n    color: #26a69a;\r\n    display: block;\r\n    line-height: 22px;\r\n    padding: 14px 16px;\r\n}\r\n.dropdown-content li>span>label {\r\n    top: 1px;\r\n    left: 0;\r\n    height: 18px;\r\n}\r\n.dropdown-content li>a>i {\r\n    height: inherit;\r\n    line-height: inherit;\r\n    float: left;\r\n    margin: 0 24px 0 0;\r\n    width: 24px;\r\n}\r\nbody.keyboard-focused .dropdown-content li:focus {\r\n    background-color: #dadada;\r\n}\r\n.input-field.col .dropdown-content [type=\"checkbox\"]+label {\r\n    top: 1px;\r\n    left: 0;\r\n    height: 18px;\r\n    -webkit-transform: none;\r\n    transform: none;\r\n}\r\n.dropdown-trigger {\r\n    cursor: pointer;\r\n}\r\n/*!\r\n   * Waves v0.6.0\r\n   * http://fian.my.id/Waves\r\n   *\r\n   * Copyright 2014 Alfiana E. Sibuea and other contributors\r\n   * Released under the MIT license\r\n   * https://github.com/fians/Waves/blob/master/LICENSE\r\n   */\r\n.waves-effect {\r\n    position: relative;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    overflow: hidden;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    -webkit-tap-highlight-color: transparent;\r\n    vertical-align: middle;\r\n    z-index: 1;\r\n    -webkit-transition: .3s ease-out;\r\n    transition: .3s ease-out;\r\n}\r\n.waves-effect .waves-ripple {\r\n    position: absolute;\r\n    border-radius: 50%;\r\n    width: 20px;\r\n    height: 20px;\r\n    margin-top: -10px;\r\n    margin-left: -10px;\r\n    opacity: 0;\r\n    background: rgba(0, 0, 0, 0.2);\r\n    -webkit-transition: all 0.7s ease-out;\r\n    transition: all 0.7s ease-out;\r\n    -webkit-transition-property: opacity, -webkit-transform;\r\n    transition-property: opacity, -webkit-transform;\r\n    transition-property: transform, opacity;\r\n    transition-property: transform, opacity, -webkit-transform;\r\n    -webkit-transform: scale(0);\r\n    transform: scale(0);\r\n    pointer-events: none;\r\n}\r\n.waves-effect.waves-light .waves-ripple {\r\n    background-color: rgba(255, 255, 255, 0.45);\r\n}\r\n.waves-effect.waves-red .waves-ripple {\r\n    background-color: rgba(244, 67, 54, 0.7);\r\n}\r\n.waves-effect.waves-yellow .waves-ripple {\r\n    background-color: rgba(255, 235, 59, 0.7);\r\n}\r\n.waves-effect.waves-orange .waves-ripple {\r\n    background-color: rgba(255, 152, 0, 0.7);\r\n}\r\n.waves-effect.waves-purple .waves-ripple {\r\n    background-color: rgba(156, 39, 176, 0.7);\r\n}\r\n.waves-effect.waves-green .waves-ripple {\r\n    background-color: rgba(76, 175, 80, 0.7);\r\n}\r\n.waves-effect.waves-teal .waves-ripple {\r\n    background-color: rgba(0, 150, 136, 0.7);\r\n}\r\n.waves-effect input[type=\"button\"],\r\n.waves-effect input[type=\"reset\"],\r\n.waves-effect input[type=\"submit\"] {\r\n    border: 0;\r\n    font-style: normal;\r\n    font-size: inherit;\r\n    text-transform: inherit;\r\n    background: none;\r\n}\r\n.waves-effect img {\r\n    position: relative;\r\n    z-index: -1;\r\n}\r\n.waves-notransition {\r\n    -webkit-transition: none !important;\r\n    transition: none !important;\r\n}\r\n.waves-circle {\r\n    -webkit-transform: translateZ(0);\r\n    transform: translateZ(0);\r\n    -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);\r\n}\r\n.waves-input-wrapper {\r\n    border-radius: 0.2em;\r\n    vertical-align: bottom;\r\n}\r\n.waves-input-wrapper .waves-button-input {\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1;\r\n}\r\n.waves-circle {\r\n    text-align: center;\r\n    width: 2.5em;\r\n    height: 2.5em;\r\n    line-height: 2.5em;\r\n    border-radius: 50%;\r\n    -webkit-mask-image: none;\r\n}\r\n.waves-block {\r\n    display: block;\r\n}\r\n/* Firefox Bug: link not triggered */\r\n.waves-effect .waves-ripple {\r\n    z-index: -1;\r\n}\r\n.modal {\r\n    display: none;\r\n    position: fixed;\r\n    left: 0;\r\n    right: 0;\r\n    background-color: #fafafa;\r\n    padding: 0;\r\n    max-height: 70%;\r\n    width: 55%;\r\n    margin: auto;\r\n    overflow-y: auto;\r\n    border-radius: 2px;\r\n    will-change: top, opacity;\r\n}\r\n.modal:focus {\r\n    outline: none;\r\n}\r\n@media only screen and (max-width: 992px) {\r\n    .modal {\r\n        width: 80%;\r\n    }\r\n}\r\n.modal h1,\r\n.modal h2,\r\n.modal h3,\r\n.modal h4 {\r\n    margin-top: 0;\r\n}\r\n.modal .modal-content {\r\n    padding: 24px;\r\n}\r\n.modal .modal-close {\r\n    cursor: pointer;\r\n}\r\n.modal .modal-footer {\r\n    border-radius: 0 0 2px 2px;\r\n    background-color: #fafafa;\r\n    padding: 4px 6px;\r\n    height: 56px;\r\n    width: 100%;\r\n    text-align: right;\r\n}\r\n.modal .modal-footer .btn,\r\n.modal .modal-footer .btn-large,\r\n.modal .modal-footer .btn-small,\r\n.modal .modal-footer .btn-flat {\r\n    margin: 6px 0;\r\n}\r\n.modal-overlay {\r\n    position: fixed;\r\n    z-index: 999;\r\n    top: -25%;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    height: 125%;\r\n    width: 100%;\r\n    background: #000;\r\n    display: none;\r\n    will-change: opacity;\r\n}\r\n.modal.modal-fixed-footer {\r\n    padding: 0;\r\n    height: 70%;\r\n}\r\n.modal.modal-fixed-footer .modal-content {\r\n    position: absolute;\r\n    height: calc(100% - 56px);\r\n    max-height: 100%;\r\n    width: 100%;\r\n    overflow-y: auto;\r\n}\r\n.modal.modal-fixed-footer .modal-footer {\r\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n    position: absolute;\r\n    bottom: 0;\r\n}\r\n.modal.bottom-sheet {\r\n    top: auto;\r\n    bottom: -100%;\r\n    margin: 0;\r\n    width: 100%;\r\n    max-height: 45%;\r\n    border-radius: 0;\r\n    will-change: bottom, opacity;\r\n}\r\n.collapsible {\r\n    border-top: 1px solid #ddd;\r\n    border-right: 1px solid #ddd;\r\n    border-left: 1px solid #ddd;\r\n    margin: 0.5rem 0 1rem 0;\r\n}\r\n.collapsible-header {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    cursor: pointer;\r\n    -webkit-tap-highlight-color: transparent;\r\n    line-height: 1.5;\r\n    padding: 1rem;\r\n    background-color: #fff;\r\n    border-bottom: 1px solid #ddd;\r\n}\r\n.collapsible-header:focus {\r\n    outline: 0;\r\n}\r\n.collapsible-header i {\r\n    width: 2rem;\r\n    font-size: 1.6rem;\r\n    display: inline-block;\r\n    text-align: center;\r\n    margin-right: 1rem;\r\n}\r\n.keyboard-focused .collapsible-header:focus {\r\n    background-color: #eee;\r\n}\r\n.collapsible-body {\r\n    display: none;\r\n    border-bottom: 1px solid #ddd;\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    padding: 2rem;\r\n}\r\n.sidenav .collapsible,\r\n.sidenav.fixed .collapsible {\r\n    border: none;\r\n    -webkit-box-shadow: none;\r\n    box-shadow: none;\r\n}\r\n.sidenav .collapsible li,\r\n.sidenav.fixed .collapsible li {\r\n    padding: 0;\r\n}\r\n.sidenav .collapsible-header,\r\n.sidenav.fixed .collapsible-header {\r\n    background-color: transparent;\r\n    border: none;\r\n    line-height: inherit;\r\n    height: inherit;\r\n    padding: 0 16px;\r\n}\r\n.sidenav .collapsible-header:hover,\r\n.sidenav.fixed .collapsible-header:hover {\r\n    background-color: rgba(0, 0, 0, 0.05);\r\n}\r\n.sidenav .collapsible-header i,\r\n.sidenav.fixed .collapsible-header i {\r\n    line-height: inherit;\r\n}\r\n.sidenav .collapsible-body,\r\n.sidenav.fixed .collapsible-body {\r\n    border: 0;\r\n    background-color: #fff;\r\n}\r\n.sidenav .collapsible-body li a,\r\n.sidenav.fixed .collapsible-body li a {\r\n    padding: 0 23.5px 0 31px;\r\n}\r\n.collapsible.popout {\r\n    border: none;\r\n    -webkit-box-shadow: none;\r\n    box-shadow: none;\r\n}\r\n.collapsible.popout>li {\r\n    -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\r\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\r\n    margin: 0 24px;\r\n    -webkit-transition: margin 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);\r\n    transition: margin 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);\r\n}\r\n.collapsible.popout>li.active {\r\n    -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\r\n    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\r\n    margin: 16px 0;\r\n}\r\n.chip {\r\n    display: inline-block;\r\n    height: 32px;\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    color: rgba(0, 0, 0, 0.6);\r\n    line-height: 32px;\r\n    padding: 0 12px;\r\n    border-radius: 16px;\r\n    background-color: #e4e4e4;\r\n    margin-bottom: 5px;\r\n    margin-right: 5px;\r\n}\r\n.chip:focus {\r\n    outline: none;\r\n    background-color: #26a69a;\r\n    color: #fff;\r\n}\r\n.chip>img {\r\n    float: left;\r\n    margin: 0 8px 0 -12px;\r\n    height: 32px;\r\n    width: 32px;\r\n    border-radius: 50%;\r\n}\r\n.chip .close {\r\n    cursor: pointer;\r\n    float: right;\r\n    font-size: 16px;\r\n    line-height: 32px;\r\n    padding-left: 8px;\r\n}\r\n.chips {\r\n    border: none;\r\n    border-bottom: 1px solid #9e9e9e;\r\n    -webkit-box-shadow: none;\r\n    box-shadow: none;\r\n    margin: 0 0 8px 0;\r\n    min-height: 45px;\r\n    outline: none;\r\n    -webkit-transition: all .3s;\r\n    transition: all .3s;\r\n}\r\n.chips.focus {\r\n    border-bottom: 1px solid #26a69a;\r\n    -webkit-box-shadow: 0 1px 0 0 #26a69a;\r\n    box-shadow: 0 1px 0 0 #26a69a;\r\n}\r\n.chips:hover {\r\n    cursor: text;\r\n}\r\n.chips .input {\r\n    background: none;\r\n    border: 0;\r\n    color: rgba(0, 0, 0, 0.6);\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    height: 3rem;\r\n    line-height: 32px;\r\n    outline: 0;\r\n    margin: 0;\r\n    padding: 0 !important;\r\n    width: 120px !important;\r\n}\r\n.chips .input:focus {\r\n    border: 0 !important;\r\n    -webkit-box-shadow: none !important;\r\n    box-shadow: none !important;\r\n}\r\n.chips .autocomplete-content {\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n}\r\n.prefix~.chips {\r\n    margin-left: 3rem;\r\n    width: 92%;\r\n    width: calc(100% - 3rem);\r\n}\r\n.chips:empty~label {\r\n    font-size: 0.8rem;\r\n    -webkit-transform: translateY(-140%);\r\n    transform: translateY(-140%);\r\n}\r\n.materialboxed {\r\n    display: block;\r\n    cursor: -webkit-zoom-in;\r\n    cursor: zoom-in;\r\n    position: relative;\r\n    -webkit-transition: opacity .4s;\r\n    transition: opacity .4s;\r\n    -webkit-backface-visibility: hidden;\r\n}\r\n.materialboxed:hover:not(.active) {\r\n    opacity: .8;\r\n}\r\n.materialboxed.active {\r\n    cursor: -webkit-zoom-out;\r\n    cursor: zoom-out;\r\n}\r\n#materialbox-overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-color: #292929;\r\n    z-index: 1000;\r\n    will-change: opacity;\r\n}\r\n.materialbox-caption {\r\n    position: fixed;\r\n    display: none;\r\n    color: #fff;\r\n    line-height: 50px;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    text-align: center;\r\n    padding: 0% 15%;\r\n    height: 50px;\r\n    z-index: 1000;\r\n    -webkit-font-smoothing: antialiased;\r\n}\r\nselect:focus {\r\n    outline: 1px solid #c9f3ef;\r\n}\r\nbutton:focus {\r\n    outline: none;\r\n    background-color: #2ab7a9;\r\n}\r\nlabel {\r\n    font-size: 0.8rem;\r\n    color: #9e9e9e;\r\n}\r\n/* Text Inputs + Textarea\r\n     ========================================================================== */\r\n/* Style Placeholders */\r\n::-webkit-input-placeholder {\r\n    color: #d1d1d1;\r\n}\r\n:-ms-input-placeholder {\r\n    color: #d1d1d1;\r\n}\r\n::-ms-input-placeholder {\r\n    color: #d1d1d1;\r\n}\r\n::placeholder {\r\n    color: #d1d1d1;\r\n}\r\n/* Text inputs */\r\ninput:not([type]),\r\ninput[type=text]:not(.browser-default),\r\ninput[type=password]:not(.browser-default),\r\ninput[type=email]:not(.browser-default),\r\ninput[type=url]:not(.browser-default),\r\ninput[type=time]:not(.browser-default),\r\ninput[type=date]:not(.browser-default),\r\ninput[type=datetime]:not(.browser-default),\r\ninput[type=datetime-local]:not(.browser-default),\r\ninput[type=tel]:not(.browser-default),\r\ninput[type=number]:not(.browser-default),\r\ninput[type=search]:not(.browser-default),\r\ntextarea.materialize-textarea {\r\n    background-color: transparent;\r\n    border: none;\r\n    border-bottom: 1px solid #9e9e9e;\r\n    border-radius: 0;\r\n    outline: none;\r\n    height: 3rem;\r\n    width: 100%;\r\n    font-size: 16px;\r\n    margin: 0 0 8px 0;\r\n    padding: 0;\r\n    -webkit-box-shadow: none;\r\n    box-shadow: none;\r\n    -webkit-box-sizing: content-box;\r\n    box-sizing: content-box;\r\n    -webkit-transition: border .3s, -webkit-box-shadow .3s;\r\n    transition: border .3s, -webkit-box-shadow .3s;\r\n    transition: box-shadow .3s, border .3s;\r\n    transition: box-shadow .3s, border .3s, -webkit-box-shadow .3s;\r\n}\r\ninput:not([type]):disabled,\r\ninput:not([type])[readonly=\"readonly\"],\r\ninput[type=text]:not(.browser-default):disabled,\r\ninput[type=text]:not(.browser-default)[readonly=\"readonly\"],\r\ninput[type=password]:not(.browser-default):disabled,\r\ninput[type=password]:not(.browser-default)[readonly=\"readonly\"],\r\ninput[type=email]:not(.browser-default):disabled,\r\ninput[type=email]:not(.browser-default)[readonly=\"readonly\"],\r\ninput[type=url]:not(.browser-default):disabled,\r\ninput[type=url]:not(.browser-default)[readonly=\"readonly\"],\r\ninput[type=time]:not(.browser-default):disabled,\r\ninput[type=time]:not(.browser-default)[readonly=\"readonly\"],\r\ninput[type=date]:not(.browser-default):disabled,\r\ninput[type=date]:not(.browser-default)[readonly=\"readonly\"],\r\ninput[type=datetime]:not(.browser-default):disabled,\r\ninput[type=datetime]:not(.browser-default)[readonly=\"readonly\"],\r\ninput[type=datetime-local]:not(.browser-default):disabled,\r\ninput[type=datetime-local]:not(.browser-default)[readonly=\"readonly\"],\r\ninput[type=tel]:not(.browser-default):disabled,\r\ninput[type=tel]:not(.browser-default)[readonly=\"readonly\"],\r\ninput[type=number]:not(.browser-default):disabled,\r\ninput[type=number]:not(.browser-default)[readonly=\"readonly\"],\r\ninput[type=search]:not(.browser-default):disabled,\r\ninput[type=search]:not(.browser-default)[readonly=\"readonly\"],\r\ntextarea.materialize-textarea:disabled,\r\ntextarea.materialize-textarea[readonly=\"readonly\"] {\r\n    color: rgba(0, 0, 0, 0.42);\r\n    border-bottom: 1px dotted rgba(0, 0, 0, 0.42);\r\n}\r\ninput:not([type]):disabled+label,\r\ninput:not([type])[readonly=\"readonly\"]+label,\r\ninput[type=text]:not(.browser-default):disabled+label,\r\ninput[type=text]:not(.browser-default)[readonly=\"readonly\"]+label,\r\ninput[type=password]:not(.browser-default):disabled+label,\r\ninput[type=password]:not(.browser-default)[readonly=\"readonly\"]+label,\r\ninput[type=email]:not(.browser-default):disabled+label,\r\ninput[type=email]:not(.browser-default)[readonly=\"readonly\"]+label,\r\ninput[type=url]:not(.browser-default):disabled+label,\r\ninput[type=url]:not(.browser-default)[readonly=\"readonly\"]+label,\r\ninput[type=time]:not(.browser-default):disabled+label,\r\ninput[type=time]:not(.browser-default)[readonly=\"readonly\"]+label,\r\ninput[type=date]:not(.browser-default):disabled+label,\r\ninput[type=date]:not(.browser-default)[readonly=\"readonly\"]+label,\r\ninput[type=datetime]:not(.browser-default):disabled+label,\r\ninput[type=datetime]:not(.browser-default)[readonly=\"readonly\"]+label,\r\ninput[type=datetime-local]:not(.browser-default):disabled+label,\r\ninput[type=datetime-local]:not(.browser-default)[readonly=\"readonly\"]+label,\r\ninput[type=tel]:not(.browser-default):disabled+label,\r\ninput[type=tel]:not(.browser-default)[readonly=\"readonly\"]+label,\r\ninput[type=number]:not(.browser-default):disabled+label,\r\ninput[type=number]:not(.browser-default)[readonly=\"readonly\"]+label,\r\ninput[type=search]:not(.browser-default):disabled+label,\r\ninput[type=search]:not(.browser-default)[readonly=\"readonly\"]+label,\r\ntextarea.materialize-textarea:disabled+label,\r\ntextarea.materialize-textarea[readonly=\"readonly\"]+label {\r\n    color: rgba(0, 0, 0, 0.42);\r\n}\r\ninput:not([type]):focus:not([readonly]),\r\ninput[type=text]:not(.browser-default):focus:not([readonly]),\r\ninput[type=password]:not(.browser-default):focus:not([readonly]),\r\ninput[type=email]:not(.browser-default):focus:not([readonly]),\r\ninput[type=url]:not(.browser-default):focus:not([readonly]),\r\ninput[type=time]:not(.browser-default):focus:not([readonly]),\r\ninput[type=date]:not(.browser-default):focus:not([readonly]),\r\ninput[type=datetime]:not(.browser-default):focus:not([readonly]),\r\ninput[type=datetime-local]:not(.browser-default):focus:not([readonly]),\r\ninput[type=tel]:not(.browser-default):focus:not([readonly]),\r\ninput[type=number]:not(.browser-default):focus:not([readonly]),\r\ninput[type=search]:not(.browser-default):focus:not([readonly]),\r\ntextarea.materialize-textarea:focus:not([readonly]) {\r\n    border-bottom: 1px solid #26a69a;\r\n    -webkit-box-shadow: 0 1px 0 0 #26a69a;\r\n    box-shadow: 0 1px 0 0 #26a69a;\r\n}\r\ninput:not([type]):focus:not([readonly])+label,\r\ninput[type=text]:not(.browser-default):focus:not([readonly])+label,\r\ninput[type=password]:not(.browser-default):focus:not([readonly])+label,\r\ninput[type=email]:not(.browser-default):focus:not([readonly])+label,\r\ninput[type=url]:not(.browser-default):focus:not([readonly])+label,\r\ninput[type=time]:not(.browser-default):focus:not([readonly])+label,\r\ninput[type=date]:not(.browser-default):focus:not([readonly])+label,\r\ninput[type=datetime]:not(.browser-default):focus:not([readonly])+label,\r\ninput[type=datetime-local]:not(.browser-default):focus:not([readonly])+label,\r\ninput[type=tel]:not(.browser-default):focus:not([readonly])+label,\r\ninput[type=number]:not(.browser-default):focus:not([readonly])+label,\r\ninput[type=search]:not(.browser-default):focus:not([readonly])+label,\r\ntextarea.materialize-textarea:focus:not([readonly])+label {\r\n    color: #26a69a;\r\n}\r\ninput:not([type]):focus.valid~label,\r\ninput[type=text]:not(.browser-default):focus.valid~label,\r\ninput[type=password]:not(.browser-default):focus.valid~label,\r\ninput[type=email]:not(.browser-default):focus.valid~label,\r\ninput[type=url]:not(.browser-default):focus.valid~label,\r\ninput[type=time]:not(.browser-default):focus.valid~label,\r\ninput[type=date]:not(.browser-default):focus.valid~label,\r\ninput[type=datetime]:not(.browser-default):focus.valid~label,\r\ninput[type=datetime-local]:not(.browser-default):focus.valid~label,\r\ninput[type=tel]:not(.browser-default):focus.valid~label,\r\ninput[type=number]:not(.browser-default):focus.valid~label,\r\ninput[type=search]:not(.browser-default):focus.valid~label,\r\ntextarea.materialize-textarea:focus.valid~label {\r\n    color: #4CAF50;\r\n}\r\ninput:not([type]):focus.invalid~label,\r\ninput[type=text]:not(.browser-default):focus.invalid~label,\r\ninput[type=password]:not(.browser-default):focus.invalid~label,\r\ninput[type=email]:not(.browser-default):focus.invalid~label,\r\ninput[type=url]:not(.browser-default):focus.invalid~label,\r\ninput[type=time]:not(.browser-default):focus.invalid~label,\r\ninput[type=date]:not(.browser-default):focus.invalid~label,\r\ninput[type=datetime]:not(.browser-default):focus.invalid~label,\r\ninput[type=datetime-local]:not(.browser-default):focus.invalid~label,\r\ninput[type=tel]:not(.browser-default):focus.invalid~label,\r\ninput[type=number]:not(.browser-default):focus.invalid~label,\r\ninput[type=search]:not(.browser-default):focus.invalid~label,\r\ntextarea.materialize-textarea:focus.invalid~label {\r\n    color: #F44336;\r\n}\r\ninput:not([type]).validate+label,\r\ninput[type=text]:not(.browser-default).validate+label,\r\ninput[type=password]:not(.browser-default).validate+label,\r\ninput[type=email]:not(.browser-default).validate+label,\r\ninput[type=url]:not(.browser-default).validate+label,\r\ninput[type=time]:not(.browser-default).validate+label,\r\ninput[type=date]:not(.browser-default).validate+label,\r\ninput[type=datetime]:not(.browser-default).validate+label,\r\ninput[type=datetime-local]:not(.browser-default).validate+label,\r\ninput[type=tel]:not(.browser-default).validate+label,\r\ninput[type=number]:not(.browser-default).validate+label,\r\ninput[type=search]:not(.browser-default).validate+label,\r\ntextarea.materialize-textarea.validate+label {\r\n    width: 100%;\r\n}\r\n/* Validation Sass Placeholders */\r\ninput.valid:not([type]),\r\ninput.valid:not([type]):focus,\r\ninput.valid[type=text]:not(.browser-default),\r\ninput.valid[type=text]:not(.browser-default):focus,\r\ninput.valid[type=password]:not(.browser-default),\r\ninput.valid[type=password]:not(.browser-default):focus,\r\ninput.valid[type=email]:not(.browser-default),\r\ninput.valid[type=email]:not(.browser-default):focus,\r\ninput.valid[type=url]:not(.browser-default),\r\ninput.valid[type=url]:not(.browser-default):focus,\r\ninput.valid[type=time]:not(.browser-default),\r\ninput.valid[type=time]:not(.browser-default):focus,\r\ninput.valid[type=date]:not(.browser-default),\r\ninput.valid[type=date]:not(.browser-default):focus,\r\ninput.valid[type=datetime]:not(.browser-default),\r\ninput.valid[type=datetime]:not(.browser-default):focus,\r\ninput.valid[type=datetime-local]:not(.browser-default),\r\ninput.valid[type=datetime-local]:not(.browser-default):focus,\r\ninput.valid[type=tel]:not(.browser-default),\r\ninput.valid[type=tel]:not(.browser-default):focus,\r\ninput.valid[type=number]:not(.browser-default),\r\ninput.valid[type=number]:not(.browser-default):focus,\r\ninput.valid[type=search]:not(.browser-default),\r\ninput.valid[type=search]:not(.browser-default):focus,\r\ntextarea.materialize-textarea.valid,\r\ntextarea.materialize-textarea.valid:focus,\r\n.select-wrapper.valid>input.select-dropdown {\r\n    border-bottom: 1px solid #4CAF50;\r\n    -webkit-box-shadow: 0 1px 0 0 #4CAF50;\r\n    box-shadow: 0 1px 0 0 #4CAF50;\r\n}\r\ninput.invalid:not([type]),\r\ninput.invalid:not([type]):focus,\r\ninput.invalid[type=text]:not(.browser-default),\r\ninput.invalid[type=text]:not(.browser-default):focus,\r\ninput.invalid[type=password]:not(.browser-default),\r\ninput.invalid[type=password]:not(.browser-default):focus,\r\ninput.invalid[type=email]:not(.browser-default),\r\ninput.invalid[type=email]:not(.browser-default):focus,\r\ninput.invalid[type=url]:not(.browser-default),\r\ninput.invalid[type=url]:not(.browser-default):focus,\r\ninput.invalid[type=time]:not(.browser-default),\r\ninput.invalid[type=time]:not(.browser-default):focus,\r\ninput.invalid[type=date]:not(.browser-default),\r\ninput.invalid[type=date]:not(.browser-default):focus,\r\ninput.invalid[type=datetime]:not(.browser-default),\r\ninput.invalid[type=datetime]:not(.browser-default):focus,\r\ninput.invalid[type=datetime-local]:not(.browser-default),\r\ninput.invalid[type=datetime-local]:not(.browser-default):focus,\r\ninput.invalid[type=tel]:not(.browser-default),\r\ninput.invalid[type=tel]:not(.browser-default):focus,\r\ninput.invalid[type=number]:not(.browser-default),\r\ninput.invalid[type=number]:not(.browser-default):focus,\r\ninput.invalid[type=search]:not(.browser-default),\r\ninput.invalid[type=search]:not(.browser-default):focus,\r\ntextarea.materialize-textarea.invalid,\r\ntextarea.materialize-textarea.invalid:focus,\r\n.select-wrapper.invalid>input.select-dropdown,\r\n.select-wrapper.invalid>input.select-dropdown:focus {\r\n    border-bottom: 1px solid #F44336;\r\n    -webkit-box-shadow: 0 1px 0 0 #F44336;\r\n    box-shadow: 0 1px 0 0 #F44336;\r\n}\r\ninput:not([type]).valid~.helper-text[data-success],\r\ninput:not([type]):focus.valid~.helper-text[data-success],\r\ninput:not([type]).invalid~.helper-text[data-error],\r\ninput:not([type]):focus.invalid~.helper-text[data-error],\r\ninput[type=text]:not(.browser-default).valid~.helper-text[data-success],\r\ninput[type=text]:not(.browser-default):focus.valid~.helper-text[data-success],\r\ninput[type=text]:not(.browser-default).invalid~.helper-text[data-error],\r\ninput[type=text]:not(.browser-default):focus.invalid~.helper-text[data-error],\r\ninput[type=password]:not(.browser-default).valid~.helper-text[data-success],\r\ninput[type=password]:not(.browser-default):focus.valid~.helper-text[data-success],\r\ninput[type=password]:not(.browser-default).invalid~.helper-text[data-error],\r\ninput[type=password]:not(.browser-default):focus.invalid~.helper-text[data-error],\r\ninput[type=email]:not(.browser-default).valid~.helper-text[data-success],\r\ninput[type=email]:not(.browser-default):focus.valid~.helper-text[data-success],\r\ninput[type=email]:not(.browser-default).invalid~.helper-text[data-error],\r\ninput[type=email]:not(.browser-default):focus.invalid~.helper-text[data-error],\r\ninput[type=url]:not(.browser-default).valid~.helper-text[data-success],\r\ninput[type=url]:not(.browser-default):focus.valid~.helper-text[data-success],\r\ninput[type=url]:not(.browser-default).invalid~.helper-text[data-error],\r\ninput[type=url]:not(.browser-default):focus.invalid~.helper-text[data-error],\r\ninput[type=time]:not(.browser-default).valid~.helper-text[data-success],\r\ninput[type=time]:not(.browser-default):focus.valid~.helper-text[data-success],\r\ninput[type=time]:not(.browser-default).invalid~.helper-text[data-error],\r\ninput[type=time]:not(.browser-default):focus.invalid~.helper-text[data-error],\r\ninput[type=date]:not(.browser-default).valid~.helper-text[data-success],\r\ninput[type=date]:not(.browser-default):focus.valid~.helper-text[data-success],\r\ninput[type=date]:not(.browser-default).invalid~.helper-text[data-error],\r\ninput[type=date]:not(.browser-default):focus.invalid~.helper-text[data-error],\r\ninput[type=datetime]:not(.browser-default).valid~.helper-text[data-success],\r\ninput[type=datetime]:not(.browser-default):focus.valid~.helper-text[data-success],\r\ninput[type=datetime]:not(.browser-default).invalid~.helper-text[data-error],\r\ninput[type=datetime]:not(.browser-default):focus.invalid~.helper-text[data-error],\r\ninput[type=datetime-local]:not(.browser-default).valid~.helper-text[data-success],\r\ninput[type=datetime-local]:not(.browser-default):focus.valid~.helper-text[data-success],\r\ninput[type=datetime-local]:not(.browser-default).invalid~.helper-text[data-error],\r\ninput[type=datetime-local]:not(.browser-default):focus.invalid~.helper-text[data-error],\r\ninput[type=tel]:not(.browser-default).valid~.helper-text[data-success],\r\ninput[type=tel]:not(.browser-default):focus.valid~.helper-text[data-success],\r\ninput[type=tel]:not(.browser-default).invalid~.helper-text[data-error],\r\ninput[type=tel]:not(.browser-default):focus.invalid~.helper-text[data-error],\r\ninput[type=number]:not(.browser-default).valid~.helper-text[data-success],\r\ninput[type=number]:not(.browser-default):focus.valid~.helper-text[data-success],\r\ninput[type=number]:not(.browser-default).invalid~.helper-text[data-error],\r\ninput[type=number]:not(.browser-default):focus.invalid~.helper-text[data-error],\r\ninput[type=search]:not(.browser-default).valid~.helper-text[data-success],\r\ninput[type=search]:not(.browser-default):focus.valid~.helper-text[data-success],\r\ninput[type=search]:not(.browser-default).invalid~.helper-text[data-error],\r\ninput[type=search]:not(.browser-default):focus.invalid~.helper-text[data-error],\r\ntextarea.materialize-textarea.valid~.helper-text[data-success],\r\ntextarea.materialize-textarea:focus.valid~.helper-text[data-success],\r\ntextarea.materialize-textarea.invalid~.helper-text[data-error],\r\ntextarea.materialize-textarea:focus.invalid~.helper-text[data-error],\r\n.select-wrapper.valid .helper-text[data-success],\r\n.select-wrapper.invalid~.helper-text[data-error] {\r\n    color: transparent;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    pointer-events: none;\r\n}\r\ninput:not([type]).valid~.helper-text:after,\r\ninput:not([type]):focus.valid~.helper-text:after,\r\ninput[type=text]:not(.browser-default).valid~.helper-text:after,\r\ninput[type=text]:not(.browser-default):focus.valid~.helper-text:after,\r\ninput[type=password]:not(.browser-default).valid~.helper-text:after,\r\ninput[type=password]:not(.browser-default):focus.valid~.helper-text:after,\r\ninput[type=email]:not(.browser-default).valid~.helper-text:after,\r\ninput[type=email]:not(.browser-default):focus.valid~.helper-text:after,\r\ninput[type=url]:not(.browser-default).valid~.helper-text:after,\r\ninput[type=url]:not(.browser-default):focus.valid~.helper-text:after,\r\ninput[type=time]:not(.browser-default).valid~.helper-text:after,\r\ninput[type=time]:not(.browser-default):focus.valid~.helper-text:after,\r\ninput[type=date]:not(.browser-default).valid~.helper-text:after,\r\ninput[type=date]:not(.browser-default):focus.valid~.helper-text:after,\r\ninput[type=datetime]:not(.browser-default).valid~.helper-text:after,\r\ninput[type=datetime]:not(.browser-default):focus.valid~.helper-text:after,\r\ninput[type=datetime-local]:not(.browser-default).valid~.helper-text:after,\r\ninput[type=datetime-local]:not(.browser-default):focus.valid~.helper-text:after,\r\ninput[type=tel]:not(.browser-default).valid~.helper-text:after,\r\ninput[type=tel]:not(.browser-default):focus.valid~.helper-text:after,\r\ninput[type=number]:not(.browser-default).valid~.helper-text:after,\r\ninput[type=number]:not(.browser-default):focus.valid~.helper-text:after,\r\ninput[type=search]:not(.browser-default).valid~.helper-text:after,\r\ninput[type=search]:not(.browser-default):focus.valid~.helper-text:after,\r\ntextarea.materialize-textarea.valid~.helper-text:after,\r\ntextarea.materialize-textarea:focus.valid~.helper-text:after,\r\n.select-wrapper.valid~.helper-text:after {\r\n    content: attr(data-success);\r\n    color: #4CAF50;\r\n}\r\ninput:not([type]).invalid~.helper-text:after,\r\ninput:not([type]):focus.invalid~.helper-text:after,\r\ninput[type=text]:not(.browser-default).invalid~.helper-text:after,\r\ninput[type=text]:not(.browser-default):focus.invalid~.helper-text:after,\r\ninput[type=password]:not(.browser-default).invalid~.helper-text:after,\r\ninput[type=password]:not(.browser-default):focus.invalid~.helper-text:after,\r\ninput[type=email]:not(.browser-default).invalid~.helper-text:after,\r\ninput[type=email]:not(.browser-default):focus.invalid~.helper-text:after,\r\ninput[type=url]:not(.browser-default).invalid~.helper-text:after,\r\ninput[type=url]:not(.browser-default):focus.invalid~.helper-text:after,\r\ninput[type=time]:not(.browser-default).invalid~.helper-text:after,\r\ninput[type=time]:not(.browser-default):focus.invalid~.helper-text:after,\r\ninput[type=date]:not(.browser-default).invalid~.helper-text:after,\r\ninput[type=date]:not(.browser-default):focus.invalid~.helper-text:after,\r\ninput[type=datetime]:not(.browser-default).invalid~.helper-text:after,\r\ninput[type=datetime]:not(.browser-default):focus.invalid~.helper-text:after,\r\ninput[type=datetime-local]:not(.browser-default).invalid~.helper-text:after,\r\ninput[type=datetime-local]:not(.browser-default):focus.invalid~.helper-text:after,\r\ninput[type=tel]:not(.browser-default).invalid~.helper-text:after,\r\ninput[type=tel]:not(.browser-default):focus.invalid~.helper-text:after,\r\ninput[type=number]:not(.browser-default).invalid~.helper-text:after,\r\ninput[type=number]:not(.browser-default):focus.invalid~.helper-text:after,\r\ninput[type=search]:not(.browser-default).invalid~.helper-text:after,\r\ninput[type=search]:not(.browser-default):focus.invalid~.helper-text:after,\r\ntextarea.materialize-textarea.invalid~.helper-text:after,\r\ntextarea.materialize-textarea:focus.invalid~.helper-text:after,\r\n.select-wrapper.invalid~.helper-text:after {\r\n    content: attr(data-error);\r\n    color: #F44336;\r\n}\r\ninput:not([type])+label:after,\r\ninput[type=text]:not(.browser-default)+label:after,\r\ninput[type=password]:not(.browser-default)+label:after,\r\ninput[type=email]:not(.browser-default)+label:after,\r\ninput[type=url]:not(.browser-default)+label:after,\r\ninput[type=time]:not(.browser-default)+label:after,\r\ninput[type=date]:not(.browser-default)+label:after,\r\ninput[type=datetime]:not(.browser-default)+label:after,\r\ninput[type=datetime-local]:not(.browser-default)+label:after,\r\ninput[type=tel]:not(.browser-default)+label:after,\r\ninput[type=number]:not(.browser-default)+label:after,\r\ninput[type=search]:not(.browser-default)+label:after,\r\ntextarea.materialize-textarea+label:after,\r\n.select-wrapper+label:after {\r\n    display: block;\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 0;\r\n    opacity: 0;\r\n    -webkit-transition: .2s opacity ease-out, .2s color ease-out;\r\n    transition: .2s opacity ease-out, .2s color ease-out;\r\n}\r\n.input-field {\r\n    position: relative;\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n}\r\n.input-field.inline {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    margin-left: 5px;\r\n}\r\n.input-field.inline input,\r\n.input-field.inline .select-dropdown {\r\n    margin-bottom: 1rem;\r\n}\r\n.input-field.col label {\r\n    left: 0.75rem;\r\n}\r\n.input-field.col .prefix~label,\r\n.input-field.col .prefix~.validate~label {\r\n    width: calc(100% - 3rem - 1.5rem);\r\n}\r\n.input-field>label {\r\n    color: #9e9e9e;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    font-size: 1rem;\r\n    cursor: text;\r\n    -webkit-transition: color .2s ease-out, -webkit-transform .2s ease-out;\r\n    transition: color .2s ease-out, -webkit-transform .2s ease-out;\r\n    transition: transform .2s ease-out, color .2s ease-out;\r\n    transition: transform .2s ease-out, color .2s ease-out, -webkit-transform .2s ease-out;\r\n    -webkit-transform-origin: 0% 100%;\r\n    transform-origin: 0% 100%;\r\n    text-align: initial;\r\n    -webkit-transform: translateY(12px);\r\n    transform: translateY(12px);\r\n}\r\n.input-field>label:not(.label-icon).active {\r\n    -webkit-transform: translateY(-14px) scale(0.8);\r\n    transform: translateY(-14px) scale(0.8);\r\n    -webkit-transform-origin: 0 0;\r\n    transform-origin: 0 0;\r\n}\r\n.input-field>input[type]:-webkit-autofill:not(.browser-default):not([type=\"search\"])+label,\r\n.input-field>input[type=date]:not(.browser-default)+label,\r\n.input-field>input[type=time]:not(.browser-default)+label {\r\n    -webkit-transform: translateY(-14px) scale(0.8);\r\n    transform: translateY(-14px) scale(0.8);\r\n    -webkit-transform-origin: 0 0;\r\n    transform-origin: 0 0;\r\n}\r\n.input-field .helper-text {\r\n    position: relative;\r\n    min-height: 18px;\r\n    display: block;\r\n    font-size: 12px;\r\n    color: rgba(0, 0, 0, 0.54);\r\n}\r\n.input-field .helper-text::after {\r\n    opacity: 1;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n.input-field .prefix {\r\n    position: absolute;\r\n    width: 3rem;\r\n    font-size: 2rem;\r\n    -webkit-transition: color .2s;\r\n    transition: color .2s;\r\n    top: 0.5rem;\r\n}\r\n.input-field .prefix.active {\r\n    color: #26a69a;\r\n}\r\n.input-field .prefix~input,\r\n.input-field .prefix~textarea,\r\n.input-field .prefix~label,\r\n.input-field .prefix~.validate~label,\r\n.input-field .prefix~.helper-text,\r\n.input-field .prefix~.autocomplete-content {\r\n    margin-left: 3rem;\r\n    width: 92%;\r\n    width: calc(100% - 3rem);\r\n}\r\n.input-field .prefix~label {\r\n    margin-left: 3rem;\r\n}\r\n@media only screen and (max-width: 992px) {\r\n    .input-field .prefix~input {\r\n        width: 86%;\r\n        width: calc(100% - 3rem);\r\n    }\r\n}\r\n@media only screen and (max-width: 600px) {\r\n    .input-field .prefix~input {\r\n        width: 80%;\r\n        width: calc(100% - 3rem);\r\n    }\r\n}\r\n/* Search Field */\r\n.input-field input[type=search] {\r\n    display: block;\r\n    line-height: inherit;\r\n    -webkit-transition: .3s background-color;\r\n    transition: .3s background-color;\r\n}\r\n.nav-wrapper .input-field input[type=search] {\r\n    height: inherit;\r\n    padding-left: 4rem;\r\n    width: calc(100% - 4rem);\r\n    border: 0;\r\n    -webkit-box-shadow: none;\r\n    box-shadow: none;\r\n}\r\n.input-field input[type=search]:focus:not(.browser-default) {\r\n    background-color: #fff;\r\n    border: 0;\r\n    -webkit-box-shadow: none;\r\n    box-shadow: none;\r\n    color: #444;\r\n}\r\n.input-field input[type=search]:focus:not(.browser-default)+label i,\r\n.input-field input[type=search]:focus:not(.browser-default)~.mdi-navigation-close,\r\n.input-field input[type=search]:focus:not(.browser-default)~.material-icons {\r\n    color: #444;\r\n}\r\n.input-field input[type=search]+.label-icon {\r\n    -webkit-transform: none;\r\n    transform: none;\r\n    left: 1rem;\r\n}\r\n.input-field input[type=search]~.mdi-navigation-close,\r\n.input-field input[type=search]~.material-icons {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 1rem;\r\n    color: transparent;\r\n    cursor: pointer;\r\n    font-size: 2rem;\r\n    -webkit-transition: .3s color;\r\n    transition: .3s color;\r\n}\r\n/* Textarea */\r\ntextarea {\r\n    width: 100%;\r\n    height: 3rem;\r\n    background-color: transparent;\r\n}\r\ntextarea.materialize-textarea {\r\n    line-height: normal;\r\n    overflow-y: hidden;\r\n    /* prevents scroll bar flash */\r\n    padding: .8rem 0 .8rem 0;\r\n    /* prevents text jump on Enter keypress */\r\n    resize: none;\r\n    min-height: 3rem;\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}\r\n.hiddendiv {\r\n    visibility: hidden;\r\n    white-space: pre-wrap;\r\n    word-wrap: break-word;\r\n    overflow-wrap: break-word;\r\n    /* future version of deprecated 'word-wrap' */\r\n    padding-top: 1.2rem;\r\n    /* prevents text jump on Enter keypress */\r\n    position: absolute;\r\n    top: 0;\r\n    z-index: -1;\r\n}\r\n/* Autocomplete */\r\n.autocomplete-content li .highlight {\r\n    color: #444;\r\n}\r\n.autocomplete-content li img {\r\n    height: 40px;\r\n    width: 40px;\r\n    margin: 5px 15px;\r\n}\r\n/* Character Counter */\r\n.character-counter {\r\n    min-height: 18px;\r\n}\r\n/* Radio Buttons\r\n     ========================================================================== */\r\n[type=\"radio\"]:not(:checked),\r\n[type=\"radio\"]:checked {\r\n    position: absolute;\r\n    opacity: 0;\r\n    pointer-events: none;\r\n}\r\n[type=\"radio\"]:not(:checked)+span,\r\n[type=\"radio\"]:checked+span {\r\n    position: relative;\r\n    padding-left: 35px;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    height: 25px;\r\n    line-height: 25px;\r\n    font-size: 1rem;\r\n    -webkit-transition: .28s ease;\r\n    transition: .28s ease;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}\r\n[type=\"radio\"]+span:before,\r\n[type=\"radio\"]+span:after {\r\n    content: '';\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    margin: 4px;\r\n    width: 16px;\r\n    height: 16px;\r\n    z-index: 0;\r\n    -webkit-transition: .28s ease;\r\n    transition: .28s ease;\r\n}\r\n/* Unchecked styles */\r\n[type=\"radio\"]:not(:checked)+span:before,\r\n[type=\"radio\"]:not(:checked)+span:after,\r\n[type=\"radio\"]:checked+span:before,\r\n[type=\"radio\"]:checked+span:after,\r\n[type=\"radio\"].with-gap:checked+span:before,\r\n[type=\"radio\"].with-gap:checked+span:after {\r\n    border-radius: 50%;\r\n}\r\n[type=\"radio\"]:not(:checked)+span:before,\r\n[type=\"radio\"]:not(:checked)+span:after {\r\n    border: 2px solid #5a5a5a;\r\n}\r\n[type=\"radio\"]:not(:checked)+span:after {\r\n    -webkit-transform: scale(0);\r\n    transform: scale(0);\r\n}\r\n/* Checked styles */\r\n[type=\"radio\"]:checked+span:before {\r\n    border: 2px solid transparent;\r\n}\r\n[type=\"radio\"]:checked+span:after,\r\n[type=\"radio\"].with-gap:checked+span:before,\r\n[type=\"radio\"].with-gap:checked+span:after {\r\n    border: 2px solid #26a69a;\r\n}\r\n[type=\"radio\"]:checked+span:after,\r\n[type=\"radio\"].with-gap:checked+span:after {\r\n    background-color: #26a69a;\r\n}\r\n[type=\"radio\"]:checked+span:after {\r\n    -webkit-transform: scale(1.02);\r\n    transform: scale(1.02);\r\n}\r\n/* Radio With gap */\r\n[type=\"radio\"].with-gap:checked+span:after {\r\n    -webkit-transform: scale(0.5);\r\n    transform: scale(0.5);\r\n}\r\n/* Focused styles */\r\n[type=\"radio\"].tabbed:focus+span:before {\r\n    -webkit-box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.1);\r\n    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.1);\r\n}\r\n/* Disabled Radio With gap */\r\n[type=\"radio\"].with-gap:disabled:checked+span:before {\r\n    border: 2px solid rgba(0, 0, 0, 0.42);\r\n}\r\n[type=\"radio\"].with-gap:disabled:checked+span:after {\r\n    border: none;\r\n    background-color: rgba(0, 0, 0, 0.42);\r\n}\r\n/* Disabled style */\r\n[type=\"radio\"]:disabled:not(:checked)+span:before,\r\n[type=\"radio\"]:disabled:checked+span:before {\r\n    background-color: transparent;\r\n    border-color: rgba(0, 0, 0, 0.42);\r\n}\r\n[type=\"radio\"]:disabled+span {\r\n    color: rgba(0, 0, 0, 0.42);\r\n}\r\n[type=\"radio\"]:disabled:not(:checked)+span:before {\r\n    border-color: rgba(0, 0, 0, 0.42);\r\n}\r\n[type=\"radio\"]:disabled:checked+span:after {\r\n    background-color: rgba(0, 0, 0, 0.42);\r\n    border-color: #949494;\r\n}\r\n/* Checkboxes\r\n     ========================================================================== */\r\n/* Remove default checkbox */\r\n[type=\"checkbox\"]:not(:checked),\r\n[type=\"checkbox\"]:checked {\r\n    position: absolute;\r\n    opacity: 0;\r\n    pointer-events: none;\r\n}\r\n[type=\"checkbox\"] {\r\n    /* checkbox aspect */\r\n}\r\n[type=\"checkbox\"]+span:not(.lever) {\r\n    position: relative;\r\n    padding-left: 35px;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    height: 25px;\r\n    line-height: 25px;\r\n    font-size: 1rem;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}\r\n[type=\"checkbox\"]+span:not(.lever):before,\r\n[type=\"checkbox\"]:not(.filled-in)+span:not(.lever):after {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 18px;\r\n    height: 18px;\r\n    z-index: 0;\r\n    border: 2px solid #5a5a5a;\r\n    border-radius: 1px;\r\n    margin-top: 3px;\r\n    -webkit-transition: .2s;\r\n    transition: .2s;\r\n}\r\n[type=\"checkbox\"]:not(.filled-in)+span:not(.lever):after {\r\n    border: 0;\r\n    -webkit-transform: scale(0);\r\n    transform: scale(0);\r\n}\r\n[type=\"checkbox\"]:not(:checked):disabled+span:not(.lever):before {\r\n    border: none;\r\n    background-color: rgba(0, 0, 0, 0.42);\r\n}\r\n[type=\"checkbox\"].tabbed:focus+span:not(.lever):after {\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n    border: 0;\r\n    border-radius: 50%;\r\n    -webkit-box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.1);\r\n    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.1);\r\n    background-color: rgba(0, 0, 0, 0.1);\r\n}\r\n[type=\"checkbox\"]:checked+span:not(.lever):before {\r\n    top: -4px;\r\n    left: -5px;\r\n    width: 12px;\r\n    height: 22px;\r\n    border-top: 2px solid transparent;\r\n    border-left: 2px solid transparent;\r\n    border-right: 2px solid #26a69a;\r\n    border-bottom: 2px solid #26a69a;\r\n    -webkit-transform: rotate(40deg);\r\n    transform: rotate(40deg);\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    -webkit-transform-origin: 100% 100%;\r\n    transform-origin: 100% 100%;\r\n}\r\n[type=\"checkbox\"]:checked:disabled+span:before {\r\n    border-right: 2px solid rgba(0, 0, 0, 0.42);\r\n    border-bottom: 2px solid rgba(0, 0, 0, 0.42);\r\n}\r\n/* Indeterminate checkbox */\r\n[type=\"checkbox\"]:indeterminate+span:not(.lever):before {\r\n    top: -11px;\r\n    left: -12px;\r\n    width: 10px;\r\n    height: 22px;\r\n    border-top: none;\r\n    border-left: none;\r\n    border-right: 2px solid #26a69a;\r\n    border-bottom: none;\r\n    -webkit-transform: rotate(90deg);\r\n    transform: rotate(90deg);\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    -webkit-transform-origin: 100% 100%;\r\n    transform-origin: 100% 100%;\r\n}\r\n[type=\"checkbox\"]:indeterminate:disabled+span:not(.lever):before {\r\n    border-right: 2px solid rgba(0, 0, 0, 0.42);\r\n    background-color: transparent;\r\n}\r\n[type=\"checkbox\"].filled-in+span:not(.lever):after {\r\n    border-radius: 2px;\r\n}\r\n[type=\"checkbox\"].filled-in+span:not(.lever):before,\r\n[type=\"checkbox\"].filled-in+span:not(.lever):after {\r\n    content: '';\r\n    left: 0;\r\n    position: absolute;\r\n    /* .1s delay is for check animation */\r\n    -webkit-transition: border .25s, background-color .25s, width .20s .1s, height .20s .1s, top .20s .1s, left .20s .1s;\r\n    transition: border .25s, background-color .25s, width .20s .1s, height .20s .1s, top .20s .1s, left .20s .1s;\r\n    z-index: 1;\r\n}\r\n[type=\"checkbox\"].filled-in:not(:checked)+span:not(.lever):before {\r\n    width: 0;\r\n    height: 0;\r\n    border: 3px solid transparent;\r\n    left: 6px;\r\n    top: 10px;\r\n    -webkit-transform: rotateZ(37deg);\r\n    transform: rotateZ(37deg);\r\n    -webkit-transform-origin: 100% 100%;\r\n    transform-origin: 100% 100%;\r\n}\r\n[type=\"checkbox\"].filled-in:not(:checked)+span:not(.lever):after {\r\n    height: 20px;\r\n    width: 20px;\r\n    background-color: transparent;\r\n    border: 2px solid #5a5a5a;\r\n    top: 0px;\r\n    z-index: 0;\r\n}\r\n[type=\"checkbox\"].filled-in:checked+span:not(.lever):before {\r\n    top: 0;\r\n    left: 1px;\r\n    width: 8px;\r\n    height: 13px;\r\n    border-top: 2px solid transparent;\r\n    border-left: 2px solid transparent;\r\n    border-right: 2px solid #fff;\r\n    border-bottom: 2px solid #fff;\r\n    -webkit-transform: rotateZ(37deg);\r\n    transform: rotateZ(37deg);\r\n    -webkit-transform-origin: 100% 100%;\r\n    transform-origin: 100% 100%;\r\n}\r\n[type=\"checkbox\"].filled-in:checked+span:not(.lever):after {\r\n    top: 0;\r\n    width: 20px;\r\n    height: 20px;\r\n    border: 2px solid #26a69a;\r\n    background-color: #26a69a;\r\n    z-index: 0;\r\n}\r\n[type=\"checkbox\"].filled-in.tabbed:focus+span:not(.lever):after {\r\n    border-radius: 2px;\r\n    border-color: #5a5a5a;\r\n    background-color: rgba(0, 0, 0, 0.1);\r\n}\r\n[type=\"checkbox\"].filled-in.tabbed:checked:focus+span:not(.lever):after {\r\n    border-radius: 2px;\r\n    background-color: #26a69a;\r\n    border-color: #26a69a;\r\n}\r\n[type=\"checkbox\"].filled-in:disabled:not(:checked)+span:not(.lever):before {\r\n    background-color: transparent;\r\n    border: 2px solid transparent;\r\n}\r\n[type=\"checkbox\"].filled-in:disabled:not(:checked)+span:not(.lever):after {\r\n    border-color: transparent;\r\n    background-color: #949494;\r\n}\r\n[type=\"checkbox\"].filled-in:disabled:checked+span:not(.lever):before {\r\n    background-color: transparent;\r\n}\r\n[type=\"checkbox\"].filled-in:disabled:checked+span:not(.lever):after {\r\n    background-color: #949494;\r\n    border-color: #949494;\r\n}\r\n/* Switch\r\n     ========================================================================== */\r\n.switch,\r\n.switch * {\r\n    -webkit-tap-highlight-color: transparent;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}\r\n.switch label {\r\n    cursor: pointer;\r\n}\r\n.switch label input[type=checkbox] {\r\n    opacity: 0;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n.switch label input[type=checkbox]:checked+.lever {\r\n    background-color: #84c7c1;\r\n}\r\n.switch label input[type=checkbox]:checked+.lever:before,\r\n.switch label input[type=checkbox]:checked+.lever:after {\r\n    left: 18px;\r\n}\r\n.switch label input[type=checkbox]:checked+.lever:after {\r\n    background-color: #26a69a;\r\n}\r\n.switch label .lever {\r\n    content: \"\";\r\n    display: inline-block;\r\n    position: relative;\r\n    width: 36px;\r\n    height: 14px;\r\n    background-color: rgba(0, 0, 0, 0.38);\r\n    border-radius: 15px;\r\n    margin-right: 10px;\r\n    -webkit-transition: background 0.3s ease;\r\n    transition: background 0.3s ease;\r\n    vertical-align: middle;\r\n    margin: 0 16px;\r\n}\r\n.switch label .lever:before,\r\n.switch label .lever:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: inline-block;\r\n    width: 20px;\r\n    height: 20px;\r\n    border-radius: 50%;\r\n    left: 0;\r\n    top: -3px;\r\n    -webkit-transition: left 0.3s ease, background .3s ease, -webkit-box-shadow 0.1s ease, -webkit-transform .1s ease;\r\n    transition: left 0.3s ease, background .3s ease, -webkit-box-shadow 0.1s ease, -webkit-transform .1s ease;\r\n    transition: left 0.3s ease, background .3s ease, box-shadow 0.1s ease, transform .1s ease;\r\n    transition: left 0.3s ease, background .3s ease, box-shadow 0.1s ease, transform .1s ease, -webkit-box-shadow 0.1s ease, -webkit-transform .1s ease;\r\n}\r\n.switch label .lever:before {\r\n    background-color: rgba(38, 166, 154, 0.15);\r\n}\r\n.switch label .lever:after {\r\n    background-color: #F1F1F1;\r\n    -webkit-box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\r\n    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\r\n}\r\ninput[type=checkbox]:checked:not(:disabled)~.lever:active::before,\r\ninput[type=checkbox]:checked:not(:disabled).tabbed:focus~.lever::before {\r\n    -webkit-transform: scale(2.4);\r\n    transform: scale(2.4);\r\n    background-color: rgba(38, 166, 154, 0.15);\r\n}\r\ninput[type=checkbox]:not(:disabled)~.lever:active:before,\r\ninput[type=checkbox]:not(:disabled).tabbed:focus~.lever::before {\r\n    -webkit-transform: scale(2.4);\r\n    transform: scale(2.4);\r\n    background-color: rgba(0, 0, 0, 0.08);\r\n}\r\n.switch input[type=checkbox][disabled]+.lever {\r\n    cursor: default;\r\n    background-color: rgba(0, 0, 0, 0.12);\r\n}\r\n.switch label input[type=checkbox][disabled]+.lever:after,\r\n.switch label input[type=checkbox][disabled]:checked+.lever:after {\r\n    background-color: #949494;\r\n}\r\n/* Select Field\r\n     ========================================================================== */\r\nselect {\r\n    display: none;\r\n}\r\nselect.browser-default {\r\n    display: block;\r\n}\r\nselect {\r\n    background-color: rgba(255, 255, 255, 0.9);\r\n    width: 100%;\r\n    padding: 5px;\r\n    border: 1px solid #f2f2f2;\r\n    border-radius: 2px;\r\n    height: 3rem;\r\n}\r\n.select-label {\r\n    position: absolute;\r\n}\r\n.select-wrapper {\r\n    position: relative;\r\n}\r\n.select-wrapper.valid+label,\r\n.select-wrapper.invalid+label {\r\n    width: 100%;\r\n    pointer-events: none;\r\n}\r\n.select-wrapper input.select-dropdown {\r\n    position: relative;\r\n    cursor: pointer;\r\n    background-color: transparent;\r\n    border: none;\r\n    border-bottom: 1px solid #9e9e9e;\r\n    outline: none;\r\n    height: 3rem;\r\n    line-height: 3rem;\r\n    width: 100%;\r\n    font-size: 16px;\r\n    margin: 0 0 8px 0;\r\n    padding: 0;\r\n    display: block;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    z-index: 1;\r\n}\r\n.select-wrapper input.select-dropdown:focus {\r\n    border-bottom: 1px solid #26a69a;\r\n}\r\n.select-wrapper .caret {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    margin: auto 0;\r\n    z-index: 0;\r\n    fill: rgba(0, 0, 0, 0.87);\r\n}\r\n.select-wrapper+label {\r\n    position: absolute;\r\n    top: -26px;\r\n    font-size: 0.8rem;\r\n}\r\nselect:disabled {\r\n    color: rgba(0, 0, 0, 0.42);\r\n}\r\n.select-wrapper.disabled+label {\r\n    color: rgba(0, 0, 0, 0.42);\r\n}\r\n.select-wrapper.disabled .caret {\r\n    fill: rgba(0, 0, 0, 0.42);\r\n}\r\n.select-wrapper input.select-dropdown:disabled {\r\n    color: rgba(0, 0, 0, 0.42);\r\n    cursor: default;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}\r\n.select-wrapper i {\r\n    color: rgba(0, 0, 0, 0.3);\r\n}\r\n.select-dropdown li.disabled,\r\n.select-dropdown li.disabled>span,\r\n.select-dropdown li.optgroup {\r\n    color: rgba(0, 0, 0, 0.3);\r\n    background-color: transparent;\r\n}\r\nbody.keyboard-focused .select-dropdown.dropdown-content li:focus {\r\n    background-color: rgba(0, 0, 0, 0.08);\r\n}\r\n.select-dropdown.dropdown-content li:hover {\r\n    background-color: rgba(0, 0, 0, 0.08);\r\n}\r\n.select-dropdown.dropdown-content li.selected {\r\n    background-color: rgba(0, 0, 0, 0.03);\r\n}\r\n.prefix~.select-wrapper {\r\n    margin-left: 3rem;\r\n    width: 92%;\r\n    width: calc(100% - 3rem);\r\n}\r\n.prefix~label {\r\n    margin-left: 3rem;\r\n}\r\n.select-dropdown li img {\r\n    height: 40px;\r\n    width: 40px;\r\n    margin: 5px 15px;\r\n    float: right;\r\n}\r\n.select-dropdown li.optgroup {\r\n    border-top: 1px solid #eee;\r\n}\r\n.select-dropdown li.optgroup.selected>span {\r\n    color: rgba(0, 0, 0, 0.7);\r\n}\r\n.select-dropdown li.optgroup>span {\r\n    color: rgba(0, 0, 0, 0.4);\r\n}\r\n.select-dropdown li.optgroup~li.optgroup-option {\r\n    padding-left: 1rem;\r\n}\r\n/* File Input\r\n     ========================================================================== */\r\n.file-field {\r\n    position: relative;\r\n}\r\n.file-field .file-path-wrapper {\r\n    overflow: hidden;\r\n    padding-left: 10px;\r\n}\r\n.file-field input.file-path {\r\n    width: 100%;\r\n}\r\n.file-field .btn,\r\n.file-field .btn-large,\r\n.file-field .btn-small {\r\n    float: left;\r\n    height: 3rem;\r\n    line-height: 3rem;\r\n}\r\n.file-field span {\r\n    cursor: pointer;\r\n}\r\n.file-field input[type=file] {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n    opacity: 0;\r\n    filter: alpha(opacity=0);\r\n}\r\n.file-field input[type=file]::-webkit-file-upload-button {\r\n    display: none;\r\n}\r\n/* Range\r\n     ========================================================================== */\r\n.range-field {\r\n    position: relative;\r\n}\r\ninput[type=range],\r\ninput[type=range]+.thumb {\r\n    cursor: pointer;\r\n}\r\ninput[type=range] {\r\n    position: relative;\r\n    background-color: transparent;\r\n    border: none;\r\n    outline: none;\r\n    width: 100%;\r\n    margin: 15px 0;\r\n    padding: 0;\r\n}\r\ninput[type=range]:focus {\r\n    outline: none;\r\n}\r\ninput[type=range]+.thumb {\r\n    position: absolute;\r\n    top: 10px;\r\n    left: 0;\r\n    border: none;\r\n    height: 0;\r\n    width: 0;\r\n    border-radius: 50%;\r\n    background-color: #26a69a;\r\n    margin-left: 7px;\r\n    -webkit-transform-origin: 50% 50%;\r\n    transform-origin: 50% 50%;\r\n    -webkit-transform: rotate(-45deg);\r\n    transform: rotate(-45deg);\r\n}\r\ninput[type=range]+.thumb .value {\r\n    display: block;\r\n    width: 30px;\r\n    text-align: center;\r\n    color: #26a69a;\r\n    font-size: 0;\r\n    -webkit-transform: rotate(45deg);\r\n    transform: rotate(45deg);\r\n}\r\ninput[type=range]+.thumb.active {\r\n    border-radius: 50% 50% 50% 0;\r\n}\r\ninput[type=range]+.thumb.active .value {\r\n    color: #fff;\r\n    margin-left: -1px;\r\n    margin-top: 8px;\r\n    font-size: 10px;\r\n}\r\ninput[type=range] {\r\n    -webkit-appearance: none;\r\n}\r\ninput[type=range]::-webkit-slider-runnable-track {\r\n    height: 3px;\r\n    background: #c2c0c2;\r\n    border: none;\r\n}\r\ninput[type=range]::-webkit-slider-thumb {\r\n    border: none;\r\n    height: 14px;\r\n    width: 14px;\r\n    border-radius: 50%;\r\n    background: #26a69a;\r\n    -webkit-transition: -webkit-box-shadow .3s;\r\n    transition: -webkit-box-shadow .3s;\r\n    transition: box-shadow .3s;\r\n    transition: box-shadow .3s, -webkit-box-shadow .3s;\r\n    -webkit-appearance: none;\r\n    background-color: #26a69a;\r\n    -webkit-transform-origin: 50% 50%;\r\n    transform-origin: 50% 50%;\r\n    margin: -5px 0 0 0;\r\n}\r\n.keyboard-focused input[type=range]:focus:not(.active)::-webkit-slider-thumb {\r\n    -webkit-box-shadow: 0 0 0 10px rgba(38, 166, 154, 0.26);\r\n    box-shadow: 0 0 0 10px rgba(38, 166, 154, 0.26);\r\n}\r\ninput[type=range] {\r\n    /* fix for FF unable to apply focus style bug  */\r\n    border: 1px solid white;\r\n    /*required for proper track sizing in FF*/\r\n}\r\ninput[type=range]::-moz-range-track {\r\n    height: 3px;\r\n    background: #c2c0c2;\r\n    border: none;\r\n}\r\ninput[type=range]::-moz-focus-inner {\r\n    border: 0;\r\n}\r\ninput[type=range]::-moz-range-thumb {\r\n    border: none;\r\n    height: 14px;\r\n    width: 14px;\r\n    border-radius: 50%;\r\n    background: #26a69a;\r\n    -webkit-transition: -webkit-box-shadow .3s;\r\n    transition: -webkit-box-shadow .3s;\r\n    transition: box-shadow .3s;\r\n    transition: box-shadow .3s, -webkit-box-shadow .3s;\r\n    margin-top: -5px;\r\n}\r\ninput[type=range]:-moz-focusring {\r\n    outline: 1px solid #fff;\r\n    outline-offset: -1px;\r\n}\r\n.keyboard-focused input[type=range]:focus:not(.active)::-moz-range-thumb {\r\n    box-shadow: 0 0 0 10px rgba(38, 166, 154, 0.26);\r\n}\r\ninput[type=range]::-ms-track {\r\n    height: 3px;\r\n    background: transparent;\r\n    border-color: transparent;\r\n    border-width: 6px 0;\r\n    /*remove default tick marks*/\r\n    color: transparent;\r\n}\r\ninput[type=range]::-ms-fill-lower {\r\n    background: #777;\r\n}\r\ninput[type=range]::-ms-fill-upper {\r\n    background: #ddd;\r\n}\r\ninput[type=range]::-ms-thumb {\r\n    border: none;\r\n    height: 14px;\r\n    width: 14px;\r\n    border-radius: 50%;\r\n    background: #26a69a;\r\n    -webkit-transition: -webkit-box-shadow .3s;\r\n    transition: -webkit-box-shadow .3s;\r\n    transition: box-shadow .3s;\r\n    transition: box-shadow .3s, -webkit-box-shadow .3s;\r\n}\r\n.keyboard-focused input[type=range]:focus:not(.active)::-ms-thumb {\r\n    box-shadow: 0 0 0 10px rgba(38, 166, 154, 0.26);\r\n}\r\n/***************\r\n      Nav List\r\n  ***************/\r\n.table-of-contents.fixed {\r\n    position: fixed;\r\n}\r\n.table-of-contents li {\r\n    padding: 2px 0;\r\n}\r\n.table-of-contents a {\r\n    display: inline-block;\r\n    font-weight: 300;\r\n    color: #757575;\r\n    padding-left: 16px;\r\n    height: 1.5rem;\r\n    line-height: 1.5rem;\r\n    letter-spacing: .4;\r\n    display: inline-block;\r\n}\r\n.table-of-contents a:hover {\r\n    color: #a8a8a8;\r\n    padding-left: 15px;\r\n    border-left: 1px solid #ee6e73;\r\n}\r\n.table-of-contents a.active {\r\n    font-weight: 500;\r\n    padding-left: 14px;\r\n    border-left: 2px solid #ee6e73;\r\n}\r\n.sidenav {\r\n    position: fixed;\r\n    width: 300px;\r\n    left: 0;\r\n    top: 0;\r\n    margin: 0;\r\n    -webkit-transform: translateX(-100%);\r\n    transform: translateX(-100%);\r\n    height: 100%;\r\n    height: calc(100% + 60px);\r\n    height: -moz-calc(100%);\r\n    padding-bottom: 60px;\r\n    background-color: #fff;\r\n    z-index: 999;\r\n    overflow-y: auto;\r\n    will-change: transform;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    -webkit-transform: translateX(-105%);\r\n    transform: translateX(-105%);\r\n}\r\n.sidenav.right-aligned {\r\n    right: 0;\r\n    -webkit-transform: translateX(105%);\r\n    transform: translateX(105%);\r\n    left: auto;\r\n    -webkit-transform: translateX(100%);\r\n    transform: translateX(100%);\r\n}\r\n.sidenav .collapsible {\r\n    margin: 0;\r\n}\r\n.sidenav li {\r\n    float: none;\r\n    line-height: 48px;\r\n}\r\n.sidenav li.active {\r\n    background-color: rgba(0, 0, 0, 0.05);\r\n}\r\n.sidenav li>a {\r\n    color: rgba(0, 0, 0, 0.87);\r\n    display: block;\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    height: 48px;\r\n    line-height: 48px;\r\n    padding: 0 32px;\r\n}\r\n.sidenav li>a:hover {\r\n    background-color: rgba(0, 0, 0, 0.05);\r\n}\r\n.sidenav li>a.btn,\r\n.sidenav li>a.btn-large,\r\n.sidenav li>a.btn-small,\r\n.sidenav li>a.btn-large,\r\n.sidenav li>a.btn-flat,\r\n.sidenav li>a.btn-floating {\r\n    margin: 10px 15px;\r\n}\r\n.sidenav li>a.btn,\r\n.sidenav li>a.btn-large,\r\n.sidenav li>a.btn-small,\r\n.sidenav li>a.btn-large,\r\n.sidenav li>a.btn-floating {\r\n    color: #fff;\r\n}\r\n.sidenav li>a.btn-flat {\r\n    color: #343434;\r\n}\r\n.sidenav li>a.btn:hover,\r\n.sidenav li>a.btn-large:hover,\r\n.sidenav li>a.btn-small:hover,\r\n.sidenav li>a.btn-large:hover {\r\n    background-color: #2bbbad;\r\n}\r\n.sidenav li>a.btn-floating:hover {\r\n    background-color: #26a69a;\r\n}\r\n.sidenav li>a>i,\r\n.sidenav li>a>[class^=\"mdi-\"],\r\n.sidenav li>a li>a>[class*=\"mdi-\"],\r\n.sidenav li>a>i.material-icons {\r\n    float: left;\r\n    height: 48px;\r\n    line-height: 48px;\r\n    margin: 0 32px 0 0;\r\n    width: 24px;\r\n    color: rgba(0, 0, 0, 0.54);\r\n}\r\n.sidenav .divider {\r\n    margin: 8px 0 0 0;\r\n}\r\n.sidenav .subheader {\r\n    cursor: initial;\r\n    pointer-events: none;\r\n    color: rgba(0, 0, 0, 0.54);\r\n    font-size: 14px;\r\n    font-weight: 500;\r\n    line-height: 48px;\r\n}\r\n.sidenav .subheader:hover {\r\n    background-color: transparent;\r\n}\r\n.sidenav .user-view {\r\n    position: relative;\r\n    padding: 32px 32px 0;\r\n    margin-bottom: 8px;\r\n}\r\n.sidenav .user-view>a {\r\n    height: auto;\r\n    padding: 0;\r\n}\r\n.sidenav .user-view>a:hover {\r\n    background-color: transparent;\r\n}\r\n.sidenav .user-view .background {\r\n    overflow: hidden;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: -1;\r\n}\r\n.sidenav .user-view .circle,\r\n.sidenav .user-view .name,\r\n.sidenav .user-view .email {\r\n    display: block;\r\n}\r\n.sidenav .user-view .circle {\r\n    height: 64px;\r\n    width: 64px;\r\n}\r\n.sidenav .user-view .name,\r\n.sidenav .user-view .email {\r\n    font-size: 14px;\r\n    line-height: 24px;\r\n}\r\n.sidenav .user-view .name {\r\n    margin-top: 16px;\r\n    font-weight: 500;\r\n}\r\n.sidenav .user-view .email {\r\n    padding-bottom: 16px;\r\n    font-weight: 400;\r\n}\r\n.drag-target {\r\n    height: 100%;\r\n    width: 10px;\r\n    position: fixed;\r\n    top: 0;\r\n    z-index: 998;\r\n}\r\n.drag-target.right-aligned {\r\n    right: 0;\r\n}\r\n.sidenav.sidenav-fixed {\r\n    left: 0;\r\n    -webkit-transform: translateX(0);\r\n    transform: translateX(0);\r\n    position: fixed;\r\n}\r\n.sidenav.sidenav-fixed.right-aligned {\r\n    right: 0;\r\n    left: auto;\r\n}\r\n@media only screen and (max-width: 992px) {\r\n    .sidenav.sidenav-fixed {\r\n        -webkit-transform: translateX(-105%);\r\n        transform: translateX(-105%);\r\n    }\r\n    .sidenav.sidenav-fixed.right-aligned {\r\n        -webkit-transform: translateX(105%);\r\n        transform: translateX(105%);\r\n    }\r\n    .sidenav>a {\r\n        padding: 0 16px;\r\n    }\r\n    .sidenav .user-view {\r\n        padding: 16px 16px 0;\r\n    }\r\n}\r\n.sidenav .collapsible-body>ul:not(.collapsible)>li.active,\r\n.sidenav.sidenav-fixed .collapsible-body>ul:not(.collapsible)>li.active {\r\n    background-color: #ee6e73;\r\n}\r\n.sidenav .collapsible-body>ul:not(.collapsible)>li.active a,\r\n.sidenav.sidenav-fixed .collapsible-body>ul:not(.collapsible)>li.active a {\r\n    color: #fff;\r\n}\r\n.sidenav .collapsible-body {\r\n    padding: 0;\r\n}\r\n.sidenav-overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    opacity: 0;\r\n    height: 120vh;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    z-index: 997;\r\n    display: none;\r\n}\r\n/*\r\n      @license\r\n      Copyright (c) 2014 The Polymer Project Authors. All rights reserved.\r\n      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt\r\n      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt\r\n      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt\r\n      Code distributed by Google as part of the polymer project is also\r\n      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt\r\n   */\r\n/**************************/\r\n/* STYLES FOR THE SPINNER */\r\n/**************************/\r\n/*\r\n   * Constants:\r\n   *      STROKEWIDTH = 3px\r\n   *      ARCSIZE     = 270 degrees (amount of circle the arc takes up)\r\n   *      ARCTIME     = 1333ms (time it takes to expand and contract arc)\r\n   *      ARCSTARTROT = 216 degrees (how much the start location of the arc\r\n   *                                should rotate each time, 216 gives us a\r\n   *                                5 pointed star shape (it's 360/5 * 3).\r\n   *                                For a 7 pointed star, we might do\r\n   *                                360/7 * 3 = 154.286)\r\n   *      CONTAINERWIDTH = 28px\r\n   *      SHRINK_TIME = 400ms\r\n   */\r\n.preloader-wrapper {\r\n    display: inline-block;\r\n    position: relative;\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n.preloader-wrapper.small {\r\n    width: 36px;\r\n    height: 36px;\r\n}\r\n.preloader-wrapper.big {\r\n    width: 64px;\r\n    height: 64px;\r\n}\r\n.preloader-wrapper.active {\r\n    /* duration: 360 * ARCTIME / (ARCSTARTROT + (360-ARCSIZE)) */\r\n    -webkit-animation: container-rotate 1568ms linear infinite;\r\n    animation: container-rotate 1568ms linear infinite;\r\n}\r\n@-webkit-keyframes container-rotate {\r\n    to {\r\n        -webkit-transform: rotate(360deg);\r\n    }\r\n}\r\n@keyframes container-rotate {\r\n    to {\r\n        -webkit-transform: rotate(360deg);\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n.spinner-layer {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    opacity: 0;\r\n    border-color: #26a69a;\r\n}\r\n.spinner-blue,\r\n.spinner-blue-only {\r\n    border-color: #4285f4;\r\n}\r\n.spinner-red,\r\n.spinner-red-only {\r\n    border-color: #db4437;\r\n}\r\n.spinner-yellow,\r\n.spinner-yellow-only {\r\n    border-color: #f4b400;\r\n}\r\n.spinner-green,\r\n.spinner-green-only {\r\n    border-color: #0f9d58;\r\n}\r\n/**\r\n   * IMPORTANT NOTE ABOUT CSS ANIMATION PROPERTIES (keanulee):\r\n   *\r\n   * iOS Safari (tested on iOS 8.1) does not handle animation-delay very well - it doesn't\r\n   * guarantee that the animation will start _exactly_ after that value. So we avoid using\r\n   * animation-delay and instead set custom keyframes for each color (as redundant as it\r\n   * seems).\r\n   *\r\n   * We write out each animation in full (instead of separating animation-name,\r\n   * animation-duration, etc.) because under the polyfill, Safari does not recognize those\r\n   * specific properties properly, treats them as -webkit-animation, and overrides the\r\n   * other animation rules. See https://github.com/Polymer/platform/issues/53.\r\n   */\r\n.active .spinner-layer.spinner-blue {\r\n    /* durations: 4 * ARCTIME */\r\n    -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\r\n    animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\r\n}\r\n.active .spinner-layer.spinner-red {\r\n    /* durations: 4 * ARCTIME */\r\n    -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\r\n    animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\r\n}\r\n.active .spinner-layer.spinner-yellow {\r\n    /* durations: 4 * ARCTIME */\r\n    -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\r\n    animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\r\n}\r\n.active .spinner-layer.spinner-green {\r\n    /* durations: 4 * ARCTIME */\r\n    -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\r\n    animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\r\n}\r\n.active .spinner-layer,\r\n.active .spinner-layer.spinner-blue-only,\r\n.active .spinner-layer.spinner-red-only,\r\n.active .spinner-layer.spinner-yellow-only,\r\n.active .spinner-layer.spinner-green-only {\r\n    /* durations: 4 * ARCTIME */\r\n    opacity: 1;\r\n    -webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\r\n    animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\r\n}\r\n@-webkit-keyframes fill-unfill-rotate {\r\n    12.5% {\r\n        -webkit-transform: rotate(135deg);\r\n    }\r\n    /* 0.5 * ARCSIZE */\r\n    25% {\r\n        -webkit-transform: rotate(270deg);\r\n    }\r\n    /* 1   * ARCSIZE */\r\n    37.5% {\r\n        -webkit-transform: rotate(405deg);\r\n    }\r\n    /* 1.5 * ARCSIZE */\r\n    50% {\r\n        -webkit-transform: rotate(540deg);\r\n    }\r\n    /* 2   * ARCSIZE */\r\n    62.5% {\r\n        -webkit-transform: rotate(675deg);\r\n    }\r\n    /* 2.5 * ARCSIZE */\r\n    75% {\r\n        -webkit-transform: rotate(810deg);\r\n    }\r\n    /* 3   * ARCSIZE */\r\n    87.5% {\r\n        -webkit-transform: rotate(945deg);\r\n    }\r\n    /* 3.5 * ARCSIZE */\r\n    to {\r\n        -webkit-transform: rotate(1080deg);\r\n    }\r\n    /* 4   * ARCSIZE */\r\n}\r\n@keyframes fill-unfill-rotate {\r\n    12.5% {\r\n        -webkit-transform: rotate(135deg);\r\n        transform: rotate(135deg);\r\n    }\r\n    /* 0.5 * ARCSIZE */\r\n    25% {\r\n        -webkit-transform: rotate(270deg);\r\n        transform: rotate(270deg);\r\n    }\r\n    /* 1   * ARCSIZE */\r\n    37.5% {\r\n        -webkit-transform: rotate(405deg);\r\n        transform: rotate(405deg);\r\n    }\r\n    /* 1.5 * ARCSIZE */\r\n    50% {\r\n        -webkit-transform: rotate(540deg);\r\n        transform: rotate(540deg);\r\n    }\r\n    /* 2   * ARCSIZE */\r\n    62.5% {\r\n        -webkit-transform: rotate(675deg);\r\n        transform: rotate(675deg);\r\n    }\r\n    /* 2.5 * ARCSIZE */\r\n    75% {\r\n        -webkit-transform: rotate(810deg);\r\n        transform: rotate(810deg);\r\n    }\r\n    /* 3   * ARCSIZE */\r\n    87.5% {\r\n        -webkit-transform: rotate(945deg);\r\n        transform: rotate(945deg);\r\n    }\r\n    /* 3.5 * ARCSIZE */\r\n    to {\r\n        -webkit-transform: rotate(1080deg);\r\n        transform: rotate(1080deg);\r\n    }\r\n    /* 4   * ARCSIZE */\r\n}\r\n@-webkit-keyframes blue-fade-in-out {\r\n    from {\r\n        opacity: 1;\r\n    }\r\n    25% {\r\n        opacity: 1;\r\n    }\r\n    26% {\r\n        opacity: 0;\r\n    }\r\n    89% {\r\n        opacity: 0;\r\n    }\r\n    90% {\r\n        opacity: 1;\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n    }\r\n}\r\n@keyframes blue-fade-in-out {\r\n    from {\r\n        opacity: 1;\r\n    }\r\n    25% {\r\n        opacity: 1;\r\n    }\r\n    26% {\r\n        opacity: 0;\r\n    }\r\n    89% {\r\n        opacity: 0;\r\n    }\r\n    90% {\r\n        opacity: 1;\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n    }\r\n}\r\n@-webkit-keyframes red-fade-in-out {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    15% {\r\n        opacity: 0;\r\n    }\r\n    25% {\r\n        opacity: 1;\r\n    }\r\n    50% {\r\n        opacity: 1;\r\n    }\r\n    51% {\r\n        opacity: 0;\r\n    }\r\n}\r\n@keyframes red-fade-in-out {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    15% {\r\n        opacity: 0;\r\n    }\r\n    25% {\r\n        opacity: 1;\r\n    }\r\n    50% {\r\n        opacity: 1;\r\n    }\r\n    51% {\r\n        opacity: 0;\r\n    }\r\n}\r\n@-webkit-keyframes yellow-fade-in-out {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    40% {\r\n        opacity: 0;\r\n    }\r\n    50% {\r\n        opacity: 1;\r\n    }\r\n    75% {\r\n        opacity: 1;\r\n    }\r\n    76% {\r\n        opacity: 0;\r\n    }\r\n}\r\n@keyframes yellow-fade-in-out {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    40% {\r\n        opacity: 0;\r\n    }\r\n    50% {\r\n        opacity: 1;\r\n    }\r\n    75% {\r\n        opacity: 1;\r\n    }\r\n    76% {\r\n        opacity: 0;\r\n    }\r\n}\r\n@-webkit-keyframes green-fade-in-out {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    65% {\r\n        opacity: 0;\r\n    }\r\n    75% {\r\n        opacity: 1;\r\n    }\r\n    90% {\r\n        opacity: 1;\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n    }\r\n}\r\n@keyframes green-fade-in-out {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    65% {\r\n        opacity: 0;\r\n    }\r\n    75% {\r\n        opacity: 1;\r\n    }\r\n    90% {\r\n        opacity: 1;\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n    }\r\n}\r\n/**\r\n   * Patch the gap that appear between the two adjacent div.circle-clipper while the\r\n   * spinner is rotating (appears on Chrome 38, Safari 7.1, and IE 11).\r\n   */\r\n.gap-patch {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 45%;\r\n    width: 10%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    border-color: inherit;\r\n}\r\n.gap-patch .circle {\r\n    width: 1000%;\r\n    left: -450%;\r\n}\r\n.circle-clipper {\r\n    display: inline-block;\r\n    position: relative;\r\n    width: 50%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    border-color: inherit;\r\n}\r\n.circle-clipper .circle {\r\n    width: 200%;\r\n    height: 100%;\r\n    border-width: 3px;\r\n    /* STROKEWIDTH */\r\n    border-style: solid;\r\n    border-color: inherit;\r\n    border-bottom-color: transparent !important;\r\n    border-radius: 50%;\r\n    -webkit-animation: none;\r\n    animation: none;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n}\r\n.circle-clipper.left .circle {\r\n    left: 0;\r\n    border-right-color: transparent !important;\r\n    -webkit-transform: rotate(129deg);\r\n    transform: rotate(129deg);\r\n}\r\n.circle-clipper.right .circle {\r\n    left: -100%;\r\n    border-left-color: transparent !important;\r\n    -webkit-transform: rotate(-129deg);\r\n    transform: rotate(-129deg);\r\n}\r\n.active .circle-clipper.left .circle {\r\n    /* duration: ARCTIME */\r\n    -webkit-animation: left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\r\n    animation: left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\r\n}\r\n.active .circle-clipper.right .circle {\r\n    /* duration: ARCTIME */\r\n    -webkit-animation: right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\r\n    animation: right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;\r\n}\r\n@-webkit-keyframes left-spin {\r\n    from {\r\n        -webkit-transform: rotate(130deg);\r\n    }\r\n    50% {\r\n        -webkit-transform: rotate(-5deg);\r\n    }\r\n    to {\r\n        -webkit-transform: rotate(130deg);\r\n    }\r\n}\r\n@keyframes left-spin {\r\n    from {\r\n        -webkit-transform: rotate(130deg);\r\n        transform: rotate(130deg);\r\n    }\r\n    50% {\r\n        -webkit-transform: rotate(-5deg);\r\n        transform: rotate(-5deg);\r\n    }\r\n    to {\r\n        -webkit-transform: rotate(130deg);\r\n        transform: rotate(130deg);\r\n    }\r\n}\r\n@-webkit-keyframes right-spin {\r\n    from {\r\n        -webkit-transform: rotate(-130deg);\r\n    }\r\n    50% {\r\n        -webkit-transform: rotate(5deg);\r\n    }\r\n    to {\r\n        -webkit-transform: rotate(-130deg);\r\n    }\r\n}\r\n@keyframes right-spin {\r\n    from {\r\n        -webkit-transform: rotate(-130deg);\r\n        transform: rotate(-130deg);\r\n    }\r\n    50% {\r\n        -webkit-transform: rotate(5deg);\r\n        transform: rotate(5deg);\r\n    }\r\n    to {\r\n        -webkit-transform: rotate(-130deg);\r\n        transform: rotate(-130deg);\r\n    }\r\n}\r\n#spinnerContainer.cooldown {\r\n    /* duration: SHRINK_TIME */\r\n    -webkit-animation: container-rotate 1568ms linear infinite, fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1);\r\n    animation: container-rotate 1568ms linear infinite, fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1);\r\n}\r\n@-webkit-keyframes fade-out {\r\n    from {\r\n        opacity: 1;\r\n    }\r\n    to {\r\n        opacity: 0;\r\n    }\r\n}\r\n@keyframes fade-out {\r\n    from {\r\n        opacity: 1;\r\n    }\r\n    to {\r\n        opacity: 0;\r\n    }\r\n}\r\n.slider {\r\n    position: relative;\r\n    height: 400px;\r\n    width: 100%;\r\n}\r\n.slider.fullscreen {\r\n    height: 100%;\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n}\r\n.slider.fullscreen ul.slides {\r\n    height: 100%;\r\n}\r\n.slider.fullscreen ul.indicators {\r\n    z-index: 2;\r\n    bottom: 30px;\r\n}\r\n.slider .slides {\r\n    background-color: #9e9e9e;\r\n    margin: 0;\r\n    height: 400px;\r\n}\r\n.slider .slides li {\r\n    opacity: 0;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1;\r\n    width: 100%;\r\n    height: inherit;\r\n    overflow: hidden;\r\n}\r\n.slider .slides li img {\r\n    height: 100%;\r\n    width: 100%;\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n.slider .slides li .caption {\r\n    color: #fff;\r\n    position: absolute;\r\n    top: 15%;\r\n    left: 15%;\r\n    width: 70%;\r\n    opacity: 0;\r\n}\r\n.slider .slides li .caption p {\r\n    color: #e0e0e0;\r\n}\r\n.slider .slides li.active {\r\n    z-index: 2;\r\n}\r\n.slider .indicators {\r\n    position: absolute;\r\n    text-align: center;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    margin: 0;\r\n}\r\n.slider .indicators .indicator-item {\r\n    display: inline-block;\r\n    position: relative;\r\n    cursor: pointer;\r\n    height: 16px;\r\n    width: 16px;\r\n    margin: 0 12px;\r\n    background-color: #e0e0e0;\r\n    -webkit-transition: background-color .3s;\r\n    transition: background-color .3s;\r\n    border-radius: 50%;\r\n}\r\n.slider .indicators .indicator-item.active {\r\n    background-color: #4CAF50;\r\n}\r\n.carousel {\r\n    overflow: hidden;\r\n    position: relative;\r\n    width: 100%;\r\n    height: 400px;\r\n    -webkit-perspective: 500px;\r\n    perspective: 500px;\r\n    -webkit-transform-style: preserve-3d;\r\n    transform-style: preserve-3d;\r\n    -webkit-transform-origin: 0% 50%;\r\n    transform-origin: 0% 50%;\r\n}\r\n.carousel.carousel-slider {\r\n    top: 0;\r\n    left: 0;\r\n}\r\n.carousel.carousel-slider .carousel-fixed-item {\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 20px;\r\n    z-index: 1;\r\n}\r\n.carousel.carousel-slider .carousel-fixed-item.with-indicators {\r\n    bottom: 68px;\r\n}\r\n.carousel.carousel-slider .carousel-item {\r\n    width: 100%;\r\n    height: 100%;\r\n    min-height: 400px;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n.carousel.carousel-slider .carousel-item h2 {\r\n    font-size: 24px;\r\n    font-weight: 500;\r\n    line-height: 32px;\r\n}\r\n.carousel.carousel-slider .carousel-item p {\r\n    font-size: 15px;\r\n}\r\n.carousel .carousel-item {\r\n    visibility: hidden;\r\n    width: 200px;\r\n    height: 200px;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n.carousel .carousel-item>img {\r\n    width: 100%;\r\n}\r\n.carousel .indicators {\r\n    position: absolute;\r\n    text-align: center;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    margin: 0;\r\n}\r\n.carousel .indicators .indicator-item {\r\n    display: inline-block;\r\n    position: relative;\r\n    cursor: pointer;\r\n    height: 8px;\r\n    width: 8px;\r\n    margin: 24px 4px;\r\n    background-color: rgba(255, 255, 255, 0.5);\r\n    -webkit-transition: background-color .3s;\r\n    transition: background-color .3s;\r\n    border-radius: 50%;\r\n}\r\n.carousel .indicators .indicator-item.active {\r\n    background-color: #fff;\r\n}\r\n.carousel.scrolling .carousel-item .materialboxed,\r\n.carousel .carousel-item:not(.active) .materialboxed {\r\n    pointer-events: none;\r\n}\r\n.tap-target-wrapper {\r\n    width: 800px;\r\n    height: 800px;\r\n    position: fixed;\r\n    z-index: 1000;\r\n    visibility: hidden;\r\n    -webkit-transition: visibility 0s .3s;\r\n    transition: visibility 0s .3s;\r\n}\r\n.tap-target-wrapper.open {\r\n    visibility: visible;\r\n    -webkit-transition: visibility 0s;\r\n    transition: visibility 0s;\r\n}\r\n.tap-target-wrapper.open .tap-target {\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n    opacity: .95;\r\n    -webkit-transition: opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1), -webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);\r\n    transition: opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1), -webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);\r\n    transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1), opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1);\r\n    transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1), opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1), -webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);\r\n}\r\n.tap-target-wrapper.open .tap-target-wave::before {\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n}\r\n.tap-target-wrapper.open .tap-target-wave::after {\r\n    visibility: visible;\r\n    -webkit-animation: pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;\r\n    animation: pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;\r\n    -webkit-transition: opacity .3s, visibility 0s 1s, -webkit-transform .3s;\r\n    transition: opacity .3s, visibility 0s 1s, -webkit-transform .3s;\r\n    transition: opacity .3s, transform .3s, visibility 0s 1s;\r\n    transition: opacity .3s, transform .3s, visibility 0s 1s, -webkit-transform .3s;\r\n}\r\n.tap-target {\r\n    position: absolute;\r\n    font-size: 1rem;\r\n    border-radius: 50%;\r\n    background-color: #ee6e73;\r\n    -webkit-box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.14), 0 10px 50px 0 rgba(0, 0, 0, 0.12), 0 30px 10px -20px rgba(0, 0, 0, 0.2);\r\n    box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.14), 0 10px 50px 0 rgba(0, 0, 0, 0.12), 0 30px 10px -20px rgba(0, 0, 0, 0.2);\r\n    width: 100%;\r\n    height: 100%;\r\n    opacity: 0;\r\n    -webkit-transform: scale(0);\r\n    transform: scale(0);\r\n    -webkit-transition: opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1), -webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);\r\n    transition: opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1), -webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);\r\n    transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1), opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1);\r\n    transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1), opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1), -webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);\r\n}\r\n.tap-target-content {\r\n    position: relative;\r\n    display: table-cell;\r\n}\r\n.tap-target-wave {\r\n    position: absolute;\r\n    border-radius: 50%;\r\n    z-index: 10001;\r\n}\r\n.tap-target-wave::before,\r\n.tap-target-wave::after {\r\n    content: '';\r\n    display: block;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 50%;\r\n    background-color: #ffffff;\r\n}\r\n.tap-target-wave::before {\r\n    -webkit-transform: scale(0);\r\n    transform: scale(0);\r\n    -webkit-transition: -webkit-transform .3s;\r\n    transition: -webkit-transform .3s;\r\n    transition: transform .3s;\r\n    transition: transform .3s, -webkit-transform .3s;\r\n}\r\n.tap-target-wave::after {\r\n    visibility: hidden;\r\n    -webkit-transition: opacity .3s, visibility 0s, -webkit-transform .3s;\r\n    transition: opacity .3s, visibility 0s, -webkit-transform .3s;\r\n    transition: opacity .3s, transform .3s, visibility 0s;\r\n    transition: opacity .3s, transform .3s, visibility 0s, -webkit-transform .3s;\r\n    z-index: -1;\r\n}\r\n.tap-target-origin {\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n    transform: translate(-50%, -50%);\r\n    z-index: 10002;\r\n    position: absolute !important;\r\n}\r\n.tap-target-origin:not(.btn):not(.btn-large):not(.btn-small),\r\n.tap-target-origin:not(.btn):not(.btn-large):not(.btn-small):hover {\r\n    background: none;\r\n}\r\n@media only screen and (max-width: 600px) {\r\n    .tap-target,\r\n    .tap-target-wrapper {\r\n        width: 600px;\r\n        height: 600px;\r\n    }\r\n}\r\n.pulse {\r\n    overflow: visible;\r\n    position: relative;\r\n}\r\n.pulse::before {\r\n    content: '';\r\n    display: block;\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: inherit;\r\n    border-radius: inherit;\r\n    -webkit-transition: opacity .3s, -webkit-transform .3s;\r\n    transition: opacity .3s, -webkit-transform .3s;\r\n    transition: opacity .3s, transform .3s;\r\n    transition: opacity .3s, transform .3s, -webkit-transform .3s;\r\n    -webkit-animation: pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;\r\n    animation: pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;\r\n    z-index: -1;\r\n}\r\n@-webkit-keyframes pulse-animation {\r\n    0% {\r\n        opacity: 1;\r\n        -webkit-transform: scale(1);\r\n        transform: scale(1);\r\n    }\r\n    50% {\r\n        opacity: 0;\r\n        -webkit-transform: scale(1.5);\r\n        transform: scale(1.5);\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        -webkit-transform: scale(1.5);\r\n        transform: scale(1.5);\r\n    }\r\n}\r\n@keyframes pulse-animation {\r\n    0% {\r\n        opacity: 1;\r\n        -webkit-transform: scale(1);\r\n        transform: scale(1);\r\n    }\r\n    50% {\r\n        opacity: 0;\r\n        -webkit-transform: scale(1.5);\r\n        transform: scale(1.5);\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        -webkit-transform: scale(1.5);\r\n        transform: scale(1.5);\r\n    }\r\n}\r\n/* Modal */\r\n.datepicker-modal {\r\n    max-width: 325px;\r\n    min-width: 300px;\r\n    max-height: none;\r\n}\r\n.datepicker-container.modal-content {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-direction: column;\r\n    flex-direction: column;\r\n    padding: 0;\r\n}\r\n.datepicker-controls {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n    -ms-flex-pack: justify;\r\n    justify-content: space-between;\r\n    width: 280px;\r\n    margin: 0 auto;\r\n}\r\n.datepicker-controls .selects-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n.datepicker-controls .select-wrapper input {\r\n    border-bottom: none;\r\n    text-align: center;\r\n    margin: 0;\r\n}\r\n.datepicker-controls .select-wrapper input:focus {\r\n    border-bottom: none;\r\n}\r\n.datepicker-controls .select-wrapper .caret {\r\n    display: none;\r\n}\r\n.datepicker-controls .select-year input {\r\n    width: 50px;\r\n}\r\n.datepicker-controls .select-month input {\r\n    width: 70px;\r\n}\r\n.month-prev,\r\n.month-next {\r\n    margin-top: 4px;\r\n    cursor: pointer;\r\n    background-color: transparent;\r\n    border: none;\r\n}\r\n/* Date Display */\r\n.datepicker-date-display {\r\n    -webkit-box-flex: 1;\r\n    -ms-flex: 1 auto;\r\n    flex: 1 auto;\r\n    background-color: #26a69a;\r\n    color: #fff;\r\n    padding: 20px 22px;\r\n    font-weight: 500;\r\n}\r\n.datepicker-date-display .year-text {\r\n    display: block;\r\n    font-size: 1.5rem;\r\n    line-height: 25px;\r\n    color: rgba(255, 255, 255, 0.7);\r\n}\r\n.datepicker-date-display .date-text {\r\n    display: block;\r\n    font-size: 2.8rem;\r\n    line-height: 47px;\r\n    font-weight: 500;\r\n}\r\n/* Calendar */\r\n.datepicker-calendar-container {\r\n    -webkit-box-flex: 2.5;\r\n    -ms-flex: 2.5 auto;\r\n    flex: 2.5 auto;\r\n}\r\n.datepicker-table {\r\n    width: 280px;\r\n    font-size: 1rem;\r\n    margin: 0 auto;\r\n}\r\n.datepicker-table thead {\r\n    border-bottom: none;\r\n}\r\n.datepicker-table th {\r\n    padding: 10px 5px;\r\n    text-align: center;\r\n}\r\n.datepicker-table tr {\r\n    border: none;\r\n}\r\n.datepicker-table abbr {\r\n    text-decoration: none;\r\n    color: #999;\r\n}\r\n.datepicker-table td {\r\n    border-radius: 50%;\r\n    padding: 0;\r\n}\r\n.datepicker-table td.is-today {\r\n    color: #26a69a;\r\n}\r\n.datepicker-table td.is-selected {\r\n    background-color: #26a69a;\r\n    color: #fff;\r\n}\r\n.datepicker-table td.is-outside-current-month,\r\n.datepicker-table td.is-disabled {\r\n    color: rgba(0, 0, 0, 0.3);\r\n    pointer-events: none;\r\n}\r\n.datepicker-day-button {\r\n    background-color: transparent;\r\n    border: none;\r\n    line-height: 38px;\r\n    display: block;\r\n    width: 100%;\r\n    border-radius: 50%;\r\n    padding: 0 5px;\r\n    cursor: pointer;\r\n    color: inherit;\r\n}\r\n.datepicker-day-button:focus {\r\n    background-color: rgba(43, 161, 150, 0.25);\r\n}\r\n/* Footer */\r\n.datepicker-footer {\r\n    width: 280px;\r\n    margin: 0 auto;\r\n    padding-bottom: 5px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n    -ms-flex-pack: justify;\r\n    justify-content: space-between;\r\n}\r\n.datepicker-cancel,\r\n.datepicker-clear,\r\n.datepicker-today,\r\n.datepicker-done {\r\n    color: #26a69a;\r\n    padding: 0 1rem;\r\n}\r\n.datepicker-clear {\r\n    color: #F44336;\r\n}\r\n/* Media Queries */\r\n@media only screen and (min-width: 601px) {\r\n    .datepicker-modal {\r\n        max-width: 625px;\r\n    }\r\n    .datepicker-container.modal-content {\r\n        -webkit-box-orient: horizontal;\r\n        -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n        flex-direction: row;\r\n    }\r\n    .datepicker-date-display {\r\n        -webkit-box-flex: 0;\r\n        -ms-flex: 0 1 270px;\r\n        flex: 0 1 270px;\r\n    }\r\n    .datepicker-controls,\r\n    .datepicker-table,\r\n    .datepicker-footer {\r\n        width: 320px;\r\n    }\r\n    .datepicker-day-button {\r\n        line-height: 44px;\r\n    }\r\n}\r\n/* Timepicker Containers */\r\n.timepicker-modal {\r\n    max-width: 325px;\r\n    max-height: none;\r\n}\r\n.timepicker-container.modal-content {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-direction: column;\r\n    flex-direction: column;\r\n    padding: 0;\r\n}\r\n.text-primary {\r\n    color: white;\r\n}\r\n/* Clock Digital Display */\r\n.timepicker-digital-display {\r\n    -webkit-box-flex: 1;\r\n    -ms-flex: 1 auto;\r\n    flex: 1 auto;\r\n    background-color: #26a69a;\r\n    padding: 10px;\r\n    font-weight: 300;\r\n}\r\n.timepicker-text-container {\r\n    font-size: 4rem;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    color: rgba(255, 255, 255, 0.6);\r\n    font-weight: 400;\r\n    position: relative;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}\r\n.timepicker-span-hours,\r\n.timepicker-span-minutes,\r\n.timepicker-span-am-pm div {\r\n    cursor: pointer;\r\n}\r\n.timepicker-span-hours {\r\n    margin-right: 3px;\r\n}\r\n.timepicker-span-minutes {\r\n    margin-left: 3px;\r\n}\r\n.timepicker-display-am-pm {\r\n    font-size: 1.3rem;\r\n    position: absolute;\r\n    right: 1rem;\r\n    bottom: 1rem;\r\n    font-weight: 400;\r\n}\r\n/* Analog Clock Display */\r\n.timepicker-analog-display {\r\n    -webkit-box-flex: 2.5;\r\n    -ms-flex: 2.5 auto;\r\n    flex: 2.5 auto;\r\n}\r\n.timepicker-plate {\r\n    background-color: #eee;\r\n    border-radius: 50%;\r\n    width: 270px;\r\n    height: 270px;\r\n    overflow: visible;\r\n    position: relative;\r\n    margin: auto;\r\n    margin-top: 25px;\r\n    margin-bottom: 5px;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}\r\n.timepicker-canvas,\r\n.timepicker-dial {\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n}\r\n.timepicker-minutes {\r\n    visibility: hidden;\r\n}\r\n.timepicker-tick {\r\n    border-radius: 50%;\r\n    color: rgba(0, 0, 0, 0.87);\r\n    line-height: 40px;\r\n    text-align: center;\r\n    width: 40px;\r\n    height: 40px;\r\n    position: absolute;\r\n    cursor: pointer;\r\n    font-size: 15px;\r\n}\r\n.timepicker-tick.active,\r\n.timepicker-tick:hover {\r\n    background-color: rgba(38, 166, 154, 0.25);\r\n}\r\n.timepicker-dial {\r\n    -webkit-transition: opacity 350ms, -webkit-transform 350ms;\r\n    transition: opacity 350ms, -webkit-transform 350ms;\r\n    transition: transform 350ms, opacity 350ms;\r\n    transition: transform 350ms, opacity 350ms, -webkit-transform 350ms;\r\n}\r\n.timepicker-dial-out {\r\n    opacity: 0;\r\n}\r\n.timepicker-dial-out.timepicker-hours {\r\n    -webkit-transform: scale(1.1, 1.1);\r\n    transform: scale(1.1, 1.1);\r\n}\r\n.timepicker-dial-out.timepicker-minutes {\r\n    -webkit-transform: scale(0.8, 0.8);\r\n    transform: scale(0.8, 0.8);\r\n}\r\n.timepicker-canvas {\r\n    -webkit-transition: opacity 175ms;\r\n    transition: opacity 175ms;\r\n}\r\n.timepicker-canvas line {\r\n    stroke: #26a69a;\r\n    stroke-width: 4;\r\n    stroke-linecap: round;\r\n}\r\n.timepicker-canvas-out {\r\n    opacity: 0.25;\r\n}\r\n.timepicker-canvas-bearing {\r\n    stroke: none;\r\n    fill: #26a69a;\r\n}\r\n.timepicker-canvas-bg {\r\n    stroke: none;\r\n    fill: #26a69a;\r\n}\r\n/* Footer */\r\n.timepicker-footer {\r\n    margin: 0 auto;\r\n    padding: 5px 1rem;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n    -ms-flex-pack: justify;\r\n    justify-content: space-between;\r\n}\r\n.timepicker-clear {\r\n    color: #F44336;\r\n}\r\n.timepicker-close {\r\n    color: #26a69a;\r\n}\r\n.timepicker-clear,\r\n.timepicker-close {\r\n    padding: 0 20px;\r\n}\r\n/* Media Queries */\r\n@media only screen and (min-width: 601px) {\r\n    .timepicker-modal {\r\n        max-width: 600px;\r\n    }\r\n    .timepicker-container.modal-content {\r\n        -webkit-box-orient: horizontal;\r\n        -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n        flex-direction: row;\r\n    }\r\n    .timepicker-text-container {\r\n        top: 32%;\r\n    }\r\n    .timepicker-display-am-pm {\r\n        position: relative;\r\n        right: auto;\r\n        bottom: auto;\r\n        text-align: center;\r\n        margin-top: 1.2rem;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/css.component/login.component.css":
/***/ (function(module, exports) {

module.exports = "html,\r\nbody {\r\n    height: 100%;\r\n}\r\n\r\nbody {\r\n    display: -ms-flexbox;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -ms-flex-align: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    padding-top: 40px;\r\n    padding-bottom: 40px;\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n.form-signin {\r\n    width: 100%;\r\n    max-width: 330px;\r\n    padding: 15px;\r\n    margin: auto;\r\n}\r\n\r\n.form-signin .checkbox {\r\n    font-weight: 400;\r\n}\r\n\r\n.form-signin .form-control {\r\n    position: relative;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    height: auto;\r\n    padding: 10px;\r\n    font-size: 16px;\r\n}\r\n\r\n.form-signin .form-control:focus {\r\n    z-index: 2;\r\n}\r\n\r\n.form-signin input[type=\"email\"] {\r\n    margin-bottom: -1px;\r\n    border-bottom-right-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n}\r\n\r\n.form-signin input[type=\"password\"] {\r\n    margin-bottom: 10px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n}"

/***/ }),

/***/ "./src/app/css.component/portafolio.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.body{\r\n   background: rgba(27, 26, 26, 0.3);\r\n\r\n}\r\n\r\n.navbar {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.jumbotron {\r\n  padding-top: 6rem;\r\n  padding-bottom: 6rem;\r\n  margin-bottom: 0;\r\n  background-color: #fff;\r\n}\r\n\r\n.jumbotron p:last-child {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.jumbotron-heading {\r\n  font-weight: 300;\r\n}\r\n\r\n.jumbotron .container {\r\n  max-width: 40rem;\r\n}\r\n\r\n.album {\r\n  min-height: 50rem; /* Can be removed; just added for demo purposes */\r\n  padding-top: 3rem;\r\n  padding-bottom: 3rem;\r\n  background-color: #f7f7f7;\r\n}\r\n\r\n.card {\r\n  border-style: solid;\r\n\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n\r\n  padding: .75rem;\r\n  color: #000;\r\n  border: 0;\r\n}\r\n\r\n.card > img {\r\n  margin-bottom: .75rem;\r\n}\r\n\r\n.card-text {\r\n  font-size: 85%;\r\n}\r\n\r\nfooter {\r\n  padding-top: 3rem;\r\n  padding-bottom: 3rem;\r\n}\r\n\r\nfooter p {\r\n  margin-bottom: .25rem;\r\n}\r\n\r\n.entrada{\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: (320px)[3];\r\n      grid-template-columns: repeat(3,320px);\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n  .entrada{\r\n    -ms-grid-columns: (320px)[2];\r\n        grid-template-columns: repeat(2,320px);\r\n  }\r\n\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/css.component/post-add.component.css":
/***/ (function(module, exports) {

module.exports = ".btn{\r\n    margin-bottom: 80px\r\n}\r\n.modal {\r\n\twidth: 10%;\r\n\theight: 200px;\r\n\tbackground: rgba(0,0,0,0.8);\r\n\t\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\t\r\n\tdisplay: -webkit-box;\r\n\t\r\n\tdisplay: -ms-flexbox;\r\n\t\r\n\tdisplay: flex;\r\n\t\r\n\t-webkit-animation: modal 2s 3s forwards;\r\n\t\r\n\t        animation: modal 2s 3s forwards;\r\n\tvisibility: hidden;\r\n\topacity: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/css.component/post-details.component.css":
/***/ (function(module, exports) {

module.exports = ".cortar{\r\n    text-align: justify;\r\n}\r\n\r\n.body{\r\n  background: rgba(0, 0, 0, 0.3);\r\n  color: #fff;\r\n  margin-bottom: 20px;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/css.component/service.component.css":
/***/ (function(module, exports) {

module.exports = ".services-content{\r\n    font-size: 2.5em;\r\n}\r\n\r\n#services{\r\n  margin-top: 10px;\r\n}\r\n\r\n.icon{\r\n    text-align: center;\r\n}\r\n\r\n.body{\r\n  background: rgba(27, 26, 26, 0.3);\r\n  color: #000;\r\n  margin: 10px;\r\n  border-radius: 18px;\r\n  }\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/css.component/sobremi.component.css":
/***/ (function(module, exports) {

module.exports = ".body{\r\n  background: rgba(27, 27, 27, .3)\r\n  }\r\n\r\n.timeline-block p{\r\n    color: black;\r\n    font-size: 2.8em;\r\n}\r\n\r\n.btn {\r\n    display: inline-block;\r\n\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    vertical-align: middle;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    border: 1px solid transparent;\r\n    padding: 0.375rem 0.75rem;\r\n\r\n    line-height: 1.5;\r\n    border-radius: 0.25rem;\r\n    -webkit-transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\r\n    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\r\n    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\r\n  }\r\n\r\n.btn:focus, .btn:hover {\r\n    text-decoration: none;\r\n  }\r\n\r\n.btn:focus, .btn.focus {\r\n    outline: 0;\r\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\r\n            box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\r\n  }\r\n\r\n.btn.disabled, .btn:disabled {\r\n    opacity: .65;\r\n  }\r\n\r\n.btn:not([disabled]):not(.disabled):active, .btn:not([disabled]):not(.disabled).active {\r\n    background-image: none;\r\n  }\r\n\r\na.btn.disabled,\r\n  fieldset[disabled] a.btn {\r\n    pointer-events: none;\r\n  }\r\n\r\n.btn-primary {\r\n    color: #fff;\r\n    background-color: #007bff;\r\n    border-color: #007bff;\r\n  }\r\n\r\n.btn-primary:hover {\r\n    color: #fff;\r\n    background-color: #0069d9;\r\n    border-color: #0062cc;\r\n  }\r\n\r\n.btn-primary:focus, .btn-primary.focus {\r\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\r\n            box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\r\n  }\r\n\r\n.btn-primary.disabled, .btn-primary:disabled {\r\n    background-color: #007bff;\r\n    border-color: #007bff;\r\n  }\r\n\r\n.btn-primary:not([disabled]):not(.disabled):active, .btn-primary:not([disabled]):not(.disabled).active,\r\n  .show > .btn-primary.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #0062cc;\r\n    border-color: #005cbf;\r\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\r\n            box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\r\n  }\r\n\r\n.btn-secondary {\r\n    color: #fff;\r\n    background-color: #868e96;\r\n    border-color: #868e96;\r\n  }\r\n\r\n.btn-secondary:hover {\r\n    color: #fff;\r\n    background-color: #727b84;\r\n    border-color: #6c757d;\r\n  }\r\n\r\n.btn-secondary:focus, .btn-secondary.focus {\r\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(134, 142, 150, 0.5);\r\n            box-shadow: 0 0 0 0.2rem rgba(134, 142, 150, 0.5);\r\n  }\r\n\r\n.btn-secondary.disabled, .btn-secondary:disabled {\r\n    background-color: #868e96;\r\n    border-color: #868e96;\r\n  }\r\n\r\n.btn-secondary:not([disabled]):not(.disabled):active, .btn-secondary:not([disabled]):not(.disabled).active,\r\n  .show > .btn-secondary.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #6c757d;\r\n    border-color: #666e76;\r\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(134, 142, 150, 0.5);\r\n            box-shadow: 0 0 0 0.2rem rgba(134, 142, 150, 0.5);\r\n  }\r\n\r\n.btn-success {\r\n    color: #fff;\r\n    background-color: #28a745;\r\n    border-color: #28a745;\r\n  }\r\n\r\n.btn-success:hover {\r\n    color: #fff;\r\n    background-color: #218838;\r\n    border-color: #1e7e34;\r\n  }\r\n\r\n.btn-success:focus, .btn-success.focus {\r\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\r\n            box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\r\n  }\r\n\r\n.btn-success.disabled, .btn-success:disabled {\r\n    background-color: #28a745;\r\n    border-color: #28a745;\r\n  }\r\n\r\n.btn-success:not([disabled]):not(.disabled):active, .btn-success:not([disabled]):not(.disabled).active,\r\n  .show > .btn-success.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #1e7e34;\r\n    border-color: #1c7430;\r\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\r\n            box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\r\n  }\r\n\r\n.btn-info {\r\n    color: #fff;\r\n    background-color: #17a2b8;\r\n    border-color: #17a2b8;\r\n  }\r\n\r\n.btn-info:hover {\r\n    color: #fff;\r\n    background-color: #138496;\r\n    border-color: #117a8b;\r\n  }\r\n\r\n.btn-info:focus, .btn-info.focus {\r\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\r\n            box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\r\n  }\r\n\r\n.btn-info.disabled, .btn-info:disabled {\r\n    background-color: #17a2b8;\r\n    border-color: #17a2b8;\r\n  }\r\n\r\n.btn-info:not([disabled]):not(.disabled):active, .btn-info:not([disabled]):not(.disabled).active,\r\n  .show > .btn-info.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #117a8b;\r\n    border-color: #10707f;\r\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\r\n            box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\r\n  }\r\n\r\n.btn-warning {\r\n    color: #111;\r\n    background-color: #ffc107;\r\n    border-color: #ffc107;\r\n  }\r\n\r\n.btn-warning:hover {\r\n    color: #111;\r\n    background-color: #e0a800;\r\n    border-color: #d39e00;\r\n  }\r\n\r\n.btn-warning:focus, .btn-warning.focus {\r\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\r\n            box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\r\n  }\r\n\r\n.btn-warning.disabled, .btn-warning:disabled {\r\n    background-color: #ffc107;\r\n    border-color: #ffc107;\r\n  }\r\n\r\n.btn-warning:not([disabled]):not(.disabled):active, .btn-warning:not([disabled]):not(.disabled).active,\r\n  .show > .btn-warning.dropdown-toggle {\r\n    color: #111;\r\n    background-color: #d39e00;\r\n    border-color: #c69500;\r\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\r\n            box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\r\n  }\r\n\r\n.btn-danger {\r\n    color: #fff;\r\n    background-color: #dc3545;\r\n    border-color: #dc3545;\r\n  }\r\n\r\n.btn-danger:hover {\r\n    color: #fff;\r\n    background-color: #c82333;\r\n    border-color: #bd2130;\r\n  }\r\n\r\n.btn-danger:focus, .btn-danger.focus {\r\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\r\n            box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\r\n  }\r\n\r\n.btn-danger.disabled, .btn-danger:disabled {\r\n    background-color: #dc3545;\r\n    border-color: #dc3545;\r\n  }\r\n\r\n.btn-danger:not([disabled]):not(.disabled):active, .btn-danger:not([disabled]):not(.disabled).active,\r\n  .show > .btn-danger.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #bd2130;\r\n    border-color: #b21f2d;\r\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\r\n            box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\r\n  }\r\n\r\n.btn-light {\r\n    color: #111;\r\n    background-color: #f8f9fa;\r\n    border-color: #f8f9fa;\r\n  }\r\n\r\n.btn-light:hover {\r\n    color: #111;\r\n    background-color: #e2e6ea;\r\n    border-color: #dae0e5;\r\n  }\r\n\r\n.btn-light:focus, .btn-light.focus {\r\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\r\n            box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\r\n  }\r\n\r\n.btn-light.disabled, .btn-light:disabled {\r\n    background-color: #f8f9fa;\r\n    border-color: #f8f9fa;\r\n  }\r\n\r\n.btn-light:not([disabled]):not(.disabled):active, .btn-light:not([disabled]):not(.disabled).active,\r\n  .show > .btn-light.dropdown-toggle {\r\n    color: #111;\r\n    background-color: #dae0e5;\r\n    border-color: #d3d9df;\r\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\r\n            box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\r\n  }\r\n\r\n.btn-dark {\r\n    color: #fff;\r\n    background-color: #343a40;\r\n    border-color: #343a40;\r\n  }\r\n\r\n.btn-dark:hover {\r\n    color: #fff;\r\n    background-color: #23272b;\r\n    border-color: #1d2124;\r\n  }\r\n\r\n.btn-dark:focus, .btn-dark.focus {\r\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\r\n            box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\r\n  }\r\n\r\n.btn-dark.disabled, .btn-dark:disabled {\r\n    background-color: #343a40;\r\n    border-color: #343a40;\r\n  }\r\n\r\n.btn-dark:not([disabled]):not(.disabled):active, .btn-dark:not([disabled]):not(.disabled).active,\r\n  .show > .btn-dark.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #1d2124;\r\n    border-color: #171a1d;\r\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\r\n            box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\r\n  }\r\n\r\n.btn-outline-primary {\r\n    color: #007bff;\r\n    background-color: transparent;\r\n    background-image: none;\r\n    border-color: #007bff;\r\n  }\r\n\r\n.btn-outline-primary:hover {\r\n    color: #fff;\r\n    background-color: #007bff;\r\n    border-color: #007bff;\r\n  }\r\n\r\n.btn-outline-primary:focus, .btn-outline-primary.focus {\r\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\r\n            box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\r\n  }\r\n\r\n.btn-outline-primary.disabled, .btn-outline-primary:disabled {\r\n    color: #007bff;\r\n    background-color: transparent;\r\n  }\r\n\r\n.btn-outline-primary:not([disabled]):not(.disabled):active, .btn-outline-primary:not([disabled]):not(.disabled).active,\r\n  .show > .btn-outline-primary.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #007bff;\r\n    border-color: #007bff;\r\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\r\n            box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\r\n  }\r\n\r\n.btn-outline-secondary {\r\n    color: #868e96;\r\n    background-color: transparent;\r\n    background-image: none;\r\n    border-color: #868e96;\r\n  }\r\n\r\n.btn-outline-secondary:hover {\r\n    color: #fff;\r\n    background-color: #868e96;\r\n    border-color: #868e96;\r\n  }\r\n\r\n.btn-outline-secondary:focus, .btn-outline-secondary.focus {\r\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(134, 142, 150, 0.5);\r\n            box-shadow: 0 0 0 0.2rem rgba(134, 142, 150, 0.5);\r\n  }\r\n\r\n.btn-outline-secondary.disabled, .btn-outline-secondary:disabled {\r\n    color: #868e96;\r\n    background-color: transparent;\r\n  }\r\n\r\n.btn-outline-secondary:not([disabled]):not(.disabled):active, .btn-outline-secondary:not([disabled]):not(.disabled).active,\r\n  .show > .btn-outline-secondary.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #868e96;\r\n    border-color: #868e96;\r\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(134, 142, 150, 0.5);\r\n            box-shadow: 0 0 0 0.2rem rgba(134, 142, 150, 0.5);\r\n  }\r\n\r\n.btn-outline-success {\r\n    color: #28a745;\r\n    background-color: transparent;\r\n    background-image: none;\r\n    border-color: #28a745;\r\n  }\r\n\r\n.btn-outline-success:hover {\r\n    color: #fff;\r\n    background-color: #28a745;\r\n    border-color: #28a745;\r\n  }\r\n\r\n.btn-outline-success:focus, .btn-outline-success.focus {\r\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\r\n            box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\r\n  }\r\n\r\n.btn-outline-success.disabled, .btn-outline-success:disabled {\r\n    color: #28a745;\r\n    background-color: transparent;\r\n  }\r\n\r\n.btn-outline-success:not([disabled]):not(.disabled):active, .btn-outline-success:not([disabled]):not(.disabled).active,\r\n  .show > .btn-outline-success.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #28a745;\r\n    border-color: #28a745;\r\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\r\n            box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\r\n  }\r\n\r\n.btn-outline-info {\r\n    color: #17a2b8;\r\n    background-color: transparent;\r\n    background-image: none;\r\n    border-color: #17a2b8;\r\n  }\r\n\r\n.btn-outline-info:hover {\r\n    color: #fff;\r\n    background-color: #17a2b8;\r\n    border-color: #17a2b8;\r\n  }\r\n\r\n.btn-outline-info:focus, .btn-outline-info.focus {\r\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\r\n            box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\r\n  }\r\n\r\n.btn-outline-info.disabled, .btn-outline-info:disabled {\r\n    color: #17a2b8;\r\n    background-color: transparent;\r\n  }\r\n\r\n.btn-outline-info:not([disabled]):not(.disabled):active, .btn-outline-info:not([disabled]):not(.disabled).active,\r\n  .show > .btn-outline-info.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #17a2b8;\r\n    border-color: #17a2b8;\r\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\r\n            box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\r\n  }\r\n\r\n.btn-outline-warning {\r\n    color: #ffc107;\r\n    background-color: transparent;\r\n    background-image: none;\r\n    border-color: #ffc107;\r\n  }\r\n\r\n.btn-outline-warning:hover {\r\n    color: #fff;\r\n    background-color: #ffc107;\r\n    border-color: #ffc107;\r\n  }\r\n\r\n.btn-outline-warning:focus, .btn-outline-warning.focus {\r\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\r\n            box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\r\n  }\r\n\r\n.btn-outline-warning.disabled, .btn-outline-warning:disabled {\r\n    color: #ffc107;\r\n    background-color: transparent;\r\n  }\r\n\r\n.btn-outline-warning:not([disabled]):not(.disabled):active, .btn-outline-warning:not([disabled]):not(.disabled).active,\r\n  .show > .btn-outline-warning.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #ffc107;\r\n    border-color: #ffc107;\r\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\r\n            box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\r\n  }\r\n\r\n.btn-outline-danger {\r\n    color: #dc3545;\r\n    background-color: transparent;\r\n    background-image: none;\r\n    border-color: #dc3545;\r\n  }\r\n\r\n.btn-outline-danger:hover {\r\n    color: #fff;\r\n    background-color: #dc3545;\r\n    border-color: #dc3545;\r\n  }\r\n\r\n.btn-outline-danger:focus, .btn-outline-danger.focus {\r\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\r\n            box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\r\n  }\r\n\r\n.btn-outline-danger.disabled, .btn-outline-danger:disabled {\r\n    color: #dc3545;\r\n    background-color: transparent;\r\n  }\r\n\r\n.btn-outline-danger:not([disabled]):not(.disabled):active, .btn-outline-danger:not([disabled]):not(.disabled).active,\r\n  .show > .btn-outline-danger.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #dc3545;\r\n    border-color: #dc3545;\r\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\r\n            box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\r\n  }\r\n\r\n.btn-outline-light {\r\n    color: #f8f9fa;\r\n    background-color: transparent;\r\n    background-image: none;\r\n    border-color: #f8f9fa;\r\n  }\r\n\r\n.btn-outline-light:hover {\r\n    color: #212529;\r\n    background-color: #f8f9fa;\r\n    border-color: #f8f9fa;\r\n  }\r\n\r\n.btn-outline-light:focus, .btn-outline-light.focus {\r\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\r\n            box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\r\n  }\r\n\r\n.btn-outline-light.disabled, .btn-outline-light:disabled {\r\n    color: #f8f9fa;\r\n    background-color: transparent;\r\n  }\r\n\r\n.btn-outline-light:not([disabled]):not(.disabled):active, .btn-outline-light:not([disabled]):not(.disabled).active,\r\n  .show > .btn-outline-light.dropdown-toggle {\r\n    color: #212529;\r\n    background-color: #f8f9fa;\r\n    border-color: #f8f9fa;\r\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\r\n            box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\r\n  }\r\n\r\n.btn-outline-dark {\r\n    color: #343a40;\r\n    background-color: transparent;\r\n    background-image: none;\r\n    border-color: #343a40;\r\n  }\r\n\r\n.btn-outline-dark:hover {\r\n    color: #fff;\r\n    background-color: #343a40;\r\n    border-color: #343a40;\r\n  }\r\n\r\n.btn-outline-dark:focus, .btn-outline-dark.focus {\r\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\r\n            box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\r\n  }\r\n\r\n.btn-outline-dark.disabled, .btn-outline-dark:disabled {\r\n    color: #343a40;\r\n    background-color: transparent;\r\n  }\r\n\r\n.btn-outline-dark:not([disabled]):not(.disabled):active, .btn-outline-dark:not([disabled]):not(.disabled).active,\r\n  .show > .btn-outline-dark.dropdown-toggle {\r\n    color: #fff;\r\n    background-color: #343a40;\r\n    border-color: #343a40;\r\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\r\n            box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\r\n  }\r\n\r\n.btn-link {\r\n    font-weight: 400;\r\n    color: #007bff;\r\n    background-color: transparent;\r\n  }\r\n\r\n.btn-link:hover {\r\n    color: #0056b3;\r\n    text-decoration: underline;\r\n    background-color: transparent;\r\n    border-color: transparent;\r\n  }\r\n\r\n.btn-link:focus, .btn-link.focus {\r\n    border-color: transparent;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n  }\r\n\r\n.btn-link:disabled, .btn-link.disabled {\r\n    color: #868e96;\r\n  }\r\n\r\n.btn-lg, .btn-group-lg > .btn {\r\n    padding: 0.5rem 1rem;\r\n    font-size: 1.25rem;\r\n    line-height: 1.5;\r\n    border-radius: 0.3rem;\r\n  }\r\n\r\n.btn-sm, .btn-group-sm > .btn {\r\n    padding: 0.25rem 0.5rem;\r\n    font-size: 0.875rem;\r\n    line-height: 1.5;\r\n    border-radius: 0.2rem;\r\n  }\r\n\r\n.btn-block {\r\n    display: block;\r\n    width: 100%;\r\n  }\r\n\r\n.btn-block + .btn-block {\r\n    margin-top: 0.5rem;\r\n  }\r\n\r\ninput[type=\"submit\"].btn-block,\r\n  input[type=\"reset\"].btn-block,\r\n  input[type=\"button\"].btn-block {\r\n    width: 100%;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/models/categoria.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Categoria; });
var Categoria = /** @class */ (function () {
    function Categoria(_id, categoria) {
        this._id = _id;
        this.categoria = categoria;
    }
    return Categoria;
}());



/***/ }),

/***/ "./src/app/models/educacion.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Educacion; });
var Educacion = /** @class */ (function () {
    function Educacion(name_titulo, descrip_titulo, name_inst, descrip_inst, fecha_inicio, fecha_final) {
        this.name_titulo = name_titulo;
        this.descrip_titulo = descrip_titulo;
        this.name_inst = name_inst;
        this.descrip_inst = descrip_inst;
        this.fecha_inicio = fecha_inicio;
        this.fecha_final = fecha_final;
    }
    return Educacion;
}());



/***/ }),

/***/ "./src/app/models/perfil.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Perfil; });
var Perfil = /** @class */ (function () {
    function Perfil(nameexp, descrip_exp, name_empresa, descrip_empresa, fecha_inicio, fecha_final) {
        this.nameexp = nameexp;
        this.descrip_exp = descrip_exp;
        this.name_empresa = name_empresa;
        this.descrip_empresa = descrip_empresa;
        this.fecha_inicio = fecha_inicio;
        this.fecha_final = fecha_final;
    }
    return Perfil;
}());



/***/ }),

/***/ "./src/app/models/portafolio.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Portafolio; });
var Portafolio = /** @class */ (function () {
    function Portafolio(titulo, tipo, titulo2, descripcion, categoria, image) {
        this.titulo = titulo;
        this.tipo = tipo;
        this.titulo2 = titulo2;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.image = image;
    }
    return Portafolio;
}());



/***/ }),

/***/ "./src/app/models/post.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
var Post = /** @class */ (function () {
    function Post(_id, title, resume, description, date, image, video, idvideo, category, user) {
        this._id = _id;
        this.title = title;
        this.resume = resume;
        this.description = description;
        this.date = date;
        this.image = image;
        this.video = video;
        this.idvideo = idvideo;
        this.category = category;
        this.user = user;
    }
    return Post;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(_id, name, surname, email, password, role, image, activo) {
        this._id = _id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.role = role;
        this.image = image;
        this.activo = activo;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/service/categoria.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__("./src/app/service/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoriaService = /** @class */ (function () {
    function CategoriaService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].url;
    }
    CategoriaService.prototype.getCategoria = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get(this.url + 'getcategoria/', options).map(function (res) { return res.json(); });
    };
    CategoriaService.prototype.savecategoria = function (categoria) {
        var params = JSON.stringify(categoria);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post(this.url + 'agregar-categoria', params, { headers: headers }).map(function (res) { return res.json(); });
    };
    CategoriaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CategoriaService);
    return CategoriaService;
}());



/***/ }),

/***/ "./src/app/service/educacion.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EducacionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__("./src/app/service/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EducacionService = /** @class */ (function () {
    function EducacionService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].url;
    }
    EducacionService.prototype.getEducacion = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get(this.url + 'mostrareducacion/', options)
            .map(function (res) { return res.json(); });
    };
    EducacionService.prototype.getEducacionOne = function (token, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get(this.url + 'geteducacion/' + id, options)
            .map(function (res) { return res.json(); });
    };
    EducacionService.prototype.saveEducacion = function (token, educacion) {
        var params = JSON.stringify(educacion);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.post(this.url + 'saveeducacion', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    EducacionService.prototype.updateEducacion = function (token, id, educacion) {
        var params = JSON.stringify(educacion);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        //let options= new RequestOptions({headers:headers});
        return this._http.put(this.url + 'updateeducacion/' + id, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    EducacionService.prototype.deleteEducacion = function (token, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.delete(this.url + 'deleteeducacion/' + id, options)
            .map(function (res) { return res.json(); });
    };
    EducacionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], EducacionService);
    return EducacionService;
}());



/***/ }),

/***/ "./src/app/service/global.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GLOBAL; });
var GLOBAL = {
    //   url:'https://jorgecastillodeveloper.pro/api/'
    // url:'https://shrouded-thicket-96067.herokuapp.com/api/'
    url: 'http://165.227.221.167:9103/api/',
};


/***/ }),

/***/ "./src/app/service/perfil.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__("./src/app/service/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PerfilService = /** @class */ (function () {
    function PerfilService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].url;
    }
    PerfilService.prototype.getPerfil = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get(this.url + 'mostrarperfil/', options)
            .map(function (res) { return res.json(); });
    };
    PerfilService.prototype.savePerfil = function (token, perfil) {
        var params = JSON.stringify(perfil);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.post(this.url + 'saveperfil', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PerfilService.prototype.getPerfilone = function (token, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get(this.url + 'getperfil/' + id, options)
            .map(function (res) { return res.json(); });
    };
    PerfilService.prototype.updatePerfil = function (token, id, perfil) {
        var params = JSON.stringify(perfil);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        //let options= new RequestOptions({headers:headers});
        return this._http.put(this.url + 'updateperfil/' + id, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PerfilService.prototype.deleteOerfil = function (token, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.delete(this.url + 'deleteperfil/' + id, options)
            .map(function (res) { return res.json(); });
    };
    PerfilService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], PerfilService);
    return PerfilService;
}());



/***/ }),

/***/ "./src/app/service/portafolio.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortafolioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__("./src/app/service/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PortafolioService = /** @class */ (function () {
    function PortafolioService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].url;
    }
    PortafolioService.prototype.getPortafolios = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get(this.url + 'getportafolios/', options)
            .map(function (res) { return res.json(); });
    };
    PortafolioService.prototype.savePortafolio = function (token, portafolio) {
        var params = JSON.stringify(portafolio);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.post(this.url + 'saveportafolio', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PortafolioService.prototype.getPortafolioone = function (token, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get(this.url + 'getportafolioone/' + id, options)
            .map(function (res) { return res.json(); });
    };
    PortafolioService.prototype.updatePortafolio = function (token, id, portafolio) {
        var params = JSON.stringify(portafolio);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.put(this.url + 'updateportafolio/' + id, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PortafolioService.prototype.deletePortafolio = function (token, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.delete(this.url + 'deleteportafolio/' + id, options)
            .map(function (res) { return res.json(); });
    };
    PortafolioService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], PortafolioService);
    return PortafolioService;
}());



/***/ }),

/***/ "./src/app/service/post.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__("./src/app/service/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostService = /** @class */ (function () {
    function PostService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].url;
    }
    PostService.prototype.getPosts = function (token, page) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get(this.url + 'posts/' + page, options).map(function (res) { return res.json(); });
    };
    PostService.prototype.getPostsCat = function (token, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get(this.url + 'filterpost/' + id + '/', options).map(function (res) { return res.json(); });
    };
    //    Metodo para contar numero de post segun categorias
    PostService.prototype.getcountPost = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get(this.url + 'countpost/', options).map(function (res) { return res.json(); });
    };
    // Fin
    PostService.prototype.endPost = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get(this.url + 'endpost', options).map(function (res) { return res.json(); });
    };
    PostService.prototype.getPostsOne = function (slug) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get(this.url + 'getpostone/' + slug, options).map(function (res) { return res.json(); });
    };
    //  Metodo para buscar PPost
    PostService.prototype.getsearchpost = function (search) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var option = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get(this.url + 'searchpost/' + search, option).map(function (res) { return res.json(); });
    };
    // Fin
    PostService.prototype.getPostsOneEdit = function (token, slug) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get(this.url + 'getpostone/' + slug, options).map(function (res) { return res.json(); });
    };
    PostService.prototype.savePost = function (token, post) {
        var params = JSON.stringify(post);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post(this.url + 'agregar-post', params, { headers: headers }).map(function (res) { return res.json(); });
    };
    PostService.prototype.updatePost = function (token, id, post) {
        var params = JSON.stringify(post);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.put(this.url + 'updatepost/' + id, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.deletePost = function (token, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.delete(this.url + 'deletepost/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/service/upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__("./src/app/service/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UploadService = /** @class */ (function () {
    function UploadService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].url;
    }
    UploadService.prototype.makeFileRequest = function (url, params, files, token, name) {
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append(name, files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Authorization', token);
            xhr.send(formData);
        });
    };
    UploadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "./src/app/service/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global__ = __webpack_require__("./src/app/service/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
        this.url = __WEBPACK_IMPORTED_MODULE_3__global__["a" /* GLOBAL */].url;
    }
    UserService.prototype.singup = function (user_to_login, gethash) {
        if (gethash === void 0) { gethash = null; }
        if (gethash != null) {
            user_to_login.gethash = gethash;
        }
        var json = JSON.stringify(user_to_login);
        var params = json;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'login', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.register = function (user_to_login) {
        var json = JSON.stringify(user_to_login);
        var params = json;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return this._http.post(this.url + 'Register', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.getUsers = function (token, page) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get(this.url + 'users/' + page, options).map(function (res) { return res.json(); });
    };
    UserService.prototype.getUserOne = function (token, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.get(this.url + 'userone/' + id, options).map(function (res) { return res.json(); });
    };
    UserService.prototype.updateUser = function (token, user, id) {
        var params = JSON.stringify(user);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.put(this.url + 'update-user/' + id, params, options).map(function (res) { return res.json(); });
    };
    // Obtener roles de usuarios
    // getroles(){
    //     let headers=new Headers({
    //         'Content-Type':'application/json'
    //     });
    //     let options= new RequestOptions({headers:headers});
    //     return this._http.get(this.url+'getroles/',options).map(res=>res.json());
    // }
    // Fin
    //Obtener Token y Identity
    UserService.prototype.getIdentity = function () {
        var identity = JSON.parse(localStorage.getItem('identity'));
        if (identity != 'undefined') {
            this.identity = identity;
        }
        else {
            this.identity = null;
        }
        return this.identity;
    };
    UserService.prototype.getToken = function () {
        var token = localStorage.getItem('token');
        if (token != 'undefined') {
            this.token = token;
        }
        else {
            this.token = null;
        }
        return this.token;
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/facecomponent/facecomponent.component.css":
/***/ (function(module, exports) {

module.exports = ".face{\r\n  float: right;\r\n\r\n  margin-right: 15px;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .face {\r\n    float: none;\r\n\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/shared/facecomponent/facecomponent.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"face col-4\">\n    <fb-page href=\"https://www.facebook.com/jorgeacastillomoreno/\"></fb-page>\n    <br><br>\n    <span><fb-like href=\"http://www.jorgecastillodeveloper.pro/\"></fb-like></span>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/facecomponent/facecomponent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacecomponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FacecomponentComponent = /** @class */ (function () {
    function FacecomponentComponent() {
    }
    FacecomponentComponent.prototype.ngOnInit = function () {
    };
    FacecomponentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-facecomponent',
            template: __webpack_require__("./src/app/shared/facecomponent/facecomponent.component.html"),
            styles: [__webpack_require__("./src/app/shared/facecomponent/facecomponent.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FacecomponentComponent);
    return FacecomponentComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ".footer {\r\n  margin-top: 10px;\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    /* Set the fixed height of the footer here */\r\n    height: 60px;\r\n    line-height: 60px; /* Vertically center the text there */\r\n    background-color: #f5f5f5;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"container\">\n        <span class=\"text-muted\">Ing. Jorge Antonio Castillo Moreno - 2018</span>\n\n\n    </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/shared/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" [routerLink]=\"['/']\">JC Developer</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/']\">Inicio</a>\n          </li>\n          <!--\n           -->\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/sobremi']\">Sobre mi</a>\n          </li>\n          <!--\n           -->\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/portafolio']\">Portafolio</a>\n          </li>\n          <!--\n           -->\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/service']\">Servicios</a>\n          </li>\n          <!--\n           -->\n          <li class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/contacto']\">Contacto</a>\n          </li>\n          <li *ngIf=\"!identity\" class=\"nav-item\">\n              <a class=\"nav-link\" [routerLink]=\"['/register']\">Registrarse</a>\n          </li>\n          <li *ngIf=\"identity\" class=\"nav-item dropdown\">\n              <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        Administracion\n                      </a>\n              <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                  <a *ngIf=\"identity && identity.roles.roles=='administrador'\" class=\"dropdown-item\" [routerLink]=\"['/perfiladd']\">Agregar Perfil</a>\n                  <a *ngIf=\"identity && identity.roles.roles=='administrador'\" class=\"dropdown-item\" [routerLink]=\"['/educacionadd']\">Agregar Educacion</a>\n                  <a *ngIf=\"identity && identity.roles.roles=='administrador'\" class=\"dropdown-item\" [routerLink]=\"['/portafolioadd']\">Agregar Portafolio</a>\n                  <a *ngIf=\"identity && identity.roles.roles=='administrador'\" class=\"dropdown-item\" [routerLink]=\"['/userslist']\">Lista de Usuarios</a>\n                  <div class=\"dropdown-divider\"></div>\n                  <a *ngIf=\"identity && identity.roles.roles=='administrador' || identity && identity.roles.roles=='Usuario'\" class=\"dropdown-item\" [routerLink]=\"['/postadd']\">Nuevo Post</a>\n              </div>\n          </li>\n\n          <li class=\"nav-item dropdown\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                      Categorias\n            </a>\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n              <div *ngFor=\"let c of cate\" routerLinkActive='active'>\n                <a class=\"dropdown-item\" [routerLink]=\"['/categoria',c._id]\" >{{c.categoria}}</a>\n              </div>\n\n            </div>\n        </li>\n\n          <!-- <li>\n                <a [routerLink]=\"['/admin']\">Blog</a>\n            </li> -->\n\n\n          <li *ngIf=\"identity\" class=\"nav-item\">\n              <a class=\"nav-link\" (click)=\"logout()\">Cerrar Session</a>\n          </li>\n          <label for=\"\"><input type=\"checkbox\" name=\"on\" id=\"on\" #chek (change)=\"on=chek.checked\"></label>\n\n          <div *ngIf=\"!identity && on\" style=\"display:inline-flex \" class=\"font-login\">\n              <form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"form-inline my-2 my-lg-0\">\n                  <div class=\"form-group\">\n                      <input type=\"email\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"user.email\" id=\"inputEmail\" class=\"form-control mr-sm-2\" placeholder=\"Email\" required=\"\" autofocus=\"\">\n\n                      <input type=\"password\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"user.password\" id=\"inputPassword\" class=\"form-control mr-sm-2\" placeholder=\"Contraseña\" required=\"\">\n                      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Iniciar Session</button>\n                  </div>\n\n              </form>\n          </div>\n\n      </ul>\n      <form #searchForm=\"ngForm\" class=\"form-inline my-2 my-lg-0\" role=\"search\" (ngSubmit)=\"SearchPost(search.value)\">\n          <input (ngkeyup)=\"SearchPost(search.value)\" #search class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n          <!-- <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Buscar</button> -->\n          <a class=\"btn btn-outline-success my-2 my-sm-0\" [routerLink]=\"['/SearchPost',search.value]\">Buscar</a>\n      </form>\n\n\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_user_service__ = __webpack_require__("./src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_global__ = __webpack_require__("./src/app/service/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__("./src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_facebook__ = __webpack_require__("./node_modules/ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_categoria_service__ = __webpack_require__("./src/app/service/categoria.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_post_service__ = __webpack_require__("./src/app/service/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(_userService, _route, _router, fb, _categoriaService, _postService, meta, modalService) {
        this._userService = _userService;
        this._route = _route;
        this._router = _router;
        this.fb = fb;
        this._categoriaService = _categoriaService;
        this._postService = _postService;
        this.meta = meta;
        this.modalService = modalService;
        this.page = 2;
        this.contador = 0;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]('', '', '', '', '', '', '', '');
        this.url = __WEBPACK_IMPORTED_MODULE_1__service_global__["a" /* GLOBAL */].url;
        var params = {
            appId: '1399875313450062',
            xfbml: true,
            version: 'v2.8'
        };
        fb.init(params);
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.getCategoria();
    };
    NavbarComponent.prototype.getCategoria = function () {
        var _this = this;
        this._categoriaService.getCategoria(this.token).subscribe(function (response) {
            if (!response.categoria) {
                console.log('No Hay categoria');
            }
            else {
                _this.cate = response.categoria;
                _this._postService.getcountPost().subscribe(function (resp) {
                    _this.countp = resp.postcat;
                    for (var i = 0; i < _this.countp.length; i++) {
                        var element = _this.countp[i];
                        for (var j = 0; j < _this.cate.length; j++) {
                            var element2 = _this.cate[j];
                            if (element.category == element2._id) {
                                _this.contador = _this.contador + 1;
                                console.log(_this.contador);
                            }
                        }
                    }
                });
            }
        }, function (error) {
            var errorMessage = error;
            var body = JSON.parse(error._body);
            _this.alertMessage = body.message;
            if (errorMessage != null) {
                _this.alertMessage = body.message;
                console.log(error);
            }
        });
    };
    // Metodo para contar los post por categoria
    NavbarComponent.prototype.SearchPost = function (search) {
        var _this = this;
        //this._route.params.forEach((params:Params)=>{
        if (search == '') {
            return this._router.navigate(['/']);
        }
        this.search = search;
        // let page=+params['page'];
        // if (!page) {
        //     page=2
        // } else {
        //     this.page=page+2;
        // }
        this._postService.getsearchpost(this.search).subscribe(function (response) {
            if (!response.searchPost) {
                _this._router.navigate(['/']);
            }
            else {
                _this.posts = response.searchPost;
                _this._router.navigate(['/SearchPost/' + _this.search]);
            }
        }, function (error) {
            var errorMessage = error;
            var body = JSON.parse(error._body);
            _this.alertMessage = body.message;
            if (errorMessage != null) {
                _this.alertMessage = body.message;
                console.log(error);
            }
        });
        // });
    };
    NavbarComponent.prototype.onSubmit = function () {
        var _this = this;
        this._userService.singup(this.user).subscribe(function (response) {
            var identity = response.user;
            _this.identity = identity;
            //console.log(response.message);
            if (response.message) {
                alert(response.message);
            }
            else if (!_this.identity._id) {
                alert('El Usuario no esta correctamente logeado');
                console.log(_this.identity);
            }
            else {
                //crear elemento del localStorage
                localStorage.setItem('identity', JSON.stringify(identity));
                //Conseguir el token para enviarlo a cada peticion
                _this._userService.singup(_this.user, 'true').subscribe(function (response) {
                    var token = response.token;
                    _this.token = token;
                    if (_this.token.length <= 0) {
                        alert('El Token no se ha generado');
                    }
                    else {
                        //se crea el elemento en el localStorage
                        localStorage.setItem('token', token);
                        _this.user = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* User */]('', '', '', '', '', '', '', '');
                    }
                    //    this._router.navigate(['/']);
                }, function (error) {
                    var errorMessage = error;
                    var body = JSON.stringify(error._body);
                    if (errorMessage != null) {
                        _this.errorMessage = body;
                        console.log(error);
                    }
                });
            }
        }, function (error) {
            var errorMessage = error;
            var body = JSON.stringify(error._body);
            if (errorMessage != null) {
                _this.errorMessage = body;
                console.log(error);
                alert(_this.errorMessage);
            }
        });
    };
    NavbarComponent.prototype.logout = function () {
        localStorage.removeItem('identity');
        localStorage.removeItem('token');
        localStorage.clear();
        this.identity = null;
        this.token = null;
        this._router.navigate(['/']);
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/shared/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__service_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_facebook__["b" /* FacebookService */],
            __WEBPACK_IMPORTED_MODULE_6__service_categoria_service__["a" /* CategoriaService */],
            __WEBPACK_IMPORTED_MODULE_7__service_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["Meta"],
            __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/views/admin.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"container\" >\r\n  <div class=\"row\">\r\n    <div class=\"col-6\" *ngIf=\"!identity\">\r\n      <div *ngIf=\"errorMessage\" class=\"alert alert-warning alert-dismissible\" role=\"alert\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n                <strong>Warning!</strong>{{errorMessage}}\r\n              </div>\r\n\r\n          <form #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\" class=\"form-signin\">\r\n            <h2 class=\"form-signin-heading\"></h2>\r\n            <label for=\"inputEmail\" class=\"sr-only\">Iniciar Sessión</label>\r\n            <input type=\"email\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"user.email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email\" required=\"\" autofocus=\"\">\r\n            <label for=\"inputPassword\" class=\"sr-only\">Contraseña</label>\r\n            <input type=\"password\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"user.password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Contraseña\" required=\"\">\r\n            <div class=\"checkbox\">\r\n              <label>\r\n                <input type=\"checkbox\" value=\"remember-me\"> Recordar\r\n              </label>\r\n            </div>\r\n            <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Iniciar Session</button>\r\n          </form>\r\n    </div>\r\n\r\n    <div class=\"col-8\" *ngIf=\"identity\" >\r\n\r\n      <!-- <label for=\"\">Checkear para agregar Experiencia o Estudios<input class=\"form-control\" type=\"checkbox\" name=\"\" id=\"\" #chek (change)=\"perfil_exp=chek.checked\"></label>  -->\r\n<!-- <div *ngIf=\"!perfil_exp\"> -->\r\n      <form #perfilForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"form-group\">\r\n        <label for=\"\">Nombre de Experiencia</label>\r\n        <input type=\"text\" name=\"nameexp\" #nameexp=\"ngModel\" [(ngModel)]=\"perfil.nameexp\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Introduzca el Texo\" required=\"\" autofocus=\"\">\r\n\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"\">Descripcion Experiencia</label>\r\n        <textarea #txtdescripcion_experiencia=\"ngModel\" [(ngModel)]=\"perfil.descrip_exp\" class=\"form-control\" id=\"txtdescrpcion_experiencia\" name=\"txtdescripcion_experiencia\"  placeholder=\"Indroduzca la Descripcion\" cols=\"30\" rows=\"10\"></textarea>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"\">Nombre de la Empresa</label>\r\n        <input #txtempresa=\"ngModel\" [(ngModel)]=\"perfil.name_empresa\" type=\"text\" class=\"form-control\" id=\"txtempresa\" name=\"txtempresa\"  placeholder=\"Indroduzca la Descripcion\">\r\n\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"\">Descripcion Empresa</label>\r\n        <textarea #txtdescripcion_empresa=\"ngModel\" [(ngModel)]=\"perfil.descrip_empresa\" class=\"form-control\" id=\"txtdescrpcion_empresa\" name=\"txtdescripcion_empresa\"  placeholder=\"Indroduzca la Descripcion\" cols=\"30\" rows=\"10\"></textarea>\r\n\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"\">Fecha de Inicio</label>\r\n        <input #txtfexha_inicio=\"ngModel\" [(ngModel)]=\"perfil.fecha_inicio\"  class=\"form-control\" type=\"date\" name=\"txtfecha_inicio\" id=\"txtfecha_inicio\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"\">Fecha Final</label>\r\n        <input #txtfecha_final=\"ngModel\" [(ngModel)]=\"perfil.fecha_final\" class=\"form-control\" type=\"date\" name=\"txtfecha_final\" id=\"txtfecha_final\">\r\n      </div>\r\n\r\n\r\n      <input class=\"btn btn-success\" type=\"submit\" value=\"{{titulo}}\"/>\r\n    </form>\r\n  <!-- </div> -->\r\n\r\n\r\n\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/views/categoria.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n\r\n    <div class=\"progress\" *ngIf=\"u\">\r\n      <div class=\"indeterminate\"></div>\r\n   </div>\r\n\r\n   <div class=\"container\">\r\n     <div class=\"row\">\r\n       <div class=\"col-12\">\r\n              <div class=\"col-12\" *ngFor=\"let post of posts\">\r\n                <div class=\"card\">\r\n                    <img class=\"card-img-top\" src=\"{{url+'get-video-post/'+post.image}}\" alt=\"Card image cap\">\r\n\r\n                    <div class=\"card-content\">\r\n                      <h3>\r\n                        <a class=\"\" [routerLink]='[\"/postdetails\",post.slug]'>{{post.title}}</a>\r\n                      </h3>\r\n                      <div class=\"mb-1 text-muted\">{{post.date}}</div>\r\n                      <div class=\"col-sm-12 col-12 col-md-12 col-lg-12\">{{post.resume}}</div>\r\n\r\n                    </div>\r\n                </div>\r\n          </div>\r\n       </div>\r\n     </div>\r\n   </div>\r\n\r\n\r\n\r\n\r\n<app-footer></app-footer>\r\n\r\n"

/***/ }),

/***/ "./src/app/views/contacto.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<section id=\"contact\" class=\"body\">\n\n\t\t<div class=\"container\">\n   \t\t<div class=\"col-12\">\n\n\n   \t\t\t<h1 class=\"text-center\">Contactanos...</h1>\n\n   \t\t\t<p class=\"lead\">Sera un placer comunicarnos con usted. Llamanos o envianos un e-mail y asi trabajaremos juntos por el progreso de tu equipo.</p>\n\n   \t\t</div>\n\t   </div>\n\n\t   <div class=\"container marketing\">\n\n\t\t\t\t  <!-- Three columns of text below the carousel -->\n\t\t\t\t  <div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t\t<span class=\"icon\"><i class=\"fas fa-map-marker-alt fa-3x\"></i></span>\n\t\t\t\t\t  <h3></h3>\n\t\t\t\t\t  <p>El Sauce-Leon</p>\n\t\t\t\t\t  <p>Nicaragua,CA</p>\n\t\t\t\t\t  <p>22800 NI</p>\n\n\t\t\t\t\t</div><!-- /.col-lg-4 -->\n\n\t\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t\t<span class=\"text-center\"><i class=\"fas fa-at fa-3x\"></i></span>\n\n\t\t\t\t\t  <p>jorgecastillodeveloper@gmail.com</p>\n\n\t\t\t\t\t</div><!-- /.col-lg-4 -->\n\n\t\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t\t<span class=\"icon\"><i class=\"fas fa-phone-volume fa-3x\"></i></span>\n\t\t\t\t\t\t<p>Telefono: (+505) 2319-2618<br>\n\t\t\t\t\t\t\tCelular: (+505) 8616-5414<br>\n\t\t\t\t\t\t\t\t  / (+505) 8130-3747\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div><!-- /.col-lg-4 -->\n\n\t\t\t\t  </div><!-- /.row -->\n\t   </div>\n\n\t</section> <!-- /contact -->\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/views/educacion.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div *ngIf=\"identity\">\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-8\">\r\n\r\n\r\n    <form #educacionForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"form-group\">\r\n      <label for=\"\">Nombre de Titulo</label>\r\n      <input type=\"text\" name=\"name_titulo\" #name_titulo=\"ngModel\" [(ngModel)]=\"educacion.name_titulo\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Introduzca el Texo\" required=\"\" autofocus=\"\">\r\n\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"\">Descripcion de Estudio</label>\r\n      <textarea #txtdescripcion_estudio=\"ngModel\" [(ngModel)]=\"educacion.descrip_titulo\" class=\"form-control\" id=\"txtdescrpcion_titulo\" name=\"txtdescripcion_experiencia\"  placeholder=\"Indroduzca la Descripcion\" cols=\"30\" rows=\"10\"></textarea>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"\">Nombre de la Institucion</label>\r\n      <input #txtinstitucion=\"ngModel\" [(ngModel)]=\"educacion.name_inst\" type=\"text\" class=\"form-control\" id=\"txtinstitucion\" name=\"txtinstitucion\"  placeholder=\"Indroduzca la Descripcion\">\r\n\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"\">Descripcion de la Institucion</label>\r\n      <textarea #txtdescripcion_institucion=\"ngModel\" [(ngModel)]=\"educacion.descrip_inst\" class=\"form-control\" id=\"txtdescrpcion_institucion\" name=\"txtdescripcion_institucion\"  placeholder=\"Indroduzca la Descripcion\" cols=\"30\" rows=\"10\"></textarea>\r\n\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"\">Fecha de Inicio</label>\r\n      <input #txtfexha_inicio=\"ngModel\" [(ngModel)]=\"educacion.fecha_inicio\"  class=\"form-control\" type=\"date\" name=\"txtfecha_inicio\" id=\"txtfecha_inicio\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"\">Fecha Final</label>\r\n      <input #txtfecha_final=\"ngModel\" [(ngModel)]=\"educacion.fecha_final\" class=\"form-control\" type=\"date\" name=\"txtfecha_final\" id=\"txtfecha_final\">\r\n    </div>\r\n\r\n\r\n    <input class=\"btn btn-success\" type=\"submit\" value=\"{{titulo}}\"/>\r\n  </form>\r\n</div>\r\n\r\n</div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/home.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<app-facecomponent></app-facecomponent>\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n             <div class=\"card\" *ngFor=\"let pub of publication\">\r\n                <img class=\"card-img-top\" src=\"{{url+'get-video-post/'+pub.image}}\" alt=\"Card image cap\">\r\n                <div class=\"card-content \">\r\n                    <h5 class=\"card-title\"><a rel=\"canonical\" [routerLink]='[\"/postdetails\",pub.slug]'>{{pub.title}}</a></h5>\r\n                    <p class=\"card-text\">{{pub.resume}}</p>\r\n                    <p class=\"card-text\"><small class=\"text-muted\">Publicado por: {{pub.user.name}} {{pub.user.surname}}</small></p>\r\n                    <p class=\"card-text\"><small class=\"text-muted\">{{pub.date}}</small></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <!-- <div class=\"jumbotron p-3 p-md-5 text-white rounded bg-dark\" *ngFor=\"let pub of publication\">\r\n      <div class=\"col-md-6 px-0\">\r\n        <h1 class=\"display-4 font-italic\">{{pub.title}}</h1>\r\n        <p class=\"lead my-3\">{{pub.resume}}</p>\r\n        <p class=\"lead mb-0\"><a [routerLink]='[\"/postdetails\",pub._id]' class=\"text-white font-weight-bold\">Leer Mas...</a></p>\r\n      </div>\r\n    </div> -->\r\n    <div class=\"container\" *ngIf=\"u\">\r\n        <div class=\"row\">\r\n            <div id=\"loader\">\r\n                <div class=\"dot\"></div>\r\n                <div class=\"dot\"></div>\r\n                <div class=\"dot\"></div>\r\n                <div class=\"dot\"></div>\r\n                <div class=\"dot\"></div>\r\n                <div class=\"dot\"></div>\r\n                <div class=\"dot\"></div>\r\n                <div class=\"dot\"></div>\r\n                <div class=\"lading\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <!-- <i *ngIf=\"u\" class=\"fa far fa-cog u\" style=\"font-size:24px; \"></i> -->\r\n\r\n\r\n    <div *ngFor=\"let post of posts\">\r\n\r\n\r\n            <div class=\"col-sm-12 col-md-8 card-content\">\r\n              <img class=\"card-img-top\" src=\"{{url+'get-video-post/'+post.image}}\" alt=\"Card image cap\">\r\n              <blockquote class=\"blockquote mb-0 card-body\">\r\n                <p><a  [routerLink]='[\"/postdetails\",post.slug]'>{{ post.title }}</a></p>\r\n                <footer class=\"blockquote-footer\">\r\n                  <small class=\"text-muted\">\r\n                    {{ post.date }} <cite title=\"Source Title\">By {{ post.user.name }} {{ post.user.surname }}</cite>\r\n                  </small>\r\n                </footer>\r\n              </blockquote>\r\n            </div>\r\n            <br><br>\r\n        </div>\r\n\r\n\r\n    <ul class=\"pagination pull-right\">\r\n        <a class=\"btn btn-danger\" [routerLink]=\"['/home',page]\"><i class=\"fas fa-plus\"></i></a>\r\n\r\n    </ul>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/views/login.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form-signin\" #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n    <img class=\"mb-4\" src=\"https://getbootstrap.com/assets/brand/bootstrap-solid.svg\" alt=\"\" width=\"72\" height=\"72\">\r\n    <h1 class=\"h3 mb-3 font-weight-normal\">Please sign in</h1>\r\n    <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\r\n    <input name=\"email\" type=\"email\" #email=\"ngModel\" [(ngModel)]=\"user.email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\r\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\r\n    <input name=\"password\" type=\"password\" #password=\"ngModel\" [(ngModel)]=\"user.password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required>\r\n    <div class=\"checkbox mb-3\">\r\n        <label>\r\n        <input type=\"checkbox\" value=\"remember-me\"> Remember me\r\n      </label>\r\n    </div>\r\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\r\n    <p class=\"mt-5 mb-3 text-muted\">&copy; 2017-2018</p>\r\n</form>"

/***/ }),

/***/ "./src/app/views/perfil-add.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div *ngIf=\"identity\">\r\n\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-8\">\r\n\r\n\r\n      <form #educacionForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"form-group\">\r\n        <label for=\"\">Nombre de Titulo</label>\r\n        <input type=\"text\" name=\"name_titulo\" #name_titulo=\"ngModel\" [(ngModel)]=\"perfil.nameexp\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Introduzca el Texo\" required=\"\" autofocus=\"\">\r\n\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"\">Descripcion de Estudio</label>\r\n        <textarea #txtdescripcion_estudio=\"ngModel\" [(ngModel)]=\"perfil.descrip_exp\" class=\"form-control\" id=\"txtdescrpcion_titulo\" name=\"txtdescripcion_experiencia\"  placeholder=\"Indroduzca la Descripcion\" cols=\"30\" rows=\"10\"></textarea>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"\">Nombre de la Institucion</label>\r\n        <input #txtinstitucion=\"ngModel\" [(ngModel)]=\"perfil.name_empresa\" type=\"text\" class=\"form-control\" id=\"txtinstitucion\" name=\"txtinstitucion\"  placeholder=\"Indroduzca la Descripcion\">\r\n\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"\">Descripcion de la Institucion</label>\r\n        <textarea #txtdescripcion_institucion=\"ngModel\" [(ngModel)]=\"perfil.descrip_empresa\" class=\"form-control\" id=\"txtdescrpcion_institucion\" name=\"txtdescripcion_institucion\"  placeholder=\"Indroduzca la Descripcion\" cols=\"30\" rows=\"10\"></textarea>\r\n\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"\">Fecha de Inicio</label>\r\n        <input #txtfexha_inicio=\"ngModel\" [(ngModel)]=\"perfil.fecha_inicio\"  class=\"form-control\" type=\"date\" name=\"txtfecha_inicio\" id=\"txtfecha_inicio\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"\">Fecha Final</label>\r\n        <input #txtfecha_final=\"ngModel\" [(ngModel)]=\"perfil.fecha_final\" class=\"form-control\" type=\"date\" name=\"txtfecha_final\" id=\"txtfecha_final\">\r\n      </div>\r\n\r\n\r\n      <input class=\"btn btn-success\" type=\"submit\" value=\"{{titulo}}\"/>\r\n    </form>\r\n  </div>\r\n\r\n  </div>\r\n  </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/views/portafolio-add.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div *ngIf=\"identity\">\r\n\r\n        <div class=\"container\">\r\n          <div class=\"row\">\r\n            <div class=\"col-8\">\r\n\r\n\r\n          <form #educacionForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n          <div class=\"form-group\">\r\n            <label for=\"\">Titulo</label>\r\n            <input type=\"text\" name=\"titulo\" #titulo=\"ngModel\" [(ngModel)]=\"portafolio.titulo\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Introduzca el Texo\" required=\"\" autofocus=\"\">\r\n\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"\">Tipo</label>\r\n            <textarea #tipo=\"ngModel\" [(ngModel)]=\"portafolio.tipo\" class=\"form-control\" id=\"tipo\" name=\"tipo\"  placeholder=\"Indroduzca la Descripcion\" cols=\"30\" rows=\"10\"></textarea>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"\">Titulo para Modal</label>\r\n            <input #titulo2=\"ngModel\" [(ngModel)]=\"portafolio.titulo2\" type=\"text\" class=\"form-control\" id=\"txtinstitucion\" name=\"txtinstitucion\"  placeholder=\"Indroduzca la Descripcion\">\r\n\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"\">Descripcion para Modal</label>\r\n            <textarea #descripcion=\"ngModel\" [(ngModel)]=\"portafolio.descripcion\" class=\"form-control\" id=\"txtdescrpcion_institucion\" name=\"txtdescripcion_institucion\"  placeholder=\"Indroduzca la Descripcion\" cols=\"30\" rows=\"10\"></textarea>\r\n\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n                <label for=\"\">Categoria</label>\r\n                <input #categoria=\"ngModel\" [(ngModel)]=\"portafolio.categoria\" type=\"text\" class=\"form-control\" id=\"txtinstitucion\" name=\"txtinstitucion\"  placeholder=\"Indroduzca la Descripcion\">\r\n\r\n              </div>\r\n\r\n\r\n              <div *ngIf=\"is_edit\">\r\n                <div class=\"image_for_edit\" *ngIf=\"portafolio.image && portafolio.image != 'null'\">\r\n                  <div class=\"container\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-4\">\r\n                        <img src=\"{{url+'get-image-portafolio/'+portafolio.image}}\" alt=\"\" class=\"img img-responsive\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n                <p>\r\n                  <label>Sube la imagen del artista</label>\r\n                  <input type=\"file\" name=\"\" value=\"\" placeholder=\"Subir Imagen...\" (change)=\"fileChangeEvent($event)\">\r\n                </p>\r\n              </div>\r\n\r\n\r\n          <input class=\"btn btn-success\" type=\"submit\" value=\"{{titulo}}\"/>\r\n        </form>\r\n      </div>\r\n\r\n      </div>\r\n      </div>\r\n      </div>\r\n"

/***/ }),

/***/ "./src/app/views/portafolio.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<!-- Portfolio Section\r\n   ================================================== -->\r\n\r\n     <div class=\"container body\">\r\n       <div class=\"row\">\r\n         <div class=\"col-12 col-md-12 entrada\">\r\n\r\n             <div *ngFor=\"let portafolio of portafolios\">\r\n                <div class=\"card\" style=\"width: 18rem;\">\r\n                <img class=\"card-img-top\" src=\"{{url + 'get-image-portafolio/' + portafolio.image}}\" alt=\"Card image cap\">\r\n                <div class=\"card-body\">\r\n                  <h5 class=\"card-title\">{{portafolio.titulo}}</h5>\r\n                  <p class=\"card-text\">{{portafolio.descripcion}}</p>\r\n                  <a [routerLink]=\"['/updateportafolio',portafolio._id]\" *ngIf=\"identity && identity.roles.roles=='administrador'\" class=\"btn btn-success\">Editar Portafolio</a>\r\n                  <a class=\"btn btn-danger\" *ngIf=\"identity && identity.roles.roles=='administrador'\" (click)=\"onDeletePortafolio(portafolio._id)\">Eliminar</a>\r\n                </div>\r\n                </div>\r\n\r\n              </div>\r\n\r\n         </div>\r\n       </div>\r\n     </div>\r\n\r\n\r\n\r\n     <div class=\"fb-comments\" data-width=\"\"></div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/views/post-add.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Nueva Categoria</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form #categoriaForm=\"ngForm\" (ngSubmit)=\"saveCat()\">\r\n      <div class=\"form-group\">\r\n        <label for=\"exampleFormControlInput1\">Nombre de Categoria</label>\r\n        <input required=\"required\" name=\"categoria\" #categoria=\"ngModel\" [(ngModel)]=\"cat.categoria\" type=\"text\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"Categoria\">\r\n      </div>\r\n      <input class=\"btn btn-dark\" type=\"submit\" value=\"Agregar\">\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c('Close click')\">Close</button>\r\n  </div>\r\n</ng-template>\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"col col-12\" *ngIf=\"identity\">\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <img class=\"img img-responsive\" *ngIf=\"u\" src=\"../../assets/img/giphy.gif\" alt=\"\">\r\n          <h2 *ngIf=\"u\">Cargando Archivo...Por Favor No salga de Esta Pagina</h2>\r\n          <form *ngIf=\"!u\" class=\"form-control\" (ngSubmit)=\"onSubmit()\" #postForm=\"ngForm\">\r\n                <div class=\"form-group\">\r\n                     <label>Tutulo: </label>\r\n                     <input class=\"form-control\" type=\"text\" name=\"title\" id=\"title\" #title=\"ngModel\" [(ngModel)]=\"post.title\">\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <label>Resumen: </label>\r\n                  <textarea class=\"form-control\" name=\"resume\" id=\"resume\" cols=\"30\" rows=\"10\" #resume=\"ngModel\" [(ngModel)]=\"post.resume\"></textarea>\r\n             </div>\r\n\r\n                <div class=\"form-group\">\r\n                  <ckeditor [(ngModel)]=\"post.description\" [config]=\"{uiColor: '#ffffff'}\"\r\n                  [config]=\"{extraPlugins: 'youtube'}\"\r\n\r\n\r\n                  debounce=\"500\"\r\n                  name=\"description\">\r\n\r\n                  </ckeditor>\r\n\r\n                </div>\r\n\r\n                <div ckeditor=\"cke.options\"\r\n                ng-model=\"cke.content\"\r\n                ready=\"cke.onReady()\"></div>\r\n                <div class=\"col-sm-12 col-12 col-md-12 col-lg-12\" *ngIf=\"is_edit\">\r\n                    <div class=\"image_for_edit\" *ngIf=\"post.image && post.image != 'null'\">\r\n                      <div class=\"container\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-4\">\r\n                             <img src=\"{{url+'get-image-post/'+post.image}}\" width=\"100%\" alt=\"\" class=\"img img-responsive\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                    </div>\r\n                    <p>\r\n                      <label>Sube la imagen del Post</label>\r\n                      <input type=\"file\" name=\"file\" value=\"\" placeholder=\"Subir Imagen...\" (change)=\"fileChangeEvent($event)\">\r\n                    </p>\r\n                  </div>\r\n\r\n\r\n\r\n                  <div class=\"form-group\">\r\n                    <label >Id Video</label>\r\n                    <input class=\"form-control\" #video=\"ngModel\" [(ngModel)]=\"post.video\" type=\"text\" name=\"video\" id=\"video\">\r\n                  </div>\r\n\r\n                  <div class=\"form-group\">\r\n                    <label >Categoria: </label>\r\n                    <select  class=\"form-control\" name=\"category\" id=\"category\" #category=\"ngModel\" [(ngModel)]=\"post.category\">\r\n                      <option *ngFor=\"let cat of categoria\" value=\"{{cat._id}}\">{{cat.categoria}}</option>\r\n                    </select>\r\n                    <a *ngIf=\"chek\" class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content)\"><i *ngIf=\"chek\" class=\"fas fa-plus\"></i>Nueva Categoria</a>\r\n                  </div>\r\n\r\n                  <input class=\"btn btn-warning\" type=\"submit\" value=\"{{titulo}}\">\r\n\r\n            </form>\r\n\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/post-details.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<!-- <div class=\"col col-8\">\r\n  <div class=\"row\">\r\n    <div [innerHTML] = \"publicacion.description\" class=\"col-12 col-sm-12\">\r\n\r\n    </div>\r\n  </div>\r\n</div> -->\r\n<div class=\"container body\">\r\n\r\n  <h4>Compartir</h4>\r\n  <fb-share href=\"http://www.jorgecastillodeveloper.pro/\"></fb-share>\r\n\r\n        <!-- <a > <strong class=\"d-inline-block mb-2 text-primary\">{{post.title}}</strong></a> -->\r\n        <!-- <div *ngIf=\"publicacion.video!='null'\">\r\n          <div class=\"col-sm-12 col-12 col-md-12 col-lg-12\" *ngIf=\"publicacion.video && publicacion.video != 'null'\">\r\n            <video width=\"100%\" controls src=\"{{url+'get-video-post/'+publicacion.video}}\"></video>\r\n          </div>\r\n        </div> -->\r\n\r\n        <div class=\"container\" *ngIf=\"publicacion.video && publicacion.video!= 'null'\">\r\n          <section class=\"panel panel-info\">\r\n            <div class=\"panel-heading\">\r\n\r\n            </div>\r\n            <div class=\"panel-body\">\r\n              <youtube-player\r\n                width='100%'\r\n                height=500\r\n                [videoId]=\"publicacion.video\"\r\n                (ready)=\"savePlayer($event)\"\r\n                (change)=\"onStateChange($event)\"\r\n              >\r\n              </youtube-player>\r\n            </div>\r\n          </section>\r\n\r\n        </div>\r\n\r\n        <div class=\"col-sm-12 col-12 col-md-12 col-lg-12\" *ngIf=\"publicacion.image && publicacion.image != 'null'\">\r\n            <img class=\"img img-responsive\" width=\"100%\"  src=\"{{url+'get-image-post/'+publicacion.image}}\">\r\n        </div>\r\n\r\n        <div class=\"col-sm-12 col-12 col-md-12 col-lg-12\" [innerHTML] = \"publicacion.description\"></div>\r\n\r\n        <div *ngIf=\"identity\">\r\n          <a class=\"btn btn-warning\" *ngIf=\"identity && identity._id==publicacion.user || identity.roles.roles=='administrador'\" [routerLink]='[\"/postedit\",publicacion.slug]'>Editar el Post</a>\r\n          <a class=\"btn btn-danger\" *ngIf=\"identity  && identity._id==publicacion.user || identity.roles.roles=='administrador'\" (click)=\"onDeletePost(publicacion._id)\">Eliminar el Post</a>\r\n        </div>\r\n\r\n        <h4>Dejatus comentarios</h4>\r\n        <fb-comments numposts=\"3\"></fb-comments>\r\n\r\n</div>\r\n\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/views/post-list.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid clearfix\">\r\n    \r\n          <div class=\"row row-offcanvas row-offcanvas-right\">\r\n    \r\n            <div class=\"col-12 col-md-9\" *ngFor=\"let post of posts\">\r\n              <!-- <p class=\"float-right hidden-md-up\">\r\n                <button type=\"button\" class=\"btn btn-primary btn-sm\" data-toggle=\"offcanvas\">Toggle nav</button>\r\n              </p> -->\r\n              <div class=\"media\">\r\n                    <img class=\"d-flex mr-3 img-thumbnail img-resp\" src=\"../../assets/img/jorge.jpg\" alt=\"Generic placeholder image\">\r\n                    <div class=\"media-body\">\r\n                      <h5 class=\"mt-0\">{{post.title}}</h5>\r\n                      <p>\r\n                         {{ post.description}}\r\n                    </p> \r\n                    <h4>{{post.date}}</h4>\r\n                    <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details »</a></p>\r\n                    </div>\r\n            </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-12 col-lg-8\">\r\n                  <h2>Heading</h2>\r\n                  <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\r\n                  <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details »</a></p>\r\n                </div><!--/span-->\r\n                <div class=\"col-6 col-lg-4\">\r\n                  <h2>Heading</h2>\r\n                  <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\r\n                  <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details »</a></p>\r\n                </div><!--/span-->\r\n                <div class=\"col-6 col-lg-4\">\r\n                  <h2>Heading</h2>\r\n                  <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\r\n                  <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details »</a></p>\r\n                </div><!--/span-->\r\n                <div class=\"col-6 col-lg-4\">\r\n                  <h2>Heading</h2>\r\n                  <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\r\n                  <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details »</a></p>\r\n                </div><!--/span-->\r\n                <div class=\"col-6 col-lg-4\">\r\n                  <h2>Heading</h2>\r\n                  <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\r\n                  <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details »</a></p>\r\n                </div><!--/span-->\r\n                <div class=\"col-6 col-lg-4\">\r\n                  <h2>Heading</h2>\r\n                  <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\r\n                  <p><a class=\"btn btn-secondary\" href=\"#\" role=\"button\">View details »</a></p>\r\n                </div><!--/span-->\r\n              </div><!--/row-->\r\n            </div><!--/span-->\r\n    \r\n            <div class=\"col-6 col-md-3 sidebar-offcanvas\" id=\"sidebar\">\r\n              <div class=\"list-group\">\r\n                <a href=\"#\" class=\"list-group-item active\">Link</a>\r\n                <a href=\"#\" class=\"list-group-item\">Link</a>\r\n                <a href=\"#\" class=\"list-group-item\">Link</a>\r\n                <a href=\"#\" class=\"list-group-item\">Link</a>\r\n                <a href=\"#\" class=\"list-group-item\">Link</a>\r\n                <a href=\"#\" class=\"list-group-item\">Link</a>\r\n                <a href=\"#\" class=\"list-group-item\">Link</a>\r\n                <a href=\"#\" class=\"list-group-item\">Link</a>\r\n                <a href=\"#\" class=\"list-group-item\">Link</a>\r\n                <a href=\"#\" class=\"list-group-item\">Link</a>\r\n                <a href=\"#\" class=\"list-group-item active\">Link</a>\r\n                <a href=\"#\" class=\"list-group-item\">Link</a>\r\n                <a href=\"#\" class=\"list-group-item\">Link</a>\r\n                <a href=\"#\" class=\"list-group-item\">Link</a>\r\n                <a href=\"#\" class=\"list-group-item\">Link</a>\r\n                <a href=\"#\" class=\"list-group-item\">Link</a>\r\n                <a href=\"#\" class=\"list-group-item\">Link</a>\r\n                <a href=\"#\" class=\"list-group-item\">Link</a>\r\n                <a href=\"#\" class=\"list-group-item\">Link</a>\r\n                <a href=\"#\" class=\"list-group-item\">Link</a>\r\n              </div>\r\n            </div><!--/span-->\r\n          </div><!--/row-->\r\n    \r\n          <hr>\r\n    \r\n         \r\n    \r\n        </div>"

/***/ }),

/***/ "./src/app/views/postfilter.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<app-facecomponent></app-facecomponent>\r\n<div class=\"container\">\r\n\r\n\r\n\r\n    <div class=\"row mb-2 col-12 col-sm-12 col-md-8\" *ngFor=\"let post of posts\">\r\n        <div class=\"col-md-12\">\r\n            <img class=\"card-img-top\" src=\"{{url+'get-video-post/'+post.image}}\" alt=\"Card image cap\">\r\n            <div class=\"card flex-md-row mb-4 box-shadow h-md-250\">\r\n                <div class=\"card-body d-flex flex-column align-items-start\">\r\n                    <!-- <a > <strong class=\"d-inline-block mb-2 text-primary\">{{post.title}}</strong></a> -->\r\n                    <h3 class=\"mb-0\">\r\n                        <a class=\"\" [routerLink]='[\"/postdetails\",post.slug]'>{{post.title}}</a>\r\n\r\n                    </h3>\r\n\r\n\r\n                    <div class=\"mb-1 text-muted\">{{post.date}}</div>\r\n                    <div class=\"col-sm-12 col-12 col-md-12 col-lg-12\">{{post.resume}}</div>\r\n                    <!-- <div class=\"col-sm-12 col-12 col-md-12 col-lg-12\">{{post.user.name}}</div>  -->\r\n\r\n                </div>\r\n\r\n                <!-- <img class=\"img img-responsive card-img-right flex-auto d-none d-md-block\" src=\"{{url+'get-image-post/'+post.image}}\" alt=\"Card image cap\"> -->\r\n            </div>\r\n        </div>\r\n        <!-- <ul class=\"pagination pull-right\">\r\n             <a class=\"btn btn-danger\" [routerLink]=\"['/categoria',post.category,page]\"><label>Cargar Más...</label></a>\r\n        </ul> -->\r\n\r\n    </div>\r\n\r\n\r\n\r\n</div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/views/register.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"container\" style=\"color:#000;\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n          <form (ngSubmit)=\"onSubmit()\" #registerForm=\"ngForm\" *ngIf=\"!identity\">\r\n        <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"inputEmail4\">Email</label>\r\n            <input type=\"email\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"userR.email\" class=\"form-control\" id=\"inputEmail4\" placeholder=\"Email\">\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"inputPassword4\">Password</label>\r\n            <input type=\"password\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"userR.password\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"Password\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputAddress\">Nombres</label>\r\n          <input type=\"text\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"userR.name\" class=\"form-control\" id=\"inputAddress\" placeholder=\"Juan Gustito\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputAddress2\">Apellidos</label>\r\n          <input type=\"text\" name=\"surname\" #surname=\"ngModel\" [(ngModel)]=\"userR.surname\" class=\"form-control\" id=\"inputAddress2\" placeholder=\"Perez Garvajal\">\r\n        </div>\r\n        <!-- <div class=\"form-row\">\r\n          <div class=\"form-group col-md-6\">\r\n            <label for=\"inputCity\">City</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"inputCity\">\r\n          </div>\r\n          <div class=\"form-group col-md-4\">\r\n            <label for=\"inputState\">State</label>\r\n            <select id=\"inputState\" class=\"form-control\">\r\n              <option selected>Choose...</option>\r\n              <option>...</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"form-group col-md-2\">\r\n            <label for=\"inputZip\">Zip</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"inputZip\">\r\n          </div>\r\n        </div> -->\r\n        <!-- <div class=\"form-group\">\r\n          <div class=\"form-check\">\r\n            <input class=\"form-check-input\" type=\"checkbox\" id=\"gridCheck\">\r\n            <label class=\"form-check-label\" for=\"gridCheck\">\r\n              Check me out\r\n            </label>\r\n          </div>\r\n        </div> -->\r\n        <button type=\"submit\" class=\"btn btn-primary\">Registrarse</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/service.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<!-- services Section\n   ================================================== -->\n   <section id=\"services\" class=\"body\">\n\n\n\n\n    <div class=\"container marketing\">\n\n            <!-- Three columns of text below the carousel -->\n            <div class=\"row\">\n              <div class=\"col-lg-4\">\n                  <span class=\"icon\"><i class=\"fas fa-file-code fa-5x\"></i></span>\n                <h3>Desarrollo Web</h3>\n                <p>Desarrollamos todo tipo de aplicaciones Web: Inventario, Facturacion, Planillas y mas.</p>\n\n              </div><!-- /.col-lg-4 -->\n\n              <div class=\"col-lg-4\">\n                  <span class=\"icon\"><i class=\"fas fa-laptop fa-5x\"></i></span>\n                <h2>Diseño Web</h2>\n                <p>Sitios Web, Gestores de Contenidos, Tiendas en Linea, Font-End y Back-End</p>\n\n              </div><!-- /.col-lg-4 -->\n\n              <div class=\"col-lg-4\">\n                  <span class=\"icon\"><i class=\"fas fa-mobile fa-5x\"></i></span>\n               <h2>Diseño de App Moviles</h2>\n                <p>Te diseñamos tu app movil para Android, Ios y Android con las mejores tecnologias.</p>\n\n              </div><!-- /.col-lg-4 -->\n\n            </div><!-- /.row -->\n\n\n             <!-- Three columns of text below the carousel -->\n             <div class=\"row\">\n                <div class=\"col-lg-4\">\n                    <span class=\"icon\"><i class=\"fas fa-wifi fa-5x\"></i></span>\n                  <h3>Redes</h3>\n                  <p>Contamos con personal altamente calificado para realizar trabajos de infraestructura de redes para su empresa...</p>\n\n                </div><!-- /.col-lg-4 -->\n\n                <div class=\"col-lg-4\">\n                    <span class=\"icon\"><i class=\"fas fa-laptop fa-5x\"></i></span>\n                  <h2>Diseño Web</h2>\n                  <p>Sitios Web, Gestores de Contenidos, Tiendas en Linea, Font-End y Back-End</p>\n\n                </div><!-- /.col-lg-4 -->\n\n                <div class=\"col-lg-4\">\n                    <span class=\"icon\"><i class=\"fas fa-credit-card fa-5x\"></i></span>\n                 <h2>Ecommerce</h2>\n                  <p>Tiendas en linea integracion con pasarelas de pagos como paypal en cualquier sitio web de comercio electronico.</p>\n\n                </div><!-- /.col-lg-4 -->\n\n              </div><!-- /.row -->\n\n            <!-- START THE FEATURETTES -->\n\n            <hr class=\"featurette-divider\">\n\n\n          </div>\n\n\t</section> <!-- /services -->\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/views/sobremi.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<app-facecomponent></app-facecomponent>\r\n<!-- about section\r\n  ================================================== -->\r\n  <section class=\"container body\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n\r\n\r\n        <h1 class=\"h1 text-center\">Dejame Presentarme.</h1>\r\n\r\n        <div class=\" text-center\">\r\n\r\n          <img class=\"col-4 img-fluid rounded mx-auto d-block\" src=\"../../assets/img/jorge.jpg\" alt=\"Profile Picture\">\r\n\r\n          </div>\r\n          <p class=\"lead\">Soy Ingeniero en Sistemas de Información graduado de la UNAN-LEÓN. Me gusta ser Autodidacta, tomar siempre nuevos retos en los que aprendere cosas nueva sobre mi profesión. Me dedico 100% de mi a los proyectos que tomo. Con varios años de experiencias con multiples tecnologias.</p>\r\n\r\n      </div>\r\n    </div> <!-- /section-intro -->\r\n\r\n    <div class=\"row about-content\">\r\n\r\n      <div class=\"col-six tab-full\">\r\n\r\n        <h3>Perfil</h3>\r\n        <p style=\"color:black; font-size:initial;\">A contonuación detallo mi perfil personal con mis datos completos.</p>\r\n\r\n        <ul class=\"info-list\">\r\n          <li>\r\n            <strong>Nombre Completo:</strong>\r\n            <span>Jorge Antonio Castillo Moreno</span>\r\n          </li>\r\n          <li>\r\n            <strong>Fecha de Nacimiento:</strong>\r\n            <span>03 de Febrero, 1991</span>\r\n          </li>\r\n          <li>\r\n            <strong>Trabajo:</strong>\r\n            <span>Freelancer, Desarrollador Back-End</span>\r\n          </li>\r\n          <li>\r\n            <strong>Empleo Actual:</strong>\r\n            <span>Institución del Gobierno de Nicaragua</span>\r\n          </li>\r\n          <li>\r\n            <strong>Sitio Web:</strong>\r\n            <span>www.jorgecastillodevelop.pro</span>\r\n          </li>\r\n          <li>\r\n            <strong>Email:</strong>\r\n            <span>jorgeantonio20142014@gmail.com</span>\r\n          </li>\r\n\r\n        </ul> <!-- /info-list -->\r\n\r\n      </div>\r\n\r\n      <div class=\"col-six tab-full\">\r\n\r\n        <h3>Habilidades</h3>\r\n        <p style=\"color:black;font-size:initial;\">A continiación detallo las habilidades que he obtenido a lo largo de mi carrera como ingeniero en sustemas.</p>\r\n\r\n       <ul class=\"skill-bars\">\r\n          <div class=\"progress\">\r\n              <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" style=\"width: 90%;\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\">90%</div>\r\n          </div>\r\n          <strong>HTML5</strong>\r\n       <hr>\r\n          <div class=\"progress\">\r\n              <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" style=\"width: 80%;\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\">80%</div>\r\n          </div>\r\n            <strong>CSS3</strong>\r\n            <hr>\r\n            <div class=\"progress\">\r\n                <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" style=\"width: 70%;\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\">70%</div>\r\n            </div>\r\n            <strong>JQuery</strong>\r\n            <hr>\r\n            <div class=\"progress\">\r\n                <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" style=\"width: 85%;\" aria-valuenow=\"85\" aria-valuemin=\"0\" aria-valuemax=\"100\">85%</div>\r\n            </div>\r\n            <strong>PHP</strong>\r\n            <hr>\r\n            <div class=\"progress\">\r\n                <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" style=\"width: 85%;\" aria-valuenow=\"85\" aria-valuemin=\"0\" aria-valuemax=\"100\">85%</div>\r\n            </div>\r\n            <strong>SQL</strong>\r\n            <hr>\r\n            <div class=\"progress\">\r\n                <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" style=\"width: 75%;\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\">75%</div>\r\n            </div>\r\n            <strong>C#</strong>\r\n            <hr>\r\n            <div class=\"progress\">\r\n                <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" style=\"width: 75%;\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\">75%</div>\r\n            </div>\r\n            <strong>VB.NET</strong>\r\n            <hr>\r\n            <div class=\"progress\">\r\n                <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" style=\"width: 70%;\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\">70%</div>\r\n            </div>\r\n            <strong>NODEJS</strong>\r\n            <hr>\r\n            <div class=\"progress\">\r\n                <div class=\"progress-bar progress-bar-striped bg-danger\" role=\"progressbar\" style=\"width: 40%;\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\">40%</div>\r\n            </div>\r\n            <strong>RUBY ON RAILS</strong>\r\n            <hr>\r\n\r\n            <div class=\"progress\">\r\n                <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" style=\"width: 75%;\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\">75%</div>\r\n            </div>\r\n            <strong>ASP.NET</strong>\r\n            <hr>\r\n            <div class=\"progress\">\r\n                <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" style=\"width: 80%;\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\">80%</div>\r\n            </div>\r\n            <strong>ANGULAR JS</strong>\r\n            <hr>\r\n\r\n            <div class=\"progress\">\r\n                <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" style=\"width:85%;\" aria-valuenow=\"85\" aria-valuemin=\"0\" aria-valuemax=\"100\">85%</div>\r\n            </div>\r\n            <strong>BASE DE DATOS</strong>\r\n            <hr>\r\n\r\n            <div class=\"progress\">\r\n                <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" style=\"width: 90%;\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\">90%</div>\r\n            </div>\r\n            <strong>SISTEMAS OPERATIVOS</strong>\r\n            <hr>\r\n\r\n            <div class=\"progress\">\r\n                <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" style=\"width: 80%;\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\">80%</div>\r\n            </div>\r\n            <strong>REDES</strong>\r\n            <hr>\r\n\r\n       </ul> <!-- /skill-bars -->\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <a [routerLink]=\"['/contacto']\" title=\"Hire Me\" class=\"btn btn-dark text-center\">Contactar</a>\r\n        <!-- <a href=\"#\" title=\"Download CV\" class=\"button button-primary\">Descargar CV</a> -->\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n   <!-- resume Section\r\n   ================================================== -->\r\n\r\n\r\n\t\t<div class=\"row section-intro\">\r\n   \t\t<div class=\"col-twelve\">\r\n\r\n\r\n        <hr>\r\n   \t\t\t<h1 class=\"text-center\">Mas de mis Credenciales</h1>\r\n\r\n   \t\t\t<p class=\"lead\">Dejame mostrarte las experiencia que he obtenido en estos años que tengo trabajando como Ing. en sistemas.</p>\r\n\r\n   \t\t</div>\r\n   \t</div> <!-- /section-intro-->\r\n\r\n\r\n   \t\t\t<h2 class=\"text-center\">Experiencias de Trabajo</h2>\r\n   \t\t<div class=\"container\">\r\n\r\n   \t\t\t<div class=\"row\">\r\n\r\n   \t\t\t\t<div class=\"col-12\" *ngFor=\"let perfil of perfils\">\r\n\r\n\t   \t\t\t\t<div class=\"timeline-ico\">\r\n\t   \t\t\t\t\t<i class=\"fa fa-briefcase\"></i>\r\n\t   \t\t\t\t</div>\r\n\r\n\t   \t\t\t\t<div class=\"timeline-header\">\r\n               <a *ngIf=\"identity && identity.roles.roles=='administrador'\" [routerLink]=\"['/updateperfil',perfil._id]\"><h3>{{perfil.nameexp}}</h3></a>\r\n               <a *ngIf=\"!identity\"><h3>{{perfil.nameexp}}</h3></a>\r\n               <a *ngIf=\"identity && identity.roles.roles=='administrador'\"  (click)=\"onDeletePerfil(perfil._id)\" class=\"btn btn-warning\">Eliminar Perfil</a>\r\n\t   \t\t\t\t\t<p>Desde {{perfil.fecha_inicio}} Hasta {{perfil.fecha_final}}</p>\r\n\t   \t\t\t\t</div>\r\n\r\n\t   \t\t\t\t<div class=\"timeline-content\">\r\n\t   \t\t\t\t\t<h4>{{perfil.name_empresa}}</h4>\r\n\t   \t\t\t\t\t<p>{{perfil.descrip_exp}}</p>\r\n\t   \t\t\t\t</div>\r\n\r\n\r\n\t   \t\t\t</div> <!-- /timeline-block -->\r\n\r\n\r\n\r\n   \t\t\t</div> <!-- /timeline-wrap -->\r\n\r\n   \t\t</div> <!-- /col-twelve -->\r\n\r\n\r\n   \t<hr>\r\n\r\n   \t\t\t<h2 class=\"text-center\">Education</h2>\r\n   \t\t<div class=\"container\">\r\n\r\n   \t\t\t<div class=\"row\">\r\n\r\n   \t\t\t\t<div class=\"col-12\" *ngFor=\"let educacion of educacions\">\r\n\r\n\t   \t\t\t\t<div class=\"timeline-ico\">\r\n\t   \t\t\t\t\t<i class=\"fa fa-graduation-cap\"></i>\r\n\t   \t\t\t\t</div>\r\n\r\n\t   \t\t\t\t<div class=\"timeline-header\">\r\n              <a *ngIf=\"identity && identity.roles.roles=='administrador'\" [routerLink]=\"['/updateeducacion',educacion._id]\"><h3>{{educacion.name_titulo}}</h3></a>\r\n              <a *ngIf=\"!identity\"><h3>{{educacion.name_titulo}}</h3></a>\r\n              <a *ngIf=\"identity && identity.roles.roles=='administrador'\"  (click)=\"onDeleteEducacion(educacion._id)\" class=\"btn btn-warning\">Eliminar Educacion</a>\r\n\t   \t\t\t\t\t<p>Desde {{educacion.fecha_inicio}} Hasta {{educacion.fecha_final}}</p>\r\n\t   \t\t\t\t</div>\r\n\r\n\t   \t\t\t\t<div class=\"timeline-content\">\r\n\t   \t\t\t\t\t<h4>{{educacion.name_inst}}</h4>\r\n\t   \t\t\t\t\t<p>{{educacion.descrip_inst}}</p>\r\n\t   \t\t\t\t</div>\r\n\r\n\t   \t\t\t</div> <!-- /timeline-block -->\r\n         </div> <!-- /timeline-wrap -->\r\n\r\n\r\n         <fb-comments numposts=\"3\"></fb-comments>\r\n   \t\t</div> <!-- /col-twelve -->\r\n\r\n\r\n\r\n\t</section> <!-- /features -->\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/views/user-edit.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"col-12\">\r\n  <form (ngSubmit)=\"onSubmit()\" #registerForm=\"ngForm\" *ngIf=\"identity && identity.roles.roles=='administrador'\">\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-md-6\">\r\n        <label for=\"inputEmail4\">Email</label>\r\n        <input type=\"email\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"user.email\" class=\"form-control\" id=\"inputEmail4\" placeholder=\"Email\">\r\n      </div>\r\n      <!-- <div class=\"form-group col-md-6\">\r\n        <label for=\"inputPassword4\">Password</label>\r\n        <input type=\"password\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"user.password\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"Password\">\r\n      </div> -->\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"inputAddress\">Nombres</label>\r\n      <input type=\"text\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"user.name\" class=\"form-control\" id=\"inputAddress\" placeholder=\"Juan Gustito\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"inputAddress2\">Apellidos</label>\r\n      <input type=\"text\" name=\"surname\" #surname=\"ngModel\" [(ngModel)]=\"user.surname\" class=\"form-control\" id=\"inputAddress2\" placeholder=\"Perez Garvajal\">\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <!-- <div class=\"form-group col-md-6\">\r\n        <label for=\"inputCity\">City</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"inputCity\">\r\n      </div> -->\r\n\r\n      <div class=\"form-group col-md-4\">\r\n        <label for=\"inputState\">Estado</label>\r\n        <select name=\"activo\" class=\"form-control\" #activo=\"ngModel\" [(ngModel)]=\"user.activo\">\r\n          <option value=\"1\" selected>Activo</option>\r\n          <option value=\"0\">Inactivo</option>\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\"form-group col-md-4\">\r\n        <label for=\"inputState\">Rol</label>\r\n        <select name=\"roles\" class=\"form-control\" #roles=\"ngModel\" [(ngModel)]=\"user.roles\">\r\n          <option value=\"5a32b2478f27c41d78a7946f\" selected>Usuario</option>\r\n          <option value=\"5a99b9195dc7131e2c5c3d2e\">administrador</option>\r\n        </select>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <button type=\"submit\" class=\"btn btn-primary\">Guardar</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/user-list.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"col-10\" style=\"color: #000;\">\r\n  <table *ngIf=\"identity && identity.roles.roles=='administrador'\" class=\"table\">\r\n        <thead>\r\n          <tr>\r\n\r\n            <th scope=\"col\">Nombres</th>\r\n            <th scope=\"col\">Apellidos</th>\r\n            <th scope=\"col\">Correo</th>\r\n            <th scope=\"col\">Activo</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody *ngFor=\"let list of users\">\r\n          <tr  *ngIf=\"list.activo==0\" class=\"table-danger\">\r\n                <td>{{list.name}}</td>\r\n                <td>{{list.surname}}</td>\r\n                <td><a [routerLink]=\"['/useredit',list._id]\">{{list.email}}</a></td>\r\n                <td *ngIf=\"list.activo!=0\"><span class=\"badge badge-primary\">Activo</span></td>\r\n                <td *ngIf=\"list.activo==0\"><span class=\"badge badge-danger\">Inactivo</span></td>\r\n          </tr>\r\n          <tr  *ngIf=\"list.activo!=0\" class=\"table-primary\">\r\n            <td>{{list.name}}</td>\r\n            <td>{{list.surname}}</td>\r\n            <td><a [routerLink]=\"['/useredit',list._id]\">{{list.email}}</a></td>\r\n            <td *ngIf=\"list.activo!=0\"><span class=\"badge badge-primary\">Activo</span></td>\r\n            <td *ngIf=\"list.activo==0\"><span class=\"badge badge-danger\">Inactivo</span></td>\r\n         </tr>\r\n\r\n        </tbody>\r\n      </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map