(self.webpackChunkapp_movies=self.webpackChunkapp_movies||[]).push([[506],{888:function(e,a,r){"use strict";var t=r(9047);function i(){}function s(){}s.resetWarningCache=i,e.exports=function(){function e(e,a,r,i,s,n){if(n!==t){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function a(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:s,resetWarningCache:i};return r.PropTypes=r,r}},2007:function(e,a,r){e.exports=r(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},6157:function(e,a,r){"use strict";r.d(a,{Z:function(){return b}});var t=r(1413),i=r(9439),s=r(4925),n=r(1694),o=r.n(n),l=r(2791),c=r(184),d=["as","disabled"];function f(e){var a=e.tagName,r=e.disabled,t=e.href,i=e.target,s=e.rel,n=e.role,o=e.onClick,l=e.tabIndex,c=void 0===l?0:l,d=e.type;a||(a=null!=t||null!=i||null!=s?"a":"button");var f={tagName:a};if("button"===a)return[{type:d||"button",disabled:r},f];var u=function(e){(r||"a"===a&&function(e){return!e||"#"===e.trim()}(t))&&e.preventDefault(),r?e.stopPropagation():null==o||o(e)};return"a"===a&&(t||(t="#"),r&&(t=void 0)),[{role:null!=n?n:"button",disabled:void 0,tabIndex:r?void 0:c,href:t,target:"a"===a?i:void 0,"aria-disabled":r||void 0,rel:"a"===a?s:void 0,onClick:u,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),u(e))}},f]}var u=l.forwardRef((function(e,a){var r=e.as,t=e.disabled,s=function(e,a){if(null==e)return{};var r,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],a.indexOf(r)>=0||(i[r]=e[r]);return i}(e,d),n=f(Object.assign({tagName:r,disabled:t},s)),o=(0,i.Z)(n,2),l=o[0],u=o[1].tagName;return(0,c.jsx)(u,Object.assign({},s,l,{ref:a}))}));u.displayName="Button";var v=r(162),m=["as","bsPrefix","variant","size","active","disabled","className"],p=l.forwardRef((function(e,a){var r=e.as,n=e.bsPrefix,l=e.variant,d=void 0===l?"primary":l,u=e.size,p=e.active,b=void 0!==p&&p,x=e.disabled,y=void 0!==x&&x,N=e.className,h=(0,s.Z)(e,m),Z=(0,v.vE)(n,"btn"),P=f((0,t.Z)({tagName:r,disabled:y},h)),g=(0,i.Z)(P,2),j=g[0],k=g[1].tagName;return(0,c.jsx)(k,(0,t.Z)((0,t.Z)((0,t.Z)({},j),h),{},{ref:a,disabled:y,className:o()(N,Z,b&&"active",d&&"".concat(Z,"-").concat(d),u&&"".concat(Z,"-").concat(u),h.href&&y&&"disabled")}))}));p.displayName="Button";var b=p},2936:function(e,a,r){"use strict";r.d(a,{Z:function(){return le}});var t=r(1413),i=r(4925),s=r(1694),n=r.n(s),o=r(2007),l=r.n(o),c=r(2791),d=r(184),f=["as","className","type","tooltip"],u={type:l().string,tooltip:l().bool,as:l().elementType},v=c.forwardRef((function(e,a){var r=e.as,s=void 0===r?"div":r,o=e.className,l=e.type,c=void 0===l?"valid":l,u=e.tooltip,v=void 0!==u&&u,m=(0,i.Z)(e,f);return(0,d.jsx)(s,(0,t.Z)((0,t.Z)({},m),{},{ref:a,className:n()(o,"".concat(c,"-").concat(v?"tooltip":"feedback"))}))}));v.displayName="Feedback",v.propTypes=u;var m=v,p=c.createContext({}),b=r(162),x=["id","bsPrefix","className","type","isValid","isInvalid","as"],y=c.forwardRef((function(e,a){var r=e.id,s=e.bsPrefix,o=e.className,l=e.type,f=void 0===l?"checkbox":l,u=e.isValid,v=void 0!==u&&u,m=e.isInvalid,y=void 0!==m&&m,N=e.as,h=void 0===N?"input":N,Z=(0,i.Z)(e,x),P=(0,c.useContext)(p).controlId;return s=(0,b.vE)(s,"form-check-input"),(0,d.jsx)(h,(0,t.Z)((0,t.Z)({},Z),{},{ref:a,type:f,id:r||P,className:n()(o,s,v&&"is-valid",y&&"is-invalid")}))}));y.displayName="FormCheckInput";var N=y,h=["bsPrefix","className","htmlFor"],Z=c.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,o=e.htmlFor,l=(0,i.Z)(e,h),f=(0,c.useContext)(p).controlId;return r=(0,b.vE)(r,"form-check-label"),(0,d.jsx)("label",(0,t.Z)((0,t.Z)({},l),{},{ref:a,htmlFor:o||f,className:n()(s,r)}))}));Z.displayName="FormCheckLabel";var P=Z;var g=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],j=c.forwardRef((function(e,a){var r=e.id,s=e.bsPrefix,o=e.bsSwitchPrefix,l=e.inline,f=void 0!==l&&l,u=e.reverse,v=void 0!==u&&u,x=e.disabled,y=void 0!==x&&x,h=e.isValid,Z=void 0!==h&&h,j=e.isInvalid,k=void 0!==j&&j,I=e.feedbackTooltip,C=void 0!==I&&I,w=e.feedback,F=e.feedbackType,R=e.className,E=e.style,O=e.title,T=void 0===O?"":O,z=e.type,S=void 0===z?"checkbox":z,_=e.label,V=e.children,L=e.as,B=void 0===L?"input":L,D=(0,i.Z)(e,g);s=(0,b.vE)(s,"form-check"),o=(0,b.vE)(o,"form-switch");var G=(0,c.useContext)(p).controlId,U=(0,c.useMemo)((function(){return{controlId:r||G}}),[G,r]),H=!V&&null!=_&&!1!==_||function(e,a){return c.Children.toArray(e).some((function(e){return c.isValidElement(e)&&e.type===a}))}(V,P),W=(0,d.jsx)(N,(0,t.Z)((0,t.Z)({},D),{},{type:"switch"===S?"checkbox":S,ref:a,isValid:Z,isInvalid:k,disabled:y,as:B}));return(0,d.jsx)(p.Provider,{value:U,children:(0,d.jsx)("div",{style:E,className:n()(R,H&&s,f&&"".concat(s,"-inline"),v&&"".concat(s,"-reverse"),"switch"===S&&o),children:V||(0,d.jsxs)(d.Fragment,{children:[W,H&&(0,d.jsx)(P,{title:T,children:_}),w&&(0,d.jsx)(m,{type:F,tooltip:C,children:w})]})})})}));j.displayName="FormCheck";var k=Object.assign(j,{Input:N,Label:P}),I=r(4942),C=(r(2391),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),w=c.forwardRef((function(e,a){var r,s,o=e.bsPrefix,l=e.type,f=e.size,u=e.htmlSize,v=e.id,m=e.className,x=e.isValid,y=void 0!==x&&x,N=e.isInvalid,h=void 0!==N&&N,Z=e.plaintext,P=e.readOnly,g=e.as,j=void 0===g?"input":g,k=(0,i.Z)(e,C),w=(0,c.useContext)(p).controlId;(o=(0,b.vE)(o,"form-control"),Z)?r=(0,I.Z)({},"".concat(o,"-plaintext"),!0):(s={},(0,I.Z)(s,o,!0),(0,I.Z)(s,"".concat(o,"-").concat(f),f),r=s);return(0,d.jsx)(j,(0,t.Z)((0,t.Z)({},k),{},{type:l,size:u,ref:a,readOnly:P,id:v||w,className:n()(m,r,y&&"is-valid",h&&"is-invalid","color"===l&&"".concat(o,"-color"))}))}));w.displayName="FormControl";var F=Object.assign(w,{Feedback:m}),R=/-(.)/g;var E=["className","bsPrefix","as"],O=function(e){return e[0].toUpperCase()+(a=e,a.replace(R,(function(e,a){return a.toUpperCase()}))).slice(1);var a};var T=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=a.displayName,s=void 0===r?O(e):r,o=a.Component,l=a.defaultProps,f=c.forwardRef((function(a,r){var s=a.className,c=a.bsPrefix,f=a.as,u=void 0===f?o||"div":f,v=(0,i.Z)(a,E),m=(0,t.Z)((0,t.Z)({},l),v),p=(0,b.vE)(c,e);return(0,d.jsx)(u,(0,t.Z)({ref:r,className:n()(s,p)},m))}));return f.displayName=s,f}("form-floating"),z=["controlId","as"],S=c.forwardRef((function(e,a){var r=e.controlId,s=e.as,n=void 0===s?"div":s,o=(0,i.Z)(e,z),l=(0,c.useMemo)((function(){return{controlId:r}}),[r]);return(0,d.jsx)(p.Provider,{value:l,children:(0,d.jsx)(n,(0,t.Z)((0,t.Z)({},o),{},{ref:a}))})}));S.displayName="FormGroup";var _=S,V=r(9439),L=["as","bsPrefix","className"],B=["className"];var D=c.forwardRef((function(e,a){var r=function(e){var a=e.as,r=e.bsPrefix,s=e.className,o=(0,i.Z)(e,L);r=(0,b.vE)(r,"col");var l=(0,b.pi)(),c=(0,b.zG)(),d=[],f=[];return l.forEach((function(e){var a,t,i,s=o[e];delete o[e],"object"===typeof s&&null!=s?(a=s.span,t=s.offset,i=s.order):a=s;var n=e!==c?"-".concat(e):"";a&&d.push(!0===a?"".concat(r).concat(n):"".concat(r).concat(n,"-").concat(a)),null!=i&&f.push("order".concat(n,"-").concat(i)),null!=t&&f.push("offset".concat(n,"-").concat(t))})),[(0,t.Z)((0,t.Z)({},o),{},{className:n().apply(void 0,[s].concat(d,f))}),{as:a,bsPrefix:r,spans:d}]}(e),s=(0,V.Z)(r,2),o=s[0],l=o.className,c=(0,i.Z)(o,B),f=s[1],u=f.as,v=void 0===u?"div":u,m=f.bsPrefix,p=f.spans;return(0,d.jsx)(v,(0,t.Z)((0,t.Z)({},c),{},{ref:a,className:n()(l,!p.length&&m)}))}));D.displayName="Col";var G=D,U=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],H=c.forwardRef((function(e,a){var r=e.as,s=void 0===r?"label":r,o=e.bsPrefix,l=e.column,f=void 0!==l&&l,u=e.visuallyHidden,v=void 0!==u&&u,m=e.className,x=e.htmlFor,y=(0,i.Z)(e,U),N=(0,c.useContext)(p).controlId;o=(0,b.vE)(o,"form-label");var h="col-form-label";"string"===typeof f&&(h="".concat(h," ").concat(h,"-").concat(f));var Z=n()(m,o,v&&"visually-hidden",f&&h);return x=x||N,f?(0,d.jsx)(G,(0,t.Z)({ref:a,as:"label",className:Z,htmlFor:x},y)):(0,d.jsx)(s,(0,t.Z)({ref:a,className:Z,htmlFor:x},y))}));H.displayName="FormLabel";var W=H,A=["bsPrefix","className","id"],M=c.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,o=e.id,l=(0,i.Z)(e,A),f=(0,c.useContext)(p).controlId;return r=(0,b.vE)(r,"form-range"),(0,d.jsx)("input",(0,t.Z)((0,t.Z)({},l),{},{type:"range",ref:a,className:n()(s,r),id:o||f}))}));M.displayName="FormRange";var q=M,K=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],Y=c.forwardRef((function(e,a){var r=e.bsPrefix,s=e.size,o=e.htmlSize,l=e.className,f=e.isValid,u=void 0!==f&&f,v=e.isInvalid,m=void 0!==v&&v,x=e.id,y=(0,i.Z)(e,K),N=(0,c.useContext)(p).controlId;return r=(0,b.vE)(r,"form-select"),(0,d.jsx)("select",(0,t.Z)((0,t.Z)({},y),{},{size:o,ref:a,className:n()(l,r,s&&"".concat(r,"-").concat(s),u&&"is-valid",m&&"is-invalid"),id:x||N}))}));Y.displayName="FormSelect";var J=Y,Q=["bsPrefix","className","as","muted"],X=c.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,o=e.as,l=void 0===o?"small":o,c=e.muted,f=(0,i.Z)(e,Q);return r=(0,b.vE)(r,"form-text"),(0,d.jsx)(l,(0,t.Z)((0,t.Z)({},f),{},{ref:a,className:n()(s,r,c&&"text-muted")}))}));X.displayName="FormText";var $=X,ee=c.forwardRef((function(e,a){return(0,d.jsx)(k,(0,t.Z)((0,t.Z)({},e),{},{ref:a,type:"switch"}))}));ee.displayName="Switch";var ae=Object.assign(ee,{Input:k.Input,Label:k.Label}),re=["bsPrefix","className","children","controlId","label"],te=c.forwardRef((function(e,a){var r=e.bsPrefix,s=e.className,o=e.children,l=e.controlId,c=e.label,f=(0,i.Z)(e,re);return r=(0,b.vE)(r,"form-floating"),(0,d.jsxs)(_,(0,t.Z)((0,t.Z)({ref:a,className:n()(s,r),controlId:l},f),{},{children:[o,(0,d.jsx)("label",{htmlFor:l,children:c})]}))}));te.displayName="FloatingLabel";var ie=te,se=["className","validated","as"],ne={_ref:l().any,validated:l().bool,as:l().elementType},oe=c.forwardRef((function(e,a){var r=e.className,s=e.validated,o=e.as,l=void 0===o?"form":o,c=(0,i.Z)(e,se);return(0,d.jsx)(l,(0,t.Z)((0,t.Z)({},c),{},{ref:a,className:n()(r,s&&"was-validated")}))}));oe.displayName="Form",oe.propTypes=ne;var le=Object.assign(oe,{Group:_,Control:F,Floating:T,Check:k,Switch:ae,Label:W,Text:$,Range:q,Select:J,FloatingLabel:ie})},162:function(e,a,r){"use strict";r.d(a,{pi:function(){return o},vE:function(){return n},zG:function(){return l}});var t=r(2791),i=(r(184),["xxl","xl","lg","md","sm","xs"]),s=t.createContext({prefixes:{},breakpoints:i,minBreakpoint:"xs"});s.Consumer,s.Provider;function n(e,a){var r=(0,t.useContext)(s).prefixes;return e||r[a]||a}function o(){return(0,t.useContext)(s).breakpoints}function l(){return(0,t.useContext)(s).minBreakpoint}},2391:function(e){"use strict";var a=function(){};e.exports=a}}]);
//# sourceMappingURL=506.15dcbf40.chunk.js.map