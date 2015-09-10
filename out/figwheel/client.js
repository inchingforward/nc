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
var G__25904__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25904 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25905__i = 0, G__25905__a = new Array(arguments.length -  0);
while (G__25905__i < G__25905__a.length) {G__25905__a[G__25905__i] = arguments[G__25905__i + 0]; ++G__25905__i;}
  args = new cljs.core.IndexedSeq(G__25905__a,0);
} 
return G__25904__delegate.call(this,args);};
G__25904.cljs$lang$maxFixedArity = 0;
G__25904.cljs$lang$applyTo = (function (arglist__25906){
var args = cljs.core.seq(arglist__25906);
return G__25904__delegate(args);
});
G__25904.cljs$core$IFn$_invoke$arity$variadic = G__25904__delegate;
return G__25904;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__25907){
var map__25909 = p__25907;
var map__25909__$1 = ((cljs.core.seq_QMARK_.call(null,map__25909))?cljs.core.apply.call(null,cljs.core.hash_map,map__25909):map__25909);
var message = cljs.core.get.call(null,map__25909__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__25909__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18087__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18087__auto__)){
return or__18087__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18075__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18075__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18075__auto__;
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
var c__21862__auto___26038 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21862__auto___26038,ch){
return (function (){
var f__21863__auto__ = (function (){var switch__21800__auto__ = ((function (c__21862__auto___26038,ch){
return (function (state_26012){
var state_val_26013 = (state_26012[(1)]);
if((state_val_26013 === (7))){
var inst_26008 = (state_26012[(2)]);
var state_26012__$1 = state_26012;
var statearr_26014_26039 = state_26012__$1;
(statearr_26014_26039[(2)] = inst_26008);

(statearr_26014_26039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26013 === (1))){
var state_26012__$1 = state_26012;
var statearr_26015_26040 = state_26012__$1;
(statearr_26015_26040[(2)] = null);

(statearr_26015_26040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26013 === (4))){
var inst_25976 = (state_26012[(7)]);
var inst_25976__$1 = (state_26012[(2)]);
var state_26012__$1 = (function (){var statearr_26016 = state_26012;
(statearr_26016[(7)] = inst_25976__$1);

return statearr_26016;
})();
if(cljs.core.truth_(inst_25976__$1)){
var statearr_26017_26041 = state_26012__$1;
(statearr_26017_26041[(1)] = (5));

} else {
var statearr_26018_26042 = state_26012__$1;
(statearr_26018_26042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26013 === (13))){
var state_26012__$1 = state_26012;
var statearr_26019_26043 = state_26012__$1;
(statearr_26019_26043[(2)] = null);

(statearr_26019_26043[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26013 === (6))){
var state_26012__$1 = state_26012;
var statearr_26020_26044 = state_26012__$1;
(statearr_26020_26044[(2)] = null);

(statearr_26020_26044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26013 === (3))){
var inst_26010 = (state_26012[(2)]);
var state_26012__$1 = state_26012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26012__$1,inst_26010);
} else {
if((state_val_26013 === (12))){
var inst_25983 = (state_26012[(8)]);
var inst_25996 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25983);
var inst_25997 = cljs.core.first.call(null,inst_25996);
var inst_25998 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25997);
var inst_25999 = console.warn("Figwheel: Not loading code with warnings - ",inst_25998);
var state_26012__$1 = state_26012;
var statearr_26021_26045 = state_26012__$1;
(statearr_26021_26045[(2)] = inst_25999);

(statearr_26021_26045[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26013 === (2))){
var state_26012__$1 = state_26012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26012__$1,(4),ch);
} else {
if((state_val_26013 === (11))){
var inst_25992 = (state_26012[(2)]);
var state_26012__$1 = state_26012;
var statearr_26022_26046 = state_26012__$1;
(statearr_26022_26046[(2)] = inst_25992);

(statearr_26022_26046[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26013 === (9))){
var inst_25982 = (state_26012[(9)]);
var inst_25994 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25982,opts);
var state_26012__$1 = state_26012;
if(cljs.core.truth_(inst_25994)){
var statearr_26023_26047 = state_26012__$1;
(statearr_26023_26047[(1)] = (12));

} else {
var statearr_26024_26048 = state_26012__$1;
(statearr_26024_26048[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26013 === (5))){
var inst_25982 = (state_26012[(9)]);
var inst_25976 = (state_26012[(7)]);
var inst_25978 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25979 = (new cljs.core.PersistentArrayMap(null,2,inst_25978,null));
var inst_25980 = (new cljs.core.PersistentHashSet(null,inst_25979,null));
var inst_25981 = figwheel.client.focus_msgs.call(null,inst_25980,inst_25976);
var inst_25982__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25981);
var inst_25983 = cljs.core.first.call(null,inst_25981);
var inst_25984 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25982__$1,opts);
var state_26012__$1 = (function (){var statearr_26025 = state_26012;
(statearr_26025[(9)] = inst_25982__$1);

(statearr_26025[(8)] = inst_25983);

return statearr_26025;
})();
if(cljs.core.truth_(inst_25984)){
var statearr_26026_26049 = state_26012__$1;
(statearr_26026_26049[(1)] = (8));

} else {
var statearr_26027_26050 = state_26012__$1;
(statearr_26027_26050[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26013 === (14))){
var inst_26002 = (state_26012[(2)]);
var state_26012__$1 = state_26012;
var statearr_26028_26051 = state_26012__$1;
(statearr_26028_26051[(2)] = inst_26002);

(statearr_26028_26051[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26013 === (10))){
var inst_26004 = (state_26012[(2)]);
var state_26012__$1 = (function (){var statearr_26029 = state_26012;
(statearr_26029[(10)] = inst_26004);

return statearr_26029;
})();
var statearr_26030_26052 = state_26012__$1;
(statearr_26030_26052[(2)] = null);

(statearr_26030_26052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26013 === (8))){
var inst_25983 = (state_26012[(8)]);
var inst_25986 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25987 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25983);
var inst_25988 = cljs.core.async.timeout.call(null,(1000));
var inst_25989 = [inst_25987,inst_25988];
var inst_25990 = (new cljs.core.PersistentVector(null,2,(5),inst_25986,inst_25989,null));
var state_26012__$1 = state_26012;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26012__$1,(11),inst_25990);
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
});})(c__21862__auto___26038,ch))
;
return ((function (switch__21800__auto__,c__21862__auto___26038,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21801__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21801__auto____0 = (function (){
var statearr_26034 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26034[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21801__auto__);

(statearr_26034[(1)] = (1));

return statearr_26034;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21801__auto____1 = (function (state_26012){
while(true){
var ret_value__21802__auto__ = (function (){try{while(true){
var result__21803__auto__ = switch__21800__auto__.call(null,state_26012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21803__auto__;
}
break;
}
}catch (e26035){if((e26035 instanceof Object)){
var ex__21804__auto__ = e26035;
var statearr_26036_26053 = state_26012;
(statearr_26036_26053[(5)] = ex__21804__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26054 = state_26012;
state_26012 = G__26054;
continue;
} else {
return ret_value__21802__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21801__auto__ = function(state_26012){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21801__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21801__auto____1.call(this,state_26012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21801__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21801__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21801__auto__;
})()
;})(switch__21800__auto__,c__21862__auto___26038,ch))
})();
var state__21864__auto__ = (function (){var statearr_26037 = f__21863__auto__.call(null);
(statearr_26037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21862__auto___26038);

return statearr_26037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21864__auto__);
});})(c__21862__auto___26038,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26055_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26055_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_26062 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26062){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_26060 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26061 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26060,_STAR_print_newline_STAR_26061,base_path_26062){
return (function() { 
var G__26063__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26063 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26064__i = 0, G__26064__a = new Array(arguments.length -  0);
while (G__26064__i < G__26064__a.length) {G__26064__a[G__26064__i] = arguments[G__26064__i + 0]; ++G__26064__i;}
  args = new cljs.core.IndexedSeq(G__26064__a,0);
} 
return G__26063__delegate.call(this,args);};
G__26063.cljs$lang$maxFixedArity = 0;
G__26063.cljs$lang$applyTo = (function (arglist__26065){
var args = cljs.core.seq(arglist__26065);
return G__26063__delegate(args);
});
G__26063.cljs$core$IFn$_invoke$arity$variadic = G__26063__delegate;
return G__26063;
})()
;})(_STAR_print_fn_STAR_26060,_STAR_print_newline_STAR_26061,base_path_26062))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26061;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26060;
}}catch (e26059){if((e26059 instanceof Error)){
var e = e26059;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26062], null));
} else {
var e = e26059;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26062))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26066){
var map__26071 = p__26066;
var map__26071__$1 = ((cljs.core.seq_QMARK_.call(null,map__26071))?cljs.core.apply.call(null,cljs.core.hash_map,map__26071):map__26071);
var opts = map__26071__$1;
var build_id = cljs.core.get.call(null,map__26071__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26071,map__26071__$1,opts,build_id){
return (function (p__26072){
var vec__26073 = p__26072;
var map__26074 = cljs.core.nth.call(null,vec__26073,(0),null);
var map__26074__$1 = ((cljs.core.seq_QMARK_.call(null,map__26074))?cljs.core.apply.call(null,cljs.core.hash_map,map__26074):map__26074);
var msg = map__26074__$1;
var msg_name = cljs.core.get.call(null,map__26074__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26073,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__26073,map__26074,map__26074__$1,msg,msg_name,_,map__26071,map__26071__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26073,map__26074,map__26074__$1,msg,msg_name,_,map__26071,map__26071__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26071,map__26071__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26078){
var vec__26079 = p__26078;
var map__26080 = cljs.core.nth.call(null,vec__26079,(0),null);
var map__26080__$1 = ((cljs.core.seq_QMARK_.call(null,map__26080))?cljs.core.apply.call(null,cljs.core.hash_map,map__26080):map__26080);
var msg = map__26080__$1;
var msg_name = cljs.core.get.call(null,map__26080__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26079,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26081){
var map__26089 = p__26081;
var map__26089__$1 = ((cljs.core.seq_QMARK_.call(null,map__26089))?cljs.core.apply.call(null,cljs.core.hash_map,map__26089):map__26089);
var on_compile_warning = cljs.core.get.call(null,map__26089__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26089__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26089,map__26089__$1,on_compile_warning,on_compile_fail){
return (function (p__26090){
var vec__26091 = p__26090;
var map__26092 = cljs.core.nth.call(null,vec__26091,(0),null);
var map__26092__$1 = ((cljs.core.seq_QMARK_.call(null,map__26092))?cljs.core.apply.call(null,cljs.core.hash_map,map__26092):map__26092);
var msg = map__26092__$1;
var msg_name = cljs.core.get.call(null,map__26092__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26091,(1));
var pred__26093 = cljs.core._EQ_;
var expr__26094 = msg_name;
if(cljs.core.truth_(pred__26093.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26094))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26093.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26094))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26089,map__26089__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21862__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21862__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21863__auto__ = (function (){var switch__21800__auto__ = ((function (c__21862__auto__,msg_hist,msg_names,msg){
return (function (state_26295){
var state_val_26296 = (state_26295[(1)]);
if((state_val_26296 === (7))){
var inst_26229 = (state_26295[(2)]);
var state_26295__$1 = state_26295;
var statearr_26297_26338 = state_26295__$1;
(statearr_26297_26338[(2)] = inst_26229);

(statearr_26297_26338[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26296 === (20))){
var inst_26257 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26295__$1 = state_26295;
if(cljs.core.truth_(inst_26257)){
var statearr_26298_26339 = state_26295__$1;
(statearr_26298_26339[(1)] = (22));

} else {
var statearr_26299_26340 = state_26295__$1;
(statearr_26299_26340[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26296 === (27))){
var inst_26269 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26270 = figwheel.client.heads_up.display_warning.call(null,inst_26269);
var state_26295__$1 = state_26295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26295__$1,(30),inst_26270);
} else {
if((state_val_26296 === (1))){
var inst_26217 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26295__$1 = state_26295;
if(cljs.core.truth_(inst_26217)){
var statearr_26300_26341 = state_26295__$1;
(statearr_26300_26341[(1)] = (2));

} else {
var statearr_26301_26342 = state_26295__$1;
(statearr_26301_26342[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26296 === (24))){
var inst_26285 = (state_26295[(2)]);
var state_26295__$1 = state_26295;
var statearr_26302_26343 = state_26295__$1;
(statearr_26302_26343[(2)] = inst_26285);

(statearr_26302_26343[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26296 === (4))){
var inst_26293 = (state_26295[(2)]);
var state_26295__$1 = state_26295;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26295__$1,inst_26293);
} else {
if((state_val_26296 === (15))){
var inst_26245 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26246 = figwheel.client.format_messages.call(null,inst_26245);
var inst_26247 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26248 = figwheel.client.heads_up.display_error.call(null,inst_26246,inst_26247);
var state_26295__$1 = state_26295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26295__$1,(18),inst_26248);
} else {
if((state_val_26296 === (21))){
var inst_26287 = (state_26295[(2)]);
var state_26295__$1 = state_26295;
var statearr_26303_26344 = state_26295__$1;
(statearr_26303_26344[(2)] = inst_26287);

(statearr_26303_26344[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26296 === (31))){
var inst_26276 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26295__$1 = state_26295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26295__$1,(34),inst_26276);
} else {
if((state_val_26296 === (32))){
var state_26295__$1 = state_26295;
var statearr_26304_26345 = state_26295__$1;
(statearr_26304_26345[(2)] = null);

(statearr_26304_26345[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26296 === (33))){
var inst_26281 = (state_26295[(2)]);
var state_26295__$1 = state_26295;
var statearr_26305_26346 = state_26295__$1;
(statearr_26305_26346[(2)] = inst_26281);

(statearr_26305_26346[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26296 === (13))){
var inst_26235 = (state_26295[(2)]);
var inst_26236 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26237 = figwheel.client.format_messages.call(null,inst_26236);
var inst_26238 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26239 = figwheel.client.heads_up.display_error.call(null,inst_26237,inst_26238);
var state_26295__$1 = (function (){var statearr_26306 = state_26295;
(statearr_26306[(7)] = inst_26235);

return statearr_26306;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26295__$1,(14),inst_26239);
} else {
if((state_val_26296 === (22))){
var inst_26259 = figwheel.client.heads_up.clear.call(null);
var state_26295__$1 = state_26295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26295__$1,(25),inst_26259);
} else {
if((state_val_26296 === (29))){
var inst_26283 = (state_26295[(2)]);
var state_26295__$1 = state_26295;
var statearr_26307_26347 = state_26295__$1;
(statearr_26307_26347[(2)] = inst_26283);

(statearr_26307_26347[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26296 === (6))){
var inst_26225 = figwheel.client.heads_up.clear.call(null);
var state_26295__$1 = state_26295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26295__$1,(9),inst_26225);
} else {
if((state_val_26296 === (28))){
var inst_26274 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26295__$1 = state_26295;
if(cljs.core.truth_(inst_26274)){
var statearr_26308_26348 = state_26295__$1;
(statearr_26308_26348[(1)] = (31));

} else {
var statearr_26309_26349 = state_26295__$1;
(statearr_26309_26349[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26296 === (25))){
var inst_26261 = (state_26295[(2)]);
var inst_26262 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26263 = figwheel.client.heads_up.display_warning.call(null,inst_26262);
var state_26295__$1 = (function (){var statearr_26310 = state_26295;
(statearr_26310[(8)] = inst_26261);

return statearr_26310;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26295__$1,(26),inst_26263);
} else {
if((state_val_26296 === (34))){
var inst_26278 = (state_26295[(2)]);
var state_26295__$1 = state_26295;
var statearr_26311_26350 = state_26295__$1;
(statearr_26311_26350[(2)] = inst_26278);

(statearr_26311_26350[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26296 === (17))){
var inst_26289 = (state_26295[(2)]);
var state_26295__$1 = state_26295;
var statearr_26312_26351 = state_26295__$1;
(statearr_26312_26351[(2)] = inst_26289);

(statearr_26312_26351[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26296 === (3))){
var inst_26231 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26295__$1 = state_26295;
if(cljs.core.truth_(inst_26231)){
var statearr_26313_26352 = state_26295__$1;
(statearr_26313_26352[(1)] = (10));

} else {
var statearr_26314_26353 = state_26295__$1;
(statearr_26314_26353[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26296 === (12))){
var inst_26291 = (state_26295[(2)]);
var state_26295__$1 = state_26295;
var statearr_26315_26354 = state_26295__$1;
(statearr_26315_26354[(2)] = inst_26291);

(statearr_26315_26354[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26296 === (2))){
var inst_26219 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26295__$1 = state_26295;
if(cljs.core.truth_(inst_26219)){
var statearr_26316_26355 = state_26295__$1;
(statearr_26316_26355[(1)] = (5));

} else {
var statearr_26317_26356 = state_26295__$1;
(statearr_26317_26356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26296 === (23))){
var inst_26267 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26295__$1 = state_26295;
if(cljs.core.truth_(inst_26267)){
var statearr_26318_26357 = state_26295__$1;
(statearr_26318_26357[(1)] = (27));

} else {
var statearr_26319_26358 = state_26295__$1;
(statearr_26319_26358[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26296 === (19))){
var inst_26254 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26255 = figwheel.client.heads_up.append_message.call(null,inst_26254);
var state_26295__$1 = state_26295;
var statearr_26320_26359 = state_26295__$1;
(statearr_26320_26359[(2)] = inst_26255);

(statearr_26320_26359[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26296 === (11))){
var inst_26243 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26295__$1 = state_26295;
if(cljs.core.truth_(inst_26243)){
var statearr_26321_26360 = state_26295__$1;
(statearr_26321_26360[(1)] = (15));

} else {
var statearr_26322_26361 = state_26295__$1;
(statearr_26322_26361[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26296 === (9))){
var inst_26227 = (state_26295[(2)]);
var state_26295__$1 = state_26295;
var statearr_26323_26362 = state_26295__$1;
(statearr_26323_26362[(2)] = inst_26227);

(statearr_26323_26362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26296 === (5))){
var inst_26221 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26295__$1 = state_26295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26295__$1,(8),inst_26221);
} else {
if((state_val_26296 === (14))){
var inst_26241 = (state_26295[(2)]);
var state_26295__$1 = state_26295;
var statearr_26324_26363 = state_26295__$1;
(statearr_26324_26363[(2)] = inst_26241);

(statearr_26324_26363[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26296 === (26))){
var inst_26265 = (state_26295[(2)]);
var state_26295__$1 = state_26295;
var statearr_26325_26364 = state_26295__$1;
(statearr_26325_26364[(2)] = inst_26265);

(statearr_26325_26364[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26296 === (16))){
var inst_26252 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26295__$1 = state_26295;
if(cljs.core.truth_(inst_26252)){
var statearr_26326_26365 = state_26295__$1;
(statearr_26326_26365[(1)] = (19));

} else {
var statearr_26327_26366 = state_26295__$1;
(statearr_26327_26366[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26296 === (30))){
var inst_26272 = (state_26295[(2)]);
var state_26295__$1 = state_26295;
var statearr_26328_26367 = state_26295__$1;
(statearr_26328_26367[(2)] = inst_26272);

(statearr_26328_26367[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26296 === (10))){
var inst_26233 = figwheel.client.heads_up.clear.call(null);
var state_26295__$1 = state_26295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26295__$1,(13),inst_26233);
} else {
if((state_val_26296 === (18))){
var inst_26250 = (state_26295[(2)]);
var state_26295__$1 = state_26295;
var statearr_26329_26368 = state_26295__$1;
(statearr_26329_26368[(2)] = inst_26250);

(statearr_26329_26368[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26296 === (8))){
var inst_26223 = (state_26295[(2)]);
var state_26295__$1 = state_26295;
var statearr_26330_26369 = state_26295__$1;
(statearr_26330_26369[(2)] = inst_26223);

(statearr_26330_26369[(1)] = (7));


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
});})(c__21862__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21800__auto__,c__21862__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21801__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21801__auto____0 = (function (){
var statearr_26334 = [null,null,null,null,null,null,null,null,null];
(statearr_26334[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21801__auto__);

(statearr_26334[(1)] = (1));

return statearr_26334;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21801__auto____1 = (function (state_26295){
while(true){
var ret_value__21802__auto__ = (function (){try{while(true){
var result__21803__auto__ = switch__21800__auto__.call(null,state_26295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21803__auto__;
}
break;
}
}catch (e26335){if((e26335 instanceof Object)){
var ex__21804__auto__ = e26335;
var statearr_26336_26370 = state_26295;
(statearr_26336_26370[(5)] = ex__21804__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26371 = state_26295;
state_26295 = G__26371;
continue;
} else {
return ret_value__21802__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21801__auto__ = function(state_26295){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21801__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21801__auto____1.call(this,state_26295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21801__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21801__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21801__auto__;
})()
;})(switch__21800__auto__,c__21862__auto__,msg_hist,msg_names,msg))
})();
var state__21864__auto__ = (function (){var statearr_26337 = f__21863__auto__.call(null);
(statearr_26337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21862__auto__);

return statearr_26337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21864__auto__);
});})(c__21862__auto__,msg_hist,msg_names,msg))
);

return c__21862__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21862__auto___26434 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21862__auto___26434,ch){
return (function (){
var f__21863__auto__ = (function (){var switch__21800__auto__ = ((function (c__21862__auto___26434,ch){
return (function (state_26417){
var state_val_26418 = (state_26417[(1)]);
if((state_val_26418 === (1))){
var state_26417__$1 = state_26417;
var statearr_26419_26435 = state_26417__$1;
(statearr_26419_26435[(2)] = null);

(statearr_26419_26435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26418 === (2))){
var state_26417__$1 = state_26417;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26417__$1,(4),ch);
} else {
if((state_val_26418 === (3))){
var inst_26415 = (state_26417[(2)]);
var state_26417__$1 = state_26417;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26417__$1,inst_26415);
} else {
if((state_val_26418 === (4))){
var inst_26405 = (state_26417[(7)]);
var inst_26405__$1 = (state_26417[(2)]);
var state_26417__$1 = (function (){var statearr_26420 = state_26417;
(statearr_26420[(7)] = inst_26405__$1);

return statearr_26420;
})();
if(cljs.core.truth_(inst_26405__$1)){
var statearr_26421_26436 = state_26417__$1;
(statearr_26421_26436[(1)] = (5));

} else {
var statearr_26422_26437 = state_26417__$1;
(statearr_26422_26437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26418 === (5))){
var inst_26405 = (state_26417[(7)]);
var inst_26407 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26405);
var state_26417__$1 = state_26417;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26417__$1,(8),inst_26407);
} else {
if((state_val_26418 === (6))){
var state_26417__$1 = state_26417;
var statearr_26423_26438 = state_26417__$1;
(statearr_26423_26438[(2)] = null);

(statearr_26423_26438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26418 === (7))){
var inst_26413 = (state_26417[(2)]);
var state_26417__$1 = state_26417;
var statearr_26424_26439 = state_26417__$1;
(statearr_26424_26439[(2)] = inst_26413);

(statearr_26424_26439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26418 === (8))){
var inst_26409 = (state_26417[(2)]);
var state_26417__$1 = (function (){var statearr_26425 = state_26417;
(statearr_26425[(8)] = inst_26409);

return statearr_26425;
})();
var statearr_26426_26440 = state_26417__$1;
(statearr_26426_26440[(2)] = null);

(statearr_26426_26440[(1)] = (2));


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
});})(c__21862__auto___26434,ch))
;
return ((function (switch__21800__auto__,c__21862__auto___26434,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21801__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21801__auto____0 = (function (){
var statearr_26430 = [null,null,null,null,null,null,null,null,null];
(statearr_26430[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21801__auto__);

(statearr_26430[(1)] = (1));

return statearr_26430;
});
var figwheel$client$heads_up_plugin_$_state_machine__21801__auto____1 = (function (state_26417){
while(true){
var ret_value__21802__auto__ = (function (){try{while(true){
var result__21803__auto__ = switch__21800__auto__.call(null,state_26417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21803__auto__;
}
break;
}
}catch (e26431){if((e26431 instanceof Object)){
var ex__21804__auto__ = e26431;
var statearr_26432_26441 = state_26417;
(statearr_26432_26441[(5)] = ex__21804__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26442 = state_26417;
state_26417 = G__26442;
continue;
} else {
return ret_value__21802__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21801__auto__ = function(state_26417){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21801__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21801__auto____1.call(this,state_26417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21801__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21801__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21801__auto__;
})()
;})(switch__21800__auto__,c__21862__auto___26434,ch))
})();
var state__21864__auto__ = (function (){var statearr_26433 = f__21863__auto__.call(null);
(statearr_26433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21862__auto___26434);

return statearr_26433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21864__auto__);
});})(c__21862__auto___26434,ch))
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
var c__21862__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21862__auto__){
return (function (){
var f__21863__auto__ = (function (){var switch__21800__auto__ = ((function (c__21862__auto__){
return (function (state_26463){
var state_val_26464 = (state_26463[(1)]);
if((state_val_26464 === (1))){
var inst_26458 = cljs.core.async.timeout.call(null,(3000));
var state_26463__$1 = state_26463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26463__$1,(2),inst_26458);
} else {
if((state_val_26464 === (2))){
var inst_26460 = (state_26463[(2)]);
var inst_26461 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26463__$1 = (function (){var statearr_26465 = state_26463;
(statearr_26465[(7)] = inst_26460);

return statearr_26465;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26463__$1,inst_26461);
} else {
return null;
}
}
});})(c__21862__auto__))
;
return ((function (switch__21800__auto__,c__21862__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21801__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21801__auto____0 = (function (){
var statearr_26469 = [null,null,null,null,null,null,null,null];
(statearr_26469[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21801__auto__);

(statearr_26469[(1)] = (1));

return statearr_26469;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21801__auto____1 = (function (state_26463){
while(true){
var ret_value__21802__auto__ = (function (){try{while(true){
var result__21803__auto__ = switch__21800__auto__.call(null,state_26463);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21803__auto__;
}
break;
}
}catch (e26470){if((e26470 instanceof Object)){
var ex__21804__auto__ = e26470;
var statearr_26471_26473 = state_26463;
(statearr_26471_26473[(5)] = ex__21804__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26474 = state_26463;
state_26463 = G__26474;
continue;
} else {
return ret_value__21802__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21801__auto__ = function(state_26463){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21801__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21801__auto____1.call(this,state_26463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21801__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21801__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21801__auto__;
})()
;})(switch__21800__auto__,c__21862__auto__))
})();
var state__21864__auto__ = (function (){var statearr_26472 = f__21863__auto__.call(null);
(statearr_26472[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21862__auto__);

return statearr_26472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21864__auto__);
});})(c__21862__auto__))
);

return c__21862__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26475){
var map__26481 = p__26475;
var map__26481__$1 = ((cljs.core.seq_QMARK_.call(null,map__26481))?cljs.core.apply.call(null,cljs.core.hash_map,map__26481):map__26481);
var ed = map__26481__$1;
var formatted_exception = cljs.core.get.call(null,map__26481__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26481__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26481__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26482_26486 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26483_26487 = null;
var count__26484_26488 = (0);
var i__26485_26489 = (0);
while(true){
if((i__26485_26489 < count__26484_26488)){
var msg_26490 = cljs.core._nth.call(null,chunk__26483_26487,i__26485_26489);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26490);

var G__26491 = seq__26482_26486;
var G__26492 = chunk__26483_26487;
var G__26493 = count__26484_26488;
var G__26494 = (i__26485_26489 + (1));
seq__26482_26486 = G__26491;
chunk__26483_26487 = G__26492;
count__26484_26488 = G__26493;
i__26485_26489 = G__26494;
continue;
} else {
var temp__4423__auto___26495 = cljs.core.seq.call(null,seq__26482_26486);
if(temp__4423__auto___26495){
var seq__26482_26496__$1 = temp__4423__auto___26495;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26482_26496__$1)){
var c__18872__auto___26497 = cljs.core.chunk_first.call(null,seq__26482_26496__$1);
var G__26498 = cljs.core.chunk_rest.call(null,seq__26482_26496__$1);
var G__26499 = c__18872__auto___26497;
var G__26500 = cljs.core.count.call(null,c__18872__auto___26497);
var G__26501 = (0);
seq__26482_26486 = G__26498;
chunk__26483_26487 = G__26499;
count__26484_26488 = G__26500;
i__26485_26489 = G__26501;
continue;
} else {
var msg_26502 = cljs.core.first.call(null,seq__26482_26496__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26502);

var G__26503 = cljs.core.next.call(null,seq__26482_26496__$1);
var G__26504 = null;
var G__26505 = (0);
var G__26506 = (0);
seq__26482_26486 = G__26503;
chunk__26483_26487 = G__26504;
count__26484_26488 = G__26505;
i__26485_26489 = G__26506;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26507){
var map__26509 = p__26507;
var map__26509__$1 = ((cljs.core.seq_QMARK_.call(null,map__26509))?cljs.core.apply.call(null,cljs.core.hash_map,map__26509):map__26509);
var w = map__26509__$1;
var message = cljs.core.get.call(null,map__26509__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
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
if(cljs.core.truth_((function (){var and__18075__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18075__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18075__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__26516 = cljs.core.seq.call(null,plugins);
var chunk__26517 = null;
var count__26518 = (0);
var i__26519 = (0);
while(true){
if((i__26519 < count__26518)){
var vec__26520 = cljs.core._nth.call(null,chunk__26517,i__26519);
var k = cljs.core.nth.call(null,vec__26520,(0),null);
var plugin = cljs.core.nth.call(null,vec__26520,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26522 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26516,chunk__26517,count__26518,i__26519,pl_26522,vec__26520,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26522.call(null,msg_hist);
});})(seq__26516,chunk__26517,count__26518,i__26519,pl_26522,vec__26520,k,plugin))
);
} else {
}

var G__26523 = seq__26516;
var G__26524 = chunk__26517;
var G__26525 = count__26518;
var G__26526 = (i__26519 + (1));
seq__26516 = G__26523;
chunk__26517 = G__26524;
count__26518 = G__26525;
i__26519 = G__26526;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__26516);
if(temp__4423__auto__){
var seq__26516__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26516__$1)){
var c__18872__auto__ = cljs.core.chunk_first.call(null,seq__26516__$1);
var G__26527 = cljs.core.chunk_rest.call(null,seq__26516__$1);
var G__26528 = c__18872__auto__;
var G__26529 = cljs.core.count.call(null,c__18872__auto__);
var G__26530 = (0);
seq__26516 = G__26527;
chunk__26517 = G__26528;
count__26518 = G__26529;
i__26519 = G__26530;
continue;
} else {
var vec__26521 = cljs.core.first.call(null,seq__26516__$1);
var k = cljs.core.nth.call(null,vec__26521,(0),null);
var plugin = cljs.core.nth.call(null,vec__26521,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26531 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26516,chunk__26517,count__26518,i__26519,pl_26531,vec__26521,k,plugin,seq__26516__$1,temp__4423__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26531.call(null,msg_hist);
});})(seq__26516,chunk__26517,count__26518,i__26519,pl_26531,vec__26521,k,plugin,seq__26516__$1,temp__4423__auto__))
);
} else {
}

var G__26532 = cljs.core.next.call(null,seq__26516__$1);
var G__26533 = null;
var G__26534 = (0);
var G__26535 = (0);
seq__26516 = G__26532;
chunk__26517 = G__26533;
count__26518 = G__26534;
i__26519 = G__26535;
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
var G__26537 = arguments.length;
switch (G__26537) {
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
var argseq__19127__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19127__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26540){
var map__26541 = p__26540;
var map__26541__$1 = ((cljs.core.seq_QMARK_.call(null,map__26541))?cljs.core.apply.call(null,cljs.core.hash_map,map__26541):map__26541);
var opts = map__26541__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26539){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26539));
});

//# sourceMappingURL=client.js.map