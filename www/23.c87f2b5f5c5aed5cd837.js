(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{AuFP:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var i=t("LvDl"),o=t("fXoL");let r=(()=>{class e{transform(e,n,t="asc"){return n?i.orderBy(e,n,t):e}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=o.Mb({name:"orderByKey",type:e,pure:!1}),e})()},E0Us:function(e,n,t){"use strict";t.d(n,"a",function(){return i});const i={amountPerHourSuffix:" \u20ac/h",amountSuffix:" \u20ac"}},W4DG:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var i=t("mrSG"),o=t("TEn/");function r(){return(e,n,t)=>{const r=t.value;return t.value=function(...e){return Object(i.a)(this,void 0,void 0,function*(){let n;const t=new o.R,i=yield t.create();yield i.present();try{n=yield r.apply(this,e)}catch(c){throw i.dismiss(),c}return i.dismiss(),n})},t}}},kfnZ:function(e,n,t){"use strict";t.d(n,"a",function(){return s});var i=t("fXoL"),o=t("ofXK");function r(e,n){if(1&e&&i.Ob(0,"img",2),2&e){const e=i.ec();i.lc("src",e.user.profile.profile_picture,i.uc)}}function c(e,n){1&e&&i.Ob(0,"img",3)}let s=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=i.Hb({type:e,selectors:[["app-profile-picture"]],inputs:{user:"user"},decls:2,vars:2,consts:[["class","margin-auto",3,"src",4,"ngIf"],["class","margin-auto","src","assets/icon/person-circle-outline.jpeg",4,"ngIf"],[1,"margin-auto",3,"src"],["src","assets/icon/person-circle-outline.jpeg",1,"margin-auto"]],template:function(e,n){1&e&&(i.zc(0,r,1,1,"img",0),i.zc(1,c,1,0,"img",1)),2&e&&(i.lc("ngIf",n.user.profile&&n.user.profile.profile_picture),i.Cb(1),i.lc("ngIf",!n.user.profile||!n.user.profile.profile_picture))},directives:[o.m],styles:["img[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:100%;object-fit:cover;border:2px solid #d3d3d3}"]}),e})()},pzPB:function(e,n,t){"use strict";t.r(n),t.d(n,"ManagerPageModule",function(){return L});var i=t("tyNb"),o=t("mrSG"),r=t("W4DG"),c=t("fXoL"),s=t("7jUV");let a=(()=>{class e{constructor(e,n){this.employeeService=e,this.accountService=n}getEmployeeOrders(){return Object(o.a)(this,void 0,void 0,function*(){return yield(yield this.employeeService.employeesOrdersList()).toPromise()})}getEmployees(){return Object(o.a)(this,void 0,void 0,function*(){const e=(yield(yield this.accountService.accountUserMeRetrieve()).toPromise()).id;return yield(yield this.accountService.accountUserEmployeesRetrieve({id:e})).toPromise().then(n=>n.employees?(n.employees.map(e=>{e.profile&&e.profile.location_description&&(e.location=e.profile.location_description.name)}),{employees:n.employees.filter(n=>n.id!==e&&n.profile)}):n)})}getAccountOwner(){return Object(o.a)(this,void 0,void 0,function*(){return(yield this.accountService.accountUserMeRetrieve()).toPromise()})}togglePushNotifications(e,n){return Object(o.a)(this,void 0,void 0,function*(){return yield(yield this.accountService.accountUserPartialUpdate$FormData({id:e,body:{receive_employee_order_match_notification:n}})).toPromise()})}}return e.\u0275fac=function(n){return new(n||e)(c.Xb(s.d),c.Xb(s.a))},e.\u0275prov=c.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var l=t("TEn/"),u=t("qO5g"),f=t("ofXK"),p=t("3Pt+"),b=t("MRr7"),d=t("E0Us"),m=t("kfnZ"),g=t("sYmb"),v=t("aEDk");function y(e,n){1&e&&(c.Tb(0,"ion-button",12),c.Bc(1),c.fc(2,"translate"),c.Sb()),2&e&&(c.Cb(1),c.Cc(c.gc(2,1,"available")))}function h(e,n){1&e&&(c.Tb(0,"ion-button",13),c.Bc(1),c.fc(2,"translate"),c.Sb()),2&e&&(c.Cb(1),c.Cc(c.gc(2,1,"unavailable")))}function S(e,n){if(1&e&&(c.Tb(0,"ion-item",7),c.Tb(1,"ion-text",10),c.Tb(2,"p",14),c.Bc(3),c.fc(4,"translate"),c.Sb(),c.Sb(),c.Sb()),2&e){const e=c.ec(2);c.Cb(3),c.Ec("",c.gc(4,2,"Location"),": ",e.serviceProvider.profile.location_description.name,"")}}function C(e,n){if(1&e&&(c.Tb(0,"ion-row"),c.Tb(1,"ion-col",2),c.Ob(2,"app-profile-picture",3),c.zc(3,y,3,3,"ion-button",4),c.zc(4,h,3,3,"ion-button",5),c.Sb(),c.Tb(5,"ion-col",6),c.Tb(6,"ion-item",7),c.Tb(7,"h5",8),c.Bc(8),c.Sb(),c.Sb(),c.zc(9,S,5,4,"ion-item",9),c.Tb(10,"ion-item",7),c.Tb(11,"ion-label",10),c.Tb(12,"h3"),c.Bc(13),c.fc(14,"translate"),c.Sb(),c.Tb(15,"p"),c.Bc(16),c.fc(17,"wrap"),c.Sb(),c.Sb(),c.Tb(18,"ion-label",11),c.Tb(19,"h3"),c.Bc(20),c.fc(21,"translate"),c.Sb(),c.Tb(22,"p"),c.Bc(23),c.fc(24,"wrap"),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb()),2&e){const e=c.ec();c.Cb(2),c.lc("user",e.serviceProvider),c.Cb(1),c.lc("ngIf",e.serviceProvider.profile.available),c.Cb(1),c.lc("ngIf",!e.serviceProvider.profile.available),c.Cb(4),c.Ec("",e.serviceProvider.first_name," ",e.serviceProvider.last_name,""),c.Cb(1),c.lc("ngIf",e.serviceProvider.profile),c.Cb(4),c.Cc(c.gc(14,10,"Standard Rate")),c.Cb(3),c.Cc(c.ic(17,12,e.serviceProvider.profile.rate_standard,"",e.Currency.amountPerHourSuffix)),c.Cb(4),c.Cc(c.gc(21,16,"Emergency Rate")),c.Cb(3),c.Cc(c.ic(24,18,e.serviceProvider.profile.rate_emergency,"",e.Currency.amountPerHourSuffix))}}let P=(()=>{class e{constructor(){this.Currency=d.a}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c.Hb({type:e,selectors:[["app-employee-list-item"]],inputs:{serviceProvider:"serviceProvider"},decls:3,vars:1,consts:[[1,"ion-no-margin","ion-margin-bottom"],[4,"ngIf"],["size","3"],[3,"user"],["class","status-btn","size","small","color","success","fill","outline",4,"ngIf"],["class","status-btn","size","small","color","danger","fill","outline",4,"ngIf"],["size","9"],["lines","none"],[1,"ion-no-margin"],["lines","none",4,"ngIf"],["slot","start"],[1,"ion-text-wrap"],["size","small","color","success","fill","outline",1,"status-btn"],["size","small","color","danger","fill","outline",1,"status-btn"],[1,"ion-no-margin","ion-margin-top"]],template:function(e,n){1&e&&(c.Tb(0,"ion-card",0),c.Tb(1,"ion-grid"),c.zc(2,C,25,22,"ion-row",1),c.Sb(),c.Sb()),2&e&&(c.Cb(2),c.lc("ngIf",n.serviceProvider&&n.serviceProvider.profile))},directives:[l.k,l.r,f.m,l.G,l.o,m.a,l.v,l.x,l.i,l.K],pipes:[g.c,v.d],styles:["app-profile-picture[_ngcontent-%COMP%]{height:66px;width:66px;display:block;margin:auto}ion-button[_ngcontent-%COMP%]{width:70px;height:20px;margin:auto;display:block}.status-btn[_ngcontent-%COMP%]{margin-top:12px;font-size:10px}p[_ngcontent-%COMP%]{font-size:12px}ion-item[_ngcontent-%COMP%]{--min-height:20px}"]}),e})();var O=t("AuFP");function _(e,n){if(1&e){const e=c.Ub();c.Tb(0,"ion-item",8),c.Tb(1,"ion-toggle",9),c.bc("ngModelChange",function(n){return c.tc(e),c.ec(2).accountOwner.receive_employee_order_match_notification=n})("ionChange",function(){return c.tc(e),c.ec(2).togglePushNotifications()}),c.Sb(),c.Tb(2,"ion-text",10),c.Bc(3),c.fc(4,"translate"),c.Sb(),c.Sb()}if(2&e){const e=c.ec(2);c.Cb(1),c.lc("ngModel",e.accountOwner.receive_employee_order_match_notification),c.Cb(2),c.Dc(" ",c.gc(4,2,"Receive a copy of push notifications")," ")}}const w=function(){return{text:"Location",value:"location"}},T=function(){return{text:"Last Name",value:"last_name"}},I=function(e,n){return[e,n]};function x(e,n){if(1&e){const e=c.Ub();c.Tb(0,"app-sorting",11),c.bc("fieldSelectionEvent",function(n){return c.tc(e),c.ec(2).setFilter(n)}),c.Sb()}2&e&&c.lc("fields",c.qc(3,I,c.oc(1,w),c.oc(2,T)))}const z=function(e){return["/auth","profile","service-provider",e]};function M(e,n){if(1&e&&c.Ob(0,"app-employee-list-item",12),2&e){const e=n.$implicit;c.lc("routerLink",c.pc(2,z,e.id))("serviceProvider",e)}}function j(e,n){if(1&e&&(c.Tb(0,"ion-list",2),c.zc(1,_,5,4,"ion-item",3),c.Tb(2,"ion-grid",4),c.Tb(3,"ion-row"),c.Tb(4,"ion-col",5),c.zc(5,x,1,6,"app-sorting",6),c.Sb(),c.Sb(),c.Sb(),c.zc(6,M,1,4,"app-employee-list-item",7),c.fc(7,"orderByKey"),c.Sb()),2&e){const e=c.ec();c.Cb(1),c.lc("ngIf",e.accountOwner),c.Cb(4),c.lc("ngIf",e.employees&&e.employees.employees),c.Cb(1),c.lc("ngForOf",c.hc(7,3,e.employees.employees,e.filter))}}const E=[{path:"",component:(()=>{class e{constructor(e,n){this.managerService=e,this.changeDetectorRef=n}ngOnInit(){return Object(o.a)(this,void 0,void 0,function*(){this.orders=yield this.managerService.getEmployeeOrders(),this.employees=yield this.managerService.getEmployees(),this.accountOwner=yield this.managerService.getAccountOwner()})}setFilter(e){e&&(this.filter=e.value),this.changeDetectorRef.detectChanges()}togglePushNotifications(){return Object(o.a)(this,void 0,void 0,function*(){yield this.managerService.togglePushNotifications(this.accountOwner.id,this.accountOwner.receive_employee_order_match_notification)})}}return e.\u0275fac=function(n){return new(n||e)(c.Nb(a),c.Nb(c.i))},e.\u0275cmp=c.Hb({type:e,selectors:[["app-manager"]],decls:6,vars:4,consts:[[3,"title"],["lines","none","class","ion-padding",4,"ngIf"],["lines","none",1,"ion-padding"],["lines","none","class","ion-no-padding",4,"ngIf"],[1,"ion-margin-top","ion-margin-bottom","ion-no-padding"],[1,"ion-no-padding"],[3,"fields","fieldSelectionEvent",4,"ngIf"],[3,"routerLink","serviceProvider",4,"ngFor","ngForOf"],["lines","none",1,"ion-no-padding"],["slot","end","mode","md",3,"ngModel","ngModelChange","ionChange"],["slot","start"],[3,"fields","fieldSelectionEvent"],[3,"routerLink","serviceProvider"]],template:function(e,n){1&e&&(c.Tb(0,"ion-header"),c.Tb(1,"app-primary-header",0),c.fc(2,"translate"),c.Ob(3,"ion-back-button"),c.Sb(),c.Sb(),c.Tb(4,"ion-content"),c.zc(5,j,8,6,"ion-list",1),c.Sb()),2&e&&(c.Cb(1),c.lc("title",c.gc(2,2,"Employee Manager")),c.Cb(4),c.lc("ngIf",n.employees))},directives:[l.s,u.a,l.f,l.g,l.p,f.m,l.y,l.r,l.G,l.o,f.l,l.v,l.N,l.b,p.p,p.s,l.K,b.a,P,l.X,i.h],pipes:[g.c,O.a],styles:["ion-text[_ngcontent-%COMP%]{font-size:14px}"]}),Object(o.b)([Object(r.a)()],e.prototype,"ngOnInit",null),e})()}];let k=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=c.Lb({type:e}),e.\u0275inj=c.Kb({imports:[[i.j.forChild(E)],i.j]}),e})();var B=t("PCNd");let L=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=c.Lb({type:e}),e.\u0275inj=c.Kb({imports:[[B.a,k]]}),e})()}}]);