"use strict";(self["webpackChunks025"]=self["webpackChunks025"]||[]).push([[4829],{4829:(t,e,i)=>{i.r(e),i.d(e,{default:()=>u});var n=function(){var t=this;t._self._c;return t._m(0)},a=[function(){var t=this,e=t._self._c;return e("div",[e("div",{attrs:{id:"container"}})])}],l=i(1821);const s={name:"test-page",components:{},props:{},data(){return{depCountData:[{title:"零食类",value:27},{title:"冷冻类",value:25},{title:"烟酒类",value:18},{title:"生鲜类",value:15},{title:"散装类",value:10},{title:"水果类",value:5}],piePlot:{}}},methods:{init(){this.initAntvFx()},renderStatistic(t,e,i){const{width:n,height:a}=(0,l.measureTextWidth)(e,i),s=t/2;let o=1;t<n&&(o=Math.min(Math.sqrt(Math.abs(Math.pow(s,2)/(Math.pow(n/2,2)+Math.pow(a,2)))),1));const r=`width:${t}px;`;return`<div style="${r};font-size:${o}em;line-height:${o<1?1:"inherit"};">${e}</div>`},initAntvFx(){var t=this,e=this.depCountData;this.piePlot=new l.Pie("container",{appendPadding:10,data:e,angleField:"value",colorField:"title",radius:1,innerRadius:.64,meta:{value:{formatter:t=>`${t} `}},label:{type:"inner",offset:"-50%",style:{textAlign:"center"},autoRotate:!1,content:"{value}"},statistic:{title:{offsetY:-4,customHtml:(e,i,n)=>{const{width:a,height:l}=e.getBoundingClientRect(),s=Math.sqrt(Math.pow(a/2,2)+Math.pow(l/2,2)),o=n?n.title:"系统访问分析";return t.renderStatistic(s,o,{fontSize:28})}},content:{offsetY:4,style:{fontSize:"32px"},customHtml:(e,i,n,a)=>{const{width:l}=e.getBoundingClientRect(),s=n?` ${n.value}人`:` ${a.reduce(((t,e)=>t+e.value),0)}人`;return t.renderStatistic(l,s,{fontSize:32})}}},interactions:[{type:"element-selected"},{type:"element-active"},{type:"pie-statistic-active"}]}),this.piePlot.render(),this.piePlot.on("element:click",(e=>{t.getPieUserItemFx(e.data.data.title)}))}},mounted(){this.init()}},o=s;var r=i(1001),c=(0,r.Z)(o,n,a,!1,null,"ad8cbce8",null);const u=c.exports}}]);