// Compiled by ClojureScript 0.0-3308 {}
goog.provide('randomdist.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
randomdist.core.setup = (function randomdist$core$setup(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"random-counts","random-counts",-45762560),cljs.core.vec.call(null,cljs.core.take.call(null,(20),cljs.core.repeat.call(null,(0))))], null);
});
randomdist.core.update_state = (function randomdist$core$update_state(state){
var index = cljs.core.rand_int.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"random-counts","random-counts",-45762560).cljs$core$IFn$_invoke$arity$1(state)));
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"random-counts","random-counts",-45762560),index], null),((function (index){
return (function (p1__22924_SHARP_){
return (p1__22924_SHARP_ + (1));
});})(index))
);
});
randomdist.core.draw_state = (function randomdist$core$draw_state(state){
var counts = new cljs.core.Keyword(null,"random-counts","random-counts",-45762560).cljs$core$IFn$_invoke$arity$1(state);
var rect_width = (quil.core.width.call(null) / cljs.core.count.call(null,counts));
quil.core.background.call(null,(255));

quil.core.stroke.call(null,(0));

quil.core.fill.call(null,(175));

var seq__22929 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,counts)));
var chunk__22930 = null;
var count__22931 = (0);
var i__22932 = (0);
while(true){
if((i__22932 < count__22931)){
var index = cljs.core._nth.call(null,chunk__22930,i__22932);
quil.core.rect.call(null,(index * rect_width),(quil.core.height.call(null) - (cljs.core.get.call(null,counts,index) + (1))),(rect_width - (1)),cljs.core.get.call(null,counts,index));

var G__22933 = seq__22929;
var G__22934 = chunk__22930;
var G__22935 = count__22931;
var G__22936 = (i__22932 + (1));
seq__22929 = G__22933;
chunk__22930 = G__22934;
count__22931 = G__22935;
i__22932 = G__22936;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__22929);
if(temp__4423__auto__){
var seq__22929__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22929__$1)){
var c__18872__auto__ = cljs.core.chunk_first.call(null,seq__22929__$1);
var G__22937 = cljs.core.chunk_rest.call(null,seq__22929__$1);
var G__22938 = c__18872__auto__;
var G__22939 = cljs.core.count.call(null,c__18872__auto__);
var G__22940 = (0);
seq__22929 = G__22937;
chunk__22930 = G__22938;
count__22931 = G__22939;
i__22932 = G__22940;
continue;
} else {
var index = cljs.core.first.call(null,seq__22929__$1);
quil.core.rect.call(null,(index * rect_width),(quil.core.height.call(null) - (cljs.core.get.call(null,counts,index) + (1))),(rect_width - (1)),cljs.core.get.call(null,counts,index));

var G__22941 = cljs.core.next.call(null,seq__22929__$1);
var G__22942 = null;
var G__22943 = (0);
var G__22944 = (0);
seq__22929 = G__22941;
chunk__22930 = G__22942;
count__22931 = G__22943;
i__22932 = G__22944;
continue;
}
} else {
return null;
}
}
break;
}
});
randomdist.core.randomdist = (function randomdist$core$randomdist(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"randomdist",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,randomdist.core.update_state))?(function() { 
var G__22945__delegate = function (args){
return cljs.core.apply.call(null,randomdist.core.update_state,args);
};
var G__22945 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22946__i = 0, G__22946__a = new Array(arguments.length -  0);
while (G__22946__i < G__22946__a.length) {G__22946__a[G__22946__i] = arguments[G__22946__i + 0]; ++G__22946__i;}
  args = new cljs.core.IndexedSeq(G__22946__a,0);
} 
return G__22945__delegate.call(this,args);};
G__22945.cljs$lang$maxFixedArity = 0;
G__22945.cljs$lang$applyTo = (function (arglist__22947){
var args = cljs.core.seq(arglist__22947);
return G__22945__delegate(args);
});
G__22945.cljs$core$IFn$_invoke$arity$variadic = G__22945__delegate;
return G__22945;
})()
:randomdist.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(640),(240)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,randomdist.core.setup))?(function() { 
var G__22948__delegate = function (args){
return cljs.core.apply.call(null,randomdist.core.setup,args);
};
var G__22948 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22949__i = 0, G__22949__a = new Array(arguments.length -  0);
while (G__22949__i < G__22949__a.length) {G__22949__a[G__22949__i] = arguments[G__22949__i + 0]; ++G__22949__i;}
  args = new cljs.core.IndexedSeq(G__22949__a,0);
} 
return G__22948__delegate.call(this,args);};
G__22948.cljs$lang$maxFixedArity = 0;
G__22948.cljs$lang$applyTo = (function (arglist__22950){
var args = cljs.core.seq(arglist__22950);
return G__22948__delegate(args);
});
G__22948.cljs$core$IFn$_invoke$arity$variadic = G__22948__delegate;
return G__22948;
})()
:randomdist.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,randomdist.core.draw_state))?(function() { 
var G__22951__delegate = function (args){
return cljs.core.apply.call(null,randomdist.core.draw_state,args);
};
var G__22951 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22952__i = 0, G__22952__a = new Array(arguments.length -  0);
while (G__22952__i < G__22952__a.length) {G__22952__a[G__22952__i] = arguments[G__22952__i + 0]; ++G__22952__i;}
  args = new cljs.core.IndexedSeq(G__22952__a,0);
} 
return G__22951__delegate.call(this,args);};
G__22951.cljs$lang$maxFixedArity = 0;
G__22951.cljs$lang$applyTo = (function (arglist__22953){
var args = cljs.core.seq(arglist__22953);
return G__22951__delegate(args);
});
G__22951.cljs$core$IFn$_invoke$arity$variadic = G__22951__delegate;
return G__22951;
})()
:randomdist.core.draw_state));
});
goog.exportSymbol('randomdist.core.randomdist', randomdist.core.randomdist);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__20145__20146__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__20145__20146__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),randomdist.core.randomdist,new cljs.core.Keyword(null,"host-id","host-id",742376279),"randomdist"], null));
}

//# sourceMappingURL=core.js.map