(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{qO5g:function(t,n,o){"use strict";o.d(n,"a",function(){return i});var e=o("fXoL"),c=o("TEn/"),b=o("sYmb");const a=["*"];let i=(()=>{class t{constructor(){this.toolbarColor="primary",this.menuButtonColor="light"}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Hb({type:t,selectors:[["app-primary-header"]],inputs:{title:"title",toolbarColor:"toolbarColor",menuButtonColor:"menuButtonColor"},ngContentSelectors:a,decls:8,vars:5,consts:[[3,"color"],["slot","start"],["slot","end"],["auto-hide","false",3,"color"]],template:function(t,n){1&t&&(e.kc(),e.Tb(0,"ion-toolbar",0),e.Tb(1,"ion-buttons",1),e.jc(2),e.Sb(),e.Tb(3,"ion-buttons",2),e.Ob(4,"ion-menu-button",3),e.Sb(),e.Tb(5,"ion-title"),e.Bc(6),e.fc(7,"translate"),e.Sb(),e.Sb()),2&t&&(e.lc("color",n.toolbarColor),e.Cb(4),e.lc("color",n.menuButtonColor),e.Cb(2),e.Cc(e.gc(7,3,n.title)))},directives:[c.O,c.j,c.A,c.M],pipes:[b.c],styles:[""]}),t})()},rXpt:function(t,n,o){"use strict";o.r(n),o.d(n,"CompanyPageModule",function(){return f});var e=o("tyNb"),c=o("mrSG"),b=o("3Pt+"),a=o("fXoL"),i=o("Q6/c"),r=o("TEn/"),s=o("qO5g"),l=o("ofXK"),p=o("sYmb");function m(t,n){if(1&t&&(a.Tb(0,"ion-list"),a.Tb(1,"ion-item",4),a.Tb(2,"ion-label"),a.Tb(3,"p"),a.Bc(4),a.fc(5,"translate"),a.Sb(),a.Tb(6,"h3"),a.Bc(7),a.Sb(),a.Sb(),a.Sb(),a.Tb(8,"ion-item",4),a.Tb(9,"ion-label"),a.Tb(10,"p"),a.Bc(11),a.fc(12,"translate"),a.Sb(),a.Tb(13,"h3"),a.Bc(14),a.Sb(),a.Sb(),a.Sb(),a.Tb(15,"ion-item",4),a.Tb(16,"ion-label",5),a.Tb(17,"p"),a.Bc(18),a.fc(19,"translate"),a.Sb(),a.Tb(20,"h3"),a.Bc(21),a.Sb(),a.Sb(),a.Tb(22,"ion-label",5),a.Tb(23,"p"),a.Bc(24),a.fc(25,"translate"),a.Sb(),a.Tb(26,"h3"),a.Bc(27),a.Sb(),a.Sb(),a.Sb(),a.Tb(28,"ion-item",4),a.Tb(29,"ion-label"),a.Tb(30,"p"),a.Bc(31),a.fc(32,"translate"),a.Sb(),a.Tb(33,"h3"),a.Bc(34),a.Sb(),a.Sb(),a.Sb(),a.Sb()),2&t){const t=a.ec();a.Cb(4),a.Cc(a.gc(5,10,"Company")),a.Cb(3),a.Cc(t.company.name),a.Cb(4),a.Cc(a.gc(12,12,"Street / Housenumber")),a.Cb(3),a.Cc(t.company.address),a.Cb(4),a.Cc(a.gc(19,14,"Zip Code")),a.Cb(3),a.Cc(t.company.zip_code),a.Cb(3),a.Cc(a.gc(25,16,"City")),a.Cb(3),a.Cc(t.company.city),a.Cb(4),a.Cc(a.gc(32,18,"Tax ID")),a.Cb(3),a.Cc(t.company.tax_id)}}const u=[{path:"",component:(()=>{class t{constructor(t){this.companyFacadeService=t,this.companyForm=new b.h({city:new b.e(""),id:new b.e(null),logo:new b.e(""),logo_thumbnails:new b.e(""),name:new b.e("")})}ionViewDidEnter(){return Object(c.a)(this,void 0,void 0,function*(){this.company=yield this.companyFacadeService.getCompany(),this.companyForm.patchValue(Object.assign({},this.company))})}}return t.\u0275fac=function(n){return new(n||t)(a.Nb(i.a))},t.\u0275cmp=a.Hb({type:t,selectors:[["app-company"]],decls:9,vars:5,consts:[[3,"title"],[1,"ion-margin"],[3,"src"],[4,"ngIf"],["lines","none"],["slot","start"]],template:function(t,n){1&t&&(a.Tb(0,"ion-header"),a.Tb(1,"app-primary-header",0),a.fc(2,"translate"),a.Ob(3,"ion-back-button"),a.Sb(),a.Sb(),a.Tb(4,"ion-content"),a.Tb(5,"div",1),a.Tb(6,"ion-avatar"),a.Ob(7,"img",2),a.Sb(),a.Sb(),a.zc(8,m,35,20,"ion-list",3),a.Sb()),2&t&&(a.Cb(1),a.lc("title",a.gc(2,3,"Company Profile")),a.Cb(6),a.lc("src",n.companyForm.get("logo").value,a.uc),a.Cb(1),a.lc("ngIf",n.company))},directives:[r.s,s.a,r.f,r.g,r.p,r.e,l.m,r.y,r.v,r.x],pipes:[p.c],styles:["ion-avatar[_ngcontent-%COMP%]{margin:auto;height:100px;width:100px}"]}),t})()}];let C=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=a.Lb({type:t}),t.\u0275inj=a.Kb({imports:[[e.j.forChild(u)],e.j]}),t})();var S=o("PCNd");let f=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=a.Lb({type:t}),t.\u0275inj=a.Kb({imports:[[S.a,C]]}),t})()}}]);