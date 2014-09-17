// Compiled by ClojureScript 0.0-2311
goog.provide('c_practice.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
c_practice.core.p = (function p(p1__9293_SHARP_){return cljs.core.println.call(null,cljs.core.pr_str.call(null,p1__9293_SHARP_));
});
c_practice.core.data = (function (){var iter__4278__auto__ = (function iter__9294(s__9295){return (new cljs.core.LazySeq(null,(function (){var s__9295__$1 = s__9295;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__9295__$1);if(temp__4126__auto__)
{var s__9295__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__9295__$2))
{var c__4276__auto__ = cljs.core.chunk_first.call(null,s__9295__$2);var size__4277__auto__ = cljs.core.count.call(null,c__4276__auto__);var b__9297 = cljs.core.chunk_buffer.call(null,size__4277__auto__);if((function (){var i__9296 = (0);while(true){
if((i__9296 < size__4277__auto__))
{var line = cljs.core._nth.call(null,c__4276__auto__,i__9296);cljs.core.chunk_append.call(null,b__9297,line.trim().split(","));
{
var G__9298 = (i__9296 + (1));
i__9296 = G__9298;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9297),iter__9294.call(null,cljs.core.chunk_rest.call(null,s__9295__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9297),null);
}
} else
{var line = cljs.core.first.call(null,s__9295__$2);return cljs.core.cons.call(null,line.trim().split(","),iter__9294.call(null,cljs.core.rest.call(null,s__9295__$2)));
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
c_practice.core.text = reagent.core.atom.call(null,(0));
c_practice.core.render = (function render(){return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2em"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.deref.call(null,c_practice.core.i)," ",cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core.take.call(null,cljs.core.deref.call(null,c_practice.core.j),cljs.core.nth.call(null,c_practice.core.data,cljs.core.deref.call(null,c_practice.core.i)))))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Previous",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){cljs.core.swap_BANG_.call(null,c_practice.core.i,cljs.core.dec);
return cljs.core.reset_BANG_.call(null,c_practice.core.j,(2));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Next",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){cljs.core.swap_BANG_.call(null,c_practice.core.i,cljs.core.inc);
return cljs.core.reset_BANG_.call(null,c_practice.core.j,(2));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Hint",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){return cljs.core.swap_BANG_.call(null,c_practice.core.j,cljs.core.inc);
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,c_practice.core.text),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(800),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__9299_SHARP_){return cljs.core.reset_BANG_.call(null,c_practice.core.text,p1__9299_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Go",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){return cljs.core.reset_BANG_.call(null,c_practice.core.i,(cljs.core.deref.call(null,c_practice.core.text) | (0)));
})], null)], null)], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_practice.core.render], null),document.getElementById("content"));

//# sourceMappingURL=core.js.map