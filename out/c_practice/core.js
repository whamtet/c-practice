// Compiled by ClojureScript 0.0-2311
goog.provide('c_practice.core');
goog.require('cljs.core');
goog.require('alandipert.storage_atom');
goog.require('reagent.core');
goog.require('alandipert.storage_atom');
goog.require('reagent.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
c_practice.core.completed = alandipert.storage_atom.local_storage.call(null,reagent.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword(null,"completed","completed",-486056503));
c_practice.core.p = (function p(p1__6009_SHARP_){return cljs.core.println.call(null,cljs.core.pr_str.call(null,p1__6009_SHARP_));
});
c_practice.core.t = (function t(){return c_practice.core.p.call(null,cljs.core.deref.call(null,c_practice.core.completed));
});
c_practice.core.data = (function (){var iter__4286__auto__ = (function iter__6010(s__6011){return (new cljs.core.LazySeq(null,(function (){var s__6011__$1 = s__6011;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__6011__$1);if(temp__4126__auto__)
{var s__6011__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6011__$2))
{var c__4284__auto__ = cljs.core.chunk_first.call(null,s__6011__$2);var size__4285__auto__ = cljs.core.count.call(null,c__4284__auto__);var b__6013 = cljs.core.chunk_buffer.call(null,size__4285__auto__);if((function (){var i__6012 = (0);while(true){
if((i__6012 < size__4285__auto__))
{var line = cljs.core._nth.call(null,c__4284__auto__,i__6012);cljs.core.chunk_append.call(null,b__6013,line.trim().split(","));
{
var G__6014 = (i__6012 + (1));
i__6012 = G__6014;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6013),iter__6010.call(null,cljs.core.chunk_rest.call(null,s__6011__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6013),null);
}
} else
{var line = cljs.core.first.call(null,s__6011__$2);return cljs.core.cons.call(null,line.trim().split(","),iter__6010.call(null,cljs.core.rest.call(null,s__6011__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4286__auto__.call(null,document.getElementById("tuttle").innerHTML.trim().split("\n"));
})();
c_practice.core.i = reagent.core.atom.call(null,(0));
c_practice.core.j = reagent.core.atom.call(null,(2));
c_practice.core.text = reagent.core.atom.call(null,(0));
c_practice.core.proceed_text = reagent.core.atom.call(null,"");
c_practice.core.show_char_QMARK_ = reagent.core.atom.call(null,true);
c_practice.core.auto_proceed_QMARK_ = reagent.core.atom.call(null,false);
c_practice.core.random_mode_QMARK_ = reagent.core.atom.call(null,false);
c_practice.core.show_completed_QMARK_ = reagent.core.atom.call(null,false);
c_practice.core.shuffle_forward = (function (){var x = cljs.core.shuffle.call(null,cljs.core.range.call(null,(802)));return cljs.core.zipmap.call(null,x,cljs.core.drop.call(null,(1),cljs.core.cycle.call(null,x)));
})();
c_practice.core.shuffle_backward = cljs.core.zipmap.call(null,cljs.core.vals.call(null,c_practice.core.shuffle_forward),cljs.core.keys.call(null,c_practice.core.shuffle_forward));
c_practice.core.smart_shuffler = (function smart_shuffler(f,i){if(cljs.core._EQ_.call(null,(802),cljs.core.count.call(null,cljs.core.deref.call(null,c_practice.core.completed))))
{return (0);
} else
{var j = f.call(null,i);while(true){
if(cljs.core.truth_(cljs.core.deref.call(null,c_practice.core.completed).call(null,j)))
{{
var G__6015 = f.call(null,j);
j = G__6015;
continue;
}
} else
{return j;
}
break;
}
}
});
c_practice.core.smart_shuffle_forward = (function smart_shuffle_forward(p1__6016_SHARP_){return c_practice.core.smart_shuffler.call(null,c_practice.core.shuffle_forward,p1__6016_SHARP_);
});
c_practice.core.smart_shuffle_backward = (function smart_shuffle_backward(p1__6017_SHARP_){return c_practice.core.smart_shuffler.call(null,c_practice.core.shuffle_backward,p1__6017_SHARP_);
});
c_practice.core.ban_i = (function ban_i(){cljs.core.swap_BANG_.call(null,c_practice.core.completed,cljs.core.conj,cljs.core.deref.call(null,c_practice.core.i));
return cljs.core.swap_BANG_.call(null,c_practice.core.i,c_practice.core.smart_shuffle_forward);
});
c_practice.core.bounded_dec = (function bounded_dec(x){if(cljs.core.truth_(cljs.core.deref.call(null,c_practice.core.random_mode_QMARK_)))
{return c_practice.core.smart_shuffle_backward.call(null,x);
} else
{if((x === (0)))
{return x;
} else
{return (x - (1));

}
}
});
c_practice.core.bounded_inc = (function bounded_inc(x){if(cljs.core.truth_(cljs.core.deref.call(null,c_practice.core.random_mode_QMARK_)))
{return c_practice.core.smart_shuffle_forward.call(null,x);
} else
{if(cljs.core._EQ_.call(null,(801),x))
{return x;
} else
{return (x + (1));

}
}
});
c_practice.core.proceed = (function proceed(p1__6018_SHARP_){var value = (cljs.core.truth_(p1__6018_SHARP_)?p1__6018_SHARP_.target.value:cljs.core.deref.call(null,c_practice.core.proceed_text));var id = cljs.core.deref.call(null,c_practice.core.i);if(cljs.core._EQ_.call(null,value,cljs.core.first.call(null,cljs.core.nth.call(null,c_practice.core.data,id))))
{cljs.core.reset_BANG_.call(null,c_practice.core.proceed_text,"");
cljs.core.swap_BANG_.call(null,c_practice.core.i,c_practice.core.bounded_inc);
return cljs.core.reset_BANG_.call(null,c_practice.core.j,(2));
} else
{return cljs.core.reset_BANG_.call(null,c_practice.core.proceed_text,value);
}
});
c_practice.core.completed_char = (function completed_char(i){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,cljs.core.nth.call(null,c_practice.core.data,i),(0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){return cljs.core.swap_BANG_.call(null,c_practice.core.completed,cljs.core.disj,i);
})], null)], null);
});
c_practice.core.render = (function render(){var id = cljs.core.deref.call(null,c_practice.core.i);var s = (cljs.core.truth_(cljs.core.deref.call(null,c_practice.core.show_char_QMARK_))?cljs.core.take.call(null,cljs.core.deref.call(null,c_practice.core.j),cljs.core.nth.call(null,c_practice.core.data,id)):cljs.core.drop.call(null,(1),cljs.core.take.call(null,cljs.core.deref.call(null,c_practice.core.j),cljs.core.nth.call(null,c_practice.core.data,id))));return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2em"], null)], null),id," ",cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",s))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Previous",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (id,s){
return (function (){cljs.core.reset_BANG_.call(null,c_practice.core.proceed_text,"");
cljs.core.swap_BANG_.call(null,c_practice.core.i,c_practice.core.bounded_dec);
return cljs.core.reset_BANG_.call(null,c_practice.core.j,(2));
});})(id,s))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Next",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (id,s){
return (function (){cljs.core.reset_BANG_.call(null,c_practice.core.proceed_text,"");
cljs.core.swap_BANG_.call(null,c_practice.core.i,c_practice.core.bounded_inc);
return cljs.core.reset_BANG_.call(null,c_practice.core.j,(2));
});})(id,s))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Hint",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (id,s){
return (function (){return cljs.core.swap_BANG_.call(null,c_practice.core.j,cljs.core.inc);
});})(id,s))
], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),((function (id,s){
return (function (){c_practice.core.proceed.call(null);
return false;
});})(id,s))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,c_practice.core.proceed_text),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (id,s){
return (function (p1__6019_SHARP_){if(cljs.core.truth_(cljs.core.deref.call(null,c_practice.core.auto_proceed_QMARK_)))
{return c_practice.core.proceed.call(null,p1__6019_SHARP_);
} else
{var value = p1__6019_SHARP_.target.value;return cljs.core.reset_BANG_.call(null,c_practice.core.proceed_text,value);
}
});})(id,s))
,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),((function (id,s){
return (function (){return cljs.core.reset_BANG_.call(null,c_practice.core.proceed_text,"");
});})(id,s))
], null)], null),((cljs.core.not.call(null,cljs.core.deref.call(null,c_practice.core.auto_proceed_QMARK_)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Go",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (id,s){
return (function (){return c_practice.core.proceed.call(null);
});})(id,s))
], null)], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref.call(null,c_practice.core.show_char_QMARK_),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (id,s){
return (function (p1__6020_SHARP_){return cljs.core.reset_BANG_.call(null,c_practice.core.show_char_QMARK_,p1__6020_SHARP_.target.checked);
});})(id,s))
], null),"Show Char"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref.call(null,c_practice.core.auto_proceed_QMARK_),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (id,s){
return (function (p1__6021_SHARP_){return cljs.core.reset_BANG_.call(null,c_practice.core.auto_proceed_QMARK_,p1__6021_SHARP_.target.checked);
});})(id,s))
], null),"Auto Proceed"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref.call(null,c_practice.core.random_mode_QMARK_),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (id,s){
return (function (p1__6022_SHARP_){var checked_QMARK_ = p1__6022_SHARP_.target.checked;return cljs.core.reset_BANG_.call(null,c_practice.core.random_mode_QMARK_,checked_QMARK_);
});})(id,s))
], null),"Random Mode"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref.call(null,c_practice.core.show_completed_QMARK_),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (id,s){
return (function (p1__6023_SHARP_){return cljs.core.reset_BANG_.call(null,c_practice.core.show_completed_QMARK_,p1__6023_SHARP_.target.checked);
});})(id,s))
], null),"Show Completed"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,c_practice.core.text),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(800),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (id,s){
return (function (p1__6024_SHARP_){return cljs.core.reset_BANG_.call(null,c_practice.core.text,p1__6024_SHARP_.target.value);
});})(id,s))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Go",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (id,s){
return (function (){cljs.core.reset_BANG_.call(null,c_practice.core.i,(cljs.core.deref.call(null,c_practice.core.text) | (0)));
return cljs.core.reset_BANG_.call(null,c_practice.core.j,(2));
});})(id,s))
], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),(cljs.core.truth_(cljs.core.deref.call(null,c_practice.core.random_mode_QMARK_))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"I know it",new cljs.core.Keyword(null,"on-click","on-click",1632826543),c_practice.core.ban_i], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Reset known",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (id,s){
return (function (){return cljs.core.reset_BANG_.call(null,c_practice.core.completed,cljs.core.PersistentHashSet.EMPTY);
});})(id,s))
], null)], null)], null):null),(cljs.core.truth_(cljs.core.deref.call(null,c_practice.core.show_completed_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map_indexed.call(null,((function (id,s){
return (function (i__4513__auto__,s__4514__auto__){return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_practice.core.completed_char,s__4514__auto__], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),("completed"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i__4513__auto__))], null));
});})(id,s))
,cljs.core.deref.call(null,c_practice.core.completed))], null):null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_practice.core.render], null),document.getElementById("content"));

//# sourceMappingURL=core.js.map