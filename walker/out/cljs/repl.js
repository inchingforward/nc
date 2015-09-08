// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4423__auto__)){
var ns = temp__4423__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26908_26920 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26909_26921 = null;
var count__26910_26922 = (0);
var i__26911_26923 = (0);
while(true){
if((i__26911_26923 < count__26910_26922)){
var f_26924 = cljs.core._nth.call(null,chunk__26909_26921,i__26911_26923);
cljs.core.println.call(null,"  ",f_26924);

var G__26925 = seq__26908_26920;
var G__26926 = chunk__26909_26921;
var G__26927 = count__26910_26922;
var G__26928 = (i__26911_26923 + (1));
seq__26908_26920 = G__26925;
chunk__26909_26921 = G__26926;
count__26910_26922 = G__26927;
i__26911_26923 = G__26928;
continue;
} else {
var temp__4423__auto___26929 = cljs.core.seq.call(null,seq__26908_26920);
if(temp__4423__auto___26929){
var seq__26908_26930__$1 = temp__4423__auto___26929;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26908_26930__$1)){
var c__18872__auto___26931 = cljs.core.chunk_first.call(null,seq__26908_26930__$1);
var G__26932 = cljs.core.chunk_rest.call(null,seq__26908_26930__$1);
var G__26933 = c__18872__auto___26931;
var G__26934 = cljs.core.count.call(null,c__18872__auto___26931);
var G__26935 = (0);
seq__26908_26920 = G__26932;
chunk__26909_26921 = G__26933;
count__26910_26922 = G__26934;
i__26911_26923 = G__26935;
continue;
} else {
var f_26936 = cljs.core.first.call(null,seq__26908_26930__$1);
cljs.core.println.call(null,"  ",f_26936);

var G__26937 = cljs.core.next.call(null,seq__26908_26930__$1);
var G__26938 = null;
var G__26939 = (0);
var G__26940 = (0);
seq__26908_26920 = G__26937;
chunk__26909_26921 = G__26938;
count__26910_26922 = G__26939;
i__26911_26923 = G__26940;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26941 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18087__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18087__auto__)){
return or__18087__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26941);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26941)))?cljs.core.second.call(null,arglists_26941):arglists_26941));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26912 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26913 = null;
var count__26914 = (0);
var i__26915 = (0);
while(true){
if((i__26915 < count__26914)){
var vec__26916 = cljs.core._nth.call(null,chunk__26913,i__26915);
var name = cljs.core.nth.call(null,vec__26916,(0),null);
var map__26917 = cljs.core.nth.call(null,vec__26916,(1),null);
var map__26917__$1 = ((cljs.core.seq_QMARK_.call(null,map__26917))?cljs.core.apply.call(null,cljs.core.hash_map,map__26917):map__26917);
var doc = cljs.core.get.call(null,map__26917__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26917__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26942 = seq__26912;
var G__26943 = chunk__26913;
var G__26944 = count__26914;
var G__26945 = (i__26915 + (1));
seq__26912 = G__26942;
chunk__26913 = G__26943;
count__26914 = G__26944;
i__26915 = G__26945;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__26912);
if(temp__4423__auto__){
var seq__26912__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26912__$1)){
var c__18872__auto__ = cljs.core.chunk_first.call(null,seq__26912__$1);
var G__26946 = cljs.core.chunk_rest.call(null,seq__26912__$1);
var G__26947 = c__18872__auto__;
var G__26948 = cljs.core.count.call(null,c__18872__auto__);
var G__26949 = (0);
seq__26912 = G__26946;
chunk__26913 = G__26947;
count__26914 = G__26948;
i__26915 = G__26949;
continue;
} else {
var vec__26918 = cljs.core.first.call(null,seq__26912__$1);
var name = cljs.core.nth.call(null,vec__26918,(0),null);
var map__26919 = cljs.core.nth.call(null,vec__26918,(1),null);
var map__26919__$1 = ((cljs.core.seq_QMARK_.call(null,map__26919))?cljs.core.apply.call(null,cljs.core.hash_map,map__26919):map__26919);
var doc = cljs.core.get.call(null,map__26919__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26919__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26950 = cljs.core.next.call(null,seq__26912__$1);
var G__26951 = null;
var G__26952 = (0);
var G__26953 = (0);
seq__26912 = G__26950;
chunk__26913 = G__26951;
count__26914 = G__26952;
i__26915 = G__26953;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map