// Compiled by ClojureScript 0.0-3308 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__19127__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19127__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__26665_26673 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__26666_26674 = null;
var count__26667_26675 = (0);
var i__26668_26676 = (0);
while(true){
if((i__26668_26676 < count__26667_26675)){
var k_26677 = cljs.core._nth.call(null,chunk__26666_26674,i__26668_26676);
e.setAttribute(cljs.core.name.call(null,k_26677),cljs.core.get.call(null,attrs,k_26677));

var G__26678 = seq__26665_26673;
var G__26679 = chunk__26666_26674;
var G__26680 = count__26667_26675;
var G__26681 = (i__26668_26676 + (1));
seq__26665_26673 = G__26678;
chunk__26666_26674 = G__26679;
count__26667_26675 = G__26680;
i__26668_26676 = G__26681;
continue;
} else {
var temp__4423__auto___26682 = cljs.core.seq.call(null,seq__26665_26673);
if(temp__4423__auto___26682){
var seq__26665_26683__$1 = temp__4423__auto___26682;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26665_26683__$1)){
var c__18872__auto___26684 = cljs.core.chunk_first.call(null,seq__26665_26683__$1);
var G__26685 = cljs.core.chunk_rest.call(null,seq__26665_26683__$1);
var G__26686 = c__18872__auto___26684;
var G__26687 = cljs.core.count.call(null,c__18872__auto___26684);
var G__26688 = (0);
seq__26665_26673 = G__26685;
chunk__26666_26674 = G__26686;
count__26667_26675 = G__26687;
i__26668_26676 = G__26688;
continue;
} else {
var k_26689 = cljs.core.first.call(null,seq__26665_26683__$1);
e.setAttribute(cljs.core.name.call(null,k_26689),cljs.core.get.call(null,attrs,k_26689));

var G__26690 = cljs.core.next.call(null,seq__26665_26683__$1);
var G__26691 = null;
var G__26692 = (0);
var G__26693 = (0);
seq__26665_26673 = G__26690;
chunk__26666_26674 = G__26691;
count__26667_26675 = G__26692;
i__26668_26676 = G__26693;
continue;
}
} else {
}
}
break;
}

var seq__26669_26694 = cljs.core.seq.call(null,children);
var chunk__26670_26695 = null;
var count__26671_26696 = (0);
var i__26672_26697 = (0);
while(true){
if((i__26672_26697 < count__26671_26696)){
var ch_26698 = cljs.core._nth.call(null,chunk__26670_26695,i__26672_26697);
e.appendChild(ch_26698);

var G__26699 = seq__26669_26694;
var G__26700 = chunk__26670_26695;
var G__26701 = count__26671_26696;
var G__26702 = (i__26672_26697 + (1));
seq__26669_26694 = G__26699;
chunk__26670_26695 = G__26700;
count__26671_26696 = G__26701;
i__26672_26697 = G__26702;
continue;
} else {
var temp__4423__auto___26703 = cljs.core.seq.call(null,seq__26669_26694);
if(temp__4423__auto___26703){
var seq__26669_26704__$1 = temp__4423__auto___26703;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26669_26704__$1)){
var c__18872__auto___26705 = cljs.core.chunk_first.call(null,seq__26669_26704__$1);
var G__26706 = cljs.core.chunk_rest.call(null,seq__26669_26704__$1);
var G__26707 = c__18872__auto___26705;
var G__26708 = cljs.core.count.call(null,c__18872__auto___26705);
var G__26709 = (0);
seq__26669_26694 = G__26706;
chunk__26670_26695 = G__26707;
count__26671_26696 = G__26708;
i__26672_26697 = G__26709;
continue;
} else {
var ch_26710 = cljs.core.first.call(null,seq__26669_26704__$1);
e.appendChild(ch_26710);

var G__26711 = cljs.core.next.call(null,seq__26669_26704__$1);
var G__26712 = null;
var G__26713 = (0);
var G__26714 = (0);
seq__26669_26694 = G__26711;
chunk__26670_26695 = G__26712;
count__26671_26696 = G__26713;
i__26672_26697 = G__26714;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq26662){
var G__26663 = cljs.core.first.call(null,seq26662);
var seq26662__$1 = cljs.core.next.call(null,seq26662);
var G__26664 = cljs.core.first.call(null,seq26662__$1);
var seq26662__$2 = cljs.core.next.call(null,seq26662__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__26663,G__26664,seq26662__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__18982__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__18983__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__18984__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__18985__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__18986__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__18982__auto__,prefer_table__18983__auto__,method_cache__18984__auto__,cached_hierarchy__18985__auto__,hierarchy__18986__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__18982__auto__,prefer_table__18983__auto__,method_cache__18984__auto__,cached_hierarchy__18985__auto__,hierarchy__18986__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__18986__auto__,method_table__18982__auto__,prefer_table__18983__auto__,method_cache__18984__auto__,cached_hierarchy__18985__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_26715 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_26715.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_26715.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_26715.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_26715);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__26716,st_map){
var map__26720 = p__26716;
var map__26720__$1 = ((cljs.core.seq_QMARK_.call(null,map__26720))?cljs.core.apply.call(null,cljs.core.hash_map,map__26720):map__26720);
var container_el = cljs.core.get.call(null,map__26720__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__26720,map__26720__$1,container_el){
return (function (p__26721){
var vec__26722 = p__26721;
var k = cljs.core.nth.call(null,vec__26722,(0),null);
var v = cljs.core.nth.call(null,vec__26722,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__26720,map__26720__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__26723,dom_str){
var map__26725 = p__26723;
var map__26725__$1 = ((cljs.core.seq_QMARK_.call(null,map__26725))?cljs.core.apply.call(null,cljs.core.hash_map,map__26725):map__26725);
var c = map__26725__$1;
var content_area_el = cljs.core.get.call(null,map__26725__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__26726){
var map__26728 = p__26726;
var map__26728__$1 = ((cljs.core.seq_QMARK_.call(null,map__26728))?cljs.core.apply.call(null,cljs.core.hash_map,map__26728):map__26728);
var content_area_el = cljs.core.get.call(null,map__26728__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__21859__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21859__auto__){
return (function (){
var f__21860__auto__ = (function (){var switch__21797__auto__ = ((function (c__21859__auto__){
return (function (state_26770){
var state_val_26771 = (state_26770[(1)]);
if((state_val_26771 === (1))){
var inst_26755 = (state_26770[(7)]);
var inst_26755__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26756 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26757 = ["10px","10px","100%","68px","1.0"];
var inst_26758 = cljs.core.PersistentHashMap.fromArrays(inst_26756,inst_26757);
var inst_26759 = cljs.core.merge.call(null,inst_26758,style);
var inst_26760 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26755__$1,inst_26759);
var inst_26761 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26755__$1,msg);
var inst_26762 = cljs.core.async.timeout.call(null,(300));
var state_26770__$1 = (function (){var statearr_26772 = state_26770;
(statearr_26772[(8)] = inst_26760);

(statearr_26772[(9)] = inst_26761);

(statearr_26772[(7)] = inst_26755__$1);

return statearr_26772;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26770__$1,(2),inst_26762);
} else {
if((state_val_26771 === (2))){
var inst_26755 = (state_26770[(7)]);
var inst_26764 = (state_26770[(2)]);
var inst_26765 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_26766 = ["auto"];
var inst_26767 = cljs.core.PersistentHashMap.fromArrays(inst_26765,inst_26766);
var inst_26768 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26755,inst_26767);
var state_26770__$1 = (function (){var statearr_26773 = state_26770;
(statearr_26773[(10)] = inst_26764);

return statearr_26773;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26770__$1,inst_26768);
} else {
return null;
}
}
});})(c__21859__auto__))
;
return ((function (switch__21797__auto__,c__21859__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__21798__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__21798__auto____0 = (function (){
var statearr_26777 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26777[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__21798__auto__);

(statearr_26777[(1)] = (1));

return statearr_26777;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__21798__auto____1 = (function (state_26770){
while(true){
var ret_value__21799__auto__ = (function (){try{while(true){
var result__21800__auto__ = switch__21797__auto__.call(null,state_26770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21800__auto__;
}
break;
}
}catch (e26778){if((e26778 instanceof Object)){
var ex__21801__auto__ = e26778;
var statearr_26779_26781 = state_26770;
(statearr_26779_26781[(5)] = ex__21801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26782 = state_26770;
state_26770 = G__26782;
continue;
} else {
return ret_value__21799__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__21798__auto__ = function(state_26770){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21798__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21798__auto____1.call(this,state_26770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__21798__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__21798__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__21798__auto__;
})()
;})(switch__21797__auto__,c__21859__auto__))
})();
var state__21861__auto__ = (function (){var statearr_26780 = f__21860__auto__.call(null);
(statearr_26780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21859__auto__);

return statearr_26780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21861__auto__);
});})(c__21859__auto__))
);

return c__21859__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4421__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4421__auto__)){
var vec__26784 = temp__4421__auto__;
var f = cljs.core.nth.call(null,vec__26784,(0),null);
var ln = cljs.core.nth.call(null,vec__26784,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__26787 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__26787,(0),null);
var file_line = cljs.core.nth.call(null,vec__26787,(1),null);
var file_column = cljs.core.nth.call(null,vec__26787,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__26787,file_name,file_line,file_column){
return (function (p1__26785_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__26785_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__26787,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18087__auto__ = file_line;
if(cljs.core.truth_(or__18087__auto__)){
return or__18087__auto__;
} else {
var and__18075__auto__ = cause;
if(cljs.core.truth_(and__18075__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18075__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__26789 = figwheel.client.heads_up.ensure_container.call(null);
var map__26789__$1 = ((cljs.core.seq_QMARK_.call(null,map__26789))?cljs.core.apply.call(null,cljs.core.hash_map,map__26789):map__26789);
var content_area_el = cljs.core.get.call(null,map__26789__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__21859__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21859__auto__){
return (function (){
var f__21860__auto__ = (function (){var switch__21797__auto__ = ((function (c__21859__auto__){
return (function (state_26836){
var state_val_26837 = (state_26836[(1)]);
if((state_val_26837 === (1))){
var inst_26819 = (state_26836[(7)]);
var inst_26819__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26820 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26821 = ["0.0"];
var inst_26822 = cljs.core.PersistentHashMap.fromArrays(inst_26820,inst_26821);
var inst_26823 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26819__$1,inst_26822);
var inst_26824 = cljs.core.async.timeout.call(null,(300));
var state_26836__$1 = (function (){var statearr_26838 = state_26836;
(statearr_26838[(8)] = inst_26823);

(statearr_26838[(7)] = inst_26819__$1);

return statearr_26838;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26836__$1,(2),inst_26824);
} else {
if((state_val_26837 === (2))){
var inst_26819 = (state_26836[(7)]);
var inst_26826 = (state_26836[(2)]);
var inst_26827 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_26828 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_26829 = cljs.core.PersistentHashMap.fromArrays(inst_26827,inst_26828);
var inst_26830 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26819,inst_26829);
var inst_26831 = cljs.core.async.timeout.call(null,(200));
var state_26836__$1 = (function (){var statearr_26839 = state_26836;
(statearr_26839[(9)] = inst_26830);

(statearr_26839[(10)] = inst_26826);

return statearr_26839;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26836__$1,(3),inst_26831);
} else {
if((state_val_26837 === (3))){
var inst_26819 = (state_26836[(7)]);
var inst_26833 = (state_26836[(2)]);
var inst_26834 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26819,"");
var state_26836__$1 = (function (){var statearr_26840 = state_26836;
(statearr_26840[(11)] = inst_26833);

return statearr_26840;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26836__$1,inst_26834);
} else {
return null;
}
}
}
});})(c__21859__auto__))
;
return ((function (switch__21797__auto__,c__21859__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__21798__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__21798__auto____0 = (function (){
var statearr_26844 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26844[(0)] = figwheel$client$heads_up$clear_$_state_machine__21798__auto__);

(statearr_26844[(1)] = (1));

return statearr_26844;
});
var figwheel$client$heads_up$clear_$_state_machine__21798__auto____1 = (function (state_26836){
while(true){
var ret_value__21799__auto__ = (function (){try{while(true){
var result__21800__auto__ = switch__21797__auto__.call(null,state_26836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21800__auto__;
}
break;
}
}catch (e26845){if((e26845 instanceof Object)){
var ex__21801__auto__ = e26845;
var statearr_26846_26848 = state_26836;
(statearr_26846_26848[(5)] = ex__21801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26849 = state_26836;
state_26836 = G__26849;
continue;
} else {
return ret_value__21799__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__21798__auto__ = function(state_26836){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__21798__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__21798__auto____1.call(this,state_26836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__21798__auto____0;
figwheel$client$heads_up$clear_$_state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__21798__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__21798__auto__;
})()
;})(switch__21797__auto__,c__21859__auto__))
})();
var state__21861__auto__ = (function (){var statearr_26847 = f__21860__auto__.call(null);
(statearr_26847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21859__auto__);

return statearr_26847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21861__auto__);
});})(c__21859__auto__))
);

return c__21859__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__21859__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21859__auto__){
return (function (){
var f__21860__auto__ = (function (){var switch__21797__auto__ = ((function (c__21859__auto__){
return (function (state_26881){
var state_val_26882 = (state_26881[(1)]);
if((state_val_26882 === (1))){
var inst_26871 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_26881__$1 = state_26881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26881__$1,(2),inst_26871);
} else {
if((state_val_26882 === (2))){
var inst_26873 = (state_26881[(2)]);
var inst_26874 = cljs.core.async.timeout.call(null,(400));
var state_26881__$1 = (function (){var statearr_26883 = state_26881;
(statearr_26883[(7)] = inst_26873);

return statearr_26883;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26881__$1,(3),inst_26874);
} else {
if((state_val_26882 === (3))){
var inst_26876 = (state_26881[(2)]);
var inst_26877 = figwheel.client.heads_up.clear.call(null);
var state_26881__$1 = (function (){var statearr_26884 = state_26881;
(statearr_26884[(8)] = inst_26876);

return statearr_26884;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26881__$1,(4),inst_26877);
} else {
if((state_val_26882 === (4))){
var inst_26879 = (state_26881[(2)]);
var state_26881__$1 = state_26881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26881__$1,inst_26879);
} else {
return null;
}
}
}
}
});})(c__21859__auto__))
;
return ((function (switch__21797__auto__,c__21859__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__21798__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__21798__auto____0 = (function (){
var statearr_26888 = [null,null,null,null,null,null,null,null,null];
(statearr_26888[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__21798__auto__);

(statearr_26888[(1)] = (1));

return statearr_26888;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__21798__auto____1 = (function (state_26881){
while(true){
var ret_value__21799__auto__ = (function (){try{while(true){
var result__21800__auto__ = switch__21797__auto__.call(null,state_26881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21800__auto__;
}
break;
}
}catch (e26889){if((e26889 instanceof Object)){
var ex__21801__auto__ = e26889;
var statearr_26890_26892 = state_26881;
(statearr_26890_26892[(5)] = ex__21801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26893 = state_26881;
state_26881 = G__26893;
continue;
} else {
return ret_value__21799__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__21798__auto__ = function(state_26881){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21798__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21798__auto____1.call(this,state_26881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__21798__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__21798__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__21798__auto__;
})()
;})(switch__21797__auto__,c__21859__auto__))
})();
var state__21861__auto__ = (function (){var statearr_26891 = f__21860__auto__.call(null);
(statearr_26891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21859__auto__);

return statearr_26891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21861__auto__);
});})(c__21859__auto__))
);

return c__21859__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map