import './polyfills.server.mjs';
import{a as I}from"./chunk-OFMDQHTM.mjs";import"./chunk-N45XJFHS.mjs";import"./chunk-HOBE75BS.mjs";import{a as g}from"./chunk-7SDZOQXM.mjs";import{h as C}from"./chunk-JUTWWHFG.mjs";import"./chunk-YYYBHCZY.mjs";import{Ba as n,Ca as p,Pa as u,Ra as a,Ua as f,Ya as d,Z as s,Za as m,_a as k,db as v,gb as h,ib as y,nb as x,ya as l}from"./chunk-UWXAXBEJ.mjs";import"./chunk-VVCT4QZE.mjs";function S(o,t){if(o&1&&(d(0,"div",4),k(1,"img",5)(2,"app-pokemon-form",6),m()),o&2){let c=v();n(),a("src",c.pokemon.picture,l),n(),a("pokemon",c.pokemon)}}var M=(()=>{let t=class t{constructor(i,e){this.route=i,this.pokemonService=e}ngOnInit(){let i=this.route.snapshot.paramMap.get("id");i?this.pokemonService.getPokemonById(+i).subscribe(e=>this.pokemon=e):this.pokemon=void 0}};t.\u0275fac=function(e){return new(e||t)(p(C),p(g))},t.\u0275cmp=s({type:t,selectors:[["app-edit-pokemon"]],standalone:!0,features:[x],decls:6,vars:2,consts:[[1,"row"],[1,"hero"],[1,"hero-body"],[1,"title"],[1,"card","my-6","mx-6","pt-6","px-6"],["alt","",3,"src"],[3,"pokemon"]],template:function(e,r){e&1&&(d(0,"div",0)(1,"section",1)(2,"div",2)(3,"p",3),h(4),m()()(),u(5,S,3,2,"div",4),m()),e&2&&(n(4),y("\xC9diter ",r.pokemon==null?null:r.pokemon.name,""),n(),f(5,r.pokemon?5:-1))},dependencies:[I]});let o=t;return o})();export{M as EditPokemonComponent};
