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
return cljs.core.reduce.call(null,(function (p1__26959_SHARP_,p2__26960_SHARP_){
var and__18075__auto__ = p1__26959_SHARP_;
if(cljs.core.truth_(and__18075__auto__)){
return p2__26960_SHARP_;
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
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__26961){
var map__26962 = p__26961;
var map__26962__$1 = ((cljs.core.seq_QMARK_.call(null,map__26962))?cljs.core.apply.call(null,cljs.core.hash_map,map__26962):map__26962);
var file = cljs.core.get.call(null,map__26962__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__26963){
var map__26964 = p__26963;
var map__26964__$1 = ((cljs.core.seq_QMARK_.call(null,map__26964))?cljs.core.apply.call(null,cljs.core.hash_map,map__26964):map__26964);
var namespace = cljs.core.get.call(null,map__26964__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
}catch (e26965){if((e26965 instanceof Error)){
var e = e26965;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26965;

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
var G__26967 = arguments.length;
switch (G__26967) {
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
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26969,callback){
var map__26971 = p__26969;
var map__26971__$1 = ((cljs.core.seq_QMARK_.call(null,map__26971))?cljs.core.apply.call(null,cljs.core.hash_map,map__26971):map__26971);
var file_msg = map__26971__$1;
var request_url = cljs.core.get.call(null,map__26971__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26971,map__26971__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26971,map__26971__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26972){
var map__26974 = p__26972;
var map__26974__$1 = ((cljs.core.seq_QMARK_.call(null,map__26974))?cljs.core.apply.call(null,cljs.core.hash_map,map__26974):map__26974);
var file_msg = map__26974__$1;
var namespace = cljs.core.get.call(null,map__26974__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__26974__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26975,callback){
var map__26977 = p__26975;
var map__26977__$1 = ((cljs.core.seq_QMARK_.call(null,map__26977))?cljs.core.apply.call(null,cljs.core.hash_map,map__26977):map__26977);
var file_msg = map__26977__$1;
var request_url = cljs.core.get.call(null,map__26977__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26977__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__21862__auto___27064 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21862__auto___27064,out){
return (function (){
var f__21863__auto__ = (function (){var switch__21800__auto__ = ((function (c__21862__auto___27064,out){
return (function (state_27046){
var state_val_27047 = (state_27046[(1)]);
if((state_val_27047 === (1))){
var inst_27024 = cljs.core.nth.call(null,files,(0),null);
var inst_27025 = cljs.core.nthnext.call(null,files,(1));
var inst_27026 = files;
var state_27046__$1 = (function (){var statearr_27048 = state_27046;
(statearr_27048[(7)] = inst_27026);

(statearr_27048[(8)] = inst_27025);

(statearr_27048[(9)] = inst_27024);

return statearr_27048;
})();
var statearr_27049_27065 = state_27046__$1;
(statearr_27049_27065[(2)] = null);

(statearr_27049_27065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27047 === (2))){
var inst_27026 = (state_27046[(7)]);
var inst_27029 = (state_27046[(10)]);
var inst_27029__$1 = cljs.core.nth.call(null,inst_27026,(0),null);
var inst_27030 = cljs.core.nthnext.call(null,inst_27026,(1));
var inst_27031 = (inst_27029__$1 == null);
var inst_27032 = cljs.core.not.call(null,inst_27031);
var state_27046__$1 = (function (){var statearr_27050 = state_27046;
(statearr_27050[(11)] = inst_27030);

(statearr_27050[(10)] = inst_27029__$1);

return statearr_27050;
})();
if(inst_27032){
var statearr_27051_27066 = state_27046__$1;
(statearr_27051_27066[(1)] = (4));

} else {
var statearr_27052_27067 = state_27046__$1;
(statearr_27052_27067[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27047 === (3))){
var inst_27044 = (state_27046[(2)]);
var state_27046__$1 = state_27046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27046__$1,inst_27044);
} else {
if((state_val_27047 === (4))){
var inst_27029 = (state_27046[(10)]);
var inst_27034 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27029);
var state_27046__$1 = state_27046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27046__$1,(7),inst_27034);
} else {
if((state_val_27047 === (5))){
var inst_27040 = cljs.core.async.close_BANG_.call(null,out);
var state_27046__$1 = state_27046;
var statearr_27053_27068 = state_27046__$1;
(statearr_27053_27068[(2)] = inst_27040);

(statearr_27053_27068[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27047 === (6))){
var inst_27042 = (state_27046[(2)]);
var state_27046__$1 = state_27046;
var statearr_27054_27069 = state_27046__$1;
(statearr_27054_27069[(2)] = inst_27042);

(statearr_27054_27069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27047 === (7))){
var inst_27030 = (state_27046[(11)]);
var inst_27036 = (state_27046[(2)]);
var inst_27037 = cljs.core.async.put_BANG_.call(null,out,inst_27036);
var inst_27026 = inst_27030;
var state_27046__$1 = (function (){var statearr_27055 = state_27046;
(statearr_27055[(7)] = inst_27026);

(statearr_27055[(12)] = inst_27037);

return statearr_27055;
})();
var statearr_27056_27070 = state_27046__$1;
(statearr_27056_27070[(2)] = null);

(statearr_27056_27070[(1)] = (2));


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
});})(c__21862__auto___27064,out))
;
return ((function (switch__21800__auto__,c__21862__auto___27064,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21801__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21801__auto____0 = (function (){
var statearr_27060 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27060[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21801__auto__);

(statearr_27060[(1)] = (1));

return statearr_27060;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21801__auto____1 = (function (state_27046){
while(true){
var ret_value__21802__auto__ = (function (){try{while(true){
var result__21803__auto__ = switch__21800__auto__.call(null,state_27046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21803__auto__;
}
break;
}
}catch (e27061){if((e27061 instanceof Object)){
var ex__21804__auto__ = e27061;
var statearr_27062_27071 = state_27046;
(statearr_27062_27071[(5)] = ex__21804__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27072 = state_27046;
state_27046 = G__27072;
continue;
} else {
return ret_value__21802__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21801__auto__ = function(state_27046){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21801__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21801__auto____1.call(this,state_27046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21801__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21801__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21801__auto__;
})()
;})(switch__21800__auto__,c__21862__auto___27064,out))
})();
var state__21864__auto__ = (function (){var statearr_27063 = f__21863__auto__.call(null);
(statearr_27063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21862__auto___27064);

return statearr_27063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21864__auto__);
});})(c__21862__auto___27064,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__27073,p__27074){
var map__27077 = p__27073;
var map__27077__$1 = ((cljs.core.seq_QMARK_.call(null,map__27077))?cljs.core.apply.call(null,cljs.core.hash_map,map__27077):map__27077);
var opts = map__27077__$1;
var url_rewriter = cljs.core.get.call(null,map__27077__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__27078 = p__27074;
var map__27078__$1 = ((cljs.core.seq_QMARK_.call(null,map__27078))?cljs.core.apply.call(null,cljs.core.hash_map,map__27078):map__27078);
var file_msg = map__27078__$1;
var file = cljs.core.get.call(null,map__27078__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27079){
var map__27082 = p__27079;
var map__27082__$1 = ((cljs.core.seq_QMARK_.call(null,map__27082))?cljs.core.apply.call(null,cljs.core.hash_map,map__27082):map__27082);
var eval_body__$1 = cljs.core.get.call(null,map__27082__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27082__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e27083){var e = e27083;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27088,p__27089){
var map__27291 = p__27088;
var map__27291__$1 = ((cljs.core.seq_QMARK_.call(null,map__27291))?cljs.core.apply.call(null,cljs.core.hash_map,map__27291):map__27291);
var opts = map__27291__$1;
var before_jsload = cljs.core.get.call(null,map__27291__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27291__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__27291__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__27292 = p__27089;
var map__27292__$1 = ((cljs.core.seq_QMARK_.call(null,map__27292))?cljs.core.apply.call(null,cljs.core.hash_map,map__27292):map__27292);
var msg = map__27292__$1;
var files = cljs.core.get.call(null,map__27292__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__21862__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21862__auto__,map__27291,map__27291__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27292,map__27292__$1,msg,files){
return (function (){
var f__21863__auto__ = (function (){var switch__21800__auto__ = ((function (c__21862__auto__,map__27291,map__27291__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27292,map__27292__$1,msg,files){
return (function (state_27417){
var state_val_27418 = (state_27417[(1)]);
if((state_val_27418 === (7))){
var inst_27307 = (state_27417[(7)]);
var inst_27304 = (state_27417[(8)]);
var inst_27306 = (state_27417[(9)]);
var inst_27305 = (state_27417[(10)]);
var inst_27312 = cljs.core._nth.call(null,inst_27305,inst_27307);
var inst_27313 = figwheel.client.file_reloading.eval_body.call(null,inst_27312);
var inst_27314 = (inst_27307 + (1));
var tmp27419 = inst_27304;
var tmp27420 = inst_27306;
var tmp27421 = inst_27305;
var inst_27304__$1 = tmp27419;
var inst_27305__$1 = tmp27421;
var inst_27306__$1 = tmp27420;
var inst_27307__$1 = inst_27314;
var state_27417__$1 = (function (){var statearr_27422 = state_27417;
(statearr_27422[(7)] = inst_27307__$1);

(statearr_27422[(8)] = inst_27304__$1);

(statearr_27422[(9)] = inst_27306__$1);

(statearr_27422[(11)] = inst_27313);

(statearr_27422[(10)] = inst_27305__$1);

return statearr_27422;
})();
var statearr_27423_27492 = state_27417__$1;
(statearr_27423_27492[(2)] = null);

(statearr_27423_27492[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27418 === (20))){
var inst_27356 = (state_27417[(12)]);
var inst_27350 = (state_27417[(13)]);
var inst_27353 = (state_27417[(14)]);
var inst_27349 = (state_27417[(15)]);
var inst_27354 = (state_27417[(16)]);
var inst_27359 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27361 = (function (){var all_files = inst_27349;
var files_SINGLEQUOTE_ = inst_27350;
var res_SINGLEQUOTE_ = inst_27353;
var res = inst_27354;
var files_not_loaded = inst_27356;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_27356,inst_27350,inst_27353,inst_27349,inst_27354,inst_27359,state_val_27418,c__21862__auto__,map__27291,map__27291__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27292,map__27292__$1,msg,files){
return (function (p__27360){
var map__27424 = p__27360;
var map__27424__$1 = ((cljs.core.seq_QMARK_.call(null,map__27424))?cljs.core.apply.call(null,cljs.core.hash_map,map__27424):map__27424);
var namespace = cljs.core.get.call(null,map__27424__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27424__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_27356,inst_27350,inst_27353,inst_27349,inst_27354,inst_27359,state_val_27418,c__21862__auto__,map__27291,map__27291__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27292,map__27292__$1,msg,files))
})();
var inst_27362 = cljs.core.map.call(null,inst_27361,inst_27354);
var inst_27363 = cljs.core.pr_str.call(null,inst_27362);
var inst_27364 = figwheel.client.utils.log.call(null,inst_27363);
var inst_27365 = (function (){var all_files = inst_27349;
var files_SINGLEQUOTE_ = inst_27350;
var res_SINGLEQUOTE_ = inst_27353;
var res = inst_27354;
var files_not_loaded = inst_27356;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_27356,inst_27350,inst_27353,inst_27349,inst_27354,inst_27359,inst_27361,inst_27362,inst_27363,inst_27364,state_val_27418,c__21862__auto__,map__27291,map__27291__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27292,map__27292__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_27356,inst_27350,inst_27353,inst_27349,inst_27354,inst_27359,inst_27361,inst_27362,inst_27363,inst_27364,state_val_27418,c__21862__auto__,map__27291,map__27291__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27292,map__27292__$1,msg,files))
})();
var inst_27366 = setTimeout(inst_27365,(10));
var state_27417__$1 = (function (){var statearr_27425 = state_27417;
(statearr_27425[(17)] = inst_27359);

(statearr_27425[(18)] = inst_27364);

return statearr_27425;
})();
var statearr_27426_27493 = state_27417__$1;
(statearr_27426_27493[(2)] = inst_27366);

(statearr_27426_27493[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27418 === (27))){
var inst_27376 = (state_27417[(19)]);
var state_27417__$1 = state_27417;
var statearr_27427_27494 = state_27417__$1;
(statearr_27427_27494[(2)] = inst_27376);

(statearr_27427_27494[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27418 === (1))){
var inst_27296 = (state_27417[(20)]);
var inst_27293 = before_jsload.call(null,files);
var inst_27294 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27295 = (function (){return ((function (inst_27296,inst_27293,inst_27294,state_val_27418,c__21862__auto__,map__27291,map__27291__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27292,map__27292__$1,msg,files){
return (function (p1__27084_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27084_SHARP_);
});
;})(inst_27296,inst_27293,inst_27294,state_val_27418,c__21862__auto__,map__27291,map__27291__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27292,map__27292__$1,msg,files))
})();
var inst_27296__$1 = cljs.core.filter.call(null,inst_27295,files);
var inst_27297 = cljs.core.not_empty.call(null,inst_27296__$1);
var state_27417__$1 = (function (){var statearr_27428 = state_27417;
(statearr_27428[(21)] = inst_27293);

(statearr_27428[(22)] = inst_27294);

(statearr_27428[(20)] = inst_27296__$1);

return statearr_27428;
})();
if(cljs.core.truth_(inst_27297)){
var statearr_27429_27495 = state_27417__$1;
(statearr_27429_27495[(1)] = (2));

} else {
var statearr_27430_27496 = state_27417__$1;
(statearr_27430_27496[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27418 === (24))){
var state_27417__$1 = state_27417;
var statearr_27431_27497 = state_27417__$1;
(statearr_27431_27497[(2)] = null);

(statearr_27431_27497[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27418 === (4))){
var inst_27341 = (state_27417[(2)]);
var inst_27342 = (function (){return ((function (inst_27341,state_val_27418,c__21862__auto__,map__27291,map__27291__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27292,map__27292__$1,msg,files){
return (function (p1__27085_SHARP_){
var and__18075__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27085_SHARP_);
if(cljs.core.truth_(and__18075__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27085_SHARP_));
} else {
return and__18075__auto__;
}
});
;})(inst_27341,state_val_27418,c__21862__auto__,map__27291,map__27291__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27292,map__27292__$1,msg,files))
})();
var inst_27343 = cljs.core.filter.call(null,inst_27342,files);
var state_27417__$1 = (function (){var statearr_27432 = state_27417;
(statearr_27432[(23)] = inst_27341);

(statearr_27432[(24)] = inst_27343);

return statearr_27432;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_27433_27498 = state_27417__$1;
(statearr_27433_27498[(1)] = (16));

} else {
var statearr_27434_27499 = state_27417__$1;
(statearr_27434_27499[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27418 === (15))){
var inst_27331 = (state_27417[(2)]);
var state_27417__$1 = state_27417;
var statearr_27435_27500 = state_27417__$1;
(statearr_27435_27500[(2)] = inst_27331);

(statearr_27435_27500[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27418 === (21))){
var state_27417__$1 = state_27417;
var statearr_27436_27501 = state_27417__$1;
(statearr_27436_27501[(2)] = null);

(statearr_27436_27501[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27418 === (31))){
var inst_27384 = (state_27417[(25)]);
var inst_27394 = (state_27417[(2)]);
var inst_27395 = cljs.core.not_empty.call(null,inst_27384);
var state_27417__$1 = (function (){var statearr_27437 = state_27417;
(statearr_27437[(26)] = inst_27394);

return statearr_27437;
})();
if(cljs.core.truth_(inst_27395)){
var statearr_27438_27502 = state_27417__$1;
(statearr_27438_27502[(1)] = (32));

} else {
var statearr_27439_27503 = state_27417__$1;
(statearr_27439_27503[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27418 === (32))){
var inst_27384 = (state_27417[(25)]);
var inst_27397 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27384);
var inst_27398 = cljs.core.pr_str.call(null,inst_27397);
var inst_27399 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_27398)].join('');
var inst_27400 = figwheel.client.utils.log.call(null,inst_27399);
var state_27417__$1 = state_27417;
var statearr_27440_27504 = state_27417__$1;
(statearr_27440_27504[(2)] = inst_27400);

(statearr_27440_27504[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27418 === (33))){
var state_27417__$1 = state_27417;
var statearr_27441_27505 = state_27417__$1;
(statearr_27441_27505[(2)] = null);

(statearr_27441_27505[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27418 === (13))){
var inst_27317 = (state_27417[(27)]);
var inst_27321 = cljs.core.chunk_first.call(null,inst_27317);
var inst_27322 = cljs.core.chunk_rest.call(null,inst_27317);
var inst_27323 = cljs.core.count.call(null,inst_27321);
var inst_27304 = inst_27322;
var inst_27305 = inst_27321;
var inst_27306 = inst_27323;
var inst_27307 = (0);
var state_27417__$1 = (function (){var statearr_27442 = state_27417;
(statearr_27442[(7)] = inst_27307);

(statearr_27442[(8)] = inst_27304);

(statearr_27442[(9)] = inst_27306);

(statearr_27442[(10)] = inst_27305);

return statearr_27442;
})();
var statearr_27443_27506 = state_27417__$1;
(statearr_27443_27506[(2)] = null);

(statearr_27443_27506[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27418 === (22))){
var inst_27356 = (state_27417[(12)]);
var inst_27369 = (state_27417[(2)]);
var inst_27370 = cljs.core.not_empty.call(null,inst_27356);
var state_27417__$1 = (function (){var statearr_27444 = state_27417;
(statearr_27444[(28)] = inst_27369);

return statearr_27444;
})();
if(cljs.core.truth_(inst_27370)){
var statearr_27445_27507 = state_27417__$1;
(statearr_27445_27507[(1)] = (23));

} else {
var statearr_27446_27508 = state_27417__$1;
(statearr_27446_27508[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27418 === (36))){
var state_27417__$1 = state_27417;
var statearr_27447_27509 = state_27417__$1;
(statearr_27447_27509[(2)] = null);

(statearr_27447_27509[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27418 === (29))){
var inst_27383 = (state_27417[(29)]);
var inst_27388 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27383);
var inst_27389 = cljs.core.pr_str.call(null,inst_27388);
var inst_27390 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27389)].join('');
var inst_27391 = figwheel.client.utils.log.call(null,inst_27390);
var state_27417__$1 = state_27417;
var statearr_27448_27510 = state_27417__$1;
(statearr_27448_27510[(2)] = inst_27391);

(statearr_27448_27510[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27418 === (6))){
var inst_27338 = (state_27417[(2)]);
var state_27417__$1 = state_27417;
var statearr_27449_27511 = state_27417__$1;
(statearr_27449_27511[(2)] = inst_27338);

(statearr_27449_27511[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27418 === (28))){
var inst_27383 = (state_27417[(29)]);
var inst_27382 = (state_27417[(2)]);
var inst_27383__$1 = cljs.core.get.call(null,inst_27382,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27384 = cljs.core.get.call(null,inst_27382,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_27385 = cljs.core.get.call(null,inst_27382,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27386 = cljs.core.not_empty.call(null,inst_27383__$1);
var state_27417__$1 = (function (){var statearr_27450 = state_27417;
(statearr_27450[(29)] = inst_27383__$1);

(statearr_27450[(25)] = inst_27384);

(statearr_27450[(30)] = inst_27385);

return statearr_27450;
})();
if(cljs.core.truth_(inst_27386)){
var statearr_27451_27512 = state_27417__$1;
(statearr_27451_27512[(1)] = (29));

} else {
var statearr_27452_27513 = state_27417__$1;
(statearr_27452_27513[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27418 === (25))){
var inst_27415 = (state_27417[(2)]);
var state_27417__$1 = state_27417;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27417__$1,inst_27415);
} else {
if((state_val_27418 === (34))){
var inst_27385 = (state_27417[(30)]);
var inst_27403 = (state_27417[(2)]);
var inst_27404 = cljs.core.not_empty.call(null,inst_27385);
var state_27417__$1 = (function (){var statearr_27453 = state_27417;
(statearr_27453[(31)] = inst_27403);

return statearr_27453;
})();
if(cljs.core.truth_(inst_27404)){
var statearr_27454_27514 = state_27417__$1;
(statearr_27454_27514[(1)] = (35));

} else {
var statearr_27455_27515 = state_27417__$1;
(statearr_27455_27515[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27418 === (17))){
var inst_27343 = (state_27417[(24)]);
var state_27417__$1 = state_27417;
var statearr_27456_27516 = state_27417__$1;
(statearr_27456_27516[(2)] = inst_27343);

(statearr_27456_27516[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27418 === (3))){
var state_27417__$1 = state_27417;
var statearr_27457_27517 = state_27417__$1;
(statearr_27457_27517[(2)] = null);

(statearr_27457_27517[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27418 === (12))){
var inst_27334 = (state_27417[(2)]);
var state_27417__$1 = state_27417;
var statearr_27458_27518 = state_27417__$1;
(statearr_27458_27518[(2)] = inst_27334);

(statearr_27458_27518[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27418 === (2))){
var inst_27296 = (state_27417[(20)]);
var inst_27303 = cljs.core.seq.call(null,inst_27296);
var inst_27304 = inst_27303;
var inst_27305 = null;
var inst_27306 = (0);
var inst_27307 = (0);
var state_27417__$1 = (function (){var statearr_27459 = state_27417;
(statearr_27459[(7)] = inst_27307);

(statearr_27459[(8)] = inst_27304);

(statearr_27459[(9)] = inst_27306);

(statearr_27459[(10)] = inst_27305);

return statearr_27459;
})();
var statearr_27460_27519 = state_27417__$1;
(statearr_27460_27519[(2)] = null);

(statearr_27460_27519[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27418 === (23))){
var inst_27356 = (state_27417[(12)]);
var inst_27376 = (state_27417[(19)]);
var inst_27350 = (state_27417[(13)]);
var inst_27353 = (state_27417[(14)]);
var inst_27349 = (state_27417[(15)]);
var inst_27354 = (state_27417[(16)]);
var inst_27372 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27375 = (function (){var all_files = inst_27349;
var files_SINGLEQUOTE_ = inst_27350;
var res_SINGLEQUOTE_ = inst_27353;
var res = inst_27354;
var files_not_loaded = inst_27356;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_27356,inst_27376,inst_27350,inst_27353,inst_27349,inst_27354,inst_27372,state_val_27418,c__21862__auto__,map__27291,map__27291__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27292,map__27292__$1,msg,files){
return (function (p__27374){
var map__27461 = p__27374;
var map__27461__$1 = ((cljs.core.seq_QMARK_.call(null,map__27461))?cljs.core.apply.call(null,cljs.core.hash_map,map__27461):map__27461);
var meta_data = cljs.core.get.call(null,map__27461__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_27356,inst_27376,inst_27350,inst_27353,inst_27349,inst_27354,inst_27372,state_val_27418,c__21862__auto__,map__27291,map__27291__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27292,map__27292__$1,msg,files))
})();
var inst_27376__$1 = cljs.core.group_by.call(null,inst_27375,inst_27356);
var inst_27377 = cljs.core.seq_QMARK_.call(null,inst_27376__$1);
var state_27417__$1 = (function (){var statearr_27462 = state_27417;
(statearr_27462[(19)] = inst_27376__$1);

(statearr_27462[(32)] = inst_27372);

return statearr_27462;
})();
if(inst_27377){
var statearr_27463_27520 = state_27417__$1;
(statearr_27463_27520[(1)] = (26));

} else {
var statearr_27464_27521 = state_27417__$1;
(statearr_27464_27521[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27418 === (35))){
var inst_27385 = (state_27417[(30)]);
var inst_27406 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27385);
var inst_27407 = cljs.core.pr_str.call(null,inst_27406);
var inst_27408 = [cljs.core.str("not required: "),cljs.core.str(inst_27407)].join('');
var inst_27409 = figwheel.client.utils.log.call(null,inst_27408);
var state_27417__$1 = state_27417;
var statearr_27465_27522 = state_27417__$1;
(statearr_27465_27522[(2)] = inst_27409);

(statearr_27465_27522[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27418 === (19))){
var inst_27350 = (state_27417[(13)]);
var inst_27353 = (state_27417[(14)]);
var inst_27349 = (state_27417[(15)]);
var inst_27354 = (state_27417[(16)]);
var inst_27353__$1 = (state_27417[(2)]);
var inst_27354__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27353__$1);
var inst_27355 = (function (){var all_files = inst_27349;
var files_SINGLEQUOTE_ = inst_27350;
var res_SINGLEQUOTE_ = inst_27353__$1;
var res = inst_27354__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_27350,inst_27353,inst_27349,inst_27354,inst_27353__$1,inst_27354__$1,state_val_27418,c__21862__auto__,map__27291,map__27291__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27292,map__27292__$1,msg,files){
return (function (p1__27087_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27087_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_27350,inst_27353,inst_27349,inst_27354,inst_27353__$1,inst_27354__$1,state_val_27418,c__21862__auto__,map__27291,map__27291__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27292,map__27292__$1,msg,files))
})();
var inst_27356 = cljs.core.filter.call(null,inst_27355,inst_27353__$1);
var inst_27357 = cljs.core.not_empty.call(null,inst_27354__$1);
var state_27417__$1 = (function (){var statearr_27466 = state_27417;
(statearr_27466[(12)] = inst_27356);

(statearr_27466[(14)] = inst_27353__$1);

(statearr_27466[(16)] = inst_27354__$1);

return statearr_27466;
})();
if(cljs.core.truth_(inst_27357)){
var statearr_27467_27523 = state_27417__$1;
(statearr_27467_27523[(1)] = (20));

} else {
var statearr_27468_27524 = state_27417__$1;
(statearr_27468_27524[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27418 === (11))){
var state_27417__$1 = state_27417;
var statearr_27469_27525 = state_27417__$1;
(statearr_27469_27525[(2)] = null);

(statearr_27469_27525[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27418 === (9))){
var inst_27336 = (state_27417[(2)]);
var state_27417__$1 = state_27417;
var statearr_27470_27526 = state_27417__$1;
(statearr_27470_27526[(2)] = inst_27336);

(statearr_27470_27526[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27418 === (5))){
var inst_27307 = (state_27417[(7)]);
var inst_27306 = (state_27417[(9)]);
var inst_27309 = (inst_27307 < inst_27306);
var inst_27310 = inst_27309;
var state_27417__$1 = state_27417;
if(cljs.core.truth_(inst_27310)){
var statearr_27471_27527 = state_27417__$1;
(statearr_27471_27527[(1)] = (7));

} else {
var statearr_27472_27528 = state_27417__$1;
(statearr_27472_27528[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27418 === (14))){
var inst_27317 = (state_27417[(27)]);
var inst_27326 = cljs.core.first.call(null,inst_27317);
var inst_27327 = figwheel.client.file_reloading.eval_body.call(null,inst_27326);
var inst_27328 = cljs.core.next.call(null,inst_27317);
var inst_27304 = inst_27328;
var inst_27305 = null;
var inst_27306 = (0);
var inst_27307 = (0);
var state_27417__$1 = (function (){var statearr_27473 = state_27417;
(statearr_27473[(7)] = inst_27307);

(statearr_27473[(33)] = inst_27327);

(statearr_27473[(8)] = inst_27304);

(statearr_27473[(9)] = inst_27306);

(statearr_27473[(10)] = inst_27305);

return statearr_27473;
})();
var statearr_27474_27529 = state_27417__$1;
(statearr_27474_27529[(2)] = null);

(statearr_27474_27529[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27418 === (26))){
var inst_27376 = (state_27417[(19)]);
var inst_27379 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27376);
var state_27417__$1 = state_27417;
var statearr_27475_27530 = state_27417__$1;
(statearr_27475_27530[(2)] = inst_27379);

(statearr_27475_27530[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27418 === (16))){
var inst_27343 = (state_27417[(24)]);
var inst_27345 = (function (){var all_files = inst_27343;
return ((function (all_files,inst_27343,state_val_27418,c__21862__auto__,map__27291,map__27291__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27292,map__27292__$1,msg,files){
return (function (p1__27086_SHARP_){
return cljs.core.update_in.call(null,p1__27086_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_27343,state_val_27418,c__21862__auto__,map__27291,map__27291__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27292,map__27292__$1,msg,files))
})();
var inst_27346 = cljs.core.map.call(null,inst_27345,inst_27343);
var state_27417__$1 = state_27417;
var statearr_27476_27531 = state_27417__$1;
(statearr_27476_27531[(2)] = inst_27346);

(statearr_27476_27531[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27418 === (30))){
var state_27417__$1 = state_27417;
var statearr_27477_27532 = state_27417__$1;
(statearr_27477_27532[(2)] = null);

(statearr_27477_27532[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27418 === (10))){
var inst_27317 = (state_27417[(27)]);
var inst_27319 = cljs.core.chunked_seq_QMARK_.call(null,inst_27317);
var state_27417__$1 = state_27417;
if(inst_27319){
var statearr_27478_27533 = state_27417__$1;
(statearr_27478_27533[(1)] = (13));

} else {
var statearr_27479_27534 = state_27417__$1;
(statearr_27479_27534[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27418 === (18))){
var inst_27350 = (state_27417[(13)]);
var inst_27349 = (state_27417[(15)]);
var inst_27349__$1 = (state_27417[(2)]);
var inst_27350__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_27349__$1);
var inst_27351 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27350__$1);
var state_27417__$1 = (function (){var statearr_27480 = state_27417;
(statearr_27480[(13)] = inst_27350__$1);

(statearr_27480[(15)] = inst_27349__$1);

return statearr_27480;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27417__$1,(19),inst_27351);
} else {
if((state_val_27418 === (37))){
var inst_27412 = (state_27417[(2)]);
var state_27417__$1 = state_27417;
var statearr_27481_27535 = state_27417__$1;
(statearr_27481_27535[(2)] = inst_27412);

(statearr_27481_27535[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27418 === (8))){
var inst_27304 = (state_27417[(8)]);
var inst_27317 = (state_27417[(27)]);
var inst_27317__$1 = cljs.core.seq.call(null,inst_27304);
var state_27417__$1 = (function (){var statearr_27482 = state_27417;
(statearr_27482[(27)] = inst_27317__$1);

return statearr_27482;
})();
if(inst_27317__$1){
var statearr_27483_27536 = state_27417__$1;
(statearr_27483_27536[(1)] = (10));

} else {
var statearr_27484_27537 = state_27417__$1;
(statearr_27484_27537[(1)] = (11));

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
});})(c__21862__auto__,map__27291,map__27291__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27292,map__27292__$1,msg,files))
;
return ((function (switch__21800__auto__,c__21862__auto__,map__27291,map__27291__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27292,map__27292__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21801__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21801__auto____0 = (function (){
var statearr_27488 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27488[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21801__auto__);

(statearr_27488[(1)] = (1));

return statearr_27488;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21801__auto____1 = (function (state_27417){
while(true){
var ret_value__21802__auto__ = (function (){try{while(true){
var result__21803__auto__ = switch__21800__auto__.call(null,state_27417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21803__auto__;
}
break;
}
}catch (e27489){if((e27489 instanceof Object)){
var ex__21804__auto__ = e27489;
var statearr_27490_27538 = state_27417;
(statearr_27490_27538[(5)] = ex__21804__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27539 = state_27417;
state_27417 = G__27539;
continue;
} else {
return ret_value__21802__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21801__auto__ = function(state_27417){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21801__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21801__auto____1.call(this,state_27417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21801__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21801__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21801__auto__;
})()
;})(switch__21800__auto__,c__21862__auto__,map__27291,map__27291__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27292,map__27292__$1,msg,files))
})();
var state__21864__auto__ = (function (){var statearr_27491 = f__21863__auto__.call(null);
(statearr_27491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21862__auto__);

return statearr_27491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21864__auto__);
});})(c__21862__auto__,map__27291,map__27291__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__27292,map__27292__$1,msg,files))
);

return c__21862__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27542,link){
var map__27544 = p__27542;
var map__27544__$1 = ((cljs.core.seq_QMARK_.call(null,map__27544))?cljs.core.apply.call(null,cljs.core.hash_map,map__27544):map__27544);
var file = cljs.core.get.call(null,map__27544__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4423__auto__ = link.href;
if(cljs.core.truth_(temp__4423__auto__)){
var link_href = temp__4423__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4423__auto__,map__27544,map__27544__$1,file){
return (function (p1__27540_SHARP_,p2__27541_SHARP_){
if(cljs.core._EQ_.call(null,p1__27540_SHARP_,p2__27541_SHARP_)){
return p1__27540_SHARP_;
} else {
return false;
}
});})(link_href,temp__4423__auto__,map__27544,map__27544__$1,file))
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
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27548){
var map__27549 = p__27548;
var map__27549__$1 = ((cljs.core.seq_QMARK_.call(null,map__27549))?cljs.core.apply.call(null,cljs.core.hash_map,map__27549):map__27549);
var match_length = cljs.core.get.call(null,map__27549__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27549__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27545_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27545_SHARP_);
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
var G__27551 = arguments.length;
switch (G__27551) {
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
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27553){
var map__27555 = p__27553;
var map__27555__$1 = ((cljs.core.seq_QMARK_.call(null,map__27555))?cljs.core.apply.call(null,cljs.core.hash_map,map__27555):map__27555);
var f_data = map__27555__$1;
var file = cljs.core.get.call(null,map__27555__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__27555__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
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
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27556,files_msg){
var map__27578 = p__27556;
var map__27578__$1 = ((cljs.core.seq_QMARK_.call(null,map__27578))?cljs.core.apply.call(null,cljs.core.hash_map,map__27578):map__27578);
var opts = map__27578__$1;
var on_cssload = cljs.core.get.call(null,map__27578__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27579_27599 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27580_27600 = null;
var count__27581_27601 = (0);
var i__27582_27602 = (0);
while(true){
if((i__27582_27602 < count__27581_27601)){
var f_27603 = cljs.core._nth.call(null,chunk__27580_27600,i__27582_27602);
figwheel.client.file_reloading.reload_css_file.call(null,f_27603);

var G__27604 = seq__27579_27599;
var G__27605 = chunk__27580_27600;
var G__27606 = count__27581_27601;
var G__27607 = (i__27582_27602 + (1));
seq__27579_27599 = G__27604;
chunk__27580_27600 = G__27605;
count__27581_27601 = G__27606;
i__27582_27602 = G__27607;
continue;
} else {
var temp__4423__auto___27608 = cljs.core.seq.call(null,seq__27579_27599);
if(temp__4423__auto___27608){
var seq__27579_27609__$1 = temp__4423__auto___27608;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27579_27609__$1)){
var c__18872__auto___27610 = cljs.core.chunk_first.call(null,seq__27579_27609__$1);
var G__27611 = cljs.core.chunk_rest.call(null,seq__27579_27609__$1);
var G__27612 = c__18872__auto___27610;
var G__27613 = cljs.core.count.call(null,c__18872__auto___27610);
var G__27614 = (0);
seq__27579_27599 = G__27611;
chunk__27580_27600 = G__27612;
count__27581_27601 = G__27613;
i__27582_27602 = G__27614;
continue;
} else {
var f_27615 = cljs.core.first.call(null,seq__27579_27609__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27615);

var G__27616 = cljs.core.next.call(null,seq__27579_27609__$1);
var G__27617 = null;
var G__27618 = (0);
var G__27619 = (0);
seq__27579_27599 = G__27616;
chunk__27580_27600 = G__27617;
count__27581_27601 = G__27618;
i__27582_27602 = G__27619;
continue;
}
} else {
}
}
break;
}

var c__21862__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21862__auto__,map__27578,map__27578__$1,opts,on_cssload){
return (function (){
var f__21863__auto__ = (function (){var switch__21800__auto__ = ((function (c__21862__auto__,map__27578,map__27578__$1,opts,on_cssload){
return (function (state_27589){
var state_val_27590 = (state_27589[(1)]);
if((state_val_27590 === (1))){
var inst_27583 = cljs.core.async.timeout.call(null,(100));
var state_27589__$1 = state_27589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27589__$1,(2),inst_27583);
} else {
if((state_val_27590 === (2))){
var inst_27585 = (state_27589[(2)]);
var inst_27586 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_27587 = on_cssload.call(null,inst_27586);
var state_27589__$1 = (function (){var statearr_27591 = state_27589;
(statearr_27591[(7)] = inst_27585);

return statearr_27591;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27589__$1,inst_27587);
} else {
return null;
}
}
});})(c__21862__auto__,map__27578,map__27578__$1,opts,on_cssload))
;
return ((function (switch__21800__auto__,c__21862__auto__,map__27578,map__27578__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21801__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21801__auto____0 = (function (){
var statearr_27595 = [null,null,null,null,null,null,null,null];
(statearr_27595[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__21801__auto__);

(statearr_27595[(1)] = (1));

return statearr_27595;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__21801__auto____1 = (function (state_27589){
while(true){
var ret_value__21802__auto__ = (function (){try{while(true){
var result__21803__auto__ = switch__21800__auto__.call(null,state_27589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21803__auto__;
}
break;
}
}catch (e27596){if((e27596 instanceof Object)){
var ex__21804__auto__ = e27596;
var statearr_27597_27620 = state_27589;
(statearr_27597_27620[(5)] = ex__21804__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27621 = state_27589;
state_27589 = G__27621;
continue;
} else {
return ret_value__21802__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__21801__auto__ = function(state_27589){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21801__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21801__auto____1.call(this,state_27589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21801__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__21801__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__21801__auto__;
})()
;})(switch__21800__auto__,c__21862__auto__,map__27578,map__27578__$1,opts,on_cssload))
})();
var state__21864__auto__ = (function (){var statearr_27598 = f__21863__auto__.call(null);
(statearr_27598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21862__auto__);

return statearr_27598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21864__auto__);
});})(c__21862__auto__,map__27578,map__27578__$1,opts,on_cssload))
);

return c__21862__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map