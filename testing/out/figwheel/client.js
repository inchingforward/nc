// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23996__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__23996 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23997__i = 0, G__23997__a = new Array(arguments.length -  0);
while (G__23997__i < G__23997__a.length) {G__23997__a[G__23997__i] = arguments[G__23997__i + 0]; ++G__23997__i;}
  args = new cljs.core.IndexedSeq(G__23997__a,0);
} 
return G__23996__delegate.call(this,args);};
G__23996.cljs$lang$maxFixedArity = 0;
G__23996.cljs$lang$applyTo = (function (arglist__23998){
var args = cljs.core.seq(arglist__23998);
return G__23996__delegate(args);
});
G__23996.cljs$core$IFn$_invoke$arity$variadic = G__23996__delegate;
return G__23996;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__23999){
var map__24001 = p__23999;
var map__24001__$1 = ((cljs.core.seq_QMARK_.call(null,map__24001))?cljs.core.apply.call(null,cljs.core.hash_map,map__24001):map__24001);
var message = cljs.core.get.call(null,map__24001__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__24001__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16038__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16038__auto__)){
return or__16038__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16026__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16026__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16026__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19048__auto___24130 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19048__auto___24130,ch){
return (function (){
var f__19049__auto__ = (function (){var switch__18986__auto__ = ((function (c__19048__auto___24130,ch){
return (function (state_24104){
var state_val_24105 = (state_24104[(1)]);
if((state_val_24105 === (7))){
var inst_24100 = (state_24104[(2)]);
var state_24104__$1 = state_24104;
var statearr_24106_24131 = state_24104__$1;
(statearr_24106_24131[(2)] = inst_24100);

(statearr_24106_24131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24105 === (1))){
var state_24104__$1 = state_24104;
var statearr_24107_24132 = state_24104__$1;
(statearr_24107_24132[(2)] = null);

(statearr_24107_24132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24105 === (4))){
var inst_24068 = (state_24104[(7)]);
var inst_24068__$1 = (state_24104[(2)]);
var state_24104__$1 = (function (){var statearr_24108 = state_24104;
(statearr_24108[(7)] = inst_24068__$1);

return statearr_24108;
})();
if(cljs.core.truth_(inst_24068__$1)){
var statearr_24109_24133 = state_24104__$1;
(statearr_24109_24133[(1)] = (5));

} else {
var statearr_24110_24134 = state_24104__$1;
(statearr_24110_24134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24105 === (13))){
var state_24104__$1 = state_24104;
var statearr_24111_24135 = state_24104__$1;
(statearr_24111_24135[(2)] = null);

(statearr_24111_24135[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24105 === (6))){
var state_24104__$1 = state_24104;
var statearr_24112_24136 = state_24104__$1;
(statearr_24112_24136[(2)] = null);

(statearr_24112_24136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24105 === (3))){
var inst_24102 = (state_24104[(2)]);
var state_24104__$1 = state_24104;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24104__$1,inst_24102);
} else {
if((state_val_24105 === (12))){
var inst_24075 = (state_24104[(8)]);
var inst_24088 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24075);
var inst_24089 = cljs.core.first.call(null,inst_24088);
var inst_24090 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_24089);
var inst_24091 = console.warn("Figwheel: Not loading code with warnings - ",inst_24090);
var state_24104__$1 = state_24104;
var statearr_24113_24137 = state_24104__$1;
(statearr_24113_24137[(2)] = inst_24091);

(statearr_24113_24137[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24105 === (2))){
var state_24104__$1 = state_24104;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24104__$1,(4),ch);
} else {
if((state_val_24105 === (11))){
var inst_24084 = (state_24104[(2)]);
var state_24104__$1 = state_24104;
var statearr_24114_24138 = state_24104__$1;
(statearr_24114_24138[(2)] = inst_24084);

(statearr_24114_24138[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24105 === (9))){
var inst_24074 = (state_24104[(9)]);
var inst_24086 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_24074,opts);
var state_24104__$1 = state_24104;
if(cljs.core.truth_(inst_24086)){
var statearr_24115_24139 = state_24104__$1;
(statearr_24115_24139[(1)] = (12));

} else {
var statearr_24116_24140 = state_24104__$1;
(statearr_24116_24140[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24105 === (5))){
var inst_24068 = (state_24104[(7)]);
var inst_24074 = (state_24104[(9)]);
var inst_24070 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_24071 = (new cljs.core.PersistentArrayMap(null,2,inst_24070,null));
var inst_24072 = (new cljs.core.PersistentHashSet(null,inst_24071,null));
var inst_24073 = figwheel.client.focus_msgs.call(null,inst_24072,inst_24068);
var inst_24074__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_24073);
var inst_24075 = cljs.core.first.call(null,inst_24073);
var inst_24076 = figwheel.client.reload_file_state_QMARK_.call(null,inst_24074__$1,opts);
var state_24104__$1 = (function (){var statearr_24117 = state_24104;
(statearr_24117[(9)] = inst_24074__$1);

(statearr_24117[(8)] = inst_24075);

return statearr_24117;
})();
if(cljs.core.truth_(inst_24076)){
var statearr_24118_24141 = state_24104__$1;
(statearr_24118_24141[(1)] = (8));

} else {
var statearr_24119_24142 = state_24104__$1;
(statearr_24119_24142[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24105 === (14))){
var inst_24094 = (state_24104[(2)]);
var state_24104__$1 = state_24104;
var statearr_24120_24143 = state_24104__$1;
(statearr_24120_24143[(2)] = inst_24094);

(statearr_24120_24143[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24105 === (10))){
var inst_24096 = (state_24104[(2)]);
var state_24104__$1 = (function (){var statearr_24121 = state_24104;
(statearr_24121[(10)] = inst_24096);

return statearr_24121;
})();
var statearr_24122_24144 = state_24104__$1;
(statearr_24122_24144[(2)] = null);

(statearr_24122_24144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24105 === (8))){
var inst_24075 = (state_24104[(8)]);
var inst_24078 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24079 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_24075);
var inst_24080 = cljs.core.async.timeout.call(null,(1000));
var inst_24081 = [inst_24079,inst_24080];
var inst_24082 = (new cljs.core.PersistentVector(null,2,(5),inst_24078,inst_24081,null));
var state_24104__$1 = state_24104;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24104__$1,(11),inst_24082);
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
});})(c__19048__auto___24130,ch))
;
return ((function (switch__18986__auto__,c__19048__auto___24130,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__18987__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__18987__auto____0 = (function (){
var statearr_24126 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24126[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__18987__auto__);

(statearr_24126[(1)] = (1));

return statearr_24126;
});
var figwheel$client$file_reloader_plugin_$_state_machine__18987__auto____1 = (function (state_24104){
while(true){
var ret_value__18988__auto__ = (function (){try{while(true){
var result__18989__auto__ = switch__18986__auto__.call(null,state_24104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18989__auto__;
}
break;
}
}catch (e24127){if((e24127 instanceof Object)){
var ex__18990__auto__ = e24127;
var statearr_24128_24145 = state_24104;
(statearr_24128_24145[(5)] = ex__18990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24146 = state_24104;
state_24104 = G__24146;
continue;
} else {
return ret_value__18988__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__18987__auto__ = function(state_24104){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__18987__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__18987__auto____1.call(this,state_24104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__18987__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__18987__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__18987__auto__;
})()
;})(switch__18986__auto__,c__19048__auto___24130,ch))
})();
var state__19050__auto__ = (function (){var statearr_24129 = f__19049__auto__.call(null);
(statearr_24129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19048__auto___24130);

return statearr_24129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19050__auto__);
});})(c__19048__auto___24130,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__24147_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24147_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_24154 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_24154){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_24152 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_24153 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_24152,_STAR_print_newline_STAR_24153,base_path_24154){
return (function() { 
var G__24155__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24155 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24156__i = 0, G__24156__a = new Array(arguments.length -  0);
while (G__24156__i < G__24156__a.length) {G__24156__a[G__24156__i] = arguments[G__24156__i + 0]; ++G__24156__i;}
  args = new cljs.core.IndexedSeq(G__24156__a,0);
} 
return G__24155__delegate.call(this,args);};
G__24155.cljs$lang$maxFixedArity = 0;
G__24155.cljs$lang$applyTo = (function (arglist__24157){
var args = cljs.core.seq(arglist__24157);
return G__24155__delegate(args);
});
G__24155.cljs$core$IFn$_invoke$arity$variadic = G__24155__delegate;
return G__24155;
})()
;})(_STAR_print_fn_STAR_24152,_STAR_print_newline_STAR_24153,base_path_24154))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24153;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24152;
}}catch (e24151){if((e24151 instanceof Error)){
var e = e24151;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_24154], null));
} else {
var e = e24151;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_24154))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__24158){
var map__24163 = p__24158;
var map__24163__$1 = ((cljs.core.seq_QMARK_.call(null,map__24163))?cljs.core.apply.call(null,cljs.core.hash_map,map__24163):map__24163);
var opts = map__24163__$1;
var build_id = cljs.core.get.call(null,map__24163__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__24163,map__24163__$1,opts,build_id){
return (function (p__24164){
var vec__24165 = p__24164;
var map__24166 = cljs.core.nth.call(null,vec__24165,(0),null);
var map__24166__$1 = ((cljs.core.seq_QMARK_.call(null,map__24166))?cljs.core.apply.call(null,cljs.core.hash_map,map__24166):map__24166);
var msg = map__24166__$1;
var msg_name = cljs.core.get.call(null,map__24166__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24165,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__24165,map__24166,map__24166__$1,msg,msg_name,_,map__24163,map__24163__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24165,map__24166,map__24166__$1,msg,msg_name,_,map__24163,map__24163__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__24163,map__24163__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__24170){
var vec__24171 = p__24170;
var map__24172 = cljs.core.nth.call(null,vec__24171,(0),null);
var map__24172__$1 = ((cljs.core.seq_QMARK_.call(null,map__24172))?cljs.core.apply.call(null,cljs.core.hash_map,map__24172):map__24172);
var msg = map__24172__$1;
var msg_name = cljs.core.get.call(null,map__24172__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24171,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__24173){
var map__24181 = p__24173;
var map__24181__$1 = ((cljs.core.seq_QMARK_.call(null,map__24181))?cljs.core.apply.call(null,cljs.core.hash_map,map__24181):map__24181);
var on_compile_warning = cljs.core.get.call(null,map__24181__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__24181__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__24181,map__24181__$1,on_compile_warning,on_compile_fail){
return (function (p__24182){
var vec__24183 = p__24182;
var map__24184 = cljs.core.nth.call(null,vec__24183,(0),null);
var map__24184__$1 = ((cljs.core.seq_QMARK_.call(null,map__24184))?cljs.core.apply.call(null,cljs.core.hash_map,map__24184):map__24184);
var msg = map__24184__$1;
var msg_name = cljs.core.get.call(null,map__24184__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24183,(1));
var pred__24185 = cljs.core._EQ_;
var expr__24186 = msg_name;
if(cljs.core.truth_(pred__24185.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__24186))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__24185.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24186))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__24181,map__24181__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19048__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19048__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19049__auto__ = (function (){var switch__18986__auto__ = ((function (c__19048__auto__,msg_hist,msg_names,msg){
return (function (state_24387){
var state_val_24388 = (state_24387[(1)]);
if((state_val_24388 === (7))){
var inst_24321 = (state_24387[(2)]);
var state_24387__$1 = state_24387;
var statearr_24389_24430 = state_24387__$1;
(statearr_24389_24430[(2)] = inst_24321);

(statearr_24389_24430[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (20))){
var inst_24349 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24387__$1 = state_24387;
if(cljs.core.truth_(inst_24349)){
var statearr_24390_24431 = state_24387__$1;
(statearr_24390_24431[(1)] = (22));

} else {
var statearr_24391_24432 = state_24387__$1;
(statearr_24391_24432[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (27))){
var inst_24361 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24362 = figwheel.client.heads_up.display_warning.call(null,inst_24361);
var state_24387__$1 = state_24387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24387__$1,(30),inst_24362);
} else {
if((state_val_24388 === (1))){
var inst_24309 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24387__$1 = state_24387;
if(cljs.core.truth_(inst_24309)){
var statearr_24392_24433 = state_24387__$1;
(statearr_24392_24433[(1)] = (2));

} else {
var statearr_24393_24434 = state_24387__$1;
(statearr_24393_24434[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (24))){
var inst_24377 = (state_24387[(2)]);
var state_24387__$1 = state_24387;
var statearr_24394_24435 = state_24387__$1;
(statearr_24394_24435[(2)] = inst_24377);

(statearr_24394_24435[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (4))){
var inst_24385 = (state_24387[(2)]);
var state_24387__$1 = state_24387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24387__$1,inst_24385);
} else {
if((state_val_24388 === (15))){
var inst_24337 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24338 = figwheel.client.format_messages.call(null,inst_24337);
var inst_24339 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24340 = figwheel.client.heads_up.display_error.call(null,inst_24338,inst_24339);
var state_24387__$1 = state_24387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24387__$1,(18),inst_24340);
} else {
if((state_val_24388 === (21))){
var inst_24379 = (state_24387[(2)]);
var state_24387__$1 = state_24387;
var statearr_24395_24436 = state_24387__$1;
(statearr_24395_24436[(2)] = inst_24379);

(statearr_24395_24436[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (31))){
var inst_24368 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24387__$1 = state_24387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24387__$1,(34),inst_24368);
} else {
if((state_val_24388 === (32))){
var state_24387__$1 = state_24387;
var statearr_24396_24437 = state_24387__$1;
(statearr_24396_24437[(2)] = null);

(statearr_24396_24437[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (33))){
var inst_24373 = (state_24387[(2)]);
var state_24387__$1 = state_24387;
var statearr_24397_24438 = state_24387__$1;
(statearr_24397_24438[(2)] = inst_24373);

(statearr_24397_24438[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (13))){
var inst_24327 = (state_24387[(2)]);
var inst_24328 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24329 = figwheel.client.format_messages.call(null,inst_24328);
var inst_24330 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24331 = figwheel.client.heads_up.display_error.call(null,inst_24329,inst_24330);
var state_24387__$1 = (function (){var statearr_24398 = state_24387;
(statearr_24398[(7)] = inst_24327);

return statearr_24398;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24387__$1,(14),inst_24331);
} else {
if((state_val_24388 === (22))){
var inst_24351 = figwheel.client.heads_up.clear.call(null);
var state_24387__$1 = state_24387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24387__$1,(25),inst_24351);
} else {
if((state_val_24388 === (29))){
var inst_24375 = (state_24387[(2)]);
var state_24387__$1 = state_24387;
var statearr_24399_24439 = state_24387__$1;
(statearr_24399_24439[(2)] = inst_24375);

(statearr_24399_24439[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (6))){
var inst_24317 = figwheel.client.heads_up.clear.call(null);
var state_24387__$1 = state_24387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24387__$1,(9),inst_24317);
} else {
if((state_val_24388 === (28))){
var inst_24366 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24387__$1 = state_24387;
if(cljs.core.truth_(inst_24366)){
var statearr_24400_24440 = state_24387__$1;
(statearr_24400_24440[(1)] = (31));

} else {
var statearr_24401_24441 = state_24387__$1;
(statearr_24401_24441[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (25))){
var inst_24353 = (state_24387[(2)]);
var inst_24354 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24355 = figwheel.client.heads_up.display_warning.call(null,inst_24354);
var state_24387__$1 = (function (){var statearr_24402 = state_24387;
(statearr_24402[(8)] = inst_24353);

return statearr_24402;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24387__$1,(26),inst_24355);
} else {
if((state_val_24388 === (34))){
var inst_24370 = (state_24387[(2)]);
var state_24387__$1 = state_24387;
var statearr_24403_24442 = state_24387__$1;
(statearr_24403_24442[(2)] = inst_24370);

(statearr_24403_24442[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (17))){
var inst_24381 = (state_24387[(2)]);
var state_24387__$1 = state_24387;
var statearr_24404_24443 = state_24387__$1;
(statearr_24404_24443[(2)] = inst_24381);

(statearr_24404_24443[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (3))){
var inst_24323 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24387__$1 = state_24387;
if(cljs.core.truth_(inst_24323)){
var statearr_24405_24444 = state_24387__$1;
(statearr_24405_24444[(1)] = (10));

} else {
var statearr_24406_24445 = state_24387__$1;
(statearr_24406_24445[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (12))){
var inst_24383 = (state_24387[(2)]);
var state_24387__$1 = state_24387;
var statearr_24407_24446 = state_24387__$1;
(statearr_24407_24446[(2)] = inst_24383);

(statearr_24407_24446[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (2))){
var inst_24311 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_24387__$1 = state_24387;
if(cljs.core.truth_(inst_24311)){
var statearr_24408_24447 = state_24387__$1;
(statearr_24408_24447[(1)] = (5));

} else {
var statearr_24409_24448 = state_24387__$1;
(statearr_24409_24448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (23))){
var inst_24359 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24387__$1 = state_24387;
if(cljs.core.truth_(inst_24359)){
var statearr_24410_24449 = state_24387__$1;
(statearr_24410_24449[(1)] = (27));

} else {
var statearr_24411_24450 = state_24387__$1;
(statearr_24411_24450[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (19))){
var inst_24346 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24347 = figwheel.client.heads_up.append_message.call(null,inst_24346);
var state_24387__$1 = state_24387;
var statearr_24412_24451 = state_24387__$1;
(statearr_24412_24451[(2)] = inst_24347);

(statearr_24412_24451[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (11))){
var inst_24335 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24387__$1 = state_24387;
if(cljs.core.truth_(inst_24335)){
var statearr_24413_24452 = state_24387__$1;
(statearr_24413_24452[(1)] = (15));

} else {
var statearr_24414_24453 = state_24387__$1;
(statearr_24414_24453[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (9))){
var inst_24319 = (state_24387[(2)]);
var state_24387__$1 = state_24387;
var statearr_24415_24454 = state_24387__$1;
(statearr_24415_24454[(2)] = inst_24319);

(statearr_24415_24454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (5))){
var inst_24313 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24387__$1 = state_24387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24387__$1,(8),inst_24313);
} else {
if((state_val_24388 === (14))){
var inst_24333 = (state_24387[(2)]);
var state_24387__$1 = state_24387;
var statearr_24416_24455 = state_24387__$1;
(statearr_24416_24455[(2)] = inst_24333);

(statearr_24416_24455[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (26))){
var inst_24357 = (state_24387[(2)]);
var state_24387__$1 = state_24387;
var statearr_24417_24456 = state_24387__$1;
(statearr_24417_24456[(2)] = inst_24357);

(statearr_24417_24456[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (16))){
var inst_24344 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24387__$1 = state_24387;
if(cljs.core.truth_(inst_24344)){
var statearr_24418_24457 = state_24387__$1;
(statearr_24418_24457[(1)] = (19));

} else {
var statearr_24419_24458 = state_24387__$1;
(statearr_24419_24458[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (30))){
var inst_24364 = (state_24387[(2)]);
var state_24387__$1 = state_24387;
var statearr_24420_24459 = state_24387__$1;
(statearr_24420_24459[(2)] = inst_24364);

(statearr_24420_24459[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (10))){
var inst_24325 = figwheel.client.heads_up.clear.call(null);
var state_24387__$1 = state_24387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24387__$1,(13),inst_24325);
} else {
if((state_val_24388 === (18))){
var inst_24342 = (state_24387[(2)]);
var state_24387__$1 = state_24387;
var statearr_24421_24460 = state_24387__$1;
(statearr_24421_24460[(2)] = inst_24342);

(statearr_24421_24460[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24388 === (8))){
var inst_24315 = (state_24387[(2)]);
var state_24387__$1 = state_24387;
var statearr_24422_24461 = state_24387__$1;
(statearr_24422_24461[(2)] = inst_24315);

(statearr_24422_24461[(1)] = (7));


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
});})(c__19048__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18986__auto__,c__19048__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18987__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18987__auto____0 = (function (){
var statearr_24426 = [null,null,null,null,null,null,null,null,null];
(statearr_24426[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18987__auto__);

(statearr_24426[(1)] = (1));

return statearr_24426;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18987__auto____1 = (function (state_24387){
while(true){
var ret_value__18988__auto__ = (function (){try{while(true){
var result__18989__auto__ = switch__18986__auto__.call(null,state_24387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18989__auto__;
}
break;
}
}catch (e24427){if((e24427 instanceof Object)){
var ex__18990__auto__ = e24427;
var statearr_24428_24462 = state_24387;
(statearr_24428_24462[(5)] = ex__18990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24463 = state_24387;
state_24387 = G__24463;
continue;
} else {
return ret_value__18988__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18987__auto__ = function(state_24387){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18987__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18987__auto____1.call(this,state_24387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18987__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18987__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18987__auto__;
})()
;})(switch__18986__auto__,c__19048__auto__,msg_hist,msg_names,msg))
})();
var state__19050__auto__ = (function (){var statearr_24429 = f__19049__auto__.call(null);
(statearr_24429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19048__auto__);

return statearr_24429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19050__auto__);
});})(c__19048__auto__,msg_hist,msg_names,msg))
);

return c__19048__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19048__auto___24526 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19048__auto___24526,ch){
return (function (){
var f__19049__auto__ = (function (){var switch__18986__auto__ = ((function (c__19048__auto___24526,ch){
return (function (state_24509){
var state_val_24510 = (state_24509[(1)]);
if((state_val_24510 === (1))){
var state_24509__$1 = state_24509;
var statearr_24511_24527 = state_24509__$1;
(statearr_24511_24527[(2)] = null);

(statearr_24511_24527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24510 === (2))){
var state_24509__$1 = state_24509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24509__$1,(4),ch);
} else {
if((state_val_24510 === (3))){
var inst_24507 = (state_24509[(2)]);
var state_24509__$1 = state_24509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24509__$1,inst_24507);
} else {
if((state_val_24510 === (4))){
var inst_24497 = (state_24509[(7)]);
var inst_24497__$1 = (state_24509[(2)]);
var state_24509__$1 = (function (){var statearr_24512 = state_24509;
(statearr_24512[(7)] = inst_24497__$1);

return statearr_24512;
})();
if(cljs.core.truth_(inst_24497__$1)){
var statearr_24513_24528 = state_24509__$1;
(statearr_24513_24528[(1)] = (5));

} else {
var statearr_24514_24529 = state_24509__$1;
(statearr_24514_24529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24510 === (5))){
var inst_24497 = (state_24509[(7)]);
var inst_24499 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24497);
var state_24509__$1 = state_24509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24509__$1,(8),inst_24499);
} else {
if((state_val_24510 === (6))){
var state_24509__$1 = state_24509;
var statearr_24515_24530 = state_24509__$1;
(statearr_24515_24530[(2)] = null);

(statearr_24515_24530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24510 === (7))){
var inst_24505 = (state_24509[(2)]);
var state_24509__$1 = state_24509;
var statearr_24516_24531 = state_24509__$1;
(statearr_24516_24531[(2)] = inst_24505);

(statearr_24516_24531[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24510 === (8))){
var inst_24501 = (state_24509[(2)]);
var state_24509__$1 = (function (){var statearr_24517 = state_24509;
(statearr_24517[(8)] = inst_24501);

return statearr_24517;
})();
var statearr_24518_24532 = state_24509__$1;
(statearr_24518_24532[(2)] = null);

(statearr_24518_24532[(1)] = (2));


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
});})(c__19048__auto___24526,ch))
;
return ((function (switch__18986__auto__,c__19048__auto___24526,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__18987__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__18987__auto____0 = (function (){
var statearr_24522 = [null,null,null,null,null,null,null,null,null];
(statearr_24522[(0)] = figwheel$client$heads_up_plugin_$_state_machine__18987__auto__);

(statearr_24522[(1)] = (1));

return statearr_24522;
});
var figwheel$client$heads_up_plugin_$_state_machine__18987__auto____1 = (function (state_24509){
while(true){
var ret_value__18988__auto__ = (function (){try{while(true){
var result__18989__auto__ = switch__18986__auto__.call(null,state_24509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18989__auto__;
}
break;
}
}catch (e24523){if((e24523 instanceof Object)){
var ex__18990__auto__ = e24523;
var statearr_24524_24533 = state_24509;
(statearr_24524_24533[(5)] = ex__18990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24534 = state_24509;
state_24509 = G__24534;
continue;
} else {
return ret_value__18988__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__18987__auto__ = function(state_24509){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__18987__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__18987__auto____1.call(this,state_24509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__18987__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__18987__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__18987__auto__;
})()
;})(switch__18986__auto__,c__19048__auto___24526,ch))
})();
var state__19050__auto__ = (function (){var statearr_24525 = f__19049__auto__.call(null);
(statearr_24525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19048__auto___24526);

return statearr_24525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19050__auto__);
});})(c__19048__auto___24526,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19048__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19048__auto__){
return (function (){
var f__19049__auto__ = (function (){var switch__18986__auto__ = ((function (c__19048__auto__){
return (function (state_24555){
var state_val_24556 = (state_24555[(1)]);
if((state_val_24556 === (1))){
var inst_24550 = cljs.core.async.timeout.call(null,(3000));
var state_24555__$1 = state_24555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24555__$1,(2),inst_24550);
} else {
if((state_val_24556 === (2))){
var inst_24552 = (state_24555[(2)]);
var inst_24553 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24555__$1 = (function (){var statearr_24557 = state_24555;
(statearr_24557[(7)] = inst_24552);

return statearr_24557;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24555__$1,inst_24553);
} else {
return null;
}
}
});})(c__19048__auto__))
;
return ((function (switch__18986__auto__,c__19048__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__18987__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__18987__auto____0 = (function (){
var statearr_24561 = [null,null,null,null,null,null,null,null];
(statearr_24561[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__18987__auto__);

(statearr_24561[(1)] = (1));

return statearr_24561;
});
var figwheel$client$enforce_project_plugin_$_state_machine__18987__auto____1 = (function (state_24555){
while(true){
var ret_value__18988__auto__ = (function (){try{while(true){
var result__18989__auto__ = switch__18986__auto__.call(null,state_24555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18989__auto__;
}
break;
}
}catch (e24562){if((e24562 instanceof Object)){
var ex__18990__auto__ = e24562;
var statearr_24563_24565 = state_24555;
(statearr_24563_24565[(5)] = ex__18990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24566 = state_24555;
state_24555 = G__24566;
continue;
} else {
return ret_value__18988__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__18987__auto__ = function(state_24555){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__18987__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__18987__auto____1.call(this,state_24555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__18987__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__18987__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__18987__auto__;
})()
;})(switch__18986__auto__,c__19048__auto__))
})();
var state__19050__auto__ = (function (){var statearr_24564 = f__19049__auto__.call(null);
(statearr_24564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19048__auto__);

return statearr_24564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19050__auto__);
});})(c__19048__auto__))
);

return c__19048__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24567){
var map__24573 = p__24567;
var map__24573__$1 = ((cljs.core.seq_QMARK_.call(null,map__24573))?cljs.core.apply.call(null,cljs.core.hash_map,map__24573):map__24573);
var ed = map__24573__$1;
var formatted_exception = cljs.core.get.call(null,map__24573__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24573__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24573__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24574_24578 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24575_24579 = null;
var count__24576_24580 = (0);
var i__24577_24581 = (0);
while(true){
if((i__24577_24581 < count__24576_24580)){
var msg_24582 = cljs.core._nth.call(null,chunk__24575_24579,i__24577_24581);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24582);

var G__24583 = seq__24574_24578;
var G__24584 = chunk__24575_24579;
var G__24585 = count__24576_24580;
var G__24586 = (i__24577_24581 + (1));
seq__24574_24578 = G__24583;
chunk__24575_24579 = G__24584;
count__24576_24580 = G__24585;
i__24577_24581 = G__24586;
continue;
} else {
var temp__4423__auto___24587 = cljs.core.seq.call(null,seq__24574_24578);
if(temp__4423__auto___24587){
var seq__24574_24588__$1 = temp__4423__auto___24587;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24574_24588__$1)){
var c__16823__auto___24589 = cljs.core.chunk_first.call(null,seq__24574_24588__$1);
var G__24590 = cljs.core.chunk_rest.call(null,seq__24574_24588__$1);
var G__24591 = c__16823__auto___24589;
var G__24592 = cljs.core.count.call(null,c__16823__auto___24589);
var G__24593 = (0);
seq__24574_24578 = G__24590;
chunk__24575_24579 = G__24591;
count__24576_24580 = G__24592;
i__24577_24581 = G__24593;
continue;
} else {
var msg_24594 = cljs.core.first.call(null,seq__24574_24588__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24594);

var G__24595 = cljs.core.next.call(null,seq__24574_24588__$1);
var G__24596 = null;
var G__24597 = (0);
var G__24598 = (0);
seq__24574_24578 = G__24595;
chunk__24575_24579 = G__24596;
count__24576_24580 = G__24597;
i__24577_24581 = G__24598;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24599){
var map__24601 = p__24599;
var map__24601__$1 = ((cljs.core.seq_QMARK_.call(null,map__24601))?cljs.core.apply.call(null,cljs.core.hash_map,map__24601):map__24601);
var w = map__24601__$1;
var message = cljs.core.get.call(null,map__24601__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16026__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16026__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16026__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__24608 = cljs.core.seq.call(null,plugins);
var chunk__24609 = null;
var count__24610 = (0);
var i__24611 = (0);
while(true){
if((i__24611 < count__24610)){
var vec__24612 = cljs.core._nth.call(null,chunk__24609,i__24611);
var k = cljs.core.nth.call(null,vec__24612,(0),null);
var plugin = cljs.core.nth.call(null,vec__24612,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24614 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24608,chunk__24609,count__24610,i__24611,pl_24614,vec__24612,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24614.call(null,msg_hist);
});})(seq__24608,chunk__24609,count__24610,i__24611,pl_24614,vec__24612,k,plugin))
);
} else {
}

var G__24615 = seq__24608;
var G__24616 = chunk__24609;
var G__24617 = count__24610;
var G__24618 = (i__24611 + (1));
seq__24608 = G__24615;
chunk__24609 = G__24616;
count__24610 = G__24617;
i__24611 = G__24618;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__24608);
if(temp__4423__auto__){
var seq__24608__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24608__$1)){
var c__16823__auto__ = cljs.core.chunk_first.call(null,seq__24608__$1);
var G__24619 = cljs.core.chunk_rest.call(null,seq__24608__$1);
var G__24620 = c__16823__auto__;
var G__24621 = cljs.core.count.call(null,c__16823__auto__);
var G__24622 = (0);
seq__24608 = G__24619;
chunk__24609 = G__24620;
count__24610 = G__24621;
i__24611 = G__24622;
continue;
} else {
var vec__24613 = cljs.core.first.call(null,seq__24608__$1);
var k = cljs.core.nth.call(null,vec__24613,(0),null);
var plugin = cljs.core.nth.call(null,vec__24613,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24623 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24608,chunk__24609,count__24610,i__24611,pl_24623,vec__24613,k,plugin,seq__24608__$1,temp__4423__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24623.call(null,msg_hist);
});})(seq__24608,chunk__24609,count__24610,i__24611,pl_24623,vec__24613,k,plugin,seq__24608__$1,temp__4423__auto__))
);
} else {
}

var G__24624 = cljs.core.next.call(null,seq__24608__$1);
var G__24625 = null;
var G__24626 = (0);
var G__24627 = (0);
seq__24608 = G__24624;
chunk__24609 = G__24625;
count__24610 = G__24626;
i__24611 = G__24627;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__24629 = arguments.length;
switch (G__24629) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__17078__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17078__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24632){
var map__24633 = p__24632;
var map__24633__$1 = ((cljs.core.seq_QMARK_.call(null,map__24633))?cljs.core.apply.call(null,cljs.core.hash_map,map__24633):map__24633);
var opts = map__24633__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24631){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24631));
});

//# sourceMappingURL=client.js.map