(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"+iOL":function(e,t,n){"use strict";n.r(t),n.d(t,"RegisterPageModule",function(){return q});var r=n("tyNb"),o=n("mrSG"),i=n("3Pt+"),a=n("5d33"),s=n("roZI"),c=n("sKgK"),l=n("v++7"),u=n("W4DG"),b=n("fXoL"),d=n("IYfF"),m=n("7jUV");let p=(()=>{class e{constructor(e,t){this.authService=e,this.companyService=t}createAccount(e){return Object(o.a)(this,void 0,void 0,function*(){return yield this.authService.register(e)})}getCompanies(){return Object(o.a)(this,void 0,void 0,function*(){return yield(yield this.companyService.companiesList()).toPromise()})}login(e){return Object(o.a)(this,void 0,void 0,function*(){return yield this.authService.login(e)})}}return e.\u0275fac=function(t){return new(t||e)(b.Xb(d.a),b.Xb(m.b))},e.\u0275prov=b.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var g=n("H3/T"),f=n("lWke"),h=n("TEn/"),v=n("qO5g"),y=n("w9SW"),S=n("kmnG"),C=n("qFsG"),w=n("ofXK"),T=n("sYmb");function O(e,t){if(1&e&&(b.Tb(0,"option",25),b.Bc(1),b.fc(2,"translate"),b.Sb()),2&e){const e=t.$implicit;b.lc("value",e.value),b.Cb(1),b.Cc(b.gc(2,2,"SALUTATION_"+e.value))}}function N(e,t){1&e&&(b.Tb(0,"ion-item",22),b.Tb(1,"ion-label"),b.Bc(2),b.fc(3,"translate"),b.Sb(),b.Ob(4,"ion-toggle",26),b.Sb()),2&e&&(b.Cb(2),b.Cc(b.gc(3,1,"I want to manage employees")))}const _=[{path:"",component:(()=>{class e{constructor(e,t,n,r){this.registerFacadeService=e,this.router=t,this.languageService=n,this.notificationService=r,this.Roles=c.a,this.role=c.a.Customer,this.GenderOptions=s.c,this.registerForm=new i.h({first_name:new i.e("",i.x.required),last_name:new i.e(""),company_hint:new i.e("",i.x.required),email:new i.e("",i.x.required),password:new i.e("",i.x.required),phone:new i.e("",i.x.required),is_service_provider:new i.e(!1,i.x.required),is_employee_manager:new i.e(!1,i.x.required),is_location_manager:new i.e(!1,i.x.required),language:new i.e(null,i.x.required),gender:new i.e(null,i.x.required)})}ngOnInit(){return Object(o.a)(this,void 0,void 0,function*(){const e=this.router.getCurrentNavigation().extras.state;(null==e?void 0:e.role)?this.role=e.role:this.router.navigate(["/auth"]),this.registerForm.patchValue({is_service_provider:this.role===this.Roles.SpEmployee}),this.registerForm.patchValue({language:yield(yield this.languageService.getLanguage()).toUpperCase()})})}register(){return Object(o.a)(this,void 0,void 0,function*(){const e=this.registerForm.value,t=yield this.registerFacadeService.createAccount(e);console.log(t),yield this.login(t),this.router.navigate(["/auth","register","registration-successful"])})}login(e){return Object(o.a)(this,void 0,void 0,function*(){yield this.registerFacadeService.login({username:e.username,password:this.registerForm.get("password").value})})}openUrl(e){a.a.open({url:e})}sortNull(){}}return e.\u0275fac=function(t){return new(t||e)(b.Nb(p),b.Nb(r.g),b.Nb(g.a),b.Nb(f.a))},e.\u0275cmp=b.Hb({type:e,selectors:[["app-register"]],decls:70,vars:49,consts:[["translucent","true",1,"ion-no-border"],["menuButtonColor","'primary'","toolbarColor","'light'"],["defaultHref","/auth","color","primary"],[1,"ion-padding-start","ion-padding-end"],[1,"ion-no-margin","ion-margin-bottom"],[3,"formGroup","ngSubmit"],["appearance","fill"],["matNativeControl","","required","","formControlName","gender"],["selected","","disabled","","value","null"],[3,"value",4,"ngFor","ngForOf"],["appearance","outline","color","primary"],["type","text","matInput","","formControlName","first_name"],["appearance","outline"],["type","text","matInput","","formControlName","last_name"],["type","text","matInput","","formControlName","phone"],["type","email","matInput","","formControlName","email"],["type","password","matInput","","formControlName","password"],["type","text","matInput","","formControlName","company_hint"],[1,"ion-text-center"],[1,"ion-no-padding"],["fill","clear",3,"click"],["lines","none","class","ion-no-padding",4,"ngIf"],["lines","none",1,"ion-no-padding"],["slot","end","name","is_location_manager","formControlName","is_location_manager","mode","md"],["expand","block","mode","md","type","submit",1,"ion-margin-top","ion-margin-bottom",3,"disabled"],[3,"value"],["slot","end","name","is_employee_manager","formControlName","is_employee_manager","mode","md"]],template:function(e,t){1&e&&(b.Tb(0,"ion-header",0),b.Tb(1,"app-primary-header",1),b.Ob(2,"ion-back-button",2),b.Sb(),b.Sb(),b.Tb(3,"ion-content",3),b.Ob(4,"app-eservsol-header"),b.Tb(5,"h4",4),b.Bc(6),b.fc(7,"translate"),b.Sb(),b.Tb(8,"form",5),b.bc("ngSubmit",function(){return t.register()}),b.Tb(9,"mat-form-field",6),b.Tb(10,"mat-label"),b.Bc(11),b.fc(12,"translate"),b.Sb(),b.Tb(13,"select",7),b.Tb(14,"option",8),b.Bc(15),b.fc(16,"translate"),b.Sb(),b.zc(17,O,3,4,"option",9),b.fc(18,"keyvalue"),b.Sb(),b.Sb(),b.Tb(19,"mat-form-field",10),b.Tb(20,"mat-label"),b.Bc(21),b.fc(22,"translate"),b.Sb(),b.Ob(23,"input",11),b.Sb(),b.Tb(24,"mat-form-field",12),b.Tb(25,"mat-label"),b.Bc(26),b.fc(27,"translate"),b.Sb(),b.Ob(28,"input",13),b.Sb(),b.Tb(29,"mat-form-field",12),b.Tb(30,"mat-label"),b.Bc(31),b.fc(32,"translate"),b.Sb(),b.Ob(33,"input",14),b.Sb(),b.Tb(34,"mat-form-field",12),b.Tb(35,"mat-label"),b.Bc(36),b.fc(37,"translate"),b.Sb(),b.Ob(38,"input",15),b.Sb(),b.Tb(39,"mat-form-field",12),b.Tb(40,"mat-label"),b.Bc(41),b.fc(42,"translate"),b.Sb(),b.Ob(43,"input",16),b.Sb(),b.Tb(44,"mat-form-field",12),b.Tb(45,"mat-label"),b.Bc(46),b.fc(47,"translate"),b.Sb(),b.Ob(48,"input",17),b.Sb(),b.Tb(49,"div",18),b.Tb(50,"ion-text"),b.Bc(51),b.fc(52,"translate"),b.Sb(),b.Sb(),b.Tb(53,"ion-item",19),b.Tb(54,"ion-button",20),b.bc("click",function(){return t.openUrl("https://eservsol.com/agb/")}),b.Bc(55),b.fc(56,"translate"),b.Sb(),b.Sb(),b.Tb(57,"ion-item",19),b.Tb(58,"ion-button",20),b.bc("click",function(){return t.openUrl("https://eservsol.com/datenschutzbestimmungen-app/")}),b.Bc(59),b.fc(60,"translate"),b.Sb(),b.Sb(),b.zc(61,N,5,3,"ion-item",21),b.Tb(62,"ion-item",22),b.Tb(63,"ion-label"),b.Bc(64),b.fc(65,"translate"),b.Sb(),b.Ob(66,"ion-toggle",23),b.Sb(),b.Tb(67,"ion-button",24),b.Bc(68),b.fc(69,"translate"),b.Sb(),b.Sb(),b.Sb()),2&e&&(b.Cb(6),b.Cc(b.gc(7,18,"Registration")),b.Cb(2),b.lc("formGroup",t.registerForm),b.Cb(3),b.Cc(b.gc(12,20,"Salutation")),b.Cb(4),b.Cc(b.gc(16,22,"Choose")),b.Cb(2),b.lc("ngForOf",b.hc(18,24,t.GenderOptions,t.sortNull)),b.Cb(4),b.Cc(b.gc(22,27,"First Name")),b.Cb(5),b.Cc(b.gc(27,29,"Last Name")),b.Cb(5),b.Cc(b.gc(32,31,"Phone")),b.Cb(5),b.Cc(b.gc(37,33,"E-Mail")),b.Cb(5),b.Cc(b.gc(42,35,"Password")),b.Cb(5),b.Cc(b.gc(47,37,"Company")),b.Cb(5),b.Dc(" ",b.gc(52,39,"With your registration you accept the terms and conditions and data protection information")," "),b.Cb(4),b.Dc(" ",b.gc(56,41,"Terms and Conditions")," "),b.Cb(4),b.Dc(" ",b.gc(60,43,"Privacy Policy")," "),b.Cb(2),b.lc("ngIf",t.role==t.Roles.SpEmployee),b.Cb(3),b.Cc(b.gc(65,45,"I want to manage locations")),b.Cb(3),b.lc("disabled",!t.registerForm.valid),b.Cb(1),b.Cc(b.gc(69,47,"Register")))},directives:[h.s,v.a,h.f,h.g,h.p,y.a,i.y,i.q,i.i,S.b,S.e,C.b,i.w,i.v,i.p,i.g,i.t,i.z,w.l,i.c,h.K,h.v,h.i,w.m,h.x,h.N,h.b],pipes:[T.c,w.g],styles:[""]}),Object(o.b)([Object(u.a)(),Object(l.a)()],e.prototype,"register",null),e})()},{path:"registration-successful",loadChildren:()=>n.e(44).then(n.bind(null,"utKD")).then(e=>e.RegistrationSuccessfulPageModule)},{path:"awaiting-approval",loadChildren:()=>n.e(43).then(n.bind(null,"Gwpc")).then(e=>e.AwaitingApprovalPageModule)}];let j=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=b.Lb({type:e}),e.\u0275inj=b.Kb({imports:[[r.j.forChild(_)],r.j]}),e})();var x=n("PCNd"),B=n("qSrz");let q=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=b.Lb({type:e}),e.\u0275inj=b.Kb({imports:[[x.a,j,B.b.forChild()]]}),e})()},"5d33":function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n("FUe0");const o=Object(r.d)("Browser",{web:()=>n.e(60).then(n.bind(null,"fOPH")).then(e=>new e.BrowserWeb)})},W4DG:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n("mrSG"),o=n("TEn/");function i(){return(e,t,n)=>{const i=n.value;return n.value=function(...e){return Object(r.a)(this,void 0,void 0,function*(){let t;const n=new o.R,r=yield n.create();yield r.present();try{t=yield i.apply(this,e)}catch(a){throw r.dismiss(),a}return r.dismiss(),t})},n}}},"v++7":function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n("mrSG"),o=n("TEn/"),i=n("1Xxd"),a=n("LvDl"),s=n("fXoL");let c=(()=>{class e{static toDisplayMessage(e){e.error&&(e=e.error);const t=i.a.getService();return Object.entries(e).map(([e,n])=>{const r=a.startCase(a.camelCase(e));return a.isPlainObject(n)?this.toDisplayMessage(n):a.isArray(n)?`${t.instant(r)}: ${n.join(", ")}`:`${t.instant(r)}: ${n}`}).join("\n")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=s.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function l(e="Success!",t=!0,n=null){return(a,s,l)=>{const u=l.value;return l.value=function(...a){return Object(r.a)(this,void 0,void 0,function*(){const r=new o.Z,s=i.a.getService();let l,b;n&&(n=s.instant(n));try{b=yield u.apply(this,a),t&&(l=yield r.create({message:s.instant(e),duration:2e3,position:"bottom",color:"success"}),l.present())}catch(d){l=yield r.create({header:s.instant("Error!"),message:n||c.toDisplayMessage(d),duration:2e4,position:"middle",color:"primary",cssClass:"error-toast",buttons:[{text:s.instant("OK"),role:"cancel"}]}),l.present();const e=document.querySelector(".error-toast");e.shadowRoot.querySelector(".toast-header").setAttribute("style","font-weight: bold; font-size: 1.4em"),e.shadowRoot.querySelector(".toast-button-inner").setAttribute("style","font-weight: bold")}return b})},l}}}}]);