// Compiled by ClojureScript 0.0-3308 {}
goog.provide('walker.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
walker.core.setup = (function walker$core$setup(){
quil.core.background.call(null,(255));

quil.core.stroke.call(null,(0));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(quil.core.width.call(null) / (2)),new cljs.core.Keyword(null,"y","y",-1757859776),(quil.core.height.call(null) / (2))], null);
});
walker.core.update_state = (function walker$core$update_state(state){
var stepx = ((quil.core.random.call(null,(3)) | (0)) - (1));
var stepy = ((quil.core.random.call(null,(3)) | (0)) - (1));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state) + stepx),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(state) + stepy)], null);
});
walker.core.draw_state = (function walker$core$draw_state(state){
return quil.core.point.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(state));
});
walker.core.walker = (function walker$core$walker(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"walker",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,walker.core.update_state))?(function() { 
var G__20589__delegate = function (args){
return cljs.core.apply.call(null,walker.core.update_state,args);
};
var G__20589 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20590__i = 0, G__20590__a = new Array(arguments.length -  0);
while (G__20590__i < G__20590__a.length) {G__20590__a[G__20590__i] = arguments[G__20590__i + 0]; ++G__20590__i;}
  args = new cljs.core.IndexedSeq(G__20590__a,0);
} 
return G__20589__delegate.call(this,args);};
G__20589.cljs$lang$maxFixedArity = 0;
G__20589.cljs$lang$applyTo = (function (arglist__20591){
var args = cljs.core.seq(arglist__20591);
return G__20589__delegate(args);
});
G__20589.cljs$core$IFn$_invoke$arity$variadic = G__20589__delegate;
return G__20589;
})()
:walker.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(640),(360)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,walker.core.setup))?(function() { 
var G__20592__delegate = function (args){
return cljs.core.apply.call(null,walker.core.setup,args);
};
var G__20592 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20593__i = 0, G__20593__a = new Array(arguments.length -  0);
while (G__20593__i < G__20593__a.length) {G__20593__a[G__20593__i] = arguments[G__20593__i + 0]; ++G__20593__i;}
  args = new cljs.core.IndexedSeq(G__20593__a,0);
} 
return G__20592__delegate.call(this,args);};
G__20592.cljs$lang$maxFixedArity = 0;
G__20592.cljs$lang$applyTo = (function (arglist__20594){
var args = cljs.core.seq(arglist__20594);
return G__20592__delegate(args);
});
G__20592.cljs$core$IFn$_invoke$arity$variadic = G__20592__delegate;
return G__20592;
})()
:walker.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,walker.core.draw_state))?(function() { 
var G__20595__delegate = function (args){
return cljs.core.apply.call(null,walker.core.draw_state,args);
};
var G__20595 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20596__i = 0, G__20596__a = new Array(arguments.length -  0);
while (G__20596__i < G__20596__a.length) {G__20596__a[G__20596__i] = arguments[G__20596__i + 0]; ++G__20596__i;}
  args = new cljs.core.IndexedSeq(G__20596__a,0);
} 
return G__20595__delegate.call(this,args);};
G__20595.cljs$lang$maxFixedArity = 0;
G__20595.cljs$lang$applyTo = (function (arglist__20597){
var args = cljs.core.seq(arglist__20597);
return G__20595__delegate(args);
});
G__20595.cljs$core$IFn$_invoke$arity$variadic = G__20595__delegate;
return G__20595;
})()
:walker.core.draw_state));
});
goog.exportSymbol('walker.core.walker', walker.core.walker);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__20145__20146__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__20145__20146__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),walker.core.walker,new cljs.core.Keyword(null,"host-id","host-id",742376279),"walker"], null));
}

//# sourceMappingURL=core.js.map