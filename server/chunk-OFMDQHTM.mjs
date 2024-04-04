import './polyfills.server.mjs';
import{a as O,b as j,c as R,d as z,e as G,f as Z,g as H,h as J,i as K,j as Q}from"./chunk-N45XJFHS.mjs";import{a as D}from"./chunk-HOBE75BS.mjs";import{a as B}from"./chunk-7SDZOQXM.mjs";import{k as A}from"./chunk-JUTWWHFG.mjs";import{m as q}from"./chunk-YYYBHCZY.mjs";import{$a as y,Ba as a,Ca as C,Pa as x,Qa as w,Ra as _,Ta as M,Ua as v,Va as E,Wa as P,Xa as T,Ya as o,Z as b,Za as r,_a as V,cb as S,db as d,eb as F,fb as g,gb as p,ha as c,ia as u,ib as W,jb as h,kb as f,lb as k,nb as I,ob as L,pb as N}from"./chunk-UWXAXBEJ.mjs";function U(m,l){if(m&1){let n=y();o(0,"div",9)(1,"label",22),p(2,"Image"),r(),o(3,"input",23,4),k("ngModelChange",function(e){c(n);let i=d(2);return f(i.pokemon.picture,e)||(i.pokemon.picture=e),u(e)}),r(),o(5,"div",12),p(6," L'image du pok\xE9mon est requise. "),r()()}if(m&2){let n=g(4),t=d(2);a(3),h("ngModel",t.pokemon.picture),a(2),_("hidden",n.valid||n.pristine)}}function X(m,l){if(m&1){let n=y();o(0,"label",18)(1,"input",24),S("change",function(e){let i=c(n).$implicit,s=d(2);return u(s.selectType(e,i))}),r(),o(2,"span")(3,"div"),L(4,"pokemonTypeColor"),p(5),r()()()}if(m&2){let n=l.$implicit,t=d(2);a(),F("id",n),_("value",n)("checked",t.hasType(n))("disabled",!t.isTypesValid(n)),a(),w("for",n),a(),M("tag ",N(4,9,n)," ml-2"),a(2),W(" ",n," ")}}function Y(m,l){if(m&1){let n=y();o(0,"form",5,0),S("ngSubmit",function(){c(n);let e=d();return u(e.onSubmit())}),o(2,"div",6)(3,"div",7)(4,"div",8)(5,"div",9)(6,"label",10),p(7,"Nom"),r(),o(8,"input",11,1),k("ngModelChange",function(e){c(n);let i=d();return f(i.pokemon.name,e)||(i.pokemon.name=e),u(e)}),r(),o(10,"div",12),p(11," Le nom du pok\xE9mon est requis (1-25). "),r()(),x(12,U,7,2,"div",9),o(13,"div",9)(14,"label",13),p(15,"Point de vie"),r(),o(16,"input",14,2),k("ngModelChange",function(e){c(n);let i=d();return f(i.pokemon.hp,e)||(i.pokemon.hp=e),u(e)}),r(),o(18,"div",12),p(19," Les points de vie du pok\xE9mon sont compris entre 0 et 999. "),r()(),o(20,"div",9)(21,"label",15),p(22,"D\xE9g\xE2ts"),r(),o(23,"input",16,3),k("ngModelChange",function(e){c(n);let i=d();return f(i.pokemon.cp,e)||(i.pokemon.cp=e),u(e)}),r(),o(25,"div",12),p(26," Les d\xE9g\xE2ts du pok\xE9mon sont compris entre 0 et 99. "),r()(),o(27,"form",9)(28,"label",17),p(29,"Types"),r(),P(30,X,6,11,"label",18,E),r(),V(32,"div",19),o(33,"div",20)(34,"button",21),p(35," Valider "),r()()()()()()}if(m&2){let n=g(1),t=g(9),e=g(17),i=g(24),s=d();a(8),h("ngModel",s.pokemon.name),a(2),_("hidden",t.valid||t.pristine),a(2),v(12,s.isAddForm?12:-1),a(4),h("ngModel",s.pokemon.hp),a(2),_("hidden",e.valid||e.pristine),a(5),h("ngModel",s.pokemon.cp),a(2),_("hidden",i.valid||i.pristine),a(5),T(s.types),a(4),_("disabled",!n.form.valid)}}var ae=(()=>{let l=class l{constructor(t,e){this.pokemonService=t,this.router=e}ngOnInit(){this.types=this.pokemonService.getPokemonTypeList(),this.isAddForm=this.router.url.includes("add")}hasType(t){return this.pokemon.types?.includes(t)}selectType(t,e){if(t.target.checked)this.pokemon.types.push(e);else{let s=this.pokemon.types.indexOf(e);this.pokemon.types.splice(s,1)}}isTypesValid(t){return!(this.pokemon.types?.length===1&&this.hasType(t)||this.pokemon.types?.length>2&&!this.hasType(t))}onSubmit(){this.isAddForm?this.pokemonService.addNewPokemon(this.pokemon).subscribe(t=>this.router.navigate(["/pokemon",t.id])):this.pokemonService.updatePokemon(this.pokemon).subscribe(()=>this.router.navigate(["/pokemon",this.pokemon.id]))}};l.\u0275fac=function(e){return new(e||l)(C(B),C(A))},l.\u0275cmp=b({type:l,selectors:[["app-pokemon-form"]],inputs:{pokemon:"pokemon"},standalone:!0,features:[I],decls:1,vars:1,consts:[["pokemonForm","ngForm"],["name","ngModel"],["hp","ngModel"],["cp","ngModel"],["picture","ngModel"],[3,"ngSubmit"],[1,"row"],[1,"col","s8","offset-s2"],[1,"card-panel"],[1,"form-group","my-2"],["for","name",1,"mr-2"],["type","text","id","name","required","","pattern","^[a-zA-Z0-9\xE0\xE9\xE8\xE7]{1,25}$","name","name",1,"form-control","input","is-small",3,"ngModelChange","ngModel"],[1,"card-panel","red","accent-1",3,"hidden"],["for","hp",1,"mr-2"],["type","number","id","hp","required","","pattern","^[0-9]{1,2}$","name","hp",1,"form-control","input","is-small",3,"ngModelChange","ngModel"],["for","cp",1,"mr-2"],["type","number","id","cp","required","","pattern","^[0-9]{1,2}$","name","cp",1,"form-control","input","is-small",3,"ngModelChange","ngModel"],["for","types",1,"mb-2"],[1,"label","checkbox","is-normal"],[1,"divider"],[1,"section","center"],["type","submit",1,"waves-effect","waves-light","btn",3,"disabled"],["for","picture",1,"mr-2"],["type","url","id","picture","required","","name","picture","placeholder","https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png",1,"form-control","input","is-small",3,"ngModelChange","ngModel"],["type","checkbox",1,"is-small","mr-2",3,"change","id","value","checked","disabled"]],template:function(e,i){e&1&&x(0,Y,36,8,"form"),e&2&&v(0,i.pokemon?0:-1)},dependencies:[q,D,Q,Z,O,H,j,R,J,K,G,z],styles:[".ng-valid[required][_ngcontent-%COMP%]{border-left:5px solid #42a948}.ng-invalid[_ngcontent-%COMP%]:not(form){border-left:5px solid #a94442}"]});let m=l;return m})();export{ae as a};
