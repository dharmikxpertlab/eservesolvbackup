(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{W4DG:function(t,e,r){"use strict";r.d(e,"a",function(){return n});var s=r("mrSG"),a=r("TEn/");function n(){return(t,e,r)=>{const n=r.value;return r.value=function(...t){return Object(s.a)(this,void 0,void 0,function*(){let e;const r=new a.R,s=yield r.create();yield s.present();try{e=yield n.apply(this,t)}catch(o){throw s.dismiss(),o}return s.dismiss(),e})},r}}},XeX8:function(t,e,r){"use strict";r.r(e),r.d(e,"ChangePasswordPageModule",function(){return y});var s=r("tyNb"),a=r("mrSG"),n=r("3Pt+"),o=r("v++7"),i=r("W4DG"),c=r("fXoL"),d=r("7jUV");let u=(()=>{class t{constructor(t){this.accountService=t}changePassword(t){return Object(a.a)(this,void 0,void 0,function*(){return yield(yield this.accountService.accountPasswordChangeCreate$Json({body:t})).toPromise()})}}return t.\u0275fac=function(e){return new(e||t)(c.Xb(d.a))},t.\u0275prov=c.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var l=r("TEn/"),p=r("qO5g"),b=r("kmnG"),h=r("qFsG"),w=r("4Y7C"),f=r("sYmb");const m=[{path:"",component:(()=>{class t{constructor(t){this.changePasswordFacade=t,this.passwordChangeFormFacade=new n.h({password1:new n.e(""),password2:new n.e("")},{validators:this.passwordConfirming}),this.passwordChangeForm=new n.h({password:new n.e("")}),this.status="INVALID"}passwordConfirming(t){if(t.get("password1").value!==t.get("password2").value)return{invalid:!0}}ngOnInit(){this.passwordChangeFormFacade.statusChanges.subscribe(t=>{this.status=t,this.passwordChangeForm.patchValue({password:this.passwordChangeFormFacade.get("password1").value})})}changePassword(){return Object(a.a)(this,void 0,void 0,function*(){if(!this.passwordChangeFormFacade.valid)throw new Error("Please fill the form!");yield this.changePasswordFacade.changePassword(this.passwordChangeForm.value),this.passwordChangeForm.reset(),this.passwordChangeFormFacade.reset()})}}return t.\u0275fac=function(e){return new(e||t)(c.Nb(u))},t.\u0275cmp=c.Hb({type:t,selectors:[["app-change-password"]],decls:17,vars:10,consts:[[3,"title"],[1,"ion-padding",3,"formGroup","ngSubmit"],["appearance","outline"],["type","password","matInput","","formControlName","password1"],["type","password","matInput","","formControlName","password2"],[3,"saveButtonClick"]],template:function(t,e){1&t&&(c.Tb(0,"ion-header"),c.Tb(1,"app-primary-header",0),c.fc(2,"translate"),c.Ob(3,"ion-back-button"),c.Sb(),c.Sb(),c.Tb(4,"ion-content"),c.Tb(5,"form",1),c.bc("ngSubmit",function(){return e.changePassword()}),c.Tb(6,"mat-form-field",2),c.Tb(7,"mat-label"),c.Bc(8),c.fc(9,"translate"),c.Sb(),c.Ob(10,"input",3),c.Sb(),c.Tb(11,"mat-form-field",2),c.Tb(12,"mat-label"),c.Bc(13),c.fc(14,"translate"),c.Sb(),c.Ob(15,"input",4),c.Sb(),c.Tb(16,"app-form-footer",5),c.bc("saveButtonClick",function(){return e.changePassword()}),c.Sb(),c.Sb(),c.Sb()),2&t&&(c.Cb(1),c.lc("title",c.gc(2,4,"Change Password")),c.Cb(4),c.lc("formGroup",e.passwordChangeFormFacade),c.Cb(3),c.Cc(c.gc(9,6,"New Password")),c.Cb(5),c.Cc(c.gc(14,8,"Re-enter New Password")))},directives:[l.s,p.a,l.f,l.g,l.p,n.y,n.q,n.i,b.b,b.e,h.b,n.c,n.p,n.g,w.a],pipes:[f.c],styles:[""]}),Object(a.b)([Object(o.a)(),Object(i.a)()],t.prototype,"changePassword",null),t})()}];let g=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Lb({type:t}),t.\u0275inj=c.Kb({imports:[[s.j.forChild(m)],s.j]}),t})();var v=r("PCNd");let y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.Lb({type:t}),t.\u0275inj=c.Kb({imports:[[v.a,g]]}),t})()},"v++7":function(t,e,r){"use strict";r.d(e,"a",function(){return d});var s=r("mrSG"),a=r("TEn/"),n=r("1Xxd"),o=r("LvDl"),i=r("fXoL");let c=(()=>{class t{static toDisplayMessage(t){t.error&&(t=t.error);const e=n.a.getService();return Object.entries(t).map(([t,r])=>{const s=o.startCase(o.camelCase(t));return o.isPlainObject(r)?this.toDisplayMessage(r):o.isArray(r)?`${e.instant(s)}: ${r.join(", ")}`:`${e.instant(s)}: ${r}`}).join("\n")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Jb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function d(t="Success!",e=!0,r=null){return(o,i,d)=>{const u=d.value;return d.value=function(...o){return Object(s.a)(this,void 0,void 0,function*(){const s=new a.Z,i=n.a.getService();let d,l;r&&(r=i.instant(r));try{l=yield u.apply(this,o),e&&(d=yield s.create({message:i.instant(t),duration:2e3,position:"bottom",color:"success"}),d.present())}catch(p){d=yield s.create({header:i.instant("Error!"),message:r||c.toDisplayMessage(p),duration:2e4,position:"middle",color:"primary",cssClass:"error-toast",buttons:[{text:i.instant("OK"),role:"cancel"}]}),d.present();const t=document.querySelector(".error-toast");t.shadowRoot.querySelector(".toast-header").setAttribute("style","font-weight: bold; font-size: 1.4em"),t.shadowRoot.querySelector(".toast-button-inner").setAttribute("style","font-weight: bold")}return l})},d}}}}]);