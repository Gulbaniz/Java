(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[109],{"7LJr":function(e,t,a){"use strict"
var n=a("ouhR")
var i=a.n(n)
i.a.fn.loadingImg=function(e){if(!this||0===this.length)return this
var t=this.filter(":first")
var a
if("hide"===e||"remove"===e){t.children(".loading_image").remove()
a=t.data("loading_images")||[]
a.forEach(function(e){e&&e.remove()})
t.data("loading_images",null)
return this}if("remove_once"===e){t.children(".loading_image").remove()
a=t.data("loading_images")||[]
var n=a.pop()
n&&n.remove()
t.data("loading_images",a)
return this}"register_image"==e&&3==arguments.length&&(i.a.fn.loadingImg.image_files[arguments[1]]=arguments[2])
e=i.a.extend({},i.a.fn.loadingImg.defaults,e)
var o=i.a.fn.loadingImg.image_files["normal"]
e.image_size&&i.a.fn.loadingImg.image_files[e.image_size]&&(o=i.a.fn.loadingImg.image_files[e.image_size])
e.paddingTop&&(e.vertical=e.paddingTop)
var r=0
if(e.vertical)if("top"==e.vertical);else if("bottom"==e.vertical)r=t.outerHeight()
else if("middle"==e.vertical)r=t.outerHeight()/2-o.height/2
else{r=parseInt(e.vertical,10)
isNaN(r)&&(r=0)}var s=0
if(e.horizontal)if("left"==e.horizontal);else if("right"==e.horizontal)s=t.outerWidth()-o.width
else if("middle"==e.horizontal)s=t.outerWidth()/2-o.width/2
else{s=parseInt(e.horizontal,10)
isNaN(s)&&(s=0)}var u=t.zIndex()+1
var m=i()(document.createElement("div")).addClass("loading_image_holder")
var l=i()(document.createElement("img")).attr("src",o.url)
m.append(l)
a=t.data("loading_images")||[]
a.push(m)
t.data("loading_images",a)
if(t.css("position")&&"static"!=t.css("position")){m.css({zIndex:u,position:"absolute",top:r,left:s})
t.append(m)}else{var c=t.offset()
var d=c.top,_=c.left
e.vertical&&(d+=r)
e.horizontal&&(_+=s)
m.css({zIndex:u,position:"absolute",top:d,left:_})
i()("body").append(m)}return i()(this)}
i.a.fn.loadingImg.defaults={paddingTop:0,image_size:"normal",vertical:0,horizontal:0}
i.a.fn.loadingImg.image_files={normal:{url:"/images/ajax-loader.gif",width:32,height:32},small:{url:"/images/ajax-loader-small.gif",width:16,height:16}}
i.a.fn.loadingImage=i.a.fn.loadingImg},"7WS/":function(e,t,a){"use strict"
var n=a("pQTu")
var i=a("m0r6")
Object(i["a"])(JSON.parse('{"ar":{"play_media_comment_35257210":"تشغيل تعليق الوسائط.","play_media_comment_by_name_from_createdat_515b3b":"تشغيل تعليق الوسائط بواسطة %{name} من %{createdAt}."},"cy":{"play_media_comment_35257210":"Chwarae sylw ar gyfryngau.","play_media_comment_by_name_from_createdat_515b3b":"Chwarae sylw ar gyfryngau gan %{name} o %{createdAt}."},"da":{"play_media_comment_35257210":"Afspil medie kommentar.","play_media_comment_by_name_from_createdat_515b3b":"Afspil mediekommentar af %{name} fra %{createdAt}."},"de":{"play_media_comment_35257210":"Medienkommentar wiedergeben","play_media_comment_by_name_from_createdat_515b3b":"Medienkommentar durch %{name} von %{createdAt} wiedergeben."},"en-AU":{"play_media_comment_35257210":"Play media comment.","play_media_comment_by_name_from_createdat_515b3b":"Play media comment by %{name} from %{createdAt}."},"en-AU-x-unimelb":{"play_media_comment_35257210":"Play media comment.","play_media_comment_by_name_from_createdat_515b3b":"Play media comment by %{name} from %{createdAt}."},"en-CA":{"play_media_comment_35257210":"Play media comment.","play_media_comment_by_name_from_createdat_515b3b":"Play media comment by %{name} from %{createdAt}."},"en-GB":{"play_media_comment_35257210":"Play media comment.","play_media_comment_by_name_from_createdat_515b3b":"Play media comment by %{name} from %{createdAt}."},"en-GB-x-lbs":{"play_media_comment_35257210":"Play media comment.","play_media_comment_by_name_from_createdat_515b3b":"Play media comment by %{name} from %{createdAt}."},"en-GB-x-ukhe":{"play_media_comment_35257210":"Play media comment.","play_media_comment_by_name_from_createdat_515b3b":"Play media comment by %{name} from %{createdAt}."},"es":{"play_media_comment_35257210":"Reproducir comentario multimedia.","play_media_comment_by_name_from_createdat_515b3b":"Reproducir comentario multimedia de %{name} desde %{createdAt}."},"fi":{"play_media_comment_35257210":"Toista mediakommentti.","play_media_comment_by_name_from_createdat_515b3b":"Toista mediakommenttia %{name} kohteesta %{createdAt}."},"fr":{"play_media_comment_35257210":"Lancer le commentaire sur média.","play_media_comment_by_name_from_createdat_515b3b":"Lancer le commentaire sur média par %{name} à partir de %{createdAt}."},"fr-CA":{"play_media_comment_35257210":"Lire le commentaire du support","play_media_comment_by_name_from_createdat_515b3b":"Lire le commentaire du support par %{name} du %{createdAt}."},"ht":{"play_media_comment_35257210":"Jwe kòmantè medya.","play_media_comment_by_name_from_createdat_515b3b":"Jwe kòmantè medya pa %{name} de %{createdAt}."},"is":{"play_media_comment_35257210":"Spila miðilsathugasemd.","play_media_comment_by_name_from_createdat_515b3b":"Spila miðilsathugasemd eftir %{name} frá %{createdAt}."},"it":{"play_media_comment_35257210":"Commento sulla riproduzione del contenuto multimediale.","play_media_comment_by_name_from_createdat_515b3b":"Commento sulla riproduzione del contenuto multimediale da parte di %{name} da %{createdAt}."},"ja":{"play_media_comment_35257210":"メディア コメントの再生。","play_media_comment_by_name_from_createdat_515b3b":"%{name}まで%{createdAt}からのメディアのコメントを再生します。"},"mi":{"play_media_comment_35257210":"Mahia ngā korero pāpāho","play_media_comment_by_name_from_createdat_515b3b":"Mahia ngā korero pāpāho ma %{name} mai te %{createdAt}."},"nb":{"play_media_comment_35257210":"Spill mediainnhold","play_media_comment_by_name_from_createdat_515b3b":"Spill mediainnhold av %{name} fra %{createdAt}."},"nb-x-k12":{"play_media_comment_35257210":"Spill mediainnhold","play_media_comment_by_name_from_createdat_515b3b":"Spill mediainnhold av %{name} fra %{createdAt}."},"nl":{"play_media_comment_35257210":"Media-opmerking afspelen","play_media_comment_by_name_from_createdat_515b3b":"Speel media-opmerking door %{name} van %{createdAt} af."},"pl":{"play_media_comment_35257210":"Odtwórz komentarz multimedialny.","play_media_comment_by_name_from_createdat_515b3b":"Odtwórz komentarz multimedialny %{name} z %{createdAt}."},"pt":{"play_media_comment_35257210":"Reproduzir comentário de mídia.","play_media_comment_by_name_from_createdat_515b3b":"Reproduzir comentários de mídia %{name} de %{createdAt}."},"pt-BR":{"play_media_comment_35257210":"Reproduzir comentário em mídia.","play_media_comment_by_name_from_createdat_515b3b":"Reproduzir comentário em mídia por %{name} de %{createdAt}."},"ru":{"play_media_comment_35257210":"Воспроизведение мультимедийного комментария.","play_media_comment_by_name_from_createdat_515b3b":"Воспроизвести мультимедийный комментарии %{name} из %{createdAt}."},"sl":{"play_media_comment_35257210":"Predvajaj komentar v obliki medija.","play_media_comment_by_name_from_createdat_515b3b":"Predvajaj komentar v obliki medija %{name}, ki je bil ustvarjen ob/dne %{createdAt}."},"sv":{"play_media_comment_35257210":"Spela upp medieinnehåll.","play_media_comment_by_name_from_createdat_515b3b":"Spela upp mediekommentar av %{name} från %{createdAt}."},"zh-Hans":{"play_media_comment_35257210":"播放媒体评论。","play_media_comment_by_name_from_createdat_515b3b":"播放%{name}的来自%{createdAt}的媒体评论。"},"zh-Hant":{"play_media_comment_35257210":"播放媒體評論。","play_media_comment_by_name_from_createdat_515b3b":"播放%{name}於%{createdAt}創建的媒體評論。"}}'))
a("jQeR")
a("0sPK")
var o=n["default"].scoped("mediaCommentThumbnail")
var r=a("GLiE")
var s=a.n(r)
var u=a("5Ky4")
var m=a("ouhR")
var l=a.n(m)
var c=a("hX7l")
var d={normal:{width:140,height:100},small:{width:70,height:50}}
function _(e,t,a){if(!INST.kalturaSettings)return console.log("Kaltura has not been enabled for this account")
var n,i
var r=l()(e)
try{var s=document.createElement("a")
s.href=r.attr("href")
i=s}catch(e){}if(i&&Object(c["a"])(i.search).no_preview)return
var m=d[t]||d.normal
var _=r.data("media_comment_id")||l.a.trim(r.find(".media_comment_id:first").text())||(n=r.attr("id"))&&n.match(/^media_comment_/)&&n.substring(14)||l.a.trim(r.parent().find(".media_comment_id:first").text())
var h=r.data("author")
var g=r.data("created_at")
var f
f=h&&g?o.t("Play media comment by %{name} from %{createdAt}.",{name:h,createdAt:g}):o.t("Play media comment.")
if(_){var p="https://".concat(INST.kalturaSettings.resource_domain)
var v="".concat(p,"/p/").concat(INST.kalturaSettings.partner_id,"/thumbnail/entry_id/").concat(_,"/width/")+"".concat(m.width,"/height/").concat(m.height,"/bgcolor/000000/type/2/vid_sec/5")
var b=l()("<span\n        style='background-image: url(".concat(Object(u["a"])(v),");'\n        class='media_comment_thumbnail media_comment_thumbnail-").concat(Object(u["a"])(t),"'\n      >\n        <span class='media_comment_thumbnail_play_button'>\n          <span class='screenreader-only'>\n            ").concat(Object(u["a"])(f),"\n          </span>\n        </span>\n      </span>"))
var w=r.closest("p")
w.attr("title")||w.attr("title",Object(u["a"])(f))
var y=r
if(a){y=r.clone().empty().removeClass("instructure_file_link")
var k=r.parent(".instructure_file_link_holder")
k.length?y.appendTo(k):r.after(y)}else r.empty()
y.data("download",y.attr("href")).prop("href","#").addClass("instructure_inline_media_comment").append(b).css({backgroundImage:"",padding:0})}}l.a.fn.mediaCommentThumbnail=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"normal"
var t=arguments.length>1?arguments[1]:void 0
return this.each(function(){s.a.defer(_,this,e,t)})}},OShF:function(e,t,a){"use strict"
var n=a("ouhR")
var i=a.n(n)
var o=a("5Ky4")
a("JI1W")
i.a.fn.fillTemplateData=function(e){if(this.length&&e){e.iterator&&this.find("*").andSelf().each(function(){var t=i()(this)
i.a.each(["name","id","class"],function(a,n){t.attr(n)&&t.attr(n,t.attr(n).replace(/-iterator-/,e.iterator))})})
e.id&&this.attr("id",e.id)
var t=false
if(e.data)for(var a in e.data){if(e.except&&-1!=i.a.inArray(a,e.except))continue
e.data[a]&&e.dataValues&&-1!=i.a.inArray(a,e.dataValues)&&this.data(a,e.data[a].toString())
var n=this.find("."+a)
var r=e.avoid||""
n.each(function(){var n=i()(this)
if(n.length>0&&0===n.closest(r).length){"undefined"!=typeof e.data[a]&&null!==e.data[a]||(e.data[a]="")
if(e.htmlValues&&-1!=i.a.inArray(a,e.htmlValues)){n.html(i.a.raw(e.data[a].toString()))
if(n.hasClass("user_content")){t=true
n.removeClass("enhanced")
n.data("unenhanced_content_html",e.data[a].toString())}}else if("INPUT"==n[0].tagName.toUpperCase())n.val(e.data[a])
else try{var s=e.data[a].toString()
n.html(Object(o["a"])(s))}catch(e){}}})}e.hrefValues&&e.data&&this.find("a,span[rel]").each(function(){var t,a,n,o=i()(this)
for(var r in e.hrefValues){if(!e.hrefValues.hasOwnProperty(r))continue
var s=e.hrefValues[r]
if(t=o.attr("href")){var u=i.a.replaceTags(t,s,encodeURIComponent(e.data[s]))
var m=o.text()===o.html()?o.text():null
if(t!==u){o.attr("href",u)
m&&o.text(m)}}(a=o.attr("rel"))&&o.attr("rel",i.a.replaceTags(a,s,e.data[s]));(n=o.attr("name"))&&o.attr("name",i.a.replaceTags(n,s,e.data[s]))}})
t&&i()(document).triggerHandler("user_content_change")}return this}
i.a.fn.fillTemplateData.defaults={htmlValues:null,hrefValues:null}
i.a.fn.getTemplateData=function(e){if(!this.length||!e)return{}
var t,a={}
if(e.textValues){var n=this
e.textValues.forEach(function(e){var t=n.find("."+e.replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
o=i.a.trim(t.text())
"&nbsp;"===t.html()&&(o="")
1===o.length&&160===o.charCodeAt(0)&&(o="")
a[e]=o})}if(e.dataValues)for(t in e.dataValues){var o=this.data(e.dataValues[t])
o&&(a[e.dataValues[t]]=o)}if(e.htmlValues)for(t in e.htmlValues){var r=this.find("."+e.htmlValues[t].replace(/\[/g,"\\[").replace(/\]/g,"\\]")+":first")
o=null
o=r.hasClass("user_content")&&r.data("unenhanced_content_html")?r.data("unenhanced_content_html"):i.a.trim(r.html())
a[e.htmlValues[t]]=o}return a}
i.a.fn.getTemplateValue=function(e,t){var a=i.a.extend({},t,{textValues:[e]})
return this.getTemplateData(a)[e]}},TBRb:function(e,t,a){"use strict"
var n=a("ouhR")
var i=a.n(n)
var o=a("GLiE")
var r=a.n(o)
var s=a("Nxtp")
a("YGE8")
i.a.fn.fixDialogButtons=function(){return this.each(function(){var e=i()(this)
var t=e.find(".button-container:last .btn, button[type=submit]")
if(t.length){e.find(".button-container:last, button[type=submit]").hide()
var a=i.a.map(t.toArray(),function(t){var a=i()(t)
var n=a.attr("class")||""
var o=a.attr("id")
if(a.is(".dialog_closer")){a.off(".fixdialogbuttons")
a.on("click.fixdialogbuttons",Object(s["a"])(function(){return e.dialog("close")}))}"submit"===a.prop("type")&&a[0].form&&(n+=" button_type_submit")
return{text:a.text(),"data-text-while-loading":a.data("textWhileLoading"),click:function(){return a.click()},class:n,id:o}})
a=r.a.sortBy(a,function(e){return e.class.match(/btn-primary/)?1:0})
e.dialog("option","buttons",a)}})}},VNfg:function(e,t,a){"use strict"
var n=a("rnoQ")
a("u7Gu")
var i=a("pQTu")
var o=a("m0r6")
Object(o["a"])(JSON.parse('{"ar":{"time":{"count_hours_ago":{"one":"منذ ساعة مضت","other":"منذ %{count} ساعة مضت"},"count_minutes_ago":{"one":"منذ دقيقة مضت","other":"منذ %{count} دقيقة مضت"},"less_than_a_minute_ago":"منذ أقل من دقيقة"}},"cy":{"time":{"count_hours_ago":{"one":"1 awr yn ôl","other":"%{count} awr yn ôl"},"count_minutes_ago":{"one":"1 munud yn ôl","other":"%{count} munud yn ôl"},"less_than_a_minute_ago":"llai na munud yn ôl"}},"da":{"time":{"count_hours_ago":{"one":"For 1 time siden","other":"%{count} timer siden"},"count_minutes_ago":{"one":"For 1 minut siden","other":"For %{count} minutter siden"},"less_than_a_minute_ago":"for mindre en et minut siden"}},"da-x-k12":{"time":{"count_hours_ago":{"one":"For 1 time siden","other":"%{count} timer siden"},"count_minutes_ago":{"one":"For 1 minut siden","other":"For %{count} minutter siden"},"less_than_a_minute_ago":"for mindre en et minut siden"}},"de":{"time":{"count_hours_ago":{"one":"vor 1 Stunde","other":"vor %{count} Stunden"},"count_minutes_ago":{"one":"vor 1 Minute","other":"vor %{count} Minuten"},"less_than_a_minute_ago":"vor weniger als einer Minute"}},"el":{"time":{"count_hours_ago":{"one":"1 ώρα πριν","other":"%{count} ώρες πριν"},"count_minutes_ago":{"one":"1 λεπτό πριν","other":"%{count} λεπτά πριν"},"less_than_a_minute_ago":"λιγότερο από ένα λεπτό πριν"}},"en-AU":{"instructure_js":{"alerts":{"file_previews_disabled":"File previews have been disabled for this Canvas site"},"buttons":{"next_module":"Next Module","previous_module":"Previous Module"},"draft":"Draft","errors":{"posting_message_failed":"Post Failed, Try Again"},"links":{"minimize_file_preview":"Minimize File Preview","minimize_youtube_video":"Minimize Video","view_equella_content_in_new_window":"view the content in a new window"},"status":{"posting_message":"Posting Message..."},"switched_roles_message":{"designer":"You have switched roles temporarily for this course, and are now viewing the course as a designer.  You can restore your role and permissions from the course home page.","observer":"You have switched roles temporarily for this course, and are now viewing the course as an observer.  You can restore your role and permissions from the course home page.","student":"You have switched roles temporarily for this course, and are now viewing the course as a student.  You can restore your role and permissions from the course home page.","ta":"You have switched roles temporarily for this course, and are now viewing the course as a TA.  You can restore your role and permissions from the course home page.","teacher":"You have switched roles temporarily for this course, and are now viewing the course as a teacher.  You can restore your role and permissions from the course home page."},"titles":{"equella_content_preview":"Equella Content Preview","external_link":"Links to an external site.","preview_document":"Preview the document"}},"time":{"count_hours_ago":{"one":"1 hour ago","other":"%{count} hours ago"},"count_minutes_ago":{"one":"1 minute ago","other":"%{count} minutes ago"},"less_than_a_minute_ago":"less than a minute ago"}},"en-AU-x-unimelb":{"instructure_js":{"alerts":{"file_previews_disabled":"File previews have been disabled for this Canvas site"},"buttons":{"next_module":"Next Module","previous_module":"Previous Module"},"draft":"Draft","errors":{"posting_message_failed":"Post Failed, Try Again"},"links":{"minimize_file_preview":"Minimize File Preview","minimize_youtube_video":"Minimize Video","view_equella_content_in_new_window":"view the content in a new window"},"status":{"posting_message":"Posting Message..."},"switched_roles_message":{"designer":"You have switched roles temporarily for this subject, and are now viewing the subject as a designer.  You can restore your role and permissions from the subject home page.","observer":"You have switched roles temporarily for this subject, and are now viewing the subject as an observer.  You can restore your role and permissions from the subject home page.","student":"You have switched roles temporarily for this subject, and are now viewing the subject as a student.  You can restore your role and permissions from the subject home page.","ta":"You have switched roles temporarily for this subject, and are now viewing the subject as a Tutor.  You can restore your role and permissions from the subject home page.","teacher":"You have switched roles temporarily for this subject, and are now viewing the subject as an instructor.  You can restore your role and permissions from the subject home page."},"titles":{"equella_content_preview":"Equella Content Preview","external_link":"Links to an external site.","preview_document":"Preview the document"}},"time":{"count_hours_ago":{"one":"1 hour ago","other":"%{count} hours ago"},"count_minutes_ago":{"one":"1 minute ago","other":"%{count} minutes ago"},"less_than_a_minute_ago":"less than a minute ago"}},"en-CA":{"instructure_js":{"alerts":{"file_previews_disabled":"File previews have been disabled for this Canvas site"},"buttons":{"next_module":"Next Module","previous_module":"Previous Module"},"draft":"Draft","errors":{"posting_message_failed":"Post Failed, Try Again"},"links":{"minimize_file_preview":"Minimize File Preview","minimize_youtube_video":"Minimize Video","view_equella_content_in_new_window":"view the content in a new window"},"status":{"posting_message":"Posting Message..."},"switched_roles_message":{"designer":"You have switched roles temporarily for this course, and are now viewing the course as a designer.  You can restore your role and permissions from the course home page.","observer":"You have switched roles temporarily for this course, and are now viewing the course as an observer.  You can restore your role and permissions from the course home page.","student":"You have switched roles temporarily for this course, and are now viewing the course as a student.  You can restore your role and permissions from the course home page.","ta":"You have switched roles temporarily for this course, and are now viewing the course as a TA.  You can restore your role and permissions from the course home page.","teacher":"You have switched roles temporarily for this course, and are now viewing the course as a teacher.  You can restore your role and permissions from the course home page."},"titles":{"equella_content_preview":"Equella Content Preview","external_link":"Links to an external site.","preview_document":"Preview the document"}},"time":{"count_hours_ago":{"one":"1 hour ago","other":"%{count} hours ago"},"count_minutes_ago":{"one":"1 minute ago","other":"%{count} minutes ago"},"less_than_a_minute_ago":"less than a minute ago"}},"en-GB":{"instructure_js":{"alerts":{"file_previews_disabled":"File previews have been disabled for this Canvas site"},"buttons":{"next_module":"Next module","previous_module":"Previous module"},"draft":"Draft","errors":{"posting_message_failed":"Post failed. Try again"},"links":{"minimize_file_preview":"Minimise file preview","minimize_youtube_video":"Minimise video","view_equella_content_in_new_window":"view the content in a new window"},"status":{"posting_message":"Posting message..."},"switched_roles_message":{"designer":"You have switched roles temporarily for this course, and are now viewing the course as a designer.  You can restore your role and permissions from the course home page.","observer":"You have switched roles temporarily for this course, and are now viewing the course as a observer.  You can restore your role and permissions from the course home page.","student":"You have switched roles temporarily for this course, and are now viewing the course as a student.  You can restore your role and permissions from the course home page.","ta":"You have switched roles temporarily for this course, and are now viewing the course as a TA.  You can restore your role and permissions from the course home page.","teacher":"You have switched roles temporarily for this course, and are now viewing the course as a teacher.  You can restore your role and permissions from the course home page."},"titles":{"equella_content_preview":"Equella content preview","external_link":"Links to an external site.","preview_document":"Preview the document"}},"time":{"count_hours_ago":{"one":"1 hour ago","other":"%{count} hours ago"},"count_minutes_ago":{"one":"1 minute ago","other":"%{count} minutes ago"},"less_than_a_minute_ago":"less than a minute ago"}},"en-GB-x-lbs":{"time":{"count_hours_ago":{"one":"1 hour ago","other":"%{count} hours ago"},"count_minutes_ago":{"one":"1 minute ago","other":"%{count} minutes ago"},"less_than_a_minute_ago":"less than a minute ago"}},"en-GB-x-ukhe":{"instructure_js":{"alerts":{"file_previews_disabled":"File previews have been disabled for this Canvas site"},"buttons":{"next_module":"Next unit","previous_module":"Previous unit"},"draft":"Draft","errors":{"posting_message_failed":"Post failed. Try again"},"links":{"minimize_file_preview":"Minimise file preview","minimize_youtube_video":"Minimise video","view_equella_content_in_new_window":"view the content in a new window"},"status":{"posting_message":"Posting message..."},"switched_roles_message":{"designer":"You have switched roles temporarily for this module, and are now viewing the module as a designer.  You can restore your role and permissions from the module home page.","observer":"You have switched roles temporarily for this module, and are now viewing the module as a observer.  You can restore your role and permissions from the module home page.","student":"You have switched roles temporarily for this module, and are now viewing the module as a student.  You can restore your role and permissions from the module home page.","ta":"You have switched roles temporarily for this module, and are now viewing the module as a TA.  You can restore your role and permissions from the module home page.","teacher":"You have switched roles temporarily for this module, and are now viewing the module as a teacher.  You can restore your role and permissions from the module home page."},"titles":{"equella_content_preview":"Equella content preview","external_link":"Links to an external site.","preview_document":"Preview the document"}},"time":{"count_hours_ago":{"one":"1 hour ago","other":"%{count} hours ago"},"count_minutes_ago":{"one":"1 minute ago","other":"%{count} minutes ago"},"less_than_a_minute_ago":"less than a minute ago"}},"es":{"time":{"count_hours_ago":{"one":"hace 1 hora","other":"hace %{count} horas"},"count_minutes_ago":{"one":"hace 1 minuto","other":"hace %{count} minutos"},"less_than_a_minute_ago":"hace menos de un minuto"}},"fa":{"time":{"count_hours_ago":{"one":"%{count} ساعت قبل","other":"%{count} ساعت قبل"},"count_minutes_ago":{"one":"%{count} دقیقه قبل","other":"%{count} دقیقه قبل"},"less_than_a_minute_ago":"کمتر از یک دقیقه پیش"}},"fi":{"time":{"count_hours_ago":{"one":"1 tunti sitten","other":"%{count} tuntia sitten"},"count_minutes_ago":{"one":"1 minuutti sitten","other":"%{count} minuuttia sitten"},"less_than_a_minute_ago":"vähemmän kuin minuutti sitten"}},"fr":{"time":{"count_hours_ago":{"one":"il y a 1 heure","other":"il y a %{count} heures"},"count_minutes_ago":{"one":"il y a 1 minute","other":"il y a %{count} minutes"},"less_than_a_minute_ago":"il y a moins d’1 minute"}},"fr-CA":{"time":{"count_hours_ago":{"one":"il y a 1 heure","other":"il y a %{count} heures"},"count_minutes_ago":{"one":"il y a 1 minute","other":"il y a %{count} minutes"},"less_than_a_minute_ago":"il y a moins d’une minute"}},"he":{"time":{"count_hours_ago":{"one":"לפני שעה","other":"לפני %{count} שעות"},"count_minutes_ago":{"one":"לפני דקה","other":"לפני %{count} דקות"},"less_than_a_minute_ago":"לפני פחות מדקה"}},"ht":{"time":{"count_hours_ago":{"one":"1 èdtan de sa","other":"%{count} èdtan de sa"},"count_minutes_ago":{"one":"1 minit de sa","other":"%{count} minit de sa"},"less_than_a_minute_ago":"mwens ke yon minit de sa"}},"hu":{"time":{"count_hours_ago":{"one":"1 órával ezelőtt","other":"%{count} órával ezelőtt"},"count_minutes_ago":{"one":"1 perccel ezelőtt","other":"%{count} perccel ezelőtt"},"less_than_a_minute_ago":"kevesebb mint egy perce"}},"hy":{"time":{"count_hours_ago":{"one":"1 ժամ առաջ","other":"%{count} ժամ առաջ"},"count_minutes_ago":{"one":"1 րոպե առաջ","other":"%{count} րոպե առաջ"},"less_than_a_minute_ago":"ավելի քիչ, քան մեկ րոպե առաջ"}},"is":{"instructure_js":{"alerts":{"file_previews_disabled":"Forskoðun skráa er ekki virk fyrir þessa Canvas-síðu"},"buttons":{"next_module":"Næsta eining","previous_module":"Fyrri eining"},"draft":"Drög","errors":{"posting_message_failed":"Birting tókst ekki, reyndu aftur"},"links":{"minimize_file_preview":"Lágmarka forskoðun skrár","minimize_youtube_video":"Minnka myndband","view_equella_content_in_new_window":"skoða efnið í nýjum glugga"},"status":{"posting_message":"Birti skilaboð..."},"switched_roles_message":{"designer":"Þú hefur skipt tímabundið um hlutverk á þessu námskeiði og sérð nú námskeiðið sem hönnuður.  Þú getur endurheimt hlutverk þitt og heimildir á heimasíðu námskeiðsins.","observer":"Þú hefur skipt tímabundið um hlutverk á þessu námskeiði og sérð nú námskeiðið sem skoðandi.  Þú getur endurheimt hlutverk þitt og heimildir á heimasíðu námskeiðsins.","student":"Þú hefur skipt tímabundið um hlutverk á þessu námskeiði og sérð nú námskeiðið sem nemandi.  Þú getur endurheimt hlutverk þitt og heimildir á heimasíðu námskeiðsins.","ta":"Þú hefur skipt tímabundið um hlutverk á þessu námskeiði og sérð nú námskeiðið sem aðstpðarkennari.  Þú getur endurheimt hlutverk þitt og heimildir á heimasíðu námskeiðsins.","teacher":"Þú hefur skipt tímabundið um hlutverk á þessu námskeiði og sérð nú námskeiðið sem kennari.  Þú getur endurheimt hlutverk þitt og heimildir á heimasíðu námskeiðsins."},"titles":{"equella_content_preview":"Equella forskoðun efnis","external_link":"Tenglar á ytra svæði.","preview_document":"Forskoða skjal"}},"time":{"count_hours_ago":{"one":"Fyrir 1 klukkustund","other":"Fyrir %{count} klukkustundum"},"count_minutes_ago":{"one":"Fyrir 1 mínútu","other":"Fyrir %{count} mínútum"},"less_than_a_minute_ago":"fyrir tæpri mínútu"}},"it":{"time":{"count_hours_ago":{"one":"1 ora fa","other":"%{count} ore fa"},"count_minutes_ago":{"one":"1 minuto fa","other":"%{count} minuti fa"},"less_than_a_minute_ago":"meno di un minuto fa"}},"ja":{"time":{"count_hours_ago":{"one":"%{count} 時間前","other":"%{count} 時間前"},"count_minutes_ago":{"one":"%{count} 分前","other":"%{count} 分前"},"less_than_a_minute_ago":"1 分前未満"}},"ko":{"time":{"count_hours_ago":{"one":"%{count}시간 전","other":"%{count}시간 전"},"count_minutes_ago":{"one":"%{count}분 전","other":"%{count}분 전"},"less_than_a_minute_ago":"1분 전 이내"}},"mi":{"instructure_js":{"alerts":{"file_previews_disabled":"Kua monokia arokite Kōnae mō tēnei pae Canvas"},"buttons":{"next_module":"Kōwae Panuku","previous_module":"Kōwae mua"},"draft":"tauira","errors":{"posting_message_failed":"Whakairi rahua, Whakamātauria ano"},"links":{"minimize_file_preview":"Whakamōkito Arokitenga Kōnae","minimize_youtube_video":"Whakamōkito Ataata","view_equella_content_in_new_window":"tiro te ihirangi i roto i te matapihi hou"},"status":{"posting_message":"Te tuku Karere ..."},"switched_roles_message":{"designer":"Kua whakawhiti e koe tūranga poto mo tēnei akoranga, a kei te mātakitaki i tēnei i te akoranga me te he kaitātai.  Ka taea e koe te whakahoki tō tūranga me whakāetanga i te whare whārangi akoranga.","observer":"Kua whakawhiti e koe tūranga poto mo tēnei akoranga, a kei te mātakitaki i tēnei i te akoranga hei kaimātakitaki.  Ka taea e koe te whakahoki tō tūranga me whakāetanga i te whare whārangi akoranga.","student":"Kua whakawhiti e koe tūranga poto mo tēnei akoranga, a kei te mātakitaki i tēnei i te akoranga me te he ākonga.  Ka taea e koe te whakahoki tō tūranga me whakāetanga i te whare whārangi akoranga.","ta":"Kua whakawhiti e koe tūranga poto mo tēnei akoranga, a kei te mātakitaki i tēnei i te akoranga me te he TA.  Ka taea e koe te whakahoki tō tūranga me whakāetanga i te whare whārangi akoranga.","teacher":"Kua whakawhiti e koe tūranga poto mo tēnei akoranga, a kei te mātakitaki i tēnei i te akoranga ano he kaiako.  Ka taea e koe te whakahoki tō tūranga me whakāetanga i te whare whārangi akoranga."},"titles":{"equella_content_preview":"Arokite Ihirangi Equella","external_link":"Hononga ki te pae o waho.","preview_document":"Arokite i te tuhinga"}},"time":{"count_hours_ago":{"one":"1 haora i mua","other":"%{count} haora i mua"},"count_minutes_ago":{"one":"1 meneti i mua","other":"%{count} meneti i mua"},"less_than_a_minute_ago":"iti iho i te i te meneti i mua"}},"nb":{"time":{"count_hours_ago":{"one":"1 time siden","other":"%{count} timer siden"},"count_minutes_ago":{"one":"1 minutt siden","other":"%{count} minutter siden"},"less_than_a_minute_ago":"under et minutt siden"}},"nb-x-k12":{"time":{"count_hours_ago":{"one":"1 time siden","other":"%{count} timer siden"},"count_minutes_ago":{"one":"1 minutt siden","other":"%{count} minutter siden"},"less_than_a_minute_ago":"under et minutt siden"}},"nl":{"time":{"count_hours_ago":{"one":"1 uur geleden","other":"%{count} uur geleden"},"count_minutes_ago":{"one":"1 minuut geleden","other":"%{count} minuten geleden"},"less_than_a_minute_ago":"minder dan 1 minuut geleden"}},"nn":{"time":{"count_hours_ago":{"one":"1 time sidan","other":"%{count} timar sidan"},"count_minutes_ago":{"one":"1 minutt sidan","other":"%{count} minutt sidan"},"less_than_a_minute_ago":"mindre enn eit minutt sidan"}},"pl":{"time":{"count_hours_ago":{"one":"1 godzina temu","other":"%{count} godzin temu"},"count_minutes_ago":{"one":"1 minuta temu","other":"%{count} minut temu"},"less_than_a_minute_ago":"mniej niż minutę temu"}},"pt":{"time":{"count_hours_ago":{"one":"1 hora atrás","other":"%{count} horas atrás"},"count_minutes_ago":{"one":"1 minuto atrás","other":"%{count} minutos atrás"},"less_than_a_minute_ago":"há menos de um minuto"}},"pt-BR":{"time":{"count_hours_ago":{"one":"1 hora atrás","other":"%{count} horas atrás"},"count_minutes_ago":{"one":"1 minuto atrás","other":"%{count} minutos atrás"},"less_than_a_minute_ago":"há menos de um minuto"}},"ru":{"instructure_js":{"alerts":{"file_previews_disabled":"Предварительный просмотр файла отключен для этого сайта Canvas"},"buttons":{"next_module":"Следующий модуль","previous_module":"предыдущий модуль"},"draft":"Черновик","errors":{"posting_message_failed":"Сбой записи, повторите попытку"},"links":{"minimize_file_preview":"Уменьшить просмотр файла","minimize_youtube_video":"Уменьшить видео","view_equella_content_in_new_window":"просмотр содержания в новом окне"},"status":{"posting_message":"Публикация сообщения..."},"switched_roles_message":{"designer":"Вы временно переключили роли для этого курса и сейчас просматриваете курс как дизайнер.  Можно восстановить роль и разрешения на домашней странице курса.","observer":"Вы временно переключили роли для этого курса и сейчас просматриваете курс как наблюдатель.  Можно восстановить роль и разрешения на домашней странице курса.","student":"Вы временно переключили роли для этого курса и сейчас просматриваете курс как студент.  Можно восстановить роль и разрешения на домашней странице курса.","ta":"Вы временно переключили роли для этого курса и сейчас просматриваете курс как ассистент.  Можно восстановить роль и разрешения на домашней странице курса.","teacher":"Вы временно переключили роли для этого курса и сейчас просматриваете курс как учитель.  Можно восстановить роль и разрешения на домашней странице курса."},"titles":{"equella_content_preview":"Предварительный просмотр содержания Equella","external_link":"Ссылки на внешний сайт.","preview_document":"Предварительный просмотр документа"}},"time":{"count_hours_ago":{"one":"1 час назад","other":"%{count} часа(ов) назад"},"count_minutes_ago":{"one":"1 минута назад","other":"%{count} минут(ы) назад"},"less_than_a_minute_ago":"меньше минуты назад"}},"sl":{"time":{"count_hours_ago":{"one":"1 uro prej","other":"%{count} ur prej"},"count_minutes_ago":{"one":"1 minuto prej","other":"%{count} minut prej"},"less_than_a_minute_ago":"manj kot minuto prej"}},"sv":{"time":{"count_hours_ago":{"one":"1 timme sedan","other":"%{count} timmar sen"},"count_minutes_ago":{"one":"1 minut sedan","other":"%{count} minuter sedan"},"less_than_a_minute_ago":"mindre än en minut sen"}},"sv-x-k12":{"time":{"count_hours_ago":{"one":"1 timme sedan","other":"%{count} timmar sen"},"count_minutes_ago":{"one":"1 minut sedan","other":"%{count} minuter sedan"},"less_than_a_minute_ago":"mindre än en minut sen"}},"tr":{"time":{"count_hours_ago":{"one":"1 saat önce","other":"%{count} saat önce"},"count_minutes_ago":{"one":"1 dakika önce","other":"%{count} dakika önce"},"less_than_a_minute_ago":"bir dakikadan daha az"}},"uk":{"time":{"count_hours_ago":{"one":"1 година тому","other":"%{count} годин тому"},"count_minutes_ago":{"one":"1 хвилина тому","other":"%{count} хвилин тому"},"less_than_a_minute_ago":"Менше, ніж хвилину тому"}},"zh-Hans":{"time":{"count_hours_ago":{"one":"%{count} 小时前","other":"%{count} 小时前"},"count_minutes_ago":{"one":"%{count} 分钟前","other":"%{count} 分钟前"},"less_than_a_minute_ago":"不到一分钟前"}},"zh-Hant":{"time":{"count_hours_ago":{"one":"%{count}小時以前","other":"%{count} 小時以前"},"count_minutes_ago":{"one":"%{count}分鐘以前","other":"%{count} 分鐘以前"},"less_than_a_minute_ago":"不到一分鐘以前"}}}'))
a("jQeR")
a("0sPK")
var r=i["default"].scoped("instructure_js")
var s=a("ouhR")
var u=a.n(s)
var m=a("GLiE")
var l=a.n(m)
var c=a("2DhO")
var d=a("5Ky4")
var _=a("Nxtp")
var h=a("21i1")
a("YGE8")
function g(e){e=(e||"").split(":")[0]
var t=e.split("."),a=t.length
return(a>1?[t[a-2],t[a-1]]:t).join("")}var f=g(window.location.hostname)
u.a.expr[":"].external=function(e){var t=u()(e).attr("href")
return!!(t&&t.length&&!t.match(/^(mailto\:|javascript\:)/)&&e.hostname&&g(e.hostname)!=f)}
window.equella={ready:function(e){u()(document).triggerHandler("equella_ready",e)},cancel:function(){u()(document).triggerHandler("equella_cancel")}}
u()(document).bind("equella_ready",function(e,t){u()("#equella_dialog").triggerHandler("equella_ready",t)}).bind("equella_cancel",function(){u()("#equella_dialog").dialog("close")})
window.external_tool_dialog={ready:function(e){var t=jQuery.Event("selection")
t.contentItems=e
u()("#resource_selection_dialog:visible").triggerHandler(t)
u()("#homework_selection_dialog:visible").triggerHandler(t)},cancel:function(){u()("#external_tool_button_dialog").dialog("close")
u()("#resource_selection_dialog").dialog("close")
u()("#homework_selection_dialog:visible").dialog("close")}}
window.jsonFlickrApi=function(e){u()("#instructure_image_search").triggerHandler("search_results",e)}
a("VHne")
a("jYyc")
a("fy7k")
a("hiU6")
a("UlQx")
a("Z+Ib")
a("JI1W")
a("p6Wi")
a("q3b3")
a("7LJr")
a("MWZS")
a("OShF")
a("TBRb")
a("7WS/")
a("2sOc")
a("teYS")
a("Yf8v")
a("fuo4")
a("Sv6n")
u()("body").on("click","[data-track-category]",function(){var e=u()(this).data(),t=e.trackCategory,a=e.trackLabel,n=e.trackAction,i=e.trackValue
u.a.trackEvent(t,n,a,i)})
function p(){var e=u()(this)
var t=e.attr("href")
var a=u.a.youTubeID(t||"")
if(a&&!e.hasClass("inline_disabled")){var n=u()('\n      <a\n        href="'.concat(Object(d["a"])(t),'"\n        class="youtubed"\n      >\n        <img src="/images/play_overlay.png"\n          class="media_comment_thumbnail"\n          style="background-image: url(//img.youtube.com/vi/').concat(Object(d["a"])(a),'/2.jpg)"\n          alt="').concat(Object(d["a"])(e.data("preview-alt")||""),'"\n        />\n      </a>\n    '))
n.click(Object(_["a"])(function(){var e=u()("\n        <span class='youtube_holder' style='display: block;'>\n          <iframe\n            src='//www.youtube.com/embed/".concat(Object(d["a"])(a),"?autoplay=1&rel=0&hl=en_US&fs=1'\n            frameborder='0'\n            width='425'\n            height='344'\n            allowfullscreen\n          ></iframe>\n          <br/>\n          <a\n            href='#'\n            style='font-size: 0.8em;'\n            class='hide_youtube_embed_link'\n          >\n            ").concat(Object(d["a"])(r.t("links.minimize_youtube_video","Minimize Video")),"\n          </a>\n        </span>\n      "))
e.find(".hide_youtube_embed_link").click(Object(_["a"])(function(){e.remove()
n.show()
u.a.trackEvent("hide_embedded_content","hide_you_tube")}))
u()(this).after(e).hide()}))
u.a.trackEvent("show_embedded_content","show_you_tube")
e.addClass("youtubed").after(n)}}u.a.trackEvent("Route",location.pathname.replace(/\/$/,"").replace(/\d+/g,"--")||"/")
var v=".dialog, .draggable, .resizable, .sortable, .tabs"
function b(){u()("#content")
u()(".user_content:not(.enhanced):visible").addClass("unenhanced")
u()(".user_content.unenhanced:visible").each(function(){var e=u()(this)
e.find("img").css("maxWidth","100%")
e.data("unenhanced_content_html",e.html())}).find(".enhanceable_content").show().filter(v).ifExists(function(e){var t="Deprecated use of magic jQueryUI widget markup detected:\n\nYou're relying on undocumented functionality where Canvas makes jQueryUI widgets out of rich content that has the following class names: "+v+".\n\nCanvas is moving away from jQueryUI for our own widgets and this behavior will go away. Rather than relying on the internals of Canvas's JavaScript, you should use your own custom JS file to do any such customizations."
console.error(t,e)}).end().filter(".dialog").each(function(){var e=u()(this)
e.hide()
e.closest(".user_content").find("a[href='#"+e.attr("id")+"']").click(function(t){t.preventDefault()
e.dialog()})}).end().filter(".draggable").draggable().end().filter(".resizable").resizable().end().filter(".sortable").sortable().end().filter(".tabs").each(function(){u()(this).tabs()}).end().end().find("a:not(.not_external, .external):external").each(function(){var e=Object(d["a"])(r.t("titles.external_link","Links to an external site."))
u()(this).not(":has(img)").addClass("external").html("<span>"+u()(this).html()+"</span>").attr("target","_blank").attr("rel","noreferrer noopener").append('<span aria-hidden="true" class="ui-icon ui-icon-extlink ui-icon-inline" title="'+u.a.raw(e)+'"/>').append('<span class="screenreader-only">&nbsp;('+u.a.raw(e)+")</span>")}).end()
u.a.filePreviewsEnabled()&&u()("a.instructure_scribd_file").not(".inline_disabled").each(function(){var e=u()(this)
if(u.a.trim(e.text())){var t=u()("<span class='instructure_file_holder link_holder'/>"),a=u()("<a class='file_preview_link' aria-hidden='true' href='"+Object(d["a"])(e.attr("href"))+"' title='"+Object(d["a"])(r.t("titles.preview_document","Preview the document"))+"' style='padding-left: 5px;'><img src='/images/preview.png' alt='"+Object(d["a"])(r.t("titles.preview_document","Preview the document"))+"'/></a>")
e.removeClass("instructure_scribd_file").before(t).appendTo(t)
t.append(a)
e.hasClass("auto_open")&&a.click()}})
u()(".user_content.unenhanced a,.user_content.unenhanced+div.answers a").find("img.media_comment_thumbnail").each(function(){u()(this).closest("a").addClass("instructure_inline_media_comment")}).end().filter(".instructure_inline_media_comment").removeClass("no-underline").mediaCommentThumbnail("normal").end().filter(".instructure_video_link, .instructure_audio_link").mediaCommentThumbnail("normal",true).end().not(".youtubed").each(p)
u()(".user_content.unenhanced").removeClass("unenhanced").addClass("enhanced")
setTimeout(function(){u()(".user_content form.user_content_post_form:not(.submitted)").submit().addClass("submitted")},10)}u()(function(){if(window._earlyClick){document.removeEventListener("click",window._earlyClick)
window._earlyClick.clicks&&setTimeout(function(){u.a.each(l.a.uniq(window._earlyClick.clicks),function(){var e=u.a.Event("click")
e.preventDefault()
u()(this).trigger(e)})},1)}var e,t=u()("#breadcrumbs"),i=false
function o(){var a=500,n=1.5*t.find("li:visible:first").height()
e=e||t.find(".ellipsible")
e.css("maxWidth","")
e.ifExists(function(){for(var o=0;t.height()>n&&o<20;o++){if(!i){i=true
e.addClass("ellipsis")}e.css("maxWidth",a-=20)}})}o()
u()(window).resize(o)
n["a"].prototype.bindOpenKeys.call({$el:u()("#keyboard_navigation")})
u()("#switched_role_type").ifExists(function(){var e=u()(this).attr("class")
var t=u()("<img/>")
var a=null
switch(u()(this).data("role")){case"TeacherEnrollment":a=r.t("switched_roles_message.teacher","You have switched roles temporarily for this course, and are now viewing the course as a teacher.  You can restore your role and permissions from the course home page.")
break
case"StudentEnrollment":a=r.t("switched_roles_message.student","You have switched roles temporarily for this course, and are now viewing the course as a student.  You can restore your role and permissions from the course home page.")
break
case"TaEnrollment":a=r.t("switched_roles_message.ta","You have switched roles temporarily for this course, and are now viewing the course as a TA.  You can restore your role and permissions from the course home page.")
break
case"ObserverEnrollment":a=r.t("switched_roles_message.observer","You have switched roles temporarily for this course, and are now viewing the course as an observer.  You can restore your role and permissions from the course home page.")
break
case"DesignerEnrollment":a=r.t("switched_roles_message.designer","You have switched roles temporarily for this course, and are now viewing the course as a designer.  You can restore your role and permissions from the course home page.")
break
default:a=r.t("switched_roles_message.student","You have switched roles temporarily for this course, and are now viewing the course as a student.  You can restore your role and permissions from the course home page.")}t.attr("src","/images/warning.png").attr("title",a).css({paddingRight:2,width:12,height:12})
u()("#crumb_"+e).find("a").prepend(t)})
u()("a.show_quoted_text_link").live("click",function(e){var t=u()(this).parents(".quoted_text_holder").children(".quoted_text")
if(t.length>0){e.preventDefault()
t.show()
u()(this).hide()}})
u()("a.equella_content_link").live("click",function(e){e.preventDefault()
var t=u()("#equella_preview_dialog")
if(!t.length){t=u()("<div/>")
t.attr("id","equella_preview_dialog").hide()
t.html("<h2/><iframe style='background: url(/images/ajax-loader-medium-444.gif) no-repeat left top; width: 800px; height: 350px; border: 0;' src='about:blank' borderstyle='0'/><div style='text-align: right;'><a href='#' class='original_link external external_link' target='_blank'>"+Object(d["a"])(r.t("links.view_equella_content_in_new_window","view the content in a new window"))+"</a>")
t.find("h2").text(u()(this).attr("title")||u()(this).text()||r.t("titles.equella_content_preview","Equella Content Preview"))
var a=t.find("iframe")
setTimeout(function(){a.css("background","#fff")},2500)
u()("body").append(t)
t.dialog({autoOpen:false,width:"auto",resizable:false,title:r.t("titles.equella_content_preview","Equella Content Preview"),close:function(){t.find("iframe").attr("src","about:blank")}})}t.find(".original_link").attr("href",u()(this).attr("href"))
t.dialog("close").dialog("open")
t.find("iframe").attr("src",u()(this).attr("href"))})
u()(".dialog_opener[aria-controls]:not(.user_content *)").live("click",function(e){var t=this
u()("#"+u()(this).attr("aria-controls")).ifExists(function(a){e.preventDefault()
if(!a.data("dialog")){a.dialog(u.a.extend({autoOpen:false,modal:true},u()(t).data("dialogOpts")))
a.fixDialogButtons()}a.dialog("open")})})
u.a.filePreviewsEnabled()?u()("a.file_preview_link").live("click",function(e){e.preventDefault()
var t=u()(this).loadingImage({image_size:"small"}).hide()
u.a.ajaxJSON(t.attr("href").replace(/\/download/,""),"GET",{},function(a){var n=a&&a.attachment
t.loadingImage("remove")
if(n&&(u.a.isPreviewable(n.content_type,"google")||n.canvadoc_session_url)){var i=u()("<div>").insertAfter(t.parents(".link_holder:last")).loadDocPreview({canvadoc_session_url:n.canvadoc_session_url,mimeType:n.content_type,public_url:n.public_url,attachment_preview_processing:"pending_upload"==n.workflow_state||"processing"==n.workflow_state})
var o=u()('<a href="#" style="font-size: 0.8em;" class="hide_file_preview_link">'+Object(d["a"])(r.t("links.minimize_file_preview","Minimize File Preview"))+"</a>").click(function(e){e.preventDefault()
t.show()
t.focus()
i.remove()
u.a.trackEvent("hide_embedded_content","hide_file_preview")})
i.prepend(o)
Object.prototype.hasOwnProperty.call(e,"originalEvent")&&o.focus()
u.a.trackEvent("show_embedded_content","show_file_preview")}},function(){t.loadingImage("remove").hide()})}):u()("a.file_preview_link").live("click",function(e){e.preventDefault()
alert(r.t("alerts.file_previews_disabled","File previews have been disabled for this Canvas site"))})
var s
u.a.subscribe("userContent/change",function(){clearTimeout(s)
s=setTimeout(b,50)})
u()(document).bind("user_content_change",b)
u()(function(){setInterval(b,15e3)
setTimeout(b,15)})
u()(".zone_cached_datetime").each(function(){if(u()(this).attr("title")){var e=c["a"].parse(u()(this).attr("title"))
e&&u()(this).text(u.a.datetimeString(e))}})
u()(".show_sub_messages_link").click(function(e){e.preventDefault()
u()(this).parents(".subcontent").find(".communication_sub_message.toggled_communication_sub_message").removeClass("toggled_communication_sub_message")
u()(this).parents(".communication_sub_message").remove()})
u()(".show_comments_link").click(function(e){e.preventDefault()
u()(this).closest("ul").find("li").show()
u()(this).closest("li").remove()})
u()(".communication_message .message_short .read_more_link").click(function(e){e.preventDefault()
u()(this).parents(".communication_message").find(".message_short").hide().end().find(".message").show()})
u()(".communication_message .close_notification_link").live("click",function(e){e.preventDefault()
var t=u()(this).parents(".communication_message")
t.confirmDelete({url:u()(this).attr("rel"),noMessage:true,success:function(){u()(this).slideUp(function(){u()(this).remove()})}})})
u()(".communication_message .add_entry_link").click(function(e){e.preventDefault()
var t=u()(this).parents(".communication_message")
var a=t.find(".reply_message").hide()
var n=t.find(".communication_sub_message.blank").clone(true).removeClass("blank")
a.before(n.show())
var i=l.a.uniqueId("textarea_")
n.find("textarea.rich_text").attr("id",i)
u()(document).triggerHandler("richTextStart",u()("#"+i))
n.find("textarea:first").focus().select()})
u()(document).bind("richTextStart",function(e,t){if(!t||0===t.length)return
t=u()(t)
if(!t||0===t.length)return
h["a"].initSidebar({show:function(){u()("#sidebar_content").hide()},hide:function(){u()("#sidebar_content").show()}})
h["a"].loadNewEditor(t,{focus:true})}).bind("richTextEnd",function(e,t){if(!t||0===t.length)return
t=u()(t)
if(!t||0===t.length)return
h["a"].destroyRCE(t)})
u()(".communication_message .content .links .show_users_link,.communication_message .header .show_users_link").click(function(e){e.preventDefault()
u()(this).parents(".communication_message").find(".content .users_list").slideToggle()})
u()(".communication_message .delete_message_link").click(function(e){e.preventDefault()
u()(this).parents(".communication_message").confirmDelete({noMessage:true,url:u()(this).attr("href"),success:function(){u()(this).slideUp()}})})
u()(".communication_sub_message .add_conversation_message_form").formSubmit({beforeSubmit:function(e){u()(this).find("button").attr("disabled",true)
u()(this).find(".submit_button").text(r.t("status.posting_message","Posting Message..."))
u()(this).loadingImage()},success:function(e){u()(this).loadingImage("remove")
var t=u()(this).parents(".communication_sub_message")
var a=t.parents(".communication_message")
var n=e.messages[0]
t.fillTemplateData({data:{post_date:u.a.datetimeString(n.created_at),message:n.body},htmlValues:["message"]})
t.find(".message").show()
u()(this).remove()
a.find(".reply_message").show()
u.a.flashMessage("Message Sent!")
u()(document).triggerHandler("user_content_change")
"/"===location.pathname&&u.a.trackEvent("dashboard_comment","create")},error:function(e){u()(this).loadingImage("remove")
u()(this).find("button").attr("disabled",false)
u()(this).find(".submit_button").text("Post Failed, Try Again")
u()(this).formErrors(e)}})
u()(".communication_sub_message .add_sub_message_form").formSubmit({beforeSubmit:function(e){u()(this).find("button").attr("disabled",true)
u()(this).find(".submit_button").text(r.t("status.posting_message","Posting Message..."))
u()(this).loadingImage()},success:function(e){u()(this).loadingImage("remove")
var t=u()(this).parents(".communication_sub_message")
if(u()(this).hasClass("submission_comment_form")){var a=u()(this).getTemplateData({textValues:["submission_user_id"]}).submission_user_id
var n=null
for(var i in e){var o=e[i].submission
o.user_id==a&&(n=o)}if(n){var r=n.submission_comments[n.submission_comments.length-1].submission_comment
r.post_date=u.a.datetimeString(r.created_at)
r.message=r.formatted_body||r.comment
t.fillTemplateData({data:r,htmlValues:["message"]})}}else{var s=e.discussion_entry
s.post_date=u.a.datetimeString(s.created_at)
t.find(".content > .message_html").val(s.message)
t.fillTemplateData({data:s,htmlValues:["message"]})}t.find(".message").show()
t.find(".user_content").removeClass("enhanced")
t.parents(".communication_message").find(".reply_message").removeClass("lonely_behavior_message").show()
u()(document).triggerHandler("richTextEnd",u()(this).find("textarea.rich_text"))
u()(document).triggerHandler("user_content_change")
u()(this).remove()
location.href.match(/dashboard/)&&u.a.trackEvent("dashboard_comment","create")},error:function(e){u()(this).loadingImage("remove")
u()(this).find("button").attr("disabled",false)
u()(this).find(".submit_button").text(r.t("errors.posting_message_failed","Post Failed, Try Again"))
u()(this).formErrors(e)}})
u()(".communication_sub_message form .cancel_button").click(function(){var e=u()(this).parents(".communication_sub_message")
var t=u()(this).parents(".communication_message")
u()(document).triggerHandler("richTextEnd",e.find("textarea.rich_text"))
e.remove()
t.find(".reply_message").show()})
u()(".communication_message,.communication_sub_message").bind("focusin mouseenter",function(){u()(this).addClass("communication_message_hover")}).bind("focusout mouseleave",function(){u()(this).removeClass("communication_message_hover")})
u()(".communication_sub_message .more_options_reply_link").click(function(e){e.preventDefault()
var t=u()(this).parents("form")
var a=null
a=t.hasClass("submission_comment_form")?{comment:t.find("textarea:visible:first").val()||""}:{message:t.find("textarea:visible:first").val()||""}
location.href=u()(this).attr("href")+"?message="+encodeURIComponent(a.message)})
u()(".communication_message.new_activity_message").ifExists(function(){this.find(".message_type img").click(function(){var e=u()(this),t=u.a.trim(e.attr("class"))
e.parents(".message_type").find("img").removeClass("selected")
e.addClass("selected").parents(".new_activity_message").find(".message_type_text").text(e.attr("title")).end().find(".activity_form").hide().end().find("textarea, :text").val("").end().find("."+t+"_form").show().find(".context_select").change()})
this.find(".context_select").change(function(){var e=u()(this),t=e.val(),a=e.parents(".communication_message"),n=a.find("form")
n.attr("action",a.find("."+t+"_form_url").attr("href"))
n.data("context_name",this.options[this.selectedIndex].text)
n.data("context_code",t)
a.find(".roster_list").hide().find(":checkbox").each(function(){u()(this).attr("checked",false)})
a.find("."+t+"_roster_list").show()}).triggerHandler("change")
this.find(".cancel_button").click(function(e){u()(this).parents(".communication_message").hide().prev(".new_activity_message").show()})
this.find(".new_activity_message_link").click(function(e){e.preventDefault()
u()(this).parents(".communication_message").hide().next(".new_activity_message").find(".message_type img.selected").click().end().show().find(":text:visible:first").focus().select()})
this.find("form.message_form").formSubmit({beforeSubmit:function(e){u()("button").attr("disabled",true)
u()("button.submit_button").text(r.t("status.posting_message","Posting Message..."))},success:function(e){u()("button").attr("disabled",false)
u()("button.submit_button").text("Post Message")
var t=u()(this).data("context_code")||""
var a=u()(this).data("context_name")||""
if(u()(this).hasClass("discussion_topic_form")){var n=e.discussion_topic
n.context_code=a
n.user_name=u()("#identity .user_name").text()
n.post_date=u.a.datetimeString(n.created_at)
n.topic_id=n.id
var i=u()(this).parents(".communication_message").find(".template")
var o=i.find(".communication_message").clone(true)
o.find(".header .title,.behavior_content .less_important a").attr("href",i.find("."+t+"_topic_url").attr("href"))
o.find(".add_entry_link").attr("href",i.find("."+t+"_topics_url").attr("href"))
o.find(".user_name").attr("href",i.find("."+t+"_user_url").attr("href"))
o.find(".topic_assignment_link,.topic_assignment_url").attr("href",i.find("."+t+"_assignment_url").attr("href"))
o.find(".attachment_name,.topic_attachment_url").attr("href",i.find("."+t+"_attachment_url").attr("href"))
var r={discussion_topic_id:n.id}
o.fillTemplateData({data:n,hrefValues:["topic_id","user_id","assignment_id","attachment_id"],avoid:".subcontent"})
o.find(".subcontent").fillTemplateData({data:r,hrefValues:["topic_id","user_id"]})
o.find(".subcontent form").attr("action",i.find("."+t+"_entries_url").attr("href"))
o.fillFormData(r,{object_name:"discussion_entry"})
u()(this).parents(".communication_message").after(o.hide())
o.slideDown()
u()(this).parents(".communication_message").slideUp()
u()(this).parents(".communication_message").prev(".new_activity_message").slideDown()}else u()(this).hasClass("announcement_form")||location.reload()},error:function(e){u()("button").attr("disabled",false)
u()("button.submit_button").text(r.t("errors.posting_message_failed","Post Failed, Try Again"))
u()(this).formErrors(e)}})})
u()("#topic_list .show_all_messages_link").show().click(function(e){e.preventDefault()
u()("#topic_list .topic_message").show()
u()(this).hide()})
var m=[]
function _(){m=u()(".time_ago_date:visible").toArray()
g()}function g(){var e=m.shift()
if(e){var t=u()(e),a=t.data("parsed_date")||Date.parse(t.data("timestamp")||"")
if(a){var n=new Date-a
t.data("timestamp",a.toISOString())
t.data("parsed_date",a)
var i=u.a.fudgeDateForProfileTimezone(a)
var o=i.toString("MMM d, yyyy")+i.toString(" h:mmtt").toLowerCase()
var s=o
if(n<864e5)if(n<36e5)if(n<6e4)s=r.t("#time.less_than_a_minute_ago","less than a minute ago")
else{var l=parseInt(n/6e4,10)
s=r.t("#time.count_minutes_ago",{one:"1 minute ago",other:"%{count} minutes ago"},{count:l})}else{var c=parseInt(n/36e5,10)
s=r.t("#time.count_hours_ago",{one:"1 hour ago",other:"%{count} hours ago"},{count:c})}t.text(s)
t.attr("title",o)}setTimeout(g,1)}else setTimeout(_,6e4)}setTimeout(_,100)
var f=u()("#sequence_footer .sequence_details_url").filter(":last").attr("href")
if(f)u.a.ajaxJSON(f,"GET",{},function(e){var t=u()("#sequence_footer")
if(e.current_item){u()("#sequence_details .current").fillTemplateData({data:e.current_item.content_tag})
u.a.each({previous:".prev",next:".next"},function(a,n){var i=t.find(n)
if(e[a+"_item"]||e[a+"_module"]){var o=e[a+"_item"]&&e[a+"_item"].content_tag||e[a+"_module"]&&e[a+"_module"].context_module
if(!e[a+"_item"]){o.title=o.title||o.name
"unpublished"===o.workflow_state&&(o.title+=" ("+r.t("draft","Draft")+")")
o.text="previous"==a?r.t("buttons.previous_module","Previous Module"):r.t("buttons.next_module","Next Module")
i.addClass("module_button")}i.fillTemplateData({data:o})
e[a+"_item"]?i.attr("href",u.a.replaceTags(t.find(".module_item_url").attr("href"),"id",o.id)):i.attr("href",u.a.replaceTags(t.find(".module_url").attr("href"),"id",o.id)+"/items/"+("previous"===a?"last":"first"))}else i.hide()})
t.show()
u()(window).resize()}})
else{var p=u()("#sequence_footer")
if(p.length){var v=u()(p[0])
Promise.all([a.e(6),a.e(62),a.e(574)]).then(a.bind(null,"/j35")).then(function(){v.moduleSequenceFooter({courseID:v.attr("data-course-id"),assetType:v.attr("data-asset-type"),assetID:v.attr("data-asset-id")})})}}u()("#right-side").delegate(".more_link","click",function(e){var t=u()(this)
var a=t.parents("ul").children(":hidden").show()
t.closest("li").remove()
0===e.screenX&&a.first().find(":tabbable:first").focus()
return false})
u()("#right-side").on("click",".disable-todo-item-link",function(e){e.preventDefault()
var t=u()(this).parents("li, div.topic_message").last()
var a=u()(this).closest(".to-do-list > li").prev()
var n=a.find(".disable-todo-item-link").length&&a.find(".disable-todo-item-link")||u()(".todo-list-header")
var i=u()(this).data("api-href")
var o=u()(this).data("flash-message")
function r(e){t.confirmDelete({url:e,noMessage:true,success:function(){o&&u.a.flashMessage(o)
u()(this).slideUp(function(){u()(this).remove()
n.focus()})}})}r(i)})
setTimeout(function(){u()("#content a:external,#content a.explicit_external_link").not(".external").each(function(){var e=r.t("titles.external_link","Links to an external site.")
var t=u()('<span class="ui-icon ui-icon-extlink ui-icon-inline"/>').attr("title",e)
t.append(u()('<span class="screenreader-only"/>').text(e))
u()(this).not(".open_in_a_new_tab").not(":has(img)").not(".not_external").not(".exclude_external_icon").addClass("external").children("span.ui-icon-extlink").remove().end().html("<span>"+u()(this).html()+"</span>").attr("target","_blank").attr("rel","noreferrer noopener").append(t)})},2e3)})},cuKi:function(e,t,a){"use strict"
a.d(t,"a",function(){return o})
var n=a("GLiE")
var i=a.n(n)
function o(e){return i()(e).reduce(function(e,t,a){var n=a.split("][")
var o=n.length-1
if(/\[/.test(n[0])&&/\]$/.test(n[o])){n[o]=n[o].replace(/\]$/,"")
n=n.shift().split("[").concat(n)
o=n.length-1}else o=0
if(o){var r=0
var s=e
while(r<=o){a=""===n[r]?s.length:n[r]
s=s[a]=r<o?s[a]||(n[r+1]&&isNaN(n[r+1])?{}:[]):t
r++}}else i.a.isArray(e[a])?e[a].push(t):null!=e[a]?e[a]=[e[a],t]:e[a]=t
return e},{})}},fy7k:function(e,t,a){"use strict"
var n=a("u7Gu")
var i=a("pQTu")
var o=a("m0r6")
Object(o["a"])(JSON.parse('{"en-AU":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"This document cannot be displayed within Canvas.","document_preview_processing":"The document preview is currently being processed. Please try again later."}}},"en-AU-x-unimelb":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"This document cannot be displayed within Canvas.","document_preview_processing":"The document preview is currently being processed. Please try again later."}}},"en-CA":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"This document cannot be displayed within Canvas.","document_preview_processing":"The document preview is currently being processed. Please try again later."}}},"en-GB":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"This document cannot be displayed within Canvas.","document_preview_processing":"The document preview is currently being processed. Please try again later."}}},"en-GB-x-ukhe":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"This document cannot be displayed within Canvas.","document_preview_processing":"The document preview is currently being processed. Please try again later."}}},"is":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Ekki hægt að sýna þetta skjal í Canvas.","document_preview_processing":"Forskoðun skjala er í vinnslu. Vinsamlegast reyndu aftur seinna."}}},"mi":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"E kore e taea te whakaatu i tēnei tuhinga i roto i Canvas.","document_preview_processing":"Kei te tukatuka i tēnei wā te arokite tuhinga. Tēnā koa ngana anō i muri mai."}}},"ru":{"jquery_doc_previews":{"errors":{"cannot_view_document_in_canvas":"Этот документ нельзя отобразить внутри Canvas.","document_preview_processing":"Предварительный просмотр документа в данный момент обрабатывается. Попробуйте еще раз позже."}}}}'))
a("jQeR")
a("0sPK")
var r=i["default"].scoped("jquery_doc_previews")
var s=a("ouhR")
var u=a.n(s)
a("GLiE")
var m=a("5Ky4")
a("jYyc")
a("hiU6")
a("JI1W")
a("7LJr")
var l=a("Vj0+")
var c={"application/vnd.openxmlformats-officedocument.wordprocessingml.template":[1,1],"application/vnd.oasis.opendocument.spreadsheet":[1,1],"application/vnd.sun.xml.writer":[1,1],"application/excel":[1,1],"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":[1,1],"text/rtf":[1,1],"application/vnd.openxmlformats-officedocument.spreadsheetml.template":[1,1],"application/vnd.sun.xml.impress":[1,1],"application/vnd.sun.xml.calc":[1,1],"application/vnd.ms-excel":[1,1],"application/msword":[1,1],"application/mspowerpoint":[1,1],"application/rtf":[1,1],"application/vnd.oasis.opendocument.presentation":[1,1],"application/vnd.oasis.opendocument.text":[1,1],"application/vnd.openxmlformats-officedocument.presentationml.template":[1,1],"application/vnd.openxmlformats-officedocument.presentationml.slideshow":[1,1],"text/plain":[1,1],"application/vnd.openxmlformats-officedocument.presentationml.presentation":[1,1],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":[1,1],"application/postscript":[1,1],"application/pdf":[1,1],"application/vnd.ms-powerpoint":[1,1]}
u.a.filePreviewsEnabled=function(){return!(n["a"].disableCrocodocPreviews&&n["a"].disableGooglePreviews)}
u.a.isPreviewable=function(e,t){return u.a.filePreviewsEnabled()&&c[e]&&(!t||!n["a"]["disable"+u.a.capitalize(t)+"Previews"]&&c[e][{scribd:0,google:1}[t]])}
u.a.fn.loadDocPreview=function(e){return this.each(function(){var t=u()(this),a=u.a.extend({width:"100%",height:"400px"},t.data(),e)
function i(e){if(a.attachment_view_inline_ping_url){u.a.ajaxJSON(a.attachment_view_inline_ping_url,"POST",{},function(){},function(){})
u.a.trackEvent("Doc Previews",e,JSON.stringify(a,["attachment_id","submission_id","mimetype","crocodoc_session_url","canvadoc_session_url"]))}}if(!n["a"].disableCrocodocPreviews&&a.crocodoc_session_url){var o=Object(l["a"])(a.crocodoc_session_url)
var s=u()("<iframe/>",{src:o,width:a.width,height:a.height,allowfullscreen:"1",id:a.id})
s.appendTo(t)
s.load(function(){i("crocodoc")
u.a.isFunction(a.ready)&&a.ready()})}else if(a.canvadoc_session_url){var c=u()('<div style="overflow: auto; resize: vertical;        border: 1px solid transparent; height: 100%;"/>')
c.appendTo(t)
var d=void 0!==a.iframe_min_height?a.iframe_min_height:"800px"
var _=Object(l["a"])(a.canvadoc_session_url)
s=u()("<iframe/>",{src:_,width:a.width,allowfullscreen:"1",css:{border:0,overflow:"auto",height:"99%","min-height":d},id:a.id})
s.appendTo(c)
s.load(function(){i("canvadocs")
u.a.isFunction(a.ready)&&a.ready()})}else if(!n["a"].disableGooglePreviews&&(!a.mimetype||u.a.isPreviewable(a.mimetype,"google"))&&a.attachment_id||a.public_url){var h=function(){var e="//docs.google.com/viewer?"+u.a.param({embedded:true,url:a.public_url})
a.ajax_valid&&!a.ajax_valid()||u()('<iframe src="'+Object(m["a"])(e)+'" height="'+a.height+'" width="100%" />').appendTo(t).load(function(){i("google")
u.a.isFunction(a.ready)&&a.ready()})}
if(a.public_url)h()
else if(a.attachment_id){var g="/api/v1/files/"+a.attachment_id+"/public_url.json"
a.submission_id&&(g+="?"+u.a.param({submission_id:a.submission_id}))
t.loadingImage()
u.a.ajaxJSON(g,"GET",{},function(e){t.loadingImage("remove")
if(e&&e.public_url){u.a.extend(a,e)
h()}})}}else u.a.filePreviewsEnabled()&&(a.attachment_preview_processing?t.html("<p>"+Object(m["a"])(r.t("errors.document_preview_processing","The document preview is currently being processed. Please try again later."))+"</p>"):t.html("<p>"+Object(m["a"])(r.t("errors.cannot_view_document_in_canvas","This document cannot be displayed within Canvas."))+"</p>"))})}},hX7l:function(e,t,a){"use strict"
a.d(t,"a",function(){return r})
var n=a("ODXe")
var i=a("cuKi")
var o={true:true,false:false,null:null}
function r(e,t){if(!e||"boolean"===typeof e){var a=window.location.search
if(!a)return{}
return r.apply(void 0,[a].concat(Array.prototype.slice.call(arguments)))}var s={}
e.replace(/\+/g," ").split("&").forEach(function(e){var a=e.split("="),i=Object(n["a"])(a,2),r=i[0],u=i[1]
r=decodeURIComponent(r)
u=decodeURIComponent(u)
t&&(u=u&&!isNaN(u)?+u:"undefined"===u?void 0:void 0!==o[u]?o[u]:u)
s[r]=u})
return Object(i["a"])(s)}},rnoQ:function(e,t,a){"use strict"
var n=a("pQTu")
var i=a("m0r6")
Object(i["a"])(JSON.parse('{"en-AU":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Keyboard Shortcuts"}}},"en-AU-x-unimelb":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Keyboard Shortcuts"}}},"en-CA":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Keyboard Shortcuts"}}},"en-GB":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Keyboard shortcuts"}}},"en-GB-x-ukhe":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Keyboard shortcuts"}}},"is":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Flýtilyklar"}}},"mi":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Pokatata papapātuhi"}}},"ru":{"KeyboardNavDialog":{"titles":{"keyboard_shortcuts":"Клавиши быстрого доступа"}}}}'))
a("jQeR")
a("0sPK")
var o=n["default"].scoped("KeyboardNavDialog")
var r=a("FIFq")
var s=a("ouhR")
var u=a.n(s)
a("YGE8")
var m=function(e,t){for(var a in t)l.call(t,a)&&(e[a]=t[a])
function n(){this.constructor=e}n.prototype=t.prototype
e.prototype=new n
e.__super__=t.prototype
return e},l={}.hasOwnProperty
t["a"]=function(e){m(t,e)
function t(){return t.__super__.constructor.apply(this,arguments)}t.prototype.el="#keyboard_navigation"
t.prototype.initialize=function(){t.__super__.initialize.apply(this,arguments)
this.bindOpenKeys
return this}
t.prototype.render=function(e){this.$el.html(e)
return this}
t.prototype.bindOpenKeys=function(){var e
e=null
return u()(document).keydown((t=this,function(a){var n
n=188===a.keyCode||191===a.keyCode
if(n&&!u()(a.target).is(":input")){a.preventDefault()
if(!t.$el.is(":visible")){e=document.activeElement
return t.$el.dialog({title:o.t("titles.keyboard_shortcuts","Keyboard Shortcuts"),width:400,height:"auto",close:function(){u()("li",this).attr("tabindex","")
if(e)return u()(e).focus()}})}t.$el.dialog("close")
if(e)return u()(e).focus()}}))
var t}
return t}(r["View"])}}])

//# sourceMappingURL=109-c-a2bedf018e.js.map