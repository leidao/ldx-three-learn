var Ce=Object.defineProperty;var Fe=(d,e,t)=>e in d?Ce(d,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):d[e]=t;var y=(d,e,t)=>(Fe(d,typeof e!="symbol"?e+"":e,t),t);import{r as z,A as Oe,_ as re,D as Q,j as D,a as H}from"./index.7c805709.js";import{L as ke,a as N,F as ye,C as _,S as De,P as Ue,D as Ge,M as V,b as U,V as we,s as $,c as ie,T as He,I as Be,Q as je,N as Ke,d as Te,e as Ve,f as qe,g as Xe,h as be,i as We,j as Ye,R as ee,k as _e,l as Qe,m as Je,n as Se,o as Ze,p as $e,B as ae,q as et,r as J,t as tt,u as st,v as nt,w as it,x as ot,y as rt,z as Me,A as at,E as Ee,G as ct,H as lt,J as dt,K as ut,O as q,U as ft,W as pt,X as ht,Y as gt,Z as ce,_ as mt,$ as xt,a0 as vt,a1 as yt,a2 as Ae,a3 as wt,a4 as Tt,a5 as le,a6 as bt,a7 as I,a8 as _t,a9 as de,aa as St,ab as Mt,ac as Et,ad as At,ae as Lt}from"./index.fe2f64e7.js";import{B as Rt}from"./button.b80560c5.js";var Pt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M409.4 128c-42.4 0-76.7 34.4-76.7 76.8 0 20.3 8.1 39.9 22.4 54.3a76.74 76.74 0 0054.3 22.5h76.7v-76.8c0-42.3-34.3-76.7-76.7-76.8zm0 204.8H204.7c-42.4 0-76.7 34.4-76.7 76.8s34.4 76.8 76.7 76.8h204.6c42.4 0 76.7-34.4 76.7-76.8.1-42.4-34.3-76.8-76.6-76.8zM614 486.4c42.4 0 76.8-34.4 76.7-76.8V204.8c0-42.4-34.3-76.8-76.7-76.8-42.4 0-76.7 34.4-76.7 76.8v204.8c0 42.5 34.3 76.8 76.7 76.8zm281.4-76.8c0-42.4-34.4-76.8-76.7-76.8S742 367.2 742 409.6v76.8h76.7c42.3 0 76.7-34.4 76.7-76.8zm-76.8 128H614c-42.4 0-76.7 34.4-76.7 76.8 0 20.3 8.1 39.9 22.4 54.3a76.74 76.74 0 0054.3 22.5h204.6c42.4 0 76.7-34.4 76.7-76.8.1-42.4-34.3-76.7-76.7-76.8zM614 742.4h-76.7v76.8c0 42.4 34.4 76.8 76.7 76.8 42.4 0 76.8-34.4 76.7-76.8.1-42.4-34.3-76.7-76.7-76.8zM409.4 537.6c-42.4 0-76.7 34.4-76.7 76.8v204.8c0 42.4 34.4 76.8 76.7 76.8 42.4 0 76.8-34.4 76.7-76.8V614.4c0-20.3-8.1-39.9-22.4-54.3a76.92 76.92 0 00-54.3-22.5zM128 614.4c0 20.3 8.1 39.9 22.4 54.3a76.74 76.74 0 0054.3 22.5c42.4 0 76.8-34.4 76.7-76.8v-76.8h-76.7c-42.3 0-76.7 34.4-76.7 76.8z"}}]},name:"slack",theme:"outlined"},zt=Pt,Le=function(e,t){return z.exports.createElement(Oe,re(re({},e),{},{ref:t,icon:zt}))};Le.displayName="SlackOutlined";var It=z.exports.forwardRef(Le);class Nt extends ke{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new kt(t)}),this.register(function(t){return new jt(t)}),this.register(function(t){return new Kt(t)}),this.register(function(t){return new Dt(t)}),this.register(function(t){return new Ut(t)}),this.register(function(t){return new Gt(t)}),this.register(function(t){return new Ht(t)}),this.register(function(t){return new Bt(t)}),this.register(function(t){return new Ft(t)}),this.register(function(t){return new Vt(t)})}load(e,t,n,s){const i=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=N.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),i.manager.itemError(e),i.manager.itemEnd(e)},r=new ye(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,function(c){try{i.parse(c,o,function(u){t(u),i.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let i;const o={},a={};if(typeof e=="string")i=e;else if(N.decodeText(new Uint8Array(e,0,4))===Re){try{o[m.KHR_BINARY_GLTF]=new qt(e)}catch(l){s&&s(l);return}i=o[m.KHR_BINARY_GLTF].content}else i=N.decodeText(new Uint8Array(e));const r=JSON.parse(i);if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new is(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const l=this.pluginCallbacks[u](c);a[l.name]=l,o[l.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const l=r.extensionsUsed[u],p=r.extensionsRequired||[];switch(l){case m.KHR_MATERIALS_UNLIT:o[l]=new Ot;break;case m.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:o[l]=new Yt;break;case m.KHR_DRACO_MESH_COMPRESSION:o[l]=new Xt(r,this.dracoLoader);break;case m.KHR_TEXTURE_TRANSFORM:o[l]=new Wt;break;case m.KHR_MESH_QUANTIZATION:o[l]=new Qt;break;default:p.indexOf(l)>=0&&a[l]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+l+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,i){n.parse(e,t,s,i)})}}function Ct(){let d={};return{get:function(e){return d[e]},add:function(e,t){d[e]=t},remove:function(e){delete d[e]},removeAll:function(){d={}}}}const m={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression"};class Ft{constructor(e){this.parser=e,this.name=m.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const i=t[n];i.extensions&&i.extensions[this.name]&&i.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,i.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const i=t.json,r=((i.extensions&&i.extensions[this.name]||{}).lights||[])[e];let c;const u=new _(16777215);r.color!==void 0&&u.fromArray(r.color);const l=r.range!==void 0?r.range:0;switch(r.type){case"directional":c=new Ge(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ue(u),c.distance=l;break;case"spot":c=new De(u),c.distance=l,r.spot=r.spot||{},r.spot.innerConeAngle=r.spot.innerConeAngle!==void 0?r.spot.innerConeAngle:0,r.spot.outerConeAngle=r.spot.outerConeAngle!==void 0?r.spot.outerConeAngle:Math.PI/4,c.angle=r.spot.outerConeAngle,c.penumbra=1-r.spot.innerConeAngle/r.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+r.type)}return c.position.set(0,0,0),c.decay=2,r.intensity!==void 0&&(c.intensity=r.intensity),c.name=t.createUniqueName(r.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}createNodeAttachment(e){const t=this,n=this.parser,i=n.json.nodes[e],a=(i.extensions&&i.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(r){return n._getNodeRef(t.cache,a,r)})}}class Ot{constructor(){this.name=m.KHR_MATERIALS_UNLIT}getMaterialType(){return V}extendParams(e,t,n){const s=[];e.color=new _(1,1,1),e.opacity=1;const i=t.pbrMetallicRoughness;if(i){if(Array.isArray(i.baseColorFactor)){const o=i.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}i.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",i.baseColorTexture))}return Promise.all(s)}}class kt{constructor(e){this.parser=e,this.name=m.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:U}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&i.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&i.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(i.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new we(a,a)}return Promise.all(i)}}class Dt{constructor(e){this.parser=e,this.name=m.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:U}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=[];t.sheenColor=new _(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&i.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture)),o.sheenRoughnessTexture!==void 0&&i.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(i)}}class Ut{constructor(e){this.parser=e,this.name=m.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:U}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&i.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(i)}}class Gt{constructor(e){this.parser=e,this.name=m.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:U}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&i.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new _(a[0],a[1],a[2]),Promise.all(i)}}class Ht{constructor(e){this.parser=e,this.name=m.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:U}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=s.extensions[this.name];return t.ior=i.ior!==void 0?i.ior:1.5,Promise.resolve()}}class Bt{constructor(e){this.parser=e,this.name=m.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:U}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const i=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&i.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new _(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&i.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture).then(function(r){r.encoding=$})),Promise.all(i)}}class jt{constructor(e){this.parser=e,this.name=m.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const i=s.extensions[this.name],o=n.images[i.source],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,o,a)}}class Kt{constructor(e){this.parser=e,this.name=m.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,i=s.textures[e];if(!i.extensions||!i.extensions[t])return null;const o=i.extensions[t],a=s.images[o.source];let r=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(r=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a,r);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Vt{constructor(e){this.name=m.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],i=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return Promise.all([i,o.ready]).then(function(a){const r=s.byteOffset||0,c=s.byteLength||0,u=s.count,l=s.byteStride,p=new ArrayBuffer(u*l),f=new Uint8Array(a[0],r,c);return o.decodeGltfBuffer(new Uint8Array(p),u,l,f,s.mode,s.filter),p})}else return null}}const Re="glTF",B=12,ue={JSON:1313821514,BIN:5130562};class qt{constructor(e){this.name=m.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,B);if(this.header={magic:N.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Re)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-B,s=new DataView(e,B);let i=0;for(;i<n;){const o=s.getUint32(i,!0);i+=4;const a=s.getUint32(i,!0);if(i+=4,a===ue.JSON){const r=new Uint8Array(e,B+i,o);this.content=N.decodeText(r)}else if(a===ue.BIN){const r=B+i;this.body=e.slice(r,r+o)}i+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Xt{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=m.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,i=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},r={},c={};for(const u in o){const l=se[u]||u.toLowerCase();a[l]=o[u]}for(const u in e.attributes){const l=se[u]||u.toLowerCase();if(o[u]!==void 0){const p=n.accessors[e.attributes[u]],f=X[p.componentType];c[l]=f,r[l]=p.normalized===!0}}return t.getDependency("bufferView",i).then(function(u){return new Promise(function(l){s.decodeDracoFile(u,function(p){for(const f in p.attributes){const v=p.attributes[f],x=r[f];x!==void 0&&(v.normalized=x)}l(p)},a,c)})})}}class Wt{constructor(){this.name=m.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class te extends ie{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),n=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),s=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	texelSpecular = sRGBToLinear( texelSpecular );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),i=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),o=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),a={specular:{value:new _().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=a,this.onBeforeCompile=function(r){for(const c in a)r.uniforms[c]=a[c];r.fragmentShader=r.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",n).replace("#include <roughnessmap_fragment>",s).replace("#include <metalnessmap_fragment>",i).replace("#include <lights_physical_fragment>",o)},Object.defineProperties(this,{specular:{get:function(){return a.specular.value},set:function(r){a.specular.value=r}},specularMap:{get:function(){return a.specularMap.value},set:function(r){a.specularMap.value=r,r?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return a.glossiness.value},set:function(r){a.glossiness.value=r}},glossinessMap:{get:function(){return a.glossinessMap.value},set:function(r){a.glossinessMap.value=r,r?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class Yt{constructor(){this.name=m.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity","refractionRatio"]}getMaterialType(){return te}extendParams(e,t,n){const s=t.extensions[this.name];e.color=new _(1,1,1),e.opacity=1;const i=[];if(Array.isArray(s.diffuseFactor)){const o=s.diffuseFactor;e.color.fromArray(o),e.opacity=o[3]}if(s.diffuseTexture!==void 0&&i.push(n.assignTexture(e,"map",s.diffuseTexture)),e.emissive=new _(0,0,0),e.glossiness=s.glossinessFactor!==void 0?s.glossinessFactor:1,e.specular=new _(1,1,1),Array.isArray(s.specularFactor)&&e.specular.fromArray(s.specularFactor),s.specularGlossinessTexture!==void 0){const o=s.specularGlossinessTexture;i.push(n.assignTexture(e,"glossinessMap",o)),i.push(n.assignTexture(e,"specularMap",o))}return Promise.all(i)}createMaterial(e){const t=new te(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=1,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=He,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t.refractionRatio=.98,t}}class Qt{constructor(){this.name=m.KHR_MESH_QUANTIZATION}}class C extends Be{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,i=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[i+o];return t}}C.prototype.beforeStart_=C.prototype.copySampleValue_;C.prototype.afterEnd_=C.prototype.copySampleValue_;C.prototype.interpolate_=function(d,e,t,n){const s=this.resultBuffer,i=this.sampleValues,o=this.valueSize,a=o*2,r=o*3,c=n-e,u=(t-e)/c,l=u*u,p=l*u,f=d*r,v=f-r,x=-2*p+3*l,g=p-l,h=1-x,T=g-l+u;for(let w=0;w!==o;w++){const G=i[v+w+o],R=i[v+w+a]*c,S=i[f+w+o],b=i[f+w]*c;s[w]=h*G+T*R+x*S+g*b}return s};const Jt=new je;class Zt extends C{interpolate_(e,t,n,s){const i=super.interpolate_(e,t,n,s);return Jt.fromArray(i).normalize().toArray(i),i}}const E={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},X={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},fe={9728:Ke,9729:Te,9984:Ve,9985:qe,9986:Xe,9987:be},pe={33071:We,33648:Ye,10497:ee},he={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},se={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},L={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},$t={CUBICSPLINE:void 0,LINEAR:_e,STEP:Qe},Z={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function es(d){return d.DefaultMaterial===void 0&&(d.DefaultMaterial=new ie({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Tt})),d.DefaultMaterial}function j(d,e,t){for(const n in t.extensions)d[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function P(d,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(d.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ts(d,e,t){let n=!1,s=!1;for(let a=0,r=e.length;a<r;a++){const c=e[a];if(c.POSITION!==void 0&&(n=!0),c.NORMAL!==void 0&&(s=!0),n&&s)break}if(!n&&!s)return Promise.resolve(d);const i=[],o=[];for(let a=0,r=e.length;a<r;a++){const c=e[a];if(n){const u=c.POSITION!==void 0?t.getDependency("accessor",c.POSITION):d.attributes.position;i.push(u)}if(s){const u=c.NORMAL!==void 0?t.getDependency("accessor",c.NORMAL):d.attributes.normal;o.push(u)}}return Promise.all([Promise.all(i),Promise.all(o)]).then(function(a){const r=a[0],c=a[1];return n&&(d.morphAttributes.position=r),s&&(d.morphAttributes.normal=c),d.morphTargetsRelative=!0,d})}function ss(d,e){if(d.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)d.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(d.morphTargetInfluences.length===t.length){d.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)d.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ns(d){const e=d.extensions&&d.extensions[m.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+ge(e.attributes):t=d.indices+":"+ge(d.attributes)+":"+d.mode,t}function ge(d){let e="";const t=Object.keys(d).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+d[t[n]]+";";return e}function ne(d){switch(d){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}class is{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ct,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.textureCache={},this.nodeNamesUsed={},typeof createImageBitmap!="undefined"&&/Firefox|Safari/.test(navigator.userAgent)===!1?this.textureLoader=new Je(this.options.manager):this.textureLoader=new Se(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ye(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,i=this.extensions;this.cache.removeAll(),this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};j(i,a,s),P(a,s),Promise.all(n._invokeAll(function(r){return r.afterRoot&&r.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,i=t.length;s<i;s++){const o=t[s].joints;for(let a=0,r=o.length;a<r;a++)e[o[a]].isBone=!0}for(let s=0,i=e.length;s<i;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),i=(o,a)=>{const r=this.associations.get(o);r!=null&&this.associations.set(a,r);for(const[c,u]of o.children.entries())i(u,a.children[c])};return i(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const i=e(t[s]);i&&n.push(i)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this.loadNode(t);break;case"mesh":s=this._invokeOne(function(i){return i.loadMesh&&i.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(i){return i.loadBufferView&&i.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(i){return i.loadMaterial&&i.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(i){return i.loadTexture&&i.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this.loadAnimation(t);break;case"camera":s=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(i,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[m.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(i,o){n.load(N.resolveURL(t.uri,s.path),i,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,i=t.byteOffset||0;return n.slice(i,i+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0)return Promise.resolve(null);const i=[];return s.bufferView!==void 0?i.push(this.getDependency("bufferView",s.bufferView)):i.push(null),s.sparse!==void 0&&(i.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),i.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(i).then(function(o){const a=o[0],r=he[s.type],c=X[s.componentType],u=c.BYTES_PER_ELEMENT,l=u*r,p=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,v=s.normalized===!0;let x,g;if(f&&f!==l){const h=Math.floor(p/f),T="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+h+":"+s.count;let w=t.cache.get(T);w||(x=new c(a,h*f,s.count*f/u),w=new Ze(x,f/u),t.cache.add(T,w)),g=new $e(w,r,p%f/u,v)}else a===null?x=new c(s.count*r):x=new c(a,p,s.count*r),g=new ae(x,r,v);if(s.sparse!==void 0){const h=he.SCALAR,T=X[s.sparse.indices.componentType],w=s.sparse.indices.byteOffset||0,G=s.sparse.values.byteOffset||0,R=new T(o[1],w,s.sparse.count*h),S=new c(o[2],G,s.sparse.count*r);a!==null&&(g=new ae(g.array.slice(),g.itemSize,g.normalized));for(let b=0,F=R.length;b<F;b++){const O=R[b];if(g.setX(O,S[b*r]),r>=2&&g.setY(O,S[b*r+1]),r>=3&&g.setZ(O,S[b*r+2]),r>=4&&g.setW(O,S[b*r+3]),r>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return g})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e],i=t.images[s.source];let o=this.textureLoader;if(i.uri){const a=n.manager.getHandler(i.uri);a!==null&&(o=a)}return this.loadTextureImage(e,i,o)}loadTextureImage(e,t,n){const s=this,i=this.json,o=this.options,a=i.textures[e],r=(t.uri||t.bufferView)+":"+a.sampler;if(this.textureCache[r])return this.textureCache[r];const c=self.URL||self.webkitURL;let u=t.uri||"",l=!1;if(t.bufferView!==void 0)u=s.getDependency("bufferView",t.bufferView).then(function(f){l=!0;const v=new Blob([f],{type:t.mimeType});return u=c.createObjectURL(v),u});else if(t.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const p=Promise.resolve(u).then(function(f){return new Promise(function(v,x){let g=v;n.isImageBitmapLoader===!0&&(g=function(h){const T=new le(h);T.needsUpdate=!0,v(T)}),n.load(N.resolveURL(f,o.path),g,void 0,x)})}).then(function(f){l===!0&&c.revokeObjectURL(u),f.flipY=!1,a.name&&(f.name=a.name);const x=(i.samplers||{})[a.sampler]||{};return f.magFilter=fe[x.magFilter]||Te,f.minFilter=fe[x.minFilter]||be,f.wrapS=pe[x.wrapS]||ee,f.wrapT=pe[x.wrapT]||ee,s.associations.set(f,{textures:e}),f}).catch(function(){return console.error("THREE.GLTFLoader: Couldn't load texture",u),null});return this.textureCache[r]=p,p}assignTexture(e,t,n){const s=this;return this.getDependency("texture",n.index).then(function(i){if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),s.extensions[m.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[m.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const a=s.associations.get(i);i=s.extensions[m.KHR_TEXTURE_TRANSFORM].extendTexture(i,o),s.associations.set(i,a)}}return e[t]=i,i})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,i=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let r=this.cache.get(a);r||(r=new et,J.prototype.copy.call(r,n),r.color.copy(n.color),r.map=n.map,r.sizeAttenuation=!1,this.cache.add(a,r)),n=r}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let r=this.cache.get(a);r||(r=new tt,J.prototype.copy.call(r,n),r.color.copy(n.color),this.cache.add(a,r)),n=r}if(s||i||o){let a="ClonedMaterial:"+n.uuid+":";n.isGLTFSpecularGlossinessMaterial&&(a+="specular-glossiness:"),s&&(a+="derivative-tangents:"),i&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let r=this.cache.get(a);r||(r=n.clone(),i&&(r.vertexColors=!0),o&&(r.flatShading=!0),s&&(r.normalScale&&(r.normalScale.y*=-1),r.clearcoatNormalScale&&(r.clearcoatNormalScale.y*=-1)),this.cache.add(a,r),this.associations.set(r,this.associations.get(n))),n=r}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return ie}loadMaterial(e){const t=this,n=this.json,s=this.extensions,i=n.materials[e];let o;const a={},r=i.extensions||{},c=[];if(r[m.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const l=s[m.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];o=l.getMaterialType(),c.push(l.extendParams(a,i,t))}else if(r[m.KHR_MATERIALS_UNLIT]){const l=s[m.KHR_MATERIALS_UNLIT];o=l.getMaterialType(),c.push(l.extendParams(a,i,t))}else{const l=i.pbrMetallicRoughness||{};if(a.color=new _(1,1,1),a.opacity=1,Array.isArray(l.baseColorFactor)){const p=l.baseColorFactor;a.color.fromArray(p),a.opacity=p[3]}l.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",l.baseColorTexture)),a.metalness=l.metallicFactor!==void 0?l.metallicFactor:1,a.roughness=l.roughnessFactor!==void 0?l.roughnessFactor:1,l.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",l.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",l.metallicRoughnessTexture))),o=this._invokeOne(function(p){return p.getMaterialType&&p.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(p){return p.extendMaterialParams&&p.extendMaterialParams(e,a)})))}i.doubleSided===!0&&(a.side=st);const u=i.alphaMode||Z.OPAQUE;if(u===Z.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.format=nt,a.transparent=!1,u===Z.MASK&&(a.alphaTest=i.alphaCutoff!==void 0?i.alphaCutoff:.5)),i.normalTexture!==void 0&&o!==V&&(c.push(t.assignTexture(a,"normalMap",i.normalTexture)),a.normalScale=new we(1,1),i.normalTexture.scale!==void 0)){const l=i.normalTexture.scale;a.normalScale.set(l,l)}return i.occlusionTexture!==void 0&&o!==V&&(c.push(t.assignTexture(a,"aoMap",i.occlusionTexture)),i.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=i.occlusionTexture.strength)),i.emissiveFactor!==void 0&&o!==V&&(a.emissive=new _().fromArray(i.emissiveFactor)),i.emissiveTexture!==void 0&&o!==V&&c.push(t.assignTexture(a,"emissiveMap",i.emissiveTexture)),Promise.all(c).then(function(){let l;return o===te?l=s[m.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a):l=new o(a),i.name&&(l.name=i.name),l.map&&(l.map.encoding=$),l.emissiveMap&&(l.emissiveMap.encoding=$),P(l,i),t.associations.set(l,{materials:e}),i.extensions&&j(s,l,i),l})}createUniqueName(e){const t=it.sanitizeNodeName(e||"");let n=t;for(let s=1;this.nodeNamesUsed[n];++s)n=t+"_"+s;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function i(a){return n[m.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(r){return me(r,a,t)})}const o=[];for(let a=0,r=e.length;a<r;a++){const c=e[a],u=ns(c),l=s[u];if(l)o.push(l.promise);else{let p;c.extensions&&c.extensions[m.KHR_DRACO_MESH_COMPRESSION]?p=i(c):p=me(new ot,c,t),s[u]={primitive:c,promise:p},o.push(p)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,i=n.meshes[e],o=i.primitives,a=[];for(let r=0,c=o.length;r<c;r++){const u=o[r].material===void 0?es(this.cache):this.getDependency("material",o[r].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(r){const c=r.slice(0,r.length-1),u=r[r.length-1],l=[];for(let f=0,v=u.length;f<v;f++){const x=u[f],g=o[f];let h;const T=c[f];if(g.mode===E.TRIANGLES||g.mode===E.TRIANGLE_STRIP||g.mode===E.TRIANGLE_FAN||g.mode===void 0)h=i.isSkinnedMesh===!0?new rt(x,T):new Me(x,T),h.isSkinnedMesh===!0&&!h.geometry.attributes.skinWeight.normalized&&h.normalizeSkinWeights(),g.mode===E.TRIANGLE_STRIP?h.geometry=xe(h.geometry,at):g.mode===E.TRIANGLE_FAN&&(h.geometry=xe(h.geometry,Ee));else if(g.mode===E.LINES)h=new ct(x,T);else if(g.mode===E.LINE_STRIP)h=new lt(x,T);else if(g.mode===E.LINE_LOOP)h=new dt(x,T);else if(g.mode===E.POINTS)h=new ut(x,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(h.geometry.morphAttributes).length>0&&ss(h,i),h.name=t.createUniqueName(i.name||"mesh_"+e),P(h,i),g.extensions&&j(s,h,g),t.assignFinalMaterial(h),l.push(h)}for(let f=0,v=l.length;f<v;f++)t.associations.set(l[f],{meshes:e,primitives:f});if(l.length===1)return l[0];const p=new q;t.associations.set(p,{meshes:e});for(let f=0,v=l.length;f<v;f++)p.add(l[f]);return p})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new ft(pt.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ht(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),P(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(n):this.getDependency("accessor",t.inverseBindMatrices).then(function(s){return n.inverseBindMatrices=s,n})}loadAnimation(e){const n=this.json.animations[e],s=[],i=[],o=[],a=[],r=[];for(let c=0,u=n.channels.length;c<u;c++){const l=n.channels[c],p=n.samplers[l.sampler],f=l.target,v=f.node!==void 0?f.node:f.id,x=n.parameters!==void 0?n.parameters[p.input]:p.input,g=n.parameters!==void 0?n.parameters[p.output]:p.output;s.push(this.getDependency("node",v)),i.push(this.getDependency("accessor",x)),o.push(this.getDependency("accessor",g)),a.push(p),r.push(f)}return Promise.all([Promise.all(s),Promise.all(i),Promise.all(o),Promise.all(a),Promise.all(r)]).then(function(c){const u=c[0],l=c[1],p=c[2],f=c[3],v=c[4],x=[];for(let h=0,T=u.length;h<T;h++){const w=u[h],G=l[h],R=p[h],S=f[h],b=v[h];if(w===void 0)continue;w.updateMatrix(),w.matrixAutoUpdate=!0;let F;switch(L[b.path]){case L.weights:F=mt;break;case L.rotation:F=ce;break;case L.position:case L.scale:default:F=gt;break}const O=w.name?w.name:w.uuid,ze=S.interpolation!==void 0?$t[S.interpolation]:_e,W=[];L[b.path]===L.weights?w.traverse(function(M){M.morphTargetInfluences&&W.push(M.name?M.name:M.uuid)}):W.push(O);let k=R.array;if(R.normalized){const M=ne(k.constructor),Y=new Float32Array(k.length);for(let A=0,oe=k.length;A<oe;A++)Y[A]=k[A]*M;k=Y}for(let M=0,Y=W.length;M<Y;M++){const A=new F(W[M]+"."+L[b.path],G.array,k,ze);S.interpolation==="CUBICSPLINE"&&(A.createInterpolant=function(Ie){const Ne=this instanceof ce?Zt:C;return new Ne(this.times,this.values,this.getValueSize()/3,Ie)},A.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),x.push(A)}}const g=n.name?n.name:"animation_"+e;return new xt(g,void 0,x)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(i){const o=n._getNodeRef(n.meshCache,s.mesh,i);return s.weights!==void 0&&o.traverse(function(a){if(!!a.isMesh)for(let r=0,c=s.weights.length;r<c;r++)a.morphTargetInfluences[r]=s.weights[r]}),o})}loadNode(e){const t=this.json,n=this.extensions,s=this,i=t.nodes[e],o=i.name?s.createUniqueName(i.name):"";return function(){const a=[],r=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return r&&a.push(r),i.camera!==void 0&&a.push(s.getDependency("camera",i.camera).then(function(c){return s._getNodeRef(s.cameraCache,i.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),Promise.all(a)}().then(function(a){let r;if(i.isBone===!0?r=new vt:a.length>1?r=new q:a.length===1?r=a[0]:r=new yt,r!==a[0])for(let c=0,u=a.length;c<u;c++)r.add(a[c]);if(i.name&&(r.userData.name=i.name,r.name=o),P(r,i),i.extensions&&j(n,r,i),i.matrix!==void 0){const c=new Ae;c.fromArray(i.matrix),r.applyMatrix4(c)}else i.translation!==void 0&&r.position.fromArray(i.translation),i.rotation!==void 0&&r.quaternion.fromArray(i.rotation),i.scale!==void 0&&r.scale.fromArray(i.scale);return s.associations.has(r)||s.associations.set(r,{}),s.associations.get(r).nodes=e,r})}loadScene(e){const t=this.json,n=this.extensions,s=this.json.scenes[e],i=this,o=new q;s.name&&(o.name=i.createUniqueName(s.name)),P(o,s),s.extensions&&j(n,o,s);const a=s.nodes||[],r=[];for(let c=0,u=a.length;c<u;c++)r.push(Pe(a[c],o,t,i));return Promise.all(r).then(function(){const c=u=>{const l=new Map;for(const[p,f]of i.associations)(p instanceof J||p instanceof le)&&l.set(p,f);return u.traverse(p=>{const f=i.associations.get(p);f!=null&&l.set(p,f)}),l};return i.associations=c(o),o})}}function Pe(d,e,t,n){const s=t.nodes[d];return n.getDependency("node",d).then(function(i){if(s.skin===void 0)return i;let o;return n.getDependency("skin",s.skin).then(function(a){o=a;const r=[];for(let c=0,u=o.joints.length;c<u;c++)r.push(n.getDependency("node",o.joints[c]));return Promise.all(r)}).then(function(a){return i.traverse(function(r){if(!r.isMesh)return;const c=[],u=[];for(let l=0,p=a.length;l<p;l++){const f=a[l];if(f){c.push(f);const v=new Ae;o.inverseBindMatrices!==void 0&&v.fromArray(o.inverseBindMatrices.array,l*16),u.push(v)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',o.joints[l])}r.bind(new wt(c,u),r.matrixWorld)}),i})}).then(function(i){e.add(i);const o=[];if(s.children){const a=s.children;for(let r=0,c=a.length;r<c;r++){const u=a[r];o.push(Pe(u,i,t,n))}}return Promise.all(o)})}function os(d,e,t){const n=e.attributes,s=new bt;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],r=a.min,c=a.max;if(r!==void 0&&c!==void 0){if(s.set(new I(r[0],r[1],r[2]),new I(c[0],c[1],c[2])),a.normalized){const u=ne(X[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const i=e.targets;if(i!==void 0){const a=new I,r=new I;for(let c=0,u=i.length;c<u;c++){const l=i[c];if(l.POSITION!==void 0){const p=t.json.accessors[l.POSITION],f=p.min,v=p.max;if(f!==void 0&&v!==void 0){if(r.setX(Math.max(Math.abs(f[0]),Math.abs(v[0]))),r.setY(Math.max(Math.abs(f[1]),Math.abs(v[1]))),r.setZ(Math.max(Math.abs(f[2]),Math.abs(v[2]))),p.normalized){const x=ne(X[p.componentType]);r.multiplyScalar(x)}a.max(r)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}d.boundingBox=s;const o=new _t;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,d.boundingSphere=o}function me(d,e,t){const n=e.attributes,s=[];function i(o,a){return t.getDependency("accessor",o).then(function(r){d.setAttribute(a,r)})}for(const o in n){const a=se[o]||o.toLowerCase();a in d.attributes||s.push(i(n[o],a))}if(e.indices!==void 0&&!d.index){const o=t.getDependency("accessor",e.indices).then(function(a){d.setIndex(a)});s.push(o)}return P(d,e),os(d,e,t),Promise.all(s).then(function(){return e.targets!==void 0?ts(d,e.targets,t):d})}function xe(d,e){let t=d.getIndex();if(t===null){const o=[],a=d.getAttribute("position");if(a!==void 0){for(let r=0;r<a.count;r++)o.push(r);d.setIndex(o),t=d.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),d}const n=t.count-2,s=[];if(e===Ee)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const i=d.clone();return i.setIndex(s),i}const rs=`
	//
	// Description : Array and textureless GLSL 2D/3D/4D simplex
	//               noise functions.
	//      Author : Ian McEwan, Ashima Arts.
	//  Maintainer : stegu
	//     Lastmod : 20110822 (ijm)
	//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
	//               Distributed under the MIT License. See LICENSE file.
	//               https://github.com/ashima/webgl-noise
	//               https://github.com/stegu/webgl-noise
	//

	vec3 mod289(vec3 x) {
	  return x - floor(x * (1.0 / 289.0)) * 289.0;
	}

	vec4 mod289(vec4 x) {
	  return x - floor(x * (1.0 / 289.0)) * 289.0;
	}

	vec4 permute(vec4 x) {
		 return mod289(((x*34.0)+1.0)*x);
	}

	// Permutation polynomial (ring size 289 = 17*17)
	vec3 permute(vec3 x) {
	  return mod289(((x*34.0)+1.0)*x);
	}

	float permute(float x){
		return x - floor(x * (1.0 / 289.0)) * 289.0;;
	}

	vec4 taylorInvSqrt(vec4 r){
	  return 1.79284291400159 - 0.85373472095314 * r;
	}

	vec2 fade(vec2 t) {
	  return t*t*t*(t*(t*6.0-15.0)+10.0);
	}

	vec3 fade(vec3 t) {
	  return t*t*t*(t*(t*6.0-15.0)+10.0);
	}

	// Hashed 2-D gradients with an extra rotation.
	// (The constant 0.0243902439 is 1/41)
	vec2 rgrad2(vec2 p, float rot) {
	#if 0
	// Map from a line to a diamond such that a shift maps to a rotation.
	  float u = permute(permute(p.x) + p.y) * 0.0243902439 + rot; // Rotate by shift
	  u = 4.0 * fract(u) - 2.0;
	  // (This vector could be normalized, exactly or approximately.)
	  return vec2(abs(u)-1.0, abs(abs(u+1.0)-2.0)-1.0);
	#else
	// For more isotropic gradients, sin/cos can be used instead.
	  float u = permute(permute(p.x) + p.y) * 0.0243902439 + rot; // Rotate by shift
	  u = fract(u) * 6.28318530718; // 2*pi
	  return vec2(cos(u), sin(u));
	#endif
	}

	float snoise(vec3 v){
	  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
	  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

	// First corner
	  vec3 i  = floor(v + dot(v, C.yyy) );
	  vec3 x0 =   v - i + dot(i, C.xxx) ;

	// Other corners
	  vec3 g = step(x0.yzx, x0.xyz);
	  vec3 l = 1.0 - g;
	  vec3 i1 = min( g.xyz, l.zxy );
	  vec3 i2 = max( g.xyz, l.zxy );

	  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
	  //   x1 = x0 - i1  + 1.0 * C.xxx;
	  //   x2 = x0 - i2  + 2.0 * C.xxx;
	  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
	  vec3 x1 = x0 - i1 + C.xxx;
	  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
	  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

	// Permutations
	  i = mod289(i);
	  vec4 p = permute( permute( permute(
				 i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
			   + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
			   + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

	// Gradients: 7x7 points over a square, mapped onto an octahedron.
	// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
	  float n_ = 0.142857142857; // 1.0/7.0
	  vec3  ns = n_ * D.wyz - D.xzx;

	  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

	  vec4 x_ = floor(j * ns.z);
	  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

	  vec4 x = x_ *ns.x + ns.yyyy;
	  vec4 y = y_ *ns.x + ns.yyyy;
	  vec4 h = 1.0 - abs(x) - abs(y);

	  vec4 b0 = vec4( x.xy, y.xy );
	  vec4 b1 = vec4( x.zw, y.zw );

	  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
	  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
	  vec4 s0 = floor(b0)*2.0 + 1.0;
	  vec4 s1 = floor(b1)*2.0 + 1.0;
	  vec4 sh = -step(h, vec4(0.0));

	  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
	  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

	  vec3 p0 = vec3(a0.xy,h.x);
	  vec3 p1 = vec3(a0.zw,h.y);
	  vec3 p2 = vec3(a1.xy,h.z);
	  vec3 p3 = vec3(a1.zw,h.w);

	//Normalise gradients
	  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
	  p0 *= norm.x;
	  p1 *= norm.y;
	  p2 *= norm.z;
	  p3 *= norm.w;

	// Mix final noise value
	  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
	  m = m * m;
	  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
									dot(p2,x2), dot(p3,x3) ) );
	  }

	// Classic Perlin noise
	float cnoise(vec2 P){
	  vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
	  vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
	  Pi = mod289(Pi); // To avoid truncation effects in permutation
	  vec4 ix = Pi.xzxz;
	  vec4 iy = Pi.yyww;
	  vec4 fx = Pf.xzxz;
	  vec4 fy = Pf.yyww;

	  vec4 i = permute(permute(ix) + iy);

	  vec4 gx = fract(i * (1.0 / 41.0)) * 2.0 - 1.0 ;
	  vec4 gy = abs(gx) - 0.5 ;
	  vec4 tx = floor(gx + 0.5);
	  gx = gx - tx;

	  vec2 g00 = vec2(gx.x,gy.x);
	  vec2 g10 = vec2(gx.y,gy.y);
	  vec2 g01 = vec2(gx.z,gy.z);
	  vec2 g11 = vec2(gx.w,gy.w);

	  vec4 norm = taylorInvSqrt(vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11)));
	  g00 *= norm.x;
	  g01 *= norm.y;
	  g10 *= norm.z;
	  g11 *= norm.w;

	  float n00 = dot(g00, vec2(fx.x, fy.x));
	  float n10 = dot(g10, vec2(fx.y, fy.y));
	  float n01 = dot(g01, vec2(fx.z, fy.z));
	  float n11 = dot(g11, vec2(fx.w, fy.w));

	  vec2 fade_xy = fade(Pf.xy);
	  vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
	  float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
	  return 2.3 * n_xy;
	}

	// Classic Perlin noise, periodic variant
	float pnoise(vec2 P, vec2 rep){
	  vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
	  vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
	  Pi = mod(Pi, rep.xyxy); // To create noise with explicit period
	  Pi = mod289(Pi);        // To avoid truncation effects in permutation
	  vec4 ix = Pi.xzxz;
	  vec4 iy = Pi.yyww;
	  vec4 fx = Pf.xzxz;
	  vec4 fy = Pf.yyww;

	  vec4 i = permute(permute(ix) + iy);

	  vec4 gx = fract(i * (1.0 / 41.0)) * 2.0 - 1.0 ;
	  vec4 gy = abs(gx) - 0.5 ;
	  vec4 tx = floor(gx + 0.5);
	  gx = gx - tx;

	  vec2 g00 = vec2(gx.x,gy.x);
	  vec2 g10 = vec2(gx.y,gy.y);
	  vec2 g01 = vec2(gx.z,gy.z);
	  vec2 g11 = vec2(gx.w,gy.w);

	  vec4 norm = taylorInvSqrt(vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11)));
	  g00 *= norm.x;
	  g01 *= norm.y;
	  g10 *= norm.z;
	  g11 *= norm.w;

	  float n00 = dot(g00, vec2(fx.x, fy.x));
	  float n10 = dot(g10, vec2(fx.y, fy.y));
	  float n01 = dot(g01, vec2(fx.z, fy.z));
	  float n11 = dot(g11, vec2(fx.w, fy.w));

	  vec2 fade_xy = fade(Pf.xy);
	  vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
	  float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
	  return 2.3 * n_xy;
	}
	// Classic Perlin noise
	float cnoise(vec3 P)
	{
	  vec3 Pi0 = floor(P); // Integer part for indexing
	  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
	  Pi0 = mod289(Pi0);
	  Pi1 = mod289(Pi1);
	  vec3 Pf0 = fract(P); // Fractional part for interpolation
	  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
	  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
	  vec4 iy = vec4(Pi0.yy, Pi1.yy);
	  vec4 iz0 = Pi0.zzzz;
	  vec4 iz1 = Pi1.zzzz;

	  vec4 ixy = permute(permute(ix) + iy);
	  vec4 ixy0 = permute(ixy + iz0);
	  vec4 ixy1 = permute(ixy + iz1);

	  vec4 gx0 = ixy0 * (1.0 / 7.0);
	  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
	  gx0 = fract(gx0);
	  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
	  vec4 sz0 = step(gz0, vec4(0.0));
	  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
	  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

	  vec4 gx1 = ixy1 * (1.0 / 7.0);
	  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
	  gx1 = fract(gx1);
	  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
	  vec4 sz1 = step(gz1, vec4(0.0));
	  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
	  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

	  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
	  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
	  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
	  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
	  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
	  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
	  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
	  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

	  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
	  g000 *= norm0.x;
	  g010 *= norm0.y;
	  g100 *= norm0.z;
	  g110 *= norm0.w;
	  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
	  g001 *= norm1.x;
	  g011 *= norm1.y;
	  g101 *= norm1.z;
	  g111 *= norm1.w;

	  float n000 = dot(g000, Pf0);
	  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
	  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
	  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
	  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
	  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
	  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
	  float n111 = dot(g111, Pf1);

	  vec3 fade_xyz = fade(Pf0);
	  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
	  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
	  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
	  return 2.2 * n_xyz;
	}

	// Classic Perlin noise, periodic variant
	float pnoise(vec3 P, vec3 rep)
	{
	  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
	  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
	  Pi0 = mod289(Pi0);
	  Pi1 = mod289(Pi1);
	  vec3 Pf0 = fract(P); // Fractional part for interpolation
	  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
	  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
	  vec4 iy = vec4(Pi0.yy, Pi1.yy);
	  vec4 iz0 = Pi0.zzzz;
	  vec4 iz1 = Pi1.zzzz;

	  vec4 ixy = permute(permute(ix) + iy);
	  vec4 ixy0 = permute(ixy + iz0);
	  vec4 ixy1 = permute(ixy + iz1);

	  vec4 gx0 = ixy0 * (1.0 / 7.0);
	  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
	  gx0 = fract(gx0);
	  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
	  vec4 sz0 = step(gz0, vec4(0.0));
	  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
	  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

	  vec4 gx1 = ixy1 * (1.0 / 7.0);
	  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
	  gx1 = fract(gx1);
	  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
	  vec4 sz1 = step(gz1, vec4(0.0));
	  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
	  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

	  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
	  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
	  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
	  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
	  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
	  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
	  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
	  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

	  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
	  g000 *= norm0.x;
	  g010 *= norm0.y;
	  g100 *= norm0.z;
	  g110 *= norm0.w;
	  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
	  g001 *= norm1.x;
	  g011 *= norm1.y;
	  g101 *= norm1.z;
	  g111 *= norm1.w;

	  float n000 = dot(g000, Pf0);
	  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
	  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
	  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
	  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
	  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
	  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
	  float n111 = dot(g111, Pf1);

	  vec3 fade_xyz = fade(Pf0);
	  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
	  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
	  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
	  return 2.2 * n_xyz;
	}

	float turbulence( vec3 p ) {
	  float w = 100.0;
	  float t = -.5;

	  for (float f = 1.0 ; f <= 10.0 ; f++ ){
		float power = pow( 2.0, f );
		t += abs( pnoise( vec3( power * p ), vec3( 10.0, 10.0, 10.0 ) ) / power );
	  }

	  return t;
	}

	float turbulence3( vec3 p ) {
	  float w = 100.0;
	  float t = -.5;

	  for (float f = 1.0 ; f <= 3.0 ; f++ ){
		float power = pow( 2.0, f );
		t += abs( pnoise( vec3( power * p ), vec3( 3.0, 3.0, 3.0 ) ) / power );
	  }

	  return t;
	}

	float turbulence6( vec3 p ) {
	  float w = 100.0;
	  float t = -.5;

	  for (float f = 1.0 ; f <= 6.0 ; f++ ){
		float power = pow( 2.0, f );
		t += abs( pnoise( vec3( power * p ), vec3( 6.0, 6.0, 6.0 ) ) / power );
	  }

	  return t;
	}

	//
	// 2-D tiling simplex noise with rotating gradients and analytical derivative.
	// The first component of the 3-element return vector is the noise value,
	// and the second and third components are the x and y partial derivatives.
	//
	vec3 psrdnoise(vec2 pos, vec2 per, float rot) {
	  // Hack: offset y slightly to hide some rare artifacts
	  pos.y += 0.01;
	  // Skew to hexagonal grid
	  vec2 uv = vec2(pos.x + pos.y*0.5, pos.y);

	  vec2 i0 = floor(uv);
	  vec2 f0 = fract(uv);
	  // Traversal order
	  vec2 i1 = (f0.x > f0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);

	  // Unskewed grid points in (x,y) space
	  vec2 p0 = vec2(i0.x - i0.y * 0.5, i0.y);
	  vec2 p1 = vec2(p0.x + i1.x - i1.y * 0.5, p0.y + i1.y);
	  vec2 p2 = vec2(p0.x + 0.5, p0.y + 1.0);

	  // Integer grid point indices in (u,v) space
	  i1 = i0 + i1;
	  vec2 i2 = i0 + vec2(1.0, 1.0);

	  // Vectors in unskewed (x,y) coordinates from
	  // each of the simplex corners to the evaluation point
	  vec2 d0 = pos - p0;
	  vec2 d1 = pos - p1;
	  vec2 d2 = pos - p2;

	  // Wrap i0, i1 and i2 to the desired period before gradient hashing:
	  // wrap points in (x,y), map to (u,v)
	  vec3 xw = mod(vec3(p0.x, p1.x, p2.x), per.x);
	  vec3 yw = mod(vec3(p0.y, p1.y, p2.y), per.y);
	  vec3 iuw = xw + 0.5 * yw;
	  vec3 ivw = yw;

	  // Create gradients from indices
	  vec2 g0 = rgrad2(vec2(iuw.x, ivw.x), rot);
	  vec2 g1 = rgrad2(vec2(iuw.y, ivw.y), rot);
	  vec2 g2 = rgrad2(vec2(iuw.z, ivw.z), rot);

	  // Gradients dot vectors to corresponding corners
	  // (The derivatives of this are simply the gradients)
	  vec3 w = vec3(dot(g0, d0), dot(g1, d1), dot(g2, d2));

	  // Radial weights from corners
	  // 0.8 is the square of 2/sqrt(5), the distance from
	  // a grid point to the nearest simplex boundary
	  vec3 t = 0.8 - vec3(dot(d0, d0), dot(d1, d1), dot(d2, d2));

	  // Partial derivatives for analytical gradient computation
	  vec3 dtdx = -2.0 * vec3(d0.x, d1.x, d2.x);
	  vec3 dtdy = -2.0 * vec3(d0.y, d1.y, d2.y);

	  // Set influence of each surflet to zero outside radius sqrt(0.8)
	  if (t.x < 0.0) {
		dtdx.x = 0.0;
		dtdy.x = 0.0;
		t.x = 0.0;
	  }
	  if (t.y < 0.0) {
		dtdx.y = 0.0;
		dtdy.y = 0.0;
		t.y = 0.0;
	  }
	  if (t.z < 0.0) {
		dtdx.z = 0.0;
		dtdy.z = 0.0;
		t.z = 0.0;
	  }

	  // Fourth power of t (and third power for derivative)
	  vec3 t2 = t * t;
	  vec3 t4 = t2 * t2;
	  vec3 t3 = t2 * t;

	  // Final noise value is:
	  // sum of ((radial weights) times (gradient dot vector from corner))
	  float n = dot(t4, w);

	  // Final analytical derivative (gradient of a sum of scalar products)
	  vec2 dt0 = vec2(dtdx.x, dtdy.x) * 4.0 * t3.x;
	  vec2 dn0 = t4.x * g0 + dt0 * w.x;
	  vec2 dt1 = vec2(dtdx.y, dtdy.y) * 4.0 * t3.y;
	  vec2 dn1 = t4.y * g1 + dt1 * w.y;
	  vec2 dt2 = vec2(dtdx.z, dtdy.z) * 4.0 * t3.z;
	  vec2 dn2 = t4.z * g2 + dt2 * w.z;

	  return 11.0*vec3(n, dn0 + dn1 + dn2);
	}

	//
	// 2-D tiling simplex noise with fixed gradients
	// and analytical derivative.
	// This function is implemented as a wrapper to "psrdnoise",
	// at the minimal cost of three extra additions.
	//
	vec3 psdnoise(vec2 pos, vec2 per) {
	  return psrdnoise(pos, per, 0.0);
	}

	//
	// 2-D tiling simplex noise with rotating gradients,
	// but without the analytical derivative.
	//
	float psrnoise(vec2 pos, vec2 per, float rot) {
	  // Offset y slightly to hide some rare artifacts
	  pos.y += 0.001;
	  // Skew to hexagonal grid
	  vec2 uv = vec2(pos.x + pos.y*0.5, pos.y);

	  vec2 i0 = floor(uv);
	  vec2 f0 = fract(uv);
	  // Traversal order
	  vec2 i1 = (f0.x > f0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);

	  // Unskewed grid points in (x,y) space
	  vec2 p0 = vec2(i0.x - i0.y * 0.5, i0.y);
	  vec2 p1 = vec2(p0.x + i1.x - i1.y * 0.5, p0.y + i1.y);
	  vec2 p2 = vec2(p0.x + 0.5, p0.y + 1.0);

	  // Integer grid point indices in (u,v) space
	  i1 = i0 + i1;
	  vec2 i2 = i0 + vec2(1.0, 1.0);

	  // Vectors in unskewed (x,y) coordinates from
	  // each of the simplex corners to the evaluation point
	  vec2 d0 = pos - p0;
	  vec2 d1 = pos - p1;
	  vec2 d2 = pos - p2;

	  // Wrap i0, i1 and i2 to the desired period before gradient hashing:
	  // wrap points in (x,y), map to (u,v)
	  vec3 xw = mod(vec3(p0.x, p1.x, p2.x), per.x);
	  vec3 yw = mod(vec3(p0.y, p1.y, p2.y), per.y);
	  vec3 iuw = xw + 0.5 * yw;
	  vec3 ivw = yw;

	  // Create gradients from indices
	  vec2 g0 = rgrad2(vec2(iuw.x, ivw.x), rot);
	  vec2 g1 = rgrad2(vec2(iuw.y, ivw.y), rot);
	  vec2 g2 = rgrad2(vec2(iuw.z, ivw.z), rot);

	  // Gradients dot vectors to corresponding corners
	  // (The derivatives of this are simply the gradients)
	  vec3 w = vec3(dot(g0, d0), dot(g1, d1), dot(g2, d2));

	  // Radial weights from corners
	  // 0.8 is the square of 2/sqrt(5), the distance from
	  // a grid point to the nearest simplex boundary
	  vec3 t = 0.8 - vec3(dot(d0, d0), dot(d1, d1), dot(d2, d2));

	  // Set influence of each surflet to zero outside radius sqrt(0.8)
	  t = max(t, 0.0);

	  // Fourth power of t
	  vec3 t2 = t * t;
	  vec3 t4 = t2 * t2;

	  // Final noise value is:
	  // sum of ((radial weights) times (gradient dot vector from corner))
	  float n = dot(t4, w);

	  // Rescale to cover the range [-1,1] reasonably well
	  return 11.0*n;
	}

	//
	// 2-D tiling simplex noise with fixed gradients,
	// without the analytical derivative.
	// This function is implemented as a wrapper to "psrnoise",
	// at the minimal cost of three extra additions.
	//
	float psnoise(vec2 pos, vec2 per) {
	  return psrnoise(pos, per, 0.0);
	}

	//
	// 2-D non-tiling simplex noise with rotating gradients and analytical derivative.
	// The first component of the 3-element return vector is the noise value,
	// and the second and third components are the x and y partial derivatives.
	//
	vec3 srdnoise(vec2 pos, float rot) {
	  // Offset y slightly to hide some rare artifacts
	  pos.y += 0.001;
	  // Skew to hexagonal grid
	  vec2 uv = vec2(pos.x + pos.y*0.5, pos.y);

	  vec2 i0 = floor(uv);
	  vec2 f0 = fract(uv);
	  // Traversal order
	  vec2 i1 = (f0.x > f0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);

	  // Unskewed grid points in (x,y) space
	  vec2 p0 = vec2(i0.x - i0.y * 0.5, i0.y);
	  vec2 p1 = vec2(p0.x + i1.x - i1.y * 0.5, p0.y + i1.y);
	  vec2 p2 = vec2(p0.x + 0.5, p0.y + 1.0);

	  // Integer grid point indices in (u,v) space
	  i1 = i0 + i1;
	  vec2 i2 = i0 + vec2(1.0, 1.0);

	  // Vectors in unskewed (x,y) coordinates from
	  // each of the simplex corners to the evaluation point
	  vec2 d0 = pos - p0;
	  vec2 d1 = pos - p1;
	  vec2 d2 = pos - p2;

	  vec3 x = vec3(p0.x, p1.x, p2.x);
	  vec3 y = vec3(p0.y, p1.y, p2.y);
	  vec3 iuw = x + 0.5 * y;
	  vec3 ivw = y;

	  // Avoid precision issues in permutation
	  iuw = mod289(iuw);
	  ivw = mod289(ivw);

	  // Create gradients from indices
	  vec2 g0 = rgrad2(vec2(iuw.x, ivw.x), rot);
	  vec2 g1 = rgrad2(vec2(iuw.y, ivw.y), rot);
	  vec2 g2 = rgrad2(vec2(iuw.z, ivw.z), rot);

	  // Gradients dot vectors to corresponding corners
	  // (The derivatives of this are simply the gradients)
	  vec3 w = vec3(dot(g0, d0), dot(g1, d1), dot(g2, d2));

	  // Radial weights from corners
	  // 0.8 is the square of 2/sqrt(5), the distance from
	  // a grid point to the nearest simplex boundary
	  vec3 t = 0.8 - vec3(dot(d0, d0), dot(d1, d1), dot(d2, d2));

	  // Partial derivatives for analytical gradient computation
	  vec3 dtdx = -2.0 * vec3(d0.x, d1.x, d2.x);
	  vec3 dtdy = -2.0 * vec3(d0.y, d1.y, d2.y);

	  // Set influence of each surflet to zero outside radius sqrt(0.8)
	  if (t.x < 0.0) {
		dtdx.x = 0.0;
		dtdy.x = 0.0;
		t.x = 0.0;
	  }
	  if (t.y < 0.0) {
		dtdx.y = 0.0;
		dtdy.y = 0.0;
		t.y = 0.0;
	  }
	  if (t.z < 0.0) {
		dtdx.z = 0.0;
		dtdy.z = 0.0;
		t.z = 0.0;
	  }

	  // Fourth power of t (and third power for derivative)
	  vec3 t2 = t * t;
	  vec3 t4 = t2 * t2;
	  vec3 t3 = t2 * t;

	  // Final noise value is:
	  // sum of ((radial weights) times (gradient dot vector from corner))
	  float n = dot(t4, w);

	  // Final analytical derivative (gradient of a sum of scalar products)
	  vec2 dt0 = vec2(dtdx.x, dtdy.x) * 4.0 * t3.x;
	  vec2 dn0 = t4.x * g0 + dt0 * w.x;
	  vec2 dt1 = vec2(dtdx.y, dtdy.y) * 4.0 * t3.y;
	  vec2 dn1 = t4.y * g1 + dt1 * w.y;
	  vec2 dt2 = vec2(dtdx.z, dtdy.z) * 4.0 * t3.z;
	  vec2 dn2 = t4.z * g2 + dt2 * w.z;

	  return 11.0*vec3(n, dn0 + dn1 + dn2);
	}

	//
	// 2-D non-tiling simplex noise with fixed gradients and analytical derivative.
	// This function is implemented as a wrapper to "srdnoise",
	// at the minimal cost of three extra additions.
	//
	vec3 sdnoise(vec2 pos) {
	  return srdnoise(pos, 0.0);
	}

	//
	// 2-D non-tiling simplex noise with rotating gradients,
	// without the analytical derivative.
	//
	float srnoise(vec2 pos, float rot) {
	  // Offset y slightly to hide some rare artifacts
	  pos.y += 0.001;
	  // Skew to hexagonal grid
	  vec2 uv = vec2(pos.x + pos.y*0.5, pos.y);

	  vec2 i0 = floor(uv);
	  vec2 f0 = fract(uv);
	  // Traversal order
	  vec2 i1 = (f0.x > f0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);

	  // Unskewed grid points in (x,y) space
	  vec2 p0 = vec2(i0.x - i0.y * 0.5, i0.y);
	  vec2 p1 = vec2(p0.x + i1.x - i1.y * 0.5, p0.y + i1.y);
	  vec2 p2 = vec2(p0.x + 0.5, p0.y + 1.0);

	  // Integer grid point indices in (u,v) space
	  i1 = i0 + i1;
	  vec2 i2 = i0 + vec2(1.0, 1.0);

	  // Vectors in unskewed (x,y) coordinates from
	  // each of the simplex corners to the evaluation point
	  vec2 d0 = pos - p0;
	  vec2 d1 = pos - p1;
	  vec2 d2 = pos - p2;

	  // Wrap i0, i1 and i2 to the desired period before gradient hashing:
	  // wrap points in (x,y), map to (u,v)
	  vec3 x = vec3(p0.x, p1.x, p2.x);
	  vec3 y = vec3(p0.y, p1.y, p2.y);
	  vec3 iuw = x + 0.5 * y;
	  vec3 ivw = y;

	  // Avoid precision issues in permutation
	  iuw = mod289(iuw);
	  ivw = mod289(ivw);

	  // Create gradients from indices
	  vec2 g0 = rgrad2(vec2(iuw.x, ivw.x), rot);
	  vec2 g1 = rgrad2(vec2(iuw.y, ivw.y), rot);
	  vec2 g2 = rgrad2(vec2(iuw.z, ivw.z), rot);

	  // Gradients dot vectors to corresponding corners
	  // (The derivatives of this are simply the gradients)
	  vec3 w = vec3(dot(g0, d0), dot(g1, d1), dot(g2, d2));

	  // Radial weights from corners
	  // 0.8 is the square of 2/sqrt(5), the distance from
	  // a grid point to the nearest simplex boundary
	  vec3 t = 0.8 - vec3(dot(d0, d0), dot(d1, d1), dot(d2, d2));

	  // Set influence of each surflet to zero outside radius sqrt(0.8)
	  t = max(t, 0.0);

	  // Fourth power of t
	  vec3 t2 = t * t;
	  vec3 t4 = t2 * t2;

	  // Final noise value is:
	  // sum of ((radial weights) times (gradient dot vector from corner))
	  float n = dot(t4, w);

	  // Rescale to cover the range [-1,1] reasonably well
	  return 11.0*n;
	}

	//
	// 2-D non-tiling simplex noise with fixed gradients,
	// without the analytical derivative.
	// This function is implemented as a wrapper to "srnoise",
	// at the minimal cost of three extra additions.
	// Note: if this kind of noise is all you want, there are faster
	// GLSL implementations of non-tiling simplex noise out there.
	// This one is included mainly for completeness and compatibility
	// with the other functions in the file.
	//
	float snoise(vec2 pos) {
	  return srnoise(pos, 0.0);
	}

	float hash(float x, float y) {
		return fract(abs(sin(sin(123.321 + x) * (y + 321.123)) * 456.654));
	}

	float lerp(float a, float b, float t) {
		return a * (1.0 - t) + b * t;
	}

	float perlin(float x, float y){
		float col = 0.0;
		for (int i = 0; i < 8; i++)
		{
			float fx = floor(x);
			float fy = floor(y);
			float cx = ceil(x);
			float cy = ceil(y);
			float a = hash(fx, fy);
			float b = hash(fx, cy);
			float c = hash(cx, fy);
			float d = hash(cx, cy);
			col += lerp(lerp(a, b, fract(y)), lerp(c, d, fract(y)), fract(x));
			col /= 2.0;
			x /= 2.0;
			y /= 2.0;
		}
		return col;
	}

	float dperlin(float x, float y){
		float d = perlin(x, y) * 800.0;
		return perlin(x + d, y + d);
	}

	float ddperlin(float x, float y){
		float d = perlin(x, y) * 800.0;
		return dperlin(x + d, y + d);
	}
`,ve={vertexShader:`
    #include <noise>

    uniform float u_time;

    varying float noise;

    void main() {	
      float time = u_time;
      float displacement;
      float b;
      
      // add time to the noise parameters so it's animated
      noise = 10.0 *  -.10 * turbulence( .5 * normal + time );
      b = 5.0 * pnoise( 0.05 * position + vec3( 2.0 * time ), vec3( 100.0 ) );
      displacement = - 10. * noise + b;

      // move the position along the normal and transform it
      vec3 newPosition = position + normal * displacement;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
    }
  `,fragmentShader:`
    #define PI 3.141592653589
    #define PI2 6.28318530718

    uniform vec2 u_mouse;
    uniform vec2 u_resolution;
    uniform float u_time;
    uniform float u_opacity;
    uniform sampler2D u_tex;

    varying float noise;

    //	<https://www.shadertoy.com/view/4dS3Wd>
    //	By Morgan McGuire @morgan3d, http://graphicscodex.com

    //https://www.clicktorelease.com/blog/vertex-displacement-noise-3d-webgl-glsl-three-js/

    float random( vec3 scale, float seed ){
      return fract( sin( dot( gl_FragCoord.xyz + seed, scale ) ) * 43758.5453 + seed ) ;
    }

    void main() {

      // get a random offset
      float r = .01 * random( vec3( 12.9898, 78.233, 151.7182 ), 0.0 );
      // lookup vertically in the texture, using noise and offset
      // to get the right RGB colour
      vec2 t_pos = vec2( 0, 1.3 * noise + r );
      vec4 color = texture2D( u_tex, t_pos );

      gl_FragColor = vec4( color.rgb, u_opacity );
    }
  `};class as{constructor(e){y(this,"viewer");y(this,"gltfLoader");y(this,"textLoader");y(this,"plane");y(this,"bomb");y(this,"star");y(this,"obstacles");y(this,"obstacle");y(this,"clock1");y(this,"clock2");y(this,"spaceing",!1);y(this,"playing",!1);y(this,"event",{});y(this,"pos");y(this,"ball");y(this,"ballUniforms");y(this,"starNum",0);y(this,"lifeNum",5);y(this,"keydown",e=>{switch(e.keyCode){case 32:this.spaceing=!0;break}});y(this,"keyup",e=>{switch(e.keyCode){case 32:this.spaceing=!1;break}});y(this,"mousedown",e=>{});y(this,"mouseup",e=>{});this.event={keydown:Q.throttle(this.keydown,60),keyup:Q.throttle(this.keyup,60),mousedown:Q.throttle(this.mousedown,60),mouseup:Q.throttle(this.mouseup,60)},e.useLoadingManager(),this.viewer=e,this.clock1=new de,this.clock2=new de,this.gltfLoader=new Nt(e.loadmanager),this.textLoader=new Se(e.loadmanager),this.textLoader.setCrossOrigin(""),this.loadSky(),this.loadPlane(),this.loadObstacle(),this.listen(),this.initBall(),this.initMusic(),this.pos=new I,this.viewer.on("complete",()=>{this.obstacles=new q;for(let t=0;t<10;t++){const n=this.obstacle.clone();n.position.z+=150*t,n.position.y+=Math.sin(t)*40,this.obstacles.add(n)}this.viewer.scene.add(this.obstacles),this.render()})}render(){this.viewer.render()}loadSky(){return new St().setPath("skybox/\u6F2B\u5929\u5F69\u4E91/").load(["lf.jpg","rt.jpg","up.jpg","dn.jpg","fr.jpg","bk.jpg"],e=>{this.viewer.scene.background=e,this.render()})}initBall(){const e=new Mt(20,14);Et.noise=rs,this.ballUniforms={u_time:{value:0},u_mouse:{value:{x:0,y:0}},u_opacity:{value:.6},u_resolution:{value:{x:0,y:0}},u_tex:{value:this.textLoader.load("plane/img/explosion.png")}};const t=new At({vertexShader:ve.vertexShader,fragmentShader:ve.fragmentShader,uniforms:this.ballUniforms,transparent:!0,opacity:.6});this.ball=new Me(e,t),this.ball.name="ball"}initMusic(){this.viewer.music.loadMusic("gliss.mp3","plane/music/"),this.viewer.music.loadMusic("engine.mp3","plane/music/",!0,1),this.viewer.music.loadMusic("explosion.mp3","plane/music/")}loadPlane(){this.gltfLoader.setPath("plane/glb/"),this.gltfLoader.load("microplane.glb",e=>{this.plane=e.scene,this.plane.scale.set(10,10,10),this.plane.position.set(0,0,-100),this.viewer.scene.add(this.plane),this.viewer.camera.position.set(-180,0,-40),this.viewer.camera.lookAt(this.plane.position),this.render()},e=>{this.viewer.onProgress("microplane.glb",e)})}loadObstacle(){this.obstacle=new q,this.gltfLoader.setPath("plane/glb/"),this.gltfLoader.load("bomb.glb",e=>{this.bomb=e.scene,this.bomb.scale.set(10,10,10);const t=[90,45,-45,-90];for(let n=0;n<4;n++){const s=this.bomb.clone();s.position.y+=t[n],s.rotation.set(n%2?-Math.PI/2:-Math.PI,0,0),s.name="bomb",s.userData.isCollide=!1,this.obstacle.add(s)}},e=>{this.viewer.onProgress("bomb.glb",e)}),this.gltfLoader.load("star.glb",e=>{this.star=e.scene,this.star.scale.set(10,10,10);const t=this.star.clone();t.name="star",t.userData.isCollide=!1,this.obstacle.add(t)},e=>{this.viewer.onProgress("star.glb",e)})}update(){const e=this.clock1.getElapsedTime(),t=this.clock2.getElapsedTime();!this.plane||(this.playing?(this.spaceing?this.plane.position.y+=.8:this.plane.position.y-=1.4,this.plane.position.z+=.8,this.viewer.camera.position.z+=.8,this.viewer.camera.position.y=this.plane.position.y+Math.cos(e*1.5)*10,this.computedCollision(this.pos),this.ballUniforms.u_time.value=t,this.ballUniforms.u_opacity.value=Math.cos(t),this.plane.children.forEach(n=>{n.children.forEach(s=>{s.name==="propeller"&&s.rotation.set(0,0,Math.cos(e*80))})})):this.plane.position.y=Math.cos(e*1.5)*10,this.viewer.camera.lookAt(this.plane.position),this.plane.rotation.z=Math.sin(e*3)*.2,this.render())}computedCollision(e){this.plane.getWorldPosition(e);const{y:t,z:n}=e;this.obstacles.children.forEach(s=>{const i=new I;s.getWorldPosition(i);const o=i.z-n;o<14&&o>-24?s.children.forEach(a=>{const r=new I;a.getWorldPosition(r);const c=r.y-t;c<10&&c>-10&&!a.userData.isCollide&&(a.userData.isCollide=!0,a.name==="star"?(this.viewer.music.setPlay("gliss.mp3"),this.starNum++,this.viewer.emit("addStar",this.starNum)):(this.viewer.music.setPlay("explosion.mp3"),this.lifeNum--,this.viewer.emit("decLife",this.lifeNum),this.ball.position.set(r.x,r.y,r.z),this.viewer.scene.add(this.ball),this.clock2.start()))}):s.children.forEach(a=>{a.userData.isCollide&&(a.userData.isCollide=!1,a.name==="star"?this.viewer.music.setStop("gliss.mp3"):(this.viewer.music.setStop("explosion.mp3"),this.viewer.scene.remove(this.ball)))})})}listen(){document.addEventListener("keydown",this.event.keydown),document.addEventListener("keyup",this.event.keyup),document.addEventListener("mousedown",this.event.mousedown),document.addEventListener("mouseup",this.event.mouseup),document.addEventListener("touchstart",this.event.mousedown),document.addEventListener("touchend",this.event.mouseup)}destroy(){document.removeEventListener("keydown",this.event.keydown),document.removeEventListener("keyup",this.event.keyup),document.removeEventListener("mousedown",this.event.mousedown),document.removeEventListener("mouseup",this.event.mouseup),document.removeEventListener("touchstart",this.event.mousedown),document.removeEventListener("touchend",this.event.mouseup),this.viewer.destroy()}startGame(){this.playing=!0,this.viewer.music.setPlay("engine.mp3")}gameOver(){this.reset()}reset(){this.playing=!1,this.lifeNum=5,this.starNum=0,this.viewer.music.setStopAll(),this.plane.position.set(0,0,-100),this.viewer.camera.position.set(-180,0,-40)}}var cs="/ldx-three-learn/plane/img/plane-icon.png",ls="/ldx-three-learn/plane/img/star-icon.png";let K;const hs=()=>{const[d,e]=z.exports.useState(5),[t,n]=z.exports.useState(0),[s,i]=z.exports.useState(!1),o=z.exports.useRef(null);return z.exports.useEffect(()=>{if(!o.current)return;const r=new Lt(o.current);r.useOrbitControls(),r.controls.enableZoom=!1,r.listen(),r.on("addStar",l=>{n(l)}),r.on("decLife",l=>{e(l),l===0&&setTimeout(()=>{e(5),n(0),K.gameOver(),i(!1)},600)}),K=new as(r);let c;const u=()=>{K.update(),c=requestAnimationFrame(u)};return u(),()=>{cancelIdleCallback(c),K.destroy()}},[]),D("div",{className:"w-100% h-100% relative",children:H("div",{className:"gunplay w-100% h-100%",ref:o,children:[D("div",{className:"play absolute left-50% top-50% z-999 translate-x--50%",children:!s&&D(Rt,{size:"large",icon:D(It,{}),onClick:()=>{i(!0),K.startGame()},children:"Play"})}),H("div",{className:"life absolute left-20px top-10px",children:[D("img",{width:100,height:60,alt:"\u98DE\u673A",src:cs}),H("span",{className:"text-26px text-#fff",children:[d," "]})]}),H("div",{className:"star absolute right-20px top-10px",children:[H("span",{className:"text-26px text-#fff",children:[t," "]}),D("img",{width:100,height:70,src:ls,alt:"\u661F\u661F"})]})]})})};export{hs as default};
