"use strict";require('../../assets/components/QuesoCheckboxMultiple.css');const e=require("vue"),_=require("./QuesoField-CINSVZJW.cjs"),v=require("./QuesoCheckbox-DUw9HKSh.cjs"),m={class:"queso-text-area"},h=["innerHTML"],f=["name","id","value","placeholder","required","autocomplete","disabled","onInput","onMouseover","onMouseleave","onFocus","onBlur"],x=e.defineComponent({__name:"QuesoTextArea",props:{placeholder:{default:""}},setup(b){return console.warn("<QuesoTextAreaLegacy> is deprecated. It will be removed on v1.0 version."),(o,q)=>(e.openBlock(),e.createBlock(e.unref(_.QuesoField),null,{label:e.withCtx(r=>[e.renderSlot(o.$slots,"label",e.normalizeProps(e.guardReactiveProps({...r})),void 0,!0)]),beforeField:e.withCtx(()=>[e.renderSlot(o.$slots,"beforeField",{},void 0,!0)]),field:e.withCtx(({fieldID:r,fieldName:a,fieldValue:n,fieldAutocomplete:u,updateValue:d,toggleIsActive:l,toggleIsHover:s,isRequired:c,isDisabled:i,isReadOnly:p})=>[e.createElementVNode("div",m,[p?(e.openBlock(),e.createElementBlock("span",{key:0,class:"queso-text-area__readonly",innerHTML:n},null,8,h)):(e.openBlock(),e.createElementBlock("textarea",{key:1,name:a,id:r,value:n,class:"queso-text-area__input",placeholder:o.placeholder,required:c,autocomplete:u,disabled:i,onInput:d,onMouseover:t=>s(!0),onMouseleave:t=>s(!1),onFocus:t=>l(!0),onBlur:t=>l(!1)},null,40,f))])]),afterField:e.withCtx(()=>[e.renderSlot(o.$slots,"afterField",{},void 0,!0)]),error:e.withCtx(r=>[e.renderSlot(o.$slots,"error",e.normalizeProps(e.guardReactiveProps({...r})),void 0,!0)]),_:3}))}}),k=v._export_sfc(x,[["__scopeId","data-v-f52f4088"]]);exports.QuesoTextArea=k;
