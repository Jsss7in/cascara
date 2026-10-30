/* Cascarup 3D opening. three.js © 2010-2025 three.js authors, MIT licence. */
var Mh=0,Nl=1,Sh=2;var Fl=1,bh=2,Dn=3,Nr=0,Ot=1,Et=2,fi=0,Ds=1,Ol=2,Bl=3,zl=4,Th=5,Fr=100,wh=101,Eh=102,Ah=103,Ch=104,Rh=200,Ph=201,Ih=202,Lh=203,Dh=204,Uh=205,Nh=206,Fh=207,Oh=208,Bh=209,zh=210,kh=211,Gh=212,Vh=213,Hh=214,_o=0,xo=1,yo=2,Us=3,Mo=4,So=5,bo=6,To=7,Wh=0,Xh=1,jh=2,Kn=0,$h=1,qh=2,Yh=3,Zh=4,Jh=5,Kh=6,wo=7;var kl=300,Or=301,Oi=302,Eo=303,Ao=304,Ns=306,Mr=1e3,Sr=1001,Pa=1002,Rn=1003,Qh=1004;var Fs=1005;var Pn=1006,Co=1007;var Bi=1008;var Un=1009,Gl=1010,Vl=1011,Br=1012,Ro=1013,zi=1014,Nn=1015,zr=1016,Po=1017,Io=1018,kr=1020,Hl=35902,eu=1021,tu=1022,vn=1023,Os=1026,Bs=1027,Wl=1028,Lo=1029,nu=1030,Xl=1031;var jl=1033,Do=33776,Uo=33777,No=33778,Fo=33779,$l=35840,ql=35841,Yl=35842,Zl=35843,Jl=36196,Kl=37492,Ql=37496,ec=37808,tc=37809,nc=37810,ic=37811,rc=37812,sc=37813,ac=37814,oc=37815,lc=37816,cc=37817,hc=37818,uc=37819,dc=37820,pc=37821,Oo=36492,mc=36494,fc=36495,iu=36283,gc=36284,vc=36285,_c=36286;var cs=2300,Ia=2301,Aa=2302,El=2400,Al=2401,Cl=2402;var ru=3201;var su=0,au=1,ki="",Lt="srgb",Ri="srgb-linear",hs="linear",ot="srgb";var Ci=7680;var ou=512,lu=513,cu=514,xc=515,hu=516,uu=517,du=518,pu=519,La=35044;var yc="300 es",ui=2e3,us=2001;var $n=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}},Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ca=Math.PI/180,Da=180/Math.PI;function Xn(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(Dt[255&r]+Dt[r>>8&255]+Dt[r>>16&255]+Dt[r>>24&255]+"-"+Dt[255&e]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[63&t|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[255&n]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function Je(r,e,t){return Math.max(e,Math.min(t,r))}function cd(r,e){return(r%e+e)%e}function Jo(r,e,t){return(1-t)*r+t*e}function En(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function lt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var fe=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},un=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[a+0],p=s[a+1],f=s[a+2],_=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=f,void(e[t+3]=_);if(u!==_||l!==d||c!==p||h!==f){let m=1-o,v=l*d+c*p+h*f+u*_,x=v>=0?1:-1,g=1-v*v;if(g>Number.EPSILON){let b=Math.sqrt(g),S=Math.atan2(b,v*x);m=Math.sin(m*S)/b,o=Math.sin(o*S)/b}let y=o*x;if(l=l*m+d*y,c=c*m+p*y,h=h*m+f*y,u=u*m+_*y,m===1-o){let b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*u+l*p-c*d,e[t+1]=l*f+h*d+c*u-o*p,e[t+2]=c*f+h*p+o*d-l*u,e[t+3]=h*f-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),p=l(i/2),f=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"YZX":this._x=d*h*u+c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u-d*p*f;break;case"XZY":this._x=d*h*u-c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ko.copy(this).projectOnVector(e),this.sub(Ko)}reflect(e){return this.sub(Ko.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ko=new C,qc=new un,Xe=class r{constructor(e,t,n,i,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],f=n[8],_=i[0],m=i[3],v=i[6],x=i[1],g=i[4],y=i[7],b=i[2],S=i[5],R=i[8];return s[0]=a*_+o*x+l*b,s[3]=a*m+o*g+l*S,s[6]=a*v+o*y+l*R,s[1]=c*_+h*x+u*b,s[4]=c*m+h*g+u*S,s[7]=c*v+h*y+u*R,s[2]=d*_+p*x+f*b,s[5]=d*m+p*g+f*S,s[8]=d*v+p*y+f*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,f=t*u+n*d+i*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/f;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Qo.makeScale(e,t)),this}rotate(e){return this.premultiply(Qo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Qo=new Xe;function Mc(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function br(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function mu(){let r=br("canvas");return r.style.display="block",r}var Yc={};function Pi(r){r in Yc||(Yc[r]=!0,console.warn(r))}function fu(r,e,t){return new Promise(function(n,i){setTimeout(function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}},t)})}function gu(r){let e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function vu(r){let e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=1-e[14])}var Zc=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jc=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hd(){let r={enabled:!0,workingColorSpace:Ri,spaces:{},convert:function(i,s,a){return this.enabled!==!1&&s!==a&&s&&a&&(this.spaces[s].transfer===ot&&(i.r=jn(i.r),i.g=jn(i.g),i.b=jn(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ot&&(i.r=yr(i.r),i.g=yr(i.g),i.b=yr(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===""?hs:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Pi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Pi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Ri]:{primaries:e,whitePoint:n,transfer:hs,toXYZ:Zc,fromXYZ:Jc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:e,whitePoint:n,transfer:ot,toXYZ:Zc,fromXYZ:Jc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}}),r}var st=hd();function jn(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function yr(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var rr,Ua=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{rr===void 0&&(rr=br("canvas")),rr.width=e.width,rr.height=e.height;let i=rr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=rr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=br("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=255*jn(s[a]/255);return n.putImageData(i,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*jn(t[n]/255)):t[n]=jn(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ud=0,Tr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ud++}),this.uuid=Xn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(el(i[a].image)):s.push(el(i[a]))}else s=el(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function el(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ua.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var dd=0,tl=new C,Ht=class r extends $n{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=1001,i=1001,s=1006,a=1008,o=1023,l=1009,c=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=Xn(),this.name="",this.source=new Tr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(tl).x}get height(){return this.source.getSize(tl).y}get depth(){return this.source.getSize(tl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];i!==void 0?i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n:console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mr:e.x=e.x-Math.floor(e.x);break;case Sr:e.x=e.x<0?0:1;break;case Pa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Mr:e.y=e.y-Math.floor(e.y);break;case Sr:e.y=e.y<0?0:1;break;case Pa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ht.DEFAULT_IMAGE=null,Ht.DEFAULT_MAPPING=kl,Ht.DEFAULT_ANISOTROPY=1;var ut=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],f=l[9],_=l[2],m=l[6],v=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(f+m)<.1&&Math.abs(c+p+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let g=(c+1)/2,y=(p+1)/2,b=(v+1)/2,S=(h+d)/4,R=(u+_)/4,O=(f+m)/4;return g>y&&g>b?g<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(g),i=S/n,s=R/n):y>b?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=S/i,s=O/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=R/s,i=O/s),this.set(n,i,s,t),this}let x=Math.sqrt((m-f)*(m-f)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-f)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((c+p+v-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Na=class extends $n{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);let i={width:e,height:t,depth:n.depth},s=new Ht(i);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Tr(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},In=class extends Na{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ds=class extends Ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Fa=class extends Ht{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dn=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ln):ln.fromBufferAttribute(s,a),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ea.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ea.copy(n.boundingBox)),ea.applyMatrix4(e.matrixWorld),this.union(ea)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qr),ta.subVectors(this.max,Qr),sr.subVectors(e.a,Qr),ar.subVectors(e.b,Qr),or.subVectors(e.c,Qr),ii.subVectors(ar,sr),ri.subVectors(or,ar),Ti.subVectors(sr,or);let t=[0,-ii.z,ii.y,0,-ri.z,ri.y,0,-Ti.z,Ti.y,ii.z,0,-ii.x,ri.z,0,-ri.x,Ti.z,0,-Ti.x,-ii.y,ii.x,0,-ri.y,ri.x,0,-Ti.y,Ti.x,0];return!!nl(t,sr,ar,or,ta)&&(t=[1,0,0,0,1,0,0,0,1],!!nl(t,sr,ar,or,ta)&&(na.crossVectors(ii,ri),t=[na.x,na.y,na.z],nl(t,sr,ar,or,ta)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(ln).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},kn=[new C,new C,new C,new C,new C,new C,new C,new C],ln=new C,ea=new dn,sr=new C,ar=new C,or=new C,ii=new C,ri=new C,Ti=new C,Qr=new C,ta=new C,na=new C,wi=new C;function nl(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){wi.fromArray(r,s);let o=i.x*Math.abs(wi.x)+i.y*Math.abs(wi.y)+i.z*Math.abs(wi.z),l=e.dot(wi),c=t.dot(wi),h=n.dot(wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var pd=new dn,es=new C,il=new C,pn=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):pd.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;es.subVectors(e,this.center);let t=es.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=.5*(n-this.radius);this.center.addScaledVector(es,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(il.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(es.copy(e.center).add(il)),this.expandByPoint(es.copy(e.center).sub(il))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Gn=new C,rl=new C,ia=new C,si=new C,sl=new C,ra=new C,al=new C,Ii=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gn.copy(this.origin).addScaledVector(this.direction,t),Gn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){rl.copy(e).add(t).multiplyScalar(.5),ia.copy(t).sub(e).normalize(),si.copy(this.origin).sub(rl);let s=.5*e.distanceTo(t),a=-this.direction.dot(ia),o=si.dot(this.direction),l=-si.dot(ia),c=si.lengthSq(),h=Math.abs(1-a*a),u,d,p,f;if(h>0)if(u=a*l-o,d=a*o-l,f=s*h,u>=0)if(d>=-f)if(d<=f){let _=1/h;u*=_,d*=_,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(rl).addScaledVector(ia,d),p}intersectSphere(e,t){Gn.subVectors(e.center,this.origin);let n=Gn.dot(this.direction),i=Gn.dot(Gn)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i?null:((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i?null:((o>n||n!=n)&&(n=o),(l<i||i!=i)&&(i=l),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,t,n,i,s){sl.subVectors(t,e),ra.subVectors(n,e),al.crossVectors(sl,ra);let a,o=this.direction.dot(al);if(o>0){if(i)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}si.subVectors(this.origin,e);let l=a*this.direction.dot(ra.crossVectors(si,ra));if(l<0)return null;let c=a*this.direction.dot(sl.cross(si));if(c<0||l+c>o)return null;let h=-a*si.dot(al);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},We=class r{constructor(e,t,n,i,s,a,o,l,c,h,u,d,p,f,_,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,u,d,p,f,_,m)}set(e,t,n,i,s,a,o,l,c,h,u,d,p,f,_,m){let v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=i,v[1]=s,v[5]=a,v[9]=o,v[13]=l,v[2]=c,v[6]=h,v[10]=u,v[14]=d,v[3]=p,v[7]=f,v[11]=_,v[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/lr.setFromMatrixColumn(e,0).length(),s=1/lr.setFromMatrixColumn(e,1).length(),a=1/lr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,f=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+f*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=f+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,f=c*h,_=c*u;t[0]=d+_*o,t[4]=f*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,f=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,f=o*h,_=o*u;t[0]=l*h,t[4]=f*c-p,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=p*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,f=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=f*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+f,t[10]=d-_*u}else if(e.order==="XZY"){let d=a*l,p=a*c,f=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(md,e,fd)}lookAt(e,t,n){let i=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),ai.crossVectors(n,qt),ai.lengthSq()===0&&(Math.abs(n.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),ai.crossVectors(n,qt)),ai.normalize(),sa.crossVectors(qt,ai),i[0]=ai.x,i[4]=sa.x,i[8]=qt.x,i[1]=ai.y,i[5]=sa.y,i[9]=qt.y,i[2]=ai.z,i[6]=sa.z,i[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],f=n[2],_=n[6],m=n[10],v=n[14],x=n[3],g=n[7],y=n[11],b=n[15],S=i[0],R=i[4],O=i[8],L=i[12],N=i[1],j=i[5],W=i[9],H=i[13],z=i[2],Z=i[6],Q=i[10],re=i[14],ae=i[3],Me=i[7],Ae=i[11],ie=i[15];return s[0]=a*S+o*N+l*z+c*ae,s[4]=a*R+o*j+l*Z+c*Me,s[8]=a*O+o*W+l*Q+c*Ae,s[12]=a*L+o*H+l*re+c*ie,s[1]=h*S+u*N+d*z+p*ae,s[5]=h*R+u*j+d*Z+p*Me,s[9]=h*O+u*W+d*Q+p*Ae,s[13]=h*L+u*H+d*re+p*ie,s[2]=f*S+_*N+m*z+v*ae,s[6]=f*R+_*j+m*Z+v*Me,s[10]=f*O+_*W+m*Q+v*Ae,s[14]=f*L+_*H+m*re+v*ie,s[3]=x*S+g*N+y*z+b*ae,s[7]=x*R+g*j+y*Z+b*Me,s[11]=x*O+g*W+y*Q+b*Ae,s[15]=x*L+g*H+y*re+b*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*l*u-i*c*u-s*o*d+n*c*d+i*o*p-n*l*p)+e[7]*(+t*l*p-t*c*d+s*a*d-i*a*p+i*c*h-s*l*h)+e[11]*(+t*c*u-t*o*p-s*a*u+n*a*p+s*o*h-n*c*h)+e[15]*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],f=e[12],_=e[13],m=e[14],v=e[15],x=u*m*c-_*d*c+_*l*p-o*m*p-u*l*v+o*d*v,g=f*d*c-h*m*c-f*l*p+a*m*p+h*l*v-a*d*v,y=h*_*c-f*u*c+f*o*p-a*_*p-h*o*v+a*u*v,b=f*u*l-h*_*l-f*o*d+a*_*d+h*o*m-a*u*m,S=t*x+n*g+i*y+s*b;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/S;return e[0]=x*R,e[1]=(_*d*s-u*m*s-_*i*p+n*m*p+u*i*v-n*d*v)*R,e[2]=(o*m*s-_*l*s+_*i*c-n*m*c-o*i*v+n*l*v)*R,e[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*p-n*l*p)*R,e[4]=g*R,e[5]=(h*m*s-f*d*s+f*i*p-t*m*p-h*i*v+t*d*v)*R,e[6]=(f*l*s-a*m*s-f*i*c+t*m*c+a*i*v-t*l*v)*R,e[7]=(a*d*s-h*l*s+h*i*c-t*d*c-a*i*p+t*l*p)*R,e[8]=y*R,e[9]=(f*u*s-h*_*s-f*n*p+t*_*p+h*n*v-t*u*v)*R,e[10]=(a*_*s-f*o*s+f*n*c-t*_*c-a*n*v+t*o*v)*R,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*p-t*o*p)*R,e[12]=b*R,e[13]=(h*_*i-f*u*i+f*n*d-t*_*d-h*n*m+t*u*m)*R,e[14]=(f*o*i-a*_*i-f*n*l+t*_*l+a*n*m-t*o*m)*R,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*R,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,f=s*u,_=a*h,m=a*u,v=o*u,x=l*c,g=l*h,y=l*u,b=n.x,S=n.y,R=n.z;return i[0]=(1-(_+v))*b,i[1]=(p+y)*b,i[2]=(f-g)*b,i[3]=0,i[4]=(p-y)*S,i[5]=(1-(d+v))*S,i[6]=(m+x)*S,i[7]=0,i[8]=(f+g)*R,i[9]=(m-x)*R,i[10]=(1-(d+_))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=lr.set(i[0],i[1],i[2]).length(),a=lr.set(i[4],i[5],i[6]).length(),o=lr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],cn.copy(this);let l=1/s,c=1/a,h=1/o;return cn.elements[0]*=l,cn.elements[1]*=l,cn.elements[2]*=l,cn.elements[4]*=c,cn.elements[5]*=c,cn.elements[6]*=c,cn.elements[8]*=h,cn.elements[9]*=h,cn.elements[10]*=h,t.setFromRotationMatrix(cn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=2e3){let l=this.elements,c=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),p,f;if(o===ui)p=-(a+s)/(a-s),f=-2*a*s/(a-s);else{if(o!==us)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),f=-a*s/(a-s)}return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-s),d=(t+e)*c,p=(n+i)*h,f,_;if(o===ui)f=(a+s)*u,_=-2*u;else{if(o!==us)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=s*u,_=-1*u}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},lr=new C,cn=new We,md=new C(0,0,0),fd=new C(1,1,1),ai=new C,sa=new C,qt=new C,Kc=new We,Qc=new un,mn=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Kc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qc.setFromEuler(this),this.setFromQuaternion(Qc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mn.DEFAULT_ORDER="XYZ";var ps=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},gd=0,eh=new C,cr=new un,Vn=new We,aa=new C,ts=new C,vd=new C,_d=new un,th=new C(1,0,0),nh=new C(0,1,0),ih=new C(0,0,1),rh={type:"added"},xd={type:"removed"},hr={type:"childadded",child:null},ol={type:"childremoved",child:null},_t=class r extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new C,t=new mn,n=new un,i=new C(1,1,1);t._onChange(function(){n.setFromEuler(t,!1)}),n._onChange(function(){t.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new We},normalMatrix:{value:new Xe}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ps,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.multiply(cr),this}rotateOnWorldAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.premultiply(cr),this}rotateX(e){return this.rotateOnAxis(th,e)}rotateY(e){return this.rotateOnAxis(nh,e)}rotateZ(e){return this.rotateOnAxis(ih,e)}translateOnAxis(e,t){return eh.copy(e).applyQuaternion(this.quaternion),this.position.add(eh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(th,e)}translateY(e){return this.translateOnAxis(nh,e)}translateZ(e){return this.translateOnAxis(ih,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?aa.copy(e):aa.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(ts,aa,this.up):Vn.lookAt(aa,ts,this.up),this.quaternion.setFromRotationMatrix(Vn),i&&(Vn.extractRotation(i.matrixWorld),cr.setFromRotationMatrix(Vn),this.quaternion.premultiply(cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rh),hr.child=e,this.dispatchEvent(hr),hr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xd),ol.child=e,this.dispatchEvent(ol),ol.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rh),hr.child=e,this.dispatchEvent(hr),hr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,e,vd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,_d,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};_t.DEFAULT_UP=new C(0,1,0),_t.DEFAULT_MATRIX_AUTO_UPDATE=!0,_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hn=new C,Hn=new C,ll=new C,Wn=new C,ur=new C,dr=new C,sh=new C,cl=new C,hl=new C,ul=new C,dl=new ut,pl=new ut,ml=new ut,An=class r{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),hn.subVectors(e,t),i.cross(hn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){hn.subVectors(i,t),Hn.subVectors(n,t),ll.subVectors(e,t);let a=hn.dot(hn),o=hn.dot(Hn),l=hn.dot(ll),c=Hn.dot(Hn),h=Hn.dot(ll),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,f=(a*h-o*l)*d;return s.set(1-p-f,f,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Wn)!==null&&Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Wn.x),l.addScaledVector(a,Wn.y),l.addScaledVector(o,Wn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return dl.setScalar(0),pl.setScalar(0),ml.setScalar(0),dl.fromBufferAttribute(e,t),pl.fromBufferAttribute(e,n),ml.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(dl,s.x),a.addScaledVector(pl,s.y),a.addScaledVector(ml,s.z),a}static isFrontFacing(e,t,n,i){return hn.subVectors(n,t),Hn.subVectors(e,t),hn.cross(Hn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),.5*hn.cross(Hn).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;ur.subVectors(i,n),dr.subVectors(s,n),cl.subVectors(e,n);let l=ur.dot(cl),c=dr.dot(cl);if(l<=0&&c<=0)return t.copy(n);hl.subVectors(e,i);let h=ur.dot(hl),u=dr.dot(hl);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(ur,a);ul.subVectors(e,s);let p=ur.dot(ul),f=dr.dot(ul);if(f>=0&&p<=f)return t.copy(s);let _=p*c-l*f;if(_<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(dr,o);let m=h*f-p*u;if(m<=0&&u-h>=0&&p-f>=0)return sh.subVectors(s,i),o=(u-h)/(u-h+(p-f)),t.copy(i).addScaledVector(sh,o);let v=1/(m+_+d);return a=_*v,o=d*v,t.copy(n).addScaledVector(ur,a).addScaledVector(dr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},_u={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},oa={h:0,s:0,l:0};function fl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var Te=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=st.workingColorSpace){if(e=cd(e,1),t=Je(t,0,1),n=Je(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=fl(a,s,e+1/3),this.g=fl(a,s,e),this.b=fl(a,s,e-1/3)}return st.colorSpaceToWorking(this,i),this}setStyle(e,t=Lt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){let n=_u[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jn(e.r),this.g=jn(e.g),this.b=jn(e.b),this}copyLinearToSRGB(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return st.workingToColorSpace(Ut.copy(this),e),65536*Math.round(Je(255*Ut.r,0,255))+256*Math.round(Je(255*Ut.g,0,255))+Math.round(Je(255*Ut.b,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(Ut.copy(this),t);let n=Ut.r,i=Ut.g,s=Ut.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=Lt){st.workingToColorSpace(Ut.copy(this),e);let t=Ut.r,n=Ut.g,i=Ut.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(e,t,n){return this.getHSL(oi),this.setHSL(oi.h+e,oi.s+t,oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(oi),e.getHSL(oa);let n=Jo(oi.h,oa.h,t),i=Jo(oi.s,oa.s,t),s=Jo(oi.l,oa.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ut=new Te;Te.NAMES=_u;var yd=0,qn=class extends $n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=Xn(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ci,this.stencilZFail=Ci,this.stencilZPass=Ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Yn=class extends qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Jm=Md();function Md(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[256|l]=32768,i[l]=24,i[256|l]=24):c<-14?(n[l]=1024>>-c-14,n[256|l]=1024>>-c-14|32768,i[l]=-c-1,i[256|l]=-c-1):c<=15?(n[l]=c+15<<10,n[256|l]=c+15<<10|32768,i[l]=13,i[256|l]=13):c<128?(n[l]=31744,n[256|l]=64512,i[l]=24,i[256|l]=24):(n[l]=31744,n[256|l]=64512,i[l]=13,i[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}var bt=new C,la=new fe,Sd=0,xt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=La,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)la.fromBufferAttribute(this,t),la.applyMatrix3(e),this.setXY(t,la.x,la.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=En(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=En(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=En(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=En(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array),s=lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==La&&(e.usage=this.usage),e}};var ms=class extends xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var fs=class extends xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ke=class extends xt{constructor(e,t,n){super(new Float32Array(e),t,n)}},bd=0,rn=new We,gl=new _t,pr=new C,Yt=new dn,ns=new dn,Rt=new C,dt=class r extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mc(e)?fs:ms)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Xe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,n){return rn.makeTranslation(e,t,n),this.applyMatrix4(rn),this}scale(e,t,n){return rn.makeScale(e,t,n),this.applyMatrix4(rn),this}lookAt(e){return gl.lookAt(e),gl.updateMatrix(),this.applyMatrix4(gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pr).negate(),this.translate(pr.x,pr.y,pr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ke(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];Yt.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new C,1/0);if(e){let n=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];ns.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(Yt.min,ns.min),Yt.expandByPoint(Rt),Rt.addVectors(Yt.max,ns.max),Yt.expandByPoint(Rt)):(Yt.expandByPoint(ns.min),Yt.expandByPoint(ns.max))}Yt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Rt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Rt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Rt.fromBufferAttribute(o,c),l&&(pr.fromBufferAttribute(e,c),Rt.add(pr)),i=Math.max(i,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let O=0;O<n.count;O++)o[O]=new C,l[O]=new C;let c=new C,h=new C,u=new C,d=new fe,p=new fe,f=new fe,_=new C,m=new C;function v(O,L,N){c.fromBufferAttribute(n,O),h.fromBufferAttribute(n,L),u.fromBufferAttribute(n,N),d.fromBufferAttribute(s,O),p.fromBufferAttribute(s,L),f.fromBufferAttribute(s,N),h.sub(c),u.sub(c),p.sub(d),f.sub(d);let j=1/(p.x*f.y-f.x*p.y);isFinite(j)&&(_.copy(h).multiplyScalar(f.y).addScaledVector(u,-p.y).multiplyScalar(j),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(j),o[O].add(_),o[L].add(_),o[N].add(_),l[O].add(m),l[L].add(m),l[N].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let O=0,L=x.length;O<L;++O){let N=x[O],j=N.start;for(let W=j,H=j+N.count;W<H;W+=3)v(e.getX(W+0),e.getX(W+1),e.getX(W+2))}let g=new C,y=new C,b=new C,S=new C;function R(O){b.fromBufferAttribute(i,O),S.copy(b);let L=o[O];g.copy(L),g.sub(b.multiplyScalar(b.dot(L))).normalize(),y.crossVectors(S,L);let N=y.dot(l[O])<0?-1:1;a.setXYZW(O,g.x,g.y,g.z,N)}for(let O=0,L=x.length;O<L;++O){let N=x[O],j=N.start;for(let W=j,H=j+N.count;W<H;W+=3)R(e.getX(W+0)),R(e.getX(W+1)),R(e.getX(W+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xt(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new C,s=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(e)for(let d=0,p=e.count;d<p;d+=3){let f=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,f),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,f),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,f=0;for(let _=0,m=l.length;_<m;_++){p=o.isInterleavedBufferAttribute?l[_]*o.data.stride+o.offset:l[_]*h;for(let v=0;v<h;v++)d[f++]=c[p++]}return new xt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=e(i[o],n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ah=new We,Ei=new Ii,ca=new pn,oh=new C,ha=new C,ua=new C,da=new C,vl=new C,pa=new C,lh=new C,ma=new C,ze=class extends _t{constructor(e=new dt,t=new Yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){pa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(vl.fromBufferAttribute(u,e),a?pa.addScaledVector(vl,h):pa.addScaledVector(vl.sub(t),h))}t.add(pa)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),ca.copy(n.boundingSphere),ca.applyMatrix4(s),Ei.copy(e.ray).recast(e.near),ca.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(ca,oh)===null||Ei.origin.distanceToSquared(oh)>(e.far-e.near)**2))return;ah.copy(s).invert(),Ei.copy(e.ray).applyMatrix4(ah),n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,Ei)}}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,_=d.length;f<_;f++){let m=d[f],v=a[m.materialIndex];for(let x=Math.max(m.start,p.start),g=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));x<g;x+=3)i=fa(this,v,e,n,c,h,u,o.getX(x),o.getX(x+1),o.getX(x+2)),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}else for(let f=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);f<_;f+=3)i=fa(this,a,e,n,c,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),i&&(i.faceIndex=Math.floor(f/3),t.push(i));else if(l!==void 0)if(Array.isArray(a))for(let f=0,_=d.length;f<_;f++){let m=d[f],v=a[m.materialIndex];for(let x=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));x<g;x+=3)i=fa(this,v,e,n,c,h,u,x,x+1,x+2),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}else for(let f=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);f<_;f+=3)i=fa(this,a,e,n,c,h,u,f,f+1,f+2),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}};function fa(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,ha),r.getVertexPosition(l,ua),r.getVertexPosition(c,da);let h=(function(u,d,p,f,_,m,v,x){let g;if(g=d.side===1?f.intersectTriangle(v,m,_,!0,x):f.intersectTriangle(_,m,v,d.side===0,x),g===null)return null;ma.copy(x),ma.applyMatrix4(u.matrixWorld);let y=p.ray.origin.distanceTo(ma);return y<p.near||y>p.far?null:{distance:y,point:ma.clone(),object:u}})(r,e,t,n,ha,ua,da,lh);if(h){let u=new C;An.getBarycoord(lh,ha,ua,da,u),i&&(h.uv=An.getInterpolatedAttribute(i,o,l,c,u,new fe)),s&&(h.uv1=An.getInterpolatedAttribute(s,o,l,c,u,new fe)),a&&(h.normal=An.getInterpolatedAttribute(a,o,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new C,materialIndex:0};An.getNormal(ha,ua,da,d.normal),h.face=d,h.barycoord=u}return h}var Zn=class r extends dt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;function f(_,m,v,x,g,y,b,S,R,O,L){let N=y/R,j=b/O,W=y/2,H=b/2,z=S/2,Z=R+1,Q=O+1,re=0,ae=0,Me=new C;for(let Ae=0;Ae<Q;Ae++){let ie=Ae*j-H;for(let ce=0;ce<Z;ce++){let Se=ce*N-W;Me[_]=Se*x,Me[m]=ie*g,Me[v]=z,c.push(Me.x,Me.y,Me.z),Me[_]=0,Me[m]=0,Me[v]=S>0?1:-1,h.push(Me.x,Me.y,Me.z),u.push(ce/R),u.push(1-Ae/O),re+=1}}for(let Ae=0;Ae<O;Ae++)for(let ie=0;ie<R;ie++){let ce=d+ie+Z*Ae,Se=d+ie+Z*(Ae+1),be=d+(ie+1)+Z*(Ae+1),xe=d+(ie+1)+Z*Ae;l.push(ce,Se,xe),l.push(Se,be,xe),ae+=6}o.addGroup(p,ae,L),p+=ae,d+=re}f("z","y","x",-1,-1,n,t,e,a,s,0),f("z","y","x",1,-1,n,t,-e,a,s,1),f("x","z","y",1,1,e,n,t,i,a,2),f("x","z","y",1,-1,e,n,-t,i,a,3),f("x","y","z",1,-1,e,t,n,i,s,4),f("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ke(c,3)),this.setAttribute("normal",new ke(h,3)),this.setAttribute("uv",new ke(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Gi(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Bt(r){let e={};for(let t=0;t<r.length;t++){let n=Gi(r[t]);for(let i in n)e[i]=n[i]}return e}function Sc(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}var xu={clone:Gi,merge:Bt},fn=class extends qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gi(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let i=0;i<t.length;i++)n.push(t[i].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},wr=class extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=ui}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},li=new C,ch=new fe,hh=new fe,Nt=class extends wr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Da*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Ca*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Da*Math.atan(Math.tan(.5*Ca*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(li.x,li.y).multiplyScalar(-e/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(li.x,li.y).multiplyScalar(-e/li.z)}getViewSize(e,t){return this.getViewBounds(e,ch,hh),t.subVectors(hh,ch)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Ca*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},mr=-90,Oa=class extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Nt(mr,1,e,t);i.layers=this.layers,this.add(i);let s=new Nt(mr,1,e,t);s.layers=this.layers,this.add(s);let a=new Nt(mr,1,e,t);a.layers=this.layers,this.add(a);let o=new Nt(mr,1,e,t);o.layers=this.layers,this.add(o);let l=new Nt(mr,1,e,t);l.layers=this.layers,this.add(l);let c=new Nt(mr,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===ui)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==us)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},gs=class extends Ht{constructor(e=[],t=301,n,i,s,a,o,l,c,h){super(e,t,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ba=class extends In{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new gs(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Zn(5,5,5),s=new fn({name:"CubemapFromEquirect",uniforms:Gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;let a=new ze(i,s),o=t.minFilter;return t.minFilter===Bi&&(t.minFilter=Pn),new Oa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},Ft=class extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}},Td={type:"move"},Er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),v=this._getHandJoint(c,_);m!==null&&(v.matrix.fromArray(m.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=m.radius),v.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;c.inputState.pinching&&d>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Td)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ft;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Ar=class extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},za=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=La,this.updateRanges=[],this.version=0,this.uuid=Xn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Vt=new C,vs=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=En(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=En(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=En(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=En(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=En(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),i=lt(i,this.array),s=lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new xt(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Cr=class extends qn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},fr,is=new C,gr=new C,vr=new C,_r=new fe,rs=new fe,yu=new We,ga=new C,ss=new C,va=new C,uh=new fe,_l=new fe,dh=new fe,_s=class extends _t{constructor(e=new Cr){if(super(),this.isSprite=!0,this.type="Sprite",fr===void 0){fr=new dt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new za(t,5);fr.setIndex([0,1,2,0,2,3]),fr.setAttribute("position",new vs(n,3,0,!1)),fr.setAttribute("uv",new vs(n,2,3,!1))}this.geometry=fr,this.material=e,this.center=new fe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gr.setFromMatrixScale(this.matrixWorld),yu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),vr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gr.multiplyScalar(-vr.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let a=this.center;_a(ga.set(-.5,-.5,0),vr,a,gr,i,s),_a(ss.set(.5,-.5,0),vr,a,gr,i,s),_a(va.set(.5,.5,0),vr,a,gr,i,s),uh.set(0,0),_l.set(1,0),dh.set(1,1);let o=e.ray.intersectTriangle(ga,ss,va,!1,is);if(o===null&&(_a(ss.set(-.5,.5,0),vr,a,gr,i,s),_l.set(0,1),o=e.ray.intersectTriangle(ga,va,ss,!1,is),o===null))return;let l=e.ray.origin.distanceTo(is);l<e.near||l>e.far||t.push({distance:l,point:is.clone(),uv:An.getInterpolation(is,ga,ss,va,uh,_l,dh,new fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function _a(r,e,t,n,i,s){_r.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(rs.x=s*_r.x-i*_r.y,rs.y=i*_r.x+s*_r.y):rs.copy(_r),r.copy(e),r.x+=rs.x,r.y+=rs.y,r.applyMatrix4(yu)}var Km=new C,Qm=new C;var ef=new C,tf=new ut,nf=new ut,rf=new C,sf=new We,af=new C,of=new pn,lf=new We,cf=new Ii;var hf=new We,uf=new We;var df=new We,pf=new We;var mf=new dn,ff=new We,gf=new ze,vf=new pn;var xl=new C,wd=new C,Ed=new Xe,Zt=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=xl.subVectors(n,t).cross(wd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(xl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ed.getNormalMatrix(e),i=this.coplanarPoint(xl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ai=new pn,Ad=new fe(.5,.5),xa=new C,di=class{constructor(e=new Zt,t=new Zt,n=new Zt,i=new Zt,s=new Zt,a=new Zt){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],f=i[9],_=i[10],m=i[11],v=i[12],x=i[13],g=i[14],y=i[15];if(n[0].setComponents(l-s,d-c,m-p,y-v).normalize(),n[1].setComponents(l+s,d+c,m+p,y+v).normalize(),n[2].setComponents(l+a,d+h,m+f,y+x).normalize(),n[3].setComponents(l-a,d-h,m-f,y-x).normalize(),n[4].setComponents(l-o,d-u,m-_,y-g).normalize(),t===ui)n[5].setComponents(l+o,d+u,m+_,y+g).normalize();else{if(t!==us)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,u,_,g).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){Ai.center.set(0,0,0);let t=Ad.distanceTo(e.center);return Ai.radius=.7071067811865476+t,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(xa.x=i.normal.x>0?e.max.x:e.min.x,xa.y=i.normal.y>0?e.max.y:e.min.y,xa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(xa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Tn=new We,wn=new di,ka=class r{constructor(){this.coordinateSystem=ui}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(Tn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),wn.setFromProjectionMatrix(Tn,this.coordinateSystem),wn.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(Tn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),wn.setFromProjectionMatrix(Tn,this.coordinateSystem),wn.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(Tn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),wn.setFromProjectionMatrix(Tn,this.coordinateSystem),wn.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(Tn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),wn.setFromProjectionMatrix(Tn,this.coordinateSystem),wn.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(Tn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),wn.setFromProjectionMatrix(Tn,this.coordinateSystem),wn.containsPoint(e))return!0}return!1}clone(){return new r}};var Rl=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}},_f=new We,xf=new Te(1,1,1),yf=new di,Mf=new ka,Sf=new dn,bf=new pn,Tf=new C,wf=new C,Ef=new C,Af=new Rl,Cf=new ze;var Rf=new C,Pf=new C,If=new We,Lf=new Ii,Df=new pn,Uf=new C,Nf=new C;var Ff=new C,Of=new C;var Bf=new We,zf=new Ii,kf=new pn,Gf=new C;var Li=class extends Ht{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},xs=class extends Ht{constructor(e,t,n=1014,i,s,a,o=1003,l=1003,c,h=1026,u=1){if(h!==Os&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:u},i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ga=class r extends dt{constructor(e=1,t=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,p=2*u+d,f=2*n+s,_=i+1,m=new C,v=new C;for(let x=0;x<=f;x++){let g=0,y=0,b=0,S=0;if(x<=n){let L=x/n,N=L*Math.PI/2;y=-h-e*Math.cos(N),b=e*Math.sin(N),S=-e*Math.cos(N),g=L*u}else if(x<=n+s){let L=(x-n)/s;y=L*t-h,b=e,S=0,g=u+L*d}else{let L=(x-n-s)/n,N=L*Math.PI/2;y=h+e*Math.sin(N),b=e*Math.cos(N),S=e*Math.sin(N),g=u+d+L*u}let R=Math.max(0,Math.min(1,g/p)),O=0;x===0?O=.5/i:x===f&&(O=-.5/i);for(let L=0;L<=i;L++){let N=L/i,j=N*Math.PI*2,W=Math.sin(j),H=Math.cos(j);v.x=-b*H,v.y=y,v.z=b*W,o.push(v.x,v.y,v.z),m.set(-b*H,S,b*W),m.normalize(),l.push(m.x,m.y,m.z),c.push(N+O,R)}if(x>0){let L=(x-1)*_;for(let N=0;N<i;N++){let j=L+N,W=L+N+1,H=x*_+N,z=x*_+N+1;a.push(j,W,H),a.push(W,z,H)}}}this.setIndex(a),this.setAttribute("position",new ke(o,3)),this.setAttribute("normal",new ke(l,3)),this.setAttribute("uv",new ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},pi=class r extends dt{constructor(e=1,t=32,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new C,h=new fe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new ke(a,3)),this.setAttribute("normal",new ke(o,3)),this.setAttribute("uv",new ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Jn=class r extends dt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],p=[],f=0,_=[],m=n/2,v=0;function x(g){let y=f,b=new fe,S=new C,R=0,O=g===!0?e:t,L=g===!0?1:-1;for(let j=1;j<=i;j++)u.push(0,m*L,0),d.push(0,L,0),p.push(.5,.5),f++;let N=f;for(let j=0;j<=i;j++){let W=j/i*l+o,H=Math.cos(W),z=Math.sin(W);S.x=O*z,S.y=m*L,S.z=O*H,u.push(S.x,S.y,S.z),d.push(0,L,0),b.x=.5*H+.5,b.y=.5*z*L+.5,p.push(b.x,b.y),f++}for(let j=0;j<i;j++){let W=y+j,H=N+j;g===!0?h.push(H,H+1,W):h.push(H+1,H,W),R+=3}c.addGroup(v,R,g===!0?1:2),v+=R}(function(){let g=new C,y=new C,b=0,S=(t-e)/n;for(let R=0;R<=s;R++){let O=[],L=R/s,N=L*(t-e)+e;for(let j=0;j<=i;j++){let W=j/i,H=W*l+o,z=Math.sin(H),Z=Math.cos(H);y.x=N*z,y.y=-L*n+m,y.z=N*Z,u.push(y.x,y.y,y.z),g.set(z,S,Z).normalize(),d.push(g.x,g.y,g.z),p.push(W,1-L),O.push(f++)}_.push(O)}for(let R=0;R<i;R++)for(let O=0;O<s;O++){let L=_[O][R],N=_[O+1][R],j=_[O+1][R+1],W=_[O][R+1];(e>0||O!==0)&&(h.push(L,N,W),b+=3),(t>0||O!==s-1)&&(h.push(N,j,W),b+=3)}c.addGroup(v,b,0),v+=b})(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ke(u,3)),this.setAttribute("normal",new ke(d,3)),this.setAttribute("uv",new ke(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Va=class r extends Jn{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},mi=class r extends dt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];function o(p,f,_,m){let v=m+1,x=[];for(let g=0;g<=v;g++){x[g]=[];let y=p.clone().lerp(_,g/v),b=f.clone().lerp(_,g/v),S=v-g;for(let R=0;R<=S;R++)x[g][R]=R===0&&g===v?y:y.clone().lerp(b,R/S)}for(let g=0;g<v;g++)for(let y=0;y<2*(v-g)-1;y++){let b=Math.floor(y/2);y%2==0?(l(x[g][b+1]),l(x[g+1][b]),l(x[g][b])):(l(x[g][b+1]),l(x[g+1][b+1]),l(x[g+1][b]))}}function l(p){s.push(p.x,p.y,p.z)}function c(p,f){let _=3*p;f.x=e[_+0],f.y=e[_+1],f.z=e[_+2]}function h(p,f,_,m){m<0&&p.x===1&&(a[f]=p.x-1),_.x===0&&_.z===0&&(a[f]=m/2/Math.PI+.5)}function u(p){return Math.atan2(p.z,-p.x)}function d(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}(function(p){let f=new C,_=new C,m=new C;for(let v=0;v<t.length;v+=3)c(t[v+0],f),c(t[v+1],_),c(t[v+2],m),o(f,_,m,p)})(i),(function(p){let f=new C;for(let _=0;_<s.length;_+=3)f.x=s[_+0],f.y=s[_+1],f.z=s[_+2],f.normalize().multiplyScalar(p),s[_+0]=f.x,s[_+1]=f.y,s[_+2]=f.z})(n),(function(){let p=new C;for(let f=0;f<s.length;f+=3){p.x=s[f+0],p.y=s[f+1],p.z=s[f+2];let _=u(p)/2/Math.PI+.5,m=d(p)/Math.PI+.5;a.push(_,1-m)}(function(){let f=new C,_=new C,m=new C,v=new C,x=new fe,g=new fe,y=new fe;for(let b=0,S=0;b<s.length;b+=9,S+=6){f.set(s[b+0],s[b+1],s[b+2]),_.set(s[b+3],s[b+4],s[b+5]),m.set(s[b+6],s[b+7],s[b+8]),x.set(a[S+0],a[S+1]),g.set(a[S+2],a[S+3]),y.set(a[S+4],a[S+5]),v.copy(f).add(_).add(m).divideScalar(3);let R=u(v);h(x,S+0,f,R),h(g,S+2,_,R),h(y,S+4,m,R)}})(),(function(){for(let f=0;f<a.length;f+=6){let _=a[f+0],m=a[f+2],v=a[f+4],x=Math.max(_,m,v),g=Math.min(_,m,v);x>.9&&g<.1&&(_<.2&&(a[f+0]+=1),m<.2&&(a[f+2]+=1),v<.2&&(a[f+4]+=1))}})()})(),this.setAttribute("position",new ke(s,3)),this.setAttribute("normal",new ke(s.slice(),3)),this.setAttribute("uv",new ke(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},Ha=class r extends mi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},ya=new C,Ma=new C,yl=new C,Sa=new An,Wa=class extends dt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(Ca*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let f=0;f<l;f+=3){a?(c[0]=a.getX(f),c[1]=a.getX(f+1),c[2]=a.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:_,b:m,c:v}=Sa;if(_.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),v.fromBufferAttribute(o,c[2]),Sa.getNormal(yl),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let x=0;x<3;x++){let g=(x+1)%3,y=u[x],b=u[g],S=Sa[h[x]],R=Sa[h[g]],O=`${y}_${b}`,L=`${b}_${y}`;L in d&&d[L]?(yl.dot(d[L].normal)<=s&&(p.push(S.x,S.y,S.z),p.push(R.x,R.y,R.z)),d[L]=null):O in d||(d[O]={index0:c[x],index1:c[g],normal:yl.clone()})}}for(let f in d)if(d[f]){let{index0:_,index1:m}=d[f];ya.fromBufferAttribute(o,_),Ma.fromBufferAttribute(o,m),p.push(ya.x,ya.y,ya.z),p.push(Ma.x,Ma.y,Ma.z)}this.setAttribute("position",new ke(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Kt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,s=n.length,a;a=t||e*n[s-1];let o,l=0,c=s-1;for(;l<=c;)if(i=Math.floor(l+(c-l)/2),o=n[i]-a,o<0)l=i+1;else{if(!(o>0)){c=i;break}c=i-1}if(i=c,n[i]===a)return i/(s-1);let h=n[i];return(i+(a-h)/(n[i+1]-h))/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new fe:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new C,i=[],s=[],a=[],o=new C,l=new We;for(let p=0;p<=e;p++){let f=p/e;i[p]=this.getTangentAt(f,new C)}s[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(Je(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(Je(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(l.makeRotationAxis(i[f],p*f)),a[f].crossVectors(i[f],s[f])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Rr=class extends Kt{constructor(e=0,t=0,n=1,i=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new fe){let n=t,i=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(s=a?0:i),this.aClockwise!==!0||a||(s===i?s=-i:s-=i);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Xa=class extends Rr{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function bc(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,i(a,o,d,p)},calc:function(s){let a=s*s;return r+e*s+t*a+n*(a*s)}}}var ba=new C,Ml=new bc,Sl=new bc,bl=new bc,ja=class extends Kt{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new C){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=i[(c-1)%s]:(ba.subVectors(i[0],i[1]).add(i[0]),o=ba);let u=i[c%s],d=i[(c+1)%s];if(this.closed||c+2<s?l=i[(c+2)%s]:(ba.subVectors(i[s-1],i[s-2]).add(i[s-1]),l=ba),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(l),p);_<1e-4&&(_=1),f<1e-4&&(f=_),m<1e-4&&(m=_),Ml.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,f,_,m),Sl.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,f,_,m),bl.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,f,_,m)}else this.curveType==="catmullrom"&&(Ml.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),Sl.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),bl.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return n.set(Ml.calc(h),Sl.calc(h),bl.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new C().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ph(r,e,t,n,i){let s=.5*(n-e),a=.5*(i-t),o=r*r;return(2*t-2*n+s+a)*(r*o)+(-3*t+3*n-2*s-a)*o+s*r+t}function os(r,e,t,n){return(function(i,s){let a=1-i;return a*a*s})(r,e)+(function(i,s){return 2*(1-i)*i*s})(r,t)+(function(i,s){return i*i*s})(r,n)}function ls(r,e,t,n,i){return(function(s,a){let o=1-s;return o*o*o*a})(r,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(r,t)+(function(s,a){return 3*(1-s)*s*s*a})(r,n)+(function(s,a){return s*s*s*a})(r,i)}var ys=class extends Kt{constructor(e=new fe,t=new fe,n=new fe,i=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new fe){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ls(e,i.x,s.x,a.x,o.x),ls(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},$a=class extends Kt{constructor(e=new C,t=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new C){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ls(e,i.x,s.x,a.x,o.x),ls(e,i.y,s.y,a.y,o.y),ls(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ms=class extends Kt{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qa=class extends Kt{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ss=class extends Kt{constructor(e=new fe,t=new fe,n=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new fe){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(os(e,i.x,s.x,a.x),os(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bs=class extends Kt{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(os(e,i.x,s.x,a.x),os(e,i.y,s.y,a.y),os(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ts=class extends Kt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){let n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(ph(o,l.x,c.x,h.x,u.x),ph(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new fe().fromArray(i))}return this}},Ya=Object.freeze({__proto__:null,ArcCurve:Xa,CatmullRomCurve3:ja,CubicBezierCurve:ys,CubicBezierCurve3:$a,EllipseCurve:Rr,LineCurve:Ms,LineCurve3:qa,QuadraticBezierCurve:Ss,QuadraticBezierCurve3:bs,SplineCurve:Ts}),Za=class extends Kt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ya[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Ya[i.type]().fromJSON(i))}return this}},ws=class extends Za{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ms(this.currentPoint.clone(),new fe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new Ss(this.currentPoint.clone(),new fe(e,t),new fe(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){let o=new ys(this.currentPoint.clone(),new fe(e,t),new fe(n,i),new fe(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ts(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){let c=new Rr(e,t,n,i,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Di=class extends ws{constructor(e){super(e),this.uuid=Xn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new ws().fromJSON(i))}return this}};function Cd(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=mh(r,0,i,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=(function(h,u,d,p){let f=[];for(let _=0,m=u.length;_<m;_++){let v=mh(h,u[_]*p,_<m-1?u[_+1]*p:h.length,p,!1);v===v.next&&(v.steiner=!0),f.push(Fd(v))}f.sort(Dd);for(let _=0;_<f.length;_++)d=Ud(f[_],d);return d})(r,e,s,t)),r.length>80*t){o=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=t;d<i;d+=t){let p=r[d],f=r[d+1];p<o&&(o=p),f<l&&(l=f),p>h&&(h=p),f>u&&(u=f)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Es(s,a,t,o,l,c,0),a}function mh(r,e,t,n,i){let s;if(i===(function(a,o,l,c){let h=0;for(let u=o,d=l-c;u<l;u+=c)h+=(a[d]-a[u])*(a[u+1]+a[d+1]),d=u;return h})(r,e,t,n)>0)for(let a=e;a<t;a+=n)s=fh(a/n|0,r[a],r[a+1],s);else for(let a=t-n;a>=e;a-=n)s=fh(a/n|0,r[a],r[a+1],s);return s&&Pr(s,s.next)&&(Cs(s),s=s.next),s}function Ui(r,e){if(!r)return r;e||(e=r);let t,n=r;do if(t=!1,n.steiner||!Pr(n,n.next)&&gt(n.prev,n,n.next)!==0)n=n.next;else{if(Cs(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function Es(r,e,t,n,i,s,a){if(!r)return;!a&&s&&(function(l,c,h,u){let d=l;do d.z===0&&(d.z=Pl(d.x,d.y,c,h,u)),d.prevZ=d.prev,d.nextZ=d.next,d=d.next;while(d!==l);d.prevZ.nextZ=null,d.prevZ=null,(function(p){let f,_=1;do{let m,v=p;p=null;let x=null;for(f=0;v;){f++;let g=v,y=0;for(let S=0;S<_&&(y++,g=g.nextZ,g);S++);let b=_;for(;y>0||b>0&&g;)y!==0&&(b===0||!g||v.z<=g.z)?(m=v,v=v.nextZ,y--):(m=g,g=g.nextZ,b--),x?x.nextZ=m:p=m,m.prevZ=x,x=m;v=g}x.nextZ=null,_*=2}while(f>1)})(d)})(r,n,i,s);let o=r;for(;r.prev!==r.next;){let l=r.prev,c=r.next;if(s?Pd(r,n,i,s):Rd(r))e.push(l.i,r.i,c.i),Cs(r),r=c.next,o=c.next;else if((r=c)===o){a?a===1?Es(r=Id(Ui(r),e),e,t,n,i,s,2):a===2&&Ld(r,e,t,n,i,s):Es(Ui(r),e,t,n,i,s,1);break}}}function Rd(r){let e=r.prev,t=r,n=r.next;if(gt(e,t,n)>=0)return!1;let i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(i,s,a),u=Math.min(o,l,c),d=Math.max(i,s,a),p=Math.max(o,l,c),f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&as(i,o,s,l,a,c,f.x,f.y)&&gt(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Pd(r,e,t,n){let i=r.prev,s=r,a=r.next;if(gt(i,s,a)>=0)return!1;let o=i.x,l=s.x,c=a.x,h=i.y,u=s.y,d=a.y,p=Math.min(o,l,c),f=Math.min(h,u,d),_=Math.max(o,l,c),m=Math.max(h,u,d),v=Pl(p,f,e,t,n),x=Pl(_,m,e,t,n),g=r.prevZ,y=r.nextZ;for(;g&&g.z>=v&&y&&y.z<=x;){if(g.x>=p&&g.x<=_&&g.y>=f&&g.y<=m&&g!==i&&g!==a&&as(o,h,l,u,c,d,g.x,g.y)&&gt(g.prev,g,g.next)>=0||(g=g.prevZ,y.x>=p&&y.x<=_&&y.y>=f&&y.y<=m&&y!==i&&y!==a&&as(o,h,l,u,c,d,y.x,y.y)&&gt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;g&&g.z>=v;){if(g.x>=p&&g.x<=_&&g.y>=f&&g.y<=m&&g!==i&&g!==a&&as(o,h,l,u,c,d,g.x,g.y)&&gt(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;y&&y.z<=x;){if(y.x>=p&&y.x<=_&&y.y>=f&&y.y<=m&&y!==i&&y!==a&&as(o,h,l,u,c,d,y.x,y.y)&&gt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Id(r,e){let t=r;do{let n=t.prev,i=t.next.next;!Pr(n,i)&&Su(n,t,t.next,i)&&As(n,i)&&As(i,n)&&(e.push(n.i,t.i,i.i),Cs(t),Cs(t.next),t=r=i),t=t.next}while(t!==r);return Ui(t)}function Ld(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Od(a,o)){let l=bu(a,o);return a=Ui(a,a.next),l=Ui(l,l.next),Es(a,e,t,n,i,s,0),void Es(l,e,t,n,i,s,0)}o=o.next}a=a.next}while(a!==r)}function Dd(r,e){let t=r.x-e.x;return t===0&&(t=r.y-e.y,t===0)&&(t=(r.next.y-r.y)/(r.next.x-r.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function Ud(r,e){let t=(function(i,s){let a=s,o=i.x,l=i.y,c,h=-1/0;if(Pr(i,a))return a;do{if(Pr(i,a.next))return a.next;if(l<=a.y&&l>=a.next.y&&a.next.y!==a.y){let _=a.x+(l-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(_<=o&&_>h&&(h=_,c=a.x<a.next.x?a:a.next,_===o))return c}a=a.next}while(a!==s);if(!c)return null;let u=c,d=c.x,p=c.y,f=1/0;a=c;do{if(o>=a.x&&a.x>=d&&o!==a.x&&Mu(l<p?o:h,l,d,p,l<p?h:o,l,a.x,a.y)){let _=Math.abs(l-a.y)/(o-a.x);As(a,i)&&(_<f||_===f&&(a.x>c.x||a.x===c.x&&Nd(c,a)))&&(c=a,f=_)}a=a.next}while(a!==u);return c})(r,e);if(!t)return e;let n=bu(t,r);return Ui(n,n.next),Ui(t,t.next)}function Nd(r,e){return gt(r.prev,r,e.prev)<0&&gt(e.next,r,r.next)<0}function Pl(r,e,t,n,i){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*i|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*i|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Fd(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Mu(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function as(r,e,t,n,i,s,a,o){return!(r===a&&e===o)&&Mu(r,e,t,n,i,s,a,o)}function Od(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!(function(t,n){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==n.i&&i.next.i!==n.i&&Su(i,i.next,t,n))return!0;i=i.next}while(i!==t);return!1})(r,e)&&(As(r,e)&&As(e,r)&&(function(t,n){let i=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do i.y>o!=i.next.y>o&&i.next.y!==i.y&&a<(i.next.x-i.x)*(o-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==t);return s})(r,e)&&(gt(r.prev,r,e.prev)||gt(r,e.prev,e))||Pr(r,e)&&gt(r.prev,r,r.next)>0&&gt(e.prev,e,e.next)>0)}function gt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Pr(r,e){return r.x===e.x&&r.y===e.y}function Su(r,e,t,n){let i=wa(gt(r,e,t)),s=wa(gt(r,e,n)),a=wa(gt(t,n,r)),o=wa(gt(t,n,e));return i!==s&&a!==o||!(i!==0||!Ta(r,t,e))||!(s!==0||!Ta(r,n,e))||!(a!==0||!Ta(t,r,n))||!(o!==0||!Ta(t,e,n))}function Ta(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function wa(r){return r>0?1:r<0?-1:0}function As(r,e){return gt(r.prev,r,r.next)<0?gt(r,e,r.next)>=0&&gt(r,r.prev,e)>=0:gt(r,e,r.prev)<0||gt(r,r.next,e)<0}function bu(r,e){let t=Il(r.i,r.x,r.y),n=Il(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function fh(r,e,t,n){let i=Il(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Cs(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Il(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}var Ll=class{static triangulate(e,t,n=2){return Cd(e,t,n)}},Cn=class r{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return .5*n}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];gh(e),vh(n,e);let a=e.length;t.forEach(gh);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,vh(n,t[l]);let o=Ll.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function gh(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function vh(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var Ir=class r extends dt{constructor(e=new Di([new fe(.5,.5),new fe(-.5,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,v=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:Bd,g,y,b,S,R,O=!1;v&&(g=v.getSpacedPoints(h),O=!0,d=!1,y=v.computeFrenetFrames(h,!1),b=new C,S=new C,R=new C),d||(m=0,p=0,f=0,_=0);let L=o.extractPoints(c),N=L.shape,j=L.holes;if(!Cn.isClockWise(N)){N=N.reverse();for(let k=0,M=j.length;k<M;k++){let T=j[k];Cn.isClockWise(T)&&(j[k]=T.reverse())}}function W(k){let M=10000000000000001e-36,T=k[0];for(let A=1;A<=k.length;A++){let P=A%k.length,B=k[P],X=B.x-T.x,U=B.y-T.y,D=X*X+U*U,J=Math.max(Math.abs(B.x),Math.abs(B.y),Math.abs(T.x),Math.abs(T.y));D<=M*J*J?(k.splice(P,1),A--):T=B}}W(N),j.forEach(W);let H=j.length,z=N;for(let k=0;k<H;k++){let M=j[k];N=N.concat(M)}function Z(k,M,T){return M||console.error("THREE.ExtrudeGeometry: vec does not exist"),k.clone().addScaledVector(M,T)}let Q=N.length;function re(k,M,T){let A,P,B,X=k.x-M.x,U=k.y-M.y,D=T.x-k.x,J=T.y-k.y,q=X*X+U*U,te=X*J-U*D;if(Math.abs(te)>Number.EPSILON){let le=Math.sqrt(q),ne=Math.sqrt(D*D+J*J),he=M.x-U/le,ve=M.y+X/le,Ee=((T.x-J/ne-he)*J-(T.y+D/ne-ve)*D)/(X*J-U*D);A=he+X*Ee-k.x,P=ve+U*Ee-k.y;let _e=A*A+P*P;if(_e<=2)return new fe(A,P);B=Math.sqrt(_e/2)}else{let le=!1;X>Number.EPSILON?D>Number.EPSILON&&(le=!0):X<-Number.EPSILON?D<-Number.EPSILON&&(le=!0):Math.sign(U)===Math.sign(J)&&(le=!0),le?(A=-U,P=X,B=Math.sqrt(q)):(A=X,P=U,B=Math.sqrt(q/2))}return new fe(A/B,P/B)}let ae=[];for(let k=0,M=z.length,T=M-1,A=k+1;k<M;k++,T++,A++)T===M&&(T=0),A===M&&(A=0),ae[k]=re(z[k],z[T],z[A]);let Me=[],Ae,ie,ce=ae.concat();for(let k=0,M=H;k<M;k++){let T=j[k];Ae=[];for(let A=0,P=T.length,B=P-1,X=A+1;A<P;A++,B++,X++)B===P&&(B=0),X===P&&(X=0),Ae[A]=re(T[A],T[B],T[X]);Me.push(Ae),ce=ce.concat(Ae)}if(m===0)ie=Cn.triangulateShape(z,j);else{let k=[],M=[];for(let T=0;T<m;T++){let A=T/m,P=p*Math.cos(A*Math.PI/2),B=f*Math.sin(A*Math.PI/2)+_;for(let X=0,U=z.length;X<U;X++){let D=Z(z[X],ae[X],B);de(D.x,D.y,-P),A===0&&k.push(D)}for(let X=0,U=H;X<U;X++){let D=j[X];Ae=Me[X];let J=[];for(let q=0,te=D.length;q<te;q++){let le=Z(D[q],Ae[q],B);de(le.x,le.y,-P),A===0&&J.push(le)}A===0&&M.push(J)}}ie=Cn.triangulateShape(k,M)}let Se=ie.length,be=f+_;for(let k=0;k<Q;k++){let M=d?Z(N[k],ce[k],be):N[k];O?(S.copy(y.normals[0]).multiplyScalar(M.x),b.copy(y.binormals[0]).multiplyScalar(M.y),R.copy(g[0]).add(S).add(b),de(R.x,R.y,R.z)):de(M.x,M.y,0)}for(let k=1;k<=h;k++)for(let M=0;M<Q;M++){let T=d?Z(N[M],ce[M],be):N[M];O?(S.copy(y.normals[k]).multiplyScalar(T.x),b.copy(y.binormals[k]).multiplyScalar(T.y),R.copy(g[k]).add(S).add(b),de(R.x,R.y,R.z)):de(T.x,T.y,u/h*k)}for(let k=m-1;k>=0;k--){let M=k/m,T=p*Math.cos(M*Math.PI/2),A=f*Math.sin(M*Math.PI/2)+_;for(let P=0,B=z.length;P<B;P++){let X=Z(z[P],ae[P],A);de(X.x,X.y,u+T)}for(let P=0,B=j.length;P<B;P++){let X=j[P];Ae=Me[P];for(let U=0,D=X.length;U<D;U++){let J=Z(X[U],Ae[U],A);O?de(J.x,J.y+g[h-1].y,g[h-1].x+T):de(J.x,J.y,u+T)}}}function xe(k,M){let T=k.length;for(;--T>=0;){let A=T,P=T-1;P<0&&(P=k.length-1);for(let B=0,X=h+2*m;B<X;B++){let U=Q*B,D=Q*(B+1);I(M+A+U,M+P+U,M+P+D,M+A+D)}}}function de(k,M,T){l.push(k),l.push(M),l.push(T)}function Ue(k,M,T){w(k),w(M),w(T);let A=i.length/3,P=x.generateTopUV(n,i,A-3,A-2,A-1);V(P[0]),V(P[1]),V(P[2])}function I(k,M,T,A){w(k),w(M),w(A),w(M),w(T),w(A);let P=i.length/3,B=x.generateSideWallUV(n,i,P-6,P-3,P-2,P-1);V(B[0]),V(B[1]),V(B[3]),V(B[1]),V(B[2]),V(B[3])}function w(k){i.push(l[3*k+0]),i.push(l[3*k+1]),i.push(l[3*k+2])}function V(k){s.push(k.x),s.push(k.y)}(function(){let k=i.length/3;if(d){let M=0,T=Q*M;for(let A=0;A<Se;A++){let P=ie[A];Ue(P[2]+T,P[1]+T,P[0]+T)}M=h+2*m,T=Q*M;for(let A=0;A<Se;A++){let P=ie[A];Ue(P[0]+T,P[1]+T,P[2]+T)}}else{for(let M=0;M<Se;M++){let T=ie[M];Ue(T[2],T[1],T[0])}for(let M=0;M<Se;M++){let T=ie[M];Ue(T[0]+Q*h,T[1]+Q*h,T[2]+Q*h)}}n.addGroup(k,i.length/3-k,0)})(),(function(){let k=i.length/3,M=0;xe(z,M),M+=z.length;for(let T=0,A=j.length;T<A;T++){let P=j[T];xe(P,M),M+=P.length}n.addGroup(k,i.length/3-k,1)})()}this.setAttribute("position",new ke(i,3)),this.setAttribute("uv",new ke(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,i){if(i.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];i.shapes.push(o.uuid)}else i.shapes.push(t.uuid);return i.options=Object.assign({},n),n.extrudePath!==void 0&&(i.options.extrudePath=n.extrudePath.toJSON()),i})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Ya[i.type]().fromJSON(i)),new r(n,e.options)}},Bd={generateTopUV:function(r,e,t,n,i){let s=e[3*t],a=e[3*t+1],o=e[3*n],l=e[3*n+1],c=e[3*i],h=e[3*i+1];return[new fe(s,a),new fe(o,l),new fe(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*i],p=e[3*i+1],f=e[3*i+2],_=e[3*s],m=e[3*s+1],v=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new fe(a,1-l),new fe(c,1-u),new fe(d,1-f),new fe(_,1-v)]:[new fe(o,1-l),new fe(h,1-u),new fe(p,1-f),new fe(m,1-v)]}},Ja=class r extends mi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Lr=class r extends dt{constructor(e=[new fe(0,-.5),new fe(.5,0),new fe(0,.5)],t=12,n=0,i=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Je(i,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new C,d=new fe,p=new C,f=new C,_=new C,m=0,v=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,v=e[x+1].y-e[x].y,p.x=1*v,p.y=-m,p.z=0*v,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[x+1].x-e[x].x,v=e[x+1].y-e[x].y,p.x=1*v,p.y=-m,p.z=0*v,f.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(f)}for(let x=0;x<=t;x++){let g=n+x*h*i,y=Math.sin(g),b=Math.cos(g);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*y,u.y=e[S].y,u.z=e[S].x*b,a.push(u.x,u.y,u.z),d.x=x/t,d.y=S/(e.length-1),o.push(d.x,d.y);let R=l[3*S+0]*y,O=l[3*S+1],L=l[3*S+0]*b;c.push(R,O,L)}}for(let x=0;x<t;x++)for(let g=0;g<e.length-1;g++){let y=g+x*e.length,b=y,S=y+e.length,R=y+e.length+1,O=y+1;s.push(b,S,O),s.push(R,O,S)}this.setIndex(s),this.setAttribute("position",new ke(a,3)),this.setAttribute("uv",new ke(o,2)),this.setAttribute("normal",new ke(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},Ka=class r extends mi{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Ln=class r extends dt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,p=[],f=[],_=[],m=[];for(let v=0;v<h;v++){let x=v*d-a;for(let g=0;g<c;g++){let y=g*u-s;f.push(y,-x,0),_.push(0,0,1),m.push(g/o),m.push(1-v/l)}}for(let v=0;v<l;v++)for(let x=0;x<o;x++){let g=x+c*v,y=x+c*(v+1),b=x+1+c*(v+1),S=x+1+c*v;p.push(g,y,S),p.push(y,b,S)}this.setIndex(p),this.setAttribute("position",new ke(f,3)),this.setAttribute("normal",new ke(_,3)),this.setAttribute("uv",new ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Qa=class r extends dt{constructor(e=.5,t=1,n=32,i=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(i=Math.max(1,i)),p=new C,f=new fe;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){let v=s+m/n*a;p.x=u*Math.cos(v),p.y=u*Math.sin(v),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}u+=d}for(let _=0;_<i;_++){let m=_*(n+1);for(let v=0;v<n;v++){let x=v+m,g=x,y=x+n+1,b=x+n+2,S=x+1;o.push(g,y,S),o.push(y,b,S)}}this.setIndex(o),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(c,3)),this.setAttribute("uv",new ke(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},eo=class r extends dt{constructor(e=new Di([new fe(0,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=i.length/3,d=h.extractPoints(t),p=d.shape,f=d.holes;Cn.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,v=f.length;m<v;m++){let x=f[m];Cn.isClockWise(x)===!0&&(f[m]=x.reverse())}let _=Cn.triangulateShape(p,f);for(let m=0,v=f.length;m<v;m++){let x=f[m];p=p.concat(x)}for(let m=0,v=p.length;m<v;m++){let x=p[m];i.push(x.x,x.y,0),s.push(0,0,1),a.push(x.x,x.y)}for(let m=0,v=_.length;m<v;m++){let x=_[m],g=x[0]+u,y=x[1]+u,b=x[2]+u;n.push(g,y,b),l+=3}}this.setIndex(n),this.setAttribute("position",new ke(i,3)),this.setAttribute("normal",new ke(s,3)),this.setAttribute("uv",new ke(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let a=t[i];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let i=0,s=e.shapes.length;i<s;i++){let a=t[e.shapes[i]];n.push(a)}return new r(n,e.curveSegments)}},Qt=class r extends dt{constructor(e=1,t=32,n=16,i=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new C,d=new C,p=[],f=[],_=[],m=[];for(let v=0;v<=n;v++){let x=[],g=v/n,y=0;v===0&&a===0?y=.5/t:v===n&&l===Math.PI&&(y=-.5/t);for(let b=0;b<=t;b++){let S=b/t;u.x=-e*Math.cos(i+S*s)*Math.sin(a+g*o),u.y=e*Math.cos(a+g*o),u.z=e*Math.sin(i+S*s)*Math.sin(a+g*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(S+y,1-g),x.push(c++)}h.push(x)}for(let v=0;v<n;v++)for(let x=0;x<t;x++){let g=h[v][x+1],y=h[v][x],b=h[v+1][x],S=h[v+1][x+1];(v!==0||a>0)&&p.push(g,y,S),(v!==n-1||l<Math.PI)&&p.push(y,b,S)}this.setIndex(p),this.setAttribute("position",new ke(f,3)),this.setAttribute("normal",new ke(_,3)),this.setAttribute("uv",new ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},to=class r extends mi{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},gn=class r extends dt{constructor(e=1,t=.4,n=12,i=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new C,u=new C,d=new C;for(let p=0;p<=n;p++)for(let f=0;f<=i;f++){let _=f/i*s,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(f/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let f=1;f<=i;f++){let _=(i+1)*p+f-1,m=(i+1)*(p-1)+f-1,v=(i+1)*(p-1)+f,x=(i+1)*p+f;a.push(_,m,x),a.push(m,v,x)}this.setIndex(a),this.setAttribute("position",new ke(o,3)),this.setAttribute("normal",new ke(l,3)),this.setAttribute("uv",new ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},no=class r extends dt{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],l=[],c=[],h=[],u=new C,d=new C,p=new C,f=new C,_=new C,m=new C,v=new C;for(let g=0;g<=n;++g){let y=g/n*s*Math.PI*2;x(y,s,a,e,p),x(y+.01,s,a,e,f),m.subVectors(f,p),v.addVectors(f,p),_.crossVectors(m,v),v.crossVectors(_,m),_.normalize(),v.normalize();for(let b=0;b<=i;++b){let S=b/i*Math.PI*2,R=-t*Math.cos(S),O=t*Math.sin(S);u.x=p.x+(R*v.x+O*_.x),u.y=p.y+(R*v.y+O*_.y),u.z=p.z+(R*v.z+O*_.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(g/n),h.push(b/i)}}for(let g=1;g<=n;g++)for(let y=1;y<=i;y++){let b=(i+1)*(g-1)+(y-1),S=(i+1)*g+(y-1),R=(i+1)*g+y,O=(i+1)*(g-1)+y;o.push(b,S,O),o.push(S,R,O)}function x(g,y,b,S,R){let O=Math.cos(g),L=Math.sin(g),N=b/y*g,j=Math.cos(N);R.x=S*(2+j)*.5*O,R.y=S*(2+j)*L*.5,R.z=S*Math.sin(N)*.5}this.setIndex(o),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(c,3)),this.setAttribute("uv",new ke(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},io=class r extends dt{constructor(e=new bs(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new C,l=new C,c=new fe,h=new C,u=[],d=[],p=[],f=[];function _(m){h=e.getPointAt(m/t,h);let v=a.normals[m],x=a.binormals[m];for(let g=0;g<=i;g++){let y=g/i*Math.PI*2,b=Math.sin(y),S=-Math.cos(y);l.x=S*v.x+b*x.x,l.y=S*v.y+b*x.y,l.z=S*v.z+b*x.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let m=0;m<t;m++)_(m);_(s===!1?t:0),(function(){for(let m=0;m<=t;m++)for(let v=0;v<=i;v++)c.x=m/t,c.y=v/i,p.push(c.x,c.y)})(),(function(){for(let m=1;m<=t;m++)for(let v=1;v<=i;v++){let x=(i+1)*(m-1)+(v-1),g=(i+1)*m+(v-1),y=(i+1)*m+v,b=(i+1)*(m-1)+v;f.push(x,g,b),f.push(g,y,b)}})()})(),this.setIndex(f),this.setAttribute("position",new ke(u,3)),this.setAttribute("normal",new ke(d,3)),this.setAttribute("uv",new ke(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new Ya[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},ro=class extends dt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new C,s=new C;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,f=d+u.count;p<f;p+=3)for(let _=0;_<3;_++){let m=o.getX(p+_),v=o.getX(p+(_+1)%3);i.fromBufferAttribute(a,m),s.fromBufferAttribute(a,v),_h(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;i.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),_h(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new ke(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function _h(r,e,t){let n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)!==!0&&t.has(i)!==!0&&(t.add(n),t.add(i),!0)}var Vf=Object.freeze({__proto__:null,BoxGeometry:Zn,CapsuleGeometry:Ga,CircleGeometry:pi,ConeGeometry:Va,CylinderGeometry:Jn,DodecahedronGeometry:Ha,EdgesGeometry:Wa,ExtrudeGeometry:Ir,IcosahedronGeometry:Ja,LatheGeometry:Lr,OctahedronGeometry:Ka,PlaneGeometry:Ln,PolyhedronGeometry:mi,RingGeometry:Qa,ShapeGeometry:eo,SphereGeometry:Qt,TetrahedronGeometry:to,TorusGeometry:gn,TorusKnotGeometry:no,TubeGeometry:io,WireframeGeometry:ro});var en=class extends qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},yt=class extends en{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var so=class extends qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ao=class extends qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ea(r,e){return r&&r.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r):r}function zd(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Ni=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},oo=class extends Ni{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:El,endingEnd:El}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Al:s=e,o=2*t-n;break;case Cl:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Al:a=e,l=2*n-t;break;case Cl:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=.5*(n-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(n-t)/(i-t),_=f*f,m=_*f,v=-d*m+2*d*_-d*f,x=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*f+1,g=(-1-p)*m+(1.5+p)*_+.5*f,y=p*m-p*_;for(let b=0;b!==o;++b)s[b]=v*a[h+b]+x*a[c+b]+g*a[l+b]+y*a[u+b];return s}},lo=class extends Ni{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},co=class extends Ni{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Jt=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ea(t,this.TimeBufferType),this.values=Ea(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ea(e.times,Array),values:Ea(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new co(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new lo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new oo(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case cs:t=this.InterpolantFactoryMethodDiscrete;break;case Ia:t=this.InterpolantFactoryMethodLinear;break;case Aa:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return cs;case this.InterpolantFactoryMethodLinear:return Ia;case this.InterpolantFactoryMethodSmooth:return Aa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&zd(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Aa,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(i)l=!0;else{let h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){let f=t[h+p];if(f!==t[u+p]||f!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};Jt.prototype.ValueTypeName="",Jt.prototype.TimeBufferType=Float32Array,Jt.prototype.ValueBufferType=Float32Array,Jt.prototype.DefaultInterpolation=Ia;var ci=class extends Jt{constructor(e,t,n){super(e,t,n)}};ci.prototype.ValueTypeName="bool",ci.prototype.ValueBufferType=Array,ci.prototype.DefaultInterpolation=cs,ci.prototype.InterpolantFactoryMethodLinear=void 0,ci.prototype.InterpolantFactoryMethodSmooth=void 0;var ho=class extends Jt{constructor(e,t,n,i){super(e,t,n,i)}};ho.prototype.ValueTypeName="color";var uo=class extends Jt{constructor(e,t,n,i){super(e,t,n,i)}};uo.prototype.ValueTypeName="number";var po=class extends Ni{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)un.slerpFlat(s,0,a,c-o,a,c,l);return s}},Rs=class extends Jt{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new po(this.times,this.values,this.getValueSize(),e)}};Rs.prototype.ValueTypeName="quaternion",Rs.prototype.InterpolantFactoryMethodSmooth=void 0;var hi=class extends Jt{constructor(e,t,n){super(e,t,n)}};hi.prototype.ValueTypeName="string",hi.prototype.ValueBufferType=Array,hi.prototype.DefaultInterpolation=cs,hi.prototype.InterpolantFactoryMethodLinear=void 0,hi.prototype.InterpolantFactoryMethodSmooth=void 0;var mo=class extends Jt{constructor(e,t,n,i){super(e,t,n,i)}};mo.prototype.ValueTypeName="vector";var Ra={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},fo=class{constructor(e,t,n){let i=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,a===!1&&i.onStart!==void 0&&i.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,l),o===l&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],f=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}},Tu=new fo,Dr=class{constructor(e){this.manager=e!==void 0?e:Tu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Dr.DEFAULT_MATERIAL_NAME="__DEFAULT";var xr=new WeakMap,go=class extends Dr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Ra.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=xr.get(a);u===void 0&&(u=[],xr.set(a,u)),u.push({onLoad:t,onError:i})}return a}let o=br("img");function l(){h(),t&&t(this);let u=xr.get(this)||[];for(let d=0;d<u.length;d++){let p=u[d];p.onLoad&&p.onLoad(this)}xr.delete(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),Ra.remove(`image:${e}`);let d=xr.get(this)||[];for(let p=0;p<d.length;p++){let f=d[p];f.onError&&f.onError(u)}xr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ra.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var Fi=class extends Dr{constructor(e){super(e)}load(e,t,n,i){let s=new Ht,a=new go(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},Ps=class extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Is=class extends Ps{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Tl=new We,xh=new C,yh=new C,Dl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new di,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;xh.setFromMatrixPosition(e.matrixWorld),t.position.copy(xh),yh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yh),t.updateMatrixWorld(),Tl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Tl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Hf=new We,Wf=new C,Xf=new C;var Ls=class extends wr{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ul=class extends Dl{constructor(){super(new Ls(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ur=class extends Ps{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new Ul}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var jf=new We,$f=new We,qf=new We;var vo=class extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Yf=new C,Zf=new un,Jf=new C,Kf=new C,Qf=new C;var eg=new C,tg=new un,ng=new C,ig=new C;var Tc="\\[\\]\\.:\\/",kd=new RegExp("["+Tc+"]","g"),wl="[^"+Tc+"]",Gd="[^"+Tc.replace("\\.","")+"]",Vd=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",wl)+/(WCOD+)?/.source.replace("WCOD",Gd)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wl)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wl)+"$"),Hd=["material","materials","bones","map"],ht=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(kd,"")}static parseTrackName(e){let t=Vd.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Hd.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ht.Composite=class{constructor(r,e,t){let n=t||ht.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,n)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray],ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rg=new Float32Array(1);var sg=new We;var ag=new fe;var og=new C,lg=new C;var cg=new C;var hg=new C,ug=new We,dg=new We;var pg=new C,mg=new Te,fg=new Te;var gg=new C,vg=new C,_g=new C;var xg=new C,yg=new wr;var Mg=new dn;var Sg=new C;function wc(r,e,t,n){let i=(function(s){switch(s){case Un:case Gl:return{byteLength:1,components:1};case Br:case Vl:case zr:return{byteLength:2,components:1};case Po:case Io:return{byteLength:2,components:4};case zi:case Ro:case Nn:return{byteLength:4,components:1};case Hl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(n);switch(t){case 1021:return r*e;case Wl:case Lo:return r*e/i.components*i.byteLength;case 1030:case 1031:return r*e*2/i.components*i.byteLength;case 1022:return r*e*3/i.components*i.byteLength;case vn:case 1033:return r*e*4/i.components*i.byteLength;case 33776:case 33777:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(r,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(r,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37808:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(r/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(r/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"178"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="178");function qu(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Xd(r){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=e.get(t);n&&(r.deleteBuffer(n.buffer),e.delete(t))},update:function(t,n){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let i=e.get(t);if(i===void 0)e.set(t,(function(s,a){let o=s.array,l=s.usage,c=o.byteLength,h=r.createBuffer(),u;if(r.bindBuffer(a,h),r.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)u=r.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)u=r.HALF_FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?r.HALF_FLOAT:r.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=r.SHORT;else if(o instanceof Uint32Array)u=r.UNSIGNED_INT;else if(o instanceof Int32Array)u=r.INT;else if(o instanceof Int8Array)u=r.BYTE;else if(o instanceof Uint8Array)u=r.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=r.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:c}})(t,n));else if(i.version<t.version){if(i.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let l=a.array,c=a.updateRanges;if(r.bindBuffer(o,s),c.length===0)r.bufferSubData(o,0,l);else{c.sort((u,d)=>u.start-d.start);let h=0;for(let u=1;u<c.length;u++){let d=c[h],p=c[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,c[h]=p)}c.length=h+1;for(let u=0,d=c.length;u<d;u++){let p=c[u];r.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(i.buffer,t,n),i.version=t.version}}}}var je={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},ye={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Fn={basic:{uniforms:Bt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Bt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Te(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Bt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Bt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Bt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Te(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Bt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Bt([ye.points,ye.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Bt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Bt([ye.common,ye.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Bt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Bt([ye.sprite,ye.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Bt([ye.common,ye.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Bt([ye.lights,ye.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Fn.physical={uniforms:Bt([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var Bo={r:0,b:0,g:0},Vi=new mn,jd=new We;function $d(r,e,t,n,i,s,a){let o=new Te(0),l,c,h=s===!0?0:1,u=null,d=0,p=null;function f(m){let v=m.isScene===!0?m.background:null;return v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v}function _(m,v){m.getRGB(Bo,Sc(r)),n.buffers.color.setClear(Bo.r,Bo.g,Bo.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(m,v=1){o.set(m),h=v,_(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(m){h=m,_(o,h)},render:function(m){let v=!1,x=f(m);x===null?_(o,h):x&&x.isColor&&(_(x,1),v=!0);let g=r.xr.getEnvironmentBlendMode();g==="additive"?n.buffers.color.setClear(0,0,0,1,a):g==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))},addToRenderList:function(m,v){let x=f(v);x&&(x.isCubeTexture||x.mapping===Ns)?(c===void 0&&(c=new ze(new Zn(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:Gi(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(g,y,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Vi.copy(v.backgroundRotation),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(jd.makeRotationFromEuler(Vi)),c.material.toneMapped=st.getTransfer(x.colorSpace)!==ot,u===x&&d===x.version&&p===r.toneMapping||(c.material.needsUpdate=!0,u=x,d=x.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new ze(new Ln(2,2),new fn({name:"BackgroundMaterial",uniforms:Gi(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=st.getTransfer(x.colorSpace)!==ot,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),u===x&&d===x.version&&p===r.toneMapping||(l.material.needsUpdate=!0,u=x,d=x.version,p=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))},dispose:function(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}}}function qd(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=c(null),s=i,a=!1;function o(v){return r.bindVertexArray(v)}function l(v){return r.deleteVertexArray(v)}function c(v){let x=[],g=[],y=[];for(let b=0;b<t;b++)x[b]=0,g[b]=0,y[b]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:x,enabledAttributes:g,attributeDivisors:y,object:v,attributes:{},index:null}}function h(){let v=s.newAttributes;for(let x=0,g=v.length;x<g;x++)v[x]=0}function u(v){d(v,0)}function d(v,x){let g=s.newAttributes,y=s.enabledAttributes,b=s.attributeDivisors;g[v]=1,y[v]===0&&(r.enableVertexAttribArray(v),y[v]=1),b[v]!==x&&(r.vertexAttribDivisor(v,x),b[v]=x)}function p(){let v=s.newAttributes,x=s.enabledAttributes;for(let g=0,y=x.length;g<y;g++)x[g]!==v[g]&&(r.disableVertexAttribArray(g),x[g]=0)}function f(v,x,g,y,b,S,R){R===!0?r.vertexAttribIPointer(v,x,g,b,S):r.vertexAttribPointer(v,x,g,y,b,S)}function _(){m(),a=!0,s!==i&&(s=i,o(s.object))}function m(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:function(v,x,g,y,b){let S=!1,R=(function(O,L,N){let j=N.wireframe===!0,W=n[O.id];W===void 0&&(W={},n[O.id]=W);let H=W[L.id];H===void 0&&(H={},W[L.id]=H);let z=H[j];return z===void 0&&(z=c(r.createVertexArray()),H[j]=z),z})(y,g,x);s!==R&&(s=R,o(s.object)),S=(function(O,L,N,j){let W=s.attributes,H=L.attributes,z=0,Z=N.getAttributes();for(let Q in Z)if(Z[Q].location>=0){let re=W[Q],ae=H[Q];if(ae===void 0&&(Q==="instanceMatrix"&&O.instanceMatrix&&(ae=O.instanceMatrix),Q==="instanceColor"&&O.instanceColor&&(ae=O.instanceColor)),re===void 0||re.attribute!==ae||ae&&re.data!==ae.data)return!0;z++}return s.attributesNum!==z||s.index!==j})(v,y,g,b),S&&(function(O,L,N,j){let W={},H=L.attributes,z=0,Z=N.getAttributes();for(let Q in Z)if(Z[Q].location>=0){let re=H[Q];re===void 0&&(Q==="instanceMatrix"&&O.instanceMatrix&&(re=O.instanceMatrix),Q==="instanceColor"&&O.instanceColor&&(re=O.instanceColor));let ae={};ae.attribute=re,re&&re.data&&(ae.data=re.data),W[Q]=ae,z++}s.attributes=W,s.attributesNum=z,s.index=j})(v,y,g,b),b!==null&&e.update(b,r.ELEMENT_ARRAY_BUFFER),(S||a)&&(a=!1,(function(O,L,N,j){h();let W=j.attributes,H=N.getAttributes(),z=L.defaultAttributeValues;for(let Z in H){let Q=H[Z];if(Q.location>=0){let re=W[Z];if(re===void 0&&(Z==="instanceMatrix"&&O.instanceMatrix&&(re=O.instanceMatrix),Z==="instanceColor"&&O.instanceColor&&(re=O.instanceColor)),re!==void 0){let ae=re.normalized,Me=re.itemSize,Ae=e.get(re);if(Ae===void 0)continue;let ie=Ae.buffer,ce=Ae.type,Se=Ae.bytesPerElement,be=ce===r.INT||ce===r.UNSIGNED_INT||re.gpuType===Ro;if(re.isInterleavedBufferAttribute){let xe=re.data,de=xe.stride,Ue=re.offset;if(xe.isInstancedInterleavedBuffer){for(let I=0;I<Q.locationSize;I++)d(Q.location+I,xe.meshPerAttribute);O.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let I=0;I<Q.locationSize;I++)u(Q.location+I);r.bindBuffer(r.ARRAY_BUFFER,ie);for(let I=0;I<Q.locationSize;I++)f(Q.location+I,Me/Q.locationSize,ce,ae,de*Se,(Ue+Me/Q.locationSize*I)*Se,be)}else{if(re.isInstancedBufferAttribute){for(let xe=0;xe<Q.locationSize;xe++)d(Q.location+xe,re.meshPerAttribute);O.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let xe=0;xe<Q.locationSize;xe++)u(Q.location+xe);r.bindBuffer(r.ARRAY_BUFFER,ie);for(let xe=0;xe<Q.locationSize;xe++)f(Q.location+xe,Me/Q.locationSize,ce,ae,Me*Se,Me/Q.locationSize*xe*Se,be)}}else if(z!==void 0){let ae=z[Z];if(ae!==void 0)switch(ae.length){case 2:r.vertexAttrib2fv(Q.location,ae);break;case 3:r.vertexAttrib3fv(Q.location,ae);break;case 4:r.vertexAttrib4fv(Q.location,ae);break;default:r.vertexAttrib1fv(Q.location,ae)}}}}p()})(v,x,g,y),b!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(b).buffer))},reset:_,resetDefaultState:m,dispose:function(){_();for(let v in n){let x=n[v];for(let g in x){let y=x[g];for(let b in y)l(y[b].object),delete y[b];delete x[g]}delete n[v]}},releaseStatesOfGeometry:function(v){if(n[v.id]===void 0)return;let x=n[v.id];for(let g in x){let y=x[g];for(let b in y)l(y[b].object),delete y[b];delete x[g]}delete n[v.id]},releaseStatesOfProgram:function(v){for(let x in n){let g=n[x];if(g[v.id]===void 0)continue;let y=g[v.id];for(let b in y)l(y[b].object),delete y[b];delete g[v.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function Yd(r,e,t){let n;function i(s,a,o){o!==0&&(r.drawArraysInstanced(n,s,a,o),t.update(a,n,o))}this.setMode=function(s){n=s},this.render=function(s,a){r.drawArrays(n,s,a),t.update(a,n,1)},this.renderInstances=i,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,s,0,a,0,o);let l=0;for(let c=0;c<o;c++)l+=a[c];t.update(l,n,1)},this.renderMultiDrawInstances=function(s,a,o,l){if(o===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<s.length;h++)i(s[h],a[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(n,s,0,a,0,l,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u]*l[u];t.update(h,n,1)}}}function Zd(r,e,t,n){let i;function s(d){if(d==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=t.logarithmicDepthBuffer===!0,c=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let d=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:s,textureFormatReadable:function(d){return d===vn||n.convert(d)===r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){let p=d===zr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==Un&&n.convert(d)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==Nn&&!p)},precision:a,logarithmicDepthBuffer:l,reverseDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:r.getParameter(r.MAX_TEXTURE_SIZE),maxCubemapSize:r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:r.getParameter(r.MAX_VERTEX_ATTRIBS),maxVertexUniforms:r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:r.getParameter(r.MAX_VARYING_VECTORS),maxFragmentUniforms:r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:r.getParameter(r.MAX_SAMPLES)}}function Jd(r){let e=this,t=null,n=0,i=!1,s=!1,a=new Zt,o=new Xe,l={value:null,needsUpdate:!1};function c(h,u,d,p){let f=h!==null?h.length:0,_=null;if(f!==0){if(_=l.value,p!==!0||_===null){let m=d+4*f,v=u.matrixWorldInverse;o.getNormalMatrix(v),(_===null||_.length<m)&&(_=new Float32Array(m));for(let x=0,g=d;x!==f;++x,g+=4)a.copy(h[x]).applyMatrix4(v,o),a.normal.toArray(_,g),_[g+3]=a.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,_}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||i;return i=u,n=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,f=h.clipIntersection,_=h.clipShadows,m=r.get(h);if(!i||p===null||p.length===0||s&&!_)s?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let v=s?0:n,x=4*v,g=m.clippingState||null;l.value=g,g=c(p,u,x,d);for(let y=0;y!==x;++y)g[y]=t[y];m.clippingState=g,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=v}}}function Kd(r){let e=new WeakMap;function t(i,s){return s===Eo?i.mapping=Or:s===Ao&&(i.mapping=Oi),i}function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping;if(s===Eo||s===Ao){if(e.has(i))return t(e.get(i).texture,i.mapping);{let a=i.image;if(a&&a.height>0){let o=new Ba(a.height);return o.fromEquirectangularTexture(r,i),e.set(i,o),i.addEventListener("dispose",n),t(o.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}var wu=[.125,.215,.35,.446,.526,.582],zs=20,Ec=new Ls,Eu=new Te,Ac=null,Cc=0,Rc=0,Pc=!1,Wi=(1+Math.sqrt(5))/2,Gr=1/Wi,Au=[new C(-Wi,Gr,0),new C(Wi,Gr,0),new C(-Gr,0,Wi),new C(Gr,0,Wi),new C(0,Wi,-Gr),new C(0,Wi,Gr),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],Qd=new C,Hr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){let{size:a=256,position:o=Qd}=s;Ac=this._renderer.getRenderTarget(),Cc=this._renderer.getActiveCubeFace(),Rc=this._renderer.getActiveMipmapLevel(),Pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ru(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ac,Cc,Rc),this._renderer.xr.enabled=Pc,e.scissorTest=!1,zo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Or||e.mapping===Oi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ac=this._renderer.getRenderTarget(),Cc=this._renderer.getActiveCubeFace(),Rc=this._renderer.getActiveMipmapLevel(),Pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:zr,format:vn,colorSpace:Ri,depthBuffer:!1},i=Cu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cu(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],l=[],c=[],h=a,u=a-4+1+wu.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);l.push(p);let f=1/p;d>a-4?f=wu[d-a+4-1]:d===0&&(f=0),c.push(f);let _=1/(p-2),m=-_,v=1+_,x=[m,m,v,m,v,v,m,m,v,v,m,v],g=6,y=6,b=3,S=2,R=1,O=new Float32Array(b*y*g),L=new Float32Array(S*y*g),N=new Float32Array(R*y*g);for(let W=0;W<g;W++){let H=W%3*2/3-1,z=W>2?0:-1,Z=[H,z,0,H+2/3,z,0,H+2/3,z+1,0,H,z,0,H+2/3,z+1,0,H,z+1,0];O.set(Z,b*y*W),L.set(x,S*y*W);let Q=[W,W,W,W,W,W];N.set(Q,R*y*W)}let j=new dt;j.setAttribute("position",new xt(O,b)),j.setAttribute("uv",new xt(L,S)),j.setAttribute("faceIndex",new xt(N,R)),o.push(j),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}})(s)),this._blurMaterial=(function(a,o,l){let c=new Float32Array(zs),h=new C(0,1,0);return new fn({name:"SphericalGaussianBlur",defines:{n:zs,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:kc(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})})(s,e,t)}return i}_compileMaterial(e){let t=new ze(this._lodPlanes[0],e);this._renderer.compile(t,Ec)}_sceneToCubeUV(e,t,n,i,s){let a=new Nt(90,1,t,n),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,u=c.toneMapping;c.getClearColor(Eu),c.toneMapping=Kn,c.autoClear=!1;let d=new Yn({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),p=new ze(new Zn,d),f=!1,_=e.background;_?_.isColor&&(d.color.copy(_),e.background=null,f=!0):(d.color.copy(Eu),f=!0);for(let m=0;m<6;m++){let v=m%3;v===0?(a.up.set(0,o[m],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x+l[m],s.y,s.z)):v===1?(a.up.set(0,0,o[m]),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y+l[m],s.z)):(a.up.set(0,o[m],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y,s.z+l[m]));let x=this._cubeSize;zo(i,v*x,m>2?x:0,x,x),c.setRenderTarget(i),f&&c.render(p,a),c.render(e,a)}p.geometry.dispose(),p.material.dispose(),c.toneMapping=u,c.autoClear=h,e.background=_}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Or||e.mapping===Oi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ru());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new ze(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;zo(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,Ec)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Au[(i-s-1)%Au.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new ze(this._lodPlanes[i],c),u=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,f=s/p,_=isFinite(s)?1+Math.floor(3*f):zs;_>zs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to 20`);let m=[],v=0;for(let y=0;y<zs;++y){let b=y/f,S=Math.exp(-b*b/2);m.push(S),y===0?v+=S:y<_&&(v+=2*S)}for(let y=0;y<m.length;y++)m[y]=m[y]/v;u.envMap.value=e.texture,u.samples.value=_,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:x}=this;u.dTheta.value=p,u.mipInt.value=x-n;let g=this._sizeLods[i];zo(t,3*g*(i>x-4?i-x+4:0),4*(this._cubeSize-g),3*g,2*g),l.setRenderTarget(t),l.render(h,Ec)}};function Cu(r,e,t){let n=new In(r,e,t);return n.texture.mapping=Ns,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Ru(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

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
		`,blending:fi,depthTest:!1,depthWrite:!1})}function Pu(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fi,depthTest:!1,depthWrite:!1})}function kc(){return`

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
	`}function ep(r){let e=new WeakMap,t=null;function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping,a=s===Eo||s===Ao,o=s===Or||s===Oi;if(a||o){let l=e.get(i),c=l!==void 0?l.texture.pmremVersion:0;if(i.isRenderTargetTexture&&i.pmremVersion!==c)return t===null&&(t=new Hr(r)),l=a?t.fromEquirectangular(i,l):t.fromCubemap(i,l),l.texture.pmremVersion=i.pmremVersion,e.set(i,l),l.texture;if(l!==void 0)return l.texture;{let h=i.image;return a&&h&&h.height>0||o&&h&&(function(u){let d=0,p=6;for(let f=0;f<p;f++)u[f]!==void 0&&d++;return d===p})(h)?(t===null&&(t=new Hr(r)),l=a?t.fromEquirectangular(i):t.fromCubemap(i),l.texture.pmremVersion=i.pmremVersion,e.set(i,l),i.addEventListener("dispose",n),l.texture):null}}}return i},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function tp(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Pi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function np(r,e,t,n){let i={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);c.removeEventListener("dispose",a),delete i[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(h!==null){let _=h.array;d=h.version;for(let m=0,v=_.length;m<v;m+=3){let x=_[m+0],g=_[m+1],y=_[m+2];c.push(x,g,g,y,y,x)}}else{if(u===void 0)return;{let _=u.array;d=u.version;for(let m=0,v=_.length/3-1;m<v;m+=3){let x=m+0,g=m+1,y=m+2;c.push(x,g,g,y,y,x)}}}let p=new(Mc(c)?fs:ms)(c,1);p.version=d;let f=s.get(l);f&&e.remove(f),s.set(l,p)}return{get:function(l,c){return i[c.id]===!0||(c.addEventListener("dispose",a),i[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let h in c)e.update(c[h],r.ARRAY_BUFFER)},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function ip(r,e,t){let n,i,s;function a(o,l,c){c!==0&&(r.drawElementsInstanced(n,l,i,o*s,c),t.update(l,n,c))}this.setMode=function(o){n=o},this.setIndex=function(o){i=o.type,s=o.bytesPerElement},this.render=function(o,l){r.drawElements(n,l,i,o*s),t.update(l,n,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,l,0,i,o,0,c);let h=0;for(let u=0;u<c;u++)h+=l[u];t.update(h,n,1)},this.renderMultiDrawInstances=function(o,l,c,h){if(c===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/s,l[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(n,l,0,i,o,0,h,0,c);let d=0;for(let p=0;p<c;p++)d+=l[p]*h[p];t.update(d,n,1)}}}function rp(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,i){switch(e.calls++,n){case r.TRIANGLES:e.triangles+=i*(t/3);break;case r.LINES:e.lines+=i*(t/2);break;case r.LINE_STRIP:e.lines+=i*(t-1);break;case r.LINE_LOOP:e.lines+=i*t;break;case r.POINTS:e.points+=i*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function sp(r,e,t){let n=new WeakMap,i=new ut;return{update:function(s,a,o){let l=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,u=n.get(a);if(u===void 0||u.count!==h){let O=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",O)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],x=0;d===!0&&(x=1),p===!0&&(x=2),f===!0&&(x=3);let g=a.attributes.position.count*x,y=1;g>e.maxTextureSize&&(y=Math.ceil(g/e.maxTextureSize),g=e.maxTextureSize);let b=new Float32Array(g*y*4*h),S=new ds(b,g,y,h);S.type=Nn,S.needsUpdate=!0;let R=4*x;for(let L=0;L<h;L++){let N=_[L],j=m[L],W=v[L],H=g*y*4*L;for(let z=0;z<N.count;z++){let Z=z*R;d===!0&&(i.fromBufferAttribute(N,z),b[H+Z+0]=i.x,b[H+Z+1]=i.y,b[H+Z+2]=i.z,b[H+Z+3]=0),p===!0&&(i.fromBufferAttribute(j,z),b[H+Z+4]=i.x,b[H+Z+5]=i.y,b[H+Z+6]=i.z,b[H+Z+7]=0),f===!0&&(i.fromBufferAttribute(W,z),b[H+Z+8]=i.x,b[H+Z+9]=i.y,b[H+Z+10]=i.z,b[H+Z+11]=W.itemSize===4?i.w:1)}}u={count:h,texture:S,size:new fe(g,y)},n.set(a,u),a.addEventListener("dispose",O)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let d=0;for(let f=0;f<l.length;f++)d+=l[f];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(r,"morphTargetBaseInfluence",p),o.getUniforms().setValue(r,"morphTargetInfluences",l)}o.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}}}function ap(r,e,t,n){let i=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,l=a.geometry,c=e.get(a,l);if(i.get(c)!==o&&(e.update(c),i.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),i.get(a)!==o&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;i.get(h)!==o&&(h.update(),i.set(h,o))}return c},dispose:function(){i=new WeakMap}}}var Yu=new Ht,Iu=new xs(1,1),Zu=new ds,Ju=new Fa,Ku=new gs,Lu=[],Du=[],Uu=new Float32Array(16),Nu=new Float32Array(9),Fu=new Float32Array(4);function Wr(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Lu[i];if(s===void 0&&(s=new Float32Array(i),Lu[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function At(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ct(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Vo(r,e){let t=Du[e];t===void 0&&(t=new Int32Array(e),Du[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function op(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function lp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;r.uniform2fv(this.addr,e),Ct(t,e)}}function cp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;r.uniform3fv(this.addr,e),Ct(t,e)}}function hp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;r.uniform4fv(this.addr,e),Ct(t,e)}}function up(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,n))return;Fu.set(n),r.uniformMatrix2fv(this.addr,!1,Fu),Ct(t,n)}}function dp(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,n))return;Nu.set(n),r.uniformMatrix3fv(this.addr,!1,Nu),Ct(t,n)}}function pp(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ct(t,e)}else{if(At(t,n))return;Uu.set(n),r.uniformMatrix4fv(this.addr,!1,Uu),Ct(t,n)}}function mp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function fp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;r.uniform2iv(this.addr,e),Ct(t,e)}}function gp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;r.uniform3iv(this.addr,e),Ct(t,e)}}function vp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;r.uniform4iv(this.addr,e),Ct(t,e)}}function _p(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function xp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;r.uniform2uiv(this.addr,e),Ct(t,e)}}function yp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;r.uniform3uiv(this.addr,e),Ct(t,e)}}function Mp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;r.uniform4uiv(this.addr,e),Ct(t,e)}}function Sp(r,e,t){let n=this.cache,i=t.allocateTextureUnit(),s;n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),this.type===r.SAMPLER_2D_SHADOW?(Iu.compareFunction=xc,s=Iu):s=Yu,t.setTexture2D(e||s,i)}function bp(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ju,i)}function Tp(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ku,i)}function wp(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Zu,i)}function Ep(r,e){r.uniform1fv(this.addr,e)}function Ap(r,e){let t=Wr(e,this.size,2);r.uniform2fv(this.addr,t)}function Cp(r,e){let t=Wr(e,this.size,3);r.uniform3fv(this.addr,t)}function Rp(r,e){let t=Wr(e,this.size,4);r.uniform4fv(this.addr,t)}function Pp(r,e){let t=Wr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Ip(r,e){let t=Wr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Lp(r,e){let t=Wr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Dp(r,e){r.uniform1iv(this.addr,e)}function Up(r,e){r.uniform2iv(this.addr,e)}function Np(r,e){r.uniform3iv(this.addr,e)}function Fp(r,e){r.uniform4iv(this.addr,e)}function Op(r,e){r.uniform1uiv(this.addr,e)}function Bp(r,e){r.uniform2uiv(this.addr,e)}function zp(r,e){r.uniform3uiv(this.addr,e)}function kp(r,e){r.uniform4uiv(this.addr,e)}function Gp(r,e,t){let n=this.cache,i=e.length,s=Vo(t,i);At(n,s)||(r.uniform1iv(this.addr,s),Ct(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Yu,s[a])}function Vp(r,e,t){let n=this.cache,i=e.length,s=Vo(t,i);At(n,s)||(r.uniform1iv(this.addr,s),Ct(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Ju,s[a])}function Hp(r,e,t){let n=this.cache,i=e.length,s=Vo(t,i);At(n,s)||(r.uniform1iv(this.addr,s),Ct(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Ku,s[a])}function Wp(r,e,t){let n=this.cache,i=e.length,s=Vo(t,i);At(n,s)||(r.uniform1iv(this.addr,s),Ct(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Zu,s[a])}var Lc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(i){switch(i){case 5126:return op;case 35664:return lp;case 35665:return cp;case 35666:return hp;case 35674:return up;case 35675:return dp;case 35676:return pp;case 5124:case 35670:return mp;case 35667:case 35671:return fp;case 35668:case 35672:return gp;case 35669:case 35673:return vp;case 5125:return _p;case 36294:return xp;case 36295:return yp;case 36296:return Mp;case 35678:case 36198:case 36298:case 36306:case 35682:return Sp;case 35679:case 36299:case 36307:return bp;case 35680:case 36300:case 36308:case 36293:return Tp;case 36289:case 36303:case 36311:case 36292:return wp}})(t.type)}},Dc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(i){switch(i){case 5126:return Ep;case 35664:return Ap;case 35665:return Cp;case 35666:return Rp;case 35674:return Pp;case 35675:return Ip;case 35676:return Lp;case 5124:case 35670:return Dp;case 35667:case 35671:return Up;case 35668:case 35672:return Np;case 35669:case 35673:return Fp;case 5125:return Op;case 36294:return Bp;case 36295:return zp;case 36296:return kp;case 35678:case 36198:case 36298:case 36306:case 35682:return Gp;case 35679:case 36299:case 36307:return Vp;case 35680:case 36300:case 36308:case 36293:return Hp;case 36289:case 36303:case 36311:case 36292:return Wp}})(t.type)}},Uc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},Ic=/(\w+)(\])?(\[|\.)?/g;function Ou(r,e){r.seq.push(e),r.map[e.id]=e}function Xp(r,e,t){let n=r.name,i=n.length;for(Ic.lastIndex=0;;){let s=Ic.exec(n),a=Ic.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===i){Ou(t,c===void 0?new Lc(o,r,e):new Dc(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new Uc(o),Ou(t,h)),t=h}}}var Vr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i);Xp(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Bu(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var jp=0,zu=new Xe;function ku(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+(function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let f=p+1;h.push(`${f===l?">":" "} ${f}: ${c[p]}`)}return h.join(`
`)})(r.getShaderSource(e),a)}return i}function $p(r,e){let t=(function(n){st._getMatrix(zu,st.workingColorSpace,n);let i=`mat3( ${zu.elements.map(s=>s.toFixed(4))} )`;switch(st.getTransfer(n)){case hs:return[i,"LinearTransferOETF"];case ot:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[i,"LinearTransferOETF"]}})(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function qp(r,e){let t;switch(e){case $h:t="Linear";break;case qh:t="Reinhard";break;case Yh:t="Cineon";break;case Zh:t="ACESFilmic";break;case Kh:t="AgX";break;case wo:t="Neutral";break;case Jh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ko=new C;function Yp(){return st.getLuminanceCoefficients(ko),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${ko.x.toFixed(4)}, ${ko.y.toFixed(4)}, ${ko.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ks(r){return r!==""}function Gu(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Zp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nc(r){return r.replace(Zp,Kp)}var Jp=new Map;function Kp(r,e){let t=je[e];if(t===void 0){let n=Jp.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return Nc(t)}var Qp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hu(r){return r.replace(Qp,em)}function em(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Wu(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function tm(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(j){let W="SHADOWMAP_TYPE_BASIC";return j.shadowMapType===Fl?W="SHADOWMAP_TYPE_PCF":j.shadowMapType===bh?W="SHADOWMAP_TYPE_PCF_SOFT":j.shadowMapType===Dn&&(W="SHADOWMAP_TYPE_VSM"),W})(t),c=(function(j){let W="ENVMAP_TYPE_CUBE";if(j.envMap)switch(j.envMapMode){case Or:case Oi:W="ENVMAP_TYPE_CUBE";break;case Ns:W="ENVMAP_TYPE_CUBE_UV"}return W})(t),h=(function(j){let W="ENVMAP_MODE_REFLECTION";return j.envMap&&j.envMapMode===Oi&&(W="ENVMAP_MODE_REFRACTION"),W})(t),u=(function(j){let W="ENVMAP_BLENDING_NONE";if(j.envMap)switch(j.combine){case Wh:W="ENVMAP_BLENDING_MULTIPLY";break;case Xh:W="ENVMAP_BLENDING_MIX";break;case jh:W="ENVMAP_BLENDING_ADD"}return W})(t),d=(function(j){let W=j.envMapCubeUVHeight;if(W===null)return null;let H=Math.log2(W)-2,z=1/W;return{texelWidth:1/(3*Math.max(Math.pow(2,H),112)),texelHeight:z,maxMip:H}})(t),p=(function(j){return[j.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",j.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ks).join(`
`)})(t),f=(function(j){let W=[];for(let H in j){let z=j[H];z!==!1&&W.push("#define "+H+" "+z)}return W.join(`
`)})(s),_=i.createProgram(),m,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ks).join(`
`),m.length>0&&(m+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ks).join(`
`),v.length>0&&(v+=`
`)):(m=[Wu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ks).join(`
`),v=[Wu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kn?"#define TONE_MAPPING":"",t.toneMapping!==Kn?je.tonemapping_pars_fragment:"",t.toneMapping!==Kn?qp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,$p("linearToOutputTexel",t.outputColorSpace),Yp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ks).join(`
`)),a=Nc(a),a=Gu(a,t),a=Vu(a,t),o=Nc(o),o=Gu(o,t),o=Vu(o,t),a=Hu(a),o=Hu(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,v=["#define varying in",t.glslVersion===yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let g=x+m+a,y=x+v+o,b=Bu(i,i.VERTEX_SHADER,g),S=Bu(i,i.FRAGMENT_SHADER,y);function R(j){if(r.debug.checkShaderErrors){let W=i.getProgramInfoLog(_).trim(),H=i.getShaderInfoLog(b).trim(),z=i.getShaderInfoLog(S).trim(),Z=!0,Q=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,b,S);else{let re=ku(i,b,"vertex"),ae=ku(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+W+`
`+re+`
`+ae)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):H!==""&&z!==""||(Q=!1);Q&&(j.diagnostics={runnable:Z,programLog:W,vertexShader:{log:H,prefix:m},fragmentShader:{log:z,prefix:v}})}i.deleteShader(b),i.deleteShader(S),O=new Vr(i,_),L=(function(W,H){let z={},Z=W.getProgramParameter(H,W.ACTIVE_ATTRIBUTES);for(let Q=0;Q<Z;Q++){let re=W.getActiveAttrib(H,Q),ae=re.name,Me=1;re.type===W.FLOAT_MAT2&&(Me=2),re.type===W.FLOAT_MAT3&&(Me=3),re.type===W.FLOAT_MAT4&&(Me=4),z[ae]={type:re.type,location:W.getAttribLocation(H,ae),locationSize:Me}}return z})(i,_)}let O,L;i.attachShader(_,b),i.attachShader(_,S),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),this.getUniforms=function(){return O===void 0&&R(this),O},this.getAttributes=function(){return L===void 0&&R(this),L};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=i.getProgramParameter(_,37297)),N},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jp++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=S,this}var nm=0,Fc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Oc(e),t.set(e,n)),n}},Oc=class{constructor(e){this.id=nm++,this.code=e,this.usedTimes=0}};function im(r,e,t,n,i,s,a){let o=new ps,l=new Fc,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,p=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(m){return c.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,v,x,g,y){let b=g.fog,S=y.geometry,R=m.isMeshStandardMaterial?g.environment:null,O=(m.isMeshStandardMaterial?t:e).get(m.envMap||R),L=O&&O.mapping===Ns?O.image.height:null,N=f[m.type];m.precision!==null&&(p=i.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let j=S.morphAttributes.position||S.morphAttributes.normal||S.morphAttributes.color,W=j!==void 0?j.length:0,H,z,Z,Q,re=0;if(S.morphAttributes.position!==void 0&&(re=1),S.morphAttributes.normal!==void 0&&(re=2),S.morphAttributes.color!==void 0&&(re=3),N){let Fe=Fn[N];H=Fe.vertexShader,z=Fe.fragmentShader}else H=m.vertexShader,z=m.fragmentShader,l.update(m),Z=l.getVertexShaderID(m),Q=l.getFragmentShaderID(m);let ae=r.getRenderTarget(),Me=r.state.buffers.depth.getReversed(),Ae=y.isInstancedMesh===!0,ie=y.isBatchedMesh===!0,ce=!!m.map,Se=!!m.matcap,be=!!O,xe=!!m.aoMap,de=!!m.lightMap,Ue=!!m.bumpMap,I=!!m.normalMap,w=!!m.displacementMap,V=!!m.emissiveMap,k=!!m.metalnessMap,M=!!m.roughnessMap,T=m.anisotropy>0,A=m.clearcoat>0,P=m.dispersion>0,B=m.iridescence>0,X=m.sheen>0,U=m.transmission>0,D=T&&!!m.anisotropyMap,J=A&&!!m.clearcoatMap,q=A&&!!m.clearcoatNormalMap,te=A&&!!m.clearcoatRoughnessMap,le=B&&!!m.iridescenceMap,ne=B&&!!m.iridescenceThicknessMap,he=X&&!!m.sheenColorMap,ve=X&&!!m.sheenRoughnessMap,Ee=!!m.specularMap,_e=!!m.specularColorMap,Ce=!!m.specularIntensityMap,Ne=U&&!!m.transmissionMap,tt=U&&!!m.thicknessMap,ge=!!m.gradientMap,Le=!!m.alphaMap,Ie=m.alphaTest>0,nt=!!m.alphaHash,at=!!m.extensions,it=Kn;m.toneMapped&&(ae!==null&&ae.isXRRenderTarget!==!0||(it=r.toneMapping));let F={shaderID:N,shaderType:m.type,shaderName:m.name,vertexShader:H,fragmentShader:z,defines:m.defines,customVertexShaderID:Z,customFragmentShaderID:Q,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:ie,batchingColor:ie&&y._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&y.instanceColor!==null,instancingMorph:Ae&&y.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ae===null?r.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Ri,alphaToCoverage:!!m.alphaToCoverage,map:ce,matcap:Se,envMap:be,envMapMode:be&&O.mapping,envMapCubeUVHeight:L,aoMap:xe,lightMap:de,bumpMap:Ue,normalMap:I,displacementMap:d&&w,emissiveMap:V,normalMapObjectSpace:I&&m.normalMapType===au,normalMapTangentSpace:I&&m.normalMapType===su,metalnessMap:k,roughnessMap:M,anisotropy:T,anisotropyMap:D,clearcoat:A,clearcoatMap:J,clearcoatNormalMap:q,clearcoatRoughnessMap:te,dispersion:P,iridescence:B,iridescenceMap:le,iridescenceThicknessMap:ne,sheen:X,sheenColorMap:he,sheenRoughnessMap:ve,specularMap:Ee,specularColorMap:_e,specularIntensityMap:Ce,transmission:U,transmissionMap:Ne,thicknessMap:tt,gradientMap:ge,opaque:m.transparent===!1&&m.blending===Ds&&m.alphaToCoverage===!1,alphaMap:Le,alphaTest:Ie,alphaHash:nt,combine:m.combine,mapUv:ce&&_(m.map.channel),aoMapUv:xe&&_(m.aoMap.channel),lightMapUv:de&&_(m.lightMap.channel),bumpMapUv:Ue&&_(m.bumpMap.channel),normalMapUv:I&&_(m.normalMap.channel),displacementMapUv:w&&_(m.displacementMap.channel),emissiveMapUv:V&&_(m.emissiveMap.channel),metalnessMapUv:k&&_(m.metalnessMap.channel),roughnessMapUv:M&&_(m.roughnessMap.channel),anisotropyMapUv:D&&_(m.anisotropyMap.channel),clearcoatMapUv:J&&_(m.clearcoatMap.channel),clearcoatNormalMapUv:q&&_(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&_(m.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&_(m.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&_(m.iridescenceThicknessMap.channel),sheenColorMapUv:he&&_(m.sheenColorMap.channel),sheenRoughnessMapUv:ve&&_(m.sheenRoughnessMap.channel),specularMapUv:Ee&&_(m.specularMap.channel),specularColorMapUv:_e&&_(m.specularColorMap.channel),specularIntensityMapUv:Ce&&_(m.specularIntensityMap.channel),transmissionMapUv:Ne&&_(m.transmissionMap.channel),thicknessMapUv:tt&&_(m.thicknessMap.channel),alphaMapUv:Le&&_(m.alphaMap.channel),vertexTangents:!!S.attributes.tangent&&(I||T),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!S.attributes.color&&S.attributes.color.itemSize===4,pointsUvs:y.isPoints===!0&&!!S.attributes.uv&&(ce||Le),fog:!!b,useFog:m.fog===!0,fogExp2:!!b&&b.isFogExp2,flatShading:m.flatShading===!0&&m.wireframe===!1,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Me,skinning:y.isSkinnedMesh===!0,morphTargets:S.morphAttributes.position!==void 0,morphNormals:S.morphAttributes.normal!==void 0,morphColors:S.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:re,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:r.shadowMap.enabled&&x.length>0,shadowMapType:r.shadowMap.type,toneMapping:it,decodeVideoTexture:ce&&m.map.isVideoTexture===!0&&st.getTransfer(m.map.colorSpace)===ot,decodeVideoTextureEmissive:V&&m.emissiveMap.isVideoTexture===!0&&st.getTransfer(m.emissiveMap.colorSpace)===ot,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===Et,flipSided:m.side===Ot,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:at&&m.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&m.extensions.multiDraw===!0||ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return F.vertexUv1s=c.has(1),F.vertexUv2s=c.has(2),F.vertexUv3s=c.has(3),c.clear(),F},getProgramCacheKey:function(m){let v=[];if(m.shaderID?v.push(m.shaderID):(v.push(m.customVertexShaderID),v.push(m.customFragmentShaderID)),m.defines!==void 0)for(let x in m.defines)v.push(x),v.push(m.defines[x]);return m.isRawShaderMaterial===!1&&((function(x,g){x.push(g.precision),x.push(g.outputColorSpace),x.push(g.envMapMode),x.push(g.envMapCubeUVHeight),x.push(g.mapUv),x.push(g.alphaMapUv),x.push(g.lightMapUv),x.push(g.aoMapUv),x.push(g.bumpMapUv),x.push(g.normalMapUv),x.push(g.displacementMapUv),x.push(g.emissiveMapUv),x.push(g.metalnessMapUv),x.push(g.roughnessMapUv),x.push(g.anisotropyMapUv),x.push(g.clearcoatMapUv),x.push(g.clearcoatNormalMapUv),x.push(g.clearcoatRoughnessMapUv),x.push(g.iridescenceMapUv),x.push(g.iridescenceThicknessMapUv),x.push(g.sheenColorMapUv),x.push(g.sheenRoughnessMapUv),x.push(g.specularMapUv),x.push(g.specularColorMapUv),x.push(g.specularIntensityMapUv),x.push(g.transmissionMapUv),x.push(g.thicknessMapUv),x.push(g.combine),x.push(g.fogExp2),x.push(g.sizeAttenuation),x.push(g.morphTargetsCount),x.push(g.morphAttributeCount),x.push(g.numDirLights),x.push(g.numPointLights),x.push(g.numSpotLights),x.push(g.numSpotLightMaps),x.push(g.numHemiLights),x.push(g.numRectAreaLights),x.push(g.numDirLightShadows),x.push(g.numPointLightShadows),x.push(g.numSpotLightShadows),x.push(g.numSpotLightShadowsWithMaps),x.push(g.numLightProbes),x.push(g.shadowMapType),x.push(g.toneMapping),x.push(g.numClippingPlanes),x.push(g.numClipIntersection),x.push(g.depthPacking)})(v,m),(function(x,g){o.disableAll(),g.supportsVertexTextures&&o.enable(0),g.instancing&&o.enable(1),g.instancingColor&&o.enable(2),g.instancingMorph&&o.enable(3),g.matcap&&o.enable(4),g.envMap&&o.enable(5),g.normalMapObjectSpace&&o.enable(6),g.normalMapTangentSpace&&o.enable(7),g.clearcoat&&o.enable(8),g.iridescence&&o.enable(9),g.alphaTest&&o.enable(10),g.vertexColors&&o.enable(11),g.vertexAlphas&&o.enable(12),g.vertexUv1s&&o.enable(13),g.vertexUv2s&&o.enable(14),g.vertexUv3s&&o.enable(15),g.vertexTangents&&o.enable(16),g.anisotropy&&o.enable(17),g.alphaHash&&o.enable(18),g.batching&&o.enable(19),g.dispersion&&o.enable(20),g.batchingColor&&o.enable(21),g.gradientMap&&o.enable(22),x.push(o.mask),o.disableAll(),g.fog&&o.enable(0),g.useFog&&o.enable(1),g.flatShading&&o.enable(2),g.logarithmicDepthBuffer&&o.enable(3),g.reverseDepthBuffer&&o.enable(4),g.skinning&&o.enable(5),g.morphTargets&&o.enable(6),g.morphNormals&&o.enable(7),g.morphColors&&o.enable(8),g.premultipliedAlpha&&o.enable(9),g.shadowMapEnabled&&o.enable(10),g.doubleSided&&o.enable(11),g.flipSided&&o.enable(12),g.useDepthPacking&&o.enable(13),g.dithering&&o.enable(14),g.transmission&&o.enable(15),g.sheen&&o.enable(16),g.opaque&&o.enable(17),g.pointsUvs&&o.enable(18),g.decodeVideoTexture&&o.enable(19),g.decodeVideoTextureEmissive&&o.enable(20),g.alphaToCoverage&&o.enable(21),x.push(o.mask)})(v,m),v.push(r.outputColorSpace)),v.push(m.customProgramCacheKey),v.join()},getUniforms:function(m){let v=f[m.type],x;if(v){let g=Fn[v];x=xu.clone(g.uniforms)}else x=m.uniforms;return x},acquireProgram:function(m,v){let x;for(let g=0,y=h.length;g<y;g++){let b=h[g];if(b.cacheKey===v){x=b,++x.usedTimes;break}}return x===void 0&&(x=new tm(r,v,m,s),h.push(x)),x},releaseProgram:function(m){if(--m.usedTimes===0){let v=h.indexOf(m);h[v]=h[h.length-1],h.pop(),m.destroy()}},releaseShaderCache:function(m){l.remove(m)},programs:h,dispose:function(){l.dispose()}}}function rm(){let r=new WeakMap;return{has:function(e){return r.has(e)},get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,n){r.get(e)[t]=n},dispose:function(){r=new WeakMap}}}function sm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Xu(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ju(){let r=[],e=0,t=[],n=[],i=[];function s(a,o,l,c,h,u){let d=r[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:u},r[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=c,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:i,init:function(){e=0,t.length=0,n.length=0,i.length=0},push:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.push(d):l.transparent===!0?i.push(d):t.push(d)},unshift:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.unshift(d):l.transparent===!0?i.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=r.length;a<o;a++){let l=r[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||sm),n.length>1&&n.sort(o||Xu),i.length>1&&i.sort(o||Xu)}}}function am(){let r=new WeakMap;return{get:function(e,t){let n=r.get(e),i;return n===void 0?(i=new ju,r.set(e,[i])):t>=n.length?(i=new ju,n.push(i)):i=n[t],i},dispose:function(){r=new WeakMap}}}function om(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Te};break;case"SpotLight":t={position:new C,direction:new C,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new C,halfWidth:new C,halfHeight:new C}}return r[e.id]=t,t}}}var lm=0;function cm(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function hm(r){let e=new om,t=(function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}})(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new C);let i=new C,s=new We,a=new We;return{setup:function(o){let l=0,c=0,h=0;for(let R=0;R<9;R++)n.probe[R].set(0,0,0);let u=0,d=0,p=0,f=0,_=0,m=0,v=0,x=0,g=0,y=0,b=0;o.sort(cm);for(let R=0,O=o.length;R<O;R++){let L=o[R],N=L.color,j=L.intensity,W=L.distance,H=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)l+=N.r*j,c+=N.g*j,h+=N.b*j;else if(L.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(L.sh.coefficients[z],j);b++}else if(L.isDirectionalLight){let z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Z=L.shadow,Q=t.get(L);Q.shadowIntensity=Z.intensity,Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,n.directionalShadow[u]=Q,n.directionalShadowMap[u]=H,n.directionalShadowMatrix[u]=L.shadow.matrix,m++}n.directional[u]=z,u++}else if(L.isSpotLight){let z=e.get(L);z.position.setFromMatrixPosition(L.matrixWorld),z.color.copy(N).multiplyScalar(j),z.distance=W,z.coneCos=Math.cos(L.angle),z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),z.decay=L.decay,n.spot[p]=z;let Z=L.shadow;if(L.map&&(n.spotLightMap[g]=L.map,g++,Z.updateMatrices(L),L.castShadow&&y++),n.spotLightMatrix[p]=Z.matrix,L.castShadow){let Q=t.get(L);Q.shadowIntensity=Z.intensity,Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,n.spotShadow[p]=Q,n.spotShadowMap[p]=H,x++}p++}else if(L.isRectAreaLight){let z=e.get(L);z.color.copy(N).multiplyScalar(j),z.halfWidth.set(.5*L.width,0,0),z.halfHeight.set(0,.5*L.height,0),n.rectArea[f]=z,f++}else if(L.isPointLight){let z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),z.distance=L.distance,z.decay=L.decay,L.castShadow){let Z=L.shadow,Q=t.get(L);Q.shadowIntensity=Z.intensity,Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,Q.shadowCameraNear=Z.camera.near,Q.shadowCameraFar=Z.camera.far,n.pointShadow[d]=Q,n.pointShadowMap[d]=H,n.pointShadowMatrix[d]=L.shadow.matrix,v++}n.point[d]=z,d++}else if(L.isHemisphereLight){let z=e.get(L);z.skyColor.copy(L.color).multiplyScalar(j),z.groundColor.copy(L.groundColor).multiplyScalar(j),n.hemi[_]=z,_++}}f>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=c,n.ambient[2]=h;let S=n.hash;S.directionalLength===u&&S.pointLength===d&&S.spotLength===p&&S.rectAreaLength===f&&S.hemiLength===_&&S.numDirectionalShadows===m&&S.numPointShadows===v&&S.numSpotShadows===x&&S.numSpotMaps===g&&S.numLightProbes===b||(n.directional.length=u,n.spot.length=p,n.rectArea.length=f,n.point.length=d,n.hemi.length=_,n.directionalShadow.length=m,n.directionalShadowMap.length=m,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=m,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+g-y,n.spotLightMap.length=g,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=b,S.directionalLength=u,S.pointLength=d,S.spotLength=p,S.rectAreaLength=f,S.hemiLength=_,S.numDirectionalShadows=m,S.numPointShadows=v,S.numSpotShadows=x,S.numSpotMaps=g,S.numLightProbes=b,n.version=lm++)},setupView:function(o,l){let c=0,h=0,u=0,d=0,p=0,f=l.matrixWorldInverse;for(let _=0,m=o.length;_<m;_++){let v=o[_];if(v.isDirectionalLight){let x=n.directional[c];x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(f),c++}else if(v.isSpotLight){let x=n.spot[u];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(f),x.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(f),u++}else if(v.isRectAreaLight){let x=n.rectArea[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(f),a.identity(),s.copy(v.matrixWorld),s.premultiply(f),a.extractRotation(s),x.halfWidth.set(.5*v.width,0,0),x.halfHeight.set(0,.5*v.height,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),d++}else if(v.isPointLight){let x=n.point[h];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(f),h++}else if(v.isHemisphereLight){let x=n.hemi[p];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(f),p++}}},state:n}}function $u(r){let e=new hm(r),t=[],n=[],i={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){i.camera=s,t.length=0,n.length=0},state:i,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){n.push(s)}}}function um(r){let e=new WeakMap;return{get:function(t,n=0){let i=e.get(t),s;return i===void 0?(s=new $u(r),e.set(t,[s])):n>=i.length?(s=new $u(r),i.push(s)):s=i[n],s},dispose:function(){e=new WeakMap}}}function dm(r,e,t){let n=new di,i=new fe,s=new fe,a=new ut,o=new so({depthPacking:ru}),l=new ao,c={},h=t.maxTextureSize,u={[Nr]:Ot,[Ot]:Nr,[Et]:Et},d=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new dt;f.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ze(f,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fl;let v=this.type;function x(S,R){let O=e.update(_);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new In(i.x,i.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(R,null,O,d,_,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(R,null,O,p,_,null)}function g(S,R,O,L){let N=null,j=O.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(j!==void 0)N=j;else if(N=O.isPointLight===!0?l:o,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let W=N.uuid,H=R.uuid,z=c[W];z===void 0&&(z={},c[W]=z);let Z=z[H];Z===void 0&&(Z=N.clone(),z[H]=Z,R.addEventListener("dispose",b)),N=Z}return N.visible=R.visible,N.wireframe=R.wireframe,N.side=L===Dn?R.shadowSide!==null?R.shadowSide:R.side:R.shadowSide!==null?R.shadowSide:u[R.side],N.alphaMap=R.alphaMap,N.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,N.map=R.map,N.clipShadows=R.clipShadows,N.clippingPlanes=R.clippingPlanes,N.clipIntersection=R.clipIntersection,N.displacementMap=R.displacementMap,N.displacementScale=R.displacementScale,N.displacementBias=R.displacementBias,N.wireframeLinewidth=R.wireframeLinewidth,N.linewidth=R.linewidth,O.isPointLight===!0&&N.isMeshDistanceMaterial===!0&&(r.properties.get(N).light=O),N}function y(S,R,O,L,N){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&N===Dn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,S.matrixWorld);let W=e.update(S),H=S.material;if(Array.isArray(H)){let z=W.groups;for(let Z=0,Q=z.length;Z<Q;Z++){let re=z[Z],ae=H[re.materialIndex];if(ae&&ae.visible){let Me=g(S,ae,L,N);S.onBeforeShadow(r,S,R,O,W,Me,re),r.renderBufferDirect(O,null,W,Me,S,re),S.onAfterShadow(r,S,R,O,W,Me,re)}}}else if(H.visible){let z=g(S,H,L,N);S.onBeforeShadow(r,S,R,O,W,z,null),r.renderBufferDirect(O,null,W,z,S,null),S.onAfterShadow(r,S,R,O,W,z,null)}}let j=S.children;for(let W=0,H=j.length;W<H;W++)y(j[W],R,O,L,N)}function b(S){S.target.removeEventListener("dispose",b);for(let R in c){let O=c[R],L=S.target.uuid;L in O&&(O[L].dispose(),delete O[L])}}this.render=function(S,R,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;let L=r.getRenderTarget(),N=r.getActiveCubeFace(),j=r.getActiveMipmapLevel(),W=r.state;W.setBlending(fi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let H=v!==Dn&&this.type===Dn,z=v===Dn&&this.type!==Dn;for(let Z=0,Q=S.length;Z<Q;Z++){let re=S[Z],ae=re.shadow;if(ae===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(ae.autoUpdate===!1&&ae.needsUpdate===!1)continue;i.copy(ae.mapSize);let Me=ae.getFrameExtents();if(i.multiply(Me),s.copy(ae.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Me.x),i.x=s.x*Me.x,ae.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Me.y),i.y=s.y*Me.y,ae.mapSize.y=s.y)),ae.map===null||H===!0||z===!0){let ie=this.type!==Dn?{minFilter:Rn,magFilter:Rn}:{};ae.map!==null&&ae.map.dispose(),ae.map=new In(i.x,i.y,ie),ae.map.texture.name=re.name+".shadowMap",ae.camera.updateProjectionMatrix()}r.setRenderTarget(ae.map),r.clear();let Ae=ae.getViewportCount();for(let ie=0;ie<Ae;ie++){let ce=ae.getViewport(ie);a.set(s.x*ce.x,s.y*ce.y,s.x*ce.z,s.y*ce.w),W.viewport(a),ae.updateMatrices(re,ie),n=ae.getFrustum(),y(R,O,ae.camera,re,this.type)}ae.isPointLightShadow!==!0&&this.type===Dn&&x(ae,O),ae.needsUpdate=!1}v=this.type,m.needsUpdate=!1,r.setRenderTarget(L,N,j)}}var pm={[_o]:xo,[yo]:bo,[Mo]:To,[Us]:So,[xo]:_o,[bo]:yo,[To]:Mo,[So]:Us};function mm(r,e){let t=new function(){let M=!1,T=new ut,A=null,P=new ut(0,0,0,0);return{setMask:function(B){A===B||M||(r.colorMask(B,B,B,B),A=B)},setLocked:function(B){M=B},setClear:function(B,X,U,D,J){J===!0&&(B*=D,X*=D,U*=D),T.set(B,X,U,D),P.equals(T)===!1&&(r.clearColor(B,X,U,D),P.copy(T))},reset:function(){M=!1,A=null,P.set(-1,0,0,0)}}},n=new function(){let M=!1,T=!1,A=null,P=null,B=null;return{setReversed:function(X){if(T!==X){let U=e.get("EXT_clip_control");X?U.clipControlEXT(U.LOWER_LEFT_EXT,U.ZERO_TO_ONE_EXT):U.clipControlEXT(U.LOWER_LEFT_EXT,U.NEGATIVE_ONE_TO_ONE_EXT),T=X;let D=B;B=null,this.setClear(D)}},getReversed:function(){return T},setTest:function(X){X?be(r.DEPTH_TEST):xe(r.DEPTH_TEST)},setMask:function(X){A===X||M||(r.depthMask(X),A=X)},setFunc:function(X){if(T&&(X=pm[X]),P!==X){switch(X){case _o:r.depthFunc(r.NEVER);break;case xo:r.depthFunc(r.ALWAYS);break;case yo:r.depthFunc(r.LESS);break;case Us:r.depthFunc(r.LEQUAL);break;case Mo:r.depthFunc(r.EQUAL);break;case So:r.depthFunc(r.GEQUAL);break;case bo:r.depthFunc(r.GREATER);break;case To:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}P=X}},setLocked:function(X){M=X},setClear:function(X){B!==X&&(T&&(X=1-X),r.clearDepth(X),B=X)},reset:function(){M=!1,A=null,P=null,B=null,T=!1}}},i=new function(){let M=!1,T=null,A=null,P=null,B=null,X=null,U=null,D=null,J=null;return{setTest:function(q){M||(q?be(r.STENCIL_TEST):xe(r.STENCIL_TEST))},setMask:function(q){T===q||M||(r.stencilMask(q),T=q)},setFunc:function(q,te,le){A===q&&P===te&&B===le||(r.stencilFunc(q,te,le),A=q,P=te,B=le)},setOp:function(q,te,le){X===q&&U===te&&D===le||(r.stencilOp(q,te,le),X=q,U=te,D=le)},setLocked:function(q){M=q},setClear:function(q){J!==q&&(r.clearStencil(q),J=q)},reset:function(){M=!1,T=null,A=null,P=null,B=null,X=null,U=null,D=null,J=null}}},s=new WeakMap,a=new WeakMap,o={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,f=null,_=null,m=null,v=null,x=null,g=null,y=new Te(0,0,0),b=0,S=!1,R=null,O=null,L=null,N=null,j=null,W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,z=0,Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(Z)[1]),H=z>=1):Z.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),H=z>=2);let Q=null,re={},ae=r.getParameter(r.SCISSOR_BOX),Me=r.getParameter(r.VIEWPORT),Ae=new ut().fromArray(ae),ie=new ut().fromArray(Me);function ce(M,T,A,P){let B=new Uint8Array(4),X=r.createTexture();r.bindTexture(M,X),r.texParameteri(M,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(M,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let U=0;U<A;U++)M===r.TEXTURE_3D||M===r.TEXTURE_2D_ARRAY?r.texImage3D(T,0,r.RGBA,1,1,P,0,r.RGBA,r.UNSIGNED_BYTE,B):r.texImage2D(T+U,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,B);return X}let Se={};function be(M){o[M]!==!0&&(r.enable(M),o[M]=!0)}function xe(M){o[M]!==!1&&(r.disable(M),o[M]=!1)}Se[r.TEXTURE_2D]=ce(r.TEXTURE_2D,r.TEXTURE_2D,1),Se[r.TEXTURE_CUBE_MAP]=ce(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[r.TEXTURE_2D_ARRAY]=ce(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Se[r.TEXTURE_3D]=ce(r.TEXTURE_3D,r.TEXTURE_3D,1,1),t.setClear(0,0,0,1),n.setClear(1),i.setClear(0),be(r.DEPTH_TEST),n.setFunc(Us),w(!1),V(Nl),be(r.CULL_FACE),I(fi);let de={[Fr]:r.FUNC_ADD,[wh]:r.FUNC_SUBTRACT,[Eh]:r.FUNC_REVERSE_SUBTRACT};de[Ah]=r.MIN,de[Ch]=r.MAX;let Ue={[Rh]:r.ZERO,[Ph]:r.ONE,[Ih]:r.SRC_COLOR,[Dh]:r.SRC_ALPHA,[zh]:r.SRC_ALPHA_SATURATE,[Oh]:r.DST_COLOR,[Nh]:r.DST_ALPHA,[Lh]:r.ONE_MINUS_SRC_COLOR,[Uh]:r.ONE_MINUS_SRC_ALPHA,[Bh]:r.ONE_MINUS_DST_COLOR,[Fh]:r.ONE_MINUS_DST_ALPHA,[kh]:r.CONSTANT_COLOR,[Gh]:r.ONE_MINUS_CONSTANT_COLOR,[Vh]:r.CONSTANT_ALPHA,[Hh]:r.ONE_MINUS_CONSTANT_ALPHA};function I(M,T,A,P,B,X,U,D,J,q){if(M!==fi){if(d===!1&&(be(r.BLEND),d=!0),M===Th)B=B||T,X=X||A,U=U||P,T===f&&B===v||(r.blendEquationSeparate(de[T],de[B]),f=T,v=B),A===_&&P===m&&X===x&&U===g||(r.blendFuncSeparate(Ue[A],Ue[P],Ue[X],Ue[U]),_=A,m=P,x=X,g=U),D.equals(y)!==!1&&J===b||(r.blendColor(D.r,D.g,D.b,J),y.copy(D),b=J),p=M,S=!1;else if(M!==p||q!==S){if(f===Fr&&v===Fr||(r.blendEquation(r.FUNC_ADD),f=Fr,v=Fr),q)switch(M){case Ds:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ol:r.blendFunc(r.ONE,r.ONE);break;case Bl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case zl:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",M)}else switch(M){case Ds:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ol:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Bl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",M)}_=null,m=null,x=null,g=null,y.set(0,0,0),b=0,p=M,S=q}}else d===!0&&(xe(r.BLEND),d=!1)}function w(M){R!==M&&(M?r.frontFace(r.CW):r.frontFace(r.CCW),R=M)}function V(M){M!==Mh?(be(r.CULL_FACE),M!==O&&(M===Nl?r.cullFace(r.BACK):M===Sh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):xe(r.CULL_FACE),O=M}function k(M,T,A){M?(be(r.POLYGON_OFFSET_FILL),N===T&&j===A||(r.polygonOffset(T,A),N=T,j=A)):xe(r.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:n,stencil:i},enable:be,disable:xe,bindFramebuffer:function(M,T){return l[M]!==T&&(r.bindFramebuffer(M,T),l[M]=T,M===r.DRAW_FRAMEBUFFER&&(l[r.FRAMEBUFFER]=T),M===r.FRAMEBUFFER&&(l[r.DRAW_FRAMEBUFFER]=T),!0)},drawBuffers:function(M,T){let A=h,P=!1;if(M){A=c.get(T),A===void 0&&(A=[],c.set(T,A));let B=M.textures;if(A.length!==B.length||A[0]!==r.COLOR_ATTACHMENT0){for(let X=0,U=B.length;X<U;X++)A[X]=r.COLOR_ATTACHMENT0+X;A.length=B.length,P=!0}}else A[0]!==r.BACK&&(A[0]=r.BACK,P=!0);P&&r.drawBuffers(A)},useProgram:function(M){return u!==M&&(r.useProgram(M),u=M,!0)},setBlending:I,setMaterial:function(M,T){M.side===Et?xe(r.CULL_FACE):be(r.CULL_FACE);let A=M.side===Ot;T&&(A=!A),w(A),M.blending===Ds&&M.transparent===!1?I(fi):I(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),n.setFunc(M.depthFunc),n.setTest(M.depthTest),n.setMask(M.depthWrite),t.setMask(M.colorWrite);let P=M.stencilWrite;i.setTest(P),P&&(i.setMask(M.stencilWriteMask),i.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),i.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),k(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?be(r.SAMPLE_ALPHA_TO_COVERAGE):xe(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:w,setCullFace:V,setLineWidth:function(M){M!==L&&(H&&r.lineWidth(M),L=M)},setPolygonOffset:k,setScissorTest:function(M){M?be(r.SCISSOR_TEST):xe(r.SCISSOR_TEST)},activeTexture:function(M){M===void 0&&(M=r.TEXTURE0+W-1),Q!==M&&(r.activeTexture(M),Q=M)},bindTexture:function(M,T,A){A===void 0&&(A=Q===null?r.TEXTURE0+W-1:Q);let P=re[A];P===void 0&&(P={type:void 0,texture:void 0},re[A]=P),P.type===M&&P.texture===T||(Q!==A&&(r.activeTexture(A),Q=A),r.bindTexture(M,T||Se[M]),P.type=M,P.texture=T)},unbindTexture:function(){let M=re[Q];M!==void 0&&M.type!==void 0&&(r.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexImage3D:function(){try{r.compressedTexImage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texImage2D:function(){try{r.texImage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texImage3D:function(){try{r.texImage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},updateUBOMapping:function(M,T){let A=a.get(T);A===void 0&&(A=new WeakMap,a.set(T,A));let P=A.get(M);P===void 0&&(P=r.getUniformBlockIndex(T,M.name),A.set(M,P))},uniformBlockBinding:function(M,T){let A=a.get(T).get(M);s.get(T)!==A&&(r.uniformBlockBinding(T,A,M.__bindingPointIndex),s.set(T,A))},texStorage2D:function(){try{r.texStorage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texStorage3D:function(){try{r.texStorage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texSubImage2D:function(){try{r.texSubImage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texSubImage3D:function(){try{r.texSubImage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},scissor:function(M){Ae.equals(M)===!1&&(r.scissor(M.x,M.y,M.z,M.w),Ae.copy(M))},viewport:function(M){ie.equals(M)===!1&&(r.viewport(M.x,M.y,M.z,M.w),ie.copy(M))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),n.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),o={},Q=null,re={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,f=null,_=null,m=null,v=null,x=null,g=null,y=new Te(0,0,0),b=0,S=!1,R=null,O=null,L=null,N=null,j=null,Ae.set(0,0,r.canvas.width,r.canvas.height),ie.set(0,0,r.canvas.width,r.canvas.height),t.reset(),n.reset(),i.reset()}}}function fm(r,e,t,n,i,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new fe,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(I,w){return p?new OffscreenCanvas(I,w):br("canvas")}function _(I,w,V){let k=1,M=Ue(I);if((M.width>V||M.height>V)&&(k=V/Math.max(M.width,M.height)),k<1){if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let T=Math.floor(k*M.width),A=Math.floor(k*M.height);u===void 0&&(u=f(T,A));let P=w?f(T,A):u;return P.width=T,P.height=A,P.getContext("2d").drawImage(I,0,0,T,A),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+T+"x"+A+")."),P}return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),I}return I}function m(I){return I.generateMipmaps}function v(I){r.generateMipmap(I)}function x(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function g(I,w,V,k,M=!1){if(I!==null){if(r[I]!==void 0)return r[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let T=w;if(w===r.RED&&(V===r.FLOAT&&(T=r.R32F),V===r.HALF_FLOAT&&(T=r.R16F),V===r.UNSIGNED_BYTE&&(T=r.R8)),w===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(T=r.R8UI),V===r.UNSIGNED_SHORT&&(T=r.R16UI),V===r.UNSIGNED_INT&&(T=r.R32UI),V===r.BYTE&&(T=r.R8I),V===r.SHORT&&(T=r.R16I),V===r.INT&&(T=r.R32I)),w===r.RG&&(V===r.FLOAT&&(T=r.RG32F),V===r.HALF_FLOAT&&(T=r.RG16F),V===r.UNSIGNED_BYTE&&(T=r.RG8)),w===r.RG_INTEGER&&(V===r.UNSIGNED_BYTE&&(T=r.RG8UI),V===r.UNSIGNED_SHORT&&(T=r.RG16UI),V===r.UNSIGNED_INT&&(T=r.RG32UI),V===r.BYTE&&(T=r.RG8I),V===r.SHORT&&(T=r.RG16I),V===r.INT&&(T=r.RG32I)),w===r.RGB_INTEGER&&(V===r.UNSIGNED_BYTE&&(T=r.RGB8UI),V===r.UNSIGNED_SHORT&&(T=r.RGB16UI),V===r.UNSIGNED_INT&&(T=r.RGB32UI),V===r.BYTE&&(T=r.RGB8I),V===r.SHORT&&(T=r.RGB16I),V===r.INT&&(T=r.RGB32I)),w===r.RGBA_INTEGER&&(V===r.UNSIGNED_BYTE&&(T=r.RGBA8UI),V===r.UNSIGNED_SHORT&&(T=r.RGBA16UI),V===r.UNSIGNED_INT&&(T=r.RGBA32UI),V===r.BYTE&&(T=r.RGBA8I),V===r.SHORT&&(T=r.RGBA16I),V===r.INT&&(T=r.RGBA32I)),w===r.RGB&&V===r.UNSIGNED_INT_5_9_9_9_REV&&(T=r.RGB9_E5),w===r.RGBA){let A=M?hs:st.getTransfer(k);V===r.FLOAT&&(T=r.RGBA32F),V===r.HALF_FLOAT&&(T=r.RGBA16F),V===r.UNSIGNED_BYTE&&(T=A===ot?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT_4_4_4_4&&(T=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(T=r.RGB5_A1)}return T!==r.R16F&&T!==r.R32F&&T!==r.RG16F&&T!==r.RG32F&&T!==r.RGBA16F&&T!==r.RGBA32F||e.get("EXT_color_buffer_float"),T}function y(I,w){let V;return I?w===null||w===zi||w===kr?V=r.DEPTH24_STENCIL8:w===Nn?V=r.DEPTH32F_STENCIL8:w===Br&&(V=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===zi||w===kr?V=r.DEPTH_COMPONENT24:w===Nn?V=r.DEPTH_COMPONENT32F:w===Br&&(V=r.DEPTH_COMPONENT16),V}function b(I,w){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==Rn&&I.minFilter!==Pn?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function S(I){let w=I.target;w.removeEventListener("dispose",S),(function(V){let k=n.get(V);if(k.__webglInit===void 0)return;let M=V.source,T=d.get(M);if(T){let A=T[k.__cacheKey];A.usedTimes--,A.usedTimes===0&&O(V),Object.keys(T).length===0&&d.delete(M)}n.remove(V)})(w),w.isVideoTexture&&h.delete(w)}function R(I){let w=I.target;w.removeEventListener("dispose",R),(function(V){let k=n.get(V);if(V.depthTexture&&(V.depthTexture.dispose(),n.remove(V.depthTexture)),V.isWebGLCubeRenderTarget)for(let T=0;T<6;T++){if(Array.isArray(k.__webglFramebuffer[T]))for(let A=0;A<k.__webglFramebuffer[T].length;A++)r.deleteFramebuffer(k.__webglFramebuffer[T][A]);else r.deleteFramebuffer(k.__webglFramebuffer[T]);k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer[T])}else{if(Array.isArray(k.__webglFramebuffer))for(let T=0;T<k.__webglFramebuffer.length;T++)r.deleteFramebuffer(k.__webglFramebuffer[T]);else r.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&r.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let T=0;T<k.__webglColorRenderbuffer.length;T++)k.__webglColorRenderbuffer[T]&&r.deleteRenderbuffer(k.__webglColorRenderbuffer[T]);k.__webglDepthRenderbuffer&&r.deleteRenderbuffer(k.__webglDepthRenderbuffer)}let M=V.textures;for(let T=0,A=M.length;T<A;T++){let P=n.get(M[T]);P.__webglTexture&&(r.deleteTexture(P.__webglTexture),a.memory.textures--),n.remove(M[T])}n.remove(V)})(w)}function O(I){let w=n.get(I);r.deleteTexture(w.__webglTexture);let V=I.source;delete d.get(V)[w.__cacheKey],a.memory.textures--}let L=0;function N(I,w){let V=n.get(I);if(I.isVideoTexture&&(function(k){let M=a.render.frame;h.get(k)!==M&&(h.set(k,M),k.update())})(I),I.isRenderTargetTexture===!1&&I.version>0&&V.__version!==I.version){let k=I.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(k.complete!==!1)return void re(V,I,w);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+w)}let j={[Mr]:r.REPEAT,[Sr]:r.CLAMP_TO_EDGE,[Pa]:r.MIRRORED_REPEAT},W={[Rn]:r.NEAREST,[Qh]:r.NEAREST_MIPMAP_NEAREST,[Fs]:r.NEAREST_MIPMAP_LINEAR,[Pn]:r.LINEAR,[Co]:r.LINEAR_MIPMAP_NEAREST,[Bi]:r.LINEAR_MIPMAP_LINEAR},H={[ou]:r.NEVER,[pu]:r.ALWAYS,[lu]:r.LESS,[xc]:r.LEQUAL,[cu]:r.EQUAL,[du]:r.GEQUAL,[hu]:r.GREATER,[uu]:r.NOTEQUAL};function z(I,w){if(w.type!==Nn||e.has("OES_texture_float_linear")!==!1||w.magFilter!==Pn&&w.magFilter!==Co&&w.magFilter!==Fs&&w.magFilter!==Bi&&w.minFilter!==Pn&&w.minFilter!==Co&&w.minFilter!==Fs&&w.minFilter!==Bi||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,j[w.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,j[w.wrapT]),I!==r.TEXTURE_3D&&I!==r.TEXTURE_2D_ARRAY||r.texParameteri(I,r.TEXTURE_WRAP_R,j[w.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,W[w.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,W[w.minFilter]),w.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,H[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Rn||w.minFilter!==Fs&&w.minFilter!==Bi||w.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");r.texParameterf(I,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Z(I,w){let V=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",S));let k=w.source,M=d.get(k);M===void 0&&(M={},d.set(k,M));let T=(function(A){let P=[];return P.push(A.wrapS),P.push(A.wrapT),P.push(A.wrapR||0),P.push(A.magFilter),P.push(A.minFilter),P.push(A.anisotropy),P.push(A.internalFormat),P.push(A.format),P.push(A.type),P.push(A.generateMipmaps),P.push(A.premultiplyAlpha),P.push(A.flipY),P.push(A.unpackAlignment),P.push(A.colorSpace),P.join()})(w);if(T!==I.__cacheKey){M[T]===void 0&&(M[T]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,V=!0),M[T].usedTimes++;let A=M[I.__cacheKey];A!==void 0&&(M[I.__cacheKey].usedTimes--,A.usedTimes===0&&O(w)),I.__cacheKey=T,I.__webglTexture=M[T].texture}return V}function Q(I,w,V){return Math.floor(Math.floor(I/V)/w)}function re(I,w,V){let k=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(k=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(k=r.TEXTURE_3D);let M=Z(I,w),T=w.source;t.bindTexture(k,I.__webglTexture,r.TEXTURE0+V);let A=n.get(T);if(T.version!==A.__version||M===!0){t.activeTexture(r.TEXTURE0+V);let P=st.getPrimaries(st.workingColorSpace),B=w.colorSpace===ki?null:st.getPrimaries(w.colorSpace),X=w.colorSpace===ki||P===B?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,X);let U=_(w.image,!1,i.maxTextureSize);U=de(w,U);let D=s.convert(w.format,w.colorSpace),J=s.convert(w.type),q,te=g(w.internalFormat,D,J,w.colorSpace,w.isVideoTexture);z(k,w);let le=w.mipmaps,ne=w.isVideoTexture!==!0,he=A.__version===void 0||M===!0,ve=T.dataReady,Ee=b(w,U);if(w.isDepthTexture)te=y(w.format===Bs,w.type),he&&(ne?t.texStorage2D(r.TEXTURE_2D,1,te,U.width,U.height):t.texImage2D(r.TEXTURE_2D,0,te,U.width,U.height,0,D,J,null));else if(w.isDataTexture)if(le.length>0){ne&&he&&t.texStorage2D(r.TEXTURE_2D,Ee,te,le[0].width,le[0].height);for(let _e=0,Ce=le.length;_e<Ce;_e++)q=le[_e],ne?ve&&t.texSubImage2D(r.TEXTURE_2D,_e,0,0,q.width,q.height,D,J,q.data):t.texImage2D(r.TEXTURE_2D,_e,te,q.width,q.height,0,D,J,q.data);w.generateMipmaps=!1}else ne?(he&&t.texStorage2D(r.TEXTURE_2D,Ee,te,U.width,U.height),ve&&(function(_e,Ce,Ne,tt){let ge=_e.updateRanges;if(ge.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ce.width,Ce.height,Ne,tt,Ce.data);else{ge.sort((it,F)=>it.start-F.start);let Le=0;for(let it=1;it<ge.length;it++){let F=ge[Le],Fe=ge[it],ft=F.start+F.count,Ye=Q(Fe.start,Ce.width,4),ct=Q(F.start,Ce.width,4);Fe.start<=ft+1&&Ye===ct&&Q(Fe.start+Fe.count-1,Ce.width,4)===Ye?F.count=Math.max(F.count,Fe.start+Fe.count-F.start):(++Le,ge[Le]=Fe)}ge.length=Le+1;let Ie=r.getParameter(r.UNPACK_ROW_LENGTH),nt=r.getParameter(r.UNPACK_SKIP_PIXELS),at=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,Ce.width);for(let it=0,F=ge.length;it<F;it++){let Fe=ge[it],ft=Math.floor(Fe.start/4),Ye=Math.ceil(Fe.count/4),ct=ft%Ce.width,Mt=Math.floor(ft/Ce.width),Tt=Ye;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ct),r.pixelStorei(r.UNPACK_SKIP_ROWS,Mt),t.texSubImage2D(r.TEXTURE_2D,0,ct,Mt,Tt,1,Ne,tt,Ce.data)}_e.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ie),r.pixelStorei(r.UNPACK_SKIP_PIXELS,nt),r.pixelStorei(r.UNPACK_SKIP_ROWS,at)}})(w,U,D,J)):t.texImage2D(r.TEXTURE_2D,0,te,U.width,U.height,0,D,J,U.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ne&&he&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ee,te,le[0].width,le[0].height,U.depth);for(let _e=0,Ce=le.length;_e<Ce;_e++)if(q=le[_e],w.format!==vn)if(D!==null)if(ne){if(ve)if(w.layerUpdates.size>0){let Ne=wc(q.width,q.height,w.format,w.type);for(let tt of w.layerUpdates){let ge=q.data.subarray(tt*Ne/q.data.BYTES_PER_ELEMENT,(tt+1)*Ne/q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,_e,0,0,tt,q.width,q.height,1,D,ge)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,_e,0,0,0,q.width,q.height,U.depth,D,q.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,_e,te,q.width,q.height,U.depth,0,q.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?ve&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,_e,0,0,0,q.width,q.height,U.depth,D,J,q.data):t.texImage3D(r.TEXTURE_2D_ARRAY,_e,te,q.width,q.height,U.depth,0,D,J,q.data)}else{ne&&he&&t.texStorage2D(r.TEXTURE_2D,Ee,te,le[0].width,le[0].height);for(let _e=0,Ce=le.length;_e<Ce;_e++)q=le[_e],w.format!==vn?D!==null?ne?ve&&t.compressedTexSubImage2D(r.TEXTURE_2D,_e,0,0,q.width,q.height,D,q.data):t.compressedTexImage2D(r.TEXTURE_2D,_e,te,q.width,q.height,0,q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?ve&&t.texSubImage2D(r.TEXTURE_2D,_e,0,0,q.width,q.height,D,J,q.data):t.texImage2D(r.TEXTURE_2D,_e,te,q.width,q.height,0,D,J,q.data)}else if(w.isDataArrayTexture)if(ne){if(he&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ee,te,U.width,U.height,U.depth),ve)if(w.layerUpdates.size>0){let _e=wc(U.width,U.height,w.format,w.type);for(let Ce of w.layerUpdates){let Ne=U.data.subarray(Ce*_e/U.data.BYTES_PER_ELEMENT,(Ce+1)*_e/U.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ce,U.width,U.height,1,D,J,Ne)}w.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,U.width,U.height,U.depth,D,J,U.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,te,U.width,U.height,U.depth,0,D,J,U.data);else if(w.isData3DTexture)ne?(he&&t.texStorage3D(r.TEXTURE_3D,Ee,te,U.width,U.height,U.depth),ve&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,U.width,U.height,U.depth,D,J,U.data)):t.texImage3D(r.TEXTURE_3D,0,te,U.width,U.height,U.depth,0,D,J,U.data);else if(w.isFramebufferTexture){if(he)if(ne)t.texStorage2D(r.TEXTURE_2D,Ee,te,U.width,U.height);else{let _e=U.width,Ce=U.height;for(let Ne=0;Ne<Ee;Ne++)t.texImage2D(r.TEXTURE_2D,Ne,te,_e,Ce,0,D,J,null),_e>>=1,Ce>>=1}}else if(le.length>0){if(ne&&he){let _e=Ue(le[0]);t.texStorage2D(r.TEXTURE_2D,Ee,te,_e.width,_e.height)}for(let _e=0,Ce=le.length;_e<Ce;_e++)q=le[_e],ne?ve&&t.texSubImage2D(r.TEXTURE_2D,_e,0,0,D,J,q):t.texImage2D(r.TEXTURE_2D,_e,te,D,J,q);w.generateMipmaps=!1}else if(ne){if(he){let _e=Ue(U);t.texStorage2D(r.TEXTURE_2D,Ee,te,_e.width,_e.height)}ve&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,D,J,U)}else t.texImage2D(r.TEXTURE_2D,0,te,D,J,U);m(w)&&v(k),A.__version=T.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function ae(I,w,V,k,M,T){let A=s.convert(V.format,V.colorSpace),P=s.convert(V.type),B=g(V.internalFormat,A,P,V.colorSpace),X=n.get(w),U=n.get(V);if(U.__renderTarget=w,!X.__hasExternalTextures){let D=Math.max(1,w.width>>T),J=Math.max(1,w.height>>T);M===r.TEXTURE_3D||M===r.TEXTURE_2D_ARRAY?t.texImage3D(M,T,B,D,J,w.depth,0,A,P,null):t.texImage2D(M,T,B,D,J,0,A,P,null)}t.bindFramebuffer(r.FRAMEBUFFER,I),xe(w)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,k,M,U.__webglTexture,0,be(w)):(M===r.TEXTURE_2D||M>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&M<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,k,M,U.__webglTexture,T),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Me(I,w,V){if(r.bindRenderbuffer(r.RENDERBUFFER,I),w.depthBuffer){let k=w.depthTexture,M=k&&k.isDepthTexture?k.type:null,T=y(w.stencilBuffer,M),A=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,P=be(w);xe(w)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,P,T,w.width,w.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,P,T,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,T,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,A,r.RENDERBUFFER,I)}else{let k=w.textures;for(let M=0;M<k.length;M++){let T=k[M],A=s.convert(T.format,T.colorSpace),P=s.convert(T.type),B=g(T.internalFormat,A,P,T.colorSpace),X=be(w);V&&xe(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,X,B,w.width,w.height):xe(w)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,X,B,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,B,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ae(I,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,I),!w.depthTexture||!w.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let V=n.get(w.depthTexture);V.__renderTarget=w,V.__webglTexture&&w.depthTexture.image.width===w.width&&w.depthTexture.image.height===w.height||(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),N(w.depthTexture,0);let k=V.__webglTexture,M=be(w);if(w.depthTexture.format===Os)xe(w)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,k,0,M):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,k,0);else{if(w.depthTexture.format!==Bs)throw new Error("Unknown depthTexture format");xe(w)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,k,0,M):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,k,0)}}function ie(I){let w=n.get(I),V=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){let k=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),k){let M=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,k.removeEventListener("dispose",M)};k.addEventListener("dispose",M),w.__depthDisposeCallback=M}w.__boundDepthTexture=k}if(I.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");let k=I.texture.mipmaps;k&&k.length>0?Ae(w.__webglFramebuffer[0],I):Ae(w.__webglFramebuffer,I)}else if(V){w.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[k]),w.__webglDepthbuffer[k]===void 0)w.__webglDepthbuffer[k]=r.createRenderbuffer(),Me(w.__webglDepthbuffer[k],I,!1);else{let M=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,T=w.__webglDepthbuffer[k];r.bindRenderbuffer(r.RENDERBUFFER,T),r.framebufferRenderbuffer(r.FRAMEBUFFER,M,r.RENDERBUFFER,T)}}else{let k=I.texture.mipmaps;if(k&&k.length>0?t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),Me(w.__webglDepthbuffer,I,!1);else{let M=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,T=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,T),r.framebufferRenderbuffer(r.FRAMEBUFFER,M,r.RENDERBUFFER,T)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}let ce=[],Se=[];function be(I){return Math.min(i.maxSamples,I.samples)}function xe(I){let w=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function de(I,w){let V=I.colorSpace,k=I.format,M=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||V!==Ri&&V!==ki&&(st.getTransfer(V)===ot?k===vn&&M===Un||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),w}function Ue(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=function(){let I=L;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),L+=1,I},this.resetTextureUnits=function(){L=0},this.setTexture2D=N,this.setTexture2DArray=function(I,w){let V=n.get(I);I.version>0&&V.__version!==I.version?re(V,I,w):t.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+w)},this.setTexture3D=function(I,w){let V=n.get(I);I.version>0&&V.__version!==I.version?re(V,I,w):t.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+w)},this.setTextureCube=function(I,w){let V=n.get(I);I.version>0&&V.__version!==I.version?(function(k,M,T){if(M.image.length!==6)return;let A=Z(k,M),P=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+T);let B=n.get(P);if(P.version!==B.__version||A===!0){t.activeTexture(r.TEXTURE0+T);let X=st.getPrimaries(st.workingColorSpace),U=M.colorSpace===ki?null:st.getPrimaries(M.colorSpace),D=M.colorSpace===ki||X===U?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,D);let J=M.isCompressedTexture||M.image[0].isCompressedTexture,q=M.image[0]&&M.image[0].isDataTexture,te=[];for(let ge=0;ge<6;ge++)te[ge]=J||q?q?M.image[ge].image:M.image[ge]:_(M.image[ge],!0,i.maxCubemapSize),te[ge]=de(M,te[ge]);let le=te[0],ne=s.convert(M.format,M.colorSpace),he=s.convert(M.type),ve=g(M.internalFormat,ne,he,M.colorSpace),Ee=M.isVideoTexture!==!0,_e=B.__version===void 0||A===!0,Ce=P.dataReady,Ne,tt=b(M,le);if(z(r.TEXTURE_CUBE_MAP,M),J){Ee&&_e&&t.texStorage2D(r.TEXTURE_CUBE_MAP,tt,ve,le.width,le.height);for(let ge=0;ge<6;ge++){Ne=te[ge].mipmaps;for(let Le=0;Le<Ne.length;Le++){let Ie=Ne[Le];M.format!==vn?ne!==null?Ee?Ce&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Le,0,0,Ie.width,Ie.height,ne,Ie.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Le,ve,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ee?Ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Le,0,0,Ie.width,Ie.height,ne,he,Ie.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Le,ve,Ie.width,Ie.height,0,ne,he,Ie.data)}}}else{if(Ne=M.mipmaps,Ee&&_e){Ne.length>0&&tt++;let ge=Ue(te[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,tt,ve,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(q){Ee?Ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,te[ge].width,te[ge].height,ne,he,te[ge].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ve,te[ge].width,te[ge].height,0,ne,he,te[ge].data);for(let Le=0;Le<Ne.length;Le++){let Ie=Ne[Le].image[ge].image;Ee?Ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Le+1,0,0,Ie.width,Ie.height,ne,he,Ie.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Le+1,ve,Ie.width,Ie.height,0,ne,he,Ie.data)}}else{Ee?Ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ne,he,te[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ve,ne,he,te[ge]);for(let Le=0;Le<Ne.length;Le++){let Ie=Ne[Le];Ee?Ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Le+1,0,0,ne,he,Ie.image[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Le+1,ve,ne,he,Ie.image[ge])}}}m(M)&&v(r.TEXTURE_CUBE_MAP),B.__version=P.version,M.onUpdate&&M.onUpdate(M)}k.__version=M.version})(V,I,w):t.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+w)},this.rebindTextures=function(I,w,V){let k=n.get(I);w!==void 0&&ae(k.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&ie(I)},this.setupRenderTarget=function(I){let w=I.texture,V=n.get(I),k=n.get(w);I.addEventListener("dispose",R);let M=I.textures,T=I.isWebGLCubeRenderTarget===!0,A=M.length>1;if(A||(k.__webglTexture===void 0&&(k.__webglTexture=r.createTexture()),k.__version=w.version,a.memory.textures++),T){V.__webglFramebuffer=[];for(let P=0;P<6;P++)if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer[P]=[];for(let B=0;B<w.mipmaps.length;B++)V.__webglFramebuffer[P][B]=r.createFramebuffer()}else V.__webglFramebuffer[P]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer=[];for(let P=0;P<w.mipmaps.length;P++)V.__webglFramebuffer[P]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(A)for(let P=0,B=M.length;P<B;P++){let X=n.get(M[P]);X.__webglTexture===void 0&&(X.__webglTexture=r.createTexture(),a.memory.textures++)}if(I.samples>0&&xe(I)===!1){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let P=0;P<M.length;P++){let B=M[P];V.__webglColorRenderbuffer[P]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[P]);let X=s.convert(B.format,B.colorSpace),U=s.convert(B.type),D=g(B.internalFormat,X,U,B.colorSpace,I.isXRRenderTarget===!0),J=be(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,J,D,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+P,r.RENDERBUFFER,V.__webglColorRenderbuffer[P])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),Me(V.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(T){t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture),z(r.TEXTURE_CUBE_MAP,w);for(let P=0;P<6;P++)if(w.mipmaps&&w.mipmaps.length>0)for(let B=0;B<w.mipmaps.length;B++)ae(V.__webglFramebuffer[P][B],I,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+P,B);else ae(V.__webglFramebuffer[P],I,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+P,0);m(w)&&v(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(A){for(let P=0,B=M.length;P<B;P++){let X=M[P],U=n.get(X);t.bindTexture(r.TEXTURE_2D,U.__webglTexture),z(r.TEXTURE_2D,X),ae(V.__webglFramebuffer,I,X,r.COLOR_ATTACHMENT0+P,r.TEXTURE_2D,0),m(X)&&v(r.TEXTURE_2D)}t.unbindTexture()}else{let P=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(P=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(P,k.__webglTexture),z(P,w),w.mipmaps&&w.mipmaps.length>0)for(let B=0;B<w.mipmaps.length;B++)ae(V.__webglFramebuffer[B],I,w,r.COLOR_ATTACHMENT0,P,B);else ae(V.__webglFramebuffer,I,w,r.COLOR_ATTACHMENT0,P,0);m(w)&&v(P),t.unbindTexture()}I.depthBuffer&&ie(I)},this.updateRenderTargetMipmap=function(I){let w=I.textures;for(let V=0,k=w.length;V<k;V++){let M=w[V];if(m(M)){let T=x(I),A=n.get(M).__webglTexture;t.bindTexture(T,A),v(T),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(I){if(I.samples>0){if(xe(I)===!1){let w=I.textures,V=I.width,k=I.height,M=r.COLOR_BUFFER_BIT,T=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,A=n.get(I),P=w.length>1;if(P)for(let X=0;X<w.length;X++)t.bindFramebuffer(r.FRAMEBUFFER,A.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+X,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+X,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,A.__webglMultisampledFramebuffer);let B=I.texture.mipmaps;B&&B.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,A.__webglFramebuffer);for(let X=0;X<w.length;X++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(M|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(M|=r.STENCIL_BUFFER_BIT)),P){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,A.__webglColorRenderbuffer[X]);let U=n.get(w[X]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,U,0)}r.blitFramebuffer(0,0,V,k,0,0,V,k,M,r.NEAREST),l===!0&&(ce.length=0,Se.length=0,ce.push(r.COLOR_ATTACHMENT0+X),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ce.push(T),Se.push(T),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Se)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ce))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),P)for(let X=0;X<w.length;X++){t.bindFramebuffer(r.FRAMEBUFFER,A.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+X,r.RENDERBUFFER,A.__webglColorRenderbuffer[X]);let U=n.get(w[X]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+X,r.TEXTURE_2D,U,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,A.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){let w=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}},this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=xe}function gm(r,e){return{convert:function(t,n=ki){let i,s=st.getTransfer(n);if(t===Un)return r.UNSIGNED_BYTE;if(t===Po)return r.UNSIGNED_SHORT_4_4_4_4;if(t===Io)return r.UNSIGNED_SHORT_5_5_5_1;if(t===Hl)return r.UNSIGNED_INT_5_9_9_9_REV;if(t===Gl)return r.BYTE;if(t===Vl)return r.SHORT;if(t===Br)return r.UNSIGNED_SHORT;if(t===Ro)return r.INT;if(t===zi)return r.UNSIGNED_INT;if(t===Nn)return r.FLOAT;if(t===zr)return r.HALF_FLOAT;if(t===eu)return r.ALPHA;if(t===tu)return r.RGB;if(t===vn)return r.RGBA;if(t===Os)return r.DEPTH_COMPONENT;if(t===Bs)return r.DEPTH_STENCIL;if(t===Wl)return r.RED;if(t===Lo)return r.RED_INTEGER;if(t===nu)return r.RG;if(t===Xl)return r.RG_INTEGER;if(t===jl)return r.RGBA_INTEGER;if(t===Do||t===Uo||t===No||t===Fo)if(s===ot){if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i===null)return null;if(t===Do)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===Uo)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===No)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Fo)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(i=e.get("WEBGL_compressed_texture_s3tc"),i===null)return null;if(t===Do)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===Uo)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===No)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Fo)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===$l||t===ql||t===Yl||t===Zl){if(i=e.get("WEBGL_compressed_texture_pvrtc"),i===null)return null;if(t===$l)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===ql)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===Yl)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===Zl)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===Jl||t===Kl||t===Ql){if(i=e.get("WEBGL_compressed_texture_etc"),i===null)return null;if(t===Jl||t===Kl)return s===ot?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(t===Ql)return s===ot?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}if(t===ec||t===tc||t===nc||t===ic||t===rc||t===sc||t===ac||t===oc||t===lc||t===cc||t===hc||t===uc||t===dc||t===pc){if(i=e.get("WEBGL_compressed_texture_astc"),i===null)return null;if(t===ec)return s===ot?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===tc)return s===ot?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===nc)return s===ot?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===ic)return s===ot?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===rc)return s===ot?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===sc)return s===ot?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===ac)return s===ot?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===oc)return s===ot?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===lc)return s===ot?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===cc)return s===ot?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===hc)return s===ot?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===uc)return s===ot?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===dc)return s===ot?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===pc)return s===ot?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Oo||t===mc||t===fc){if(i=e.get("EXT_texture_compression_bptc"),i===null)return null;if(t===Oo)return s===ot?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===mc)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===fc)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===iu||t===gc||t===vc||t===_c){if(i=e.get("EXT_texture_compression_rgtc"),i===null)return null;if(t===Oo)return i.COMPRESSED_RED_RGTC1_EXT;if(t===gc)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===vc)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===_c)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===kr?r.UNSIGNED_INT_24_8:r[t]!==void 0?r[t]:null}}}var Bc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new Ht;e.properties.get(i).__webglTexture=t.texture,t.depthNear===n.depthNear&&t.depthFar===n.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new fn({vertexShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ze(new Ln(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zc=class extends $n{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,f=null,_=new Bc,m=t.getContextAttributes(),v=null,x=null,g=[],y=[],b=new fe,S=null,R=new Nt;R.viewport=new ut;let O=new Nt;O.viewport=new ut;let L=[R,O],N=new vo,j=null,W=null;function H(ie){let ce=y.indexOf(ie.inputSource);if(ce===-1)return;let Se=g[ce];Se!==void 0&&(Se.update(ie.inputSource,ie.frame,c||a),Se.dispatchEvent({type:ie.type,data:ie.inputSource}))}function z(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",Z);for(let ie=0;ie<g.length;ie++){let ce=y[ie];ce!==null&&(y[ie]=null,g[ie].disconnect(ce))}j=null,W=null,_.reset(),e.setRenderTarget(v),p=null,d=null,u=null,i=null,x=null,Ae.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}function Z(ie){for(let ce=0;ce<ie.removed.length;ce++){let Se=ie.removed[ce],be=y.indexOf(Se);be>=0&&(y[be]=null,g[be].disconnect(Se))}for(let ce=0;ce<ie.added.length;ce++){let Se=ie.added[ce],be=y.indexOf(Se);if(be===-1){for(let de=0;de<g.length;de++){if(de>=y.length){y.push(Se),be=de;break}if(y[de]===null){y[de]=Se,be=de;break}}if(be===-1)break}let xe=g[be];xe&&xe.connect(Se)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ce=g[ie];return ce===void 0&&(ce=new Er,g[ie]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(ie){let ce=g[ie];return ce===void 0&&(ce=new Er,g[ie]=ce),ce.getGripSpace()},this.getHand=function(ie){let ce=g[ie];return ce===void 0&&(ce=new Er,g[ie]=ce),ce.getHandSpace()},this.setFramebufferScaleFactor=function(ie){s=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){o=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(ie){if(i=ie,i!==null){if(v=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",z),i.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(b),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,Se=null,be=null;m.depth&&(be=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=m.stencil?Bs:Os,Se=m.stencil?kr:zi);let xe={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(xe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new In(d.textureWidth,d.textureHeight,{format:vn,type:Un,depthTexture:new xs(d.textureWidth,d.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ce={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,ce),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new In(p.framebufferWidth,p.framebufferHeight,{format:vn,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ae.setContext(i),Ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};let Q=new C,re=new C;function ae(ie,ce){ce===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ce.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(i===null)return;let ce=ie.near,Se=ie.far;_.texture!==null&&(_.depthNear>0&&(ce=_.depthNear),_.depthFar>0&&(Se=_.depthFar)),N.near=O.near=R.near=ce,N.far=O.far=R.far=Se,j===N.near&&W===N.far||(i.updateRenderState({depthNear:N.near,depthFar:N.far}),j=N.near,W=N.far),R.layers.mask=2|ie.layers.mask,O.layers.mask=4|ie.layers.mask,N.layers.mask=R.layers.mask|O.layers.mask;let be=ie.parent,xe=N.cameras;ae(N,be);for(let de=0;de<xe.length;de++)ae(xe[de],be);xe.length===2?(function(de,Ue,I){Q.setFromMatrixPosition(Ue.matrixWorld),re.setFromMatrixPosition(I.matrixWorld);let w=Q.distanceTo(re),V=Ue.projectionMatrix.elements,k=I.projectionMatrix.elements,M=V[14]/(V[10]-1),T=V[14]/(V[10]+1),A=(V[9]+1)/V[5],P=(V[9]-1)/V[5],B=(V[8]-1)/V[0],X=(k[8]+1)/k[0],U=M*B,D=M*X,J=w/(-B+X),q=J*-B;if(Ue.matrixWorld.decompose(de.position,de.quaternion,de.scale),de.translateX(q),de.translateZ(J),de.matrixWorld.compose(de.position,de.quaternion,de.scale),de.matrixWorldInverse.copy(de.matrixWorld).invert(),V[10]===-1)de.projectionMatrix.copy(Ue.projectionMatrix),de.projectionMatrixInverse.copy(Ue.projectionMatrixInverse);else{let te=M+J,le=T+J,ne=U-q,he=D+(w-q),ve=A*T/le*te,Ee=P*T/le*te;de.projectionMatrix.makePerspective(ne,he,ve,Ee,te,le),de.projectionMatrixInverse.copy(de.projectionMatrix).invert()}})(N,R,O):N.projectionMatrix.copy(R.projectionMatrix),(function(de,Ue,I){I===null?de.matrix.copy(Ue.matrixWorld):(de.matrix.copy(I.matrixWorld),de.matrix.invert(),de.matrix.multiply(Ue.matrixWorld)),de.matrix.decompose(de.position,de.quaternion,de.scale),de.updateMatrixWorld(!0),de.projectionMatrix.copy(Ue.projectionMatrix),de.projectionMatrixInverse.copy(Ue.projectionMatrixInverse),de.isPerspectiveCamera&&(de.fov=2*Da*Math.atan(1/de.projectionMatrix.elements[5]),de.zoom=1)})(ie,N,be)},this.getCamera=function(){return N},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(ie){l=ie,d!==null&&(d.fixedFoveation=ie),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ie)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(N)};let Me=null,Ae=new qu;Ae.setAnimationLoop(function(ie,ce){if(h=ce.getViewerPose(c||a),f=ce,h!==null){let Se=h.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let be=!1;Se.length!==N.cameras.length&&(N.cameras.length=0,be=!0);for(let de=0;de<Se.length;de++){let Ue=Se[de],I=null;if(p!==null)I=p.getViewport(Ue);else{let V=u.getViewSubImage(d,Ue);I=V.viewport,de===0&&(e.setRenderTargetTextures(x,V.colorTexture,V.depthStencilTexture),e.setRenderTarget(x))}let w=L[de];w===void 0&&(w=new Nt,w.layers.enable(de),w.viewport=new ut,L[de]=w),w.matrix.fromArray(Ue.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray(Ue.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(I.x,I.y,I.width,I.height),de===0&&(N.matrix.copy(w.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),be===!0&&N.cameras.push(w)}let xe=i.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){let de=u.getDepthInformation(Se[0]);de&&de.isValid&&de.texture&&_.init(e,de,i.renderState)}}for(let Se=0;Se<g.length;Se++){let be=y[Se],xe=g[Se];be!==null&&xe!==void 0&&xe.update(be,ce,c||a)}Me&&Me(ie,ce),ce.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ce}),f=null}),this.setAnimationLoop=function(ie){Me=ie},this.dispose=function(){}}},Hi=new mn,vm=new We;function _m(r,e){function t(i,s){i.matrixAutoUpdate===!0&&i.updateMatrix(),s.value.copy(i.matrix)}function n(i,s){i.opacity.value=s.opacity,s.color&&i.diffuse.value.copy(s.color),s.emissive&&i.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(i.map.value=s.map,t(s.map,i.mapTransform)),s.alphaMap&&(i.alphaMap.value=s.alphaMap,t(s.alphaMap,i.alphaMapTransform)),s.bumpMap&&(i.bumpMap.value=s.bumpMap,t(s.bumpMap,i.bumpMapTransform),i.bumpScale.value=s.bumpScale,s.side===Ot&&(i.bumpScale.value*=-1)),s.normalMap&&(i.normalMap.value=s.normalMap,t(s.normalMap,i.normalMapTransform),i.normalScale.value.copy(s.normalScale),s.side===Ot&&i.normalScale.value.negate()),s.displacementMap&&(i.displacementMap.value=s.displacementMap,t(s.displacementMap,i.displacementMapTransform),i.displacementScale.value=s.displacementScale,i.displacementBias.value=s.displacementBias),s.emissiveMap&&(i.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,i.emissiveMapTransform)),s.specularMap&&(i.specularMap.value=s.specularMap,t(s.specularMap,i.specularMapTransform)),s.alphaTest>0&&(i.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,l=a.envMapRotation;o&&(i.envMap.value=o,Hi.copy(l),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),i.envMapRotation.value.setFromMatrix4(vm.makeRotationFromEuler(Hi)),i.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,i.reflectivity.value=s.reflectivity,i.ior.value=s.ior,i.refractionRatio.value=s.refractionRatio),s.lightMap&&(i.lightMap.value=s.lightMap,i.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,i.lightMapTransform)),s.aoMap&&(i.aoMap.value=s.aoMap,i.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,i.aoMapTransform))}return{refreshFogUniforms:function(i,s){s.color.getRGB(i.fogColor.value,Sc(r)),s.isFog?(i.fogNear.value=s.near,i.fogFar.value=s.far):s.isFogExp2&&(i.fogDensity.value=s.density)},refreshMaterialUniforms:function(i,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(i,s):s.isMeshToonMaterial?(n(i,s),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(i,s)):s.isMeshPhongMaterial?(n(i,s),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(i,s)):s.isMeshStandardMaterial?(n(i,s),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(i,s),s.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ot&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(i,s,l)):s.isMeshMatcapMaterial?(n(i,s),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(i,s)):s.isMeshDepthMaterial?n(i,s):s.isMeshDistanceMaterial?(n(i,s),(function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(i,s)):s.isMeshNormalMaterial?n(i,s):s.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(i,s),s.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(i,s)):s.isPointsMaterial?(function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(i,s,a,o):s.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(i,s):s.isShadowMaterial?(i.color.value.copy(s.color),i.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function xm(r,e,t,n){let i={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(u,d,p,f){let _=u.value,m=d+"_"+p;if(f[m]===void 0)return f[m]=typeof _=="number"||typeof _=="boolean"?_:_.clone(),!0;{let v=f[m];if(typeof _=="number"||typeof _=="boolean"){if(v!==_)return f[m]=_,!0}else if(v.equals(_)===!1)return v.copy(_),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(i[d.id]),delete i[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;n.uniformBlockBinding(u,p)},update:function(u,d){let p=i[u.id];p===void 0&&((function(m){let v=m.uniforms,x=0,g=16;for(let b=0,S=v.length;b<S;b++){let R=Array.isArray(v[b])?v[b]:[v[b]];for(let O=0,L=R.length;O<L;O++){let N=R[O],j=Array.isArray(N.value)?N.value:[N.value];for(let W=0,H=j.length;W<H;W++){let z=c(j[W]),Z=x%g,Q=Z%z.boundary,re=Z+Q;x+=Q,re!==0&&g-re<z.storage&&(x+=g-re),N.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=z.storage}}}let y=x%g;y>0&&(x+=g-y),m.__size=x,m.__cache={}})(u),p=(function(m){let v=(function(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();m.__bindingPointIndex=v;let x=r.createBuffer(),g=m.__size,y=m.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,g,y),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,x),x})(u),i[u.id]=p,u.addEventListener("dispose",h));let f=d.program;n.updateUBOMapping(u,f);let _=e.render.frame;s[u.id]!==_&&((function(m){let v=i[m.id],x=m.uniforms,g=m.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let y=0,b=x.length;y<b;y++){let S=Array.isArray(x[y])?x[y]:[x[y]];for(let R=0,O=S.length;R<O;R++){let L=S[R];if(l(L,y,R,g)===!0){let N=L.__offset,j=Array.isArray(L.value)?L.value:[L.value],W=0;for(let H=0;H<j.length;H++){let z=j[H],Z=c(z);typeof z=="number"||typeof z=="boolean"?(L.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,N+W,L.__data)):z.isMatrix3?(L.__data[0]=z.elements[0],L.__data[1]=z.elements[1],L.__data[2]=z.elements[2],L.__data[3]=0,L.__data[4]=z.elements[3],L.__data[5]=z.elements[4],L.__data[6]=z.elements[5],L.__data[7]=0,L.__data[8]=z.elements[6],L.__data[9]=z.elements[7],L.__data[10]=z.elements[8],L.__data[11]=0):(z.toArray(L.__data,W),W+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)})(u),s[u.id]=_)},dispose:function(){for(let u in i)r.deleteBuffer(i[u]);a=[],i={},s={}}}}var Go=class{constructor(e={}){let{canvas:t=mu(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e,p;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let f=new Uint32Array(4),_=new Int32Array(4),m=null,v=null,x=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,b=!1;this._outputColorSpace=Lt;let S=0,R=0,O=null,L=-1,N=null,j=new ut,W=new ut,H=null,z=new Te(0),Z=0,Q=t.width,re=t.height,ae=1,Me=null,Ae=null,ie=new ut(0,0,Q,re),ce=new ut(0,0,Q,re),Se=!1,be=new di,xe=!1,de=!1,Ue=new We,I=new We,w=new C,V=new ut,k={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},M=!1;function T(){return O===null?ae:1}let A,P,B,X,U,D,J,q,te,le,ne,he,ve,Ee,_e,Ce,Ne,tt,ge,Le,Ie,nt,at,it,F=n;function Fe(E,Y){return t.getContext(E,Y)}try{let E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"178"}`),t.addEventListener("webglcontextlost",ct,!1),t.addEventListener("webglcontextrestored",Mt,!1),t.addEventListener("webglcontextcreationerror",Tt,!1),F===null){let Y="webgl2";if(F=Fe(Y,E),F===null)throw Fe(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}function ft(){A=new tp(F),A.init(),nt=new gm(F,A),P=new Zd(F,A,e,nt),B=new mm(F,A),P.reverseDepthBuffer&&d&&B.buffers.depth.setReversed(!0),X=new rp(F),U=new rm,D=new fm(F,A,B,U,P,nt,X),J=new Kd(y),q=new ep(y),te=new Xd(F),at=new qd(F,te),le=new np(F,te,X,at),ne=new ap(F,le,te,X),ge=new sp(F,P,D),Ce=new Jd(U),he=new im(y,J,q,A,P,at,Ce),ve=new _m(y,U),Ee=new am,_e=new um(A),tt=new $d(y,J,q,B,ne,p,l),Ne=new dm(y,ne,P),it=new xm(F,X,P,B),Le=new Yd(F,A,X),Ie=new ip(F,A,X),X.programs=he.programs,y.capabilities=P,y.extensions=A,y.properties=U,y.renderLists=Ee,y.shadowMap=Ne,y.state=B,y.info=X}ft();let Ye=new zc(y,F);function ct(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Mt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let E=X.autoReset,Y=Ne.enabled,ee=Ne.autoUpdate,oe=Ne.needsUpdate,K=Ne.type;ft(),X.autoReset=E,Ne.enabled=Y,Ne.autoUpdate=ee,Ne.needsUpdate=oe,Ne.type=K}function Tt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ei(E){let Y=E.target;Y.removeEventListener("dispose",ei),(function(ee){(function(oe){let K=U.get(oe).programs;K!==void 0&&(K.forEach(function(me){he.releaseProgram(me)}),oe.isShaderMaterial&&he.releaseShaderCache(oe))})(ee),U.remove(ee)})(Y)}function zn(E,Y,ee){E.transparent===!0&&E.side===Et&&E.forceSinglePass===!1?(E.side=Ot,E.needsUpdate=!0,ti(E,Y,ee),E.side=Nr,E.needsUpdate=!0,ti(E,Y,ee),E.side=Et):ti(E,Y,ee)}this.xr=Ye,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let E=A.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=A.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(E){E!==void 0&&(ae=E,this.setSize(Q,re,!1))},this.getSize=function(E){return E.set(Q,re)},this.setSize=function(E,Y,ee=!0){Ye.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(Q=E,re=Y,t.width=Math.floor(E*ae),t.height=Math.floor(Y*ae),ee===!0&&(t.style.width=E+"px",t.style.height=Y+"px"),this.setViewport(0,0,E,Y))},this.getDrawingBufferSize=function(E){return E.set(Q*ae,re*ae).floor()},this.setDrawingBufferSize=function(E,Y,ee){Q=E,re=Y,ae=ee,t.width=Math.floor(E*ee),t.height=Math.floor(Y*ee),this.setViewport(0,0,E,Y)},this.getCurrentViewport=function(E){return E.copy(j)},this.getViewport=function(E){return E.copy(ie)},this.setViewport=function(E,Y,ee,oe){E.isVector4?ie.set(E.x,E.y,E.z,E.w):ie.set(E,Y,ee,oe),B.viewport(j.copy(ie).multiplyScalar(ae).round())},this.getScissor=function(E){return E.copy(ce)},this.setScissor=function(E,Y,ee,oe){E.isVector4?ce.set(E.x,E.y,E.z,E.w):ce.set(E,Y,ee,oe),B.scissor(W.copy(ce).multiplyScalar(ae).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(E){B.setScissorTest(Se=E)},this.setOpaqueSort=function(E){Me=E},this.setTransparentSort=function(E){Ae=E},this.getClearColor=function(E){return E.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor(...arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha(...arguments)},this.clear=function(E=!0,Y=!0,ee=!0){let oe=0;if(E){let K=!1;if(O!==null){let me=O.texture.format;K=me===jl||me===Xl||me===Lo}if(K){let me=O.texture.type,we=me===Un||me===zi||me===Br||me===kr||me===Po||me===Io,Re=tt.getClearColor(),De=tt.getClearAlpha(),$=Re.r,ue=Re.g,se=Re.b;we?(f[0]=$,f[1]=ue,f[2]=se,f[3]=De,F.clearBufferuiv(F.COLOR,0,f)):(_[0]=$,_[1]=ue,_[2]=se,_[3]=De,F.clearBufferiv(F.COLOR,0,_))}else oe|=F.COLOR_BUFFER_BIT}Y&&(oe|=F.DEPTH_BUFFER_BIT),ee&&(oe|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ct,!1),t.removeEventListener("webglcontextrestored",Mt,!1),t.removeEventListener("webglcontextcreationerror",Tt,!1),tt.dispose(),Ee.dispose(),_e.dispose(),U.dispose(),J.dispose(),q.dispose(),ne.dispose(),at.dispose(),it.dispose(),he.dispose(),Ye.dispose(),Ye.removeEventListener("sessionstart",qi),Ye.removeEventListener("sessionend",Yi),jt.stop()},this.renderBufferDirect=function(E,Y,ee,oe,K,me){Y===null&&(Y=k);let we=K.isMesh&&K.matrixWorld.determinant()<0,Re=(function(Ge,rt,pt,Oe,Be){rt.isScene!==!0&&(rt=k),D.resetTextureUnits();let St=rt.fog,vi=Oe.isMeshStandardMaterial?rt.environment:null,xn=O===null?y.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Ri,$t=(Oe.isMeshStandardMaterial?q:J).get(Oe.envMap||vi),Pt=Oe.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,yn=!!pt.attributes.tangent&&(!!Oe.normalMap||Oe.anisotropy>0),It=!!pt.morphAttributes.position,jr=!!pt.morphAttributes.normal,ni=!!pt.morphAttributes.color,qs=Kn;Oe.toneMapped&&(O!==null&&O.isXRRenderTarget!==!0||(qs=y.toneMapping));let Qi=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,$r=Qi!==void 0?Qi.length:0,Ze=U.get(Oe),qr=v.state.lights;if(xe===!0&&(de===!0||Ge!==N)){let Gt=Ge===N&&Oe.id===L;Ce.setState(Oe,Ge,Gt)}let zt=!1;Oe.version===Ze.__version?Ze.needsLights&&Ze.lightsStateVersion!==qr.state.version||Ze.outputColorSpace!==xn||Be.isBatchedMesh&&Ze.batching===!1?zt=!0:Be.isBatchedMesh||Ze.batching!==!0?Be.isBatchedMesh&&Ze.batchingColor===!0&&Be.colorTexture===null||Be.isBatchedMesh&&Ze.batchingColor===!1&&Be.colorTexture!==null||Be.isInstancedMesh&&Ze.instancing===!1?zt=!0:Be.isInstancedMesh||Ze.instancing!==!0?Be.isSkinnedMesh&&Ze.skinning===!1?zt=!0:Be.isSkinnedMesh||Ze.skinning!==!0?Be.isInstancedMesh&&Ze.instancingColor===!0&&Be.instanceColor===null||Be.isInstancedMesh&&Ze.instancingColor===!1&&Be.instanceColor!==null||Be.isInstancedMesh&&Ze.instancingMorph===!0&&Be.morphTexture===null||Be.isInstancedMesh&&Ze.instancingMorph===!1&&Be.morphTexture!==null||Ze.envMap!==$t||Oe.fog===!0&&Ze.fog!==St?zt=!0:Ze.numClippingPlanes===void 0||Ze.numClippingPlanes===Ce.numPlanes&&Ze.numIntersection===Ce.numIntersection?(Ze.vertexAlphas!==Pt||Ze.vertexTangents!==yn||Ze.morphTargets!==It||Ze.morphNormals!==jr||Ze.morphColors!==ni||Ze.toneMapping!==qs||Ze.morphTargetsCount!==$r)&&(zt=!0):zt=!0:zt=!0:zt=!0:zt=!0:(zt=!0,Ze.__version=Oe.version);let an=Ze.currentProgram;zt===!0&&(an=ti(Oe,rt,Be));let Ys=!1,_i=!1,Mn=!1,mt=an.getUniforms(),tn=Ze.uniforms;if(B.useProgram(an.program)&&(Ys=!0,_i=!0,Mn=!0),Oe.id!==L&&(L=Oe.id,_i=!0),Ys||N!==Ge){B.buffers.depth.getReversed()?(Ue.copy(Ge.projectionMatrix),gu(Ue),vu(Ue),mt.setValue(F,"projectionMatrix",Ue)):mt.setValue(F,"projectionMatrix",Ge.projectionMatrix),mt.setValue(F,"viewMatrix",Ge.matrixWorldInverse);let Gt=mt.map.cameraPosition;Gt!==void 0&&Gt.setValue(F,w.setFromMatrixPosition(Ge.matrixWorld)),P.logarithmicDepthBuffer&&mt.setValue(F,"logDepthBufFC",2/(Math.log(Ge.far+1)/Math.LN2)),(Oe.isMeshPhongMaterial||Oe.isMeshToonMaterial||Oe.isMeshLambertMaterial||Oe.isMeshBasicMaterial||Oe.isMeshStandardMaterial||Oe.isShaderMaterial)&&mt.setValue(F,"isOrthographic",Ge.isOrthographicCamera===!0),N!==Ge&&(N=Ge,_i=!0,Mn=!0)}if(Be.isSkinnedMesh){mt.setOptional(F,Be,"bindMatrix"),mt.setOptional(F,Be,"bindMatrixInverse");let Gt=Be.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),mt.setValue(F,"boneTexture",Gt.boneTexture,D))}Be.isBatchedMesh&&(mt.setOptional(F,Be,"batchingTexture"),mt.setValue(F,"batchingTexture",Be._matricesTexture,D),mt.setOptional(F,Be,"batchingIdTexture"),mt.setValue(F,"batchingIdTexture",Be._indirectTexture,D),mt.setOptional(F,Be,"batchingColorTexture"),Be._colorsTexture!==null&&mt.setValue(F,"batchingColorTexture",Be._colorsTexture,D));let xi=pt.morphAttributes;xi.position===void 0&&xi.normal===void 0&&xi.color===void 0||ge.update(Be,pt,an),(_i||Ze.receiveShadow!==Be.receiveShadow)&&(Ze.receiveShadow=Be.receiveShadow,mt.setValue(F,"receiveShadow",Be.receiveShadow)),Oe.isMeshGouraudMaterial&&Oe.envMap!==null&&(tn.envMap.value=$t,tn.flipEnvMap.value=$t.isCubeTexture&&$t.isRenderTargetTexture===!1?-1:1),Oe.isMeshStandardMaterial&&Oe.envMap===null&&rt.environment!==null&&(tn.envMapIntensity.value=rt.environmentIntensity),_i&&(mt.setValue(F,"toneMappingExposure",y.toneMappingExposure),Ze.needsLights&&(kt=Mn,(Wt=tn).ambientLightColor.needsUpdate=kt,Wt.lightProbe.needsUpdate=kt,Wt.directionalLights.needsUpdate=kt,Wt.directionalLightShadows.needsUpdate=kt,Wt.pointLights.needsUpdate=kt,Wt.pointLightShadows.needsUpdate=kt,Wt.spotLights.needsUpdate=kt,Wt.spotLightShadows.needsUpdate=kt,Wt.rectAreaLights.needsUpdate=kt,Wt.hemisphereLights.needsUpdate=kt),St&&Oe.fog===!0&&ve.refreshFogUniforms(tn,St),ve.refreshMaterialUniforms(tn,Oe,ae,re,v.state.transmissionRenderTarget[Ge.id]),Vr.upload(F,Xs(Ze),tn,D));var Wt,kt;if(Oe.isShaderMaterial&&Oe.uniformsNeedUpdate===!0&&(Vr.upload(F,Xs(Ze),tn,D),Oe.uniformsNeedUpdate=!1),Oe.isSpriteMaterial&&mt.setValue(F,"center",Be.center),mt.setValue(F,"modelViewMatrix",Be.modelViewMatrix),mt.setValue(F,"normalMatrix",Be.normalMatrix),mt.setValue(F,"modelMatrix",Be.matrixWorld),Oe.isShaderMaterial||Oe.isRawShaderMaterial){let Gt=Oe.uniformsGroups;for(let yi=0,Yr=Gt.length;yi<Yr;yi++){let er=Gt[yi];it.update(er,an),it.bind(er,an)}}return an})(E,Y,ee,oe,K);B.setMaterial(oe,we);let De=ee.index,$=1;if(oe.wireframe===!0){if(De=le.getWireframeAttribute(ee),De===void 0)return;$=2}let ue=ee.drawRange,se=ee.attributes.position,Pe=ue.start*$,Ve=(ue.start+ue.count)*$;me!==null&&(Pe=Math.max(Pe,me.start*$),Ve=Math.min(Ve,(me.start+me.count)*$)),De!==null?(Pe=Math.max(Pe,0),Ve=Math.min(Ve,De.count)):se!=null&&(Pe=Math.max(Pe,0),Ve=Math.min(Ve,se.count));let et=Ve-Pe;if(et<0||et===1/0)return;let Qe;at.setup(K,oe,Re,ee,De);let He=Le;if(De!==null&&(Qe=te.get(De),He=Ie,He.setIndex(Qe)),K.isMesh)oe.wireframe===!0?(B.setLineWidth(oe.wireframeLinewidth*T()),He.setMode(F.LINES)):He.setMode(F.TRIANGLES);else if(K.isLine){let Ge=oe.linewidth;Ge===void 0&&(Ge=1),B.setLineWidth(Ge*T()),K.isLineSegments?He.setMode(F.LINES):K.isLineLoop?He.setMode(F.LINE_LOOP):He.setMode(F.LINE_STRIP)}else K.isPoints?He.setMode(F.POINTS):K.isSprite&&He.setMode(F.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Pi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),He.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(A.get("WEBGL_multi_draw"))He.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let Ge=K._multiDrawStarts,rt=K._multiDrawCounts,pt=K._multiDrawCount,Oe=De?te.get(De).bytesPerElement:1,Be=U.get(oe).currentProgram.getUniforms();for(let St=0;St<pt;St++)Be.setValue(F,"_gl_DrawID",St),He.render(Ge[St]/Oe,rt[St])}else if(K.isInstancedMesh)He.renderInstances(Pe,et,K.count);else if(ee.isInstancedBufferGeometry){let Ge=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,rt=Math.min(ee.instanceCount,Ge);He.renderInstances(Pe,et,rt)}else He.render(Pe,et)},this.compile=function(E,Y,ee=null){ee===null&&(ee=E),v=_e.get(ee),v.init(Y),g.push(v),ee.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),E!==ee&&E.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),v.setupLights();let oe=new Set;return E.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let me=K.material;if(me)if(Array.isArray(me))for(let we=0;we<me.length;we++){let Re=me[we];zn(Re,ee,K),oe.add(Re)}else zn(me,ee,K),oe.add(me)}),v=g.pop(),oe},this.compileAsync=function(E,Y,ee=null){let oe=this.compile(E,Y,ee);return new Promise(K=>{function me(){oe.forEach(function(we){U.get(we).currentProgram.isReady()&&oe.delete(we)}),oe.size!==0?setTimeout(me,10):K(E)}A.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let sn=null;function qi(){jt.stop()}function Yi(){jt.start()}let jt=new qu;function Zi(E,Y,ee,oe){if(E.visible===!1)return;if(E.layers.test(Y.layers)){if(E.isGroup)ee=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(Y);else if(E.isLight)v.pushLight(E),E.castShadow&&v.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||be.intersectsSprite(E)){oe&&V.setFromMatrixPosition(E.matrixWorld).applyMatrix4(I);let me=ne.update(E),we=E.material;we.visible&&m.push(E,me,we,ee,V.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||be.intersectsObject(E))){let me=ne.update(E),we=E.material;if(oe&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),V.copy(E.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),V.copy(me.boundingSphere.center)),V.applyMatrix4(E.matrixWorld).applyMatrix4(I)),Array.isArray(we)){let Re=me.groups;for(let De=0,$=Re.length;De<$;De++){let ue=Re[De],se=we[ue.materialIndex];se&&se.visible&&m.push(E,me,se,ee,V.z,ue)}}else we.visible&&m.push(E,me,we,ee,V.z,null)}}let K=E.children;for(let me=0,we=K.length;me<we;me++)Zi(K[me],Y,ee,oe)}function Hs(E,Y,ee,oe){let K=E.opaque,me=E.transmissive,we=E.transparent;v.setupLightsView(ee),xe===!0&&Ce.setGlobalState(y.clippingPlanes,ee),oe&&B.viewport(j.copy(oe)),K.length>0&&Ji(K,Y,ee),me.length>0&&Ji(me,Y,ee),we.length>0&&Ji(we,Y,ee),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function Ws(E,Y,ee,oe){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[oe.id]===void 0&&(v.state.transmissionRenderTarget[oe.id]=new In(1,1,{generateMipmaps:!0,type:A.has("EXT_color_buffer_half_float")||A.has("EXT_color_buffer_float")?zr:Un,minFilter:Bi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));let K=v.state.transmissionRenderTarget[oe.id],me=oe.viewport||j;K.setSize(me.z*y.transmissionResolutionScale,me.w*y.transmissionResolutionScale);let we=y.getRenderTarget(),Re=y.getActiveCubeFace(),De=y.getActiveMipmapLevel();y.setRenderTarget(K),y.getClearColor(z),Z=y.getClearAlpha(),Z<1&&y.setClearColor(16777215,.5),y.clear(),M&&tt.render(ee);let $=y.toneMapping;y.toneMapping=Kn;let ue=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),v.setupLightsView(oe),xe===!0&&Ce.setGlobalState(y.clippingPlanes,oe),Ji(E,ee,oe),D.updateMultisampleRenderTarget(K),D.updateRenderTargetMipmap(K),A.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let Pe=0,Ve=Y.length;Pe<Ve;Pe++){let et=Y[Pe],Qe=et.object,He=et.geometry,Ge=et.material,rt=et.group;if(Ge.side===Et&&Qe.layers.test(oe.layers)){let pt=Ge.side;Ge.side=Ot,Ge.needsUpdate=!0,Ki(Qe,ee,oe,He,Ge,rt),Ge.side=pt,Ge.needsUpdate=!0,se=!0}}se===!0&&(D.updateMultisampleRenderTarget(K),D.updateRenderTargetMipmap(K))}y.setRenderTarget(we,Re,De),y.setClearColor(z,Z),ue!==void 0&&(oe.viewport=ue),y.toneMapping=$}function Ji(E,Y,ee){let oe=Y.isScene===!0?Y.overrideMaterial:null;for(let K=0,me=E.length;K<me;K++){let we=E[K],Re=we.object,De=we.geometry,$=we.group,ue=we.material;ue.allowOverride===!0&&oe!==null&&(ue=oe),Re.layers.test(ee.layers)&&Ki(Re,Y,ee,De,ue,$)}}function Ki(E,Y,ee,oe,K,me){E.onBeforeRender(y,Y,ee,oe,K,me),E.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),K.onBeforeRender(y,Y,ee,oe,E,me),K.transparent===!0&&K.side===Et&&K.forceSinglePass===!1?(K.side=Ot,K.needsUpdate=!0,y.renderBufferDirect(ee,Y,oe,K,E,me),K.side=Nr,K.needsUpdate=!0,y.renderBufferDirect(ee,Y,oe,K,E,me),K.side=Et):y.renderBufferDirect(ee,Y,oe,K,E,me),E.onAfterRender(y,Y,ee,oe,K,me)}function ti(E,Y,ee){Y.isScene!==!0&&(Y=k);let oe=U.get(E),K=v.state.lights,me=v.state.shadowsArray,we=K.state.version,Re=he.getParameters(E,K.state,me,Y,ee),De=he.getProgramCacheKey(Re),$=oe.programs;oe.environment=E.isMeshStandardMaterial?Y.environment:null,oe.fog=Y.fog,oe.envMap=(E.isMeshStandardMaterial?q:J).get(E.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&E.envMap===null?Y.environmentRotation:E.envMapRotation,$===void 0&&(E.addEventListener("dispose",ei),$=new Map,oe.programs=$);let ue=$.get(De);if(ue!==void 0){if(oe.currentProgram===ue&&oe.lightsStateVersion===we)return js(E,Re),ue}else Re.uniforms=he.getUniforms(E),E.onBeforeCompile(Re,y),ue=he.acquireProgram(Re,De),$.set(De,ue),oe.uniforms=Re.uniforms;let se=oe.uniforms;return(E.isShaderMaterial||E.isRawShaderMaterial)&&E.clipping!==!0||(se.clippingPlanes=Ce.uniform),js(E,Re),oe.needsLights=(function(Pe){return Pe.isMeshLambertMaterial||Pe.isMeshToonMaterial||Pe.isMeshPhongMaterial||Pe.isMeshStandardMaterial||Pe.isShadowMaterial||Pe.isShaderMaterial&&Pe.lights===!0})(E),oe.lightsStateVersion=we,oe.needsLights&&(se.ambientLightColor.value=K.state.ambient,se.lightProbe.value=K.state.probe,se.directionalLights.value=K.state.directional,se.directionalLightShadows.value=K.state.directionalShadow,se.spotLights.value=K.state.spot,se.spotLightShadows.value=K.state.spotShadow,se.rectAreaLights.value=K.state.rectArea,se.ltc_1.value=K.state.rectAreaLTC1,se.ltc_2.value=K.state.rectAreaLTC2,se.pointLights.value=K.state.point,se.pointLightShadows.value=K.state.pointShadow,se.hemisphereLights.value=K.state.hemi,se.directionalShadowMap.value=K.state.directionalShadowMap,se.directionalShadowMatrix.value=K.state.directionalShadowMatrix,se.spotShadowMap.value=K.state.spotShadowMap,se.spotLightMatrix.value=K.state.spotLightMatrix,se.spotLightMap.value=K.state.spotLightMap,se.pointShadowMap.value=K.state.pointShadowMap,se.pointShadowMatrix.value=K.state.pointShadowMatrix),oe.currentProgram=ue,oe.uniformsList=null,ue}function Xs(E){if(E.uniformsList===null){let Y=E.currentProgram.getUniforms();E.uniformsList=Vr.seqWithValue(Y.seq,E.uniforms)}return E.uniformsList}function js(E,Y){let ee=U.get(E);ee.outputColorSpace=Y.outputColorSpace,ee.batching=Y.batching,ee.batchingColor=Y.batchingColor,ee.instancing=Y.instancing,ee.instancingColor=Y.instancingColor,ee.instancingMorph=Y.instancingMorph,ee.skinning=Y.skinning,ee.morphTargets=Y.morphTargets,ee.morphNormals=Y.morphNormals,ee.morphColors=Y.morphColors,ee.morphTargetsCount=Y.morphTargetsCount,ee.numClippingPlanes=Y.numClippingPlanes,ee.numIntersection=Y.numClipIntersection,ee.vertexAlphas=Y.vertexAlphas,ee.vertexTangents=Y.vertexTangents,ee.toneMapping=Y.toneMapping}jt.setAnimationLoop(function(E){sn&&sn(E)}),typeof self<"u"&&jt.setContext(self),this.setAnimationLoop=function(E){sn=E,Ye.setAnimationLoop(E),E===null?jt.stop():jt.start()},Ye.addEventListener("sessionstart",qi),Ye.addEventListener("sessionend",Yi),this.render=function(E,Y){if(Y!==void 0&&Y.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(b===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera(Y),Y=Ye.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,Y,O),v=_e.get(E,g.length),v.init(Y),g.push(v),I.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),be.setFromProjectionMatrix(I),de=this.localClippingEnabled,xe=Ce.init(this.clippingPlanes,de),m=Ee.get(E,x.length),m.init(),x.push(m),Ye.enabled===!0&&Ye.isPresenting===!0){let me=y.xr.getDepthSensingMesh();me!==null&&Zi(me,Y,-1/0,y.sortObjects)}Zi(E,Y,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(Me,Ae),M=Ye.enabled===!1||Ye.isPresenting===!1||Ye.hasDepthSensing()===!1,M&&tt.addToRenderList(m,E),this.info.render.frame++,xe===!0&&Ce.beginShadows();let ee=v.state.shadowsArray;Ne.render(ee,E,Y),xe===!0&&Ce.endShadows(),this.info.autoReset===!0&&this.info.reset();let oe=m.opaque,K=m.transmissive;if(v.setupLights(),Y.isArrayCamera){let me=Y.cameras;if(K.length>0)for(let we=0,Re=me.length;we<Re;we++)Ws(oe,K,E,me[we]);M&&tt.render(E);for(let we=0,Re=me.length;we<Re;we++){let De=me[we];Hs(m,E,De,De.viewport)}}else K.length>0&&Ws(oe,K,E,Y),M&&tt.render(E),Hs(m,E,Y);O!==null&&R===0&&(D.updateMultisampleRenderTarget(O),D.updateRenderTargetMipmap(O)),E.isScene===!0&&E.onAfterRender(y,E,Y),at.resetDefaultState(),L=-1,N=null,g.pop(),g.length>0?(v=g[g.length-1],xe===!0&&Ce.setGlobalState(y.clippingPlanes,v.state.camera)):v=null,x.pop(),m=x.length>0?x[x.length-1]:null},this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(E,Y,ee){let oe=U.get(E);oe.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),U.get(E.texture).__webglTexture=Y,U.get(E.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:ee,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,Y){let ee=U.get(E);ee.__webglFramebuffer=Y,ee.__useDefaultFramebuffer=Y===void 0};let Yo=F.createFramebuffer();this.setRenderTarget=function(E,Y=0,ee=0){O=E,S=Y,R=ee;let oe=!0,K=null,me=!1,we=!1;if(E){let Re=U.get(E);if(Re.__useDefaultFramebuffer!==void 0)B.bindFramebuffer(F.FRAMEBUFFER,null),oe=!1;else if(Re.__webglFramebuffer===void 0)D.setupRenderTarget(E);else if(Re.__hasExternalTextures)D.rebindTextures(E,U.get(E.texture).__webglTexture,U.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let ue=E.depthTexture;if(Re.__boundDepthTexture!==ue){if(ue!==null&&U.has(ue)&&(E.width!==ue.image.width||E.height!==ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(E)}}let De=E.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(we=!0);let $=U.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(K=Array.isArray($[Y])?$[Y][ee]:$[Y],me=!0):K=E.samples>0&&D.useMultisampledRTT(E)===!1?U.get(E).__webglMultisampledFramebuffer:Array.isArray($)?$[ee]:$,j.copy(E.viewport),W.copy(E.scissor),H=E.scissorTest}else j.copy(ie).multiplyScalar(ae).floor(),W.copy(ce).multiplyScalar(ae).floor(),H=Se;if(ee!==0&&(K=Yo),B.bindFramebuffer(F.FRAMEBUFFER,K)&&oe&&B.drawBuffers(E,K),B.viewport(j),B.scissor(W),B.setScissorTest(H),me){let Re=U.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Re.__webglTexture,ee)}else if(we){let Re=U.get(E.texture),De=Y;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Re.__webglTexture,ee,De)}else if(E!==null&&ee!==0){let Re=U.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Re.__webglTexture,ee)}L=-1},this.readRenderTargetPixels=function(E,Y,ee,oe,K,me,we,Re=0){if(!E||!E.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=U.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(De=De[we]),De){B.bindFramebuffer(F.FRAMEBUFFER,De);try{let $=E.textures[Re],ue=$.format,se=$.type;if(!P.textureFormatReadable(ue))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(se))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");Y>=0&&Y<=E.width-oe&&ee>=0&&ee<=E.height-K&&(E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Re),F.readPixels(Y,ee,oe,K,nt.convert(ue),nt.convert(se),me))}finally{let $=O!==null?U.get(O).__webglFramebuffer:null;B.bindFramebuffer(F.FRAMEBUFFER,$)}}},this.readRenderTargetPixelsAsync=async function(E,Y,ee,oe,K,me,we,Re=0){if(!E||!E.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=U.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(De=De[we]),De){if(Y>=0&&Y<=E.width-oe&&ee>=0&&ee<=E.height-K){B.bindFramebuffer(F.FRAMEBUFFER,De);let $=E.textures[Re],ue=$.format,se=$.type;if(!P.textureFormatReadable(ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Pe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Pe),F.bufferData(F.PIXEL_PACK_BUFFER,me.byteLength,F.STREAM_READ),E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Re),F.readPixels(Y,ee,oe,K,nt.convert(ue),nt.convert(se),0);let Ve=O!==null?U.get(O).__webglFramebuffer:null;B.bindFramebuffer(F.FRAMEBUFFER,Ve);let et=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await fu(F,et,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Pe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,me),F.deleteBuffer(Pe),F.deleteSync(et),me}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,Y=null,ee=0){let oe=Math.pow(2,-ee),K=Math.floor(E.image.width*oe),me=Math.floor(E.image.height*oe),we=Y!==null?Y.x:0,Re=Y!==null?Y.y:0;D.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,ee,0,0,we,Re,K,me),B.unbindTexture()};let Zo=F.createFramebuffer(),$s=F.createFramebuffer();this.copyTextureToTexture=function(E,Y,ee=null,oe=null,K=0,me=null){let we,Re,De,$,ue,se,Pe,Ve,et;me===null&&(K!==0?(Pi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),me=K,K=0):me=0);let Qe=E.isCompressedTexture?E.mipmaps[me]:E.image;if(ee!==null)we=ee.max.x-ee.min.x,Re=ee.max.y-ee.min.y,De=ee.isBox3?ee.max.z-ee.min.z:1,$=ee.min.x,ue=ee.min.y,se=ee.isBox3?ee.min.z:0;else{let Pt=Math.pow(2,-K);we=Math.floor(Qe.width*Pt),Re=Math.floor(Qe.height*Pt),De=E.isDataArrayTexture?Qe.depth:E.isData3DTexture?Math.floor(Qe.depth*Pt):1,$=0,ue=0,se=0}oe!==null?(Pe=oe.x,Ve=oe.y,et=oe.z):(Pe=0,Ve=0,et=0);let He=nt.convert(Y.format),Ge=nt.convert(Y.type),rt;Y.isData3DTexture?(D.setTexture3D(Y,0),rt=F.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(D.setTexture2DArray(Y,0),rt=F.TEXTURE_2D_ARRAY):(D.setTexture2D(Y,0),rt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Y.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Y.unpackAlignment);let pt=F.getParameter(F.UNPACK_ROW_LENGTH),Oe=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Be=F.getParameter(F.UNPACK_SKIP_PIXELS),St=F.getParameter(F.UNPACK_SKIP_ROWS),vi=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Qe.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Qe.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,$),F.pixelStorei(F.UNPACK_SKIP_ROWS,ue),F.pixelStorei(F.UNPACK_SKIP_IMAGES,se);let xn=E.isDataArrayTexture||E.isData3DTexture,$t=Y.isDataArrayTexture||Y.isData3DTexture;if(E.isDepthTexture){let Pt=U.get(E),yn=U.get(Y),It=U.get(Pt.__renderTarget),jr=U.get(yn.__renderTarget);B.bindFramebuffer(F.READ_FRAMEBUFFER,It.__webglFramebuffer),B.bindFramebuffer(F.DRAW_FRAMEBUFFER,jr.__webglFramebuffer);for(let ni=0;ni<De;ni++)xn&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,U.get(E).__webglTexture,K,se+ni),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,U.get(Y).__webglTexture,me,et+ni)),F.blitFramebuffer($,ue,we,Re,Pe,Ve,we,Re,F.DEPTH_BUFFER_BIT,F.NEAREST);B.bindFramebuffer(F.READ_FRAMEBUFFER,null),B.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(K!==0||E.isRenderTargetTexture||U.has(E)){let Pt=U.get(E),yn=U.get(Y);B.bindFramebuffer(F.READ_FRAMEBUFFER,Zo),B.bindFramebuffer(F.DRAW_FRAMEBUFFER,$s);for(let It=0;It<De;It++)xn?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pt.__webglTexture,K,se+It):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Pt.__webglTexture,K),$t?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,yn.__webglTexture,me,et+It):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,yn.__webglTexture,me),K!==0?F.blitFramebuffer($,ue,we,Re,Pe,Ve,we,Re,F.COLOR_BUFFER_BIT,F.NEAREST):$t?F.copyTexSubImage3D(rt,me,Pe,Ve,et+It,$,ue,we,Re):F.copyTexSubImage2D(rt,me,Pe,Ve,$,ue,we,Re);B.bindFramebuffer(F.READ_FRAMEBUFFER,null),B.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else $t?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(rt,me,Pe,Ve,et,we,Re,De,He,Ge,Qe.data):Y.isCompressedArrayTexture?F.compressedTexSubImage3D(rt,me,Pe,Ve,et,we,Re,De,He,Qe.data):F.texSubImage3D(rt,me,Pe,Ve,et,we,Re,De,He,Ge,Qe):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,me,Pe,Ve,we,Re,He,Ge,Qe.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,me,Pe,Ve,Qe.width,Qe.height,He,Qe.data):F.texSubImage2D(F.TEXTURE_2D,me,Pe,Ve,we,Re,He,Ge,Qe);F.pixelStorei(F.UNPACK_ROW_LENGTH,pt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Oe),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Be),F.pixelStorei(F.UNPACK_SKIP_ROWS,St),F.pixelStorei(F.UNPACK_SKIP_IMAGES,vi),me===0&&Y.generateMipmaps&&F.generateMipmap(rt),B.unbindTexture()},this.copyTextureToTexture3D=function(E,Y,ee=null,oe=null,K=0){return Pi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,Y,ee,oe,K)},this.initRenderTarget=function(E){U.get(E).__webglFramebuffer===void 0&&D.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?D.setTextureCube(E,0):E.isData3DTexture?D.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?D.setTexture2DArray(E,0):D.setTexture2D(E,0),B.unbindTexture()},this.resetState=function(){S=0,R=0,O=null,B.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}};var gi=(r,e=0,t=1)=>Math.min(t,Math.max(e,r)),qe=(r,e,t)=>{let n=gi((t-r)/(e-r));return n*n*(3-2*n)},_n=(r,e,t)=>{let n=gi((t-r)/(e-r));return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2};var $e=(r,e,t)=>r+(e-r)*t,jo=r=>()=>(r=r*16807%2147483647)/2147483647,On=1/6,ym=1/3,Mm=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],Ho=new Uint8Array(512);{let r=jo(1234567),e=new Uint8Array(256);for(let t=0;t<256;t++)e[t]=t;for(let t=255;t>0;t--){let n=Math.floor(r()*(t+1));[e[t],e[n]]=[e[n],e[t]]}for(let t=0;t<512;t++)Ho[t]=e[t&255]}function Xi(r,e,t){let n=(r+e+t)*ym,i=Math.floor(r+n),s=Math.floor(e+n),a=Math.floor(t+n),o=(i+s+a)*On,l=r-i+o,c=e-s+o,h=t-a+o,u,d,p,f,_,m;l>=c?c>=h?(u=1,d=0,p=0,f=1,_=1,m=0):l>=h?(u=1,d=0,p=0,f=1,_=0,m=1):(u=0,d=0,p=1,f=1,_=0,m=1):c<h?(u=0,d=0,p=1,f=0,_=1,m=1):l<h?(u=0,d=1,p=0,f=0,_=1,m=1):(u=0,d=1,p=0,f=1,_=1,m=0);let v=[[l,c,h,0,0,0],[l-u+On,c-d+On,h-p+On,u,d,p],[l-f+2*On,c-_+2*On,h-m+2*On,f,_,m],[l-1+3*On,c-1+3*On,h-1+3*On,1,1,1]],x=0,g=i&255,y=s&255,b=a&255;for(let[S,R,O,L,N,j]of v){let W=.6-S*S-R*R-O*O;if(W>0){let H=Mm[Ho[g+L+Ho[y+N+Ho[b+j]]]%12];W*=W,x+=W*W*(H[0]*S+H[1]*R+H[2]*O)}}return 32*x}var Sm=(r,e,t,n=4)=>{let i=.5,s=1,a=0;for(let o=0;o<n;o++)a+=i*Xi(r*s,e*s,t*s),i*=.5,s*=2;return a};function bm(r=1){let e=new Ar;e.add(new ze(new Zn(24,16,24),new Yn({color:new Te(.5,.43,.35),side:Ot})));let t=(n,i,s,a)=>{let o=new ze(new Ln(n,i),new Yn({color:new Te(...s),side:Et}));o.position.set(a[0]*r,a[1],a[2]),o.lookAt(0,0,0),e.add(o)};return t(8,6,[7,6.6,6],[-5,7,5]),t(1.4,10,[3.2,3.1,3],[-9,0,-1]),t(1.4,10,[2.4,2.3,2.2],[9,.5,-2]),t(7,12,[.03,.025,.02],[-8.5,0,6.5]),t(7,12,[.03,.025,.02],[8.5,0,6.5]),t(16,6,[.9,.8,.68],[0,-7.5,0]),e}var Xr=1,Xt=1.13,Vs=.96;var Qu=1/.745;function Tm(){let r=document.createElement("canvas");r.width=r.height=512;let e=r.getContext("2d"),t=jo(77);e.fillStyle="rgb(224,224,224)",e.fillRect(0,0,512,512);for(let i=0;i<5200;i++){let s=t()*512,a=20+t()*472,o=.35+t()*.9;e.fillStyle=`rgba(255,${238+t()*17|0},${222+t()*30|0},${(.3+t()*.45).toFixed(2)})`,e.beginPath(),e.ellipse(s,a,o,o*(.8+t()*.4),0,0,6.283),e.fill()}for(let i=0;i<900;i++){let s=t()*512,a=t()*512,o=.5+t()*1.4;e.fillStyle=`rgba(150,120,120,${(.12+t()*.18).toFixed(2)})`,e.beginPath(),e.arc(s,a,o,0,6.283),e.fill()}let n=new Li(r);return n.colorSpace=Lt,n.wrapS=n.wrapT=Mr,n.anisotropy=8,n}function wm(r){let e=new Qt(1,160,120,r>0?Math.PI/2:-Math.PI/2,Math.PI),t=e.attributes.position,n=e.attributes.normal,i=e.attributes.uv,s=t.count,a=new Float32Array(t.array),o=new Float32Array(s*3),l=new Float32Array(s*3),c=new Float32Array(s*3),h=new Float32Array(s*2),u=new Te("#5e0610"),d=new Te("#a80b1a"),p=new Te("#cf3a1c"),f=new Te,_=new Te("#3d100b"),m=new Te("#6a1f14"),v=new Te("#9c4024"),x=new Te;for(let y=0;y<s;y++){let b=a[y*3],S=a[y*3+1],R=a[y*3+2],O=qe(.86,1,-S),L=Math.max(0,S-.9),N=1-O*.08-L*.5,j=b*Xr*N,W=S*Xt+O*.13,H=R*Vs*N;t.setXYZ(y,j,W,H);let z=b/Xr,Z=S/Xt,Q=R/Vs,re=Math.hypot(z,Z,Q)||1;n.setXYZ(y,z/re,Z/re,Q/re),h[y*2]=.5+j/(2*Xr)*.965,h[y*2+1]=.5+W/(2*Xt)*.965;let ae=Sm(b*2.6+3,S*2.6,R*2.6,3);f.copy(d).lerp(u,gi(.3-ae*.55+Math.max(0,-S)*.35)).lerp(p,gi((S-.5)*1.3)*.7),f.multiplyScalar(Qu),l.set([f.r,f.g,f.b],y*3);let Me=Xi(b*1.8+9,S*1.2,R*1.8),Ae=Xi(b*3.6,S*3,R*3.6),ce=.86+(Me*.05+Ae*.012),Se=Math.abs(b)<.42?(.42-Math.abs(b))*.55:0;o.set([j*ce+r*Se*.38,W*ce*.94,H*ce*.95],y*3),x.copy(_).lerp(m,qe(-.6,.1,Me)).lerp(v,qe(.2,.9,Me)*.75),x.multiplyScalar(Qu*(.94+Xi(b*6,S*6,R*6)*.08)),c.set([x.r,x.g,x.b],y*3)}e.setAttribute("color",new xt(l,3)),e.setAttribute("colorDry",new xt(c,3)),e.setAttribute("photoUV",new xt(h,2)),e.morphAttributes.position=[new xt(o,3)];let g=new dt;return g.setIndex(e.index),g.setAttribute("position",new xt(o,3)),g.computeVertexNormals(),e.morphAttributes.normal=[g.attributes.normal],e.userData.unit=a,e}function Gc(r){let e=new yt({vertexColors:!0,map:r,roughness:.34,clearcoat:.9,clearcoatRoughness:.14,sheen:.25,sheenColor:new Te("#ff9b8a"),sheenRoughness:.5,side:Et}),t={value:0},n={value:null},i={value:0},s={value:0};return e.userData={dry:t,photo:n,usePhoto:i,glow:s},e.onBeforeCompile=a=>{Object.assign(a.uniforms,{uDry:t,uPhoto:n,uUsePhoto:i,uGlow:s}),a.vertexShader=`attribute vec3 colorDry;
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
  totalEmissiveRadiance += photoLin * uGlow * usePhoto;`)},e.customProgramCacheKey=()=>"cascarup-skin-2",e}function Em(r,e){let n=new Ln(1,1,160,1),i=n.attributes.position;for(let s=0;s<=160;s++){let a=-Math.PI/2+s/160*Math.PI*2;for(let o=0;o<2;o++){let l=o===0?1:e,c=o*161+s,h=Math.sin(a),u=Math.cos(a),d=qe(.86,1,-h),p=Math.max(0,h-.9),f=1-d*.08-p*.5;i.setXYZ(c,r*.002,(h*Xt+d*.13)*l,u*Vs*f*l)}}return n.computeVertexNormals(),n}function Am(r){let e=new Qt(1,72,54),t=e.attributes.position,n=e.attributes.uv,i=t.count,s=new Float32Array(i*3),a=new Te("#6b3b1f"),o=new Te("#8a5430"),l=new Te("#2a1309"),c=new Te;for(let p=0;p<i;p++){let f=t.getX(p),_=t.getY(p),m=t.getZ(p),v=r*f<0,x=f*.5,g=_*.8,y=m*.62,b=0;if(v){x*=.12;let R=.08*Math.sin(_*3.4);b=Math.exp(-Math.pow((y-R)/.06,2))*(1-Math.pow(Math.abs(_),6)),x+=r*b*.05}x+=Xi(f*4,_*4,m*4)*.006,t.setXYZ(p,x,g,y),c.copy(a).lerp(o,qe(-.2,.8,Xi(f*3,_*3,m*3))).lerp(l,b*.9),s.set([c.r,c.g,c.b],p*3);let S=td[v?"flat":"round"];n.setXY(p,S.cx+(v?-r:r)*m*S.rx,1-(S.cy-_*S.ry))}e.setAttribute("color",new xt(s,3));let h=e.index.array,u=[],d=[];for(let p=0;p<h.length;p+=3)((t.getX(h[p])+t.getX(h[p+1])+t.getX(h[p+2]))*r<0?u:d).push(h[p],h[p+1],h[p+2]);return e.setIndex([...u,...d]),e.addGroup(0,u.length,0),e.addGroup(u.length,d.length,1),e.computeVertexNormals(),e}var Wo=document.documentElement.dataset.root||"",td={flat:{src:Wo+"assets/bean/bohne-flach.webp",cx:.4859,cy:.488,rx:.4932*.95,ry:.4997*.96},round:{src:Wo+"assets/bean/bohne-rund.webp",cx:.5061,cy:.5127,rx:.4911*.95,ry:.4889*.96}};function Cm(r){let e=new Qt(1,48,36,r>0?Math.PI/2:-Math.PI/2,Math.PI),t=e.attributes.position;for(let n=0;n<t.count;n++){let i=t.getX(n),s=t.getY(n),a=t.getZ(n),o=1+Xi(i*6,s*6,a*6)*.03;t.setXYZ(n,i*.58*o,s*.9*o,a*.7*o)}return e.computeVertexNormals(),e}var Rm=`
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
}`;function Pm(r){let e={uBloom:{value:0},uTime:{value:0},uTop:{value:0},uSrc0:{value:new C(0,9,0)},uSrc1:{value:new C(0,9,0)}};return r.userData.infuse=e,r.onBeforeCompile=t=>{Object.assign(t.uniforms,e),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
`+Rm).replace("#include <transmission_fragment>",je.transmission_fragment.replace("material.attenuationColor = attenuationColor;",`
  {
    vec3 rd = normalize( vWorldPosition - cameraPosition );
    float dens = 0.0;
    for ( int i = 0; i < 5; i ++ ) dens += steep( vWorldPosition + rd * ( .07 + float( i ) * .16 ) );
    dens /= 5.0;
    // clear water absorbs nothing; where the cascara has steeped, the same amber absorbs ever more
    material.attenuationColor = attenuationColor;
    material.attenuationDistance = attenuationDistance / max( dens, .002 );   // absorption grows with the density
  }`))},r.customProgramCacheKey=()=>"cascarup-infuse-6",r}var Xo=[[0,0],[.3,0],[.322,.012],[.33,.04],[.33,2.38],[.327,2.399],[.319,2.418],[.311,2.437],[.303,2.457],[.293,2.476],[.282,2.495],[.268,2.514],[.247,2.533],[.22,2.552],[.182,2.571],[.163,2.587],[.148,2.6],[.139,2.616],[.138,2.7],[.146,2.71],[.146,2.74],[.139,2.75],[.146,2.765],[.146,2.79],[.139,2.8],[.142,2.92],[.135,2.94],[.106,2.94],[.104,2.7],[.118,2.6]],ed=2.94,Im=2.73,nd=17,Lm=.33,Dm=1.16;function Gs(r,e=0,t=96){return new Lr(r.map(([n,i])=>new fe(Math.max(0,n-e),i)),t)}var Um=()=>Xo.slice(0,nd+1);function Nm(r,e){for(let t=1;t<=nd;t++){let[n,i]=Xo[t-1],[s,a]=Xo[t];if(r>=i&&r<=a&&a>i)return Math.max(0,$e(n,s,(r-i)/(a-i))-e)}return 0}function Fm(){let r=Gs([[0,.236],[.14,.236],[.151,.231],[.156,.22],[.156,.168],[.15,.163],[.156,.158],[.156,.128],[.15,.123],[.156,.118],[.156,.088],[.15,.083],[.156,.078],[.156,.06],[.149,.056],[.153,.052],[.153,.004],[.147,0],[.135,0]],0,180),e=r.attributes.position;for(let t=0;t<e.count;t++){let n=e.getX(t),i=e.getY(t),s=e.getZ(t);if(i>.17&&i<.218){let a=Math.atan2(s,n),o=1+.02*Math.max(-.6,Math.min(.6,Math.cos(a*64)*2));e.setX(t,n*o),e.setZ(t,s*o)}}return r.computeVertexNormals(),r}var Wc=new Set,Xc=(r,e)=>{let t={};return Wc.add(t),(...n)=>{Wc.delete(t),e&&e(...n)}};function Om(r){let e=Xc(r),t=new Fi().load(r,e,void 0,e);return t.colorSpace=Lt,t.anisotropy=8,t}var Vc=2.38,Bm=()=>{let r=Lm+.004,e=Vc*r/(1007/1312);return new Jn(r,r,e,128,1,!0,-Vc/2,Vc)};function zm(){let r=document.createElement("canvas");r.width=r.height=256;let e=r.getContext("2d"),t=e.createRadialGradient(128,128,0,128,128,128);return t.addColorStop(0,"rgba(58,33,22,.6)"),t.addColorStop(.35,"rgba(58,33,22,.3)"),t.addColorStop(1,"rgba(58,33,22,0)"),e.fillStyle=t,e.fillRect(0,0,256,256),new Li(r)}var km={original:{label:Wo+"assets/label/original.webp",syrup:"#74290d",surface:"#3c1306",props:"cascara"},cozy:{label:Wo+"assets/label/cozy.webp",syrup:"#66230b",surface:"#341005",props:"spice"}};function Hc(r){let e=new Di,t=.018,n=1.6,i=.085,s=.022,a=90,o=(f,_)=>[Math.cos(f)*_,Math.sin(f)*_];for(let f=0;f<=a;f++){let _=f/a*n*Math.PI*2,[m,v]=o(_,i-s*_/Math.PI);f?e.lineTo(m,v):e.moveTo(m,v)}for(let f=a;f>=0;f--){let _=f/a*n*Math.PI*2,[m,v]=o(_,i-s*_/Math.PI-t);e.lineTo(m,v)}let l=new Ir(e,{depth:r,steps:48,bevelEnabled:!1,curveSegments:4});l.translate(0,0,-r/2);let c=l.attributes.position,h=new Float32Array(c.count*3),u=new Te("#7a3c1c"),d=new Te("#a4592c"),p=new Te;for(let f=0;f<c.count;f++){let _=c.getX(f),m=c.getY(f),v=c.getZ(f),x=Math.atan2(m,_),g=.5+.5*Math.sin(x*38+Math.sin(v*9)*.6),y=.5+.5*Math.sin(v*41+x*3)*Math.sin(v*17);p.copy(u).lerp(d,g*.45+y*.25),h.set([p.r,p.g,p.b],f*3)}return l.setAttribute("color",new xt(h,3)),l.computeVertexNormals(),new ze(l,new en({vertexColors:!0,roughness:.86}))}function Gm(){let r=new Ft,e=new en({color:"#4e2311",roughness:.9}),t=new en({color:"#8a4f27",roughness:.75}),n=new yt({color:"#7a4220",roughness:.3,clearcoat:.8,clearcoatRoughness:.25}),i=new Qt(1,32,18),s=i.attributes.position;for(let o=0;o<s.count;o++){let l=s.getX(o),c=l>0?1-l*l*.82:1-l*l*.25,h=1+.06*Math.sin(l*23+s.getZ(o)*9);s.setXYZ(o,l,s.getY(o)*c*h,s.getZ(o)*c*h)}i.computeVertexNormals();for(let o=0;o<8;o++){let l=new Ft;l.rotation.y=o/8*Math.PI*2+o%2*.05;let c=new ze(i,e);c.scale.set(.21,.07,.08),c.position.x=.19,c.rotation.z=-.1;let h=new ze(new Qt(1,20,12),t);h.scale.set(.15,.03,.045),h.position.set(.2,.068,0);let u=new ze(new Qt(1,20,14),n);u.scale.set(.06,.035,.04),u.position.set(.2,.075,0),l.add(c,h,u),r.add(l)}let a=new ze(new Qt(.055,16,12),e);return a.scale.y=.9,r.add(a),r}var Vm=[[0,0],[.95,0],[1.03,.03],[1.06,.1],[1.06,.9],[1.085,.955],[1.09,1],[1.045,1],[1.025,.96],[1.025,.1],[.97,.055],[0,.055]];function Hm(r){let e=document.createElement("canvas");e.width=128,e.height=256;let t=e.getContext("2d"),n=jo(r);t.filter="blur(7px)",t.lineCap="round";for(let s=0;s<3;s++){t.strokeStyle=`rgba(255,255,255,${(.55+n()*.35).toFixed(2)})`,t.lineWidth=7+n()*9,t.beginPath();let a=44+n()*40,o=10+n()*16,l=1.6+n()*1.6,c=n()*6;for(let h=236;h>=20;h-=6){let u=(236-h)/216,d=a+Math.sin(u*l*Math.PI+c)*o*(.3+u);h===236?t.moveTo(d,h):t.lineTo(d,h)}t.stroke()}t.filter="none",t.globalCompositeOperation="destination-in";let i=t.createLinearGradient(0,0,0,256);return i.addColorStop(0,"rgba(0,0,0,0)"),i.addColorStop(.3,"#000"),i.addColorStop(.8,"#000"),i.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=i,t.fillRect(0,0,128,256),new Li(e)}var ji=[0,.28,.45,.6,.765,.862,1];function id(r,{onFrame:e,photo:t,plantBox:n,gentle:i=!1}={}){t&&(Xr=1,Xt=t.aspect||Xt,Vs=.94);let s=new Go({canvas:r,antialias:!0,alpha:!1,powerPreference:"high-performance"});s.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),s.toneMapping=wo,s.toneMappingExposure=1,s.localClippingEnabled=!0;let a=new Ar;a.background=new Te("#E6D3B7");let o=new Hr(s);a.environment=o.fromScene(bm(-1),.03).texture,a.environmentIntensity=.9;let l=new Nt(24,1,.1,100);l.position.set(0,0,12.6);let c=new Ur("#fff1df",1.5);c.position.set(4,6,6),a.add(c);let h=new Ur("#ffe9da",1.3);h.position.set(-5,3,-6),a.add(h),a.add(new Is("#fff6ea","#9a6a48",.25));let u=new Ft;a.add(u);let d=new Ft;u.add(d);let p=Tm(),f=new yt({color:"#f0d9a2",roughness:.3,clearcoat:.8,clearcoatRoughness:.2,side:Ot,transparent:!0}),_=new yt({color:"#e2ab82",roughness:.4,side:Et,transparent:!0}),m=new yt({color:"#f6e2a8",roughness:.14,transmission:.65,thickness:.45,ior:1.4,attenuationColor:new Te("#e3b765"),attenuationDistance:.5,clearcoat:.7,clearcoatRoughness:.1,side:Et,transparent:!0}),v=new yt({color:"#efe4cc",roughness:.95,side:Et,transparent:!0}),x=["flat","round"].map($=>{let ue=new yt({vertexColors:!0,roughness:.42,clearcoat:.3,clearcoatRoughness:.35});return new Fi().load(td[$].src,Xc(0,se=>{se.colorSpace=Lt,se.anisotropy=8,Object.assign(ue,{map:se,vertexColors:!1,roughness:.5,clearcoat:.22,clearcoatRoughness:.4,emissiveMap:se,emissiveIntensity:.3}),ue.color.set("#ffffff"),ue.emissive.set("#ffffff"),ue.needsUpdate=!0})),ue}),g=[],y=[-1,1].map($=>{let ue=new Ft,se=wm($),Pe=Gc(p);g.push(Pe);let Ve=new ze(se,Pe);Ve.morphTargetInfluences=[0];let et=new ze(se,f);et.morphTargetInfluences=[0],et.scale.setScalar(.965);let Qe=new ze(Em($,.955),_);ue.add(Ve,et,Qe);let He=new ze(new Qt(1,72,54,$>0?Math.PI/2:-Math.PI/2,Math.PI),m),Ge=new ze(Cm($),v),rt=new ze(Am($),x);return d.add(ue,He,Ge,rt),{side:$,half:ue,skin:Ve,flesh:et,cut:Qe,pulp:He,parch:Ge,bean:rt}}),b=new en({color:"#5d5230",roughness:.8}),S=new ze(new Jn(.05,.085,.2,16),b);S.position.y=Xt+.06,S.rotation.z=-.15,d.add(S);let R=new ze(new gn(.17,.05,14,40),new en({color:"#3b1d12",roughness:.85}));R.position.y=-Xt+.115,R.rotation.x=Math.PI/2,R.scale.set(1,1,.7),d.add(R);let O=new ze(new pi(.12,24),new en({color:"#2a120b",roughness:.9,side:Et}));O.position.y=-Xt+.12,O.rotation.x=Math.PI/2,d.add(O);let L=-1.45,N=1,j=zm(),W=new Yn({map:j,transparent:!0,depthWrite:!1}),H=($,ue)=>{let se=new ze(new Ln(1,1),W.clone());return se.rotation.x=-Math.PI/2,se.scale.set($,ue,1),se},z=new yt({color:"#ffffff",roughness:.03,transmission:1,thickness:.3,ior:1.5,clearcoat:1,clearcoatRoughness:.02,attenuationColor:new Te("#e4ebe2"),attenuationDistance:2.5,transparent:!0,side:Et,depthWrite:!1}),Z=new Ft;u.add(Z);let Q=z.clone(),re=new ze(Gs(Vm,0,128),Q),ae=new gn(.14,.034,12,32,Math.PI),Me=[-1,1].map($=>{let ue=new ze(ae,Q);return ue.position.set($*1.07,.8,0),ue.rotation.z=-$*Math.PI/2,ue}),Ae=new Zt(new C(0,-1,0),0),ie=Pm(new yt({color:"#ffffff",roughness:.05,transmission:1,thickness:.16,ior:1.33,attenuationColor:new Te("#8f3612"),attenuationDistance:.14,clearcoat:1,clippingPlanes:[Ae]})),ce=ie.userData.infuse,Se=new ze(Gs([[0,.055],[.97,.055],[1.02,.1],[1.02,1]],.01,128),ie),be=new ze(new pi(1.012,96),new en({color:"#dfe6e4",roughness:.55,metalness:0,transparent:!0,opacity:0,depthWrite:!1,envMapIntensity:.08})),xe=new Te("#dfe6e4"),de=new Te("#4e1806");be.rotation.x=-Math.PI/2;let Ue=new ze(new gn(1.016,.007,8,128),new yt({color:"#9a5a34",roughness:.4,transparent:!0,opacity:0,depthWrite:!1}));Ue.rotation.x=Math.PI/2;let I=H(3,2.1);I.position.y=.004,Z.add(I,Se,be,Ue,re,...Me),Se.renderOrder=be.renderOrder=Ue.renderOrder=1;let w=[11,23,37,41].map(Hm),V=jo(31),k=Array.from({length:12},($,ue)=>{let se=new _s(new Cr({map:w[ue%4],color:"#ffffff",transparent:!0,depthWrite:!1,opacity:0}));return se.userData={seed:ue/12+V()*.05,x:(V()-.5)*1.3,z:(V()-.5)*.7,drift:(V()-.5)*.4},Z.add(se),se}),M=new ze(new gn(1.012,.008,8,128),new yt({color:"#ffffff",roughness:.1,clearcoat:1,transparent:!0,opacity:.55,depthWrite:!1}));M.rotation.x=Math.PI/2,Z.add(M),M.renderOrder=1;let T=new yt({color:"#ffffff",roughness:.1,clearcoat:1,transparent:!0,opacity:0,depthWrite:!1}),A=[0,1].map(()=>{let $=new ze(new gn(1,.009,8,72),T.clone());return $.rotation.x=Math.PI/2,$.visible=!1,u.add($),$}),P=Gs(Xo,0,128),B=Gs(Um(),.02,96),X=Fm(),U=Bm(),D=new yt({color:"#dcdcd6",metalness:1,roughness:.3,transparent:!0}),J=["original","cozy"].map(($,ue)=>{let se=km[$],Pe=new Ft;u.add(Pe);let Ve=new Zt(new C(0,-1,0),0),et=new yt({color:"#ffffff",roughness:.05,transmission:1,thickness:.62,ior:1.45,attenuationColor:new Te(se.syrup),attenuationDistance:.3,clearcoat:1,clippingPlanes:[Ve]}),Qe=new ze(B,et),He=new ze(new pi(1,72),new yt({color:se.surface,roughness:.05,clearcoat:1}));He.rotation.x=-Math.PI/2;let Ge=new ze(new gn(1,.006,8,96),new yt({color:"#a85a34",roughness:.15,transparent:!0,opacity:.35}));Ge.rotation.x=Math.PI/2;let rt=new ze(X,D.clone()),pt=Om(se.label),Oe=new en({map:pt,emissiveMap:pt,emissive:"#ffffff",emissiveIntensity:.1,roughness:.6,side:Et}),Be=new ze(U,Oe);Be.position.y=Dm;let St=H(1.3,1);return St.position.y=.004,Pe.add(St,Qe,He,Ge,new ze(P,z),Be,rt),Qe.renderOrder=He.renderOrder=Ge.renderOrder=1,Pe.scale.setScalar(N),{id:$,k:se,g:Pe,fill:Ve,syrup:Qe,surface:He,meniscus:Ge,cap:rt,label:Be,labelMat:Oe,tex:pt,shade:St,x:ue?.55:-.55}}),q=new Jn(.04,.03,1,28,1,!0);q.translate(0,-.5,0);let te=new yt({color:"#a8481f",roughness:.03,clearcoat:1,clearcoatRoughness:.02,transmission:.5,thickness:.1,ior:1.45,attenuationColor:new Te("#7a260a"),attenuationDistance:.14,emissive:new Te("#3a1004")}),le={value:99};te.transparent=!0,te.onBeforeCompile=$=>{$.uniforms.uFadeTop=le,$.fragmentShader=`uniform float uFadeTop;
`+$.fragmentShader.replace("#include <alphamap_fragment>",`#include <alphamap_fragment>
	diffuseColor.a *= smoothstep( uFadeTop, uFadeTop - 1.1, vWorldPosition.y );`)},te.customProgramCacheKey=()=>"cascarup-stream-2";let ne=J.map(()=>{let $=new ze(q,te);return $.visible=!1,u.add($),$}),he=Hc(.9);he.scale.setScalar(.56),u.add(he);let ve=y.map(($,ue)=>{let se=new ze($.skin.geometry,Gc(p));return se.morphTargetInfluences=[1],se.material.userData.dry.value=1,se.material.roughness=.58,se.material.clearcoat=.16,se.material.clearcoatRoughness=.4,se.material.sheen=.4,se.material.sheenColor.set("#c07a5c"),se.scale.setScalar(.16),se.visible=!1,u.add(se),se.material.transparent=!0,{m:se,x:ue?-1.2:-2.02,z:ue?.9:.55,ry:ue?2.4:-.6}}),Ee=[{o:Hc(1.2),x:1.36,y:.04,z:.3,r:[0,Math.PI/2-.35,0],s:.5},{o:Hc(1.2),x:1.44,y:.105,z:.04,r:[0,Math.PI/2-.62,.05],s:.5},{o:Gm(),x:1.08,y:.045,z:.82,r:[.05,.4,-.04],s:.58}],_e=$=>{let ue=[];return $.traverse(se=>{se.material&&(se.material.transparent=!0,ue.push(se.material))}),ue};for(let $ of Ee)$.o.visible=!1,u.add($.o),$.mats=_e($.o);let Ce=H(1.5,.9);u.add(Ce);let Ne=new Ft,tt=Gc(p);g.push(tt);for(let $ of y){let ue=new ze($.skin.geometry,tt);ue.morphTargetInfluences=[0],Ne.add(ue)}let ge=new ze(S.geometry,b);ge.position.y=Xt+.06,ge.rotation.z=-.15,Ne.add(ge);let Le=R.clone();Ne.add(Le);let Ie=.15;Ne.scale.setScalar(Ie),u.add(Ne);let nt=H(.42,.42);u.add(nt);let at=H(1,1);u.add(at);let it=!1;t&&t.texture&&new Fi().load(t.texture,Xc(0,$=>{$.anisotropy=8;for(let ue of g)ue.userData.photo.value=$,ue.userData.usePhoto.value=1,ue.userData.glow.value=.72;it=!0,ge.visible=Le.visible=!1}));let F=y[1],Fe={haut:new _t,fleisch:new _t,pergament:new _t,bohne:new _t};F.half.add(Fe.haut),Fe.haut.position.set(.62,.7,.34),F.pulp.add(Fe.fleisch),Fe.fleisch.position.set(.58,-.5,.4),F.parch.add(Fe.pergament),Fe.pergament.position.set(.3,.6,.3),F.bean.add(Fe.bohne),Fe.bohne.position.set(.28,-.42,.22);let ft=1,Ye=1,ct=!0,Mt=0,Tt=0,ei=performance.now(),zn=!0,sn=0,qi=null,Yi=null,jt=new C;function Zi(){if(Yi=null,!qi||!n)return;let[$,ue,se,Pe]=n,Ve=qi,et=Math.max(10,Math.min((Ve.r-Ve.l)/(se-$),(Ve.b-Ve.t)/(Pe-ue),Math.min(ft,Ye)*.2)),Qe=(Ve.l+Ve.r)/2-($+se)/2*et,He=(Ve.t+Ve.b)/2-(ue+Pe)/2*et,Ge=Ye/2/(Math.tan(l.fov*Math.PI/360)*12.6*et);Yi={ox:(ft/2-Qe)/ft,oy:(Ye/2-He)/Ye,zoom:Ge}}function Hs($,ue){ft=$,Ye=ue,s.setSize($,ue,!1),l.aspect=$/ue,ct=$/ue>1.05,l.fov=ct?24:$e(33,27,qe(.56,.8,$/ue)),l.updateProjectionMatrix(),Fe.fleisch.position.set(.58,ct?-.5:.55,.4),Fe.pergament.position.set(.3,ct?.6:.45,.3),Zi()}function Ws($,ue,se,Pe,Ve=0){l.clearViewOffset(),l.setViewOffset(ft,Ye,ft*$,Ye*ue,ft,Ye),l.position.set(0,Pe+12.6*se*Math.tan(Ve),12.6*se),l.rotation.set(-Ve,0,0),l.updateProjectionMatrix()}let Ji=L+ed*N,Ki=4.6,ti=.8,Xs=.58,js=.1,Yo={1:.655,"-1":.675},Zo=[{up:[.774,.804],pour:[.803,.812,.836,.846],fill:[.805,.843],cap:[.865,.9]},{up:[.776,.806],pour:[.82,.829,.852,.862],fill:[.822,.86],cap:[.872,.905]}],$s=new C,E={skin:1.9,pulp:1.3,parch:.8,bean:.3};function Y($,ue){sn+=ue;let se=_n(.1,.24,$),Pe=qe(.08,.2,$)*(1-qe(.33,.41,$)),Ve=qe(.3,.43,$),et=qe(.31,.42,$),Qe=_n(.34,.45,$),He=qe(.47,.58,$),Ge=_n(.48,.6,$),rt=qe(.575,.65,$),pt=_n(.575,.655,$),Oe=_n(.6,.65,$),Be=qe(.68,.76,$),St=qe(.715,.775,$),vi=_n(.77,.79,$),xn=qe(.772,.82,$),$t=_n(.885,.925,$),Pt=_n(.885,.95,$),yn=_n(.89,.955,$),It=qe(.875,.95,$),jr=rt*(1-It),ni=$e($e($e(0,-.84,rt),.02,xn),-.06,It),qs=.2*rt*(1-xn),Qi=1-qe(.04,.2,$),$r,Ze,qr;ct?($r=-.2*(1-Pe)-.03*It,Ze=0,qr=1-.04*It):($r=0,Ze=$e($e(-.21,-.03,Pe),-.07,jr)-.17*xn*(1-It),qr=1+.3*Pe-.04*rt*(1-xn)+.25*xn*(1-It)+.38*It);let zt=Yi||(ct?{ox:-.22,oy:.08,zoom:1.32}:{ox:0,oy:.26,zoom:2.02});Ws($e($r,zt.ox,Qi),$e(Ze,zt.oy,Qi),$e(qr,zt.zoom,Qi),ni,qs),le.value=ct?99:Ji+1.45,u.rotation.y=-.35*se*(1-Qe),u.rotation.x=$e(0,.13,se)*(1-Qe);let an=ct?0:.85*qe(.1,.2,$)*(1-qe(.38,.46,$)),Ys=it?0:(1-qe(.06,.14,$))*Math.sin(sn*.35)*.55;d.rotation.set(0,Ys,an);let _i=.14*qe(.006,.05,$)*(1-qe(.12,.24,$));d.position.y=Math.sin(sn*1.1)*.05*(1-Oe)*qe(.02,.1,$)+_i,Z.visible=pt>.001&&vi<.999,Z.position.set(0,$e($e(-7.5,L,pt),L+1.4,vi),0),Z.rotation.z=.12*vi;let Mn=1-qe(.77,.788,$),mt=Mn<.999;ie.transparent!==mt&&(ie.transparent=mt,ie.needsUpdate=!0),Q.opacity=Mn,ie.opacity=Mn;let tn=$e(ti,Xs,St),xi=Z.position.y+tn;Ae.constant=xi,be.position.y=M.position.y=tn,Ue.position.y=ti,Ue.material.opacity=.5*St,ce.uBloom.value=Be,ce.uTime.value=sn,ce.uTop.value=xi;let Wt=qe(.7,.76,$);ie.thickness=$e(.16,.9,Wt),ie.ior=$e(1.33,1.45,Wt),ie.attenuationDistance=$e(.14,$e(.75,.48,St),Wt);let kt=qe(.7,.77,$);be.material.color.copy(xe).lerp(de,kt),be.material.opacity=$e(.14,.96,kt)*Mn,M.material.opacity=$e(.55,.2,kt)*Mn,Ue.material.opacity*=Mn;let Gt=qe(.63,.69,$)*(1-qe(.772,.79,$))*(.5+.5*St);for(let pe of k){let wt=pe.userData,vt=(sn*.16+wt.seed)%1;pe.visible=Gt>.002,pe.position.set(wt.x*(1-vt*.3)+Math.sin(vt*3+wt.seed*12)*.1+wt.drift*vt,tn+.5+vt*(ct?1.3:.75),wt.z),pe.scale.set(.42+vt*.3,.9+vt*.6,1),pe.material.opacity=Gt*.5*Math.sin(Math.PI*vt)}for(let pe of y){let wt=pe.side*se;pe.half.position.x=$e(wt*E.skin,pe.side*.42,Qe),pe.half.rotation.y=pe.side*se*.35*(1-Qe),pe.skin.morphTargetInfluences[0]=pe.flesh.morphTargetInfluences[0]=Ge;let vt=pe.skin.material;vt.userData.dry.value=He,vt.roughness=$e(.34,.58,He),vt.clearcoat=$e($e(.35,.9,qe(.1,.22,$)),.16,He),vt.clearcoatRoughness=$e(.14,.4,He),vt.sheen=$e(.25,.4,He),vt.sheenColor.set(He>.5?"#c07a5c":"#ff9b8a");let tr=qe(0,.7,He);pe.flesh.material.opacity=pe.cut.material.opacity=1-tr,pe.flesh.visible=pe.cut.visible=se>.002&&tr<.99;let Sn=1-et;pe.pulp.position.x=wt*E.pulp*(1-Qe)*Sn,pe.pulp.scale.set(Xr*.8,Xt*.86,Vs*.8).multiplyScalar($e(.55,1,Sn)),pe.pulp.material.opacity=Sn,pe.pulp.visible=et<.995&&se>.002,pe.parch.position.x=wt*E.parch*(1-Qe)*Sn,pe.parch.scale.setScalar($e(.55,1,Sn)),pe.parch.material.opacity=Sn,pe.parch.visible=et<.995&&se>.002;let nn=Ve,Mi=nn*nn,nr=Mi*(ct?6+pe.side*.5:7.5+pe.side*.4),Zs=Mi*(ct?4.2:-.6)+Math.sin(nn*Math.PI)*.5+(pe.side>0?.1:-.1)*nn,Js=Math.cos(-an),Ks=Math.sin(-an);if(pe.bean.position.set(wt*E.bean+nr*Js-Zs*Ks,nr*Ks+Zs*Js,-Mi*2.2),pe.bean.rotation.set(nn*2.6*pe.side,nn*3.4,se*pe.side*.2+nn*1.5),pe.bean.visible=se>.002&&nn<.999,Oe>0){let ir=Yo[pe.side],Zr=gi(($-ir)/.022),on=qe(ir+.022,ir+.09,$),Jr=Math.sin(on*Math.PI*1.6)*.08*(1-on),Si=$e(pe.side*.42,pe.side*.3,Oe),bn=$e(0,L+1.62,Oe),bi=0;Zr>0&&(bn=$e(bn,L+ti-.04,Zr*Zr)),on>0&&(Si=$e(Si,pe.side*.48,on)+Jr,bn=$e(bn,L+js+.12,on),bi=$e(0,pe.side*.16,on)),pe.half.position.set(Si,bn-d.position.y,bi),pe.half.rotation.set(on*1.2*pe.side,Oe*.35*pe.side+on*.8,pe.side*(Oe*.3+on*1.7)),pe.half.scale.setScalar($e(1,.32,Oe)*Math.max(.001,1-qe(.72,.755,$))),pe.half.getWorldPosition($s),(pe.side>0?ce.uSrc1:ce.uSrc0).value.copy($s);let Kr=A[pe.side>0?1:0],Qs=gi(($-ir-.022)/.05);Kr.visible=Qs>0&&Qs<1,Kr.visible&&(Kr.position.set(Si,xi+.004,0),Kr.scale.setScalar($e(.06,.95,Math.sqrt(Qs))),Kr.material.opacity=.7*(1-Qs))}else pe.half.position.y=0,pe.half.rotation.x=pe.half.rotation.z=0,pe.half.scale.setScalar(1);pe.half.visible=$<.755}S.visible=R.visible=O.visible=!it&&se<.02,J.forEach((pe,wt)=>{let vt=Zo[wt],tr=_n(vt.up[0],vt.up[1],$);pe.g.visible=tr>.001,pe.g.position.set(pe.x,$e(-7.5,L,tr),0),pe.g.rotation.y=Math.sin(sn*.45+wt*1.7)*.08*qe(.9,1,$);let Sn=qe(vt.fill[0],vt.fill[1],$),nn=$e(.05,2.585,Sn),Mi=pe.g.position.y+nn*N;pe.fill.constant=Mi,pe.syrup.visible=Sn>.002,pe.surface.visible=pe.meniscus.visible=Sn>.01,pe.surface.position.y=pe.meniscus.position.y=nn;let nr=Nm(nn,.02);pe.surface.scale.setScalar(nr),pe.meniscus.scale.set(nr,nr,1);let[Zs,Js,Ks,ir]=vt.pour,Zr=qe(Zs,Js,$),on=qe(Ks,ir,$),Jr=$e(Ki,Mi,on),Si=$e(Ki,Mi,Zr),bn=ne[wt];bn.visible=Jr-Si>.01,bn.visible&&(bn.position.set(pe.x+Math.sin(sn*2.1+wt)*.004,Jr,0),bn.scale.set(1,Jr-Si,1));let bi=_n(vt.cap[0],vt.cap[1],$);pe.cap.visible=bi>.001,pe.cap.position.y=$e(ed+(ct?1.6:.45),Im,bi),pe.cap.rotation.y=(1-bi)*4,pe.cap.material.opacity=qe(0,.35,bi),pe.label.scale.set(1,Math.max(.001,$t),1),pe.label.visible=$t>.001,pe.tex.repeat.set(1,Math.max(.001,$t)),pe.tex.offset.set(0,(1-$t)/2),pe.shade.material.opacity=.8*tr});let yi=J[1],Yr=qe(.804,.82,$),er=.21*qe(.814,.824,$),ld=yi.g.position.y+.04*N;he.visible=Yr>.001&&yi.g.visible,he.position.set(yi.x-.02+er*.6,$e(Ki,ld+.25*Math.cos(er),Yr*Yr),0),he.rotation.set(Math.PI/2,0,-er),ve.forEach((pe,wt)=>{pe.m.visible=Pt>.001,pe.m.position.set(pe.x,L+.104,pe.z),pe.m.rotation.set(Math.PI/2*(wt?1:-1)*.92,pe.ry,0),pe.m.material.opacity=Pt});for(let pe of Ee){pe.o.visible=Pt>.001,pe.o.position.set(pe.x,L+pe.y,pe.z),pe.o.rotation.set(pe.r[0],pe.r[1],pe.r[2]),pe.o.scale.setScalar(pe.s);for(let wt of pe.mats)wt.opacity=Pt}Ce.visible=Pt>.001,Ce.position.set(1.34,L+.003,.45),Ce.material.opacity=.55*Pt,Ne.visible=yn>.001,Ne.position.set(-1.6,L+Ie*Xt+.025,.05),Ne.rotation.set(0,0,-.08),tt.transparent=!0,tt.opacity=yn,nt.visible=Ne.visible,nt.position.set(-1.6,L+.003,.05),nt.material.opacity=.7*yn,at.position.set(0,-Xt-.55,0),at.scale.set(2.5*(1+se*.6*(1-Qe)),1.7,1),at.material.opacity=.6*(1-se*.35*(1-Qe))*(1-qe(.59,.65,$))*qe(.03,.1,$),at.visible=$<.65}function ee($,ue,se,Pe){return jt.set(ue,se,Pe),$.localToWorld(jt),jt.project(l),{x:(jt.x*.5+.5)*ft,y:(-jt.y*.5+.5)*Ye}}function oe(){let $={};for(let[ue,se]of Object.entries(Fe))$[ue]=ee(se,0,0,0);return $}function K(){d.updateMatrixWorld();let $=ee(d,0,0,0),ue=ee(d,-Xr,0,0),se=ee(d,0,Xt,0);return{x:$.x,y:$.y,rx:$.x-ue.x,ry:$.y-se.y}}let me=0,we="",Re=0;function De($){if(!zn)return;me++;let ue=Math.min(.05,($-ei)/1e3);ei=$;let se=(Mt-Tt)*(1-Math.pow(i?.02:9e-4,ue));i&&(se=Math.max(-.3*ue,Math.min(.3*ue,se))),Tt+=se,Math.abs(Mt-Re)>.25&&(Tt=Mt),Re=Mt,Math.abs(Mt-Tt)<1e-4&&(Tt=Mt);try{Y(Tt,ue),s.render(a,l),e?.(Tt,oe,K)}catch(Pe){we=String(Pe&&Pe.stack||Pe).slice(0,300)}requestAnimationFrame(De)}return{resize:Hs,set background($){a.background.set($)},set progress($){Mt=gi($)},set frame($){qi=$,Zi(),zn||(Y(Tt,0),s.render(a,l))},get progress(){return Tt},jump($){Mt=Tt=gi($),Y(Tt,0),s.render(a,l),e?.(Tt,oe,K)},start(){zn||(zn=!0,ei=performance.now(),requestAnimationFrame(De))},stop(){zn=!1},begin(){ei=performance.now(),requestAnimationFrame(De)},async warm(){let $=performance.now();for(;Wc.size&&performance.now()-$<6e3;)await new Promise(se=>setTimeout(se,60));let ue=Tt;for(let se of[.12,.3,.45,.58,.66,.74,.79,.83,.88,.95,1]){if(!document.documentElement.classList.contains("is-loading"))break;Y(se,0),s.render(a,l),await new Promise(Pe=>requestAnimationFrame(Pe))}Y(ue,0),s.render(a,l)},labels:oe,fruitBox:K,get photoReady(){return it},renderer:s,state:()=>({frames:me,running:zn,target:+Mt.toFixed(3),progress:+Tt.toFixed(3),lastError:we})}}var Wm="http://www.w3.org/2000/svg",Ke={ink:"58, 33, 22",glow:["#F7DDAE","#F1C28C","#E9AA79"],sun:["#F8E5BC","#F3D09A","#EDB57B","#E49862","#D87A47"],cloudTop:"#F4E4C8",cloudLow:"#E8AE86",ridge:["#E2AE86","#D49670","#BE8059","#9A7448","#77653B","#55492B"],cut:["#EDC09C","#E1AA84","#CF9670","#AE8A5D","#8B7A4E","#6A5C3A"],row:["#8A6C43","#665A34","#4B4127"],tree:["#A57250","#7E623E","#5C4E30"],berry:"#B3262A",berryDark:"#8E2B1E",roof:"#B4592A",wall:"#E9C9A0",window:"#F8D88E",door:"#5A3A26",soil:"#3A2116",soilCut:"#9C4B23",leaf:["#2F3B24","#3B4A2B","#485A31","#34432A"],vein:"#E0A86B",twig:"#3A2116",close:["#2E2617","#2A2215"],mist:"#F6E3C8",bird:"#3A2116"};function jc(r){let e=r>>>0;return()=>(e=Math.imul(e,1664525)+1013904223>>>0)/4294967296}var G=r=>(Math.round(r*10)/10).toString();function Bn(r,e=!1){let t=r.length;if(t<2)return"";let n=`M${G(r[0][0])} ${G(r[0][1])}`,i=e?t:t-1;for(let s=0;s<i;s++){let a=r[e?(s-1+t)%t:Math.max(0,s-1)],o=r[s],l=r[(s+1)%t],c=r[e?(s+2)%t:Math.min(t-1,s+2)];n+=`C${G(o[0]+(l[0]-a[0])/6)} ${G(o[1]+(l[1]-a[1])/6)} ${G(l[0]-(c[0]-o[0])/6)} ${G(l[1]-(c[1]-o[1])/6)} ${G(l[0])} ${G(l[1])}`}return e?`${n}Z`:n}var Qn=(r,e,t)=>`M${G(r+t)} ${G(e)}a${G(t)} ${G(t)} 0 1 0 ${G(-2*t)} 0a${G(t)} ${G(t)} 0 1 0 ${G(2*t)} 0Z`,$o=(r,e,t,n)=>`M${G(r+t)} ${G(e)}a${G(t)} ${G(n)} 0 1 0 ${G(-2*t)} 0a${G(t)} ${G(n)} 0 1 0 ${G(2*t)} 0Z`;function $c(r,e,t,n,i,s){let o=[],l=[],c=.025+s()*.03,h=s()*6;for(let x=0;x<=28;x++){let g=x/28,y=Math.sin(Math.PI*Math.pow(g,.78))*(1-.18*g);g>.78&&(y*=1-Math.pow((g-.78)/.22,1.3)*.6),y*=n*(1+c*Math.sin(g*20+h)),o.push([g*t,-y]),l.push([g*t,y*(.92+.08*Math.sin(g*9+h))])}let u=Math.cos(i),d=Math.sin(i),p=([x,g])=>[r+x*u-g*d,e+x*d+g*u],f=Bn([...o,...l.reverse()].map(p),!0),_=(s()-.5)*n*.25,m=x=>[x*t,Math.sin(Math.PI*x)*_],v=Bn([.04,.3,.55,.8,.93].map(x=>p(m(x))));for(let x=1;x<=6;x++){let g=.1+x*.115,[y,b]=m(g),S=Math.sin(Math.PI*Math.pow(g,.78))*n*(1-.18*g)*.78;for(let R of[-1,1])v+=Bn([[y,b],[y+S*.45,b+R*S*.55],[y+S*.95,b+R*S*.86]].map(p))}return{shape:f,veins:v}}var $i=(r,e)=>{for(let t=1;t<r.length;t++)if(r[t][0]>=e){let[n,i]=r[t-1],[s,a]=r[t];return i+(a-i)*(e-n)/(s-n)}return r[r.length-1][1]},qo=(r,e)=>r.map(([t,n])=>[t,n+e+Math.sin(t*.013+e)*Math.abs(e)*.08]);function rd(r,e,t,n,i,s,a,o){let l="",c="";for(let h=t;h<n;h+=i*(1.55+a()*.35)){let u=$i(r,h)+e+Math.sin(h*.013+e)*Math.abs(e)*.08,d=i*(.85+a()*.3),p=s*(.8+a()*.4);l+=`M${G(h-d)} ${G(u)}A${G(d)} ${G(p)} 0 0 1 ${G(h+d)} ${G(u)}Z`,o&&a()<.45&&(c+=Qn(h+(a()-.5)*d,u-p*(.3+a()*.4),Math.max(.8,i*.13)))}return{d:l,b:c}}function Xm(r,e,t){let n=`M${G(r-t*.09)} ${G(e)}L${G(r-t*.04)} ${G(e-t*2.5)}L${G(r+t*.04)} ${G(e-t*2.5)}L${G(r+t*.09)} ${G(e)}Z`,i=$o(r,e-t*2.65,t*1.35,t*.42)+$o(r-t*.7,e-t*2.4,t*.78,t*.32)+$o(r+t*.72,e-t*2.45,t*.85,t*.34)+$o(r+t*.1,e-t*2.95,t*.7,t*.3);return n+i}function jm(r,e,t){let n=t*1.7,i=t,s=`M${G(r-n/2)} ${G(e)}V${G(e-i)}H${G(r+n/2)}V${G(e)}Z`,a=`M${G(r-n/2-t*.2)} ${G(e-i+t*.04)}L${G(r)} ${G(e-i-t*.62)}L${G(r+n/2+t*.2)} ${G(e-i+t*.04)}Z`,o=`M${G(r-t*.52)} ${G(e-i*.7)}h${G(t*.34)}v${G(t*.3)}h${G(-t*.34)}Z`,l=`M${G(r+t*.12)} ${G(e)}v${G(-t*.55)}h${G(t*.3)}v${G(t*.55)}Z`,c="",h="";for(let u=0;u<2;u++){let d=r+n/2+t*(.55+u*1.55),p=e-t*.36,f=t*1.3;c+=`M${G(d)} ${G(p)}h${G(f)}v${G(t*.1)}h${G(-f)}Z`;for(let _ of[.08,.92])c+=`M${G(d+f*_-t*.03)} ${G(p+t*.1)}h${G(t*.06)}V${G(e)}h${G(-t*.06)}Z`;for(let _=0;_<9;_++)h+=Qn(d+f*(.08+_*.105),p-t*.045,t*.055)}return{wall:s,roof:a,win:o,door:l,beds:c,cherries:h,glow:[r-t*.35,e-i*.55,t*.8]}}function sd(r,e,t,n){let i=t*.42,s=[];for(let c=0;c<=20;c++){let h=-1+2*c/20;s.push([r+h*t/2,e-i*Math.pow(Math.max(0,1-h*h),.7)-(c%2?i*.05:0)*(1-Math.abs(h))])}let a=`${Bn(s)}L${G(r+t/2)} ${G(e)}L${G(r-t/2)} ${G(e)}Z`,o=["#B3262A","#C9452B","#8E2B1E","#A8321F","#6E2A1A"],l=o.map(()=>"");for(let c=0;c<46;c++){let h=n()*2-1,u=n()*Math.pow(Math.max(0,1-h*h),.7)*.92,d=Math.floor(n()*o.length);l[d]+=Qn(r+h*t*.46,e-i*u-t*.02,t*(.035+n()*.018))}return{mound:a,cherries:l.map((c,h)=>`<path fill="${o[h]}" d="${c}"/>`).join("")}}function $m(r,e){let t=r*2.6,n=r*2.3,i=t/2,s=n,a="",o="",l="";return[[11,.55,.95,1.05,.32],[7,.95,.78,.7,.3]].forEach(([h,u,d,p,f],_)=>{for(let m=0;m<h;m++){let v=-Math.PI/2+(m-(h-1)/2)*(d*2.6/h)+(e()-.5)*.2,x=i+Math.cos(v)*r*.18,g=s-r*u*.45+Math.sin(v)*r*.12,y=r*p*(.7+e()*.35);o+=`M${G(i)} ${G(s-r*u*.3)}L${G(x)} ${G(g)}`,a+=`<path fill="${Ke.leaf[(m+_)%4]}" d="${$c(x,g,y,y*f,v+(e()-.5)*.25,e).shape}"/>`,(m+_)%3===1&&(l+=Qn(x+Math.cos(v)*r*.2,g+Math.sin(v)*r*.2+r*.06,r*.06)+Qn(x+Math.cos(v)*r*.26+r*.05,g+Math.sin(v)*r*.2+r*.13,r*.055))}}),o=`M${G(i)} ${G(s)}L${G(i)} ${G(s-r*.5)}`+o,{w:t,h:n,svg:`<path fill="none" stroke="${Ke.twig}" stroke-width="${G(r*.06)}" stroke-linecap="round" d="${o}"/>${a}<path fill="${Ke.berry}" d="${l}"/>`}}function qm(r,e){let t=r*1.6,n=r*1.4,i="";for(let s=0;s<7;s++){let a=t*(.2+s*.1),o=(e()-.5)*r*.9,l=n*(.15+e()*.4),c=r*.045;i+=`M${G(a-c)} ${G(n)}Q${G(a+o*.3)} ${G((n+l)/2)} ${G(a+o)} ${G(l)}Q${G(a+o*.3+c)} ${G((n+l)/2)} ${G(a+c)} ${G(n)}Z`}return{w:t,h:n,svg:`<path fill="${Ke.leaf[1]}" d="${i}"/>`}}function Ym(r,e,t){let n=t*.16,i=n/2;return`M${G(r-t/2+i)} ${G(e)}H${G(r+t/2-i)}A${G(i)} ${G(i)} 0 0 0 ${G(r+t/2-i)} ${G(e-n)}H${G(r-t/2+i)}A${G(i)} ${G(i)} 0 0 0 ${G(r-t/2+i)} ${G(e)}Z`+Qn(r-t*.18,e-n-t*.03,t*.13)+Qn(r+t*.06,e-n-t*.07,t*.17)+Qn(r+t*.27,e-n-t*.01,t*.1)}var ad=.74,Zm=[{id:"sky",depth:.06,fly:[0,-.05,.12],flyNarrow:[0,-.02,.1]},{id:"far",depth:.16,fly:[0,.16,-.03],flyNarrow:[0,.04,.16]},{id:"mid",depth:.3,fly:[0,.28,-.01],flyNarrow:[0,.08,.3]},{id:"near",depth:.46,fly:[0,.42,.02],flyNarrow:[0,.12,.45]},{id:"soil",depth:.62,fly:[0,.6,.04],flyNarrow:[0,.16,.6]},{id:"branch",depth:.82,fly:[.55,-.06,.3],flyNarrow:[.5,-.08,.3]},{id:"close",depth:1,fly:[.8,.15,.7],flyNarrow:[.8,.15,.7]}];function od(r,e=null){r.innerHTML="";let t=Zm.map((g,y)=>{let b=document.createElement("div");b.className=`dio__layer dio__layer--${g.id}`,b.style.setProperty("--i",y);let S=document.createElement("div");S.className="dio__rise";let R=document.createElementNS(Wm,"svg");R.setAttribute("aria-hidden","true");let O=document.createElement("div");O.className="dio__fx";let L=document.createElement("div");return L.className="dio__fx",S.append(L,R,O),b.append(S),r.append(b),{...g,wrap:b,svg:R,fx:O,back:L}}),n=Object.fromEntries(t.map(g=>[g.id,g])),i="",s=0,a=0,o=0,l=0,c=[],h=[],u=null,d=!1,p=(g,y,b,S,R,O,L,N="",j=!1)=>{let W=document.createElement("div");return W.className=y,W.style.cssText=`left:${G(b)}px;top:${G(S)}px;width:${G(R)}px;height:${G(O)}px;${N}`,W.innerHTML=L?`<svg viewBox="0 0 ${G(R)} ${G(O)}" width="${G(R)}" height="${G(O)}" aria-hidden="true">${L}</svg>`:"",(j?g.back:g.fx).append(W),W};function f(g,y,b,S,R){let O=[g.x,g.y,g.rx,y,b,S,R&&R.top].map(T=>Math.round(+T||0)).join(",");if(O===i||!y||!b||!g.rx)return;i=O;for(let T of t)T.fx.innerHTML="",T.back.innerHTML="";c=[];let{x:L,y:N}=g,j=g.rx,W=g.ry||g.rx*1.27,H=j/ad,z=W/ad,Z=jc(1712),Q=(T,A,P,B)=>`<filter id="${T}" x="-10%" y="-30%" width="120%" height="170%"><feDropShadow dx="0" dy="${A}" stdDeviation="${P}" flood-color="rgb(${Ke.ink})" flood-opacity="${B}"/></filter>`,re={},ae=b+20,Me=R?R.bottom+34:b*.7,Ae=(T,A)=>S||!R||T>R.right+40||A>Me+8,ie=T=>`<clipPath id="${T}"><path d="M${G(R?R.right+40:0)} -60H${G(y+60)}V${G(b+60)}H-60V${G(Me+8)}H${G(R?R.right+40:0)}Z"/></clipPath>`,ce=L+H*(S?.1:.28),Se=N+z*(S?.12:.18),be=H*(S?2.2:2.6);{let T=Math.max(y,b)*(S?.75:.62);re.sky=`<defs>${Q("dsky",3,6,.16)}<radialGradient id="glow" cx="${G(ce)}" cy="${G(Se)}" r="${G(T)}" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${Ke.glow[0]}"/><stop offset=".22" stop-color="${Ke.glow[1]}" stop-opacity=".9"/><stop offset=".48" stop-color="${Ke.glow[2]}" stop-opacity=".42"/><stop offset="1" stop-color="${Ke.glow[2]}" stop-opacity="0"/></radialGradient></defs><radialGradient id="sund" cx=".42" cy=".38" r=".7"><stop offset="0" stop-color="#FCEFD2"/><stop offset=".45" stop-color="#F6D7A2"/><stop offset="1" stop-color="#ECB077"/></radialGradient><linearGradient id="sky" x1="0" y1="0" x2="0" y2="${G(N+z*1.3)}" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#E6D3B7" stop-opacity="0"/><stop offset=".55" stop-color="#EDCDA6" stop-opacity=".5"/><stop offset="1" stop-color="#EBBE8F" stop-opacity=".75"/></linearGradient><rect width="${y}" height="${b}" fill="url(#sky)"/><rect width="${y}" height="${b}" fill="url(#glow)"/><path filter="url(#dsky)" fill="url(#sund)" d="${Qn(ce,Se,be)}"/>`;let A=be*1.75;p(n.sky,"dio__halo",ce-A,Se-A,A*2,A*2,`<defs><radialGradient id="halo"><stop offset=".5" stop-color="#FBE3B8" stop-opacity=".55"/><stop offset="1" stop-color="#FBE3B8" stop-opacity="0"/></radialGradient></defs><circle cx="${G(A)}" cy="${G(A)}" r="${G(A)}" fill="url(#halo)"/><circle cx="${G(A)}" cy="${G(A)}" r="${G(be*1.13)}" fill="none" stroke="#FBE8C4" stroke-opacity=".75" stroke-width="${G(Math.max(1.5,be*.022))}"/><circle cx="${G(A)}" cy="${G(A)}" r="${G(be*1.3)}" fill="none" stroke="#FBE8C4" stroke-opacity=".4" stroke-width="${G(Math.max(1,be*.014))}"/>`,"",!0),(S?[[y*.2,N-z*1.05,H*1.7],[y*.82,N-z*1.5,H*1.3]]:[[L-H*3.1,N-z*1.2,H*2],[L+H*2.75,Math.max(N-z*1.4,150),H*1.35],[L-H*1.2,Math.max(N-z*2.1,130),H*1.1]]).forEach(([U,D,J],q)=>{let te=J*.5,le=`cg${q}`;p(n.sky,"dio__cloud",U-J*.6,D-te,J*1.2,te+12,`<defs><linearGradient id="${le}" x1="0" y1="0" x2="0" y2="1"><stop offset=".35" stop-color="${Ke.cloudTop}"/><stop offset="1" stop-color="${Ke.cloudLow}"/></linearGradient>${Q(`${le}s`,3,4,.14)}</defs><path filter="url(#${le}s)" fill="url(#${le})" d="${Ym(J*.6,te,J)}"/>`,`--drift:${G((q%2?-1:1)*H*.5)}px;--dur:${34+q*9}s;--delay:${-q*7}s`)});let B=S?3:5,X=Math.max(S?96:160,N-z*1.9);for(let U=0;U<B;U++){let D=H*(S?.26:.22)*(1-U*.06);p(n.sky,"dio__bird",y*1.04,X+U*H*.22+U%2*H*.12,D*2,D,`<path class="dio__wing" fill="none" stroke="${Ke.bird}" stroke-width="${G(Math.max(1.2,D*.12))}" stroke-linecap="round" stroke-linejoin="round" d="M${G(D*.05)} ${G(D*.55)}Q${G(D*.55)} ${G(D*.05)} ${G(D)} ${G(D*.62)}Q${G(D*1.45)} ${G(D*.05)} ${G(D*1.95)} ${G(D*.55)}"/>`,`--fly:${G(-y*1.25)}px;--rise:${G(-z*(.3+U*.05))}px;--dur:${26+U*1.6}s;--delay:${G(U*.9+2.5)}s;--flap:${G(.55+U*.07)}s`)}}let xe=(T,A)=>{let P=T/(A-1),B=ae-(N+z*.2),X=S?N+z*.2+B*(.02+P*.62):N+z*(.1+P*1.6),U=S?N+z*.2+B*(.12+P*.62):Math.max(Me,N+z*.9)+P*(b-Math.max(Me,N+z*.9))*.78,D=S?B*(.1-P*.055):z*(.62-P*.38),J=[Z()*6.3,Z()*6.3,Z()*6.3],q=[1.3+Z()*.8,3.2+Z()*1.4,7+Z()*3],te=[];for(let le=0;le<=64;le++){let ne=-60+(y+120)*le/64,he=Math.min(1,Math.max(0,ne/y)),ve=U+(X-U)*he*he*(3-2*he),Ee=ve-D*(.55*Math.sin(he*q[0]*Math.PI+J[0])+.3*Math.sin(he*q[1]*Math.PI+J[1])+.15*Math.sin(he*q[2]*Math.PI+J[2]));!S&&R&&(Ee+=Math.min(1,Math.max(0,(R.right+220-ne)/220))*Math.max(0,Me+D*1.1-ve)),te.push([ne,Ee])}return{crest:te,d:`${Bn(te)}L${G(y+60)} ${G(ae)}L-60 ${G(ae)}Z`,u:P}},de=Array.from({length:6},(T,A)=>xe(A,6)),Ue=(T,A,P,B)=>`<path fill="none" stroke="${Ke.cut[B]}" stroke-width="${G(1.1+B*.25)}" stroke-linecap="round" stroke-opacity=".85" d="${Array.from({length:P},(X,U)=>Bn(qo(T,A*(U+1)))).join("")}"/>`,I=(T,A="")=>`<path filter="url(#dr${T})" fill="${Ke.ridge[T]}" d="${de[T].d}"/>${A}`,w=T=>T.map(A=>Q(`dr${A}`,2+A,4+A,.14+A*.03)).join(""),V=-20,k=y+20,M=(T,A,P,B)=>{let X=qo(T,A-P),U=qo(T,A+P).reverse();return`<defs><linearGradient id="mg${B}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${Ke.mist}" stop-opacity="0"/><stop offset=".5" stop-color="${Ke.mist}" stop-opacity=".55"/><stop offset="1" stop-color="${Ke.mist}" stop-opacity="0"/></linearGradient></defs><path fill="url(#mg${B})" d="${Bn([...X,...U],!0)}"/>`};re.far=`<defs>${w([0,1])}</defs>`+I(0)+I(1,Ue(de[1].crest,z*.075,4,1)),p(n.far,"dio__mist",-y*.1,0,y*1.2,b,`<g transform="translate(${G(y*.1)} 0)">${M(de[1].crest,z*.05,z*(S?.14:.2),0)}</g>`,`--drift:${G(H*.7)}px;--dur:28s`);{let T=de[2].crest,A=de[3].crest,P=I(2,Ue(T,z*.085,5,2)),B="",X=S?[.1,.34,.7,.93]:[.52,.63,.78,.9,.97];for(let le of X){let ne=y*le+(Z()-.5)*H*.4,he=$i(T,ne)+z*.12,ve=H*(S?.3:.26)*(.8+Z()*.4);Ae(ne,he-ve*3)&&(B+=Xm(ne,he,ve))}P+=`<path fill="${Ke.tree[0]}" d="${B}"/>`+I(3);let U="",D="";for(let le=0;le<4;le++){let ne=z*(.12+le*.13),he=H*(S?.085:.075)*(1+le*.12),ve=rd(A,ne,V,k,he,he*.62,Z,le>1);U+=ve.d,D+=ve.b}P+=`<g${S?"":' clip-path="url(#free3)"'}><path fill="${Ke.row[0]}" d="${U}"/><path fill="${Ke.berry}" d="${D}"/></g>`;let J=S?y*.2:Math.max(R?R.right+H*1.4:y*.6,L-H*2.6),q=H*(S?.3:.28),te=jm(J,$i(A,J)+z*.1,q);P+=`<path fill="${Ke.wall}" d="${te.wall}"/><path fill="${Ke.roof}" d="${te.roof}"/><path fill="${Ke.door}" d="${te.door}"/><path fill="${Ke.tree[1]}" d="${te.beds}"/><path fill="${Ke.berry}" d="${te.cherries}"/><circle fill="url(#wglow)" cx="${G(te.glow[0])}" cy="${G(te.glow[1])}" r="${G(te.glow[2])}"/><path fill="${Ke.window}" d="${te.win}"/>`;for(let[le,ne]of S?[[J+q*5.2,q*2.2],[J-q*2.4,q*1.6]]:[[J-q*2.6,q*2.1],[J+q*5.4,q*2.6]]){let he=$i(A,le)+z*.12;if(!Ae(le-ne/2,he-ne*.4))continue;let ve=sd(le,he,ne,Z);c.push([le,he,ne]),P+=`<path filter="url(#dheap)" fill="#7A2418" d="${ve.mound}"/>${ve.cherries}`}re.mid=`<defs>${w([2,3])}${Q("dheap",3,3,.3)}<radialGradient id="wglow"><stop offset="0" stop-color="${Ke.window}" stop-opacity=".45"/><stop offset="1" stop-color="${Ke.window}" stop-opacity="0"/></radialGradient>${S?"":ie("free3")}</defs>${P}`,p(n.mid,"dio__mist",-y*.1,0,y*1.2,b,`<g transform="translate(${G(y*.1)} 0)">${M(A,-z*(S?.12:.3),z*(S?.1:.13),1)}</g>`,`--drift:${G(-H*.6)}px;--dur:36s`)}{let T="";for(let P of[4,5]){T+=I(P);let B="",X="";for(let U=0;U<(P===4?3:2);U++){let D=z*(.14+U*.17),J=H*(S?.11:.1)*(1+U*.15)*(P===5?1.25:1),q=rd(de[P].crest,D,V,k,J,J*.62,Z,!0);B+=q.d,X+=q.b}T+=`<g${S?"":` clip-path="url(#free${P})"`}><path fill="${Ke.row[P-3]}" d="${B}"/><path fill="${Ke.berryDark}" d="${X}"/></g>`}re.near=`<defs>${w([4,5])}${S?"":ie("free4")+ie("free5")}</defs>${T}`;{let P=S?y*.78:Math.max(R?R.right+H*2.2:y*.55,L-H*1.6),B=H*(S?1.25:1.15),X=$i(de[4].crest,P)+z*.2;if(Ae(P-B/2,X-B*.4)){let U=sd(P,X,B,Z);c.push([P,X,B]),re.near+=`<defs>${Q("dheap2",4,4,.32)}</defs><path filter="url(#dheap2)" fill="#7A2418" d="${U.mound}"/>${U.cherries}`}}(S?[.06,.34,.62]:[.56,.67,.8,.93]).forEach((P,B)=>{let X=y*P+(Z()-.5)*H*.3,U=$i(de[5].crest,X)+z*.2,D=H*(S?.5:.46)*(.85+Z()*.3);if(!Ae(X,U-D*2))return;let J=$m(D,Z);p(n.near,"dio__sway",X-J.w/2,U-J.h,J.w,J.h,J.svg,`--dur:${G(4.2+B*.7)}s;--delay:${G(-B*1.3)}s;--deg:${G(1.6+Z())}deg`)})}{let T=b-Math.max(S?30:40,b*(S?.05:.075)),A=[];for(let X=0;X<=48;X++){let U=-60+(y+120)*X/48;A.push([U,T-Math.sin(U*.006+1)*z*.09-Math.sin(U*.019)*z*.04])}let P=`${Bn(A)}L${G(y+60)} ${G(b+50)}L-60 ${G(b+50)}Z`;(S?[.12,.45,.7,.93]:[.5,.6,.71,.83,.95]).forEach((X,U)=>{let D=y*X+(Z()-.5)*H*.4,J=$i(A,D)+3,q=H*(S?.42:.38)*(.8+Z()*.4);if(!Ae(D,J-q))return;let te=qm(q,Z);p(n.soil,"dio__sway",D-te.w/2,J-te.h,te.w,te.h,te.svg,`--dur:${G(2.8+U*.5)}s;--delay:${G(-U*.9)}s;--deg:${G(3+Z()*2)}deg`)}),re.soil=`<defs>${Q("dsoil",7,10,.34)}</defs><path filter="url(#dsoil)" fill="${Ke.soil}" d="${P}"/><path fill="none" stroke="${Ke.soilCut}" stroke-width="1.8" stroke-linecap="round" stroke-dasharray=".5 10" d="${[1,2,3].slice(0,S?2:3).map(X=>Bn(qo(A,z*.09*X))).join("")}"/>`}{let T=[[y+H*.7,N-z*(S?.05:.2)],[L+H*1.7,N+z*.95],[L+j*.05,N+W*.97],[L-H*.75,N+z*.86],[L-H*1.2,N+z*.64]],A=[],P=[T[0],...T,T[T.length-1]];for(let ge=1;ge<P.length-2;ge++)for(let Le=0;Le<20;Le++){let Ie=Le/20,nt=P[ge-1],at=P[ge],it=P[ge+1],F=P[ge+2];A.push([0,1].map(Fe=>.5*(2*at[Fe]+(-nt[Fe]+it[Fe])*Ie+(2*nt[Fe]-5*at[Fe]+4*it[Fe]-F[Fe])*Ie*Ie+(-nt[Fe]+3*at[Fe]-3*it[Fe]+F[Fe])*Ie*Ie*Ie)))}A.push(T[T.length-1]);let B=[0];for(let ge=1;ge<A.length;ge++)B.push(B[ge-1]+Math.hypot(A[ge][0]-A[ge-1][0],A[ge][1]-A[ge-1][1]));let X=B[B.length-1],U=ge=>{let Le=ge*X,Ie=1;for(;Ie<B.length-1&&B[Ie]<Le;)Ie++;let nt=(Le-B[Ie-1])/Math.max(1e-6,B[Ie]-B[Ie-1]);return[A[Ie-1][0]+(A[Ie][0]-A[Ie-1][0])*nt,A[Ie-1][1]+(A[Ie][1]-A[Ie-1][1])*nt]},D=0,J=1/0;for(let ge=0;ge<=100;ge++){let[Le,Ie]=U(ge/100),nt=Math.hypot(Le-T[2][0],Ie-T[2][1]);nt<J&&(J=nt,D=ge/100)}let q="",te="",le="",ne=[],he=(ge,Le,Ie,nt,at,it=!1)=>{let[F,Fe]=U(ge),ft=$c(F,Fe,Le*H,Le*Ie*H,nt,Z),Ye=`<path fill="${Ke.leaf[at]}" d="${ft.shape}"/>`;it?q+=Ye:te+=Ye,ne.push(ft.veins)},ve=S?.74:.76;he(D,3.3*ve,.31,-1.2,0,!0),he(D,2.8*ve,.3,-.75,1,!0),he(D,2.5*ve,.3,-3.05,3,!0),he(D*.62,3.2*ve,.32,-1.45,2),he(D*.6,2.9*ve,.31,1.2,0),S||(he(D*.25,3*ve,.31,-1.15,3),he(D*.22,2.7*ve,.3,1.5,1)),he(.97,1.25*ve,.3,-2.55,2),he(.97,1.05*ve,.3,-1.85,2);let Ee=[],_e=[];for(let ge=0;ge<=40;ge++){let Le=ge/40,[Ie,nt]=U(Le),[at,it]=U(Math.min(1,Le+.01)),[F,Fe]=U(Math.max(0,Le-.01)),ft=-(it-Fe),Ye=at-F,ct=Math.hypot(ft,Ye)||1,Mt=H*(.14-.075*Le);Ee.push([Ie+ft/ct*Mt,nt+Ye/ct*Mt]),_e.push([Ie-ft/ct*Mt,nt-Ye/ct*Mt])}let Ce=Bn([...Ee,..._e.reverse()],!0),[Ne,tt]=U(D);for(let[ge,Le,Ie,nt]of[[-.66,.02,"#8FA041",.4],[.7,-.06,"#D8A23C",.44],[.36,.3,"#D2652F",.46]]){let at=Ne+ge*j,it=tt+Le*j,F=nt*j,Fe=nt*j*1.16;le+=`<path fill="none" stroke="${Ke.twig}" stroke-width="${G(j*.05)}" stroke-linecap="round" d="M${G(Ne)} ${G(tt)}L${G(at)} ${G(it-Fe*.8)}"/><ellipse fill="${Ie}" cx="${G(at)}" cy="${G(it)}" rx="${G(F)}" ry="${G(Fe)}"/><ellipse fill="#FFF6E6" fill-opacity=".16" cx="${G(at-F*.32)}" cy="${G(it-Fe*.34)}" rx="${G(F*.28)}" ry="${G(Fe*.2)}" transform="rotate(-30 ${G(at-F*.32)} ${G(it-Fe*.34)})"/><circle fill="${Ke.twig}" fill-opacity=".5" cx="${G(at)}" cy="${G(it+Fe*.78)}" r="${G(F*.13)}"/>`}re.branch=`<defs>${Q("dbr",8,10,.34)}</defs><g filter="url(#dbr)">${q}<path fill="${Ke.twig}" d="${Ce}"/>${te}${le}</g><path fill="none" stroke="${Ke.vein}" stroke-opacity=".8" stroke-width="${G(Math.max(1,H*.013))}" stroke-linecap="round" d="${ne.join("")}"/>`}{let T=jc(77),A=[],P="";A.forEach(([B,X,U,D,J],q)=>{P+=`<path fill="${Ke.close[q%2]}" d="${$c(B,X,U*H,D*H,J,T).shape}"/>`}),re.close=P?`<defs><filter id="dclose" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="${G(Math.max(2,H*.025))}"/><feDropShadow dx="0" dy="10" stdDeviation="12" flood-color="rgb(${Ke.ink})" flood-opacity=".35"/></filter></defs><g filter="url(#dclose)">${P}</g>`:""}if(u={x:L,y:N,r:H,ry:z},h=[],e){e.innerHTML="";let T=jc(4242),A=S?10:14;for(let[P,B,X]of c)for(let U=0;U<A;U++){let D=T()*2-1,J=T()*Math.pow(Math.max(0,1-D*D),.7)*.85,q=P+D*X*.42,te=B-X*.42*J-X*.03,le=H*(S?.34:.26)*(.8+T()*.4),ne=document.createElement("i");ne.className="swirl__c",ne.style.width=`${G(le)}px`,ne.style.height=`${G(le*1.12)}px`,ne.style.marginLeft=`${G(-le/2)}px`,ne.style.marginTop=`${G(-le*.56)}px`,e.append(ne),h.push({el:ne,x0:q,y0:te,a0:Math.atan2(te-N,q-L),d0:Math.hypot(q-L,te-N),ring:H*(1.25+T()*.45),turns:1+T()*.55,delay:T()*.22,spin:(T()-.5)*720,z:-1,lift:le*(1.5+T())})}}for(let T of t)T.wrap.style.transformOrigin=S?`${G(L)}px ${G(N)}px`:"",T.svg.setAttribute("viewBox",`0 0 ${y} ${b}`),T.svg.setAttribute("width",y),T.svg.setAttribute("height",b),T.svg.innerHTML=re[T.id]||""}function _(g,y,b,S,R,O=!1){s+=(o-s)*.06,a+=(l-a)*.06;let L=g*g*(3-2*g);for(let N of t){let j=N.id==="branch"||N.id==="close"?Math.sin(b*.7+N.depth*3)*N.depth*2.2:0,W=O?N.flyNarrow:N.fly,H=-s*N.depth*26+W[0]*L*S,z=-a*N.depth*16+W[1]*L*R+j,Z=1+W[2]*L;N.wrap.style.transform=`translate3d(${H.toFixed(1)}px, ${z.toFixed(1)}px, 0) scale(${Z.toFixed(4)})`}r.style.opacity=y.toFixed(3),r.style.visibility=y>0?"visible":"hidden",v(L),r.classList.toggle("is-gone",y<=0)}let m=(g,y,b)=>{let S=Math.min(1,Math.max(0,(b-g)/(y-g)));return S*S*(3-2*S)};function v(g){if(!h.length||!u)return;let y=g>0&&g<1;if(!(!y&&!d)){d=y,e.style.visibility=y?"visible":"hidden";for(let b of h){let S=Math.min(1,Math.max(0,(g-b.delay)/(1-b.delay))),R=y?m(0,.08,S)*(1-m(.84,1,S)):0;if(R<=0){b.el.style.opacity!=="0"&&(b.el.style.opacity="0");continue}let O=m(.08,.92,S),L=m(0,.14,S)*(1-O)*b.lift,N=b.a0-b.turns*Math.PI*2*O,j=(b.d0+(b.ring-b.d0)*m(0,.55,O))*(1-.78*m(.72,1,S)),W=1+(.42-1)*m(0,.4,O),H=u.x+Math.cos(N)*j,z=u.y+Math.sin(N)*j*W-L,Z=Math.sin(N)>0,Q=(1+.22*Math.sin(N)*m(0,.4,O))*(1-.55*m(.78,1,S));b.el.style.transform=`translate3d(${H.toFixed(1)}px, ${z.toFixed(1)}px, 0) rotate(${(b.spin*O).toFixed(0)}deg) scale(${Q.toFixed(3)})`,b.el.style.opacity=R.toFixed(3);let re=Z?3:1;re!==b.z&&(b.z=re,b.el.style.zIndex=re)}}}return{layout:f,update:_,lean:(g,y)=>{o=g,l=y},layers:t,ready:()=>i!==""}}(()=>{let e=/[?&]debug=ui\b/.test(location.search)?Object.assign(document.createElement("pre"),{style:"position:fixed;left:8px;top:60px;z-index:99;margin:0;padding:6px 8px;font:11px/1.3 monospace;background:#fffd;color:#300;max-width:90vw;white-space:pre-wrap"}):null;if(e){document.body.append(e),addEventListener("error",D=>{e.textContent+=`
ERR ${D.message} @${D.lineno}:${D.colno}`});for(let D of["pointerdown","click"])addEventListener(D,J=>{e.dataset.taps=`${e.dataset.taps||""} ${D}:${J.target.tagName}.${String(J.target.className).split(" ")[0]}`.slice(-220)},!0)}let t=document.querySelector("[data-hero]");if(!t)return;let n=t.querySelector("[data-hero-stage]"),i=t.querySelector("[data-hero-canvas]"),s=t.querySelector("[data-hero-cherry]"),a=t.querySelector("[data-hero-cue]"),o=t.querySelector("[data-hero-name]"),l=t.querySelector("[data-hero-plant]"),c=t.querySelector("[data-hero-dio]"),h=c&&c.dataset.box?c.dataset.box.split(",").map(Number):null,u=l&&{cx:+l.dataset.cx,cy:+l.dataset.cy,rx:+l.dataset.rx,turn:+l.dataset.turn,box:l.dataset.box.split(",").map(Number)},d=t.querySelector(".hero__copy"),p=window.matchMedia("(prefers-reduced-motion: reduce)").matches,f=(D,J=0,q=1)=>Math.min(q,Math.max(J,D)),_=(D,J,q)=>{let te=f((q-D)/(J-D));return te*te*(3-2*te)},m=(D,J,q,te,le)=>_(D,J,le)*(1-_(q,te,le)),v=[...t.querySelectorAll("[data-part]")],x=[...t.querySelectorAll("[data-beat]")].map(D=>({el:D,win:D.dataset.beat.split(",").map(Number)})),g=[230,211,183];t.edge={top:g,floor:g,fadeFrom:1/0,fadeH:0},t.dispatchEvent(new Event("tone"));let y=s&&{texture:s.dataset.texture,aspect:+s.dataset.aspect,cx:+s.dataset.cx,cy:+s.dataset.cy,rx:+s.dataset.rx,ry:+s.dataset.ry},b=null;try{b=id(i,{onFrame:M,photo:y,plantBox:u&&u.box||h,gentle:matchMedia("(pointer: coarse)").matches})}catch{b=null}let S=()=>document.dispatchEvent(new Event("cascarup:ready"));if(!b){t.classList.add("is-flat"),e&&(e.textContent="kein WebGL"),S();return}e&&setInterval(()=>{e.textContent=JSON.stringify(b.state())+` reduce=${p} y=${Math.round(scrollY)} cls=${t.className}
${e.dataset.taps||""}`},400),t.classList.add("is-3d");let R=c?od(c,t.querySelector("[data-hero-swirl]")):null;if(R){let D=()=>c.classList.add("is-up");document.addEventListener("cascarup:shown",D,{once:!0}),/[?&]debug\b/.test(location.search)&&(window.__dio=R),setTimeout(D,12e3),matchMedia("(pointer: fine)").matches&&!p&&addEventListener("pointermove",J=>R.lean(J.clientX/innerWidth*2-1,J.clientY/innerHeight*2-1),{passive:!0})}b.background=getComputedStyle(document.documentElement).getPropertyValue("--paper").trim()||"#E6D3B7",/[?&]debug\b/.test(location.search)&&(window.__hero=b);let O=/[?&]debug\b/.test(location.search)?parseFloat(new URLSearchParams(location.search).get("at")):NaN,L=()=>parseFloat(getComputedStyle(t).getPropertyValue("--release"))||0,N=0,j=()=>t.offsetHeight-N-n.offsetHeight-L(),W=()=>t.getBoundingClientRect().top+window.scrollY;function H(){let D=j();return D>0?f((window.scrollY-W())/D):0}let z=window.scrollY,Z=0,Q=0,re=0,ae=!1,Me=!1,Ae=()=>{re&&(cancelAnimationFrame(re),re=0,ae=!1,document.documentElement.style.scrollBehavior="")};function ie(D,J=0){Ae();let q=window.scrollY,te=D-q;if(Math.abs(te)<2)return;let le=J||f(Math.abs(te)/Math.max(1,j())*5200,700,1700),ne=performance.now();document.documentElement.style.scrollBehavior="auto";let he=ve=>{let Ee=f((ve-ne)/le),_e=Ee<.5?4*Ee*Ee*Ee:1-Math.pow(-2*Ee+2,3)/2;window.scrollTo(0,q+te*_e),re=Ee<1?requestAnimationFrame(he):0,re||(document.documentElement.style.scrollBehavior="",ae=!1)};re=requestAnimationFrame(he)}let ce=/[?&]debug\b/.test(location.search)&&!/[?&]glide\b/.test(location.search),Se=0;document.addEventListener("click",D=>{D.target.closest?.('a[href^="#"]')&&(Se=performance.now()+2500)},!0);function be(){if(p||re||ce||performance.now()<Se)return;let D=j(),J=W(),q=window.scrollY;if(D<=0||q<J-1||q>J+D+1)return;let te=f((q-J)/D);if(ji.some(ne=>Math.abs(ne-te)<.006))return;let le;Z>0?le=ji.find(ne=>ne>te):Z<0&&(le=[...ji].reverse().find(ne=>ne<te)),le===void 0&&(le=ji.reduce((ne,he)=>Math.abs(he-te)<Math.abs(ne-te)?he:ne)),ie(J+le*D)}for(let D of["touchstart","keydown","pointerdown"])window.addEventListener(D,Ae,{passive:!0});addEventListener("wheel",D=>{ae&&D.deltaY>0||Ae()},{passive:!0}),addEventListener("touchstart",()=>{Me=!0},{passive:!0}),addEventListener("touchend",()=>{Me=!1,xe()},{passive:!0}),addEventListener("touchcancel",()=>{Me=!1},{passive:!0});function xe(){if(p||ce||re||Me||performance.now()<Se)return;let D=j(),J=W(),q=window.scrollY;if(D<=0)return;let te=(q-J)/D;Z>0&&te>.002&&te<ji[1]-.01&&(ae=!0,ie(J+ji[1]*D,2100))}function de(){t.classList.contains("is-released")||(N=parseFloat(getComputedStyle(n).top)||0),t.classList.toggle("is-released",!p&&t.getBoundingClientRect().bottom<=N+n.offsetHeight+L()+.5),b.progress=p?0:H();let D=window.scrollY;!re&&D!==z&&(Z=Math.sign(D-z)),z=D,clearTimeout(Q),re||(xe(),re||(Q=setTimeout(be,150)))}let Ue=-1,I=-1,w=-1,V=!0,k=null;function M(D,J,q){if(R){let ne=n.clientWidth,he=n.clientHeight,ve=ne/he<=1.05,Ee=ve?.05:.072,_e=Math.round((1-_(ve?.012:Ee-.028,Ee,D))*500)/500;(_e>0||V)&&((D<.003||!R.ready())&&R.layout(q(),ne,he,ve,k),R.update(_(.004,Ee,D),_e,performance.now()/1e3,ne,he,ve)),V=_e>0}let te=Math.round((1-_(.012,.05,D))*500)/500;if(te>0&&(a||o)){let ne=q(),he=n.clientWidth,ve=n.clientHeight,Ee=he/ve<=1.05;if(a){let _e=d.getBoundingClientRect(),Ce=n.getBoundingClientRect().top;a.style.setProperty("--x",`${(he/2).toFixed(1)}px`),a.style.setProperty("--y",`${(Ee?ve-72:ve-82).toFixed(1)}px`)}o&&(o.classList.toggle("is-up",Ee),o.style.setProperty("--x",`${(ne.x-(Ee?.3:.5)*ne.rx).toFixed(1)}px`),o.style.setProperty("--y",`${(ne.y-(Ee?.82:.8)*ne.ry).toFixed(1)}px`))}if(u){let ne=n.clientWidth,he=n.clientHeight,ve=ne/he<=1.05,Ee=_(.006,ve?.055:.07,D),_e=Math.round((1-_(ve?.03:.048,ve?.052:.07,D))*500)/500;if(_e>0){let Ce=q(),Ne=Ce.rx/u.rx,tt=Ee*Ee*ne*(ve?.55:.6),ge=Ee*Ee*he*(ve?-.32:.75),Le=u.turn+Ee*(ve?-9:9);l.style.transform=`translate3d(${(Ce.x+tt).toFixed(1)}px, ${(Ce.y+ge).toFixed(1)}px, 0) rotate(${Le.toFixed(2)}deg) scale(${Ne.toFixed(4)}) translate(${-u.cx}px, ${-u.cy}px)`}_e!==w&&(w=_e,l.style.opacity=_e,l.style.visibility=_e>0?"visible":"hidden")}if(te!==I){I=te;for(let ne of[a,o])ne&&(ne.style.opacity=te,ne.style.visibility=te>0?"visible":"hidden")}for(let ne of x){let[he,ve,Ee,_e]=ne.win,Ce=Math.round((_e>=1?_(he,ve,D):m(he,ve,Ee,_e,D))*500)/500;Ce!==ne.o&&(ne.o=Ce,ne.el.style.opacity=Ce,ne.el.style.visibility=Ce===0?"hidden":"visible",ne.el.style.setProperty("--in",Ce))}let le=m(.17,.22,.287,.305,D);if(le>.002){let ne=J();for(let he of v){let ve=ne[he.dataset.part];he.style.transform=`translate3d(${ve.x.toFixed(1)}px, ${ve.y.toFixed(1)}px, 0)`,he.style.opacity=le.toFixed(3),he.style.visibility="visible"}v.shown=!0}else if(v.shown!==!1){v.shown=!1;for(let ne of v)ne.style.opacity="0",ne.style.visibility="hidden"}if(y){let ne=b&&b.photoReady?1-_(.068,.095,D):D<.1?1:0;if(ne>0){let he=q(),ve=he.rx/y.rx,Ee=ve*s.naturalHeight/Math.max(1,s.naturalWidth);s.style.width=`${ve.toFixed(1)}px`,s.style.transform=`translate3d(${(he.x-y.cx*ve).toFixed(1)}px, ${(he.y-y.cy*Ee).toFixed(1)}px, 0)`}ne!==Ue&&(Ue=ne,s.style.opacity=ne,s.style.visibility=ne>0?"visible":"hidden")}}let T=(D,J)=>{let q=(D.l+D.r)/2,te=(D.t+D.b)/2,le=(D.r-D.l)/2*J,ne=(D.b-D.t)/2*J;return{l:q-le,t:te-ne,r:q+le,b:te+ne}};function A(){let D=n.getBoundingClientRect(),J=D.width,q=D.height,te=J/q<=1.05,le=d.getBoundingClientRect(),ne=(document.querySelector("[data-nav]")?.offsetHeight||64)-12,he=0;for(let ve of d.children)he=Math.max(he,ve.getBoundingClientRect().right-D.left);b.frame=te?T({l:14,t:le.bottom-D.top+8,r:J-14,b:q-86},.9):{l:he+48,t:ne+28,r:J-32,b:q-104},k={left:le.left-D.left,right:he,top:le.top-D.top,bottom:le.bottom-D.top}}let P=()=>{let D=n.getBoundingClientRect();b.resize(Math.round(D.width),Math.round(D.height)),A()};document.fonts?.ready.then(()=>A()),new ResizeObserver(P).observe(n),P(),new IntersectionObserver(([D])=>{p||(D.isIntersecting?b.start():b.stop())},{rootMargin:"120px 0px"}).observe(t),window.addEventListener("scroll",de,{passive:!0}),window.addEventListener("resize",de),de(),clearTimeout(Q),p?(b.jump(0),b.stop()):b.begin(),Number.isFinite(O)&&O>=0&&O<=1&&setTimeout(()=>{document.documentElement.style.scrollBehavior="auto",scrollTo(0,W()+j()*O)},600),s&&!s.complete&&s.addEventListener("load",()=>b.jump(b.progress),{once:!0}),requestAnimationFrame(()=>t.classList.add("is-ready"));let B=()=>new Promise(D=>{let J=0,q=performance.now(),te=q,le=ne=>{J=ne-q<34?J+1:0,q=ne,J>=12||ne-te>2500?D():requestAnimationFrame(le)};requestAnimationFrame(le)}),X=!1,U=()=>{X||(X=!0,t.classList.add("has-plant"),(p?Promise.resolve():b.warm()).then(B).then(S,S),setTimeout(()=>t.classList.add("is-settled"),1e3))};l?(l.decode?l.decode():Promise.resolve()).then(U,()=>l.addEventListener("load",U,{once:!0})):U(),setTimeout(U,5e3)})();
