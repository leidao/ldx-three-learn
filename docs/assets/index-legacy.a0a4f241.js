!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,a=[],o=!0,s=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(c){s=!0,i=c}finally{try{o||null==n.return||n.return()}finally{if(s)throw i}}return a}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=document.createElement("style");i.innerHTML='#--unocss-hash--{content:"553b441b"}\n',document.head.appendChild(i),System.register(["./index-legacy.f99d2403.js","./index-legacy.0d138179.js","./CSS3DRenderer-legacy.e55a0216.js"],(function(t){"use strict";var i,a,o,s,c,l,u,d,p,h,f,v,m,g,y,w,x;return{setters:[function(e){i=e.r,a=e.b,o=e.j},function(e){s=e.G,c=e.C,l=e.T,u=e.F,d=e.s,p=e.g,h=e.ap,f=e.M,v=e.ay,m=e.H,g=e.am,y=e.c},function(e){w=e.C,x=e.b}],execute:function(){var b="/ldx-three-learn/nebularOrbit/img/point.png",R=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"clock",void 0),r(this,"viewer",void 0),r(this,"css3Render",void 0),r(this,"textLoader",void 0),r(this,"fileLoader",void 0),r(this,"group",new s),r(this,"isRotate",!0),r(this,"onResize",(function(){var e=n.viewer.container.getBoundingClientRect(),t=e.width,r=e.height,i=t/r;n.viewer.renderer.setSize(t,r),n.css3Render.setSize(t,r),n.viewer.camera.aspect=i,n.viewer.camera.updateProjectionMatrix(),n.render()})),r(this,"listen",(function(){window.addEventListener("resize",n.onResize)})),r(this,"destroy",(function(){window.removeEventListener("resize",n.onResize)})),r(this,"update",(function(){var e=n.clock.getDelta();n.isRotate&&n.group.rotateZ(.1*e),n.render()})),this.viewer=t,this.clock=new c,this.group=new s,this.group.rotation.set(-Math.PI/2.6,-Math.PI/8,0),this.group.position.set(10,30,0),this.group.scale.set(1.16,1.16,1.16),t.scene.add(this.group),this.textLoader=new l,this.textLoader.setCrossOrigin(""),this.fileLoader=new u,this.init()}var t,i,a;return t=e,(i=[{key:"init",value:function(){var e=this.viewer.container.getBoundingClientRect(),t=e.width,n=e.height;this.css3Render=new w,this.css3Render.setSize(t,n),this.css3Render.domElement.style.position="absolute",this.css3Render.domElement.style.pointerEvents="none",this.css3Render.domElement.style.top="0px",this.css3Render.domElement.style.left="0px";var r=this.css3Render.domElement;r.id="css3Render",this.viewer.container.appendChild(r),this.loadSky(),this.createCircle(),this.createRing(),this.createLine()}},{key:"render",value:function(){var e;this.viewer.render(),null===(e=this.css3Render)||void 0===e||e.render(this.viewer.scene,this.viewer.camera)}},{key:"loadSky",value:function(){var e=this;this.textLoader.setPath("nebularOrbit/img/"),this.textLoader.load("背景星空图.png",(function(t){e.viewer.scene.background=t,e.render()}))}},{key:"createCircle",value:function(){var e=this;this.textLoader.setPath("nebularOrbit/img/"),this.textLoader.load("生平-背景圈.png",(function(t){t.encoding=d;var n=new p({map:t,transparent:!0,opacity:.5}),r=new h(230,240),i=new f(r,n);i.rotation.set(0,0,0),e.group.add(i),e.render()}))}},{key:"createRing",value:function(){var e=new v(80,80.8,200),t=new p({color:16777215,side:m,transparent:!0,opacity:.4}),n=new f(e,t);n.position.set(0,0,-1),this.group.add(n)}},{key:"createLine",value:function(){var e=this;this.fileLoader.setPath("nebularOrbit/data/"),this.fileLoader.load("孔子生平.json",(function(t){for(var n,r=(JSON.parse(t)||{}).lifetime||[],i=new g(0,0,80.5,1.6,1.6+2*Math.PI,!1).getPoints(270),a=[],o=0;o<27;o++){var s=10*o;a.push(i[s])}for(var c=function(t){var i=a[t],o=e.createPoint(r[t],t);o.element.addEventListener("click",(function(){if(n){var t=n.getElementsByClassName("circle-img")[0];t.src=b,t.style.transform="scale(1)"}var i=o.element.getElementsByClassName("circle-img")[0];i.src="/ldx-three-learn/nebularOrbit/img/point_active.png",i.style.transform="scale(2)",n=o.element;var a=+(o.element.getAttribute("_pointIndex")||0),s=r[a];e.viewer.emit("point_click",s)})),o.element.addEventListener("mouseenter",(function(){e.isRotate=!1})),o.element.addEventListener("mouseleave",(function(){e.isRotate=!0})),o.position.set(i.x,i.y,0),e.group.add(o),e.render()},l=0;l<a.length;l++)c(l)}))}},{key:"createPoint",value:function(e,t){var n=document.createElement("div");n.setAttribute("_pointIndex",t);var r='\n  <div style="position:relative;top:10px;left:0;width:60px;height:60px;cursor: pointer;">\n    <img class="circle-img" width=60 height=60 style="position:relative;top:0;left:0;transition:0.5s;" src=\''.concat(b,'\' />\n    <div class="circle-text" style="width:80px;position:relative;top:-18px;left:0;color:#fff; text-align: center;font-size:12px">').concat(e.time,"</div>\n  </div>\n");n.innerHTML=r;var i=new x(n);return i.userData.index=t,i.scale.set(.1,.1,.1),i.userData.isCss23D=!0,i}},{key:"creatPlan",value:function(){var e=this;this.textLoader.setPath("nebularOrbit/img/"),this.textLoader.load("星球.png",(function(t){var n=new p({transparent:!0,opacity:.8,side:m,map:t}),r=new h(200,200),i=new f(r,n);e.viewer.scene.add(i)}))}}])&&n(t.prototype,i),a&&n(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}();t("default",(function(){var t=i.exports.useRef(null),n=e(i.exports.useState(),2),r=n[0],s=n[1];return i.exports.useEffect((function(){if(t.current){var e=new y(t.current);e.on("point_click",(function(e){s(e)}));var n,r=new R(e);return function e(){r.update(),n=requestAnimationFrame(e)}(),function(){cancelIdleCallback(n)}}}),[]),a("div",{className:"w-100% h-100% relative",children:[o("div",{className:"gunplay w-100% h-100%",ref:t}),(null==r?void 0:r.time)&&a("div",{className:"absolute left-40px top-20px z-999 text-#fff w-342px",children:[o("div",{className:"text-36px border-b-2px pb-10px",children:null==r?void 0:r.time}),o("div",{className:"text-16px pt-14px max-h-500px overflow-auto font-normal",children:null==r?void 0:r.description})]}),o("div",{className:"mask fixed top--325px right--404px w-1291px h-1293px",style:{backgroundImage:"url(".concat("/ldx-three-learn/nebularOrbit/img/星球.png",")"),backgroundRepeat:"no-repeat",backgroundSize:"100% 100%",backgroundPosition:"-100px -100px",pointerEvents:"none"}})]})}))}}}))}();