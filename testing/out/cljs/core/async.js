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
if(typeof cljs.core.async.t26026 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26026 = (function (fn_handler,f,meta26027){
this.fn_handler = fn_handler;
this.f = f;
this.meta26027 = meta26027;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26028,meta26027__$1){
var self__ = this;
var _26028__$1 = this;
return (new cljs.core.async.t26026(self__.fn_handler,self__.f,meta26027__$1));
});

cljs.core.async.t26026.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26028){
var self__ = this;
var _26028__$1 = this;
return self__.meta26027;
});

cljs.core.async.t26026.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26026.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t26026.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t26026.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta26027","meta26027",1234717515,null)], null);
});

cljs.core.async.t26026.cljs$lang$type = true;

cljs.core.async.t26026.cljs$lang$ctorStr = "cljs.core.async/t26026";

cljs.core.async.t26026.cljs$lang$ctorPrWriter = (function (this__16617__auto__,writer__16618__auto__,opt__16619__auto__){
return cljs.core._write.call(null,writer__16618__auto__,"cljs.core.async/t26026");
});

cljs.core.async.__GT_t26026 = (function cljs$core$async$fn_handler_$___GT_t26026(fn_handler__$1,f__$1,meta26027){
return (new cljs.core.async.t26026(fn_handler__$1,f__$1,meta26027));
});

}

return (new cljs.core.async.t26026(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var G__26030 = buff;
if(G__26030){
var bit__16712__auto__ = null;
if(cljs.core.truth_((function (){var or__16038__auto__ = bit__16712__auto__;
if(cljs.core.truth_(or__16038__auto__)){
return or__16038__auto__;
} else {
return G__26030.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__26030.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26030);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26030);
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
var G__26032 = arguments.length;
switch (G__26032) {
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
var G__26035 = arguments.length;
switch (G__26035) {
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
var val_26037 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26037);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26037,ret){
return (function (){
return fn1.call(null,val_26037);
});})(val_26037,ret))
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
var G__26039 = arguments.length;
switch (G__26039) {
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
var n__16923__auto___26041 = n;
var x_26042 = (0);
while(true){
if((x_26042 < n__16923__auto___26041)){
(a[x_26042] = (0));

var G__26043 = (x_26042 + (1));
x_26042 = G__26043;
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

var G__26044 = (i + (1));
i = G__26044;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t26048 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26048 = (function (alt_flag,flag,meta26049){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta26049 = meta26049;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26050,meta26049__$1){
var self__ = this;
var _26050__$1 = this;
return (new cljs.core.async.t26048(self__.alt_flag,self__.flag,meta26049__$1));
});})(flag))
;

cljs.core.async.t26048.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26050){
var self__ = this;
var _26050__$1 = this;
return self__.meta26049;
});})(flag))
;

cljs.core.async.t26048.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26048.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t26048.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t26048.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26049","meta26049",-497558269,null)], null);
});})(flag))
;

cljs.core.async.t26048.cljs$lang$type = true;

cljs.core.async.t26048.cljs$lang$ctorStr = "cljs.core.async/t26048";

cljs.core.async.t26048.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16617__auto__,writer__16618__auto__,opt__16619__auto__){
return cljs.core._write.call(null,writer__16618__auto__,"cljs.core.async/t26048");
});})(flag))
;

cljs.core.async.__GT_t26048 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t26048(alt_flag__$1,flag__$1,meta26049){
return (new cljs.core.async.t26048(alt_flag__$1,flag__$1,meta26049));
});})(flag))
;

}

return (new cljs.core.async.t26048(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t26054 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26054 = (function (alt_handler,flag,cb,meta26055){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta26055 = meta26055;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26056,meta26055__$1){
var self__ = this;
var _26056__$1 = this;
return (new cljs.core.async.t26054(self__.alt_handler,self__.flag,self__.cb,meta26055__$1));
});

cljs.core.async.t26054.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26056){
var self__ = this;
var _26056__$1 = this;
return self__.meta26055;
});

cljs.core.async.t26054.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26054.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t26054.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t26054.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26055","meta26055",-562425111,null)], null);
});

cljs.core.async.t26054.cljs$lang$type = true;

cljs.core.async.t26054.cljs$lang$ctorStr = "cljs.core.async/t26054";

cljs.core.async.t26054.cljs$lang$ctorPrWriter = (function (this__16617__auto__,writer__16618__auto__,opt__16619__auto__){
return cljs.core._write.call(null,writer__16618__auto__,"cljs.core.async/t26054");
});

cljs.core.async.__GT_t26054 = (function cljs$core$async$alt_handler_$___GT_t26054(alt_handler__$1,flag__$1,cb__$1,meta26055){
return (new cljs.core.async.t26054(alt_handler__$1,flag__$1,cb__$1,meta26055));
});

}

return (new cljs.core.async.t26054(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__26057_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26057_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26058_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26058_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16038__auto__ = wport;
if(cljs.core.truth_(or__16038__auto__)){
return or__16038__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26059 = (i + (1));
i = G__26059;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16038__auto__ = ret;
if(cljs.core.truth_(or__16038__auto__)){
return or__16038__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4423__auto__ = (function (){var and__16026__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16026__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16026__auto__;
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
var argseq__17078__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17078__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26062){
var map__26063 = p__26062;
var map__26063__$1 = ((cljs.core.seq_QMARK_.call(null,map__26063))?cljs.core.apply.call(null,cljs.core.hash_map,map__26063):map__26063);
var opts = map__26063__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26060){
var G__26061 = cljs.core.first.call(null,seq26060);
var seq26060__$1 = cljs.core.next.call(null,seq26060);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26061,seq26060__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__26065 = arguments.length;
switch (G__26065) {
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
var c__19048__auto___26114 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19048__auto___26114){
return (function (){
var f__19049__auto__ = (function (){var switch__18986__auto__ = ((function (c__19048__auto___26114){
return (function (state_26089){
var state_val_26090 = (state_26089[(1)]);
if((state_val_26090 === (7))){
var inst_26085 = (state_26089[(2)]);
var state_26089__$1 = state_26089;
var statearr_26091_26115 = state_26089__$1;
(statearr_26091_26115[(2)] = inst_26085);

(statearr_26091_26115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (1))){
var state_26089__$1 = state_26089;
var statearr_26092_26116 = state_26089__$1;
(statearr_26092_26116[(2)] = null);

(statearr_26092_26116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (4))){
var inst_26068 = (state_26089[(7)]);
var inst_26068__$1 = (state_26089[(2)]);
var inst_26069 = (inst_26068__$1 == null);
var state_26089__$1 = (function (){var statearr_26093 = state_26089;
(statearr_26093[(7)] = inst_26068__$1);

return statearr_26093;
})();
if(cljs.core.truth_(inst_26069)){
var statearr_26094_26117 = state_26089__$1;
(statearr_26094_26117[(1)] = (5));

} else {
var statearr_26095_26118 = state_26089__$1;
(statearr_26095_26118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (13))){
var state_26089__$1 = state_26089;
var statearr_26096_26119 = state_26089__$1;
(statearr_26096_26119[(2)] = null);

(statearr_26096_26119[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (6))){
var inst_26068 = (state_26089[(7)]);
var state_26089__$1 = state_26089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26089__$1,(11),to,inst_26068);
} else {
if((state_val_26090 === (3))){
var inst_26087 = (state_26089[(2)]);
var state_26089__$1 = state_26089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26089__$1,inst_26087);
} else {
if((state_val_26090 === (12))){
var state_26089__$1 = state_26089;
var statearr_26097_26120 = state_26089__$1;
(statearr_26097_26120[(2)] = null);

(statearr_26097_26120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (2))){
var state_26089__$1 = state_26089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26089__$1,(4),from);
} else {
if((state_val_26090 === (11))){
var inst_26078 = (state_26089[(2)]);
var state_26089__$1 = state_26089;
if(cljs.core.truth_(inst_26078)){
var statearr_26098_26121 = state_26089__$1;
(statearr_26098_26121[(1)] = (12));

} else {
var statearr_26099_26122 = state_26089__$1;
(statearr_26099_26122[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (9))){
var state_26089__$1 = state_26089;
var statearr_26100_26123 = state_26089__$1;
(statearr_26100_26123[(2)] = null);

(statearr_26100_26123[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (5))){
var state_26089__$1 = state_26089;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26101_26124 = state_26089__$1;
(statearr_26101_26124[(1)] = (8));

} else {
var statearr_26102_26125 = state_26089__$1;
(statearr_26102_26125[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (14))){
var inst_26083 = (state_26089[(2)]);
var state_26089__$1 = state_26089;
var statearr_26103_26126 = state_26089__$1;
(statearr_26103_26126[(2)] = inst_26083);

(statearr_26103_26126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (10))){
var inst_26075 = (state_26089[(2)]);
var state_26089__$1 = state_26089;
var statearr_26104_26127 = state_26089__$1;
(statearr_26104_26127[(2)] = inst_26075);

(statearr_26104_26127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26090 === (8))){
var inst_26072 = cljs.core.async.close_BANG_.call(null,to);
var state_26089__$1 = state_26089;
var statearr_26105_26128 = state_26089__$1;
(statearr_26105_26128[(2)] = inst_26072);

(statearr_26105_26128[(1)] = (10));


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
});})(c__19048__auto___26114))
;
return ((function (switch__18986__auto__,c__19048__auto___26114){
return (function() {
var cljs$core$async$state_machine__18987__auto__ = null;
var cljs$core$async$state_machine__18987__auto____0 = (function (){
var statearr_26109 = [null,null,null,null,null,null,null,null];
(statearr_26109[(0)] = cljs$core$async$state_machine__18987__auto__);

(statearr_26109[(1)] = (1));

return statearr_26109;
});
var cljs$core$async$state_machine__18987__auto____1 = (function (state_26089){
while(true){
var ret_value__18988__auto__ = (function (){try{while(true){
var result__18989__auto__ = switch__18986__auto__.call(null,state_26089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18989__auto__;
}
break;
}
}catch (e26110){if((e26110 instanceof Object)){
var ex__18990__auto__ = e26110;
var statearr_26111_26129 = state_26089;
(statearr_26111_26129[(5)] = ex__18990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26130 = state_26089;
state_26089 = G__26130;
continue;
} else {
return ret_value__18988__auto__;
}
break;
}
});
cljs$core$async$state_machine__18987__auto__ = function(state_26089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18987__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18987__auto____1.call(this,state_26089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18987__auto____0;
cljs$core$async$state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18987__auto____1;
return cljs$core$async$state_machine__18987__auto__;
})()
;})(switch__18986__auto__,c__19048__auto___26114))
})();
var state__19050__auto__ = (function (){var statearr_26112 = f__19049__auto__.call(null);
(statearr_26112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19048__auto___26114);

return statearr_26112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19050__auto__);
});})(c__19048__auto___26114))
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
return (function (p__26314){
var vec__26315 = p__26314;
var v = cljs.core.nth.call(null,vec__26315,(0),null);
var p = cljs.core.nth.call(null,vec__26315,(1),null);
var job = vec__26315;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19048__auto___26497 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19048__auto___26497,res,vec__26315,v,p,job,jobs,results){
return (function (){
var f__19049__auto__ = (function (){var switch__18986__auto__ = ((function (c__19048__auto___26497,res,vec__26315,v,p,job,jobs,results){
return (function (state_26320){
var state_val_26321 = (state_26320[(1)]);
if((state_val_26321 === (1))){
var state_26320__$1 = state_26320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26320__$1,(2),res,v);
} else {
if((state_val_26321 === (2))){
var inst_26317 = (state_26320[(2)]);
var inst_26318 = cljs.core.async.close_BANG_.call(null,res);
var state_26320__$1 = (function (){var statearr_26322 = state_26320;
(statearr_26322[(7)] = inst_26317);

return statearr_26322;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26320__$1,inst_26318);
} else {
return null;
}
}
});})(c__19048__auto___26497,res,vec__26315,v,p,job,jobs,results))
;
return ((function (switch__18986__auto__,c__19048__auto___26497,res,vec__26315,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18987__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18987__auto____0 = (function (){
var statearr_26326 = [null,null,null,null,null,null,null,null];
(statearr_26326[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18987__auto__);

(statearr_26326[(1)] = (1));

return statearr_26326;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18987__auto____1 = (function (state_26320){
while(true){
var ret_value__18988__auto__ = (function (){try{while(true){
var result__18989__auto__ = switch__18986__auto__.call(null,state_26320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18989__auto__;
}
break;
}
}catch (e26327){if((e26327 instanceof Object)){
var ex__18990__auto__ = e26327;
var statearr_26328_26498 = state_26320;
(statearr_26328_26498[(5)] = ex__18990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26499 = state_26320;
state_26320 = G__26499;
continue;
} else {
return ret_value__18988__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18987__auto__ = function(state_26320){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18987__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18987__auto____1.call(this,state_26320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18987__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18987__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18987__auto__;
})()
;})(switch__18986__auto__,c__19048__auto___26497,res,vec__26315,v,p,job,jobs,results))
})();
var state__19050__auto__ = (function (){var statearr_26329 = f__19049__auto__.call(null);
(statearr_26329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19048__auto___26497);

return statearr_26329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19050__auto__);
});})(c__19048__auto___26497,res,vec__26315,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26330){
var vec__26331 = p__26330;
var v = cljs.core.nth.call(null,vec__26331,(0),null);
var p = cljs.core.nth.call(null,vec__26331,(1),null);
var job = vec__26331;
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
var n__16923__auto___26500 = n;
var __26501 = (0);
while(true){
if((__26501 < n__16923__auto___26500)){
var G__26332_26502 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26332_26502) {
case "compute":
var c__19048__auto___26504 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26501,c__19048__auto___26504,G__26332_26502,n__16923__auto___26500,jobs,results,process,async){
return (function (){
var f__19049__auto__ = (function (){var switch__18986__auto__ = ((function (__26501,c__19048__auto___26504,G__26332_26502,n__16923__auto___26500,jobs,results,process,async){
return (function (state_26345){
var state_val_26346 = (state_26345[(1)]);
if((state_val_26346 === (1))){
var state_26345__$1 = state_26345;
var statearr_26347_26505 = state_26345__$1;
(statearr_26347_26505[(2)] = null);

(statearr_26347_26505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26346 === (2))){
var state_26345__$1 = state_26345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26345__$1,(4),jobs);
} else {
if((state_val_26346 === (3))){
var inst_26343 = (state_26345[(2)]);
var state_26345__$1 = state_26345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26345__$1,inst_26343);
} else {
if((state_val_26346 === (4))){
var inst_26335 = (state_26345[(2)]);
var inst_26336 = process.call(null,inst_26335);
var state_26345__$1 = state_26345;
if(cljs.core.truth_(inst_26336)){
var statearr_26348_26506 = state_26345__$1;
(statearr_26348_26506[(1)] = (5));

} else {
var statearr_26349_26507 = state_26345__$1;
(statearr_26349_26507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26346 === (5))){
var state_26345__$1 = state_26345;
var statearr_26350_26508 = state_26345__$1;
(statearr_26350_26508[(2)] = null);

(statearr_26350_26508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26346 === (6))){
var state_26345__$1 = state_26345;
var statearr_26351_26509 = state_26345__$1;
(statearr_26351_26509[(2)] = null);

(statearr_26351_26509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26346 === (7))){
var inst_26341 = (state_26345[(2)]);
var state_26345__$1 = state_26345;
var statearr_26352_26510 = state_26345__$1;
(statearr_26352_26510[(2)] = inst_26341);

(statearr_26352_26510[(1)] = (3));


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
});})(__26501,c__19048__auto___26504,G__26332_26502,n__16923__auto___26500,jobs,results,process,async))
;
return ((function (__26501,switch__18986__auto__,c__19048__auto___26504,G__26332_26502,n__16923__auto___26500,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18987__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18987__auto____0 = (function (){
var statearr_26356 = [null,null,null,null,null,null,null];
(statearr_26356[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18987__auto__);

(statearr_26356[(1)] = (1));

return statearr_26356;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18987__auto____1 = (function (state_26345){
while(true){
var ret_value__18988__auto__ = (function (){try{while(true){
var result__18989__auto__ = switch__18986__auto__.call(null,state_26345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18989__auto__;
}
break;
}
}catch (e26357){if((e26357 instanceof Object)){
var ex__18990__auto__ = e26357;
var statearr_26358_26511 = state_26345;
(statearr_26358_26511[(5)] = ex__18990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26512 = state_26345;
state_26345 = G__26512;
continue;
} else {
return ret_value__18988__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18987__auto__ = function(state_26345){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18987__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18987__auto____1.call(this,state_26345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18987__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18987__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18987__auto__;
})()
;})(__26501,switch__18986__auto__,c__19048__auto___26504,G__26332_26502,n__16923__auto___26500,jobs,results,process,async))
})();
var state__19050__auto__ = (function (){var statearr_26359 = f__19049__auto__.call(null);
(statearr_26359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19048__auto___26504);

return statearr_26359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19050__auto__);
});})(__26501,c__19048__auto___26504,G__26332_26502,n__16923__auto___26500,jobs,results,process,async))
);


break;
case "async":
var c__19048__auto___26513 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26501,c__19048__auto___26513,G__26332_26502,n__16923__auto___26500,jobs,results,process,async){
return (function (){
var f__19049__auto__ = (function (){var switch__18986__auto__ = ((function (__26501,c__19048__auto___26513,G__26332_26502,n__16923__auto___26500,jobs,results,process,async){
return (function (state_26372){
var state_val_26373 = (state_26372[(1)]);
if((state_val_26373 === (1))){
var state_26372__$1 = state_26372;
var statearr_26374_26514 = state_26372__$1;
(statearr_26374_26514[(2)] = null);

(statearr_26374_26514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (2))){
var state_26372__$1 = state_26372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26372__$1,(4),jobs);
} else {
if((state_val_26373 === (3))){
var inst_26370 = (state_26372[(2)]);
var state_26372__$1 = state_26372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26372__$1,inst_26370);
} else {
if((state_val_26373 === (4))){
var inst_26362 = (state_26372[(2)]);
var inst_26363 = async.call(null,inst_26362);
var state_26372__$1 = state_26372;
if(cljs.core.truth_(inst_26363)){
var statearr_26375_26515 = state_26372__$1;
(statearr_26375_26515[(1)] = (5));

} else {
var statearr_26376_26516 = state_26372__$1;
(statearr_26376_26516[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (5))){
var state_26372__$1 = state_26372;
var statearr_26377_26517 = state_26372__$1;
(statearr_26377_26517[(2)] = null);

(statearr_26377_26517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (6))){
var state_26372__$1 = state_26372;
var statearr_26378_26518 = state_26372__$1;
(statearr_26378_26518[(2)] = null);

(statearr_26378_26518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26373 === (7))){
var inst_26368 = (state_26372[(2)]);
var state_26372__$1 = state_26372;
var statearr_26379_26519 = state_26372__$1;
(statearr_26379_26519[(2)] = inst_26368);

(statearr_26379_26519[(1)] = (3));


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
});})(__26501,c__19048__auto___26513,G__26332_26502,n__16923__auto___26500,jobs,results,process,async))
;
return ((function (__26501,switch__18986__auto__,c__19048__auto___26513,G__26332_26502,n__16923__auto___26500,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18987__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18987__auto____0 = (function (){
var statearr_26383 = [null,null,null,null,null,null,null];
(statearr_26383[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18987__auto__);

(statearr_26383[(1)] = (1));

return statearr_26383;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18987__auto____1 = (function (state_26372){
while(true){
var ret_value__18988__auto__ = (function (){try{while(true){
var result__18989__auto__ = switch__18986__auto__.call(null,state_26372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18989__auto__;
}
break;
}
}catch (e26384){if((e26384 instanceof Object)){
var ex__18990__auto__ = e26384;
var statearr_26385_26520 = state_26372;
(statearr_26385_26520[(5)] = ex__18990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26384;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26521 = state_26372;
state_26372 = G__26521;
continue;
} else {
return ret_value__18988__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18987__auto__ = function(state_26372){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18987__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18987__auto____1.call(this,state_26372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18987__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18987__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18987__auto__;
})()
;})(__26501,switch__18986__auto__,c__19048__auto___26513,G__26332_26502,n__16923__auto___26500,jobs,results,process,async))
})();
var state__19050__auto__ = (function (){var statearr_26386 = f__19049__auto__.call(null);
(statearr_26386[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19048__auto___26513);

return statearr_26386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19050__auto__);
});})(__26501,c__19048__auto___26513,G__26332_26502,n__16923__auto___26500,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26522 = (__26501 + (1));
__26501 = G__26522;
continue;
} else {
}
break;
}

var c__19048__auto___26523 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19048__auto___26523,jobs,results,process,async){
return (function (){
var f__19049__auto__ = (function (){var switch__18986__auto__ = ((function (c__19048__auto___26523,jobs,results,process,async){
return (function (state_26408){
var state_val_26409 = (state_26408[(1)]);
if((state_val_26409 === (1))){
var state_26408__$1 = state_26408;
var statearr_26410_26524 = state_26408__$1;
(statearr_26410_26524[(2)] = null);

(statearr_26410_26524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26409 === (2))){
var state_26408__$1 = state_26408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26408__$1,(4),from);
} else {
if((state_val_26409 === (3))){
var inst_26406 = (state_26408[(2)]);
var state_26408__$1 = state_26408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26408__$1,inst_26406);
} else {
if((state_val_26409 === (4))){
var inst_26389 = (state_26408[(7)]);
var inst_26389__$1 = (state_26408[(2)]);
var inst_26390 = (inst_26389__$1 == null);
var state_26408__$1 = (function (){var statearr_26411 = state_26408;
(statearr_26411[(7)] = inst_26389__$1);

return statearr_26411;
})();
if(cljs.core.truth_(inst_26390)){
var statearr_26412_26525 = state_26408__$1;
(statearr_26412_26525[(1)] = (5));

} else {
var statearr_26413_26526 = state_26408__$1;
(statearr_26413_26526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26409 === (5))){
var inst_26392 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26408__$1 = state_26408;
var statearr_26414_26527 = state_26408__$1;
(statearr_26414_26527[(2)] = inst_26392);

(statearr_26414_26527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26409 === (6))){
var inst_26394 = (state_26408[(8)]);
var inst_26389 = (state_26408[(7)]);
var inst_26394__$1 = cljs.core.async.chan.call(null,(1));
var inst_26395 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26396 = [inst_26389,inst_26394__$1];
var inst_26397 = (new cljs.core.PersistentVector(null,2,(5),inst_26395,inst_26396,null));
var state_26408__$1 = (function (){var statearr_26415 = state_26408;
(statearr_26415[(8)] = inst_26394__$1);

return statearr_26415;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26408__$1,(8),jobs,inst_26397);
} else {
if((state_val_26409 === (7))){
var inst_26404 = (state_26408[(2)]);
var state_26408__$1 = state_26408;
var statearr_26416_26528 = state_26408__$1;
(statearr_26416_26528[(2)] = inst_26404);

(statearr_26416_26528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26409 === (8))){
var inst_26394 = (state_26408[(8)]);
var inst_26399 = (state_26408[(2)]);
var state_26408__$1 = (function (){var statearr_26417 = state_26408;
(statearr_26417[(9)] = inst_26399);

return statearr_26417;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26408__$1,(9),results,inst_26394);
} else {
if((state_val_26409 === (9))){
var inst_26401 = (state_26408[(2)]);
var state_26408__$1 = (function (){var statearr_26418 = state_26408;
(statearr_26418[(10)] = inst_26401);

return statearr_26418;
})();
var statearr_26419_26529 = state_26408__$1;
(statearr_26419_26529[(2)] = null);

(statearr_26419_26529[(1)] = (2));


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
});})(c__19048__auto___26523,jobs,results,process,async))
;
return ((function (switch__18986__auto__,c__19048__auto___26523,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18987__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18987__auto____0 = (function (){
var statearr_26423 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26423[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18987__auto__);

(statearr_26423[(1)] = (1));

return statearr_26423;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18987__auto____1 = (function (state_26408){
while(true){
var ret_value__18988__auto__ = (function (){try{while(true){
var result__18989__auto__ = switch__18986__auto__.call(null,state_26408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18989__auto__;
}
break;
}
}catch (e26424){if((e26424 instanceof Object)){
var ex__18990__auto__ = e26424;
var statearr_26425_26530 = state_26408;
(statearr_26425_26530[(5)] = ex__18990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26531 = state_26408;
state_26408 = G__26531;
continue;
} else {
return ret_value__18988__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18987__auto__ = function(state_26408){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18987__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18987__auto____1.call(this,state_26408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18987__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18987__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18987__auto__;
})()
;})(switch__18986__auto__,c__19048__auto___26523,jobs,results,process,async))
})();
var state__19050__auto__ = (function (){var statearr_26426 = f__19049__auto__.call(null);
(statearr_26426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19048__auto___26523);

return statearr_26426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19050__auto__);
});})(c__19048__auto___26523,jobs,results,process,async))
);


var c__19048__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19048__auto__,jobs,results,process,async){
return (function (){
var f__19049__auto__ = (function (){var switch__18986__auto__ = ((function (c__19048__auto__,jobs,results,process,async){
return (function (state_26464){
var state_val_26465 = (state_26464[(1)]);
if((state_val_26465 === (7))){
var inst_26460 = (state_26464[(2)]);
var state_26464__$1 = state_26464;
var statearr_26466_26532 = state_26464__$1;
(statearr_26466_26532[(2)] = inst_26460);

(statearr_26466_26532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26465 === (20))){
var state_26464__$1 = state_26464;
var statearr_26467_26533 = state_26464__$1;
(statearr_26467_26533[(2)] = null);

(statearr_26467_26533[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26465 === (1))){
var state_26464__$1 = state_26464;
var statearr_26468_26534 = state_26464__$1;
(statearr_26468_26534[(2)] = null);

(statearr_26468_26534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26465 === (4))){
var inst_26429 = (state_26464[(7)]);
var inst_26429__$1 = (state_26464[(2)]);
var inst_26430 = (inst_26429__$1 == null);
var state_26464__$1 = (function (){var statearr_26469 = state_26464;
(statearr_26469[(7)] = inst_26429__$1);

return statearr_26469;
})();
if(cljs.core.truth_(inst_26430)){
var statearr_26470_26535 = state_26464__$1;
(statearr_26470_26535[(1)] = (5));

} else {
var statearr_26471_26536 = state_26464__$1;
(statearr_26471_26536[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26465 === (15))){
var inst_26442 = (state_26464[(8)]);
var state_26464__$1 = state_26464;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26464__$1,(18),to,inst_26442);
} else {
if((state_val_26465 === (21))){
var inst_26455 = (state_26464[(2)]);
var state_26464__$1 = state_26464;
var statearr_26472_26537 = state_26464__$1;
(statearr_26472_26537[(2)] = inst_26455);

(statearr_26472_26537[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26465 === (13))){
var inst_26457 = (state_26464[(2)]);
var state_26464__$1 = (function (){var statearr_26473 = state_26464;
(statearr_26473[(9)] = inst_26457);

return statearr_26473;
})();
var statearr_26474_26538 = state_26464__$1;
(statearr_26474_26538[(2)] = null);

(statearr_26474_26538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26465 === (6))){
var inst_26429 = (state_26464[(7)]);
var state_26464__$1 = state_26464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26464__$1,(11),inst_26429);
} else {
if((state_val_26465 === (17))){
var inst_26450 = (state_26464[(2)]);
var state_26464__$1 = state_26464;
if(cljs.core.truth_(inst_26450)){
var statearr_26475_26539 = state_26464__$1;
(statearr_26475_26539[(1)] = (19));

} else {
var statearr_26476_26540 = state_26464__$1;
(statearr_26476_26540[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26465 === (3))){
var inst_26462 = (state_26464[(2)]);
var state_26464__$1 = state_26464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26464__$1,inst_26462);
} else {
if((state_val_26465 === (12))){
var inst_26439 = (state_26464[(10)]);
var state_26464__$1 = state_26464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26464__$1,(14),inst_26439);
} else {
if((state_val_26465 === (2))){
var state_26464__$1 = state_26464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26464__$1,(4),results);
} else {
if((state_val_26465 === (19))){
var state_26464__$1 = state_26464;
var statearr_26477_26541 = state_26464__$1;
(statearr_26477_26541[(2)] = null);

(statearr_26477_26541[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26465 === (11))){
var inst_26439 = (state_26464[(2)]);
var state_26464__$1 = (function (){var statearr_26478 = state_26464;
(statearr_26478[(10)] = inst_26439);

return statearr_26478;
})();
var statearr_26479_26542 = state_26464__$1;
(statearr_26479_26542[(2)] = null);

(statearr_26479_26542[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26465 === (9))){
var state_26464__$1 = state_26464;
var statearr_26480_26543 = state_26464__$1;
(statearr_26480_26543[(2)] = null);

(statearr_26480_26543[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26465 === (5))){
var state_26464__$1 = state_26464;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26481_26544 = state_26464__$1;
(statearr_26481_26544[(1)] = (8));

} else {
var statearr_26482_26545 = state_26464__$1;
(statearr_26482_26545[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26465 === (14))){
var inst_26444 = (state_26464[(11)]);
var inst_26442 = (state_26464[(8)]);
var inst_26442__$1 = (state_26464[(2)]);
var inst_26443 = (inst_26442__$1 == null);
var inst_26444__$1 = cljs.core.not.call(null,inst_26443);
var state_26464__$1 = (function (){var statearr_26483 = state_26464;
(statearr_26483[(11)] = inst_26444__$1);

(statearr_26483[(8)] = inst_26442__$1);

return statearr_26483;
})();
if(inst_26444__$1){
var statearr_26484_26546 = state_26464__$1;
(statearr_26484_26546[(1)] = (15));

} else {
var statearr_26485_26547 = state_26464__$1;
(statearr_26485_26547[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26465 === (16))){
var inst_26444 = (state_26464[(11)]);
var state_26464__$1 = state_26464;
var statearr_26486_26548 = state_26464__$1;
(statearr_26486_26548[(2)] = inst_26444);

(statearr_26486_26548[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26465 === (10))){
var inst_26436 = (state_26464[(2)]);
var state_26464__$1 = state_26464;
var statearr_26487_26549 = state_26464__$1;
(statearr_26487_26549[(2)] = inst_26436);

(statearr_26487_26549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26465 === (18))){
var inst_26447 = (state_26464[(2)]);
var state_26464__$1 = state_26464;
var statearr_26488_26550 = state_26464__$1;
(statearr_26488_26550[(2)] = inst_26447);

(statearr_26488_26550[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26465 === (8))){
var inst_26433 = cljs.core.async.close_BANG_.call(null,to);
var state_26464__$1 = state_26464;
var statearr_26489_26551 = state_26464__$1;
(statearr_26489_26551[(2)] = inst_26433);

(statearr_26489_26551[(1)] = (10));


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
});})(c__19048__auto__,jobs,results,process,async))
;
return ((function (switch__18986__auto__,c__19048__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18987__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18987__auto____0 = (function (){
var statearr_26493 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26493[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18987__auto__);

(statearr_26493[(1)] = (1));

return statearr_26493;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18987__auto____1 = (function (state_26464){
while(true){
var ret_value__18988__auto__ = (function (){try{while(true){
var result__18989__auto__ = switch__18986__auto__.call(null,state_26464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18989__auto__;
}
break;
}
}catch (e26494){if((e26494 instanceof Object)){
var ex__18990__auto__ = e26494;
var statearr_26495_26552 = state_26464;
(statearr_26495_26552[(5)] = ex__18990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26553 = state_26464;
state_26464 = G__26553;
continue;
} else {
return ret_value__18988__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18987__auto__ = function(state_26464){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18987__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18987__auto____1.call(this,state_26464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18987__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18987__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18987__auto__;
})()
;})(switch__18986__auto__,c__19048__auto__,jobs,results,process,async))
})();
var state__19050__auto__ = (function (){var statearr_26496 = f__19049__auto__.call(null);
(statearr_26496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19048__auto__);

return statearr_26496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19050__auto__);
});})(c__19048__auto__,jobs,results,process,async))
);

return c__19048__auto__;
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
var G__26555 = arguments.length;
switch (G__26555) {
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
var G__26558 = arguments.length;
switch (G__26558) {
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
var G__26561 = arguments.length;
switch (G__26561) {
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
var c__19048__auto___26613 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19048__auto___26613,tc,fc){
return (function (){
var f__19049__auto__ = (function (){var switch__18986__auto__ = ((function (c__19048__auto___26613,tc,fc){
return (function (state_26587){
var state_val_26588 = (state_26587[(1)]);
if((state_val_26588 === (7))){
var inst_26583 = (state_26587[(2)]);
var state_26587__$1 = state_26587;
var statearr_26589_26614 = state_26587__$1;
(statearr_26589_26614[(2)] = inst_26583);

(statearr_26589_26614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26588 === (1))){
var state_26587__$1 = state_26587;
var statearr_26590_26615 = state_26587__$1;
(statearr_26590_26615[(2)] = null);

(statearr_26590_26615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26588 === (4))){
var inst_26564 = (state_26587[(7)]);
var inst_26564__$1 = (state_26587[(2)]);
var inst_26565 = (inst_26564__$1 == null);
var state_26587__$1 = (function (){var statearr_26591 = state_26587;
(statearr_26591[(7)] = inst_26564__$1);

return statearr_26591;
})();
if(cljs.core.truth_(inst_26565)){
var statearr_26592_26616 = state_26587__$1;
(statearr_26592_26616[(1)] = (5));

} else {
var statearr_26593_26617 = state_26587__$1;
(statearr_26593_26617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26588 === (13))){
var state_26587__$1 = state_26587;
var statearr_26594_26618 = state_26587__$1;
(statearr_26594_26618[(2)] = null);

(statearr_26594_26618[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26588 === (6))){
var inst_26564 = (state_26587[(7)]);
var inst_26570 = p.call(null,inst_26564);
var state_26587__$1 = state_26587;
if(cljs.core.truth_(inst_26570)){
var statearr_26595_26619 = state_26587__$1;
(statearr_26595_26619[(1)] = (9));

} else {
var statearr_26596_26620 = state_26587__$1;
(statearr_26596_26620[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26588 === (3))){
var inst_26585 = (state_26587[(2)]);
var state_26587__$1 = state_26587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26587__$1,inst_26585);
} else {
if((state_val_26588 === (12))){
var state_26587__$1 = state_26587;
var statearr_26597_26621 = state_26587__$1;
(statearr_26597_26621[(2)] = null);

(statearr_26597_26621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26588 === (2))){
var state_26587__$1 = state_26587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26587__$1,(4),ch);
} else {
if((state_val_26588 === (11))){
var inst_26564 = (state_26587[(7)]);
var inst_26574 = (state_26587[(2)]);
var state_26587__$1 = state_26587;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26587__$1,(8),inst_26574,inst_26564);
} else {
if((state_val_26588 === (9))){
var state_26587__$1 = state_26587;
var statearr_26598_26622 = state_26587__$1;
(statearr_26598_26622[(2)] = tc);

(statearr_26598_26622[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26588 === (5))){
var inst_26567 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26568 = cljs.core.async.close_BANG_.call(null,fc);
var state_26587__$1 = (function (){var statearr_26599 = state_26587;
(statearr_26599[(8)] = inst_26567);

return statearr_26599;
})();
var statearr_26600_26623 = state_26587__$1;
(statearr_26600_26623[(2)] = inst_26568);

(statearr_26600_26623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26588 === (14))){
var inst_26581 = (state_26587[(2)]);
var state_26587__$1 = state_26587;
var statearr_26601_26624 = state_26587__$1;
(statearr_26601_26624[(2)] = inst_26581);

(statearr_26601_26624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26588 === (10))){
var state_26587__$1 = state_26587;
var statearr_26602_26625 = state_26587__$1;
(statearr_26602_26625[(2)] = fc);

(statearr_26602_26625[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26588 === (8))){
var inst_26576 = (state_26587[(2)]);
var state_26587__$1 = state_26587;
if(cljs.core.truth_(inst_26576)){
var statearr_26603_26626 = state_26587__$1;
(statearr_26603_26626[(1)] = (12));

} else {
var statearr_26604_26627 = state_26587__$1;
(statearr_26604_26627[(1)] = (13));

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
});})(c__19048__auto___26613,tc,fc))
;
return ((function (switch__18986__auto__,c__19048__auto___26613,tc,fc){
return (function() {
var cljs$core$async$state_machine__18987__auto__ = null;
var cljs$core$async$state_machine__18987__auto____0 = (function (){
var statearr_26608 = [null,null,null,null,null,null,null,null,null];
(statearr_26608[(0)] = cljs$core$async$state_machine__18987__auto__);

(statearr_26608[(1)] = (1));

return statearr_26608;
});
var cljs$core$async$state_machine__18987__auto____1 = (function (state_26587){
while(true){
var ret_value__18988__auto__ = (function (){try{while(true){
var result__18989__auto__ = switch__18986__auto__.call(null,state_26587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18989__auto__;
}
break;
}
}catch (e26609){if((e26609 instanceof Object)){
var ex__18990__auto__ = e26609;
var statearr_26610_26628 = state_26587;
(statearr_26610_26628[(5)] = ex__18990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26629 = state_26587;
state_26587 = G__26629;
continue;
} else {
return ret_value__18988__auto__;
}
break;
}
});
cljs$core$async$state_machine__18987__auto__ = function(state_26587){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18987__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18987__auto____1.call(this,state_26587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18987__auto____0;
cljs$core$async$state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18987__auto____1;
return cljs$core$async$state_machine__18987__auto__;
})()
;})(switch__18986__auto__,c__19048__auto___26613,tc,fc))
})();
var state__19050__auto__ = (function (){var statearr_26611 = f__19049__auto__.call(null);
(statearr_26611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19048__auto___26613);

return statearr_26611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19050__auto__);
});})(c__19048__auto___26613,tc,fc))
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
var c__19048__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19048__auto__){
return (function (){
var f__19049__auto__ = (function (){var switch__18986__auto__ = ((function (c__19048__auto__){
return (function (state_26676){
var state_val_26677 = (state_26676[(1)]);
if((state_val_26677 === (1))){
var inst_26662 = init;
var state_26676__$1 = (function (){var statearr_26678 = state_26676;
(statearr_26678[(7)] = inst_26662);

return statearr_26678;
})();
var statearr_26679_26694 = state_26676__$1;
(statearr_26679_26694[(2)] = null);

(statearr_26679_26694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26677 === (2))){
var state_26676__$1 = state_26676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26676__$1,(4),ch);
} else {
if((state_val_26677 === (3))){
var inst_26674 = (state_26676[(2)]);
var state_26676__$1 = state_26676;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26676__$1,inst_26674);
} else {
if((state_val_26677 === (4))){
var inst_26665 = (state_26676[(8)]);
var inst_26665__$1 = (state_26676[(2)]);
var inst_26666 = (inst_26665__$1 == null);
var state_26676__$1 = (function (){var statearr_26680 = state_26676;
(statearr_26680[(8)] = inst_26665__$1);

return statearr_26680;
})();
if(cljs.core.truth_(inst_26666)){
var statearr_26681_26695 = state_26676__$1;
(statearr_26681_26695[(1)] = (5));

} else {
var statearr_26682_26696 = state_26676__$1;
(statearr_26682_26696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26677 === (5))){
var inst_26662 = (state_26676[(7)]);
var state_26676__$1 = state_26676;
var statearr_26683_26697 = state_26676__$1;
(statearr_26683_26697[(2)] = inst_26662);

(statearr_26683_26697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26677 === (6))){
var inst_26665 = (state_26676[(8)]);
var inst_26662 = (state_26676[(7)]);
var inst_26669 = f.call(null,inst_26662,inst_26665);
var inst_26662__$1 = inst_26669;
var state_26676__$1 = (function (){var statearr_26684 = state_26676;
(statearr_26684[(7)] = inst_26662__$1);

return statearr_26684;
})();
var statearr_26685_26698 = state_26676__$1;
(statearr_26685_26698[(2)] = null);

(statearr_26685_26698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26677 === (7))){
var inst_26672 = (state_26676[(2)]);
var state_26676__$1 = state_26676;
var statearr_26686_26699 = state_26676__$1;
(statearr_26686_26699[(2)] = inst_26672);

(statearr_26686_26699[(1)] = (3));


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
});})(c__19048__auto__))
;
return ((function (switch__18986__auto__,c__19048__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18987__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18987__auto____0 = (function (){
var statearr_26690 = [null,null,null,null,null,null,null,null,null];
(statearr_26690[(0)] = cljs$core$async$reduce_$_state_machine__18987__auto__);

(statearr_26690[(1)] = (1));

return statearr_26690;
});
var cljs$core$async$reduce_$_state_machine__18987__auto____1 = (function (state_26676){
while(true){
var ret_value__18988__auto__ = (function (){try{while(true){
var result__18989__auto__ = switch__18986__auto__.call(null,state_26676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18989__auto__;
}
break;
}
}catch (e26691){if((e26691 instanceof Object)){
var ex__18990__auto__ = e26691;
var statearr_26692_26700 = state_26676;
(statearr_26692_26700[(5)] = ex__18990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26701 = state_26676;
state_26676 = G__26701;
continue;
} else {
return ret_value__18988__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18987__auto__ = function(state_26676){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18987__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18987__auto____1.call(this,state_26676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18987__auto____0;
cljs$core$async$reduce_$_state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18987__auto____1;
return cljs$core$async$reduce_$_state_machine__18987__auto__;
})()
;})(switch__18986__auto__,c__19048__auto__))
})();
var state__19050__auto__ = (function (){var statearr_26693 = f__19049__auto__.call(null);
(statearr_26693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19048__auto__);

return statearr_26693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19050__auto__);
});})(c__19048__auto__))
);

return c__19048__auto__;
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
var G__26703 = arguments.length;
switch (G__26703) {
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
var c__19048__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19048__auto__){
return (function (){
var f__19049__auto__ = (function (){var switch__18986__auto__ = ((function (c__19048__auto__){
return (function (state_26728){
var state_val_26729 = (state_26728[(1)]);
if((state_val_26729 === (7))){
var inst_26710 = (state_26728[(2)]);
var state_26728__$1 = state_26728;
var statearr_26730_26754 = state_26728__$1;
(statearr_26730_26754[(2)] = inst_26710);

(statearr_26730_26754[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (1))){
var inst_26704 = cljs.core.seq.call(null,coll);
var inst_26705 = inst_26704;
var state_26728__$1 = (function (){var statearr_26731 = state_26728;
(statearr_26731[(7)] = inst_26705);

return statearr_26731;
})();
var statearr_26732_26755 = state_26728__$1;
(statearr_26732_26755[(2)] = null);

(statearr_26732_26755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (4))){
var inst_26705 = (state_26728[(7)]);
var inst_26708 = cljs.core.first.call(null,inst_26705);
var state_26728__$1 = state_26728;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26728__$1,(7),ch,inst_26708);
} else {
if((state_val_26729 === (13))){
var inst_26722 = (state_26728[(2)]);
var state_26728__$1 = state_26728;
var statearr_26733_26756 = state_26728__$1;
(statearr_26733_26756[(2)] = inst_26722);

(statearr_26733_26756[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (6))){
var inst_26713 = (state_26728[(2)]);
var state_26728__$1 = state_26728;
if(cljs.core.truth_(inst_26713)){
var statearr_26734_26757 = state_26728__$1;
(statearr_26734_26757[(1)] = (8));

} else {
var statearr_26735_26758 = state_26728__$1;
(statearr_26735_26758[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (3))){
var inst_26726 = (state_26728[(2)]);
var state_26728__$1 = state_26728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26728__$1,inst_26726);
} else {
if((state_val_26729 === (12))){
var state_26728__$1 = state_26728;
var statearr_26736_26759 = state_26728__$1;
(statearr_26736_26759[(2)] = null);

(statearr_26736_26759[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (2))){
var inst_26705 = (state_26728[(7)]);
var state_26728__$1 = state_26728;
if(cljs.core.truth_(inst_26705)){
var statearr_26737_26760 = state_26728__$1;
(statearr_26737_26760[(1)] = (4));

} else {
var statearr_26738_26761 = state_26728__$1;
(statearr_26738_26761[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (11))){
var inst_26719 = cljs.core.async.close_BANG_.call(null,ch);
var state_26728__$1 = state_26728;
var statearr_26739_26762 = state_26728__$1;
(statearr_26739_26762[(2)] = inst_26719);

(statearr_26739_26762[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (9))){
var state_26728__$1 = state_26728;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26740_26763 = state_26728__$1;
(statearr_26740_26763[(1)] = (11));

} else {
var statearr_26741_26764 = state_26728__$1;
(statearr_26741_26764[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (5))){
var inst_26705 = (state_26728[(7)]);
var state_26728__$1 = state_26728;
var statearr_26742_26765 = state_26728__$1;
(statearr_26742_26765[(2)] = inst_26705);

(statearr_26742_26765[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (10))){
var inst_26724 = (state_26728[(2)]);
var state_26728__$1 = state_26728;
var statearr_26743_26766 = state_26728__$1;
(statearr_26743_26766[(2)] = inst_26724);

(statearr_26743_26766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26729 === (8))){
var inst_26705 = (state_26728[(7)]);
var inst_26715 = cljs.core.next.call(null,inst_26705);
var inst_26705__$1 = inst_26715;
var state_26728__$1 = (function (){var statearr_26744 = state_26728;
(statearr_26744[(7)] = inst_26705__$1);

return statearr_26744;
})();
var statearr_26745_26767 = state_26728__$1;
(statearr_26745_26767[(2)] = null);

(statearr_26745_26767[(1)] = (2));


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
});})(c__19048__auto__))
;
return ((function (switch__18986__auto__,c__19048__auto__){
return (function() {
var cljs$core$async$state_machine__18987__auto__ = null;
var cljs$core$async$state_machine__18987__auto____0 = (function (){
var statearr_26749 = [null,null,null,null,null,null,null,null];
(statearr_26749[(0)] = cljs$core$async$state_machine__18987__auto__);

(statearr_26749[(1)] = (1));

return statearr_26749;
});
var cljs$core$async$state_machine__18987__auto____1 = (function (state_26728){
while(true){
var ret_value__18988__auto__ = (function (){try{while(true){
var result__18989__auto__ = switch__18986__auto__.call(null,state_26728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18989__auto__;
}
break;
}
}catch (e26750){if((e26750 instanceof Object)){
var ex__18990__auto__ = e26750;
var statearr_26751_26768 = state_26728;
(statearr_26751_26768[(5)] = ex__18990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26769 = state_26728;
state_26728 = G__26769;
continue;
} else {
return ret_value__18988__auto__;
}
break;
}
});
cljs$core$async$state_machine__18987__auto__ = function(state_26728){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18987__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18987__auto____1.call(this,state_26728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18987__auto____0;
cljs$core$async$state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18987__auto____1;
return cljs$core$async$state_machine__18987__auto__;
})()
;})(switch__18986__auto__,c__19048__auto__))
})();
var state__19050__auto__ = (function (){var statearr_26752 = f__19049__auto__.call(null);
(statearr_26752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19048__auto__);

return statearr_26752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19050__auto__);
});})(c__19048__auto__))
);

return c__19048__auto__;
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

cljs.core.async.Mux = (function (){var obj26771 = {};
return obj26771;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__16026__auto__ = _;
if(and__16026__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__16026__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__16674__auto__ = (((_ == null))?null:_);
return (function (){var or__16038__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16674__auto__)]);
if(or__16038__auto__){
return or__16038__auto__;
} else {
var or__16038__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__16038__auto____$1){
return or__16038__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj26773 = {};
return obj26773;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__16026__auto__ = m;
if(and__16026__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__16026__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__16674__auto__ = (((m == null))?null:m);
return (function (){var or__16038__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16674__auto__)]);
if(or__16038__auto__){
return or__16038__auto__;
} else {
var or__16038__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__16038__auto____$1){
return or__16038__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__16026__auto__ = m;
if(and__16026__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__16026__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__16674__auto__ = (((m == null))?null:m);
return (function (){var or__16038__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16674__auto__)]);
if(or__16038__auto__){
return or__16038__auto__;
} else {
var or__16038__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__16038__auto____$1){
return or__16038__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__16026__auto__ = m;
if(and__16026__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__16026__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__16674__auto__ = (((m == null))?null:m);
return (function (){var or__16038__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16674__auto__)]);
if(or__16038__auto__){
return or__16038__auto__;
} else {
var or__16038__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__16038__auto____$1){
return or__16038__auto____$1;
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
if(typeof cljs.core.async.t26995 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26995 = (function (mult,ch,cs,meta26996){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta26996 = meta26996;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t26995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26997,meta26996__$1){
var self__ = this;
var _26997__$1 = this;
return (new cljs.core.async.t26995(self__.mult,self__.ch,self__.cs,meta26996__$1));
});})(cs))
;

cljs.core.async.t26995.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26997){
var self__ = this;
var _26997__$1 = this;
return self__.meta26996;
});})(cs))
;

cljs.core.async.t26995.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26995.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t26995.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t26995.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t26995.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t26995.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t26995.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26996","meta26996",-1827137872,null)], null);
});})(cs))
;

cljs.core.async.t26995.cljs$lang$type = true;

cljs.core.async.t26995.cljs$lang$ctorStr = "cljs.core.async/t26995";

cljs.core.async.t26995.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16617__auto__,writer__16618__auto__,opt__16619__auto__){
return cljs.core._write.call(null,writer__16618__auto__,"cljs.core.async/t26995");
});})(cs))
;

cljs.core.async.__GT_t26995 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t26995(mult__$1,ch__$1,cs__$1,meta26996){
return (new cljs.core.async.t26995(mult__$1,ch__$1,cs__$1,meta26996));
});})(cs))
;

}

return (new cljs.core.async.t26995(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19048__auto___27216 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19048__auto___27216,cs,m,dchan,dctr,done){
return (function (){
var f__19049__auto__ = (function (){var switch__18986__auto__ = ((function (c__19048__auto___27216,cs,m,dchan,dctr,done){
return (function (state_27128){
var state_val_27129 = (state_27128[(1)]);
if((state_val_27129 === (7))){
var inst_27124 = (state_27128[(2)]);
var state_27128__$1 = state_27128;
var statearr_27130_27217 = state_27128__$1;
(statearr_27130_27217[(2)] = inst_27124);

(statearr_27130_27217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27129 === (20))){
var inst_27029 = (state_27128[(7)]);
var inst_27039 = cljs.core.first.call(null,inst_27029);
var inst_27040 = cljs.core.nth.call(null,inst_27039,(0),null);
var inst_27041 = cljs.core.nth.call(null,inst_27039,(1),null);
var state_27128__$1 = (function (){var statearr_27131 = state_27128;
(statearr_27131[(8)] = inst_27040);

return statearr_27131;
})();
if(cljs.core.truth_(inst_27041)){
var statearr_27132_27218 = state_27128__$1;
(statearr_27132_27218[(1)] = (22));

} else {
var statearr_27133_27219 = state_27128__$1;
(statearr_27133_27219[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27129 === (27))){
var inst_27076 = (state_27128[(9)]);
var inst_27071 = (state_27128[(10)]);
var inst_27069 = (state_27128[(11)]);
var inst_27000 = (state_27128[(12)]);
var inst_27076__$1 = cljs.core._nth.call(null,inst_27069,inst_27071);
var inst_27077 = cljs.core.async.put_BANG_.call(null,inst_27076__$1,inst_27000,done);
var state_27128__$1 = (function (){var statearr_27134 = state_27128;
(statearr_27134[(9)] = inst_27076__$1);

return statearr_27134;
})();
if(cljs.core.truth_(inst_27077)){
var statearr_27135_27220 = state_27128__$1;
(statearr_27135_27220[(1)] = (30));

} else {
var statearr_27136_27221 = state_27128__$1;
(statearr_27136_27221[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27129 === (1))){
var state_27128__$1 = state_27128;
var statearr_27137_27222 = state_27128__$1;
(statearr_27137_27222[(2)] = null);

(statearr_27137_27222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27129 === (24))){
var inst_27029 = (state_27128[(7)]);
var inst_27046 = (state_27128[(2)]);
var inst_27047 = cljs.core.next.call(null,inst_27029);
var inst_27009 = inst_27047;
var inst_27010 = null;
var inst_27011 = (0);
var inst_27012 = (0);
var state_27128__$1 = (function (){var statearr_27138 = state_27128;
(statearr_27138[(13)] = inst_27012);

(statearr_27138[(14)] = inst_27010);

(statearr_27138[(15)] = inst_27011);

(statearr_27138[(16)] = inst_27046);

(statearr_27138[(17)] = inst_27009);

return statearr_27138;
})();
var statearr_27139_27223 = state_27128__$1;
(statearr_27139_27223[(2)] = null);

(statearr_27139_27223[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27129 === (39))){
var state_27128__$1 = state_27128;
var statearr_27143_27224 = state_27128__$1;
(statearr_27143_27224[(2)] = null);

(statearr_27143_27224[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27129 === (4))){
var inst_27000 = (state_27128[(12)]);
var inst_27000__$1 = (state_27128[(2)]);
var inst_27001 = (inst_27000__$1 == null);
var state_27128__$1 = (function (){var statearr_27144 = state_27128;
(statearr_27144[(12)] = inst_27000__$1);

return statearr_27144;
})();
if(cljs.core.truth_(inst_27001)){
var statearr_27145_27225 = state_27128__$1;
(statearr_27145_27225[(1)] = (5));

} else {
var statearr_27146_27226 = state_27128__$1;
(statearr_27146_27226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27129 === (15))){
var inst_27012 = (state_27128[(13)]);
var inst_27010 = (state_27128[(14)]);
var inst_27011 = (state_27128[(15)]);
var inst_27009 = (state_27128[(17)]);
var inst_27025 = (state_27128[(2)]);
var inst_27026 = (inst_27012 + (1));
var tmp27140 = inst_27010;
var tmp27141 = inst_27011;
var tmp27142 = inst_27009;
var inst_27009__$1 = tmp27142;
var inst_27010__$1 = tmp27140;
var inst_27011__$1 = tmp27141;
var inst_27012__$1 = inst_27026;
var state_27128__$1 = (function (){var statearr_27147 = state_27128;
(statearr_27147[(13)] = inst_27012__$1);

(statearr_27147[(14)] = inst_27010__$1);

(statearr_27147[(15)] = inst_27011__$1);

(statearr_27147[(18)] = inst_27025);

(statearr_27147[(17)] = inst_27009__$1);

return statearr_27147;
})();
var statearr_27148_27227 = state_27128__$1;
(statearr_27148_27227[(2)] = null);

(statearr_27148_27227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27129 === (21))){
var inst_27050 = (state_27128[(2)]);
var state_27128__$1 = state_27128;
var statearr_27152_27228 = state_27128__$1;
(statearr_27152_27228[(2)] = inst_27050);

(statearr_27152_27228[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27129 === (31))){
var inst_27076 = (state_27128[(9)]);
var inst_27080 = done.call(null,null);
var inst_27081 = cljs.core.async.untap_STAR_.call(null,m,inst_27076);
var state_27128__$1 = (function (){var statearr_27153 = state_27128;
(statearr_27153[(19)] = inst_27080);

return statearr_27153;
})();
var statearr_27154_27229 = state_27128__$1;
(statearr_27154_27229[(2)] = inst_27081);

(statearr_27154_27229[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27129 === (32))){
var inst_27068 = (state_27128[(20)]);
var inst_27071 = (state_27128[(10)]);
var inst_27070 = (state_27128[(21)]);
var inst_27069 = (state_27128[(11)]);
var inst_27083 = (state_27128[(2)]);
var inst_27084 = (inst_27071 + (1));
var tmp27149 = inst_27068;
var tmp27150 = inst_27070;
var tmp27151 = inst_27069;
var inst_27068__$1 = tmp27149;
var inst_27069__$1 = tmp27151;
var inst_27070__$1 = tmp27150;
var inst_27071__$1 = inst_27084;
var state_27128__$1 = (function (){var statearr_27155 = state_27128;
(statearr_27155[(22)] = inst_27083);

(statearr_27155[(20)] = inst_27068__$1);

(statearr_27155[(10)] = inst_27071__$1);

(statearr_27155[(21)] = inst_27070__$1);

(statearr_27155[(11)] = inst_27069__$1);

return statearr_27155;
})();
var statearr_27156_27230 = state_27128__$1;
(statearr_27156_27230[(2)] = null);

(statearr_27156_27230[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27129 === (40))){
var inst_27096 = (state_27128[(23)]);
var inst_27100 = done.call(null,null);
var inst_27101 = cljs.core.async.untap_STAR_.call(null,m,inst_27096);
var state_27128__$1 = (function (){var statearr_27157 = state_27128;
(statearr_27157[(24)] = inst_27100);

return statearr_27157;
})();
var statearr_27158_27231 = state_27128__$1;
(statearr_27158_27231[(2)] = inst_27101);

(statearr_27158_27231[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27129 === (33))){
var inst_27087 = (state_27128[(25)]);
var inst_27089 = cljs.core.chunked_seq_QMARK_.call(null,inst_27087);
var state_27128__$1 = state_27128;
if(inst_27089){
var statearr_27159_27232 = state_27128__$1;
(statearr_27159_27232[(1)] = (36));

} else {
var statearr_27160_27233 = state_27128__$1;
(statearr_27160_27233[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27129 === (13))){
var inst_27019 = (state_27128[(26)]);
var inst_27022 = cljs.core.async.close_BANG_.call(null,inst_27019);
var state_27128__$1 = state_27128;
var statearr_27161_27234 = state_27128__$1;
(statearr_27161_27234[(2)] = inst_27022);

(statearr_27161_27234[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27129 === (22))){
var inst_27040 = (state_27128[(8)]);
var inst_27043 = cljs.core.async.close_BANG_.call(null,inst_27040);
var state_27128__$1 = state_27128;
var statearr_27162_27235 = state_27128__$1;
(statearr_27162_27235[(2)] = inst_27043);

(statearr_27162_27235[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27129 === (36))){
var inst_27087 = (state_27128[(25)]);
var inst_27091 = cljs.core.chunk_first.call(null,inst_27087);
var inst_27092 = cljs.core.chunk_rest.call(null,inst_27087);
var inst_27093 = cljs.core.count.call(null,inst_27091);
var inst_27068 = inst_27092;
var inst_27069 = inst_27091;
var inst_27070 = inst_27093;
var inst_27071 = (0);
var state_27128__$1 = (function (){var statearr_27163 = state_27128;
(statearr_27163[(20)] = inst_27068);

(statearr_27163[(10)] = inst_27071);

(statearr_27163[(21)] = inst_27070);

(statearr_27163[(11)] = inst_27069);

return statearr_27163;
})();
var statearr_27164_27236 = state_27128__$1;
(statearr_27164_27236[(2)] = null);

(statearr_27164_27236[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27129 === (41))){
var inst_27087 = (state_27128[(25)]);
var inst_27103 = (state_27128[(2)]);
var inst_27104 = cljs.core.next.call(null,inst_27087);
var inst_27068 = inst_27104;
var inst_27069 = null;
var inst_27070 = (0);
var inst_27071 = (0);
var state_27128__$1 = (function (){var statearr_27165 = state_27128;
(statearr_27165[(20)] = inst_27068);

(statearr_27165[(27)] = inst_27103);

(statearr_27165[(10)] = inst_27071);

(statearr_27165[(21)] = inst_27070);

(statearr_27165[(11)] = inst_27069);

return statearr_27165;
})();
var statearr_27166_27237 = state_27128__$1;
(statearr_27166_27237[(2)] = null);

(statearr_27166_27237[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27129 === (43))){
var state_27128__$1 = state_27128;
var statearr_27167_27238 = state_27128__$1;
(statearr_27167_27238[(2)] = null);

(statearr_27167_27238[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27129 === (29))){
var inst_27112 = (state_27128[(2)]);
var state_27128__$1 = state_27128;
var statearr_27168_27239 = state_27128__$1;
(statearr_27168_27239[(2)] = inst_27112);

(statearr_27168_27239[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27129 === (44))){
var inst_27121 = (state_27128[(2)]);
var state_27128__$1 = (function (){var statearr_27169 = state_27128;
(statearr_27169[(28)] = inst_27121);

return statearr_27169;
})();
var statearr_27170_27240 = state_27128__$1;
(statearr_27170_27240[(2)] = null);

(statearr_27170_27240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27129 === (6))){
var inst_27060 = (state_27128[(29)]);
var inst_27059 = cljs.core.deref.call(null,cs);
var inst_27060__$1 = cljs.core.keys.call(null,inst_27059);
var inst_27061 = cljs.core.count.call(null,inst_27060__$1);
var inst_27062 = cljs.core.reset_BANG_.call(null,dctr,inst_27061);
var inst_27067 = cljs.core.seq.call(null,inst_27060__$1);
var inst_27068 = inst_27067;
var inst_27069 = null;
var inst_27070 = (0);
var inst_27071 = (0);
var state_27128__$1 = (function (){var statearr_27171 = state_27128;
(statearr_27171[(30)] = inst_27062);

(statearr_27171[(20)] = inst_27068);

(statearr_27171[(10)] = inst_27071);

(statearr_27171[(21)] = inst_27070);

(statearr_27171[(29)] = inst_27060__$1);

(statearr_27171[(11)] = inst_27069);

return statearr_27171;
})();
var statearr_27172_27241 = state_27128__$1;
(statearr_27172_27241[(2)] = null);

(statearr_27172_27241[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27129 === (28))){
var inst_27087 = (state_27128[(25)]);
var inst_27068 = (state_27128[(20)]);
var inst_27087__$1 = cljs.core.seq.call(null,inst_27068);
var state_27128__$1 = (function (){var statearr_27173 = state_27128;
(statearr_27173[(25)] = inst_27087__$1);

return statearr_27173;
})();
if(inst_27087__$1){
var statearr_27174_27242 = state_27128__$1;
(statearr_27174_27242[(1)] = (33));

} else {
var statearr_27175_27243 = state_27128__$1;
(statearr_27175_27243[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27129 === (25))){
var inst_27071 = (state_27128[(10)]);
var inst_27070 = (state_27128[(21)]);
var inst_27073 = (inst_27071 < inst_27070);
var inst_27074 = inst_27073;
var state_27128__$1 = state_27128;
if(cljs.core.truth_(inst_27074)){
var statearr_27176_27244 = state_27128__$1;
(statearr_27176_27244[(1)] = (27));

} else {
var statearr_27177_27245 = state_27128__$1;
(statearr_27177_27245[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27129 === (34))){
var state_27128__$1 = state_27128;
var statearr_27178_27246 = state_27128__$1;
(statearr_27178_27246[(2)] = null);

(statearr_27178_27246[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27129 === (17))){
var state_27128__$1 = state_27128;
var statearr_27179_27247 = state_27128__$1;
(statearr_27179_27247[(2)] = null);

(statearr_27179_27247[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27129 === (3))){
var inst_27126 = (state_27128[(2)]);
var state_27128__$1 = state_27128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27128__$1,inst_27126);
} else {
if((state_val_27129 === (12))){
var inst_27055 = (state_27128[(2)]);
var state_27128__$1 = state_27128;
var statearr_27180_27248 = state_27128__$1;
(statearr_27180_27248[(2)] = inst_27055);

(statearr_27180_27248[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27129 === (2))){
var state_27128__$1 = state_27128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27128__$1,(4),ch);
} else {
if((state_val_27129 === (23))){
var state_27128__$1 = state_27128;
var statearr_27181_27249 = state_27128__$1;
(statearr_27181_27249[(2)] = null);

(statearr_27181_27249[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27129 === (35))){
var inst_27110 = (state_27128[(2)]);
var state_27128__$1 = state_27128;
var statearr_27182_27250 = state_27128__$1;
(statearr_27182_27250[(2)] = inst_27110);

(statearr_27182_27250[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27129 === (19))){
var inst_27029 = (state_27128[(7)]);
var inst_27033 = cljs.core.chunk_first.call(null,inst_27029);
var inst_27034 = cljs.core.chunk_rest.call(null,inst_27029);
var inst_27035 = cljs.core.count.call(null,inst_27033);
var inst_27009 = inst_27034;
var inst_27010 = inst_27033;
var inst_27011 = inst_27035;
var inst_27012 = (0);
var state_27128__$1 = (function (){var statearr_27183 = state_27128;
(statearr_27183[(13)] = inst_27012);

(statearr_27183[(14)] = inst_27010);

(statearr_27183[(15)] = inst_27011);

(statearr_27183[(17)] = inst_27009);

return statearr_27183;
})();
var statearr_27184_27251 = state_27128__$1;
(statearr_27184_27251[(2)] = null);

(statearr_27184_27251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27129 === (11))){
var inst_27029 = (state_27128[(7)]);
var inst_27009 = (state_27128[(17)]);
var inst_27029__$1 = cljs.core.seq.call(null,inst_27009);
var state_27128__$1 = (function (){var statearr_27185 = state_27128;
(statearr_27185[(7)] = inst_27029__$1);

return statearr_27185;
})();
if(inst_27029__$1){
var statearr_27186_27252 = state_27128__$1;
(statearr_27186_27252[(1)] = (16));

} else {
var statearr_27187_27253 = state_27128__$1;
(statearr_27187_27253[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27129 === (9))){
var inst_27057 = (state_27128[(2)]);
var state_27128__$1 = state_27128;
var statearr_27188_27254 = state_27128__$1;
(statearr_27188_27254[(2)] = inst_27057);

(statearr_27188_27254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27129 === (5))){
var inst_27007 = cljs.core.deref.call(null,cs);
var inst_27008 = cljs.core.seq.call(null,inst_27007);
var inst_27009 = inst_27008;
var inst_27010 = null;
var inst_27011 = (0);
var inst_27012 = (0);
var state_27128__$1 = (function (){var statearr_27189 = state_27128;
(statearr_27189[(13)] = inst_27012);

(statearr_27189[(14)] = inst_27010);

(statearr_27189[(15)] = inst_27011);

(statearr_27189[(17)] = inst_27009);

return statearr_27189;
})();
var statearr_27190_27255 = state_27128__$1;
(statearr_27190_27255[(2)] = null);

(statearr_27190_27255[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27129 === (14))){
var state_27128__$1 = state_27128;
var statearr_27191_27256 = state_27128__$1;
(statearr_27191_27256[(2)] = null);

(statearr_27191_27256[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27129 === (45))){
var inst_27118 = (state_27128[(2)]);
var state_27128__$1 = state_27128;
var statearr_27192_27257 = state_27128__$1;
(statearr_27192_27257[(2)] = inst_27118);

(statearr_27192_27257[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27129 === (26))){
var inst_27060 = (state_27128[(29)]);
var inst_27114 = (state_27128[(2)]);
var inst_27115 = cljs.core.seq.call(null,inst_27060);
var state_27128__$1 = (function (){var statearr_27193 = state_27128;
(statearr_27193[(31)] = inst_27114);

return statearr_27193;
})();
if(inst_27115){
var statearr_27194_27258 = state_27128__$1;
(statearr_27194_27258[(1)] = (42));

} else {
var statearr_27195_27259 = state_27128__$1;
(statearr_27195_27259[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27129 === (16))){
var inst_27029 = (state_27128[(7)]);
var inst_27031 = cljs.core.chunked_seq_QMARK_.call(null,inst_27029);
var state_27128__$1 = state_27128;
if(inst_27031){
var statearr_27196_27260 = state_27128__$1;
(statearr_27196_27260[(1)] = (19));

} else {
var statearr_27197_27261 = state_27128__$1;
(statearr_27197_27261[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27129 === (38))){
var inst_27107 = (state_27128[(2)]);
var state_27128__$1 = state_27128;
var statearr_27198_27262 = state_27128__$1;
(statearr_27198_27262[(2)] = inst_27107);

(statearr_27198_27262[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27129 === (30))){
var state_27128__$1 = state_27128;
var statearr_27199_27263 = state_27128__$1;
(statearr_27199_27263[(2)] = null);

(statearr_27199_27263[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27129 === (10))){
var inst_27012 = (state_27128[(13)]);
var inst_27010 = (state_27128[(14)]);
var inst_27018 = cljs.core._nth.call(null,inst_27010,inst_27012);
var inst_27019 = cljs.core.nth.call(null,inst_27018,(0),null);
var inst_27020 = cljs.core.nth.call(null,inst_27018,(1),null);
var state_27128__$1 = (function (){var statearr_27200 = state_27128;
(statearr_27200[(26)] = inst_27019);

return statearr_27200;
})();
if(cljs.core.truth_(inst_27020)){
var statearr_27201_27264 = state_27128__$1;
(statearr_27201_27264[(1)] = (13));

} else {
var statearr_27202_27265 = state_27128__$1;
(statearr_27202_27265[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27129 === (18))){
var inst_27053 = (state_27128[(2)]);
var state_27128__$1 = state_27128;
var statearr_27203_27266 = state_27128__$1;
(statearr_27203_27266[(2)] = inst_27053);

(statearr_27203_27266[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27129 === (42))){
var state_27128__$1 = state_27128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27128__$1,(45),dchan);
} else {
if((state_val_27129 === (37))){
var inst_27087 = (state_27128[(25)]);
var inst_27096 = (state_27128[(23)]);
var inst_27000 = (state_27128[(12)]);
var inst_27096__$1 = cljs.core.first.call(null,inst_27087);
var inst_27097 = cljs.core.async.put_BANG_.call(null,inst_27096__$1,inst_27000,done);
var state_27128__$1 = (function (){var statearr_27204 = state_27128;
(statearr_27204[(23)] = inst_27096__$1);

return statearr_27204;
})();
if(cljs.core.truth_(inst_27097)){
var statearr_27205_27267 = state_27128__$1;
(statearr_27205_27267[(1)] = (39));

} else {
var statearr_27206_27268 = state_27128__$1;
(statearr_27206_27268[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27129 === (8))){
var inst_27012 = (state_27128[(13)]);
var inst_27011 = (state_27128[(15)]);
var inst_27014 = (inst_27012 < inst_27011);
var inst_27015 = inst_27014;
var state_27128__$1 = state_27128;
if(cljs.core.truth_(inst_27015)){
var statearr_27207_27269 = state_27128__$1;
(statearr_27207_27269[(1)] = (10));

} else {
var statearr_27208_27270 = state_27128__$1;
(statearr_27208_27270[(1)] = (11));

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
});})(c__19048__auto___27216,cs,m,dchan,dctr,done))
;
return ((function (switch__18986__auto__,c__19048__auto___27216,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18987__auto__ = null;
var cljs$core$async$mult_$_state_machine__18987__auto____0 = (function (){
var statearr_27212 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27212[(0)] = cljs$core$async$mult_$_state_machine__18987__auto__);

(statearr_27212[(1)] = (1));

return statearr_27212;
});
var cljs$core$async$mult_$_state_machine__18987__auto____1 = (function (state_27128){
while(true){
var ret_value__18988__auto__ = (function (){try{while(true){
var result__18989__auto__ = switch__18986__auto__.call(null,state_27128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18989__auto__;
}
break;
}
}catch (e27213){if((e27213 instanceof Object)){
var ex__18990__auto__ = e27213;
var statearr_27214_27271 = state_27128;
(statearr_27214_27271[(5)] = ex__18990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27213;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27272 = state_27128;
state_27128 = G__27272;
continue;
} else {
return ret_value__18988__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18987__auto__ = function(state_27128){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18987__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18987__auto____1.call(this,state_27128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18987__auto____0;
cljs$core$async$mult_$_state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18987__auto____1;
return cljs$core$async$mult_$_state_machine__18987__auto__;
})()
;})(switch__18986__auto__,c__19048__auto___27216,cs,m,dchan,dctr,done))
})();
var state__19050__auto__ = (function (){var statearr_27215 = f__19049__auto__.call(null);
(statearr_27215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19048__auto___27216);

return statearr_27215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19050__auto__);
});})(c__19048__auto___27216,cs,m,dchan,dctr,done))
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
var G__27274 = arguments.length;
switch (G__27274) {
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

cljs.core.async.Mix = (function (){var obj27277 = {};
return obj27277;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__16026__auto__ = m;
if(and__16026__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__16026__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__16674__auto__ = (((m == null))?null:m);
return (function (){var or__16038__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16674__auto__)]);
if(or__16038__auto__){
return or__16038__auto__;
} else {
var or__16038__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__16038__auto____$1){
return or__16038__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__16026__auto__ = m;
if(and__16026__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__16026__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__16674__auto__ = (((m == null))?null:m);
return (function (){var or__16038__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16674__auto__)]);
if(or__16038__auto__){
return or__16038__auto__;
} else {
var or__16038__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__16038__auto____$1){
return or__16038__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__16026__auto__ = m;
if(and__16026__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__16026__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__16674__auto__ = (((m == null))?null:m);
return (function (){var or__16038__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16674__auto__)]);
if(or__16038__auto__){
return or__16038__auto__;
} else {
var or__16038__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__16038__auto____$1){
return or__16038__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__16026__auto__ = m;
if(and__16026__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__16026__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__16674__auto__ = (((m == null))?null:m);
return (function (){var or__16038__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16674__auto__)]);
if(or__16038__auto__){
return or__16038__auto__;
} else {
var or__16038__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__16038__auto____$1){
return or__16038__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__16026__auto__ = m;
if(and__16026__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__16026__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__16674__auto__ = (((m == null))?null:m);
return (function (){var or__16038__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16674__auto__)]);
if(or__16038__auto__){
return or__16038__auto__;
} else {
var or__16038__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__16038__auto____$1){
return or__16038__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__17078__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17078__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27282){
var map__27283 = p__27282;
var map__27283__$1 = ((cljs.core.seq_QMARK_.call(null,map__27283))?cljs.core.apply.call(null,cljs.core.hash_map,map__27283):map__27283);
var opts = map__27283__$1;
var statearr_27284_27287 = state;
(statearr_27284_27287[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4423__auto__ = cljs.core.async.do_alts.call(null,((function (map__27283,map__27283__$1,opts){
return (function (val){
var statearr_27285_27288 = state;
(statearr_27285_27288[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27283,map__27283__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4423__auto__)){
var cb = temp__4423__auto__;
var statearr_27286_27289 = state;
(statearr_27286_27289[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27278){
var G__27279 = cljs.core.first.call(null,seq27278);
var seq27278__$1 = cljs.core.next.call(null,seq27278);
var G__27280 = cljs.core.first.call(null,seq27278__$1);
var seq27278__$2 = cljs.core.next.call(null,seq27278__$1);
var G__27281 = cljs.core.first.call(null,seq27278__$2);
var seq27278__$3 = cljs.core.next.call(null,seq27278__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27279,G__27280,G__27281,seq27278__$3);
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
if(typeof cljs.core.async.t27409 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27409 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27410){
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
this.meta27410 = meta27410;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27411,meta27410__$1){
var self__ = this;
var _27411__$1 = this;
return (new cljs.core.async.t27409(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27410__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27409.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27411){
var self__ = this;
var _27411__$1 = this;
return self__.meta27410;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27409.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27409.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27409.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t27409.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27409.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27409.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27409.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27409.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t27409.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27410","meta27410",-1940121099,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t27409.cljs$lang$type = true;

cljs.core.async.t27409.cljs$lang$ctorStr = "cljs.core.async/t27409";

cljs.core.async.t27409.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16617__auto__,writer__16618__auto__,opt__16619__auto__){
return cljs.core._write.call(null,writer__16618__auto__,"cljs.core.async/t27409");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t27409 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t27409(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27410){
return (new cljs.core.async.t27409(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27410));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t27409(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19048__auto___27528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19048__auto___27528,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19049__auto__ = (function (){var switch__18986__auto__ = ((function (c__19048__auto___27528,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27481){
var state_val_27482 = (state_27481[(1)]);
if((state_val_27482 === (7))){
var inst_27425 = (state_27481[(7)]);
var inst_27430 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27425);
var state_27481__$1 = state_27481;
var statearr_27483_27529 = state_27481__$1;
(statearr_27483_27529[(2)] = inst_27430);

(statearr_27483_27529[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27482 === (20))){
var inst_27440 = (state_27481[(8)]);
var state_27481__$1 = state_27481;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27481__$1,(23),out,inst_27440);
} else {
if((state_val_27482 === (1))){
var inst_27415 = (state_27481[(9)]);
var inst_27415__$1 = calc_state.call(null);
var inst_27416 = cljs.core.seq_QMARK_.call(null,inst_27415__$1);
var state_27481__$1 = (function (){var statearr_27484 = state_27481;
(statearr_27484[(9)] = inst_27415__$1);

return statearr_27484;
})();
if(inst_27416){
var statearr_27485_27530 = state_27481__$1;
(statearr_27485_27530[(1)] = (2));

} else {
var statearr_27486_27531 = state_27481__$1;
(statearr_27486_27531[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27482 === (24))){
var inst_27433 = (state_27481[(10)]);
var inst_27425 = inst_27433;
var state_27481__$1 = (function (){var statearr_27487 = state_27481;
(statearr_27487[(7)] = inst_27425);

return statearr_27487;
})();
var statearr_27488_27532 = state_27481__$1;
(statearr_27488_27532[(2)] = null);

(statearr_27488_27532[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27482 === (4))){
var inst_27415 = (state_27481[(9)]);
var inst_27421 = (state_27481[(2)]);
var inst_27422 = cljs.core.get.call(null,inst_27421,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27423 = cljs.core.get.call(null,inst_27421,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27424 = cljs.core.get.call(null,inst_27421,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27425 = inst_27415;
var state_27481__$1 = (function (){var statearr_27489 = state_27481;
(statearr_27489[(11)] = inst_27422);

(statearr_27489[(12)] = inst_27423);

(statearr_27489[(7)] = inst_27425);

(statearr_27489[(13)] = inst_27424);

return statearr_27489;
})();
var statearr_27490_27533 = state_27481__$1;
(statearr_27490_27533[(2)] = null);

(statearr_27490_27533[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27482 === (15))){
var state_27481__$1 = state_27481;
var statearr_27491_27534 = state_27481__$1;
(statearr_27491_27534[(2)] = null);

(statearr_27491_27534[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27482 === (21))){
var inst_27433 = (state_27481[(10)]);
var inst_27425 = inst_27433;
var state_27481__$1 = (function (){var statearr_27492 = state_27481;
(statearr_27492[(7)] = inst_27425);

return statearr_27492;
})();
var statearr_27493_27535 = state_27481__$1;
(statearr_27493_27535[(2)] = null);

(statearr_27493_27535[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27482 === (13))){
var inst_27477 = (state_27481[(2)]);
var state_27481__$1 = state_27481;
var statearr_27494_27536 = state_27481__$1;
(statearr_27494_27536[(2)] = inst_27477);

(statearr_27494_27536[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27482 === (22))){
var inst_27475 = (state_27481[(2)]);
var state_27481__$1 = state_27481;
var statearr_27495_27537 = state_27481__$1;
(statearr_27495_27537[(2)] = inst_27475);

(statearr_27495_27537[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27482 === (6))){
var inst_27479 = (state_27481[(2)]);
var state_27481__$1 = state_27481;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27481__$1,inst_27479);
} else {
if((state_val_27482 === (25))){
var state_27481__$1 = state_27481;
var statearr_27496_27538 = state_27481__$1;
(statearr_27496_27538[(2)] = null);

(statearr_27496_27538[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27482 === (17))){
var inst_27455 = (state_27481[(14)]);
var state_27481__$1 = state_27481;
var statearr_27497_27539 = state_27481__$1;
(statearr_27497_27539[(2)] = inst_27455);

(statearr_27497_27539[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27482 === (3))){
var inst_27415 = (state_27481[(9)]);
var state_27481__$1 = state_27481;
var statearr_27498_27540 = state_27481__$1;
(statearr_27498_27540[(2)] = inst_27415);

(statearr_27498_27540[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27482 === (12))){
var inst_27455 = (state_27481[(14)]);
var inst_27434 = (state_27481[(15)]);
var inst_27441 = (state_27481[(16)]);
var inst_27455__$1 = inst_27434.call(null,inst_27441);
var state_27481__$1 = (function (){var statearr_27499 = state_27481;
(statearr_27499[(14)] = inst_27455__$1);

return statearr_27499;
})();
if(cljs.core.truth_(inst_27455__$1)){
var statearr_27500_27541 = state_27481__$1;
(statearr_27500_27541[(1)] = (17));

} else {
var statearr_27501_27542 = state_27481__$1;
(statearr_27501_27542[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27482 === (2))){
var inst_27415 = (state_27481[(9)]);
var inst_27418 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27415);
var state_27481__$1 = state_27481;
var statearr_27502_27543 = state_27481__$1;
(statearr_27502_27543[(2)] = inst_27418);

(statearr_27502_27543[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27482 === (23))){
var inst_27466 = (state_27481[(2)]);
var state_27481__$1 = state_27481;
if(cljs.core.truth_(inst_27466)){
var statearr_27503_27544 = state_27481__$1;
(statearr_27503_27544[(1)] = (24));

} else {
var statearr_27504_27545 = state_27481__$1;
(statearr_27504_27545[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27482 === (19))){
var inst_27463 = (state_27481[(2)]);
var state_27481__$1 = state_27481;
if(cljs.core.truth_(inst_27463)){
var statearr_27505_27546 = state_27481__$1;
(statearr_27505_27546[(1)] = (20));

} else {
var statearr_27506_27547 = state_27481__$1;
(statearr_27506_27547[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27482 === (11))){
var inst_27440 = (state_27481[(8)]);
var inst_27446 = (inst_27440 == null);
var state_27481__$1 = state_27481;
if(cljs.core.truth_(inst_27446)){
var statearr_27507_27548 = state_27481__$1;
(statearr_27507_27548[(1)] = (14));

} else {
var statearr_27508_27549 = state_27481__$1;
(statearr_27508_27549[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27482 === (9))){
var inst_27433 = (state_27481[(10)]);
var inst_27433__$1 = (state_27481[(2)]);
var inst_27434 = cljs.core.get.call(null,inst_27433__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27435 = cljs.core.get.call(null,inst_27433__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27436 = cljs.core.get.call(null,inst_27433__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27481__$1 = (function (){var statearr_27509 = state_27481;
(statearr_27509[(10)] = inst_27433__$1);

(statearr_27509[(15)] = inst_27434);

(statearr_27509[(17)] = inst_27435);

return statearr_27509;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27481__$1,(10),inst_27436);
} else {
if((state_val_27482 === (5))){
var inst_27425 = (state_27481[(7)]);
var inst_27428 = cljs.core.seq_QMARK_.call(null,inst_27425);
var state_27481__$1 = state_27481;
if(inst_27428){
var statearr_27510_27550 = state_27481__$1;
(statearr_27510_27550[(1)] = (7));

} else {
var statearr_27511_27551 = state_27481__$1;
(statearr_27511_27551[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27482 === (14))){
var inst_27441 = (state_27481[(16)]);
var inst_27448 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27441);
var state_27481__$1 = state_27481;
var statearr_27512_27552 = state_27481__$1;
(statearr_27512_27552[(2)] = inst_27448);

(statearr_27512_27552[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27482 === (26))){
var inst_27471 = (state_27481[(2)]);
var state_27481__$1 = state_27481;
var statearr_27513_27553 = state_27481__$1;
(statearr_27513_27553[(2)] = inst_27471);

(statearr_27513_27553[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27482 === (16))){
var inst_27451 = (state_27481[(2)]);
var inst_27452 = calc_state.call(null);
var inst_27425 = inst_27452;
var state_27481__$1 = (function (){var statearr_27514 = state_27481;
(statearr_27514[(18)] = inst_27451);

(statearr_27514[(7)] = inst_27425);

return statearr_27514;
})();
var statearr_27515_27554 = state_27481__$1;
(statearr_27515_27554[(2)] = null);

(statearr_27515_27554[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27482 === (10))){
var inst_27440 = (state_27481[(8)]);
var inst_27441 = (state_27481[(16)]);
var inst_27439 = (state_27481[(2)]);
var inst_27440__$1 = cljs.core.nth.call(null,inst_27439,(0),null);
var inst_27441__$1 = cljs.core.nth.call(null,inst_27439,(1),null);
var inst_27442 = (inst_27440__$1 == null);
var inst_27443 = cljs.core._EQ_.call(null,inst_27441__$1,change);
var inst_27444 = (inst_27442) || (inst_27443);
var state_27481__$1 = (function (){var statearr_27516 = state_27481;
(statearr_27516[(8)] = inst_27440__$1);

(statearr_27516[(16)] = inst_27441__$1);

return statearr_27516;
})();
if(cljs.core.truth_(inst_27444)){
var statearr_27517_27555 = state_27481__$1;
(statearr_27517_27555[(1)] = (11));

} else {
var statearr_27518_27556 = state_27481__$1;
(statearr_27518_27556[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27482 === (18))){
var inst_27434 = (state_27481[(15)]);
var inst_27441 = (state_27481[(16)]);
var inst_27435 = (state_27481[(17)]);
var inst_27458 = cljs.core.empty_QMARK_.call(null,inst_27434);
var inst_27459 = inst_27435.call(null,inst_27441);
var inst_27460 = cljs.core.not.call(null,inst_27459);
var inst_27461 = (inst_27458) && (inst_27460);
var state_27481__$1 = state_27481;
var statearr_27519_27557 = state_27481__$1;
(statearr_27519_27557[(2)] = inst_27461);

(statearr_27519_27557[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27482 === (8))){
var inst_27425 = (state_27481[(7)]);
var state_27481__$1 = state_27481;
var statearr_27520_27558 = state_27481__$1;
(statearr_27520_27558[(2)] = inst_27425);

(statearr_27520_27558[(1)] = (9));


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
});})(c__19048__auto___27528,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18986__auto__,c__19048__auto___27528,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18987__auto__ = null;
var cljs$core$async$mix_$_state_machine__18987__auto____0 = (function (){
var statearr_27524 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27524[(0)] = cljs$core$async$mix_$_state_machine__18987__auto__);

(statearr_27524[(1)] = (1));

return statearr_27524;
});
var cljs$core$async$mix_$_state_machine__18987__auto____1 = (function (state_27481){
while(true){
var ret_value__18988__auto__ = (function (){try{while(true){
var result__18989__auto__ = switch__18986__auto__.call(null,state_27481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18989__auto__;
}
break;
}
}catch (e27525){if((e27525 instanceof Object)){
var ex__18990__auto__ = e27525;
var statearr_27526_27559 = state_27481;
(statearr_27526_27559[(5)] = ex__18990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27560 = state_27481;
state_27481 = G__27560;
continue;
} else {
return ret_value__18988__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18987__auto__ = function(state_27481){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18987__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18987__auto____1.call(this,state_27481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18987__auto____0;
cljs$core$async$mix_$_state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18987__auto____1;
return cljs$core$async$mix_$_state_machine__18987__auto__;
})()
;})(switch__18986__auto__,c__19048__auto___27528,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19050__auto__ = (function (){var statearr_27527 = f__19049__auto__.call(null);
(statearr_27527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19048__auto___27528);

return statearr_27527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19050__auto__);
});})(c__19048__auto___27528,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj27562 = {};
return obj27562;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__16026__auto__ = p;
if(and__16026__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__16026__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__16674__auto__ = (((p == null))?null:p);
return (function (){var or__16038__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16674__auto__)]);
if(or__16038__auto__){
return or__16038__auto__;
} else {
var or__16038__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__16038__auto____$1){
return or__16038__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__16026__auto__ = p;
if(and__16026__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__16026__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__16674__auto__ = (((p == null))?null:p);
return (function (){var or__16038__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16674__auto__)]);
if(or__16038__auto__){
return or__16038__auto__;
} else {
var or__16038__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__16038__auto____$1){
return or__16038__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__27564 = arguments.length;
switch (G__27564) {
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
if((function (){var and__16026__auto__ = p;
if(and__16026__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__16026__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16674__auto__ = (((p == null))?null:p);
return (function (){var or__16038__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16674__auto__)]);
if(or__16038__auto__){
return or__16038__auto__;
} else {
var or__16038__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16038__auto____$1){
return or__16038__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__16026__auto__ = p;
if(and__16026__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__16026__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__16674__auto__ = (((p == null))?null:p);
return (function (){var or__16038__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16674__auto__)]);
if(or__16038__auto__){
return or__16038__auto__;
} else {
var or__16038__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__16038__auto____$1){
return or__16038__auto____$1;
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
var G__27568 = arguments.length;
switch (G__27568) {
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
var or__16038__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16038__auto__)){
return or__16038__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16038__auto__,mults){
return (function (p1__27566_SHARP_){
if(cljs.core.truth_(p1__27566_SHARP_.call(null,topic))){
return p1__27566_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27566_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16038__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t27569 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27569 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27570){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27570 = meta27570;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27571,meta27570__$1){
var self__ = this;
var _27571__$1 = this;
return (new cljs.core.async.t27569(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27570__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t27569.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27571){
var self__ = this;
var _27571__$1 = this;
return self__.meta27570;
});})(mults,ensure_mult))
;

cljs.core.async.t27569.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t27569.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t27569.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t27569.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t27569.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t27569.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t27569.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t27569.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27570","meta27570",456430979,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t27569.cljs$lang$type = true;

cljs.core.async.t27569.cljs$lang$ctorStr = "cljs.core.async/t27569";

cljs.core.async.t27569.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16617__auto__,writer__16618__auto__,opt__16619__auto__){
return cljs.core._write.call(null,writer__16618__auto__,"cljs.core.async/t27569");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t27569 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t27569(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27570){
return (new cljs.core.async.t27569(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27570));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t27569(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19048__auto___27692 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19048__auto___27692,mults,ensure_mult,p){
return (function (){
var f__19049__auto__ = (function (){var switch__18986__auto__ = ((function (c__19048__auto___27692,mults,ensure_mult,p){
return (function (state_27643){
var state_val_27644 = (state_27643[(1)]);
if((state_val_27644 === (7))){
var inst_27639 = (state_27643[(2)]);
var state_27643__$1 = state_27643;
var statearr_27645_27693 = state_27643__$1;
(statearr_27645_27693[(2)] = inst_27639);

(statearr_27645_27693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (20))){
var state_27643__$1 = state_27643;
var statearr_27646_27694 = state_27643__$1;
(statearr_27646_27694[(2)] = null);

(statearr_27646_27694[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (1))){
var state_27643__$1 = state_27643;
var statearr_27647_27695 = state_27643__$1;
(statearr_27647_27695[(2)] = null);

(statearr_27647_27695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (24))){
var inst_27622 = (state_27643[(7)]);
var inst_27631 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27622);
var state_27643__$1 = state_27643;
var statearr_27648_27696 = state_27643__$1;
(statearr_27648_27696[(2)] = inst_27631);

(statearr_27648_27696[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (4))){
var inst_27574 = (state_27643[(8)]);
var inst_27574__$1 = (state_27643[(2)]);
var inst_27575 = (inst_27574__$1 == null);
var state_27643__$1 = (function (){var statearr_27649 = state_27643;
(statearr_27649[(8)] = inst_27574__$1);

return statearr_27649;
})();
if(cljs.core.truth_(inst_27575)){
var statearr_27650_27697 = state_27643__$1;
(statearr_27650_27697[(1)] = (5));

} else {
var statearr_27651_27698 = state_27643__$1;
(statearr_27651_27698[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (15))){
var inst_27616 = (state_27643[(2)]);
var state_27643__$1 = state_27643;
var statearr_27652_27699 = state_27643__$1;
(statearr_27652_27699[(2)] = inst_27616);

(statearr_27652_27699[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (21))){
var inst_27636 = (state_27643[(2)]);
var state_27643__$1 = (function (){var statearr_27653 = state_27643;
(statearr_27653[(9)] = inst_27636);

return statearr_27653;
})();
var statearr_27654_27700 = state_27643__$1;
(statearr_27654_27700[(2)] = null);

(statearr_27654_27700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (13))){
var inst_27598 = (state_27643[(10)]);
var inst_27600 = cljs.core.chunked_seq_QMARK_.call(null,inst_27598);
var state_27643__$1 = state_27643;
if(inst_27600){
var statearr_27655_27701 = state_27643__$1;
(statearr_27655_27701[(1)] = (16));

} else {
var statearr_27656_27702 = state_27643__$1;
(statearr_27656_27702[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (22))){
var inst_27628 = (state_27643[(2)]);
var state_27643__$1 = state_27643;
if(cljs.core.truth_(inst_27628)){
var statearr_27657_27703 = state_27643__$1;
(statearr_27657_27703[(1)] = (23));

} else {
var statearr_27658_27704 = state_27643__$1;
(statearr_27658_27704[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (6))){
var inst_27624 = (state_27643[(11)]);
var inst_27622 = (state_27643[(7)]);
var inst_27574 = (state_27643[(8)]);
var inst_27622__$1 = topic_fn.call(null,inst_27574);
var inst_27623 = cljs.core.deref.call(null,mults);
var inst_27624__$1 = cljs.core.get.call(null,inst_27623,inst_27622__$1);
var state_27643__$1 = (function (){var statearr_27659 = state_27643;
(statearr_27659[(11)] = inst_27624__$1);

(statearr_27659[(7)] = inst_27622__$1);

return statearr_27659;
})();
if(cljs.core.truth_(inst_27624__$1)){
var statearr_27660_27705 = state_27643__$1;
(statearr_27660_27705[(1)] = (19));

} else {
var statearr_27661_27706 = state_27643__$1;
(statearr_27661_27706[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (25))){
var inst_27633 = (state_27643[(2)]);
var state_27643__$1 = state_27643;
var statearr_27662_27707 = state_27643__$1;
(statearr_27662_27707[(2)] = inst_27633);

(statearr_27662_27707[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (17))){
var inst_27598 = (state_27643[(10)]);
var inst_27607 = cljs.core.first.call(null,inst_27598);
var inst_27608 = cljs.core.async.muxch_STAR_.call(null,inst_27607);
var inst_27609 = cljs.core.async.close_BANG_.call(null,inst_27608);
var inst_27610 = cljs.core.next.call(null,inst_27598);
var inst_27584 = inst_27610;
var inst_27585 = null;
var inst_27586 = (0);
var inst_27587 = (0);
var state_27643__$1 = (function (){var statearr_27663 = state_27643;
(statearr_27663[(12)] = inst_27587);

(statearr_27663[(13)] = inst_27609);

(statearr_27663[(14)] = inst_27586);

(statearr_27663[(15)] = inst_27584);

(statearr_27663[(16)] = inst_27585);

return statearr_27663;
})();
var statearr_27664_27708 = state_27643__$1;
(statearr_27664_27708[(2)] = null);

(statearr_27664_27708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (3))){
var inst_27641 = (state_27643[(2)]);
var state_27643__$1 = state_27643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27643__$1,inst_27641);
} else {
if((state_val_27644 === (12))){
var inst_27618 = (state_27643[(2)]);
var state_27643__$1 = state_27643;
var statearr_27665_27709 = state_27643__$1;
(statearr_27665_27709[(2)] = inst_27618);

(statearr_27665_27709[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (2))){
var state_27643__$1 = state_27643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27643__$1,(4),ch);
} else {
if((state_val_27644 === (23))){
var state_27643__$1 = state_27643;
var statearr_27666_27710 = state_27643__$1;
(statearr_27666_27710[(2)] = null);

(statearr_27666_27710[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (19))){
var inst_27624 = (state_27643[(11)]);
var inst_27574 = (state_27643[(8)]);
var inst_27626 = cljs.core.async.muxch_STAR_.call(null,inst_27624);
var state_27643__$1 = state_27643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27643__$1,(22),inst_27626,inst_27574);
} else {
if((state_val_27644 === (11))){
var inst_27598 = (state_27643[(10)]);
var inst_27584 = (state_27643[(15)]);
var inst_27598__$1 = cljs.core.seq.call(null,inst_27584);
var state_27643__$1 = (function (){var statearr_27667 = state_27643;
(statearr_27667[(10)] = inst_27598__$1);

return statearr_27667;
})();
if(inst_27598__$1){
var statearr_27668_27711 = state_27643__$1;
(statearr_27668_27711[(1)] = (13));

} else {
var statearr_27669_27712 = state_27643__$1;
(statearr_27669_27712[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (9))){
var inst_27620 = (state_27643[(2)]);
var state_27643__$1 = state_27643;
var statearr_27670_27713 = state_27643__$1;
(statearr_27670_27713[(2)] = inst_27620);

(statearr_27670_27713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (5))){
var inst_27581 = cljs.core.deref.call(null,mults);
var inst_27582 = cljs.core.vals.call(null,inst_27581);
var inst_27583 = cljs.core.seq.call(null,inst_27582);
var inst_27584 = inst_27583;
var inst_27585 = null;
var inst_27586 = (0);
var inst_27587 = (0);
var state_27643__$1 = (function (){var statearr_27671 = state_27643;
(statearr_27671[(12)] = inst_27587);

(statearr_27671[(14)] = inst_27586);

(statearr_27671[(15)] = inst_27584);

(statearr_27671[(16)] = inst_27585);

return statearr_27671;
})();
var statearr_27672_27714 = state_27643__$1;
(statearr_27672_27714[(2)] = null);

(statearr_27672_27714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (14))){
var state_27643__$1 = state_27643;
var statearr_27676_27715 = state_27643__$1;
(statearr_27676_27715[(2)] = null);

(statearr_27676_27715[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (16))){
var inst_27598 = (state_27643[(10)]);
var inst_27602 = cljs.core.chunk_first.call(null,inst_27598);
var inst_27603 = cljs.core.chunk_rest.call(null,inst_27598);
var inst_27604 = cljs.core.count.call(null,inst_27602);
var inst_27584 = inst_27603;
var inst_27585 = inst_27602;
var inst_27586 = inst_27604;
var inst_27587 = (0);
var state_27643__$1 = (function (){var statearr_27677 = state_27643;
(statearr_27677[(12)] = inst_27587);

(statearr_27677[(14)] = inst_27586);

(statearr_27677[(15)] = inst_27584);

(statearr_27677[(16)] = inst_27585);

return statearr_27677;
})();
var statearr_27678_27716 = state_27643__$1;
(statearr_27678_27716[(2)] = null);

(statearr_27678_27716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (10))){
var inst_27587 = (state_27643[(12)]);
var inst_27586 = (state_27643[(14)]);
var inst_27584 = (state_27643[(15)]);
var inst_27585 = (state_27643[(16)]);
var inst_27592 = cljs.core._nth.call(null,inst_27585,inst_27587);
var inst_27593 = cljs.core.async.muxch_STAR_.call(null,inst_27592);
var inst_27594 = cljs.core.async.close_BANG_.call(null,inst_27593);
var inst_27595 = (inst_27587 + (1));
var tmp27673 = inst_27586;
var tmp27674 = inst_27584;
var tmp27675 = inst_27585;
var inst_27584__$1 = tmp27674;
var inst_27585__$1 = tmp27675;
var inst_27586__$1 = tmp27673;
var inst_27587__$1 = inst_27595;
var state_27643__$1 = (function (){var statearr_27679 = state_27643;
(statearr_27679[(12)] = inst_27587__$1);

(statearr_27679[(14)] = inst_27586__$1);

(statearr_27679[(15)] = inst_27584__$1);

(statearr_27679[(17)] = inst_27594);

(statearr_27679[(16)] = inst_27585__$1);

return statearr_27679;
})();
var statearr_27680_27717 = state_27643__$1;
(statearr_27680_27717[(2)] = null);

(statearr_27680_27717[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (18))){
var inst_27613 = (state_27643[(2)]);
var state_27643__$1 = state_27643;
var statearr_27681_27718 = state_27643__$1;
(statearr_27681_27718[(2)] = inst_27613);

(statearr_27681_27718[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27644 === (8))){
var inst_27587 = (state_27643[(12)]);
var inst_27586 = (state_27643[(14)]);
var inst_27589 = (inst_27587 < inst_27586);
var inst_27590 = inst_27589;
var state_27643__$1 = state_27643;
if(cljs.core.truth_(inst_27590)){
var statearr_27682_27719 = state_27643__$1;
(statearr_27682_27719[(1)] = (10));

} else {
var statearr_27683_27720 = state_27643__$1;
(statearr_27683_27720[(1)] = (11));

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
});})(c__19048__auto___27692,mults,ensure_mult,p))
;
return ((function (switch__18986__auto__,c__19048__auto___27692,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18987__auto__ = null;
var cljs$core$async$state_machine__18987__auto____0 = (function (){
var statearr_27687 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27687[(0)] = cljs$core$async$state_machine__18987__auto__);

(statearr_27687[(1)] = (1));

return statearr_27687;
});
var cljs$core$async$state_machine__18987__auto____1 = (function (state_27643){
while(true){
var ret_value__18988__auto__ = (function (){try{while(true){
var result__18989__auto__ = switch__18986__auto__.call(null,state_27643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18989__auto__;
}
break;
}
}catch (e27688){if((e27688 instanceof Object)){
var ex__18990__auto__ = e27688;
var statearr_27689_27721 = state_27643;
(statearr_27689_27721[(5)] = ex__18990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27722 = state_27643;
state_27643 = G__27722;
continue;
} else {
return ret_value__18988__auto__;
}
break;
}
});
cljs$core$async$state_machine__18987__auto__ = function(state_27643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18987__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18987__auto____1.call(this,state_27643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18987__auto____0;
cljs$core$async$state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18987__auto____1;
return cljs$core$async$state_machine__18987__auto__;
})()
;})(switch__18986__auto__,c__19048__auto___27692,mults,ensure_mult,p))
})();
var state__19050__auto__ = (function (){var statearr_27690 = f__19049__auto__.call(null);
(statearr_27690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19048__auto___27692);

return statearr_27690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19050__auto__);
});})(c__19048__auto___27692,mults,ensure_mult,p))
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
var G__27724 = arguments.length;
switch (G__27724) {
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
var G__27727 = arguments.length;
switch (G__27727) {
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
var G__27730 = arguments.length;
switch (G__27730) {
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
var c__19048__auto___27800 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19048__auto___27800,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19049__auto__ = (function (){var switch__18986__auto__ = ((function (c__19048__auto___27800,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27769){
var state_val_27770 = (state_27769[(1)]);
if((state_val_27770 === (7))){
var state_27769__$1 = state_27769;
var statearr_27771_27801 = state_27769__$1;
(statearr_27771_27801[(2)] = null);

(statearr_27771_27801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27770 === (1))){
var state_27769__$1 = state_27769;
var statearr_27772_27802 = state_27769__$1;
(statearr_27772_27802[(2)] = null);

(statearr_27772_27802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27770 === (4))){
var inst_27733 = (state_27769[(7)]);
var inst_27735 = (inst_27733 < cnt);
var state_27769__$1 = state_27769;
if(cljs.core.truth_(inst_27735)){
var statearr_27773_27803 = state_27769__$1;
(statearr_27773_27803[(1)] = (6));

} else {
var statearr_27774_27804 = state_27769__$1;
(statearr_27774_27804[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27770 === (15))){
var inst_27765 = (state_27769[(2)]);
var state_27769__$1 = state_27769;
var statearr_27775_27805 = state_27769__$1;
(statearr_27775_27805[(2)] = inst_27765);

(statearr_27775_27805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27770 === (13))){
var inst_27758 = cljs.core.async.close_BANG_.call(null,out);
var state_27769__$1 = state_27769;
var statearr_27776_27806 = state_27769__$1;
(statearr_27776_27806[(2)] = inst_27758);

(statearr_27776_27806[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27770 === (6))){
var state_27769__$1 = state_27769;
var statearr_27777_27807 = state_27769__$1;
(statearr_27777_27807[(2)] = null);

(statearr_27777_27807[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27770 === (3))){
var inst_27767 = (state_27769[(2)]);
var state_27769__$1 = state_27769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27769__$1,inst_27767);
} else {
if((state_val_27770 === (12))){
var inst_27755 = (state_27769[(8)]);
var inst_27755__$1 = (state_27769[(2)]);
var inst_27756 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27755__$1);
var state_27769__$1 = (function (){var statearr_27778 = state_27769;
(statearr_27778[(8)] = inst_27755__$1);

return statearr_27778;
})();
if(cljs.core.truth_(inst_27756)){
var statearr_27779_27808 = state_27769__$1;
(statearr_27779_27808[(1)] = (13));

} else {
var statearr_27780_27809 = state_27769__$1;
(statearr_27780_27809[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27770 === (2))){
var inst_27732 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27733 = (0);
var state_27769__$1 = (function (){var statearr_27781 = state_27769;
(statearr_27781[(7)] = inst_27733);

(statearr_27781[(9)] = inst_27732);

return statearr_27781;
})();
var statearr_27782_27810 = state_27769__$1;
(statearr_27782_27810[(2)] = null);

(statearr_27782_27810[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27770 === (11))){
var inst_27733 = (state_27769[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27769,(10),Object,null,(9));
var inst_27742 = chs__$1.call(null,inst_27733);
var inst_27743 = done.call(null,inst_27733);
var inst_27744 = cljs.core.async.take_BANG_.call(null,inst_27742,inst_27743);
var state_27769__$1 = state_27769;
var statearr_27783_27811 = state_27769__$1;
(statearr_27783_27811[(2)] = inst_27744);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27769__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27770 === (9))){
var inst_27733 = (state_27769[(7)]);
var inst_27746 = (state_27769[(2)]);
var inst_27747 = (inst_27733 + (1));
var inst_27733__$1 = inst_27747;
var state_27769__$1 = (function (){var statearr_27784 = state_27769;
(statearr_27784[(10)] = inst_27746);

(statearr_27784[(7)] = inst_27733__$1);

return statearr_27784;
})();
var statearr_27785_27812 = state_27769__$1;
(statearr_27785_27812[(2)] = null);

(statearr_27785_27812[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27770 === (5))){
var inst_27753 = (state_27769[(2)]);
var state_27769__$1 = (function (){var statearr_27786 = state_27769;
(statearr_27786[(11)] = inst_27753);

return statearr_27786;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27769__$1,(12),dchan);
} else {
if((state_val_27770 === (14))){
var inst_27755 = (state_27769[(8)]);
var inst_27760 = cljs.core.apply.call(null,f,inst_27755);
var state_27769__$1 = state_27769;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27769__$1,(16),out,inst_27760);
} else {
if((state_val_27770 === (16))){
var inst_27762 = (state_27769[(2)]);
var state_27769__$1 = (function (){var statearr_27787 = state_27769;
(statearr_27787[(12)] = inst_27762);

return statearr_27787;
})();
var statearr_27788_27813 = state_27769__$1;
(statearr_27788_27813[(2)] = null);

(statearr_27788_27813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27770 === (10))){
var inst_27737 = (state_27769[(2)]);
var inst_27738 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27769__$1 = (function (){var statearr_27789 = state_27769;
(statearr_27789[(13)] = inst_27737);

return statearr_27789;
})();
var statearr_27790_27814 = state_27769__$1;
(statearr_27790_27814[(2)] = inst_27738);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27769__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27770 === (8))){
var inst_27751 = (state_27769[(2)]);
var state_27769__$1 = state_27769;
var statearr_27791_27815 = state_27769__$1;
(statearr_27791_27815[(2)] = inst_27751);

(statearr_27791_27815[(1)] = (5));


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
});})(c__19048__auto___27800,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18986__auto__,c__19048__auto___27800,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18987__auto__ = null;
var cljs$core$async$state_machine__18987__auto____0 = (function (){
var statearr_27795 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27795[(0)] = cljs$core$async$state_machine__18987__auto__);

(statearr_27795[(1)] = (1));

return statearr_27795;
});
var cljs$core$async$state_machine__18987__auto____1 = (function (state_27769){
while(true){
var ret_value__18988__auto__ = (function (){try{while(true){
var result__18989__auto__ = switch__18986__auto__.call(null,state_27769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18989__auto__;
}
break;
}
}catch (e27796){if((e27796 instanceof Object)){
var ex__18990__auto__ = e27796;
var statearr_27797_27816 = state_27769;
(statearr_27797_27816[(5)] = ex__18990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27817 = state_27769;
state_27769 = G__27817;
continue;
} else {
return ret_value__18988__auto__;
}
break;
}
});
cljs$core$async$state_machine__18987__auto__ = function(state_27769){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18987__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18987__auto____1.call(this,state_27769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18987__auto____0;
cljs$core$async$state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18987__auto____1;
return cljs$core$async$state_machine__18987__auto__;
})()
;})(switch__18986__auto__,c__19048__auto___27800,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19050__auto__ = (function (){var statearr_27798 = f__19049__auto__.call(null);
(statearr_27798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19048__auto___27800);

return statearr_27798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19050__auto__);
});})(c__19048__auto___27800,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__27820 = arguments.length;
switch (G__27820) {
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
var c__19048__auto___27875 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19048__auto___27875,out){
return (function (){
var f__19049__auto__ = (function (){var switch__18986__auto__ = ((function (c__19048__auto___27875,out){
return (function (state_27850){
var state_val_27851 = (state_27850[(1)]);
if((state_val_27851 === (7))){
var inst_27830 = (state_27850[(7)]);
var inst_27829 = (state_27850[(8)]);
var inst_27829__$1 = (state_27850[(2)]);
var inst_27830__$1 = cljs.core.nth.call(null,inst_27829__$1,(0),null);
var inst_27831 = cljs.core.nth.call(null,inst_27829__$1,(1),null);
var inst_27832 = (inst_27830__$1 == null);
var state_27850__$1 = (function (){var statearr_27852 = state_27850;
(statearr_27852[(7)] = inst_27830__$1);

(statearr_27852[(9)] = inst_27831);

(statearr_27852[(8)] = inst_27829__$1);

return statearr_27852;
})();
if(cljs.core.truth_(inst_27832)){
var statearr_27853_27876 = state_27850__$1;
(statearr_27853_27876[(1)] = (8));

} else {
var statearr_27854_27877 = state_27850__$1;
(statearr_27854_27877[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (1))){
var inst_27821 = cljs.core.vec.call(null,chs);
var inst_27822 = inst_27821;
var state_27850__$1 = (function (){var statearr_27855 = state_27850;
(statearr_27855[(10)] = inst_27822);

return statearr_27855;
})();
var statearr_27856_27878 = state_27850__$1;
(statearr_27856_27878[(2)] = null);

(statearr_27856_27878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (4))){
var inst_27822 = (state_27850[(10)]);
var state_27850__$1 = state_27850;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27850__$1,(7),inst_27822);
} else {
if((state_val_27851 === (6))){
var inst_27846 = (state_27850[(2)]);
var state_27850__$1 = state_27850;
var statearr_27857_27879 = state_27850__$1;
(statearr_27857_27879[(2)] = inst_27846);

(statearr_27857_27879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (3))){
var inst_27848 = (state_27850[(2)]);
var state_27850__$1 = state_27850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27850__$1,inst_27848);
} else {
if((state_val_27851 === (2))){
var inst_27822 = (state_27850[(10)]);
var inst_27824 = cljs.core.count.call(null,inst_27822);
var inst_27825 = (inst_27824 > (0));
var state_27850__$1 = state_27850;
if(cljs.core.truth_(inst_27825)){
var statearr_27859_27880 = state_27850__$1;
(statearr_27859_27880[(1)] = (4));

} else {
var statearr_27860_27881 = state_27850__$1;
(statearr_27860_27881[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (11))){
var inst_27822 = (state_27850[(10)]);
var inst_27839 = (state_27850[(2)]);
var tmp27858 = inst_27822;
var inst_27822__$1 = tmp27858;
var state_27850__$1 = (function (){var statearr_27861 = state_27850;
(statearr_27861[(10)] = inst_27822__$1);

(statearr_27861[(11)] = inst_27839);

return statearr_27861;
})();
var statearr_27862_27882 = state_27850__$1;
(statearr_27862_27882[(2)] = null);

(statearr_27862_27882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (9))){
var inst_27830 = (state_27850[(7)]);
var state_27850__$1 = state_27850;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27850__$1,(11),out,inst_27830);
} else {
if((state_val_27851 === (5))){
var inst_27844 = cljs.core.async.close_BANG_.call(null,out);
var state_27850__$1 = state_27850;
var statearr_27863_27883 = state_27850__$1;
(statearr_27863_27883[(2)] = inst_27844);

(statearr_27863_27883[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (10))){
var inst_27842 = (state_27850[(2)]);
var state_27850__$1 = state_27850;
var statearr_27864_27884 = state_27850__$1;
(statearr_27864_27884[(2)] = inst_27842);

(statearr_27864_27884[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27851 === (8))){
var inst_27830 = (state_27850[(7)]);
var inst_27831 = (state_27850[(9)]);
var inst_27822 = (state_27850[(10)]);
var inst_27829 = (state_27850[(8)]);
var inst_27834 = (function (){var cs = inst_27822;
var vec__27827 = inst_27829;
var v = inst_27830;
var c = inst_27831;
return ((function (cs,vec__27827,v,c,inst_27830,inst_27831,inst_27822,inst_27829,state_val_27851,c__19048__auto___27875,out){
return (function (p1__27818_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27818_SHARP_);
});
;})(cs,vec__27827,v,c,inst_27830,inst_27831,inst_27822,inst_27829,state_val_27851,c__19048__auto___27875,out))
})();
var inst_27835 = cljs.core.filterv.call(null,inst_27834,inst_27822);
var inst_27822__$1 = inst_27835;
var state_27850__$1 = (function (){var statearr_27865 = state_27850;
(statearr_27865[(10)] = inst_27822__$1);

return statearr_27865;
})();
var statearr_27866_27885 = state_27850__$1;
(statearr_27866_27885[(2)] = null);

(statearr_27866_27885[(1)] = (2));


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
});})(c__19048__auto___27875,out))
;
return ((function (switch__18986__auto__,c__19048__auto___27875,out){
return (function() {
var cljs$core$async$state_machine__18987__auto__ = null;
var cljs$core$async$state_machine__18987__auto____0 = (function (){
var statearr_27870 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27870[(0)] = cljs$core$async$state_machine__18987__auto__);

(statearr_27870[(1)] = (1));

return statearr_27870;
});
var cljs$core$async$state_machine__18987__auto____1 = (function (state_27850){
while(true){
var ret_value__18988__auto__ = (function (){try{while(true){
var result__18989__auto__ = switch__18986__auto__.call(null,state_27850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18989__auto__;
}
break;
}
}catch (e27871){if((e27871 instanceof Object)){
var ex__18990__auto__ = e27871;
var statearr_27872_27886 = state_27850;
(statearr_27872_27886[(5)] = ex__18990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27887 = state_27850;
state_27850 = G__27887;
continue;
} else {
return ret_value__18988__auto__;
}
break;
}
});
cljs$core$async$state_machine__18987__auto__ = function(state_27850){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18987__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18987__auto____1.call(this,state_27850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18987__auto____0;
cljs$core$async$state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18987__auto____1;
return cljs$core$async$state_machine__18987__auto__;
})()
;})(switch__18986__auto__,c__19048__auto___27875,out))
})();
var state__19050__auto__ = (function (){var statearr_27873 = f__19049__auto__.call(null);
(statearr_27873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19048__auto___27875);

return statearr_27873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19050__auto__);
});})(c__19048__auto___27875,out))
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
var G__27889 = arguments.length;
switch (G__27889) {
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
var c__19048__auto___27937 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19048__auto___27937,out){
return (function (){
var f__19049__auto__ = (function (){var switch__18986__auto__ = ((function (c__19048__auto___27937,out){
return (function (state_27913){
var state_val_27914 = (state_27913[(1)]);
if((state_val_27914 === (7))){
var inst_27895 = (state_27913[(7)]);
var inst_27895__$1 = (state_27913[(2)]);
var inst_27896 = (inst_27895__$1 == null);
var inst_27897 = cljs.core.not.call(null,inst_27896);
var state_27913__$1 = (function (){var statearr_27915 = state_27913;
(statearr_27915[(7)] = inst_27895__$1);

return statearr_27915;
})();
if(inst_27897){
var statearr_27916_27938 = state_27913__$1;
(statearr_27916_27938[(1)] = (8));

} else {
var statearr_27917_27939 = state_27913__$1;
(statearr_27917_27939[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (1))){
var inst_27890 = (0);
var state_27913__$1 = (function (){var statearr_27918 = state_27913;
(statearr_27918[(8)] = inst_27890);

return statearr_27918;
})();
var statearr_27919_27940 = state_27913__$1;
(statearr_27919_27940[(2)] = null);

(statearr_27919_27940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (4))){
var state_27913__$1 = state_27913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27913__$1,(7),ch);
} else {
if((state_val_27914 === (6))){
var inst_27908 = (state_27913[(2)]);
var state_27913__$1 = state_27913;
var statearr_27920_27941 = state_27913__$1;
(statearr_27920_27941[(2)] = inst_27908);

(statearr_27920_27941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (3))){
var inst_27910 = (state_27913[(2)]);
var inst_27911 = cljs.core.async.close_BANG_.call(null,out);
var state_27913__$1 = (function (){var statearr_27921 = state_27913;
(statearr_27921[(9)] = inst_27910);

return statearr_27921;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27913__$1,inst_27911);
} else {
if((state_val_27914 === (2))){
var inst_27890 = (state_27913[(8)]);
var inst_27892 = (inst_27890 < n);
var state_27913__$1 = state_27913;
if(cljs.core.truth_(inst_27892)){
var statearr_27922_27942 = state_27913__$1;
(statearr_27922_27942[(1)] = (4));

} else {
var statearr_27923_27943 = state_27913__$1;
(statearr_27923_27943[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (11))){
var inst_27890 = (state_27913[(8)]);
var inst_27900 = (state_27913[(2)]);
var inst_27901 = (inst_27890 + (1));
var inst_27890__$1 = inst_27901;
var state_27913__$1 = (function (){var statearr_27924 = state_27913;
(statearr_27924[(10)] = inst_27900);

(statearr_27924[(8)] = inst_27890__$1);

return statearr_27924;
})();
var statearr_27925_27944 = state_27913__$1;
(statearr_27925_27944[(2)] = null);

(statearr_27925_27944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (9))){
var state_27913__$1 = state_27913;
var statearr_27926_27945 = state_27913__$1;
(statearr_27926_27945[(2)] = null);

(statearr_27926_27945[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (5))){
var state_27913__$1 = state_27913;
var statearr_27927_27946 = state_27913__$1;
(statearr_27927_27946[(2)] = null);

(statearr_27927_27946[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (10))){
var inst_27905 = (state_27913[(2)]);
var state_27913__$1 = state_27913;
var statearr_27928_27947 = state_27913__$1;
(statearr_27928_27947[(2)] = inst_27905);

(statearr_27928_27947[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27914 === (8))){
var inst_27895 = (state_27913[(7)]);
var state_27913__$1 = state_27913;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27913__$1,(11),out,inst_27895);
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
});})(c__19048__auto___27937,out))
;
return ((function (switch__18986__auto__,c__19048__auto___27937,out){
return (function() {
var cljs$core$async$state_machine__18987__auto__ = null;
var cljs$core$async$state_machine__18987__auto____0 = (function (){
var statearr_27932 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27932[(0)] = cljs$core$async$state_machine__18987__auto__);

(statearr_27932[(1)] = (1));

return statearr_27932;
});
var cljs$core$async$state_machine__18987__auto____1 = (function (state_27913){
while(true){
var ret_value__18988__auto__ = (function (){try{while(true){
var result__18989__auto__ = switch__18986__auto__.call(null,state_27913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18989__auto__;
}
break;
}
}catch (e27933){if((e27933 instanceof Object)){
var ex__18990__auto__ = e27933;
var statearr_27934_27948 = state_27913;
(statearr_27934_27948[(5)] = ex__18990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27949 = state_27913;
state_27913 = G__27949;
continue;
} else {
return ret_value__18988__auto__;
}
break;
}
});
cljs$core$async$state_machine__18987__auto__ = function(state_27913){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18987__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18987__auto____1.call(this,state_27913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18987__auto____0;
cljs$core$async$state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18987__auto____1;
return cljs$core$async$state_machine__18987__auto__;
})()
;})(switch__18986__auto__,c__19048__auto___27937,out))
})();
var state__19050__auto__ = (function (){var statearr_27935 = f__19049__auto__.call(null);
(statearr_27935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19048__auto___27937);

return statearr_27935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19050__auto__);
});})(c__19048__auto___27937,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t27957 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27957 = (function (map_LT_,f,ch,meta27958){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27958 = meta27958;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27959,meta27958__$1){
var self__ = this;
var _27959__$1 = this;
return (new cljs.core.async.t27957(self__.map_LT_,self__.f,self__.ch,meta27958__$1));
});

cljs.core.async.t27957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27959){
var self__ = this;
var _27959__$1 = this;
return self__.meta27958;
});

cljs.core.async.t27957.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27957.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27957.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27957.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27957.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t27960 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27960 = (function (map_LT_,f,ch,meta27958,_,fn1,meta27961){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27958 = meta27958;
this._ = _;
this.fn1 = fn1;
this.meta27961 = meta27961;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27962,meta27961__$1){
var self__ = this;
var _27962__$1 = this;
return (new cljs.core.async.t27960(self__.map_LT_,self__.f,self__.ch,self__.meta27958,self__._,self__.fn1,meta27961__$1));
});})(___$1))
;

cljs.core.async.t27960.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27962){
var self__ = this;
var _27962__$1 = this;
return self__.meta27961;
});})(___$1))
;

cljs.core.async.t27960.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27960.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t27960.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27950_SHARP_){
return f1.call(null,(((p1__27950_SHARP_ == null))?null:self__.f.call(null,p1__27950_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t27960.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27958","meta27958",-1274968573,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27961","meta27961",-880280430,null)], null);
});})(___$1))
;

cljs.core.async.t27960.cljs$lang$type = true;

cljs.core.async.t27960.cljs$lang$ctorStr = "cljs.core.async/t27960";

cljs.core.async.t27960.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16617__auto__,writer__16618__auto__,opt__16619__auto__){
return cljs.core._write.call(null,writer__16618__auto__,"cljs.core.async/t27960");
});})(___$1))
;

cljs.core.async.__GT_t27960 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t27960(map_LT___$1,f__$1,ch__$1,meta27958__$1,___$2,fn1__$1,meta27961){
return (new cljs.core.async.t27960(map_LT___$1,f__$1,ch__$1,meta27958__$1,___$2,fn1__$1,meta27961));
});})(___$1))
;

}

return (new cljs.core.async.t27960(self__.map_LT_,self__.f,self__.ch,self__.meta27958,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16026__auto__ = ret;
if(cljs.core.truth_(and__16026__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16026__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t27957.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27957.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t27957.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27958","meta27958",-1274968573,null)], null);
});

cljs.core.async.t27957.cljs$lang$type = true;

cljs.core.async.t27957.cljs$lang$ctorStr = "cljs.core.async/t27957";

cljs.core.async.t27957.cljs$lang$ctorPrWriter = (function (this__16617__auto__,writer__16618__auto__,opt__16619__auto__){
return cljs.core._write.call(null,writer__16618__auto__,"cljs.core.async/t27957");
});

cljs.core.async.__GT_t27957 = (function cljs$core$async$map_LT__$___GT_t27957(map_LT___$1,f__$1,ch__$1,meta27958){
return (new cljs.core.async.t27957(map_LT___$1,f__$1,ch__$1,meta27958));
});

}

return (new cljs.core.async.t27957(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t27966 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27966 = (function (map_GT_,f,ch,meta27967){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta27967 = meta27967;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27968,meta27967__$1){
var self__ = this;
var _27968__$1 = this;
return (new cljs.core.async.t27966(self__.map_GT_,self__.f,self__.ch,meta27967__$1));
});

cljs.core.async.t27966.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27968){
var self__ = this;
var _27968__$1 = this;
return self__.meta27967;
});

cljs.core.async.t27966.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27966.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27966.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27966.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27966.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27966.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t27966.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27967","meta27967",-1454839797,null)], null);
});

cljs.core.async.t27966.cljs$lang$type = true;

cljs.core.async.t27966.cljs$lang$ctorStr = "cljs.core.async/t27966";

cljs.core.async.t27966.cljs$lang$ctorPrWriter = (function (this__16617__auto__,writer__16618__auto__,opt__16619__auto__){
return cljs.core._write.call(null,writer__16618__auto__,"cljs.core.async/t27966");
});

cljs.core.async.__GT_t27966 = (function cljs$core$async$map_GT__$___GT_t27966(map_GT___$1,f__$1,ch__$1,meta27967){
return (new cljs.core.async.t27966(map_GT___$1,f__$1,ch__$1,meta27967));
});

}

return (new cljs.core.async.t27966(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t27972 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27972 = (function (filter_GT_,p,ch,meta27973){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta27973 = meta27973;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t27972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27974,meta27973__$1){
var self__ = this;
var _27974__$1 = this;
return (new cljs.core.async.t27972(self__.filter_GT_,self__.p,self__.ch,meta27973__$1));
});

cljs.core.async.t27972.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27974){
var self__ = this;
var _27974__$1 = this;
return self__.meta27973;
});

cljs.core.async.t27972.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27972.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27972.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27972.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27972.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27972.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27972.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t27972.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27973","meta27973",1893161480,null)], null);
});

cljs.core.async.t27972.cljs$lang$type = true;

cljs.core.async.t27972.cljs$lang$ctorStr = "cljs.core.async/t27972";

cljs.core.async.t27972.cljs$lang$ctorPrWriter = (function (this__16617__auto__,writer__16618__auto__,opt__16619__auto__){
return cljs.core._write.call(null,writer__16618__auto__,"cljs.core.async/t27972");
});

cljs.core.async.__GT_t27972 = (function cljs$core$async$filter_GT__$___GT_t27972(filter_GT___$1,p__$1,ch__$1,meta27973){
return (new cljs.core.async.t27972(filter_GT___$1,p__$1,ch__$1,meta27973));
});

}

return (new cljs.core.async.t27972(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27976 = arguments.length;
switch (G__27976) {
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
var c__19048__auto___28019 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19048__auto___28019,out){
return (function (){
var f__19049__auto__ = (function (){var switch__18986__auto__ = ((function (c__19048__auto___28019,out){
return (function (state_27997){
var state_val_27998 = (state_27997[(1)]);
if((state_val_27998 === (7))){
var inst_27993 = (state_27997[(2)]);
var state_27997__$1 = state_27997;
var statearr_27999_28020 = state_27997__$1;
(statearr_27999_28020[(2)] = inst_27993);

(statearr_27999_28020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27998 === (1))){
var state_27997__$1 = state_27997;
var statearr_28000_28021 = state_27997__$1;
(statearr_28000_28021[(2)] = null);

(statearr_28000_28021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27998 === (4))){
var inst_27979 = (state_27997[(7)]);
var inst_27979__$1 = (state_27997[(2)]);
var inst_27980 = (inst_27979__$1 == null);
var state_27997__$1 = (function (){var statearr_28001 = state_27997;
(statearr_28001[(7)] = inst_27979__$1);

return statearr_28001;
})();
if(cljs.core.truth_(inst_27980)){
var statearr_28002_28022 = state_27997__$1;
(statearr_28002_28022[(1)] = (5));

} else {
var statearr_28003_28023 = state_27997__$1;
(statearr_28003_28023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27998 === (6))){
var inst_27979 = (state_27997[(7)]);
var inst_27984 = p.call(null,inst_27979);
var state_27997__$1 = state_27997;
if(cljs.core.truth_(inst_27984)){
var statearr_28004_28024 = state_27997__$1;
(statearr_28004_28024[(1)] = (8));

} else {
var statearr_28005_28025 = state_27997__$1;
(statearr_28005_28025[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27998 === (3))){
var inst_27995 = (state_27997[(2)]);
var state_27997__$1 = state_27997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27997__$1,inst_27995);
} else {
if((state_val_27998 === (2))){
var state_27997__$1 = state_27997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27997__$1,(4),ch);
} else {
if((state_val_27998 === (11))){
var inst_27987 = (state_27997[(2)]);
var state_27997__$1 = state_27997;
var statearr_28006_28026 = state_27997__$1;
(statearr_28006_28026[(2)] = inst_27987);

(statearr_28006_28026[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27998 === (9))){
var state_27997__$1 = state_27997;
var statearr_28007_28027 = state_27997__$1;
(statearr_28007_28027[(2)] = null);

(statearr_28007_28027[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27998 === (5))){
var inst_27982 = cljs.core.async.close_BANG_.call(null,out);
var state_27997__$1 = state_27997;
var statearr_28008_28028 = state_27997__$1;
(statearr_28008_28028[(2)] = inst_27982);

(statearr_28008_28028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27998 === (10))){
var inst_27990 = (state_27997[(2)]);
var state_27997__$1 = (function (){var statearr_28009 = state_27997;
(statearr_28009[(8)] = inst_27990);

return statearr_28009;
})();
var statearr_28010_28029 = state_27997__$1;
(statearr_28010_28029[(2)] = null);

(statearr_28010_28029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27998 === (8))){
var inst_27979 = (state_27997[(7)]);
var state_27997__$1 = state_27997;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27997__$1,(11),out,inst_27979);
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
});})(c__19048__auto___28019,out))
;
return ((function (switch__18986__auto__,c__19048__auto___28019,out){
return (function() {
var cljs$core$async$state_machine__18987__auto__ = null;
var cljs$core$async$state_machine__18987__auto____0 = (function (){
var statearr_28014 = [null,null,null,null,null,null,null,null,null];
(statearr_28014[(0)] = cljs$core$async$state_machine__18987__auto__);

(statearr_28014[(1)] = (1));

return statearr_28014;
});
var cljs$core$async$state_machine__18987__auto____1 = (function (state_27997){
while(true){
var ret_value__18988__auto__ = (function (){try{while(true){
var result__18989__auto__ = switch__18986__auto__.call(null,state_27997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18989__auto__;
}
break;
}
}catch (e28015){if((e28015 instanceof Object)){
var ex__18990__auto__ = e28015;
var statearr_28016_28030 = state_27997;
(statearr_28016_28030[(5)] = ex__18990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28031 = state_27997;
state_27997 = G__28031;
continue;
} else {
return ret_value__18988__auto__;
}
break;
}
});
cljs$core$async$state_machine__18987__auto__ = function(state_27997){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18987__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18987__auto____1.call(this,state_27997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18987__auto____0;
cljs$core$async$state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18987__auto____1;
return cljs$core$async$state_machine__18987__auto__;
})()
;})(switch__18986__auto__,c__19048__auto___28019,out))
})();
var state__19050__auto__ = (function (){var statearr_28017 = f__19049__auto__.call(null);
(statearr_28017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19048__auto___28019);

return statearr_28017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19050__auto__);
});})(c__19048__auto___28019,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__28033 = arguments.length;
switch (G__28033) {
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
var c__19048__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19048__auto__){
return (function (){
var f__19049__auto__ = (function (){var switch__18986__auto__ = ((function (c__19048__auto__){
return (function (state_28200){
var state_val_28201 = (state_28200[(1)]);
if((state_val_28201 === (7))){
var inst_28196 = (state_28200[(2)]);
var state_28200__$1 = state_28200;
var statearr_28202_28243 = state_28200__$1;
(statearr_28202_28243[(2)] = inst_28196);

(statearr_28202_28243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28201 === (20))){
var inst_28166 = (state_28200[(7)]);
var inst_28177 = (state_28200[(2)]);
var inst_28178 = cljs.core.next.call(null,inst_28166);
var inst_28152 = inst_28178;
var inst_28153 = null;
var inst_28154 = (0);
var inst_28155 = (0);
var state_28200__$1 = (function (){var statearr_28203 = state_28200;
(statearr_28203[(8)] = inst_28154);

(statearr_28203[(9)] = inst_28152);

(statearr_28203[(10)] = inst_28153);

(statearr_28203[(11)] = inst_28155);

(statearr_28203[(12)] = inst_28177);

return statearr_28203;
})();
var statearr_28204_28244 = state_28200__$1;
(statearr_28204_28244[(2)] = null);

(statearr_28204_28244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28201 === (1))){
var state_28200__$1 = state_28200;
var statearr_28205_28245 = state_28200__$1;
(statearr_28205_28245[(2)] = null);

(statearr_28205_28245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28201 === (4))){
var inst_28141 = (state_28200[(13)]);
var inst_28141__$1 = (state_28200[(2)]);
var inst_28142 = (inst_28141__$1 == null);
var state_28200__$1 = (function (){var statearr_28206 = state_28200;
(statearr_28206[(13)] = inst_28141__$1);

return statearr_28206;
})();
if(cljs.core.truth_(inst_28142)){
var statearr_28207_28246 = state_28200__$1;
(statearr_28207_28246[(1)] = (5));

} else {
var statearr_28208_28247 = state_28200__$1;
(statearr_28208_28247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28201 === (15))){
var state_28200__$1 = state_28200;
var statearr_28212_28248 = state_28200__$1;
(statearr_28212_28248[(2)] = null);

(statearr_28212_28248[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28201 === (21))){
var state_28200__$1 = state_28200;
var statearr_28213_28249 = state_28200__$1;
(statearr_28213_28249[(2)] = null);

(statearr_28213_28249[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28201 === (13))){
var inst_28154 = (state_28200[(8)]);
var inst_28152 = (state_28200[(9)]);
var inst_28153 = (state_28200[(10)]);
var inst_28155 = (state_28200[(11)]);
var inst_28162 = (state_28200[(2)]);
var inst_28163 = (inst_28155 + (1));
var tmp28209 = inst_28154;
var tmp28210 = inst_28152;
var tmp28211 = inst_28153;
var inst_28152__$1 = tmp28210;
var inst_28153__$1 = tmp28211;
var inst_28154__$1 = tmp28209;
var inst_28155__$1 = inst_28163;
var state_28200__$1 = (function (){var statearr_28214 = state_28200;
(statearr_28214[(8)] = inst_28154__$1);

(statearr_28214[(9)] = inst_28152__$1);

(statearr_28214[(10)] = inst_28153__$1);

(statearr_28214[(11)] = inst_28155__$1);

(statearr_28214[(14)] = inst_28162);

return statearr_28214;
})();
var statearr_28215_28250 = state_28200__$1;
(statearr_28215_28250[(2)] = null);

(statearr_28215_28250[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28201 === (22))){
var state_28200__$1 = state_28200;
var statearr_28216_28251 = state_28200__$1;
(statearr_28216_28251[(2)] = null);

(statearr_28216_28251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28201 === (6))){
var inst_28141 = (state_28200[(13)]);
var inst_28150 = f.call(null,inst_28141);
var inst_28151 = cljs.core.seq.call(null,inst_28150);
var inst_28152 = inst_28151;
var inst_28153 = null;
var inst_28154 = (0);
var inst_28155 = (0);
var state_28200__$1 = (function (){var statearr_28217 = state_28200;
(statearr_28217[(8)] = inst_28154);

(statearr_28217[(9)] = inst_28152);

(statearr_28217[(10)] = inst_28153);

(statearr_28217[(11)] = inst_28155);

return statearr_28217;
})();
var statearr_28218_28252 = state_28200__$1;
(statearr_28218_28252[(2)] = null);

(statearr_28218_28252[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28201 === (17))){
var inst_28166 = (state_28200[(7)]);
var inst_28170 = cljs.core.chunk_first.call(null,inst_28166);
var inst_28171 = cljs.core.chunk_rest.call(null,inst_28166);
var inst_28172 = cljs.core.count.call(null,inst_28170);
var inst_28152 = inst_28171;
var inst_28153 = inst_28170;
var inst_28154 = inst_28172;
var inst_28155 = (0);
var state_28200__$1 = (function (){var statearr_28219 = state_28200;
(statearr_28219[(8)] = inst_28154);

(statearr_28219[(9)] = inst_28152);

(statearr_28219[(10)] = inst_28153);

(statearr_28219[(11)] = inst_28155);

return statearr_28219;
})();
var statearr_28220_28253 = state_28200__$1;
(statearr_28220_28253[(2)] = null);

(statearr_28220_28253[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28201 === (3))){
var inst_28198 = (state_28200[(2)]);
var state_28200__$1 = state_28200;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28200__$1,inst_28198);
} else {
if((state_val_28201 === (12))){
var inst_28186 = (state_28200[(2)]);
var state_28200__$1 = state_28200;
var statearr_28221_28254 = state_28200__$1;
(statearr_28221_28254[(2)] = inst_28186);

(statearr_28221_28254[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28201 === (2))){
var state_28200__$1 = state_28200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28200__$1,(4),in$);
} else {
if((state_val_28201 === (23))){
var inst_28194 = (state_28200[(2)]);
var state_28200__$1 = state_28200;
var statearr_28222_28255 = state_28200__$1;
(statearr_28222_28255[(2)] = inst_28194);

(statearr_28222_28255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28201 === (19))){
var inst_28181 = (state_28200[(2)]);
var state_28200__$1 = state_28200;
var statearr_28223_28256 = state_28200__$1;
(statearr_28223_28256[(2)] = inst_28181);

(statearr_28223_28256[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28201 === (11))){
var inst_28166 = (state_28200[(7)]);
var inst_28152 = (state_28200[(9)]);
var inst_28166__$1 = cljs.core.seq.call(null,inst_28152);
var state_28200__$1 = (function (){var statearr_28224 = state_28200;
(statearr_28224[(7)] = inst_28166__$1);

return statearr_28224;
})();
if(inst_28166__$1){
var statearr_28225_28257 = state_28200__$1;
(statearr_28225_28257[(1)] = (14));

} else {
var statearr_28226_28258 = state_28200__$1;
(statearr_28226_28258[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28201 === (9))){
var inst_28188 = (state_28200[(2)]);
var inst_28189 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28200__$1 = (function (){var statearr_28227 = state_28200;
(statearr_28227[(15)] = inst_28188);

return statearr_28227;
})();
if(cljs.core.truth_(inst_28189)){
var statearr_28228_28259 = state_28200__$1;
(statearr_28228_28259[(1)] = (21));

} else {
var statearr_28229_28260 = state_28200__$1;
(statearr_28229_28260[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28201 === (5))){
var inst_28144 = cljs.core.async.close_BANG_.call(null,out);
var state_28200__$1 = state_28200;
var statearr_28230_28261 = state_28200__$1;
(statearr_28230_28261[(2)] = inst_28144);

(statearr_28230_28261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28201 === (14))){
var inst_28166 = (state_28200[(7)]);
var inst_28168 = cljs.core.chunked_seq_QMARK_.call(null,inst_28166);
var state_28200__$1 = state_28200;
if(inst_28168){
var statearr_28231_28262 = state_28200__$1;
(statearr_28231_28262[(1)] = (17));

} else {
var statearr_28232_28263 = state_28200__$1;
(statearr_28232_28263[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28201 === (16))){
var inst_28184 = (state_28200[(2)]);
var state_28200__$1 = state_28200;
var statearr_28233_28264 = state_28200__$1;
(statearr_28233_28264[(2)] = inst_28184);

(statearr_28233_28264[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28201 === (10))){
var inst_28153 = (state_28200[(10)]);
var inst_28155 = (state_28200[(11)]);
var inst_28160 = cljs.core._nth.call(null,inst_28153,inst_28155);
var state_28200__$1 = state_28200;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28200__$1,(13),out,inst_28160);
} else {
if((state_val_28201 === (18))){
var inst_28166 = (state_28200[(7)]);
var inst_28175 = cljs.core.first.call(null,inst_28166);
var state_28200__$1 = state_28200;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28200__$1,(20),out,inst_28175);
} else {
if((state_val_28201 === (8))){
var inst_28154 = (state_28200[(8)]);
var inst_28155 = (state_28200[(11)]);
var inst_28157 = (inst_28155 < inst_28154);
var inst_28158 = inst_28157;
var state_28200__$1 = state_28200;
if(cljs.core.truth_(inst_28158)){
var statearr_28234_28265 = state_28200__$1;
(statearr_28234_28265[(1)] = (10));

} else {
var statearr_28235_28266 = state_28200__$1;
(statearr_28235_28266[(1)] = (11));

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
});})(c__19048__auto__))
;
return ((function (switch__18986__auto__,c__19048__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18987__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18987__auto____0 = (function (){
var statearr_28239 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28239[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18987__auto__);

(statearr_28239[(1)] = (1));

return statearr_28239;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18987__auto____1 = (function (state_28200){
while(true){
var ret_value__18988__auto__ = (function (){try{while(true){
var result__18989__auto__ = switch__18986__auto__.call(null,state_28200);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18989__auto__;
}
break;
}
}catch (e28240){if((e28240 instanceof Object)){
var ex__18990__auto__ = e28240;
var statearr_28241_28267 = state_28200;
(statearr_28241_28267[(5)] = ex__18990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28200);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28268 = state_28200;
state_28200 = G__28268;
continue;
} else {
return ret_value__18988__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18987__auto__ = function(state_28200){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18987__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18987__auto____1.call(this,state_28200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18987__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18987__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18987__auto__;
})()
;})(switch__18986__auto__,c__19048__auto__))
})();
var state__19050__auto__ = (function (){var statearr_28242 = f__19049__auto__.call(null);
(statearr_28242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19048__auto__);

return statearr_28242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19050__auto__);
});})(c__19048__auto__))
);

return c__19048__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__28270 = arguments.length;
switch (G__28270) {
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
var G__28273 = arguments.length;
switch (G__28273) {
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
var G__28276 = arguments.length;
switch (G__28276) {
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
var c__19048__auto___28326 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19048__auto___28326,out){
return (function (){
var f__19049__auto__ = (function (){var switch__18986__auto__ = ((function (c__19048__auto___28326,out){
return (function (state_28300){
var state_val_28301 = (state_28300[(1)]);
if((state_val_28301 === (7))){
var inst_28295 = (state_28300[(2)]);
var state_28300__$1 = state_28300;
var statearr_28302_28327 = state_28300__$1;
(statearr_28302_28327[(2)] = inst_28295);

(statearr_28302_28327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (1))){
var inst_28277 = null;
var state_28300__$1 = (function (){var statearr_28303 = state_28300;
(statearr_28303[(7)] = inst_28277);

return statearr_28303;
})();
var statearr_28304_28328 = state_28300__$1;
(statearr_28304_28328[(2)] = null);

(statearr_28304_28328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (4))){
var inst_28280 = (state_28300[(8)]);
var inst_28280__$1 = (state_28300[(2)]);
var inst_28281 = (inst_28280__$1 == null);
var inst_28282 = cljs.core.not.call(null,inst_28281);
var state_28300__$1 = (function (){var statearr_28305 = state_28300;
(statearr_28305[(8)] = inst_28280__$1);

return statearr_28305;
})();
if(inst_28282){
var statearr_28306_28329 = state_28300__$1;
(statearr_28306_28329[(1)] = (5));

} else {
var statearr_28307_28330 = state_28300__$1;
(statearr_28307_28330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (6))){
var state_28300__$1 = state_28300;
var statearr_28308_28331 = state_28300__$1;
(statearr_28308_28331[(2)] = null);

(statearr_28308_28331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (3))){
var inst_28297 = (state_28300[(2)]);
var inst_28298 = cljs.core.async.close_BANG_.call(null,out);
var state_28300__$1 = (function (){var statearr_28309 = state_28300;
(statearr_28309[(9)] = inst_28297);

return statearr_28309;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28300__$1,inst_28298);
} else {
if((state_val_28301 === (2))){
var state_28300__$1 = state_28300;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28300__$1,(4),ch);
} else {
if((state_val_28301 === (11))){
var inst_28280 = (state_28300[(8)]);
var inst_28289 = (state_28300[(2)]);
var inst_28277 = inst_28280;
var state_28300__$1 = (function (){var statearr_28310 = state_28300;
(statearr_28310[(10)] = inst_28289);

(statearr_28310[(7)] = inst_28277);

return statearr_28310;
})();
var statearr_28311_28332 = state_28300__$1;
(statearr_28311_28332[(2)] = null);

(statearr_28311_28332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (9))){
var inst_28280 = (state_28300[(8)]);
var state_28300__$1 = state_28300;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28300__$1,(11),out,inst_28280);
} else {
if((state_val_28301 === (5))){
var inst_28280 = (state_28300[(8)]);
var inst_28277 = (state_28300[(7)]);
var inst_28284 = cljs.core._EQ_.call(null,inst_28280,inst_28277);
var state_28300__$1 = state_28300;
if(inst_28284){
var statearr_28313_28333 = state_28300__$1;
(statearr_28313_28333[(1)] = (8));

} else {
var statearr_28314_28334 = state_28300__$1;
(statearr_28314_28334[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (10))){
var inst_28292 = (state_28300[(2)]);
var state_28300__$1 = state_28300;
var statearr_28315_28335 = state_28300__$1;
(statearr_28315_28335[(2)] = inst_28292);

(statearr_28315_28335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (8))){
var inst_28277 = (state_28300[(7)]);
var tmp28312 = inst_28277;
var inst_28277__$1 = tmp28312;
var state_28300__$1 = (function (){var statearr_28316 = state_28300;
(statearr_28316[(7)] = inst_28277__$1);

return statearr_28316;
})();
var statearr_28317_28336 = state_28300__$1;
(statearr_28317_28336[(2)] = null);

(statearr_28317_28336[(1)] = (2));


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
});})(c__19048__auto___28326,out))
;
return ((function (switch__18986__auto__,c__19048__auto___28326,out){
return (function() {
var cljs$core$async$state_machine__18987__auto__ = null;
var cljs$core$async$state_machine__18987__auto____0 = (function (){
var statearr_28321 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28321[(0)] = cljs$core$async$state_machine__18987__auto__);

(statearr_28321[(1)] = (1));

return statearr_28321;
});
var cljs$core$async$state_machine__18987__auto____1 = (function (state_28300){
while(true){
var ret_value__18988__auto__ = (function (){try{while(true){
var result__18989__auto__ = switch__18986__auto__.call(null,state_28300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18989__auto__;
}
break;
}
}catch (e28322){if((e28322 instanceof Object)){
var ex__18990__auto__ = e28322;
var statearr_28323_28337 = state_28300;
(statearr_28323_28337[(5)] = ex__18990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28322;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28338 = state_28300;
state_28300 = G__28338;
continue;
} else {
return ret_value__18988__auto__;
}
break;
}
});
cljs$core$async$state_machine__18987__auto__ = function(state_28300){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18987__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18987__auto____1.call(this,state_28300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18987__auto____0;
cljs$core$async$state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18987__auto____1;
return cljs$core$async$state_machine__18987__auto__;
})()
;})(switch__18986__auto__,c__19048__auto___28326,out))
})();
var state__19050__auto__ = (function (){var statearr_28324 = f__19049__auto__.call(null);
(statearr_28324[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19048__auto___28326);

return statearr_28324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19050__auto__);
});})(c__19048__auto___28326,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__28340 = arguments.length;
switch (G__28340) {
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
var c__19048__auto___28409 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19048__auto___28409,out){
return (function (){
var f__19049__auto__ = (function (){var switch__18986__auto__ = ((function (c__19048__auto___28409,out){
return (function (state_28378){
var state_val_28379 = (state_28378[(1)]);
if((state_val_28379 === (7))){
var inst_28374 = (state_28378[(2)]);
var state_28378__$1 = state_28378;
var statearr_28380_28410 = state_28378__$1;
(statearr_28380_28410[(2)] = inst_28374);

(statearr_28380_28410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28379 === (1))){
var inst_28341 = (new Array(n));
var inst_28342 = inst_28341;
var inst_28343 = (0);
var state_28378__$1 = (function (){var statearr_28381 = state_28378;
(statearr_28381[(7)] = inst_28342);

(statearr_28381[(8)] = inst_28343);

return statearr_28381;
})();
var statearr_28382_28411 = state_28378__$1;
(statearr_28382_28411[(2)] = null);

(statearr_28382_28411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28379 === (4))){
var inst_28346 = (state_28378[(9)]);
var inst_28346__$1 = (state_28378[(2)]);
var inst_28347 = (inst_28346__$1 == null);
var inst_28348 = cljs.core.not.call(null,inst_28347);
var state_28378__$1 = (function (){var statearr_28383 = state_28378;
(statearr_28383[(9)] = inst_28346__$1);

return statearr_28383;
})();
if(inst_28348){
var statearr_28384_28412 = state_28378__$1;
(statearr_28384_28412[(1)] = (5));

} else {
var statearr_28385_28413 = state_28378__$1;
(statearr_28385_28413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28379 === (15))){
var inst_28368 = (state_28378[(2)]);
var state_28378__$1 = state_28378;
var statearr_28386_28414 = state_28378__$1;
(statearr_28386_28414[(2)] = inst_28368);

(statearr_28386_28414[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28379 === (13))){
var state_28378__$1 = state_28378;
var statearr_28387_28415 = state_28378__$1;
(statearr_28387_28415[(2)] = null);

(statearr_28387_28415[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28379 === (6))){
var inst_28343 = (state_28378[(8)]);
var inst_28364 = (inst_28343 > (0));
var state_28378__$1 = state_28378;
if(cljs.core.truth_(inst_28364)){
var statearr_28388_28416 = state_28378__$1;
(statearr_28388_28416[(1)] = (12));

} else {
var statearr_28389_28417 = state_28378__$1;
(statearr_28389_28417[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28379 === (3))){
var inst_28376 = (state_28378[(2)]);
var state_28378__$1 = state_28378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28378__$1,inst_28376);
} else {
if((state_val_28379 === (12))){
var inst_28342 = (state_28378[(7)]);
var inst_28366 = cljs.core.vec.call(null,inst_28342);
var state_28378__$1 = state_28378;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28378__$1,(15),out,inst_28366);
} else {
if((state_val_28379 === (2))){
var state_28378__$1 = state_28378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28378__$1,(4),ch);
} else {
if((state_val_28379 === (11))){
var inst_28358 = (state_28378[(2)]);
var inst_28359 = (new Array(n));
var inst_28342 = inst_28359;
var inst_28343 = (0);
var state_28378__$1 = (function (){var statearr_28390 = state_28378;
(statearr_28390[(7)] = inst_28342);

(statearr_28390[(8)] = inst_28343);

(statearr_28390[(10)] = inst_28358);

return statearr_28390;
})();
var statearr_28391_28418 = state_28378__$1;
(statearr_28391_28418[(2)] = null);

(statearr_28391_28418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28379 === (9))){
var inst_28342 = (state_28378[(7)]);
var inst_28356 = cljs.core.vec.call(null,inst_28342);
var state_28378__$1 = state_28378;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28378__$1,(11),out,inst_28356);
} else {
if((state_val_28379 === (5))){
var inst_28342 = (state_28378[(7)]);
var inst_28351 = (state_28378[(11)]);
var inst_28346 = (state_28378[(9)]);
var inst_28343 = (state_28378[(8)]);
var inst_28350 = (inst_28342[inst_28343] = inst_28346);
var inst_28351__$1 = (inst_28343 + (1));
var inst_28352 = (inst_28351__$1 < n);
var state_28378__$1 = (function (){var statearr_28392 = state_28378;
(statearr_28392[(12)] = inst_28350);

(statearr_28392[(11)] = inst_28351__$1);

return statearr_28392;
})();
if(cljs.core.truth_(inst_28352)){
var statearr_28393_28419 = state_28378__$1;
(statearr_28393_28419[(1)] = (8));

} else {
var statearr_28394_28420 = state_28378__$1;
(statearr_28394_28420[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28379 === (14))){
var inst_28371 = (state_28378[(2)]);
var inst_28372 = cljs.core.async.close_BANG_.call(null,out);
var state_28378__$1 = (function (){var statearr_28396 = state_28378;
(statearr_28396[(13)] = inst_28371);

return statearr_28396;
})();
var statearr_28397_28421 = state_28378__$1;
(statearr_28397_28421[(2)] = inst_28372);

(statearr_28397_28421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28379 === (10))){
var inst_28362 = (state_28378[(2)]);
var state_28378__$1 = state_28378;
var statearr_28398_28422 = state_28378__$1;
(statearr_28398_28422[(2)] = inst_28362);

(statearr_28398_28422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28379 === (8))){
var inst_28342 = (state_28378[(7)]);
var inst_28351 = (state_28378[(11)]);
var tmp28395 = inst_28342;
var inst_28342__$1 = tmp28395;
var inst_28343 = inst_28351;
var state_28378__$1 = (function (){var statearr_28399 = state_28378;
(statearr_28399[(7)] = inst_28342__$1);

(statearr_28399[(8)] = inst_28343);

return statearr_28399;
})();
var statearr_28400_28423 = state_28378__$1;
(statearr_28400_28423[(2)] = null);

(statearr_28400_28423[(1)] = (2));


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
});})(c__19048__auto___28409,out))
;
return ((function (switch__18986__auto__,c__19048__auto___28409,out){
return (function() {
var cljs$core$async$state_machine__18987__auto__ = null;
var cljs$core$async$state_machine__18987__auto____0 = (function (){
var statearr_28404 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28404[(0)] = cljs$core$async$state_machine__18987__auto__);

(statearr_28404[(1)] = (1));

return statearr_28404;
});
var cljs$core$async$state_machine__18987__auto____1 = (function (state_28378){
while(true){
var ret_value__18988__auto__ = (function (){try{while(true){
var result__18989__auto__ = switch__18986__auto__.call(null,state_28378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18989__auto__;
}
break;
}
}catch (e28405){if((e28405 instanceof Object)){
var ex__18990__auto__ = e28405;
var statearr_28406_28424 = state_28378;
(statearr_28406_28424[(5)] = ex__18990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28425 = state_28378;
state_28378 = G__28425;
continue;
} else {
return ret_value__18988__auto__;
}
break;
}
});
cljs$core$async$state_machine__18987__auto__ = function(state_28378){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18987__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18987__auto____1.call(this,state_28378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18987__auto____0;
cljs$core$async$state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18987__auto____1;
return cljs$core$async$state_machine__18987__auto__;
})()
;})(switch__18986__auto__,c__19048__auto___28409,out))
})();
var state__19050__auto__ = (function (){var statearr_28407 = f__19049__auto__.call(null);
(statearr_28407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19048__auto___28409);

return statearr_28407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19050__auto__);
});})(c__19048__auto___28409,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__28427 = arguments.length;
switch (G__28427) {
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
var c__19048__auto___28500 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19048__auto___28500,out){
return (function (){
var f__19049__auto__ = (function (){var switch__18986__auto__ = ((function (c__19048__auto___28500,out){
return (function (state_28469){
var state_val_28470 = (state_28469[(1)]);
if((state_val_28470 === (7))){
var inst_28465 = (state_28469[(2)]);
var state_28469__$1 = state_28469;
var statearr_28471_28501 = state_28469__$1;
(statearr_28471_28501[(2)] = inst_28465);

(statearr_28471_28501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28470 === (1))){
var inst_28428 = [];
var inst_28429 = inst_28428;
var inst_28430 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28469__$1 = (function (){var statearr_28472 = state_28469;
(statearr_28472[(7)] = inst_28429);

(statearr_28472[(8)] = inst_28430);

return statearr_28472;
})();
var statearr_28473_28502 = state_28469__$1;
(statearr_28473_28502[(2)] = null);

(statearr_28473_28502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28470 === (4))){
var inst_28433 = (state_28469[(9)]);
var inst_28433__$1 = (state_28469[(2)]);
var inst_28434 = (inst_28433__$1 == null);
var inst_28435 = cljs.core.not.call(null,inst_28434);
var state_28469__$1 = (function (){var statearr_28474 = state_28469;
(statearr_28474[(9)] = inst_28433__$1);

return statearr_28474;
})();
if(inst_28435){
var statearr_28475_28503 = state_28469__$1;
(statearr_28475_28503[(1)] = (5));

} else {
var statearr_28476_28504 = state_28469__$1;
(statearr_28476_28504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28470 === (15))){
var inst_28459 = (state_28469[(2)]);
var state_28469__$1 = state_28469;
var statearr_28477_28505 = state_28469__$1;
(statearr_28477_28505[(2)] = inst_28459);

(statearr_28477_28505[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28470 === (13))){
var state_28469__$1 = state_28469;
var statearr_28478_28506 = state_28469__$1;
(statearr_28478_28506[(2)] = null);

(statearr_28478_28506[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28470 === (6))){
var inst_28429 = (state_28469[(7)]);
var inst_28454 = inst_28429.length;
var inst_28455 = (inst_28454 > (0));
var state_28469__$1 = state_28469;
if(cljs.core.truth_(inst_28455)){
var statearr_28479_28507 = state_28469__$1;
(statearr_28479_28507[(1)] = (12));

} else {
var statearr_28480_28508 = state_28469__$1;
(statearr_28480_28508[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28470 === (3))){
var inst_28467 = (state_28469[(2)]);
var state_28469__$1 = state_28469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28469__$1,inst_28467);
} else {
if((state_val_28470 === (12))){
var inst_28429 = (state_28469[(7)]);
var inst_28457 = cljs.core.vec.call(null,inst_28429);
var state_28469__$1 = state_28469;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28469__$1,(15),out,inst_28457);
} else {
if((state_val_28470 === (2))){
var state_28469__$1 = state_28469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28469__$1,(4),ch);
} else {
if((state_val_28470 === (11))){
var inst_28433 = (state_28469[(9)]);
var inst_28437 = (state_28469[(10)]);
var inst_28447 = (state_28469[(2)]);
var inst_28448 = [];
var inst_28449 = inst_28448.push(inst_28433);
var inst_28429 = inst_28448;
var inst_28430 = inst_28437;
var state_28469__$1 = (function (){var statearr_28481 = state_28469;
(statearr_28481[(7)] = inst_28429);

(statearr_28481[(11)] = inst_28447);

(statearr_28481[(8)] = inst_28430);

(statearr_28481[(12)] = inst_28449);

return statearr_28481;
})();
var statearr_28482_28509 = state_28469__$1;
(statearr_28482_28509[(2)] = null);

(statearr_28482_28509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28470 === (9))){
var inst_28429 = (state_28469[(7)]);
var inst_28445 = cljs.core.vec.call(null,inst_28429);
var state_28469__$1 = state_28469;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28469__$1,(11),out,inst_28445);
} else {
if((state_val_28470 === (5))){
var inst_28433 = (state_28469[(9)]);
var inst_28437 = (state_28469[(10)]);
var inst_28430 = (state_28469[(8)]);
var inst_28437__$1 = f.call(null,inst_28433);
var inst_28438 = cljs.core._EQ_.call(null,inst_28437__$1,inst_28430);
var inst_28439 = cljs.core.keyword_identical_QMARK_.call(null,inst_28430,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28440 = (inst_28438) || (inst_28439);
var state_28469__$1 = (function (){var statearr_28483 = state_28469;
(statearr_28483[(10)] = inst_28437__$1);

return statearr_28483;
})();
if(cljs.core.truth_(inst_28440)){
var statearr_28484_28510 = state_28469__$1;
(statearr_28484_28510[(1)] = (8));

} else {
var statearr_28485_28511 = state_28469__$1;
(statearr_28485_28511[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28470 === (14))){
var inst_28462 = (state_28469[(2)]);
var inst_28463 = cljs.core.async.close_BANG_.call(null,out);
var state_28469__$1 = (function (){var statearr_28487 = state_28469;
(statearr_28487[(13)] = inst_28462);

return statearr_28487;
})();
var statearr_28488_28512 = state_28469__$1;
(statearr_28488_28512[(2)] = inst_28463);

(statearr_28488_28512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28470 === (10))){
var inst_28452 = (state_28469[(2)]);
var state_28469__$1 = state_28469;
var statearr_28489_28513 = state_28469__$1;
(statearr_28489_28513[(2)] = inst_28452);

(statearr_28489_28513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28470 === (8))){
var inst_28433 = (state_28469[(9)]);
var inst_28429 = (state_28469[(7)]);
var inst_28437 = (state_28469[(10)]);
var inst_28442 = inst_28429.push(inst_28433);
var tmp28486 = inst_28429;
var inst_28429__$1 = tmp28486;
var inst_28430 = inst_28437;
var state_28469__$1 = (function (){var statearr_28490 = state_28469;
(statearr_28490[(7)] = inst_28429__$1);

(statearr_28490[(14)] = inst_28442);

(statearr_28490[(8)] = inst_28430);

return statearr_28490;
})();
var statearr_28491_28514 = state_28469__$1;
(statearr_28491_28514[(2)] = null);

(statearr_28491_28514[(1)] = (2));


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
});})(c__19048__auto___28500,out))
;
return ((function (switch__18986__auto__,c__19048__auto___28500,out){
return (function() {
var cljs$core$async$state_machine__18987__auto__ = null;
var cljs$core$async$state_machine__18987__auto____0 = (function (){
var statearr_28495 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28495[(0)] = cljs$core$async$state_machine__18987__auto__);

(statearr_28495[(1)] = (1));

return statearr_28495;
});
var cljs$core$async$state_machine__18987__auto____1 = (function (state_28469){
while(true){
var ret_value__18988__auto__ = (function (){try{while(true){
var result__18989__auto__ = switch__18986__auto__.call(null,state_28469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18989__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18989__auto__;
}
break;
}
}catch (e28496){if((e28496 instanceof Object)){
var ex__18990__auto__ = e28496;
var statearr_28497_28515 = state_28469;
(statearr_28497_28515[(5)] = ex__18990__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28516 = state_28469;
state_28469 = G__28516;
continue;
} else {
return ret_value__18988__auto__;
}
break;
}
});
cljs$core$async$state_machine__18987__auto__ = function(state_28469){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18987__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18987__auto____1.call(this,state_28469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18987__auto____0;
cljs$core$async$state_machine__18987__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18987__auto____1;
return cljs$core$async$state_machine__18987__auto__;
})()
;})(switch__18986__auto__,c__19048__auto___28500,out))
})();
var state__19050__auto__ = (function (){var statearr_28498 = f__19049__auto__.call(null);
(statearr_28498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19048__auto___28500);

return statearr_28498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19050__auto__);
});})(c__19048__auto___28500,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map