import { a as a$1 } from './chunk-74T7T5LL.js';
import { a as a$3 } from './chunk-GSRQSB3U.js';
import { a } from './chunk-BHJSY5WG.js';
import { p, a as a$2, j as j$1, i, h, m, n, l } from './chunk-DCAKKOYV.js';

var U={name:"@dotlottie/common",version:"0.7.11",type:"module",description:"",author:"Afsal <afsal@lottiefiles.com>, Sam Osborne <sam@lottiefiles.com>",license:"MIT",engines:{node:">18.0.0"},module:"dist/index.js",main:"dist/index.js",types:"dist/index.d.ts",files:["dist"],keywords:[],scripts:{build:"tsup",dev:"tsup --watch",lint:"eslint .","type-check":"tsc --noEmit"},dependencies:{"@dotlottie/dotlottie-js":"^0.7.0","@preact/signals-core":"^1.2.3",howler:"^2.2.3","lottie-web":"^5.12.2",xstate:"^4.38.1"},devDependencies:{"@lottiefiles/lottie-types":"^1.2.0","@types/howler":"^2.2.8",tsup:"^7.2.0",typescript:"^4.7.4"},publishConfig:{access:"public"}};var W=(l=>(l.Complete="complete",l.DataFail="data_fail",l.DataReady="data_ready",l.Error="error",l.Frame="frame",l.Freeze="freeze",l.LoopComplete="loopComplete",l.Pause="pause",l.Play="play",l.Ready="ready",l.Stop="stop",l.VisibilityChange="visibilityChange",l))(W||{}),K=(d=>(d.Completed="completed",d.Error="error",d.Fetching="fetching",d.Frozen="frozen",d.Initial="initial",d.Loading="loading",d.Paused="paused",d.Playing="playing",d.Ready="ready",d.Stopped="stopped",d))(K||{}),G=(e=>(e.Bounce="bounce",e.Normal="normal",e))(G||{}),u={autoplay:!1,direction:1,hover:!1,intermission:0,loop:!1,playMode:"normal",speed:1,defaultTheme:""},Q={activeStateId:"",autoplay:!1,currentState:"initial",frame:0,seeker:0,direction:1,hover:!1,loop:!1,playMode:"normal",speed:1,background:"transparent",intermission:0,currentAnimationId:void 0,visibilityPercentage:0},j=class{_lottie;_src;_animationConfig;_prevUserPlaybackOptions={};_userPlaybackOptions;_hover=!1;_loop=!1;_counter=0;_intermission=0;_counterInterval=null;_container=null;_name;_mode="normal";_background="transparent";_animation;_defaultTheme;_activeAnimationId;_currentAnimationId;_testId;_listeners=new Map;_currentState="initial";_stateBeforeFreeze="initial";state=new a(Q);_light=!1;_worker=!1;_dotLottieLoader=new a$1;_activeStateId;_inInteractiveMode=!1;_scrollTicking=!1;_scrollCallback=void 0;_onShowIntersectionObserver=void 0;_visibilityPercentage=0;_audios=[];_stateMachineManager;constructor(t,e,i){typeof t=="string"?this._src=t:this._src=p(t),i!=null&&i.testId&&(this._testId=i.testId),this._defaultTheme=(i==null?void 0:i.defaultTheme)||"",this._userPlaybackOptions=this._validatePlaybackOptions(i||{}),typeof(i==null?void 0:i.activeAnimationId)=="string"&&(this._activeAnimationId=i.activeAnimationId),this._container=e||null,typeof(i==null?void 0:i.background)=="string"&&this.setBackground(i.background),typeof(i==null?void 0:i.activeStateId)<"u"&&(this._activeStateId=i.activeStateId);let{rendererSettings:n,...o}=i||{};this._animationConfig={loop:!1,autoplay:!1,renderer:"svg",rendererSettings:{clearCanvas:!0,progressiveLoad:!0,hideOnTransparent:!0,filterSize:{width:"200%",height:"200%",x:"-50%",y:"-50%"},...n},...o},i!=null&&i.light&&(this._light=i.light),i!=null&&i.worker&&(this._worker=i.worker),this._listenToHover(),this._listenToVisibilityChange();}_listenToHover(){var i,n,o,a;let t=()=>{this._hover&&this.currentState!=="playing"&&this.play();},e=()=>{this._hover&&this.currentState==="playing"&&this.stop();};(i=this._container)==null||i.removeEventListener("mouseenter",t),(n=this._container)==null||n.removeEventListener("mouseleave",e),(o=this._container)==null||o.addEventListener("mouseleave",e),(a=this._container)==null||a.addEventListener("mouseenter",t);}_onVisibilityChange(){!this._lottie||typeof document>"u"||(document.hidden&&this.currentState==="playing"?this.freeze():this.currentState==="frozen"&&this.unfreeze());}_listenToVisibilityChange(){typeof document<"u"&&typeof document.hidden<"u"&&document.addEventListener("visibilitychange",()=>this._onVisibilityChange());}_getOption(t){var i;if(typeof this._userPlaybackOptions[t]<"u")return this._userPlaybackOptions[t];let e=(i=this._dotLottieLoader.manifest)==null?void 0:i.animations.find(n=>n.id===this._currentAnimationId);return e&&typeof e[t]<"u"?e[t]:u[t]}_getPlaybackOptions(){let t={};for(let e in u)typeof u[e]<"u"&&(t[e]=this._getOption(e));return t}_setPlayerState(t){var i,n,o;let e=t(this._getPlaybackOptions());try{a$2._parse(e);}catch{j$1(`Invalid PlaybackOptions, ${JSON.stringify(e,null,2)}`);return}typeof e.defaultTheme<"u"&&(this._defaultTheme=e.defaultTheme),typeof e.playMode<"u"&&(this._mode=e.playMode),typeof e.intermission<"u"&&(this._intermission=e.intermission),typeof e.hover<"u"&&(this._hover=e.hover),typeof e.loop<"u"&&(this.clearCountTimer(),this._loop=e.loop,this._counter=0,(i=this._lottie)==null||i.setLoop(typeof e.loop=="number"?!0:e.loop)),typeof e.speed<"u"&&((n=this._lottie)==null||n.setSpeed(e.speed)),typeof e.autoplay<"u"&&this._lottie&&(this._lottie.autoplay=e.autoplay),typeof e.direction<"u"&&((o=this._lottie)==null||o.setDirection(e.direction));}_getOptionsFromAnimation(t){let{id:e,...i}=t;return {...u,...i}}_updateTestData(){!this._testId||!this._lottie||(window.dotLottiePlayer||(window.dotLottiePlayer={[this._testId]:{}}),window.dotLottiePlayer[this._testId]={direction:this._lottie.playDirection,currentState:this._currentState,loop:this.loop,mode:this._mode,speed:this._lottie.playSpeed});}setContainer(t){t!==this._container&&(this._container=t,this.setBackground(this._background),this._listenToHover());}get currentState(){return this._currentState}clearCountTimer(){this._counterInterval&&clearInterval(this._counterInterval);}setCurrentState(t){this._currentState=t,this._notify(),this._updateTestData();}static isPathJSON(t){var e;return ((e=t.split(".").pop())==null?void 0:e.toLowerCase())==="json"}get src(){return this._src}updateSrc(t){this._src!==t&&(typeof t=="string"?this._src=t:this._src=p(t),this._activeAnimationId=void 0,this._currentAnimationId=void 0,this.load());}get intermission(){return this._intermission}get hover(){return this._hover}setHover(t){typeof t=="boolean"&&(this._hover=t,this._userPlaybackOptions.hover=t,this._notify());}setIntermission(t){this._intermission=t,this._userPlaybackOptions.intermission=t,this._notify();}get mode(){return this._mode}get animations(){return this._dotLottieLoader.animationsMap}get themes(){return this._dotLottieLoader.themeMap}setMode(t){typeof t=="string"&&(this._mode=t,this._userPlaybackOptions.playMode=t,this._setPlayerState(()=>({playMode:t})),this._notify(),this._updateTestData());}get container(){if(this._container)return this._container}goToAndPlay(t,e,i){if(!this._lottie||["loading"].includes(this._currentState)){j$1("goToAndPlay() Can't use whilst loading.");return}this._lottie.goToAndPlay(t,e,i),this.setCurrentState("playing");}goToAndStop(t,e,i){if(!this._lottie||["loading"].includes(this._currentState)){j$1("goToAndStop() Can't use whilst loading.");return}this._lottie.goToAndStop(t,e,i),this.setCurrentState("stopped");}seek(t){if(!this._lottie||["loading"].includes(this._currentState)){j$1("seek() Can't use whilst loading.");return}let e=t;typeof e=="number"&&(e=Math.round(e));let i=/^(\d+)(%?)$/u.exec(e.toString());if(!i)return;let n=i[2]==="%"?this.totalFrames*Number(i[1])/100:i[1];n!==void 0&&(this._lottie.goToAndPlay(n,!0),this.currentState==="playing"?this.play():this.currentState==="frozen"?this.freeze():this.pause());}_areNumbersInRange(t,e){return t>=0&&t<=1&&e>=0&&e<=1}_updatePosition(t,e,i$1){let[n,o]=t!=null?t:[0,this.totalFrames-1],[a,h]=e!=null?e:[0,1];if(!this._areNumbersInRange(a,h)){i("threshold values must be between 0 and 1");return}if(this.container){let{height:f,top:p}=this.container.getBoundingClientRect(),d=window.innerHeight-p,m=window.innerHeight+f,l=d/m,_=n+Math.round((l-a)/(h-a)*(o-n));i$1&&i$1(l),this.goToAndStop(_,!0),(_>=o||l>=h)&&this._handleAnimationComplete();}this._scrollTicking=!1;}_requestTick(t,e,i){this._scrollTicking||(requestAnimationFrame(()=>this._updatePosition(t,e,i)),this._scrollTicking=!0);}playOnScroll(t){this.stop(),this._scrollCallback&&this.stopPlayOnScroll(),this._scrollCallback=()=>this._requestTick(t==null?void 0:t.segments,t==null?void 0:t.threshold,t==null?void 0:t.positionCallback),window.addEventListener("scroll",this._scrollCallback);}stopPlayOnScroll(){this._scrollCallback&&(window.removeEventListener("scroll",this._scrollCallback),this._scrollCallback=void 0);}stopPlayOnShow(){this._onShowIntersectionObserver&&(this._onShowIntersectionObserver.disconnect(),this._onShowIntersectionObserver=void 0);}addIntersectionObserver(t){if(!this.container)throw h("Can't play on show, player container element not available.");let e={root:null,rootMargin:"0px",threshold:t!=null&&t.threshold?t.threshold:[0,1]},i=n=>{n.forEach(o=>{var a,h;this._visibilityPercentage=o.intersectionRatio*100,o.isIntersecting?(t!=null&&t.callbackOnIntersect&&t.callbackOnIntersect(this._visibilityPercentage),(a=this._container)==null||a.dispatchEvent(new Event("visibilityChange"))):t!=null&&t.callbackOnIntersect&&(t.callbackOnIntersect(0),(h=this._container)==null||h.dispatchEvent(new Event("visibilityChange")));});};this._onShowIntersectionObserver=new IntersectionObserver(i,e),this._onShowIntersectionObserver.observe(this.container);}playOnShow(t){var e;if(this.stop(),!this.container)throw h("Can't play on show, player container element not available.");this._onShowIntersectionObserver&&this.stopPlayOnShow(),this.addIntersectionObserver({threshold:(e=t==null?void 0:t.threshold)!=null?e:[],callbackOnIntersect:i=>{i===0?this.pause():this.play();}});}_validatePlaybackOptions(t){if(!t)return {};let e={};for(let[i,n]of Object.entries(t))switch(i){case"autoplay":typeof n=="boolean"&&(e.autoplay=n);break;case"direction":typeof n=="number"&&[1,-1].includes(n)&&(e.direction=n);break;case"loop":(typeof n=="boolean"||typeof n=="number")&&(e.loop=n);break;case"playMode":typeof n=="string"&&["normal","bounce"].includes(n)&&(e.playMode=n);break;case"speed":typeof n=="number"&&(e.speed=n);break;case"themeColor":typeof n=="string"&&(e.themeColor=n);break;case"hover":typeof n=="boolean"&&(e.hover=n);break;case"intermission":typeof n=="number"&&(e.intermission=n);break;case"defaultTheme":typeof n=="string"&&(e.defaultTheme=n);break;}return this._requireValidPlaybackOptions(e),e}_requireAnimationsInTheManifest(){var t;if(!((t=this._dotLottieLoader.manifest)!=null&&t.animations.length))throw h("No animations found in manifest.")}_requireAnimationsToBeLoaded(){if(this._dotLottieLoader.animationsMap.size===0)throw h("No animations have been loaded.")}async play(t,e){var i,n;if(["initial","loading"].includes(this._currentState)){j$1("Player unable to play whilst loading.");return}if(this._requireAnimationsInTheManifest(),this._requireAnimationsToBeLoaded(),this._lottie&&!t){this._lottie.playDirection===-1&&this._lottie.currentFrame===0?this._lottie.goToAndPlay(this._lottie.totalFrames,!0):this._lottie.play(),this.setCurrentState("playing");return}if(typeof t=="number"){let o=(i=this._dotLottieLoader.manifest)==null?void 0:i.animations[t];if(!o)throw h("animation not found.");typeof e=="function"?await this.render({id:o.id,...e(this._getPlaybackOptions(),this._getOptionsFromAnimation(o))}):await this.render({id:o.id});}if(typeof t=="string"){let o=(n=this._dotLottieLoader.manifest)==null?void 0:n.animations.find(a=>a.id===t);if(!o)throw h("animation not found.");typeof e=="function"?await this.render({id:o.id,...e(this._getPlaybackOptions(),this._getOptionsFromAnimation(o))}):await this.render({id:o.id});}}playSegments(t,e){if(!this._lottie||["loading"].includes(this._currentState)){j$1("playSegments() Can't use whilst loading.");return}this._lottie.playSegments(t,e),this.setCurrentState("playing");}resetSegments(t){if(!this._lottie||["loading"].includes(this._currentState)){j$1("resetSegments() Can't use whilst loading.");return}this._lottie.resetSegments(t);}togglePlay(){this.currentState==="playing"?this.pause():this.play();}_getAnimationByIdOrIndex(t){var e,i;if(this._requireAnimationsInTheManifest(),this._requireAnimationsToBeLoaded(),typeof t=="number"){let n=(e=this._dotLottieLoader.manifest)==null?void 0:e.animations[t];if(!n)throw h("animation not found.");return n}if(typeof t=="string"){let n=(i=this._dotLottieLoader.manifest)==null?void 0:i.animations.find(o=>o.id===t);if(!n)throw h("animation not found.");return n}throw h("first param must be a number or string")}get activeAnimationId(){return this._getActiveAnimationId()}get currentAnimationId(){return this._currentAnimationId}get activeStateId(){return this._activeStateId}async _startInteractivity(t){if(!this._inInteractiveMode){i("Can't start interactivity. Not in interactive mode. Call enterInteractiveMode(stateId: string) to start.");return}if(this._dotLottieLoader.stateMachinesMap.size===0&&await this._dotLottieLoader.getStateMachines(),this._dotLottieLoader.stateMachinesMap.size===0)throw h("No interactivity states are available.");if(t==="undefined")throw h("stateId is not specified.");this._stateMachineManager||(this._stateMachineManager=await a$3(Array.from(this._dotLottieLoader.stateMachinesMap.values()),this)),this._stateMachineManager.start(t);}enterInteractiveMode(t){var e;if(t)this._inInteractiveMode||(this._prevUserPlaybackOptions={...this._userPlaybackOptions}),this._inInteractiveMode&&((e=this._stateMachineManager)==null||e.stop()),this._activeStateId=t,this._inInteractiveMode=!0,this._startInteractivity(t);else throw h("stateId must be a non-empty string.")}exitInteractiveMode(){var t;this._inInteractiveMode&&(this._inInteractiveMode=!1,this._activeStateId="",(t=this._stateMachineManager)==null||t.stop(),this._userPlaybackOptions={},this._userPlaybackOptions={...this._prevUserPlaybackOptions},this._prevUserPlaybackOptions={},this.reset());}reset(){var i;let t=this._getActiveAnimationId(),e=(i=this._dotLottieLoader.manifest)==null?void 0:i.animations.find(n=>n.id===t);if(this._inInteractiveMode&&this.exitInteractiveMode(),!e)throw h("animation not found.");this.play(t);}previous(t){if(!this._dotLottieLoader.manifest||!this._dotLottieLoader.manifest.animations.length)throw h("manifest not found.");if(this._inInteractiveMode){j$1("previous() is not supported in interactive mode.");return}let e=this._dotLottieLoader.manifest.animations.findIndex(n=>n.id===this._currentAnimationId);if(e===-1)throw h("animation not found.");let i=this._dotLottieLoader.manifest.animations[(e-1+this._dotLottieLoader.manifest.animations.length)%this._dotLottieLoader.manifest.animations.length];if(!i||!i.id)throw h("animation not found.");typeof t=="function"?this.render({id:i.id,...t(this._getPlaybackOptions(),this._getOptionsFromAnimation(i))}):this.render({id:i.id});}next(t){if(!this._dotLottieLoader.manifest||!this._dotLottieLoader.manifest.animations.length)throw h("manifest not found.");if(this._inInteractiveMode){j$1("next() is not supported in interactive mode.");return}let e=this._dotLottieLoader.manifest.animations.findIndex(n=>n.id===this._currentAnimationId);if(e===-1)throw h("animation not found.");let i=this._dotLottieLoader.manifest.animations[(e+1)%this._dotLottieLoader.manifest.animations.length];if(!i||!i.id)throw h("animation not found.");typeof t=="function"?this.render({id:i.id,...t(this._getPlaybackOptions(),this._getOptionsFromAnimation(i))}):this.render({id:i.id});}getManifest(){return this._dotLottieLoader.manifest}resize(){if(!this._lottie||["loading"].includes(this._currentState)){j$1("resize() Can't use whilst loading.");return}this._lottie.resize();}stop(){if(!this._lottie||["loading"].includes(this._currentState)){j$1("stop() Can't use whilst loading.");return}this.clearCountTimer(),this._counter=0,this._setPlayerState(()=>({direction:this._getOption("direction")})),this._lottie.stop(),this.setCurrentState("stopped");}pause(){if(!this._lottie||["loading"].includes(this._currentState)){j$1("pause() Can't use whilst loading.");return}this.clearCountTimer(),this._lottie.pause(),this.setCurrentState("paused");}freeze(){if(!this._lottie||["loading"].includes(this._currentState)){j$1("freeze() Can't use whilst loading.");return}this.currentState!=="frozen"&&(this._stateBeforeFreeze=this.currentState),this._lottie.pause(),this.setCurrentState("frozen");}unfreeze(){if(!this._lottie||["loading"].includes(this._currentState)){j$1("unfreeze() Can't use whilst loading.");return}this._stateBeforeFreeze==="playing"?this.play():this.pause();}destroy(){var t,e;(t=this._container)!=null&&t.__lottie&&(this._container.__lottie.destroy(),this._container.__lottie=null),this._audios.length&&(this._audios.forEach(i=>{i.unload();}),this._audios=[]),this.clearCountTimer(),typeof document<"u"&&document.removeEventListener("visibilitychange",()=>this._onVisibilityChange()),this._counter=0,(e=this._lottie)==null||e.destroy(),this._lottie=void 0;}getAnimationInstance(){return this._lottie}static getLottieWebVersion(){return `${U.dependencies["lottie-web"]}`}addEventListener(t,e){var i$1,n,o;this._listeners.has(t)||this._listeners.set(t,new Set),(i$1=this._listeners.get(t))==null||i$1.add(e);try{t==="complete"?(n=this._container)==null||n.addEventListener(t,e):(o=this._lottie)==null||o.addEventListener(t,e);}catch(a){i(`addEventListener ${a}`);}}getState(){var t,e,i,n,o,a,h;return {autoplay:(e=(t=this._lottie)==null?void 0:t.autoplay)!=null?e:!1,currentState:this._currentState,frame:this._frame,visibilityPercentage:this._visibilityPercentage,seeker:this._seeker,direction:(n=(i=this._lottie)==null?void 0:i.playDirection)!=null?n:1,hover:this._hover,loop:this._loop||!1,playMode:this._mode,speed:(a=(o=this._lottie)==null?void 0:o.playSpeed)!=null?a:1,background:this._background,intermission:this._intermission,defaultTheme:this._defaultTheme,currentAnimationId:this._currentAnimationId,activeStateId:(h=this._activeStateId)!=null?h:""}}_notify(){this.state.setState(this.getState());}get totalFrames(){var t;return ((t=this._lottie)==null?void 0:t.totalFrames)||0}get direction(){return this._lottie?this._lottie.playDirection:1}setDirection(t){this._requireValidDirection(t),this._setPlayerState(()=>({direction:t})),this._userPlaybackOptions.direction=t;}get speed(){var t;return ((t=this._lottie)==null?void 0:t.playSpeed)||1}setSpeed(t){this._requireValidSpeed(t),this._setPlayerState(()=>({speed:t})),this._userPlaybackOptions.speed=t;}get autoplay(){var t,e;return (e=(t=this._lottie)==null?void 0:t.autoplay)!=null?e:!1}setAutoplay(t){if(this._requireValidAutoplay(t),!this._lottie||["loading"].includes(this._currentState)){j$1("setAutoplay() Can't use whilst loading.");return}this._setPlayerState(()=>({autoplay:t})),this._userPlaybackOptions.autoplay=t;}toggleAutoplay(){if(!this._lottie||["loading"].includes(this._currentState)){j$1("toggleAutoplay() Can't use whilst loading.");return}this.setAutoplay(!this._lottie.autoplay);}get defaultTheme(){return this._defaultTheme}setDefaultTheme(t){this._setPlayerState(()=>({defaultTheme:t})),this._userPlaybackOptions.defaultTheme=t,this._animation&&this.render();}get loop(){return this._loop}setLoop(t){this._requireValidLoop(t),this._setPlayerState(()=>({loop:t})),this._userPlaybackOptions.loop=t;}toggleLoop(){if(!this._lottie||["loading"].includes(this._currentState)){j$1("toggleLoop() Can't use whilst loading.");return}this.setLoop(!this._loop);}get background(){return this._background}setBackground(t){this._requireValidBackground(t),this._background=t,this._container&&(this._container.style.backgroundColor=t);}get _frame(){return this._lottie?this.currentState==="completed"?this.direction===-1?0:this._lottie.totalFrames:this._lottie.currentFrame:0}get _seeker(){return this._lottie?this._frame/this._lottie.totalFrames*100:0}async revertToManifestValues(t){var n;let e;!Array.isArray(t)||t.length===0?e=["autoplay","defaultTheme","direction","hover","intermission","loop","playMode","speed","activeAnimationId"]:e=t;let i=!1;if(e.includes("activeAnimationId")){let o=(n=this._dotLottieLoader.manifest)==null?void 0:n.activeAnimationId,a=this._getAnimationByIdOrIndex(o||0);this._activeAnimationId=o,await this._setCurrentAnimation(a.id),i=!0;}e.forEach(o=>{switch(o){case"autoplay":delete this._userPlaybackOptions.autoplay,this.setAutoplay(this._getOption("autoplay"));break;case"defaultTheme":delete this._userPlaybackOptions.defaultTheme,this.setDefaultTheme(this._getOption("defaultTheme"));break;case"direction":delete this._userPlaybackOptions.direction,this.setDirection(this._getOption("direction"));break;case"hover":delete this._userPlaybackOptions.hover,this.setHover(this._getOption("hover"));break;case"intermission":delete this._userPlaybackOptions.intermission,this.setIntermission(this._getOption("intermission"));break;case"loop":delete this._userPlaybackOptions.loop,this.setLoop(this._getOption("loop"));break;case"playMode":delete this._userPlaybackOptions.playMode,this.setMode(this._getOption("playMode")),this.setDirection(this._getOption("direction"));break;case"speed":delete this._userPlaybackOptions.speed,this.setSpeed(this._getOption("speed"));break;}}),i&&this.render();}removeEventListener(t,e){var i$1,n,o;try{t==="complete"?(i$1=this._container)==null||i$1.removeEventListener(t,e):(n=this._lottie)==null||n.removeEventListener(t,e),(o=this._listeners.get(t))==null||o.delete(e);}catch(a){i("removeEventListener",a);}}_handleAnimationComplete(){var e;typeof this._loop=="number"&&this.stop();let t=this.direction===-1?0:this.totalFrames-1;this.goToAndStop(t,!0),this._counter=0,this.clearCountTimer(),this.setCurrentState("completed"),(e=this._container)==null||e.dispatchEvent(new Event("complete"));}addEventListeners(){var t;if(!this._lottie||["loading"].includes(this._currentState)){j$1("addEventListeners() Can't use whilst loading.");return}this._lottie.addEventListener("enterFrame",()=>{var i;if(!this._lottie){j$1("enterFrame event : Lottie is undefined.");return}Math.floor(this._lottie.currentFrame)===0&&this.direction===-1&&((i=this._container)==null||i.dispatchEvent(new Event("complete")),this.loop||this.setCurrentState("completed")),this._notify();}),this._lottie.addEventListener("loopComplete",()=>{var n;if(!this._lottie){j$1("loopComplete event : Lottie is undefined.");return}(n=this._container)==null||n.dispatchEvent(new Event("loopComplete")),this.intermission>0&&this.pause();let e=this._lottie.playDirection;if(typeof this._loop=="number"&&this._loop>0&&(this._counter+=this._mode==="bounce"?.5:1,this._counter>=this._loop)){this._handleAnimationComplete();return}this._mode==="bounce"&&typeof e=="number"&&(e=Number(e)*-1);let i=e===-1?this._lottie.totalFrames-1:0;this.intermission?(this.goToAndPlay(i,!0),this.pause(),this._counterInterval=window.setTimeout(()=>{this._lottie&&(this._setPlayerState(()=>({direction:e})),this.goToAndPlay(i,!0));},this._intermission)):(this._setPlayerState(()=>({direction:e})),this.goToAndPlay(e===-1?this.totalFrames-1:0,!0));}),this._lottie.addEventListener("complete",()=>{if(this._lottie&&this._loop===!1&&this._mode==="bounce"){if(this._counter+=.5,this._counter>=1){this._handleAnimationComplete();return}this._counterInterval=window.setTimeout(()=>{if(!this._lottie)return;let e=this._lottie.playDirection;this._mode==="bounce"&&typeof e=="number"&&(e=Number(e)*-1);let i=e===-1?this.totalFrames-1:0;this._setPlayerState(()=>({direction:e})),this.goToAndPlay(i,!0);},this._intermission);}else this._handleAnimationComplete();});for(let[e,i]of this._listeners)if(e==="complete")for(let n of i)(t=this._container)==null||t.addEventListener(e,n);else for(let n of i)this._lottie.addEventListener(e,n);}async _setCurrentAnimation(t){this._currentState="loading";let e=await this._dotLottieLoader.getAnimation(t);this._currentAnimationId=t,this._animation=e,this._currentState="ready";}async _getAudioFactory(){if(this._animation&&m(this._animation)){let{DotLottieAudio:t}=await import('./dotlottie-audio.js');return i=>{let n=new t({src:[i]});return this._audios.push(n),n}}return null}async render(t){var b,g,v,P,S,L,k,w,I,O,C,M,T,A,D,E,F,x;if(t!=null&&t.id)await this._setCurrentAnimation(t.id);else if(!this._animation)throw h("no animation selected");let e=(b=u.loop)!=null?b:!1,i=(g=u.autoplay)!=null?g:!1,n=(v=u.playMode)!=null?v:"normal",o=(P=u.intermission)!=null?P:0,a=(S=u.hover)!=null?S:!1,h$1=(L=u.direction)!=null?L:1,f=(k=u.speed)!=null?k:1,p$1=(w=u.defaultTheme)!=null?w:"";e=(I=t==null?void 0:t.loop)!=null?I:this._getOption("loop"),i=(O=t==null?void 0:t.autoplay)!=null?O:this._getOption("autoplay"),n=(C=t==null?void 0:t.playMode)!=null?C:this._getOption("playMode"),o=(M=t==null?void 0:t.intermission)!=null?M:this._getOption("intermission"),a=(T=t==null?void 0:t.hover)!=null?T:this._getOption("hover"),h$1=(A=t==null?void 0:t.direction)!=null?A:this._getOption("direction"),f=(D=t==null?void 0:t.speed)!=null?D:this._getOption("speed"),p$1=(E=t==null?void 0:t.defaultTheme)!=null?E:this._getOption("defaultTheme");let d={...this._animationConfig,autoplay:a?!1:i,loop:typeof e=="number"?!0:e,renderer:this._worker?"svg":(F=this._animationConfig.renderer)!=null?F:"svg"},[m,l,_]=await Promise.all([this._dotLottieLoader.getTheme(p$1),this._getLottiePlayerInstance(),this._getAudioFactory()]);if(m&&this._animation?(this._animation=p(this._animation),this._animation.slots=m):this._animation=await this._dotLottieLoader.getAnimation((x=this._currentAnimationId)!=null?x:""),this._activeStateId&&!this._inInteractiveMode){this.enterInteractiveMode(this._activeStateId);return}this.destroy(),this._setPlayerState(()=>({defaultTheme:p$1,playMode:n,intermission:o,hover:a,loop:e})),_?this._lottie=l.loadAnimation({...d,container:this._container,animationData:this._animation,audioFactory:_}):this._lottie=l.loadAnimation({...d,container:this._container,animationData:this._animation}),typeof this._lottie.resetSegments>"u"&&(this._lottie.resetSegments=()=>{var V;(V=this._lottie)==null||V.playSegments([0,this._lottie.totalFrames],!0);}),this.addEventListeners(),this._container&&(this._container.__lottie=this._lottie),this._setPlayerState(()=>({direction:h$1,speed:f})),i&&!a&&(e===!1&&h$1===-1?this.play():this.setCurrentState("playing")),this._updateTestData();}async _getLottiePlayerInstance(){var i;let t=(i=this._animationConfig.renderer)!=null?i:"svg",e;if(this._worker)return t!=="svg"&&j$1("Worker is only supported with svg renderer. Change or remove renderer prop to get rid of this warning."),e=await import('./lottie_worker-Q23FJ6ZR.js'),e.default;switch(t){case"svg":{this._light?e=await import('./lottie_light-KMJEUZFY.js'):e=await import('./lottie_svg-MJGYILXD.js');break}case"canvas":{this._light?e=await import('./lottie_light_canvas-B5UTTNXA.js'):e=await import('./lottie_canvas-CDSUBMCL.js');break}case"html":{this._light?e=await import('./lottie_light_html-SLCECTRT.js'):e=await import('./lottie_html-X3TYKVQI.js');break}default:throw new Error(`Invalid renderer: ${t}`)}return e.default}_getActiveAnimationId(){var e,i,n,o;let t=this._dotLottieLoader.manifest;return (o=(n=(e=this._activeAnimationId)!=null?e:t==null?void 0:t.activeAnimationId)!=null?n:(i=t==null?void 0:t.animations[0])==null?void 0:i.id)!=null?o:void 0}async load(t){if(this._currentState==="loading"){j$1("Loading in progress..");return}try{if(this.setCurrentState("loading"),typeof this._src=="string")if(n(this._src)){let i=JSON.parse(this._src);this._dotLottieLoader.loadFromLottieJSON(i);}else {let i=new URL(this._src,window.location.href);await this._dotLottieLoader.loadFromUrl(i.toString());}else if(typeof this._src=="object"&&l(this._src))this._dotLottieLoader.loadFromLottieJSON(this._src);else throw h("Invalid src provided");if(!this._dotLottieLoader.manifest)throw h("No manifest found");let e=this._getActiveAnimationId();if(!e)throw h("No active animation found");await this._setCurrentAnimation(e),await this.render(t);}catch(e){this.setCurrentState("error"),e instanceof Error&&i(`Error loading animation: ${e.message}`);}}setErrorState(t){this.setCurrentState("error"),i(t);}_requireValidDirection(t){if(t!==-1&&t!==1)throw h("Direction can only be -1 (backwards) or 1 (forwards)")}_requireValidIntermission(t){if(t<0||!Number.isInteger(t))throw h("intermission must be a positive number")}_requireValidLoop(t){if(typeof t=="number"&&(!Number.isInteger(t)||t<0))throw h("loop must be a positive number or boolean")}_requireValidSpeed(t){if(typeof t!="number")throw h("speed must be a number")}_requireValidBackground(t){if(typeof t!="string")throw h("background must be a string")}_requireValidAutoplay(t){if(typeof t!="boolean")throw h("autoplay must be a boolean")}_requireValidPlaybackOptions(t){t.direction&&this._requireValidDirection(t.direction),t.intermission&&this._requireValidIntermission(t.intermission),t.loop&&this._requireValidLoop(t.loop),t.speed&&this._requireValidSpeed(t.speed);}};

export { W as a, K as b, G as c, u as d, Q as e, j as f };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-NZJZ4CCL.js.map