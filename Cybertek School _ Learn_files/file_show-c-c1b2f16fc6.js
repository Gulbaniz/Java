(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[300],{"7LJr":function(e,t,n){"use strict"
var i=n("ouhR")
var a=n.n(i)
a.a.fn.loadingImg=function(e){if(!this||0===this.length)return this
var t=this.filter(":first")
var n
if("hide"===e||"remove"===e){t.children(".loading_image").remove()
n=t.data("loading_images")||[]
n.forEach(function(e){e&&e.remove()})
t.data("loading_images",null)
return this}if("remove_once"===e){t.children(".loading_image").remove()
n=t.data("loading_images")||[]
var i=n.pop()
i&&i.remove()
t.data("loading_images",n)
return this}"register_image"==e&&3==arguments.length&&(a.a.fn.loadingImg.image_files[arguments[1]]=arguments[2])
e=a.a.extend({},a.a.fn.loadingImg.defaults,e)
var o=a.a.fn.loadingImg.image_files["normal"]
e.image_size&&a.a.fn.loadingImg.image_files[e.image_size]&&(o=a.a.fn.loadingImg.image_files[e.image_size])
e.paddingTop&&(e.vertical=e.paddingTop)
var s=0
if(e.vertical)if("top"==e.vertical);else if("bottom"==e.vertical)s=t.outerHeight()
else if("middle"==e.vertical)s=t.outerHeight()/2-o.height/2
else{s=parseInt(e.vertical,10)
isNaN(s)&&(s=0)}var r=0
if(e.horizontal)if("left"==e.horizontal);else if("right"==e.horizontal)r=t.outerWidth()-o.width
else if("middle"==e.horizontal)r=t.outerWidth()/2-o.width/2
else{r=parseInt(e.horizontal,10)
isNaN(r)&&(r=0)}var l=t.zIndex()+1
var c=a()(document.createElement("div")).addClass("loading_image_holder")
var d=a()(document.createElement("img")).attr("src",o.url)
c.append(d)
n=t.data("loading_images")||[]
n.push(c)
t.data("loading_images",n)
if(t.css("position")&&"static"!=t.css("position")){c.css({zIndex:l,position:"absolute",top:s,left:r})
t.append(c)}else{var u=t.offset()
var h=u.top,f=u.left
e.vertical&&(h+=s)
e.horizontal&&(f+=r)
c.css({zIndex:l,position:"absolute",top:h,left:f})
a()("body").append(c)}return a()(this)}
a.a.fn.loadingImg.defaults={paddingTop:0,image_size:"normal",vertical:0,horizontal:0}
a.a.fn.loadingImg.image_files={normal:{url:"/images/ajax-loader.gif",width:32,height:32},small:{url:"/images/ajax-loader-small.gif",width:16,height:16}}
a.a.fn.loadingImage=a.a.fn.loadingImg},B1vq:function(e,t,n){"use strict"
var i=n("ouhR")
var a=n.n(i)
n("s/PJ")
n("c6Pp")
a.a.fn.scrollToVisible=function(e){var t={}
var n=a()(e)
if(0===n.length)return
var i=n.offset(),o=n.outerWidth(),s=n.outerHeight(),r=i.top,l=r+s,c=i.left,d=c+o,u="html,body"==this.selector?a.a.windowScrollTop():this.scrollTop(),h=this.scrollLeft(),f=this.outerHeight(),m=this.outerWidth()
if("html,body"!=this.selector){var p=a()("body").offset()
this.each(function(){try{p=a()(this).offset()
return false}catch(e){}})
r-=p.top
l-=p.top
c-=p.left
d-=p.left}if("HTML"==this[0].tagName||"BODY"==this[0].tagName){f=a()(window).height()
a()("#wizard_box:visible").length>0&&(f-=a()("#wizard_box:visible").height())
m=a()(window).width()
r-=u
c-=h
l-=u
d-=h}r<0||f<s&&l>f?t.scrollTop=r+u:l>f&&(t.scrollTop=l+u-f+20)
c<0?t.scrollLeft=c+h:d>m&&(t.scrollLeft=d+h-m+20)
1==t.scrollTop&&(t.scrollTop=0)
1==t.scrollLeft&&(t.scrollLeft=0)
this.scrollTop(t.scrollTop)
this.scrollLeft(t.scrollLeft)
return this}},EII2:function(e,t,n){"use strict"
n.r(t)
var i=n("ouhR")
var a=n.n(i)
n("fy7k")
n("p6Wi")
var o={height:"100%",scribdParams:{auto_size:true}}
var s=a()("#doc_preview")
s.fillWindowWithMe()
s.loadDocPreview(a.a.merge(o,s.data()))},"Vj0+":function(e,t,n){"use strict"
n.d(t,"a",function(){return i})
function i(e){var t=/javascript:/
if(e.match(t))return"about:blank"
return e}},fy7k:function(e,t,n){"use strict"
var i=n("u7Gu")
var a=n("pQTu")
var o=n("m0r6")
Object(o["a"])(JSON.parse('{"en-AU":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"This document cannot be displayed within Canvas.","document_preview_processing":"The document preview is currently being processed. Please try again later."}}},"en-AU-x-unimelb":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"This document cannot be displayed within Canvas.","document_preview_processing":"The document preview is currently being processed. Please try again later."}}},"en-CA":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"This document cannot be displayed within Canvas.","document_preview_processing":"The document preview is currently being processed. Please try again later."}}},"en-GB":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"This document cannot be displayed within Canvas.","document_preview_processing":"The document preview is currently being processed. Please try again later."}}},"en-GB-x-ukhe":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"This document cannot be displayed within Canvas.","document_preview_processing":"The document preview is currently being processed. Please try again later."}}},"is":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Ekki hægt að sýna þetta skjal í Canvas.","document_preview_processing":"Forskoðun skjala er í vinnslu. Vinsamlegast reyndu aftur seinna."}}},"mi":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"E kore e taea te whakaatu i tēnei tuhinga i roto i Canvas.","document_preview_processing":"Kei te tukatuka i tēnei wā te arokite tuhinga. Tēnā koa ngana anō i muri mai."}}},"ru":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Этот документ нельзя отобразить внутри Canvas.","document_preview_processing":"Предварительный просмотр документа в данный момент обрабатывается. Попробуйте еще раз позже."}}}}'))
n("jQeR")
n("0sPK")
var s=a["default"].scoped("jquery_doc_previews")
var r=n("ouhR")
var l=n.n(r)
n("GLiE")
var c=n("5Ky4")
n("jYyc")
n("hiU6")
n("JI1W")
n("7LJr")
var d=n("Vj0+")
var u={"application/vnd.openxmlformats-officedocument.wordprocessingml.template":[1,1],"application/vnd.oasis.opendocument.spreadsheet":[1,1],"application/vnd.sun.xml.writer":[1,1],"application/excel":[1,1],"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":[1,1],"text/rtf":[1,1],"application/vnd.openxmlformats-officedocument.spreadsheetml.template":[1,1],"application/vnd.sun.xml.impress":[1,1],"application/vnd.sun.xml.calc":[1,1],"application/vnd.ms-excel":[1,1],"application/msword":[1,1],"application/mspowerpoint":[1,1],"application/rtf":[1,1],"application/vnd.oasis.opendocument.presentation":[1,1],"application/vnd.oasis.opendocument.text":[1,1],"application/vnd.openxmlformats-officedocument.presentationml.template":[1,1],"application/vnd.openxmlformats-officedocument.presentationml.slideshow":[1,1],"text/plain":[1,1],"application/vnd.openxmlformats-officedocument.presentationml.presentation":[1,1],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":[1,1],"application/postscript":[1,1],"application/pdf":[1,1],"application/vnd.ms-powerpoint":[1,1]}
l.a.filePreviewsEnabled=function(){return!(i["a"].disableCrocodocPreviews&&i["a"].disableGooglePreviews)}
l.a.isPreviewable=function(e,t){return l.a.filePreviewsEnabled()&&u[e]&&(!t||!i["a"]["disable"+l.a.capitalize(t)+"Previews"]&&u[e][{scribd:0,google:1}[t]])}
l.a.fn.loadDocPreview=function(e){return this.each(function(){var t=l()(this),n=l.a.extend({width:"100%",height:"400px"},t.data(),e)
function a(e){if(n.attachment_view_inline_ping_url){l.a.ajaxJSON(n.attachment_view_inline_ping_url,"POST",{},function(){},function(){})
l.a.trackEvent("Doc Previews",e,JSON.stringify(n,["attachment_id","submission_id","mimetype","crocodoc_session_url","canvadoc_session_url"]))}}if(!i["a"].disableCrocodocPreviews&&n.crocodoc_session_url){var o=Object(d["a"])(n.crocodoc_session_url)
var r=l()("<iframe/>",{src:o,width:n.width,height:n.height,allowfullscreen:"1",id:n.id})
r.appendTo(t)
r.load(function(){a("crocodoc")
l.a.isFunction(n.ready)&&n.ready()})}else if(n.canvadoc_session_url){var u=l()('<div style="overflow: auto; resize: vertical;        border: 1px solid transparent; height: 100%;"/>')
u.appendTo(t)
var h=void 0!==n.iframe_min_height?n.iframe_min_height:"800px"
var f=Object(d["a"])(n.canvadoc_session_url)
r=l()("<iframe/>",{src:f,width:n.width,allowfullscreen:"1",css:{border:0,overflow:"auto",height:"99%","min-height":h},id:n.id})
r.appendTo(u)
r.load(function(){a("canvadocs")
l.a.isFunction(n.ready)&&n.ready()})}else if(!i["a"].disableGooglePreviews&&(!n.mimetype||l.a.isPreviewable(n.mimetype,"google"))&&n.attachment_id||n.public_url){var m=function(){var e="//docs.google.com/viewer?"+l.a.param({embedded:true,url:n.public_url})
n.ajax_valid&&!n.ajax_valid()||l()('<iframe src="'+Object(c["a"])(e)+'" height="'+n.height+'" width="100%" />').appendTo(t).load(function(){a("google")
l.a.isFunction(n.ready)&&n.ready()})}
if(n.public_url)m()
else if(n.attachment_id){var p="/api/v1/files/"+n.attachment_id+"/public_url.json"
n.submission_id&&(p+="?"+l.a.param({submission_id:n.submission_id}))
t.loadingImage()
l.a.ajaxJSON(p,"GET",{},function(e){t.loadingImage("remove")
if(e&&e.public_url){l.a.extend(n,e)
m()}})}}else l.a.filePreviewsEnabled()&&(n.attachment_preview_processing?t.html("<p>"+Object(c["a"])(s.t("errors.document_preview_processing","The document preview is currently being processed. Please try again later."))+"</p>"):t.html("<p>"+Object(c["a"])(s.t("errors.cannot_view_document_in_canvas","This document cannot be displayed within Canvas."))+"</p>"))})}},p6Wi:function(e,t,n){"use strict"
var i=n("pQTu")
var a=n("m0r6")
Object(a["a"])(JSON.parse('{"ar":{"buttons":{"cancel":"إلغاء","delete":"حذف"}},"cy":{"buttons":{"cancel":"Canslo","delete":"Dileu"}},"da":{"buttons":{"cancel":"Annuller","delete":"Slet"}},"da-x-k12":{"buttons":{"cancel":"Annuller","delete":"Slet"}},"de":{"buttons":{"cancel":"Abbrechen","delete":"Löschen"}},"el":{"buttons":{"cancel":"Ακύρωση","delete":"Διαγραφή"}},"en-AU":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-AU-x-unimelb":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-CA":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB-x-lbs":{"buttons":{"cancel":"Cancel","delete":"Delete"}},"en-GB-x-ukhe":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"es":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"}},"fa":{"buttons":{"cancel":"لغو","delete":"حذف"}},"fi":{"buttons":{"cancel":"Peruuta","delete":"Poista"}},"fr":{"buttons":{"cancel":"Annuler","delete":"Supprimer"}},"fr-CA":{"buttons":{"cancel":"Annuler","delete":"Supprimer"}},"he":{"buttons":{"cancel":"ביטול","delete":"ביטול"}},"ht":{"buttons":{"cancel":"Anile","delete":"Efase"}},"hu":{"buttons":{"cancel":"Mégse","delete":"Törlés"}},"hy":{"buttons":{"cancel":"Չեղյալ համարել","delete":"Ջնջել"}},"is":{"buttons":{"cancel":"Hætta við","delete":"Eyða"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Viltu örugglega eyða þessu?"}}},"it":{"buttons":{"cancel":"Annulla","delete":"Elimina"}},"ja":{"buttons":{"cancel":"キャンセル","delete":"削除"}},"ko":{"buttons":{"cancel":"취소","delete":"삭제"}},"mi":{"buttons":{"cancel":"Whakakore","delete":"Muku"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"E tino hiahia ana koe ki te muku i tēnei?"}}},"nb":{"buttons":{"cancel":"Avbryt","delete":"Slett"}},"nb-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Slett"}},"nl":{"buttons":{"cancel":"Annuleren","delete":"Verwijderen"}},"nn":{"buttons":{"cancel":"Avbryt","delete":"Slett"}},"pl":{"buttons":{"cancel":"Anuluj","delete":"Usuń"}},"pt":{"buttons":{"cancel":"Cancelar","delete":"Excluir"}},"pt-BR":{"buttons":{"cancel":"Cancelar","delete":"Excluir"}},"ru":{"buttons":{"cancel":"Отменить","delete":"Удалить"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Действительно хотите удалить?"}}},"sl":{"buttons":{"cancel":"Prekliči","delete":"Odstrani"}},"sv":{"buttons":{"cancel":"Avbryt","delete":"Radera"}},"sv-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Radera"}},"tr":{"buttons":{"cancel":"İptal","delete":"Sil"}},"uk":{"buttons":{"cancel":"Скасувати","delete":"Видалити"}},"zh-Hans":{"buttons":{"cancel":"取消","delete":"删除"}},"zh-Hant":{"buttons":{"cancel":"取消","delete":"刪除"}}}'))
n("jQeR")
n("0sPK")
var o=i["default"].scoped("instructure_misc_plugins")
var s=n("ouhR")
var r=n.n(s)
var l=n("5Ky4")
var c=n("JD5e")
n("jYyc")
n("YGE8")
n("B1vq")
n("s/PJ")
r.a.fn.setOptions=function(e,t){var n=e?"<option value=''>"+Object(l["a"])(e)+"</option>":""
null==t&&(t=[])
t.forEach(function(e){var t=Object(l["a"])(e)
n+='<option value="'+t+'">'+t+"</option>"})
return this.html(r.a.raw(n))}
r.a.fn.ifExists=function(e){this.length&&e.call(this,this)
return this}
r.a.fn.scrollbarWidth=function(){var e=r()('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>').appendTo(this),t=e.find("div")
var n=t.innerWidth()
e.css("overflow-y","scroll")
var i=t.innerWidth()
e.remove()
return n-i}
r.a.fn.dim=function(e){return this.animate({opacity:.4},e)}
r.a.fn.undim=function(e){return this.animate({opacity:1},e)}
r.a.fn.confirmDelete=function(e){e=r.a.extend({},r.a.fn.confirmDelete.defaults,e)
var t=this
var n=null
var i=true
e.noMessage=e.noMessage||e.no_message
var a=function(){if(!i){e.cancelled&&r.a.isFunction(e.cancelled)&&e.cancelled.call(t)
return}e.confirmed||(e.confirmed=function(){t.dim()})
e.confirmed.call(t)
if(e.url){e.success||(e.success=function(e){t.fadeOut("slow",function(){t.remove()})})
var a=e.prepareData?e.prepareData.call(t,n):{}
a.authenticity_token=Object(c["a"])()
r.a.ajaxJSON(e.url,"DELETE",a,function(n){e.success.call(t,n)},function(n,i,a,o){e.error&&r.a.isFunction(e.error)?e.error.call(t,n,i,a,o):r.a.ajaxJSON.unhandledXHRs.push(i)})}else{e.success||(e.success=function(){t.fadeOut("slow",function(){t.remove()})})
e.success.call(t)}}
if(e.message&&!e.noMessage&&!r.a.skipConfirmations){if(e.dialog){i=false
var s="object"==typeof e.dialog?e.dialog:{}
n=r()(e.message).dialog(r.a.extend({},{modal:true,close:a,buttons:[{text:o.t("#buttons.cancel","Cancel"),click:function(){r()(this).dialog("close")}},{text:o.t("#buttons.delete","Delete"),class:"btn-primary",click:function(){i=true
r()(this).dialog("close")}}]},s))
return}i=confirm(e.message)}a()}
r.a.fn.confirmDelete.defaults={message:o.t("confirms.default_delete_thing","Are you sure you want to delete this?")}
r.a.fn.fragmentChange=function(e){if(e&&true!==e){var t=(window.location.search||"").replace(/^\?/,"").split("&")
var n=null
for(var i=0;i<t.length;i++){var a=t[i]
a&&0===a.indexOf("hash=")&&(n="#"+a.substring(5))}this.bind("document_fragment_change",e)
var o=this
var s=false
for(i=0;i<r.a._checkFragments.fragmentList.length;i++){var l=r.a._checkFragments.fragmentList[i]
l.doc[0]==o[0]&&(s=true)}s||r.a._checkFragments.fragmentList.push({doc:o,fragment:""})
r()(window).bind("hashchange",r.a._checkFragments)
setTimeout(function(){n&&n.length>0?o.triggerHandler("document_fragment_change",n):o&&o[0]&&o[0].location&&o[0].location.hash.length>0&&o.triggerHandler("document_fragment_change",o[0].location.hash)},500)}else this.triggerHandler("document_fragment_change",this[0].location.hash)
return this}
r.a._checkFragments=function(){var e=r.a._checkFragments.fragmentList
for(var t=0;t<e.length;t++){var n=e[t]
var i=n.doc
if(i[0].location.hash!=n.fragment){i.triggerHandler("document_fragment_change",i[0].location.hash)
n.fragment=i[0].location.hash
r.a._checkFragments.fragmentList[t]=n}}}
r.a._checkFragments.fragmentList=[]
r.a.fn.clickLink=function(){var e=this.eq(0)
e.hasClass("disabled_link")||e.click()}
r.a.fn.showIf=function(e){if(r.a.isFunction(e))return this.each(function(t){r()(this).showIf(e.call(this))})
e?this.show():this.hide()
return this}
r.a.fn.disableIf=function(e){r.a.isFunction(e)&&(e=e.call(this))
this.prop("disabled",!!e)
return this}
r.a.fn.indicate=function(e){e=e||{}
var t
if("remove"==e){t=this.data("indicator")
t&&t.remove()
return}r()(".indicator_box").remove()
var n=this.offset()
e&&e.offset&&(n=e.offset)
var i=this.width()
var a=this.height()
var o=(e.container||this).zIndex()
t=r()(document.createElement("div"))
t.css({width:i+6,height:a+6,top:n.top-3,left:n.left-3,zIndex:o+1,position:"absolute",display:"block","-moz-border-radius":5,opacity:.8,border:"2px solid #870",backgroundColor:"#fd0"})
t.addClass("indicator_box")
t.mouseover(function(){r()(this).stop().fadeOut("fast",function(){r()(this).remove()})})
this.data("indicator")&&this.indicate("remove")
this.data("indicator",t)
r()("body").append(t)
e&&e.singleFlash?t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow",function(){r()(this).remove()}):t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow").fadeIn("slow").animate({opacity:.8},2500).fadeOut("slow",function(){r()(this).remove()})
e&&e.scroll&&r()("html,body").scrollToVisible(t)}
r.a.fn.hasScrollbar=function(){return this.length&&this[0].clientHeight<this[0].scrollHeight}
r.a.fn.log=function(e){console.log("%s: %o",e,this)
return this}
r.a.fn.fillWindowWithMe=function(e){var t=r.a.extend({minHeight:400},e),n=r()(this),i=r()("#wrapper"),a=r()("#main"),o=r()("#not_right_side"),s=r()(window),l=r()(this).add(t.alsoResize)
function c(){l.height(0)
var e=s.height()-(i.offset().top+i.outerHeight())+(a.height()-o.height()),c=Math.max(400,e)
l.height(c)
r.a.isFunction(t.onResize)&&t.onResize.call(n,c)}c()
s.unbind("resize.fillWindowWithMe").bind("resize.fillWindowWithMe",c)
return this}
r.a.fn.autoGrowInput=function(e){e=r.a.extend({maxWidth:1e3,minWidth:0,comfortZone:70},e)
this.filter("input:text").each(function(){var t=e.minWidth||r()(this).width(),n="",i=r()(this),a=r()("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:i.css("fontSize"),fontFamily:i.css("fontFamily"),fontWeight:i.css("fontWeight"),letterSpacing:i.css("letterSpacing"),whiteSpace:"nowrap"}),o=function(){setTimeout(function(){if(n===(n=i.val()))return
a.text(n)
var o=a.width(),s=o+e.comfortZone>=t?o+e.comfortZone:t,r=i.width(),l=s<r&&s>=t||s>t&&s<e.maxWidth
l&&i.width(s)})}
a.insertAfter(i)
r()(this).bind("keyup keydown blur update change",o)})
return this}
r.a}}])

//# sourceMappingURL=file_show-c-c1b2f16fc6.js.map