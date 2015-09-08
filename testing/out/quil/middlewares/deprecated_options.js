// Compiled by ClojureScript 0.0-3308 {}
goog.provide('quil.middlewares.deprecated_options');
goog.require('cljs.core');
quil.middlewares.deprecated_options.deprecated = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"decor","decor",-1730969431),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2.0","Try :features [:present] for similar effect"], null),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2.0","Use :features [:keep-on-top] instead."], null),new cljs.core.Keyword(null,"safe-draw-fn","safe-draw-fn",1454900202),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2.0","Use :features [:no-safe-fns] instead."], null)], null);
quil.middlewares.deprecated_options.check_features_vector = (function quil$middlewares$deprecated_options$check_features_vector(features){
var features__$1 = cljs.core.set.call(null,features);
if(cljs.core.truth_(features__$1.call(null,new cljs.core.Keyword(null,"no-safe-draw","no-safe-draw",-1157778157)))){
cljs.core.println.call(null,"Feature :no-safe-draw was renamed to :no-safe-fns in Quil 2.1.","Use :feature [:no-safe-fns] now.");
} else {
}

return cljs.core.disj.call(null,features__$1,new cljs.core.Keyword(null,"no-safe-draw","no-safe-draw",-1157778157));
});
/**
 * Checks if options map contains deprected options and removes them.
 * Prints messages how to fix deprecated functions.
 */
quil.middlewares.deprecated_options.deprecated_options = (function quil$middlewares$deprecated_options$deprecated_options(options){
var options__$1 = cljs.core.update_in.call(null,options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"features","features",-1146962336)], null),quil.middlewares.deprecated_options.check_features_vector);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.nil_QMARK_,(function (){var iter__16792__auto__ = ((function (options__$1){
return (function quil$middlewares$deprecated_options$deprecated_options_$_iter__23918(s__23919){
return (new cljs.core.LazySeq(null,((function (options__$1){
return (function (){
var s__23919__$1 = s__23919;
while(true){
var temp__4423__auto__ = cljs.core.seq.call(null,s__23919__$1);
if(temp__4423__auto__){
var s__23919__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23919__$2)){
var c__16790__auto__ = cljs.core.chunk_first.call(null,s__23919__$2);
var size__16791__auto__ = cljs.core.count.call(null,c__16790__auto__);
var b__23921 = cljs.core.chunk_buffer.call(null,size__16791__auto__);
if((function (){var i__23920 = (0);
while(true){
if((i__23920 < size__16791__auto__)){
var vec__23926 = cljs.core._nth.call(null,c__16790__auto__,i__23920);
var name = cljs.core.nth.call(null,vec__23926,(0),null);
var value = cljs.core.nth.call(null,vec__23926,(1),null);
cljs.core.chunk_append.call(null,b__23921,(function (){var temp__4421__auto__ = quil.middlewares.deprecated_options.deprecated.call(null,name);
if(cljs.core.truth_(temp__4421__auto__)){
var vec__23927 = temp__4421__auto__;
var version = cljs.core.nth.call(null,vec__23927,(0),null);
var message = cljs.core.nth.call(null,vec__23927,(1),null);
cljs.core.println.call(null,name,"option was removed in Quil",version,".",message);

return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,value], null);
}
})());

var G__23930 = (i__23920 + (1));
i__23920 = G__23930;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23921),quil$middlewares$deprecated_options$deprecated_options_$_iter__23918.call(null,cljs.core.chunk_rest.call(null,s__23919__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23921),null);
}
} else {
var vec__23928 = cljs.core.first.call(null,s__23919__$2);
var name = cljs.core.nth.call(null,vec__23928,(0),null);
var value = cljs.core.nth.call(null,vec__23928,(1),null);
return cljs.core.cons.call(null,(function (){var temp__4421__auto__ = quil.middlewares.deprecated_options.deprecated.call(null,name);
if(cljs.core.truth_(temp__4421__auto__)){
var vec__23929 = temp__4421__auto__;
var version = cljs.core.nth.call(null,vec__23929,(0),null);
var message = cljs.core.nth.call(null,vec__23929,(1),null);
cljs.core.println.call(null,name,"option was removed in Quil",version,".",message);

return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,value], null);
}
})(),quil$middlewares$deprecated_options$deprecated_options_$_iter__23918.call(null,cljs.core.rest.call(null,s__23919__$2)));
}
} else {
return null;
}
break;
}
});})(options__$1))
,null,null));
});})(options__$1))
;
return iter__16792__auto__.call(null,options__$1);
})()));
});

//# sourceMappingURL=deprecated_options.js.map