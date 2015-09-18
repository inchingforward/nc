// Compiled by ClojureScript 0.0-3308 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t27669 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27669 = (function (fn_handler,f,meta27670){
this.fn_handler = fn_handler;
this.f = f;
this.meta27670 = meta27670;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27671,meta27670__$1){
var self__ = this;
var _27671__$1 = this;
return (new cljs.core.async.t27669(self__.fn_handler,self__.f,meta27670__$1));
});

cljs.core.async.t27669.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27671){
var self__ = this;
var _27671__$1 = this;
return self__.meta27670;
});

cljs.core.async.t27669.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27669.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t27669.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t27669.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta27670","meta27670",-1883782758,null)], null);
});

cljs.core.async.t27669.cljs$lang$type = true;

cljs.core.async.t27669.cljs$lang$ctorStr = "cljs.core.async/t27669";

cljs.core.async.t27669.cljs$lang$ctorPrWriter = (function (this__18666__auto__,writer__18667__auto__,opt__18668__auto__){
return cljs.core._write.call(null,writer__18667__auto__,"cljs.core.async/t27669");
});

cljs.core.async.__GT_t27669 = (function cljs$core$async$fn_handler_$___GT_t27669(fn_handler__$1,f__$1,meta27670){
return (new cljs.core.async.t27669(fn_handler__$1,f__$1,meta27670));
});

}

return (new cljs.core.async.t27669(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__27673 = buff;
if(G__27673){
var bit__18761__auto__ = null;
if(cljs.core.truth_((function (){var or__18087__auto__ = bit__18761__auto__;
if(cljs.core.truth_(or__18087__auto__)){
return or__18087__auto__;
} else {
return G__27673.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__27673.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27673);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27673);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__27675 = arguments.length;
switch (G__27675) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__27678 = arguments.length;
switch (G__27678) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27680 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27680);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27680,ret){
return (function (){
return fn1.call(null,val_27680);
});})(val_27680,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__27682 = arguments.length;
switch (G__27682) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4421__auto__)){
var ret = temp__4421__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4421__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4421__auto__)){
var retb = temp__4421__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4421__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4421__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__18972__auto___27684 = n;
var x_27685 = (0);
while(true){
if((x_27685 < n__18972__auto___27684)){
(a[x_27685] = (0));

var G__27686 = (x_27685 + (1));
x_27685 = G__27686;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27687 = (i + (1));
i = G__27687;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t27691 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27691 = (function (alt_flag,flag,meta27692){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27692 = meta27692;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27693,meta27692__$1){
var self__ = this;
var _27693__$1 = this;
return (new cljs.core.async.t27691(self__.alt_flag,self__.flag,meta27692__$1));
});})(flag))
;

cljs.core.async.t27691.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27693){
var self__ = this;
var _27693__$1 = this;
return self__.meta27692;
});})(flag))
;

cljs.core.async.t27691.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27691.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t27691.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t27691.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27692","meta27692",-712761089,null)], null);
});})(flag))
;

cljs.core.async.t27691.cljs$lang$type = true;

cljs.core.async.t27691.cljs$lang$ctorStr = "cljs.core.async/t27691";

cljs.core.async.t27691.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18666__auto__,writer__18667__auto__,opt__18668__auto__){
return cljs.core._write.call(null,writer__18667__auto__,"cljs.core.async/t27691");
});})(flag))
;

cljs.core.async.__GT_t27691 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t27691(alt_flag__$1,flag__$1,meta27692){
return (new cljs.core.async.t27691(alt_flag__$1,flag__$1,meta27692));
});})(flag))
;

}

return (new cljs.core.async.t27691(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t27697 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27697 = (function (alt_handler,flag,cb,meta27698){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27698 = meta27698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27699,meta27698__$1){
var self__ = this;
var _27699__$1 = this;
return (new cljs.core.async.t27697(self__.alt_handler,self__.flag,self__.cb,meta27698__$1));
});

cljs.core.async.t27697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27699){
var self__ = this;
var _27699__$1 = this;
return self__.meta27698;
});

cljs.core.async.t27697.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27697.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t27697.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t27697.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27698","meta27698",1597186960,null)], null);
});

cljs.core.async.t27697.cljs$lang$type = true;

cljs.core.async.t27697.cljs$lang$ctorStr = "cljs.core.async/t27697";

cljs.core.async.t27697.cljs$lang$ctorPrWriter = (function (this__18666__auto__,writer__18667__auto__,opt__18668__auto__){
return cljs.core._write.call(null,writer__18667__auto__,"cljs.core.async/t27697");
});

cljs.core.async.__GT_t27697 = (function cljs$core$async$alt_handler_$___GT_t27697(alt_handler__$1,flag__$1,cb__$1,meta27698){
return (new cljs.core.async.t27697(alt_handler__$1,flag__$1,cb__$1,meta27698));
});

}

return (new cljs.core.async.t27697(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27700_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27700_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27701_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27701_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18087__auto__ = wport;
if(cljs.core.truth_(or__18087__auto__)){
return or__18087__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27702 = (i + (1));
i = G__27702;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18087__auto__ = ret;
if(cljs.core.truth_(or__18087__auto__)){
return or__18087__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4423__auto__ = (function (){var and__18075__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18075__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18075__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var got = temp__4423__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__19127__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19127__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27705){
var map__27706 = p__27705;
var map__27706__$1 = ((cljs.core.seq_QMARK_.call(null,map__27706))?cljs.core.apply.call(null,cljs.core.hash_map,map__27706):map__27706);
var opts = map__27706__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27703){
var G__27704 = cljs.core.first.call(null,seq27703);
var seq27703__$1 = cljs.core.next.call(null,seq27703);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27704,seq27703__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__27708 = arguments.length;
switch (G__27708) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21859__auto___27757 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21859__auto___27757){
return (function (){
var f__21860__auto__ = (function (){var switch__21797__auto__ = ((function (c__21859__auto___27757){
return (function (state_27732){
var state_val_27733 = (state_27732[(1)]);
if((state_val_27733 === (7))){
var inst_27728 = (state_27732[(2)]);
var state_27732__$1 = state_27732;
var statearr_27734_27758 = state_27732__$1;
(statearr_27734_27758[(2)] = inst_27728);

(statearr_27734_27758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27733 === (1))){
var state_27732__$1 = state_27732;
var statearr_27735_27759 = state_27732__$1;
(statearr_27735_27759[(2)] = null);

(statearr_27735_27759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27733 === (4))){
var inst_27711 = (state_27732[(7)]);
var inst_27711__$1 = (state_27732[(2)]);
var inst_27712 = (inst_27711__$1 == null);
var state_27732__$1 = (function (){var statearr_27736 = state_27732;
(statearr_27736[(7)] = inst_27711__$1);

return statearr_27736;
})();
if(cljs.core.truth_(inst_27712)){
var statearr_27737_27760 = state_27732__$1;
(statearr_27737_27760[(1)] = (5));

} else {
var statearr_27738_27761 = state_27732__$1;
(statearr_27738_27761[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27733 === (13))){
var state_27732__$1 = state_27732;
var statearr_27739_27762 = state_27732__$1;
(statearr_27739_27762[(2)] = null);

(statearr_27739_27762[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27733 === (6))){
var inst_27711 = (state_27732[(7)]);
var state_27732__$1 = state_27732;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27732__$1,(11),to,inst_27711);
} else {
if((state_val_27733 === (3))){
var inst_27730 = (state_27732[(2)]);
var state_27732__$1 = state_27732;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27732__$1,inst_27730);
} else {
if((state_val_27733 === (12))){
var state_27732__$1 = state_27732;
var statearr_27740_27763 = state_27732__$1;
(statearr_27740_27763[(2)] = null);

(statearr_27740_27763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27733 === (2))){
var state_27732__$1 = state_27732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27732__$1,(4),from);
} else {
if((state_val_27733 === (11))){
var inst_27721 = (state_27732[(2)]);
var state_27732__$1 = state_27732;
if(cljs.core.truth_(inst_27721)){
var statearr_27741_27764 = state_27732__$1;
(statearr_27741_27764[(1)] = (12));

} else {
var statearr_27742_27765 = state_27732__$1;
(statearr_27742_27765[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27733 === (9))){
var state_27732__$1 = state_27732;
var statearr_27743_27766 = state_27732__$1;
(statearr_27743_27766[(2)] = null);

(statearr_27743_27766[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27733 === (5))){
var state_27732__$1 = state_27732;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27744_27767 = state_27732__$1;
(statearr_27744_27767[(1)] = (8));

} else {
var statearr_27745_27768 = state_27732__$1;
(statearr_27745_27768[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27733 === (14))){
var inst_27726 = (state_27732[(2)]);
var state_27732__$1 = state_27732;
var statearr_27746_27769 = state_27732__$1;
(statearr_27746_27769[(2)] = inst_27726);

(statearr_27746_27769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27733 === (10))){
var inst_27718 = (state_27732[(2)]);
var state_27732__$1 = state_27732;
var statearr_27747_27770 = state_27732__$1;
(statearr_27747_27770[(2)] = inst_27718);

(statearr_27747_27770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27733 === (8))){
var inst_27715 = cljs.core.async.close_BANG_.call(null,to);
var state_27732__$1 = state_27732;
var statearr_27748_27771 = state_27732__$1;
(statearr_27748_27771[(2)] = inst_27715);

(statearr_27748_27771[(1)] = (10));


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
});})(c__21859__auto___27757))
;
return ((function (switch__21797__auto__,c__21859__auto___27757){
return (function() {
var cljs$core$async$state_machine__21798__auto__ = null;
var cljs$core$async$state_machine__21798__auto____0 = (function (){
var statearr_27752 = [null,null,null,null,null,null,null,null];
(statearr_27752[(0)] = cljs$core$async$state_machine__21798__auto__);

(statearr_27752[(1)] = (1));

return statearr_27752;
});
var cljs$core$async$state_machine__21798__auto____1 = (function (state_27732){
while(true){
var ret_value__21799__auto__ = (function (){try{while(true){
var result__21800__auto__ = switch__21797__auto__.call(null,state_27732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21800__auto__;
}
break;
}
}catch (e27753){if((e27753 instanceof Object)){
var ex__21801__auto__ = e27753;
var statearr_27754_27772 = state_27732;
(statearr_27754_27772[(5)] = ex__21801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27773 = state_27732;
state_27732 = G__27773;
continue;
} else {
return ret_value__21799__auto__;
}
break;
}
});
cljs$core$async$state_machine__21798__auto__ = function(state_27732){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21798__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21798__auto____1.call(this,state_27732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21798__auto____0;
cljs$core$async$state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21798__auto____1;
return cljs$core$async$state_machine__21798__auto__;
})()
;})(switch__21797__auto__,c__21859__auto___27757))
})();
var state__21861__auto__ = (function (){var statearr_27755 = f__21860__auto__.call(null);
(statearr_27755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21859__auto___27757);

return statearr_27755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21861__auto__);
});})(c__21859__auto___27757))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27957){
var vec__27958 = p__27957;
var v = cljs.core.nth.call(null,vec__27958,(0),null);
var p = cljs.core.nth.call(null,vec__27958,(1),null);
var job = vec__27958;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21859__auto___28140 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21859__auto___28140,res,vec__27958,v,p,job,jobs,results){
return (function (){
var f__21860__auto__ = (function (){var switch__21797__auto__ = ((function (c__21859__auto___28140,res,vec__27958,v,p,job,jobs,results){
return (function (state_27963){
var state_val_27964 = (state_27963[(1)]);
if((state_val_27964 === (1))){
var state_27963__$1 = state_27963;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27963__$1,(2),res,v);
} else {
if((state_val_27964 === (2))){
var inst_27960 = (state_27963[(2)]);
var inst_27961 = cljs.core.async.close_BANG_.call(null,res);
var state_27963__$1 = (function (){var statearr_27965 = state_27963;
(statearr_27965[(7)] = inst_27960);

return statearr_27965;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27963__$1,inst_27961);
} else {
return null;
}
}
});})(c__21859__auto___28140,res,vec__27958,v,p,job,jobs,results))
;
return ((function (switch__21797__auto__,c__21859__auto___28140,res,vec__27958,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21798__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21798__auto____0 = (function (){
var statearr_27969 = [null,null,null,null,null,null,null,null];
(statearr_27969[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21798__auto__);

(statearr_27969[(1)] = (1));

return statearr_27969;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21798__auto____1 = (function (state_27963){
while(true){
var ret_value__21799__auto__ = (function (){try{while(true){
var result__21800__auto__ = switch__21797__auto__.call(null,state_27963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21800__auto__;
}
break;
}
}catch (e27970){if((e27970 instanceof Object)){
var ex__21801__auto__ = e27970;
var statearr_27971_28141 = state_27963;
(statearr_27971_28141[(5)] = ex__21801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28142 = state_27963;
state_27963 = G__28142;
continue;
} else {
return ret_value__21799__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21798__auto__ = function(state_27963){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21798__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21798__auto____1.call(this,state_27963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21798__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21798__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21798__auto__;
})()
;})(switch__21797__auto__,c__21859__auto___28140,res,vec__27958,v,p,job,jobs,results))
})();
var state__21861__auto__ = (function (){var statearr_27972 = f__21860__auto__.call(null);
(statearr_27972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21859__auto___28140);

return statearr_27972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21861__auto__);
});})(c__21859__auto___28140,res,vec__27958,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27973){
var vec__27974 = p__27973;
var v = cljs.core.nth.call(null,vec__27974,(0),null);
var p = cljs.core.nth.call(null,vec__27974,(1),null);
var job = vec__27974;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__18972__auto___28143 = n;
var __28144 = (0);
while(true){
if((__28144 < n__18972__auto___28143)){
var G__27975_28145 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27975_28145) {
case "compute":
var c__21859__auto___28147 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28144,c__21859__auto___28147,G__27975_28145,n__18972__auto___28143,jobs,results,process,async){
return (function (){
var f__21860__auto__ = (function (){var switch__21797__auto__ = ((function (__28144,c__21859__auto___28147,G__27975_28145,n__18972__auto___28143,jobs,results,process,async){
return (function (state_27988){
var state_val_27989 = (state_27988[(1)]);
if((state_val_27989 === (1))){
var state_27988__$1 = state_27988;
var statearr_27990_28148 = state_27988__$1;
(statearr_27990_28148[(2)] = null);

(statearr_27990_28148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27989 === (2))){
var state_27988__$1 = state_27988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27988__$1,(4),jobs);
} else {
if((state_val_27989 === (3))){
var inst_27986 = (state_27988[(2)]);
var state_27988__$1 = state_27988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27988__$1,inst_27986);
} else {
if((state_val_27989 === (4))){
var inst_27978 = (state_27988[(2)]);
var inst_27979 = process.call(null,inst_27978);
var state_27988__$1 = state_27988;
if(cljs.core.truth_(inst_27979)){
var statearr_27991_28149 = state_27988__$1;
(statearr_27991_28149[(1)] = (5));

} else {
var statearr_27992_28150 = state_27988__$1;
(statearr_27992_28150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27989 === (5))){
var state_27988__$1 = state_27988;
var statearr_27993_28151 = state_27988__$1;
(statearr_27993_28151[(2)] = null);

(statearr_27993_28151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27989 === (6))){
var state_27988__$1 = state_27988;
var statearr_27994_28152 = state_27988__$1;
(statearr_27994_28152[(2)] = null);

(statearr_27994_28152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27989 === (7))){
var inst_27984 = (state_27988[(2)]);
var state_27988__$1 = state_27988;
var statearr_27995_28153 = state_27988__$1;
(statearr_27995_28153[(2)] = inst_27984);

(statearr_27995_28153[(1)] = (3));


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
});})(__28144,c__21859__auto___28147,G__27975_28145,n__18972__auto___28143,jobs,results,process,async))
;
return ((function (__28144,switch__21797__auto__,c__21859__auto___28147,G__27975_28145,n__18972__auto___28143,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21798__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21798__auto____0 = (function (){
var statearr_27999 = [null,null,null,null,null,null,null];
(statearr_27999[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21798__auto__);

(statearr_27999[(1)] = (1));

return statearr_27999;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21798__auto____1 = (function (state_27988){
while(true){
var ret_value__21799__auto__ = (function (){try{while(true){
var result__21800__auto__ = switch__21797__auto__.call(null,state_27988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21800__auto__;
}
break;
}
}catch (e28000){if((e28000 instanceof Object)){
var ex__21801__auto__ = e28000;
var statearr_28001_28154 = state_27988;
(statearr_28001_28154[(5)] = ex__21801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28155 = state_27988;
state_27988 = G__28155;
continue;
} else {
return ret_value__21799__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21798__auto__ = function(state_27988){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21798__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21798__auto____1.call(this,state_27988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21798__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21798__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21798__auto__;
})()
;})(__28144,switch__21797__auto__,c__21859__auto___28147,G__27975_28145,n__18972__auto___28143,jobs,results,process,async))
})();
var state__21861__auto__ = (function (){var statearr_28002 = f__21860__auto__.call(null);
(statearr_28002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21859__auto___28147);

return statearr_28002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21861__auto__);
});})(__28144,c__21859__auto___28147,G__27975_28145,n__18972__auto___28143,jobs,results,process,async))
);


break;
case "async":
var c__21859__auto___28156 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28144,c__21859__auto___28156,G__27975_28145,n__18972__auto___28143,jobs,results,process,async){
return (function (){
var f__21860__auto__ = (function (){var switch__21797__auto__ = ((function (__28144,c__21859__auto___28156,G__27975_28145,n__18972__auto___28143,jobs,results,process,async){
return (function (state_28015){
var state_val_28016 = (state_28015[(1)]);
if((state_val_28016 === (1))){
var state_28015__$1 = state_28015;
var statearr_28017_28157 = state_28015__$1;
(statearr_28017_28157[(2)] = null);

(statearr_28017_28157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28016 === (2))){
var state_28015__$1 = state_28015;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28015__$1,(4),jobs);
} else {
if((state_val_28016 === (3))){
var inst_28013 = (state_28015[(2)]);
var state_28015__$1 = state_28015;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28015__$1,inst_28013);
} else {
if((state_val_28016 === (4))){
var inst_28005 = (state_28015[(2)]);
var inst_28006 = async.call(null,inst_28005);
var state_28015__$1 = state_28015;
if(cljs.core.truth_(inst_28006)){
var statearr_28018_28158 = state_28015__$1;
(statearr_28018_28158[(1)] = (5));

} else {
var statearr_28019_28159 = state_28015__$1;
(statearr_28019_28159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28016 === (5))){
var state_28015__$1 = state_28015;
var statearr_28020_28160 = state_28015__$1;
(statearr_28020_28160[(2)] = null);

(statearr_28020_28160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28016 === (6))){
var state_28015__$1 = state_28015;
var statearr_28021_28161 = state_28015__$1;
(statearr_28021_28161[(2)] = null);

(statearr_28021_28161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28016 === (7))){
var inst_28011 = (state_28015[(2)]);
var state_28015__$1 = state_28015;
var statearr_28022_28162 = state_28015__$1;
(statearr_28022_28162[(2)] = inst_28011);

(statearr_28022_28162[(1)] = (3));


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
});})(__28144,c__21859__auto___28156,G__27975_28145,n__18972__auto___28143,jobs,results,process,async))
;
return ((function (__28144,switch__21797__auto__,c__21859__auto___28156,G__27975_28145,n__18972__auto___28143,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21798__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21798__auto____0 = (function (){
var statearr_28026 = [null,null,null,null,null,null,null];
(statearr_28026[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21798__auto__);

(statearr_28026[(1)] = (1));

return statearr_28026;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21798__auto____1 = (function (state_28015){
while(true){
var ret_value__21799__auto__ = (function (){try{while(true){
var result__21800__auto__ = switch__21797__auto__.call(null,state_28015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21800__auto__;
}
break;
}
}catch (e28027){if((e28027 instanceof Object)){
var ex__21801__auto__ = e28027;
var statearr_28028_28163 = state_28015;
(statearr_28028_28163[(5)] = ex__21801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28164 = state_28015;
state_28015 = G__28164;
continue;
} else {
return ret_value__21799__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21798__auto__ = function(state_28015){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21798__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21798__auto____1.call(this,state_28015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21798__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21798__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21798__auto__;
})()
;})(__28144,switch__21797__auto__,c__21859__auto___28156,G__27975_28145,n__18972__auto___28143,jobs,results,process,async))
})();
var state__21861__auto__ = (function (){var statearr_28029 = f__21860__auto__.call(null);
(statearr_28029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21859__auto___28156);

return statearr_28029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21861__auto__);
});})(__28144,c__21859__auto___28156,G__27975_28145,n__18972__auto___28143,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28165 = (__28144 + (1));
__28144 = G__28165;
continue;
} else {
}
break;
}

var c__21859__auto___28166 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21859__auto___28166,jobs,results,process,async){
return (function (){
var f__21860__auto__ = (function (){var switch__21797__auto__ = ((function (c__21859__auto___28166,jobs,results,process,async){
return (function (state_28051){
var state_val_28052 = (state_28051[(1)]);
if((state_val_28052 === (1))){
var state_28051__$1 = state_28051;
var statearr_28053_28167 = state_28051__$1;
(statearr_28053_28167[(2)] = null);

(statearr_28053_28167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28052 === (2))){
var state_28051__$1 = state_28051;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28051__$1,(4),from);
} else {
if((state_val_28052 === (3))){
var inst_28049 = (state_28051[(2)]);
var state_28051__$1 = state_28051;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28051__$1,inst_28049);
} else {
if((state_val_28052 === (4))){
var inst_28032 = (state_28051[(7)]);
var inst_28032__$1 = (state_28051[(2)]);
var inst_28033 = (inst_28032__$1 == null);
var state_28051__$1 = (function (){var statearr_28054 = state_28051;
(statearr_28054[(7)] = inst_28032__$1);

return statearr_28054;
})();
if(cljs.core.truth_(inst_28033)){
var statearr_28055_28168 = state_28051__$1;
(statearr_28055_28168[(1)] = (5));

} else {
var statearr_28056_28169 = state_28051__$1;
(statearr_28056_28169[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28052 === (5))){
var inst_28035 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28051__$1 = state_28051;
var statearr_28057_28170 = state_28051__$1;
(statearr_28057_28170[(2)] = inst_28035);

(statearr_28057_28170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28052 === (6))){
var inst_28037 = (state_28051[(8)]);
var inst_28032 = (state_28051[(7)]);
var inst_28037__$1 = cljs.core.async.chan.call(null,(1));
var inst_28038 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28039 = [inst_28032,inst_28037__$1];
var inst_28040 = (new cljs.core.PersistentVector(null,2,(5),inst_28038,inst_28039,null));
var state_28051__$1 = (function (){var statearr_28058 = state_28051;
(statearr_28058[(8)] = inst_28037__$1);

return statearr_28058;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28051__$1,(8),jobs,inst_28040);
} else {
if((state_val_28052 === (7))){
var inst_28047 = (state_28051[(2)]);
var state_28051__$1 = state_28051;
var statearr_28059_28171 = state_28051__$1;
(statearr_28059_28171[(2)] = inst_28047);

(statearr_28059_28171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28052 === (8))){
var inst_28037 = (state_28051[(8)]);
var inst_28042 = (state_28051[(2)]);
var state_28051__$1 = (function (){var statearr_28060 = state_28051;
(statearr_28060[(9)] = inst_28042);

return statearr_28060;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28051__$1,(9),results,inst_28037);
} else {
if((state_val_28052 === (9))){
var inst_28044 = (state_28051[(2)]);
var state_28051__$1 = (function (){var statearr_28061 = state_28051;
(statearr_28061[(10)] = inst_28044);

return statearr_28061;
})();
var statearr_28062_28172 = state_28051__$1;
(statearr_28062_28172[(2)] = null);

(statearr_28062_28172[(1)] = (2));


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
});})(c__21859__auto___28166,jobs,results,process,async))
;
return ((function (switch__21797__auto__,c__21859__auto___28166,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21798__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21798__auto____0 = (function (){
var statearr_28066 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28066[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21798__auto__);

(statearr_28066[(1)] = (1));

return statearr_28066;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21798__auto____1 = (function (state_28051){
while(true){
var ret_value__21799__auto__ = (function (){try{while(true){
var result__21800__auto__ = switch__21797__auto__.call(null,state_28051);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21800__auto__;
}
break;
}
}catch (e28067){if((e28067 instanceof Object)){
var ex__21801__auto__ = e28067;
var statearr_28068_28173 = state_28051;
(statearr_28068_28173[(5)] = ex__21801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28051);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28174 = state_28051;
state_28051 = G__28174;
continue;
} else {
return ret_value__21799__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21798__auto__ = function(state_28051){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21798__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21798__auto____1.call(this,state_28051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21798__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21798__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21798__auto__;
})()
;})(switch__21797__auto__,c__21859__auto___28166,jobs,results,process,async))
})();
var state__21861__auto__ = (function (){var statearr_28069 = f__21860__auto__.call(null);
(statearr_28069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21859__auto___28166);

return statearr_28069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21861__auto__);
});})(c__21859__auto___28166,jobs,results,process,async))
);


var c__21859__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21859__auto__,jobs,results,process,async){
return (function (){
var f__21860__auto__ = (function (){var switch__21797__auto__ = ((function (c__21859__auto__,jobs,results,process,async){
return (function (state_28107){
var state_val_28108 = (state_28107[(1)]);
if((state_val_28108 === (7))){
var inst_28103 = (state_28107[(2)]);
var state_28107__$1 = state_28107;
var statearr_28109_28175 = state_28107__$1;
(statearr_28109_28175[(2)] = inst_28103);

(statearr_28109_28175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28108 === (20))){
var state_28107__$1 = state_28107;
var statearr_28110_28176 = state_28107__$1;
(statearr_28110_28176[(2)] = null);

(statearr_28110_28176[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28108 === (1))){
var state_28107__$1 = state_28107;
var statearr_28111_28177 = state_28107__$1;
(statearr_28111_28177[(2)] = null);

(statearr_28111_28177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28108 === (4))){
var inst_28072 = (state_28107[(7)]);
var inst_28072__$1 = (state_28107[(2)]);
var inst_28073 = (inst_28072__$1 == null);
var state_28107__$1 = (function (){var statearr_28112 = state_28107;
(statearr_28112[(7)] = inst_28072__$1);

return statearr_28112;
})();
if(cljs.core.truth_(inst_28073)){
var statearr_28113_28178 = state_28107__$1;
(statearr_28113_28178[(1)] = (5));

} else {
var statearr_28114_28179 = state_28107__$1;
(statearr_28114_28179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28108 === (15))){
var inst_28085 = (state_28107[(8)]);
var state_28107__$1 = state_28107;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28107__$1,(18),to,inst_28085);
} else {
if((state_val_28108 === (21))){
var inst_28098 = (state_28107[(2)]);
var state_28107__$1 = state_28107;
var statearr_28115_28180 = state_28107__$1;
(statearr_28115_28180[(2)] = inst_28098);

(statearr_28115_28180[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28108 === (13))){
var inst_28100 = (state_28107[(2)]);
var state_28107__$1 = (function (){var statearr_28116 = state_28107;
(statearr_28116[(9)] = inst_28100);

return statearr_28116;
})();
var statearr_28117_28181 = state_28107__$1;
(statearr_28117_28181[(2)] = null);

(statearr_28117_28181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28108 === (6))){
var inst_28072 = (state_28107[(7)]);
var state_28107__$1 = state_28107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28107__$1,(11),inst_28072);
} else {
if((state_val_28108 === (17))){
var inst_28093 = (state_28107[(2)]);
var state_28107__$1 = state_28107;
if(cljs.core.truth_(inst_28093)){
var statearr_28118_28182 = state_28107__$1;
(statearr_28118_28182[(1)] = (19));

} else {
var statearr_28119_28183 = state_28107__$1;
(statearr_28119_28183[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28108 === (3))){
var inst_28105 = (state_28107[(2)]);
var state_28107__$1 = state_28107;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28107__$1,inst_28105);
} else {
if((state_val_28108 === (12))){
var inst_28082 = (state_28107[(10)]);
var state_28107__$1 = state_28107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28107__$1,(14),inst_28082);
} else {
if((state_val_28108 === (2))){
var state_28107__$1 = state_28107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28107__$1,(4),results);
} else {
if((state_val_28108 === (19))){
var state_28107__$1 = state_28107;
var statearr_28120_28184 = state_28107__$1;
(statearr_28120_28184[(2)] = null);

(statearr_28120_28184[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28108 === (11))){
var inst_28082 = (state_28107[(2)]);
var state_28107__$1 = (function (){var statearr_28121 = state_28107;
(statearr_28121[(10)] = inst_28082);

return statearr_28121;
})();
var statearr_28122_28185 = state_28107__$1;
(statearr_28122_28185[(2)] = null);

(statearr_28122_28185[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28108 === (9))){
var state_28107__$1 = state_28107;
var statearr_28123_28186 = state_28107__$1;
(statearr_28123_28186[(2)] = null);

(statearr_28123_28186[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28108 === (5))){
var state_28107__$1 = state_28107;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28124_28187 = state_28107__$1;
(statearr_28124_28187[(1)] = (8));

} else {
var statearr_28125_28188 = state_28107__$1;
(statearr_28125_28188[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28108 === (14))){
var inst_28085 = (state_28107[(8)]);
var inst_28087 = (state_28107[(11)]);
var inst_28085__$1 = (state_28107[(2)]);
var inst_28086 = (inst_28085__$1 == null);
var inst_28087__$1 = cljs.core.not.call(null,inst_28086);
var state_28107__$1 = (function (){var statearr_28126 = state_28107;
(statearr_28126[(8)] = inst_28085__$1);

(statearr_28126[(11)] = inst_28087__$1);

return statearr_28126;
})();
if(inst_28087__$1){
var statearr_28127_28189 = state_28107__$1;
(statearr_28127_28189[(1)] = (15));

} else {
var statearr_28128_28190 = state_28107__$1;
(statearr_28128_28190[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28108 === (16))){
var inst_28087 = (state_28107[(11)]);
var state_28107__$1 = state_28107;
var statearr_28129_28191 = state_28107__$1;
(statearr_28129_28191[(2)] = inst_28087);

(statearr_28129_28191[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28108 === (10))){
var inst_28079 = (state_28107[(2)]);
var state_28107__$1 = state_28107;
var statearr_28130_28192 = state_28107__$1;
(statearr_28130_28192[(2)] = inst_28079);

(statearr_28130_28192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28108 === (18))){
var inst_28090 = (state_28107[(2)]);
var state_28107__$1 = state_28107;
var statearr_28131_28193 = state_28107__$1;
(statearr_28131_28193[(2)] = inst_28090);

(statearr_28131_28193[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28108 === (8))){
var inst_28076 = cljs.core.async.close_BANG_.call(null,to);
var state_28107__$1 = state_28107;
var statearr_28132_28194 = state_28107__$1;
(statearr_28132_28194[(2)] = inst_28076);

(statearr_28132_28194[(1)] = (10));


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
});})(c__21859__auto__,jobs,results,process,async))
;
return ((function (switch__21797__auto__,c__21859__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21798__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21798__auto____0 = (function (){
var statearr_28136 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28136[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21798__auto__);

(statearr_28136[(1)] = (1));

return statearr_28136;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21798__auto____1 = (function (state_28107){
while(true){
var ret_value__21799__auto__ = (function (){try{while(true){
var result__21800__auto__ = switch__21797__auto__.call(null,state_28107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21800__auto__;
}
break;
}
}catch (e28137){if((e28137 instanceof Object)){
var ex__21801__auto__ = e28137;
var statearr_28138_28195 = state_28107;
(statearr_28138_28195[(5)] = ex__21801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28196 = state_28107;
state_28107 = G__28196;
continue;
} else {
return ret_value__21799__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21798__auto__ = function(state_28107){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21798__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21798__auto____1.call(this,state_28107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21798__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21798__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21798__auto__;
})()
;})(switch__21797__auto__,c__21859__auto__,jobs,results,process,async))
})();
var state__21861__auto__ = (function (){var statearr_28139 = f__21860__auto__.call(null);
(statearr_28139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21859__auto__);

return statearr_28139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21861__auto__);
});})(c__21859__auto__,jobs,results,process,async))
);

return c__21859__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__28198 = arguments.length;
switch (G__28198) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__28201 = arguments.length;
switch (G__28201) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__28204 = arguments.length;
switch (G__28204) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21859__auto___28256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21859__auto___28256,tc,fc){
return (function (){
var f__21860__auto__ = (function (){var switch__21797__auto__ = ((function (c__21859__auto___28256,tc,fc){
return (function (state_28230){
var state_val_28231 = (state_28230[(1)]);
if((state_val_28231 === (7))){
var inst_28226 = (state_28230[(2)]);
var state_28230__$1 = state_28230;
var statearr_28232_28257 = state_28230__$1;
(statearr_28232_28257[(2)] = inst_28226);

(statearr_28232_28257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28231 === (1))){
var state_28230__$1 = state_28230;
var statearr_28233_28258 = state_28230__$1;
(statearr_28233_28258[(2)] = null);

(statearr_28233_28258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28231 === (4))){
var inst_28207 = (state_28230[(7)]);
var inst_28207__$1 = (state_28230[(2)]);
var inst_28208 = (inst_28207__$1 == null);
var state_28230__$1 = (function (){var statearr_28234 = state_28230;
(statearr_28234[(7)] = inst_28207__$1);

return statearr_28234;
})();
if(cljs.core.truth_(inst_28208)){
var statearr_28235_28259 = state_28230__$1;
(statearr_28235_28259[(1)] = (5));

} else {
var statearr_28236_28260 = state_28230__$1;
(statearr_28236_28260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28231 === (13))){
var state_28230__$1 = state_28230;
var statearr_28237_28261 = state_28230__$1;
(statearr_28237_28261[(2)] = null);

(statearr_28237_28261[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28231 === (6))){
var inst_28207 = (state_28230[(7)]);
var inst_28213 = p.call(null,inst_28207);
var state_28230__$1 = state_28230;
if(cljs.core.truth_(inst_28213)){
var statearr_28238_28262 = state_28230__$1;
(statearr_28238_28262[(1)] = (9));

} else {
var statearr_28239_28263 = state_28230__$1;
(statearr_28239_28263[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28231 === (3))){
var inst_28228 = (state_28230[(2)]);
var state_28230__$1 = state_28230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28230__$1,inst_28228);
} else {
if((state_val_28231 === (12))){
var state_28230__$1 = state_28230;
var statearr_28240_28264 = state_28230__$1;
(statearr_28240_28264[(2)] = null);

(statearr_28240_28264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28231 === (2))){
var state_28230__$1 = state_28230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28230__$1,(4),ch);
} else {
if((state_val_28231 === (11))){
var inst_28207 = (state_28230[(7)]);
var inst_28217 = (state_28230[(2)]);
var state_28230__$1 = state_28230;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28230__$1,(8),inst_28217,inst_28207);
} else {
if((state_val_28231 === (9))){
var state_28230__$1 = state_28230;
var statearr_28241_28265 = state_28230__$1;
(statearr_28241_28265[(2)] = tc);

(statearr_28241_28265[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28231 === (5))){
var inst_28210 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28211 = cljs.core.async.close_BANG_.call(null,fc);
var state_28230__$1 = (function (){var statearr_28242 = state_28230;
(statearr_28242[(8)] = inst_28210);

return statearr_28242;
})();
var statearr_28243_28266 = state_28230__$1;
(statearr_28243_28266[(2)] = inst_28211);

(statearr_28243_28266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28231 === (14))){
var inst_28224 = (state_28230[(2)]);
var state_28230__$1 = state_28230;
var statearr_28244_28267 = state_28230__$1;
(statearr_28244_28267[(2)] = inst_28224);

(statearr_28244_28267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28231 === (10))){
var state_28230__$1 = state_28230;
var statearr_28245_28268 = state_28230__$1;
(statearr_28245_28268[(2)] = fc);

(statearr_28245_28268[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28231 === (8))){
var inst_28219 = (state_28230[(2)]);
var state_28230__$1 = state_28230;
if(cljs.core.truth_(inst_28219)){
var statearr_28246_28269 = state_28230__$1;
(statearr_28246_28269[(1)] = (12));

} else {
var statearr_28247_28270 = state_28230__$1;
(statearr_28247_28270[(1)] = (13));

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
});})(c__21859__auto___28256,tc,fc))
;
return ((function (switch__21797__auto__,c__21859__auto___28256,tc,fc){
return (function() {
var cljs$core$async$state_machine__21798__auto__ = null;
var cljs$core$async$state_machine__21798__auto____0 = (function (){
var statearr_28251 = [null,null,null,null,null,null,null,null,null];
(statearr_28251[(0)] = cljs$core$async$state_machine__21798__auto__);

(statearr_28251[(1)] = (1));

return statearr_28251;
});
var cljs$core$async$state_machine__21798__auto____1 = (function (state_28230){
while(true){
var ret_value__21799__auto__ = (function (){try{while(true){
var result__21800__auto__ = switch__21797__auto__.call(null,state_28230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21800__auto__;
}
break;
}
}catch (e28252){if((e28252 instanceof Object)){
var ex__21801__auto__ = e28252;
var statearr_28253_28271 = state_28230;
(statearr_28253_28271[(5)] = ex__21801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28272 = state_28230;
state_28230 = G__28272;
continue;
} else {
return ret_value__21799__auto__;
}
break;
}
});
cljs$core$async$state_machine__21798__auto__ = function(state_28230){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21798__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21798__auto____1.call(this,state_28230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21798__auto____0;
cljs$core$async$state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21798__auto____1;
return cljs$core$async$state_machine__21798__auto__;
})()
;})(switch__21797__auto__,c__21859__auto___28256,tc,fc))
})();
var state__21861__auto__ = (function (){var statearr_28254 = f__21860__auto__.call(null);
(statearr_28254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21859__auto___28256);

return statearr_28254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21861__auto__);
});})(c__21859__auto___28256,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21859__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21859__auto__){
return (function (){
var f__21860__auto__ = (function (){var switch__21797__auto__ = ((function (c__21859__auto__){
return (function (state_28319){
var state_val_28320 = (state_28319[(1)]);
if((state_val_28320 === (1))){
var inst_28305 = init;
var state_28319__$1 = (function (){var statearr_28321 = state_28319;
(statearr_28321[(7)] = inst_28305);

return statearr_28321;
})();
var statearr_28322_28337 = state_28319__$1;
(statearr_28322_28337[(2)] = null);

(statearr_28322_28337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28320 === (2))){
var state_28319__$1 = state_28319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28319__$1,(4),ch);
} else {
if((state_val_28320 === (3))){
var inst_28317 = (state_28319[(2)]);
var state_28319__$1 = state_28319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28319__$1,inst_28317);
} else {
if((state_val_28320 === (4))){
var inst_28308 = (state_28319[(8)]);
var inst_28308__$1 = (state_28319[(2)]);
var inst_28309 = (inst_28308__$1 == null);
var state_28319__$1 = (function (){var statearr_28323 = state_28319;
(statearr_28323[(8)] = inst_28308__$1);

return statearr_28323;
})();
if(cljs.core.truth_(inst_28309)){
var statearr_28324_28338 = state_28319__$1;
(statearr_28324_28338[(1)] = (5));

} else {
var statearr_28325_28339 = state_28319__$1;
(statearr_28325_28339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28320 === (5))){
var inst_28305 = (state_28319[(7)]);
var state_28319__$1 = state_28319;
var statearr_28326_28340 = state_28319__$1;
(statearr_28326_28340[(2)] = inst_28305);

(statearr_28326_28340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28320 === (6))){
var inst_28305 = (state_28319[(7)]);
var inst_28308 = (state_28319[(8)]);
var inst_28312 = f.call(null,inst_28305,inst_28308);
var inst_28305__$1 = inst_28312;
var state_28319__$1 = (function (){var statearr_28327 = state_28319;
(statearr_28327[(7)] = inst_28305__$1);

return statearr_28327;
})();
var statearr_28328_28341 = state_28319__$1;
(statearr_28328_28341[(2)] = null);

(statearr_28328_28341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28320 === (7))){
var inst_28315 = (state_28319[(2)]);
var state_28319__$1 = state_28319;
var statearr_28329_28342 = state_28319__$1;
(statearr_28329_28342[(2)] = inst_28315);

(statearr_28329_28342[(1)] = (3));


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
});})(c__21859__auto__))
;
return ((function (switch__21797__auto__,c__21859__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21798__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21798__auto____0 = (function (){
var statearr_28333 = [null,null,null,null,null,null,null,null,null];
(statearr_28333[(0)] = cljs$core$async$reduce_$_state_machine__21798__auto__);

(statearr_28333[(1)] = (1));

return statearr_28333;
});
var cljs$core$async$reduce_$_state_machine__21798__auto____1 = (function (state_28319){
while(true){
var ret_value__21799__auto__ = (function (){try{while(true){
var result__21800__auto__ = switch__21797__auto__.call(null,state_28319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21800__auto__;
}
break;
}
}catch (e28334){if((e28334 instanceof Object)){
var ex__21801__auto__ = e28334;
var statearr_28335_28343 = state_28319;
(statearr_28335_28343[(5)] = ex__21801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28334;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28344 = state_28319;
state_28319 = G__28344;
continue;
} else {
return ret_value__21799__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21798__auto__ = function(state_28319){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21798__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21798__auto____1.call(this,state_28319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21798__auto____0;
cljs$core$async$reduce_$_state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21798__auto____1;
return cljs$core$async$reduce_$_state_machine__21798__auto__;
})()
;})(switch__21797__auto__,c__21859__auto__))
})();
var state__21861__auto__ = (function (){var statearr_28336 = f__21860__auto__.call(null);
(statearr_28336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21859__auto__);

return statearr_28336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21861__auto__);
});})(c__21859__auto__))
);

return c__21859__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__28346 = arguments.length;
switch (G__28346) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21859__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21859__auto__){
return (function (){
var f__21860__auto__ = (function (){var switch__21797__auto__ = ((function (c__21859__auto__){
return (function (state_28371){
var state_val_28372 = (state_28371[(1)]);
if((state_val_28372 === (7))){
var inst_28353 = (state_28371[(2)]);
var state_28371__$1 = state_28371;
var statearr_28373_28397 = state_28371__$1;
(statearr_28373_28397[(2)] = inst_28353);

(statearr_28373_28397[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28372 === (1))){
var inst_28347 = cljs.core.seq.call(null,coll);
var inst_28348 = inst_28347;
var state_28371__$1 = (function (){var statearr_28374 = state_28371;
(statearr_28374[(7)] = inst_28348);

return statearr_28374;
})();
var statearr_28375_28398 = state_28371__$1;
(statearr_28375_28398[(2)] = null);

(statearr_28375_28398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28372 === (4))){
var inst_28348 = (state_28371[(7)]);
var inst_28351 = cljs.core.first.call(null,inst_28348);
var state_28371__$1 = state_28371;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28371__$1,(7),ch,inst_28351);
} else {
if((state_val_28372 === (13))){
var inst_28365 = (state_28371[(2)]);
var state_28371__$1 = state_28371;
var statearr_28376_28399 = state_28371__$1;
(statearr_28376_28399[(2)] = inst_28365);

(statearr_28376_28399[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28372 === (6))){
var inst_28356 = (state_28371[(2)]);
var state_28371__$1 = state_28371;
if(cljs.core.truth_(inst_28356)){
var statearr_28377_28400 = state_28371__$1;
(statearr_28377_28400[(1)] = (8));

} else {
var statearr_28378_28401 = state_28371__$1;
(statearr_28378_28401[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28372 === (3))){
var inst_28369 = (state_28371[(2)]);
var state_28371__$1 = state_28371;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28371__$1,inst_28369);
} else {
if((state_val_28372 === (12))){
var state_28371__$1 = state_28371;
var statearr_28379_28402 = state_28371__$1;
(statearr_28379_28402[(2)] = null);

(statearr_28379_28402[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28372 === (2))){
var inst_28348 = (state_28371[(7)]);
var state_28371__$1 = state_28371;
if(cljs.core.truth_(inst_28348)){
var statearr_28380_28403 = state_28371__$1;
(statearr_28380_28403[(1)] = (4));

} else {
var statearr_28381_28404 = state_28371__$1;
(statearr_28381_28404[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28372 === (11))){
var inst_28362 = cljs.core.async.close_BANG_.call(null,ch);
var state_28371__$1 = state_28371;
var statearr_28382_28405 = state_28371__$1;
(statearr_28382_28405[(2)] = inst_28362);

(statearr_28382_28405[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28372 === (9))){
var state_28371__$1 = state_28371;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28383_28406 = state_28371__$1;
(statearr_28383_28406[(1)] = (11));

} else {
var statearr_28384_28407 = state_28371__$1;
(statearr_28384_28407[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28372 === (5))){
var inst_28348 = (state_28371[(7)]);
var state_28371__$1 = state_28371;
var statearr_28385_28408 = state_28371__$1;
(statearr_28385_28408[(2)] = inst_28348);

(statearr_28385_28408[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28372 === (10))){
var inst_28367 = (state_28371[(2)]);
var state_28371__$1 = state_28371;
var statearr_28386_28409 = state_28371__$1;
(statearr_28386_28409[(2)] = inst_28367);

(statearr_28386_28409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28372 === (8))){
var inst_28348 = (state_28371[(7)]);
var inst_28358 = cljs.core.next.call(null,inst_28348);
var inst_28348__$1 = inst_28358;
var state_28371__$1 = (function (){var statearr_28387 = state_28371;
(statearr_28387[(7)] = inst_28348__$1);

return statearr_28387;
})();
var statearr_28388_28410 = state_28371__$1;
(statearr_28388_28410[(2)] = null);

(statearr_28388_28410[(1)] = (2));


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
});})(c__21859__auto__))
;
return ((function (switch__21797__auto__,c__21859__auto__){
return (function() {
var cljs$core$async$state_machine__21798__auto__ = null;
var cljs$core$async$state_machine__21798__auto____0 = (function (){
var statearr_28392 = [null,null,null,null,null,null,null,null];
(statearr_28392[(0)] = cljs$core$async$state_machine__21798__auto__);

(statearr_28392[(1)] = (1));

return statearr_28392;
});
var cljs$core$async$state_machine__21798__auto____1 = (function (state_28371){
while(true){
var ret_value__21799__auto__ = (function (){try{while(true){
var result__21800__auto__ = switch__21797__auto__.call(null,state_28371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21800__auto__;
}
break;
}
}catch (e28393){if((e28393 instanceof Object)){
var ex__21801__auto__ = e28393;
var statearr_28394_28411 = state_28371;
(statearr_28394_28411[(5)] = ex__21801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28393;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28412 = state_28371;
state_28371 = G__28412;
continue;
} else {
return ret_value__21799__auto__;
}
break;
}
});
cljs$core$async$state_machine__21798__auto__ = function(state_28371){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21798__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21798__auto____1.call(this,state_28371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21798__auto____0;
cljs$core$async$state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21798__auto____1;
return cljs$core$async$state_machine__21798__auto__;
})()
;})(switch__21797__auto__,c__21859__auto__))
})();
var state__21861__auto__ = (function (){var statearr_28395 = f__21860__auto__.call(null);
(statearr_28395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21859__auto__);

return statearr_28395;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21861__auto__);
});})(c__21859__auto__))
);

return c__21859__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj28414 = {};
return obj28414;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__18075__auto__ = _;
if(and__18075__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__18075__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__18723__auto__ = (((_ == null))?null:_);
return (function (){var or__18087__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18723__auto__)]);
if(or__18087__auto__){
return or__18087__auto__;
} else {
var or__18087__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__18087__auto____$1){
return or__18087__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj28416 = {};
return obj28416;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__18075__auto__ = m;
if(and__18075__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__18075__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__18723__auto__ = (((m == null))?null:m);
return (function (){var or__18087__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18723__auto__)]);
if(or__18087__auto__){
return or__18087__auto__;
} else {
var or__18087__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__18087__auto____$1){
return or__18087__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__18075__auto__ = m;
if(and__18075__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__18075__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__18723__auto__ = (((m == null))?null:m);
return (function (){var or__18087__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18723__auto__)]);
if(or__18087__auto__){
return or__18087__auto__;
} else {
var or__18087__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__18087__auto____$1){
return or__18087__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__18075__auto__ = m;
if(and__18075__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__18075__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__18723__auto__ = (((m == null))?null:m);
return (function (){var or__18087__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18723__auto__)]);
if(or__18087__auto__){
return or__18087__auto__;
} else {
var or__18087__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__18087__auto____$1){
return or__18087__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t28638 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28638 = (function (mult,ch,cs,meta28639){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28639 = meta28639;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28640,meta28639__$1){
var self__ = this;
var _28640__$1 = this;
return (new cljs.core.async.t28638(self__.mult,self__.ch,self__.cs,meta28639__$1));
});})(cs))
;

cljs.core.async.t28638.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28640){
var self__ = this;
var _28640__$1 = this;
return self__.meta28639;
});})(cs))
;

cljs.core.async.t28638.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28638.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t28638.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t28638.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t28638.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t28638.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t28638.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28639","meta28639",-1292380538,null)], null);
});})(cs))
;

cljs.core.async.t28638.cljs$lang$type = true;

cljs.core.async.t28638.cljs$lang$ctorStr = "cljs.core.async/t28638";

cljs.core.async.t28638.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18666__auto__,writer__18667__auto__,opt__18668__auto__){
return cljs.core._write.call(null,writer__18667__auto__,"cljs.core.async/t28638");
});})(cs))
;

cljs.core.async.__GT_t28638 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t28638(mult__$1,ch__$1,cs__$1,meta28639){
return (new cljs.core.async.t28638(mult__$1,ch__$1,cs__$1,meta28639));
});})(cs))
;

}

return (new cljs.core.async.t28638(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21859__auto___28859 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21859__auto___28859,cs,m,dchan,dctr,done){
return (function (){
var f__21860__auto__ = (function (){var switch__21797__auto__ = ((function (c__21859__auto___28859,cs,m,dchan,dctr,done){
return (function (state_28771){
var state_val_28772 = (state_28771[(1)]);
if((state_val_28772 === (7))){
var inst_28767 = (state_28771[(2)]);
var state_28771__$1 = state_28771;
var statearr_28773_28860 = state_28771__$1;
(statearr_28773_28860[(2)] = inst_28767);

(statearr_28773_28860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (20))){
var inst_28672 = (state_28771[(7)]);
var inst_28682 = cljs.core.first.call(null,inst_28672);
var inst_28683 = cljs.core.nth.call(null,inst_28682,(0),null);
var inst_28684 = cljs.core.nth.call(null,inst_28682,(1),null);
var state_28771__$1 = (function (){var statearr_28774 = state_28771;
(statearr_28774[(8)] = inst_28683);

return statearr_28774;
})();
if(cljs.core.truth_(inst_28684)){
var statearr_28775_28861 = state_28771__$1;
(statearr_28775_28861[(1)] = (22));

} else {
var statearr_28776_28862 = state_28771__$1;
(statearr_28776_28862[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (27))){
var inst_28643 = (state_28771[(9)]);
var inst_28714 = (state_28771[(10)]);
var inst_28719 = (state_28771[(11)]);
var inst_28712 = (state_28771[(12)]);
var inst_28719__$1 = cljs.core._nth.call(null,inst_28712,inst_28714);
var inst_28720 = cljs.core.async.put_BANG_.call(null,inst_28719__$1,inst_28643,done);
var state_28771__$1 = (function (){var statearr_28777 = state_28771;
(statearr_28777[(11)] = inst_28719__$1);

return statearr_28777;
})();
if(cljs.core.truth_(inst_28720)){
var statearr_28778_28863 = state_28771__$1;
(statearr_28778_28863[(1)] = (30));

} else {
var statearr_28779_28864 = state_28771__$1;
(statearr_28779_28864[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (1))){
var state_28771__$1 = state_28771;
var statearr_28780_28865 = state_28771__$1;
(statearr_28780_28865[(2)] = null);

(statearr_28780_28865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (24))){
var inst_28672 = (state_28771[(7)]);
var inst_28689 = (state_28771[(2)]);
var inst_28690 = cljs.core.next.call(null,inst_28672);
var inst_28652 = inst_28690;
var inst_28653 = null;
var inst_28654 = (0);
var inst_28655 = (0);
var state_28771__$1 = (function (){var statearr_28781 = state_28771;
(statearr_28781[(13)] = inst_28653);

(statearr_28781[(14)] = inst_28654);

(statearr_28781[(15)] = inst_28652);

(statearr_28781[(16)] = inst_28689);

(statearr_28781[(17)] = inst_28655);

return statearr_28781;
})();
var statearr_28782_28866 = state_28771__$1;
(statearr_28782_28866[(2)] = null);

(statearr_28782_28866[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (39))){
var state_28771__$1 = state_28771;
var statearr_28786_28867 = state_28771__$1;
(statearr_28786_28867[(2)] = null);

(statearr_28786_28867[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (4))){
var inst_28643 = (state_28771[(9)]);
var inst_28643__$1 = (state_28771[(2)]);
var inst_28644 = (inst_28643__$1 == null);
var state_28771__$1 = (function (){var statearr_28787 = state_28771;
(statearr_28787[(9)] = inst_28643__$1);

return statearr_28787;
})();
if(cljs.core.truth_(inst_28644)){
var statearr_28788_28868 = state_28771__$1;
(statearr_28788_28868[(1)] = (5));

} else {
var statearr_28789_28869 = state_28771__$1;
(statearr_28789_28869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (15))){
var inst_28653 = (state_28771[(13)]);
var inst_28654 = (state_28771[(14)]);
var inst_28652 = (state_28771[(15)]);
var inst_28655 = (state_28771[(17)]);
var inst_28668 = (state_28771[(2)]);
var inst_28669 = (inst_28655 + (1));
var tmp28783 = inst_28653;
var tmp28784 = inst_28654;
var tmp28785 = inst_28652;
var inst_28652__$1 = tmp28785;
var inst_28653__$1 = tmp28783;
var inst_28654__$1 = tmp28784;
var inst_28655__$1 = inst_28669;
var state_28771__$1 = (function (){var statearr_28790 = state_28771;
(statearr_28790[(13)] = inst_28653__$1);

(statearr_28790[(14)] = inst_28654__$1);

(statearr_28790[(15)] = inst_28652__$1);

(statearr_28790[(18)] = inst_28668);

(statearr_28790[(17)] = inst_28655__$1);

return statearr_28790;
})();
var statearr_28791_28870 = state_28771__$1;
(statearr_28791_28870[(2)] = null);

(statearr_28791_28870[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (21))){
var inst_28693 = (state_28771[(2)]);
var state_28771__$1 = state_28771;
var statearr_28795_28871 = state_28771__$1;
(statearr_28795_28871[(2)] = inst_28693);

(statearr_28795_28871[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (31))){
var inst_28719 = (state_28771[(11)]);
var inst_28723 = done.call(null,null);
var inst_28724 = cljs.core.async.untap_STAR_.call(null,m,inst_28719);
var state_28771__$1 = (function (){var statearr_28796 = state_28771;
(statearr_28796[(19)] = inst_28723);

return statearr_28796;
})();
var statearr_28797_28872 = state_28771__$1;
(statearr_28797_28872[(2)] = inst_28724);

(statearr_28797_28872[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (32))){
var inst_28713 = (state_28771[(20)]);
var inst_28714 = (state_28771[(10)]);
var inst_28711 = (state_28771[(21)]);
var inst_28712 = (state_28771[(12)]);
var inst_28726 = (state_28771[(2)]);
var inst_28727 = (inst_28714 + (1));
var tmp28792 = inst_28713;
var tmp28793 = inst_28711;
var tmp28794 = inst_28712;
var inst_28711__$1 = tmp28793;
var inst_28712__$1 = tmp28794;
var inst_28713__$1 = tmp28792;
var inst_28714__$1 = inst_28727;
var state_28771__$1 = (function (){var statearr_28798 = state_28771;
(statearr_28798[(20)] = inst_28713__$1);

(statearr_28798[(10)] = inst_28714__$1);

(statearr_28798[(22)] = inst_28726);

(statearr_28798[(21)] = inst_28711__$1);

(statearr_28798[(12)] = inst_28712__$1);

return statearr_28798;
})();
var statearr_28799_28873 = state_28771__$1;
(statearr_28799_28873[(2)] = null);

(statearr_28799_28873[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (40))){
var inst_28739 = (state_28771[(23)]);
var inst_28743 = done.call(null,null);
var inst_28744 = cljs.core.async.untap_STAR_.call(null,m,inst_28739);
var state_28771__$1 = (function (){var statearr_28800 = state_28771;
(statearr_28800[(24)] = inst_28743);

return statearr_28800;
})();
var statearr_28801_28874 = state_28771__$1;
(statearr_28801_28874[(2)] = inst_28744);

(statearr_28801_28874[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (33))){
var inst_28730 = (state_28771[(25)]);
var inst_28732 = cljs.core.chunked_seq_QMARK_.call(null,inst_28730);
var state_28771__$1 = state_28771;
if(inst_28732){
var statearr_28802_28875 = state_28771__$1;
(statearr_28802_28875[(1)] = (36));

} else {
var statearr_28803_28876 = state_28771__$1;
(statearr_28803_28876[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (13))){
var inst_28662 = (state_28771[(26)]);
var inst_28665 = cljs.core.async.close_BANG_.call(null,inst_28662);
var state_28771__$1 = state_28771;
var statearr_28804_28877 = state_28771__$1;
(statearr_28804_28877[(2)] = inst_28665);

(statearr_28804_28877[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (22))){
var inst_28683 = (state_28771[(8)]);
var inst_28686 = cljs.core.async.close_BANG_.call(null,inst_28683);
var state_28771__$1 = state_28771;
var statearr_28805_28878 = state_28771__$1;
(statearr_28805_28878[(2)] = inst_28686);

(statearr_28805_28878[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (36))){
var inst_28730 = (state_28771[(25)]);
var inst_28734 = cljs.core.chunk_first.call(null,inst_28730);
var inst_28735 = cljs.core.chunk_rest.call(null,inst_28730);
var inst_28736 = cljs.core.count.call(null,inst_28734);
var inst_28711 = inst_28735;
var inst_28712 = inst_28734;
var inst_28713 = inst_28736;
var inst_28714 = (0);
var state_28771__$1 = (function (){var statearr_28806 = state_28771;
(statearr_28806[(20)] = inst_28713);

(statearr_28806[(10)] = inst_28714);

(statearr_28806[(21)] = inst_28711);

(statearr_28806[(12)] = inst_28712);

return statearr_28806;
})();
var statearr_28807_28879 = state_28771__$1;
(statearr_28807_28879[(2)] = null);

(statearr_28807_28879[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (41))){
var inst_28730 = (state_28771[(25)]);
var inst_28746 = (state_28771[(2)]);
var inst_28747 = cljs.core.next.call(null,inst_28730);
var inst_28711 = inst_28747;
var inst_28712 = null;
var inst_28713 = (0);
var inst_28714 = (0);
var state_28771__$1 = (function (){var statearr_28808 = state_28771;
(statearr_28808[(20)] = inst_28713);

(statearr_28808[(10)] = inst_28714);

(statearr_28808[(27)] = inst_28746);

(statearr_28808[(21)] = inst_28711);

(statearr_28808[(12)] = inst_28712);

return statearr_28808;
})();
var statearr_28809_28880 = state_28771__$1;
(statearr_28809_28880[(2)] = null);

(statearr_28809_28880[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (43))){
var state_28771__$1 = state_28771;
var statearr_28810_28881 = state_28771__$1;
(statearr_28810_28881[(2)] = null);

(statearr_28810_28881[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (29))){
var inst_28755 = (state_28771[(2)]);
var state_28771__$1 = state_28771;
var statearr_28811_28882 = state_28771__$1;
(statearr_28811_28882[(2)] = inst_28755);

(statearr_28811_28882[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (44))){
var inst_28764 = (state_28771[(2)]);
var state_28771__$1 = (function (){var statearr_28812 = state_28771;
(statearr_28812[(28)] = inst_28764);

return statearr_28812;
})();
var statearr_28813_28883 = state_28771__$1;
(statearr_28813_28883[(2)] = null);

(statearr_28813_28883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (6))){
var inst_28703 = (state_28771[(29)]);
var inst_28702 = cljs.core.deref.call(null,cs);
var inst_28703__$1 = cljs.core.keys.call(null,inst_28702);
var inst_28704 = cljs.core.count.call(null,inst_28703__$1);
var inst_28705 = cljs.core.reset_BANG_.call(null,dctr,inst_28704);
var inst_28710 = cljs.core.seq.call(null,inst_28703__$1);
var inst_28711 = inst_28710;
var inst_28712 = null;
var inst_28713 = (0);
var inst_28714 = (0);
var state_28771__$1 = (function (){var statearr_28814 = state_28771;
(statearr_28814[(20)] = inst_28713);

(statearr_28814[(10)] = inst_28714);

(statearr_28814[(30)] = inst_28705);

(statearr_28814[(21)] = inst_28711);

(statearr_28814[(29)] = inst_28703__$1);

(statearr_28814[(12)] = inst_28712);

return statearr_28814;
})();
var statearr_28815_28884 = state_28771__$1;
(statearr_28815_28884[(2)] = null);

(statearr_28815_28884[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (28))){
var inst_28711 = (state_28771[(21)]);
var inst_28730 = (state_28771[(25)]);
var inst_28730__$1 = cljs.core.seq.call(null,inst_28711);
var state_28771__$1 = (function (){var statearr_28816 = state_28771;
(statearr_28816[(25)] = inst_28730__$1);

return statearr_28816;
})();
if(inst_28730__$1){
var statearr_28817_28885 = state_28771__$1;
(statearr_28817_28885[(1)] = (33));

} else {
var statearr_28818_28886 = state_28771__$1;
(statearr_28818_28886[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (25))){
var inst_28713 = (state_28771[(20)]);
var inst_28714 = (state_28771[(10)]);
var inst_28716 = (inst_28714 < inst_28713);
var inst_28717 = inst_28716;
var state_28771__$1 = state_28771;
if(cljs.core.truth_(inst_28717)){
var statearr_28819_28887 = state_28771__$1;
(statearr_28819_28887[(1)] = (27));

} else {
var statearr_28820_28888 = state_28771__$1;
(statearr_28820_28888[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (34))){
var state_28771__$1 = state_28771;
var statearr_28821_28889 = state_28771__$1;
(statearr_28821_28889[(2)] = null);

(statearr_28821_28889[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (17))){
var state_28771__$1 = state_28771;
var statearr_28822_28890 = state_28771__$1;
(statearr_28822_28890[(2)] = null);

(statearr_28822_28890[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (3))){
var inst_28769 = (state_28771[(2)]);
var state_28771__$1 = state_28771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28771__$1,inst_28769);
} else {
if((state_val_28772 === (12))){
var inst_28698 = (state_28771[(2)]);
var state_28771__$1 = state_28771;
var statearr_28823_28891 = state_28771__$1;
(statearr_28823_28891[(2)] = inst_28698);

(statearr_28823_28891[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (2))){
var state_28771__$1 = state_28771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28771__$1,(4),ch);
} else {
if((state_val_28772 === (23))){
var state_28771__$1 = state_28771;
var statearr_28824_28892 = state_28771__$1;
(statearr_28824_28892[(2)] = null);

(statearr_28824_28892[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (35))){
var inst_28753 = (state_28771[(2)]);
var state_28771__$1 = state_28771;
var statearr_28825_28893 = state_28771__$1;
(statearr_28825_28893[(2)] = inst_28753);

(statearr_28825_28893[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (19))){
var inst_28672 = (state_28771[(7)]);
var inst_28676 = cljs.core.chunk_first.call(null,inst_28672);
var inst_28677 = cljs.core.chunk_rest.call(null,inst_28672);
var inst_28678 = cljs.core.count.call(null,inst_28676);
var inst_28652 = inst_28677;
var inst_28653 = inst_28676;
var inst_28654 = inst_28678;
var inst_28655 = (0);
var state_28771__$1 = (function (){var statearr_28826 = state_28771;
(statearr_28826[(13)] = inst_28653);

(statearr_28826[(14)] = inst_28654);

(statearr_28826[(15)] = inst_28652);

(statearr_28826[(17)] = inst_28655);

return statearr_28826;
})();
var statearr_28827_28894 = state_28771__$1;
(statearr_28827_28894[(2)] = null);

(statearr_28827_28894[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (11))){
var inst_28652 = (state_28771[(15)]);
var inst_28672 = (state_28771[(7)]);
var inst_28672__$1 = cljs.core.seq.call(null,inst_28652);
var state_28771__$1 = (function (){var statearr_28828 = state_28771;
(statearr_28828[(7)] = inst_28672__$1);

return statearr_28828;
})();
if(inst_28672__$1){
var statearr_28829_28895 = state_28771__$1;
(statearr_28829_28895[(1)] = (16));

} else {
var statearr_28830_28896 = state_28771__$1;
(statearr_28830_28896[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (9))){
var inst_28700 = (state_28771[(2)]);
var state_28771__$1 = state_28771;
var statearr_28831_28897 = state_28771__$1;
(statearr_28831_28897[(2)] = inst_28700);

(statearr_28831_28897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (5))){
var inst_28650 = cljs.core.deref.call(null,cs);
var inst_28651 = cljs.core.seq.call(null,inst_28650);
var inst_28652 = inst_28651;
var inst_28653 = null;
var inst_28654 = (0);
var inst_28655 = (0);
var state_28771__$1 = (function (){var statearr_28832 = state_28771;
(statearr_28832[(13)] = inst_28653);

(statearr_28832[(14)] = inst_28654);

(statearr_28832[(15)] = inst_28652);

(statearr_28832[(17)] = inst_28655);

return statearr_28832;
})();
var statearr_28833_28898 = state_28771__$1;
(statearr_28833_28898[(2)] = null);

(statearr_28833_28898[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (14))){
var state_28771__$1 = state_28771;
var statearr_28834_28899 = state_28771__$1;
(statearr_28834_28899[(2)] = null);

(statearr_28834_28899[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (45))){
var inst_28761 = (state_28771[(2)]);
var state_28771__$1 = state_28771;
var statearr_28835_28900 = state_28771__$1;
(statearr_28835_28900[(2)] = inst_28761);

(statearr_28835_28900[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (26))){
var inst_28703 = (state_28771[(29)]);
var inst_28757 = (state_28771[(2)]);
var inst_28758 = cljs.core.seq.call(null,inst_28703);
var state_28771__$1 = (function (){var statearr_28836 = state_28771;
(statearr_28836[(31)] = inst_28757);

return statearr_28836;
})();
if(inst_28758){
var statearr_28837_28901 = state_28771__$1;
(statearr_28837_28901[(1)] = (42));

} else {
var statearr_28838_28902 = state_28771__$1;
(statearr_28838_28902[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (16))){
var inst_28672 = (state_28771[(7)]);
var inst_28674 = cljs.core.chunked_seq_QMARK_.call(null,inst_28672);
var state_28771__$1 = state_28771;
if(inst_28674){
var statearr_28839_28903 = state_28771__$1;
(statearr_28839_28903[(1)] = (19));

} else {
var statearr_28840_28904 = state_28771__$1;
(statearr_28840_28904[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (38))){
var inst_28750 = (state_28771[(2)]);
var state_28771__$1 = state_28771;
var statearr_28841_28905 = state_28771__$1;
(statearr_28841_28905[(2)] = inst_28750);

(statearr_28841_28905[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (30))){
var state_28771__$1 = state_28771;
var statearr_28842_28906 = state_28771__$1;
(statearr_28842_28906[(2)] = null);

(statearr_28842_28906[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (10))){
var inst_28653 = (state_28771[(13)]);
var inst_28655 = (state_28771[(17)]);
var inst_28661 = cljs.core._nth.call(null,inst_28653,inst_28655);
var inst_28662 = cljs.core.nth.call(null,inst_28661,(0),null);
var inst_28663 = cljs.core.nth.call(null,inst_28661,(1),null);
var state_28771__$1 = (function (){var statearr_28843 = state_28771;
(statearr_28843[(26)] = inst_28662);

return statearr_28843;
})();
if(cljs.core.truth_(inst_28663)){
var statearr_28844_28907 = state_28771__$1;
(statearr_28844_28907[(1)] = (13));

} else {
var statearr_28845_28908 = state_28771__$1;
(statearr_28845_28908[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (18))){
var inst_28696 = (state_28771[(2)]);
var state_28771__$1 = state_28771;
var statearr_28846_28909 = state_28771__$1;
(statearr_28846_28909[(2)] = inst_28696);

(statearr_28846_28909[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (42))){
var state_28771__$1 = state_28771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28771__$1,(45),dchan);
} else {
if((state_val_28772 === (37))){
var inst_28739 = (state_28771[(23)]);
var inst_28643 = (state_28771[(9)]);
var inst_28730 = (state_28771[(25)]);
var inst_28739__$1 = cljs.core.first.call(null,inst_28730);
var inst_28740 = cljs.core.async.put_BANG_.call(null,inst_28739__$1,inst_28643,done);
var state_28771__$1 = (function (){var statearr_28847 = state_28771;
(statearr_28847[(23)] = inst_28739__$1);

return statearr_28847;
})();
if(cljs.core.truth_(inst_28740)){
var statearr_28848_28910 = state_28771__$1;
(statearr_28848_28910[(1)] = (39));

} else {
var statearr_28849_28911 = state_28771__$1;
(statearr_28849_28911[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (8))){
var inst_28654 = (state_28771[(14)]);
var inst_28655 = (state_28771[(17)]);
var inst_28657 = (inst_28655 < inst_28654);
var inst_28658 = inst_28657;
var state_28771__$1 = state_28771;
if(cljs.core.truth_(inst_28658)){
var statearr_28850_28912 = state_28771__$1;
(statearr_28850_28912[(1)] = (10));

} else {
var statearr_28851_28913 = state_28771__$1;
(statearr_28851_28913[(1)] = (11));

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
}
}
}
}
}
});})(c__21859__auto___28859,cs,m,dchan,dctr,done))
;
return ((function (switch__21797__auto__,c__21859__auto___28859,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21798__auto__ = null;
var cljs$core$async$mult_$_state_machine__21798__auto____0 = (function (){
var statearr_28855 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28855[(0)] = cljs$core$async$mult_$_state_machine__21798__auto__);

(statearr_28855[(1)] = (1));

return statearr_28855;
});
var cljs$core$async$mult_$_state_machine__21798__auto____1 = (function (state_28771){
while(true){
var ret_value__21799__auto__ = (function (){try{while(true){
var result__21800__auto__ = switch__21797__auto__.call(null,state_28771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21800__auto__;
}
break;
}
}catch (e28856){if((e28856 instanceof Object)){
var ex__21801__auto__ = e28856;
var statearr_28857_28914 = state_28771;
(statearr_28857_28914[(5)] = ex__21801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28915 = state_28771;
state_28771 = G__28915;
continue;
} else {
return ret_value__21799__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21798__auto__ = function(state_28771){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21798__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21798__auto____1.call(this,state_28771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21798__auto____0;
cljs$core$async$mult_$_state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21798__auto____1;
return cljs$core$async$mult_$_state_machine__21798__auto__;
})()
;})(switch__21797__auto__,c__21859__auto___28859,cs,m,dchan,dctr,done))
})();
var state__21861__auto__ = (function (){var statearr_28858 = f__21860__auto__.call(null);
(statearr_28858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21859__auto___28859);

return statearr_28858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21861__auto__);
});})(c__21859__auto___28859,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__28917 = arguments.length;
switch (G__28917) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj28920 = {};
return obj28920;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__18075__auto__ = m;
if(and__18075__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__18075__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__18723__auto__ = (((m == null))?null:m);
return (function (){var or__18087__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18723__auto__)]);
if(or__18087__auto__){
return or__18087__auto__;
} else {
var or__18087__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__18087__auto____$1){
return or__18087__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__18075__auto__ = m;
if(and__18075__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__18075__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__18723__auto__ = (((m == null))?null:m);
return (function (){var or__18087__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18723__auto__)]);
if(or__18087__auto__){
return or__18087__auto__;
} else {
var or__18087__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__18087__auto____$1){
return or__18087__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__18075__auto__ = m;
if(and__18075__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__18075__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__18723__auto__ = (((m == null))?null:m);
return (function (){var or__18087__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18723__auto__)]);
if(or__18087__auto__){
return or__18087__auto__;
} else {
var or__18087__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__18087__auto____$1){
return or__18087__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__18075__auto__ = m;
if(and__18075__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__18075__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__18723__auto__ = (((m == null))?null:m);
return (function (){var or__18087__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18723__auto__)]);
if(or__18087__auto__){
return or__18087__auto__;
} else {
var or__18087__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__18087__auto____$1){
return or__18087__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__18075__auto__ = m;
if(and__18075__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__18075__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__18723__auto__ = (((m == null))?null:m);
return (function (){var or__18087__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18723__auto__)]);
if(or__18087__auto__){
return or__18087__auto__;
} else {
var or__18087__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__18087__auto____$1){
return or__18087__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__19127__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19127__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28925){
var map__28926 = p__28925;
var map__28926__$1 = ((cljs.core.seq_QMARK_.call(null,map__28926))?cljs.core.apply.call(null,cljs.core.hash_map,map__28926):map__28926);
var opts = map__28926__$1;
var statearr_28927_28930 = state;
(statearr_28927_28930[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4423__auto__ = cljs.core.async.do_alts.call(null,((function (map__28926,map__28926__$1,opts){
return (function (val){
var statearr_28928_28931 = state;
(statearr_28928_28931[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28926,map__28926__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4423__auto__)){
var cb = temp__4423__auto__;
var statearr_28929_28932 = state;
(statearr_28929_28932[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28921){
var G__28922 = cljs.core.first.call(null,seq28921);
var seq28921__$1 = cljs.core.next.call(null,seq28921);
var G__28923 = cljs.core.first.call(null,seq28921__$1);
var seq28921__$2 = cljs.core.next.call(null,seq28921__$1);
var G__28924 = cljs.core.first.call(null,seq28921__$2);
var seq28921__$3 = cljs.core.next.call(null,seq28921__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28922,G__28923,G__28924,seq28921__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t29052 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29052 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29053){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29053 = meta29053;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29054,meta29053__$1){
var self__ = this;
var _29054__$1 = this;
return (new cljs.core.async.t29052(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29053__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29052.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29054){
var self__ = this;
var _29054__$1 = this;
return self__.meta29053;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29052.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29052.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29052.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t29052.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29052.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29052.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29052.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29052.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29052.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29053","meta29053",-2092809702,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29052.cljs$lang$type = true;

cljs.core.async.t29052.cljs$lang$ctorStr = "cljs.core.async/t29052";

cljs.core.async.t29052.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18666__auto__,writer__18667__auto__,opt__18668__auto__){
return cljs.core._write.call(null,writer__18667__auto__,"cljs.core.async/t29052");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t29052 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t29052(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29053){
return (new cljs.core.async.t29052(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29053));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t29052(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21859__auto___29171 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21859__auto___29171,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21860__auto__ = (function (){var switch__21797__auto__ = ((function (c__21859__auto___29171,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29124){
var state_val_29125 = (state_29124[(1)]);
if((state_val_29125 === (7))){
var inst_29068 = (state_29124[(7)]);
var inst_29073 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29068);
var state_29124__$1 = state_29124;
var statearr_29126_29172 = state_29124__$1;
(statearr_29126_29172[(2)] = inst_29073);

(statearr_29126_29172[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (20))){
var inst_29083 = (state_29124[(8)]);
var state_29124__$1 = state_29124;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29124__$1,(23),out,inst_29083);
} else {
if((state_val_29125 === (1))){
var inst_29058 = (state_29124[(9)]);
var inst_29058__$1 = calc_state.call(null);
var inst_29059 = cljs.core.seq_QMARK_.call(null,inst_29058__$1);
var state_29124__$1 = (function (){var statearr_29127 = state_29124;
(statearr_29127[(9)] = inst_29058__$1);

return statearr_29127;
})();
if(inst_29059){
var statearr_29128_29173 = state_29124__$1;
(statearr_29128_29173[(1)] = (2));

} else {
var statearr_29129_29174 = state_29124__$1;
(statearr_29129_29174[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (24))){
var inst_29076 = (state_29124[(10)]);
var inst_29068 = inst_29076;
var state_29124__$1 = (function (){var statearr_29130 = state_29124;
(statearr_29130[(7)] = inst_29068);

return statearr_29130;
})();
var statearr_29131_29175 = state_29124__$1;
(statearr_29131_29175[(2)] = null);

(statearr_29131_29175[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (4))){
var inst_29058 = (state_29124[(9)]);
var inst_29064 = (state_29124[(2)]);
var inst_29065 = cljs.core.get.call(null,inst_29064,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29066 = cljs.core.get.call(null,inst_29064,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29067 = cljs.core.get.call(null,inst_29064,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29068 = inst_29058;
var state_29124__$1 = (function (){var statearr_29132 = state_29124;
(statearr_29132[(11)] = inst_29067);

(statearr_29132[(12)] = inst_29065);

(statearr_29132[(7)] = inst_29068);

(statearr_29132[(13)] = inst_29066);

return statearr_29132;
})();
var statearr_29133_29176 = state_29124__$1;
(statearr_29133_29176[(2)] = null);

(statearr_29133_29176[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (15))){
var state_29124__$1 = state_29124;
var statearr_29134_29177 = state_29124__$1;
(statearr_29134_29177[(2)] = null);

(statearr_29134_29177[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (21))){
var inst_29076 = (state_29124[(10)]);
var inst_29068 = inst_29076;
var state_29124__$1 = (function (){var statearr_29135 = state_29124;
(statearr_29135[(7)] = inst_29068);

return statearr_29135;
})();
var statearr_29136_29178 = state_29124__$1;
(statearr_29136_29178[(2)] = null);

(statearr_29136_29178[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (13))){
var inst_29120 = (state_29124[(2)]);
var state_29124__$1 = state_29124;
var statearr_29137_29179 = state_29124__$1;
(statearr_29137_29179[(2)] = inst_29120);

(statearr_29137_29179[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (22))){
var inst_29118 = (state_29124[(2)]);
var state_29124__$1 = state_29124;
var statearr_29138_29180 = state_29124__$1;
(statearr_29138_29180[(2)] = inst_29118);

(statearr_29138_29180[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (6))){
var inst_29122 = (state_29124[(2)]);
var state_29124__$1 = state_29124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29124__$1,inst_29122);
} else {
if((state_val_29125 === (25))){
var state_29124__$1 = state_29124;
var statearr_29139_29181 = state_29124__$1;
(statearr_29139_29181[(2)] = null);

(statearr_29139_29181[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (17))){
var inst_29098 = (state_29124[(14)]);
var state_29124__$1 = state_29124;
var statearr_29140_29182 = state_29124__$1;
(statearr_29140_29182[(2)] = inst_29098);

(statearr_29140_29182[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (3))){
var inst_29058 = (state_29124[(9)]);
var state_29124__$1 = state_29124;
var statearr_29141_29183 = state_29124__$1;
(statearr_29141_29183[(2)] = inst_29058);

(statearr_29141_29183[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (12))){
var inst_29098 = (state_29124[(14)]);
var inst_29084 = (state_29124[(15)]);
var inst_29077 = (state_29124[(16)]);
var inst_29098__$1 = inst_29077.call(null,inst_29084);
var state_29124__$1 = (function (){var statearr_29142 = state_29124;
(statearr_29142[(14)] = inst_29098__$1);

return statearr_29142;
})();
if(cljs.core.truth_(inst_29098__$1)){
var statearr_29143_29184 = state_29124__$1;
(statearr_29143_29184[(1)] = (17));

} else {
var statearr_29144_29185 = state_29124__$1;
(statearr_29144_29185[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (2))){
var inst_29058 = (state_29124[(9)]);
var inst_29061 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29058);
var state_29124__$1 = state_29124;
var statearr_29145_29186 = state_29124__$1;
(statearr_29145_29186[(2)] = inst_29061);

(statearr_29145_29186[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (23))){
var inst_29109 = (state_29124[(2)]);
var state_29124__$1 = state_29124;
if(cljs.core.truth_(inst_29109)){
var statearr_29146_29187 = state_29124__$1;
(statearr_29146_29187[(1)] = (24));

} else {
var statearr_29147_29188 = state_29124__$1;
(statearr_29147_29188[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (19))){
var inst_29106 = (state_29124[(2)]);
var state_29124__$1 = state_29124;
if(cljs.core.truth_(inst_29106)){
var statearr_29148_29189 = state_29124__$1;
(statearr_29148_29189[(1)] = (20));

} else {
var statearr_29149_29190 = state_29124__$1;
(statearr_29149_29190[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (11))){
var inst_29083 = (state_29124[(8)]);
var inst_29089 = (inst_29083 == null);
var state_29124__$1 = state_29124;
if(cljs.core.truth_(inst_29089)){
var statearr_29150_29191 = state_29124__$1;
(statearr_29150_29191[(1)] = (14));

} else {
var statearr_29151_29192 = state_29124__$1;
(statearr_29151_29192[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (9))){
var inst_29076 = (state_29124[(10)]);
var inst_29076__$1 = (state_29124[(2)]);
var inst_29077 = cljs.core.get.call(null,inst_29076__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29078 = cljs.core.get.call(null,inst_29076__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29079 = cljs.core.get.call(null,inst_29076__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29124__$1 = (function (){var statearr_29152 = state_29124;
(statearr_29152[(10)] = inst_29076__$1);

(statearr_29152[(17)] = inst_29078);

(statearr_29152[(16)] = inst_29077);

return statearr_29152;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29124__$1,(10),inst_29079);
} else {
if((state_val_29125 === (5))){
var inst_29068 = (state_29124[(7)]);
var inst_29071 = cljs.core.seq_QMARK_.call(null,inst_29068);
var state_29124__$1 = state_29124;
if(inst_29071){
var statearr_29153_29193 = state_29124__$1;
(statearr_29153_29193[(1)] = (7));

} else {
var statearr_29154_29194 = state_29124__$1;
(statearr_29154_29194[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (14))){
var inst_29084 = (state_29124[(15)]);
var inst_29091 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29084);
var state_29124__$1 = state_29124;
var statearr_29155_29195 = state_29124__$1;
(statearr_29155_29195[(2)] = inst_29091);

(statearr_29155_29195[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (26))){
var inst_29114 = (state_29124[(2)]);
var state_29124__$1 = state_29124;
var statearr_29156_29196 = state_29124__$1;
(statearr_29156_29196[(2)] = inst_29114);

(statearr_29156_29196[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (16))){
var inst_29094 = (state_29124[(2)]);
var inst_29095 = calc_state.call(null);
var inst_29068 = inst_29095;
var state_29124__$1 = (function (){var statearr_29157 = state_29124;
(statearr_29157[(18)] = inst_29094);

(statearr_29157[(7)] = inst_29068);

return statearr_29157;
})();
var statearr_29158_29197 = state_29124__$1;
(statearr_29158_29197[(2)] = null);

(statearr_29158_29197[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (10))){
var inst_29083 = (state_29124[(8)]);
var inst_29084 = (state_29124[(15)]);
var inst_29082 = (state_29124[(2)]);
var inst_29083__$1 = cljs.core.nth.call(null,inst_29082,(0),null);
var inst_29084__$1 = cljs.core.nth.call(null,inst_29082,(1),null);
var inst_29085 = (inst_29083__$1 == null);
var inst_29086 = cljs.core._EQ_.call(null,inst_29084__$1,change);
var inst_29087 = (inst_29085) || (inst_29086);
var state_29124__$1 = (function (){var statearr_29159 = state_29124;
(statearr_29159[(8)] = inst_29083__$1);

(statearr_29159[(15)] = inst_29084__$1);

return statearr_29159;
})();
if(cljs.core.truth_(inst_29087)){
var statearr_29160_29198 = state_29124__$1;
(statearr_29160_29198[(1)] = (11));

} else {
var statearr_29161_29199 = state_29124__$1;
(statearr_29161_29199[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (18))){
var inst_29084 = (state_29124[(15)]);
var inst_29078 = (state_29124[(17)]);
var inst_29077 = (state_29124[(16)]);
var inst_29101 = cljs.core.empty_QMARK_.call(null,inst_29077);
var inst_29102 = inst_29078.call(null,inst_29084);
var inst_29103 = cljs.core.not.call(null,inst_29102);
var inst_29104 = (inst_29101) && (inst_29103);
var state_29124__$1 = state_29124;
var statearr_29162_29200 = state_29124__$1;
(statearr_29162_29200[(2)] = inst_29104);

(statearr_29162_29200[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29125 === (8))){
var inst_29068 = (state_29124[(7)]);
var state_29124__$1 = state_29124;
var statearr_29163_29201 = state_29124__$1;
(statearr_29163_29201[(2)] = inst_29068);

(statearr_29163_29201[(1)] = (9));


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
});})(c__21859__auto___29171,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21797__auto__,c__21859__auto___29171,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21798__auto__ = null;
var cljs$core$async$mix_$_state_machine__21798__auto____0 = (function (){
var statearr_29167 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29167[(0)] = cljs$core$async$mix_$_state_machine__21798__auto__);

(statearr_29167[(1)] = (1));

return statearr_29167;
});
var cljs$core$async$mix_$_state_machine__21798__auto____1 = (function (state_29124){
while(true){
var ret_value__21799__auto__ = (function (){try{while(true){
var result__21800__auto__ = switch__21797__auto__.call(null,state_29124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21800__auto__;
}
break;
}
}catch (e29168){if((e29168 instanceof Object)){
var ex__21801__auto__ = e29168;
var statearr_29169_29202 = state_29124;
(statearr_29169_29202[(5)] = ex__21801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29203 = state_29124;
state_29124 = G__29203;
continue;
} else {
return ret_value__21799__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21798__auto__ = function(state_29124){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21798__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21798__auto____1.call(this,state_29124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21798__auto____0;
cljs$core$async$mix_$_state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21798__auto____1;
return cljs$core$async$mix_$_state_machine__21798__auto__;
})()
;})(switch__21797__auto__,c__21859__auto___29171,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21861__auto__ = (function (){var statearr_29170 = f__21860__auto__.call(null);
(statearr_29170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21859__auto___29171);

return statearr_29170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21861__auto__);
});})(c__21859__auto___29171,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj29205 = {};
return obj29205;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__18075__auto__ = p;
if(and__18075__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__18075__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__18723__auto__ = (((p == null))?null:p);
return (function (){var or__18087__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18723__auto__)]);
if(or__18087__auto__){
return or__18087__auto__;
} else {
var or__18087__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__18087__auto____$1){
return or__18087__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__18075__auto__ = p;
if(and__18075__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__18075__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__18723__auto__ = (((p == null))?null:p);
return (function (){var or__18087__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18723__auto__)]);
if(or__18087__auto__){
return or__18087__auto__;
} else {
var or__18087__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__18087__auto____$1){
return or__18087__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__29207 = arguments.length;
switch (G__29207) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__18075__auto__ = p;
if(and__18075__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__18075__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18723__auto__ = (((p == null))?null:p);
return (function (){var or__18087__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18723__auto__)]);
if(or__18087__auto__){
return or__18087__auto__;
} else {
var or__18087__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18087__auto____$1){
return or__18087__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__18075__auto__ = p;
if(and__18075__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__18075__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__18723__auto__ = (((p == null))?null:p);
return (function (){var or__18087__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18723__auto__)]);
if(or__18087__auto__){
return or__18087__auto__;
} else {
var or__18087__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__18087__auto____$1){
return or__18087__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__29211 = arguments.length;
switch (G__29211) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18087__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18087__auto__)){
return or__18087__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18087__auto__,mults){
return (function (p1__29209_SHARP_){
if(cljs.core.truth_(p1__29209_SHARP_.call(null,topic))){
return p1__29209_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29209_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18087__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t29212 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29212 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29213){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29213 = meta29213;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29214,meta29213__$1){
var self__ = this;
var _29214__$1 = this;
return (new cljs.core.async.t29212(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29213__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t29212.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29214){
var self__ = this;
var _29214__$1 = this;
return self__.meta29213;
});})(mults,ensure_mult))
;

cljs.core.async.t29212.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29212.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t29212.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t29212.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t29212.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4423__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t29212.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t29212.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t29212.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29213","meta29213",815080954,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t29212.cljs$lang$type = true;

cljs.core.async.t29212.cljs$lang$ctorStr = "cljs.core.async/t29212";

cljs.core.async.t29212.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18666__auto__,writer__18667__auto__,opt__18668__auto__){
return cljs.core._write.call(null,writer__18667__auto__,"cljs.core.async/t29212");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t29212 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t29212(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29213){
return (new cljs.core.async.t29212(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29213));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t29212(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21859__auto___29335 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21859__auto___29335,mults,ensure_mult,p){
return (function (){
var f__21860__auto__ = (function (){var switch__21797__auto__ = ((function (c__21859__auto___29335,mults,ensure_mult,p){
return (function (state_29286){
var state_val_29287 = (state_29286[(1)]);
if((state_val_29287 === (7))){
var inst_29282 = (state_29286[(2)]);
var state_29286__$1 = state_29286;
var statearr_29288_29336 = state_29286__$1;
(statearr_29288_29336[(2)] = inst_29282);

(statearr_29288_29336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (20))){
var state_29286__$1 = state_29286;
var statearr_29289_29337 = state_29286__$1;
(statearr_29289_29337[(2)] = null);

(statearr_29289_29337[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (1))){
var state_29286__$1 = state_29286;
var statearr_29290_29338 = state_29286__$1;
(statearr_29290_29338[(2)] = null);

(statearr_29290_29338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (24))){
var inst_29265 = (state_29286[(7)]);
var inst_29274 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29265);
var state_29286__$1 = state_29286;
var statearr_29291_29339 = state_29286__$1;
(statearr_29291_29339[(2)] = inst_29274);

(statearr_29291_29339[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (4))){
var inst_29217 = (state_29286[(8)]);
var inst_29217__$1 = (state_29286[(2)]);
var inst_29218 = (inst_29217__$1 == null);
var state_29286__$1 = (function (){var statearr_29292 = state_29286;
(statearr_29292[(8)] = inst_29217__$1);

return statearr_29292;
})();
if(cljs.core.truth_(inst_29218)){
var statearr_29293_29340 = state_29286__$1;
(statearr_29293_29340[(1)] = (5));

} else {
var statearr_29294_29341 = state_29286__$1;
(statearr_29294_29341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (15))){
var inst_29259 = (state_29286[(2)]);
var state_29286__$1 = state_29286;
var statearr_29295_29342 = state_29286__$1;
(statearr_29295_29342[(2)] = inst_29259);

(statearr_29295_29342[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (21))){
var inst_29279 = (state_29286[(2)]);
var state_29286__$1 = (function (){var statearr_29296 = state_29286;
(statearr_29296[(9)] = inst_29279);

return statearr_29296;
})();
var statearr_29297_29343 = state_29286__$1;
(statearr_29297_29343[(2)] = null);

(statearr_29297_29343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (13))){
var inst_29241 = (state_29286[(10)]);
var inst_29243 = cljs.core.chunked_seq_QMARK_.call(null,inst_29241);
var state_29286__$1 = state_29286;
if(inst_29243){
var statearr_29298_29344 = state_29286__$1;
(statearr_29298_29344[(1)] = (16));

} else {
var statearr_29299_29345 = state_29286__$1;
(statearr_29299_29345[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (22))){
var inst_29271 = (state_29286[(2)]);
var state_29286__$1 = state_29286;
if(cljs.core.truth_(inst_29271)){
var statearr_29300_29346 = state_29286__$1;
(statearr_29300_29346[(1)] = (23));

} else {
var statearr_29301_29347 = state_29286__$1;
(statearr_29301_29347[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (6))){
var inst_29267 = (state_29286[(11)]);
var inst_29265 = (state_29286[(7)]);
var inst_29217 = (state_29286[(8)]);
var inst_29265__$1 = topic_fn.call(null,inst_29217);
var inst_29266 = cljs.core.deref.call(null,mults);
var inst_29267__$1 = cljs.core.get.call(null,inst_29266,inst_29265__$1);
var state_29286__$1 = (function (){var statearr_29302 = state_29286;
(statearr_29302[(11)] = inst_29267__$1);

(statearr_29302[(7)] = inst_29265__$1);

return statearr_29302;
})();
if(cljs.core.truth_(inst_29267__$1)){
var statearr_29303_29348 = state_29286__$1;
(statearr_29303_29348[(1)] = (19));

} else {
var statearr_29304_29349 = state_29286__$1;
(statearr_29304_29349[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (25))){
var inst_29276 = (state_29286[(2)]);
var state_29286__$1 = state_29286;
var statearr_29305_29350 = state_29286__$1;
(statearr_29305_29350[(2)] = inst_29276);

(statearr_29305_29350[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (17))){
var inst_29241 = (state_29286[(10)]);
var inst_29250 = cljs.core.first.call(null,inst_29241);
var inst_29251 = cljs.core.async.muxch_STAR_.call(null,inst_29250);
var inst_29252 = cljs.core.async.close_BANG_.call(null,inst_29251);
var inst_29253 = cljs.core.next.call(null,inst_29241);
var inst_29227 = inst_29253;
var inst_29228 = null;
var inst_29229 = (0);
var inst_29230 = (0);
var state_29286__$1 = (function (){var statearr_29306 = state_29286;
(statearr_29306[(12)] = inst_29227);

(statearr_29306[(13)] = inst_29230);

(statearr_29306[(14)] = inst_29229);

(statearr_29306[(15)] = inst_29228);

(statearr_29306[(16)] = inst_29252);

return statearr_29306;
})();
var statearr_29307_29351 = state_29286__$1;
(statearr_29307_29351[(2)] = null);

(statearr_29307_29351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (3))){
var inst_29284 = (state_29286[(2)]);
var state_29286__$1 = state_29286;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29286__$1,inst_29284);
} else {
if((state_val_29287 === (12))){
var inst_29261 = (state_29286[(2)]);
var state_29286__$1 = state_29286;
var statearr_29308_29352 = state_29286__$1;
(statearr_29308_29352[(2)] = inst_29261);

(statearr_29308_29352[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (2))){
var state_29286__$1 = state_29286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29286__$1,(4),ch);
} else {
if((state_val_29287 === (23))){
var state_29286__$1 = state_29286;
var statearr_29309_29353 = state_29286__$1;
(statearr_29309_29353[(2)] = null);

(statearr_29309_29353[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (19))){
var inst_29267 = (state_29286[(11)]);
var inst_29217 = (state_29286[(8)]);
var inst_29269 = cljs.core.async.muxch_STAR_.call(null,inst_29267);
var state_29286__$1 = state_29286;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29286__$1,(22),inst_29269,inst_29217);
} else {
if((state_val_29287 === (11))){
var inst_29227 = (state_29286[(12)]);
var inst_29241 = (state_29286[(10)]);
var inst_29241__$1 = cljs.core.seq.call(null,inst_29227);
var state_29286__$1 = (function (){var statearr_29310 = state_29286;
(statearr_29310[(10)] = inst_29241__$1);

return statearr_29310;
})();
if(inst_29241__$1){
var statearr_29311_29354 = state_29286__$1;
(statearr_29311_29354[(1)] = (13));

} else {
var statearr_29312_29355 = state_29286__$1;
(statearr_29312_29355[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (9))){
var inst_29263 = (state_29286[(2)]);
var state_29286__$1 = state_29286;
var statearr_29313_29356 = state_29286__$1;
(statearr_29313_29356[(2)] = inst_29263);

(statearr_29313_29356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (5))){
var inst_29224 = cljs.core.deref.call(null,mults);
var inst_29225 = cljs.core.vals.call(null,inst_29224);
var inst_29226 = cljs.core.seq.call(null,inst_29225);
var inst_29227 = inst_29226;
var inst_29228 = null;
var inst_29229 = (0);
var inst_29230 = (0);
var state_29286__$1 = (function (){var statearr_29314 = state_29286;
(statearr_29314[(12)] = inst_29227);

(statearr_29314[(13)] = inst_29230);

(statearr_29314[(14)] = inst_29229);

(statearr_29314[(15)] = inst_29228);

return statearr_29314;
})();
var statearr_29315_29357 = state_29286__$1;
(statearr_29315_29357[(2)] = null);

(statearr_29315_29357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (14))){
var state_29286__$1 = state_29286;
var statearr_29319_29358 = state_29286__$1;
(statearr_29319_29358[(2)] = null);

(statearr_29319_29358[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (16))){
var inst_29241 = (state_29286[(10)]);
var inst_29245 = cljs.core.chunk_first.call(null,inst_29241);
var inst_29246 = cljs.core.chunk_rest.call(null,inst_29241);
var inst_29247 = cljs.core.count.call(null,inst_29245);
var inst_29227 = inst_29246;
var inst_29228 = inst_29245;
var inst_29229 = inst_29247;
var inst_29230 = (0);
var state_29286__$1 = (function (){var statearr_29320 = state_29286;
(statearr_29320[(12)] = inst_29227);

(statearr_29320[(13)] = inst_29230);

(statearr_29320[(14)] = inst_29229);

(statearr_29320[(15)] = inst_29228);

return statearr_29320;
})();
var statearr_29321_29359 = state_29286__$1;
(statearr_29321_29359[(2)] = null);

(statearr_29321_29359[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (10))){
var inst_29227 = (state_29286[(12)]);
var inst_29230 = (state_29286[(13)]);
var inst_29229 = (state_29286[(14)]);
var inst_29228 = (state_29286[(15)]);
var inst_29235 = cljs.core._nth.call(null,inst_29228,inst_29230);
var inst_29236 = cljs.core.async.muxch_STAR_.call(null,inst_29235);
var inst_29237 = cljs.core.async.close_BANG_.call(null,inst_29236);
var inst_29238 = (inst_29230 + (1));
var tmp29316 = inst_29227;
var tmp29317 = inst_29229;
var tmp29318 = inst_29228;
var inst_29227__$1 = tmp29316;
var inst_29228__$1 = tmp29318;
var inst_29229__$1 = tmp29317;
var inst_29230__$1 = inst_29238;
var state_29286__$1 = (function (){var statearr_29322 = state_29286;
(statearr_29322[(12)] = inst_29227__$1);

(statearr_29322[(13)] = inst_29230__$1);

(statearr_29322[(14)] = inst_29229__$1);

(statearr_29322[(15)] = inst_29228__$1);

(statearr_29322[(17)] = inst_29237);

return statearr_29322;
})();
var statearr_29323_29360 = state_29286__$1;
(statearr_29323_29360[(2)] = null);

(statearr_29323_29360[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (18))){
var inst_29256 = (state_29286[(2)]);
var state_29286__$1 = state_29286;
var statearr_29324_29361 = state_29286__$1;
(statearr_29324_29361[(2)] = inst_29256);

(statearr_29324_29361[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29287 === (8))){
var inst_29230 = (state_29286[(13)]);
var inst_29229 = (state_29286[(14)]);
var inst_29232 = (inst_29230 < inst_29229);
var inst_29233 = inst_29232;
var state_29286__$1 = state_29286;
if(cljs.core.truth_(inst_29233)){
var statearr_29325_29362 = state_29286__$1;
(statearr_29325_29362[(1)] = (10));

} else {
var statearr_29326_29363 = state_29286__$1;
(statearr_29326_29363[(1)] = (11));

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
});})(c__21859__auto___29335,mults,ensure_mult,p))
;
return ((function (switch__21797__auto__,c__21859__auto___29335,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21798__auto__ = null;
var cljs$core$async$state_machine__21798__auto____0 = (function (){
var statearr_29330 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29330[(0)] = cljs$core$async$state_machine__21798__auto__);

(statearr_29330[(1)] = (1));

return statearr_29330;
});
var cljs$core$async$state_machine__21798__auto____1 = (function (state_29286){
while(true){
var ret_value__21799__auto__ = (function (){try{while(true){
var result__21800__auto__ = switch__21797__auto__.call(null,state_29286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21800__auto__;
}
break;
}
}catch (e29331){if((e29331 instanceof Object)){
var ex__21801__auto__ = e29331;
var statearr_29332_29364 = state_29286;
(statearr_29332_29364[(5)] = ex__21801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29331;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29365 = state_29286;
state_29286 = G__29365;
continue;
} else {
return ret_value__21799__auto__;
}
break;
}
});
cljs$core$async$state_machine__21798__auto__ = function(state_29286){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21798__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21798__auto____1.call(this,state_29286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21798__auto____0;
cljs$core$async$state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21798__auto____1;
return cljs$core$async$state_machine__21798__auto__;
})()
;})(switch__21797__auto__,c__21859__auto___29335,mults,ensure_mult,p))
})();
var state__21861__auto__ = (function (){var statearr_29333 = f__21860__auto__.call(null);
(statearr_29333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21859__auto___29335);

return statearr_29333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21861__auto__);
});})(c__21859__auto___29335,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__29367 = arguments.length;
switch (G__29367) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__29370 = arguments.length;
switch (G__29370) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__29373 = arguments.length;
switch (G__29373) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__21859__auto___29443 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21859__auto___29443,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21860__auto__ = (function (){var switch__21797__auto__ = ((function (c__21859__auto___29443,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29412){
var state_val_29413 = (state_29412[(1)]);
if((state_val_29413 === (7))){
var state_29412__$1 = state_29412;
var statearr_29414_29444 = state_29412__$1;
(statearr_29414_29444[(2)] = null);

(statearr_29414_29444[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29413 === (1))){
var state_29412__$1 = state_29412;
var statearr_29415_29445 = state_29412__$1;
(statearr_29415_29445[(2)] = null);

(statearr_29415_29445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29413 === (4))){
var inst_29376 = (state_29412[(7)]);
var inst_29378 = (inst_29376 < cnt);
var state_29412__$1 = state_29412;
if(cljs.core.truth_(inst_29378)){
var statearr_29416_29446 = state_29412__$1;
(statearr_29416_29446[(1)] = (6));

} else {
var statearr_29417_29447 = state_29412__$1;
(statearr_29417_29447[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29413 === (15))){
var inst_29408 = (state_29412[(2)]);
var state_29412__$1 = state_29412;
var statearr_29418_29448 = state_29412__$1;
(statearr_29418_29448[(2)] = inst_29408);

(statearr_29418_29448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29413 === (13))){
var inst_29401 = cljs.core.async.close_BANG_.call(null,out);
var state_29412__$1 = state_29412;
var statearr_29419_29449 = state_29412__$1;
(statearr_29419_29449[(2)] = inst_29401);

(statearr_29419_29449[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29413 === (6))){
var state_29412__$1 = state_29412;
var statearr_29420_29450 = state_29412__$1;
(statearr_29420_29450[(2)] = null);

(statearr_29420_29450[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29413 === (3))){
var inst_29410 = (state_29412[(2)]);
var state_29412__$1 = state_29412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29412__$1,inst_29410);
} else {
if((state_val_29413 === (12))){
var inst_29398 = (state_29412[(8)]);
var inst_29398__$1 = (state_29412[(2)]);
var inst_29399 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29398__$1);
var state_29412__$1 = (function (){var statearr_29421 = state_29412;
(statearr_29421[(8)] = inst_29398__$1);

return statearr_29421;
})();
if(cljs.core.truth_(inst_29399)){
var statearr_29422_29451 = state_29412__$1;
(statearr_29422_29451[(1)] = (13));

} else {
var statearr_29423_29452 = state_29412__$1;
(statearr_29423_29452[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29413 === (2))){
var inst_29375 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29376 = (0);
var state_29412__$1 = (function (){var statearr_29424 = state_29412;
(statearr_29424[(9)] = inst_29375);

(statearr_29424[(7)] = inst_29376);

return statearr_29424;
})();
var statearr_29425_29453 = state_29412__$1;
(statearr_29425_29453[(2)] = null);

(statearr_29425_29453[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29413 === (11))){
var inst_29376 = (state_29412[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29412,(10),Object,null,(9));
var inst_29385 = chs__$1.call(null,inst_29376);
var inst_29386 = done.call(null,inst_29376);
var inst_29387 = cljs.core.async.take_BANG_.call(null,inst_29385,inst_29386);
var state_29412__$1 = state_29412;
var statearr_29426_29454 = state_29412__$1;
(statearr_29426_29454[(2)] = inst_29387);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29412__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29413 === (9))){
var inst_29376 = (state_29412[(7)]);
var inst_29389 = (state_29412[(2)]);
var inst_29390 = (inst_29376 + (1));
var inst_29376__$1 = inst_29390;
var state_29412__$1 = (function (){var statearr_29427 = state_29412;
(statearr_29427[(10)] = inst_29389);

(statearr_29427[(7)] = inst_29376__$1);

return statearr_29427;
})();
var statearr_29428_29455 = state_29412__$1;
(statearr_29428_29455[(2)] = null);

(statearr_29428_29455[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29413 === (5))){
var inst_29396 = (state_29412[(2)]);
var state_29412__$1 = (function (){var statearr_29429 = state_29412;
(statearr_29429[(11)] = inst_29396);

return statearr_29429;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29412__$1,(12),dchan);
} else {
if((state_val_29413 === (14))){
var inst_29398 = (state_29412[(8)]);
var inst_29403 = cljs.core.apply.call(null,f,inst_29398);
var state_29412__$1 = state_29412;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29412__$1,(16),out,inst_29403);
} else {
if((state_val_29413 === (16))){
var inst_29405 = (state_29412[(2)]);
var state_29412__$1 = (function (){var statearr_29430 = state_29412;
(statearr_29430[(12)] = inst_29405);

return statearr_29430;
})();
var statearr_29431_29456 = state_29412__$1;
(statearr_29431_29456[(2)] = null);

(statearr_29431_29456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29413 === (10))){
var inst_29380 = (state_29412[(2)]);
var inst_29381 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29412__$1 = (function (){var statearr_29432 = state_29412;
(statearr_29432[(13)] = inst_29380);

return statearr_29432;
})();
var statearr_29433_29457 = state_29412__$1;
(statearr_29433_29457[(2)] = inst_29381);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29412__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29413 === (8))){
var inst_29394 = (state_29412[(2)]);
var state_29412__$1 = state_29412;
var statearr_29434_29458 = state_29412__$1;
(statearr_29434_29458[(2)] = inst_29394);

(statearr_29434_29458[(1)] = (5));


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
});})(c__21859__auto___29443,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21797__auto__,c__21859__auto___29443,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21798__auto__ = null;
var cljs$core$async$state_machine__21798__auto____0 = (function (){
var statearr_29438 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29438[(0)] = cljs$core$async$state_machine__21798__auto__);

(statearr_29438[(1)] = (1));

return statearr_29438;
});
var cljs$core$async$state_machine__21798__auto____1 = (function (state_29412){
while(true){
var ret_value__21799__auto__ = (function (){try{while(true){
var result__21800__auto__ = switch__21797__auto__.call(null,state_29412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21800__auto__;
}
break;
}
}catch (e29439){if((e29439 instanceof Object)){
var ex__21801__auto__ = e29439;
var statearr_29440_29459 = state_29412;
(statearr_29440_29459[(5)] = ex__21801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29460 = state_29412;
state_29412 = G__29460;
continue;
} else {
return ret_value__21799__auto__;
}
break;
}
});
cljs$core$async$state_machine__21798__auto__ = function(state_29412){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21798__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21798__auto____1.call(this,state_29412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21798__auto____0;
cljs$core$async$state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21798__auto____1;
return cljs$core$async$state_machine__21798__auto__;
})()
;})(switch__21797__auto__,c__21859__auto___29443,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21861__auto__ = (function (){var statearr_29441 = f__21860__auto__.call(null);
(statearr_29441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21859__auto___29443);

return statearr_29441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21861__auto__);
});})(c__21859__auto___29443,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__29463 = arguments.length;
switch (G__29463) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21859__auto___29518 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21859__auto___29518,out){
return (function (){
var f__21860__auto__ = (function (){var switch__21797__auto__ = ((function (c__21859__auto___29518,out){
return (function (state_29493){
var state_val_29494 = (state_29493[(1)]);
if((state_val_29494 === (7))){
var inst_29473 = (state_29493[(7)]);
var inst_29472 = (state_29493[(8)]);
var inst_29472__$1 = (state_29493[(2)]);
var inst_29473__$1 = cljs.core.nth.call(null,inst_29472__$1,(0),null);
var inst_29474 = cljs.core.nth.call(null,inst_29472__$1,(1),null);
var inst_29475 = (inst_29473__$1 == null);
var state_29493__$1 = (function (){var statearr_29495 = state_29493;
(statearr_29495[(9)] = inst_29474);

(statearr_29495[(7)] = inst_29473__$1);

(statearr_29495[(8)] = inst_29472__$1);

return statearr_29495;
})();
if(cljs.core.truth_(inst_29475)){
var statearr_29496_29519 = state_29493__$1;
(statearr_29496_29519[(1)] = (8));

} else {
var statearr_29497_29520 = state_29493__$1;
(statearr_29497_29520[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (1))){
var inst_29464 = cljs.core.vec.call(null,chs);
var inst_29465 = inst_29464;
var state_29493__$1 = (function (){var statearr_29498 = state_29493;
(statearr_29498[(10)] = inst_29465);

return statearr_29498;
})();
var statearr_29499_29521 = state_29493__$1;
(statearr_29499_29521[(2)] = null);

(statearr_29499_29521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (4))){
var inst_29465 = (state_29493[(10)]);
var state_29493__$1 = state_29493;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29493__$1,(7),inst_29465);
} else {
if((state_val_29494 === (6))){
var inst_29489 = (state_29493[(2)]);
var state_29493__$1 = state_29493;
var statearr_29500_29522 = state_29493__$1;
(statearr_29500_29522[(2)] = inst_29489);

(statearr_29500_29522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (3))){
var inst_29491 = (state_29493[(2)]);
var state_29493__$1 = state_29493;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29493__$1,inst_29491);
} else {
if((state_val_29494 === (2))){
var inst_29465 = (state_29493[(10)]);
var inst_29467 = cljs.core.count.call(null,inst_29465);
var inst_29468 = (inst_29467 > (0));
var state_29493__$1 = state_29493;
if(cljs.core.truth_(inst_29468)){
var statearr_29502_29523 = state_29493__$1;
(statearr_29502_29523[(1)] = (4));

} else {
var statearr_29503_29524 = state_29493__$1;
(statearr_29503_29524[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (11))){
var inst_29465 = (state_29493[(10)]);
var inst_29482 = (state_29493[(2)]);
var tmp29501 = inst_29465;
var inst_29465__$1 = tmp29501;
var state_29493__$1 = (function (){var statearr_29504 = state_29493;
(statearr_29504[(10)] = inst_29465__$1);

(statearr_29504[(11)] = inst_29482);

return statearr_29504;
})();
var statearr_29505_29525 = state_29493__$1;
(statearr_29505_29525[(2)] = null);

(statearr_29505_29525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (9))){
var inst_29473 = (state_29493[(7)]);
var state_29493__$1 = state_29493;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29493__$1,(11),out,inst_29473);
} else {
if((state_val_29494 === (5))){
var inst_29487 = cljs.core.async.close_BANG_.call(null,out);
var state_29493__$1 = state_29493;
var statearr_29506_29526 = state_29493__$1;
(statearr_29506_29526[(2)] = inst_29487);

(statearr_29506_29526[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (10))){
var inst_29485 = (state_29493[(2)]);
var state_29493__$1 = state_29493;
var statearr_29507_29527 = state_29493__$1;
(statearr_29507_29527[(2)] = inst_29485);

(statearr_29507_29527[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29494 === (8))){
var inst_29465 = (state_29493[(10)]);
var inst_29474 = (state_29493[(9)]);
var inst_29473 = (state_29493[(7)]);
var inst_29472 = (state_29493[(8)]);
var inst_29477 = (function (){var cs = inst_29465;
var vec__29470 = inst_29472;
var v = inst_29473;
var c = inst_29474;
return ((function (cs,vec__29470,v,c,inst_29465,inst_29474,inst_29473,inst_29472,state_val_29494,c__21859__auto___29518,out){
return (function (p1__29461_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29461_SHARP_);
});
;})(cs,vec__29470,v,c,inst_29465,inst_29474,inst_29473,inst_29472,state_val_29494,c__21859__auto___29518,out))
})();
var inst_29478 = cljs.core.filterv.call(null,inst_29477,inst_29465);
var inst_29465__$1 = inst_29478;
var state_29493__$1 = (function (){var statearr_29508 = state_29493;
(statearr_29508[(10)] = inst_29465__$1);

return statearr_29508;
})();
var statearr_29509_29528 = state_29493__$1;
(statearr_29509_29528[(2)] = null);

(statearr_29509_29528[(1)] = (2));


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
});})(c__21859__auto___29518,out))
;
return ((function (switch__21797__auto__,c__21859__auto___29518,out){
return (function() {
var cljs$core$async$state_machine__21798__auto__ = null;
var cljs$core$async$state_machine__21798__auto____0 = (function (){
var statearr_29513 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29513[(0)] = cljs$core$async$state_machine__21798__auto__);

(statearr_29513[(1)] = (1));

return statearr_29513;
});
var cljs$core$async$state_machine__21798__auto____1 = (function (state_29493){
while(true){
var ret_value__21799__auto__ = (function (){try{while(true){
var result__21800__auto__ = switch__21797__auto__.call(null,state_29493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21800__auto__;
}
break;
}
}catch (e29514){if((e29514 instanceof Object)){
var ex__21801__auto__ = e29514;
var statearr_29515_29529 = state_29493;
(statearr_29515_29529[(5)] = ex__21801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29530 = state_29493;
state_29493 = G__29530;
continue;
} else {
return ret_value__21799__auto__;
}
break;
}
});
cljs$core$async$state_machine__21798__auto__ = function(state_29493){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21798__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21798__auto____1.call(this,state_29493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21798__auto____0;
cljs$core$async$state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21798__auto____1;
return cljs$core$async$state_machine__21798__auto__;
})()
;})(switch__21797__auto__,c__21859__auto___29518,out))
})();
var state__21861__auto__ = (function (){var statearr_29516 = f__21860__auto__.call(null);
(statearr_29516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21859__auto___29518);

return statearr_29516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21861__auto__);
});})(c__21859__auto___29518,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__29532 = arguments.length;
switch (G__29532) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21859__auto___29580 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21859__auto___29580,out){
return (function (){
var f__21860__auto__ = (function (){var switch__21797__auto__ = ((function (c__21859__auto___29580,out){
return (function (state_29556){
var state_val_29557 = (state_29556[(1)]);
if((state_val_29557 === (7))){
var inst_29538 = (state_29556[(7)]);
var inst_29538__$1 = (state_29556[(2)]);
var inst_29539 = (inst_29538__$1 == null);
var inst_29540 = cljs.core.not.call(null,inst_29539);
var state_29556__$1 = (function (){var statearr_29558 = state_29556;
(statearr_29558[(7)] = inst_29538__$1);

return statearr_29558;
})();
if(inst_29540){
var statearr_29559_29581 = state_29556__$1;
(statearr_29559_29581[(1)] = (8));

} else {
var statearr_29560_29582 = state_29556__$1;
(statearr_29560_29582[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29557 === (1))){
var inst_29533 = (0);
var state_29556__$1 = (function (){var statearr_29561 = state_29556;
(statearr_29561[(8)] = inst_29533);

return statearr_29561;
})();
var statearr_29562_29583 = state_29556__$1;
(statearr_29562_29583[(2)] = null);

(statearr_29562_29583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29557 === (4))){
var state_29556__$1 = state_29556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29556__$1,(7),ch);
} else {
if((state_val_29557 === (6))){
var inst_29551 = (state_29556[(2)]);
var state_29556__$1 = state_29556;
var statearr_29563_29584 = state_29556__$1;
(statearr_29563_29584[(2)] = inst_29551);

(statearr_29563_29584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29557 === (3))){
var inst_29553 = (state_29556[(2)]);
var inst_29554 = cljs.core.async.close_BANG_.call(null,out);
var state_29556__$1 = (function (){var statearr_29564 = state_29556;
(statearr_29564[(9)] = inst_29553);

return statearr_29564;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29556__$1,inst_29554);
} else {
if((state_val_29557 === (2))){
var inst_29533 = (state_29556[(8)]);
var inst_29535 = (inst_29533 < n);
var state_29556__$1 = state_29556;
if(cljs.core.truth_(inst_29535)){
var statearr_29565_29585 = state_29556__$1;
(statearr_29565_29585[(1)] = (4));

} else {
var statearr_29566_29586 = state_29556__$1;
(statearr_29566_29586[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29557 === (11))){
var inst_29533 = (state_29556[(8)]);
var inst_29543 = (state_29556[(2)]);
var inst_29544 = (inst_29533 + (1));
var inst_29533__$1 = inst_29544;
var state_29556__$1 = (function (){var statearr_29567 = state_29556;
(statearr_29567[(8)] = inst_29533__$1);

(statearr_29567[(10)] = inst_29543);

return statearr_29567;
})();
var statearr_29568_29587 = state_29556__$1;
(statearr_29568_29587[(2)] = null);

(statearr_29568_29587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29557 === (9))){
var state_29556__$1 = state_29556;
var statearr_29569_29588 = state_29556__$1;
(statearr_29569_29588[(2)] = null);

(statearr_29569_29588[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29557 === (5))){
var state_29556__$1 = state_29556;
var statearr_29570_29589 = state_29556__$1;
(statearr_29570_29589[(2)] = null);

(statearr_29570_29589[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29557 === (10))){
var inst_29548 = (state_29556[(2)]);
var state_29556__$1 = state_29556;
var statearr_29571_29590 = state_29556__$1;
(statearr_29571_29590[(2)] = inst_29548);

(statearr_29571_29590[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29557 === (8))){
var inst_29538 = (state_29556[(7)]);
var state_29556__$1 = state_29556;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29556__$1,(11),out,inst_29538);
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
});})(c__21859__auto___29580,out))
;
return ((function (switch__21797__auto__,c__21859__auto___29580,out){
return (function() {
var cljs$core$async$state_machine__21798__auto__ = null;
var cljs$core$async$state_machine__21798__auto____0 = (function (){
var statearr_29575 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29575[(0)] = cljs$core$async$state_machine__21798__auto__);

(statearr_29575[(1)] = (1));

return statearr_29575;
});
var cljs$core$async$state_machine__21798__auto____1 = (function (state_29556){
while(true){
var ret_value__21799__auto__ = (function (){try{while(true){
var result__21800__auto__ = switch__21797__auto__.call(null,state_29556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21800__auto__;
}
break;
}
}catch (e29576){if((e29576 instanceof Object)){
var ex__21801__auto__ = e29576;
var statearr_29577_29591 = state_29556;
(statearr_29577_29591[(5)] = ex__21801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29576;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29592 = state_29556;
state_29556 = G__29592;
continue;
} else {
return ret_value__21799__auto__;
}
break;
}
});
cljs$core$async$state_machine__21798__auto__ = function(state_29556){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21798__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21798__auto____1.call(this,state_29556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21798__auto____0;
cljs$core$async$state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21798__auto____1;
return cljs$core$async$state_machine__21798__auto__;
})()
;})(switch__21797__auto__,c__21859__auto___29580,out))
})();
var state__21861__auto__ = (function (){var statearr_29578 = f__21860__auto__.call(null);
(statearr_29578[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21859__auto___29580);

return statearr_29578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21861__auto__);
});})(c__21859__auto___29580,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t29600 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29600 = (function (map_LT_,f,ch,meta29601){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29601 = meta29601;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29602,meta29601__$1){
var self__ = this;
var _29602__$1 = this;
return (new cljs.core.async.t29600(self__.map_LT_,self__.f,self__.ch,meta29601__$1));
});

cljs.core.async.t29600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29602){
var self__ = this;
var _29602__$1 = this;
return self__.meta29601;
});

cljs.core.async.t29600.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29600.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29600.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29600.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29600.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t29603 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29603 = (function (map_LT_,f,ch,meta29601,_,fn1,meta29604){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29601 = meta29601;
this._ = _;
this.fn1 = fn1;
this.meta29604 = meta29604;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29605,meta29604__$1){
var self__ = this;
var _29605__$1 = this;
return (new cljs.core.async.t29603(self__.map_LT_,self__.f,self__.ch,self__.meta29601,self__._,self__.fn1,meta29604__$1));
});})(___$1))
;

cljs.core.async.t29603.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29605){
var self__ = this;
var _29605__$1 = this;
return self__.meta29604;
});})(___$1))
;

cljs.core.async.t29603.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29603.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t29603.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29593_SHARP_){
return f1.call(null,(((p1__29593_SHARP_ == null))?null:self__.f.call(null,p1__29593_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t29603.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29601","meta29601",-1505334364,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29604","meta29604",553503717,null)], null);
});})(___$1))
;

cljs.core.async.t29603.cljs$lang$type = true;

cljs.core.async.t29603.cljs$lang$ctorStr = "cljs.core.async/t29603";

cljs.core.async.t29603.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18666__auto__,writer__18667__auto__,opt__18668__auto__){
return cljs.core._write.call(null,writer__18667__auto__,"cljs.core.async/t29603");
});})(___$1))
;

cljs.core.async.__GT_t29603 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t29603(map_LT___$1,f__$1,ch__$1,meta29601__$1,___$2,fn1__$1,meta29604){
return (new cljs.core.async.t29603(map_LT___$1,f__$1,ch__$1,meta29601__$1,___$2,fn1__$1,meta29604));
});})(___$1))
;

}

return (new cljs.core.async.t29603(self__.map_LT_,self__.f,self__.ch,self__.meta29601,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18075__auto__ = ret;
if(cljs.core.truth_(and__18075__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18075__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t29600.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29600.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t29600.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29601","meta29601",-1505334364,null)], null);
});

cljs.core.async.t29600.cljs$lang$type = true;

cljs.core.async.t29600.cljs$lang$ctorStr = "cljs.core.async/t29600";

cljs.core.async.t29600.cljs$lang$ctorPrWriter = (function (this__18666__auto__,writer__18667__auto__,opt__18668__auto__){
return cljs.core._write.call(null,writer__18667__auto__,"cljs.core.async/t29600");
});

cljs.core.async.__GT_t29600 = (function cljs$core$async$map_LT__$___GT_t29600(map_LT___$1,f__$1,ch__$1,meta29601){
return (new cljs.core.async.t29600(map_LT___$1,f__$1,ch__$1,meta29601));
});

}

return (new cljs.core.async.t29600(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t29609 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29609 = (function (map_GT_,f,ch,meta29610){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29610 = meta29610;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29611,meta29610__$1){
var self__ = this;
var _29611__$1 = this;
return (new cljs.core.async.t29609(self__.map_GT_,self__.f,self__.ch,meta29610__$1));
});

cljs.core.async.t29609.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29611){
var self__ = this;
var _29611__$1 = this;
return self__.meta29610;
});

cljs.core.async.t29609.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29609.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29609.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29609.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t29609.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29609.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t29609.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29610","meta29610",770183168,null)], null);
});

cljs.core.async.t29609.cljs$lang$type = true;

cljs.core.async.t29609.cljs$lang$ctorStr = "cljs.core.async/t29609";

cljs.core.async.t29609.cljs$lang$ctorPrWriter = (function (this__18666__auto__,writer__18667__auto__,opt__18668__auto__){
return cljs.core._write.call(null,writer__18667__auto__,"cljs.core.async/t29609");
});

cljs.core.async.__GT_t29609 = (function cljs$core$async$map_GT__$___GT_t29609(map_GT___$1,f__$1,ch__$1,meta29610){
return (new cljs.core.async.t29609(map_GT___$1,f__$1,ch__$1,meta29610));
});

}

return (new cljs.core.async.t29609(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t29615 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29615 = (function (filter_GT_,p,ch,meta29616){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29616 = meta29616;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29617,meta29616__$1){
var self__ = this;
var _29617__$1 = this;
return (new cljs.core.async.t29615(self__.filter_GT_,self__.p,self__.ch,meta29616__$1));
});

cljs.core.async.t29615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29617){
var self__ = this;
var _29617__$1 = this;
return self__.meta29616;
});

cljs.core.async.t29615.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29615.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29615.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29615.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29615.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t29615.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29615.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t29615.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29616","meta29616",752542480,null)], null);
});

cljs.core.async.t29615.cljs$lang$type = true;

cljs.core.async.t29615.cljs$lang$ctorStr = "cljs.core.async/t29615";

cljs.core.async.t29615.cljs$lang$ctorPrWriter = (function (this__18666__auto__,writer__18667__auto__,opt__18668__auto__){
return cljs.core._write.call(null,writer__18667__auto__,"cljs.core.async/t29615");
});

cljs.core.async.__GT_t29615 = (function cljs$core$async$filter_GT__$___GT_t29615(filter_GT___$1,p__$1,ch__$1,meta29616){
return (new cljs.core.async.t29615(filter_GT___$1,p__$1,ch__$1,meta29616));
});

}

return (new cljs.core.async.t29615(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__29619 = arguments.length;
switch (G__29619) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21859__auto___29662 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21859__auto___29662,out){
return (function (){
var f__21860__auto__ = (function (){var switch__21797__auto__ = ((function (c__21859__auto___29662,out){
return (function (state_29640){
var state_val_29641 = (state_29640[(1)]);
if((state_val_29641 === (7))){
var inst_29636 = (state_29640[(2)]);
var state_29640__$1 = state_29640;
var statearr_29642_29663 = state_29640__$1;
(statearr_29642_29663[(2)] = inst_29636);

(statearr_29642_29663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (1))){
var state_29640__$1 = state_29640;
var statearr_29643_29664 = state_29640__$1;
(statearr_29643_29664[(2)] = null);

(statearr_29643_29664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (4))){
var inst_29622 = (state_29640[(7)]);
var inst_29622__$1 = (state_29640[(2)]);
var inst_29623 = (inst_29622__$1 == null);
var state_29640__$1 = (function (){var statearr_29644 = state_29640;
(statearr_29644[(7)] = inst_29622__$1);

return statearr_29644;
})();
if(cljs.core.truth_(inst_29623)){
var statearr_29645_29665 = state_29640__$1;
(statearr_29645_29665[(1)] = (5));

} else {
var statearr_29646_29666 = state_29640__$1;
(statearr_29646_29666[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (6))){
var inst_29622 = (state_29640[(7)]);
var inst_29627 = p.call(null,inst_29622);
var state_29640__$1 = state_29640;
if(cljs.core.truth_(inst_29627)){
var statearr_29647_29667 = state_29640__$1;
(statearr_29647_29667[(1)] = (8));

} else {
var statearr_29648_29668 = state_29640__$1;
(statearr_29648_29668[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (3))){
var inst_29638 = (state_29640[(2)]);
var state_29640__$1 = state_29640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29640__$1,inst_29638);
} else {
if((state_val_29641 === (2))){
var state_29640__$1 = state_29640;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29640__$1,(4),ch);
} else {
if((state_val_29641 === (11))){
var inst_29630 = (state_29640[(2)]);
var state_29640__$1 = state_29640;
var statearr_29649_29669 = state_29640__$1;
(statearr_29649_29669[(2)] = inst_29630);

(statearr_29649_29669[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (9))){
var state_29640__$1 = state_29640;
var statearr_29650_29670 = state_29640__$1;
(statearr_29650_29670[(2)] = null);

(statearr_29650_29670[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (5))){
var inst_29625 = cljs.core.async.close_BANG_.call(null,out);
var state_29640__$1 = state_29640;
var statearr_29651_29671 = state_29640__$1;
(statearr_29651_29671[(2)] = inst_29625);

(statearr_29651_29671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (10))){
var inst_29633 = (state_29640[(2)]);
var state_29640__$1 = (function (){var statearr_29652 = state_29640;
(statearr_29652[(8)] = inst_29633);

return statearr_29652;
})();
var statearr_29653_29672 = state_29640__$1;
(statearr_29653_29672[(2)] = null);

(statearr_29653_29672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29641 === (8))){
var inst_29622 = (state_29640[(7)]);
var state_29640__$1 = state_29640;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29640__$1,(11),out,inst_29622);
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
});})(c__21859__auto___29662,out))
;
return ((function (switch__21797__auto__,c__21859__auto___29662,out){
return (function() {
var cljs$core$async$state_machine__21798__auto__ = null;
var cljs$core$async$state_machine__21798__auto____0 = (function (){
var statearr_29657 = [null,null,null,null,null,null,null,null,null];
(statearr_29657[(0)] = cljs$core$async$state_machine__21798__auto__);

(statearr_29657[(1)] = (1));

return statearr_29657;
});
var cljs$core$async$state_machine__21798__auto____1 = (function (state_29640){
while(true){
var ret_value__21799__auto__ = (function (){try{while(true){
var result__21800__auto__ = switch__21797__auto__.call(null,state_29640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21800__auto__;
}
break;
}
}catch (e29658){if((e29658 instanceof Object)){
var ex__21801__auto__ = e29658;
var statearr_29659_29673 = state_29640;
(statearr_29659_29673[(5)] = ex__21801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29674 = state_29640;
state_29640 = G__29674;
continue;
} else {
return ret_value__21799__auto__;
}
break;
}
});
cljs$core$async$state_machine__21798__auto__ = function(state_29640){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21798__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21798__auto____1.call(this,state_29640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21798__auto____0;
cljs$core$async$state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21798__auto____1;
return cljs$core$async$state_machine__21798__auto__;
})()
;})(switch__21797__auto__,c__21859__auto___29662,out))
})();
var state__21861__auto__ = (function (){var statearr_29660 = f__21860__auto__.call(null);
(statearr_29660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21859__auto___29662);

return statearr_29660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21861__auto__);
});})(c__21859__auto___29662,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__29676 = arguments.length;
switch (G__29676) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21859__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21859__auto__){
return (function (){
var f__21860__auto__ = (function (){var switch__21797__auto__ = ((function (c__21859__auto__){
return (function (state_29843){
var state_val_29844 = (state_29843[(1)]);
if((state_val_29844 === (7))){
var inst_29839 = (state_29843[(2)]);
var state_29843__$1 = state_29843;
var statearr_29845_29886 = state_29843__$1;
(statearr_29845_29886[(2)] = inst_29839);

(statearr_29845_29886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (20))){
var inst_29809 = (state_29843[(7)]);
var inst_29820 = (state_29843[(2)]);
var inst_29821 = cljs.core.next.call(null,inst_29809);
var inst_29795 = inst_29821;
var inst_29796 = null;
var inst_29797 = (0);
var inst_29798 = (0);
var state_29843__$1 = (function (){var statearr_29846 = state_29843;
(statearr_29846[(8)] = inst_29797);

(statearr_29846[(9)] = inst_29796);

(statearr_29846[(10)] = inst_29820);

(statearr_29846[(11)] = inst_29795);

(statearr_29846[(12)] = inst_29798);

return statearr_29846;
})();
var statearr_29847_29887 = state_29843__$1;
(statearr_29847_29887[(2)] = null);

(statearr_29847_29887[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (1))){
var state_29843__$1 = state_29843;
var statearr_29848_29888 = state_29843__$1;
(statearr_29848_29888[(2)] = null);

(statearr_29848_29888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (4))){
var inst_29784 = (state_29843[(13)]);
var inst_29784__$1 = (state_29843[(2)]);
var inst_29785 = (inst_29784__$1 == null);
var state_29843__$1 = (function (){var statearr_29849 = state_29843;
(statearr_29849[(13)] = inst_29784__$1);

return statearr_29849;
})();
if(cljs.core.truth_(inst_29785)){
var statearr_29850_29889 = state_29843__$1;
(statearr_29850_29889[(1)] = (5));

} else {
var statearr_29851_29890 = state_29843__$1;
(statearr_29851_29890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (15))){
var state_29843__$1 = state_29843;
var statearr_29855_29891 = state_29843__$1;
(statearr_29855_29891[(2)] = null);

(statearr_29855_29891[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (21))){
var state_29843__$1 = state_29843;
var statearr_29856_29892 = state_29843__$1;
(statearr_29856_29892[(2)] = null);

(statearr_29856_29892[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (13))){
var inst_29797 = (state_29843[(8)]);
var inst_29796 = (state_29843[(9)]);
var inst_29795 = (state_29843[(11)]);
var inst_29798 = (state_29843[(12)]);
var inst_29805 = (state_29843[(2)]);
var inst_29806 = (inst_29798 + (1));
var tmp29852 = inst_29797;
var tmp29853 = inst_29796;
var tmp29854 = inst_29795;
var inst_29795__$1 = tmp29854;
var inst_29796__$1 = tmp29853;
var inst_29797__$1 = tmp29852;
var inst_29798__$1 = inst_29806;
var state_29843__$1 = (function (){var statearr_29857 = state_29843;
(statearr_29857[(14)] = inst_29805);

(statearr_29857[(8)] = inst_29797__$1);

(statearr_29857[(9)] = inst_29796__$1);

(statearr_29857[(11)] = inst_29795__$1);

(statearr_29857[(12)] = inst_29798__$1);

return statearr_29857;
})();
var statearr_29858_29893 = state_29843__$1;
(statearr_29858_29893[(2)] = null);

(statearr_29858_29893[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (22))){
var state_29843__$1 = state_29843;
var statearr_29859_29894 = state_29843__$1;
(statearr_29859_29894[(2)] = null);

(statearr_29859_29894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (6))){
var inst_29784 = (state_29843[(13)]);
var inst_29793 = f.call(null,inst_29784);
var inst_29794 = cljs.core.seq.call(null,inst_29793);
var inst_29795 = inst_29794;
var inst_29796 = null;
var inst_29797 = (0);
var inst_29798 = (0);
var state_29843__$1 = (function (){var statearr_29860 = state_29843;
(statearr_29860[(8)] = inst_29797);

(statearr_29860[(9)] = inst_29796);

(statearr_29860[(11)] = inst_29795);

(statearr_29860[(12)] = inst_29798);

return statearr_29860;
})();
var statearr_29861_29895 = state_29843__$1;
(statearr_29861_29895[(2)] = null);

(statearr_29861_29895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (17))){
var inst_29809 = (state_29843[(7)]);
var inst_29813 = cljs.core.chunk_first.call(null,inst_29809);
var inst_29814 = cljs.core.chunk_rest.call(null,inst_29809);
var inst_29815 = cljs.core.count.call(null,inst_29813);
var inst_29795 = inst_29814;
var inst_29796 = inst_29813;
var inst_29797 = inst_29815;
var inst_29798 = (0);
var state_29843__$1 = (function (){var statearr_29862 = state_29843;
(statearr_29862[(8)] = inst_29797);

(statearr_29862[(9)] = inst_29796);

(statearr_29862[(11)] = inst_29795);

(statearr_29862[(12)] = inst_29798);

return statearr_29862;
})();
var statearr_29863_29896 = state_29843__$1;
(statearr_29863_29896[(2)] = null);

(statearr_29863_29896[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (3))){
var inst_29841 = (state_29843[(2)]);
var state_29843__$1 = state_29843;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29843__$1,inst_29841);
} else {
if((state_val_29844 === (12))){
var inst_29829 = (state_29843[(2)]);
var state_29843__$1 = state_29843;
var statearr_29864_29897 = state_29843__$1;
(statearr_29864_29897[(2)] = inst_29829);

(statearr_29864_29897[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (2))){
var state_29843__$1 = state_29843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29843__$1,(4),in$);
} else {
if((state_val_29844 === (23))){
var inst_29837 = (state_29843[(2)]);
var state_29843__$1 = state_29843;
var statearr_29865_29898 = state_29843__$1;
(statearr_29865_29898[(2)] = inst_29837);

(statearr_29865_29898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (19))){
var inst_29824 = (state_29843[(2)]);
var state_29843__$1 = state_29843;
var statearr_29866_29899 = state_29843__$1;
(statearr_29866_29899[(2)] = inst_29824);

(statearr_29866_29899[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (11))){
var inst_29809 = (state_29843[(7)]);
var inst_29795 = (state_29843[(11)]);
var inst_29809__$1 = cljs.core.seq.call(null,inst_29795);
var state_29843__$1 = (function (){var statearr_29867 = state_29843;
(statearr_29867[(7)] = inst_29809__$1);

return statearr_29867;
})();
if(inst_29809__$1){
var statearr_29868_29900 = state_29843__$1;
(statearr_29868_29900[(1)] = (14));

} else {
var statearr_29869_29901 = state_29843__$1;
(statearr_29869_29901[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (9))){
var inst_29831 = (state_29843[(2)]);
var inst_29832 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29843__$1 = (function (){var statearr_29870 = state_29843;
(statearr_29870[(15)] = inst_29831);

return statearr_29870;
})();
if(cljs.core.truth_(inst_29832)){
var statearr_29871_29902 = state_29843__$1;
(statearr_29871_29902[(1)] = (21));

} else {
var statearr_29872_29903 = state_29843__$1;
(statearr_29872_29903[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (5))){
var inst_29787 = cljs.core.async.close_BANG_.call(null,out);
var state_29843__$1 = state_29843;
var statearr_29873_29904 = state_29843__$1;
(statearr_29873_29904[(2)] = inst_29787);

(statearr_29873_29904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (14))){
var inst_29809 = (state_29843[(7)]);
var inst_29811 = cljs.core.chunked_seq_QMARK_.call(null,inst_29809);
var state_29843__$1 = state_29843;
if(inst_29811){
var statearr_29874_29905 = state_29843__$1;
(statearr_29874_29905[(1)] = (17));

} else {
var statearr_29875_29906 = state_29843__$1;
(statearr_29875_29906[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (16))){
var inst_29827 = (state_29843[(2)]);
var state_29843__$1 = state_29843;
var statearr_29876_29907 = state_29843__$1;
(statearr_29876_29907[(2)] = inst_29827);

(statearr_29876_29907[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29844 === (10))){
var inst_29796 = (state_29843[(9)]);
var inst_29798 = (state_29843[(12)]);
var inst_29803 = cljs.core._nth.call(null,inst_29796,inst_29798);
var state_29843__$1 = state_29843;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29843__$1,(13),out,inst_29803);
} else {
if((state_val_29844 === (18))){
var inst_29809 = (state_29843[(7)]);
var inst_29818 = cljs.core.first.call(null,inst_29809);
var state_29843__$1 = state_29843;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29843__$1,(20),out,inst_29818);
} else {
if((state_val_29844 === (8))){
var inst_29797 = (state_29843[(8)]);
var inst_29798 = (state_29843[(12)]);
var inst_29800 = (inst_29798 < inst_29797);
var inst_29801 = inst_29800;
var state_29843__$1 = state_29843;
if(cljs.core.truth_(inst_29801)){
var statearr_29877_29908 = state_29843__$1;
(statearr_29877_29908[(1)] = (10));

} else {
var statearr_29878_29909 = state_29843__$1;
(statearr_29878_29909[(1)] = (11));

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
});})(c__21859__auto__))
;
return ((function (switch__21797__auto__,c__21859__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21798__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21798__auto____0 = (function (){
var statearr_29882 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29882[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21798__auto__);

(statearr_29882[(1)] = (1));

return statearr_29882;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21798__auto____1 = (function (state_29843){
while(true){
var ret_value__21799__auto__ = (function (){try{while(true){
var result__21800__auto__ = switch__21797__auto__.call(null,state_29843);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21800__auto__;
}
break;
}
}catch (e29883){if((e29883 instanceof Object)){
var ex__21801__auto__ = e29883;
var statearr_29884_29910 = state_29843;
(statearr_29884_29910[(5)] = ex__21801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29911 = state_29843;
state_29843 = G__29911;
continue;
} else {
return ret_value__21799__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21798__auto__ = function(state_29843){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21798__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21798__auto____1.call(this,state_29843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21798__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21798__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21798__auto__;
})()
;})(switch__21797__auto__,c__21859__auto__))
})();
var state__21861__auto__ = (function (){var statearr_29885 = f__21860__auto__.call(null);
(statearr_29885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21859__auto__);

return statearr_29885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21861__auto__);
});})(c__21859__auto__))
);

return c__21859__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__29913 = arguments.length;
switch (G__29913) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__29916 = arguments.length;
switch (G__29916) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__29919 = arguments.length;
switch (G__29919) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21859__auto___29969 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21859__auto___29969,out){
return (function (){
var f__21860__auto__ = (function (){var switch__21797__auto__ = ((function (c__21859__auto___29969,out){
return (function (state_29943){
var state_val_29944 = (state_29943[(1)]);
if((state_val_29944 === (7))){
var inst_29938 = (state_29943[(2)]);
var state_29943__$1 = state_29943;
var statearr_29945_29970 = state_29943__$1;
(statearr_29945_29970[(2)] = inst_29938);

(statearr_29945_29970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29944 === (1))){
var inst_29920 = null;
var state_29943__$1 = (function (){var statearr_29946 = state_29943;
(statearr_29946[(7)] = inst_29920);

return statearr_29946;
})();
var statearr_29947_29971 = state_29943__$1;
(statearr_29947_29971[(2)] = null);

(statearr_29947_29971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29944 === (4))){
var inst_29923 = (state_29943[(8)]);
var inst_29923__$1 = (state_29943[(2)]);
var inst_29924 = (inst_29923__$1 == null);
var inst_29925 = cljs.core.not.call(null,inst_29924);
var state_29943__$1 = (function (){var statearr_29948 = state_29943;
(statearr_29948[(8)] = inst_29923__$1);

return statearr_29948;
})();
if(inst_29925){
var statearr_29949_29972 = state_29943__$1;
(statearr_29949_29972[(1)] = (5));

} else {
var statearr_29950_29973 = state_29943__$1;
(statearr_29950_29973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29944 === (6))){
var state_29943__$1 = state_29943;
var statearr_29951_29974 = state_29943__$1;
(statearr_29951_29974[(2)] = null);

(statearr_29951_29974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29944 === (3))){
var inst_29940 = (state_29943[(2)]);
var inst_29941 = cljs.core.async.close_BANG_.call(null,out);
var state_29943__$1 = (function (){var statearr_29952 = state_29943;
(statearr_29952[(9)] = inst_29940);

return statearr_29952;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29943__$1,inst_29941);
} else {
if((state_val_29944 === (2))){
var state_29943__$1 = state_29943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29943__$1,(4),ch);
} else {
if((state_val_29944 === (11))){
var inst_29923 = (state_29943[(8)]);
var inst_29932 = (state_29943[(2)]);
var inst_29920 = inst_29923;
var state_29943__$1 = (function (){var statearr_29953 = state_29943;
(statearr_29953[(7)] = inst_29920);

(statearr_29953[(10)] = inst_29932);

return statearr_29953;
})();
var statearr_29954_29975 = state_29943__$1;
(statearr_29954_29975[(2)] = null);

(statearr_29954_29975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29944 === (9))){
var inst_29923 = (state_29943[(8)]);
var state_29943__$1 = state_29943;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29943__$1,(11),out,inst_29923);
} else {
if((state_val_29944 === (5))){
var inst_29920 = (state_29943[(7)]);
var inst_29923 = (state_29943[(8)]);
var inst_29927 = cljs.core._EQ_.call(null,inst_29923,inst_29920);
var state_29943__$1 = state_29943;
if(inst_29927){
var statearr_29956_29976 = state_29943__$1;
(statearr_29956_29976[(1)] = (8));

} else {
var statearr_29957_29977 = state_29943__$1;
(statearr_29957_29977[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29944 === (10))){
var inst_29935 = (state_29943[(2)]);
var state_29943__$1 = state_29943;
var statearr_29958_29978 = state_29943__$1;
(statearr_29958_29978[(2)] = inst_29935);

(statearr_29958_29978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29944 === (8))){
var inst_29920 = (state_29943[(7)]);
var tmp29955 = inst_29920;
var inst_29920__$1 = tmp29955;
var state_29943__$1 = (function (){var statearr_29959 = state_29943;
(statearr_29959[(7)] = inst_29920__$1);

return statearr_29959;
})();
var statearr_29960_29979 = state_29943__$1;
(statearr_29960_29979[(2)] = null);

(statearr_29960_29979[(1)] = (2));


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
});})(c__21859__auto___29969,out))
;
return ((function (switch__21797__auto__,c__21859__auto___29969,out){
return (function() {
var cljs$core$async$state_machine__21798__auto__ = null;
var cljs$core$async$state_machine__21798__auto____0 = (function (){
var statearr_29964 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29964[(0)] = cljs$core$async$state_machine__21798__auto__);

(statearr_29964[(1)] = (1));

return statearr_29964;
});
var cljs$core$async$state_machine__21798__auto____1 = (function (state_29943){
while(true){
var ret_value__21799__auto__ = (function (){try{while(true){
var result__21800__auto__ = switch__21797__auto__.call(null,state_29943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21800__auto__;
}
break;
}
}catch (e29965){if((e29965 instanceof Object)){
var ex__21801__auto__ = e29965;
var statearr_29966_29980 = state_29943;
(statearr_29966_29980[(5)] = ex__21801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29981 = state_29943;
state_29943 = G__29981;
continue;
} else {
return ret_value__21799__auto__;
}
break;
}
});
cljs$core$async$state_machine__21798__auto__ = function(state_29943){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21798__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21798__auto____1.call(this,state_29943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21798__auto____0;
cljs$core$async$state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21798__auto____1;
return cljs$core$async$state_machine__21798__auto__;
})()
;})(switch__21797__auto__,c__21859__auto___29969,out))
})();
var state__21861__auto__ = (function (){var statearr_29967 = f__21860__auto__.call(null);
(statearr_29967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21859__auto___29969);

return statearr_29967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21861__auto__);
});})(c__21859__auto___29969,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__29983 = arguments.length;
switch (G__29983) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21859__auto___30052 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21859__auto___30052,out){
return (function (){
var f__21860__auto__ = (function (){var switch__21797__auto__ = ((function (c__21859__auto___30052,out){
return (function (state_30021){
var state_val_30022 = (state_30021[(1)]);
if((state_val_30022 === (7))){
var inst_30017 = (state_30021[(2)]);
var state_30021__$1 = state_30021;
var statearr_30023_30053 = state_30021__$1;
(statearr_30023_30053[(2)] = inst_30017);

(statearr_30023_30053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (1))){
var inst_29984 = (new Array(n));
var inst_29985 = inst_29984;
var inst_29986 = (0);
var state_30021__$1 = (function (){var statearr_30024 = state_30021;
(statearr_30024[(7)] = inst_29986);

(statearr_30024[(8)] = inst_29985);

return statearr_30024;
})();
var statearr_30025_30054 = state_30021__$1;
(statearr_30025_30054[(2)] = null);

(statearr_30025_30054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (4))){
var inst_29989 = (state_30021[(9)]);
var inst_29989__$1 = (state_30021[(2)]);
var inst_29990 = (inst_29989__$1 == null);
var inst_29991 = cljs.core.not.call(null,inst_29990);
var state_30021__$1 = (function (){var statearr_30026 = state_30021;
(statearr_30026[(9)] = inst_29989__$1);

return statearr_30026;
})();
if(inst_29991){
var statearr_30027_30055 = state_30021__$1;
(statearr_30027_30055[(1)] = (5));

} else {
var statearr_30028_30056 = state_30021__$1;
(statearr_30028_30056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (15))){
var inst_30011 = (state_30021[(2)]);
var state_30021__$1 = state_30021;
var statearr_30029_30057 = state_30021__$1;
(statearr_30029_30057[(2)] = inst_30011);

(statearr_30029_30057[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (13))){
var state_30021__$1 = state_30021;
var statearr_30030_30058 = state_30021__$1;
(statearr_30030_30058[(2)] = null);

(statearr_30030_30058[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (6))){
var inst_29986 = (state_30021[(7)]);
var inst_30007 = (inst_29986 > (0));
var state_30021__$1 = state_30021;
if(cljs.core.truth_(inst_30007)){
var statearr_30031_30059 = state_30021__$1;
(statearr_30031_30059[(1)] = (12));

} else {
var statearr_30032_30060 = state_30021__$1;
(statearr_30032_30060[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (3))){
var inst_30019 = (state_30021[(2)]);
var state_30021__$1 = state_30021;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30021__$1,inst_30019);
} else {
if((state_val_30022 === (12))){
var inst_29985 = (state_30021[(8)]);
var inst_30009 = cljs.core.vec.call(null,inst_29985);
var state_30021__$1 = state_30021;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30021__$1,(15),out,inst_30009);
} else {
if((state_val_30022 === (2))){
var state_30021__$1 = state_30021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30021__$1,(4),ch);
} else {
if((state_val_30022 === (11))){
var inst_30001 = (state_30021[(2)]);
var inst_30002 = (new Array(n));
var inst_29985 = inst_30002;
var inst_29986 = (0);
var state_30021__$1 = (function (){var statearr_30033 = state_30021;
(statearr_30033[(7)] = inst_29986);

(statearr_30033[(10)] = inst_30001);

(statearr_30033[(8)] = inst_29985);

return statearr_30033;
})();
var statearr_30034_30061 = state_30021__$1;
(statearr_30034_30061[(2)] = null);

(statearr_30034_30061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (9))){
var inst_29985 = (state_30021[(8)]);
var inst_29999 = cljs.core.vec.call(null,inst_29985);
var state_30021__$1 = state_30021;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30021__$1,(11),out,inst_29999);
} else {
if((state_val_30022 === (5))){
var inst_29994 = (state_30021[(11)]);
var inst_29989 = (state_30021[(9)]);
var inst_29986 = (state_30021[(7)]);
var inst_29985 = (state_30021[(8)]);
var inst_29993 = (inst_29985[inst_29986] = inst_29989);
var inst_29994__$1 = (inst_29986 + (1));
var inst_29995 = (inst_29994__$1 < n);
var state_30021__$1 = (function (){var statearr_30035 = state_30021;
(statearr_30035[(11)] = inst_29994__$1);

(statearr_30035[(12)] = inst_29993);

return statearr_30035;
})();
if(cljs.core.truth_(inst_29995)){
var statearr_30036_30062 = state_30021__$1;
(statearr_30036_30062[(1)] = (8));

} else {
var statearr_30037_30063 = state_30021__$1;
(statearr_30037_30063[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (14))){
var inst_30014 = (state_30021[(2)]);
var inst_30015 = cljs.core.async.close_BANG_.call(null,out);
var state_30021__$1 = (function (){var statearr_30039 = state_30021;
(statearr_30039[(13)] = inst_30014);

return statearr_30039;
})();
var statearr_30040_30064 = state_30021__$1;
(statearr_30040_30064[(2)] = inst_30015);

(statearr_30040_30064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (10))){
var inst_30005 = (state_30021[(2)]);
var state_30021__$1 = state_30021;
var statearr_30041_30065 = state_30021__$1;
(statearr_30041_30065[(2)] = inst_30005);

(statearr_30041_30065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30022 === (8))){
var inst_29994 = (state_30021[(11)]);
var inst_29985 = (state_30021[(8)]);
var tmp30038 = inst_29985;
var inst_29985__$1 = tmp30038;
var inst_29986 = inst_29994;
var state_30021__$1 = (function (){var statearr_30042 = state_30021;
(statearr_30042[(7)] = inst_29986);

(statearr_30042[(8)] = inst_29985__$1);

return statearr_30042;
})();
var statearr_30043_30066 = state_30021__$1;
(statearr_30043_30066[(2)] = null);

(statearr_30043_30066[(1)] = (2));


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
});})(c__21859__auto___30052,out))
;
return ((function (switch__21797__auto__,c__21859__auto___30052,out){
return (function() {
var cljs$core$async$state_machine__21798__auto__ = null;
var cljs$core$async$state_machine__21798__auto____0 = (function (){
var statearr_30047 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30047[(0)] = cljs$core$async$state_machine__21798__auto__);

(statearr_30047[(1)] = (1));

return statearr_30047;
});
var cljs$core$async$state_machine__21798__auto____1 = (function (state_30021){
while(true){
var ret_value__21799__auto__ = (function (){try{while(true){
var result__21800__auto__ = switch__21797__auto__.call(null,state_30021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21800__auto__;
}
break;
}
}catch (e30048){if((e30048 instanceof Object)){
var ex__21801__auto__ = e30048;
var statearr_30049_30067 = state_30021;
(statearr_30049_30067[(5)] = ex__21801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30068 = state_30021;
state_30021 = G__30068;
continue;
} else {
return ret_value__21799__auto__;
}
break;
}
});
cljs$core$async$state_machine__21798__auto__ = function(state_30021){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21798__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21798__auto____1.call(this,state_30021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21798__auto____0;
cljs$core$async$state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21798__auto____1;
return cljs$core$async$state_machine__21798__auto__;
})()
;})(switch__21797__auto__,c__21859__auto___30052,out))
})();
var state__21861__auto__ = (function (){var statearr_30050 = f__21860__auto__.call(null);
(statearr_30050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21859__auto___30052);

return statearr_30050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21861__auto__);
});})(c__21859__auto___30052,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__30070 = arguments.length;
switch (G__30070) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21859__auto___30143 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21859__auto___30143,out){
return (function (){
var f__21860__auto__ = (function (){var switch__21797__auto__ = ((function (c__21859__auto___30143,out){
return (function (state_30112){
var state_val_30113 = (state_30112[(1)]);
if((state_val_30113 === (7))){
var inst_30108 = (state_30112[(2)]);
var state_30112__$1 = state_30112;
var statearr_30114_30144 = state_30112__$1;
(statearr_30114_30144[(2)] = inst_30108);

(statearr_30114_30144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30113 === (1))){
var inst_30071 = [];
var inst_30072 = inst_30071;
var inst_30073 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30112__$1 = (function (){var statearr_30115 = state_30112;
(statearr_30115[(7)] = inst_30072);

(statearr_30115[(8)] = inst_30073);

return statearr_30115;
})();
var statearr_30116_30145 = state_30112__$1;
(statearr_30116_30145[(2)] = null);

(statearr_30116_30145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30113 === (4))){
var inst_30076 = (state_30112[(9)]);
var inst_30076__$1 = (state_30112[(2)]);
var inst_30077 = (inst_30076__$1 == null);
var inst_30078 = cljs.core.not.call(null,inst_30077);
var state_30112__$1 = (function (){var statearr_30117 = state_30112;
(statearr_30117[(9)] = inst_30076__$1);

return statearr_30117;
})();
if(inst_30078){
var statearr_30118_30146 = state_30112__$1;
(statearr_30118_30146[(1)] = (5));

} else {
var statearr_30119_30147 = state_30112__$1;
(statearr_30119_30147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30113 === (15))){
var inst_30102 = (state_30112[(2)]);
var state_30112__$1 = state_30112;
var statearr_30120_30148 = state_30112__$1;
(statearr_30120_30148[(2)] = inst_30102);

(statearr_30120_30148[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30113 === (13))){
var state_30112__$1 = state_30112;
var statearr_30121_30149 = state_30112__$1;
(statearr_30121_30149[(2)] = null);

(statearr_30121_30149[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30113 === (6))){
var inst_30072 = (state_30112[(7)]);
var inst_30097 = inst_30072.length;
var inst_30098 = (inst_30097 > (0));
var state_30112__$1 = state_30112;
if(cljs.core.truth_(inst_30098)){
var statearr_30122_30150 = state_30112__$1;
(statearr_30122_30150[(1)] = (12));

} else {
var statearr_30123_30151 = state_30112__$1;
(statearr_30123_30151[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30113 === (3))){
var inst_30110 = (state_30112[(2)]);
var state_30112__$1 = state_30112;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30112__$1,inst_30110);
} else {
if((state_val_30113 === (12))){
var inst_30072 = (state_30112[(7)]);
var inst_30100 = cljs.core.vec.call(null,inst_30072);
var state_30112__$1 = state_30112;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30112__$1,(15),out,inst_30100);
} else {
if((state_val_30113 === (2))){
var state_30112__$1 = state_30112;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30112__$1,(4),ch);
} else {
if((state_val_30113 === (11))){
var inst_30080 = (state_30112[(10)]);
var inst_30076 = (state_30112[(9)]);
var inst_30090 = (state_30112[(2)]);
var inst_30091 = [];
var inst_30092 = inst_30091.push(inst_30076);
var inst_30072 = inst_30091;
var inst_30073 = inst_30080;
var state_30112__$1 = (function (){var statearr_30124 = state_30112;
(statearr_30124[(11)] = inst_30090);

(statearr_30124[(7)] = inst_30072);

(statearr_30124[(8)] = inst_30073);

(statearr_30124[(12)] = inst_30092);

return statearr_30124;
})();
var statearr_30125_30152 = state_30112__$1;
(statearr_30125_30152[(2)] = null);

(statearr_30125_30152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30113 === (9))){
var inst_30072 = (state_30112[(7)]);
var inst_30088 = cljs.core.vec.call(null,inst_30072);
var state_30112__$1 = state_30112;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30112__$1,(11),out,inst_30088);
} else {
if((state_val_30113 === (5))){
var inst_30073 = (state_30112[(8)]);
var inst_30080 = (state_30112[(10)]);
var inst_30076 = (state_30112[(9)]);
var inst_30080__$1 = f.call(null,inst_30076);
var inst_30081 = cljs.core._EQ_.call(null,inst_30080__$1,inst_30073);
var inst_30082 = cljs.core.keyword_identical_QMARK_.call(null,inst_30073,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30083 = (inst_30081) || (inst_30082);
var state_30112__$1 = (function (){var statearr_30126 = state_30112;
(statearr_30126[(10)] = inst_30080__$1);

return statearr_30126;
})();
if(cljs.core.truth_(inst_30083)){
var statearr_30127_30153 = state_30112__$1;
(statearr_30127_30153[(1)] = (8));

} else {
var statearr_30128_30154 = state_30112__$1;
(statearr_30128_30154[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30113 === (14))){
var inst_30105 = (state_30112[(2)]);
var inst_30106 = cljs.core.async.close_BANG_.call(null,out);
var state_30112__$1 = (function (){var statearr_30130 = state_30112;
(statearr_30130[(13)] = inst_30105);

return statearr_30130;
})();
var statearr_30131_30155 = state_30112__$1;
(statearr_30131_30155[(2)] = inst_30106);

(statearr_30131_30155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30113 === (10))){
var inst_30095 = (state_30112[(2)]);
var state_30112__$1 = state_30112;
var statearr_30132_30156 = state_30112__$1;
(statearr_30132_30156[(2)] = inst_30095);

(statearr_30132_30156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30113 === (8))){
var inst_30072 = (state_30112[(7)]);
var inst_30080 = (state_30112[(10)]);
var inst_30076 = (state_30112[(9)]);
var inst_30085 = inst_30072.push(inst_30076);
var tmp30129 = inst_30072;
var inst_30072__$1 = tmp30129;
var inst_30073 = inst_30080;
var state_30112__$1 = (function (){var statearr_30133 = state_30112;
(statearr_30133[(14)] = inst_30085);

(statearr_30133[(7)] = inst_30072__$1);

(statearr_30133[(8)] = inst_30073);

return statearr_30133;
})();
var statearr_30134_30157 = state_30112__$1;
(statearr_30134_30157[(2)] = null);

(statearr_30134_30157[(1)] = (2));


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
});})(c__21859__auto___30143,out))
;
return ((function (switch__21797__auto__,c__21859__auto___30143,out){
return (function() {
var cljs$core$async$state_machine__21798__auto__ = null;
var cljs$core$async$state_machine__21798__auto____0 = (function (){
var statearr_30138 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30138[(0)] = cljs$core$async$state_machine__21798__auto__);

(statearr_30138[(1)] = (1));

return statearr_30138;
});
var cljs$core$async$state_machine__21798__auto____1 = (function (state_30112){
while(true){
var ret_value__21799__auto__ = (function (){try{while(true){
var result__21800__auto__ = switch__21797__auto__.call(null,state_30112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21800__auto__;
}
break;
}
}catch (e30139){if((e30139 instanceof Object)){
var ex__21801__auto__ = e30139;
var statearr_30140_30158 = state_30112;
(statearr_30140_30158[(5)] = ex__21801__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30159 = state_30112;
state_30112 = G__30159;
continue;
} else {
return ret_value__21799__auto__;
}
break;
}
});
cljs$core$async$state_machine__21798__auto__ = function(state_30112){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21798__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21798__auto____1.call(this,state_30112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21798__auto____0;
cljs$core$async$state_machine__21798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21798__auto____1;
return cljs$core$async$state_machine__21798__auto__;
})()
;})(switch__21797__auto__,c__21859__auto___30143,out))
})();
var state__21861__auto__ = (function (){var statearr_30141 = f__21860__auto__.call(null);
(statearr_30141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21859__auto___30143);

return statearr_30141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21861__auto__);
});})(c__21859__auto___30143,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map