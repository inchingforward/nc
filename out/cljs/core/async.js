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
if(typeof cljs.core.async.t27672 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27672 = (function (fn_handler,f,meta27673){
this.fn_handler = fn_handler;
this.f = f;
this.meta27673 = meta27673;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27674,meta27673__$1){
var self__ = this;
var _27674__$1 = this;
return (new cljs.core.async.t27672(self__.fn_handler,self__.f,meta27673__$1));
});

cljs.core.async.t27672.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27674){
var self__ = this;
var _27674__$1 = this;
return self__.meta27673;
});

cljs.core.async.t27672.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27672.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t27672.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t27672.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta27673","meta27673",1145609651,null)], null);
});

cljs.core.async.t27672.cljs$lang$type = true;

cljs.core.async.t27672.cljs$lang$ctorStr = "cljs.core.async/t27672";

cljs.core.async.t27672.cljs$lang$ctorPrWriter = (function (this__18666__auto__,writer__18667__auto__,opt__18668__auto__){
return cljs.core._write.call(null,writer__18667__auto__,"cljs.core.async/t27672");
});

cljs.core.async.__GT_t27672 = (function cljs$core$async$fn_handler_$___GT_t27672(fn_handler__$1,f__$1,meta27673){
return (new cljs.core.async.t27672(fn_handler__$1,f__$1,meta27673));
});

}

return (new cljs.core.async.t27672(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27676 = buff;
if(G__27676){
var bit__18761__auto__ = null;
if(cljs.core.truth_((function (){var or__18087__auto__ = bit__18761__auto__;
if(cljs.core.truth_(or__18087__auto__)){
return or__18087__auto__;
} else {
return G__27676.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__27676.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27676);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27676);
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
var G__27678 = arguments.length;
switch (G__27678) {
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
var G__27681 = arguments.length;
switch (G__27681) {
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
var val_27683 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27683);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27683,ret){
return (function (){
return fn1.call(null,val_27683);
});})(val_27683,ret))
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
var G__27685 = arguments.length;
switch (G__27685) {
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
var n__18972__auto___27687 = n;
var x_27688 = (0);
while(true){
if((x_27688 < n__18972__auto___27687)){
(a[x_27688] = (0));

var G__27689 = (x_27688 + (1));
x_27688 = G__27689;
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

var G__27690 = (i + (1));
i = G__27690;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t27694 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27694 = (function (alt_flag,flag,meta27695){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27695 = meta27695;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27696,meta27695__$1){
var self__ = this;
var _27696__$1 = this;
return (new cljs.core.async.t27694(self__.alt_flag,self__.flag,meta27695__$1));
});})(flag))
;

cljs.core.async.t27694.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27696){
var self__ = this;
var _27696__$1 = this;
return self__.meta27695;
});})(flag))
;

cljs.core.async.t27694.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27694.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t27694.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t27694.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27695","meta27695",1348837458,null)], null);
});})(flag))
;

cljs.core.async.t27694.cljs$lang$type = true;

cljs.core.async.t27694.cljs$lang$ctorStr = "cljs.core.async/t27694";

cljs.core.async.t27694.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18666__auto__,writer__18667__auto__,opt__18668__auto__){
return cljs.core._write.call(null,writer__18667__auto__,"cljs.core.async/t27694");
});})(flag))
;

cljs.core.async.__GT_t27694 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t27694(alt_flag__$1,flag__$1,meta27695){
return (new cljs.core.async.t27694(alt_flag__$1,flag__$1,meta27695));
});})(flag))
;

}

return (new cljs.core.async.t27694(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t27700 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27700 = (function (alt_handler,flag,cb,meta27701){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27701 = meta27701;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27700.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27702,meta27701__$1){
var self__ = this;
var _27702__$1 = this;
return (new cljs.core.async.t27700(self__.alt_handler,self__.flag,self__.cb,meta27701__$1));
});

cljs.core.async.t27700.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27702){
var self__ = this;
var _27702__$1 = this;
return self__.meta27701;
});

cljs.core.async.t27700.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27700.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t27700.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t27700.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27701","meta27701",-388118217,null)], null);
});

cljs.core.async.t27700.cljs$lang$type = true;

cljs.core.async.t27700.cljs$lang$ctorStr = "cljs.core.async/t27700";

cljs.core.async.t27700.cljs$lang$ctorPrWriter = (function (this__18666__auto__,writer__18667__auto__,opt__18668__auto__){
return cljs.core._write.call(null,writer__18667__auto__,"cljs.core.async/t27700");
});

cljs.core.async.__GT_t27700 = (function cljs$core$async$alt_handler_$___GT_t27700(alt_handler__$1,flag__$1,cb__$1,meta27701){
return (new cljs.core.async.t27700(alt_handler__$1,flag__$1,cb__$1,meta27701));
});

}

return (new cljs.core.async.t27700(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27703_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27703_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27704_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27704_SHARP_,port], null));
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
var G__27705 = (i + (1));
i = G__27705;
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

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27708){
var map__27709 = p__27708;
var map__27709__$1 = ((cljs.core.seq_QMARK_.call(null,map__27709))?cljs.core.apply.call(null,cljs.core.hash_map,map__27709):map__27709);
var opts = map__27709__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27706){
var G__27707 = cljs.core.first.call(null,seq27706);
var seq27706__$1 = cljs.core.next.call(null,seq27706);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27707,seq27706__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__27711 = arguments.length;
switch (G__27711) {
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
var c__21862__auto___27760 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21862__auto___27760){
return (function (){
var f__21863__auto__ = (function (){var switch__21800__auto__ = ((function (c__21862__auto___27760){
return (function (state_27735){
var state_val_27736 = (state_27735[(1)]);
if((state_val_27736 === (7))){
var inst_27731 = (state_27735[(2)]);
var state_27735__$1 = state_27735;
var statearr_27737_27761 = state_27735__$1;
(statearr_27737_27761[(2)] = inst_27731);

(statearr_27737_27761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27736 === (1))){
var state_27735__$1 = state_27735;
var statearr_27738_27762 = state_27735__$1;
(statearr_27738_27762[(2)] = null);

(statearr_27738_27762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27736 === (4))){
var inst_27714 = (state_27735[(7)]);
var inst_27714__$1 = (state_27735[(2)]);
var inst_27715 = (inst_27714__$1 == null);
var state_27735__$1 = (function (){var statearr_27739 = state_27735;
(statearr_27739[(7)] = inst_27714__$1);

return statearr_27739;
})();
if(cljs.core.truth_(inst_27715)){
var statearr_27740_27763 = state_27735__$1;
(statearr_27740_27763[(1)] = (5));

} else {
var statearr_27741_27764 = state_27735__$1;
(statearr_27741_27764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27736 === (13))){
var state_27735__$1 = state_27735;
var statearr_27742_27765 = state_27735__$1;
(statearr_27742_27765[(2)] = null);

(statearr_27742_27765[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27736 === (6))){
var inst_27714 = (state_27735[(7)]);
var state_27735__$1 = state_27735;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27735__$1,(11),to,inst_27714);
} else {
if((state_val_27736 === (3))){
var inst_27733 = (state_27735[(2)]);
var state_27735__$1 = state_27735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27735__$1,inst_27733);
} else {
if((state_val_27736 === (12))){
var state_27735__$1 = state_27735;
var statearr_27743_27766 = state_27735__$1;
(statearr_27743_27766[(2)] = null);

(statearr_27743_27766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27736 === (2))){
var state_27735__$1 = state_27735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27735__$1,(4),from);
} else {
if((state_val_27736 === (11))){
var inst_27724 = (state_27735[(2)]);
var state_27735__$1 = state_27735;
if(cljs.core.truth_(inst_27724)){
var statearr_27744_27767 = state_27735__$1;
(statearr_27744_27767[(1)] = (12));

} else {
var statearr_27745_27768 = state_27735__$1;
(statearr_27745_27768[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27736 === (9))){
var state_27735__$1 = state_27735;
var statearr_27746_27769 = state_27735__$1;
(statearr_27746_27769[(2)] = null);

(statearr_27746_27769[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27736 === (5))){
var state_27735__$1 = state_27735;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27747_27770 = state_27735__$1;
(statearr_27747_27770[(1)] = (8));

} else {
var statearr_27748_27771 = state_27735__$1;
(statearr_27748_27771[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27736 === (14))){
var inst_27729 = (state_27735[(2)]);
var state_27735__$1 = state_27735;
var statearr_27749_27772 = state_27735__$1;
(statearr_27749_27772[(2)] = inst_27729);

(statearr_27749_27772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27736 === (10))){
var inst_27721 = (state_27735[(2)]);
var state_27735__$1 = state_27735;
var statearr_27750_27773 = state_27735__$1;
(statearr_27750_27773[(2)] = inst_27721);

(statearr_27750_27773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27736 === (8))){
var inst_27718 = cljs.core.async.close_BANG_.call(null,to);
var state_27735__$1 = state_27735;
var statearr_27751_27774 = state_27735__$1;
(statearr_27751_27774[(2)] = inst_27718);

(statearr_27751_27774[(1)] = (10));


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
});})(c__21862__auto___27760))
;
return ((function (switch__21800__auto__,c__21862__auto___27760){
return (function() {
var cljs$core$async$state_machine__21801__auto__ = null;
var cljs$core$async$state_machine__21801__auto____0 = (function (){
var statearr_27755 = [null,null,null,null,null,null,null,null];
(statearr_27755[(0)] = cljs$core$async$state_machine__21801__auto__);

(statearr_27755[(1)] = (1));

return statearr_27755;
});
var cljs$core$async$state_machine__21801__auto____1 = (function (state_27735){
while(true){
var ret_value__21802__auto__ = (function (){try{while(true){
var result__21803__auto__ = switch__21800__auto__.call(null,state_27735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21803__auto__;
}
break;
}
}catch (e27756){if((e27756 instanceof Object)){
var ex__21804__auto__ = e27756;
var statearr_27757_27775 = state_27735;
(statearr_27757_27775[(5)] = ex__21804__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27776 = state_27735;
state_27735 = G__27776;
continue;
} else {
return ret_value__21802__auto__;
}
break;
}
});
cljs$core$async$state_machine__21801__auto__ = function(state_27735){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21801__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21801__auto____1.call(this,state_27735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21801__auto____0;
cljs$core$async$state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21801__auto____1;
return cljs$core$async$state_machine__21801__auto__;
})()
;})(switch__21800__auto__,c__21862__auto___27760))
})();
var state__21864__auto__ = (function (){var statearr_27758 = f__21863__auto__.call(null);
(statearr_27758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21862__auto___27760);

return statearr_27758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21864__auto__);
});})(c__21862__auto___27760))
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
return (function (p__27960){
var vec__27961 = p__27960;
var v = cljs.core.nth.call(null,vec__27961,(0),null);
var p = cljs.core.nth.call(null,vec__27961,(1),null);
var job = vec__27961;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21862__auto___28143 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21862__auto___28143,res,vec__27961,v,p,job,jobs,results){
return (function (){
var f__21863__auto__ = (function (){var switch__21800__auto__ = ((function (c__21862__auto___28143,res,vec__27961,v,p,job,jobs,results){
return (function (state_27966){
var state_val_27967 = (state_27966[(1)]);
if((state_val_27967 === (1))){
var state_27966__$1 = state_27966;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27966__$1,(2),res,v);
} else {
if((state_val_27967 === (2))){
var inst_27963 = (state_27966[(2)]);
var inst_27964 = cljs.core.async.close_BANG_.call(null,res);
var state_27966__$1 = (function (){var statearr_27968 = state_27966;
(statearr_27968[(7)] = inst_27963);

return statearr_27968;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27966__$1,inst_27964);
} else {
return null;
}
}
});})(c__21862__auto___28143,res,vec__27961,v,p,job,jobs,results))
;
return ((function (switch__21800__auto__,c__21862__auto___28143,res,vec__27961,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21801__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21801__auto____0 = (function (){
var statearr_27972 = [null,null,null,null,null,null,null,null];
(statearr_27972[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21801__auto__);

(statearr_27972[(1)] = (1));

return statearr_27972;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21801__auto____1 = (function (state_27966){
while(true){
var ret_value__21802__auto__ = (function (){try{while(true){
var result__21803__auto__ = switch__21800__auto__.call(null,state_27966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21803__auto__;
}
break;
}
}catch (e27973){if((e27973 instanceof Object)){
var ex__21804__auto__ = e27973;
var statearr_27974_28144 = state_27966;
(statearr_27974_28144[(5)] = ex__21804__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28145 = state_27966;
state_27966 = G__28145;
continue;
} else {
return ret_value__21802__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21801__auto__ = function(state_27966){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21801__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21801__auto____1.call(this,state_27966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21801__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21801__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21801__auto__;
})()
;})(switch__21800__auto__,c__21862__auto___28143,res,vec__27961,v,p,job,jobs,results))
})();
var state__21864__auto__ = (function (){var statearr_27975 = f__21863__auto__.call(null);
(statearr_27975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21862__auto___28143);

return statearr_27975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21864__auto__);
});})(c__21862__auto___28143,res,vec__27961,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27976){
var vec__27977 = p__27976;
var v = cljs.core.nth.call(null,vec__27977,(0),null);
var p = cljs.core.nth.call(null,vec__27977,(1),null);
var job = vec__27977;
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
var n__18972__auto___28146 = n;
var __28147 = (0);
while(true){
if((__28147 < n__18972__auto___28146)){
var G__27978_28148 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27978_28148) {
case "compute":
var c__21862__auto___28150 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28147,c__21862__auto___28150,G__27978_28148,n__18972__auto___28146,jobs,results,process,async){
return (function (){
var f__21863__auto__ = (function (){var switch__21800__auto__ = ((function (__28147,c__21862__auto___28150,G__27978_28148,n__18972__auto___28146,jobs,results,process,async){
return (function (state_27991){
var state_val_27992 = (state_27991[(1)]);
if((state_val_27992 === (1))){
var state_27991__$1 = state_27991;
var statearr_27993_28151 = state_27991__$1;
(statearr_27993_28151[(2)] = null);

(statearr_27993_28151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27992 === (2))){
var state_27991__$1 = state_27991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27991__$1,(4),jobs);
} else {
if((state_val_27992 === (3))){
var inst_27989 = (state_27991[(2)]);
var state_27991__$1 = state_27991;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27991__$1,inst_27989);
} else {
if((state_val_27992 === (4))){
var inst_27981 = (state_27991[(2)]);
var inst_27982 = process.call(null,inst_27981);
var state_27991__$1 = state_27991;
if(cljs.core.truth_(inst_27982)){
var statearr_27994_28152 = state_27991__$1;
(statearr_27994_28152[(1)] = (5));

} else {
var statearr_27995_28153 = state_27991__$1;
(statearr_27995_28153[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27992 === (5))){
var state_27991__$1 = state_27991;
var statearr_27996_28154 = state_27991__$1;
(statearr_27996_28154[(2)] = null);

(statearr_27996_28154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27992 === (6))){
var state_27991__$1 = state_27991;
var statearr_27997_28155 = state_27991__$1;
(statearr_27997_28155[(2)] = null);

(statearr_27997_28155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27992 === (7))){
var inst_27987 = (state_27991[(2)]);
var state_27991__$1 = state_27991;
var statearr_27998_28156 = state_27991__$1;
(statearr_27998_28156[(2)] = inst_27987);

(statearr_27998_28156[(1)] = (3));


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
});})(__28147,c__21862__auto___28150,G__27978_28148,n__18972__auto___28146,jobs,results,process,async))
;
return ((function (__28147,switch__21800__auto__,c__21862__auto___28150,G__27978_28148,n__18972__auto___28146,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21801__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21801__auto____0 = (function (){
var statearr_28002 = [null,null,null,null,null,null,null];
(statearr_28002[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21801__auto__);

(statearr_28002[(1)] = (1));

return statearr_28002;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21801__auto____1 = (function (state_27991){
while(true){
var ret_value__21802__auto__ = (function (){try{while(true){
var result__21803__auto__ = switch__21800__auto__.call(null,state_27991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21803__auto__;
}
break;
}
}catch (e28003){if((e28003 instanceof Object)){
var ex__21804__auto__ = e28003;
var statearr_28004_28157 = state_27991;
(statearr_28004_28157[(5)] = ex__21804__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28003;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28158 = state_27991;
state_27991 = G__28158;
continue;
} else {
return ret_value__21802__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21801__auto__ = function(state_27991){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21801__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21801__auto____1.call(this,state_27991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21801__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21801__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21801__auto__;
})()
;})(__28147,switch__21800__auto__,c__21862__auto___28150,G__27978_28148,n__18972__auto___28146,jobs,results,process,async))
})();
var state__21864__auto__ = (function (){var statearr_28005 = f__21863__auto__.call(null);
(statearr_28005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21862__auto___28150);

return statearr_28005;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21864__auto__);
});})(__28147,c__21862__auto___28150,G__27978_28148,n__18972__auto___28146,jobs,results,process,async))
);


break;
case "async":
var c__21862__auto___28159 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28147,c__21862__auto___28159,G__27978_28148,n__18972__auto___28146,jobs,results,process,async){
return (function (){
var f__21863__auto__ = (function (){var switch__21800__auto__ = ((function (__28147,c__21862__auto___28159,G__27978_28148,n__18972__auto___28146,jobs,results,process,async){
return (function (state_28018){
var state_val_28019 = (state_28018[(1)]);
if((state_val_28019 === (1))){
var state_28018__$1 = state_28018;
var statearr_28020_28160 = state_28018__$1;
(statearr_28020_28160[(2)] = null);

(statearr_28020_28160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28019 === (2))){
var state_28018__$1 = state_28018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28018__$1,(4),jobs);
} else {
if((state_val_28019 === (3))){
var inst_28016 = (state_28018[(2)]);
var state_28018__$1 = state_28018;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28018__$1,inst_28016);
} else {
if((state_val_28019 === (4))){
var inst_28008 = (state_28018[(2)]);
var inst_28009 = async.call(null,inst_28008);
var state_28018__$1 = state_28018;
if(cljs.core.truth_(inst_28009)){
var statearr_28021_28161 = state_28018__$1;
(statearr_28021_28161[(1)] = (5));

} else {
var statearr_28022_28162 = state_28018__$1;
(statearr_28022_28162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28019 === (5))){
var state_28018__$1 = state_28018;
var statearr_28023_28163 = state_28018__$1;
(statearr_28023_28163[(2)] = null);

(statearr_28023_28163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28019 === (6))){
var state_28018__$1 = state_28018;
var statearr_28024_28164 = state_28018__$1;
(statearr_28024_28164[(2)] = null);

(statearr_28024_28164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28019 === (7))){
var inst_28014 = (state_28018[(2)]);
var state_28018__$1 = state_28018;
var statearr_28025_28165 = state_28018__$1;
(statearr_28025_28165[(2)] = inst_28014);

(statearr_28025_28165[(1)] = (3));


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
});})(__28147,c__21862__auto___28159,G__27978_28148,n__18972__auto___28146,jobs,results,process,async))
;
return ((function (__28147,switch__21800__auto__,c__21862__auto___28159,G__27978_28148,n__18972__auto___28146,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21801__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21801__auto____0 = (function (){
var statearr_28029 = [null,null,null,null,null,null,null];
(statearr_28029[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21801__auto__);

(statearr_28029[(1)] = (1));

return statearr_28029;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21801__auto____1 = (function (state_28018){
while(true){
var ret_value__21802__auto__ = (function (){try{while(true){
var result__21803__auto__ = switch__21800__auto__.call(null,state_28018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21803__auto__;
}
break;
}
}catch (e28030){if((e28030 instanceof Object)){
var ex__21804__auto__ = e28030;
var statearr_28031_28166 = state_28018;
(statearr_28031_28166[(5)] = ex__21804__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28167 = state_28018;
state_28018 = G__28167;
continue;
} else {
return ret_value__21802__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21801__auto__ = function(state_28018){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21801__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21801__auto____1.call(this,state_28018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21801__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21801__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21801__auto__;
})()
;})(__28147,switch__21800__auto__,c__21862__auto___28159,G__27978_28148,n__18972__auto___28146,jobs,results,process,async))
})();
var state__21864__auto__ = (function (){var statearr_28032 = f__21863__auto__.call(null);
(statearr_28032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21862__auto___28159);

return statearr_28032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21864__auto__);
});})(__28147,c__21862__auto___28159,G__27978_28148,n__18972__auto___28146,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28168 = (__28147 + (1));
__28147 = G__28168;
continue;
} else {
}
break;
}

var c__21862__auto___28169 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21862__auto___28169,jobs,results,process,async){
return (function (){
var f__21863__auto__ = (function (){var switch__21800__auto__ = ((function (c__21862__auto___28169,jobs,results,process,async){
return (function (state_28054){
var state_val_28055 = (state_28054[(1)]);
if((state_val_28055 === (1))){
var state_28054__$1 = state_28054;
var statearr_28056_28170 = state_28054__$1;
(statearr_28056_28170[(2)] = null);

(statearr_28056_28170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (2))){
var state_28054__$1 = state_28054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28054__$1,(4),from);
} else {
if((state_val_28055 === (3))){
var inst_28052 = (state_28054[(2)]);
var state_28054__$1 = state_28054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28054__$1,inst_28052);
} else {
if((state_val_28055 === (4))){
var inst_28035 = (state_28054[(7)]);
var inst_28035__$1 = (state_28054[(2)]);
var inst_28036 = (inst_28035__$1 == null);
var state_28054__$1 = (function (){var statearr_28057 = state_28054;
(statearr_28057[(7)] = inst_28035__$1);

return statearr_28057;
})();
if(cljs.core.truth_(inst_28036)){
var statearr_28058_28171 = state_28054__$1;
(statearr_28058_28171[(1)] = (5));

} else {
var statearr_28059_28172 = state_28054__$1;
(statearr_28059_28172[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (5))){
var inst_28038 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28054__$1 = state_28054;
var statearr_28060_28173 = state_28054__$1;
(statearr_28060_28173[(2)] = inst_28038);

(statearr_28060_28173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (6))){
var inst_28035 = (state_28054[(7)]);
var inst_28040 = (state_28054[(8)]);
var inst_28040__$1 = cljs.core.async.chan.call(null,(1));
var inst_28041 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28042 = [inst_28035,inst_28040__$1];
var inst_28043 = (new cljs.core.PersistentVector(null,2,(5),inst_28041,inst_28042,null));
var state_28054__$1 = (function (){var statearr_28061 = state_28054;
(statearr_28061[(8)] = inst_28040__$1);

return statearr_28061;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28054__$1,(8),jobs,inst_28043);
} else {
if((state_val_28055 === (7))){
var inst_28050 = (state_28054[(2)]);
var state_28054__$1 = state_28054;
var statearr_28062_28174 = state_28054__$1;
(statearr_28062_28174[(2)] = inst_28050);

(statearr_28062_28174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28055 === (8))){
var inst_28040 = (state_28054[(8)]);
var inst_28045 = (state_28054[(2)]);
var state_28054__$1 = (function (){var statearr_28063 = state_28054;
(statearr_28063[(9)] = inst_28045);

return statearr_28063;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28054__$1,(9),results,inst_28040);
} else {
if((state_val_28055 === (9))){
var inst_28047 = (state_28054[(2)]);
var state_28054__$1 = (function (){var statearr_28064 = state_28054;
(statearr_28064[(10)] = inst_28047);

return statearr_28064;
})();
var statearr_28065_28175 = state_28054__$1;
(statearr_28065_28175[(2)] = null);

(statearr_28065_28175[(1)] = (2));


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
});})(c__21862__auto___28169,jobs,results,process,async))
;
return ((function (switch__21800__auto__,c__21862__auto___28169,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21801__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21801__auto____0 = (function (){
var statearr_28069 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28069[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21801__auto__);

(statearr_28069[(1)] = (1));

return statearr_28069;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21801__auto____1 = (function (state_28054){
while(true){
var ret_value__21802__auto__ = (function (){try{while(true){
var result__21803__auto__ = switch__21800__auto__.call(null,state_28054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21803__auto__;
}
break;
}
}catch (e28070){if((e28070 instanceof Object)){
var ex__21804__auto__ = e28070;
var statearr_28071_28176 = state_28054;
(statearr_28071_28176[(5)] = ex__21804__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28177 = state_28054;
state_28054 = G__28177;
continue;
} else {
return ret_value__21802__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21801__auto__ = function(state_28054){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21801__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21801__auto____1.call(this,state_28054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21801__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21801__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21801__auto__;
})()
;})(switch__21800__auto__,c__21862__auto___28169,jobs,results,process,async))
})();
var state__21864__auto__ = (function (){var statearr_28072 = f__21863__auto__.call(null);
(statearr_28072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21862__auto___28169);

return statearr_28072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21864__auto__);
});})(c__21862__auto___28169,jobs,results,process,async))
);


var c__21862__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21862__auto__,jobs,results,process,async){
return (function (){
var f__21863__auto__ = (function (){var switch__21800__auto__ = ((function (c__21862__auto__,jobs,results,process,async){
return (function (state_28110){
var state_val_28111 = (state_28110[(1)]);
if((state_val_28111 === (7))){
var inst_28106 = (state_28110[(2)]);
var state_28110__$1 = state_28110;
var statearr_28112_28178 = state_28110__$1;
(statearr_28112_28178[(2)] = inst_28106);

(statearr_28112_28178[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28111 === (20))){
var state_28110__$1 = state_28110;
var statearr_28113_28179 = state_28110__$1;
(statearr_28113_28179[(2)] = null);

(statearr_28113_28179[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28111 === (1))){
var state_28110__$1 = state_28110;
var statearr_28114_28180 = state_28110__$1;
(statearr_28114_28180[(2)] = null);

(statearr_28114_28180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28111 === (4))){
var inst_28075 = (state_28110[(7)]);
var inst_28075__$1 = (state_28110[(2)]);
var inst_28076 = (inst_28075__$1 == null);
var state_28110__$1 = (function (){var statearr_28115 = state_28110;
(statearr_28115[(7)] = inst_28075__$1);

return statearr_28115;
})();
if(cljs.core.truth_(inst_28076)){
var statearr_28116_28181 = state_28110__$1;
(statearr_28116_28181[(1)] = (5));

} else {
var statearr_28117_28182 = state_28110__$1;
(statearr_28117_28182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28111 === (15))){
var inst_28088 = (state_28110[(8)]);
var state_28110__$1 = state_28110;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28110__$1,(18),to,inst_28088);
} else {
if((state_val_28111 === (21))){
var inst_28101 = (state_28110[(2)]);
var state_28110__$1 = state_28110;
var statearr_28118_28183 = state_28110__$1;
(statearr_28118_28183[(2)] = inst_28101);

(statearr_28118_28183[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28111 === (13))){
var inst_28103 = (state_28110[(2)]);
var state_28110__$1 = (function (){var statearr_28119 = state_28110;
(statearr_28119[(9)] = inst_28103);

return statearr_28119;
})();
var statearr_28120_28184 = state_28110__$1;
(statearr_28120_28184[(2)] = null);

(statearr_28120_28184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28111 === (6))){
var inst_28075 = (state_28110[(7)]);
var state_28110__$1 = state_28110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28110__$1,(11),inst_28075);
} else {
if((state_val_28111 === (17))){
var inst_28096 = (state_28110[(2)]);
var state_28110__$1 = state_28110;
if(cljs.core.truth_(inst_28096)){
var statearr_28121_28185 = state_28110__$1;
(statearr_28121_28185[(1)] = (19));

} else {
var statearr_28122_28186 = state_28110__$1;
(statearr_28122_28186[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28111 === (3))){
var inst_28108 = (state_28110[(2)]);
var state_28110__$1 = state_28110;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28110__$1,inst_28108);
} else {
if((state_val_28111 === (12))){
var inst_28085 = (state_28110[(10)]);
var state_28110__$1 = state_28110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28110__$1,(14),inst_28085);
} else {
if((state_val_28111 === (2))){
var state_28110__$1 = state_28110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28110__$1,(4),results);
} else {
if((state_val_28111 === (19))){
var state_28110__$1 = state_28110;
var statearr_28123_28187 = state_28110__$1;
(statearr_28123_28187[(2)] = null);

(statearr_28123_28187[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28111 === (11))){
var inst_28085 = (state_28110[(2)]);
var state_28110__$1 = (function (){var statearr_28124 = state_28110;
(statearr_28124[(10)] = inst_28085);

return statearr_28124;
})();
var statearr_28125_28188 = state_28110__$1;
(statearr_28125_28188[(2)] = null);

(statearr_28125_28188[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28111 === (9))){
var state_28110__$1 = state_28110;
var statearr_28126_28189 = state_28110__$1;
(statearr_28126_28189[(2)] = null);

(statearr_28126_28189[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28111 === (5))){
var state_28110__$1 = state_28110;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28127_28190 = state_28110__$1;
(statearr_28127_28190[(1)] = (8));

} else {
var statearr_28128_28191 = state_28110__$1;
(statearr_28128_28191[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28111 === (14))){
var inst_28090 = (state_28110[(11)]);
var inst_28088 = (state_28110[(8)]);
var inst_28088__$1 = (state_28110[(2)]);
var inst_28089 = (inst_28088__$1 == null);
var inst_28090__$1 = cljs.core.not.call(null,inst_28089);
var state_28110__$1 = (function (){var statearr_28129 = state_28110;
(statearr_28129[(11)] = inst_28090__$1);

(statearr_28129[(8)] = inst_28088__$1);

return statearr_28129;
})();
if(inst_28090__$1){
var statearr_28130_28192 = state_28110__$1;
(statearr_28130_28192[(1)] = (15));

} else {
var statearr_28131_28193 = state_28110__$1;
(statearr_28131_28193[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28111 === (16))){
var inst_28090 = (state_28110[(11)]);
var state_28110__$1 = state_28110;
var statearr_28132_28194 = state_28110__$1;
(statearr_28132_28194[(2)] = inst_28090);

(statearr_28132_28194[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28111 === (10))){
var inst_28082 = (state_28110[(2)]);
var state_28110__$1 = state_28110;
var statearr_28133_28195 = state_28110__$1;
(statearr_28133_28195[(2)] = inst_28082);

(statearr_28133_28195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28111 === (18))){
var inst_28093 = (state_28110[(2)]);
var state_28110__$1 = state_28110;
var statearr_28134_28196 = state_28110__$1;
(statearr_28134_28196[(2)] = inst_28093);

(statearr_28134_28196[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28111 === (8))){
var inst_28079 = cljs.core.async.close_BANG_.call(null,to);
var state_28110__$1 = state_28110;
var statearr_28135_28197 = state_28110__$1;
(statearr_28135_28197[(2)] = inst_28079);

(statearr_28135_28197[(1)] = (10));


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
});})(c__21862__auto__,jobs,results,process,async))
;
return ((function (switch__21800__auto__,c__21862__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21801__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21801__auto____0 = (function (){
var statearr_28139 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28139[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21801__auto__);

(statearr_28139[(1)] = (1));

return statearr_28139;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21801__auto____1 = (function (state_28110){
while(true){
var ret_value__21802__auto__ = (function (){try{while(true){
var result__21803__auto__ = switch__21800__auto__.call(null,state_28110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21803__auto__;
}
break;
}
}catch (e28140){if((e28140 instanceof Object)){
var ex__21804__auto__ = e28140;
var statearr_28141_28198 = state_28110;
(statearr_28141_28198[(5)] = ex__21804__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28199 = state_28110;
state_28110 = G__28199;
continue;
} else {
return ret_value__21802__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21801__auto__ = function(state_28110){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21801__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21801__auto____1.call(this,state_28110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21801__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21801__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21801__auto__;
})()
;})(switch__21800__auto__,c__21862__auto__,jobs,results,process,async))
})();
var state__21864__auto__ = (function (){var statearr_28142 = f__21863__auto__.call(null);
(statearr_28142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21862__auto__);

return statearr_28142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21864__auto__);
});})(c__21862__auto__,jobs,results,process,async))
);

return c__21862__auto__;
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
var G__28201 = arguments.length;
switch (G__28201) {
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
var G__28204 = arguments.length;
switch (G__28204) {
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
var G__28207 = arguments.length;
switch (G__28207) {
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
var c__21862__auto___28259 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21862__auto___28259,tc,fc){
return (function (){
var f__21863__auto__ = (function (){var switch__21800__auto__ = ((function (c__21862__auto___28259,tc,fc){
return (function (state_28233){
var state_val_28234 = (state_28233[(1)]);
if((state_val_28234 === (7))){
var inst_28229 = (state_28233[(2)]);
var state_28233__$1 = state_28233;
var statearr_28235_28260 = state_28233__$1;
(statearr_28235_28260[(2)] = inst_28229);

(statearr_28235_28260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (1))){
var state_28233__$1 = state_28233;
var statearr_28236_28261 = state_28233__$1;
(statearr_28236_28261[(2)] = null);

(statearr_28236_28261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (4))){
var inst_28210 = (state_28233[(7)]);
var inst_28210__$1 = (state_28233[(2)]);
var inst_28211 = (inst_28210__$1 == null);
var state_28233__$1 = (function (){var statearr_28237 = state_28233;
(statearr_28237[(7)] = inst_28210__$1);

return statearr_28237;
})();
if(cljs.core.truth_(inst_28211)){
var statearr_28238_28262 = state_28233__$1;
(statearr_28238_28262[(1)] = (5));

} else {
var statearr_28239_28263 = state_28233__$1;
(statearr_28239_28263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (13))){
var state_28233__$1 = state_28233;
var statearr_28240_28264 = state_28233__$1;
(statearr_28240_28264[(2)] = null);

(statearr_28240_28264[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (6))){
var inst_28210 = (state_28233[(7)]);
var inst_28216 = p.call(null,inst_28210);
var state_28233__$1 = state_28233;
if(cljs.core.truth_(inst_28216)){
var statearr_28241_28265 = state_28233__$1;
(statearr_28241_28265[(1)] = (9));

} else {
var statearr_28242_28266 = state_28233__$1;
(statearr_28242_28266[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (3))){
var inst_28231 = (state_28233[(2)]);
var state_28233__$1 = state_28233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28233__$1,inst_28231);
} else {
if((state_val_28234 === (12))){
var state_28233__$1 = state_28233;
var statearr_28243_28267 = state_28233__$1;
(statearr_28243_28267[(2)] = null);

(statearr_28243_28267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (2))){
var state_28233__$1 = state_28233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28233__$1,(4),ch);
} else {
if((state_val_28234 === (11))){
var inst_28210 = (state_28233[(7)]);
var inst_28220 = (state_28233[(2)]);
var state_28233__$1 = state_28233;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28233__$1,(8),inst_28220,inst_28210);
} else {
if((state_val_28234 === (9))){
var state_28233__$1 = state_28233;
var statearr_28244_28268 = state_28233__$1;
(statearr_28244_28268[(2)] = tc);

(statearr_28244_28268[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (5))){
var inst_28213 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28214 = cljs.core.async.close_BANG_.call(null,fc);
var state_28233__$1 = (function (){var statearr_28245 = state_28233;
(statearr_28245[(8)] = inst_28213);

return statearr_28245;
})();
var statearr_28246_28269 = state_28233__$1;
(statearr_28246_28269[(2)] = inst_28214);

(statearr_28246_28269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (14))){
var inst_28227 = (state_28233[(2)]);
var state_28233__$1 = state_28233;
var statearr_28247_28270 = state_28233__$1;
(statearr_28247_28270[(2)] = inst_28227);

(statearr_28247_28270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (10))){
var state_28233__$1 = state_28233;
var statearr_28248_28271 = state_28233__$1;
(statearr_28248_28271[(2)] = fc);

(statearr_28248_28271[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28234 === (8))){
var inst_28222 = (state_28233[(2)]);
var state_28233__$1 = state_28233;
if(cljs.core.truth_(inst_28222)){
var statearr_28249_28272 = state_28233__$1;
(statearr_28249_28272[(1)] = (12));

} else {
var statearr_28250_28273 = state_28233__$1;
(statearr_28250_28273[(1)] = (13));

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
});})(c__21862__auto___28259,tc,fc))
;
return ((function (switch__21800__auto__,c__21862__auto___28259,tc,fc){
return (function() {
var cljs$core$async$state_machine__21801__auto__ = null;
var cljs$core$async$state_machine__21801__auto____0 = (function (){
var statearr_28254 = [null,null,null,null,null,null,null,null,null];
(statearr_28254[(0)] = cljs$core$async$state_machine__21801__auto__);

(statearr_28254[(1)] = (1));

return statearr_28254;
});
var cljs$core$async$state_machine__21801__auto____1 = (function (state_28233){
while(true){
var ret_value__21802__auto__ = (function (){try{while(true){
var result__21803__auto__ = switch__21800__auto__.call(null,state_28233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21803__auto__;
}
break;
}
}catch (e28255){if((e28255 instanceof Object)){
var ex__21804__auto__ = e28255;
var statearr_28256_28274 = state_28233;
(statearr_28256_28274[(5)] = ex__21804__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28275 = state_28233;
state_28233 = G__28275;
continue;
} else {
return ret_value__21802__auto__;
}
break;
}
});
cljs$core$async$state_machine__21801__auto__ = function(state_28233){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21801__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21801__auto____1.call(this,state_28233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21801__auto____0;
cljs$core$async$state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21801__auto____1;
return cljs$core$async$state_machine__21801__auto__;
})()
;})(switch__21800__auto__,c__21862__auto___28259,tc,fc))
})();
var state__21864__auto__ = (function (){var statearr_28257 = f__21863__auto__.call(null);
(statearr_28257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21862__auto___28259);

return statearr_28257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21864__auto__);
});})(c__21862__auto___28259,tc,fc))
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
var c__21862__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21862__auto__){
return (function (){
var f__21863__auto__ = (function (){var switch__21800__auto__ = ((function (c__21862__auto__){
return (function (state_28322){
var state_val_28323 = (state_28322[(1)]);
if((state_val_28323 === (1))){
var inst_28308 = init;
var state_28322__$1 = (function (){var statearr_28324 = state_28322;
(statearr_28324[(7)] = inst_28308);

return statearr_28324;
})();
var statearr_28325_28340 = state_28322__$1;
(statearr_28325_28340[(2)] = null);

(statearr_28325_28340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28323 === (2))){
var state_28322__$1 = state_28322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28322__$1,(4),ch);
} else {
if((state_val_28323 === (3))){
var inst_28320 = (state_28322[(2)]);
var state_28322__$1 = state_28322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28322__$1,inst_28320);
} else {
if((state_val_28323 === (4))){
var inst_28311 = (state_28322[(8)]);
var inst_28311__$1 = (state_28322[(2)]);
var inst_28312 = (inst_28311__$1 == null);
var state_28322__$1 = (function (){var statearr_28326 = state_28322;
(statearr_28326[(8)] = inst_28311__$1);

return statearr_28326;
})();
if(cljs.core.truth_(inst_28312)){
var statearr_28327_28341 = state_28322__$1;
(statearr_28327_28341[(1)] = (5));

} else {
var statearr_28328_28342 = state_28322__$1;
(statearr_28328_28342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28323 === (5))){
var inst_28308 = (state_28322[(7)]);
var state_28322__$1 = state_28322;
var statearr_28329_28343 = state_28322__$1;
(statearr_28329_28343[(2)] = inst_28308);

(statearr_28329_28343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28323 === (6))){
var inst_28311 = (state_28322[(8)]);
var inst_28308 = (state_28322[(7)]);
var inst_28315 = f.call(null,inst_28308,inst_28311);
var inst_28308__$1 = inst_28315;
var state_28322__$1 = (function (){var statearr_28330 = state_28322;
(statearr_28330[(7)] = inst_28308__$1);

return statearr_28330;
})();
var statearr_28331_28344 = state_28322__$1;
(statearr_28331_28344[(2)] = null);

(statearr_28331_28344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28323 === (7))){
var inst_28318 = (state_28322[(2)]);
var state_28322__$1 = state_28322;
var statearr_28332_28345 = state_28322__$1;
(statearr_28332_28345[(2)] = inst_28318);

(statearr_28332_28345[(1)] = (3));


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
});})(c__21862__auto__))
;
return ((function (switch__21800__auto__,c__21862__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21801__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21801__auto____0 = (function (){
var statearr_28336 = [null,null,null,null,null,null,null,null,null];
(statearr_28336[(0)] = cljs$core$async$reduce_$_state_machine__21801__auto__);

(statearr_28336[(1)] = (1));

return statearr_28336;
});
var cljs$core$async$reduce_$_state_machine__21801__auto____1 = (function (state_28322){
while(true){
var ret_value__21802__auto__ = (function (){try{while(true){
var result__21803__auto__ = switch__21800__auto__.call(null,state_28322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21803__auto__;
}
break;
}
}catch (e28337){if((e28337 instanceof Object)){
var ex__21804__auto__ = e28337;
var statearr_28338_28346 = state_28322;
(statearr_28338_28346[(5)] = ex__21804__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28347 = state_28322;
state_28322 = G__28347;
continue;
} else {
return ret_value__21802__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21801__auto__ = function(state_28322){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21801__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21801__auto____1.call(this,state_28322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21801__auto____0;
cljs$core$async$reduce_$_state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21801__auto____1;
return cljs$core$async$reduce_$_state_machine__21801__auto__;
})()
;})(switch__21800__auto__,c__21862__auto__))
})();
var state__21864__auto__ = (function (){var statearr_28339 = f__21863__auto__.call(null);
(statearr_28339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21862__auto__);

return statearr_28339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21864__auto__);
});})(c__21862__auto__))
);

return c__21862__auto__;
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
var G__28349 = arguments.length;
switch (G__28349) {
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
var c__21862__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21862__auto__){
return (function (){
var f__21863__auto__ = (function (){var switch__21800__auto__ = ((function (c__21862__auto__){
return (function (state_28374){
var state_val_28375 = (state_28374[(1)]);
if((state_val_28375 === (7))){
var inst_28356 = (state_28374[(2)]);
var state_28374__$1 = state_28374;
var statearr_28376_28400 = state_28374__$1;
(statearr_28376_28400[(2)] = inst_28356);

(statearr_28376_28400[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28375 === (1))){
var inst_28350 = cljs.core.seq.call(null,coll);
var inst_28351 = inst_28350;
var state_28374__$1 = (function (){var statearr_28377 = state_28374;
(statearr_28377[(7)] = inst_28351);

return statearr_28377;
})();
var statearr_28378_28401 = state_28374__$1;
(statearr_28378_28401[(2)] = null);

(statearr_28378_28401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28375 === (4))){
var inst_28351 = (state_28374[(7)]);
var inst_28354 = cljs.core.first.call(null,inst_28351);
var state_28374__$1 = state_28374;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28374__$1,(7),ch,inst_28354);
} else {
if((state_val_28375 === (13))){
var inst_28368 = (state_28374[(2)]);
var state_28374__$1 = state_28374;
var statearr_28379_28402 = state_28374__$1;
(statearr_28379_28402[(2)] = inst_28368);

(statearr_28379_28402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28375 === (6))){
var inst_28359 = (state_28374[(2)]);
var state_28374__$1 = state_28374;
if(cljs.core.truth_(inst_28359)){
var statearr_28380_28403 = state_28374__$1;
(statearr_28380_28403[(1)] = (8));

} else {
var statearr_28381_28404 = state_28374__$1;
(statearr_28381_28404[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28375 === (3))){
var inst_28372 = (state_28374[(2)]);
var state_28374__$1 = state_28374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28374__$1,inst_28372);
} else {
if((state_val_28375 === (12))){
var state_28374__$1 = state_28374;
var statearr_28382_28405 = state_28374__$1;
(statearr_28382_28405[(2)] = null);

(statearr_28382_28405[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28375 === (2))){
var inst_28351 = (state_28374[(7)]);
var state_28374__$1 = state_28374;
if(cljs.core.truth_(inst_28351)){
var statearr_28383_28406 = state_28374__$1;
(statearr_28383_28406[(1)] = (4));

} else {
var statearr_28384_28407 = state_28374__$1;
(statearr_28384_28407[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28375 === (11))){
var inst_28365 = cljs.core.async.close_BANG_.call(null,ch);
var state_28374__$1 = state_28374;
var statearr_28385_28408 = state_28374__$1;
(statearr_28385_28408[(2)] = inst_28365);

(statearr_28385_28408[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28375 === (9))){
var state_28374__$1 = state_28374;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28386_28409 = state_28374__$1;
(statearr_28386_28409[(1)] = (11));

} else {
var statearr_28387_28410 = state_28374__$1;
(statearr_28387_28410[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28375 === (5))){
var inst_28351 = (state_28374[(7)]);
var state_28374__$1 = state_28374;
var statearr_28388_28411 = state_28374__$1;
(statearr_28388_28411[(2)] = inst_28351);

(statearr_28388_28411[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28375 === (10))){
var inst_28370 = (state_28374[(2)]);
var state_28374__$1 = state_28374;
var statearr_28389_28412 = state_28374__$1;
(statearr_28389_28412[(2)] = inst_28370);

(statearr_28389_28412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28375 === (8))){
var inst_28351 = (state_28374[(7)]);
var inst_28361 = cljs.core.next.call(null,inst_28351);
var inst_28351__$1 = inst_28361;
var state_28374__$1 = (function (){var statearr_28390 = state_28374;
(statearr_28390[(7)] = inst_28351__$1);

return statearr_28390;
})();
var statearr_28391_28413 = state_28374__$1;
(statearr_28391_28413[(2)] = null);

(statearr_28391_28413[(1)] = (2));


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
});})(c__21862__auto__))
;
return ((function (switch__21800__auto__,c__21862__auto__){
return (function() {
var cljs$core$async$state_machine__21801__auto__ = null;
var cljs$core$async$state_machine__21801__auto____0 = (function (){
var statearr_28395 = [null,null,null,null,null,null,null,null];
(statearr_28395[(0)] = cljs$core$async$state_machine__21801__auto__);

(statearr_28395[(1)] = (1));

return statearr_28395;
});
var cljs$core$async$state_machine__21801__auto____1 = (function (state_28374){
while(true){
var ret_value__21802__auto__ = (function (){try{while(true){
var result__21803__auto__ = switch__21800__auto__.call(null,state_28374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21803__auto__;
}
break;
}
}catch (e28396){if((e28396 instanceof Object)){
var ex__21804__auto__ = e28396;
var statearr_28397_28414 = state_28374;
(statearr_28397_28414[(5)] = ex__21804__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28415 = state_28374;
state_28374 = G__28415;
continue;
} else {
return ret_value__21802__auto__;
}
break;
}
});
cljs$core$async$state_machine__21801__auto__ = function(state_28374){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21801__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21801__auto____1.call(this,state_28374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21801__auto____0;
cljs$core$async$state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21801__auto____1;
return cljs$core$async$state_machine__21801__auto__;
})()
;})(switch__21800__auto__,c__21862__auto__))
})();
var state__21864__auto__ = (function (){var statearr_28398 = f__21863__auto__.call(null);
(statearr_28398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21862__auto__);

return statearr_28398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21864__auto__);
});})(c__21862__auto__))
);

return c__21862__auto__;
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

cljs.core.async.Mux = (function (){var obj28417 = {};
return obj28417;
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


cljs.core.async.Mult = (function (){var obj28419 = {};
return obj28419;
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
if(typeof cljs.core.async.t28641 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28641 = (function (mult,ch,cs,meta28642){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28642 = meta28642;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t28641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28643,meta28642__$1){
var self__ = this;
var _28643__$1 = this;
return (new cljs.core.async.t28641(self__.mult,self__.ch,self__.cs,meta28642__$1));
});})(cs))
;

cljs.core.async.t28641.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28643){
var self__ = this;
var _28643__$1 = this;
return self__.meta28642;
});})(cs))
;

cljs.core.async.t28641.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28641.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t28641.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t28641.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t28641.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t28641.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t28641.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28642","meta28642",-2094002261,null)], null);
});})(cs))
;

cljs.core.async.t28641.cljs$lang$type = true;

cljs.core.async.t28641.cljs$lang$ctorStr = "cljs.core.async/t28641";

cljs.core.async.t28641.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18666__auto__,writer__18667__auto__,opt__18668__auto__){
return cljs.core._write.call(null,writer__18667__auto__,"cljs.core.async/t28641");
});})(cs))
;

cljs.core.async.__GT_t28641 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t28641(mult__$1,ch__$1,cs__$1,meta28642){
return (new cljs.core.async.t28641(mult__$1,ch__$1,cs__$1,meta28642));
});})(cs))
;

}

return (new cljs.core.async.t28641(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21862__auto___28862 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21862__auto___28862,cs,m,dchan,dctr,done){
return (function (){
var f__21863__auto__ = (function (){var switch__21800__auto__ = ((function (c__21862__auto___28862,cs,m,dchan,dctr,done){
return (function (state_28774){
var state_val_28775 = (state_28774[(1)]);
if((state_val_28775 === (7))){
var inst_28770 = (state_28774[(2)]);
var state_28774__$1 = state_28774;
var statearr_28776_28863 = state_28774__$1;
(statearr_28776_28863[(2)] = inst_28770);

(statearr_28776_28863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (20))){
var inst_28675 = (state_28774[(7)]);
var inst_28685 = cljs.core.first.call(null,inst_28675);
var inst_28686 = cljs.core.nth.call(null,inst_28685,(0),null);
var inst_28687 = cljs.core.nth.call(null,inst_28685,(1),null);
var state_28774__$1 = (function (){var statearr_28777 = state_28774;
(statearr_28777[(8)] = inst_28686);

return statearr_28777;
})();
if(cljs.core.truth_(inst_28687)){
var statearr_28778_28864 = state_28774__$1;
(statearr_28778_28864[(1)] = (22));

} else {
var statearr_28779_28865 = state_28774__$1;
(statearr_28779_28865[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (27))){
var inst_28646 = (state_28774[(9)]);
var inst_28715 = (state_28774[(10)]);
var inst_28717 = (state_28774[(11)]);
var inst_28722 = (state_28774[(12)]);
var inst_28722__$1 = cljs.core._nth.call(null,inst_28715,inst_28717);
var inst_28723 = cljs.core.async.put_BANG_.call(null,inst_28722__$1,inst_28646,done);
var state_28774__$1 = (function (){var statearr_28780 = state_28774;
(statearr_28780[(12)] = inst_28722__$1);

return statearr_28780;
})();
if(cljs.core.truth_(inst_28723)){
var statearr_28781_28866 = state_28774__$1;
(statearr_28781_28866[(1)] = (30));

} else {
var statearr_28782_28867 = state_28774__$1;
(statearr_28782_28867[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (1))){
var state_28774__$1 = state_28774;
var statearr_28783_28868 = state_28774__$1;
(statearr_28783_28868[(2)] = null);

(statearr_28783_28868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (24))){
var inst_28675 = (state_28774[(7)]);
var inst_28692 = (state_28774[(2)]);
var inst_28693 = cljs.core.next.call(null,inst_28675);
var inst_28655 = inst_28693;
var inst_28656 = null;
var inst_28657 = (0);
var inst_28658 = (0);
var state_28774__$1 = (function (){var statearr_28784 = state_28774;
(statearr_28784[(13)] = inst_28656);

(statearr_28784[(14)] = inst_28692);

(statearr_28784[(15)] = inst_28655);

(statearr_28784[(16)] = inst_28658);

(statearr_28784[(17)] = inst_28657);

return statearr_28784;
})();
var statearr_28785_28869 = state_28774__$1;
(statearr_28785_28869[(2)] = null);

(statearr_28785_28869[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (39))){
var state_28774__$1 = state_28774;
var statearr_28789_28870 = state_28774__$1;
(statearr_28789_28870[(2)] = null);

(statearr_28789_28870[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (4))){
var inst_28646 = (state_28774[(9)]);
var inst_28646__$1 = (state_28774[(2)]);
var inst_28647 = (inst_28646__$1 == null);
var state_28774__$1 = (function (){var statearr_28790 = state_28774;
(statearr_28790[(9)] = inst_28646__$1);

return statearr_28790;
})();
if(cljs.core.truth_(inst_28647)){
var statearr_28791_28871 = state_28774__$1;
(statearr_28791_28871[(1)] = (5));

} else {
var statearr_28792_28872 = state_28774__$1;
(statearr_28792_28872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (15))){
var inst_28656 = (state_28774[(13)]);
var inst_28655 = (state_28774[(15)]);
var inst_28658 = (state_28774[(16)]);
var inst_28657 = (state_28774[(17)]);
var inst_28671 = (state_28774[(2)]);
var inst_28672 = (inst_28658 + (1));
var tmp28786 = inst_28656;
var tmp28787 = inst_28655;
var tmp28788 = inst_28657;
var inst_28655__$1 = tmp28787;
var inst_28656__$1 = tmp28786;
var inst_28657__$1 = tmp28788;
var inst_28658__$1 = inst_28672;
var state_28774__$1 = (function (){var statearr_28793 = state_28774;
(statearr_28793[(18)] = inst_28671);

(statearr_28793[(13)] = inst_28656__$1);

(statearr_28793[(15)] = inst_28655__$1);

(statearr_28793[(16)] = inst_28658__$1);

(statearr_28793[(17)] = inst_28657__$1);

return statearr_28793;
})();
var statearr_28794_28873 = state_28774__$1;
(statearr_28794_28873[(2)] = null);

(statearr_28794_28873[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (21))){
var inst_28696 = (state_28774[(2)]);
var state_28774__$1 = state_28774;
var statearr_28798_28874 = state_28774__$1;
(statearr_28798_28874[(2)] = inst_28696);

(statearr_28798_28874[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (31))){
var inst_28722 = (state_28774[(12)]);
var inst_28726 = done.call(null,null);
var inst_28727 = cljs.core.async.untap_STAR_.call(null,m,inst_28722);
var state_28774__$1 = (function (){var statearr_28799 = state_28774;
(statearr_28799[(19)] = inst_28726);

return statearr_28799;
})();
var statearr_28800_28875 = state_28774__$1;
(statearr_28800_28875[(2)] = inst_28727);

(statearr_28800_28875[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (32))){
var inst_28715 = (state_28774[(10)]);
var inst_28714 = (state_28774[(20)]);
var inst_28717 = (state_28774[(11)]);
var inst_28716 = (state_28774[(21)]);
var inst_28729 = (state_28774[(2)]);
var inst_28730 = (inst_28717 + (1));
var tmp28795 = inst_28715;
var tmp28796 = inst_28714;
var tmp28797 = inst_28716;
var inst_28714__$1 = tmp28796;
var inst_28715__$1 = tmp28795;
var inst_28716__$1 = tmp28797;
var inst_28717__$1 = inst_28730;
var state_28774__$1 = (function (){var statearr_28801 = state_28774;
(statearr_28801[(22)] = inst_28729);

(statearr_28801[(10)] = inst_28715__$1);

(statearr_28801[(20)] = inst_28714__$1);

(statearr_28801[(11)] = inst_28717__$1);

(statearr_28801[(21)] = inst_28716__$1);

return statearr_28801;
})();
var statearr_28802_28876 = state_28774__$1;
(statearr_28802_28876[(2)] = null);

(statearr_28802_28876[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (40))){
var inst_28742 = (state_28774[(23)]);
var inst_28746 = done.call(null,null);
var inst_28747 = cljs.core.async.untap_STAR_.call(null,m,inst_28742);
var state_28774__$1 = (function (){var statearr_28803 = state_28774;
(statearr_28803[(24)] = inst_28746);

return statearr_28803;
})();
var statearr_28804_28877 = state_28774__$1;
(statearr_28804_28877[(2)] = inst_28747);

(statearr_28804_28877[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (33))){
var inst_28733 = (state_28774[(25)]);
var inst_28735 = cljs.core.chunked_seq_QMARK_.call(null,inst_28733);
var state_28774__$1 = state_28774;
if(inst_28735){
var statearr_28805_28878 = state_28774__$1;
(statearr_28805_28878[(1)] = (36));

} else {
var statearr_28806_28879 = state_28774__$1;
(statearr_28806_28879[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (13))){
var inst_28665 = (state_28774[(26)]);
var inst_28668 = cljs.core.async.close_BANG_.call(null,inst_28665);
var state_28774__$1 = state_28774;
var statearr_28807_28880 = state_28774__$1;
(statearr_28807_28880[(2)] = inst_28668);

(statearr_28807_28880[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (22))){
var inst_28686 = (state_28774[(8)]);
var inst_28689 = cljs.core.async.close_BANG_.call(null,inst_28686);
var state_28774__$1 = state_28774;
var statearr_28808_28881 = state_28774__$1;
(statearr_28808_28881[(2)] = inst_28689);

(statearr_28808_28881[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (36))){
var inst_28733 = (state_28774[(25)]);
var inst_28737 = cljs.core.chunk_first.call(null,inst_28733);
var inst_28738 = cljs.core.chunk_rest.call(null,inst_28733);
var inst_28739 = cljs.core.count.call(null,inst_28737);
var inst_28714 = inst_28738;
var inst_28715 = inst_28737;
var inst_28716 = inst_28739;
var inst_28717 = (0);
var state_28774__$1 = (function (){var statearr_28809 = state_28774;
(statearr_28809[(10)] = inst_28715);

(statearr_28809[(20)] = inst_28714);

(statearr_28809[(11)] = inst_28717);

(statearr_28809[(21)] = inst_28716);

return statearr_28809;
})();
var statearr_28810_28882 = state_28774__$1;
(statearr_28810_28882[(2)] = null);

(statearr_28810_28882[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (41))){
var inst_28733 = (state_28774[(25)]);
var inst_28749 = (state_28774[(2)]);
var inst_28750 = cljs.core.next.call(null,inst_28733);
var inst_28714 = inst_28750;
var inst_28715 = null;
var inst_28716 = (0);
var inst_28717 = (0);
var state_28774__$1 = (function (){var statearr_28811 = state_28774;
(statearr_28811[(10)] = inst_28715);

(statearr_28811[(20)] = inst_28714);

(statearr_28811[(11)] = inst_28717);

(statearr_28811[(27)] = inst_28749);

(statearr_28811[(21)] = inst_28716);

return statearr_28811;
})();
var statearr_28812_28883 = state_28774__$1;
(statearr_28812_28883[(2)] = null);

(statearr_28812_28883[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (43))){
var state_28774__$1 = state_28774;
var statearr_28813_28884 = state_28774__$1;
(statearr_28813_28884[(2)] = null);

(statearr_28813_28884[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (29))){
var inst_28758 = (state_28774[(2)]);
var state_28774__$1 = state_28774;
var statearr_28814_28885 = state_28774__$1;
(statearr_28814_28885[(2)] = inst_28758);

(statearr_28814_28885[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (44))){
var inst_28767 = (state_28774[(2)]);
var state_28774__$1 = (function (){var statearr_28815 = state_28774;
(statearr_28815[(28)] = inst_28767);

return statearr_28815;
})();
var statearr_28816_28886 = state_28774__$1;
(statearr_28816_28886[(2)] = null);

(statearr_28816_28886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (6))){
var inst_28706 = (state_28774[(29)]);
var inst_28705 = cljs.core.deref.call(null,cs);
var inst_28706__$1 = cljs.core.keys.call(null,inst_28705);
var inst_28707 = cljs.core.count.call(null,inst_28706__$1);
var inst_28708 = cljs.core.reset_BANG_.call(null,dctr,inst_28707);
var inst_28713 = cljs.core.seq.call(null,inst_28706__$1);
var inst_28714 = inst_28713;
var inst_28715 = null;
var inst_28716 = (0);
var inst_28717 = (0);
var state_28774__$1 = (function (){var statearr_28817 = state_28774;
(statearr_28817[(29)] = inst_28706__$1);

(statearr_28817[(10)] = inst_28715);

(statearr_28817[(20)] = inst_28714);

(statearr_28817[(11)] = inst_28717);

(statearr_28817[(30)] = inst_28708);

(statearr_28817[(21)] = inst_28716);

return statearr_28817;
})();
var statearr_28818_28887 = state_28774__$1;
(statearr_28818_28887[(2)] = null);

(statearr_28818_28887[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (28))){
var inst_28733 = (state_28774[(25)]);
var inst_28714 = (state_28774[(20)]);
var inst_28733__$1 = cljs.core.seq.call(null,inst_28714);
var state_28774__$1 = (function (){var statearr_28819 = state_28774;
(statearr_28819[(25)] = inst_28733__$1);

return statearr_28819;
})();
if(inst_28733__$1){
var statearr_28820_28888 = state_28774__$1;
(statearr_28820_28888[(1)] = (33));

} else {
var statearr_28821_28889 = state_28774__$1;
(statearr_28821_28889[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (25))){
var inst_28717 = (state_28774[(11)]);
var inst_28716 = (state_28774[(21)]);
var inst_28719 = (inst_28717 < inst_28716);
var inst_28720 = inst_28719;
var state_28774__$1 = state_28774;
if(cljs.core.truth_(inst_28720)){
var statearr_28822_28890 = state_28774__$1;
(statearr_28822_28890[(1)] = (27));

} else {
var statearr_28823_28891 = state_28774__$1;
(statearr_28823_28891[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (34))){
var state_28774__$1 = state_28774;
var statearr_28824_28892 = state_28774__$1;
(statearr_28824_28892[(2)] = null);

(statearr_28824_28892[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (17))){
var state_28774__$1 = state_28774;
var statearr_28825_28893 = state_28774__$1;
(statearr_28825_28893[(2)] = null);

(statearr_28825_28893[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (3))){
var inst_28772 = (state_28774[(2)]);
var state_28774__$1 = state_28774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28774__$1,inst_28772);
} else {
if((state_val_28775 === (12))){
var inst_28701 = (state_28774[(2)]);
var state_28774__$1 = state_28774;
var statearr_28826_28894 = state_28774__$1;
(statearr_28826_28894[(2)] = inst_28701);

(statearr_28826_28894[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (2))){
var state_28774__$1 = state_28774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28774__$1,(4),ch);
} else {
if((state_val_28775 === (23))){
var state_28774__$1 = state_28774;
var statearr_28827_28895 = state_28774__$1;
(statearr_28827_28895[(2)] = null);

(statearr_28827_28895[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (35))){
var inst_28756 = (state_28774[(2)]);
var state_28774__$1 = state_28774;
var statearr_28828_28896 = state_28774__$1;
(statearr_28828_28896[(2)] = inst_28756);

(statearr_28828_28896[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (19))){
var inst_28675 = (state_28774[(7)]);
var inst_28679 = cljs.core.chunk_first.call(null,inst_28675);
var inst_28680 = cljs.core.chunk_rest.call(null,inst_28675);
var inst_28681 = cljs.core.count.call(null,inst_28679);
var inst_28655 = inst_28680;
var inst_28656 = inst_28679;
var inst_28657 = inst_28681;
var inst_28658 = (0);
var state_28774__$1 = (function (){var statearr_28829 = state_28774;
(statearr_28829[(13)] = inst_28656);

(statearr_28829[(15)] = inst_28655);

(statearr_28829[(16)] = inst_28658);

(statearr_28829[(17)] = inst_28657);

return statearr_28829;
})();
var statearr_28830_28897 = state_28774__$1;
(statearr_28830_28897[(2)] = null);

(statearr_28830_28897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (11))){
var inst_28675 = (state_28774[(7)]);
var inst_28655 = (state_28774[(15)]);
var inst_28675__$1 = cljs.core.seq.call(null,inst_28655);
var state_28774__$1 = (function (){var statearr_28831 = state_28774;
(statearr_28831[(7)] = inst_28675__$1);

return statearr_28831;
})();
if(inst_28675__$1){
var statearr_28832_28898 = state_28774__$1;
(statearr_28832_28898[(1)] = (16));

} else {
var statearr_28833_28899 = state_28774__$1;
(statearr_28833_28899[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (9))){
var inst_28703 = (state_28774[(2)]);
var state_28774__$1 = state_28774;
var statearr_28834_28900 = state_28774__$1;
(statearr_28834_28900[(2)] = inst_28703);

(statearr_28834_28900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (5))){
var inst_28653 = cljs.core.deref.call(null,cs);
var inst_28654 = cljs.core.seq.call(null,inst_28653);
var inst_28655 = inst_28654;
var inst_28656 = null;
var inst_28657 = (0);
var inst_28658 = (0);
var state_28774__$1 = (function (){var statearr_28835 = state_28774;
(statearr_28835[(13)] = inst_28656);

(statearr_28835[(15)] = inst_28655);

(statearr_28835[(16)] = inst_28658);

(statearr_28835[(17)] = inst_28657);

return statearr_28835;
})();
var statearr_28836_28901 = state_28774__$1;
(statearr_28836_28901[(2)] = null);

(statearr_28836_28901[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (14))){
var state_28774__$1 = state_28774;
var statearr_28837_28902 = state_28774__$1;
(statearr_28837_28902[(2)] = null);

(statearr_28837_28902[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (45))){
var inst_28764 = (state_28774[(2)]);
var state_28774__$1 = state_28774;
var statearr_28838_28903 = state_28774__$1;
(statearr_28838_28903[(2)] = inst_28764);

(statearr_28838_28903[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (26))){
var inst_28706 = (state_28774[(29)]);
var inst_28760 = (state_28774[(2)]);
var inst_28761 = cljs.core.seq.call(null,inst_28706);
var state_28774__$1 = (function (){var statearr_28839 = state_28774;
(statearr_28839[(31)] = inst_28760);

return statearr_28839;
})();
if(inst_28761){
var statearr_28840_28904 = state_28774__$1;
(statearr_28840_28904[(1)] = (42));

} else {
var statearr_28841_28905 = state_28774__$1;
(statearr_28841_28905[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (16))){
var inst_28675 = (state_28774[(7)]);
var inst_28677 = cljs.core.chunked_seq_QMARK_.call(null,inst_28675);
var state_28774__$1 = state_28774;
if(inst_28677){
var statearr_28842_28906 = state_28774__$1;
(statearr_28842_28906[(1)] = (19));

} else {
var statearr_28843_28907 = state_28774__$1;
(statearr_28843_28907[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (38))){
var inst_28753 = (state_28774[(2)]);
var state_28774__$1 = state_28774;
var statearr_28844_28908 = state_28774__$1;
(statearr_28844_28908[(2)] = inst_28753);

(statearr_28844_28908[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (30))){
var state_28774__$1 = state_28774;
var statearr_28845_28909 = state_28774__$1;
(statearr_28845_28909[(2)] = null);

(statearr_28845_28909[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (10))){
var inst_28656 = (state_28774[(13)]);
var inst_28658 = (state_28774[(16)]);
var inst_28664 = cljs.core._nth.call(null,inst_28656,inst_28658);
var inst_28665 = cljs.core.nth.call(null,inst_28664,(0),null);
var inst_28666 = cljs.core.nth.call(null,inst_28664,(1),null);
var state_28774__$1 = (function (){var statearr_28846 = state_28774;
(statearr_28846[(26)] = inst_28665);

return statearr_28846;
})();
if(cljs.core.truth_(inst_28666)){
var statearr_28847_28910 = state_28774__$1;
(statearr_28847_28910[(1)] = (13));

} else {
var statearr_28848_28911 = state_28774__$1;
(statearr_28848_28911[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (18))){
var inst_28699 = (state_28774[(2)]);
var state_28774__$1 = state_28774;
var statearr_28849_28912 = state_28774__$1;
(statearr_28849_28912[(2)] = inst_28699);

(statearr_28849_28912[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (42))){
var state_28774__$1 = state_28774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28774__$1,(45),dchan);
} else {
if((state_val_28775 === (37))){
var inst_28646 = (state_28774[(9)]);
var inst_28733 = (state_28774[(25)]);
var inst_28742 = (state_28774[(23)]);
var inst_28742__$1 = cljs.core.first.call(null,inst_28733);
var inst_28743 = cljs.core.async.put_BANG_.call(null,inst_28742__$1,inst_28646,done);
var state_28774__$1 = (function (){var statearr_28850 = state_28774;
(statearr_28850[(23)] = inst_28742__$1);

return statearr_28850;
})();
if(cljs.core.truth_(inst_28743)){
var statearr_28851_28913 = state_28774__$1;
(statearr_28851_28913[(1)] = (39));

} else {
var statearr_28852_28914 = state_28774__$1;
(statearr_28852_28914[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (8))){
var inst_28658 = (state_28774[(16)]);
var inst_28657 = (state_28774[(17)]);
var inst_28660 = (inst_28658 < inst_28657);
var inst_28661 = inst_28660;
var state_28774__$1 = state_28774;
if(cljs.core.truth_(inst_28661)){
var statearr_28853_28915 = state_28774__$1;
(statearr_28853_28915[(1)] = (10));

} else {
var statearr_28854_28916 = state_28774__$1;
(statearr_28854_28916[(1)] = (11));

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
});})(c__21862__auto___28862,cs,m,dchan,dctr,done))
;
return ((function (switch__21800__auto__,c__21862__auto___28862,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21801__auto__ = null;
var cljs$core$async$mult_$_state_machine__21801__auto____0 = (function (){
var statearr_28858 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28858[(0)] = cljs$core$async$mult_$_state_machine__21801__auto__);

(statearr_28858[(1)] = (1));

return statearr_28858;
});
var cljs$core$async$mult_$_state_machine__21801__auto____1 = (function (state_28774){
while(true){
var ret_value__21802__auto__ = (function (){try{while(true){
var result__21803__auto__ = switch__21800__auto__.call(null,state_28774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21803__auto__;
}
break;
}
}catch (e28859){if((e28859 instanceof Object)){
var ex__21804__auto__ = e28859;
var statearr_28860_28917 = state_28774;
(statearr_28860_28917[(5)] = ex__21804__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28918 = state_28774;
state_28774 = G__28918;
continue;
} else {
return ret_value__21802__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21801__auto__ = function(state_28774){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21801__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21801__auto____1.call(this,state_28774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21801__auto____0;
cljs$core$async$mult_$_state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21801__auto____1;
return cljs$core$async$mult_$_state_machine__21801__auto__;
})()
;})(switch__21800__auto__,c__21862__auto___28862,cs,m,dchan,dctr,done))
})();
var state__21864__auto__ = (function (){var statearr_28861 = f__21863__auto__.call(null);
(statearr_28861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21862__auto___28862);

return statearr_28861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21864__auto__);
});})(c__21862__auto___28862,cs,m,dchan,dctr,done))
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
var G__28920 = arguments.length;
switch (G__28920) {
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

cljs.core.async.Mix = (function (){var obj28923 = {};
return obj28923;
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

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28928){
var map__28929 = p__28928;
var map__28929__$1 = ((cljs.core.seq_QMARK_.call(null,map__28929))?cljs.core.apply.call(null,cljs.core.hash_map,map__28929):map__28929);
var opts = map__28929__$1;
var statearr_28930_28933 = state;
(statearr_28930_28933[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4423__auto__ = cljs.core.async.do_alts.call(null,((function (map__28929,map__28929__$1,opts){
return (function (val){
var statearr_28931_28934 = state;
(statearr_28931_28934[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28929,map__28929__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4423__auto__)){
var cb = temp__4423__auto__;
var statearr_28932_28935 = state;
(statearr_28932_28935[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28924){
var G__28925 = cljs.core.first.call(null,seq28924);
var seq28924__$1 = cljs.core.next.call(null,seq28924);
var G__28926 = cljs.core.first.call(null,seq28924__$1);
var seq28924__$2 = cljs.core.next.call(null,seq28924__$1);
var G__28927 = cljs.core.first.call(null,seq28924__$2);
var seq28924__$3 = cljs.core.next.call(null,seq28924__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28925,G__28926,G__28927,seq28924__$3);
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
if(typeof cljs.core.async.t29055 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29055 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29056){
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
this.meta29056 = meta29056;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29057,meta29056__$1){
var self__ = this;
var _29057__$1 = this;
return (new cljs.core.async.t29055(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29056__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29055.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29057){
var self__ = this;
var _29057__$1 = this;
return self__.meta29056;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29055.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29055.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29055.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t29055.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29055.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29055.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29055.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29055.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t29055.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29056","meta29056",953034783,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29055.cljs$lang$type = true;

cljs.core.async.t29055.cljs$lang$ctorStr = "cljs.core.async/t29055";

cljs.core.async.t29055.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18666__auto__,writer__18667__auto__,opt__18668__auto__){
return cljs.core._write.call(null,writer__18667__auto__,"cljs.core.async/t29055");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t29055 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t29055(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29056){
return (new cljs.core.async.t29055(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29056));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t29055(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21862__auto___29174 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21862__auto___29174,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21863__auto__ = (function (){var switch__21800__auto__ = ((function (c__21862__auto___29174,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29127){
var state_val_29128 = (state_29127[(1)]);
if((state_val_29128 === (7))){
var inst_29071 = (state_29127[(7)]);
var inst_29076 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29071);
var state_29127__$1 = state_29127;
var statearr_29129_29175 = state_29127__$1;
(statearr_29129_29175[(2)] = inst_29076);

(statearr_29129_29175[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (20))){
var inst_29086 = (state_29127[(8)]);
var state_29127__$1 = state_29127;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29127__$1,(23),out,inst_29086);
} else {
if((state_val_29128 === (1))){
var inst_29061 = (state_29127[(9)]);
var inst_29061__$1 = calc_state.call(null);
var inst_29062 = cljs.core.seq_QMARK_.call(null,inst_29061__$1);
var state_29127__$1 = (function (){var statearr_29130 = state_29127;
(statearr_29130[(9)] = inst_29061__$1);

return statearr_29130;
})();
if(inst_29062){
var statearr_29131_29176 = state_29127__$1;
(statearr_29131_29176[(1)] = (2));

} else {
var statearr_29132_29177 = state_29127__$1;
(statearr_29132_29177[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (24))){
var inst_29079 = (state_29127[(10)]);
var inst_29071 = inst_29079;
var state_29127__$1 = (function (){var statearr_29133 = state_29127;
(statearr_29133[(7)] = inst_29071);

return statearr_29133;
})();
var statearr_29134_29178 = state_29127__$1;
(statearr_29134_29178[(2)] = null);

(statearr_29134_29178[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (4))){
var inst_29061 = (state_29127[(9)]);
var inst_29067 = (state_29127[(2)]);
var inst_29068 = cljs.core.get.call(null,inst_29067,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29069 = cljs.core.get.call(null,inst_29067,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29070 = cljs.core.get.call(null,inst_29067,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29071 = inst_29061;
var state_29127__$1 = (function (){var statearr_29135 = state_29127;
(statearr_29135[(11)] = inst_29068);

(statearr_29135[(12)] = inst_29070);

(statearr_29135[(13)] = inst_29069);

(statearr_29135[(7)] = inst_29071);

return statearr_29135;
})();
var statearr_29136_29179 = state_29127__$1;
(statearr_29136_29179[(2)] = null);

(statearr_29136_29179[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (15))){
var state_29127__$1 = state_29127;
var statearr_29137_29180 = state_29127__$1;
(statearr_29137_29180[(2)] = null);

(statearr_29137_29180[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (21))){
var inst_29079 = (state_29127[(10)]);
var inst_29071 = inst_29079;
var state_29127__$1 = (function (){var statearr_29138 = state_29127;
(statearr_29138[(7)] = inst_29071);

return statearr_29138;
})();
var statearr_29139_29181 = state_29127__$1;
(statearr_29139_29181[(2)] = null);

(statearr_29139_29181[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (13))){
var inst_29123 = (state_29127[(2)]);
var state_29127__$1 = state_29127;
var statearr_29140_29182 = state_29127__$1;
(statearr_29140_29182[(2)] = inst_29123);

(statearr_29140_29182[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (22))){
var inst_29121 = (state_29127[(2)]);
var state_29127__$1 = state_29127;
var statearr_29141_29183 = state_29127__$1;
(statearr_29141_29183[(2)] = inst_29121);

(statearr_29141_29183[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (6))){
var inst_29125 = (state_29127[(2)]);
var state_29127__$1 = state_29127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29127__$1,inst_29125);
} else {
if((state_val_29128 === (25))){
var state_29127__$1 = state_29127;
var statearr_29142_29184 = state_29127__$1;
(statearr_29142_29184[(2)] = null);

(statearr_29142_29184[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (17))){
var inst_29101 = (state_29127[(14)]);
var state_29127__$1 = state_29127;
var statearr_29143_29185 = state_29127__$1;
(statearr_29143_29185[(2)] = inst_29101);

(statearr_29143_29185[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (3))){
var inst_29061 = (state_29127[(9)]);
var state_29127__$1 = state_29127;
var statearr_29144_29186 = state_29127__$1;
(statearr_29144_29186[(2)] = inst_29061);

(statearr_29144_29186[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (12))){
var inst_29080 = (state_29127[(15)]);
var inst_29087 = (state_29127[(16)]);
var inst_29101 = (state_29127[(14)]);
var inst_29101__$1 = inst_29080.call(null,inst_29087);
var state_29127__$1 = (function (){var statearr_29145 = state_29127;
(statearr_29145[(14)] = inst_29101__$1);

return statearr_29145;
})();
if(cljs.core.truth_(inst_29101__$1)){
var statearr_29146_29187 = state_29127__$1;
(statearr_29146_29187[(1)] = (17));

} else {
var statearr_29147_29188 = state_29127__$1;
(statearr_29147_29188[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (2))){
var inst_29061 = (state_29127[(9)]);
var inst_29064 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29061);
var state_29127__$1 = state_29127;
var statearr_29148_29189 = state_29127__$1;
(statearr_29148_29189[(2)] = inst_29064);

(statearr_29148_29189[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (23))){
var inst_29112 = (state_29127[(2)]);
var state_29127__$1 = state_29127;
if(cljs.core.truth_(inst_29112)){
var statearr_29149_29190 = state_29127__$1;
(statearr_29149_29190[(1)] = (24));

} else {
var statearr_29150_29191 = state_29127__$1;
(statearr_29150_29191[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (19))){
var inst_29109 = (state_29127[(2)]);
var state_29127__$1 = state_29127;
if(cljs.core.truth_(inst_29109)){
var statearr_29151_29192 = state_29127__$1;
(statearr_29151_29192[(1)] = (20));

} else {
var statearr_29152_29193 = state_29127__$1;
(statearr_29152_29193[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (11))){
var inst_29086 = (state_29127[(8)]);
var inst_29092 = (inst_29086 == null);
var state_29127__$1 = state_29127;
if(cljs.core.truth_(inst_29092)){
var statearr_29153_29194 = state_29127__$1;
(statearr_29153_29194[(1)] = (14));

} else {
var statearr_29154_29195 = state_29127__$1;
(statearr_29154_29195[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (9))){
var inst_29079 = (state_29127[(10)]);
var inst_29079__$1 = (state_29127[(2)]);
var inst_29080 = cljs.core.get.call(null,inst_29079__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29081 = cljs.core.get.call(null,inst_29079__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29082 = cljs.core.get.call(null,inst_29079__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29127__$1 = (function (){var statearr_29155 = state_29127;
(statearr_29155[(15)] = inst_29080);

(statearr_29155[(17)] = inst_29081);

(statearr_29155[(10)] = inst_29079__$1);

return statearr_29155;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29127__$1,(10),inst_29082);
} else {
if((state_val_29128 === (5))){
var inst_29071 = (state_29127[(7)]);
var inst_29074 = cljs.core.seq_QMARK_.call(null,inst_29071);
var state_29127__$1 = state_29127;
if(inst_29074){
var statearr_29156_29196 = state_29127__$1;
(statearr_29156_29196[(1)] = (7));

} else {
var statearr_29157_29197 = state_29127__$1;
(statearr_29157_29197[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (14))){
var inst_29087 = (state_29127[(16)]);
var inst_29094 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29087);
var state_29127__$1 = state_29127;
var statearr_29158_29198 = state_29127__$1;
(statearr_29158_29198[(2)] = inst_29094);

(statearr_29158_29198[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (26))){
var inst_29117 = (state_29127[(2)]);
var state_29127__$1 = state_29127;
var statearr_29159_29199 = state_29127__$1;
(statearr_29159_29199[(2)] = inst_29117);

(statearr_29159_29199[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (16))){
var inst_29097 = (state_29127[(2)]);
var inst_29098 = calc_state.call(null);
var inst_29071 = inst_29098;
var state_29127__$1 = (function (){var statearr_29160 = state_29127;
(statearr_29160[(7)] = inst_29071);

(statearr_29160[(18)] = inst_29097);

return statearr_29160;
})();
var statearr_29161_29200 = state_29127__$1;
(statearr_29161_29200[(2)] = null);

(statearr_29161_29200[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (10))){
var inst_29086 = (state_29127[(8)]);
var inst_29087 = (state_29127[(16)]);
var inst_29085 = (state_29127[(2)]);
var inst_29086__$1 = cljs.core.nth.call(null,inst_29085,(0),null);
var inst_29087__$1 = cljs.core.nth.call(null,inst_29085,(1),null);
var inst_29088 = (inst_29086__$1 == null);
var inst_29089 = cljs.core._EQ_.call(null,inst_29087__$1,change);
var inst_29090 = (inst_29088) || (inst_29089);
var state_29127__$1 = (function (){var statearr_29162 = state_29127;
(statearr_29162[(8)] = inst_29086__$1);

(statearr_29162[(16)] = inst_29087__$1);

return statearr_29162;
})();
if(cljs.core.truth_(inst_29090)){
var statearr_29163_29201 = state_29127__$1;
(statearr_29163_29201[(1)] = (11));

} else {
var statearr_29164_29202 = state_29127__$1;
(statearr_29164_29202[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (18))){
var inst_29080 = (state_29127[(15)]);
var inst_29087 = (state_29127[(16)]);
var inst_29081 = (state_29127[(17)]);
var inst_29104 = cljs.core.empty_QMARK_.call(null,inst_29080);
var inst_29105 = inst_29081.call(null,inst_29087);
var inst_29106 = cljs.core.not.call(null,inst_29105);
var inst_29107 = (inst_29104) && (inst_29106);
var state_29127__$1 = state_29127;
var statearr_29165_29203 = state_29127__$1;
(statearr_29165_29203[(2)] = inst_29107);

(statearr_29165_29203[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29128 === (8))){
var inst_29071 = (state_29127[(7)]);
var state_29127__$1 = state_29127;
var statearr_29166_29204 = state_29127__$1;
(statearr_29166_29204[(2)] = inst_29071);

(statearr_29166_29204[(1)] = (9));


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
});})(c__21862__auto___29174,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21800__auto__,c__21862__auto___29174,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21801__auto__ = null;
var cljs$core$async$mix_$_state_machine__21801__auto____0 = (function (){
var statearr_29170 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29170[(0)] = cljs$core$async$mix_$_state_machine__21801__auto__);

(statearr_29170[(1)] = (1));

return statearr_29170;
});
var cljs$core$async$mix_$_state_machine__21801__auto____1 = (function (state_29127){
while(true){
var ret_value__21802__auto__ = (function (){try{while(true){
var result__21803__auto__ = switch__21800__auto__.call(null,state_29127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21803__auto__;
}
break;
}
}catch (e29171){if((e29171 instanceof Object)){
var ex__21804__auto__ = e29171;
var statearr_29172_29205 = state_29127;
(statearr_29172_29205[(5)] = ex__21804__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29206 = state_29127;
state_29127 = G__29206;
continue;
} else {
return ret_value__21802__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21801__auto__ = function(state_29127){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21801__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21801__auto____1.call(this,state_29127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21801__auto____0;
cljs$core$async$mix_$_state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21801__auto____1;
return cljs$core$async$mix_$_state_machine__21801__auto__;
})()
;})(switch__21800__auto__,c__21862__auto___29174,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21864__auto__ = (function (){var statearr_29173 = f__21863__auto__.call(null);
(statearr_29173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21862__auto___29174);

return statearr_29173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21864__auto__);
});})(c__21862__auto___29174,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj29208 = {};
return obj29208;
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
var G__29210 = arguments.length;
switch (G__29210) {
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
var G__29214 = arguments.length;
switch (G__29214) {
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
return (function (p1__29212_SHARP_){
if(cljs.core.truth_(p1__29212_SHARP_.call(null,topic))){
return p1__29212_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29212_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18087__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t29215 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29215 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29216){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29216 = meta29216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29217,meta29216__$1){
var self__ = this;
var _29217__$1 = this;
return (new cljs.core.async.t29215(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29216__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t29215.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29217){
var self__ = this;
var _29217__$1 = this;
return self__.meta29216;
});})(mults,ensure_mult))
;

cljs.core.async.t29215.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29215.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t29215.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t29215.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t29215.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t29215.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t29215.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t29215.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29216","meta29216",1099030730,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t29215.cljs$lang$type = true;

cljs.core.async.t29215.cljs$lang$ctorStr = "cljs.core.async/t29215";

cljs.core.async.t29215.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18666__auto__,writer__18667__auto__,opt__18668__auto__){
return cljs.core._write.call(null,writer__18667__auto__,"cljs.core.async/t29215");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t29215 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t29215(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29216){
return (new cljs.core.async.t29215(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29216));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t29215(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21862__auto___29338 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21862__auto___29338,mults,ensure_mult,p){
return (function (){
var f__21863__auto__ = (function (){var switch__21800__auto__ = ((function (c__21862__auto___29338,mults,ensure_mult,p){
return (function (state_29289){
var state_val_29290 = (state_29289[(1)]);
if((state_val_29290 === (7))){
var inst_29285 = (state_29289[(2)]);
var state_29289__$1 = state_29289;
var statearr_29291_29339 = state_29289__$1;
(statearr_29291_29339[(2)] = inst_29285);

(statearr_29291_29339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29290 === (20))){
var state_29289__$1 = state_29289;
var statearr_29292_29340 = state_29289__$1;
(statearr_29292_29340[(2)] = null);

(statearr_29292_29340[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29290 === (1))){
var state_29289__$1 = state_29289;
var statearr_29293_29341 = state_29289__$1;
(statearr_29293_29341[(2)] = null);

(statearr_29293_29341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29290 === (24))){
var inst_29268 = (state_29289[(7)]);
var inst_29277 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29268);
var state_29289__$1 = state_29289;
var statearr_29294_29342 = state_29289__$1;
(statearr_29294_29342[(2)] = inst_29277);

(statearr_29294_29342[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29290 === (4))){
var inst_29220 = (state_29289[(8)]);
var inst_29220__$1 = (state_29289[(2)]);
var inst_29221 = (inst_29220__$1 == null);
var state_29289__$1 = (function (){var statearr_29295 = state_29289;
(statearr_29295[(8)] = inst_29220__$1);

return statearr_29295;
})();
if(cljs.core.truth_(inst_29221)){
var statearr_29296_29343 = state_29289__$1;
(statearr_29296_29343[(1)] = (5));

} else {
var statearr_29297_29344 = state_29289__$1;
(statearr_29297_29344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29290 === (15))){
var inst_29262 = (state_29289[(2)]);
var state_29289__$1 = state_29289;
var statearr_29298_29345 = state_29289__$1;
(statearr_29298_29345[(2)] = inst_29262);

(statearr_29298_29345[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29290 === (21))){
var inst_29282 = (state_29289[(2)]);
var state_29289__$1 = (function (){var statearr_29299 = state_29289;
(statearr_29299[(9)] = inst_29282);

return statearr_29299;
})();
var statearr_29300_29346 = state_29289__$1;
(statearr_29300_29346[(2)] = null);

(statearr_29300_29346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29290 === (13))){
var inst_29244 = (state_29289[(10)]);
var inst_29246 = cljs.core.chunked_seq_QMARK_.call(null,inst_29244);
var state_29289__$1 = state_29289;
if(inst_29246){
var statearr_29301_29347 = state_29289__$1;
(statearr_29301_29347[(1)] = (16));

} else {
var statearr_29302_29348 = state_29289__$1;
(statearr_29302_29348[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29290 === (22))){
var inst_29274 = (state_29289[(2)]);
var state_29289__$1 = state_29289;
if(cljs.core.truth_(inst_29274)){
var statearr_29303_29349 = state_29289__$1;
(statearr_29303_29349[(1)] = (23));

} else {
var statearr_29304_29350 = state_29289__$1;
(statearr_29304_29350[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29290 === (6))){
var inst_29220 = (state_29289[(8)]);
var inst_29270 = (state_29289[(11)]);
var inst_29268 = (state_29289[(7)]);
var inst_29268__$1 = topic_fn.call(null,inst_29220);
var inst_29269 = cljs.core.deref.call(null,mults);
var inst_29270__$1 = cljs.core.get.call(null,inst_29269,inst_29268__$1);
var state_29289__$1 = (function (){var statearr_29305 = state_29289;
(statearr_29305[(11)] = inst_29270__$1);

(statearr_29305[(7)] = inst_29268__$1);

return statearr_29305;
})();
if(cljs.core.truth_(inst_29270__$1)){
var statearr_29306_29351 = state_29289__$1;
(statearr_29306_29351[(1)] = (19));

} else {
var statearr_29307_29352 = state_29289__$1;
(statearr_29307_29352[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29290 === (25))){
var inst_29279 = (state_29289[(2)]);
var state_29289__$1 = state_29289;
var statearr_29308_29353 = state_29289__$1;
(statearr_29308_29353[(2)] = inst_29279);

(statearr_29308_29353[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29290 === (17))){
var inst_29244 = (state_29289[(10)]);
var inst_29253 = cljs.core.first.call(null,inst_29244);
var inst_29254 = cljs.core.async.muxch_STAR_.call(null,inst_29253);
var inst_29255 = cljs.core.async.close_BANG_.call(null,inst_29254);
var inst_29256 = cljs.core.next.call(null,inst_29244);
var inst_29230 = inst_29256;
var inst_29231 = null;
var inst_29232 = (0);
var inst_29233 = (0);
var state_29289__$1 = (function (){var statearr_29309 = state_29289;
(statearr_29309[(12)] = inst_29231);

(statearr_29309[(13)] = inst_29233);

(statearr_29309[(14)] = inst_29230);

(statearr_29309[(15)] = inst_29255);

(statearr_29309[(16)] = inst_29232);

return statearr_29309;
})();
var statearr_29310_29354 = state_29289__$1;
(statearr_29310_29354[(2)] = null);

(statearr_29310_29354[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29290 === (3))){
var inst_29287 = (state_29289[(2)]);
var state_29289__$1 = state_29289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29289__$1,inst_29287);
} else {
if((state_val_29290 === (12))){
var inst_29264 = (state_29289[(2)]);
var state_29289__$1 = state_29289;
var statearr_29311_29355 = state_29289__$1;
(statearr_29311_29355[(2)] = inst_29264);

(statearr_29311_29355[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29290 === (2))){
var state_29289__$1 = state_29289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29289__$1,(4),ch);
} else {
if((state_val_29290 === (23))){
var state_29289__$1 = state_29289;
var statearr_29312_29356 = state_29289__$1;
(statearr_29312_29356[(2)] = null);

(statearr_29312_29356[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29290 === (19))){
var inst_29220 = (state_29289[(8)]);
var inst_29270 = (state_29289[(11)]);
var inst_29272 = cljs.core.async.muxch_STAR_.call(null,inst_29270);
var state_29289__$1 = state_29289;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29289__$1,(22),inst_29272,inst_29220);
} else {
if((state_val_29290 === (11))){
var inst_29244 = (state_29289[(10)]);
var inst_29230 = (state_29289[(14)]);
var inst_29244__$1 = cljs.core.seq.call(null,inst_29230);
var state_29289__$1 = (function (){var statearr_29313 = state_29289;
(statearr_29313[(10)] = inst_29244__$1);

return statearr_29313;
})();
if(inst_29244__$1){
var statearr_29314_29357 = state_29289__$1;
(statearr_29314_29357[(1)] = (13));

} else {
var statearr_29315_29358 = state_29289__$1;
(statearr_29315_29358[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29290 === (9))){
var inst_29266 = (state_29289[(2)]);
var state_29289__$1 = state_29289;
var statearr_29316_29359 = state_29289__$1;
(statearr_29316_29359[(2)] = inst_29266);

(statearr_29316_29359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29290 === (5))){
var inst_29227 = cljs.core.deref.call(null,mults);
var inst_29228 = cljs.core.vals.call(null,inst_29227);
var inst_29229 = cljs.core.seq.call(null,inst_29228);
var inst_29230 = inst_29229;
var inst_29231 = null;
var inst_29232 = (0);
var inst_29233 = (0);
var state_29289__$1 = (function (){var statearr_29317 = state_29289;
(statearr_29317[(12)] = inst_29231);

(statearr_29317[(13)] = inst_29233);

(statearr_29317[(14)] = inst_29230);

(statearr_29317[(16)] = inst_29232);

return statearr_29317;
})();
var statearr_29318_29360 = state_29289__$1;
(statearr_29318_29360[(2)] = null);

(statearr_29318_29360[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29290 === (14))){
var state_29289__$1 = state_29289;
var statearr_29322_29361 = state_29289__$1;
(statearr_29322_29361[(2)] = null);

(statearr_29322_29361[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29290 === (16))){
var inst_29244 = (state_29289[(10)]);
var inst_29248 = cljs.core.chunk_first.call(null,inst_29244);
var inst_29249 = cljs.core.chunk_rest.call(null,inst_29244);
var inst_29250 = cljs.core.count.call(null,inst_29248);
var inst_29230 = inst_29249;
var inst_29231 = inst_29248;
var inst_29232 = inst_29250;
var inst_29233 = (0);
var state_29289__$1 = (function (){var statearr_29323 = state_29289;
(statearr_29323[(12)] = inst_29231);

(statearr_29323[(13)] = inst_29233);

(statearr_29323[(14)] = inst_29230);

(statearr_29323[(16)] = inst_29232);

return statearr_29323;
})();
var statearr_29324_29362 = state_29289__$1;
(statearr_29324_29362[(2)] = null);

(statearr_29324_29362[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29290 === (10))){
var inst_29231 = (state_29289[(12)]);
var inst_29233 = (state_29289[(13)]);
var inst_29230 = (state_29289[(14)]);
var inst_29232 = (state_29289[(16)]);
var inst_29238 = cljs.core._nth.call(null,inst_29231,inst_29233);
var inst_29239 = cljs.core.async.muxch_STAR_.call(null,inst_29238);
var inst_29240 = cljs.core.async.close_BANG_.call(null,inst_29239);
var inst_29241 = (inst_29233 + (1));
var tmp29319 = inst_29231;
var tmp29320 = inst_29230;
var tmp29321 = inst_29232;
var inst_29230__$1 = tmp29320;
var inst_29231__$1 = tmp29319;
var inst_29232__$1 = tmp29321;
var inst_29233__$1 = inst_29241;
var state_29289__$1 = (function (){var statearr_29325 = state_29289;
(statearr_29325[(12)] = inst_29231__$1);

(statearr_29325[(13)] = inst_29233__$1);

(statearr_29325[(14)] = inst_29230__$1);

(statearr_29325[(17)] = inst_29240);

(statearr_29325[(16)] = inst_29232__$1);

return statearr_29325;
})();
var statearr_29326_29363 = state_29289__$1;
(statearr_29326_29363[(2)] = null);

(statearr_29326_29363[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29290 === (18))){
var inst_29259 = (state_29289[(2)]);
var state_29289__$1 = state_29289;
var statearr_29327_29364 = state_29289__$1;
(statearr_29327_29364[(2)] = inst_29259);

(statearr_29327_29364[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29290 === (8))){
var inst_29233 = (state_29289[(13)]);
var inst_29232 = (state_29289[(16)]);
var inst_29235 = (inst_29233 < inst_29232);
var inst_29236 = inst_29235;
var state_29289__$1 = state_29289;
if(cljs.core.truth_(inst_29236)){
var statearr_29328_29365 = state_29289__$1;
(statearr_29328_29365[(1)] = (10));

} else {
var statearr_29329_29366 = state_29289__$1;
(statearr_29329_29366[(1)] = (11));

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
});})(c__21862__auto___29338,mults,ensure_mult,p))
;
return ((function (switch__21800__auto__,c__21862__auto___29338,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21801__auto__ = null;
var cljs$core$async$state_machine__21801__auto____0 = (function (){
var statearr_29333 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29333[(0)] = cljs$core$async$state_machine__21801__auto__);

(statearr_29333[(1)] = (1));

return statearr_29333;
});
var cljs$core$async$state_machine__21801__auto____1 = (function (state_29289){
while(true){
var ret_value__21802__auto__ = (function (){try{while(true){
var result__21803__auto__ = switch__21800__auto__.call(null,state_29289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21803__auto__;
}
break;
}
}catch (e29334){if((e29334 instanceof Object)){
var ex__21804__auto__ = e29334;
var statearr_29335_29367 = state_29289;
(statearr_29335_29367[(5)] = ex__21804__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29334;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29368 = state_29289;
state_29289 = G__29368;
continue;
} else {
return ret_value__21802__auto__;
}
break;
}
});
cljs$core$async$state_machine__21801__auto__ = function(state_29289){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21801__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21801__auto____1.call(this,state_29289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21801__auto____0;
cljs$core$async$state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21801__auto____1;
return cljs$core$async$state_machine__21801__auto__;
})()
;})(switch__21800__auto__,c__21862__auto___29338,mults,ensure_mult,p))
})();
var state__21864__auto__ = (function (){var statearr_29336 = f__21863__auto__.call(null);
(statearr_29336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21862__auto___29338);

return statearr_29336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21864__auto__);
});})(c__21862__auto___29338,mults,ensure_mult,p))
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
var G__29370 = arguments.length;
switch (G__29370) {
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
var G__29373 = arguments.length;
switch (G__29373) {
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
var G__29376 = arguments.length;
switch (G__29376) {
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
var c__21862__auto___29446 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21862__auto___29446,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21863__auto__ = (function (){var switch__21800__auto__ = ((function (c__21862__auto___29446,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29415){
var state_val_29416 = (state_29415[(1)]);
if((state_val_29416 === (7))){
var state_29415__$1 = state_29415;
var statearr_29417_29447 = state_29415__$1;
(statearr_29417_29447[(2)] = null);

(statearr_29417_29447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (1))){
var state_29415__$1 = state_29415;
var statearr_29418_29448 = state_29415__$1;
(statearr_29418_29448[(2)] = null);

(statearr_29418_29448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (4))){
var inst_29379 = (state_29415[(7)]);
var inst_29381 = (inst_29379 < cnt);
var state_29415__$1 = state_29415;
if(cljs.core.truth_(inst_29381)){
var statearr_29419_29449 = state_29415__$1;
(statearr_29419_29449[(1)] = (6));

} else {
var statearr_29420_29450 = state_29415__$1;
(statearr_29420_29450[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (15))){
var inst_29411 = (state_29415[(2)]);
var state_29415__$1 = state_29415;
var statearr_29421_29451 = state_29415__$1;
(statearr_29421_29451[(2)] = inst_29411);

(statearr_29421_29451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (13))){
var inst_29404 = cljs.core.async.close_BANG_.call(null,out);
var state_29415__$1 = state_29415;
var statearr_29422_29452 = state_29415__$1;
(statearr_29422_29452[(2)] = inst_29404);

(statearr_29422_29452[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (6))){
var state_29415__$1 = state_29415;
var statearr_29423_29453 = state_29415__$1;
(statearr_29423_29453[(2)] = null);

(statearr_29423_29453[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (3))){
var inst_29413 = (state_29415[(2)]);
var state_29415__$1 = state_29415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29415__$1,inst_29413);
} else {
if((state_val_29416 === (12))){
var inst_29401 = (state_29415[(8)]);
var inst_29401__$1 = (state_29415[(2)]);
var inst_29402 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29401__$1);
var state_29415__$1 = (function (){var statearr_29424 = state_29415;
(statearr_29424[(8)] = inst_29401__$1);

return statearr_29424;
})();
if(cljs.core.truth_(inst_29402)){
var statearr_29425_29454 = state_29415__$1;
(statearr_29425_29454[(1)] = (13));

} else {
var statearr_29426_29455 = state_29415__$1;
(statearr_29426_29455[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (2))){
var inst_29378 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29379 = (0);
var state_29415__$1 = (function (){var statearr_29427 = state_29415;
(statearr_29427[(7)] = inst_29379);

(statearr_29427[(9)] = inst_29378);

return statearr_29427;
})();
var statearr_29428_29456 = state_29415__$1;
(statearr_29428_29456[(2)] = null);

(statearr_29428_29456[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (11))){
var inst_29379 = (state_29415[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29415,(10),Object,null,(9));
var inst_29388 = chs__$1.call(null,inst_29379);
var inst_29389 = done.call(null,inst_29379);
var inst_29390 = cljs.core.async.take_BANG_.call(null,inst_29388,inst_29389);
var state_29415__$1 = state_29415;
var statearr_29429_29457 = state_29415__$1;
(statearr_29429_29457[(2)] = inst_29390);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29415__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (9))){
var inst_29379 = (state_29415[(7)]);
var inst_29392 = (state_29415[(2)]);
var inst_29393 = (inst_29379 + (1));
var inst_29379__$1 = inst_29393;
var state_29415__$1 = (function (){var statearr_29430 = state_29415;
(statearr_29430[(7)] = inst_29379__$1);

(statearr_29430[(10)] = inst_29392);

return statearr_29430;
})();
var statearr_29431_29458 = state_29415__$1;
(statearr_29431_29458[(2)] = null);

(statearr_29431_29458[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (5))){
var inst_29399 = (state_29415[(2)]);
var state_29415__$1 = (function (){var statearr_29432 = state_29415;
(statearr_29432[(11)] = inst_29399);

return statearr_29432;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29415__$1,(12),dchan);
} else {
if((state_val_29416 === (14))){
var inst_29401 = (state_29415[(8)]);
var inst_29406 = cljs.core.apply.call(null,f,inst_29401);
var state_29415__$1 = state_29415;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29415__$1,(16),out,inst_29406);
} else {
if((state_val_29416 === (16))){
var inst_29408 = (state_29415[(2)]);
var state_29415__$1 = (function (){var statearr_29433 = state_29415;
(statearr_29433[(12)] = inst_29408);

return statearr_29433;
})();
var statearr_29434_29459 = state_29415__$1;
(statearr_29434_29459[(2)] = null);

(statearr_29434_29459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (10))){
var inst_29383 = (state_29415[(2)]);
var inst_29384 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29415__$1 = (function (){var statearr_29435 = state_29415;
(statearr_29435[(13)] = inst_29383);

return statearr_29435;
})();
var statearr_29436_29460 = state_29415__$1;
(statearr_29436_29460[(2)] = inst_29384);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29415__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29416 === (8))){
var inst_29397 = (state_29415[(2)]);
var state_29415__$1 = state_29415;
var statearr_29437_29461 = state_29415__$1;
(statearr_29437_29461[(2)] = inst_29397);

(statearr_29437_29461[(1)] = (5));


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
});})(c__21862__auto___29446,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21800__auto__,c__21862__auto___29446,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21801__auto__ = null;
var cljs$core$async$state_machine__21801__auto____0 = (function (){
var statearr_29441 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29441[(0)] = cljs$core$async$state_machine__21801__auto__);

(statearr_29441[(1)] = (1));

return statearr_29441;
});
var cljs$core$async$state_machine__21801__auto____1 = (function (state_29415){
while(true){
var ret_value__21802__auto__ = (function (){try{while(true){
var result__21803__auto__ = switch__21800__auto__.call(null,state_29415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21803__auto__;
}
break;
}
}catch (e29442){if((e29442 instanceof Object)){
var ex__21804__auto__ = e29442;
var statearr_29443_29462 = state_29415;
(statearr_29443_29462[(5)] = ex__21804__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29463 = state_29415;
state_29415 = G__29463;
continue;
} else {
return ret_value__21802__auto__;
}
break;
}
});
cljs$core$async$state_machine__21801__auto__ = function(state_29415){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21801__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21801__auto____1.call(this,state_29415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21801__auto____0;
cljs$core$async$state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21801__auto____1;
return cljs$core$async$state_machine__21801__auto__;
})()
;})(switch__21800__auto__,c__21862__auto___29446,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21864__auto__ = (function (){var statearr_29444 = f__21863__auto__.call(null);
(statearr_29444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21862__auto___29446);

return statearr_29444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21864__auto__);
});})(c__21862__auto___29446,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__29466 = arguments.length;
switch (G__29466) {
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
var c__21862__auto___29521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21862__auto___29521,out){
return (function (){
var f__21863__auto__ = (function (){var switch__21800__auto__ = ((function (c__21862__auto___29521,out){
return (function (state_29496){
var state_val_29497 = (state_29496[(1)]);
if((state_val_29497 === (7))){
var inst_29475 = (state_29496[(7)]);
var inst_29476 = (state_29496[(8)]);
var inst_29475__$1 = (state_29496[(2)]);
var inst_29476__$1 = cljs.core.nth.call(null,inst_29475__$1,(0),null);
var inst_29477 = cljs.core.nth.call(null,inst_29475__$1,(1),null);
var inst_29478 = (inst_29476__$1 == null);
var state_29496__$1 = (function (){var statearr_29498 = state_29496;
(statearr_29498[(7)] = inst_29475__$1);

(statearr_29498[(9)] = inst_29477);

(statearr_29498[(8)] = inst_29476__$1);

return statearr_29498;
})();
if(cljs.core.truth_(inst_29478)){
var statearr_29499_29522 = state_29496__$1;
(statearr_29499_29522[(1)] = (8));

} else {
var statearr_29500_29523 = state_29496__$1;
(statearr_29500_29523[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29497 === (1))){
var inst_29467 = cljs.core.vec.call(null,chs);
var inst_29468 = inst_29467;
var state_29496__$1 = (function (){var statearr_29501 = state_29496;
(statearr_29501[(10)] = inst_29468);

return statearr_29501;
})();
var statearr_29502_29524 = state_29496__$1;
(statearr_29502_29524[(2)] = null);

(statearr_29502_29524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29497 === (4))){
var inst_29468 = (state_29496[(10)]);
var state_29496__$1 = state_29496;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29496__$1,(7),inst_29468);
} else {
if((state_val_29497 === (6))){
var inst_29492 = (state_29496[(2)]);
var state_29496__$1 = state_29496;
var statearr_29503_29525 = state_29496__$1;
(statearr_29503_29525[(2)] = inst_29492);

(statearr_29503_29525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29497 === (3))){
var inst_29494 = (state_29496[(2)]);
var state_29496__$1 = state_29496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29496__$1,inst_29494);
} else {
if((state_val_29497 === (2))){
var inst_29468 = (state_29496[(10)]);
var inst_29470 = cljs.core.count.call(null,inst_29468);
var inst_29471 = (inst_29470 > (0));
var state_29496__$1 = state_29496;
if(cljs.core.truth_(inst_29471)){
var statearr_29505_29526 = state_29496__$1;
(statearr_29505_29526[(1)] = (4));

} else {
var statearr_29506_29527 = state_29496__$1;
(statearr_29506_29527[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29497 === (11))){
var inst_29468 = (state_29496[(10)]);
var inst_29485 = (state_29496[(2)]);
var tmp29504 = inst_29468;
var inst_29468__$1 = tmp29504;
var state_29496__$1 = (function (){var statearr_29507 = state_29496;
(statearr_29507[(10)] = inst_29468__$1);

(statearr_29507[(11)] = inst_29485);

return statearr_29507;
})();
var statearr_29508_29528 = state_29496__$1;
(statearr_29508_29528[(2)] = null);

(statearr_29508_29528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29497 === (9))){
var inst_29476 = (state_29496[(8)]);
var state_29496__$1 = state_29496;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29496__$1,(11),out,inst_29476);
} else {
if((state_val_29497 === (5))){
var inst_29490 = cljs.core.async.close_BANG_.call(null,out);
var state_29496__$1 = state_29496;
var statearr_29509_29529 = state_29496__$1;
(statearr_29509_29529[(2)] = inst_29490);

(statearr_29509_29529[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29497 === (10))){
var inst_29488 = (state_29496[(2)]);
var state_29496__$1 = state_29496;
var statearr_29510_29530 = state_29496__$1;
(statearr_29510_29530[(2)] = inst_29488);

(statearr_29510_29530[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29497 === (8))){
var inst_29468 = (state_29496[(10)]);
var inst_29475 = (state_29496[(7)]);
var inst_29477 = (state_29496[(9)]);
var inst_29476 = (state_29496[(8)]);
var inst_29480 = (function (){var cs = inst_29468;
var vec__29473 = inst_29475;
var v = inst_29476;
var c = inst_29477;
return ((function (cs,vec__29473,v,c,inst_29468,inst_29475,inst_29477,inst_29476,state_val_29497,c__21862__auto___29521,out){
return (function (p1__29464_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29464_SHARP_);
});
;})(cs,vec__29473,v,c,inst_29468,inst_29475,inst_29477,inst_29476,state_val_29497,c__21862__auto___29521,out))
})();
var inst_29481 = cljs.core.filterv.call(null,inst_29480,inst_29468);
var inst_29468__$1 = inst_29481;
var state_29496__$1 = (function (){var statearr_29511 = state_29496;
(statearr_29511[(10)] = inst_29468__$1);

return statearr_29511;
})();
var statearr_29512_29531 = state_29496__$1;
(statearr_29512_29531[(2)] = null);

(statearr_29512_29531[(1)] = (2));


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
});})(c__21862__auto___29521,out))
;
return ((function (switch__21800__auto__,c__21862__auto___29521,out){
return (function() {
var cljs$core$async$state_machine__21801__auto__ = null;
var cljs$core$async$state_machine__21801__auto____0 = (function (){
var statearr_29516 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29516[(0)] = cljs$core$async$state_machine__21801__auto__);

(statearr_29516[(1)] = (1));

return statearr_29516;
});
var cljs$core$async$state_machine__21801__auto____1 = (function (state_29496){
while(true){
var ret_value__21802__auto__ = (function (){try{while(true){
var result__21803__auto__ = switch__21800__auto__.call(null,state_29496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21803__auto__;
}
break;
}
}catch (e29517){if((e29517 instanceof Object)){
var ex__21804__auto__ = e29517;
var statearr_29518_29532 = state_29496;
(statearr_29518_29532[(5)] = ex__21804__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29533 = state_29496;
state_29496 = G__29533;
continue;
} else {
return ret_value__21802__auto__;
}
break;
}
});
cljs$core$async$state_machine__21801__auto__ = function(state_29496){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21801__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21801__auto____1.call(this,state_29496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21801__auto____0;
cljs$core$async$state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21801__auto____1;
return cljs$core$async$state_machine__21801__auto__;
})()
;})(switch__21800__auto__,c__21862__auto___29521,out))
})();
var state__21864__auto__ = (function (){var statearr_29519 = f__21863__auto__.call(null);
(statearr_29519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21862__auto___29521);

return statearr_29519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21864__auto__);
});})(c__21862__auto___29521,out))
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
var G__29535 = arguments.length;
switch (G__29535) {
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
var c__21862__auto___29583 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21862__auto___29583,out){
return (function (){
var f__21863__auto__ = (function (){var switch__21800__auto__ = ((function (c__21862__auto___29583,out){
return (function (state_29559){
var state_val_29560 = (state_29559[(1)]);
if((state_val_29560 === (7))){
var inst_29541 = (state_29559[(7)]);
var inst_29541__$1 = (state_29559[(2)]);
var inst_29542 = (inst_29541__$1 == null);
var inst_29543 = cljs.core.not.call(null,inst_29542);
var state_29559__$1 = (function (){var statearr_29561 = state_29559;
(statearr_29561[(7)] = inst_29541__$1);

return statearr_29561;
})();
if(inst_29543){
var statearr_29562_29584 = state_29559__$1;
(statearr_29562_29584[(1)] = (8));

} else {
var statearr_29563_29585 = state_29559__$1;
(statearr_29563_29585[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29560 === (1))){
var inst_29536 = (0);
var state_29559__$1 = (function (){var statearr_29564 = state_29559;
(statearr_29564[(8)] = inst_29536);

return statearr_29564;
})();
var statearr_29565_29586 = state_29559__$1;
(statearr_29565_29586[(2)] = null);

(statearr_29565_29586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29560 === (4))){
var state_29559__$1 = state_29559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29559__$1,(7),ch);
} else {
if((state_val_29560 === (6))){
var inst_29554 = (state_29559[(2)]);
var state_29559__$1 = state_29559;
var statearr_29566_29587 = state_29559__$1;
(statearr_29566_29587[(2)] = inst_29554);

(statearr_29566_29587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29560 === (3))){
var inst_29556 = (state_29559[(2)]);
var inst_29557 = cljs.core.async.close_BANG_.call(null,out);
var state_29559__$1 = (function (){var statearr_29567 = state_29559;
(statearr_29567[(9)] = inst_29556);

return statearr_29567;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29559__$1,inst_29557);
} else {
if((state_val_29560 === (2))){
var inst_29536 = (state_29559[(8)]);
var inst_29538 = (inst_29536 < n);
var state_29559__$1 = state_29559;
if(cljs.core.truth_(inst_29538)){
var statearr_29568_29588 = state_29559__$1;
(statearr_29568_29588[(1)] = (4));

} else {
var statearr_29569_29589 = state_29559__$1;
(statearr_29569_29589[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29560 === (11))){
var inst_29536 = (state_29559[(8)]);
var inst_29546 = (state_29559[(2)]);
var inst_29547 = (inst_29536 + (1));
var inst_29536__$1 = inst_29547;
var state_29559__$1 = (function (){var statearr_29570 = state_29559;
(statearr_29570[(10)] = inst_29546);

(statearr_29570[(8)] = inst_29536__$1);

return statearr_29570;
})();
var statearr_29571_29590 = state_29559__$1;
(statearr_29571_29590[(2)] = null);

(statearr_29571_29590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29560 === (9))){
var state_29559__$1 = state_29559;
var statearr_29572_29591 = state_29559__$1;
(statearr_29572_29591[(2)] = null);

(statearr_29572_29591[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29560 === (5))){
var state_29559__$1 = state_29559;
var statearr_29573_29592 = state_29559__$1;
(statearr_29573_29592[(2)] = null);

(statearr_29573_29592[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29560 === (10))){
var inst_29551 = (state_29559[(2)]);
var state_29559__$1 = state_29559;
var statearr_29574_29593 = state_29559__$1;
(statearr_29574_29593[(2)] = inst_29551);

(statearr_29574_29593[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29560 === (8))){
var inst_29541 = (state_29559[(7)]);
var state_29559__$1 = state_29559;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29559__$1,(11),out,inst_29541);
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
});})(c__21862__auto___29583,out))
;
return ((function (switch__21800__auto__,c__21862__auto___29583,out){
return (function() {
var cljs$core$async$state_machine__21801__auto__ = null;
var cljs$core$async$state_machine__21801__auto____0 = (function (){
var statearr_29578 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29578[(0)] = cljs$core$async$state_machine__21801__auto__);

(statearr_29578[(1)] = (1));

return statearr_29578;
});
var cljs$core$async$state_machine__21801__auto____1 = (function (state_29559){
while(true){
var ret_value__21802__auto__ = (function (){try{while(true){
var result__21803__auto__ = switch__21800__auto__.call(null,state_29559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21803__auto__;
}
break;
}
}catch (e29579){if((e29579 instanceof Object)){
var ex__21804__auto__ = e29579;
var statearr_29580_29594 = state_29559;
(statearr_29580_29594[(5)] = ex__21804__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29595 = state_29559;
state_29559 = G__29595;
continue;
} else {
return ret_value__21802__auto__;
}
break;
}
});
cljs$core$async$state_machine__21801__auto__ = function(state_29559){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21801__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21801__auto____1.call(this,state_29559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21801__auto____0;
cljs$core$async$state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21801__auto____1;
return cljs$core$async$state_machine__21801__auto__;
})()
;})(switch__21800__auto__,c__21862__auto___29583,out))
})();
var state__21864__auto__ = (function (){var statearr_29581 = f__21863__auto__.call(null);
(statearr_29581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21862__auto___29583);

return statearr_29581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21864__auto__);
});})(c__21862__auto___29583,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t29603 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29603 = (function (map_LT_,f,ch,meta29604){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29604 = meta29604;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29605,meta29604__$1){
var self__ = this;
var _29605__$1 = this;
return (new cljs.core.async.t29603(self__.map_LT_,self__.f,self__.ch,meta29604__$1));
});

cljs.core.async.t29603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29605){
var self__ = this;
var _29605__$1 = this;
return self__.meta29604;
});

cljs.core.async.t29603.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29603.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29603.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29603.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29603.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t29606 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29606 = (function (map_LT_,f,ch,meta29604,_,fn1,meta29607){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29604 = meta29604;
this._ = _;
this.fn1 = fn1;
this.meta29607 = meta29607;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29608,meta29607__$1){
var self__ = this;
var _29608__$1 = this;
return (new cljs.core.async.t29606(self__.map_LT_,self__.f,self__.ch,self__.meta29604,self__._,self__.fn1,meta29607__$1));
});})(___$1))
;

cljs.core.async.t29606.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29608){
var self__ = this;
var _29608__$1 = this;
return self__.meta29607;
});})(___$1))
;

cljs.core.async.t29606.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29606.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t29606.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29596_SHARP_){
return f1.call(null,(((p1__29596_SHARP_ == null))?null:self__.f.call(null,p1__29596_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t29606.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29604","meta29604",553503717,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29607","meta29607",405898757,null)], null);
});})(___$1))
;

cljs.core.async.t29606.cljs$lang$type = true;

cljs.core.async.t29606.cljs$lang$ctorStr = "cljs.core.async/t29606";

cljs.core.async.t29606.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18666__auto__,writer__18667__auto__,opt__18668__auto__){
return cljs.core._write.call(null,writer__18667__auto__,"cljs.core.async/t29606");
});})(___$1))
;

cljs.core.async.__GT_t29606 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t29606(map_LT___$1,f__$1,ch__$1,meta29604__$1,___$2,fn1__$1,meta29607){
return (new cljs.core.async.t29606(map_LT___$1,f__$1,ch__$1,meta29604__$1,___$2,fn1__$1,meta29607));
});})(___$1))
;

}

return (new cljs.core.async.t29606(self__.map_LT_,self__.f,self__.ch,self__.meta29604,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t29603.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29603.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t29603.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29604","meta29604",553503717,null)], null);
});

cljs.core.async.t29603.cljs$lang$type = true;

cljs.core.async.t29603.cljs$lang$ctorStr = "cljs.core.async/t29603";

cljs.core.async.t29603.cljs$lang$ctorPrWriter = (function (this__18666__auto__,writer__18667__auto__,opt__18668__auto__){
return cljs.core._write.call(null,writer__18667__auto__,"cljs.core.async/t29603");
});

cljs.core.async.__GT_t29603 = (function cljs$core$async$map_LT__$___GT_t29603(map_LT___$1,f__$1,ch__$1,meta29604){
return (new cljs.core.async.t29603(map_LT___$1,f__$1,ch__$1,meta29604));
});

}

return (new cljs.core.async.t29603(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t29612 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29612 = (function (map_GT_,f,ch,meta29613){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29613 = meta29613;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29614,meta29613__$1){
var self__ = this;
var _29614__$1 = this;
return (new cljs.core.async.t29612(self__.map_GT_,self__.f,self__.ch,meta29613__$1));
});

cljs.core.async.t29612.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29614){
var self__ = this;
var _29614__$1 = this;
return self__.meta29613;
});

cljs.core.async.t29612.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29612.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29612.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29612.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t29612.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29612.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t29612.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29613","meta29613",1642344967,null)], null);
});

cljs.core.async.t29612.cljs$lang$type = true;

cljs.core.async.t29612.cljs$lang$ctorStr = "cljs.core.async/t29612";

cljs.core.async.t29612.cljs$lang$ctorPrWriter = (function (this__18666__auto__,writer__18667__auto__,opt__18668__auto__){
return cljs.core._write.call(null,writer__18667__auto__,"cljs.core.async/t29612");
});

cljs.core.async.__GT_t29612 = (function cljs$core$async$map_GT__$___GT_t29612(map_GT___$1,f__$1,ch__$1,meta29613){
return (new cljs.core.async.t29612(map_GT___$1,f__$1,ch__$1,meta29613));
});

}

return (new cljs.core.async.t29612(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t29618 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29618 = (function (filter_GT_,p,ch,meta29619){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29619 = meta29619;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t29618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29620,meta29619__$1){
var self__ = this;
var _29620__$1 = this;
return (new cljs.core.async.t29618(self__.filter_GT_,self__.p,self__.ch,meta29619__$1));
});

cljs.core.async.t29618.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29620){
var self__ = this;
var _29620__$1 = this;
return self__.meta29619;
});

cljs.core.async.t29618.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29618.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29618.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29618.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29618.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t29618.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29618.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t29618.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29619","meta29619",344761028,null)], null);
});

cljs.core.async.t29618.cljs$lang$type = true;

cljs.core.async.t29618.cljs$lang$ctorStr = "cljs.core.async/t29618";

cljs.core.async.t29618.cljs$lang$ctorPrWriter = (function (this__18666__auto__,writer__18667__auto__,opt__18668__auto__){
return cljs.core._write.call(null,writer__18667__auto__,"cljs.core.async/t29618");
});

cljs.core.async.__GT_t29618 = (function cljs$core$async$filter_GT__$___GT_t29618(filter_GT___$1,p__$1,ch__$1,meta29619){
return (new cljs.core.async.t29618(filter_GT___$1,p__$1,ch__$1,meta29619));
});

}

return (new cljs.core.async.t29618(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__29622 = arguments.length;
switch (G__29622) {
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
var c__21862__auto___29665 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21862__auto___29665,out){
return (function (){
var f__21863__auto__ = (function (){var switch__21800__auto__ = ((function (c__21862__auto___29665,out){
return (function (state_29643){
var state_val_29644 = (state_29643[(1)]);
if((state_val_29644 === (7))){
var inst_29639 = (state_29643[(2)]);
var state_29643__$1 = state_29643;
var statearr_29645_29666 = state_29643__$1;
(statearr_29645_29666[(2)] = inst_29639);

(statearr_29645_29666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29644 === (1))){
var state_29643__$1 = state_29643;
var statearr_29646_29667 = state_29643__$1;
(statearr_29646_29667[(2)] = null);

(statearr_29646_29667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29644 === (4))){
var inst_29625 = (state_29643[(7)]);
var inst_29625__$1 = (state_29643[(2)]);
var inst_29626 = (inst_29625__$1 == null);
var state_29643__$1 = (function (){var statearr_29647 = state_29643;
(statearr_29647[(7)] = inst_29625__$1);

return statearr_29647;
})();
if(cljs.core.truth_(inst_29626)){
var statearr_29648_29668 = state_29643__$1;
(statearr_29648_29668[(1)] = (5));

} else {
var statearr_29649_29669 = state_29643__$1;
(statearr_29649_29669[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29644 === (6))){
var inst_29625 = (state_29643[(7)]);
var inst_29630 = p.call(null,inst_29625);
var state_29643__$1 = state_29643;
if(cljs.core.truth_(inst_29630)){
var statearr_29650_29670 = state_29643__$1;
(statearr_29650_29670[(1)] = (8));

} else {
var statearr_29651_29671 = state_29643__$1;
(statearr_29651_29671[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29644 === (3))){
var inst_29641 = (state_29643[(2)]);
var state_29643__$1 = state_29643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29643__$1,inst_29641);
} else {
if((state_val_29644 === (2))){
var state_29643__$1 = state_29643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29643__$1,(4),ch);
} else {
if((state_val_29644 === (11))){
var inst_29633 = (state_29643[(2)]);
var state_29643__$1 = state_29643;
var statearr_29652_29672 = state_29643__$1;
(statearr_29652_29672[(2)] = inst_29633);

(statearr_29652_29672[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29644 === (9))){
var state_29643__$1 = state_29643;
var statearr_29653_29673 = state_29643__$1;
(statearr_29653_29673[(2)] = null);

(statearr_29653_29673[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29644 === (5))){
var inst_29628 = cljs.core.async.close_BANG_.call(null,out);
var state_29643__$1 = state_29643;
var statearr_29654_29674 = state_29643__$1;
(statearr_29654_29674[(2)] = inst_29628);

(statearr_29654_29674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29644 === (10))){
var inst_29636 = (state_29643[(2)]);
var state_29643__$1 = (function (){var statearr_29655 = state_29643;
(statearr_29655[(8)] = inst_29636);

return statearr_29655;
})();
var statearr_29656_29675 = state_29643__$1;
(statearr_29656_29675[(2)] = null);

(statearr_29656_29675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29644 === (8))){
var inst_29625 = (state_29643[(7)]);
var state_29643__$1 = state_29643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29643__$1,(11),out,inst_29625);
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
});})(c__21862__auto___29665,out))
;
return ((function (switch__21800__auto__,c__21862__auto___29665,out){
return (function() {
var cljs$core$async$state_machine__21801__auto__ = null;
var cljs$core$async$state_machine__21801__auto____0 = (function (){
var statearr_29660 = [null,null,null,null,null,null,null,null,null];
(statearr_29660[(0)] = cljs$core$async$state_machine__21801__auto__);

(statearr_29660[(1)] = (1));

return statearr_29660;
});
var cljs$core$async$state_machine__21801__auto____1 = (function (state_29643){
while(true){
var ret_value__21802__auto__ = (function (){try{while(true){
var result__21803__auto__ = switch__21800__auto__.call(null,state_29643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21803__auto__;
}
break;
}
}catch (e29661){if((e29661 instanceof Object)){
var ex__21804__auto__ = e29661;
var statearr_29662_29676 = state_29643;
(statearr_29662_29676[(5)] = ex__21804__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29677 = state_29643;
state_29643 = G__29677;
continue;
} else {
return ret_value__21802__auto__;
}
break;
}
});
cljs$core$async$state_machine__21801__auto__ = function(state_29643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21801__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21801__auto____1.call(this,state_29643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21801__auto____0;
cljs$core$async$state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21801__auto____1;
return cljs$core$async$state_machine__21801__auto__;
})()
;})(switch__21800__auto__,c__21862__auto___29665,out))
})();
var state__21864__auto__ = (function (){var statearr_29663 = f__21863__auto__.call(null);
(statearr_29663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21862__auto___29665);

return statearr_29663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21864__auto__);
});})(c__21862__auto___29665,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__29679 = arguments.length;
switch (G__29679) {
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
var c__21862__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21862__auto__){
return (function (){
var f__21863__auto__ = (function (){var switch__21800__auto__ = ((function (c__21862__auto__){
return (function (state_29846){
var state_val_29847 = (state_29846[(1)]);
if((state_val_29847 === (7))){
var inst_29842 = (state_29846[(2)]);
var state_29846__$1 = state_29846;
var statearr_29848_29889 = state_29846__$1;
(statearr_29848_29889[(2)] = inst_29842);

(statearr_29848_29889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (20))){
var inst_29812 = (state_29846[(7)]);
var inst_29823 = (state_29846[(2)]);
var inst_29824 = cljs.core.next.call(null,inst_29812);
var inst_29798 = inst_29824;
var inst_29799 = null;
var inst_29800 = (0);
var inst_29801 = (0);
var state_29846__$1 = (function (){var statearr_29849 = state_29846;
(statearr_29849[(8)] = inst_29799);

(statearr_29849[(9)] = inst_29823);

(statearr_29849[(10)] = inst_29800);

(statearr_29849[(11)] = inst_29801);

(statearr_29849[(12)] = inst_29798);

return statearr_29849;
})();
var statearr_29850_29890 = state_29846__$1;
(statearr_29850_29890[(2)] = null);

(statearr_29850_29890[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (1))){
var state_29846__$1 = state_29846;
var statearr_29851_29891 = state_29846__$1;
(statearr_29851_29891[(2)] = null);

(statearr_29851_29891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (4))){
var inst_29787 = (state_29846[(13)]);
var inst_29787__$1 = (state_29846[(2)]);
var inst_29788 = (inst_29787__$1 == null);
var state_29846__$1 = (function (){var statearr_29852 = state_29846;
(statearr_29852[(13)] = inst_29787__$1);

return statearr_29852;
})();
if(cljs.core.truth_(inst_29788)){
var statearr_29853_29892 = state_29846__$1;
(statearr_29853_29892[(1)] = (5));

} else {
var statearr_29854_29893 = state_29846__$1;
(statearr_29854_29893[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (15))){
var state_29846__$1 = state_29846;
var statearr_29858_29894 = state_29846__$1;
(statearr_29858_29894[(2)] = null);

(statearr_29858_29894[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (21))){
var state_29846__$1 = state_29846;
var statearr_29859_29895 = state_29846__$1;
(statearr_29859_29895[(2)] = null);

(statearr_29859_29895[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (13))){
var inst_29799 = (state_29846[(8)]);
var inst_29800 = (state_29846[(10)]);
var inst_29801 = (state_29846[(11)]);
var inst_29798 = (state_29846[(12)]);
var inst_29808 = (state_29846[(2)]);
var inst_29809 = (inst_29801 + (1));
var tmp29855 = inst_29799;
var tmp29856 = inst_29800;
var tmp29857 = inst_29798;
var inst_29798__$1 = tmp29857;
var inst_29799__$1 = tmp29855;
var inst_29800__$1 = tmp29856;
var inst_29801__$1 = inst_29809;
var state_29846__$1 = (function (){var statearr_29860 = state_29846;
(statearr_29860[(14)] = inst_29808);

(statearr_29860[(8)] = inst_29799__$1);

(statearr_29860[(10)] = inst_29800__$1);

(statearr_29860[(11)] = inst_29801__$1);

(statearr_29860[(12)] = inst_29798__$1);

return statearr_29860;
})();
var statearr_29861_29896 = state_29846__$1;
(statearr_29861_29896[(2)] = null);

(statearr_29861_29896[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (22))){
var state_29846__$1 = state_29846;
var statearr_29862_29897 = state_29846__$1;
(statearr_29862_29897[(2)] = null);

(statearr_29862_29897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (6))){
var inst_29787 = (state_29846[(13)]);
var inst_29796 = f.call(null,inst_29787);
var inst_29797 = cljs.core.seq.call(null,inst_29796);
var inst_29798 = inst_29797;
var inst_29799 = null;
var inst_29800 = (0);
var inst_29801 = (0);
var state_29846__$1 = (function (){var statearr_29863 = state_29846;
(statearr_29863[(8)] = inst_29799);

(statearr_29863[(10)] = inst_29800);

(statearr_29863[(11)] = inst_29801);

(statearr_29863[(12)] = inst_29798);

return statearr_29863;
})();
var statearr_29864_29898 = state_29846__$1;
(statearr_29864_29898[(2)] = null);

(statearr_29864_29898[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (17))){
var inst_29812 = (state_29846[(7)]);
var inst_29816 = cljs.core.chunk_first.call(null,inst_29812);
var inst_29817 = cljs.core.chunk_rest.call(null,inst_29812);
var inst_29818 = cljs.core.count.call(null,inst_29816);
var inst_29798 = inst_29817;
var inst_29799 = inst_29816;
var inst_29800 = inst_29818;
var inst_29801 = (0);
var state_29846__$1 = (function (){var statearr_29865 = state_29846;
(statearr_29865[(8)] = inst_29799);

(statearr_29865[(10)] = inst_29800);

(statearr_29865[(11)] = inst_29801);

(statearr_29865[(12)] = inst_29798);

return statearr_29865;
})();
var statearr_29866_29899 = state_29846__$1;
(statearr_29866_29899[(2)] = null);

(statearr_29866_29899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (3))){
var inst_29844 = (state_29846[(2)]);
var state_29846__$1 = state_29846;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29846__$1,inst_29844);
} else {
if((state_val_29847 === (12))){
var inst_29832 = (state_29846[(2)]);
var state_29846__$1 = state_29846;
var statearr_29867_29900 = state_29846__$1;
(statearr_29867_29900[(2)] = inst_29832);

(statearr_29867_29900[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (2))){
var state_29846__$1 = state_29846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29846__$1,(4),in$);
} else {
if((state_val_29847 === (23))){
var inst_29840 = (state_29846[(2)]);
var state_29846__$1 = state_29846;
var statearr_29868_29901 = state_29846__$1;
(statearr_29868_29901[(2)] = inst_29840);

(statearr_29868_29901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (19))){
var inst_29827 = (state_29846[(2)]);
var state_29846__$1 = state_29846;
var statearr_29869_29902 = state_29846__$1;
(statearr_29869_29902[(2)] = inst_29827);

(statearr_29869_29902[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (11))){
var inst_29812 = (state_29846[(7)]);
var inst_29798 = (state_29846[(12)]);
var inst_29812__$1 = cljs.core.seq.call(null,inst_29798);
var state_29846__$1 = (function (){var statearr_29870 = state_29846;
(statearr_29870[(7)] = inst_29812__$1);

return statearr_29870;
})();
if(inst_29812__$1){
var statearr_29871_29903 = state_29846__$1;
(statearr_29871_29903[(1)] = (14));

} else {
var statearr_29872_29904 = state_29846__$1;
(statearr_29872_29904[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (9))){
var inst_29834 = (state_29846[(2)]);
var inst_29835 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29846__$1 = (function (){var statearr_29873 = state_29846;
(statearr_29873[(15)] = inst_29834);

return statearr_29873;
})();
if(cljs.core.truth_(inst_29835)){
var statearr_29874_29905 = state_29846__$1;
(statearr_29874_29905[(1)] = (21));

} else {
var statearr_29875_29906 = state_29846__$1;
(statearr_29875_29906[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (5))){
var inst_29790 = cljs.core.async.close_BANG_.call(null,out);
var state_29846__$1 = state_29846;
var statearr_29876_29907 = state_29846__$1;
(statearr_29876_29907[(2)] = inst_29790);

(statearr_29876_29907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (14))){
var inst_29812 = (state_29846[(7)]);
var inst_29814 = cljs.core.chunked_seq_QMARK_.call(null,inst_29812);
var state_29846__$1 = state_29846;
if(inst_29814){
var statearr_29877_29908 = state_29846__$1;
(statearr_29877_29908[(1)] = (17));

} else {
var statearr_29878_29909 = state_29846__$1;
(statearr_29878_29909[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (16))){
var inst_29830 = (state_29846[(2)]);
var state_29846__$1 = state_29846;
var statearr_29879_29910 = state_29846__$1;
(statearr_29879_29910[(2)] = inst_29830);

(statearr_29879_29910[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29847 === (10))){
var inst_29799 = (state_29846[(8)]);
var inst_29801 = (state_29846[(11)]);
var inst_29806 = cljs.core._nth.call(null,inst_29799,inst_29801);
var state_29846__$1 = state_29846;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29846__$1,(13),out,inst_29806);
} else {
if((state_val_29847 === (18))){
var inst_29812 = (state_29846[(7)]);
var inst_29821 = cljs.core.first.call(null,inst_29812);
var state_29846__$1 = state_29846;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29846__$1,(20),out,inst_29821);
} else {
if((state_val_29847 === (8))){
var inst_29800 = (state_29846[(10)]);
var inst_29801 = (state_29846[(11)]);
var inst_29803 = (inst_29801 < inst_29800);
var inst_29804 = inst_29803;
var state_29846__$1 = state_29846;
if(cljs.core.truth_(inst_29804)){
var statearr_29880_29911 = state_29846__$1;
(statearr_29880_29911[(1)] = (10));

} else {
var statearr_29881_29912 = state_29846__$1;
(statearr_29881_29912[(1)] = (11));

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
});})(c__21862__auto__))
;
return ((function (switch__21800__auto__,c__21862__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21801__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21801__auto____0 = (function (){
var statearr_29885 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29885[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21801__auto__);

(statearr_29885[(1)] = (1));

return statearr_29885;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21801__auto____1 = (function (state_29846){
while(true){
var ret_value__21802__auto__ = (function (){try{while(true){
var result__21803__auto__ = switch__21800__auto__.call(null,state_29846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21803__auto__;
}
break;
}
}catch (e29886){if((e29886 instanceof Object)){
var ex__21804__auto__ = e29886;
var statearr_29887_29913 = state_29846;
(statearr_29887_29913[(5)] = ex__21804__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29914 = state_29846;
state_29846 = G__29914;
continue;
} else {
return ret_value__21802__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21801__auto__ = function(state_29846){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21801__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21801__auto____1.call(this,state_29846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21801__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21801__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21801__auto__;
})()
;})(switch__21800__auto__,c__21862__auto__))
})();
var state__21864__auto__ = (function (){var statearr_29888 = f__21863__auto__.call(null);
(statearr_29888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21862__auto__);

return statearr_29888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21864__auto__);
});})(c__21862__auto__))
);

return c__21862__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__29916 = arguments.length;
switch (G__29916) {
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
var G__29919 = arguments.length;
switch (G__29919) {
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
var G__29922 = arguments.length;
switch (G__29922) {
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
var c__21862__auto___29972 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21862__auto___29972,out){
return (function (){
var f__21863__auto__ = (function (){var switch__21800__auto__ = ((function (c__21862__auto___29972,out){
return (function (state_29946){
var state_val_29947 = (state_29946[(1)]);
if((state_val_29947 === (7))){
var inst_29941 = (state_29946[(2)]);
var state_29946__$1 = state_29946;
var statearr_29948_29973 = state_29946__$1;
(statearr_29948_29973[(2)] = inst_29941);

(statearr_29948_29973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29947 === (1))){
var inst_29923 = null;
var state_29946__$1 = (function (){var statearr_29949 = state_29946;
(statearr_29949[(7)] = inst_29923);

return statearr_29949;
})();
var statearr_29950_29974 = state_29946__$1;
(statearr_29950_29974[(2)] = null);

(statearr_29950_29974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29947 === (4))){
var inst_29926 = (state_29946[(8)]);
var inst_29926__$1 = (state_29946[(2)]);
var inst_29927 = (inst_29926__$1 == null);
var inst_29928 = cljs.core.not.call(null,inst_29927);
var state_29946__$1 = (function (){var statearr_29951 = state_29946;
(statearr_29951[(8)] = inst_29926__$1);

return statearr_29951;
})();
if(inst_29928){
var statearr_29952_29975 = state_29946__$1;
(statearr_29952_29975[(1)] = (5));

} else {
var statearr_29953_29976 = state_29946__$1;
(statearr_29953_29976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29947 === (6))){
var state_29946__$1 = state_29946;
var statearr_29954_29977 = state_29946__$1;
(statearr_29954_29977[(2)] = null);

(statearr_29954_29977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29947 === (3))){
var inst_29943 = (state_29946[(2)]);
var inst_29944 = cljs.core.async.close_BANG_.call(null,out);
var state_29946__$1 = (function (){var statearr_29955 = state_29946;
(statearr_29955[(9)] = inst_29943);

return statearr_29955;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29946__$1,inst_29944);
} else {
if((state_val_29947 === (2))){
var state_29946__$1 = state_29946;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29946__$1,(4),ch);
} else {
if((state_val_29947 === (11))){
var inst_29926 = (state_29946[(8)]);
var inst_29935 = (state_29946[(2)]);
var inst_29923 = inst_29926;
var state_29946__$1 = (function (){var statearr_29956 = state_29946;
(statearr_29956[(10)] = inst_29935);

(statearr_29956[(7)] = inst_29923);

return statearr_29956;
})();
var statearr_29957_29978 = state_29946__$1;
(statearr_29957_29978[(2)] = null);

(statearr_29957_29978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29947 === (9))){
var inst_29926 = (state_29946[(8)]);
var state_29946__$1 = state_29946;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29946__$1,(11),out,inst_29926);
} else {
if((state_val_29947 === (5))){
var inst_29923 = (state_29946[(7)]);
var inst_29926 = (state_29946[(8)]);
var inst_29930 = cljs.core._EQ_.call(null,inst_29926,inst_29923);
var state_29946__$1 = state_29946;
if(inst_29930){
var statearr_29959_29979 = state_29946__$1;
(statearr_29959_29979[(1)] = (8));

} else {
var statearr_29960_29980 = state_29946__$1;
(statearr_29960_29980[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29947 === (10))){
var inst_29938 = (state_29946[(2)]);
var state_29946__$1 = state_29946;
var statearr_29961_29981 = state_29946__$1;
(statearr_29961_29981[(2)] = inst_29938);

(statearr_29961_29981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29947 === (8))){
var inst_29923 = (state_29946[(7)]);
var tmp29958 = inst_29923;
var inst_29923__$1 = tmp29958;
var state_29946__$1 = (function (){var statearr_29962 = state_29946;
(statearr_29962[(7)] = inst_29923__$1);

return statearr_29962;
})();
var statearr_29963_29982 = state_29946__$1;
(statearr_29963_29982[(2)] = null);

(statearr_29963_29982[(1)] = (2));


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
});})(c__21862__auto___29972,out))
;
return ((function (switch__21800__auto__,c__21862__auto___29972,out){
return (function() {
var cljs$core$async$state_machine__21801__auto__ = null;
var cljs$core$async$state_machine__21801__auto____0 = (function (){
var statearr_29967 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29967[(0)] = cljs$core$async$state_machine__21801__auto__);

(statearr_29967[(1)] = (1));

return statearr_29967;
});
var cljs$core$async$state_machine__21801__auto____1 = (function (state_29946){
while(true){
var ret_value__21802__auto__ = (function (){try{while(true){
var result__21803__auto__ = switch__21800__auto__.call(null,state_29946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21803__auto__;
}
break;
}
}catch (e29968){if((e29968 instanceof Object)){
var ex__21804__auto__ = e29968;
var statearr_29969_29983 = state_29946;
(statearr_29969_29983[(5)] = ex__21804__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29984 = state_29946;
state_29946 = G__29984;
continue;
} else {
return ret_value__21802__auto__;
}
break;
}
});
cljs$core$async$state_machine__21801__auto__ = function(state_29946){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21801__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21801__auto____1.call(this,state_29946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21801__auto____0;
cljs$core$async$state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21801__auto____1;
return cljs$core$async$state_machine__21801__auto__;
})()
;})(switch__21800__auto__,c__21862__auto___29972,out))
})();
var state__21864__auto__ = (function (){var statearr_29970 = f__21863__auto__.call(null);
(statearr_29970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21862__auto___29972);

return statearr_29970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21864__auto__);
});})(c__21862__auto___29972,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__29986 = arguments.length;
switch (G__29986) {
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
var c__21862__auto___30055 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21862__auto___30055,out){
return (function (){
var f__21863__auto__ = (function (){var switch__21800__auto__ = ((function (c__21862__auto___30055,out){
return (function (state_30024){
var state_val_30025 = (state_30024[(1)]);
if((state_val_30025 === (7))){
var inst_30020 = (state_30024[(2)]);
var state_30024__$1 = state_30024;
var statearr_30026_30056 = state_30024__$1;
(statearr_30026_30056[(2)] = inst_30020);

(statearr_30026_30056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (1))){
var inst_29987 = (new Array(n));
var inst_29988 = inst_29987;
var inst_29989 = (0);
var state_30024__$1 = (function (){var statearr_30027 = state_30024;
(statearr_30027[(7)] = inst_29989);

(statearr_30027[(8)] = inst_29988);

return statearr_30027;
})();
var statearr_30028_30057 = state_30024__$1;
(statearr_30028_30057[(2)] = null);

(statearr_30028_30057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (4))){
var inst_29992 = (state_30024[(9)]);
var inst_29992__$1 = (state_30024[(2)]);
var inst_29993 = (inst_29992__$1 == null);
var inst_29994 = cljs.core.not.call(null,inst_29993);
var state_30024__$1 = (function (){var statearr_30029 = state_30024;
(statearr_30029[(9)] = inst_29992__$1);

return statearr_30029;
})();
if(inst_29994){
var statearr_30030_30058 = state_30024__$1;
(statearr_30030_30058[(1)] = (5));

} else {
var statearr_30031_30059 = state_30024__$1;
(statearr_30031_30059[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (15))){
var inst_30014 = (state_30024[(2)]);
var state_30024__$1 = state_30024;
var statearr_30032_30060 = state_30024__$1;
(statearr_30032_30060[(2)] = inst_30014);

(statearr_30032_30060[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (13))){
var state_30024__$1 = state_30024;
var statearr_30033_30061 = state_30024__$1;
(statearr_30033_30061[(2)] = null);

(statearr_30033_30061[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (6))){
var inst_29989 = (state_30024[(7)]);
var inst_30010 = (inst_29989 > (0));
var state_30024__$1 = state_30024;
if(cljs.core.truth_(inst_30010)){
var statearr_30034_30062 = state_30024__$1;
(statearr_30034_30062[(1)] = (12));

} else {
var statearr_30035_30063 = state_30024__$1;
(statearr_30035_30063[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (3))){
var inst_30022 = (state_30024[(2)]);
var state_30024__$1 = state_30024;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30024__$1,inst_30022);
} else {
if((state_val_30025 === (12))){
var inst_29988 = (state_30024[(8)]);
var inst_30012 = cljs.core.vec.call(null,inst_29988);
var state_30024__$1 = state_30024;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30024__$1,(15),out,inst_30012);
} else {
if((state_val_30025 === (2))){
var state_30024__$1 = state_30024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30024__$1,(4),ch);
} else {
if((state_val_30025 === (11))){
var inst_30004 = (state_30024[(2)]);
var inst_30005 = (new Array(n));
var inst_29988 = inst_30005;
var inst_29989 = (0);
var state_30024__$1 = (function (){var statearr_30036 = state_30024;
(statearr_30036[(7)] = inst_29989);

(statearr_30036[(10)] = inst_30004);

(statearr_30036[(8)] = inst_29988);

return statearr_30036;
})();
var statearr_30037_30064 = state_30024__$1;
(statearr_30037_30064[(2)] = null);

(statearr_30037_30064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (9))){
var inst_29988 = (state_30024[(8)]);
var inst_30002 = cljs.core.vec.call(null,inst_29988);
var state_30024__$1 = state_30024;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30024__$1,(11),out,inst_30002);
} else {
if((state_val_30025 === (5))){
var inst_29989 = (state_30024[(7)]);
var inst_29992 = (state_30024[(9)]);
var inst_29988 = (state_30024[(8)]);
var inst_29997 = (state_30024[(11)]);
var inst_29996 = (inst_29988[inst_29989] = inst_29992);
var inst_29997__$1 = (inst_29989 + (1));
var inst_29998 = (inst_29997__$1 < n);
var state_30024__$1 = (function (){var statearr_30038 = state_30024;
(statearr_30038[(12)] = inst_29996);

(statearr_30038[(11)] = inst_29997__$1);

return statearr_30038;
})();
if(cljs.core.truth_(inst_29998)){
var statearr_30039_30065 = state_30024__$1;
(statearr_30039_30065[(1)] = (8));

} else {
var statearr_30040_30066 = state_30024__$1;
(statearr_30040_30066[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (14))){
var inst_30017 = (state_30024[(2)]);
var inst_30018 = cljs.core.async.close_BANG_.call(null,out);
var state_30024__$1 = (function (){var statearr_30042 = state_30024;
(statearr_30042[(13)] = inst_30017);

return statearr_30042;
})();
var statearr_30043_30067 = state_30024__$1;
(statearr_30043_30067[(2)] = inst_30018);

(statearr_30043_30067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (10))){
var inst_30008 = (state_30024[(2)]);
var state_30024__$1 = state_30024;
var statearr_30044_30068 = state_30024__$1;
(statearr_30044_30068[(2)] = inst_30008);

(statearr_30044_30068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30025 === (8))){
var inst_29988 = (state_30024[(8)]);
var inst_29997 = (state_30024[(11)]);
var tmp30041 = inst_29988;
var inst_29988__$1 = tmp30041;
var inst_29989 = inst_29997;
var state_30024__$1 = (function (){var statearr_30045 = state_30024;
(statearr_30045[(7)] = inst_29989);

(statearr_30045[(8)] = inst_29988__$1);

return statearr_30045;
})();
var statearr_30046_30069 = state_30024__$1;
(statearr_30046_30069[(2)] = null);

(statearr_30046_30069[(1)] = (2));


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
});})(c__21862__auto___30055,out))
;
return ((function (switch__21800__auto__,c__21862__auto___30055,out){
return (function() {
var cljs$core$async$state_machine__21801__auto__ = null;
var cljs$core$async$state_machine__21801__auto____0 = (function (){
var statearr_30050 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30050[(0)] = cljs$core$async$state_machine__21801__auto__);

(statearr_30050[(1)] = (1));

return statearr_30050;
});
var cljs$core$async$state_machine__21801__auto____1 = (function (state_30024){
while(true){
var ret_value__21802__auto__ = (function (){try{while(true){
var result__21803__auto__ = switch__21800__auto__.call(null,state_30024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21803__auto__;
}
break;
}
}catch (e30051){if((e30051 instanceof Object)){
var ex__21804__auto__ = e30051;
var statearr_30052_30070 = state_30024;
(statearr_30052_30070[(5)] = ex__21804__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30051;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30071 = state_30024;
state_30024 = G__30071;
continue;
} else {
return ret_value__21802__auto__;
}
break;
}
});
cljs$core$async$state_machine__21801__auto__ = function(state_30024){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21801__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21801__auto____1.call(this,state_30024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21801__auto____0;
cljs$core$async$state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21801__auto____1;
return cljs$core$async$state_machine__21801__auto__;
})()
;})(switch__21800__auto__,c__21862__auto___30055,out))
})();
var state__21864__auto__ = (function (){var statearr_30053 = f__21863__auto__.call(null);
(statearr_30053[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21862__auto___30055);

return statearr_30053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21864__auto__);
});})(c__21862__auto___30055,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__30073 = arguments.length;
switch (G__30073) {
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
var c__21862__auto___30146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21862__auto___30146,out){
return (function (){
var f__21863__auto__ = (function (){var switch__21800__auto__ = ((function (c__21862__auto___30146,out){
return (function (state_30115){
var state_val_30116 = (state_30115[(1)]);
if((state_val_30116 === (7))){
var inst_30111 = (state_30115[(2)]);
var state_30115__$1 = state_30115;
var statearr_30117_30147 = state_30115__$1;
(statearr_30117_30147[(2)] = inst_30111);

(statearr_30117_30147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (1))){
var inst_30074 = [];
var inst_30075 = inst_30074;
var inst_30076 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30115__$1 = (function (){var statearr_30118 = state_30115;
(statearr_30118[(7)] = inst_30076);

(statearr_30118[(8)] = inst_30075);

return statearr_30118;
})();
var statearr_30119_30148 = state_30115__$1;
(statearr_30119_30148[(2)] = null);

(statearr_30119_30148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (4))){
var inst_30079 = (state_30115[(9)]);
var inst_30079__$1 = (state_30115[(2)]);
var inst_30080 = (inst_30079__$1 == null);
var inst_30081 = cljs.core.not.call(null,inst_30080);
var state_30115__$1 = (function (){var statearr_30120 = state_30115;
(statearr_30120[(9)] = inst_30079__$1);

return statearr_30120;
})();
if(inst_30081){
var statearr_30121_30149 = state_30115__$1;
(statearr_30121_30149[(1)] = (5));

} else {
var statearr_30122_30150 = state_30115__$1;
(statearr_30122_30150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (15))){
var inst_30105 = (state_30115[(2)]);
var state_30115__$1 = state_30115;
var statearr_30123_30151 = state_30115__$1;
(statearr_30123_30151[(2)] = inst_30105);

(statearr_30123_30151[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (13))){
var state_30115__$1 = state_30115;
var statearr_30124_30152 = state_30115__$1;
(statearr_30124_30152[(2)] = null);

(statearr_30124_30152[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (6))){
var inst_30075 = (state_30115[(8)]);
var inst_30100 = inst_30075.length;
var inst_30101 = (inst_30100 > (0));
var state_30115__$1 = state_30115;
if(cljs.core.truth_(inst_30101)){
var statearr_30125_30153 = state_30115__$1;
(statearr_30125_30153[(1)] = (12));

} else {
var statearr_30126_30154 = state_30115__$1;
(statearr_30126_30154[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (3))){
var inst_30113 = (state_30115[(2)]);
var state_30115__$1 = state_30115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30115__$1,inst_30113);
} else {
if((state_val_30116 === (12))){
var inst_30075 = (state_30115[(8)]);
var inst_30103 = cljs.core.vec.call(null,inst_30075);
var state_30115__$1 = state_30115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30115__$1,(15),out,inst_30103);
} else {
if((state_val_30116 === (2))){
var state_30115__$1 = state_30115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30115__$1,(4),ch);
} else {
if((state_val_30116 === (11))){
var inst_30083 = (state_30115[(10)]);
var inst_30079 = (state_30115[(9)]);
var inst_30093 = (state_30115[(2)]);
var inst_30094 = [];
var inst_30095 = inst_30094.push(inst_30079);
var inst_30075 = inst_30094;
var inst_30076 = inst_30083;
var state_30115__$1 = (function (){var statearr_30127 = state_30115;
(statearr_30127[(11)] = inst_30095);

(statearr_30127[(12)] = inst_30093);

(statearr_30127[(7)] = inst_30076);

(statearr_30127[(8)] = inst_30075);

return statearr_30127;
})();
var statearr_30128_30155 = state_30115__$1;
(statearr_30128_30155[(2)] = null);

(statearr_30128_30155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (9))){
var inst_30075 = (state_30115[(8)]);
var inst_30091 = cljs.core.vec.call(null,inst_30075);
var state_30115__$1 = state_30115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30115__$1,(11),out,inst_30091);
} else {
if((state_val_30116 === (5))){
var inst_30083 = (state_30115[(10)]);
var inst_30076 = (state_30115[(7)]);
var inst_30079 = (state_30115[(9)]);
var inst_30083__$1 = f.call(null,inst_30079);
var inst_30084 = cljs.core._EQ_.call(null,inst_30083__$1,inst_30076);
var inst_30085 = cljs.core.keyword_identical_QMARK_.call(null,inst_30076,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30086 = (inst_30084) || (inst_30085);
var state_30115__$1 = (function (){var statearr_30129 = state_30115;
(statearr_30129[(10)] = inst_30083__$1);

return statearr_30129;
})();
if(cljs.core.truth_(inst_30086)){
var statearr_30130_30156 = state_30115__$1;
(statearr_30130_30156[(1)] = (8));

} else {
var statearr_30131_30157 = state_30115__$1;
(statearr_30131_30157[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (14))){
var inst_30108 = (state_30115[(2)]);
var inst_30109 = cljs.core.async.close_BANG_.call(null,out);
var state_30115__$1 = (function (){var statearr_30133 = state_30115;
(statearr_30133[(13)] = inst_30108);

return statearr_30133;
})();
var statearr_30134_30158 = state_30115__$1;
(statearr_30134_30158[(2)] = inst_30109);

(statearr_30134_30158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (10))){
var inst_30098 = (state_30115[(2)]);
var state_30115__$1 = state_30115;
var statearr_30135_30159 = state_30115__$1;
(statearr_30135_30159[(2)] = inst_30098);

(statearr_30135_30159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30116 === (8))){
var inst_30083 = (state_30115[(10)]);
var inst_30075 = (state_30115[(8)]);
var inst_30079 = (state_30115[(9)]);
var inst_30088 = inst_30075.push(inst_30079);
var tmp30132 = inst_30075;
var inst_30075__$1 = tmp30132;
var inst_30076 = inst_30083;
var state_30115__$1 = (function (){var statearr_30136 = state_30115;
(statearr_30136[(14)] = inst_30088);

(statearr_30136[(7)] = inst_30076);

(statearr_30136[(8)] = inst_30075__$1);

return statearr_30136;
})();
var statearr_30137_30160 = state_30115__$1;
(statearr_30137_30160[(2)] = null);

(statearr_30137_30160[(1)] = (2));


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
});})(c__21862__auto___30146,out))
;
return ((function (switch__21800__auto__,c__21862__auto___30146,out){
return (function() {
var cljs$core$async$state_machine__21801__auto__ = null;
var cljs$core$async$state_machine__21801__auto____0 = (function (){
var statearr_30141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30141[(0)] = cljs$core$async$state_machine__21801__auto__);

(statearr_30141[(1)] = (1));

return statearr_30141;
});
var cljs$core$async$state_machine__21801__auto____1 = (function (state_30115){
while(true){
var ret_value__21802__auto__ = (function (){try{while(true){
var result__21803__auto__ = switch__21800__auto__.call(null,state_30115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21803__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21803__auto__;
}
break;
}
}catch (e30142){if((e30142 instanceof Object)){
var ex__21804__auto__ = e30142;
var statearr_30143_30161 = state_30115;
(statearr_30143_30161[(5)] = ex__21804__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30162 = state_30115;
state_30115 = G__30162;
continue;
} else {
return ret_value__21802__auto__;
}
break;
}
});
cljs$core$async$state_machine__21801__auto__ = function(state_30115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21801__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21801__auto____1.call(this,state_30115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21801__auto____0;
cljs$core$async$state_machine__21801__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21801__auto____1;
return cljs$core$async$state_machine__21801__auto__;
})()
;})(switch__21800__auto__,c__21862__auto___30146,out))
})();
var state__21864__auto__ = (function (){var statearr_30144 = f__21863__auto__.call(null);
(statearr_30144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21862__auto___30146);

return statearr_30144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21864__auto__);
});})(c__21862__auto___30146,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map