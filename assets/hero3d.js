/* Cascarup 3D opening. three.js © 2010-2025 three.js authors, MIT licence. */
var Ph=0,Gl=1,Ih=2;var Vl=1,Lh=2,Vn=3,Pi=0,Xt=1,Ot=2,Ii=0,Fs=1,Hl=2,Wl=3,$l=4,Dh=5,Gr=100,Uh=101,Nh=102,Fh=103,Oh=104,Bh=200,zh=201,kh=202,Gh=203,Vh=204,Hh=205,Wh=206,$h=207,Xh=208,jh=209,qh=210,Yh=211,Zh=212,Jh=213,Kh=214,xo=0,yo=1,Mo=2,Os=3,So=4,bo=5,wo=6,To=7,Qh=0,eu=1,tu=2,di=0,nu=1,iu=2,ru=3,su=4,au=5,ou=6,Eo=7;var Xl=300,Vr=301,Zi=302,Ao=303,Co=304,Bs=306,Ar=1e3,Cr=1001,Ia=1002,Bn=1003,lu=1004;var zs=1005;var zn=1006,Ro=1007;var Ji=1008;var Hn=1009,jl=1010,ql=1011,Hr=1012,Po=1013,Ki=1014,Wn=1015,Wr=1016,Io=1017,Lo=1018,$r=1020,Yl=35902,cu=1021,hu=1022,Cn=1023,ks=1026,Gs=1027,Zl=1028,Do=1029,uu=1030,Jl=1031;var Kl=1033,Uo=33776,No=33777,Fo=33778,Oo=33779,Ql=35840,ec=35841,tc=35842,nc=35843,ic=36196,rc=37492,sc=37496,ac=37808,oc=37809,lc=37810,cc=37811,hc=37812,uc=37813,dc=37814,pc=37815,mc=37816,fc=37817,gc=37818,vc=37819,_c=37820,xc=37821,Bo=36492,yc=36494,Mc=36495,du=36283,Sc=36284,bc=36285,wc=36286;var ds=2300,La=2301,Ca=2302,Ll=2400,Dl=2401,Ul=2402;var pu=3201;var mu=0,fu=1,Qi="",Gt="srgb",Vi="srgb-linear",ps="linear",ft="srgb";var Gi=7680;var gu=512,vu=513,_u=514,Tc=515,xu=516,yu=517,Mu=518,Su=519,Da=35044;var Ec="300 es",Ei=2e3,ms=2001;var oi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}},Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ra=Math.PI/180,Ua=180/Math.PI;function si(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(Vt[255&r]+Vt[r>>8&255]+Vt[r>>16&255]+Vt[r>>24&255]+"-"+Vt[255&e]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[63&t|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[255&n]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]).toLowerCase()}function st(r,e,t){return Math.max(e,Math.min(t,r))}function Sd(r,e){return(r%e+e)%e}function il(r,e,t){return(1-t)*r+t*e}function Nn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function _t(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var _e=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Sn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[a+0],p=s[a+1],f=s[a+2],x=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=f,void(e[t+3]=x);if(u!==x||l!==d||c!==p||h!==f){let m=1-o,g=l*d+c*p+h*f+u*x,v=g>=0?1:-1,_=1-g*g;if(_>Number.EPSILON){let A=Math.sqrt(_),w=Math.atan2(A,g*v);m=Math.sin(m*w)/A,o=Math.sin(o*w)/A}let y=o*v;if(l=l*m+d*y,c=c*m+p*y,h=h*m+f*y,u=u*m+x*y,m===1-o){let A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*u+l*p-c*d,e[t+1]=l*f+h*d+c*u-o*p,e[t+2]=c*f+h*p+o*d-l*u,e[t+3]=h*f-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),p=l(i/2),f=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"YZX":this._x=d*h*u+c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u-d*p*f;break;case"XZY":this._x=d*h*u-c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ih.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ih.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return rl.copy(this).projectOnVector(e),this.sub(rl)}reflect(e){return this.sub(rl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},rl=new R,ih=new Sn,it=class r{constructor(e,t,n,i,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],f=n[8],x=i[0],m=i[3],g=i[6],v=i[1],_=i[4],y=i[7],A=i[2],w=i[5],L=i[8];return s[0]=a*x+o*v+l*A,s[3]=a*m+o*_+l*w,s[6]=a*g+o*y+l*L,s[1]=c*x+h*v+u*A,s[4]=c*m+h*_+u*w,s[7]=c*g+h*y+u*L,s[2]=d*x+p*v+f*A,s[5]=d*m+p*_+f*w,s[8]=d*g+p*y+f*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,f=t*u+n*d+i*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/f;return e[0]=u*x,e[1]=(i*c-h*n)*x,e[2]=(o*n-i*a)*x,e[3]=d*x,e[4]=(h*t-i*l)*x,e[5]=(i*s-o*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(sl.makeScale(e,t)),this}rotate(e){return this.premultiply(sl.makeRotation(-e)),this}translate(e,t){return this.premultiply(sl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},sl=new it;function Ac(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Rr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function bu(){let r=Rr("canvas");return r.style.display="block",r}var rh={};function Hi(r){r in rh||(rh[r]=!0,console.warn(r))}function wu(r,e,t){return new Promise(function(n,i){setTimeout(function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}},t)})}function Tu(r){let e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Eu(r){let e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=1-e[14])}var sh=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ah=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bd(){let r={enabled:!0,workingColorSpace:Vi,spaces:{},convert:function(i,s,a){return this.enabled!==!1&&s!==a&&s&&a&&(this.spaces[s].transfer===ft&&(i.r=ai(i.r),i.g=ai(i.g),i.b=ai(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ft&&(i.r=Er(i.r),i.g=Er(i.g),i.b=Er(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===""?ps:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Hi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Hi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Vi]:{primaries:e,whitePoint:n,transfer:ps,toXYZ:sh,fromXYZ:ah,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:n,transfer:ft,toXYZ:sh,fromXYZ:ah,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),r}var ut=bd();function ai(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function Er(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var hr,Na=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{hr===void 0&&(hr=Rr("canvas")),hr.width=e.width,hr.height=e.height;let i=hr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=hr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Rr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=255*ai(s[a]/255);return n.putImageData(i,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*ai(t[n]/255)):t[n]=ai(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},wd=0,Pr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=si(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(al(i[a].image)):s.push(al(i[a]))}else s=al(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function al(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Na.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Td=0,ol=new R,Jt=class r extends oi{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=1001,i=1001,s=1006,a=1008,o=1023,l=1009,c=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=si(),this.name="",this.source=new Pr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ol).x}get height(){return this.source.getSize(ol).y}get depth(){return this.source.getSize(ol).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];i!==void 0?i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n:console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ar:e.x=e.x-Math.floor(e.x);break;case Cr:e.x=e.x<0?0:1;break;case Ia:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Ar:e.y=e.y-Math.floor(e.y);break;case Cr:e.y=e.y<0?0:1;break;case Ia:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Jt.DEFAULT_IMAGE=null,Jt.DEFAULT_MAPPING=Xl,Jt.DEFAULT_ANISOTROPY=1;var Tt=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],f=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(f+m)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,y=(p+1)/2,A=(g+1)/2,w=(h+d)/4,L=(u+x)/4,B=(f+m)/4;return _>y&&_>A?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=w/n,s=L/n):y>A?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=w/i,s=B/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=L/s,i=B/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-f)*(m-f)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-f)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fa=class extends oi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);let i={width:e,height:t,depth:n.depth},s=new Jt(i);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Pr(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},kn=class extends Fa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},fs=class extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Oa=class extends Jt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bn=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,xn):xn.fromBufferAttribute(s,a),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ta.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ta.copy(n.boundingBox)),ta.applyMatrix4(e.matrixWorld),this.union(ta)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ns),na.subVectors(this.max,ns),ur.subVectors(e.a,ns),dr.subVectors(e.b,ns),pr.subVectors(e.c,ns),_i.subVectors(dr,ur),xi.subVectors(pr,dr),Oi.subVectors(ur,pr);let t=[0,-_i.z,_i.y,0,-xi.z,xi.y,0,-Oi.z,Oi.y,_i.z,0,-_i.x,xi.z,0,-xi.x,Oi.z,0,-Oi.x,-_i.y,_i.x,0,-xi.y,xi.x,0,-Oi.y,Oi.x,0];return!!ll(t,ur,dr,pr,na)&&(t=[1,0,0,0,1,0,0,0,1],!!ll(t,ur,dr,pr,na)&&(ia.crossVectors(_i,xi),t=[ia.x,ia.y,ia.z],ll(t,ur,dr,pr,na)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(xn).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ei=[new R,new R,new R,new R,new R,new R,new R,new R],xn=new R,ta=new bn,ur=new R,dr=new R,pr=new R,_i=new R,xi=new R,Oi=new R,ns=new R,na=new R,ia=new R,Bi=new R;function ll(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Bi.fromArray(r,s);let o=i.x*Math.abs(Bi.x)+i.y*Math.abs(Bi.y)+i.z*Math.abs(Bi.z),l=e.dot(Bi),c=t.dot(Bi),h=n.dot(Bi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ed=new bn,is=new R,cl=new R,wn=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ed.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;is.subVectors(e,this.center);let t=is.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=.5*(n-this.radius);this.center.addScaledVector(is,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(is.copy(e.center).add(cl)),this.expandByPoint(is.copy(e.center).sub(cl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ti=new R,hl=new R,ra=new R,yi=new R,ul=new R,sa=new R,dl=new R,Wi=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,t),ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){hl.copy(e).add(t).multiplyScalar(.5),ra.copy(t).sub(e).normalize(),yi.copy(this.origin).sub(hl);let s=.5*e.distanceTo(t),a=-this.direction.dot(ra),o=yi.dot(this.direction),l=-yi.dot(ra),c=yi.lengthSq(),h=Math.abs(1-a*a),u,d,p,f;if(h>0)if(u=a*l-o,d=a*o-l,f=s*h,u>=0)if(d>=-f)if(d<=f){let x=1/h;u*=x,d*=x,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(hl).addScaledVector(ra,d),p}intersectSphere(e,t){ti.subVectors(e.center,this.origin);let n=ti.dot(this.direction),i=ti.dot(ti)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i?null:((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i?null:((o>n||n!=n)&&(n=o),(l<i||i!=i)&&(i=l),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,t,n,i,s){ul.subVectors(t,e),sa.subVectors(n,e),dl.crossVectors(ul,sa);let a,o=this.direction.dot(dl);if(o>0){if(i)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}yi.subVectors(this.origin,e);let l=a*this.direction.dot(sa.crossVectors(yi,sa));if(l<0)return null;let c=a*this.direction.dot(ul.cross(yi));if(c<0||l+c>o)return null;let h=-a*yi.dot(dl);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},nt=class r{constructor(e,t,n,i,s,a,o,l,c,h,u,d,p,f,x,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,u,d,p,f,x,m)}set(e,t,n,i,s,a,o,l,c,h,u,d,p,f,x,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=p,g[7]=f,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/mr.setFromMatrixColumn(e,0).length(),s=1/mr.setFromMatrixColumn(e,1).length(),a=1/mr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,f=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+f*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=f+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,f=c*h,x=c*u;t[0]=d+x*o,t[4]=f*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,f=c*h,x=c*u;t[0]=d-x*o,t[4]=-a*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,f=o*h,x=o*u;t[0]=l*h,t[4]=f*c-p,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=p*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,f=o*l,x=o*c;t[0]=l*h,t[4]=x-d*u,t[8]=f*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+f,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*l,p=a*c,f=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=a*h,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ad,e,Cd)}lookAt(e,t,n){let i=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Mi.crossVectors(n,ln),Mi.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Mi.crossVectors(n,ln)),Mi.normalize(),aa.crossVectors(ln,Mi),i[0]=Mi.x,i[4]=aa.x,i[8]=ln.x,i[1]=Mi.y,i[5]=aa.y,i[9]=ln.y,i[2]=Mi.z,i[6]=aa.z,i[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],f=n[2],x=n[6],m=n[10],g=n[14],v=n[3],_=n[7],y=n[11],A=n[15],w=i[0],L=i[4],B=i[8],N=i[12],G=i[1],O=i[5],I=i[9],V=i[13],D=i[2],Y=i[6],q=i[10],ee=i[14],Z=i[3],xe=i[7],Ce=i[11],H=i[15];return s[0]=a*w+o*G+l*D+c*Z,s[4]=a*L+o*O+l*Y+c*xe,s[8]=a*B+o*I+l*q+c*Ce,s[12]=a*N+o*V+l*ee+c*H,s[1]=h*w+u*G+d*D+p*Z,s[5]=h*L+u*O+d*Y+p*xe,s[9]=h*B+u*I+d*q+p*Ce,s[13]=h*N+u*V+d*ee+p*H,s[2]=f*w+x*G+m*D+g*Z,s[6]=f*L+x*O+m*Y+g*xe,s[10]=f*B+x*I+m*q+g*Ce,s[14]=f*N+x*V+m*ee+g*H,s[3]=v*w+_*G+y*D+A*Z,s[7]=v*L+_*O+y*Y+A*xe,s[11]=v*B+_*I+y*q+A*Ce,s[15]=v*N+_*V+y*ee+A*H,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*l*u-i*c*u-s*o*d+n*c*d+i*o*p-n*l*p)+e[7]*(+t*l*p-t*c*d+s*a*d-i*a*p+i*c*h-s*l*h)+e[11]*(+t*c*u-t*o*p-s*a*u+n*a*p+s*o*h-n*c*h)+e[15]*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],f=e[12],x=e[13],m=e[14],g=e[15],v=u*m*c-x*d*c+x*l*p-o*m*p-u*l*g+o*d*g,_=f*d*c-h*m*c-f*l*p+a*m*p+h*l*g-a*d*g,y=h*x*c-f*u*c+f*o*p-a*x*p-h*o*g+a*u*g,A=f*u*l-h*x*l-f*o*d+a*x*d+h*o*m-a*u*m,w=t*v+n*_+i*y+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/w;return e[0]=v*L,e[1]=(x*d*s-u*m*s-x*i*p+n*m*p+u*i*g-n*d*g)*L,e[2]=(o*m*s-x*l*s+x*i*c-n*m*c-o*i*g+n*l*g)*L,e[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*p-n*l*p)*L,e[4]=_*L,e[5]=(h*m*s-f*d*s+f*i*p-t*m*p-h*i*g+t*d*g)*L,e[6]=(f*l*s-a*m*s-f*i*c+t*m*c+a*i*g-t*l*g)*L,e[7]=(a*d*s-h*l*s+h*i*c-t*d*c-a*i*p+t*l*p)*L,e[8]=y*L,e[9]=(f*u*s-h*x*s-f*n*p+t*x*p+h*n*g-t*u*g)*L,e[10]=(a*x*s-f*o*s+f*n*c-t*x*c-a*n*g+t*o*g)*L,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*p-t*o*p)*L,e[12]=A*L,e[13]=(h*x*i-f*u*i+f*n*d-t*x*d-h*n*m+t*u*m)*L,e[14]=(f*o*i-a*x*i-f*n*l+t*x*l+a*n*m-t*o*m)*L,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*L,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,f=s*u,x=a*h,m=a*u,g=o*u,v=l*c,_=l*h,y=l*u,A=n.x,w=n.y,L=n.z;return i[0]=(1-(x+g))*A,i[1]=(p+y)*A,i[2]=(f-_)*A,i[3]=0,i[4]=(p-y)*w,i[5]=(1-(d+g))*w,i[6]=(m+v)*w,i[7]=0,i[8]=(f+_)*L,i[9]=(m-v)*L,i[10]=(1-(d+x))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=mr.set(i[0],i[1],i[2]).length(),a=mr.set(i[4],i[5],i[6]).length(),o=mr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],yn.copy(this);let l=1/s,c=1/a,h=1/o;return yn.elements[0]*=l,yn.elements[1]*=l,yn.elements[2]*=l,yn.elements[4]*=c,yn.elements[5]*=c,yn.elements[6]*=c,yn.elements[8]*=h,yn.elements[9]*=h,yn.elements[10]*=h,t.setFromRotationMatrix(yn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=2e3){let l=this.elements,c=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),p,f;if(o===Ei)p=-(a+s)/(a-s),f=-2*a*s/(a-s);else{if(o!==ms)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),f=-a*s/(a-s)}return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-s),d=(t+e)*c,p=(n+i)*h,f,x;if(o===Ei)f=(a+s)*u,x=-2*u;else{if(o!==ms)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=s*u,x=-1*u}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},mr=new R,yn=new nt,Ad=new R(0,0,0),Cd=new R(1,1,1),Mi=new R,aa=new R,ln=new R,oh=new nt,lh=new Sn,Tn=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(st(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return oh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lh.setFromEuler(this),this.setFromQuaternion(lh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Tn.DEFAULT_ORDER="XYZ";var gs=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Rd=0,ch=new R,fr=new Sn,ni=new nt,oa=new R,rs=new R,Pd=new R,Id=new Sn,hh=new R(1,0,0),uh=new R(0,1,0),dh=new R(0,0,1),ph={type:"added"},Ld={type:"removed"},gr={type:"childadded",child:null},pl={type:"childremoved",child:null},Rt=class r extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new R,t=new Tn,n=new Sn,i=new R(1,1,1);t._onChange(function(){n.setFromEuler(t,!1)}),n._onChange(function(){t.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new nt},normalMatrix:{value:new it}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fr.setFromAxisAngle(e,t),this.quaternion.multiply(fr),this}rotateOnWorldAxis(e,t){return fr.setFromAxisAngle(e,t),this.quaternion.premultiply(fr),this}rotateX(e){return this.rotateOnAxis(hh,e)}rotateY(e){return this.rotateOnAxis(uh,e)}rotateZ(e){return this.rotateOnAxis(dh,e)}translateOnAxis(e,t){return ch.copy(e).applyQuaternion(this.quaternion),this.position.add(ch.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hh,e)}translateY(e){return this.translateOnAxis(uh,e)}translateZ(e){return this.translateOnAxis(dh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?oa.copy(e):oa.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(rs,oa,this.up):ni.lookAt(oa,rs,this.up),this.quaternion.setFromRotationMatrix(ni),i&&(ni.extractRotation(i.matrixWorld),fr.setFromRotationMatrix(ni),this.quaternion.premultiply(fr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ph),gr.child=e,this.dispatchEvent(gr),gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ld),pl.child=e,this.dispatchEvent(pl),pl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ph),gr.child=e,this.dispatchEvent(gr),gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,e,Pd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,Id,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Rt.DEFAULT_UP=new R(0,1,0),Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Mn=new R,ii=new R,ml=new R,ri=new R,vr=new R,_r=new R,mh=new R,fl=new R,gl=new R,vl=new R,_l=new Tt,xl=new Tt,yl=new Tt,Fn=class r{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Mn.subVectors(e,t),i.cross(Mn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Mn.subVectors(i,t),ii.subVectors(n,t),ml.subVectors(e,t);let a=Mn.dot(Mn),o=Mn.dot(ii),l=Mn.dot(ml),c=ii.dot(ii),h=ii.dot(ml),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,f=(a*h-o*l)*d;return s.set(1-p-f,f,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ri)!==null&&ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ri.x),l.addScaledVector(a,ri.y),l.addScaledVector(o,ri.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return _l.setScalar(0),xl.setScalar(0),yl.setScalar(0),_l.fromBufferAttribute(e,t),xl.fromBufferAttribute(e,n),yl.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(_l,s.x),a.addScaledVector(xl,s.y),a.addScaledVector(yl,s.z),a}static isFrontFacing(e,t,n,i){return Mn.subVectors(n,t),ii.subVectors(e,t),Mn.cross(ii).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),.5*Mn.cross(ii).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;vr.subVectors(i,n),_r.subVectors(s,n),fl.subVectors(e,n);let l=vr.dot(fl),c=_r.dot(fl);if(l<=0&&c<=0)return t.copy(n);gl.subVectors(e,i);let h=vr.dot(gl),u=_r.dot(gl);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(vr,a);vl.subVectors(e,s);let p=vr.dot(vl),f=_r.dot(vl);if(f>=0&&p<=f)return t.copy(s);let x=p*c-l*f;if(x<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(_r,o);let m=h*f-p*u;if(m<=0&&u-h>=0&&p-f>=0)return mh.subVectors(s,i),o=(u-h)/(u-h+(p-f)),t.copy(i).addScaledVector(mh,o);let g=1/(m+x+d);return a=x*g,o=d*g,t.copy(n).addScaledVector(vr,a).addScaledVector(_r,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Au={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},la={h:0,s:0,l:0};function Ml(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var Ue=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ut.workingColorSpace){if(e=Sd(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ml(a,s,e+1/3),this.g=Ml(a,s,e),this.b=Ml(a,s,e-1/3)}return ut.colorSpaceToWorking(this,i),this}setStyle(e,t=Gt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){let n=Au[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}copyLinearToSRGB(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return ut.workingToColorSpace(Ht.copy(this),e),65536*Math.round(st(255*Ht.r,0,255))+256*Math.round(st(255*Ht.g,0,255))+Math.round(st(255*Ht.b,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(Ht.copy(this),t);let n=Ht.r,i=Ht.g,s=Ht.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Gt){ut.workingToColorSpace(Ht.copy(this),e);let t=Ht.r,n=Ht.g,i=Ht.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(e,t,n){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(la);let n=il(Si.h,la.h,t),i=il(Si.s,la.s,t),s=il(Si.l,la.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ht=new Ue;Ue.NAMES=Au;var Dd=0,li=class extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=si(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ci=class extends li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},mf=Ud();function Ud(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[256|l]=32768,i[l]=24,i[256|l]=24):c<-14?(n[l]=1024>>-c-14,n[256|l]=1024>>-c-14|32768,i[l]=-c-1,i[256|l]=-c-1):c<=15?(n[l]=c+15<<10,n[256|l]=c+15<<10|32768,i[l]=13,i[256|l]=13):c<128?(n[l]=31744,n[256|l]=64512,i[l]=24,i[256|l]=24):(n[l]=31744,n[256|l]=64512,i[l]=13,i[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}var Ft=new R,ca=new _e,Nd=0,Pt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Da,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ca.fromBufferAttribute(this,t),ca.applyMatrix3(e),this.setXY(t,ca.x,ca.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Nn(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Nn(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Nn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Nn(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Da&&(e.usage=this.usage),e}};var vs=class extends Pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var _s=class extends Pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Je=class extends Pt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Fd=0,gn=new nt,Sl=new Rt,xr=new R,cn=new bn,ss=new bn,kt=new R,Et=class r extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ac(e)?_s:vs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new it().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,n){return gn.makeTranslation(e,t,n),this.applyMatrix4(gn),this}scale(e,t,n){return gn.makeScale(e,t,n),this.applyMatrix4(gn),this}lookAt(e){return Sl.lookAt(e),Sl.updateMatrix(),this.applyMatrix4(Sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Je(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new R,1/0);if(e){let n=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];ss.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(cn.min,ss.min),cn.expandByPoint(kt),kt.addVectors(cn.max,ss.max),cn.expandByPoint(kt)):(cn.expandByPoint(ss.min),cn.expandByPoint(ss.max))}cn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)kt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(kt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)kt.fromBufferAttribute(o,c),l&&(xr.fromBufferAttribute(e,c),kt.add(xr)),i=Math.max(i,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let B=0;B<n.count;B++)o[B]=new R,l[B]=new R;let c=new R,h=new R,u=new R,d=new _e,p=new _e,f=new _e,x=new R,m=new R;function g(B,N,G){c.fromBufferAttribute(n,B),h.fromBufferAttribute(n,N),u.fromBufferAttribute(n,G),d.fromBufferAttribute(s,B),p.fromBufferAttribute(s,N),f.fromBufferAttribute(s,G),h.sub(c),u.sub(c),p.sub(d),f.sub(d);let O=1/(p.x*f.y-f.x*p.y);isFinite(O)&&(x.copy(h).multiplyScalar(f.y).addScaledVector(u,-p.y).multiplyScalar(O),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(O),o[B].add(x),o[N].add(x),o[G].add(x),l[B].add(m),l[N].add(m),l[G].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let B=0,N=v.length;B<N;++B){let G=v[B],O=G.start;for(let I=O,V=O+G.count;I<V;I+=3)g(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let _=new R,y=new R,A=new R,w=new R;function L(B){A.fromBufferAttribute(i,B),w.copy(A);let N=o[B];_.copy(N),_.sub(A.multiplyScalar(A.dot(N))).normalize(),y.crossVectors(w,N);let G=y.dot(l[B])<0?-1:1;a.setXYZW(B,_.x,_.y,_.z,G)}for(let B=0,N=v.length;B<N;++B){let G=v[B],O=G.start;for(let I=O,V=O+G.count;I<V;I+=3)L(e.getX(I+0)),L(e.getX(I+1)),L(e.getX(I+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pt(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new R,s=new R,a=new R,o=new R,l=new R,c=new R,h=new R,u=new R;if(e)for(let d=0,p=e.count;d<p;d+=3){let f=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,f),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,f),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,f=0;for(let x=0,m=l.length;x<m;x++){p=o.isInterleavedBufferAttribute?l[x]*o.data.stride+o.offset:l[x]*h;for(let g=0;g<h;g++)d[f++]=c[p++]}return new Pt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=e(i[o],n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},fh=new nt,zi=new Wi,ha=new wn,gh=new R,ua=new R,da=new R,pa=new R,bl=new R,ma=new R,vh=new R,fa=new R,qe=class extends Rt{constructor(e=new Et,t=new ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){ma.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(bl.fromBufferAttribute(u,e),a?ma.addScaledVector(bl,h):ma.addScaledVector(bl.sub(t),h))}t.add(ma)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(s),zi.copy(e.ray).recast(e.near),ha.containsPoint(zi.origin)===!1&&(zi.intersectSphere(ha,gh)===null||zi.origin.distanceToSquared(gh)>(e.far-e.near)**2))return;fh.copy(s).invert(),zi.copy(e.ray).applyMatrix4(fh),n.boundingBox!==null&&zi.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,zi)}}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,x=d.length;f<x;f++){let m=d[f],g=a[m.materialIndex];for(let v=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));v<_;v+=3)i=ga(this,g,e,n,c,h,u,o.getX(v),o.getX(v+1),o.getX(v+2)),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}else for(let f=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);f<x;f+=3)i=ga(this,a,e,n,c,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),i&&(i.faceIndex=Math.floor(f/3),t.push(i));else if(l!==void 0)if(Array.isArray(a))for(let f=0,x=d.length;f<x;f++){let m=d[f],g=a[m.materialIndex];for(let v=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));v<_;v+=3)i=ga(this,g,e,n,c,h,u,v,v+1,v+2),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}else for(let f=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);f<x;f+=3)i=ga(this,a,e,n,c,h,u,f,f+1,f+2),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}};function ga(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,ua),r.getVertexPosition(l,da),r.getVertexPosition(c,pa);let h=(function(u,d,p,f,x,m,g,v){let _;if(_=d.side===1?f.intersectTriangle(g,m,x,!0,v):f.intersectTriangle(x,m,g,d.side===0,v),_===null)return null;fa.copy(v),fa.applyMatrix4(u.matrixWorld);let y=p.ray.origin.distanceTo(fa);return y<p.near||y>p.far?null:{distance:y,point:fa.clone(),object:u}})(r,e,t,n,ua,da,pa,vh);if(h){let u=new R;Fn.getBarycoord(vh,ua,da,pa,u),i&&(h.uv=Fn.getInterpolatedAttribute(i,o,l,c,u,new _e)),s&&(h.uv1=Fn.getInterpolatedAttribute(s,o,l,c,u,new _e)),a&&(h.normal=Fn.getInterpolatedAttribute(a,o,l,c,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new R,materialIndex:0};Fn.getNormal(ua,da,pa,d.normal),h.face=d,h.barycoord=u}return h}var hi=class r extends Et{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;function f(x,m,g,v,_,y,A,w,L,B,N){let G=y/L,O=A/B,I=y/2,V=A/2,D=w/2,Y=L+1,q=B+1,ee=0,Z=0,xe=new R;for(let Ce=0;Ce<q;Ce++){let H=Ce*O-V;for(let X=0;X<Y;X++){let le=X*G-I;xe[x]=le*v,xe[m]=H*_,xe[g]=D,c.push(xe.x,xe.y,xe.z),xe[x]=0,xe[m]=0,xe[g]=w>0?1:-1,h.push(xe.x,xe.y,xe.z),u.push(X/L),u.push(1-Ce/B),ee+=1}}for(let Ce=0;Ce<B;Ce++)for(let H=0;H<L;H++){let X=d+H+Y*Ce,le=d+H+Y*(Ce+1),Te=d+(H+1)+Y*(Ce+1),me=d+(H+1)+Y*Ce;l.push(X,le,me),l.push(le,Te,me),Z+=6}o.addGroup(p,Z,N),p+=Z,d+=ee}f("z","y","x",-1,-1,n,t,e,a,s,0),f("z","y","x",1,-1,n,t,-e,a,s,1),f("x","z","y",1,1,e,n,t,i,a,2),f("x","z","y",1,-1,e,n,-t,i,a,3),f("x","y","z",1,-1,e,t,n,i,s,4),f("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function er(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function jt(r){let e={};for(let t=0;t<r.length;t++){let n=er(r[t]);for(let i in n)e[i]=n[i]}return e}function Cc(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}var Cu={clone:er,merge:jt},En=class extends li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=er(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let i=0;i<t.length;i++)n.push(t[i].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ir=class extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=Ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},bi=new R,_h=new _e,xh=new _e,Wt=class extends Ir{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Ua*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Ra*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Ua*Math.atan(Math.tan(.5*Ra*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,t){return this.getViewBounds(e,_h,xh),t.subVectors(xh,_h)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Ra*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},yr=-90,Ba=class extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Wt(yr,1,e,t);i.layers=this.layers,this.add(i);let s=new Wt(yr,1,e,t);s.layers=this.layers,this.add(s);let a=new Wt(yr,1,e,t);a.layers=this.layers,this.add(a);let o=new Wt(yr,1,e,t);o.layers=this.layers,this.add(o);let l=new Wt(yr,1,e,t);l.layers=this.layers,this.add(l);let c=new Wt(yr,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===Ei)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==ms)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},xs=class extends Jt{constructor(e=[],t=301,n,i,s,a,o,l,c,h){super(e,t,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},za=class extends kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new xs(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new hi(5,5,5),s=new En({name:"CubemapFromEquirect",uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;let a=new qe(i,s),o=t.minFilter;return t.minFilter===Ji&&(t.minFilter=zn),new Ba(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},$t=class extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Od={type:"move"},Lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;c.inputState.pinching&&d>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Od)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new $t;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Dr=class extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ka=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Da,this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Zt=new R,ys=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Nn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Nn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Nn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Nn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Pt(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ur=class extends li{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Mr,as=new R,Sr=new R,br=new R,wr=new _e,os=new _e,Ru=new nt,va=new R,ls=new R,_a=new R,yh=new _e,wl=new _e,Mh=new _e,Ms=class extends Rt{constructor(e=new Ur){if(super(),this.isSprite=!0,this.type="Sprite",Mr===void 0){Mr=new Et;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ka(t,5);Mr.setIndex([0,1,2,0,2,3]),Mr.setAttribute("position",new ys(n,3,0,!1)),Mr.setAttribute("uv",new ys(n,2,3,!1))}this.geometry=Mr,this.material=e,this.center=new _e(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Sr.setFromMatrixScale(this.matrixWorld),Ru.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),br.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Sr.multiplyScalar(-br.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let a=this.center;xa(va.set(-.5,-.5,0),br,a,Sr,i,s),xa(ls.set(.5,-.5,0),br,a,Sr,i,s),xa(_a.set(.5,.5,0),br,a,Sr,i,s),yh.set(0,0),wl.set(1,0),Mh.set(1,1);let o=e.ray.intersectTriangle(va,ls,_a,!1,as);if(o===null&&(xa(ls.set(-.5,.5,0),br,a,Sr,i,s),wl.set(0,1),o=e.ray.intersectTriangle(va,_a,ls,!1,as),o===null))return;let l=e.ray.origin.distanceTo(as);l<e.near||l>e.far||t.push({distance:l,point:as.clone(),uv:Fn.getInterpolation(as,va,ls,_a,yh,wl,Mh,new _e),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function xa(r,e,t,n,i,s){wr.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(os.x=s*wr.x-i*wr.y,os.y=i*wr.x+s*wr.y):os.copy(wr),r.copy(e),r.x+=os.x,r.y+=os.y,r.applyMatrix4(Ru)}var ff=new R,gf=new R;var vf=new R,_f=new Tt,xf=new Tt,yf=new R,Mf=new nt,Sf=new R,bf=new wn,wf=new nt,Tf=new Wi;var Ef=new nt,Af=new nt;var Cf=new nt,Rf=new nt;var Pf=new bn,If=new nt,Lf=new qe,Df=new wn;var Tl=new R,Bd=new R,zd=new it,hn=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Tl.subVectors(n,t).cross(Bd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Tl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||zd.getNormalMatrix(e),i=this.coplanarPoint(Tl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ki=new wn,kd=new _e(.5,.5),ya=new R,Ai=class{constructor(e=new hn,t=new hn,n=new hn,i=new hn,s=new hn,a=new hn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],f=i[9],x=i[10],m=i[11],g=i[12],v=i[13],_=i[14],y=i[15];if(n[0].setComponents(l-s,d-c,m-p,y-g).normalize(),n[1].setComponents(l+s,d+c,m+p,y+g).normalize(),n[2].setComponents(l+a,d+h,m+f,y+v).normalize(),n[3].setComponents(l-a,d-h,m-f,y-v).normalize(),n[4].setComponents(l-o,d-u,m-x,y-_).normalize(),t===Ei)n[5].setComponents(l+o,d+u,m+x,y+_).normalize();else{if(t!==ms)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,u,x,_).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(e){ki.center.set(0,0,0);let t=kd.distanceTo(e.center);return ki.radius=.7071067811865476+t,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(ya.x=i.normal.x>0?e.max.x:e.min.x,ya.y=i.normal.y>0?e.max.y:e.min.y,ya.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ya)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Dn=new nt,Un=new Ai,Ga=class r{constructor(){this.coordinateSystem=Ei}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(Dn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Un.setFromProjectionMatrix(Dn,this.coordinateSystem),Un.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(Dn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Un.setFromProjectionMatrix(Dn,this.coordinateSystem),Un.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(Dn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Un.setFromProjectionMatrix(Dn,this.coordinateSystem),Un.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(Dn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Un.setFromProjectionMatrix(Dn,this.coordinateSystem),Un.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(Dn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Un.setFromProjectionMatrix(Dn,this.coordinateSystem),Un.containsPoint(e))return!0}return!1}clone(){return new r}};var Nl=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}},Uf=new nt,Nf=new Ue(1,1,1),Ff=new Ai,Of=new Ga,Bf=new bn,zf=new wn,kf=new R,Gf=new R,Vf=new R,Hf=new Nl,Wf=new qe;var $f=new R,Xf=new R,jf=new nt,qf=new Wi,Yf=new wn,Zf=new R,Jf=new R;var Kf=new R,Qf=new R;var eg=new nt,tg=new Wi,ng=new wn,ig=new R;var $i=class extends Jt{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ss=class extends Jt{constructor(e,t,n=1014,i,s,a,o=1003,l=1003,c,h=1026,u=1){if(h!==ks&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:u},i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Pr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Va=class r extends Et{constructor(e=1,t=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,p=2*u+d,f=2*n+s,x=i+1,m=new R,g=new R;for(let v=0;v<=f;v++){let _=0,y=0,A=0,w=0;if(v<=n){let N=v/n,G=N*Math.PI/2;y=-h-e*Math.cos(G),A=e*Math.sin(G),w=-e*Math.cos(G),_=N*u}else if(v<=n+s){let N=(v-n)/s;y=N*t-h,A=e,w=0,_=u+N*d}else{let N=(v-n-s)/n,G=N*Math.PI/2;y=h+e*Math.sin(G),A=e*Math.cos(G),w=e*Math.sin(G),_=u+d+N*u}let L=Math.max(0,Math.min(1,_/p)),B=0;v===0?B=.5/i:v===f&&(B=-.5/i);for(let N=0;N<=i;N++){let G=N/i,O=G*Math.PI*2,I=Math.sin(O),V=Math.cos(O);g.x=-A*V,g.y=y,g.z=A*I,o.push(g.x,g.y,g.z),m.set(-A*V,w,A*I),m.normalize(),l.push(m.x,m.y,m.z),c.push(G+B,L)}if(v>0){let N=(v-1)*x;for(let G=0;G<i;G++){let O=N+G,I=N+G+1,V=v*x+G,D=v*x+G+1;a.push(O,I,V),a.push(I,D,V)}}}this.setIndex(a),this.setAttribute("position",new Je(o,3)),this.setAttribute("normal",new Je(l,3)),this.setAttribute("uv",new Je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Ci=class r extends Et{constructor(e=1,t=32,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new R,h=new _e;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Je(a,3)),this.setAttribute("normal",new Je(o,3)),this.setAttribute("uv",new Je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ui=class r extends Et{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],p=[],f=0,x=[],m=n/2,g=0;function v(_){let y=f,A=new _e,w=new R,L=0,B=_===!0?e:t,N=_===!0?1:-1;for(let O=1;O<=i;O++)u.push(0,m*N,0),d.push(0,N,0),p.push(.5,.5),f++;let G=f;for(let O=0;O<=i;O++){let I=O/i*l+o,V=Math.cos(I),D=Math.sin(I);w.x=B*D,w.y=m*N,w.z=B*V,u.push(w.x,w.y,w.z),d.push(0,N,0),A.x=.5*V+.5,A.y=.5*D*N+.5,p.push(A.x,A.y),f++}for(let O=0;O<i;O++){let I=y+O,V=G+O;_===!0?h.push(V,V+1,I):h.push(V+1,V,I),L+=3}c.addGroup(g,L,_===!0?1:2),g+=L}(function(){let _=new R,y=new R,A=0,w=(t-e)/n;for(let L=0;L<=s;L++){let B=[],N=L/s,G=N*(t-e)+e;for(let O=0;O<=i;O++){let I=O/i,V=I*l+o,D=Math.sin(V),Y=Math.cos(V);y.x=G*D,y.y=-N*n+m,y.z=G*Y,u.push(y.x,y.y,y.z),_.set(D,w,Y).normalize(),d.push(_.x,_.y,_.z),p.push(I,1-N),B.push(f++)}x.push(B)}for(let L=0;L<i;L++)for(let B=0;B<s;B++){let N=x[B][L],G=x[B+1][L],O=x[B+1][L+1],I=x[B][L+1];(e>0||B!==0)&&(h.push(N,G,I),A+=3),(t>0||B!==s-1)&&(h.push(G,O,I),A+=3)}c.addGroup(g,A,0),g+=A})(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Je(u,3)),this.setAttribute("normal",new Je(d,3)),this.setAttribute("uv",new Je(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ha=class r extends ui{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ri=class r extends Et{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];function o(p,f,x,m){let g=m+1,v=[];for(let _=0;_<=g;_++){v[_]=[];let y=p.clone().lerp(x,_/g),A=f.clone().lerp(x,_/g),w=g-_;for(let L=0;L<=w;L++)v[_][L]=L===0&&_===g?y:y.clone().lerp(A,L/w)}for(let _=0;_<g;_++)for(let y=0;y<2*(g-_)-1;y++){let A=Math.floor(y/2);y%2==0?(l(v[_][A+1]),l(v[_+1][A]),l(v[_][A])):(l(v[_][A+1]),l(v[_+1][A+1]),l(v[_+1][A]))}}function l(p){s.push(p.x,p.y,p.z)}function c(p,f){let x=3*p;f.x=e[x+0],f.y=e[x+1],f.z=e[x+2]}function h(p,f,x,m){m<0&&p.x===1&&(a[f]=p.x-1),x.x===0&&x.z===0&&(a[f]=m/2/Math.PI+.5)}function u(p){return Math.atan2(p.z,-p.x)}function d(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}(function(p){let f=new R,x=new R,m=new R;for(let g=0;g<t.length;g+=3)c(t[g+0],f),c(t[g+1],x),c(t[g+2],m),o(f,x,m,p)})(i),(function(p){let f=new R;for(let x=0;x<s.length;x+=3)f.x=s[x+0],f.y=s[x+1],f.z=s[x+2],f.normalize().multiplyScalar(p),s[x+0]=f.x,s[x+1]=f.y,s[x+2]=f.z})(n),(function(){let p=new R;for(let f=0;f<s.length;f+=3){p.x=s[f+0],p.y=s[f+1],p.z=s[f+2];let x=u(p)/2/Math.PI+.5,m=d(p)/Math.PI+.5;a.push(x,1-m)}(function(){let f=new R,x=new R,m=new R,g=new R,v=new _e,_=new _e,y=new _e;for(let A=0,w=0;A<s.length;A+=9,w+=6){f.set(s[A+0],s[A+1],s[A+2]),x.set(s[A+3],s[A+4],s[A+5]),m.set(s[A+6],s[A+7],s[A+8]),v.set(a[w+0],a[w+1]),_.set(a[w+2],a[w+3]),y.set(a[w+4],a[w+5]),g.copy(f).add(x).add(m).divideScalar(3);let L=u(g);h(v,w+0,f,L),h(_,w+2,x,L),h(y,w+4,m,L)}})(),(function(){for(let f=0;f<a.length;f+=6){let x=a[f+0],m=a[f+2],g=a[f+4],v=Math.max(x,m,g),_=Math.min(x,m,g);v>.9&&_<.1&&(x<.2&&(a[f+0]+=1),m<.2&&(a[f+2]+=1),g<.2&&(a[f+4]+=1))}})()})(),this.setAttribute("position",new Je(s,3)),this.setAttribute("normal",new Je(s.slice(),3)),this.setAttribute("uv",new Je(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},Wa=class r extends Ri{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Ma=new R,Sa=new R,El=new R,ba=new Fn,$a=class extends Et{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(Ra*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let f=0;f<l;f+=3){a?(c[0]=a.getX(f),c[1]=a.getX(f+1),c[2]=a.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:x,b:m,c:g}=ba;if(x.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),ba.getNormal(El),u[0]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let v=0;v<3;v++){let _=(v+1)%3,y=u[v],A=u[_],w=ba[h[v]],L=ba[h[_]],B=`${y}_${A}`,N=`${A}_${y}`;N in d&&d[N]?(El.dot(d[N].normal)<=s&&(p.push(w.x,w.y,w.z),p.push(L.x,L.y,L.z)),d[N]=null):B in d||(d[B]={index0:c[v],index1:c[_],normal:El.clone()})}}for(let f in d)if(d[f]){let{index0:x,index1:m}=d[f];Ma.fromBufferAttribute(o,x),Sa.fromBufferAttribute(o,m),p.push(Ma.x,Ma.y,Ma.z),p.push(Sa.x,Sa.y,Sa.z)}this.setAttribute("position",new Je(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,s=n.length,a;a=t||e*n[s-1];let o,l=0,c=s-1;for(;l<=c;)if(i=Math.floor(l+(c-l)/2),o=n[i]-a,o<0)l=i+1;else{if(!(o>0)){c=i;break}c=i-1}if(i=c,n[i]===a)return i/(s-1);let h=n[i];return(i+(a-h)/(n[i+1]-h))/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new _e:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new R,i=[],s=[],a=[],o=new R,l=new nt;for(let p=0;p<=e;p++){let f=p/e;i[p]=this.getTangentAt(f,new R)}s[0]=new R,a[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(st(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(st(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(l.makeRotationAxis(i[f],p*f)),a[f].crossVectors(i[f],s[f])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Nr=class extends dn{constructor(e=0,t=0,n=1,i=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new _e){let n=t,i=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(s=a?0:i),this.aClockwise!==!0||a||(s===i?s=-i:s-=i);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Xa=class extends Nr{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Rc(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,i(a,o,d,p)},calc:function(s){let a=s*s;return r+e*s+t*a+n*(a*s)}}}var wa=new R,Al=new Rc,Cl=new Rc,Rl=new Rc,ja=class extends dn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new R){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=i[(c-1)%s]:(wa.subVectors(i[0],i[1]).add(i[0]),o=wa);let u=i[c%s],d=i[(c+1)%s];if(this.closed||c+2<s?l=i[(c+2)%s]:(wa.subVectors(i[s-1],i[s-2]).add(i[s-1]),l=wa),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),p),x=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(l),p);x<1e-4&&(x=1),f<1e-4&&(f=x),m<1e-4&&(m=x),Al.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,f,x,m),Cl.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,f,x,m),Rl.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,f,x,m)}else this.curveType==="catmullrom"&&(Al.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),Cl.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),Rl.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return n.set(Al.calc(h),Cl.calc(h),Rl.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new R().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Sh(r,e,t,n,i){let s=.5*(n-e),a=.5*(i-t),o=r*r;return(2*t-2*n+s+a)*(r*o)+(-3*t+3*n-2*s-a)*o+s*r+t}function hs(r,e,t,n){return(function(i,s){let a=1-i;return a*a*s})(r,e)+(function(i,s){return 2*(1-i)*i*s})(r,t)+(function(i,s){return i*i*s})(r,n)}function us(r,e,t,n,i){return(function(s,a){let o=1-s;return o*o*o*a})(r,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(r,t)+(function(s,a){return 3*(1-s)*s*s*a})(r,n)+(function(s,a){return s*s*s*a})(r,i)}var bs=class extends dn{constructor(e=new _e,t=new _e,n=new _e,i=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new _e){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(us(e,i.x,s.x,a.x,o.x),us(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},qa=class extends dn{constructor(e=new R,t=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new R){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(us(e,i.x,s.x,a.x,o.x),us(e,i.y,s.y,a.y,o.y),us(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ws=class extends dn{constructor(e=new _e,t=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new _e){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ya=class extends dn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ts=class extends dn{constructor(e=new _e,t=new _e,n=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new _e){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(hs(e,i.x,s.x,a.x),hs(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Es=class extends dn{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(hs(e,i.x,s.x,a.x),hs(e,i.y,s.y,a.y),hs(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},As=class extends dn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new _e){let n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Sh(o,l.x,c.x,h.x,u.x),Sh(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new _e().fromArray(i))}return this}},Za=Object.freeze({__proto__:null,ArcCurve:Xa,CatmullRomCurve3:ja,CubicBezierCurve:bs,CubicBezierCurve3:qa,EllipseCurve:Nr,LineCurve:ws,LineCurve3:Ya,QuadraticBezierCurve:Ts,QuadraticBezierCurve3:Es,SplineCurve:As}),Ja=class extends dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Za[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Za[i.type]().fromJSON(i))}return this}},Cs=class extends Ja{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ws(this.currentPoint.clone(),new _e(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new Ts(this.currentPoint.clone(),new _e(e,t),new _e(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){let o=new bs(this.currentPoint.clone(),new _e(e,t),new _e(n,i),new _e(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new As(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){let c=new Nr(e,t,n,i,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Xi=class extends Cs{constructor(e){super(e),this.uuid=si(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Cs().fromJSON(i))}return this}};function Gd(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=bh(r,0,i,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=(function(h,u,d,p){let f=[];for(let x=0,m=u.length;x<m;x++){let g=bh(h,u[x]*p,x<m-1?u[x+1]*p:h.length,p,!1);g===g.next&&(g.steiner=!0),f.push(Yd(g))}f.sort(Xd);for(let x=0;x<f.length;x++)d=jd(f[x],d);return d})(r,e,s,t)),r.length>80*t){o=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=t;d<i;d+=t){let p=r[d],f=r[d+1];p<o&&(o=p),f<l&&(l=f),p>h&&(h=p),f>u&&(u=f)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Rs(s,a,t,o,l,c,0),a}function bh(r,e,t,n,i){let s;if(i===(function(a,o,l,c){let h=0;for(let u=o,d=l-c;u<l;u+=c)h+=(a[d]-a[u])*(a[u+1]+a[d+1]),d=u;return h})(r,e,t,n)>0)for(let a=e;a<t;a+=n)s=wh(a/n|0,r[a],r[a+1],s);else for(let a=t-n;a>=e;a-=n)s=wh(a/n|0,r[a],r[a+1],s);return s&&Fr(s,s.next)&&(Is(s),s=s.next),s}function ji(r,e){if(!r)return r;e||(e=r);let t,n=r;do if(t=!1,n.steiner||!Fr(n,n.next)&&Ct(n.prev,n,n.next)!==0)n=n.next;else{if(Is(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function Rs(r,e,t,n,i,s,a){if(!r)return;!a&&s&&(function(l,c,h,u){let d=l;do d.z===0&&(d.z=Fl(d.x,d.y,c,h,u)),d.prevZ=d.prev,d.nextZ=d.next,d=d.next;while(d!==l);d.prevZ.nextZ=null,d.prevZ=null,(function(p){let f,x=1;do{let m,g=p;p=null;let v=null;for(f=0;g;){f++;let _=g,y=0;for(let w=0;w<x&&(y++,_=_.nextZ,_);w++);let A=x;for(;y>0||A>0&&_;)y!==0&&(A===0||!_||g.z<=_.z)?(m=g,g=g.nextZ,y--):(m=_,_=_.nextZ,A--),v?v.nextZ=m:p=m,m.prevZ=v,v=m;g=_}v.nextZ=null,x*=2}while(f>1)})(d)})(r,n,i,s);let o=r;for(;r.prev!==r.next;){let l=r.prev,c=r.next;if(s?Hd(r,n,i,s):Vd(r))e.push(l.i,r.i,c.i),Is(r),r=c.next,o=c.next;else if((r=c)===o){a?a===1?Rs(r=Wd(ji(r),e),e,t,n,i,s,2):a===2&&$d(r,e,t,n,i,s):Rs(ji(r),e,t,n,i,s,1);break}}}function Vd(r){let e=r.prev,t=r,n=r.next;if(Ct(e,t,n)>=0)return!1;let i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(i,s,a),u=Math.min(o,l,c),d=Math.max(i,s,a),p=Math.max(o,l,c),f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&cs(i,o,s,l,a,c,f.x,f.y)&&Ct(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Hd(r,e,t,n){let i=r.prev,s=r,a=r.next;if(Ct(i,s,a)>=0)return!1;let o=i.x,l=s.x,c=a.x,h=i.y,u=s.y,d=a.y,p=Math.min(o,l,c),f=Math.min(h,u,d),x=Math.max(o,l,c),m=Math.max(h,u,d),g=Fl(p,f,e,t,n),v=Fl(x,m,e,t,n),_=r.prevZ,y=r.nextZ;for(;_&&_.z>=g&&y&&y.z<=v;){if(_.x>=p&&_.x<=x&&_.y>=f&&_.y<=m&&_!==i&&_!==a&&cs(o,h,l,u,c,d,_.x,_.y)&&Ct(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=p&&y.x<=x&&y.y>=f&&y.y<=m&&y!==i&&y!==a&&cs(o,h,l,u,c,d,y.x,y.y)&&Ct(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=g;){if(_.x>=p&&_.x<=x&&_.y>=f&&_.y<=m&&_!==i&&_!==a&&cs(o,h,l,u,c,d,_.x,_.y)&&Ct(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=v;){if(y.x>=p&&y.x<=x&&y.y>=f&&y.y<=m&&y!==i&&y!==a&&cs(o,h,l,u,c,d,y.x,y.y)&&Ct(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Wd(r,e){let t=r;do{let n=t.prev,i=t.next.next;!Fr(n,i)&&Iu(n,t,t.next,i)&&Ps(n,i)&&Ps(i,n)&&(e.push(n.i,t.i,i.i),Is(t),Is(t.next),t=r=i),t=t.next}while(t!==r);return ji(t)}function $d(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Zd(a,o)){let l=Lu(a,o);return a=ji(a,a.next),l=ji(l,l.next),Rs(a,e,t,n,i,s,0),void Rs(l,e,t,n,i,s,0)}o=o.next}a=a.next}while(a!==r)}function Xd(r,e){let t=r.x-e.x;return t===0&&(t=r.y-e.y,t===0)&&(t=(r.next.y-r.y)/(r.next.x-r.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function jd(r,e){let t=(function(i,s){let a=s,o=i.x,l=i.y,c,h=-1/0;if(Fr(i,a))return a;do{if(Fr(i,a.next))return a.next;if(l<=a.y&&l>=a.next.y&&a.next.y!==a.y){let x=a.x+(l-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(x<=o&&x>h&&(h=x,c=a.x<a.next.x?a:a.next,x===o))return c}a=a.next}while(a!==s);if(!c)return null;let u=c,d=c.x,p=c.y,f=1/0;a=c;do{if(o>=a.x&&a.x>=d&&o!==a.x&&Pu(l<p?o:h,l,d,p,l<p?h:o,l,a.x,a.y)){let x=Math.abs(l-a.y)/(o-a.x);Ps(a,i)&&(x<f||x===f&&(a.x>c.x||a.x===c.x&&qd(c,a)))&&(c=a,f=x)}a=a.next}while(a!==u);return c})(r,e);if(!t)return e;let n=Lu(t,r);return ji(n,n.next),ji(t,t.next)}function qd(r,e){return Ct(r.prev,r,e.prev)<0&&Ct(e.next,r,r.next)<0}function Fl(r,e,t,n,i){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*i|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*i|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Yd(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Pu(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function cs(r,e,t,n,i,s,a,o){return!(r===a&&e===o)&&Pu(r,e,t,n,i,s,a,o)}function Zd(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!(function(t,n){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==n.i&&i.next.i!==n.i&&Iu(i,i.next,t,n))return!0;i=i.next}while(i!==t);return!1})(r,e)&&(Ps(r,e)&&Ps(e,r)&&(function(t,n){let i=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do i.y>o!=i.next.y>o&&i.next.y!==i.y&&a<(i.next.x-i.x)*(o-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==t);return s})(r,e)&&(Ct(r.prev,r,e.prev)||Ct(r,e.prev,e))||Fr(r,e)&&Ct(r.prev,r,r.next)>0&&Ct(e.prev,e,e.next)>0)}function Ct(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Fr(r,e){return r.x===e.x&&r.y===e.y}function Iu(r,e,t,n){let i=Ea(Ct(r,e,t)),s=Ea(Ct(r,e,n)),a=Ea(Ct(t,n,r)),o=Ea(Ct(t,n,e));return i!==s&&a!==o||!(i!==0||!Ta(r,t,e))||!(s!==0||!Ta(r,n,e))||!(a!==0||!Ta(t,r,n))||!(o!==0||!Ta(t,e,n))}function Ta(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Ea(r){return r>0?1:r<0?-1:0}function Ps(r,e){return Ct(r.prev,r,r.next)<0?Ct(r,e,r.next)>=0&&Ct(r,r.prev,e)>=0:Ct(r,e,r.prev)<0||Ct(r,r.next,e)<0}function Lu(r,e){let t=Ol(r.i,r.x,r.y),n=Ol(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function wh(r,e,t,n){let i=Ol(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Is(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Ol(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}var Bl=class{static triangulate(e,t,n=2){return Gd(e,t,n)}},On=class r{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return .5*n}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];Th(e),Eh(n,e);let a=e.length;t.forEach(Th);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Eh(n,t[l]);let o=Bl.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Th(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Eh(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var Or=class r extends Et{constructor(e=new Xi([new _e(.5,.5),new _e(-.5,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Jd,_,y,A,w,L,B=!1;g&&(_=g.getSpacedPoints(h),B=!0,d=!1,y=g.computeFrenetFrames(h,!1),A=new R,w=new R,L=new R),d||(m=0,p=0,f=0,x=0);let N=o.extractPoints(c),G=N.shape,O=N.holes;if(!On.isClockWise(G)){G=G.reverse();for(let z=0,M=O.length;z<M;z++){let C=O[z];On.isClockWise(C)&&(O[z]=C.reverse())}}function I(z){let M=10000000000000001e-36,C=z[0];for(let U=1;U<=z.length;U++){let F=U%z.length,$=z[F],K=$.x-C.x,W=$.y-C.y,oe=K*K+W*W,Re=Math.max(Math.abs($.x),Math.abs($.y),Math.abs(C.x),Math.abs(C.y));oe<=M*Re*Re?(z.splice(F,1),U--):C=$}}I(G),O.forEach(I);let V=O.length,D=G;for(let z=0;z<V;z++){let M=O[z];G=G.concat(M)}function Y(z,M,C){return M||console.error("THREE.ExtrudeGeometry: vec does not exist"),z.clone().addScaledVector(M,C)}let q=G.length;function ee(z,M,C){let U,F,$,K=z.x-M.x,W=z.y-M.y,oe=C.x-z.x,Re=C.y-z.y,ue=K*K+W*W,ie=K*Re-W*oe;if(Math.abs(ie)>Number.EPSILON){let ne=Math.sqrt(ue),se=Math.sqrt(oe*oe+Re*Re),ge=M.x-W/ne,Ie=M.y+K/ne,de=((C.x-Re/se-ge)*Re-(C.y+oe/se-Ie)*oe)/(K*Re-W*oe);U=ge+K*de-z.x,F=Ie+W*de-z.y;let re=U*U+F*F;if(re<=2)return new _e(U,F);$=Math.sqrt(re/2)}else{let ne=!1;K>Number.EPSILON?oe>Number.EPSILON&&(ne=!0):K<-Number.EPSILON?oe<-Number.EPSILON&&(ne=!0):Math.sign(W)===Math.sign(Re)&&(ne=!0),ne?(U=-W,F=K,$=Math.sqrt(ue)):(U=K,F=W,$=Math.sqrt(ue/2))}return new _e(U/$,F/$)}let Z=[];for(let z=0,M=D.length,C=M-1,U=z+1;z<M;z++,C++,U++)C===M&&(C=0),U===M&&(U=0),Z[z]=ee(D[z],D[C],D[U]);let xe=[],Ce,H,X=Z.concat();for(let z=0,M=V;z<M;z++){let C=O[z];Ce=[];for(let U=0,F=C.length,$=F-1,K=U+1;U<F;U++,$++,K++)$===F&&($=0),K===F&&(K=0),Ce[U]=ee(C[U],C[$],C[K]);xe.push(Ce),X=X.concat(Ce)}if(m===0)H=On.triangulateShape(D,O);else{let z=[],M=[];for(let C=0;C<m;C++){let U=C/m,F=p*Math.cos(U*Math.PI/2),$=f*Math.sin(U*Math.PI/2)+x;for(let K=0,W=D.length;K<W;K++){let oe=Y(D[K],Z[K],$);he(oe.x,oe.y,-F),U===0&&z.push(oe)}for(let K=0,W=V;K<W;K++){let oe=O[K];Ce=xe[K];let Re=[];for(let ue=0,ie=oe.length;ue<ie;ue++){let ne=Y(oe[ue],Ce[ue],$);he(ne.x,ne.y,-F),U===0&&Re.push(ne)}U===0&&M.push(Re)}}H=On.triangulateShape(z,M)}let le=H.length,Te=f+x;for(let z=0;z<q;z++){let M=d?Y(G[z],X[z],Te):G[z];B?(w.copy(y.normals[0]).multiplyScalar(M.x),A.copy(y.binormals[0]).multiplyScalar(M.y),L.copy(_[0]).add(w).add(A),he(L.x,L.y,L.z)):he(M.x,M.y,0)}for(let z=1;z<=h;z++)for(let M=0;M<q;M++){let C=d?Y(G[M],X[M],Te):G[M];B?(w.copy(y.normals[z]).multiplyScalar(C.x),A.copy(y.binormals[z]).multiplyScalar(C.y),L.copy(_[z]).add(w).add(A),he(L.x,L.y,L.z)):he(C.x,C.y,u/h*z)}for(let z=m-1;z>=0;z--){let M=z/m,C=p*Math.cos(M*Math.PI/2),U=f*Math.sin(M*Math.PI/2)+x;for(let F=0,$=D.length;F<$;F++){let K=Y(D[F],Z[F],U);he(K.x,K.y,u+C)}for(let F=0,$=O.length;F<$;F++){let K=O[F];Ce=xe[F];for(let W=0,oe=K.length;W<oe;W++){let Re=Y(K[W],Ce[W],U);B?he(Re.x,Re.y+_[h-1].y,_[h-1].x+C):he(Re.x,Re.y,u+C)}}}function me(z,M){let C=z.length;for(;--C>=0;){let U=C,F=C-1;F<0&&(F=z.length-1);for(let $=0,K=h+2*m;$<K;$++){let W=q*$,oe=q*($+1);P(M+U+W,M+F+W,M+F+oe,M+U+oe)}}}function he(z,M,C){l.push(z),l.push(M),l.push(C)}function ze(z,M,C){b(z),b(M),b(C);let U=i.length/3,F=v.generateTopUV(n,i,U-3,U-2,U-1);k(F[0]),k(F[1]),k(F[2])}function P(z,M,C,U){b(z),b(M),b(U),b(M),b(C),b(U);let F=i.length/3,$=v.generateSideWallUV(n,i,F-6,F-3,F-2,F-1);k($[0]),k($[1]),k($[3]),k($[1]),k($[2]),k($[3])}function b(z){i.push(l[3*z+0]),i.push(l[3*z+1]),i.push(l[3*z+2])}function k(z){s.push(z.x),s.push(z.y)}(function(){let z=i.length/3;if(d){let M=0,C=q*M;for(let U=0;U<le;U++){let F=H[U];ze(F[2]+C,F[1]+C,F[0]+C)}M=h+2*m,C=q*M;for(let U=0;U<le;U++){let F=H[U];ze(F[0]+C,F[1]+C,F[2]+C)}}else{for(let M=0;M<le;M++){let C=H[M];ze(C[2],C[1],C[0])}for(let M=0;M<le;M++){let C=H[M];ze(C[0]+q*h,C[1]+q*h,C[2]+q*h)}}n.addGroup(z,i.length/3-z,0)})(),(function(){let z=i.length/3,M=0;me(D,M),M+=D.length;for(let C=0,U=O.length;C<U;C++){let F=O[C];me(F,M),M+=F.length}n.addGroup(z,i.length/3-z,1)})()}this.setAttribute("position",new Je(i,3)),this.setAttribute("uv",new Je(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,i){if(i.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];i.shapes.push(o.uuid)}else i.shapes.push(t.uuid);return i.options=Object.assign({},n),n.extrudePath!==void 0&&(i.options.extrudePath=n.extrudePath.toJSON()),i})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Za[i.type]().fromJSON(i)),new r(n,e.options)}},Jd={generateTopUV:function(r,e,t,n,i){let s=e[3*t],a=e[3*t+1],o=e[3*n],l=e[3*n+1],c=e[3*i],h=e[3*i+1];return[new _e(s,a),new _e(o,l),new _e(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*i],p=e[3*i+1],f=e[3*i+2],x=e[3*s],m=e[3*s+1],g=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new _e(a,1-l),new _e(c,1-u),new _e(d,1-f),new _e(x,1-g)]:[new _e(o,1-l),new _e(h,1-u),new _e(p,1-f),new _e(m,1-g)]}},Ka=class r extends Ri{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Br=class r extends Et{constructor(e=[new _e(0,-.5),new _e(.5,0),new _e(0,.5)],t=12,n=0,i=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=st(i,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new R,d=new _e,p=new R,f=new R,x=new R,m=0,g=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,p.x=1*g,p.y=-m,p.z=0*g,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[v+1].x-e[v].x,g=e[v+1].y-e[v].y,p.x=1*g,p.y=-m,p.z=0*g,f.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(f)}for(let v=0;v<=t;v++){let _=n+v*h*i,y=Math.sin(_),A=Math.cos(_);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*y,u.y=e[w].y,u.z=e[w].x*A,a.push(u.x,u.y,u.z),d.x=v/t,d.y=w/(e.length-1),o.push(d.x,d.y);let L=l[3*w+0]*y,B=l[3*w+1],N=l[3*w+0]*A;c.push(L,B,N)}}for(let v=0;v<t;v++)for(let _=0;_<e.length-1;_++){let y=_+v*e.length,A=y,w=y+e.length,L=y+e.length+1,B=y+1;s.push(A,w,B),s.push(L,B,w)}this.setIndex(s),this.setAttribute("position",new Je(a,3)),this.setAttribute("uv",new Je(o,2)),this.setAttribute("normal",new Je(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},Qa=class r extends Ri{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Gn=class r extends Et{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,p=[],f=[],x=[],m=[];for(let g=0;g<h;g++){let v=g*d-a;for(let _=0;_<c;_++){let y=_*u-s;f.push(y,-v,0),x.push(0,0,1),m.push(_/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){let _=v+c*g,y=v+c*(g+1),A=v+1+c*(g+1),w=v+1+c*g;p.push(_,y,w),p.push(y,A,w)}this.setIndex(p),this.setAttribute("position",new Je(f,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},eo=class r extends Et{constructor(e=.5,t=1,n=32,i=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(i=Math.max(1,i)),p=new R,f=new _e;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let g=s+m/n*a;p.x=u*Math.cos(g),p.y=u*Math.sin(g),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}u+=d}for(let x=0;x<i;x++){let m=x*(n+1);for(let g=0;g<n;g++){let v=g+m,_=v,y=v+n+1,A=v+n+2,w=v+1;o.push(_,y,w),o.push(y,A,w)}}this.setIndex(o),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(c,3)),this.setAttribute("uv",new Je(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},to=class r extends Et{constructor(e=new Xi([new _e(0,.5),new _e(-.5,-.5),new _e(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=i.length/3,d=h.extractPoints(t),p=d.shape,f=d.holes;On.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,g=f.length;m<g;m++){let v=f[m];On.isClockWise(v)===!0&&(f[m]=v.reverse())}let x=On.triangulateShape(p,f);for(let m=0,g=f.length;m<g;m++){let v=f[m];p=p.concat(v)}for(let m=0,g=p.length;m<g;m++){let v=p[m];i.push(v.x,v.y,0),s.push(0,0,1),a.push(v.x,v.y)}for(let m=0,g=x.length;m<g;m++){let v=x[m],_=v[0]+u,y=v[1]+u,A=v[2]+u;n.push(_,y,A),l+=3}}this.setIndex(n),this.setAttribute("position",new Je(i,3)),this.setAttribute("normal",new Je(s,3)),this.setAttribute("uv",new Je(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let a=t[i];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let i=0,s=e.shapes.length;i<s;i++){let a=t[e.shapes[i]];n.push(a)}return new r(n,e.curveSegments)}},pn=class r extends Et{constructor(e=1,t=32,n=16,i=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new R,d=new R,p=[],f=[],x=[],m=[];for(let g=0;g<=n;g++){let v=[],_=g/n,y=0;g===0&&a===0?y=.5/t:g===n&&l===Math.PI&&(y=-.5/t);for(let A=0;A<=t;A++){let w=A/t;u.x=-e*Math.cos(i+w*s)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(i+w*s)*Math.sin(a+_*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(w+y,1-_),v.push(c++)}h.push(v)}for(let g=0;g<n;g++)for(let v=0;v<t;v++){let _=h[g][v+1],y=h[g][v],A=h[g+1][v],w=h[g+1][v+1];(g!==0||a>0)&&p.push(_,y,w),(g!==n-1||l<Math.PI)&&p.push(y,A,w)}this.setIndex(p),this.setAttribute("position",new Je(f,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},no=class r extends Ri{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},An=class r extends Et{constructor(e=1,t=.4,n=12,i=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new R,u=new R,d=new R;for(let p=0;p<=n;p++)for(let f=0;f<=i;f++){let x=f/i*s,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(f/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let f=1;f<=i;f++){let x=(i+1)*p+f-1,m=(i+1)*(p-1)+f-1,g=(i+1)*(p-1)+f,v=(i+1)*p+f;a.push(x,m,v),a.push(m,g,v)}this.setIndex(a),this.setAttribute("position",new Je(o,3)),this.setAttribute("normal",new Je(l,3)),this.setAttribute("uv",new Je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},io=class r extends Et{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],l=[],c=[],h=[],u=new R,d=new R,p=new R,f=new R,x=new R,m=new R,g=new R;for(let _=0;_<=n;++_){let y=_/n*s*Math.PI*2;v(y,s,a,e,p),v(y+.01,s,a,e,f),m.subVectors(f,p),g.addVectors(f,p),x.crossVectors(m,g),g.crossVectors(x,m),x.normalize(),g.normalize();for(let A=0;A<=i;++A){let w=A/i*Math.PI*2,L=-t*Math.cos(w),B=t*Math.sin(w);u.x=p.x+(L*g.x+B*x.x),u.y=p.y+(L*g.y+B*x.y),u.z=p.z+(L*g.z+B*x.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(_/n),h.push(A/i)}}for(let _=1;_<=n;_++)for(let y=1;y<=i;y++){let A=(i+1)*(_-1)+(y-1),w=(i+1)*_+(y-1),L=(i+1)*_+y,B=(i+1)*(_-1)+y;o.push(A,w,B),o.push(w,L,B)}function v(_,y,A,w,L){let B=Math.cos(_),N=Math.sin(_),G=A/y*_,O=Math.cos(G);L.x=w*(2+O)*.5*B,L.y=w*(2+O)*N*.5,L.z=w*Math.sin(G)*.5}this.setIndex(o),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(c,3)),this.setAttribute("uv",new Je(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},ro=class r extends Et{constructor(e=new Es(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new R,l=new R,c=new _e,h=new R,u=[],d=[],p=[],f=[];function x(m){h=e.getPointAt(m/t,h);let g=a.normals[m],v=a.binormals[m];for(let _=0;_<=i;_++){let y=_/i*Math.PI*2,A=Math.sin(y),w=-Math.cos(y);l.x=w*g.x+A*v.x,l.y=w*g.y+A*v.y,l.z=w*g.z+A*v.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let m=0;m<t;m++)x(m);x(s===!1?t:0),(function(){for(let m=0;m<=t;m++)for(let g=0;g<=i;g++)c.x=m/t,c.y=g/i,p.push(c.x,c.y)})(),(function(){for(let m=1;m<=t;m++)for(let g=1;g<=i;g++){let v=(i+1)*(m-1)+(g-1),_=(i+1)*m+(g-1),y=(i+1)*m+g,A=(i+1)*(m-1)+g;f.push(v,_,A),f.push(_,y,A)}})()})(),this.setIndex(f),this.setAttribute("position",new Je(u,3)),this.setAttribute("normal",new Je(d,3)),this.setAttribute("uv",new Je(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new Za[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},so=class extends Et{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new R,s=new R;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,f=d+u.count;p<f;p+=3)for(let x=0;x<3;x++){let m=o.getX(p+x),g=o.getX(p+(x+1)%3);i.fromBufferAttribute(a,m),s.fromBufferAttribute(a,g),Ah(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;i.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),Ah(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Je(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Ah(r,e,t){let n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)!==!0&&t.has(i)!==!0&&(t.add(n),t.add(i),!0)}var rg=Object.freeze({__proto__:null,BoxGeometry:hi,CapsuleGeometry:Va,CircleGeometry:Ci,ConeGeometry:Ha,CylinderGeometry:ui,DodecahedronGeometry:Wa,EdgesGeometry:$a,ExtrudeGeometry:Or,IcosahedronGeometry:Ka,LatheGeometry:Br,OctahedronGeometry:Qa,PlaneGeometry:Gn,PolyhedronGeometry:Ri,RingGeometry:eo,ShapeGeometry:to,SphereGeometry:pn,TetrahedronGeometry:no,TorusGeometry:An,TorusKnotGeometry:io,TubeGeometry:ro,WireframeGeometry:so});var mn=class extends li{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Lt=class extends mn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return st(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ao=class extends li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},oo=class extends li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Aa(r,e){return r&&r.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r):r}function Kd(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var qi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},lo=class extends qi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ll,endingEnd:Ll}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Dl:s=e,o=2*t-n;break;case Ul:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Dl:a=e,l=2*n-t;break;case Ul:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=.5*(n-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(n-t)/(i-t),x=f*f,m=x*f,g=-d*m+2*d*x-d*f,v=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*f+1,_=(-1-p)*m+(1.5+p)*x+.5*f,y=p*m-p*x;for(let A=0;A!==o;++A)s[A]=g*a[h+A]+v*a[c+A]+_*a[l+A]+y*a[u+A];return s}},co=class extends qi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},ho=class extends qi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},un=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Aa(t,this.TimeBufferType),this.values=Aa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Aa(e.times,Array),values:Aa(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new co(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new lo(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ds:t=this.InterpolantFactoryMethodDiscrete;break;case La:t=this.InterpolantFactoryMethodLinear;break;case Ca:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ds;case this.InterpolantFactoryMethodLinear:return La;case this.InterpolantFactoryMethodSmooth:return Ca}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Kd(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ca,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(i)l=!0;else{let h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){let f=t[h+p];if(f!==t[u+p]||f!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};un.prototype.ValueTypeName="",un.prototype.TimeBufferType=Float32Array,un.prototype.ValueBufferType=Float32Array,un.prototype.DefaultInterpolation=La;var wi=class extends un{constructor(e,t,n){super(e,t,n)}};wi.prototype.ValueTypeName="bool",wi.prototype.ValueBufferType=Array,wi.prototype.DefaultInterpolation=ds,wi.prototype.InterpolantFactoryMethodLinear=void 0,wi.prototype.InterpolantFactoryMethodSmooth=void 0;var uo=class extends un{constructor(e,t,n,i){super(e,t,n,i)}};uo.prototype.ValueTypeName="color";var po=class extends un{constructor(e,t,n,i){super(e,t,n,i)}};po.prototype.ValueTypeName="number";var mo=class extends qi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)Sn.slerpFlat(s,0,a,c-o,a,c,l);return s}},Ls=class extends un{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new mo(this.times,this.values,this.getValueSize(),e)}};Ls.prototype.ValueTypeName="quaternion",Ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Ti=class extends un{constructor(e,t,n){super(e,t,n)}};Ti.prototype.ValueTypeName="string",Ti.prototype.ValueBufferType=Array,Ti.prototype.DefaultInterpolation=ds,Ti.prototype.InterpolantFactoryMethodLinear=void 0,Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var fo=class extends un{constructor(e,t,n,i){super(e,t,n,i)}};fo.prototype.ValueTypeName="vector";var Pa={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},go=class{constructor(e,t,n){let i=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,a===!1&&i.onStart!==void 0&&i.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,l),o===l&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],f=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}},Du=new go,zr=class{constructor(e){this.manager=e!==void 0?e:Du,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};zr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Tr=new WeakMap,vo=class extends zr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Pa.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=Tr.get(a);u===void 0&&(u=[],Tr.set(a,u)),u.push({onLoad:t,onError:i})}return a}let o=Rr("img");function l(){h(),t&&t(this);let u=Tr.get(this)||[];for(let d=0;d<u.length;d++){let p=u[d];p.onLoad&&p.onLoad(this)}Tr.delete(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),Pa.remove(`image:${e}`);let d=Tr.get(this)||[];for(let p=0;p<d.length;p++){let f=d[p];f.onError&&f.onError(u)}Tr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Pa.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var Yi=class extends zr{constructor(e){super(e)}load(e,t,n,i){let s=new Jt,a=new vo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},Ds=class extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Us=class extends Ds{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Pl=new nt,Ch=new R,Rh=new R,zl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.mapType=Hn,this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ai,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ch.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ch),Rh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rh),t.updateMatrixWorld(),Pl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Pl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var sg=new nt,ag=new R,og=new R;var Ns=class extends Ir{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},kl=class extends zl{constructor(){super(new Ns(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},kr=class extends Ds{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new kl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var lg=new nt,cg=new nt,hg=new nt;var _o=class extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var ug=new R,dg=new Sn,pg=new R,mg=new R,fg=new R;var gg=new R,vg=new Sn,_g=new R,xg=new R;var Pc="\\[\\]\\.:\\/",Qd=new RegExp("["+Pc+"]","g"),Il="[^"+Pc+"]",ep="[^"+Pc.replace("\\.","")+"]",tp=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Il)+/(WCOD+)?/.source.replace("WCOD",ep)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Il)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Il)+"$"),np=["material","materials","bones","map"],wt=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Qd,"")}static parseTrackName(e){let t=tp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);np.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};wt.Composite=class{constructor(r,e,t){let n=t||wt.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,n)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray],wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yg=new Float32Array(1);var Mg=new nt;var Sg=new _e;var bg=new R,wg=new R;var Tg=new R;var Eg=new R,Ag=new nt,Cg=new nt;var Rg=new R,Pg=new Ue,Ig=new Ue;var Lg=new R,Dg=new R,Ug=new R;var Ng=new R,Fg=new Ir;var Og=new bn;var Bg=new R;function Ic(r,e,t,n){let i=(function(s){switch(s){case Hn:case jl:return{byteLength:1,components:1};case Hr:case ql:case Wr:return{byteLength:2,components:1};case Io:case Lo:return{byteLength:2,components:4};case Ki:case Po:case Wn:return{byteLength:4,components:1};case Yl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(n);switch(t){case 1021:return r*e;case Zl:case Do:return r*e/i.components*i.byteLength;case 1030:case 1031:return r*e*2/i.components*i.byteLength;case 1022:return r*e*3/i.components*i.byteLength;case Cn:case 1033:return r*e*4/i.components*i.byteLength;case 33776:case 33777:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(r,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(r,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37808:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(r/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(r/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"178"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="178");function id(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function rp(r){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=e.get(t);n&&(r.deleteBuffer(n.buffer),e.delete(t))},update:function(t,n){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let i=e.get(t);if(i===void 0)e.set(t,(function(s,a){let o=s.array,l=s.usage,c=o.byteLength,h=r.createBuffer(),u;if(r.bindBuffer(a,h),r.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)u=r.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)u=r.HALF_FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?r.HALF_FLOAT:r.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=r.SHORT;else if(o instanceof Uint32Array)u=r.UNSIGNED_INT;else if(o instanceof Int32Array)u=r.INT;else if(o instanceof Int8Array)u=r.BYTE;else if(o instanceof Uint8Array)u=r.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=r.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:c}})(t,n));else if(i.version<t.version){if(i.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let l=a.array,c=a.updateRanges;if(r.bindBuffer(o,s),c.length===0)r.bufferSubData(o,0,l);else{c.sort((u,d)=>u.start-d.start);let h=0;for(let u=1;u<c.length;u++){let d=c[h],p=c[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,c[h]=p)}c.length=h+1;for(let u=0,d=c.length;u<d;u++){let p=c[u];r.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(i.buffer,t,n),i.version=t.version}}}}var rt={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},Pe={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},$n={basic:{uniforms:jt([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:jt([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ue(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:jt([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:jt([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:jt([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Ue(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:jt([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:jt([Pe.points,Pe.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:jt([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:jt([Pe.common,Pe.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:jt([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:jt([Pe.sprite,Pe.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:jt([Pe.common,Pe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:jt([Pe.lights,Pe.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};$n.physical={uniforms:jt([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var zo={r:0,b:0,g:0},tr=new Tn,sp=new nt;function ap(r,e,t,n,i,s,a){let o=new Ue(0),l,c,h=s===!0?0:1,u=null,d=0,p=null;function f(m){let g=m.isScene===!0?m.background:null;return g&&g.isTexture&&(g=(m.backgroundBlurriness>0?t:e).get(g)),g}function x(m,g){m.getRGB(zo,Cc(r)),n.buffers.color.setClear(zo.r,zo.g,zo.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(m,g=1){o.set(m),h=g,x(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(m){h=m,x(o,h)},render:function(m){let g=!1,v=f(m);v===null?x(o,h):v&&v.isColor&&(x(v,1),g=!0);let _=r.xr.getEnvironmentBlendMode();_==="additive"?n.buffers.color.setClear(0,0,0,1,a):_==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||g)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))},addToRenderList:function(m,g){let v=f(g);v&&(v.isCubeTexture||v.mapping===Bs)?(c===void 0&&(c=new qe(new hi(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:er($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(_,y,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),tr.copy(g.backgroundRotation),tr.x*=-1,tr.y*=-1,tr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(sp.makeRotationFromEuler(tr)),c.material.toneMapped=ut.getTransfer(v.colorSpace)!==ft,u===v&&d===v.version&&p===r.toneMapping||(c.material.needsUpdate=!0,u=v,d=v.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new qe(new Gn(2,2),new En({name:"BackgroundMaterial",uniforms:er($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.toneMapped=ut.getTransfer(v.colorSpace)!==ft,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),u===v&&d===v.version&&p===r.toneMapping||(l.material.needsUpdate=!0,u=v,d=v.version,p=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))},dispose:function(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}}}function op(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=c(null),s=i,a=!1;function o(g){return r.bindVertexArray(g)}function l(g){return r.deleteVertexArray(g)}function c(g){let v=[],_=[],y=[];for(let A=0;A<t;A++)v[A]=0,_[A]=0,y[A]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:_,attributeDivisors:y,object:g,attributes:{},index:null}}function h(){let g=s.newAttributes;for(let v=0,_=g.length;v<_;v++)g[v]=0}function u(g){d(g,0)}function d(g,v){let _=s.newAttributes,y=s.enabledAttributes,A=s.attributeDivisors;_[g]=1,y[g]===0&&(r.enableVertexAttribArray(g),y[g]=1),A[g]!==v&&(r.vertexAttribDivisor(g,v),A[g]=v)}function p(){let g=s.newAttributes,v=s.enabledAttributes;for(let _=0,y=v.length;_<y;_++)v[_]!==g[_]&&(r.disableVertexAttribArray(_),v[_]=0)}function f(g,v,_,y,A,w,L){L===!0?r.vertexAttribIPointer(g,v,_,A,w):r.vertexAttribPointer(g,v,_,y,A,w)}function x(){m(),a=!0,s!==i&&(s=i,o(s.object))}function m(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:function(g,v,_,y,A){let w=!1,L=(function(B,N,G){let O=G.wireframe===!0,I=n[B.id];I===void 0&&(I={},n[B.id]=I);let V=I[N.id];V===void 0&&(V={},I[N.id]=V);let D=V[O];return D===void 0&&(D=c(r.createVertexArray()),V[O]=D),D})(y,_,v);s!==L&&(s=L,o(s.object)),w=(function(B,N,G,O){let I=s.attributes,V=N.attributes,D=0,Y=G.getAttributes();for(let q in Y)if(Y[q].location>=0){let ee=I[q],Z=V[q];if(Z===void 0&&(q==="instanceMatrix"&&B.instanceMatrix&&(Z=B.instanceMatrix),q==="instanceColor"&&B.instanceColor&&(Z=B.instanceColor)),ee===void 0||ee.attribute!==Z||Z&&ee.data!==Z.data)return!0;D++}return s.attributesNum!==D||s.index!==O})(g,y,_,A),w&&(function(B,N,G,O){let I={},V=N.attributes,D=0,Y=G.getAttributes();for(let q in Y)if(Y[q].location>=0){let ee=V[q];ee===void 0&&(q==="instanceMatrix"&&B.instanceMatrix&&(ee=B.instanceMatrix),q==="instanceColor"&&B.instanceColor&&(ee=B.instanceColor));let Z={};Z.attribute=ee,ee&&ee.data&&(Z.data=ee.data),I[q]=Z,D++}s.attributes=I,s.attributesNum=D,s.index=O})(g,y,_,A),A!==null&&e.update(A,r.ELEMENT_ARRAY_BUFFER),(w||a)&&(a=!1,(function(B,N,G,O){h();let I=O.attributes,V=G.getAttributes(),D=N.defaultAttributeValues;for(let Y in V){let q=V[Y];if(q.location>=0){let ee=I[Y];if(ee===void 0&&(Y==="instanceMatrix"&&B.instanceMatrix&&(ee=B.instanceMatrix),Y==="instanceColor"&&B.instanceColor&&(ee=B.instanceColor)),ee!==void 0){let Z=ee.normalized,xe=ee.itemSize,Ce=e.get(ee);if(Ce===void 0)continue;let H=Ce.buffer,X=Ce.type,le=Ce.bytesPerElement,Te=X===r.INT||X===r.UNSIGNED_INT||ee.gpuType===Po;if(ee.isInterleavedBufferAttribute){let me=ee.data,he=me.stride,ze=ee.offset;if(me.isInstancedInterleavedBuffer){for(let P=0;P<q.locationSize;P++)d(q.location+P,me.meshPerAttribute);B.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let P=0;P<q.locationSize;P++)u(q.location+P);r.bindBuffer(r.ARRAY_BUFFER,H);for(let P=0;P<q.locationSize;P++)f(q.location+P,xe/q.locationSize,X,Z,he*le,(ze+xe/q.locationSize*P)*le,Te)}else{if(ee.isInstancedBufferAttribute){for(let me=0;me<q.locationSize;me++)d(q.location+me,ee.meshPerAttribute);B.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let me=0;me<q.locationSize;me++)u(q.location+me);r.bindBuffer(r.ARRAY_BUFFER,H);for(let me=0;me<q.locationSize;me++)f(q.location+me,xe/q.locationSize,X,Z,xe*le,xe/q.locationSize*me*le,Te)}}else if(D!==void 0){let Z=D[Y];if(Z!==void 0)switch(Z.length){case 2:r.vertexAttrib2fv(q.location,Z);break;case 3:r.vertexAttrib3fv(q.location,Z);break;case 4:r.vertexAttrib4fv(q.location,Z);break;default:r.vertexAttrib1fv(q.location,Z)}}}}p()})(g,v,_,y),A!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(A).buffer))},reset:x,resetDefaultState:m,dispose:function(){x();for(let g in n){let v=n[g];for(let _ in v){let y=v[_];for(let A in y)l(y[A].object),delete y[A];delete v[_]}delete n[g]}},releaseStatesOfGeometry:function(g){if(n[g.id]===void 0)return;let v=n[g.id];for(let _ in v){let y=v[_];for(let A in y)l(y[A].object),delete y[A];delete v[_]}delete n[g.id]},releaseStatesOfProgram:function(g){for(let v in n){let _=n[v];if(_[g.id]===void 0)continue;let y=_[g.id];for(let A in y)l(y[A].object),delete y[A];delete _[g.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function lp(r,e,t){let n;function i(s,a,o){o!==0&&(r.drawArraysInstanced(n,s,a,o),t.update(a,n,o))}this.setMode=function(s){n=s},this.render=function(s,a){r.drawArrays(n,s,a),t.update(a,n,1)},this.renderInstances=i,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,s,0,a,0,o);let l=0;for(let c=0;c<o;c++)l+=a[c];t.update(l,n,1)},this.renderMultiDrawInstances=function(s,a,o,l){if(o===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<s.length;h++)i(s[h],a[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(n,s,0,a,0,l,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u]*l[u];t.update(h,n,1)}}}function cp(r,e,t,n){let i;function s(d){if(d==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=t.logarithmicDepthBuffer===!0,c=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let d=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:s,textureFormatReadable:function(d){return d===Cn||n.convert(d)===r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){let p=d===Wr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==Hn&&n.convert(d)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==Wn&&!p)},precision:a,logarithmicDepthBuffer:l,reverseDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:r.getParameter(r.MAX_TEXTURE_SIZE),maxCubemapSize:r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:r.getParameter(r.MAX_VERTEX_ATTRIBS),maxVertexUniforms:r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:r.getParameter(r.MAX_VARYING_VECTORS),maxFragmentUniforms:r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:r.getParameter(r.MAX_SAMPLES)}}function hp(r){let e=this,t=null,n=0,i=!1,s=!1,a=new hn,o=new it,l={value:null,needsUpdate:!1};function c(h,u,d,p){let f=h!==null?h.length:0,x=null;if(f!==0){if(x=l.value,p!==!0||x===null){let m=d+4*f,g=u.matrixWorldInverse;o.getNormalMatrix(g),(x===null||x.length<m)&&(x=new Float32Array(m));for(let v=0,_=d;v!==f;++v,_+=4)a.copy(h[v]).applyMatrix4(g,o),a.normal.toArray(x,_),x[_+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,x}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||i;return i=u,n=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,f=h.clipIntersection,x=h.clipShadows,m=r.get(h);if(!i||p===null||p.length===0||s&&!x)s?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let g=s?0:n,v=4*g,_=m.clippingState||null;l.value=_,_=c(p,u,v,d);for(let y=0;y!==v;++y)_[y]=t[y];m.clippingState=_,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=g}}}function up(r){let e=new WeakMap;function t(i,s){return s===Ao?i.mapping=Vr:s===Co&&(i.mapping=Zi),i}function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping;if(s===Ao||s===Co){if(e.has(i))return t(e.get(i).texture,i.mapping);{let a=i.image;if(a&&a.height>0){let o=new za(a.height);return o.fromEquirectangularTexture(r,i),e.set(i,o),i.addEventListener("dispose",n),t(o.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}var Uu=[.125,.215,.35,.446,.526,.582],Vs=20,Lc=new Ns,Nu=new Ue,Dc=null,Uc=0,Nc=0,Fc=!1,ir=(1+Math.sqrt(5))/2,Xr=1/ir,Fu=[new R(-ir,Xr,0),new R(ir,Xr,0),new R(-Xr,0,ir),new R(Xr,0,ir),new R(0,ir,-Xr),new R(0,ir,Xr),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],dp=new R,qr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){let{size:a=256,position:o=dp}=s;Dc=this._renderer.getRenderTarget(),Uc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),Fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Dc,Uc,Nc),this._renderer.xr.enabled=Fc,e.scissorTest=!1,ko(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vr||e.mapping===Zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dc=this._renderer.getRenderTarget(),Uc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),Fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:Wr,format:Cn,colorSpace:Vi,depthBuffer:!1},i=Ou(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ou(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],l=[],c=[],h=a,u=a-4+1+Uu.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);l.push(p);let f=1/p;d>a-4?f=Uu[d-a+4-1]:d===0&&(f=0),c.push(f);let x=1/(p-2),m=-x,g=1+x,v=[m,m,g,m,g,g,m,m,g,g,m,g],_=6,y=6,A=3,w=2,L=1,B=new Float32Array(A*y*_),N=new Float32Array(w*y*_),G=new Float32Array(L*y*_);for(let I=0;I<_;I++){let V=I%3*2/3-1,D=I>2?0:-1,Y=[V,D,0,V+2/3,D,0,V+2/3,D+1,0,V,D,0,V+2/3,D+1,0,V,D+1,0];B.set(Y,A*y*I),N.set(v,w*y*I);let q=[I,I,I,I,I,I];G.set(q,L*y*I)}let O=new Et;O.setAttribute("position",new Pt(B,A)),O.setAttribute("uv",new Pt(N,w)),O.setAttribute("faceIndex",new Pt(G,L)),o.push(O),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}})(s)),this._blurMaterial=(function(a,o,l){let c=new Float32Array(Vs),h=new R(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:Vs,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})})(s,e,t)}return i}_compileMaterial(e){let t=new qe(this._lodPlanes[0],e);this._renderer.compile(t,Lc)}_sceneToCubeUV(e,t,n,i,s){let a=new Wt(90,1,t,n),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,u=c.toneMapping;c.getClearColor(Nu),c.toneMapping=di,c.autoClear=!1;let d=new ci({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),p=new qe(new hi,d),f=!1,x=e.background;x?x.isColor&&(d.color.copy(x),e.background=null,f=!0):(d.color.copy(Nu),f=!0);for(let m=0;m<6;m++){let g=m%3;g===0?(a.up.set(0,o[m],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x+l[m],s.y,s.z)):g===1?(a.up.set(0,0,o[m]),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y+l[m],s.z)):(a.up.set(0,o[m],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y,s.z+l[m]));let v=this._cubeSize;ko(i,g*v,m>2?v:0,v,v),c.setRenderTarget(i),f&&c.render(p,a),c.render(e,a)}p.geometry.dispose(),p.material.dispose(),c.toneMapping=u,c.autoClear=h,e.background=x}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Vr||e.mapping===Zi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=zu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bu());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new qe(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;ko(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,Lc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Fu[(i-s-1)%Fu.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new qe(this._lodPlanes[i],c),u=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,f=s/p,x=isFinite(s)?1+Math.floor(3*f):Vs;x>Vs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to 20`);let m=[],g=0;for(let y=0;y<Vs;++y){let A=y/f,w=Math.exp(-A*A/2);m.push(w),y===0?g+=w:y<x&&(g+=2*w)}for(let y=0;y<m.length;y++)m[y]=m[y]/g;u.envMap.value=e.texture,u.samples.value=x,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:v}=this;u.dTheta.value=p,u.mipInt.value=v-n;let _=this._sizeLods[i];ko(t,3*_*(i>v-4?i-v+4:0),4*(this._cubeSize-_),3*_,2*_),l.setRenderTarget(t),l.render(h,Lc)}};function Ou(r,e,t){let n=new kn(r,e,t);return n.texture.mapping=Bs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ko(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Bu(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function zu(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Xc(){return`

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
	`}function pp(r){let e=new WeakMap,t=null;function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping,a=s===Ao||s===Co,o=s===Vr||s===Zi;if(a||o){let l=e.get(i),c=l!==void 0?l.texture.pmremVersion:0;if(i.isRenderTargetTexture&&i.pmremVersion!==c)return t===null&&(t=new qr(r)),l=a?t.fromEquirectangular(i,l):t.fromCubemap(i,l),l.texture.pmremVersion=i.pmremVersion,e.set(i,l),l.texture;if(l!==void 0)return l.texture;{let h=i.image;return a&&h&&h.height>0||o&&h&&(function(u){let d=0,p=6;for(let f=0;f<p;f++)u[f]!==void 0&&d++;return d===p})(h)?(t===null&&(t=new qr(r)),l=a?t.fromEquirectangular(i):t.fromCubemap(i),l.texture.pmremVersion=i.pmremVersion,e.set(i,l),i.addEventListener("dispose",n),l.texture):null}}}return i},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function mp(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Hi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function fp(r,e,t,n){let i={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);c.removeEventListener("dispose",a),delete i[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(h!==null){let x=h.array;d=h.version;for(let m=0,g=x.length;m<g;m+=3){let v=x[m+0],_=x[m+1],y=x[m+2];c.push(v,_,_,y,y,v)}}else{if(u===void 0)return;{let x=u.array;d=u.version;for(let m=0,g=x.length/3-1;m<g;m+=3){let v=m+0,_=m+1,y=m+2;c.push(v,_,_,y,y,v)}}}let p=new(Ac(c)?_s:vs)(c,1);p.version=d;let f=s.get(l);f&&e.remove(f),s.set(l,p)}return{get:function(l,c){return i[c.id]===!0||(c.addEventListener("dispose",a),i[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let h in c)e.update(c[h],r.ARRAY_BUFFER)},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function gp(r,e,t){let n,i,s;function a(o,l,c){c!==0&&(r.drawElementsInstanced(n,l,i,o*s,c),t.update(l,n,c))}this.setMode=function(o){n=o},this.setIndex=function(o){i=o.type,s=o.bytesPerElement},this.render=function(o,l){r.drawElements(n,l,i,o*s),t.update(l,n,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,l,0,i,o,0,c);let h=0;for(let u=0;u<c;u++)h+=l[u];t.update(h,n,1)},this.renderMultiDrawInstances=function(o,l,c,h){if(c===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/s,l[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(n,l,0,i,o,0,h,0,c);let d=0;for(let p=0;p<c;p++)d+=l[p]*h[p];t.update(d,n,1)}}}function vp(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,i){switch(e.calls++,n){case r.TRIANGLES:e.triangles+=i*(t/3);break;case r.LINES:e.lines+=i*(t/2);break;case r.LINE_STRIP:e.lines+=i*(t-1);break;case r.LINE_LOOP:e.lines+=i*t;break;case r.POINTS:e.points+=i*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function _p(r,e,t){let n=new WeakMap,i=new Tt;return{update:function(s,a,o){let l=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,u=n.get(a);if(u===void 0||u.count!==h){let B=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",B)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],g=a.morphAttributes.color||[],v=0;d===!0&&(v=1),p===!0&&(v=2),f===!0&&(v=3);let _=a.attributes.position.count*v,y=1;_>e.maxTextureSize&&(y=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let A=new Float32Array(_*y*4*h),w=new fs(A,_,y,h);w.type=Wn,w.needsUpdate=!0;let L=4*v;for(let N=0;N<h;N++){let G=x[N],O=m[N],I=g[N],V=_*y*4*N;for(let D=0;D<G.count;D++){let Y=D*L;d===!0&&(i.fromBufferAttribute(G,D),A[V+Y+0]=i.x,A[V+Y+1]=i.y,A[V+Y+2]=i.z,A[V+Y+3]=0),p===!0&&(i.fromBufferAttribute(O,D),A[V+Y+4]=i.x,A[V+Y+5]=i.y,A[V+Y+6]=i.z,A[V+Y+7]=0),f===!0&&(i.fromBufferAttribute(I,D),A[V+Y+8]=i.x,A[V+Y+9]=i.y,A[V+Y+10]=i.z,A[V+Y+11]=I.itemSize===4?i.w:1)}}u={count:h,texture:w,size:new _e(_,y)},n.set(a,u),a.addEventListener("dispose",B)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let d=0;for(let f=0;f<l.length;f++)d+=l[f];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(r,"morphTargetBaseInfluence",p),o.getUniforms().setValue(r,"morphTargetInfluences",l)}o.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}}}function xp(r,e,t,n){let i=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,l=a.geometry,c=e.get(a,l);if(i.get(c)!==o&&(e.update(c),i.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),i.get(a)!==o&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;i.get(h)!==o&&(h.update(),i.set(h,o))}return c},dispose:function(){i=new WeakMap}}}var rd=new Jt,ku=new Ss(1,1),sd=new fs,ad=new Oa,od=new xs,Gu=[],Vu=[],Hu=new Float32Array(16),Wu=new Float32Array(9),$u=new Float32Array(4);function Yr(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Gu[i];if(s===void 0&&(s=new Float32Array(i),Gu[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Bt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function zt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ho(r,e){let t=Vu[e];t===void 0&&(t=new Int32Array(e),Vu[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function yp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Mp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;r.uniform2fv(this.addr,e),zt(t,e)}}function Sp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;r.uniform3fv(this.addr,e),zt(t,e)}}function bp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;r.uniform4fv(this.addr,e),zt(t,e)}}function wp(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;$u.set(n),r.uniformMatrix2fv(this.addr,!1,$u),zt(t,n)}}function Tp(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;Wu.set(n),r.uniformMatrix3fv(this.addr,!1,Wu),zt(t,n)}}function Ep(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;Hu.set(n),r.uniformMatrix4fv(this.addr,!1,Hu),zt(t,n)}}function Ap(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Cp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;r.uniform2iv(this.addr,e),zt(t,e)}}function Rp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;r.uniform3iv(this.addr,e),zt(t,e)}}function Pp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;r.uniform4iv(this.addr,e),zt(t,e)}}function Ip(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Lp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;r.uniform2uiv(this.addr,e),zt(t,e)}}function Dp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;r.uniform3uiv(this.addr,e),zt(t,e)}}function Up(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;r.uniform4uiv(this.addr,e),zt(t,e)}}function Np(r,e,t){let n=this.cache,i=t.allocateTextureUnit(),s;n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),this.type===r.SAMPLER_2D_SHADOW?(ku.compareFunction=Tc,s=ku):s=rd,t.setTexture2D(e||s,i)}function Fp(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ad,i)}function Op(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||od,i)}function Bp(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||sd,i)}function zp(r,e){r.uniform1fv(this.addr,e)}function kp(r,e){let t=Yr(e,this.size,2);r.uniform2fv(this.addr,t)}function Gp(r,e){let t=Yr(e,this.size,3);r.uniform3fv(this.addr,t)}function Vp(r,e){let t=Yr(e,this.size,4);r.uniform4fv(this.addr,t)}function Hp(r,e){let t=Yr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Wp(r,e){let t=Yr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function $p(r,e){let t=Yr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Xp(r,e){r.uniform1iv(this.addr,e)}function jp(r,e){r.uniform2iv(this.addr,e)}function qp(r,e){r.uniform3iv(this.addr,e)}function Yp(r,e){r.uniform4iv(this.addr,e)}function Zp(r,e){r.uniform1uiv(this.addr,e)}function Jp(r,e){r.uniform2uiv(this.addr,e)}function Kp(r,e){r.uniform3uiv(this.addr,e)}function Qp(r,e){r.uniform4uiv(this.addr,e)}function em(r,e,t){let n=this.cache,i=e.length,s=Ho(t,i);Bt(n,s)||(r.uniform1iv(this.addr,s),zt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||rd,s[a])}function tm(r,e,t){let n=this.cache,i=e.length,s=Ho(t,i);Bt(n,s)||(r.uniform1iv(this.addr,s),zt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||ad,s[a])}function nm(r,e,t){let n=this.cache,i=e.length,s=Ho(t,i);Bt(n,s)||(r.uniform1iv(this.addr,s),zt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||od,s[a])}function im(r,e,t){let n=this.cache,i=e.length,s=Ho(t,i);Bt(n,s)||(r.uniform1iv(this.addr,s),zt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||sd,s[a])}var Bc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(i){switch(i){case 5126:return yp;case 35664:return Mp;case 35665:return Sp;case 35666:return bp;case 35674:return wp;case 35675:return Tp;case 35676:return Ep;case 5124:case 35670:return Ap;case 35667:case 35671:return Cp;case 35668:case 35672:return Rp;case 35669:case 35673:return Pp;case 5125:return Ip;case 36294:return Lp;case 36295:return Dp;case 36296:return Up;case 35678:case 36198:case 36298:case 36306:case 35682:return Np;case 35679:case 36299:case 36307:return Fp;case 35680:case 36300:case 36308:case 36293:return Op;case 36289:case 36303:case 36311:case 36292:return Bp}})(t.type)}},zc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(i){switch(i){case 5126:return zp;case 35664:return kp;case 35665:return Gp;case 35666:return Vp;case 35674:return Hp;case 35675:return Wp;case 35676:return $p;case 5124:case 35670:return Xp;case 35667:case 35671:return jp;case 35668:case 35672:return qp;case 35669:case 35673:return Yp;case 5125:return Zp;case 36294:return Jp;case 36295:return Kp;case 36296:return Qp;case 35678:case 36198:case 36298:case 36306:case 35682:return em;case 35679:case 36299:case 36307:return tm;case 35680:case 36300:case 36308:case 36293:return nm;case 36289:case 36303:case 36311:case 36292:return im}})(t.type)}},kc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},Oc=/(\w+)(\])?(\[|\.)?/g;function Xu(r,e){r.seq.push(e),r.map[e.id]=e}function rm(r,e,t){let n=r.name,i=n.length;for(Oc.lastIndex=0;;){let s=Oc.exec(n),a=Oc.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===i){Xu(t,c===void 0?new Bc(o,r,e):new zc(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new kc(o),Xu(t,h)),t=h}}}var jr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i);rm(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function ju(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var sm=0,qu=new it;function Yu(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+(function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let f=p+1;h.push(`${f===l?">":" "} ${f}: ${c[p]}`)}return h.join(`
`)})(r.getShaderSource(e),a)}return i}function am(r,e){let t=(function(n){ut._getMatrix(qu,ut.workingColorSpace,n);let i=`mat3( ${qu.elements.map(s=>s.toFixed(4))} )`;switch(ut.getTransfer(n)){case ps:return[i,"LinearTransferOETF"];case ft:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[i,"LinearTransferOETF"]}})(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function om(r,e){let t;switch(e){case nu:t="Linear";break;case iu:t="Reinhard";break;case ru:t="Cineon";break;case su:t="ACESFilmic";break;case ou:t="AgX";break;case Eo:t="Neutral";break;case au:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Go=new R;function lm(){return ut.getLuminanceCoefficients(Go),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Go.x.toFixed(4)}, ${Go.y.toFixed(4)}, ${Go.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hs(r){return r!==""}function Zu(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ju(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var cm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gc(r){return r.replace(cm,um)}var hm=new Map;function um(r,e){let t=rt[e];if(t===void 0){let n=hm.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return Gc(t)}var dm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ku(r){return r.replace(dm,pm)}function pm(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Qu(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function mm(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(O){let I="SHADOWMAP_TYPE_BASIC";return O.shadowMapType===Vl?I="SHADOWMAP_TYPE_PCF":O.shadowMapType===Lh?I="SHADOWMAP_TYPE_PCF_SOFT":O.shadowMapType===Vn&&(I="SHADOWMAP_TYPE_VSM"),I})(t),c=(function(O){let I="ENVMAP_TYPE_CUBE";if(O.envMap)switch(O.envMapMode){case Vr:case Zi:I="ENVMAP_TYPE_CUBE";break;case Bs:I="ENVMAP_TYPE_CUBE_UV"}return I})(t),h=(function(O){let I="ENVMAP_MODE_REFLECTION";return O.envMap&&O.envMapMode===Zi&&(I="ENVMAP_MODE_REFRACTION"),I})(t),u=(function(O){let I="ENVMAP_BLENDING_NONE";if(O.envMap)switch(O.combine){case Qh:I="ENVMAP_BLENDING_MULTIPLY";break;case eu:I="ENVMAP_BLENDING_MIX";break;case tu:I="ENVMAP_BLENDING_ADD"}return I})(t),d=(function(O){let I=O.envMapCubeUVHeight;if(I===null)return null;let V=Math.log2(I)-2,D=1/I;return{texelWidth:1/(3*Math.max(Math.pow(2,V),112)),texelHeight:D,maxMip:V}})(t),p=(function(O){return[O.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",O.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hs).join(`
`)})(t),f=(function(O){let I=[];for(let V in O){let D=O[V];D!==!1&&I.push("#define "+V+" "+D)}return I.join(`
`)})(s),x=i.createProgram(),m,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Hs).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Hs).join(`
`),g.length>0&&(g+=`
`)):(m=[Qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),g=[Qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==di?"#define TONE_MAPPING":"",t.toneMapping!==di?rt.tonemapping_pars_fragment:"",t.toneMapping!==di?om("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,am("linearToOutputTexel",t.outputColorSpace),lm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hs).join(`
`)),a=Gc(a),a=Zu(a,t),a=Ju(a,t),o=Gc(o),o=Zu(o,t),o=Ju(o,t),a=Ku(a),o=Ku(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let _=v+m+a,y=v+g+o,A=ju(i,i.VERTEX_SHADER,_),w=ju(i,i.FRAGMENT_SHADER,y);function L(O){if(r.debug.checkShaderErrors){let I=i.getProgramInfoLog(x).trim(),V=i.getShaderInfoLog(A).trim(),D=i.getShaderInfoLog(w).trim(),Y=!0,q=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,x,A,w);else{let ee=Yu(i,A,"vertex"),Z=Yu(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+I+`
`+ee+`
`+Z)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):V!==""&&D!==""||(q=!1);q&&(O.diagnostics={runnable:Y,programLog:I,vertexShader:{log:V,prefix:m},fragmentShader:{log:D,prefix:g}})}i.deleteShader(A),i.deleteShader(w),B=new jr(i,x),N=(function(I,V){let D={},Y=I.getProgramParameter(V,I.ACTIVE_ATTRIBUTES);for(let q=0;q<Y;q++){let ee=I.getActiveAttrib(V,q),Z=ee.name,xe=1;ee.type===I.FLOAT_MAT2&&(xe=2),ee.type===I.FLOAT_MAT3&&(xe=3),ee.type===I.FLOAT_MAT4&&(xe=4),D[Z]={type:ee.type,location:I.getAttribLocation(V,Z),locationSize:xe}}return D})(i,x)}let B,N;i.attachShader(x,A),i.attachShader(x,w),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x),this.getUniforms=function(){return B===void 0&&L(this),B},this.getAttributes=function(){return N===void 0&&L(this),N};let G=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=i.getProgramParameter(x,37297)),G},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sm++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=w,this}var fm=0,Vc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Hc(e),t.set(e,n)),n}},Hc=class{constructor(e){this.id=fm++,this.code=e,this.usedTimes=0}};function gm(r,e,t,n,i,s,a){let o=new gs,l=new Vc,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,p=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(m){return c.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,g,v,_,y){let A=_.fog,w=y.geometry,L=m.isMeshStandardMaterial?_.environment:null,B=(m.isMeshStandardMaterial?t:e).get(m.envMap||L),N=B&&B.mapping===Bs?B.image.height:null,G=f[m.type];m.precision!==null&&(p=i.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let O=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,I=O!==void 0?O.length:0,V,D,Y,q,ee=0;if(w.morphAttributes.position!==void 0&&(ee=1),w.morphAttributes.normal!==void 0&&(ee=2),w.morphAttributes.color!==void 0&&(ee=3),G){let ye=$n[G];V=ye.vertexShader,D=ye.fragmentShader}else V=m.vertexShader,D=m.fragmentShader,l.update(m),Y=l.getVertexShaderID(m),q=l.getFragmentShaderID(m);let Z=r.getRenderTarget(),xe=r.state.buffers.depth.getReversed(),Ce=y.isInstancedMesh===!0,H=y.isBatchedMesh===!0,X=!!m.map,le=!!m.matcap,Te=!!B,me=!!m.aoMap,he=!!m.lightMap,ze=!!m.bumpMap,P=!!m.normalMap,b=!!m.displacementMap,k=!!m.emissiveMap,z=!!m.metalnessMap,M=!!m.roughnessMap,C=m.anisotropy>0,U=m.clearcoat>0,F=m.dispersion>0,$=m.iridescence>0,K=m.sheen>0,W=m.transmission>0,oe=C&&!!m.anisotropyMap,Re=U&&!!m.clearcoatMap,ue=U&&!!m.clearcoatNormalMap,ie=U&&!!m.clearcoatRoughnessMap,ne=$&&!!m.iridescenceMap,se=$&&!!m.iridescenceThicknessMap,ge=K&&!!m.sheenColorMap,Ie=K&&!!m.sheenRoughnessMap,de=!!m.specularMap,re=!!m.specularColorMap,ve=!!m.specularIntensityMap,Ee=W&&!!m.transmissionMap,Ve=W&&!!m.thicknessMap,be=!!m.gradientMap,He=!!m.alphaMap,Ge=m.alphaTest>0,ot=!!m.alphaHash,dt=!!m.extensions,lt=di;m.toneMapped&&(Z!==null&&Z.isXRRenderTarget!==!0||(lt=r.toneMapping));let S={shaderID:G,shaderType:m.type,shaderName:m.name,vertexShader:V,fragmentShader:D,defines:m.defines,customVertexShaderID:Y,customFragmentShaderID:q,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:H,batchingColor:H&&y._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&y.instanceColor!==null,instancingMorph:Ce&&y.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?r.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Vi,alphaToCoverage:!!m.alphaToCoverage,map:X,matcap:le,envMap:Te,envMapMode:Te&&B.mapping,envMapCubeUVHeight:N,aoMap:me,lightMap:he,bumpMap:ze,normalMap:P,displacementMap:d&&b,emissiveMap:k,normalMapObjectSpace:P&&m.normalMapType===fu,normalMapTangentSpace:P&&m.normalMapType===mu,metalnessMap:z,roughnessMap:M,anisotropy:C,anisotropyMap:oe,clearcoat:U,clearcoatMap:Re,clearcoatNormalMap:ue,clearcoatRoughnessMap:ie,dispersion:F,iridescence:$,iridescenceMap:ne,iridescenceThicknessMap:se,sheen:K,sheenColorMap:ge,sheenRoughnessMap:Ie,specularMap:de,specularColorMap:re,specularIntensityMap:ve,transmission:W,transmissionMap:Ee,thicknessMap:Ve,gradientMap:be,opaque:m.transparent===!1&&m.blending===Fs&&m.alphaToCoverage===!1,alphaMap:He,alphaTest:Ge,alphaHash:ot,combine:m.combine,mapUv:X&&x(m.map.channel),aoMapUv:me&&x(m.aoMap.channel),lightMapUv:he&&x(m.lightMap.channel),bumpMapUv:ze&&x(m.bumpMap.channel),normalMapUv:P&&x(m.normalMap.channel),displacementMapUv:b&&x(m.displacementMap.channel),emissiveMapUv:k&&x(m.emissiveMap.channel),metalnessMapUv:z&&x(m.metalnessMap.channel),roughnessMapUv:M&&x(m.roughnessMap.channel),anisotropyMapUv:oe&&x(m.anisotropyMap.channel),clearcoatMapUv:Re&&x(m.clearcoatMap.channel),clearcoatNormalMapUv:ue&&x(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&x(m.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&x(m.iridescenceMap.channel),iridescenceThicknessMapUv:se&&x(m.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&x(m.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&x(m.sheenRoughnessMap.channel),specularMapUv:de&&x(m.specularMap.channel),specularColorMapUv:re&&x(m.specularColorMap.channel),specularIntensityMapUv:ve&&x(m.specularIntensityMap.channel),transmissionMapUv:Ee&&x(m.transmissionMap.channel),thicknessMapUv:Ve&&x(m.thicknessMap.channel),alphaMapUv:He&&x(m.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(P||C),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,pointsUvs:y.isPoints===!0&&!!w.attributes.uv&&(X||He),fog:!!A,useFog:m.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:m.flatShading===!0&&m.wireframe===!1,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:xe,skinning:y.isSkinnedMesh===!0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:ee,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:r.shadowMap.enabled&&v.length>0,shadowMapType:r.shadowMap.type,toneMapping:lt,decodeVideoTexture:X&&m.map.isVideoTexture===!0&&ut.getTransfer(m.map.colorSpace)===ft,decodeVideoTextureEmissive:k&&m.emissiveMap.isVideoTexture===!0&&ut.getTransfer(m.emissiveMap.colorSpace)===ft,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===Ot,flipSided:m.side===Xt,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:dt&&m.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&m.extensions.multiDraw===!0||H)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return S.vertexUv1s=c.has(1),S.vertexUv2s=c.has(2),S.vertexUv3s=c.has(3),c.clear(),S},getProgramCacheKey:function(m){let g=[];if(m.shaderID?g.push(m.shaderID):(g.push(m.customVertexShaderID),g.push(m.customFragmentShaderID)),m.defines!==void 0)for(let v in m.defines)g.push(v),g.push(m.defines[v]);return m.isRawShaderMaterial===!1&&((function(v,_){v.push(_.precision),v.push(_.outputColorSpace),v.push(_.envMapMode),v.push(_.envMapCubeUVHeight),v.push(_.mapUv),v.push(_.alphaMapUv),v.push(_.lightMapUv),v.push(_.aoMapUv),v.push(_.bumpMapUv),v.push(_.normalMapUv),v.push(_.displacementMapUv),v.push(_.emissiveMapUv),v.push(_.metalnessMapUv),v.push(_.roughnessMapUv),v.push(_.anisotropyMapUv),v.push(_.clearcoatMapUv),v.push(_.clearcoatNormalMapUv),v.push(_.clearcoatRoughnessMapUv),v.push(_.iridescenceMapUv),v.push(_.iridescenceThicknessMapUv),v.push(_.sheenColorMapUv),v.push(_.sheenRoughnessMapUv),v.push(_.specularMapUv),v.push(_.specularColorMapUv),v.push(_.specularIntensityMapUv),v.push(_.transmissionMapUv),v.push(_.thicknessMapUv),v.push(_.combine),v.push(_.fogExp2),v.push(_.sizeAttenuation),v.push(_.morphTargetsCount),v.push(_.morphAttributeCount),v.push(_.numDirLights),v.push(_.numPointLights),v.push(_.numSpotLights),v.push(_.numSpotLightMaps),v.push(_.numHemiLights),v.push(_.numRectAreaLights),v.push(_.numDirLightShadows),v.push(_.numPointLightShadows),v.push(_.numSpotLightShadows),v.push(_.numSpotLightShadowsWithMaps),v.push(_.numLightProbes),v.push(_.shadowMapType),v.push(_.toneMapping),v.push(_.numClippingPlanes),v.push(_.numClipIntersection),v.push(_.depthPacking)})(g,m),(function(v,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),_.gradientMap&&o.enable(22),v.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),v.push(o.mask)})(g,m),g.push(r.outputColorSpace)),g.push(m.customProgramCacheKey),g.join()},getUniforms:function(m){let g=f[m.type],v;if(g){let _=$n[g];v=Cu.clone(_.uniforms)}else v=m.uniforms;return v},acquireProgram:function(m,g){let v;for(let _=0,y=h.length;_<y;_++){let A=h[_];if(A.cacheKey===g){v=A,++v.usedTimes;break}}return v===void 0&&(v=new mm(r,g,m,s),h.push(v)),v},releaseProgram:function(m){if(--m.usedTimes===0){let g=h.indexOf(m);h[g]=h[h.length-1],h.pop(),m.destroy()}},releaseShaderCache:function(m){l.remove(m)},programs:h,dispose:function(){l.dispose()}}}function vm(){let r=new WeakMap;return{has:function(e){return r.has(e)},get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,n){r.get(e)[t]=n},dispose:function(){r=new WeakMap}}}function _m(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ed(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function td(){let r=[],e=0,t=[],n=[],i=[];function s(a,o,l,c,h,u){let d=r[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:u},r[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=c,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:i,init:function(){e=0,t.length=0,n.length=0,i.length=0},push:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.push(d):l.transparent===!0?i.push(d):t.push(d)},unshift:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.unshift(d):l.transparent===!0?i.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=r.length;a<o;a++){let l=r[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||_m),n.length>1&&n.sort(o||ed),i.length>1&&i.sort(o||ed)}}}function xm(){let r=new WeakMap;return{get:function(e,t){let n=r.get(e),i;return n===void 0?(i=new td,r.set(e,[i])):t>=n.length?(i=new td,n.push(i)):i=n[t],i},dispose:function(){r=new WeakMap}}}function ym(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Ue};break;case"SpotLight":t={position:new R,direction:new R,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new R,halfWidth:new R,halfHeight:new R}}return r[e.id]=t,t}}}var Mm=0;function Sm(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function bm(r){let e=new ym,t=(function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}})(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new R);let i=new R,s=new nt,a=new nt;return{setup:function(o){let l=0,c=0,h=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let u=0,d=0,p=0,f=0,x=0,m=0,g=0,v=0,_=0,y=0,A=0;o.sort(Sm);for(let L=0,B=o.length;L<B;L++){let N=o[L],G=N.color,O=N.intensity,I=N.distance,V=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)l+=G.r*O,c+=G.g*O,h+=G.b*O;else if(N.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(N.sh.coefficients[D],O);A++}else if(N.isDirectionalLight){let D=e.get(N);if(D.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let Y=N.shadow,q=t.get(N);q.shadowIntensity=Y.intensity,q.shadowBias=Y.bias,q.shadowNormalBias=Y.normalBias,q.shadowRadius=Y.radius,q.shadowMapSize=Y.mapSize,n.directionalShadow[u]=q,n.directionalShadowMap[u]=V,n.directionalShadowMatrix[u]=N.shadow.matrix,m++}n.directional[u]=D,u++}else if(N.isSpotLight){let D=e.get(N);D.position.setFromMatrixPosition(N.matrixWorld),D.color.copy(G).multiplyScalar(O),D.distance=I,D.coneCos=Math.cos(N.angle),D.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),D.decay=N.decay,n.spot[p]=D;let Y=N.shadow;if(N.map&&(n.spotLightMap[_]=N.map,_++,Y.updateMatrices(N),N.castShadow&&y++),n.spotLightMatrix[p]=Y.matrix,N.castShadow){let q=t.get(N);q.shadowIntensity=Y.intensity,q.shadowBias=Y.bias,q.shadowNormalBias=Y.normalBias,q.shadowRadius=Y.radius,q.shadowMapSize=Y.mapSize,n.spotShadow[p]=q,n.spotShadowMap[p]=V,v++}p++}else if(N.isRectAreaLight){let D=e.get(N);D.color.copy(G).multiplyScalar(O),D.halfWidth.set(.5*N.width,0,0),D.halfHeight.set(0,.5*N.height,0),n.rectArea[f]=D,f++}else if(N.isPointLight){let D=e.get(N);if(D.color.copy(N.color).multiplyScalar(N.intensity),D.distance=N.distance,D.decay=N.decay,N.castShadow){let Y=N.shadow,q=t.get(N);q.shadowIntensity=Y.intensity,q.shadowBias=Y.bias,q.shadowNormalBias=Y.normalBias,q.shadowRadius=Y.radius,q.shadowMapSize=Y.mapSize,q.shadowCameraNear=Y.camera.near,q.shadowCameraFar=Y.camera.far,n.pointShadow[d]=q,n.pointShadowMap[d]=V,n.pointShadowMatrix[d]=N.shadow.matrix,g++}n.point[d]=D,d++}else if(N.isHemisphereLight){let D=e.get(N);D.skyColor.copy(N.color).multiplyScalar(O),D.groundColor.copy(N.groundColor).multiplyScalar(O),n.hemi[x]=D,x++}}f>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pe.LTC_FLOAT_1,n.rectAreaLTC2=Pe.LTC_FLOAT_2):(n.rectAreaLTC1=Pe.LTC_HALF_1,n.rectAreaLTC2=Pe.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=c,n.ambient[2]=h;let w=n.hash;w.directionalLength===u&&w.pointLength===d&&w.spotLength===p&&w.rectAreaLength===f&&w.hemiLength===x&&w.numDirectionalShadows===m&&w.numPointShadows===g&&w.numSpotShadows===v&&w.numSpotMaps===_&&w.numLightProbes===A||(n.directional.length=u,n.spot.length=p,n.rectArea.length=f,n.point.length=d,n.hemi.length=x,n.directionalShadow.length=m,n.directionalShadowMap.length=m,n.pointShadow.length=g,n.pointShadowMap.length=g,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=m,n.pointShadowMatrix.length=g,n.spotLightMatrix.length=v+_-y,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=A,w.directionalLength=u,w.pointLength=d,w.spotLength=p,w.rectAreaLength=f,w.hemiLength=x,w.numDirectionalShadows=m,w.numPointShadows=g,w.numSpotShadows=v,w.numSpotMaps=_,w.numLightProbes=A,n.version=Mm++)},setupView:function(o,l){let c=0,h=0,u=0,d=0,p=0,f=l.matrixWorldInverse;for(let x=0,m=o.length;x<m;x++){let g=o[x];if(g.isDirectionalLight){let v=n.directional[c];v.direction.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(f),c++}else if(g.isSpotLight){let v=n.spot[u];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(f),v.direction.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(g.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(f),u++}else if(g.isRectAreaLight){let v=n.rectArea[d];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(f),a.identity(),s.copy(g.matrixWorld),s.premultiply(f),a.extractRotation(s),v.halfWidth.set(.5*g.width,0,0),v.halfHeight.set(0,.5*g.height,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),d++}else if(g.isPointLight){let v=n.point[h];v.position.setFromMatrixPosition(g.matrixWorld),v.position.applyMatrix4(f),h++}else if(g.isHemisphereLight){let v=n.hemi[p];v.direction.setFromMatrixPosition(g.matrixWorld),v.direction.transformDirection(f),p++}}},state:n}}function nd(r){let e=new bm(r),t=[],n=[],i={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){i.camera=s,t.length=0,n.length=0},state:i,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){n.push(s)}}}function wm(r){let e=new WeakMap;return{get:function(t,n=0){let i=e.get(t),s;return i===void 0?(s=new nd(r),e.set(t,[s])):n>=i.length?(s=new nd(r),i.push(s)):s=i[n],s},dispose:function(){e=new WeakMap}}}function Tm(r,e,t){let n=new Ai,i=new _e,s=new _e,a=new Tt,o=new ao({depthPacking:pu}),l=new oo,c={},h=t.maxTextureSize,u={[Pi]:Xt,[Xt]:Pi,[Ot]:Ot},d=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new Et;f.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new qe(f,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vl;let g=this.type;function v(w,L){let B=e.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new kn(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(L,null,B,d,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(L,null,B,p,x,null)}function _(w,L,B,N){let G=null,O=B.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(O!==void 0)G=O;else if(G=B.isPointLight===!0?l:o,r.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let I=G.uuid,V=L.uuid,D=c[I];D===void 0&&(D={},c[I]=D);let Y=D[V];Y===void 0&&(Y=G.clone(),D[V]=Y,L.addEventListener("dispose",A)),G=Y}return G.visible=L.visible,G.wireframe=L.wireframe,G.side=N===Vn?L.shadowSide!==null?L.shadowSide:L.side:L.shadowSide!==null?L.shadowSide:u[L.side],G.alphaMap=L.alphaMap,G.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,G.map=L.map,G.clipShadows=L.clipShadows,G.clippingPlanes=L.clippingPlanes,G.clipIntersection=L.clipIntersection,G.displacementMap=L.displacementMap,G.displacementScale=L.displacementScale,G.displacementBias=L.displacementBias,G.wireframeLinewidth=L.wireframeLinewidth,G.linewidth=L.linewidth,B.isPointLight===!0&&G.isMeshDistanceMaterial===!0&&(r.properties.get(G).light=B),G}function y(w,L,B,N,G){if(w.visible===!1)return;if(w.layers.test(L.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&G===Vn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld);let I=e.update(w),V=w.material;if(Array.isArray(V)){let D=I.groups;for(let Y=0,q=D.length;Y<q;Y++){let ee=D[Y],Z=V[ee.materialIndex];if(Z&&Z.visible){let xe=_(w,Z,N,G);w.onBeforeShadow(r,w,L,B,I,xe,ee),r.renderBufferDirect(B,null,I,xe,w,ee),w.onAfterShadow(r,w,L,B,I,xe,ee)}}}else if(V.visible){let D=_(w,V,N,G);w.onBeforeShadow(r,w,L,B,I,D,null),r.renderBufferDirect(B,null,I,D,w,null),w.onAfterShadow(r,w,L,B,I,D,null)}}let O=w.children;for(let I=0,V=O.length;I<V;I++)y(O[I],L,B,N,G)}function A(w){w.target.removeEventListener("dispose",A);for(let L in c){let B=c[L],N=w.target.uuid;N in B&&(B[N].dispose(),delete B[N])}}this.render=function(w,L,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let N=r.getRenderTarget(),G=r.getActiveCubeFace(),O=r.getActiveMipmapLevel(),I=r.state;I.setBlending(Ii),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let V=g!==Vn&&this.type===Vn,D=g===Vn&&this.type!==Vn;for(let Y=0,q=w.length;Y<q;Y++){let ee=w[Y],Z=ee.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;i.copy(Z.mapSize);let xe=Z.getFrameExtents();if(i.multiply(xe),s.copy(Z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/xe.x),i.x=s.x*xe.x,Z.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/xe.y),i.y=s.y*xe.y,Z.mapSize.y=s.y)),Z.map===null||V===!0||D===!0){let H=this.type!==Vn?{minFilter:Bn,magFilter:Bn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new kn(i.x,i.y,H),Z.map.texture.name=ee.name+".shadowMap",Z.camera.updateProjectionMatrix()}r.setRenderTarget(Z.map),r.clear();let Ce=Z.getViewportCount();for(let H=0;H<Ce;H++){let X=Z.getViewport(H);a.set(s.x*X.x,s.y*X.y,s.x*X.z,s.y*X.w),I.viewport(a),Z.updateMatrices(ee,H),n=Z.getFrustum(),y(L,B,Z.camera,ee,this.type)}Z.isPointLightShadow!==!0&&this.type===Vn&&v(Z,B),Z.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(N,G,O)}}var Em={[xo]:yo,[Mo]:wo,[So]:To,[Os]:bo,[yo]:xo,[wo]:Mo,[To]:So,[bo]:Os};function Am(r,e){let t=new function(){let M=!1,C=new Tt,U=null,F=new Tt(0,0,0,0);return{setMask:function($){U===$||M||(r.colorMask($,$,$,$),U=$)},setLocked:function($){M=$},setClear:function($,K,W,oe,Re){Re===!0&&($*=oe,K*=oe,W*=oe),C.set($,K,W,oe),F.equals(C)===!1&&(r.clearColor($,K,W,oe),F.copy(C))},reset:function(){M=!1,U=null,F.set(-1,0,0,0)}}},n=new function(){let M=!1,C=!1,U=null,F=null,$=null;return{setReversed:function(K){if(C!==K){let W=e.get("EXT_clip_control");K?W.clipControlEXT(W.LOWER_LEFT_EXT,W.ZERO_TO_ONE_EXT):W.clipControlEXT(W.LOWER_LEFT_EXT,W.NEGATIVE_ONE_TO_ONE_EXT),C=K;let oe=$;$=null,this.setClear(oe)}},getReversed:function(){return C},setTest:function(K){K?Te(r.DEPTH_TEST):me(r.DEPTH_TEST)},setMask:function(K){U===K||M||(r.depthMask(K),U=K)},setFunc:function(K){if(C&&(K=Em[K]),F!==K){switch(K){case xo:r.depthFunc(r.NEVER);break;case yo:r.depthFunc(r.ALWAYS);break;case Mo:r.depthFunc(r.LESS);break;case Os:r.depthFunc(r.LEQUAL);break;case So:r.depthFunc(r.EQUAL);break;case bo:r.depthFunc(r.GEQUAL);break;case wo:r.depthFunc(r.GREATER);break;case To:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}F=K}},setLocked:function(K){M=K},setClear:function(K){$!==K&&(C&&(K=1-K),r.clearDepth(K),$=K)},reset:function(){M=!1,U=null,F=null,$=null,C=!1}}},i=new function(){let M=!1,C=null,U=null,F=null,$=null,K=null,W=null,oe=null,Re=null;return{setTest:function(ue){M||(ue?Te(r.STENCIL_TEST):me(r.STENCIL_TEST))},setMask:function(ue){C===ue||M||(r.stencilMask(ue),C=ue)},setFunc:function(ue,ie,ne){U===ue&&F===ie&&$===ne||(r.stencilFunc(ue,ie,ne),U=ue,F=ie,$=ne)},setOp:function(ue,ie,ne){K===ue&&W===ie&&oe===ne||(r.stencilOp(ue,ie,ne),K=ue,W=ie,oe=ne)},setLocked:function(ue){M=ue},setClear:function(ue){Re!==ue&&(r.clearStencil(ue),Re=ue)},reset:function(){M=!1,C=null,U=null,F=null,$=null,K=null,W=null,oe=null,Re=null}}},s=new WeakMap,a=new WeakMap,o={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,f=null,x=null,m=null,g=null,v=null,_=null,y=new Ue(0,0,0),A=0,w=!1,L=null,B=null,N=null,G=null,O=null,I=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,D=0,Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(Y)[1]),V=D>=1):Y.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),V=D>=2);let q=null,ee={},Z=r.getParameter(r.SCISSOR_BOX),xe=r.getParameter(r.VIEWPORT),Ce=new Tt().fromArray(Z),H=new Tt().fromArray(xe);function X(M,C,U,F){let $=new Uint8Array(4),K=r.createTexture();r.bindTexture(M,K),r.texParameteri(M,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(M,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let W=0;W<U;W++)M===r.TEXTURE_3D||M===r.TEXTURE_2D_ARRAY?r.texImage3D(C,0,r.RGBA,1,1,F,0,r.RGBA,r.UNSIGNED_BYTE,$):r.texImage2D(C+W,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,$);return K}let le={};function Te(M){o[M]!==!0&&(r.enable(M),o[M]=!0)}function me(M){o[M]!==!1&&(r.disable(M),o[M]=!1)}le[r.TEXTURE_2D]=X(r.TEXTURE_2D,r.TEXTURE_2D,1),le[r.TEXTURE_CUBE_MAP]=X(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[r.TEXTURE_2D_ARRAY]=X(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),le[r.TEXTURE_3D]=X(r.TEXTURE_3D,r.TEXTURE_3D,1,1),t.setClear(0,0,0,1),n.setClear(1),i.setClear(0),Te(r.DEPTH_TEST),n.setFunc(Os),b(!1),k(Gl),Te(r.CULL_FACE),P(Ii);let he={[Gr]:r.FUNC_ADD,[Uh]:r.FUNC_SUBTRACT,[Nh]:r.FUNC_REVERSE_SUBTRACT};he[Fh]=r.MIN,he[Oh]=r.MAX;let ze={[Bh]:r.ZERO,[zh]:r.ONE,[kh]:r.SRC_COLOR,[Vh]:r.SRC_ALPHA,[qh]:r.SRC_ALPHA_SATURATE,[Xh]:r.DST_COLOR,[Wh]:r.DST_ALPHA,[Gh]:r.ONE_MINUS_SRC_COLOR,[Hh]:r.ONE_MINUS_SRC_ALPHA,[jh]:r.ONE_MINUS_DST_COLOR,[$h]:r.ONE_MINUS_DST_ALPHA,[Yh]:r.CONSTANT_COLOR,[Zh]:r.ONE_MINUS_CONSTANT_COLOR,[Jh]:r.CONSTANT_ALPHA,[Kh]:r.ONE_MINUS_CONSTANT_ALPHA};function P(M,C,U,F,$,K,W,oe,Re,ue){if(M!==Ii){if(d===!1&&(Te(r.BLEND),d=!0),M===Dh)$=$||C,K=K||U,W=W||F,C===f&&$===g||(r.blendEquationSeparate(he[C],he[$]),f=C,g=$),U===x&&F===m&&K===v&&W===_||(r.blendFuncSeparate(ze[U],ze[F],ze[K],ze[W]),x=U,m=F,v=K,_=W),oe.equals(y)!==!1&&Re===A||(r.blendColor(oe.r,oe.g,oe.b,Re),y.copy(oe),A=Re),p=M,w=!1;else if(M!==p||ue!==w){if(f===Gr&&g===Gr||(r.blendEquation(r.FUNC_ADD),f=Gr,g=Gr),ue)switch(M){case Fs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Hl:r.blendFunc(r.ONE,r.ONE);break;case Wl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case $l:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",M)}else switch(M){case Fs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Hl:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Wl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $l:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",M)}x=null,m=null,v=null,_=null,y.set(0,0,0),A=0,p=M,w=ue}}else d===!0&&(me(r.BLEND),d=!1)}function b(M){L!==M&&(M?r.frontFace(r.CW):r.frontFace(r.CCW),L=M)}function k(M){M!==Ph?(Te(r.CULL_FACE),M!==B&&(M===Gl?r.cullFace(r.BACK):M===Ih?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):me(r.CULL_FACE),B=M}function z(M,C,U){M?(Te(r.POLYGON_OFFSET_FILL),G===C&&O===U||(r.polygonOffset(C,U),G=C,O=U)):me(r.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:n,stencil:i},enable:Te,disable:me,bindFramebuffer:function(M,C){return l[M]!==C&&(r.bindFramebuffer(M,C),l[M]=C,M===r.DRAW_FRAMEBUFFER&&(l[r.FRAMEBUFFER]=C),M===r.FRAMEBUFFER&&(l[r.DRAW_FRAMEBUFFER]=C),!0)},drawBuffers:function(M,C){let U=h,F=!1;if(M){U=c.get(C),U===void 0&&(U=[],c.set(C,U));let $=M.textures;if(U.length!==$.length||U[0]!==r.COLOR_ATTACHMENT0){for(let K=0,W=$.length;K<W;K++)U[K]=r.COLOR_ATTACHMENT0+K;U.length=$.length,F=!0}}else U[0]!==r.BACK&&(U[0]=r.BACK,F=!0);F&&r.drawBuffers(U)},useProgram:function(M){return u!==M&&(r.useProgram(M),u=M,!0)},setBlending:P,setMaterial:function(M,C){M.side===Ot?me(r.CULL_FACE):Te(r.CULL_FACE);let U=M.side===Xt;C&&(U=!U),b(U),M.blending===Fs&&M.transparent===!1?P(Ii):P(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),n.setFunc(M.depthFunc),n.setTest(M.depthTest),n.setMask(M.depthWrite),t.setMask(M.colorWrite);let F=M.stencilWrite;i.setTest(F),F&&(i.setMask(M.stencilWriteMask),i.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),i.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),z(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?Te(r.SAMPLE_ALPHA_TO_COVERAGE):me(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:b,setCullFace:k,setLineWidth:function(M){M!==N&&(V&&r.lineWidth(M),N=M)},setPolygonOffset:z,setScissorTest:function(M){M?Te(r.SCISSOR_TEST):me(r.SCISSOR_TEST)},activeTexture:function(M){M===void 0&&(M=r.TEXTURE0+I-1),q!==M&&(r.activeTexture(M),q=M)},bindTexture:function(M,C,U){U===void 0&&(U=q===null?r.TEXTURE0+I-1:q);let F=ee[U];F===void 0&&(F={type:void 0,texture:void 0},ee[U]=F),F.type===M&&F.texture===C||(q!==U&&(r.activeTexture(U),q=U),r.bindTexture(M,C||le[M]),F.type=M,F.texture=C)},unbindTexture:function(){let M=ee[q];M!==void 0&&M.type!==void 0&&(r.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexImage3D:function(){try{r.compressedTexImage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texImage2D:function(){try{r.texImage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texImage3D:function(){try{r.texImage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},updateUBOMapping:function(M,C){let U=a.get(C);U===void 0&&(U=new WeakMap,a.set(C,U));let F=U.get(M);F===void 0&&(F=r.getUniformBlockIndex(C,M.name),U.set(M,F))},uniformBlockBinding:function(M,C){let U=a.get(C).get(M);s.get(C)!==U&&(r.uniformBlockBinding(C,U,M.__bindingPointIndex),s.set(C,U))},texStorage2D:function(){try{r.texStorage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texStorage3D:function(){try{r.texStorage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texSubImage2D:function(){try{r.texSubImage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texSubImage3D:function(){try{r.texSubImage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},scissor:function(M){Ce.equals(M)===!1&&(r.scissor(M.x,M.y,M.z,M.w),Ce.copy(M))},viewport:function(M){H.equals(M)===!1&&(r.viewport(M.x,M.y,M.z,M.w),H.copy(M))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),n.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),o={},q=null,ee={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,f=null,x=null,m=null,g=null,v=null,_=null,y=new Ue(0,0,0),A=0,w=!1,L=null,B=null,N=null,G=null,O=null,Ce.set(0,0,r.canvas.width,r.canvas.height),H.set(0,0,r.canvas.width,r.canvas.height),t.reset(),n.reset(),i.reset()}}}function Cm(r,e,t,n,i,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new _e,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(P,b){return p?new OffscreenCanvas(P,b):Rr("canvas")}function x(P,b,k){let z=1,M=ze(P);if((M.width>k||M.height>k)&&(z=k/Math.max(M.width,M.height)),z<1){if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let C=Math.floor(z*M.width),U=Math.floor(z*M.height);u===void 0&&(u=f(C,U));let F=b?f(C,U):u;return F.width=C,F.height=U,F.getContext("2d").drawImage(P,0,0,C,U),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+C+"x"+U+")."),F}return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),P}return P}function m(P){return P.generateMipmaps}function g(P){r.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function _(P,b,k,z,M=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let C=b;if(b===r.RED&&(k===r.FLOAT&&(C=r.R32F),k===r.HALF_FLOAT&&(C=r.R16F),k===r.UNSIGNED_BYTE&&(C=r.R8)),b===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(C=r.R8UI),k===r.UNSIGNED_SHORT&&(C=r.R16UI),k===r.UNSIGNED_INT&&(C=r.R32UI),k===r.BYTE&&(C=r.R8I),k===r.SHORT&&(C=r.R16I),k===r.INT&&(C=r.R32I)),b===r.RG&&(k===r.FLOAT&&(C=r.RG32F),k===r.HALF_FLOAT&&(C=r.RG16F),k===r.UNSIGNED_BYTE&&(C=r.RG8)),b===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(C=r.RG8UI),k===r.UNSIGNED_SHORT&&(C=r.RG16UI),k===r.UNSIGNED_INT&&(C=r.RG32UI),k===r.BYTE&&(C=r.RG8I),k===r.SHORT&&(C=r.RG16I),k===r.INT&&(C=r.RG32I)),b===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(C=r.RGB8UI),k===r.UNSIGNED_SHORT&&(C=r.RGB16UI),k===r.UNSIGNED_INT&&(C=r.RGB32UI),k===r.BYTE&&(C=r.RGB8I),k===r.SHORT&&(C=r.RGB16I),k===r.INT&&(C=r.RGB32I)),b===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(C=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(C=r.RGBA16UI),k===r.UNSIGNED_INT&&(C=r.RGBA32UI),k===r.BYTE&&(C=r.RGBA8I),k===r.SHORT&&(C=r.RGBA16I),k===r.INT&&(C=r.RGBA32I)),b===r.RGB&&k===r.UNSIGNED_INT_5_9_9_9_REV&&(C=r.RGB9_E5),b===r.RGBA){let U=M?ps:ut.getTransfer(z);k===r.FLOAT&&(C=r.RGBA32F),k===r.HALF_FLOAT&&(C=r.RGBA16F),k===r.UNSIGNED_BYTE&&(C=U===ft?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(C=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(C=r.RGB5_A1)}return C!==r.R16F&&C!==r.R32F&&C!==r.RG16F&&C!==r.RG32F&&C!==r.RGBA16F&&C!==r.RGBA32F||e.get("EXT_color_buffer_float"),C}function y(P,b){let k;return P?b===null||b===Ki||b===$r?k=r.DEPTH24_STENCIL8:b===Wn?k=r.DEPTH32F_STENCIL8:b===Hr&&(k=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ki||b===$r?k=r.DEPTH_COMPONENT24:b===Wn?k=r.DEPTH_COMPONENT32F:b===Hr&&(k=r.DEPTH_COMPONENT16),k}function A(P,b){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Bn&&P.minFilter!==zn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function w(P){let b=P.target;b.removeEventListener("dispose",w),(function(k){let z=n.get(k);if(z.__webglInit===void 0)return;let M=k.source,C=d.get(M);if(C){let U=C[z.__cacheKey];U.usedTimes--,U.usedTimes===0&&B(k),Object.keys(C).length===0&&d.delete(M)}n.remove(k)})(b),b.isVideoTexture&&h.delete(b)}function L(P){let b=P.target;b.removeEventListener("dispose",L),(function(k){let z=n.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),n.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let C=0;C<6;C++){if(Array.isArray(z.__webglFramebuffer[C]))for(let U=0;U<z.__webglFramebuffer[C].length;U++)r.deleteFramebuffer(z.__webglFramebuffer[C][U]);else r.deleteFramebuffer(z.__webglFramebuffer[C]);z.__webglDepthbuffer&&r.deleteRenderbuffer(z.__webglDepthbuffer[C])}else{if(Array.isArray(z.__webglFramebuffer))for(let C=0;C<z.__webglFramebuffer.length;C++)r.deleteFramebuffer(z.__webglFramebuffer[C]);else r.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&r.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&r.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let C=0;C<z.__webglColorRenderbuffer.length;C++)z.__webglColorRenderbuffer[C]&&r.deleteRenderbuffer(z.__webglColorRenderbuffer[C]);z.__webglDepthRenderbuffer&&r.deleteRenderbuffer(z.__webglDepthRenderbuffer)}let M=k.textures;for(let C=0,U=M.length;C<U;C++){let F=n.get(M[C]);F.__webglTexture&&(r.deleteTexture(F.__webglTexture),a.memory.textures--),n.remove(M[C])}n.remove(k)})(b)}function B(P){let b=n.get(P);r.deleteTexture(b.__webglTexture);let k=P.source;delete d.get(k)[b.__cacheKey],a.memory.textures--}let N=0;function G(P,b){let k=n.get(P);if(P.isVideoTexture&&(function(z){let M=a.render.frame;h.get(z)!==M&&(h.set(z,M),z.update())})(P),P.isRenderTargetTexture===!1&&P.version>0&&k.__version!==P.version){let z=P.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(z.complete!==!1)return void ee(k,P,b);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+b)}let O={[Ar]:r.REPEAT,[Cr]:r.CLAMP_TO_EDGE,[Ia]:r.MIRRORED_REPEAT},I={[Bn]:r.NEAREST,[lu]:r.NEAREST_MIPMAP_NEAREST,[zs]:r.NEAREST_MIPMAP_LINEAR,[zn]:r.LINEAR,[Ro]:r.LINEAR_MIPMAP_NEAREST,[Ji]:r.LINEAR_MIPMAP_LINEAR},V={[gu]:r.NEVER,[Su]:r.ALWAYS,[vu]:r.LESS,[Tc]:r.LEQUAL,[_u]:r.EQUAL,[Mu]:r.GEQUAL,[xu]:r.GREATER,[yu]:r.NOTEQUAL};function D(P,b){if(b.type!==Wn||e.has("OES_texture_float_linear")!==!1||b.magFilter!==zn&&b.magFilter!==Ro&&b.magFilter!==zs&&b.magFilter!==Ji&&b.minFilter!==zn&&b.minFilter!==Ro&&b.minFilter!==zs&&b.minFilter!==Ji||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,O[b.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,O[b.wrapT]),P!==r.TEXTURE_3D&&P!==r.TEXTURE_2D_ARRAY||r.texParameteri(P,r.TEXTURE_WRAP_R,O[b.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,I[b.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,I[b.minFilter]),b.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,V[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Bn||b.minFilter!==zs&&b.minFilter!==Ji||b.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Y(P,b){let k=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",w));let z=b.source,M=d.get(z);M===void 0&&(M={},d.set(z,M));let C=(function(U){let F=[];return F.push(U.wrapS),F.push(U.wrapT),F.push(U.wrapR||0),F.push(U.magFilter),F.push(U.minFilter),F.push(U.anisotropy),F.push(U.internalFormat),F.push(U.format),F.push(U.type),F.push(U.generateMipmaps),F.push(U.premultiplyAlpha),F.push(U.flipY),F.push(U.unpackAlignment),F.push(U.colorSpace),F.join()})(b);if(C!==P.__cacheKey){M[C]===void 0&&(M[C]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,k=!0),M[C].usedTimes++;let U=M[P.__cacheKey];U!==void 0&&(M[P.__cacheKey].usedTimes--,U.usedTimes===0&&B(b)),P.__cacheKey=C,P.__webglTexture=M[C].texture}return k}function q(P,b,k){return Math.floor(Math.floor(P/k)/b)}function ee(P,b,k){let z=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(z=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(z=r.TEXTURE_3D);let M=Y(P,b),C=b.source;t.bindTexture(z,P.__webglTexture,r.TEXTURE0+k);let U=n.get(C);if(C.version!==U.__version||M===!0){t.activeTexture(r.TEXTURE0+k);let F=ut.getPrimaries(ut.workingColorSpace),$=b.colorSpace===Qi?null:ut.getPrimaries(b.colorSpace),K=b.colorSpace===Qi||F===$?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let W=x(b.image,!1,i.maxTextureSize);W=he(b,W);let oe=s.convert(b.format,b.colorSpace),Re=s.convert(b.type),ue,ie=_(b.internalFormat,oe,Re,b.colorSpace,b.isVideoTexture);D(z,b);let ne=b.mipmaps,se=b.isVideoTexture!==!0,ge=U.__version===void 0||M===!0,Ie=C.dataReady,de=A(b,W);if(b.isDepthTexture)ie=y(b.format===Gs,b.type),ge&&(se?t.texStorage2D(r.TEXTURE_2D,1,ie,W.width,W.height):t.texImage2D(r.TEXTURE_2D,0,ie,W.width,W.height,0,oe,Re,null));else if(b.isDataTexture)if(ne.length>0){se&&ge&&t.texStorage2D(r.TEXTURE_2D,de,ie,ne[0].width,ne[0].height);for(let re=0,ve=ne.length;re<ve;re++)ue=ne[re],se?Ie&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,ue.width,ue.height,oe,Re,ue.data):t.texImage2D(r.TEXTURE_2D,re,ie,ue.width,ue.height,0,oe,Re,ue.data);b.generateMipmaps=!1}else se?(ge&&t.texStorage2D(r.TEXTURE_2D,de,ie,W.width,W.height),Ie&&(function(re,ve,Ee,Ve){let be=re.updateRanges;if(be.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,ve.width,ve.height,Ee,Ve,ve.data);else{be.sort((lt,S)=>lt.start-S.start);let He=0;for(let lt=1;lt<be.length;lt++){let S=be[He],ye=be[lt],Ne=S.start+S.count,ae=q(ye.start,ve.width,4),Ae=q(S.start,ve.width,4);ye.start<=Ne+1&&ae===Ae&&q(ye.start+ye.count-1,ve.width,4)===ae?S.count=Math.max(S.count,ye.start+ye.count-S.start):(++He,be[He]=ye)}be.length=He+1;let Ge=r.getParameter(r.UNPACK_ROW_LENGTH),ot=r.getParameter(r.UNPACK_SKIP_PIXELS),dt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,ve.width);for(let lt=0,S=be.length;lt<S;lt++){let ye=be[lt],Ne=Math.floor(ye.start/4),ae=Math.ceil(ye.count/4),Ae=Ne%ve.width,pe=Math.floor(Ne/ve.width),Fe=ae;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ae),r.pixelStorei(r.UNPACK_SKIP_ROWS,pe),t.texSubImage2D(r.TEXTURE_2D,0,Ae,pe,Fe,1,Ee,Ve,ve.data)}re.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ge),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ot),r.pixelStorei(r.UNPACK_SKIP_ROWS,dt)}})(b,W,oe,Re)):t.texImage2D(r.TEXTURE_2D,0,ie,W.width,W.height,0,oe,Re,W.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){se&&ge&&t.texStorage3D(r.TEXTURE_2D_ARRAY,de,ie,ne[0].width,ne[0].height,W.depth);for(let re=0,ve=ne.length;re<ve;re++)if(ue=ne[re],b.format!==Cn)if(oe!==null)if(se){if(Ie)if(b.layerUpdates.size>0){let Ee=Ic(ue.width,ue.height,b.format,b.type);for(let Ve of b.layerUpdates){let be=ue.data.subarray(Ve*Ee/ue.data.BYTES_PER_ELEMENT,(Ve+1)*Ee/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,Ve,ue.width,ue.height,1,oe,be)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,ue.width,ue.height,W.depth,oe,ue.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,re,ie,ue.width,ue.height,W.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?Ie&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,ue.width,ue.height,W.depth,oe,Re,ue.data):t.texImage3D(r.TEXTURE_2D_ARRAY,re,ie,ue.width,ue.height,W.depth,0,oe,Re,ue.data)}else{se&&ge&&t.texStorage2D(r.TEXTURE_2D,de,ie,ne[0].width,ne[0].height);for(let re=0,ve=ne.length;re<ve;re++)ue=ne[re],b.format!==Cn?oe!==null?se?Ie&&t.compressedTexSubImage2D(r.TEXTURE_2D,re,0,0,ue.width,ue.height,oe,ue.data):t.compressedTexImage2D(r.TEXTURE_2D,re,ie,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?Ie&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,ue.width,ue.height,oe,Re,ue.data):t.texImage2D(r.TEXTURE_2D,re,ie,ue.width,ue.height,0,oe,Re,ue.data)}else if(b.isDataArrayTexture)if(se){if(ge&&t.texStorage3D(r.TEXTURE_2D_ARRAY,de,ie,W.width,W.height,W.depth),Ie)if(b.layerUpdates.size>0){let re=Ic(W.width,W.height,b.format,b.type);for(let ve of b.layerUpdates){let Ee=W.data.subarray(ve*re/W.data.BYTES_PER_ELEMENT,(ve+1)*re/W.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ve,W.width,W.height,1,oe,Re,Ee)}b.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,oe,Re,W.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ie,W.width,W.height,W.depth,0,oe,Re,W.data);else if(b.isData3DTexture)se?(ge&&t.texStorage3D(r.TEXTURE_3D,de,ie,W.width,W.height,W.depth),Ie&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,oe,Re,W.data)):t.texImage3D(r.TEXTURE_3D,0,ie,W.width,W.height,W.depth,0,oe,Re,W.data);else if(b.isFramebufferTexture){if(ge)if(se)t.texStorage2D(r.TEXTURE_2D,de,ie,W.width,W.height);else{let re=W.width,ve=W.height;for(let Ee=0;Ee<de;Ee++)t.texImage2D(r.TEXTURE_2D,Ee,ie,re,ve,0,oe,Re,null),re>>=1,ve>>=1}}else if(ne.length>0){if(se&&ge){let re=ze(ne[0]);t.texStorage2D(r.TEXTURE_2D,de,ie,re.width,re.height)}for(let re=0,ve=ne.length;re<ve;re++)ue=ne[re],se?Ie&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,oe,Re,ue):t.texImage2D(r.TEXTURE_2D,re,ie,oe,Re,ue);b.generateMipmaps=!1}else if(se){if(ge){let re=ze(W);t.texStorage2D(r.TEXTURE_2D,de,ie,re.width,re.height)}Ie&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,oe,Re,W)}else t.texImage2D(r.TEXTURE_2D,0,ie,oe,Re,W);m(b)&&g(z),U.__version=C.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function Z(P,b,k,z,M,C){let U=s.convert(k.format,k.colorSpace),F=s.convert(k.type),$=_(k.internalFormat,U,F,k.colorSpace),K=n.get(b),W=n.get(k);if(W.__renderTarget=b,!K.__hasExternalTextures){let oe=Math.max(1,b.width>>C),Re=Math.max(1,b.height>>C);M===r.TEXTURE_3D||M===r.TEXTURE_2D_ARRAY?t.texImage3D(M,C,$,oe,Re,b.depth,0,U,F,null):t.texImage2D(M,C,$,oe,Re,0,U,F,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),me(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,z,M,W.__webglTexture,0,Te(b)):(M===r.TEXTURE_2D||M>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&M<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,z,M,W.__webglTexture,C),t.bindFramebuffer(r.FRAMEBUFFER,null)}function xe(P,b,k){if(r.bindRenderbuffer(r.RENDERBUFFER,P),b.depthBuffer){let z=b.depthTexture,M=z&&z.isDepthTexture?z.type:null,C=y(b.stencilBuffer,M),U=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,F=Te(b);me(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,F,C,b.width,b.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,F,C,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,C,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,U,r.RENDERBUFFER,P)}else{let z=b.textures;for(let M=0;M<z.length;M++){let C=z[M],U=s.convert(C.format,C.colorSpace),F=s.convert(C.type),$=_(C.internalFormat,U,F,C.colorSpace),K=Te(b);k&&me(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,K,$,b.width,b.height):me(b)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,K,$,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,$,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ce(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,P),!b.depthTexture||!b.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let k=n.get(b.depthTexture);k.__renderTarget=b,k.__webglTexture&&b.depthTexture.image.width===b.width&&b.depthTexture.image.height===b.height||(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),G(b.depthTexture,0);let z=k.__webglTexture,M=Te(b);if(b.depthTexture.format===ks)me(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,z,0,M):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,z,0);else{if(b.depthTexture.format!==Gs)throw new Error("Unknown depthTexture format");me(b)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,z,0,M):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,z,0)}}function H(P){let b=n.get(P),k=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){let z=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),z){let M=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,z.removeEventListener("dispose",M)};z.addEventListener("dispose",M),b.__depthDisposeCallback=M}b.__boundDepthTexture=z}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");let z=P.texture.mipmaps;z&&z.length>0?Ce(b.__webglFramebuffer[0],P):Ce(b.__webglFramebuffer,P)}else if(k){b.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[z]),b.__webglDepthbuffer[z]===void 0)b.__webglDepthbuffer[z]=r.createRenderbuffer(),xe(b.__webglDepthbuffer[z],P,!1);else{let M=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,C=b.__webglDepthbuffer[z];r.bindRenderbuffer(r.RENDERBUFFER,C),r.framebufferRenderbuffer(r.FRAMEBUFFER,M,r.RENDERBUFFER,C)}}else{let z=P.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),xe(b.__webglDepthbuffer,P,!1);else{let M=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,C=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,C),r.framebufferRenderbuffer(r.FRAMEBUFFER,M,r.RENDERBUFFER,C)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}let X=[],le=[];function Te(P){return Math.min(i.maxSamples,P.samples)}function me(P){let b=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function he(P,b){let k=P.colorSpace,z=P.format,M=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||k!==Vi&&k!==Qi&&(ut.getTransfer(k)===ft?z===Cn&&M===Hn||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),b}function ze(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=function(){let P=N;return P>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),N+=1,P},this.resetTextureUnits=function(){N=0},this.setTexture2D=G,this.setTexture2DArray=function(P,b){let k=n.get(P);P.version>0&&k.__version!==P.version?ee(k,P,b):t.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+b)},this.setTexture3D=function(P,b){let k=n.get(P);P.version>0&&k.__version!==P.version?ee(k,P,b):t.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+b)},this.setTextureCube=function(P,b){let k=n.get(P);P.version>0&&k.__version!==P.version?(function(z,M,C){if(M.image.length!==6)return;let U=Y(z,M),F=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+C);let $=n.get(F);if(F.version!==$.__version||U===!0){t.activeTexture(r.TEXTURE0+C);let K=ut.getPrimaries(ut.workingColorSpace),W=M.colorSpace===Qi?null:ut.getPrimaries(M.colorSpace),oe=M.colorSpace===Qi||K===W?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let Re=M.isCompressedTexture||M.image[0].isCompressedTexture,ue=M.image[0]&&M.image[0].isDataTexture,ie=[];for(let be=0;be<6;be++)ie[be]=Re||ue?ue?M.image[be].image:M.image[be]:x(M.image[be],!0,i.maxCubemapSize),ie[be]=he(M,ie[be]);let ne=ie[0],se=s.convert(M.format,M.colorSpace),ge=s.convert(M.type),Ie=_(M.internalFormat,se,ge,M.colorSpace),de=M.isVideoTexture!==!0,re=$.__version===void 0||U===!0,ve=F.dataReady,Ee,Ve=A(M,ne);if(D(r.TEXTURE_CUBE_MAP,M),Re){de&&re&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ve,Ie,ne.width,ne.height);for(let be=0;be<6;be++){Ee=ie[be].mipmaps;for(let He=0;He<Ee.length;He++){let Ge=Ee[He];M.format!==Cn?se!==null?de?ve&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,He,0,0,Ge.width,Ge.height,se,Ge.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,He,Ie,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):de?ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,He,0,0,Ge.width,Ge.height,se,ge,Ge.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,He,Ie,Ge.width,Ge.height,0,se,ge,Ge.data)}}}else{if(Ee=M.mipmaps,de&&re){Ee.length>0&&Ve++;let be=ze(ie[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ve,Ie,be.width,be.height)}for(let be=0;be<6;be++)if(ue){de?ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,ie[be].width,ie[be].height,se,ge,ie[be].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Ie,ie[be].width,ie[be].height,0,se,ge,ie[be].data);for(let He=0;He<Ee.length;He++){let Ge=Ee[He].image[be].image;de?ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,He+1,0,0,Ge.width,Ge.height,se,ge,Ge.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,He+1,Ie,Ge.width,Ge.height,0,se,ge,Ge.data)}}else{de?ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,se,ge,ie[be]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Ie,se,ge,ie[be]);for(let He=0;He<Ee.length;He++){let Ge=Ee[He];de?ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,He+1,0,0,se,ge,Ge.image[be]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,He+1,Ie,se,ge,Ge.image[be])}}}m(M)&&g(r.TEXTURE_CUBE_MAP),$.__version=F.version,M.onUpdate&&M.onUpdate(M)}z.__version=M.version})(k,P,b):t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+b)},this.rebindTextures=function(P,b,k){let z=n.get(P);b!==void 0&&Z(z.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&H(P)},this.setupRenderTarget=function(P){let b=P.texture,k=n.get(P),z=n.get(b);P.addEventListener("dispose",L);let M=P.textures,C=P.isWebGLCubeRenderTarget===!0,U=M.length>1;if(U||(z.__webglTexture===void 0&&(z.__webglTexture=r.createTexture()),z.__version=b.version,a.memory.textures++),C){k.__webglFramebuffer=[];for(let F=0;F<6;F++)if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[F]=[];for(let $=0;$<b.mipmaps.length;$++)k.__webglFramebuffer[F][$]=r.createFramebuffer()}else k.__webglFramebuffer[F]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let F=0;F<b.mipmaps.length;F++)k.__webglFramebuffer[F]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(U)for(let F=0,$=M.length;F<$;F++){let K=n.get(M[F]);K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture(),a.memory.textures++)}if(P.samples>0&&me(P)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let F=0;F<M.length;F++){let $=M[F];k.__webglColorRenderbuffer[F]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[F]);let K=s.convert($.format,$.colorSpace),W=s.convert($.type),oe=_($.internalFormat,K,W,$.colorSpace,P.isXRRenderTarget===!0),Re=Te(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,Re,oe,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+F,r.RENDERBUFFER,k.__webglColorRenderbuffer[F])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),xe(k.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(C){t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture),D(r.TEXTURE_CUBE_MAP,b);for(let F=0;F<6;F++)if(b.mipmaps&&b.mipmaps.length>0)for(let $=0;$<b.mipmaps.length;$++)Z(k.__webglFramebuffer[F][$],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+F,$);else Z(k.__webglFramebuffer[F],P,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+F,0);m(b)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(U){for(let F=0,$=M.length;F<$;F++){let K=M[F],W=n.get(K);t.bindTexture(r.TEXTURE_2D,W.__webglTexture),D(r.TEXTURE_2D,K),Z(k.__webglFramebuffer,P,K,r.COLOR_ATTACHMENT0+F,r.TEXTURE_2D,0),m(K)&&g(r.TEXTURE_2D)}t.unbindTexture()}else{let F=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(F=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(F,z.__webglTexture),D(F,b),b.mipmaps&&b.mipmaps.length>0)for(let $=0;$<b.mipmaps.length;$++)Z(k.__webglFramebuffer[$],P,b,r.COLOR_ATTACHMENT0,F,$);else Z(k.__webglFramebuffer,P,b,r.COLOR_ATTACHMENT0,F,0);m(b)&&g(F),t.unbindTexture()}P.depthBuffer&&H(P)},this.updateRenderTargetMipmap=function(P){let b=P.textures;for(let k=0,z=b.length;k<z;k++){let M=b[k];if(m(M)){let C=v(P),U=n.get(M).__webglTexture;t.bindTexture(C,U),g(C),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(P){if(P.samples>0){if(me(P)===!1){let b=P.textures,k=P.width,z=P.height,M=r.COLOR_BUFFER_BIT,C=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,U=n.get(P),F=b.length>1;if(F)for(let K=0;K<b.length;K++)t.bindFramebuffer(r.FRAMEBUFFER,U.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+K,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,U.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+K,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,U.__webglMultisampledFramebuffer);let $=P.texture.mipmaps;$&&$.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,U.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,U.__webglFramebuffer);for(let K=0;K<b.length;K++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(M|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(M|=r.STENCIL_BUFFER_BIT)),F){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,U.__webglColorRenderbuffer[K]);let W=n.get(b[K]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,W,0)}r.blitFramebuffer(0,0,k,z,0,0,k,z,M,r.NEAREST),l===!0&&(X.length=0,le.length=0,X.push(r.COLOR_ATTACHMENT0+K),P.depthBuffer&&P.resolveDepthBuffer===!1&&(X.push(C),le.push(C),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,le)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,X))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),F)for(let K=0;K<b.length;K++){t.bindFramebuffer(r.FRAMEBUFFER,U.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+K,r.RENDERBUFFER,U.__webglColorRenderbuffer[K]);let W=n.get(b[K]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,U.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+K,r.TEXTURE_2D,W,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,U.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let b=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}},this.setupDepthRenderbuffer=H,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=me}function Rm(r,e){return{convert:function(t,n=Qi){let i,s=ut.getTransfer(n);if(t===Hn)return r.UNSIGNED_BYTE;if(t===Io)return r.UNSIGNED_SHORT_4_4_4_4;if(t===Lo)return r.UNSIGNED_SHORT_5_5_5_1;if(t===Yl)return r.UNSIGNED_INT_5_9_9_9_REV;if(t===jl)return r.BYTE;if(t===ql)return r.SHORT;if(t===Hr)return r.UNSIGNED_SHORT;if(t===Po)return r.INT;if(t===Ki)return r.UNSIGNED_INT;if(t===Wn)return r.FLOAT;if(t===Wr)return r.HALF_FLOAT;if(t===cu)return r.ALPHA;if(t===hu)return r.RGB;if(t===Cn)return r.RGBA;if(t===ks)return r.DEPTH_COMPONENT;if(t===Gs)return r.DEPTH_STENCIL;if(t===Zl)return r.RED;if(t===Do)return r.RED_INTEGER;if(t===uu)return r.RG;if(t===Jl)return r.RG_INTEGER;if(t===Kl)return r.RGBA_INTEGER;if(t===Uo||t===No||t===Fo||t===Oo)if(s===ft){if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i===null)return null;if(t===Uo)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===No)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===Fo)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Oo)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(i=e.get("WEBGL_compressed_texture_s3tc"),i===null)return null;if(t===Uo)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===No)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===Fo)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Oo)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===Ql||t===ec||t===tc||t===nc){if(i=e.get("WEBGL_compressed_texture_pvrtc"),i===null)return null;if(t===Ql)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===ec)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===tc)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===nc)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===ic||t===rc||t===sc){if(i=e.get("WEBGL_compressed_texture_etc"),i===null)return null;if(t===ic||t===rc)return s===ft?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(t===sc)return s===ft?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}if(t===ac||t===oc||t===lc||t===cc||t===hc||t===uc||t===dc||t===pc||t===mc||t===fc||t===gc||t===vc||t===_c||t===xc){if(i=e.get("WEBGL_compressed_texture_astc"),i===null)return null;if(t===ac)return s===ft?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===oc)return s===ft?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===lc)return s===ft?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===cc)return s===ft?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===hc)return s===ft?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===uc)return s===ft?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===dc)return s===ft?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===pc)return s===ft?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===mc)return s===ft?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===fc)return s===ft?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===gc)return s===ft?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===vc)return s===ft?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===_c)return s===ft?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===xc)return s===ft?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Bo||t===yc||t===Mc){if(i=e.get("EXT_texture_compression_bptc"),i===null)return null;if(t===Bo)return s===ft?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===yc)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Mc)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===du||t===Sc||t===bc||t===wc){if(i=e.get("EXT_texture_compression_rgtc"),i===null)return null;if(t===Bo)return i.COMPRESSED_RED_RGTC1_EXT;if(t===Sc)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===bc)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===wc)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===$r?r.UNSIGNED_INT_24_8:r[t]!==void 0?r[t]:null}}}var Wc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new Jt;e.properties.get(i).__webglTexture=t.texture,t.depthNear===n.depthNear&&t.depthFar===n.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new En({vertexShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qe(new Gn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$c=class extends oi{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,f=null,x=new Wc,m=t.getContextAttributes(),g=null,v=null,_=[],y=[],A=new _e,w=null,L=new Wt;L.viewport=new Tt;let B=new Wt;B.viewport=new Tt;let N=[L,B],G=new _o,O=null,I=null;function V(H){let X=y.indexOf(H.inputSource);if(X===-1)return;let le=_[X];le!==void 0&&(le.update(H.inputSource,H.frame,c||a),le.dispatchEvent({type:H.type,data:H.inputSource}))}function D(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",Y);for(let H=0;H<_.length;H++){let X=y[H];X!==null&&(y[H]=null,_[H].disconnect(X))}O=null,I=null,x.reset(),e.setRenderTarget(g),p=null,d=null,u=null,i=null,v=null,Ce.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}function Y(H){for(let X=0;X<H.removed.length;X++){let le=H.removed[X],Te=y.indexOf(le);Te>=0&&(y[Te]=null,_[Te].disconnect(le))}for(let X=0;X<H.added.length;X++){let le=H.added[X],Te=y.indexOf(le);if(Te===-1){for(let he=0;he<_.length;he++){if(he>=y.length){y.push(le),Te=he;break}if(y[he]===null){y[he]=le,Te=he;break}}if(Te===-1)break}let me=_[Te];me&&me.connect(le)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let X=_[H];return X===void 0&&(X=new Lr,_[H]=X),X.getTargetRaySpace()},this.getControllerGrip=function(H){let X=_[H];return X===void 0&&(X=new Lr,_[H]=X),X.getGripSpace()},this.getHand=function(H){let X=_[H];return X===void 0&&(X=new Lr,_[H]=X),X.getHandSpace()},this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",D),i.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let X=null,le=null,Te=null;m.depth&&(Te=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=m.stencil?Gs:ks,le=m.stencil?$r:Ki);let me={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(me),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new kn(d.textureWidth,d.textureHeight,{format:Cn,type:Hn,depthTexture:new Ss(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let X={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,X),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new kn(p.framebufferWidth,p.framebufferHeight,{format:Cn,type:Hn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ce.setContext(i),Ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};let q=new R,ee=new R;function Z(H,X){X===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(X.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;let X=H.near,le=H.far;x.texture!==null&&(x.depthNear>0&&(X=x.depthNear),x.depthFar>0&&(le=x.depthFar)),G.near=B.near=L.near=X,G.far=B.far=L.far=le,O===G.near&&I===G.far||(i.updateRenderState({depthNear:G.near,depthFar:G.far}),O=G.near,I=G.far),L.layers.mask=2|H.layers.mask,B.layers.mask=4|H.layers.mask,G.layers.mask=L.layers.mask|B.layers.mask;let Te=H.parent,me=G.cameras;Z(G,Te);for(let he=0;he<me.length;he++)Z(me[he],Te);me.length===2?(function(he,ze,P){q.setFromMatrixPosition(ze.matrixWorld),ee.setFromMatrixPosition(P.matrixWorld);let b=q.distanceTo(ee),k=ze.projectionMatrix.elements,z=P.projectionMatrix.elements,M=k[14]/(k[10]-1),C=k[14]/(k[10]+1),U=(k[9]+1)/k[5],F=(k[9]-1)/k[5],$=(k[8]-1)/k[0],K=(z[8]+1)/z[0],W=M*$,oe=M*K,Re=b/(-$+K),ue=Re*-$;if(ze.matrixWorld.decompose(he.position,he.quaternion,he.scale),he.translateX(ue),he.translateZ(Re),he.matrixWorld.compose(he.position,he.quaternion,he.scale),he.matrixWorldInverse.copy(he.matrixWorld).invert(),k[10]===-1)he.projectionMatrix.copy(ze.projectionMatrix),he.projectionMatrixInverse.copy(ze.projectionMatrixInverse);else{let ie=M+Re,ne=C+Re,se=W-ue,ge=oe+(b-ue),Ie=U*C/ne*ie,de=F*C/ne*ie;he.projectionMatrix.makePerspective(se,ge,Ie,de,ie,ne),he.projectionMatrixInverse.copy(he.projectionMatrix).invert()}})(G,L,B):G.projectionMatrix.copy(L.projectionMatrix),(function(he,ze,P){P===null?he.matrix.copy(ze.matrixWorld):(he.matrix.copy(P.matrixWorld),he.matrix.invert(),he.matrix.multiply(ze.matrixWorld)),he.matrix.decompose(he.position,he.quaternion,he.scale),he.updateMatrixWorld(!0),he.projectionMatrix.copy(ze.projectionMatrix),he.projectionMatrixInverse.copy(ze.projectionMatrixInverse),he.isPerspectiveCamera&&(he.fov=2*Ua*Math.atan(1/he.projectionMatrix.elements[5]),he.zoom=1)})(H,G,Te)},this.getCamera=function(){return G},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(G)};let xe=null,Ce=new id;Ce.setAnimationLoop(function(H,X){if(h=X.getViewerPose(c||a),f=X,h!==null){let le=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let Te=!1;le.length!==G.cameras.length&&(G.cameras.length=0,Te=!0);for(let he=0;he<le.length;he++){let ze=le[he],P=null;if(p!==null)P=p.getViewport(ze);else{let k=u.getViewSubImage(d,ze);P=k.viewport,he===0&&(e.setRenderTargetTextures(v,k.colorTexture,k.depthStencilTexture),e.setRenderTarget(v))}let b=N[he];b===void 0&&(b=new Wt,b.layers.enable(he),b.viewport=new Tt,N[he]=b),b.matrix.fromArray(ze.transform.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale),b.projectionMatrix.fromArray(ze.projectionMatrix),b.projectionMatrixInverse.copy(b.projectionMatrix).invert(),b.viewport.set(P.x,P.y,P.width,P.height),he===0&&(G.matrix.copy(b.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Te===!0&&G.cameras.push(b)}let me=i.enabledFeatures;if(me&&me.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){let he=u.getDepthInformation(le[0]);he&&he.isValid&&he.texture&&x.init(e,he,i.renderState)}}for(let le=0;le<_.length;le++){let Te=y[le],me=_[le];Te!==null&&me!==void 0&&me.update(Te,X,c||a)}xe&&xe(H,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),f=null}),this.setAnimationLoop=function(H){xe=H},this.dispose=function(){}}},nr=new Tn,Pm=new nt;function Im(r,e){function t(i,s){i.matrixAutoUpdate===!0&&i.updateMatrix(),s.value.copy(i.matrix)}function n(i,s){i.opacity.value=s.opacity,s.color&&i.diffuse.value.copy(s.color),s.emissive&&i.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(i.map.value=s.map,t(s.map,i.mapTransform)),s.alphaMap&&(i.alphaMap.value=s.alphaMap,t(s.alphaMap,i.alphaMapTransform)),s.bumpMap&&(i.bumpMap.value=s.bumpMap,t(s.bumpMap,i.bumpMapTransform),i.bumpScale.value=s.bumpScale,s.side===Xt&&(i.bumpScale.value*=-1)),s.normalMap&&(i.normalMap.value=s.normalMap,t(s.normalMap,i.normalMapTransform),i.normalScale.value.copy(s.normalScale),s.side===Xt&&i.normalScale.value.negate()),s.displacementMap&&(i.displacementMap.value=s.displacementMap,t(s.displacementMap,i.displacementMapTransform),i.displacementScale.value=s.displacementScale,i.displacementBias.value=s.displacementBias),s.emissiveMap&&(i.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,i.emissiveMapTransform)),s.specularMap&&(i.specularMap.value=s.specularMap,t(s.specularMap,i.specularMapTransform)),s.alphaTest>0&&(i.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,l=a.envMapRotation;o&&(i.envMap.value=o,nr.copy(l),nr.x*=-1,nr.y*=-1,nr.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),i.envMapRotation.value.setFromMatrix4(Pm.makeRotationFromEuler(nr)),i.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,i.reflectivity.value=s.reflectivity,i.ior.value=s.ior,i.refractionRatio.value=s.refractionRatio),s.lightMap&&(i.lightMap.value=s.lightMap,i.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,i.lightMapTransform)),s.aoMap&&(i.aoMap.value=s.aoMap,i.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,i.aoMapTransform))}return{refreshFogUniforms:function(i,s){s.color.getRGB(i.fogColor.value,Cc(r)),s.isFog?(i.fogNear.value=s.near,i.fogFar.value=s.far):s.isFogExp2&&(i.fogDensity.value=s.density)},refreshMaterialUniforms:function(i,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(i,s):s.isMeshToonMaterial?(n(i,s),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(i,s)):s.isMeshPhongMaterial?(n(i,s),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(i,s)):s.isMeshStandardMaterial?(n(i,s),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(i,s),s.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Xt&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(i,s,l)):s.isMeshMatcapMaterial?(n(i,s),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(i,s)):s.isMeshDepthMaterial?n(i,s):s.isMeshDistanceMaterial?(n(i,s),(function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(i,s)):s.isMeshNormalMaterial?n(i,s):s.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(i,s),s.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(i,s)):s.isPointsMaterial?(function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(i,s,a,o):s.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(i,s):s.isShadowMaterial?(i.color.value.copy(s.color),i.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function Lm(r,e,t,n){let i={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(u,d,p,f){let x=u.value,m=d+"_"+p;if(f[m]===void 0)return f[m]=typeof x=="number"||typeof x=="boolean"?x:x.clone(),!0;{let g=f[m];if(typeof x=="number"||typeof x=="boolean"){if(g!==x)return f[m]=x,!0}else if(g.equals(x)===!1)return g.copy(x),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(i[d.id]),delete i[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;n.uniformBlockBinding(u,p)},update:function(u,d){let p=i[u.id];p===void 0&&((function(m){let g=m.uniforms,v=0,_=16;for(let A=0,w=g.length;A<w;A++){let L=Array.isArray(g[A])?g[A]:[g[A]];for(let B=0,N=L.length;B<N;B++){let G=L[B],O=Array.isArray(G.value)?G.value:[G.value];for(let I=0,V=O.length;I<V;I++){let D=c(O[I]),Y=v%_,q=Y%D.boundary,ee=Y+q;v+=q,ee!==0&&_-ee<D.storage&&(v+=_-ee),G.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=v,v+=D.storage}}}let y=v%_;y>0&&(v+=_-y),m.__size=v,m.__cache={}})(u),p=(function(m){let g=(function(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();m.__bindingPointIndex=g;let v=r.createBuffer(),_=m.__size,y=m.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,_,y),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,g,v),v})(u),i[u.id]=p,u.addEventListener("dispose",h));let f=d.program;n.updateUBOMapping(u,f);let x=e.render.frame;s[u.id]!==x&&((function(m){let g=i[m.id],v=m.uniforms,_=m.__cache;r.bindBuffer(r.UNIFORM_BUFFER,g);for(let y=0,A=v.length;y<A;y++){let w=Array.isArray(v[y])?v[y]:[v[y]];for(let L=0,B=w.length;L<B;L++){let N=w[L];if(l(N,y,L,_)===!0){let G=N.__offset,O=Array.isArray(N.value)?N.value:[N.value],I=0;for(let V=0;V<O.length;V++){let D=O[V],Y=c(D);typeof D=="number"||typeof D=="boolean"?(N.__data[0]=D,r.bufferSubData(r.UNIFORM_BUFFER,G+I,N.__data)):D.isMatrix3?(N.__data[0]=D.elements[0],N.__data[1]=D.elements[1],N.__data[2]=D.elements[2],N.__data[3]=0,N.__data[4]=D.elements[3],N.__data[5]=D.elements[4],N.__data[6]=D.elements[5],N.__data[7]=0,N.__data[8]=D.elements[6],N.__data[9]=D.elements[7],N.__data[10]=D.elements[8],N.__data[11]=0):(D.toArray(N.__data,I),I+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,G,N.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)})(u),s[u.id]=x)},dispose:function(){for(let u in i)r.deleteBuffer(i[u]);a=[],i={},s={}}}}var Vo=class{constructor(e={}){let{canvas:t=bu(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e,p;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let f=new Uint32Array(4),x=new Int32Array(4),m=null,g=null,v=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,A=!1;this._outputColorSpace=Gt;let w=0,L=0,B=null,N=-1,G=null,O=new Tt,I=new Tt,V=null,D=new Ue(0),Y=0,q=t.width,ee=t.height,Z=1,xe=null,Ce=null,H=new Tt(0,0,q,ee),X=new Tt(0,0,q,ee),le=!1,Te=new Ai,me=!1,he=!1,ze=new nt,P=new nt,b=new R,k=new Tt,z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},M=!1;function C(){return B===null?Z:1}let U,F,$,K,W,oe,Re,ue,ie,ne,se,ge,Ie,de,re,ve,Ee,Ve,be,He,Ge,ot,dt,lt,S=n;function ye(T,J){return t.getContext(T,J)}try{let T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"178"}`),t.addEventListener("webglcontextlost",Ae,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),S===null){let J="webgl2";if(S=ye(J,T),S===null)throw ye(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}function Ne(){U=new mp(S),U.init(),ot=new Rm(S,U),F=new cp(S,U,e,ot),$=new Am(S,U),F.reverseDepthBuffer&&d&&$.buffers.depth.setReversed(!0),K=new vp(S),W=new vm,oe=new Cm(S,U,$,W,F,ot,K),Re=new up(y),ue=new pp(y),ie=new rp(S),dt=new op(S,ie),ne=new fp(S,ie,K,dt),se=new xp(S,ne,ie,K),be=new _p(S,F,oe),ve=new hp(W),ge=new gm(y,Re,ue,U,F,dt,ve),Ie=new Im(y,W),de=new xm,re=new wm(U),Ve=new ap(y,Re,ue,$,se,p,l),Ee=new Tm(y,se,F),lt=new Lm(S,K,F,$),He=new lp(S,U,K),Ge=new gp(S,U,K),K.programs=ge.programs,y.capabilities=F,y.extensions=U,y.properties=W,y.renderLists=de,y.shadowMap=Ee,y.state=$,y.info=K}Ne();let ae=new $c(y,S);function Ae(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let T=K.autoReset,J=Ee.enabled,te=Ee.autoUpdate,ce=Ee.needsUpdate,Q=Ee.type;Ne(),K.autoReset=T,Ee.enabled=J,Ee.autoUpdate=te,Ee.needsUpdate=ce,Ee.type=Q}function Fe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ke(T){let J=T.target;J.removeEventListener("dispose",ke),(function(te){(function(ce){let Q=W.get(ce).programs;Q!==void 0&&(Q.forEach(function(fe){ge.releaseProgram(fe)}),ce.isShaderMaterial&&ge.releaseShaderCache(ce))})(te),W.remove(te)})(J)}function We(T,J,te){T.transparent===!0&&T.side===Ot&&T.forceSinglePass===!1?(T.side=Xt,T.needsUpdate=!0,fi(T,J,te),T.side=Pi,T.needsUpdate=!0,fi(T,J,te),T.side=Ot):fi(T,J,te)}this.xr=ae,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){let T=U.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=U.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(T){T!==void 0&&(Z=T,this.setSize(q,ee,!1))},this.getSize=function(T){return T.set(q,ee)},this.setSize=function(T,J,te=!0){ae.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(q=T,ee=J,t.width=Math.floor(T*Z),t.height=Math.floor(J*Z),te===!0&&(t.style.width=T+"px",t.style.height=J+"px"),this.setViewport(0,0,T,J))},this.getDrawingBufferSize=function(T){return T.set(q*Z,ee*Z).floor()},this.setDrawingBufferSize=function(T,J,te){q=T,ee=J,Z=te,t.width=Math.floor(T*te),t.height=Math.floor(J*te),this.setViewport(0,0,T,J)},this.getCurrentViewport=function(T){return T.copy(O)},this.getViewport=function(T){return T.copy(H)},this.setViewport=function(T,J,te,ce){T.isVector4?H.set(T.x,T.y,T.z,T.w):H.set(T,J,te,ce),$.viewport(O.copy(H).multiplyScalar(Z).round())},this.getScissor=function(T){return T.copy(X)},this.setScissor=function(T,J,te,ce){T.isVector4?X.set(T.x,T.y,T.z,T.w):X.set(T,J,te,ce),$.scissor(I.copy(X).multiplyScalar(Z).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(T){$.setScissorTest(le=T)},this.setOpaqueSort=function(T){xe=T},this.setTransparentSort=function(T){Ce=T},this.getClearColor=function(T){return T.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor(...arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha(...arguments)},this.clear=function(T=!0,J=!0,te=!0){let ce=0;if(T){let Q=!1;if(B!==null){let fe=B.texture.format;Q=fe===Kl||fe===Jl||fe===Do}if(Q){let fe=B.texture.type,De=fe===Hn||fe===Ki||fe===Hr||fe===$r||fe===Io||fe===Lo,Be=Ve.getClearColor(),$e=Ve.getClearAlpha(),Qe=Be.r,je=Be.g,Ye=Be.b;De?(f[0]=Qe,f[1]=je,f[2]=Ye,f[3]=$e,S.clearBufferuiv(S.COLOR,0,f)):(x[0]=Qe,x[1]=je,x[2]=Ye,x[3]=$e,S.clearBufferiv(S.COLOR,0,x))}else ce|=S.COLOR_BUFFER_BIT}J&&(ce|=S.DEPTH_BUFFER_BIT),te&&(ce|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ae,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),Ve.dispose(),de.dispose(),re.dispose(),W.dispose(),Re.dispose(),ue.dispose(),se.dispose(),dt.dispose(),lt.dispose(),ge.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Xe),ae.removeEventListener("sessionend",Mt),Dt.stop()},this.renderBufferDirect=function(T,J,te,ce,Q,fe){J===null&&(J=z);let De=Q.isMesh&&Q.matrixWorld.determinant()<0,Be=(function(j,we,Me,Oe,Le){we.isScene!==!0&&(we=z),oe.resetTextureUnits();let ht=we.fog,vt=Oe.isMeshStandardMaterial?we.environment:null,mt=B===null?y.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Vi,Ut=(Oe.isMeshStandardMaterial?ue:Re).get(Oe.envMap||vt),It=Oe.vertexColors===!0&&!!Me.attributes.color&&Me.attributes.color.itemSize===4,sn=!!Me.attributes.tangent&&(!!Oe.normalMap||Oe.anisotropy>0),Nt=!!Me.morphAttributes.position,Yn=!!Me.morphAttributes.normal,Yt=!!Me.morphAttributes.color,or=di;Oe.toneMapped&&(B!==null&&B.isXRRenderTarget!==!0||(or=y.toneMapping));let gi=Me.morphAttributes.position||Me.morphAttributes.normal||Me.morphAttributes.color,Rn=gi!==void 0?gi.length:0,Ze=W.get(Oe),Zn=g.state.lights;if(me===!0&&(he===!0||j!==G)){let en=j===G&&Oe.id===N;ve.setState(Oe,j,en)}let an=!1;Oe.version===Ze.__version?Ze.needsLights&&Ze.lightsStateVersion!==Zn.state.version||Ze.outputColorSpace!==mt||Le.isBatchedMesh&&Ze.batching===!1?an=!0:Le.isBatchedMesh||Ze.batching!==!0?Le.isBatchedMesh&&Ze.batchingColor===!0&&Le.colorTexture===null||Le.isBatchedMesh&&Ze.batchingColor===!1&&Le.colorTexture!==null||Le.isInstancedMesh&&Ze.instancing===!1?an=!0:Le.isInstancedMesh||Ze.instancing!==!0?Le.isSkinnedMesh&&Ze.skinning===!1?an=!0:Le.isSkinnedMesh||Ze.skinning!==!0?Le.isInstancedMesh&&Ze.instancingColor===!0&&Le.instanceColor===null||Le.isInstancedMesh&&Ze.instancingColor===!1&&Le.instanceColor!==null||Le.isInstancedMesh&&Ze.instancingMorph===!0&&Le.morphTexture===null||Le.isInstancedMesh&&Ze.instancingMorph===!1&&Le.morphTexture!==null||Ze.envMap!==Ut||Oe.fog===!0&&Ze.fog!==ht?an=!0:Ze.numClippingPlanes===void 0||Ze.numClippingPlanes===ve.numPlanes&&Ze.numIntersection===ve.numIntersection?(Ze.vertexAlphas!==It||Ze.vertexTangents!==sn||Ze.morphTargets!==Nt||Ze.morphNormals!==Yn||Ze.morphColors!==Yt||Ze.toneMapping!==or||Ze.morphTargetsCount!==Rn)&&(an=!0):an=!0:an=!0:an=!0:an=!0:(an=!0,Ze.__version=Oe.version);let Jn=Ze.currentProgram;an===!0&&(Jn=fi(Oe,we,Le));let Zs=!1,Kn=!1,Di=!1,St=Jn.getUniforms(),fn=Ze.uniforms;if($.useProgram(Jn.program)&&(Zs=!0,Kn=!0,Di=!0),Oe.id!==N&&(N=Oe.id,Kn=!0),Zs||G!==j){$.buffers.depth.getReversed()?(ze.copy(j.projectionMatrix),Tu(ze),Eu(ze),St.setValue(S,"projectionMatrix",ze)):St.setValue(S,"projectionMatrix",j.projectionMatrix),St.setValue(S,"viewMatrix",j.matrixWorldInverse);let en=St.map.cameraPosition;en!==void 0&&en.setValue(S,b.setFromMatrixPosition(j.matrixWorld)),F.logarithmicDepthBuffer&&St.setValue(S,"logDepthBufFC",2/(Math.log(j.far+1)/Math.LN2)),(Oe.isMeshPhongMaterial||Oe.isMeshToonMaterial||Oe.isMeshLambertMaterial||Oe.isMeshBasicMaterial||Oe.isMeshStandardMaterial||Oe.isShaderMaterial)&&St.setValue(S,"isOrthographic",j.isOrthographicCamera===!0),G!==j&&(G=j,Kn=!0,Di=!0)}if(Le.isSkinnedMesh){St.setOptional(S,Le,"bindMatrix"),St.setOptional(S,Le,"bindMatrixInverse");let en=Le.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),St.setValue(S,"boneTexture",en.boneTexture,oe))}Le.isBatchedMesh&&(St.setOptional(S,Le,"batchingTexture"),St.setValue(S,"batchingTexture",Le._matricesTexture,oe),St.setOptional(S,Le,"batchingIdTexture"),St.setValue(S,"batchingIdTexture",Le._indirectTexture,oe),St.setOptional(S,Le,"batchingColorTexture"),Le._colorsTexture!==null&&St.setValue(S,"batchingColorTexture",Le._colorsTexture,oe));let Ui=Me.morphAttributes;Ui.position===void 0&&Ui.normal===void 0&&Ui.color===void 0||be.update(Le,Me,Jn),(Kn||Ze.receiveShadow!==Le.receiveShadow)&&(Ze.receiveShadow=Le.receiveShadow,St.setValue(S,"receiveShadow",Le.receiveShadow)),Oe.isMeshGouraudMaterial&&Oe.envMap!==null&&(fn.envMap.value=Ut,fn.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),Oe.isMeshStandardMaterial&&Oe.envMap===null&&we.environment!==null&&(fn.envMapIntensity.value=we.environmentIntensity),Kn&&(St.setValue(S,"toneMappingExposure",y.toneMappingExposure),Ze.needsLights&&(on=Di,(Qt=fn).ambientLightColor.needsUpdate=on,Qt.lightProbe.needsUpdate=on,Qt.directionalLights.needsUpdate=on,Qt.directionalLightShadows.needsUpdate=on,Qt.pointLights.needsUpdate=on,Qt.pointLightShadows.needsUpdate=on,Qt.spotLights.needsUpdate=on,Qt.spotLightShadows.needsUpdate=on,Qt.rectAreaLights.needsUpdate=on,Qt.hemisphereLights.needsUpdate=on),ht&&Oe.fog===!0&&Ie.refreshFogUniforms(fn,ht),Ie.refreshMaterialUniforms(fn,Oe,Z,ee,g.state.transmissionRenderTarget[j.id]),jr.upload(S,js(Ze),fn,oe));var Qt,on;if(Oe.isShaderMaterial&&Oe.uniformsNeedUpdate===!0&&(jr.upload(S,js(Ze),fn,oe),Oe.uniformsNeedUpdate=!1),Oe.isSpriteMaterial&&St.setValue(S,"center",Le.center),St.setValue(S,"modelViewMatrix",Le.modelViewMatrix),St.setValue(S,"normalMatrix",Le.normalMatrix),St.setValue(S,"modelMatrix",Le.matrixWorld),Oe.isShaderMaterial||Oe.isRawShaderMaterial){let en=Oe.uniformsGroups;for(let Pn=0,Ko=en.length;Pn<Ko;Pn++){let lr=en[Pn];lt.update(lr,Jn),lt.bind(lr,Jn)}}return Jn})(T,J,te,ce,Q);$.setMaterial(ce,De);let $e=te.index,Qe=1;if(ce.wireframe===!0){if($e=ne.getWireframeAttribute(te),$e===void 0)return;Qe=2}let je=te.drawRange,Ye=te.attributes.position,tt=je.start*Qe,xt=(je.start+je.count)*Qe;fe!==null&&(tt=Math.max(tt,fe.start*Qe),xt=Math.min(xt,(fe.start+fe.count)*Qe)),$e!==null?(tt=Math.max(tt,0),xt=Math.min(xt,$e.count)):Ye!=null&&(tt=Math.max(tt,0),xt=Math.min(xt,Ye.count));let yt=xt-tt;if(yt<0||yt===1/0)return;let At;dt.setup(Q,ce,Be,te,$e);let gt=He;if($e!==null&&(At=ie.get($e),gt=Ge,gt.setIndex(At)),Q.isMesh)ce.wireframe===!0?($.setLineWidth(ce.wireframeLinewidth*C()),gt.setMode(S.LINES)):gt.setMode(S.TRIANGLES);else if(Q.isLine){let j=ce.linewidth;j===void 0&&(j=1),$.setLineWidth(j*C()),Q.isLineSegments?gt.setMode(S.LINES):Q.isLineLoop?gt.setMode(S.LINE_LOOP):gt.setMode(S.LINE_STRIP)}else Q.isPoints?gt.setMode(S.POINTS):Q.isSprite&&gt.setMode(S.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Hi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(U.get("WEBGL_multi_draw"))gt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let j=Q._multiDrawStarts,we=Q._multiDrawCounts,Me=Q._multiDrawCount,Oe=$e?ie.get($e).bytesPerElement:1,Le=W.get(ce).currentProgram.getUniforms();for(let ht=0;ht<Me;ht++)Le.setValue(S,"_gl_DrawID",ht),gt.render(j[ht]/Oe,we[ht])}else if(Q.isInstancedMesh)gt.renderInstances(tt,yt,Q.count);else if(te.isInstancedBufferGeometry){let j=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,we=Math.min(te.instanceCount,j);gt.renderInstances(tt,yt,we)}else gt.render(tt,yt)},this.compile=function(T,J,te=null){te===null&&(te=T),g=re.get(te),g.init(J),_.push(g),te.traverseVisible(function(Q){Q.isLight&&Q.layers.test(J.layers)&&(g.pushLight(Q),Q.castShadow&&g.pushShadow(Q))}),T!==te&&T.traverseVisible(function(Q){Q.isLight&&Q.layers.test(J.layers)&&(g.pushLight(Q),Q.castShadow&&g.pushShadow(Q))}),g.setupLights();let ce=new Set;return T.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let fe=Q.material;if(fe)if(Array.isArray(fe))for(let De=0;De<fe.length;De++){let Be=fe[De];We(Be,te,Q),ce.add(Be)}else We(fe,te,Q),ce.add(fe)}),g=_.pop(),ce},this.compileAsync=function(T,J,te=null){let ce=this.compile(T,J,te);return new Promise(Q=>{function fe(){ce.forEach(function(De){W.get(De).currentProgram.isReady()&&ce.delete(De)}),ce.size!==0?setTimeout(fe,10):Q(T)}U.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let et=null;function Xe(){Dt.stop()}function Mt(){Dt.start()}let Dt=new id;function Kt(T,J,te,ce){if(T.visible===!1)return;if(T.layers.test(J.layers)){if(T.isGroup)te=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(J);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Te.intersectsSprite(T)){ce&&k.setFromMatrixPosition(T.matrixWorld).applyMatrix4(P);let fe=se.update(T),De=T.material;De.visible&&m.push(T,fe,De,te,k.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Te.intersectsObject(T))){let fe=se.update(T),De=T.material;if(ce&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),k.copy(T.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),k.copy(fe.boundingSphere.center)),k.applyMatrix4(T.matrixWorld).applyMatrix4(P)),Array.isArray(De)){let Be=fe.groups;for(let $e=0,Qe=Be.length;$e<Qe;$e++){let je=Be[$e],Ye=De[je.materialIndex];Ye&&Ye.visible&&m.push(T,fe,Ye,te,k.z,je)}}else De.visible&&m.push(T,fe,De,te,k.z,null)}}let Q=T.children;for(let fe=0,De=Q.length;fe<De;fe++)Kt(Q[fe],J,te,ce)}function qt(T,J,te,ce){let Q=T.opaque,fe=T.transmissive,De=T.transparent;g.setupLightsView(te),me===!0&&ve.setGlobalState(y.clippingPlanes,te),ce&&$.viewport(O.copy(ce)),Q.length>0&&ar(Q,J,te),fe.length>0&&ar(fe,J,te),De.length>0&&ar(De,J,te),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function Kr(T,J,te,ce){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ce.id]===void 0&&(g.state.transmissionRenderTarget[ce.id]=new kn(1,1,{generateMipmaps:!0,type:U.has("EXT_color_buffer_half_float")||U.has("EXT_color_buffer_float")?Wr:Hn,minFilter:Ji,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));let Q=g.state.transmissionRenderTarget[ce.id],fe=ce.viewport||O;Q.setSize(fe.z*y.transmissionResolutionScale,fe.w*y.transmissionResolutionScale);let De=y.getRenderTarget(),Be=y.getActiveCubeFace(),$e=y.getActiveMipmapLevel();y.setRenderTarget(Q),y.getClearColor(D),Y=y.getClearAlpha(),Y<1&&y.setClearColor(16777215,.5),y.clear(),M&&Ve.render(te);let Qe=y.toneMapping;y.toneMapping=di;let je=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),g.setupLightsView(ce),me===!0&&ve.setGlobalState(y.clippingPlanes,ce),ar(T,te,ce),oe.updateMultisampleRenderTarget(Q),oe.updateRenderTargetMipmap(Q),U.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let tt=0,xt=J.length;tt<xt;tt++){let yt=J[tt],At=yt.object,gt=yt.geometry,j=yt.material,we=yt.group;if(j.side===Ot&&At.layers.test(ce.layers)){let Me=j.side;j.side=Xt,j.needsUpdate=!0,Xs(At,te,ce,gt,j,we),j.side=Me,j.needsUpdate=!0,Ye=!0}}Ye===!0&&(oe.updateMultisampleRenderTarget(Q),oe.updateRenderTargetMipmap(Q))}y.setRenderTarget(De,Be,$e),y.setClearColor(D,Y),je!==void 0&&(ce.viewport=je),y.toneMapping=Qe}function ar(T,J,te){let ce=J.isScene===!0?J.overrideMaterial:null;for(let Q=0,fe=T.length;Q<fe;Q++){let De=T[Q],Be=De.object,$e=De.geometry,Qe=De.group,je=De.material;je.allowOverride===!0&&ce!==null&&(je=ce),Be.layers.test(te.layers)&&Xs(Be,J,te,$e,je,Qe)}}function Xs(T,J,te,ce,Q,fe){T.onBeforeRender(y,J,te,ce,Q,fe),T.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Q.onBeforeRender(y,J,te,ce,T,fe),Q.transparent===!0&&Q.side===Ot&&Q.forceSinglePass===!1?(Q.side=Xt,Q.needsUpdate=!0,y.renderBufferDirect(te,J,ce,Q,T,fe),Q.side=Pi,Q.needsUpdate=!0,y.renderBufferDirect(te,J,ce,Q,T,fe),Q.side=Ot):y.renderBufferDirect(te,J,ce,Q,T,fe),T.onAfterRender(y,J,te,ce,Q,fe)}function fi(T,J,te){J.isScene!==!0&&(J=z);let ce=W.get(T),Q=g.state.lights,fe=g.state.shadowsArray,De=Q.state.version,Be=ge.getParameters(T,Q.state,fe,J,te),$e=ge.getProgramCacheKey(Be),Qe=ce.programs;ce.environment=T.isMeshStandardMaterial?J.environment:null,ce.fog=J.fog,ce.envMap=(T.isMeshStandardMaterial?ue:Re).get(T.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&T.envMap===null?J.environmentRotation:T.envMapRotation,Qe===void 0&&(T.addEventListener("dispose",ke),Qe=new Map,ce.programs=Qe);let je=Qe.get($e);if(je!==void 0){if(ce.currentProgram===je&&ce.lightsStateVersion===De)return qs(T,Be),je}else Be.uniforms=ge.getUniforms(T),T.onBeforeCompile(Be,y),je=ge.acquireProgram(Be,$e),Qe.set($e,je),ce.uniforms=Be.uniforms;let Ye=ce.uniforms;return(T.isShaderMaterial||T.isRawShaderMaterial)&&T.clipping!==!0||(Ye.clippingPlanes=ve.uniform),qs(T,Be),ce.needsLights=(function(tt){return tt.isMeshLambertMaterial||tt.isMeshToonMaterial||tt.isMeshPhongMaterial||tt.isMeshStandardMaterial||tt.isShadowMaterial||tt.isShaderMaterial&&tt.lights===!0})(T),ce.lightsStateVersion=De,ce.needsLights&&(Ye.ambientLightColor.value=Q.state.ambient,Ye.lightProbe.value=Q.state.probe,Ye.directionalLights.value=Q.state.directional,Ye.directionalLightShadows.value=Q.state.directionalShadow,Ye.spotLights.value=Q.state.spot,Ye.spotLightShadows.value=Q.state.spotShadow,Ye.rectAreaLights.value=Q.state.rectArea,Ye.ltc_1.value=Q.state.rectAreaLTC1,Ye.ltc_2.value=Q.state.rectAreaLTC2,Ye.pointLights.value=Q.state.point,Ye.pointLightShadows.value=Q.state.pointShadow,Ye.hemisphereLights.value=Q.state.hemi,Ye.directionalShadowMap.value=Q.state.directionalShadowMap,Ye.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ye.spotShadowMap.value=Q.state.spotShadowMap,Ye.spotLightMatrix.value=Q.state.spotLightMatrix,Ye.spotLightMap.value=Q.state.spotLightMap,Ye.pointShadowMap.value=Q.state.pointShadowMap,Ye.pointShadowMatrix.value=Q.state.pointShadowMatrix),ce.currentProgram=je,ce.uniformsList=null,je}function js(T){if(T.uniformsList===null){let J=T.currentProgram.getUniforms();T.uniformsList=jr.seqWithValue(J.seq,T.uniforms)}return T.uniformsList}function qs(T,J){let te=W.get(T);te.outputColorSpace=J.outputColorSpace,te.batching=J.batching,te.batchingColor=J.batchingColor,te.instancing=J.instancing,te.instancingColor=J.instancingColor,te.instancingMorph=J.instancingMorph,te.skinning=J.skinning,te.morphTargets=J.morphTargets,te.morphNormals=J.morphNormals,te.morphColors=J.morphColors,te.morphTargetsCount=J.morphTargetsCount,te.numClippingPlanes=J.numClippingPlanes,te.numIntersection=J.numClipIntersection,te.vertexAlphas=J.vertexAlphas,te.vertexTangents=J.vertexTangents,te.toneMapping=J.toneMapping}Dt.setAnimationLoop(function(T){et&&et(T)}),typeof self<"u"&&Dt.setContext(self),this.setAnimationLoop=function(T){et=T,ae.setAnimationLoop(T),T===null?Dt.stop():Dt.start()},ae.addEventListener("sessionstart",Xe),ae.addEventListener("sessionend",Mt),this.render=function(T,J){if(J!==void 0&&J.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(J),J=ae.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,J,B),g=re.get(T,_.length),g.init(J),_.push(g),P.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Te.setFromProjectionMatrix(P),he=this.localClippingEnabled,me=ve.init(this.clippingPlanes,he),m=de.get(T,v.length),m.init(),v.push(m),ae.enabled===!0&&ae.isPresenting===!0){let fe=y.xr.getDepthSensingMesh();fe!==null&&Kt(fe,J,-1/0,y.sortObjects)}Kt(T,J,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(xe,Ce),M=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,M&&Ve.addToRenderList(m,T),this.info.render.frame++,me===!0&&ve.beginShadows();let te=g.state.shadowsArray;Ee.render(te,T,J),me===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();let ce=m.opaque,Q=m.transmissive;if(g.setupLights(),J.isArrayCamera){let fe=J.cameras;if(Q.length>0)for(let De=0,Be=fe.length;De<Be;De++)Kr(ce,Q,T,fe[De]);M&&Ve.render(T);for(let De=0,Be=fe.length;De<Be;De++){let $e=fe[De];qt(m,T,$e,$e.viewport)}}else Q.length>0&&Kr(ce,Q,T,J),M&&Ve.render(T),qt(m,T,J);B!==null&&L===0&&(oe.updateMultisampleRenderTarget(B),oe.updateRenderTargetMipmap(B)),T.isScene===!0&&T.onAfterRender(y,T,J),dt.resetDefaultState(),N=-1,G=null,_.pop(),_.length>0?(g=_[_.length-1],me===!0&&ve.setGlobalState(y.clippingPlanes,g.state.camera)):g=null,v.pop(),m=v.length>0?v[v.length-1]:null},this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(T,J,te){let ce=W.get(T);ce.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),W.get(T.texture).__webglTexture=J,W.get(T.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:te,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,J){let te=W.get(T);te.__webglFramebuffer=J,te.__useDefaultFramebuffer=J===void 0};let Zo=S.createFramebuffer();this.setRenderTarget=function(T,J=0,te=0){B=T,w=J,L=te;let ce=!0,Q=null,fe=!1,De=!1;if(T){let Be=W.get(T);if(Be.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(S.FRAMEBUFFER,null),ce=!1;else if(Be.__webglFramebuffer===void 0)oe.setupRenderTarget(T);else if(Be.__hasExternalTextures)oe.rebindTextures(T,W.get(T.texture).__webglTexture,W.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let je=T.depthTexture;if(Be.__boundDepthTexture!==je){if(je!==null&&W.has(je)&&(T.width!==je.image.width||T.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(T)}}let $e=T.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(De=!0);let Qe=W.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Q=Array.isArray(Qe[J])?Qe[J][te]:Qe[J],fe=!0):Q=T.samples>0&&oe.useMultisampledRTT(T)===!1?W.get(T).__webglMultisampledFramebuffer:Array.isArray(Qe)?Qe[te]:Qe,O.copy(T.viewport),I.copy(T.scissor),V=T.scissorTest}else O.copy(H).multiplyScalar(Z).floor(),I.copy(X).multiplyScalar(Z).floor(),V=le;if(te!==0&&(Q=Zo),$.bindFramebuffer(S.FRAMEBUFFER,Q)&&ce&&$.drawBuffers(T,Q),$.viewport(O),$.scissor(I),$.setScissorTest(V),fe){let Be=W.get(T.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+J,Be.__webglTexture,te)}else if(De){let Be=W.get(T.texture),$e=J;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,Be.__webglTexture,te,$e)}else if(T!==null&&te!==0){let Be=W.get(T.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Be.__webglTexture,te)}N=-1},this.readRenderTargetPixels=function(T,J,te,ce,Q,fe,De,Be=0){if(!T||!T.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=W.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&De!==void 0&&($e=$e[De]),$e){$.bindFramebuffer(S.FRAMEBUFFER,$e);try{let Qe=T.textures[Be],je=Qe.format,Ye=Qe.type;if(!F.textureFormatReadable(je))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!F.textureTypeReadable(Ye))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");J>=0&&J<=T.width-ce&&te>=0&&te<=T.height-Q&&(T.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+Be),S.readPixels(J,te,ce,Q,ot.convert(je),ot.convert(Ye),fe))}finally{let Qe=B!==null?W.get(B).__webglFramebuffer:null;$.bindFramebuffer(S.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(T,J,te,ce,Q,fe,De,Be=0){if(!T||!T.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=W.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&De!==void 0&&($e=$e[De]),$e){if(J>=0&&J<=T.width-ce&&te>=0&&te<=T.height-Q){$.bindFramebuffer(S.FRAMEBUFFER,$e);let Qe=T.textures[Be],je=Qe.format,Ye=Qe.type;if(!F.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!F.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let tt=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,tt),S.bufferData(S.PIXEL_PACK_BUFFER,fe.byteLength,S.STREAM_READ),T.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+Be),S.readPixels(J,te,ce,Q,ot.convert(je),ot.convert(Ye),0);let xt=B!==null?W.get(B).__webglFramebuffer:null;$.bindFramebuffer(S.FRAMEBUFFER,xt);let yt=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await wu(S,yt,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,tt),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,fe),S.deleteBuffer(tt),S.deleteSync(yt),fe}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,J=null,te=0){let ce=Math.pow(2,-te),Q=Math.floor(T.image.width*ce),fe=Math.floor(T.image.height*ce),De=J!==null?J.x:0,Be=J!==null?J.y:0;oe.setTexture2D(T,0),S.copyTexSubImage2D(S.TEXTURE_2D,te,0,0,De,Be,Q,fe),$.unbindTexture()};let Jo=S.createFramebuffer(),Ys=S.createFramebuffer();this.copyTextureToTexture=function(T,J,te=null,ce=null,Q=0,fe=null){let De,Be,$e,Qe,je,Ye,tt,xt,yt;fe===null&&(Q!==0?(Hi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),fe=Q,Q=0):fe=0);let At=T.isCompressedTexture?T.mipmaps[fe]:T.image;if(te!==null)De=te.max.x-te.min.x,Be=te.max.y-te.min.y,$e=te.isBox3?te.max.z-te.min.z:1,Qe=te.min.x,je=te.min.y,Ye=te.isBox3?te.min.z:0;else{let It=Math.pow(2,-Q);De=Math.floor(At.width*It),Be=Math.floor(At.height*It),$e=T.isDataArrayTexture?At.depth:T.isData3DTexture?Math.floor(At.depth*It):1,Qe=0,je=0,Ye=0}ce!==null?(tt=ce.x,xt=ce.y,yt=ce.z):(tt=0,xt=0,yt=0);let gt=ot.convert(J.format),j=ot.convert(J.type),we;J.isData3DTexture?(oe.setTexture3D(J,0),we=S.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(oe.setTexture2DArray(J,0),we=S.TEXTURE_2D_ARRAY):(oe.setTexture2D(J,0),we=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,J.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,J.unpackAlignment);let Me=S.getParameter(S.UNPACK_ROW_LENGTH),Oe=S.getParameter(S.UNPACK_IMAGE_HEIGHT),Le=S.getParameter(S.UNPACK_SKIP_PIXELS),ht=S.getParameter(S.UNPACK_SKIP_ROWS),vt=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,At.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,At.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Qe),S.pixelStorei(S.UNPACK_SKIP_ROWS,je),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Ye);let mt=T.isDataArrayTexture||T.isData3DTexture,Ut=J.isDataArrayTexture||J.isData3DTexture;if(T.isDepthTexture){let It=W.get(T),sn=W.get(J),Nt=W.get(It.__renderTarget),Yn=W.get(sn.__renderTarget);$.bindFramebuffer(S.READ_FRAMEBUFFER,Nt.__webglFramebuffer),$.bindFramebuffer(S.DRAW_FRAMEBUFFER,Yn.__webglFramebuffer);for(let Yt=0;Yt<$e;Yt++)mt&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,W.get(T).__webglTexture,Q,Ye+Yt),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,W.get(J).__webglTexture,fe,yt+Yt)),S.blitFramebuffer(Qe,je,De,Be,tt,xt,De,Be,S.DEPTH_BUFFER_BIT,S.NEAREST);$.bindFramebuffer(S.READ_FRAMEBUFFER,null),$.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(Q!==0||T.isRenderTargetTexture||W.has(T)){let It=W.get(T),sn=W.get(J);$.bindFramebuffer(S.READ_FRAMEBUFFER,Jo),$.bindFramebuffer(S.DRAW_FRAMEBUFFER,Ys);for(let Nt=0;Nt<$e;Nt++)mt?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,It.__webglTexture,Q,Ye+Nt):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,It.__webglTexture,Q),Ut?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,sn.__webglTexture,fe,yt+Nt):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,sn.__webglTexture,fe),Q!==0?S.blitFramebuffer(Qe,je,De,Be,tt,xt,De,Be,S.COLOR_BUFFER_BIT,S.NEAREST):Ut?S.copyTexSubImage3D(we,fe,tt,xt,yt+Nt,Qe,je,De,Be):S.copyTexSubImage2D(we,fe,tt,xt,Qe,je,De,Be);$.bindFramebuffer(S.READ_FRAMEBUFFER,null),$.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else Ut?T.isDataTexture||T.isData3DTexture?S.texSubImage3D(we,fe,tt,xt,yt,De,Be,$e,gt,j,At.data):J.isCompressedArrayTexture?S.compressedTexSubImage3D(we,fe,tt,xt,yt,De,Be,$e,gt,At.data):S.texSubImage3D(we,fe,tt,xt,yt,De,Be,$e,gt,j,At):T.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,fe,tt,xt,De,Be,gt,j,At.data):T.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,fe,tt,xt,At.width,At.height,gt,At.data):S.texSubImage2D(S.TEXTURE_2D,fe,tt,xt,De,Be,gt,j,At);S.pixelStorei(S.UNPACK_ROW_LENGTH,Me),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Oe),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Le),S.pixelStorei(S.UNPACK_SKIP_ROWS,ht),S.pixelStorei(S.UNPACK_SKIP_IMAGES,vt),fe===0&&J.generateMipmaps&&S.generateMipmap(we),$.unbindTexture()},this.copyTextureToTexture3D=function(T,J,te=null,ce=null,Q=0){return Hi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,J,te,ce,Q)},this.initRenderTarget=function(T){W.get(T).__webglFramebuffer===void 0&&oe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?oe.setTextureCube(T,0):T.isData3DTexture?oe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?oe.setTexture2DArray(T,0):oe.setTexture2D(T,0),$.unbindTexture()},this.resetState=function(){w=0,L=0,B=null,$.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}};var Li=(r,e=0,t=1)=>Math.min(t,Math.max(e,r)),at=(r,e,t)=>{let n=Li((t-r)/(e-r));return n*n*(3-2*n)},Xn=(r,e,t)=>{let n=Li((t-r)/(e-r));return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2};var Ke=(r,e,t)=>r+(e-r)*t,jo=r=>()=>(r=r*16807%2147483647)/2147483647,jn=1/6,Dm=1/3,Um=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],Wo=new Uint8Array(512);{let r=jo(1234567),e=new Uint8Array(256);for(let t=0;t<256;t++)e[t]=t;for(let t=255;t>0;t--){let n=Math.floor(r()*(t+1));[e[t],e[n]]=[e[n],e[t]]}for(let t=0;t<512;t++)Wo[t]=e[t&255]}function sr(r,e,t){let n=(r+e+t)*Dm,i=Math.floor(r+n),s=Math.floor(e+n),a=Math.floor(t+n),o=(i+s+a)*jn,l=r-i+o,c=e-s+o,h=t-a+o,u,d,p,f,x,m;l>=c?c>=h?(u=1,d=0,p=0,f=1,x=1,m=0):l>=h?(u=1,d=0,p=0,f=1,x=0,m=1):(u=0,d=0,p=1,f=1,x=0,m=1):c<h?(u=0,d=0,p=1,f=0,x=1,m=1):l<h?(u=0,d=1,p=0,f=0,x=1,m=1):(u=0,d=1,p=0,f=1,x=1,m=0);let g=[[l,c,h,0,0,0],[l-u+jn,c-d+jn,h-p+jn,u,d,p],[l-f+2*jn,c-x+2*jn,h-m+2*jn,f,x,m],[l-1+3*jn,c-1+3*jn,h-1+3*jn,1,1,1]],v=0,_=i&255,y=s&255,A=a&255;for(let[w,L,B,N,G,O]of g){let I=.6-w*w-L*L-B*B;if(I>0){let V=Um[Wo[_+N+Wo[y+G+Wo[A+O]]]%12];I*=I,v+=I*I*(V[0]*w+V[1]*L+V[2]*B)}}return 32*v}var Nm=(r,e,t,n=4)=>{let i=.5,s=1,a=0;for(let o=0;o<n;o++)a+=i*sr(r*s,e*s,t*s),i*=.5,s*=2;return a};function Fm(r=1){let e=new Dr;e.add(new qe(new hi(24,16,24),new ci({color:new Ue(.5,.43,.35),side:Xt})));let t=(n,i,s,a)=>{let o=new qe(new Gn(n,i),new ci({color:new Ue(...s),side:Ot}));o.position.set(a[0]*r,a[1],a[2]),o.lookAt(0,0,0),e.add(o)};return t(8,6,[7,6.6,6],[-5,7,5]),t(1.4,10,[3.2,3.1,3],[-9,0,-1]),t(1.4,10,[2.4,2.3,2.2],[9,.5,-2]),t(7,12,[.03,.025,.02],[-8.5,0,6.5]),t(7,12,[.03,.025,.02],[8.5,0,6.5]),t(16,6,[.9,.8,.68],[0,-7.5,0]),e}var Zr=1,rn=1.13,$s=.96;var ld=1/.745;function Om(){let r=document.createElement("canvas");r.width=r.height=512;let e=r.getContext("2d"),t=jo(77);e.fillStyle="rgb(224,224,224)",e.fillRect(0,0,512,512);for(let i=0;i<5200;i++){let s=t()*512,a=20+t()*472,o=.35+t()*.9;e.fillStyle=`rgba(255,${238+t()*17|0},${222+t()*30|0},${(.3+t()*.45).toFixed(2)})`,e.beginPath(),e.ellipse(s,a,o,o*(.8+t()*.4),0,0,6.283),e.fill()}for(let i=0;i<900;i++){let s=t()*512,a=t()*512,o=.5+t()*1.4;e.fillStyle=`rgba(150,120,120,${(.12+t()*.18).toFixed(2)})`,e.beginPath(),e.arc(s,a,o,0,6.283),e.fill()}let n=new $i(r);return n.colorSpace=Gt,n.wrapS=n.wrapT=Ar,n.anisotropy=8,n}function Bm(r){let e=new pn(1,96,80,r>0?Math.PI/2:-Math.PI/2,Math.PI),t=e.attributes.position,n=e.attributes.normal,i=e.attributes.uv,s=t.count,a=new Float32Array(t.array),o=new Float32Array(s*3),l=new Float32Array(s*3),c=new Float32Array(s*3),h=new Float32Array(s*2),u=new Ue("#5e0610"),d=new Ue("#a80b1a"),p=new Ue("#cf3a1c"),f=new Ue,x=new Ue("#3d100b"),m=new Ue("#6a1f14"),g=new Ue("#9c4024"),v=new Ue;for(let y=0;y<s;y++){let A=a[y*3],w=a[y*3+1],L=a[y*3+2],B=at(.86,1,-w),N=Math.max(0,w-.9),G=1-B*.08-N*.5,O=A*Zr*G,I=w*rn+B*.13,V=L*$s*G;t.setXYZ(y,O,I,V);let D=A/Zr,Y=w/rn,q=L/$s,ee=Math.hypot(D,Y,q)||1;n.setXYZ(y,D/ee,Y/ee,q/ee),h[y*2]=.5+O/(2*Zr)*.965,h[y*2+1]=.5+I/(2*rn)*.965;let Z=Nm(A*2.6+3,w*2.6,L*2.6,3);f.copy(d).lerp(u,Li(.3-Z*.55+Math.max(0,-w)*.35)).lerp(p,Li((w-.5)*1.3)*.7),f.multiplyScalar(ld),l.set([f.r,f.g,f.b],y*3);let xe=sr(A*1.8+9,w*1.2,L*1.8),Ce=sr(A*3.6,w*3,L*3.6),X=.86+(xe*.05+Ce*.012),le=Math.abs(A)<.42?(.42-Math.abs(A))*.55:0;o.set([O*X+r*le*.38,I*X*.94,V*X*.95],y*3),v.copy(x).lerp(m,at(-.6,.1,xe)).lerp(g,at(.2,.9,xe)*.75),v.multiplyScalar(ld*(.94+sr(A*6,w*6,L*6)*.08)),c.set([v.r,v.g,v.b],y*3)}e.setAttribute("color",new Pt(l,3)),e.setAttribute("colorDry",new Pt(c,3)),e.setAttribute("photoUV",new Pt(h,2)),e.morphAttributes.position=[new Pt(o,3)];let _=new Et;return _.setIndex(e.index),_.setAttribute("position",new Pt(o,3)),_.computeVertexNormals(),e.morphAttributes.normal=[_.attributes.normal],e.userData.unit=a,e}function jc(r){let e=new Lt({vertexColors:!0,map:r,roughness:.34,clearcoat:.9,clearcoatRoughness:.14,sheen:.25,sheenColor:new Ue("#ff9b8a"),sheenRoughness:.5,side:Ot}),t={value:0},n={value:null},i={value:0},s={value:0};return e.userData={dry:t,photo:n,usePhoto:i,glow:s},e.onBeforeCompile=a=>{Object.assign(a.uniforms,{uDry:t,uPhoto:n,uUsePhoto:i,uGlow:s}),a.vertexShader=`attribute vec3 colorDry;
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
  totalEmissiveRadiance += photoLin * uGlow * usePhoto;`)},e.customProgramCacheKey=()=>"cascarup-skin-2",e}function zm(r,e){let n=new Gn(1,1,160,1),i=n.attributes.position;for(let s=0;s<=160;s++){let a=-Math.PI/2+s/160*Math.PI*2;for(let o=0;o<2;o++){let l=o===0?1:e,c=o*161+s,h=Math.sin(a),u=Math.cos(a),d=at(.86,1,-h),p=Math.max(0,h-.9),f=1-d*.08-p*.5;i.setXYZ(c,r*.002,(h*rn+d*.13)*l,u*$s*f*l)}}return n.computeVertexNormals(),n}function km(r){let e=new pn(1,72,54),t=e.attributes.position,n=e.attributes.uv,i=t.count,s=new Float32Array(i*3),a=new Ue("#6b3b1f"),o=new Ue("#8a5430"),l=new Ue("#2a1309"),c=new Ue;for(let p=0;p<i;p++){let f=t.getX(p),x=t.getY(p),m=t.getZ(p),g=r*f<0,v=f*.5,_=x*.8,y=m*.62,A=0;if(g){v*=.12;let L=.08*Math.sin(x*3.4);A=Math.exp(-Math.pow((y-L)/.06,2))*(1-Math.pow(Math.abs(x),6)),v+=r*A*.05}v+=sr(f*4,x*4,m*4)*.006,t.setXYZ(p,v,_,y),c.copy(a).lerp(o,at(-.2,.8,sr(f*3,x*3,m*3))).lerp(l,A*.9),s.set([c.r,c.g,c.b],p*3);let w=dd[g?"flat":"round"];n.setXY(p,w.cx+(g?-r:r)*m*w.rx,1-(w.cy-x*w.ry))}e.setAttribute("color",new Pt(s,3));let h=e.index.array,u=[],d=[];for(let p=0;p<h.length;p+=3)((t.getX(h[p])+t.getX(h[p+1])+t.getX(h[p+2]))*r<0?u:d).push(h[p],h[p+1],h[p+2]);return e.setIndex([...u,...d]),e.addGroup(0,u.length,0),e.addGroup(u.length,d.length,1),e.computeVertexNormals(),e}var $o=document.documentElement.dataset.root||"",dd={flat:{src:$o+"assets/bean/bohne-flach.webp",cx:.4859,cy:.488,rx:.4932*.95,ry:.4997*.96},round:{src:$o+"assets/bean/bohne-rund.webp",cx:.5061,cy:.5127,rx:.4911*.95,ry:.4889*.96}};function Gm(r){let e=new pn(1,48,36,r>0?Math.PI/2:-Math.PI/2,Math.PI),t=e.attributes.position;for(let n=0;n<t.count;n++){let i=t.getX(n),s=t.getY(n),a=t.getZ(n),o=1+sr(i*6,s*6,a*6)*.03;t.setXYZ(n,i*.58*o,s*.9*o,a*.7*o)}return e.computeVertexNormals(),e}var Vm=`
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
}`;function cd(r,e=null){let t=e||{uBloom:{value:0},uTime:{value:0},uTop:{value:0},uSrc0:{value:new R(0,9,0)},uSrc1:{value:new R(0,9,0)}};return r.userData.infuse=t,r.onBeforeCompile=n=>{Object.assign(n.uniforms,t),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
`+Vm).replace("#include <transmission_fragment>",rt.transmission_fragment.replace("material.attenuationColor = attenuationColor;",`
  {
    vec3 rd = normalize( vWorldPosition - cameraPosition );
    float dens = 0.0;
    // three looks along the line of sight (each two noises): five were the pot's heaviest cost, three look the same
    for ( int i = 0; i < 3; i ++ ) dens += steep( vWorldPosition + rd * ( .09 + float( i ) * .26 ) );
    dens /= 3.0;
    // clear water absorbs nothing; where the cascara has steeped, the same amber absorbs ever more
    material.attenuationColor = attenuationColor;
    material.attenuationDistance = attenuationDistance / max( dens, .002 );   // absorption grows with the density
  }`))},r.customProgramCacheKey=()=>"cascarup-infuse-7",r}var Xo=[[0,0],[.3,0],[.322,.012],[.33,.04],[.33,2.38],[.327,2.399],[.319,2.418],[.311,2.437],[.303,2.457],[.293,2.476],[.282,2.495],[.268,2.514],[.247,2.533],[.22,2.552],[.182,2.571],[.163,2.587],[.148,2.6],[.139,2.616],[.138,2.7],[.146,2.71],[.146,2.74],[.139,2.75],[.146,2.765],[.146,2.79],[.139,2.8],[.142,2.92],[.135,2.94],[.106,2.94],[.104,2.7],[.118,2.6]],hd=2.94,Hm=2.73,pd=17,Wm=.33,$m=1.16;function Ws(r,e=0,t=96){return new Br(r.map(([n,i])=>new _e(Math.max(0,n-e),i)),t)}var Xm=()=>Xo.slice(0,pd+1);function jm(r,e){for(let t=1;t<=pd;t++){let[n,i]=Xo[t-1],[s,a]=Xo[t];if(r>=i&&r<=a&&a>i)return Math.max(0,Ke(n,s,(r-i)/(a-i))-e)}return 0}function qm(){let r=Ws([[0,.236],[.14,.236],[.151,.231],[.156,.22],[.156,.168],[.15,.163],[.156,.158],[.156,.128],[.15,.123],[.156,.118],[.156,.088],[.15,.083],[.156,.078],[.156,.06],[.149,.056],[.153,.052],[.153,.004],[.147,0],[.135,0]],0,180),e=r.attributes.position;for(let t=0;t<e.count;t++){let n=e.getX(t),i=e.getY(t),s=e.getZ(t);if(i>.17&&i<.218){let a=Math.atan2(s,n),o=1+.02*Math.max(-.6,Math.min(.6,Math.cos(a*64)*2));e.setX(t,n*o),e.setZ(t,s*o)}}return r.computeVertexNormals(),r}var Zc=new Set,Jc=(r,e)=>{let t={};return Zc.add(t),(...n)=>{Zc.delete(t),e&&e(...n)}};function Ym(r){let e=Jc(r),t=new Yi().load(r,e,void 0,e);return t.colorSpace=Gt,t.anisotropy=8,t}var qc=2.38,Zm=()=>{let r=Wm+.004,e=qc*r/(1007/1312);return new ui(r,r,e,128,1,!0,-qc/2,qc)};function Jm(){let r=document.createElement("canvas");r.width=r.height=256;let e=r.getContext("2d"),t=e.createRadialGradient(128,128,0,128,128,128);return t.addColorStop(0,"rgba(58,33,22,.6)"),t.addColorStop(.35,"rgba(58,33,22,.3)"),t.addColorStop(1,"rgba(58,33,22,0)"),e.fillStyle=t,e.fillRect(0,0,256,256),new $i(r)}var Km={original:{label:$o+"assets/label/original.webp",syrup:"#74290d",surface:"#3c1306",props:"cascara"},cozy:{label:$o+"assets/label/cozy.webp",syrup:"#66230b",surface:"#341005",props:"spice"}};function ud(r){let e=new Xi,t=.018,n=1.6,i=.085,s=.022,a=90,o=(f,x)=>[Math.cos(f)*x,Math.sin(f)*x];for(let f=0;f<=a;f++){let x=f/a*n*Math.PI*2,[m,g]=o(x,i-s*x/Math.PI);f?e.lineTo(m,g):e.moveTo(m,g)}for(let f=a;f>=0;f--){let x=f/a*n*Math.PI*2,[m,g]=o(x,i-s*x/Math.PI-t);e.lineTo(m,g)}let l=new Or(e,{depth:r,steps:48,bevelEnabled:!1,curveSegments:4});l.translate(0,0,-r/2);let c=l.attributes.position,h=new Float32Array(c.count*3),u=new Ue("#7a3c1c"),d=new Ue("#a4592c"),p=new Ue;for(let f=0;f<c.count;f++){let x=c.getX(f),m=c.getY(f),g=c.getZ(f),v=Math.atan2(m,x),_=.5+.5*Math.sin(v*38+Math.sin(g*9)*.6),y=.5+.5*Math.sin(g*41+v*3)*Math.sin(g*17);p.copy(u).lerp(d,_*.45+y*.25),h.set([p.r,p.g,p.b],f*3)}return l.setAttribute("color",new Pt(h,3)),l.computeVertexNormals(),new qe(l,new mn({vertexColors:!0,roughness:.86}))}function Qm(){let r=new $t,e=new mn({color:"#4e2311",roughness:.9}),t=new mn({color:"#8a4f27",roughness:.75}),n=new Lt({color:"#7a4220",roughness:.3,clearcoat:.8,clearcoatRoughness:.25}),i=new pn(1,32,18),s=i.attributes.position;for(let o=0;o<s.count;o++){let l=s.getX(o),c=l>0?1-l*l*.82:1-l*l*.25,h=1+.06*Math.sin(l*23+s.getZ(o)*9);s.setXYZ(o,l,s.getY(o)*c*h,s.getZ(o)*c*h)}i.computeVertexNormals();for(let o=0;o<8;o++){let l=new $t;l.rotation.y=o/8*Math.PI*2+o%2*.05;let c=new qe(i,e);c.scale.set(.21,.07,.08),c.position.x=.19,c.rotation.z=-.1;let h=new qe(new pn(1,20,12),t);h.scale.set(.15,.03,.045),h.position.set(.2,.068,0);let u=new qe(new pn(1,20,14),n);u.scale.set(.06,.035,.04),u.position.set(.2,.075,0),l.add(c,h,u),r.add(l)}let a=new qe(new pn(.055,16,12),e);return a.scale.y=.9,r.add(a),r}var ef=[[0,0],[.95,0],[1.03,.03],[1.06,.1],[1.06,.9],[1.085,.955],[1.09,1],[1.045,1],[1.025,.96],[1.025,.1],[.97,.055],[0,.055]];function tf(r){let e=document.createElement("canvas");e.width=128,e.height=256;let t=e.getContext("2d"),n=jo(r);t.filter="blur(7px)",t.lineCap="round";for(let s=0;s<3;s++){t.strokeStyle=`rgba(255,255,255,${(.55+n()*.35).toFixed(2)})`,t.lineWidth=7+n()*9,t.beginPath();let a=44+n()*40,o=10+n()*16,l=1.6+n()*1.6,c=n()*6;for(let h=236;h>=20;h-=6){let u=(236-h)/216,d=a+Math.sin(u*l*Math.PI+c)*o*(.3+u);h===236?t.moveTo(d,h):t.lineTo(d,h)}t.stroke()}t.filter="none",t.globalCompositeOperation="destination-in";let i=t.createLinearGradient(0,0,0,256);return i.addColorStop(0,"rgba(0,0,0,0)"),i.addColorStop(.3,"#000"),i.addColorStop(.8,"#000"),i.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=i,t.fillRect(0,0,128,256),new $i(e)}var Yc=[0,.28,.45,.6,.765,.862,1],md=[2.1,1.9,1.8,2.1,2.5,2.2],Kc=md.reduce((r,e)=>r+e)*1e3,vn=md.reduce((r,e)=>[...r,r[r.length-1]+e],[0]).map((r,e,t)=>r/t[t.length-1]);function rr(r){let e=1;for(;e<vn.length-1&&r>vn[e];)e++;let t=vn[e-1],n=vn[e];return Yc[e-1]+(Yc[e]-Yc[e-1])*Math.min(1,Math.max(0,(r-t)/(n-t)))}function fd(r,{onFrame:e,photo:t,plantBox:n,gentle:i=!1}={}){t&&(Zr=1,rn=t.aspect||rn,$s=.94);let s=new Vo({canvas:r,antialias:!0,alpha:!1,powerPreference:"high-performance"}),a=Math.min(window.devicePixelRatio||1,2),o=0;s.setPixelRatio(a),s.transmissionResolutionScale=.3,s.debug.checkShaderErrors=!1,s.toneMapping=Eo,s.toneMappingExposure=1,s.localClippingEnabled=!0;let l=new Dr;l.background=new Ue("#E6D3B7");let c=new qr(s);l.environment=c.fromScene(Fm(-1),.03).texture,l.environmentIntensity=.9;let h=new Wt(24,1,.1,100);h.position.set(0,0,12.6);let u=new kr("#fff1df",1.5);u.position.set(4,6,6),l.add(u);let d=new kr("#ffe9da",1.3);d.position.set(-5,3,-6),l.add(d),l.add(new Us("#fff6ea","#9a6a48",.25));let p=new $t;l.add(p);let f=new $t;p.add(f);let x=Om(),m=new Lt({color:"#f0d9a2",roughness:.3,clearcoat:.8,clearcoatRoughness:.2,side:Xt,transparent:!0}),g=new Lt({color:"#e2ab82",roughness:.4,side:Ot,transparent:!0}),v=new Lt({color:"#f6e2a8",roughness:.14,transmission:.65,thickness:.45,ior:1.4,attenuationColor:new Ue("#e3b765"),attenuationDistance:.5,clearcoat:.7,clearcoatRoughness:.1,side:Ot,transparent:!0}),_=new Lt({color:"#efe4cc",roughness:.95,side:Ot,transparent:!0}),y=["flat","round"].map(j=>{let we=new Lt({vertexColors:!0,roughness:.42,clearcoat:.3,clearcoatRoughness:.35});return new Yi().load(dd[j].src,Jc(0,Me=>{Me.colorSpace=Gt,Me.anisotropy=8,Object.assign(we,{map:Me,vertexColors:!1,roughness:.5,clearcoat:.22,clearcoatRoughness:.4,emissiveMap:Me,emissiveIntensity:.3}),we.color.set("#ffffff"),we.emissive.set("#ffffff"),we.needsUpdate=!0})),we}),A=[],w=[-1,1].map(j=>{let we=new $t,Me=Bm(j),Oe=jc(x);A.push(Oe);let Le=new qe(Me,Oe);Le.morphTargetInfluences=[0];let ht=new qe(Me,m);ht.morphTargetInfluences=[0],ht.scale.setScalar(.965);let vt=new qe(zm(j,.955),g);we.add(Le,ht,vt);let mt=new qe(new pn(1,72,54,j>0?Math.PI/2:-Math.PI/2,Math.PI),v),Ut=new qe(Gm(j),_),It=new qe(km(j),y);return f.add(we,mt,Ut,It),{side:j,half:we,skin:Le,flesh:ht,cut:vt,pulp:mt,parch:Ut,bean:It}}),L=new mn({color:"#5d5230",roughness:.8}),B=new qe(new ui(.05,.085,.2,16),L);B.position.y=rn+.06,B.rotation.z=-.15,f.add(B);let N=new qe(new An(.17,.05,14,40),new mn({color:"#3b1d12",roughness:.85}));N.position.y=-rn+.115,N.rotation.x=Math.PI/2,N.scale.set(1,1,.7),f.add(N);let G=new qe(new Ci(.12,24),new mn({color:"#2a120b",roughness:.9,side:Ot}));G.position.y=-rn+.12,G.rotation.x=Math.PI/2,f.add(G);let O=-1.45,I=1,V=Jm(),D=new ci({map:V,transparent:!0,depthWrite:!1}),Y=(j,we)=>{let Me=new qe(new Gn(1,1),D.clone());return Me.rotation.x=-Math.PI/2,Me.scale.set(j,we,1),Me},q=new Lt({color:"#ffffff",roughness:.03,transmission:1,thickness:.3,ior:1.5,clearcoat:1,clearcoatRoughness:.02,attenuationColor:new Ue("#e4ebe2"),attenuationDistance:2.5,transparent:!0,side:Ot,depthWrite:!1}),ee=new $t;p.add(ee),q.side=Pi;let Z=q.clone(),xe=new qe(Ws(ef,0,128),Z),Ce=new An(.14,.034,12,32,Math.PI),H=[-1,1].map(j=>{let we=new qe(Ce,Z);return we.position.set(j*1.07,.8,0),we.rotation.z=-j*Math.PI/2,we}),X=new hn(new R(0,-1,0),0),le=cd(new Lt({color:"#ffffff",roughness:.05,transmission:1,thickness:.16,ior:1.33,attenuationColor:new Ue("#8f3612"),attenuationDistance:.14,clearcoat:1,clippingPlanes:[X]})),Te=le.userData.infuse,me=cd(le.clone(),Te);me.transparent=!0,me.clippingPlanes=[X];let he=new qe(Ws([[0,.055],[.97,.055],[1.02,.1],[1.02,1]],.01,128),le),ze=new qe(new Ci(1.012,96),new mn({color:"#dfe6e4",roughness:.55,metalness:0,transparent:!0,opacity:0,depthWrite:!1,envMapIntensity:.08})),P=new Ue("#dfe6e4"),b=new Ue("#4e1806");ze.rotation.x=-Math.PI/2;let k=new qe(new An(1.016,.007,8,128),new Lt({color:"#9a5a34",roughness:.4,transparent:!0,opacity:0,depthWrite:!1}));k.rotation.x=Math.PI/2;let z=Y(3,2.1);z.position.y=.004,ee.add(z,he,ze,k,xe,...H),he.renderOrder=ze.renderOrder=k.renderOrder=1;let M=[11,23,37,41].map(tf),C=jo(31),U=Array.from({length:12},(j,we)=>{let Me=new Ms(new Ur({map:M[we%4],color:"#ffffff",transparent:!0,depthWrite:!1,opacity:0}));return Me.userData={seed:we/12+C()*.05,x:(C()-.5)*1.3,z:(C()-.5)*.7,drift:(C()-.5)*.4},ee.add(Me),Me}),F=new qe(new An(1.012,.008,8,128),new Lt({color:"#ffffff",roughness:.1,clearcoat:1,transparent:!0,opacity:.55,depthWrite:!1}));F.rotation.x=Math.PI/2,ee.add(F),F.renderOrder=1;let $=new Lt({color:"#ffffff",roughness:.1,clearcoat:1,transparent:!0,opacity:0,depthWrite:!1}),K=[0,1].map(()=>{let j=new qe(new An(1,.009,8,72),$.clone());return j.rotation.x=Math.PI/2,j.visible=!1,p.add(j),j}),W=Ws(Xo,0,128),oe=Ws(Xm(),.02,96),Re=qm(),ue=Zm(),ie=new Lt({color:"#dcdcd6",metalness:1,roughness:.3,transparent:!0}),ne=["original","cozy"].map((j,we)=>{let Me=Km[j],Oe=new $t;p.add(Oe);let Le=new hn(new R(0,-1,0),0),ht=new Lt({color:"#ffffff",roughness:.05,transmission:1,thickness:.62,ior:1.45,attenuationColor:new Ue(Me.syrup),attenuationDistance:.3,clearcoat:1,clippingPlanes:[Le]}),vt=new qe(oe,ht),mt=new qe(new Ci(1,72),new Lt({color:Me.surface,roughness:.05,clearcoat:1}));mt.rotation.x=-Math.PI/2;let Ut=new qe(new An(1,.006,8,96),new Lt({color:"#a85a34",roughness:.15,transparent:!0,opacity:.35}));Ut.rotation.x=Math.PI/2;let It=new qe(Re,ie.clone()),sn=Ym(Me.label),Nt=new mn({map:sn,emissiveMap:sn,emissive:"#ffffff",emissiveIntensity:.1,roughness:.6,side:Ot}),Yn=new qe(ue,Nt);Yn.position.y=$m;let Yt=Y(1.3,1);return Yt.position.y=.004,Oe.add(Yt,vt,mt,Ut,new qe(W,q),Yn,It),vt.renderOrder=mt.renderOrder=Ut.renderOrder=1,Oe.scale.setScalar(I),{id:j,k:Me,g:Oe,fill:Le,syrup:vt,surface:mt,meniscus:Ut,cap:It,label:Yn,labelMat:Nt,tex:sn,shade:Yt,x:we?.55:-.55}}),se=new ui(.04,.03,1,28,1,!0);se.translate(0,-.5,0);let ge=new Lt({color:"#a8481f",roughness:.03,clearcoat:1,clearcoatRoughness:.02,transmission:.5,thickness:.1,ior:1.45,attenuationColor:new Ue("#7a260a"),attenuationDistance:.14,emissive:new Ue("#3a1004")}),Ie={value:99};ge.transparent=!0,ge.onBeforeCompile=j=>{j.uniforms.uFadeTop=Ie,j.fragmentShader=`uniform float uFadeTop;
`+j.fragmentShader.replace("#include <alphamap_fragment>",`#include <alphamap_fragment>
	diffuseColor.a *= smoothstep( uFadeTop, uFadeTop - 1.1, vWorldPosition.y );`)},ge.customProgramCacheKey=()=>"cascarup-stream-2";let de=ne.map(()=>{let j=new qe(se,ge);return j.visible=!1,p.add(j),j}),re=w.map((j,we)=>{let Me=new qe(j.skin.geometry,jc(x));return Me.morphTargetInfluences=[1],Me.material.userData.dry.value=1,Me.material.roughness=.58,Me.material.clearcoat=.16,Me.material.clearcoatRoughness=.4,Me.material.sheen=.4,Me.material.sheenColor.set("#c07a5c"),Me.scale.setScalar(.16),Me.visible=!1,p.add(Me),Me.material.transparent=!0,{m:Me,x:we?-1.2:-2.02,z:we?.9:.55,ry:we?2.4:-.6}}),ve=[{o:ud(1.2),x:1.36,y:.04,z:.3,r:[0,Math.PI/2-.35,0],s:.5},{o:ud(1.2),x:1.44,y:.105,z:.04,r:[0,Math.PI/2-.62,.05],s:.5},{o:Qm(),x:1.08,y:.045,z:.82,r:[.05,.4,-.04],s:.58}],Ee=j=>{let we=[];return j.traverse(Me=>{Me.material&&(Me.material.transparent=!0,we.push(Me.material))}),we};for(let j of ve)j.o.visible=!1,p.add(j.o),j.mats=Ee(j.o);let Ve=Y(1.5,.9);p.add(Ve);let be=new $t,He=jc(x);A.push(He);for(let j of w){let we=new qe(j.skin.geometry,He);we.morphTargetInfluences=[0],be.add(we)}let Ge=new qe(B.geometry,L);Ge.position.y=rn+.06,Ge.rotation.z=-.15,be.add(Ge);let ot=N.clone();be.add(ot);let dt=.15;be.scale.setScalar(dt),p.add(be);let lt=Y(.42,.42);p.add(lt);let S=Y(1,1);p.add(S);let ye=!1;t&&t.texture&&new Yi().load(t.texture,Jc(0,j=>{j.anisotropy=8;for(let we of A)we.userData.photo.value=j,we.userData.usePhoto.value=1,we.userData.glow.value=.72;ye=!0,Ge.visible=ot.visible=!1}));let Ne=w[1],ae={haut:new Rt,fleisch:new Rt,pergament:new Rt,bohne:new Rt};Ne.half.add(ae.haut),ae.haut.position.set(.62,.7,.34),Ne.pulp.add(ae.fleisch),ae.fleisch.position.set(.58,-.5,.4),Ne.parch.add(ae.pergament),ae.pergament.position.set(.3,.6,.3),Ne.bean.add(ae.bohne),ae.bohne.position.set(.28,-.42,.22);let Ae=1,pe=1,Fe=!0,ke=0,We=0,et=performance.now(),Xe=!0,Mt=0,Dt=null,Kt=null,qt=new R;function Kr(){if(Kt=null,!Dt||!n)return;let[j,we,Me,Oe]=n,Le=Dt,ht=Math.max(10,Math.min((Le.r-Le.l)/(Me-j),(Le.b-Le.t)/(Oe-we),Math.min(Ae,pe)*.2)),vt=(Le.l+Le.r)/2-(j+Me)/2*ht,mt=(Le.t+Le.b)/2-(we+Oe)/2*ht,Ut=pe/2/(Math.tan(h.fov*Math.PI/360)*12.6*ht);Kt={ox:(Ae/2-vt)/Ae,oy:(pe/2-mt)/pe,zoom:Ut}}function ar(j,we){Ae=j,pe=we,s.setSize(j,we,!1),yt=!0,h.aspect=j/we,Fe=j/we>1.05,h.fov=Fe?24:Ke(33,27,at(.56,.8,j/we)),h.updateProjectionMatrix(),ae.fleisch.position.set(.58,Fe?-.5:.55,.4),ae.pergament.position.set(.3,Fe?.6:.45,.3),Kr()}function Xs(j,we,Me,Oe,Le=0){h.clearViewOffset(),h.setViewOffset(Ae,pe,Ae*j,pe*we,Ae,pe),h.position.set(0,Oe+12.6*Me*Math.tan(Le),12.6*Me),h.rotation.set(-Le,0,0),h.updateProjectionMatrix()}let fi=.8,js=.58,qs=.1,Zo={1:.655,"-1":.675},Jo=O+hd*I,Ys=4.6,T=[{up:[.774,.804],pour:[.803,.812,.836,.846],fill:[.805,.843],cap:[.865,.9]},{up:[.776,.806],pour:[.82,.829,.852,.862],fill:[.822,.86],cap:[.872,.905]}],J={dried:[{at:[-1.38,2.25,.35],r:[1.1,2.1,.5]},{at:[-1.12,1.15,.35],r:[-1.3,-.4,-.3]}],fresh:{at:[-1.5,1.7,.2],r:[.2,.3,-.35]},spices:[{at:[1.32,2.2,.25],r:[.3,.9,.7]},{at:[1.15,1.05,.45],r:[-.4,1.9,-.5]},{at:[1.42,1.6,.55],r:[1.25,.2,.3]}]},te=new R,ce={skin:1.9,pulp:1.3,parch:.8,bean:.3};function Q(j,we){Mt+=we;let Me=Xn(.1,.24,j),Oe=at(.08,.2,j)*(1-at(.33,.41,j)),Le=at(.3,.43,j),ht=at(.31,.42,j),vt=Xn(.34,.45,j),mt=at(.47,.58,j),Ut=Xn(.48,.6,j),It=at(.575,.65,j),sn=Xn(.575,.655,j),Nt=Xn(.6,.65,j),Yn=at(.68,.76,j),Yt=at(.715,.775,j),or=Xn(.77,.79,j),gi=at(.772,.82,j),Rn=Xn(.79,.835,j),Ze=Xn(.875,.95,j),Zn=at(.875,.95,j),an=It*(1-Zn),Jn=Ke(Ke(Ke(0,-.84,It),.02,gi),-.06,Zn),Zs=.2*It*(1-gi),Kn=1-at(.04,.2,j),Di,St,fn;Fe?(Di=-.2*(1-Oe)-.03*Zn,St=0,fn=1-.04*Zn):(Di=0,St=Ke(Ke(-.21,-.03,Oe),-.07,an)-.17*gi*(1-Zn),fn=1+.3*Oe-.04*It*(1-gi)+.25*gi*(1-Zn)+.38*Zn);let Ui=Kt||(Fe?{ox:-.22,oy:.08,zoom:1.32}:{ox:0,oy:.26,zoom:2.02});Xs(Ke(Di,Ui.ox,Kn),Ke(St,Ui.oy,Kn),Ke(fn,Ui.zoom,Kn),Jn,Zs),p.rotation.y=-.35*Me*(1-vt),p.rotation.x=Ke(0,.13,Me)*(1-vt);let Qt=Fe?0:.85*at(.1,.2,j)*(1-at(.38,.46,j)),on=ye?0:(1-at(.06,.14,j))*Math.sin(Mt*.35)*.55;f.rotation.set(0,on,Qt);let en=.14*at(.006,.05,j)*(1-at(.12,.24,j));f.position.y=Math.sin(Mt*1.1)*.05*(1-Nt)*at(.02,.1,j)+en,ee.visible=sn>.001&&or<.999,ee.position.set(0,Ke(Ke(-7.5,O,sn),O+1.4,or),0),ee.rotation.z=.12*or;let Pn=1-at(.77,.788,j),Ko=Pn<.999;he.material=Ko?me:le,Z.opacity=Pn,le.opacity=me.opacity=Pn;let lr=Ke(fi,js,Yt),Qo=ee.position.y+lr;X.constant=Qo,ze.position.y=F.position.y=lr,k.position.y=fi,k.material.opacity=.5*Yt,Te.uBloom.value=Yn,Te.uTime.value=Mt,Te.uTop.value=Qo;let el=at(.7,.76,j);le.thickness=me.thickness=Ke(.16,.9,el),le.ior=me.ior=Ke(1.33,1.45,el),le.attenuationDistance=me.attenuationDistance=Ke(.14,Ke(.75,.48,Yt),el);let tl=at(.7,.77,j);ze.material.color.copy(P).lerp(b,tl),ze.material.opacity=Ke(.14,.96,tl)*Pn,F.material.opacity=Ke(.55,.2,tl)*Pn,k.material.opacity*=Pn;let th=at(.63,.69,j)*(1-at(.772,.79,j))*(.5+.5*Yt);for(let Se of U){let bt=Se.userData,pt=(Mt*.16+bt.seed)%1;Se.visible=th>.002,Se.position.set(bt.x*(1-pt*.3)+Math.sin(pt*3+bt.seed*12)*.1+bt.drift*pt,lr+.5+pt*(Fe?1.3:.75),bt.z),Se.scale.set(.42+pt*.3,.9+pt*.6,1),Se.material.opacity=th*.5*Math.sin(Math.PI*pt)}for(let Se of w){let bt=Se.side*Me;Se.half.position.x=Ke(bt*ce.skin,Se.side*.42,vt),Se.half.rotation.y=Se.side*Me*.35*(1-vt),Se.skin.morphTargetInfluences[0]=Se.flesh.morphTargetInfluences[0]=Ut;let pt=Se.skin.material;pt.userData.dry.value=mt,pt.roughness=Ke(.34,.58,mt),pt.clearcoat=Ke(Ke(.35,.9,at(.1,.22,j)),.16,mt),pt.clearcoatRoughness=Ke(.14,.4,mt),pt.sheen=Ke(.25,.4,mt),pt.sheenColor.set(mt>.5?"#c07a5c":"#ff9b8a");let In=at(0,.7,mt);Se.flesh.material.opacity=Se.cut.material.opacity=1-In,Se.flesh.visible=Se.cut.visible=Me>.002&&In<.99;let tn=1-ht;Se.pulp.position.x=bt*ce.pulp*(1-vt)*tn,Se.pulp.scale.set(Zr*.8,rn*.86,$s*.8).multiplyScalar(Ke(.55,1,tn)),Se.pulp.material.opacity=tn,Se.pulp.visible=ht<.995&&Me>.002,Se.parch.position.x=bt*ce.parch*(1-vt)*tn,Se.parch.scale.setScalar(Ke(.55,1,tn)),Se.parch.material.opacity=tn,Se.parch.visible=ht<.995&&Me>.002;let nn=Le,Qn=nn*nn,vi=Qn*(Fe?6+Se.side*.5:7.5+Se.side*.4),Js=Qn*(Fe?4.2:-.6)+Math.sin(nn*Math.PI)*.5+(Se.side>0?.1:-.1)*nn,Ks=Math.cos(-Qt),Qs=Math.sin(-Qt);if(Se.bean.position.set(bt*ce.bean+vi*Ks-Js*Qs,vi*Qs+Js*Ks,-Qn*2.2),Se.bean.rotation.set(nn*2.6*Se.side,nn*3.4,Me*Se.side*.2+nn*1.5),Se.bean.visible=Me>.002&&nn<.999,Nt>0){let cr=Zo[Se.side],Qr=Li((j-cr)/.022),_n=at(cr+.022,cr+.09,j),es=Math.sin(_n*Math.PI*1.6)*.08*(1-_n),Ni=Ke(Se.side*.42,Se.side*.3,Nt),Ln=Ke(0,O+1.62,Nt),Fi=0;Qr>0&&(Ln=Ke(Ln,O+fi-.04,Qr*Qr)),_n>0&&(Ni=Ke(Ni,Se.side*.48,_n)+es,Ln=Ke(Ln,O+qs+.12,_n),Fi=Ke(0,Se.side*.16,_n)),Se.half.position.set(Ni,Ln-f.position.y,Fi),Se.half.rotation.set(_n*1.2*Se.side,Nt*.35*Se.side+_n*.8,Se.side*(Nt*.3+_n*1.7)),Se.half.scale.setScalar(Ke(1,.32,Nt)*Math.max(.001,1-at(.72,.755,j))),Se.half.getWorldPosition(te),(Se.side>0?Te.uSrc1:Te.uSrc0).value.copy(te);let ts=K[Se.side>0?1:0],ea=Li((j-cr-.022)/.05);ts.visible=ea>0&&ea<1,ts.visible&&(ts.position.set(Ni,Qo+.004,0),ts.scale.setScalar(Ke(.06,.95,Math.sqrt(ea))),ts.material.opacity=.7*(1-ea))}else Se.half.position.y=0,Se.half.rotation.x=Se.half.rotation.z=0,Se.half.scale.setScalar(1);Se.half.visible=j<.755}B.visible=N.visible=G.visible=!ye&&Me<.02,Ie.value=Fe?99:Jo+1.45,ne.forEach((Se,bt)=>{let pt=T[bt],In=Xn(pt.up[0],pt.up[1],j);Se.g.visible=In>.001,Se.g.position.set(Se.x,Ke(-7.5,O,In),0),Se.g.rotation.y=Math.sin(Mt*.45+bt*1.7)*.08*at(.9,1,j);let tn=at(pt.fill[0],pt.fill[1],j),nn=Ke(.05,2.585,tn),Qn=Se.g.position.y+nn*I;Se.fill.constant=Qn,Se.syrup.visible=tn>.002,Se.surface.visible=Se.meniscus.visible=tn>.01,Se.surface.position.y=Se.meniscus.position.y=nn;let vi=jm(nn,.02);Se.surface.scale.setScalar(vi),Se.meniscus.scale.set(vi,vi,1);let[Js,Ks,Qs,cr]=pt.pour,Qr=at(Js,Ks,j),_n=at(Qs,cr,j),es=Ke(Ys,Qn,_n),Ni=Ke(Ys,Qn,Qr),Ln=de[bt];Ln.visible=es-Ni>.01,Ln.visible&&(Ln.position.set(Se.x+Math.sin(Mt*2.1+bt)*.004,es,0),Ln.scale.set(1,es-Ni,1));let Fi=Xn(pt.cap[0],pt.cap[1],j);Se.cap.visible=Fi>.001,Se.cap.position.y=Ke(hd+(Fe?1.6:.45),Hm,Fi),Se.cap.rotation.y=(1-Fi)*4,Se.cap.material.opacity=at(0,.35,Fi),Se.shade.material.opacity=.8*In});let nh=Rn*(1-Ze),nl=(Se,bt,pt,In,tn)=>{let nn=(1-Rn)*.6*Math.sign(pt.at[0]),Qn=Math.sin(Mt*.9+bt*1.9)*.05*nh,vi=Math.sin(Mt*.5+bt)*.25*nh;Se.position.set(Ke(pt.at[0]+nn,In[0],Ze),O+Ke(pt.at[1]+Qn,In[1],Ze),Ke(pt.at[2],In[2],Ze)),Se.rotation.set(Ke(pt.r[0],tn[0],Ze),Ke(pt.r[1]+vi,tn[1],Ze),Ke(pt.r[2],tn[2],Ze))};re.forEach((Se,bt)=>{Se.m.visible=Rn>.001,nl(Se.m,bt,J.dried[bt],[Se.x,.104,Se.z],[Math.PI/2*(bt?1:-1)*.92,Se.ry,0]),Se.m.material.opacity=Rn}),ve.forEach((Se,bt)=>{Se.o.visible=Rn>.001,nl(Se.o,3+bt,J.spices[bt],[Se.x,Se.y,Se.z],Se.r),Se.o.scale.setScalar(Se.s);for(let pt of Se.mats)pt.opacity=Rn}),Ve.visible=Ze>.001,Ve.position.set(1.34,O+.003,.45),Ve.material.opacity=.55*Ze,be.visible=Rn>.001,nl(be,2,J.fresh,[-1.6,dt*rn+.025,.05],[0,0,-.08]),He.transparent=!0,He.opacity=Rn,lt.visible=Ze>.001,lt.position.set(-1.6,O+.003,.05),lt.material.opacity=.7*Ze,S.position.set(0,-rn-.55,0),S.scale.set(2.5*(1+Me*.6*(1-vt)),1.7,1),S.material.opacity=.6*(1-Me*.35*(1-vt))*(1-at(.59,.65,j))*at(.03,.1,j),S.visible=j<.65}function fe(j,we,Me,Oe){return qt.set(we,Me,Oe),j.localToWorld(qt),qt.project(h),{x:(qt.x*.5+.5)*Ae,y:(-qt.y*.5+.5)*pe}}function De(){let j={};for(let[we,Me]of Object.entries(ae))j[we]=fe(Me,0,0,0);return j}function Be(){f.updateMatrixWorld();let j=fe(f,0,0,0),we=fe(f,-Zr,0,0),Me=fe(f,0,rn,0);return{x:j.x,y:j.y,rx:j.x-we.x,ry:j.y-Me.y}}let $e=0,Qe="",je=!1,Ye=0,tt=[],xt=0,yt=!0,At=j=>{a=Math.max(1,j),s.setPixelRatio(a)};function gt(j){if(!Xe)return;$e++;let we=j-et,Me=Math.min(.05,we/1e3);et=j,!je&&we<200&&(tt.push(we),tt.length===45&&(tt.sort((ht,vt)=>ht-vt)[22]>40&&a>1&&At(a*.8),tt=[]));let Oe=(ke-We)*(1-Math.pow(i?.02:9e-4,Me));i&&(Oe=Math.max(-.3*Me,Math.min(.3*Me,Oe))),We+=Oe,Math.abs(ke-Ye)>.25&&(We=ke),Ye=ke,Math.abs(ke-We)<1e-4&&(We=ke);try{Q(rr(We),Me),(!je||yt||j-xt>400)&&(s.render(l,h),xt=j,yt=!1),e?.(rr(We),De,Be)}catch(Le){Qe=String(Le&&Le.stack||Le).slice(0,300)}requestAnimationFrame(gt)}return{resize:ar,set background(j){l.background.set(j)},set progress(j){ke=Li(j)},set cover(j){je=!!j,je||s.render(l,h)},set frame(j){Dt=j,Kr(),Xe||(Q(rr(We),0),s.render(l,h))},get progress(){return We},jump(j){ke=We=Li(j),Q(rr(We),0),s.render(l,h),e?.(rr(We),De,Be)},start(){Xe||(Xe=!0,et=performance.now(),requestAnimationFrame(gt))},stop(){Xe=!1},begin(){et=performance.now(),requestAnimationFrame(gt)},async warm(){let j=performance.now();for(;Zc.size&&performance.now()-j<6e3;)await new Promise(Me=>setTimeout(Me,60));let we=We;for(let Me of[.12,.3,.45,.58,.66,.74,.776,.79,.83,.88,.95,1]){if(!document.documentElement.classList.contains("is-loading"))break;Q(Me,0);try{await s.compileAsync(l,h)}catch{}s.render(l,h),await new Promise(Oe=>requestAnimationFrame(Oe))}Q(rr(we),0),s.render(l,h)},tune(){if(!document.documentElement.classList.contains("is-loading"))return;let j=We,we=Math.min(a,1.25),Me=s.getContext(),Oe=new Uint8Array(4),Le=8,ht=vt=>{Q(vt,0);let mt=performance.now();return s.render(l,h),Me.readPixels(0,0,1,1,Me.RGBA,Me.UNSIGNED_BYTE,Oe),performance.now()-mt};for(let vt=0;vt<3;vt++){o=0;for(let mt of[.3,.66,.95])ht(mt),o=Math.max(o,Math.min(ht(mt),ht(mt),ht(mt)));if(o<=Le||a<=we)break;At(Math.max(we,a*Math.sqrt(Le/o)))}Q(rr(j),0),s.render(l,h)},labels:De,fruitBox:Be,get photoReady(){return ye},renderer:s,state:()=>({frames:$e,running:Xe,target:+ke.toFixed(3),progress:+We.toFixed(3),ratio:+a.toFixed(2),cost:+o.toFixed(1),lastError:Qe})}}var gd="http://www.w3.org/2000/svg",ct={ink:"58, 33, 22",glow:["#F7DDAE","#F1C28C","#E9AA79"],sun:["#F8E5BC","#F3D09A","#EDB57B","#E49862","#D87A47"],cloudTop:"#F4E4C8",cloudLow:"#E8AE86",ridge:["#E2AE86","#D49670","#BE8059","#9A7448","#77653B","#55492B"],cut:["#EDC09C","#E1AA84","#CF9670","#AE8A5D","#8B7A4E","#6A5C3A"],row:["#8A6C43","#665A34","#4B4127"],tree:["#A57250","#7E623E","#5C4E30"],berry:"#B3262A",berryDark:"#8E2B1E",roof:"#B4592A",wall:"#E9C9A0",window:"#F8D88E",door:"#5A3A26",soil:"#3A2116",soilCut:"#9C4B23",leaf:["#2F3B24","#3B4A2B","#485A31","#34432A"],vein:"#E0A86B",twig:"#3A2116",close:["#2E2617","#2A2215"],mist:"#F6E3C8",bird:"#3A2116"};function Qc(r){let e=r>>>0;return()=>(e=Math.imul(e,1664525)+1013904223>>>0)/4294967296}var E=r=>(Math.round(r*10)/10).toString();function qn(r,e=!1){let t=r.length;if(t<2)return"";let n=`M${E(r[0][0])} ${E(r[0][1])}`,i=e?t:t-1;for(let s=0;s<i;s++){let a=r[e?(s-1+t)%t:Math.max(0,s-1)],o=r[s],l=r[(s+1)%t],c=r[e?(s+2)%t:Math.min(t-1,s+2)];n+=`C${E(o[0]+(l[0]-a[0])/6)} ${E(o[1]+(l[1]-a[1])/6)} ${E(l[0]-(c[0]-o[0])/6)} ${E(l[1]-(c[1]-o[1])/6)} ${E(l[0])} ${E(l[1])}`}return e?`${n}Z`:n}var mi=(r,e,t)=>`M${E(r+t)} ${E(e)}a${E(t)} ${E(t)} 0 1 0 ${E(-2*t)} 0a${E(t)} ${E(t)} 0 1 0 ${E(2*t)} 0Z`,qo=(r,e,t,n)=>`M${E(r+t)} ${E(e)}a${E(t)} ${E(n)} 0 1 0 ${E(-2*t)} 0a${E(t)} ${E(n)} 0 1 0 ${E(2*t)} 0Z`;function eh(r,e,t,n,i,s){let o=[],l=[],c=.025+s()*.03,h=s()*6;for(let v=0;v<=28;v++){let _=v/28,y=Math.sin(Math.PI*Math.pow(_,.78))*(1-.18*_);_>.78&&(y*=1-Math.pow((_-.78)/.22,1.3)*.6),y*=n*(1+c*Math.sin(_*20+h)),o.push([_*t,-y]),l.push([_*t,y*(.92+.08*Math.sin(_*9+h))])}let u=Math.cos(i),d=Math.sin(i),p=([v,_])=>[r+v*u-_*d,e+v*d+_*u],f=qn([...o,...l.reverse()].map(p),!0),x=(s()-.5)*n*.25,m=v=>[v*t,Math.sin(Math.PI*v)*x],g=qn([.04,.3,.55,.8,.93].map(v=>p(m(v))));for(let v=1;v<=6;v++){let _=.1+v*.115,[y,A]=m(_),w=Math.sin(Math.PI*Math.pow(_,.78))*n*(1-.18*_)*.78;for(let L of[-1,1])g+=qn([[y,A],[y+w*.45,A+L*w*.55],[y+w*.95,A+L*w*.86]].map(p))}return{shape:f,veins:g}}var pi=(r,e)=>{for(let t=1;t<r.length;t++)if(r[t][0]>=e){let[n,i]=r[t-1],[s,a]=r[t];return i+(a-i)*(e-n)/(s-n)}return r[r.length-1][1]},Yo=(r,e)=>r.map(([t,n])=>[t,n+e+Math.sin(t*.013+e)*Math.abs(e)*.08]);function vd(r,e,t,n,i,s,a,o){let l="",c="";for(let h=t;h<n;h+=i*(1.55+a()*.35)){let u=pi(r,h)+e+Math.sin(h*.013+e)*Math.abs(e)*.08,d=i*(.85+a()*.3),p=s*(.8+a()*.4);l+=`M${E(h-d)} ${E(u)}A${E(d)} ${E(p)} 0 0 1 ${E(h+d)} ${E(u)}Z`,o&&a()<.45&&(c+=mi(h+(a()-.5)*d,u-p*(.3+a()*.4),Math.max(.8,i*.13)))}return{d:l,b:c}}function nf(r,e,t){let n=`M${E(r-t*.09)} ${E(e)}L${E(r-t*.04)} ${E(e-t*2.5)}L${E(r+t*.04)} ${E(e-t*2.5)}L${E(r+t*.09)} ${E(e)}Z`,i=qo(r,e-t*2.65,t*1.35,t*.42)+qo(r-t*.7,e-t*2.4,t*.78,t*.32)+qo(r+t*.72,e-t*2.45,t*.85,t*.34)+qo(r+t*.1,e-t*2.95,t*.7,t*.3);return n+i}function rf(r,e,t){let n=t*1.7,i=t,s=`M${E(r-n/2)} ${E(e)}V${E(e-i)}H${E(r+n/2)}V${E(e)}Z`,a=`M${E(r-n/2-t*.2)} ${E(e-i+t*.04)}L${E(r)} ${E(e-i-t*.62)}L${E(r+n/2+t*.2)} ${E(e-i+t*.04)}Z`,o=`M${E(r-t*.52)} ${E(e-i*.7)}h${E(t*.34)}v${E(t*.3)}h${E(-t*.34)}Z`,l=`M${E(r+t*.12)} ${E(e)}v${E(-t*.55)}h${E(t*.3)}v${E(t*.55)}Z`,c="",h="";for(let u=0;u<2;u++){let d=r+n/2+t*(.55+u*1.55),p=e-t*.36,f=t*1.3;c+=`M${E(d)} ${E(p)}h${E(f)}v${E(t*.1)}h${E(-f)}Z`;for(let x of[.08,.92])c+=`M${E(d+f*x-t*.03)} ${E(p+t*.1)}h${E(t*.06)}V${E(e)}h${E(-t*.06)}Z`;for(let x=0;x<9;x++)h+=mi(d+f*(.08+x*.105),p-t*.045,t*.055)}return{wall:s,roof:a,win:o,door:l,beds:c,cherries:h,glow:[r-t*.35,e-i*.55,t*.8]}}function _d(r,e,t,n){let i=t*.42,s=[];for(let c=0;c<=20;c++){let h=-1+2*c/20;s.push([r+h*t/2,e-i*Math.pow(Math.max(0,1-h*h),.7)-(c%2?i*.05:0)*(1-Math.abs(h))])}let a=`${qn(s)}L${E(r+t/2)} ${E(e)}L${E(r-t/2)} ${E(e)}Z`,o=["#B3262A","#C9452B","#8E2B1E","#A8321F","#6E2A1A"],l=o.map(()=>"");for(let c=0;c<46;c++){let h=n()*2-1,u=n()*Math.pow(Math.max(0,1-h*h),.7)*.92,d=Math.floor(n()*o.length);l[d]+=mi(r+h*t*.46,e-i*u-t*.02,t*(.035+n()*.018))}return{mound:a,cherries:l.map((c,h)=>`<path fill="${o[h]}" d="${c}"/>`).join("")}}function sf(r,e){let t=r*2.6,n=r*2.3,i=t/2,s=n,a="",o="",l="";return[[11,.55,.95,1.05,.32],[7,.95,.78,.7,.3]].forEach(([h,u,d,p,f],x)=>{for(let m=0;m<h;m++){let g=-Math.PI/2+(m-(h-1)/2)*(d*2.6/h)+(e()-.5)*.2,v=i+Math.cos(g)*r*.18,_=s-r*u*.45+Math.sin(g)*r*.12,y=r*p*(.7+e()*.35);o+=`M${E(i)} ${E(s-r*u*.3)}L${E(v)} ${E(_)}`,a+=`<path fill="${ct.leaf[(m+x)%4]}" d="${eh(v,_,y,y*f,g+(e()-.5)*.25,e).shape}"/>`,(m+x)%3===1&&(l+=mi(v+Math.cos(g)*r*.2,_+Math.sin(g)*r*.2+r*.06,r*.06)+mi(v+Math.cos(g)*r*.26+r*.05,_+Math.sin(g)*r*.2+r*.13,r*.055))}}),o=`M${E(i)} ${E(s)}L${E(i)} ${E(s-r*.5)}`+o,{w:t,h:n,svg:`<path fill="none" stroke="${ct.twig}" stroke-width="${E(r*.06)}" stroke-linecap="round" d="${o}"/>${a}<path fill="${ct.berry}" d="${l}"/>`}}function af(r,e){let t=r*1.6,n=r*1.4,i="";for(let s=0;s<7;s++){let a=t*(.2+s*.1),o=(e()-.5)*r*.9,l=n*(.15+e()*.4),c=r*.045;i+=`M${E(a-c)} ${E(n)}Q${E(a+o*.3)} ${E((n+l)/2)} ${E(a+o)} ${E(l)}Q${E(a+o*.3+c)} ${E((n+l)/2)} ${E(a+c)} ${E(n)}Z`}return{w:t,h:n,svg:`<path fill="${ct.leaf[1]}" d="${i}"/>`}}function of(r){let e=r*1.1,t=r*2.05,n=e/2,i=(a,o)=>`<path class="${o}" fill="#4A3424" d="M${E(n+a-r*.07)} ${E(t*.6)}h${E(r*.14)}l${E(r*.02)} ${E(t*.38)}h${E(-r*.18)}z"/>`,s=(a,o)=>`<path class="${o}" fill="#9C4B23" d="M${E(n+a-r*.05)} ${E(t*.3)}h${E(r*.1)}l${E(r*.02)} ${E(t*.27)}h${E(-r*.13)}z"/>`;return{w:e,h:t,svg:i(-r*.09,"dio__leg dio__leg--b")+s(r*.16,"dio__arm dio__arm--b")+`<path fill="#A8743E" d="M${E(n-r*.52)} ${E(t*.27)}h${E(r*.34)}l${E(-r*.04)} ${E(t*.3)}h${E(-r*.26)}z"/><path fill="none" stroke="#7A5128" stroke-width="${E(r*.03)}" d="M${E(n-r*.5)} ${E(t*.36)}h${E(r*.3)}M${E(n-r*.48)} ${E(t*.45)}h${E(r*.28)}"/><path fill="#B4592A" d="M${E(n-r*.2)} ${E(t*.28)}h${E(r*.4)}l${E(r*.03)} ${E(t*.34)}h${E(-r*.46)}z"/>`+i(r*.09,"dio__leg dio__leg--f")+`<circle fill="#8A5A3C" cx="${E(n+r*.02)}" cy="${E(t*.2)}" r="${E(r*.14)}"/><ellipse fill="#D9B27A" cx="${E(n+r*.02)}" cy="${E(t*.13)}" rx="${E(r*.34)}" ry="${E(r*.07)}"/><path fill="#C99E62" d="M${E(n-r*.12)} ${E(t*.13)}q${E(r*.14)} ${E(-r*.26)} ${E(r*.28)} 0z"/>`+s(-r*.16,"dio__arm dio__arm--f")}}function lf(r){let e=r*1.1,t=r*2.05,n=e/2,i=(a,o)=>`<path class="${o}" fill="#4B4127" d="M${E(n+a-r*.07)} ${E(t*.6)}h${E(r*.14)}l${E(r*.02)} ${E(t*.38)}h${E(-r*.18)}z"/>`,s=i(-r*.09,"dio__leg dio__leg--b")+`<path fill="#E2CBA2" d="M${E(n-r*.2)} ${E(t*.28)}h${E(r*.4)}l${E(r*.03)} ${E(t*.34)}h${E(-r*.46)}z"/>`+i(r*.09,"dio__leg dio__leg--f")+`<g transform="rotate(-42 ${E(n-r*.24)} ${E(r*.75)})"><rect fill="#B98E5A" x="${E(n-r*.62)}" y="${E(r*.54)}" width="${E(r*.76)}" height="${E(r*.42)}" rx="${E(r*.2)}"/><path fill="none" stroke="#8C6A3E" stroke-width="${E(r*.035)}" stroke-linecap="round" d="M${E(n-r*.45)} ${E(r*.58)}V${E(r*.92)}"/><path fill="#B98E5A" d="M${E(n-r*.58)} ${E(r*.72)}l${E(-r*.15)} ${E(-r*.07)}v${E(r*.2)}z"/></g><circle fill="#7E5236" cx="${E(n+r*.02)}" cy="${E(t*.2)}" r="${E(r*.14)}"/><path fill="#6A5C3A" d="M${E(n-r*.13)} ${E(t*.19)}C${E(n-r*.13)} ${E(t*.08)} ${E(n+r*.17)} ${E(t*.08)} ${E(n+r*.17)} ${E(t*.19)}Z"/><path fill="#55492B" d="M${E(n+r*.1)} ${E(t*.185)}h${E(r*.24)}q${E(r*.02)} ${E(r*.05)} ${E(-r*.04)} ${E(r*.05)}h${E(-r*.2)}z"/><path class="dio__arm dio__arm--f" fill="#CDB089" d="M${E(n+r*.11)} ${E(t*.3)}h${E(r*.1)}l${E(r*.02)} ${E(t*.27)}h${E(-r*.13)}z"/>`;return{w:e,h:t,svg:`<g transform="matrix(-1 0 0 1 ${E(e)} 0)">${s}</g>`}}function cf(r,e,t){let n=t*.16,i=n/2;return`M${E(r-t/2+i)} ${E(e)}H${E(r+t/2-i)}A${E(i)} ${E(i)} 0 0 0 ${E(r+t/2-i)} ${E(e-n)}H${E(r-t/2+i)}A${E(i)} ${E(i)} 0 0 0 ${E(r-t/2+i)} ${E(e)}Z`+mi(r-t*.18,e-n-t*.03,t*.13)+mi(r+t*.06,e-n-t*.07,t*.17)+mi(r+t*.27,e-n-t*.01,t*.1)}var xd=.74,hf=[{id:"sky",depth:.06,fly:[0,-.05,.12],flyNarrow:[0,-.02,.1]},{id:"far",depth:.16,fly:[0,.16,-.03],flyNarrow:[0,.04,.16]},{id:"mid",depth:.3,fly:[0,.28,-.01],flyNarrow:[0,.08,.3]},{id:"near",depth:.46,fly:[0,.42,.02],flyNarrow:[0,.12,.45]},{id:"soil",depth:.62,fly:[0,.6,.04],flyNarrow:[0,.16,.6]},{id:"branch",depth:.82,fly:[.55,-.06,.3],flyNarrow:[.5,-.08,.3]},{id:"close",depth:1,fly:[.8,.15,.7],flyNarrow:[.8,.15,.7]}],Jr=null;function uf(r,e,t){if(!Jr){Jr=document.createElement("canvas"),Jr.width=Jr.height=128;let n=Jr.getContext("2d"),i=n.createImageData(128,128),s=Qc(99);for(let a=0;a<i.data.length;a+=4){let o=s(),l=o>.5,c=Math.abs(o-.5)*2;i.data[a]=l?255:58,i.data[a+1]=l?246:33,i.data[a+2]=l?232:22,i.data[a+3]=Math.round(c*c*30)}n.putImageData(i,0,0)}r.save(),r.globalCompositeOperation="source-atop",r.fillStyle=r.createPattern(Jr,"repeat"),r.fillRect(0,0,e,t),r.restore()}var df={sky:1,far:1,mid:1.5,near:1.5,soil:1.5,branch:2,close:1},pf=(r,e)=>r==="branch"?Math.min(e,3):Math.min(e,e>2?2:df[r]||1);function yd(r,{only:e}={}){let t=O=>!e||e.includes(O);r.innerHTML="";let n=document.createElement("div");n.className="dio__ground",r.append(n),e&&(n.style.display="none");let i=hf.map((O,I)=>{let V=document.createElement("div");V.className=`dio__layer dio__layer--${O.id}`,V.style.setProperty("--i",I);let D=document.createElement("div");D.className="dio__rise";let Y=document.createElement("canvas");Y.className="dio__paint";let q=document.createElementNS(gd,"svg");q.setAttribute("aria-hidden","true"),q.style.display="none";let ee=document.createElement("div");ee.className="dio__fx";let Z=document.createElement("div");return Z.className="dio__fx",D.append(Z,Y,q,ee),V.append(D),r.append(V),t(O.id)||(V.style.display="none"),{...O,wrap:V,paint:Y,svg:q,fx:ee,back:Z,tf:""}}),s=Object.fromEntries(i.map(O=>[O.id,O])),a="",o=0,l=0,c=0,h=0,u=[],d=null,p=null,f=0,x=-1,m=null,g=[],v,_=new Promise(O=>{v=O}),y=(O,I,V,D,Y,q,ee,Z="",xe=!1)=>{let Ce=document.createElement("div");return Ce.className=I,Ce.style.cssText=`left:${E(V)}px;top:${E(D)}px;width:${E(Y)}px;height:${E(q)}px;${Z}`,Ce.innerHTML=ee?`<svg viewBox="0 0 ${E(Y)} ${E(q)}" width="${E(Y)}" height="${E(q)}" aria-hidden="true">${ee}</svg>`:"",(xe?O.back:O.fx).append(Ce),g.push(I==="dio__bird"?Ce.firstElementChild:Ce),Ce};function A(O,I,V,D,Y){let q=[O.x,O.y,O.rx,I,V,D,Y&&Y.top].map(ie=>Math.round(+ie||0)).join(",");if(q===a||!I||!V||!O.rx)return;a=q;for(let ie of i)ie.fx.innerHTML="",ie.back.innerHTML="";g=[],x=-1,u=[],d=null,p=null;let{x:ee,y:Z}=O,xe=O.rx,Ce=O.ry||O.rx*1.27,H=xe/xd,X=Ce/xd,le=Qc(1712),Te=(ie,ne,se,ge)=>`<filter id="${ie}" x="-10%" y="-30%" width="120%" height="170%"><feDropShadow dx="0" dy="${ne}" stdDeviation="${se}" flood-color="rgb(${ct.ink})" flood-opacity="${ge}"/></filter>`,me={},he=V+20,ze=Y?Y.bottom+34:V*.7,P=(ie,ne)=>D||!Y||ie>Y.right+40||ne>ze+8,b=ie=>`<clipPath id="${ie}"><path d="M${E(Y?Y.right+40:0)} -60H${E(I+60)}V${E(V+60)}H-60V${E(ze+8)}H${E(Y?Y.right+40:0)}Z"/></clipPath>`,k=ee+H*(D?.1:.28),z=Z+X*(D?.12:.18),M=H*(D?2.2:2.6);{let ie=Math.max(I,V)*(D?.75:.62);me.sky=`<defs>${Te("dsky",3,6,.16)}<radialGradient id="glow" cx="${E(k)}" cy="${E(z)}" r="${E(ie)}" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${ct.glow[0]}"/><stop offset=".22" stop-color="${ct.glow[1]}" stop-opacity=".9"/><stop offset=".48" stop-color="${ct.glow[2]}" stop-opacity=".42"/><stop offset="1" stop-color="${ct.glow[2]}" stop-opacity="0"/></radialGradient></defs><radialGradient id="sund" cx=".42" cy=".38" r=".7"><stop offset="0" stop-color="#FCEFD2"/><stop offset=".45" stop-color="#F6D7A2"/><stop offset="1" stop-color="#ECB077"/></radialGradient><linearGradient id="sky" x1="0" y1="0" x2="0" y2="${E(Z+X*1.3)}" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#E6D3B7" stop-opacity="0"/><stop offset=".55" stop-color="#EDCDA6" stop-opacity=".5"/><stop offset="1" stop-color="#EBBE8F" stop-opacity=".75"/></linearGradient><rect width="${I}" height="${V}" fill="url(#sky)"/><rect width="${I}" height="${V}" fill="url(#glow)"/><path filter="url(#dsky)" fill="url(#sund)" d="${mi(k,z,M)}"/>`;let ne=M*1.75;y(s.sky,"dio__halo",k-ne,z-ne,ne*2,ne*2,`<defs><radialGradient id="halo"><stop offset=".5" stop-color="#FBE3B8" stop-opacity=".55"/><stop offset="1" stop-color="#FBE3B8" stop-opacity="0"/></radialGradient></defs><circle cx="${E(ne)}" cy="${E(ne)}" r="${E(ne)}" fill="url(#halo)"/><circle cx="${E(ne)}" cy="${E(ne)}" r="${E(M*1.13)}" fill="none" stroke="#FBE8C4" stroke-opacity=".75" stroke-width="${E(Math.max(1.5,M*.022))}"/><circle cx="${E(ne)}" cy="${E(ne)}" r="${E(M*1.3)}" fill="none" stroke="#FBE8C4" stroke-opacity=".4" stroke-width="${E(Math.max(1,M*.014))}"/>`,"",!0),(D?[[I*.2,Z-X*1.05,H*1.7],[I*.82,Z-X*1.5,H*1.3]]:[[ee-H*3.1,Z-X*1.2,H*2],[ee+H*2.75,Math.max(Z-X*1.4,150),H*1.35],[ee-H*1.2,Math.max(Z-X*2.1,130),H*1.1]]).forEach(([de,re,ve],Ee)=>{let Ve=ve*.5,be=`cg${Ee}`;y(s.sky,"dio__cloud",de-ve*.6,re-Ve,ve*1.2,Ve+12,`<defs><linearGradient id="${be}" x1="0" y1="0" x2="0" y2="1"><stop offset=".35" stop-color="${ct.cloudTop}"/><stop offset="1" stop-color="${ct.cloudLow}"/></linearGradient>${Te(`${be}s`,3,4,.14)}</defs><path filter="url(#${be}s)" fill="url(#${be})" d="${cf(ve*.6,Ve,ve)}"/>`,`--drift:${E((Ee%2?-1:1)*H*1.5)}px;--dur:${22+Ee*6}s;--delay:${-Ee*7}s`)});let ge=D?3:5,Ie=Math.max(D?96:160,Z-X*1.9);for(let de=0;de<ge;de++){let re=H*(D?.26:.22)*(1-de*.06);y(s.sky,"dio__bird",I*1.04,Ie+de*H*.22+de%2*H*.12,re*2,re,`<path fill="none" stroke="${ct.bird}" stroke-width="${E(Math.max(1.2,re*.12))}" stroke-linecap="round" stroke-linejoin="round" d="M${E(re*.05)} ${E(re*.55)}Q${E(re*.55)} ${E(re*.05)} ${E(re)} ${E(re*.62)}Q${E(re*1.45)} ${E(re*.05)} ${E(re*1.95)} ${E(re*.55)}"/>`,`--fly:${E(-I*1.25)}px;--rise:${E(-X*(.3+de*.05))}px;--dur:${26+de*1.6}s;--delay:${E(de*.9+2.5)}s;--flap:${E(.55+de*.07)}s`)}}let C=(ie,ne)=>{let se=ie/(ne-1),ge=he-(Z+X*.2),Ie=D?Z+X*.2+ge*(.02+se*.62):Z+X*(.1+se*1.6),de=D?Z+X*.2+ge*(.12+se*.62):Math.max(ze,Z+X*.9)+se*(V-Math.max(ze,Z+X*.9))*.78,re=D?ge*(.1-se*.055):X*(.62-se*.38),ve=[le()*6.3,le()*6.3,le()*6.3],Ee=[1.3+le()*.8,3.2+le()*1.4,7+le()*3],Ve=[];for(let be=0;be<=64;be++){let He=-60+(I+120)*be/64,Ge=Math.min(1,Math.max(0,He/I)),ot=de+(Ie-de)*Ge*Ge*(3-2*Ge),dt=ot-re*(.55*Math.sin(Ge*Ee[0]*Math.PI+ve[0])+.3*Math.sin(Ge*Ee[1]*Math.PI+ve[1])+.15*Math.sin(Ge*Ee[2]*Math.PI+ve[2]));!D&&Y&&(dt+=Math.min(1,Math.max(0,(Y.right+220-He)/220))*Math.max(0,ze+re*1.1-ot)),Ve.push([He,dt])}return{crest:Ve,d:`${qn(Ve)}L${E(I+60)} ${E(he)}L-60 ${E(he)}Z`,u:se}},U=Array.from({length:6},(ie,ne)=>C(ne,6)),F=(ie,ne,se,ge)=>`<path fill="none" stroke="${ct.cut[ge]}" stroke-width="${E(1.1+ge*.25)}" stroke-linecap="round" stroke-opacity=".85" d="${Array.from({length:se},(Ie,de)=>qn(Yo(ie,ne*(de+1)))).join("")}"/>`,$=(ie,ne="")=>`<path filter="url(#dr${ie})" fill="${ct.ridge[ie]}" d="${U[ie].d}"/>${ne}`,K=ie=>ie.map(ne=>Te(`dr${ne}`,2+ne,4+ne,.14+ne*.03)).join(""),W=-20,oe=I+20,Re=(ie,ne,se,ge)=>{let Ie=Yo(ie,ne-se),de=Yo(ie,ne+se).reverse();return`<defs><linearGradient id="mg${ge}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${ct.mist}" stop-opacity="0"/><stop offset=".5" stop-color="${ct.mist}" stop-opacity=".55"/><stop offset="1" stop-color="${ct.mist}" stop-opacity="0"/></linearGradient></defs><path fill="url(#mg${ge})" d="${qn([...Ie,...de],!0)}"/>`};me.far=`<defs>${K([0,1])}</defs>`+$(0)+$(1,F(U[1].crest,X*.075,4,1));let ue=(ie,ne,se,ge,Ie,de,re)=>{let ve=ne.map(([,be])=>be),Ee=Math.min(...ve)+se-ge*1.3,Ve=Math.max(...ve)+se+ge*1.3;y(ie,"dio__mist",-I*.1,Ee,I*1.2,Ve-Ee,`<g transform="translate(${E(I*.1)} ${E(-Ee)})">${Re(ne,se,ge,Ie)}</g>`,`--drift:${E(de)}px;--dur:${re}s`)};ue(s.far,U[1].crest,X*.05,X*(D?.14:.2),0,H*.7,28);{let ie=U[2].crest,ne=U[3].crest,se=$(2,F(ie,X*.085,5,2)),ge="",Ie=D?[.1,.34,.7,.93]:[.52,.63,.78,.9,.97];for(let ye of Ie){let Ne=I*ye+(le()-.5)*H*.4,ae=pi(ie,Ne)+X*.12,Ae=H*(D?.3:.26)*(.8+le()*.4);P(Ne,ae-Ae*3)&&(ge+=nf(Ne,ae,Ae))}se+=`<path fill="${ct.tree[0]}" d="${ge}"/>`+$(3);let de="",re="";for(let ye=0;ye<4;ye++){let Ne=X*(.12+ye*.13),ae=H*(D?.085:.075)*(1+ye*.12),Ae=vd(ne,Ne,W,oe,ae,ae*.62,le,ye>1);de+=Ae.d,re+=Ae.b}se+=`<g${D?"":' clip-path="url(#free3)"'}><path fill="${ct.row[0]}" d="${de}"/><path fill="${ct.berry}" d="${re}"/></g>`;let ve=D?I*.2:Math.max(Y?Y.right+H*1.4:I*.6,ee-H*2.6),Ee=H*(D?.3:.28),Ve=rf(ve,pi(ne,ve)+X*.1,Ee);se+=`<path fill="${ct.tree[1]}" d="${Ve.beds}"/><path fill="${ct.berry}" d="${Ve.cherries}"/>`;let be=H*(D?.5:.42),He=of(be),Ge=D?I*.08:Math.max(Y?Y.right+60:I*.45,ve-Ee*1.5),ot=D?I*.44:Math.min(I*.95,ee+H*1.4);d={el:y(s.near,"dio__farmer",0,0,He.w,He.h,`<g class="dio__farmer-body">${He.svg}</g>`),crest:U[4].crest,dy:X*.12,from:Ge,to:ot,w:He.w,h:He.h,face:0};let dt=lf(be*.78),lt=D?I*.5:Math.max(Y?Y.right+H*1.2:I*.5,ve+Ee*1.1),S=D?I*.68:Math.min(I*.92,ee-H*.25);S-lt>H*.8&&(p={el:y(s.mid,"dio__farmer dio__farmer--man",0,0,dt.w,dt.h,`<g class="dio__farmer-body">${dt.svg}</g>`),crest:ne,dy:X*.08,from:lt,to:S,w:dt.w,h:dt.h,face:0,left:!0,pace:7,shift:.37});for(let[ye,Ne]of D?[[ve+Ee*5.2,Ee*2.2],[ve-Ee*2.4,Ee*1.6]]:[[ve-Ee*2.6,Ee*2.1],[ve+Ee*5.4,Ee*2.6]]){let ae=pi(ne,ye)+X*.12;if(!P(ye-Ne/2,ae-Ne*.4))continue;let Ae=_d(ye,ae,Ne,le);u.push([ye,ae,Ne,ne]),se+=`<path filter="url(#dheap)" fill="#7A2418" d="${Ae.mound}"/>${Ae.cherries}`}me.mid=`<defs>${K([2,3])}${Te("dheap",3,3,.3)}<radialGradient id="wglow"><stop offset="0" stop-color="${ct.window}" stop-opacity=".45"/><stop offset="1" stop-color="${ct.window}" stop-opacity="0"/></radialGradient>${D?"":b("free3")}</defs>${se}`,ue(s.mid,ne,-X*(D?.12:.3),X*(D?.1:.13),1,-H*.6,36)}{let ie="";for(let se of[4,5]){ie+=$(se);let ge="",Ie="";for(let de=0;de<(se===4?3:2);de++){let re=X*(.14+de*.17),ve=H*(D?.11:.1)*(1+de*.15)*(se===5?1.25:1),Ee=vd(U[se].crest,re,W,oe,ve,ve*.62,le,!0);ge+=Ee.d,Ie+=Ee.b}ie+=`<g${D?"":` clip-path="url(#free${se})"`}><path fill="${ct.row[se-3]}" d="${ge}"/><path fill="${ct.berryDark}" d="${Ie}"/></g>`}me.near=`<defs>${K([4,5])}${D?"":b("free4")+b("free5")}</defs>${ie}`;{let se=D?I*.78:Math.max(Y?Y.right+H*2.2:I*.55,ee-H*1.6),ge=H*(D?1.25:1.15),Ie=pi(U[4].crest,se)+X*.2;if(P(se-ge/2,Ie-ge*.4)){let de=_d(se,Ie,ge,le);u.push([se,Ie,ge,U[4].crest]),me.near+=`<defs>${Te("dheap2",4,4,.32)}</defs><path filter="url(#dheap2)" fill="#7A2418" d="${de.mound}"/>${de.cherries}`}}for(let se of[d,p]){if(!se)continue;let ge=[[se.from,se.to]];for(let[de,re,ve]of u){let Ee=pi(se.crest,de)+se.dy,Ve=Ee-se.h;if(re<Ve||re-ve*.45>Ee)continue;let be=de-ve/2-se.w*.7,He=de+ve/2+se.w*.7;ge=ge.flatMap(([Ge,ot])=>He<=Ge||be>=ot?[[Ge,ot]]:[[Ge,be],[He,ot]].filter(([dt,lt])=>lt-dt>0))}let Ie=ge.reduce((de,re)=>re[1]-re[0]>de[1]-de[0]?re:de,[0,0]);se.from=Ie[0],se.to=Ie[1],se.to-se.from<se.w*1.5&&(se.el.remove(),se===d?d=null:p=null)}(D?[.06,.34,.62]:[.56,.67,.8,.93]).forEach((se,ge)=>{let Ie=I*se+(le()-.5)*H*.3,de=pi(U[5].crest,Ie)+X*.2,re=H*(D?.5:.46)*(.85+le()*.3);if(!P(Ie,de-re*2))return;let ve=sf(re,le);y(s.near,"dio__sway",Ie-ve.w/2,de-ve.h,ve.w,ve.h,ve.svg,`--dur:${E(4.2+ge*.7)}s;--delay:${E(-ge*1.3)}s;--deg:${E(1.6+le())}deg`)})}{let ie=V-Math.max(D?30:40,V*(D?.05:.075)),ne=[];for(let Ie=0;Ie<=48;Ie++){let de=-60+(I+120)*Ie/48;ne.push([de,ie-Math.sin(de*.006+1)*X*.09-Math.sin(de*.019)*X*.04])}let se=`${qn(ne)}L${E(I+60)} ${E(V+50)}L-60 ${E(V+50)}Z`;(D?[.12,.45,.7,.93]:[.5,.6,.71,.83,.95]).forEach((Ie,de)=>{let re=I*Ie+(le()-.5)*H*.4,ve=pi(ne,re)+3,Ee=H*(D?.42:.38)*(.8+le()*.4);if(!P(re,ve-Ee))return;let Ve=af(Ee,le);y(s.soil,"dio__sway",re-Ve.w/2,ve-Ve.h,Ve.w,Ve.h,Ve.svg,`--dur:${E(2.8+de*.5)}s;--delay:${E(-de*.9)}s;--deg:${E(3+le()*2)}deg`)}),me.soil=`<defs>${Te("dsoil",7,10,.34)}</defs><path filter="url(#dsoil)" fill="${ct.soil}" d="${se}"/><path fill="none" stroke="${ct.soilCut}" stroke-width="1.8" stroke-linecap="round" stroke-dasharray=".5 10" d="${[1,2,3].slice(0,D?2:3).map(Ie=>qn(Yo(ne,X*.09*Ie))).join("")}"/>`}{let ie=[[I+H*.7,Z-X*(D?.05:.2)],[ee+H*1.7,Z+X*.95],[ee+xe*.05,Z+Ce*.97],[ee-H*.75,Z+X*.86],[ee-H*1.2,Z+X*.64]],ne=[],se=[ie[0],...ie,ie[ie.length-1]];for(let ae=1;ae<se.length-2;ae++)for(let Ae=0;Ae<20;Ae++){let pe=Ae/20,Fe=se[ae-1],ke=se[ae],We=se[ae+1],et=se[ae+2];ne.push([0,1].map(Xe=>.5*(2*ke[Xe]+(-Fe[Xe]+We[Xe])*pe+(2*Fe[Xe]-5*ke[Xe]+4*We[Xe]-et[Xe])*pe*pe+(-Fe[Xe]+3*ke[Xe]-3*We[Xe]+et[Xe])*pe*pe*pe)))}ne.push(ie[ie.length-1]);let ge=[0];for(let ae=1;ae<ne.length;ae++)ge.push(ge[ae-1]+Math.hypot(ne[ae][0]-ne[ae-1][0],ne[ae][1]-ne[ae-1][1]));let Ie=ge[ge.length-1],de=ae=>{let Ae=ae*Ie,pe=1;for(;pe<ge.length-1&&ge[pe]<Ae;)pe++;let Fe=(Ae-ge[pe-1])/Math.max(1e-6,ge[pe]-ge[pe-1]);return[ne[pe-1][0]+(ne[pe][0]-ne[pe-1][0])*Fe,ne[pe-1][1]+(ne[pe][1]-ne[pe-1][1])*Fe]},re=0,ve=1/0;for(let ae=0;ae<=100;ae++){let[Ae,pe]=de(ae/100),Fe=Math.hypot(Ae-ie[2][0],pe-ie[2][1]);Fe<ve&&(ve=Fe,re=ae/100)}let Ee="",Ve="",be="",He=[],Ge=(ae,Ae,pe,Fe,ke,We=!1)=>{let[et,Xe]=de(ae),Mt=eh(et,Xe,Ae*H,Ae*pe*H,Fe,le),Dt=`<path fill="${ct.leaf[ke]}" d="${Mt.shape}"/>`;We?Ee+=Dt:Ve+=Dt,He.push(Mt.veins)},ot=D?.74:.76;Ge(re,3.3*ot,.31,-1.2,0,!0),Ge(re,2.8*ot,.3,-.75,1,!0),Ge(re,2.5*ot,.3,-3.05,3,!0),Ge(re*.62,3.2*ot,.32,-1.45,2),Ge(re*.6,2.9*ot,.31,1.2,0),D||(Ge(re*.25,3*ot,.31,-1.15,3),Ge(re*.22,2.7*ot,.3,1.5,1)),Ge(.97,1.25*ot,.3,-2.55,2),Ge(.97,1.05*ot,.3,-1.85,2);let dt=[],lt=[];for(let ae=0;ae<=40;ae++){let Ae=ae/40,[pe,Fe]=de(Ae),[ke,We]=de(Math.min(1,Ae+.01)),[et,Xe]=de(Math.max(0,Ae-.01)),Mt=-(We-Xe),Dt=ke-et,Kt=Math.hypot(Mt,Dt)||1,qt=H*(.14-.075*Ae);dt.push([pe+Mt/Kt*qt,Fe+Dt/Kt*qt]),lt.push([pe-Mt/Kt*qt,Fe-Dt/Kt*qt])}let S=qn([...dt,...lt.reverse()],!0),[ye,Ne]=de(re);for(let[ae,Ae,pe,Fe]of[[-.66,.02,"#8FA041",.4],[.7,-.06,"#D8A23C",.44],[.36,.3,"#D2652F",.46]]){let ke=ye+ae*xe,We=Ne+Ae*xe,et=Fe*xe,Xe=Fe*xe*1.16;be+=`<path fill="none" stroke="${ct.twig}" stroke-width="${E(xe*.05)}" stroke-linecap="round" d="M${E(ye)} ${E(Ne)}L${E(ke)} ${E(We-Xe*.8)}"/><ellipse fill="${pe}" cx="${E(ke)}" cy="${E(We)}" rx="${E(et)}" ry="${E(Xe)}"/><ellipse fill="#FFF6E6" fill-opacity=".16" cx="${E(ke-et*.32)}" cy="${E(We-Xe*.34)}" rx="${E(et*.28)}" ry="${E(Xe*.2)}" transform="rotate(-30 ${E(ke-et*.32)} ${E(We-Xe*.34)})"/><circle fill="${ct.twig}" fill-opacity=".5" cx="${E(ke)}" cy="${E(We+Xe*.78)}" r="${E(et*.13)}"/>`}me.branch=`<defs>${Te("dbr",8,10,.34)}</defs><g filter="url(#dbr)">${Ee}<path fill="${ct.twig}" d="${S}"/>${Ve}${be}</g><path fill="none" stroke="${ct.vein}" stroke-opacity=".8" stroke-width="${E(Math.max(1,H*.013))}" stroke-linecap="round" d="${He.join("")}"/>`}{let ie=Qc(77),ne=[],se="";ne.forEach(([ge,Ie,de,re,ve],Ee)=>{se+=`<path fill="${ct.close[Ee%2]}" d="${eh(ge,Ie,de*H,re*H,ve,ie).shape}"/>`}),me.close=se?`<defs><filter id="dclose" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="${E(Math.max(2,H*.025))}"/><feDropShadow dx="0" dy="10" stdDeviation="12" flood-color="rgb(${ct.ink})" flood-opacity=".35"/></filter></defs><g filter="url(#dclose)">${se}</g>`:""}for(let ie of i)ie.wrap.style.transformOrigin=D?`${E(ee)}px ${E(Z)}px`:"";L(me,I,V,++f).then(()=>v(),()=>v())}function w(O,I,V,D){let q=Math.ceil(I/8),ee=Math.ceil(V/8);try{let Z=document.createElement("canvas");Z.width=q,Z.height=ee;let xe=Z.getContext("2d",{willReadFrequently:!0});xe.drawImage(O,0,0,q,ee);let Ce=xe.getImageData(0,0,q,ee).data,H=q,X=ee,le=-1,Te=-1;for(let ze=0;ze<ee;ze++)for(let P=0;P<q;P++)Ce[(ze*q+P)*4+3]>2&&(P<H&&(H=P),P>le&&(le=P),ze<X&&(X=ze),ze>Te&&(Te=ze));if(le<0)return{x:0,y:0,w:I,h:V};let me=Math.max(0,H*8-D),he=Math.max(0,X*8-D);return{x:me,y:he,w:Math.min(I,(le+1)*8+D)-me,h:Math.min(V,(Te+1)*8+D)-he}}catch{return{x:0,y:0,w:I,h:V}}}async function L(O,I,V,D){let Y=window.devicePixelRatio||1;await Promise.all(i.map(async q=>{let ee=t(q.id)&&O[q.id]||"",Z=q.paint,xe=pf(q.id,Y);if(!ee){Z.width=Z.height=0;return}let Ce=`<svg xmlns="${gd}" width="${Math.round(I*xe)}" height="${Math.round(V*xe)}" viewBox="0 0 ${I} ${V}">${ee}</svg>`,H=URL.createObjectURL(new Blob([Ce],{type:"image/svg+xml"}));try{let X=new Image;if(X.src=H,await X.decode(),D!==f)return;let le=w(X,I,V,q.id==="branch"?24:8);Z.width=Math.round(le.w*xe),Z.height=Math.round(le.h*xe),Object.assign(Z.style,{left:`${le.x}px`,top:`${le.y}px`,width:`${le.w}px`,height:`${le.h}px`}),q.id==="branch"&&(Z.style.transformOrigin=`${I-le.x}px ${V*.45-le.y}px`);let Te=Z.getContext("2d");Te.drawImage(X,-le.x*xe,-le.y*xe,I*xe,V*xe),q.id!=="branch"&&uf(Te,Z.width,Z.height),Z.style.display="",q.svg.style.display="none"}catch{if(D!==f)return;q.svg.setAttribute("viewBox",`0 0 ${I} ${V}`),q.svg.setAttribute("width",I),q.svg.setAttribute("height",V),q.svg.innerHTML=ee,q.svg.style.display="",Z.style.display="none"}finally{URL.revokeObjectURL(H)}}))}function B(O,I,V,D,Y,q=!1,ee=I<=0){let Z=window.devicePixelRatio||1;o+=(c-o)*.06,l+=(h-l)*.06,Math.abs(c-o)<.001&&(o=c),Math.abs(h-l)<.001&&(l=h);let xe=O*O*(3-2*O);for(let H of i){let X=q?H.flyNarrow:H.fly,le=-o*H.depth*26+X[0]*xe*D,Te=-l*H.depth*16+X[1]*xe*Y,me=1+X[2]*xe,he=`translate3d(${(Math.round(le*Z)/Z).toFixed(2)}px, ${(Math.round(Te*Z)/Z).toFixed(2)}px, 0) scale(${me.toFixed(4)})`;he!==H.tf&&(H.tf=he,H.wrap.style.transform=he)}if(I!==x){x=I;let H=I.toFixed(3);n.style.opacity=H;for(let X of i)X.paint.style.opacity=H,X.svg.style.opacity=H;for(let X of g)X.style.opacity=H}let Ce=ee&&I<=0;Ce!==m&&(m=Ce,r.classList.toggle("is-gone",Ce)),Ce||N(V)}function N(O){for(let I of[d,p]){if(!I)continue;let V=I.to-I.from,D=Math.max(24,V/(I.pace||9))*2,Y=(O/D+(I.shift||0))%1,q=Y<.5?Y*2:2-Y*2,ee=(Y<.5?1:-1)*(I.left?-1:1),Z=I.from+V*q,xe=pi(I.crest,Z)+I.dy;I.el.style.transform=`translate3d(${(Z-I.w/2).toFixed(1)}px, ${(xe-I.h).toFixed(1)}px, 0)`,ee!==I.face&&(I.face=ee,I.el.style.setProperty("--face",ee))}}return{layout:A,update:B,lean:(O,I)=>{c=O,h=I},layers:i,ready:()=>a!=="",whenDrawn:()=>_}}function Md(r){r.innerHTML="",r.classList.add("dio--photo");let e=document.createElement("picture");e.className="dio__photo";let t=r.dataset.photo||"assets/hero/feld";e.innerHTML=`<source media="(max-aspect-ratio: 4/5)" srcset="${t}-hoch-900.webp 900w, ${t}-hoch-1500.webp 1500w" sizes="100vw"><img src="${t}-quer-2400.webp" srcset="${t}-quer-1400.webp 1400w, ${t}-quer-2400.webp 2400w" sizes="100vw" alt="" decoding="async" fetchpriority="high">`;let n=document.createElement("div");n.className="dio__front",r.append(e,n);let i=yd(n,{only:["branch"]}),s=e.querySelector("img"),a=!1,o=0,l=0,c=0,h=0,u="",d=-1,p=null,f=Promise.all([(s.decode?s.decode():Promise.resolve()).catch(()=>{}),i.whenDrawn()]);function x(v,_,y,A,w){!v||!v.rx||(a=!0,i.layout(v,_,y,A,w))}function m(v,_,y,A,w,L=!1,B=_<=0){o+=(c-o)*.06,l+=(h-l)*.06,Math.abs(c-o)<.001&&(o=c),Math.abs(h-l)<.001&&(l=h);let N=v*v*(3-2*v),G=1.04+N*.1,O=-o*14,I=-l*9+N*w*.04,V=`translate3d(${O.toFixed(1)}px, ${I.toFixed(1)}px, 0) scale(${G.toFixed(4)})`;V!==u&&(u=V,e.style.transform=V),_!==d&&(d=_,e.style.opacity=_.toFixed(3)),i.update(v,_,y,A,w,L,B);let D=B&&_<=0;D!==p&&(p=D,r.classList.toggle("is-gone",D))}return{layout:x,update:m,lean:(v,_)=>{c=v,h=_,i.lean(v,_)},layers:[],ready:()=>a,whenDrawn:()=>f}}(()=>{let e=/[?&]debug=ui\b/.test(location.search)?Object.assign(document.createElement("pre"),{style:"position:fixed;left:8px;top:60px;z-index:99;margin:0;padding:6px 8px;font:11px/1.3 monospace;background:#fffd;color:#300;max-width:90vw;white-space:pre-wrap"}):null;if(e){document.body.append(e),addEventListener("error",S=>{e.textContent+=`
ERR ${S.message} @${S.lineno}:${S.colno}`});for(let S of["pointerdown","click"])addEventListener(S,ye=>{e.dataset.taps=`${e.dataset.taps||""} ${S}:${ye.target.tagName}.${String(ye.target.className).split(" ")[0]}`.slice(-220)},!0)}let t=document.querySelector("[data-hero]");if(!t)return;let n=t.querySelector("[data-hero-stage]"),i=t.querySelector("[data-hero-foot]"),s=t.querySelector("[data-hero-canvas]"),a=t.querySelector("[data-hero-cherry]"),o=t.querySelector("[data-hero-cue]"),l=t.querySelector("[data-hero-cue-end]"),c=t.querySelector("[data-hero-name]"),h=t.querySelector("[data-hero-plant]"),u=t.querySelector("[data-hero-dio]"),d=u&&u.dataset.box?u.dataset.box.split(",").map(Number):null,p=h&&{cx:+h.dataset.cx,cy:+h.dataset.cy,rx:+h.dataset.rx,turn:+h.dataset.turn,box:h.dataset.box.split(",").map(Number)},f=t.querySelector(".hero__copy"),x=window.matchMedia("(prefers-reduced-motion: reduce)").matches,m=(S,ye=0,Ne=1)=>Math.min(Ne,Math.max(ye,S)),g=(S,ye,Ne)=>{let ae=m((Ne-S)/(ye-S));return ae*ae*(3-2*ae)},v=(S,ye,Ne,ae,Ae)=>g(S,ye,Ae)*(1-g(Ne,ae,Ae)),_=[...t.querySelectorAll("[data-part]")],y=[...t.querySelectorAll("[data-beat]")].map(S=>({el:S,win:S.dataset.beat.split(",").map(Number)})),A=[230,211,183];t.edge={top:A,floor:A,fadeFrom:1/0,fadeH:0},t.dispatchEvent(new Event("tone"));let w=a&&{texture:a.dataset.texture,aspect:+a.dataset.aspect,cx:+a.dataset.cx,cy:+a.dataset.cy,rx:+a.dataset.rx,ry:+a.dataset.ry},L=null;try{L=fd(s,{onFrame:Ve,photo:w,plantBox:p&&p.box||d,gentle:matchMedia("(pointer: coarse)").matches})}catch{L=null}let B=()=>document.dispatchEvent(new Event("cascarup:ready"));if(!L){t.classList.add("is-flat"),e&&(e.textContent="kein WebGL"),B();return}let N=[];if(e){let S=0,ye=[],Ne=[],ae=Ae=>{S&&(N.push(Ae-S),X&&(ye.push(Ae-S),Ae-S>25&&Ne.push(`${L.progress.toFixed(3)}:${Math.round(Ae-S)}`))),!X&&ye.length&&(e.dataset.g=`glide ${ye.length}f slow=${ye.filter(pe=>pe>25).length} max=${Math.round(Math.max(...ye))}ms @ ${Ne.join(" ")}`,ye=[],Ne=[]),N.length>240&&N.shift(),S=Ae,requestAnimationFrame(ae)};requestAnimationFrame(ae)}e&&setInterval(()=>{let S=[],ye=0;for(let Ae=N.length-1;Ae>=0&&ye<1e3;Ae--)ye+=N[Ae],S.push(N[Ae]);let Ne=`fps=${S.length} slow=${S.filter(Ae=>Ae>25).length} max=${Math.round(Math.max(0,...S))}ms`,ae=L.state();(ae.progress!==ae.target||X)&&(e.dataset.low=Math.min(+(e.dataset.low||99),S.length)),e.textContent=`${e.dataset.g||""}
${Ne} low=${e.dataset.low||"-"} px=${ae.ratio} cost=${ae.cost}ms p=${ae.progress}\u2192${ae.target}
`+JSON.stringify(ae)+` reduce=${x} y=${Math.round(scrollY)} cls=${t.className}
${e.dataset.taps||""}`},400),t.classList.add("is-3d");let G=u?Md(u):null;if(G){let S=()=>u.classList.add("is-up");document.addEventListener("cascarup:shown",S,{once:!0}),/[?&]debug\b/.test(location.search)&&(window.__dio=G),setTimeout(S,12e3),matchMedia("(pointer: fine)").matches&&!x&&addEventListener("pointermove",ye=>G.lean(ye.clientX/innerWidth*2-1,ye.clientY/innerHeight*2-1),{passive:!0})}L.background=getComputedStyle(document.documentElement).getPropertyValue("--paper").trim()||"#E6D3B7",/[?&]debug\b/.test(location.search)&&(window.__hero=L);let O=/[?&]debug\b/.test(location.search)?parseFloat(new URLSearchParams(location.search).get("at")):NaN,I=0,V=null,D=()=>(V||(t.classList.contains("is-released")||(I=parseFloat(getComputedStyle(n).top)||0),V={top:t.getBoundingClientRect().top+window.scrollY,h:t.offsetHeight,stage:n.offsetHeight,release:parseFloat(getComputedStyle(t).getPropertyValue("--release"))||0}),V),Y=()=>{V=null};if(window.addEventListener("resize",Y),"ResizeObserver"in window){let S=new ResizeObserver(Y);S.observe(t),S.observe(n),S.observe(document.body)}document.fonts?.ready.then(Y),window.addEventListener("load",Y);let q=()=>{let S=D();return S.h-I-S.stage-S.release},ee=()=>D().top;function Z(S=window.scrollY){let ye=q();return ye>0?m((S-ee())/ye):0}let xe=window.scrollY,Ce=0,H=0,X=0,le=!1,Te=!1,me=!1,he=document.documentElement,ze=window.matchMedia("(pointer: coarse)").matches,P=0,b=()=>{he.style.scrollBehavior="",he.style.overflow="",clearTimeout(P),le=!1},k=()=>{X&&(cancelAnimationFrame(X),X=0,b())};function z(S,ye=0,Ne=!1){k(),me=!1;let ae=window.scrollY,Ae=S-ae;if(Math.abs(Ae)<2)return;let pe=ye||m(Math.abs(Ae)/Math.max(1,q())*Kc,500,2600),Fe=performance.now();he.style.scrollBehavior="auto",Ne&&ze&&(he.style.overflow="hidden",clearTimeout(P),P=setTimeout(()=>{he.style.overflow=""},380));let ke=We=>{let et=m((We-Fe)/pe),Xe=et<.5?4*et*et*et:1-Math.pow(-2*et+2,3)/2;window.scrollTo(0,ae+Ae*Xe),X=et<1?requestAnimationFrame(ke):0,X||b()};X=requestAnimationFrame(ke)}let M=/[?&]debug\b/.test(location.search)&&!/[?&]glide\b/.test(location.search),C=0;document.addEventListener("click",S=>{S.target.closest?.('a[href^="#"]')&&(C=performance.now()+2500)},!0);function U(){if(x||X||M||!me||performance.now()<C)return;let S=q(),ye=ee(),Ne=window.scrollY;if(S<=0||Ne<ye-1||Ne>ye+S+1)return;let ae=m((Ne-ye)/S);if(vn.some(pe=>Math.abs(pe-ae)<.006))return;let Ae;Ce>0?Ae=vn.find(pe=>pe>ae):Ce<0&&(Ae=[...vn].reverse().find(pe=>pe<ae)),Ae===void 0&&(Ae=vn.reduce((pe,Fe)=>Math.abs(Fe-ae)<Math.abs(pe-ae)?Fe:pe)),z(ye+Ae*S)}for(let S of["touchstart","keydown","pointerdown"])window.addEventListener(S,k,{passive:!0});let F=!1,$=0,K=0;addEventListener("wheel",S=>{let ye=performance.now(),Ne=ye-$>180;if($=ye,K=ye,le&&X&&S.deltaY>0){F=!0,S.preventDefault();return}if(F&&!Ne&&S.deltaY>0){S.preventDefault();return}F=!1,me=!0,k()},{passive:!1}),addEventListener("touchstart",()=>{Te=!0,K=performance.now()},{passive:!0}),addEventListener("touchmove",()=>{K=performance.now(),me=!0},{passive:!0}),addEventListener("keydown",()=>{K=performance.now(),me=!0},{passive:!0}),addEventListener("touchend",()=>{Te=!1,K=performance.now(),W()},{passive:!0}),addEventListener("touchcancel",()=>{Te=!1},{passive:!0});function W(S=window.scrollY){if(x||M||X||Te||performance.now()<C||performance.now()-K>900||document.documentElement.classList.contains("is-loading"))return;let ye=q(),Ne=ee();if(ye<=0)return;let ae=(S-Ne)/ye;Ce>0&&ae>.0025&&ae<vn[1]-.01&&(le=!0,z(Ne+vn[1]*ye,(vn[1]-ae)*Kc,!0))}function oe(){let S=window.scrollY,ye=D(),Ne=!x&&ye.top+ye.h-S<=I+ye.stage+ye.release+.5;Ne!==t.classList.contains("is-released")&&t.classList.toggle("is-released",Ne),L.progress=x?0:Z(S),!X&&S!==xe&&(Ce=Math.sign(S-xe)),xe=S,clearTimeout(H),X||(W(S),X||(H=setTimeout(U,150)))}let Re=-1,ue=-1,ie=-1,ne=!0,se=!1,ge=-1,Ie=null,de=1,re=1,ve=!1,Ee=0;function Ve(S,ye,Ne){if(G){let pe=de,Fe=re,ke=pe/Fe<=1.05,We=ke?.05:.072,et=Math.round((1-g(ke?.012:We-.028,We,S))*500)/500,Xe=S>We+.025;(et>0||ne||Xe!==se)&&((S<.003||!G.ready())&&G.layout(Ne(),pe,Fe,ke,Ie),G.update(g(.004,We,S),et,performance.now()/1e3,pe,Fe,ke,Xe)),ne=et>0,se=Xe,et!==ge&&(ge=et,i&&(i.style.opacity=et));let Mt=et>=1&&!document.documentElement.classList.contains("is-loading");Mt!==ve&&(ve=Mt,L.cover=Mt)}let ae=Math.round((1-g(.012,.05,S))*500)/500;if(ae>0&&(o||c)){let pe=Ne(),Fe=de,ke=re,We=Fe/ke<=1.05;o&&(o.style.setProperty("--x",`${(Fe/2).toFixed(1)}px`),o.style.setProperty("--y",`${(We?ke-72:ke-82).toFixed(1)}px`)),c&&(c.classList.toggle("is-up",We),c.style.setProperty("--x",`${(pe.x-(We?.3:.5)*pe.rx).toFixed(1)}px`),c.style.setProperty("--y",`${(pe.y-(We?.82:.8)*pe.ry).toFixed(1)}px`))}if(p){let pe=de,Fe=re,ke=pe/Fe<=1.05,We=g(.006,ke?.055:.07,S),et=Math.round((1-g(ke?.03:.048,ke?.052:.07,S))*500)/500;if(et>0){let Xe=Ne(),Mt=Xe.rx/p.rx,Dt=We*We*pe*(ke?.55:.6),Kt=We*We*Fe*(ke?-.32:.75),qt=p.turn+We*(ke?-9:9);h.style.transform=`translate3d(${(Xe.x+Dt).toFixed(1)}px, ${(Xe.y+Kt).toFixed(1)}px, 0) rotate(${qt.toFixed(2)}deg) scale(${Mt.toFixed(4)}) translate(${-p.cx}px, ${-p.cy}px)`}et!==ie&&(ie=et,h.style.opacity=et,h.style.visibility=et>0?"visible":"hidden")}if(ae!==ue){ue=ae;for(let pe of[o,c])pe&&(pe.style.opacity=ae,pe.style.visibility=ae>0?"visible":"hidden");o&&o.classList.toggle("is-off",ae===0)}for(let pe of y){let[Fe,ke,We,et]=pe.win,Xe=Math.round((et>=1?g(Fe,ke,S):v(Fe,ke,We,et,S))*500)/500;Xe!==pe.o&&(pe.o=Xe,pe.el.style.opacity=Xe,pe.el.style.visibility=Xe===0?"hidden":"visible",pe.el.style.setProperty("--in",Xe),pe.el.classList.toggle("is-on",Xe>0))}let Ae=v(.17,.22,.287,.305,S);if(Ae>.002){let pe=ye();for(let Fe of _){let ke=pe[Fe.dataset.part];Fe.style.transform=`translate3d(${ke.x.toFixed(1)}px, ${ke.y.toFixed(1)}px, 0)`,Fe.style.opacity=Ae.toFixed(3),Fe.style.visibility="visible"}_.shown=!0}else if(_.shown!==!1){_.shown=!1;for(let pe of _)pe.style.opacity="0",pe.style.visibility="hidden"}if(w){let pe=L&&L.photoReady?1-g(.068,.095,S):S<.1?1:0;if(pe>0){let Fe=Ne(),ke=Fe.rx/w.rx,We=ke*a.naturalHeight/Math.max(1,a.naturalWidth);(!Ee||ke>Ee*1.04||ke<Ee*.5)&&(Ee=Math.ceil(ke*1.2),a.style.width=`${Ee}px`),a.style.transform=`translate3d(${(Fe.x-w.cx*ke).toFixed(1)}px, ${(Fe.y-w.cy*We).toFixed(1)}px, 0) scale(${(ke/Ee).toFixed(4)})`}pe!==Re&&(Re=pe,a.style.opacity=pe,a.style.visibility=pe>0?"visible":"hidden")}}let be=(S,ye)=>{let Ne=(S.l+S.r)/2,ae=(S.t+S.b)/2,Ae=(S.r-S.l)/2*ye,pe=(S.b-S.t)/2*ye;return{l:Ne-Ae,t:ae-pe,r:Ne+Ae,b:ae+pe}};function He(){let S=n.getBoundingClientRect(),ye=S.width,Ne=S.height,ae=ye/Ne<=1.05,Ae=f.getBoundingClientRect(),pe=(document.querySelector("[data-nav]")?.offsetHeight||64)-12,Fe=0;for(let ke of f.children)Fe=Math.max(Fe,ke.getBoundingClientRect().right-S.left);L.frame=ae?be({l:14,t:Ae.bottom-S.top+8,r:ye-14,b:Ne-86},.9):{l:Fe+48,t:pe+28,r:ye-32,b:Ne-104},Ie={left:Ae.left-S.left,right:Fe,top:Ae.top-S.top,bottom:Ae.bottom-S.top}}let Ge=()=>{let S=n.getBoundingClientRect();de=Math.round(S.width),re=Math.round(S.height),L.resize(de,re),He(),l&&(l.style.setProperty("--x",`${(de/2).toFixed(1)}px`),l.style.setProperty("--y",`${(de/re<=1.05?re-72:re-82).toFixed(1)}px`))};document.fonts?.ready.then(()=>He()),new ResizeObserver(Ge).observe(n),Ge(),new IntersectionObserver(([S])=>{x||(S.isIntersecting?L.start():L.stop(),t.classList.toggle("is-away",!S.isIntersecting))},{rootMargin:"120px 0px"}).observe(t),window.addEventListener("scroll",oe,{passive:!0}),window.addEventListener("resize",oe),oe(),clearTimeout(H),x?(L.jump(0),L.stop()):L.begin(),Number.isFinite(O)&&O>=0&&O<=1&&setTimeout(()=>{document.documentElement.style.scrollBehavior="auto",scrollTo(0,ee()+q()*O)},600),a&&!a.complete&&a.addEventListener("load",()=>L.jump(L.progress),{once:!0}),requestAnimationFrame(()=>t.classList.add("is-ready"));let ot=()=>new Promise(S=>{let ye=0,Ne=performance.now(),ae=Ne,Ae=pe=>{ye=pe-Ne<20?ye+1:0,Ne=pe,ye>=30||pe-ae>5e3?S():requestAnimationFrame(Ae)};requestAnimationFrame(Ae)}),dt=!1,lt=()=>{dt||(dt=!0,t.classList.add("has-plant"),(x?Promise.resolve():L.warm()).then(()=>G?G.whenDrawn():null).then(()=>x||L.tune()).then(ot).then(B,B),setTimeout(()=>t.classList.add("is-settled"),1e3))};h?(h.decode?h.decode():Promise.resolve()).then(lt,()=>h.addEventListener("load",lt,{once:!0})):lt(),setTimeout(lt,5e3)})();
