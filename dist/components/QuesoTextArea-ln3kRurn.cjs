"use strict";require('../assets/components/QuesoCheckboxMultiple.css');const e=require("vue"),v=require("./QuesoCheckbox-ZuxoR4CO.cjs"),b=require("./QuesoField-KPDzm51d.cjs"),P={class:"queso-text-area"},h=["innerHTML"],$=["id","name","placeholder","required","disabled","onMouseover","onMouseleave","onFocus","onBlur"],q=e.defineComponent({__name:"QuesoTextArea",props:e.mergeModels({placeholder:{},id:{},name:{},label:{},isError:{type:Boolean},isRequired:{type:Boolean},isDisabled:{type:Boolean},isReadOnly:{type:Boolean},extraAttributes:{}},{modelValue:{required:!0,default:""},modelModifiers:{}}),emits:["update:modelValue"],setup(l){const u=l,d=v.useExtendedFieldProps(u),s=e.useModel(l,"modelValue");return(o,a)=>(e.openBlock(),e.createBlock(e.unref(b._sfc_main),e.mergeProps({class:"-text-area"},e.unref(d)),{beforeLabel:e.withCtx(r=>[e.renderSlot(o.$slots,"beforeLabel",e.normalizeProps(e.guardReactiveProps({...r})))]),label:e.withCtx(r=>[e.renderSlot(o.$slots,"label",e.normalizeProps(e.guardReactiveProps({...r})))]),required:e.withCtx(r=>[e.renderSlot(o.$slots,"required",e.normalizeProps(e.guardReactiveProps({...r})))]),afterLabel:e.withCtx(r=>[e.renderSlot(o.$slots,"afterLabel",e.normalizeProps(e.guardReactiveProps({...r})))]),beforeInput:e.withCtx(r=>[e.renderSlot(o.$slots,"beforeInput",e.normalizeProps(e.guardReactiveProps({...r})))]),input:e.withCtx(({fieldID:r,fieldName:p,isRequired:c,isDisabled:m,isReadOnly:f,toggleIsActive:n,toggleIsHover:i})=>[e.createElementVNode("div",P,[e.renderSlot(o.$slots,"beforeTextAreaInput"),f?(e.openBlock(),e.createElementBlock("span",{key:0,class:"queso-text-area__readonly",innerHTML:s.value},null,8,h)):e.withDirectives((e.openBlock(),e.createElementBlock("textarea",e.mergeProps({key:1,class:"queso-text-area__input",id:r,name:p,placeholder:o.placeholder,required:c,disabled:m,onMouseover:t=>i(!0),onMouseleave:t=>i(!1),onFocus:t=>n(!0),onBlur:t=>n(!1)},o.extraAttributes,{"onUpdate:modelValue":a[0]||(a[0]=t=>s.value=t)}),null,16,$)),[[e.vModelText,s.value]]),e.renderSlot(o.$slots,"afterTextAreaInput")])]),afterInput:e.withCtx(r=>[e.renderSlot(o.$slots,"afterInput",e.normalizeProps(e.guardReactiveProps({...r})))]),error:e.withCtx(r=>[e.renderSlot(o.$slots,"error",e.normalizeProps(e.guardReactiveProps({...r})))]),_:3},16))}});exports._sfc_main=q;