/*! Built with http://stenciljs.com */
import{h}from"./nvq-components.core.js";var NvqAutocomplete=function(){function e(){}return e.prototype.handleInput=function(e){e.target.value;var t=function(e){var t=document.createElement("div");return t.innerHTML="<strong>"+e+"</strong>",t},n=t("Test 1"),r=t("Andrew"),o=document.createElement("div");o.setAttribute("id","autocomplete-list"),o.setAttribute("class","autocomplete-items"),o.appendChild(n),o.appendChild(r),e.target.parentNode.appendChild(o)},e.prototype.render=function(){var e=this;return h("div",null,h("form",{autocomplete:"off"},h("div",{class:"autocomplete"},h("input",{onInput:function(t){return e.handleInput(t)},id:"myInput",type:"text",name:"myCountry",placeholder:"Country"})),h("input",{type:"submit"})))},Object.defineProperty(e,"is",{get:function(){return"nvq-autocomplete"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{helpText:{type:String,attr:"help-text"},itemsSource:{type:"Any",attr:"items-source"},text:{type:String,attr:"text"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"*[data-nvq-autocomplete]{-webkit-box-sizing:border-box;box-sizing:border-box}body[data-nvq-autocomplete]{font:16px Arial}.autocomplete[data-nvq-autocomplete]{position:relative;display:inline-block;width:300px}input[data-nvq-autocomplete]{border:1px solid transparent;background-color:#f1f1f1;padding:10px;font-size:16px}input[type=text][data-nvq-autocomplete]{background-color:#f1f1f1;width:100%}input[type=submit][data-nvq-autocomplete]{background-color:#1e90ff;color:#fff;cursor:pointer}.autocomplete-items[data-nvq-autocomplete]{position:absolute;border:1px solid #d4d4d4;border-bottom:none;border-top:none;z-index:99;top:100%;left:0;right:0}.autocomplete-items[data-nvq-autocomplete]   div[data-nvq-autocomplete]{padding:10px;cursor:pointer;background-color:#fff;border-bottom:1px solid #d4d4d4}.autocomplete-items[data-nvq-autocomplete]   div[data-nvq-autocomplete]:hover{background-color:#e9e9e9}.autocomplete-active[data-nvq-autocomplete]{background-color:#1e90ff!important;color:#fff}"},enumerable:!0,configurable:!0}),e}();export{NvqAutocomplete};