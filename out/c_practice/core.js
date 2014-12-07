// Compiled by ClojureScript 0.0-2311
goog.provide('c_practice.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
c_practice.core.p = (function p(p1__5114_SHARP_){return cljs.core.println.call(null,cljs.core.pr_str.call(null,p1__5114_SHARP_));
});
c_practice.core.data = (function (){var iter__4278__auto__ = (function iter__5115(s__5116){return (new cljs.core.LazySeq(null,(function (){var s__5116__$1 = s__5116;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5116__$1);if(temp__4126__auto__)
{var s__5116__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__5116__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__5116__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__5118 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__5117 = (0);while(true){
if((i__5117 < size__4277__auto__))
{var line = cljs.core._nth.call(null,c__4276__auto__,i__5117);cljs.core.chunk_append.call(null,b__5118,line.trim().split(","));
{
var G__5119 = (i__5117 + (1));
i__5117 = G__5119;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5118),iter__5115.call(null,cljs.core.chunk_rest.call(null,s__5116__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5118),null);
}
} else
{var line = cljs.core.first.call(null,s__5116__$2);return cljs.core.cons.call(null,line.trim().split(","),iter__5115.call(null,cljs.core.rest.call(null,s__5116__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4278__auto__.call(null,document.getElementById("tuttle").innerHTML.trim().split("\n"));
})();
c_practice.core.i = reagent.core.atom.call(null,(0));
c_practice.core.j = reagent.core.atom.call(null,(2));
c_practice.core.k = reagent.core.atom.call(null,(0));
c_practice.core.text = reagent.core.atom.call(null,(0));
c_practice.core.proceed_text = reagent.core.atom.call(null,"");
c_practice.core.show_char_QMARK_ = reagent.core.atom.call(null,true);
c_practice.core.auto_proceed_QMARK_ = reagent.core.atom.call(null,false);
c_practice.core.shuffled = cljs.core.shuffle.call(null,cljs.core.range.call(null,(800)));
c_practice.core.bounded_dec = (function bounded_dec(x){if((x === (0)))
{return (0);
} else
{return (x - (1));
}
});
c_practice.core.bounded_inc = (function bounded_inc(x){if(cljs.core._EQ_.call(null,(801),x))
{return x;
} else
{return (x + (1));
}
});
c_practice.core.proceed = (function proceed(p1__5120_SHARP_){var value = (cljs.core.truth_(p1__5120_SHARP_)?p1__5120_SHARP_.target.value:cljs.core.deref.call(null,c_practice.core.proceed_text));if(cljs.core._EQ_.call(null,value,cljs.core.first.call(null,cljs.core.nth.call(null,c_practice.core.data,cljs.core.deref.call(null,c_practice.core.i)))))
{cljs.core.reset_BANG_.call(null,c_practice.core.proceed_text,"");
cljs.core.swap_BANG_.call(null,c_practice.core.i,c_practice.core.bounded_inc);
return cljs.core.reset_BANG_.call(null,c_practice.core.j,(2));
} else
{return cljs.core.reset_BANG_.call(null,c_practice.core.proceed_text,value);
}
});
c_practice.core.render = (function render(){var s = (cljs.core.truth_(cljs.core.deref.call(null,c_practice.core.show_char_QMARK_))?cljs.core.take.call(null,cljs.core.deref.call(null,c_practice.core.j),cljs.core.nth.call(null,c_practice.core.data,cljs.core.deref.call(null,c_practice.core.i))):cljs.core.drop.call(null,(1),cljs.core.take.call(null,cljs.core.deref.call(null,c_practice.core.j),cljs.core.nth.call(null,c_practice.core.data,cljs.core.deref.call(null,c_practice.core.i)))));return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2em"], null)], null),cljs.core.deref.call(null,c_practice.core.i)," ",cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",s))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Previous",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s){
return (function (){cljs.core.reset_BANG_.call(null,c_practice.core.proceed_text,"");
cljs.core.swap_BANG_.call(null,c_practice.core.i,c_practice.core.bounded_dec);
return cljs.core.reset_BANG_.call(null,c_practice.core.j,(2));
});})(s))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Next",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s){
return (function (){cljs.core.reset_BANG_.call(null,c_practice.core.proceed_text,"");
cljs.core.swap_BANG_.call(null,c_practice.core.i,c_practice.core.bounded_inc);
return cljs.core.reset_BANG_.call(null,c_practice.core.j,(2));
});})(s))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Hint",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s){
return (function (){return cljs.core.swap_BANG_.call(null,c_practice.core.j,c_practice.core.bounded_inc);
});})(s))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Random Previous",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s){
return (function (){cljs.core.reset_BANG_.call(null,c_practice.core.proceed_text,"");
cljs.core.swap_BANG_.call(null,c_practice.core.k,c_practice.core.bounded_dec);
cljs.core.reset_BANG_.call(null,c_practice.core.i,cljs.core.nth.call(null,c_practice.core.shuffled,cljs.core.deref.call(null,c_practice.core.k)));
return cljs.core.reset_BANG_.call(null,c_practice.core.j,(2));
});})(s))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Random Next",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s){
return (function (){cljs.core.reset_BANG_.call(null,c_practice.core.proceed_text,"");
cljs.core.swap_BANG_.call(null,c_practice.core.k,c_practice.core.bounded_inc);
cljs.core.reset_BANG_.call(null,c_practice.core.i,cljs.core.nth.call(null,c_practice.core.shuffled,cljs.core.deref.call(null,c_practice.core.k)));
return cljs.core.reset_BANG_.call(null,c_practice.core.j,(2));
});})(s))
], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,c_practice.core.proceed_text),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (s){
return (function (p1__5121_SHARP_){if(cljs.core.truth_(cljs.core.deref.call(null,c_practice.core.auto_proceed_QMARK_)))
{return c_practice.core.proceed.call(null,p1__5121_SHARP_);
} else
{return cljs.core.reset_BANG_.call(null,c_practice.core.proceed_text,p1__5121_SHARP_.target.value);
}
});})(s))
,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),((function (s){
return (function (){return cljs.core.reset_BANG_.call(null,c_practice.core.proceed_text,"");
});})(s))
], null)], null),((cljs.core.not.call(null,cljs.core.deref.call(null,c_practice.core.auto_proceed_QMARK_)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Go",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s){
return (function (){return c_practice.core.proceed.call(null);
});})(s))
], null)], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref.call(null,c_practice.core.show_char_QMARK_),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (s){
return (function (p1__5122_SHARP_){return cljs.core.reset_BANG_.call(null,c_practice.core.show_char_QMARK_,p1__5122_SHARP_.target.checked);
});})(s))
], null),"Show Char"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.deref.call(null,c_practice.core.auto_proceed_QMARK_),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (s){
return (function (p1__5123_SHARP_){return cljs.core.reset_BANG_.call(null,c_practice.core.auto_proceed_QMARK_,p1__5123_SHARP_.target.checked);
});})(s))
], null),"Auto Proceed"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,c_practice.core.text),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(800),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (s){
return (function (p1__5124_SHARP_){return cljs.core.reset_BANG_.call(null,c_practice.core.text,p1__5124_SHARP_.target.value);
});})(s))
], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Go",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s){
return (function (){cljs.core.reset_BANG_.call(null,c_practice.core.i,(cljs.core.deref.call(null,c_practice.core.text) | (0)));
return cljs.core.reset_BANG_.call(null,c_practice.core.j,(2));
});})(s))
], null)], null)], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_practice.core.render], null),document.getElementById("content"));
c_practice.core.t = (function t(){return cljs.core.println.call(null,cljs.core.deref.call(null,c_practice.core.proceed_text),cljs.core.first.call(null,cljs.core.nth.call(null,c_practice.core.data,cljs.core.deref.call(null,c_practice.core.i))));
});

//# sourceMappingURL=core.js.map