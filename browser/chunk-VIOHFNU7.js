import{a as I}from"./chunk-OT74HGP2.js";import{a as L,b as N,c as F,d as T,e as W,f as P,h as q,j as D}from"./chunk-OYQFHXGU.js";import{f as E}from"./chunk-ZUAPQ5S6.js";import{h as k,k as x}from"./chunk-TMFMCNHG.js";import{$ as v,Aa as m,Ba as p,Na as y,Pa as S,Wa as e,Xa as t,Ya as c,Za as g,ab as b,bb as C,eb as r,fb as M,hb as f,ib as h,ja as d,jb as w,ka as u,lb as V}from"./chunk-J4IF55QE.js";function B(l,o){if(l&1){let j=g();e(0,"button",18),b("click",function(){d(j);let i=C();return u(i.login())}),r(1," Se connecter "),t()}}var Q=(()=>{let o=class o{constructor(a,i){this.authService=a,this.router=i,this.message="Vous \xEAtes d\xE9connect\xE9. (pikachu/pikachu)"}ngOnInit(){this.auth=this.authService}setMessage(){this.auth.isLoggedIn?this.message="Vous \xEAtes connect\xE9.":this.message="Indentifiant ou mot de passe incorrect."}login(){this.message="Tentative de connexion en cours...",this.auth.login(this.name,this.password).subscribe(a=>{this.setMessage(),a?this.router.navigate(["/pokemons"]):(this.password="",this.router.navigate(["/login"]))})}logout(){this.auth.logout(),this.message="Vous \xEAtes d\xE9connect\xE9."}};o.\u0275fac=function(i){return new(i||o)(p(I),p(E))},o.\u0275cmp=v({type:o,selectors:[["app-login"]],standalone:!0,features:[V],decls:26,vars:4,consts:[["loginForm","ngForm"],[1,"hero"],[1,"hero-body"],[1,"title"],[1,"subtitle"],[1,"box","my-6","mx-6","py-6","px-6"],[1,"field"],["for","name",1,"label"],[1,"control","has-icons-left"],["type","text","id","name","name","name","required","",1,"input",3,"ngModelChange","ngModel"],[1,"icon","is-small","is-left"],[1,"fa-solid","fa-user"],["for","password",1,"label"],["type","password","id","password","name","password","required","",1,"input",3,"ngModelChange","ngModel"],[1,"fa-solid","fa-lock"],[1,"field","is-grouped"],[1,"control"],["class","button is-link","type","submit",3,"click",4,"ngIf"],["type","submit",1,"button","is-link",3,"click"]],template:function(i,n){if(i&1){let _=g();e(0,"section",1)(1,"div",2)(2,"p",3),r(3,"Page de connexion"),t(),e(4,"p",4)(5,"em"),r(6),t()()()(),e(7,"form",5,0)(9,"div",6)(10,"label",7),r(11,"Name"),t(),e(12,"div",8)(13,"input",9),w("ngModelChange",function(s){return d(_),h(n.name,s)||(n.name=s),u(s)}),t(),e(14,"span",10),c(15,"i",11),t()()(),e(16,"div",6)(17,"label",12),r(18,"Password"),t(),e(19,"div",8)(20,"input",13),w("ngModelChange",function(s){return d(_),h(n.password,s)||(n.password=s),u(s)}),t(),e(21,"span",10),c(22,"i",14),t()()(),e(23,"div",15)(24,"div",16),y(25,B,2,0,"button",17),t()()()}i&2&&(m(6),M(n.message),m(7),f("ngModel",n.name),m(7),f("ngModel",n.password),m(5),S("ngIf",!n.auth.isLoggedIn))},dependencies:[x,k,D,P,L,N,F,q,W,T],encapsulation:2});let l=o;return l})();export{Q as LoginComponent};