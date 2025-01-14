"use strict";require('../assets/components/QuesoCheckboxMultiple.css');const e=require("vue"),C=require("./QuesoCheckbox-ZuxoR4CO.cjs"),$=require("./QuesoField-KPDzm51d.cjs"),q={class:"queso-checkbox__box"},B={class:"queso-checkbox__box__symbol"},M={class:"queso-checkbox__label"},V=["innerHTML"],w=["id","name","required","disabled","onFocus","onBlur","onUpdate:modelValue"],y=e.defineComponent({__name:"QuesoCheckboxMultiple",props:e.mergeModels({choices:{},validationMessage:{default:"Please select at least one option"},id:{},name:{},label:{},isError:{type:Boolean},isRequired:{type:Boolean},isDisabled:{type:Boolean},isReadOnly:{type:Boolean},extraAttributes:{}},{modelValue:{required:!0,default:[]},modelModifiers:{}}),emits:["update:modelValue"],setup(c){const r=c,k=C.useExtendedFieldProps(r),u=e.useModel(c,"modelValue"),i=e.reactive(r.choices.map(o=>({isChecked:u.value.includes(o.value),...o}))),d=e.computed(()=>i.filter(o=>o.isChecked).map(o=>o.value));e.watch(d,o=>{u.value=o},{immediate:!0});const m=e.ref([]),p=e.computed(()=>d.value.length>0),f=e.computed(()=>r.isRequired&&!p.value);return e.watch(f,o=>{m.value.forEach(a=>{o?a.setCustomValidity(r.validationMessage):a.setCustomValidity("")})},{immediate:!0}),(o,a)=>(e.openBlock(),e.createBlock(e.unref($._sfc_main),e.mergeProps({class:"-checkbox-multiple","static-label":""},e.unref(k)),{beforeLabel:e.withCtx(()=>[e.renderSlot(o.$slots,"beforeLabel")]),label:e.withCtx(t=>[e.renderSlot(o.$slots,"label",e.normalizeProps(e.guardReactiveProps({...t})))]),required:e.withCtx(t=>[e.renderSlot(o.$slots,"required",e.normalizeProps(e.guardReactiveProps({...t})))]),afterLabel:e.withCtx(()=>[e.renderSlot(o.$slots,"afterLabel")]),beforeInput:e.withCtx(()=>[e.renderSlot(o.$slots,"beforeInput")]),input:e.withCtx(({fieldID:t,fieldName:v,isRequired:_,isDisabled:x,isReadOnly:n,toggleIsActive:h,toggleIsHover:b})=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(i,s=>(e.openBlock(),e.createBlock(e.resolveDynamicComponent(n?"div":"label"),{class:e.normalizeClass(["queso-checkbox",{"is-checked":s.isChecked}]),for:n?null:`${t}-${s.value}`,onMouseover:l=>b(!0),onMouseleave:l=>b(!1)},{default:e.withCtx(()=>[e.renderSlot(o.$slots,"checkboxBox",{},()=>[e.createElementVNode("span",q,[e.createElementVNode("span",B,[e.renderSlot(o.$slots,"checkboxBoxSymbol",{},()=>[e.createTextVNode("✔︎")])])])]),e.renderSlot(o.$slots,"checkboxLabel",{},()=>[e.createElementVNode("span",M,[e.createElementVNode("span",{class:"queso-checkbox__label__text",innerHTML:s.label},null,8,V)])]),n?e.createCommentVNode("",!0):e.withDirectives((e.openBlock(),e.createElementBlock("input",e.mergeProps({key:0,ref_for:!0,ref_key:"checkboxInputs",ref:m,class:"queso-checkbox__native",type:"checkbox",id:`${t}-${s.value}`,name:`${v}[]`,required:_&&!p.value,disabled:x,onFocus:l=>h(!0),onBlur:l=>h(!1)},o.extraAttributes,{"onUpdate:modelValue":l=>s.isChecked=l}),null,16,w)),[[e.vModelCheckbox,s.isChecked]])]),_:2},1064,["class","for","onMouseover","onMouseleave"]))),256))]),afterInput:e.withCtx(()=>[e.renderSlot(o.$slots,"afterInput")]),error:e.withCtx(t=>[e.renderSlot(o.$slots,"error",e.normalizeProps(e.guardReactiveProps({...t})))]),_:3},16))}});exports._sfc_main=y;
