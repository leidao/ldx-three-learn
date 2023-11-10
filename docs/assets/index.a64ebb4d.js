var _=Object.defineProperty;var k=(a,e,t)=>e in a?_(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var i=(a,e,t)=>(k(a,typeof e!="symbol"?e+"":e,t),t);import{r as c,A as S,d as h,i as y,j as n,b as v,B as C}from"./index.e5d57de0.js";import{C as w,T as L,V as m,G as z,a as E,I as T,S as M,b as D,M as F,c as I}from"./index.2265f9dd.js";import{G as N}from"./GLTFLoader.ca3f1301.js";var q={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M409.4 128c-42.4 0-76.7 34.4-76.7 76.8 0 20.3 8.1 39.9 22.4 54.3a76.74 76.74 0 0054.3 22.5h76.7v-76.8c0-42.3-34.3-76.7-76.7-76.8zm0 204.8H204.7c-42.4 0-76.7 34.4-76.7 76.8s34.4 76.8 76.7 76.8h204.6c42.4 0 76.7-34.4 76.7-76.8.1-42.4-34.3-76.8-76.6-76.8zM614 486.4c42.4 0 76.8-34.4 76.7-76.8V204.8c0-42.4-34.3-76.8-76.7-76.8-42.4 0-76.7 34.4-76.7 76.8v204.8c0 42.5 34.3 76.8 76.7 76.8zm281.4-76.8c0-42.4-34.4-76.8-76.7-76.8S742 367.2 742 409.6v76.8h76.7c42.3 0 76.7-34.4 76.7-76.8zm-76.8 128H614c-42.4 0-76.7 34.4-76.7 76.8 0 20.3 8.1 39.9 22.4 54.3a76.74 76.74 0 0054.3 22.5h204.6c42.4 0 76.7-34.4 76.7-76.8.1-42.4-34.3-76.7-76.7-76.8zM614 742.4h-76.7v76.8c0 42.4 34.4 76.8 76.7 76.8 42.4 0 76.8-34.4 76.7-76.8.1-42.4-34.3-76.7-76.7-76.8zM409.4 537.6c-42.4 0-76.7 34.4-76.7 76.8v204.8c0 42.4 34.4 76.8 76.7 76.8 42.4 0 76.8-34.4 76.7-76.8V614.4c0-20.3-8.1-39.9-22.4-54.3a76.92 76.92 0 00-54.3-22.5zM128 614.4c0 20.3 8.1 39.9 22.4 54.3a76.74 76.74 0 0054.3 22.5c42.4 0 76.8-34.4 76.7-76.8v-76.8h-76.7c-42.3 0-76.7 34.4-76.7 76.8z"}}]},name:"slack",theme:"outlined"},A=q,b=function(e,t){return c.exports.createElement(S,h(h({},e),{},{ref:t,icon:A}))};b.displayName="SlackOutlined";var j=c.exports.forwardRef(b);const G=`
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
`,P={vertexShader:`
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
  `};class O{constructor(e){i(this,"viewer");i(this,"gltfLoader");i(this,"textLoader");i(this,"plane");i(this,"bomb");i(this,"star");i(this,"obstacles");i(this,"obstacle");i(this,"clock1");i(this,"clock2");i(this,"spaceing",!1);i(this,"playing",!1);i(this,"event",{});i(this,"pos");i(this,"ball");i(this,"ballUniforms");i(this,"starNum",0);i(this,"lifeNum",5);i(this,"keydown",e=>{switch(e.keyCode){case 32:this.spaceing=!0,this.viewer.music.setVolume("engine.mp3",.5),this.viewer.music.setPlay("engine.mp3");break}});i(this,"keyup",e=>{switch(e.keyCode){case 32:this.spaceing=!1,this.viewer.music.setVolume("engine.mp3",.2);break}});i(this,"mousedown",e=>{});i(this,"mouseup",e=>{});this.event={keydown:y.throttle(this.keydown,60),keyup:y.throttle(this.keyup,60),mousedown:y.throttle(this.mousedown,60),mouseup:y.throttle(this.mouseup,60)},e.useLoadingManager(),this.viewer=e,this.clock1=new w,this.clock2=new w,this.gltfLoader=new N(e.loadmanager),this.textLoader=new L(e.loadmanager),this.textLoader.setCrossOrigin(""),this.loadSky(),this.loadPlane(),this.loadObstacle(),this.listen(),this.initBall(),this.initMusic(),this.pos=new m,this.viewer.on("load_complete",()=>{this.obstacles=new z;for(let t=0;t<10;t++){const o=this.obstacle.clone();o.position.z+=150*t,o.position.y+=Math.sin(t)*40,this.obstacles.add(o)}this.viewer.scene.add(this.obstacles),this.render()})}render(){this.viewer.render()}loadSky(){return new E().setPath("skybox/\u6F2B\u5929\u5F69\u4E91/").load(["lf.jpg","rt.jpg","up.jpg","dn.jpg","fr.jpg","bk.jpg"],e=>{this.viewer.scene.background=e,this.render()})}initBall(){const e=new T(20,14);M.noise=G,this.ballUniforms={u_time:{value:0},u_mouse:{value:{x:0,y:0}},u_opacity:{value:.6},u_resolution:{value:{x:0,y:0}},u_tex:{value:this.textLoader.load("plane/img/explosion.png")}};const t=new D({vertexShader:P.vertexShader,fragmentShader:P.fragmentShader,uniforms:this.ballUniforms,transparent:!0,opacity:.6});this.ball=new F(e,t),this.ball.name="ball"}initMusic(){this.viewer.music.loadMusic("gliss.mp3","plane/music/"),this.viewer.music.loadMusic("engine.mp3","plane/music/",!0,1),this.viewer.music.loadMusic("explosion.mp3","plane/music/")}loadPlane(){this.gltfLoader.setPath("plane/glb/"),this.gltfLoader.load("microplane.glb",e=>{this.plane=e.scene,this.plane.scale.set(10,10,10),this.plane.position.set(0,0,-100),this.viewer.scene.add(this.plane),this.viewer.camera.position.set(-180,0,-40),this.viewer.camera.lookAt(this.plane.position),this.render()},e=>{this.viewer.onProgress("microplane.glb",e)})}loadObstacle(){this.obstacle=new z,this.gltfLoader.setPath("plane/glb/"),this.gltfLoader.load("bomb.glb",e=>{this.bomb=e.scene,this.bomb.scale.set(10,10,10);const t=[90,45,-45,-90];for(let o=0;o<4;o++){const s=this.bomb.clone();s.position.y+=t[o],s.rotation.set(o%2?-Math.PI/2:-Math.PI,0,0),s.name="bomb",s.userData.isCollide=!1,this.obstacle.add(s)}},e=>{this.viewer.onProgress("bomb.glb",e)}),this.gltfLoader.load("star.glb",e=>{this.star=e.scene,this.star.scale.set(10,10,10);const t=this.star.clone();t.name="star",t.userData.isCollide=!1,this.obstacle.add(t)},e=>{this.viewer.onProgress("star.glb",e)})}update(){const e=this.clock1.getElapsedTime(),t=this.clock2.getElapsedTime();!this.plane||(this.playing?(this.spaceing?this.plane.position.y+=.8:this.plane.position.y-=1.4,this.plane.position.z+=.8,this.viewer.camera.position.z+=.8,this.viewer.camera.position.y=this.plane.position.y+Math.cos(e*1.5)*10,this.computedCollision(this.pos),this.ballUniforms.u_time.value=t,this.ballUniforms.u_opacity.value=Math.cos(t),this.plane.children.forEach(o=>{o.children.forEach(s=>{s.name==="propeller"&&s.rotation.set(0,0,this.spaceing?e*80:t*15)})})):this.plane.position.y=Math.cos(e*1.5)*10,this.viewer.camera.lookAt(this.plane.position),this.plane.rotation.z=Math.sin(e*3)*.2,this.render())}computedCollision(e){this.plane.getWorldPosition(e);const{y:t,z:o}=e;this.obstacles.children.forEach(s=>{const l=new m;s.getWorldPosition(l);const d=l.z-o;d<14&&d>-24&&s.children.forEach(x=>{const r=new m;x.getWorldPosition(r);const p=r.y-t;p<10&&p>-10&&!x.userData.isCollide&&(x.userData.isCollide=!0,x.name==="star"?(this.viewer.music.setPlay("gliss.mp3"),this.viewer.music.setLoop("gliss.mp3",!1),this.starNum++,this.viewer.emit("addStar",this.starNum)):(this.clock2.start(),this.viewer.music.setPlay("explosion.mp3"),this.viewer.music.setLoop("explosion.mp3",!1),this.lifeNum--,this.viewer.emit("decLife",this.lifeNum),this.ball.position.set(r.x,r.y,r.z),this.ball.visible=!0,this.viewer.scene.add(this.ball)))})})}listen(){document.addEventListener("keydown",this.event.keydown),document.addEventListener("keyup",this.event.keyup),document.addEventListener("mousedown",this.event.mousedown),document.addEventListener("mouseup",this.event.mouseup),document.addEventListener("touchstart",this.event.mousedown),document.addEventListener("touchend",this.event.mouseup)}destroy(){document.removeEventListener("keydown",this.event.keydown),document.removeEventListener("keyup",this.event.keyup),document.removeEventListener("mousedown",this.event.mousedown),document.removeEventListener("mouseup",this.event.mouseup),document.removeEventListener("touchstart",this.event.mousedown),document.removeEventListener("touchend",this.event.mouseup),this.viewer.destroy()}startGame(){this.playing=!0,this.viewer.music.setVolume("engine.mp3",.2),this.viewer.music.setPlay("engine.mp3")}gameOver(){this.reset()}reset(){this.playing=!1,this.lifeNum=5,this.starNum=0,this.viewer.music.setStopAll(),this.plane.position.set(0,0,-100),this.viewer.camera.position.set(-180,0,-40),this.viewer.scene.remove(this.ball),this.obstacles.children.forEach(e=>{e.children.forEach(t=>{t.userData.isCollide=!1})})}}var V="/ldx-three-learn/plane/img/plane-icon.png",R="/ldx-three-learn/plane/img/star-icon.png";let g;const $=()=>{const[a,e]=c.exports.useState(5),[t,o]=c.exports.useState(0),[s,l]=c.exports.useState(!1),d=c.exports.useRef(null);return c.exports.useEffect(()=>{if(!d.current)return;const r=new I(d.current);r.useOrbitControls(),r.controls.enableZoom=!1,r.listen(),r.on("addStar",f=>{o(f)}),r.on("decLife",f=>{e(f),f===0&&setTimeout(()=>{e(5),o(0),g.gameOver(),l(!1)},600)}),g=new O(r);let p;const u=()=>{g.update(),p=requestAnimationFrame(u)};return u(),()=>{cancelIdleCallback(p),g.destroy()}},[]),n("div",{className:"w-100% h-100% relative",children:v("div",{className:"gunplay w-100% h-100%",ref:d,children:[n("div",{className:"play absolute left-50% top-50% z-999 translate-x--50%",children:!s&&v("div",{className:"text-22px",children:[n("div",{className:"mb-14px",children:"\u6309\u4F4F\u7A7A\u683C\u952E\u4E0A\u5347 / \u677E\u5F00\u7A7A\u683C\u952E\u4E0B\u843D"}),n("div",{className:"flex justify-center",children:n(C,{size:"large",icon:n(j,{}),onClick:()=>{l(!0),g.startGame()},children:"Play"})})]})}),v("div",{className:"life absolute left-20px top-10px",children:[n("img",{width:100,height:60,alt:"\u98DE\u673A",src:V}),v("span",{className:"text-26px text-#fff",children:[a," "]})]}),v("div",{className:"star absolute right-20px top-10px",children:[v("span",{className:"text-26px text-#fff",children:[t," "]}),n("img",{width:100,height:70,src:R,alt:"\u661F\u661F"})]})]})})};export{$ as default};
