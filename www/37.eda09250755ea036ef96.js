(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"99Un":function(t,r,e){"use strict";e.r(r),e.d(r,"HomePageModule",function(){return y});var o=e("tyNb"),n=e("mrSG"),i=e("fXoL"),s=e("yFW5"),a=e("roZI"),c=e("qSrz"),u=e("IYfF");let l=(()=>{class t{constructor(t,r,e){this.ngxPermissionsService=t,this.authService=r,this.router=e}canActivate(t,r){return(()=>Object(n.a)(this,void 0,void 0,function*(){yield this.authService.assignPermissions();const t=yield this.ngxPermissionsService.getPermissions();return Object.keys(t).indexOf(a.e.Customer)>-1?(this.router.navigate(["/customers/dashboard"]),!1):!(Object.keys(t).indexOf(a.e.SpEmployee)>-1&&(this.router.navigate(["/technicians/dashboard"]),1))}))()}}return t.\u0275fac=function(r){return new(r||t)(i.Xb(c.c),i.Xb(u.a),i.Xb(o.g))},t.\u0275prov=i.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),b=(()=>{class t{constructor(t,r){this.authService=t,this.router=r}canActivate(t,r){return(()=>Object(n.a)(this,void 0,void 0,function*(){return!!(yield this.authService.getUserInfo()).net_approval||(yield this.authService.logout(),yield this.router.navigate(["/auth","register","awaiting-approval"],{queryParams:{navigateTo:r.url}}),!1)}))()}}return t.\u0275fac=function(r){return new(r||t)(i.Xb(u.a),i.Xb(o.g))},t.\u0275prov=i.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),d=(()=>{class t{constructor(t,r,e){this.authGuard=t,this.roleGuard=r,this.approvalGuard=e}canActivate(t,r){return Object(n.a)(this,void 0,void 0,function*(){for(const e of this.getOrderedGuards())if(!1===(yield e.canActivate(t,r)))return!1;return!0})}getOrderedGuards(){return[this.authGuard,this.roleGuard,this.approvalGuard]}}return t.\u0275fac=function(r){return new(r||t)(i.Xb(s.a),i.Xb(l),i.Xb(b))},t.\u0275prov=i.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var p=e("TEn/"),h=e("qO5g"),f=e("sYmb");const v=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=i.Hb({type:t,selectors:[["app-home"]],decls:5,vars:3,consts:[[3,"title"]],template:function(t,r){1&t&&(i.Tb(0,"ion-header"),i.Tb(1,"app-primary-header",0),i.fc(2,"translate"),i.Ob(3,"ion-back-button"),i.Sb(),i.Sb(),i.Ob(4,"ion-content")),2&t&&(i.Cb(1),i.lc("title",i.gc(2,1,"Home")))},directives:[p.s,h.a,p.f,p.g,p.p],pipes:[f.c],styles:[""]}),t})(),canActivate:[d]}];let m=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=i.Lb({type:t}),t.\u0275inj=i.Kb({imports:[[o.j.forChild(v)],o.j]}),t})();var g=e("PCNd");let y=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=i.Lb({type:t}),t.\u0275inj=i.Kb({imports:[[g.a,m,c.b.forChild()]]}),t})()},qO5g:function(t,r,e){"use strict";e.d(r,"a",function(){return a});var o=e("fXoL"),n=e("TEn/"),i=e("sYmb");const s=["*"];let a=(()=>{class t{constructor(){this.toolbarColor="primary",this.menuButtonColor="light"}ngOnInit(){}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=o.Hb({type:t,selectors:[["app-primary-header"]],inputs:{title:"title",toolbarColor:"toolbarColor",menuButtonColor:"menuButtonColor"},ngContentSelectors:s,decls:8,vars:5,consts:[[3,"color"],["slot","start"],["slot","end"],["auto-hide","false",3,"color"]],template:function(t,r){1&t&&(o.kc(),o.Tb(0,"ion-toolbar",0),o.Tb(1,"ion-buttons",1),o.jc(2),o.Sb(),o.Tb(3,"ion-buttons",2),o.Ob(4,"ion-menu-button",3),o.Sb(),o.Tb(5,"ion-title"),o.Bc(6),o.fc(7,"translate"),o.Sb(),o.Sb()),2&t&&(o.lc("color",r.toolbarColor),o.Cb(4),o.lc("color",r.menuButtonColor),o.Cb(2),o.Cc(o.gc(7,3,r.title)))},directives:[n.O,n.j,n.A,n.M],pipes:[i.c],styles:[""]}),t})()}}]);