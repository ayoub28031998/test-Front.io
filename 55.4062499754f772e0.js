"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[55],{3055:(E,y,c)=>{c.r(y),c.d(y,{LoginModule:()=>ke});var d=c(6814),p=c(2129),C=c(9862),k=c(6726),e=c(4769),f=c(3859),_=c(707),s=c(1180),h=c(95),v=c(2332),u=c(5219),w=c(2591);const O=["cb"];function D(i,l){if(1&i&&e._UZ(0,"span",10),2&i){const o=e.oxw(3);e.Q6J("ngClass",o.checkboxIcon)}}function A(i,l){1&i&&e._UZ(0,"CheckIcon",11),2&i&&e.Q6J("styleClass","p-checkbox-icon")}function B(i,l){if(1&i&&(e.ynx(0),e.YNc(1,D,1,1,"span",8),e.YNc(2,A,1,1,"CheckIcon",9),e.BQk()),2&i){const o=e.oxw(2);e.xp6(1),e.Q6J("ngIf",o.checkboxIcon),e.xp6(1),e.Q6J("ngIf",!o.checkboxIcon)}}function J(i,l){}function N(i,l){1&i&&e.YNc(0,J,0,0,"ng-template")}function H(i,l){if(1&i&&(e.TgZ(0,"span",12),e.YNc(1,N,1,0,null,13),e.qZA()),2&i){const o=e.oxw(2);e.xp6(1),e.Q6J("ngTemplateOutlet",o.checkboxIconTemplate)}}function z(i,l){if(1&i&&(e.ynx(0),e.YNc(1,B,3,2,"ng-container",5),e.YNc(2,H,2,1,"span",7),e.BQk()),2&i){const o=e.oxw();e.xp6(1),e.Q6J("ngIf",!o.checkboxIconTemplate),e.xp6(1),e.Q6J("ngIf",o.checkboxIconTemplate)}}const R=function(i,l,o){return{"p-checkbox-label":!0,"p-checkbox-label-active":i,"p-disabled":l,"p-checkbox-label-focus":o}};function Q(i,l){if(1&i){const o=e.EpF();e.TgZ(0,"label",14),e.NdJ("click",function(n){e.CHM(o);const a=e.oxw(),r=e.MAs(3);return e.KtG(a.onClick(n,r,!0))}),e._uU(1),e.qZA()}if(2&i){const o=e.oxw();e.Tol(o.labelStyleClass),e.Q6J("ngClass",e.kEZ(5,R,o.checked(),o.disabled,o.focused)),e.uIk("for",o.inputId),e.xp6(1),e.Oqu(o.label)}}const F=function(i,l,o){return{"p-checkbox p-component":!0,"p-checkbox-checked":i,"p-checkbox-disabled":l,"p-checkbox-focused":o}},Y=function(i,l,o){return{"p-highlight":i,"p-disabled":l,"p-focus":o}},U={provide:h.JU,useExisting:(0,e.Gpc)(()=>Z),multi:!0};let Z=(()=>{var i;class l{constructor(t){(0,s.Z)(this,"cd",void 0),(0,s.Z)(this,"value",void 0),(0,s.Z)(this,"name",void 0),(0,s.Z)(this,"disabled",void 0),(0,s.Z)(this,"binary",void 0),(0,s.Z)(this,"label",void 0),(0,s.Z)(this,"ariaLabelledBy",void 0),(0,s.Z)(this,"ariaLabel",void 0),(0,s.Z)(this,"tabindex",void 0),(0,s.Z)(this,"inputId",void 0),(0,s.Z)(this,"style",void 0),(0,s.Z)(this,"styleClass",void 0),(0,s.Z)(this,"labelStyleClass",void 0),(0,s.Z)(this,"formControl",void 0),(0,s.Z)(this,"checkboxIcon",void 0),(0,s.Z)(this,"readonly",void 0),(0,s.Z)(this,"required",void 0),(0,s.Z)(this,"trueValue",!0),(0,s.Z)(this,"falseValue",!1),(0,s.Z)(this,"onChange",new e.vpe),(0,s.Z)(this,"inputViewChild",void 0),(0,s.Z)(this,"templates",void 0),(0,s.Z)(this,"checkboxIconTemplate",void 0),(0,s.Z)(this,"model",void 0),(0,s.Z)(this,"onModelChange",()=>{}),(0,s.Z)(this,"onModelTouched",()=>{}),(0,s.Z)(this,"focused",!1),this.cd=t}ngAfterContentInit(){this.templates.forEach(t=>{"icon"===t.getType()&&(this.checkboxIconTemplate=t.template)})}onClick(t,n,a){t.preventDefault(),!this.disabled&&!this.readonly&&(this.updateModel(t),a&&n.focus())}updateModel(t){let n;this.binary?(n=this.checked()?this.falseValue:this.trueValue,this.model=n,this.onModelChange(n)):(n=this.checked()?this.model.filter(a=>!v.gb.equals(a,this.value)):this.model?[...this.model,this.value]:[this.value],this.onModelChange(n),this.model=n,this.formControl&&this.formControl.setValue(n)),this.onChange.emit({checked:n,originalEvent:t})}handleChange(t){this.readonly||this.updateModel(t)}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}focus(){this.inputViewChild?.nativeElement.focus()}writeValue(t){this.model=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}checked(){return this.binary?this.model===this.trueValue:v.gb.contains(this.value,this.model)}}return i=l,(0,s.Z)(l,"\u0275fac",function(t){return new(t||i)(e.Y36(e.sBO))}),(0,s.Z)(l,"\u0275cmp",e.Xpm({type:i,selectors:[["p-checkbox"]],contentQueries:function(t,n,a){if(1&t&&e.Suo(a,u.jx,4),2&t){let r;e.iGM(r=e.CRH())&&(n.templates=r)}},viewQuery:function(t,n){if(1&t&&e.Gf(O,5),2&t){let a;e.iGM(a=e.CRH())&&(n.inputViewChild=a.first)}},hostAttrs:[1,"p-element"],inputs:{value:"value",name:"name",disabled:"disabled",binary:"binary",label:"label",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:"tabindex",inputId:"inputId",style:"style",styleClass:"styleClass",labelStyleClass:"labelStyleClass",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:"readonly",required:"required",trueValue:"trueValue",falseValue:"falseValue"},outputs:{onChange:"onChange"},features:[e._Bn([U])],decls:7,vars:26,consts:[[3,"ngStyle","ngClass"],[1,"p-hidden-accessible"],["type","checkbox",3,"readonly","value","checked","disabled","focus","blur","change"],["cb",""],[1,"p-checkbox-box",3,"ngClass","click"],[4,"ngIf"],[3,"class","ngClass","click",4,"ngIf"],["class","p-checkbox-icon",4,"ngIf"],["class","p-checkbox-icon",3,"ngClass",4,"ngIf"],[3,"styleClass",4,"ngIf"],[1,"p-checkbox-icon",3,"ngClass"],[3,"styleClass"],[1,"p-checkbox-icon"],[4,"ngTemplateOutlet"],[3,"ngClass","click"]],template:function(t,n){if(1&t){const a=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"input",2,3),e.NdJ("focus",function(){return n.onFocus()})("blur",function(){return n.onBlur()})("change",function(g){return n.handleChange(g)}),e.qZA()(),e.TgZ(4,"div",4),e.NdJ("click",function(g){e.CHM(a);const x=e.MAs(3);return e.KtG(n.onClick(g,x,!0))}),e.YNc(5,z,3,2,"ng-container",5),e.qZA()(),e.YNc(6,Q,2,9,"label",6)}2&t&&(e.Tol(n.styleClass),e.Q6J("ngStyle",n.style)("ngClass",e.kEZ(18,F,n.checked(),n.disabled,n.focused)),e.xp6(2),e.Q6J("readonly",n.readonly)("value",n.value)("checked",n.checked())("disabled",n.disabled),e.uIk("id",n.inputId)("name",n.name)("tabindex",n.tabindex)("aria-labelledby",n.ariaLabelledBy)("aria-label",n.ariaLabel)("aria-checked",n.checked())("required",n.required),e.xp6(2),e.Q6J("ngClass",e.kEZ(22,Y,n.checked(),n.disabled,n.focused)),e.xp6(1),e.Q6J("ngIf",n.checked()),e.xp6(1),e.Q6J("ngIf",n.label))},dependencies:function(){return[d.mk,d.O5,d.tP,d.PC,w.n]},styles:[".p-checkbox{display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:bottom;position:relative}.p-checkbox-disabled{cursor:default!important;pointer-events:none}.p-checkbox-box{display:flex;justify-content:center;align-items:center}p-checkbox{display:inline-flex;vertical-align:bottom;align-items:center}.p-checkbox-label{line-height:1}\n"],encapsulation:2,changeDetection:0})),l})(),V=(()=>{var i;class l{}return i=l,(0,s.Z)(l,"\u0275fac",function(t){return new(t||i)}),(0,s.Z)(l,"\u0275mod",e.oAB({type:i})),(0,s.Z)(l,"\u0275inj",e.cJS({imports:[d.ez,w.n,u.m8]})),l})();var T=c(3714),m=c(6825),b=c(2076),I=c(7778),L=c(4713);let M=(()=>{var i;class l extends L.s{constructor(...t){super(...t),(0,s.Z)(this,"pathId",void 0)}ngOnInit(){this.pathId="url(#"+(0,v.Th)()+")"}}return i=l,(0,s.Z)(l,"\u0275fac",function(){let o;return function(n){return(o||(o=e.n5z(i)))(n||i)}}()),(0,s.Z)(l,"\u0275cmp",e.Xpm({type:i,selectors:[["EyeSlashIcon"]],standalone:!0,features:[e.qOj,e.jDz],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(t,n){1&t&&(e.O4$(),e.TgZ(0,"svg",0)(1,"g"),e._UZ(2,"path",1),e.qZA(),e.TgZ(3,"defs")(4,"clipPath",2),e._UZ(5,"rect",3),e.qZA()()()),2&t&&(e.Tol(n.getClassNames()),e.uIk("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),e.xp6(1),e.uIk("clip-path",n.pathId),e.xp6(3),e.Q6J("id",n.pathId))},encapsulation:2})),l})(),S=(()=>{var i;class l extends L.s{}return i=l,(0,s.Z)(l,"\u0275fac",function(){let o;return function(n){return(o||(o=e.n5z(i)))(n||i)}}()),(0,s.Z)(l,"\u0275cmp",e.Xpm({type:i,selectors:[["EyeIcon"]],standalone:!0,features:[e.qOj,e.jDz],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z","fill","currentColor"]],template:function(t,n){1&t&&(e.O4$(),e.TgZ(0,"svg",0),e._UZ(1,"path",1),e.qZA()),2&t&&(e.Tol(n.getClassNames()),e.uIk("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})),l})();const j=["input"];function G(i,l){if(1&i){const o=e.EpF();e.TgZ(0,"TimesIcon",8),e.NdJ("click",function(){e.CHM(o);const n=e.oxw(2);return e.KtG(n.clear())}),e.qZA()}2&i&&e.Q6J("styleClass","p-password-clear-icon")}function K(i,l){}function q(i,l){1&i&&e.YNc(0,K,0,0,"ng-template")}function W(i,l){if(1&i){const o=e.EpF();e.ynx(0),e.YNc(1,G,1,1,"TimesIcon",5),e.TgZ(2,"span",6),e.NdJ("click",function(){e.CHM(o);const n=e.oxw();return e.KtG(n.clear())}),e.YNc(3,q,1,0,null,7),e.qZA(),e.BQk()}if(2&i){const o=e.oxw();e.xp6(1),e.Q6J("ngIf",!o.clearIconTemplate),e.xp6(2),e.Q6J("ngTemplateOutlet",o.clearIconTemplate)}}function $(i,l){if(1&i){const o=e.EpF();e.TgZ(0,"EyeSlashIcon",10),e.NdJ("click",function(){e.CHM(o);const n=e.oxw(3);return e.KtG(n.onMaskToggle())}),e.qZA()}}function X(i,l){}function ee(i,l){1&i&&e.YNc(0,X,0,0,"ng-template")}function te(i,l){if(1&i){const o=e.EpF();e.TgZ(0,"span",10),e.NdJ("click",function(){e.CHM(o);const n=e.oxw(3);return e.KtG(n.onMaskToggle())}),e.YNc(1,ee,1,0,null,7),e.qZA()}if(2&i){const o=e.oxw(3);e.xp6(1),e.Q6J("ngTemplateOutlet",o.hideIconTemplate)}}function ne(i,l){if(1&i&&(e.ynx(0),e.YNc(1,$,1,0,"EyeSlashIcon",9),e.YNc(2,te,2,1,"span",9),e.BQk()),2&i){const o=e.oxw(2);e.xp6(1),e.Q6J("ngIf",!o.hideIconTemplate),e.xp6(1),e.Q6J("ngIf",o.hideIconTemplate)}}function ie(i,l){if(1&i){const o=e.EpF();e.TgZ(0,"EyeIcon",10),e.NdJ("click",function(){e.CHM(o);const n=e.oxw(3);return e.KtG(n.onMaskToggle())}),e.qZA()}}function se(i,l){}function oe(i,l){1&i&&e.YNc(0,se,0,0,"ng-template")}function le(i,l){if(1&i){const o=e.EpF();e.TgZ(0,"span",10),e.NdJ("click",function(){e.CHM(o);const n=e.oxw(3);return e.KtG(n.onMaskToggle())}),e.YNc(1,oe,1,0,null,7),e.qZA()}if(2&i){const o=e.oxw(3);e.xp6(1),e.Q6J("ngTemplateOutlet",o.showIconTemplate)}}function ae(i,l){if(1&i&&(e.ynx(0),e.YNc(1,ie,1,0,"EyeIcon",9),e.YNc(2,le,2,1,"span",9),e.BQk()),2&i){const o=e.oxw(2);e.xp6(1),e.Q6J("ngIf",!o.showIconTemplate),e.xp6(1),e.Q6J("ngIf",o.showIconTemplate)}}function re(i,l){if(1&i&&(e.ynx(0),e.YNc(1,ne,3,2,"ng-container",3),e.YNc(2,ae,3,2,"ng-container",3),e.BQk()),2&i){const o=e.oxw();e.xp6(1),e.Q6J("ngIf",o.unmasked),e.xp6(1),e.Q6J("ngIf",!o.unmasked)}}function ce(i,l){1&i&&e.GkF(0)}function de(i,l){1&i&&e.GkF(0)}function pe(i,l){if(1&i&&(e.ynx(0),e.YNc(1,de,1,0,"ng-container",7),e.BQk()),2&i){const o=e.oxw(2);e.xp6(1),e.Q6J("ngTemplateOutlet",o.contentTemplate)}}const he=function(i){return{width:i}};function ue(i,l){if(1&i&&(e.TgZ(0,"div",15),e._UZ(1,"div",0),e.ALo(2,"mapper"),e.qZA(),e.TgZ(3,"div",16),e._uU(4),e.qZA()),2&i){const o=e.oxw(2);e.xp6(1),e.Q6J("ngClass",e.xi3(2,3,o.meter,o.strengthClass))("ngStyle",e.VKq(6,he,o.meter?o.meter.width:"")),e.xp6(3),e.Oqu(o.infoText)}}function _e(i,l){1&i&&e.GkF(0)}const me=function(i,l){return{showTransitionParams:i,hideTransitionParams:l}},ge=function(i){return{value:"visible",params:i}};function fe(i,l){if(1&i){const o=e.EpF();e.TgZ(0,"div",11,12),e.NdJ("click",function(n){e.CHM(o);const a=e.oxw();return e.KtG(a.onOverlayClick(n))})("@overlayAnimation.start",function(n){e.CHM(o);const a=e.oxw();return e.KtG(a.onAnimationStart(n))})("@overlayAnimation.done",function(n){e.CHM(o);const a=e.oxw();return e.KtG(a.onAnimationEnd(n))}),e.YNc(2,ce,1,0,"ng-container",7),e.YNc(3,pe,2,1,"ng-container",13),e.YNc(4,ue,5,8,"ng-template",null,14,e.W1O),e.YNc(6,_e,1,0,"ng-container",7),e.qZA()}if(2&i){const o=e.MAs(5),t=e.oxw();e.Q6J("ngClass","p-password-panel p-component")("@overlayAnimation",e.VKq(9,ge,e.WLB(6,me,t.showTransitionOptions,t.hideTransitionOptions))),e.xp6(2),e.Q6J("ngTemplateOutlet",t.headerTemplate),e.xp6(1),e.Q6J("ngIf",t.contentTemplate)("ngIfElse",o),e.xp6(3),e.Q6J("ngTemplateOutlet",t.footerTemplate)}}let ve=(()=>{var i;class l{transform(t,n,...a){return n(t,...a)}}return i=l,(0,s.Z)(l,"\u0275fac",function(t){return new(t||i)}),(0,s.Z)(l,"\u0275pipe",e.Yjl({name:"mapper",type:i,pure:!0})),l})();const be={provide:h.JU,useExisting:(0,e.Gpc)(()=>P),multi:!0};let P=(()=>{var i;class l{constructor(t,n,a,r,g,x,xe){(0,s.Z)(this,"document",void 0),(0,s.Z)(this,"platformId",void 0),(0,s.Z)(this,"renderer",void 0),(0,s.Z)(this,"cd",void 0),(0,s.Z)(this,"config",void 0),(0,s.Z)(this,"el",void 0),(0,s.Z)(this,"overlayService",void 0),(0,s.Z)(this,"ariaLabel",void 0),(0,s.Z)(this,"ariaLabelledBy",void 0),(0,s.Z)(this,"label",void 0),(0,s.Z)(this,"disabled",void 0),(0,s.Z)(this,"promptLabel",void 0),(0,s.Z)(this,"mediumRegex","^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"),(0,s.Z)(this,"strongRegex","^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})"),(0,s.Z)(this,"weakLabel",void 0),(0,s.Z)(this,"mediumLabel",void 0),(0,s.Z)(this,"maxLength",void 0),(0,s.Z)(this,"strongLabel",void 0),(0,s.Z)(this,"inputId",void 0),(0,s.Z)(this,"feedback",!0),(0,s.Z)(this,"appendTo",void 0),(0,s.Z)(this,"toggleMask",void 0),(0,s.Z)(this,"inputStyleClass",void 0),(0,s.Z)(this,"styleClass",void 0),(0,s.Z)(this,"style",void 0),(0,s.Z)(this,"inputStyle",void 0),(0,s.Z)(this,"showTransitionOptions",".12s cubic-bezier(0, 0, 0.2, 1)"),(0,s.Z)(this,"hideTransitionOptions",".1s linear"),(0,s.Z)(this,"placeholder",void 0),(0,s.Z)(this,"showClear",!1),(0,s.Z)(this,"onFocus",new e.vpe),(0,s.Z)(this,"onBlur",new e.vpe),(0,s.Z)(this,"onClear",new e.vpe),(0,s.Z)(this,"input",void 0),(0,s.Z)(this,"contentTemplate",void 0),(0,s.Z)(this,"footerTemplate",void 0),(0,s.Z)(this,"headerTemplate",void 0),(0,s.Z)(this,"clearIconTemplate",void 0),(0,s.Z)(this,"hideIconTemplate",void 0),(0,s.Z)(this,"showIconTemplate",void 0),(0,s.Z)(this,"templates",void 0),(0,s.Z)(this,"overlayVisible",!1),(0,s.Z)(this,"meter",void 0),(0,s.Z)(this,"infoText",void 0),(0,s.Z)(this,"focused",!1),(0,s.Z)(this,"unmasked",!1),(0,s.Z)(this,"mediumCheckRegExp",void 0),(0,s.Z)(this,"strongCheckRegExp",void 0),(0,s.Z)(this,"resizeListener",void 0),(0,s.Z)(this,"scrollHandler",void 0),(0,s.Z)(this,"overlay",void 0),(0,s.Z)(this,"value",null),(0,s.Z)(this,"onModelChange",()=>{}),(0,s.Z)(this,"onModelTouched",()=>{}),(0,s.Z)(this,"translationSubscription",void 0),this.document=t,this.platformId=n,this.renderer=a,this.cd=r,this.config=g,this.el=x,this.overlayService=xe}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":default:this.contentTemplate=t.template;break;case"header":this.headerTemplate=t.template;break;case"footer":this.footerTemplate=t.template;break;case"clearicon":this.clearIconTemplate=t.template;break;case"hideicon":this.hideIconTemplate=t.template;break;case"showicon":this.showIconTemplate=t.template}})}ngOnInit(){this.infoText=this.promptText(),this.mediumCheckRegExp=new RegExp(this.mediumRegex),this.strongCheckRegExp=new RegExp(this.strongRegex),this.translationSubscription=this.config.translationObserver.subscribe(()=>{this.updateUI(this.value||"")})}onAnimationStart(t){switch(t.toState){case"visible":this.overlay=t.element,v.P9.set("overlay",this.overlay,this.config.zIndex.overlay),this.appendContainer(),this.alignOverlay(),this.bindScrollListener(),this.bindResizeListener();break;case"void":this.unbindScrollListener(),this.unbindResizeListener(),this.overlay=null}}onAnimationEnd(t){"void"===t.toState&&v.P9.clear(t.element)}appendContainer(){this.appendTo&&("body"===this.appendTo?this.renderer.appendChild(this.document.body,this.overlay):this.document.getElementById(this.appendTo).appendChild(this.overlay))}alignOverlay(){this.appendTo?(this.overlay.style.minWidth=b.p.getOuterWidth(this.input.nativeElement)+"px",b.p.absolutePosition(this.overlay,this.input.nativeElement)):b.p.relativePosition(this.overlay,this.input.nativeElement)}onInput(t){this.value=t.target.value,this.onModelChange(this.value)}onInputFocus(t){this.focused=!0,this.feedback&&(this.overlayVisible=!0),this.onFocus.emit(t)}onInputBlur(t){this.focused=!1,this.feedback&&(this.overlayVisible=!1),this.onModelTouched(),this.onBlur.emit(t)}onKeyDown(t){"Escape"===t.key&&(this.overlayVisible=!1)}onKeyUp(t){this.feedback&&(this.updateUI(t.target.value),this.overlayVisible||(this.overlayVisible=!0))}updateUI(t){let n=null,a=null;switch(this.testStrength(t)){case 1:n=this.weakText(),a={strength:"weak",width:"33.33%"};break;case 2:n=this.mediumText(),a={strength:"medium",width:"66.66%"};break;case 3:n=this.strongText(),a={strength:"strong",width:"100%"};break;default:n=this.promptText(),a=null}this.meter=a,this.infoText=n}onMaskToggle(){this.unmasked=!this.unmasked}onOverlayClick(t){this.overlayService.add({originalEvent:t,target:this.el.nativeElement})}testStrength(t){let n=0;return this.strongCheckRegExp.test(t)?n=3:this.mediumCheckRegExp.test(t)?n=2:t.length&&(n=1),n}writeValue(t){this.value=void 0===t?null:t,this.feedback&&this.updateUI(this.value||""),this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}bindScrollListener(){(0,d.NF)(this.platformId)&&(this.scrollHandler||(this.scrollHandler=new b.V(this.input.nativeElement,()=>{this.overlayVisible&&(this.overlayVisible=!1)})),this.scrollHandler.bindScrollListener())}bindResizeListener(){(0,d.NF)(this.platformId)&&!this.resizeListener&&(this.resizeListener=this.renderer.listen(this.document.defaultView,"resize",()=>{this.overlayVisible&&!b.p.isTouchDevice()&&(this.overlayVisible=!1)}))}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindResizeListener(){this.resizeListener&&(this.resizeListener(),this.resizeListener=null)}containerClass(t){return{"p-password p-component p-inputwrapper":!0,"p-input-icon-right":t}}inputFieldClass(t){return{"p-password-input":!0,"p-disabled":t}}strengthClass(t){return`p-password-strength ${t?t.strength:""}`}filled(){return null!=this.value&&this.value.toString().length>0}promptText(){return this.promptLabel||this.getTranslation(u.ws.PASSWORD_PROMPT)}weakText(){return this.weakLabel||this.getTranslation(u.ws.WEAK)}mediumText(){return this.mediumLabel||this.getTranslation(u.ws.MEDIUM)}strongText(){return this.strongLabel||this.getTranslation(u.ws.STRONG)}restoreAppend(){this.overlay&&this.appendTo&&("body"===this.appendTo?this.renderer.removeChild(this.document.body,this.overlay):this.document.getElementById(this.appendTo).removeChild(this.overlay))}inputType(t){return t?"text":"password"}getTranslation(t){return this.config.getTranslation(t)}clear(){this.value=null,this.onModelChange(this.value),this.writeValue(this.value),this.onClear.emit()}ngOnDestroy(){this.overlay&&(v.P9.clear(this.overlay),this.overlay=null),this.restoreAppend(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.translationSubscription&&this.translationSubscription.unsubscribe()}}return i=l,(0,s.Z)(l,"\u0275fac",function(t){return new(t||i)(e.Y36(d.K0),e.Y36(e.Lbi),e.Y36(e.Qsj),e.Y36(e.sBO),e.Y36(u.b4),e.Y36(e.SBq),e.Y36(u.F0))}),(0,s.Z)(l,"\u0275cmp",e.Xpm({type:i,selectors:[["p-password"]],contentQueries:function(t,n,a){if(1&t&&e.Suo(a,u.jx,4),2&t){let r;e.iGM(r=e.CRH())&&(n.templates=r)}},viewQuery:function(t,n){if(1&t&&e.Gf(j,5),2&t){let a;e.iGM(a=e.CRH())&&(n.input=a.first)}},hostAttrs:[1,"p-element","p-inputwrapper"],hostVars:8,hostBindings:function(t,n){2&t&&e.ekj("p-inputwrapper-filled",n.filled())("p-inputwrapper-focus",n.focused)("p-password-clearable",n.showClear)("p-password-mask",n.toggleMask)},inputs:{ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",label:"label",disabled:"disabled",promptLabel:"promptLabel",mediumRegex:"mediumRegex",strongRegex:"strongRegex",weakLabel:"weakLabel",mediumLabel:"mediumLabel",maxLength:"maxLength",strongLabel:"strongLabel",inputId:"inputId",feedback:"feedback",appendTo:"appendTo",toggleMask:"toggleMask",inputStyleClass:"inputStyleClass",styleClass:"styleClass",style:"style",inputStyle:"inputStyle",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",placeholder:"placeholder",showClear:"showClear"},outputs:{onFocus:"onFocus",onBlur:"onBlur",onClear:"onClear"},features:[e._Bn([be])],decls:9,vars:28,consts:[[3,"ngClass","ngStyle"],["pInputText","",3,"ngClass","ngStyle","value","input","focus","blur","keyup","keydown"],["input",""],[4,"ngIf"],[3,"ngClass","click",4,"ngIf"],[3,"styleClass","click",4,"ngIf"],[1,"p-password-clear-icon",3,"click"],[4,"ngTemplateOutlet"],[3,"styleClass","click"],[3,"click",4,"ngIf"],[3,"click"],[3,"ngClass","click"],["overlay",""],[4,"ngIf","ngIfElse"],["content",""],[1,"p-password-meter"],["className","p-password-info"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.ALo(1,"mapper"),e.TgZ(2,"input",1,2),e.NdJ("input",function(r){return n.onInput(r)})("focus",function(r){return n.onInputFocus(r)})("blur",function(r){return n.onInputBlur(r)})("keyup",function(r){return n.onKeyUp(r)})("keydown",function(r){return n.onKeyDown(r)}),e.ALo(4,"mapper"),e.ALo(5,"mapper"),e.qZA(),e.YNc(6,W,4,2,"ng-container",3),e.YNc(7,re,3,2,"ng-container",3),e.YNc(8,fe,7,11,"div",4),e.qZA()),2&t&&(e.Tol(n.styleClass),e.Q6J("ngClass",e.xi3(1,19,n.toggleMask,n.containerClass))("ngStyle",n.style),e.xp6(2),e.Tol(n.inputStyleClass),e.Q6J("ngClass",e.xi3(4,22,n.disabled,n.inputFieldClass))("ngStyle",n.inputStyle)("value",n.value),e.uIk("label",n.label)("aria-label",n.ariaLabel)("aria-labelledBy",n.ariaLabelledBy)("id",n.inputId)("type",e.xi3(5,25,n.unmasked,n.inputType))("placeholder",n.placeholder)("maxlength",n.maxLength),e.xp6(4),e.Q6J("ngIf",n.showClear&&null!=n.value),e.xp6(1),e.Q6J("ngIf",n.toggleMask),e.xp6(1),e.Q6J("ngIf",n.overlayVisible))},dependencies:function(){return[d.mk,d.O5,d.tP,d.PC,T.o,I.q,M,S,ve]},styles:[".p-password{position:relative;display:inline-flex}.p-password-panel{position:absolute;top:0;left:0}.p-password .p-password-panel{min-width:100%}.p-password-meter{height:10px}.p-password-strength{height:100%;width:0%;transition:width 1s ease-in-out}.p-fluid .p-password{display:flex}.p-password-input::-ms-reveal,.p-password-input::-ms-clear{display:none}.p-password-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-password-clearable{position:relative}\n"],encapsulation:2,data:{animation:[(0,m.X$)("overlayAnimation",[(0,m.eR)(":enter",[(0,m.oB)({opacity:0,transform:"scaleY(0.8)"}),(0,m.jt)("{{showTransitionParams}}")]),(0,m.eR)(":leave",[(0,m.jt)("{{hideTransitionParams}}",(0,m.oB)({opacity:0}))])])]},changeDetection:0})),l})(),ye=(()=>{var i;class l{}return i=l,(0,s.Z)(l,"\u0275fac",function(t){return new(t||i)}),(0,s.Z)(l,"\u0275mod",e.oAB({type:i})),(0,s.Z)(l,"\u0275inj",e.cJS({imports:[d.ez,T.j,I.q,M,S,u.m8]})),l})(),Ce=(()=>{var i;class l{constructor(t,n,a){this.layoutService=t,this.router=n,this.http=a,this.valCheck=["remember"]}ngOnInit(){localStorage.clear()}onSubmit(){const t={NomUtilisateur:this.NomUtilisateur,MotDePasse:this.MotDePasse},n=new C.WM({Tenant:"root"});this.http.post("https://192.168.1.200:1225/api/login",t,{headers:n}).subscribe(a=>{localStorage.setItem("token",a.token);const r=(0,k.Z)(a.token);localStorage.setItem("codeLivreur",r.CodeLivreur),this.router.navigate(["/"])},a=>{console.error("An error occurred:",a),localStorage.removeItem("login")})}}return(i=l).\u0275fac=function(t){return new(t||i)(e.Y36(f.P),e.Y36(p.F0),e.Y36(C.eN))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-login"]],decls:20,vars:5,consts:[[1,"surface-ground","flex","align-items-center","justify-content-center","min-h-screen","min-w-screen","overflow-hidden"],[1,"flex","flex-column","align-items-center","justify-content-center"],["alt","Sakai logo",1,"mb-5","w-6rem","flex-shrink-0",3,"src"],[2,"border-radius","56px","padding","0.3rem","background","linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)"],[1,"w-full","surface-card","py-8","px-5","sm:px-8",2,"border-radius","53px"],["for","NomUtilisateur",1,"block","text-900","text-xl","font-medium","mb-2"],["id","NomUtilisateur","type","text","placeholder","Nom d'Utilisateur","pInputText","",1,"w-full","md:w-30rem","mb-5",2,"padding","1rem",3,"ngModel","ngModelChange","keydown.enter"],["for","MotDePasse",1,"block","text-900","font-medium","text-xl","mb-2"],["id","MotDePasse","placeholder","Mot De Passe","styleClass","mb-5","inputStyleClass","w-full p-3 md:w-30rem",3,"ngModel","toggleMask","ngModelChange","keydown.enter"],[1,"flex","align-items-center","justify-content-between","mb-5","gap-5"],[1,"flex","align-items-center"],["id","rememberme1","styleClass","mr-2",3,"binary"],["for","rememberme1"],[1,"font-medium","no-underline","ml-2","text-right","cursor-pointer",2,"color","var(--primary-color)"],["pButton","","pRipple","","label","Sign In",1,"w-full","p-3","text-xl",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"img",2),e.TgZ(3,"div",3)(4,"div",4)(5,"div")(6,"label",5),e._uU(7,"Nom d'Utilisateur"),e.qZA(),e.TgZ(8,"input",6),e.NdJ("ngModelChange",function(r){return n.NomUtilisateur=r})("keydown.enter",function(){return n.onSubmit()}),e.qZA(),e.TgZ(9,"label",7),e._uU(10,"Mot De Passe"),e.qZA(),e.TgZ(11,"p-password",8),e.NdJ("ngModelChange",function(r){return n.MotDePasse=r})("keydown.enter",function(){return n.onSubmit()}),e.qZA(),e.TgZ(12,"div",9)(13,"div",10),e._UZ(14,"p-checkbox",11),e.TgZ(15,"label",12),e._uU(16,"Remember me"),e.qZA()(),e.TgZ(17,"a",13),e._uU(18,"Forgot password?"),e.qZA()(),e.TgZ(19,"button",14),e.NdJ("click",function(){return n.onSubmit()}),e.qZA()()()()()()),2&t&&(e.xp6(2),e.MGl("src","assets/layout/images/","light"===n.layoutService.config.colorScheme?"logo-dark":"logo-white",".svg",e.LSH),e.xp6(6),e.Q6J("ngModel",n.NomUtilisateur),e.xp6(3),e.Q6J("ngModel",n.MotDePasse)("toggleMask",!0),e.xp6(3),e.Q6J("binary",!0))},dependencies:[_.Hq,Z,T.o,h.Fj,h.JJ,h.On,P],styles:["[_nghost-%COMP%]     .pi-eye, [_nghost-%COMP%]     .pi-eye-slash{transform:scale(1.6);margin-right:1rem;color:var(--primary-color)!important}"]}),l})(),Te=(()=>{var i;class l{}return(i=l).\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[p.Bz.forChild([{path:"",component:Ce}]),p.Bz]}),l})(),ke=(()=>{var i;class l{}return(i=l).\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[d.ez,Te,_.hJ,V,T.j,h.u5,ye,h.UX]}),l})()},2591:(E,y,c)=>{c.d(y,{n:()=>k});var d=c(1180),p=c(4769),C=c(4713);let k=(()=>{var e;class f extends C.s{}return e=f,(0,d.Z)(f,"\u0275fac",function(){let _;return function(h){return(_||(_=p.n5z(e)))(h||e)}}()),(0,d.Z)(f,"\u0275cmp",p.Xpm({type:e,selectors:[["CheckIcon"]],standalone:!0,features:[p.qOj,p.jDz],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(s,h){1&s&&(p.O4$(),p.TgZ(0,"svg",0),p._UZ(1,"path",1),p.qZA()),2&s&&(p.Tol(h.getClassNames()),p.uIk("aria-label",h.ariaLabel)("aria-hidden",h.ariaHidden)("role",h.role))},encapsulation:2})),f})()}}]);