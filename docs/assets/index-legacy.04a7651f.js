!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n(){return n="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=r(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(arguments.length<3?e:n):i.value}},n.apply(this,arguments)}function r(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}function u(t,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var f=document.createElement("style");f.innerHTML='#--unocss-hash--{content:"dad72445"}\n',document.head.appendChild(f),System.register(["./index-legacy.799569f7.js","./index-legacy.f9ef1c1f.js"],(function(e){"use strict";var r,i,c,u,f,p,h,v,y,m,w,g,b,x,S,L,E,O,C,T,R,j,P,z,k,M,F,N,_,A,W,H,D;return{setters:[function(e){r=e.r,i=e.j},function(e){c=e.L,u=e.F,f=e.af,p=e.a1,h=e.a7,v=e.a2,y=e.n,m=e.a9,w=e.ag,g=e.ah,b=e.ai,x=e.M,S=e.z,L=e.O,E=e.u,O=e.t,C=e.x,T=e.B,R=e.J,j=e.V,P=e.aj,z=e.ak,k=e.al,M=e.H,F=e.am,N=e.C,_=e.ad,A=e.an,W=e.K,H=e.ao,D=e.ae}],execute:function(){var q=function(e,t,n){var r=t.getBoundingClientRect(),o=r.left,i=r.top,a=r.width/2,s=r.height/2,c=n.clone().project(e);return{x:Math.round(c.x*a+a)+o,y:Math.round(-c.y*s+s)+i}},B=function(e){s(n,e);var t=l(n);function n(e){return o(this,n),t.call(this,e)}return a(n,[{key:"load",value:function(e,t,n,r){var o=this,i=new u(this.manager);i.setPath(this.path),i.setRequestHeader(this.requestHeader),i.setWithCredentials(o.withCredentials),i.load(e,(function(e){var n;try{n=JSON.parse(e)}catch(i){console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),n=JSON.parse(e.substring(65,e.length-2))}var r=o.parse(n);t&&t(r)}),n,r)}},{key:"parse",value:function(e){return new I(e)}}]),n}(c),I=function(){function e(t){o(this,e),this.type="Font",this.data=t}return a(e,[{key:"generateShapes",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=[],r=G(e,t,this.data),o=0,i=r.length;o<i;o++)Array.prototype.push.apply(n,r[o].toShapes());return n}}]),e}();function G(e,t,n){for(var r=Array.from(e),o=t/n.resolution,i=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*o,a=[],s=0,c=0,l=0;l<r.length;l++){var u=r[l];if("\n"===u)s=0,c-=i;else{var d=J(u,o,s,c,n);s+=d.offsetX,a.push(d.path)}}return a}function J(e,t,n,r,o){var i=o.glyphs[e]||o.glyphs["?"];if(i){var a,s,c,l,u,d,p,h,v=new f;if(i.o)for(var y=i._cachedOutline||(i._cachedOutline=i.o.split(" ")),m=0,w=y.length;m<w;){switch(y[m++]){case"m":a=y[m++]*t+n,s=y[m++]*t+r,v.moveTo(a,s);break;case"l":a=y[m++]*t+n,s=y[m++]*t+r,v.lineTo(a,s);break;case"q":c=y[m++]*t+n,l=y[m++]*t+r,u=y[m++]*t+n,d=y[m++]*t+r,v.quadraticCurveTo(u,d,c,l);break;case"b":c=y[m++]*t+n,l=y[m++]*t+r,u=y[m++]*t+n,d=y[m++]*t+r,p=y[m++]*t+n,h=y[m++]*t+r,v.bezierCurveTo(u,d,p,h,c,l)}}return{offsetX:i.ha*t,path:v}}console.error('THREE.Font: character "'+e+'" does not exists in font family '+o.familyName+".")}I.prototype.isFont=!0;var X=function(e){s(r,e);var t=l(r);function r(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.createElement("div");return o(this,r),(e=t.call(this)).element=n,e.element.style.position="absolute",e.element.style.userSelect="none",e.element.setAttribute("draggable",!1),e.addEventListener("removed",(function(){this.traverse((function(e){e.element instanceof Element&&null!==e.element.parentNode&&e.element.parentNode.removeChild(e.element)}))})),e}return a(r,[{key:"copy",value:function(e,t){return n(d(r.prototype),"copy",this).call(this,e,t),this.element=e.element.cloneNode(!0),this}}]),r}(p);X.prototype.isCSS2DObject=!0;var U=new h,V=new v,Y=new v,K=new h,Q=new h,Z=a((function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o(this,e);var n,r,i,a,s=this,c={objects:new WeakMap},l=void 0!==t.element?t.element:document.createElement("div");function u(e,t,n){if(e.isCSS2DObject){e.onBeforeRender(s,t,n),U.setFromMatrixPosition(e.matrixWorld),U.applyMatrix4(Y);var r=e.element;/apple/i.test(navigator.vendor)?r.style.transform="translate(-50%,-50%) translate("+Math.round(U.x*i+i)+"px,"+Math.round(-U.y*a+a)+"px)":r.style.transform="translate(-50%,-50%) translate("+(U.x*i+i)+"px,"+(-U.y*a+a)+"px)",r.style.display=e.visible&&U.z>=-1&&U.z<=1?"":"none";var o={distanceToCameraSquared:d(n,e)};c.objects.set(e,o),r.parentNode!==l&&l.appendChild(r),e.onAfterRender(s,t,n)}for(var f=0,p=e.children.length;f<p;f++)u(e.children[f],t,n)}function d(e,t){return K.setFromMatrixPosition(e.matrixWorld),Q.setFromMatrixPosition(t.matrixWorld),K.distanceToSquared(Q)}function f(e){var t=[];return e.traverse((function(e){e.isCSS2DObject&&t.push(e)})),t}function p(e){for(var t=f(e).sort((function(e,t){return c.objects.get(e).distanceToCameraSquared-c.objects.get(t).distanceToCameraSquared})),n=t.length,r=0,o=t.length;r<o;r++)t[r].element.style.zIndex=n-r}l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:r}},this.render=function(e,t){!0===e.autoUpdate&&e.updateMatrixWorld(),null===t.parent&&t.updateMatrixWorld(),V.copy(t.matrixWorldInverse),Y.multiplyMatrices(t.projectionMatrix,V),u(e,e,t),p(e)},this.setSize=function(e,t){i=(n=e)/2,a=(r=t)/2,l.style.width=e+"px",l.style.height=t+"px"}})),$=function(){function e(n){var r=this;o(this,e),t(this,"clock",void 0),t(this,"textLoader",void 0),t(this,"fileLoader",void 0),t(this,"fontLoad",void 0),t(this,"viewer",void 0),t(this,"uniforms",{}),t(this,"labelRenderer",void 0),t(this,"controls",void 0),t(this,"createEarth",(function(e){r.textLoader.load("propagate/img/earth.png",(function(t){var n=new b(e,100,100),o=new x({map:t,opacity:1}),i=new S(n,o);r.viewer.scene.add(i),r.render()}))})),t(this,"drawOutline",(function(){var e=new L,t=new L,n=new x({color:"#ffffff",side:E,transparent:!0,opacity:.35}),o=new O({color:16777215,transparent:!0,opacity:.1});r.fileLoader.load("propagate/data/world.json",(function(i){i.features.forEach((function(i){if("Polygon"===i.geometry.type){var a=[],s=i.geometry.coordinates[0]||[];if(0===s.length)return;s.forEach((function(e){a.push(e[0],e[1],0)})),e.add(r.drawLineLoop(a,o)),t.add(r.drawShpae(s,n))}else"MultiPolygon"===i.geometry.type&&i.geometry.coordinates.forEach((function(i){var a=[],s=i[0]||[];0!==s.length&&(s.forEach((function(e){a.push(e[0],e[1],0)})),e.add(r.drawLineLoop(a,o)),t.add(r.drawShpae(s,n)))}))})),r.viewer.scene.add(e),r.viewer.scene.add(t),r.render()}),(function(e){r.viewer.onProgress("propagate/data/world.json",e)}))})),t(this,"drawLineLoop",(function(e,t){var n=new C,r=new Float32Array(e);return n.setAttribute("position",new T(r,3)),new R(n,t)})),t(this,"drawShpae",(function(e,t){var n=[];e.forEach((function(e){n.push(new j(e[0],e[1]))}));var r=new P(n),o=new z(r);return new S(o,t)})),t(this,"drawLines",(function(e){var t=new O({color:14737632});e.forEach((function(e){var n=e.from,o=e.to,i=e.name,a=e.isLine;if(o&&a&&"曲阜"!==i){var s=new h(n[0],n[1],0),c=new h(o[0],o[1],0),l=s.clone().lerp(c,.5),u=s.clone().distanceTo(c);l.z+=u/3;var d=4*u,f=new k(s,l,c).getPoints(d),p=(new C).setFromPoints(f),v=new M(p,t);r.viewer.scene.add(v),r.render()}}))})),t(this,"drawFlyLine",(function(e){e.forEach((function(e){var t=e.from,n=e.to,o=e.name,i=e.isLine;if(n&&i&&"曲阜"!==o){var a=[],s=[],c=[],l=[],u=new h(t[0],t[1],0),d=new h(n[0],n[1],0),f=u.clone().lerp(d,.5),p=u.clone().distanceTo(d);f.z+=p/3;var v=8*p,y=new k(u,f,d).getPoints(v);y.forEach((function(e,t){var n=t/(v-1);a.push({x:e.x,y:e.y,z:e.z}),c.push(n),l.push(t)})),a.forEach((function(e){s.push(e.x,e.y,e.z)}));var m=new C;m.setFromPoints(y),m.setAttribute("position",new F(s,3)),m.setAttribute("index",new F(c,1)),m.setAttribute("current",new F(l,1)),r.uniforms[o]={uColor:{value:new N(710128)},uRange:{value:20},uSize:{value:3},uTotal:{value:v},uTime:{value:0},uSpeed:{value:(4*Math.random()+4)/10}};var w=new _({transparent:!0,depthWrite:!1,depthTest:!1,blending:A,uniforms:r.uniforms[o],vertexShader:"\n        attribute float index;\n        attribute float current;\n        uniform float uTime;\n        uniform float uSize;\n        uniform float uSpeed;\n        uniform float uRange; // 展示区间\n        uniform float uTotal; // 粒子总数\n        uniform vec3 uColor;\n        varying vec3 vColor;\n        varying float vOpacity;\n        void main() {\n            // 需要当前显示的索引\n            float size = uSize;\n            float showNumber = uTotal * mod(uTime * uSpeed, 1.1);\n            if (showNumber > current && showNumber < current + uRange) {\n                float uIndex = ((current + uRange) - showNumber) / uRange;\n                size *= uIndex;\n                vOpacity = 1.0;\n            } else {\n                vOpacity = 0.0;\n            }\n            // 顶点着色器计算后的Position\n            vColor = uColor;\n            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\n            gl_Position = projectionMatrix * mvPosition;\n            // 大小\n            gl_PointSize = size * 300.0 / (-mvPosition.z);\n        }",fragmentShader:"\n        varying vec3 vColor;\n        varying float vOpacity;\n        void main() {\n            float distanceToCenter = distance(gl_PointCoord,vec2(0.5));\n            float strength = 1.0 - (distanceToCenter * 2.0);\n            if(vOpacity <= 0.0){\n              gl_FragColor = vec4(vColor, 0.0);\n            }else{\n              gl_FragColor = vec4(vColor, strength);\n            }\n        }"}),g=new W(m,w);r.viewer.scene.add(g)}}))})),t(this,"drawLocation",(function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=new x({transparent:!0,side:E});r.textLoader.load("propagate/img/136.png",(function(o){e.forEach((function(e){var i=e.to,a=e.size,s=Number(a)+2,c=t?a:s>16?16:s;if(i){var l=new h(i[0],i[1],0),u=l.x,d=l.y,f=l.z,p=new H(c,c);n.map=o;var v=new S(p,n);v.position.set(u,d,f+.02),r.viewer.scene.add(v)}})),r.render()}))})),t(this,"update",(function(){var e=r.clock.getElapsedTime();Object.keys(r.uniforms).forEach((function(t){r.uniforms[t].uTime.value=e})),r.render()})),n.useLoadingManager(),this.viewer=n,this.textLoader=new y,this.textLoader.setCrossOrigin(""),this.fileLoader=new u(n.loadmanager),this.fileLoader.setResponseType("json"),this.fontLoad=new B(n.loadmanager),this.clock=new m,this.uniforms={},this.drawOutline()}return a(e,[{key:"useCss3Render",value:function(e){var t=this,n=this.viewer.container.getBoundingClientRect(),r=n.width,o=n.height;this.labelRenderer=new Z,this.labelRenderer.setSize(r,o),this.labelRenderer.domElement.style.position="absolute",this.labelRenderer.domElement.style.top="0px",this.labelRenderer.domElement.id="tempId",document.body.appendChild(this.labelRenderer.domElement),this.controls=new w(this.viewer.camera,this.labelRenderer.domElement),this.controls.addEventListener("change",(function(){t.render();var n=new h;t.viewer.camera.getWorldPosition(n),t.createText(e,n.z)})),this.controls.enableRotate=!1,this.controls.minDistance=50,this.controls.maxDistance=200,this.controls.mouseButtons={LEFT:g.PAN,MIDDLE:g.DOLLY,RIGHT:g.ROTATE}}},{key:"startGame",value:function(){var e=this;this.viewer.scene.translateX(-10),this.viewer.scene.translateY(-15),this.loadSky(),this.drawLocation([{to:[117.045982,35.794391],size:35}],!0),this.fileLoader.load("propagate/data/map.json",(function(t){e.drawLines(t),e.drawFlyLine(t),e.createText(t),e.drawLocation(t),e.useCss3Render(t)}),(function(t){e.viewer.onProgress("propagate/data/map.json",t)}))}},{key:"render",value:function(){this.viewer.render()}},{key:"loadSky",value:function(){var e=this;this.textLoader.load("propagate/img/bg.png",(function(t){e.viewer.scene.background=t,e.render()}))}},{key:"createText",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:180;e.forEach((function(e){var r=e.to,o=e.name,i=e.size,a=e.isLine;if(o&&a&&r){var s=new h(r[0]-10,r[1]-15,0),c=q(t.viewer.camera,t.viewer.container,s);e.div||(e.div=document.createElement("div"),e.div.style.fontSize="曲阜"===o?"30px":"22px",e.div.style.color="#ffffff",e.div.style.position="absolute",e.div.style.fontFamily="HanaA",e.div.style.whiteSpace="nowrap"),e.div.style.transform="scale(".concat(100/n,")");var l="<span>".concat(o,"</span> ");i>1&&(l+='<span style="font-size:38px;vertical-align: sub;">'.concat(i,"</span> <span>所</span>")),e.div.innerHTML=l,t.viewer.container.appendChild(e.div),e.div.style.left="".concat(c.x-e.div.clientWidth/2,"px"),e.div.style.top="".concat(c.y-e.div.clientHeight/2,"px"),"曲阜"==o&&(e.div.style.left="".concat(c.x-e.div.clientWidth/2+15,"px"),e.div.style.top="".concat(c.y-e.div.clientHeight/2+(40+i/8-n/12),"px"))}}))}}]),e}();e("default",(function(){var e=r.exports.useRef(null);return r.exports.useEffect((function(){if(e.current){var t=new D(e.current);t.useOrbitControls(),t.listen();var n,r=new $(t);r.startGame();return function e(){r.update(),n=requestAnimationFrame(e)}(),function(){cancelIdleCallback(n)}}}),[]),i("div",{className:"w-100% h-100% relative",children:i("div",{className:"gunplay w-100% h-100%",ref:e})})}))}}}))}();