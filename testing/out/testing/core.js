// Compiled by ClojureScript 0.0-3308 {}
goog.provide('testing.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
testing.core.setup = (function testing$core$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),(0)], null);
});
testing.core.update_state = (function testing$core$update_state(state){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + 0.7),(255)),new cljs.core.Keyword(null,"angle","angle",1622094254),(new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state) + 0.1)], null);
});
testing.core.draw_state = (function testing$core$draw_state(state){
quil.core.background.call(null,(240));

quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state),(255),(255));

var angle = new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state);
var x = ((150) * quil.core.cos.call(null,angle));
var y = ((150) * quil.core.sin.call(null,angle));
var tr__23448__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__23448__auto__);

return quil.core.ellipse.call(null,x,y,(100),(100));
}finally {quil.core.pop_matrix.call(null);
}});
testing.core.testing = (function testing$core$testing(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"testing",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,testing.core.update_state))?(function() { 
var G__23531__delegate = function (args){
return cljs.core.apply.call(null,testing.core.update_state,args);
};
var G__23531 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23532__i = 0, G__23532__a = new Array(arguments.length -  0);
while (G__23532__i < G__23532__a.length) {G__23532__a[G__23532__i] = arguments[G__23532__i + 0]; ++G__23532__i;}
  args = new cljs.core.IndexedSeq(G__23532__a,0);
} 
return G__23531__delegate.call(this,args);};
G__23531.cljs$lang$maxFixedArity = 0;
G__23531.cljs$lang$applyTo = (function (arglist__23533){
var args = cljs.core.seq(arglist__23533);
return G__23531__delegate(args);
});
G__23531.cljs$core$IFn$_invoke$arity$variadic = G__23531__delegate;
return G__23531;
})()
:testing.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,testing.core.setup))?(function() { 
var G__23534__delegate = function (args){
return cljs.core.apply.call(null,testing.core.setup,args);
};
var G__23534 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23535__i = 0, G__23535__a = new Array(arguments.length -  0);
while (G__23535__i < G__23535__a.length) {G__23535__a[G__23535__i] = arguments[G__23535__i + 0]; ++G__23535__i;}
  args = new cljs.core.IndexedSeq(G__23535__a,0);
} 
return G__23534__delegate.call(this,args);};
G__23534.cljs$lang$maxFixedArity = 0;
G__23534.cljs$lang$applyTo = (function (arglist__23536){
var args = cljs.core.seq(arglist__23536);
return G__23534__delegate(args);
});
G__23534.cljs$core$IFn$_invoke$arity$variadic = G__23534__delegate;
return G__23534;
})()
:testing.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,testing.core.draw_state))?(function() { 
var G__23537__delegate = function (args){
return cljs.core.apply.call(null,testing.core.draw_state,args);
};
var G__23537 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23538__i = 0, G__23538__a = new Array(arguments.length -  0);
while (G__23538__i < G__23538__a.length) {G__23538__a[G__23538__i] = arguments[G__23538__i + 0]; ++G__23538__i;}
  args = new cljs.core.IndexedSeq(G__23538__a,0);
} 
return G__23537__delegate.call(this,args);};
G__23537.cljs$lang$maxFixedArity = 0;
G__23537.cljs$lang$applyTo = (function (arglist__23539){
var args = cljs.core.seq(arglist__23539);
return G__23537__delegate(args);
});
G__23537.cljs$core$IFn$_invoke$arity$variadic = G__23537__delegate;
return G__23537;
})()
:testing.core.draw_state));
});
goog.exportSymbol('testing.core.testing', testing.core.testing);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__22849__22850__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__22849__22850__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),testing.core.testing,new cljs.core.Keyword(null,"host-id","host-id",742376279),"testing"], null));
}

//# sourceMappingURL=core.js.map