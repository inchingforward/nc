// Compiled by ClojureScript 0.0-3308 {}
goog.provide('walker.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
walker.core.setup = (function walker$core$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"x","x",2099068185),(quil.core.width.call(null) / (2)),new cljs.core.Keyword(null,"y","y",-1757859776),(quil.core.height.call(null) / (2))], null);
});
walker.core.update_state = (function walker$core$update_state(state){
var choice = cljs.core.rand_int.call(null,(4));
var G__32138 = choice;
switch (G__32138) {
case (0):
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state) + (1)));

break;
case (1):
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state) - (1)));

break;
case (2):
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(state) + (1)));

break;
case (3):
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(state) - (1)));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(choice)].join('')));

}
});
walker.core.draw_state = (function walker$core$draw_state(state){
quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state),(255),(255));

return quil.core.point.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(state));
});
walker.core.walker = (function walker$core$walker(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"walker",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,walker.core.update_state))?(function() { 
var G__32140__delegate = function (args){
return cljs.core.apply.call(null,walker.core.update_state,args);
};
var G__32140 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32141__i = 0, G__32141__a = new Array(arguments.length -  0);
while (G__32141__i < G__32141__a.length) {G__32141__a[G__32141__i] = arguments[G__32141__i + 0]; ++G__32141__i;}
  args = new cljs.core.IndexedSeq(G__32141__a,0);
} 
return G__32140__delegate.call(this,args);};
G__32140.cljs$lang$maxFixedArity = 0;
G__32140.cljs$lang$applyTo = (function (arglist__32142){
var args = cljs.core.seq(arglist__32142);
return G__32140__delegate(args);
});
G__32140.cljs$core$IFn$_invoke$arity$variadic = G__32140__delegate;
return G__32140;
})()
:walker.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,walker.core.setup))?(function() { 
var G__32143__delegate = function (args){
return cljs.core.apply.call(null,walker.core.setup,args);
};
var G__32143 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32144__i = 0, G__32144__a = new Array(arguments.length -  0);
while (G__32144__i < G__32144__a.length) {G__32144__a[G__32144__i] = arguments[G__32144__i + 0]; ++G__32144__i;}
  args = new cljs.core.IndexedSeq(G__32144__a,0);
} 
return G__32143__delegate.call(this,args);};
G__32143.cljs$lang$maxFixedArity = 0;
G__32143.cljs$lang$applyTo = (function (arglist__32145){
var args = cljs.core.seq(arglist__32145);
return G__32143__delegate(args);
});
G__32143.cljs$core$IFn$_invoke$arity$variadic = G__32143__delegate;
return G__32143;
})()
:walker.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,walker.core.draw_state))?(function() { 
var G__32146__delegate = function (args){
return cljs.core.apply.call(null,walker.core.draw_state,args);
};
var G__32146 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32147__i = 0, G__32147__a = new Array(arguments.length -  0);
while (G__32147__i < G__32147__a.length) {G__32147__a[G__32147__i] = arguments[G__32147__i + 0]; ++G__32147__i;}
  args = new cljs.core.IndexedSeq(G__32147__a,0);
} 
return G__32146__delegate.call(this,args);};
G__32146.cljs$lang$maxFixedArity = 0;
G__32146.cljs$lang$applyTo = (function (arglist__32148){
var args = cljs.core.seq(arglist__32148);
return G__32146__delegate(args);
});
G__32146.cljs$core$IFn$_invoke$arity$variadic = G__32146__delegate;
return G__32146;
})()
:walker.core.draw_state));
});
goog.exportSymbol('walker.core.walker', walker.core.walker);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__20186__20187__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__20186__20187__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),walker.core.walker,new cljs.core.Keyword(null,"host-id","host-id",742376279),"walker"], null));
}

//# sourceMappingURL=core.js.map