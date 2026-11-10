/* Cascarup 3D opening. three.js © 2010-2025 three.js authors, MIT licence. */
var Ph=0,Gl=1,Ih=2;var Vl=1,Lh=2,Wn=3,Li=0,Yt=1,zt=2,Di=0,Os=1,Hl=2,Wl=3,$l=4,Dh=5,Hr=100,Uh=101,Nh=102,Fh=103,Oh=104,Bh=200,zh=201,kh=202,Gh=203,Vh=204,Hh=205,Wh=206,$h=207,Xh=208,jh=209,qh=210,Yh=211,Zh=212,Jh=213,Kh=214,xo=0,yo=1,Mo=2,Bs=3,So=4,bo=5,wo=6,To=7,Qh=0,eu=1,tu=2,mi=0,nu=1,iu=2,ru=3,su=4,au=5,ou=6,Eo=7;var Xl=300,Wr=301,Ki=302,Ao=303,Co=304,zs=306,Rr=1e3,Pr=1001,Ia=1002,kn=1003,lu=1004;var ks=1005;var Gn=1006,Ro=1007;var Qi=1008;var $n=1009,jl=1010,ql=1011,$r=1012,Po=1013,er=1014,Xn=1015,Xr=1016,Io=1017,Lo=1018,jr=1020,Yl=35902,cu=1021,hu=1022,Rn=1023,Gs=1026,Vs=1027,Zl=1028,Do=1029,uu=1030,Jl=1031;var Kl=1033,Uo=33776,No=33777,Fo=33778,Oo=33779,Ql=35840,ec=35841,tc=35842,nc=35843,ic=36196,rc=37492,sc=37496,ac=37808,oc=37809,lc=37810,cc=37811,hc=37812,uc=37813,dc=37814,pc=37815,mc=37816,fc=37817,gc=37818,vc=37819,_c=37820,xc=37821,Bo=36492,yc=36494,Mc=36495,du=36283,Sc=36284,bc=36285,wc=36286;var ps=2300,La=2301,Ca=2302,Ll=2400,Dl=2401,Ul=2402;var pu=3201;var mu=0,fu=1,tr="",Ht="srgb",Wi="srgb-linear",ms="linear",_t="srgb";var Hi=7680;var gu=512,vu=513,_u=514,Tc=515,xu=516,yu=517,Mu=518,Su=519,Da=35044;var Ec="300 es",Ci=2e3,fs=2001;var ci=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}},$t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ra=Math.PI/180,Ua=180/Math.PI;function oi(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return($t[255&r]+$t[r>>8&255]+$t[r>>16&255]+$t[r>>24&255]+"-"+$t[255&e]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[63&t|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[255&n]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function lt(r,e,t){return Math.max(e,Math.min(t,r))}function Sd(r,e){return(r%e+e)%e}function il(r,e,t){return(1-t)*r+t*e}function On(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function St(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var xe=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},bn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[a+0],p=s[a+1],f=s[a+2],v=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=f,void(e[t+3]=v);if(u!==v||l!==d||c!==p||h!==f){let m=1-o,g=l*d+c*p+h*f+u*v,_=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){let T=Math.sqrt(x),E=Math.atan2(T,g*_);m=Math.sin(m*E)/T,o=Math.sin(o*E)/T}let y=o*_;if(l=l*m+d*y,c=c*m+p*y,h=h*m+f*y,u=u*m+v*y,m===1-o){let T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*u+l*p-c*d,e[t+1]=l*f+h*d+c*u-o*p,e[t+2]=c*f+h*p+o*d-l*u,e[t+3]=h*f-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),p=l(i/2),f=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"YZX":this._x=d*h*u+c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u-d*p*f;break;case"XZY":this._x=d*h*u-c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ih.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ih.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return rl.copy(this).projectOnVector(e),this.sub(rl)}reflect(e){return this.sub(rl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},rl=new C,ih=new bn,nt=class r{constructor(e,t,n,i,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],f=n[8],v=i[0],m=i[3],g=i[6],_=i[1],x=i[4],y=i[7],T=i[2],E=i[5],P=i[8];return s[0]=a*v+o*_+l*T,s[3]=a*m+o*x+l*E,s[6]=a*g+o*y+l*P,s[1]=c*v+h*_+u*T,s[4]=c*m+h*x+u*E,s[7]=c*g+h*y+u*P,s[2]=d*v+p*_+f*T,s[5]=d*m+p*x+f*E,s[8]=d*g+p*y+f*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,f=t*u+n*d+i*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/f;return e[0]=u*v,e[1]=(i*c-h*n)*v,e[2]=(o*n-i*a)*v,e[3]=d*v,e[4]=(h*t-i*l)*v,e[5]=(i*s-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(sl.makeScale(e,t)),this}rotate(e){return this.premultiply(sl.makeRotation(-e)),this}translate(e,t){return this.premultiply(sl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},sl=new nt;function Ac(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ir(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function bu(){let r=Ir("canvas");return r.style.display="block",r}var rh={};function $i(r){r in rh||(rh[r]=!0,console.warn(r))}function wu(r,e,t){return new Promise(function(n,i){setTimeout(function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}},t)})}function Tu(r){let e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Eu(r){let e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=1-e[14])}var sh=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ah=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bd(){let r={enabled:!0,workingColorSpace:Wi,spaces:{},convert:function(i,s,a){return this.enabled!==!1&&s!==a&&s&&a&&(this.spaces[s].transfer===_t&&(i.r=li(i.r),i.g=li(i.g),i.b=li(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_t&&(i.r=Cr(i.r),i.g=Cr(i.g),i.b=Cr(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===""?ms:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return $i("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return $i("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Wi]:{primaries:e,whitePoint:n,transfer:ms,toXYZ:sh,fromXYZ:ah,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:sh,fromXYZ:ah,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),r}var pt=bd();function li(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function Cr(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var dr,Na=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{dr===void 0&&(dr=Ir("canvas")),dr.width=e.width,dr.height=e.height;let i=dr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=dr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ir("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=255*li(s[a]/255);return n.putImageData(i,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*li(t[n]/255)):t[n]=li(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},wd=0,Lr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=oi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(al(i[a].image)):s.push(al(i[a]))}else s=al(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function al(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Na.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Td=0,ol=new C,Qt=class r extends ci{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=1001,i=1001,s=1006,a=1008,o=1023,l=1009,c=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=oi(),this.name="",this.source=new Lr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ol).x}get height(){return this.source.getSize(ol).y}get depth(){return this.source.getSize(ol).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];i!==void 0?i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n:console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rr:e.x=e.x-Math.floor(e.x);break;case Pr:e.x=e.x<0?0:1;break;case Ia:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Rr:e.y=e.y-Math.floor(e.y);break;case Pr:e.y=e.y<0?0:1;break;case Ia:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Qt.DEFAULT_IMAGE=null,Qt.DEFAULT_MAPPING=Xl,Qt.DEFAULT_ANISOTROPY=1;var Ct=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],f=l[9],v=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(f+m)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,y=(p+1)/2,T=(g+1)/2,E=(h+d)/4,P=(u+v)/4,O=(f+m)/4;return x>y&&x>T?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=E/n,s=P/n):y>T?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=E/i,s=O/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=P/s,i=O/s),this.set(n,i,s,t),this}let _=Math.sqrt((m-f)*(m-f)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-f)/_,this.y=(u-v)/_,this.z=(d-h)/_,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fa=class extends ci{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);let i={width:e,height:t,depth:n.depth},s=new Qt(i);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Lr(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vn=class extends Fa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},gs=class extends Qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kn,this.minFilter=kn,this.wrapR=Pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Oa=class extends Qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kn,this.minFilter=kn,this.wrapR=Pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var wn=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,yn):yn.fromBufferAttribute(s,a),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ta.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ta.copy(n.boundingBox)),ta.applyMatrix4(e.matrixWorld),this.union(ta)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(is),na.subVectors(this.max,is),pr.subVectors(e.a,is),mr.subVectors(e.b,is),fr.subVectors(e.c,is),yi.subVectors(mr,pr),Mi.subVectors(fr,mr),zi.subVectors(pr,fr);let t=[0,-yi.z,yi.y,0,-Mi.z,Mi.y,0,-zi.z,zi.y,yi.z,0,-yi.x,Mi.z,0,-Mi.x,zi.z,0,-zi.x,-yi.y,yi.x,0,-Mi.y,Mi.x,0,-zi.y,zi.x,0];return!!ll(t,pr,mr,fr,na)&&(t=[1,0,0,0,1,0,0,0,1],!!ll(t,pr,mr,fr,na)&&(ia.crossVectors(yi,Mi),t=[ia.x,ia.y,ia.z],ll(t,pr,mr,fr,na)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(yn).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ni=[new C,new C,new C,new C,new C,new C,new C,new C],yn=new C,ta=new wn,pr=new C,mr=new C,fr=new C,yi=new C,Mi=new C,zi=new C,is=new C,na=new C,ia=new C,ki=new C;function ll(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ki.fromArray(r,s);let o=i.x*Math.abs(ki.x)+i.y*Math.abs(ki.y)+i.z*Math.abs(ki.z),l=e.dot(ki),c=t.dot(ki),h=n.dot(ki);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Ed=new wn,rs=new C,cl=new C,Tn=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ed.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rs.subVectors(e,this.center);let t=rs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=.5*(n-this.radius);this.center.addScaledVector(rs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rs.copy(e.center).add(cl)),this.expandByPoint(rs.copy(e.center).sub(cl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ii=new C,hl=new C,ra=new C,Si=new C,ul=new C,sa=new C,dl=new C,Xi=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,t),ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){hl.copy(e).add(t).multiplyScalar(.5),ra.copy(t).sub(e).normalize(),Si.copy(this.origin).sub(hl);let s=.5*e.distanceTo(t),a=-this.direction.dot(ra),o=Si.dot(this.direction),l=-Si.dot(ra),c=Si.lengthSq(),h=Math.abs(1-a*a),u,d,p,f;if(h>0)if(u=a*l-o,d=a*o-l,f=s*h,u>=0)if(d>=-f)if(d<=f){let v=1/h;u*=v,d*=v,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(hl).addScaledVector(ra,d),p}intersectSphere(e,t){ii.subVectors(e.center,this.origin);let n=ii.dot(this.direction),i=ii.dot(ii)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i?null:((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i?null:((o>n||n!=n)&&(n=o),(l<i||i!=i)&&(i=l),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,t,n,i,s){ul.subVectors(t,e),sa.subVectors(n,e),dl.crossVectors(ul,sa);let a,o=this.direction.dot(dl);if(o>0){if(i)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Si.subVectors(this.origin,e);let l=a*this.direction.dot(sa.crossVectors(Si,sa));if(l<0)return null;let c=a*this.direction.dot(ul.cross(Si));if(c<0||l+c>o)return null;let h=-a*Si.dot(dl);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},tt=class r{constructor(e,t,n,i,s,a,o,l,c,h,u,d,p,f,v,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,u,d,p,f,v,m)}set(e,t,n,i,s,a,o,l,c,h,u,d,p,f,v,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=p,g[7]=f,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/gr.setFromMatrixColumn(e,0).length(),s=1/gr.setFromMatrixColumn(e,1).length(),a=1/gr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,f=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+f*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=f+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,f=c*h,v=c*u;t[0]=d+v*o,t[4]=f*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,f=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,f=o*h,v=o*u;t[0]=l*h,t[4]=f*c-p,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=p*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,f=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=f*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+f,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*l,p=a*c,f=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ad,e,Cd)}lookAt(e,t,n){let i=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),bi.crossVectors(n,cn),bi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),bi.crossVectors(n,cn)),bi.normalize(),aa.crossVectors(cn,bi),i[0]=bi.x,i[4]=aa.x,i[8]=cn.x,i[1]=bi.y,i[5]=aa.y,i[9]=cn.y,i[2]=bi.z,i[6]=aa.z,i[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],f=n[2],v=n[6],m=n[10],g=n[14],_=n[3],x=n[7],y=n[11],T=n[15],E=i[0],P=i[4],O=i[8],B=i[12],H=i[1],V=i[5],U=i[9],I=i[13],N=i[2],G=i[6],$=i[10],ee=i[14],K=i[3],se=i[7],be=i[11],te=i[15];return s[0]=a*E+o*H+l*N+c*K,s[4]=a*P+o*V+l*G+c*se,s[8]=a*O+o*U+l*$+c*be,s[12]=a*B+o*I+l*ee+c*te,s[1]=h*E+u*H+d*N+p*K,s[5]=h*P+u*V+d*G+p*se,s[9]=h*O+u*U+d*$+p*be,s[13]=h*B+u*I+d*ee+p*te,s[2]=f*E+v*H+m*N+g*K,s[6]=f*P+v*V+m*G+g*se,s[10]=f*O+v*U+m*$+g*be,s[14]=f*B+v*I+m*ee+g*te,s[3]=_*E+x*H+y*N+T*K,s[7]=_*P+x*V+y*G+T*se,s[11]=_*O+x*U+y*$+T*be,s[15]=_*B+x*I+y*ee+T*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*l*u-i*c*u-s*o*d+n*c*d+i*o*p-n*l*p)+e[7]*(+t*l*p-t*c*d+s*a*d-i*a*p+i*c*h-s*l*h)+e[11]*(+t*c*u-t*o*p-s*a*u+n*a*p+s*o*h-n*c*h)+e[15]*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],f=e[12],v=e[13],m=e[14],g=e[15],_=u*m*c-v*d*c+v*l*p-o*m*p-u*l*g+o*d*g,x=f*d*c-h*m*c-f*l*p+a*m*p+h*l*g-a*d*g,y=h*v*c-f*u*c+f*o*p-a*v*p-h*o*g+a*u*g,T=f*u*l-h*v*l-f*o*d+a*v*d+h*o*m-a*u*m,E=t*_+n*x+i*y+s*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/E;return e[0]=_*P,e[1]=(v*d*s-u*m*s-v*i*p+n*m*p+u*i*g-n*d*g)*P,e[2]=(o*m*s-v*l*s+v*i*c-n*m*c-o*i*g+n*l*g)*P,e[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*p-n*l*p)*P,e[4]=x*P,e[5]=(h*m*s-f*d*s+f*i*p-t*m*p-h*i*g+t*d*g)*P,e[6]=(f*l*s-a*m*s-f*i*c+t*m*c+a*i*g-t*l*g)*P,e[7]=(a*d*s-h*l*s+h*i*c-t*d*c-a*i*p+t*l*p)*P,e[8]=y*P,e[9]=(f*u*s-h*v*s-f*n*p+t*v*p+h*n*g-t*u*g)*P,e[10]=(a*v*s-f*o*s+f*n*c-t*v*c-a*n*g+t*o*g)*P,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*p-t*o*p)*P,e[12]=T*P,e[13]=(h*v*i-f*u*i+f*n*d-t*v*d-h*n*m+t*u*m)*P,e[14]=(f*o*i-a*v*i-f*n*l+t*v*l+a*n*m-t*o*m)*P,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*P,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,f=s*u,v=a*h,m=a*u,g=o*u,_=l*c,x=l*h,y=l*u,T=n.x,E=n.y,P=n.z;return i[0]=(1-(v+g))*T,i[1]=(p+y)*T,i[2]=(f-x)*T,i[3]=0,i[4]=(p-y)*E,i[5]=(1-(d+g))*E,i[6]=(m+_)*E,i[7]=0,i[8]=(f+x)*P,i[9]=(m-_)*P,i[10]=(1-(d+v))*P,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=gr.set(i[0],i[1],i[2]).length(),a=gr.set(i[4],i[5],i[6]).length(),o=gr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Mn.copy(this);let l=1/s,c=1/a,h=1/o;return Mn.elements[0]*=l,Mn.elements[1]*=l,Mn.elements[2]*=l,Mn.elements[4]*=c,Mn.elements[5]*=c,Mn.elements[6]*=c,Mn.elements[8]*=h,Mn.elements[9]*=h,Mn.elements[10]*=h,t.setFromRotationMatrix(Mn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=2e3){let l=this.elements,c=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),p,f;if(o===Ci)p=-(a+s)/(a-s),f=-2*a*s/(a-s);else{if(o!==fs)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),f=-a*s/(a-s)}return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-s),d=(t+e)*c,p=(n+i)*h,f,v;if(o===Ci)f=(a+s)*u,v=-2*u;else{if(o!==fs)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=s*u,v=-1*u}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},gr=new C,Mn=new tt,Ad=new C(0,0,0),Cd=new C(1,1,1),bi=new C,aa=new C,cn=new C,oh=new tt,lh=new bn,En=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return oh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lh.setFromEuler(this),this.setFromQuaternion(lh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};En.DEFAULT_ORDER="XYZ";var vs=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Rd=0,ch=new C,vr=new bn,ri=new tt,oa=new C,ss=new C,Pd=new C,Id=new bn,hh=new C(1,0,0),uh=new C(0,1,0),dh=new C(0,0,1),ph={type:"added"},Ld={type:"removed"},_r={type:"childadded",child:null},pl={type:"childremoved",child:null},Lt=class r extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new C,t=new En,n=new bn,i=new C(1,1,1);t._onChange(function(){n.setFromEuler(t,!1)}),n._onChange(function(){t.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new tt},normalMatrix:{value:new nt}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vr.setFromAxisAngle(e,t),this.quaternion.multiply(vr),this}rotateOnWorldAxis(e,t){return vr.setFromAxisAngle(e,t),this.quaternion.premultiply(vr),this}rotateX(e){return this.rotateOnAxis(hh,e)}rotateY(e){return this.rotateOnAxis(uh,e)}rotateZ(e){return this.rotateOnAxis(dh,e)}translateOnAxis(e,t){return ch.copy(e).applyQuaternion(this.quaternion),this.position.add(ch.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hh,e)}translateY(e){return this.translateOnAxis(uh,e)}translateZ(e){return this.translateOnAxis(dh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?oa.copy(e):oa.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(ss,oa,this.up):ri.lookAt(oa,ss,this.up),this.quaternion.setFromRotationMatrix(ri),i&&(ri.extractRotation(i.matrixWorld),vr.setFromRotationMatrix(ri),this.quaternion.premultiply(vr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ph),_r.child=e,this.dispatchEvent(_r),_r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ld),pl.child=e,this.dispatchEvent(pl),pl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ph),_r.child=e,this.dispatchEvent(_r),_r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,e,Pd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,Id,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Lt.DEFAULT_UP=new C(0,1,0),Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Sn=new C,si=new C,ml=new C,ai=new C,xr=new C,yr=new C,mh=new C,fl=new C,gl=new C,vl=new C,_l=new Ct,xl=new Ct,yl=new Ct,Bn=class r{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Sn.subVectors(e,t),i.cross(Sn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Sn.subVectors(i,t),si.subVectors(n,t),ml.subVectors(e,t);let a=Sn.dot(Sn),o=Sn.dot(si),l=Sn.dot(ml),c=si.dot(si),h=si.dot(ml),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,f=(a*h-o*l)*d;return s.set(1-p-f,f,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ai)!==null&&ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ai.x),l.addScaledVector(a,ai.y),l.addScaledVector(o,ai.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return _l.setScalar(0),xl.setScalar(0),yl.setScalar(0),_l.fromBufferAttribute(e,t),xl.fromBufferAttribute(e,n),yl.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(_l,s.x),a.addScaledVector(xl,s.y),a.addScaledVector(yl,s.z),a}static isFrontFacing(e,t,n,i){return Sn.subVectors(n,t),si.subVectors(e,t),Sn.cross(si).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),.5*Sn.cross(si).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;xr.subVectors(i,n),yr.subVectors(s,n),fl.subVectors(e,n);let l=xr.dot(fl),c=yr.dot(fl);if(l<=0&&c<=0)return t.copy(n);gl.subVectors(e,i);let h=xr.dot(gl),u=yr.dot(gl);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(xr,a);vl.subVectors(e,s);let p=xr.dot(vl),f=yr.dot(vl);if(f>=0&&p<=f)return t.copy(s);let v=p*c-l*f;if(v<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(yr,o);let m=h*f-p*u;if(m<=0&&u-h>=0&&p-f>=0)return mh.subVectors(s,i),o=(u-h)/(u-h+(p-f)),t.copy(i).addScaledVector(mh,o);let g=1/(m+v+d);return a=v*g,o=d*g,t.copy(n).addScaledVector(xr,a).addScaledVector(yr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Au={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},la={h:0,s:0,l:0};function Ml(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var Oe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=pt.workingColorSpace){if(e=Sd(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ml(a,s,e+1/3),this.g=Ml(a,s,e),this.b=Ml(a,s,e-1/3)}return pt.colorSpaceToWorking(this,i),this}setStyle(e,t=Ht){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){let n=Au[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=li(e.r),this.g=li(e.g),this.b=li(e.b),this}copyLinearToSRGB(e){return this.r=Cr(e.r),this.g=Cr(e.g),this.b=Cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return pt.workingToColorSpace(Xt.copy(this),e),65536*Math.round(lt(255*Xt.r,0,255))+256*Math.round(lt(255*Xt.g,0,255))+Math.round(lt(255*Xt.b,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.workingToColorSpace(Xt.copy(this),t);let n=Xt.r,i=Xt.g,s=Xt.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=pt.workingColorSpace){return pt.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Ht){pt.workingToColorSpace(Xt.copy(this),e);let t=Xt.r,n=Xt.g,i=Xt.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(e,t,n){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+t,wi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wi),e.getHSL(la);let n=il(wi.h,la.h,t),i=il(wi.s,la.s,t),s=il(wi.l,la.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xt=new Oe;Oe.NAMES=Au;var Dd=0,hi=class extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=oi(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ui=class extends hi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},mf=Ud();function Ud(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[256|l]=32768,i[l]=24,i[256|l]=24):c<-14?(n[l]=1024>>-c-14,n[256|l]=1024>>-c-14|32768,i[l]=-c-1,i[256|l]=-c-1):c<=15?(n[l]=c+15<<10,n[256|l]=c+15<<10|32768,i[l]=13,i[256|l]=13):c<128?(n[l]=31744,n[256|l]=64512,i[l]=24,i[256|l]=24):(n[l]=31744,n[256|l]=64512,i[l]=13,i[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}var Bt=new C,ca=new xe,Nd=0,Dt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Da,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ca.fromBufferAttribute(this,t),ca.applyMatrix3(e),this.setXY(t,ca.x,ca.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=On(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=On(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=On(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=On(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=On(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array),s=St(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Da&&(e.usage=this.usage),e}};var _s=class extends Dt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var xs=class extends Dt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Je=class extends Dt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Fd=0,vn=new tt,Sl=new Lt,Mr=new C,hn=new wn,as=new wn,Vt=new C,Rt=class r extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ac(e)?xs:_s)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new nt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,n){return vn.makeTranslation(e,t,n),this.applyMatrix4(vn),this}scale(e,t,n){return vn.makeScale(e,t,n),this.applyMatrix4(vn),this}lookAt(e){return Sl.lookAt(e),Sl.updateMatrix(),this.applyMatrix4(Sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Je(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new C,1/0);if(e){let n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];as.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(hn.min,as.min),hn.expandByPoint(Vt),Vt.addVectors(hn.max,as.max),hn.expandByPoint(Vt)):(hn.expandByPoint(as.min),hn.expandByPoint(as.max))}hn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Vt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Vt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Vt.fromBufferAttribute(o,c),l&&(Mr.fromBufferAttribute(e,c),Vt.add(Mr)),i=Math.max(i,n.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let O=0;O<n.count;O++)o[O]=new C,l[O]=new C;let c=new C,h=new C,u=new C,d=new xe,p=new xe,f=new xe,v=new C,m=new C;function g(O,B,H){c.fromBufferAttribute(n,O),h.fromBufferAttribute(n,B),u.fromBufferAttribute(n,H),d.fromBufferAttribute(s,O),p.fromBufferAttribute(s,B),f.fromBufferAttribute(s,H),h.sub(c),u.sub(c),p.sub(d),f.sub(d);let V=1/(p.x*f.y-f.x*p.y);isFinite(V)&&(v.copy(h).multiplyScalar(f.y).addScaledVector(u,-p.y).multiplyScalar(V),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(V),o[O].add(v),o[B].add(v),o[H].add(v),l[O].add(m),l[B].add(m),l[H].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let O=0,B=_.length;O<B;++O){let H=_[O],V=H.start;for(let U=V,I=V+H.count;U<I;U+=3)g(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let x=new C,y=new C,T=new C,E=new C;function P(O){T.fromBufferAttribute(i,O),E.copy(T);let B=o[O];x.copy(B),x.sub(T.multiplyScalar(T.dot(B))).normalize(),y.crossVectors(E,B);let H=y.dot(l[O])<0?-1:1;a.setXYZW(O,x.x,x.y,x.z,H)}for(let O=0,B=_.length;O<B;++O){let H=_[O],V=H.start;for(let U=V,I=V+H.count;U<I;U+=3)P(e.getX(U+0)),P(e.getX(U+1)),P(e.getX(U+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Dt(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new C,s=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(e)for(let d=0,p=e.count;d<p;d+=3){let f=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,f),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,f),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,f=0;for(let v=0,m=l.length;v<m;v++){p=o.isInterleavedBufferAttribute?l[v]*o.data.stride+o.offset:l[v]*h;for(let g=0;g<h;g++)d[f++]=c[p++]}return new Dt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=e(i[o],n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},fh=new tt,Gi=new Xi,ha=new Tn,gh=new C,ua=new C,da=new C,pa=new C,bl=new C,ma=new C,vh=new C,fa=new C,qe=class extends Lt{constructor(e=new Rt,t=new ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){ma.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(bl.fromBufferAttribute(u,e),a?ma.addScaledVector(bl,h):ma.addScaledVector(bl.sub(t),h))}t.add(ma)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(s),Gi.copy(e.ray).recast(e.near),ha.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(ha,gh)===null||Gi.origin.distanceToSquared(gh)>(e.far-e.near)**2))return;fh.copy(s).invert(),Gi.copy(e.ray).applyMatrix4(fh),n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,Gi)}}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,v=d.length;f<v;f++){let m=d[f],g=a[m.materialIndex];for(let _=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));_<x;_+=3)i=ga(this,g,e,n,c,h,u,o.getX(_),o.getX(_+1),o.getX(_+2)),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}else for(let f=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);f<v;f+=3)i=ga(this,a,e,n,c,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),i&&(i.faceIndex=Math.floor(f/3),t.push(i));else if(l!==void 0)if(Array.isArray(a))for(let f=0,v=d.length;f<v;f++){let m=d[f],g=a[m.materialIndex];for(let _=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));_<x;_+=3)i=ga(this,g,e,n,c,h,u,_,_+1,_+2),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,t.push(i))}else for(let f=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);f<v;f+=3)i=ga(this,a,e,n,c,h,u,f,f+1,f+2),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}};function ga(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,ua),r.getVertexPosition(l,da),r.getVertexPosition(c,pa);let h=(function(u,d,p,f,v,m,g,_){let x;if(x=d.side===1?f.intersectTriangle(g,m,v,!0,_):f.intersectTriangle(v,m,g,d.side===0,_),x===null)return null;fa.copy(_),fa.applyMatrix4(u.matrixWorld);let y=p.ray.origin.distanceTo(fa);return y<p.near||y>p.far?null:{distance:y,point:fa.clone(),object:u}})(r,e,t,n,ua,da,pa,vh);if(h){let u=new C;Bn.getBarycoord(vh,ua,da,pa,u),i&&(h.uv=Bn.getInterpolatedAttribute(i,o,l,c,u,new xe)),s&&(h.uv1=Bn.getInterpolatedAttribute(s,o,l,c,u,new xe)),a&&(h.normal=Bn.getInterpolatedAttribute(a,o,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new C,materialIndex:0};Bn.getNormal(ua,da,pa,d.normal),h.face=d,h.barycoord=u}return h}var di=class r extends Rt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;function f(v,m,g,_,x,y,T,E,P,O,B){let H=y/P,V=T/O,U=y/2,I=T/2,N=E/2,G=P+1,$=O+1,ee=0,K=0,se=new C;for(let be=0;be<$;be++){let te=be*V-I;for(let q=0;q<G;q++){let ie=q*H-U;se[v]=ie*_,se[m]=te*x,se[g]=N,c.push(se.x,se.y,se.z),se[v]=0,se[m]=0,se[g]=E>0?1:-1,h.push(se.x,se.y,se.z),u.push(q/P),u.push(1-be/O),ee+=1}}for(let be=0;be<O;be++)for(let te=0;te<P;te++){let q=d+te+G*be,ie=d+te+G*(be+1),de=d+(te+1)+G*(be+1),ge=d+(te+1)+G*be;l.push(q,ie,ge),l.push(ie,de,ge),K+=6}o.addGroup(p,K,B),p+=K,d+=ee}f("z","y","x",-1,-1,n,t,e,a,s,0),f("z","y","x",1,-1,n,t,-e,a,s,1),f("x","z","y",1,1,e,n,t,i,a,2),f("x","z","y",1,-1,e,n,-t,i,a,3),f("x","y","z",1,-1,e,t,n,i,s,4),f("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function nr(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Zt(r){let e={};for(let t=0;t<r.length;t++){let n=nr(r[t]);for(let i in n)e[i]=n[i]}return e}function Cc(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}var Cu={clone:nr,merge:Zt},An=class extends hi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=nr(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let i=0;i<t.length;i++)n.push(t[i].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Dr=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=Ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ti=new C,_h=new xe,xh=new xe,jt=class extends Dr{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Ua*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Ra*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Ua*Math.atan(Math.tan(.5*Ra*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,t){return this.getViewBounds(e,_h,xh),t.subVectors(xh,_h)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Ra*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Sr=-90,Ba=class extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new jt(Sr,1,e,t);i.layers=this.layers,this.add(i);let s=new jt(Sr,1,e,t);s.layers=this.layers,this.add(s);let a=new jt(Sr,1,e,t);a.layers=this.layers,this.add(a);let o=new jt(Sr,1,e,t);o.layers=this.layers,this.add(o);let l=new jt(Sr,1,e,t);l.layers=this.layers,this.add(l);let c=new jt(Sr,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===Ci)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==fs)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},ys=class extends Qt{constructor(e=[],t=301,n,i,s,a,o,l,c,h){super(e,t,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},za=class extends Vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ys(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new di(5,5,5),s=new An({name:"CubemapFromEquirect",uniforms:nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;let a=new qe(i,s),o=t.minFilter;return t.minFilter===Qi&&(t.minFilter=Gn),new Ba(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},qt=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Od={type:"move"},Ur=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),g=this._getHandJoint(c,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;c.inputState.pinching&&d>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Od)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new qt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Nr=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ka=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Da,this.updateRanges=[],this.version=0,this.uuid=oi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Kt=new C,Ms=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=On(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=On(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=On(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=On(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=On(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array),s=St(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Dt(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Fr=class extends hi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},br,os=new C,wr=new C,Tr=new C,Er=new xe,ls=new xe,Ru=new tt,va=new C,cs=new C,_a=new C,yh=new xe,wl=new xe,Mh=new xe,Ss=class extends Lt{constructor(e=new Fr){if(super(),this.isSprite=!0,this.type="Sprite",br===void 0){br=new Rt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ka(t,5);br.setIndex([0,1,2,0,2,3]),br.setAttribute("position",new Ms(n,3,0,!1)),br.setAttribute("uv",new Ms(n,2,3,!1))}this.geometry=br,this.material=e,this.center=new xe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),wr.setFromMatrixScale(this.matrixWorld),Ru.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Tr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&wr.multiplyScalar(-Tr.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let a=this.center;xa(va.set(-.5,-.5,0),Tr,a,wr,i,s),xa(cs.set(.5,-.5,0),Tr,a,wr,i,s),xa(_a.set(.5,.5,0),Tr,a,wr,i,s),yh.set(0,0),wl.set(1,0),Mh.set(1,1);let o=e.ray.intersectTriangle(va,cs,_a,!1,os);if(o===null&&(xa(cs.set(-.5,.5,0),Tr,a,wr,i,s),wl.set(0,1),o=e.ray.intersectTriangle(va,_a,cs,!1,os),o===null))return;let l=e.ray.origin.distanceTo(os);l<e.near||l>e.far||t.push({distance:l,point:os.clone(),uv:Bn.getInterpolation(os,va,cs,_a,yh,wl,Mh,new xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function xa(r,e,t,n,i,s){Er.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(ls.x=s*Er.x-i*Er.y,ls.y=i*Er.x+s*Er.y):ls.copy(Er),r.copy(e),r.x+=ls.x,r.y+=ls.y,r.applyMatrix4(Ru)}var ff=new C,gf=new C;var vf=new C,_f=new Ct,xf=new Ct,yf=new C,Mf=new tt,Sf=new C,bf=new Tn,wf=new tt,Tf=new Xi;var Ef=new tt,Af=new tt;var Cf=new tt,Rf=new tt;var Pf=new wn,If=new tt,Lf=new qe,Df=new Tn;var Tl=new C,Bd=new C,zd=new nt,un=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Tl.subVectors(n,t).cross(Bd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Tl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||zd.getNormalMatrix(e),i=this.coplanarPoint(Tl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Vi=new Tn,kd=new xe(.5,.5),ya=new C,Ri=class{constructor(e=new un,t=new un,n=new un,i=new un,s=new un,a=new un){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],f=i[9],v=i[10],m=i[11],g=i[12],_=i[13],x=i[14],y=i[15];if(n[0].setComponents(l-s,d-c,m-p,y-g).normalize(),n[1].setComponents(l+s,d+c,m+p,y+g).normalize(),n[2].setComponents(l+a,d+h,m+f,y+_).normalize(),n[3].setComponents(l-a,d-h,m-f,y-_).normalize(),n[4].setComponents(l-o,d-u,m-v,y-x).normalize(),t===Ci)n[5].setComponents(l+o,d+u,m+v,y+x).normalize();else{if(t!==fs)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,u,v,x).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(e){Vi.center.set(0,0,0);let t=kd.distanceTo(e.center);return Vi.radius=.7071067811865476+t,Vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(ya.x=i.normal.x>0?e.max.x:e.min.x,ya.y=i.normal.y>0?e.max.y:e.min.y,ya.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ya)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Nn=new tt,Fn=new Ri,Ga=class r{constructor(){this.coordinateSystem=Ci}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(Nn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Fn.setFromProjectionMatrix(Nn,this.coordinateSystem),Fn.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(Nn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Fn.setFromProjectionMatrix(Nn,this.coordinateSystem),Fn.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(Nn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Fn.setFromProjectionMatrix(Nn,this.coordinateSystem),Fn.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(Nn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Fn.setFromProjectionMatrix(Nn,this.coordinateSystem),Fn.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let i=t.cameras[n];if(Nn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),Fn.setFromProjectionMatrix(Nn,this.coordinateSystem),Fn.containsPoint(e))return!0}return!1}clone(){return new r}};var Nl=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}},Uf=new tt,Nf=new Oe(1,1,1),Ff=new Ri,Of=new Ga,Bf=new wn,zf=new Tn,kf=new C,Gf=new C,Vf=new C,Hf=new Nl,Wf=new qe;var $f=new C,Xf=new C,jf=new tt,qf=new Xi,Yf=new Tn,Zf=new C,Jf=new C;var Kf=new C,Qf=new C;var eg=new tt,tg=new Xi,ng=new Tn,ig=new C;var ji=class extends Qt{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},bs=class extends Qt{constructor(e,t,n=1014,i,s,a,o=1003,l=1003,c,h=1026,u=1){if(h!==Gs&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:u},i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Va=class r extends Rt{constructor(e=1,t=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,p=2*u+d,f=2*n+s,v=i+1,m=new C,g=new C;for(let _=0;_<=f;_++){let x=0,y=0,T=0,E=0;if(_<=n){let B=_/n,H=B*Math.PI/2;y=-h-e*Math.cos(H),T=e*Math.sin(H),E=-e*Math.cos(H),x=B*u}else if(_<=n+s){let B=(_-n)/s;y=B*t-h,T=e,E=0,x=u+B*d}else{let B=(_-n-s)/n,H=B*Math.PI/2;y=h+e*Math.sin(H),T=e*Math.cos(H),E=e*Math.sin(H),x=u+d+B*u}let P=Math.max(0,Math.min(1,x/p)),O=0;_===0?O=.5/i:_===f&&(O=-.5/i);for(let B=0;B<=i;B++){let H=B/i,V=H*Math.PI*2,U=Math.sin(V),I=Math.cos(V);g.x=-T*I,g.y=y,g.z=T*U,o.push(g.x,g.y,g.z),m.set(-T*I,E,T*U),m.normalize(),l.push(m.x,m.y,m.z),c.push(H+O,P)}if(_>0){let B=(_-1)*v;for(let H=0;H<i;H++){let V=B+H,U=B+H+1,I=_*v+H,N=_*v+H+1;a.push(V,U,I),a.push(U,N,I)}}}this.setIndex(a),this.setAttribute("position",new Je(o,3)),this.setAttribute("normal",new Je(l,3)),this.setAttribute("uv",new Je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Pi=class r extends Rt{constructor(e=1,t=32,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new C,h=new xe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Je(a,3)),this.setAttribute("normal",new Je(o,3)),this.setAttribute("uv",new Je(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},pi=class r extends Rt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],p=[],f=0,v=[],m=n/2,g=0;function _(x){let y=f,T=new xe,E=new C,P=0,O=x===!0?e:t,B=x===!0?1:-1;for(let V=1;V<=i;V++)u.push(0,m*B,0),d.push(0,B,0),p.push(.5,.5),f++;let H=f;for(let V=0;V<=i;V++){let U=V/i*l+o,I=Math.cos(U),N=Math.sin(U);E.x=O*N,E.y=m*B,E.z=O*I,u.push(E.x,E.y,E.z),d.push(0,B,0),T.x=.5*I+.5,T.y=.5*N*B+.5,p.push(T.x,T.y),f++}for(let V=0;V<i;V++){let U=y+V,I=H+V;x===!0?h.push(I,I+1,U):h.push(I+1,I,U),P+=3}c.addGroup(g,P,x===!0?1:2),g+=P}(function(){let x=new C,y=new C,T=0,E=(t-e)/n;for(let P=0;P<=s;P++){let O=[],B=P/s,H=B*(t-e)+e;for(let V=0;V<=i;V++){let U=V/i,I=U*l+o,N=Math.sin(I),G=Math.cos(I);y.x=H*N,y.y=-B*n+m,y.z=H*G,u.push(y.x,y.y,y.z),x.set(N,E,G).normalize(),d.push(x.x,x.y,x.z),p.push(U,1-B),O.push(f++)}v.push(O)}for(let P=0;P<i;P++)for(let O=0;O<s;O++){let B=v[O][P],H=v[O+1][P],V=v[O+1][P+1],U=v[O][P+1];(e>0||O!==0)&&(h.push(B,H,U),T+=3),(t>0||O!==s-1)&&(h.push(H,V,U),T+=3)}c.addGroup(g,T,0),g+=T})(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Je(u,3)),this.setAttribute("normal",new Je(d,3)),this.setAttribute("uv",new Je(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ha=class r extends pi{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ii=class r extends Rt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];function o(p,f,v,m){let g=m+1,_=[];for(let x=0;x<=g;x++){_[x]=[];let y=p.clone().lerp(v,x/g),T=f.clone().lerp(v,x/g),E=g-x;for(let P=0;P<=E;P++)_[x][P]=P===0&&x===g?y:y.clone().lerp(T,P/E)}for(let x=0;x<g;x++)for(let y=0;y<2*(g-x)-1;y++){let T=Math.floor(y/2);y%2==0?(l(_[x][T+1]),l(_[x+1][T]),l(_[x][T])):(l(_[x][T+1]),l(_[x+1][T+1]),l(_[x+1][T]))}}function l(p){s.push(p.x,p.y,p.z)}function c(p,f){let v=3*p;f.x=e[v+0],f.y=e[v+1],f.z=e[v+2]}function h(p,f,v,m){m<0&&p.x===1&&(a[f]=p.x-1),v.x===0&&v.z===0&&(a[f]=m/2/Math.PI+.5)}function u(p){return Math.atan2(p.z,-p.x)}function d(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}(function(p){let f=new C,v=new C,m=new C;for(let g=0;g<t.length;g+=3)c(t[g+0],f),c(t[g+1],v),c(t[g+2],m),o(f,v,m,p)})(i),(function(p){let f=new C;for(let v=0;v<s.length;v+=3)f.x=s[v+0],f.y=s[v+1],f.z=s[v+2],f.normalize().multiplyScalar(p),s[v+0]=f.x,s[v+1]=f.y,s[v+2]=f.z})(n),(function(){let p=new C;for(let f=0;f<s.length;f+=3){p.x=s[f+0],p.y=s[f+1],p.z=s[f+2];let v=u(p)/2/Math.PI+.5,m=d(p)/Math.PI+.5;a.push(v,1-m)}(function(){let f=new C,v=new C,m=new C,g=new C,_=new xe,x=new xe,y=new xe;for(let T=0,E=0;T<s.length;T+=9,E+=6){f.set(s[T+0],s[T+1],s[T+2]),v.set(s[T+3],s[T+4],s[T+5]),m.set(s[T+6],s[T+7],s[T+8]),_.set(a[E+0],a[E+1]),x.set(a[E+2],a[E+3]),y.set(a[E+4],a[E+5]),g.copy(f).add(v).add(m).divideScalar(3);let P=u(g);h(_,E+0,f,P),h(x,E+2,v,P),h(y,E+4,m,P)}})(),(function(){for(let f=0;f<a.length;f+=6){let v=a[f+0],m=a[f+2],g=a[f+4],_=Math.max(v,m,g),x=Math.min(v,m,g);_>.9&&x<.1&&(v<.2&&(a[f+0]+=1),m<.2&&(a[f+2]+=1),g<.2&&(a[f+4]+=1))}})()})(),this.setAttribute("position",new Je(s,3)),this.setAttribute("normal",new Je(s.slice(),3)),this.setAttribute("uv",new Je(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},Wa=class r extends Ii{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Ma=new C,Sa=new C,El=new C,ba=new Bn,$a=class extends Rt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(Ra*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let f=0;f<l;f+=3){a?(c[0]=a.getX(f),c[1]=a.getX(f+1),c[2]=a.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:v,b:m,c:g}=ba;if(v.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),ba.getNormal(El),u[0]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let _=0;_<3;_++){let x=(_+1)%3,y=u[_],T=u[x],E=ba[h[_]],P=ba[h[x]],O=`${y}_${T}`,B=`${T}_${y}`;B in d&&d[B]?(El.dot(d[B].normal)<=s&&(p.push(E.x,E.y,E.z),p.push(P.x,P.y,P.z)),d[B]=null):O in d||(d[O]={index0:c[_],index1:c[x],normal:El.clone()})}}for(let f in d)if(d[f]){let{index0:v,index1:m}=d[f];Ma.fromBufferAttribute(o,v),Sa.fromBufferAttribute(o,m),p.push(Ma.x,Ma.y,Ma.z),p.push(Sa.x,Sa.y,Sa.z)}this.setAttribute("position",new Je(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},pn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,s=n.length,a;a=t||e*n[s-1];let o,l=0,c=s-1;for(;l<=c;)if(i=Math.floor(l+(c-l)/2),o=n[i]-a,o<0)l=i+1;else{if(!(o>0)){c=i;break}c=i-1}if(i=c,n[i]===a)return i/(s-1);let h=n[i];return(i+(a-h)/(n[i+1]-h))/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new xe:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new C,i=[],s=[],a=[],o=new C,l=new tt;for(let p=0;p<=e;p++){let f=p/e;i[p]=this.getTangentAt(f,new C)}s[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(lt(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(lt(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(l.makeRotationAxis(i[f],p*f)),a[f].crossVectors(i[f],s[f])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Or=class extends pn{constructor(e=0,t=0,n=1,i=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new xe){let n=t,i=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(s=a?0:i),this.aClockwise!==!0||a||(s===i?s=-i:s-=i);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Xa=class extends Or{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Rc(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,i(a,o,d,p)},calc:function(s){let a=s*s;return r+e*s+t*a+n*(a*s)}}}var wa=new C,Al=new Rc,Cl=new Rc,Rl=new Rc,ja=class extends pn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new C){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=i[(c-1)%s]:(wa.subVectors(i[0],i[1]).add(i[0]),o=wa);let u=i[c%s],d=i[(c+1)%s];if(this.closed||c+2<s?l=i[(c+2)%s]:(wa.subVectors(i[s-1],i[s-2]).add(i[s-1]),l=wa),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(l),p);v<1e-4&&(v=1),f<1e-4&&(f=v),m<1e-4&&(m=v),Al.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,f,v,m),Cl.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,f,v,m),Rl.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,f,v,m)}else this.curveType==="catmullrom"&&(Al.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),Cl.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),Rl.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return n.set(Al.calc(h),Cl.calc(h),Rl.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new C().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Sh(r,e,t,n,i){let s=.5*(n-e),a=.5*(i-t),o=r*r;return(2*t-2*n+s+a)*(r*o)+(-3*t+3*n-2*s-a)*o+s*r+t}function us(r,e,t,n){return(function(i,s){let a=1-i;return a*a*s})(r,e)+(function(i,s){return 2*(1-i)*i*s})(r,t)+(function(i,s){return i*i*s})(r,n)}function ds(r,e,t,n,i){return(function(s,a){let o=1-s;return o*o*o*a})(r,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(r,t)+(function(s,a){return 3*(1-s)*s*s*a})(r,n)+(function(s,a){return s*s*s*a})(r,i)}var ws=class extends pn{constructor(e=new xe,t=new xe,n=new xe,i=new xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new xe){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ds(e,i.x,s.x,a.x,o.x),ds(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},qa=class extends pn{constructor(e=new C,t=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new C){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ds(e,i.x,s.x,a.x,o.x),ds(e,i.y,s.y,a.y,o.y),ds(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ts=class extends pn{constructor(e=new xe,t=new xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new xe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ya=class extends pn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Es=class extends pn{constructor(e=new xe,t=new xe,n=new xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new xe){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(us(e,i.x,s.x,a.x),us(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},As=class extends pn{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(us(e,i.x,s.x,a.x),us(e,i.y,s.y,a.y),us(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Cs=class extends pn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new xe){let n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Sh(o,l.x,c.x,h.x,u.x),Sh(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new xe().fromArray(i))}return this}},Za=Object.freeze({__proto__:null,ArcCurve:Xa,CatmullRomCurve3:ja,CubicBezierCurve:ws,CubicBezierCurve3:qa,EllipseCurve:Or,LineCurve:Ts,LineCurve3:Ya,QuadraticBezierCurve:Es,QuadraticBezierCurve3:As,SplineCurve:Cs}),Ja=class extends pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Za[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Za[i.type]().fromJSON(i))}return this}},Rs=class extends Ja{constructor(e){super(),this.type="Path",this.currentPoint=new xe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ts(this.currentPoint.clone(),new xe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new Es(this.currentPoint.clone(),new xe(e,t),new xe(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){let o=new ws(this.currentPoint.clone(),new xe(e,t),new xe(n,i),new xe(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Cs(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){let c=new Or(e,t,n,i,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},qi=class extends Rs{constructor(e){super(e),this.uuid=oi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Rs().fromJSON(i))}return this}};function Gd(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=bh(r,0,i,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=(function(h,u,d,p){let f=[];for(let v=0,m=u.length;v<m;v++){let g=bh(h,u[v]*p,v<m-1?u[v+1]*p:h.length,p,!1);g===g.next&&(g.steiner=!0),f.push(Yd(g))}f.sort(Xd);for(let v=0;v<f.length;v++)d=jd(f[v],d);return d})(r,e,s,t)),r.length>80*t){o=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=t;d<i;d+=t){let p=r[d],f=r[d+1];p<o&&(o=p),f<l&&(l=f),p>h&&(h=p),f>u&&(u=f)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Ps(s,a,t,o,l,c,0),a}function bh(r,e,t,n,i){let s;if(i===(function(a,o,l,c){let h=0;for(let u=o,d=l-c;u<l;u+=c)h+=(a[d]-a[u])*(a[u+1]+a[d+1]),d=u;return h})(r,e,t,n)>0)for(let a=e;a<t;a+=n)s=wh(a/n|0,r[a],r[a+1],s);else for(let a=t-n;a>=e;a-=n)s=wh(a/n|0,r[a],r[a+1],s);return s&&Br(s,s.next)&&(Ls(s),s=s.next),s}function Yi(r,e){if(!r)return r;e||(e=r);let t,n=r;do if(t=!1,n.steiner||!Br(n,n.next)&&It(n.prev,n,n.next)!==0)n=n.next;else{if(Ls(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function Ps(r,e,t,n,i,s,a){if(!r)return;!a&&s&&(function(l,c,h,u){let d=l;do d.z===0&&(d.z=Fl(d.x,d.y,c,h,u)),d.prevZ=d.prev,d.nextZ=d.next,d=d.next;while(d!==l);d.prevZ.nextZ=null,d.prevZ=null,(function(p){let f,v=1;do{let m,g=p;p=null;let _=null;for(f=0;g;){f++;let x=g,y=0;for(let E=0;E<v&&(y++,x=x.nextZ,x);E++);let T=v;for(;y>0||T>0&&x;)y!==0&&(T===0||!x||g.z<=x.z)?(m=g,g=g.nextZ,y--):(m=x,x=x.nextZ,T--),_?_.nextZ=m:p=m,m.prevZ=_,_=m;g=x}_.nextZ=null,v*=2}while(f>1)})(d)})(r,n,i,s);let o=r;for(;r.prev!==r.next;){let l=r.prev,c=r.next;if(s?Hd(r,n,i,s):Vd(r))e.push(l.i,r.i,c.i),Ls(r),r=c.next,o=c.next;else if((r=c)===o){a?a===1?Ps(r=Wd(Yi(r),e),e,t,n,i,s,2):a===2&&$d(r,e,t,n,i,s):Ps(Yi(r),e,t,n,i,s,1);break}}}function Vd(r){let e=r.prev,t=r,n=r.next;if(It(e,t,n)>=0)return!1;let i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(i,s,a),u=Math.min(o,l,c),d=Math.max(i,s,a),p=Math.max(o,l,c),f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&hs(i,o,s,l,a,c,f.x,f.y)&&It(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Hd(r,e,t,n){let i=r.prev,s=r,a=r.next;if(It(i,s,a)>=0)return!1;let o=i.x,l=s.x,c=a.x,h=i.y,u=s.y,d=a.y,p=Math.min(o,l,c),f=Math.min(h,u,d),v=Math.max(o,l,c),m=Math.max(h,u,d),g=Fl(p,f,e,t,n),_=Fl(v,m,e,t,n),x=r.prevZ,y=r.nextZ;for(;x&&x.z>=g&&y&&y.z<=_;){if(x.x>=p&&x.x<=v&&x.y>=f&&x.y<=m&&x!==i&&x!==a&&hs(o,h,l,u,c,d,x.x,x.y)&&It(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=p&&y.x<=v&&y.y>=f&&y.y<=m&&y!==i&&y!==a&&hs(o,h,l,u,c,d,y.x,y.y)&&It(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=g;){if(x.x>=p&&x.x<=v&&x.y>=f&&x.y<=m&&x!==i&&x!==a&&hs(o,h,l,u,c,d,x.x,x.y)&&It(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=_;){if(y.x>=p&&y.x<=v&&y.y>=f&&y.y<=m&&y!==i&&y!==a&&hs(o,h,l,u,c,d,y.x,y.y)&&It(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Wd(r,e){let t=r;do{let n=t.prev,i=t.next.next;!Br(n,i)&&Iu(n,t,t.next,i)&&Is(n,i)&&Is(i,n)&&(e.push(n.i,t.i,i.i),Ls(t),Ls(t.next),t=r=i),t=t.next}while(t!==r);return Yi(t)}function $d(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Zd(a,o)){let l=Lu(a,o);return a=Yi(a,a.next),l=Yi(l,l.next),Ps(a,e,t,n,i,s,0),void Ps(l,e,t,n,i,s,0)}o=o.next}a=a.next}while(a!==r)}function Xd(r,e){let t=r.x-e.x;return t===0&&(t=r.y-e.y,t===0)&&(t=(r.next.y-r.y)/(r.next.x-r.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function jd(r,e){let t=(function(i,s){let a=s,o=i.x,l=i.y,c,h=-1/0;if(Br(i,a))return a;do{if(Br(i,a.next))return a.next;if(l<=a.y&&l>=a.next.y&&a.next.y!==a.y){let v=a.x+(l-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(v<=o&&v>h&&(h=v,c=a.x<a.next.x?a:a.next,v===o))return c}a=a.next}while(a!==s);if(!c)return null;let u=c,d=c.x,p=c.y,f=1/0;a=c;do{if(o>=a.x&&a.x>=d&&o!==a.x&&Pu(l<p?o:h,l,d,p,l<p?h:o,l,a.x,a.y)){let v=Math.abs(l-a.y)/(o-a.x);Is(a,i)&&(v<f||v===f&&(a.x>c.x||a.x===c.x&&qd(c,a)))&&(c=a,f=v)}a=a.next}while(a!==u);return c})(r,e);if(!t)return e;let n=Lu(t,r);return Yi(n,n.next),Yi(t,t.next)}function qd(r,e){return It(r.prev,r,e.prev)<0&&It(e.next,r,r.next)<0}function Fl(r,e,t,n,i){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*i|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*i|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function Yd(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Pu(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function hs(r,e,t,n,i,s,a,o){return!(r===a&&e===o)&&Pu(r,e,t,n,i,s,a,o)}function Zd(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!(function(t,n){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==n.i&&i.next.i!==n.i&&Iu(i,i.next,t,n))return!0;i=i.next}while(i!==t);return!1})(r,e)&&(Is(r,e)&&Is(e,r)&&(function(t,n){let i=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do i.y>o!=i.next.y>o&&i.next.y!==i.y&&a<(i.next.x-i.x)*(o-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==t);return s})(r,e)&&(It(r.prev,r,e.prev)||It(r,e.prev,e))||Br(r,e)&&It(r.prev,r,r.next)>0&&It(e.prev,e,e.next)>0)}function It(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Br(r,e){return r.x===e.x&&r.y===e.y}function Iu(r,e,t,n){let i=Ea(It(r,e,t)),s=Ea(It(r,e,n)),a=Ea(It(t,n,r)),o=Ea(It(t,n,e));return i!==s&&a!==o||!(i!==0||!Ta(r,t,e))||!(s!==0||!Ta(r,n,e))||!(a!==0||!Ta(t,r,n))||!(o!==0||!Ta(t,e,n))}function Ta(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Ea(r){return r>0?1:r<0?-1:0}function Is(r,e){return It(r.prev,r,r.next)<0?It(r,e,r.next)>=0&&It(r,r.prev,e)>=0:It(r,e,r.prev)<0||It(r,r.next,e)<0}function Lu(r,e){let t=Ol(r.i,r.x,r.y),n=Ol(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function wh(r,e,t,n){let i=Ol(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ls(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Ol(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}var Bl=class{static triangulate(e,t,n=2){return Gd(e,t,n)}},zn=class r{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return .5*n}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];Th(e),Eh(n,e);let a=e.length;t.forEach(Th);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,Eh(n,t[l]);let o=Bl.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Th(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Eh(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var zr=class r extends Rt{constructor(e=new qi([new xe(.5,.5),new xe(-.5,.5),new xe(-.5,-.5),new xe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:Jd,x,y,T,E,P,O=!1;g&&(x=g.getSpacedPoints(h),O=!0,d=!1,y=g.computeFrenetFrames(h,!1),T=new C,E=new C,P=new C),d||(m=0,p=0,f=0,v=0);let B=o.extractPoints(c),H=B.shape,V=B.holes;if(!zn.isClockWise(H)){H=H.reverse();for(let k=0,M=V.length;k<M;k++){let A=V[k];zn.isClockWise(A)&&(V[k]=A.reverse())}}function U(k){let M=10000000000000001e-36,A=k[0];for(let F=1;F<=k.length;F++){let D=F%k.length,X=k[D],J=X.x-A.x,W=X.y-A.y,oe=J*J+W*W,Ae=Math.max(Math.abs(X.x),Math.abs(X.y),Math.abs(A.x),Math.abs(A.y));oe<=M*Ae*Ae?(k.splice(D,1),F--):A=X}}U(H),V.forEach(U);let I=V.length,N=H;for(let k=0;k<I;k++){let M=V[k];H=H.concat(M)}function G(k,M,A){return M||console.error("THREE.ExtrudeGeometry: vec does not exist"),k.clone().addScaledVector(M,A)}let $=H.length;function ee(k,M,A){let F,D,X,J=k.x-M.x,W=k.y-M.y,oe=A.x-k.x,Ae=A.y-k.y,me=J*J+W*W,Ue=J*Ae-W*oe;if(Math.abs(Ue)>Number.EPSILON){let ue=Math.sqrt(me),ce=Math.sqrt(oe*oe+Ae*Ae),le=M.x-W/ue,we=M.y+J/ue,Le=((A.x-Ae/ce-le)*Ae-(A.y+oe/ce-we)*oe)/(J*Ae-W*oe);F=le+J*Le-k.x,D=we+W*Le-k.y;let re=F*F+D*D;if(re<=2)return new xe(F,D);X=Math.sqrt(re/2)}else{let ue=!1;J>Number.EPSILON?oe>Number.EPSILON&&(ue=!0):J<-Number.EPSILON?oe<-Number.EPSILON&&(ue=!0):Math.sign(W)===Math.sign(Ae)&&(ue=!0),ue?(F=-W,D=J,X=Math.sqrt(me)):(F=J,D=W,X=Math.sqrt(me/2))}return new xe(F/X,D/X)}let K=[];for(let k=0,M=N.length,A=M-1,F=k+1;k<M;k++,A++,F++)A===M&&(A=0),F===M&&(F=0),K[k]=ee(N[k],N[A],N[F]);let se=[],be,te,q=K.concat();for(let k=0,M=I;k<M;k++){let A=V[k];be=[];for(let F=0,D=A.length,X=D-1,J=F+1;F<D;F++,X++,J++)X===D&&(X=0),J===D&&(J=0),be[F]=ee(A[F],A[X],A[J]);se.push(be),q=q.concat(be)}if(m===0)te=zn.triangulateShape(N,V);else{let k=[],M=[];for(let A=0;A<m;A++){let F=A/m,D=p*Math.cos(F*Math.PI/2),X=f*Math.sin(F*Math.PI/2)+v;for(let J=0,W=N.length;J<W;J++){let oe=G(N[J],K[J],X);ae(oe.x,oe.y,-D),F===0&&k.push(oe)}for(let J=0,W=I;J<W;J++){let oe=V[J];be=se[J];let Ae=[];for(let me=0,Ue=oe.length;me<Ue;me++){let ue=G(oe[me],be[me],X);ae(ue.x,ue.y,-D),F===0&&Ae.push(ue)}F===0&&M.push(Ae)}}te=zn.triangulateShape(k,M)}let ie=te.length,de=f+v;for(let k=0;k<$;k++){let M=d?G(H[k],q[k],de):H[k];O?(E.copy(y.normals[0]).multiplyScalar(M.x),T.copy(y.binormals[0]).multiplyScalar(M.y),P.copy(x[0]).add(E).add(T),ae(P.x,P.y,P.z)):ae(M.x,M.y,0)}for(let k=1;k<=h;k++)for(let M=0;M<$;M++){let A=d?G(H[M],q[M],de):H[M];O?(E.copy(y.normals[k]).multiplyScalar(A.x),T.copy(y.binormals[k]).multiplyScalar(A.y),P.copy(x[k]).add(E).add(T),ae(P.x,P.y,P.z)):ae(A.x,A.y,u/h*k)}for(let k=m-1;k>=0;k--){let M=k/m,A=p*Math.cos(M*Math.PI/2),F=f*Math.sin(M*Math.PI/2)+v;for(let D=0,X=N.length;D<X;D++){let J=G(N[D],K[D],F);ae(J.x,J.y,u+A)}for(let D=0,X=V.length;D<X;D++){let J=V[D];be=se[D];for(let W=0,oe=J.length;W<oe;W++){let Ae=G(J[W],be[W],F);O?ae(Ae.x,Ae.y+x[h-1].y,x[h-1].x+A):ae(Ae.x,Ae.y,u+A)}}}function ge(k,M){let A=k.length;for(;--A>=0;){let F=A,D=A-1;D<0&&(D=k.length-1);for(let X=0,J=h+2*m;X<J;X++){let W=$*X,oe=$*(X+1);R(M+F+W,M+D+W,M+D+oe,M+F+oe)}}}function ae(k,M,A){l.push(k),l.push(M),l.push(A)}function Ge(k,M,A){S(k),S(M),S(A);let F=i.length/3,D=_.generateTopUV(n,i,F-3,F-2,F-1);z(D[0]),z(D[1]),z(D[2])}function R(k,M,A,F){S(k),S(M),S(F),S(M),S(A),S(F);let D=i.length/3,X=_.generateSideWallUV(n,i,D-6,D-3,D-2,D-1);z(X[0]),z(X[1]),z(X[3]),z(X[1]),z(X[2]),z(X[3])}function S(k){i.push(l[3*k+0]),i.push(l[3*k+1]),i.push(l[3*k+2])}function z(k){s.push(k.x),s.push(k.y)}(function(){let k=i.length/3;if(d){let M=0,A=$*M;for(let F=0;F<ie;F++){let D=te[F];Ge(D[2]+A,D[1]+A,D[0]+A)}M=h+2*m,A=$*M;for(let F=0;F<ie;F++){let D=te[F];Ge(D[0]+A,D[1]+A,D[2]+A)}}else{for(let M=0;M<ie;M++){let A=te[M];Ge(A[2],A[1],A[0])}for(let M=0;M<ie;M++){let A=te[M];Ge(A[0]+$*h,A[1]+$*h,A[2]+$*h)}}n.addGroup(k,i.length/3-k,0)})(),(function(){let k=i.length/3,M=0;ge(N,M),M+=N.length;for(let A=0,F=V.length;A<F;A++){let D=V[A];ge(D,M),M+=D.length}n.addGroup(k,i.length/3-k,1)})()}this.setAttribute("position",new Je(i,3)),this.setAttribute("uv",new Je(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,i){if(i.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];i.shapes.push(o.uuid)}else i.shapes.push(t.uuid);return i.options=Object.assign({},n),n.extrudePath!==void 0&&(i.options.extrudePath=n.extrudePath.toJSON()),i})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Za[i.type]().fromJSON(i)),new r(n,e.options)}},Jd={generateTopUV:function(r,e,t,n,i){let s=e[3*t],a=e[3*t+1],o=e[3*n],l=e[3*n+1],c=e[3*i],h=e[3*i+1];return[new xe(s,a),new xe(o,l),new xe(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*i],p=e[3*i+1],f=e[3*i+2],v=e[3*s],m=e[3*s+1],g=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new xe(a,1-l),new xe(c,1-u),new xe(d,1-f),new xe(v,1-g)]:[new xe(o,1-l),new xe(h,1-u),new xe(p,1-f),new xe(m,1-g)]}},Ka=class r extends Ii{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},kr=class r extends Rt{constructor(e=[new xe(0,-.5),new xe(.5,0),new xe(0,.5)],t=12,n=0,i=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=lt(i,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new C,d=new xe,p=new C,f=new C,v=new C,m=0,g=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,p.x=1*g,p.y=-m,p.z=0*g,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,p.x=1*g,p.y=-m,p.z=0*g,f.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(f)}for(let _=0;_<=t;_++){let x=n+_*h*i,y=Math.sin(x),T=Math.cos(x);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*y,u.y=e[E].y,u.z=e[E].x*T,a.push(u.x,u.y,u.z),d.x=_/t,d.y=E/(e.length-1),o.push(d.x,d.y);let P=l[3*E+0]*y,O=l[3*E+1],B=l[3*E+0]*T;c.push(P,O,B)}}for(let _=0;_<t;_++)for(let x=0;x<e.length-1;x++){let y=x+_*e.length,T=y,E=y+e.length,P=y+e.length+1,O=y+1;s.push(T,E,O),s.push(P,O,E)}this.setIndex(s),this.setAttribute("position",new Je(a,3)),this.setAttribute("uv",new Je(o,2)),this.setAttribute("normal",new Je(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},Qa=class r extends Ii{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Hn=class r extends Rt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,p=[],f=[],v=[],m=[];for(let g=0;g<h;g++){let _=g*d-a;for(let x=0;x<c;x++){let y=x*u-s;f.push(y,-_,0),v.push(0,0,1),m.push(x/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<o;_++){let x=_+c*g,y=_+c*(g+1),T=_+1+c*(g+1),E=_+1+c*g;p.push(x,y,E),p.push(y,T,E)}this.setIndex(p),this.setAttribute("position",new Je(f,3)),this.setAttribute("normal",new Je(v,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},eo=class r extends Rt{constructor(e=.5,t=1,n=32,i=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(i=Math.max(1,i)),p=new C,f=new xe;for(let v=0;v<=i;v++){for(let m=0;m<=n;m++){let g=s+m/n*a;p.x=u*Math.cos(g),p.y=u*Math.sin(g),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}u+=d}for(let v=0;v<i;v++){let m=v*(n+1);for(let g=0;g<n;g++){let _=g+m,x=_,y=_+n+1,T=_+n+2,E=_+1;o.push(x,y,E),o.push(y,T,E)}}this.setIndex(o),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(c,3)),this.setAttribute("uv",new Je(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},to=class r extends Rt{constructor(e=new qi([new xe(0,.5),new xe(-.5,-.5),new xe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=i.length/3,d=h.extractPoints(t),p=d.shape,f=d.holes;zn.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,g=f.length;m<g;m++){let _=f[m];zn.isClockWise(_)===!0&&(f[m]=_.reverse())}let v=zn.triangulateShape(p,f);for(let m=0,g=f.length;m<g;m++){let _=f[m];p=p.concat(_)}for(let m=0,g=p.length;m<g;m++){let _=p[m];i.push(_.x,_.y,0),s.push(0,0,1),a.push(_.x,_.y)}for(let m=0,g=v.length;m<g;m++){let _=v[m],x=_[0]+u,y=_[1]+u,T=_[2]+u;n.push(x,y,T),l+=3}}this.setIndex(n),this.setAttribute("position",new Je(i,3)),this.setAttribute("normal",new Je(s,3)),this.setAttribute("uv",new Je(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let a=t[i];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let i=0,s=e.shapes.length;i<s;i++){let a=t[e.shapes[i]];n.push(a)}return new r(n,e.curveSegments)}},mn=class r extends Rt{constructor(e=1,t=32,n=16,i=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new C,d=new C,p=[],f=[],v=[],m=[];for(let g=0;g<=n;g++){let _=[],x=g/n,y=0;g===0&&a===0?y=.5/t:g===n&&l===Math.PI&&(y=-.5/t);for(let T=0;T<=t;T++){let E=T/t;u.x=-e*Math.cos(i+E*s)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(i+E*s)*Math.sin(a+x*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(E+y,1-x),_.push(c++)}h.push(_)}for(let g=0;g<n;g++)for(let _=0;_<t;_++){let x=h[g][_+1],y=h[g][_],T=h[g+1][_],E=h[g+1][_+1];(g!==0||a>0)&&p.push(x,y,E),(g!==n-1||l<Math.PI)&&p.push(y,T,E)}this.setIndex(p),this.setAttribute("position",new Je(f,3)),this.setAttribute("normal",new Je(v,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},no=class r extends Ii{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Cn=class r extends Rt{constructor(e=1,t=.4,n=12,i=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new C,u=new C,d=new C;for(let p=0;p<=n;p++)for(let f=0;f<=i;f++){let v=f/i*s,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(f/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let f=1;f<=i;f++){let v=(i+1)*p+f-1,m=(i+1)*(p-1)+f-1,g=(i+1)*(p-1)+f,_=(i+1)*p+f;a.push(v,m,_),a.push(m,g,_)}this.setIndex(a),this.setAttribute("position",new Je(o,3)),this.setAttribute("normal",new Je(l,3)),this.setAttribute("uv",new Je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},io=class r extends Rt{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],l=[],c=[],h=[],u=new C,d=new C,p=new C,f=new C,v=new C,m=new C,g=new C;for(let x=0;x<=n;++x){let y=x/n*s*Math.PI*2;_(y,s,a,e,p),_(y+.01,s,a,e,f),m.subVectors(f,p),g.addVectors(f,p),v.crossVectors(m,g),g.crossVectors(v,m),v.normalize(),g.normalize();for(let T=0;T<=i;++T){let E=T/i*Math.PI*2,P=-t*Math.cos(E),O=t*Math.sin(E);u.x=p.x+(P*g.x+O*v.x),u.y=p.y+(P*g.y+O*v.y),u.z=p.z+(P*g.z+O*v.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(x/n),h.push(T/i)}}for(let x=1;x<=n;x++)for(let y=1;y<=i;y++){let T=(i+1)*(x-1)+(y-1),E=(i+1)*x+(y-1),P=(i+1)*x+y,O=(i+1)*(x-1)+y;o.push(T,E,O),o.push(E,P,O)}function _(x,y,T,E,P){let O=Math.cos(x),B=Math.sin(x),H=T/y*x,V=Math.cos(H);P.x=E*(2+V)*.5*O,P.y=E*(2+V)*B*.5,P.z=E*Math.sin(H)*.5}this.setIndex(o),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(c,3)),this.setAttribute("uv",new Je(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},ro=class r extends Rt{constructor(e=new As(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new C,l=new C,c=new xe,h=new C,u=[],d=[],p=[],f=[];function v(m){h=e.getPointAt(m/t,h);let g=a.normals[m],_=a.binormals[m];for(let x=0;x<=i;x++){let y=x/i*Math.PI*2,T=Math.sin(y),E=-Math.cos(y);l.x=E*g.x+T*_.x,l.y=E*g.y+T*_.y,l.z=E*g.z+T*_.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let m=0;m<t;m++)v(m);v(s===!1?t:0),(function(){for(let m=0;m<=t;m++)for(let g=0;g<=i;g++)c.x=m/t,c.y=g/i,p.push(c.x,c.y)})(),(function(){for(let m=1;m<=t;m++)for(let g=1;g<=i;g++){let _=(i+1)*(m-1)+(g-1),x=(i+1)*m+(g-1),y=(i+1)*m+g,T=(i+1)*(m-1)+g;f.push(_,x,T),f.push(x,y,T)}})()})(),this.setIndex(f),this.setAttribute("position",new Je(u,3)),this.setAttribute("normal",new Je(d,3)),this.setAttribute("uv",new Je(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new Za[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},so=class extends Rt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new C,s=new C;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,f=d+u.count;p<f;p+=3)for(let v=0;v<3;v++){let m=o.getX(p+v),g=o.getX(p+(v+1)%3);i.fromBufferAttribute(a,m),s.fromBufferAttribute(a,g),Ah(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;i.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),Ah(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Je(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Ah(r,e,t){let n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)!==!0&&t.has(i)!==!0&&(t.add(n),t.add(i),!0)}var rg=Object.freeze({__proto__:null,BoxGeometry:di,CapsuleGeometry:Va,CircleGeometry:Pi,ConeGeometry:Ha,CylinderGeometry:pi,DodecahedronGeometry:Wa,EdgesGeometry:$a,ExtrudeGeometry:zr,IcosahedronGeometry:Ka,LatheGeometry:kr,OctahedronGeometry:Qa,PlaneGeometry:Hn,PolyhedronGeometry:Ii,RingGeometry:eo,ShapeGeometry:to,SphereGeometry:mn,TetrahedronGeometry:no,TorusGeometry:Cn,TorusKnotGeometry:io,TubeGeometry:ro,WireframeGeometry:so});var fn=class extends hi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Nt=class extends fn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ao=class extends hi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},oo=class extends hi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Aa(r,e){return r&&r.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r):r}function Kd(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Zi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},lo=class extends Zi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ll,endingEnd:Ll}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Dl:s=e,o=2*t-n;break;case Ul:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Dl:a=e,l=2*n-t;break;case Ul:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=.5*(n-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(n-t)/(i-t),v=f*f,m=v*f,g=-d*m+2*d*v-d*f,_=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*f+1,x=(-1-p)*m+(1.5+p)*v+.5*f,y=p*m-p*v;for(let T=0;T!==o;++T)s[T]=g*a[h+T]+_*a[c+T]+x*a[l+T]+y*a[u+T];return s}},co=class extends Zi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},ho=class extends Zi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},dn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Aa(t,this.TimeBufferType),this.values=Aa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Aa(e.times,Array),values:Aa(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new co(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new lo(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ps:t=this.InterpolantFactoryMethodDiscrete;break;case La:t=this.InterpolantFactoryMethodLinear;break;case Ca:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ps;case this.InterpolantFactoryMethodLinear:return La;case this.InterpolantFactoryMethodSmooth:return Ca}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Kd(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ca,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(i)l=!0;else{let h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){let f=t[h+p];if(f!==t[u+p]||f!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};dn.prototype.ValueTypeName="",dn.prototype.TimeBufferType=Float32Array,dn.prototype.ValueBufferType=Float32Array,dn.prototype.DefaultInterpolation=La;var Ei=class extends dn{constructor(e,t,n){super(e,t,n)}};Ei.prototype.ValueTypeName="bool",Ei.prototype.ValueBufferType=Array,Ei.prototype.DefaultInterpolation=ps,Ei.prototype.InterpolantFactoryMethodLinear=void 0,Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var uo=class extends dn{constructor(e,t,n,i){super(e,t,n,i)}};uo.prototype.ValueTypeName="color";var po=class extends dn{constructor(e,t,n,i){super(e,t,n,i)}};po.prototype.ValueTypeName="number";var mo=class extends Zi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)bn.slerpFlat(s,0,a,c-o,a,c,l);return s}},Ds=class extends dn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new mo(this.times,this.values,this.getValueSize(),e)}};Ds.prototype.ValueTypeName="quaternion",Ds.prototype.InterpolantFactoryMethodSmooth=void 0;var Ai=class extends dn{constructor(e,t,n){super(e,t,n)}};Ai.prototype.ValueTypeName="string",Ai.prototype.ValueBufferType=Array,Ai.prototype.DefaultInterpolation=ps,Ai.prototype.InterpolantFactoryMethodLinear=void 0,Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var fo=class extends dn{constructor(e,t,n,i){super(e,t,n,i)}};fo.prototype.ValueTypeName="vector";var Pa={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},go=class{constructor(e,t,n){let i=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,a===!1&&i.onStart!==void 0&&i.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,l),o===l&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],f=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}},Du=new go,Gr=class{constructor(e){this.manager=e!==void 0?e:Du,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Gr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ar=new WeakMap,vo=class extends Gr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Pa.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=Ar.get(a);u===void 0&&(u=[],Ar.set(a,u)),u.push({onLoad:t,onError:i})}return a}let o=Ir("img");function l(){h(),t&&t(this);let u=Ar.get(this)||[];for(let d=0;d<u.length;d++){let p=u[d];p.onLoad&&p.onLoad(this)}Ar.delete(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),Pa.remove(`image:${e}`);let d=Ar.get(this)||[];for(let p=0;p<d.length;p++){let f=d[p];f.onError&&f.onError(u)}Ar.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Pa.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var Ji=class extends Gr{constructor(e){super(e)}load(e,t,n,i){let s=new Qt,a=new vo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},Us=class extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ns=class extends Us{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Pl=new tt,Ch=new C,Rh=new C,zl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.mapType=$n,this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ri,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ch.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ch),Rh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rh),t.updateMatrixWorld(),Pl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Pl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var sg=new tt,ag=new C,og=new C;var Fs=class extends Dr{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},kl=class extends zl{constructor(){super(new Fs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vr=class extends Us{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new kl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var lg=new tt,cg=new tt,hg=new tt;var _o=class extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var ug=new C,dg=new bn,pg=new C,mg=new C,fg=new C;var gg=new C,vg=new bn,_g=new C,xg=new C;var Pc="\\[\\]\\.:\\/",Qd=new RegExp("["+Pc+"]","g"),Il="[^"+Pc+"]",ep="[^"+Pc.replace("\\.","")+"]",tp=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Il)+/(WCOD+)?/.source.replace("WCOD",ep)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Il)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Il)+"$"),np=["material","materials","bones","map"],At=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Qd,"")}static parseTrackName(e){let t=tp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);np.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=class{constructor(r,e,t){let n=t||At.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,n)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray],At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yg=new Float32Array(1);var Mg=new tt;var Sg=new xe;var bg=new C,wg=new C;var Tg=new C;var Eg=new C,Ag=new tt,Cg=new tt;var Rg=new C,Pg=new Oe,Ig=new Oe;var Lg=new C,Dg=new C,Ug=new C;var Ng=new C,Fg=new Dr;var Og=new wn;var Bg=new C;function Ic(r,e,t,n){let i=(function(s){switch(s){case $n:case jl:return{byteLength:1,components:1};case $r:case ql:case Xr:return{byteLength:2,components:1};case Io:case Lo:return{byteLength:2,components:4};case er:case Po:case Xn:return{byteLength:4,components:1};case Yl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(n);switch(t){case 1021:return r*e;case Zl:case Do:return r*e/i.components*i.byteLength;case 1030:case 1031:return r*e*2/i.components*i.byteLength;case 1022:return r*e*3/i.components*i.byteLength;case Rn:case 1033:return r*e*4/i.components*i.byteLength;case 33776:case 33777:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(r,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(r,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37808:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(r/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(r/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"178"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="178");function id(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function rp(r){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=e.get(t);n&&(r.deleteBuffer(n.buffer),e.delete(t))},update:function(t,n){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let i=e.get(t);if(i===void 0)e.set(t,(function(s,a){let o=s.array,l=s.usage,c=o.byteLength,h=r.createBuffer(),u;if(r.bindBuffer(a,h),r.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)u=r.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)u=r.HALF_FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?r.HALF_FLOAT:r.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=r.SHORT;else if(o instanceof Uint32Array)u=r.UNSIGNED_INT;else if(o instanceof Int32Array)u=r.INT;else if(o instanceof Int8Array)u=r.BYTE;else if(o instanceof Uint8Array)u=r.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=r.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:c}})(t,n));else if(i.version<t.version){if(i.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let l=a.array,c=a.updateRanges;if(r.bindBuffer(o,s),c.length===0)r.bufferSubData(o,0,l);else{c.sort((u,d)=>u.start-d.start);let h=0;for(let u=1;u<c.length;u++){let d=c[h],p=c[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,c[h]=p)}c.length=h+1;for(let u=0,d=c.length;u<d;u++){let p=c[u];r.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(i.buffer,t,n),i.version=t.version}}}}var it={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},Ie={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},jn={basic:{uniforms:Zt([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:Zt([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Oe(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:Zt([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:Zt([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:Zt([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Oe(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:Zt([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:Zt([Ie.points,Ie.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:Zt([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:Zt([Ie.common,Ie.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:Zt([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:Zt([Ie.sprite,Ie.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:Zt([Ie.common,Ie.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:Zt([Ie.lights,Ie.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};jn.physical={uniforms:Zt([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};var zo={r:0,b:0,g:0},ir=new En,sp=new tt;function ap(r,e,t,n,i,s,a){let o=new Oe(0),l,c,h=s===!0?0:1,u=null,d=0,p=null;function f(m){let g=m.isScene===!0?m.background:null;return g&&g.isTexture&&(g=(m.backgroundBlurriness>0?t:e).get(g)),g}function v(m,g){m.getRGB(zo,Cc(r)),n.buffers.color.setClear(zo.r,zo.g,zo.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(m,g=1){o.set(m),h=g,v(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(m){h=m,v(o,h)},render:function(m){let g=!1,_=f(m);_===null?v(o,h):_&&_.isColor&&(v(_,1),g=!0);let x=r.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,a):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||g)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))},addToRenderList:function(m,g){let _=f(g);_&&(_.isCubeTexture||_.mapping===zs)?(c===void 0&&(c=new qe(new di(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:nr(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(x,y,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),ir.copy(g.backgroundRotation),ir.x*=-1,ir.y*=-1,ir.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ir.y*=-1,ir.z*=-1),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(sp.makeRotationFromEuler(ir)),c.material.toneMapped=pt.getTransfer(_.colorSpace)!==_t,u===_&&d===_.version&&p===r.toneMapping||(c.material.needsUpdate=!0,u=_,d=_.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new qe(new Hn(2,2),new An({name:"BackgroundMaterial",uniforms:nr(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.toneMapped=pt.getTransfer(_.colorSpace)!==_t,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),u===_&&d===_.version&&p===r.toneMapping||(l.material.needsUpdate=!0,u=_,d=_.version,p=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))},dispose:function(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}}}function op(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=c(null),s=i,a=!1;function o(g){return r.bindVertexArray(g)}function l(g){return r.deleteVertexArray(g)}function c(g){let _=[],x=[],y=[];for(let T=0;T<t;T++)_[T]=0,x[T]=0,y[T]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:_,enabledAttributes:x,attributeDivisors:y,object:g,attributes:{},index:null}}function h(){let g=s.newAttributes;for(let _=0,x=g.length;_<x;_++)g[_]=0}function u(g){d(g,0)}function d(g,_){let x=s.newAttributes,y=s.enabledAttributes,T=s.attributeDivisors;x[g]=1,y[g]===0&&(r.enableVertexAttribArray(g),y[g]=1),T[g]!==_&&(r.vertexAttribDivisor(g,_),T[g]=_)}function p(){let g=s.newAttributes,_=s.enabledAttributes;for(let x=0,y=_.length;x<y;x++)_[x]!==g[x]&&(r.disableVertexAttribArray(x),_[x]=0)}function f(g,_,x,y,T,E,P){P===!0?r.vertexAttribIPointer(g,_,x,T,E):r.vertexAttribPointer(g,_,x,y,T,E)}function v(){m(),a=!0,s!==i&&(s=i,o(s.object))}function m(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:function(g,_,x,y,T){let E=!1,P=(function(O,B,H){let V=H.wireframe===!0,U=n[O.id];U===void 0&&(U={},n[O.id]=U);let I=U[B.id];I===void 0&&(I={},U[B.id]=I);let N=I[V];return N===void 0&&(N=c(r.createVertexArray()),I[V]=N),N})(y,x,_);s!==P&&(s=P,o(s.object)),E=(function(O,B,H,V){let U=s.attributes,I=B.attributes,N=0,G=H.getAttributes();for(let $ in G)if(G[$].location>=0){let ee=U[$],K=I[$];if(K===void 0&&($==="instanceMatrix"&&O.instanceMatrix&&(K=O.instanceMatrix),$==="instanceColor"&&O.instanceColor&&(K=O.instanceColor)),ee===void 0||ee.attribute!==K||K&&ee.data!==K.data)return!0;N++}return s.attributesNum!==N||s.index!==V})(g,y,x,T),E&&(function(O,B,H,V){let U={},I=B.attributes,N=0,G=H.getAttributes();for(let $ in G)if(G[$].location>=0){let ee=I[$];ee===void 0&&($==="instanceMatrix"&&O.instanceMatrix&&(ee=O.instanceMatrix),$==="instanceColor"&&O.instanceColor&&(ee=O.instanceColor));let K={};K.attribute=ee,ee&&ee.data&&(K.data=ee.data),U[$]=K,N++}s.attributes=U,s.attributesNum=N,s.index=V})(g,y,x,T),T!==null&&e.update(T,r.ELEMENT_ARRAY_BUFFER),(E||a)&&(a=!1,(function(O,B,H,V){h();let U=V.attributes,I=H.getAttributes(),N=B.defaultAttributeValues;for(let G in I){let $=I[G];if($.location>=0){let ee=U[G];if(ee===void 0&&(G==="instanceMatrix"&&O.instanceMatrix&&(ee=O.instanceMatrix),G==="instanceColor"&&O.instanceColor&&(ee=O.instanceColor)),ee!==void 0){let K=ee.normalized,se=ee.itemSize,be=e.get(ee);if(be===void 0)continue;let te=be.buffer,q=be.type,ie=be.bytesPerElement,de=q===r.INT||q===r.UNSIGNED_INT||ee.gpuType===Po;if(ee.isInterleavedBufferAttribute){let ge=ee.data,ae=ge.stride,Ge=ee.offset;if(ge.isInstancedInterleavedBuffer){for(let R=0;R<$.locationSize;R++)d($.location+R,ge.meshPerAttribute);O.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let R=0;R<$.locationSize;R++)u($.location+R);r.bindBuffer(r.ARRAY_BUFFER,te);for(let R=0;R<$.locationSize;R++)f($.location+R,se/$.locationSize,q,K,ae*ie,(Ge+se/$.locationSize*R)*ie,de)}else{if(ee.isInstancedBufferAttribute){for(let ge=0;ge<$.locationSize;ge++)d($.location+ge,ee.meshPerAttribute);O.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ge=0;ge<$.locationSize;ge++)u($.location+ge);r.bindBuffer(r.ARRAY_BUFFER,te);for(let ge=0;ge<$.locationSize;ge++)f($.location+ge,se/$.locationSize,q,K,se*ie,se/$.locationSize*ge*ie,de)}}else if(N!==void 0){let K=N[G];if(K!==void 0)switch(K.length){case 2:r.vertexAttrib2fv($.location,K);break;case 3:r.vertexAttrib3fv($.location,K);break;case 4:r.vertexAttrib4fv($.location,K);break;default:r.vertexAttrib1fv($.location,K)}}}}p()})(g,_,x,y),T!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(T).buffer))},reset:v,resetDefaultState:m,dispose:function(){v();for(let g in n){let _=n[g];for(let x in _){let y=_[x];for(let T in y)l(y[T].object),delete y[T];delete _[x]}delete n[g]}},releaseStatesOfGeometry:function(g){if(n[g.id]===void 0)return;let _=n[g.id];for(let x in _){let y=_[x];for(let T in y)l(y[T].object),delete y[T];delete _[x]}delete n[g.id]},releaseStatesOfProgram:function(g){for(let _ in n){let x=n[_];if(x[g.id]===void 0)continue;let y=x[g.id];for(let T in y)l(y[T].object),delete y[T];delete x[g.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function lp(r,e,t){let n;function i(s,a,o){o!==0&&(r.drawArraysInstanced(n,s,a,o),t.update(a,n,o))}this.setMode=function(s){n=s},this.render=function(s,a){r.drawArrays(n,s,a),t.update(a,n,1)},this.renderInstances=i,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,s,0,a,0,o);let l=0;for(let c=0;c<o;c++)l+=a[c];t.update(l,n,1)},this.renderMultiDrawInstances=function(s,a,o,l){if(o===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<s.length;h++)i(s[h],a[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(n,s,0,a,0,l,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u]*l[u];t.update(h,n,1)}}}function cp(r,e,t,n){let i;function s(d){if(d==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=t.logarithmicDepthBuffer===!0,c=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let d=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:s,textureFormatReadable:function(d){return d===Rn||n.convert(d)===r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){let p=d===Xr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==$n&&n.convert(d)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==Xn&&!p)},precision:a,logarithmicDepthBuffer:l,reverseDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:r.getParameter(r.MAX_TEXTURE_SIZE),maxCubemapSize:r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:r.getParameter(r.MAX_VERTEX_ATTRIBS),maxVertexUniforms:r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:r.getParameter(r.MAX_VARYING_VECTORS),maxFragmentUniforms:r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:r.getParameter(r.MAX_SAMPLES)}}function hp(r){let e=this,t=null,n=0,i=!1,s=!1,a=new un,o=new nt,l={value:null,needsUpdate:!1};function c(h,u,d,p){let f=h!==null?h.length:0,v=null;if(f!==0){if(v=l.value,p!==!0||v===null){let m=d+4*f,g=u.matrixWorldInverse;o.getNormalMatrix(g),(v===null||v.length<m)&&(v=new Float32Array(m));for(let _=0,x=d;_!==f;++_,x+=4)a.copy(h[_]).applyMatrix4(g,o),a.normal.toArray(v,x),v[x+3]=a.constant}l.value=v,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,v}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||i;return i=u,n=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,f=h.clipIntersection,v=h.clipShadows,m=r.get(h);if(!i||p===null||p.length===0||s&&!v)s?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let g=s?0:n,_=4*g,x=m.clippingState||null;l.value=x,x=c(p,u,_,d);for(let y=0;y!==_;++y)x[y]=t[y];m.clippingState=x,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=g}}}function up(r){let e=new WeakMap;function t(i,s){return s===Ao?i.mapping=Wr:s===Co&&(i.mapping=Ki),i}function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping;if(s===Ao||s===Co){if(e.has(i))return t(e.get(i).texture,i.mapping);{let a=i.image;if(a&&a.height>0){let o=new za(a.height);return o.fromEquirectangularTexture(r,i),e.set(i,o),i.addEventListener("dispose",n),t(o.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}var Uu=[.125,.215,.35,.446,.526,.582],Hs=20,Lc=new Fs,Nu=new Oe,Dc=null,Uc=0,Nc=0,Fc=!1,sr=(1+Math.sqrt(5))/2,qr=1/sr,Fu=[new C(-sr,qr,0),new C(sr,qr,0),new C(-qr,0,sr),new C(qr,0,sr),new C(0,sr,-qr),new C(0,sr,qr),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],dp=new C,Zr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){let{size:a=256,position:o=dp}=s;Dc=this._renderer.getRenderTarget(),Uc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),Fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Dc,Uc,Nc),this._renderer.xr.enabled=Fc,e.scissorTest=!1,ko(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wr||e.mapping===Ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dc=this._renderer.getRenderTarget(),Uc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),Fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Xr,format:Rn,colorSpace:Wi,depthBuffer:!1},i=Ou(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ou(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],l=[],c=[],h=a,u=a-4+1+Uu.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);l.push(p);let f=1/p;d>a-4?f=Uu[d-a+4-1]:d===0&&(f=0),c.push(f);let v=1/(p-2),m=-v,g=1+v,_=[m,m,g,m,g,g,m,m,g,g,m,g],x=6,y=6,T=3,E=2,P=1,O=new Float32Array(T*y*x),B=new Float32Array(E*y*x),H=new Float32Array(P*y*x);for(let U=0;U<x;U++){let I=U%3*2/3-1,N=U>2?0:-1,G=[I,N,0,I+2/3,N,0,I+2/3,N+1,0,I,N,0,I+2/3,N+1,0,I,N+1,0];O.set(G,T*y*U),B.set(_,E*y*U);let $=[U,U,U,U,U,U];H.set($,P*y*U)}let V=new Rt;V.setAttribute("position",new Dt(O,T)),V.setAttribute("uv",new Dt(B,E)),V.setAttribute("faceIndex",new Dt(H,P)),o.push(V),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}})(s)),this._blurMaterial=(function(a,o,l){let c=new Float32Array(Hs),h=new C(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:Hs,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})})(s,e,t)}return i}_compileMaterial(e){let t=new qe(this._lodPlanes[0],e);this._renderer.compile(t,Lc)}_sceneToCubeUV(e,t,n,i,s){let a=new jt(90,1,t,n),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,u=c.toneMapping;c.getClearColor(Nu),c.toneMapping=mi,c.autoClear=!1;let d=new ui({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),p=new qe(new di,d),f=!1,v=e.background;v?v.isColor&&(d.color.copy(v),e.background=null,f=!0):(d.color.copy(Nu),f=!0);for(let m=0;m<6;m++){let g=m%3;g===0?(a.up.set(0,o[m],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x+l[m],s.y,s.z)):g===1?(a.up.set(0,0,o[m]),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y+l[m],s.z)):(a.up.set(0,o[m],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y,s.z+l[m]));let _=this._cubeSize;ko(i,g*_,m>2?_:0,_,_),c.setRenderTarget(i),f&&c.render(p,a),c.render(e,a)}p.geometry.dispose(),p.material.dispose(),c.toneMapping=u,c.autoClear=h,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Wr||e.mapping===Ki;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=zu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bu());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new qe(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;ko(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,Lc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Fu[(i-s-1)%Fu.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new qe(this._lodPlanes[i],c),u=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,f=s/p,v=isFinite(s)?1+Math.floor(3*f):Hs;v>Hs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to 20`);let m=[],g=0;for(let y=0;y<Hs;++y){let T=y/f,E=Math.exp(-T*T/2);m.push(E),y===0?g+=E:y<v&&(g+=2*E)}for(let y=0;y<m.length;y++)m[y]=m[y]/g;u.envMap.value=e.texture,u.samples.value=v,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=p,u.mipInt.value=_-n;let x=this._sizeLods[i];ko(t,3*x*(i>_-4?i-_+4:0),4*(this._cubeSize-x),3*x,2*x),l.setRenderTarget(t),l.render(h,Lc)}};function Ou(r,e,t){let n=new Vn(r,e,t);return n.texture.mapping=zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ko(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Bu(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function zu(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Xc(){return`

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
	`}function pp(r){let e=new WeakMap,t=null;function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping,a=s===Ao||s===Co,o=s===Wr||s===Ki;if(a||o){let l=e.get(i),c=l!==void 0?l.texture.pmremVersion:0;if(i.isRenderTargetTexture&&i.pmremVersion!==c)return t===null&&(t=new Zr(r)),l=a?t.fromEquirectangular(i,l):t.fromCubemap(i,l),l.texture.pmremVersion=i.pmremVersion,e.set(i,l),l.texture;if(l!==void 0)return l.texture;{let h=i.image;return a&&h&&h.height>0||o&&h&&(function(u){let d=0,p=6;for(let f=0;f<p;f++)u[f]!==void 0&&d++;return d===p})(h)?(t===null&&(t=new Zr(r)),l=a?t.fromEquirectangular(i):t.fromCubemap(i),l.texture.pmremVersion=i.pmremVersion,e.set(i,l),i.addEventListener("dispose",n),l.texture):null}}}return i},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function mp(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&$i("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function fp(r,e,t,n){let i={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);c.removeEventListener("dispose",a),delete i[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(h!==null){let v=h.array;d=h.version;for(let m=0,g=v.length;m<g;m+=3){let _=v[m+0],x=v[m+1],y=v[m+2];c.push(_,x,x,y,y,_)}}else{if(u===void 0)return;{let v=u.array;d=u.version;for(let m=0,g=v.length/3-1;m<g;m+=3){let _=m+0,x=m+1,y=m+2;c.push(_,x,x,y,y,_)}}}let p=new(Ac(c)?xs:_s)(c,1);p.version=d;let f=s.get(l);f&&e.remove(f),s.set(l,p)}return{get:function(l,c){return i[c.id]===!0||(c.addEventListener("dispose",a),i[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let h in c)e.update(c[h],r.ARRAY_BUFFER)},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function gp(r,e,t){let n,i,s;function a(o,l,c){c!==0&&(r.drawElementsInstanced(n,l,i,o*s,c),t.update(l,n,c))}this.setMode=function(o){n=o},this.setIndex=function(o){i=o.type,s=o.bytesPerElement},this.render=function(o,l){r.drawElements(n,l,i,o*s),t.update(l,n,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,l,0,i,o,0,c);let h=0;for(let u=0;u<c;u++)h+=l[u];t.update(h,n,1)},this.renderMultiDrawInstances=function(o,l,c,h){if(c===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/s,l[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(n,l,0,i,o,0,h,0,c);let d=0;for(let p=0;p<c;p++)d+=l[p]*h[p];t.update(d,n,1)}}}function vp(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,i){switch(e.calls++,n){case r.TRIANGLES:e.triangles+=i*(t/3);break;case r.LINES:e.lines+=i*(t/2);break;case r.LINE_STRIP:e.lines+=i*(t-1);break;case r.LINE_LOOP:e.lines+=i*t;break;case r.POINTS:e.points+=i*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function _p(r,e,t){let n=new WeakMap,i=new Ct;return{update:function(s,a,o){let l=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,u=n.get(a);if(u===void 0||u.count!==h){let O=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",O)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,v=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],g=a.morphAttributes.color||[],_=0;d===!0&&(_=1),p===!0&&(_=2),f===!0&&(_=3);let x=a.attributes.position.count*_,y=1;x>e.maxTextureSize&&(y=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let T=new Float32Array(x*y*4*h),E=new gs(T,x,y,h);E.type=Xn,E.needsUpdate=!0;let P=4*_;for(let B=0;B<h;B++){let H=v[B],V=m[B],U=g[B],I=x*y*4*B;for(let N=0;N<H.count;N++){let G=N*P;d===!0&&(i.fromBufferAttribute(H,N),T[I+G+0]=i.x,T[I+G+1]=i.y,T[I+G+2]=i.z,T[I+G+3]=0),p===!0&&(i.fromBufferAttribute(V,N),T[I+G+4]=i.x,T[I+G+5]=i.y,T[I+G+6]=i.z,T[I+G+7]=0),f===!0&&(i.fromBufferAttribute(U,N),T[I+G+8]=i.x,T[I+G+9]=i.y,T[I+G+10]=i.z,T[I+G+11]=U.itemSize===4?i.w:1)}}u={count:h,texture:E,size:new xe(x,y)},n.set(a,u),a.addEventListener("dispose",O)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let d=0;for(let f=0;f<l.length;f++)d+=l[f];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(r,"morphTargetBaseInfluence",p),o.getUniforms().setValue(r,"morphTargetInfluences",l)}o.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}}}function xp(r,e,t,n){let i=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,l=a.geometry,c=e.get(a,l);if(i.get(c)!==o&&(e.update(c),i.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),i.get(a)!==o&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;i.get(h)!==o&&(h.update(),i.set(h,o))}return c},dispose:function(){i=new WeakMap}}}var rd=new Qt,ku=new bs(1,1),sd=new gs,ad=new Oa,od=new ys,Gu=[],Vu=[],Hu=new Float32Array(16),Wu=new Float32Array(9),$u=new Float32Array(4);function Jr(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Gu[i];if(s===void 0&&(s=new Float32Array(i),Gu[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function kt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Gt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ho(r,e){let t=Vu[e];t===void 0&&(t=new Int32Array(e),Vu[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function yp(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Mp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;r.uniform2fv(this.addr,e),Gt(t,e)}}function Sp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;r.uniform3fv(this.addr,e),Gt(t,e)}}function bp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;r.uniform4fv(this.addr,e),Gt(t,e)}}function wp(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(kt(t,n))return;$u.set(n),r.uniformMatrix2fv(this.addr,!1,$u),Gt(t,n)}}function Tp(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(kt(t,n))return;Wu.set(n),r.uniformMatrix3fv(this.addr,!1,Wu),Gt(t,n)}}function Ep(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(kt(t,n))return;Hu.set(n),r.uniformMatrix4fv(this.addr,!1,Hu),Gt(t,n)}}function Ap(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Cp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;r.uniform2iv(this.addr,e),Gt(t,e)}}function Rp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;r.uniform3iv(this.addr,e),Gt(t,e)}}function Pp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;r.uniform4iv(this.addr,e),Gt(t,e)}}function Ip(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Lp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;r.uniform2uiv(this.addr,e),Gt(t,e)}}function Dp(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;r.uniform3uiv(this.addr,e),Gt(t,e)}}function Up(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;r.uniform4uiv(this.addr,e),Gt(t,e)}}function Np(r,e,t){let n=this.cache,i=t.allocateTextureUnit(),s;n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),this.type===r.SAMPLER_2D_SHADOW?(ku.compareFunction=Tc,s=ku):s=rd,t.setTexture2D(e||s,i)}function Fp(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ad,i)}function Op(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||od,i)}function Bp(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||sd,i)}function zp(r,e){r.uniform1fv(this.addr,e)}function kp(r,e){let t=Jr(e,this.size,2);r.uniform2fv(this.addr,t)}function Gp(r,e){let t=Jr(e,this.size,3);r.uniform3fv(this.addr,t)}function Vp(r,e){let t=Jr(e,this.size,4);r.uniform4fv(this.addr,t)}function Hp(r,e){let t=Jr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Wp(r,e){let t=Jr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function $p(r,e){let t=Jr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Xp(r,e){r.uniform1iv(this.addr,e)}function jp(r,e){r.uniform2iv(this.addr,e)}function qp(r,e){r.uniform3iv(this.addr,e)}function Yp(r,e){r.uniform4iv(this.addr,e)}function Zp(r,e){r.uniform1uiv(this.addr,e)}function Jp(r,e){r.uniform2uiv(this.addr,e)}function Kp(r,e){r.uniform3uiv(this.addr,e)}function Qp(r,e){r.uniform4uiv(this.addr,e)}function em(r,e,t){let n=this.cache,i=e.length,s=Ho(t,i);kt(n,s)||(r.uniform1iv(this.addr,s),Gt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||rd,s[a])}function tm(r,e,t){let n=this.cache,i=e.length,s=Ho(t,i);kt(n,s)||(r.uniform1iv(this.addr,s),Gt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||ad,s[a])}function nm(r,e,t){let n=this.cache,i=e.length,s=Ho(t,i);kt(n,s)||(r.uniform1iv(this.addr,s),Gt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||od,s[a])}function im(r,e,t){let n=this.cache,i=e.length,s=Ho(t,i);kt(n,s)||(r.uniform1iv(this.addr,s),Gt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||sd,s[a])}var Bc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(i){switch(i){case 5126:return yp;case 35664:return Mp;case 35665:return Sp;case 35666:return bp;case 35674:return wp;case 35675:return Tp;case 35676:return Ep;case 5124:case 35670:return Ap;case 35667:case 35671:return Cp;case 35668:case 35672:return Rp;case 35669:case 35673:return Pp;case 5125:return Ip;case 36294:return Lp;case 36295:return Dp;case 36296:return Up;case 35678:case 36198:case 36298:case 36306:case 35682:return Np;case 35679:case 36299:case 36307:return Fp;case 35680:case 36300:case 36308:case 36293:return Op;case 36289:case 36303:case 36311:case 36292:return Bp}})(t.type)}},zc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(i){switch(i){case 5126:return zp;case 35664:return kp;case 35665:return Gp;case 35666:return Vp;case 35674:return Hp;case 35675:return Wp;case 35676:return $p;case 5124:case 35670:return Xp;case 35667:case 35671:return jp;case 35668:case 35672:return qp;case 35669:case 35673:return Yp;case 5125:return Zp;case 36294:return Jp;case 36295:return Kp;case 36296:return Qp;case 35678:case 36198:case 36298:case 36306:case 35682:return em;case 35679:case 36299:case 36307:return tm;case 35680:case 36300:case 36308:case 36293:return nm;case 36289:case 36303:case 36311:case 36292:return im}})(t.type)}},kc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},Oc=/(\w+)(\])?(\[|\.)?/g;function Xu(r,e){r.seq.push(e),r.map[e.id]=e}function rm(r,e,t){let n=r.name,i=n.length;for(Oc.lastIndex=0;;){let s=Oc.exec(n),a=Oc.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===i){Xu(t,c===void 0?new Bc(o,r,e):new zc(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new kc(o),Xu(t,h)),t=h}}}var Yr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i);rm(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function ju(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var sm=0,qu=new nt;function Yu(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+(function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let f=p+1;h.push(`${f===l?">":" "} ${f}: ${c[p]}`)}return h.join(`
`)})(r.getShaderSource(e),a)}return i}function am(r,e){let t=(function(n){pt._getMatrix(qu,pt.workingColorSpace,n);let i=`mat3( ${qu.elements.map(s=>s.toFixed(4))} )`;switch(pt.getTransfer(n)){case ms:return[i,"LinearTransferOETF"];case _t:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[i,"LinearTransferOETF"]}})(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function om(r,e){let t;switch(e){case nu:t="Linear";break;case iu:t="Reinhard";break;case ru:t="Cineon";break;case su:t="ACESFilmic";break;case ou:t="AgX";break;case Eo:t="Neutral";break;case au:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Go=new C;function lm(){return pt.getLuminanceCoefficients(Go),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Go.x.toFixed(4)}, ${Go.y.toFixed(4)}, ${Go.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ws(r){return r!==""}function Zu(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ju(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var cm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gc(r){return r.replace(cm,um)}var hm=new Map;function um(r,e){let t=it[e];if(t===void 0){let n=hm.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=it[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return Gc(t)}var dm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ku(r){return r.replace(dm,pm)}function pm(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Qu(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function mm(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(V){let U="SHADOWMAP_TYPE_BASIC";return V.shadowMapType===Vl?U="SHADOWMAP_TYPE_PCF":V.shadowMapType===Lh?U="SHADOWMAP_TYPE_PCF_SOFT":V.shadowMapType===Wn&&(U="SHADOWMAP_TYPE_VSM"),U})(t),c=(function(V){let U="ENVMAP_TYPE_CUBE";if(V.envMap)switch(V.envMapMode){case Wr:case Ki:U="ENVMAP_TYPE_CUBE";break;case zs:U="ENVMAP_TYPE_CUBE_UV"}return U})(t),h=(function(V){let U="ENVMAP_MODE_REFLECTION";return V.envMap&&V.envMapMode===Ki&&(U="ENVMAP_MODE_REFRACTION"),U})(t),u=(function(V){let U="ENVMAP_BLENDING_NONE";if(V.envMap)switch(V.combine){case Qh:U="ENVMAP_BLENDING_MULTIPLY";break;case eu:U="ENVMAP_BLENDING_MIX";break;case tu:U="ENVMAP_BLENDING_ADD"}return U})(t),d=(function(V){let U=V.envMapCubeUVHeight;if(U===null)return null;let I=Math.log2(U)-2,N=1/U;return{texelWidth:1/(3*Math.max(Math.pow(2,I),112)),texelHeight:N,maxMip:I}})(t),p=(function(V){return[V.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",V.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ws).join(`
`)})(t),f=(function(V){let U=[];for(let I in V){let N=V[I];N!==!1&&U.push("#define "+I+" "+N)}return U.join(`
`)})(s),v=i.createProgram(),m,g,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Ws).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Ws).join(`
`),g.length>0&&(g+=`
`)):(m=[Qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),g=[Qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?it.tonemapping_pars_fragment:"",t.toneMapping!==mi?om("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,am("linearToOutputTexel",t.outputColorSpace),lm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ws).join(`
`)),a=Gc(a),a=Zu(a,t),a=Ju(a,t),o=Gc(o),o=Zu(o,t),o=Ju(o,t),a=Ku(a),o=Ku(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let x=_+m+a,y=_+g+o,T=ju(i,i.VERTEX_SHADER,x),E=ju(i,i.FRAGMENT_SHADER,y);function P(V){if(r.debug.checkShaderErrors){let U=i.getProgramInfoLog(v).trim(),I=i.getShaderInfoLog(T).trim(),N=i.getShaderInfoLog(E).trim(),G=!0,$=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(G=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,T,E);else{let ee=Yu(i,T,"vertex"),K=Yu(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+U+`
`+ee+`
`+K)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):I!==""&&N!==""||($=!1);$&&(V.diagnostics={runnable:G,programLog:U,vertexShader:{log:I,prefix:m},fragmentShader:{log:N,prefix:g}})}i.deleteShader(T),i.deleteShader(E),O=new Yr(i,v),B=(function(U,I){let N={},G=U.getProgramParameter(I,U.ACTIVE_ATTRIBUTES);for(let $=0;$<G;$++){let ee=U.getActiveAttrib(I,$),K=ee.name,se=1;ee.type===U.FLOAT_MAT2&&(se=2),ee.type===U.FLOAT_MAT3&&(se=3),ee.type===U.FLOAT_MAT4&&(se=4),N[K]={type:ee.type,location:U.getAttribLocation(I,K),locationSize:se}}return N})(i,v)}let O,B;i.attachShader(v,T),i.attachShader(v,E),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v),this.getUniforms=function(){return O===void 0&&P(this),O},this.getAttributes=function(){return B===void 0&&P(this),B};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=i.getProgramParameter(v,37297)),H},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sm++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=E,this}var fm=0,Vc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Hc(e),t.set(e,n)),n}},Hc=class{constructor(e){this.id=fm++,this.code=e,this.usedTimes=0}};function gm(r,e,t,n,i,s,a){let o=new vs,l=new Vc,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,p=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(m){return c.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,g,_,x,y){let T=x.fog,E=y.geometry,P=m.isMeshStandardMaterial?x.environment:null,O=(m.isMeshStandardMaterial?t:e).get(m.envMap||P),B=O&&O.mapping===zs?O.image.height:null,H=f[m.type];m.precision!==null&&(p=i.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let V=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,U=V!==void 0?V.length:0,I,N,G,$,ee=0;if(E.morphAttributes.position!==void 0&&(ee=1),E.morphAttributes.normal!==void 0&&(ee=2),E.morphAttributes.color!==void 0&&(ee=3),H){let xt=jn[H];I=xt.vertexShader,N=xt.fragmentShader}else I=m.vertexShader,N=m.fragmentShader,l.update(m),G=l.getVertexShaderID(m),$=l.getFragmentShaderID(m);let K=r.getRenderTarget(),se=r.state.buffers.depth.getReversed(),be=y.isInstancedMesh===!0,te=y.isBatchedMesh===!0,q=!!m.map,ie=!!m.matcap,de=!!O,ge=!!m.aoMap,ae=!!m.lightMap,Ge=!!m.bumpMap,R=!!m.normalMap,S=!!m.displacementMap,z=!!m.emissiveMap,k=!!m.metalnessMap,M=!!m.roughnessMap,A=m.anisotropy>0,F=m.clearcoat>0,D=m.dispersion>0,X=m.iridescence>0,J=m.sheen>0,W=m.transmission>0,oe=A&&!!m.anisotropyMap,Ae=F&&!!m.clearcoatMap,me=F&&!!m.clearcoatNormalMap,Ue=F&&!!m.clearcoatRoughnessMap,ue=X&&!!m.iridescenceMap,ce=X&&!!m.iridescenceThicknessMap,le=J&&!!m.sheenColorMap,we=J&&!!m.sheenRoughnessMap,Le=!!m.specularMap,re=!!m.specularColorMap,pe=!!m.specularIntensityMap,Ee=W&&!!m.transmissionMap,Re=W&&!!m.thicknessMap,ve=!!m.gradientMap,Ve=!!m.alphaMap,He=m.alphaTest>0,rt=!!m.alphaHash,ht=!!m.extensions,at=mi;m.toneMapped&&(K!==null&&K.isXRRenderTarget!==!0||(at=r.toneMapping));let L={shaderID:H,shaderType:m.type,shaderName:m.name,vertexShader:I,fragmentShader:N,defines:m.defines,customVertexShaderID:G,customFragmentShaderID:$,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:te,batchingColor:te&&y._colorsTexture!==null,instancing:be,instancingColor:be&&y.instanceColor!==null,instancingMorph:be&&y.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:K===null?r.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Wi,alphaToCoverage:!!m.alphaToCoverage,map:q,matcap:ie,envMap:de,envMapMode:de&&O.mapping,envMapCubeUVHeight:B,aoMap:ge,lightMap:ae,bumpMap:Ge,normalMap:R,displacementMap:d&&S,emissiveMap:z,normalMapObjectSpace:R&&m.normalMapType===fu,normalMapTangentSpace:R&&m.normalMapType===mu,metalnessMap:k,roughnessMap:M,anisotropy:A,anisotropyMap:oe,clearcoat:F,clearcoatMap:Ae,clearcoatNormalMap:me,clearcoatRoughnessMap:Ue,dispersion:D,iridescence:X,iridescenceMap:ue,iridescenceThicknessMap:ce,sheen:J,sheenColorMap:le,sheenRoughnessMap:we,specularMap:Le,specularColorMap:re,specularIntensityMap:pe,transmission:W,transmissionMap:Ee,thicknessMap:Re,gradientMap:ve,opaque:m.transparent===!1&&m.blending===Os&&m.alphaToCoverage===!1,alphaMap:Ve,alphaTest:He,alphaHash:rt,combine:m.combine,mapUv:q&&v(m.map.channel),aoMapUv:ge&&v(m.aoMap.channel),lightMapUv:ae&&v(m.lightMap.channel),bumpMapUv:Ge&&v(m.bumpMap.channel),normalMapUv:R&&v(m.normalMap.channel),displacementMapUv:S&&v(m.displacementMap.channel),emissiveMapUv:z&&v(m.emissiveMap.channel),metalnessMapUv:k&&v(m.metalnessMap.channel),roughnessMapUv:M&&v(m.roughnessMap.channel),anisotropyMapUv:oe&&v(m.anisotropyMap.channel),clearcoatMapUv:Ae&&v(m.clearcoatMap.channel),clearcoatNormalMapUv:me&&v(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&v(m.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&v(m.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&v(m.iridescenceThicknessMap.channel),sheenColorMapUv:le&&v(m.sheenColorMap.channel),sheenRoughnessMapUv:we&&v(m.sheenRoughnessMap.channel),specularMapUv:Le&&v(m.specularMap.channel),specularColorMapUv:re&&v(m.specularColorMap.channel),specularIntensityMapUv:pe&&v(m.specularIntensityMap.channel),transmissionMapUv:Ee&&v(m.transmissionMap.channel),thicknessMapUv:Re&&v(m.thicknessMap.channel),alphaMapUv:Ve&&v(m.alphaMap.channel),vertexTangents:!!E.attributes.tangent&&(R||A),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,pointsUvs:y.isPoints===!0&&!!E.attributes.uv&&(q||Ve),fog:!!T,useFog:m.fog===!0,fogExp2:!!T&&T.isFogExp2,flatShading:m.flatShading===!0&&m.wireframe===!1,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:se,skinning:y.isSkinnedMesh===!0,morphTargets:E.morphAttributes.position!==void 0,morphNormals:E.morphAttributes.normal!==void 0,morphColors:E.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ee,numDirLights:g.directional.length,numPointLights:g.point.length,numSpotLights:g.spot.length,numSpotLightMaps:g.spotLightMap.length,numRectAreaLights:g.rectArea.length,numHemiLights:g.hemi.length,numDirLightShadows:g.directionalShadowMap.length,numPointLightShadows:g.pointShadowMap.length,numSpotLightShadows:g.spotShadowMap.length,numSpotLightShadowsWithMaps:g.numSpotLightShadowsWithMaps,numLightProbes:g.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:r.shadowMap.enabled&&_.length>0,shadowMapType:r.shadowMap.type,toneMapping:at,decodeVideoTexture:q&&m.map.isVideoTexture===!0&&pt.getTransfer(m.map.colorSpace)===_t,decodeVideoTextureEmissive:z&&m.emissiveMap.isVideoTexture===!0&&pt.getTransfer(m.emissiveMap.colorSpace)===_t,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===zt,flipSided:m.side===Yt,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:ht&&m.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&m.extensions.multiDraw===!0||te)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return L.vertexUv1s=c.has(1),L.vertexUv2s=c.has(2),L.vertexUv3s=c.has(3),c.clear(),L},getProgramCacheKey:function(m){let g=[];if(m.shaderID?g.push(m.shaderID):(g.push(m.customVertexShaderID),g.push(m.customFragmentShaderID)),m.defines!==void 0)for(let _ in m.defines)g.push(_),g.push(m.defines[_]);return m.isRawShaderMaterial===!1&&((function(_,x){_.push(x.precision),_.push(x.outputColorSpace),_.push(x.envMapMode),_.push(x.envMapCubeUVHeight),_.push(x.mapUv),_.push(x.alphaMapUv),_.push(x.lightMapUv),_.push(x.aoMapUv),_.push(x.bumpMapUv),_.push(x.normalMapUv),_.push(x.displacementMapUv),_.push(x.emissiveMapUv),_.push(x.metalnessMapUv),_.push(x.roughnessMapUv),_.push(x.anisotropyMapUv),_.push(x.clearcoatMapUv),_.push(x.clearcoatNormalMapUv),_.push(x.clearcoatRoughnessMapUv),_.push(x.iridescenceMapUv),_.push(x.iridescenceThicknessMapUv),_.push(x.sheenColorMapUv),_.push(x.sheenRoughnessMapUv),_.push(x.specularMapUv),_.push(x.specularColorMapUv),_.push(x.specularIntensityMapUv),_.push(x.transmissionMapUv),_.push(x.thicknessMapUv),_.push(x.combine),_.push(x.fogExp2),_.push(x.sizeAttenuation),_.push(x.morphTargetsCount),_.push(x.morphAttributeCount),_.push(x.numDirLights),_.push(x.numPointLights),_.push(x.numSpotLights),_.push(x.numSpotLightMaps),_.push(x.numHemiLights),_.push(x.numRectAreaLights),_.push(x.numDirLightShadows),_.push(x.numPointLightShadows),_.push(x.numSpotLightShadows),_.push(x.numSpotLightShadowsWithMaps),_.push(x.numLightProbes),_.push(x.shadowMapType),_.push(x.toneMapping),_.push(x.numClippingPlanes),_.push(x.numClipIntersection),_.push(x.depthPacking)})(g,m),(function(_,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),x.gradientMap&&o.enable(22),_.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),_.push(o.mask)})(g,m),g.push(r.outputColorSpace)),g.push(m.customProgramCacheKey),g.join()},getUniforms:function(m){let g=f[m.type],_;if(g){let x=jn[g];_=Cu.clone(x.uniforms)}else _=m.uniforms;return _},acquireProgram:function(m,g){let _;for(let x=0,y=h.length;x<y;x++){let T=h[x];if(T.cacheKey===g){_=T,++_.usedTimes;break}}return _===void 0&&(_=new mm(r,g,m,s),h.push(_)),_},releaseProgram:function(m){if(--m.usedTimes===0){let g=h.indexOf(m);h[g]=h[h.length-1],h.pop(),m.destroy()}},releaseShaderCache:function(m){l.remove(m)},programs:h,dispose:function(){l.dispose()}}}function vm(){let r=new WeakMap;return{has:function(e){return r.has(e)},get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,n){r.get(e)[t]=n},dispose:function(){r=new WeakMap}}}function _m(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ed(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function td(){let r=[],e=0,t=[],n=[],i=[];function s(a,o,l,c,h,u){let d=r[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:u},r[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=c,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:i,init:function(){e=0,t.length=0,n.length=0,i.length=0},push:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.push(d):l.transparent===!0?i.push(d):t.push(d)},unshift:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.unshift(d):l.transparent===!0?i.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=r.length;a<o;a++){let l=r[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||_m),n.length>1&&n.sort(o||ed),i.length>1&&i.sort(o||ed)}}}function xm(){let r=new WeakMap;return{get:function(e,t){let n=r.get(e),i;return n===void 0?(i=new td,r.set(e,[i])):t>=n.length?(i=new td,n.push(i)):i=n[t],i},dispose:function(){r=new WeakMap}}}function ym(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Oe};break;case"SpotLight":t={position:new C,direction:new C,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new C,halfWidth:new C,halfHeight:new C}}return r[e.id]=t,t}}}var Mm=0;function Sm(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function bm(r){let e=new ym,t=(function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}})(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new C);let i=new C,s=new tt,a=new tt;return{setup:function(o){let l=0,c=0,h=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let u=0,d=0,p=0,f=0,v=0,m=0,g=0,_=0,x=0,y=0,T=0;o.sort(Sm);for(let P=0,O=o.length;P<O;P++){let B=o[P],H=B.color,V=B.intensity,U=B.distance,I=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)l+=H.r*V,c+=H.g*V,h+=H.b*V;else if(B.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(B.sh.coefficients[N],V);T++}else if(B.isDirectionalLight){let N=e.get(B);if(N.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let G=B.shadow,$=t.get(B);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,n.directionalShadow[u]=$,n.directionalShadowMap[u]=I,n.directionalShadowMatrix[u]=B.shadow.matrix,m++}n.directional[u]=N,u++}else if(B.isSpotLight){let N=e.get(B);N.position.setFromMatrixPosition(B.matrixWorld),N.color.copy(H).multiplyScalar(V),N.distance=U,N.coneCos=Math.cos(B.angle),N.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),N.decay=B.decay,n.spot[p]=N;let G=B.shadow;if(B.map&&(n.spotLightMap[x]=B.map,x++,G.updateMatrices(B),B.castShadow&&y++),n.spotLightMatrix[p]=G.matrix,B.castShadow){let $=t.get(B);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,n.spotShadow[p]=$,n.spotShadowMap[p]=I,_++}p++}else if(B.isRectAreaLight){let N=e.get(B);N.color.copy(H).multiplyScalar(V),N.halfWidth.set(.5*B.width,0,0),N.halfHeight.set(0,.5*B.height,0),n.rectArea[f]=N,f++}else if(B.isPointLight){let N=e.get(B);if(N.color.copy(B.color).multiplyScalar(B.intensity),N.distance=B.distance,N.decay=B.decay,B.castShadow){let G=B.shadow,$=t.get(B);$.shadowIntensity=G.intensity,$.shadowBias=G.bias,$.shadowNormalBias=G.normalBias,$.shadowRadius=G.radius,$.shadowMapSize=G.mapSize,$.shadowCameraNear=G.camera.near,$.shadowCameraFar=G.camera.far,n.pointShadow[d]=$,n.pointShadowMap[d]=I,n.pointShadowMatrix[d]=B.shadow.matrix,g++}n.point[d]=N,d++}else if(B.isHemisphereLight){let N=e.get(B);N.skyColor.copy(B.color).multiplyScalar(V),N.groundColor.copy(B.groundColor).multiplyScalar(V),n.hemi[v]=N,v++}}f>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ie.LTC_FLOAT_1,n.rectAreaLTC2=Ie.LTC_FLOAT_2):(n.rectAreaLTC1=Ie.LTC_HALF_1,n.rectAreaLTC2=Ie.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=c,n.ambient[2]=h;let E=n.hash;E.directionalLength===u&&E.pointLength===d&&E.spotLength===p&&E.rectAreaLength===f&&E.hemiLength===v&&E.numDirectionalShadows===m&&E.numPointShadows===g&&E.numSpotShadows===_&&E.numSpotMaps===x&&E.numLightProbes===T||(n.directional.length=u,n.spot.length=p,n.rectArea.length=f,n.point.length=d,n.hemi.length=v,n.directionalShadow.length=m,n.directionalShadowMap.length=m,n.pointShadow.length=g,n.pointShadowMap.length=g,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=m,n.pointShadowMatrix.length=g,n.spotLightMatrix.length=_+x-y,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=T,E.directionalLength=u,E.pointLength=d,E.spotLength=p,E.rectAreaLength=f,E.hemiLength=v,E.numDirectionalShadows=m,E.numPointShadows=g,E.numSpotShadows=_,E.numSpotMaps=x,E.numLightProbes=T,n.version=Mm++)},setupView:function(o,l){let c=0,h=0,u=0,d=0,p=0,f=l.matrixWorldInverse;for(let v=0,m=o.length;v<m;v++){let g=o[v];if(g.isDirectionalLight){let _=n.directional[c];_.direction.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(g.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(f),c++}else if(g.isSpotLight){let _=n.spot[u];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(f),_.direction.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(g.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(f),u++}else if(g.isRectAreaLight){let _=n.rectArea[d];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(f),a.identity(),s.copy(g.matrixWorld),s.premultiply(f),a.extractRotation(s),_.halfWidth.set(.5*g.width,0,0),_.halfHeight.set(0,.5*g.height,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),d++}else if(g.isPointLight){let _=n.point[h];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(f),h++}else if(g.isHemisphereLight){let _=n.hemi[p];_.direction.setFromMatrixPosition(g.matrixWorld),_.direction.transformDirection(f),p++}}},state:n}}function nd(r){let e=new bm(r),t=[],n=[],i={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){i.camera=s,t.length=0,n.length=0},state:i,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){n.push(s)}}}function wm(r){let e=new WeakMap;return{get:function(t,n=0){let i=e.get(t),s;return i===void 0?(s=new nd(r),e.set(t,[s])):n>=i.length?(s=new nd(r),i.push(s)):s=i[n],s},dispose:function(){e=new WeakMap}}}function Tm(r,e,t){let n=new Ri,i=new xe,s=new xe,a=new Ct,o=new ao({depthPacking:pu}),l=new oo,c={},h=t.maxTextureSize,u={[Li]:Yt,[Yt]:Li,[zt]:zt},d=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new Rt;f.setAttribute("position",new Dt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new qe(f,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vl;let g=this.type;function _(E,P){let O=e.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Vn(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(P,null,O,d,v,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(P,null,O,p,v,null)}function x(E,P,O,B){let H=null,V=O.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(V!==void 0)H=V;else if(H=O.isPointLight===!0?l:o,r.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let U=H.uuid,I=P.uuid,N=c[U];N===void 0&&(N={},c[U]=N);let G=N[I];G===void 0&&(G=H.clone(),N[I]=G,P.addEventListener("dispose",T)),H=G}return H.visible=P.visible,H.wireframe=P.wireframe,H.side=B===Wn?P.shadowSide!==null?P.shadowSide:P.side:P.shadowSide!==null?P.shadowSide:u[P.side],H.alphaMap=P.alphaMap,H.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,H.map=P.map,H.clipShadows=P.clipShadows,H.clippingPlanes=P.clippingPlanes,H.clipIntersection=P.clipIntersection,H.displacementMap=P.displacementMap,H.displacementScale=P.displacementScale,H.displacementBias=P.displacementBias,H.wireframeLinewidth=P.wireframeLinewidth,H.linewidth=P.linewidth,O.isPointLight===!0&&H.isMeshDistanceMaterial===!0&&(r.properties.get(H).light=O),H}function y(E,P,O,B,H){if(E.visible===!1)return;if(E.layers.test(P.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&H===Wn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,E.matrixWorld);let U=e.update(E),I=E.material;if(Array.isArray(I)){let N=U.groups;for(let G=0,$=N.length;G<$;G++){let ee=N[G],K=I[ee.materialIndex];if(K&&K.visible){let se=x(E,K,B,H);E.onBeforeShadow(r,E,P,O,U,se,ee),r.renderBufferDirect(O,null,U,se,E,ee),E.onAfterShadow(r,E,P,O,U,se,ee)}}}else if(I.visible){let N=x(E,I,B,H);E.onBeforeShadow(r,E,P,O,U,N,null),r.renderBufferDirect(O,null,U,N,E,null),E.onAfterShadow(r,E,P,O,U,N,null)}}let V=E.children;for(let U=0,I=V.length;U<I;U++)y(V[U],P,O,B,H)}function T(E){E.target.removeEventListener("dispose",T);for(let P in c){let O=c[P],B=E.target.uuid;B in O&&(O[B].dispose(),delete O[B])}}this.render=function(E,P,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let B=r.getRenderTarget(),H=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),U=r.state;U.setBlending(Di),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let I=g!==Wn&&this.type===Wn,N=g===Wn&&this.type!==Wn;for(let G=0,$=E.length;G<$;G++){let ee=E[G],K=ee.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;i.copy(K.mapSize);let se=K.getFrameExtents();if(i.multiply(se),s.copy(K.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/se.x),i.x=s.x*se.x,K.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/se.y),i.y=s.y*se.y,K.mapSize.y=s.y)),K.map===null||I===!0||N===!0){let te=this.type!==Wn?{minFilter:kn,magFilter:kn}:{};K.map!==null&&K.map.dispose(),K.map=new Vn(i.x,i.y,te),K.map.texture.name=ee.name+".shadowMap",K.camera.updateProjectionMatrix()}r.setRenderTarget(K.map),r.clear();let be=K.getViewportCount();for(let te=0;te<be;te++){let q=K.getViewport(te);a.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),U.viewport(a),K.updateMatrices(ee,te),n=K.getFrustum(),y(P,O,K.camera,ee,this.type)}K.isPointLightShadow!==!0&&this.type===Wn&&_(K,O),K.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(B,H,V)}}var Em={[xo]:yo,[Mo]:wo,[So]:To,[Bs]:bo,[yo]:xo,[wo]:Mo,[To]:So,[bo]:Bs};function Am(r,e){let t=new function(){let M=!1,A=new Ct,F=null,D=new Ct(0,0,0,0);return{setMask:function(X){F===X||M||(r.colorMask(X,X,X,X),F=X)},setLocked:function(X){M=X},setClear:function(X,J,W,oe,Ae){Ae===!0&&(X*=oe,J*=oe,W*=oe),A.set(X,J,W,oe),D.equals(A)===!1&&(r.clearColor(X,J,W,oe),D.copy(A))},reset:function(){M=!1,F=null,D.set(-1,0,0,0)}}},n=new function(){let M=!1,A=!1,F=null,D=null,X=null;return{setReversed:function(J){if(A!==J){let W=e.get("EXT_clip_control");J?W.clipControlEXT(W.LOWER_LEFT_EXT,W.ZERO_TO_ONE_EXT):W.clipControlEXT(W.LOWER_LEFT_EXT,W.NEGATIVE_ONE_TO_ONE_EXT),A=J;let oe=X;X=null,this.setClear(oe)}},getReversed:function(){return A},setTest:function(J){J?de(r.DEPTH_TEST):ge(r.DEPTH_TEST)},setMask:function(J){F===J||M||(r.depthMask(J),F=J)},setFunc:function(J){if(A&&(J=Em[J]),D!==J){switch(J){case xo:r.depthFunc(r.NEVER);break;case yo:r.depthFunc(r.ALWAYS);break;case Mo:r.depthFunc(r.LESS);break;case Bs:r.depthFunc(r.LEQUAL);break;case So:r.depthFunc(r.EQUAL);break;case bo:r.depthFunc(r.GEQUAL);break;case wo:r.depthFunc(r.GREATER);break;case To:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}D=J}},setLocked:function(J){M=J},setClear:function(J){X!==J&&(A&&(J=1-J),r.clearDepth(J),X=J)},reset:function(){M=!1,F=null,D=null,X=null,A=!1}}},i=new function(){let M=!1,A=null,F=null,D=null,X=null,J=null,W=null,oe=null,Ae=null;return{setTest:function(me){M||(me?de(r.STENCIL_TEST):ge(r.STENCIL_TEST))},setMask:function(me){A===me||M||(r.stencilMask(me),A=me)},setFunc:function(me,Ue,ue){F===me&&D===Ue&&X===ue||(r.stencilFunc(me,Ue,ue),F=me,D=Ue,X=ue)},setOp:function(me,Ue,ue){J===me&&W===Ue&&oe===ue||(r.stencilOp(me,Ue,ue),J=me,W=Ue,oe=ue)},setLocked:function(me){M=me},setClear:function(me){Ae!==me&&(r.clearStencil(me),Ae=me)},reset:function(){M=!1,A=null,F=null,D=null,X=null,J=null,W=null,oe=null,Ae=null}}},s=new WeakMap,a=new WeakMap,o={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,f=null,v=null,m=null,g=null,_=null,x=null,y=new Oe(0,0,0),T=0,E=!1,P=null,O=null,B=null,H=null,V=null,U=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),I=!1,N=0,G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(G)[1]),I=N>=1):G.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),I=N>=2);let $=null,ee={},K=r.getParameter(r.SCISSOR_BOX),se=r.getParameter(r.VIEWPORT),be=new Ct().fromArray(K),te=new Ct().fromArray(se);function q(M,A,F,D){let X=new Uint8Array(4),J=r.createTexture();r.bindTexture(M,J),r.texParameteri(M,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(M,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let W=0;W<F;W++)M===r.TEXTURE_3D||M===r.TEXTURE_2D_ARRAY?r.texImage3D(A,0,r.RGBA,1,1,D,0,r.RGBA,r.UNSIGNED_BYTE,X):r.texImage2D(A+W,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,X);return J}let ie={};function de(M){o[M]!==!0&&(r.enable(M),o[M]=!0)}function ge(M){o[M]!==!1&&(r.disable(M),o[M]=!1)}ie[r.TEXTURE_2D]=q(r.TEXTURE_2D,r.TEXTURE_2D,1),ie[r.TEXTURE_CUBE_MAP]=q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[r.TEXTURE_2D_ARRAY]=q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ie[r.TEXTURE_3D]=q(r.TEXTURE_3D,r.TEXTURE_3D,1,1),t.setClear(0,0,0,1),n.setClear(1),i.setClear(0),de(r.DEPTH_TEST),n.setFunc(Bs),S(!1),z(Gl),de(r.CULL_FACE),R(Di);let ae={[Hr]:r.FUNC_ADD,[Uh]:r.FUNC_SUBTRACT,[Nh]:r.FUNC_REVERSE_SUBTRACT};ae[Fh]=r.MIN,ae[Oh]=r.MAX;let Ge={[Bh]:r.ZERO,[zh]:r.ONE,[kh]:r.SRC_COLOR,[Vh]:r.SRC_ALPHA,[qh]:r.SRC_ALPHA_SATURATE,[Xh]:r.DST_COLOR,[Wh]:r.DST_ALPHA,[Gh]:r.ONE_MINUS_SRC_COLOR,[Hh]:r.ONE_MINUS_SRC_ALPHA,[jh]:r.ONE_MINUS_DST_COLOR,[$h]:r.ONE_MINUS_DST_ALPHA,[Yh]:r.CONSTANT_COLOR,[Zh]:r.ONE_MINUS_CONSTANT_COLOR,[Jh]:r.CONSTANT_ALPHA,[Kh]:r.ONE_MINUS_CONSTANT_ALPHA};function R(M,A,F,D,X,J,W,oe,Ae,me){if(M!==Di){if(d===!1&&(de(r.BLEND),d=!0),M===Dh)X=X||A,J=J||F,W=W||D,A===f&&X===g||(r.blendEquationSeparate(ae[A],ae[X]),f=A,g=X),F===v&&D===m&&J===_&&W===x||(r.blendFuncSeparate(Ge[F],Ge[D],Ge[J],Ge[W]),v=F,m=D,_=J,x=W),oe.equals(y)!==!1&&Ae===T||(r.blendColor(oe.r,oe.g,oe.b,Ae),y.copy(oe),T=Ae),p=M,E=!1;else if(M!==p||me!==E){if(f===Hr&&g===Hr||(r.blendEquation(r.FUNC_ADD),f=Hr,g=Hr),me)switch(M){case Os:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Hl:r.blendFunc(r.ONE,r.ONE);break;case Wl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case $l:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",M)}else switch(M){case Os:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Hl:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Wl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $l:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",M)}v=null,m=null,_=null,x=null,y.set(0,0,0),T=0,p=M,E=me}}else d===!0&&(ge(r.BLEND),d=!1)}function S(M){P!==M&&(M?r.frontFace(r.CW):r.frontFace(r.CCW),P=M)}function z(M){M!==Ph?(de(r.CULL_FACE),M!==O&&(M===Gl?r.cullFace(r.BACK):M===Ih?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ge(r.CULL_FACE),O=M}function k(M,A,F){M?(de(r.POLYGON_OFFSET_FILL),H===A&&V===F||(r.polygonOffset(A,F),H=A,V=F)):ge(r.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:n,stencil:i},enable:de,disable:ge,bindFramebuffer:function(M,A){return l[M]!==A&&(r.bindFramebuffer(M,A),l[M]=A,M===r.DRAW_FRAMEBUFFER&&(l[r.FRAMEBUFFER]=A),M===r.FRAMEBUFFER&&(l[r.DRAW_FRAMEBUFFER]=A),!0)},drawBuffers:function(M,A){let F=h,D=!1;if(M){F=c.get(A),F===void 0&&(F=[],c.set(A,F));let X=M.textures;if(F.length!==X.length||F[0]!==r.COLOR_ATTACHMENT0){for(let J=0,W=X.length;J<W;J++)F[J]=r.COLOR_ATTACHMENT0+J;F.length=X.length,D=!0}}else F[0]!==r.BACK&&(F[0]=r.BACK,D=!0);D&&r.drawBuffers(F)},useProgram:function(M){return u!==M&&(r.useProgram(M),u=M,!0)},setBlending:R,setMaterial:function(M,A){M.side===zt?ge(r.CULL_FACE):de(r.CULL_FACE);let F=M.side===Yt;A&&(F=!F),S(F),M.blending===Os&&M.transparent===!1?R(Di):R(M.blending,M.blendEquation,M.blendSrc,M.blendDst,M.blendEquationAlpha,M.blendSrcAlpha,M.blendDstAlpha,M.blendColor,M.blendAlpha,M.premultipliedAlpha),n.setFunc(M.depthFunc),n.setTest(M.depthTest),n.setMask(M.depthWrite),t.setMask(M.colorWrite);let D=M.stencilWrite;i.setTest(D),D&&(i.setMask(M.stencilWriteMask),i.setFunc(M.stencilFunc,M.stencilRef,M.stencilFuncMask),i.setOp(M.stencilFail,M.stencilZFail,M.stencilZPass)),k(M.polygonOffset,M.polygonOffsetFactor,M.polygonOffsetUnits),M.alphaToCoverage===!0?de(r.SAMPLE_ALPHA_TO_COVERAGE):ge(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:S,setCullFace:z,setLineWidth:function(M){M!==B&&(I&&r.lineWidth(M),B=M)},setPolygonOffset:k,setScissorTest:function(M){M?de(r.SCISSOR_TEST):ge(r.SCISSOR_TEST)},activeTexture:function(M){M===void 0&&(M=r.TEXTURE0+U-1),$!==M&&(r.activeTexture(M),$=M)},bindTexture:function(M,A,F){F===void 0&&(F=$===null?r.TEXTURE0+U-1:$);let D=ee[F];D===void 0&&(D={type:void 0,texture:void 0},ee[F]=D),D.type===M&&D.texture===A||($!==F&&(r.activeTexture(F),$=F),r.bindTexture(M,A||ie[M]),D.type=M,D.texture=A)},unbindTexture:function(){let M=ee[$];M!==void 0&&M.type!==void 0&&(r.bindTexture(M.type,null),M.type=void 0,M.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexImage3D:function(){try{r.compressedTexImage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texImage2D:function(){try{r.texImage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texImage3D:function(){try{r.texImage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},updateUBOMapping:function(M,A){let F=a.get(A);F===void 0&&(F=new WeakMap,a.set(A,F));let D=F.get(M);D===void 0&&(D=r.getUniformBlockIndex(A,M.name),F.set(M,D))},uniformBlockBinding:function(M,A){let F=a.get(A).get(M);s.get(A)!==F&&(r.uniformBlockBinding(A,F,M.__bindingPointIndex),s.set(A,F))},texStorage2D:function(){try{r.texStorage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texStorage3D:function(){try{r.texStorage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texSubImage2D:function(){try{r.texSubImage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},texSubImage3D:function(){try{r.texSubImage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D(...arguments)}catch(M){console.error("THREE.WebGLState:",M)}},scissor:function(M){be.equals(M)===!1&&(r.scissor(M.x,M.y,M.z,M.w),be.copy(M))},viewport:function(M){te.equals(M)===!1&&(r.viewport(M.x,M.y,M.z,M.w),te.copy(M))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),n.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),o={},$=null,ee={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,f=null,v=null,m=null,g=null,_=null,x=null,y=new Oe(0,0,0),T=0,E=!1,P=null,O=null,B=null,H=null,V=null,be.set(0,0,r.canvas.width,r.canvas.height),te.set(0,0,r.canvas.width,r.canvas.height),t.reset(),n.reset(),i.reset()}}}function Cm(r,e,t,n,i,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new xe,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(R,S){return p?new OffscreenCanvas(R,S):Ir("canvas")}function v(R,S,z){let k=1,M=Ge(R);if((M.width>z||M.height>z)&&(k=z/Math.max(M.width,M.height)),k<1){if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let A=Math.floor(k*M.width),F=Math.floor(k*M.height);u===void 0&&(u=f(A,F));let D=S?f(A,F):u;return D.width=A,D.height=F,D.getContext("2d").drawImage(R,0,0,A,F),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+A+"x"+F+")."),D}return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),R}return R}function m(R){return R.generateMipmaps}function g(R){r.generateMipmap(R)}function _(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(R,S,z,k,M=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let A=S;if(S===r.RED&&(z===r.FLOAT&&(A=r.R32F),z===r.HALF_FLOAT&&(A=r.R16F),z===r.UNSIGNED_BYTE&&(A=r.R8)),S===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(A=r.R8UI),z===r.UNSIGNED_SHORT&&(A=r.R16UI),z===r.UNSIGNED_INT&&(A=r.R32UI),z===r.BYTE&&(A=r.R8I),z===r.SHORT&&(A=r.R16I),z===r.INT&&(A=r.R32I)),S===r.RG&&(z===r.FLOAT&&(A=r.RG32F),z===r.HALF_FLOAT&&(A=r.RG16F),z===r.UNSIGNED_BYTE&&(A=r.RG8)),S===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(A=r.RG8UI),z===r.UNSIGNED_SHORT&&(A=r.RG16UI),z===r.UNSIGNED_INT&&(A=r.RG32UI),z===r.BYTE&&(A=r.RG8I),z===r.SHORT&&(A=r.RG16I),z===r.INT&&(A=r.RG32I)),S===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&(A=r.RGB8UI),z===r.UNSIGNED_SHORT&&(A=r.RGB16UI),z===r.UNSIGNED_INT&&(A=r.RGB32UI),z===r.BYTE&&(A=r.RGB8I),z===r.SHORT&&(A=r.RGB16I),z===r.INT&&(A=r.RGB32I)),S===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&(A=r.RGBA8UI),z===r.UNSIGNED_SHORT&&(A=r.RGBA16UI),z===r.UNSIGNED_INT&&(A=r.RGBA32UI),z===r.BYTE&&(A=r.RGBA8I),z===r.SHORT&&(A=r.RGBA16I),z===r.INT&&(A=r.RGBA32I)),S===r.RGB&&z===r.UNSIGNED_INT_5_9_9_9_REV&&(A=r.RGB9_E5),S===r.RGBA){let F=M?ms:pt.getTransfer(k);z===r.FLOAT&&(A=r.RGBA32F),z===r.HALF_FLOAT&&(A=r.RGBA16F),z===r.UNSIGNED_BYTE&&(A=F===_t?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&(A=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(A=r.RGB5_A1)}return A!==r.R16F&&A!==r.R32F&&A!==r.RG16F&&A!==r.RG32F&&A!==r.RGBA16F&&A!==r.RGBA32F||e.get("EXT_color_buffer_float"),A}function y(R,S){let z;return R?S===null||S===er||S===jr?z=r.DEPTH24_STENCIL8:S===Xn?z=r.DEPTH32F_STENCIL8:S===$r&&(z=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===er||S===jr?z=r.DEPTH_COMPONENT24:S===Xn?z=r.DEPTH_COMPONENT32F:S===$r&&(z=r.DEPTH_COMPONENT16),z}function T(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==kn&&R.minFilter!==Gn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function E(R){let S=R.target;S.removeEventListener("dispose",E),(function(z){let k=n.get(z);if(k.__webglInit===void 0)return;let M=z.source,A=d.get(M);if(A){let F=A[k.__cacheKey];F.usedTimes--,F.usedTimes===0&&O(z),Object.keys(A).length===0&&d.delete(M)}n.remove(z)})(S),S.isVideoTexture&&h.delete(S)}function P(R){let S=R.target;S.removeEventListener("dispose",P),(function(z){let k=n.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),n.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let A=0;A<6;A++){if(Array.isArray(k.__webglFramebuffer[A]))for(let F=0;F<k.__webglFramebuffer[A].length;F++)r.deleteFramebuffer(k.__webglFramebuffer[A][F]);else r.deleteFramebuffer(k.__webglFramebuffer[A]);k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer[A])}else{if(Array.isArray(k.__webglFramebuffer))for(let A=0;A<k.__webglFramebuffer.length;A++)r.deleteFramebuffer(k.__webglFramebuffer[A]);else r.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&r.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&r.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let A=0;A<k.__webglColorRenderbuffer.length;A++)k.__webglColorRenderbuffer[A]&&r.deleteRenderbuffer(k.__webglColorRenderbuffer[A]);k.__webglDepthRenderbuffer&&r.deleteRenderbuffer(k.__webglDepthRenderbuffer)}let M=z.textures;for(let A=0,F=M.length;A<F;A++){let D=n.get(M[A]);D.__webglTexture&&(r.deleteTexture(D.__webglTexture),a.memory.textures--),n.remove(M[A])}n.remove(z)})(S)}function O(R){let S=n.get(R);r.deleteTexture(S.__webglTexture);let z=R.source;delete d.get(z)[S.__cacheKey],a.memory.textures--}let B=0;function H(R,S){let z=n.get(R);if(R.isVideoTexture&&(function(k){let M=a.render.frame;h.get(k)!==M&&(h.set(k,M),k.update())})(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){let k=R.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(k.complete!==!1)return void ee(z,R,S);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+S)}let V={[Rr]:r.REPEAT,[Pr]:r.CLAMP_TO_EDGE,[Ia]:r.MIRRORED_REPEAT},U={[kn]:r.NEAREST,[lu]:r.NEAREST_MIPMAP_NEAREST,[ks]:r.NEAREST_MIPMAP_LINEAR,[Gn]:r.LINEAR,[Ro]:r.LINEAR_MIPMAP_NEAREST,[Qi]:r.LINEAR_MIPMAP_LINEAR},I={[gu]:r.NEVER,[Su]:r.ALWAYS,[vu]:r.LESS,[Tc]:r.LEQUAL,[_u]:r.EQUAL,[Mu]:r.GEQUAL,[xu]:r.GREATER,[yu]:r.NOTEQUAL};function N(R,S){if(S.type!==Xn||e.has("OES_texture_float_linear")!==!1||S.magFilter!==Gn&&S.magFilter!==Ro&&S.magFilter!==ks&&S.magFilter!==Qi&&S.minFilter!==Gn&&S.minFilter!==Ro&&S.minFilter!==ks&&S.minFilter!==Qi||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,V[S.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,V[S.wrapT]),R!==r.TEXTURE_3D&&R!==r.TEXTURE_2D_ARRAY||r.texParameteri(R,r.TEXTURE_WRAP_R,V[S.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,U[S.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,U[S.minFilter]),S.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,I[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===kn||S.minFilter!==ks&&S.minFilter!==Qi||S.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function G(R,S){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",E));let k=S.source,M=d.get(k);M===void 0&&(M={},d.set(k,M));let A=(function(F){let D=[];return D.push(F.wrapS),D.push(F.wrapT),D.push(F.wrapR||0),D.push(F.magFilter),D.push(F.minFilter),D.push(F.anisotropy),D.push(F.internalFormat),D.push(F.format),D.push(F.type),D.push(F.generateMipmaps),D.push(F.premultiplyAlpha),D.push(F.flipY),D.push(F.unpackAlignment),D.push(F.colorSpace),D.join()})(S);if(A!==R.__cacheKey){M[A]===void 0&&(M[A]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,z=!0),M[A].usedTimes++;let F=M[R.__cacheKey];F!==void 0&&(M[R.__cacheKey].usedTimes--,F.usedTimes===0&&O(S)),R.__cacheKey=A,R.__webglTexture=M[A].texture}return z}function $(R,S,z){return Math.floor(Math.floor(R/z)/S)}function ee(R,S,z){let k=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(k=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(k=r.TEXTURE_3D);let M=G(R,S),A=S.source;t.bindTexture(k,R.__webglTexture,r.TEXTURE0+z);let F=n.get(A);if(A.version!==F.__version||M===!0){t.activeTexture(r.TEXTURE0+z);let D=pt.getPrimaries(pt.workingColorSpace),X=S.colorSpace===tr?null:pt.getPrimaries(S.colorSpace),J=S.colorSpace===tr||D===X?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let W=v(S.image,!1,i.maxTextureSize);W=ae(S,W);let oe=s.convert(S.format,S.colorSpace),Ae=s.convert(S.type),me,Ue=x(S.internalFormat,oe,Ae,S.colorSpace,S.isVideoTexture);N(k,S);let ue=S.mipmaps,ce=S.isVideoTexture!==!0,le=F.__version===void 0||M===!0,we=A.dataReady,Le=T(S,W);if(S.isDepthTexture)Ue=y(S.format===Vs,S.type),le&&(ce?t.texStorage2D(r.TEXTURE_2D,1,Ue,W.width,W.height):t.texImage2D(r.TEXTURE_2D,0,Ue,W.width,W.height,0,oe,Ae,null));else if(S.isDataTexture)if(ue.length>0){ce&&le&&t.texStorage2D(r.TEXTURE_2D,Le,Ue,ue[0].width,ue[0].height);for(let re=0,pe=ue.length;re<pe;re++)me=ue[re],ce?we&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,me.width,me.height,oe,Ae,me.data):t.texImage2D(r.TEXTURE_2D,re,Ue,me.width,me.height,0,oe,Ae,me.data);S.generateMipmaps=!1}else ce?(le&&t.texStorage2D(r.TEXTURE_2D,Le,Ue,W.width,W.height),we&&(function(re,pe,Ee,Re){let ve=re.updateRanges;if(ve.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,pe.width,pe.height,Ee,Re,pe.data);else{ve.sort((at,L)=>at.start-L.start);let Ve=0;for(let at=1;at<ve.length;at++){let L=ve[Ve],xt=ve[at],ft=L.start+L.count,We=$(xt.start,pe.width,4),Y=$(L.start,pe.width,4);xt.start<=ft+1&&We===Y&&$(xt.start+xt.count-1,pe.width,4)===We?L.count=Math.max(L.count,xt.start+xt.count-L.start):(++Ve,ve[Ve]=xt)}ve.length=Ve+1;let He=r.getParameter(r.UNPACK_ROW_LENGTH),rt=r.getParameter(r.UNPACK_SKIP_PIXELS),ht=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,pe.width);for(let at=0,L=ve.length;at<L;at++){let xt=ve[at],ft=Math.floor(xt.start/4),We=Math.ceil(xt.count/4),Y=ft%pe.width,fe=Math.floor(ft/pe.width),Se=We;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Y),r.pixelStorei(r.UNPACK_SKIP_ROWS,fe),t.texSubImage2D(r.TEXTURE_2D,0,Y,fe,Se,1,Ee,Re,pe.data)}re.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,He),r.pixelStorei(r.UNPACK_SKIP_PIXELS,rt),r.pixelStorei(r.UNPACK_SKIP_ROWS,ht)}})(S,W,oe,Ae)):t.texImage2D(r.TEXTURE_2D,0,Ue,W.width,W.height,0,oe,Ae,W.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ce&&le&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Le,Ue,ue[0].width,ue[0].height,W.depth);for(let re=0,pe=ue.length;re<pe;re++)if(me=ue[re],S.format!==Rn)if(oe!==null)if(ce){if(we)if(S.layerUpdates.size>0){let Ee=Ic(me.width,me.height,S.format,S.type);for(let Re of S.layerUpdates){let ve=me.data.subarray(Re*Ee/me.data.BYTES_PER_ELEMENT,(Re+1)*Ee/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,Re,me.width,me.height,1,oe,ve)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,me.width,me.height,W.depth,oe,me.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,re,Ue,me.width,me.height,W.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?we&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,me.width,me.height,W.depth,oe,Ae,me.data):t.texImage3D(r.TEXTURE_2D_ARRAY,re,Ue,me.width,me.height,W.depth,0,oe,Ae,me.data)}else{ce&&le&&t.texStorage2D(r.TEXTURE_2D,Le,Ue,ue[0].width,ue[0].height);for(let re=0,pe=ue.length;re<pe;re++)me=ue[re],S.format!==Rn?oe!==null?ce?we&&t.compressedTexSubImage2D(r.TEXTURE_2D,re,0,0,me.width,me.height,oe,me.data):t.compressedTexImage2D(r.TEXTURE_2D,re,Ue,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?we&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,me.width,me.height,oe,Ae,me.data):t.texImage2D(r.TEXTURE_2D,re,Ue,me.width,me.height,0,oe,Ae,me.data)}else if(S.isDataArrayTexture)if(ce){if(le&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Le,Ue,W.width,W.height,W.depth),we)if(S.layerUpdates.size>0){let re=Ic(W.width,W.height,S.format,S.type);for(let pe of S.layerUpdates){let Ee=W.data.subarray(pe*re/W.data.BYTES_PER_ELEMENT,(pe+1)*re/W.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,pe,W.width,W.height,1,oe,Ae,Ee)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,oe,Ae,W.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ue,W.width,W.height,W.depth,0,oe,Ae,W.data);else if(S.isData3DTexture)ce?(le&&t.texStorage3D(r.TEXTURE_3D,Le,Ue,W.width,W.height,W.depth),we&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,oe,Ae,W.data)):t.texImage3D(r.TEXTURE_3D,0,Ue,W.width,W.height,W.depth,0,oe,Ae,W.data);else if(S.isFramebufferTexture){if(le)if(ce)t.texStorage2D(r.TEXTURE_2D,Le,Ue,W.width,W.height);else{let re=W.width,pe=W.height;for(let Ee=0;Ee<Le;Ee++)t.texImage2D(r.TEXTURE_2D,Ee,Ue,re,pe,0,oe,Ae,null),re>>=1,pe>>=1}}else if(ue.length>0){if(ce&&le){let re=Ge(ue[0]);t.texStorage2D(r.TEXTURE_2D,Le,Ue,re.width,re.height)}for(let re=0,pe=ue.length;re<pe;re++)me=ue[re],ce?we&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,oe,Ae,me):t.texImage2D(r.TEXTURE_2D,re,Ue,oe,Ae,me);S.generateMipmaps=!1}else if(ce){if(le){let re=Ge(W);t.texStorage2D(r.TEXTURE_2D,Le,Ue,re.width,re.height)}we&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,oe,Ae,W)}else t.texImage2D(r.TEXTURE_2D,0,Ue,oe,Ae,W);m(S)&&g(k),F.__version=A.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function K(R,S,z,k,M,A){let F=s.convert(z.format,z.colorSpace),D=s.convert(z.type),X=x(z.internalFormat,F,D,z.colorSpace),J=n.get(S),W=n.get(z);if(W.__renderTarget=S,!J.__hasExternalTextures){let oe=Math.max(1,S.width>>A),Ae=Math.max(1,S.height>>A);M===r.TEXTURE_3D||M===r.TEXTURE_2D_ARRAY?t.texImage3D(M,A,X,oe,Ae,S.depth,0,F,D,null):t.texImage2D(M,A,X,oe,Ae,0,F,D,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),ge(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,k,M,W.__webglTexture,0,de(S)):(M===r.TEXTURE_2D||M>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&M<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,k,M,W.__webglTexture,A),t.bindFramebuffer(r.FRAMEBUFFER,null)}function se(R,S,z){if(r.bindRenderbuffer(r.RENDERBUFFER,R),S.depthBuffer){let k=S.depthTexture,M=k&&k.isDepthTexture?k.type:null,A=y(S.stencilBuffer,M),F=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,D=de(S);ge(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,D,A,S.width,S.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,D,A,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,A,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,F,r.RENDERBUFFER,R)}else{let k=S.textures;for(let M=0;M<k.length;M++){let A=k[M],F=s.convert(A.format,A.colorSpace),D=s.convert(A.type),X=x(A.internalFormat,F,D,A.colorSpace),J=de(S);z&&ge(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,J,X,S.width,S.height):ge(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,J,X,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,X,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function be(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!S.depthTexture||!S.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let z=n.get(S.depthTexture);z.__renderTarget=S,z.__webglTexture&&S.depthTexture.image.width===S.width&&S.depthTexture.image.height===S.height||(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),H(S.depthTexture,0);let k=z.__webglTexture,M=de(S);if(S.depthTexture.format===Gs)ge(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,k,0,M):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,k,0);else{if(S.depthTexture.format!==Vs)throw new Error("Unknown depthTexture format");ge(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,k,0,M):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,k,0)}}function te(R){let S=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){let k=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),k){let M=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,k.removeEventListener("dispose",M)};k.addEventListener("dispose",M),S.__depthDisposeCallback=M}S.__boundDepthTexture=k}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");let k=R.texture.mipmaps;k&&k.length>0?be(S.__webglFramebuffer[0],R):be(S.__webglFramebuffer,R)}else if(z){S.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[k]),S.__webglDepthbuffer[k]===void 0)S.__webglDepthbuffer[k]=r.createRenderbuffer(),se(S.__webglDepthbuffer[k],R,!1);else{let M=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,A=S.__webglDepthbuffer[k];r.bindRenderbuffer(r.RENDERBUFFER,A),r.framebufferRenderbuffer(r.FRAMEBUFFER,M,r.RENDERBUFFER,A)}}else{let k=R.texture.mipmaps;if(k&&k.length>0?t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),se(S.__webglDepthbuffer,R,!1);else{let M=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,A=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,A),r.framebufferRenderbuffer(r.FRAMEBUFFER,M,r.RENDERBUFFER,A)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}let q=[],ie=[];function de(R){return Math.min(i.maxSamples,R.samples)}function ge(R){let S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ae(R,S){let z=R.colorSpace,k=R.format,M=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Wi&&z!==tr&&(pt.getTransfer(z)===_t?k===Rn&&M===$n||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function Ge(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=function(){let R=B;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),B+=1,R},this.resetTextureUnits=function(){B=0},this.setTexture2D=H,this.setTexture2DArray=function(R,S){let z=n.get(R);R.version>0&&z.__version!==R.version?ee(z,R,S):t.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+S)},this.setTexture3D=function(R,S){let z=n.get(R);R.version>0&&z.__version!==R.version?ee(z,R,S):t.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+S)},this.setTextureCube=function(R,S){let z=n.get(R);R.version>0&&z.__version!==R.version?(function(k,M,A){if(M.image.length!==6)return;let F=G(k,M),D=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+A);let X=n.get(D);if(D.version!==X.__version||F===!0){t.activeTexture(r.TEXTURE0+A);let J=pt.getPrimaries(pt.workingColorSpace),W=M.colorSpace===tr?null:pt.getPrimaries(M.colorSpace),oe=M.colorSpace===tr||J===W?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let Ae=M.isCompressedTexture||M.image[0].isCompressedTexture,me=M.image[0]&&M.image[0].isDataTexture,Ue=[];for(let ve=0;ve<6;ve++)Ue[ve]=Ae||me?me?M.image[ve].image:M.image[ve]:v(M.image[ve],!0,i.maxCubemapSize),Ue[ve]=ae(M,Ue[ve]);let ue=Ue[0],ce=s.convert(M.format,M.colorSpace),le=s.convert(M.type),we=x(M.internalFormat,ce,le,M.colorSpace),Le=M.isVideoTexture!==!0,re=X.__version===void 0||F===!0,pe=D.dataReady,Ee,Re=T(M,ue);if(N(r.TEXTURE_CUBE_MAP,M),Ae){Le&&re&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,we,ue.width,ue.height);for(let ve=0;ve<6;ve++){Ee=Ue[ve].mipmaps;for(let Ve=0;Ve<Ee.length;Ve++){let He=Ee[Ve];M.format!==Rn?ce!==null?Le?pe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ve,0,0,He.width,He.height,ce,He.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ve,we,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ve,0,0,He.width,He.height,ce,le,He.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ve,we,He.width,He.height,0,ce,le,He.data)}}}else{if(Ee=M.mipmaps,Le&&re){Ee.length>0&&Re++;let ve=Ge(Ue[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,we,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(me){Le?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ue[ve].width,Ue[ve].height,ce,le,Ue[ve].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,we,Ue[ve].width,Ue[ve].height,0,ce,le,Ue[ve].data);for(let Ve=0;Ve<Ee.length;Ve++){let He=Ee[Ve].image[ve].image;Le?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ve+1,0,0,He.width,He.height,ce,le,He.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ve+1,we,He.width,He.height,0,ce,le,He.data)}}else{Le?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,ce,le,Ue[ve]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,we,ce,le,Ue[ve]);for(let Ve=0;Ve<Ee.length;Ve++){let He=Ee[Ve];Le?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ve+1,0,0,ce,le,He.image[ve]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ve+1,we,ce,le,He.image[ve])}}}m(M)&&g(r.TEXTURE_CUBE_MAP),X.__version=D.version,M.onUpdate&&M.onUpdate(M)}k.__version=M.version})(z,R,S):t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+S)},this.rebindTextures=function(R,S,z){let k=n.get(R);S!==void 0&&K(k.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&te(R)},this.setupRenderTarget=function(R){let S=R.texture,z=n.get(R),k=n.get(S);R.addEventListener("dispose",P);let M=R.textures,A=R.isWebGLCubeRenderTarget===!0,F=M.length>1;if(F||(k.__webglTexture===void 0&&(k.__webglTexture=r.createTexture()),k.__version=S.version,a.memory.textures++),A){z.__webglFramebuffer=[];for(let D=0;D<6;D++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[D]=[];for(let X=0;X<S.mipmaps.length;X++)z.__webglFramebuffer[D][X]=r.createFramebuffer()}else z.__webglFramebuffer[D]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let D=0;D<S.mipmaps.length;D++)z.__webglFramebuffer[D]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(F)for(let D=0,X=M.length;D<X;D++){let J=n.get(M[D]);J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&ge(R)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let D=0;D<M.length;D++){let X=M[D];z.__webglColorRenderbuffer[D]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[D]);let J=s.convert(X.format,X.colorSpace),W=s.convert(X.type),oe=x(X.internalFormat,J,W,X.colorSpace,R.isXRRenderTarget===!0),Ae=de(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ae,oe,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+D,r.RENDERBUFFER,z.__webglColorRenderbuffer[D])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),se(z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(A){t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture),N(r.TEXTURE_CUBE_MAP,S);for(let D=0;D<6;D++)if(S.mipmaps&&S.mipmaps.length>0)for(let X=0;X<S.mipmaps.length;X++)K(z.__webglFramebuffer[D][X],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+D,X);else K(z.__webglFramebuffer[D],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+D,0);m(S)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(F){for(let D=0,X=M.length;D<X;D++){let J=M[D],W=n.get(J);t.bindTexture(r.TEXTURE_2D,W.__webglTexture),N(r.TEXTURE_2D,J),K(z.__webglFramebuffer,R,J,r.COLOR_ATTACHMENT0+D,r.TEXTURE_2D,0),m(J)&&g(r.TEXTURE_2D)}t.unbindTexture()}else{let D=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(D=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(D,k.__webglTexture),N(D,S),S.mipmaps&&S.mipmaps.length>0)for(let X=0;X<S.mipmaps.length;X++)K(z.__webglFramebuffer[X],R,S,r.COLOR_ATTACHMENT0,D,X);else K(z.__webglFramebuffer,R,S,r.COLOR_ATTACHMENT0,D,0);m(S)&&g(D),t.unbindTexture()}R.depthBuffer&&te(R)},this.updateRenderTargetMipmap=function(R){let S=R.textures;for(let z=0,k=S.length;z<k;z++){let M=S[z];if(m(M)){let A=_(R),F=n.get(M).__webglTexture;t.bindTexture(A,F),g(A),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(R){if(R.samples>0){if(ge(R)===!1){let S=R.textures,z=R.width,k=R.height,M=r.COLOR_BUFFER_BIT,A=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,F=n.get(R),D=S.length>1;if(D)for(let J=0;J<S.length;J++)t.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+J,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,F.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+J,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,F.__webglMultisampledFramebuffer);let X=R.texture.mipmaps;X&&X.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,F.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,F.__webglFramebuffer);for(let J=0;J<S.length;J++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(M|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(M|=r.STENCIL_BUFFER_BIT)),D){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,F.__webglColorRenderbuffer[J]);let W=n.get(S[J]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,W,0)}r.blitFramebuffer(0,0,z,k,0,0,z,k,M,r.NEAREST),l===!0&&(q.length=0,ie.length=0,q.push(r.COLOR_ATTACHMENT0+J),R.depthBuffer&&R.resolveDepthBuffer===!1&&(q.push(A),ie.push(A),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ie)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,q))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),D)for(let J=0;J<S.length;J++){t.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+J,r.RENDERBUFFER,F.__webglColorRenderbuffer[J]);let W=n.get(S[J]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,F.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+J,r.TEXTURE_2D,W,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,F.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let S=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}},this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=K,this.useMultisampledRTT=ge}function Rm(r,e){return{convert:function(t,n=tr){let i,s=pt.getTransfer(n);if(t===$n)return r.UNSIGNED_BYTE;if(t===Io)return r.UNSIGNED_SHORT_4_4_4_4;if(t===Lo)return r.UNSIGNED_SHORT_5_5_5_1;if(t===Yl)return r.UNSIGNED_INT_5_9_9_9_REV;if(t===jl)return r.BYTE;if(t===ql)return r.SHORT;if(t===$r)return r.UNSIGNED_SHORT;if(t===Po)return r.INT;if(t===er)return r.UNSIGNED_INT;if(t===Xn)return r.FLOAT;if(t===Xr)return r.HALF_FLOAT;if(t===cu)return r.ALPHA;if(t===hu)return r.RGB;if(t===Rn)return r.RGBA;if(t===Gs)return r.DEPTH_COMPONENT;if(t===Vs)return r.DEPTH_STENCIL;if(t===Zl)return r.RED;if(t===Do)return r.RED_INTEGER;if(t===uu)return r.RG;if(t===Jl)return r.RG_INTEGER;if(t===Kl)return r.RGBA_INTEGER;if(t===Uo||t===No||t===Fo||t===Oo)if(s===_t){if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i===null)return null;if(t===Uo)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===No)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===Fo)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Oo)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(i=e.get("WEBGL_compressed_texture_s3tc"),i===null)return null;if(t===Uo)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===No)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===Fo)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Oo)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===Ql||t===ec||t===tc||t===nc){if(i=e.get("WEBGL_compressed_texture_pvrtc"),i===null)return null;if(t===Ql)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===ec)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===tc)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===nc)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===ic||t===rc||t===sc){if(i=e.get("WEBGL_compressed_texture_etc"),i===null)return null;if(t===ic||t===rc)return s===_t?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(t===sc)return s===_t?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}if(t===ac||t===oc||t===lc||t===cc||t===hc||t===uc||t===dc||t===pc||t===mc||t===fc||t===gc||t===vc||t===_c||t===xc){if(i=e.get("WEBGL_compressed_texture_astc"),i===null)return null;if(t===ac)return s===_t?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===oc)return s===_t?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===lc)return s===_t?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===cc)return s===_t?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===hc)return s===_t?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===uc)return s===_t?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===dc)return s===_t?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===pc)return s===_t?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===mc)return s===_t?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===fc)return s===_t?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===gc)return s===_t?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===vc)return s===_t?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===_c)return s===_t?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===xc)return s===_t?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Bo||t===yc||t===Mc){if(i=e.get("EXT_texture_compression_bptc"),i===null)return null;if(t===Bo)return s===_t?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===yc)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Mc)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===du||t===Sc||t===bc||t===wc){if(i=e.get("EXT_texture_compression_rgtc"),i===null)return null;if(t===Bo)return i.COMPRESSED_RED_RGTC1_EXT;if(t===Sc)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===bc)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===wc)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===jr?r.UNSIGNED_INT_24_8:r[t]!==void 0?r[t]:null}}}var Wc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new Qt;e.properties.get(i).__webglTexture=t.texture,t.depthNear===n.depthNear&&t.depthFar===n.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new An({vertexShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qe(new Hn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$c=class extends ci{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,f=null,v=new Wc,m=t.getContextAttributes(),g=null,_=null,x=[],y=[],T=new xe,E=null,P=new jt;P.viewport=new Ct;let O=new jt;O.viewport=new Ct;let B=[P,O],H=new _o,V=null,U=null;function I(te){let q=y.indexOf(te.inputSource);if(q===-1)return;let ie=x[q];ie!==void 0&&(ie.update(te.inputSource,te.frame,c||a),ie.dispatchEvent({type:te.type,data:te.inputSource}))}function N(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",G);for(let te=0;te<x.length;te++){let q=y[te];q!==null&&(y[te]=null,x[te].disconnect(q))}V=null,U=null,v.reset(),e.setRenderTarget(g),p=null,d=null,u=null,i=null,_=null,be.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}function G(te){for(let q=0;q<te.removed.length;q++){let ie=te.removed[q],de=y.indexOf(ie);de>=0&&(y[de]=null,x[de].disconnect(ie))}for(let q=0;q<te.added.length;q++){let ie=te.added[q],de=y.indexOf(ie);if(de===-1){for(let ae=0;ae<x.length;ae++){if(ae>=y.length){y.push(ie),de=ae;break}if(y[ae]===null){y[ae]=ie,de=ae;break}}if(de===-1)break}let ge=x[de];ge&&ge.connect(ie)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let q=x[te];return q===void 0&&(q=new Ur,x[te]=q),q.getTargetRaySpace()},this.getControllerGrip=function(te){let q=x[te];return q===void 0&&(q=new Ur,x[te]=q),q.getGripSpace()},this.getHand=function(te){let q=x[te];return q===void 0&&(q=new Ur,x[te]=q),q.getHandSpace()},this.setFramebufferScaleFactor=function(te){s=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(te){if(i=te,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",N),i.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(T),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let q=null,ie=null,de=null;m.depth&&(de=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=m.stencil?Vs:Gs,ie=m.stencil?jr:er);let ge={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(ge),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Vn(d.textureWidth,d.textureHeight,{format:Rn,type:$n,depthTexture:new bs(d.textureWidth,d.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,q),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Vn(p.framebufferWidth,p.framebufferHeight,{format:Rn,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),be.setContext(i),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};let $=new C,ee=new C;function K(te,q){q===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(q.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(i===null)return;let q=te.near,ie=te.far;v.texture!==null&&(v.depthNear>0&&(q=v.depthNear),v.depthFar>0&&(ie=v.depthFar)),H.near=O.near=P.near=q,H.far=O.far=P.far=ie,V===H.near&&U===H.far||(i.updateRenderState({depthNear:H.near,depthFar:H.far}),V=H.near,U=H.far),P.layers.mask=2|te.layers.mask,O.layers.mask=4|te.layers.mask,H.layers.mask=P.layers.mask|O.layers.mask;let de=te.parent,ge=H.cameras;K(H,de);for(let ae=0;ae<ge.length;ae++)K(ge[ae],de);ge.length===2?(function(ae,Ge,R){$.setFromMatrixPosition(Ge.matrixWorld),ee.setFromMatrixPosition(R.matrixWorld);let S=$.distanceTo(ee),z=Ge.projectionMatrix.elements,k=R.projectionMatrix.elements,M=z[14]/(z[10]-1),A=z[14]/(z[10]+1),F=(z[9]+1)/z[5],D=(z[9]-1)/z[5],X=(z[8]-1)/z[0],J=(k[8]+1)/k[0],W=M*X,oe=M*J,Ae=S/(-X+J),me=Ae*-X;if(Ge.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(me),ae.translateZ(Ae),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),z[10]===-1)ae.projectionMatrix.copy(Ge.projectionMatrix),ae.projectionMatrixInverse.copy(Ge.projectionMatrixInverse);else{let Ue=M+Ae,ue=A+Ae,ce=W-me,le=oe+(S-me),we=F*A/ue*Ue,Le=D*A/ue*Ue;ae.projectionMatrix.makePerspective(ce,le,we,Le,Ue,ue),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}})(H,P,O):H.projectionMatrix.copy(P.projectionMatrix),(function(ae,Ge,R){R===null?ae.matrix.copy(Ge.matrixWorld):(ae.matrix.copy(R.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(Ge.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(Ge.projectionMatrix),ae.projectionMatrixInverse.copy(Ge.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=2*Ua*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)})(te,H,de)},this.getCamera=function(){return H},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=te)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(H)};let se=null,be=new id;be.setAnimationLoop(function(te,q){if(h=q.getViewerPose(c||a),f=q,h!==null){let ie=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let de=!1;ie.length!==H.cameras.length&&(H.cameras.length=0,de=!0);for(let ae=0;ae<ie.length;ae++){let Ge=ie[ae],R=null;if(p!==null)R=p.getViewport(Ge);else{let z=u.getViewSubImage(d,Ge);R=z.viewport,ae===0&&(e.setRenderTargetTextures(_,z.colorTexture,z.depthStencilTexture),e.setRenderTarget(_))}let S=B[ae];S===void 0&&(S=new jt,S.layers.enable(ae),S.viewport=new Ct,B[ae]=S),S.matrix.fromArray(Ge.transform.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale),S.projectionMatrix.fromArray(Ge.projectionMatrix),S.projectionMatrixInverse.copy(S.projectionMatrix).invert(),S.viewport.set(R.x,R.y,R.width,R.height),ae===0&&(H.matrix.copy(S.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),de===!0&&H.cameras.push(S)}let ge=i.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){let ae=u.getDepthInformation(ie[0]);ae&&ae.isValid&&ae.texture&&v.init(e,ae,i.renderState)}}for(let ie=0;ie<x.length;ie++){let de=y[ie],ge=x[ie];de!==null&&ge!==void 0&&ge.update(de,q,c||a)}se&&se(te,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),f=null}),this.setAnimationLoop=function(te){se=te},this.dispose=function(){}}},rr=new En,Pm=new tt;function Im(r,e){function t(i,s){i.matrixAutoUpdate===!0&&i.updateMatrix(),s.value.copy(i.matrix)}function n(i,s){i.opacity.value=s.opacity,s.color&&i.diffuse.value.copy(s.color),s.emissive&&i.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(i.map.value=s.map,t(s.map,i.mapTransform)),s.alphaMap&&(i.alphaMap.value=s.alphaMap,t(s.alphaMap,i.alphaMapTransform)),s.bumpMap&&(i.bumpMap.value=s.bumpMap,t(s.bumpMap,i.bumpMapTransform),i.bumpScale.value=s.bumpScale,s.side===Yt&&(i.bumpScale.value*=-1)),s.normalMap&&(i.normalMap.value=s.normalMap,t(s.normalMap,i.normalMapTransform),i.normalScale.value.copy(s.normalScale),s.side===Yt&&i.normalScale.value.negate()),s.displacementMap&&(i.displacementMap.value=s.displacementMap,t(s.displacementMap,i.displacementMapTransform),i.displacementScale.value=s.displacementScale,i.displacementBias.value=s.displacementBias),s.emissiveMap&&(i.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,i.emissiveMapTransform)),s.specularMap&&(i.specularMap.value=s.specularMap,t(s.specularMap,i.specularMapTransform)),s.alphaTest>0&&(i.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,l=a.envMapRotation;o&&(i.envMap.value=o,rr.copy(l),rr.x*=-1,rr.y*=-1,rr.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(rr.y*=-1,rr.z*=-1),i.envMapRotation.value.setFromMatrix4(Pm.makeRotationFromEuler(rr)),i.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,i.reflectivity.value=s.reflectivity,i.ior.value=s.ior,i.refractionRatio.value=s.refractionRatio),s.lightMap&&(i.lightMap.value=s.lightMap,i.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,i.lightMapTransform)),s.aoMap&&(i.aoMap.value=s.aoMap,i.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,i.aoMapTransform))}return{refreshFogUniforms:function(i,s){s.color.getRGB(i.fogColor.value,Cc(r)),s.isFog?(i.fogNear.value=s.near,i.fogFar.value=s.far):s.isFogExp2&&(i.fogDensity.value=s.density)},refreshMaterialUniforms:function(i,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(i,s):s.isMeshToonMaterial?(n(i,s),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(i,s)):s.isMeshPhongMaterial?(n(i,s),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(i,s)):s.isMeshStandardMaterial?(n(i,s),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(i,s),s.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Yt&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(i,s,l)):s.isMeshMatcapMaterial?(n(i,s),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(i,s)):s.isMeshDepthMaterial?n(i,s):s.isMeshDistanceMaterial?(n(i,s),(function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(i,s)):s.isMeshNormalMaterial?n(i,s):s.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(i,s),s.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(i,s)):s.isPointsMaterial?(function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(i,s,a,o):s.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(i,s):s.isShadowMaterial?(i.color.value.copy(s.color),i.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function Lm(r,e,t,n){let i={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(u,d,p,f){let v=u.value,m=d+"_"+p;if(f[m]===void 0)return f[m]=typeof v=="number"||typeof v=="boolean"?v:v.clone(),!0;{let g=f[m];if(typeof v=="number"||typeof v=="boolean"){if(g!==v)return f[m]=v,!0}else if(g.equals(v)===!1)return g.copy(v),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(i[d.id]),delete i[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;n.uniformBlockBinding(u,p)},update:function(u,d){let p=i[u.id];p===void 0&&((function(m){let g=m.uniforms,_=0,x=16;for(let T=0,E=g.length;T<E;T++){let P=Array.isArray(g[T])?g[T]:[g[T]];for(let O=0,B=P.length;O<B;O++){let H=P[O],V=Array.isArray(H.value)?H.value:[H.value];for(let U=0,I=V.length;U<I;U++){let N=c(V[U]),G=_%x,$=G%N.boundary,ee=G+$;_+=$,ee!==0&&x-ee<N.storage&&(_+=x-ee),H.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=_,_+=N.storage}}}let y=_%x;y>0&&(_+=x-y),m.__size=_,m.__cache={}})(u),p=(function(m){let g=(function(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();m.__bindingPointIndex=g;let _=r.createBuffer(),x=m.__size,y=m.usage;return r.bindBuffer(r.UNIFORM_BUFFER,_),r.bufferData(r.UNIFORM_BUFFER,x,y),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,g,_),_})(u),i[u.id]=p,u.addEventListener("dispose",h));let f=d.program;n.updateUBOMapping(u,f);let v=e.render.frame;s[u.id]!==v&&((function(m){let g=i[m.id],_=m.uniforms,x=m.__cache;r.bindBuffer(r.UNIFORM_BUFFER,g);for(let y=0,T=_.length;y<T;y++){let E=Array.isArray(_[y])?_[y]:[_[y]];for(let P=0,O=E.length;P<O;P++){let B=E[P];if(l(B,y,P,x)===!0){let H=B.__offset,V=Array.isArray(B.value)?B.value:[B.value],U=0;for(let I=0;I<V.length;I++){let N=V[I],G=c(N);typeof N=="number"||typeof N=="boolean"?(B.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,H+U,B.__data)):N.isMatrix3?(B.__data[0]=N.elements[0],B.__data[1]=N.elements[1],B.__data[2]=N.elements[2],B.__data[3]=0,B.__data[4]=N.elements[3],B.__data[5]=N.elements[4],B.__data[6]=N.elements[5],B.__data[7]=0,B.__data[8]=N.elements[6],B.__data[9]=N.elements[7],B.__data[10]=N.elements[8],B.__data[11]=0):(N.toArray(B.__data,U),U+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,H,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)})(u),s[u.id]=v)},dispose:function(){for(let u in i)r.deleteBuffer(i[u]);a=[],i={},s={}}}}var Vo=class{constructor(e={}){let{canvas:t=bu(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e,p;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let f=new Uint32Array(4),v=new Int32Array(4),m=null,g=null,_=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,T=!1;this._outputColorSpace=Ht;let E=0,P=0,O=null,B=-1,H=null,V=new Ct,U=new Ct,I=null,N=new Oe(0),G=0,$=t.width,ee=t.height,K=1,se=null,be=null,te=new Ct(0,0,$,ee),q=new Ct(0,0,$,ee),ie=!1,de=new Ri,ge=!1,ae=!1,Ge=new tt,R=new tt,S=new C,z=new Ct,k={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},M=!1;function A(){return O===null?K:1}let F,D,X,J,W,oe,Ae,me,Ue,ue,ce,le,we,Le,re,pe,Ee,Re,ve,Ve,He,rt,ht,at,L=n;function xt(b,Z){return t.getContext(b,Z)}try{let b={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"178"}`),t.addEventListener("webglcontextlost",Y,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",Se,!1),L===null){let Z="webgl2";if(L=xt(Z,b),L===null)throw xt(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}function ft(){F=new mp(L),F.init(),rt=new Rm(L,F),D=new cp(L,F,e,rt),X=new Am(L,F),D.reverseDepthBuffer&&d&&X.buffers.depth.setReversed(!0),J=new vp(L),W=new vm,oe=new Cm(L,F,X,W,D,rt,J),Ae=new up(y),me=new pp(y),Ue=new rp(L),ht=new op(L,Ue),ue=new fp(L,Ue,J,ht),ce=new xp(L,ue,Ue,J),ve=new _p(L,D,oe),pe=new hp(W),le=new gm(y,Ae,me,F,D,ht,pe),we=new Im(y,W),Le=new xm,re=new wm(F),Re=new ap(y,Ae,me,X,ce,p,l),Ee=new Tm(y,ce,D),at=new Lm(L,J,D,X),Ve=new lp(L,F,J),He=new gp(L,F,J),J.programs=le.programs,y.capabilities=D,y.extensions=F,y.properties=W,y.renderLists=Le,y.shadowMap=Ee,y.state=X,y.info=J}ft();let We=new $c(y,L);function Y(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let b=J.autoReset,Z=Ee.enabled,ne=Ee.autoUpdate,he=Ee.needsUpdate,Q=Ee.type;ft(),J.autoReset=b,Ee.enabled=Z,Ee.autoUpdate=ne,Ee.needsUpdate=he,Ee.type=Q}function Se(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Pe(b){let Z=b.target;Z.removeEventListener("dispose",Pe),(function(ne){(function(he){let Q=W.get(he).programs;Q!==void 0&&(Q.forEach(function(_e){le.releaseProgram(_e)}),he.isShaderMaterial&&le.releaseShaderCache(he))})(ne),W.remove(ne)})(Z)}function De(b,Z,ne){b.transparent===!0&&b.side===zt&&b.forceSinglePass===!1?(b.side=Yt,b.needsUpdate=!0,Pn(b,Z,ne),b.side=Li,b.needsUpdate=!0,Pn(b,Z,ne),b.side=zt):Pn(b,Z,ne)}this.xr=We,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let b=F.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=F.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(b){b!==void 0&&(K=b,this.setSize($,ee,!1))},this.getSize=function(b){return b.set($,ee)},this.setSize=function(b,Z,ne=!0){We.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):($=b,ee=Z,t.width=Math.floor(b*K),t.height=Math.floor(Z*K),ne===!0&&(t.style.width=b+"px",t.style.height=Z+"px"),this.setViewport(0,0,b,Z))},this.getDrawingBufferSize=function(b){return b.set($*K,ee*K).floor()},this.setDrawingBufferSize=function(b,Z,ne){$=b,ee=Z,K=ne,t.width=Math.floor(b*ne),t.height=Math.floor(Z*ne),this.setViewport(0,0,b,Z)},this.getCurrentViewport=function(b){return b.copy(V)},this.getViewport=function(b){return b.copy(te)},this.setViewport=function(b,Z,ne,he){b.isVector4?te.set(b.x,b.y,b.z,b.w):te.set(b,Z,ne,he),X.viewport(V.copy(te).multiplyScalar(K).round())},this.getScissor=function(b){return b.copy(q)},this.setScissor=function(b,Z,ne,he){b.isVector4?q.set(b.x,b.y,b.z,b.w):q.set(b,Z,ne,he),X.scissor(U.copy(q).multiplyScalar(K).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(b){X.setScissorTest(ie=b)},this.setOpaqueSort=function(b){se=b},this.setTransparentSort=function(b){be=b},this.getClearColor=function(b){return b.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(b=!0,Z=!0,ne=!0){let he=0;if(b){let Q=!1;if(O!==null){let _e=O.texture.format;Q=_e===Kl||_e===Jl||_e===Do}if(Q){let _e=O.texture.type,Fe=_e===$n||_e===er||_e===$r||_e===jr||_e===Io||_e===Lo,ke=Re.getClearColor(),Xe=Re.getClearAlpha(),Qe=ke.r,je=ke.g,Ye=ke.b;Fe?(f[0]=Qe,f[1]=je,f[2]=Ye,f[3]=Xe,L.clearBufferuiv(L.COLOR,0,f)):(v[0]=Qe,v[1]=je,v[2]=Ye,v[3]=Xe,L.clearBufferiv(L.COLOR,0,v))}else he|=L.COLOR_BUFFER_BIT}Z&&(he|=L.DEPTH_BUFFER_BIT),ne&&(he|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Y,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Re.dispose(),Le.dispose(),re.dispose(),W.dispose(),Ae.dispose(),me.dispose(),ce.dispose(),ht.dispose(),at.dispose(),le.dispose(),We.dispose(),We.removeEventListener("sessionstart",$e),We.removeEventListener("sessionend",Be),st.stop()},this.renderBufferDirect=function(b,Z,ne,he,Q,_e){Z===null&&(Z=k);let Fe=Q.isMesh&&Q.matrixWorld.determinant()<0,ke=(function(j,Te,ye,ze,Ne){Te.isScene!==!0&&(Te=k),oe.resetTextureUnits();let dt=Te.fog,Mt=ze.isMeshStandardMaterial?Te.environment:null,vt=O===null?y.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Wi,Ft=(ze.isMeshStandardMaterial?me:Ae).get(ze.envMap||Mt),Ut=ze.vertexColors===!0&&!!ye.attributes.color&&ye.attributes.color.itemSize===4,an=!!ye.attributes.tangent&&(!!ze.normalMap||ze.anisotropy>0),Ot=!!ye.morphAttributes.position,Jn=!!ye.morphAttributes.normal,Jt=!!ye.morphAttributes.color,cr=mi;ze.toneMapped&&(O!==null&&O.isXRRenderTarget!==!0||(cr=y.toneMapping));let _i=ye.morphAttributes.position||ye.morphAttributes.normal||ye.morphAttributes.color,In=_i!==void 0?_i.length:0,Ze=W.get(ze),Kn=g.state.lights;if(ge===!0&&(ae===!0||j!==H)){let tn=j===H&&ze.id===B;pe.setState(ze,j,tn)}let on=!1;ze.version===Ze.__version?Ze.needsLights&&Ze.lightsStateVersion!==Kn.state.version||Ze.outputColorSpace!==vt||Ne.isBatchedMesh&&Ze.batching===!1?on=!0:Ne.isBatchedMesh||Ze.batching!==!0?Ne.isBatchedMesh&&Ze.batchingColor===!0&&Ne.colorTexture===null||Ne.isBatchedMesh&&Ze.batchingColor===!1&&Ne.colorTexture!==null||Ne.isInstancedMesh&&Ze.instancing===!1?on=!0:Ne.isInstancedMesh||Ze.instancing!==!0?Ne.isSkinnedMesh&&Ze.skinning===!1?on=!0:Ne.isSkinnedMesh||Ze.skinning!==!0?Ne.isInstancedMesh&&Ze.instancingColor===!0&&Ne.instanceColor===null||Ne.isInstancedMesh&&Ze.instancingColor===!1&&Ne.instanceColor!==null||Ne.isInstancedMesh&&Ze.instancingMorph===!0&&Ne.morphTexture===null||Ne.isInstancedMesh&&Ze.instancingMorph===!1&&Ne.morphTexture!==null||Ze.envMap!==Ft||ze.fog===!0&&Ze.fog!==dt?on=!0:Ze.numClippingPlanes===void 0||Ze.numClippingPlanes===pe.numPlanes&&Ze.numIntersection===pe.numIntersection?(Ze.vertexAlphas!==Ut||Ze.vertexTangents!==an||Ze.morphTargets!==Ot||Ze.morphNormals!==Jn||Ze.morphColors!==Jt||Ze.toneMapping!==cr||Ze.morphTargetsCount!==In)&&(on=!0):on=!0:on=!0:on=!0:on=!0:(on=!0,Ze.__version=ze.version);let Qn=Ze.currentProgram;on===!0&&(Qn=Pn(ze,Te,Ne));let Zs=!1,ei=!1,Ni=!1,Tt=Qn.getUniforms(),gn=Ze.uniforms;if(X.useProgram(Qn.program)&&(Zs=!0,ei=!0,Ni=!0),ze.id!==B&&(B=ze.id,ei=!0),Zs||H!==j){X.buffers.depth.getReversed()?(Ge.copy(j.projectionMatrix),Tu(Ge),Eu(Ge),Tt.setValue(L,"projectionMatrix",Ge)):Tt.setValue(L,"projectionMatrix",j.projectionMatrix),Tt.setValue(L,"viewMatrix",j.matrixWorldInverse);let tn=Tt.map.cameraPosition;tn!==void 0&&tn.setValue(L,S.setFromMatrixPosition(j.matrixWorld)),D.logarithmicDepthBuffer&&Tt.setValue(L,"logDepthBufFC",2/(Math.log(j.far+1)/Math.LN2)),(ze.isMeshPhongMaterial||ze.isMeshToonMaterial||ze.isMeshLambertMaterial||ze.isMeshBasicMaterial||ze.isMeshStandardMaterial||ze.isShaderMaterial)&&Tt.setValue(L,"isOrthographic",j.isOrthographicCamera===!0),H!==j&&(H=j,ei=!0,Ni=!0)}if(Ne.isSkinnedMesh){Tt.setOptional(L,Ne,"bindMatrix"),Tt.setOptional(L,Ne,"bindMatrixInverse");let tn=Ne.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Tt.setValue(L,"boneTexture",tn.boneTexture,oe))}Ne.isBatchedMesh&&(Tt.setOptional(L,Ne,"batchingTexture"),Tt.setValue(L,"batchingTexture",Ne._matricesTexture,oe),Tt.setOptional(L,Ne,"batchingIdTexture"),Tt.setValue(L,"batchingIdTexture",Ne._indirectTexture,oe),Tt.setOptional(L,Ne,"batchingColorTexture"),Ne._colorsTexture!==null&&Tt.setValue(L,"batchingColorTexture",Ne._colorsTexture,oe));let Fi=ye.morphAttributes;Fi.position===void 0&&Fi.normal===void 0&&Fi.color===void 0||ve.update(Ne,ye,Qn),(ei||Ze.receiveShadow!==Ne.receiveShadow)&&(Ze.receiveShadow=Ne.receiveShadow,Tt.setValue(L,"receiveShadow",Ne.receiveShadow)),ze.isMeshGouraudMaterial&&ze.envMap!==null&&(gn.envMap.value=Ft,gn.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),ze.isMeshStandardMaterial&&ze.envMap===null&&Te.environment!==null&&(gn.envMapIntensity.value=Te.environmentIntensity),ei&&(Tt.setValue(L,"toneMappingExposure",y.toneMappingExposure),Ze.needsLights&&(ln=Ni,(en=gn).ambientLightColor.needsUpdate=ln,en.lightProbe.needsUpdate=ln,en.directionalLights.needsUpdate=ln,en.directionalLightShadows.needsUpdate=ln,en.pointLights.needsUpdate=ln,en.pointLightShadows.needsUpdate=ln,en.spotLights.needsUpdate=ln,en.spotLightShadows.needsUpdate=ln,en.rectAreaLights.needsUpdate=ln,en.hemisphereLights.needsUpdate=ln),dt&&ze.fog===!0&&we.refreshFogUniforms(gn,dt),we.refreshMaterialUniforms(gn,ze,K,ee,g.state.transmissionRenderTarget[j.id]),Yr.upload(L,js(Ze),gn,oe));var en,ln;if(ze.isShaderMaterial&&ze.uniformsNeedUpdate===!0&&(Yr.upload(L,js(Ze),gn,oe),ze.uniformsNeedUpdate=!1),ze.isSpriteMaterial&&Tt.setValue(L,"center",Ne.center),Tt.setValue(L,"modelViewMatrix",Ne.modelViewMatrix),Tt.setValue(L,"normalMatrix",Ne.normalMatrix),Tt.setValue(L,"modelMatrix",Ne.matrixWorld),ze.isShaderMaterial||ze.isRawShaderMaterial){let tn=ze.uniformsGroups;for(let Ln=0,Ko=tn.length;Ln<Ko;Ln++){let hr=tn[Ln];at.update(hr,Qn),at.bind(hr,Qn)}}return Qn})(b,Z,ne,he,Q);X.setMaterial(he,Fe);let Xe=ne.index,Qe=1;if(he.wireframe===!0){if(Xe=ue.getWireframeAttribute(ne),Xe===void 0)return;Qe=2}let je=ne.drawRange,Ye=ne.attributes.position,et=je.start*Qe,bt=(je.start+je.count)*Qe;_e!==null&&(et=Math.max(et,_e.start*Qe),bt=Math.min(bt,(_e.start+_e.count)*Qe)),Xe!==null?(et=Math.max(et,0),bt=Math.min(bt,Xe.count)):Ye!=null&&(et=Math.max(et,0),bt=Math.min(bt,Ye.count));let wt=bt-et;if(wt<0||wt===1/0)return;let Pt;ht.setup(Q,he,ke,ne,Xe);let yt=Ve;if(Xe!==null&&(Pt=Ue.get(Xe),yt=He,yt.setIndex(Pt)),Q.isMesh)he.wireframe===!0?(X.setLineWidth(he.wireframeLinewidth*A()),yt.setMode(L.LINES)):yt.setMode(L.TRIANGLES);else if(Q.isLine){let j=he.linewidth;j===void 0&&(j=1),X.setLineWidth(j*A()),Q.isLineSegments?yt.setMode(L.LINES):Q.isLineLoop?yt.setMode(L.LINE_LOOP):yt.setMode(L.LINE_STRIP)}else Q.isPoints?yt.setMode(L.POINTS):Q.isSprite&&yt.setMode(L.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)$i("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(F.get("WEBGL_multi_draw"))yt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let j=Q._multiDrawStarts,Te=Q._multiDrawCounts,ye=Q._multiDrawCount,ze=Xe?Ue.get(Xe).bytesPerElement:1,Ne=W.get(he).currentProgram.getUniforms();for(let dt=0;dt<ye;dt++)Ne.setValue(L,"_gl_DrawID",dt),yt.render(j[dt]/ze,Te[dt])}else if(Q.isInstancedMesh)yt.renderInstances(et,wt,Q.count);else if(ne.isInstancedBufferGeometry){let j=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Te=Math.min(ne.instanceCount,j);yt.renderInstances(et,wt,Te)}else yt.render(et,wt)},this.compile=function(b,Z,ne=null){ne===null&&(ne=b),g=re.get(ne),g.init(Z),x.push(g),ne.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(g.pushLight(Q),Q.castShadow&&g.pushShadow(Q))}),b!==ne&&b.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(g.pushLight(Q),Q.castShadow&&g.pushShadow(Q))}),g.setupLights();let he=new Set;return b.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let _e=Q.material;if(_e)if(Array.isArray(_e))for(let Fe=0;Fe<_e.length;Fe++){let ke=_e[Fe];De(ke,ne,Q),he.add(ke)}else De(_e,ne,Q),he.add(_e)}),g=x.pop(),he},this.compileAsync=function(b,Z,ne=null){let he=this.compile(b,Z,ne);return new Promise(Q=>{function _e(){he.forEach(function(Fe){W.get(Fe).currentProgram.isReady()&&he.delete(Fe)}),he.size!==0?setTimeout(_e,10):Q(b)}F.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Ce=null;function $e(){st.stop()}function Be(){st.start()}let st=new id;function ot(b,Z,ne,he){if(b.visible===!1)return;if(b.layers.test(Z.layers)){if(b.isGroup)ne=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(Z);else if(b.isLight)g.pushLight(b),b.castShadow&&g.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||de.intersectsSprite(b)){he&&z.setFromMatrixPosition(b.matrixWorld).applyMatrix4(R);let _e=ce.update(b),Fe=b.material;Fe.visible&&m.push(b,_e,Fe,ne,z.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||de.intersectsObject(b))){let _e=ce.update(b),Fe=b.material;if(he&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),z.copy(b.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),z.copy(_e.boundingSphere.center)),z.applyMatrix4(b.matrixWorld).applyMatrix4(R)),Array.isArray(Fe)){let ke=_e.groups;for(let Xe=0,Qe=ke.length;Xe<Qe;Xe++){let je=ke[Xe],Ye=Fe[je.materialIndex];Ye&&Ye.visible&&m.push(b,_e,Ye,ne,z.z,je)}}else Fe.visible&&m.push(b,_e,Fe,ne,z.z,null)}}let Q=b.children;for(let _e=0,Fe=Q.length;_e<Fe;_e++)ot(Q[_e],Z,ne,he)}function gt(b,Z,ne,he){let Q=b.opaque,_e=b.transmissive,Fe=b.transparent;g.setupLightsView(ne),ge===!0&&pe.setGlobalState(y.clippingPlanes,ne),he&&X.viewport(V.copy(he)),Q.length>0&&vi(Q,Z,ne),_e.length>0&&vi(_e,Z,ne),Fe.length>0&&vi(Fe,Z,ne),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function Wt(b,Z,ne,he){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[he.id]===void 0&&(g.state.transmissionRenderTarget[he.id]=new Vn(1,1,{generateMipmaps:!0,type:F.has("EXT_color_buffer_half_float")||F.has("EXT_color_buffer_float")?Xr:$n,minFilter:Qi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace}));let Q=g.state.transmissionRenderTarget[he.id],_e=he.viewport||V;Q.setSize(_e.z*y.transmissionResolutionScale,_e.w*y.transmissionResolutionScale);let Fe=y.getRenderTarget(),ke=y.getActiveCubeFace(),Xe=y.getActiveMipmapLevel();y.setRenderTarget(Q),y.getClearColor(N),G=y.getClearAlpha(),G<1&&y.setClearColor(16777215,.5),y.clear(),M&&Re.render(ne);let Qe=y.toneMapping;y.toneMapping=mi;let je=he.viewport;if(he.viewport!==void 0&&(he.viewport=void 0),g.setupLightsView(he),ge===!0&&pe.setGlobalState(y.clippingPlanes,he),vi(b,ne,he),oe.updateMultisampleRenderTarget(Q),oe.updateRenderTargetMipmap(Q),F.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let et=0,bt=Z.length;et<bt;et++){let wt=Z[et],Pt=wt.object,yt=wt.geometry,j=wt.material,Te=wt.group;if(j.side===zt&&Pt.layers.test(he.layers)){let ye=j.side;j.side=Yt,j.needsUpdate=!0,lr(Pt,ne,he,yt,j,Te),j.side=ye,j.needsUpdate=!0,Ye=!0}}Ye===!0&&(oe.updateMultisampleRenderTarget(Q),oe.updateRenderTargetMipmap(Q))}y.setRenderTarget(Fe,ke,Xe),y.setClearColor(N,G),je!==void 0&&(he.viewport=je),y.toneMapping=Qe}function vi(b,Z,ne){let he=Z.isScene===!0?Z.overrideMaterial:null;for(let Q=0,_e=b.length;Q<_e;Q++){let Fe=b[Q],ke=Fe.object,Xe=Fe.geometry,Qe=Fe.group,je=Fe.material;je.allowOverride===!0&&he!==null&&(je=he),ke.layers.test(ne.layers)&&lr(ke,Z,ne,Xe,je,Qe)}}function lr(b,Z,ne,he,Q,_e){b.onBeforeRender(y,Z,ne,he,Q,_e),b.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Q.onBeforeRender(y,Z,ne,he,b,_e),Q.transparent===!0&&Q.side===zt&&Q.forceSinglePass===!1?(Q.side=Yt,Q.needsUpdate=!0,y.renderBufferDirect(ne,Z,he,Q,b,_e),Q.side=Li,Q.needsUpdate=!0,y.renderBufferDirect(ne,Z,he,Q,b,_e),Q.side=zt):y.renderBufferDirect(ne,Z,he,Q,b,_e),b.onAfterRender(y,Z,ne,he,Q,_e)}function Pn(b,Z,ne){Z.isScene!==!0&&(Z=k);let he=W.get(b),Q=g.state.lights,_e=g.state.shadowsArray,Fe=Q.state.version,ke=le.getParameters(b,Q.state,_e,Z,ne),Xe=le.getProgramCacheKey(ke),Qe=he.programs;he.environment=b.isMeshStandardMaterial?Z.environment:null,he.fog=Z.fog,he.envMap=(b.isMeshStandardMaterial?me:Ae).get(b.envMap||he.environment),he.envMapRotation=he.environment!==null&&b.envMap===null?Z.environmentRotation:b.envMapRotation,Qe===void 0&&(b.addEventListener("dispose",Pe),Qe=new Map,he.programs=Qe);let je=Qe.get(Xe);if(je!==void 0){if(he.currentProgram===je&&he.lightsStateVersion===Fe)return qs(b,ke),je}else ke.uniforms=le.getUniforms(b),b.onBeforeCompile(ke,y),je=le.acquireProgram(ke,Xe),Qe.set(Xe,je),he.uniforms=ke.uniforms;let Ye=he.uniforms;return(b.isShaderMaterial||b.isRawShaderMaterial)&&b.clipping!==!0||(Ye.clippingPlanes=pe.uniform),qs(b,ke),he.needsLights=(function(et){return et.isMeshLambertMaterial||et.isMeshToonMaterial||et.isMeshPhongMaterial||et.isMeshStandardMaterial||et.isShadowMaterial||et.isShaderMaterial&&et.lights===!0})(b),he.lightsStateVersion=Fe,he.needsLights&&(Ye.ambientLightColor.value=Q.state.ambient,Ye.lightProbe.value=Q.state.probe,Ye.directionalLights.value=Q.state.directional,Ye.directionalLightShadows.value=Q.state.directionalShadow,Ye.spotLights.value=Q.state.spot,Ye.spotLightShadows.value=Q.state.spotShadow,Ye.rectAreaLights.value=Q.state.rectArea,Ye.ltc_1.value=Q.state.rectAreaLTC1,Ye.ltc_2.value=Q.state.rectAreaLTC2,Ye.pointLights.value=Q.state.point,Ye.pointLightShadows.value=Q.state.pointShadow,Ye.hemisphereLights.value=Q.state.hemi,Ye.directionalShadowMap.value=Q.state.directionalShadowMap,Ye.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ye.spotShadowMap.value=Q.state.spotShadowMap,Ye.spotLightMatrix.value=Q.state.spotLightMatrix,Ye.spotLightMap.value=Q.state.spotLightMap,Ye.pointShadowMap.value=Q.state.pointShadowMap,Ye.pointShadowMatrix.value=Q.state.pointShadowMatrix),he.currentProgram=je,he.uniformsList=null,je}function js(b){if(b.uniformsList===null){let Z=b.currentProgram.getUniforms();b.uniformsList=Yr.seqWithValue(Z.seq,b.uniforms)}return b.uniformsList}function qs(b,Z){let ne=W.get(b);ne.outputColorSpace=Z.outputColorSpace,ne.batching=Z.batching,ne.batchingColor=Z.batchingColor,ne.instancing=Z.instancing,ne.instancingColor=Z.instancingColor,ne.instancingMorph=Z.instancingMorph,ne.skinning=Z.skinning,ne.morphTargets=Z.morphTargets,ne.morphNormals=Z.morphNormals,ne.morphColors=Z.morphColors,ne.morphTargetsCount=Z.morphTargetsCount,ne.numClippingPlanes=Z.numClippingPlanes,ne.numIntersection=Z.numClipIntersection,ne.vertexAlphas=Z.vertexAlphas,ne.vertexTangents=Z.vertexTangents,ne.toneMapping=Z.toneMapping}st.setAnimationLoop(function(b){Ce&&Ce(b)}),typeof self<"u"&&st.setContext(self),this.setAnimationLoop=function(b){Ce=b,We.setAnimationLoop(b),b===null?st.stop():st.start()},We.addEventListener("sessionstart",$e),We.addEventListener("sessionend",Be),this.render=function(b,Z){if(Z!==void 0&&Z.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(T===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(We.cameraAutoUpdate===!0&&We.updateCamera(Z),Z=We.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,Z,O),g=re.get(b,x.length),g.init(Z),x.push(g),R.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),de.setFromProjectionMatrix(R),ae=this.localClippingEnabled,ge=pe.init(this.clippingPlanes,ae),m=Le.get(b,_.length),m.init(),_.push(m),We.enabled===!0&&We.isPresenting===!0){let _e=y.xr.getDepthSensingMesh();_e!==null&&ot(_e,Z,-1/0,y.sortObjects)}ot(b,Z,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(se,be),M=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1,M&&Re.addToRenderList(m,b),this.info.render.frame++,ge===!0&&pe.beginShadows();let ne=g.state.shadowsArray;Ee.render(ne,b,Z),ge===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();let he=m.opaque,Q=m.transmissive;if(g.setupLights(),Z.isArrayCamera){let _e=Z.cameras;if(Q.length>0)for(let Fe=0,ke=_e.length;Fe<ke;Fe++)Wt(he,Q,b,_e[Fe]);M&&Re.render(b);for(let Fe=0,ke=_e.length;Fe<ke;Fe++){let Xe=_e[Fe];gt(m,b,Xe,Xe.viewport)}}else Q.length>0&&Wt(he,Q,b,Z),M&&Re.render(b),gt(m,b,Z);O!==null&&P===0&&(oe.updateMultisampleRenderTarget(O),oe.updateRenderTargetMipmap(O)),b.isScene===!0&&b.onAfterRender(y,b,Z),ht.resetDefaultState(),B=-1,H=null,x.pop(),x.length>0?(g=x[x.length-1],ge===!0&&pe.setGlobalState(y.clippingPlanes,g.state.camera)):g=null,_.pop(),m=_.length>0?_[_.length-1]:null},this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(b,Z,ne){let he=W.get(b);he.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,he.__autoAllocateDepthBuffer===!1&&(he.__useRenderToTexture=!1),W.get(b.texture).__webglTexture=Z,W.get(b.depthTexture).__webglTexture=he.__autoAllocateDepthBuffer?void 0:ne,he.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,Z){let ne=W.get(b);ne.__webglFramebuffer=Z,ne.__useDefaultFramebuffer=Z===void 0};let Zo=L.createFramebuffer();this.setRenderTarget=function(b,Z=0,ne=0){O=b,E=Z,P=ne;let he=!0,Q=null,_e=!1,Fe=!1;if(b){let ke=W.get(b);if(ke.__useDefaultFramebuffer!==void 0)X.bindFramebuffer(L.FRAMEBUFFER,null),he=!1;else if(ke.__webglFramebuffer===void 0)oe.setupRenderTarget(b);else if(ke.__hasExternalTextures)oe.rebindTextures(b,W.get(b.texture).__webglTexture,W.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let je=b.depthTexture;if(ke.__boundDepthTexture!==je){if(je!==null&&W.has(je)&&(b.width!==je.image.width||b.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(b)}}let Xe=b.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Fe=!0);let Qe=W.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Q=Array.isArray(Qe[Z])?Qe[Z][ne]:Qe[Z],_e=!0):Q=b.samples>0&&oe.useMultisampledRTT(b)===!1?W.get(b).__webglMultisampledFramebuffer:Array.isArray(Qe)?Qe[ne]:Qe,V.copy(b.viewport),U.copy(b.scissor),I=b.scissorTest}else V.copy(te).multiplyScalar(K).floor(),U.copy(q).multiplyScalar(K).floor(),I=ie;if(ne!==0&&(Q=Zo),X.bindFramebuffer(L.FRAMEBUFFER,Q)&&he&&X.drawBuffers(b,Q),X.viewport(V),X.scissor(U),X.setScissorTest(I),_e){let ke=W.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ke.__webglTexture,ne)}else if(Fe){let ke=W.get(b.texture),Xe=Z;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,ke.__webglTexture,ne,Xe)}else if(b!==null&&ne!==0){let ke=W.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ke.__webglTexture,ne)}B=-1},this.readRenderTargetPixels=function(b,Z,ne,he,Q,_e,Fe,ke=0){if(!b||!b.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=W.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Fe!==void 0&&(Xe=Xe[Fe]),Xe){X.bindFramebuffer(L.FRAMEBUFFER,Xe);try{let Qe=b.textures[ke],je=Qe.format,Ye=Qe.type;if(!D.textureFormatReadable(je))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!D.textureTypeReadable(Ye))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");Z>=0&&Z<=b.width-he&&ne>=0&&ne<=b.height-Q&&(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ke),L.readPixels(Z,ne,he,Q,rt.convert(je),rt.convert(Ye),_e))}finally{let Qe=O!==null?W.get(O).__webglFramebuffer:null;X.bindFramebuffer(L.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(b,Z,ne,he,Q,_e,Fe,ke=0){if(!b||!b.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=W.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Fe!==void 0&&(Xe=Xe[Fe]),Xe){if(Z>=0&&Z<=b.width-he&&ne>=0&&ne<=b.height-Q){X.bindFramebuffer(L.FRAMEBUFFER,Xe);let Qe=b.textures[ke],je=Qe.format,Ye=Qe.type;if(!D.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!D.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let et=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,et),L.bufferData(L.PIXEL_PACK_BUFFER,_e.byteLength,L.STREAM_READ),b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ke),L.readPixels(Z,ne,he,Q,rt.convert(je),rt.convert(Ye),0);let bt=O!==null?W.get(O).__webglFramebuffer:null;X.bindFramebuffer(L.FRAMEBUFFER,bt);let wt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await wu(L,wt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,et),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,_e),L.deleteBuffer(et),L.deleteSync(wt),_e}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,Z=null,ne=0){let he=Math.pow(2,-ne),Q=Math.floor(b.image.width*he),_e=Math.floor(b.image.height*he),Fe=Z!==null?Z.x:0,ke=Z!==null?Z.y:0;oe.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,ne,0,0,Fe,ke,Q,_e),X.unbindTexture()};let Jo=L.createFramebuffer(),Ys=L.createFramebuffer();this.copyTextureToTexture=function(b,Z,ne=null,he=null,Q=0,_e=null){let Fe,ke,Xe,Qe,je,Ye,et,bt,wt;_e===null&&(Q!==0?($i("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_e=Q,Q=0):_e=0);let Pt=b.isCompressedTexture?b.mipmaps[_e]:b.image;if(ne!==null)Fe=ne.max.x-ne.min.x,ke=ne.max.y-ne.min.y,Xe=ne.isBox3?ne.max.z-ne.min.z:1,Qe=ne.min.x,je=ne.min.y,Ye=ne.isBox3?ne.min.z:0;else{let Ut=Math.pow(2,-Q);Fe=Math.floor(Pt.width*Ut),ke=Math.floor(Pt.height*Ut),Xe=b.isDataArrayTexture?Pt.depth:b.isData3DTexture?Math.floor(Pt.depth*Ut):1,Qe=0,je=0,Ye=0}he!==null?(et=he.x,bt=he.y,wt=he.z):(et=0,bt=0,wt=0);let yt=rt.convert(Z.format),j=rt.convert(Z.type),Te;Z.isData3DTexture?(oe.setTexture3D(Z,0),Te=L.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(oe.setTexture2DArray(Z,0),Te=L.TEXTURE_2D_ARRAY):(oe.setTexture2D(Z,0),Te=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,Z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,Z.unpackAlignment);let ye=L.getParameter(L.UNPACK_ROW_LENGTH),ze=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ne=L.getParameter(L.UNPACK_SKIP_PIXELS),dt=L.getParameter(L.UNPACK_SKIP_ROWS),Mt=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Pt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Pt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Qe),L.pixelStorei(L.UNPACK_SKIP_ROWS,je),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ye);let vt=b.isDataArrayTexture||b.isData3DTexture,Ft=Z.isDataArrayTexture||Z.isData3DTexture;if(b.isDepthTexture){let Ut=W.get(b),an=W.get(Z),Ot=W.get(Ut.__renderTarget),Jn=W.get(an.__renderTarget);X.bindFramebuffer(L.READ_FRAMEBUFFER,Ot.__webglFramebuffer),X.bindFramebuffer(L.DRAW_FRAMEBUFFER,Jn.__webglFramebuffer);for(let Jt=0;Jt<Xe;Jt++)vt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,W.get(b).__webglTexture,Q,Ye+Jt),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,W.get(Z).__webglTexture,_e,wt+Jt)),L.blitFramebuffer(Qe,je,Fe,ke,et,bt,Fe,ke,L.DEPTH_BUFFER_BIT,L.NEAREST);X.bindFramebuffer(L.READ_FRAMEBUFFER,null),X.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(Q!==0||b.isRenderTargetTexture||W.has(b)){let Ut=W.get(b),an=W.get(Z);X.bindFramebuffer(L.READ_FRAMEBUFFER,Jo),X.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ys);for(let Ot=0;Ot<Xe;Ot++)vt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ut.__webglTexture,Q,Ye+Ot):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ut.__webglTexture,Q),Ft?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,an.__webglTexture,_e,wt+Ot):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,an.__webglTexture,_e),Q!==0?L.blitFramebuffer(Qe,je,Fe,ke,et,bt,Fe,ke,L.COLOR_BUFFER_BIT,L.NEAREST):Ft?L.copyTexSubImage3D(Te,_e,et,bt,wt+Ot,Qe,je,Fe,ke):L.copyTexSubImage2D(Te,_e,et,bt,Qe,je,Fe,ke);X.bindFramebuffer(L.READ_FRAMEBUFFER,null),X.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ft?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(Te,_e,et,bt,wt,Fe,ke,Xe,yt,j,Pt.data):Z.isCompressedArrayTexture?L.compressedTexSubImage3D(Te,_e,et,bt,wt,Fe,ke,Xe,yt,Pt.data):L.texSubImage3D(Te,_e,et,bt,wt,Fe,ke,Xe,yt,j,Pt):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,_e,et,bt,Fe,ke,yt,j,Pt.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,_e,et,bt,Pt.width,Pt.height,yt,Pt.data):L.texSubImage2D(L.TEXTURE_2D,_e,et,bt,Fe,ke,yt,j,Pt);L.pixelStorei(L.UNPACK_ROW_LENGTH,ye),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ze),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ne),L.pixelStorei(L.UNPACK_SKIP_ROWS,dt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Mt),_e===0&&Z.generateMipmaps&&L.generateMipmap(Te),X.unbindTexture()},this.copyTextureToTexture3D=function(b,Z,ne=null,he=null,Q=0){return $i('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,Z,ne,he,Q)},this.initRenderTarget=function(b){W.get(b).__webglFramebuffer===void 0&&oe.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?oe.setTextureCube(b,0):b.isData3DTexture?oe.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?oe.setTexture2DArray(b,0):oe.setTexture2D(b,0),X.unbindTexture()},this.resetState=function(){E=0,P=0,O=null,X.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}};var Ui=(r,e=0,t=1)=>Math.min(t,Math.max(e,r)),ct=(r,e,t)=>{let n=Ui((t-r)/(e-r));return n*n*(3-2*n)},qn=(r,e,t)=>{let n=Ui((t-r)/(e-r));return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2};var Ke=(r,e,t)=>r+(e-r)*t,jo=r=>()=>(r=r*16807%2147483647)/2147483647,Yn=1/6,Dm=1/3,Um=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],Wo=new Uint8Array(512);{let r=jo(1234567),e=new Uint8Array(256);for(let t=0;t<256;t++)e[t]=t;for(let t=255;t>0;t--){let n=Math.floor(r()*(t+1));[e[t],e[n]]=[e[n],e[t]]}for(let t=0;t<512;t++)Wo[t]=e[t&255]}function or(r,e,t){let n=(r+e+t)*Dm,i=Math.floor(r+n),s=Math.floor(e+n),a=Math.floor(t+n),o=(i+s+a)*Yn,l=r-i+o,c=e-s+o,h=t-a+o,u,d,p,f,v,m;l>=c?c>=h?(u=1,d=0,p=0,f=1,v=1,m=0):l>=h?(u=1,d=0,p=0,f=1,v=0,m=1):(u=0,d=0,p=1,f=1,v=0,m=1):c<h?(u=0,d=0,p=1,f=0,v=1,m=1):l<h?(u=0,d=1,p=0,f=0,v=1,m=1):(u=0,d=1,p=0,f=1,v=1,m=0);let g=[[l,c,h,0,0,0],[l-u+Yn,c-d+Yn,h-p+Yn,u,d,p],[l-f+2*Yn,c-v+2*Yn,h-m+2*Yn,f,v,m],[l-1+3*Yn,c-1+3*Yn,h-1+3*Yn,1,1,1]],_=0,x=i&255,y=s&255,T=a&255;for(let[E,P,O,B,H,V]of g){let U=.6-E*E-P*P-O*O;if(U>0){let I=Um[Wo[x+B+Wo[y+H+Wo[T+V]]]%12];U*=U,_+=U*U*(I[0]*E+I[1]*P+I[2]*O)}}return 32*_}var Nm=(r,e,t,n=4)=>{let i=.5,s=1,a=0;for(let o=0;o<n;o++)a+=i*or(r*s,e*s,t*s),i*=.5,s*=2;return a};function Fm(r=1){let e=new Nr;e.add(new qe(new di(24,16,24),new ui({color:new Oe(.5,.43,.35),side:Yt})));let t=(n,i,s,a)=>{let o=new qe(new Hn(n,i),new ui({color:new Oe(...s),side:zt}));o.position.set(a[0]*r,a[1],a[2]),o.lookAt(0,0,0),e.add(o)};return t(8,6,[7,6.6,6],[-5,7,5]),t(1.4,10,[3.2,3.1,3],[-9,0,-1]),t(1.4,10,[2.4,2.3,2.2],[9,.5,-2]),t(7,12,[.03,.025,.02],[-8.5,0,6.5]),t(7,12,[.03,.025,.02],[8.5,0,6.5]),t(16,6,[.9,.8,.68],[0,-7.5,0]),e}var Kr=1,sn=1.13,Xs=.96;var ld=1/.745;function Om(){let r=document.createElement("canvas");r.width=r.height=512;let e=r.getContext("2d"),t=jo(77);e.fillStyle="rgb(224,224,224)",e.fillRect(0,0,512,512);for(let i=0;i<5200;i++){let s=t()*512,a=20+t()*472,o=.35+t()*.9;e.fillStyle=`rgba(255,${238+t()*17|0},${222+t()*30|0},${(.3+t()*.45).toFixed(2)})`,e.beginPath(),e.ellipse(s,a,o,o*(.8+t()*.4),0,0,6.283),e.fill()}for(let i=0;i<900;i++){let s=t()*512,a=t()*512,o=.5+t()*1.4;e.fillStyle=`rgba(150,120,120,${(.12+t()*.18).toFixed(2)})`,e.beginPath(),e.arc(s,a,o,0,6.283),e.fill()}let n=new ji(r);return n.colorSpace=Ht,n.wrapS=n.wrapT=Rr,n.anisotropy=8,n}function Bm(r){let e=new mn(1,96,80,r>0?Math.PI/2:-Math.PI/2,Math.PI),t=e.attributes.position,n=e.attributes.normal,i=e.attributes.uv,s=t.count,a=new Float32Array(t.array),o=new Float32Array(s*3),l=new Float32Array(s*3),c=new Float32Array(s*3),h=new Float32Array(s*2),u=new Oe("#5e0610"),d=new Oe("#a80b1a"),p=new Oe("#cf3a1c"),f=new Oe,v=new Oe("#3d100b"),m=new Oe("#6a1f14"),g=new Oe("#9c4024"),_=new Oe;for(let y=0;y<s;y++){let T=a[y*3],E=a[y*3+1],P=a[y*3+2],O=ct(.86,1,-E),B=Math.max(0,E-.9),H=1-O*.08-B*.5,V=T*Kr*H,U=E*sn+O*.13,I=P*Xs*H;t.setXYZ(y,V,U,I);let N=T/Kr,G=E/sn,$=P/Xs,ee=Math.hypot(N,G,$)||1;n.setXYZ(y,N/ee,G/ee,$/ee),h[y*2]=.5+V/(2*Kr)*.965,h[y*2+1]=.5+U/(2*sn)*.965;let K=Nm(T*2.6+3,E*2.6,P*2.6,3);f.copy(d).lerp(u,Ui(.3-K*.55+Math.max(0,-E)*.35)).lerp(p,Ui((E-.5)*1.3)*.7),f.multiplyScalar(ld),l.set([f.r,f.g,f.b],y*3);let se=or(T*1.8+9,E*1.2,P*1.8),be=or(T*3.6,E*3,P*3.6),q=.86+(se*.05+be*.012),ie=Math.abs(T)<.42?(.42-Math.abs(T))*.55:0;o.set([V*q+r*ie*.38,U*q*.94,I*q*.95],y*3),_.copy(v).lerp(m,ct(-.6,.1,se)).lerp(g,ct(.2,.9,se)*.75),_.multiplyScalar(ld*(.94+or(T*6,E*6,P*6)*.08)),c.set([_.r,_.g,_.b],y*3)}e.setAttribute("color",new Dt(l,3)),e.setAttribute("colorDry",new Dt(c,3)),e.setAttribute("photoUV",new Dt(h,2)),e.morphAttributes.position=[new Dt(o,3)];let x=new Rt;return x.setIndex(e.index),x.setAttribute("position",new Dt(o,3)),x.computeVertexNormals(),e.morphAttributes.normal=[x.attributes.normal],e.userData.unit=a,e}function jc(r){let e=new Nt({vertexColors:!0,map:r,roughness:.34,clearcoat:.9,clearcoatRoughness:.14,sheen:.25,sheenColor:new Oe("#ff9b8a"),sheenRoughness:.5,side:zt}),t={value:0},n={value:null},i={value:0},s={value:0};return e.userData={dry:t,photo:n,usePhoto:i,glow:s},e.onBeforeCompile=a=>{Object.assign(a.uniforms,{uDry:t,uPhoto:n,uUsePhoto:i,uGlow:s}),a.vertexShader=`attribute vec3 colorDry;
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
  totalEmissiveRadiance += photoLin * uGlow * usePhoto;`)},e.customProgramCacheKey=()=>"cascarup-skin-2",e}function zm(r,e){let n=new Hn(1,1,160,1),i=n.attributes.position;for(let s=0;s<=160;s++){let a=-Math.PI/2+s/160*Math.PI*2;for(let o=0;o<2;o++){let l=o===0?1:e,c=o*161+s,h=Math.sin(a),u=Math.cos(a),d=ct(.86,1,-h),p=Math.max(0,h-.9),f=1-d*.08-p*.5;i.setXYZ(c,r*.002,(h*sn+d*.13)*l,u*Xs*f*l)}}return n.computeVertexNormals(),n}function km(r){let e=new mn(1,72,54),t=e.attributes.position,n=e.attributes.uv,i=t.count,s=new Float32Array(i*3),a=new Oe("#6b3b1f"),o=new Oe("#8a5430"),l=new Oe("#2a1309"),c=new Oe;for(let p=0;p<i;p++){let f=t.getX(p),v=t.getY(p),m=t.getZ(p),g=r*f<0,_=f*.5,x=v*.8,y=m*.62,T=0;if(g){_*=.12;let P=.08*Math.sin(v*3.4);T=Math.exp(-Math.pow((y-P)/.06,2))*(1-Math.pow(Math.abs(v),6)),_+=r*T*.05}_+=or(f*4,v*4,m*4)*.006,t.setXYZ(p,_,x,y),c.copy(a).lerp(o,ct(-.2,.8,or(f*3,v*3,m*3))).lerp(l,T*.9),s.set([c.r,c.g,c.b],p*3);let E=dd[g?"flat":"round"];n.setXY(p,E.cx+(g?-r:r)*m*E.rx,1-(E.cy-v*E.ry))}e.setAttribute("color",new Dt(s,3));let h=e.index.array,u=[],d=[];for(let p=0;p<h.length;p+=3)((t.getX(h[p])+t.getX(h[p+1])+t.getX(h[p+2]))*r<0?u:d).push(h[p],h[p+1],h[p+2]);return e.setIndex([...u,...d]),e.addGroup(0,u.length,0),e.addGroup(u.length,d.length,1),e.computeVertexNormals(),e}var $o=document.documentElement.dataset.root||"",dd={flat:{src:$o+"assets/bean/bohne-flach.webp",cx:.4859,cy:.488,rx:.4932*.95,ry:.4997*.96},round:{src:$o+"assets/bean/bohne-rund.webp",cx:.5061,cy:.5127,rx:.4911*.95,ry:.4889*.96}};function Gm(r){let e=new mn(1,48,36,r>0?Math.PI/2:-Math.PI/2,Math.PI),t=e.attributes.position;for(let n=0;n<t.count;n++){let i=t.getX(n),s=t.getY(n),a=t.getZ(n),o=1+or(i*6,s*6,a*6)*.03;t.setXYZ(n,i*.58*o,s*.9*o,a*.7*o)}return e.computeVertexNormals(),e}var Vm=`
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
}`;function cd(r,e=null){let t=e||{uBloom:{value:0},uTime:{value:0},uTop:{value:0},uSrc0:{value:new C(0,9,0)},uSrc1:{value:new C(0,9,0)}};return r.userData.infuse=t,r.onBeforeCompile=n=>{Object.assign(n.uniforms,t),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
`+Vm).replace("#include <transmission_fragment>",it.transmission_fragment.replace("material.attenuationColor = attenuationColor;",`
  {
    vec3 rd = normalize( vWorldPosition - cameraPosition );
    float dens = 0.0;
    // three looks along the line of sight (each two noises): five were the pot's heaviest cost, three look the same
    for ( int i = 0; i < 3; i ++ ) dens += steep( vWorldPosition + rd * ( .09 + float( i ) * .26 ) );
    dens /= 3.0;
    // clear water absorbs nothing; where the cascara has steeped, the same amber absorbs ever more
    material.attenuationColor = attenuationColor;
    material.attenuationDistance = attenuationDistance / max( dens, .002 );   // absorption grows with the density
  }`))},r.customProgramCacheKey=()=>"cascarup-infuse-7",r}var Xo=[[0,0],[.3,0],[.322,.012],[.33,.04],[.33,2.38],[.327,2.399],[.319,2.418],[.311,2.437],[.303,2.457],[.293,2.476],[.282,2.495],[.268,2.514],[.247,2.533],[.22,2.552],[.182,2.571],[.163,2.587],[.148,2.6],[.139,2.616],[.138,2.7],[.146,2.71],[.146,2.74],[.139,2.75],[.146,2.765],[.146,2.79],[.139,2.8],[.142,2.92],[.135,2.94],[.106,2.94],[.104,2.7],[.118,2.6]],hd=2.94,Hm=2.73,pd=17,Wm=.33,$m=1.16;function $s(r,e=0,t=96){return new kr(r.map(([n,i])=>new xe(Math.max(0,n-e),i)),t)}var Xm=()=>Xo.slice(0,pd+1);function jm(r,e){for(let t=1;t<=pd;t++){let[n,i]=Xo[t-1],[s,a]=Xo[t];if(r>=i&&r<=a&&a>i)return Math.max(0,Ke(n,s,(r-i)/(a-i))-e)}return 0}function qm(){let r=$s([[0,.236],[.14,.236],[.151,.231],[.156,.22],[.156,.168],[.15,.163],[.156,.158],[.156,.128],[.15,.123],[.156,.118],[.156,.088],[.15,.083],[.156,.078],[.156,.06],[.149,.056],[.153,.052],[.153,.004],[.147,0],[.135,0]],0,180),e=r.attributes.position;for(let t=0;t<e.count;t++){let n=e.getX(t),i=e.getY(t),s=e.getZ(t);if(i>.17&&i<.218){let a=Math.atan2(s,n),o=1+.02*Math.max(-.6,Math.min(.6,Math.cos(a*64)*2));e.setX(t,n*o),e.setZ(t,s*o)}}return r.computeVertexNormals(),r}var Zc=new Set,Jc=(r,e)=>{let t={};return Zc.add(t),(...n)=>{Zc.delete(t),e&&e(...n)}};function Ym(r){let e=Jc(r),t=new Ji().load(r,e,void 0,e);return t.colorSpace=Ht,t.anisotropy=8,t}var qc=2.38,Zm=()=>{let r=Wm+.004,e=qc*r/(1007/1312);return new pi(r,r,e,128,1,!0,-qc/2,qc)};function Jm(){let r=document.createElement("canvas");r.width=r.height=256;let e=r.getContext("2d"),t=e.createRadialGradient(128,128,0,128,128,128);return t.addColorStop(0,"rgba(58,33,22,.6)"),t.addColorStop(.35,"rgba(58,33,22,.3)"),t.addColorStop(1,"rgba(58,33,22,0)"),e.fillStyle=t,e.fillRect(0,0,256,256),new ji(r)}var Km={original:{label:$o+"assets/label/original.webp",syrup:"#74290d",surface:"#3c1306",props:"cascara"},cozy:{label:$o+"assets/label/cozy.webp",syrup:"#66230b",surface:"#341005",props:"spice"}};function ud(r){let e=new qi,t=.018,n=1.6,i=.085,s=.022,a=90,o=(f,v)=>[Math.cos(f)*v,Math.sin(f)*v];for(let f=0;f<=a;f++){let v=f/a*n*Math.PI*2,[m,g]=o(v,i-s*v/Math.PI);f?e.lineTo(m,g):e.moveTo(m,g)}for(let f=a;f>=0;f--){let v=f/a*n*Math.PI*2,[m,g]=o(v,i-s*v/Math.PI-t);e.lineTo(m,g)}let l=new zr(e,{depth:r,steps:48,bevelEnabled:!1,curveSegments:4});l.translate(0,0,-r/2);let c=l.attributes.position,h=new Float32Array(c.count*3),u=new Oe("#7a3c1c"),d=new Oe("#a4592c"),p=new Oe;for(let f=0;f<c.count;f++){let v=c.getX(f),m=c.getY(f),g=c.getZ(f),_=Math.atan2(m,v),x=.5+.5*Math.sin(_*38+Math.sin(g*9)*.6),y=.5+.5*Math.sin(g*41+_*3)*Math.sin(g*17);p.copy(u).lerp(d,x*.45+y*.25),h.set([p.r,p.g,p.b],f*3)}return l.setAttribute("color",new Dt(h,3)),l.computeVertexNormals(),new qe(l,new fn({vertexColors:!0,roughness:.86}))}function Qm(){let r=new qt,e=new fn({color:"#4e2311",roughness:.9}),t=new fn({color:"#8a4f27",roughness:.75}),n=new Nt({color:"#7a4220",roughness:.3,clearcoat:.8,clearcoatRoughness:.25}),i=new mn(1,32,18),s=i.attributes.position;for(let o=0;o<s.count;o++){let l=s.getX(o),c=l>0?1-l*l*.82:1-l*l*.25,h=1+.06*Math.sin(l*23+s.getZ(o)*9);s.setXYZ(o,l,s.getY(o)*c*h,s.getZ(o)*c*h)}i.computeVertexNormals();for(let o=0;o<8;o++){let l=new qt;l.rotation.y=o/8*Math.PI*2+o%2*.05;let c=new qe(i,e);c.scale.set(.21,.07,.08),c.position.x=.19,c.rotation.z=-.1;let h=new qe(new mn(1,20,12),t);h.scale.set(.15,.03,.045),h.position.set(.2,.068,0);let u=new qe(new mn(1,20,14),n);u.scale.set(.06,.035,.04),u.position.set(.2,.075,0),l.add(c,h,u),r.add(l)}let a=new qe(new mn(.055,16,12),e);return a.scale.y=.9,r.add(a),r}var ef=[[0,0],[.95,0],[1.03,.03],[1.06,.1],[1.06,.9],[1.085,.955],[1.09,1],[1.045,1],[1.025,.96],[1.025,.1],[.97,.055],[0,.055]];function tf(r){let e=document.createElement("canvas");e.width=128,e.height=256;let t=e.getContext("2d"),n=jo(r);t.filter="blur(7px)",t.lineCap="round";for(let s=0;s<3;s++){t.strokeStyle=`rgba(255,255,255,${(.55+n()*.35).toFixed(2)})`,t.lineWidth=7+n()*9,t.beginPath();let a=44+n()*40,o=10+n()*16,l=1.6+n()*1.6,c=n()*6;for(let h=236;h>=20;h-=6){let u=(236-h)/216,d=a+Math.sin(u*l*Math.PI+c)*o*(.3+u);h===236?t.moveTo(d,h):t.lineTo(d,h)}t.stroke()}t.filter="none",t.globalCompositeOperation="destination-in";let i=t.createLinearGradient(0,0,0,256);return i.addColorStop(0,"rgba(0,0,0,0)"),i.addColorStop(.3,"#000"),i.addColorStop(.8,"#000"),i.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=i,t.fillRect(0,0,128,256),new ji(e)}var Yc=[0,.28,.45,.6,.765,.862,1],md=[2.1,1.9,1.8,2.1,2.5,2.2],Kc=md.reduce((r,e)=>r+e)*1e3,_n=md.reduce((r,e)=>[...r,r[r.length-1]+e],[0]).map((r,e,t)=>r/t[t.length-1]);function ar(r){let e=1;for(;e<_n.length-1&&r>_n[e];)e++;let t=_n[e-1],n=_n[e];return Yc[e-1]+(Yc[e]-Yc[e-1])*Math.min(1,Math.max(0,(r-t)/(n-t)))}function fd(r,{onFrame:e,photo:t,plantBox:n,gentle:i=!1}={}){t&&(Kr=1,sn=t.aspect||sn,Xs=.94);let s=new Vo({canvas:r,antialias:!0,alpha:!1,powerPreference:"high-performance"}),a=Math.min(window.devicePixelRatio||1,2),o=0;s.setPixelRatio(a),s.transmissionResolutionScale=.3,s.debug.checkShaderErrors=!1,s.toneMapping=Eo,s.toneMappingExposure=1,s.localClippingEnabled=!0;let l=new Nr;l.background=new Oe("#F7ECDA");let c=new Zr(s);l.environment=c.fromScene(Fm(-1),.03).texture,l.environmentIntensity=.9;let h=new jt(24,1,.1,100);h.position.set(0,0,12.6);let u=new Vr("#fff1df",1.5);u.position.set(4,6,6),l.add(u);let d=new Vr("#ffe9da",1.3);d.position.set(-5,3,-6),l.add(d),l.add(new Ns("#fff6ea","#9a6a48",.25));let p=new qt;l.add(p);let f=new qt;p.add(f);let v=Om(),m=new Nt({color:"#f0d9a2",roughness:.3,clearcoat:.8,clearcoatRoughness:.2,side:Yt,transparent:!0}),g=new Nt({color:"#e2ab82",roughness:.4,side:zt,transparent:!0}),_=new Nt({color:"#f6e2a8",roughness:.14,transmission:.65,thickness:.45,ior:1.4,attenuationColor:new Oe("#e3b765"),attenuationDistance:.5,clearcoat:.7,clearcoatRoughness:.1,side:zt,transparent:!0}),x=new Nt({color:"#efe4cc",roughness:.95,side:zt,transparent:!0}),y=["flat","round"].map(j=>{let Te=new Nt({vertexColors:!0,roughness:.42,clearcoat:.3,clearcoatRoughness:.35});return new Ji().load(dd[j].src,Jc(0,ye=>{ye.colorSpace=Ht,ye.anisotropy=8,Object.assign(Te,{map:ye,vertexColors:!1,roughness:.5,clearcoat:.22,clearcoatRoughness:.4,emissiveMap:ye,emissiveIntensity:.3}),Te.color.set("#ffffff"),Te.emissive.set("#ffffff"),Te.needsUpdate=!0})),Te}),T=[],E=[-1,1].map(j=>{let Te=new qt,ye=Bm(j),ze=jc(v);T.push(ze);let Ne=new qe(ye,ze);Ne.morphTargetInfluences=[0];let dt=new qe(ye,m);dt.morphTargetInfluences=[0],dt.scale.setScalar(.965);let Mt=new qe(zm(j,.955),g);Te.add(Ne,dt,Mt);let vt=new qe(new mn(1,72,54,j>0?Math.PI/2:-Math.PI/2,Math.PI),_),Ft=new qe(Gm(j),x),Ut=new qe(km(j),y);return f.add(Te,vt,Ft,Ut),{side:j,half:Te,skin:Ne,flesh:dt,cut:Mt,pulp:vt,parch:Ft,bean:Ut}}),P=new fn({color:"#5d5230",roughness:.8}),O=new qe(new pi(.05,.085,.2,16),P);O.position.y=sn+.06,O.rotation.z=-.15,f.add(O);let B=new qe(new Cn(.17,.05,14,40),new fn({color:"#3b1d12",roughness:.85}));B.position.y=-sn+.115,B.rotation.x=Math.PI/2,B.scale.set(1,1,.7),f.add(B);let H=new qe(new Pi(.12,24),new fn({color:"#2a120b",roughness:.9,side:zt}));H.position.y=-sn+.12,H.rotation.x=Math.PI/2,f.add(H);let V=-1.45,U=1,I=Jm(),N=new ui({map:I,transparent:!0,depthWrite:!1}),G=(j,Te)=>{let ye=new qe(new Hn(1,1),N.clone());return ye.rotation.x=-Math.PI/2,ye.scale.set(j,Te,1),ye},$=new Nt({color:"#ffffff",roughness:.03,transmission:1,thickness:.3,ior:1.5,clearcoat:1,clearcoatRoughness:.02,attenuationColor:new Oe("#e4ebe2"),attenuationDistance:2.5,transparent:!0,side:zt,depthWrite:!1}),ee=new qt;p.add(ee),$.side=Li;let K=$.clone(),se=new qe($s(ef,0,128),K),be=new Cn(.14,.034,12,32,Math.PI),te=[-1,1].map(j=>{let Te=new qe(be,K);return Te.position.set(j*1.07,.8,0),Te.rotation.z=-j*Math.PI/2,Te}),q=new un(new C(0,-1,0),0),ie=cd(new Nt({color:"#ffffff",roughness:.05,transmission:1,thickness:.16,ior:1.33,attenuationColor:new Oe("#8f3612"),attenuationDistance:.14,clearcoat:1,clippingPlanes:[q]})),de=ie.userData.infuse,ge=cd(ie.clone(),de);ge.transparent=!0,ge.clippingPlanes=[q];let ae=new qe($s([[0,.055],[.97,.055],[1.02,.1],[1.02,1]],.01,128),ie),Ge=new qe(new Pi(1.012,96),new fn({color:"#dfe6e4",roughness:.55,metalness:0,transparent:!0,opacity:0,depthWrite:!1,envMapIntensity:.08})),R=new Oe("#dfe6e4"),S=new Oe("#4e1806");Ge.rotation.x=-Math.PI/2;let z=new qe(new Cn(1.016,.007,8,128),new Nt({color:"#9a5a34",roughness:.4,transparent:!0,opacity:0,depthWrite:!1}));z.rotation.x=Math.PI/2;let k=G(3,2.1);k.position.y=.004,ee.add(k,ae,Ge,z,se,...te),ae.renderOrder=Ge.renderOrder=z.renderOrder=1;let M=[11,23,37,41].map(tf),A=jo(31),F=Array.from({length:12},(j,Te)=>{let ye=new Ss(new Fr({map:M[Te%4],color:"#ffffff",transparent:!0,depthWrite:!1,opacity:0}));return ye.userData={seed:Te/12+A()*.05,x:(A()-.5)*1.3,z:(A()-.5)*.7,drift:(A()-.5)*.4},ee.add(ye),ye}),D=new qe(new Cn(1.012,.008,8,128),new Nt({color:"#ffffff",roughness:.1,clearcoat:1,transparent:!0,opacity:.55,depthWrite:!1}));D.rotation.x=Math.PI/2,ee.add(D),D.renderOrder=1;let X=new Nt({color:"#ffffff",roughness:.1,clearcoat:1,transparent:!0,opacity:0,depthWrite:!1}),J=[0,1].map(()=>{let j=new qe(new Cn(1,.009,8,72),X.clone());return j.rotation.x=Math.PI/2,j.visible=!1,p.add(j),j}),W=$s(Xo,0,128),oe=$s(Xm(),.02,96),Ae=qm(),me=Zm(),Ue=new Nt({color:"#dcdcd6",metalness:1,roughness:.3,transparent:!0}),ue=["original","cozy"].map((j,Te)=>{let ye=Km[j],ze=new qt;p.add(ze);let Ne=new un(new C(0,-1,0),0),dt=new Nt({color:"#ffffff",roughness:.05,transmission:1,thickness:.62,ior:1.45,attenuationColor:new Oe(ye.syrup),attenuationDistance:.3,clearcoat:1,clippingPlanes:[Ne]}),Mt=new qe(oe,dt),vt=new qe(new Pi(1,72),new Nt({color:ye.surface,roughness:.05,clearcoat:1}));vt.rotation.x=-Math.PI/2;let Ft=new qe(new Cn(1,.006,8,96),new Nt({color:"#a85a34",roughness:.15,transparent:!0,opacity:.35}));Ft.rotation.x=Math.PI/2;let Ut=new qe(Ae,Ue.clone()),an=Ym(ye.label),Ot=new fn({map:an,emissiveMap:an,emissive:"#ffffff",emissiveIntensity:.1,roughness:.6,side:zt}),Jn=new qe(me,Ot);Jn.position.y=$m;let Jt=G(1.3,1);return Jt.position.y=.004,ze.add(Jt,Mt,vt,Ft,new qe(W,$),Jn,Ut),Mt.renderOrder=vt.renderOrder=Ft.renderOrder=1,ze.scale.setScalar(U),{id:j,k:ye,g:ze,fill:Ne,syrup:Mt,surface:vt,meniscus:Ft,cap:Ut,label:Jn,labelMat:Ot,tex:an,shade:Jt,x:Te?.55:-.55}}),ce=new pi(.04,.03,1,28,1,!0);ce.translate(0,-.5,0);let le=new Nt({color:"#a8481f",roughness:.03,clearcoat:1,clearcoatRoughness:.02,transmission:.5,thickness:.1,ior:1.45,attenuationColor:new Oe("#7a260a"),attenuationDistance:.14,emissive:new Oe("#3a1004")}),we={value:99};le.transparent=!0,le.onBeforeCompile=j=>{j.uniforms.uFadeTop=we,j.fragmentShader=`uniform float uFadeTop;
`+j.fragmentShader.replace("#include <alphamap_fragment>",`#include <alphamap_fragment>
	diffuseColor.a *= smoothstep( uFadeTop, uFadeTop - 1.1, vWorldPosition.y );`)},le.customProgramCacheKey=()=>"cascarup-stream-2";let Le=ue.map(()=>{let j=new qe(ce,le);return j.visible=!1,p.add(j),j}),re=E.map((j,Te)=>{let ye=new qe(j.skin.geometry,jc(v));return ye.morphTargetInfluences=[1],ye.material.userData.dry.value=1,ye.material.roughness=.58,ye.material.clearcoat=.16,ye.material.clearcoatRoughness=.4,ye.material.sheen=.4,ye.material.sheenColor.set("#c07a5c"),ye.scale.setScalar(.16),ye.visible=!1,p.add(ye),ye.material.transparent=!0,{m:ye,x:Te?-1.2:-2.02,z:Te?.9:.55,ry:Te?2.4:-.6}}),pe=[{o:ud(1.2),x:1.36,y:.04,z:.3,r:[0,Math.PI/2-.35,0],s:.5},{o:ud(1.2),x:1.44,y:.105,z:.04,r:[0,Math.PI/2-.62,.05],s:.5},{o:Qm(),x:1.08,y:.045,z:.82,r:[.05,.4,-.04],s:.58}],Ee=j=>{let Te=[];return j.traverse(ye=>{ye.material&&(ye.material.transparent=!0,Te.push(ye.material))}),Te};for(let j of pe)j.o.visible=!1,p.add(j.o),j.mats=Ee(j.o);let Re=G(1.5,.9);p.add(Re);let ve=new qt,Ve=jc(v);T.push(Ve);for(let j of E){let Te=new qe(j.skin.geometry,Ve);Te.morphTargetInfluences=[0],ve.add(Te)}let He=new qe(O.geometry,P);He.position.y=sn+.06,He.rotation.z=-.15,ve.add(He);let rt=B.clone();ve.add(rt);let ht=.15;ve.scale.setScalar(ht),p.add(ve);let at=G(.42,.42);p.add(at);let L=G(1,1);p.add(L);let xt=!1;t&&t.texture&&new Ji().load(t.texture,Jc(0,j=>{j.anisotropy=8;for(let Te of T)Te.userData.photo.value=j,Te.userData.usePhoto.value=1,Te.userData.glow.value=.72;xt=!0,He.visible=rt.visible=!1}));let ft=E[1],We={haut:new Lt,fleisch:new Lt,pergament:new Lt,bohne:new Lt};ft.half.add(We.haut),We.haut.position.set(.62,.7,.34),ft.pulp.add(We.fleisch),We.fleisch.position.set(.58,-.5,.4),ft.parch.add(We.pergament),We.pergament.position.set(.3,.6,.3),ft.bean.add(We.bohne),We.bohne.position.set(.28,-.42,.22);let Y=1,fe=1,Se=!0,Pe=0,De=0,Ce=performance.now(),$e=!0,Be=0,st=null,ot=null,gt=new C;function Wt(){if(ot=null,!st||!n)return;let[j,Te,ye,ze]=n,Ne=st,dt=Math.max(10,Math.min((Ne.r-Ne.l)/(ye-j),(Ne.b-Ne.t)/(ze-Te),Math.min(Y,fe)*.2)),Mt=(Ne.l+Ne.r)/2-(j+ye)/2*dt,vt=(Ne.t+Ne.b)/2-(Te+ze)/2*dt,Ft=fe/2/(Math.tan(h.fov*Math.PI/360)*12.6*dt);ot={ox:(Y/2-Mt)/Y,oy:(fe/2-vt)/fe,zoom:Ft}}function vi(j,Te){Y=j,fe=Te,s.setSize(j,Te,!1),wt=!0,h.aspect=j/Te,Se=j/Te>1.05,h.fov=Se?24:Ke(33,27,ct(.56,.8,j/Te)),h.updateProjectionMatrix(),We.fleisch.position.set(.58,Se?-.5:.55,.4),We.pergament.position.set(.3,Se?.6:.45,.3),Wt()}function lr(j,Te,ye,ze,Ne=0){h.clearViewOffset(),h.setViewOffset(Y,fe,Y*j,fe*Te,Y,fe),h.position.set(0,ze+12.6*ye*Math.tan(Ne),12.6*ye),h.rotation.set(-Ne,0,0),h.updateProjectionMatrix()}let Pn=.8,js=.58,qs=.1,Zo={1:.655,"-1":.675},Jo=V+hd*U,Ys=4.6,b=[{up:[.774,.804],pour:[.803,.812,.836,.846],fill:[.805,.843],cap:[.865,.9]},{up:[.776,.806],pour:[.82,.829,.852,.862],fill:[.822,.86],cap:[.872,.905]}],Z={dried:[{at:[-1.38,2.25,.35],r:[1.1,2.1,.5]},{at:[-1.12,1.15,.35],r:[-1.3,-.4,-.3]}],fresh:{at:[-1.5,1.7,.2],r:[.2,.3,-.35]},spices:[{at:[1.32,2.2,.25],r:[.3,.9,.7]},{at:[1.15,1.05,.45],r:[-.4,1.9,-.5]},{at:[1.42,1.6,.55],r:[1.25,.2,.3]}]},ne=new C,he={skin:1.9,pulp:1.3,parch:.8,bean:.3};function Q(j,Te){Be+=Te;let ye=qn(.1,.24,j),ze=ct(.08,.2,j)*(1-ct(.33,.41,j)),Ne=ct(.3,.43,j),dt=ct(.31,.42,j),Mt=qn(.34,.45,j),vt=ct(.47,.58,j),Ft=qn(.48,.6,j),Ut=ct(.575,.65,j),an=qn(.575,.655,j),Ot=qn(.6,.65,j),Jn=ct(.68,.76,j),Jt=ct(.715,.775,j),cr=qn(.77,.79,j),_i=ct(.772,.82,j),In=qn(.79,.835,j),Ze=qn(.875,.95,j),Kn=ct(.875,.95,j),on=Ut*(1-Kn),Qn=Ke(Ke(Ke(0,-.84,Ut),.02,_i),-.06,Kn),Zs=.2*Ut*(1-_i),ei=1-ct(.04,.2,j),Ni,Tt,gn;Se?(Ni=-.2*(1-ze)-.03*Kn,Tt=0,gn=1-.04*Kn):(Ni=0,Tt=Ke(Ke(-.21,-.03,ze),-.07,on)-.17*_i*(1-Kn),gn=1+.3*ze-.04*Ut*(1-_i)+.25*_i*(1-Kn)+.38*Kn);let Fi=ot||(Se?{ox:-.22,oy:.08,zoom:1.32}:{ox:0,oy:.26,zoom:2.02});lr(Ke(Ni,Fi.ox,ei),Ke(Tt,Fi.oy,ei),Ke(gn,Fi.zoom,ei),Qn,Zs),p.rotation.y=-.35*ye*(1-Mt),p.rotation.x=Ke(0,.13,ye)*(1-Mt);let en=Se?0:.85*ct(.1,.2,j)*(1-ct(.38,.46,j)),ln=xt?0:(1-ct(.06,.14,j))*Math.sin(Be*.35)*.55;f.rotation.set(0,ln,en);let tn=.14*ct(.006,.05,j)*(1-ct(.12,.24,j));f.position.y=Math.sin(Be*1.1)*.05*(1-Ot)*ct(.02,.1,j)+tn,ee.visible=an>.001&&cr<.999,ee.position.set(0,Ke(Ke(-7.5,V,an),V+1.4,cr),0),ee.rotation.z=.12*cr;let Ln=1-ct(.77,.788,j),Ko=Ln<.999;ae.material=Ko?ge:ie,K.opacity=Ln,ie.opacity=ge.opacity=Ln;let hr=Ke(Pn,js,Jt),Qo=ee.position.y+hr;q.constant=Qo,Ge.position.y=D.position.y=hr,z.position.y=Pn,z.material.opacity=.5*Jt,de.uBloom.value=Jn,de.uTime.value=Be,de.uTop.value=Qo;let el=ct(.7,.76,j);ie.thickness=ge.thickness=Ke(.16,.9,el),ie.ior=ge.ior=Ke(1.33,1.45,el),ie.attenuationDistance=ge.attenuationDistance=Ke(.14,Ke(.75,.48,Jt),el);let tl=ct(.7,.77,j);Ge.material.color.copy(R).lerp(S,tl),Ge.material.opacity=Ke(.14,.96,tl)*Ln,D.material.opacity=Ke(.55,.2,tl)*Ln,z.material.opacity*=Ln;let th=ct(.63,.69,j)*(1-ct(.772,.79,j))*(.5+.5*Jt);for(let Me of F){let Et=Me.userData,mt=(Be*.16+Et.seed)%1;Me.visible=th>.002,Me.position.set(Et.x*(1-mt*.3)+Math.sin(mt*3+Et.seed*12)*.1+Et.drift*mt,hr+.5+mt*(Se?1.3:.75),Et.z),Me.scale.set(.42+mt*.3,.9+mt*.6,1),Me.material.opacity=th*.5*Math.sin(Math.PI*mt)}for(let Me of E){let Et=Me.side*ye;Me.half.position.x=Ke(Et*he.skin,Me.side*.42,Mt),Me.half.rotation.y=Me.side*ye*.35*(1-Mt),Me.skin.morphTargetInfluences[0]=Me.flesh.morphTargetInfluences[0]=Ft;let mt=Me.skin.material;mt.userData.dry.value=vt,mt.roughness=Ke(.34,.58,vt),mt.clearcoat=Ke(Ke(.35,.9,ct(.1,.22,j)),.16,vt),mt.clearcoatRoughness=Ke(.14,.4,vt),mt.sheen=Ke(.25,.4,vt),mt.sheenColor.set(vt>.5?"#c07a5c":"#ff9b8a");let Dn=ct(0,.7,vt);Me.flesh.material.opacity=Me.cut.material.opacity=1-Dn,Me.flesh.visible=Me.cut.visible=ye>.002&&Dn<.99;let nn=1-dt;Me.pulp.position.x=Et*he.pulp*(1-Mt)*nn,Me.pulp.scale.set(Kr*.8,sn*.86,Xs*.8).multiplyScalar(Ke(.55,1,nn)),Me.pulp.material.opacity=nn,Me.pulp.visible=dt<.995&&ye>.002,Me.parch.position.x=Et*he.parch*(1-Mt)*nn,Me.parch.scale.setScalar(Ke(.55,1,nn)),Me.parch.material.opacity=nn,Me.parch.visible=dt<.995&&ye>.002;let rn=Ne,ti=rn*rn,xi=ti*(Se?6+Me.side*.5:7.5+Me.side*.4),Js=ti*(Se?4.2:-.6)+Math.sin(rn*Math.PI)*.5+(Me.side>0?.1:-.1)*rn,Ks=Math.cos(-en),Qs=Math.sin(-en);if(Me.bean.position.set(Et*he.bean+xi*Ks-Js*Qs,xi*Qs+Js*Ks,-ti*2.2),Me.bean.rotation.set(rn*2.6*Me.side,rn*3.4,ye*Me.side*.2+rn*1.5),Me.bean.visible=ye>.002&&rn<.999,Ot>0){let ur=Zo[Me.side],es=Ui((j-ur)/.022),xn=ct(ur+.022,ur+.09,j),ts=Math.sin(xn*Math.PI*1.6)*.08*(1-xn),Oi=Ke(Me.side*.42,Me.side*.3,Ot),Un=Ke(0,V+1.62,Ot),Bi=0;es>0&&(Un=Ke(Un,V+Pn-.04,es*es)),xn>0&&(Oi=Ke(Oi,Me.side*.48,xn)+ts,Un=Ke(Un,V+qs+.12,xn),Bi=Ke(0,Me.side*.16,xn)),Me.half.position.set(Oi,Un-f.position.y,Bi),Me.half.rotation.set(xn*1.2*Me.side,Ot*.35*Me.side+xn*.8,Me.side*(Ot*.3+xn*1.7)),Me.half.scale.setScalar(Ke(1,.32,Ot)*Math.max(.001,1-ct(.72,.755,j))),Me.half.getWorldPosition(ne),(Me.side>0?de.uSrc1:de.uSrc0).value.copy(ne);let ns=J[Me.side>0?1:0],ea=Ui((j-ur-.022)/.05);ns.visible=ea>0&&ea<1,ns.visible&&(ns.position.set(Oi,Qo+.004,0),ns.scale.setScalar(Ke(.06,.95,Math.sqrt(ea))),ns.material.opacity=.7*(1-ea))}else Me.half.position.y=0,Me.half.rotation.x=Me.half.rotation.z=0,Me.half.scale.setScalar(1);Me.half.visible=j<.755}O.visible=B.visible=H.visible=!xt&&ye<.02,we.value=Se?99:Jo+1.45,ue.forEach((Me,Et)=>{let mt=b[Et],Dn=qn(mt.up[0],mt.up[1],j);Me.g.visible=Dn>.001,Me.g.position.set(Me.x,Ke(-7.5,V,Dn),0),Me.g.rotation.y=Math.sin(Be*.45+Et*1.7)*.08*ct(.9,1,j);let nn=ct(mt.fill[0],mt.fill[1],j),rn=Ke(.05,2.585,nn),ti=Me.g.position.y+rn*U;Me.fill.constant=ti,Me.syrup.visible=nn>.002,Me.surface.visible=Me.meniscus.visible=nn>.01,Me.surface.position.y=Me.meniscus.position.y=rn;let xi=jm(rn,.02);Me.surface.scale.setScalar(xi),Me.meniscus.scale.set(xi,xi,1);let[Js,Ks,Qs,ur]=mt.pour,es=ct(Js,Ks,j),xn=ct(Qs,ur,j),ts=Ke(Ys,ti,xn),Oi=Ke(Ys,ti,es),Un=Le[Et];Un.visible=ts-Oi>.01,Un.visible&&(Un.position.set(Me.x+Math.sin(Be*2.1+Et)*.004,ts,0),Un.scale.set(1,ts-Oi,1));let Bi=qn(mt.cap[0],mt.cap[1],j);Me.cap.visible=Bi>.001,Me.cap.position.y=Ke(hd+(Se?1.6:.45),Hm,Bi),Me.cap.rotation.y=(1-Bi)*4,Me.cap.material.opacity=ct(0,.35,Bi),Me.shade.material.opacity=.8*Dn});let nh=In*(1-Ze),nl=(Me,Et,mt,Dn,nn)=>{let rn=(1-In)*.6*Math.sign(mt.at[0]),ti=Math.sin(Be*.9+Et*1.9)*.05*nh,xi=Math.sin(Be*.5+Et)*.25*nh;Me.position.set(Ke(mt.at[0]+rn,Dn[0],Ze),V+Ke(mt.at[1]+ti,Dn[1],Ze),Ke(mt.at[2],Dn[2],Ze)),Me.rotation.set(Ke(mt.r[0],nn[0],Ze),Ke(mt.r[1]+xi,nn[1],Ze),Ke(mt.r[2],nn[2],Ze))};re.forEach((Me,Et)=>{Me.m.visible=In>.001,nl(Me.m,Et,Z.dried[Et],[Me.x,.104,Me.z],[Math.PI/2*(Et?1:-1)*.92,Me.ry,0]),Me.m.material.opacity=In}),pe.forEach((Me,Et)=>{Me.o.visible=In>.001,nl(Me.o,3+Et,Z.spices[Et],[Me.x,Me.y,Me.z],Me.r),Me.o.scale.setScalar(Me.s);for(let mt of Me.mats)mt.opacity=In}),Re.visible=Ze>.001,Re.position.set(1.34,V+.003,.45),Re.material.opacity=.55*Ze,ve.visible=In>.001,nl(ve,2,Z.fresh,[-1.6,ht*sn+.025,.05],[0,0,-.08]),Ve.transparent=!0,Ve.opacity=In,at.visible=Ze>.001,at.position.set(-1.6,V+.003,.05),at.material.opacity=.7*Ze,L.position.set(0,-sn-.55,0),L.scale.set(2.5*(1+ye*.6*(1-Mt)),1.7,1),L.material.opacity=.6*(1-ye*.35*(1-Mt))*(1-ct(.59,.65,j))*ct(.03,.1,j),L.visible=j<.65}function _e(j,Te,ye,ze){return gt.set(Te,ye,ze),j.localToWorld(gt),gt.project(h),{x:(gt.x*.5+.5)*Y,y:(-gt.y*.5+.5)*fe}}function Fe(){let j={};for(let[Te,ye]of Object.entries(We))j[Te]=_e(ye,0,0,0);return j}function ke(){f.updateMatrixWorld();let j=_e(f,0,0,0),Te=_e(f,-Kr,0,0),ye=_e(f,0,sn,0);return{x:j.x,y:j.y,rx:j.x-Te.x,ry:j.y-ye.y}}let Xe=0,Qe="",je=!1,Ye=0,et=[],bt=0,wt=!0,Pt=j=>{a=Math.max(1,j),s.setPixelRatio(a)};function yt(j){if(!$e)return;Xe++;let Te=j-Ce,ye=Math.min(.05,Te/1e3);Ce=j,!je&&Te<200&&(et.push(Te),et.length===45&&(et.sort((dt,Mt)=>dt-Mt)[22]>40&&a>1&&Pt(a*.8),et=[]));let ze=(Pe-De)*(1-Math.pow(i?.02:9e-4,ye));i&&(ze=Math.max(-.3*ye,Math.min(.3*ye,ze))),De+=ze,Math.abs(Pe-Ye)>.25&&(De=Pe),Ye=Pe,Math.abs(Pe-De)<1e-4&&(De=Pe);try{Q(ar(De),ye),(!je||wt||j-bt>400)&&(s.render(l,h),bt=j,wt=!1),e?.(ar(De),Fe,ke)}catch(Ne){Qe=String(Ne&&Ne.stack||Ne).slice(0,300)}requestAnimationFrame(yt)}return{resize:vi,set background(j){l.background.set(j)},set progress(j){Pe=Ui(j)},set cover(j){je=!!j,je||s.render(l,h)},set frame(j){st=j,Wt(),$e||(Q(ar(De),0),s.render(l,h))},get progress(){return De},jump(j){Pe=De=Ui(j),Q(ar(De),0),s.render(l,h),e?.(ar(De),Fe,ke)},start(){$e||($e=!0,Ce=performance.now(),requestAnimationFrame(yt))},stop(){$e=!1},begin(){Ce=performance.now(),requestAnimationFrame(yt)},async warm(){let j=performance.now();for(;Zc.size&&performance.now()-j<6e3;)await new Promise(ye=>setTimeout(ye,60));let Te=De;for(let ye of[.12,.3,.45,.58,.66,.74,.776,.79,.83,.88,.95,1]){if(!document.documentElement.classList.contains("is-loading"))break;Q(ye,0);try{await s.compileAsync(l,h)}catch{}s.render(l,h),await new Promise(ze=>requestAnimationFrame(ze))}Q(ar(Te),0),s.render(l,h)},tune(){if(!document.documentElement.classList.contains("is-loading"))return;let j=De,Te=Math.min(a,1.25),ye=s.getContext(),ze=new Uint8Array(4),Ne=8,dt=Mt=>{Q(Mt,0);let vt=performance.now();return s.render(l,h),ye.readPixels(0,0,1,1,ye.RGBA,ye.UNSIGNED_BYTE,ze),performance.now()-vt};for(let Mt=0;Mt<3;Mt++){o=0;for(let vt of[.3,.66,.95])dt(vt),o=Math.max(o,Math.min(dt(vt),dt(vt),dt(vt)));if(o<=Ne||a<=Te)break;Pt(Math.max(Te,a*Math.sqrt(Ne/o)))}Q(ar(j),0),s.render(l,h)},labels:Fe,fruitBox:ke,get photoReady(){return xt},renderer:s,state:()=>({frames:Xe,running:$e,target:+Pe.toFixed(3),progress:+De.toFixed(3),ratio:+a.toFixed(2),cost:+o.toFixed(1),lastError:Qe})}}var gd="http://www.w3.org/2000/svg",ut={ink:"58, 33, 22",glow:["#F7DDAE","#F1C28C","#E9AA79"],sun:["#F8E5BC","#F3D09A","#EDB57B","#E49862","#D87A47"],cloudTop:"#F4E4C8",cloudLow:"#E8AE86",ridge:["#E2AE86","#D49670","#BE8059","#9A7448","#77653B","#55492B"],cut:["#EDC09C","#E1AA84","#CF9670","#AE8A5D","#8B7A4E","#6A5C3A"],row:["#8A6C43","#665A34","#4B4127"],tree:["#A57250","#7E623E","#5C4E30"],berry:"#B3262A",berryDark:"#8E2B1E",roof:"#B4592A",wall:"#E9C9A0",window:"#F8D88E",door:"#5A3A26",soil:"#3A2116",soilCut:"#9C4B23",leaf:["#2F3B24","#3B4A2B","#485A31","#34432A"],vein:"#E0A86B",twig:"#3A2116",close:["#2E2617","#2A2215"],mist:"#F6E3C8",bird:"#3A2116"};function Qc(r){let e=r>>>0;return()=>(e=Math.imul(e,1664525)+1013904223>>>0)/4294967296}var w=r=>(Math.round(r*10)/10).toString();function Zn(r,e=!1){let t=r.length;if(t<2)return"";let n=`M${w(r[0][0])} ${w(r[0][1])}`,i=e?t:t-1;for(let s=0;s<i;s++){let a=r[e?(s-1+t)%t:Math.max(0,s-1)],o=r[s],l=r[(s+1)%t],c=r[e?(s+2)%t:Math.min(t-1,s+2)];n+=`C${w(o[0]+(l[0]-a[0])/6)} ${w(o[1]+(l[1]-a[1])/6)} ${w(l[0]-(c[0]-o[0])/6)} ${w(l[1]-(c[1]-o[1])/6)} ${w(l[0])} ${w(l[1])}`}return e?`${n}Z`:n}var gi=(r,e,t)=>`M${w(r+t)} ${w(e)}a${w(t)} ${w(t)} 0 1 0 ${w(-2*t)} 0a${w(t)} ${w(t)} 0 1 0 ${w(2*t)} 0Z`,qo=(r,e,t,n)=>`M${w(r+t)} ${w(e)}a${w(t)} ${w(n)} 0 1 0 ${w(-2*t)} 0a${w(t)} ${w(n)} 0 1 0 ${w(2*t)} 0Z`;function eh(r,e,t,n,i,s){let o=[],l=[],c=.025+s()*.03,h=s()*6;for(let _=0;_<=28;_++){let x=_/28,y=Math.sin(Math.PI*Math.pow(x,.78))*(1-.18*x);x>.78&&(y*=1-Math.pow((x-.78)/.22,1.3)*.6),y*=n*(1+c*Math.sin(x*20+h)),o.push([x*t,-y]),l.push([x*t,y*(.92+.08*Math.sin(x*9+h))])}let u=Math.cos(i),d=Math.sin(i),p=([_,x])=>[r+_*u-x*d,e+_*d+x*u],f=Zn([...o,...l.reverse()].map(p),!0),v=(s()-.5)*n*.25,m=_=>[_*t,Math.sin(Math.PI*_)*v],g=Zn([.04,.3,.55,.8,.93].map(_=>p(m(_))));for(let _=1;_<=6;_++){let x=.1+_*.115,[y,T]=m(x),E=Math.sin(Math.PI*Math.pow(x,.78))*n*(1-.18*x)*.78;for(let P of[-1,1])g+=Zn([[y,T],[y+E*.45,T+P*E*.55],[y+E*.95,T+P*E*.86]].map(p))}return{shape:f,veins:g}}var fi=(r,e)=>{for(let t=1;t<r.length;t++)if(r[t][0]>=e){let[n,i]=r[t-1],[s,a]=r[t];return i+(a-i)*(e-n)/(s-n)}return r[r.length-1][1]},Yo=(r,e)=>r.map(([t,n])=>[t,n+e+Math.sin(t*.013+e)*Math.abs(e)*.08]);function vd(r,e,t,n,i,s,a,o){let l="",c="";for(let h=t;h<n;h+=i*(1.55+a()*.35)){let u=fi(r,h)+e+Math.sin(h*.013+e)*Math.abs(e)*.08,d=i*(.85+a()*.3),p=s*(.8+a()*.4);l+=`M${w(h-d)} ${w(u)}A${w(d)} ${w(p)} 0 0 1 ${w(h+d)} ${w(u)}Z`,o&&a()<.45&&(c+=gi(h+(a()-.5)*d,u-p*(.3+a()*.4),Math.max(.8,i*.13)))}return{d:l,b:c}}function nf(r,e,t){let n=`M${w(r-t*.09)} ${w(e)}L${w(r-t*.04)} ${w(e-t*2.5)}L${w(r+t*.04)} ${w(e-t*2.5)}L${w(r+t*.09)} ${w(e)}Z`,i=qo(r,e-t*2.65,t*1.35,t*.42)+qo(r-t*.7,e-t*2.4,t*.78,t*.32)+qo(r+t*.72,e-t*2.45,t*.85,t*.34)+qo(r+t*.1,e-t*2.95,t*.7,t*.3);return n+i}function rf(r,e,t){let n=t*1.7,i=t,s=`M${w(r-n/2)} ${w(e)}V${w(e-i)}H${w(r+n/2)}V${w(e)}Z`,a=`M${w(r-n/2-t*.2)} ${w(e-i+t*.04)}L${w(r)} ${w(e-i-t*.62)}L${w(r+n/2+t*.2)} ${w(e-i+t*.04)}Z`,o=`M${w(r-t*.52)} ${w(e-i*.7)}h${w(t*.34)}v${w(t*.3)}h${w(-t*.34)}Z`,l=`M${w(r+t*.12)} ${w(e)}v${w(-t*.55)}h${w(t*.3)}v${w(t*.55)}Z`,c="",h="";for(let u=0;u<2;u++){let d=r+n/2+t*(.55+u*1.55),p=e-t*.36,f=t*1.3;c+=`M${w(d)} ${w(p)}h${w(f)}v${w(t*.1)}h${w(-f)}Z`;for(let v of[.08,.92])c+=`M${w(d+f*v-t*.03)} ${w(p+t*.1)}h${w(t*.06)}V${w(e)}h${w(-t*.06)}Z`;for(let v=0;v<9;v++)h+=gi(d+f*(.08+v*.105),p-t*.045,t*.055)}return{wall:s,roof:a,win:o,door:l,beds:c,cherries:h,glow:[r-t*.35,e-i*.55,t*.8]}}function _d(r,e,t,n){let i=t*.42,s=[];for(let c=0;c<=20;c++){let h=-1+2*c/20;s.push([r+h*t/2,e-i*Math.pow(Math.max(0,1-h*h),.7)-(c%2?i*.05:0)*(1-Math.abs(h))])}let a=`${Zn(s)}L${w(r+t/2)} ${w(e)}L${w(r-t/2)} ${w(e)}Z`,o=["#B3262A","#C9452B","#8E2B1E","#A8321F","#6E2A1A"],l=o.map(()=>"");for(let c=0;c<46;c++){let h=n()*2-1,u=n()*Math.pow(Math.max(0,1-h*h),.7)*.92,d=Math.floor(n()*o.length);l[d]+=gi(r+h*t*.46,e-i*u-t*.02,t*(.035+n()*.018))}return{mound:a,cherries:l.map((c,h)=>`<path fill="${o[h]}" d="${c}"/>`).join("")}}function sf(r,e){let t=r*2.6,n=r*2.3,i=t/2,s=n,a="",o="",l="";return[[11,.55,.95,1.05,.32],[7,.95,.78,.7,.3]].forEach(([h,u,d,p,f],v)=>{for(let m=0;m<h;m++){let g=-Math.PI/2+(m-(h-1)/2)*(d*2.6/h)+(e()-.5)*.2,_=i+Math.cos(g)*r*.18,x=s-r*u*.45+Math.sin(g)*r*.12,y=r*p*(.7+e()*.35);o+=`M${w(i)} ${w(s-r*u*.3)}L${w(_)} ${w(x)}`,a+=`<path fill="${ut.leaf[(m+v)%4]}" d="${eh(_,x,y,y*f,g+(e()-.5)*.25,e).shape}"/>`,(m+v)%3===1&&(l+=gi(_+Math.cos(g)*r*.2,x+Math.sin(g)*r*.2+r*.06,r*.06)+gi(_+Math.cos(g)*r*.26+r*.05,x+Math.sin(g)*r*.2+r*.13,r*.055))}}),o=`M${w(i)} ${w(s)}L${w(i)} ${w(s-r*.5)}`+o,{w:t,h:n,svg:`<path fill="none" stroke="${ut.twig}" stroke-width="${w(r*.06)}" stroke-linecap="round" d="${o}"/>${a}<path fill="${ut.berry}" d="${l}"/>`}}function af(r,e){let t=r*1.6,n=r*1.4,i="";for(let s=0;s<7;s++){let a=t*(.2+s*.1),o=(e()-.5)*r*.9,l=n*(.15+e()*.4),c=r*.045;i+=`M${w(a-c)} ${w(n)}Q${w(a+o*.3)} ${w((n+l)/2)} ${w(a+o)} ${w(l)}Q${w(a+o*.3+c)} ${w((n+l)/2)} ${w(a+c)} ${w(n)}Z`}return{w:t,h:n,svg:`<path fill="${ut.leaf[1]}" d="${i}"/>`}}function of(r){let e=r*1.1,t=r*2.05,n=e/2,i=(a,o)=>`<path class="${o}" fill="#4A3424" d="M${w(n+a-r*.07)} ${w(t*.6)}h${w(r*.14)}l${w(r*.02)} ${w(t*.38)}h${w(-r*.18)}z"/>`,s=(a,o)=>`<path class="${o}" fill="#9C4B23" d="M${w(n+a-r*.05)} ${w(t*.3)}h${w(r*.1)}l${w(r*.02)} ${w(t*.27)}h${w(-r*.13)}z"/>`;return{w:e,h:t,svg:i(-r*.09,"dio__leg dio__leg--b")+s(r*.16,"dio__arm dio__arm--b")+`<path fill="#A8743E" d="M${w(n-r*.52)} ${w(t*.27)}h${w(r*.34)}l${w(-r*.04)} ${w(t*.3)}h${w(-r*.26)}z"/><path fill="none" stroke="#7A5128" stroke-width="${w(r*.03)}" d="M${w(n-r*.5)} ${w(t*.36)}h${w(r*.3)}M${w(n-r*.48)} ${w(t*.45)}h${w(r*.28)}"/><path fill="#B4592A" d="M${w(n-r*.2)} ${w(t*.28)}h${w(r*.4)}l${w(r*.03)} ${w(t*.34)}h${w(-r*.46)}z"/>`+i(r*.09,"dio__leg dio__leg--f")+`<circle fill="#8A5A3C" cx="${w(n+r*.02)}" cy="${w(t*.2)}" r="${w(r*.14)}"/><ellipse fill="#D9B27A" cx="${w(n+r*.02)}" cy="${w(t*.13)}" rx="${w(r*.34)}" ry="${w(r*.07)}"/><path fill="#C99E62" d="M${w(n-r*.12)} ${w(t*.13)}q${w(r*.14)} ${w(-r*.26)} ${w(r*.28)} 0z"/>`+s(-r*.16,"dio__arm dio__arm--f")}}function lf(r){let e=r*1.1,t=r*2.05,n=e/2,i=(a,o)=>`<path class="${o}" fill="#4B4127" d="M${w(n+a-r*.07)} ${w(t*.6)}h${w(r*.14)}l${w(r*.02)} ${w(t*.38)}h${w(-r*.18)}z"/>`,s=i(-r*.09,"dio__leg dio__leg--b")+`<path fill="#E2CBA2" d="M${w(n-r*.2)} ${w(t*.28)}h${w(r*.4)}l${w(r*.03)} ${w(t*.34)}h${w(-r*.46)}z"/>`+i(r*.09,"dio__leg dio__leg--f")+`<g transform="rotate(-42 ${w(n-r*.24)} ${w(r*.75)})"><rect fill="#B98E5A" x="${w(n-r*.62)}" y="${w(r*.54)}" width="${w(r*.76)}" height="${w(r*.42)}" rx="${w(r*.2)}"/><path fill="none" stroke="#8C6A3E" stroke-width="${w(r*.035)}" stroke-linecap="round" d="M${w(n-r*.45)} ${w(r*.58)}V${w(r*.92)}"/><path fill="#B98E5A" d="M${w(n-r*.58)} ${w(r*.72)}l${w(-r*.15)} ${w(-r*.07)}v${w(r*.2)}z"/></g><circle fill="#7E5236" cx="${w(n+r*.02)}" cy="${w(t*.2)}" r="${w(r*.14)}"/><path fill="#6A5C3A" d="M${w(n-r*.13)} ${w(t*.19)}C${w(n-r*.13)} ${w(t*.08)} ${w(n+r*.17)} ${w(t*.08)} ${w(n+r*.17)} ${w(t*.19)}Z"/><path fill="#55492B" d="M${w(n+r*.1)} ${w(t*.185)}h${w(r*.24)}q${w(r*.02)} ${w(r*.05)} ${w(-r*.04)} ${w(r*.05)}h${w(-r*.2)}z"/><path class="dio__arm dio__arm--f" fill="#CDB089" d="M${w(n+r*.11)} ${w(t*.3)}h${w(r*.1)}l${w(r*.02)} ${w(t*.27)}h${w(-r*.13)}z"/>`;return{w:e,h:t,svg:`<g transform="matrix(-1 0 0 1 ${w(e)} 0)">${s}</g>`}}function cf(r,e,t){let n=t*.16,i=n/2;return`M${w(r-t/2+i)} ${w(e)}H${w(r+t/2-i)}A${w(i)} ${w(i)} 0 0 0 ${w(r+t/2-i)} ${w(e-n)}H${w(r-t/2+i)}A${w(i)} ${w(i)} 0 0 0 ${w(r-t/2+i)} ${w(e)}Z`+gi(r-t*.18,e-n-t*.03,t*.13)+gi(r+t*.06,e-n-t*.07,t*.17)+gi(r+t*.27,e-n-t*.01,t*.1)}var xd=.74,hf=[{id:"sky",depth:.06,fly:[0,-.05,.12],flyNarrow:[0,-.02,.1]},{id:"far",depth:.16,fly:[0,.16,-.03],flyNarrow:[0,.04,.16]},{id:"mid",depth:.3,fly:[0,.28,-.01],flyNarrow:[0,.08,.3]},{id:"near",depth:.46,fly:[0,.42,.02],flyNarrow:[0,.12,.45]},{id:"soil",depth:.62,fly:[0,.6,.04],flyNarrow:[0,.16,.6]},{id:"branch",depth:.82,fly:[.55,-.06,.3],flyNarrow:[.5,-.08,.3]},{id:"close",depth:1,fly:[.8,.15,.7],flyNarrow:[.8,.15,.7]}],Qr=null;function uf(r,e,t){if(!Qr){Qr=document.createElement("canvas"),Qr.width=Qr.height=128;let n=Qr.getContext("2d"),i=n.createImageData(128,128),s=Qc(99);for(let a=0;a<i.data.length;a+=4){let o=s(),l=o>.5,c=Math.abs(o-.5)*2;i.data[a]=l?255:58,i.data[a+1]=l?246:33,i.data[a+2]=l?232:22,i.data[a+3]=Math.round(c*c*30)}n.putImageData(i,0,0)}r.save(),r.globalCompositeOperation="source-atop",r.fillStyle=r.createPattern(Qr,"repeat"),r.fillRect(0,0,e,t),r.restore()}var df={sky:1,far:1,mid:1.5,near:1.5,soil:1.5,branch:2,close:1},pf=(r,e)=>r==="branch"?Math.min(e,3):Math.min(e,e>2?2:df[r]||1);function yd(r,{only:e,keep:t=[]}={}){let n=U=>!e||e.includes(U);r.innerHTML="";let i=document.createElement("div");i.className="dio__ground",r.append(i),e&&(i.style.display="none");let s=hf.map((U,I)=>{let N=document.createElement("div");N.className=`dio__layer dio__layer--${U.id}`,N.style.setProperty("--i",I);let G=document.createElement("div");G.className="dio__rise";let $=document.createElement("canvas");$.className="dio__paint";let ee=document.createElementNS(gd,"svg");ee.setAttribute("aria-hidden","true"),ee.style.display="none";let K=document.createElement("div");K.className="dio__fx";let se=document.createElement("div");return se.className="dio__fx",G.append(se,$,ee,K),N.append(G),r.append(N),!n(U.id)&&!(U.id==="sky"&&t.length)&&(N.style.display="none"),{...U,wrap:N,paint:$,svg:ee,fx:K,back:se,tf:""}}),a=Object.fromEntries(s.map(U=>[U.id,U])),o="",l=0,c=0,h=0,u=0,d=[],p=null,f=null,v=0,m=-1,g=null,_=[],x,y=new Promise(U=>{x=U}),T=(U,I,N,G,$,ee,K,se="",be=!1)=>{let te=document.createElement("div");return!n(U.id)&&!t.includes(I)||(te.className=I,te.style.cssText=`left:${w(N)}px;top:${w(G)}px;width:${w($)}px;height:${w(ee)}px;${se}`,te.innerHTML=K?`<svg viewBox="0 0 ${w($)} ${w(ee)}" width="${w($)}" height="${w(ee)}" aria-hidden="true">${K}</svg>`:"",(be?U.back:U.fx).append(te),_.push(I==="dio__bird"?te.firstElementChild:te)),te};function E(U,I,N,G,$){let ee=[U.x,U.y,U.rx,I,N,G,$&&$.top].map(ue=>Math.round(+ue||0)).join(",");if(ee===o||!I||!N||!U.rx)return;o=ee;for(let ue of s)ue.fx.innerHTML="",ue.back.innerHTML="";_=[],m=-1,d=[],p=null,f=null;let{x:K,y:se}=U,be=U.rx,te=U.ry||U.rx*1.27,q=be/xd,ie=te/xd,de=Qc(1712),ge=(ue,ce,le,we)=>`<filter id="${ue}" x="-10%" y="-30%" width="120%" height="170%"><feDropShadow dx="0" dy="${ce}" stdDeviation="${le}" flood-color="rgb(${ut.ink})" flood-opacity="${we}"/></filter>`,ae={},Ge=N+20,R=$?$.bottom+34:N*.7,S=(ue,ce)=>G||!$||ue>$.right+40||ce>R+8,z=ue=>`<clipPath id="${ue}"><path d="M${w($?$.right+40:0)} -60H${w(I+60)}V${w(N+60)}H-60V${w(R+8)}H${w($?$.right+40:0)}Z"/></clipPath>`,k=K+q*(G?.1:.28),M=se+ie*(G?.12:.18),A=q*(G?2.2:2.6);{let ue=Math.max(I,N)*(G?.75:.62);ae.sky=`<defs>${ge("dsky",3,6,.16)}<radialGradient id="glow" cx="${w(k)}" cy="${w(M)}" r="${w(ue)}" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${ut.glow[0]}"/><stop offset=".22" stop-color="${ut.glow[1]}" stop-opacity=".9"/><stop offset=".48" stop-color="${ut.glow[2]}" stop-opacity=".42"/><stop offset="1" stop-color="${ut.glow[2]}" stop-opacity="0"/></radialGradient></defs><radialGradient id="sund" cx=".42" cy=".38" r=".7"><stop offset="0" stop-color="#FCEFD2"/><stop offset=".45" stop-color="#F6D7A2"/><stop offset="1" stop-color="#ECB077"/></radialGradient><linearGradient id="sky" x1="0" y1="0" x2="0" y2="${w(se+ie*1.3)}" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#E6D3B7" stop-opacity="0"/><stop offset=".55" stop-color="#EDCDA6" stop-opacity=".5"/><stop offset="1" stop-color="#EBBE8F" stop-opacity=".75"/></linearGradient><rect width="${I}" height="${N}" fill="url(#sky)"/><rect width="${I}" height="${N}" fill="url(#glow)"/><path filter="url(#dsky)" fill="url(#sund)" d="${gi(k,M,A)}"/>`;let ce=A*1.75;T(a.sky,"dio__halo",k-ce,M-ce,ce*2,ce*2,`<defs><radialGradient id="halo"><stop offset=".5" stop-color="#FBE3B8" stop-opacity=".55"/><stop offset="1" stop-color="#FBE3B8" stop-opacity="0"/></radialGradient></defs><circle cx="${w(ce)}" cy="${w(ce)}" r="${w(ce)}" fill="url(#halo)"/><circle cx="${w(ce)}" cy="${w(ce)}" r="${w(A*1.13)}" fill="none" stroke="#FBE8C4" stroke-opacity=".75" stroke-width="${w(Math.max(1.5,A*.022))}"/><circle cx="${w(ce)}" cy="${w(ce)}" r="${w(A*1.3)}" fill="none" stroke="#FBE8C4" stroke-opacity=".4" stroke-width="${w(Math.max(1,A*.014))}"/>`,"",!0),(G?[[I*.2,se-ie*1.05,q*1.7],[I*.82,se-ie*1.5,q*1.3]]:[[K-q*3.1,se-ie*1.2,q*2],[K+q*2.75,Math.max(se-ie*1.4,150),q*1.35],[K-q*1.2,Math.max(se-ie*2.1,130),q*1.1]]).forEach(([re,pe,Ee],Re)=>{let ve=Ee*.5,Ve=`cg${Re}`;T(a.sky,"dio__cloud",re-Ee*.6,pe-ve,Ee*1.2,ve+12,`<defs><linearGradient id="${Ve}" x1="0" y1="0" x2="0" y2="1"><stop offset=".35" stop-color="${ut.cloudTop}"/><stop offset="1" stop-color="${ut.cloudLow}"/></linearGradient>${ge(`${Ve}s`,3,4,.14)}</defs><path filter="url(#${Ve}s)" fill="url(#${Ve})" d="${cf(Ee*.6,ve,Ee)}"/>`,`--drift:${w((Re%2?-1:1)*q*1.5)}px;--dur:${22+Re*6}s;--delay:${-Re*7}s`)});let we=G?3:5,Le=Math.max(G?96:160,se-ie*1.9);for(let re=0;re<we;re++){let pe=q*(G?.26:.22)*(1-re*.06);T(a.sky,"dio__bird",I*1.04,Le+re*q*.22+re%2*q*.12,pe*2,pe,`<path fill="none" stroke="${ut.bird}" stroke-width="${w(Math.max(1.2,pe*.12))}" stroke-linecap="round" stroke-linejoin="round" d="M${w(pe*.05)} ${w(pe*.55)}Q${w(pe*.55)} ${w(pe*.05)} ${w(pe)} ${w(pe*.62)}Q${w(pe*1.45)} ${w(pe*.05)} ${w(pe*1.95)} ${w(pe*.55)}"/>`,`--fly:${w(-I*1.25)}px;--rise:${w(-ie*(.3+re*.05))}px;--dur:${26+re*1.6}s;--delay:${w(re*.9+2.5)}s;--flap:${w(.55+re*.07)}s`)}}let F=(ue,ce)=>{let le=ue/(ce-1),we=Ge-(se+ie*.2),Le=G?se+ie*.2+we*(.02+le*.62):se+ie*(.1+le*1.6),re=G?se+ie*.2+we*(.12+le*.62):Math.max(R,se+ie*.9)+le*(N-Math.max(R,se+ie*.9))*.78,pe=G?we*(.1-le*.055):ie*(.62-le*.38),Ee=[de()*6.3,de()*6.3,de()*6.3],Re=[1.3+de()*.8,3.2+de()*1.4,7+de()*3],ve=[];for(let Ve=0;Ve<=64;Ve++){let He=-60+(I+120)*Ve/64,rt=Math.min(1,Math.max(0,He/I)),ht=re+(Le-re)*rt*rt*(3-2*rt),at=ht-pe*(.55*Math.sin(rt*Re[0]*Math.PI+Ee[0])+.3*Math.sin(rt*Re[1]*Math.PI+Ee[1])+.15*Math.sin(rt*Re[2]*Math.PI+Ee[2]));!G&&$&&(at+=Math.min(1,Math.max(0,($.right+220-He)/220))*Math.max(0,R+pe*1.1-ht)),ve.push([He,at])}return{crest:ve,d:`${Zn(ve)}L${w(I+60)} ${w(Ge)}L-60 ${w(Ge)}Z`,u:le}},D=Array.from({length:6},(ue,ce)=>F(ce,6)),X=(ue,ce,le,we)=>`<path fill="none" stroke="${ut.cut[we]}" stroke-width="${w(1.1+we*.25)}" stroke-linecap="round" stroke-opacity=".85" d="${Array.from({length:le},(Le,re)=>Zn(Yo(ue,ce*(re+1)))).join("")}"/>`,J=(ue,ce="")=>`<path filter="url(#dr${ue})" fill="${ut.ridge[ue]}" d="${D[ue].d}"/>${ce}`,W=ue=>ue.map(ce=>ge(`dr${ce}`,2+ce,4+ce,.14+ce*.03)).join(""),oe=-20,Ae=I+20,me=(ue,ce,le,we)=>{let Le=Yo(ue,ce-le),re=Yo(ue,ce+le).reverse();return`<defs><linearGradient id="mg${we}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${ut.mist}" stop-opacity="0"/><stop offset=".5" stop-color="${ut.mist}" stop-opacity=".55"/><stop offset="1" stop-color="${ut.mist}" stop-opacity="0"/></linearGradient></defs><path fill="url(#mg${we})" d="${Zn([...Le,...re],!0)}"/>`};ae.far=`<defs>${W([0,1])}</defs>`+J(0)+J(1,X(D[1].crest,ie*.075,4,1));let Ue=(ue,ce,le,we,Le,re,pe)=>{let Ee=ce.map(([,Ve])=>Ve),Re=Math.min(...Ee)+le-we*1.3,ve=Math.max(...Ee)+le+we*1.3;T(ue,"dio__mist",-I*.1,Re,I*1.2,ve-Re,`<g transform="translate(${w(I*.1)} ${w(-Re)})">${me(ce,le,we,Le)}</g>`,`--drift:${w(re)}px;--dur:${pe}s`)};Ue(a.far,D[1].crest,ie*.05,ie*(G?.14:.2),0,q*.7,28);{let ue=D[2].crest,ce=D[3].crest,le=J(2,X(ue,ie*.085,5,2)),we="",Le=G?[.1,.34,.7,.93]:[.52,.63,.78,.9,.97];for(let ft of Le){let We=I*ft+(de()-.5)*q*.4,Y=fi(ue,We)+ie*.12,fe=q*(G?.3:.26)*(.8+de()*.4);S(We,Y-fe*3)&&(we+=nf(We,Y,fe))}le+=`<path fill="${ut.tree[0]}" d="${we}"/>`+J(3);let re="",pe="";for(let ft=0;ft<4;ft++){let We=ie*(.12+ft*.13),Y=q*(G?.085:.075)*(1+ft*.12),fe=vd(ce,We,oe,Ae,Y,Y*.62,de,ft>1);re+=fe.d,pe+=fe.b}le+=`<g${G?"":' clip-path="url(#free3)"'}><path fill="${ut.row[0]}" d="${re}"/><path fill="${ut.berry}" d="${pe}"/></g>`;let Ee=G?I*.2:Math.max($?$.right+q*1.4:I*.6,K-q*2.6),Re=q*(G?.3:.28),ve=rf(Ee,fi(ce,Ee)+ie*.1,Re);le+=`<path fill="${ut.tree[1]}" d="${ve.beds}"/><path fill="${ut.berry}" d="${ve.cherries}"/>`;let Ve=q*(G?.5:.42),He=of(Ve),rt=G?I*.08:Math.max($?$.right+60:I*.45,Ee-Re*1.5),ht=G?I*.44:Math.min(I*.95,K+q*1.4);p={el:T(a.near,"dio__farmer",0,0,He.w,He.h,`<g class="dio__farmer-body">${He.svg}</g>`),crest:D[4].crest,dy:ie*.12,from:rt,to:ht,w:He.w,h:He.h,face:0};let at=lf(Ve*.78),L=G?I*.5:Math.max($?$.right+q*1.2:I*.5,Ee+Re*1.1),xt=G?I*.68:Math.min(I*.92,K-q*.25);xt-L>q*.8&&(f={el:T(a.mid,"dio__farmer dio__farmer--man",0,0,at.w,at.h,`<g class="dio__farmer-body">${at.svg}</g>`),crest:ce,dy:ie*.08,from:L,to:xt,w:at.w,h:at.h,face:0,left:!0,pace:7,shift:.37});for(let[ft,We]of G?[[Ee+Re*5.2,Re*2.2],[Ee-Re*2.4,Re*1.6]]:[[Ee-Re*2.6,Re*2.1],[Ee+Re*5.4,Re*2.6]]){let Y=fi(ce,ft)+ie*.12;if(!S(ft-We/2,Y-We*.4))continue;let fe=_d(ft,Y,We,de);d.push([ft,Y,We,ce]),le+=`<path filter="url(#dheap)" fill="#7A2418" d="${fe.mound}"/>${fe.cherries}`}ae.mid=`<defs>${W([2,3])}${ge("dheap",3,3,.3)}<radialGradient id="wglow"><stop offset="0" stop-color="${ut.window}" stop-opacity=".45"/><stop offset="1" stop-color="${ut.window}" stop-opacity="0"/></radialGradient>${G?"":z("free3")}</defs>${le}`,Ue(a.mid,ce,-ie*(G?.12:.3),ie*(G?.1:.13),1,-q*.6,36)}{let ue="";for(let le of[4,5]){ue+=J(le);let we="",Le="";for(let re=0;re<(le===4?3:2);re++){let pe=ie*(.14+re*.17),Ee=q*(G?.11:.1)*(1+re*.15)*(le===5?1.25:1),Re=vd(D[le].crest,pe,oe,Ae,Ee,Ee*.62,de,!0);we+=Re.d,Le+=Re.b}ue+=`<g${G?"":` clip-path="url(#free${le})"`}><path fill="${ut.row[le-3]}" d="${we}"/><path fill="${ut.berryDark}" d="${Le}"/></g>`}ae.near=`<defs>${W([4,5])}${G?"":z("free4")+z("free5")}</defs>${ue}`;{let le=G?I*.78:Math.max($?$.right+q*2.2:I*.55,K-q*1.6),we=q*(G?1.25:1.15),Le=fi(D[4].crest,le)+ie*.2;if(S(le-we/2,Le-we*.4)){let re=_d(le,Le,we,de);d.push([le,Le,we,D[4].crest]),ae.near+=`<defs>${ge("dheap2",4,4,.32)}</defs><path filter="url(#dheap2)" fill="#7A2418" d="${re.mound}"/>${re.cherries}`}}for(let le of[p,f]){if(!le)continue;let we=[[le.from,le.to]];for(let[re,pe,Ee]of d){let Re=fi(le.crest,re)+le.dy,ve=Re-le.h;if(pe<ve||pe-Ee*.45>Re)continue;let Ve=re-Ee/2-le.w*.7,He=re+Ee/2+le.w*.7;we=we.flatMap(([rt,ht])=>He<=rt||Ve>=ht?[[rt,ht]]:[[rt,Ve],[He,ht]].filter(([at,L])=>L-at>0))}let Le=we.reduce((re,pe)=>pe[1]-pe[0]>re[1]-re[0]?pe:re,[0,0]);le.from=Le[0],le.to=Le[1],le.to-le.from<le.w*1.5&&(le.el.remove(),le===p?p=null:f=null)}(G?[.06,.34,.62]:[.56,.67,.8,.93]).forEach((le,we)=>{let Le=I*le+(de()-.5)*q*.3,re=fi(D[5].crest,Le)+ie*.2,pe=q*(G?.5:.46)*(.85+de()*.3);if(!S(Le,re-pe*2))return;let Ee=sf(pe,de);T(a.near,"dio__sway",Le-Ee.w/2,re-Ee.h,Ee.w,Ee.h,Ee.svg,`--dur:${w(4.2+we*.7)}s;--delay:${w(-we*1.3)}s;--deg:${w(1.6+de())}deg`)})}{let ue=N-Math.max(G?30:40,N*(G?.05:.075)),ce=[];for(let Le=0;Le<=48;Le++){let re=-60+(I+120)*Le/48;ce.push([re,ue-Math.sin(re*.006+1)*ie*.09-Math.sin(re*.019)*ie*.04])}let le=`${Zn(ce)}L${w(I+60)} ${w(N+50)}L-60 ${w(N+50)}Z`;(G?[.12,.45,.7,.93]:[.5,.6,.71,.83,.95]).forEach((Le,re)=>{let pe=I*Le+(de()-.5)*q*.4,Ee=fi(ce,pe)+3,Re=q*(G?.42:.38)*(.8+de()*.4);if(!S(pe,Ee-Re))return;let ve=af(Re,de);T(a.soil,"dio__sway",pe-ve.w/2,Ee-ve.h,ve.w,ve.h,ve.svg,`--dur:${w(2.8+re*.5)}s;--delay:${w(-re*.9)}s;--deg:${w(3+de()*2)}deg`)}),ae.soil=`<defs>${ge("dsoil",7,10,.34)}</defs><path filter="url(#dsoil)" fill="${ut.soil}" d="${le}"/><path fill="none" stroke="${ut.soilCut}" stroke-width="1.8" stroke-linecap="round" stroke-dasharray=".5 10" d="${[1,2,3].slice(0,G?2:3).map(Le=>Zn(Yo(ce,ie*.09*Le))).join("")}"/>`}{let ue=[[I+q*.7,se-ie*(G?.05:.2)],[K+q*1.7,se+ie*.95],[K+be*.05,se+te*.97],[K-q*.75,se+ie*.86],[K-q*1.2,se+ie*.64]],ce=[],le=[ue[0],...ue,ue[ue.length-1]];for(let Y=1;Y<le.length-2;Y++)for(let fe=0;fe<20;fe++){let Se=fe/20,Pe=le[Y-1],De=le[Y],Ce=le[Y+1],$e=le[Y+2];ce.push([0,1].map(Be=>.5*(2*De[Be]+(-Pe[Be]+Ce[Be])*Se+(2*Pe[Be]-5*De[Be]+4*Ce[Be]-$e[Be])*Se*Se+(-Pe[Be]+3*De[Be]-3*Ce[Be]+$e[Be])*Se*Se*Se)))}ce.push(ue[ue.length-1]);let we=[0];for(let Y=1;Y<ce.length;Y++)we.push(we[Y-1]+Math.hypot(ce[Y][0]-ce[Y-1][0],ce[Y][1]-ce[Y-1][1]));let Le=we[we.length-1],re=Y=>{let fe=Y*Le,Se=1;for(;Se<we.length-1&&we[Se]<fe;)Se++;let Pe=(fe-we[Se-1])/Math.max(1e-6,we[Se]-we[Se-1]);return[ce[Se-1][0]+(ce[Se][0]-ce[Se-1][0])*Pe,ce[Se-1][1]+(ce[Se][1]-ce[Se-1][1])*Pe]},pe=0,Ee=1/0;for(let Y=0;Y<=100;Y++){let[fe,Se]=re(Y/100),Pe=Math.hypot(fe-ue[2][0],Se-ue[2][1]);Pe<Ee&&(Ee=Pe,pe=Y/100)}let Re="",ve="",Ve="",He=[],rt=(Y,fe,Se,Pe,De,Ce=!1)=>{let[$e,Be]=re(Y),st=eh($e,Be,fe*q,fe*Se*q,Pe,de),ot=`<path fill="${ut.leaf[De]}" d="${st.shape}"/>`;Ce?Re+=ot:ve+=ot,He.push(st.veins)},ht=G?.74:.76;rt(pe,3.3*ht,.31,-1.2,0,!0),rt(pe,2.8*ht,.3,-.75,1,!0),rt(pe,2.5*ht,.3,-3.05,3,!0),rt(pe*.62,3.2*ht,.32,-1.45,2),rt(pe*.6,2.9*ht,.31,1.2,0),G||(rt(pe*.25,3*ht,.31,-1.15,3),rt(pe*.22,2.7*ht,.3,1.5,1)),rt(.97,1.25*ht,.3,-2.55,2),rt(.97,1.05*ht,.3,-1.85,2);let at=[],L=[];for(let Y=0;Y<=40;Y++){let fe=Y/40,[Se,Pe]=re(fe),[De,Ce]=re(Math.min(1,fe+.01)),[$e,Be]=re(Math.max(0,fe-.01)),st=-(Ce-Be),ot=De-$e,gt=Math.hypot(st,ot)||1,Wt=q*(.14-.075*fe);at.push([Se+st/gt*Wt,Pe+ot/gt*Wt]),L.push([Se-st/gt*Wt,Pe-ot/gt*Wt])}let xt=Zn([...at,...L.reverse()],!0),[ft,We]=re(pe);for(let[Y,fe,Se,Pe]of[[-.66,.02,"#8FA041",.4],[.7,-.06,"#D8A23C",.44],[.36,.3,"#D2652F",.46]]){let De=ft+Y*be,Ce=We+fe*be,$e=Pe*be,Be=Pe*be*1.16;Ve+=`<path fill="none" stroke="${ut.twig}" stroke-width="${w(be*.05)}" stroke-linecap="round" d="M${w(ft)} ${w(We)}L${w(De)} ${w(Ce-Be*.8)}"/><ellipse fill="${Se}" cx="${w(De)}" cy="${w(Ce)}" rx="${w($e)}" ry="${w(Be)}"/><ellipse fill="#FFF6E6" fill-opacity=".16" cx="${w(De-$e*.32)}" cy="${w(Ce-Be*.34)}" rx="${w($e*.28)}" ry="${w(Be*.2)}" transform="rotate(-30 ${w(De-$e*.32)} ${w(Ce-Be*.34)})"/><circle fill="${ut.twig}" fill-opacity=".5" cx="${w(De)}" cy="${w(Ce+Be*.78)}" r="${w($e*.13)}"/>`}ae.branch=`<defs>${ge("dbr",8,10,.34)}</defs><g filter="url(#dbr)">${Re}<path fill="${ut.twig}" d="${xt}"/>${ve}${Ve}</g><path fill="none" stroke="${ut.vein}" stroke-opacity=".8" stroke-width="${w(Math.max(1,q*.013))}" stroke-linecap="round" d="${He.join("")}"/>`}{let ue=Qc(77),ce=[],le="";ce.forEach(([we,Le,re,pe,Ee],Re)=>{le+=`<path fill="${ut.close[Re%2]}" d="${eh(we,Le,re*q,pe*q,Ee,ue).shape}"/>`}),ae.close=le?`<defs><filter id="dclose" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="${w(Math.max(2,q*.025))}"/><feDropShadow dx="0" dy="10" stdDeviation="12" flood-color="rgb(${ut.ink})" flood-opacity=".35"/></filter></defs><g filter="url(#dclose)">${le}</g>`:""}for(let ue of s)ue.wrap.style.transformOrigin=G?`${w(K)}px ${w(se)}px`:"";O(ae,I,N,++v).then(()=>x(),()=>x())}function P(U,I,N,G){let ee=Math.ceil(I/8),K=Math.ceil(N/8);try{let se=document.createElement("canvas");se.width=ee,se.height=K;let be=se.getContext("2d",{willReadFrequently:!0});be.drawImage(U,0,0,ee,K);let te=be.getImageData(0,0,ee,K).data,q=ee,ie=K,de=-1,ge=-1;for(let R=0;R<K;R++)for(let S=0;S<ee;S++)te[(R*ee+S)*4+3]>2&&(S<q&&(q=S),S>de&&(de=S),R<ie&&(ie=R),R>ge&&(ge=R));if(de<0)return{x:0,y:0,w:I,h:N};let ae=Math.max(0,q*8-G),Ge=Math.max(0,ie*8-G);return{x:ae,y:Ge,w:Math.min(I,(de+1)*8+G)-ae,h:Math.min(N,(ge+1)*8+G)-Ge}}catch{return{x:0,y:0,w:I,h:N}}}async function O(U,I,N,G){let $=window.devicePixelRatio||1;await Promise.all(s.map(async ee=>{let K=n(ee.id)&&U[ee.id]||"",se=ee.paint,be=pf(ee.id,$);if(!K){se.width=se.height=0;return}let te=`<svg xmlns="${gd}" width="${Math.round(I*be)}" height="${Math.round(N*be)}" viewBox="0 0 ${I} ${N}">${K}</svg>`,q=URL.createObjectURL(new Blob([te],{type:"image/svg+xml"}));try{let ie=new Image;if(ie.src=q,await ie.decode(),G!==v)return;let de=P(ie,I,N,ee.id==="branch"?24:8);se.width=Math.round(de.w*be),se.height=Math.round(de.h*be),Object.assign(se.style,{left:`${de.x}px`,top:`${de.y}px`,width:`${de.w}px`,height:`${de.h}px`}),ee.id==="branch"&&(se.style.transformOrigin=`${I-de.x}px ${N*.45-de.y}px`);let ge=se.getContext("2d");ge.drawImage(ie,-de.x*be,-de.y*be,I*be,N*be),ee.id!=="branch"&&uf(ge,se.width,se.height),se.style.display="",ee.svg.style.display="none"}catch{if(G!==v)return;ee.svg.setAttribute("viewBox",`0 0 ${I} ${N}`),ee.svg.setAttribute("width",I),ee.svg.setAttribute("height",N),ee.svg.innerHTML=K,ee.svg.style.display="",se.style.display="none"}finally{URL.revokeObjectURL(q)}}))}function B(U,I,N,G,$,ee=!1,K=I<=0){let se=window.devicePixelRatio||1;l+=(h-l)*.06,c+=(u-c)*.06,Math.abs(h-l)<.001&&(l=h),Math.abs(u-c)<.001&&(c=u);let be=U*U*(3-2*U);for(let q of s){let ie=ee?q.flyNarrow:q.fly,de=-l*q.depth*26+ie[0]*be*G,ge=-c*q.depth*16+ie[1]*be*$,ae=1+ie[2]*be,Ge=`translate3d(${(Math.round(de*se)/se).toFixed(2)}px, ${(Math.round(ge*se)/se).toFixed(2)}px, 0) scale(${ae.toFixed(4)})`;Ge!==q.tf&&(q.tf=Ge,q.wrap.style.transform=Ge)}if(I!==m){m=I;let q=I.toFixed(3);i.style.opacity=q;for(let ie of s)ie.paint.style.opacity=q,ie.svg.style.opacity=q;for(let ie of _)ie.style.opacity=q}let te=K&&I<=0;te!==g&&(g=te,r.classList.toggle("is-gone",te)),te||H(N)}function H(U){for(let I of[p,f]){if(!I)continue;let N=I.to-I.from,G=Math.max(24,N/(I.pace||9))*2,$=(U/G+(I.shift||0))%1,ee=$<.5?$*2:2-$*2,K=($<.5?1:-1)*(I.left?-1:1),se=I.from+N*ee,be=fi(I.crest,se)+I.dy;I.el.style.transform=`translate3d(${(se-I.w/2).toFixed(1)}px, ${(be-I.h).toFixed(1)}px, 0)`,K!==I.face&&(I.face=K,I.el.style.setProperty("--face",K))}}return{layout:E,update:B,lean:(U,I)=>{h=U,u=I},layers:s,ready:()=>o!=="",whenDrawn:()=>y}}function Md(r){r.innerHTML="",r.classList.add("dio--photo");let e=document.createElement("picture");e.className="dio__photo";let t=document.querySelector("[data-hero-cherry]"),n=t?(t.getAttribute("src")||"").replace(/assets\/.*$/,""):"",i=r.dataset.photo||`${n}assets/hero/feld`;e.innerHTML=`<source media="(max-aspect-ratio: 4/5)" srcset="${i}-hoch-900.webp 900w, ${i}-hoch-1500.webp 1500w" sizes="100vw"><img src="${i}-quer-2400.webp" srcset="${i}-quer-1400.webp 1400w, ${i}-quer-2400.webp 2400w" sizes="100vw" alt="" decoding="async" fetchpriority="high">`;let s=document.createElement("div");s.className="dio__front",r.append(e,s);let a=yd(s,{only:["branch"],keep:["dio__bird"]}),o=e.querySelector("img"),l=!1,c=0,h=0,u=0,d=0,p="",f=-1,v=null,m=Promise.all([(o.decode?o.decode():Promise.resolve()).catch(()=>{}),a.whenDrawn()]);function g(y,T,E,P,O){!y||!y.rx||(l=!0,a.layout(y,T,E,P,O))}function _(y,T,E,P,O,B=!1,H=T<=0){c+=(u-c)*.06,h+=(d-h)*.06,Math.abs(u-c)<.001&&(c=u),Math.abs(d-h)<.001&&(h=d);let V=y*y*(3-2*y),U=1.04+V*.1,I=-c*14,N=-h*9+V*O*.04,G=`translate3d(${I.toFixed(1)}px, ${N.toFixed(1)}px, 0) scale(${U.toFixed(4)})`;G!==p&&(p=G,e.style.transform=G),T!==f&&(f=T,e.style.opacity=T.toFixed(3)),a.update(y,T,E,P,O,B,H);let $=H&&T<=0;$!==v&&(v=$,r.classList.toggle("is-gone",$))}return{layout:g,update:_,lean:(y,T)=>{u=y,d=T,a.lean(y,T)},layers:[],ready:()=>l,whenDrawn:()=>m}}(()=>{let e=/[?&]debug=ui\b/.test(location.search)?Object.assign(document.createElement("pre"),{style:"position:fixed;left:8px;top:60px;z-index:99;margin:0;padding:6px 8px;font:11px/1.3 monospace;background:#fffd;color:#300;max-width:90vw;white-space:pre-wrap"}):null;if(e){document.body.append(e),addEventListener("error",Y=>{e.textContent+=`
ERR ${Y.message} @${Y.lineno}:${Y.colno}`});for(let Y of["pointerdown","click"])addEventListener(Y,fe=>{e.dataset.taps=`${e.dataset.taps||""} ${Y}:${fe.target.tagName}.${String(fe.target.className).split(" ")[0]}`.slice(-220)},!0)}let t=document.querySelector("[data-hero]");if(!t)return;let n=t.querySelector("[data-hero-stage]"),i=t.querySelector("[data-hero-foot]"),s=t.querySelector("[data-hero-canvas]"),a=t.querySelector("[data-hero-cherry]"),o=t.querySelector("[data-hero-cue]"),l=t.querySelector("[data-hero-cue-end]"),c=t.querySelector("[data-hero-name]"),h=t.querySelector("[data-hero-plant]"),u=t.querySelector("[data-hero-dio]"),d=u&&u.dataset.box?u.dataset.box.split(",").map(Number):null,p=h&&{cx:+h.dataset.cx,cy:+h.dataset.cy,rx:+h.dataset.rx,turn:+h.dataset.turn,box:h.dataset.box.split(",").map(Number)},f=t.querySelector(".hero__copy"),v=window.matchMedia("(prefers-reduced-motion: reduce)").matches,m=(Y,fe=0,Se=1)=>Math.min(Se,Math.max(fe,Y)),g=(Y,fe,Se)=>{let Pe=m((Se-Y)/(fe-Y));return Pe*Pe*(3-2*Pe)},_=(Y,fe,Se,Pe,De)=>g(Y,fe,De)*(1-g(Se,Pe,De)),x=[...t.querySelectorAll("[data-part]")],y=[...t.querySelectorAll("[data-beat]")].map(Y=>({el:Y,win:Y.dataset.beat.split(",").map(Number)})),T=[247,236,218];t.edge={top:T,floor:T,fadeFrom:1/0,fadeH:0};let E=[247,236,218],P=matchMedia("(max-aspect-ratio: 4/5)"),O=-1;function B(Y){let fe=P.matches?Y:0;if(fe===O)return;O=fe;let Se=T.map((Pe,De)=>Math.round(Pe+(E[De]-Pe)*fe));t.style.setProperty("--top",Se.join(", ")),t.edge.top=Se,t.edge.floor=Se,t.dispatchEvent(new Event("tone"))}P.addEventListener?.("change",()=>{let Y=O;O=-1,B(Math.max(0,Y))}),t.dispatchEvent(new Event("tone"));let H=a&&{texture:a.dataset.texture,aspect:+a.dataset.aspect,cx:+a.dataset.cx,cy:+a.dataset.cy,rx:+a.dataset.rx,ry:+a.dataset.ry},V=null;try{V=fd(s,{onFrame:rt,photo:H,plantBox:p&&p.box||d,gentle:matchMedia("(pointer: coarse)").matches})}catch{V=null}let U=()=>document.dispatchEvent(new Event("cascarup:ready"));if(!V){t.classList.add("is-flat"),e&&(e.textContent="kein WebGL"),U();return}let I=[];if(e){let Y=0,fe=[],Se=[],Pe=De=>{Y&&(I.push(De-Y),ae&&(fe.push(De-Y),De-Y>25&&Se.push(`${V.progress.toFixed(3)}:${Math.round(De-Y)}`))),!ae&&fe.length&&(e.dataset.g=`glide ${fe.length}f slow=${fe.filter(Ce=>Ce>25).length} max=${Math.round(Math.max(...fe))}ms @ ${Se.join(" ")}`,fe=[],Se=[]),I.length>240&&I.shift(),Y=De,requestAnimationFrame(Pe)};requestAnimationFrame(Pe)}e&&setInterval(()=>{let Y=[],fe=0;for(let De=I.length-1;De>=0&&fe<1e3;De--)fe+=I[De],Y.push(I[De]);let Se=`fps=${Y.length} slow=${Y.filter(De=>De>25).length} max=${Math.round(Math.max(0,...Y))}ms`,Pe=V.state();(Pe.progress!==Pe.target||ae)&&(e.dataset.low=Math.min(+(e.dataset.low||99),Y.length)),e.textContent=`${e.dataset.g||""}
${Se} low=${e.dataset.low||"-"} px=${Pe.ratio} cost=${Pe.cost}ms p=${Pe.progress}\u2192${Pe.target}
`+JSON.stringify(Pe)+` reduce=${v} y=${Math.round(scrollY)} cls=${t.className}
${e.dataset.taps||""}`},400),t.classList.add("is-3d");let N=u?Md(u):null;if(N){let Y=()=>u.classList.add("is-up");document.addEventListener("cascarup:shown",Y,{once:!0}),/[?&]debug\b/.test(location.search)&&(window.__dio=N),setTimeout(Y,12e3),matchMedia("(pointer: fine)").matches&&!v&&addEventListener("pointermove",fe=>N.lean(fe.clientX/innerWidth*2-1,fe.clientY/innerHeight*2-1),{passive:!0})}V.background=getComputedStyle(document.documentElement).getPropertyValue("--paper").trim()||"#F7ECDA",/[?&]debug\b/.test(location.search)&&(window.__hero=V);let G=/[?&]debug\b/.test(location.search)?parseFloat(new URLSearchParams(location.search).get("at")):NaN,$=0,ee=null,K=()=>(ee||(t.classList.contains("is-released")||($=parseFloat(getComputedStyle(n).top)||0),ee={top:t.getBoundingClientRect().top+window.scrollY,h:t.offsetHeight,stage:n.offsetHeight,release:parseFloat(getComputedStyle(t).getPropertyValue("--release"))||0}),ee),se=()=>{ee=null};if(window.addEventListener("resize",se),"ResizeObserver"in window){let Y=new ResizeObserver(se);Y.observe(t),Y.observe(n),Y.observe(document.body)}document.fonts?.ready.then(se),window.addEventListener("load",se);let be=()=>{let Y=K();return Y.h-$-Y.stage-Y.release},te=()=>K().top;function q(Y=window.scrollY){let fe=be();return fe>0?m((Y-te())/fe):0}let ie=window.scrollY,de=0,ge=0,ae=0,Ge=!1,R=!1,S=!1,z=document.documentElement,k=window.matchMedia("(pointer: coarse)").matches,M=0,A=()=>{z.style.scrollBehavior="",z.style.overflow="",clearTimeout(M),Ge=!1},F=()=>{ae&&(cancelAnimationFrame(ae),ae=0,A())};function D(Y,fe=0,Se=!1){F(),S=!1;let Pe=window.scrollY,De=Y-Pe;if(Math.abs(De)<2)return;let Ce=fe||m(Math.abs(De)/Math.max(1,be())*Kc,500,2600),$e=performance.now();z.style.scrollBehavior="auto",Se&&k&&(z.style.overflow="hidden",clearTimeout(M),M=setTimeout(()=>{z.style.overflow=""},380));let Be=st=>{let ot=m((st-$e)/Ce),gt=ot<.5?4*ot*ot*ot:1-Math.pow(-2*ot+2,3)/2;window.scrollTo(0,Pe+De*gt),ae=ot<1?requestAnimationFrame(Be):0,ae||A()};ae=requestAnimationFrame(Be)}let X=/[?&]debug\b/.test(location.search)&&!/[?&]glide\b/.test(location.search),J=0;document.addEventListener("click",Y=>{Y.target.closest?.('a[href^="#"]')&&(J=performance.now()+2500)},!0);function W(){if(v||ae||X||!S||performance.now()<J)return;let Y=be(),fe=te(),Se=window.scrollY;if(Y<=0||Se<fe-1||Se>fe+Y+1)return;let Pe=m((Se-fe)/Y);if(_n.some(Ce=>Math.abs(Ce-Pe)<.006))return;let De;de>0?De=_n.find(Ce=>Ce>Pe):de<0&&(De=[..._n].reverse().find(Ce=>Ce<Pe)),De===void 0&&(De=_n.reduce((Ce,$e)=>Math.abs($e-Pe)<Math.abs(Ce-Pe)?$e:Ce)),D(fe+De*Y)}for(let Y of["touchstart","keydown","pointerdown"])window.addEventListener(Y,F,{passive:!0});let oe=!1,Ae=0,me=0;addEventListener("wheel",Y=>{let fe=performance.now(),Se=fe-Ae>180;if(Ae=fe,me=fe,Ge&&ae&&Y.deltaY>0){oe=!0,Y.preventDefault();return}if(oe&&!Se&&Y.deltaY>0){Y.preventDefault();return}oe=!1,S=!0,F()},{passive:!1}),addEventListener("touchstart",()=>{R=!0,me=performance.now()},{passive:!0}),addEventListener("touchmove",()=>{me=performance.now(),S=!0},{passive:!0}),addEventListener("keydown",()=>{me=performance.now(),S=!0},{passive:!0}),addEventListener("touchend",()=>{R=!1,me=performance.now(),Ue()},{passive:!0}),addEventListener("touchcancel",()=>{R=!1},{passive:!0});function Ue(Y=window.scrollY){if(v||X||ae||R||performance.now()<J||performance.now()-me>900||document.documentElement.classList.contains("is-loading"))return;let fe=be(),Se=te();if(fe<=0)return;let Pe=(Y-Se)/fe;de>0&&Pe>.0025&&Pe<_n[1]-.01&&(Ge=!0,D(Se+_n[1]*fe,(_n[1]-Pe)*Kc,!0))}function ue(){let Y=window.scrollY,fe=K(),Se=!v&&fe.top+fe.h-Y<=$+fe.stage+fe.release+.5;Se!==t.classList.contains("is-released")&&t.classList.toggle("is-released",Se),V.progress=v?0:q(Y),!ae&&Y!==ie&&(de=Math.sign(Y-ie)),ie=Y,clearTimeout(ge),ae||(Ue(Y),ae||(ge=setTimeout(W,150)))}let ce=-1,le=-1,we=-1,Le=!0,re=!1,pe=-1,Ee=null,Re=1,ve=1,Ve=!1,He=0;function rt(Y,fe,Se){if(N){let Ce=Re,$e=ve,Be=Ce/$e<=1.05,st=Be?.05:.072,ot=Math.round((1-g(Be?.012:st-.028,st,Y))*500)/500,gt=Y>st+.025;(ot>0||Le||gt!==re)&&((Y<.003||!N.ready())&&N.layout(Se(),Ce,$e,Be,Ee),N.update(g(.004,st,Y),ot,performance.now()/1e3,Ce,$e,Be,gt)),Le=ot>0,re=gt,ot!==pe&&(pe=ot,i&&(i.style.opacity=ot),B(ot));let Wt=ot>=1&&!document.documentElement.classList.contains("is-loading");Wt!==Ve&&(Ve=Wt,V.cover=Wt)}let Pe=Math.round((1-g(.012,.05,Y))*500)/500;if(Pe>0&&(o||c)){let Ce=Se(),$e=Re,Be=ve,st=$e/Be<=1.05;o&&(o.style.setProperty("--x",`${($e/2).toFixed(1)}px`),o.style.setProperty("--y",`${(st?Be-72:Be-82).toFixed(1)}px`)),c&&(c.classList.toggle("is-up",st),c.style.setProperty("--x",`${(Ce.x-(st?.3:.5)*Ce.rx).toFixed(1)}px`),c.style.setProperty("--y",`${(Ce.y-(st?.82:.8)*Ce.ry).toFixed(1)}px`))}if(p){let Ce=Re,$e=ve,Be=Ce/$e<=1.05,st=g(.006,Be?.055:.07,Y),ot=Math.round((1-g(Be?.03:.048,Be?.052:.07,Y))*500)/500;if(ot>0){let gt=Se(),Wt=gt.rx/p.rx,vi=st*st*Ce*(Be?.55:.6),lr=st*st*$e*(Be?-.32:.75),Pn=p.turn+st*(Be?-9:9);h.style.transform=`translate3d(${(gt.x+vi).toFixed(1)}px, ${(gt.y+lr).toFixed(1)}px, 0) rotate(${Pn.toFixed(2)}deg) scale(${Wt.toFixed(4)}) translate(${-p.cx}px, ${-p.cy}px)`}ot!==we&&(we=ot,h.style.opacity=ot,h.style.visibility=ot>0?"visible":"hidden")}if(Pe!==le){le=Pe;for(let Ce of[o,c])Ce&&(Ce.style.opacity=Pe,Ce.style.visibility=Pe>0?"visible":"hidden");o&&o.classList.toggle("is-off",Pe===0)}for(let Ce of y){let[$e,Be,st,ot]=Ce.win,gt=Math.round((ot>=1?g($e,Be,Y):_($e,Be,st,ot,Y))*500)/500;gt!==Ce.o&&(Ce.o=gt,Ce.el.style.opacity=gt,Ce.el.style.visibility=gt===0?"hidden":"visible",Ce.el.style.setProperty("--in",gt),Ce.el.classList.toggle("is-on",gt>0))}let De=_(.17,.22,.287,.305,Y);if(De>.002){let Ce=fe();for(let $e of x){let Be=Ce[$e.dataset.part];$e.style.transform=`translate3d(${Be.x.toFixed(1)}px, ${Be.y.toFixed(1)}px, 0)`,$e.style.opacity=De.toFixed(3),$e.style.visibility="visible"}x.shown=!0}else if(x.shown!==!1){x.shown=!1;for(let Ce of x)Ce.style.opacity="0",Ce.style.visibility="hidden"}if(H){let Ce=V&&V.photoReady?1-g(.068,.095,Y):Y<.1?1:0;if(Ce>0){let $e=Se(),Be=$e.rx/H.rx,st=Be*a.naturalHeight/Math.max(1,a.naturalWidth);(!He||Be>He*1.04||Be<He*.5)&&(He=Math.ceil(Be*1.2),a.style.width=`${He}px`),a.style.transform=`translate3d(${($e.x-H.cx*Be).toFixed(1)}px, ${($e.y-H.cy*st).toFixed(1)}px, 0) scale(${(Be/He).toFixed(4)})`}Ce!==ce&&(ce=Ce,a.style.opacity=Ce,a.style.visibility=Ce>0?"visible":"hidden")}}let ht=(Y,fe)=>{let Se=(Y.l+Y.r)/2,Pe=(Y.t+Y.b)/2,De=(Y.r-Y.l)/2*fe,Ce=(Y.b-Y.t)/2*fe;return{l:Se-De,t:Pe-Ce,r:Se+De,b:Pe+Ce}};function at(){let Y=n.getBoundingClientRect(),fe=Y.width,Se=Y.height,Pe=fe/Se<=1.05,De=f.getBoundingClientRect(),Ce=(document.querySelector("[data-nav]")?.offsetHeight||64)-12,$e=0;for(let Be of f.children)$e=Math.max($e,Be.getBoundingClientRect().right-Y.left);V.frame=Pe?ht({l:14,t:De.bottom-Y.top+8,r:fe-14,b:Se-86},.9):{l:$e+48,t:Ce+28,r:fe-32,b:Se-104},Ee={left:De.left-Y.left,right:$e,top:De.top-Y.top,bottom:De.bottom-Y.top}}let L=()=>{let Y=n.getBoundingClientRect();Re=Math.round(Y.width),ve=Math.round(Y.height),V.resize(Re,ve),at(),l&&(l.style.setProperty("--x",`${(Re/2).toFixed(1)}px`),l.style.setProperty("--y",`${(Re/ve<=1.05?ve-72:ve-82).toFixed(1)}px`))};document.fonts?.ready.then(()=>at()),new ResizeObserver(L).observe(n),L(),new IntersectionObserver(([Y])=>{v||(Y.isIntersecting?V.start():V.stop(),t.classList.toggle("is-away",!Y.isIntersecting))},{rootMargin:"120px 0px"}).observe(t),window.addEventListener("scroll",ue,{passive:!0}),window.addEventListener("resize",ue),ue(),clearTimeout(ge),v?(V.jump(0),V.stop()):V.begin(),Number.isFinite(G)&&G>=0&&G<=1&&setTimeout(()=>{document.documentElement.style.scrollBehavior="auto",scrollTo(0,te()+be()*G)},600),a&&!a.complete&&a.addEventListener("load",()=>V.jump(V.progress),{once:!0}),requestAnimationFrame(()=>t.classList.add("is-ready"));let xt=()=>new Promise(Y=>{let fe=0,Se=performance.now(),Pe=Se,De=Ce=>{fe=Ce-Se<20?fe+1:0,Se=Ce,fe>=30||Ce-Pe>5e3?Y():requestAnimationFrame(De)};requestAnimationFrame(De)}),ft=!1,We=()=>{ft||(ft=!0,t.classList.add("has-plant"),(v?Promise.resolve():V.warm()).then(()=>N?N.whenDrawn():null).then(()=>v||V.tune()).then(xt).then(U,U),setTimeout(()=>t.classList.add("is-settled"),1e3))};h?(h.decode?h.decode():Promise.resolve()).then(We,()=>h.addEventListener("load",We,{once:!0})):We(),setTimeout(We,5e3)})();
