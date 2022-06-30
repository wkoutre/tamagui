"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[911],{44322:function(e,t,r){r.r(t)},34120:function(e,t,r){r.r(t)},84911:function(e,t,r){r.r(t),r.d(t,{default:function(){return W}});var o=r(52322),s=r(37328),i=r(96670),c=r(26297),a=r(69586),d=r(88290),n=r(59699),b=r(9303),l=r(45482),u=r(54503);const h={"+":(e,t)=>e+t,"-":(e,t)=>e-t,"/":(e,t)=>e/t,"*":(e,t)=>e*t},_=(...e)=>{if(u.$L){let t="calc(";for(const r of e)t+=h[r]?" "+r+" ":f(r);return t+")"}let t=0,r=null;for(const o of e)h[o]?r=h[o]:r?(t=r(t,o),r=null):t=+o;return t},f=e=>{const t=(0,n.kv)(e);return"number"===typeof t?`${t}px`:t};var m=r(63035),p=r(8005),w=r(35314),k=r(39383),g=r(47138),x=r(2784),v=r(27213),z=r(23374);const j="Switch",y=(0,p.b)(j),[C]=y,[R,L]=(y[1],C(j)),S=e=>Math.round(.65*(0,n.Ve)((0,b.a)(e))),T=e=>2*S(e),$=(0,l.z)(w.sL,{name:"Switch",tag:"button",variants:{size:{"...size":e=>{const t=_(S(e),"+",4);return{height:t,minHeight:t,width:_(T(e),"+",4)}}}},defaultVariants:{size:"$4"},"borderTopColor-focus":"_btc-0focus-2xgill","borderRightColor-focus":"_brc-0focus-1sjqkaq","borderBottomColor-focus":"_bbc-0focus-y6s9h7","borderLeftColor-focus":"_blc-0focus-1u4s42n",borderBottomStyle:"_bbs-1d05hm9",borderTopStyle:"_bts-j2x5vn",borderLeftStyle:"_bls-69w1u5",borderRightStyle:"_brs-r2rbii",backgroundColor:"_bc-ea1zmt",borderTopColor:"_btc-m01i2g",borderRightColor:"_brc-afar9b",borderBottomColor:"_bbc-13rsofa",borderLeftColor:"_blc-tic6ma",borderTopWidth:"_btw-1k5vqvx",borderRightWidth:"_brw-1737ctg",borderBottomWidth:"_bbw-he1byj",borderLeftWidth:"_blw-np9tbb",borderTopLeftRadius:"_btlr-1idohe1",borderTopRightRadius:"_btrr-94c9kc",borderBottomRightRadius:"_bbrr-1qsycse",borderBottomLeftRadius:"_bblr-14blrr"}),B=x.forwardRef(((e,t)=>{const{__scopeSwitch:r,labeledBy:a,name:n,checked:b,defaultChecked:l,required:h,disabled:_,value:f="on",onCheckedChange:m,size:p="$4"}=e,w=(0,c.Z)(e,["__scopeSwitch","labeledBy","name","checked","defaultChecked","required","disabled","value","onCheckedChange","size"]),[k,j]=x.useState(null),y=(0,d.e)(t,(e=>j(e))),C=(0,z.t0)(k),L=a||C,S=x.useRef(!1),T=!!u.$L&&(!k||Boolean(k.closest("form"))),[B=!1,Z]=(0,g.T)({prop:b,defaultProp:l||!1,onChange:m});return x.useEffect((()=>{if(e.id)return(0,v.QS)(e.id,{focus:()=>{Z((e=>!e))}})}),[e.id]),(0,o.jsxs)(R,{scope:r,checked:B,disabled:_,size:p,children:[(0,o.jsx)($,(0,i.Z)((0,s.Z)({size:p,role:"switch","aria-checked":B,"aria-labelledby":L,"aria-required":h,"data-state":I(B),"data-disabled":_?"":void 0,disabled:_,tabIndex:_?void 0:0,value:f},w),{ref:y,onPress:t=>{var r;null==(r=e.onPress)||r.call(e,t),Z((e=>!e)),u.$L&&T&&(S.current=t.isPropagationStopped(),S.current||t.stopPropagation())}})),u.$L&&T&&(0,o.jsx)(P,{control:k,bubbles:!S.current,name:n,value:f,checked:B,required:h,disabled:_,style:{transform:"translateX(-100%)"}})]})}));B.displayName=j;const Z=$.extractable((0,m.Y)(B),{neverFlatten:!0}),q="SwitchThumb",E=(0,l.z)(k.K,{name:"SwitchThumb",variants:{size:{"...size":e=>({height:S(e),width:S(e)})}},defaultVariants:{size:"$4"},borderTopLeftRadius:"_btlr-1idohe1",borderTopRightRadius:"_btrr-94c9kc",borderBottomRightRadius:"_bbrr-1qsycse",borderBottomLeftRadius:"_bblr-14blrr",backgroundColor:"_bc-ea1zmt"}),N=E.extractable(x.forwardRef(((e,t)=>{const{__scopeSwitch:r}=e,a=(0,c.Z)(e,["__scopeSwitch"]),{size:d,disabled:b,checked:l}=L(q,r);return(0,o.jsx)(E,(0,i.Z)((0,s.Z)({size:d,"data-state":I(l),"data-disabled":b?"":void 0},a),{x:l?(0,n.Ve)(T(d))-(0,n.Ve)(S(d)):0,ref:t}))})),{neverFlatten:!0});N.displayName=q,Z.Thumb=N;const P=e=>{const{control:t,checked:r,bubbles:d=!0}=e,n=(0,c.Z)(e,["control","checked","bubbles"]),b=x.useRef(null),l=(0,a.D)(r);return x.useEffect((()=>{const e=b.current,t=window.HTMLInputElement.prototype,o=Object.getOwnPropertyDescriptor(t,"checked").set;if(l!==r&&o){const t=new Event("click",{bubbles:d});o.call(e,r),e.dispatchEvent(t)}}),[l,r,d]),(0,o.jsx)("input",(0,i.Z)((0,s.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:r},n),{tabIndex:-1,ref:b,style:(0,i.Z)((0,s.Z)({},e.style),{position:"absolute",pointerEvents:"none",opacity:0,margin:0})}))};function I(e){return e?"checked":"unchecked"}r(34120);var V=r(29688);function W(){return(0,o.jsxs)(w.FA,{alignItems:"_ai-17do05s",width:"_w-182r4c5",space:"$3",children:[(0,o.jsx)(F,{size:"$2"}),(0,o.jsx)(F,{size:"$3"}),(0,o.jsx)(F,{size:"$4"}),(0,o.jsx)(F,{size:"$5"})]})}function F(e){return(0,o.jsxs)(w.sL,{alignItems:"_ai-17do05s",transform:"_transform-17o6ma4",width:"_w-182r4c5",space:"$4",children:[(0,o.jsx)(z.__,{justifyContent:"_jc-1lct8eo",minWidth:"_miw-1it5r1i",paddingRight:"_pr-4rm8j0",size:e.size,htmlFor:"switch-1",children:"Dark mode"}),(0,o.jsx)("div",{vertical:!0,className:(0,V.concatClassName)(" _bbs-1d05hm9 _bts-j2x5vn _bls-69w1u5 _brs-r2rbii _transform-fx81n7 _brw-1737c2r _maw-ao3bcm _w-1c386nm _mih-zdnlnj _bbw-he1ah5 _mah-e01bnd _h-386d6l _fg-15m5m9x _fs-vf3l73 _btw-1k5vpej _blw-np9rtx _btc-1ubgvm5 _brc-lv4h9i _bbc-1gkdz6n _blc-11gd9tv _fd-1fwxi70 _boxs-1pkamc3 _fb-16z0p9w _disp-sczph7 _ai-o35pey  ")}),(0,o.jsx)(Z,{id:"switch-1",size:e.size,children:(0,o.jsx)(Z.Thumb,{animation:"bouncy"})})]})}r(44322)}}]);