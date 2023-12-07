var $=require("../assets/components/QuesoTextArea.css");const e=require("vue"),_=require("./QuesoField-_tyT0XqT.cjs"),m={class:"queso-text-area"},h=["innerHTML"],f=["name","id","value","placeholder","required","autocomplete","disabled","onInput","onMouseover","onMouseleave","onFocus","onBlur"],v=e.defineComponent({__name:"QuesoTextArea",props:{placeholder:{default:""}},setup(k){return(o,B)=>(e.openBlock(),e.createBlock(e.unref(_._sfc_main),null,{label:e.withCtx(r=>[e.renderSlot(o.$slots,"label",e.normalizeProps(e.guardReactiveProps({...r})))]),beforeField:e.withCtx(()=>[e.renderSlot(o.$slots,"beforeField")]),field:e.withCtx(({fieldID:r,fieldName:a,fieldValue:n,fieldAutocomplete:u,updateValue:i,toggleIsActive:l,toggleIsHover:s,isRequired:c,isDisabled:d,isReadOnly:p})=>[e.createElementVNode("div",m,[p?(e.openBlock(),e.createElementBlock("span",{key:0,class:"queso-text-area__readonly",innerHTML:n},null,8,h)):(e.openBlock(),e.createElementBlock("textarea",{key:1,name:a,id:r,value:n,class:"queso-text-area__input",placeholder:o.placeholder,required:c,autocomplete:u,disabled:d,onInput:i,onMouseover:t=>s(!0),onMouseleave:t=>s(!1),onFocus:t=>l(!0),onBlur:t=>l(!1)},null,40,f))])]),afterField:e.withCtx(()=>[e.renderSlot(o.$slots,"afterField")]),error:e.withCtx(r=>[e.renderSlot(o.$slots,"error",e.normalizeProps(e.guardReactiveProps({...r})))]),_:3}))}});exports._sfc_main=v;