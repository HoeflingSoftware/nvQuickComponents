/*! Built with http://stenciljs.com */
const{h:t}=window.NvqComponents;class e{render(){return t("div",null,t("div",{class:"tooltip"},this.text,t("span",{class:"tooltiptext"},this.helpText)))}static get is(){return"nvq-label"}static get encapsulation(){return"shadow"}static get properties(){return{helpText:{type:String,attr:"help-text"},text:{type:String,attr:"text"}}}static get style(){return"[data-nvq-label-host]   .tooltip[data-nvq-label]{position:relative;display:inline-block;border-bottom:1px dashed #5b5b5b}[data-nvq-label-host]   .tooltip[data-nvq-label]   .tooltiptext[data-nvq-label]{visibility:hidden;width:120px;background-color:#5b5b5b;color:#fff;text-align:center;padding:5px 0;border-radius:6px;position:absolute;z-index:1;top:-5px;left:110%}[data-nvq-label-host]   .tooltip[data-nvq-label]:hover   .tooltiptext[data-nvq-label]{visibility:visible}[data-nvq-label-host]   .tooltip[data-nvq-label]   .tooltiptext[data-nvq-label]::after{content:\" \";position:absolute;top:50%;right:100%;margin-top:-5px;border-width:5px;border-style:solid;border-color:transparent #5b5b5b transparent transparent}"}}export{e as NvqLabel};