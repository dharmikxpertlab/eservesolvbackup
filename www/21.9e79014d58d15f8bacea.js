(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"7XlH":function(e,t,r){"use strict";r.d(t,"a",function(){return i});const i={serviceProviderDistanceSuffix:" km"}},AuFP:function(e,t,r){"use strict";r.d(t,"a",function(){return o});var i=r("LvDl"),n=r("fXoL");let o=(()=>{class e{transform(e,t,r="asc"){return t?i.orderBy(e,t,r):e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=n.Mb({name:"orderByKey",type:e,pure:!1}),e})()},CTCL:function(e,t,r){"use strict";r.d(t,"a",function(){return u});var i=r("LvDl"),n=r("roZI"),o=r("GShR"),s=r("fXoL"),a=r("jPFz"),c=r("TEn/"),d=r("sYmb"),l=r("aEDk");let u=(()=>{class e{constructor(e){this.timeService=e,this.OrderType=n.g}get orderType(){return i.find(o.a,{key:this.order.type}).value}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(s.Nb(a.a))},e.\u0275cmp=s.Hb({type:e,selectors:[["app-order-type-badge"]],inputs:{order:"order"},decls:4,vars:5,consts:[["mode","md"]],template:function(e,t){1&e&&(s.Tb(0,"ion-badge",0),s.Bc(1),s.fc(2,"translate"),s.fc(3,"rtrim"),s.Sb()),2&e&&(s.Cb(1),s.Dc(" ",s.gc(2,1,s.gc(3,3,t.orderType)),"\n"))},directives:[c.h],pipes:[d.c,l.b],styles:[""]}),e})()},DnxR:function(e,t,r){"use strict";r.d(t,"a",function(){return d});var i=r("roZI"),n=r("LvDl"),o=r("gMLP"),s=r("fXoL"),a=r("jPFz"),c=r("sYmb");let d=(()=>{class e{constructor(e){this.timeService=e,this.OrderType=i.g}get untilTextLabel(){return this.order.type+"_UNTIL_LABEL"}get emergencyTill(){let e;return e=this.order.type===this.OrderType.PredictiveMaintenance?n.find(o.c,{type:o.e.Date}).momentTimeFormat:n.find(o.c,{type:o.e.Hours}).momentTimeFormat,this.timeService.formatTime(this.order.needs_fix_before,e)}}return e.\u0275fac=function(t){return new(t||e)(s.Nb(a.a))},e.\u0275cmp=s.Hb({type:e,selectors:[["app-order-emergency-until-text"]],inputs:{order:"order"},decls:6,vars:4,template:function(e,t){1&e&&(s.Rb(0),s.Tb(1,"div"),s.Bc(2),s.fc(3,"translate"),s.Ob(4,"br"),s.Bc(5),s.Sb(),s.Qb()),2&e&&(s.Cb(2),s.Dc("",s.gc(3,2,t.untilTextLabel)," "),s.Cb(3),s.Dc(" ",t.emergencyTill,""))},pipes:[c.c],styles:["*[_ngcontent-%COMP%]{text-align:right}"]}),e})()},GShR:function(e,t,r){"use strict";r.d(t,"a",function(){return n});var i=r("roZI");const n=[{key:i.g.EmergencyRepair,value:"Emergency"},{key:i.g.NewProject,value:"New Project"},{key:i.g.PredictiveMaintenance,value:"Maintenance"}]},KRu2:function(e,t,r){"use strict";r.r(t),r.d(t,"DashboardPageModule",function(){return K});var i=r("tyNb"),n=r("yFW5"),o=r("mrSG"),s=r("0tfk"),a=r("LvDl");const c={Requests:a.find(s.b,{name:"Requests"}).order_states,Active:a.find(s.b,{name:"Active"}).order_states,Completed:a.find(s.b,{name:"Completed"}).order_states};var d=r("W4DG"),l=r("v++7"),u=r("fXoL"),f=r("7jUV"),b=r("l73M");let m=(()=>{class e{constructor(e,t,r){this.accountService=e,this.orderService=t,this.employeeService=r}getServiceProviderUserInfo(){return Object(o.a)(this,void 0,void 0,function*(){return yield(yield this.accountService.accountUserMeRetrieve()).toPromise().then(e=>e)})}updateServiceProviderProfile(e){return Object(o.a)(this,void 0,void 0,function*(){return yield(yield this.accountService.accountUserPartialUpdate$Json({id:e.id,body:e})).toPromise()})}getEmployeeOrders(){return Object(o.a)(this,void 0,void 0,function*(){return yield this.employeeService.getEmployeeOrders()})}}return e.\u0275fac=function(t){return new(t||e)(u.Xb(f.a),u.Xb(f.g),u.Xb(b.a))},e.\u0275prov=u.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var v=r("lWke"),p=r("TEn/"),g=r("qO5g"),y=r("3Pt+"),h=r("ofXK"),S=r("bTqV"),O=r("roZI"),T=r("GShR"),C=r("7XlH"),D=r("jPFz"),M=r("DnxR"),P=r("CTCL"),w=r("sYmb"),j=r("aEDk");function I(e,t){if(1&e&&(u.Tb(0,"ion-item",10),u.Tb(1,"h5"),u.Bc(2),u.Sb(),u.Ob(3,"app-order-type-badge",11),u.Sb()),2&e){const e=u.ec();u.Cb(2),u.Cc(e.company.name),u.Cb(1),u.lc("order",e.order)}}function k(e,t){if(1&e&&(u.Tb(0,"ion-text",12),u.Tb(1,"p",13),u.Bc(2),u.fc(3,"translate"),u.Ob(4,"br"),u.Bc(5),u.fc(6,"wrap"),u.fc(7,"number"),u.fc(8,"round"),u.Sb(),u.Sb()),2&e){const e=u.ec();u.Cb(2),u.Dc("",u.gc(3,2,"Distance")," "),u.Cb(3),u.Dc(" ",u.ic(6,4,u.ic(7,8,u.hc(8,12,e.order.finalized_distance,2),"","de-DE"),"",e.Distance.serviceProviderDistanceSuffix),"")}}function L(e,t){if(1&e&&(u.Tb(0,"ion-text",12),u.Tb(1,"p",13),u.Bc(2),u.fc(3,"translate"),u.Ob(4,"br"),u.Bc(5),u.fc(6,"wrap"),u.fc(7,"number"),u.fc(8,"round"),u.Sb(),u.Sb()),2&e){const e=u.ec();u.Cb(2),u.Dc("",u.gc(3,2,"Distance")," "),u.Cb(3),u.Dc(" ",u.ic(6,4,u.ic(7,8,u.hc(8,12,e.order.candidate.distance,2),"","de-DE"),"",e.Distance.serviceProviderDistanceSuffix),"")}}function B(e,t){if(1&e&&(u.Rb(0),u.Ob(1,"hr"),u.Tb(2,"ion-item",14),u.Ob(3,"ion-icon",15),u.Tb(4,"ion-text"),u.Bc(5),u.Sb(),u.Sb(),u.Qb()),2&e){const e=u.ec();u.Cb(5),u.Ec(" ",e.order.candidate.first_name," ",e.order.candidate.last_name," ")}}const E=function(e,t){return["/technicians/orders/order",e,t]};let U=(()=>{class e{constructor(e,t){this.employeeService=e,this.timeService=t,this.OrderType=O.g,this.Distance=C.a}get orderType(){return a.find(T.a,{key:this.order.type}).value}ngOnInit(){return Object(o.a)(this,void 0,void 0,function*(){this.company=yield this.employeeService.getCompanyFromOrder(this.order)})}}return e.\u0275fac=function(t){return new(t||e)(u.Nb(b.a),u.Nb(D.a))},e.\u0275cmp=u.Hb({type:e,selectors:[["app-order-list-item"]],inputs:{order:"order"},decls:14,vars:12,consts:[[1,"ion-no-margin","ion-margin-top",3,"routerLink"],[1,"ion-no-padding","ion-padding-start"],["lines","none","class","ion-no-padding ion-no-margin",4,"ngIf"],["mode","md","fill","clear",1,"ion-float-right","ion-margin-end"],[3,"order"],["lines","none",1,"ion-no-padding","ion-margin-start","ion-margin-end","full-width"],["slot","start"],[1,"note"],["slot","end","class","ion-text-right",4,"ngIf"],[4,"ngIf"],["lines","none",1,"ion-no-padding","ion-no-margin"],["slot","end",1,"md-padding-end",3,"order"],["slot","end",1,"ion-text-right"],[1,"note","ion-margin-end"],["lines","none",1,"ion-no-padding","ion-margin-start"],["slot","start","name","person-circle-outline"]],template:function(e,t){1&e&&(u.Tb(0,"ion-card",0),u.Tb(1,"ion-card-header",1),u.zc(2,I,4,2,"ion-item",2),u.Tb(3,"ion-note",3),u.Ob(4,"app-order-emergency-until-text",4),u.Sb(),u.Sb(),u.Tb(5,"ion-item",5),u.Tb(6,"ion-text",6),u.Tb(7,"p",7),u.Bc(8),u.Ob(9,"br"),u.Bc(10),u.Sb(),u.Sb(),u.zc(11,k,9,15,"ion-text",8),u.zc(12,L,9,15,"ion-text",8),u.Sb(),u.zc(13,B,6,2,"ng-container",9),u.Sb()),2&e&&(u.lc("routerLink",u.qc(9,E,t.order.id,t.order.candidate)),u.Cb(2),u.lc("ngIf",t.company),u.Cb(2),u.lc("order",t.order),u.Cb(4),u.Dc("",t.order.location_description.address," "),u.Cb(2),u.Ec(" ",t.order.location_description.zip_code," ",t.order.location_description.city,""),u.Cb(1),u.lc("ngIf",null!=t.order.finalized_distance),u.Cb(1),u.lc("ngIf",t.order.candidate&&null==t.order.finalized_distance&&null!=t.order.candidate.distance),u.Cb(1),u.lc("ngIf",t.order.candidate&&!t.order.candidate.loggedInUser))},directives:[p.k,p.X,i.h,p.m,h.m,p.C,M.a,p.v,p.K,P.a,p.t],pipes:[w.c,j.d,h.e,j.c],styles:[".note[_ngcontent-%COMP%]{font-size:14px;line-height:1.5}"]}),e})();var _=r("AuFP"),x=r("jbSJ");function R(e,t){1&e&&u.Ob(0,"app-order-list-item",9),2&e&&u.lc("order",t.$implicit)}function Y(e,t){1&e&&(u.Tb(0,"div",10),u.Tb(1,"ion-note"),u.Bc(2),u.fc(3,"translate"),u.Sb(),u.Sb()),2&e&&(u.Cb(2),u.Cc(u.gc(3,1,"No orders requests")))}function F(e,t){1&e&&u.Ob(0,"app-order-list-item",9),2&e&&u.lc("order",t.$implicit)}function N(e,t){1&e&&(u.Tb(0,"div",10),u.Tb(1,"ion-note"),u.Bc(2),u.fc(3,"translate"),u.Sb(),u.Sb()),2&e&&(u.Cb(2),u.Cc(u.gc(3,1,"No active orders")))}const X=function(e){return["/technicians/orders",e]},A=[{path:"",component:(()=>{class e{constructor(e,t,r){this.dashboardService=e,this.router=t,this.notifications=r,this.OrderStatusSections=c,this.Section=s.a}get isAvailable(){var e;return this.serviceProvider&&(null===(e=this.serviceProvider.profile)||void 0===e?void 0:e.available)}refreshOrder(e){return Object(o.a)(this,void 0,void 0,function*(){setTimeout(()=>{this.fetchOrders(),e.target.complete()},1e3)})}ngOnInit(){return Object(o.a)(this,void 0,void 0,function*(){yield this.notifications.init(),this.orderNotificationSubscription=this.notifications.orderNotificationReceived.subscribe(e=>{e&&this.fetchOrders()})})}ionViewDidEnter(){return Object(o.a)(this,void 0,void 0,function*(){yield this.fetchOrders(),this.serviceProvider=yield this.dashboardService.getServiceProviderUserInfo()})}toggleAvailability(){return Object(o.a)(this,void 0,void 0,function*(){this.serviceProvider.profile.available=!this.serviceProvider.profile.available,this.serviceProvider=yield this.dashboardService.updateServiceProviderProfile({id:this.serviceProvider.id,profile:{available:this.serviceProvider.profile.available}})})}fetchOrders(){return Object(o.a)(this,void 0,void 0,function*(){this.orders=yield this.dashboardService.getEmployeeOrders()})}ionViewDidLeave(){this.orderNotificationSubscription&&this.orderNotificationSubscription.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(u.Nb(m),u.Nb(i.g),u.Nb(v.a))},e.\u0275cmp=u.Hb({type:e,selectors:[["app-dashboard"]],decls:41,vars:69,consts:[[3,"title"],["slot","fixed",3,"ionRefresh"],["lines","none",1,"ion-padding"],["lines","none",1,"ion-no-padding"],["mode","md",3,"ngModel","ngModelChange"],[3,"order",4,"ngFor","ngForOf"],["class","ion-text-center",4,"ngIf"],["lines","none","detail","false",1,"ion-margin"],["expand","block","mat-button","","color","primary",1,"full-width",3,"routerLink"],[3,"order"],[1,"ion-text-center"]],template:function(e,t){1&e&&(u.Tb(0,"ion-header"),u.Tb(1,"app-primary-header",0),u.fc(2,"translate"),u.Ob(3,"ion-back-button"),u.Sb(),u.Sb(),u.Tb(4,"ion-content"),u.Tb(5,"ion-refresher",1),u.bc("ionRefresh",function(e){return t.refreshOrder(e)}),u.Ob(6,"ion-refresher-content"),u.Sb(),u.Tb(7,"ion-list",2),u.Tb(8,"ion-item",3),u.Tb(9,"ion-label"),u.Bc(10),u.fc(11,"translate"),u.Sb(),u.Tb(12,"ion-toggle",4),u.bc("ngModelChange",function(){return t.toggleAvailability()}),u.Sb(),u.Sb(),u.Tb(13,"h6"),u.Bc(14),u.fc(15,"translate"),u.Sb(),u.zc(16,R,1,1,"app-order-list-item",5),u.fc(17,"slice"),u.fc(18,"orderByKey"),u.fc(19,"filterByKey"),u.zc(20,Y,4,3,"div",6),u.fc(21,"slice"),u.fc(22,"filterByKey"),u.Tb(23,"ion-item",7),u.Tb(24,"button",8),u.Bc(25),u.fc(26,"translate"),u.Sb(),u.Sb(),u.Tb(27,"h6"),u.Bc(28),u.fc(29,"translate"),u.Sb(),u.zc(30,F,1,1,"app-order-list-item",5),u.fc(31,"slice"),u.fc(32,"orderByKey"),u.fc(33,"filterByKey"),u.zc(34,N,4,3,"div",6),u.fc(35,"slice"),u.fc(36,"filterByKey"),u.Tb(37,"ion-item",7),u.Tb(38,"button",8),u.Bc(39),u.fc(40,"translate"),u.Sb(),u.Sb(),u.Sb(),u.Sb()),2&e&&(u.Cb(1),u.lc("title",u.gc(2,13,"Dashboard")),u.Cb(9),u.Cc(u.gc(11,15,"Available")),u.Cb(2),u.lc("ngModel",t.isAvailable),u.Cb(2),u.Cc(u.gc(15,17,"Orders In Request")),u.Cb(2),u.lc("ngForOf",u.ic(17,19,u.ic(18,23,u.ic(19,27,t.orders,"status",t.OrderStatusSections.Requests),"id","desc"),0,1)),u.Cb(4),u.lc("ngIf",0==u.ic(21,31,u.ic(22,35,t.orders,"status",t.OrderStatusSections.Requests),0,1).length),u.Cb(4),u.lc("routerLink",u.pc(65,X,t.Section.Requests)),u.Cb(1),u.Dc(" ",u.gc(26,39,"Show Orders")," "),u.Cb(3),u.Cc(u.gc(29,41,"Active Orders")),u.Cb(2),u.lc("ngForOf",u.ic(31,43,u.ic(32,47,u.ic(33,51,t.orders,"status",t.OrderStatusSections.Active),"id","desc"),0,1)),u.Cb(4),u.lc("ngIf",0==u.ic(35,55,u.ic(36,59,t.orders,"status",t.OrderStatusSections.Active),0,1).length),u.Cb(4),u.lc("routerLink",u.pc(67,X,t.Section.Active)),u.Cb(1),u.Dc(" ",u.gc(40,63,"Show Orders")," "))},directives:[p.s,g.a,p.f,p.g,p.p,p.D,p.E,p.y,p.v,p.x,p.N,p.b,y.p,y.s,h.l,h.m,S.a,p.X,i.h,U,p.C],pipes:[w.c,h.u,_.a,x.a],styles:[""]}),Object(o.b)([Object(l.a)("",!1)],e.prototype,"refreshOrder",null),Object(o.b)([Object(d.a)()],e.prototype,"ionViewDidEnter",null),e})(),canActivate:[n.a]}];let H=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.Lb({type:e}),e.\u0275inj=u.Kb({imports:[[i.j.forChild(A)],i.j]}),e})();var z=r("PCNd");let K=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.Lb({type:e}),e.\u0275inj=u.Kb({imports:[[z.a,H]]}),e})()},W4DG:function(e,t,r){"use strict";r.d(t,"a",function(){return o});var i=r("mrSG"),n=r("TEn/");function o(){return(e,t,r)=>{const o=r.value;return r.value=function(...e){return Object(i.a)(this,void 0,void 0,function*(){let t;const r=new n.R,i=yield r.create();yield i.present();try{t=yield o.apply(this,e)}catch(s){throw i.dismiss(),s}return i.dismiss(),t})},r}}},gMLP:function(e,t,r){"use strict";r.d(t,"b",function(){return n}),r.d(t,"a",function(){return o}),r.d(t,"e",function(){return s}),r.d(t,"c",function(){return a}),r.d(t,"d",function(){return c});var i=r("roZI");const n=[{name:"Emergency / repair order",id:0,imageUrl:"/assets/images/orders/kind/0.svg",value:i.g.EmergencyRepair},{name:"Predictive maintenance",id:1,imageUrl:"/assets/images/orders/kind/1.svg",value:i.g.PredictiveMaintenance},{name:"Request a new project / offer",id:2,imageUrl:"/assets/images/orders/kind/2.svg",value:i.g.NewProject}],o=[{name:"Plants / Machines",id:0,imageUrl:"/assets/images/orders/department/machines.svg",value:i.a.Plants},{name:"PKW / LKW",id:1,imageUrl:"/assets/images/orders/department/trucks.svg",value:i.a.CarTruck},{name:"E-Mobility",id:2,imageUrl:"/assets/images/orders/department/e-mobility.svg",value:i.a.EMobility},{name:"Door / gate",id:3,imageUrl:"/assets/images/orders/department/gates.svg",value:i.a.Door},{name:"Forklift Trucks / Conveyor Vehicles",id:4,imageUrl:"/assets/images/orders/department/forklifts.svg",value:i.a.ForkliftsConveyors},{name:"House Technic",id:5,imageUrl:"/assets/images/orders/department/house_electronics.svg",value:i.a.BuildingServices},{name:"Cold / Air Conditioning / Sanitary",id:6,imageUrl:"/assets/images/orders/department/heating.svg",value:i.a.Refrigeration},{name:"Lifting platforms / lift",id:7,imageUrl:"/assets/images/orders/department/lifts.svg",value:i.a.LiftingPlatforms},{name:"Window Construction / Glass",id:8,imageUrl:"/assets/images/orders/department/window.svg",value:i.a.WindowGlass},{name:"Stage / Event Technology",id:9,imageUrl:"/assets/images/orders/department/stage.svg",value:i.a.EventTech},{name:"IT / Presentation Technology",id:10,imageUrl:"/assets/images/orders/department/presentation.svg",value:i.a.ItPresentationTech},{name:"Drywall / Masonry Work",id:11,imageUrl:"/assets/images/orders/department/wall.svg",value:i.a.DrywallMasonry},{name:"Outdoor Area",id:12,imageUrl:"/assets/images/orders/department/lawn.svg",value:i.a.Outdoor},{name:"Welding",id:13,imageUrl:"/assets/images/orders/department/welding.svg",value:i.a.Welding},{name:"Cleaning",id:14,imageUrl:"/assets/images/orders/department/cleaning.svg",value:i.a.Cleaning},{name:"General",id:15,imageUrl:"/assets/images/orders/department/others.svg",value:i.a.General}];var s=function(e){return e.Days="days",e.Hours="h",e.Date="",e}({});const a=[{type:s.Days,factor:24,momentTimeFormat:"MMM Do YYYY"},{type:s.Hours,factor:1,momentTimeFormat:"HH:MM[h], MMM Do YYYY"},{type:s.Date,factor:24,momentTimeFormat:"MMMM Do YYYY"}],c=[{orderType:i.g.EmergencyRepair,values:[{id:0,value:2,type:s.Hours},{id:1,value:4,type:s.Hours},{id:2,value:6,type:s.Hours},{id:3,value:24,type:s.Hours}]},{orderType:i.g.PredictiveMaintenance,values:[{id:0,value:2,type:s.Days},{id:1,value:3,type:s.Days},{id:2,value:4,type:s.Days},{id:3,value:5,type:s.Days},{id:4,value:7,type:s.Days},{id:5,value:10,type:s.Days},{id:6,value:14,type:s.Days}]}]},jPFz:function(e,t,r){"use strict";r.d(t,"a",function(){return o});var i=r("wd/R"),n=r("fXoL");let o=(()=>{class e{constructor(){}calculateTimeFromNow(e,t,r="HH:MM, MMM Do, YYYY"){return i(t).add(e,"hours").format(r)}formatTime(e,t="HH:MM, MMM Do, YYYY"){return i(e).format(t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=n.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},jbSJ:function(e,t,r){"use strict";r.d(t,"a",function(){return n});var i=r("fXoL");let n=(()=>{class e{transform(e,...t){if(!e)return[];const r=t[0],i=t[1];return i&&0!==i.length?e.filter(e=>i.indexOf(e[r])>-1):e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=i.Mb({name:"filterByKey",type:e,pure:!1}),e})()},l73M:function(e,t,r){"use strict";r.d(t,"a",function(){return l});var i=r("mrSG"),n=r("2Vo4"),o=r("roZI"),s=r("fXoL"),a=r("7jUV"),c=r("qSrz"),d=r("IYfF");let l=(()=>{class e{constructor(e,t,r,i){this.employeeService=e,this.companyService=t,this.permissions=r,this.authService=i,this.employeeSelectedByManager=new n.a(null)}getEmployeeOrders(){return Object(i.a)(this,void 0,void 0,function*(){const e=yield(yield this.employeeService.employeesOrdersList()).toPromise();if(yield this.permissions.hasPermission(o.e.SpEmpManager)){const t=yield(yield this.authService.getUserInfo()).id,r=[];for(const i of e)if(i.candidate_service_providers&&0!==i.candidate_service_providers.length)for(const e of i.candidate_service_providers)t===e.id&&(e.loggedInUser=!0),i.candidate=e,r.push(Object.assign({},i));else i.candidate=null,r.push(Object.assign({},i));return r}if(yield this.permissions.hasPermission(o.e.SpEmployee)){const t=yield(yield this.authService.getUserInfo()).id,r=[];for(const i of e)if(i.candidate_service_providers&&0!==i.candidate_service_providers.length){for(const e of i.candidate_service_providers)t===e.id&&(e.loggedInUser=!0,i.candidate=e);r.push(Object.assign({},i))}else i.candidate=null,r.push(Object.assign({},i));return r}return e})}getOrder(e){return Object(i.a)(this,void 0,void 0,function*(){return yield(yield this.employeeService.employeesOrdersRetrieve({id:e})).toPromise()})}getCompanyFromOrder(e){return Object(i.a)(this,void 0,void 0,function*(){return e.location_description.company})}chooseEmployee(e){return Object(i.a)(this,void 0,void 0,function*(){this.employeeSelectedByManager.next(e)})}resetChosenEmployee(){return Object(i.a)(this,void 0,void 0,function*(){this.employeeSelectedByManager.next(null)})}}return e.\u0275fac=function(t){return new(t||e)(s.Xb(a.d),s.Xb(a.b),s.Xb(c.c),s.Xb(d.a))},e.\u0275prov=s.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},"v++7":function(e,t,r){"use strict";r.d(t,"a",function(){return d});var i=r("mrSG"),n=r("TEn/"),o=r("1Xxd"),s=r("LvDl"),a=r("fXoL");let c=(()=>{class e{static toDisplayMessage(e){e.error&&(e=e.error);const t=o.a.getService();return Object.entries(e).map(([e,r])=>{const i=s.startCase(s.camelCase(e));return s.isPlainObject(r)?this.toDisplayMessage(r):s.isArray(r)?`${t.instant(i)}: ${r.join(", ")}`:`${t.instant(i)}: ${r}`}).join("\n")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=a.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function d(e="Success!",t=!0,r=null){return(s,a,d)=>{const l=d.value;return d.value=function(...s){return Object(i.a)(this,void 0,void 0,function*(){const i=new n.Z,a=o.a.getService();let d,u;r&&(r=a.instant(r));try{u=yield l.apply(this,s),t&&(d=yield i.create({message:a.instant(e),duration:2e3,position:"bottom",color:"success"}),d.present())}catch(f){d=yield i.create({header:a.instant("Error!"),message:r||c.toDisplayMessage(f),duration:2e4,position:"middle",color:"primary",cssClass:"error-toast",buttons:[{text:a.instant("OK"),role:"cancel"}]}),d.present();const e=document.querySelector(".error-toast");e.shadowRoot.querySelector(".toast-header").setAttribute("style","font-weight: bold; font-size: 1.4em"),e.shadowRoot.querySelector(".toast-button-inner").setAttribute("style","font-weight: bold")}return u})},d}}}}]);