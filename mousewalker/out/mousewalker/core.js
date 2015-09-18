// Compiled by ClojureScript 0.0-3308 {}
goog.provide('mousewalker.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
mousewalker.core.setup = (function mousewalker$core$setup(){
quil.core.background.call(null,(255));

quil.core.frame_rate.call(null,(30));

quil.core.stroke.call(null,(0));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(10),new cljs.core.Keyword(null,"y","y",-1757859776),(10)], null);
});
mousewalker.core.move_closer = (function mousewalker$core$move_closer(from_pos,to_pos){
if((from_pos < to_pos)){
return (from_pos + (1));
} else {
return (from_pos - (1));
}
});
mousewalker.core.update_state = (function mousewalker$core$update_state(state){
var mousex = quil.core.mouse_x.call(null);
var mousey = quil.core.mouse_y.call(null);
var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state);
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(state);
var r = quil.core.random.call(null,(1));
if((r < .5)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),mousewalker.core.move_closer.call(null,x,mousex),new cljs.core.Keyword(null,"y","y",-1757859776),mousewalker.core.move_closer.call(null,y,mousey)], null);
} else {
return state;
}
});
mousewalker.core.draw_state = (function mousewalker$core$draw_state(state){
return quil.core.point.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(state));
});
mousewalker.core.mousewalker = (function mousewalker$core$mousewalker(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"mousewalker",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,mousewalker.core.update_state))?(function() { 
var G__20866__delegate = function (args){
return cljs.core.apply.call(null,mousewalker.core.update_state,args);
};
var G__20866 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20867__i = 0, G__20867__a = new Array(arguments.length -  0);
while (G__20867__i < G__20867__a.length) {G__20867__a[G__20867__i] = arguments[G__20867__i + 0]; ++G__20867__i;}
  args = new cljs.core.IndexedSeq(G__20867__a,0);
} 
return G__20866__delegate.call(this,args);};
G__20866.cljs$lang$maxFixedArity = 0;
G__20866.cljs$lang$applyTo = (function (arglist__20868){
var args = cljs.core.seq(arglist__20868);
return G__20866__delegate(args);
});
G__20866.cljs$core$IFn$_invoke$arity$variadic = G__20866__delegate;
return G__20866;
})()
:mousewalker.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,mousewalker.core.setup))?(function() { 
var G__20869__delegate = function (args){
return cljs.core.apply.call(null,mousewalker.core.setup,args);
};
var G__20869 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20870__i = 0, G__20870__a = new Array(arguments.length -  0);
while (G__20870__i < G__20870__a.length) {G__20870__a[G__20870__i] = arguments[G__20870__i + 0]; ++G__20870__i;}
  args = new cljs.core.IndexedSeq(G__20870__a,0);
} 
return G__20869__delegate.call(this,args);};
G__20869.cljs$lang$maxFixedArity = 0;
G__20869.cljs$lang$applyTo = (function (arglist__20871){
var args = cljs.core.seq(arglist__20871);
return G__20869__delegate(args);
});
G__20869.cljs$core$IFn$_invoke$arity$variadic = G__20869__delegate;
return G__20869;
})()
:mousewalker.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,mousewalker.core.draw_state))?(function() { 
var G__20872__delegate = function (args){
return cljs.core.apply.call(null,mousewalker.core.draw_state,args);
};
var G__20872 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20873__i = 0, G__20873__a = new Array(arguments.length -  0);
while (G__20873__i < G__20873__a.length) {G__20873__a[G__20873__i] = arguments[G__20873__i + 0]; ++G__20873__i;}
  args = new cljs.core.IndexedSeq(G__20873__a,0);
} 
return G__20872__delegate.call(this,args);};
G__20872.cljs$lang$maxFixedArity = 0;
G__20872.cljs$lang$applyTo = (function (arglist__20874){
var args = cljs.core.seq(arglist__20874);
return G__20872__delegate(args);
});
G__20872.cljs$core$IFn$_invoke$arity$variadic = G__20872__delegate;
return G__20872;
})()
:mousewalker.core.draw_state));
});
goog.exportSymbol('mousewalker.core.mousewalker', mousewalker.core.mousewalker);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__20186__20187__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__20186__20187__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),mousewalker.core.mousewalker,new cljs.core.Keyword(null,"host-id","host-id",742376279),"mousewalker"], null));
}

//# sourceMappingURL=core.js.map