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
var seq__26668_26676 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__26669_26677 = null;
var count__26670_26678 = (0);
var i__26671_26679 = (0);
while(true){
if((i__26671_26679 < count__26670_26678)){
var k_26680 = cljs.core._nth.call(null,chunk__26669_26677,i__26671_26679);
e.setAttribute(cljs.core.name.call(null,k_26680),cljs.core.get.call(null,attrs,k_26680));

var G__26681 = seq__26668_26676;
var G__26682 = chunk__26669_26677;
var G__26683 = count__26670_26678;
var G__26684 = (i__26671_26679 + (1));
seq__26668_26676 = G__26681;
chunk__26669_26677 = G__26682;
count__26670_26678 = G__26683;
i__26671_26679 = G__26684;
continue;
} else {
var temp__4423__auto___26685 = cljs.core.seq.call(null,seq__26668_26676);
if(temp__4423__auto___26685){
var seq__26668_26686__$1 = temp__4423__auto___26685;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26668_26686__$1)){
var c__18872__auto___26687 = cljs.core.chunk_first.call(null,seq__26668_26686__$1);
var G__26688 = cljs.core.chunk_rest.call(null,seq__26668_26686__$1);
var G__26689 = c__18872__auto___26687;
var G__26690 = cljs.core.count.call(null,c__18872__auto___26687);
var G__26691 = (0);
seq__26668_26676 = G__26688;
chunk__26669_26677 = G__26689;
count__26670_26678 = G__26690;
i__26671_26679 = G__26691;
continue;
} else {
var k_26692 = cljs.core.first.call(null,seq__26668_26686__$1);
e.setAttribute(cljs.core.name.call(null,k_26692),cljs.core.get.call(null,attrs,k_26692));

var G__26693 = cljs.core.next.call(null,seq__26668_26686__$1);
var G__26694 = null;
var G__26695 = (0);
var G__26696 = (0);
seq__26668_26676 = G__26693;
chunk__26669_26677 = G__26694;
count__26670_26678 = G__26695;
i__26671_26679 = G__26696;
continue;
}
} else {
}
}
break;
}

var seq__26672_26697 = cljs.core.seq.call(null,children);
var chunk__26673_26698 = null;
var count__26674_26699 = (0);
var i__26675_26700 = (0);
while(true){
if((i__26675_26700 < count__26674_26699)){
var ch_26701 = cljs.core._nth.call(null,chunk__26673_26698,i__26675_26700);
e.appendChild(ch_26701);

var G__26702 = seq__26672_26697;
var G__26703 = chunk__26673_26698;
var G__26704 = count__26674_26699;
var G__26705 = (i__26675_26700 + (1));
seq__26672_26697 = G__26702;
chunk__26673_26698 = G__26703;
count__26674_26699 = G__26704;
i__26675_26700 = G__26705;
continue;
} else {
var temp__4423__auto___26706 = cljs.core.seq.call(null,seq__26672_26697);
if(temp__4423__auto___26706){
var seq__26672_26707__$1 = temp__4423__auto___26706;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26672_26707__$1)){
var c__18872__auto___26708 = cljs.core.chunk_first.call(null,seq__26672_26707__$1);
var G__26709 = cljs.core.chunk_rest.call(null,seq__26672_26707__$1);
var G__26710 = c__18872__auto___26708;
var G__26711 = cljs.core.count.call(null,c__18872__auto___26708);
var G__26712 = (0);
seq__26672_26697 = G__26709;
chunk__26673_26698 = G__26710;
count__26674_26699 = G__26711;
i__26675_26700 = G__26712;
continue;
} else {
var ch_26713 = cljs.core.first.call(null,seq__26672_26707__$1);
e.appendChild(ch_26713);

var G__26714 = cljs.core.next.call(null,seq__26672_26707__$1);
var G__26715 = null;
var G__26716 = (0);
var G__26717 = (0);
seq__26672_26697 = G__26714;
chunk__26673_26698 = G__26715;
count__26674_26699 = G__26716;
i__26675_26700 = G__26717;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq26665){
var G__26666 = cljs.core.first.call(null,seq26665);
var seq26665__$1 = cljs.core.next.call(null,seq26665);
var G__26667 = cljs.core.first.call(null,seq26665__$1);
var seq26665__$2 = cljs.core.next.call(null,seq26665__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__26666,G__26667,seq26665__$2);
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
var el_26718 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_26718.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_26718.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_26718.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_26718);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__26719,st_map){
var map__26723 = p__26719;
var map__26723__$1 = ((cljs.core.seq_QMARK_.call(null,map__26723))?cljs.core.apply.call(null,cljs.core.hash_map,map__26723):map__26723);
var container_el = cljs.core.get.call(null,map__26723__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__26723,map__26723__$1,container_el){
return (function (p__26724){
var vec__26725 = p__26724;
var k = cljs.core.nth.call(null,vec__26725,(0),null);
var v = cljs.core.nth.call(null,vec__26725,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__26723,map__26723__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__26726,dom_str){
var map__26728 = p__26726;
var map__26728__$1 = ((cljs.core.seq_QMARK_.call(null,map__26728))?cljs.core.apply.call(null,cljs.core.hash_map,map__26728):map__26728);
var c = map__26728__$1;
var content_area_el = cljs.core.get.call(null,map__26728__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__26729){
var map__26731 = p__26729;
var map__26731__$1 = ((cljs.core.seq_QMARK_.call(null,map__26731))?cljs.core.apply.call(null,cljs.core.hash_map,map__26731):map__26731);
var content_area_el = cljs.core.get.call(null,map__26731__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__21862__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21862__auto__){
return (function (){
var f__21863__auto__ = (function (){var switch__21800__auto__ = ((function (c__21862__auto__){
return (function (state_26773){
var state_val_26774 = (state_26773[(1)]);
if((state_val_26774 === (1))){
var inst_26758 = (state_26773[(7)]);
var inst_26758__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26759 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26760 = ["10px","10px","100%","68px","1.0"];
var inst_26761 = cljs.core.PersistentHashMap.fromArrays(inst_26759,inst_26760);
var inst_26762 = cljs.core.merge.call(null,inst_26761,style);
var inst_26763 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26758__$1,inst_26762);
var inst_26764 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26758__$1,msg);
var inst_26765 = cljs.core.async.timeout.call(null,(300));
var state_26773__$1 = (function (){var statearr_26775 = state_26773;
(statearr_26775[(8)] = inst_26763);

(statearr_26775[(9)] = inst_26764);

(statearr_26775[(7)] = inst_26758__$1);

return statearr_26775;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26773__$1,(2),inst_26765);
} else {
if((state_val_26774 === (2))){
var inst_26758 = (state_26773[(7)]);
var inst_26767 = (state_26773[(2)]);
var inst_26768 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_26769 = ["auto"];
var inst_26770 = cljs.core.PersistentHashMap.fromArrays(inst_26768,inst_26769);
var inst_26771 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26758,inst_26770);
var state_26773__$1 = (function (){var statearr_26776 = state_26773;
(statearr_26776[(10)] = inst_26767);

return statearr_26776;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26773__$1,inst_26771);
} else {
return null;
}
}
});})(c__21862__auto__))
;
return ((function (switch__21800__auto__,c__21862__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__21801__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__21801__auto____0 = (function (){
var statearr_26780 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26780[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__21801__auto__);

(statearr_26780[(1)] = (1));

return statearr_26780;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__21801__auto____1 = (function (state_26773){
while(true){
var ret_value__21802__auto__ = (function (){try{while(true){
var result__21803__auto__ = switch__21800__auto__.call(null,state_26773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21803__auto__;
}
break;
}
}catch (e26781){if((e26781 instanceof Object)){
var ex__21804__auto__ = e26781;
var statearr_26782_26784 = state_26773;
(statearr_26782_26784[(5)] = ex__21804__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26785 = state_26773;
state_26773 = G__26785;
continue;
} else {
return ret_value__21802__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__21801__auto__ = function(state_26773){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21801__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21801__auto____1.call(this,state_26773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__21801__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__21801__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__21801__auto__;
})()
;})(switch__21800__auto__,c__21862__auto__))
})();
var state__21864__auto__ = (function (){var statearr_26783 = f__21863__auto__.call(null);
(statearr_26783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21862__auto__);

return statearr_26783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21864__auto__);
});})(c__21862__auto__))
);

return c__21862__auto__;
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
var vec__26787 = temp__4421__auto__;
var f = cljs.core.nth.call(null,vec__26787,(0),null);
var ln = cljs.core.nth.call(null,vec__26787,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__26790 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__26790,(0),null);
var file_line = cljs.core.nth.call(null,vec__26790,(1),null);
var file_column = cljs.core.nth.call(null,vec__26790,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__26790,file_name,file_line,file_column){
return (function (p1__26788_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__26788_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__26790,file_name,file_line,file_column))
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
var map__26792 = figwheel.client.heads_up.ensure_container.call(null);
var map__26792__$1 = ((cljs.core.seq_QMARK_.call(null,map__26792))?cljs.core.apply.call(null,cljs.core.hash_map,map__26792):map__26792);
var content_area_el = cljs.core.get.call(null,map__26792__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__21862__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21862__auto__){
return (function (){
var f__21863__auto__ = (function (){var switch__21800__auto__ = ((function (c__21862__auto__){
return (function (state_26839){
var state_val_26840 = (state_26839[(1)]);
if((state_val_26840 === (1))){
var inst_26822 = (state_26839[(7)]);
var inst_26822__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26823 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26824 = ["0.0"];
var inst_26825 = cljs.core.PersistentHashMap.fromArrays(inst_26823,inst_26824);
var inst_26826 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26822__$1,inst_26825);
var inst_26827 = cljs.core.async.timeout.call(null,(300));
var state_26839__$1 = (function (){var statearr_26841 = state_26839;
(statearr_26841[(8)] = inst_26826);

(statearr_26841[(7)] = inst_26822__$1);

return statearr_26841;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26839__$1,(2),inst_26827);
} else {
if((state_val_26840 === (2))){
var inst_26822 = (state_26839[(7)]);
var inst_26829 = (state_26839[(2)]);
var inst_26830 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_26831 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_26832 = cljs.core.PersistentHashMap.fromArrays(inst_26830,inst_26831);
var inst_26833 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26822,inst_26832);
var inst_26834 = cljs.core.async.timeout.call(null,(200));
var state_26839__$1 = (function (){var statearr_26842 = state_26839;
(statearr_26842[(9)] = inst_26829);

(statearr_26842[(10)] = inst_26833);

return statearr_26842;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26839__$1,(3),inst_26834);
} else {
if((state_val_26840 === (3))){
var inst_26822 = (state_26839[(7)]);
var inst_26836 = (state_26839[(2)]);
var inst_26837 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26822,"");
var state_26839__$1 = (function (){var statearr_26843 = state_26839;
(statearr_26843[(11)] = inst_26836);

return statearr_26843;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26839__$1,inst_26837);
} else {
return null;
}
}
}
});})(c__21862__auto__))
;
return ((function (switch__21800__auto__,c__21862__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__21801__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__21801__auto____0 = (function (){
var statearr_26847 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26847[(0)] = figwheel$client$heads_up$clear_$_state_machine__21801__auto__);

(statearr_26847[(1)] = (1));

return statearr_26847;
});
var figwheel$client$heads_up$clear_$_state_machine__21801__auto____1 = (function (state_26839){
while(true){
var ret_value__21802__auto__ = (function (){try{while(true){
var result__21803__auto__ = switch__21800__auto__.call(null,state_26839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21803__auto__;
}
break;
}
}catch (e26848){if((e26848 instanceof Object)){
var ex__21804__auto__ = e26848;
var statearr_26849_26851 = state_26839;
(statearr_26849_26851[(5)] = ex__21804__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26848;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26852 = state_26839;
state_26839 = G__26852;
continue;
} else {
return ret_value__21802__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__21801__auto__ = function(state_26839){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__21801__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__21801__auto____1.call(this,state_26839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__21801__auto____0;
figwheel$client$heads_up$clear_$_state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__21801__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__21801__auto__;
})()
;})(switch__21800__auto__,c__21862__auto__))
})();
var state__21864__auto__ = (function (){var statearr_26850 = f__21863__auto__.call(null);
(statearr_26850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21862__auto__);

return statearr_26850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21864__auto__);
});})(c__21862__auto__))
);

return c__21862__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__21862__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21862__auto__){
return (function (){
var f__21863__auto__ = (function (){var switch__21800__auto__ = ((function (c__21862__auto__){
return (function (state_26884){
var state_val_26885 = (state_26884[(1)]);
if((state_val_26885 === (1))){
var inst_26874 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_26884__$1 = state_26884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26884__$1,(2),inst_26874);
} else {
if((state_val_26885 === (2))){
var inst_26876 = (state_26884[(2)]);
var inst_26877 = cljs.core.async.timeout.call(null,(400));
var state_26884__$1 = (function (){var statearr_26886 = state_26884;
(statearr_26886[(7)] = inst_26876);

return statearr_26886;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26884__$1,(3),inst_26877);
} else {
if((state_val_26885 === (3))){
var inst_26879 = (state_26884[(2)]);
var inst_26880 = figwheel.client.heads_up.clear.call(null);
var state_26884__$1 = (function (){var statearr_26887 = state_26884;
(statearr_26887[(8)] = inst_26879);

return statearr_26887;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26884__$1,(4),inst_26880);
} else {
if((state_val_26885 === (4))){
var inst_26882 = (state_26884[(2)]);
var state_26884__$1 = state_26884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26884__$1,inst_26882);
} else {
return null;
}
}
}
}
});})(c__21862__auto__))
;
return ((function (switch__21800__auto__,c__21862__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__21801__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__21801__auto____0 = (function (){
var statearr_26891 = [null,null,null,null,null,null,null,null,null];
(statearr_26891[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__21801__auto__);

(statearr_26891[(1)] = (1));

return statearr_26891;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__21801__auto____1 = (function (state_26884){
while(true){
var ret_value__21802__auto__ = (function (){try{while(true){
var result__21803__auto__ = switch__21800__auto__.call(null,state_26884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21803__auto__;
}
break;
}
}catch (e26892){if((e26892 instanceof Object)){
var ex__21804__auto__ = e26892;
var statearr_26893_26895 = state_26884;
(statearr_26893_26895[(5)] = ex__21804__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26896 = state_26884;
state_26884 = G__26896;
continue;
} else {
return ret_value__21802__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__21801__auto__ = function(state_26884){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21801__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21801__auto____1.call(this,state_26884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__21801__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__21801__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__21801__auto__;
})()
;})(switch__21800__auto__,c__21862__auto__))
})();
var state__21864__auto__ = (function (){var statearr_26894 = f__21863__auto__.call(null);
(statearr_26894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21862__auto__);

return statearr_26894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21864__auto__);
});})(c__21862__auto__))
);

return c__21862__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map