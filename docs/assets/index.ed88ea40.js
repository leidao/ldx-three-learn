var _=Object.defineProperty;var k=(i,e,t)=>e in i?_(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var n=(i,e,t)=>(k(i,typeof e!="symbol"?e+"":e,t),t);import{r as S,i as f,j as V}from"./index.fafe12e9.js";import{V as o,c as y,O as X,F as Y,S as z,I as F,a as H}from"./scene.edd0b92e.js";class N{constructor(e={}){n(this,"mousePos",new o);n(this,"center",new o);n(this,"vertives",[]);n(this,"moveVertices",[0,0,14,14,6,14,0,20]);n(this,"rotateVertices",[-10.61,-10.61,-2.83,-9.9,-5.66,-7.07,-2.83,-4.24,-1.41,0,-2.83,4.24,-5.66,7.07,-2.83,9.9,-10.61,10.61,-9.9,2.83,-7.07,5.66,-4.24,2.83,-3.11,0,-4.24,-2.83,-7.07,-5.66,-9.9,-2.83]);n(this,"scaleVertices",[1,4,1,1,5,1,5,5,11,0,5,-5,5,-1,1,-1,1,-4,-1,-4,-1,-1,-5,-1,-5,-5,-11,0,-5,5,-5,1,-1,1,-1,4]);n(this,"fillStyle","#000");n(this,"strokeStyle","#fff");Object.assign(this,e)}scale(e){const{mousePos:t,center:s}=this;this.drawScale(e,new o().subVectors(s,t).angle())}scaleY(e){const{center:t,vertives:s}=this;this.drawScale(e,new o().subVectors(t,new o(s[2],s[3])).angle())}scaleX(e){const{center:t,vertives:s}=this;this.drawScale(e,new o().subVectors(t,new o(s[14],s[15])).angle())}move(e){e.beginPath(),y(e,this.moveVertices)}rotate(e){const{mousePos:t,center:s}=this;e.rotate(new o().subVectors(t,s).angle()),e.beginPath(),y(e,this.rotateVertices)}drawScale(e,t){e.rotate(t),e.beginPath(),y(e,this.scaleVertices)}draw(e,t){if(!t)return;const{mousePos:s,fillStyle:r,strokeStyle:c}=this;e.save(),e.fillStyle=r,e.strokeStyle=c,e.lineWidth=2,e.translate(s.x,s.y),this[t](e),e.closePath(),e.stroke(),e.fill(),e.restore()}}const b={type:"change"};class T extends X{constructor(){super(...arguments);n(this,"_img",null);n(this,"frame",new Y);n(this,"index",1/0);n(this,"enableCamera",!1);n(this,"mouseState",null);n(this,"clipMousePos",new o);n(this,"mouseShape",new N({vertives:this.frame.vertives,center:this.frame.center,mousePos:this.clipMousePos}))}get img(){return this._img}set img(t){this._img!==t&&(this._img=t,t&&(this.frame.img=t,this.dispatchEvent({type:"selected",img:t})),this.dispatchEvent(b))}pointerdown(t,s){!this.mouseState&&(this.img=t,!t)||(this.clipMousePos.copy(s),this.mouseState=this.frame.getMouseState(s),this.dispatchEvent(b))}pointermove(t){!this.img||(this.clipMousePos.copy(t),this.mouseState=this.frame.getMouseState(t),this.dispatchEvent(b))}draw(t){const{img:s}=this;if(!s)return;const{frame:r,mouseShape:c,mouseState:h}=this;r.draw(t),c.draw(t,h)}}const R=()=>{const i=S.exports.useRef(null),[e,t]=S.exports.useState("default");return S.exports.useEffect(()=>{const s=new z,r=new Image;r.src="https://yxyy-pandora.oss-cn-beijing.aliyuncs.com/stamp-images/1.png";const c=new F({image:r});s.add(c);const h=new T;s.add(h);const d=new o(1/0);function C(){const u=new o(r.width,r.height).multiplyScalar(.6);c.setOption({rotate:0,position:new o(0,0),scale:new o(.5),size:u.clone(),offset:u.clone().multiplyScalar(-.5),style:{globalAlpha:.8,shadowColor:"rgba(0,0,0,0.5)",shadowBlur:0}}),L()}function L(u=0){s.isPointInObj(c,d,c.pvmoMatrix),s.render()}const E=()=>{h.mouseState?t("none"):t(w?"pointer":"default")};if(!i.current)return;let w;const m=i.current;s.setOption({domElement:m});const p=new H(s.camera,s.domElement);p.addEventListener("change",()=>{s.render()}),h.addEventListener("change",()=>{s.render()}),r.onload=function(){C()};const l=(()=>{const u=a=>{p.wheel(a)},M=a=>{const{button:v,clientX:g,clientY:I}=a,P=s.clientToClip(g,I);v===0&&(p.pointerdown(a),w=s.selectObj(P),h.pointerdown(w,P),E())},O=a=>{const{clientX:v,clientY:g}=a;d.copy(s.clientToClip(v,g)),p.pointermove(a),w=s.selectObj(d),h.pointermove(d),E()},j=a=>{a.button===0&&p.pointerup()};return{wheel:f.throttle(u,60),pointerdown:f.throttle(M,60),pointermove:f.throttle(O,0),pointerup:f.throttle(j,60)}})();return m.addEventListener("wheel",l.wheel,{passive:!1}),m.addEventListener("pointerdown",l.pointerdown),m.addEventListener("pointermove",l.pointermove),window.addEventListener("pointerup",l.pointerup),()=>{m.removeEventListener("wheel",l.wheel),m.removeEventListener("pointerdown",l.pointerdown),m.removeEventListener("pointermove",l.pointermove),window.removeEventListener("pointerup",l.pointerup)}},[]),V("div",{className:"w-100% h-100% overflow-hidden",children:V("canvas",{ref:i,className:"w-100% h-100%",style:{cursor:e}})})};export{R as default};