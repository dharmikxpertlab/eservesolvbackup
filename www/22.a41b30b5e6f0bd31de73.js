(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"3r7Z":function(e,t,r){"use strict";r.d(t,"c",function(){return o}),r.d(t,"b",function(){return i}),r.d(t,"a",function(){return a});var n=r("roZI");const o=[{orderState:n.f.Accepted,label:"Accept Order",formField:"accepted_at"},{orderState:n.f.OnTheWay,label:"On the way",formField:"on_the_way_at"},{orderState:n.f.WorkStarted,label:"Work Started",formField:"work_started_at"},{orderState:n.f.WorkComplete,label:"Work Complete",formField:"work_completed_at"},{orderState:n.f.Complete,label:"Take Signature",formField:"completed_at",text:"Have the client confirm the completion of your work with a signature."}],i=[{orderState:n.f.Accepted,label:"Order Accepted",formField:"accepted_at"},{orderState:n.f.OnTheWay,label:"Technician on the way",formField:"on_the_way_at"},{orderState:n.f.WorkStarted,label:"Work Started",formField:"work_started_at"},{orderState:n.f.WorkComplete,label:"Work Complete",formField:"work_completed_at"},{orderState:n.f.Complete,label:"Order Completed",formField:"completed_at"}],a=[{key:n.f.Draft,value:"Draft"},{key:n.f.Finalized,value:"In Queue"},{key:n.f.Accepted,value:"Order Accepted"},{key:n.f.OnTheWay,value:"On the way"},{key:n.f.WorkStarted,value:"Work Started"},{key:n.f.WorkComplete,value:"Work Complete"},{key:n.f.Complete,value:"Order Completed"}]},AuFP:function(e,t,r){"use strict";r.d(t,"a",function(){return i});var n=r("LvDl"),o=r("fXoL");let i=(()=>{class e{transform(e,t,r="asc"){return t?n.orderBy(e,t,r):e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=o.Mb({name:"orderByKey",type:e,pure:!1}),e})()},CTCL:function(e,t,r){"use strict";r.d(t,"a",function(){return u});var n=r("LvDl"),o=r("roZI"),i=r("GShR"),a=r("fXoL"),s=r("jPFz"),c=r("TEn/"),d=r("sYmb"),l=r("aEDk");let u=(()=>{class e{constructor(e){this.timeService=e,this.OrderType=o.g}get orderType(){return n.find(i.a,{key:this.order.type}).value}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(a.Nb(s.a))},e.\u0275cmp=a.Hb({type:e,selectors:[["app-order-type-badge"]],inputs:{order:"order"},decls:4,vars:5,consts:[["mode","md"]],template:function(e,t){1&e&&(a.Tb(0,"ion-badge",0),a.Bc(1),a.fc(2,"translate"),a.fc(3,"rtrim"),a.Sb()),2&e&&(a.Cb(1),a.Dc(" ",a.gc(2,1,a.gc(3,3,t.orderType)),"\n"))},directives:[c.h],pipes:[d.c,l.b],styles:[""]}),e})()},DnxR:function(e,t,r){"use strict";r.d(t,"a",function(){return d});var n=r("roZI"),o=r("LvDl"),i=r("gMLP"),a=r("fXoL"),s=r("jPFz"),c=r("sYmb");let d=(()=>{class e{constructor(e){this.timeService=e,this.OrderType=n.g}get untilTextLabel(){return this.order.type+"_UNTIL_LABEL"}get emergencyTill(){let e;return e=this.order.type===this.OrderType.PredictiveMaintenance?o.find(i.c,{type:i.e.Date}).momentTimeFormat:o.find(i.c,{type:i.e.Hours}).momentTimeFormat,this.timeService.formatTime(this.order.needs_fix_before,e)}}return e.\u0275fac=function(t){return new(t||e)(a.Nb(s.a))},e.\u0275cmp=a.Hb({type:e,selectors:[["app-order-emergency-until-text"]],inputs:{order:"order"},decls:6,vars:4,template:function(e,t){1&e&&(a.Rb(0),a.Tb(1,"div"),a.Bc(2),a.fc(3,"translate"),a.Ob(4,"br"),a.Bc(5),a.Sb(),a.Qb()),2&e&&(a.Cb(2),a.Dc("",a.gc(3,2,t.untilTextLabel)," "),a.Cb(3),a.Dc(" ",t.emergencyTill,""))},pipes:[c.c],styles:["*[_ngcontent-%COMP%]{text-align:right}"]}),e})()},GShR:function(e,t,r){"use strict";r.d(t,"a",function(){return o});var n=r("roZI");const o=[{key:n.g.EmergencyRepair,value:"Emergency"},{key:n.g.NewProject,value:"New Project"},{key:n.g.PredictiveMaintenance,value:"Maintenance"}]},cIrR:function(e,t,r){"use strict";r.r(t),r.d(t,"DashboardPageModule",function(){return R});var n=r("tyNb"),o=r("mrSG"),i=r("3MYn"),a=r("LvDl");const s={Draft:a.find(i.b,{name:i.a.Draft}).order_states,Requested:a.find(i.b,{name:i.a.Requested}).order_states,Pending:a.find(i.b,{name:i.a.Pending}).order_states,Completed:a.find(i.b,{name:i.a.Completed}).order_states};var c=r("fXoL"),d=r("7jUV");let l=(()=>{class e{constructor(e,t){this.orderService=e,this.locationService=t}getOrders(){return Object(o.a)(this,void 0,void 0,function*(){return yield(yield this.orderService.ordersList()).toPromise()})}getLocations(){return Object(o.a)(this,void 0,void 0,function*(){return yield(yield this.locationService.locationsList()).toPromise()})}}return e.\u0275fac=function(t){return new(t||e)(c.Xb(d.g),c.Xb(d.e))},e.\u0275prov=c.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var u=r("lWke"),m=r("TEn/"),f=r("qO5g"),g=r("Q6/c"),b=r("ofXK");function p(e,t){if(1&e&&(c.Tb(0,"div",1),c.Tb(1,"ion-avatar"),c.Ob(2,"img",2),c.Sb(),c.Sb()),2&e){const e=c.ec();c.Cb(2),c.lc("src",e.company.logo,c.uc)}}let v=(()=>{class e{constructor(e){this.companyService=e}ngOnInit(){return Object(o.a)(this,void 0,void 0,function*(){this.company=yield this.companyService.getCompany()})}}return e.\u0275fac=function(t){return new(t||e)(c.Nb(g.a))},e.\u0275cmp=c.Hb({type:e,selectors:[["app-company-label"]],decls:1,vars:1,consts:[["class","ion-text-center",4,"ngIf"],[1,"ion-text-center"],[3,"src"]],template:function(e,t){1&e&&c.zc(0,p,3,1,"div",0),2&e&&c.lc("ngIf",t.company)},directives:[b.m,m.e],styles:["ion-avatar[_ngcontent-%COMP%]{height:100px;width:100px;margin:.5em auto}img[_ngcontent-%COMP%]{object-fit:contain}"]}),e})();var y=r("bTqV"),h=r("sjDr"),S=r("aDVg"),C=r("sYmb"),T=r("AuFP"),k=r("jbSJ");function O(e,t){if(1&e&&(c.Rb(0),c.Ob(1,"app-order-small-card",11),c.Qb()),2&e){const e=t.$implicit;c.Cb(1),c.lc("order",e)}}function w(e,t){1&e&&(c.Tb(0,"div",12),c.Tb(1,"ion-note"),c.Bc(2),c.fc(3,"translate"),c.Sb(),c.Sb()),2&e&&(c.Cb(2),c.Cc(c.gc(3,1,"No order requests")))}function M(e,t){if(1&e&&(c.Rb(0),c.Ob(1,"app-order-small-card",11),c.Qb()),2&e){const e=t.$implicit;c.Cb(1),c.lc("order",e)}}function D(e,t){1&e&&(c.Tb(0,"div",12),c.Tb(1,"ion-note"),c.Bc(2),c.fc(3,"translate"),c.Sb(),c.Sb()),2&e&&(c.Cb(2),c.Cc(c.gc(3,1,"No orders in progress")))}const L=function(e){return["/locations",e,"edit"]};function P(e,t){if(1&e&&c.Ob(0,"app-location-card",13),2&e){const e=t.$implicit;c.lc("routerLink",c.pc(2,L,e.id))("location",e)}}const _=function(){return["/customers/orders/new"]},x=function(e){return["/customers/orders",e]},I=function(){return["/locations"]};function F(e,t){if(1&e&&(c.Tb(0,"ion-list",2),c.Tb(1,"div",3),c.Tb(2,"ion-button",4),c.Bc(3),c.fc(4,"translate"),c.Sb(),c.Sb(),c.Tb(5,"h6"),c.Bc(6),c.fc(7,"translate"),c.Sb(),c.zc(8,O,2,1,"ng-container",5),c.fc(9,"slice"),c.fc(10,"orderByKey"),c.fc(11,"filterByKey"),c.zc(12,w,4,3,"div",6),c.fc(13,"slice"),c.fc(14,"filterByKey"),c.Tb(15,"ion-item",7),c.Tb(16,"button",8),c.Bc(17),c.fc(18,"translate"),c.Sb(),c.Sb(),c.Tb(19,"h6"),c.Bc(20),c.fc(21,"translate"),c.Sb(),c.zc(22,M,2,1,"ng-container",5),c.fc(23,"slice"),c.fc(24,"orderByKey"),c.fc(25,"filterByKey"),c.zc(26,D,4,3,"div",6),c.fc(27,"slice"),c.fc(28,"filterByKey"),c.Tb(29,"ion-item",7),c.Tb(30,"button",8),c.Bc(31),c.fc(32,"translate"),c.Sb(),c.Sb(),c.Tb(33,"h6"),c.Bc(34),c.fc(35,"translate"),c.Sb(),c.zc(36,P,1,4,"app-location-card",9),c.fc(37,"slice"),c.Tb(38,"ion-item",10),c.Tb(39,"button",8),c.Bc(40),c.fc(41,"translate"),c.Sb(),c.Sb(),c.Sb()),2&e){const e=c.ec();c.Cb(1),c.lc("routerLink",c.oc(74,_)),c.Cb(2),c.Cc(c.gc(4,16,"Create new order")),c.Cb(3),c.Cc(c.gc(7,18,"Order Requests")),c.Cb(2),c.lc("ngForOf",c.ic(9,20,c.ic(10,24,c.ic(11,28,e.orders,"status",e.OrderStatusSections.Requested),"id","desc"),0,1)),c.Cb(4),c.lc("ngIf",0==c.ic(13,32,c.ic(14,36,e.orders,"status",e.OrderStatusSections.Requested),0,1).length),c.Cb(4),c.lc("routerLink",c.pc(75,x,e.Section.Requested)),c.Cb(1),c.Dc(" ",c.gc(18,40,"Show Orders")," "),c.Cb(3),c.Cc(c.gc(21,42,"Orders In Progress")),c.Cb(2),c.lc("ngForOf",c.ic(23,44,c.ic(24,48,c.ic(25,52,e.orders,"status",e.OrderStatusSections.Pending),"id","desc"),0,1)),c.Cb(4),c.lc("ngIf",0==c.ic(27,56,c.ic(28,60,e.orders,"status",e.OrderStatusSections.Pending),0,1).length),c.Cb(4),c.lc("routerLink",c.pc(77,x,e.Section.Pending)),c.Cb(1),c.Dc(" ",c.gc(32,64,"Show Orders")," "),c.Cb(3),c.Cc(c.gc(35,66,"Location Management")),c.Cb(2),c.lc("ngForOf",c.ic(37,68,e.locations,0,2)),c.Cb(3),c.lc("routerLink",c.oc(79,I)),c.Cb(1),c.Dc(" ",c.gc(41,72,"Show Locations")," ")}}const B=[{path:"",component:(()=>{class e{constructor(e,t){this.dashboardService=e,this.notifications=t,this.locations=[],this.OrderStatusSections=s,this.Section=i.a}ionViewDidEnter(){return Object(o.a)(this,void 0,void 0,function*(){this.orders=yield this.dashboardService.getOrders(),this.locations=yield this.dashboardService.getLocations()})}ngOnInit(){return Object(o.a)(this,void 0,void 0,function*(){yield this.notifications.init()})}}return e.\u0275fac=function(t){return new(t||e)(c.Nb(l),c.Nb(u.a))},e.\u0275cmp=c.Hb({type:e,selectors:[["app-dashboard"]],decls:7,vars:4,consts:[[3,"title"],["lines","none","class","ion-padding-start ion-padding-end",4,"ngIf"],["lines","none",1,"ion-padding-start","ion-padding-end"],["routerLinkActive","router-link-active",1,"margin-auto","ion-text-center",3,"routerLink"],["size","medium","mode","md","color","primary",1,"ion-margin-top"],[4,"ngFor","ngForOf"],["class","ion-text-center",4,"ngIf"],["lines","none","detail","false",1,"ion-margin"],["expand","block","mat-button","","color","primary",1,"full-width",3,"routerLink"],["class","ion-no-padding","routerLinkActive","router-link-active",3,"routerLink","location",4,"ngFor","ngForOf"],["lines","none","detail","false"],[3,"order"],[1,"ion-text-center"],["routerLinkActive","router-link-active",1,"ion-no-padding",3,"routerLink","location"]],template:function(e,t){1&e&&(c.Tb(0,"ion-header"),c.Tb(1,"app-primary-header",0),c.fc(2,"translate"),c.Ob(3,"ion-back-button"),c.Sb(),c.Sb(),c.Tb(4,"ion-content"),c.Ob(5,"app-company-label"),c.zc(6,F,42,80,"ion-list",1),c.Sb()),2&e&&(c.Cb(1),c.lc("title",c.gc(2,2,"Dashboard")),c.Cb(5),c.lc("ngIf",t.orders))},directives:[m.s,f.a,m.f,m.g,m.p,v,b.m,m.y,n.i,m.X,n.h,m.i,b.l,m.v,y.a,h.a,m.C,S.a],pipes:[C.c,b.u,T.a,k.a],styles:[""]}),e})()}];let Y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Lb({type:e}),e.\u0275inj=c.Kb({imports:[[n.j.forChild(B)],n.j]}),e})();var z=r("PCNd");let R=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.Lb({type:e}),e.\u0275inj=c.Kb({imports:[[z.a,Y]]}),e})()},gMLP:function(e,t,r){"use strict";r.d(t,"b",function(){return o}),r.d(t,"a",function(){return i}),r.d(t,"e",function(){return a}),r.d(t,"c",function(){return s}),r.d(t,"d",function(){return c});var n=r("roZI");const o=[{name:"Emergency / repair order",id:0,imageUrl:"/assets/images/orders/kind/0.svg",value:n.g.EmergencyRepair},{name:"Predictive maintenance",id:1,imageUrl:"/assets/images/orders/kind/1.svg",value:n.g.PredictiveMaintenance},{name:"Request a new project / offer",id:2,imageUrl:"/assets/images/orders/kind/2.svg",value:n.g.NewProject}],i=[{name:"Plants / Machines",id:0,imageUrl:"/assets/images/orders/department/machines.svg",value:n.a.Plants},{name:"PKW / LKW",id:1,imageUrl:"/assets/images/orders/department/trucks.svg",value:n.a.CarTruck},{name:"E-Mobility",id:2,imageUrl:"/assets/images/orders/department/e-mobility.svg",value:n.a.EMobility},{name:"Door / gate",id:3,imageUrl:"/assets/images/orders/department/gates.svg",value:n.a.Door},{name:"Forklift Trucks / Conveyor Vehicles",id:4,imageUrl:"/assets/images/orders/department/forklifts.svg",value:n.a.ForkliftsConveyors},{name:"House Technic",id:5,imageUrl:"/assets/images/orders/department/house_electronics.svg",value:n.a.BuildingServices},{name:"Cold / Air Conditioning / Sanitary",id:6,imageUrl:"/assets/images/orders/department/heating.svg",value:n.a.Refrigeration},{name:"Lifting platforms / lift",id:7,imageUrl:"/assets/images/orders/department/lifts.svg",value:n.a.LiftingPlatforms},{name:"Window Construction / Glass",id:8,imageUrl:"/assets/images/orders/department/window.svg",value:n.a.WindowGlass},{name:"Stage / Event Technology",id:9,imageUrl:"/assets/images/orders/department/stage.svg",value:n.a.EventTech},{name:"IT / Presentation Technology",id:10,imageUrl:"/assets/images/orders/department/presentation.svg",value:n.a.ItPresentationTech},{name:"Drywall / Masonry Work",id:11,imageUrl:"/assets/images/orders/department/wall.svg",value:n.a.DrywallMasonry},{name:"Outdoor Area",id:12,imageUrl:"/assets/images/orders/department/lawn.svg",value:n.a.Outdoor},{name:"Welding",id:13,imageUrl:"/assets/images/orders/department/welding.svg",value:n.a.Welding},{name:"Cleaning",id:14,imageUrl:"/assets/images/orders/department/cleaning.svg",value:n.a.Cleaning},{name:"General",id:15,imageUrl:"/assets/images/orders/department/others.svg",value:n.a.General}];var a=function(e){return e.Days="days",e.Hours="h",e.Date="",e}({});const s=[{type:a.Days,factor:24,momentTimeFormat:"MMM Do YYYY"},{type:a.Hours,factor:1,momentTimeFormat:"HH:MM[h], MMM Do YYYY"},{type:a.Date,factor:24,momentTimeFormat:"MMMM Do YYYY"}],c=[{orderType:n.g.EmergencyRepair,values:[{id:0,value:2,type:a.Hours},{id:1,value:4,type:a.Hours},{id:2,value:6,type:a.Hours},{id:3,value:24,type:a.Hours}]},{orderType:n.g.PredictiveMaintenance,values:[{id:0,value:2,type:a.Days},{id:1,value:3,type:a.Days},{id:2,value:4,type:a.Days},{id:3,value:5,type:a.Days},{id:4,value:7,type:a.Days},{id:5,value:10,type:a.Days},{id:6,value:14,type:a.Days}]}]},jPFz:function(e,t,r){"use strict";r.d(t,"a",function(){return i});var n=r("wd/R"),o=r("fXoL");let i=(()=>{class e{constructor(){}calculateTimeFromNow(e,t,r="HH:MM, MMM Do, YYYY"){return n(t).add(e,"hours").format(r)}formatTime(e,t="HH:MM, MMM Do, YYYY"){return n(e).format(t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=o.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},jbSJ:function(e,t,r){"use strict";r.d(t,"a",function(){return o});var n=r("fXoL");let o=(()=>{class e{transform(e,...t){if(!e)return[];const r=t[0],n=t[1];return n&&0!==n.length?e.filter(e=>n.indexOf(e[r])>-1):e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=n.Mb({name:"filterByKey",type:e,pure:!1}),e})()},s0tg:function(e,t,r){"use strict";r.d(t,"a",function(){return s});var n=r("fXoL"),o=r("CTCL"),i=r("TEn/"),a=r("DnxR");let s=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Hb({type:e,selectors:[["app-order-time-information-div"]],inputs:{order:"order"},decls:4,vars:2,consts:[[3,"order"],["mode","md","fill","clear"]],template:function(e,t){1&e&&(n.Tb(0,"div"),n.Ob(1,"app-order-type-badge",0),n.Tb(2,"ion-note",1),n.Ob(3,"app-order-emergency-until-text",0),n.Sb(),n.Sb()),2&e&&(n.Cb(1),n.lc("order",t.order),n.Cb(2),n.lc("order",t.order))},directives:[o.a,i.C,a.a],styles:["ion-note[_ngcontent-%COMP%]{display:block;font-size:12px}div[_ngcontent-%COMP%]{text-align:right}ion-badge[_ngcontent-%COMP%]{font-size:12px}"]}),e})()},sjDr:function(e,t,r){"use strict";r.d(t,"a",function(){return h});var n=r("GShR"),o=r("LvDl"),i=r("3r7Z"),a=r("roZI"),s=r("gMLP"),c=r("fXoL"),d=r("TEn/"),l=r("tyNb"),u=r("ofXK"),m=r("s0tg"),f=r("sYmb");function g(e,t){if(1&e&&(c.Tb(0,"h5",4),c.Bc(1),c.Sb()),2&e){const e=c.ec();c.Cb(1),c.Cc(e.order.location_description.name)}}function b(e,t){if(1&e&&(c.Tb(0,"h5",4),c.Bc(1),c.Sb()),2&e){const e=c.ec();c.Cb(1),c.Cc(e.order.machine_description.type)}}function p(e,t){if(1&e&&(c.Tb(0,"h6"),c.Bc(1),c.fc(2,"translate"),c.Sb()),2&e){const e=c.ec(2);c.Cb(1),c.Cc(c.gc(2,1,e.orderStatus))}}function v(e,t){if(1&e&&(c.Tb(0,"ion-row"),c.Tb(1,"ion-col"),c.Tb(2,"ion-item",5),c.Ob(3,"ion-icon",6),c.zc(4,p,3,3,"h6",3),c.Sb(),c.Sb(),c.Tb(5,"ion-col"),c.Tb(6,"ion-button",7),c.Bc(7),c.fc(8,"translate"),c.Sb(),c.Sb(),c.Sb()),2&e){const e=c.ec();c.Cb(4),c.lc("ngIf",e.order.status),c.Cb(3),c.Cc(c.gc(8,2,"Details"))}}function y(e,t){1&e&&(c.Tb(0,"ion-row"),c.Tb(1,"ion-col"),c.Tb(2,"ion-button",8),c.Ob(3,"ion-icon",9),c.Bc(4),c.fc(5,"translate"),c.Sb(),c.Sb(),c.Sb()),2&e&&(c.Cb(4),c.Dc(" ",c.gc(5,1,"Update")," "))}let h=(()=>{class e{constructor(){this.StatusEnum=a.f}get orderType(){return o.find(n.a,{key:this.order.type}).value}get orderStatus(){return o.find(i.a,{key:this.order.status}).value}get route(){if(this.order.status===a.f.Draft){const e=o.find(s.a,{value:this.order.area}).id;return["/customers/orders/new",o.find(s.b,{value:this.order.type}).id,"department",e,"order",this.order.id]}return["/customers/orders/order",this.order.id]}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Hb({type:e,selectors:[["app-order-small-card"]],inputs:{order:"order"},decls:10,vars:6,consts:[[1,"ion-no-margin","ion-margin-top",3,"routerLink"],["class","ion-no-margin",4,"ngIf"],[3,"order"],[4,"ngIf"],[1,"ion-no-margin"],["lines","none",1,"ion-no-padding","ion-no-margin"],["slot","start","color","success","name","checkmark-circle"],["size","medium","mode","md",1,"ion-no-margin","ion-float-end"],["fill","outline","size","small","mode","md",1,"ion-no-margin"],["slot","start","name","create-outline"]],template:function(e,t){1&e&&(c.Tb(0,"ion-card",0),c.Tb(1,"ion-grid"),c.Tb(2,"ion-row"),c.Tb(3,"ion-col"),c.zc(4,g,2,1,"h5",1),c.zc(5,b,2,1,"h5",1),c.Sb(),c.Tb(6,"ion-col"),c.Ob(7,"app-order-time-information-div",2),c.Sb(),c.Sb(),c.zc(8,v,9,4,"ion-row",3),c.zc(9,y,6,3,"ion-row",3),c.Sb(),c.Sb()),2&e&&(c.lc("routerLink",t.route),c.Cb(4),c.lc("ngIf",!t.order.machine_description),c.Cb(1),c.lc("ngIf",t.order.machine_description),c.Cb(2),c.lc("order",t.order),c.Cb(1),c.lc("ngIf",t.order.status&&t.order.status!=t.StatusEnum.Draft),c.Cb(1),c.lc("ngIf",t.order.status&&t.order.status==t.StatusEnum.Draft))},directives:[d.k,d.X,l.h,d.r,d.G,d.o,u.m,m.a,d.v,d.t,d.i],pipes:[f.c],styles:["h5[_ngcontent-%COMP%]{font-family:Roboto;font-style:normal;font-weight:500;font-size:20px;line-height:23px;letter-spacing:.15px}p[_ngcontent-%COMP%]{font-size:12px;line-height:14px}h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{font-family:Roboto;font-style:normal;font-weight:400;display:flex;align-items:center;letter-spacing:.15px}h6[_ngcontent-%COMP%]{font-size:13px;margin-top:10px;margin-right:0}ion-icon[_ngcontent-%COMP%]{margin-right:3px;height:14px;width:14px}"]}),e})()}}]);