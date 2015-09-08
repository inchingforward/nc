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
var seq__25003_25015 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25004_25016 = null;
var count__25005_25017 = (0);
var i__25006_25018 = (0);
while(true){
if((i__25006_25018 < count__25005_25017)){
var f_25019 = cljs.core._nth.call(null,chunk__25004_25016,i__25006_25018);
cljs.core.println.call(null,"  ",f_25019);

var G__25020 = seq__25003_25015;
var G__25021 = chunk__25004_25016;
var G__25022 = count__25005_25017;
var G__25023 = (i__25006_25018 + (1));
seq__25003_25015 = G__25020;
chunk__25004_25016 = G__25021;
count__25005_25017 = G__25022;
i__25006_25018 = G__25023;
continue;
} else {
var temp__4423__auto___25024 = cljs.core.seq.call(null,seq__25003_25015);
if(temp__4423__auto___25024){
var seq__25003_25025__$1 = temp__4423__auto___25024;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25003_25025__$1)){
var c__16823__auto___25026 = cljs.core.chunk_first.call(null,seq__25003_25025__$1);
var G__25027 = cljs.core.chunk_rest.call(null,seq__25003_25025__$1);
var G__25028 = c__16823__auto___25026;
var G__25029 = cljs.core.count.call(null,c__16823__auto___25026);
var G__25030 = (0);
seq__25003_25015 = G__25027;
chunk__25004_25016 = G__25028;
count__25005_25017 = G__25029;
i__25006_25018 = G__25030;
continue;
} else {
var f_25031 = cljs.core.first.call(null,seq__25003_25025__$1);
cljs.core.println.call(null,"  ",f_25031);

var G__25032 = cljs.core.next.call(null,seq__25003_25025__$1);
var G__25033 = null;
var G__25034 = (0);
var G__25035 = (0);
seq__25003_25015 = G__25032;
chunk__25004_25016 = G__25033;
count__25005_25017 = G__25034;
i__25006_25018 = G__25035;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25036 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16038__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16038__auto__)){
return or__16038__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25036);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25036)))?cljs.core.second.call(null,arglists_25036):arglists_25036));
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
var seq__25007 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25008 = null;
var count__25009 = (0);
var i__25010 = (0);
while(true){
if((i__25010 < count__25009)){
var vec__25011 = cljs.core._nth.call(null,chunk__25008,i__25010);
var name = cljs.core.nth.call(null,vec__25011,(0),null);
var map__25012 = cljs.core.nth.call(null,vec__25011,(1),null);
var map__25012__$1 = ((cljs.core.seq_QMARK_.call(null,map__25012))?cljs.core.apply.call(null,cljs.core.hash_map,map__25012):map__25012);
var doc = cljs.core.get.call(null,map__25012__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25012__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25037 = seq__25007;
var G__25038 = chunk__25008;
var G__25039 = count__25009;
var G__25040 = (i__25010 + (1));
seq__25007 = G__25037;
chunk__25008 = G__25038;
count__25009 = G__25039;
i__25010 = G__25040;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__25007);
if(temp__4423__auto__){
var seq__25007__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25007__$1)){
var c__16823__auto__ = cljs.core.chunk_first.call(null,seq__25007__$1);
var G__25041 = cljs.core.chunk_rest.call(null,seq__25007__$1);
var G__25042 = c__16823__auto__;
var G__25043 = cljs.core.count.call(null,c__16823__auto__);
var G__25044 = (0);
seq__25007 = G__25041;
chunk__25008 = G__25042;
count__25009 = G__25043;
i__25010 = G__25044;
continue;
} else {
var vec__25013 = cljs.core.first.call(null,seq__25007__$1);
var name = cljs.core.nth.call(null,vec__25013,(0),null);
var map__25014 = cljs.core.nth.call(null,vec__25013,(1),null);
var map__25014__$1 = ((cljs.core.seq_QMARK_.call(null,map__25014))?cljs.core.apply.call(null,cljs.core.hash_map,map__25014):map__25014);
var doc = cljs.core.get.call(null,map__25014__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25014__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25045 = cljs.core.next.call(null,seq__25007__$1);
var G__25046 = null;
var G__25047 = (0);
var G__25048 = (0);
seq__25007 = G__25045;
chunk__25008 = G__25046;
count__25009 = G__25047;
i__25010 = G__25048;
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