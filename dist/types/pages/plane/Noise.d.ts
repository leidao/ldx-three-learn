declare const noise = "\n\t//\n\t// Description : Array and textureless GLSL 2D/3D/4D simplex\n\t//               noise functions.\n\t//      Author : Ian McEwan, Ashima Arts.\n\t//  Maintainer : stegu\n\t//     Lastmod : 20110822 (ijm)\n\t//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n\t//               Distributed under the MIT License. See LICENSE file.\n\t//               https://github.com/ashima/webgl-noise\n\t//               https://github.com/stegu/webgl-noise\n\t//\n\n\tvec3 mod289(vec3 x) {\n\t  return x - floor(x * (1.0 / 289.0)) * 289.0;\n\t}\n\n\tvec4 mod289(vec4 x) {\n\t  return x - floor(x * (1.0 / 289.0)) * 289.0;\n\t}\n\n\tvec4 permute(vec4 x) {\n\t\t return mod289(((x*34.0)+1.0)*x);\n\t}\n\n\t// Permutation polynomial (ring size 289 = 17*17)\n\tvec3 permute(vec3 x) {\n\t  return mod289(((x*34.0)+1.0)*x);\n\t}\n\n\tfloat permute(float x){\n\t\treturn x - floor(x * (1.0 / 289.0)) * 289.0;;\n\t}\n\n\tvec4 taylorInvSqrt(vec4 r){\n\t  return 1.79284291400159 - 0.85373472095314 * r;\n\t}\n\n\tvec2 fade(vec2 t) {\n\t  return t*t*t*(t*(t*6.0-15.0)+10.0);\n\t}\n\n\tvec3 fade(vec3 t) {\n\t  return t*t*t*(t*(t*6.0-15.0)+10.0);\n\t}\n\n\t// Hashed 2-D gradients with an extra rotation.\n\t// (The constant 0.0243902439 is 1/41)\n\tvec2 rgrad2(vec2 p, float rot) {\n\t#if 0\n\t// Map from a line to a diamond such that a shift maps to a rotation.\n\t  float u = permute(permute(p.x) + p.y) * 0.0243902439 + rot; // Rotate by shift\n\t  u = 4.0 * fract(u) - 2.0;\n\t  // (This vector could be normalized, exactly or approximately.)\n\t  return vec2(abs(u)-1.0, abs(abs(u+1.0)-2.0)-1.0);\n\t#else\n\t// For more isotropic gradients, sin/cos can be used instead.\n\t  float u = permute(permute(p.x) + p.y) * 0.0243902439 + rot; // Rotate by shift\n\t  u = fract(u) * 6.28318530718; // 2*pi\n\t  return vec2(cos(u), sin(u));\n\t#endif\n\t}\n\n\tfloat snoise(vec3 v){\n\t  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n\t  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n\t// First corner\n\t  vec3 i  = floor(v + dot(v, C.yyy) );\n\t  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n\t// Other corners\n\t  vec3 g = step(x0.yzx, x0.xyz);\n\t  vec3 l = 1.0 - g;\n\t  vec3 i1 = min( g.xyz, l.zxy );\n\t  vec3 i2 = max( g.xyz, l.zxy );\n\n\t  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n\t  //   x1 = x0 - i1  + 1.0 * C.xxx;\n\t  //   x2 = x0 - i2  + 2.0 * C.xxx;\n\t  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n\t  vec3 x1 = x0 - i1 + C.xxx;\n\t  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n\t  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n\t// Permutations\n\t  i = mod289(i);\n\t  vec4 p = permute( permute( permute(\n\t\t\t\t i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n\t\t\t   + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n\t\t\t   + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n\t// Gradients: 7x7 points over a square, mapped onto an octahedron.\n\t// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n\t  float n_ = 0.142857142857; // 1.0/7.0\n\t  vec3  ns = n_ * D.wyz - D.xzx;\n\n\t  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n\t  vec4 x_ = floor(j * ns.z);\n\t  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n\t  vec4 x = x_ *ns.x + ns.yyyy;\n\t  vec4 y = y_ *ns.x + ns.yyyy;\n\t  vec4 h = 1.0 - abs(x) - abs(y);\n\n\t  vec4 b0 = vec4( x.xy, y.xy );\n\t  vec4 b1 = vec4( x.zw, y.zw );\n\n\t  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n\t  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n\t  vec4 s0 = floor(b0)*2.0 + 1.0;\n\t  vec4 s1 = floor(b1)*2.0 + 1.0;\n\t  vec4 sh = -step(h, vec4(0.0));\n\n\t  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n\t  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n\t  vec3 p0 = vec3(a0.xy,h.x);\n\t  vec3 p1 = vec3(a0.zw,h.y);\n\t  vec3 p2 = vec3(a1.xy,h.z);\n\t  vec3 p3 = vec3(a1.zw,h.w);\n\n\t//Normalise gradients\n\t  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n\t  p0 *= norm.x;\n\t  p1 *= norm.y;\n\t  p2 *= norm.z;\n\t  p3 *= norm.w;\n\n\t// Mix final noise value\n\t  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n\t  m = m * m;\n\t  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n\t\t\t\t\t\t\t\t\tdot(p2,x2), dot(p3,x3) ) );\n\t  }\n\n\t// Classic Perlin noise\n\tfloat cnoise(vec2 P){\n\t  vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);\n\t  vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);\n\t  Pi = mod289(Pi); // To avoid truncation effects in permutation\n\t  vec4 ix = Pi.xzxz;\n\t  vec4 iy = Pi.yyww;\n\t  vec4 fx = Pf.xzxz;\n\t  vec4 fy = Pf.yyww;\n\n\t  vec4 i = permute(permute(ix) + iy);\n\n\t  vec4 gx = fract(i * (1.0 / 41.0)) * 2.0 - 1.0 ;\n\t  vec4 gy = abs(gx) - 0.5 ;\n\t  vec4 tx = floor(gx + 0.5);\n\t  gx = gx - tx;\n\n\t  vec2 g00 = vec2(gx.x,gy.x);\n\t  vec2 g10 = vec2(gx.y,gy.y);\n\t  vec2 g01 = vec2(gx.z,gy.z);\n\t  vec2 g11 = vec2(gx.w,gy.w);\n\n\t  vec4 norm = taylorInvSqrt(vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11)));\n\t  g00 *= norm.x;\n\t  g01 *= norm.y;\n\t  g10 *= norm.z;\n\t  g11 *= norm.w;\n\n\t  float n00 = dot(g00, vec2(fx.x, fy.x));\n\t  float n10 = dot(g10, vec2(fx.y, fy.y));\n\t  float n01 = dot(g01, vec2(fx.z, fy.z));\n\t  float n11 = dot(g11, vec2(fx.w, fy.w));\n\n\t  vec2 fade_xy = fade(Pf.xy);\n\t  vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);\n\t  float n_xy = mix(n_x.x, n_x.y, fade_xy.y);\n\t  return 2.3 * n_xy;\n\t}\n\n\t// Classic Perlin noise, periodic variant\n\tfloat pnoise(vec2 P, vec2 rep){\n\t  vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);\n\t  vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);\n\t  Pi = mod(Pi, rep.xyxy); // To create noise with explicit period\n\t  Pi = mod289(Pi);        // To avoid truncation effects in permutation\n\t  vec4 ix = Pi.xzxz;\n\t  vec4 iy = Pi.yyww;\n\t  vec4 fx = Pf.xzxz;\n\t  vec4 fy = Pf.yyww;\n\n\t  vec4 i = permute(permute(ix) + iy);\n\n\t  vec4 gx = fract(i * (1.0 / 41.0)) * 2.0 - 1.0 ;\n\t  vec4 gy = abs(gx) - 0.5 ;\n\t  vec4 tx = floor(gx + 0.5);\n\t  gx = gx - tx;\n\n\t  vec2 g00 = vec2(gx.x,gy.x);\n\t  vec2 g10 = vec2(gx.y,gy.y);\n\t  vec2 g01 = vec2(gx.z,gy.z);\n\t  vec2 g11 = vec2(gx.w,gy.w);\n\n\t  vec4 norm = taylorInvSqrt(vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11)));\n\t  g00 *= norm.x;\n\t  g01 *= norm.y;\n\t  g10 *= norm.z;\n\t  g11 *= norm.w;\n\n\t  float n00 = dot(g00, vec2(fx.x, fy.x));\n\t  float n10 = dot(g10, vec2(fx.y, fy.y));\n\t  float n01 = dot(g01, vec2(fx.z, fy.z));\n\t  float n11 = dot(g11, vec2(fx.w, fy.w));\n\n\t  vec2 fade_xy = fade(Pf.xy);\n\t  vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);\n\t  float n_xy = mix(n_x.x, n_x.y, fade_xy.y);\n\t  return 2.3 * n_xy;\n\t}\n\t// Classic Perlin noise\n\tfloat cnoise(vec3 P)\n\t{\n\t  vec3 Pi0 = floor(P); // Integer part for indexing\n\t  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\n\t  Pi0 = mod289(Pi0);\n\t  Pi1 = mod289(Pi1);\n\t  vec3 Pf0 = fract(P); // Fractional part for interpolation\n\t  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n\t  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n\t  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n\t  vec4 iz0 = Pi0.zzzz;\n\t  vec4 iz1 = Pi1.zzzz;\n\n\t  vec4 ixy = permute(permute(ix) + iy);\n\t  vec4 ixy0 = permute(ixy + iz0);\n\t  vec4 ixy1 = permute(ixy + iz1);\n\n\t  vec4 gx0 = ixy0 * (1.0 / 7.0);\n\t  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n\t  gx0 = fract(gx0);\n\t  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n\t  vec4 sz0 = step(gz0, vec4(0.0));\n\t  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n\t  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n\t  vec4 gx1 = ixy1 * (1.0 / 7.0);\n\t  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n\t  gx1 = fract(gx1);\n\t  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n\t  vec4 sz1 = step(gz1, vec4(0.0));\n\t  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n\t  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n\t  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n\t  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n\t  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n\t  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n\t  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n\t  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n\t  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n\t  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n\t  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n\t  g000 *= norm0.x;\n\t  g010 *= norm0.y;\n\t  g100 *= norm0.z;\n\t  g110 *= norm0.w;\n\t  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n\t  g001 *= norm1.x;\n\t  g011 *= norm1.y;\n\t  g101 *= norm1.z;\n\t  g111 *= norm1.w;\n\n\t  float n000 = dot(g000, Pf0);\n\t  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n\t  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n\t  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n\t  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n\t  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n\t  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n\t  float n111 = dot(g111, Pf1);\n\n\t  vec3 fade_xyz = fade(Pf0);\n\t  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n\t  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n\t  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n\t  return 2.2 * n_xyz;\n\t}\n\n\t// Classic Perlin noise, periodic variant\n\tfloat pnoise(vec3 P, vec3 rep)\n\t{\n\t  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n\t  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n\t  Pi0 = mod289(Pi0);\n\t  Pi1 = mod289(Pi1);\n\t  vec3 Pf0 = fract(P); // Fractional part for interpolation\n\t  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n\t  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n\t  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n\t  vec4 iz0 = Pi0.zzzz;\n\t  vec4 iz1 = Pi1.zzzz;\n\n\t  vec4 ixy = permute(permute(ix) + iy);\n\t  vec4 ixy0 = permute(ixy + iz0);\n\t  vec4 ixy1 = permute(ixy + iz1);\n\n\t  vec4 gx0 = ixy0 * (1.0 / 7.0);\n\t  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n\t  gx0 = fract(gx0);\n\t  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n\t  vec4 sz0 = step(gz0, vec4(0.0));\n\t  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n\t  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n\t  vec4 gx1 = ixy1 * (1.0 / 7.0);\n\t  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n\t  gx1 = fract(gx1);\n\t  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n\t  vec4 sz1 = step(gz1, vec4(0.0));\n\t  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n\t  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n\t  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n\t  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n\t  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n\t  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n\t  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n\t  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n\t  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n\t  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n\t  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n\t  g000 *= norm0.x;\n\t  g010 *= norm0.y;\n\t  g100 *= norm0.z;\n\t  g110 *= norm0.w;\n\t  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n\t  g001 *= norm1.x;\n\t  g011 *= norm1.y;\n\t  g101 *= norm1.z;\n\t  g111 *= norm1.w;\n\n\t  float n000 = dot(g000, Pf0);\n\t  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n\t  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n\t  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n\t  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n\t  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n\t  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n\t  float n111 = dot(g111, Pf1);\n\n\t  vec3 fade_xyz = fade(Pf0);\n\t  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n\t  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n\t  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n\t  return 2.2 * n_xyz;\n\t}\n\n\tfloat turbulence( vec3 p ) {\n\t  float w = 100.0;\n\t  float t = -.5;\n\n\t  for (float f = 1.0 ; f <= 10.0 ; f++ ){\n\t\tfloat power = pow( 2.0, f );\n\t\tt += abs( pnoise( vec3( power * p ), vec3( 10.0, 10.0, 10.0 ) ) / power );\n\t  }\n\n\t  return t;\n\t}\n\n\tfloat turbulence3( vec3 p ) {\n\t  float w = 100.0;\n\t  float t = -.5;\n\n\t  for (float f = 1.0 ; f <= 3.0 ; f++ ){\n\t\tfloat power = pow( 2.0, f );\n\t\tt += abs( pnoise( vec3( power * p ), vec3( 3.0, 3.0, 3.0 ) ) / power );\n\t  }\n\n\t  return t;\n\t}\n\n\tfloat turbulence6( vec3 p ) {\n\t  float w = 100.0;\n\t  float t = -.5;\n\n\t  for (float f = 1.0 ; f <= 6.0 ; f++ ){\n\t\tfloat power = pow( 2.0, f );\n\t\tt += abs( pnoise( vec3( power * p ), vec3( 6.0, 6.0, 6.0 ) ) / power );\n\t  }\n\n\t  return t;\n\t}\n\n\t//\n\t// 2-D tiling simplex noise with rotating gradients and analytical derivative.\n\t// The first component of the 3-element return vector is the noise value,\n\t// and the second and third components are the x and y partial derivatives.\n\t//\n\tvec3 psrdnoise(vec2 pos, vec2 per, float rot) {\n\t  // Hack: offset y slightly to hide some rare artifacts\n\t  pos.y += 0.01;\n\t  // Skew to hexagonal grid\n\t  vec2 uv = vec2(pos.x + pos.y*0.5, pos.y);\n\n\t  vec2 i0 = floor(uv);\n\t  vec2 f0 = fract(uv);\n\t  // Traversal order\n\t  vec2 i1 = (f0.x > f0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n\n\t  // Unskewed grid points in (x,y) space\n\t  vec2 p0 = vec2(i0.x - i0.y * 0.5, i0.y);\n\t  vec2 p1 = vec2(p0.x + i1.x - i1.y * 0.5, p0.y + i1.y);\n\t  vec2 p2 = vec2(p0.x + 0.5, p0.y + 1.0);\n\n\t  // Integer grid point indices in (u,v) space\n\t  i1 = i0 + i1;\n\t  vec2 i2 = i0 + vec2(1.0, 1.0);\n\n\t  // Vectors in unskewed (x,y) coordinates from\n\t  // each of the simplex corners to the evaluation point\n\t  vec2 d0 = pos - p0;\n\t  vec2 d1 = pos - p1;\n\t  vec2 d2 = pos - p2;\n\n\t  // Wrap i0, i1 and i2 to the desired period before gradient hashing:\n\t  // wrap points in (x,y), map to (u,v)\n\t  vec3 xw = mod(vec3(p0.x, p1.x, p2.x), per.x);\n\t  vec3 yw = mod(vec3(p0.y, p1.y, p2.y), per.y);\n\t  vec3 iuw = xw + 0.5 * yw;\n\t  vec3 ivw = yw;\n\n\t  // Create gradients from indices\n\t  vec2 g0 = rgrad2(vec2(iuw.x, ivw.x), rot);\n\t  vec2 g1 = rgrad2(vec2(iuw.y, ivw.y), rot);\n\t  vec2 g2 = rgrad2(vec2(iuw.z, ivw.z), rot);\n\n\t  // Gradients dot vectors to corresponding corners\n\t  // (The derivatives of this are simply the gradients)\n\t  vec3 w = vec3(dot(g0, d0), dot(g1, d1), dot(g2, d2));\n\n\t  // Radial weights from corners\n\t  // 0.8 is the square of 2/sqrt(5), the distance from\n\t  // a grid point to the nearest simplex boundary\n\t  vec3 t = 0.8 - vec3(dot(d0, d0), dot(d1, d1), dot(d2, d2));\n\n\t  // Partial derivatives for analytical gradient computation\n\t  vec3 dtdx = -2.0 * vec3(d0.x, d1.x, d2.x);\n\t  vec3 dtdy = -2.0 * vec3(d0.y, d1.y, d2.y);\n\n\t  // Set influence of each surflet to zero outside radius sqrt(0.8)\n\t  if (t.x < 0.0) {\n\t\tdtdx.x = 0.0;\n\t\tdtdy.x = 0.0;\n\t\tt.x = 0.0;\n\t  }\n\t  if (t.y < 0.0) {\n\t\tdtdx.y = 0.0;\n\t\tdtdy.y = 0.0;\n\t\tt.y = 0.0;\n\t  }\n\t  if (t.z < 0.0) {\n\t\tdtdx.z = 0.0;\n\t\tdtdy.z = 0.0;\n\t\tt.z = 0.0;\n\t  }\n\n\t  // Fourth power of t (and third power for derivative)\n\t  vec3 t2 = t * t;\n\t  vec3 t4 = t2 * t2;\n\t  vec3 t3 = t2 * t;\n\n\t  // Final noise value is:\n\t  // sum of ((radial weights) times (gradient dot vector from corner))\n\t  float n = dot(t4, w);\n\n\t  // Final analytical derivative (gradient of a sum of scalar products)\n\t  vec2 dt0 = vec2(dtdx.x, dtdy.x) * 4.0 * t3.x;\n\t  vec2 dn0 = t4.x * g0 + dt0 * w.x;\n\t  vec2 dt1 = vec2(dtdx.y, dtdy.y) * 4.0 * t3.y;\n\t  vec2 dn1 = t4.y * g1 + dt1 * w.y;\n\t  vec2 dt2 = vec2(dtdx.z, dtdy.z) * 4.0 * t3.z;\n\t  vec2 dn2 = t4.z * g2 + dt2 * w.z;\n\n\t  return 11.0*vec3(n, dn0 + dn1 + dn2);\n\t}\n\n\t//\n\t// 2-D tiling simplex noise with fixed gradients\n\t// and analytical derivative.\n\t// This function is implemented as a wrapper to \"psrdnoise\",\n\t// at the minimal cost of three extra additions.\n\t//\n\tvec3 psdnoise(vec2 pos, vec2 per) {\n\t  return psrdnoise(pos, per, 0.0);\n\t}\n\n\t//\n\t// 2-D tiling simplex noise with rotating gradients,\n\t// but without the analytical derivative.\n\t//\n\tfloat psrnoise(vec2 pos, vec2 per, float rot) {\n\t  // Offset y slightly to hide some rare artifacts\n\t  pos.y += 0.001;\n\t  // Skew to hexagonal grid\n\t  vec2 uv = vec2(pos.x + pos.y*0.5, pos.y);\n\n\t  vec2 i0 = floor(uv);\n\t  vec2 f0 = fract(uv);\n\t  // Traversal order\n\t  vec2 i1 = (f0.x > f0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n\n\t  // Unskewed grid points in (x,y) space\n\t  vec2 p0 = vec2(i0.x - i0.y * 0.5, i0.y);\n\t  vec2 p1 = vec2(p0.x + i1.x - i1.y * 0.5, p0.y + i1.y);\n\t  vec2 p2 = vec2(p0.x + 0.5, p0.y + 1.0);\n\n\t  // Integer grid point indices in (u,v) space\n\t  i1 = i0 + i1;\n\t  vec2 i2 = i0 + vec2(1.0, 1.0);\n\n\t  // Vectors in unskewed (x,y) coordinates from\n\t  // each of the simplex corners to the evaluation point\n\t  vec2 d0 = pos - p0;\n\t  vec2 d1 = pos - p1;\n\t  vec2 d2 = pos - p2;\n\n\t  // Wrap i0, i1 and i2 to the desired period before gradient hashing:\n\t  // wrap points in (x,y), map to (u,v)\n\t  vec3 xw = mod(vec3(p0.x, p1.x, p2.x), per.x);\n\t  vec3 yw = mod(vec3(p0.y, p1.y, p2.y), per.y);\n\t  vec3 iuw = xw + 0.5 * yw;\n\t  vec3 ivw = yw;\n\n\t  // Create gradients from indices\n\t  vec2 g0 = rgrad2(vec2(iuw.x, ivw.x), rot);\n\t  vec2 g1 = rgrad2(vec2(iuw.y, ivw.y), rot);\n\t  vec2 g2 = rgrad2(vec2(iuw.z, ivw.z), rot);\n\n\t  // Gradients dot vectors to corresponding corners\n\t  // (The derivatives of this are simply the gradients)\n\t  vec3 w = vec3(dot(g0, d0), dot(g1, d1), dot(g2, d2));\n\n\t  // Radial weights from corners\n\t  // 0.8 is the square of 2/sqrt(5), the distance from\n\t  // a grid point to the nearest simplex boundary\n\t  vec3 t = 0.8 - vec3(dot(d0, d0), dot(d1, d1), dot(d2, d2));\n\n\t  // Set influence of each surflet to zero outside radius sqrt(0.8)\n\t  t = max(t, 0.0);\n\n\t  // Fourth power of t\n\t  vec3 t2 = t * t;\n\t  vec3 t4 = t2 * t2;\n\n\t  // Final noise value is:\n\t  // sum of ((radial weights) times (gradient dot vector from corner))\n\t  float n = dot(t4, w);\n\n\t  // Rescale to cover the range [-1,1] reasonably well\n\t  return 11.0*n;\n\t}\n\n\t//\n\t// 2-D tiling simplex noise with fixed gradients,\n\t// without the analytical derivative.\n\t// This function is implemented as a wrapper to \"psrnoise\",\n\t// at the minimal cost of three extra additions.\n\t//\n\tfloat psnoise(vec2 pos, vec2 per) {\n\t  return psrnoise(pos, per, 0.0);\n\t}\n\n\t//\n\t// 2-D non-tiling simplex noise with rotating gradients and analytical derivative.\n\t// The first component of the 3-element return vector is the noise value,\n\t// and the second and third components are the x and y partial derivatives.\n\t//\n\tvec3 srdnoise(vec2 pos, float rot) {\n\t  // Offset y slightly to hide some rare artifacts\n\t  pos.y += 0.001;\n\t  // Skew to hexagonal grid\n\t  vec2 uv = vec2(pos.x + pos.y*0.5, pos.y);\n\n\t  vec2 i0 = floor(uv);\n\t  vec2 f0 = fract(uv);\n\t  // Traversal order\n\t  vec2 i1 = (f0.x > f0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n\n\t  // Unskewed grid points in (x,y) space\n\t  vec2 p0 = vec2(i0.x - i0.y * 0.5, i0.y);\n\t  vec2 p1 = vec2(p0.x + i1.x - i1.y * 0.5, p0.y + i1.y);\n\t  vec2 p2 = vec2(p0.x + 0.5, p0.y + 1.0);\n\n\t  // Integer grid point indices in (u,v) space\n\t  i1 = i0 + i1;\n\t  vec2 i2 = i0 + vec2(1.0, 1.0);\n\n\t  // Vectors in unskewed (x,y) coordinates from\n\t  // each of the simplex corners to the evaluation point\n\t  vec2 d0 = pos - p0;\n\t  vec2 d1 = pos - p1;\n\t  vec2 d2 = pos - p2;\n\n\t  vec3 x = vec3(p0.x, p1.x, p2.x);\n\t  vec3 y = vec3(p0.y, p1.y, p2.y);\n\t  vec3 iuw = x + 0.5 * y;\n\t  vec3 ivw = y;\n\n\t  // Avoid precision issues in permutation\n\t  iuw = mod289(iuw);\n\t  ivw = mod289(ivw);\n\n\t  // Create gradients from indices\n\t  vec2 g0 = rgrad2(vec2(iuw.x, ivw.x), rot);\n\t  vec2 g1 = rgrad2(vec2(iuw.y, ivw.y), rot);\n\t  vec2 g2 = rgrad2(vec2(iuw.z, ivw.z), rot);\n\n\t  // Gradients dot vectors to corresponding corners\n\t  // (The derivatives of this are simply the gradients)\n\t  vec3 w = vec3(dot(g0, d0), dot(g1, d1), dot(g2, d2));\n\n\t  // Radial weights from corners\n\t  // 0.8 is the square of 2/sqrt(5), the distance from\n\t  // a grid point to the nearest simplex boundary\n\t  vec3 t = 0.8 - vec3(dot(d0, d0), dot(d1, d1), dot(d2, d2));\n\n\t  // Partial derivatives for analytical gradient computation\n\t  vec3 dtdx = -2.0 * vec3(d0.x, d1.x, d2.x);\n\t  vec3 dtdy = -2.0 * vec3(d0.y, d1.y, d2.y);\n\n\t  // Set influence of each surflet to zero outside radius sqrt(0.8)\n\t  if (t.x < 0.0) {\n\t\tdtdx.x = 0.0;\n\t\tdtdy.x = 0.0;\n\t\tt.x = 0.0;\n\t  }\n\t  if (t.y < 0.0) {\n\t\tdtdx.y = 0.0;\n\t\tdtdy.y = 0.0;\n\t\tt.y = 0.0;\n\t  }\n\t  if (t.z < 0.0) {\n\t\tdtdx.z = 0.0;\n\t\tdtdy.z = 0.0;\n\t\tt.z = 0.0;\n\t  }\n\n\t  // Fourth power of t (and third power for derivative)\n\t  vec3 t2 = t * t;\n\t  vec3 t4 = t2 * t2;\n\t  vec3 t3 = t2 * t;\n\n\t  // Final noise value is:\n\t  // sum of ((radial weights) times (gradient dot vector from corner))\n\t  float n = dot(t4, w);\n\n\t  // Final analytical derivative (gradient of a sum of scalar products)\n\t  vec2 dt0 = vec2(dtdx.x, dtdy.x) * 4.0 * t3.x;\n\t  vec2 dn0 = t4.x * g0 + dt0 * w.x;\n\t  vec2 dt1 = vec2(dtdx.y, dtdy.y) * 4.0 * t3.y;\n\t  vec2 dn1 = t4.y * g1 + dt1 * w.y;\n\t  vec2 dt2 = vec2(dtdx.z, dtdy.z) * 4.0 * t3.z;\n\t  vec2 dn2 = t4.z * g2 + dt2 * w.z;\n\n\t  return 11.0*vec3(n, dn0 + dn1 + dn2);\n\t}\n\n\t//\n\t// 2-D non-tiling simplex noise with fixed gradients and analytical derivative.\n\t// This function is implemented as a wrapper to \"srdnoise\",\n\t// at the minimal cost of three extra additions.\n\t//\n\tvec3 sdnoise(vec2 pos) {\n\t  return srdnoise(pos, 0.0);\n\t}\n\n\t//\n\t// 2-D non-tiling simplex noise with rotating gradients,\n\t// without the analytical derivative.\n\t//\n\tfloat srnoise(vec2 pos, float rot) {\n\t  // Offset y slightly to hide some rare artifacts\n\t  pos.y += 0.001;\n\t  // Skew to hexagonal grid\n\t  vec2 uv = vec2(pos.x + pos.y*0.5, pos.y);\n\n\t  vec2 i0 = floor(uv);\n\t  vec2 f0 = fract(uv);\n\t  // Traversal order\n\t  vec2 i1 = (f0.x > f0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n\n\t  // Unskewed grid points in (x,y) space\n\t  vec2 p0 = vec2(i0.x - i0.y * 0.5, i0.y);\n\t  vec2 p1 = vec2(p0.x + i1.x - i1.y * 0.5, p0.y + i1.y);\n\t  vec2 p2 = vec2(p0.x + 0.5, p0.y + 1.0);\n\n\t  // Integer grid point indices in (u,v) space\n\t  i1 = i0 + i1;\n\t  vec2 i2 = i0 + vec2(1.0, 1.0);\n\n\t  // Vectors in unskewed (x,y) coordinates from\n\t  // each of the simplex corners to the evaluation point\n\t  vec2 d0 = pos - p0;\n\t  vec2 d1 = pos - p1;\n\t  vec2 d2 = pos - p2;\n\n\t  // Wrap i0, i1 and i2 to the desired period before gradient hashing:\n\t  // wrap points in (x,y), map to (u,v)\n\t  vec3 x = vec3(p0.x, p1.x, p2.x);\n\t  vec3 y = vec3(p0.y, p1.y, p2.y);\n\t  vec3 iuw = x + 0.5 * y;\n\t  vec3 ivw = y;\n\n\t  // Avoid precision issues in permutation\n\t  iuw = mod289(iuw);\n\t  ivw = mod289(ivw);\n\n\t  // Create gradients from indices\n\t  vec2 g0 = rgrad2(vec2(iuw.x, ivw.x), rot);\n\t  vec2 g1 = rgrad2(vec2(iuw.y, ivw.y), rot);\n\t  vec2 g2 = rgrad2(vec2(iuw.z, ivw.z), rot);\n\n\t  // Gradients dot vectors to corresponding corners\n\t  // (The derivatives of this are simply the gradients)\n\t  vec3 w = vec3(dot(g0, d0), dot(g1, d1), dot(g2, d2));\n\n\t  // Radial weights from corners\n\t  // 0.8 is the square of 2/sqrt(5), the distance from\n\t  // a grid point to the nearest simplex boundary\n\t  vec3 t = 0.8 - vec3(dot(d0, d0), dot(d1, d1), dot(d2, d2));\n\n\t  // Set influence of each surflet to zero outside radius sqrt(0.8)\n\t  t = max(t, 0.0);\n\n\t  // Fourth power of t\n\t  vec3 t2 = t * t;\n\t  vec3 t4 = t2 * t2;\n\n\t  // Final noise value is:\n\t  // sum of ((radial weights) times (gradient dot vector from corner))\n\t  float n = dot(t4, w);\n\n\t  // Rescale to cover the range [-1,1] reasonably well\n\t  return 11.0*n;\n\t}\n\n\t//\n\t// 2-D non-tiling simplex noise with fixed gradients,\n\t// without the analytical derivative.\n\t// This function is implemented as a wrapper to \"srnoise\",\n\t// at the minimal cost of three extra additions.\n\t// Note: if this kind of noise is all you want, there are faster\n\t// GLSL implementations of non-tiling simplex noise out there.\n\t// This one is included mainly for completeness and compatibility\n\t// with the other functions in the file.\n\t//\n\tfloat snoise(vec2 pos) {\n\t  return srnoise(pos, 0.0);\n\t}\n\n\tfloat hash(float x, float y) {\n\t\treturn fract(abs(sin(sin(123.321 + x) * (y + 321.123)) * 456.654));\n\t}\n\n\tfloat lerp(float a, float b, float t) {\n\t\treturn a * (1.0 - t) + b * t;\n\t}\n\n\tfloat perlin(float x, float y){\n\t\tfloat col = 0.0;\n\t\tfor (int i = 0; i < 8; i++)\n\t\t{\n\t\t\tfloat fx = floor(x);\n\t\t\tfloat fy = floor(y);\n\t\t\tfloat cx = ceil(x);\n\t\t\tfloat cy = ceil(y);\n\t\t\tfloat a = hash(fx, fy);\n\t\t\tfloat b = hash(fx, cy);\n\t\t\tfloat c = hash(cx, fy);\n\t\t\tfloat d = hash(cx, cy);\n\t\t\tcol += lerp(lerp(a, b, fract(y)), lerp(c, d, fract(y)), fract(x));\n\t\t\tcol /= 2.0;\n\t\t\tx /= 2.0;\n\t\t\ty /= 2.0;\n\t\t}\n\t\treturn col;\n\t}\n\n\tfloat dperlin(float x, float y){\n\t\tfloat d = perlin(x, y) * 800.0;\n\t\treturn perlin(x + d, y + d);\n\t}\n\n\tfloat ddperlin(float x, float y){\n\t\tfloat d = perlin(x, y) * 800.0;\n\t\treturn dperlin(x + d, y + d);\n\t}\n";
export { noise };