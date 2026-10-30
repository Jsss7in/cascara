/* Cascarup 3D opening. three.js © 2010-2025 three.js authors, MIT licence. */
var Lh=0,Hl=1,Dh=2;var Wl=1,Uh=2,kn=3,wi=0,Xt=1,Lt=2,Ti=0,Bs=1,Xl=2,$l=3,jl=4,Nh=5,Hr=100,Fh=101,Oh=102,Bh=103,zh=104,kh=200,Gh=201,Vh=202,Hh=203,Wh=204,Xh=205,$h=206,jh=207,qh=208,Yh=209,Zh=210,Jh=211,Kh=212,Qh=213,eu=214,xo=0,yo=1,Mo=2,zs=3,So=4,bo=5,wo=6,To=7,tu=0,nu=1,iu=2,oi=0,ru=1,su=2,au=3,ou=4,lu=5,cu=6,Eo=7;var ql=300,Wr=301,Yi=302,Ao=303,Co=304,ks=306,Rr=1e3,Pr=1001,Ia=1002,Fn=1003,hu=1004;var Gs=1005;var On=1006,Ro=1007;var Zi=1008;var Gn=1009,Yl=1010,Zl=1011,Xr=1012,Po=1013,Ji=1014,Vn=1015,$r=1016,Io=1017,Lo=1018,jr=1020,Jl=35902,uu=1021,du=1022,Tn=1023,Vs=1026,Hs=1027,Kl=1028,Do=1029,pu=1030,Ql=1031;var ec=1033,Uo=33776,No=33777,Fo=33778,Oo=33779,tc=35840,nc=35841,ic=35842,rc=35843,sc=36196,ac=37492,oc=37496,lc=37808,cc=37809,hc=37810,uc=37811,dc=37812,pc=37813,mc=37814,fc=37815,gc=37816,vc=37817,_c=37818,xc=37819,yc=37820,Mc=37821,Bo=36492,Sc=36494,bc=36495,mu=36283,wc=36284,Tc=36285,Ec=36286;var ms=2300,La=2301,Ca=2302,Ul=2400,Nl=2401,Fl=2402;var fu=3201;var gu=0,vu=1,Ki="",Bt="srgb",Gi="srgb-linear",fs="linear",dt="srgb";var ki=7680;var _u=512,xu=513,yu=514,Ac=515,Mu=516,Su=517,bu=518,wu=519,Da=35044;var Cc="300 es",yi=2e3,gs=2001;var ni=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}},Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ra=Math.PI/180,Ua=180/Math.PI;function ei(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(Gt[255&r]+Gt[r>>8&255]+Gt[r>>16&255]+Gt[r>>24&255]+"-"+Gt[255&e]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[63&t|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[255&n]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function at(r,e,t){return Math.max(e,Math.min(t,r))}function bd(r,e){return(r%e+e)%e}function sl(r,e,t){return(1-t)*r+t*e}function Dn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ft(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var xe=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},xn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[a+0],p=s[a+1],f=s[a+2],v=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=f,void(e[t+3]=v);if(u!==v||l!==d||c!==p||h!==f){let m=1-o,g=l*d+c*p+h*f+u*v,_=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){let w=Math.sqrt(x),T=Math.atan2(w,g*_);m=Math.sin(m*T)/w,o=Math.sin(o*T)/w}let M=o*_;if(l=l*m+d*M,c=c*m+p*M,h=h*m+f*M,u=u*m+v*M,m===1-o){let w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*u+l*p-c*d,e[t+1]=l*f+h*d+c*u-o*p,e[t+2]=c*f+h*p+o*d-l*u,e[t+3]=h*f-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),p=l(i/2),f=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"YZX":this._x=d*h*u+c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u-d*p*f;break;case"XZY":this._x=d*h*u-c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return al.copy(this).projectOnVector(e),this.sub(al)}reflect(e){return this.sub(al.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},al=new A,sh=new xn,tt=class r{constructor(e,t,n,i,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],f=n[8],v=i[0],m=i[3],g=i[6],_=i[1],x=i[4],M=i[7],w=i[2],T=i[5],U=i[8];return s[0]=a*v+o*_+l*w,s[3]=a*m+o*x+l*T,s[6]=a*g+o*M+l*U,s[1]=c*v+h*_+u*w,s[4]=c*m+h*x+u*T,s[7]=c*g+h*M+u*U,s[2]=d*v+p*_+f*w,s[5]=d*m+p*x+f*T,s[8]=d*g+p*M+f*U,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,f=t*u+n*d+i*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/f;return e[0]=u*v,e[1]=(i*c-h*n)*v,e[2]=(o*n-i*a)*v,e[3]=d*v,e[4]=(h*t-i*l)*v,e[5]=(i*s-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ol.makeScale(e,t)),this}rotate(e){return this.premultiply(ol.makeRotation(-e)),this}translate(e,t){return this.premultiply(ol.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ol=new tt;function Rc(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ir(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Tu(){let r=Ir("canvas");return r.style.display="block",r}var ah={};function Vi(r){r in ah||(ah[r]=!0,console.warn(r))}function Eu(r,e,t){return new Promise(function(n,i){setTimeout(function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}},t)})}function Au(r){let e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Cu(r){let e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=1-e[14])}var oh=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lh=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wd(){let r={enabled:!0,workingColorSpace:Gi,spaces:{},convert:function(i,s,a){return this.enabled!==!1&&s!==a&&s&&a&&(this.spaces[s].transfer===dt&&(i.r=ti(i.r),i.g=ti(i.g),i.b=ti(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(i.r=Cr(i.r),i.g=Cr(i.g),i.b=Cr(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===""?fs:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Vi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Vi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Gi]:{primaries:e,whitePoint:n,transfer:fs,toXYZ:oh,fromXYZ:lh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:e,whitePoint:n,transfer:dt,toXYZ:oh,fromXYZ:lh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}}),r}var ut=wd();function ti(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function Cr(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var dr,Na=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{dr===void 0&&(dr=Ir("canvas")),dr.width=e.width,dr.height=e.height;let i=dr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=dr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ir("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=255*ti(s[a]/255);return n.putImageData(i,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*ti(t[n]/255)):t[n]=ti(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Td=0,Lr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=ei(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(ll(i[a].image)):s.push(ll(i[a]))}else s=ll(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function ll(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Na.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ed=0,cl=new A,Yt=class r extends ni{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=1001,i=1001,s=1006,a=1008,o=1023,l=1009,c=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=ei(),this.name="",this.source=new Lr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(cl).x}get height(){return this.source.getSize(cl).y}get depth(){return this.source.getSize(cl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];i!==void 0?i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n:console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ql)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rr:e.x=e.x-Math.floor(e.x);break;case Pr:e.x=e.x<0?0:1;break;case Ia:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Rr:e.y=e.y-Math.floor(e.y);break;case Pr:e.y=e.y<0?0:1;break;case Ia:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Yt.DEFAULT_IMAGE=null,Yt.DEFAULT_MAPPING=ql,Yt.DEFAULT_ANISOTROPY=1;var yt=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],f=l[9],v=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(f+m)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,M=(p+1)/2,w=(g+1)/2,T=(h+d)/4,U=(u+v)/4,B=(f+m)/4;return x>M&&x>w?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=T/n,s=U/n):M>w?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=T/i,s=B/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=U/s,i=B/s),this.set(n,i,s,t),this}let _=Math.sqrt((m-f)*(m-f)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-f)/_,this.y=(u-v)/_,this.z=(d-h)/_,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fa=class extends ni{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);let i={width:e,height:t,depth:n.depth},s=new Yt(i);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Lr(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bn=class extends Fa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},vs=class extends Yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Oa=class extends Yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yn=class{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,gn):gn.fromBufferAttribute(s,a),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ta.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ta.copy(n.boundingBox)),ta.applyMatrix4(e.matrixWorld),this.union(ta)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rs),na.subVectors(this.max,rs),pr.subVectors(e.a,rs),mr.subVectors(e.b,rs),fr.subVectors(e.c,rs),di.subVectors(mr,pr),pi.subVectors(fr,mr),Fi.subVectors(pr,fr);let t=[0,-di.z,di.y,0,-pi.z,pi.y,0,-Fi.z,Fi.y,di.z,0,-di.x,pi.z,0,-pi.x,Fi.z,0,-Fi.x,-di.y,di.x,0,-pi.y,pi.x,0,-Fi.y,Fi.x,0];return!!hl(t,pr,mr,fr,na)&&(t=[1,0,0,0,1,0,0,0,1],!!hl(t,pr,mr,fr,na)&&(ia.crossVectors(di,pi),t=[ia.x,ia.y,ia.z],hl(t,pr,mr,fr,na)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(gn).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Yn=[new A,new A,new A,new A,new A,new A,new A,new A],gn=new A,ta=new yn,pr=new A,mr=new A,fr=new A,di=new A,pi=new A,Fi=new A,rs=new A,na=new A,ia=new A,Oi=new A;function hl(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Oi.fromArray(r,s);let o=i.x*Math.abs(Oi.x)+i.y*Math.abs(Oi.y)+i.z*Math.abs(Oi.z),l=e.dot(Oi),c=t.dot(Oi),h=n.dot(Oi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ad=new yn,ss=new A,ul=new A,Mn=class{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ad.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ss.subVectors(e,this.center);let t=ss.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=.5*(n-this.radius);this.center.addScaledVector(ss,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ul.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ss.copy(e.center).add(ul)),this.expandByPoint(ss.copy(e.center).sub(ul))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Zn=new A,dl=new A,ra=new A,mi=new A,pl=new A,sa=new A,ml=new A,Hi=class{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,t),Zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){dl.copy(e).add(t).multiplyScalar(.5),ra.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(dl);let s=.5*e.distanceTo(t),a=-this.direction.dot(ra),o=mi.dot(this.direction),l=-mi.dot(ra),c=mi.lengthSq(),h=Math.abs(1-a*a),u,d,p,f;if(h>0)if(u=a*l-o,d=a*o-l,f=s*h,u>=0)if(d>=-f)if(d<=f){let v=1/h;u*=v,d*=v,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(dl).addScaledVector(ra,d),p}intersectSphere(e,t){Zn.subVectors(e.center,this.origin);let n=Zn.dot(this.direction),i=Zn.dot(Zn)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i?null:((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i?null:((o>n||n!=n)&&(n=o),(l<i||i!=i)&&(i=l),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,t,n,i,s){pl.subVectors(t,e),sa.subVectors(n,e),ml.crossVectors(pl,sa);let a,o=this.direction.dot(ml);if(o>0){if(i)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}mi.subVectors(this.origin,e);let l=a*this.direction.dot(sa.crossVectors(mi,sa));if(l<0)return null;let c=a*this.direction.dot(pl.cross(mi));if(c<0||l+c>o)return null;let h=-a*mi.dot(ml);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},et=class r{constructor(e,t,n,i,s,a,o,l,c,h,u,d,p,f,v,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,u,d,p,f,v,m)}set(e,t,n,i,s,a,o,l,c,h,u,d,p,f,v,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=p,g[7]=f,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/gr.setFromMatrixColumn(e,0).length(),s=1/gr.setFromMatrixColumn(e,1).length(),a=1/gr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,f=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+f*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=f+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,f=c*h,v=c*u;t[0]=d+v*o,t[4]=f*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,f=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,f=o*h,v=o*u;t[0]=l*h,t[4]=f*c-p,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=p*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,f=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=f*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+f,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*l,p=a*c,f=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cd,e,Rd)}lookAt(e,t,n){let i=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),fi.crossVectors(n,nn),fi.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),fi.crossVectors(n,nn)),fi.normalize(),aa.crossVectors(nn,fi),i[0]=fi.x,i[4]=aa.x,i[8]=nn.x,i[1]=fi.y,i[5]=aa.y,i[9]=nn.y,i[2]=fi.z,i[6]=aa.z,i[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],f=n[2],v=n[6],m=n[10],g=n[14],_=n[3],x=n[7],M=n[11],w=n[15],T=i[0],U=i[4],B=i[8],L=i[12],P=i[1],F=i[5],I=i[9],H=i[13],z=i[2],q=i[6],V=i[10],ne=i[14],ee=i[3],re=i[7],se=i[11],J=i[15];return s[0]=a*T+o*P+l*z+c*ee,s[4]=a*U+o*F+l*q+c*re,s[8]=a*B+o*I+l*V+c*se,s[12]=a*L+o*H+l*ne+c*J,s[1]=h*T+u*P+d*z+p*ee,s[5]=h*U+u*F+d*q+p*re,s[9]=h*B+u*I+d*V+p*se,s[13]=h*L+u*H+d*ne+p*J,s[2]=f*T+v*P+m*z+g*ee,s[6]=f*U+v*F+m*q+g*re,s[10]=f*B+v*I+m*V+g*se,s[14]=f*L+v*H+m*ne+g*J,s[3]=_*T+x*P+M*z+w*ee,s[7]=_*U+x*F+M*q+w*re,s[11]=_*B+x*I+M*V+w*se,s[15]=_*L+x*H+M*ne+w*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*l*u-i*c*u-s*o*d+n*c*d+i*o*p-n*l*p)+e[7]*(+t*l*p-t*c*d+s*a*d-i*a*p+i*c*h-s*l*h)+e[11]*(+t*c*u-t*o*p-s*a*u+n*a*p+s*o*h-n*c*h)+e[15]*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],f=e[12],v=e[13],m=e[14],g=e[15],_=u*m*c-v*d*c+v*l*p-o*m*p-u*l*g+o*d*g,x=f*d*c-h*m*c-f*l*p+a*m*p+h*l*g-a*d*g,M=h*v*c-f*u*c+f*o*p-a*v*p-h*o*g+a*u*g,w=f*u*l-h*v*l-f*o*d+a*v*d+h*o*m-a*u*m,T=t*_+n*x+i*M+s*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/T;return e[0]=_*U,e[1]=(v*d*s-u*m*s-v*i*p+n*m*p+u*i*g-n*d*g)*U,e[2]=(o*m*s-v*l*s+v*i*c-n*m*c-o*i*g+n*l*g)*U,e[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*p-n*l*p)*U,e[4]=x*U,e[5]=(h*m*s-f*d*s+f*i*p-t*m*p-h*i*g+t*d*g)*U,e[6]=(f*l*s-a*m*s-f*i*c+t*m*c+a*i*g-t*l*g)*U,e[7]=(a*d*s-h*l*s+h*i*c-t*d*c-a*i*p+t*l*p)*U,e[8]=M*U,e[9]=(f*u*s-h*v*s-f*n*p+t*v*p+h*n*g-t*u*g)*U,e[10]=(a*v*s-f*o*s+f*n*c-t*v*c-a*n*g+t*o*g)*U,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*p-t*o*p)*U,e[12]=w*U,e[13]=(h*v*i-f*u*i+f*n*d-t*v*d-h*n*m+t*u*m)*U,e[14]=(f*o*i-a*v*i-f*n*l+t*v*l+a*n*m-t*o*m)*U,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*U,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,f=s*u,v=a*h,m=a*u,g=o*u,_=l*c,x=l*h,M=l*u,w=n.x,T=n.y,U=n.z;return i[0]=(1-(v+g))*w,i[1]=(p+M)*w,i[2]=(f-x)*w,i[3]=0,i[4]=(p-M)*T,i[5]=(1-(d+g))*T,i[6]=(m+_)*T,i[7]=0,i[8]=(f+x)*U,i[9]=(m-_)*U,i[10]=(1-(d+v))*U,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=gr.set(i[0],i[1],i[2]).length(),a=gr.set(i[4],i[5],i[6]).length(),o=gr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],vn.copy(this);let l=1/s,c=1/a,h=1/o;return vn.elements[0]*=l,vn.elements[1]*=l,vn.elements[2]*=l,vn.elements[4]*=c,vn.elements[5]*=c,vn.elements[6]*=c,vn.elements[8]*=h,vn.elements[9]*=h,vn.elements[10]*=h,t.setFromRotationMatrix(vn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=2e3){let l=this.elements,c=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),p,f;if(o===yi)p=-(a+s)/(a-s),f=-2*a*s/(a-s);else{if(o!==gs)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),f=-a*s/(a-s)}return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-s),d=(t+e)*c,p=(n+i)*h,f,v;if(o===yi)f=(a+s)*u,v=-2*u;else{if(o!==gs)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=s*u,v=-1*u}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},gr=new A,vn=new et,Cd=new A(0,0,0),Rd=new A(1,1,1),fi=new A,aa=new A,nn=new A,ch=new et,hh=new xn,Sn=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ch.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ch,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hh.setFromEuler(this),this.setFromQuaternion(hh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sn.DEFAULT_ORDER="XYZ";var _s=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Pd=0,uh=new A,vr=new xn,Jn=new et,oa=new A,as=new A,Id=new A,Ld=new xn,dh=new A(1,0,0),ph=new A(0,1,0),mh=new A(0,0,1),fh={type:"added"},Dd={type:"removed"},_r={type:"childadded",child:null},fl={type:"childremoved",child:null},Tt=class r extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new A,t=new Sn,n=new xn,i=new A(1,1,1);t._onChange(function(){n.setFromEuler(t,!1)}),n._onChange(function(){t.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new et},normalMatrix:{value:new tt}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _s,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vr.setFromAxisAngle(e,t),this.quaternion.multiply(vr),this}rotateOnWorldAxis(e,t){return vr.setFromAxisAngle(e,t),this.quaternion.premultiply(vr),this}rotateX(e){return this.rotateOnAxis(dh,e)}rotateY(e){return this.rotateOnAxis(ph,e)}rotateZ(e){return this.rotateOnAxis(mh,e)}translateOnAxis(e,t){return uh.copy(e).applyQuaternion(this.quaternion),this.position.add(uh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dh,e)}translateY(e){return this.translateOnAxis(ph,e)}translateZ(e){return this.translateOnAxis(mh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?oa.copy(e):oa.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(as,oa,this.up):Jn.lookAt(oa,as,this.up),this.quaternion.setFromRotationMatrix(Jn),i&&(Jn.extractRotation(i.matrixWorld),vr.setFromRotationMatrix(Jn),this.quaternion.premultiply(vr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fh),_r.child=e,this.dispatchEvent(_r),_r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dd),fl.child=e,this.dispatchEvent(fl),fl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fh),_r.child=e,this.dispatchEvent(_r),_r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,e,Id),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,Ld,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Tt.DEFAULT_UP=new A(0,1,0),Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _n=new A,Kn=new A,gl=new A,Qn=new A,xr=new A,yr=new A,gh=new A,vl=new A,_l=new A,xl=new A,yl=new yt,Ml=new yt,Sl=new yt,Un=class r{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),_n.subVectors(e,t),i.cross(_n);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){_n.subVectors(i,t),Kn.subVectors(n,t),gl.subVectors(e,t);let a=_n.dot(_n),o=_n.dot(Kn),l=_n.dot(gl),c=Kn.dot(Kn),h=Kn.dot(gl),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,f=(a*h-o*l)*d;return s.set(1-p-f,f,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Qn)!==null&&Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Qn.x),l.addScaledVector(a,Qn.y),l.addScaledVector(o,Qn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return yl.setScalar(0),Ml.setScalar(0),Sl.setScalar(0),yl.fromBufferAttribute(e,t),Ml.fromBufferAttribute(e,n),Sl.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(yl,s.x),a.addScaledVector(Ml,s.y),a.addScaledVector(Sl,s.z),a}static isFrontFacing(e,t,n,i){return _n.subVectors(n,t),Kn.subVectors(e,t),_n.cross(Kn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),.5*_n.cross(Kn).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;xr.subVectors(i,n),yr.subVectors(s,n),vl.subVectors(e,n);let l=xr.dot(vl),c=yr.dot(vl);if(l<=0&&c<=0)return t.copy(n);_l.subVectors(e,i);let h=xr.dot(_l),u=yr.dot(_l);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(xr,a);xl.subVectors(e,s);let p=xr.dot(xl),f=yr.dot(xl);if(f>=0&&p<=f)return t.copy(s);let v=p*c-l*f;if(v<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(yr,o);let m=h*f-p*u;if(m<=0&&u-h>=0&&p-f>=0)return gh.subVectors(s,i),o=(u-h)/(u-h+(p-f)),t.copy(i).addScaledVector(gh,o);let g=1/(m+v+d);return a=v*g,o=d*g,t.copy(n).addScaledVector(xr,a).addScaledVector(yr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ru={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},la={h:0,s:0,l:0};function bl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var De=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ut.workingColorSpace){if(e=bd(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=bl(a,s,e+1/3),this.g=bl(a,s,e),this.b=bl(a,s,e-1/3)}return ut.colorSpaceToWorking(this,i),this}setStyle(e,t=Bt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){let n=Ru[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}copyLinearToSRGB(e){return this.r=Cr(e.r),this.g=Cr(e.g),this.b=Cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return ut.workingToColorSpace(Vt.copy(this),e),65536*Math.round(at(255*Vt.r,0,255))+256*Math.round(at(255*Vt.g,0,255))+Math.round(at(255*Vt.b,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(Vt.copy(this),t);let n=Vt.r,i=Vt.g,s=Vt.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Bt){ut.workingToColorSpace(Vt.copy(this),e);let t=Vt.r,n=Vt.g,i=Vt.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(e,t,n){return this.getHSL(gi),this.setHSL(gi.h+e,gi.s+t,gi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gi),e.getHSL(la);let n=sl(gi.h,la.h,t),i=sl(gi.s,la.s,t),s=sl(gi.l,la.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vt=new De;De.NAMES=Ru;var Ud=0,ii=class extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=ei(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ri=class extends ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},pf=Nd();function Nd(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[256|l]=32768,i[l]=24,i[256|l]=24):c<-14?(n[l]=1024>>-c-14,n[256|l]=1024>>-c-14|32768,i[l]=-c-1,i[256|l]=-c-1):c<=15?(n[l]=c+15<<10,n[256|l]=c+15<<10|32768,i[l]=13,i[256|l]=13):c<128?(n[l]=31744,n[256|l]=64512,i[l]=24,i[256|l]=24):(n[l]=31744,n[256|l]=64512,i[l]=13,i[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}var Rt=new A,ca=new xe,Fd=0,Et=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Da,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ca.fromBufferAttribute(this,t),ca.applyMatrix3(e),this.setXY(t,ca.x,ca.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),i=ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),i=ft(i,this.array),s=ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Da&&(e.usage=this.usage),e}};var xs=class extends Et{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ys=class extends Et{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var qe=class extends Et{constructor(e,t,n){super(new Float32Array(e),t,n)}},Od=0,pn=new et,wl=new Tt,Mr=new A,rn=new yn,os=new yn,Nt=new A,Mt=class r extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rc(e)?ys:xs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new tt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,n){return pn.makeTranslation(e,t,n),this.applyMatrix4(pn),this}scale(e,t,n){return pn.makeScale(e,t,n),this.applyMatrix4(pn),this}lookAt(e){return wl.lookAt(e),wl.updateMatrix(),this.applyMatrix4(wl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new qe(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new A,1/0);if(e){let n=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];os.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(rn.min,os.min),rn.expandByPoint(Nt),Nt.addVectors(rn.max,os.max),rn.expandByPoint(Nt)):(rn.expandByPoint(os.min),rn.expandByPoint(os.max))}rn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Nt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Nt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Nt.fromBufferAttribute(o,c),l&&(Mr.fromBufferAttribute(e,c),Nt.add(Mr)),i=Math.max(i,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Et(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let B=0;B<n.count;B++)o[B]=new A,l[B]=new A;let c=new A,h=new A,u=new A,d=new xe,p=new xe,f=new xe,v=new A,m=new A;function g(B,L,P){c.fromBufferAttribute(n,B),h.fromBufferAttribute(n,L),u.fromBufferAttribute(n,P),d.fromBufferAttribute(s,B),p.fromBufferAttribute(s,L),f.fromBufferAttribute(s,P),h.sub(c),u.sub(c),p.sub(d),f.sub(d);let F=1/(p.x*f.y-f.x*p.y);isFinite(F)&&(v.copy(h).multiplyScalar(f.y).addScaledVector(u,-p.y).multiplyScalar(F),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(F),o[B].add(v),o[L].add(v),o[P].add(v),l[B].add(m),l[L].add(m),l[P].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let B=0,L=_.length;B<L;++B){let P=_[B],F=P.start;for(let I=F,H=F+P.count;I<H;I+=3)g(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let x=new A,M=new A,w=new A,T=new A;function U(B){w.fromBufferAttribute(i,B),T.copy(w);let L=o[B];x.copy(L),x.sub(w.multiplyScalar(w.dot(L))).normalize(),M.crossVectors(T,L);let P=M.dot(l[B])<0?-1:1;a.setXYZW(B,x.x,x.y,x.z,P)}for(let B=0,L=_.length;B<L;++B){let P=_[B],F=P.start;for(let I=F,H=F+P.count;I<H;I+=3)U(e.getX(I+0)),U(e.getX(I+1)),U(e.getX(I+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Et(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new A,s=new A,a=new A,o=new A,l=new A,c=new A,h=new A,u=new A;if(e)for(let d=0,p=e.count;d<p;d+=3){let f=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,f),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,f),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,f=0;for(let v=0,m=l.length;v<m;v++){p=o.isInterleavedBufferAttribute?l[v]*o.data.stride+o.offset:l[v]*h;for(let g=0;g<h;g++)d[f++]=c[p++]}return new Et(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=e(i[o],n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},vh=new et,Bi=new Hi,ha=new Mn,_h=new A,ua=new A,da=new A,pa=new A,Tl=new A,ma=new A,xh=new A,fa=new A,$e=class extends Tt{constructor(e=new Mt,t=new ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){ma.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(Tl.fromBufferAttribute(u,e),a?ma.addScaledVector(Tl,h):ma.addScaledVector(Tl.sub(t),h))}t.add(ma)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(s),Bi.copy(e.ray).recast(e.near),ha.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(ha,_h)===null||Bi.origin.distanceToSquared(_h)>(e.far-e.near)**2))return;vh.copy(s).invert(),Bi.copy(e.ray).applyMatrix4(vh),n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,Bi)}}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,v=d.length;f<v;f++){let m=d[f],g=a[m.materialIndex];for(let _=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));_<x;_+=3)i=ga(this,g,e,n,c,h,u,o.getX(_),o.getX(_+1),o.getX(_+2)),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}else for(let f=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);f<v;f+=3)i=ga(this,a,e,n,c,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),i&&(i.faceIndex=Math.floor(f/3),t.push(i));else if(l!==void 0)if(Array.isArray(a))for(let f=0,v=d.length;f<v;f++){let m=d[f],g=a[m.materialIndex];for(let _=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));_<x;_+=3)i=ga(this,g,e,n,c,h,u,_,_+1,_+2),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}else for(let f=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);f<v;f+=3)i=ga(this,a,e,n,c,h,u,f,f+1,f+2),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}};function ga(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,ua),r.getVertexPosition(l,da),r.getVertexPosition(c,pa);let h=(function(u,d,p,f,v,m,g,_){let x;if(x=d.side===1?f.intersectTriangle(g,m,v,!0,_):f.intersectTriangle(v,m,g,d.side===0,_),x===null)return null;fa.copy(_),fa.applyMatrix4(u.matrixWorld);let M=p.ray.origin.distanceTo(fa);return M<p.near||M>p.far?null:{distance:M,point:fa.clone(),object:u}})(r,e,t,n,ua,da,pa,xh);if(h){let u=new A;Un.getBarycoord(xh,ua,da,pa,u),i&&(h.uv=Un.getInterpolatedAttribute(i,o,l,c,u,new xe)),s&&(h.uv1=Un.getInterpolatedAttribute(s,o,l,c,u,new xe)),a&&(h.normal=Un.getInterpolatedAttribute(a,o,l,c,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new A,materialIndex:0};Un.getNormal(ua,da,pa,d.normal),h.face=d,h.barycoord=u}return h}var si=class r extends Mt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;function f(v,m,g,_,x,M,w,T,U,B,L){let P=M/U,F=w/B,I=M/2,H=w/2,z=T/2,q=U+1,V=B+1,ne=0,ee=0,re=new A;for(let se=0;se<V;se++){let J=se*F-H;for(let oe=0;oe<q;oe++){let Me=oe*P-I;re[v]=Me*_,re[m]=J*x,re[g]=z,c.push(re.x,re.y,re.z),re[v]=0,re[m]=0,re[g]=T>0?1:-1,h.push(re.x,re.y,re.z),u.push(oe/U),u.push(1-se/B),ne+=1}}for(let se=0;se<B;se++)for(let J=0;J<U;J++){let oe=d+J+q*se,Me=d+J+q*(se+1),Pe=d+(J+1)+q*(se+1),ye=d+(J+1)+q*se;l.push(oe,Me,ye),l.push(Me,Pe,ye),ee+=6}o.addGroup(p,ee,L),p+=ee,d+=ne}f("z","y","x",-1,-1,n,t,e,a,s,0),f("z","y","x",1,-1,n,t,-e,a,s,1),f("x","z","y",1,1,e,n,t,i,a,2),f("x","z","y",1,-1,e,n,-t,i,a,3),f("x","y","z",1,-1,e,t,n,i,s,4),f("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new qe(c,3)),this.setAttribute("normal",new qe(h,3)),this.setAttribute("uv",new qe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Qi(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function $t(r){let e={};for(let t=0;t<r.length;t++){let n=Qi(r[t]);for(let i in n)e[i]=n[i]}return e}function Pc(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}var Pu={clone:Qi,merge:$t},bn=class extends ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qi(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let i=0;i<t.length;i++)n.push(t[i].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Dr=class extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=yi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},vi=new A,yh=new xe,Mh=new xe,Ht=class extends Dr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Ua*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Ra*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Ua*Math.atan(Math.tan(.5*Ra*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vi.x,vi.y).multiplyScalar(-e/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-e/vi.z)}getViewSize(e,t){return this.getViewBounds(e,yh,Mh),t.subVectors(Mh,yh)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Ra*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Sr=-90,Ba=class extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ht(Sr,1,e,t);i.layers=this.layers,this.add(i);let s=new Ht(Sr,1,e,t);s.layers=this.layers,this.add(s);let a=new Ht(Sr,1,e,t);a.layers=this.layers,this.add(a);let o=new Ht(Sr,1,e,t);o.layers=this.layers,this.add(o);let l=new Ht(Sr,1,e,t);l.layers=this.layers,this.add(l);let c=new Ht(Sr,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===yi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==gs)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},Ms=class extends Yt{constructor(e=[],t=301,n,i,s,a,o,l,c,h){super(e,t,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},za=class extends Bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ms(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new si(5,5,5),s=new bn({name:"CubemapFromEquirect",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;let a=new $e(i,s),o=t.minFilter;return t.minFilter===Zi&&(t.minFilter=On),new Ba(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},Wt=class extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bd={type:"move"},Ur=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),g=this._getHandJoint(c,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;c.inputState.pinching&&d>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bd)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Nr=class extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ka=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Da,this.updateRanges=[],this.version=0,this.uuid=ei()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},qt=new A,Ss=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Dn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),i=ft(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ft(t,this.array),n=ft(n,this.array),i=ft(i,this.array),s=ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Et(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Fr=class extends ii{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},br,ls=new A,wr=new A,Tr=new A,Er=new xe,cs=new xe,Iu=new et,va=new A,hs=new A,_a=new A,Sh=new xe,El=new xe,bh=new xe,bs=class extends Tt{constructor(e=new Fr){if(super(),this.isSprite=!0,this.type="Sprite",br===void 0){br=new Mt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ka(t,5);br.setIndex([0,1,2,0,2,3]),br.setAttribute("position",new Ss(n,3,0,!1)),br.setAttribute("uv",new Ss(n,2,3,!1))}this.geometry=br,this.material=e,this.center=new xe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),wr.setFromMatrixScale(this.matrixWorld),Iu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Tr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&wr.multiplyScalar(-Tr.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let a=this.center;xa(va.set(-.5,-.5,0),Tr,a,wr,i,s),xa(hs.set(.5,-.5,0),Tr,a,wr,i,s),xa(_a.set(.5,.5,0),Tr,a,wr,i,s),Sh.set(0,0),El.set(1,0),bh.set(1,1);let o=e.ray.intersectTriangle(va,hs,_a,!1,ls);if(o===null&&(xa(hs.set(-.5,.5,0),Tr,a,wr,i,s),El.set(0,1),o=e.ray.intersectTriangle(va,_a,hs,!1,ls),o===null))return;let l=e.ray.origin.distanceTo(ls);l<e.near||l>e.far||t.push({distance:l,point:ls.clone(),uv:Un.getInterpolation(ls,va,hs,_a,Sh,El,bh,new xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function xa(r,e,t,n,i,s){Er.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(cs.x=s*Er.x-i*Er.y,cs.y=i*Er.x+s*Er.y):cs.copy(Er),r.copy(e),r.x+=cs.x,r.y+=cs.y,r.applyMatrix4(Iu)}var mf=new A,ff=new A;var gf=new A,vf=new yt,_f=new yt,xf=new A,yf=new et,Mf=new A,Sf=new Mn,bf=new et,wf=new Hi;var Tf=new et,Ef=new et;var Af=new et,Cf=new et;var Rf=new yn,Pf=new et,If=new $e,Lf=new Mn;var Al=new A,zd=new A,kd=new tt,sn=class{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Al.subVectors(n,t).cross(zd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Al),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||kd.getNormalMatrix(e),i=this.coplanarPoint(Al).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},zi=new Mn,Gd=new xe(.5,.5),ya=new A,Mi=class{constructor(e=new sn,t=new sn,n=new sn,i=new sn,s=new sn,a=new sn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],f=i[9],v=i[10],m=i[11],g=i[12],_=i[13],x=i[14],M=i[15];if(n[0].setComponents(l-s,d-c,m-p,M-g).normalize(),n[1].setComponents(l+s,d+c,m+p,M+g).normalize(),n[2].setComponents(l+a,d+h,m+f,M+_).normalize(),n[3].setComponents(l-a,d-h,m-f,M-_).normalize(),n[4].setComponents(l-o,d-u,m-v,M-x).normalize(),t===yi)n[5].setComponents(l+o,d+u,m+v,M+x).normalize();else{if(t!==gs)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,u,v,x).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(e){zi.center.set(0,0,0);let t=Gd.distanceTo(e.center);return zi.radius=.7071067811865476+t,zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(ya.x=i.normal.x>0?e.max.x:e.min.x,ya.y=i.normal.y>0?e.max.y:e.min.y,ya.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ya)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},In=new et,Ln=new Mi,Ga=class r{constructor(){this.coordinateSystem=yi}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(In.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Ln.setFromProjectionMatrix(In,this.coordinateSystem),Ln.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(In.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Ln.setFromProjectionMatrix(In,this.coordinateSystem),Ln.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(In.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Ln.setFromProjectionMatrix(In,this.coordinateSystem),Ln.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(In.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Ln.setFromProjectionMatrix(In,this.coordinateSystem),Ln.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(In.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Ln.setFromProjectionMatrix(In,this.coordinateSystem),Ln.containsPoint(e))return!0}return!1}clone(){return new r}};var Ol=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}},Df=new et,Uf=new De(1,1,1),Nf=new Mi,Ff=new Ga,Of=new yn,Bf=new Mn,zf=new A,kf=new A,Gf=new A,Vf=new Ol,Hf=new $e;var Wf=new A,Xf=new A,$f=new et,jf=new Hi,qf=new Mn,Yf=new A,Zf=new A;var Jf=new A,Kf=new A;var Qf=new et,eg=new Hi,tg=new Mn,ng=new A;var Wi=class extends Yt{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ws=class extends Yt{constructor(e,t,n=1014,i,s,a,o=1003,l=1003,c,h=1026,u=1){if(h!==Vs&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:u},i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Va=class r extends Mt{constructor(e=1,t=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,p=2*u+d,f=2*n+s,v=i+1,m=new A,g=new A;for(let _=0;_<=f;_++){let x=0,M=0,w=0,T=0;if(_<=n){let L=_/n,P=L*Math.PI/2;M=-h-e*Math.cos(P),w=e*Math.sin(P),T=-e*Math.cos(P),x=L*u}else if(_<=n+s){let L=(_-n)/s;M=L*t-h,w=e,T=0,x=u+L*d}else{let L=(_-n-s)/n,P=L*Math.PI/2;M=h+e*Math.sin(P),w=e*Math.cos(P),T=e*Math.sin(P),x=u+d+L*u}let U=Math.max(0,Math.min(1,x/p)),B=0;_===0?B=.5/i:_===f&&(B=-.5/i);for(let L=0;L<=i;L++){let P=L/i,F=P*Math.PI*2,I=Math.sin(F),H=Math.cos(F);g.x=-w*H,g.y=M,g.z=w*I,o.push(g.x,g.y,g.z),m.set(-w*H,T,w*I),m.normalize(),l.push(m.x,m.y,m.z),c.push(P+B,U)}if(_>0){let L=(_-1)*v;for(let P=0;P<i;P++){let F=L+P,I=L+P+1,H=_*v+P,z=_*v+P+1;a.push(F,I,H),a.push(I,z,H)}}}this.setIndex(a),this.setAttribute("position",new qe(o,3)),this.setAttribute("normal",new qe(l,3)),this.setAttribute("uv",new qe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Si=class r extends Mt{constructor(e=1,t=32,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new A,h=new xe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new qe(a,3)),this.setAttribute("normal",new qe(o,3)),this.setAttribute("uv",new qe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ai=class r extends Mt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],p=[],f=0,v=[],m=n/2,g=0;function _(x){let M=f,w=new xe,T=new A,U=0,B=x===!0?e:t,L=x===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,m*L,0),d.push(0,L,0),p.push(.5,.5),f++;let P=f;for(let F=0;F<=i;F++){let I=F/i*l+o,H=Math.cos(I),z=Math.sin(I);T.x=B*z,T.y=m*L,T.z=B*H,u.push(T.x,T.y,T.z),d.push(0,L,0),w.x=.5*H+.5,w.y=.5*z*L+.5,p.push(w.x,w.y),f++}for(let F=0;F<i;F++){let I=M+F,H=P+F;x===!0?h.push(H,H+1,I):h.push(H+1,H,I),U+=3}c.addGroup(g,U,x===!0?1:2),g+=U}(function(){let x=new A,M=new A,w=0,T=(t-e)/n;for(let U=0;U<=s;U++){let B=[],L=U/s,P=L*(t-e)+e;for(let F=0;F<=i;F++){let I=F/i,H=I*l+o,z=Math.sin(H),q=Math.cos(H);M.x=P*z,M.y=-L*n+m,M.z=P*q,u.push(M.x,M.y,M.z),x.set(z,T,q).normalize(),d.push(x.x,x.y,x.z),p.push(I,1-L),B.push(f++)}v.push(B)}for(let U=0;U<i;U++)for(let B=0;B<s;B++){let L=v[B][U],P=v[B+1][U],F=v[B+1][U+1],I=v[B][U+1];(e>0||B!==0)&&(h.push(L,P,I),w+=3),(t>0||B!==s-1)&&(h.push(P,F,I),w+=3)}c.addGroup(g,w,0),g+=w})(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new qe(u,3)),this.setAttribute("normal",new qe(d,3)),this.setAttribute("uv",new qe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ha=class r extends ai{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},bi=class r extends Mt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];function o(p,f,v,m){let g=m+1,_=[];for(let x=0;x<=g;x++){_[x]=[];let M=p.clone().lerp(v,x/g),w=f.clone().lerp(v,x/g),T=g-x;for(let U=0;U<=T;U++)_[x][U]=U===0&&x===g?M:M.clone().lerp(w,U/T)}for(let x=0;x<g;x++)for(let M=0;M<2*(g-x)-1;M++){let w=Math.floor(M/2);M%2==0?(l(_[x][w+1]),l(_[x+1][w]),l(_[x][w])):(l(_[x][w+1]),l(_[x+1][w+1]),l(_[x+1][w]))}}function l(p){s.push(p.x,p.y,p.z)}function c(p,f){let v=3*p;f.x=e[v+0],f.y=e[v+1],f.z=e[v+2]}function h(p,f,v,m){m<0&&p.x===1&&(a[f]=p.x-1),v.x===0&&v.z===0&&(a[f]=m/2/Math.PI+.5)}function u(p){return Math.atan2(p.z,-p.x)}function d(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}(function(p){let f=new A,v=new A,m=new A;for(let g=0;g<t.length;g+=3)c(t[g+0],f),c(t[g+1],v),c(t[g+2],m),o(f,v,m,p)})(i),(function(p){let f=new A;for(let v=0;v<s.length;v+=3)f.x=s[v+0],f.y=s[v+1],f.z=s[v+2],f.normalize().multiplyScalar(p),s[v+0]=f.x,s[v+1]=f.y,s[v+2]=f.z})(n),(function(){let p=new A;for(let f=0;f<s.length;f+=3){p.x=s[f+0],p.y=s[f+1],p.z=s[f+2];let v=u(p)/2/Math.PI+.5,m=d(p)/Math.PI+.5;a.push(v,1-m)}(function(){let f=new A,v=new A,m=new A,g=new A,_=new xe,x=new xe,M=new xe;for(let w=0,T=0;w<s.length;w+=9,T+=6){f.set(s[w+0],s[w+1],s[w+2]),v.set(s[w+3],s[w+4],s[w+5]),m.set(s[w+6],s[w+7],s[w+8]),_.set(a[T+0],a[T+1]),x.set(a[T+2],a[T+3]),M.set(a[T+4],a[T+5]),g.copy(f).add(v).add(m).divideScalar(3);let U=u(g);h(_,T+0,f,U),h(x,T+2,v,U),h(M,T+4,m,U)}})(),(function(){for(let f=0;f<a.length;f+=6){let v=a[f+0],m=a[f+2],g=a[f+4],_=Math.max(v,m,g),x=Math.min(v,m,g);_>.9&&x<.1&&(v<.2&&(a[f+0]+=1),m<.2&&(a[f+2]+=1),g<.2&&(a[f+4]+=1))}})()})(),this.setAttribute("position",new qe(s,3)),this.setAttribute("normal",new qe(s.slice(),3)),this.setAttribute("uv",new qe(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},Wa=class r extends bi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Ma=new A,Sa=new A,Cl=new A,ba=new Un,Xa=class extends Mt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(Ra*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let f=0;f<l;f+=3){a?(c[0]=a.getX(f),c[1]=a.getX(f+1),c[2]=a.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:v,b:m,c:g}=ba;if(v.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),ba.getNormal(Cl),u[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let _=0;_<3;_++){let x=(_+1)%3,M=u[_],w=u[x],T=ba[h[_]],U=ba[h[x]],B=`${M}_${w}`,L=`${w}_${M}`;L in d&&d[L]?(Cl.dot(d[L].normal)<=s&&(p.push(T.x,T.y,T.z),p.push(U.x,U.y,U.z)),d[L]=null):B in d||(d[B]={index0:c[_],index1:c[x],normal:Cl.clone()})}}for(let f in d)if(d[f]){let{index0:v,index1:m}=d[f];Ma.fromBufferAttribute(o,v),Sa.fromBufferAttribute(o,m),p.push(Ma.x,Ma.y,Ma.z),p.push(Sa.x,Sa.y,Sa.z)}this.setAttribute("position",new qe(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},on=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,s=n.length,a;a=t||e*n[s-1];let o,l=0,c=s-1;for(;l<=c;)if(i=Math.floor(l+(c-l)/2),o=n[i]-a,o<0)l=i+1;else{if(!(o>0)){c=i;break}c=i-1}if(i=c,n[i]===a)return i/(s-1);let h=n[i];return(i+(a-h)/(n[i+1]-h))/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new xe:new A);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new A,i=[],s=[],a=[],o=new A,l=new et;for(let p=0;p<=e;p++){let f=p/e;i[p]=this.getTangentAt(f,new A)}s[0]=new A,a[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(at(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(at(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(l.makeRotationAxis(i[f],p*f)),a[f].crossVectors(i[f],s[f])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Or=class extends on{constructor(e=0,t=0,n=1,i=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new xe){let n=t,i=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(s=a?0:i),this.aClockwise!==!0||a||(s===i?s=-i:s-=i);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},$a=class extends Or{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ic(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,i(a,o,d,p)},calc:function(s){let a=s*s;return r+e*s+t*a+n*(a*s)}}}var wa=new A,Rl=new Ic,Pl=new Ic,Il=new Ic,ja=class extends on{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new A){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=i[(c-1)%s]:(wa.subVectors(i[0],i[1]).add(i[0]),o=wa);let u=i[c%s],d=i[(c+1)%s];if(this.closed||c+2<s?l=i[(c+2)%s]:(wa.subVectors(i[s-1],i[s-2]).add(i[s-1]),l=wa),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(l),p);v<1e-4&&(v=1),f<1e-4&&(f=v),m<1e-4&&(m=v),Rl.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,f,v,m),Pl.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,f,v,m),Il.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,f,v,m)}else this.curveType==="catmullrom"&&(Rl.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),Pl.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),Il.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return n.set(Rl.calc(h),Pl.calc(h),Il.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new A().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function wh(r,e,t,n,i){let s=.5*(n-e),a=.5*(i-t),o=r*r;return(2*t-2*n+s+a)*(r*o)+(-3*t+3*n-2*s-a)*o+s*r+t}function ds(r,e,t,n){return(function(i,s){let a=1-i;return a*a*s})(r,e)+(function(i,s){return 2*(1-i)*i*s})(r,t)+(function(i,s){return i*i*s})(r,n)}function ps(r,e,t,n,i){return(function(s,a){let o=1-s;return o*o*o*a})(r,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(r,t)+(function(s,a){return 3*(1-s)*s*s*a})(r,n)+(function(s,a){return s*s*s*a})(r,i)}var Ts=class extends on{constructor(e=new xe,t=new xe,n=new xe,i=new xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new xe){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ps(e,i.x,s.x,a.x,o.x),ps(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},qa=class extends on{constructor(e=new A,t=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new A){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ps(e,i.x,s.x,a.x,o.x),ps(e,i.y,s.y,a.y,o.y),ps(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Es=class extends on{constructor(e=new xe,t=new xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new xe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ya=class extends on{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},As=class extends on{constructor(e=new xe,t=new xe,n=new xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new xe){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(ds(e,i.x,s.x,a.x),ds(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Cs=class extends on{constructor(e=new A,t=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(ds(e,i.x,s.x,a.x),ds(e,i.y,s.y,a.y),ds(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Rs=class extends on{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new xe){let n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(wh(o,l.x,c.x,h.x,u.x),wh(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new xe().fromArray(i))}return this}},Za=Object.freeze({__proto__:null,ArcCurve:$a,CatmullRomCurve3:ja,CubicBezierCurve:Ts,CubicBezierCurve3:qa,EllipseCurve:Or,LineCurve:Es,LineCurve3:Ya,QuadraticBezierCurve:As,QuadraticBezierCurve3:Cs,SplineCurve:Rs}),Ja=class extends on{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Za[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Za[i.type]().fromJSON(i))}return this}},Ps=class extends Ja{constructor(e){super(),this.type="Path",this.currentPoint=new xe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Es(this.currentPoint.clone(),new xe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new As(this.currentPoint.clone(),new xe(e,t),new xe(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){let o=new Ts(this.currentPoint.clone(),new xe(e,t),new xe(n,i),new xe(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Rs(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){let c=new Or(e,t,n,i,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Xi=class extends Ps{constructor(e){super(e),this.uuid=ei(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Ps().fromJSON(i))}return this}};function Vd(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=Th(r,0,i,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=(function(h,u,d,p){let f=[];for(let v=0,m=u.length;v<m;v++){let g=Th(h,u[v]*p,v<m-1?u[v+1]*p:h.length,p,!1);g===g.next&&(g.steiner=!0),f.push(Zd(g))}f.sort(jd);for(let v=0;v<f.length;v++)d=qd(f[v],d);return d})(r,e,s,t)),r.length>80*t){o=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=t;d<i;d+=t){let p=r[d],f=r[d+1];p<o&&(o=p),f<l&&(l=f),p>h&&(h=p),f>u&&(u=f)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Is(s,a,t,o,l,c,0),a}function Th(r,e,t,n,i){let s;if(i===(function(a,o,l,c){let h=0;for(let u=o,d=l-c;u<l;u+=c)h+=(a[d]-a[u])*(a[u+1]+a[d+1]),d=u;return h})(r,e,t,n)>0)for(let a=e;a<t;a+=n)s=Eh(a/n|0,r[a],r[a+1],s);else for(let a=t-n;a>=e;a-=n)s=Eh(a/n|0,r[a],r[a+1],s);return s&&Br(s,s.next)&&(Ds(s),s=s.next),s}function $i(r,e){if(!r)return r;e||(e=r);let t,n=r;do if(t=!1,n.steiner||!Br(n,n.next)&&bt(n.prev,n,n.next)!==0)n=n.next;else{if(Ds(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function Is(r,e,t,n,i,s,a){if(!r)return;!a&&s&&(function(l,c,h,u){let d=l;do d.z===0&&(d.z=Bl(d.x,d.y,c,h,u)),d.prevZ=d.prev,d.nextZ=d.next,d=d.next;while(d!==l);d.prevZ.nextZ=null,d.prevZ=null,(function(p){let f,v=1;do{let m,g=p;p=null;let _=null;for(f=0;g;){f++;let x=g,M=0;for(let T=0;T<v&&(M++,x=x.nextZ,x);T++);let w=v;for(;M>0||w>0&&x;)M!==0&&(w===0||!x||g.z<=x.z)?(m=g,g=g.nextZ,M--):(m=x,x=x.nextZ,w--),_?_.nextZ=m:p=m,m.prevZ=_,_=m;g=x}_.nextZ=null,v*=2}while(f>1)})(d)})(r,n,i,s);let o=r;for(;r.prev!==r.next;){let l=r.prev,c=r.next;if(s?Wd(r,n,i,s):Hd(r))e.push(l.i,r.i,c.i),Ds(r),r=c.next,o=c.next;else if((r=c)===o){a?a===1?Is(r=Xd($i(r),e),e,t,n,i,s,2):a===2&&$d(r,e,t,n,i,s):Is($i(r),e,t,n,i,s,1);break}}}function Hd(r){let e=r.prev,t=r,n=r.next;if(bt(e,t,n)>=0)return!1;let i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(i,s,a),u=Math.min(o,l,c),d=Math.max(i,s,a),p=Math.max(o,l,c),f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&us(i,o,s,l,a,c,f.x,f.y)&&bt(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Wd(r,e,t,n){let i=r.prev,s=r,a=r.next;if(bt(i,s,a)>=0)return!1;let o=i.x,l=s.x,c=a.x,h=i.y,u=s.y,d=a.y,p=Math.min(o,l,c),f=Math.min(h,u,d),v=Math.max(o,l,c),m=Math.max(h,u,d),g=Bl(p,f,e,t,n),_=Bl(v,m,e,t,n),x=r.prevZ,M=r.nextZ;for(;x&&x.z>=g&&M&&M.z<=_;){if(x.x>=p&&x.x<=v&&x.y>=f&&x.y<=m&&x!==i&&x!==a&&us(o,h,l,u,c,d,x.x,x.y)&&bt(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=p&&M.x<=v&&M.y>=f&&M.y<=m&&M!==i&&M!==a&&us(o,h,l,u,c,d,M.x,M.y)&&bt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=g;){if(x.x>=p&&x.x<=v&&x.y>=f&&x.y<=m&&x!==i&&x!==a&&us(o,h,l,u,c,d,x.x,x.y)&&bt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=_;){if(M.x>=p&&M.x<=v&&M.y>=f&&M.y<=m&&M!==i&&M!==a&&us(o,h,l,u,c,d,M.x,M.y)&&bt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Xd(r,e){let t=r;do{let n=t.prev,i=t.next.next;!Br(n,i)&&Du(n,t,t.next,i)&&Ls(n,i)&&Ls(i,n)&&(e.push(n.i,t.i,i.i),Ds(t),Ds(t.next),t=r=i),t=t.next}while(t!==r);return $i(t)}function $d(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Jd(a,o)){let l=Uu(a,o);return a=$i(a,a.next),l=$i(l,l.next),Is(a,e,t,n,i,s,0),void Is(l,e,t,n,i,s,0)}o=o.next}a=a.next}while(a!==r)}function jd(r,e){let t=r.x-e.x;return t===0&&(t=r.y-e.y,t===0)&&(t=(r.next.y-r.y)/(r.next.x-r.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function qd(r,e){let t=(function(i,s){let a=s,o=i.x,l=i.y,c,h=-1/0;if(Br(i,a))return a;do{if(Br(i,a.next))return a.next;if(l<=a.y&&l>=a.next.y&&a.next.y!==a.y){let v=a.x+(l-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(v<=o&&v>h&&(h=v,c=a.x<a.next.x?a:a.next,v===o))return c}a=a.next}while(a!==s);if(!c)return null;let u=c,d=c.x,p=c.y,f=1/0;a=c;do{if(o>=a.x&&a.x>=d&&o!==a.x&&Lu(l<p?o:h,l,d,p,l<p?h:o,l,a.x,a.y)){let v=Math.abs(l-a.y)/(o-a.x);Ls(a,i)&&(v<f||v===f&&(a.x>c.x||a.x===c.x&&Yd(c,a)))&&(c=a,f=v)}a=a.next}while(a!==u);return c})(r,e);if(!t)return e;let n=Uu(t,r);return $i(n,n.next),$i(t,t.next)}function Yd(r,e){return bt(r.prev,r,e.prev)<0&&bt(e.next,r,r.next)<0}function Bl(r,e,t,n,i){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*i|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*i|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Zd(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Lu(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function us(r,e,t,n,i,s,a,o){return!(r===a&&e===o)&&Lu(r,e,t,n,i,s,a,o)}function Jd(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!(function(t,n){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==n.i&&i.next.i!==n.i&&Du(i,i.next,t,n))return!0;i=i.next}while(i!==t);return!1})(r,e)&&(Ls(r,e)&&Ls(e,r)&&(function(t,n){let i=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do i.y>o!=i.next.y>o&&i.next.y!==i.y&&a<(i.next.x-i.x)*(o-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==t);return s})(r,e)&&(bt(r.prev,r,e.prev)||bt(r,e.prev,e))||Br(r,e)&&bt(r.prev,r,r.next)>0&&bt(e.prev,e,e.next)>0)}function bt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Br(r,e){return r.x===e.x&&r.y===e.y}function Du(r,e,t,n){let i=Ea(bt(r,e,t)),s=Ea(bt(r,e,n)),a=Ea(bt(t,n,r)),o=Ea(bt(t,n,e));return i!==s&&a!==o||!(i!==0||!Ta(r,t,e))||!(s!==0||!Ta(r,n,e))||!(a!==0||!Ta(t,r,n))||!(o!==0||!Ta(t,e,n))}function Ta(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Ea(r){return r>0?1:r<0?-1:0}function Ls(r,e){return bt(r.prev,r,r.next)<0?bt(r,e,r.next)>=0&&bt(r,r.prev,e)>=0:bt(r,e,r.prev)<0||bt(r,r.next,e)<0}function Uu(r,e){let t=zl(r.i,r.x,r.y),n=zl(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Eh(r,e,t,n){let i=zl(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ds(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function zl(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}var kl=class{static triangulate(e,t,n=2){return Vd(e,t,n)}},Nn=class r{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return .5*n}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];Ah(e),Ch(n,e);let a=e.length;t.forEach(Ah);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Ch(n,t[l]);let o=kl.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Ah(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Ch(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var zr=class r extends Mt{constructor(e=new Xi([new xe(.5,.5),new xe(-.5,.5),new xe(-.5,-.5),new xe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Kd,x,M,w,T,U,B=!1;g&&(x=g.getSpacedPoints(h),B=!0,d=!1,M=g.computeFrenetFrames(h,!1),w=new A,T=new A,U=new A),d||(m=0,p=0,f=0,v=0);let L=o.extractPoints(c),P=L.shape,F=L.holes;if(!Nn.isClockWise(P)){P=P.reverse();for(let G=0,y=F.length;G<y;G++){let E=F[G];Nn.isClockWise(E)&&(F[G]=E.reverse())}}function I(G){let y=10000000000000001e-36,E=G[0];for(let N=1;N<=G.length;N++){let O=N%G.length,X=G[O],Q=X.x-E.x,W=X.y-E.y,le=Q*Q+W*W,ie=Math.max(Math.abs(X.x),Math.abs(X.y),Math.abs(E.x),Math.abs(E.y));le<=y*ie*ie?(G.splice(O,1),N--):E=X}}I(P),F.forEach(I);let H=F.length,z=P;for(let G=0;G<H;G++){let y=F[G];P=P.concat(y)}function q(G,y,E){return y||console.error("THREE.ExtrudeGeometry: vec does not exist"),G.clone().addScaledVector(y,E)}let V=P.length;function ne(G,y,E){let N,O,X,Q=G.x-y.x,W=G.y-y.y,le=E.x-G.x,ie=E.y-G.y,$=Q*Q+W*W,ae=Q*ie-W*le;if(Math.abs(ae)>Number.EPSILON){let ue=Math.sqrt($),we=Math.sqrt(le*le+ie*ie),me=y.x-W/ue,Te=y.y+Q/ue,Ie=((E.x-ie/we-me)*ie-(E.y+le/we-Te)*le)/(Q*ie-W*le);N=me+Q*Ie-G.x,O=Te+W*Ie-G.y;let pe=N*N+O*O;if(pe<=2)return new xe(N,O);X=Math.sqrt(pe/2)}else{let ue=!1;Q>Number.EPSILON?le>Number.EPSILON&&(ue=!0):Q<-Number.EPSILON?le<-Number.EPSILON&&(ue=!0):Math.sign(W)===Math.sign(ie)&&(ue=!0),ue?(N=-W,O=Q,X=Math.sqrt($)):(N=Q,O=W,X=Math.sqrt($/2))}return new xe(N/X,O/X)}let ee=[];for(let G=0,y=z.length,E=y-1,N=G+1;G<y;G++,E++,N++)E===y&&(E=0),N===y&&(N=0),ee[G]=ne(z[G],z[E],z[N]);let re=[],se,J,oe=ee.concat();for(let G=0,y=H;G<y;G++){let E=F[G];se=[];for(let N=0,O=E.length,X=O-1,Q=N+1;N<O;N++,X++,Q++)X===O&&(X=0),Q===O&&(Q=0),se[N]=ne(E[N],E[X],E[Q]);re.push(se),oe=oe.concat(se)}if(m===0)J=Nn.triangulateShape(z,F);else{let G=[],y=[];for(let E=0;E<m;E++){let N=E/m,O=p*Math.cos(N*Math.PI/2),X=f*Math.sin(N*Math.PI/2)+v;for(let Q=0,W=z.length;Q<W;Q++){let le=q(z[Q],ee[Q],X);de(le.x,le.y,-O),N===0&&G.push(le)}for(let Q=0,W=H;Q<W;Q++){let le=F[Q];se=re[Q];let ie=[];for(let $=0,ae=le.length;$<ae;$++){let ue=q(le[$],se[$],X);de(ue.x,ue.y,-O),N===0&&ie.push(ue)}N===0&&y.push(ie)}}J=Nn.triangulateShape(G,y)}let Me=J.length,Pe=f+v;for(let G=0;G<V;G++){let y=d?q(P[G],oe[G],Pe):P[G];B?(T.copy(M.normals[0]).multiplyScalar(y.x),w.copy(M.binormals[0]).multiplyScalar(y.y),U.copy(x[0]).add(T).add(w),de(U.x,U.y,U.z)):de(y.x,y.y,0)}for(let G=1;G<=h;G++)for(let y=0;y<V;y++){let E=d?q(P[y],oe[y],Pe):P[y];B?(T.copy(M.normals[G]).multiplyScalar(E.x),w.copy(M.binormals[G]).multiplyScalar(E.y),U.copy(x[G]).add(T).add(w),de(U.x,U.y,U.z)):de(E.x,E.y,u/h*G)}for(let G=m-1;G>=0;G--){let y=G/m,E=p*Math.cos(y*Math.PI/2),N=f*Math.sin(y*Math.PI/2)+v;for(let O=0,X=z.length;O<X;O++){let Q=q(z[O],ee[O],N);de(Q.x,Q.y,u+E)}for(let O=0,X=F.length;O<X;O++){let Q=F[O];se=re[O];for(let W=0,le=Q.length;W<le;W++){let ie=q(Q[W],se[W],N);B?de(ie.x,ie.y+x[h-1].y,x[h-1].x+E):de(ie.x,ie.y,u+E)}}}function ye(G,y){let E=G.length;for(;--E>=0;){let N=E,O=E-1;O<0&&(O=G.length-1);for(let X=0,Q=h+2*m;X<Q;X++){let W=V*X,le=V*(X+1);R(y+N+W,y+O+W,y+O+le,y+N+le)}}}function de(G,y,E){l.push(G),l.push(y),l.push(E)}function Ve(G,y,E){S(G),S(y),S(E);let N=i.length/3,O=_.generateTopUV(n,i,N-3,N-2,N-1);k(O[0]),k(O[1]),k(O[2])}function R(G,y,E,N){S(G),S(y),S(N),S(y),S(E),S(N);let O=i.length/3,X=_.generateSideWallUV(n,i,O-6,O-3,O-2,O-1);k(X[0]),k(X[1]),k(X[3]),k(X[1]),k(X[2]),k(X[3])}function S(G){i.push(l[3*G+0]),i.push(l[3*G+1]),i.push(l[3*G+2])}function k(G){s.push(G.x),s.push(G.y)}(function(){let G=i.length/3;if(d){let y=0,E=V*y;for(let N=0;N<Me;N++){let O=J[N];Ve(O[2]+E,O[1]+E,O[0]+E)}y=h+2*m,E=V*y;for(let N=0;N<Me;N++){let O=J[N];Ve(O[0]+E,O[1]+E,O[2]+E)}}else{for(let y=0;y<Me;y++){let E=J[y];Ve(E[2],E[1],E[0])}for(let y=0;y<Me;y++){let E=J[y];Ve(E[0]+V*h,E[1]+V*h,E[2]+V*h)}}n.addGroup(G,i.length/3-G,0)})(),(function(){let G=i.length/3,y=0;ye(z,y),y+=z.length;for(let E=0,N=F.length;E<N;E++){let O=F[E];ye(O,y),y+=O.length}n.addGroup(G,i.length/3-G,1)})()}this.setAttribute("position",new qe(i,3)),this.setAttribute("uv",new qe(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,i){if(i.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];i.shapes.push(o.uuid)}else i.shapes.push(t.uuid);return i.options=Object.assign({},n),n.extrudePath!==void 0&&(i.options.extrudePath=n.extrudePath.toJSON()),i})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Za[i.type]().fromJSON(i)),new r(n,e.options)}},Kd={generateTopUV:function(r,e,t,n,i){let s=e[3*t],a=e[3*t+1],o=e[3*n],l=e[3*n+1],c=e[3*i],h=e[3*i+1];return[new xe(s,a),new xe(o,l),new xe(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*i],p=e[3*i+1],f=e[3*i+2],v=e[3*s],m=e[3*s+1],g=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new xe(a,1-l),new xe(c,1-u),new xe(d,1-f),new xe(v,1-g)]:[new xe(o,1-l),new xe(h,1-u),new xe(p,1-f),new xe(m,1-g)]}},Ka=class r extends bi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},kr=class r extends Mt{constructor(e=[new xe(0,-.5),new xe(.5,0),new xe(0,.5)],t=12,n=0,i=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=at(i,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new A,d=new xe,p=new A,f=new A,v=new A,m=0,g=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,p.x=1*g,p.y=-m,p.z=0*g,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,p.x=1*g,p.y=-m,p.z=0*g,f.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(f)}for(let _=0;_<=t;_++){let x=n+_*h*i,M=Math.sin(x),w=Math.cos(x);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*M,u.y=e[T].y,u.z=e[T].x*w,a.push(u.x,u.y,u.z),d.x=_/t,d.y=T/(e.length-1),o.push(d.x,d.y);let U=l[3*T+0]*M,B=l[3*T+1],L=l[3*T+0]*w;c.push(U,B,L)}}for(let _=0;_<t;_++)for(let x=0;x<e.length-1;x++){let M=x+_*e.length,w=M,T=M+e.length,U=M+e.length+1,B=M+1;s.push(w,T,B),s.push(U,B,T)}this.setIndex(s),this.setAttribute("position",new qe(a,3)),this.setAttribute("uv",new qe(o,2)),this.setAttribute("normal",new qe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},Qa=class r extends bi{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},zn=class r extends Mt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,p=[],f=[],v=[],m=[];for(let g=0;g<h;g++){let _=g*d-a;for(let x=0;x<c;x++){let M=x*u-s;f.push(M,-_,0),v.push(0,0,1),m.push(x/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<o;_++){let x=_+c*g,M=_+c*(g+1),w=_+1+c*(g+1),T=_+1+c*g;p.push(x,M,T),p.push(M,w,T)}this.setIndex(p),this.setAttribute("position",new qe(f,3)),this.setAttribute("normal",new qe(v,3)),this.setAttribute("uv",new qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},eo=class r extends Mt{constructor(e=.5,t=1,n=32,i=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(i=Math.max(1,i)),p=new A,f=new xe;for(let v=0;v<=i;v++){for(let m=0;m<=n;m++){let g=s+m/n*a;p.x=u*Math.cos(g),p.y=u*Math.sin(g),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}u+=d}for(let v=0;v<i;v++){let m=v*(n+1);for(let g=0;g<n;g++){let _=g+m,x=_,M=_+n+1,w=_+n+2,T=_+1;o.push(x,M,T),o.push(M,w,T)}}this.setIndex(o),this.setAttribute("position",new qe(l,3)),this.setAttribute("normal",new qe(c,3)),this.setAttribute("uv",new qe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},to=class r extends Mt{constructor(e=new Xi([new xe(0,.5),new xe(-.5,-.5),new xe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=i.length/3,d=h.extractPoints(t),p=d.shape,f=d.holes;Nn.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,g=f.length;m<g;m++){let _=f[m];Nn.isClockWise(_)===!0&&(f[m]=_.reverse())}let v=Nn.triangulateShape(p,f);for(let m=0,g=f.length;m<g;m++){let _=f[m];p=p.concat(_)}for(let m=0,g=p.length;m<g;m++){let _=p[m];i.push(_.x,_.y,0),s.push(0,0,1),a.push(_.x,_.y)}for(let m=0,g=v.length;m<g;m++){let _=v[m],x=_[0]+u,M=_[1]+u,w=_[2]+u;n.push(x,M,w),l+=3}}this.setIndex(n),this.setAttribute("position",new qe(i,3)),this.setAttribute("normal",new qe(s,3)),this.setAttribute("uv",new qe(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let a=t[i];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let i=0,s=e.shapes.length;i<s;i++){let a=t[e.shapes[i]];n.push(a)}return new r(n,e.curveSegments)}},ln=class r extends Mt{constructor(e=1,t=32,n=16,i=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new A,d=new A,p=[],f=[],v=[],m=[];for(let g=0;g<=n;g++){let _=[],x=g/n,M=0;g===0&&a===0?M=.5/t:g===n&&l===Math.PI&&(M=-.5/t);for(let w=0;w<=t;w++){let T=w/t;u.x=-e*Math.cos(i+T*s)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(i+T*s)*Math.sin(a+x*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(T+M,1-x),_.push(c++)}h.push(_)}for(let g=0;g<n;g++)for(let _=0;_<t;_++){let x=h[g][_+1],M=h[g][_],w=h[g+1][_],T=h[g+1][_+1];(g!==0||a>0)&&p.push(x,M,T),(g!==n-1||l<Math.PI)&&p.push(M,w,T)}this.setIndex(p),this.setAttribute("position",new qe(f,3)),this.setAttribute("normal",new qe(v,3)),this.setAttribute("uv",new qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},no=class r extends bi{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},wn=class r extends Mt{constructor(e=1,t=.4,n=12,i=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new A,u=new A,d=new A;for(let p=0;p<=n;p++)for(let f=0;f<=i;f++){let v=f/i*s,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(f/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let f=1;f<=i;f++){let v=(i+1)*p+f-1,m=(i+1)*(p-1)+f-1,g=(i+1)*(p-1)+f,_=(i+1)*p+f;a.push(v,m,_),a.push(m,g,_)}this.setIndex(a),this.setAttribute("position",new qe(o,3)),this.setAttribute("normal",new qe(l,3)),this.setAttribute("uv",new qe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},io=class r extends Mt{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],l=[],c=[],h=[],u=new A,d=new A,p=new A,f=new A,v=new A,m=new A,g=new A;for(let x=0;x<=n;++x){let M=x/n*s*Math.PI*2;_(M,s,a,e,p),_(M+.01,s,a,e,f),m.subVectors(f,p),g.addVectors(f,p),v.crossVectors(m,g),g.crossVectors(v,m),v.normalize(),g.normalize();for(let w=0;w<=i;++w){let T=w/i*Math.PI*2,U=-t*Math.cos(T),B=t*Math.sin(T);u.x=p.x+(U*g.x+B*v.x),u.y=p.y+(U*g.y+B*v.y),u.z=p.z+(U*g.z+B*v.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(x/n),h.push(w/i)}}for(let x=1;x<=n;x++)for(let M=1;M<=i;M++){let w=(i+1)*(x-1)+(M-1),T=(i+1)*x+(M-1),U=(i+1)*x+M,B=(i+1)*(x-1)+M;o.push(w,T,B),o.push(T,U,B)}function _(x,M,w,T,U){let B=Math.cos(x),L=Math.sin(x),P=w/M*x,F=Math.cos(P);U.x=T*(2+F)*.5*B,U.y=T*(2+F)*L*.5,U.z=T*Math.sin(P)*.5}this.setIndex(o),this.setAttribute("position",new qe(l,3)),this.setAttribute("normal",new qe(c,3)),this.setAttribute("uv",new qe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},ro=class r extends Mt{constructor(e=new Cs(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new A,l=new A,c=new xe,h=new A,u=[],d=[],p=[],f=[];function v(m){h=e.getPointAt(m/t,h);let g=a.normals[m],_=a.binormals[m];for(let x=0;x<=i;x++){let M=x/i*Math.PI*2,w=Math.sin(M),T=-Math.cos(M);l.x=T*g.x+w*_.x,l.y=T*g.y+w*_.y,l.z=T*g.z+w*_.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let m=0;m<t;m++)v(m);v(s===!1?t:0),(function(){for(let m=0;m<=t;m++)for(let g=0;g<=i;g++)c.x=m/t,c.y=g/i,p.push(c.x,c.y)})(),(function(){for(let m=1;m<=t;m++)for(let g=1;g<=i;g++){let _=(i+1)*(m-1)+(g-1),x=(i+1)*m+(g-1),M=(i+1)*m+g,w=(i+1)*(m-1)+g;f.push(_,x,w),f.push(x,M,w)}})()})(),this.setIndex(f),this.setAttribute("position",new qe(u,3)),this.setAttribute("normal",new qe(d,3)),this.setAttribute("uv",new qe(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new Za[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},so=class extends Mt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new A,s=new A;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,f=d+u.count;p<f;p+=3)for(let v=0;v<3;v++){let m=o.getX(p+v),g=o.getX(p+(v+1)%3);i.fromBufferAttribute(a,m),s.fromBufferAttribute(a,g),Rh(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;i.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),Rh(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new qe(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Rh(r,e,t){let n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)!==!0&&t.has(i)!==!0&&(t.add(n),t.add(i),!0)}var ig=Object.freeze({__proto__:null,BoxGeometry:si,CapsuleGeometry:Va,CircleGeometry:Si,ConeGeometry:Ha,CylinderGeometry:ai,DodecahedronGeometry:Wa,EdgesGeometry:Xa,ExtrudeGeometry:zr,IcosahedronGeometry:Ka,LatheGeometry:kr,OctahedronGeometry:Qa,PlaneGeometry:zn,PolyhedronGeometry:bi,RingGeometry:eo,ShapeGeometry:to,SphereGeometry:ln,TetrahedronGeometry:no,TorusGeometry:wn,TorusKnotGeometry:io,TubeGeometry:ro,WireframeGeometry:so});var cn=class extends ii{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},At=class extends cn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return at(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ao=class extends ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},oo=class extends ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Aa(r,e){return r&&r.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r):r}function Qd(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var ji=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},lo=class extends ji{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ul,endingEnd:Ul}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Nl:s=e,o=2*t-n;break;case Fl:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Nl:a=e,l=2*n-t;break;case Fl:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=.5*(n-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(n-t)/(i-t),v=f*f,m=v*f,g=-d*m+2*d*v-d*f,_=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*f+1,x=(-1-p)*m+(1.5+p)*v+.5*f,M=p*m-p*v;for(let w=0;w!==o;++w)s[w]=g*a[h+w]+_*a[c+w]+x*a[l+w]+M*a[u+w];return s}},co=class extends ji{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},ho=class extends ji{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},an=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Aa(t,this.TimeBufferType),this.values=Aa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Aa(e.times,Array),values:Aa(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new co(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new lo(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ms:t=this.InterpolantFactoryMethodDiscrete;break;case La:t=this.InterpolantFactoryMethodLinear;break;case Ca:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ms;case this.InterpolantFactoryMethodLinear:return La;case this.InterpolantFactoryMethodSmooth:return Ca}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Qd(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ca,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(i)l=!0;else{let h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){let f=t[h+p];if(f!==t[u+p]||f!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};an.prototype.ValueTypeName="",an.prototype.TimeBufferType=Float32Array,an.prototype.ValueBufferType=Float32Array,an.prototype.DefaultInterpolation=La;var _i=class extends an{constructor(e,t,n){super(e,t,n)}};_i.prototype.ValueTypeName="bool",_i.prototype.ValueBufferType=Array,_i.prototype.DefaultInterpolation=ms,_i.prototype.InterpolantFactoryMethodLinear=void 0,_i.prototype.InterpolantFactoryMethodSmooth=void 0;var uo=class extends an{constructor(e,t,n,i){super(e,t,n,i)}};uo.prototype.ValueTypeName="color";var po=class extends an{constructor(e,t,n,i){super(e,t,n,i)}};po.prototype.ValueTypeName="number";var mo=class extends ji{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)xn.slerpFlat(s,0,a,c-o,a,c,l);return s}},Us=class extends an{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new mo(this.times,this.values,this.getValueSize(),e)}};Us.prototype.ValueTypeName="quaternion",Us.prototype.InterpolantFactoryMethodSmooth=void 0;var xi=class extends an{constructor(e,t,n){super(e,t,n)}};xi.prototype.ValueTypeName="string",xi.prototype.ValueBufferType=Array,xi.prototype.DefaultInterpolation=ms,xi.prototype.InterpolantFactoryMethodLinear=void 0,xi.prototype.InterpolantFactoryMethodSmooth=void 0;var fo=class extends an{constructor(e,t,n,i){super(e,t,n,i)}};fo.prototype.ValueTypeName="vector";var Pa={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},go=class{constructor(e,t,n){let i=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,a===!1&&i.onStart!==void 0&&i.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,l),o===l&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],f=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}},Nu=new go,Gr=class{constructor(e){this.manager=e!==void 0?e:Nu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Gr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ar=new WeakMap,vo=class extends Gr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Pa.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=Ar.get(a);u===void 0&&(u=[],Ar.set(a,u)),u.push({onLoad:t,onError:i})}return a}let o=Ir("img");function l(){h(),t&&t(this);let u=Ar.get(this)||[];for(let d=0;d<u.length;d++){let p=u[d];p.onLoad&&p.onLoad(this)}Ar.delete(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),Pa.remove(`image:${e}`);let d=Ar.get(this)||[];for(let p=0;p<d.length;p++){let f=d[p];f.onError&&f.onError(u)}Ar.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Pa.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var qi=class extends Gr{constructor(e){super(e)}load(e,t,n,i){let s=new Yt,a=new vo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},Ns=class extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Fs=class extends Ns{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ll=new et,Ph=new A,Ih=new A,Gl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.mapType=Gn,this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mi,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ph.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ph),Ih.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ih),t.updateMatrixWorld(),Ll.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ll),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ll)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var rg=new et,sg=new A,ag=new A;var Os=class extends Dr{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Vl=class extends Gl{constructor(){super(new Os(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vr=class extends Ns{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new Vl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var og=new et,lg=new et,cg=new et;var _o=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var hg=new A,ug=new xn,dg=new A,pg=new A,mg=new A;var fg=new A,gg=new xn,vg=new A,_g=new A;var Lc="\\[\\]\\.:\\/",ep=new RegExp("["+Lc+"]","g"),Dl="[^"+Lc+"]",tp="[^"+Lc.replace("\\.","")+"]",np=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Dl)+/(WCOD+)?/.source.replace("WCOD",tp)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dl)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dl)+"$"),ip=["material","materials","bones","map"],xt=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ep,"")}static parseTrackName(e){let t=np.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);ip.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xt.Composite=class{constructor(r,e,t){let n=t||xt.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,n)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray],xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var xg=new Float32Array(1);var yg=new et;var Mg=new xe;var Sg=new A,bg=new A;var wg=new A;var Tg=new A,Eg=new et,Ag=new et;var Cg=new A,Rg=new De,Pg=new De;var Ig=new A,Lg=new A,Dg=new A;var Ug=new A,Ng=new Dr;var Fg=new yn;var Og=new A;function Dc(r,e,t,n){let i=(function(s){switch(s){case Gn:case Yl:return{byteLength:1,components:1};case Xr:case Zl:case $r:return{byteLength:2,components:1};case Io:case Lo:return{byteLength:2,components:4};case Ji:case Po:case Vn:return{byteLength:4,components:1};case Jl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(n);switch(t){case 1021:return r*e;case Kl:case Do:return r*e/i.components*i.byteLength;case 1030:case 1031:return r*e*2/i.components*i.byteLength;case 1022:return r*e*3/i.components*i.byteLength;case Tn:case 1033:return r*e*4/i.components*i.byteLength;case 33776:case 33777:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(r,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(r,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37808:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(r/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(r/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"178"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="178");function sd(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function sp(r){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=e.get(t);n&&(r.deleteBuffer(n.buffer),e.delete(t))},update:function(t,n){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let i=e.get(t);if(i===void 0)e.set(t,(function(s,a){let o=s.array,l=s.usage,c=o.byteLength,h=r.createBuffer(),u;if(r.bindBuffer(a,h),r.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)u=r.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)u=r.HALF_FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?r.HALF_FLOAT:r.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=r.SHORT;else if(o instanceof Uint32Array)u=r.UNSIGNED_INT;else if(o instanceof Int32Array)u=r.INT;else if(o instanceof Int8Array)u=r.BYTE;else if(o instanceof Uint8Array)u=r.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=r.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:c}})(t,n));else if(i.version<t.version){if(i.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let l=a.array,c=a.updateRanges;if(r.bindBuffer(o,s),c.length===0)r.bufferSubData(o,0,l);else{c.sort((u,d)=>u.start-d.start);let h=0;for(let u=1;u<c.length;u++){let d=c[h],p=c[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,c[h]=p)}c.length=h+1;for(let u=0,d=c.length;u<d;u++){let p=c[u];r.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(i.buffer,t,n),i.version=t.version}}}}var nt={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Re={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Hn={basic:{uniforms:$t([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:$t([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new De(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:$t([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:$t([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:$t([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new De(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:$t([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:$t([Re.points,Re.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:$t([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:$t([Re.common,Re.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:$t([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:$t([Re.sprite,Re.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:$t([Re.common,Re.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:$t([Re.lights,Re.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Hn.physical={uniforms:$t([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var zo={r:0,b:0,g:0},er=new Sn,ap=new et;function op(r,e,t,n,i,s,a){let o=new De(0),l,c,h=s===!0?0:1,u=null,d=0,p=null;function f(m){let g=m.isScene===!0?m.background:null;return g&&g.isTexture&&(g=(m.backgroundBlurriness>0?t:e).get(g)),g}function v(m,g){m.getRGB(zo,Pc(r)),n.buffers.color.setClear(zo.r,zo.g,zo.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(m,g=1){o.set(m),h=g,v(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(m){h=m,v(o,h)},render:function(m){let g=!1,_=f(m);_===null?v(o,h):_&&_.isColor&&(v(_,1),g=!0);let x=r.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,a):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||g)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))},addToRenderList:function(m,g){let _=f(g);_&&(_.isCubeTexture||_.mapping===ks)?(c===void 0&&(c=new $e(new si(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:Qi(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(x,M,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),er.copy(g.backgroundRotation),er.x*=-1,er.y*=-1,er.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(er.y*=-1,er.z*=-1),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ap.makeRotationFromEuler(er)),c.material.toneMapped=ut.getTransfer(_.colorSpace)!==dt,u===_&&d===_.version&&p===r.toneMapping||(c.material.needsUpdate=!0,u=_,d=_.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new $e(new zn(2,2),new bn({name:"BackgroundMaterial",uniforms:Qi(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.toneMapped=ut.getTransfer(_.colorSpace)!==dt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),u===_&&d===_.version&&p===r.toneMapping||(l.material.needsUpdate=!0,u=_,d=_.version,p=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))},dispose:function(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}}}function lp(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=c(null),s=i,a=!1;function o(g){return r.bindVertexArray(g)}function l(g){return r.deleteVertexArray(g)}function c(g){let _=[],x=[],M=[];for(let w=0;w<t;w++)_[w]=0,x[w]=0,M[w]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:_,enabledAttributes:x,attributeDivisors:M,object:g,attributes:{},index:null}}function h(){let g=s.newAttributes;for(let _=0,x=g.length;_<x;_++)g[_]=0}function u(g){d(g,0)}function d(g,_){let x=s.newAttributes,M=s.enabledAttributes,w=s.attributeDivisors;x[g]=1,M[g]===0&&(r.enableVertexAttribArray(g),M[g]=1),w[g]!==_&&(r.vertexAttribDivisor(g,_),w[g]=_)}function p(){let g=s.newAttributes,_=s.enabledAttributes;for(let x=0,M=_.length;x<M;x++)_[x]!==g[x]&&(r.disableVertexAttribArray(x),_[x]=0)}function f(g,_,x,M,w,T,U){U===!0?r.vertexAttribIPointer(g,_,x,w,T):r.vertexAttribPointer(g,_,x,M,w,T)}function v(){m(),a=!0,s!==i&&(s=i,o(s.object))}function m(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:function(g,_,x,M,w){let T=!1,U=(function(B,L,P){let F=P.wireframe===!0,I=n[B.id];I===void 0&&(I={},n[B.id]=I);let H=I[L.id];H===void 0&&(H={},I[L.id]=H);let z=H[F];return z===void 0&&(z=c(r.createVertexArray()),H[F]=z),z})(M,x,_);s!==U&&(s=U,o(s.object)),T=(function(B,L,P,F){let I=s.attributes,H=L.attributes,z=0,q=P.getAttributes();for(let V in q)if(q[V].location>=0){let ne=I[V],ee=H[V];if(ee===void 0&&(V==="instanceMatrix"&&B.instanceMatrix&&(ee=B.instanceMatrix),V==="instanceColor"&&B.instanceColor&&(ee=B.instanceColor)),ne===void 0||ne.attribute!==ee||ee&&ne.data!==ee.data)return!0;z++}return s.attributesNum!==z||s.index!==F})(g,M,x,w),T&&(function(B,L,P,F){let I={},H=L.attributes,z=0,q=P.getAttributes();for(let V in q)if(q[V].location>=0){let ne=H[V];ne===void 0&&(V==="instanceMatrix"&&B.instanceMatrix&&(ne=B.instanceMatrix),V==="instanceColor"&&B.instanceColor&&(ne=B.instanceColor));let ee={};ee.attribute=ne,ne&&ne.data&&(ee.data=ne.data),I[V]=ee,z++}s.attributes=I,s.attributesNum=z,s.index=F})(g,M,x,w),w!==null&&e.update(w,r.ELEMENT_ARRAY_BUFFER),(T||a)&&(a=!1,(function(B,L,P,F){h();let I=F.attributes,H=P.getAttributes(),z=L.defaultAttributeValues;for(let q in H){let V=H[q];if(V.location>=0){let ne=I[q];if(ne===void 0&&(q==="instanceMatrix"&&B.instanceMatrix&&(ne=B.instanceMatrix),q==="instanceColor"&&B.instanceColor&&(ne=B.instanceColor)),ne!==void 0){let ee=ne.normalized,re=ne.itemSize,se=e.get(ne);if(se===void 0)continue;let J=se.buffer,oe=se.type,Me=se.bytesPerElement,Pe=oe===r.INT||oe===r.UNSIGNED_INT||ne.gpuType===Po;if(ne.isInterleavedBufferAttribute){let ye=ne.data,de=ye.stride,Ve=ne.offset;if(ye.isInstancedInterleavedBuffer){for(let R=0;R<V.locationSize;R++)d(V.location+R,ye.meshPerAttribute);B.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let R=0;R<V.locationSize;R++)u(V.location+R);r.bindBuffer(r.ARRAY_BUFFER,J);for(let R=0;R<V.locationSize;R++)f(V.location+R,re/V.locationSize,oe,ee,de*Me,(Ve+re/V.locationSize*R)*Me,Pe)}else{if(ne.isInstancedBufferAttribute){for(let ye=0;ye<V.locationSize;ye++)d(V.location+ye,ne.meshPerAttribute);B.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ye=0;ye<V.locationSize;ye++)u(V.location+ye);r.bindBuffer(r.ARRAY_BUFFER,J);for(let ye=0;ye<V.locationSize;ye++)f(V.location+ye,re/V.locationSize,oe,ee,re*Me,re/V.locationSize*ye*Me,Pe)}}else if(z!==void 0){let ee=z[q];if(ee!==void 0)switch(ee.length){case 2:r.vertexAttrib2fv(V.location,ee);break;case 3:r.vertexAttrib3fv(V.location,ee);break;case 4:r.vertexAttrib4fv(V.location,ee);break;default:r.vertexAttrib1fv(V.location,ee)}}}}p()})(g,_,x,M),w!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(w).buffer))},reset:v,resetDefaultState:m,dispose:function(){v();for(let g in n){let _=n[g];for(let x in _){let M=_[x];for(let w in M)l(M[w].object),delete M[w];delete _[x]}delete n[g]}},releaseStatesOfGeometry:function(g){if(n[g.id]===void 0)return;let _=n[g.id];for(let x in _){let M=_[x];for(let w in M)l(M[w].object),delete M[w];delete _[x]}delete n[g.id]},releaseStatesOfProgram:function(g){for(let _ in n){let x=n[_];if(x[g.id]===void 0)continue;let M=x[g.id];for(let w in M)l(M[w].object),delete M[w];delete x[g.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function cp(r,e,t){let n;function i(s,a,o){o!==0&&(r.drawArraysInstanced(n,s,a,o),t.update(a,n,o))}this.setMode=function(s){n=s},this.render=function(s,a){r.drawArrays(n,s,a),t.update(a,n,1)},this.renderInstances=i,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,s,0,a,0,o);let l=0;for(let c=0;c<o;c++)l+=a[c];t.update(l,n,1)},this.renderMultiDrawInstances=function(s,a,o,l){if(o===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<s.length;h++)i(s[h],a[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(n,s,0,a,0,l,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u]*l[u];t.update(h,n,1)}}}function hp(r,e,t,n){let i;function s(d){if(d==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=t.logarithmicDepthBuffer===!0,c=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let d=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:s,textureFormatReadable:function(d){return d===Tn||n.convert(d)===r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){let p=d===$r&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==Gn&&n.convert(d)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==Vn&&!p)},precision:a,logarithmicDepthBuffer:l,reverseDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:r.getParameter(r.MAX_TEXTURE_SIZE),maxCubemapSize:r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:r.getParameter(r.MAX_VERTEX_ATTRIBS),maxVertexUniforms:r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:r.getParameter(r.MAX_VARYING_VECTORS),maxFragmentUniforms:r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:r.getParameter(r.MAX_SAMPLES)}}function up(r){let e=this,t=null,n=0,i=!1,s=!1,a=new sn,o=new tt,l={value:null,needsUpdate:!1};function c(h,u,d,p){let f=h!==null?h.length:0,v=null;if(f!==0){if(v=l.value,p!==!0||v===null){let m=d+4*f,g=u.matrixWorldInverse;o.getNormalMatrix(g),(v===null||v.length<m)&&(v=new Float32Array(m));for(let _=0,x=d;_!==f;++_,x+=4)a.copy(h[_]).applyMatrix4(g,o),a.normal.toArray(v,x),v[x+3]=a.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,v}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||i;return i=u,n=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,f=h.clipIntersection,v=h.clipShadows,m=r.get(h);if(!i||p===null||p.length===0||s&&!v)s?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let g=s?0:n,_=4*g,x=m.clippingState||null;l.value=x,x=c(p,u,_,d);for(let M=0;M!==_;++M)x[M]=t[M];m.clippingState=x,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=g}}}function dp(r){let e=new WeakMap;function t(i,s){return s===Ao?i.mapping=Wr:s===Co&&(i.mapping=Yi),i}function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping;if(s===Ao||s===Co){if(e.has(i))return t(e.get(i).texture,i.mapping);{let a=i.image;if(a&&a.height>0){let o=new za(a.height);return o.fromEquirectangularTexture(r,i),e.set(i,o),i.addEventListener("dispose",n),t(o.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}var Fu=[.125,.215,.35,.446,.526,.582],Ws=20,Uc=new Os,Ou=new De,Nc=null,Fc=0,Oc=0,Bc=!1,nr=(1+Math.sqrt(5))/2,qr=1/nr,Bu=[new A(-nr,qr,0),new A(nr,qr,0),new A(-qr,0,nr),new A(qr,0,nr),new A(0,nr,-qr),new A(0,nr,qr),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],pp=new A,Zr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){let{size:a=256,position:o=pp}=s;Nc=this._renderer.getRenderTarget(),Fc=this._renderer.getActiveCubeFace(),Oc=this._renderer.getActiveMipmapLevel(),Bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nc,Fc,Oc),this._renderer.xr.enabled=Bc,e.scissorTest=!1,ko(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wr||e.mapping===Yi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nc=this._renderer.getRenderTarget(),Fc=this._renderer.getActiveCubeFace(),Oc=this._renderer.getActiveMipmapLevel(),Bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:On,minFilter:On,generateMipmaps:!1,type:$r,format:Tn,colorSpace:Gi,depthBuffer:!1},i=zu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zu(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],l=[],c=[],h=a,u=a-4+1+Fu.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);l.push(p);let f=1/p;d>a-4?f=Fu[d-a+4-1]:d===0&&(f=0),c.push(f);let v=1/(p-2),m=-v,g=1+v,_=[m,m,g,m,g,g,m,m,g,g,m,g],x=6,M=6,w=3,T=2,U=1,B=new Float32Array(w*M*x),L=new Float32Array(T*M*x),P=new Float32Array(U*M*x);for(let I=0;I<x;I++){let H=I%3*2/3-1,z=I>2?0:-1,q=[H,z,0,H+2/3,z,0,H+2/3,z+1,0,H,z,0,H+2/3,z+1,0,H,z+1,0];B.set(q,w*M*I),L.set(_,T*M*I);let V=[I,I,I,I,I,I];P.set(V,U*M*I)}let F=new Mt;F.setAttribute("position",new Et(B,w)),F.setAttribute("uv",new Et(L,T)),F.setAttribute("faceIndex",new Et(P,U)),o.push(F),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}})(s)),this._blurMaterial=(function(a,o,l){let c=new Float32Array(Ws),h=new A(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:Ws,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})})(s,e,t)}return i}_compileMaterial(e){let t=new $e(this._lodPlanes[0],e);this._renderer.compile(t,Uc)}_sceneToCubeUV(e,t,n,i,s){let a=new Ht(90,1,t,n),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,u=c.toneMapping;c.getClearColor(Ou),c.toneMapping=oi,c.autoClear=!1;let d=new ri({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),p=new $e(new si,d),f=!1,v=e.background;v?v.isColor&&(d.color.copy(v),e.background=null,f=!0):(d.color.copy(Ou),f=!0);for(let m=0;m<6;m++){let g=m%3;g===0?(a.up.set(0,o[m],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x+l[m],s.y,s.z)):g===1?(a.up.set(0,0,o[m]),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y+l[m],s.z)):(a.up.set(0,o[m],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y,s.z+l[m]));let _=this._cubeSize;ko(i,g*_,m>2?_:0,_,_),c.setRenderTarget(i),f&&c.render(p,a),c.render(e,a)}p.geometry.dispose(),p.material.dispose(),c.toneMapping=u,c.autoClear=h,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Wr||e.mapping===Yi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ku());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new $e(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;ko(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,Uc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Bu[(i-s-1)%Bu.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new $e(this._lodPlanes[i],c),u=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,f=s/p,v=isFinite(s)?1+Math.floor(3*f):Ws;v>Ws&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to 20`);let m=[],g=0;for(let M=0;M<Ws;++M){let w=M/f,T=Math.exp(-w*w/2);m.push(T),M===0?g+=T:M<v&&(g+=2*T)}for(let M=0;M<m.length;M++)m[M]=m[M]/g;u.envMap.value=e.texture,u.samples.value=v,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=p,u.mipInt.value=_-n;let x=this._sizeLods[i];ko(t,3*x*(i>_-4?i-_+4:0),4*(this._cubeSize-x),3*x,2*x),l.setRenderTarget(t),l.render(h,Uc)}};function zu(r,e,t){let n=new Bn(r,e,t);return n.texture.mapping=ks,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ko(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function ku(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Gu(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function qc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mp(r){let e=new WeakMap,t=null;function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping,a=s===Ao||s===Co,o=s===Wr||s===Yi;if(a||o){let l=e.get(i),c=l!==void 0?l.texture.pmremVersion:0;if(i.isRenderTargetTexture&&i.pmremVersion!==c)return t===null&&(t=new Zr(r)),l=a?t.fromEquirectangular(i,l):t.fromCubemap(i,l),l.texture.pmremVersion=i.pmremVersion,e.set(i,l),l.texture;if(l!==void 0)return l.texture;{let h=i.image;return a&&h&&h.height>0||o&&h&&(function(u){let d=0,p=6;for(let f=0;f<p;f++)u[f]!==void 0&&d++;return d===p})(h)?(t===null&&(t=new Zr(r)),l=a?t.fromEquirectangular(i):t.fromCubemap(i),l.texture.pmremVersion=i.pmremVersion,e.set(i,l),i.addEventListener("dispose",n),l.texture):null}}}return i},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function fp(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Vi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function gp(r,e,t,n){let i={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);c.removeEventListener("dispose",a),delete i[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(h!==null){let v=h.array;d=h.version;for(let m=0,g=v.length;m<g;m+=3){let _=v[m+0],x=v[m+1],M=v[m+2];c.push(_,x,x,M,M,_)}}else{if(u===void 0)return;{let v=u.array;d=u.version;for(let m=0,g=v.length/3-1;m<g;m+=3){let _=m+0,x=m+1,M=m+2;c.push(_,x,x,M,M,_)}}}let p=new(Rc(c)?ys:xs)(c,1);p.version=d;let f=s.get(l);f&&e.remove(f),s.set(l,p)}return{get:function(l,c){return i[c.id]===!0||(c.addEventListener("dispose",a),i[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let h in c)e.update(c[h],r.ARRAY_BUFFER)},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function vp(r,e,t){let n,i,s;function a(o,l,c){c!==0&&(r.drawElementsInstanced(n,l,i,o*s,c),t.update(l,n,c))}this.setMode=function(o){n=o},this.setIndex=function(o){i=o.type,s=o.bytesPerElement},this.render=function(o,l){r.drawElements(n,l,i,o*s),t.update(l,n,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,l,0,i,o,0,c);let h=0;for(let u=0;u<c;u++)h+=l[u];t.update(h,n,1)},this.renderMultiDrawInstances=function(o,l,c,h){if(c===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/s,l[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(n,l,0,i,o,0,h,0,c);let d=0;for(let p=0;p<c;p++)d+=l[p]*h[p];t.update(d,n,1)}}}function _p(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,i){switch(e.calls++,n){case r.TRIANGLES:e.triangles+=i*(t/3);break;case r.LINES:e.lines+=i*(t/2);break;case r.LINE_STRIP:e.lines+=i*(t-1);break;case r.LINE_LOOP:e.lines+=i*t;break;case r.POINTS:e.points+=i*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function xp(r,e,t){let n=new WeakMap,i=new yt;return{update:function(s,a,o){let l=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,u=n.get(a);if(u===void 0||u.count!==h){let B=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",B)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,v=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],g=a.morphAttributes.color||[],_=0;d===!0&&(_=1),p===!0&&(_=2),f===!0&&(_=3);let x=a.attributes.position.count*_,M=1;x>e.maxTextureSize&&(M=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let w=new Float32Array(x*M*4*h),T=new vs(w,x,M,h);T.type=Vn,T.needsUpdate=!0;let U=4*_;for(let L=0;L<h;L++){let P=v[L],F=m[L],I=g[L],H=x*M*4*L;for(let z=0;z<P.count;z++){let q=z*U;d===!0&&(i.fromBufferAttribute(P,z),w[H+q+0]=i.x,w[H+q+1]=i.y,w[H+q+2]=i.z,w[H+q+3]=0),p===!0&&(i.fromBufferAttribute(F,z),w[H+q+4]=i.x,w[H+q+5]=i.y,w[H+q+6]=i.z,w[H+q+7]=0),f===!0&&(i.fromBufferAttribute(I,z),w[H+q+8]=i.x,w[H+q+9]=i.y,w[H+q+10]=i.z,w[H+q+11]=I.itemSize===4?i.w:1)}}u={count:h,texture:T,size:new xe(x,M)},n.set(a,u),a.addEventListener("dispose",B)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let d=0;for(let f=0;f<l.length;f++)d+=l[f];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(r,"morphTargetBaseInfluence",p),o.getUniforms().setValue(r,"morphTargetInfluences",l)}o.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}}}function yp(r,e,t,n){let i=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,l=a.geometry,c=e.get(a,l);if(i.get(c)!==o&&(e.update(c),i.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),i.get(a)!==o&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;i.get(h)!==o&&(h.update(),i.set(h,o))}return c},dispose:function(){i=new WeakMap}}}var ad=new Yt,Vu=new ws(1,1),od=new vs,ld=new Oa,cd=new Ms,Hu=[],Wu=[],Xu=new Float32Array(16),$u=new Float32Array(9),ju=new Float32Array(4);function Jr(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Hu[i];if(s===void 0&&(s=new Float32Array(i),Hu[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Dt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ut(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ho(r,e){let t=Wu[e];t===void 0&&(t=new Int32Array(e),Wu[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Mp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Sp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;r.uniform2fv(this.addr,e),Ut(t,e)}}function bp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;r.uniform3fv(this.addr,e),Ut(t,e)}}function wp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;r.uniform4fv(this.addr,e),Ut(t,e)}}function Tp(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;ju.set(n),r.uniformMatrix2fv(this.addr,!1,ju),Ut(t,n)}}function Ep(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;$u.set(n),r.uniformMatrix3fv(this.addr,!1,$u),Ut(t,n)}}function Ap(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;Xu.set(n),r.uniformMatrix4fv(this.addr,!1,Xu),Ut(t,n)}}function Cp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Rp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;r.uniform2iv(this.addr,e),Ut(t,e)}}function Pp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;r.uniform3iv(this.addr,e),Ut(t,e)}}function Ip(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;r.uniform4iv(this.addr,e),Ut(t,e)}}function Lp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Dp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;r.uniform2uiv(this.addr,e),Ut(t,e)}}function Up(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;r.uniform3uiv(this.addr,e),Ut(t,e)}}function Np(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;r.uniform4uiv(this.addr,e),Ut(t,e)}}function Fp(r,e,t){let n=this.cache,i=t.allocateTextureUnit(),s;n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),this.type===r.SAMPLER_2D_SHADOW?(Vu.compareFunction=Ac,s=Vu):s=ad,t.setTexture2D(e||s,i)}function Op(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ld,i)}function Bp(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||cd,i)}function zp(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||od,i)}function kp(r,e){r.uniform1fv(this.addr,e)}function Gp(r,e){let t=Jr(e,this.size,2);r.uniform2fv(this.addr,t)}function Vp(r,e){let t=Jr(e,this.size,3);r.uniform3fv(this.addr,t)}function Hp(r,e){let t=Jr(e,this.size,4);r.uniform4fv(this.addr,t)}function Wp(r,e){let t=Jr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Xp(r,e){let t=Jr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function $p(r,e){let t=Jr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function jp(r,e){r.uniform1iv(this.addr,e)}function qp(r,e){r.uniform2iv(this.addr,e)}function Yp(r,e){r.uniform3iv(this.addr,e)}function Zp(r,e){r.uniform4iv(this.addr,e)}function Jp(r,e){r.uniform1uiv(this.addr,e)}function Kp(r,e){r.uniform2uiv(this.addr,e)}function Qp(r,e){r.uniform3uiv(this.addr,e)}function em(r,e){r.uniform4uiv(this.addr,e)}function tm(r,e,t){let n=this.cache,i=e.length,s=Ho(t,i);Dt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||ad,s[a])}function nm(r,e,t){let n=this.cache,i=e.length,s=Ho(t,i);Dt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||ld,s[a])}function im(r,e,t){let n=this.cache,i=e.length,s=Ho(t,i);Dt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||cd,s[a])}function rm(r,e,t){let n=this.cache,i=e.length,s=Ho(t,i);Dt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||od,s[a])}var kc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(i){switch(i){case 5126:return Mp;case 35664:return Sp;case 35665:return bp;case 35666:return wp;case 35674:return Tp;case 35675:return Ep;case 35676:return Ap;case 5124:case 35670:return Cp;case 35667:case 35671:return Rp;case 35668:case 35672:return Pp;case 35669:case 35673:return Ip;case 5125:return Lp;case 36294:return Dp;case 36295:return Up;case 36296:return Np;case 35678:case 36198:case 36298:case 36306:case 35682:return Fp;case 35679:case 36299:case 36307:return Op;case 35680:case 36300:case 36308:case 36293:return Bp;case 36289:case 36303:case 36311:case 36292:return zp}})(t.type)}},Gc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(i){switch(i){case 5126:return kp;case 35664:return Gp;case 35665:return Vp;case 35666:return Hp;case 35674:return Wp;case 35675:return Xp;case 35676:return $p;case 5124:case 35670:return jp;case 35667:case 35671:return qp;case 35668:case 35672:return Yp;case 35669:case 35673:return Zp;case 5125:return Jp;case 36294:return Kp;case 36295:return Qp;case 36296:return em;case 35678:case 36198:case 36298:case 36306:case 35682:return tm;case 35679:case 36299:case 36307:return nm;case 35680:case 36300:case 36308:case 36293:return im;case 36289:case 36303:case 36311:case 36292:return rm}})(t.type)}},Vc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},zc=/(\w+)(\])?(\[|\.)?/g;function qu(r,e){r.seq.push(e),r.map[e.id]=e}function sm(r,e,t){let n=r.name,i=n.length;for(zc.lastIndex=0;;){let s=zc.exec(n),a=zc.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===i){qu(t,c===void 0?new kc(o,r,e):new Gc(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new Vc(o),qu(t,h)),t=h}}}var Yr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i);sm(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Yu(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var am=0,Zu=new tt;function Ju(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+(function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let f=p+1;h.push(`${f===l?">":" "} ${f}: ${c[p]}`)}return h.join(`
`)})(r.getShaderSource(e),a)}return i}function om(r,e){let t=(function(n){ut._getMatrix(Zu,ut.workingColorSpace,n);let i=`mat3( ${Zu.elements.map(s=>s.toFixed(4))} )`;switch(ut.getTransfer(n)){case fs:return[i,"LinearTransferOETF"];case dt:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[i,"LinearTransferOETF"]}})(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function lm(r,e){let t;switch(e){case ru:t="Linear";break;case su:t="Reinhard";break;case au:t="Cineon";break;case ou:t="ACESFilmic";break;case cu:t="AgX";break;case Eo:t="Neutral";break;case lu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Go=new A;function cm(){return ut.getLuminanceCoefficients(Go),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Go.x.toFixed(4)}, ${Go.y.toFixed(4)}, ${Go.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xs(r){return r!==""}function Ku(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var hm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hc(r){return r.replace(hm,dm)}var um=new Map;function dm(r,e){let t=nt[e];if(t===void 0){let n=um.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return Hc(t)}var pm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ed(r){return r.replace(pm,mm)}function mm(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function td(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fm(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(F){let I="SHADOWMAP_TYPE_BASIC";return F.shadowMapType===Wl?I="SHADOWMAP_TYPE_PCF":F.shadowMapType===Uh?I="SHADOWMAP_TYPE_PCF_SOFT":F.shadowMapType===kn&&(I="SHADOWMAP_TYPE_VSM"),I})(t),c=(function(F){let I="ENVMAP_TYPE_CUBE";if(F.envMap)switch(F.envMapMode){case Wr:case Yi:I="ENVMAP_TYPE_CUBE";break;case ks:I="ENVMAP_TYPE_CUBE_UV"}return I})(t),h=(function(F){let I="ENVMAP_MODE_REFLECTION";return F.envMap&&F.envMapMode===Yi&&(I="ENVMAP_MODE_REFRACTION"),I})(t),u=(function(F){let I="ENVMAP_BLENDING_NONE";if(F.envMap)switch(F.combine){case tu:I="ENVMAP_BLENDING_MULTIPLY";break;case nu:I="ENVMAP_BLENDING_MIX";break;case iu:I="ENVMAP_BLENDING_ADD"}return I})(t),d=(function(F){let I=F.envMapCubeUVHeight;if(I===null)return null;let H=Math.log2(I)-2,z=1/I;return{texelWidth:1/(3*Math.max(Math.pow(2,H),112)),texelHeight:z,maxMip:H}})(t),p=(function(F){return[F.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",F.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)})(t),f=(function(F){let I=[];for(let H in F){let z=F[H];z!==!1&&I.push("#define "+H+" "+z)}return I.join(`
`)})(s),v=i.createProgram(),m,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Xs).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Xs).join(`
`),g.length>0&&(g+=`
`)):(m=[td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),g=[td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==oi?"#define TONE_MAPPING":"",t.toneMapping!==oi?nt.tonemapping_pars_fragment:"",t.toneMapping!==oi?lm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,om("linearToOutputTexel",t.outputColorSpace),cm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xs).join(`
`)),a=Hc(a),a=Ku(a,t),a=Qu(a,t),o=Hc(o),o=Ku(o,t),o=Qu(o,t),a=ed(a),o=ed(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let x=_+m+a,M=_+g+o,w=Yu(i,i.VERTEX_SHADER,x),T=Yu(i,i.FRAGMENT_SHADER,M);function U(F){if(r.debug.checkShaderErrors){let I=i.getProgramInfoLog(v).trim(),H=i.getShaderInfoLog(w).trim(),z=i.getShaderInfoLog(T).trim(),q=!0,V=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,w,T);else{let ne=Ju(i,w,"vertex"),ee=Ju(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+I+`
`+ne+`
`+ee)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):H!==""&&z!==""||(V=!1);V&&(F.diagnostics={runnable:q,programLog:I,vertexShader:{log:H,prefix:m},fragmentShader:{log:z,prefix:g}})}i.deleteShader(w),i.deleteShader(T),B=new Yr(i,v),L=(function(I,H){let z={},q=I.getProgramParameter(H,I.ACTIVE_ATTRIBUTES);for(let V=0;V<q;V++){let ne=I.getActiveAttrib(H,V),ee=ne.name,re=1;ne.type===I.FLOAT_MAT2&&(re=2),ne.type===I.FLOAT_MAT3&&(re=3),ne.type===I.FLOAT_MAT4&&(re=4),z[ee]={type:ne.type,location:I.getAttribLocation(H,ee),locationSize:re}}return z})(i,v)}let B,L;i.attachShader(v,w),i.attachShader(v,T),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v),this.getUniforms=function(){return B===void 0&&U(this),B},this.getAttributes=function(){return L===void 0&&U(this),L};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(v,37297)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=am++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=T,this}var gm=0,Wc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Xc(e),t.set(e,n)),n}},Xc=class{constructor(e){this.id=gm++,this.code=e,this.usedTimes=0}};function vm(r,e,t,n,i,s,a){let o=new _s,l=new Wc,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,p=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(m){return c.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,g,_,x,M){let w=x.fog,T=M.geometry,U=m.isMeshStandardMaterial?x.environment:null,B=(m.isMeshStandardMaterial?t:e).get(m.envMap||U),L=B&&B.mapping===ks?B.image.height:null,P=f[m.type];m.precision!==null&&(p=i.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let F=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,I=F!==void 0?F.length:0,H,z,q,V,ne=0;if(T.morphAttributes.position!==void 0&&(ne=1),T.morphAttributes.normal!==void 0&&(ne=2),T.morphAttributes.color!==void 0&&(ne=3),P){let he=Hn[P];H=he.vertexShader,z=he.fragmentShader}else H=m.vertexShader,z=m.fragmentShader,l.update(m),q=l.getVertexShaderID(m),V=l.getFragmentShaderID(m);let ee=r.getRenderTarget(),re=r.state.buffers.depth.getReversed(),se=M.isInstancedMesh===!0,J=M.isBatchedMesh===!0,oe=!!m.map,Me=!!m.matcap,Pe=!!B,ye=!!m.aoMap,de=!!m.lightMap,Ve=!!m.bumpMap,R=!!m.normalMap,S=!!m.displacementMap,k=!!m.emissiveMap,G=!!m.metalnessMap,y=!!m.roughnessMap,E=m.anisotropy>0,N=m.clearcoat>0,O=m.dispersion>0,X=m.iridescence>0,Q=m.sheen>0,W=m.transmission>0,le=E&&!!m.anisotropyMap,ie=N&&!!m.clearcoatMap,$=N&&!!m.clearcoatNormalMap,ae=N&&!!m.clearcoatRoughnessMap,ue=X&&!!m.iridescenceMap,we=X&&!!m.iridescenceThicknessMap,me=Q&&!!m.sheenColorMap,Te=Q&&!!m.sheenRoughnessMap,Ie=!!m.specularMap,pe=!!m.specularColorMap,Ce=!!m.specularIntensityMap,Ge=W&&!!m.transmissionMap,Qe=W&&!!m.thicknessMap,Ee=!!m.gradientMap,ze=!!m.alphaMap,Y=m.alphaTest>0,be=!!m.alphaHash,Ue=!!m.extensions,Ae=oi;m.toneMapped&&(ee!==null&&ee.isXRRenderTarget!==!0||(Ae=r.toneMapping));let C={shaderID:P,shaderType:m.type,shaderName:m.name,vertexShader:H,fragmentShader:z,defines:m.defines,customVertexShaderID:q,customFragmentShaderID:V,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:J,batchingColor:J&&M._colorsTexture!==null,instancing:se,instancingColor:se&&M.instanceColor!==null,instancingMorph:se&&M.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ee===null?r.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Gi,alphaToCoverage:!!m.alphaToCoverage,map:oe,matcap:Me,envMap:Pe,envMapMode:Pe&&B.mapping,envMapCubeUVHeight:L,aoMap:ye,lightMap:de,bumpMap:Ve,normalMap:R,displacementMap:d&&S,emissiveMap:k,normalMapObjectSpace:R&&m.normalMapType===vu,normalMapTangentSpace:R&&m.normalMapType===gu,metalnessMap:G,roughnessMap:y,anisotropy:E,anisotropyMap:le,clearcoat:N,clearcoatMap:ie,clearcoatNormalMap:$,clearcoatRoughnessMap:ae,dispersion:O,iridescence:X,iridescenceMap:ue,iridescenceThicknessMap:we,sheen:Q,sheenColorMap:me,sheenRoughnessMap:Te,specularMap:Ie,specularColorMap:pe,specularIntensityMap:Ce,transmission:W,transmissionMap:Ge,thicknessMap:Qe,gradientMap:Ee,opaque:m.transparent===!1&&m.blending===Bs&&m.alphaToCoverage===!1,alphaMap:ze,alphaTest:Y,alphaHash:be,combine:m.combine,mapUv:oe&&v(m.map.channel),aoMapUv:ye&&v(m.aoMap.channel),lightMapUv:de&&v(m.lightMap.channel),bumpMapUv:Ve&&v(m.bumpMap.channel),normalMapUv:R&&v(m.normalMap.channel),displacementMapUv:S&&v(m.displacementMap.channel),emissiveMapUv:k&&v(m.emissiveMap.channel),metalnessMapUv:G&&v(m.metalnessMap.channel),roughnessMapUv:y&&v(m.roughnessMap.channel),anisotropyMapUv:le&&v(m.anisotropyMap.channel),clearcoatMapUv:ie&&v(m.clearcoatMap.channel),clearcoatNormalMapUv:$&&v(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&v(m.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&v(m.iridescenceMap.channel),iridescenceThicknessMapUv:we&&v(m.iridescenceThicknessMap.channel),sheenColorMapUv:me&&v(m.sheenColorMap.channel),sheenRoughnessMapUv:Te&&v(m.sheenRoughnessMap.channel),specularMapUv:Ie&&v(m.specularMap.channel),specularColorMapUv:pe&&v(m.specularColorMap.channel),specularIntensityMapUv:Ce&&v(m.specularIntensityMap.channel),transmissionMapUv:Ge&&v(m.transmissionMap.channel),thicknessMapUv:Qe&&v(m.thicknessMap.channel),alphaMapUv:ze&&v(m.alphaMap.channel),vertexTangents:!!T.attributes.tangent&&(R||E),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,pointsUvs:M.isPoints===!0&&!!T.attributes.uv&&(oe||ze),fog:!!w,useFog:m.fog===!0,fogExp2:!!w&&w.isFogExp2,flatShading:m.flatShading===!0&&m.wireframe===!1,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:re,skinning:M.isSkinnedMesh===!0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:ne,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:r.shadowMap.enabled&&_.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ae,decodeVideoTexture:oe&&m.map.isVideoTexture===!0&&ut.getTransfer(m.map.colorSpace)===dt,decodeVideoTextureEmissive:k&&m.emissiveMap.isVideoTexture===!0&&ut.getTransfer(m.emissiveMap.colorSpace)===dt,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===Lt,flipSided:m.side===Xt,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:Ue&&m.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&m.extensions.multiDraw===!0||J)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return C.vertexUv1s=c.has(1),C.vertexUv2s=c.has(2),C.vertexUv3s=c.has(3),c.clear(),C},getProgramCacheKey:function(m){let g=[];if(m.shaderID?g.push(m.shaderID):(g.push(m.customVertexShaderID),g.push(m.customFragmentShaderID)),m.defines!==void 0)for(let _ in m.defines)g.push(_),g.push(m.defines[_]);return m.isRawShaderMaterial===!1&&((function(_,x){_.push(x.precision),_.push(x.outputColorSpace),_.push(x.envMapMode),_.push(x.envMapCubeUVHeight),_.push(x.mapUv),_.push(x.alphaMapUv),_.push(x.lightMapUv),_.push(x.aoMapUv),_.push(x.bumpMapUv),_.push(x.normalMapUv),_.push(x.displacementMapUv),_.push(x.emissiveMapUv),_.push(x.metalnessMapUv),_.push(x.roughnessMapUv),_.push(x.anisotropyMapUv),_.push(x.clearcoatMapUv),_.push(x.clearcoatNormalMapUv),_.push(x.clearcoatRoughnessMapUv),_.push(x.iridescenceMapUv),_.push(x.iridescenceThicknessMapUv),_.push(x.sheenColorMapUv),_.push(x.sheenRoughnessMapUv),_.push(x.specularMapUv),_.push(x.specularColorMapUv),_.push(x.specularIntensityMapUv),_.push(x.transmissionMapUv),_.push(x.thicknessMapUv),_.push(x.combine),_.push(x.fogExp2),_.push(x.sizeAttenuation),_.push(x.morphTargetsCount),_.push(x.morphAttributeCount),_.push(x.numDirLights),_.push(x.numPointLights),_.push(x.numSpotLights),_.push(x.numSpotLightMaps),_.push(x.numHemiLights),_.push(x.numRectAreaLights),_.push(x.numDirLightShadows),_.push(x.numPointLightShadows),_.push(x.numSpotLightShadows),_.push(x.numSpotLightShadowsWithMaps),_.push(x.numLightProbes),_.push(x.shadowMapType),_.push(x.toneMapping),_.push(x.numClippingPlanes),_.push(x.numClipIntersection),_.push(x.depthPacking)})(g,m),(function(_,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),x.gradientMap&&o.enable(22),_.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),_.push(o.mask)})(g,m),g.push(r.outputColorSpace)),g.push(m.customProgramCacheKey),g.join()},getUniforms:function(m){let g=f[m.type],_;if(g){let x=Hn[g];_=Pu.clone(x.uniforms)}else _=m.uniforms;return _},acquireProgram:function(m,g){let _;for(let x=0,M=h.length;x<M;x++){let w=h[x];if(w.cacheKey===g){_=w,++_.usedTimes;break}}return _===void 0&&(_=new fm(r,g,m,s),h.push(_)),_},releaseProgram:function(m){if(--m.usedTimes===0){let g=h.indexOf(m);h[g]=h[h.length-1],h.pop(),m.destroy()}},releaseShaderCache:function(m){l.remove(m)},programs:h,dispose:function(){l.dispose()}}}function _m(){let r=new WeakMap;return{has:function(e){return r.has(e)},get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,n){r.get(e)[t]=n},dispose:function(){r=new WeakMap}}}function xm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function nd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function id(){let r=[],e=0,t=[],n=[],i=[];function s(a,o,l,c,h,u){let d=r[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:u},r[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=c,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:i,init:function(){e=0,t.length=0,n.length=0,i.length=0},push:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.push(d):l.transparent===!0?i.push(d):t.push(d)},unshift:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.unshift(d):l.transparent===!0?i.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=r.length;a<o;a++){let l=r[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||xm),n.length>1&&n.sort(o||nd),i.length>1&&i.sort(o||nd)}}}function ym(){let r=new WeakMap;return{get:function(e,t){let n=r.get(e),i;return n===void 0?(i=new id,r.set(e,[i])):t>=n.length?(i=new id,n.push(i)):i=n[t],i},dispose:function(){r=new WeakMap}}}function Mm(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new De};break;case"SpotLight":t={position:new A,direction:new A,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new A,halfWidth:new A,halfHeight:new A}}return r[e.id]=t,t}}}var Sm=0;function bm(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function wm(r){let e=new Mm,t=(function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}})(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new A);let i=new A,s=new et,a=new et;return{setup:function(o){let l=0,c=0,h=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let u=0,d=0,p=0,f=0,v=0,m=0,g=0,_=0,x=0,M=0,w=0;o.sort(bm);for(let U=0,B=o.length;U<B;U++){let L=o[U],P=L.color,F=L.intensity,I=L.distance,H=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)l+=P.r*F,c+=P.g*F,h+=P.b*F;else if(L.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(L.sh.coefficients[z],F);w++}else if(L.isDirectionalLight){let z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let q=L.shadow,V=t.get(L);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,n.directionalShadow[u]=V,n.directionalShadowMap[u]=H,n.directionalShadowMatrix[u]=L.shadow.matrix,m++}n.directional[u]=z,u++}else if(L.isSpotLight){let z=e.get(L);z.position.setFromMatrixPosition(L.matrixWorld),z.color.copy(P).multiplyScalar(F),z.distance=I,z.coneCos=Math.cos(L.angle),z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),z.decay=L.decay,n.spot[p]=z;let q=L.shadow;if(L.map&&(n.spotLightMap[x]=L.map,x++,q.updateMatrices(L),L.castShadow&&M++),n.spotLightMatrix[p]=q.matrix,L.castShadow){let V=t.get(L);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,n.spotShadow[p]=V,n.spotShadowMap[p]=H,_++}p++}else if(L.isRectAreaLight){let z=e.get(L);z.color.copy(P).multiplyScalar(F),z.halfWidth.set(.5*L.width,0,0),z.halfHeight.set(0,.5*L.height,0),n.rectArea[f]=z,f++}else if(L.isPointLight){let z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),z.distance=L.distance,z.decay=L.decay,L.castShadow){let q=L.shadow,V=t.get(L);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,V.shadowCameraNear=q.camera.near,V.shadowCameraFar=q.camera.far,n.pointShadow[d]=V,n.pointShadowMap[d]=H,n.pointShadowMatrix[d]=L.shadow.matrix,g++}n.point[d]=z,d++}else if(L.isHemisphereLight){let z=e.get(L);z.skyColor.copy(L.color).multiplyScalar(F),z.groundColor.copy(L.groundColor).multiplyScalar(F),n.hemi[v]=z,v++}}f>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=c,n.ambient[2]=h;let T=n.hash;T.directionalLength===u&&T.pointLength===d&&T.spotLength===p&&T.rectAreaLength===f&&T.hemiLength===v&&T.numDirectionalShadows===m&&T.numPointShadows===g&&T.numSpotShadows===_&&T.numSpotMaps===x&&T.numLightProbes===w||(n.directional.length=u,n.spot.length=p,n.rectArea.length=f,n.point.length=d,n.hemi.length=v,n.directionalShadow.length=m,n.directionalShadowMap.length=m,n.pointShadow.length=g,n.pointShadowMap.length=g,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=m,n.pointShadowMatrix.length=g,n.spotLightMatrix.length=_+x-M,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=w,T.directionalLength=u,T.pointLength=d,T.spotLength=p,T.rectAreaLength=f,T.hemiLength=v,T.numDirectionalShadows=m,T.numPointShadows=g,T.numSpotShadows=_,T.numSpotMaps=x,T.numLightProbes=w,n.version=Sm++)},setupView:function(o,l){let c=0,h=0,u=0,d=0,p=0,f=l.matrixWorldInverse;for(let v=0,m=o.length;v<m;v++){let g=o[v];if(g.isDirectionalLight){let _=n.directional[c];_.direction.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(g.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(f),c++}else if(g.isSpotLight){let _=n.spot[u];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(f),_.direction.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(g.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(f),u++}else if(g.isRectAreaLight){let _=n.rectArea[d];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(f),a.identity(),s.copy(g.matrixWorld),s.premultiply(f),a.extractRotation(s),_.halfWidth.set(.5*g.width,0,0),_.halfHeight.set(0,.5*g.height,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),d++}else if(g.isPointLight){let _=n.point[h];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(f),h++}else if(g.isHemisphereLight){let _=n.hemi[p];_.direction.setFromMatrixPosition(g.matrixWorld),_.direction.transformDirection(f),p++}}},state:n}}function rd(r){let e=new wm(r),t=[],n=[],i={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){i.camera=s,t.length=0,n.length=0},state:i,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){n.push(s)}}}function Tm(r){let e=new WeakMap;return{get:function(t,n=0){let i=e.get(t),s;return i===void 0?(s=new rd(r),e.set(t,[s])):n>=i.length?(s=new rd(r),i.push(s)):s=i[n],s},dispose:function(){e=new WeakMap}}}function Em(r,e,t){let n=new Mi,i=new xe,s=new xe,a=new yt,o=new ao({depthPacking:fu}),l=new oo,c={},h=t.maxTextureSize,u={[wi]:Xt,[Xt]:wi,[Lt]:Lt},d=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new Mt;f.setAttribute("position",new Et(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new $e(f,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wl;let g=this.type;function _(T,U){let B=e.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Bn(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(U,null,B,d,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(U,null,B,p,v,null)}function x(T,U,B,L){let P=null,F=B.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(F!==void 0)P=F;else if(P=B.isPointLight===!0?l:o,r.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){let I=P.uuid,H=U.uuid,z=c[I];z===void 0&&(z={},c[I]=z);let q=z[H];q===void 0&&(q=P.clone(),z[H]=q,U.addEventListener("dispose",w)),P=q}return P.visible=U.visible,P.wireframe=U.wireframe,P.side=L===kn?U.shadowSide!==null?U.shadowSide:U.side:U.shadowSide!==null?U.shadowSide:u[U.side],P.alphaMap=U.alphaMap,P.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,P.map=U.map,P.clipShadows=U.clipShadows,P.clippingPlanes=U.clippingPlanes,P.clipIntersection=U.clipIntersection,P.displacementMap=U.displacementMap,P.displacementScale=U.displacementScale,P.displacementBias=U.displacementBias,P.wireframeLinewidth=U.wireframeLinewidth,P.linewidth=U.linewidth,B.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(r.properties.get(P).light=B),P}function M(T,U,B,L,P){if(T.visible===!1)return;if(T.layers.test(U.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===kn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,T.matrixWorld);let I=e.update(T),H=T.material;if(Array.isArray(H)){let z=I.groups;for(let q=0,V=z.length;q<V;q++){let ne=z[q],ee=H[ne.materialIndex];if(ee&&ee.visible){let re=x(T,ee,L,P);T.onBeforeShadow(r,T,U,B,I,re,ne),r.renderBufferDirect(B,null,I,re,T,ne),T.onAfterShadow(r,T,U,B,I,re,ne)}}}else if(H.visible){let z=x(T,H,L,P);T.onBeforeShadow(r,T,U,B,I,z,null),r.renderBufferDirect(B,null,I,z,T,null),T.onAfterShadow(r,T,U,B,I,z,null)}}let F=T.children;for(let I=0,H=F.length;I<H;I++)M(F[I],U,B,L,P)}function w(T){T.target.removeEventListener("dispose",w);for(let U in c){let B=c[U],L=T.target.uuid;L in B&&(B[L].dispose(),delete B[L])}}this.render=function(T,U,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let L=r.getRenderTarget(),P=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),I=r.state;I.setBlending(Ti),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let H=g!==kn&&this.type===kn,z=g===kn&&this.type!==kn;for(let q=0,V=T.length;q<V;q++){let ne=T[q],ee=ne.shadow;if(ee===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;i.copy(ee.mapSize);let re=ee.getFrameExtents();if(i.multiply(re),s.copy(ee.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/re.x),i.x=s.x*re.x,ee.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/re.y),i.y=s.y*re.y,ee.mapSize.y=s.y)),ee.map===null||H===!0||z===!0){let J=this.type!==kn?{minFilter:Fn,magFilter:Fn}:{};ee.map!==null&&ee.map.dispose(),ee.map=new Bn(i.x,i.y,J),ee.map.texture.name=ne.name+".shadowMap",ee.camera.updateProjectionMatrix()}r.setRenderTarget(ee.map),r.clear();let se=ee.getViewportCount();for(let J=0;J<se;J++){let oe=ee.getViewport(J);a.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),I.viewport(a),ee.updateMatrices(ne,J),n=ee.getFrustum(),M(U,B,ee.camera,ne,this.type)}ee.isPointLightShadow!==!0&&this.type===kn&&_(ee,B),ee.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(L,P,F)}}var Am={[xo]:yo,[Mo]:wo,[So]:To,[zs]:bo,[yo]:xo,[wo]:Mo,[To]:So,[bo]:zs};function Cm(r,e){let t=new function(){let y=!1,E=new yt,N=null,O=new yt(0,0,0,0);return{setMask:function(X){N===X||y||(r.colorMask(X,X,X,X),N=X)},setLocked:function(X){y=X},setClear:function(X,Q,W,le,ie){ie===!0&&(X*=le,Q*=le,W*=le),E.set(X,Q,W,le),O.equals(E)===!1&&(r.clearColor(X,Q,W,le),O.copy(E))},reset:function(){y=!1,N=null,O.set(-1,0,0,0)}}},n=new function(){let y=!1,E=!1,N=null,O=null,X=null;return{setReversed:function(Q){if(E!==Q){let W=e.get("EXT_clip_control");Q?W.clipControlEXT(W.LOWER_LEFT_EXT,W.ZERO_TO_ONE_EXT):W.clipControlEXT(W.LOWER_LEFT_EXT,W.NEGATIVE_ONE_TO_ONE_EXT),E=Q;let le=X;X=null,this.setClear(le)}},getReversed:function(){return E},setTest:function(Q){Q?Pe(r.DEPTH_TEST):ye(r.DEPTH_TEST)},setMask:function(Q){N===Q||y||(r.depthMask(Q),N=Q)},setFunc:function(Q){if(E&&(Q=Am[Q]),O!==Q){switch(Q){case xo:r.depthFunc(r.NEVER);break;case yo:r.depthFunc(r.ALWAYS);break;case Mo:r.depthFunc(r.LESS);break;case zs:r.depthFunc(r.LEQUAL);break;case So:r.depthFunc(r.EQUAL);break;case bo:r.depthFunc(r.GEQUAL);break;case wo:r.depthFunc(r.GREATER);break;case To:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}O=Q}},setLocked:function(Q){y=Q},setClear:function(Q){X!==Q&&(E&&(Q=1-Q),r.clearDepth(Q),X=Q)},reset:function(){y=!1,N=null,O=null,X=null,E=!1}}},i=new function(){let y=!1,E=null,N=null,O=null,X=null,Q=null,W=null,le=null,ie=null;return{setTest:function($){y||($?Pe(r.STENCIL_TEST):ye(r.STENCIL_TEST))},setMask:function($){E===$||y||(r.stencilMask($),E=$)},setFunc:function($,ae,ue){N===$&&O===ae&&X===ue||(r.stencilFunc($,ae,ue),N=$,O=ae,X=ue)},setOp:function($,ae,ue){Q===$&&W===ae&&le===ue||(r.stencilOp($,ae,ue),Q=$,W=ae,le=ue)},setLocked:function($){y=$},setClear:function($){ie!==$&&(r.clearStencil($),ie=$)},reset:function(){y=!1,E=null,N=null,O=null,X=null,Q=null,W=null,le=null,ie=null}}},s=new WeakMap,a=new WeakMap,o={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,f=null,v=null,m=null,g=null,_=null,x=null,M=new De(0,0,0),w=0,T=!1,U=null,B=null,L=null,P=null,F=null,I=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,z=0,q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=z>=1):q.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=z>=2);let V=null,ne={},ee=r.getParameter(r.SCISSOR_BOX),re=r.getParameter(r.VIEWPORT),se=new yt().fromArray(ee),J=new yt().fromArray(re);function oe(y,E,N,O){let X=new Uint8Array(4),Q=r.createTexture();r.bindTexture(y,Q),r.texParameteri(y,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(y,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let W=0;W<N;W++)y===r.TEXTURE_3D||y===r.TEXTURE_2D_ARRAY?r.texImage3D(E,0,r.RGBA,1,1,O,0,r.RGBA,r.UNSIGNED_BYTE,X):r.texImage2D(E+W,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,X);return Q}let Me={};function Pe(y){o[y]!==!0&&(r.enable(y),o[y]=!0)}function ye(y){o[y]!==!1&&(r.disable(y),o[y]=!1)}Me[r.TEXTURE_2D]=oe(r.TEXTURE_2D,r.TEXTURE_2D,1),Me[r.TEXTURE_CUBE_MAP]=oe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[r.TEXTURE_2D_ARRAY]=oe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Me[r.TEXTURE_3D]=oe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),t.setClear(0,0,0,1),n.setClear(1),i.setClear(0),Pe(r.DEPTH_TEST),n.setFunc(zs),S(!1),k(Hl),Pe(r.CULL_FACE),R(Ti);let de={[Hr]:r.FUNC_ADD,[Fh]:r.FUNC_SUBTRACT,[Oh]:r.FUNC_REVERSE_SUBTRACT};de[Bh]=r.MIN,de[zh]=r.MAX;let Ve={[kh]:r.ZERO,[Gh]:r.ONE,[Vh]:r.SRC_COLOR,[Wh]:r.SRC_ALPHA,[Zh]:r.SRC_ALPHA_SATURATE,[qh]:r.DST_COLOR,[$h]:r.DST_ALPHA,[Hh]:r.ONE_MINUS_SRC_COLOR,[Xh]:r.ONE_MINUS_SRC_ALPHA,[Yh]:r.ONE_MINUS_DST_COLOR,[jh]:r.ONE_MINUS_DST_ALPHA,[Jh]:r.CONSTANT_COLOR,[Kh]:r.ONE_MINUS_CONSTANT_COLOR,[Qh]:r.CONSTANT_ALPHA,[eu]:r.ONE_MINUS_CONSTANT_ALPHA};function R(y,E,N,O,X,Q,W,le,ie,$){if(y!==Ti){if(d===!1&&(Pe(r.BLEND),d=!0),y===Nh)X=X||E,Q=Q||N,W=W||O,E===f&&X===g||(r.blendEquationSeparate(de[E],de[X]),f=E,g=X),N===v&&O===m&&Q===_&&W===x||(r.blendFuncSeparate(Ve[N],Ve[O],Ve[Q],Ve[W]),v=N,m=O,_=Q,x=W),le.equals(M)!==!1&&ie===w||(r.blendColor(le.r,le.g,le.b,ie),M.copy(le),w=ie),p=y,T=!1;else if(y!==p||$!==T){if(f===Hr&&g===Hr||(r.blendEquation(r.FUNC_ADD),f=Hr,g=Hr),$)switch(y){case Bs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Xl:r.blendFunc(r.ONE,r.ONE);break;case $l:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case jl:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",y)}else switch(y){case Bs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Xl:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case $l:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",y)}v=null,m=null,_=null,x=null,M.set(0,0,0),w=0,p=y,T=$}}else d===!0&&(ye(r.BLEND),d=!1)}function S(y){U!==y&&(y?r.frontFace(r.CW):r.frontFace(r.CCW),U=y)}function k(y){y!==Lh?(Pe(r.CULL_FACE),y!==B&&(y===Hl?r.cullFace(r.BACK):y===Dh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ye(r.CULL_FACE),B=y}function G(y,E,N){y?(Pe(r.POLYGON_OFFSET_FILL),P===E&&F===N||(r.polygonOffset(E,N),P=E,F=N)):ye(r.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:n,stencil:i},enable:Pe,disable:ye,bindFramebuffer:function(y,E){return l[y]!==E&&(r.bindFramebuffer(y,E),l[y]=E,y===r.DRAW_FRAMEBUFFER&&(l[r.FRAMEBUFFER]=E),y===r.FRAMEBUFFER&&(l[r.DRAW_FRAMEBUFFER]=E),!0)},drawBuffers:function(y,E){let N=h,O=!1;if(y){N=c.get(E),N===void 0&&(N=[],c.set(E,N));let X=y.textures;if(N.length!==X.length||N[0]!==r.COLOR_ATTACHMENT0){for(let Q=0,W=X.length;Q<W;Q++)N[Q]=r.COLOR_ATTACHMENT0+Q;N.length=X.length,O=!0}}else N[0]!==r.BACK&&(N[0]=r.BACK,O=!0);O&&r.drawBuffers(N)},useProgram:function(y){return u!==y&&(r.useProgram(y),u=y,!0)},setBlending:R,setMaterial:function(y,E){y.side===Lt?ye(r.CULL_FACE):Pe(r.CULL_FACE);let N=y.side===Xt;E&&(N=!N),S(N),y.blending===Bs&&y.transparent===!1?R(Ti):R(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.blendColor,y.blendAlpha,y.premultipliedAlpha),n.setFunc(y.depthFunc),n.setTest(y.depthTest),n.setMask(y.depthWrite),t.setMask(y.colorWrite);let O=y.stencilWrite;i.setTest(O),O&&(i.setMask(y.stencilWriteMask),i.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),i.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass)),G(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?Pe(r.SAMPLE_ALPHA_TO_COVERAGE):ye(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:S,setCullFace:k,setLineWidth:function(y){y!==L&&(H&&r.lineWidth(y),L=y)},setPolygonOffset:G,setScissorTest:function(y){y?Pe(r.SCISSOR_TEST):ye(r.SCISSOR_TEST)},activeTexture:function(y){y===void 0&&(y=r.TEXTURE0+I-1),V!==y&&(r.activeTexture(y),V=y)},bindTexture:function(y,E,N){N===void 0&&(N=V===null?r.TEXTURE0+I-1:V);let O=ne[N];O===void 0&&(O={type:void 0,texture:void 0},ne[N]=O),O.type===y&&O.texture===E||(V!==N&&(r.activeTexture(N),V=N),r.bindTexture(y,E||Me[y]),O.type=y,O.texture=E)},unbindTexture:function(){let y=ne[V];y!==void 0&&y.type!==void 0&&(r.bindTexture(y.type,null),y.type=void 0,y.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},compressedTexImage3D:function(){try{r.compressedTexImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texImage2D:function(){try{r.texImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texImage3D:function(){try{r.texImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},updateUBOMapping:function(y,E){let N=a.get(E);N===void 0&&(N=new WeakMap,a.set(E,N));let O=N.get(y);O===void 0&&(O=r.getUniformBlockIndex(E,y.name),N.set(y,O))},uniformBlockBinding:function(y,E){let N=a.get(E).get(y);s.get(E)!==N&&(r.uniformBlockBinding(E,N,y.__bindingPointIndex),s.set(E,N))},texStorage2D:function(){try{r.texStorage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texStorage3D:function(){try{r.texStorage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texSubImage2D:function(){try{r.texSubImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texSubImage3D:function(){try{r.texSubImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},scissor:function(y){se.equals(y)===!1&&(r.scissor(y.x,y.y,y.z,y.w),se.copy(y))},viewport:function(y){J.equals(y)===!1&&(r.viewport(y.x,y.y,y.z,y.w),J.copy(y))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),n.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),o={},V=null,ne={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,f=null,v=null,m=null,g=null,_=null,x=null,M=new De(0,0,0),w=0,T=!1,U=null,B=null,L=null,P=null,F=null,se.set(0,0,r.canvas.width,r.canvas.height),J.set(0,0,r.canvas.width,r.canvas.height),t.reset(),n.reset(),i.reset()}}}function Rm(r,e,t,n,i,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new xe,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(R,S){return p?new OffscreenCanvas(R,S):Ir("canvas")}function v(R,S,k){let G=1,y=Ve(R);if((y.width>k||y.height>k)&&(G=k/Math.max(y.width,y.height)),G<1){if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let E=Math.floor(G*y.width),N=Math.floor(G*y.height);u===void 0&&(u=f(E,N));let O=S?f(E,N):u;return O.width=E,O.height=N,O.getContext("2d").drawImage(R,0,0,E,N),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+E+"x"+N+")."),O}return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),R}return R}function m(R){return R.generateMipmaps}function g(R){r.generateMipmap(R)}function _(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(R,S,k,G,y=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let E=S;if(S===r.RED&&(k===r.FLOAT&&(E=r.R32F),k===r.HALF_FLOAT&&(E=r.R16F),k===r.UNSIGNED_BYTE&&(E=r.R8)),S===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(E=r.R8UI),k===r.UNSIGNED_SHORT&&(E=r.R16UI),k===r.UNSIGNED_INT&&(E=r.R32UI),k===r.BYTE&&(E=r.R8I),k===r.SHORT&&(E=r.R16I),k===r.INT&&(E=r.R32I)),S===r.RG&&(k===r.FLOAT&&(E=r.RG32F),k===r.HALF_FLOAT&&(E=r.RG16F),k===r.UNSIGNED_BYTE&&(E=r.RG8)),S===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(E=r.RG8UI),k===r.UNSIGNED_SHORT&&(E=r.RG16UI),k===r.UNSIGNED_INT&&(E=r.RG32UI),k===r.BYTE&&(E=r.RG8I),k===r.SHORT&&(E=r.RG16I),k===r.INT&&(E=r.RG32I)),S===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(E=r.RGB8UI),k===r.UNSIGNED_SHORT&&(E=r.RGB16UI),k===r.UNSIGNED_INT&&(E=r.RGB32UI),k===r.BYTE&&(E=r.RGB8I),k===r.SHORT&&(E=r.RGB16I),k===r.INT&&(E=r.RGB32I)),S===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(E=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(E=r.RGBA16UI),k===r.UNSIGNED_INT&&(E=r.RGBA32UI),k===r.BYTE&&(E=r.RGBA8I),k===r.SHORT&&(E=r.RGBA16I),k===r.INT&&(E=r.RGBA32I)),S===r.RGB&&k===r.UNSIGNED_INT_5_9_9_9_REV&&(E=r.RGB9_E5),S===r.RGBA){let N=y?fs:ut.getTransfer(G);k===r.FLOAT&&(E=r.RGBA32F),k===r.HALF_FLOAT&&(E=r.RGBA16F),k===r.UNSIGNED_BYTE&&(E=N===dt?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(E=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(E=r.RGB5_A1)}return E!==r.R16F&&E!==r.R32F&&E!==r.RG16F&&E!==r.RG32F&&E!==r.RGBA16F&&E!==r.RGBA32F||e.get("EXT_color_buffer_float"),E}function M(R,S){let k;return R?S===null||S===Ji||S===jr?k=r.DEPTH24_STENCIL8:S===Vn?k=r.DEPTH32F_STENCIL8:S===Xr&&(k=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Ji||S===jr?k=r.DEPTH_COMPONENT24:S===Vn?k=r.DEPTH_COMPONENT32F:S===Xr&&(k=r.DEPTH_COMPONENT16),k}function w(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Fn&&R.minFilter!==On?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function T(R){let S=R.target;S.removeEventListener("dispose",T),(function(k){let G=n.get(k);if(G.__webglInit===void 0)return;let y=k.source,E=d.get(y);if(E){let N=E[G.__cacheKey];N.usedTimes--,N.usedTimes===0&&B(k),Object.keys(E).length===0&&d.delete(y)}n.remove(k)})(S),S.isVideoTexture&&h.delete(S)}function U(R){let S=R.target;S.removeEventListener("dispose",U),(function(k){let G=n.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),n.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let E=0;E<6;E++){if(Array.isArray(G.__webglFramebuffer[E]))for(let N=0;N<G.__webglFramebuffer[E].length;N++)r.deleteFramebuffer(G.__webglFramebuffer[E][N]);else r.deleteFramebuffer(G.__webglFramebuffer[E]);G.__webglDepthbuffer&&r.deleteRenderbuffer(G.__webglDepthbuffer[E])}else{if(Array.isArray(G.__webglFramebuffer))for(let E=0;E<G.__webglFramebuffer.length;E++)r.deleteFramebuffer(G.__webglFramebuffer[E]);else r.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&r.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&r.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let E=0;E<G.__webglColorRenderbuffer.length;E++)G.__webglColorRenderbuffer[E]&&r.deleteRenderbuffer(G.__webglColorRenderbuffer[E]);G.__webglDepthRenderbuffer&&r.deleteRenderbuffer(G.__webglDepthRenderbuffer)}let y=k.textures;for(let E=0,N=y.length;E<N;E++){let O=n.get(y[E]);O.__webglTexture&&(r.deleteTexture(O.__webglTexture),a.memory.textures--),n.remove(y[E])}n.remove(k)})(S)}function B(R){let S=n.get(R);r.deleteTexture(S.__webglTexture);let k=R.source;delete d.get(k)[S.__cacheKey],a.memory.textures--}let L=0;function P(R,S){let k=n.get(R);if(R.isVideoTexture&&(function(G){let y=a.render.frame;h.get(G)!==y&&(h.set(G,y),G.update())})(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){let G=R.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(G.complete!==!1)return void ne(k,R,S);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+S)}let F={[Rr]:r.REPEAT,[Pr]:r.CLAMP_TO_EDGE,[Ia]:r.MIRRORED_REPEAT},I={[Fn]:r.NEAREST,[hu]:r.NEAREST_MIPMAP_NEAREST,[Gs]:r.NEAREST_MIPMAP_LINEAR,[On]:r.LINEAR,[Ro]:r.LINEAR_MIPMAP_NEAREST,[Zi]:r.LINEAR_MIPMAP_LINEAR},H={[_u]:r.NEVER,[wu]:r.ALWAYS,[xu]:r.LESS,[Ac]:r.LEQUAL,[yu]:r.EQUAL,[bu]:r.GEQUAL,[Mu]:r.GREATER,[Su]:r.NOTEQUAL};function z(R,S){if(S.type!==Vn||e.has("OES_texture_float_linear")!==!1||S.magFilter!==On&&S.magFilter!==Ro&&S.magFilter!==Gs&&S.magFilter!==Zi&&S.minFilter!==On&&S.minFilter!==Ro&&S.minFilter!==Gs&&S.minFilter!==Zi||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,F[S.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,F[S.wrapT]),R!==r.TEXTURE_3D&&R!==r.TEXTURE_2D_ARRAY||r.texParameteri(R,r.TEXTURE_WRAP_R,F[S.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,I[S.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,I[S.minFilter]),S.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,H[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Fn||S.minFilter!==Gs&&S.minFilter!==Zi||S.type===Vn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function q(R,S){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",T));let G=S.source,y=d.get(G);y===void 0&&(y={},d.set(G,y));let E=(function(N){let O=[];return O.push(N.wrapS),O.push(N.wrapT),O.push(N.wrapR||0),O.push(N.magFilter),O.push(N.minFilter),O.push(N.anisotropy),O.push(N.internalFormat),O.push(N.format),O.push(N.type),O.push(N.generateMipmaps),O.push(N.premultiplyAlpha),O.push(N.flipY),O.push(N.unpackAlignment),O.push(N.colorSpace),O.join()})(S);if(E!==R.__cacheKey){y[E]===void 0&&(y[E]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,k=!0),y[E].usedTimes++;let N=y[R.__cacheKey];N!==void 0&&(y[R.__cacheKey].usedTimes--,N.usedTimes===0&&B(S)),R.__cacheKey=E,R.__webglTexture=y[E].texture}return k}function V(R,S,k){return Math.floor(Math.floor(R/k)/S)}function ne(R,S,k){let G=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(G=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(G=r.TEXTURE_3D);let y=q(R,S),E=S.source;t.bindTexture(G,R.__webglTexture,r.TEXTURE0+k);let N=n.get(E);if(E.version!==N.__version||y===!0){t.activeTexture(r.TEXTURE0+k);let O=ut.getPrimaries(ut.workingColorSpace),X=S.colorSpace===Ki?null:ut.getPrimaries(S.colorSpace),Q=S.colorSpace===Ki||O===X?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let W=v(S.image,!1,i.maxTextureSize);W=de(S,W);let le=s.convert(S.format,S.colorSpace),ie=s.convert(S.type),$,ae=x(S.internalFormat,le,ie,S.colorSpace,S.isVideoTexture);z(G,S);let ue=S.mipmaps,we=S.isVideoTexture!==!0,me=N.__version===void 0||y===!0,Te=E.dataReady,Ie=w(S,W);if(S.isDepthTexture)ae=M(S.format===Hs,S.type),me&&(we?t.texStorage2D(r.TEXTURE_2D,1,ae,W.width,W.height):t.texImage2D(r.TEXTURE_2D,0,ae,W.width,W.height,0,le,ie,null));else if(S.isDataTexture)if(ue.length>0){we&&me&&t.texStorage2D(r.TEXTURE_2D,Ie,ae,ue[0].width,ue[0].height);for(let pe=0,Ce=ue.length;pe<Ce;pe++)$=ue[pe],we?Te&&t.texSubImage2D(r.TEXTURE_2D,pe,0,0,$.width,$.height,le,ie,$.data):t.texImage2D(r.TEXTURE_2D,pe,ae,$.width,$.height,0,le,ie,$.data);S.generateMipmaps=!1}else we?(me&&t.texStorage2D(r.TEXTURE_2D,Ie,ae,W.width,W.height),Te&&(function(pe,Ce,Ge,Qe){let Ee=pe.updateRanges;if(Ee.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ce.width,Ce.height,Ge,Qe,Ce.data);else{Ee.sort((Ae,C)=>Ae.start-C.start);let ze=0;for(let Ae=1;Ae<Ee.length;Ae++){let C=Ee[ze],he=Ee[Ae],Be=C.start+C.count,Se=V(he.start,Ce.width,4),ke=V(C.start,Ce.width,4);he.start<=Be+1&&Se===ke&&V(he.start+he.count-1,Ce.width,4)===Se?C.count=Math.max(C.count,he.start+he.count-C.start):(++ze,Ee[ze]=he)}Ee.length=ze+1;let Y=r.getParameter(r.UNPACK_ROW_LENGTH),be=r.getParameter(r.UNPACK_SKIP_PIXELS),Ue=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,Ce.width);for(let Ae=0,C=Ee.length;Ae<C;Ae++){let he=Ee[Ae],Be=Math.floor(he.start/4),Se=Math.ceil(he.count/4),ke=Be%Ce.width,We=Math.floor(Be/Ce.width),Ze=Se;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ke),r.pixelStorei(r.UNPACK_SKIP_ROWS,We),t.texSubImage2D(r.TEXTURE_2D,0,ke,We,Ze,1,Ge,Qe,Ce.data)}pe.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Y),r.pixelStorei(r.UNPACK_SKIP_PIXELS,be),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ue)}})(S,W,le,ie)):t.texImage2D(r.TEXTURE_2D,0,ae,W.width,W.height,0,le,ie,W.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){we&&me&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,ae,ue[0].width,ue[0].height,W.depth);for(let pe=0,Ce=ue.length;pe<Ce;pe++)if($=ue[pe],S.format!==Tn)if(le!==null)if(we){if(Te)if(S.layerUpdates.size>0){let Ge=Dc($.width,$.height,S.format,S.type);for(let Qe of S.layerUpdates){let Ee=$.data.subarray(Qe*Ge/$.data.BYTES_PER_ELEMENT,(Qe+1)*Ge/$.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,Qe,$.width,$.height,1,le,Ee)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,$.width,$.height,W.depth,le,$.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,pe,ae,$.width,$.height,W.depth,0,$.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?Te&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,$.width,$.height,W.depth,le,ie,$.data):t.texImage3D(r.TEXTURE_2D_ARRAY,pe,ae,$.width,$.height,W.depth,0,le,ie,$.data)}else{we&&me&&t.texStorage2D(r.TEXTURE_2D,Ie,ae,ue[0].width,ue[0].height);for(let pe=0,Ce=ue.length;pe<Ce;pe++)$=ue[pe],S.format!==Tn?le!==null?we?Te&&t.compressedTexSubImage2D(r.TEXTURE_2D,pe,0,0,$.width,$.height,le,$.data):t.compressedTexImage2D(r.TEXTURE_2D,pe,ae,$.width,$.height,0,$.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?Te&&t.texSubImage2D(r.TEXTURE_2D,pe,0,0,$.width,$.height,le,ie,$.data):t.texImage2D(r.TEXTURE_2D,pe,ae,$.width,$.height,0,le,ie,$.data)}else if(S.isDataArrayTexture)if(we){if(me&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,ae,W.width,W.height,W.depth),Te)if(S.layerUpdates.size>0){let pe=Dc(W.width,W.height,S.format,S.type);for(let Ce of S.layerUpdates){let Ge=W.data.subarray(Ce*pe/W.data.BYTES_PER_ELEMENT,(Ce+1)*pe/W.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ce,W.width,W.height,1,le,ie,Ge)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,le,ie,W.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ae,W.width,W.height,W.depth,0,le,ie,W.data);else if(S.isData3DTexture)we?(me&&t.texStorage3D(r.TEXTURE_3D,Ie,ae,W.width,W.height,W.depth),Te&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,le,ie,W.data)):t.texImage3D(r.TEXTURE_3D,0,ae,W.width,W.height,W.depth,0,le,ie,W.data);else if(S.isFramebufferTexture){if(me)if(we)t.texStorage2D(r.TEXTURE_2D,Ie,ae,W.width,W.height);else{let pe=W.width,Ce=W.height;for(let Ge=0;Ge<Ie;Ge++)t.texImage2D(r.TEXTURE_2D,Ge,ae,pe,Ce,0,le,ie,null),pe>>=1,Ce>>=1}}else if(ue.length>0){if(we&&me){let pe=Ve(ue[0]);t.texStorage2D(r.TEXTURE_2D,Ie,ae,pe.width,pe.height)}for(let pe=0,Ce=ue.length;pe<Ce;pe++)$=ue[pe],we?Te&&t.texSubImage2D(r.TEXTURE_2D,pe,0,0,le,ie,$):t.texImage2D(r.TEXTURE_2D,pe,ae,le,ie,$);S.generateMipmaps=!1}else if(we){if(me){let pe=Ve(W);t.texStorage2D(r.TEXTURE_2D,Ie,ae,pe.width,pe.height)}Te&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,le,ie,W)}else t.texImage2D(r.TEXTURE_2D,0,ae,le,ie,W);m(S)&&g(G),N.__version=E.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ee(R,S,k,G,y,E){let N=s.convert(k.format,k.colorSpace),O=s.convert(k.type),X=x(k.internalFormat,N,O,k.colorSpace),Q=n.get(S),W=n.get(k);if(W.__renderTarget=S,!Q.__hasExternalTextures){let le=Math.max(1,S.width>>E),ie=Math.max(1,S.height>>E);y===r.TEXTURE_3D||y===r.TEXTURE_2D_ARRAY?t.texImage3D(y,E,X,le,ie,S.depth,0,N,O,null):t.texImage2D(y,E,X,le,ie,0,N,O,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),ye(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,G,y,W.__webglTexture,0,Pe(S)):(y===r.TEXTURE_2D||y>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&y<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,G,y,W.__webglTexture,E),t.bindFramebuffer(r.FRAMEBUFFER,null)}function re(R,S,k){if(r.bindRenderbuffer(r.RENDERBUFFER,R),S.depthBuffer){let G=S.depthTexture,y=G&&G.isDepthTexture?G.type:null,E=M(S.stencilBuffer,y),N=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,O=Pe(S);ye(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,O,E,S.width,S.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,O,E,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,E,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,N,r.RENDERBUFFER,R)}else{let G=S.textures;for(let y=0;y<G.length;y++){let E=G[y],N=s.convert(E.format,E.colorSpace),O=s.convert(E.type),X=x(E.internalFormat,N,O,E.colorSpace),Q=Pe(S);k&&ye(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Q,X,S.width,S.height):ye(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Q,X,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,X,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function se(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!S.depthTexture||!S.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let k=n.get(S.depthTexture);k.__renderTarget=S,k.__webglTexture&&S.depthTexture.image.width===S.width&&S.depthTexture.image.height===S.height||(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),P(S.depthTexture,0);let G=k.__webglTexture,y=Pe(S);if(S.depthTexture.format===Vs)ye(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,G,0,y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,G,0);else{if(S.depthTexture.format!==Hs)throw new Error("Unknown depthTexture format");ye(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,G,0,y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,G,0)}}function J(R){let S=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){let G=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),G){let y=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,G.removeEventListener("dispose",y)};G.addEventListener("dispose",y),S.__depthDisposeCallback=y}S.__boundDepthTexture=G}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");let G=R.texture.mipmaps;G&&G.length>0?se(S.__webglFramebuffer[0],R):se(S.__webglFramebuffer,R)}else if(k){S.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[G]),S.__webglDepthbuffer[G]===void 0)S.__webglDepthbuffer[G]=r.createRenderbuffer(),re(S.__webglDepthbuffer[G],R,!1);else{let y=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,E=S.__webglDepthbuffer[G];r.bindRenderbuffer(r.RENDERBUFFER,E),r.framebufferRenderbuffer(r.FRAMEBUFFER,y,r.RENDERBUFFER,E)}}else{let G=R.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),re(S.__webglDepthbuffer,R,!1);else{let y=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,E=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,E),r.framebufferRenderbuffer(r.FRAMEBUFFER,y,r.RENDERBUFFER,E)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}let oe=[],Me=[];function Pe(R){return Math.min(i.maxSamples,R.samples)}function ye(R){let S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function de(R,S){let k=R.colorSpace,G=R.format,y=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==Gi&&k!==Ki&&(ut.getTransfer(k)===dt?G===Tn&&y===Gn||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function Ve(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=function(){let R=L;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),L+=1,R},this.resetTextureUnits=function(){L=0},this.setTexture2D=P,this.setTexture2DArray=function(R,S){let k=n.get(R);R.version>0&&k.__version!==R.version?ne(k,R,S):t.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+S)},this.setTexture3D=function(R,S){let k=n.get(R);R.version>0&&k.__version!==R.version?ne(k,R,S):t.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+S)},this.setTextureCube=function(R,S){let k=n.get(R);R.version>0&&k.__version!==R.version?(function(G,y,E){if(y.image.length!==6)return;let N=q(G,y),O=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+E);let X=n.get(O);if(O.version!==X.__version||N===!0){t.activeTexture(r.TEXTURE0+E);let Q=ut.getPrimaries(ut.workingColorSpace),W=y.colorSpace===Ki?null:ut.getPrimaries(y.colorSpace),le=y.colorSpace===Ki||Q===W?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let ie=y.isCompressedTexture||y.image[0].isCompressedTexture,$=y.image[0]&&y.image[0].isDataTexture,ae=[];for(let Ee=0;Ee<6;Ee++)ae[Ee]=ie||$?$?y.image[Ee].image:y.image[Ee]:v(y.image[Ee],!0,i.maxCubemapSize),ae[Ee]=de(y,ae[Ee]);let ue=ae[0],we=s.convert(y.format,y.colorSpace),me=s.convert(y.type),Te=x(y.internalFormat,we,me,y.colorSpace),Ie=y.isVideoTexture!==!0,pe=X.__version===void 0||N===!0,Ce=O.dataReady,Ge,Qe=w(y,ue);if(z(r.TEXTURE_CUBE_MAP,y),ie){Ie&&pe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Qe,Te,ue.width,ue.height);for(let Ee=0;Ee<6;Ee++){Ge=ae[Ee].mipmaps;for(let ze=0;ze<Ge.length;ze++){let Y=Ge[ze];y.format!==Tn?we!==null?Ie?Ce&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ze,0,0,Y.width,Y.height,we,Y.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ze,Te,Y.width,Y.height,0,Y.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?Ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ze,0,0,Y.width,Y.height,we,me,Y.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ze,Te,Y.width,Y.height,0,we,me,Y.data)}}}else{if(Ge=y.mipmaps,Ie&&pe){Ge.length>0&&Qe++;let Ee=Ve(ae[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Qe,Te,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if($){Ie?Ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,ae[Ee].width,ae[Ee].height,we,me,ae[Ee].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Te,ae[Ee].width,ae[Ee].height,0,we,me,ae[Ee].data);for(let ze=0;ze<Ge.length;ze++){let Y=Ge[ze].image[Ee].image;Ie?Ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ze+1,0,0,Y.width,Y.height,we,me,Y.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ze+1,Te,Y.width,Y.height,0,we,me,Y.data)}}else{Ie?Ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,we,me,ae[Ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Te,we,me,ae[Ee]);for(let ze=0;ze<Ge.length;ze++){let Y=Ge[ze];Ie?Ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ze+1,0,0,we,me,Y.image[Ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ze+1,Te,we,me,Y.image[Ee])}}}m(y)&&g(r.TEXTURE_CUBE_MAP),X.__version=O.version,y.onUpdate&&y.onUpdate(y)}G.__version=y.version})(k,R,S):t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+S)},this.rebindTextures=function(R,S,k){let G=n.get(R);S!==void 0&&ee(G.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&J(R)},this.setupRenderTarget=function(R){let S=R.texture,k=n.get(R),G=n.get(S);R.addEventListener("dispose",U);let y=R.textures,E=R.isWebGLCubeRenderTarget===!0,N=y.length>1;if(N||(G.__webglTexture===void 0&&(G.__webglTexture=r.createTexture()),G.__version=S.version,a.memory.textures++),E){k.__webglFramebuffer=[];for(let O=0;O<6;O++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[O]=[];for(let X=0;X<S.mipmaps.length;X++)k.__webglFramebuffer[O][X]=r.createFramebuffer()}else k.__webglFramebuffer[O]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let O=0;O<S.mipmaps.length;O++)k.__webglFramebuffer[O]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(N)for(let O=0,X=y.length;O<X;O++){let Q=n.get(y[O]);Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&ye(R)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let O=0;O<y.length;O++){let X=y[O];k.__webglColorRenderbuffer[O]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[O]);let Q=s.convert(X.format,X.colorSpace),W=s.convert(X.type),le=x(X.internalFormat,Q,W,X.colorSpace,R.isXRRenderTarget===!0),ie=Pe(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,le,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+O,r.RENDERBUFFER,k.__webglColorRenderbuffer[O])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),re(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(E){t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture),z(r.TEXTURE_CUBE_MAP,S);for(let O=0;O<6;O++)if(S.mipmaps&&S.mipmaps.length>0)for(let X=0;X<S.mipmaps.length;X++)ee(k.__webglFramebuffer[O][X],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+O,X);else ee(k.__webglFramebuffer[O],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+O,0);m(S)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(N){for(let O=0,X=y.length;O<X;O++){let Q=y[O],W=n.get(Q);t.bindTexture(r.TEXTURE_2D,W.__webglTexture),z(r.TEXTURE_2D,Q),ee(k.__webglFramebuffer,R,Q,r.COLOR_ATTACHMENT0+O,r.TEXTURE_2D,0),m(Q)&&g(r.TEXTURE_2D)}t.unbindTexture()}else{let O=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(O=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(O,G.__webglTexture),z(O,S),S.mipmaps&&S.mipmaps.length>0)for(let X=0;X<S.mipmaps.length;X++)ee(k.__webglFramebuffer[X],R,S,r.COLOR_ATTACHMENT0,O,X);else ee(k.__webglFramebuffer,R,S,r.COLOR_ATTACHMENT0,O,0);m(S)&&g(O),t.unbindTexture()}R.depthBuffer&&J(R)},this.updateRenderTargetMipmap=function(R){let S=R.textures;for(let k=0,G=S.length;k<G;k++){let y=S[k];if(m(y)){let E=_(R),N=n.get(y).__webglTexture;t.bindTexture(E,N),g(E),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(R){if(R.samples>0){if(ye(R)===!1){let S=R.textures,k=R.width,G=R.height,y=r.COLOR_BUFFER_BIT,E=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,N=n.get(R),O=S.length>1;if(O)for(let Q=0;Q<S.length;Q++)t.bindFramebuffer(r.FRAMEBUFFER,N.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Q,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,N.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Q,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,N.__webglMultisampledFramebuffer);let X=R.texture.mipmaps;X&&X.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,N.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,N.__webglFramebuffer);for(let Q=0;Q<S.length;Q++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(y|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(y|=r.STENCIL_BUFFER_BIT)),O){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,N.__webglColorRenderbuffer[Q]);let W=n.get(S[Q]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,W,0)}r.blitFramebuffer(0,0,k,G,0,0,k,G,y,r.NEAREST),l===!0&&(oe.length=0,Me.length=0,oe.push(r.COLOR_ATTACHMENT0+Q),R.depthBuffer&&R.resolveDepthBuffer===!1&&(oe.push(E),Me.push(E),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Me)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,oe))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),O)for(let Q=0;Q<S.length;Q++){t.bindFramebuffer(r.FRAMEBUFFER,N.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Q,r.RENDERBUFFER,N.__webglColorRenderbuffer[Q]);let W=n.get(S[Q]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,N.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Q,r.TEXTURE_2D,W,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,N.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let S=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}},this.setupDepthRenderbuffer=J,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=ye}function Pm(r,e){return{convert:function(t,n=Ki){let i,s=ut.getTransfer(n);if(t===Gn)return r.UNSIGNED_BYTE;if(t===Io)return r.UNSIGNED_SHORT_4_4_4_4;if(t===Lo)return r.UNSIGNED_SHORT_5_5_5_1;if(t===Jl)return r.UNSIGNED_INT_5_9_9_9_REV;if(t===Yl)return r.BYTE;if(t===Zl)return r.SHORT;if(t===Xr)return r.UNSIGNED_SHORT;if(t===Po)return r.INT;if(t===Ji)return r.UNSIGNED_INT;if(t===Vn)return r.FLOAT;if(t===$r)return r.HALF_FLOAT;if(t===uu)return r.ALPHA;if(t===du)return r.RGB;if(t===Tn)return r.RGBA;if(t===Vs)return r.DEPTH_COMPONENT;if(t===Hs)return r.DEPTH_STENCIL;if(t===Kl)return r.RED;if(t===Do)return r.RED_INTEGER;if(t===pu)return r.RG;if(t===Ql)return r.RG_INTEGER;if(t===ec)return r.RGBA_INTEGER;if(t===Uo||t===No||t===Fo||t===Oo)if(s===dt){if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i===null)return null;if(t===Uo)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===No)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===Fo)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Oo)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(i=e.get("WEBGL_compressed_texture_s3tc"),i===null)return null;if(t===Uo)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===No)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===Fo)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Oo)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===tc||t===nc||t===ic||t===rc){if(i=e.get("WEBGL_compressed_texture_pvrtc"),i===null)return null;if(t===tc)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===nc)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===ic)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===rc)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===sc||t===ac||t===oc){if(i=e.get("WEBGL_compressed_texture_etc"),i===null)return null;if(t===sc||t===ac)return s===dt?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(t===oc)return s===dt?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}if(t===lc||t===cc||t===hc||t===uc||t===dc||t===pc||t===mc||t===fc||t===gc||t===vc||t===_c||t===xc||t===yc||t===Mc){if(i=e.get("WEBGL_compressed_texture_astc"),i===null)return null;if(t===lc)return s===dt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===cc)return s===dt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===hc)return s===dt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===uc)return s===dt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===dc)return s===dt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===pc)return s===dt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===mc)return s===dt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===fc)return s===dt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===gc)return s===dt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===vc)return s===dt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===_c)return s===dt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===xc)return s===dt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===yc)return s===dt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===Mc)return s===dt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Bo||t===Sc||t===bc){if(i=e.get("EXT_texture_compression_bptc"),i===null)return null;if(t===Bo)return s===dt?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===Sc)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===bc)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===mu||t===wc||t===Tc||t===Ec){if(i=e.get("EXT_texture_compression_rgtc"),i===null)return null;if(t===Bo)return i.COMPRESSED_RED_RGTC1_EXT;if(t===wc)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===Tc)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===Ec)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===jr?r.UNSIGNED_INT_24_8:r[t]!==void 0?r[t]:null}}}var $c=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new Yt;e.properties.get(i).__webglTexture=t.texture,t.depthNear===n.depthNear&&t.depthFar===n.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new bn({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $e(new zn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},jc=class extends ni{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,f=null,v=new $c,m=t.getContextAttributes(),g=null,_=null,x=[],M=[],w=new xe,T=null,U=new Ht;U.viewport=new yt;let B=new Ht;B.viewport=new yt;let L=[U,B],P=new _o,F=null,I=null;function H(J){let oe=M.indexOf(J.inputSource);if(oe===-1)return;let Me=x[oe];Me!==void 0&&(Me.update(J.inputSource,J.frame,c||a),Me.dispatchEvent({type:J.type,data:J.inputSource}))}function z(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",q);for(let J=0;J<x.length;J++){let oe=M[J];oe!==null&&(M[J]=null,x[J].disconnect(oe))}F=null,I=null,v.reset(),e.setRenderTarget(g),p=null,d=null,u=null,i=null,_=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}function q(J){for(let oe=0;oe<J.removed.length;oe++){let Me=J.removed[oe],Pe=M.indexOf(Me);Pe>=0&&(M[Pe]=null,x[Pe].disconnect(Me))}for(let oe=0;oe<J.added.length;oe++){let Me=J.added[oe],Pe=M.indexOf(Me);if(Pe===-1){for(let de=0;de<x.length;de++){if(de>=M.length){M.push(Me),Pe=de;break}if(M[de]===null){M[de]=Me,Pe=de;break}}if(Pe===-1)break}let ye=x[Pe];ye&&ye.connect(Me)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let oe=x[J];return oe===void 0&&(oe=new Ur,x[J]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(J){let oe=x[J];return oe===void 0&&(oe=new Ur,x[J]=oe),oe.getGripSpace()},this.getHand=function(J){let oe=x[J];return oe===void 0&&(oe=new Ur,x[J]=oe),oe.getHandSpace()},this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",z),i.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Me=null,Pe=null;m.depth&&(Pe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=m.stencil?Hs:Vs,Me=m.stencil?jr:Ji);let ye={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(ye),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Bn(d.textureWidth,d.textureHeight,{format:Tn,type:Gn,depthTexture:new ws(d.textureWidth,d.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let oe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,oe),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Bn(p.framebufferWidth,p.framebufferHeight,{format:Tn,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),se.setContext(i),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};let V=new A,ne=new A;function ee(J,oe){oe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(oe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let oe=J.near,Me=J.far;v.texture!==null&&(v.depthNear>0&&(oe=v.depthNear),v.depthFar>0&&(Me=v.depthFar)),P.near=B.near=U.near=oe,P.far=B.far=U.far=Me,F===P.near&&I===P.far||(i.updateRenderState({depthNear:P.near,depthFar:P.far}),F=P.near,I=P.far),U.layers.mask=2|J.layers.mask,B.layers.mask=4|J.layers.mask,P.layers.mask=U.layers.mask|B.layers.mask;let Pe=J.parent,ye=P.cameras;ee(P,Pe);for(let de=0;de<ye.length;de++)ee(ye[de],Pe);ye.length===2?(function(de,Ve,R){V.setFromMatrixPosition(Ve.matrixWorld),ne.setFromMatrixPosition(R.matrixWorld);let S=V.distanceTo(ne),k=Ve.projectionMatrix.elements,G=R.projectionMatrix.elements,y=k[14]/(k[10]-1),E=k[14]/(k[10]+1),N=(k[9]+1)/k[5],O=(k[9]-1)/k[5],X=(k[8]-1)/k[0],Q=(G[8]+1)/G[0],W=y*X,le=y*Q,ie=S/(-X+Q),$=ie*-X;if(Ve.matrixWorld.decompose(de.position,de.quaternion,de.scale),de.translateX($),de.translateZ(ie),de.matrixWorld.compose(de.position,de.quaternion,de.scale),de.matrixWorldInverse.copy(de.matrixWorld).invert(),k[10]===-1)de.projectionMatrix.copy(Ve.projectionMatrix),de.projectionMatrixInverse.copy(Ve.projectionMatrixInverse);else{let ae=y+ie,ue=E+ie,we=W-$,me=le+(S-$),Te=N*E/ue*ae,Ie=O*E/ue*ae;de.projectionMatrix.makePerspective(we,me,Te,Ie,ae,ue),de.projectionMatrixInverse.copy(de.projectionMatrix).invert()}})(P,U,B):P.projectionMatrix.copy(U.projectionMatrix),(function(de,Ve,R){R===null?de.matrix.copy(Ve.matrixWorld):(de.matrix.copy(R.matrixWorld),de.matrix.invert(),de.matrix.multiply(Ve.matrixWorld)),de.matrix.decompose(de.position,de.quaternion,de.scale),de.updateMatrixWorld(!0),de.projectionMatrix.copy(Ve.projectionMatrix),de.projectionMatrixInverse.copy(Ve.projectionMatrixInverse),de.isPerspectiveCamera&&(de.fov=2*Ua*Math.atan(1/de.projectionMatrix.elements[5]),de.zoom=1)})(J,P,Pe)},this.getCamera=function(){return P},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(P)};let re=null,se=new sd;se.setAnimationLoop(function(J,oe){if(h=oe.getViewerPose(c||a),f=oe,h!==null){let Me=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let Pe=!1;Me.length!==P.cameras.length&&(P.cameras.length=0,Pe=!0);for(let de=0;de<Me.length;de++){let Ve=Me[de],R=null;if(p!==null)R=p.getViewport(Ve);else{let k=u.getViewSubImage(d,Ve);R=k.viewport,de===0&&(e.setRenderTargetTextures(_,k.colorTexture,k.depthStencilTexture),e.setRenderTarget(_))}let S=L[de];S===void 0&&(S=new Ht,S.layers.enable(de),S.viewport=new yt,L[de]=S),S.matrix.fromArray(Ve.transform.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale),S.projectionMatrix.fromArray(Ve.projectionMatrix),S.projectionMatrixInverse.copy(S.projectionMatrix).invert(),S.viewport.set(R.x,R.y,R.width,R.height),de===0&&(P.matrix.copy(S.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Pe===!0&&P.cameras.push(S)}let ye=i.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){let de=u.getDepthInformation(Me[0]);de&&de.isValid&&de.texture&&v.init(e,de,i.renderState)}}for(let Me=0;Me<x.length;Me++){let Pe=M[Me],ye=x[Me];Pe!==null&&ye!==void 0&&ye.update(Pe,oe,c||a)}re&&re(J,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),f=null}),this.setAnimationLoop=function(J){re=J},this.dispose=function(){}}},tr=new Sn,Im=new et;function Lm(r,e){function t(i,s){i.matrixAutoUpdate===!0&&i.updateMatrix(),s.value.copy(i.matrix)}function n(i,s){i.opacity.value=s.opacity,s.color&&i.diffuse.value.copy(s.color),s.emissive&&i.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(i.map.value=s.map,t(s.map,i.mapTransform)),s.alphaMap&&(i.alphaMap.value=s.alphaMap,t(s.alphaMap,i.alphaMapTransform)),s.bumpMap&&(i.bumpMap.value=s.bumpMap,t(s.bumpMap,i.bumpMapTransform),i.bumpScale.value=s.bumpScale,s.side===Xt&&(i.bumpScale.value*=-1)),s.normalMap&&(i.normalMap.value=s.normalMap,t(s.normalMap,i.normalMapTransform),i.normalScale.value.copy(s.normalScale),s.side===Xt&&i.normalScale.value.negate()),s.displacementMap&&(i.displacementMap.value=s.displacementMap,t(s.displacementMap,i.displacementMapTransform),i.displacementScale.value=s.displacementScale,i.displacementBias.value=s.displacementBias),s.emissiveMap&&(i.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,i.emissiveMapTransform)),s.specularMap&&(i.specularMap.value=s.specularMap,t(s.specularMap,i.specularMapTransform)),s.alphaTest>0&&(i.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,l=a.envMapRotation;o&&(i.envMap.value=o,tr.copy(l),tr.x*=-1,tr.y*=-1,tr.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),i.envMapRotation.value.setFromMatrix4(Im.makeRotationFromEuler(tr)),i.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,i.reflectivity.value=s.reflectivity,i.ior.value=s.ior,i.refractionRatio.value=s.refractionRatio),s.lightMap&&(i.lightMap.value=s.lightMap,i.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,i.lightMapTransform)),s.aoMap&&(i.aoMap.value=s.aoMap,i.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,i.aoMapTransform))}return{refreshFogUniforms:function(i,s){s.color.getRGB(i.fogColor.value,Pc(r)),s.isFog?(i.fogNear.value=s.near,i.fogFar.value=s.far):s.isFogExp2&&(i.fogDensity.value=s.density)},refreshMaterialUniforms:function(i,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(i,s):s.isMeshToonMaterial?(n(i,s),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(i,s)):s.isMeshPhongMaterial?(n(i,s),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(i,s)):s.isMeshStandardMaterial?(n(i,s),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(i,s),s.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Xt&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(i,s,l)):s.isMeshMatcapMaterial?(n(i,s),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(i,s)):s.isMeshDepthMaterial?n(i,s):s.isMeshDistanceMaterial?(n(i,s),(function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(i,s)):s.isMeshNormalMaterial?n(i,s):s.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(i,s),s.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(i,s)):s.isPointsMaterial?(function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(i,s,a,o):s.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(i,s):s.isShadowMaterial?(i.color.value.copy(s.color),i.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function Dm(r,e,t,n){let i={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(u,d,p,f){let v=u.value,m=d+"_"+p;if(f[m]===void 0)return f[m]=typeof v=="number"||typeof v=="boolean"?v:v.clone(),!0;{let g=f[m];if(typeof v=="number"||typeof v=="boolean"){if(g!==v)return f[m]=v,!0}else if(g.equals(v)===!1)return g.copy(v),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(i[d.id]),delete i[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;n.uniformBlockBinding(u,p)},update:function(u,d){let p=i[u.id];p===void 0&&((function(m){let g=m.uniforms,_=0,x=16;for(let w=0,T=g.length;w<T;w++){let U=Array.isArray(g[w])?g[w]:[g[w]];for(let B=0,L=U.length;B<L;B++){let P=U[B],F=Array.isArray(P.value)?P.value:[P.value];for(let I=0,H=F.length;I<H;I++){let z=c(F[I]),q=_%x,V=q%z.boundary,ne=q+V;_+=V,ne!==0&&x-ne<z.storage&&(_+=x-ne),P.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=_,_+=z.storage}}}let M=_%x;M>0&&(_+=x-M),m.__size=_,m.__cache={}})(u),p=(function(m){let g=(function(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();m.__bindingPointIndex=g;let _=r.createBuffer(),x=m.__size,M=m.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,x,M),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,g,_),_})(u),i[u.id]=p,u.addEventListener("dispose",h));let f=d.program;n.updateUBOMapping(u,f);let v=e.render.frame;s[u.id]!==v&&((function(m){let g=i[m.id],_=m.uniforms,x=m.__cache;r.bindBuffer(r.UNIFORM_BUFFER,g);for(let M=0,w=_.length;M<w;M++){let T=Array.isArray(_[M])?_[M]:[_[M]];for(let U=0,B=T.length;U<B;U++){let L=T[U];if(l(L,M,U,x)===!0){let P=L.__offset,F=Array.isArray(L.value)?L.value:[L.value],I=0;for(let H=0;H<F.length;H++){let z=F[H],q=c(z);typeof z=="number"||typeof z=="boolean"?(L.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,P+I,L.__data)):z.isMatrix3?(L.__data[0]=z.elements[0],L.__data[1]=z.elements[1],L.__data[2]=z.elements[2],L.__data[3]=0,L.__data[4]=z.elements[3],L.__data[5]=z.elements[4],L.__data[6]=z.elements[5],L.__data[7]=0,L.__data[8]=z.elements[6],L.__data[9]=z.elements[7],L.__data[10]=z.elements[8],L.__data[11]=0):(z.toArray(L.__data,I),I+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,P,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)})(u),s[u.id]=v)},dispose:function(){for(let u in i)r.deleteBuffer(i[u]);a=[],i={},s={}}}}var Vo=class{constructor(e={}){let{canvas:t=Tu(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e,p;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let f=new Uint32Array(4),v=new Int32Array(4),m=null,g=null,_=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,w=!1;this._outputColorSpace=Bt;let T=0,U=0,B=null,L=-1,P=null,F=new yt,I=new yt,H=null,z=new De(0),q=0,V=t.width,ne=t.height,ee=1,re=null,se=null,J=new yt(0,0,V,ne),oe=new yt(0,0,V,ne),Me=!1,Pe=new Mi,ye=!1,de=!1,Ve=new et,R=new et,S=new A,k=new yt,G={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},y=!1;function E(){return B===null?ee:1}let N,O,X,Q,W,le,ie,$,ae,ue,we,me,Te,Ie,pe,Ce,Ge,Qe,Ee,ze,Y,be,Ue,Ae,C=n;function he(b,Z){return t.getContext(b,Z)}try{let b={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"178"}`),t.addEventListener("webglcontextlost",ke,!1),t.addEventListener("webglcontextrestored",We,!1),t.addEventListener("webglcontextcreationerror",Ze,!1),C===null){let Z="webgl2";if(C=he(Z,b),C===null)throw he(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}function Be(){N=new fp(C),N.init(),be=new Pm(C,N),O=new hp(C,N,e,be),X=new Cm(C,N),O.reverseDepthBuffer&&d&&X.buffers.depth.setReversed(!0),Q=new _p(C),W=new _m,le=new Rm(C,N,X,W,O,be,Q),ie=new dp(M),$=new mp(M),ae=new sp(C),Ue=new lp(C,ae),ue=new gp(C,ae,Q,Ue),we=new yp(C,ue,ae,Q),Ee=new xp(C,O,le),Ce=new up(W),me=new vm(M,ie,$,N,O,Ue,Ce),Te=new Lm(M,W),Ie=new ym,pe=new Tm(N),Qe=new op(M,ie,$,X,we,p,l),Ge=new Em(M,we,O),Ae=new Dm(C,Q,O,X),ze=new cp(C,N,Q),Y=new vp(C,N,Q),Q.programs=me.programs,M.capabilities=O,M.extensions=N,M.properties=W,M.renderLists=Ie,M.shadowMap=Ge,M.state=X,M.info=Q}Be();let Se=new jc(M,C);function ke(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function We(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let b=Q.autoReset,Z=Ge.enabled,te=Ge.autoUpdate,ce=Ge.needsUpdate,K=Ge.type;Be(),Q.autoReset=b,Ge.enabled=Z,Ge.autoUpdate=te,Ge.needsUpdate=ce,Ge.type=K}function Ze(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ct(b){let Z=b.target;Z.removeEventListener("dispose",ct),(function(te){(function(ce){let K=W.get(ce).programs;K!==void 0&&(K.forEach(function(fe){me.releaseProgram(fe)}),ce.isShaderMaterial&&me.releaseShaderCache(ce))})(te),W.remove(te)})(Z)}function ot(b,Z,te){b.transparent===!0&&b.side===Lt&&b.forceSinglePass===!1?(b.side=Xt,b.needsUpdate=!0,ar(b,Z,te),b.side=wi,b.needsUpdate=!0,ar(b,Z,te),b.side=Lt):ar(b,Z,te)}this.xr=Se,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let b=N.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=N.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(b){b!==void 0&&(ee=b,this.setSize(V,ne,!1))},this.getSize=function(b){return b.set(V,ne)},this.setSize=function(b,Z,te=!0){Se.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(V=b,ne=Z,t.width=Math.floor(b*ee),t.height=Math.floor(Z*ee),te===!0&&(t.style.width=b+"px",t.style.height=Z+"px"),this.setViewport(0,0,b,Z))},this.getDrawingBufferSize=function(b){return b.set(V*ee,ne*ee).floor()},this.setDrawingBufferSize=function(b,Z,te){V=b,ne=Z,ee=te,t.width=Math.floor(b*te),t.height=Math.floor(Z*te),this.setViewport(0,0,b,Z)},this.getCurrentViewport=function(b){return b.copy(F)},this.getViewport=function(b){return b.copy(J)},this.setViewport=function(b,Z,te,ce){b.isVector4?J.set(b.x,b.y,b.z,b.w):J.set(b,Z,te,ce),X.viewport(F.copy(J).multiplyScalar(ee).round())},this.getScissor=function(b){return b.copy(oe)},this.setScissor=function(b,Z,te,ce){b.isVector4?oe.set(b.x,b.y,b.z,b.w):oe.set(b,Z,te,ce),X.scissor(I.copy(oe).multiplyScalar(ee).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(b){X.setScissorTest(Me=b)},this.setOpaqueSort=function(b){re=b},this.setTransparentSort=function(b){se=b},this.getClearColor=function(b){return b.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(b=!0,Z=!0,te=!0){let ce=0;if(b){let K=!1;if(B!==null){let fe=B.texture.format;K=fe===ec||fe===Ql||fe===Do}if(K){let fe=B.texture.type,Le=fe===Gn||fe===Ji||fe===Xr||fe===jr||fe===Io||fe===Lo,Fe=Qe.getClearColor(),He=Qe.getClearAlpha(),Ye=Fe.r,Xe=Fe.g,je=Fe.b;Le?(f[0]=Ye,f[1]=Xe,f[2]=je,f[3]=He,C.clearBufferuiv(C.COLOR,0,f)):(v[0]=Ye,v[1]=Xe,v[2]=je,v[3]=He,C.clearBufferiv(C.COLOR,0,v))}else ce|=C.COLOR_BUFFER_BIT}Z&&(ce|=C.DEPTH_BUFFER_BIT),te&&(ce|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",Ze,!1),Qe.dispose(),Ie.dispose(),pe.dispose(),W.dispose(),ie.dispose(),$.dispose(),we.dispose(),Ue.dispose(),Ae.dispose(),me.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",zt),Se.removeEventListener("sessionend",Zt),Ct.stop()},this.renderBufferDirect=function(b,Z,te,ce,K,fe){Z===null&&(Z=G);let Le=K.isMesh&&K.matrixWorld.determinant()<0,Fe=(function(_e,ge,Ke,Ne,Oe){ge.isScene!==!0&&(ge=G),le.resetTextureUnits();let lt=ge.fog,mt=Ne.isMeshStandardMaterial?ge.environment:null,kt=B===null?M.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Gi,Pt=(Ne.isMeshStandardMaterial?$:ie).get(Ne.envMap||mt),Ft=Ne.vertexColors===!0&&!!Ke.attributes.color&&Ke.attributes.color.itemSize===4,Ot=!!Ke.attributes.tangent&&(!!Ne.normalMap||Ne.anisotropy>0),jt=!!Ke.morphAttributes.position,hn=!!Ke.morphAttributes.normal,An=!!Ke.morphAttributes.color,hi=oi;Ne.toneMapped&&(B!==null&&B.isXRRenderTarget!==!0||(hi=M.toneMapping));let Pi=Ke.morphAttributes.position||Ke.morphAttributes.normal||Ke.morphAttributes.color,ui=Pi!==void 0?Pi.length:0,st=W.get(Ne),$n=g.state.lights;if(ye===!0&&(de===!0||_e!==P)){let Kt=_e===P&&Ne.id===L;Ce.setState(Ne,_e,Kt)}let en=!1;Ne.version===st.__version?st.needsLights&&st.lightsStateVersion!==$n.state.version||st.outputColorSpace!==kt||Oe.isBatchedMesh&&st.batching===!1?en=!0:Oe.isBatchedMesh||st.batching!==!0?Oe.isBatchedMesh&&st.batchingColor===!0&&Oe.colorTexture===null||Oe.isBatchedMesh&&st.batchingColor===!1&&Oe.colorTexture!==null||Oe.isInstancedMesh&&st.instancing===!1?en=!0:Oe.isInstancedMesh||st.instancing!==!0?Oe.isSkinnedMesh&&st.skinning===!1?en=!0:Oe.isSkinnedMesh||st.skinning!==!0?Oe.isInstancedMesh&&st.instancingColor===!0&&Oe.instanceColor===null||Oe.isInstancedMesh&&st.instancingColor===!1&&Oe.instanceColor!==null||Oe.isInstancedMesh&&st.instancingMorph===!0&&Oe.morphTexture===null||Oe.isInstancedMesh&&st.instancingMorph===!1&&Oe.morphTexture!==null||st.envMap!==Pt||Ne.fog===!0&&st.fog!==lt?en=!0:st.numClippingPlanes===void 0||st.numClippingPlanes===Ce.numPlanes&&st.numIntersection===Ce.numIntersection?(st.vertexAlphas!==Ft||st.vertexTangents!==Ot||st.morphTargets!==jt||st.morphNormals!==hn||st.morphColors!==An||st.toneMapping!==hi||st.morphTargetsCount!==ui)&&(en=!0):en=!0:en=!0:en=!0:en=!0:(en=!0,st.__version=Ne.version);let jn=st.currentProgram;en===!0&&(jn=ar(Ne,ge,Oe));let Zs=!1,qn=!1,Ii=!1,_t=jn.getUniforms(),un=st.uniforms;if(X.useProgram(jn.program)&&(Zs=!0,qn=!0,Ii=!0),Ne.id!==L&&(L=Ne.id,qn=!0),Zs||P!==_e){X.buffers.depth.getReversed()?(Ve.copy(_e.projectionMatrix),Au(Ve),Cu(Ve),_t.setValue(C,"projectionMatrix",Ve)):_t.setValue(C,"projectionMatrix",_e.projectionMatrix),_t.setValue(C,"viewMatrix",_e.matrixWorldInverse);let Kt=_t.map.cameraPosition;Kt!==void 0&&Kt.setValue(C,S.setFromMatrixPosition(_e.matrixWorld)),O.logarithmicDepthBuffer&&_t.setValue(C,"logDepthBufFC",2/(Math.log(_e.far+1)/Math.LN2)),(Ne.isMeshPhongMaterial||Ne.isMeshToonMaterial||Ne.isMeshLambertMaterial||Ne.isMeshBasicMaterial||Ne.isMeshStandardMaterial||Ne.isShaderMaterial)&&_t.setValue(C,"isOrthographic",_e.isOrthographicCamera===!0),P!==_e&&(P=_e,qn=!0,Ii=!0)}if(Oe.isSkinnedMesh){_t.setOptional(C,Oe,"bindMatrix"),_t.setOptional(C,Oe,"bindMatrixInverse");let Kt=Oe.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),_t.setValue(C,"boneTexture",Kt.boneTexture,le))}Oe.isBatchedMesh&&(_t.setOptional(C,Oe,"batchingTexture"),_t.setValue(C,"batchingTexture",Oe._matricesTexture,le),_t.setOptional(C,Oe,"batchingIdTexture"),_t.setValue(C,"batchingIdTexture",Oe._indirectTexture,le),_t.setOptional(C,Oe,"batchingColorTexture"),Oe._colorsTexture!==null&&_t.setValue(C,"batchingColorTexture",Oe._colorsTexture,le));let Li=Ke.morphAttributes;Li.position===void 0&&Li.normal===void 0&&Li.color===void 0||Ee.update(Oe,Ke,jn),(qn||st.receiveShadow!==Oe.receiveShadow)&&(st.receiveShadow=Oe.receiveShadow,_t.setValue(C,"receiveShadow",Oe.receiveShadow)),Ne.isMeshGouraudMaterial&&Ne.envMap!==null&&(un.envMap.value=Pt,un.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),Ne.isMeshStandardMaterial&&Ne.envMap===null&&ge.environment!==null&&(un.envMapIntensity.value=ge.environmentIntensity),qn&&(_t.setValue(C,"toneMappingExposure",M.toneMappingExposure),st.needsLights&&(tn=Ii,(Jt=un).ambientLightColor.needsUpdate=tn,Jt.lightProbe.needsUpdate=tn,Jt.directionalLights.needsUpdate=tn,Jt.directionalLightShadows.needsUpdate=tn,Jt.pointLights.needsUpdate=tn,Jt.pointLightShadows.needsUpdate=tn,Jt.spotLights.needsUpdate=tn,Jt.spotLightShadows.needsUpdate=tn,Jt.rectAreaLights.needsUpdate=tn,Jt.hemisphereLights.needsUpdate=tn),lt&&Ne.fog===!0&&Te.refreshFogUniforms(un,lt),Te.refreshMaterialUniforms(un,Ne,ee,ne,g.state.transmissionRenderTarget[_e.id]),Yr.upload(C,Ys(st),un,le));var Jt,tn;if(Ne.isShaderMaterial&&Ne.uniformsNeedUpdate===!0&&(Yr.upload(C,Ys(st),un,le),Ne.uniformsNeedUpdate=!1),Ne.isSpriteMaterial&&_t.setValue(C,"center",Oe.center),_t.setValue(C,"modelViewMatrix",Oe.modelViewMatrix),_t.setValue(C,"normalMatrix",Oe.normalMatrix),_t.setValue(C,"modelMatrix",Oe.matrixWorld),Ne.isShaderMaterial||Ne.isRawShaderMaterial){let Kt=Ne.uniformsGroups;for(let Cn=0,Ko=Kt.length;Cn<Ko;Cn++){let lr=Kt[Cn];Ae.update(lr,jn),Ae.bind(lr,jn)}}return jn})(b,Z,te,ce,K);X.setMaterial(ce,Le);let He=te.index,Ye=1;if(ce.wireframe===!0){if(He=ue.getWireframeAttribute(te),He===void 0)return;Ye=2}let Xe=te.drawRange,je=te.attributes.position,Je=Xe.start*Ye,gt=(Xe.start+Xe.count)*Ye;fe!==null&&(Je=Math.max(Je,fe.start*Ye),gt=Math.min(gt,(fe.start+fe.count)*Ye)),He!==null?(Je=Math.max(Je,0),gt=Math.min(gt,He.count)):je!=null&&(Je=Math.max(Je,0),gt=Math.min(gt,je.count));let vt=gt-Je;if(vt<0||vt===1/0)return;let St;Ue.setup(K,ce,Fe,te,He);let j=ze;if(He!==null&&(St=ae.get(He),j=Y,j.setIndex(St)),K.isMesh)ce.wireframe===!0?(X.setLineWidth(ce.wireframeLinewidth*E()),j.setMode(C.LINES)):j.setMode(C.TRIANGLES);else if(K.isLine){let _e=ce.linewidth;_e===void 0&&(_e=1),X.setLineWidth(_e*E()),K.isLineSegments?j.setMode(C.LINES):K.isLineLoop?j.setMode(C.LINE_LOOP):j.setMode(C.LINE_STRIP)}else K.isPoints?j.setMode(C.POINTS):K.isSprite&&j.setMode(C.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Vi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),j.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(N.get("WEBGL_multi_draw"))j.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let _e=K._multiDrawStarts,ge=K._multiDrawCounts,Ke=K._multiDrawCount,Ne=He?ae.get(He).bytesPerElement:1,Oe=W.get(ce).currentProgram.getUniforms();for(let lt=0;lt<Ke;lt++)Oe.setValue(C,"_gl_DrawID",lt),j.render(_e[lt]/Ne,ge[lt])}else if(K.isInstancedMesh)j.renderInstances(Je,vt,K.count);else if(te.isInstancedBufferGeometry){let _e=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,ge=Math.min(te.instanceCount,_e);j.renderInstances(Je,vt,ge)}else j.render(Je,vt)},this.compile=function(b,Z,te=null){te===null&&(te=b),g=pe.get(te),g.init(Z),x.push(g),te.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(g.pushLight(K),K.castShadow&&g.pushShadow(K))}),b!==te&&b.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(g.pushLight(K),K.castShadow&&g.pushShadow(K))}),g.setupLights();let ce=new Set;return b.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let fe=K.material;if(fe)if(Array.isArray(fe))for(let Le=0;Le<fe.length;Le++){let Fe=fe[Le];ot(Fe,te,K),ce.add(Fe)}else ot(fe,te,K),ce.add(fe)}),g=x.pop(),ce},this.compileAsync=function(b,Z,te=null){let ce=this.compile(b,Z,te);return new Promise(K=>{function fe(){ce.forEach(function(Le){W.get(Le).currentProgram.isReady()&&ce.delete(Le)}),ce.size!==0?setTimeout(fe,10):K(b)}N.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let pt=null;function zt(){Ct.stop()}function Zt(){Ct.start()}let Ct=new sd;function Ci(b,Z,te,ce){if(b.visible===!1)return;if(b.layers.test(Z.layers)){if(b.isGroup)te=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(Z);else if(b.isLight)g.pushLight(b),b.castShadow&&g.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Pe.intersectsSprite(b)){ce&&k.setFromMatrixPosition(b.matrixWorld).applyMatrix4(R);let fe=we.update(b),Le=b.material;Le.visible&&m.push(b,fe,Le,te,k.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Pe.intersectsObject(b))){let fe=we.update(b),Le=b.material;if(ce&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),k.copy(b.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),k.copy(fe.boundingSphere.center)),k.applyMatrix4(b.matrixWorld).applyMatrix4(R)),Array.isArray(Le)){let Fe=fe.groups;for(let He=0,Ye=Fe.length;He<Ye;He++){let Xe=Fe[He],je=Le[Xe.materialIndex];je&&je.visible&&m.push(b,fe,je,te,k.z,Xe)}}else Le.visible&&m.push(b,fe,Le,te,k.z,null)}}let K=b.children;for(let fe=0,Le=K.length;fe<Le;fe++)Ci(K[fe],Z,te,ce)}function sr(b,Z,te,ce){let K=b.opaque,fe=b.transmissive,Le=b.transparent;g.setupLightsView(te),ye===!0&&Ce.setGlobalState(M.clippingPlanes,te),ce&&X.viewport(F.copy(ce)),K.length>0&&Ri(K,Z,te),fe.length>0&&Ri(fe,Z,te),Le.length>0&&Ri(Le,Z,te),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function ci(b,Z,te,ce){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ce.id]===void 0&&(g.state.transmissionRenderTarget[ce.id]=new Bn(1,1,{generateMipmaps:!0,type:N.has("EXT_color_buffer_half_float")||N.has("EXT_color_buffer_float")?$r:Gn,minFilter:Zi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));let K=g.state.transmissionRenderTarget[ce.id],fe=ce.viewport||F;K.setSize(fe.z*M.transmissionResolutionScale,fe.w*M.transmissionResolutionScale);let Le=M.getRenderTarget(),Fe=M.getActiveCubeFace(),He=M.getActiveMipmapLevel();M.setRenderTarget(K),M.getClearColor(z),q=M.getClearAlpha(),q<1&&M.setClearColor(16777215,.5),M.clear(),y&&Qe.render(te);let Ye=M.toneMapping;M.toneMapping=oi;let Xe=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),g.setupLightsView(ce),ye===!0&&Ce.setGlobalState(M.clippingPlanes,ce),Ri(b,te,ce),le.updateMultisampleRenderTarget(K),le.updateRenderTargetMipmap(K),N.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Je=0,gt=Z.length;Je<gt;Je++){let vt=Z[Je],St=vt.object,j=vt.geometry,_e=vt.material,ge=vt.group;if(_e.side===Lt&&St.layers.test(ce.layers)){let Ke=_e.side;_e.side=Xt,_e.needsUpdate=!0,qs(St,te,ce,j,_e,ge),_e.side=Ke,_e.needsUpdate=!0,je=!0}}je===!0&&(le.updateMultisampleRenderTarget(K),le.updateRenderTargetMipmap(K))}M.setRenderTarget(Le,Fe,He),M.setClearColor(z,q),Xe!==void 0&&(ce.viewport=Xe),M.toneMapping=Ye}function Ri(b,Z,te){let ce=Z.isScene===!0?Z.overrideMaterial:null;for(let K=0,fe=b.length;K<fe;K++){let Le=b[K],Fe=Le.object,He=Le.geometry,Ye=Le.group,Xe=Le.material;Xe.allowOverride===!0&&ce!==null&&(Xe=ce),Fe.layers.test(te.layers)&&qs(Fe,Z,te,He,Xe,Ye)}}function qs(b,Z,te,ce,K,fe){b.onBeforeRender(M,Z,te,ce,K,fe),b.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),K.onBeforeRender(M,Z,te,ce,b,fe),K.transparent===!0&&K.side===Lt&&K.forceSinglePass===!1?(K.side=Xt,K.needsUpdate=!0,M.renderBufferDirect(te,Z,ce,K,b,fe),K.side=wi,K.needsUpdate=!0,M.renderBufferDirect(te,Z,ce,K,b,fe),K.side=Lt):M.renderBufferDirect(te,Z,ce,K,b,fe),b.onAfterRender(M,Z,te,ce,K,fe)}function ar(b,Z,te){Z.isScene!==!0&&(Z=G);let ce=W.get(b),K=g.state.lights,fe=g.state.shadowsArray,Le=K.state.version,Fe=me.getParameters(b,K.state,fe,Z,te),He=me.getProgramCacheKey(Fe),Ye=ce.programs;ce.environment=b.isMeshStandardMaterial?Z.environment:null,ce.fog=Z.fog,ce.envMap=(b.isMeshStandardMaterial?$:ie).get(b.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&b.envMap===null?Z.environmentRotation:b.envMapRotation,Ye===void 0&&(b.addEventListener("dispose",ct),Ye=new Map,ce.programs=Ye);let Xe=Ye.get(He);if(Xe!==void 0){if(ce.currentProgram===Xe&&ce.lightsStateVersion===Le)return or(b,Fe),Xe}else Fe.uniforms=me.getUniforms(b),b.onBeforeCompile(Fe,M),Xe=me.acquireProgram(Fe,He),Ye.set(He,Xe),ce.uniforms=Fe.uniforms;let je=ce.uniforms;return(b.isShaderMaterial||b.isRawShaderMaterial)&&b.clipping!==!0||(je.clippingPlanes=Ce.uniform),or(b,Fe),ce.needsLights=(function(Je){return Je.isMeshLambertMaterial||Je.isMeshToonMaterial||Je.isMeshPhongMaterial||Je.isMeshStandardMaterial||Je.isShadowMaterial||Je.isShaderMaterial&&Je.lights===!0})(b),ce.lightsStateVersion=Le,ce.needsLights&&(je.ambientLightColor.value=K.state.ambient,je.lightProbe.value=K.state.probe,je.directionalLights.value=K.state.directional,je.directionalLightShadows.value=K.state.directionalShadow,je.spotLights.value=K.state.spot,je.spotLightShadows.value=K.state.spotShadow,je.rectAreaLights.value=K.state.rectArea,je.ltc_1.value=K.state.rectAreaLTC1,je.ltc_2.value=K.state.rectAreaLTC2,je.pointLights.value=K.state.point,je.pointLightShadows.value=K.state.pointShadow,je.hemisphereLights.value=K.state.hemi,je.directionalShadowMap.value=K.state.directionalShadowMap,je.directionalShadowMatrix.value=K.state.directionalShadowMatrix,je.spotShadowMap.value=K.state.spotShadowMap,je.spotLightMatrix.value=K.state.spotLightMatrix,je.spotLightMap.value=K.state.spotLightMap,je.pointShadowMap.value=K.state.pointShadowMap,je.pointShadowMatrix.value=K.state.pointShadowMatrix),ce.currentProgram=Xe,ce.uniformsList=null,Xe}function Ys(b){if(b.uniformsList===null){let Z=b.currentProgram.getUniforms();b.uniformsList=Yr.seqWithValue(Z.seq,b.uniforms)}return b.uniformsList}function or(b,Z){let te=W.get(b);te.outputColorSpace=Z.outputColorSpace,te.batching=Z.batching,te.batchingColor=Z.batchingColor,te.instancing=Z.instancing,te.instancingColor=Z.instancingColor,te.instancingMorph=Z.instancingMorph,te.skinning=Z.skinning,te.morphTargets=Z.morphTargets,te.morphNormals=Z.morphNormals,te.morphColors=Z.morphColors,te.morphTargetsCount=Z.morphTargetsCount,te.numClippingPlanes=Z.numClippingPlanes,te.numIntersection=Z.numClipIntersection,te.vertexAlphas=Z.vertexAlphas,te.vertexTangents=Z.vertexTangents,te.toneMapping=Z.toneMapping}Ct.setAnimationLoop(function(b){pt&&pt(b)}),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(b){pt=b,Se.setAnimationLoop(b),b===null?Ct.stop():Ct.start()},Se.addEventListener("sessionstart",zt),Se.addEventListener("sessionend",Zt),this.render=function(b,Z){if(Z!==void 0&&Z.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(w===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(Z),Z=Se.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,Z,B),g=pe.get(b,x.length),g.init(Z),x.push(g),R.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Pe.setFromProjectionMatrix(R),de=this.localClippingEnabled,ye=Ce.init(this.clippingPlanes,de),m=Ie.get(b,_.length),m.init(),_.push(m),Se.enabled===!0&&Se.isPresenting===!0){let fe=M.xr.getDepthSensingMesh();fe!==null&&Ci(fe,Z,-1/0,M.sortObjects)}Ci(b,Z,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(re,se),y=Se.enabled===!1||Se.isPresenting===!1||Se.hasDepthSensing()===!1,y&&Qe.addToRenderList(m,b),this.info.render.frame++,ye===!0&&Ce.beginShadows();let te=g.state.shadowsArray;Ge.render(te,b,Z),ye===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset();let ce=m.opaque,K=m.transmissive;if(g.setupLights(),Z.isArrayCamera){let fe=Z.cameras;if(K.length>0)for(let Le=0,Fe=fe.length;Le<Fe;Le++)ci(ce,K,b,fe[Le]);y&&Qe.render(b);for(let Le=0,Fe=fe.length;Le<Fe;Le++){let He=fe[Le];sr(m,b,He,He.viewport)}}else K.length>0&&ci(ce,K,b,Z),y&&Qe.render(b),sr(m,b,Z);B!==null&&U===0&&(le.updateMultisampleRenderTarget(B),le.updateRenderTargetMipmap(B)),b.isScene===!0&&b.onAfterRender(M,b,Z),Ue.resetDefaultState(),L=-1,P=null,x.pop(),x.length>0?(g=x[x.length-1],ye===!0&&Ce.setGlobalState(M.clippingPlanes,g.state.camera)):g=null,_.pop(),m=_.length>0?_[_.length-1]:null},this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(b,Z,te){let ce=W.get(b);ce.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),W.get(b.texture).__webglTexture=Z,W.get(b.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:te,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,Z){let te=W.get(b);te.__webglFramebuffer=Z,te.__useDefaultFramebuffer=Z===void 0};let es=C.createFramebuffer();this.setRenderTarget=function(b,Z=0,te=0){B=b,T=Z,U=te;let ce=!0,K=null,fe=!1,Le=!1;if(b){let Fe=W.get(b);if(Fe.__useDefaultFramebuffer!==void 0)X.bindFramebuffer(C.FRAMEBUFFER,null),ce=!1;else if(Fe.__webglFramebuffer===void 0)le.setupRenderTarget(b);else if(Fe.__hasExternalTextures)le.rebindTextures(b,W.get(b.texture).__webglTexture,W.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Xe=b.depthTexture;if(Fe.__boundDepthTexture!==Xe){if(Xe!==null&&W.has(Xe)&&(b.width!==Xe.image.width||b.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(b)}}let He=b.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Le=!0);let Ye=W.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(K=Array.isArray(Ye[Z])?Ye[Z][te]:Ye[Z],fe=!0):K=b.samples>0&&le.useMultisampledRTT(b)===!1?W.get(b).__webglMultisampledFramebuffer:Array.isArray(Ye)?Ye[te]:Ye,F.copy(b.viewport),I.copy(b.scissor),H=b.scissorTest}else F.copy(J).multiplyScalar(ee).floor(),I.copy(oe).multiplyScalar(ee).floor(),H=Me;if(te!==0&&(K=es),X.bindFramebuffer(C.FRAMEBUFFER,K)&&ce&&X.drawBuffers(b,K),X.viewport(F),X.scissor(I),X.setScissorTest(H),fe){let Fe=W.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Fe.__webglTexture,te)}else if(Le){let Fe=W.get(b.texture),He=Z;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Fe.__webglTexture,te,He)}else if(b!==null&&te!==0){let Fe=W.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Fe.__webglTexture,te)}L=-1},this.readRenderTargetPixels=function(b,Z,te,ce,K,fe,Le,Fe=0){if(!b||!b.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=W.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Le!==void 0&&(He=He[Le]),He){X.bindFramebuffer(C.FRAMEBUFFER,He);try{let Ye=b.textures[Fe],Xe=Ye.format,je=Ye.type;if(!O.textureFormatReadable(Xe))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!O.textureTypeReadable(je))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");Z>=0&&Z<=b.width-ce&&te>=0&&te<=b.height-K&&(b.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Fe),C.readPixels(Z,te,ce,K,be.convert(Xe),be.convert(je),fe))}finally{let Ye=B!==null?W.get(B).__webglFramebuffer:null;X.bindFramebuffer(C.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(b,Z,te,ce,K,fe,Le,Fe=0){if(!b||!b.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=W.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Le!==void 0&&(He=He[Le]),He){if(Z>=0&&Z<=b.width-ce&&te>=0&&te<=b.height-K){X.bindFramebuffer(C.FRAMEBUFFER,He);let Ye=b.textures[Fe],Xe=Ye.format,je=Ye.type;if(!O.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!O.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Je=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Je),C.bufferData(C.PIXEL_PACK_BUFFER,fe.byteLength,C.STREAM_READ),b.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Fe),C.readPixels(Z,te,ce,K,be.convert(Xe),be.convert(je),0);let gt=B!==null?W.get(B).__webglFramebuffer:null;X.bindFramebuffer(C.FRAMEBUFFER,gt);let vt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Eu(C,vt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Je),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,fe),C.deleteBuffer(Je),C.deleteSync(vt),fe}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,Z=null,te=0){let ce=Math.pow(2,-te),K=Math.floor(b.image.width*ce),fe=Math.floor(b.image.height*ce),Le=Z!==null?Z.x:0,Fe=Z!==null?Z.y:0;le.setTexture2D(b,0),C.copyTexSubImage2D(C.TEXTURE_2D,te,0,0,Le,Fe,K,fe),X.unbindTexture()};let Zo=C.createFramebuffer(),Jo=C.createFramebuffer();this.copyTextureToTexture=function(b,Z,te=null,ce=null,K=0,fe=null){let Le,Fe,He,Ye,Xe,je,Je,gt,vt;fe===null&&(K!==0?(Vi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),fe=K,K=0):fe=0);let St=b.isCompressedTexture?b.mipmaps[fe]:b.image;if(te!==null)Le=te.max.x-te.min.x,Fe=te.max.y-te.min.y,He=te.isBox3?te.max.z-te.min.z:1,Ye=te.min.x,Xe=te.min.y,je=te.isBox3?te.min.z:0;else{let Ft=Math.pow(2,-K);Le=Math.floor(St.width*Ft),Fe=Math.floor(St.height*Ft),He=b.isDataArrayTexture?St.depth:b.isData3DTexture?Math.floor(St.depth*Ft):1,Ye=0,Xe=0,je=0}ce!==null?(Je=ce.x,gt=ce.y,vt=ce.z):(Je=0,gt=0,vt=0);let j=be.convert(Z.format),_e=be.convert(Z.type),ge;Z.isData3DTexture?(le.setTexture3D(Z,0),ge=C.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(le.setTexture2DArray(Z,0),ge=C.TEXTURE_2D_ARRAY):(le.setTexture2D(Z,0),ge=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,Z.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,Z.unpackAlignment);let Ke=C.getParameter(C.UNPACK_ROW_LENGTH),Ne=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Oe=C.getParameter(C.UNPACK_SKIP_PIXELS),lt=C.getParameter(C.UNPACK_SKIP_ROWS),mt=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,St.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,St.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ye),C.pixelStorei(C.UNPACK_SKIP_ROWS,Xe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,je);let kt=b.isDataArrayTexture||b.isData3DTexture,Pt=Z.isDataArrayTexture||Z.isData3DTexture;if(b.isDepthTexture){let Ft=W.get(b),Ot=W.get(Z),jt=W.get(Ft.__renderTarget),hn=W.get(Ot.__renderTarget);X.bindFramebuffer(C.READ_FRAMEBUFFER,jt.__webglFramebuffer),X.bindFramebuffer(C.DRAW_FRAMEBUFFER,hn.__webglFramebuffer);for(let An=0;An<He;An++)kt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,W.get(b).__webglTexture,K,je+An),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,W.get(Z).__webglTexture,fe,vt+An)),C.blitFramebuffer(Ye,Xe,Le,Fe,Je,gt,Le,Fe,C.DEPTH_BUFFER_BIT,C.NEAREST);X.bindFramebuffer(C.READ_FRAMEBUFFER,null),X.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(K!==0||b.isRenderTargetTexture||W.has(b)){let Ft=W.get(b),Ot=W.get(Z);X.bindFramebuffer(C.READ_FRAMEBUFFER,Zo),X.bindFramebuffer(C.DRAW_FRAMEBUFFER,Jo);for(let jt=0;jt<He;jt++)kt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ft.__webglTexture,K,je+jt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ft.__webglTexture,K),Pt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ot.__webglTexture,fe,vt+jt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ot.__webglTexture,fe),K!==0?C.blitFramebuffer(Ye,Xe,Le,Fe,Je,gt,Le,Fe,C.COLOR_BUFFER_BIT,C.NEAREST):Pt?C.copyTexSubImage3D(ge,fe,Je,gt,vt+jt,Ye,Xe,Le,Fe):C.copyTexSubImage2D(ge,fe,Je,gt,Ye,Xe,Le,Fe);X.bindFramebuffer(C.READ_FRAMEBUFFER,null),X.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Pt?b.isDataTexture||b.isData3DTexture?C.texSubImage3D(ge,fe,Je,gt,vt,Le,Fe,He,j,_e,St.data):Z.isCompressedArrayTexture?C.compressedTexSubImage3D(ge,fe,Je,gt,vt,Le,Fe,He,j,St.data):C.texSubImage3D(ge,fe,Je,gt,vt,Le,Fe,He,j,_e,St):b.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,fe,Je,gt,Le,Fe,j,_e,St.data):b.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,fe,Je,gt,St.width,St.height,j,St.data):C.texSubImage2D(C.TEXTURE_2D,fe,Je,gt,Le,Fe,j,_e,St);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ke),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ne),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Oe),C.pixelStorei(C.UNPACK_SKIP_ROWS,lt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,mt),fe===0&&Z.generateMipmaps&&C.generateMipmap(ge),X.unbindTexture()},this.copyTextureToTexture3D=function(b,Z,te=null,ce=null,K=0){return Vi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,Z,te,ce,K)},this.initRenderTarget=function(b){W.get(b).__webglFramebuffer===void 0&&le.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?le.setTextureCube(b,0):b.isData3DTexture?le.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?le.setTexture2DArray(b,0):le.setTexture2D(b,0),X.unbindTexture()},this.resetState=function(){T=0,U=0,B=null,X.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}};var Ei=(r,e=0,t=1)=>Math.min(t,Math.max(e,r)),rt=(r,e,t)=>{let n=Ei((t-r)/(e-r));return n*n*(3-2*n)},En=(r,e,t)=>{let n=Ei((t-r)/(e-r));return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2};var it=(r,e,t)=>r+(e-r)*t,jo=r=>()=>(r=r*16807%2147483647)/2147483647,Wn=1/6,Um=1/3,Nm=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],Wo=new Uint8Array(512);{let r=jo(1234567),e=new Uint8Array(256);for(let t=0;t<256;t++)e[t]=t;for(let t=255;t>0;t--){let n=Math.floor(r()*(t+1));[e[t],e[n]]=[e[n],e[t]]}for(let t=0;t<512;t++)Wo[t]=e[t&255]}function rr(r,e,t){let n=(r+e+t)*Um,i=Math.floor(r+n),s=Math.floor(e+n),a=Math.floor(t+n),o=(i+s+a)*Wn,l=r-i+o,c=e-s+o,h=t-a+o,u,d,p,f,v,m;l>=c?c>=h?(u=1,d=0,p=0,f=1,v=1,m=0):l>=h?(u=1,d=0,p=0,f=1,v=0,m=1):(u=0,d=0,p=1,f=1,v=0,m=1):c<h?(u=0,d=0,p=1,f=0,v=1,m=1):l<h?(u=0,d=1,p=0,f=0,v=1,m=1):(u=0,d=1,p=0,f=1,v=1,m=0);let g=[[l,c,h,0,0,0],[l-u+Wn,c-d+Wn,h-p+Wn,u,d,p],[l-f+2*Wn,c-v+2*Wn,h-m+2*Wn,f,v,m],[l-1+3*Wn,c-1+3*Wn,h-1+3*Wn,1,1,1]],_=0,x=i&255,M=s&255,w=a&255;for(let[T,U,B,L,P,F]of g){let I=.6-T*T-U*U-B*B;if(I>0){let H=Nm[Wo[x+L+Wo[M+P+Wo[w+F]]]%12];I*=I,_+=I*I*(H[0]*T+H[1]*U+H[2]*B)}}return 32*_}var Fm=(r,e,t,n=4)=>{let i=.5,s=1,a=0;for(let o=0;o<n;o++)a+=i*rr(r*s,e*s,t*s),i*=.5,s*=2;return a};function Om(r=1){let e=new Nr;e.add(new $e(new si(24,16,24),new ri({color:new De(.5,.43,.35),side:Xt})));let t=(n,i,s,a)=>{let o=new $e(new zn(n,i),new ri({color:new De(...s),side:Lt}));o.position.set(a[0]*r,a[1],a[2]),o.lookAt(0,0,0),e.add(o)};return t(8,6,[7,6.6,6],[-5,7,5]),t(1.4,10,[3.2,3.1,3],[-9,0,-1]),t(1.4,10,[2.4,2.3,2.2],[9,.5,-2]),t(7,12,[.03,.025,.02],[-8.5,0,6.5]),t(7,12,[.03,.025,.02],[8.5,0,6.5]),t(16,6,[.9,.8,.68],[0,-7.5,0]),e}var Kr=1,Qt=1.13,js=.96;var hd=1/.745;function Bm(){let r=document.createElement("canvas");r.width=r.height=512;let e=r.getContext("2d"),t=jo(77);e.fillStyle="rgb(224,224,224)",e.fillRect(0,0,512,512);for(let i=0;i<5200;i++){let s=t()*512,a=20+t()*472,o=.35+t()*.9;e.fillStyle=`rgba(255,${238+t()*17|0},${222+t()*30|0},${(.3+t()*.45).toFixed(2)})`,e.beginPath(),e.ellipse(s,a,o,o*(.8+t()*.4),0,0,6.283),e.fill()}for(let i=0;i<900;i++){let s=t()*512,a=t()*512,o=.5+t()*1.4;e.fillStyle=`rgba(150,120,120,${(.12+t()*.18).toFixed(2)})`,e.beginPath(),e.arc(s,a,o,0,6.283),e.fill()}let n=new Wi(r);return n.colorSpace=Bt,n.wrapS=n.wrapT=Rr,n.anisotropy=8,n}function zm(r){let e=new ln(1,96,80,r>0?Math.PI/2:-Math.PI/2,Math.PI),t=e.attributes.position,n=e.attributes.normal,i=e.attributes.uv,s=t.count,a=new Float32Array(t.array),o=new Float32Array(s*3),l=new Float32Array(s*3),c=new Float32Array(s*3),h=new Float32Array(s*2),u=new De("#5e0610"),d=new De("#a80b1a"),p=new De("#cf3a1c"),f=new De,v=new De("#3d100b"),m=new De("#6a1f14"),g=new De("#9c4024"),_=new De;for(let M=0;M<s;M++){let w=a[M*3],T=a[M*3+1],U=a[M*3+2],B=rt(.86,1,-T),L=Math.max(0,T-.9),P=1-B*.08-L*.5,F=w*Kr*P,I=T*Qt+B*.13,H=U*js*P;t.setXYZ(M,F,I,H);let z=w/Kr,q=T/Qt,V=U/js,ne=Math.hypot(z,q,V)||1;n.setXYZ(M,z/ne,q/ne,V/ne),h[M*2]=.5+F/(2*Kr)*.965,h[M*2+1]=.5+I/(2*Qt)*.965;let ee=Fm(w*2.6+3,T*2.6,U*2.6,3);f.copy(d).lerp(u,Ei(.3-ee*.55+Math.max(0,-T)*.35)).lerp(p,Ei((T-.5)*1.3)*.7),f.multiplyScalar(hd),l.set([f.r,f.g,f.b],M*3);let re=rr(w*1.8+9,T*1.2,U*1.8),se=rr(w*3.6,T*3,U*3.6),oe=.86+(re*.05+se*.012),Me=Math.abs(w)<.42?(.42-Math.abs(w))*.55:0;o.set([F*oe+r*Me*.38,I*oe*.94,H*oe*.95],M*3),_.copy(v).lerp(m,rt(-.6,.1,re)).lerp(g,rt(.2,.9,re)*.75),_.multiplyScalar(hd*(.94+rr(w*6,T*6,U*6)*.08)),c.set([_.r,_.g,_.b],M*3)}e.setAttribute("color",new Et(l,3)),e.setAttribute("colorDry",new Et(c,3)),e.setAttribute("photoUV",new Et(h,2)),e.morphAttributes.position=[new Et(o,3)];let x=new Mt;return x.setIndex(e.index),x.setAttribute("position",new Et(o,3)),x.computeVertexNormals(),e.morphAttributes.normal=[x.attributes.normal],e.userData.unit=a,e}function Yc(r){let e=new At({vertexColors:!0,map:r,roughness:.34,clearcoat:.9,clearcoatRoughness:.14,sheen:.25,sheenColor:new De("#ff9b8a"),sheenRoughness:.5,side:Lt}),t={value:0},n={value:null},i={value:0},s={value:0};return e.userData={dry:t,photo:n,usePhoto:i,glow:s},e.onBeforeCompile=a=>{Object.assign(a.uniforms,{uDry:t,uPhoto:n,uUsePhoto:i,uGlow:s}),a.vertexShader=`attribute vec3 colorDry;
attribute vec2 photoUV;
uniform float uDry;
varying vec2 vPhotoUV;
`+a.vertexShader.replace("#include <color_vertex>",`#include <color_vertex>
	vPhotoUV = photoUV;
	vColor = mix( vColor, colorDry, uDry );`),a.fragmentShader=`uniform sampler2D uPhoto;
uniform float uUsePhoto;
uniform float uDry;
uniform float uGlow;
varying vec2 vPhotoUV;
`+a.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
  // the photograph replaces the painted skin while it is fresh; it is in sRGB, the rest of the shader is linear
  vec3 photoLin = pow( texture2D( uPhoto, vPhotoUV ).rgb, vec3( 2.2 ) );
  float usePhoto = uUsePhoto * ( 1.0 - uDry );
  diffuseColor.rgb = mix( diffuseColor.rgb, photoLin * ( 1.0 - uGlow ), usePhoto );`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
  totalEmissiveRadiance += photoLin * uGlow * usePhoto;`)},e.customProgramCacheKey=()=>"cascarup-skin-2",e}function km(r,e){let n=new zn(1,1,160,1),i=n.attributes.position;for(let s=0;s<=160;s++){let a=-Math.PI/2+s/160*Math.PI*2;for(let o=0;o<2;o++){let l=o===0?1:e,c=o*161+s,h=Math.sin(a),u=Math.cos(a),d=rt(.86,1,-h),p=Math.max(0,h-.9),f=1-d*.08-p*.5;i.setXYZ(c,r*.002,(h*Qt+d*.13)*l,u*js*f*l)}}return n.computeVertexNormals(),n}function Gm(r){let e=new ln(1,72,54),t=e.attributes.position,n=e.attributes.uv,i=t.count,s=new Float32Array(i*3),a=new De("#6b3b1f"),o=new De("#8a5430"),l=new De("#2a1309"),c=new De;for(let p=0;p<i;p++){let f=t.getX(p),v=t.getY(p),m=t.getZ(p),g=r*f<0,_=f*.5,x=v*.8,M=m*.62,w=0;if(g){_*=.12;let U=.08*Math.sin(v*3.4);w=Math.exp(-Math.pow((M-U)/.06,2))*(1-Math.pow(Math.abs(v),6)),_+=r*w*.05}_+=rr(f*4,v*4,m*4)*.006,t.setXYZ(p,_,x,M),c.copy(a).lerp(o,rt(-.2,.8,rr(f*3,v*3,m*3))).lerp(l,w*.9),s.set([c.r,c.g,c.b],p*3);let T=pd[g?"flat":"round"];n.setXY(p,T.cx+(g?-r:r)*m*T.rx,1-(T.cy-v*T.ry))}e.setAttribute("color",new Et(s,3));let h=e.index.array,u=[],d=[];for(let p=0;p<h.length;p+=3)((t.getX(h[p])+t.getX(h[p+1])+t.getX(h[p+2]))*r<0?u:d).push(h[p],h[p+1],h[p+2]);return e.setIndex([...u,...d]),e.addGroup(0,u.length,0),e.addGroup(u.length,d.length,1),e.computeVertexNormals(),e}var Xo=document.documentElement.dataset.root||"",pd={flat:{src:Xo+"assets/bean/bohne-flach.webp",cx:.4859,cy:.488,rx:.4932*.95,ry:.4997*.96},round:{src:Xo+"assets/bean/bohne-rund.webp",cx:.5061,cy:.5127,rx:.4911*.95,ry:.4889*.96}};function Vm(r){let e=new ln(1,48,36,r>0?Math.PI/2:-Math.PI/2,Math.PI),t=e.attributes.position;for(let n=0;n<t.count;n++){let i=t.getX(n),s=t.getY(n),a=t.getZ(n),o=1+rr(i*6,s*6,a*6)*.03;t.setXYZ(n,i*.58*o,s*.9*o,a*.7*o)}return e.computeVertexNormals(),e}var Hm=`
uniform float uBloom; uniform float uTime; uniform float uTop; uniform vec3 uSrc0; uniform vec3 uSrc1;
vec3 m289(vec3 x) { return x - floor(x * (1. / 289.)) * 289.; }
vec4 m289(vec4 x) { return x - floor(x * (1. / 289.)) * 289.; }
vec4 perm4(vec4 x) { return m289(((x * 34.) + 10.) * x); }
float snoise(vec3 v) {
  const vec2 C = vec2(1. / 6., 1. / 3.); const vec4 D = vec4(0., .5, 1., 2.);
  vec3 i = floor(v + dot(v, C.yyy)); vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz); vec3 l = 1. - g; vec3 i1 = min(g.xyz, l.zxy); vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx; vec3 x2 = x0 - i2 + C.yyy; vec3 x3 = x0 - D.yyy;
  i = m289(i);
  vec4 p = perm4(perm4(perm4(i.z + vec4(0., i1.z, i2.z, 1.)) + i.y + vec4(0., i1.y, i2.y, 1.)) + i.x + vec4(0., i1.x, i2.x, 1.));
  vec3 ns = .142857142857 * D.wyz - D.xzx;
  vec4 j = p - 49. * floor(p * ns.z * ns.z); vec4 x_ = floor(j * ns.z); vec4 y_ = floor(j - 7. * x_);
  vec4 x = x_ * ns.x + ns.yyyy; vec4 y = y_ * ns.x + ns.yyyy; vec4 h = 1. - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy); vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2. + 1.; vec4 s1 = floor(b1) * 2. + 1.; vec4 sh = -step(h, vec4(0.));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy; vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x); vec3 p1 = vec3(a0.zw, h.y); vec3 p2 = vec3(a1.xy, h.z); vec3 p3 = vec3(a1.zw, h.w);
  vec4 nr = 1.79284291400159 - .85373472095314 * vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3));
  p0 *= nr.x; p1 *= nr.y; p2 *= nr.z; p3 *= nr.w;
  vec4 m = max(.5 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.); m = m * m;
  return 105. * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}
// how far a point is from the path a piece of cascara took down through the water
float trail(vec3 p, vec3 s) {
  vec3 a = vec3(s.x, min(uTop, s.y + .001), s.z), ab = s - a;
  float t = clamp(dot(p - a, ab) / max(dot(ab, ab), 1e-4), 0., 1.);
  return length(p - (a + ab * t));
}
float steep(vec3 p) {
  float d = min(trail(p, uSrc0), trail(p, uSrc1));
  // broad, slow billows with a finer curl in them, drifting downwards as the colour sinks
  float n = snoise(p * vec3(1.5, 1.1, 1.5) + vec3(0., uTime * .09, 0.)) * .7 + snoise(p * 4.2 - vec3(0., uTime * .14, 0.)) * .3;
  float reach = mix(.02, 2.6, uBloom);
  // at first faint wisps along the paths the pieces took, then soft clouds, then all of it; never a hard edge
  float cloud = smoothstep(-.15, .95, reach - d * mix(1.8, 1., smoothstep(0., .4, uBloom)) + n * .45 * (1. - uBloom * .5));
  // the thin amber threads each piece draws behind it as it sinks
  float wisp = exp(-d * d / .03) * (.55 + .45 * n) * smoothstep(0., .04, uBloom);
  return max(cloud, wisp);
}`;function ud(r,e=null){let t=e||{uBloom:{value:0},uTime:{value:0},uTop:{value:0},uSrc0:{value:new A(0,9,0)},uSrc1:{value:new A(0,9,0)}};return r.userData.infuse=t,r.onBeforeCompile=n=>{Object.assign(n.uniforms,t),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
`+Hm).replace("#include <transmission_fragment>",nt.transmission_fragment.replace("material.attenuationColor = attenuationColor;",`
  {
    vec3 rd = normalize( vWorldPosition - cameraPosition );
    float dens = 0.0;
    // three looks along the line of sight (each two noises): five were the pot's heaviest cost, three look the same
    for ( int i = 0; i < 3; i ++ ) dens += steep( vWorldPosition + rd * ( .09 + float( i ) * .26 ) );
    dens /= 3.0;
    // clear water absorbs nothing; where the cascara has steeped, the same amber absorbs ever more
    material.attenuationColor = attenuationColor;
    material.attenuationDistance = attenuationDistance / max( dens, .002 );   // absorption grows with the density
  }`))},r.customProgramCacheKey=()=>"cascarup-infuse-7",r}var $o=[[0,0],[.3,0],[.322,.012],[.33,.04],[.33,2.38],[.327,2.399],[.319,2.418],[.311,2.437],[.303,2.457],[.293,2.476],[.282,2.495],[.268,2.514],[.247,2.533],[.22,2.552],[.182,2.571],[.163,2.587],[.148,2.6],[.139,2.616],[.138,2.7],[.146,2.71],[.146,2.74],[.139,2.75],[.146,2.765],[.146,2.79],[.139,2.8],[.142,2.92],[.135,2.94],[.106,2.94],[.104,2.7],[.118,2.6]],dd=2.94,Wm=2.73,md=17,Xm=.33,$m=1.16;function $s(r,e=0,t=96){return new kr(r.map(([n,i])=>new xe(Math.max(0,n-e),i)),t)}var jm=()=>$o.slice(0,md+1);function qm(r,e){for(let t=1;t<=md;t++){let[n,i]=$o[t-1],[s,a]=$o[t];if(r>=i&&r<=a&&a>i)return Math.max(0,it(n,s,(r-i)/(a-i))-e)}return 0}function Ym(){let r=$s([[0,.236],[.14,.236],[.151,.231],[.156,.22],[.156,.168],[.15,.163],[.156,.158],[.156,.128],[.15,.123],[.156,.118],[.156,.088],[.15,.083],[.156,.078],[.156,.06],[.149,.056],[.153,.052],[.153,.004],[.147,0],[.135,0]],0,180),e=r.attributes.position;for(let t=0;t<e.count;t++){let n=e.getX(t),i=e.getY(t),s=e.getZ(t);if(i>.17&&i<.218){let a=Math.atan2(s,n),o=1+.02*Math.max(-.6,Math.min(.6,Math.cos(a*64)*2));e.setX(t,n*o),e.setZ(t,s*o)}}return r.computeVertexNormals(),r}var Qc=new Set,eh=(r,e)=>{let t={};return Qc.add(t),(...n)=>{Qc.delete(t),e&&e(...n)}};function Zm(r){let e=eh(r),t=new qi().load(r,e,void 0,e);return t.colorSpace=Bt,t.anisotropy=8,t}var Zc=2.38,Jm=()=>{let r=Xm+.004,e=Zc*r/(1007/1312);return new ai(r,r,e,128,1,!0,-Zc/2,Zc)};function Km(){let r=document.createElement("canvas");r.width=r.height=256;let e=r.getContext("2d"),t=e.createRadialGradient(128,128,0,128,128,128);return t.addColorStop(0,"rgba(58,33,22,.6)"),t.addColorStop(.35,"rgba(58,33,22,.3)"),t.addColorStop(1,"rgba(58,33,22,0)"),e.fillStyle=t,e.fillRect(0,0,256,256),new Wi(r)}var Qm={original:{label:Xo+"assets/label/original.webp",syrup:"#74290d",surface:"#3c1306",props:"cascara"},cozy:{label:Xo+"assets/label/cozy.webp",syrup:"#66230b",surface:"#341005",props:"spice"}};function Jc(r){let e=new Xi,t=.018,n=1.6,i=.085,s=.022,a=90,o=(f,v)=>[Math.cos(f)*v,Math.sin(f)*v];for(let f=0;f<=a;f++){let v=f/a*n*Math.PI*2,[m,g]=o(v,i-s*v/Math.PI);f?e.lineTo(m,g):e.moveTo(m,g)}for(let f=a;f>=0;f--){let v=f/a*n*Math.PI*2,[m,g]=o(v,i-s*v/Math.PI-t);e.lineTo(m,g)}let l=new zr(e,{depth:r,steps:48,bevelEnabled:!1,curveSegments:4});l.translate(0,0,-r/2);let c=l.attributes.position,h=new Float32Array(c.count*3),u=new De("#7a3c1c"),d=new De("#a4592c"),p=new De;for(let f=0;f<c.count;f++){let v=c.getX(f),m=c.getY(f),g=c.getZ(f),_=Math.atan2(m,v),x=.5+.5*Math.sin(_*38+Math.sin(g*9)*.6),M=.5+.5*Math.sin(g*41+_*3)*Math.sin(g*17);p.copy(u).lerp(d,x*.45+M*.25),h.set([p.r,p.g,p.b],f*3)}return l.setAttribute("color",new Et(h,3)),l.computeVertexNormals(),new $e(l,new cn({vertexColors:!0,roughness:.86}))}function ef(){let r=new Wt,e=new cn({color:"#4e2311",roughness:.9}),t=new cn({color:"#8a4f27",roughness:.75}),n=new At({color:"#7a4220",roughness:.3,clearcoat:.8,clearcoatRoughness:.25}),i=new ln(1,32,18),s=i.attributes.position;for(let o=0;o<s.count;o++){let l=s.getX(o),c=l>0?1-l*l*.82:1-l*l*.25,h=1+.06*Math.sin(l*23+s.getZ(o)*9);s.setXYZ(o,l,s.getY(o)*c*h,s.getZ(o)*c*h)}i.computeVertexNormals();for(let o=0;o<8;o++){let l=new Wt;l.rotation.y=o/8*Math.PI*2+o%2*.05;let c=new $e(i,e);c.scale.set(.21,.07,.08),c.position.x=.19,c.rotation.z=-.1;let h=new $e(new ln(1,20,12),t);h.scale.set(.15,.03,.045),h.position.set(.2,.068,0);let u=new $e(new ln(1,20,14),n);u.scale.set(.06,.035,.04),u.position.set(.2,.075,0),l.add(c,h,u),r.add(l)}let a=new $e(new ln(.055,16,12),e);return a.scale.y=.9,r.add(a),r}var tf=[[0,0],[.95,0],[1.03,.03],[1.06,.1],[1.06,.9],[1.085,.955],[1.09,1],[1.045,1],[1.025,.96],[1.025,.1],[.97,.055],[0,.055]];function nf(r){let e=document.createElement("canvas");e.width=128,e.height=256;let t=e.getContext("2d"),n=jo(r);t.filter="blur(7px)",t.lineCap="round";for(let s=0;s<3;s++){t.strokeStyle=`rgba(255,255,255,${(.55+n()*.35).toFixed(2)})`,t.lineWidth=7+n()*9,t.beginPath();let a=44+n()*40,o=10+n()*16,l=1.6+n()*1.6,c=n()*6;for(let h=236;h>=20;h-=6){let u=(236-h)/216,d=a+Math.sin(u*l*Math.PI+c)*o*(.3+u);h===236?t.moveTo(d,h):t.lineTo(d,h)}t.stroke()}t.filter="none",t.globalCompositeOperation="destination-in";let i=t.createLinearGradient(0,0,0,256);return i.addColorStop(0,"rgba(0,0,0,0)"),i.addColorStop(.3,"#000"),i.addColorStop(.8,"#000"),i.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=i,t.fillRect(0,0,128,256),new Wi(e)}var Kc=[0,.28,.45,.6,.765,.862,1],fd=[2.1,1.9,1.8,2.1,2.5,2.2],th=fd.reduce((r,e)=>r+e)*1e3,mn=fd.reduce((r,e)=>[...r,r[r.length-1]+e],[0]).map((r,e,t)=>r/t[t.length-1]);function ir(r){let e=1;for(;e<mn.length-1&&r>mn[e];)e++;let t=mn[e-1],n=mn[e];return Kc[e-1]+(Kc[e]-Kc[e-1])*Math.min(1,Math.max(0,(r-t)/(n-t)))}function gd(r,{onFrame:e,photo:t,plantBox:n,gentle:i=!1}={}){t&&(Kr=1,Qt=t.aspect||Qt,js=.94);let s=new Vo({canvas:r,antialias:!0,alpha:!1,powerPreference:"high-performance"}),a=Math.min(window.devicePixelRatio||1,2),o=0;s.setPixelRatio(a),s.transmissionResolutionScale=.3,s.toneMapping=Eo,s.toneMappingExposure=1,s.localClippingEnabled=!0;let l=new Nr;l.background=new De("#E6D3B7");let c=new Zr(s);l.environment=c.fromScene(Om(-1),.03).texture,l.environmentIntensity=.9;let h=new Ht(24,1,.1,100);h.position.set(0,0,12.6);let u=new Vr("#fff1df",1.5);u.position.set(4,6,6),l.add(u);let d=new Vr("#ffe9da",1.3);d.position.set(-5,3,-6),l.add(d),l.add(new Fs("#fff6ea","#9a6a48",.25));let p=new Wt;l.add(p);let f=new Wt;p.add(f);let v=Bm(),m=new At({color:"#f0d9a2",roughness:.3,clearcoat:.8,clearcoatRoughness:.2,side:Xt,transparent:!0}),g=new At({color:"#e2ab82",roughness:.4,side:Lt,transparent:!0}),_=new At({color:"#f6e2a8",roughness:.14,transmission:.65,thickness:.45,ior:1.4,attenuationColor:new De("#e3b765"),attenuationDistance:.5,clearcoat:.7,clearcoatRoughness:.1,side:Lt,transparent:!0}),x=new At({color:"#efe4cc",roughness:.95,side:Lt,transparent:!0}),M=["flat","round"].map(j=>{let _e=new At({vertexColors:!0,roughness:.42,clearcoat:.3,clearcoatRoughness:.35});return new qi().load(pd[j].src,eh(0,ge=>{ge.colorSpace=Bt,ge.anisotropy=8,Object.assign(_e,{map:ge,vertexColors:!1,roughness:.5,clearcoat:.22,clearcoatRoughness:.4,emissiveMap:ge,emissiveIntensity:.3}),_e.color.set("#ffffff"),_e.emissive.set("#ffffff"),_e.needsUpdate=!0})),_e}),w=[],T=[-1,1].map(j=>{let _e=new Wt,ge=zm(j),Ke=Yc(v);w.push(Ke);let Ne=new $e(ge,Ke);Ne.morphTargetInfluences=[0];let Oe=new $e(ge,m);Oe.morphTargetInfluences=[0],Oe.scale.setScalar(.965);let lt=new $e(km(j,.955),g);_e.add(Ne,Oe,lt);let mt=new $e(new ln(1,72,54,j>0?Math.PI/2:-Math.PI/2,Math.PI),_),kt=new $e(Vm(j),x),Pt=new $e(Gm(j),M);return f.add(_e,mt,kt,Pt),{side:j,half:_e,skin:Ne,flesh:Oe,cut:lt,pulp:mt,parch:kt,bean:Pt}}),U=new cn({color:"#5d5230",roughness:.8}),B=new $e(new ai(.05,.085,.2,16),U);B.position.y=Qt+.06,B.rotation.z=-.15,f.add(B);let L=new $e(new wn(.17,.05,14,40),new cn({color:"#3b1d12",roughness:.85}));L.position.y=-Qt+.115,L.rotation.x=Math.PI/2,L.scale.set(1,1,.7),f.add(L);let P=new $e(new Si(.12,24),new cn({color:"#2a120b",roughness:.9,side:Lt}));P.position.y=-Qt+.12,P.rotation.x=Math.PI/2,f.add(P);let F=-1.45,I=1,H=Km(),z=new ri({map:H,transparent:!0,depthWrite:!1}),q=(j,_e)=>{let ge=new $e(new zn(1,1),z.clone());return ge.rotation.x=-Math.PI/2,ge.scale.set(j,_e,1),ge},V=new At({color:"#ffffff",roughness:.03,transmission:1,thickness:.3,ior:1.5,clearcoat:1,clearcoatRoughness:.02,attenuationColor:new De("#e4ebe2"),attenuationDistance:2.5,transparent:!0,side:Lt,depthWrite:!1}),ne=new Wt;p.add(ne),V.side=wi;let ee=V.clone(),re=new $e($s(tf,0,128),ee),se=new wn(.14,.034,12,32,Math.PI),J=[-1,1].map(j=>{let _e=new $e(se,ee);return _e.position.set(j*1.07,.8,0),_e.rotation.z=-j*Math.PI/2,_e}),oe=new sn(new A(0,-1,0),0),Me=ud(new At({color:"#ffffff",roughness:.05,transmission:1,thickness:.16,ior:1.33,attenuationColor:new De("#8f3612"),attenuationDistance:.14,clearcoat:1,clippingPlanes:[oe]})),Pe=Me.userData.infuse,ye=ud(Me.clone(),Pe);ye.transparent=!0,ye.clippingPlanes=[oe];let de=new $e($s([[0,.055],[.97,.055],[1.02,.1],[1.02,1]],.01,128),Me),Ve=new $e(new Si(1.012,96),new cn({color:"#dfe6e4",roughness:.55,metalness:0,transparent:!0,opacity:0,depthWrite:!1,envMapIntensity:.08})),R=new De("#dfe6e4"),S=new De("#4e1806");Ve.rotation.x=-Math.PI/2;let k=new $e(new wn(1.016,.007,8,128),new At({color:"#9a5a34",roughness:.4,transparent:!0,opacity:0,depthWrite:!1}));k.rotation.x=Math.PI/2;let G=q(3,2.1);G.position.y=.004,ne.add(G,de,Ve,k,re,...J),de.renderOrder=Ve.renderOrder=k.renderOrder=1;let y=[11,23,37,41].map(nf),E=jo(31),N=Array.from({length:12},(j,_e)=>{let ge=new bs(new Fr({map:y[_e%4],color:"#ffffff",transparent:!0,depthWrite:!1,opacity:0}));return ge.userData={seed:_e/12+E()*.05,x:(E()-.5)*1.3,z:(E()-.5)*.7,drift:(E()-.5)*.4},ne.add(ge),ge}),O=new $e(new wn(1.012,.008,8,128),new At({color:"#ffffff",roughness:.1,clearcoat:1,transparent:!0,opacity:.55,depthWrite:!1}));O.rotation.x=Math.PI/2,ne.add(O),O.renderOrder=1;let X=new At({color:"#ffffff",roughness:.1,clearcoat:1,transparent:!0,opacity:0,depthWrite:!1}),Q=[0,1].map(()=>{let j=new $e(new wn(1,.009,8,72),X.clone());return j.rotation.x=Math.PI/2,j.visible=!1,p.add(j),j}),W=$s($o,0,128),le=$s(jm(),.02,96),ie=Ym(),$=Jm(),ae=new At({color:"#dcdcd6",metalness:1,roughness:.3,transparent:!0}),ue=["original","cozy"].map((j,_e)=>{let ge=Qm[j],Ke=new Wt;p.add(Ke);let Ne=new sn(new A(0,-1,0),0),Oe=new At({color:"#ffffff",roughness:.05,transmission:1,thickness:.62,ior:1.45,attenuationColor:new De(ge.syrup),attenuationDistance:.3,clearcoat:1,clippingPlanes:[Ne]}),lt=new $e(le,Oe),mt=new $e(new Si(1,72),new At({color:ge.surface,roughness:.05,clearcoat:1}));mt.rotation.x=-Math.PI/2;let kt=new $e(new wn(1,.006,8,96),new At({color:"#a85a34",roughness:.15,transparent:!0,opacity:.35}));kt.rotation.x=Math.PI/2;let Pt=new $e(ie,ae.clone()),Ft=Zm(ge.label),Ot=new cn({map:Ft,emissiveMap:Ft,emissive:"#ffffff",emissiveIntensity:.1,roughness:.6,side:Lt}),jt=new $e($,Ot);jt.position.y=$m;let hn=q(1.3,1);return hn.position.y=.004,Ke.add(hn,lt,mt,kt,new $e(W,V),jt,Pt),lt.renderOrder=mt.renderOrder=kt.renderOrder=1,Ke.scale.setScalar(I),{id:j,k:ge,g:Ke,fill:Ne,syrup:lt,surface:mt,meniscus:kt,cap:Pt,label:jt,labelMat:Ot,tex:Ft,shade:hn,x:_e?.55:-.55}}),we=new ai(.04,.03,1,28,1,!0);we.translate(0,-.5,0);let me=new At({color:"#a8481f",roughness:.03,clearcoat:1,clearcoatRoughness:.02,transmission:.5,thickness:.1,ior:1.45,attenuationColor:new De("#7a260a"),attenuationDistance:.14,emissive:new De("#3a1004")}),Te={value:99};me.transparent=!0,me.onBeforeCompile=j=>{j.uniforms.uFadeTop=Te,j.fragmentShader=`uniform float uFadeTop;
`+j.fragmentShader.replace("#include <alphamap_fragment>",`#include <alphamap_fragment>
	diffuseColor.a *= smoothstep( uFadeTop, uFadeTop - 1.1, vWorldPosition.y );`)},me.customProgramCacheKey=()=>"cascarup-stream-2";let Ie=ue.map(()=>{let j=new $e(we,me);return j.visible=!1,p.add(j),j}),pe=Jc(.9);pe.scale.setScalar(.56),p.add(pe);let Ce=T.map((j,_e)=>{let ge=new $e(j.skin.geometry,Yc(v));return ge.morphTargetInfluences=[1],ge.material.userData.dry.value=1,ge.material.roughness=.58,ge.material.clearcoat=.16,ge.material.clearcoatRoughness=.4,ge.material.sheen=.4,ge.material.sheenColor.set("#c07a5c"),ge.scale.setScalar(.16),ge.visible=!1,p.add(ge),ge.material.transparent=!0,{m:ge,x:_e?-1.2:-2.02,z:_e?.9:.55,ry:_e?2.4:-.6}}),Ge=[{o:Jc(1.2),x:1.36,y:.04,z:.3,r:[0,Math.PI/2-.35,0],s:.5},{o:Jc(1.2),x:1.44,y:.105,z:.04,r:[0,Math.PI/2-.62,.05],s:.5},{o:ef(),x:1.08,y:.045,z:.82,r:[.05,.4,-.04],s:.58}],Qe=j=>{let _e=[];return j.traverse(ge=>{ge.material&&(ge.material.transparent=!0,_e.push(ge.material))}),_e};for(let j of Ge)j.o.visible=!1,p.add(j.o),j.mats=Qe(j.o);let Ee=q(1.5,.9);p.add(Ee);let ze=new Wt,Y=Yc(v);w.push(Y);for(let j of T){let _e=new $e(j.skin.geometry,Y);_e.morphTargetInfluences=[0],ze.add(_e)}let be=new $e(B.geometry,U);be.position.y=Qt+.06,be.rotation.z=-.15,ze.add(be);let Ue=L.clone();ze.add(Ue);let Ae=.15;ze.scale.setScalar(Ae),p.add(ze);let C=q(.42,.42);p.add(C);let he=q(1,1);p.add(he);let Be=!1;t&&t.texture&&new qi().load(t.texture,eh(0,j=>{j.anisotropy=8;for(let _e of w)_e.userData.photo.value=j,_e.userData.usePhoto.value=1,_e.userData.glow.value=.72;Be=!0,be.visible=Ue.visible=!1}));let Se=T[1],ke={haut:new Tt,fleisch:new Tt,pergament:new Tt,bohne:new Tt};Se.half.add(ke.haut),ke.haut.position.set(.62,.7,.34),Se.pulp.add(ke.fleisch),ke.fleisch.position.set(.58,-.5,.4),Se.parch.add(ke.pergament),ke.pergament.position.set(.3,.6,.3),Se.bean.add(ke.bohne),ke.bohne.position.set(.28,-.42,.22);let We=1,Ze=1,ct=!0,ot=0,pt=0,zt=performance.now(),Zt=!0,Ct=0,Ci=null,sr=null,ci=new A;function Ri(){if(sr=null,!Ci||!n)return;let[j,_e,ge,Ke]=n,Ne=Ci,Oe=Math.max(10,Math.min((Ne.r-Ne.l)/(ge-j),(Ne.b-Ne.t)/(Ke-_e),Math.min(We,Ze)*.2)),lt=(Ne.l+Ne.r)/2-(j+ge)/2*Oe,mt=(Ne.t+Ne.b)/2-(_e+Ke)/2*Oe,kt=Ze/2/(Math.tan(h.fov*Math.PI/360)*12.6*Oe);sr={ox:(We/2-lt)/We,oy:(Ze/2-mt)/Ze,zoom:kt}}function qs(j,_e){We=j,Ze=_e,s.setSize(j,_e,!1),h.aspect=j/_e,ct=j/_e>1.05,h.fov=ct?24:it(33,27,rt(.56,.8,j/_e)),h.updateProjectionMatrix(),ke.fleisch.position.set(.58,ct?-.5:.55,.4),ke.pergament.position.set(.3,ct?.6:.45,.3),Ri()}function ar(j,_e,ge,Ke,Ne=0){h.clearViewOffset(),h.setViewOffset(We,Ze,We*j,Ze*_e,We,Ze),h.position.set(0,Ke+12.6*ge*Math.tan(Ne),12.6*ge),h.rotation.set(-Ne,0,0),h.updateProjectionMatrix()}let Ys=F+dd*I,or=4.6,es=.8,Zo=.58,Jo=.1,b={1:.655,"-1":.675},Z=[{up:[.774,.804],pour:[.803,.812,.836,.846],fill:[.805,.843],cap:[.865,.9]},{up:[.776,.806],pour:[.82,.829,.852,.862],fill:[.822,.86],cap:[.872,.905]}],te=new A,ce={skin:1.9,pulp:1.3,parch:.8,bean:.3};function K(j,_e){Ct+=_e;let ge=En(.1,.24,j),Ke=rt(.08,.2,j)*(1-rt(.33,.41,j)),Ne=rt(.3,.43,j),Oe=rt(.31,.42,j),lt=En(.34,.45,j),mt=rt(.47,.58,j),kt=En(.48,.6,j),Pt=rt(.575,.65,j),Ft=En(.575,.655,j),Ot=En(.6,.65,j),jt=rt(.68,.76,j),hn=rt(.715,.775,j),An=En(.77,.79,j),hi=rt(.772,.82,j),Pi=En(.885,.925,j),ui=En(.885,.95,j),st=En(.89,.955,j),$n=rt(.875,.95,j),en=Pt*(1-$n),jn=it(it(it(0,-.84,Pt),.02,hi),-.06,$n),Zs=.2*Pt*(1-hi),qn=1-rt(.04,.2,j),Ii,_t,un;ct?(Ii=-.2*(1-Ke)-.03*$n,_t=0,un=1-.04*$n):(Ii=0,_t=it(it(-.21,-.03,Ke),-.07,en)-.17*hi*(1-$n),un=1+.3*Ke-.04*Pt*(1-hi)+.25*hi*(1-$n)+.38*$n);let Li=sr||(ct?{ox:-.22,oy:.08,zoom:1.32}:{ox:0,oy:.26,zoom:2.02});ar(it(Ii,Li.ox,qn),it(_t,Li.oy,qn),it(un,Li.zoom,qn),jn,Zs),Te.value=ct?99:Ys+1.45,p.rotation.y=-.35*ge*(1-lt),p.rotation.x=it(0,.13,ge)*(1-lt);let Jt=ct?0:.85*rt(.1,.2,j)*(1-rt(.38,.46,j)),tn=Be?0:(1-rt(.06,.14,j))*Math.sin(Ct*.35)*.55;f.rotation.set(0,tn,Jt);let Kt=.14*rt(.006,.05,j)*(1-rt(.12,.24,j));f.position.y=Math.sin(Ct*1.1)*.05*(1-Ot)*rt(.02,.1,j)+Kt,ne.visible=Ft>.001&&An<.999,ne.position.set(0,it(it(-7.5,F,Ft),F+1.4,An),0),ne.rotation.z=.12*An;let Cn=1-rt(.77,.788,j),Ko=Cn<.999;de.material=Ko?ye:Me,ee.opacity=Cn,Me.opacity=ye.opacity=Cn;let lr=it(es,Zo,hn),Qo=ne.position.y+lr;oe.constant=Qo,Ve.position.y=O.position.y=lr,k.position.y=es,k.material.opacity=.5*hn,Pe.uBloom.value=jt,Pe.uTime.value=Ct,Pe.uTop.value=Qo;let el=rt(.7,.76,j);Me.thickness=ye.thickness=it(.16,.9,el),Me.ior=ye.ior=it(1.33,1.45,el),Me.attenuationDistance=ye.attenuationDistance=it(.14,it(.75,.48,hn),el);let tl=rt(.7,.77,j);Ve.material.color.copy(R).lerp(S,tl),Ve.material.opacity=it(.14,.96,tl)*Cn,O.material.opacity=it(.55,.2,tl)*Cn,k.material.opacity*=Cn;let rh=rt(.63,.69,j)*(1-rt(.772,.79,j))*(.5+.5*hn);for(let ve of N){let It=ve.userData,wt=(Ct*.16+It.seed)%1;ve.visible=rh>.002,ve.position.set(It.x*(1-wt*.3)+Math.sin(wt*3+It.seed*12)*.1+It.drift*wt,lr+.5+wt*(ct?1.3:.75),It.z),ve.scale.set(.42+wt*.3,.9+wt*.6,1),ve.material.opacity=rh*.5*Math.sin(Math.PI*wt)}for(let ve of T){let It=ve.side*ge;ve.half.position.x=it(It*ce.skin,ve.side*.42,lt),ve.half.rotation.y=ve.side*ge*.35*(1-lt),ve.skin.morphTargetInfluences[0]=ve.flesh.morphTargetInfluences[0]=kt;let wt=ve.skin.material;wt.userData.dry.value=mt,wt.roughness=it(.34,.58,mt),wt.clearcoat=it(it(.35,.9,rt(.1,.22,j)),.16,mt),wt.clearcoatRoughness=it(.14,.4,mt),wt.sheen=it(.25,.4,mt),wt.sheenColor.set(mt>.5?"#c07a5c":"#ff9b8a");let cr=rt(0,.7,mt);ve.flesh.material.opacity=ve.cut.material.opacity=1-cr,ve.flesh.visible=ve.cut.visible=ge>.002&&cr<.99;let Rn=1-Oe;ve.pulp.position.x=It*ce.pulp*(1-lt)*Rn,ve.pulp.scale.set(Kr*.8,Qt*.86,js*.8).multiplyScalar(it(.55,1,Rn)),ve.pulp.material.opacity=Rn,ve.pulp.visible=Oe<.995&&ge>.002,ve.parch.position.x=It*ce.parch*(1-lt)*Rn,ve.parch.scale.setScalar(it(.55,1,Rn)),ve.parch.material.opacity=Rn,ve.parch.visible=Oe<.995&&ge>.002;let dn=Ne,Di=dn*dn,hr=Di*(ct?6+ve.side*.5:7.5+ve.side*.4),Js=Di*(ct?4.2:-.6)+Math.sin(dn*Math.PI)*.5+(ve.side>0?.1:-.1)*dn,Ks=Math.cos(-Jt),Qs=Math.sin(-Jt);if(ve.bean.position.set(It*ce.bean+hr*Ks-Js*Qs,hr*Qs+Js*Ks,-Di*2.2),ve.bean.rotation.set(dn*2.6*ve.side,dn*3.4,ge*ve.side*.2+dn*1.5),ve.bean.visible=ge>.002&&dn<.999,Ot>0){let ur=b[ve.side],ts=Ei((j-ur)/.022),fn=rt(ur+.022,ur+.09,j),ns=Math.sin(fn*Math.PI*1.6)*.08*(1-fn),Ui=it(ve.side*.42,ve.side*.3,Ot),Pn=it(0,F+1.62,Ot),Ni=0;ts>0&&(Pn=it(Pn,F+es-.04,ts*ts)),fn>0&&(Ui=it(Ui,ve.side*.48,fn)+ns,Pn=it(Pn,F+Jo+.12,fn),Ni=it(0,ve.side*.16,fn)),ve.half.position.set(Ui,Pn-f.position.y,Ni),ve.half.rotation.set(fn*1.2*ve.side,Ot*.35*ve.side+fn*.8,ve.side*(Ot*.3+fn*1.7)),ve.half.scale.setScalar(it(1,.32,Ot)*Math.max(.001,1-rt(.72,.755,j))),ve.half.getWorldPosition(te),(ve.side>0?Pe.uSrc1:Pe.uSrc0).value.copy(te);let is=Q[ve.side>0?1:0],ea=Ei((j-ur-.022)/.05);is.visible=ea>0&&ea<1,is.visible&&(is.position.set(Ui,Qo+.004,0),is.scale.setScalar(it(.06,.95,Math.sqrt(ea))),is.material.opacity=.7*(1-ea))}else ve.half.position.y=0,ve.half.rotation.x=ve.half.rotation.z=0,ve.half.scale.setScalar(1);ve.half.visible=j<.755}B.visible=L.visible=P.visible=!Be&&ge<.02,ue.forEach((ve,It)=>{let wt=Z[It],cr=En(wt.up[0],wt.up[1],j);ve.g.visible=cr>.001,ve.g.position.set(ve.x,it(-7.5,F,cr),0),ve.g.rotation.y=Math.sin(Ct*.45+It*1.7)*.08*rt(.9,1,j);let Rn=rt(wt.fill[0],wt.fill[1],j),dn=it(.05,2.585,Rn),Di=ve.g.position.y+dn*I;ve.fill.constant=Di,ve.syrup.visible=Rn>.002,ve.surface.visible=ve.meniscus.visible=Rn>.01,ve.surface.position.y=ve.meniscus.position.y=dn;let hr=qm(dn,.02);ve.surface.scale.setScalar(hr),ve.meniscus.scale.set(hr,hr,1);let[Js,Ks,Qs,ur]=wt.pour,ts=rt(Js,Ks,j),fn=rt(Qs,ur,j),ns=it(or,Di,fn),Ui=it(or,Di,ts),Pn=Ie[It];Pn.visible=ns-Ui>.01,Pn.visible&&(Pn.position.set(ve.x+Math.sin(Ct*2.1+It)*.004,ns,0),Pn.scale.set(1,ns-Ui,1));let Ni=En(wt.cap[0],wt.cap[1],j);ve.cap.visible=Ni>.001,ve.cap.position.y=it(dd+(ct?1.6:.45),Wm,Ni),ve.cap.rotation.y=(1-Ni)*4,ve.cap.material.opacity=rt(0,.35,Ni),ve.label.scale.set(1,Math.max(.001,Pi),1),ve.label.visible=Pi>.001,ve.tex.repeat.set(1,Math.max(.001,Pi)),ve.tex.offset.set(0,(1-Pi)/2),ve.shade.material.opacity=.8*cr});let nl=ue[1],il=rt(.804,.82,j),rl=.21*rt(.814,.824,j),Sd=nl.g.position.y+.04*I;pe.visible=il>.001&&nl.g.visible,pe.position.set(nl.x-.02+rl*.6,it(or,Sd+.25*Math.cos(rl),il*il),0),pe.rotation.set(Math.PI/2,0,-rl),Ce.forEach((ve,It)=>{ve.m.visible=ui>.001,ve.m.position.set(ve.x,F+.104,ve.z),ve.m.rotation.set(Math.PI/2*(It?1:-1)*.92,ve.ry,0),ve.m.material.opacity=ui});for(let ve of Ge){ve.o.visible=ui>.001,ve.o.position.set(ve.x,F+ve.y,ve.z),ve.o.rotation.set(ve.r[0],ve.r[1],ve.r[2]),ve.o.scale.setScalar(ve.s);for(let It of ve.mats)It.opacity=ui}Ee.visible=ui>.001,Ee.position.set(1.34,F+.003,.45),Ee.material.opacity=.55*ui,ze.visible=st>.001,ze.position.set(-1.6,F+Ae*Qt+.025,.05),ze.rotation.set(0,0,-.08),Y.transparent=!0,Y.opacity=st,C.visible=ze.visible,C.position.set(-1.6,F+.003,.05),C.material.opacity=.7*st,he.position.set(0,-Qt-.55,0),he.scale.set(2.5*(1+ge*.6*(1-lt)),1.7,1),he.material.opacity=.6*(1-ge*.35*(1-lt))*(1-rt(.59,.65,j))*rt(.03,.1,j),he.visible=j<.65}function fe(j,_e,ge,Ke){return ci.set(_e,ge,Ke),j.localToWorld(ci),ci.project(h),{x:(ci.x*.5+.5)*We,y:(-ci.y*.5+.5)*Ze}}function Le(){let j={};for(let[_e,ge]of Object.entries(ke))j[_e]=fe(ge,0,0,0);return j}function Fe(){f.updateMatrixWorld();let j=fe(f,0,0,0),_e=fe(f,-Kr,0,0),ge=fe(f,0,Qt,0);return{x:j.x,y:j.y,rx:j.x-_e.x,ry:j.y-ge.y}}let He=0,Ye="",Xe=!1,je=0,Je=[],gt=0,vt=j=>{a=Math.max(1,j),s.setPixelRatio(a)};function St(j){if(!Zt)return;He++;let _e=j-zt,ge=Math.min(.05,_e/1e3);zt=j,!Xe&&_e<200&&(Je.push(_e),Je.length===45&&(Je.sort((Oe,lt)=>Oe-lt)[22]>40&&a>1&&vt(a*.8),Je=[]));let Ke=(ot-pt)*(1-Math.pow(i?.02:9e-4,ge));i&&(Ke=Math.max(-.3*ge,Math.min(.3*ge,Ke))),pt+=Ke,Math.abs(ot-je)>.25&&(pt=ot),je=ot,Math.abs(ot-pt)<1e-4&&(pt=ot);try{K(ir(pt),ge),(!Xe||j-gt>400)&&(s.render(l,h),gt=j),e?.(ir(pt),Le,Fe)}catch(Ne){Ye=String(Ne&&Ne.stack||Ne).slice(0,300)}requestAnimationFrame(St)}return{resize:qs,set background(j){l.background.set(j)},set progress(j){ot=Ei(j)},set cover(j){Xe=!!j,Xe||s.render(l,h)},set frame(j){Ci=j,Ri(),Zt||(K(ir(pt),0),s.render(l,h))},get progress(){return pt},jump(j){ot=pt=Ei(j),K(ir(pt),0),s.render(l,h),e?.(ir(pt),Le,Fe)},start(){Zt||(Zt=!0,zt=performance.now(),requestAnimationFrame(St))},stop(){Zt=!1},begin(){zt=performance.now(),requestAnimationFrame(St)},async warm(){let j=performance.now();for(;Qc.size&&performance.now()-j<6e3;)await new Promise(ge=>setTimeout(ge,60));let _e=pt;for(let ge of[.12,.3,.45,.58,.66,.74,.776,.79,.83,.88,.95,1]){if(!document.documentElement.classList.contains("is-loading"))break;K(ge,0),s.render(l,h),await new Promise(Ke=>requestAnimationFrame(Ke))}K(ir(_e),0),s.render(l,h)},tune(){if(!document.documentElement.classList.contains("is-loading"))return;let j=pt,_e=Math.min(a,1.25),ge=s.getContext(),Ke=new Uint8Array(4),Ne=8,Oe=lt=>{K(lt,0);let mt=performance.now();return s.render(l,h),ge.readPixels(0,0,1,1,ge.RGBA,ge.UNSIGNED_BYTE,Ke),performance.now()-mt};for(let lt=0;lt<3;lt++){o=0;for(let mt of[.3,.66,.95])Oe(mt),o=Math.max(o,Math.min(Oe(mt),Oe(mt),Oe(mt)));if(o<=Ne||a<=_e)break;vt(Math.max(_e,a*Math.sqrt(Ne/o)))}K(ir(j),0),s.render(l,h)},labels:Le,fruitBox:Fe,get photoReady(){return Be},renderer:s,state:()=>({frames:He,running:Zt,target:+ot.toFixed(3),progress:+pt.toFixed(3),ratio:+a.toFixed(2),cost:+o.toFixed(1),lastError:Ye})}}var vd="http://www.w3.org/2000/svg",ht={ink:"58, 33, 22",glow:["#F7DDAE","#F1C28C","#E9AA79"],sun:["#F8E5BC","#F3D09A","#EDB57B","#E49862","#D87A47"],cloudTop:"#F4E4C8",cloudLow:"#E8AE86",ridge:["#E2AE86","#D49670","#BE8059","#9A7448","#77653B","#55492B"],cut:["#EDC09C","#E1AA84","#CF9670","#AE8A5D","#8B7A4E","#6A5C3A"],row:["#8A6C43","#665A34","#4B4127"],tree:["#A57250","#7E623E","#5C4E30"],berry:"#B3262A",berryDark:"#8E2B1E",roof:"#B4592A",wall:"#E9C9A0",window:"#F8D88E",door:"#5A3A26",soil:"#3A2116",soilCut:"#9C4B23",leaf:["#2F3B24","#3B4A2B","#485A31","#34432A"],vein:"#E0A86B",twig:"#3A2116",close:["#2E2617","#2A2215"],mist:"#F6E3C8",bird:"#3A2116"};function nh(r){let e=r>>>0;return()=>(e=Math.imul(e,1664525)+1013904223>>>0)/4294967296}var D=r=>(Math.round(r*10)/10).toString();function Xn(r,e=!1){let t=r.length;if(t<2)return"";let n=`M${D(r[0][0])} ${D(r[0][1])}`,i=e?t:t-1;for(let s=0;s<i;s++){let a=r[e?(s-1+t)%t:Math.max(0,s-1)],o=r[s],l=r[(s+1)%t],c=r[e?(s+2)%t:Math.min(t-1,s+2)];n+=`C${D(o[0]+(l[0]-a[0])/6)} ${D(o[1]+(l[1]-a[1])/6)} ${D(l[0]-(c[0]-o[0])/6)} ${D(l[1]-(c[1]-o[1])/6)} ${D(l[0])} ${D(l[1])}`}return e?`${n}Z`:n}var li=(r,e,t)=>`M${D(r+t)} ${D(e)}a${D(t)} ${D(t)} 0 1 0 ${D(-2*t)} 0a${D(t)} ${D(t)} 0 1 0 ${D(2*t)} 0Z`,qo=(r,e,t,n)=>`M${D(r+t)} ${D(e)}a${D(t)} ${D(n)} 0 1 0 ${D(-2*t)} 0a${D(t)} ${D(n)} 0 1 0 ${D(2*t)} 0Z`;function ih(r,e,t,n,i,s){let o=[],l=[],c=.025+s()*.03,h=s()*6;for(let _=0;_<=28;_++){let x=_/28,M=Math.sin(Math.PI*Math.pow(x,.78))*(1-.18*x);x>.78&&(M*=1-Math.pow((x-.78)/.22,1.3)*.6),M*=n*(1+c*Math.sin(x*20+h)),o.push([x*t,-M]),l.push([x*t,M*(.92+.08*Math.sin(x*9+h))])}let u=Math.cos(i),d=Math.sin(i),p=([_,x])=>[r+_*u-x*d,e+_*d+x*u],f=Xn([...o,...l.reverse()].map(p),!0),v=(s()-.5)*n*.25,m=_=>[_*t,Math.sin(Math.PI*_)*v],g=Xn([.04,.3,.55,.8,.93].map(_=>p(m(_))));for(let _=1;_<=6;_++){let x=.1+_*.115,[M,w]=m(x),T=Math.sin(Math.PI*Math.pow(x,.78))*n*(1-.18*x)*.78;for(let U of[-1,1])g+=Xn([[M,w],[M+T*.45,w+U*T*.55],[M+T*.95,w+U*T*.86]].map(p))}return{shape:f,veins:g}}var Ai=(r,e)=>{for(let t=1;t<r.length;t++)if(r[t][0]>=e){let[n,i]=r[t-1],[s,a]=r[t];return i+(a-i)*(e-n)/(s-n)}return r[r.length-1][1]},Yo=(r,e)=>r.map(([t,n])=>[t,n+e+Math.sin(t*.013+e)*Math.abs(e)*.08]);function _d(r,e,t,n,i,s,a,o){let l="",c="";for(let h=t;h<n;h+=i*(1.55+a()*.35)){let u=Ai(r,h)+e+Math.sin(h*.013+e)*Math.abs(e)*.08,d=i*(.85+a()*.3),p=s*(.8+a()*.4);l+=`M${D(h-d)} ${D(u)}A${D(d)} ${D(p)} 0 0 1 ${D(h+d)} ${D(u)}Z`,o&&a()<.45&&(c+=li(h+(a()-.5)*d,u-p*(.3+a()*.4),Math.max(.8,i*.13)))}return{d:l,b:c}}function rf(r,e,t){let n=`M${D(r-t*.09)} ${D(e)}L${D(r-t*.04)} ${D(e-t*2.5)}L${D(r+t*.04)} ${D(e-t*2.5)}L${D(r+t*.09)} ${D(e)}Z`,i=qo(r,e-t*2.65,t*1.35,t*.42)+qo(r-t*.7,e-t*2.4,t*.78,t*.32)+qo(r+t*.72,e-t*2.45,t*.85,t*.34)+qo(r+t*.1,e-t*2.95,t*.7,t*.3);return n+i}function sf(r,e,t){let n=t*1.7,i=t,s=`M${D(r-n/2)} ${D(e)}V${D(e-i)}H${D(r+n/2)}V${D(e)}Z`,a=`M${D(r-n/2-t*.2)} ${D(e-i+t*.04)}L${D(r)} ${D(e-i-t*.62)}L${D(r+n/2+t*.2)} ${D(e-i+t*.04)}Z`,o=`M${D(r-t*.52)} ${D(e-i*.7)}h${D(t*.34)}v${D(t*.3)}h${D(-t*.34)}Z`,l=`M${D(r+t*.12)} ${D(e)}v${D(-t*.55)}h${D(t*.3)}v${D(t*.55)}Z`,c="",h="";for(let u=0;u<2;u++){let d=r+n/2+t*(.55+u*1.55),p=e-t*.36,f=t*1.3;c+=`M${D(d)} ${D(p)}h${D(f)}v${D(t*.1)}h${D(-f)}Z`;for(let v of[.08,.92])c+=`M${D(d+f*v-t*.03)} ${D(p+t*.1)}h${D(t*.06)}V${D(e)}h${D(-t*.06)}Z`;for(let v=0;v<9;v++)h+=li(d+f*(.08+v*.105),p-t*.045,t*.055)}return{wall:s,roof:a,win:o,door:l,beds:c,cherries:h,glow:[r-t*.35,e-i*.55,t*.8]}}function xd(r,e,t,n){let i=t*.42,s=[];for(let c=0;c<=20;c++){let h=-1+2*c/20;s.push([r+h*t/2,e-i*Math.pow(Math.max(0,1-h*h),.7)-(c%2?i*.05:0)*(1-Math.abs(h))])}let a=`${Xn(s)}L${D(r+t/2)} ${D(e)}L${D(r-t/2)} ${D(e)}Z`,o=["#B3262A","#C9452B","#8E2B1E","#A8321F","#6E2A1A"],l=o.map(()=>"");for(let c=0;c<46;c++){let h=n()*2-1,u=n()*Math.pow(Math.max(0,1-h*h),.7)*.92,d=Math.floor(n()*o.length);l[d]+=li(r+h*t*.46,e-i*u-t*.02,t*(.035+n()*.018))}return{mound:a,cherries:l.map((c,h)=>`<path fill="${o[h]}" d="${c}"/>`).join("")}}function af(r,e){let t=r*2.6,n=r*2.3,i=t/2,s=n,a="",o="",l="";return[[11,.55,.95,1.05,.32],[7,.95,.78,.7,.3]].forEach(([h,u,d,p,f],v)=>{for(let m=0;m<h;m++){let g=-Math.PI/2+(m-(h-1)/2)*(d*2.6/h)+(e()-.5)*.2,_=i+Math.cos(g)*r*.18,x=s-r*u*.45+Math.sin(g)*r*.12,M=r*p*(.7+e()*.35);o+=`M${D(i)} ${D(s-r*u*.3)}L${D(_)} ${D(x)}`,a+=`<path fill="${ht.leaf[(m+v)%4]}" d="${ih(_,x,M,M*f,g+(e()-.5)*.25,e).shape}"/>`,(m+v)%3===1&&(l+=li(_+Math.cos(g)*r*.2,x+Math.sin(g)*r*.2+r*.06,r*.06)+li(_+Math.cos(g)*r*.26+r*.05,x+Math.sin(g)*r*.2+r*.13,r*.055))}}),o=`M${D(i)} ${D(s)}L${D(i)} ${D(s-r*.5)}`+o,{w:t,h:n,svg:`<path fill="none" stroke="${ht.twig}" stroke-width="${D(r*.06)}" stroke-linecap="round" d="${o}"/>${a}<path fill="${ht.berry}" d="${l}"/>`}}function of(r,e){let t=r*1.6,n=r*1.4,i="";for(let s=0;s<7;s++){let a=t*(.2+s*.1),o=(e()-.5)*r*.9,l=n*(.15+e()*.4),c=r*.045;i+=`M${D(a-c)} ${D(n)}Q${D(a+o*.3)} ${D((n+l)/2)} ${D(a+o)} ${D(l)}Q${D(a+o*.3+c)} ${D((n+l)/2)} ${D(a+c)} ${D(n)}Z`}return{w:t,h:n,svg:`<path fill="${ht.leaf[1]}" d="${i}"/>`}}function lf(r){let e=r*1.1,t=r*2.05,n=e/2,i=(a,o)=>`<path class="${o}" fill="#4A3424" d="M${D(n+a-r*.07)} ${D(t*.6)}h${D(r*.14)}l${D(r*.02)} ${D(t*.38)}h${D(-r*.18)}z"/>`,s=(a,o)=>`<path class="${o}" fill="#9C4B23" d="M${D(n+a-r*.05)} ${D(t*.3)}h${D(r*.1)}l${D(r*.02)} ${D(t*.27)}h${D(-r*.13)}z"/>`;return{w:e,h:t,svg:i(-r*.09,"dio__leg dio__leg--b")+s(r*.16,"dio__arm dio__arm--b")+`<path fill="#A8743E" d="M${D(n-r*.52)} ${D(t*.27)}h${D(r*.34)}l${D(-r*.04)} ${D(t*.3)}h${D(-r*.26)}z"/><path fill="none" stroke="#7A5128" stroke-width="${D(r*.03)}" d="M${D(n-r*.5)} ${D(t*.36)}h${D(r*.3)}M${D(n-r*.48)} ${D(t*.45)}h${D(r*.28)}"/><path fill="#B4592A" d="M${D(n-r*.2)} ${D(t*.28)}h${D(r*.4)}l${D(r*.03)} ${D(t*.34)}h${D(-r*.46)}z"/>`+i(r*.09,"dio__leg dio__leg--f")+`<circle fill="#8A5A3C" cx="${D(n+r*.02)}" cy="${D(t*.2)}" r="${D(r*.14)}"/><ellipse fill="#D9B27A" cx="${D(n+r*.02)}" cy="${D(t*.13)}" rx="${D(r*.34)}" ry="${D(r*.07)}"/><path fill="#C99E62" d="M${D(n-r*.12)} ${D(t*.13)}q${D(r*.14)} ${D(-r*.26)} ${D(r*.28)} 0z"/>`+s(-r*.16,"dio__arm dio__arm--f")}}function cf(r,e,t){let n=t*.16,i=n/2;return`M${D(r-t/2+i)} ${D(e)}H${D(r+t/2-i)}A${D(i)} ${D(i)} 0 0 0 ${D(r+t/2-i)} ${D(e-n)}H${D(r-t/2+i)}A${D(i)} ${D(i)} 0 0 0 ${D(r-t/2+i)} ${D(e)}Z`+li(r-t*.18,e-n-t*.03,t*.13)+li(r+t*.06,e-n-t*.07,t*.17)+li(r+t*.27,e-n-t*.01,t*.1)}var yd=.74,hf=[{id:"sky",depth:.06,fly:[0,-.05,.12],flyNarrow:[0,-.02,.1]},{id:"far",depth:.16,fly:[0,.16,-.03],flyNarrow:[0,.04,.16]},{id:"mid",depth:.3,fly:[0,.28,-.01],flyNarrow:[0,.08,.3]},{id:"near",depth:.46,fly:[0,.42,.02],flyNarrow:[0,.12,.45]},{id:"soil",depth:.62,fly:[0,.6,.04],flyNarrow:[0,.16,.6]},{id:"branch",depth:.82,fly:[.55,-.06,.3],flyNarrow:[.5,-.08,.3]},{id:"close",depth:1,fly:[.8,.15,.7],flyNarrow:[.8,.15,.7]}],Qr=null;function uf(r,e,t){if(!Qr){Qr=document.createElement("canvas"),Qr.width=Qr.height=128;let n=Qr.getContext("2d"),i=n.createImageData(128,128),s=nh(99);for(let a=0;a<i.data.length;a+=4){let o=s(),l=o>.5,c=Math.abs(o-.5)*2;i.data[a]=l?255:58,i.data[a+1]=l?246:33,i.data[a+2]=l?232:22,i.data[a+3]=Math.round(c*c*30)}n.putImageData(i,0,0)}r.save(),r.globalCompositeOperation="source-atop",r.fillStyle=r.createPattern(Qr,"repeat"),r.fillRect(0,0,e,t),r.restore()}var df={sky:1,far:1,mid:1.5,near:1.5,soil:1.5,branch:2,close:1};function Md(r){r.innerHTML="";let e=document.createElement("div");e.className="dio__ground",r.append(e);let t=hf.map((L,P)=>{let F=document.createElement("div");F.className=`dio__layer dio__layer--${L.id}`,F.style.setProperty("--i",P);let I=document.createElement("div");I.className="dio__rise";let H=document.createElement("canvas");H.className="dio__paint";let z=document.createElementNS(vd,"svg");z.setAttribute("aria-hidden","true"),z.style.display="none";let q=document.createElement("div");q.className="dio__fx";let V=document.createElement("div");return V.className="dio__fx",I.append(V,H,z,q),F.append(I),r.append(F),{...L,wrap:F,paint:H,svg:z,fx:q,back:V,tf:""}}),n=Object.fromEntries(t.map(L=>[L.id,L])),i="",s=0,a=0,o=0,l=0,c=[],h=null,u=0,d=-1,p=null,f=[],v,m=new Promise(L=>{v=L}),g=(L,P,F,I,H,z,q,V="",ne=!1)=>{let ee=document.createElement("div");return ee.className=P,ee.style.cssText=`left:${D(F)}px;top:${D(I)}px;width:${D(H)}px;height:${D(z)}px;${V}`,ee.innerHTML=q?`<svg viewBox="0 0 ${D(H)} ${D(z)}" width="${D(H)}" height="${D(z)}" aria-hidden="true">${q}</svg>`:"",(ne?L.back:L.fx).append(ee),f.push(P==="dio__bird"?ee.firstElementChild:ee),ee};function _(L,P,F,I,H){let z=[L.x,L.y,L.rx,P,F,I,H&&H.top].map(ie=>Math.round(+ie||0)).join(",");if(z===i||!P||!F||!L.rx)return;i=z;for(let ie of t)ie.fx.innerHTML="",ie.back.innerHTML="";f=[],d=-1,c=[],h=null;let{x:q,y:V}=L,ne=L.rx,ee=L.ry||L.rx*1.27,re=ne/yd,se=ee/yd,J=nh(1712),oe=(ie,$,ae,ue)=>`<filter id="${ie}" x="-10%" y="-30%" width="120%" height="170%"><feDropShadow dx="0" dy="${$}" stdDeviation="${ae}" flood-color="rgb(${ht.ink})" flood-opacity="${ue}"/></filter>`,Me={},Pe=F+20,ye=H?H.bottom+34:F*.7,de=(ie,$)=>I||!H||ie>H.right+40||$>ye+8,Ve=ie=>`<clipPath id="${ie}"><path d="M${D(H?H.right+40:0)} -60H${D(P+60)}V${D(F+60)}H-60V${D(ye+8)}H${D(H?H.right+40:0)}Z"/></clipPath>`,R=q+re*(I?.1:.28),S=V+se*(I?.12:.18),k=re*(I?2.2:2.6);{let ie=Math.max(P,F)*(I?.75:.62);Me.sky=`<defs>${oe("dsky",3,6,.16)}<radialGradient id="glow" cx="${D(R)}" cy="${D(S)}" r="${D(ie)}" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${ht.glow[0]}"/><stop offset=".22" stop-color="${ht.glow[1]}" stop-opacity=".9"/><stop offset=".48" stop-color="${ht.glow[2]}" stop-opacity=".42"/><stop offset="1" stop-color="${ht.glow[2]}" stop-opacity="0"/></radialGradient></defs><radialGradient id="sund" cx=".42" cy=".38" r=".7"><stop offset="0" stop-color="#FCEFD2"/><stop offset=".45" stop-color="#F6D7A2"/><stop offset="1" stop-color="#ECB077"/></radialGradient><linearGradient id="sky" x1="0" y1="0" x2="0" y2="${D(V+se*1.3)}" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#E6D3B7" stop-opacity="0"/><stop offset=".55" stop-color="#EDCDA6" stop-opacity=".5"/><stop offset="1" stop-color="#EBBE8F" stop-opacity=".75"/></linearGradient><rect width="${P}" height="${F}" fill="url(#sky)"/><rect width="${P}" height="${F}" fill="url(#glow)"/><path filter="url(#dsky)" fill="url(#sund)" d="${li(R,S,k)}"/>`;let $=k*1.75;g(n.sky,"dio__halo",R-$,S-$,$*2,$*2,`<defs><radialGradient id="halo"><stop offset=".5" stop-color="#FBE3B8" stop-opacity=".55"/><stop offset="1" stop-color="#FBE3B8" stop-opacity="0"/></radialGradient></defs><circle cx="${D($)}" cy="${D($)}" r="${D($)}" fill="url(#halo)"/><circle cx="${D($)}" cy="${D($)}" r="${D(k*1.13)}" fill="none" stroke="#FBE8C4" stroke-opacity=".75" stroke-width="${D(Math.max(1.5,k*.022))}"/><circle cx="${D($)}" cy="${D($)}" r="${D(k*1.3)}" fill="none" stroke="#FBE8C4" stroke-opacity=".4" stroke-width="${D(Math.max(1,k*.014))}"/>`,"",!0),(I?[[P*.2,V-se*1.05,re*1.7],[P*.82,V-se*1.5,re*1.3]]:[[q-re*3.1,V-se*1.2,re*2],[q+re*2.75,Math.max(V-se*1.4,150),re*1.35],[q-re*1.2,Math.max(V-se*2.1,130),re*1.1]]).forEach(([me,Te,Ie],pe)=>{let Ce=Ie*.5,Ge=`cg${pe}`;g(n.sky,"dio__cloud",me-Ie*.6,Te-Ce,Ie*1.2,Ce+12,`<defs><linearGradient id="${Ge}" x1="0" y1="0" x2="0" y2="1"><stop offset=".35" stop-color="${ht.cloudTop}"/><stop offset="1" stop-color="${ht.cloudLow}"/></linearGradient>${oe(`${Ge}s`,3,4,.14)}</defs><path filter="url(#${Ge}s)" fill="url(#${Ge})" d="${cf(Ie*.6,Ce,Ie)}"/>`,`--drift:${D((pe%2?-1:1)*re*1.5)}px;--dur:${22+pe*6}s;--delay:${-pe*7}s`)});let ue=I?3:5,we=Math.max(I?96:160,V-se*1.9);for(let me=0;me<ue;me++){let Te=re*(I?.26:.22)*(1-me*.06);g(n.sky,"dio__bird",P*1.04,we+me*re*.22+me%2*re*.12,Te*2,Te,`<path fill="none" stroke="${ht.bird}" stroke-width="${D(Math.max(1.2,Te*.12))}" stroke-linecap="round" stroke-linejoin="round" d="M${D(Te*.05)} ${D(Te*.55)}Q${D(Te*.55)} ${D(Te*.05)} ${D(Te)} ${D(Te*.62)}Q${D(Te*1.45)} ${D(Te*.05)} ${D(Te*1.95)} ${D(Te*.55)}"/>`,`--fly:${D(-P*1.25)}px;--rise:${D(-se*(.3+me*.05))}px;--dur:${26+me*1.6}s;--delay:${D(me*.9+2.5)}s;--flap:${D(.55+me*.07)}s`)}}let G=(ie,$)=>{let ae=ie/($-1),ue=Pe-(V+se*.2),we=I?V+se*.2+ue*(.02+ae*.62):V+se*(.1+ae*1.6),me=I?V+se*.2+ue*(.12+ae*.62):Math.max(ye,V+se*.9)+ae*(F-Math.max(ye,V+se*.9))*.78,Te=I?ue*(.1-ae*.055):se*(.62-ae*.38),Ie=[J()*6.3,J()*6.3,J()*6.3],pe=[1.3+J()*.8,3.2+J()*1.4,7+J()*3],Ce=[];for(let Ge=0;Ge<=64;Ge++){let Qe=-60+(P+120)*Ge/64,Ee=Math.min(1,Math.max(0,Qe/P)),ze=me+(we-me)*Ee*Ee*(3-2*Ee),Y=ze-Te*(.55*Math.sin(Ee*pe[0]*Math.PI+Ie[0])+.3*Math.sin(Ee*pe[1]*Math.PI+Ie[1])+.15*Math.sin(Ee*pe[2]*Math.PI+Ie[2]));!I&&H&&(Y+=Math.min(1,Math.max(0,(H.right+220-Qe)/220))*Math.max(0,ye+Te*1.1-ze)),Ce.push([Qe,Y])}return{crest:Ce,d:`${Xn(Ce)}L${D(P+60)} ${D(Pe)}L-60 ${D(Pe)}Z`,u:ae}},y=Array.from({length:6},(ie,$)=>G($,6)),E=(ie,$,ae,ue)=>`<path fill="none" stroke="${ht.cut[ue]}" stroke-width="${D(1.1+ue*.25)}" stroke-linecap="round" stroke-opacity=".85" d="${Array.from({length:ae},(we,me)=>Xn(Yo(ie,$*(me+1)))).join("")}"/>`,N=(ie,$="")=>`<path filter="url(#dr${ie})" fill="${ht.ridge[ie]}" d="${y[ie].d}"/>${$}`,O=ie=>ie.map($=>oe(`dr${$}`,2+$,4+$,.14+$*.03)).join(""),X=-20,Q=P+20,W=(ie,$,ae,ue)=>{let we=Yo(ie,$-ae),me=Yo(ie,$+ae).reverse();return`<defs><linearGradient id="mg${ue}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${ht.mist}" stop-opacity="0"/><stop offset=".5" stop-color="${ht.mist}" stop-opacity=".55"/><stop offset="1" stop-color="${ht.mist}" stop-opacity="0"/></linearGradient></defs><path fill="url(#mg${ue})" d="${Xn([...we,...me],!0)}"/>`};Me.far=`<defs>${O([0,1])}</defs>`+N(0)+N(1,E(y[1].crest,se*.075,4,1));let le=(ie,$,ae,ue,we,me,Te)=>{let Ie=$.map(([,Ge])=>Ge),pe=Math.min(...Ie)+ae-ue*1.3,Ce=Math.max(...Ie)+ae+ue*1.3;g(ie,"dio__mist",-P*.1,pe,P*1.2,Ce-pe,`<g transform="translate(${D(P*.1)} ${D(-pe)})">${W($,ae,ue,we)}</g>`,`--drift:${D(me)}px;--dur:${Te}s`)};le(n.far,y[1].crest,se*.05,se*(I?.14:.2),0,re*.7,28);{let ie=y[2].crest,$=y[3].crest,ae=N(2,E(ie,se*.085,5,2)),ue="",we=I?[.1,.34,.7,.93]:[.52,.63,.78,.9,.97];for(let Y of we){let be=P*Y+(J()-.5)*re*.4,Ue=Ai(ie,be)+se*.12,Ae=re*(I?.3:.26)*(.8+J()*.4);de(be,Ue-Ae*3)&&(ue+=rf(be,Ue,Ae))}ae+=`<path fill="${ht.tree[0]}" d="${ue}"/>`+N(3);let me="",Te="";for(let Y=0;Y<4;Y++){let be=se*(.12+Y*.13),Ue=re*(I?.085:.075)*(1+Y*.12),Ae=_d($,be,X,Q,Ue,Ue*.62,J,Y>1);me+=Ae.d,Te+=Ae.b}ae+=`<g${I?"":' clip-path="url(#free3)"'}><path fill="${ht.row[0]}" d="${me}"/><path fill="${ht.berry}" d="${Te}"/></g>`;let Ie=I?P*.2:Math.max(H?H.right+re*1.4:P*.6,q-re*2.6),pe=re*(I?.3:.28),Ce=sf(Ie,Ai($,Ie)+se*.1,pe);ae+=`<path fill="${ht.tree[1]}" d="${Ce.beds}"/><path fill="${ht.berry}" d="${Ce.cherries}"/>`;let Ge=re*(I?.5:.42),Qe=lf(Ge),Ee=I?P*.08:Math.max(H?H.right+60:P*.45,Ie-pe*1.5),ze=I?P*.7:Math.min(P*.95,q+re*1.4);h={el:g(n.near,"dio__farmer",0,0,Qe.w,Qe.h,`<g class="dio__farmer-body">${Qe.svg}</g>`),crest:y[4].crest,dy:se*.12,from:Ee,to:ze,w:Qe.w,h:Qe.h};for(let[Y,be]of I?[[Ie+pe*5.2,pe*2.2],[Ie-pe*2.4,pe*1.6]]:[[Ie-pe*2.6,pe*2.1],[Ie+pe*5.4,pe*2.6]]){let Ue=Ai($,Y)+se*.12;if(!de(Y-be/2,Ue-be*.4))continue;let Ae=xd(Y,Ue,be,J);c.push([Y,Ue,be]),ae+=`<path filter="url(#dheap)" fill="#7A2418" d="${Ae.mound}"/>${Ae.cherries}`}Me.mid=`<defs>${O([2,3])}${oe("dheap",3,3,.3)}<radialGradient id="wglow"><stop offset="0" stop-color="${ht.window}" stop-opacity=".45"/><stop offset="1" stop-color="${ht.window}" stop-opacity="0"/></radialGradient>${I?"":Ve("free3")}</defs>${ae}`,le(n.mid,$,-se*(I?.12:.3),se*(I?.1:.13),1,-re*.6,36)}{let ie="";for(let ae of[4,5]){ie+=N(ae);let ue="",we="";for(let me=0;me<(ae===4?3:2);me++){let Te=se*(.14+me*.17),Ie=re*(I?.11:.1)*(1+me*.15)*(ae===5?1.25:1),pe=_d(y[ae].crest,Te,X,Q,Ie,Ie*.62,J,!0);ue+=pe.d,we+=pe.b}ie+=`<g${I?"":` clip-path="url(#free${ae})"`}><path fill="${ht.row[ae-3]}" d="${ue}"/><path fill="${ht.berryDark}" d="${we}"/></g>`}Me.near=`<defs>${O([4,5])}${I?"":Ve("free4")+Ve("free5")}</defs>${ie}`;{let ae=I?P*.78:Math.max(H?H.right+re*2.2:P*.55,q-re*1.6),ue=re*(I?1.25:1.15),we=Ai(y[4].crest,ae)+se*.2;if(de(ae-ue/2,we-ue*.4)){let me=xd(ae,we,ue,J);c.push([ae,we,ue]),Me.near+=`<defs>${oe("dheap2",4,4,.32)}</defs><path filter="url(#dheap2)" fill="#7A2418" d="${me.mound}"/>${me.cherries}`}}(I?[.06,.34,.62]:[.56,.67,.8,.93]).forEach((ae,ue)=>{let we=P*ae+(J()-.5)*re*.3,me=Ai(y[5].crest,we)+se*.2,Te=re*(I?.5:.46)*(.85+J()*.3);if(!de(we,me-Te*2))return;let Ie=af(Te,J);g(n.near,"dio__sway",we-Ie.w/2,me-Ie.h,Ie.w,Ie.h,Ie.svg,`--dur:${D(4.2+ue*.7)}s;--delay:${D(-ue*1.3)}s;--deg:${D(1.6+J())}deg`)})}{let ie=F-Math.max(I?30:40,F*(I?.05:.075)),$=[];for(let we=0;we<=48;we++){let me=-60+(P+120)*we/48;$.push([me,ie-Math.sin(me*.006+1)*se*.09-Math.sin(me*.019)*se*.04])}let ae=`${Xn($)}L${D(P+60)} ${D(F+50)}L-60 ${D(F+50)}Z`;(I?[.12,.45,.7,.93]:[.5,.6,.71,.83,.95]).forEach((we,me)=>{let Te=P*we+(J()-.5)*re*.4,Ie=Ai($,Te)+3,pe=re*(I?.42:.38)*(.8+J()*.4);if(!de(Te,Ie-pe))return;let Ce=of(pe,J);g(n.soil,"dio__sway",Te-Ce.w/2,Ie-Ce.h,Ce.w,Ce.h,Ce.svg,`--dur:${D(2.8+me*.5)}s;--delay:${D(-me*.9)}s;--deg:${D(3+J()*2)}deg`)}),Me.soil=`<defs>${oe("dsoil",7,10,.34)}</defs><path filter="url(#dsoil)" fill="${ht.soil}" d="${ae}"/><path fill="none" stroke="${ht.soilCut}" stroke-width="1.8" stroke-linecap="round" stroke-dasharray=".5 10" d="${[1,2,3].slice(0,I?2:3).map(we=>Xn(Yo($,se*.09*we))).join("")}"/>`}{let ie=[[P+re*.7,V-se*(I?.05:.2)],[q+re*1.7,V+se*.95],[q+ne*.05,V+ee*.97],[q-re*.75,V+se*.86],[q-re*1.2,V+se*.64]],$=[],ae=[ie[0],...ie,ie[ie.length-1]];for(let he=1;he<ae.length-2;he++)for(let Be=0;Be<20;Be++){let Se=Be/20,ke=ae[he-1],We=ae[he],Ze=ae[he+1],ct=ae[he+2];$.push([0,1].map(ot=>.5*(2*We[ot]+(-ke[ot]+Ze[ot])*Se+(2*ke[ot]-5*We[ot]+4*Ze[ot]-ct[ot])*Se*Se+(-ke[ot]+3*We[ot]-3*Ze[ot]+ct[ot])*Se*Se*Se)))}$.push(ie[ie.length-1]);let ue=[0];for(let he=1;he<$.length;he++)ue.push(ue[he-1]+Math.hypot($[he][0]-$[he-1][0],$[he][1]-$[he-1][1]));let we=ue[ue.length-1],me=he=>{let Be=he*we,Se=1;for(;Se<ue.length-1&&ue[Se]<Be;)Se++;let ke=(Be-ue[Se-1])/Math.max(1e-6,ue[Se]-ue[Se-1]);return[$[Se-1][0]+($[Se][0]-$[Se-1][0])*ke,$[Se-1][1]+($[Se][1]-$[Se-1][1])*ke]},Te=0,Ie=1/0;for(let he=0;he<=100;he++){let[Be,Se]=me(he/100),ke=Math.hypot(Be-ie[2][0],Se-ie[2][1]);ke<Ie&&(Ie=ke,Te=he/100)}let pe="",Ce="",Ge="",Qe=[],Ee=(he,Be,Se,ke,We,Ze=!1)=>{let[ct,ot]=me(he),pt=ih(ct,ot,Be*re,Be*Se*re,ke,J),zt=`<path fill="${ht.leaf[We]}" d="${pt.shape}"/>`;Ze?pe+=zt:Ce+=zt,Qe.push(pt.veins)},ze=I?.74:.76;Ee(Te,3.3*ze,.31,-1.2,0,!0),Ee(Te,2.8*ze,.3,-.75,1,!0),Ee(Te,2.5*ze,.3,-3.05,3,!0),Ee(Te*.62,3.2*ze,.32,-1.45,2),Ee(Te*.6,2.9*ze,.31,1.2,0),I||(Ee(Te*.25,3*ze,.31,-1.15,3),Ee(Te*.22,2.7*ze,.3,1.5,1)),Ee(.97,1.25*ze,.3,-2.55,2),Ee(.97,1.05*ze,.3,-1.85,2);let Y=[],be=[];for(let he=0;he<=40;he++){let Be=he/40,[Se,ke]=me(Be),[We,Ze]=me(Math.min(1,Be+.01)),[ct,ot]=me(Math.max(0,Be-.01)),pt=-(Ze-ot),zt=We-ct,Zt=Math.hypot(pt,zt)||1,Ct=re*(.14-.075*Be);Y.push([Se+pt/Zt*Ct,ke+zt/Zt*Ct]),be.push([Se-pt/Zt*Ct,ke-zt/Zt*Ct])}let Ue=Xn([...Y,...be.reverse()],!0),[Ae,C]=me(Te);for(let[he,Be,Se,ke]of[[-.66,.02,"#8FA041",.4],[.7,-.06,"#D8A23C",.44],[.36,.3,"#D2652F",.46]]){let We=Ae+he*ne,Ze=C+Be*ne,ct=ke*ne,ot=ke*ne*1.16;Ge+=`<path fill="none" stroke="${ht.twig}" stroke-width="${D(ne*.05)}" stroke-linecap="round" d="M${D(Ae)} ${D(C)}L${D(We)} ${D(Ze-ot*.8)}"/><ellipse fill="${Se}" cx="${D(We)}" cy="${D(Ze)}" rx="${D(ct)}" ry="${D(ot)}"/><ellipse fill="#FFF6E6" fill-opacity=".16" cx="${D(We-ct*.32)}" cy="${D(Ze-ot*.34)}" rx="${D(ct*.28)}" ry="${D(ot*.2)}" transform="rotate(-30 ${D(We-ct*.32)} ${D(Ze-ot*.34)})"/><circle fill="${ht.twig}" fill-opacity=".5" cx="${D(We)}" cy="${D(Ze+ot*.78)}" r="${D(ct*.13)}"/>`}Me.branch=`<defs>${oe("dbr",8,10,.34)}</defs><g filter="url(#dbr)">${pe}<path fill="${ht.twig}" d="${Ue}"/>${Ce}${Ge}</g><path fill="none" stroke="${ht.vein}" stroke-opacity=".8" stroke-width="${D(Math.max(1,re*.013))}" stroke-linecap="round" d="${Qe.join("")}"/>`}{let ie=nh(77),$=[],ae="";$.forEach(([ue,we,me,Te,Ie],pe)=>{ae+=`<path fill="${ht.close[pe%2]}" d="${ih(ue,we,me*re,Te*re,Ie,ie).shape}"/>`}),Me.close=ae?`<defs><filter id="dclose" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="${D(Math.max(2,re*.025))}"/><feDropShadow dx="0" dy="10" stdDeviation="12" flood-color="rgb(${ht.ink})" flood-opacity=".35"/></filter></defs><g filter="url(#dclose)">${ae}</g>`:""}for(let ie of t)ie.wrap.style.transformOrigin=I?`${D(q)}px ${D(V)}px`:"";M(Me,P,F,++u).then(()=>v(),()=>v())}function x(L,P,F,I){let z=Math.ceil(P/8),q=Math.ceil(F/8);try{let V=document.createElement("canvas");V.width=z,V.height=q;let ne=V.getContext("2d",{willReadFrequently:!0});ne.drawImage(L,0,0,z,q);let ee=ne.getImageData(0,0,z,q).data,re=z,se=q,J=-1,oe=-1;for(let ye=0;ye<q;ye++)for(let de=0;de<z;de++)ee[(ye*z+de)*4+3]>2&&(de<re&&(re=de),de>J&&(J=de),ye<se&&(se=ye),ye>oe&&(oe=ye));if(J<0)return{x:0,y:0,w:P,h:F};let Me=Math.max(0,re*8-I),Pe=Math.max(0,se*8-I);return{x:Me,y:Pe,w:Math.min(P,(J+1)*8+I)-Me,h:Math.min(F,(oe+1)*8+I)-Pe}}catch{return{x:0,y:0,w:P,h:F}}}async function M(L,P,F,I){let H=window.devicePixelRatio||1;await Promise.all(t.map(async z=>{let q=L[z.id]||"",V=z.paint,ne=Math.min(H,df[z.id]||1);if(!q){V.width=V.height=0;return}let ee=`<svg xmlns="${vd}" width="${P}" height="${F}" viewBox="0 0 ${P} ${F}">${q}</svg>`,re=URL.createObjectURL(new Blob([ee],{type:"image/svg+xml"}));try{let se=new Image;if(se.src=re,await se.decode(),I!==u)return;let J=x(se,P,F,z.id==="branch"?24:8);V.width=Math.round(J.w*ne),V.height=Math.round(J.h*ne),Object.assign(V.style,{left:`${J.x}px`,top:`${J.y}px`,width:`${J.w}px`,height:`${J.h}px`}),z.id==="branch"&&(V.style.transformOrigin=`${P-J.x}px ${F*.45-J.y}px`);let oe=V.getContext("2d");oe.drawImage(se,-J.x*ne,-J.y*ne,P*ne,F*ne),uf(oe,V.width,V.height),V.style.display="",z.svg.style.display="none"}catch{if(I!==u)return;z.svg.setAttribute("viewBox",`0 0 ${P} ${F}`),z.svg.setAttribute("width",P),z.svg.setAttribute("height",F),z.svg.innerHTML=q,z.svg.style.display="",V.style.display="none"}finally{URL.revokeObjectURL(re)}}))}function w(L,P,F,I,H,z=!1,q=P<=0){s+=(o-s)*.06,a+=(l-a)*.06,Math.abs(o-s)<.001&&(s=o),Math.abs(l-a)<.001&&(a=l);let V=L*L*(3-2*L);for(let ee of t){let re=z?ee.flyNarrow:ee.fly,se=-s*ee.depth*26+re[0]*V*I,J=-a*ee.depth*16+re[1]*V*H,oe=1+re[2]*V,Me=`translate3d(${se.toFixed(1)}px, ${J.toFixed(1)}px, 0) scale(${oe.toFixed(4)})`;Me!==ee.tf&&(ee.tf=Me,ee.wrap.style.transform=Me)}if(P!==d){d=P;let ee=P.toFixed(3);e.style.opacity=ee;for(let re of t)re.paint.style.opacity=ee,re.svg.style.opacity=ee;for(let re of f)re.style.opacity=ee}let ne=q&&P<=0;ne!==p&&(p=ne,r.classList.toggle("is-gone",ne)),ne||U(F)}let T=0;function U(L){if(!h)return;let P=h.to-h.from,F=Math.max(24,P/9)*2,I=L%F/F,H=I<.5?I*2:2-I*2,z=I<.5?1:-1,q=h.from+P*H,V=Ai(h.crest,q)+h.dy;h.el.style.transform=`translate3d(${(q-h.w/2).toFixed(1)}px, ${(V-h.h).toFixed(1)}px, 0)`,z!==T&&(T=z,h.el.style.setProperty("--face",z))}return{layout:_,update:w,lean:(L,P)=>{o=L,l=P},layers:t,ready:()=>i!=="",whenDrawn:()=>m}}(()=>{let e=/[?&]debug=ui\b/.test(location.search)?Object.assign(document.createElement("pre"),{style:"position:fixed;left:8px;top:60px;z-index:99;margin:0;padding:6px 8px;font:11px/1.3 monospace;background:#fffd;color:#300;max-width:90vw;white-space:pre-wrap"}):null;if(e){document.body.append(e),addEventListener("error",Y=>{e.textContent+=`
ERR ${Y.message} @${Y.lineno}:${Y.colno}`});for(let Y of["pointerdown","click"])addEventListener(Y,be=>{e.dataset.taps=`${e.dataset.taps||""} ${Y}:${be.target.tagName}.${String(be.target.className).split(" ")[0]}`.slice(-220)},!0)}let t=document.querySelector("[data-hero]");if(!t)return;let n=t.querySelector("[data-hero-stage]"),i=t.querySelector("[data-hero-canvas]"),s=t.querySelector("[data-hero-cherry]"),a=t.querySelector("[data-hero-cue]"),o=t.querySelector("[data-hero-name]"),l=t.querySelector("[data-hero-plant]"),c=t.querySelector("[data-hero-dio]"),h=c&&c.dataset.box?c.dataset.box.split(",").map(Number):null,u=l&&{cx:+l.dataset.cx,cy:+l.dataset.cy,rx:+l.dataset.rx,turn:+l.dataset.turn,box:l.dataset.box.split(",").map(Number)},d=t.querySelector(".hero__copy"),p=window.matchMedia("(prefers-reduced-motion: reduce)").matches,f=(Y,be=0,Ue=1)=>Math.min(Ue,Math.max(be,Y)),v=(Y,be,Ue)=>{let Ae=f((Ue-Y)/(be-Y));return Ae*Ae*(3-2*Ae)},m=(Y,be,Ue,Ae,C)=>v(Y,be,C)*(1-v(Ue,Ae,C)),g=[...t.querySelectorAll("[data-part]")],_=[...t.querySelectorAll("[data-beat]")].map(Y=>({el:Y,win:Y.dataset.beat.split(",").map(Number)})),x=[230,211,183];t.edge={top:x,floor:x,fadeFrom:1/0,fadeH:0},t.dispatchEvent(new Event("tone"));let M=s&&{texture:s.dataset.texture,aspect:+s.dataset.aspect,cx:+s.dataset.cx,cy:+s.dataset.cy,rx:+s.dataset.rx,ry:+s.dataset.ry},w=null;try{w=gd(i,{onFrame:Ie,photo:M,plantBox:u&&u.box||h,gentle:matchMedia("(pointer: coarse)").matches})}catch{w=null}let T=()=>document.dispatchEvent(new Event("cascarup:ready"));if(!w){t.classList.add("is-flat"),e&&(e.textContent="kein WebGL"),T();return}let U=[];if(e){let Y=0,be=[],Ue=[],Ae=C=>{Y&&(U.push(C-Y),se&&(be.push(C-Y),C-Y>25&&Ue.push(`${w.progress.toFixed(3)}:${Math.round(C-Y)}`))),!se&&be.length&&(e.dataset.g=`glide ${be.length}f slow=${be.filter(he=>he>25).length} max=${Math.round(Math.max(...be))}ms @ ${Ue.join(" ")}`,be=[],Ue=[]),U.length>240&&U.shift(),Y=C,requestAnimationFrame(Ae)};requestAnimationFrame(Ae)}e&&setInterval(()=>{let Y=[],be=0;for(let C=U.length-1;C>=0&&be<1e3;C--)be+=U[C],Y.push(U[C]);let Ue=`fps=${Y.length} slow=${Y.filter(C=>C>25).length} max=${Math.round(Math.max(0,...Y))}ms`,Ae=w.state();(Ae.progress!==Ae.target||se)&&(e.dataset.low=Math.min(+(e.dataset.low||99),Y.length)),e.textContent=`${e.dataset.g||""}
${Ue} low=${e.dataset.low||"-"} px=${Ae.ratio} cost=${Ae.cost}ms p=${Ae.progress}\u2192${Ae.target}
`+JSON.stringify(Ae)+` reduce=${p} y=${Math.round(scrollY)} cls=${t.className}
${e.dataset.taps||""}`},400),t.classList.add("is-3d");let B=c?Md(c):null;if(B){let Y=()=>c.classList.add("is-up");document.addEventListener("cascarup:shown",Y,{once:!0}),/[?&]debug\b/.test(location.search)&&(window.__dio=B),setTimeout(Y,12e3),matchMedia("(pointer: fine)").matches&&!p&&addEventListener("pointermove",be=>B.lean(be.clientX/innerWidth*2-1,be.clientY/innerHeight*2-1),{passive:!0})}w.background=getComputedStyle(document.documentElement).getPropertyValue("--paper").trim()||"#E6D3B7",/[?&]debug\b/.test(location.search)&&(window.__hero=w);let L=/[?&]debug\b/.test(location.search)?parseFloat(new URLSearchParams(location.search).get("at")):NaN,P=0,F=null,I=()=>(F||(t.classList.contains("is-released")||(P=parseFloat(getComputedStyle(n).top)||0),F={top:t.getBoundingClientRect().top+window.scrollY,h:t.offsetHeight,stage:n.offsetHeight,release:parseFloat(getComputedStyle(t).getPropertyValue("--release"))||0}),F),H=()=>{F=null};if(window.addEventListener("resize",H),"ResizeObserver"in window){let Y=new ResizeObserver(H);Y.observe(t),Y.observe(n),Y.observe(document.body)}document.fonts?.ready.then(H),window.addEventListener("load",H);let z=()=>{let Y=I();return Y.h-P-Y.stage-Y.release},q=()=>I().top;function V(Y=window.scrollY){let be=z();return be>0?f((Y-q())/be):0}let ne=window.scrollY,ee=0,re=0,se=0,J=!1,oe=!1,Me=!1,Pe=document.documentElement,ye=window.matchMedia("(pointer: coarse)").matches,de=()=>{Pe.style.scrollBehavior="",Pe.style.overflow="",J=!1},Ve=()=>{se&&(cancelAnimationFrame(se),se=0,de())};function R(Y,be=0,Ue=!1){Ve(),Me=!1;let Ae=window.scrollY,C=Y-Ae;if(Math.abs(C)<2)return;let he=be||f(Math.abs(C)/Math.max(1,z())*th,500,2600),Be=performance.now();Pe.style.scrollBehavior="auto",Ue&&ye&&(Pe.style.overflow="hidden");let Se=ke=>{let We=f((ke-Be)/he),Ze=We<.5?4*We*We*We:1-Math.pow(-2*We+2,3)/2;window.scrollTo(0,Ae+C*Ze),se=We<1?requestAnimationFrame(Se):0,se||de()};se=requestAnimationFrame(Se)}let S=/[?&]debug\b/.test(location.search)&&!/[?&]glide\b/.test(location.search),k=0;document.addEventListener("click",Y=>{Y.target.closest?.('a[href^="#"]')&&(k=performance.now()+2500)},!0);function G(){if(p||se||S||!Me||performance.now()<k)return;let Y=z(),be=q(),Ue=window.scrollY;if(Y<=0||Ue<be-1||Ue>be+Y+1)return;let Ae=f((Ue-be)/Y);if(mn.some(he=>Math.abs(he-Ae)<.006))return;let C;ee>0?C=mn.find(he=>he>Ae):ee<0&&(C=[...mn].reverse().find(he=>he<Ae)),C===void 0&&(C=mn.reduce((he,Be)=>Math.abs(Be-Ae)<Math.abs(he-Ae)?Be:he)),R(be+C*Y)}for(let Y of["touchstart","keydown","pointerdown"])window.addEventListener(Y,Ve,{passive:!0});let y=!1,E=0,N=0;addEventListener("wheel",Y=>{let be=performance.now(),Ue=be-E>180;if(E=be,N=be,J&&se&&Y.deltaY>0){y=!0,Y.preventDefault();return}if(y&&!Ue&&Y.deltaY>0){Y.preventDefault();return}y=!1,Me=!0,Ve()},{passive:!1}),addEventListener("touchstart",()=>{oe=!0,N=performance.now()},{passive:!0}),addEventListener("touchmove",()=>{N=performance.now(),Me=!0},{passive:!0}),addEventListener("keydown",()=>{N=performance.now(),Me=!0},{passive:!0}),addEventListener("touchend",()=>{oe=!1,N=performance.now(),O()},{passive:!0}),addEventListener("touchcancel",()=>{oe=!1},{passive:!0});function O(Y=window.scrollY){if(p||S||se||oe||performance.now()<k||performance.now()-N>900||document.documentElement.classList.contains("is-loading"))return;let be=z(),Ue=q();if(be<=0)return;let Ae=(Y-Ue)/be;ee>0&&Ae>.003&&Ae<mn[1]-.01&&(J=!0,R(Ue+mn[1]*be,(mn[1]-Ae)*th,!0))}function X(){let Y=window.scrollY,be=I(),Ue=!p&&be.top+be.h-Y<=P+be.stage+be.release+.5;Ue!==t.classList.contains("is-released")&&t.classList.toggle("is-released",Ue),w.progress=p?0:V(Y),!se&&Y!==ne&&(ee=Math.sign(Y-ne)),ne=Y,clearTimeout(re),se||(O(Y),se||(re=setTimeout(G,150)))}let Q=-1,W=-1,le=-1,ie=!0,$=!1,ae=null,ue=1,we=1,me=!1,Te=0;function Ie(Y,be,Ue){if(B){let he=ue,Be=we,Se=he/Be<=1.05,ke=Se?.05:.072,We=Math.round((1-v(Se?.012:ke-.028,ke,Y))*500)/500,Ze=Y>ke+.025;(We>0||ie||Ze!==$)&&((Y<.003||!B.ready())&&B.layout(Ue(),he,Be,Se,ae),B.update(v(.004,ke,Y),We,performance.now()/1e3,he,Be,Se,Ze)),ie=We>0,$=Ze;let ct=We>=1&&!document.documentElement.classList.contains("is-loading");ct!==me&&(me=ct,w.cover=ct)}let Ae=Math.round((1-v(.012,.05,Y))*500)/500;if(Ae>0&&(a||o)){let he=Ue(),Be=ue,Se=we,ke=Be/Se<=1.05;a&&(a.style.setProperty("--x",`${(Be/2).toFixed(1)}px`),a.style.setProperty("--y",`${(ke?Se-72:Se-82).toFixed(1)}px`)),o&&(o.classList.toggle("is-up",ke),o.style.setProperty("--x",`${(he.x-(ke?.3:.5)*he.rx).toFixed(1)}px`),o.style.setProperty("--y",`${(he.y-(ke?.82:.8)*he.ry).toFixed(1)}px`))}if(u){let he=ue,Be=we,Se=he/Be<=1.05,ke=v(.006,Se?.055:.07,Y),We=Math.round((1-v(Se?.03:.048,Se?.052:.07,Y))*500)/500;if(We>0){let Ze=Ue(),ct=Ze.rx/u.rx,ot=ke*ke*he*(Se?.55:.6),pt=ke*ke*Be*(Se?-.32:.75),zt=u.turn+ke*(Se?-9:9);l.style.transform=`translate3d(${(Ze.x+ot).toFixed(1)}px, ${(Ze.y+pt).toFixed(1)}px, 0) rotate(${zt.toFixed(2)}deg) scale(${ct.toFixed(4)}) translate(${-u.cx}px, ${-u.cy}px)`}We!==le&&(le=We,l.style.opacity=We,l.style.visibility=We>0?"visible":"hidden")}if(Ae!==W){W=Ae;for(let he of[a,o])he&&(he.style.opacity=Ae,he.style.visibility=Ae>0?"visible":"hidden");a&&a.classList.toggle("is-off",Ae===0)}for(let he of _){let[Be,Se,ke,We]=he.win,Ze=Math.round((We>=1?v(Be,Se,Y):m(Be,Se,ke,We,Y))*500)/500;Ze!==he.o&&(he.o=Ze,he.el.style.opacity=Ze,he.el.style.visibility=Ze===0?"hidden":"visible",he.el.style.setProperty("--in",Ze))}let C=m(.17,.22,.287,.305,Y);if(C>.002){let he=be();for(let Be of g){let Se=he[Be.dataset.part];Be.style.transform=`translate3d(${Se.x.toFixed(1)}px, ${Se.y.toFixed(1)}px, 0)`,Be.style.opacity=C.toFixed(3),Be.style.visibility="visible"}g.shown=!0}else if(g.shown!==!1){g.shown=!1;for(let he of g)he.style.opacity="0",he.style.visibility="hidden"}if(M){let he=w&&w.photoReady?1-v(.068,.095,Y):Y<.1?1:0;if(he>0){let Be=Ue(),Se=Be.rx/M.rx,ke=Se*s.naturalHeight/Math.max(1,s.naturalWidth);(!Te||Se>Te*1.04||Se<Te*.5)&&(Te=Math.ceil(Se*1.2),s.style.width=`${Te}px`),s.style.transform=`translate3d(${(Be.x-M.cx*Se).toFixed(1)}px, ${(Be.y-M.cy*ke).toFixed(1)}px, 0) scale(${(Se/Te).toFixed(4)})`}he!==Q&&(Q=he,s.style.opacity=he,s.style.visibility=he>0?"visible":"hidden")}}let pe=(Y,be)=>{let Ue=(Y.l+Y.r)/2,Ae=(Y.t+Y.b)/2,C=(Y.r-Y.l)/2*be,he=(Y.b-Y.t)/2*be;return{l:Ue-C,t:Ae-he,r:Ue+C,b:Ae+he}};function Ce(){let Y=n.getBoundingClientRect(),be=Y.width,Ue=Y.height,Ae=be/Ue<=1.05,C=d.getBoundingClientRect(),he=(document.querySelector("[data-nav]")?.offsetHeight||64)-12,Be=0;for(let Se of d.children)Be=Math.max(Be,Se.getBoundingClientRect().right-Y.left);w.frame=Ae?pe({l:14,t:C.bottom-Y.top+8,r:be-14,b:Ue-86},.9):{l:Be+48,t:he+28,r:be-32,b:Ue-104},ae={left:C.left-Y.left,right:Be,top:C.top-Y.top,bottom:C.bottom-Y.top}}let Ge=()=>{let Y=n.getBoundingClientRect();ue=Math.round(Y.width),we=Math.round(Y.height),w.resize(ue,we),Ce()};document.fonts?.ready.then(()=>Ce()),new ResizeObserver(Ge).observe(n),Ge(),new IntersectionObserver(([Y])=>{p||(Y.isIntersecting?w.start():w.stop())},{rootMargin:"120px 0px"}).observe(t),window.addEventListener("scroll",X,{passive:!0}),window.addEventListener("resize",X),X(),clearTimeout(re),p?(w.jump(0),w.stop()):w.begin(),Number.isFinite(L)&&L>=0&&L<=1&&setTimeout(()=>{document.documentElement.style.scrollBehavior="auto",scrollTo(0,q()+z()*L)},600),s&&!s.complete&&s.addEventListener("load",()=>w.jump(w.progress),{once:!0}),requestAnimationFrame(()=>t.classList.add("is-ready"));let Qe=()=>new Promise(Y=>{let be=0,Ue=performance.now(),Ae=Ue,C=he=>{be=he-Ue<20?be+1:0,Ue=he,be>=30||he-Ae>5e3?Y():requestAnimationFrame(C)};requestAnimationFrame(C)}),Ee=!1,ze=()=>{Ee||(Ee=!0,t.classList.add("has-plant"),(p?Promise.resolve():w.warm()).then(()=>B?B.whenDrawn():null).then(()=>p||w.tune()).then(Qe).then(T,T),setTimeout(()=>t.classList.add("is-settled"),1e3))};l?(l.decode?l.decode():Promise.resolve()).then(ze,()=>l.addEventListener("load",ze,{once:!0})):ze(),setTimeout(ze,5e3)})();
