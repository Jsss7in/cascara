/* Cascarup 3D opening. three.js © 2010-2025 three.js authors, MIT licence. */
var bh=0,Ll=1,wh=2;var Dl=1,Th=2,Fn=3,xi=0,Vt=1,Rt=2,yi=0,Ls=1,Ul=2,Nl=3,Fl=4,Eh=5,Ur=100,Ah=101,Ch=102,Rh=103,Ph=104,Ih=200,Lh=201,Dh=202,Uh=203,Nh=204,Fh=205,Oh=206,Bh=207,zh=208,kh=209,Gh=210,Vh=211,Hh=212,Wh=213,Xh=214,go=0,vo=1,_o=2,Ds=3,xo=4,yo=5,Mo=6,So=7,$h=0,jh=1,qh=2,ni=0,Yh=1,Zh=2,Jh=3,Kh=4,Qh=5,eu=6,bo=7;var Ol=300,Nr=301,zi=302,wo=303,To=304,Us=306,yr=1e3,Mr=1001,Ca=1002,Ln=1003,tu=1004;var Ns=1005;var Dn=1006,Eo=1007;var ki=1008;var On=1009,Bl=1010,zl=1011,Fr=1012,Ao=1013,Gi=1014,Bn=1015,Or=1016,Co=1017,Ro=1018,Br=1020,kl=35902,nu=1021,iu=1022,Mn=1023,Fs=1026,Os=1027,Gl=1028,Po=1029,ru=1030,Vl=1031;var Hl=1033,Io=33776,Lo=33777,Do=33778,Uo=33779,Wl=35840,Xl=35841,$l=35842,jl=35843,ql=36196,Yl=37492,Zl=37496,Jl=37808,Kl=37809,Ql=37810,ec=37811,tc=37812,nc=37813,ic=37814,rc=37815,sc=37816,ac=37817,oc=37818,lc=37819,cc=37820,hc=37821,No=36492,uc=36494,dc=36495,su=36283,pc=36284,mc=36285,fc=36286;var ls=2300,Ra=2301,Ta=2302,bl=2400,wl=2401,Tl=2402;var au=3201;var ou=0,lu=1,Vi="",Ut="srgb",Ii="srgb-linear",cs="linear",mt="srgb";var Pi=7680;var cu=512,hu=513,uu=514,gc=515,du=516,pu=517,mu=518,fu=519,Pa=35044;var vc="300 es",mi=2e3,hs=2001;var Kn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}},Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ea=Math.PI/180,Ia=180/Math.PI;function Zn(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(Bt[255&r]+Bt[r>>8&255]+Bt[r>>16&255]+Bt[r>>24&255]+"-"+Bt[255&e]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[63&t|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[255&n]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function ot(r,e,t){return Math.max(e,Math.min(t,r))}function md(r,e){return(r%e+e)%e}function qo(r,e,t){return(1-t)*r+t*e}function Rn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function vt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var _e=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},fn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[a+0],p=s[a+1],f=s[a+2],v=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=f,void(e[t+3]=v);if(u!==v||l!==d||c!==p||h!==f){let m=1-o,g=l*d+c*p+h*f+u*v,_=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){let w=Math.sqrt(x),T=Math.atan2(w,g*_);m=Math.sin(m*T)/w,o=Math.sin(o*T)/w}let M=o*_;if(l=l*m+d*M,c=c*m+p*M,h=h*m+f*M,u=u*m+v*M,m===1-o){let w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*u+l*p-c*d,e[t+1]=l*f+h*d+c*u-o*p,e[t+2]=c*f+h*p+o*d-l*u,e[t+3]=h*f-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),p=l(i/2),f=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"YZX":this._x=d*h*u+c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u-d*p*f;break;case"XZY":this._x=d*h*u-c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Yo.copy(this).projectOnVector(e),this.sub(Yo)}reflect(e){return this.sub(Yo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yo=new A,Zc=new fn,it=class r{constructor(e,t,n,i,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],f=n[8],v=i[0],m=i[3],g=i[6],_=i[1],x=i[4],M=i[7],w=i[2],T=i[5],U=i[8];return s[0]=a*v+o*_+l*w,s[3]=a*m+o*x+l*T,s[6]=a*g+o*M+l*U,s[1]=c*v+h*_+u*w,s[4]=c*m+h*x+u*T,s[7]=c*g+h*M+u*U,s[2]=d*v+p*_+f*w,s[5]=d*m+p*x+f*T,s[8]=d*g+p*M+f*U,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,f=t*u+n*d+i*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/f;return e[0]=u*v,e[1]=(i*c-h*n)*v,e[2]=(o*n-i*a)*v,e[3]=d*v,e[4]=(h*t-i*l)*v,e[5]=(i*s-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Zo.makeScale(e,t)),this}rotate(e){return this.premultiply(Zo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Zo=new it;function _c(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Sr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function gu(){let r=Sr("canvas");return r.style.display="block",r}var Jc={};function Li(r){r in Jc||(Jc[r]=!0,console.warn(r))}function vu(r,e,t){return new Promise(function(n,i){setTimeout(function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}},t)})}function _u(r){let e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function xu(r){let e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=1-e[14])}var Kc=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qc=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fd(){let r={enabled:!0,workingColorSpace:Ii,spaces:{},convert:function(i,s,a){return this.enabled!==!1&&s!==a&&s&&a&&(this.spaces[s].transfer===mt&&(i.r=Jn(i.r),i.g=Jn(i.g),i.b=Jn(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===mt&&(i.r=xr(i.r),i.g=xr(i.g),i.b=xr(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===""?cs:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Li("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Li("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Ii]:{primaries:e,whitePoint:n,transfer:cs,toXYZ:Kc,fromXYZ:Qc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:Kc,fromXYZ:Qc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}}),r}var ht=fd();function Jn(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function xr(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var ir,La=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ir===void 0&&(ir=Sr("canvas")),ir.width=e.width,ir.height=e.height;let i=ir.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ir}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Sr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=255*Jn(s[a]/255);return n.putImageData(i,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*Jn(t[n]/255)):t[n]=Jn(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},gd=0,br=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=Zn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Jo(i[a].image)):s.push(Jo(i[a]))}else s=Jo(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function Jo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?La.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var vd=0,Ko=new A,qt=class r extends Kn{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=1001,i=1001,s=1006,a=1008,o=1023,l=1009,c=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Zn(),this.name="",this.source=new br(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ko).x}get height(){return this.source.getSize(Ko).y}get depth(){return this.source.getSize(Ko).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];i!==void 0?i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n:console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ol)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yr:e.x=e.x-Math.floor(e.x);break;case Mr:e.x=e.x<0?0:1;break;case Ca:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case yr:e.y=e.y-Math.floor(e.y);break;case Mr:e.y=e.y<0?0:1;break;case Ca:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};qt.DEFAULT_IMAGE=null,qt.DEFAULT_MAPPING=Ol,qt.DEFAULT_ANISOTROPY=1;var xt=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],f=l[9],v=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(f+m)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,M=(p+1)/2,w=(g+1)/2,T=(h+d)/4,U=(u+v)/4,B=(f+m)/4;return x>M&&x>w?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=T/n,s=U/n):M>w?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=T/i,s=B/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=U/s,i=B/s),this.set(n,i,s,t),this}let _=Math.sqrt((m-f)*(m-f)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-f)/_,this.y=(u-v)/_,this.z=(d-h)/_,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Da=class extends Kn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);let i={width:e,height:t,depth:n.depth},s=new qt(i);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new br(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Un=class extends Da{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},us=class extends qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ua=class extends qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gn=class{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,dn):dn.fromBufferAttribute(s,a),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ks.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ks.copy(n.boundingBox)),Ks.applyMatrix4(e.matrixWorld),this.union(Ks)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Kr),Qs.subVectors(this.max,Kr),rr.subVectors(e.a,Kr),sr.subVectors(e.b,Kr),ar.subVectors(e.c,Kr),ai.subVectors(sr,rr),oi.subVectors(ar,sr),Ei.subVectors(rr,ar);let t=[0,-ai.z,ai.y,0,-oi.z,oi.y,0,-Ei.z,Ei.y,ai.z,0,-ai.x,oi.z,0,-oi.x,Ei.z,0,-Ei.x,-ai.y,ai.x,0,-oi.y,oi.x,0,-Ei.y,Ei.x,0];return!!Qo(t,rr,sr,ar,Qs)&&(t=[1,0,0,0,1,0,0,0,1],!!Qo(t,rr,sr,ar,Qs)&&(ea.crossVectors(ai,oi),t=[ea.x,ea.y,ea.z],Qo(t,rr,sr,ar,Qs)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(dn).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Xn=[new A,new A,new A,new A,new A,new A,new A,new A],dn=new A,Ks=new gn,rr=new A,sr=new A,ar=new A,ai=new A,oi=new A,Ei=new A,Kr=new A,Qs=new A,ea=new A,Ai=new A;function Qo(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Ai.fromArray(r,s);let o=i.x*Math.abs(Ai.x)+i.y*Math.abs(Ai.y)+i.z*Math.abs(Ai.z),l=e.dot(Ai),c=t.dot(Ai),h=n.dot(Ai);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var _d=new gn,Qr=new A,el=new A,vn=class{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):_d.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qr.subVectors(e,this.center);let t=Qr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=.5*(n-this.radius);this.center.addScaledVector(Qr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(el.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qr.copy(e.center).add(el)),this.expandByPoint(Qr.copy(e.center).sub(el))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},$n=new A,tl=new A,ta=new A,li=new A,nl=new A,na=new A,il=new A,Di=class{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){tl.copy(e).add(t).multiplyScalar(.5),ta.copy(t).sub(e).normalize(),li.copy(this.origin).sub(tl);let s=.5*e.distanceTo(t),a=-this.direction.dot(ta),o=li.dot(this.direction),l=-li.dot(ta),c=li.lengthSq(),h=Math.abs(1-a*a),u,d,p,f;if(h>0)if(u=a*l-o,d=a*o-l,f=s*h,u>=0)if(d>=-f)if(d<=f){let v=1/h;u*=v,d*=v,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(tl).addScaledVector(ta,d),p}intersectSphere(e,t){$n.subVectors(e.center,this.origin);let n=$n.dot(this.direction),i=$n.dot($n)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i?null:((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i?null:((o>n||n!=n)&&(n=o),(l<i||i!=i)&&(i=l),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,n,i,s){nl.subVectors(t,e),na.subVectors(n,e),il.crossVectors(nl,na);let a,o=this.direction.dot(il);if(o>0){if(i)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}li.subVectors(this.origin,e);let l=a*this.direction.dot(na.crossVectors(li,na));if(l<0)return null;let c=a*this.direction.dot(nl.cross(li));if(c<0||l+c>o)return null;let h=-a*li.dot(il);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},nt=class r{constructor(e,t,n,i,s,a,o,l,c,h,u,d,p,f,v,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,u,d,p,f,v,m)}set(e,t,n,i,s,a,o,l,c,h,u,d,p,f,v,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=p,g[7]=f,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/or.setFromMatrixColumn(e,0).length(),s=1/or.setFromMatrixColumn(e,1).length(),a=1/or.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,f=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+f*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=f+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,f=c*h,v=c*u;t[0]=d+v*o,t[4]=f*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,f=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,f=o*h,v=o*u;t[0]=l*h,t[4]=f*c-p,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=p*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,f=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=f*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+f,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*l,p=a*c,f=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xd,e,yd)}lookAt(e,t,n){let i=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),ci.crossVectors(n,Qt),ci.lengthSq()===0&&(Math.abs(n.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),ci.crossVectors(n,Qt)),ci.normalize(),ia.crossVectors(Qt,ci),i[0]=ci.x,i[4]=ia.x,i[8]=Qt.x,i[1]=ci.y,i[5]=ia.y,i[9]=Qt.y,i[2]=ci.z,i[6]=ia.z,i[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],f=n[2],v=n[6],m=n[10],g=n[14],_=n[3],x=n[7],M=n[11],w=n[15],T=i[0],U=i[4],B=i[8],L=i[12],P=i[1],F=i[5],I=i[9],H=i[13],z=i[2],q=i[6],V=i[10],ne=i[14],ee=i[3],re=i[7],se=i[11],J=i[15];return s[0]=a*T+o*P+l*z+c*ee,s[4]=a*U+o*F+l*q+c*re,s[8]=a*B+o*I+l*V+c*se,s[12]=a*L+o*H+l*ne+c*J,s[1]=h*T+u*P+d*z+p*ee,s[5]=h*U+u*F+d*q+p*re,s[9]=h*B+u*I+d*V+p*se,s[13]=h*L+u*H+d*ne+p*J,s[2]=f*T+v*P+m*z+g*ee,s[6]=f*U+v*F+m*q+g*re,s[10]=f*B+v*I+m*V+g*se,s[14]=f*L+v*H+m*ne+g*J,s[3]=_*T+x*P+M*z+w*ee,s[7]=_*U+x*F+M*q+w*re,s[11]=_*B+x*I+M*V+w*se,s[15]=_*L+x*H+M*ne+w*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*l*u-i*c*u-s*o*d+n*c*d+i*o*p-n*l*p)+e[7]*(+t*l*p-t*c*d+s*a*d-i*a*p+i*c*h-s*l*h)+e[11]*(+t*c*u-t*o*p-s*a*u+n*a*p+s*o*h-n*c*h)+e[15]*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],f=e[12],v=e[13],m=e[14],g=e[15],_=u*m*c-v*d*c+v*l*p-o*m*p-u*l*g+o*d*g,x=f*d*c-h*m*c-f*l*p+a*m*p+h*l*g-a*d*g,M=h*v*c-f*u*c+f*o*p-a*v*p-h*o*g+a*u*g,w=f*u*l-h*v*l-f*o*d+a*v*d+h*o*m-a*u*m,T=t*_+n*x+i*M+s*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/T;return e[0]=_*U,e[1]=(v*d*s-u*m*s-v*i*p+n*m*p+u*i*g-n*d*g)*U,e[2]=(o*m*s-v*l*s+v*i*c-n*m*c-o*i*g+n*l*g)*U,e[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*p-n*l*p)*U,e[4]=x*U,e[5]=(h*m*s-f*d*s+f*i*p-t*m*p-h*i*g+t*d*g)*U,e[6]=(f*l*s-a*m*s-f*i*c+t*m*c+a*i*g-t*l*g)*U,e[7]=(a*d*s-h*l*s+h*i*c-t*d*c-a*i*p+t*l*p)*U,e[8]=M*U,e[9]=(f*u*s-h*v*s-f*n*p+t*v*p+h*n*g-t*u*g)*U,e[10]=(a*v*s-f*o*s+f*n*c-t*v*c-a*n*g+t*o*g)*U,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*p-t*o*p)*U,e[12]=w*U,e[13]=(h*v*i-f*u*i+f*n*d-t*v*d-h*n*m+t*u*m)*U,e[14]=(f*o*i-a*v*i-f*n*l+t*v*l+a*n*m-t*o*m)*U,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*U,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,f=s*u,v=a*h,m=a*u,g=o*u,_=l*c,x=l*h,M=l*u,w=n.x,T=n.y,U=n.z;return i[0]=(1-(v+g))*w,i[1]=(p+M)*w,i[2]=(f-x)*w,i[3]=0,i[4]=(p-M)*T,i[5]=(1-(d+g))*T,i[6]=(m+_)*T,i[7]=0,i[8]=(f+x)*U,i[9]=(m-_)*U,i[10]=(1-(d+v))*U,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=or.set(i[0],i[1],i[2]).length(),a=or.set(i[4],i[5],i[6]).length(),o=or.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],pn.copy(this);let l=1/s,c=1/a,h=1/o;return pn.elements[0]*=l,pn.elements[1]*=l,pn.elements[2]*=l,pn.elements[4]*=c,pn.elements[5]*=c,pn.elements[6]*=c,pn.elements[8]*=h,pn.elements[9]*=h,pn.elements[10]*=h,t.setFromRotationMatrix(pn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=2e3){let l=this.elements,c=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),p,f;if(o===mi)p=-(a+s)/(a-s),f=-2*a*s/(a-s);else{if(o!==hs)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),f=-a*s/(a-s)}return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-s),d=(t+e)*c,p=(n+i)*h,f,v;if(o===mi)f=(a+s)*u,v=-2*u;else{if(o!==hs)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=s*u,v=-1*u}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},or=new A,pn=new nt,xd=new A(0,0,0),yd=new A(1,1,1),ci=new A,ia=new A,Qt=new A,eh=new nt,th=new fn,_n=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return eh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(eh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return th.setFromEuler(this),this.setFromQuaternion(th,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_n.DEFAULT_ORDER="XYZ";var ds=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Md=0,nh=new A,lr=new fn,jn=new nt,ra=new A,es=new A,Sd=new A,bd=new fn,ih=new A(1,0,0),rh=new A(0,1,0),sh=new A(0,0,1),ah={type:"added"},wd={type:"removed"},cr={type:"childadded",child:null},rl={type:"childremoved",child:null},wt=class r extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new A,t=new _n,n=new fn,i=new A(1,1,1);t._onChange(function(){n.setFromEuler(t,!1)}),n._onChange(function(){t.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new nt},normalMatrix:{value:new it}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ds,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.multiply(lr),this}rotateOnWorldAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.premultiply(lr),this}rotateX(e){return this.rotateOnAxis(ih,e)}rotateY(e){return this.rotateOnAxis(rh,e)}rotateZ(e){return this.rotateOnAxis(sh,e)}translateOnAxis(e,t){return nh.copy(e).applyQuaternion(this.quaternion),this.position.add(nh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ih,e)}translateY(e){return this.translateOnAxis(rh,e)}translateZ(e){return this.translateOnAxis(sh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ra.copy(e):ra.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(es,ra,this.up):jn.lookAt(ra,es,this.up),this.quaternion.setFromRotationMatrix(jn),i&&(jn.extractRotation(i.matrixWorld),lr.setFromRotationMatrix(jn),this.quaternion.premultiply(lr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ah),cr.child=e,this.dispatchEvent(cr),cr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wd),rl.child=e,this.dispatchEvent(rl),rl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ah),cr.child=e,this.dispatchEvent(cr),cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,e,Sd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(es,bd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};wt.DEFAULT_UP=new A(0,1,0),wt.DEFAULT_MATRIX_AUTO_UPDATE=!0,wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mn=new A,qn=new A,sl=new A,Yn=new A,hr=new A,ur=new A,oh=new A,al=new A,ol=new A,ll=new A,cl=new xt,hl=new xt,ul=new xt,Pn=class r{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),mn.subVectors(e,t),i.cross(mn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){mn.subVectors(i,t),qn.subVectors(n,t),sl.subVectors(e,t);let a=mn.dot(mn),o=mn.dot(qn),l=mn.dot(sl),c=qn.dot(qn),h=qn.dot(sl),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,f=(a*h-o*l)*d;return s.set(1-p-f,f,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Yn)!==null&&Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Yn.x),l.addScaledVector(a,Yn.y),l.addScaledVector(o,Yn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return cl.setScalar(0),hl.setScalar(0),ul.setScalar(0),cl.fromBufferAttribute(e,t),hl.fromBufferAttribute(e,n),ul.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(cl,s.x),a.addScaledVector(hl,s.y),a.addScaledVector(ul,s.z),a}static isFrontFacing(e,t,n,i){return mn.subVectors(n,t),qn.subVectors(e,t),mn.cross(qn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),.5*mn.cross(qn).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;hr.subVectors(i,n),ur.subVectors(s,n),al.subVectors(e,n);let l=hr.dot(al),c=ur.dot(al);if(l<=0&&c<=0)return t.copy(n);ol.subVectors(e,i);let h=hr.dot(ol),u=ur.dot(ol);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(hr,a);ll.subVectors(e,s);let p=hr.dot(ll),f=ur.dot(ll);if(f>=0&&p<=f)return t.copy(s);let v=p*c-l*f;if(v<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(ur,o);let m=h*f-p*u;if(m<=0&&u-h>=0&&p-f>=0)return oh.subVectors(s,i),o=(u-h)/(u-h+(p-f)),t.copy(i).addScaledVector(oh,o);let g=1/(m+v+d);return a=v*g,o=d*g,t.copy(n).addScaledVector(hr,a).addScaledVector(ur,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},yu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},sa={h:0,s:0,l:0};function dl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var Ne=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ht.workingColorSpace){if(e=md(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=dl(a,s,e+1/3),this.g=dl(a,s,e),this.b=dl(a,s,e-1/3)}return ht.colorSpaceToWorking(this,i),this}setStyle(e,t=Ut){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){let n=yu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jn(e.r),this.g=Jn(e.g),this.b=Jn(e.b),this}copyLinearToSRGB(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return ht.workingToColorSpace(zt.copy(this),e),65536*Math.round(ot(255*zt.r,0,255))+256*Math.round(ot(255*zt.g,0,255))+Math.round(ot(255*zt.b,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(zt.copy(this),t);let n=zt.r,i=zt.g,s=zt.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Ut){ht.workingToColorSpace(zt.copy(this),e);let t=zt.r,n=zt.g,i=zt.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(e,t,n){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+t,hi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL(sa);let n=qo(hi.h,sa.h,t),i=qo(hi.s,sa.s,t),s=qo(hi.l,sa.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zt=new Ne;Ne.NAMES=yu;var Td=0,Qn=class extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ei=class extends Qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},sf=Ed();function Ed(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[256|l]=32768,i[l]=24,i[256|l]=24):c<-14?(n[l]=1024>>-c-14,n[256|l]=1024>>-c-14|32768,i[l]=-c-1,i[256|l]=-c-1):c<=15?(n[l]=c+15<<10,n[256|l]=c+15<<10|32768,i[l]=13,i[256|l]=13):c<128?(n[l]=31744,n[256|l]=64512,i[l]=24,i[256|l]=24):(n[l]=31744,n[256|l]=64512,i[l]=13,i[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}var At=new A,aa=new _e,Ad=0,Tt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ad++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Pa,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)aa.fromBufferAttribute(this,t),aa.applyMatrix3(e),this.setXY(t,aa.x,aa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pa&&(e.usage=this.usage),e}};var ps=class extends Tt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ms=class extends Tt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ze=class extends Tt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Cd=0,ln=new nt,pl=new wt,dr=new A,en=new gn,ts=new gn,Lt=new A,yt=class r extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_c(e)?ms:ps)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new it().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,n){return ln.makeTranslation(e,t,n),this.applyMatrix4(ln),this}scale(e,t,n){return ln.makeScale(e,t,n),this.applyMatrix4(ln),this}lookAt(e){return pl.lookAt(e),pl.updateMatrix(),this.applyMatrix4(pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ze(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];en.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new A,1/0);if(e){let n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];ts.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(en.min,ts.min),en.expandByPoint(Lt),Lt.addVectors(en.max,ts.max),en.expandByPoint(Lt)):(en.expandByPoint(ts.min),en.expandByPoint(ts.max))}en.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Lt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Lt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Lt.fromBufferAttribute(o,c),l&&(dr.fromBufferAttribute(e,c),Lt.add(dr)),i=Math.max(i,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let B=0;B<n.count;B++)o[B]=new A,l[B]=new A;let c=new A,h=new A,u=new A,d=new _e,p=new _e,f=new _e,v=new A,m=new A;function g(B,L,P){c.fromBufferAttribute(n,B),h.fromBufferAttribute(n,L),u.fromBufferAttribute(n,P),d.fromBufferAttribute(s,B),p.fromBufferAttribute(s,L),f.fromBufferAttribute(s,P),h.sub(c),u.sub(c),p.sub(d),f.sub(d);let F=1/(p.x*f.y-f.x*p.y);isFinite(F)&&(v.copy(h).multiplyScalar(f.y).addScaledVector(u,-p.y).multiplyScalar(F),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(F),o[B].add(v),o[L].add(v),o[P].add(v),l[B].add(m),l[L].add(m),l[P].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let B=0,L=_.length;B<L;++B){let P=_[B],F=P.start;for(let I=F,H=F+P.count;I<H;I+=3)g(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let x=new A,M=new A,w=new A,T=new A;function U(B){w.fromBufferAttribute(i,B),T.copy(w);let L=o[B];x.copy(L),x.sub(w.multiplyScalar(w.dot(L))).normalize(),M.crossVectors(T,L);let P=M.dot(l[B])<0?-1:1;a.setXYZW(B,x.x,x.y,x.z,P)}for(let B=0,L=_.length;B<L;++B){let P=_[B],F=P.start;for(let I=F,H=F+P.count;I<H;I+=3)U(e.getX(I+0)),U(e.getX(I+1)),U(e.getX(I+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tt(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new A,s=new A,a=new A,o=new A,l=new A,c=new A,h=new A,u=new A;if(e)for(let d=0,p=e.count;d<p;d+=3){let f=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,f),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,f),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,f=0;for(let v=0,m=l.length;v<m;v++){p=o.isInterleavedBufferAttribute?l[v]*o.data.stride+o.offset:l[v]*h;for(let g=0;g<h;g++)d[f++]=c[p++]}return new Tt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=e(i[o],n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},lh=new nt,Ci=new Di,oa=new vn,ch=new A,la=new A,ca=new A,ha=new A,ml=new A,ua=new A,hh=new A,da=new A,Ye=class extends wt{constructor(e=new yt,t=new ei){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){ua.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(ml.fromBufferAttribute(u,e),a?ua.addScaledVector(ml,h):ua.addScaledVector(ml.sub(t),h))}t.add(ua)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(s),Ci.copy(e.ray).recast(e.near),oa.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(oa,ch)===null||Ci.origin.distanceToSquared(ch)>(e.far-e.near)**2))return;lh.copy(s).invert(),Ci.copy(e.ray).applyMatrix4(lh),n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,Ci)}}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,v=d.length;f<v;f++){let m=d[f],g=a[m.materialIndex];for(let _=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));_<x;_+=3)i=pa(this,g,e,n,c,h,u,o.getX(_),o.getX(_+1),o.getX(_+2)),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}else for(let f=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);f<v;f+=3)i=pa(this,a,e,n,c,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),i&&(i.faceIndex=Math.floor(f/3),t.push(i));else if(l!==void 0)if(Array.isArray(a))for(let f=0,v=d.length;f<v;f++){let m=d[f],g=a[m.materialIndex];for(let _=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));_<x;_+=3)i=pa(this,g,e,n,c,h,u,_,_+1,_+2),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}else for(let f=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);f<v;f+=3)i=pa(this,a,e,n,c,h,u,f,f+1,f+2),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}};function pa(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,la),r.getVertexPosition(l,ca),r.getVertexPosition(c,ha);let h=(function(u,d,p,f,v,m,g,_){let x;if(x=d.side===1?f.intersectTriangle(g,m,v,!0,_):f.intersectTriangle(v,m,g,d.side===0,_),x===null)return null;da.copy(_),da.applyMatrix4(u.matrixWorld);let M=p.ray.origin.distanceTo(da);return M<p.near||M>p.far?null:{distance:M,point:da.clone(),object:u}})(r,e,t,n,la,ca,ha,hh);if(h){let u=new A;Pn.getBarycoord(hh,la,ca,ha,u),i&&(h.uv=Pn.getInterpolatedAttribute(i,o,l,c,u,new _e)),s&&(h.uv1=Pn.getInterpolatedAttribute(s,o,l,c,u,new _e)),a&&(h.normal=Pn.getInterpolatedAttribute(a,o,l,c,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new A,materialIndex:0};Pn.getNormal(la,ca,ha,d.normal),h.face=d,h.barycoord=u}return h}var ti=class r extends yt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;function f(v,m,g,_,x,M,w,T,U,B,L){let P=M/U,F=w/B,I=M/2,H=w/2,z=T/2,q=U+1,V=B+1,ne=0,ee=0,re=new A;for(let se=0;se<V;se++){let J=se*F-H;for(let oe=0;oe<q;oe++){let Me=oe*P-I;re[v]=Me*_,re[m]=J*x,re[g]=z,c.push(re.x,re.y,re.z),re[v]=0,re[m]=0,re[g]=T>0?1:-1,h.push(re.x,re.y,re.z),u.push(oe/U),u.push(1-se/B),ne+=1}}for(let se=0;se<B;se++)for(let J=0;J<U;J++){let oe=d+J+q*se,Me=d+J+q*(se+1),Ie=d+(J+1)+q*(se+1),ye=d+(J+1)+q*se;l.push(oe,Me,ye),l.push(Me,Ie,ye),ee+=6}o.addGroup(p,ee,L),p+=ee,d+=ne}f("z","y","x",-1,-1,n,t,e,a,s,0),f("z","y","x",1,-1,n,t,-e,a,s,1),f("x","z","y",1,1,e,n,t,i,a,2),f("x","z","y",1,-1,e,n,-t,i,a,3),f("x","y","z",1,-1,e,t,n,i,s,4),f("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(h,3)),this.setAttribute("uv",new Ze(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Hi(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ht(r){let e={};for(let t=0;t<r.length;t++){let n=Hi(r[t]);for(let i in n)e[i]=n[i]}return e}function xc(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}var Mu={clone:Hi,merge:Ht},xn=class extends Qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hi(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let i=0;i<t.length;i++)n.push(t[i].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},wr=class extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ui=new A,uh=new _e,dh=new _e,kt=class extends wr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Ia*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Ea*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Ia*Math.atan(Math.tan(.5*Ea*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ui.x,ui.y).multiplyScalar(-e/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-e/ui.z)}getViewSize(e,t){return this.getViewBounds(e,uh,dh),t.subVectors(dh,uh)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Ea*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},pr=-90,Na=class extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new kt(pr,1,e,t);i.layers=this.layers,this.add(i);let s=new kt(pr,1,e,t);s.layers=this.layers,this.add(s);let a=new kt(pr,1,e,t);a.layers=this.layers,this.add(a);let o=new kt(pr,1,e,t);o.layers=this.layers,this.add(o);let l=new kt(pr,1,e,t);l.layers=this.layers,this.add(l);let c=new kt(pr,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===mi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==hs)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},fs=class extends qt{constructor(e=[],t=301,n,i,s,a,o,l,c,h){super(e,t,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Fa=class extends Un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new fs(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ti(5,5,5),s=new xn({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;let a=new Ye(i,s),o=t.minFilter;return t.minFilter===ki&&(t.minFilter=Dn),new Na(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},Gt=class extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rd={type:"move"},Tr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),g=this._getHandJoint(c,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;c.inputState.pinching&&d>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rd)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Gt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Er=class extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Oa=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Pa,this.updateRanges=[],this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},jt=new A,gs=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Rn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Rn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Rn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Rn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=vt(t,this.array),n=vt(n,this.array),i=vt(i,this.array),s=vt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Tt(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ar=class extends Qn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},mr,ns=new A,fr=new A,gr=new A,vr=new _e,is=new _e,Su=new nt,ma=new A,rs=new A,fa=new A,ph=new _e,fl=new _e,mh=new _e,vs=class extends wt{constructor(e=new Ar){if(super(),this.isSprite=!0,this.type="Sprite",mr===void 0){mr=new yt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Oa(t,5);mr.setIndex([0,1,2,0,2,3]),mr.setAttribute("position",new gs(n,3,0,!1)),mr.setAttribute("uv",new gs(n,2,3,!1))}this.geometry=mr,this.material=e,this.center=new _e(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fr.setFromMatrixScale(this.matrixWorld),Su.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),gr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fr.multiplyScalar(-gr.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let a=this.center;ga(ma.set(-.5,-.5,0),gr,a,fr,i,s),ga(rs.set(.5,-.5,0),gr,a,fr,i,s),ga(fa.set(.5,.5,0),gr,a,fr,i,s),ph.set(0,0),fl.set(1,0),mh.set(1,1);let o=e.ray.intersectTriangle(ma,rs,fa,!1,ns);if(o===null&&(ga(rs.set(-.5,.5,0),gr,a,fr,i,s),fl.set(0,1),o=e.ray.intersectTriangle(ma,fa,rs,!1,ns),o===null))return;let l=e.ray.origin.distanceTo(ns);l<e.near||l>e.far||t.push({distance:l,point:ns.clone(),uv:Pn.getInterpolation(ns,ma,rs,fa,ph,fl,mh,new _e),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ga(r,e,t,n,i,s){vr.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(is.x=s*vr.x-i*vr.y,is.y=i*vr.x+s*vr.y):is.copy(vr),r.copy(e),r.x+=is.x,r.y+=is.y,r.applyMatrix4(Su)}var af=new A,of=new A;var lf=new A,cf=new xt,hf=new xt,uf=new A,df=new nt,pf=new A,mf=new vn,ff=new nt,gf=new Di;var vf=new nt,_f=new nt;var xf=new nt,yf=new nt;var Mf=new gn,Sf=new nt,bf=new Ye,wf=new vn;var gl=new A,Pd=new A,Id=new it,tn=class{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=gl.subVectors(n,t).cross(Pd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(gl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Id.getNormalMatrix(e),i=this.coplanarPoint(gl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ri=new vn,Ld=new _e(.5,.5),va=new A,fi=class{constructor(e=new tn,t=new tn,n=new tn,i=new tn,s=new tn,a=new tn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],f=i[9],v=i[10],m=i[11],g=i[12],_=i[13],x=i[14],M=i[15];if(n[0].setComponents(l-s,d-c,m-p,M-g).normalize(),n[1].setComponents(l+s,d+c,m+p,M+g).normalize(),n[2].setComponents(l+a,d+h,m+f,M+_).normalize(),n[3].setComponents(l-a,d-h,m-f,M-_).normalize(),n[4].setComponents(l-o,d-u,m-v,M-x).normalize(),t===mi)n[5].setComponents(l+o,d+u,m+v,M+x).normalize();else{if(t!==hs)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,u,v,x).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){Ri.center.set(0,0,0);let t=Ld.distanceTo(e.center);return Ri.radius=.7071067811865476+t,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(va.x=i.normal.x>0?e.max.x:e.min.x,va.y=i.normal.y>0?e.max.y:e.min.y,va.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(va)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},An=new nt,Cn=new fi,Ba=class r{constructor(){this.coordinateSystem=mi}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(An.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Cn.setFromProjectionMatrix(An,this.coordinateSystem),Cn.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(An.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Cn.setFromProjectionMatrix(An,this.coordinateSystem),Cn.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(An.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Cn.setFromProjectionMatrix(An,this.coordinateSystem),Cn.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(An.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Cn.setFromProjectionMatrix(An,this.coordinateSystem),Cn.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(An.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Cn.setFromProjectionMatrix(An,this.coordinateSystem),Cn.containsPoint(e))return!0}return!1}clone(){return new r}};var El=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}},Tf=new nt,Ef=new Ne(1,1,1),Af=new fi,Cf=new Ba,Rf=new gn,Pf=new vn,If=new A,Lf=new A,Df=new A,Uf=new El,Nf=new Ye;var Ff=new A,Of=new A,Bf=new nt,zf=new Di,kf=new vn,Gf=new A,Vf=new A;var Hf=new A,Wf=new A;var Xf=new nt,$f=new Di,jf=new vn,qf=new A;var Ui=class extends qt{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},_s=class extends qt{constructor(e,t,n=1014,i,s,a,o=1003,l=1003,c,h=1026,u=1){if(h!==Fs&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:u},i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new br(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},za=class r extends yt{constructor(e=1,t=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,p=2*u+d,f=2*n+s,v=i+1,m=new A,g=new A;for(let _=0;_<=f;_++){let x=0,M=0,w=0,T=0;if(_<=n){let L=_/n,P=L*Math.PI/2;M=-h-e*Math.cos(P),w=e*Math.sin(P),T=-e*Math.cos(P),x=L*u}else if(_<=n+s){let L=(_-n)/s;M=L*t-h,w=e,T=0,x=u+L*d}else{let L=(_-n-s)/n,P=L*Math.PI/2;M=h+e*Math.sin(P),w=e*Math.cos(P),T=e*Math.sin(P),x=u+d+L*u}let U=Math.max(0,Math.min(1,x/p)),B=0;_===0?B=.5/i:_===f&&(B=-.5/i);for(let L=0;L<=i;L++){let P=L/i,F=P*Math.PI*2,I=Math.sin(F),H=Math.cos(F);g.x=-w*H,g.y=M,g.z=w*I,o.push(g.x,g.y,g.z),m.set(-w*H,T,w*I),m.normalize(),l.push(m.x,m.y,m.z),c.push(P+B,U)}if(_>0){let L=(_-1)*v;for(let P=0;P<i;P++){let F=L+P,I=L+P+1,H=_*v+P,z=_*v+P+1;a.push(F,I,H),a.push(I,z,H)}}}this.setIndex(a),this.setAttribute("position",new Ze(o,3)),this.setAttribute("normal",new Ze(l,3)),this.setAttribute("uv",new Ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},gi=class r extends yt{constructor(e=1,t=32,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new A,h=new _e;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Ze(a,3)),this.setAttribute("normal",new Ze(o,3)),this.setAttribute("uv",new Ze(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},vi=class r extends yt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],p=[],f=0,v=[],m=n/2,g=0;function _(x){let M=f,w=new _e,T=new A,U=0,B=x===!0?e:t,L=x===!0?1:-1;for(let F=1;F<=i;F++)u.push(0,m*L,0),d.push(0,L,0),p.push(.5,.5),f++;let P=f;for(let F=0;F<=i;F++){let I=F/i*l+o,H=Math.cos(I),z=Math.sin(I);T.x=B*z,T.y=m*L,T.z=B*H,u.push(T.x,T.y,T.z),d.push(0,L,0),w.x=.5*H+.5,w.y=.5*z*L+.5,p.push(w.x,w.y),f++}for(let F=0;F<i;F++){let I=M+F,H=P+F;x===!0?h.push(H,H+1,I):h.push(H+1,H,I),U+=3}c.addGroup(g,U,x===!0?1:2),g+=U}(function(){let x=new A,M=new A,w=0,T=(t-e)/n;for(let U=0;U<=s;U++){let B=[],L=U/s,P=L*(t-e)+e;for(let F=0;F<=i;F++){let I=F/i,H=I*l+o,z=Math.sin(H),q=Math.cos(H);M.x=P*z,M.y=-L*n+m,M.z=P*q,u.push(M.x,M.y,M.z),x.set(z,T,q).normalize(),d.push(x.x,x.y,x.z),p.push(I,1-L),B.push(f++)}v.push(B)}for(let U=0;U<i;U++)for(let B=0;B<s;B++){let L=v[B][U],P=v[B+1][U],F=v[B+1][U+1],I=v[B][U+1];(e>0||B!==0)&&(h.push(L,P,I),w+=3),(t>0||B!==s-1)&&(h.push(P,F,I),w+=3)}c.addGroup(g,w,0),g+=w})(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Ze(u,3)),this.setAttribute("normal",new Ze(d,3)),this.setAttribute("uv",new Ze(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ka=class r extends vi{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},_i=class r extends yt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];function o(p,f,v,m){let g=m+1,_=[];for(let x=0;x<=g;x++){_[x]=[];let M=p.clone().lerp(v,x/g),w=f.clone().lerp(v,x/g),T=g-x;for(let U=0;U<=T;U++)_[x][U]=U===0&&x===g?M:M.clone().lerp(w,U/T)}for(let x=0;x<g;x++)for(let M=0;M<2*(g-x)-1;M++){let w=Math.floor(M/2);M%2==0?(l(_[x][w+1]),l(_[x+1][w]),l(_[x][w])):(l(_[x][w+1]),l(_[x+1][w+1]),l(_[x+1][w]))}}function l(p){s.push(p.x,p.y,p.z)}function c(p,f){let v=3*p;f.x=e[v+0],f.y=e[v+1],f.z=e[v+2]}function h(p,f,v,m){m<0&&p.x===1&&(a[f]=p.x-1),v.x===0&&v.z===0&&(a[f]=m/2/Math.PI+.5)}function u(p){return Math.atan2(p.z,-p.x)}function d(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}(function(p){let f=new A,v=new A,m=new A;for(let g=0;g<t.length;g+=3)c(t[g+0],f),c(t[g+1],v),c(t[g+2],m),o(f,v,m,p)})(i),(function(p){let f=new A;for(let v=0;v<s.length;v+=3)f.x=s[v+0],f.y=s[v+1],f.z=s[v+2],f.normalize().multiplyScalar(p),s[v+0]=f.x,s[v+1]=f.y,s[v+2]=f.z})(n),(function(){let p=new A;for(let f=0;f<s.length;f+=3){p.x=s[f+0],p.y=s[f+1],p.z=s[f+2];let v=u(p)/2/Math.PI+.5,m=d(p)/Math.PI+.5;a.push(v,1-m)}(function(){let f=new A,v=new A,m=new A,g=new A,_=new _e,x=new _e,M=new _e;for(let w=0,T=0;w<s.length;w+=9,T+=6){f.set(s[w+0],s[w+1],s[w+2]),v.set(s[w+3],s[w+4],s[w+5]),m.set(s[w+6],s[w+7],s[w+8]),_.set(a[T+0],a[T+1]),x.set(a[T+2],a[T+3]),M.set(a[T+4],a[T+5]),g.copy(f).add(v).add(m).divideScalar(3);let U=u(g);h(_,T+0,f,U),h(x,T+2,v,U),h(M,T+4,m,U)}})(),(function(){for(let f=0;f<a.length;f+=6){let v=a[f+0],m=a[f+2],g=a[f+4],_=Math.max(v,m,g),x=Math.min(v,m,g);_>.9&&x<.1&&(v<.2&&(a[f+0]+=1),m<.2&&(a[f+2]+=1),g<.2&&(a[f+4]+=1))}})()})(),this.setAttribute("position",new Ze(s,3)),this.setAttribute("normal",new Ze(s.slice(),3)),this.setAttribute("uv",new Ze(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},Ga=class r extends _i{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},_a=new A,xa=new A,vl=new A,ya=new Pn,Va=class extends yt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(Ea*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let f=0;f<l;f+=3){a?(c[0]=a.getX(f),c[1]=a.getX(f+1),c[2]=a.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:v,b:m,c:g}=ya;if(v.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),ya.getNormal(vl),u[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let _=0;_<3;_++){let x=(_+1)%3,M=u[_],w=u[x],T=ya[h[_]],U=ya[h[x]],B=`${M}_${w}`,L=`${w}_${M}`;L in d&&d[L]?(vl.dot(d[L].normal)<=s&&(p.push(T.x,T.y,T.z),p.push(U.x,U.y,U.z)),d[L]=null):B in d||(d[B]={index0:c[_],index1:c[x],normal:vl.clone()})}}for(let f in d)if(d[f]){let{index0:v,index1:m}=d[f];_a.fromBufferAttribute(o,v),xa.fromBufferAttribute(o,m),p.push(_a.x,_a.y,_a.z),p.push(xa.x,xa.y,xa.z)}this.setAttribute("position",new Ze(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},rn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,s=n.length,a;a=t||e*n[s-1];let o,l=0,c=s-1;for(;l<=c;)if(i=Math.floor(l+(c-l)/2),o=n[i]-a,o<0)l=i+1;else{if(!(o>0)){c=i;break}c=i-1}if(i=c,n[i]===a)return i/(s-1);let h=n[i];return(i+(a-h)/(n[i+1]-h))/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new _e:new A);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new A,i=[],s=[],a=[],o=new A,l=new nt;for(let p=0;p<=e;p++){let f=p/e;i[p]=this.getTangentAt(f,new A)}s[0]=new A,a[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(ot(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(ot(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(l.makeRotationAxis(i[f],p*f)),a[f].crossVectors(i[f],s[f])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Cr=class extends rn{constructor(e=0,t=0,n=1,i=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new _e){let n=t,i=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(s=a?0:i),this.aClockwise!==!0||a||(s===i?s=-i:s-=i);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ha=class extends Cr{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function yc(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,i(a,o,d,p)},calc:function(s){let a=s*s;return r+e*s+t*a+n*(a*s)}}}var Ma=new A,_l=new yc,xl=new yc,yl=new yc,Wa=class extends rn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new A){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=i[(c-1)%s]:(Ma.subVectors(i[0],i[1]).add(i[0]),o=Ma);let u=i[c%s],d=i[(c+1)%s];if(this.closed||c+2<s?l=i[(c+2)%s]:(Ma.subVectors(i[s-1],i[s-2]).add(i[s-1]),l=Ma),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(l),p);v<1e-4&&(v=1),f<1e-4&&(f=v),m<1e-4&&(m=v),_l.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,f,v,m),xl.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,f,v,m),yl.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,f,v,m)}else this.curveType==="catmullrom"&&(_l.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),xl.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),yl.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return n.set(_l.calc(h),xl.calc(h),yl.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new A().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function fh(r,e,t,n,i){let s=.5*(n-e),a=.5*(i-t),o=r*r;return(2*t-2*n+s+a)*(r*o)+(-3*t+3*n-2*s-a)*o+s*r+t}function as(r,e,t,n){return(function(i,s){let a=1-i;return a*a*s})(r,e)+(function(i,s){return 2*(1-i)*i*s})(r,t)+(function(i,s){return i*i*s})(r,n)}function os(r,e,t,n,i){return(function(s,a){let o=1-s;return o*o*o*a})(r,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(r,t)+(function(s,a){return 3*(1-s)*s*s*a})(r,n)+(function(s,a){return s*s*s*a})(r,i)}var xs=class extends rn{constructor(e=new _e,t=new _e,n=new _e,i=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new _e){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(os(e,i.x,s.x,a.x,o.x),os(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Xa=class extends rn{constructor(e=new A,t=new A,n=new A,i=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new A){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(os(e,i.x,s.x,a.x,o.x),os(e,i.y,s.y,a.y,o.y),os(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ys=class extends rn{constructor(e=new _e,t=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new _e){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$a=class extends rn{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ms=class extends rn{constructor(e=new _e,t=new _e,n=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new _e){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(as(e,i.x,s.x,a.x),as(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ss=class extends rn{constructor(e=new A,t=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(as(e,i.x,s.x,a.x),as(e,i.y,s.y,a.y),as(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bs=class extends rn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new _e){let n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(fh(o,l.x,c.x,h.x,u.x),fh(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new _e().fromArray(i))}return this}},ja=Object.freeze({__proto__:null,ArcCurve:Ha,CatmullRomCurve3:Wa,CubicBezierCurve:xs,CubicBezierCurve3:Xa,EllipseCurve:Cr,LineCurve:ys,LineCurve3:$a,QuadraticBezierCurve:Ms,QuadraticBezierCurve3:Ss,SplineCurve:bs}),qa=class extends rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ja[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new ja[i.type]().fromJSON(i))}return this}},ws=class extends qa{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ys(this.currentPoint.clone(),new _e(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new Ms(this.currentPoint.clone(),new _e(e,t),new _e(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){let o=new xs(this.currentPoint.clone(),new _e(e,t),new _e(n,i),new _e(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new bs(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){let c=new Cr(e,t,n,i,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ni=class extends ws{constructor(e){super(e),this.uuid=Zn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new ws().fromJSON(i))}return this}};function Dd(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=gh(r,0,i,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=(function(h,u,d,p){let f=[];for(let v=0,m=u.length;v<m;v++){let g=gh(h,u[v]*p,v<m-1?u[v+1]*p:h.length,p,!1);g===g.next&&(g.steiner=!0),f.push(Gd(g))}f.sort(Bd);for(let v=0;v<f.length;v++)d=zd(f[v],d);return d})(r,e,s,t)),r.length>80*t){o=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=t;d<i;d+=t){let p=r[d],f=r[d+1];p<o&&(o=p),f<l&&(l=f),p>h&&(h=p),f>u&&(u=f)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Ts(s,a,t,o,l,c,0),a}function gh(r,e,t,n,i){let s;if(i===(function(a,o,l,c){let h=0;for(let u=o,d=l-c;u<l;u+=c)h+=(a[d]-a[u])*(a[u+1]+a[d+1]),d=u;return h})(r,e,t,n)>0)for(let a=e;a<t;a+=n)s=vh(a/n|0,r[a],r[a+1],s);else for(let a=t-n;a>=e;a-=n)s=vh(a/n|0,r[a],r[a+1],s);return s&&Rr(s,s.next)&&(As(s),s=s.next),s}function Fi(r,e){if(!r)return r;e||(e=r);let t,n=r;do if(t=!1,n.steiner||!Rr(n,n.next)&&St(n.prev,n,n.next)!==0)n=n.next;else{if(As(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function Ts(r,e,t,n,i,s,a){if(!r)return;!a&&s&&(function(l,c,h,u){let d=l;do d.z===0&&(d.z=Al(d.x,d.y,c,h,u)),d.prevZ=d.prev,d.nextZ=d.next,d=d.next;while(d!==l);d.prevZ.nextZ=null,d.prevZ=null,(function(p){let f,v=1;do{let m,g=p;p=null;let _=null;for(f=0;g;){f++;let x=g,M=0;for(let T=0;T<v&&(M++,x=x.nextZ,x);T++);let w=v;for(;M>0||w>0&&x;)M!==0&&(w===0||!x||g.z<=x.z)?(m=g,g=g.nextZ,M--):(m=x,x=x.nextZ,w--),_?_.nextZ=m:p=m,m.prevZ=_,_=m;g=x}_.nextZ=null,v*=2}while(f>1)})(d)})(r,n,i,s);let o=r;for(;r.prev!==r.next;){let l=r.prev,c=r.next;if(s?Nd(r,n,i,s):Ud(r))e.push(l.i,r.i,c.i),As(r),r=c.next,o=c.next;else if((r=c)===o){a?a===1?Ts(r=Fd(Fi(r),e),e,t,n,i,s,2):a===2&&Od(r,e,t,n,i,s):Ts(Fi(r),e,t,n,i,s,1);break}}}function Ud(r){let e=r.prev,t=r,n=r.next;if(St(e,t,n)>=0)return!1;let i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(i,s,a),u=Math.min(o,l,c),d=Math.max(i,s,a),p=Math.max(o,l,c),f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&ss(i,o,s,l,a,c,f.x,f.y)&&St(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Nd(r,e,t,n){let i=r.prev,s=r,a=r.next;if(St(i,s,a)>=0)return!1;let o=i.x,l=s.x,c=a.x,h=i.y,u=s.y,d=a.y,p=Math.min(o,l,c),f=Math.min(h,u,d),v=Math.max(o,l,c),m=Math.max(h,u,d),g=Al(p,f,e,t,n),_=Al(v,m,e,t,n),x=r.prevZ,M=r.nextZ;for(;x&&x.z>=g&&M&&M.z<=_;){if(x.x>=p&&x.x<=v&&x.y>=f&&x.y<=m&&x!==i&&x!==a&&ss(o,h,l,u,c,d,x.x,x.y)&&St(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=p&&M.x<=v&&M.y>=f&&M.y<=m&&M!==i&&M!==a&&ss(o,h,l,u,c,d,M.x,M.y)&&St(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=g;){if(x.x>=p&&x.x<=v&&x.y>=f&&x.y<=m&&x!==i&&x!==a&&ss(o,h,l,u,c,d,x.x,x.y)&&St(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=_;){if(M.x>=p&&M.x<=v&&M.y>=f&&M.y<=m&&M!==i&&M!==a&&ss(o,h,l,u,c,d,M.x,M.y)&&St(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Fd(r,e){let t=r;do{let n=t.prev,i=t.next.next;!Rr(n,i)&&wu(n,t,t.next,i)&&Es(n,i)&&Es(i,n)&&(e.push(n.i,t.i,i.i),As(t),As(t.next),t=r=i),t=t.next}while(t!==r);return Fi(t)}function Od(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Vd(a,o)){let l=Tu(a,o);return a=Fi(a,a.next),l=Fi(l,l.next),Ts(a,e,t,n,i,s,0),void Ts(l,e,t,n,i,s,0)}o=o.next}a=a.next}while(a!==r)}function Bd(r,e){let t=r.x-e.x;return t===0&&(t=r.y-e.y,t===0)&&(t=(r.next.y-r.y)/(r.next.x-r.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function zd(r,e){let t=(function(i,s){let a=s,o=i.x,l=i.y,c,h=-1/0;if(Rr(i,a))return a;do{if(Rr(i,a.next))return a.next;if(l<=a.y&&l>=a.next.y&&a.next.y!==a.y){let v=a.x+(l-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(v<=o&&v>h&&(h=v,c=a.x<a.next.x?a:a.next,v===o))return c}a=a.next}while(a!==s);if(!c)return null;let u=c,d=c.x,p=c.y,f=1/0;a=c;do{if(o>=a.x&&a.x>=d&&o!==a.x&&bu(l<p?o:h,l,d,p,l<p?h:o,l,a.x,a.y)){let v=Math.abs(l-a.y)/(o-a.x);Es(a,i)&&(v<f||v===f&&(a.x>c.x||a.x===c.x&&kd(c,a)))&&(c=a,f=v)}a=a.next}while(a!==u);return c})(r,e);if(!t)return e;let n=Tu(t,r);return Fi(n,n.next),Fi(t,t.next)}function kd(r,e){return St(r.prev,r,e.prev)<0&&St(e.next,r,r.next)<0}function Al(r,e,t,n,i){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*i|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*i|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Gd(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function bu(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function ss(r,e,t,n,i,s,a,o){return!(r===a&&e===o)&&bu(r,e,t,n,i,s,a,o)}function Vd(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!(function(t,n){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==n.i&&i.next.i!==n.i&&wu(i,i.next,t,n))return!0;i=i.next}while(i!==t);return!1})(r,e)&&(Es(r,e)&&Es(e,r)&&(function(t,n){let i=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do i.y>o!=i.next.y>o&&i.next.y!==i.y&&a<(i.next.x-i.x)*(o-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==t);return s})(r,e)&&(St(r.prev,r,e.prev)||St(r,e.prev,e))||Rr(r,e)&&St(r.prev,r,r.next)>0&&St(e.prev,e,e.next)>0)}function St(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Rr(r,e){return r.x===e.x&&r.y===e.y}function wu(r,e,t,n){let i=ba(St(r,e,t)),s=ba(St(r,e,n)),a=ba(St(t,n,r)),o=ba(St(t,n,e));return i!==s&&a!==o||!(i!==0||!Sa(r,t,e))||!(s!==0||!Sa(r,n,e))||!(a!==0||!Sa(t,r,n))||!(o!==0||!Sa(t,e,n))}function Sa(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function ba(r){return r>0?1:r<0?-1:0}function Es(r,e){return St(r.prev,r,r.next)<0?St(r,e,r.next)>=0&&St(r,r.prev,e)>=0:St(r,e,r.prev)<0||St(r,r.next,e)<0}function Tu(r,e){let t=Cl(r.i,r.x,r.y),n=Cl(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function vh(r,e,t,n){let i=Cl(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function As(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Cl(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}var Rl=class{static triangulate(e,t,n=2){return Dd(e,t,n)}},In=class r{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return .5*n}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];_h(e),xh(n,e);let a=e.length;t.forEach(_h);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,xh(n,t[l]);let o=Rl.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function _h(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function xh(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var Pr=class r extends yt{constructor(e=new Ni([new _e(.5,.5),new _e(-.5,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Hd,x,M,w,T,U,B=!1;g&&(x=g.getSpacedPoints(h),B=!0,d=!1,M=g.computeFrenetFrames(h,!1),w=new A,T=new A,U=new A),d||(m=0,p=0,f=0,v=0);let L=o.extractPoints(c),P=L.shape,F=L.holes;if(!In.isClockWise(P)){P=P.reverse();for(let G=0,y=F.length;G<y;G++){let E=F[G];In.isClockWise(E)&&(F[G]=E.reverse())}}function I(G){let y=10000000000000001e-36,E=G[0];for(let N=1;N<=G.length;N++){let O=N%G.length,X=G[O],K=X.x-E.x,W=X.y-E.y,le=K*K+W*W,ie=Math.max(Math.abs(X.x),Math.abs(X.y),Math.abs(E.x),Math.abs(E.y));le<=y*ie*ie?(G.splice(O,1),N--):E=X}}I(P),F.forEach(I);let H=F.length,z=P;for(let G=0;G<H;G++){let y=F[G];P=P.concat(y)}function q(G,y,E){return y||console.error("THREE.ExtrudeGeometry: vec does not exist"),G.clone().addScaledVector(y,E)}let V=P.length;function ne(G,y,E){let N,O,X,K=G.x-y.x,W=G.y-y.y,le=E.x-G.x,ie=E.y-G.y,j=K*K+W*W,ae=K*ie-W*le;if(Math.abs(ae)>Number.EPSILON){let de=Math.sqrt(j),be=Math.sqrt(le*le+ie*ie),ve=y.x-W/de,we=y.y+K/de,Re=((E.x-ie/be-ve)*ie-(E.y+le/be-we)*le)/(K*ie-W*le);N=ve+K*Re-G.x,O=we+W*Re-G.y;let pe=N*N+O*O;if(pe<=2)return new _e(N,O);X=Math.sqrt(pe/2)}else{let de=!1;K>Number.EPSILON?le>Number.EPSILON&&(de=!0):K<-Number.EPSILON?le<-Number.EPSILON&&(de=!0):Math.sign(W)===Math.sign(ie)&&(de=!0),de?(N=-W,O=K,X=Math.sqrt(j)):(N=K,O=W,X=Math.sqrt(j/2))}return new _e(N/X,O/X)}let ee=[];for(let G=0,y=z.length,E=y-1,N=G+1;G<y;G++,E++,N++)E===y&&(E=0),N===y&&(N=0),ee[G]=ne(z[G],z[E],z[N]);let re=[],se,J,oe=ee.concat();for(let G=0,y=H;G<y;G++){let E=F[G];se=[];for(let N=0,O=E.length,X=O-1,K=N+1;N<O;N++,X++,K++)X===O&&(X=0),K===O&&(K=0),se[N]=ne(E[N],E[X],E[K]);re.push(se),oe=oe.concat(se)}if(m===0)J=In.triangulateShape(z,F);else{let G=[],y=[];for(let E=0;E<m;E++){let N=E/m,O=p*Math.cos(N*Math.PI/2),X=f*Math.sin(N*Math.PI/2)+v;for(let K=0,W=z.length;K<W;K++){let le=q(z[K],ee[K],X);ue(le.x,le.y,-O),N===0&&G.push(le)}for(let K=0,W=H;K<W;K++){let le=F[K];se=re[K];let ie=[];for(let j=0,ae=le.length;j<ae;j++){let de=q(le[j],se[j],X);ue(de.x,de.y,-O),N===0&&ie.push(de)}N===0&&y.push(ie)}}J=In.triangulateShape(G,y)}let Me=J.length,Ie=f+v;for(let G=0;G<V;G++){let y=d?q(P[G],oe[G],Ie):P[G];B?(T.copy(M.normals[0]).multiplyScalar(y.x),w.copy(M.binormals[0]).multiplyScalar(y.y),U.copy(x[0]).add(T).add(w),ue(U.x,U.y,U.z)):ue(y.x,y.y,0)}for(let G=1;G<=h;G++)for(let y=0;y<V;y++){let E=d?q(P[y],oe[y],Ie):P[y];B?(T.copy(M.normals[G]).multiplyScalar(E.x),w.copy(M.binormals[G]).multiplyScalar(E.y),U.copy(x[G]).add(T).add(w),ue(U.x,U.y,U.z)):ue(E.x,E.y,u/h*G)}for(let G=m-1;G>=0;G--){let y=G/m,E=p*Math.cos(y*Math.PI/2),N=f*Math.sin(y*Math.PI/2)+v;for(let O=0,X=z.length;O<X;O++){let K=q(z[O],ee[O],N);ue(K.x,K.y,u+E)}for(let O=0,X=F.length;O<X;O++){let K=F[O];se=re[O];for(let W=0,le=K.length;W<le;W++){let ie=q(K[W],se[W],N);B?ue(ie.x,ie.y+x[h-1].y,x[h-1].x+E):ue(ie.x,ie.y,u+E)}}}function ye(G,y){let E=G.length;for(;--E>=0;){let N=E,O=E-1;O<0&&(O=G.length-1);for(let X=0,K=h+2*m;X<K;X++){let W=V*X,le=V*(X+1);R(y+N+W,y+O+W,y+O+le,y+N+le)}}}function ue(G,y,E){l.push(G),l.push(y),l.push(E)}function Ge(G,y,E){S(G),S(y),S(E);let N=i.length/3,O=_.generateTopUV(n,i,N-3,N-2,N-1);k(O[0]),k(O[1]),k(O[2])}function R(G,y,E,N){S(G),S(y),S(N),S(y),S(E),S(N);let O=i.length/3,X=_.generateSideWallUV(n,i,O-6,O-3,O-2,O-1);k(X[0]),k(X[1]),k(X[3]),k(X[1]),k(X[2]),k(X[3])}function S(G){i.push(l[3*G+0]),i.push(l[3*G+1]),i.push(l[3*G+2])}function k(G){s.push(G.x),s.push(G.y)}(function(){let G=i.length/3;if(d){let y=0,E=V*y;for(let N=0;N<Me;N++){let O=J[N];Ge(O[2]+E,O[1]+E,O[0]+E)}y=h+2*m,E=V*y;for(let N=0;N<Me;N++){let O=J[N];Ge(O[0]+E,O[1]+E,O[2]+E)}}else{for(let y=0;y<Me;y++){let E=J[y];Ge(E[2],E[1],E[0])}for(let y=0;y<Me;y++){let E=J[y];Ge(E[0]+V*h,E[1]+V*h,E[2]+V*h)}}n.addGroup(G,i.length/3-G,0)})(),(function(){let G=i.length/3,y=0;ye(z,y),y+=z.length;for(let E=0,N=F.length;E<N;E++){let O=F[E];ye(O,y),y+=O.length}n.addGroup(G,i.length/3-G,1)})()}this.setAttribute("position",new Ze(i,3)),this.setAttribute("uv",new Ze(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,i){if(i.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];i.shapes.push(o.uuid)}else i.shapes.push(t.uuid);return i.options=Object.assign({},n),n.extrudePath!==void 0&&(i.options.extrudePath=n.extrudePath.toJSON()),i})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new ja[i.type]().fromJSON(i)),new r(n,e.options)}},Hd={generateTopUV:function(r,e,t,n,i){let s=e[3*t],a=e[3*t+1],o=e[3*n],l=e[3*n+1],c=e[3*i],h=e[3*i+1];return[new _e(s,a),new _e(o,l),new _e(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*i],p=e[3*i+1],f=e[3*i+2],v=e[3*s],m=e[3*s+1],g=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new _e(a,1-l),new _e(c,1-u),new _e(d,1-f),new _e(v,1-g)]:[new _e(o,1-l),new _e(h,1-u),new _e(p,1-f),new _e(m,1-g)]}},Ya=class r extends _i{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Ir=class r extends yt{constructor(e=[new _e(0,-.5),new _e(.5,0),new _e(0,.5)],t=12,n=0,i=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=ot(i,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new A,d=new _e,p=new A,f=new A,v=new A,m=0,g=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,p.x=1*g,p.y=-m,p.z=0*g,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,p.x=1*g,p.y=-m,p.z=0*g,f.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(f)}for(let _=0;_<=t;_++){let x=n+_*h*i,M=Math.sin(x),w=Math.cos(x);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*M,u.y=e[T].y,u.z=e[T].x*w,a.push(u.x,u.y,u.z),d.x=_/t,d.y=T/(e.length-1),o.push(d.x,d.y);let U=l[3*T+0]*M,B=l[3*T+1],L=l[3*T+0]*w;c.push(U,B,L)}}for(let _=0;_<t;_++)for(let x=0;x<e.length-1;x++){let M=x+_*e.length,w=M,T=M+e.length,U=M+e.length+1,B=M+1;s.push(w,T,B),s.push(U,B,T)}this.setIndex(s),this.setAttribute("position",new Ze(a,3)),this.setAttribute("uv",new Ze(o,2)),this.setAttribute("normal",new Ze(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},Za=class r extends _i{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Nn=class r extends yt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,p=[],f=[],v=[],m=[];for(let g=0;g<h;g++){let _=g*d-a;for(let x=0;x<c;x++){let M=x*u-s;f.push(M,-_,0),v.push(0,0,1),m.push(x/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<o;_++){let x=_+c*g,M=_+c*(g+1),w=_+1+c*(g+1),T=_+1+c*g;p.push(x,M,T),p.push(M,w,T)}this.setIndex(p),this.setAttribute("position",new Ze(f,3)),this.setAttribute("normal",new Ze(v,3)),this.setAttribute("uv",new Ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Ja=class r extends yt{constructor(e=.5,t=1,n=32,i=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(i=Math.max(1,i)),p=new A,f=new _e;for(let v=0;v<=i;v++){for(let m=0;m<=n;m++){let g=s+m/n*a;p.x=u*Math.cos(g),p.y=u*Math.sin(g),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}u+=d}for(let v=0;v<i;v++){let m=v*(n+1);for(let g=0;g<n;g++){let _=g+m,x=_,M=_+n+1,w=_+n+2,T=_+1;o.push(x,M,T),o.push(M,w,T)}}this.setIndex(o),this.setAttribute("position",new Ze(l,3)),this.setAttribute("normal",new Ze(c,3)),this.setAttribute("uv",new Ze(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ka=class r extends yt{constructor(e=new Ni([new _e(0,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=i.length/3,d=h.extractPoints(t),p=d.shape,f=d.holes;In.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,g=f.length;m<g;m++){let _=f[m];In.isClockWise(_)===!0&&(f[m]=_.reverse())}let v=In.triangulateShape(p,f);for(let m=0,g=f.length;m<g;m++){let _=f[m];p=p.concat(_)}for(let m=0,g=p.length;m<g;m++){let _=p[m];i.push(_.x,_.y,0),s.push(0,0,1),a.push(_.x,_.y)}for(let m=0,g=v.length;m<g;m++){let _=v[m],x=_[0]+u,M=_[1]+u,w=_[2]+u;n.push(x,M,w),l+=3}}this.setIndex(n),this.setAttribute("position",new Ze(i,3)),this.setAttribute("normal",new Ze(s,3)),this.setAttribute("uv",new Ze(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let a=t[i];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let i=0,s=e.shapes.length;i<s;i++){let a=t[e.shapes[i]];n.push(a)}return new r(n,e.curveSegments)}},sn=class r extends yt{constructor(e=1,t=32,n=16,i=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new A,d=new A,p=[],f=[],v=[],m=[];for(let g=0;g<=n;g++){let _=[],x=g/n,M=0;g===0&&a===0?M=.5/t:g===n&&l===Math.PI&&(M=-.5/t);for(let w=0;w<=t;w++){let T=w/t;u.x=-e*Math.cos(i+T*s)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(i+T*s)*Math.sin(a+x*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(T+M,1-x),_.push(c++)}h.push(_)}for(let g=0;g<n;g++)for(let _=0;_<t;_++){let x=h[g][_+1],M=h[g][_],w=h[g+1][_],T=h[g+1][_+1];(g!==0||a>0)&&p.push(x,M,T),(g!==n-1||l<Math.PI)&&p.push(M,w,T)}this.setIndex(p),this.setAttribute("position",new Ze(f,3)),this.setAttribute("normal",new Ze(v,3)),this.setAttribute("uv",new Ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Qa=class r extends _i{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},yn=class r extends yt{constructor(e=1,t=.4,n=12,i=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new A,u=new A,d=new A;for(let p=0;p<=n;p++)for(let f=0;f<=i;f++){let v=f/i*s,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(f/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let f=1;f<=i;f++){let v=(i+1)*p+f-1,m=(i+1)*(p-1)+f-1,g=(i+1)*(p-1)+f,_=(i+1)*p+f;a.push(v,m,_),a.push(m,g,_)}this.setIndex(a),this.setAttribute("position",new Ze(o,3)),this.setAttribute("normal",new Ze(l,3)),this.setAttribute("uv",new Ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},eo=class r extends yt{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],l=[],c=[],h=[],u=new A,d=new A,p=new A,f=new A,v=new A,m=new A,g=new A;for(let x=0;x<=n;++x){let M=x/n*s*Math.PI*2;_(M,s,a,e,p),_(M+.01,s,a,e,f),m.subVectors(f,p),g.addVectors(f,p),v.crossVectors(m,g),g.crossVectors(v,m),v.normalize(),g.normalize();for(let w=0;w<=i;++w){let T=w/i*Math.PI*2,U=-t*Math.cos(T),B=t*Math.sin(T);u.x=p.x+(U*g.x+B*v.x),u.y=p.y+(U*g.y+B*v.y),u.z=p.z+(U*g.z+B*v.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(x/n),h.push(w/i)}}for(let x=1;x<=n;x++)for(let M=1;M<=i;M++){let w=(i+1)*(x-1)+(M-1),T=(i+1)*x+(M-1),U=(i+1)*x+M,B=(i+1)*(x-1)+M;o.push(w,T,B),o.push(T,U,B)}function _(x,M,w,T,U){let B=Math.cos(x),L=Math.sin(x),P=w/M*x,F=Math.cos(P);U.x=T*(2+F)*.5*B,U.y=T*(2+F)*L*.5,U.z=T*Math.sin(P)*.5}this.setIndex(o),this.setAttribute("position",new Ze(l,3)),this.setAttribute("normal",new Ze(c,3)),this.setAttribute("uv",new Ze(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},to=class r extends yt{constructor(e=new Ss(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new A,l=new A,c=new _e,h=new A,u=[],d=[],p=[],f=[];function v(m){h=e.getPointAt(m/t,h);let g=a.normals[m],_=a.binormals[m];for(let x=0;x<=i;x++){let M=x/i*Math.PI*2,w=Math.sin(M),T=-Math.cos(M);l.x=T*g.x+w*_.x,l.y=T*g.y+w*_.y,l.z=T*g.z+w*_.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let m=0;m<t;m++)v(m);v(s===!1?t:0),(function(){for(let m=0;m<=t;m++)for(let g=0;g<=i;g++)c.x=m/t,c.y=g/i,p.push(c.x,c.y)})(),(function(){for(let m=1;m<=t;m++)for(let g=1;g<=i;g++){let _=(i+1)*(m-1)+(g-1),x=(i+1)*m+(g-1),M=(i+1)*m+g,w=(i+1)*(m-1)+g;f.push(_,x,w),f.push(x,M,w)}})()})(),this.setIndex(f),this.setAttribute("position",new Ze(u,3)),this.setAttribute("normal",new Ze(d,3)),this.setAttribute("uv",new Ze(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new ja[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},no=class extends yt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new A,s=new A;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,f=d+u.count;p<f;p+=3)for(let v=0;v<3;v++){let m=o.getX(p+v),g=o.getX(p+(v+1)%3);i.fromBufferAttribute(a,m),s.fromBufferAttribute(a,g),yh(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;i.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),yh(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ze(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function yh(r,e,t){let n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)!==!0&&t.has(i)!==!0&&(t.add(n),t.add(i),!0)}var Yf=Object.freeze({__proto__:null,BoxGeometry:ti,CapsuleGeometry:za,CircleGeometry:gi,ConeGeometry:ka,CylinderGeometry:vi,DodecahedronGeometry:Ga,EdgesGeometry:Va,ExtrudeGeometry:Pr,IcosahedronGeometry:Ya,LatheGeometry:Ir,OctahedronGeometry:Za,PlaneGeometry:Nn,PolyhedronGeometry:_i,RingGeometry:Ja,ShapeGeometry:Ka,SphereGeometry:sn,TetrahedronGeometry:Qa,TorusGeometry:yn,TorusKnotGeometry:eo,TubeGeometry:to,WireframeGeometry:no});var an=class extends Qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ct=class extends an{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var io=class extends Qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ro=class extends Qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function wa(r,e){return r&&r.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r):r}function Wd(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Oi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},so=class extends Oi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bl,endingEnd:bl}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case wl:s=e,o=2*t-n;break;case Tl:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case wl:a=e,l=2*n-t;break;case Tl:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=.5*(n-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(n-t)/(i-t),v=f*f,m=v*f,g=-d*m+2*d*v-d*f,_=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*f+1,x=(-1-p)*m+(1.5+p)*v+.5*f,M=p*m-p*v;for(let w=0;w!==o;++w)s[w]=g*a[h+w]+_*a[c+w]+x*a[l+w]+M*a[u+w];return s}},ao=class extends Oi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},oo=class extends Oi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},nn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wa(t,this.TimeBufferType),this.values=wa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:wa(e.times,Array),values:wa(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new oo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ao(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new so(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ls:t=this.InterpolantFactoryMethodDiscrete;break;case Ra:t=this.InterpolantFactoryMethodLinear;break;case Ta:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ls;case this.InterpolantFactoryMethodLinear:return Ra;case this.InterpolantFactoryMethodSmooth:return Ta}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Wd(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ta,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(i)l=!0;else{let h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){let f=t[h+p];if(f!==t[u+p]||f!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};nn.prototype.ValueTypeName="",nn.prototype.TimeBufferType=Float32Array,nn.prototype.ValueBufferType=Float32Array,nn.prototype.DefaultInterpolation=Ra;var di=class extends nn{constructor(e,t,n){super(e,t,n)}};di.prototype.ValueTypeName="bool",di.prototype.ValueBufferType=Array,di.prototype.DefaultInterpolation=ls,di.prototype.InterpolantFactoryMethodLinear=void 0,di.prototype.InterpolantFactoryMethodSmooth=void 0;var lo=class extends nn{constructor(e,t,n,i){super(e,t,n,i)}};lo.prototype.ValueTypeName="color";var co=class extends nn{constructor(e,t,n,i){super(e,t,n,i)}};co.prototype.ValueTypeName="number";var ho=class extends Oi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)fn.slerpFlat(s,0,a,c-o,a,c,l);return s}},Cs=class extends nn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new ho(this.times,this.values,this.getValueSize(),e)}};Cs.prototype.ValueTypeName="quaternion",Cs.prototype.InterpolantFactoryMethodSmooth=void 0;var pi=class extends nn{constructor(e,t,n){super(e,t,n)}};pi.prototype.ValueTypeName="string",pi.prototype.ValueBufferType=Array,pi.prototype.DefaultInterpolation=ls,pi.prototype.InterpolantFactoryMethodLinear=void 0,pi.prototype.InterpolantFactoryMethodSmooth=void 0;var uo=class extends nn{constructor(e,t,n,i){super(e,t,n,i)}};uo.prototype.ValueTypeName="vector";var Aa={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},po=class{constructor(e,t,n){let i=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,a===!1&&i.onStart!==void 0&&i.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,l),o===l&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],f=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}},Eu=new po,Lr=class{constructor(e){this.manager=e!==void 0?e:Eu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Lr.DEFAULT_MATERIAL_NAME="__DEFAULT";var _r=new WeakMap,mo=class extends Lr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Aa.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=_r.get(a);u===void 0&&(u=[],_r.set(a,u)),u.push({onLoad:t,onError:i})}return a}let o=Sr("img");function l(){h(),t&&t(this);let u=_r.get(this)||[];for(let d=0;d<u.length;d++){let p=u[d];p.onLoad&&p.onLoad(this)}_r.delete(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),Aa.remove(`image:${e}`);let d=_r.get(this)||[];for(let p=0;p<d.length;p++){let f=d[p];f.onError&&f.onError(u)}_r.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Aa.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var Bi=class extends Lr{constructor(e){super(e)}load(e,t,n,i){let s=new qt,a=new mo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},Rs=class extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ps=class extends Rs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ml=new nt,Mh=new A,Sh=new A,Pl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.mapType=On,this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fi,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Mh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mh),Sh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sh),t.updateMatrixWorld(),Ml.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ml),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ml)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Zf=new nt,Jf=new A,Kf=new A;var Is=class extends wr{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Il=class extends Pl{constructor(){super(new Is(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Dr=class extends Rs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new Il}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Qf=new nt,eg=new nt,tg=new nt;var fo=class extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var ng=new A,ig=new fn,rg=new A,sg=new A,ag=new A;var og=new A,lg=new fn,cg=new A,hg=new A;var Mc="\\[\\]\\.:\\/",Xd=new RegExp("["+Mc+"]","g"),Sl="[^"+Mc+"]",$d="[^"+Mc.replace("\\.","")+"]",jd=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Sl)+/(WCOD+)?/.source.replace("WCOD",$d)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sl)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sl)+"$"),qd=["material","materials","bones","map"],_t=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Xd,"")}static parseTrackName(e){let t=jd.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);qd.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_t.Composite=class{constructor(r,e,t){let n=t||_t.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,n)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray],_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ug=new Float32Array(1);var dg=new nt;var pg=new _e;var mg=new A,fg=new A;var gg=new A;var vg=new A,_g=new nt,xg=new nt;var yg=new A,Mg=new Ne,Sg=new Ne;var bg=new A,wg=new A,Tg=new A;var Eg=new A,Ag=new wr;var Cg=new gn;var Rg=new A;function Sc(r,e,t,n){let i=(function(s){switch(s){case On:case Bl:return{byteLength:1,components:1};case Fr:case zl:case Or:return{byteLength:2,components:1};case Co:case Ro:return{byteLength:2,components:4};case Gi:case Ao:case Bn:return{byteLength:4,components:1};case kl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(n);switch(t){case 1021:return r*e;case Gl:case Po:return r*e/i.components*i.byteLength;case 1030:case 1031:return r*e*2/i.components*i.byteLength;case 1022:return r*e*3/i.components*i.byteLength;case Mn:case 1033:return r*e*4/i.components*i.byteLength;case 33776:case 33777:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(r,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(r,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37808:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(r/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(r/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"178"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="178");function Zu(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Zd(r){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=e.get(t);n&&(r.deleteBuffer(n.buffer),e.delete(t))},update:function(t,n){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let i=e.get(t);if(i===void 0)e.set(t,(function(s,a){let o=s.array,l=s.usage,c=o.byteLength,h=r.createBuffer(),u;if(r.bindBuffer(a,h),r.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)u=r.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)u=r.HALF_FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?r.HALF_FLOAT:r.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=r.SHORT;else if(o instanceof Uint32Array)u=r.UNSIGNED_INT;else if(o instanceof Int32Array)u=r.INT;else if(o instanceof Int8Array)u=r.BYTE;else if(o instanceof Uint8Array)u=r.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=r.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:c}})(t,n));else if(i.version<t.version){if(i.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let l=a.array,c=a.updateRanges;if(r.bindBuffer(o,s),c.length===0)r.bufferSubData(o,0,l);else{c.sort((u,d)=>u.start-d.start);let h=0;for(let u=1;u<c.length;u++){let d=c[h],p=c[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,c[h]=p)}c.length=h+1;for(let u=0,d=c.length;u<d;u++){let p=c[u];r.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(i.buffer,t,n),i.version=t.version}}}}var rt={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},Pe={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},zn={basic:{uniforms:Ht([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:Ht([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ne(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:Ht([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:Ht([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:Ht([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Ne(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:Ht([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:Ht([Pe.points,Pe.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:Ht([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:Ht([Pe.common,Pe.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:Ht([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:Ht([Pe.sprite,Pe.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:Ht([Pe.common,Pe.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:Ht([Pe.lights,Pe.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};zn.physical={uniforms:Ht([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var Fo={r:0,b:0,g:0},Wi=new _n,Jd=new nt;function Kd(r,e,t,n,i,s,a){let o=new Ne(0),l,c,h=s===!0?0:1,u=null,d=0,p=null;function f(m){let g=m.isScene===!0?m.background:null;return g&&g.isTexture&&(g=(m.backgroundBlurriness>0?t:e).get(g)),g}function v(m,g){m.getRGB(Fo,xc(r)),n.buffers.color.setClear(Fo.r,Fo.g,Fo.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(m,g=1){o.set(m),h=g,v(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(m){h=m,v(o,h)},render:function(m){let g=!1,_=f(m);_===null?v(o,h):_&&_.isColor&&(v(_,1),g=!0);let x=r.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,a):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||g)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))},addToRenderList:function(m,g){let _=f(g);_&&(_.isCubeTexture||_.mapping===Us)?(c===void 0&&(c=new Ye(new ti(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:Hi(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(x,M,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Wi.copy(g.backgroundRotation),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Jd.makeRotationFromEuler(Wi)),c.material.toneMapped=ht.getTransfer(_.colorSpace)!==mt,u===_&&d===_.version&&p===r.toneMapping||(c.material.needsUpdate=!0,u=_,d=_.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Ye(new Nn(2,2),new xn({name:"BackgroundMaterial",uniforms:Hi(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.toneMapped=ht.getTransfer(_.colorSpace)!==mt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),u===_&&d===_.version&&p===r.toneMapping||(l.material.needsUpdate=!0,u=_,d=_.version,p=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))},dispose:function(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}}}function Qd(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=c(null),s=i,a=!1;function o(g){return r.bindVertexArray(g)}function l(g){return r.deleteVertexArray(g)}function c(g){let _=[],x=[],M=[];for(let w=0;w<t;w++)_[w]=0,x[w]=0,M[w]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:_,enabledAttributes:x,attributeDivisors:M,object:g,attributes:{},index:null}}function h(){let g=s.newAttributes;for(let _=0,x=g.length;_<x;_++)g[_]=0}function u(g){d(g,0)}function d(g,_){let x=s.newAttributes,M=s.enabledAttributes,w=s.attributeDivisors;x[g]=1,M[g]===0&&(r.enableVertexAttribArray(g),M[g]=1),w[g]!==_&&(r.vertexAttribDivisor(g,_),w[g]=_)}function p(){let g=s.newAttributes,_=s.enabledAttributes;for(let x=0,M=_.length;x<M;x++)_[x]!==g[x]&&(r.disableVertexAttribArray(x),_[x]=0)}function f(g,_,x,M,w,T,U){U===!0?r.vertexAttribIPointer(g,_,x,w,T):r.vertexAttribPointer(g,_,x,M,w,T)}function v(){m(),a=!0,s!==i&&(s=i,o(s.object))}function m(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:function(g,_,x,M,w){let T=!1,U=(function(B,L,P){let F=P.wireframe===!0,I=n[B.id];I===void 0&&(I={},n[B.id]=I);let H=I[L.id];H===void 0&&(H={},I[L.id]=H);let z=H[F];return z===void 0&&(z=c(r.createVertexArray()),H[F]=z),z})(M,x,_);s!==U&&(s=U,o(s.object)),T=(function(B,L,P,F){let I=s.attributes,H=L.attributes,z=0,q=P.getAttributes();for(let V in q)if(q[V].location>=0){let ne=I[V],ee=H[V];if(ee===void 0&&(V==="instanceMatrix"&&B.instanceMatrix&&(ee=B.instanceMatrix),V==="instanceColor"&&B.instanceColor&&(ee=B.instanceColor)),ne===void 0||ne.attribute!==ee||ee&&ne.data!==ee.data)return!0;z++}return s.attributesNum!==z||s.index!==F})(g,M,x,w),T&&(function(B,L,P,F){let I={},H=L.attributes,z=0,q=P.getAttributes();for(let V in q)if(q[V].location>=0){let ne=H[V];ne===void 0&&(V==="instanceMatrix"&&B.instanceMatrix&&(ne=B.instanceMatrix),V==="instanceColor"&&B.instanceColor&&(ne=B.instanceColor));let ee={};ee.attribute=ne,ne&&ne.data&&(ee.data=ne.data),I[V]=ee,z++}s.attributes=I,s.attributesNum=z,s.index=F})(g,M,x,w),w!==null&&e.update(w,r.ELEMENT_ARRAY_BUFFER),(T||a)&&(a=!1,(function(B,L,P,F){h();let I=F.attributes,H=P.getAttributes(),z=L.defaultAttributeValues;for(let q in H){let V=H[q];if(V.location>=0){let ne=I[q];if(ne===void 0&&(q==="instanceMatrix"&&B.instanceMatrix&&(ne=B.instanceMatrix),q==="instanceColor"&&B.instanceColor&&(ne=B.instanceColor)),ne!==void 0){let ee=ne.normalized,re=ne.itemSize,se=e.get(ne);if(se===void 0)continue;let J=se.buffer,oe=se.type,Me=se.bytesPerElement,Ie=oe===r.INT||oe===r.UNSIGNED_INT||ne.gpuType===Ao;if(ne.isInterleavedBufferAttribute){let ye=ne.data,ue=ye.stride,Ge=ne.offset;if(ye.isInstancedInterleavedBuffer){for(let R=0;R<V.locationSize;R++)d(V.location+R,ye.meshPerAttribute);B.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let R=0;R<V.locationSize;R++)u(V.location+R);r.bindBuffer(r.ARRAY_BUFFER,J);for(let R=0;R<V.locationSize;R++)f(V.location+R,re/V.locationSize,oe,ee,ue*Me,(Ge+re/V.locationSize*R)*Me,Ie)}else{if(ne.isInstancedBufferAttribute){for(let ye=0;ye<V.locationSize;ye++)d(V.location+ye,ne.meshPerAttribute);B.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ye=0;ye<V.locationSize;ye++)u(V.location+ye);r.bindBuffer(r.ARRAY_BUFFER,J);for(let ye=0;ye<V.locationSize;ye++)f(V.location+ye,re/V.locationSize,oe,ee,re*Me,re/V.locationSize*ye*Me,Ie)}}else if(z!==void 0){let ee=z[q];if(ee!==void 0)switch(ee.length){case 2:r.vertexAttrib2fv(V.location,ee);break;case 3:r.vertexAttrib3fv(V.location,ee);break;case 4:r.vertexAttrib4fv(V.location,ee);break;default:r.vertexAttrib1fv(V.location,ee)}}}}p()})(g,_,x,M),w!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(w).buffer))},reset:v,resetDefaultState:m,dispose:function(){v();for(let g in n){let _=n[g];for(let x in _){let M=_[x];for(let w in M)l(M[w].object),delete M[w];delete _[x]}delete n[g]}},releaseStatesOfGeometry:function(g){if(n[g.id]===void 0)return;let _=n[g.id];for(let x in _){let M=_[x];for(let w in M)l(M[w].object),delete M[w];delete _[x]}delete n[g.id]},releaseStatesOfProgram:function(g){for(let _ in n){let x=n[_];if(x[g.id]===void 0)continue;let M=x[g.id];for(let w in M)l(M[w].object),delete M[w];delete x[g.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function ep(r,e,t){let n;function i(s,a,o){o!==0&&(r.drawArraysInstanced(n,s,a,o),t.update(a,n,o))}this.setMode=function(s){n=s},this.render=function(s,a){r.drawArrays(n,s,a),t.update(a,n,1)},this.renderInstances=i,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,s,0,a,0,o);let l=0;for(let c=0;c<o;c++)l+=a[c];t.update(l,n,1)},this.renderMultiDrawInstances=function(s,a,o,l){if(o===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<s.length;h++)i(s[h],a[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(n,s,0,a,0,l,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u]*l[u];t.update(h,n,1)}}}function tp(r,e,t,n){let i;function s(d){if(d==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=t.logarithmicDepthBuffer===!0,c=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let d=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:s,textureFormatReadable:function(d){return d===Mn||n.convert(d)===r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){let p=d===Or&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==On&&n.convert(d)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==Bn&&!p)},precision:a,logarithmicDepthBuffer:l,reverseDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:r.getParameter(r.MAX_TEXTURE_SIZE),maxCubemapSize:r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:r.getParameter(r.MAX_VERTEX_ATTRIBS),maxVertexUniforms:r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:r.getParameter(r.MAX_VARYING_VECTORS),maxFragmentUniforms:r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:r.getParameter(r.MAX_SAMPLES)}}function np(r){let e=this,t=null,n=0,i=!1,s=!1,a=new tn,o=new it,l={value:null,needsUpdate:!1};function c(h,u,d,p){let f=h!==null?h.length:0,v=null;if(f!==0){if(v=l.value,p!==!0||v===null){let m=d+4*f,g=u.matrixWorldInverse;o.getNormalMatrix(g),(v===null||v.length<m)&&(v=new Float32Array(m));for(let _=0,x=d;_!==f;++_,x+=4)a.copy(h[_]).applyMatrix4(g,o),a.normal.toArray(v,x),v[x+3]=a.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,v}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||i;return i=u,n=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,f=h.clipIntersection,v=h.clipShadows,m=r.get(h);if(!i||p===null||p.length===0||s&&!v)s?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let g=s?0:n,_=4*g,x=m.clippingState||null;l.value=x,x=c(p,u,_,d);for(let M=0;M!==_;++M)x[M]=t[M];m.clippingState=x,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=g}}}function ip(r){let e=new WeakMap;function t(i,s){return s===wo?i.mapping=Nr:s===To&&(i.mapping=zi),i}function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping;if(s===wo||s===To){if(e.has(i))return t(e.get(i).texture,i.mapping);{let a=i.image;if(a&&a.height>0){let o=new Fa(a.height);return o.fromEquirectangularTexture(r,i),e.set(i,o),i.addEventListener("dispose",n),t(o.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}var Au=[.125,.215,.35,.446,.526,.582],Bs=20,bc=new Is,Cu=new Ne,wc=null,Tc=0,Ec=0,Ac=!1,$i=(1+Math.sqrt(5))/2,zr=1/$i,Ru=[new A(-$i,zr,0),new A($i,zr,0),new A(-zr,0,$i),new A(zr,0,$i),new A(0,$i,-zr),new A(0,$i,zr),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],rp=new A,Gr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){let{size:a=256,position:o=rp}=s;wc=this._renderer.getRenderTarget(),Tc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),Ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wc,Tc,Ec),this._renderer.xr.enabled=Ac,e.scissorTest=!1,Oo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Nr||e.mapping===zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wc=this._renderer.getRenderTarget(),Tc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),Ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Or,format:Mn,colorSpace:Ii,depthBuffer:!1},i=Pu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pu(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],l=[],c=[],h=a,u=a-4+1+Au.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);l.push(p);let f=1/p;d>a-4?f=Au[d-a+4-1]:d===0&&(f=0),c.push(f);let v=1/(p-2),m=-v,g=1+v,_=[m,m,g,m,g,g,m,m,g,g,m,g],x=6,M=6,w=3,T=2,U=1,B=new Float32Array(w*M*x),L=new Float32Array(T*M*x),P=new Float32Array(U*M*x);for(let I=0;I<x;I++){let H=I%3*2/3-1,z=I>2?0:-1,q=[H,z,0,H+2/3,z,0,H+2/3,z+1,0,H,z,0,H+2/3,z+1,0,H,z+1,0];B.set(q,w*M*I),L.set(_,T*M*I);let V=[I,I,I,I,I,I];P.set(V,U*M*I)}let F=new yt;F.setAttribute("position",new Tt(B,w)),F.setAttribute("uv",new Tt(L,T)),F.setAttribute("faceIndex",new Tt(P,U)),o.push(F),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}})(s)),this._blurMaterial=(function(a,o,l){let c=new Float32Array(Bs),h=new A(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:Bs,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Oc(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})})(s,e,t)}return i}_compileMaterial(e){let t=new Ye(this._lodPlanes[0],e);this._renderer.compile(t,bc)}_sceneToCubeUV(e,t,n,i,s){let a=new kt(90,1,t,n),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,u=c.toneMapping;c.getClearColor(Cu),c.toneMapping=ni,c.autoClear=!1;let d=new ei({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),p=new Ye(new ti,d),f=!1,v=e.background;v?v.isColor&&(d.color.copy(v),e.background=null,f=!0):(d.color.copy(Cu),f=!0);for(let m=0;m<6;m++){let g=m%3;g===0?(a.up.set(0,o[m],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x+l[m],s.y,s.z)):g===1?(a.up.set(0,0,o[m]),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y+l[m],s.z)):(a.up.set(0,o[m],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y,s.z+l[m]));let _=this._cubeSize;Oo(i,g*_,m>2?_:0,_,_),c.setRenderTarget(i),f&&c.render(p,a),c.render(e,a)}p.geometry.dispose(),p.material.dispose(),c.toneMapping=u,c.autoClear=h,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Nr||e.mapping===zi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Iu());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new Ye(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;Oo(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,bc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ru[(i-s-1)%Ru.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new Ye(this._lodPlanes[i],c),u=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,f=s/p,v=isFinite(s)?1+Math.floor(3*f):Bs;v>Bs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to 20`);let m=[],g=0;for(let M=0;M<Bs;++M){let w=M/f,T=Math.exp(-w*w/2);m.push(T),M===0?g+=T:M<v&&(g+=2*T)}for(let M=0;M<m.length;M++)m[M]=m[M]/g;u.envMap.value=e.texture,u.samples.value=v,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=p,u.mipInt.value=_-n;let x=this._sizeLods[i];Oo(t,3*x*(i>_-4?i-_+4:0),4*(this._cubeSize-x),3*x,2*x),l.setRenderTarget(t),l.render(h,bc)}};function Pu(r,e,t){let n=new Un(r,e,t);return n.texture.mapping=Us,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Oo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Iu(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oc(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Lu(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Oc(){return`

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
	`}function sp(r){let e=new WeakMap,t=null;function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping,a=s===wo||s===To,o=s===Nr||s===zi;if(a||o){let l=e.get(i),c=l!==void 0?l.texture.pmremVersion:0;if(i.isRenderTargetTexture&&i.pmremVersion!==c)return t===null&&(t=new Gr(r)),l=a?t.fromEquirectangular(i,l):t.fromCubemap(i,l),l.texture.pmremVersion=i.pmremVersion,e.set(i,l),l.texture;if(l!==void 0)return l.texture;{let h=i.image;return a&&h&&h.height>0||o&&h&&(function(u){let d=0,p=6;for(let f=0;f<p;f++)u[f]!==void 0&&d++;return d===p})(h)?(t===null&&(t=new Gr(r)),l=a?t.fromEquirectangular(i):t.fromCubemap(i),l.texture.pmremVersion=i.pmremVersion,e.set(i,l),i.addEventListener("dispose",n),l.texture):null}}}return i},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function ap(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Li("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function op(r,e,t,n){let i={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);c.removeEventListener("dispose",a),delete i[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(h!==null){let v=h.array;d=h.version;for(let m=0,g=v.length;m<g;m+=3){let _=v[m+0],x=v[m+1],M=v[m+2];c.push(_,x,x,M,M,_)}}else{if(u===void 0)return;{let v=u.array;d=u.version;for(let m=0,g=v.length/3-1;m<g;m+=3){let _=m+0,x=m+1,M=m+2;c.push(_,x,x,M,M,_)}}}let p=new(_c(c)?ms:ps)(c,1);p.version=d;let f=s.get(l);f&&e.remove(f),s.set(l,p)}return{get:function(l,c){return i[c.id]===!0||(c.addEventListener("dispose",a),i[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let h in c)e.update(c[h],r.ARRAY_BUFFER)},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function lp(r,e,t){let n,i,s;function a(o,l,c){c!==0&&(r.drawElementsInstanced(n,l,i,o*s,c),t.update(l,n,c))}this.setMode=function(o){n=o},this.setIndex=function(o){i=o.type,s=o.bytesPerElement},this.render=function(o,l){r.drawElements(n,l,i,o*s),t.update(l,n,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,l,0,i,o,0,c);let h=0;for(let u=0;u<c;u++)h+=l[u];t.update(h,n,1)},this.renderMultiDrawInstances=function(o,l,c,h){if(c===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/s,l[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(n,l,0,i,o,0,h,0,c);let d=0;for(let p=0;p<c;p++)d+=l[p]*h[p];t.update(d,n,1)}}}function cp(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,i){switch(e.calls++,n){case r.TRIANGLES:e.triangles+=i*(t/3);break;case r.LINES:e.lines+=i*(t/2);break;case r.LINE_STRIP:e.lines+=i*(t-1);break;case r.LINE_LOOP:e.lines+=i*t;break;case r.POINTS:e.points+=i*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function hp(r,e,t){let n=new WeakMap,i=new xt;return{update:function(s,a,o){let l=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,u=n.get(a);if(u===void 0||u.count!==h){let B=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",B)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,v=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],g=a.morphAttributes.color||[],_=0;d===!0&&(_=1),p===!0&&(_=2),f===!0&&(_=3);let x=a.attributes.position.count*_,M=1;x>e.maxTextureSize&&(M=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let w=new Float32Array(x*M*4*h),T=new us(w,x,M,h);T.type=Bn,T.needsUpdate=!0;let U=4*_;for(let L=0;L<h;L++){let P=v[L],F=m[L],I=g[L],H=x*M*4*L;for(let z=0;z<P.count;z++){let q=z*U;d===!0&&(i.fromBufferAttribute(P,z),w[H+q+0]=i.x,w[H+q+1]=i.y,w[H+q+2]=i.z,w[H+q+3]=0),p===!0&&(i.fromBufferAttribute(F,z),w[H+q+4]=i.x,w[H+q+5]=i.y,w[H+q+6]=i.z,w[H+q+7]=0),f===!0&&(i.fromBufferAttribute(I,z),w[H+q+8]=i.x,w[H+q+9]=i.y,w[H+q+10]=i.z,w[H+q+11]=I.itemSize===4?i.w:1)}}u={count:h,texture:T,size:new _e(x,M)},n.set(a,u),a.addEventListener("dispose",B)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let d=0;for(let f=0;f<l.length;f++)d+=l[f];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(r,"morphTargetBaseInfluence",p),o.getUniforms().setValue(r,"morphTargetInfluences",l)}o.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}}}function up(r,e,t,n){let i=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,l=a.geometry,c=e.get(a,l);if(i.get(c)!==o&&(e.update(c),i.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),i.get(a)!==o&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;i.get(h)!==o&&(h.update(),i.set(h,o))}return c},dispose:function(){i=new WeakMap}}}var Ju=new qt,Du=new _s(1,1),Ku=new us,Qu=new Ua,ed=new fs,Uu=[],Nu=[],Fu=new Float32Array(16),Ou=new Float32Array(9),Bu=new Float32Array(4);function Vr(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Uu[i];if(s===void 0&&(s=new Float32Array(i),Uu[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Pt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function It(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ko(r,e){let t=Nu[e];t===void 0&&(t=new Int32Array(e),Nu[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function dp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function pp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;r.uniform2fv(this.addr,e),It(t,e)}}function mp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;r.uniform3fv(this.addr,e),It(t,e)}}function fp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;r.uniform4fv(this.addr,e),It(t,e)}}function gp(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,n))return;Bu.set(n),r.uniformMatrix2fv(this.addr,!1,Bu),It(t,n)}}function vp(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,n))return;Ou.set(n),r.uniformMatrix3fv(this.addr,!1,Ou),It(t,n)}}function _p(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Pt(t,n))return;Fu.set(n),r.uniformMatrix4fv(this.addr,!1,Fu),It(t,n)}}function xp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function yp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;r.uniform2iv(this.addr,e),It(t,e)}}function Mp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;r.uniform3iv(this.addr,e),It(t,e)}}function Sp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;r.uniform4iv(this.addr,e),It(t,e)}}function bp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function wp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;r.uniform2uiv(this.addr,e),It(t,e)}}function Tp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;r.uniform3uiv(this.addr,e),It(t,e)}}function Ep(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;r.uniform4uiv(this.addr,e),It(t,e)}}function Ap(r,e,t){let n=this.cache,i=t.allocateTextureUnit(),s;n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),this.type===r.SAMPLER_2D_SHADOW?(Du.compareFunction=gc,s=Du):s=Ju,t.setTexture2D(e||s,i)}function Cp(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Qu,i)}function Rp(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ed,i)}function Pp(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ku,i)}function Ip(r,e){r.uniform1fv(this.addr,e)}function Lp(r,e){let t=Vr(e,this.size,2);r.uniform2fv(this.addr,t)}function Dp(r,e){let t=Vr(e,this.size,3);r.uniform3fv(this.addr,t)}function Up(r,e){let t=Vr(e,this.size,4);r.uniform4fv(this.addr,t)}function Np(r,e){let t=Vr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Fp(r,e){let t=Vr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Op(r,e){let t=Vr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Bp(r,e){r.uniform1iv(this.addr,e)}function zp(r,e){r.uniform2iv(this.addr,e)}function kp(r,e){r.uniform3iv(this.addr,e)}function Gp(r,e){r.uniform4iv(this.addr,e)}function Vp(r,e){r.uniform1uiv(this.addr,e)}function Hp(r,e){r.uniform2uiv(this.addr,e)}function Wp(r,e){r.uniform3uiv(this.addr,e)}function Xp(r,e){r.uniform4uiv(this.addr,e)}function $p(r,e,t){let n=this.cache,i=e.length,s=ko(t,i);Pt(n,s)||(r.uniform1iv(this.addr,s),It(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Ju,s[a])}function jp(r,e,t){let n=this.cache,i=e.length,s=ko(t,i);Pt(n,s)||(r.uniform1iv(this.addr,s),It(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Qu,s[a])}function qp(r,e,t){let n=this.cache,i=e.length,s=ko(t,i);Pt(n,s)||(r.uniform1iv(this.addr,s),It(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||ed,s[a])}function Yp(r,e,t){let n=this.cache,i=e.length,s=ko(t,i);Pt(n,s)||(r.uniform1iv(this.addr,s),It(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Ku,s[a])}var Rc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(i){switch(i){case 5126:return dp;case 35664:return pp;case 35665:return mp;case 35666:return fp;case 35674:return gp;case 35675:return vp;case 35676:return _p;case 5124:case 35670:return xp;case 35667:case 35671:return yp;case 35668:case 35672:return Mp;case 35669:case 35673:return Sp;case 5125:return bp;case 36294:return wp;case 36295:return Tp;case 36296:return Ep;case 35678:case 36198:case 36298:case 36306:case 35682:return Ap;case 35679:case 36299:case 36307:return Cp;case 35680:case 36300:case 36308:case 36293:return Rp;case 36289:case 36303:case 36311:case 36292:return Pp}})(t.type)}},Pc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(i){switch(i){case 5126:return Ip;case 35664:return Lp;case 35665:return Dp;case 35666:return Up;case 35674:return Np;case 35675:return Fp;case 35676:return Op;case 5124:case 35670:return Bp;case 35667:case 35671:return zp;case 35668:case 35672:return kp;case 35669:case 35673:return Gp;case 5125:return Vp;case 36294:return Hp;case 36295:return Wp;case 36296:return Xp;case 35678:case 36198:case 36298:case 36306:case 35682:return $p;case 35679:case 36299:case 36307:return jp;case 35680:case 36300:case 36308:case 36293:return qp;case 36289:case 36303:case 36311:case 36292:return Yp}})(t.type)}},Ic=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},Cc=/(\w+)(\])?(\[|\.)?/g;function zu(r,e){r.seq.push(e),r.map[e.id]=e}function Zp(r,e,t){let n=r.name,i=n.length;for(Cc.lastIndex=0;;){let s=Cc.exec(n),a=Cc.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===i){zu(t,c===void 0?new Rc(o,r,e):new Pc(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new Ic(o),zu(t,h)),t=h}}}var kr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i);Zp(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function ku(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var Jp=0,Gu=new it;function Vu(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+(function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let f=p+1;h.push(`${f===l?">":" "} ${f}: ${c[p]}`)}return h.join(`
`)})(r.getShaderSource(e),a)}return i}function Kp(r,e){let t=(function(n){ht._getMatrix(Gu,ht.workingColorSpace,n);let i=`mat3( ${Gu.elements.map(s=>s.toFixed(4))} )`;switch(ht.getTransfer(n)){case cs:return[i,"LinearTransferOETF"];case mt:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[i,"LinearTransferOETF"]}})(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Qp(r,e){let t;switch(e){case Yh:t="Linear";break;case Zh:t="Reinhard";break;case Jh:t="Cineon";break;case Kh:t="ACESFilmic";break;case eu:t="AgX";break;case bo:t="Neutral";break;case Qh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Bo=new A;function em(){return ht.getLuminanceCoefficients(Bo),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Bo.x.toFixed(4)}, ${Bo.y.toFixed(4)}, ${Bo.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zs(r){return r!==""}function Hu(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var tm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lc(r){return r.replace(tm,im)}var nm=new Map;function im(r,e){let t=rt[e];if(t===void 0){let n=nm.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return Lc(t)}var rm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xu(r){return r.replace(rm,sm)}function sm(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function $u(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function am(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(F){let I="SHADOWMAP_TYPE_BASIC";return F.shadowMapType===Dl?I="SHADOWMAP_TYPE_PCF":F.shadowMapType===Th?I="SHADOWMAP_TYPE_PCF_SOFT":F.shadowMapType===Fn&&(I="SHADOWMAP_TYPE_VSM"),I})(t),c=(function(F){let I="ENVMAP_TYPE_CUBE";if(F.envMap)switch(F.envMapMode){case Nr:case zi:I="ENVMAP_TYPE_CUBE";break;case Us:I="ENVMAP_TYPE_CUBE_UV"}return I})(t),h=(function(F){let I="ENVMAP_MODE_REFLECTION";return F.envMap&&F.envMapMode===zi&&(I="ENVMAP_MODE_REFRACTION"),I})(t),u=(function(F){let I="ENVMAP_BLENDING_NONE";if(F.envMap)switch(F.combine){case $h:I="ENVMAP_BLENDING_MULTIPLY";break;case jh:I="ENVMAP_BLENDING_MIX";break;case qh:I="ENVMAP_BLENDING_ADD"}return I})(t),d=(function(F){let I=F.envMapCubeUVHeight;if(I===null)return null;let H=Math.log2(I)-2,z=1/I;return{texelWidth:1/(3*Math.max(Math.pow(2,H),112)),texelHeight:z,maxMip:H}})(t),p=(function(F){return[F.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",F.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zs).join(`
`)})(t),f=(function(F){let I=[];for(let H in F){let z=F[H];z!==!1&&I.push("#define "+H+" "+z)}return I.join(`
`)})(s),v=i.createProgram(),m,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(zs).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(zs).join(`
`),g.length>0&&(g+=`
`)):(m=[$u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),g=[$u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?rt.tonemapping_pars_fragment:"",t.toneMapping!==ni?Qp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,Kp("linearToOutputTexel",t.outputColorSpace),em(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zs).join(`
`)),a=Lc(a),a=Hu(a,t),a=Wu(a,t),o=Lc(o),o=Hu(o,t),o=Wu(o,t),a=Xu(a),o=Xu(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let x=_+m+a,M=_+g+o,w=ku(i,i.VERTEX_SHADER,x),T=ku(i,i.FRAGMENT_SHADER,M);function U(F){if(r.debug.checkShaderErrors){let I=i.getProgramInfoLog(v).trim(),H=i.getShaderInfoLog(w).trim(),z=i.getShaderInfoLog(T).trim(),q=!0,V=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,w,T);else{let ne=Vu(i,w,"vertex"),ee=Vu(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+I+`
`+ne+`
`+ee)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):H!==""&&z!==""||(V=!1);V&&(F.diagnostics={runnable:q,programLog:I,vertexShader:{log:H,prefix:m},fragmentShader:{log:z,prefix:g}})}i.deleteShader(w),i.deleteShader(T),B=new kr(i,v),L=(function(I,H){let z={},q=I.getProgramParameter(H,I.ACTIVE_ATTRIBUTES);for(let V=0;V<q;V++){let ne=I.getActiveAttrib(H,V),ee=ne.name,re=1;ne.type===I.FLOAT_MAT2&&(re=2),ne.type===I.FLOAT_MAT3&&(re=3),ne.type===I.FLOAT_MAT4&&(re=4),z[ee]={type:ne.type,location:I.getAttribLocation(H,ee),locationSize:re}}return z})(i,v)}let B,L;i.attachShader(v,w),i.attachShader(v,T),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v),this.getUniforms=function(){return B===void 0&&U(this),B},this.getAttributes=function(){return L===void 0&&U(this),L};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(v,37297)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jp++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=T,this}var om=0,Dc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Uc(e),t.set(e,n)),n}},Uc=class{constructor(e){this.id=om++,this.code=e,this.usedTimes=0}};function lm(r,e,t,n,i,s,a){let o=new ds,l=new Dc,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,p=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(m){return c.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,g,_,x,M){let w=x.fog,T=M.geometry,U=m.isMeshStandardMaterial?x.environment:null,B=(m.isMeshStandardMaterial?t:e).get(m.envMap||U),L=B&&B.mapping===Us?B.image.height:null,P=f[m.type];m.precision!==null&&(p=i.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let F=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,I=F!==void 0?F.length:0,H,z,q,V,ne=0;if(T.morphAttributes.position!==void 0&&(ne=1),T.morphAttributes.normal!==void 0&&(ne=2),T.morphAttributes.color!==void 0&&(ne=3),P){let ce=zn[P];H=ce.vertexShader,z=ce.fragmentShader}else H=m.vertexShader,z=m.fragmentShader,l.update(m),q=l.getVertexShaderID(m),V=l.getFragmentShaderID(m);let ee=r.getRenderTarget(),re=r.state.buffers.depth.getReversed(),se=M.isInstancedMesh===!0,J=M.isBatchedMesh===!0,oe=!!m.map,Me=!!m.matcap,Ie=!!B,ye=!!m.aoMap,ue=!!m.lightMap,Ge=!!m.bumpMap,R=!!m.normalMap,S=!!m.displacementMap,k=!!m.emissiveMap,G=!!m.metalnessMap,y=!!m.roughnessMap,E=m.anisotropy>0,N=m.clearcoat>0,O=m.dispersion>0,X=m.iridescence>0,K=m.sheen>0,W=m.transmission>0,le=E&&!!m.anisotropyMap,ie=N&&!!m.clearcoatMap,j=N&&!!m.clearcoatNormalMap,ae=N&&!!m.clearcoatRoughnessMap,de=X&&!!m.iridescenceMap,be=X&&!!m.iridescenceThicknessMap,ve=K&&!!m.sheenColorMap,we=K&&!!m.sheenRoughnessMap,Re=!!m.specularMap,pe=!!m.specularColorMap,Ce=!!m.specularIntensityMap,Be=W&&!!m.transmissionMap,et=W&&!!m.thicknessMap,Ae=!!m.gradientMap,ke=!!m.alphaMap,Y=m.alphaTest>0,Se=!!m.alphaHash,Le=!!m.extensions,Te=ni;m.toneMapped&&(ee!==null&&ee.isXRRenderTarget!==!0||(Te=r.toneMapping));let C={shaderID:P,shaderType:m.type,shaderName:m.name,vertexShader:H,fragmentShader:z,defines:m.defines,customVertexShaderID:q,customFragmentShaderID:V,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:J,batchingColor:J&&M._colorsTexture!==null,instancing:se,instancingColor:se&&M.instanceColor!==null,instancingMorph:se&&M.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ee===null?r.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Ii,alphaToCoverage:!!m.alphaToCoverage,map:oe,matcap:Me,envMap:Ie,envMapMode:Ie&&B.mapping,envMapCubeUVHeight:L,aoMap:ye,lightMap:ue,bumpMap:Ge,normalMap:R,displacementMap:d&&S,emissiveMap:k,normalMapObjectSpace:R&&m.normalMapType===lu,normalMapTangentSpace:R&&m.normalMapType===ou,metalnessMap:G,roughnessMap:y,anisotropy:E,anisotropyMap:le,clearcoat:N,clearcoatMap:ie,clearcoatNormalMap:j,clearcoatRoughnessMap:ae,dispersion:O,iridescence:X,iridescenceMap:de,iridescenceThicknessMap:be,sheen:K,sheenColorMap:ve,sheenRoughnessMap:we,specularMap:Re,specularColorMap:pe,specularIntensityMap:Ce,transmission:W,transmissionMap:Be,thicknessMap:et,gradientMap:Ae,opaque:m.transparent===!1&&m.blending===Ls&&m.alphaToCoverage===!1,alphaMap:ke,alphaTest:Y,alphaHash:Se,combine:m.combine,mapUv:oe&&v(m.map.channel),aoMapUv:ye&&v(m.aoMap.channel),lightMapUv:ue&&v(m.lightMap.channel),bumpMapUv:Ge&&v(m.bumpMap.channel),normalMapUv:R&&v(m.normalMap.channel),displacementMapUv:S&&v(m.displacementMap.channel),emissiveMapUv:k&&v(m.emissiveMap.channel),metalnessMapUv:G&&v(m.metalnessMap.channel),roughnessMapUv:y&&v(m.roughnessMap.channel),anisotropyMapUv:le&&v(m.anisotropyMap.channel),clearcoatMapUv:ie&&v(m.clearcoatMap.channel),clearcoatNormalMapUv:j&&v(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&v(m.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&v(m.iridescenceMap.channel),iridescenceThicknessMapUv:be&&v(m.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&v(m.sheenColorMap.channel),sheenRoughnessMapUv:we&&v(m.sheenRoughnessMap.channel),specularMapUv:Re&&v(m.specularMap.channel),specularColorMapUv:pe&&v(m.specularColorMap.channel),specularIntensityMapUv:Ce&&v(m.specularIntensityMap.channel),transmissionMapUv:Be&&v(m.transmissionMap.channel),thicknessMapUv:et&&v(m.thicknessMap.channel),alphaMapUv:ke&&v(m.alphaMap.channel),vertexTangents:!!T.attributes.tangent&&(R||E),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,pointsUvs:M.isPoints===!0&&!!T.attributes.uv&&(oe||ke),fog:!!w,useFog:m.fog===!0,fogExp2:!!w&&w.isFogExp2,flatShading:m.flatShading===!0&&m.wireframe===!1,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:re,skinning:M.isSkinnedMesh===!0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:ne,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:r.shadowMap.enabled&&_.length>0,shadowMapType:r.shadowMap.type,toneMapping:Te,decodeVideoTexture:oe&&m.map.isVideoTexture===!0&&ht.getTransfer(m.map.colorSpace)===mt,decodeVideoTextureEmissive:k&&m.emissiveMap.isVideoTexture===!0&&ht.getTransfer(m.emissiveMap.colorSpace)===mt,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===Rt,flipSided:m.side===Vt,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:Le&&m.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&m.extensions.multiDraw===!0||J)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return C.vertexUv1s=c.has(1),C.vertexUv2s=c.has(2),C.vertexUv3s=c.has(3),c.clear(),C},getProgramCacheKey:function(m){let g=[];if(m.shaderID?g.push(m.shaderID):(g.push(m.customVertexShaderID),g.push(m.customFragmentShaderID)),m.defines!==void 0)for(let _ in m.defines)g.push(_),g.push(m.defines[_]);return m.isRawShaderMaterial===!1&&((function(_,x){_.push(x.precision),_.push(x.outputColorSpace),_.push(x.envMapMode),_.push(x.envMapCubeUVHeight),_.push(x.mapUv),_.push(x.alphaMapUv),_.push(x.lightMapUv),_.push(x.aoMapUv),_.push(x.bumpMapUv),_.push(x.normalMapUv),_.push(x.displacementMapUv),_.push(x.emissiveMapUv),_.push(x.metalnessMapUv),_.push(x.roughnessMapUv),_.push(x.anisotropyMapUv),_.push(x.clearcoatMapUv),_.push(x.clearcoatNormalMapUv),_.push(x.clearcoatRoughnessMapUv),_.push(x.iridescenceMapUv),_.push(x.iridescenceThicknessMapUv),_.push(x.sheenColorMapUv),_.push(x.sheenRoughnessMapUv),_.push(x.specularMapUv),_.push(x.specularColorMapUv),_.push(x.specularIntensityMapUv),_.push(x.transmissionMapUv),_.push(x.thicknessMapUv),_.push(x.combine),_.push(x.fogExp2),_.push(x.sizeAttenuation),_.push(x.morphTargetsCount),_.push(x.morphAttributeCount),_.push(x.numDirLights),_.push(x.numPointLights),_.push(x.numSpotLights),_.push(x.numSpotLightMaps),_.push(x.numHemiLights),_.push(x.numRectAreaLights),_.push(x.numDirLightShadows),_.push(x.numPointLightShadows),_.push(x.numSpotLightShadows),_.push(x.numSpotLightShadowsWithMaps),_.push(x.numLightProbes),_.push(x.shadowMapType),_.push(x.toneMapping),_.push(x.numClippingPlanes),_.push(x.numClipIntersection),_.push(x.depthPacking)})(g,m),(function(_,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),x.gradientMap&&o.enable(22),_.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),_.push(o.mask)})(g,m),g.push(r.outputColorSpace)),g.push(m.customProgramCacheKey),g.join()},getUniforms:function(m){let g=f[m.type],_;if(g){let x=zn[g];_=Mu.clone(x.uniforms)}else _=m.uniforms;return _},acquireProgram:function(m,g){let _;for(let x=0,M=h.length;x<M;x++){let w=h[x];if(w.cacheKey===g){_=w,++_.usedTimes;break}}return _===void 0&&(_=new am(r,g,m,s),h.push(_)),_},releaseProgram:function(m){if(--m.usedTimes===0){let g=h.indexOf(m);h[g]=h[h.length-1],h.pop(),m.destroy()}},releaseShaderCache:function(m){l.remove(m)},programs:h,dispose:function(){l.dispose()}}}function cm(){let r=new WeakMap;return{has:function(e){return r.has(e)},get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,n){r.get(e)[t]=n},dispose:function(){r=new WeakMap}}}function hm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ju(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function qu(){let r=[],e=0,t=[],n=[],i=[];function s(a,o,l,c,h,u){let d=r[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:u},r[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=c,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:i,init:function(){e=0,t.length=0,n.length=0,i.length=0},push:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.push(d):l.transparent===!0?i.push(d):t.push(d)},unshift:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.unshift(d):l.transparent===!0?i.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=r.length;a<o;a++){let l=r[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||hm),n.length>1&&n.sort(o||ju),i.length>1&&i.sort(o||ju)}}}function um(){let r=new WeakMap;return{get:function(e,t){let n=r.get(e),i;return n===void 0?(i=new qu,r.set(e,[i])):t>=n.length?(i=new qu,n.push(i)):i=n[t],i},dispose:function(){r=new WeakMap}}}function dm(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new Ne};break;case"SpotLight":t={position:new A,direction:new A,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new A,halfWidth:new A,halfHeight:new A}}return r[e.id]=t,t}}}var pm=0;function mm(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function fm(r){let e=new dm,t=(function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}})(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new A);let i=new A,s=new nt,a=new nt;return{setup:function(o){let l=0,c=0,h=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let u=0,d=0,p=0,f=0,v=0,m=0,g=0,_=0,x=0,M=0,w=0;o.sort(mm);for(let U=0,B=o.length;U<B;U++){let L=o[U],P=L.color,F=L.intensity,I=L.distance,H=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)l+=P.r*F,c+=P.g*F,h+=P.b*F;else if(L.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(L.sh.coefficients[z],F);w++}else if(L.isDirectionalLight){let z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let q=L.shadow,V=t.get(L);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,n.directionalShadow[u]=V,n.directionalShadowMap[u]=H,n.directionalShadowMatrix[u]=L.shadow.matrix,m++}n.directional[u]=z,u++}else if(L.isSpotLight){let z=e.get(L);z.position.setFromMatrixPosition(L.matrixWorld),z.color.copy(P).multiplyScalar(F),z.distance=I,z.coneCos=Math.cos(L.angle),z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),z.decay=L.decay,n.spot[p]=z;let q=L.shadow;if(L.map&&(n.spotLightMap[x]=L.map,x++,q.updateMatrices(L),L.castShadow&&M++),n.spotLightMatrix[p]=q.matrix,L.castShadow){let V=t.get(L);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,n.spotShadow[p]=V,n.spotShadowMap[p]=H,_++}p++}else if(L.isRectAreaLight){let z=e.get(L);z.color.copy(P).multiplyScalar(F),z.halfWidth.set(.5*L.width,0,0),z.halfHeight.set(0,.5*L.height,0),n.rectArea[f]=z,f++}else if(L.isPointLight){let z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),z.distance=L.distance,z.decay=L.decay,L.castShadow){let q=L.shadow,V=t.get(L);V.shadowIntensity=q.intensity,V.shadowBias=q.bias,V.shadowNormalBias=q.normalBias,V.shadowRadius=q.radius,V.shadowMapSize=q.mapSize,V.shadowCameraNear=q.camera.near,V.shadowCameraFar=q.camera.far,n.pointShadow[d]=V,n.pointShadowMap[d]=H,n.pointShadowMatrix[d]=L.shadow.matrix,g++}n.point[d]=z,d++}else if(L.isHemisphereLight){let z=e.get(L);z.skyColor.copy(L.color).multiplyScalar(F),z.groundColor.copy(L.groundColor).multiplyScalar(F),n.hemi[v]=z,v++}}f>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pe.LTC_FLOAT_1,n.rectAreaLTC2=Pe.LTC_FLOAT_2):(n.rectAreaLTC1=Pe.LTC_HALF_1,n.rectAreaLTC2=Pe.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=c,n.ambient[2]=h;let T=n.hash;T.directionalLength===u&&T.pointLength===d&&T.spotLength===p&&T.rectAreaLength===f&&T.hemiLength===v&&T.numDirectionalShadows===m&&T.numPointShadows===g&&T.numSpotShadows===_&&T.numSpotMaps===x&&T.numLightProbes===w||(n.directional.length=u,n.spot.length=p,n.rectArea.length=f,n.point.length=d,n.hemi.length=v,n.directionalShadow.length=m,n.directionalShadowMap.length=m,n.pointShadow.length=g,n.pointShadowMap.length=g,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=m,n.pointShadowMatrix.length=g,n.spotLightMatrix.length=_+x-M,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=w,T.directionalLength=u,T.pointLength=d,T.spotLength=p,T.rectAreaLength=f,T.hemiLength=v,T.numDirectionalShadows=m,T.numPointShadows=g,T.numSpotShadows=_,T.numSpotMaps=x,T.numLightProbes=w,n.version=pm++)},setupView:function(o,l){let c=0,h=0,u=0,d=0,p=0,f=l.matrixWorldInverse;for(let v=0,m=o.length;v<m;v++){let g=o[v];if(g.isDirectionalLight){let _=n.directional[c];_.direction.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(g.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(f),c++}else if(g.isSpotLight){let _=n.spot[u];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(f),_.direction.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(g.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(f),u++}else if(g.isRectAreaLight){let _=n.rectArea[d];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(f),a.identity(),s.copy(g.matrixWorld),s.premultiply(f),a.extractRotation(s),_.halfWidth.set(.5*g.width,0,0),_.halfHeight.set(0,.5*g.height,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),d++}else if(g.isPointLight){let _=n.point[h];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(f),h++}else if(g.isHemisphereLight){let _=n.hemi[p];_.direction.setFromMatrixPosition(g.matrixWorld),_.direction.transformDirection(f),p++}}},state:n}}function Yu(r){let e=new fm(r),t=[],n=[],i={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){i.camera=s,t.length=0,n.length=0},state:i,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){n.push(s)}}}function gm(r){let e=new WeakMap;return{get:function(t,n=0){let i=e.get(t),s;return i===void 0?(s=new Yu(r),e.set(t,[s])):n>=i.length?(s=new Yu(r),i.push(s)):s=i[n],s},dispose:function(){e=new WeakMap}}}function vm(r,e,t){let n=new fi,i=new _e,s=new _e,a=new xt,o=new io({depthPacking:au}),l=new ro,c={},h=t.maxTextureSize,u={[xi]:Vt,[Vt]:xi,[Rt]:Rt},d=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new yt;f.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ye(f,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dl;let g=this.type;function _(T,U){let B=e.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Un(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(U,null,B,d,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(U,null,B,p,v,null)}function x(T,U,B,L){let P=null,F=B.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(F!==void 0)P=F;else if(P=B.isPointLight===!0?l:o,r.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){let I=P.uuid,H=U.uuid,z=c[I];z===void 0&&(z={},c[I]=z);let q=z[H];q===void 0&&(q=P.clone(),z[H]=q,U.addEventListener("dispose",w)),P=q}return P.visible=U.visible,P.wireframe=U.wireframe,P.side=L===Fn?U.shadowSide!==null?U.shadowSide:U.side:U.shadowSide!==null?U.shadowSide:u[U.side],P.alphaMap=U.alphaMap,P.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,P.map=U.map,P.clipShadows=U.clipShadows,P.clippingPlanes=U.clippingPlanes,P.clipIntersection=U.clipIntersection,P.displacementMap=U.displacementMap,P.displacementScale=U.displacementScale,P.displacementBias=U.displacementBias,P.wireframeLinewidth=U.wireframeLinewidth,P.linewidth=U.linewidth,B.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(r.properties.get(P).light=B),P}function M(T,U,B,L,P){if(T.visible===!1)return;if(T.layers.test(U.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&P===Fn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,T.matrixWorld);let I=e.update(T),H=T.material;if(Array.isArray(H)){let z=I.groups;for(let q=0,V=z.length;q<V;q++){let ne=z[q],ee=H[ne.materialIndex];if(ee&&ee.visible){let re=x(T,ee,L,P);T.onBeforeShadow(r,T,U,B,I,re,ne),r.renderBufferDirect(B,null,I,re,T,ne),T.onAfterShadow(r,T,U,B,I,re,ne)}}}else if(H.visible){let z=x(T,H,L,P);T.onBeforeShadow(r,T,U,B,I,z,null),r.renderBufferDirect(B,null,I,z,T,null),T.onAfterShadow(r,T,U,B,I,z,null)}}let F=T.children;for(let I=0,H=F.length;I<H;I++)M(F[I],U,B,L,P)}function w(T){T.target.removeEventListener("dispose",w);for(let U in c){let B=c[U],L=T.target.uuid;L in B&&(B[L].dispose(),delete B[L])}}this.render=function(T,U,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let L=r.getRenderTarget(),P=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),I=r.state;I.setBlending(yi),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let H=g!==Fn&&this.type===Fn,z=g===Fn&&this.type!==Fn;for(let q=0,V=T.length;q<V;q++){let ne=T[q],ee=ne.shadow;if(ee===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;i.copy(ee.mapSize);let re=ee.getFrameExtents();if(i.multiply(re),s.copy(ee.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/re.x),i.x=s.x*re.x,ee.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/re.y),i.y=s.y*re.y,ee.mapSize.y=s.y)),ee.map===null||H===!0||z===!0){let J=this.type!==Fn?{minFilter:Ln,magFilter:Ln}:{};ee.map!==null&&ee.map.dispose(),ee.map=new Un(i.x,i.y,J),ee.map.texture.name=ne.name+".shadowMap",ee.camera.updateProjectionMatrix()}r.setRenderTarget(ee.map),r.clear();let se=ee.getViewportCount();for(let J=0;J<se;J++){let oe=ee.getViewport(J);a.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),I.viewport(a),ee.updateMatrices(ne,J),n=ee.getFrustum(),M(U,B,ee.camera,ne,this.type)}ee.isPointLightShadow!==!0&&this.type===Fn&&_(ee,B),ee.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(L,P,F)}}var _m={[go]:vo,[_o]:Mo,[xo]:So,[Ds]:yo,[vo]:go,[Mo]:_o,[So]:xo,[yo]:Ds};function xm(r,e){let t=new function(){let y=!1,E=new xt,N=null,O=new xt(0,0,0,0);return{setMask:function(X){N===X||y||(r.colorMask(X,X,X,X),N=X)},setLocked:function(X){y=X},setClear:function(X,K,W,le,ie){ie===!0&&(X*=le,K*=le,W*=le),E.set(X,K,W,le),O.equals(E)===!1&&(r.clearColor(X,K,W,le),O.copy(E))},reset:function(){y=!1,N=null,O.set(-1,0,0,0)}}},n=new function(){let y=!1,E=!1,N=null,O=null,X=null;return{setReversed:function(K){if(E!==K){let W=e.get("EXT_clip_control");K?W.clipControlEXT(W.LOWER_LEFT_EXT,W.ZERO_TO_ONE_EXT):W.clipControlEXT(W.LOWER_LEFT_EXT,W.NEGATIVE_ONE_TO_ONE_EXT),E=K;let le=X;X=null,this.setClear(le)}},getReversed:function(){return E},setTest:function(K){K?Ie(r.DEPTH_TEST):ye(r.DEPTH_TEST)},setMask:function(K){N===K||y||(r.depthMask(K),N=K)},setFunc:function(K){if(E&&(K=_m[K]),O!==K){switch(K){case go:r.depthFunc(r.NEVER);break;case vo:r.depthFunc(r.ALWAYS);break;case _o:r.depthFunc(r.LESS);break;case Ds:r.depthFunc(r.LEQUAL);break;case xo:r.depthFunc(r.EQUAL);break;case yo:r.depthFunc(r.GEQUAL);break;case Mo:r.depthFunc(r.GREATER);break;case So:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}O=K}},setLocked:function(K){y=K},setClear:function(K){X!==K&&(E&&(K=1-K),r.clearDepth(K),X=K)},reset:function(){y=!1,N=null,O=null,X=null,E=!1}}},i=new function(){let y=!1,E=null,N=null,O=null,X=null,K=null,W=null,le=null,ie=null;return{setTest:function(j){y||(j?Ie(r.STENCIL_TEST):ye(r.STENCIL_TEST))},setMask:function(j){E===j||y||(r.stencilMask(j),E=j)},setFunc:function(j,ae,de){N===j&&O===ae&&X===de||(r.stencilFunc(j,ae,de),N=j,O=ae,X=de)},setOp:function(j,ae,de){K===j&&W===ae&&le===de||(r.stencilOp(j,ae,de),K=j,W=ae,le=de)},setLocked:function(j){y=j},setClear:function(j){ie!==j&&(r.clearStencil(j),ie=j)},reset:function(){y=!1,E=null,N=null,O=null,X=null,K=null,W=null,le=null,ie=null}}},s=new WeakMap,a=new WeakMap,o={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,f=null,v=null,m=null,g=null,_=null,x=null,M=new Ne(0,0,0),w=0,T=!1,U=null,B=null,L=null,P=null,F=null,I=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,z=0,q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=z>=1):q.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=z>=2);let V=null,ne={},ee=r.getParameter(r.SCISSOR_BOX),re=r.getParameter(r.VIEWPORT),se=new xt().fromArray(ee),J=new xt().fromArray(re);function oe(y,E,N,O){let X=new Uint8Array(4),K=r.createTexture();r.bindTexture(y,K),r.texParameteri(y,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(y,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let W=0;W<N;W++)y===r.TEXTURE_3D||y===r.TEXTURE_2D_ARRAY?r.texImage3D(E,0,r.RGBA,1,1,O,0,r.RGBA,r.UNSIGNED_BYTE,X):r.texImage2D(E+W,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,X);return K}let Me={};function Ie(y){o[y]!==!0&&(r.enable(y),o[y]=!0)}function ye(y){o[y]!==!1&&(r.disable(y),o[y]=!1)}Me[r.TEXTURE_2D]=oe(r.TEXTURE_2D,r.TEXTURE_2D,1),Me[r.TEXTURE_CUBE_MAP]=oe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[r.TEXTURE_2D_ARRAY]=oe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Me[r.TEXTURE_3D]=oe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),t.setClear(0,0,0,1),n.setClear(1),i.setClear(0),Ie(r.DEPTH_TEST),n.setFunc(Ds),S(!1),k(Ll),Ie(r.CULL_FACE),R(yi);let ue={[Ur]:r.FUNC_ADD,[Ah]:r.FUNC_SUBTRACT,[Ch]:r.FUNC_REVERSE_SUBTRACT};ue[Rh]=r.MIN,ue[Ph]=r.MAX;let Ge={[Ih]:r.ZERO,[Lh]:r.ONE,[Dh]:r.SRC_COLOR,[Nh]:r.SRC_ALPHA,[Gh]:r.SRC_ALPHA_SATURATE,[zh]:r.DST_COLOR,[Oh]:r.DST_ALPHA,[Uh]:r.ONE_MINUS_SRC_COLOR,[Fh]:r.ONE_MINUS_SRC_ALPHA,[kh]:r.ONE_MINUS_DST_COLOR,[Bh]:r.ONE_MINUS_DST_ALPHA,[Vh]:r.CONSTANT_COLOR,[Hh]:r.ONE_MINUS_CONSTANT_COLOR,[Wh]:r.CONSTANT_ALPHA,[Xh]:r.ONE_MINUS_CONSTANT_ALPHA};function R(y,E,N,O,X,K,W,le,ie,j){if(y!==yi){if(d===!1&&(Ie(r.BLEND),d=!0),y===Eh)X=X||E,K=K||N,W=W||O,E===f&&X===g||(r.blendEquationSeparate(ue[E],ue[X]),f=E,g=X),N===v&&O===m&&K===_&&W===x||(r.blendFuncSeparate(Ge[N],Ge[O],Ge[K],Ge[W]),v=N,m=O,_=K,x=W),le.equals(M)!==!1&&ie===w||(r.blendColor(le.r,le.g,le.b,ie),M.copy(le),w=ie),p=y,T=!1;else if(y!==p||j!==T){if(f===Ur&&g===Ur||(r.blendEquation(r.FUNC_ADD),f=Ur,g=Ur),j)switch(y){case Ls:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ul:r.blendFunc(r.ONE,r.ONE);break;case Nl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Fl:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",y)}else switch(y){case Ls:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ul:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Nl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",y)}v=null,m=null,_=null,x=null,M.set(0,0,0),w=0,p=y,T=j}}else d===!0&&(ye(r.BLEND),d=!1)}function S(y){U!==y&&(y?r.frontFace(r.CW):r.frontFace(r.CCW),U=y)}function k(y){y!==bh?(Ie(r.CULL_FACE),y!==B&&(y===Ll?r.cullFace(r.BACK):y===wh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ye(r.CULL_FACE),B=y}function G(y,E,N){y?(Ie(r.POLYGON_OFFSET_FILL),P===E&&F===N||(r.polygonOffset(E,N),P=E,F=N)):ye(r.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:n,stencil:i},enable:Ie,disable:ye,bindFramebuffer:function(y,E){return l[y]!==E&&(r.bindFramebuffer(y,E),l[y]=E,y===r.DRAW_FRAMEBUFFER&&(l[r.FRAMEBUFFER]=E),y===r.FRAMEBUFFER&&(l[r.DRAW_FRAMEBUFFER]=E),!0)},drawBuffers:function(y,E){let N=h,O=!1;if(y){N=c.get(E),N===void 0&&(N=[],c.set(E,N));let X=y.textures;if(N.length!==X.length||N[0]!==r.COLOR_ATTACHMENT0){for(let K=0,W=X.length;K<W;K++)N[K]=r.COLOR_ATTACHMENT0+K;N.length=X.length,O=!0}}else N[0]!==r.BACK&&(N[0]=r.BACK,O=!0);O&&r.drawBuffers(N)},useProgram:function(y){return u!==y&&(r.useProgram(y),u=y,!0)},setBlending:R,setMaterial:function(y,E){y.side===Rt?ye(r.CULL_FACE):Ie(r.CULL_FACE);let N=y.side===Vt;E&&(N=!N),S(N),y.blending===Ls&&y.transparent===!1?R(yi):R(y.blending,y.blendEquation,y.blendSrc,y.blendDst,y.blendEquationAlpha,y.blendSrcAlpha,y.blendDstAlpha,y.blendColor,y.blendAlpha,y.premultipliedAlpha),n.setFunc(y.depthFunc),n.setTest(y.depthTest),n.setMask(y.depthWrite),t.setMask(y.colorWrite);let O=y.stencilWrite;i.setTest(O),O&&(i.setMask(y.stencilWriteMask),i.setFunc(y.stencilFunc,y.stencilRef,y.stencilFuncMask),i.setOp(y.stencilFail,y.stencilZFail,y.stencilZPass)),G(y.polygonOffset,y.polygonOffsetFactor,y.polygonOffsetUnits),y.alphaToCoverage===!0?Ie(r.SAMPLE_ALPHA_TO_COVERAGE):ye(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:S,setCullFace:k,setLineWidth:function(y){y!==L&&(H&&r.lineWidth(y),L=y)},setPolygonOffset:G,setScissorTest:function(y){y?Ie(r.SCISSOR_TEST):ye(r.SCISSOR_TEST)},activeTexture:function(y){y===void 0&&(y=r.TEXTURE0+I-1),V!==y&&(r.activeTexture(y),V=y)},bindTexture:function(y,E,N){N===void 0&&(N=V===null?r.TEXTURE0+I-1:V);let O=ne[N];O===void 0&&(O={type:void 0,texture:void 0},ne[N]=O),O.type===y&&O.texture===E||(V!==N&&(r.activeTexture(N),V=N),r.bindTexture(y,E||Me[y]),O.type=y,O.texture=E)},unbindTexture:function(){let y=ne[V];y!==void 0&&y.type!==void 0&&(r.bindTexture(y.type,null),y.type=void 0,y.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},compressedTexImage3D:function(){try{r.compressedTexImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texImage2D:function(){try{r.texImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texImage3D:function(){try{r.texImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},updateUBOMapping:function(y,E){let N=a.get(E);N===void 0&&(N=new WeakMap,a.set(E,N));let O=N.get(y);O===void 0&&(O=r.getUniformBlockIndex(E,y.name),N.set(y,O))},uniformBlockBinding:function(y,E){let N=a.get(E).get(y);s.get(E)!==N&&(r.uniformBlockBinding(E,N,y.__bindingPointIndex),s.set(E,N))},texStorage2D:function(){try{r.texStorage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texStorage3D:function(){try{r.texStorage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texSubImage2D:function(){try{r.texSubImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},texSubImage3D:function(){try{r.texSubImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D(...arguments)}catch(y){console.error("THREE.WebGLState:",y)}},scissor:function(y){se.equals(y)===!1&&(r.scissor(y.x,y.y,y.z,y.w),se.copy(y))},viewport:function(y){J.equals(y)===!1&&(r.viewport(y.x,y.y,y.z,y.w),J.copy(y))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),n.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),o={},V=null,ne={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,f=null,v=null,m=null,g=null,_=null,x=null,M=new Ne(0,0,0),w=0,T=!1,U=null,B=null,L=null,P=null,F=null,se.set(0,0,r.canvas.width,r.canvas.height),J.set(0,0,r.canvas.width,r.canvas.height),t.reset(),n.reset(),i.reset()}}}function ym(r,e,t,n,i,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new _e,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(R,S){return p?new OffscreenCanvas(R,S):Sr("canvas")}function v(R,S,k){let G=1,y=Ge(R);if((y.width>k||y.height>k)&&(G=k/Math.max(y.width,y.height)),G<1){if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let E=Math.floor(G*y.width),N=Math.floor(G*y.height);u===void 0&&(u=f(E,N));let O=S?f(E,N):u;return O.width=E,O.height=N,O.getContext("2d").drawImage(R,0,0,E,N),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+E+"x"+N+")."),O}return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),R}return R}function m(R){return R.generateMipmaps}function g(R){r.generateMipmap(R)}function _(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(R,S,k,G,y=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let E=S;if(S===r.RED&&(k===r.FLOAT&&(E=r.R32F),k===r.HALF_FLOAT&&(E=r.R16F),k===r.UNSIGNED_BYTE&&(E=r.R8)),S===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(E=r.R8UI),k===r.UNSIGNED_SHORT&&(E=r.R16UI),k===r.UNSIGNED_INT&&(E=r.R32UI),k===r.BYTE&&(E=r.R8I),k===r.SHORT&&(E=r.R16I),k===r.INT&&(E=r.R32I)),S===r.RG&&(k===r.FLOAT&&(E=r.RG32F),k===r.HALF_FLOAT&&(E=r.RG16F),k===r.UNSIGNED_BYTE&&(E=r.RG8)),S===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(E=r.RG8UI),k===r.UNSIGNED_SHORT&&(E=r.RG16UI),k===r.UNSIGNED_INT&&(E=r.RG32UI),k===r.BYTE&&(E=r.RG8I),k===r.SHORT&&(E=r.RG16I),k===r.INT&&(E=r.RG32I)),S===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(E=r.RGB8UI),k===r.UNSIGNED_SHORT&&(E=r.RGB16UI),k===r.UNSIGNED_INT&&(E=r.RGB32UI),k===r.BYTE&&(E=r.RGB8I),k===r.SHORT&&(E=r.RGB16I),k===r.INT&&(E=r.RGB32I)),S===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(E=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(E=r.RGBA16UI),k===r.UNSIGNED_INT&&(E=r.RGBA32UI),k===r.BYTE&&(E=r.RGBA8I),k===r.SHORT&&(E=r.RGBA16I),k===r.INT&&(E=r.RGBA32I)),S===r.RGB&&k===r.UNSIGNED_INT_5_9_9_9_REV&&(E=r.RGB9_E5),S===r.RGBA){let N=y?cs:ht.getTransfer(G);k===r.FLOAT&&(E=r.RGBA32F),k===r.HALF_FLOAT&&(E=r.RGBA16F),k===r.UNSIGNED_BYTE&&(E=N===mt?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(E=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(E=r.RGB5_A1)}return E!==r.R16F&&E!==r.R32F&&E!==r.RG16F&&E!==r.RG32F&&E!==r.RGBA16F&&E!==r.RGBA32F||e.get("EXT_color_buffer_float"),E}function M(R,S){let k;return R?S===null||S===Gi||S===Br?k=r.DEPTH24_STENCIL8:S===Bn?k=r.DEPTH32F_STENCIL8:S===Fr&&(k=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Gi||S===Br?k=r.DEPTH_COMPONENT24:S===Bn?k=r.DEPTH_COMPONENT32F:S===Fr&&(k=r.DEPTH_COMPONENT16),k}function w(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ln&&R.minFilter!==Dn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function T(R){let S=R.target;S.removeEventListener("dispose",T),(function(k){let G=n.get(k);if(G.__webglInit===void 0)return;let y=k.source,E=d.get(y);if(E){let N=E[G.__cacheKey];N.usedTimes--,N.usedTimes===0&&B(k),Object.keys(E).length===0&&d.delete(y)}n.remove(k)})(S),S.isVideoTexture&&h.delete(S)}function U(R){let S=R.target;S.removeEventListener("dispose",U),(function(k){let G=n.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),n.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let E=0;E<6;E++){if(Array.isArray(G.__webglFramebuffer[E]))for(let N=0;N<G.__webglFramebuffer[E].length;N++)r.deleteFramebuffer(G.__webglFramebuffer[E][N]);else r.deleteFramebuffer(G.__webglFramebuffer[E]);G.__webglDepthbuffer&&r.deleteRenderbuffer(G.__webglDepthbuffer[E])}else{if(Array.isArray(G.__webglFramebuffer))for(let E=0;E<G.__webglFramebuffer.length;E++)r.deleteFramebuffer(G.__webglFramebuffer[E]);else r.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&r.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&r.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let E=0;E<G.__webglColorRenderbuffer.length;E++)G.__webglColorRenderbuffer[E]&&r.deleteRenderbuffer(G.__webglColorRenderbuffer[E]);G.__webglDepthRenderbuffer&&r.deleteRenderbuffer(G.__webglDepthRenderbuffer)}let y=k.textures;for(let E=0,N=y.length;E<N;E++){let O=n.get(y[E]);O.__webglTexture&&(r.deleteTexture(O.__webglTexture),a.memory.textures--),n.remove(y[E])}n.remove(k)})(S)}function B(R){let S=n.get(R);r.deleteTexture(S.__webglTexture);let k=R.source;delete d.get(k)[S.__cacheKey],a.memory.textures--}let L=0;function P(R,S){let k=n.get(R);if(R.isVideoTexture&&(function(G){let y=a.render.frame;h.get(G)!==y&&(h.set(G,y),G.update())})(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){let G=R.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(G.complete!==!1)return void ne(k,R,S);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+S)}let F={[yr]:r.REPEAT,[Mr]:r.CLAMP_TO_EDGE,[Ca]:r.MIRRORED_REPEAT},I={[Ln]:r.NEAREST,[tu]:r.NEAREST_MIPMAP_NEAREST,[Ns]:r.NEAREST_MIPMAP_LINEAR,[Dn]:r.LINEAR,[Eo]:r.LINEAR_MIPMAP_NEAREST,[ki]:r.LINEAR_MIPMAP_LINEAR},H={[cu]:r.NEVER,[fu]:r.ALWAYS,[hu]:r.LESS,[gc]:r.LEQUAL,[uu]:r.EQUAL,[mu]:r.GEQUAL,[du]:r.GREATER,[pu]:r.NOTEQUAL};function z(R,S){if(S.type!==Bn||e.has("OES_texture_float_linear")!==!1||S.magFilter!==Dn&&S.magFilter!==Eo&&S.magFilter!==Ns&&S.magFilter!==ki&&S.minFilter!==Dn&&S.minFilter!==Eo&&S.minFilter!==Ns&&S.minFilter!==ki||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,F[S.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,F[S.wrapT]),R!==r.TEXTURE_3D&&R!==r.TEXTURE_2D_ARRAY||r.texParameteri(R,r.TEXTURE_WRAP_R,F[S.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,I[S.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,I[S.minFilter]),S.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,H[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ln||S.minFilter!==Ns&&S.minFilter!==ki||S.type===Bn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function q(R,S){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",T));let G=S.source,y=d.get(G);y===void 0&&(y={},d.set(G,y));let E=(function(N){let O=[];return O.push(N.wrapS),O.push(N.wrapT),O.push(N.wrapR||0),O.push(N.magFilter),O.push(N.minFilter),O.push(N.anisotropy),O.push(N.internalFormat),O.push(N.format),O.push(N.type),O.push(N.generateMipmaps),O.push(N.premultiplyAlpha),O.push(N.flipY),O.push(N.unpackAlignment),O.push(N.colorSpace),O.join()})(S);if(E!==R.__cacheKey){y[E]===void 0&&(y[E]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,k=!0),y[E].usedTimes++;let N=y[R.__cacheKey];N!==void 0&&(y[R.__cacheKey].usedTimes--,N.usedTimes===0&&B(S)),R.__cacheKey=E,R.__webglTexture=y[E].texture}return k}function V(R,S,k){return Math.floor(Math.floor(R/k)/S)}function ne(R,S,k){let G=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(G=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(G=r.TEXTURE_3D);let y=q(R,S),E=S.source;t.bindTexture(G,R.__webglTexture,r.TEXTURE0+k);let N=n.get(E);if(E.version!==N.__version||y===!0){t.activeTexture(r.TEXTURE0+k);let O=ht.getPrimaries(ht.workingColorSpace),X=S.colorSpace===Vi?null:ht.getPrimaries(S.colorSpace),K=S.colorSpace===Vi||O===X?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let W=v(S.image,!1,i.maxTextureSize);W=ue(S,W);let le=s.convert(S.format,S.colorSpace),ie=s.convert(S.type),j,ae=x(S.internalFormat,le,ie,S.colorSpace,S.isVideoTexture);z(G,S);let de=S.mipmaps,be=S.isVideoTexture!==!0,ve=N.__version===void 0||y===!0,we=E.dataReady,Re=w(S,W);if(S.isDepthTexture)ae=M(S.format===Os,S.type),ve&&(be?t.texStorage2D(r.TEXTURE_2D,1,ae,W.width,W.height):t.texImage2D(r.TEXTURE_2D,0,ae,W.width,W.height,0,le,ie,null));else if(S.isDataTexture)if(de.length>0){be&&ve&&t.texStorage2D(r.TEXTURE_2D,Re,ae,de[0].width,de[0].height);for(let pe=0,Ce=de.length;pe<Ce;pe++)j=de[pe],be?we&&t.texSubImage2D(r.TEXTURE_2D,pe,0,0,j.width,j.height,le,ie,j.data):t.texImage2D(r.TEXTURE_2D,pe,ae,j.width,j.height,0,le,ie,j.data);S.generateMipmaps=!1}else be?(ve&&t.texStorage2D(r.TEXTURE_2D,Re,ae,W.width,W.height),we&&(function(pe,Ce,Be,et){let Ae=pe.updateRanges;if(Ae.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ce.width,Ce.height,Be,et,Ce.data);else{Ae.sort((Te,C)=>Te.start-C.start);let ke=0;for(let Te=1;Te<Ae.length;Te++){let C=Ae[ke],ce=Ae[Te],De=C.start+C.count,xe=V(ce.start,Ce.width,4),Oe=V(C.start,Ce.width,4);ce.start<=De+1&&xe===Oe&&V(ce.start+ce.count-1,Ce.width,4)===xe?C.count=Math.max(C.count,ce.start+ce.count-C.start):(++ke,Ae[ke]=ce)}Ae.length=ke+1;let Y=r.getParameter(r.UNPACK_ROW_LENGTH),Se=r.getParameter(r.UNPACK_SKIP_PIXELS),Le=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,Ce.width);for(let Te=0,C=Ae.length;Te<C;Te++){let ce=Ae[Te],De=Math.floor(ce.start/4),xe=Math.ceil(ce.count/4),Oe=De%Ce.width,Qe=Math.floor(De/Ce.width),st=xe;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Oe),r.pixelStorei(r.UNPACK_SKIP_ROWS,Qe),t.texSubImage2D(r.TEXTURE_2D,0,Oe,Qe,st,1,Be,et,Ce.data)}pe.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Y),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Se),r.pixelStorei(r.UNPACK_SKIP_ROWS,Le)}})(S,W,le,ie)):t.texImage2D(r.TEXTURE_2D,0,ae,W.width,W.height,0,le,ie,W.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){be&&ve&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,ae,de[0].width,de[0].height,W.depth);for(let pe=0,Ce=de.length;pe<Ce;pe++)if(j=de[pe],S.format!==Mn)if(le!==null)if(be){if(we)if(S.layerUpdates.size>0){let Be=Sc(j.width,j.height,S.format,S.type);for(let et of S.layerUpdates){let Ae=j.data.subarray(et*Be/j.data.BYTES_PER_ELEMENT,(et+1)*Be/j.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,et,j.width,j.height,1,le,Ae)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,j.width,j.height,W.depth,le,j.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,pe,ae,j.width,j.height,W.depth,0,j.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else be?we&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,pe,0,0,0,j.width,j.height,W.depth,le,ie,j.data):t.texImage3D(r.TEXTURE_2D_ARRAY,pe,ae,j.width,j.height,W.depth,0,le,ie,j.data)}else{be&&ve&&t.texStorage2D(r.TEXTURE_2D,Re,ae,de[0].width,de[0].height);for(let pe=0,Ce=de.length;pe<Ce;pe++)j=de[pe],S.format!==Mn?le!==null?be?we&&t.compressedTexSubImage2D(r.TEXTURE_2D,pe,0,0,j.width,j.height,le,j.data):t.compressedTexImage2D(r.TEXTURE_2D,pe,ae,j.width,j.height,0,j.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?we&&t.texSubImage2D(r.TEXTURE_2D,pe,0,0,j.width,j.height,le,ie,j.data):t.texImage2D(r.TEXTURE_2D,pe,ae,j.width,j.height,0,le,ie,j.data)}else if(S.isDataArrayTexture)if(be){if(ve&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,ae,W.width,W.height,W.depth),we)if(S.layerUpdates.size>0){let pe=Sc(W.width,W.height,S.format,S.type);for(let Ce of S.layerUpdates){let Be=W.data.subarray(Ce*pe/W.data.BYTES_PER_ELEMENT,(Ce+1)*pe/W.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ce,W.width,W.height,1,le,ie,Be)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,le,ie,W.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ae,W.width,W.height,W.depth,0,le,ie,W.data);else if(S.isData3DTexture)be?(ve&&t.texStorage3D(r.TEXTURE_3D,Re,ae,W.width,W.height,W.depth),we&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,le,ie,W.data)):t.texImage3D(r.TEXTURE_3D,0,ae,W.width,W.height,W.depth,0,le,ie,W.data);else if(S.isFramebufferTexture){if(ve)if(be)t.texStorage2D(r.TEXTURE_2D,Re,ae,W.width,W.height);else{let pe=W.width,Ce=W.height;for(let Be=0;Be<Re;Be++)t.texImage2D(r.TEXTURE_2D,Be,ae,pe,Ce,0,le,ie,null),pe>>=1,Ce>>=1}}else if(de.length>0){if(be&&ve){let pe=Ge(de[0]);t.texStorage2D(r.TEXTURE_2D,Re,ae,pe.width,pe.height)}for(let pe=0,Ce=de.length;pe<Ce;pe++)j=de[pe],be?we&&t.texSubImage2D(r.TEXTURE_2D,pe,0,0,le,ie,j):t.texImage2D(r.TEXTURE_2D,pe,ae,le,ie,j);S.generateMipmaps=!1}else if(be){if(ve){let pe=Ge(W);t.texStorage2D(r.TEXTURE_2D,Re,ae,pe.width,pe.height)}we&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,le,ie,W)}else t.texImage2D(r.TEXTURE_2D,0,ae,le,ie,W);m(S)&&g(G),N.__version=E.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ee(R,S,k,G,y,E){let N=s.convert(k.format,k.colorSpace),O=s.convert(k.type),X=x(k.internalFormat,N,O,k.colorSpace),K=n.get(S),W=n.get(k);if(W.__renderTarget=S,!K.__hasExternalTextures){let le=Math.max(1,S.width>>E),ie=Math.max(1,S.height>>E);y===r.TEXTURE_3D||y===r.TEXTURE_2D_ARRAY?t.texImage3D(y,E,X,le,ie,S.depth,0,N,O,null):t.texImage2D(y,E,X,le,ie,0,N,O,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),ye(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,G,y,W.__webglTexture,0,Ie(S)):(y===r.TEXTURE_2D||y>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&y<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,G,y,W.__webglTexture,E),t.bindFramebuffer(r.FRAMEBUFFER,null)}function re(R,S,k){if(r.bindRenderbuffer(r.RENDERBUFFER,R),S.depthBuffer){let G=S.depthTexture,y=G&&G.isDepthTexture?G.type:null,E=M(S.stencilBuffer,y),N=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,O=Ie(S);ye(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,O,E,S.width,S.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,O,E,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,E,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,N,r.RENDERBUFFER,R)}else{let G=S.textures;for(let y=0;y<G.length;y++){let E=G[y],N=s.convert(E.format,E.colorSpace),O=s.convert(E.type),X=x(E.internalFormat,N,O,E.colorSpace),K=Ie(S);k&&ye(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,K,X,S.width,S.height):ye(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,K,X,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,X,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function se(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!S.depthTexture||!S.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let k=n.get(S.depthTexture);k.__renderTarget=S,k.__webglTexture&&S.depthTexture.image.width===S.width&&S.depthTexture.image.height===S.height||(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),P(S.depthTexture,0);let G=k.__webglTexture,y=Ie(S);if(S.depthTexture.format===Fs)ye(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,G,0,y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,G,0);else{if(S.depthTexture.format!==Os)throw new Error("Unknown depthTexture format");ye(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,G,0,y):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,G,0)}}function J(R){let S=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){let G=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),G){let y=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,G.removeEventListener("dispose",y)};G.addEventListener("dispose",y),S.__depthDisposeCallback=y}S.__boundDepthTexture=G}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");let G=R.texture.mipmaps;G&&G.length>0?se(S.__webglFramebuffer[0],R):se(S.__webglFramebuffer,R)}else if(k){S.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[G]),S.__webglDepthbuffer[G]===void 0)S.__webglDepthbuffer[G]=r.createRenderbuffer(),re(S.__webglDepthbuffer[G],R,!1);else{let y=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,E=S.__webglDepthbuffer[G];r.bindRenderbuffer(r.RENDERBUFFER,E),r.framebufferRenderbuffer(r.FRAMEBUFFER,y,r.RENDERBUFFER,E)}}else{let G=R.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),re(S.__webglDepthbuffer,R,!1);else{let y=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,E=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,E),r.framebufferRenderbuffer(r.FRAMEBUFFER,y,r.RENDERBUFFER,E)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}let oe=[],Me=[];function Ie(R){return Math.min(i.maxSamples,R.samples)}function ye(R){let S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ue(R,S){let k=R.colorSpace,G=R.format,y=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==Ii&&k!==Vi&&(ht.getTransfer(k)===mt?G===Mn&&y===On||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function Ge(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=function(){let R=L;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),L+=1,R},this.resetTextureUnits=function(){L=0},this.setTexture2D=P,this.setTexture2DArray=function(R,S){let k=n.get(R);R.version>0&&k.__version!==R.version?ne(k,R,S):t.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+S)},this.setTexture3D=function(R,S){let k=n.get(R);R.version>0&&k.__version!==R.version?ne(k,R,S):t.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+S)},this.setTextureCube=function(R,S){let k=n.get(R);R.version>0&&k.__version!==R.version?(function(G,y,E){if(y.image.length!==6)return;let N=q(G,y),O=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+E);let X=n.get(O);if(O.version!==X.__version||N===!0){t.activeTexture(r.TEXTURE0+E);let K=ht.getPrimaries(ht.workingColorSpace),W=y.colorSpace===Vi?null:ht.getPrimaries(y.colorSpace),le=y.colorSpace===Vi||K===W?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let ie=y.isCompressedTexture||y.image[0].isCompressedTexture,j=y.image[0]&&y.image[0].isDataTexture,ae=[];for(let Ae=0;Ae<6;Ae++)ae[Ae]=ie||j?j?y.image[Ae].image:y.image[Ae]:v(y.image[Ae],!0,i.maxCubemapSize),ae[Ae]=ue(y,ae[Ae]);let de=ae[0],be=s.convert(y.format,y.colorSpace),ve=s.convert(y.type),we=x(y.internalFormat,be,ve,y.colorSpace),Re=y.isVideoTexture!==!0,pe=X.__version===void 0||N===!0,Ce=O.dataReady,Be,et=w(y,de);if(z(r.TEXTURE_CUBE_MAP,y),ie){Re&&pe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,et,we,de.width,de.height);for(let Ae=0;Ae<6;Ae++){Be=ae[Ae].mipmaps;for(let ke=0;ke<Be.length;ke++){let Y=Be[ke];y.format!==Mn?be!==null?Re?Ce&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,ke,0,0,Y.width,Y.height,be,Y.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,ke,we,Y.width,Y.height,0,Y.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?Ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,ke,0,0,Y.width,Y.height,be,ve,Y.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,ke,we,Y.width,Y.height,0,be,ve,Y.data)}}}else{if(Be=y.mipmaps,Re&&pe){Be.length>0&&et++;let Ae=Ge(ae[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,et,we,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(j){Re?Ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,ae[Ae].width,ae[Ae].height,be,ve,ae[Ae].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,we,ae[Ae].width,ae[Ae].height,0,be,ve,ae[Ae].data);for(let ke=0;ke<Be.length;ke++){let Y=Be[ke].image[Ae].image;Re?Ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,ke+1,0,0,Y.width,Y.height,be,ve,Y.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,ke+1,we,Y.width,Y.height,0,be,ve,Y.data)}}else{Re?Ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,be,ve,ae[Ae]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,we,be,ve,ae[Ae]);for(let ke=0;ke<Be.length;ke++){let Y=Be[ke];Re?Ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,ke+1,0,0,be,ve,Y.image[Ae]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,ke+1,we,be,ve,Y.image[Ae])}}}m(y)&&g(r.TEXTURE_CUBE_MAP),X.__version=O.version,y.onUpdate&&y.onUpdate(y)}G.__version=y.version})(k,R,S):t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+S)},this.rebindTextures=function(R,S,k){let G=n.get(R);S!==void 0&&ee(G.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&J(R)},this.setupRenderTarget=function(R){let S=R.texture,k=n.get(R),G=n.get(S);R.addEventListener("dispose",U);let y=R.textures,E=R.isWebGLCubeRenderTarget===!0,N=y.length>1;if(N||(G.__webglTexture===void 0&&(G.__webglTexture=r.createTexture()),G.__version=S.version,a.memory.textures++),E){k.__webglFramebuffer=[];for(let O=0;O<6;O++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[O]=[];for(let X=0;X<S.mipmaps.length;X++)k.__webglFramebuffer[O][X]=r.createFramebuffer()}else k.__webglFramebuffer[O]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let O=0;O<S.mipmaps.length;O++)k.__webglFramebuffer[O]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(N)for(let O=0,X=y.length;O<X;O++){let K=n.get(y[O]);K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&ye(R)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let O=0;O<y.length;O++){let X=y[O];k.__webglColorRenderbuffer[O]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[O]);let K=s.convert(X.format,X.colorSpace),W=s.convert(X.type),le=x(X.internalFormat,K,W,X.colorSpace,R.isXRRenderTarget===!0),ie=Ie(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,le,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+O,r.RENDERBUFFER,k.__webglColorRenderbuffer[O])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),re(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(E){t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture),z(r.TEXTURE_CUBE_MAP,S);for(let O=0;O<6;O++)if(S.mipmaps&&S.mipmaps.length>0)for(let X=0;X<S.mipmaps.length;X++)ee(k.__webglFramebuffer[O][X],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+O,X);else ee(k.__webglFramebuffer[O],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+O,0);m(S)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(N){for(let O=0,X=y.length;O<X;O++){let K=y[O],W=n.get(K);t.bindTexture(r.TEXTURE_2D,W.__webglTexture),z(r.TEXTURE_2D,K),ee(k.__webglFramebuffer,R,K,r.COLOR_ATTACHMENT0+O,r.TEXTURE_2D,0),m(K)&&g(r.TEXTURE_2D)}t.unbindTexture()}else{let O=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(O=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(O,G.__webglTexture),z(O,S),S.mipmaps&&S.mipmaps.length>0)for(let X=0;X<S.mipmaps.length;X++)ee(k.__webglFramebuffer[X],R,S,r.COLOR_ATTACHMENT0,O,X);else ee(k.__webglFramebuffer,R,S,r.COLOR_ATTACHMENT0,O,0);m(S)&&g(O),t.unbindTexture()}R.depthBuffer&&J(R)},this.updateRenderTargetMipmap=function(R){let S=R.textures;for(let k=0,G=S.length;k<G;k++){let y=S[k];if(m(y)){let E=_(R),N=n.get(y).__webglTexture;t.bindTexture(E,N),g(E),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(R){if(R.samples>0){if(ye(R)===!1){let S=R.textures,k=R.width,G=R.height,y=r.COLOR_BUFFER_BIT,E=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,N=n.get(R),O=S.length>1;if(O)for(let K=0;K<S.length;K++)t.bindFramebuffer(r.FRAMEBUFFER,N.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+K,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,N.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+K,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,N.__webglMultisampledFramebuffer);let X=R.texture.mipmaps;X&&X.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,N.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,N.__webglFramebuffer);for(let K=0;K<S.length;K++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(y|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(y|=r.STENCIL_BUFFER_BIT)),O){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,N.__webglColorRenderbuffer[K]);let W=n.get(S[K]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,W,0)}r.blitFramebuffer(0,0,k,G,0,0,k,G,y,r.NEAREST),l===!0&&(oe.length=0,Me.length=0,oe.push(r.COLOR_ATTACHMENT0+K),R.depthBuffer&&R.resolveDepthBuffer===!1&&(oe.push(E),Me.push(E),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Me)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,oe))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),O)for(let K=0;K<S.length;K++){t.bindFramebuffer(r.FRAMEBUFFER,N.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+K,r.RENDERBUFFER,N.__webglColorRenderbuffer[K]);let W=n.get(S[K]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,N.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+K,r.TEXTURE_2D,W,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,N.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let S=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}},this.setupDepthRenderbuffer=J,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=ye}function Mm(r,e){return{convert:function(t,n=Vi){let i,s=ht.getTransfer(n);if(t===On)return r.UNSIGNED_BYTE;if(t===Co)return r.UNSIGNED_SHORT_4_4_4_4;if(t===Ro)return r.UNSIGNED_SHORT_5_5_5_1;if(t===kl)return r.UNSIGNED_INT_5_9_9_9_REV;if(t===Bl)return r.BYTE;if(t===zl)return r.SHORT;if(t===Fr)return r.UNSIGNED_SHORT;if(t===Ao)return r.INT;if(t===Gi)return r.UNSIGNED_INT;if(t===Bn)return r.FLOAT;if(t===Or)return r.HALF_FLOAT;if(t===nu)return r.ALPHA;if(t===iu)return r.RGB;if(t===Mn)return r.RGBA;if(t===Fs)return r.DEPTH_COMPONENT;if(t===Os)return r.DEPTH_STENCIL;if(t===Gl)return r.RED;if(t===Po)return r.RED_INTEGER;if(t===ru)return r.RG;if(t===Vl)return r.RG_INTEGER;if(t===Hl)return r.RGBA_INTEGER;if(t===Io||t===Lo||t===Do||t===Uo)if(s===mt){if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i===null)return null;if(t===Io)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===Lo)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===Do)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Uo)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(i=e.get("WEBGL_compressed_texture_s3tc"),i===null)return null;if(t===Io)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===Lo)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===Do)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Uo)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===Wl||t===Xl||t===$l||t===jl){if(i=e.get("WEBGL_compressed_texture_pvrtc"),i===null)return null;if(t===Wl)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===Xl)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===$l)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===jl)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===ql||t===Yl||t===Zl){if(i=e.get("WEBGL_compressed_texture_etc"),i===null)return null;if(t===ql||t===Yl)return s===mt?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(t===Zl)return s===mt?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}if(t===Jl||t===Kl||t===Ql||t===ec||t===tc||t===nc||t===ic||t===rc||t===sc||t===ac||t===oc||t===lc||t===cc||t===hc){if(i=e.get("WEBGL_compressed_texture_astc"),i===null)return null;if(t===Jl)return s===mt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===Kl)return s===mt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===Ql)return s===mt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===ec)return s===mt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===tc)return s===mt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===nc)return s===mt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===ic)return s===mt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===rc)return s===mt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===sc)return s===mt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===ac)return s===mt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===oc)return s===mt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===lc)return s===mt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===cc)return s===mt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===hc)return s===mt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===No||t===uc||t===dc){if(i=e.get("EXT_texture_compression_bptc"),i===null)return null;if(t===No)return s===mt?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===uc)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===dc)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===su||t===pc||t===mc||t===fc){if(i=e.get("EXT_texture_compression_rgtc"),i===null)return null;if(t===No)return i.COMPRESSED_RED_RGTC1_EXT;if(t===pc)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===mc)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===fc)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===Br?r.UNSIGNED_INT_24_8:r[t]!==void 0?r[t]:null}}}var Nc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new qt;e.properties.get(i).__webglTexture=t.texture,t.depthNear===n.depthNear&&t.depthFar===n.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new xn({vertexShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ye(new Nn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Fc=class extends Kn{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,f=null,v=new Nc,m=t.getContextAttributes(),g=null,_=null,x=[],M=[],w=new _e,T=null,U=new kt;U.viewport=new xt;let B=new kt;B.viewport=new xt;let L=[U,B],P=new fo,F=null,I=null;function H(J){let oe=M.indexOf(J.inputSource);if(oe===-1)return;let Me=x[oe];Me!==void 0&&(Me.update(J.inputSource,J.frame,c||a),Me.dispatchEvent({type:J.type,data:J.inputSource}))}function z(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",q);for(let J=0;J<x.length;J++){let oe=M[J];oe!==null&&(M[J]=null,x[J].disconnect(oe))}F=null,I=null,v.reset(),e.setRenderTarget(g),p=null,d=null,u=null,i=null,_=null,se.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}function q(J){for(let oe=0;oe<J.removed.length;oe++){let Me=J.removed[oe],Ie=M.indexOf(Me);Ie>=0&&(M[Ie]=null,x[Ie].disconnect(Me))}for(let oe=0;oe<J.added.length;oe++){let Me=J.added[oe],Ie=M.indexOf(Me);if(Ie===-1){for(let ue=0;ue<x.length;ue++){if(ue>=M.length){M.push(Me),Ie=ue;break}if(M[ue]===null){M[ue]=Me,Ie=ue;break}}if(Ie===-1)break}let ye=x[Ie];ye&&ye.connect(Me)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let oe=x[J];return oe===void 0&&(oe=new Tr,x[J]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(J){let oe=x[J];return oe===void 0&&(oe=new Tr,x[J]=oe),oe.getGripSpace()},this.getHand=function(J){let oe=x[J];return oe===void 0&&(oe=new Tr,x[J]=oe),oe.getHandSpace()},this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",z),i.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Me=null,Ie=null;m.depth&&(Ie=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=m.stencil?Os:Fs,Me=m.stencil?Br:Gi);let ye={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(ye),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Un(d.textureWidth,d.textureHeight,{format:Mn,type:On,depthTexture:new _s(d.textureWidth,d.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let oe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,oe),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Un(p.framebufferWidth,p.framebufferHeight,{format:Mn,type:On,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),se.setContext(i),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};let V=new A,ne=new A;function ee(J,oe){oe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(oe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let oe=J.near,Me=J.far;v.texture!==null&&(v.depthNear>0&&(oe=v.depthNear),v.depthFar>0&&(Me=v.depthFar)),P.near=B.near=U.near=oe,P.far=B.far=U.far=Me,F===P.near&&I===P.far||(i.updateRenderState({depthNear:P.near,depthFar:P.far}),F=P.near,I=P.far),U.layers.mask=2|J.layers.mask,B.layers.mask=4|J.layers.mask,P.layers.mask=U.layers.mask|B.layers.mask;let Ie=J.parent,ye=P.cameras;ee(P,Ie);for(let ue=0;ue<ye.length;ue++)ee(ye[ue],Ie);ye.length===2?(function(ue,Ge,R){V.setFromMatrixPosition(Ge.matrixWorld),ne.setFromMatrixPosition(R.matrixWorld);let S=V.distanceTo(ne),k=Ge.projectionMatrix.elements,G=R.projectionMatrix.elements,y=k[14]/(k[10]-1),E=k[14]/(k[10]+1),N=(k[9]+1)/k[5],O=(k[9]-1)/k[5],X=(k[8]-1)/k[0],K=(G[8]+1)/G[0],W=y*X,le=y*K,ie=S/(-X+K),j=ie*-X;if(Ge.matrixWorld.decompose(ue.position,ue.quaternion,ue.scale),ue.translateX(j),ue.translateZ(ie),ue.matrixWorld.compose(ue.position,ue.quaternion,ue.scale),ue.matrixWorldInverse.copy(ue.matrixWorld).invert(),k[10]===-1)ue.projectionMatrix.copy(Ge.projectionMatrix),ue.projectionMatrixInverse.copy(Ge.projectionMatrixInverse);else{let ae=y+ie,de=E+ie,be=W-j,ve=le+(S-j),we=N*E/de*ae,Re=O*E/de*ae;ue.projectionMatrix.makePerspective(be,ve,we,Re,ae,de),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert()}})(P,U,B):P.projectionMatrix.copy(U.projectionMatrix),(function(ue,Ge,R){R===null?ue.matrix.copy(Ge.matrixWorld):(ue.matrix.copy(R.matrixWorld),ue.matrix.invert(),ue.matrix.multiply(Ge.matrixWorld)),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.updateMatrixWorld(!0),ue.projectionMatrix.copy(Ge.projectionMatrix),ue.projectionMatrixInverse.copy(Ge.projectionMatrixInverse),ue.isPerspectiveCamera&&(ue.fov=2*Ia*Math.atan(1/ue.projectionMatrix.elements[5]),ue.zoom=1)})(J,P,Ie)},this.getCamera=function(){return P},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(P)};let re=null,se=new Zu;se.setAnimationLoop(function(J,oe){if(h=oe.getViewerPose(c||a),f=oe,h!==null){let Me=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let Ie=!1;Me.length!==P.cameras.length&&(P.cameras.length=0,Ie=!0);for(let ue=0;ue<Me.length;ue++){let Ge=Me[ue],R=null;if(p!==null)R=p.getViewport(Ge);else{let k=u.getViewSubImage(d,Ge);R=k.viewport,ue===0&&(e.setRenderTargetTextures(_,k.colorTexture,k.depthStencilTexture),e.setRenderTarget(_))}let S=L[ue];S===void 0&&(S=new kt,S.layers.enable(ue),S.viewport=new xt,L[ue]=S),S.matrix.fromArray(Ge.transform.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale),S.projectionMatrix.fromArray(Ge.projectionMatrix),S.projectionMatrixInverse.copy(S.projectionMatrix).invert(),S.viewport.set(R.x,R.y,R.width,R.height),ue===0&&(P.matrix.copy(S.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Ie===!0&&P.cameras.push(S)}let ye=i.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){let ue=u.getDepthInformation(Me[0]);ue&&ue.isValid&&ue.texture&&v.init(e,ue,i.renderState)}}for(let Me=0;Me<x.length;Me++){let Ie=M[Me],ye=x[Me];Ie!==null&&ye!==void 0&&ye.update(Ie,oe,c||a)}re&&re(J,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),f=null}),this.setAnimationLoop=function(J){re=J},this.dispose=function(){}}},Xi=new _n,Sm=new nt;function bm(r,e){function t(i,s){i.matrixAutoUpdate===!0&&i.updateMatrix(),s.value.copy(i.matrix)}function n(i,s){i.opacity.value=s.opacity,s.color&&i.diffuse.value.copy(s.color),s.emissive&&i.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(i.map.value=s.map,t(s.map,i.mapTransform)),s.alphaMap&&(i.alphaMap.value=s.alphaMap,t(s.alphaMap,i.alphaMapTransform)),s.bumpMap&&(i.bumpMap.value=s.bumpMap,t(s.bumpMap,i.bumpMapTransform),i.bumpScale.value=s.bumpScale,s.side===Vt&&(i.bumpScale.value*=-1)),s.normalMap&&(i.normalMap.value=s.normalMap,t(s.normalMap,i.normalMapTransform),i.normalScale.value.copy(s.normalScale),s.side===Vt&&i.normalScale.value.negate()),s.displacementMap&&(i.displacementMap.value=s.displacementMap,t(s.displacementMap,i.displacementMapTransform),i.displacementScale.value=s.displacementScale,i.displacementBias.value=s.displacementBias),s.emissiveMap&&(i.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,i.emissiveMapTransform)),s.specularMap&&(i.specularMap.value=s.specularMap,t(s.specularMap,i.specularMapTransform)),s.alphaTest>0&&(i.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,l=a.envMapRotation;o&&(i.envMap.value=o,Xi.copy(l),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),i.envMapRotation.value.setFromMatrix4(Sm.makeRotationFromEuler(Xi)),i.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,i.reflectivity.value=s.reflectivity,i.ior.value=s.ior,i.refractionRatio.value=s.refractionRatio),s.lightMap&&(i.lightMap.value=s.lightMap,i.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,i.lightMapTransform)),s.aoMap&&(i.aoMap.value=s.aoMap,i.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,i.aoMapTransform))}return{refreshFogUniforms:function(i,s){s.color.getRGB(i.fogColor.value,xc(r)),s.isFog?(i.fogNear.value=s.near,i.fogFar.value=s.far):s.isFogExp2&&(i.fogDensity.value=s.density)},refreshMaterialUniforms:function(i,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(i,s):s.isMeshToonMaterial?(n(i,s),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(i,s)):s.isMeshPhongMaterial?(n(i,s),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(i,s)):s.isMeshStandardMaterial?(n(i,s),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(i,s),s.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Vt&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(i,s,l)):s.isMeshMatcapMaterial?(n(i,s),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(i,s)):s.isMeshDepthMaterial?n(i,s):s.isMeshDistanceMaterial?(n(i,s),(function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(i,s)):s.isMeshNormalMaterial?n(i,s):s.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(i,s),s.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(i,s)):s.isPointsMaterial?(function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(i,s,a,o):s.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(i,s):s.isShadowMaterial?(i.color.value.copy(s.color),i.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function wm(r,e,t,n){let i={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(u,d,p,f){let v=u.value,m=d+"_"+p;if(f[m]===void 0)return f[m]=typeof v=="number"||typeof v=="boolean"?v:v.clone(),!0;{let g=f[m];if(typeof v=="number"||typeof v=="boolean"){if(g!==v)return f[m]=v,!0}else if(g.equals(v)===!1)return g.copy(v),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(i[d.id]),delete i[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;n.uniformBlockBinding(u,p)},update:function(u,d){let p=i[u.id];p===void 0&&((function(m){let g=m.uniforms,_=0,x=16;for(let w=0,T=g.length;w<T;w++){let U=Array.isArray(g[w])?g[w]:[g[w]];for(let B=0,L=U.length;B<L;B++){let P=U[B],F=Array.isArray(P.value)?P.value:[P.value];for(let I=0,H=F.length;I<H;I++){let z=c(F[I]),q=_%x,V=q%z.boundary,ne=q+V;_+=V,ne!==0&&x-ne<z.storage&&(_+=x-ne),P.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=_,_+=z.storage}}}let M=_%x;M>0&&(_+=x-M),m.__size=_,m.__cache={}})(u),p=(function(m){let g=(function(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();m.__bindingPointIndex=g;let _=r.createBuffer(),x=m.__size,M=m.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,x,M),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,g,_),_})(u),i[u.id]=p,u.addEventListener("dispose",h));let f=d.program;n.updateUBOMapping(u,f);let v=e.render.frame;s[u.id]!==v&&((function(m){let g=i[m.id],_=m.uniforms,x=m.__cache;r.bindBuffer(r.UNIFORM_BUFFER,g);for(let M=0,w=_.length;M<w;M++){let T=Array.isArray(_[M])?_[M]:[_[M]];for(let U=0,B=T.length;U<B;U++){let L=T[U];if(l(L,M,U,x)===!0){let P=L.__offset,F=Array.isArray(L.value)?L.value:[L.value],I=0;for(let H=0;H<F.length;H++){let z=F[H],q=c(z);typeof z=="number"||typeof z=="boolean"?(L.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,P+I,L.__data)):z.isMatrix3?(L.__data[0]=z.elements[0],L.__data[1]=z.elements[1],L.__data[2]=z.elements[2],L.__data[3]=0,L.__data[4]=z.elements[3],L.__data[5]=z.elements[4],L.__data[6]=z.elements[5],L.__data[7]=0,L.__data[8]=z.elements[6],L.__data[9]=z.elements[7],L.__data[10]=z.elements[8],L.__data[11]=0):(z.toArray(L.__data,I),I+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,P,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)})(u),s[u.id]=v)},dispose:function(){for(let u in i)r.deleteBuffer(i[u]);a=[],i={},s={}}}}var zo=class{constructor(e={}){let{canvas:t=gu(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e,p;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let f=new Uint32Array(4),v=new Int32Array(4),m=null,g=null,_=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,w=!1;this._outputColorSpace=Ut;let T=0,U=0,B=null,L=-1,P=null,F=new xt,I=new xt,H=null,z=new Ne(0),q=0,V=t.width,ne=t.height,ee=1,re=null,se=null,J=new xt(0,0,V,ne),oe=new xt(0,0,V,ne),Me=!1,Ie=new fi,ye=!1,ue=!1,Ge=new nt,R=new nt,S=new A,k=new xt,G={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},y=!1;function E(){return B===null?ee:1}let N,O,X,K,W,le,ie,j,ae,de,be,ve,we,Re,pe,Ce,Be,et,Ae,ke,Y,Se,Le,Te,C=n;function ce(b,Z){return t.getContext(b,Z)}try{let b={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"178"}`),t.addEventListener("webglcontextlost",Oe,!1),t.addEventListener("webglcontextrestored",Qe,!1),t.addEventListener("webglcontextcreationerror",st,!1),C===null){let Z="webgl2";if(C=ce(Z,b),C===null)throw ce(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}function De(){N=new ap(C),N.init(),Se=new Mm(C,N),O=new tp(C,N,e,Se),X=new xm(C,N),O.reverseDepthBuffer&&d&&X.buffers.depth.setReversed(!0),K=new cp(C),W=new cm,le=new ym(C,N,X,W,O,Se,K),ie=new ip(M),j=new sp(M),ae=new Zd(C),Le=new Qd(C,ae),de=new op(C,ae,K,Le),be=new up(C,de,ae,K),Ae=new hp(C,O,le),Ce=new np(W),ve=new lm(M,ie,j,N,O,Le,Ce),we=new bm(M,W),Re=new um,pe=new gm(N),et=new Kd(M,ie,j,X,be,p,l),Be=new vm(M,be,O),Te=new wm(C,K,O,X),ke=new ep(C,N,K),Y=new lp(C,N,K),K.programs=ve.programs,M.capabilities=O,M.extensions=N,M.properties=W,M.renderLists=Re,M.shadowMap=Be,M.state=X,M.info=K}De();let xe=new Fc(M,C);function Oe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Qe(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let b=K.autoReset,Z=Be.enabled,te=Be.autoUpdate,he=Be.needsUpdate,Q=Be.type;De(),K.autoReset=b,Be.enabled=Z,Be.autoUpdate=te,Be.needsUpdate=he,Be.type=Q}function st(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ut(b){let Z=b.target;Z.removeEventListener("dispose",ut),(function(te){(function(he){let Q=W.get(he).programs;Q!==void 0&&(Q.forEach(function(ge){ve.releaseProgram(ge)}),he.isShaderMaterial&&ve.releaseShaderCache(he))})(te),W.remove(te)})(Z)}function dt(b,Z,te){b.transparent===!0&&b.side===Rt&&b.forceSinglePass===!1?(b.side=Vt,b.needsUpdate=!0,bi(b,Z,te),b.side=xi,b.needsUpdate=!0,bi(b,Z,te),b.side=Rt):bi(b,Z,te)}this.xr=xe,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let b=N.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=N.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(b){b!==void 0&&(ee=b,this.setSize(V,ne,!1))},this.getSize=function(b){return b.set(V,ne)},this.setSize=function(b,Z,te=!0){xe.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(V=b,ne=Z,t.width=Math.floor(b*ee),t.height=Math.floor(Z*ee),te===!0&&(t.style.width=b+"px",t.style.height=Z+"px"),this.setViewport(0,0,b,Z))},this.getDrawingBufferSize=function(b){return b.set(V*ee,ne*ee).floor()},this.setDrawingBufferSize=function(b,Z,te){V=b,ne=Z,ee=te,t.width=Math.floor(b*te),t.height=Math.floor(Z*te),this.setViewport(0,0,b,Z)},this.getCurrentViewport=function(b){return b.copy(F)},this.getViewport=function(b){return b.copy(J)},this.setViewport=function(b,Z,te,he){b.isVector4?J.set(b.x,b.y,b.z,b.w):J.set(b,Z,te,he),X.viewport(F.copy(J).multiplyScalar(ee).round())},this.getScissor=function(b){return b.copy(oe)},this.setScissor=function(b,Z,te,he){b.isVector4?oe.set(b.x,b.y,b.z,b.w):oe.set(b,Z,te,he),X.scissor(I.copy(oe).multiplyScalar(ee).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(b){X.setScissorTest(Me=b)},this.setOpaqueSort=function(b){re=b},this.setTransparentSort=function(b){se=b},this.getClearColor=function(b){return b.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(b=!0,Z=!0,te=!0){let he=0;if(b){let Q=!1;if(B!==null){let ge=B.texture.format;Q=ge===Hl||ge===Vl||ge===Po}if(Q){let ge=B.texture.type,Ue=ge===On||ge===Gi||ge===Fr||ge===Br||ge===Co||ge===Ro,Fe=et.getClearColor(),Ve=et.getClearAlpha(),Je=Fe.r,je=Fe.g,$=Fe.b;Ue?(f[0]=Je,f[1]=je,f[2]=$,f[3]=Ve,C.clearBufferuiv(C.COLOR,0,f)):(v[0]=Je,v[1]=je,v[2]=$,v[3]=Ve,C.clearBufferiv(C.COLOR,0,v))}else he|=C.COLOR_BUFFER_BIT}Z&&(he|=C.DEPTH_BUFFER_BIT),te&&(he|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",st,!1),et.dispose(),Re.dispose(),pe.dispose(),W.dispose(),ie.dispose(),j.dispose(),be.dispose(),Le.dispose(),Te.dispose(),ve.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",Dt),xe.removeEventListener("sessionend",Sn),Yt.stop()},this.renderBufferDirect=function(b,Z,te,he,Q,ge){Z===null&&(Z=G);let Ue=Q.isMesh&&Q.matrixWorld.determinant()<0,Fe=(function(ze,qe,pt,He,We){qe.isScene!==!0&&(qe=G),le.resetTextureUnits();let bt=qe.fog,Hn=He.isMeshStandardMaterial?qe.environment:null,Kt=B===null?M.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Ii,on=(He.isMeshStandardMaterial?j:ie).get(He.envMap||Hn),Ft=He.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,Wt=!!pt.attributes.tangent&&(!!He.normalMap||He.anisotropy>0),Et=!!pt.morphAttributes.position,hn=!!pt.morphAttributes.normal,si=!!pt.morphAttributes.color,Xs=ni;He.toneMapped&&(B!==null&&B.isXRRenderTarget!==!0||(Xs=M.toneMapping));let $s=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,$r=$s!==void 0?$s.length:0,at=W.get(He),jr=g.state.lights;if(ye===!0&&(ue===!0||ze!==P)){let Ot=ze===P&&He.id===L;Ce.setState(He,ze,Ot)}let Xt=!1;He.version===at.__version?at.needsLights&&at.lightsStateVersion!==jr.state.version||at.outputColorSpace!==Kt||We.isBatchedMesh&&at.batching===!1?Xt=!0:We.isBatchedMesh||at.batching!==!0?We.isBatchedMesh&&at.batchingColor===!0&&We.colorTexture===null||We.isBatchedMesh&&at.batchingColor===!1&&We.colorTexture!==null||We.isInstancedMesh&&at.instancing===!1?Xt=!0:We.isInstancedMesh||at.instancing!==!0?We.isSkinnedMesh&&at.skinning===!1?Xt=!0:We.isSkinnedMesh||at.skinning!==!0?We.isInstancedMesh&&at.instancingColor===!0&&We.instanceColor===null||We.isInstancedMesh&&at.instancingColor===!1&&We.instanceColor!==null||We.isInstancedMesh&&at.instancingMorph===!0&&We.morphTexture===null||We.isInstancedMesh&&at.instancingMorph===!1&&We.morphTexture!==null||at.envMap!==on||He.fog===!0&&at.fog!==bt?Xt=!0:at.numClippingPlanes===void 0||at.numClippingPlanes===Ce.numPlanes&&at.numIntersection===Ce.numIntersection?(at.vertexAlphas!==Ft||at.vertexTangents!==Wt||at.morphTargets!==Et||at.morphNormals!==hn||at.morphColors!==si||at.toneMapping!==Xs||at.morphTargetsCount!==$r)&&(Xt=!0):Xt=!0:Xt=!0:Xt=!0:Xt=!0:(Xt=!0,at.__version=He.version);let un=at.currentProgram;Xt===!0&&(un=bi(He,qe,We));let er=!1,wi=!1,qr=!1,ft=un.getUniforms(),bn=at.uniforms;if(X.useProgram(un.program)&&(er=!0,wi=!0,qr=!0),He.id!==L&&(L=He.id,wi=!0),er||P!==ze){X.buffers.depth.getReversed()?(Ge.copy(ze.projectionMatrix),_u(Ge),xu(Ge),ft.setValue(C,"projectionMatrix",Ge)):ft.setValue(C,"projectionMatrix",ze.projectionMatrix),ft.setValue(C,"viewMatrix",ze.matrixWorldInverse);let Ot=ft.map.cameraPosition;Ot!==void 0&&Ot.setValue(C,S.setFromMatrixPosition(ze.matrixWorld)),O.logarithmicDepthBuffer&&ft.setValue(C,"logDepthBufFC",2/(Math.log(ze.far+1)/Math.LN2)),(He.isMeshPhongMaterial||He.isMeshToonMaterial||He.isMeshLambertMaterial||He.isMeshBasicMaterial||He.isMeshStandardMaterial||He.isShaderMaterial)&&ft.setValue(C,"isOrthographic",ze.isOrthographicCamera===!0),P!==ze&&(P=ze,wi=!0,qr=!0)}if(We.isSkinnedMesh){ft.setOptional(C,We,"bindMatrix"),ft.setOptional(C,We,"bindMatrixInverse");let Ot=We.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),ft.setValue(C,"boneTexture",Ot.boneTexture,le))}We.isBatchedMesh&&(ft.setOptional(C,We,"batchingTexture"),ft.setValue(C,"batchingTexture",We._matricesTexture,le),ft.setOptional(C,We,"batchingIdTexture"),ft.setValue(C,"batchingIdTexture",We._indirectTexture,le),ft.setOptional(C,We,"batchingColorTexture"),We._colorsTexture!==null&&ft.setValue(C,"batchingColorTexture",We._colorsTexture,le));let Ti=pt.morphAttributes;Ti.position===void 0&&Ti.normal===void 0&&Ti.color===void 0||Ae.update(We,pt,un),(wi||at.receiveShadow!==We.receiveShadow)&&(at.receiveShadow=We.receiveShadow,ft.setValue(C,"receiveShadow",We.receiveShadow)),He.isMeshGouraudMaterial&&He.envMap!==null&&(bn.envMap.value=on,bn.flipEnvMap.value=on.isCubeTexture&&on.isRenderTargetTexture===!1?-1:1),He.isMeshStandardMaterial&&He.envMap===null&&qe.environment!==null&&(bn.envMapIntensity.value=qe.environmentIntensity),wi&&(ft.setValue(C,"toneMappingExposure",M.toneMappingExposure),at.needsLights&&($t=qr,(Zt=bn).ambientLightColor.needsUpdate=$t,Zt.lightProbe.needsUpdate=$t,Zt.directionalLights.needsUpdate=$t,Zt.directionalLightShadows.needsUpdate=$t,Zt.pointLights.needsUpdate=$t,Zt.pointLightShadows.needsUpdate=$t,Zt.spotLights.needsUpdate=$t,Zt.spotLightShadows.needsUpdate=$t,Zt.rectAreaLights.needsUpdate=$t,Zt.hemisphereLights.needsUpdate=$t),bt&&He.fog===!0&&we.refreshFogUniforms(bn,bt),we.refreshMaterialUniforms(bn,He,ee,ne,g.state.transmissionRenderTarget[ze.id]),kr.upload(C,Ji(at),bn,le));var Zt,$t;if(He.isShaderMaterial&&He.uniformsNeedUpdate===!0&&(kr.upload(C,Ji(at),bn,le),He.uniformsNeedUpdate=!1),He.isSpriteMaterial&&ft.setValue(C,"center",We.center),ft.setValue(C,"modelViewMatrix",We.modelViewMatrix),ft.setValue(C,"normalMatrix",We.normalMatrix),ft.setValue(C,"modelMatrix",We.matrixWorld),He.isShaderMaterial||He.isRawShaderMaterial){let Ot=He.uniformsGroups;for(let tr=0,js=Ot.length;tr<js;tr++){let nr=Ot[tr];Te.update(nr,un),Te.bind(nr,un)}}return un})(b,Z,te,he,Q);X.setMaterial(he,Ue);let Ve=te.index,Je=1;if(he.wireframe===!0){if(Ve=de.getWireframeAttribute(te),Ve===void 0)return;Je=2}let je=te.drawRange,$=te.attributes.position,me=je.start*Je,fe=(je.start+je.count)*Je;ge!==null&&(me=Math.max(me,ge.start*Je),fe=Math.min(fe,(ge.start+ge.count)*Je)),Ve!==null?(me=Math.max(me,0),fe=Math.min(fe,Ve.count)):$!=null&&(me=Math.max(me,0),fe=Math.min(fe,$.count));let Xe=fe-me;if(Xe<0||Xe===1/0)return;let $e;Le.setup(Q,he,Fe,te,Ve);let Ke=ke;if(Ve!==null&&($e=ae.get(Ve),Ke=Y,Ke.setIndex($e)),Q.isMesh)he.wireframe===!0?(X.setLineWidth(he.wireframeLinewidth*E()),Ke.setMode(C.LINES)):Ke.setMode(C.TRIANGLES);else if(Q.isLine){let ze=he.linewidth;ze===void 0&&(ze=1),X.setLineWidth(ze*E()),Q.isLineSegments?Ke.setMode(C.LINES):Q.isLineLoop?Ke.setMode(C.LINE_LOOP):Ke.setMode(C.LINE_STRIP)}else Q.isPoints?Ke.setMode(C.POINTS):Q.isSprite&&Ke.setMode(C.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Li("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ke.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(N.get("WEBGL_multi_draw"))Ke.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let ze=Q._multiDrawStarts,qe=Q._multiDrawCounts,pt=Q._multiDrawCount,He=Ve?ae.get(Ve).bytesPerElement:1,We=W.get(he).currentProgram.getUniforms();for(let bt=0;bt<pt;bt++)We.setValue(C,"_gl_DrawID",bt),Ke.render(ze[bt]/He,qe[bt])}else if(Q.isInstancedMesh)Ke.renderInstances(me,Xe,Q.count);else if(te.isInstancedBufferGeometry){let ze=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,qe=Math.min(te.instanceCount,ze);Ke.renderInstances(me,Xe,qe)}else Ke.render(me,Xe)},this.compile=function(b,Z,te=null){te===null&&(te=b),g=pe.get(te),g.init(Z),x.push(g),te.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(g.pushLight(Q),Q.castShadow&&g.pushShadow(Q))}),b!==te&&b.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(g.pushLight(Q),Q.castShadow&&g.pushShadow(Q))}),g.setupLights();let he=new Set;return b.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let ge=Q.material;if(ge)if(Array.isArray(ge))for(let Ue=0;Ue<ge.length;Ue++){let Fe=ge[Ue];dt(Fe,te,Q),he.add(Fe)}else dt(ge,te,Q),he.add(ge)}),g=x.pop(),he},this.compileAsync=function(b,Z,te=null){let he=this.compile(b,Z,te);return new Promise(Q=>{function ge(){he.forEach(function(Ue){W.get(Ue).currentProgram.isReady()&&he.delete(Ue)}),he.size!==0?setTimeout(ge,10):Q(b)}N.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Nt=null;function Dt(){Yt.stop()}function Sn(){Yt.start()}let Yt=new Zu;function Xr(b,Z,te,he){if(b.visible===!1)return;if(b.layers.test(Z.layers)){if(b.isGroup)te=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(Z);else if(b.isLight)g.pushLight(b),b.castShadow&&g.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ie.intersectsSprite(b)){he&&k.setFromMatrixPosition(b.matrixWorld).applyMatrix4(R);let ge=be.update(b),Ue=b.material;Ue.visible&&m.push(b,ge,Ue,te,k.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ie.intersectsObject(b))){let ge=be.update(b),Ue=b.material;if(he&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),k.copy(b.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),k.copy(ge.boundingSphere.center)),k.applyMatrix4(b.matrixWorld).applyMatrix4(R)),Array.isArray(Ue)){let Fe=ge.groups;for(let Ve=0,Je=Fe.length;Ve<Je;Ve++){let je=Fe[Ve],$=Ue[je.materialIndex];$&&$.visible&&m.push(b,ge,$,te,k.z,je)}}else Ue.visible&&m.push(b,ge,Ue,te,k.z,null)}}let Q=b.children;for(let ge=0,Ue=Q.length;ge<Ue;ge++)Xr(Q[ge],Z,te,he)}function Yi(b,Z,te,he){let Q=b.opaque,ge=b.transmissive,Ue=b.transparent;g.setupLightsView(te),ye===!0&&Ce.setGlobalState(M.clippingPlanes,te),he&&X.viewport(F.copy(he)),Q.length>0&&Zi(Q,Z,te),ge.length>0&&Zi(ge,Z,te),Ue.length>0&&Zi(Ue,Z,te),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function Vs(b,Z,te,he){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[he.id]===void 0&&(g.state.transmissionRenderTarget[he.id]=new Un(1,1,{generateMipmaps:!0,type:N.has("EXT_color_buffer_half_float")||N.has("EXT_color_buffer_float")?Or:On,minFilter:ki,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));let Q=g.state.transmissionRenderTarget[he.id],ge=he.viewport||F;Q.setSize(ge.z*M.transmissionResolutionScale,ge.w*M.transmissionResolutionScale);let Ue=M.getRenderTarget(),Fe=M.getActiveCubeFace(),Ve=M.getActiveMipmapLevel();M.setRenderTarget(Q),M.getClearColor(z),q=M.getClearAlpha(),q<1&&M.setClearColor(16777215,.5),M.clear(),y&&et.render(te);let Je=M.toneMapping;M.toneMapping=ni;let je=he.viewport;if(he.viewport!==void 0&&(he.viewport=void 0),g.setupLightsView(he),ye===!0&&Ce.setGlobalState(M.clippingPlanes,he),Zi(b,te,he),le.updateMultisampleRenderTarget(Q),le.updateRenderTargetMipmap(Q),N.has("WEBGL_multisampled_render_to_texture")===!1){let $=!1;for(let me=0,fe=Z.length;me<fe;me++){let Xe=Z[me],$e=Xe.object,Ke=Xe.geometry,ze=Xe.material,qe=Xe.group;if(ze.side===Rt&&$e.layers.test(he.layers)){let pt=ze.side;ze.side=Vt,ze.needsUpdate=!0,Hs($e,te,he,Ke,ze,qe),ze.side=pt,ze.needsUpdate=!0,$=!0}}$===!0&&(le.updateMultisampleRenderTarget(Q),le.updateRenderTargetMipmap(Q))}M.setRenderTarget(Ue,Fe,Ve),M.setClearColor(z,q),je!==void 0&&(he.viewport=je),M.toneMapping=Je}function Zi(b,Z,te){let he=Z.isScene===!0?Z.overrideMaterial:null;for(let Q=0,ge=b.length;Q<ge;Q++){let Ue=b[Q],Fe=Ue.object,Ve=Ue.geometry,Je=Ue.group,je=Ue.material;je.allowOverride===!0&&he!==null&&(je=he),Fe.layers.test(te.layers)&&Hs(Fe,Z,te,Ve,je,Je)}}function Hs(b,Z,te,he,Q,ge){b.onBeforeRender(M,Z,te,he,Q,ge),b.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Q.onBeforeRender(M,Z,te,he,b,ge),Q.transparent===!0&&Q.side===Rt&&Q.forceSinglePass===!1?(Q.side=Vt,Q.needsUpdate=!0,M.renderBufferDirect(te,Z,he,Q,b,ge),Q.side=xi,Q.needsUpdate=!0,M.renderBufferDirect(te,Z,he,Q,b,ge),Q.side=Rt):M.renderBufferDirect(te,Z,he,Q,b,ge),b.onAfterRender(M,Z,te,he,Q,ge)}function bi(b,Z,te){Z.isScene!==!0&&(Z=G);let he=W.get(b),Q=g.state.lights,ge=g.state.shadowsArray,Ue=Q.state.version,Fe=ve.getParameters(b,Q.state,ge,Z,te),Ve=ve.getProgramCacheKey(Fe),Je=he.programs;he.environment=b.isMeshStandardMaterial?Z.environment:null,he.fog=Z.fog,he.envMap=(b.isMeshStandardMaterial?j:ie).get(b.envMap||he.environment),he.envMapRotation=he.environment!==null&&b.envMap===null?Z.environmentRotation:b.envMapRotation,Je===void 0&&(b.addEventListener("dispose",ut),Je=new Map,he.programs=Je);let je=Je.get(Ve);if(je!==void 0){if(he.currentProgram===je&&he.lightsStateVersion===Ue)return Ki(b,Fe),je}else Fe.uniforms=ve.getUniforms(b),b.onBeforeCompile(Fe,M),je=ve.acquireProgram(Fe,Ve),Je.set(Ve,je),he.uniforms=Fe.uniforms;let $=he.uniforms;return(b.isShaderMaterial||b.isRawShaderMaterial)&&b.clipping!==!0||($.clippingPlanes=Ce.uniform),Ki(b,Fe),he.needsLights=(function(me){return me.isMeshLambertMaterial||me.isMeshToonMaterial||me.isMeshPhongMaterial||me.isMeshStandardMaterial||me.isShadowMaterial||me.isShaderMaterial&&me.lights===!0})(b),he.lightsStateVersion=Ue,he.needsLights&&($.ambientLightColor.value=Q.state.ambient,$.lightProbe.value=Q.state.probe,$.directionalLights.value=Q.state.directional,$.directionalLightShadows.value=Q.state.directionalShadow,$.spotLights.value=Q.state.spot,$.spotLightShadows.value=Q.state.spotShadow,$.rectAreaLights.value=Q.state.rectArea,$.ltc_1.value=Q.state.rectAreaLTC1,$.ltc_2.value=Q.state.rectAreaLTC2,$.pointLights.value=Q.state.point,$.pointLightShadows.value=Q.state.pointShadow,$.hemisphereLights.value=Q.state.hemi,$.directionalShadowMap.value=Q.state.directionalShadowMap,$.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,$.spotShadowMap.value=Q.state.spotShadowMap,$.spotLightMatrix.value=Q.state.spotLightMatrix,$.spotLightMap.value=Q.state.spotLightMap,$.pointShadowMap.value=Q.state.pointShadowMap,$.pointShadowMatrix.value=Q.state.pointShadowMatrix),he.currentProgram=je,he.uniformsList=null,je}function Ji(b){if(b.uniformsList===null){let Z=b.currentProgram.getUniforms();b.uniformsList=kr.seqWithValue(Z.seq,b.uniforms)}return b.uniformsList}function Ki(b,Z){let te=W.get(b);te.outputColorSpace=Z.outputColorSpace,te.batching=Z.batching,te.batchingColor=Z.batchingColor,te.instancing=Z.instancing,te.instancingColor=Z.instancingColor,te.instancingMorph=Z.instancingMorph,te.skinning=Z.skinning,te.morphTargets=Z.morphTargets,te.morphNormals=Z.morphNormals,te.morphColors=Z.morphColors,te.morphTargetsCount=Z.morphTargetsCount,te.numClippingPlanes=Z.numClippingPlanes,te.numIntersection=Z.numClipIntersection,te.vertexAlphas=Z.vertexAlphas,te.vertexTangents=Z.vertexTangents,te.toneMapping=Z.toneMapping}Yt.setAnimationLoop(function(b){Nt&&Nt(b)}),typeof self<"u"&&Yt.setContext(self),this.setAnimationLoop=function(b){Nt=b,xe.setAnimationLoop(b),b===null?Yt.stop():Yt.start()},xe.addEventListener("sessionstart",Dt),xe.addEventListener("sessionend",Sn),this.render=function(b,Z){if(Z!==void 0&&Z.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(w===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(Z),Z=xe.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,Z,B),g=pe.get(b,x.length),g.init(Z),x.push(g),R.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Ie.setFromProjectionMatrix(R),ue=this.localClippingEnabled,ye=Ce.init(this.clippingPlanes,ue),m=Re.get(b,_.length),m.init(),_.push(m),xe.enabled===!0&&xe.isPresenting===!0){let ge=M.xr.getDepthSensingMesh();ge!==null&&Xr(ge,Z,-1/0,M.sortObjects)}Xr(b,Z,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(re,se),y=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,y&&et.addToRenderList(m,b),this.info.render.frame++,ye===!0&&Ce.beginShadows();let te=g.state.shadowsArray;Be.render(te,b,Z),ye===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset();let he=m.opaque,Q=m.transmissive;if(g.setupLights(),Z.isArrayCamera){let ge=Z.cameras;if(Q.length>0)for(let Ue=0,Fe=ge.length;Ue<Fe;Ue++)Vs(he,Q,b,ge[Ue]);y&&et.render(b);for(let Ue=0,Fe=ge.length;Ue<Fe;Ue++){let Ve=ge[Ue];Yi(m,b,Ve,Ve.viewport)}}else Q.length>0&&Vs(he,Q,b,Z),y&&et.render(b),Yi(m,b,Z);B!==null&&U===0&&(le.updateMultisampleRenderTarget(B),le.updateRenderTargetMipmap(B)),b.isScene===!0&&b.onAfterRender(M,b,Z),Le.resetDefaultState(),L=-1,P=null,x.pop(),x.length>0?(g=x[x.length-1],ye===!0&&Ce.setGlobalState(M.clippingPlanes,g.state.camera)):g=null,_.pop(),m=_.length>0?_[_.length-1]:null},this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(b,Z,te){let he=W.get(b);he.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,he.__autoAllocateDepthBuffer===!1&&(he.__useRenderToTexture=!1),W.get(b.texture).__webglTexture=Z,W.get(b.depthTexture).__webglTexture=he.__autoAllocateDepthBuffer?void 0:te,he.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,Z){let te=W.get(b);te.__webglFramebuffer=Z,te.__useDefaultFramebuffer=Z===void 0};let Ws=C.createFramebuffer();this.setRenderTarget=function(b,Z=0,te=0){B=b,T=Z,U=te;let he=!0,Q=null,ge=!1,Ue=!1;if(b){let Fe=W.get(b);if(Fe.__useDefaultFramebuffer!==void 0)X.bindFramebuffer(C.FRAMEBUFFER,null),he=!1;else if(Fe.__webglFramebuffer===void 0)le.setupRenderTarget(b);else if(Fe.__hasExternalTextures)le.rebindTextures(b,W.get(b.texture).__webglTexture,W.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let je=b.depthTexture;if(Fe.__boundDepthTexture!==je){if(je!==null&&W.has(je)&&(b.width!==je.image.width||b.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(b)}}let Ve=b.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ue=!0);let Je=W.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Q=Array.isArray(Je[Z])?Je[Z][te]:Je[Z],ge=!0):Q=b.samples>0&&le.useMultisampledRTT(b)===!1?W.get(b).__webglMultisampledFramebuffer:Array.isArray(Je)?Je[te]:Je,F.copy(b.viewport),I.copy(b.scissor),H=b.scissorTest}else F.copy(J).multiplyScalar(ee).floor(),I.copy(oe).multiplyScalar(ee).floor(),H=Me;if(te!==0&&(Q=Ws),X.bindFramebuffer(C.FRAMEBUFFER,Q)&&he&&X.drawBuffers(b,Q),X.viewport(F),X.scissor(I),X.setScissorTest(H),ge){let Fe=W.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Fe.__webglTexture,te)}else if(Ue){let Fe=W.get(b.texture),Ve=Z;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Fe.__webglTexture,te,Ve)}else if(b!==null&&te!==0){let Fe=W.get(b.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Fe.__webglTexture,te)}L=-1},this.readRenderTargetPixels=function(b,Z,te,he,Q,ge,Ue,Fe=0){if(!b||!b.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=W.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ve=Ve[Ue]),Ve){X.bindFramebuffer(C.FRAMEBUFFER,Ve);try{let Je=b.textures[Fe],je=Je.format,$=Je.type;if(!O.textureFormatReadable(je))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!O.textureTypeReadable($))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");Z>=0&&Z<=b.width-he&&te>=0&&te<=b.height-Q&&(b.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Fe),C.readPixels(Z,te,he,Q,Se.convert(je),Se.convert($),ge))}finally{let Je=B!==null?W.get(B).__webglFramebuffer:null;X.bindFramebuffer(C.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(b,Z,te,he,Q,ge,Ue,Fe=0){if(!b||!b.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=W.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ve=Ve[Ue]),Ve){if(Z>=0&&Z<=b.width-he&&te>=0&&te<=b.height-Q){X.bindFramebuffer(C.FRAMEBUFFER,Ve);let Je=b.textures[Fe],je=Je.format,$=Je.type;if(!O.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!O.textureTypeReadable($))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let me=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,me),C.bufferData(C.PIXEL_PACK_BUFFER,ge.byteLength,C.STREAM_READ),b.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Fe),C.readPixels(Z,te,he,Q,Se.convert(je),Se.convert($),0);let fe=B!==null?W.get(B).__webglFramebuffer:null;X.bindFramebuffer(C.FRAMEBUFFER,fe);let Xe=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await vu(C,Xe,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,me),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ge),C.deleteBuffer(me),C.deleteSync(Xe),ge}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,Z=null,te=0){let he=Math.pow(2,-te),Q=Math.floor(b.image.width*he),ge=Math.floor(b.image.height*he),Ue=Z!==null?Z.x:0,Fe=Z!==null?Z.y:0;le.setTexture2D(b,0),C.copyTexSubImage2D(C.TEXTURE_2D,te,0,0,Ue,Fe,Q,ge),X.unbindTexture()};let Qi=C.createFramebuffer(),Vn=C.createFramebuffer();this.copyTextureToTexture=function(b,Z,te=null,he=null,Q=0,ge=null){let Ue,Fe,Ve,Je,je,$,me,fe,Xe;ge===null&&(Q!==0?(Li("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ge=Q,Q=0):ge=0);let $e=b.isCompressedTexture?b.mipmaps[ge]:b.image;if(te!==null)Ue=te.max.x-te.min.x,Fe=te.max.y-te.min.y,Ve=te.isBox3?te.max.z-te.min.z:1,Je=te.min.x,je=te.min.y,$=te.isBox3?te.min.z:0;else{let Ft=Math.pow(2,-Q);Ue=Math.floor($e.width*Ft),Fe=Math.floor($e.height*Ft),Ve=b.isDataArrayTexture?$e.depth:b.isData3DTexture?Math.floor($e.depth*Ft):1,Je=0,je=0,$=0}he!==null?(me=he.x,fe=he.y,Xe=he.z):(me=0,fe=0,Xe=0);let Ke=Se.convert(Z.format),ze=Se.convert(Z.type),qe;Z.isData3DTexture?(le.setTexture3D(Z,0),qe=C.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(le.setTexture2DArray(Z,0),qe=C.TEXTURE_2D_ARRAY):(le.setTexture2D(Z,0),qe=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,Z.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,Z.unpackAlignment);let pt=C.getParameter(C.UNPACK_ROW_LENGTH),He=C.getParameter(C.UNPACK_IMAGE_HEIGHT),We=C.getParameter(C.UNPACK_SKIP_PIXELS),bt=C.getParameter(C.UNPACK_SKIP_ROWS),Hn=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,$e.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,$e.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Je),C.pixelStorei(C.UNPACK_SKIP_ROWS,je),C.pixelStorei(C.UNPACK_SKIP_IMAGES,$);let Kt=b.isDataArrayTexture||b.isData3DTexture,on=Z.isDataArrayTexture||Z.isData3DTexture;if(b.isDepthTexture){let Ft=W.get(b),Wt=W.get(Z),Et=W.get(Ft.__renderTarget),hn=W.get(Wt.__renderTarget);X.bindFramebuffer(C.READ_FRAMEBUFFER,Et.__webglFramebuffer),X.bindFramebuffer(C.DRAW_FRAMEBUFFER,hn.__webglFramebuffer);for(let si=0;si<Ve;si++)Kt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,W.get(b).__webglTexture,Q,$+si),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,W.get(Z).__webglTexture,ge,Xe+si)),C.blitFramebuffer(Je,je,Ue,Fe,me,fe,Ue,Fe,C.DEPTH_BUFFER_BIT,C.NEAREST);X.bindFramebuffer(C.READ_FRAMEBUFFER,null),X.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(Q!==0||b.isRenderTargetTexture||W.has(b)){let Ft=W.get(b),Wt=W.get(Z);X.bindFramebuffer(C.READ_FRAMEBUFFER,Qi),X.bindFramebuffer(C.DRAW_FRAMEBUFFER,Vn);for(let Et=0;Et<Ve;Et++)Kt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ft.__webglTexture,Q,$+Et):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ft.__webglTexture,Q),on?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Wt.__webglTexture,ge,Xe+Et):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Wt.__webglTexture,ge),Q!==0?C.blitFramebuffer(Je,je,Ue,Fe,me,fe,Ue,Fe,C.COLOR_BUFFER_BIT,C.NEAREST):on?C.copyTexSubImage3D(qe,ge,me,fe,Xe+Et,Je,je,Ue,Fe):C.copyTexSubImage2D(qe,ge,me,fe,Je,je,Ue,Fe);X.bindFramebuffer(C.READ_FRAMEBUFFER,null),X.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else on?b.isDataTexture||b.isData3DTexture?C.texSubImage3D(qe,ge,me,fe,Xe,Ue,Fe,Ve,Ke,ze,$e.data):Z.isCompressedArrayTexture?C.compressedTexSubImage3D(qe,ge,me,fe,Xe,Ue,Fe,Ve,Ke,$e.data):C.texSubImage3D(qe,ge,me,fe,Xe,Ue,Fe,Ve,Ke,ze,$e):b.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,ge,me,fe,Ue,Fe,Ke,ze,$e.data):b.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,ge,me,fe,$e.width,$e.height,Ke,$e.data):C.texSubImage2D(C.TEXTURE_2D,ge,me,fe,Ue,Fe,Ke,ze,$e);C.pixelStorei(C.UNPACK_ROW_LENGTH,pt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,He),C.pixelStorei(C.UNPACK_SKIP_PIXELS,We),C.pixelStorei(C.UNPACK_SKIP_ROWS,bt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Hn),ge===0&&Z.generateMipmaps&&C.generateMipmap(qe),X.unbindTexture()},this.copyTextureToTexture3D=function(b,Z,te=null,he=null,Q=0){return Li('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,Z,te,he,Q)},this.initRenderTarget=function(b){W.get(b).__webglFramebuffer===void 0&&le.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?le.setTextureCube(b,0):b.isData3DTexture?le.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?le.setTexture2DArray(b,0):le.setTexture2D(b,0),X.unbindTexture()},this.resetState=function(){T=0,U=0,B=null,X.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}};var Mi=(r,e=0,t=1)=>Math.min(t,Math.max(e,r)),lt=(r,e,t)=>{let n=Mi((t-r)/(e-r));return n*n*(3-2*n)},ii=(r,e,t)=>{let n=Mi((t-r)/(e-r));return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2};var tt=(r,e,t)=>r+(e-r)*t,Wo=r=>()=>(r=r*16807%2147483647)/2147483647,kn=1/6,Tm=1/3,Em=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],Go=new Uint8Array(512);{let r=Wo(1234567),e=new Uint8Array(256);for(let t=0;t<256;t++)e[t]=t;for(let t=255;t>0;t--){let n=Math.floor(r()*(t+1));[e[t],e[n]]=[e[n],e[t]]}for(let t=0;t<512;t++)Go[t]=e[t&255]}function qi(r,e,t){let n=(r+e+t)*Tm,i=Math.floor(r+n),s=Math.floor(e+n),a=Math.floor(t+n),o=(i+s+a)*kn,l=r-i+o,c=e-s+o,h=t-a+o,u,d,p,f,v,m;l>=c?c>=h?(u=1,d=0,p=0,f=1,v=1,m=0):l>=h?(u=1,d=0,p=0,f=1,v=0,m=1):(u=0,d=0,p=1,f=1,v=0,m=1):c<h?(u=0,d=0,p=1,f=0,v=1,m=1):l<h?(u=0,d=1,p=0,f=0,v=1,m=1):(u=0,d=1,p=0,f=1,v=1,m=0);let g=[[l,c,h,0,0,0],[l-u+kn,c-d+kn,h-p+kn,u,d,p],[l-f+2*kn,c-v+2*kn,h-m+2*kn,f,v,m],[l-1+3*kn,c-1+3*kn,h-1+3*kn,1,1,1]],_=0,x=i&255,M=s&255,w=a&255;for(let[T,U,B,L,P,F]of g){let I=.6-T*T-U*U-B*B;if(I>0){let H=Em[Go[x+L+Go[M+P+Go[w+F]]]%12];I*=I,_+=I*I*(H[0]*T+H[1]*U+H[2]*B)}}return 32*_}var Am=(r,e,t,n=4)=>{let i=.5,s=1,a=0;for(let o=0;o<n;o++)a+=i*qi(r*s,e*s,t*s),i*=.5,s*=2;return a};function Cm(r=1){let e=new Er;e.add(new Ye(new ti(24,16,24),new ei({color:new Ne(.5,.43,.35),side:Vt})));let t=(n,i,s,a)=>{let o=new Ye(new Nn(n,i),new ei({color:new Ne(...s),side:Rt}));o.position.set(a[0]*r,a[1],a[2]),o.lookAt(0,0,0),e.add(o)};return t(8,6,[7,6.6,6],[-5,7,5]),t(1.4,10,[3.2,3.1,3],[-9,0,-1]),t(1.4,10,[2.4,2.3,2.2],[9,.5,-2]),t(7,12,[.03,.025,.02],[-8.5,0,6.5]),t(7,12,[.03,.025,.02],[8.5,0,6.5]),t(16,6,[.9,.8,.68],[0,-7.5,0]),e}var Hr=1,Jt=1.13,Gs=.96;var td=1/.745;function Rm(){let r=document.createElement("canvas");r.width=r.height=512;let e=r.getContext("2d"),t=Wo(77);e.fillStyle="rgb(224,224,224)",e.fillRect(0,0,512,512);for(let i=0;i<5200;i++){let s=t()*512,a=20+t()*472,o=.35+t()*.9;e.fillStyle=`rgba(255,${238+t()*17|0},${222+t()*30|0},${(.3+t()*.45).toFixed(2)})`,e.beginPath(),e.ellipse(s,a,o,o*(.8+t()*.4),0,0,6.283),e.fill()}for(let i=0;i<900;i++){let s=t()*512,a=t()*512,o=.5+t()*1.4;e.fillStyle=`rgba(150,120,120,${(.12+t()*.18).toFixed(2)})`,e.beginPath(),e.arc(s,a,o,0,6.283),e.fill()}let n=new Ui(r);return n.colorSpace=Ut,n.wrapS=n.wrapT=yr,n.anisotropy=8,n}function Pm(r){let e=new sn(1,96,80,r>0?Math.PI/2:-Math.PI/2,Math.PI),t=e.attributes.position,n=e.attributes.normal,i=e.attributes.uv,s=t.count,a=new Float32Array(t.array),o=new Float32Array(s*3),l=new Float32Array(s*3),c=new Float32Array(s*3),h=new Float32Array(s*2),u=new Ne("#5e0610"),d=new Ne("#a80b1a"),p=new Ne("#cf3a1c"),f=new Ne,v=new Ne("#3d100b"),m=new Ne("#6a1f14"),g=new Ne("#9c4024"),_=new Ne;for(let M=0;M<s;M++){let w=a[M*3],T=a[M*3+1],U=a[M*3+2],B=lt(.86,1,-T),L=Math.max(0,T-.9),P=1-B*.08-L*.5,F=w*Hr*P,I=T*Jt+B*.13,H=U*Gs*P;t.setXYZ(M,F,I,H);let z=w/Hr,q=T/Jt,V=U/Gs,ne=Math.hypot(z,q,V)||1;n.setXYZ(M,z/ne,q/ne,V/ne),h[M*2]=.5+F/(2*Hr)*.965,h[M*2+1]=.5+I/(2*Jt)*.965;let ee=Am(w*2.6+3,T*2.6,U*2.6,3);f.copy(d).lerp(u,Mi(.3-ee*.55+Math.max(0,-T)*.35)).lerp(p,Mi((T-.5)*1.3)*.7),f.multiplyScalar(td),l.set([f.r,f.g,f.b],M*3);let re=qi(w*1.8+9,T*1.2,U*1.8),se=qi(w*3.6,T*3,U*3.6),oe=.86+(re*.05+se*.012),Me=Math.abs(w)<.42?(.42-Math.abs(w))*.55:0;o.set([F*oe+r*Me*.38,I*oe*.94,H*oe*.95],M*3),_.copy(v).lerp(m,lt(-.6,.1,re)).lerp(g,lt(.2,.9,re)*.75),_.multiplyScalar(td*(.94+qi(w*6,T*6,U*6)*.08)),c.set([_.r,_.g,_.b],M*3)}e.setAttribute("color",new Tt(l,3)),e.setAttribute("colorDry",new Tt(c,3)),e.setAttribute("photoUV",new Tt(h,2)),e.morphAttributes.position=[new Tt(o,3)];let x=new yt;return x.setIndex(e.index),x.setAttribute("position",new Tt(o,3)),x.computeVertexNormals(),e.morphAttributes.normal=[x.attributes.normal],e.userData.unit=a,e}function Bc(r){let e=new Ct({vertexColors:!0,map:r,roughness:.34,clearcoat:.9,clearcoatRoughness:.14,sheen:.25,sheenColor:new Ne("#ff9b8a"),sheenRoughness:.5,side:Rt}),t={value:0},n={value:null},i={value:0},s={value:0};return e.userData={dry:t,photo:n,usePhoto:i,glow:s},e.onBeforeCompile=a=>{Object.assign(a.uniforms,{uDry:t,uPhoto:n,uUsePhoto:i,uGlow:s}),a.vertexShader=`attribute vec3 colorDry;
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
  totalEmissiveRadiance += photoLin * uGlow * usePhoto;`)},e.customProgramCacheKey=()=>"cascarup-skin-2",e}function Im(r,e){let n=new Nn(1,1,160,1),i=n.attributes.position;for(let s=0;s<=160;s++){let a=-Math.PI/2+s/160*Math.PI*2;for(let o=0;o<2;o++){let l=o===0?1:e,c=o*161+s,h=Math.sin(a),u=Math.cos(a),d=lt(.86,1,-h),p=Math.max(0,h-.9),f=1-d*.08-p*.5;i.setXYZ(c,r*.002,(h*Jt+d*.13)*l,u*Gs*f*l)}}return n.computeVertexNormals(),n}function Lm(r){let e=new sn(1,72,54),t=e.attributes.position,n=e.attributes.uv,i=t.count,s=new Float32Array(i*3),a=new Ne("#6b3b1f"),o=new Ne("#8a5430"),l=new Ne("#2a1309"),c=new Ne;for(let p=0;p<i;p++){let f=t.getX(p),v=t.getY(p),m=t.getZ(p),g=r*f<0,_=f*.5,x=v*.8,M=m*.62,w=0;if(g){_*=.12;let U=.08*Math.sin(v*3.4);w=Math.exp(-Math.pow((M-U)/.06,2))*(1-Math.pow(Math.abs(v),6)),_+=r*w*.05}_+=qi(f*4,v*4,m*4)*.006,t.setXYZ(p,_,x,M),c.copy(a).lerp(o,lt(-.2,.8,qi(f*3,v*3,m*3))).lerp(l,w*.9),s.set([c.r,c.g,c.b],p*3);let T=rd[g?"flat":"round"];n.setXY(p,T.cx+(g?-r:r)*m*T.rx,1-(T.cy-v*T.ry))}e.setAttribute("color",new Tt(s,3));let h=e.index.array,u=[],d=[];for(let p=0;p<h.length;p+=3)((t.getX(h[p])+t.getX(h[p+1])+t.getX(h[p+2]))*r<0?u:d).push(h[p],h[p+1],h[p+2]);return e.setIndex([...u,...d]),e.addGroup(0,u.length,0),e.addGroup(u.length,d.length,1),e.computeVertexNormals(),e}var Vo=document.documentElement.dataset.root||"",rd={flat:{src:Vo+"assets/bean/bohne-flach.webp",cx:.4859,cy:.488,rx:.4932*.95,ry:.4997*.96},round:{src:Vo+"assets/bean/bohne-rund.webp",cx:.5061,cy:.5127,rx:.4911*.95,ry:.4889*.96}};function Dm(r){let e=new sn(1,48,36,r>0?Math.PI/2:-Math.PI/2,Math.PI),t=e.attributes.position;for(let n=0;n<t.count;n++){let i=t.getX(n),s=t.getY(n),a=t.getZ(n),o=1+qi(i*6,s*6,a*6)*.03;t.setXYZ(n,i*.58*o,s*.9*o,a*.7*o)}return e.computeVertexNormals(),e}var Um=`
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
}`;function nd(r,e=null){let t=e||{uBloom:{value:0},uTime:{value:0},uTop:{value:0},uSrc0:{value:new A(0,9,0)},uSrc1:{value:new A(0,9,0)}};return r.userData.infuse=t,r.onBeforeCompile=n=>{Object.assign(n.uniforms,t),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
`+Um).replace("#include <transmission_fragment>",rt.transmission_fragment.replace("material.attenuationColor = attenuationColor;",`
  {
    vec3 rd = normalize( vWorldPosition - cameraPosition );
    float dens = 0.0;
    // three looks along the line of sight (each two noises): five were the pot's heaviest cost, three look the same
    for ( int i = 0; i < 3; i ++ ) dens += steep( vWorldPosition + rd * ( .09 + float( i ) * .26 ) );
    dens /= 3.0;
    // clear water absorbs nothing; where the cascara has steeped, the same amber absorbs ever more
    material.attenuationColor = attenuationColor;
    material.attenuationDistance = attenuationDistance / max( dens, .002 );   // absorption grows with the density
  }`))},r.customProgramCacheKey=()=>"cascarup-infuse-7",r}var Ho=[[0,0],[.3,0],[.322,.012],[.33,.04],[.33,2.38],[.327,2.399],[.319,2.418],[.311,2.437],[.303,2.457],[.293,2.476],[.282,2.495],[.268,2.514],[.247,2.533],[.22,2.552],[.182,2.571],[.163,2.587],[.148,2.6],[.139,2.616],[.138,2.7],[.146,2.71],[.146,2.74],[.139,2.75],[.146,2.765],[.146,2.79],[.139,2.8],[.142,2.92],[.135,2.94],[.106,2.94],[.104,2.7],[.118,2.6]];var Nm=2.73,sd=17,Fm=.33,Om=1.16;function ks(r,e=0,t=96){return new Ir(r.map(([n,i])=>new _e(Math.max(0,n-e),i)),t)}var Bm=()=>Ho.slice(0,sd+1);function zm(r,e){for(let t=1;t<=sd;t++){let[n,i]=Ho[t-1],[s,a]=Ho[t];if(r>=i&&r<=a&&a>i)return Math.max(0,tt(n,s,(r-i)/(a-i))-e)}return 0}function km(){let r=ks([[0,.236],[.14,.236],[.151,.231],[.156,.22],[.156,.168],[.15,.163],[.156,.158],[.156,.128],[.15,.123],[.156,.118],[.156,.088],[.15,.083],[.156,.078],[.156,.06],[.149,.056],[.153,.052],[.153,.004],[.147,0],[.135,0]],0,180),e=r.attributes.position;for(let t=0;t<e.count;t++){let n=e.getX(t),i=e.getY(t),s=e.getZ(t);if(i>.17&&i<.218){let a=Math.atan2(s,n),o=1+.02*Math.max(-.6,Math.min(.6,Math.cos(a*64)*2));e.setX(t,n*o),e.setZ(t,s*o)}}return r.computeVertexNormals(),r}var Gc=new Set,Vc=(r,e)=>{let t={};return Gc.add(t),(...n)=>{Gc.delete(t),e&&e(...n)}};function Gm(r){let e=Vc(r),t=new Bi().load(r,e,void 0,e);return t.colorSpace=Ut,t.anisotropy=8,t}var zc=2.38,Vm=()=>{let r=Fm+.004,e=zc*r/(1007/1312);return new vi(r,r,e,128,1,!0,-zc/2,zc)};function Hm(){let r=document.createElement("canvas");r.width=r.height=256;let e=r.getContext("2d"),t=e.createRadialGradient(128,128,0,128,128,128);return t.addColorStop(0,"rgba(58,33,22,.6)"),t.addColorStop(.35,"rgba(58,33,22,.3)"),t.addColorStop(1,"rgba(58,33,22,0)"),e.fillStyle=t,e.fillRect(0,0,256,256),new Ui(r)}var Wm={original:{label:Vo+"assets/label/original.webp",syrup:"#74290d",surface:"#3c1306",props:"cascara"},cozy:{label:Vo+"assets/label/cozy.webp",syrup:"#66230b",surface:"#341005",props:"spice"}};function id(r){let e=new Ni,t=.018,n=1.6,i=.085,s=.022,a=90,o=(f,v)=>[Math.cos(f)*v,Math.sin(f)*v];for(let f=0;f<=a;f++){let v=f/a*n*Math.PI*2,[m,g]=o(v,i-s*v/Math.PI);f?e.lineTo(m,g):e.moveTo(m,g)}for(let f=a;f>=0;f--){let v=f/a*n*Math.PI*2,[m,g]=o(v,i-s*v/Math.PI-t);e.lineTo(m,g)}let l=new Pr(e,{depth:r,steps:48,bevelEnabled:!1,curveSegments:4});l.translate(0,0,-r/2);let c=l.attributes.position,h=new Float32Array(c.count*3),u=new Ne("#7a3c1c"),d=new Ne("#a4592c"),p=new Ne;for(let f=0;f<c.count;f++){let v=c.getX(f),m=c.getY(f),g=c.getZ(f),_=Math.atan2(m,v),x=.5+.5*Math.sin(_*38+Math.sin(g*9)*.6),M=.5+.5*Math.sin(g*41+_*3)*Math.sin(g*17);p.copy(u).lerp(d,x*.45+M*.25),h.set([p.r,p.g,p.b],f*3)}return l.setAttribute("color",new Tt(h,3)),l.computeVertexNormals(),new Ye(l,new an({vertexColors:!0,roughness:.86}))}function Xm(){let r=new Gt,e=new an({color:"#4e2311",roughness:.9}),t=new an({color:"#8a4f27",roughness:.75}),n=new Ct({color:"#7a4220",roughness:.3,clearcoat:.8,clearcoatRoughness:.25}),i=new sn(1,32,18),s=i.attributes.position;for(let o=0;o<s.count;o++){let l=s.getX(o),c=l>0?1-l*l*.82:1-l*l*.25,h=1+.06*Math.sin(l*23+s.getZ(o)*9);s.setXYZ(o,l,s.getY(o)*c*h,s.getZ(o)*c*h)}i.computeVertexNormals();for(let o=0;o<8;o++){let l=new Gt;l.rotation.y=o/8*Math.PI*2+o%2*.05;let c=new Ye(i,e);c.scale.set(.21,.07,.08),c.position.x=.19,c.rotation.z=-.1;let h=new Ye(new sn(1,20,12),t);h.scale.set(.15,.03,.045),h.position.set(.2,.068,0);let u=new Ye(new sn(1,20,14),n);u.scale.set(.06,.035,.04),u.position.set(.2,.075,0),l.add(c,h,u),r.add(l)}let a=new Ye(new sn(.055,16,12),e);return a.scale.y=.9,r.add(a),r}var $m=[[0,0],[.95,0],[1.03,.03],[1.06,.1],[1.06,.9],[1.085,.955],[1.09,1],[1.045,1],[1.025,.96],[1.025,.1],[.97,.055],[0,.055]];function jm(r){let e=document.createElement("canvas");e.width=128,e.height=256;let t=e.getContext("2d"),n=Wo(r);t.filter="blur(7px)",t.lineCap="round";for(let s=0;s<3;s++){t.strokeStyle=`rgba(255,255,255,${(.55+n()*.35).toFixed(2)})`,t.lineWidth=7+n()*9,t.beginPath();let a=44+n()*40,o=10+n()*16,l=1.6+n()*1.6,c=n()*6;for(let h=236;h>=20;h-=6){let u=(236-h)/216,d=a+Math.sin(u*l*Math.PI+c)*o*(.3+u);h===236?t.moveTo(d,h):t.lineTo(d,h)}t.stroke()}t.filter="none",t.globalCompositeOperation="destination-in";let i=t.createLinearGradient(0,0,0,256);return i.addColorStop(0,"rgba(0,0,0,0)"),i.addColorStop(.3,"#000"),i.addColorStop(.8,"#000"),i.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=i,t.fillRect(0,0,128,256),new Ui(e)}var kc=[0,.28,.45,.6,.765,.862,1],ad=[2.1,1.9,1.8,2.1,2.2,2.2],Hc=ad.reduce((r,e)=>r+e)*1e3,cn=ad.reduce((r,e)=>[...r,r[r.length-1]+e],[0]).map((r,e,t)=>r/t[t.length-1]);function ji(r){let e=1;for(;e<cn.length-1&&r>cn[e];)e++;let t=cn[e-1],n=cn[e];return kc[e-1]+(kc[e]-kc[e-1])*Math.min(1,Math.max(0,(r-t)/(n-t)))}function od(r,{onFrame:e,photo:t,plantBox:n,gentle:i=!1}={}){t&&(Hr=1,Jt=t.aspect||Jt,Gs=.94);let s=new zo({canvas:r,antialias:!0,alpha:!1,powerPreference:"high-performance"}),a=Math.min(window.devicePixelRatio||1,2),o=0;s.setPixelRatio(a),s.transmissionResolutionScale=.3,s.toneMapping=bo,s.toneMappingExposure=1,s.localClippingEnabled=!0;let l=new Er;l.background=new Ne("#E6D3B7");let c=new Gr(s);l.environment=c.fromScene(Cm(-1),.03).texture,l.environmentIntensity=.9;let h=new kt(24,1,.1,100);h.position.set(0,0,12.6);let u=new Dr("#fff1df",1.5);u.position.set(4,6,6),l.add(u);let d=new Dr("#ffe9da",1.3);d.position.set(-5,3,-6),l.add(d),l.add(new Ps("#fff6ea","#9a6a48",.25));let p=new Gt;l.add(p);let f=new Gt;p.add(f);let v=Rm(),m=new Ct({color:"#f0d9a2",roughness:.3,clearcoat:.8,clearcoatRoughness:.2,side:Vt,transparent:!0}),g=new Ct({color:"#e2ab82",roughness:.4,side:Rt,transparent:!0}),_=new Ct({color:"#f6e2a8",roughness:.14,transmission:.65,thickness:.45,ior:1.4,attenuationColor:new Ne("#e3b765"),attenuationDistance:.5,clearcoat:.7,clearcoatRoughness:.1,side:Rt,transparent:!0}),x=new Ct({color:"#efe4cc",roughness:.95,side:Rt,transparent:!0}),M=["flat","round"].map($=>{let me=new Ct({vertexColors:!0,roughness:.42,clearcoat:.3,clearcoatRoughness:.35});return new Bi().load(rd[$].src,Vc(0,fe=>{fe.colorSpace=Ut,fe.anisotropy=8,Object.assign(me,{map:fe,vertexColors:!1,roughness:.5,clearcoat:.22,clearcoatRoughness:.4,emissiveMap:fe,emissiveIntensity:.3}),me.color.set("#ffffff"),me.emissive.set("#ffffff"),me.needsUpdate=!0})),me}),w=[],T=[-1,1].map($=>{let me=new Gt,fe=Pm($),Xe=Bc(v);w.push(Xe);let $e=new Ye(fe,Xe);$e.morphTargetInfluences=[0];let Ke=new Ye(fe,m);Ke.morphTargetInfluences=[0],Ke.scale.setScalar(.965);let ze=new Ye(Im($,.955),g);me.add($e,Ke,ze);let qe=new Ye(new sn(1,72,54,$>0?Math.PI/2:-Math.PI/2,Math.PI),_),pt=new Ye(Dm($),x),He=new Ye(Lm($),M);return f.add(me,qe,pt,He),{side:$,half:me,skin:$e,flesh:Ke,cut:ze,pulp:qe,parch:pt,bean:He}}),U=new an({color:"#5d5230",roughness:.8}),B=new Ye(new vi(.05,.085,.2,16),U);B.position.y=Jt+.06,B.rotation.z=-.15,f.add(B);let L=new Ye(new yn(.17,.05,14,40),new an({color:"#3b1d12",roughness:.85}));L.position.y=-Jt+.115,L.rotation.x=Math.PI/2,L.scale.set(1,1,.7),f.add(L);let P=new Ye(new gi(.12,24),new an({color:"#2a120b",roughness:.9,side:Rt}));P.position.y=-Jt+.12,P.rotation.x=Math.PI/2,f.add(P);let F=-1.45,I=1,H=Hm(),z=new ei({map:H,transparent:!0,depthWrite:!1}),q=($,me)=>{let fe=new Ye(new Nn(1,1),z.clone());return fe.rotation.x=-Math.PI/2,fe.scale.set($,me,1),fe},V=new Ct({color:"#ffffff",roughness:.03,transmission:1,thickness:.3,ior:1.5,clearcoat:1,clearcoatRoughness:.02,attenuationColor:new Ne("#e4ebe2"),attenuationDistance:2.5,transparent:!0,side:Rt,depthWrite:!1}),ne=new Gt;p.add(ne),V.side=xi;let ee=V.clone(),re=new Ye(ks($m,0,128),ee),se=new yn(.14,.034,12,32,Math.PI),J=[-1,1].map($=>{let me=new Ye(se,ee);return me.position.set($*1.07,.8,0),me.rotation.z=-$*Math.PI/2,me}),oe=new tn(new A(0,-1,0),0),Me=nd(new Ct({color:"#ffffff",roughness:.05,transmission:1,thickness:.16,ior:1.33,attenuationColor:new Ne("#8f3612"),attenuationDistance:.14,clearcoat:1,clippingPlanes:[oe]})),Ie=Me.userData.infuse,ye=nd(Me.clone(),Ie);ye.transparent=!0,ye.clippingPlanes=[oe];let ue=new Ye(ks([[0,.055],[.97,.055],[1.02,.1],[1.02,1]],.01,128),Me),Ge=new Ye(new gi(1.012,96),new an({color:"#dfe6e4",roughness:.55,metalness:0,transparent:!0,opacity:0,depthWrite:!1,envMapIntensity:.08})),R=new Ne("#dfe6e4"),S=new Ne("#4e1806");Ge.rotation.x=-Math.PI/2;let k=new Ye(new yn(1.016,.007,8,128),new Ct({color:"#9a5a34",roughness:.4,transparent:!0,opacity:0,depthWrite:!1}));k.rotation.x=Math.PI/2;let G=q(3,2.1);G.position.y=.004,ne.add(G,ue,Ge,k,re,...J),ue.renderOrder=Ge.renderOrder=k.renderOrder=1;let y=[11,23,37,41].map(jm),E=Wo(31),N=Array.from({length:12},($,me)=>{let fe=new vs(new Ar({map:y[me%4],color:"#ffffff",transparent:!0,depthWrite:!1,opacity:0}));return fe.userData={seed:me/12+E()*.05,x:(E()-.5)*1.3,z:(E()-.5)*.7,drift:(E()-.5)*.4},ne.add(fe),fe}),O=new Ye(new yn(1.012,.008,8,128),new Ct({color:"#ffffff",roughness:.1,clearcoat:1,transparent:!0,opacity:.55,depthWrite:!1}));O.rotation.x=Math.PI/2,ne.add(O),O.renderOrder=1;let X=new Ct({color:"#ffffff",roughness:.1,clearcoat:1,transparent:!0,opacity:0,depthWrite:!1}),K=[0,1].map(()=>{let $=new Ye(new yn(1,.009,8,72),X.clone());return $.rotation.x=Math.PI/2,$.visible=!1,p.add($),$}),W=ks(Ho,0,128),le=ks(Bm(),.02,96),ie=km(),j=Vm(),ae=new Ct({color:"#dcdcd6",metalness:1,roughness:.3}),de=["original","cozy"].map(($,me)=>{let fe=Wm[$],Xe=new Gt;p.add(Xe);let $e=new tn(new A(0,-1,0),0),Ke=new Ct({color:"#ffffff",roughness:.05,transmission:1,thickness:.62,ior:1.45,attenuationColor:new Ne(fe.syrup),attenuationDistance:.3,clearcoat:1,clippingPlanes:[$e]}),ze=new Ye(le,Ke),qe=new Ye(new gi(1,72),new Ct({color:fe.surface,roughness:.05,clearcoat:1}));qe.rotation.x=-Math.PI/2;let pt=new Ye(new yn(1,.006,8,96),new Ct({color:"#a85a34",roughness:.15,transparent:!0,opacity:.35}));pt.rotation.x=Math.PI/2;let He=new Ye(ie,ae.clone());He.position.y=Nm,He.material.transparent=!1;let We=Gm(fe.label),bt=new an({map:We,emissiveMap:We,emissive:"#ffffff",emissiveIntensity:.1,roughness:.6,side:Rt}),Hn=new Ye(j,bt);Hn.position.y=Om;let Kt=q(1.3,1);return Kt.position.y=.004,Xe.add(Kt,ze,qe,pt,new Ye(W,V),Hn,He),ze.renderOrder=qe.renderOrder=pt.renderOrder=1,Xe.scale.setScalar(I),{id:$,k:fe,g:Xe,fill:$e,syrup:ze,surface:qe,meniscus:pt,cap:He,label:Hn,labelMat:bt,tex:We,shade:Kt,x:me?.55:-.55}}),be=T.map(($,me)=>{let fe=new Ye($.skin.geometry,Bc(v));return fe.morphTargetInfluences=[1],fe.material.userData.dry.value=1,fe.material.roughness=.58,fe.material.clearcoat=.16,fe.material.clearcoatRoughness=.4,fe.material.sheen=.4,fe.material.sheenColor.set("#c07a5c"),fe.scale.setScalar(.16),fe.visible=!1,p.add(fe),fe.material.transparent=!0,{m:fe,x:me?-1.2:-2.02,z:me?.9:.55,ry:me?2.4:-.6}}),ve=[{o:id(1.2),x:1.36,y:.04,z:.3,r:[0,Math.PI/2-.35,0],s:.5},{o:id(1.2),x:1.44,y:.105,z:.04,r:[0,Math.PI/2-.62,.05],s:.5},{o:Xm(),x:1.08,y:.045,z:.82,r:[.05,.4,-.04],s:.58}],we=$=>{let me=[];return $.traverse(fe=>{fe.material&&(fe.material.transparent=!0,me.push(fe.material))}),me};for(let $ of ve)$.o.visible=!1,p.add($.o),$.mats=we($.o);let Re=q(1.5,.9);p.add(Re);let pe=new Gt,Ce=Bc(v);w.push(Ce);for(let $ of T){let me=new Ye($.skin.geometry,Ce);me.morphTargetInfluences=[0],pe.add(me)}let Be=new Ye(B.geometry,U);Be.position.y=Jt+.06,Be.rotation.z=-.15,pe.add(Be);let et=L.clone();pe.add(et);let Ae=.15;pe.scale.setScalar(Ae),p.add(pe);let ke=q(.42,.42);p.add(ke);let Y=q(1,1);p.add(Y);let Se=!1;t&&t.texture&&new Bi().load(t.texture,Vc(0,$=>{$.anisotropy=8;for(let me of w)me.userData.photo.value=$,me.userData.usePhoto.value=1,me.userData.glow.value=.72;Se=!0,Be.visible=et.visible=!1}));let Le=T[1],Te={haut:new wt,fleisch:new wt,pergament:new wt,bohne:new wt};Le.half.add(Te.haut),Te.haut.position.set(.62,.7,.34),Le.pulp.add(Te.fleisch),Te.fleisch.position.set(.58,-.5,.4),Le.parch.add(Te.pergament),Te.pergament.position.set(.3,.6,.3),Le.bean.add(Te.bohne),Te.bohne.position.set(.28,-.42,.22);let C=1,ce=1,De=!0,xe=0,Oe=0,Qe=performance.now(),st=!0,ut=0,dt=null,Nt=null,Dt=new A;function Sn(){if(Nt=null,!dt||!n)return;let[$,me,fe,Xe]=n,$e=dt,Ke=Math.max(10,Math.min(($e.r-$e.l)/(fe-$),($e.b-$e.t)/(Xe-me),Math.min(C,ce)*.2)),ze=($e.l+$e.r)/2-($+fe)/2*Ke,qe=($e.t+$e.b)/2-(me+Xe)/2*Ke,pt=ce/2/(Math.tan(h.fov*Math.PI/360)*12.6*Ke);Nt={ox:(C/2-ze)/C,oy:(ce/2-qe)/ce,zoom:pt}}function Yt($,me){C=$,ce=me,s.setSize($,me,!1),h.aspect=$/me,De=$/me>1.05,h.fov=De?24:tt(33,27,lt(.56,.8,$/me)),h.updateProjectionMatrix(),Te.fleisch.position.set(.58,De?-.5:.55,.4),Te.pergament.position.set(.3,De?.6:.45,.3),Sn()}function Xr($,me,fe,Xe,$e=0){h.clearViewOffset(),h.setViewOffset(C,ce,C*$,ce*me,C,ce),h.position.set(0,Xe+12.6*fe*Math.tan($e),12.6*fe),h.rotation.set(-$e,0,0),h.updateProjectionMatrix()}let Yi=.8,Vs=.58,Zi=.1,Hs={1:.655,"-1":.675},bi=[[.774,.804],[.776,.806]],Ji=2.585,Ki={dried:[{at:[-1.38,2.25,.35],r:[1.1,2.1,.5]},{at:[-1.12,1.15,.35],r:[-1.3,-.4,-.3]}],fresh:{at:[-1.5,1.7,.2],r:[.2,.3,-.35]},spices:[{at:[1.32,2.2,.25],r:[.3,.9,.7]},{at:[1.15,1.05,.45],r:[-.4,1.9,-.5]},{at:[1.42,1.6,.55],r:[1.25,.2,.3]}]},Ws=new A,Qi={skin:1.9,pulp:1.3,parch:.8,bean:.3};function Vn($,me){ut+=me;let fe=ii(.1,.24,$),Xe=lt(.08,.2,$)*(1-lt(.33,.41,$)),$e=lt(.3,.43,$),Ke=lt(.31,.42,$),ze=ii(.34,.45,$),qe=lt(.47,.58,$),pt=ii(.48,.6,$),He=lt(.575,.65,$),We=ii(.575,.655,$),bt=ii(.6,.65,$),Hn=lt(.68,.76,$),Kt=lt(.715,.775,$),on=ii(.77,.79,$),Ft=lt(.772,.82,$),Wt=ii(.79,.835,$),Et=ii(.875,.95,$),hn=lt(.875,.95,$),si=He*(1-hn),Xs=tt(tt(tt(0,-.84,He),.02,Ft),-.06,hn),$s=.2*He*(1-Ft),$r=1-lt(.04,.2,$),at,jr,Xt;De?(at=-.2*(1-Xe)-.03*hn,jr=0,Xt=1-.04*hn):(at=0,jr=tt(tt(-.21,-.03,Xe),-.07,si)-.17*Ft*(1-hn),Xt=1+.3*Xe-.04*He*(1-Ft)+.25*Ft*(1-hn)+.38*hn);let un=Nt||(De?{ox:-.22,oy:.08,zoom:1.32}:{ox:0,oy:.26,zoom:2.02});Xr(tt(at,un.ox,$r),tt(jr,un.oy,$r),tt(Xt,un.zoom,$r),Xs,$s),p.rotation.y=-.35*fe*(1-ze),p.rotation.x=tt(0,.13,fe)*(1-ze);let er=De?0:.85*lt(.1,.2,$)*(1-lt(.38,.46,$)),wi=Se?0:(1-lt(.06,.14,$))*Math.sin(ut*.35)*.55;f.rotation.set(0,wi,er);let qr=.14*lt(.006,.05,$)*(1-lt(.12,.24,$));f.position.y=Math.sin(ut*1.1)*.05*(1-bt)*lt(.02,.1,$)+qr,ne.visible=We>.001&&on<.999,ne.position.set(0,tt(tt(-7.5,F,We),F+1.4,on),0),ne.rotation.z=.12*on;let ft=1-lt(.77,.788,$),bn=ft<.999;ue.material=bn?ye:Me,ee.opacity=ft,Me.opacity=ye.opacity=ft;let Ti=tt(Yi,Vs,Kt),Zt=ne.position.y+Ti;oe.constant=Zt,Ge.position.y=O.position.y=Ti,k.position.y=Yi,k.material.opacity=.5*Kt,Ie.uBloom.value=Hn,Ie.uTime.value=ut,Ie.uTop.value=Zt;let $t=lt(.7,.76,$);Me.thickness=ye.thickness=tt(.16,.9,$t),Me.ior=ye.ior=tt(1.33,1.45,$t),Me.attenuationDistance=ye.attenuationDistance=tt(.14,tt(.75,.48,Kt),$t);let Ot=lt(.7,.77,$);Ge.material.color.copy(R).lerp(S,Ot),Ge.material.opacity=tt(.14,.96,Ot)*ft,O.material.opacity=tt(.55,.2,Ot)*ft,k.material.opacity*=ft;let tr=lt(.63,.69,$)*(1-lt(.772,.79,$))*(.5+.5*Kt);for(let Ee of N){let Mt=Ee.userData,gt=(ut*.16+Mt.seed)%1;Ee.visible=tr>.002,Ee.position.set(Mt.x*(1-gt*.3)+Math.sin(gt*3+Mt.seed*12)*.1+Mt.drift*gt,Ti+.5+gt*(De?1.3:.75),Mt.z),Ee.scale.set(.42+gt*.3,.9+gt*.6,1),Ee.material.opacity=tr*.5*Math.sin(Math.PI*gt)}for(let Ee of T){let Mt=Ee.side*fe;Ee.half.position.x=tt(Mt*Qi.skin,Ee.side*.42,ze),Ee.half.rotation.y=Ee.side*fe*.35*(1-ze),Ee.skin.morphTargetInfluences[0]=Ee.flesh.morphTargetInfluences[0]=pt;let gt=Ee.skin.material;gt.userData.dry.value=qe,gt.roughness=tt(.34,.58,qe),gt.clearcoat=tt(tt(.35,.9,lt(.1,.22,$)),.16,qe),gt.clearcoatRoughness=tt(.14,.4,qe),gt.sheen=tt(.25,.4,qe),gt.sheenColor.set(qe>.5?"#c07a5c":"#ff9b8a");let wn=lt(0,.7,qe);Ee.flesh.material.opacity=Ee.cut.material.opacity=1-wn,Ee.flesh.visible=Ee.cut.visible=fe>.002&&wn<.99;let Tn=1-Ke;Ee.pulp.position.x=Mt*Qi.pulp*(1-ze)*Tn,Ee.pulp.scale.set(Hr*.8,Jt*.86,Gs*.8).multiplyScalar(tt(.55,1,Tn)),Ee.pulp.material.opacity=Tn,Ee.pulp.visible=Ke<.995&&fe>.002,Ee.parch.position.x=Mt*Qi.parch*(1-ze)*Tn,Ee.parch.scale.setScalar(tt(.55,1,Tn)),Ee.parch.material.opacity=Tn,Ee.parch.visible=Ke<.995&&fe>.002;let En=$e,Yr=En*En,qs=Yr*(De?6+Ee.side*.5:7.5+Ee.side*.4),$c=Yr*(De?4.2:-.6)+Math.sin(En*Math.PI)*.5+(Ee.side>0?.1:-.1)*En,jc=Math.cos(-er),qc=Math.sin(-er);if(Ee.bean.position.set(Mt*Qi.bean+qs*jc-$c*qc,qs*qc+$c*jc,-Yr*2.2),Ee.bean.rotation.set(En*2.6*Ee.side,En*3.4,fe*Ee.side*.2+En*1.5),Ee.bean.visible=fe>.002&&En<.999,bt>0){let Ys=Hs[Ee.side],jo=Mi(($-Ys)/.022),Wn=lt(Ys+.022,Ys+.09,$),pd=Math.sin(Wn*Math.PI*1.6)*.08*(1-Wn),Zs=tt(Ee.side*.42,Ee.side*.3,bt),Zr=tt(0,F+1.62,bt),Yc=0;jo>0&&(Zr=tt(Zr,F+Yi-.04,jo*jo)),Wn>0&&(Zs=tt(Zs,Ee.side*.48,Wn)+pd,Zr=tt(Zr,F+Zi+.12,Wn),Yc=tt(0,Ee.side*.16,Wn)),Ee.half.position.set(Zs,Zr-f.position.y,Yc),Ee.half.rotation.set(Wn*1.2*Ee.side,bt*.35*Ee.side+Wn*.8,Ee.side*(bt*.3+Wn*1.7)),Ee.half.scale.setScalar(tt(1,.32,bt)*Math.max(.001,1-lt(.72,.755,$))),Ee.half.getWorldPosition(Ws),(Ee.side>0?Ie.uSrc1:Ie.uSrc0).value.copy(Ws);let Jr=K[Ee.side>0?1:0],Js=Mi(($-Ys-.022)/.05);Jr.visible=Js>0&&Js<1,Jr.visible&&(Jr.position.set(Zs,Zt+.004,0),Jr.scale.setScalar(tt(.06,.95,Math.sqrt(Js))),Jr.material.opacity=.7*(1-Js))}else Ee.half.position.y=0,Ee.half.rotation.x=Ee.half.rotation.z=0,Ee.half.scale.setScalar(1);Ee.half.visible=$<.755}B.visible=L.visible=P.visible=!Se&&fe<.02,de.forEach((Ee,Mt)=>{let gt=ii(bi[Mt][0],bi[Mt][1],$);Ee.g.visible=gt>.001,Ee.g.position.set(Ee.x,tt(-7.5,F,gt),0),Ee.g.rotation.y=Math.sin(ut*.45+Mt*1.7)*.08*lt(.9,1,$),Ee.fill.constant=Ee.g.position.y+Ji*I,Ee.surface.position.y=Ee.meniscus.position.y=Ji;let wn=zm(Ji,.02);Ee.surface.scale.setScalar(wn),Ee.meniscus.scale.set(wn,wn,1),Ee.shade.material.opacity=.8*gt});let js=Wt*(1-Et),nr=(Ee,Mt,gt,wn,Tn)=>{let En=(1-Wt)*.6*Math.sign(gt.at[0]),Yr=Math.sin(ut*.9+Mt*1.9)*.05*js,qs=Math.sin(ut*.5+Mt)*.25*js;Ee.position.set(tt(gt.at[0]+En,wn[0],Et),F+tt(gt.at[1]+Yr,wn[1],Et),tt(gt.at[2],wn[2],Et)),Ee.rotation.set(tt(gt.r[0],Tn[0],Et),tt(gt.r[1]+qs,Tn[1],Et),tt(gt.r[2],Tn[2],Et))};be.forEach((Ee,Mt)=>{Ee.m.visible=Wt>.001,nr(Ee.m,Mt,Ki.dried[Mt],[Ee.x,.104,Ee.z],[Math.PI/2*(Mt?1:-1)*.92,Ee.ry,0]),Ee.m.material.opacity=Wt}),ve.forEach((Ee,Mt)=>{Ee.o.visible=Wt>.001,nr(Ee.o,3+Mt,Ki.spices[Mt],[Ee.x,Ee.y,Ee.z],Ee.r),Ee.o.scale.setScalar(Ee.s);for(let gt of Ee.mats)gt.opacity=Wt}),Re.visible=Et>.001,Re.position.set(1.34,F+.003,.45),Re.material.opacity=.55*Et,pe.visible=Wt>.001,nr(pe,2,Ki.fresh,[-1.6,Ae*Jt+.025,.05],[0,0,-.08]),Ce.transparent=!0,Ce.opacity=Wt,ke.visible=Et>.001,ke.position.set(-1.6,F+.003,.05),ke.material.opacity=.7*Et,Y.position.set(0,-Jt-.55,0),Y.scale.set(2.5*(1+fe*.6*(1-ze)),1.7,1),Y.material.opacity=.6*(1-fe*.35*(1-ze))*(1-lt(.59,.65,$))*lt(.03,.1,$),Y.visible=$<.65}function b($,me,fe,Xe){return Dt.set(me,fe,Xe),$.localToWorld(Dt),Dt.project(h),{x:(Dt.x*.5+.5)*C,y:(-Dt.y*.5+.5)*ce}}function Z(){let $={};for(let[me,fe]of Object.entries(Te))$[me]=b(fe,0,0,0);return $}function te(){f.updateMatrixWorld();let $=b(f,0,0,0),me=b(f,-Hr,0,0),fe=b(f,0,Jt,0);return{x:$.x,y:$.y,rx:$.x-me.x,ry:$.y-fe.y}}let he=0,Q="",ge=!1,Ue=0,Fe=[],Ve=0,Je=$=>{a=Math.max(1,$),s.setPixelRatio(a)};function je($){if(!st)return;he++;let me=$-Qe,fe=Math.min(.05,me/1e3);Qe=$,!ge&&me<200&&(Fe.push(me),Fe.length===45&&(Fe.sort((Ke,ze)=>Ke-ze)[22]>40&&a>1&&Je(a*.8),Fe=[]));let Xe=(xe-Oe)*(1-Math.pow(i?.02:9e-4,fe));i&&(Xe=Math.max(-.3*fe,Math.min(.3*fe,Xe))),Oe+=Xe,Math.abs(xe-Ue)>.25&&(Oe=xe),Ue=xe,Math.abs(xe-Oe)<1e-4&&(Oe=xe);try{Vn(ji(Oe),fe),(!ge||$-Ve>400)&&(s.render(l,h),Ve=$),e?.(ji(Oe),Z,te)}catch($e){Q=String($e&&$e.stack||$e).slice(0,300)}requestAnimationFrame(je)}return{resize:Yt,set background($){l.background.set($)},set progress($){xe=Mi($)},set cover($){ge=!!$,ge||s.render(l,h)},set frame($){dt=$,Sn(),st||(Vn(ji(Oe),0),s.render(l,h))},get progress(){return Oe},jump($){xe=Oe=Mi($),Vn(ji(Oe),0),s.render(l,h),e?.(ji(Oe),Z,te)},start(){st||(st=!0,Qe=performance.now(),requestAnimationFrame(je))},stop(){st=!1},begin(){Qe=performance.now(),requestAnimationFrame(je)},async warm(){let $=performance.now();for(;Gc.size&&performance.now()-$<6e3;)await new Promise(fe=>setTimeout(fe,60));let me=Oe;for(let fe of[.12,.3,.45,.58,.66,.74,.776,.79,.83,.88,.95,1]){if(!document.documentElement.classList.contains("is-loading"))break;Vn(fe,0),s.render(l,h),await new Promise(Xe=>requestAnimationFrame(Xe))}Vn(ji(me),0),s.render(l,h)},tune(){if(!document.documentElement.classList.contains("is-loading"))return;let $=Oe,me=Math.min(a,1.25),fe=s.getContext(),Xe=new Uint8Array(4),$e=8,Ke=ze=>{Vn(ze,0);let qe=performance.now();return s.render(l,h),fe.readPixels(0,0,1,1,fe.RGBA,fe.UNSIGNED_BYTE,Xe),performance.now()-qe};for(let ze=0;ze<3;ze++){o=0;for(let qe of[.3,.66,.95])Ke(qe),o=Math.max(o,Math.min(Ke(qe),Ke(qe),Ke(qe)));if(o<=$e||a<=me)break;Je(Math.max(me,a*Math.sqrt($e/o)))}Vn(ji($),0),s.render(l,h)},labels:Z,fruitBox:te,get photoReady(){return Se},renderer:s,state:()=>({frames:he,running:st,target:+xe.toFixed(3),progress:+Oe.toFixed(3),ratio:+a.toFixed(2),cost:+o.toFixed(1),lastError:Q})}}var ld="http://www.w3.org/2000/svg",ct={ink:"58, 33, 22",glow:["#F7DDAE","#F1C28C","#E9AA79"],sun:["#F8E5BC","#F3D09A","#EDB57B","#E49862","#D87A47"],cloudTop:"#F4E4C8",cloudLow:"#E8AE86",ridge:["#E2AE86","#D49670","#BE8059","#9A7448","#77653B","#55492B"],cut:["#EDC09C","#E1AA84","#CF9670","#AE8A5D","#8B7A4E","#6A5C3A"],row:["#8A6C43","#665A34","#4B4127"],tree:["#A57250","#7E623E","#5C4E30"],berry:"#B3262A",berryDark:"#8E2B1E",roof:"#B4592A",wall:"#E9C9A0",window:"#F8D88E",door:"#5A3A26",soil:"#3A2116",soilCut:"#9C4B23",leaf:["#2F3B24","#3B4A2B","#485A31","#34432A"],vein:"#E0A86B",twig:"#3A2116",close:["#2E2617","#2A2215"],mist:"#F6E3C8",bird:"#3A2116"};function Wc(r){let e=r>>>0;return()=>(e=Math.imul(e,1664525)+1013904223>>>0)/4294967296}var D=r=>(Math.round(r*10)/10).toString();function Gn(r,e=!1){let t=r.length;if(t<2)return"";let n=`M${D(r[0][0])} ${D(r[0][1])}`,i=e?t:t-1;for(let s=0;s<i;s++){let a=r[e?(s-1+t)%t:Math.max(0,s-1)],o=r[s],l=r[(s+1)%t],c=r[e?(s+2)%t:Math.min(t-1,s+2)];n+=`C${D(o[0]+(l[0]-a[0])/6)} ${D(o[1]+(l[1]-a[1])/6)} ${D(l[0]-(c[0]-o[0])/6)} ${D(l[1]-(c[1]-o[1])/6)} ${D(l[0])} ${D(l[1])}`}return e?`${n}Z`:n}var ri=(r,e,t)=>`M${D(r+t)} ${D(e)}a${D(t)} ${D(t)} 0 1 0 ${D(-2*t)} 0a${D(t)} ${D(t)} 0 1 0 ${D(2*t)} 0Z`,Xo=(r,e,t,n)=>`M${D(r+t)} ${D(e)}a${D(t)} ${D(n)} 0 1 0 ${D(-2*t)} 0a${D(t)} ${D(n)} 0 1 0 ${D(2*t)} 0Z`;function Xc(r,e,t,n,i,s){let o=[],l=[],c=.025+s()*.03,h=s()*6;for(let _=0;_<=28;_++){let x=_/28,M=Math.sin(Math.PI*Math.pow(x,.78))*(1-.18*x);x>.78&&(M*=1-Math.pow((x-.78)/.22,1.3)*.6),M*=n*(1+c*Math.sin(x*20+h)),o.push([x*t,-M]),l.push([x*t,M*(.92+.08*Math.sin(x*9+h))])}let u=Math.cos(i),d=Math.sin(i),p=([_,x])=>[r+_*u-x*d,e+_*d+x*u],f=Gn([...o,...l.reverse()].map(p),!0),v=(s()-.5)*n*.25,m=_=>[_*t,Math.sin(Math.PI*_)*v],g=Gn([.04,.3,.55,.8,.93].map(_=>p(m(_))));for(let _=1;_<=6;_++){let x=.1+_*.115,[M,w]=m(x),T=Math.sin(Math.PI*Math.pow(x,.78))*n*(1-.18*x)*.78;for(let U of[-1,1])g+=Gn([[M,w],[M+T*.45,w+U*T*.55],[M+T*.95,w+U*T*.86]].map(p))}return{shape:f,veins:g}}var Si=(r,e)=>{for(let t=1;t<r.length;t++)if(r[t][0]>=e){let[n,i]=r[t-1],[s,a]=r[t];return i+(a-i)*(e-n)/(s-n)}return r[r.length-1][1]},$o=(r,e)=>r.map(([t,n])=>[t,n+e+Math.sin(t*.013+e)*Math.abs(e)*.08]);function cd(r,e,t,n,i,s,a,o){let l="",c="";for(let h=t;h<n;h+=i*(1.55+a()*.35)){let u=Si(r,h)+e+Math.sin(h*.013+e)*Math.abs(e)*.08,d=i*(.85+a()*.3),p=s*(.8+a()*.4);l+=`M${D(h-d)} ${D(u)}A${D(d)} ${D(p)} 0 0 1 ${D(h+d)} ${D(u)}Z`,o&&a()<.45&&(c+=ri(h+(a()-.5)*d,u-p*(.3+a()*.4),Math.max(.8,i*.13)))}return{d:l,b:c}}function qm(r,e,t){let n=`M${D(r-t*.09)} ${D(e)}L${D(r-t*.04)} ${D(e-t*2.5)}L${D(r+t*.04)} ${D(e-t*2.5)}L${D(r+t*.09)} ${D(e)}Z`,i=Xo(r,e-t*2.65,t*1.35,t*.42)+Xo(r-t*.7,e-t*2.4,t*.78,t*.32)+Xo(r+t*.72,e-t*2.45,t*.85,t*.34)+Xo(r+t*.1,e-t*2.95,t*.7,t*.3);return n+i}function Ym(r,e,t){let n=t*1.7,i=t,s=`M${D(r-n/2)} ${D(e)}V${D(e-i)}H${D(r+n/2)}V${D(e)}Z`,a=`M${D(r-n/2-t*.2)} ${D(e-i+t*.04)}L${D(r)} ${D(e-i-t*.62)}L${D(r+n/2+t*.2)} ${D(e-i+t*.04)}Z`,o=`M${D(r-t*.52)} ${D(e-i*.7)}h${D(t*.34)}v${D(t*.3)}h${D(-t*.34)}Z`,l=`M${D(r+t*.12)} ${D(e)}v${D(-t*.55)}h${D(t*.3)}v${D(t*.55)}Z`,c="",h="";for(let u=0;u<2;u++){let d=r+n/2+t*(.55+u*1.55),p=e-t*.36,f=t*1.3;c+=`M${D(d)} ${D(p)}h${D(f)}v${D(t*.1)}h${D(-f)}Z`;for(let v of[.08,.92])c+=`M${D(d+f*v-t*.03)} ${D(p+t*.1)}h${D(t*.06)}V${D(e)}h${D(-t*.06)}Z`;for(let v=0;v<9;v++)h+=ri(d+f*(.08+v*.105),p-t*.045,t*.055)}return{wall:s,roof:a,win:o,door:l,beds:c,cherries:h,glow:[r-t*.35,e-i*.55,t*.8]}}function hd(r,e,t,n){let i=t*.42,s=[];for(let c=0;c<=20;c++){let h=-1+2*c/20;s.push([r+h*t/2,e-i*Math.pow(Math.max(0,1-h*h),.7)-(c%2?i*.05:0)*(1-Math.abs(h))])}let a=`${Gn(s)}L${D(r+t/2)} ${D(e)}L${D(r-t/2)} ${D(e)}Z`,o=["#B3262A","#C9452B","#8E2B1E","#A8321F","#6E2A1A"],l=o.map(()=>"");for(let c=0;c<46;c++){let h=n()*2-1,u=n()*Math.pow(Math.max(0,1-h*h),.7)*.92,d=Math.floor(n()*o.length);l[d]+=ri(r+h*t*.46,e-i*u-t*.02,t*(.035+n()*.018))}return{mound:a,cherries:l.map((c,h)=>`<path fill="${o[h]}" d="${c}"/>`).join("")}}function Zm(r,e){let t=r*2.6,n=r*2.3,i=t/2,s=n,a="",o="",l="";return[[11,.55,.95,1.05,.32],[7,.95,.78,.7,.3]].forEach(([h,u,d,p,f],v)=>{for(let m=0;m<h;m++){let g=-Math.PI/2+(m-(h-1)/2)*(d*2.6/h)+(e()-.5)*.2,_=i+Math.cos(g)*r*.18,x=s-r*u*.45+Math.sin(g)*r*.12,M=r*p*(.7+e()*.35);o+=`M${D(i)} ${D(s-r*u*.3)}L${D(_)} ${D(x)}`,a+=`<path fill="${ct.leaf[(m+v)%4]}" d="${Xc(_,x,M,M*f,g+(e()-.5)*.25,e).shape}"/>`,(m+v)%3===1&&(l+=ri(_+Math.cos(g)*r*.2,x+Math.sin(g)*r*.2+r*.06,r*.06)+ri(_+Math.cos(g)*r*.26+r*.05,x+Math.sin(g)*r*.2+r*.13,r*.055))}}),o=`M${D(i)} ${D(s)}L${D(i)} ${D(s-r*.5)}`+o,{w:t,h:n,svg:`<path fill="none" stroke="${ct.twig}" stroke-width="${D(r*.06)}" stroke-linecap="round" d="${o}"/>${a}<path fill="${ct.berry}" d="${l}"/>`}}function Jm(r,e){let t=r*1.6,n=r*1.4,i="";for(let s=0;s<7;s++){let a=t*(.2+s*.1),o=(e()-.5)*r*.9,l=n*(.15+e()*.4),c=r*.045;i+=`M${D(a-c)} ${D(n)}Q${D(a+o*.3)} ${D((n+l)/2)} ${D(a+o)} ${D(l)}Q${D(a+o*.3+c)} ${D((n+l)/2)} ${D(a+c)} ${D(n)}Z`}return{w:t,h:n,svg:`<path fill="${ct.leaf[1]}" d="${i}"/>`}}function Km(r){let e=r*1.1,t=r*2.05,n=e/2,i=(a,o)=>`<path class="${o}" fill="#4A3424" d="M${D(n+a-r*.07)} ${D(t*.6)}h${D(r*.14)}l${D(r*.02)} ${D(t*.38)}h${D(-r*.18)}z"/>`,s=(a,o)=>`<path class="${o}" fill="#9C4B23" d="M${D(n+a-r*.05)} ${D(t*.3)}h${D(r*.1)}l${D(r*.02)} ${D(t*.27)}h${D(-r*.13)}z"/>`;return{w:e,h:t,svg:i(-r*.09,"dio__leg dio__leg--b")+s(r*.16,"dio__arm dio__arm--b")+`<path fill="#A8743E" d="M${D(n-r*.52)} ${D(t*.27)}h${D(r*.34)}l${D(-r*.04)} ${D(t*.3)}h${D(-r*.26)}z"/><path fill="none" stroke="#7A5128" stroke-width="${D(r*.03)}" d="M${D(n-r*.5)} ${D(t*.36)}h${D(r*.3)}M${D(n-r*.48)} ${D(t*.45)}h${D(r*.28)}"/><path fill="#B4592A" d="M${D(n-r*.2)} ${D(t*.28)}h${D(r*.4)}l${D(r*.03)} ${D(t*.34)}h${D(-r*.46)}z"/>`+i(r*.09,"dio__leg dio__leg--f")+`<circle fill="#8A5A3C" cx="${D(n+r*.02)}" cy="${D(t*.2)}" r="${D(r*.14)}"/><ellipse fill="#D9B27A" cx="${D(n+r*.02)}" cy="${D(t*.13)}" rx="${D(r*.34)}" ry="${D(r*.07)}"/><path fill="#C99E62" d="M${D(n-r*.12)} ${D(t*.13)}q${D(r*.14)} ${D(-r*.26)} ${D(r*.28)} 0z"/>`+s(-r*.16,"dio__arm dio__arm--f")}}function Qm(r,e,t){let n=t*.16,i=n/2;return`M${D(r-t/2+i)} ${D(e)}H${D(r+t/2-i)}A${D(i)} ${D(i)} 0 0 0 ${D(r+t/2-i)} ${D(e-n)}H${D(r-t/2+i)}A${D(i)} ${D(i)} 0 0 0 ${D(r-t/2+i)} ${D(e)}Z`+ri(r-t*.18,e-n-t*.03,t*.13)+ri(r+t*.06,e-n-t*.07,t*.17)+ri(r+t*.27,e-n-t*.01,t*.1)}var ud=.74,ef=[{id:"sky",depth:.06,fly:[0,-.05,.12],flyNarrow:[0,-.02,.1]},{id:"far",depth:.16,fly:[0,.16,-.03],flyNarrow:[0,.04,.16]},{id:"mid",depth:.3,fly:[0,.28,-.01],flyNarrow:[0,.08,.3]},{id:"near",depth:.46,fly:[0,.42,.02],flyNarrow:[0,.12,.45]},{id:"soil",depth:.62,fly:[0,.6,.04],flyNarrow:[0,.16,.6]},{id:"branch",depth:.82,fly:[.55,-.06,.3],flyNarrow:[.5,-.08,.3]},{id:"close",depth:1,fly:[.8,.15,.7],flyNarrow:[.8,.15,.7]}],Wr=null;function tf(r,e,t){if(!Wr){Wr=document.createElement("canvas"),Wr.width=Wr.height=128;let n=Wr.getContext("2d"),i=n.createImageData(128,128),s=Wc(99);for(let a=0;a<i.data.length;a+=4){let o=s(),l=o>.5,c=Math.abs(o-.5)*2;i.data[a]=l?255:58,i.data[a+1]=l?246:33,i.data[a+2]=l?232:22,i.data[a+3]=Math.round(c*c*30)}n.putImageData(i,0,0)}r.save(),r.globalCompositeOperation="source-atop",r.fillStyle=r.createPattern(Wr,"repeat"),r.fillRect(0,0,e,t),r.restore()}var nf={sky:1,far:1,mid:1.5,near:1.5,soil:1.5,branch:2,close:1},rf=(r,e)=>Math.min(e,e>2?2:nf[r]||1);function dd(r){r.innerHTML="";let e=document.createElement("div");e.className="dio__ground",r.append(e);let t=ef.map((L,P)=>{let F=document.createElement("div");F.className=`dio__layer dio__layer--${L.id}`,F.style.setProperty("--i",P);let I=document.createElement("div");I.className="dio__rise";let H=document.createElement("canvas");H.className="dio__paint";let z=document.createElementNS(ld,"svg");z.setAttribute("aria-hidden","true"),z.style.display="none";let q=document.createElement("div");q.className="dio__fx";let V=document.createElement("div");return V.className="dio__fx",I.append(V,H,z,q),F.append(I),r.append(F),{...L,wrap:F,paint:H,svg:z,fx:q,back:V,tf:""}}),n=Object.fromEntries(t.map(L=>[L.id,L])),i="",s=0,a=0,o=0,l=0,c=[],h=null,u=0,d=-1,p=null,f=[],v,m=new Promise(L=>{v=L}),g=(L,P,F,I,H,z,q,V="",ne=!1)=>{let ee=document.createElement("div");return ee.className=P,ee.style.cssText=`left:${D(F)}px;top:${D(I)}px;width:${D(H)}px;height:${D(z)}px;${V}`,ee.innerHTML=q?`<svg viewBox="0 0 ${D(H)} ${D(z)}" width="${D(H)}" height="${D(z)}" aria-hidden="true">${q}</svg>`:"",(ne?L.back:L.fx).append(ee),f.push(P==="dio__bird"?ee.firstElementChild:ee),ee};function _(L,P,F,I,H){let z=[L.x,L.y,L.rx,P,F,I,H&&H.top].map(ie=>Math.round(+ie||0)).join(",");if(z===i||!P||!F||!L.rx)return;i=z;for(let ie of t)ie.fx.innerHTML="",ie.back.innerHTML="";f=[],d=-1,c=[],h=null;let{x:q,y:V}=L,ne=L.rx,ee=L.ry||L.rx*1.27,re=ne/ud,se=ee/ud,J=Wc(1712),oe=(ie,j,ae,de)=>`<filter id="${ie}" x="-10%" y="-30%" width="120%" height="170%"><feDropShadow dx="0" dy="${j}" stdDeviation="${ae}" flood-color="rgb(${ct.ink})" flood-opacity="${de}"/></filter>`,Me={},Ie=F+20,ye=H?H.bottom+34:F*.7,ue=(ie,j)=>I||!H||ie>H.right+40||j>ye+8,Ge=ie=>`<clipPath id="${ie}"><path d="M${D(H?H.right+40:0)} -60H${D(P+60)}V${D(F+60)}H-60V${D(ye+8)}H${D(H?H.right+40:0)}Z"/></clipPath>`,R=q+re*(I?.1:.28),S=V+se*(I?.12:.18),k=re*(I?2.2:2.6);{let ie=Math.max(P,F)*(I?.75:.62);Me.sky=`<defs>${oe("dsky",3,6,.16)}<radialGradient id="glow" cx="${D(R)}" cy="${D(S)}" r="${D(ie)}" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${ct.glow[0]}"/><stop offset=".22" stop-color="${ct.glow[1]}" stop-opacity=".9"/><stop offset=".48" stop-color="${ct.glow[2]}" stop-opacity=".42"/><stop offset="1" stop-color="${ct.glow[2]}" stop-opacity="0"/></radialGradient></defs><radialGradient id="sund" cx=".42" cy=".38" r=".7"><stop offset="0" stop-color="#FCEFD2"/><stop offset=".45" stop-color="#F6D7A2"/><stop offset="1" stop-color="#ECB077"/></radialGradient><linearGradient id="sky" x1="0" y1="0" x2="0" y2="${D(V+se*1.3)}" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#E6D3B7" stop-opacity="0"/><stop offset=".55" stop-color="#EDCDA6" stop-opacity=".5"/><stop offset="1" stop-color="#EBBE8F" stop-opacity=".75"/></linearGradient><rect width="${P}" height="${F}" fill="url(#sky)"/><rect width="${P}" height="${F}" fill="url(#glow)"/><path filter="url(#dsky)" fill="url(#sund)" d="${ri(R,S,k)}"/>`;let j=k*1.75;g(n.sky,"dio__halo",R-j,S-j,j*2,j*2,`<defs><radialGradient id="halo"><stop offset=".5" stop-color="#FBE3B8" stop-opacity=".55"/><stop offset="1" stop-color="#FBE3B8" stop-opacity="0"/></radialGradient></defs><circle cx="${D(j)}" cy="${D(j)}" r="${D(j)}" fill="url(#halo)"/><circle cx="${D(j)}" cy="${D(j)}" r="${D(k*1.13)}" fill="none" stroke="#FBE8C4" stroke-opacity=".75" stroke-width="${D(Math.max(1.5,k*.022))}"/><circle cx="${D(j)}" cy="${D(j)}" r="${D(k*1.3)}" fill="none" stroke="#FBE8C4" stroke-opacity=".4" stroke-width="${D(Math.max(1,k*.014))}"/>`,"",!0),(I?[[P*.2,V-se*1.05,re*1.7],[P*.82,V-se*1.5,re*1.3]]:[[q-re*3.1,V-se*1.2,re*2],[q+re*2.75,Math.max(V-se*1.4,150),re*1.35],[q-re*1.2,Math.max(V-se*2.1,130),re*1.1]]).forEach(([ve,we,Re],pe)=>{let Ce=Re*.5,Be=`cg${pe}`;g(n.sky,"dio__cloud",ve-Re*.6,we-Ce,Re*1.2,Ce+12,`<defs><linearGradient id="${Be}" x1="0" y1="0" x2="0" y2="1"><stop offset=".35" stop-color="${ct.cloudTop}"/><stop offset="1" stop-color="${ct.cloudLow}"/></linearGradient>${oe(`${Be}s`,3,4,.14)}</defs><path filter="url(#${Be}s)" fill="url(#${Be})" d="${Qm(Re*.6,Ce,Re)}"/>`,`--drift:${D((pe%2?-1:1)*re*1.5)}px;--dur:${22+pe*6}s;--delay:${-pe*7}s`)});let de=I?3:5,be=Math.max(I?96:160,V-se*1.9);for(let ve=0;ve<de;ve++){let we=re*(I?.26:.22)*(1-ve*.06);g(n.sky,"dio__bird",P*1.04,be+ve*re*.22+ve%2*re*.12,we*2,we,`<path fill="none" stroke="${ct.bird}" stroke-width="${D(Math.max(1.2,we*.12))}" stroke-linecap="round" stroke-linejoin="round" d="M${D(we*.05)} ${D(we*.55)}Q${D(we*.55)} ${D(we*.05)} ${D(we)} ${D(we*.62)}Q${D(we*1.45)} ${D(we*.05)} ${D(we*1.95)} ${D(we*.55)}"/>`,`--fly:${D(-P*1.25)}px;--rise:${D(-se*(.3+ve*.05))}px;--dur:${26+ve*1.6}s;--delay:${D(ve*.9+2.5)}s;--flap:${D(.55+ve*.07)}s`)}}let G=(ie,j)=>{let ae=ie/(j-1),de=Ie-(V+se*.2),be=I?V+se*.2+de*(.02+ae*.62):V+se*(.1+ae*1.6),ve=I?V+se*.2+de*(.12+ae*.62):Math.max(ye,V+se*.9)+ae*(F-Math.max(ye,V+se*.9))*.78,we=I?de*(.1-ae*.055):se*(.62-ae*.38),Re=[J()*6.3,J()*6.3,J()*6.3],pe=[1.3+J()*.8,3.2+J()*1.4,7+J()*3],Ce=[];for(let Be=0;Be<=64;Be++){let et=-60+(P+120)*Be/64,Ae=Math.min(1,Math.max(0,et/P)),ke=ve+(be-ve)*Ae*Ae*(3-2*Ae),Y=ke-we*(.55*Math.sin(Ae*pe[0]*Math.PI+Re[0])+.3*Math.sin(Ae*pe[1]*Math.PI+Re[1])+.15*Math.sin(Ae*pe[2]*Math.PI+Re[2]));!I&&H&&(Y+=Math.min(1,Math.max(0,(H.right+220-et)/220))*Math.max(0,ye+we*1.1-ke)),Ce.push([et,Y])}return{crest:Ce,d:`${Gn(Ce)}L${D(P+60)} ${D(Ie)}L-60 ${D(Ie)}Z`,u:ae}},y=Array.from({length:6},(ie,j)=>G(j,6)),E=(ie,j,ae,de)=>`<path fill="none" stroke="${ct.cut[de]}" stroke-width="${D(1.1+de*.25)}" stroke-linecap="round" stroke-opacity=".85" d="${Array.from({length:ae},(be,ve)=>Gn($o(ie,j*(ve+1)))).join("")}"/>`,N=(ie,j="")=>`<path filter="url(#dr${ie})" fill="${ct.ridge[ie]}" d="${y[ie].d}"/>${j}`,O=ie=>ie.map(j=>oe(`dr${j}`,2+j,4+j,.14+j*.03)).join(""),X=-20,K=P+20,W=(ie,j,ae,de)=>{let be=$o(ie,j-ae),ve=$o(ie,j+ae).reverse();return`<defs><linearGradient id="mg${de}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${ct.mist}" stop-opacity="0"/><stop offset=".5" stop-color="${ct.mist}" stop-opacity=".55"/><stop offset="1" stop-color="${ct.mist}" stop-opacity="0"/></linearGradient></defs><path fill="url(#mg${de})" d="${Gn([...be,...ve],!0)}"/>`};Me.far=`<defs>${O([0,1])}</defs>`+N(0)+N(1,E(y[1].crest,se*.075,4,1));let le=(ie,j,ae,de,be,ve,we)=>{let Re=j.map(([,Be])=>Be),pe=Math.min(...Re)+ae-de*1.3,Ce=Math.max(...Re)+ae+de*1.3;g(ie,"dio__mist",-P*.1,pe,P*1.2,Ce-pe,`<g transform="translate(${D(P*.1)} ${D(-pe)})">${W(j,ae,de,be)}</g>`,`--drift:${D(ve)}px;--dur:${we}s`)};le(n.far,y[1].crest,se*.05,se*(I?.14:.2),0,re*.7,28);{let ie=y[2].crest,j=y[3].crest,ae=N(2,E(ie,se*.085,5,2)),de="",be=I?[.1,.34,.7,.93]:[.52,.63,.78,.9,.97];for(let Y of be){let Se=P*Y+(J()-.5)*re*.4,Le=Si(ie,Se)+se*.12,Te=re*(I?.3:.26)*(.8+J()*.4);ue(Se,Le-Te*3)&&(de+=qm(Se,Le,Te))}ae+=`<path fill="${ct.tree[0]}" d="${de}"/>`+N(3);let ve="",we="";for(let Y=0;Y<4;Y++){let Se=se*(.12+Y*.13),Le=re*(I?.085:.075)*(1+Y*.12),Te=cd(j,Se,X,K,Le,Le*.62,J,Y>1);ve+=Te.d,we+=Te.b}ae+=`<g${I?"":' clip-path="url(#free3)"'}><path fill="${ct.row[0]}" d="${ve}"/><path fill="${ct.berry}" d="${we}"/></g>`;let Re=I?P*.2:Math.max(H?H.right+re*1.4:P*.6,q-re*2.6),pe=re*(I?.3:.28),Ce=Ym(Re,Si(j,Re)+se*.1,pe);ae+=`<path fill="${ct.tree[1]}" d="${Ce.beds}"/><path fill="${ct.berry}" d="${Ce.cherries}"/>`;let Be=re*(I?.5:.42),et=Km(Be),Ae=I?P*.08:Math.max(H?H.right+60:P*.45,Re-pe*1.5),ke=I?P*.7:Math.min(P*.95,q+re*1.4);h={el:g(n.near,"dio__farmer",0,0,et.w,et.h,`<g class="dio__farmer-body">${et.svg}</g>`),crest:y[4].crest,dy:se*.12,from:Ae,to:ke,w:et.w,h:et.h};for(let[Y,Se]of I?[[Re+pe*5.2,pe*2.2],[Re-pe*2.4,pe*1.6]]:[[Re-pe*2.6,pe*2.1],[Re+pe*5.4,pe*2.6]]){let Le=Si(j,Y)+se*.12;if(!ue(Y-Se/2,Le-Se*.4))continue;let Te=hd(Y,Le,Se,J);c.push([Y,Le,Se]),ae+=`<path filter="url(#dheap)" fill="#7A2418" d="${Te.mound}"/>${Te.cherries}`}Me.mid=`<defs>${O([2,3])}${oe("dheap",3,3,.3)}<radialGradient id="wglow"><stop offset="0" stop-color="${ct.window}" stop-opacity=".45"/><stop offset="1" stop-color="${ct.window}" stop-opacity="0"/></radialGradient>${I?"":Ge("free3")}</defs>${ae}`,le(n.mid,j,-se*(I?.12:.3),se*(I?.1:.13),1,-re*.6,36)}{let ie="";for(let ae of[4,5]){ie+=N(ae);let de="",be="";for(let ve=0;ve<(ae===4?3:2);ve++){let we=se*(.14+ve*.17),Re=re*(I?.11:.1)*(1+ve*.15)*(ae===5?1.25:1),pe=cd(y[ae].crest,we,X,K,Re,Re*.62,J,!0);de+=pe.d,be+=pe.b}ie+=`<g${I?"":` clip-path="url(#free${ae})"`}><path fill="${ct.row[ae-3]}" d="${de}"/><path fill="${ct.berryDark}" d="${be}"/></g>`}Me.near=`<defs>${O([4,5])}${I?"":Ge("free4")+Ge("free5")}</defs>${ie}`;{let ae=I?P*.78:Math.max(H?H.right+re*2.2:P*.55,q-re*1.6),de=re*(I?1.25:1.15),be=Si(y[4].crest,ae)+se*.2;if(ue(ae-de/2,be-de*.4)){let ve=hd(ae,be,de,J);c.push([ae,be,de]),Me.near+=`<defs>${oe("dheap2",4,4,.32)}</defs><path filter="url(#dheap2)" fill="#7A2418" d="${ve.mound}"/>${ve.cherries}`}}(I?[.06,.34,.62]:[.56,.67,.8,.93]).forEach((ae,de)=>{let be=P*ae+(J()-.5)*re*.3,ve=Si(y[5].crest,be)+se*.2,we=re*(I?.5:.46)*(.85+J()*.3);if(!ue(be,ve-we*2))return;let Re=Zm(we,J);g(n.near,"dio__sway",be-Re.w/2,ve-Re.h,Re.w,Re.h,Re.svg,`--dur:${D(4.2+de*.7)}s;--delay:${D(-de*1.3)}s;--deg:${D(1.6+J())}deg`)})}{let ie=F-Math.max(I?30:40,F*(I?.05:.075)),j=[];for(let be=0;be<=48;be++){let ve=-60+(P+120)*be/48;j.push([ve,ie-Math.sin(ve*.006+1)*se*.09-Math.sin(ve*.019)*se*.04])}let ae=`${Gn(j)}L${D(P+60)} ${D(F+50)}L-60 ${D(F+50)}Z`;(I?[.12,.45,.7,.93]:[.5,.6,.71,.83,.95]).forEach((be,ve)=>{let we=P*be+(J()-.5)*re*.4,Re=Si(j,we)+3,pe=re*(I?.42:.38)*(.8+J()*.4);if(!ue(we,Re-pe))return;let Ce=Jm(pe,J);g(n.soil,"dio__sway",we-Ce.w/2,Re-Ce.h,Ce.w,Ce.h,Ce.svg,`--dur:${D(2.8+ve*.5)}s;--delay:${D(-ve*.9)}s;--deg:${D(3+J()*2)}deg`)}),Me.soil=`<defs>${oe("dsoil",7,10,.34)}</defs><path filter="url(#dsoil)" fill="${ct.soil}" d="${ae}"/><path fill="none" stroke="${ct.soilCut}" stroke-width="1.8" stroke-linecap="round" stroke-dasharray=".5 10" d="${[1,2,3].slice(0,I?2:3).map(be=>Gn($o(j,se*.09*be))).join("")}"/>`}{let ie=[[P+re*.7,V-se*(I?.05:.2)],[q+re*1.7,V+se*.95],[q+ne*.05,V+ee*.97],[q-re*.75,V+se*.86],[q-re*1.2,V+se*.64]],j=[],ae=[ie[0],...ie,ie[ie.length-1]];for(let ce=1;ce<ae.length-2;ce++)for(let De=0;De<20;De++){let xe=De/20,Oe=ae[ce-1],Qe=ae[ce],st=ae[ce+1],ut=ae[ce+2];j.push([0,1].map(dt=>.5*(2*Qe[dt]+(-Oe[dt]+st[dt])*xe+(2*Oe[dt]-5*Qe[dt]+4*st[dt]-ut[dt])*xe*xe+(-Oe[dt]+3*Qe[dt]-3*st[dt]+ut[dt])*xe*xe*xe)))}j.push(ie[ie.length-1]);let de=[0];for(let ce=1;ce<j.length;ce++)de.push(de[ce-1]+Math.hypot(j[ce][0]-j[ce-1][0],j[ce][1]-j[ce-1][1]));let be=de[de.length-1],ve=ce=>{let De=ce*be,xe=1;for(;xe<de.length-1&&de[xe]<De;)xe++;let Oe=(De-de[xe-1])/Math.max(1e-6,de[xe]-de[xe-1]);return[j[xe-1][0]+(j[xe][0]-j[xe-1][0])*Oe,j[xe-1][1]+(j[xe][1]-j[xe-1][1])*Oe]},we=0,Re=1/0;for(let ce=0;ce<=100;ce++){let[De,xe]=ve(ce/100),Oe=Math.hypot(De-ie[2][0],xe-ie[2][1]);Oe<Re&&(Re=Oe,we=ce/100)}let pe="",Ce="",Be="",et=[],Ae=(ce,De,xe,Oe,Qe,st=!1)=>{let[ut,dt]=ve(ce),Nt=Xc(ut,dt,De*re,De*xe*re,Oe,J),Dt=`<path fill="${ct.leaf[Qe]}" d="${Nt.shape}"/>`;st?pe+=Dt:Ce+=Dt,et.push(Nt.veins)},ke=I?.74:.76;Ae(we,3.3*ke,.31,-1.2,0,!0),Ae(we,2.8*ke,.3,-.75,1,!0),Ae(we,2.5*ke,.3,-3.05,3,!0),Ae(we*.62,3.2*ke,.32,-1.45,2),Ae(we*.6,2.9*ke,.31,1.2,0),I||(Ae(we*.25,3*ke,.31,-1.15,3),Ae(we*.22,2.7*ke,.3,1.5,1)),Ae(.97,1.25*ke,.3,-2.55,2),Ae(.97,1.05*ke,.3,-1.85,2);let Y=[],Se=[];for(let ce=0;ce<=40;ce++){let De=ce/40,[xe,Oe]=ve(De),[Qe,st]=ve(Math.min(1,De+.01)),[ut,dt]=ve(Math.max(0,De-.01)),Nt=-(st-dt),Dt=Qe-ut,Sn=Math.hypot(Nt,Dt)||1,Yt=re*(.14-.075*De);Y.push([xe+Nt/Sn*Yt,Oe+Dt/Sn*Yt]),Se.push([xe-Nt/Sn*Yt,Oe-Dt/Sn*Yt])}let Le=Gn([...Y,...Se.reverse()],!0),[Te,C]=ve(we);for(let[ce,De,xe,Oe]of[[-.66,.02,"#8FA041",.4],[.7,-.06,"#D8A23C",.44],[.36,.3,"#D2652F",.46]]){let Qe=Te+ce*ne,st=C+De*ne,ut=Oe*ne,dt=Oe*ne*1.16;Be+=`<path fill="none" stroke="${ct.twig}" stroke-width="${D(ne*.05)}" stroke-linecap="round" d="M${D(Te)} ${D(C)}L${D(Qe)} ${D(st-dt*.8)}"/><ellipse fill="${xe}" cx="${D(Qe)}" cy="${D(st)}" rx="${D(ut)}" ry="${D(dt)}"/><ellipse fill="#FFF6E6" fill-opacity=".16" cx="${D(Qe-ut*.32)}" cy="${D(st-dt*.34)}" rx="${D(ut*.28)}" ry="${D(dt*.2)}" transform="rotate(-30 ${D(Qe-ut*.32)} ${D(st-dt*.34)})"/><circle fill="${ct.twig}" fill-opacity=".5" cx="${D(Qe)}" cy="${D(st+dt*.78)}" r="${D(ut*.13)}"/>`}Me.branch=`<defs>${oe("dbr",8,10,.34)}</defs><g filter="url(#dbr)">${pe}<path fill="${ct.twig}" d="${Le}"/>${Ce}${Be}</g><path fill="none" stroke="${ct.vein}" stroke-opacity=".8" stroke-width="${D(Math.max(1,re*.013))}" stroke-linecap="round" d="${et.join("")}"/>`}{let ie=Wc(77),j=[],ae="";j.forEach(([de,be,ve,we,Re],pe)=>{ae+=`<path fill="${ct.close[pe%2]}" d="${Xc(de,be,ve*re,we*re,Re,ie).shape}"/>`}),Me.close=ae?`<defs><filter id="dclose" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="${D(Math.max(2,re*.025))}"/><feDropShadow dx="0" dy="10" stdDeviation="12" flood-color="rgb(${ct.ink})" flood-opacity=".35"/></filter></defs><g filter="url(#dclose)">${ae}</g>`:""}for(let ie of t)ie.wrap.style.transformOrigin=I?`${D(q)}px ${D(V)}px`:"";M(Me,P,F,++u).then(()=>v(),()=>v())}function x(L,P,F,I){let z=Math.ceil(P/8),q=Math.ceil(F/8);try{let V=document.createElement("canvas");V.width=z,V.height=q;let ne=V.getContext("2d",{willReadFrequently:!0});ne.drawImage(L,0,0,z,q);let ee=ne.getImageData(0,0,z,q).data,re=z,se=q,J=-1,oe=-1;for(let ye=0;ye<q;ye++)for(let ue=0;ue<z;ue++)ee[(ye*z+ue)*4+3]>2&&(ue<re&&(re=ue),ue>J&&(J=ue),ye<se&&(se=ye),ye>oe&&(oe=ye));if(J<0)return{x:0,y:0,w:P,h:F};let Me=Math.max(0,re*8-I),Ie=Math.max(0,se*8-I);return{x:Me,y:Ie,w:Math.min(P,(J+1)*8+I)-Me,h:Math.min(F,(oe+1)*8+I)-Ie}}catch{return{x:0,y:0,w:P,h:F}}}async function M(L,P,F,I){let H=window.devicePixelRatio||1;await Promise.all(t.map(async z=>{let q=L[z.id]||"",V=z.paint,ne=rf(z.id,H);if(!q){V.width=V.height=0;return}let ee=`<svg xmlns="${ld}" width="${P}" height="${F}" viewBox="0 0 ${P} ${F}">${q}</svg>`,re=URL.createObjectURL(new Blob([ee],{type:"image/svg+xml"}));try{let se=new Image;if(se.src=re,await se.decode(),I!==u)return;let J=x(se,P,F,z.id==="branch"?24:8);V.width=Math.round(J.w*ne),V.height=Math.round(J.h*ne),Object.assign(V.style,{left:`${J.x}px`,top:`${J.y}px`,width:`${J.w}px`,height:`${J.h}px`}),z.id==="branch"&&(V.style.transformOrigin=`${P-J.x}px ${F*.45-J.y}px`);let oe=V.getContext("2d");oe.drawImage(se,-J.x*ne,-J.y*ne,P*ne,F*ne),tf(oe,V.width,V.height),V.style.display="",z.svg.style.display="none"}catch{if(I!==u)return;z.svg.setAttribute("viewBox",`0 0 ${P} ${F}`),z.svg.setAttribute("width",P),z.svg.setAttribute("height",F),z.svg.innerHTML=q,z.svg.style.display="",V.style.display="none"}finally{URL.revokeObjectURL(re)}}))}function w(L,P,F,I,H,z=!1,q=P<=0){s+=(o-s)*.06,a+=(l-a)*.06,Math.abs(o-s)<.001&&(s=o),Math.abs(l-a)<.001&&(a=l);let V=L*L*(3-2*L);for(let ee of t){let re=z?ee.flyNarrow:ee.fly,se=-s*ee.depth*26+re[0]*V*I,J=-a*ee.depth*16+re[1]*V*H,oe=1+re[2]*V,Me=`translate3d(${se.toFixed(1)}px, ${J.toFixed(1)}px, 0) scale(${oe.toFixed(4)})`;Me!==ee.tf&&(ee.tf=Me,ee.wrap.style.transform=Me)}if(P!==d){d=P;let ee=P.toFixed(3);e.style.opacity=ee;for(let re of t)re.paint.style.opacity=ee,re.svg.style.opacity=ee;for(let re of f)re.style.opacity=ee}let ne=q&&P<=0;ne!==p&&(p=ne,r.classList.toggle("is-gone",ne)),ne||U(F)}let T=0;function U(L){if(!h)return;let P=h.to-h.from,F=Math.max(24,P/9)*2,I=L%F/F,H=I<.5?I*2:2-I*2,z=I<.5?1:-1,q=h.from+P*H,V=Si(h.crest,q)+h.dy;h.el.style.transform=`translate3d(${(q-h.w/2).toFixed(1)}px, ${(V-h.h).toFixed(1)}px, 0)`,z!==T&&(T=z,h.el.style.setProperty("--face",z))}return{layout:_,update:w,lean:(L,P)=>{o=L,l=P},layers:t,ready:()=>i!=="",whenDrawn:()=>m}}(()=>{let e=/[?&]debug=ui\b/.test(location.search)?Object.assign(document.createElement("pre"),{style:"position:fixed;left:8px;top:60px;z-index:99;margin:0;padding:6px 8px;font:11px/1.3 monospace;background:#fffd;color:#300;max-width:90vw;white-space:pre-wrap"}):null;if(e){document.body.append(e),addEventListener("error",Y=>{e.textContent+=`
ERR ${Y.message} @${Y.lineno}:${Y.colno}`});for(let Y of["pointerdown","click"])addEventListener(Y,Se=>{e.dataset.taps=`${e.dataset.taps||""} ${Y}:${Se.target.tagName}.${String(Se.target.className).split(" ")[0]}`.slice(-220)},!0)}let t=document.querySelector("[data-hero]");if(!t)return;let n=t.querySelector("[data-hero-stage]"),i=t.querySelector("[data-hero-canvas]"),s=t.querySelector("[data-hero-cherry]"),a=t.querySelector("[data-hero-cue]"),o=t.querySelector("[data-hero-name]"),l=t.querySelector("[data-hero-plant]"),c=t.querySelector("[data-hero-dio]"),h=c&&c.dataset.box?c.dataset.box.split(",").map(Number):null,u=l&&{cx:+l.dataset.cx,cy:+l.dataset.cy,rx:+l.dataset.rx,turn:+l.dataset.turn,box:l.dataset.box.split(",").map(Number)},d=t.querySelector(".hero__copy"),p=window.matchMedia("(prefers-reduced-motion: reduce)").matches,f=(Y,Se=0,Le=1)=>Math.min(Le,Math.max(Se,Y)),v=(Y,Se,Le)=>{let Te=f((Le-Y)/(Se-Y));return Te*Te*(3-2*Te)},m=(Y,Se,Le,Te,C)=>v(Y,Se,C)*(1-v(Le,Te,C)),g=[...t.querySelectorAll("[data-part]")],_=[...t.querySelectorAll("[data-beat]")].map(Y=>({el:Y,win:Y.dataset.beat.split(",").map(Number)})),x=[230,211,183];t.edge={top:x,floor:x,fadeFrom:1/0,fadeH:0},t.dispatchEvent(new Event("tone"));let M=s&&{texture:s.dataset.texture,aspect:+s.dataset.aspect,cx:+s.dataset.cx,cy:+s.dataset.cy,rx:+s.dataset.rx,ry:+s.dataset.ry},w=null;try{w=od(i,{onFrame:Re,photo:M,plantBox:u&&u.box||h,gentle:matchMedia("(pointer: coarse)").matches})}catch{w=null}let T=()=>document.dispatchEvent(new Event("cascarup:ready"));if(!w){t.classList.add("is-flat"),e&&(e.textContent="kein WebGL"),T();return}let U=[];if(e){let Y=0,Se=[],Le=[],Te=C=>{Y&&(U.push(C-Y),se&&(Se.push(C-Y),C-Y>25&&Le.push(`${w.progress.toFixed(3)}:${Math.round(C-Y)}`))),!se&&Se.length&&(e.dataset.g=`glide ${Se.length}f slow=${Se.filter(ce=>ce>25).length} max=${Math.round(Math.max(...Se))}ms @ ${Le.join(" ")}`,Se=[],Le=[]),U.length>240&&U.shift(),Y=C,requestAnimationFrame(Te)};requestAnimationFrame(Te)}e&&setInterval(()=>{let Y=[],Se=0;for(let C=U.length-1;C>=0&&Se<1e3;C--)Se+=U[C],Y.push(U[C]);let Le=`fps=${Y.length} slow=${Y.filter(C=>C>25).length} max=${Math.round(Math.max(0,...Y))}ms`,Te=w.state();(Te.progress!==Te.target||se)&&(e.dataset.low=Math.min(+(e.dataset.low||99),Y.length)),e.textContent=`${e.dataset.g||""}
${Le} low=${e.dataset.low||"-"} px=${Te.ratio} cost=${Te.cost}ms p=${Te.progress}\u2192${Te.target}
`+JSON.stringify(Te)+` reduce=${p} y=${Math.round(scrollY)} cls=${t.className}
${e.dataset.taps||""}`},400),t.classList.add("is-3d");let B=c?dd(c):null;if(B){let Y=()=>c.classList.add("is-up");document.addEventListener("cascarup:shown",Y,{once:!0}),/[?&]debug\b/.test(location.search)&&(window.__dio=B),setTimeout(Y,12e3),matchMedia("(pointer: fine)").matches&&!p&&addEventListener("pointermove",Se=>B.lean(Se.clientX/innerWidth*2-1,Se.clientY/innerHeight*2-1),{passive:!0})}w.background=getComputedStyle(document.documentElement).getPropertyValue("--paper").trim()||"#E6D3B7",/[?&]debug\b/.test(location.search)&&(window.__hero=w);let L=/[?&]debug\b/.test(location.search)?parseFloat(new URLSearchParams(location.search).get("at")):NaN,P=0,F=null,I=()=>(F||(t.classList.contains("is-released")||(P=parseFloat(getComputedStyle(n).top)||0),F={top:t.getBoundingClientRect().top+window.scrollY,h:t.offsetHeight,stage:n.offsetHeight,release:parseFloat(getComputedStyle(t).getPropertyValue("--release"))||0}),F),H=()=>{F=null};if(window.addEventListener("resize",H),"ResizeObserver"in window){let Y=new ResizeObserver(H);Y.observe(t),Y.observe(n),Y.observe(document.body)}document.fonts?.ready.then(H),window.addEventListener("load",H);let z=()=>{let Y=I();return Y.h-P-Y.stage-Y.release},q=()=>I().top;function V(Y=window.scrollY){let Se=z();return Se>0?f((Y-q())/Se):0}let ne=window.scrollY,ee=0,re=0,se=0,J=!1,oe=!1,Me=!1,Ie=document.documentElement,ye=window.matchMedia("(pointer: coarse)").matches,ue=()=>{Ie.style.scrollBehavior="",Ie.style.overflow="",J=!1},Ge=()=>{se&&(cancelAnimationFrame(se),se=0,ue())};function R(Y,Se=0,Le=!1){Ge(),Me=!1;let Te=window.scrollY,C=Y-Te;if(Math.abs(C)<2)return;let ce=Se||f(Math.abs(C)/Math.max(1,z())*Hc,500,2600),De=performance.now();Ie.style.scrollBehavior="auto",Le&&ye&&(Ie.style.overflow="hidden");let xe=Oe=>{let Qe=f((Oe-De)/ce),st=Qe<.5?4*Qe*Qe*Qe:1-Math.pow(-2*Qe+2,3)/2;window.scrollTo(0,Te+C*st),se=Qe<1?requestAnimationFrame(xe):0,se||ue()};se=requestAnimationFrame(xe)}let S=/[?&]debug\b/.test(location.search)&&!/[?&]glide\b/.test(location.search),k=0;document.addEventListener("click",Y=>{Y.target.closest?.('a[href^="#"]')&&(k=performance.now()+2500)},!0);function G(){if(p||se||S||!Me||performance.now()<k)return;let Y=z(),Se=q(),Le=window.scrollY;if(Y<=0||Le<Se-1||Le>Se+Y+1)return;let Te=f((Le-Se)/Y);if(cn.some(ce=>Math.abs(ce-Te)<.006))return;let C;ee>0?C=cn.find(ce=>ce>Te):ee<0&&(C=[...cn].reverse().find(ce=>ce<Te)),C===void 0&&(C=cn.reduce((ce,De)=>Math.abs(De-Te)<Math.abs(ce-Te)?De:ce)),R(Se+C*Y)}for(let Y of["touchstart","keydown","pointerdown"])window.addEventListener(Y,Ge,{passive:!0});let y=!1,E=0,N=0;addEventListener("wheel",Y=>{let Se=performance.now(),Le=Se-E>180;if(E=Se,N=Se,J&&se&&Y.deltaY>0){y=!0,Y.preventDefault();return}if(y&&!Le&&Y.deltaY>0){Y.preventDefault();return}y=!1,Me=!0,Ge()},{passive:!1}),addEventListener("touchstart",()=>{oe=!0,N=performance.now()},{passive:!0}),addEventListener("touchmove",()=>{N=performance.now(),Me=!0},{passive:!0}),addEventListener("keydown",()=>{N=performance.now(),Me=!0},{passive:!0}),addEventListener("touchend",()=>{oe=!1,N=performance.now(),O()},{passive:!0}),addEventListener("touchcancel",()=>{oe=!1},{passive:!0});function O(Y=window.scrollY){if(p||S||se||oe||performance.now()<k||performance.now()-N>900||document.documentElement.classList.contains("is-loading"))return;let Se=z(),Le=q();if(Se<=0)return;let Te=(Y-Le)/Se;ee>0&&Te>.003&&Te<cn[1]-.01&&(J=!0,R(Le+cn[1]*Se,(cn[1]-Te)*Hc,!0))}function X(){let Y=window.scrollY,Se=I(),Le=!p&&Se.top+Se.h-Y<=P+Se.stage+Se.release+.5;Le!==t.classList.contains("is-released")&&t.classList.toggle("is-released",Le),w.progress=p?0:V(Y),!se&&Y!==ne&&(ee=Math.sign(Y-ne)),ne=Y,clearTimeout(re),se||(O(Y),se||(re=setTimeout(G,150)))}let K=-1,W=-1,le=-1,ie=!0,j=!1,ae=null,de=1,be=1,ve=!1,we=0;function Re(Y,Se,Le){if(B){let ce=de,De=be,xe=ce/De<=1.05,Oe=xe?.05:.072,Qe=Math.round((1-v(xe?.012:Oe-.028,Oe,Y))*500)/500,st=Y>Oe+.025;(Qe>0||ie||st!==j)&&((Y<.003||!B.ready())&&B.layout(Le(),ce,De,xe,ae),B.update(v(.004,Oe,Y),Qe,performance.now()/1e3,ce,De,xe,st)),ie=Qe>0,j=st;let ut=Qe>=1&&!document.documentElement.classList.contains("is-loading");ut!==ve&&(ve=ut,w.cover=ut)}let Te=Math.round((1-v(.012,.05,Y))*500)/500;if(Te>0&&(a||o)){let ce=Le(),De=de,xe=be,Oe=De/xe<=1.05;a&&(a.style.setProperty("--x",`${(De/2).toFixed(1)}px`),a.style.setProperty("--y",`${(Oe?xe-72:xe-82).toFixed(1)}px`)),o&&(o.classList.toggle("is-up",Oe),o.style.setProperty("--x",`${(ce.x-(Oe?.3:.5)*ce.rx).toFixed(1)}px`),o.style.setProperty("--y",`${(ce.y-(Oe?.82:.8)*ce.ry).toFixed(1)}px`))}if(u){let ce=de,De=be,xe=ce/De<=1.05,Oe=v(.006,xe?.055:.07,Y),Qe=Math.round((1-v(xe?.03:.048,xe?.052:.07,Y))*500)/500;if(Qe>0){let st=Le(),ut=st.rx/u.rx,dt=Oe*Oe*ce*(xe?.55:.6),Nt=Oe*Oe*De*(xe?-.32:.75),Dt=u.turn+Oe*(xe?-9:9);l.style.transform=`translate3d(${(st.x+dt).toFixed(1)}px, ${(st.y+Nt).toFixed(1)}px, 0) rotate(${Dt.toFixed(2)}deg) scale(${ut.toFixed(4)}) translate(${-u.cx}px, ${-u.cy}px)`}Qe!==le&&(le=Qe,l.style.opacity=Qe,l.style.visibility=Qe>0?"visible":"hidden")}if(Te!==W){W=Te;for(let ce of[a,o])ce&&(ce.style.opacity=Te,ce.style.visibility=Te>0?"visible":"hidden");a&&a.classList.toggle("is-off",Te===0)}for(let ce of _){let[De,xe,Oe,Qe]=ce.win,st=Math.round((Qe>=1?v(De,xe,Y):m(De,xe,Oe,Qe,Y))*500)/500;st!==ce.o&&(ce.o=st,ce.el.style.opacity=st,ce.el.style.visibility=st===0?"hidden":"visible",ce.el.style.setProperty("--in",st))}let C=m(.17,.22,.287,.305,Y);if(C>.002){let ce=Se();for(let De of g){let xe=ce[De.dataset.part];De.style.transform=`translate3d(${xe.x.toFixed(1)}px, ${xe.y.toFixed(1)}px, 0)`,De.style.opacity=C.toFixed(3),De.style.visibility="visible"}g.shown=!0}else if(g.shown!==!1){g.shown=!1;for(let ce of g)ce.style.opacity="0",ce.style.visibility="hidden"}if(M){let ce=w&&w.photoReady?1-v(.068,.095,Y):Y<.1?1:0;if(ce>0){let De=Le(),xe=De.rx/M.rx,Oe=xe*s.naturalHeight/Math.max(1,s.naturalWidth);(!we||xe>we*1.04||xe<we*.5)&&(we=Math.ceil(xe*1.2),s.style.width=`${we}px`),s.style.transform=`translate3d(${(De.x-M.cx*xe).toFixed(1)}px, ${(De.y-M.cy*Oe).toFixed(1)}px, 0) scale(${(xe/we).toFixed(4)})`}ce!==K&&(K=ce,s.style.opacity=ce,s.style.visibility=ce>0?"visible":"hidden")}}let pe=(Y,Se)=>{let Le=(Y.l+Y.r)/2,Te=(Y.t+Y.b)/2,C=(Y.r-Y.l)/2*Se,ce=(Y.b-Y.t)/2*Se;return{l:Le-C,t:Te-ce,r:Le+C,b:Te+ce}};function Ce(){let Y=n.getBoundingClientRect(),Se=Y.width,Le=Y.height,Te=Se/Le<=1.05,C=d.getBoundingClientRect(),ce=(document.querySelector("[data-nav]")?.offsetHeight||64)-12,De=0;for(let xe of d.children)De=Math.max(De,xe.getBoundingClientRect().right-Y.left);w.frame=Te?pe({l:14,t:C.bottom-Y.top+8,r:Se-14,b:Le-86},.9):{l:De+48,t:ce+28,r:Se-32,b:Le-104},ae={left:C.left-Y.left,right:De,top:C.top-Y.top,bottom:C.bottom-Y.top}}let Be=()=>{let Y=n.getBoundingClientRect();de=Math.round(Y.width),be=Math.round(Y.height),w.resize(de,be),Ce()};document.fonts?.ready.then(()=>Ce()),new ResizeObserver(Be).observe(n),Be(),new IntersectionObserver(([Y])=>{p||(Y.isIntersecting?w.start():w.stop())},{rootMargin:"120px 0px"}).observe(t),window.addEventListener("scroll",X,{passive:!0}),window.addEventListener("resize",X),X(),clearTimeout(re),p?(w.jump(0),w.stop()):w.begin(),Number.isFinite(L)&&L>=0&&L<=1&&setTimeout(()=>{document.documentElement.style.scrollBehavior="auto",scrollTo(0,q()+z()*L)},600),s&&!s.complete&&s.addEventListener("load",()=>w.jump(w.progress),{once:!0}),requestAnimationFrame(()=>t.classList.add("is-ready"));let et=()=>new Promise(Y=>{let Se=0,Le=performance.now(),Te=Le,C=ce=>{Se=ce-Le<20?Se+1:0,Le=ce,Se>=30||ce-Te>5e3?Y():requestAnimationFrame(C)};requestAnimationFrame(C)}),Ae=!1,ke=()=>{Ae||(Ae=!0,t.classList.add("has-plant"),(p?Promise.resolve():w.warm()).then(()=>B?B.whenDrawn():null).then(()=>p||w.tune()).then(et).then(T,T),setTimeout(()=>t.classList.add("is-settled"),1e3))};l?(l.decode?l.decode():Promise.resolve()).then(ke,()=>l.addEventListener("load",ke,{once:!0})):ke(),setTimeout(ke,5e3)})();
