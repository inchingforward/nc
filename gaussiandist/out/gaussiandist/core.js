// Compiled by ClojureScript 0.0-3308 {}
goog.provide('gaussiandist.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
gaussiandist.core.get_next_x = (function gaussiandist$core$get_next_x(){
var n = quil.core.random_gaussian.call(null);
var sd = (60);
var mean = (320);
return ((sd * n) + mean);
});
gaussiandist.core.setup = (function gaussiandist$core$setup(){
quil.core.background.call(null,(255));

quil.core.no_stroke.call(null);

quil.core.fill.call(null,(0),(10));

quil.core.frame_rate.call(null,(30));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),gaussiandist.core.get_next_x.call(null)], null);
});
gaussiandist.core.update_state = (function gaussiandist$core$update_state(state){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),gaussiandist.core.get_next_x.call(null)], null);
});
gaussiandist.core.draw_state = (function gaussiandist$core$draw_state(state){
return quil.core.ellipse.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state),(180),(16),(16));
});
gaussiandist.core.gaussiandist = (function gaussiandist$core$gaussiandist(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"gaussiandist",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,gaussiandist.core.update_state))?(function() { 
var G__32165__delegate = function (args){
return cljs.core.apply.call(null,gaussiandist.core.update_state,args);
};
var G__32165 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32166__i = 0, G__32166__a = new Array(arguments.length -  0);
while (G__32166__i < G__32166__a.length) {G__32166__a[G__32166__i] = arguments[G__32166__i + 0]; ++G__32166__i;}
  args = new cljs.core.IndexedSeq(G__32166__a,0);
} 
return G__32165__delegate.call(this,args);};
G__32165.cljs$lang$maxFixedArity = 0;
G__32165.cljs$lang$applyTo = (function (arglist__32167){
var args = cljs.core.seq(arglist__32167);
return G__32165__delegate(args);
});
G__32165.cljs$core$IFn$_invoke$arity$variadic = G__32165__delegate;
return G__32165;
})()
:gaussiandist.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(640),(320)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,gaussiandist.core.setup))?(function() { 
var G__32168__delegate = function (args){
return cljs.core.apply.call(null,gaussiandist.core.setup,args);
};
var G__32168 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32169__i = 0, G__32169__a = new Array(arguments.length -  0);
while (G__32169__i < G__32169__a.length) {G__32169__a[G__32169__i] = arguments[G__32169__i + 0]; ++G__32169__i;}
  args = new cljs.core.IndexedSeq(G__32169__a,0);
} 
return G__32168__delegate.call(this,args);};
G__32168.cljs$lang$maxFixedArity = 0;
G__32168.cljs$lang$applyTo = (function (arglist__32170){
var args = cljs.core.seq(arglist__32170);
return G__32168__delegate(args);
});
G__32168.cljs$core$IFn$_invoke$arity$variadic = G__32168__delegate;
return G__32168;
})()
:gaussiandist.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,gaussiandist.core.draw_state))?(function() { 
var G__32171__delegate = function (args){
return cljs.core.apply.call(null,gaussiandist.core.draw_state,args);
};
var G__32171 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32172__i = 0, G__32172__a = new Array(arguments.length -  0);
while (G__32172__i < G__32172__a.length) {G__32172__a[G__32172__i] = arguments[G__32172__i + 0]; ++G__32172__i;}
  args = new cljs.core.IndexedSeq(G__32172__a,0);
} 
return G__32171__delegate.call(this,args);};
G__32171.cljs$lang$maxFixedArity = 0;
G__32171.cljs$lang$applyTo = (function (arglist__32173){
var args = cljs.core.seq(arglist__32173);
return G__32171__delegate(args);
});
G__32171.cljs$core$IFn$_invoke$arity$variadic = G__32171__delegate;
return G__32171;
})()
:gaussiandist.core.draw_state));
});
goog.exportSymbol('gaussiandist.core.gaussiandist', gaussiandist.core.gaussiandist);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__20186__20187__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__20186__20187__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),gaussiandist.core.gaussiandist,new cljs.core.Keyword(null,"host-id","host-id",742376279),"gaussiandist"], null));
}

//# sourceMappingURL=core.js.map