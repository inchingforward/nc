// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16038__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16038__auto__){
return or__16038__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16038__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16038__auto__)){
return or__16038__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__25053_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__25053_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__25058 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__25059 = null;
var count__25060 = (0);
var i__25061 = (0);
while(true){
if((i__25061 < count__25060)){
var n = cljs.core._nth.call(null,chunk__25059,i__25061);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25062 = seq__25058;
var G__25063 = chunk__25059;
var G__25064 = count__25060;
var G__25065 = (i__25061 + (1));
seq__25058 = G__25062;
chunk__25059 = G__25063;
count__25060 = G__25064;
i__25061 = G__25065;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__25058);
if(temp__4423__auto__){
var seq__25058__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25058__$1)){
var c__16823__auto__ = cljs.core.chunk_first.call(null,seq__25058__$1);
var G__25066 = cljs.core.chunk_rest.call(null,seq__25058__$1);
var G__25067 = c__16823__auto__;
var G__25068 = cljs.core.count.call(null,c__16823__auto__);
var G__25069 = (0);
seq__25058 = G__25066;
chunk__25059 = G__25067;
count__25060 = G__25068;
i__25061 = G__25069;
continue;
} else {
var n = cljs.core.first.call(null,seq__25058__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25070 = cljs.core.next.call(null,seq__25058__$1);
var G__25071 = null;
var G__25072 = (0);
var G__25073 = (0);
seq__25058 = G__25070;
chunk__25059 = G__25071;
count__25060 = G__25072;
i__25061 = G__25073;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__25112_25119 = cljs.core.seq.call(null,deps);
var chunk__25113_25120 = null;
var count__25114_25121 = (0);
var i__25115_25122 = (0);
while(true){
if((i__25115_25122 < count__25114_25121)){
var dep_25123 = cljs.core._nth.call(null,chunk__25113_25120,i__25115_25122);
topo_sort_helper_STAR_.call(null,dep_25123,(depth + (1)),state);

var G__25124 = seq__25112_25119;
var G__25125 = chunk__25113_25120;
var G__25126 = count__25114_25121;
var G__25127 = (i__25115_25122 + (1));
seq__25112_25119 = G__25124;
chunk__25113_25120 = G__25125;
count__25114_25121 = G__25126;
i__25115_25122 = G__25127;
continue;
} else {
var temp__4423__auto___25128 = cljs.core.seq.call(null,seq__25112_25119);
if(temp__4423__auto___25128){
var seq__25112_25129__$1 = temp__4423__auto___25128;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25112_25129__$1)){
var c__16823__auto___25130 = cljs.core.chunk_first.call(null,seq__25112_25129__$1);
var G__25131 = cljs.core.chunk_rest.call(null,seq__25112_25129__$1);
var G__25132 = c__16823__auto___25130;
var G__25133 = cljs.core.count.call(null,c__16823__auto___25130);
var G__25134 = (0);
seq__25112_25119 = G__25131;
chunk__25113_25120 = G__25132;
count__25114_25121 = G__25133;
i__25115_25122 = G__25134;
continue;
} else {
var dep_25135 = cljs.core.first.call(null,seq__25112_25129__$1);
topo_sort_helper_STAR_.call(null,dep_25135,(depth + (1)),state);

var G__25136 = cljs.core.next.call(null,seq__25112_25129__$1);
var G__25137 = null;
var G__25138 = (0);
var G__25139 = (0);
seq__25112_25119 = G__25136;
chunk__25113_25120 = G__25137;
count__25114_25121 = G__25138;
i__25115_25122 = G__25139;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__25116){
var vec__25118 = p__25116;
var x = cljs.core.nth.call(null,vec__25118,(0),null);
var xs = cljs.core.nthnext.call(null,vec__25118,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__25118,x,xs,get_deps__$1){
return (function (p1__25074_SHARP_){
return clojure.set.difference.call(null,p1__25074_SHARP_,x);
});})(vec__25118,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__25152 = cljs.core.seq.call(null,provides);
var chunk__25153 = null;
var count__25154 = (0);
var i__25155 = (0);
while(true){
if((i__25155 < count__25154)){
var prov = cljs.core._nth.call(null,chunk__25153,i__25155);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25156_25164 = cljs.core.seq.call(null,requires);
var chunk__25157_25165 = null;
var count__25158_25166 = (0);
var i__25159_25167 = (0);
while(true){
if((i__25159_25167 < count__25158_25166)){
var req_25168 = cljs.core._nth.call(null,chunk__25157_25165,i__25159_25167);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25168,prov);

var G__25169 = seq__25156_25164;
var G__25170 = chunk__25157_25165;
var G__25171 = count__25158_25166;
var G__25172 = (i__25159_25167 + (1));
seq__25156_25164 = G__25169;
chunk__25157_25165 = G__25170;
count__25158_25166 = G__25171;
i__25159_25167 = G__25172;
continue;
} else {
var temp__4423__auto___25173 = cljs.core.seq.call(null,seq__25156_25164);
if(temp__4423__auto___25173){
var seq__25156_25174__$1 = temp__4423__auto___25173;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25156_25174__$1)){
var c__16823__auto___25175 = cljs.core.chunk_first.call(null,seq__25156_25174__$1);
var G__25176 = cljs.core.chunk_rest.call(null,seq__25156_25174__$1);
var G__25177 = c__16823__auto___25175;
var G__25178 = cljs.core.count.call(null,c__16823__auto___25175);
var G__25179 = (0);
seq__25156_25164 = G__25176;
chunk__25157_25165 = G__25177;
count__25158_25166 = G__25178;
i__25159_25167 = G__25179;
continue;
} else {
var req_25180 = cljs.core.first.call(null,seq__25156_25174__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25180,prov);

var G__25181 = cljs.core.next.call(null,seq__25156_25174__$1);
var G__25182 = null;
var G__25183 = (0);
var G__25184 = (0);
seq__25156_25164 = G__25181;
chunk__25157_25165 = G__25182;
count__25158_25166 = G__25183;
i__25159_25167 = G__25184;
continue;
}
} else {
}
}
break;
}

var G__25185 = seq__25152;
var G__25186 = chunk__25153;
var G__25187 = count__25154;
var G__25188 = (i__25155 + (1));
seq__25152 = G__25185;
chunk__25153 = G__25186;
count__25154 = G__25187;
i__25155 = G__25188;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__25152);
if(temp__4423__auto__){
var seq__25152__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25152__$1)){
var c__16823__auto__ = cljs.core.chunk_first.call(null,seq__25152__$1);
var G__25189 = cljs.core.chunk_rest.call(null,seq__25152__$1);
var G__25190 = c__16823__auto__;
var G__25191 = cljs.core.count.call(null,c__16823__auto__);
var G__25192 = (0);
seq__25152 = G__25189;
chunk__25153 = G__25190;
count__25154 = G__25191;
i__25155 = G__25192;
continue;
} else {
var prov = cljs.core.first.call(null,seq__25152__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25160_25193 = cljs.core.seq.call(null,requires);
var chunk__25161_25194 = null;
var count__25162_25195 = (0);
var i__25163_25196 = (0);
while(true){
if((i__25163_25196 < count__25162_25195)){
var req_25197 = cljs.core._nth.call(null,chunk__25161_25194,i__25163_25196);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25197,prov);

var G__25198 = seq__25160_25193;
var G__25199 = chunk__25161_25194;
var G__25200 = count__25162_25195;
var G__25201 = (i__25163_25196 + (1));
seq__25160_25193 = G__25198;
chunk__25161_25194 = G__25199;
count__25162_25195 = G__25200;
i__25163_25196 = G__25201;
continue;
} else {
var temp__4423__auto___25202__$1 = cljs.core.seq.call(null,seq__25160_25193);
if(temp__4423__auto___25202__$1){
var seq__25160_25203__$1 = temp__4423__auto___25202__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25160_25203__$1)){
var c__16823__auto___25204 = cljs.core.chunk_first.call(null,seq__25160_25203__$1);
var G__25205 = cljs.core.chunk_rest.call(null,seq__25160_25203__$1);
var G__25206 = c__16823__auto___25204;
var G__25207 = cljs.core.count.call(null,c__16823__auto___25204);
var G__25208 = (0);
seq__25160_25193 = G__25205;
chunk__25161_25194 = G__25206;
count__25162_25195 = G__25207;
i__25163_25196 = G__25208;
continue;
} else {
var req_25209 = cljs.core.first.call(null,seq__25160_25203__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25209,prov);

var G__25210 = cljs.core.next.call(null,seq__25160_25203__$1);
var G__25211 = null;
var G__25212 = (0);
var G__25213 = (0);
seq__25160_25193 = G__25210;
chunk__25161_25194 = G__25211;
count__25162_25195 = G__25212;
i__25163_25196 = G__25213;
continue;
}
} else {
}
}
break;
}

var G__25214 = cljs.core.next.call(null,seq__25152__$1);
var G__25215 = null;
var G__25216 = (0);
var G__25217 = (0);
seq__25152 = G__25214;
chunk__25153 = G__25215;
count__25154 = G__25216;
i__25155 = G__25217;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__25222_25226 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25223_25227 = null;
var count__25224_25228 = (0);
var i__25225_25229 = (0);
while(true){
if((i__25225_25229 < count__25224_25228)){
var ns_25230 = cljs.core._nth.call(null,chunk__25223_25227,i__25225_25229);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25230);

var G__25231 = seq__25222_25226;
var G__25232 = chunk__25223_25227;
var G__25233 = count__25224_25228;
var G__25234 = (i__25225_25229 + (1));
seq__25222_25226 = G__25231;
chunk__25223_25227 = G__25232;
count__25224_25228 = G__25233;
i__25225_25229 = G__25234;
continue;
} else {
var temp__4423__auto___25235 = cljs.core.seq.call(null,seq__25222_25226);
if(temp__4423__auto___25235){
var seq__25222_25236__$1 = temp__4423__auto___25235;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25222_25236__$1)){
var c__16823__auto___25237 = cljs.core.chunk_first.call(null,seq__25222_25236__$1);
var G__25238 = cljs.core.chunk_rest.call(null,seq__25222_25236__$1);
var G__25239 = c__16823__auto___25237;
var G__25240 = cljs.core.count.call(null,c__16823__auto___25237);
var G__25241 = (0);
seq__25222_25226 = G__25238;
chunk__25223_25227 = G__25239;
count__25224_25228 = G__25240;
i__25225_25229 = G__25241;
continue;
} else {
var ns_25242 = cljs.core.first.call(null,seq__25222_25236__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25242);

var G__25243 = cljs.core.next.call(null,seq__25222_25236__$1);
var G__25244 = null;
var G__25245 = (0);
var G__25246 = (0);
seq__25222_25226 = G__25243;
chunk__25223_25227 = G__25244;
count__25224_25228 = G__25245;
i__25225_25229 = G__25246;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 * in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16038__auto__ = goog.require__;
if(cljs.core.truth_(or__16038__auto__)){
return or__16038__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__25247__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25247 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25248__i = 0, G__25248__a = new Array(arguments.length -  0);
while (G__25248__i < G__25248__a.length) {G__25248__a[G__25248__i] = arguments[G__25248__i + 0]; ++G__25248__i;}
  args = new cljs.core.IndexedSeq(G__25248__a,0);
} 
return G__25247__delegate.call(this,args);};
G__25247.cljs$lang$maxFixedArity = 0;
G__25247.cljs$lang$applyTo = (function (arglist__25249){
var args = cljs.core.seq(arglist__25249);
return G__25247__delegate(args);
});
G__25247.cljs$core$IFn$_invoke$arity$variadic = G__25247__delegate;
return G__25247;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25250 = cljs.core._EQ_;
var expr__25251 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25250.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25251))){
return ((function (pred__25250,expr__25251){
return (function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e25253){if((e25253 instanceof Error)){
var e = e25253;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25253;

}
}})());
});
;})(pred__25250,expr__25251))
} else {
if(cljs.core.truth_(pred__25250.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25251))){
return ((function (pred__25250,expr__25251){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__25250,expr__25251){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__25250,expr__25251))
);

return deferred.addErrback(((function (deferred,pred__25250,expr__25251){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__25250,expr__25251))
);
});
;})(pred__25250,expr__25251))
} else {
return ((function (pred__25250,expr__25251){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25250,expr__25251))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25254,callback){
var map__25256 = p__25254;
var map__25256__$1 = ((cljs.core.seq_QMARK_.call(null,map__25256))?cljs.core.apply.call(null,cljs.core.hash_map,map__25256):map__25256);
var file_msg = map__25256__$1;
var request_url = cljs.core.get.call(null,map__25256__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25256,map__25256__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25256,map__25256__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19048__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19048__auto__){
return (function (){
var f__19049__auto__ = (function (){var switch__18986__auto__ = ((function (c__19048__auto__){
return (function (state_25279){
var state_val_25280 = (state_25279[(1)]);
if((state_val_25280 === (7))){
var inst_25275 = (state_25279[(2)]);
var state_25279__$1 = state_25279;
var statearr_25281_25301 = state_25279__$1;
(statearr_25281_25301[(2)] = inst_25275);

(statearr_25281_25301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25280 === (1))){
var state_25279__$1 = state_25279;
var statearr_25282_25302 = state_25279__$1;
(statearr_25282_25302[(2)] = null);

(statearr_25282_25302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25280 === (4))){
var inst_25259 = (state_25279[(7)]);
var inst_25259__$1 = (state_25279[(2)]);
var state_25279__$1 = (function (){var statearr_25283 = state_25279;
(statearr_25283[(7)] = inst_25259__$1);

return statearr_25283;
})();
if(cljs.core.truth_(inst_25259__$1)){
var statearr_25284_25303 = state_25279__$1;
(statearr_25284_25303[(1)] = (5));

} else {
var statearr_25285_25304 = state_25279__$1;
(statearr_25285_25304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25280 === (6))){
var state_25279__$1 = state_25279;
var statearr_25286_25305 = state_25279__$1;
(statearr_25286_25305[(2)] = null);

(statearr_25286_25305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25280 === (3))){
var inst_25277 = (state_25279[(2)]);
var state_25279__$1 = state_25279;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25279__$1,inst_25277);
} else {
if((state_val_25280 === (2))){
var state_25279__$1 = state_25279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25279__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25280 === (11))){
var inst_25271 = (state_25279[(2)]);
var state_25279__$1 = (function (){var statearr_25287 = state_25279;
(statearr_25287[(8)] = inst_25271);

return statearr_25287;
})();
var statearr_25288_25306 = state_25279__$1;
(statearr_25288_25306[(2)] = null);

(statearr_25288_25306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25280 === (9))){
var inst_25265 = (state_25279[(9)]);
var inst_25263 = (state_25279[(10)]);
var inst_25267 = inst_25265.call(null,inst_25263);
var state_25279__$1 = state_25279;
var statearr_25289_25307 = state_25279__$1;
(statearr_25289_25307[(2)] = inst_25267);

(statearr_25289_25307[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25280 === (5))){
var inst_25259 = (state_25279[(7)]);
var inst_25261 = figwheel.client.file_reloading.blocking_load.call(null,inst_25259);
var state_25279__$1 = state_25279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25279__$1,(8),inst_25261);
} else {
if((state_val_25280 === (10))){
var inst_25263 = (state_25279[(10)]);
var inst_25269 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25263);
var state_25279__$1 = state_25279;
var statearr_25290_25308 = state_25279__$1;
(statearr_25290_25308[(2)] = inst_25269);

(statearr_25290_25308[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25280 === (8))){
var inst_25259 = (state_25279[(7)]);
var inst_25265 = (state_25279[(9)]);
var inst_25263 = (state_25279[(2)]);
var inst_25264 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25265__$1 = cljs.core.get.call(null,inst_25264,inst_25259);
var state_25279__$1 = (function (){var statearr_25291 = state_25279;
(statearr_25291[(9)] = inst_25265__$1);

(statearr_25291[(10)] = inst_25263);

return statearr_25291;
})();
if(cljs.core.truth_(inst_25265__$1)){
var statearr_25292_25309 = state_25279__$1;
(statearr_25292_25309[(1)] = (9));

} else {
var statearr_25293_25310 = state_25279__$1;
(statearr_25293_25310[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19048__auto__))
;
return ((function (switch__18986__auto__,c__19048__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__18987__auto__ = null;
var figwheel$client$file_reloading$state_machine__18987__auto____0 = (function (){
var statearr_25297 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25297[(0)] = figwheel$client$file_reloading$state_machine__18987__auto__);

(statearr_25297[(1)] = (1));

return statearr_25297;
});
var figwheel$client$file_reloading$state_machine__18987__auto____1 = (function (state_25279){
while(true){
var ret_value__18988__auto__ = (function (){try{while(true){
var result__18989__auto__ = switch__18986__auto__.call(null,state_25279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18989__auto__;
}
break;
}
}catch (e25298){if((e25298 instanceof Object)){
var ex__18990__auto__ = e25298;
var statearr_25299_25311 = state_25279;
(statearr_25299_25311[(5)] = ex__18990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25312 = state_25279;
state_25279 = G__25312;
continue;
} else {
return ret_value__18988__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__18987__auto__ = function(state_25279){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__18987__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__18987__auto____1.call(this,state_25279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__18987__auto____0;
figwheel$client$file_reloading$state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__18987__auto____1;
return figwheel$client$file_reloading$state_machine__18987__auto__;
})()
;})(switch__18986__auto__,c__19048__auto__))
})();
var state__19050__auto__ = (function (){var statearr_25300 = f__19049__auto__.call(null);
(statearr_25300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19048__auto__);

return statearr_25300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19050__auto__);
});})(c__19048__auto__))
);

return c__19048__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25313,callback){
var map__25315 = p__25313;
var map__25315__$1 = ((cljs.core.seq_QMARK_.call(null,map__25315))?cljs.core.apply.call(null,cljs.core.hash_map,map__25315):map__25315);
var file_msg = map__25315__$1;
var namespace = cljs.core.get.call(null,map__25315__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25315,map__25315__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25315,map__25315__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25316){
var map__25318 = p__25316;
var map__25318__$1 = ((cljs.core.seq_QMARK_.call(null,map__25318))?cljs.core.apply.call(null,cljs.core.hash_map,map__25318):map__25318);
var file_msg = map__25318__$1;
var namespace = cljs.core.get.call(null,map__25318__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16026__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16026__auto__){
var or__16038__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16038__auto__)){
return or__16038__auto__;
} else {
var or__16038__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16038__auto____$1)){
return or__16038__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16026__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25319,callback){
var map__25321 = p__25319;
var map__25321__$1 = ((cljs.core.seq_QMARK_.call(null,map__25321))?cljs.core.apply.call(null,cljs.core.hash_map,map__25321):map__25321);
var file_msg = map__25321__$1;
var request_url = cljs.core.get.call(null,map__25321__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25321__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19048__auto___25408 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19048__auto___25408,out){
return (function (){
var f__19049__auto__ = (function (){var switch__18986__auto__ = ((function (c__19048__auto___25408,out){
return (function (state_25390){
var state_val_25391 = (state_25390[(1)]);
if((state_val_25391 === (1))){
var inst_25368 = cljs.core.nth.call(null,files,(0),null);
var inst_25369 = cljs.core.nthnext.call(null,files,(1));
var inst_25370 = files;
var state_25390__$1 = (function (){var statearr_25392 = state_25390;
(statearr_25392[(7)] = inst_25370);

(statearr_25392[(8)] = inst_25369);

(statearr_25392[(9)] = inst_25368);

return statearr_25392;
})();
var statearr_25393_25409 = state_25390__$1;
(statearr_25393_25409[(2)] = null);

(statearr_25393_25409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25391 === (2))){
var inst_25370 = (state_25390[(7)]);
var inst_25373 = (state_25390[(10)]);
var inst_25373__$1 = cljs.core.nth.call(null,inst_25370,(0),null);
var inst_25374 = cljs.core.nthnext.call(null,inst_25370,(1));
var inst_25375 = (inst_25373__$1 == null);
var inst_25376 = cljs.core.not.call(null,inst_25375);
var state_25390__$1 = (function (){var statearr_25394 = state_25390;
(statearr_25394[(11)] = inst_25374);

(statearr_25394[(10)] = inst_25373__$1);

return statearr_25394;
})();
if(inst_25376){
var statearr_25395_25410 = state_25390__$1;
(statearr_25395_25410[(1)] = (4));

} else {
var statearr_25396_25411 = state_25390__$1;
(statearr_25396_25411[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25391 === (3))){
var inst_25388 = (state_25390[(2)]);
var state_25390__$1 = state_25390;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25390__$1,inst_25388);
} else {
if((state_val_25391 === (4))){
var inst_25373 = (state_25390[(10)]);
var inst_25378 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25373);
var state_25390__$1 = state_25390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25390__$1,(7),inst_25378);
} else {
if((state_val_25391 === (5))){
var inst_25384 = cljs.core.async.close_BANG_.call(null,out);
var state_25390__$1 = state_25390;
var statearr_25397_25412 = state_25390__$1;
(statearr_25397_25412[(2)] = inst_25384);

(statearr_25397_25412[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25391 === (6))){
var inst_25386 = (state_25390[(2)]);
var state_25390__$1 = state_25390;
var statearr_25398_25413 = state_25390__$1;
(statearr_25398_25413[(2)] = inst_25386);

(statearr_25398_25413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25391 === (7))){
var inst_25374 = (state_25390[(11)]);
var inst_25380 = (state_25390[(2)]);
var inst_25381 = cljs.core.async.put_BANG_.call(null,out,inst_25380);
var inst_25370 = inst_25374;
var state_25390__$1 = (function (){var statearr_25399 = state_25390;
(statearr_25399[(7)] = inst_25370);

(statearr_25399[(12)] = inst_25381);

return statearr_25399;
})();
var statearr_25400_25414 = state_25390__$1;
(statearr_25400_25414[(2)] = null);

(statearr_25400_25414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__19048__auto___25408,out))
;
return ((function (switch__18986__auto__,c__19048__auto___25408,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18987__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18987__auto____0 = (function (){
var statearr_25404 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25404[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18987__auto__);

(statearr_25404[(1)] = (1));

return statearr_25404;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18987__auto____1 = (function (state_25390){
while(true){
var ret_value__18988__auto__ = (function (){try{while(true){
var result__18989__auto__ = switch__18986__auto__.call(null,state_25390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18989__auto__;
}
break;
}
}catch (e25405){if((e25405 instanceof Object)){
var ex__18990__auto__ = e25405;
var statearr_25406_25415 = state_25390;
(statearr_25406_25415[(5)] = ex__18990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25416 = state_25390;
state_25390 = G__25416;
continue;
} else {
return ret_value__18988__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18987__auto__ = function(state_25390){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18987__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18987__auto____1.call(this,state_25390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18987__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18987__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18987__auto__;
})()
;})(switch__18986__auto__,c__19048__auto___25408,out))
})();
var state__19050__auto__ = (function (){var statearr_25407 = f__19049__auto__.call(null);
(statearr_25407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19048__auto___25408);

return statearr_25407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19050__auto__);
});})(c__19048__auto___25408,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25417,opts){
var map__25420 = p__25417;
var map__25420__$1 = ((cljs.core.seq_QMARK_.call(null,map__25420))?cljs.core.apply.call(null,cljs.core.hash_map,map__25420):map__25420);
var eval_body__$1 = cljs.core.get.call(null,map__25420__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25420__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16026__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16026__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16026__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e25421){var e = e25421;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4421__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__25422_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25422_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4421__auto__)){
var file_msg = temp__4421__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__25427){
var vec__25428 = p__25427;
var k = cljs.core.nth.call(null,vec__25428,(0),null);
var v = cljs.core.nth.call(null,vec__25428,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25429){
var vec__25430 = p__25429;
var k = cljs.core.nth.call(null,vec__25430,(0),null);
var v = cljs.core.nth.call(null,vec__25430,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25434,p__25435){
var map__25655 = p__25434;
var map__25655__$1 = ((cljs.core.seq_QMARK_.call(null,map__25655))?cljs.core.apply.call(null,cljs.core.hash_map,map__25655):map__25655);
var opts = map__25655__$1;
var before_jsload = cljs.core.get.call(null,map__25655__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25655__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25655__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25656 = p__25435;
var map__25656__$1 = ((cljs.core.seq_QMARK_.call(null,map__25656))?cljs.core.apply.call(null,cljs.core.hash_map,map__25656):map__25656);
var msg = map__25656__$1;
var files = cljs.core.get.call(null,map__25656__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25656__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25656__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19048__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19048__auto__,map__25655,map__25655__$1,opts,before_jsload,on_jsload,reload_dependents,map__25656,map__25656__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19049__auto__ = (function (){var switch__18986__auto__ = ((function (c__19048__auto__,map__25655,map__25655__$1,opts,before_jsload,on_jsload,reload_dependents,map__25656,map__25656__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25793){
var state_val_25794 = (state_25793[(1)]);
if((state_val_25794 === (7))){
var inst_25668 = (state_25793[(7)]);
var inst_25669 = (state_25793[(8)]);
var inst_25671 = (state_25793[(9)]);
var inst_25670 = (state_25793[(10)]);
var inst_25676 = cljs.core._nth.call(null,inst_25669,inst_25671);
var inst_25677 = figwheel.client.file_reloading.eval_body.call(null,inst_25676,opts);
var inst_25678 = (inst_25671 + (1));
var tmp25795 = inst_25668;
var tmp25796 = inst_25669;
var tmp25797 = inst_25670;
var inst_25668__$1 = tmp25795;
var inst_25669__$1 = tmp25796;
var inst_25670__$1 = tmp25797;
var inst_25671__$1 = inst_25678;
var state_25793__$1 = (function (){var statearr_25798 = state_25793;
(statearr_25798[(11)] = inst_25677);

(statearr_25798[(7)] = inst_25668__$1);

(statearr_25798[(8)] = inst_25669__$1);

(statearr_25798[(9)] = inst_25671__$1);

(statearr_25798[(10)] = inst_25670__$1);

return statearr_25798;
})();
var statearr_25799_25874 = state_25793__$1;
(statearr_25799_25874[(2)] = null);

(statearr_25799_25874[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (20))){
var inst_25711 = (state_25793[(12)]);
var inst_25719 = figwheel.client.file_reloading.sort_files.call(null,inst_25711);
var state_25793__$1 = state_25793;
var statearr_25800_25875 = state_25793__$1;
(statearr_25800_25875[(2)] = inst_25719);

(statearr_25800_25875[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (27))){
var state_25793__$1 = state_25793;
var statearr_25801_25876 = state_25793__$1;
(statearr_25801_25876[(2)] = null);

(statearr_25801_25876[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (1))){
var inst_25660 = (state_25793[(13)]);
var inst_25657 = before_jsload.call(null,files);
var inst_25658 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25659 = (function (){return ((function (inst_25660,inst_25657,inst_25658,state_val_25794,c__19048__auto__,map__25655,map__25655__$1,opts,before_jsload,on_jsload,reload_dependents,map__25656,map__25656__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25431_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25431_SHARP_);
});
;})(inst_25660,inst_25657,inst_25658,state_val_25794,c__19048__auto__,map__25655,map__25655__$1,opts,before_jsload,on_jsload,reload_dependents,map__25656,map__25656__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25660__$1 = cljs.core.filter.call(null,inst_25659,files);
var inst_25661 = cljs.core.not_empty.call(null,inst_25660__$1);
var state_25793__$1 = (function (){var statearr_25802 = state_25793;
(statearr_25802[(14)] = inst_25658);

(statearr_25802[(13)] = inst_25660__$1);

(statearr_25802[(15)] = inst_25657);

return statearr_25802;
})();
if(cljs.core.truth_(inst_25661)){
var statearr_25803_25877 = state_25793__$1;
(statearr_25803_25877[(1)] = (2));

} else {
var statearr_25804_25878 = state_25793__$1;
(statearr_25804_25878[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (24))){
var state_25793__$1 = state_25793;
var statearr_25805_25879 = state_25793__$1;
(statearr_25805_25879[(2)] = null);

(statearr_25805_25879[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (39))){
var state_25793__$1 = state_25793;
var statearr_25806_25880 = state_25793__$1;
(statearr_25806_25880[(2)] = null);

(statearr_25806_25880[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (4))){
var inst_25705 = (state_25793[(2)]);
var inst_25706 = cljs.core.List.EMPTY;
var inst_25707 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25706);
var inst_25708 = (function (){return ((function (inst_25705,inst_25706,inst_25707,state_val_25794,c__19048__auto__,map__25655,map__25655__$1,opts,before_jsload,on_jsload,reload_dependents,map__25656,map__25656__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25432_SHARP_){
var and__16026__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25432_SHARP_);
if(cljs.core.truth_(and__16026__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25432_SHARP_));
} else {
return and__16026__auto__;
}
});
;})(inst_25705,inst_25706,inst_25707,state_val_25794,c__19048__auto__,map__25655,map__25655__$1,opts,before_jsload,on_jsload,reload_dependents,map__25656,map__25656__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25709 = cljs.core.filter.call(null,inst_25708,files);
var inst_25710 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25711 = cljs.core.concat.call(null,inst_25709,inst_25710);
var state_25793__$1 = (function (){var statearr_25807 = state_25793;
(statearr_25807[(16)] = inst_25705);

(statearr_25807[(12)] = inst_25711);

(statearr_25807[(17)] = inst_25707);

return statearr_25807;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25808_25881 = state_25793__$1;
(statearr_25808_25881[(1)] = (16));

} else {
var statearr_25809_25882 = state_25793__$1;
(statearr_25809_25882[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (15))){
var inst_25695 = (state_25793[(2)]);
var state_25793__$1 = state_25793;
var statearr_25810_25883 = state_25793__$1;
(statearr_25810_25883[(2)] = inst_25695);

(statearr_25810_25883[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (21))){
var inst_25721 = (state_25793[(18)]);
var inst_25721__$1 = (state_25793[(2)]);
var inst_25722 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25721__$1);
var state_25793__$1 = (function (){var statearr_25811 = state_25793;
(statearr_25811[(18)] = inst_25721__$1);

return statearr_25811;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25793__$1,(22),inst_25722);
} else {
if((state_val_25794 === (31))){
var inst_25791 = (state_25793[(2)]);
var state_25793__$1 = state_25793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25793__$1,inst_25791);
} else {
if((state_val_25794 === (32))){
var inst_25761 = (state_25793[(19)]);
var inst_25764 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25761);
var state_25793__$1 = state_25793;
var statearr_25812_25884 = state_25793__$1;
(statearr_25812_25884[(2)] = inst_25764);

(statearr_25812_25884[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (40))){
var inst_25788 = (state_25793[(2)]);
var state_25793__$1 = state_25793;
var statearr_25813_25885 = state_25793__$1;
(statearr_25813_25885[(2)] = inst_25788);

(statearr_25813_25885[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (33))){
var inst_25761 = (state_25793[(19)]);
var state_25793__$1 = state_25793;
var statearr_25814_25886 = state_25793__$1;
(statearr_25814_25886[(2)] = inst_25761);

(statearr_25814_25886[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (13))){
var inst_25681 = (state_25793[(20)]);
var inst_25685 = cljs.core.chunk_first.call(null,inst_25681);
var inst_25686 = cljs.core.chunk_rest.call(null,inst_25681);
var inst_25687 = cljs.core.count.call(null,inst_25685);
var inst_25668 = inst_25686;
var inst_25669 = inst_25685;
var inst_25670 = inst_25687;
var inst_25671 = (0);
var state_25793__$1 = (function (){var statearr_25815 = state_25793;
(statearr_25815[(7)] = inst_25668);

(statearr_25815[(8)] = inst_25669);

(statearr_25815[(9)] = inst_25671);

(statearr_25815[(10)] = inst_25670);

return statearr_25815;
})();
var statearr_25816_25887 = state_25793__$1;
(statearr_25816_25887[(2)] = null);

(statearr_25816_25887[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (22))){
var inst_25724 = (state_25793[(21)]);
var inst_25725 = (state_25793[(22)]);
var inst_25721 = (state_25793[(18)]);
var inst_25729 = (state_25793[(23)]);
var inst_25724__$1 = (state_25793[(2)]);
var inst_25725__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25724__$1);
var inst_25726 = (function (){var all_files = inst_25721;
var res_SINGLEQUOTE_ = inst_25724__$1;
var res = inst_25725__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25724,inst_25725,inst_25721,inst_25729,inst_25724__$1,inst_25725__$1,state_val_25794,c__19048__auto__,map__25655,map__25655__$1,opts,before_jsload,on_jsload,reload_dependents,map__25656,map__25656__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25433_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25433_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25724,inst_25725,inst_25721,inst_25729,inst_25724__$1,inst_25725__$1,state_val_25794,c__19048__auto__,map__25655,map__25655__$1,opts,before_jsload,on_jsload,reload_dependents,map__25656,map__25656__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25727 = cljs.core.filter.call(null,inst_25726,inst_25724__$1);
var inst_25728 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25729__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25728);
var inst_25730 = cljs.core.not_empty.call(null,inst_25729__$1);
var state_25793__$1 = (function (){var statearr_25817 = state_25793;
(statearr_25817[(21)] = inst_25724__$1);

(statearr_25817[(22)] = inst_25725__$1);

(statearr_25817[(24)] = inst_25727);

(statearr_25817[(23)] = inst_25729__$1);

return statearr_25817;
})();
if(cljs.core.truth_(inst_25730)){
var statearr_25818_25888 = state_25793__$1;
(statearr_25818_25888[(1)] = (23));

} else {
var statearr_25819_25889 = state_25793__$1;
(statearr_25819_25889[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (36))){
var state_25793__$1 = state_25793;
var statearr_25820_25890 = state_25793__$1;
(statearr_25820_25890[(2)] = null);

(statearr_25820_25890[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (29))){
var inst_25724 = (state_25793[(21)]);
var inst_25761 = (state_25793[(19)]);
var inst_25725 = (state_25793[(22)]);
var inst_25721 = (state_25793[(18)]);
var inst_25727 = (state_25793[(24)]);
var inst_25729 = (state_25793[(23)]);
var inst_25757 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25760 = (function (){var all_files = inst_25721;
var res_SINGLEQUOTE_ = inst_25724;
var res = inst_25725;
var files_not_loaded = inst_25727;
var dependencies_that_loaded = inst_25729;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25724,inst_25761,inst_25725,inst_25721,inst_25727,inst_25729,inst_25757,state_val_25794,c__19048__auto__,map__25655,map__25655__$1,opts,before_jsload,on_jsload,reload_dependents,map__25656,map__25656__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25759){
var map__25821 = p__25759;
var map__25821__$1 = ((cljs.core.seq_QMARK_.call(null,map__25821))?cljs.core.apply.call(null,cljs.core.hash_map,map__25821):map__25821);
var namespace = cljs.core.get.call(null,map__25821__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25724,inst_25761,inst_25725,inst_25721,inst_25727,inst_25729,inst_25757,state_val_25794,c__19048__auto__,map__25655,map__25655__$1,opts,before_jsload,on_jsload,reload_dependents,map__25656,map__25656__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25761__$1 = cljs.core.group_by.call(null,inst_25760,inst_25727);
var inst_25762 = cljs.core.seq_QMARK_.call(null,inst_25761__$1);
var state_25793__$1 = (function (){var statearr_25822 = state_25793;
(statearr_25822[(19)] = inst_25761__$1);

(statearr_25822[(25)] = inst_25757);

return statearr_25822;
})();
if(inst_25762){
var statearr_25823_25891 = state_25793__$1;
(statearr_25823_25891[(1)] = (32));

} else {
var statearr_25824_25892 = state_25793__$1;
(statearr_25824_25892[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (6))){
var inst_25702 = (state_25793[(2)]);
var state_25793__$1 = state_25793;
var statearr_25825_25893 = state_25793__$1;
(statearr_25825_25893[(2)] = inst_25702);

(statearr_25825_25893[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (28))){
var inst_25727 = (state_25793[(24)]);
var inst_25754 = (state_25793[(2)]);
var inst_25755 = cljs.core.not_empty.call(null,inst_25727);
var state_25793__$1 = (function (){var statearr_25826 = state_25793;
(statearr_25826[(26)] = inst_25754);

return statearr_25826;
})();
if(cljs.core.truth_(inst_25755)){
var statearr_25827_25894 = state_25793__$1;
(statearr_25827_25894[(1)] = (29));

} else {
var statearr_25828_25895 = state_25793__$1;
(statearr_25828_25895[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (25))){
var inst_25725 = (state_25793[(22)]);
var inst_25741 = (state_25793[(2)]);
var inst_25742 = cljs.core.not_empty.call(null,inst_25725);
var state_25793__$1 = (function (){var statearr_25829 = state_25793;
(statearr_25829[(27)] = inst_25741);

return statearr_25829;
})();
if(cljs.core.truth_(inst_25742)){
var statearr_25830_25896 = state_25793__$1;
(statearr_25830_25896[(1)] = (26));

} else {
var statearr_25831_25897 = state_25793__$1;
(statearr_25831_25897[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (34))){
var inst_25768 = (state_25793[(28)]);
var inst_25767 = (state_25793[(2)]);
var inst_25768__$1 = cljs.core.get.call(null,inst_25767,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25769 = cljs.core.get.call(null,inst_25767,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25770 = cljs.core.not_empty.call(null,inst_25768__$1);
var state_25793__$1 = (function (){var statearr_25832 = state_25793;
(statearr_25832[(29)] = inst_25769);

(statearr_25832[(28)] = inst_25768__$1);

return statearr_25832;
})();
if(cljs.core.truth_(inst_25770)){
var statearr_25833_25898 = state_25793__$1;
(statearr_25833_25898[(1)] = (35));

} else {
var statearr_25834_25899 = state_25793__$1;
(statearr_25834_25899[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (17))){
var state_25793__$1 = state_25793;
var statearr_25835_25900 = state_25793__$1;
(statearr_25835_25900[(2)] = recompile_dependents);

(statearr_25835_25900[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (3))){
var state_25793__$1 = state_25793;
var statearr_25836_25901 = state_25793__$1;
(statearr_25836_25901[(2)] = null);

(statearr_25836_25901[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (12))){
var inst_25698 = (state_25793[(2)]);
var state_25793__$1 = state_25793;
var statearr_25837_25902 = state_25793__$1;
(statearr_25837_25902[(2)] = inst_25698);

(statearr_25837_25902[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (2))){
var inst_25660 = (state_25793[(13)]);
var inst_25667 = cljs.core.seq.call(null,inst_25660);
var inst_25668 = inst_25667;
var inst_25669 = null;
var inst_25670 = (0);
var inst_25671 = (0);
var state_25793__$1 = (function (){var statearr_25838 = state_25793;
(statearr_25838[(7)] = inst_25668);

(statearr_25838[(8)] = inst_25669);

(statearr_25838[(9)] = inst_25671);

(statearr_25838[(10)] = inst_25670);

return statearr_25838;
})();
var statearr_25839_25903 = state_25793__$1;
(statearr_25839_25903[(2)] = null);

(statearr_25839_25903[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (23))){
var inst_25724 = (state_25793[(21)]);
var inst_25725 = (state_25793[(22)]);
var inst_25721 = (state_25793[(18)]);
var inst_25727 = (state_25793[(24)]);
var inst_25729 = (state_25793[(23)]);
var inst_25732 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25734 = (function (){var all_files = inst_25721;
var res_SINGLEQUOTE_ = inst_25724;
var res = inst_25725;
var files_not_loaded = inst_25727;
var dependencies_that_loaded = inst_25729;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25724,inst_25725,inst_25721,inst_25727,inst_25729,inst_25732,state_val_25794,c__19048__auto__,map__25655,map__25655__$1,opts,before_jsload,on_jsload,reload_dependents,map__25656,map__25656__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25733){
var map__25840 = p__25733;
var map__25840__$1 = ((cljs.core.seq_QMARK_.call(null,map__25840))?cljs.core.apply.call(null,cljs.core.hash_map,map__25840):map__25840);
var request_url = cljs.core.get.call(null,map__25840__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25724,inst_25725,inst_25721,inst_25727,inst_25729,inst_25732,state_val_25794,c__19048__auto__,map__25655,map__25655__$1,opts,before_jsload,on_jsload,reload_dependents,map__25656,map__25656__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25735 = cljs.core.reverse.call(null,inst_25729);
var inst_25736 = cljs.core.map.call(null,inst_25734,inst_25735);
var inst_25737 = cljs.core.pr_str.call(null,inst_25736);
var inst_25738 = figwheel.client.utils.log.call(null,inst_25737);
var state_25793__$1 = (function (){var statearr_25841 = state_25793;
(statearr_25841[(30)] = inst_25732);

return statearr_25841;
})();
var statearr_25842_25904 = state_25793__$1;
(statearr_25842_25904[(2)] = inst_25738);

(statearr_25842_25904[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (35))){
var inst_25768 = (state_25793[(28)]);
var inst_25772 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25773 = cljs.core.map.call(null,inst_25772,inst_25768);
var inst_25774 = cljs.core.pr_str.call(null,inst_25773);
var inst_25775 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_25774)].join('');
var inst_25776 = figwheel.client.utils.log.call(null,inst_25775);
var state_25793__$1 = state_25793;
var statearr_25843_25905 = state_25793__$1;
(statearr_25843_25905[(2)] = inst_25776);

(statearr_25843_25905[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (19))){
var inst_25711 = (state_25793[(12)]);
var inst_25717 = figwheel.client.file_reloading.expand_files.call(null,inst_25711);
var state_25793__$1 = state_25793;
var statearr_25844_25906 = state_25793__$1;
(statearr_25844_25906[(2)] = inst_25717);

(statearr_25844_25906[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (11))){
var state_25793__$1 = state_25793;
var statearr_25845_25907 = state_25793__$1;
(statearr_25845_25907[(2)] = null);

(statearr_25845_25907[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (9))){
var inst_25700 = (state_25793[(2)]);
var state_25793__$1 = state_25793;
var statearr_25846_25908 = state_25793__$1;
(statearr_25846_25908[(2)] = inst_25700);

(statearr_25846_25908[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (5))){
var inst_25671 = (state_25793[(9)]);
var inst_25670 = (state_25793[(10)]);
var inst_25673 = (inst_25671 < inst_25670);
var inst_25674 = inst_25673;
var state_25793__$1 = state_25793;
if(cljs.core.truth_(inst_25674)){
var statearr_25847_25909 = state_25793__$1;
(statearr_25847_25909[(1)] = (7));

} else {
var statearr_25848_25910 = state_25793__$1;
(statearr_25848_25910[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (14))){
var inst_25681 = (state_25793[(20)]);
var inst_25690 = cljs.core.first.call(null,inst_25681);
var inst_25691 = figwheel.client.file_reloading.eval_body.call(null,inst_25690,opts);
var inst_25692 = cljs.core.next.call(null,inst_25681);
var inst_25668 = inst_25692;
var inst_25669 = null;
var inst_25670 = (0);
var inst_25671 = (0);
var state_25793__$1 = (function (){var statearr_25849 = state_25793;
(statearr_25849[(31)] = inst_25691);

(statearr_25849[(7)] = inst_25668);

(statearr_25849[(8)] = inst_25669);

(statearr_25849[(9)] = inst_25671);

(statearr_25849[(10)] = inst_25670);

return statearr_25849;
})();
var statearr_25850_25911 = state_25793__$1;
(statearr_25850_25911[(2)] = null);

(statearr_25850_25911[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (26))){
var inst_25724 = (state_25793[(21)]);
var inst_25725 = (state_25793[(22)]);
var inst_25721 = (state_25793[(18)]);
var inst_25727 = (state_25793[(24)]);
var inst_25729 = (state_25793[(23)]);
var inst_25744 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25746 = (function (){var all_files = inst_25721;
var res_SINGLEQUOTE_ = inst_25724;
var res = inst_25725;
var files_not_loaded = inst_25727;
var dependencies_that_loaded = inst_25729;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25724,inst_25725,inst_25721,inst_25727,inst_25729,inst_25744,state_val_25794,c__19048__auto__,map__25655,map__25655__$1,opts,before_jsload,on_jsload,reload_dependents,map__25656,map__25656__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25745){
var map__25851 = p__25745;
var map__25851__$1 = ((cljs.core.seq_QMARK_.call(null,map__25851))?cljs.core.apply.call(null,cljs.core.hash_map,map__25851):map__25851);
var namespace = cljs.core.get.call(null,map__25851__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25851__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25724,inst_25725,inst_25721,inst_25727,inst_25729,inst_25744,state_val_25794,c__19048__auto__,map__25655,map__25655__$1,opts,before_jsload,on_jsload,reload_dependents,map__25656,map__25656__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25747 = cljs.core.map.call(null,inst_25746,inst_25725);
var inst_25748 = cljs.core.pr_str.call(null,inst_25747);
var inst_25749 = figwheel.client.utils.log.call(null,inst_25748);
var inst_25750 = (function (){var all_files = inst_25721;
var res_SINGLEQUOTE_ = inst_25724;
var res = inst_25725;
var files_not_loaded = inst_25727;
var dependencies_that_loaded = inst_25729;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25724,inst_25725,inst_25721,inst_25727,inst_25729,inst_25744,inst_25746,inst_25747,inst_25748,inst_25749,state_val_25794,c__19048__auto__,map__25655,map__25655__$1,opts,before_jsload,on_jsload,reload_dependents,map__25656,map__25656__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25724,inst_25725,inst_25721,inst_25727,inst_25729,inst_25744,inst_25746,inst_25747,inst_25748,inst_25749,state_val_25794,c__19048__auto__,map__25655,map__25655__$1,opts,before_jsload,on_jsload,reload_dependents,map__25656,map__25656__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25751 = setTimeout(inst_25750,(10));
var state_25793__$1 = (function (){var statearr_25852 = state_25793;
(statearr_25852[(32)] = inst_25744);

(statearr_25852[(33)] = inst_25749);

return statearr_25852;
})();
var statearr_25853_25912 = state_25793__$1;
(statearr_25853_25912[(2)] = inst_25751);

(statearr_25853_25912[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (16))){
var state_25793__$1 = state_25793;
var statearr_25854_25913 = state_25793__$1;
(statearr_25854_25913[(2)] = reload_dependents);

(statearr_25854_25913[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (38))){
var inst_25769 = (state_25793[(29)]);
var inst_25782 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25769);
var inst_25783 = cljs.core.pr_str.call(null,inst_25782);
var inst_25784 = [cljs.core.str("not required: "),cljs.core.str(inst_25783)].join('');
var inst_25785 = figwheel.client.utils.log.call(null,inst_25784);
var state_25793__$1 = state_25793;
var statearr_25855_25914 = state_25793__$1;
(statearr_25855_25914[(2)] = inst_25785);

(statearr_25855_25914[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (30))){
var state_25793__$1 = state_25793;
var statearr_25856_25915 = state_25793__$1;
(statearr_25856_25915[(2)] = null);

(statearr_25856_25915[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (10))){
var inst_25681 = (state_25793[(20)]);
var inst_25683 = cljs.core.chunked_seq_QMARK_.call(null,inst_25681);
var state_25793__$1 = state_25793;
if(inst_25683){
var statearr_25857_25916 = state_25793__$1;
(statearr_25857_25916[(1)] = (13));

} else {
var statearr_25858_25917 = state_25793__$1;
(statearr_25858_25917[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (18))){
var inst_25715 = (state_25793[(2)]);
var state_25793__$1 = state_25793;
if(cljs.core.truth_(inst_25715)){
var statearr_25859_25918 = state_25793__$1;
(statearr_25859_25918[(1)] = (19));

} else {
var statearr_25860_25919 = state_25793__$1;
(statearr_25860_25919[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (37))){
var inst_25769 = (state_25793[(29)]);
var inst_25779 = (state_25793[(2)]);
var inst_25780 = cljs.core.not_empty.call(null,inst_25769);
var state_25793__$1 = (function (){var statearr_25861 = state_25793;
(statearr_25861[(34)] = inst_25779);

return statearr_25861;
})();
if(cljs.core.truth_(inst_25780)){
var statearr_25862_25920 = state_25793__$1;
(statearr_25862_25920[(1)] = (38));

} else {
var statearr_25863_25921 = state_25793__$1;
(statearr_25863_25921[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25794 === (8))){
var inst_25668 = (state_25793[(7)]);
var inst_25681 = (state_25793[(20)]);
var inst_25681__$1 = cljs.core.seq.call(null,inst_25668);
var state_25793__$1 = (function (){var statearr_25864 = state_25793;
(statearr_25864[(20)] = inst_25681__$1);

return statearr_25864;
})();
if(inst_25681__$1){
var statearr_25865_25922 = state_25793__$1;
(statearr_25865_25922[(1)] = (10));

} else {
var statearr_25866_25923 = state_25793__$1;
(statearr_25866_25923[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19048__auto__,map__25655,map__25655__$1,opts,before_jsload,on_jsload,reload_dependents,map__25656,map__25656__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__18986__auto__,c__19048__auto__,map__25655,map__25655__$1,opts,before_jsload,on_jsload,reload_dependents,map__25656,map__25656__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18987__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18987__auto____0 = (function (){
var statearr_25870 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25870[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__18987__auto__);

(statearr_25870[(1)] = (1));

return statearr_25870;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18987__auto____1 = (function (state_25793){
while(true){
var ret_value__18988__auto__ = (function (){try{while(true){
var result__18989__auto__ = switch__18986__auto__.call(null,state_25793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18989__auto__;
}
break;
}
}catch (e25871){if((e25871 instanceof Object)){
var ex__18990__auto__ = e25871;
var statearr_25872_25924 = state_25793;
(statearr_25872_25924[(5)] = ex__18990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25925 = state_25793;
state_25793 = G__25925;
continue;
} else {
return ret_value__18988__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__18987__auto__ = function(state_25793){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18987__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18987__auto____1.call(this,state_25793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18987__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18987__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18987__auto__;
})()
;})(switch__18986__auto__,c__19048__auto__,map__25655,map__25655__$1,opts,before_jsload,on_jsload,reload_dependents,map__25656,map__25656__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19050__auto__ = (function (){var statearr_25873 = f__19049__auto__.call(null);
(statearr_25873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19048__auto__);

return statearr_25873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19050__auto__);
});})(c__19048__auto__,map__25655,map__25655__$1,opts,before_jsload,on_jsload,reload_dependents,map__25656,map__25656__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19048__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25928,link){
var map__25930 = p__25928;
var map__25930__$1 = ((cljs.core.seq_QMARK_.call(null,map__25930))?cljs.core.apply.call(null,cljs.core.hash_map,map__25930):map__25930);
var file = cljs.core.get.call(null,map__25930__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4423__auto__ = link.href;
if(cljs.core.truth_(temp__4423__auto__)){
var link_href = temp__4423__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4423__auto__,map__25930,map__25930__$1,file){
return (function (p1__25926_SHARP_,p2__25927_SHARP_){
if(cljs.core._EQ_.call(null,p1__25926_SHARP_,p2__25927_SHARP_)){
return p1__25926_SHARP_;
} else {
return false;
}
});})(link_href,temp__4423__auto__,map__25930,map__25930__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25934){
var map__25935 = p__25934;
var map__25935__$1 = ((cljs.core.seq_QMARK_.call(null,map__25935))?cljs.core.apply.call(null,cljs.core.hash_map,map__25935):map__25935);
var match_length = cljs.core.get.call(null,map__25935__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25935__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25931_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25931_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4423__auto__)){
var res = temp__4423__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__25937 = arguments.length;
switch (G__25937) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__25939_SHARP_,p2__25940_SHARP_){
return cljs.core.assoc.call(null,p1__25939_SHARP_,cljs.core.get.call(null,p2__25940_SHARP_,key),p2__25940_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__25941){
var map__25943 = p__25941;
var map__25943__$1 = ((cljs.core.seq_QMARK_.call(null,map__25943))?cljs.core.apply.call(null,cljs.core.hash_map,map__25943):map__25943);
var f_data = map__25943__$1;
var file = cljs.core.get.call(null,map__25943__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4423__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25944,files_msg){
var map__25950 = p__25944;
var map__25950__$1 = ((cljs.core.seq_QMARK_.call(null,map__25950))?cljs.core.apply.call(null,cljs.core.hash_map,map__25950):map__25950);
var opts = map__25950__$1;
var on_cssload = cljs.core.get.call(null,map__25950__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__25951_25955 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25952_25956 = null;
var count__25953_25957 = (0);
var i__25954_25958 = (0);
while(true){
if((i__25954_25958 < count__25953_25957)){
var f_25959 = cljs.core._nth.call(null,chunk__25952_25956,i__25954_25958);
figwheel.client.file_reloading.reload_css_file.call(null,f_25959);

var G__25960 = seq__25951_25955;
var G__25961 = chunk__25952_25956;
var G__25962 = count__25953_25957;
var G__25963 = (i__25954_25958 + (1));
seq__25951_25955 = G__25960;
chunk__25952_25956 = G__25961;
count__25953_25957 = G__25962;
i__25954_25958 = G__25963;
continue;
} else {
var temp__4423__auto___25964 = cljs.core.seq.call(null,seq__25951_25955);
if(temp__4423__auto___25964){
var seq__25951_25965__$1 = temp__4423__auto___25964;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25951_25965__$1)){
var c__16823__auto___25966 = cljs.core.chunk_first.call(null,seq__25951_25965__$1);
var G__25967 = cljs.core.chunk_rest.call(null,seq__25951_25965__$1);
var G__25968 = c__16823__auto___25966;
var G__25969 = cljs.core.count.call(null,c__16823__auto___25966);
var G__25970 = (0);
seq__25951_25955 = G__25967;
chunk__25952_25956 = G__25968;
count__25953_25957 = G__25969;
i__25954_25958 = G__25970;
continue;
} else {
var f_25971 = cljs.core.first.call(null,seq__25951_25965__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25971);

var G__25972 = cljs.core.next.call(null,seq__25951_25965__$1);
var G__25973 = null;
var G__25974 = (0);
var G__25975 = (0);
seq__25951_25955 = G__25972;
chunk__25952_25956 = G__25973;
count__25953_25957 = G__25974;
i__25954_25958 = G__25975;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__25950,map__25950__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__25950,map__25950__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map