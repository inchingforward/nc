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
var seq__26911_26923 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26912_26924 = null;
var count__26913_26925 = (0);
var i__26914_26926 = (0);
while(true){
if((i__26914_26926 < count__26913_26925)){
var f_26927 = cljs.core._nth.call(null,chunk__26912_26924,i__26914_26926);
cljs.core.println.call(null,"  ",f_26927);

var G__26928 = seq__26911_26923;
var G__26929 = chunk__26912_26924;
var G__26930 = count__26913_26925;
var G__26931 = (i__26914_26926 + (1));
seq__26911_26923 = G__26928;
chunk__26912_26924 = G__26929;
count__26913_26925 = G__26930;
i__26914_26926 = G__26931;
continue;
} else {
var temp__4423__auto___26932 = cljs.core.seq.call(null,seq__26911_26923);
if(temp__4423__auto___26932){
var seq__26911_26933__$1 = temp__4423__auto___26932;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26911_26933__$1)){
var c__18872__auto___26934 = cljs.core.chunk_first.call(null,seq__26911_26933__$1);
var G__26935 = cljs.core.chunk_rest.call(null,seq__26911_26933__$1);
var G__26936 = c__18872__auto___26934;
var G__26937 = cljs.core.count.call(null,c__18872__auto___26934);
var G__26938 = (0);
seq__26911_26923 = G__26935;
chunk__26912_26924 = G__26936;
count__26913_26925 = G__26937;
i__26914_26926 = G__26938;
continue;
} else {
var f_26939 = cljs.core.first.call(null,seq__26911_26933__$1);
cljs.core.println.call(null,"  ",f_26939);

var G__26940 = cljs.core.next.call(null,seq__26911_26933__$1);
var G__26941 = null;
var G__26942 = (0);
var G__26943 = (0);
seq__26911_26923 = G__26940;
chunk__26912_26924 = G__26941;
count__26913_26925 = G__26942;
i__26914_26926 = G__26943;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26944 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18087__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18087__auto__)){
return or__18087__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26944);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26944)))?cljs.core.second.call(null,arglists_26944):arglists_26944));
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
var seq__26915 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26916 = null;
var count__26917 = (0);
var i__26918 = (0);
while(true){
if((i__26918 < count__26917)){
var vec__26919 = cljs.core._nth.call(null,chunk__26916,i__26918);
var name = cljs.core.nth.call(null,vec__26919,(0),null);
var map__26920 = cljs.core.nth.call(null,vec__26919,(1),null);
var map__26920__$1 = ((cljs.core.seq_QMARK_.call(null,map__26920))?cljs.core.apply.call(null,cljs.core.hash_map,map__26920):map__26920);
var doc = cljs.core.get.call(null,map__26920__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26920__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26945 = seq__26915;
var G__26946 = chunk__26916;
var G__26947 = count__26917;
var G__26948 = (i__26918 + (1));
seq__26915 = G__26945;
chunk__26916 = G__26946;
count__26917 = G__26947;
i__26918 = G__26948;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__26915);
if(temp__4423__auto__){
var seq__26915__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26915__$1)){
var c__18872__auto__ = cljs.core.chunk_first.call(null,seq__26915__$1);
var G__26949 = cljs.core.chunk_rest.call(null,seq__26915__$1);
var G__26950 = c__18872__auto__;
var G__26951 = cljs.core.count.call(null,c__18872__auto__);
var G__26952 = (0);
seq__26915 = G__26949;
chunk__26916 = G__26950;
count__26917 = G__26951;
i__26918 = G__26952;
continue;
} else {
var vec__26921 = cljs.core.first.call(null,seq__26915__$1);
var name = cljs.core.nth.call(null,vec__26921,(0),null);
var map__26922 = cljs.core.nth.call(null,vec__26921,(1),null);
var map__26922__$1 = ((cljs.core.seq_QMARK_.call(null,map__26922))?cljs.core.apply.call(null,cljs.core.hash_map,map__26922):map__26922);
var doc = cljs.core.get.call(null,map__26922__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26922__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26953 = cljs.core.next.call(null,seq__26915__$1);
var G__26954 = null;
var G__26955 = (0);
var G__26956 = (0);
seq__26915 = G__26953;
chunk__26916 = G__26954;
count__26917 = G__26955;
i__26918 = G__26956;
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