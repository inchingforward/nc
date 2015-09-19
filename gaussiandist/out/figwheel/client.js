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
var G__25901__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25901 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25902__i = 0, G__25902__a = new Array(arguments.length -  0);
while (G__25902__i < G__25902__a.length) {G__25902__a[G__25902__i] = arguments[G__25902__i + 0]; ++G__25902__i;}
  args = new cljs.core.IndexedSeq(G__25902__a,0);
} 
return G__25901__delegate.call(this,args);};
G__25901.cljs$lang$maxFixedArity = 0;
G__25901.cljs$lang$applyTo = (function (arglist__25903){
var args = cljs.core.seq(arglist__25903);
return G__25901__delegate(args);
});
G__25901.cljs$core$IFn$_invoke$arity$variadic = G__25901__delegate;
return G__25901;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__25904){
var map__25906 = p__25904;
var map__25906__$1 = ((cljs.core.seq_QMARK_.call(null,map__25906))?cljs.core.apply.call(null,cljs.core.hash_map,map__25906):map__25906);
var message = cljs.core.get.call(null,map__25906__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__25906__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__21859__auto___26035 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21859__auto___26035,ch){
return (function (){
var f__21860__auto__ = (function (){var switch__21797__auto__ = ((function (c__21859__auto___26035,ch){
return (function (state_26009){
var state_val_26010 = (state_26009[(1)]);
if((state_val_26010 === (7))){
var inst_26005 = (state_26009[(2)]);
var state_26009__$1 = state_26009;
var statearr_26011_26036 = state_26009__$1;
(statearr_26011_26036[(2)] = inst_26005);

(statearr_26011_26036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (1))){
var state_26009__$1 = state_26009;
var statearr_26012_26037 = state_26009__$1;
(statearr_26012_26037[(2)] = null);

(statearr_26012_26037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (4))){
var inst_25973 = (state_26009[(7)]);
var inst_25973__$1 = (state_26009[(2)]);
var state_26009__$1 = (function (){var statearr_26013 = state_26009;
(statearr_26013[(7)] = inst_25973__$1);

return statearr_26013;
})();
if(cljs.core.truth_(inst_25973__$1)){
var statearr_26014_26038 = state_26009__$1;
(statearr_26014_26038[(1)] = (5));

} else {
var statearr_26015_26039 = state_26009__$1;
(statearr_26015_26039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (13))){
var state_26009__$1 = state_26009;
var statearr_26016_26040 = state_26009__$1;
(statearr_26016_26040[(2)] = null);

(statearr_26016_26040[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (6))){
var state_26009__$1 = state_26009;
var statearr_26017_26041 = state_26009__$1;
(statearr_26017_26041[(2)] = null);

(statearr_26017_26041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (3))){
var inst_26007 = (state_26009[(2)]);
var state_26009__$1 = state_26009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26009__$1,inst_26007);
} else {
if((state_val_26010 === (12))){
var inst_25980 = (state_26009[(8)]);
var inst_25993 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25980);
var inst_25994 = cljs.core.first.call(null,inst_25993);
var inst_25995 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25994);
var inst_25996 = console.warn("Figwheel: Not loading code with warnings - ",inst_25995);
var state_26009__$1 = state_26009;
var statearr_26018_26042 = state_26009__$1;
(statearr_26018_26042[(2)] = inst_25996);

(statearr_26018_26042[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (2))){
var state_26009__$1 = state_26009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26009__$1,(4),ch);
} else {
if((state_val_26010 === (11))){
var inst_25989 = (state_26009[(2)]);
var state_26009__$1 = state_26009;
var statearr_26019_26043 = state_26009__$1;
(statearr_26019_26043[(2)] = inst_25989);

(statearr_26019_26043[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (9))){
var inst_25979 = (state_26009[(9)]);
var inst_25991 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25979,opts);
var state_26009__$1 = state_26009;
if(cljs.core.truth_(inst_25991)){
var statearr_26020_26044 = state_26009__$1;
(statearr_26020_26044[(1)] = (12));

} else {
var statearr_26021_26045 = state_26009__$1;
(statearr_26021_26045[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (5))){
var inst_25973 = (state_26009[(7)]);
var inst_25979 = (state_26009[(9)]);
var inst_25975 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25976 = (new cljs.core.PersistentArrayMap(null,2,inst_25975,null));
var inst_25977 = (new cljs.core.PersistentHashSet(null,inst_25976,null));
var inst_25978 = figwheel.client.focus_msgs.call(null,inst_25977,inst_25973);
var inst_25979__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25978);
var inst_25980 = cljs.core.first.call(null,inst_25978);
var inst_25981 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25979__$1,opts);
var state_26009__$1 = (function (){var statearr_26022 = state_26009;
(statearr_26022[(8)] = inst_25980);

(statearr_26022[(9)] = inst_25979__$1);

return statearr_26022;
})();
if(cljs.core.truth_(inst_25981)){
var statearr_26023_26046 = state_26009__$1;
(statearr_26023_26046[(1)] = (8));

} else {
var statearr_26024_26047 = state_26009__$1;
(statearr_26024_26047[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (14))){
var inst_25999 = (state_26009[(2)]);
var state_26009__$1 = state_26009;
var statearr_26025_26048 = state_26009__$1;
(statearr_26025_26048[(2)] = inst_25999);

(statearr_26025_26048[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (10))){
var inst_26001 = (state_26009[(2)]);
var state_26009__$1 = (function (){var statearr_26026 = state_26009;
(statearr_26026[(10)] = inst_26001);

return statearr_26026;
})();
var statearr_26027_26049 = state_26009__$1;
(statearr_26027_26049[(2)] = null);

(statearr_26027_26049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26010 === (8))){
var inst_25980 = (state_26009[(8)]);
var inst_25983 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25984 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25980);
var inst_25985 = cljs.core.async.timeout.call(null,(1000));
var inst_25986 = [inst_25984,inst_25985];
var inst_25987 = (new cljs.core.PersistentVector(null,2,(5),inst_25983,inst_25986,null));
var state_26009__$1 = state_26009;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26009__$1,(11),inst_25987);
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
});})(c__21859__auto___26035,ch))
;
return ((function (switch__21797__auto__,c__21859__auto___26035,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21798__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21798__auto____0 = (function (){
var statearr_26031 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26031[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21798__auto__);

(statearr_26031[(1)] = (1));

return statearr_26031;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21798__auto____1 = (function (state_26009){
while(true){
var ret_value__21799__auto__ = (function (){try{while(true){
var result__21800__auto__ = switch__21797__auto__.call(null,state_26009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21800__auto__;
}
break;
}
}catch (e26032){if((e26032 instanceof Object)){
var ex__21801__auto__ = e26032;
var statearr_26033_26050 = state_26009;
(statearr_26033_26050[(5)] = ex__21801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26051 = state_26009;
state_26009 = G__26051;
continue;
} else {
return ret_value__21799__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21798__auto__ = function(state_26009){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21798__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21798__auto____1.call(this,state_26009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21798__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21798__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21798__auto__;
})()
;})(switch__21797__auto__,c__21859__auto___26035,ch))
})();
var state__21861__auto__ = (function (){var statearr_26034 = f__21860__auto__.call(null);
(statearr_26034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21859__auto___26035);

return statearr_26034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21861__auto__);
});})(c__21859__auto___26035,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26052_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26052_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_26059 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26059){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_26057 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26058 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26057,_STAR_print_newline_STAR_26058,base_path_26059){
return (function() { 
var G__26060__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26060 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26061__i = 0, G__26061__a = new Array(arguments.length -  0);
while (G__26061__i < G__26061__a.length) {G__26061__a[G__26061__i] = arguments[G__26061__i + 0]; ++G__26061__i;}
  args = new cljs.core.IndexedSeq(G__26061__a,0);
} 
return G__26060__delegate.call(this,args);};
G__26060.cljs$lang$maxFixedArity = 0;
G__26060.cljs$lang$applyTo = (function (arglist__26062){
var args = cljs.core.seq(arglist__26062);
return G__26060__delegate(args);
});
G__26060.cljs$core$IFn$_invoke$arity$variadic = G__26060__delegate;
return G__26060;
})()
;})(_STAR_print_fn_STAR_26057,_STAR_print_newline_STAR_26058,base_path_26059))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26058;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26057;
}}catch (e26056){if((e26056 instanceof Error)){
var e = e26056;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26059], null));
} else {
var e = e26056;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26059))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26063){
var map__26068 = p__26063;
var map__26068__$1 = ((cljs.core.seq_QMARK_.call(null,map__26068))?cljs.core.apply.call(null,cljs.core.hash_map,map__26068):map__26068);
var opts = map__26068__$1;
var build_id = cljs.core.get.call(null,map__26068__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26068,map__26068__$1,opts,build_id){
return (function (p__26069){
var vec__26070 = p__26069;
var map__26071 = cljs.core.nth.call(null,vec__26070,(0),null);
var map__26071__$1 = ((cljs.core.seq_QMARK_.call(null,map__26071))?cljs.core.apply.call(null,cljs.core.hash_map,map__26071):map__26071);
var msg = map__26071__$1;
var msg_name = cljs.core.get.call(null,map__26071__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26070,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__26070,map__26071,map__26071__$1,msg,msg_name,_,map__26068,map__26068__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26070,map__26071,map__26071__$1,msg,msg_name,_,map__26068,map__26068__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26068,map__26068__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26075){
var vec__26076 = p__26075;
var map__26077 = cljs.core.nth.call(null,vec__26076,(0),null);
var map__26077__$1 = ((cljs.core.seq_QMARK_.call(null,map__26077))?cljs.core.apply.call(null,cljs.core.hash_map,map__26077):map__26077);
var msg = map__26077__$1;
var msg_name = cljs.core.get.call(null,map__26077__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26076,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26078){
var map__26086 = p__26078;
var map__26086__$1 = ((cljs.core.seq_QMARK_.call(null,map__26086))?cljs.core.apply.call(null,cljs.core.hash_map,map__26086):map__26086);
var on_compile_warning = cljs.core.get.call(null,map__26086__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26086__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26086,map__26086__$1,on_compile_warning,on_compile_fail){
return (function (p__26087){
var vec__26088 = p__26087;
var map__26089 = cljs.core.nth.call(null,vec__26088,(0),null);
var map__26089__$1 = ((cljs.core.seq_QMARK_.call(null,map__26089))?cljs.core.apply.call(null,cljs.core.hash_map,map__26089):map__26089);
var msg = map__26089__$1;
var msg_name = cljs.core.get.call(null,map__26089__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26088,(1));
var pred__26090 = cljs.core._EQ_;
var expr__26091 = msg_name;
if(cljs.core.truth_(pred__26090.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26091))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26090.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26091))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26086,map__26086__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21859__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21859__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21860__auto__ = (function (){var switch__21797__auto__ = ((function (c__21859__auto__,msg_hist,msg_names,msg){
return (function (state_26292){
var state_val_26293 = (state_26292[(1)]);
if((state_val_26293 === (7))){
var inst_26226 = (state_26292[(2)]);
var state_26292__$1 = state_26292;
var statearr_26294_26335 = state_26292__$1;
(statearr_26294_26335[(2)] = inst_26226);

(statearr_26294_26335[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (20))){
var inst_26254 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26292__$1 = state_26292;
if(cljs.core.truth_(inst_26254)){
var statearr_26295_26336 = state_26292__$1;
(statearr_26295_26336[(1)] = (22));

} else {
var statearr_26296_26337 = state_26292__$1;
(statearr_26296_26337[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (27))){
var inst_26266 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26267 = figwheel.client.heads_up.display_warning.call(null,inst_26266);
var state_26292__$1 = state_26292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26292__$1,(30),inst_26267);
} else {
if((state_val_26293 === (1))){
var inst_26214 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26292__$1 = state_26292;
if(cljs.core.truth_(inst_26214)){
var statearr_26297_26338 = state_26292__$1;
(statearr_26297_26338[(1)] = (2));

} else {
var statearr_26298_26339 = state_26292__$1;
(statearr_26298_26339[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (24))){
var inst_26282 = (state_26292[(2)]);
var state_26292__$1 = state_26292;
var statearr_26299_26340 = state_26292__$1;
(statearr_26299_26340[(2)] = inst_26282);

(statearr_26299_26340[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (4))){
var inst_26290 = (state_26292[(2)]);
var state_26292__$1 = state_26292;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26292__$1,inst_26290);
} else {
if((state_val_26293 === (15))){
var inst_26242 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26243 = figwheel.client.format_messages.call(null,inst_26242);
var inst_26244 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26245 = figwheel.client.heads_up.display_error.call(null,inst_26243,inst_26244);
var state_26292__$1 = state_26292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26292__$1,(18),inst_26245);
} else {
if((state_val_26293 === (21))){
var inst_26284 = (state_26292[(2)]);
var state_26292__$1 = state_26292;
var statearr_26300_26341 = state_26292__$1;
(statearr_26300_26341[(2)] = inst_26284);

(statearr_26300_26341[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (31))){
var inst_26273 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26292__$1 = state_26292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26292__$1,(34),inst_26273);
} else {
if((state_val_26293 === (32))){
var state_26292__$1 = state_26292;
var statearr_26301_26342 = state_26292__$1;
(statearr_26301_26342[(2)] = null);

(statearr_26301_26342[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (33))){
var inst_26278 = (state_26292[(2)]);
var state_26292__$1 = state_26292;
var statearr_26302_26343 = state_26292__$1;
(statearr_26302_26343[(2)] = inst_26278);

(statearr_26302_26343[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (13))){
var inst_26232 = (state_26292[(2)]);
var inst_26233 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26234 = figwheel.client.format_messages.call(null,inst_26233);
var inst_26235 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26236 = figwheel.client.heads_up.display_error.call(null,inst_26234,inst_26235);
var state_26292__$1 = (function (){var statearr_26303 = state_26292;
(statearr_26303[(7)] = inst_26232);

return statearr_26303;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26292__$1,(14),inst_26236);
} else {
if((state_val_26293 === (22))){
var inst_26256 = figwheel.client.heads_up.clear.call(null);
var state_26292__$1 = state_26292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26292__$1,(25),inst_26256);
} else {
if((state_val_26293 === (29))){
var inst_26280 = (state_26292[(2)]);
var state_26292__$1 = state_26292;
var statearr_26304_26344 = state_26292__$1;
(statearr_26304_26344[(2)] = inst_26280);

(statearr_26304_26344[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (6))){
var inst_26222 = figwheel.client.heads_up.clear.call(null);
var state_26292__$1 = state_26292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26292__$1,(9),inst_26222);
} else {
if((state_val_26293 === (28))){
var inst_26271 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26292__$1 = state_26292;
if(cljs.core.truth_(inst_26271)){
var statearr_26305_26345 = state_26292__$1;
(statearr_26305_26345[(1)] = (31));

} else {
var statearr_26306_26346 = state_26292__$1;
(statearr_26306_26346[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (25))){
var inst_26258 = (state_26292[(2)]);
var inst_26259 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26260 = figwheel.client.heads_up.display_warning.call(null,inst_26259);
var state_26292__$1 = (function (){var statearr_26307 = state_26292;
(statearr_26307[(8)] = inst_26258);

return statearr_26307;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26292__$1,(26),inst_26260);
} else {
if((state_val_26293 === (34))){
var inst_26275 = (state_26292[(2)]);
var state_26292__$1 = state_26292;
var statearr_26308_26347 = state_26292__$1;
(statearr_26308_26347[(2)] = inst_26275);

(statearr_26308_26347[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (17))){
var inst_26286 = (state_26292[(2)]);
var state_26292__$1 = state_26292;
var statearr_26309_26348 = state_26292__$1;
(statearr_26309_26348[(2)] = inst_26286);

(statearr_26309_26348[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (3))){
var inst_26228 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26292__$1 = state_26292;
if(cljs.core.truth_(inst_26228)){
var statearr_26310_26349 = state_26292__$1;
(statearr_26310_26349[(1)] = (10));

} else {
var statearr_26311_26350 = state_26292__$1;
(statearr_26311_26350[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (12))){
var inst_26288 = (state_26292[(2)]);
var state_26292__$1 = state_26292;
var statearr_26312_26351 = state_26292__$1;
(statearr_26312_26351[(2)] = inst_26288);

(statearr_26312_26351[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (2))){
var inst_26216 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26292__$1 = state_26292;
if(cljs.core.truth_(inst_26216)){
var statearr_26313_26352 = state_26292__$1;
(statearr_26313_26352[(1)] = (5));

} else {
var statearr_26314_26353 = state_26292__$1;
(statearr_26314_26353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (23))){
var inst_26264 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26292__$1 = state_26292;
if(cljs.core.truth_(inst_26264)){
var statearr_26315_26354 = state_26292__$1;
(statearr_26315_26354[(1)] = (27));

} else {
var statearr_26316_26355 = state_26292__$1;
(statearr_26316_26355[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (19))){
var inst_26251 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26252 = figwheel.client.heads_up.append_message.call(null,inst_26251);
var state_26292__$1 = state_26292;
var statearr_26317_26356 = state_26292__$1;
(statearr_26317_26356[(2)] = inst_26252);

(statearr_26317_26356[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (11))){
var inst_26240 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26292__$1 = state_26292;
if(cljs.core.truth_(inst_26240)){
var statearr_26318_26357 = state_26292__$1;
(statearr_26318_26357[(1)] = (15));

} else {
var statearr_26319_26358 = state_26292__$1;
(statearr_26319_26358[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (9))){
var inst_26224 = (state_26292[(2)]);
var state_26292__$1 = state_26292;
var statearr_26320_26359 = state_26292__$1;
(statearr_26320_26359[(2)] = inst_26224);

(statearr_26320_26359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (5))){
var inst_26218 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26292__$1 = state_26292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26292__$1,(8),inst_26218);
} else {
if((state_val_26293 === (14))){
var inst_26238 = (state_26292[(2)]);
var state_26292__$1 = state_26292;
var statearr_26321_26360 = state_26292__$1;
(statearr_26321_26360[(2)] = inst_26238);

(statearr_26321_26360[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (26))){
var inst_26262 = (state_26292[(2)]);
var state_26292__$1 = state_26292;
var statearr_26322_26361 = state_26292__$1;
(statearr_26322_26361[(2)] = inst_26262);

(statearr_26322_26361[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (16))){
var inst_26249 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26292__$1 = state_26292;
if(cljs.core.truth_(inst_26249)){
var statearr_26323_26362 = state_26292__$1;
(statearr_26323_26362[(1)] = (19));

} else {
var statearr_26324_26363 = state_26292__$1;
(statearr_26324_26363[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (30))){
var inst_26269 = (state_26292[(2)]);
var state_26292__$1 = state_26292;
var statearr_26325_26364 = state_26292__$1;
(statearr_26325_26364[(2)] = inst_26269);

(statearr_26325_26364[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (10))){
var inst_26230 = figwheel.client.heads_up.clear.call(null);
var state_26292__$1 = state_26292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26292__$1,(13),inst_26230);
} else {
if((state_val_26293 === (18))){
var inst_26247 = (state_26292[(2)]);
var state_26292__$1 = state_26292;
var statearr_26326_26365 = state_26292__$1;
(statearr_26326_26365[(2)] = inst_26247);

(statearr_26326_26365[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26293 === (8))){
var inst_26220 = (state_26292[(2)]);
var state_26292__$1 = state_26292;
var statearr_26327_26366 = state_26292__$1;
(statearr_26327_26366[(2)] = inst_26220);

(statearr_26327_26366[(1)] = (7));


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
});})(c__21859__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21797__auto__,c__21859__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21798__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21798__auto____0 = (function (){
var statearr_26331 = [null,null,null,null,null,null,null,null,null];
(statearr_26331[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21798__auto__);

(statearr_26331[(1)] = (1));

return statearr_26331;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21798__auto____1 = (function (state_26292){
while(true){
var ret_value__21799__auto__ = (function (){try{while(true){
var result__21800__auto__ = switch__21797__auto__.call(null,state_26292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21800__auto__;
}
break;
}
}catch (e26332){if((e26332 instanceof Object)){
var ex__21801__auto__ = e26332;
var statearr_26333_26367 = state_26292;
(statearr_26333_26367[(5)] = ex__21801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26368 = state_26292;
state_26292 = G__26368;
continue;
} else {
return ret_value__21799__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21798__auto__ = function(state_26292){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21798__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21798__auto____1.call(this,state_26292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21798__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21798__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21798__auto__;
})()
;})(switch__21797__auto__,c__21859__auto__,msg_hist,msg_names,msg))
})();
var state__21861__auto__ = (function (){var statearr_26334 = f__21860__auto__.call(null);
(statearr_26334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21859__auto__);

return statearr_26334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21861__auto__);
});})(c__21859__auto__,msg_hist,msg_names,msg))
);

return c__21859__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21859__auto___26431 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21859__auto___26431,ch){
return (function (){
var f__21860__auto__ = (function (){var switch__21797__auto__ = ((function (c__21859__auto___26431,ch){
return (function (state_26414){
var state_val_26415 = (state_26414[(1)]);
if((state_val_26415 === (1))){
var state_26414__$1 = state_26414;
var statearr_26416_26432 = state_26414__$1;
(statearr_26416_26432[(2)] = null);

(statearr_26416_26432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26415 === (2))){
var state_26414__$1 = state_26414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26414__$1,(4),ch);
} else {
if((state_val_26415 === (3))){
var inst_26412 = (state_26414[(2)]);
var state_26414__$1 = state_26414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26414__$1,inst_26412);
} else {
if((state_val_26415 === (4))){
var inst_26402 = (state_26414[(7)]);
var inst_26402__$1 = (state_26414[(2)]);
var state_26414__$1 = (function (){var statearr_26417 = state_26414;
(statearr_26417[(7)] = inst_26402__$1);

return statearr_26417;
})();
if(cljs.core.truth_(inst_26402__$1)){
var statearr_26418_26433 = state_26414__$1;
(statearr_26418_26433[(1)] = (5));

} else {
var statearr_26419_26434 = state_26414__$1;
(statearr_26419_26434[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26415 === (5))){
var inst_26402 = (state_26414[(7)]);
var inst_26404 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_26402);
var state_26414__$1 = state_26414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26414__$1,(8),inst_26404);
} else {
if((state_val_26415 === (6))){
var state_26414__$1 = state_26414;
var statearr_26420_26435 = state_26414__$1;
(statearr_26420_26435[(2)] = null);

(statearr_26420_26435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26415 === (7))){
var inst_26410 = (state_26414[(2)]);
var state_26414__$1 = state_26414;
var statearr_26421_26436 = state_26414__$1;
(statearr_26421_26436[(2)] = inst_26410);

(statearr_26421_26436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26415 === (8))){
var inst_26406 = (state_26414[(2)]);
var state_26414__$1 = (function (){var statearr_26422 = state_26414;
(statearr_26422[(8)] = inst_26406);

return statearr_26422;
})();
var statearr_26423_26437 = state_26414__$1;
(statearr_26423_26437[(2)] = null);

(statearr_26423_26437[(1)] = (2));


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
});})(c__21859__auto___26431,ch))
;
return ((function (switch__21797__auto__,c__21859__auto___26431,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21798__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21798__auto____0 = (function (){
var statearr_26427 = [null,null,null,null,null,null,null,null,null];
(statearr_26427[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21798__auto__);

(statearr_26427[(1)] = (1));

return statearr_26427;
});
var figwheel$client$heads_up_plugin_$_state_machine__21798__auto____1 = (function (state_26414){
while(true){
var ret_value__21799__auto__ = (function (){try{while(true){
var result__21800__auto__ = switch__21797__auto__.call(null,state_26414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21800__auto__;
}
break;
}
}catch (e26428){if((e26428 instanceof Object)){
var ex__21801__auto__ = e26428;
var statearr_26429_26438 = state_26414;
(statearr_26429_26438[(5)] = ex__21801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26439 = state_26414;
state_26414 = G__26439;
continue;
} else {
return ret_value__21799__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21798__auto__ = function(state_26414){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21798__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21798__auto____1.call(this,state_26414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21798__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21798__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21798__auto__;
})()
;})(switch__21797__auto__,c__21859__auto___26431,ch))
})();
var state__21861__auto__ = (function (){var statearr_26430 = f__21860__auto__.call(null);
(statearr_26430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21859__auto___26431);

return statearr_26430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21861__auto__);
});})(c__21859__auto___26431,ch))
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
var c__21859__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21859__auto__){
return (function (){
var f__21860__auto__ = (function (){var switch__21797__auto__ = ((function (c__21859__auto__){
return (function (state_26460){
var state_val_26461 = (state_26460[(1)]);
if((state_val_26461 === (1))){
var inst_26455 = cljs.core.async.timeout.call(null,(3000));
var state_26460__$1 = state_26460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26460__$1,(2),inst_26455);
} else {
if((state_val_26461 === (2))){
var inst_26457 = (state_26460[(2)]);
var inst_26458 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_26460__$1 = (function (){var statearr_26462 = state_26460;
(statearr_26462[(7)] = inst_26457);

return statearr_26462;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26460__$1,inst_26458);
} else {
return null;
}
}
});})(c__21859__auto__))
;
return ((function (switch__21797__auto__,c__21859__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21798__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21798__auto____0 = (function (){
var statearr_26466 = [null,null,null,null,null,null,null,null];
(statearr_26466[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21798__auto__);

(statearr_26466[(1)] = (1));

return statearr_26466;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21798__auto____1 = (function (state_26460){
while(true){
var ret_value__21799__auto__ = (function (){try{while(true){
var result__21800__auto__ = switch__21797__auto__.call(null,state_26460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21800__auto__;
}
break;
}
}catch (e26467){if((e26467 instanceof Object)){
var ex__21801__auto__ = e26467;
var statearr_26468_26470 = state_26460;
(statearr_26468_26470[(5)] = ex__21801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26471 = state_26460;
state_26460 = G__26471;
continue;
} else {
return ret_value__21799__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21798__auto__ = function(state_26460){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21798__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21798__auto____1.call(this,state_26460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21798__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21798__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21798__auto__;
})()
;})(switch__21797__auto__,c__21859__auto__))
})();
var state__21861__auto__ = (function (){var statearr_26469 = f__21860__auto__.call(null);
(statearr_26469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21859__auto__);

return statearr_26469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21861__auto__);
});})(c__21859__auto__))
);

return c__21859__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__26472){
var map__26478 = p__26472;
var map__26478__$1 = ((cljs.core.seq_QMARK_.call(null,map__26478))?cljs.core.apply.call(null,cljs.core.hash_map,map__26478):map__26478);
var ed = map__26478__$1;
var formatted_exception = cljs.core.get.call(null,map__26478__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__26478__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__26478__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__26479_26483 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__26480_26484 = null;
var count__26481_26485 = (0);
var i__26482_26486 = (0);
while(true){
if((i__26482_26486 < count__26481_26485)){
var msg_26487 = cljs.core._nth.call(null,chunk__26480_26484,i__26482_26486);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26487);

var G__26488 = seq__26479_26483;
var G__26489 = chunk__26480_26484;
var G__26490 = count__26481_26485;
var G__26491 = (i__26482_26486 + (1));
seq__26479_26483 = G__26488;
chunk__26480_26484 = G__26489;
count__26481_26485 = G__26490;
i__26482_26486 = G__26491;
continue;
} else {
var temp__4423__auto___26492 = cljs.core.seq.call(null,seq__26479_26483);
if(temp__4423__auto___26492){
var seq__26479_26493__$1 = temp__4423__auto___26492;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26479_26493__$1)){
var c__18872__auto___26494 = cljs.core.chunk_first.call(null,seq__26479_26493__$1);
var G__26495 = cljs.core.chunk_rest.call(null,seq__26479_26493__$1);
var G__26496 = c__18872__auto___26494;
var G__26497 = cljs.core.count.call(null,c__18872__auto___26494);
var G__26498 = (0);
seq__26479_26483 = G__26495;
chunk__26480_26484 = G__26496;
count__26481_26485 = G__26497;
i__26482_26486 = G__26498;
continue;
} else {
var msg_26499 = cljs.core.first.call(null,seq__26479_26493__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_26499);

var G__26500 = cljs.core.next.call(null,seq__26479_26493__$1);
var G__26501 = null;
var G__26502 = (0);
var G__26503 = (0);
seq__26479_26483 = G__26500;
chunk__26480_26484 = G__26501;
count__26481_26485 = G__26502;
i__26482_26486 = G__26503;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__26504){
var map__26506 = p__26504;
var map__26506__$1 = ((cljs.core.seq_QMARK_.call(null,map__26506))?cljs.core.apply.call(null,cljs.core.hash_map,map__26506):map__26506);
var w = map__26506__$1;
var message = cljs.core.get.call(null,map__26506__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__26513 = cljs.core.seq.call(null,plugins);
var chunk__26514 = null;
var count__26515 = (0);
var i__26516 = (0);
while(true){
if((i__26516 < count__26515)){
var vec__26517 = cljs.core._nth.call(null,chunk__26514,i__26516);
var k = cljs.core.nth.call(null,vec__26517,(0),null);
var plugin = cljs.core.nth.call(null,vec__26517,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26519 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26513,chunk__26514,count__26515,i__26516,pl_26519,vec__26517,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_26519.call(null,msg_hist);
});})(seq__26513,chunk__26514,count__26515,i__26516,pl_26519,vec__26517,k,plugin))
);
} else {
}

var G__26520 = seq__26513;
var G__26521 = chunk__26514;
var G__26522 = count__26515;
var G__26523 = (i__26516 + (1));
seq__26513 = G__26520;
chunk__26514 = G__26521;
count__26515 = G__26522;
i__26516 = G__26523;
continue;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,seq__26513);
if(temp__4423__auto__){
var seq__26513__$1 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26513__$1)){
var c__18872__auto__ = cljs.core.chunk_first.call(null,seq__26513__$1);
var G__26524 = cljs.core.chunk_rest.call(null,seq__26513__$1);
var G__26525 = c__18872__auto__;
var G__26526 = cljs.core.count.call(null,c__18872__auto__);
var G__26527 = (0);
seq__26513 = G__26524;
chunk__26514 = G__26525;
count__26515 = G__26526;
i__26516 = G__26527;
continue;
} else {
var vec__26518 = cljs.core.first.call(null,seq__26513__$1);
var k = cljs.core.nth.call(null,vec__26518,(0),null);
var plugin = cljs.core.nth.call(null,vec__26518,(1),null);
if(cljs.core.truth_(plugin)){
var pl_26528 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__26513,chunk__26514,count__26515,i__26516,pl_26528,vec__26518,k,plugin,seq__26513__$1,temp__4423__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_26528.call(null,msg_hist);
});})(seq__26513,chunk__26514,count__26515,i__26516,pl_26528,vec__26518,k,plugin,seq__26513__$1,temp__4423__auto__))
);
} else {
}

var G__26529 = cljs.core.next.call(null,seq__26513__$1);
var G__26530 = null;
var G__26531 = (0);
var G__26532 = (0);
seq__26513 = G__26529;
chunk__26514 = G__26530;
count__26515 = G__26531;
i__26516 = G__26532;
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
var G__26534 = arguments.length;
switch (G__26534) {
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

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26537){
var map__26538 = p__26537;
var map__26538__$1 = ((cljs.core.seq_QMARK_.call(null,map__26538))?cljs.core.apply.call(null,cljs.core.hash_map,map__26538):map__26538);
var opts = map__26538__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26536){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26536));
});

//# sourceMappingURL=client.js.map