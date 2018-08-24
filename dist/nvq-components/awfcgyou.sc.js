/*! Built with http://stenciljs.com */
const{h:t}=window.NvqComponents;var e=function(t,e,i,n){return new(i||(i=Promise))(function(o,s){function r(t){try{a(n.next(t))}catch(t){s(t)}}function l(t){try{a(n.throw(t))}catch(t){s(t)}}function a(t){t.done?o(t.value):new i(function(e){e(t.value)}).then(r,l)}a((n=n.apply(t,e||[])).next())})};class i{constructor(){this.items=[],this.endpoint="",this.componentAttribubte="data-nvq-autocomplete",this.style={}}itemsSourceHandler(t){(t=>{let e=document.createElement("a");return e.href=t,e.host&&e.host!=window.location.host})(t)?this.endpoint=t:this.items=t.split(",")}isLocal(){return""==this.endpoint||null==this.endpoint||void 0==this.endpoint}handleInput(t){return e(this,void 0,void 0,function*(){let e=t.target;this.items!==[]&&0!=this.items.length||this.itemsSourceHandler(this.itemsSource);let i=t=>(t.setAttribute(this.componentAttribubte,""),t),n=t=>{let e=document.createElement("div");return(e=i(e)).setAttribute("class","autocomplete-row"),e.innerHTML="<strong>"+t+"</strong>",e},o=()=>{let t=[];for(let e in this.items)if(this.items[e].toLowerCase().includes(a.toLocaleLowerCase())){let i=n(this.items[e]);t.push(i)}return t},s=t=>{let e=this.endpoint+t;return fetch(e).then(t=>t.json()).then(t=>t.toString())},r=()=>{var t=e.parentNode.querySelector("#autocomplete-list");null!=t&&void 0!=t&&e.parentNode.removeChild(t)},l=t=>{if(r(),t.length>0){let n=(t=>{let e=document.createElement("div");(e=i(e)).setAttribute("id","autocomplete-list"),e.setAttribute("class","autocomplete-items");for(let i of t)e.appendChild(i);return e})(t);e.parentNode.appendChild(n)}},a=e.value;if(""!==a&&void 0!==a)if(this.isLocal()){let t=o();l(t)}else((t,e)=>{s(t).then(t=>{(t=>{let e=[];for(let i in t){let o=n(t[i]);e.push(o)}l(e)})(t.split(","))})})(a);else r()})}updateStyles(){this.style.width=this.width}render(){return this.updateStyles(),t("div",null,t("div",{class:"autocomplete",style:this.style},t("input",{autocomplete:"off",onInput:t=>e(this,void 0,void 0,function*(){return yield this.handleInput(t)}),type:"text",name:this.name,placeholder:this.placeholder,value:this.value})))}static get is(){return"nvq-autocomplete"}static get encapsulation(){return"shadow"}static get properties(){return{el:{elementRef:!0},itemsSource:{type:String,attr:"items-source",watchCallbacks:["itemsSourceHandler"]},name:{type:String,attr:"name"},placeholder:{type:String,attr:"placeholder"},value:{type:String,attr:"value"},width:{type:String,attr:"width"}}}static get style(){return"[data-nvq-autocomplete-host]   .autocomplete[data-nvq-autocomplete]{position:relative;display:inline-block}[data-nvq-autocomplete-host]   .autocomplete[data-nvq-autocomplete]   input[data-nvq-autocomplete]{border:1px solid transparent;background-color:#f1f1f1;font-size:16px;padding:10px;width:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}[data-nvq-autocomplete-host]   .autocomplete[data-nvq-autocomplete]   .autocomplete-items[data-nvq-autocomplete]{position:absolute;z-index:100;top:100%;left:0;right:0;background-color:#fff}[data-nvq-autocomplete-host]   .autocomplete[data-nvq-autocomplete]   .autocomplete-items[data-nvq-autocomplete]   .autocomplete-row[data-nvq-autocomplete]{padding:1em;border:1px solid #d4d4d4}[data-nvq-autocomplete-host]   .autocomplete[data-nvq-autocomplete]   .autocomplete-items[data-nvq-autocomplete]   .autocomplete-row[data-nvq-autocomplete]:hover{background-color:#e9e9e9;cursor:pointer}"}}export{i as NvqAutocomplete};