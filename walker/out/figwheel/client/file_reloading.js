// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__26956_SHARP_,p2__26957_SHARP_){
var and__18075__auto__ = p1__26956_SHARP_;
if(cljs.core.truth_(and__18075__auto__)){
return p2__26957_SHARP_;
} else {
return and__18075__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18087__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18087__auto__){
return or__18087__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__18087__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__18087__auto__){
return or__18087__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__18087__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__18087__auto__)){
return or__18087__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__18982__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18983__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18984__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18985__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18986__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18986__auto__,method_table__18982__auto__,prefer_table__18983__auto__,method_cache__18984__auto__,cached_hierarchy__18985__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__26958){
var map__26959 = p__26958;
var map__26959__$1 = ((cljs.core.seq_QMARK_.call(null,map__26959))?cljs.core.apply.call(null,cljs.core.hash_map,map__26959):map__26959);
var file = cljs.core.get.call(null,map__26959__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__26960){
var map__26961 = p__26960;
var map__26961__$1 = ((cljs.core.seq_QMARK_.call(null,map__26961))?cljs.core.apply.call(null,cljs.core.hash_map,map__26961):map__26961);
var namespace = cljs.core.get.call(null,map__26961__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__18982__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18983__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18984__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18985__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18986__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18986__auto__,method_table__18982__auto__,prefer_table__18983__auto__,method_cache__18984__auto__,cached_hierarchy__18985__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e26962){if((e26962 instanceof Error)){
var e = e26962;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26962;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__26964 = arguments.length;
switch (G__26964) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26966,callback){
var map__26968 = p__26966;
var map__26968__$1 = ((cljs.core.seq_QMARK_.call(null,map__26968))?cljs.core.apply.call(null,cljs.core.hash_map,map__26968):map__26968);
var file_msg = map__26968__$1;
var request_url = cljs.core.get.call(null,map__26968__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26968,map__26968__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26968,map__26968__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26969){
var map__26971 = p__26969;
var map__26971__$1 = ((cljs.core.seq_QMARK_.call(null,map__26971))?cljs.core.apply.call(null,cljs.core.hash_map,map__26971):map__26971);
var file_msg = map__26971__$1;
var namespace = cljs.core.get.call(null,map__26971__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__26971__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__18087__auto__ = meta_data;
if(cljs.core.truth_(or__18087__auto__)){
return or__18087__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__18075__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__18075__auto__){
var or__18087__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18087__auto__)){
return or__18087__auto__;
} else {
var or__18087__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__18087__auto____$1)){
return or__18087__auto____$1;
} else {
var and__18075__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__18075__auto____$1){
var or__18087__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__18087__auto____$2){
return or__18087__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__18075__auto____$1;
}
}
}
} else {
return and__18075__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26972,callback){
var map__26974 = p__26972;
var map__26974__$1 = ((cljs.core.seq_QMARK_.call(null,map__26974))?cljs.core.apply.call(null,cljs.core.hash_map,map__26974):map__26974);
var file_msg = map__26974__$1;
var request_url = cljs.core.get.call(null,map__26974__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26974__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21859__auto___27061 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21859__auto___27061,out){
return (function (){
var f__21860__auto__ = (function (){var switch__21797__auto__ = ((function (c__21859__auto___27061,out){
return (function (state_27043){
var state_val_27044 = (state_27043[(1)]);
if((state_val_27044 === (1))){
var inst_27021 = cljs.core.nth.call(null,files,(0),null);
var inst_27022 = cljs.core.nthnext.call(null,files,(1));
var inst_27023 = files;
var state_27043__$1 = (function (){var statearr_27045 = state_27043;
(statearr_27045[(7)] = inst_27023);

(statearr_27045[(8)] = inst_27021);

(statearr_27045[(9)] = inst_27022);

return statearr_27045;
})();
var statearr_27046_27062 = state_27043__$1;
(statearr_27046_27062[(2)] = null);

(statearr_27046_27062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27044 === (2))){
var inst_27023 = (state_27043[(7)]);
var inst_27026 = (state_27043[(10)]);
var inst_27026__$1 = cljs.core.nth.call(null,inst_27023,(0),null);
var inst_27027 = cljs.core.nthnext.call(null,inst_27023,(1));
var inst_27028 = (inst_27026__$1 == null);
var inst_27029 = cljs.core.not.call(null,inst_27028);
var state_27043__$1 = (function (){var statearr_27047 = state_27043;
(statearr_27047[(10)] = inst_27026__$1);

(statearr_27047[(11)] = inst_27027);

return statearr_27047;
})();
if(inst_27029){
var statearr_27048_27063 = state_27043__$1;
(statearr_27048_27063[(1)] = (4));

} else {
var statearr_27049_27064 = state_27043__$1;
(statearr_27049_27064[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27044 === (3))){
var inst_27041 = (state_27043[(2)]);
var state_27043__$1 = state_27043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27043__$1,inst_27041);
} else {
if((state_val_27044 === (4))){
var inst_27026 = (state_27043[(10)]);
var inst_27031 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27026);
var state_27043__$1 = state_27043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27043__$1,(7),inst_27031);
} else {
if((state_val_27044 === (5))){
var inst_27037 = cljs.core.async.close_BANG_.call(null,out);
var state_27043__$1 = state_27043;
var statearr_27050_27065 = state_27043__$1;
(statearr_27050_27065[(2)] = inst_27037);

(statearr_27050_27065[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27044 === (6))){
var inst_27039 = (state_27043[(2)]);
var state_27043__$1 = state_27043;
var statearr_27051_27066 = state_27043__$1;
(statearr_27051_27066[(2)] = inst_27039);

(statearr_27051_27066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27044 === (7))){
var inst_27027 = (state_27043[(11)]);
var inst_27033 = (state_27043[(2)]);
var inst_27034 = cljs.core.async.put_BANG_.call(null,out,inst_27033);
var inst_27023 = inst_27027;
var state_27043__$1 = (function (){var statearr_27052 = state_27043;
(statearr_27052[(7)] = inst_27023);

(statearr_27052[(12)] = inst_27034);

return statearr_27052;
})();
var statearr_27053_27067 = state_27043__$1;
(statearr_27053_27067[(2)] = null);

(statearr_27053_27067[(1)] = (2));


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
});})(c__21859__auto___27061,out))
;
return ((function (switch__21797__auto__,c__21859__auto___27061,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21798__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21798__auto____0 = (function (){
var statearr_27057 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27057[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21798__auto__);

(statearr_27057[(1)] = (1));

return statearr_27057;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21798__auto____1 = (function (state_27043){
while(true){
var ret_value__21799__auto__ = (function (){try{while(true){
var result__21800__auto__ = switch__21797__auto__.call(null,state_27043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21800__auto__;
}
break;
}
}catch (e27058){if((e27058 instanceof Object)){
var ex__21801__auto__ = e27058;
var statearr_27059_27068 = state_27043;
(statearr_27059_27068[(5)] = ex__21801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27069 = state_27043;
state_27043 = G__27069;
continue;
} else {
return ret_value__21799__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21798__auto__ = function(state_27043){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21798__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21798__auto____1.call(this,state_27043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21798__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21798__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21798__auto__;
})()
;})(switch__21797__auto__,c__21859__auto___27061,out))
})();
var state__21861__auto__ = (function (){var statearr_27060 = f__21860__auto__.call(null);
(statearr_27060[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21859__auto___27061);

return statearr_27060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21861__auto__);
});})(c__21859__auto___27061,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__27070,p__27071){
var map__27074 = p__27070;
var map__27074__$1 = ((cljs.core.seq_QMARK_.call(null,map__27074))?cljs.core.apply.call(null,cljs.core.hash_map,map__27074):map__27074);
var opts = map__27074__$1;
var url_rewriter = cljs.core.get.call(null,map__27074__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__27075 = p__27071;
var map__27075__$1 = ((cljs.core.seq_QMARK_.call(null,map__27075))?cljs.core.apply.call(null,cljs.core.hash_map,map__27075):map__27075);
var file_msg = map__27075__$1;
var file = cljs.core.get.call(null,map__27075__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27076){
var map__27079 = p__27076;
var map__27079__$1 = ((cljs.core.seq_QMARK_.call(null,map__27079))?cljs.core.apply.call(null,cljs.core.hash_map,map__27079):map__27079);
var eval_body__$1 = cljs.core.get.call(null,map__27079__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27079__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18075__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18075__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18075__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e27080){var e = e27080;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27085,p__27086){
var map__27288 = p__27085;
var map__27288__$1 = ((cljs.core.seq_QMARK_.call(null,map__27288))?cljs.core.apply.call(null,cljs.core.hash_map,map__27288):map__27288);
var opts = map__27288__$1;
var before_jsload = cljs.core.get.call(null,map__27288__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27288__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__27288__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__27289 = p__27086;
var map__27289__$1 = ((cljs.core.seq_QMARK_.call(null,map__27289))?cljs.core.apply.call(null,cljs.core.hash_map,map__27289):map__27289);
var msg = map__27289__$1;
var files = cljs.core.get.call(null,map__27289__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__21859__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21859__auto__,map__27288,map__27288__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27289,map__27289__$1,msg,files){
return (function (){
var f__21860__auto__ = (function (){var switch__21797__auto__ = ((function (c__21859__auto__,map__27288,map__27288__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27289,map__27289__$1,msg,files){
return (function (state_27414){
var state_val_27415 = (state_27414[(1)]);
if((state_val_27415 === (7))){
var inst_27302 = (state_27414[(7)]);
var inst_27304 = (state_27414[(8)]);
var inst_27301 = (state_27414[(9)]);
var inst_27303 = (state_27414[(10)]);
var inst_27309 = cljs.core._nth.call(null,inst_27302,inst_27304);
var inst_27310 = figwheel.client.file_reloading.eval_body.call(null,inst_27309);
var inst_27311 = (inst_27304 + (1));
var tmp27416 = inst_27302;
var tmp27417 = inst_27301;
var tmp27418 = inst_27303;
var inst_27301__$1 = tmp27417;
var inst_27302__$1 = tmp27416;
var inst_27303__$1 = tmp27418;
var inst_27304__$1 = inst_27311;
var state_27414__$1 = (function (){var statearr_27419 = state_27414;
(statearr_27419[(7)] = inst_27302__$1);

(statearr_27419[(8)] = inst_27304__$1);

(statearr_27419[(9)] = inst_27301__$1);

(statearr_27419[(10)] = inst_27303__$1);

(statearr_27419[(11)] = inst_27310);

return statearr_27419;
})();
var statearr_27420_27489 = state_27414__$1;
(statearr_27420_27489[(2)] = null);

(statearr_27420_27489[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (20))){
var inst_27346 = (state_27414[(12)]);
var inst_27351 = (state_27414[(13)]);
var inst_27350 = (state_27414[(14)]);
var inst_27353 = (state_27414[(15)]);
var inst_27347 = (state_27414[(16)]);
var inst_27356 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27358 = (function (){var all_files = inst_27346;
var files_SINGLEQUOTE_ = inst_27347;
var res_SINGLEQUOTE_ = inst_27350;
var res = inst_27351;
var files_not_loaded = inst_27353;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_27346,inst_27351,inst_27350,inst_27353,inst_27347,inst_27356,state_val_27415,c__21859__auto__,map__27288,map__27288__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27289,map__27289__$1,msg,files){
return (function (p__27357){
var map__27421 = p__27357;
var map__27421__$1 = ((cljs.core.seq_QMARK_.call(null,map__27421))?cljs.core.apply.call(null,cljs.core.hash_map,map__27421):map__27421);
var namespace = cljs.core.get.call(null,map__27421__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27421__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_27346,inst_27351,inst_27350,inst_27353,inst_27347,inst_27356,state_val_27415,c__21859__auto__,map__27288,map__27288__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27289,map__27289__$1,msg,files))
})();
var inst_27359 = cljs.core.map.call(null,inst_27358,inst_27351);
var inst_27360 = cljs.core.pr_str.call(null,inst_27359);
var inst_27361 = figwheel.client.utils.log.call(null,inst_27360);
var inst_27362 = (function (){var all_files = inst_27346;
var files_SINGLEQUOTE_ = inst_27347;
var res_SINGLEQUOTE_ = inst_27350;
var res = inst_27351;
var files_not_loaded = inst_27353;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_27346,inst_27351,inst_27350,inst_27353,inst_27347,inst_27356,inst_27358,inst_27359,inst_27360,inst_27361,state_val_27415,c__21859__auto__,map__27288,map__27288__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27289,map__27289__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_27346,inst_27351,inst_27350,inst_27353,inst_27347,inst_27356,inst_27358,inst_27359,inst_27360,inst_27361,state_val_27415,c__21859__auto__,map__27288,map__27288__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27289,map__27289__$1,msg,files))
})();
var inst_27363 = setTimeout(inst_27362,(10));
var state_27414__$1 = (function (){var statearr_27422 = state_27414;
(statearr_27422[(17)] = inst_27356);

(statearr_27422[(18)] = inst_27361);

return statearr_27422;
})();
var statearr_27423_27490 = state_27414__$1;
(statearr_27423_27490[(2)] = inst_27363);

(statearr_27423_27490[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (27))){
var inst_27373 = (state_27414[(19)]);
var state_27414__$1 = state_27414;
var statearr_27424_27491 = state_27414__$1;
(statearr_27424_27491[(2)] = inst_27373);

(statearr_27424_27491[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (1))){
var inst_27293 = (state_27414[(20)]);
var inst_27290 = before_jsload.call(null,files);
var inst_27291 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27292 = (function (){return ((function (inst_27293,inst_27290,inst_27291,state_val_27415,c__21859__auto__,map__27288,map__27288__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27289,map__27289__$1,msg,files){
return (function (p1__27081_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27081_SHARP_);
});
;})(inst_27293,inst_27290,inst_27291,state_val_27415,c__21859__auto__,map__27288,map__27288__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27289,map__27289__$1,msg,files))
})();
var inst_27293__$1 = cljs.core.filter.call(null,inst_27292,files);
var inst_27294 = cljs.core.not_empty.call(null,inst_27293__$1);
var state_27414__$1 = (function (){var statearr_27425 = state_27414;
(statearr_27425[(21)] = inst_27291);

(statearr_27425[(20)] = inst_27293__$1);

(statearr_27425[(22)] = inst_27290);

return statearr_27425;
})();
if(cljs.core.truth_(inst_27294)){
var statearr_27426_27492 = state_27414__$1;
(statearr_27426_27492[(1)] = (2));

} else {
var statearr_27427_27493 = state_27414__$1;
(statearr_27427_27493[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (24))){
var state_27414__$1 = state_27414;
var statearr_27428_27494 = state_27414__$1;
(statearr_27428_27494[(2)] = null);

(statearr_27428_27494[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (4))){
var inst_27338 = (state_27414[(2)]);
var inst_27339 = (function (){return ((function (inst_27338,state_val_27415,c__21859__auto__,map__27288,map__27288__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27289,map__27289__$1,msg,files){
return (function (p1__27082_SHARP_){
var and__18075__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27082_SHARP_);
if(cljs.core.truth_(and__18075__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27082_SHARP_));
} else {
return and__18075__auto__;
}
});
;})(inst_27338,state_val_27415,c__21859__auto__,map__27288,map__27288__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27289,map__27289__$1,msg,files))
})();
var inst_27340 = cljs.core.filter.call(null,inst_27339,files);
var state_27414__$1 = (function (){var statearr_27429 = state_27414;
(statearr_27429[(23)] = inst_27338);

(statearr_27429[(24)] = inst_27340);

return statearr_27429;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_27430_27495 = state_27414__$1;
(statearr_27430_27495[(1)] = (16));

} else {
var statearr_27431_27496 = state_27414__$1;
(statearr_27431_27496[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (15))){
var inst_27328 = (state_27414[(2)]);
var state_27414__$1 = state_27414;
var statearr_27432_27497 = state_27414__$1;
(statearr_27432_27497[(2)] = inst_27328);

(statearr_27432_27497[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (21))){
var state_27414__$1 = state_27414;
var statearr_27433_27498 = state_27414__$1;
(statearr_27433_27498[(2)] = null);

(statearr_27433_27498[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (31))){
var inst_27381 = (state_27414[(25)]);
var inst_27391 = (state_27414[(2)]);
var inst_27392 = cljs.core.not_empty.call(null,inst_27381);
var state_27414__$1 = (function (){var statearr_27434 = state_27414;
(statearr_27434[(26)] = inst_27391);

return statearr_27434;
})();
if(cljs.core.truth_(inst_27392)){
var statearr_27435_27499 = state_27414__$1;
(statearr_27435_27499[(1)] = (32));

} else {
var statearr_27436_27500 = state_27414__$1;
(statearr_27436_27500[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (32))){
var inst_27381 = (state_27414[(25)]);
var inst_27394 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27381);
var inst_27395 = cljs.core.pr_str.call(null,inst_27394);
var inst_27396 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_27395)].join('');
var inst_27397 = figwheel.client.utils.log.call(null,inst_27396);
var state_27414__$1 = state_27414;
var statearr_27437_27501 = state_27414__$1;
(statearr_27437_27501[(2)] = inst_27397);

(statearr_27437_27501[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (33))){
var state_27414__$1 = state_27414;
var statearr_27438_27502 = state_27414__$1;
(statearr_27438_27502[(2)] = null);

(statearr_27438_27502[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (13))){
var inst_27314 = (state_27414[(27)]);
var inst_27318 = cljs.core.chunk_first.call(null,inst_27314);
var inst_27319 = cljs.core.chunk_rest.call(null,inst_27314);
var inst_27320 = cljs.core.count.call(null,inst_27318);
var inst_27301 = inst_27319;
var inst_27302 = inst_27318;
var inst_27303 = inst_27320;
var inst_27304 = (0);
var state_27414__$1 = (function (){var statearr_27439 = state_27414;
(statearr_27439[(7)] = inst_27302);

(statearr_27439[(8)] = inst_27304);

(statearr_27439[(9)] = inst_27301);

(statearr_27439[(10)] = inst_27303);

return statearr_27439;
})();
var statearr_27440_27503 = state_27414__$1;
(statearr_27440_27503[(2)] = null);

(statearr_27440_27503[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (22))){
var inst_27353 = (state_27414[(15)]);
var inst_27366 = (state_27414[(2)]);
var inst_27367 = cljs.core.not_empty.call(null,inst_27353);
var state_27414__$1 = (function (){var statearr_27441 = state_27414;
(statearr_27441[(28)] = inst_27366);

return statearr_27441;
})();
if(cljs.core.truth_(inst_27367)){
var statearr_27442_27504 = state_27414__$1;
(statearr_27442_27504[(1)] = (23));

} else {
var statearr_27443_27505 = state_27414__$1;
(statearr_27443_27505[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (36))){
var state_27414__$1 = state_27414;
var statearr_27444_27506 = state_27414__$1;
(statearr_27444_27506[(2)] = null);

(statearr_27444_27506[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (29))){
var inst_27380 = (state_27414[(29)]);
var inst_27385 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27380);
var inst_27386 = cljs.core.pr_str.call(null,inst_27385);
var inst_27387 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27386)].join('');
var inst_27388 = figwheel.client.utils.log.call(null,inst_27387);
var state_27414__$1 = state_27414;
var statearr_27445_27507 = state_27414__$1;
(statearr_27445_27507[(2)] = inst_27388);

(statearr_27445_27507[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (6))){
var inst_27335 = (state_27414[(2)]);
var state_27414__$1 = state_27414;
var statearr_27446_27508 = state_27414__$1;
(statearr_27446_27508[(2)] = inst_27335);

(statearr_27446_27508[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (28))){
var inst_27380 = (state_27414[(29)]);
var inst_27379 = (state_27414[(2)]);
var inst_27380__$1 = cljs.core.get.call(null,inst_27379,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27381 = cljs.core.get.call(null,inst_27379,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_27382 = cljs.core.get.call(null,inst_27379,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27383 = cljs.core.not_empty.call(null,inst_27380__$1);
var state_27414__$1 = (function (){var statearr_27447 = state_27414;
(statearr_27447[(25)] = inst_27381);

(statearr_27447[(29)] = inst_27380__$1);

(statearr_27447[(30)] = inst_27382);

return statearr_27447;
})();
if(cljs.core.truth_(inst_27383)){
var statearr_27448_27509 = state_27414__$1;
(statearr_27448_27509[(1)] = (29));

} else {
var statearr_27449_27510 = state_27414__$1;
(statearr_27449_27510[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (25))){
var inst_27412 = (state_27414[(2)]);
var state_27414__$1 = state_27414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27414__$1,inst_27412);
} else {
if((state_val_27415 === (34))){
var inst_27382 = (state_27414[(30)]);
var inst_27400 = (state_27414[(2)]);
var inst_27401 = cljs.core.not_empty.call(null,inst_27382);
var state_27414__$1 = (function (){var statearr_27450 = state_27414;
(statearr_27450[(31)] = inst_27400);

return statearr_27450;
})();
if(cljs.core.truth_(inst_27401)){
var statearr_27451_27511 = state_27414__$1;
(statearr_27451_27511[(1)] = (35));

} else {
var statearr_27452_27512 = state_27414__$1;
(statearr_27452_27512[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (17))){
var inst_27340 = (state_27414[(24)]);
var state_27414__$1 = state_27414;
var statearr_27453_27513 = state_27414__$1;
(statearr_27453_27513[(2)] = inst_27340);

(statearr_27453_27513[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (3))){
var state_27414__$1 = state_27414;
var statearr_27454_27514 = state_27414__$1;
(statearr_27454_27514[(2)] = null);

(statearr_27454_27514[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (12))){
var inst_27331 = (state_27414[(2)]);
var state_27414__$1 = state_27414;
var statearr_27455_27515 = state_27414__$1;
(statearr_27455_27515[(2)] = inst_27331);

(statearr_27455_27515[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (2))){
var inst_27293 = (state_27414[(20)]);
var inst_27300 = cljs.core.seq.call(null,inst_27293);
var inst_27301 = inst_27300;
var inst_27302 = null;
var inst_27303 = (0);
var inst_27304 = (0);
var state_27414__$1 = (function (){var statearr_27456 = state_27414;
(statearr_27456[(7)] = inst_27302);

(statearr_27456[(8)] = inst_27304);

(statearr_27456[(9)] = inst_27301);

(statearr_27456[(10)] = inst_27303);

return statearr_27456;
})();
var statearr_27457_27516 = state_27414__$1;
(statearr_27457_27516[(2)] = null);

(statearr_27457_27516[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (23))){
var inst_27373 = (state_27414[(19)]);
var inst_27346 = (state_27414[(12)]);
var inst_27351 = (state_27414[(13)]);
var inst_27350 = (state_27414[(14)]);
var inst_27353 = (state_27414[(15)]);
var inst_27347 = (state_27414[(16)]);
var inst_27369 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27372 = (function (){var all_files = inst_27346;
var files_SINGLEQUOTE_ = inst_27347;
var res_SINGLEQUOTE_ = inst_27350;
var res = inst_27351;
var files_not_loaded = inst_27353;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_27373,inst_27346,inst_27351,inst_27350,inst_27353,inst_27347,inst_27369,state_val_27415,c__21859__auto__,map__27288,map__27288__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27289,map__27289__$1,msg,files){
return (function (p__27371){
var map__27458 = p__27371;
var map__27458__$1 = ((cljs.core.seq_QMARK_.call(null,map__27458))?cljs.core.apply.call(null,cljs.core.hash_map,map__27458):map__27458);
var meta_data = cljs.core.get.call(null,map__27458__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_27373,inst_27346,inst_27351,inst_27350,inst_27353,inst_27347,inst_27369,state_val_27415,c__21859__auto__,map__27288,map__27288__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27289,map__27289__$1,msg,files))
})();
var inst_27373__$1 = cljs.core.group_by.call(null,inst_27372,inst_27353);
var inst_27374 = cljs.core.seq_QMARK_.call(null,inst_27373__$1);
var state_27414__$1 = (function (){var statearr_27459 = state_27414;
(statearr_27459[(19)] = inst_27373__$1);

(statearr_27459[(32)] = inst_27369);

return statearr_27459;
})();
if(inst_27374){
var statearr_27460_27517 = state_27414__$1;
(statearr_27460_27517[(1)] = (26));

} else {
var statearr_27461_27518 = state_27414__$1;
(statearr_27461_27518[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (35))){
var inst_27382 = (state_27414[(30)]);
var inst_27403 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27382);
var inst_27404 = cljs.core.pr_str.call(null,inst_27403);
var inst_27405 = [cljs.core.str("not required: "),cljs.core.str(inst_27404)].join('');
var inst_27406 = figwheel.client.utils.log.call(null,inst_27405);
var state_27414__$1 = state_27414;
var statearr_27462_27519 = state_27414__$1;
(statearr_27462_27519[(2)] = inst_27406);

(statearr_27462_27519[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (19))){
var inst_27346 = (state_27414[(12)]);
var inst_27351 = (state_27414[(13)]);
var inst_27350 = (state_27414[(14)]);
var inst_27347 = (state_27414[(16)]);
var inst_27350__$1 = (state_27414[(2)]);
var inst_27351__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27350__$1);
var inst_27352 = (function (){var all_files = inst_27346;
var files_SINGLEQUOTE_ = inst_27347;
var res_SINGLEQUOTE_ = inst_27350__$1;
var res = inst_27351__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_27346,inst_27351,inst_27350,inst_27347,inst_27350__$1,inst_27351__$1,state_val_27415,c__21859__auto__,map__27288,map__27288__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27289,map__27289__$1,msg,files){
return (function (p1__27084_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27084_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_27346,inst_27351,inst_27350,inst_27347,inst_27350__$1,inst_27351__$1,state_val_27415,c__21859__auto__,map__27288,map__27288__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27289,map__27289__$1,msg,files))
})();
var inst_27353 = cljs.core.filter.call(null,inst_27352,inst_27350__$1);
var inst_27354 = cljs.core.not_empty.call(null,inst_27351__$1);
var state_27414__$1 = (function (){var statearr_27463 = state_27414;
(statearr_27463[(13)] = inst_27351__$1);

(statearr_27463[(14)] = inst_27350__$1);

(statearr_27463[(15)] = inst_27353);

return statearr_27463;
})();
if(cljs.core.truth_(inst_27354)){
var statearr_27464_27520 = state_27414__$1;
(statearr_27464_27520[(1)] = (20));

} else {
var statearr_27465_27521 = state_27414__$1;
(statearr_27465_27521[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (11))){
var state_27414__$1 = state_27414;
var statearr_27466_27522 = state_27414__$1;
(statearr_27466_27522[(2)] = null);

(statearr_27466_27522[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (9))){
var inst_27333 = (state_27414[(2)]);
var state_27414__$1 = state_27414;
var statearr_27467_27523 = state_27414__$1;
(statearr_27467_27523[(2)] = inst_27333);

(statearr_27467_27523[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (5))){
var inst_27304 = (state_27414[(8)]);
var inst_27303 = (state_27414[(10)]);
var inst_27306 = (inst_27304 < inst_27303);
var inst_27307 = inst_27306;
var state_27414__$1 = state_27414;
if(cljs.core.truth_(inst_27307)){
var statearr_27468_27524 = state_27414__$1;
(statearr_27468_27524[(1)] = (7));

} else {
var statearr_27469_27525 = state_27414__$1;
(statearr_27469_27525[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (14))){
var inst_27314 = (state_27414[(27)]);
var inst_27323 = cljs.core.first.call(null,inst_27314);
var inst_27324 = figwheel.client.file_reloading.eval_body.call(null,inst_27323);
var inst_27325 = cljs.core.next.call(null,inst_27314);
var inst_27301 = inst_27325;
var inst_27302 = null;
var inst_27303 = (0);
var inst_27304 = (0);
var state_27414__$1 = (function (){var statearr_27470 = state_27414;
(statearr_27470[(7)] = inst_27302);

(statearr_27470[(8)] = inst_27304);

(statearr_27470[(33)] = inst_27324);

(statearr_27470[(9)] = inst_27301);

(statearr_27470[(10)] = inst_27303);

return statearr_27470;
})();
var statearr_27471_27526 = state_27414__$1;
(statearr_27471_27526[(2)] = null);

(statearr_27471_27526[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (26))){
var inst_27373 = (state_27414[(19)]);
var inst_27376 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27373);
var state_27414__$1 = state_27414;
var statearr_27472_27527 = state_27414__$1;
(statearr_27472_27527[(2)] = inst_27376);

(statearr_27472_27527[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (16))){
var inst_27340 = (state_27414[(24)]);
var inst_27342 = (function (){var all_files = inst_27340;
return ((function (all_files,inst_27340,state_val_27415,c__21859__auto__,map__27288,map__27288__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27289,map__27289__$1,msg,files){
return (function (p1__27083_SHARP_){
return cljs.core.update_in.call(null,p1__27083_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_27340,state_val_27415,c__21859__auto__,map__27288,map__27288__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27289,map__27289__$1,msg,files))
})();
var inst_27343 = cljs.core.map.call(null,inst_27342,inst_27340);
var state_27414__$1 = state_27414;
var statearr_27473_27528 = state_27414__$1;
(statearr_27473_27528[(2)] = inst_27343);

(statearr_27473_27528[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (30))){
var state_27414__$1 = state_27414;
var statearr_27474_27529 = state_27414__$1;
(statearr_27474_27529[(2)] = null);

(statearr_27474_27529[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (10))){
var inst_27314 = (state_27414[(27)]);
var inst_27316 = cljs.core.chunked_seq_QMARK_.call(null,inst_27314);
var state_27414__$1 = state_27414;
if(inst_27316){
var statearr_27475_27530 = state_27414__$1;
(statearr_27475_27530[(1)] = (13));

} else {
var statearr_27476_27531 = state_27414__$1;
(statearr_27476_27531[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (18))){
var inst_27346 = (state_27414[(12)]);
var inst_27347 = (state_27414[(16)]);
var inst_27346__$1 = (state_27414[(2)]);
var inst_27347__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_27346__$1);
var inst_27348 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27347__$1);
var state_27414__$1 = (function (){var statearr_27477 = state_27414;
(statearr_27477[(12)] = inst_27346__$1);

(statearr_27477[(16)] = inst_27347__$1);

return statearr_27477;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27414__$1,(19),inst_27348);
} else {
if((state_val_27415 === (37))){
var inst_27409 = (state_27414[(2)]);
var state_27414__$1 = state_27414;
var statearr_27478_27532 = state_27414__$1;
(statearr_27478_27532[(2)] = inst_27409);

(statearr_27478_27532[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27415 === (8))){
var inst_27314 = (state_27414[(27)]);
var inst_27301 = (state_27414[(9)]);
var inst_27314__$1 = cljs.core.seq.call(null,inst_27301);
var state_27414__$1 = (function (){var statearr_27479 = state_27414;
(statearr_27479[(27)] = inst_27314__$1);

return statearr_27479;
})();
if(inst_27314__$1){
var statearr_27480_27533 = state_27414__$1;
(statearr_27480_27533[(1)] = (10));

} else {
var statearr_27481_27534 = state_27414__$1;
(statearr_27481_27534[(1)] = (11));

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
});})(c__21859__auto__,map__27288,map__27288__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27289,map__27289__$1,msg,files))
;
return ((function (switch__21797__auto__,c__21859__auto__,map__27288,map__27288__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27289,map__27289__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21798__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21798__auto____0 = (function (){
var statearr_27485 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27485[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21798__auto__);

(statearr_27485[(1)] = (1));

return statearr_27485;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21798__auto____1 = (function (state_27414){
while(true){
var ret_value__21799__auto__ = (function (){try{while(true){
var result__21800__auto__ = switch__21797__auto__.call(null,state_27414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21800__auto__;
}
break;
}
}catch (e27486){if((e27486 instanceof Object)){
var ex__21801__auto__ = e27486;
var statearr_27487_27535 = state_27414;
(statearr_27487_27535[(5)] = ex__21801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27536 = state_27414;
state_27414 = G__27536;
continue;
} else {
return ret_value__21799__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21798__auto__ = function(state_27414){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21798__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21798__auto____1.call(this,state_27414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21798__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21798__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21798__auto__;
})()
;})(switch__21797__auto__,c__21859__auto__,map__27288,map__27288__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27289,map__27289__$1,msg,files))
})();
var state__21861__auto__ = (function (){var statearr_27488 = f__21860__auto__.call(null);
(statearr_27488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21859__auto__);

return statearr_27488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21861__auto__);
});})(c__21859__auto__,map__27288,map__27288__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27289,map__27289__$1,msg,files))
);

return c__21859__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27539,link){
var map__27541 = p__27539;
var map__27541__$1 = ((cljs.core.seq_QMARK_.call(null,map__27541))?cljs.core.apply.call(null,cljs.core.hash_map,map__27541):map__27541);
var file = cljs.core.get.call(null,map__27541__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4423__auto__ = link.href;
if(cljs.core.truth_(temp__4423__auto__)){
var link_href = temp__4423__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4423__auto__,map__27541,map__27541__$1,file){
return (function (p1__27537_SHARP_,p2__27538_SHARP_){
if(cljs.core._EQ_.call(null,p1__27537_SHARP_,p2__27538_SHARP_)){
return p1__27537_SHARP_;
} else {
return false;
}
});})(link_href,temp__4423__auto__,map__27541,map__27541__$1,file))
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
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27545){
var map__27546 = p__27545;
var map__27546__$1 = ((cljs.core.seq_QMARK_.call(null,map__27546))?cljs.core.apply.call(null,cljs.core.hash_map,map__27546):map__27546);
var match_length = cljs.core.get.call(null,map__27546__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27546__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27542_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27542_SHARP_);
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
var G__27548 = arguments.length;
switch (G__27548) {
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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27550){
var map__27552 = p__27550;
var map__27552__$1 = ((cljs.core.seq_QMARK_.call(null,map__27552))?cljs.core.apply.call(null,cljs.core.hash_map,map__27552):map__27552);
var f_data = map__27552__$1;
var file = cljs.core.get.call(null,map__27552__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__27552__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4421__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4421__auto__)){
var link = temp__4421__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__18087__auto__ = request_url;
if(cljs.core.truth_(or__18087__auto__)){
return or__18087__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27553,files_msg){
var map__27575 = p__27553;
var map__27575__$1 = ((cljs.core.seq_QMARK_.call(null,map__27575))?cljs.core.apply.call(null,cljs.core.hash_map,map__27575):map__27575);
var opts = map__27575__$1;
var on_cssload = cljs.core.get.call(null,map__27575__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27576_27596 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27577_27597 = null;
var count__27578_27598 = (0);
var i__27579_27599 = (0);
while(true){
if((i__27579_27599 < count__27578_27598)){
var f_27600 = cljs.core._nth.call(null,chunk__27577_27597,i__27579_27599);
figwheel.client.file_reloading.reload_css_file.call(null,f_27600);

var G__27601 = seq__27576_27596;
var G__27602 = chunk__27577_27597;
var G__27603 = count__27578_27598;
var G__27604 = (i__27579_27599 + (1));
seq__27576_27596 = G__27601;
chunk__27577_27597 = G__27602;
count__27578_27598 = G__27603;
i__27579_27599 = G__27604;
continue;
} else {
var temp__4423__auto___27605 = cljs.core.seq.call(null,seq__27576_27596);
if(temp__4423__auto___27605){
var seq__27576_27606__$1 = temp__4423__auto___27605;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27576_27606__$1)){
var c__18872__auto___27607 = cljs.core.chunk_first.call(null,seq__27576_27606__$1);
var G__27608 = cljs.core.chunk_rest.call(null,seq__27576_27606__$1);
var G__27609 = c__18872__auto___27607;
var G__27610 = cljs.core.count.call(null,c__18872__auto___27607);
var G__27611 = (0);
seq__27576_27596 = G__27608;
chunk__27577_27597 = G__27609;
count__27578_27598 = G__27610;
i__27579_27599 = G__27611;
continue;
} else {
var f_27612 = cljs.core.first.call(null,seq__27576_27606__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27612);

var G__27613 = cljs.core.next.call(null,seq__27576_27606__$1);
var G__27614 = null;
var G__27615 = (0);
var G__27616 = (0);
seq__27576_27596 = G__27613;
chunk__27577_27597 = G__27614;
count__27578_27598 = G__27615;
i__27579_27599 = G__27616;
continue;
}
} else {
}
}
break;
}

var c__21859__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21859__auto__,map__27575,map__27575__$1,opts,on_cssload){
return (function (){
var f__21860__auto__ = (function (){var switch__21797__auto__ = ((function (c__21859__auto__,map__27575,map__27575__$1,opts,on_cssload){
return (function (state_27586){
var state_val_27587 = (state_27586[(1)]);
if((state_val_27587 === (1))){
var inst_27580 = cljs.core.async.timeout.call(null,(100));
var state_27586__$1 = state_27586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27586__$1,(2),inst_27580);
} else {
if((state_val_27587 === (2))){
var inst_27582 = (state_27586[(2)]);
var inst_27583 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_27584 = on_cssload.call(null,inst_27583);
var state_27586__$1 = (function (){var statearr_27588 = state_27586;
(statearr_27588[(7)] = inst_27582);

return statearr_27588;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27586__$1,inst_27584);
} else {
return null;
}
}
});})(c__21859__auto__,map__27575,map__27575__$1,opts,on_cssload))
;
return ((function (switch__21797__auto__,c__21859__auto__,map__27575,map__27575__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21798__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21798__auto____0 = (function (){
var statearr_27592 = [null,null,null,null,null,null,null,null];
(statearr_27592[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__21798__auto__);

(statearr_27592[(1)] = (1));

return statearr_27592;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21798__auto____1 = (function (state_27586){
while(true){
var ret_value__21799__auto__ = (function (){try{while(true){
var result__21800__auto__ = switch__21797__auto__.call(null,state_27586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21800__auto__;
}
break;
}
}catch (e27593){if((e27593 instanceof Object)){
var ex__21801__auto__ = e27593;
var statearr_27594_27617 = state_27586;
(statearr_27594_27617[(5)] = ex__21801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27618 = state_27586;
state_27586 = G__27618;
continue;
} else {
return ret_value__21799__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__21798__auto__ = function(state_27586){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21798__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21798__auto____1.call(this,state_27586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21798__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21798__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21798__auto__;
})()
;})(switch__21797__auto__,c__21859__auto__,map__27575,map__27575__$1,opts,on_cssload))
})();
var state__21861__auto__ = (function (){var statearr_27595 = f__21860__auto__.call(null);
(statearr_27595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21859__auto__);

return statearr_27595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21861__auto__);
});})(c__21859__auto__,map__27575,map__27575__$1,opts,on_cssload))
);

return c__21859__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map