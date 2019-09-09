(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[23],{"21i1":function(e,t,n){"use strict"
var i=n("yiTI")
var r=n("xe+K")
function o(e,t,n,i){var r=!n
var o=r?t:"function"===typeof i?i:t[n]
return o}var a=n("ouhR")
var s=n.n(a)
var c=!ENV.use_rce_enhancements&&n("rkWX").default
function l(e,t,n){e.css("display","none")
var o=t.onFocus
t.onFocus=function(){ENV.use_rce_enhancements||g.showSidebar()
o instanceof Function&&o.apply(void 0,arguments)}
i["a"].loadOnTarget(e,t,function(t,i){var o=b(e)
var a=_(s()(t))
a.data("remoteEditor",i)
o.trigger(r["a"],i)
n&&n(i)})}function d(e){var t=b(e)
var n=t.attr("id")
var i="tinymce-parent-of-".concat(n)
if(t.parent().attr("id")!==i)return t.wrap("<div id='".concat(i,"' style='visibility: hidden'></div>"))}function u(){s()(".mce-resizehandle").attr("aria-hidden",true)}var h=0
function f(){return"random_editor_id_".concat(h++)}function p(e){var t=s()(e)
var n="attr"in t?t.attr("id"):t.id
n&&""!=n||t.attr("id",f())}function _(e){var t=b(e)
var n=t.attr("id")
if(!n||""==n)return t
var i=s()("#".concat(n))
if(i.length<=0)return t
return i}var m="with the new RCE you don't need to call this method, it is a no op since there is no sidebar"
var g={preloadRemoteModule:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){}
return i["a"].preload(e)},initSidebar:o(m,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
ENV.use_rce_enhancements||c.init(e)}),showSidebar:o(m,function(){ENV.use_rce_enhancements||c.show()}),hideSidebar:o(m,function(){ENV.use_rce_enhancements||c.hide()}),loadNewEditor:function(e){var t=this
var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
var i=arguments.length>2?arguments[2]:void 0
var r=b(e)
if(r.length<=0)return
p(r)
n=s.a.extend({},n)
var o=function(e){n.focus&&t.activateRCE(r)
i&&i(e)}
r=this.freshNode(r)
if(n.manageParent){delete n.manageParent
d(r)}l(r,n,o)
u()},callOnRCE:function(e,t){var n=b(e)
n=this.freshNode(n)
for(var i=arguments.length,o=new Array(i>2?i-2:0),a=2;a<i;a++)o[a-2]=arguments[a]
return r["d"].apply(void 0,[n,t].concat(o))},destroyRCE:function(e){var t=b(e)
t=this.freshNode(t)
Object(r["b"])(t)
ENV.use_rce_enhancements||c.hide()},activateRCE:function(e){var t=b(e)
t=this.freshNode(t)
Object(r["c"])(t)
ENV.use_rce_enhancements||c.show()},freshNode:_,ensureID:p}
function b(e){return e.length?e:s()(e)}t["a"]=g},Cvk5:function(e,t,n){"use strict"
n.r(t)
var i=n("1OyB")
var r=n("vuIU")
var o=n("pQTu")
var a=n("m0r6")
Object(a["a"])(JSON.parse('{"ar":{"editor_accessibility":{"accessibles":{"background_color":"لون الخلفية، اضغط لأسفل للتحديد","forecolor":"لون النص، اضغط لأسفل للتحديد"},"titles":{"font_size":"حجم الخط، اضغط لأسفل للتحديد","formatting":"التنسيق، اضغط لأسفل للتحديد","rte_help":"منطقة نص منسق. اضغط على ALT+F8 للمساعدة"}},"rich_content_editor_2708ef21":"Rich Content Editor"},"cy":{"editor_accessibility":{"accessibles":{"background_color":"Lliw\'r Cefndir, pwyswch i lawr i ddewis","forecolor":"Lliw\'r Testun, pwyswch i lawr i ddewis"},"titles":{"font_size":"Maint y Ffont, pwyswch i lawr i ddewis","formatting":"Fformat, pwyswch i lawr i ddewis","rte_help":"Ardal Testun Cyfoethog. Pwyswch ALT+F8 i gael help"}},"rich_content_editor_2708ef21":"Golygydd Cynnwys Cyfoethog"},"da":{"editor_accessibility":{"accessibles":{"background_color":"Baggrundsfarve, tryk ned for at vælge","forecolor":"Tekstfarve, tryk ned for at vælge"},"titles":{"font_size":"Skriftstørrelse, tryk ned for at vælge","formatting":"Formatering, tryk ned for at vælge","rte_help":"Område med RTF. Tryk på ALT+F8 for hjælp"}},"rich_content_editor_2708ef21":"Rich Content Editor"},"da-x-k12":{"editor_accessibility":{"accessibles":{"background_color":"Baggrundsfarve, tryk ned for at vælge","forecolor":"Tekstfarve, tryk ned for at vælge"},"titles":{"font_size":"Skriftstørrelse, tryk ned for at vælge","formatting":"Formatering, tryk ned for at vælge","rte_help":"Område med RTF. Tryk på ALT+F8 for hjælp"}},"rich_content_editor_2708ef21":"Rich Content Editor"},"de":{"editor_accessibility":{"accessibles":{"background_color":"Hintergrundfarbe, zum Auswählen Pfeil-nach-unten drücken","forecolor":"Textfarbe, zum Auswahlen Pfeil-nach-unten drücken"},"titles":{"font_size":"Schriftgröße, zum Auswählen Pfeil-nach-unten drücken","formatting":"Formatierung, zum Auswählen Pfeil-nach-unten drücken","rte_help":"Rich Text-Bereich. Für Hilfe \\u003cAlt\\u003e+F8 drücken"}},"rich_content_editor_2708ef21":"Rich-Content-Editor"},"el":{"editor_accessibility":{"accessibles":{"background_color":"Χρώμα Φόντου, πιέστε για επιλογή","forecolor":"Χρώμα Κειμένου, πιέστε για επιλογή"},"titles":{"font_size":"Μέγεθος Γραμματοσειράς, πιέστε για επιλογή","formatting":"Μορφοποίηση, πατήστε κάτω για επιλογή","rte_help":"\\u003cmrk mid=\\"6144\\" mtype=\\"seg\\"\\u003eΠεριοχή Rich Text.\\u003c/mrk\\u003e \\u003cmrk mid=\\"6145\\" mtype=\\"seg\\"\\u003eΠατήστε ALT+F8 για βοήθεια\\u003c/mrk\\u003e"}},"rich_content_editor_2708ef21":"Επεξεργαστής Πλούσιου Περιεχομένου-rich content"},"en-AU":{"editor_accessibility":{"accessibles":{"background_color":"Background Colour, press down to select","forecolor":"Text Colour, press down to select"},"titles":{"font_size":"Font Size, press down to select","formatting":"Formatting, press down to select","rte_help":"Rich Text Area. Press ALT+F8 for help."}},"rich_content_editor_2708ef21":"Rich Content Editor"},"en-AU-x-unimelb":{"editor_accessibility":{"accessibles":{"background_color":"Background Colour, press down to select","forecolor":"Text Colour, press down to select"},"titles":{"font_size":"Font Size, press down to select","formatting":"Formatting, press down to select","rte_help":"Rich Text Area. Press ALT+F8 for help."}},"rich_content_editor_2708ef21":"Rich Content Editor"},"en-CA":{"editor_accessibility":{"accessibles":{"background_color":"Background Color, press down to select","forecolor":"Text Color, press down to select"},"titles":{"font_size":"Font Size, press down to select","formatting":"Formatting, press down to select","rte_help":"Rich Text Area. Press ALT+F8 for help"}},"rich_content_editor_2708ef21":"Rich Content Editor"},"en-GB":{"editor_accessibility":{"accessibles":{"background_color":"Background colour. Press down to select","forecolor":"Text colour. Press down to select"},"titles":{"font_size":"Font size. Press down to select","formatting":"Formatting. Press down to select","rte_help":"Rich Text Area. Press ALT+F8 for help"}},"rich_content_editor_2708ef21":"Rich Content Editor"},"en-GB-x-lbs":{"editor_accessibility":{"accessibles":{"background_color":"Background colour. Press down to select","forecolor":"Text colour. Press down to select"},"titles":{"font_size":"Font size. Press down to select","formatting":"Formatting. Press down to select","rte_help":"Rich Text Area. Press ALT+F8 for help"}},"rich_content_editor_2708ef21":"Rich Content Editor"},"en-GB-x-ukhe":{"editor_accessibility":{"accessibles":{"background_color":"Background colour. Press down to select","forecolor":"Text colour. Press down to select"},"titles":{"font_size":"Font size. Press down to select","formatting":"Formatting. Press down to select","rte_help":"Rich Text Area. Press ALT+F8 for help"}},"rich_content_editor_2708ef21":"Rich Content Editor"},"es":{"editor_accessibility":{"accessibles":{"background_color":"Color de fondo, pulse abajo para seleccionar","forecolor":"Color de texto, pulse abajo para seleccionar"},"titles":{"font_size":"Tamaño del texto, pulse abajo para seleccionar","formatting":"Formato, pulse abajo para seleccionar","rte_help":"Área del texto enriquecido. Presione ALT+F8 para ayuda"}},"rich_content_editor_2708ef21":"Editor de contenido enriquecido"},"fa":{"editor_accessibility":{"accessibles":{"background_color":"رنگ پس زمینه، کلید down را برای انتخاب فشار دهید","forecolor":"رنگ متن، کلید down را برای انتخاب فشار دهید"},"titles":{"font_size":"اندازه قلم، کلید down را برای انتخاب فشار دهید","formatting":"در حال قالب بندی، کلید down را برای انتخاب فشار دهید","rte_help":"قسمت دارای متن غنی. ALT+F8 را برای راهنمایی فشار دهید."}},"rich_content_editor_2708ef21":"ویرایشگر محتوای غنی"},"fi":{"editor_accessibility":{"accessibles":{"background_color":"Taustaväri, valitse painamalla alas","forecolor":"Tekstin väri, valitse painamalla alas"},"titles":{"font_size":"Fontin koko, valitse painamalla alas","formatting":"Muotoilu, valitse painamalla alas","rte_help":"RTF-muoto Ohjeet painamalla ALT+F8"}},"rich_content_editor_2708ef21":"Rikas sisältöeditori"},"fr":{"editor_accessibility":{"accessibles":{"background_color":"Couleur de fond. Appuyez pour sélectionner.","forecolor":"Couleur du texte. Appuyez pour sélectionner."},"titles":{"font_size":"Taille du texte. Appuyez pour sélectionner.","formatting":"Mise en forme. Appuyez pour sélectionner.","rte_help":"Zone de texte enrichi. Presser ALT+F8 pour obtenir de l\'aide"}},"rich_content_editor_2708ef21":"Éditeur de texte enrichi"},"fr-CA":{"editor_accessibility":{"accessibles":{"background_color":"Couleur de fond. Appuyez pour sélectionner.","forecolor":"Couleur du texte. Appuyez pour sélectionner."},"titles":{"font_size":"Taille du texte. Appuyez pour sélectionner.","formatting":"Mise en forme. Appuyez pour sélectionner.","rte_help":"Zone de texte enrichi. Presser ALT+F8 pour obtenir de l\'aide"}},"rich_content_editor_2708ef21":"Éditeur de texte enrichi"},"he":{"editor_accessibility":{"accessibles":{"background_color":"צבע רקע, יש להקיש כדי לבחור","forecolor":"צבע טקסט, יש להקיש כדי לבחור"},"titles":{"font_size":"גודל אות, יש להקיש כדי לבחור","formatting":"עיצוב, יש להקיש כדי לבחור","rte_help":"איזור תוכן עשיר. יש להקיש ALT+F8 לעזרה"}},"rich_content_editor_2708ef21":"עורך תוכן עשיר"},"ht":{"editor_accessibility":{"accessibles":{"background_color":"Koulè Fon, peze anba pou ka seleksyone","forecolor":"Koulè Tèks, peze anba pou ka seleksyone"},"titles":{"font_size":"Gwosè Tèks, peze anba pou ka seleksyone","formatting":"Fòmataj, peze anba pou ka seleksyone","rte_help":"Zòn Tèks Rich. Peze ALT+F8 pou èd"}},"rich_content_editor_2708ef21":"Editè Kontni Rich"},"hu":{"editor_accessibility":{"accessibles":{"background_color":"Háttérszín, nyomja le a kiválasztáshoz","forecolor":"Szövegszín, nyomja le a kiválasztáshoz"},"titles":{"font_size":"Betűméret, nyomja le a kiválasztáshoz","formatting":"Formázás, nyomja le a kiválasztáshoz","rte_help":"Vizuális szövegterület, nyomja le az ALT+F8-at a segítséghez"}},"rich_content_editor_2708ef21":"Vizuális szövegszerkesztő"},"hy":{"editor_accessibility":{"accessibles":{"background_color":"Ֆոնի գույն, ընտրելու համար սեղմեք ներքև","forecolor":"Տեքստի գույն, ընտրելու համար սեղմեք ներքև"},"titles":{"font_size":"Տառերի չափ, ընտրելու համար սեղմեք ներքև","formatting":"Ֆորմատավորում, ընտրելու համար սեղմեք ներքև","rte_help":"Ֆորմատավորված տեքստի դաշտ, տեղեկությունների համար սեղմել ALT+F8 "}},"rich_content_editor_2708ef21":"Ֆորմատավորված տեքստի խմբագիր"},"is":{"editor_accessibility":{"accessibles":{"background_color":"Bakgrunnslitur, ýttu á niðurör til að velja","forecolor":"Textalitur, ýttu á niðurör til að velja"},"titles":{"font_size":"Stafastærð, ýttu á niðurör til að velja","formatting":"Forsníð, ýttu á niðurör til að velja","rte_help":"Mótað textasvæði. Ýttu á ALT+F8 til að fá hjálp"}},"rich_content_editor_2708ef21":"Rich Content ritill"},"it":{"editor_accessibility":{"accessibles":{"background_color":"Colore sfondo, premi per selezionare","forecolor":"Colore testo, premi per selezionare"},"titles":{"font_size":"Dimensioni carattere, premi per selezionare","formatting":"Formattazione, premi per selezionare","rte_help":"Area di testo RTF. Premi ALT+F8 per la Guida"}},"rich_content_editor_2708ef21":"Editor di contenuti avanzati"},"ja":{"editor_accessibility":{"accessibles":{"background_color":"背景色、押して選択","forecolor":"テキスト色、押して選択"},"titles":{"font_size":"フォント サイズ、押して選択","formatting":"書式設定、押して選択","rte_help":"リッチテキストエリア。ヘルプへは、ALT+F8を押してください"}},"rich_content_editor_2708ef21":"リッチ コンテンツ エディタ"},"ko":{"editor_accessibility":{"accessibles":{"background_color":"배경색, 선택하려면 누름","forecolor":"텍스트 색, 선택하려면 누름"},"titles":{"font_size":"글자 크기, 선택하려면 누름","formatting":"서식, 선택하려면 누름","rte_help":"Rich Text Area. Press ALT+F8 for help"}}},"mi":{"editor_accessibility":{"accessibles":{"background_color":"Tae Papamuri, ki te pēhi ki raro tīpako","forecolor":"Tae Kuputuhi, ki te pēhi ki raro tīpako"},"titles":{"font_size":"Rahi Momotuhi, ki te pēhi ki raro tīpako","formatting":"Whakahōputu, ki te pēhi ki raro tīpako","rte_help":"Horahanga Kupu Taunaki. Pēhi ALT + K8 no te tauturu"}},"rich_content_editor_2708ef21":"Ētita Ihirangi Whai Rawa"},"nb":{"editor_accessibility":{"accessibles":{"background_color":"Bakgrunnsfarge, trykk nedover for å velge","forecolor":"Tekstfarge, trykk nedover for å velge"},"titles":{"font_size":"Skriftstørrelse, trykk nedover for å velge","formatting":"Formatering, trykk nedover for å velge","rte_help":"Riktekstområde. Trykk ALT+F8 for hjelp"}},"rich_content_editor_2708ef21":"Rich innholdsredigering"},"nb-x-k12":{"editor_accessibility":{"accessibles":{"background_color":"Bakgrunnsfarge, trykk nedover for å velge","forecolor":"Tekstfarge, trykk nedover for å velge"},"titles":{"font_size":"Skriftstørrelse, trykk nedover for å velge","formatting":"Formatering, trykk nedover for å velge","rte_help":"Riktekstområde. Trykk ALT+F8 for hjelp"}},"rich_content_editor_2708ef21":"Rich innholdsredigering"},"nl":{"editor_accessibility":{"accessibles":{"background_color":"Achtergrondkleur, er op drukken om een optie te selecteren","forecolor":"Tekstkleur, er op drukken om een optie te selecteren"},"titles":{"font_size":"Tekstkleur, er op drukken om een optie te selecteren","formatting":"Opmaak, er op drukken om een optie te selecteren","rte_help":"Rich Text Area. Druk ALT+F8 voor hulp"}},"rich_content_editor_2708ef21":"Rich Content Editor"},"nn":{"editor_accessibility":{"accessibles":{"background_color":"Bakgrunnsfarge, trykk ned for å velje","forecolor":"Tekstfarge, trykk ned for å velje"},"titles":{"font_size":"Skriftstorleik, trykk ned for å velje","formatting":"Formatering, trykk ned for å velje","rte_help":"Område for rikt tekstformat. Trykk ALT+F8 for hjelp"}},"rich_content_editor_2708ef21":"Redigeringsprogram for rikt innhald"},"pl":{"editor_accessibility":{"accessibles":{"background_color":"Kolor tła; naciskaj do dołu, aby wybrać","forecolor":"Kolor tekstu; naciskaj do dołu, aby wybrać"},"titles":{"font_size":"Rozmiar czcionki; naciskaj do dołu, aby wybrać","formatting":"Formatowanie; naciskaj do dołu, aby wybrać","rte_help":"Obszar Rich Text. Wciśnij ALT+F8 po pomoc"}},"rich_content_editor_2708ef21":"Edytor wzbogaconej zawartości"},"pt":{"editor_accessibility":{"accessibles":{"background_color":"Cor de fundo, premir para baixo para selecionar","forecolor":"Cor do texto, premir para baixo para selecionar"},"titles":{"font_size":"Tamanho da letra, premir para baixo para selecionar","formatting":"Formatação, premir para baixo para selecionar","rte_help":"Área Rich Text. Pressione ALT+F8 para ajuda"}},"rich_content_editor_2708ef21":"Editor de conteúdo avançado"},"pt-BR":{"editor_accessibility":{"accessibles":{"background_color":"Cor de fundo, pressione para selecionar","forecolor":"Cor do texto, pressione para selecionar"},"titles":{"font_size":"Tamanho da fonte, pressione para selecionar","formatting":"Formatação, pressione para selecionar","rte_help":"Área de Texto Rico. Pressione ALT + F8 para obter ajuda"}},"rich_content_editor_2708ef21":"Editor de conteúdo de rich text"},"ru":{"editor_accessibility":{"accessibles":{"background_color":"Цвет фона, нажмите стрелку вниз, чтобы выбрать","forecolor":"Цвет текста, нажмите стрелку вниз, чтобы выбрать"},"titles":{"font_size":"Размер шрифта, нажмите стрелку вниз, чтобы выбрать","formatting":"Форматирование, нажмите стрелку вниз, чтобы выбрать","rte_help":"Область форматированного текста. Нажмите ALT + F8 для справки"}},"rich_content_editor_2708ef21":"Редактор форматированного текста"},"sl":{"editor_accessibility":{"accessibles":{"background_color":"Barva ozadja; za izbiro pritisnite navzdol.","forecolor":"Barva besedila; za izbiro pritisnite navzdol."},"titles":{"font_size":"Velikost pisave; za izbiro pritisnite navzdol.","formatting":"Oblikovanje; za izbiro pritisnite navzdol.","rte_help":"Območje besedila Za pomoč pritisnite ALT+F8."}},"rich_content_editor_2708ef21":"Urejevalnik"},"sv":{"editor_accessibility":{"accessibles":{"background_color":"Bakgrundsfärg, tryck ner för att välja","forecolor":"Textfärg, tryck ner för att välja"},"titles":{"font_size":"Typsnittsstorlek, trycker ner för att välja","formatting":"Formatering, tryck ner för att välja","rte_help":"Rik text-område. Tryck ALT+F8 för hjälp"}},"rich_content_editor_2708ef21":"Innehållsredigerare"},"sv-x-k12":{"editor_accessibility":{"accessibles":{"background_color":"Bakgrundsfärg, tryck ner för att välja","forecolor":"Textfärg, tryck ner för att välja"},"titles":{"font_size":"Typsnittsstorlek, trycker ner för att välja","formatting":"Formatering, tryck ner för att välja","rte_help":"Rik text-område. Tryck ALT+F8 för hjälp"}},"rich_content_editor_2708ef21":"Innehållsredigerare"},"tr":{"editor_accessibility":{"accessibles":{"background_color":"Arkaplan rengi, aşağı tuşa basın ve seçin","forecolor":"Yazı rengi, aşağı tuşa basın ve seçin"},"titles":{"font_size":"Yazı büyüklüğü, aşağı tuşa basın ve seçin","formatting":"Format, aşağı tuşa basın ve seçin","rte_help":"Zengin Metin Alanı. Yardım için ALT+F8 e basın"}},"rich_content_editor_2708ef21":"Zengin İçerik Editörü"},"uk":{"editor_accessibility":{"accessibles":{"background_color":"Колір фону, натисніть внизу, щоб обрати","forecolor":"Колір тексту, натисніть внизу, щоб обрати"},"titles":{"font_size":"Розмір шрифту, натисніть внизу, щоб обрати","formatting":"Форматування, натисніть внизу, щоб вибрати","rte_help":"Багатофункціональна область тексту. Натисніть ALT+F8 для довідки"}},"rich_content_editor_2708ef21":"Покращений редактор контенту"},"zh-Hans":{"editor_accessibility":{"accessibles":{"background_color":"背景颜色，按下即可选择","forecolor":"文本颜色，按下即可选择"},"titles":{"font_size":"字体大小，按下即可选择","formatting":"格式，按下即可选择","rte_help":"富文本区域，按 Alt+ F8 寻求帮助"}},"rich_content_editor_2708ef21":"富内容编辑器"},"zh-Hant":{"editor_accessibility":{"accessibles":{"background_color":"背景顏色，按下以選擇","forecolor":"文字顏色，按下以選擇"},"titles":{"font_size":"字體大小，按下以選擇","formatting":"格式化，按下以選擇","rte_help":"富文本區域。按 ALT+F8 求助"}},"rich_content_editor_2708ef21":"富內容編輯器"}}'))
n("jQeR")
n("0sPK")
var s=o["default"].scoped("editor_accessibility")
var c=n("ouhR")
var l=n.n(c)
n.d(t,"default",function(){return d})
var d=function(){function e(t){Object(i["a"])(this,e)
this.editor=t
this.id_prepend=t.id
this.$el=l()("#".concat(t.editorContainer.id))}Object(r["a"])(e,[{key:"accessiblize",value:function(){this._cacheElements()
this._addTitles()
this._addLabels()
this._accessiblizeMenubar()
this._removeStatusbarFromTabindex()}},{key:"_cacheElements",value:function(){this.$iframe=this.$el.find(".mce-edit-area iframe")}},{key:"_addLabels",value:function(){this.$el.attr("aria-label",s.t("Rich Content Editor"))
l()(this.editor.getBody()).attr("aria-label",l()('label[for="'.concat(this.id_prepend,'"]')).text())
this.$el.find("div[aria-label='Font Sizes']").attr("aria-label",s.t("titles.font_size","Font Size, press down to select"))
this.$el.find("div.mce-listbox.mce-last:not([aria-label])").attr("aria-label",s.t("titles.formatting","Formatting, press down to select"))
this.$el.find("div[aria-label='Text color']").attr("aria-label",s.t("accessibles.forecolor","Text Color, press down to select"))
this.$el.find("div[aria-label='Background color'").attr("aria-label",s.t("accessibles.background_color","Background Color, press down to select"))}},{key:"_addTitles",value:function(){this.$iframe.attr("title",s.t("titles.rte_help","Rich Text Area. Press ALT+F8 for help"))}},{key:"_accessiblizeMenubar",value:function(){var e=this
var t=this.$el.find(".mce-menubar")
var n=t.find(".mce-menubtn").first()
t.hide()
this.editor.addShortcut("Alt+F9","",function(){t.show()
n.focus()
e.editor.addShortcut("Alt+F9","",function(){return n.focus()})})}},{key:"_removeStatusbarFromTabindex",value:function(){var e=this.$el.find(".mce-statusbar > .mce-container-body")
e.attr("tabindex",-1)}}])
return e}()},rkWX:function(e,t,n){"use strict"
n.r(t)
var i=n("ouhR")
var r=n.n(i)
var o=n("yiTI")
function a(e){o["a"].loadSidebarOnTarget(r()("#editor_tabs").get(0),e)}var s={instance:void 0,pendingShow:false,initializing:false,subscriptions:{},init:function(){var e=this
var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
if(!this.instance&&!this.initializing){this.initializing=true
var n=function(t){e.initializing=false
e.instance=t
e.pendingShow&&e.show()}
a(n)}this.subscriptions=t},show:function(){if(this.instance){this.instance.show()
this.subscriptions.show&&this.subscriptions.show()}else this.pendingShow=true},hide:function(){if(this.instance){this.instance.hide()
this.subscriptions.hide&&this.subscriptions.hide()}else this.pendingShow=false},reset:function(){this.instance=void 0
this.initializing=false
this.subscriptions={}}}
t["default"]=s},yiTI:function(e,t,n){"use strict"
var i=n("rePB")
var r=n("ouhR")
var o=n.n(r)
var a=n("GLiE")
var s=n.n(a)
var c=n("x1Tw")
function l(e){var t=e
var n=null
return function(e){null===n&&(n=c["default"].post("/api/v1/jwts/refresh",{jwt:t}).then(function(e){n=null
t=e.data.token
return t}))
"function"===typeof e&&n.then(e)
return n}}var d=n("1OyB")
var u=n("vuIU")
var h=n("HIhM")
var f=function(){function e(t,n,i,r){Object(d["a"])(this,e)
this.formatBtnGroup="bold italic underline forecolor backcolor removeformat alignleft aligncenter alignright"
this.positionBtnGroup="outdent indent superscript subscript bullist numlist"
this.fontBtnGroup="ltr rtl fontsizeselect formatselect check_a11y"
this.baseURL=t.baseURL
this.maxButtons=n.maxVisibleEditorButtons
this.extraButtons=n.editorButtons
this.instConfig=n
this.viewportWidth=i
this.idAttribute=r}Object(u["a"])(e,[{key:"defaultConfig",value:function(){var e
return e={selector:"#".concat(this.idAttribute),toolbar:this.toolbar()},Object(i["a"])(e,!window.ENV.use_rce_enhancements&&"theme","modern"),Object(i["a"])(e,!window.ENV.use_rce_enhancements&&"skin",false),Object(i["a"])(e,"directionality",Object(h["b"])()),Object(i["a"])(e,"plugins","autolink,media,paste,table,lists,".concat(window.ENV.use_rce_enhancements?",instructure-context-bindings,instructure-ui-icons,instructure_condensed_buttons, instructure_documents":"textcolor",",link,directionality,a11y_checker,wordcount")),Object(i["a"])(e,"external_plugins",{instructure_image:"/javascripts/tinymce_plugins/instructure_image/plugin.js",instructure_links:"/javascripts/tinymce_plugins/instructure_links/plugin.js",instructure_embed:"/javascripts/tinymce_plugins/instructure_embed/plugin.js",instructure_equation:"/javascripts/tinymce_plugins/instructure_equation/plugin.js",instructure_external_tools:"/javascripts/tinymce_plugins/instructure_external_tools/plugin.js",instructure_record:"/javascripts/tinymce_plugins/instructure_record/plugin.js"}),Object(i["a"])(e,"language_load",false),Object(i["a"])(e,"convert_urls",false),Object(i["a"])(e,"menubar",true),Object(i["a"])(e,"branding",false),Object(i["a"])(e,"remove_script_host",true),Object(i["a"])(e,"resize",true),Object(i["a"])(e,"block_formats","Paragraph=p;Header 2=h2;Header 3=h3;Header 4=h4;Preformatted=pre"),Object(i["a"])(e,"extended_valid_elements","@[id|accesskey|class|dir|lang|style|tabindex|title|contenteditable|contextmenu|draggable|dropzone|hidden|longdesc|spellcheck|translate|align|role|aria-labelledby|aria-atomic|aria-busy|aria-controls|aria-describedby|aria-disabled|aria-dropeffect|aria-flowto|aria-grabbed|aria-haspopup|aria-hidden|aria-invalid|aria-label|aria-labelledby|aria-live|aria-owns|aria-relevant|aria-autocomplete|aria-checked|aria-disabled|aria-expanded|aria-haspopup|aria-hidden|aria-invalid|aria-label|aria-level|aria-multiline|aria-multiselectable|aria-orientation|aria-pressed|aria-readonly|aria-required|aria-selected|aria-sort|aria-valuemax|aria-valuemin|aria-valuenow|aria-valuetext],iframe[src|width|height|name|align|style|class|sandbox|allowfullscreen|webkitallowfullscreen|mozallowfullscreen|allow],i[iclass],a[hidden|href|target|rel|media|hreflang|type|charset|name|rev|shape|coords|download|alt],div,span,#p,h2,h3,h4,h5,h6,header,ul,ol,li[value],ol[reversed|start|type|compact],pre[width],abbr,table[border|summary|width|frame|rules|cellspacing|cellpadding|bgcolor],tbody[char|charoff|valign],td[colspan|rowspan|headers|abbr|axis|scope|align|char|charoff|valign|nowrap|bgcolor|width|height],tfoot[char|charoff|valign],th[colspan|rowspan|headers|scope|abbr|axis|align|char|charoff|valign|nowrap|bgcolor|width|height],thead[char|charoff|valign],title,tr[char|charoff|valign|bgcolor],ul[compact],video[name|src|allowfullscreen|muted|poster|width|height|controls|playsinline],audio[name|src|muted|controls],annotation[href|xref|definitionURL|encoding|cd|name|src],annotation-xml[href|xref|definitionURL|encoding|cd|name|src],maction[href|xref|mathcolor|mathbackground|actiontype|selection],maligngroup[href|xref|mathcolor|mathbackground|groupalign],malignmark[href|xref|mathcolor|mathbackground|edge],math[xmlns|href|xref|display|maxwidth|overflow|altimg|altimg-width|altimg-height|altimg-valign|alttext|cdgroup|mathcolor|mathbackground|scriptlevel|displaystyle|scriptsizemultiplier|scriptminsize|infixlinebreakstyle|decimalpoint|mathvariant|mathsize|width|height|valign|form|fence|separator|lspace|rspace|stretchy|symmetric|maxsize|minsize|largeop|movablelimits|accent|linebreak|lineleading|linebreakstyle|linebreakmultchar|indentalign|indentshift|indenttarget|indentalignfirst|indentshiftfirst|indentalignlast|indentshiftlast|depth|lquote|rquote|linethickness|munalign|denomalign|bevelled|voffset|open|close|separators|notation|subscriptshift|superscriptshift|accentunder|align|rowalign|columnalign|groupalign|alignmentscope|columnwidth|rowspacing|columnspacing|rowlines|columnlines|frame|framespacing|equalrows|equalcolumns|side|minlabelspacing|rowspan|columnspan|edge|stackalign|charalign|charspacing|longdivstyle|position|shift|location|crossout|length|leftoverhang|rightoverhang|mslinethickness|selection],menclose[href|xref|mathcolor|mathbackground|notation],merror[href|xref|mathcolor|mathbackground],mfenced[href|xref|mathcolor|mathbackground|open|close|separators],mfrac[href|xref|mathcolor|mathbackground|linethickness|munalign|denomalign|bevelled],mglyph[href|xref|mathcolor|mathbackground|src|alt|width|height|valign],mi[href|xref|mathcolor|mathbackground|mathvariant|mathsize],mlabeledtr[href|xref|mathcolor|mathbackground],mlongdiv[href|xref|mathcolor|mathbackground|longdivstyle|align|stackalign|charalign|charspacing],mmultiscripts[href|xref|mathcolor|mathbackground|subscriptshift|superscriptshift],mn[href|xref|mathcolor|mathbackground|mathvariant|mathsize],mo[href|xref|mathcolor|mathbackground|mathvariant|mathsize|form|fence|separator|lspace|rspace|stretchy|symmetric|maxsize|minsize|largeop|movablelimits|accent|linebreak|lineleading|linebreakstyle|linebreakmultchar|indentalign|indentshift|indenttarget|indentalignfirst|indentshiftfirst|indentalignlast|indentshiftlast],mover[href|xref|mathcolor|mathbackground|accent|align],mpadded[href|xref|mathcolor|mathbackground|height|depth|width|lspace|voffset],mphantom[href|xref|mathcolor|mathbackground],mprescripts[href|xref|mathcolor|mathbackground],mroot[href|xref|mathcolor|mathbackground],mrow[href|xref|mathcolor|mathbackground],ms[href|xref|mathcolor|mathbackground|mathvariant|mathsize|lquote|rquote],mscarries[href|xref|mathcolor|mathbackground|position|location|crossout|scriptsizemultiplier],mscarry[href|xref|mathcolor|mathbackground|location|crossout],msgroup[href|xref|mathcolor|mathbackground|position|shift],msline[href|xref|mathcolor|mathbackground|position|length|leftoverhang|rightoverhang|mslinethickness],mspace[href|xref|mathcolor|mathbackground|mathvariant|mathsize],msqrt[href|xref|mathcolor|mathbackground],msrow[href|xref|mathcolor|mathbackground|position],mstack[href|xref|mathcolor|mathbackground|align|stackalign|charalign|charspacing],mstyle[href|xref|mathcolor|mathbackground|scriptlevel|displaystyle|scriptsizemultiplier|scriptminsize|infixlinebreakstyle|decimalpoint|mathvariant|mathsize|width|height|valign|form|fence|separator|lspace|rspace|stretchy|symmetric|maxsize|minsize|largeop|movablelimits|accent|linebreak|lineleading|linebreakstyle|linebreakmultchar|indentalign|indentshift|indenttarget|indentalignfirst|indentshiftfirst|indentalignlast|indentshiftlast|depth|lquote|rquote|linethickness|munalign|denomalign|bevelled|voffset|open|close|separators|notation|subscriptshift|superscriptshift|accentunder|align|rowalign|columnalign|groupalign|alignmentscope|columnwidth|rowspacing|columnspacing|rowlines|columnlines|frame|framespacing|equalrows|equalcolumns|side|minlabelspacing|rowspan|columnspan|edge|stackalign|charalign|charspacing|longdivstyle|position|shift|location|crossout|length|leftoverhang|rightoverhang|mslinethickness|selection],msub[href|xref|mathcolor|mathbackground|subscriptshift],msubsup[href|xref|mathcolor|mathbackground|subscriptshift|superscriptshift],msup[href|xref|mathcolor|mathbackground|superscriptshift],mtable[href|xref|mathcolor|mathbackground|align|rowalign|columnalign|groupalign|alignmentscope|columnwidth|width|rowspacing|columnspacing|rowlines|columnlines|frame|framespacing|equalrows|equalcolumns|displaystyle|side|minlabelspacing],mtd[href|xref|mathcolor|mathbackground|rowspan|columnspan|rowalign|columnalign|groupalign],mtext[href|xref|mathcolor|mathbackground|mathvariant|mathsize|width|height|depth|linebreak],mtr[href|xref|mathcolor|mathbackground|rowalign|columnalign|groupalign],munder[href|xref|mathcolor|mathbackground|accentunder|align],munderover[href|xref|mathcolor|mathbackground|accent|accentunder|align],none[href|xref|mathcolor|mathbackground],semantics[href|xref|definitionURL|encoding],mark"),Object(i["a"])(e,"non_empty_elements","td th iframe video audio object script a i area base basefont br col frame hr img input isindex link meta param embed source wbr track"),Object(i["a"])(e,"content_css",window.ENV.url_to_what_gets_loaded_inside_the_tinymce_editor_css),Object(i["a"])(e,"browser_spellcheck",true),Object(i["a"])(e,"init_instance_callback",function(e){$("#".concat(e.id)).parent().css("visibility","visible")}),e}},{key:"external_buttons",value:function(){var e=""
for(var t=0;this.extraButtons&&t<this.extraButtons.length;t++)this.extraButtons.length<=this.maxButtons||t<this.maxButtons-1?e="".concat(e," instructure_external_button_").concat(this.extraButtons[t].id):e.match(/instructure_external_button_clump/)||(e+=" instructure_external_button_clump")
return e}},{key:"buildInstructureButtons",value:function(){var e=" instructure_image instructure_equation".concat(window.ENV.use_rce_enhancements?" lti_tool_dropdown":"")
e+=this.external_buttons()
this.instConfig&&this.instConfig.allowMediaComments&&this.instConfig.kalturaSettings&&!this.instConfig.kalturaSettings.hide_rte_button&&(e+=" instructure_record")
var t=this.instConfig&&this.instConfig.equellaEnabled?" instructure_equella":""
e+=t
return e}},{key:"balanceButtons",value:function(e){var t="table media instructure_links unlink".concat(e)
var n=""
var i=""
var r=""
if(this.viewportWidth<359&&this.viewportWidth>0){n=this.formatBtnGroup
i="".concat(this.positionBtnGroup," ").concat(t)
r=this.fontBtnGroup}else if(this.viewportWidth<1200){n="".concat(this.formatBtnGroup," ").concat(this.positionBtnGroup)
i="".concat(t," ").concat(this.fontBtnGroup)}else n="".concat(this.formatBtnGroup," ").concat(this.positionBtnGroup," ").concat(t," ").concat(this.fontBtnGroup)
return window.ENV.use_rce_enhancements?[n,i,r]:[n,i,r].map(function(e){return e.split(" ").join(",")})}},{key:"toolbar",value:function(){var e=this.buildInstructureButtons()
return this.balanceButtons(e)}}])
return e}()
var p=n("u7Gu")
function _(e,t,i){if(void 0==i)var r=!!p["a"].browser.ie
else r=i
return{auto_focus:t,setup:function(t){var i=o()("#"+t.id)
t.on("keyup",function(e){o()(document).trigger("editorKeyUp",[e])})
t.on("change",function(){i.trigger("change")})
t.on("keyup keydown click mousedown",function(){r&&t.selection&&i.data("last_bookmark",t.selection.getBookmark(1))})
ENV.use_rce_enhancements||t.on("init",function(){var e=function(e){return e.default?e.default:e}
var i=e(n("Cvk5"))
new i(t).accessiblize()})
t.on("init",function(){o()(window).triggerHandler("resize")
o()(t.contentDocument).bind("DOMNodeInserted",function(t){var n,i=t.target
1===i.nodeType&&"IMG"===i.nodeName&&(n=o()(i).data("url"))&&o()(i).attr("src",e.activeEditor.documentBaseURI.toAbsolute(n))})
"onfocusout"in t.contentWindow||o()(t.contentWindow).blur(function(e){if(!t.removed&&t.undoManager.typing){t.undoManager.typing=false
t.undoManager.add()}})})}}}function m(e,t){var n=Object.keys(e)
Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e))
t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))
return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?m(n,true).forEach(function(t){Object(i["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function b(e,t,n,i,r){var o=new f(r,p["a"],e,t)
var a=void 0
return g({},o.defaultConfig(),{},_(r,a,i),{},n.tinyOptions||{})}var v=b
var k=n("An8g")
var y=n("pQTu")
var w=n("m0r6")
Object(w["a"])(JSON.parse('{"en-AU":{"ExternalToolsPlugin":{"more_external_tools":"More External Tools"}},"en-AU-x-unimelb":{"ExternalToolsPlugin":{"more_external_tools":"More External Tools"}},"en-CA":{"ExternalToolsPlugin":{"more_external_tools":"More External Tools"}},"en-GB":{"ExternalToolsPlugin":{"more_external_tools":"More external tools"}},"en-GB-x-ukhe":{"ExternalToolsPlugin":{"more_external_tools":"More external tools"}},"is":{"ExternalToolsPlugin":{"more_external_tools":"Fleiri ytri tæki"}},"mi":{"ExternalToolsPlugin":{"more_external_tools":"Ētahi atu Utauta waho"}},"ru":{"ExternalToolsPlugin":{"more_external_tools":"Больше внешних инструментов"}}}'))
n("jQeR")
n("0sPK")
var x=y["default"].scoped("ExternalToolsPlugin")
var T=n("5Ky4")
o.a.fn.dropdownList=function(e){if(this.length){var t=o()("#instructure_dropdown_list")
if("hide"==e||"remove"==e||t.data("current_dropdown_initiator")==this[0]){t.remove().data("current_dropdown_initiator",null)
return}e=o.a.extend({},o.a.fn.dropdownList.defaults,e)
var n=t.children("div.list")
if(!n.length){t=o()("<div id='instructure_dropdown_list'><div class='list ui-widget-content'></div></div>").appendTo("body")
o()(document).mousedown(function(e){t.data("current_dropdown_initiator")&&!o()(e.target).closest("#instructure_dropdown_list").length&&t.hide().data("current_dropdown_initiator",null)}).mouseup(function(e){if(t.data("current_dropdown_initiator")&&!o()(e.target).closest("#instructure_dropdown_list").length){t.hide()
setTimeout(function(){t.data("current_dropdown_initiator",null)},100)}}).add(this).add(t).keydown(function(e){if(t.data("current_dropdown_initiator")){var n=t.find(".ui-state-hover,.ui-state-active")
if(38==e.keyCode){n.length&&n.prev().length?n.removeClass("ui-state-hover ui-state-active").addClass("minimal").prev().addClass("ui-state-hover").removeClass("minimal").find("span").focus():$item.focus()
return false}if(40==e.keyCode){n.length?n.next().length&&n.removeClass("ui-state-hover ui-state-active").addClass("minimal").next().addClass("ui-state-hover").removeClass("minimal").find("span").focus():t.find(".option:first").addClass("ui-state-hover").removeClass("minimal").find("span").focus()
return false}if(13==e.keyCode&&n.length){n.click()
return false}t.hide().data("current_dropdown_initiator",null)}})
t.find(".option").removeClass("ui-state-hover ui-state-active").addClass("minimal")
t.click(function(e){t.hide().data("current_dropdown_initiator",null)})
n=t.children("div.list")}t.data("current_dropdown_initiator",this[0])
e.width&&t.width(e.width)
e.height&&t.find(".list").css("maxHeight",e.height)
n.empty()
o.a.each(e.options,function(e,t){var i=o()("<div class='option minimal' style='cursor: pointer; padding: 2px 5px; overflow: hidden; white-space: nowrap;'>  <span tabindex='-1'>"+e+"</span></div>").appendTo(n)
function r(){i.parent().find("div.option").removeClass("ui-state-hover ui-state-active").addClass("minimal")}o.a.isFunction(t)?i.addClass("ui-state-default").bind({mouseenter:function(){r()
i.addClass("ui-state-hover").removeClass("minimal")},mouseleave:r,mousedown:function(e){e.preventDefault()
r()
i.addClass("ui-state-active").removeClass("minimal")},mouseup:r,click:t}):i.addClass("ui-state-disabled").bind({mousedown:function(e){e.preventDefault()}})})
var i=this.offset(),r=this.outerHeight()
this.outerWidth()
t.css({whiteSpace:"nowrap",position:"absolute",top:i.top+r,left:i.left+5,right:""}).hide().show()
t.offset().left+t.width()>o()(window).width()&&t.css({left:"",right:0})}return this}
o.a.fn.dropdownList.defaults={height:250,width:"auto"}
n("JI1W")
var C={buttonConfig:function(e,t){var n={title:e.name,classes:"widget btn instructure_external_tool_button"}
if(ENV.use_rce_enhancements){n.text=n.title
n.onAction=function(){return t.execCommand("instructureExternalButton".concat(e.id))}
n.type="menuitem"}else n.cmd="instructureExternalButton".concat(e.id)
e.canvas_icon_class?n.icon="hack-to-avoid-mce-prefix ".concat(e.canvas_icon_class):n.image=e.icon_url
return n},clumpedButtonMapping:function(e,t,n){return e.reduce(function(e,i){var r
r=i.canvas_icon_class?"<i class='".concat(Object(T["a"])(i.canvas_icon_class),"' data-tool-id='").concat(i.id,"'></i>"):"<img src='".concat(Object(T["a"])(i.icon_url),"' data-tool-id='").concat(i.id,"'/>")
r+="&nbsp;".concat(Object(T["a"])(i.name))
e[r]=function(){n(i,t)}
return e},{})},attachClumpedDropdown:function(e,t,n){e.dropdownList({options:t})
n.on("click",function(){e.dropdownList("hide")})}}
var E=n("mykf")
var z=n("xe+K")
var j=function(e,t){this.id=e.id
this.selectedContent=e.selection.getContent()
this.selectionDetails={node:e.selection.getNode(),range:e.selection.getRng()}
this.$editorEl=t
this.getEditor=function(){if(void 0!==this.$editorEl)return this.$editorEl
return o()("#"+this.id)}
this.createLink=function(e,t,n){Object(z["d"])(this.getEditor(),"create_link",{url:e,classes:t,selectedContent:this.selectedContent,dataAttributes:n,selectionDetails:this.selectionDetails})}}
var O=j
var A=n("iklP")
n("YGE8")
n("p6Wi")
var P=function(){function e(){Object(d["a"])(this,e)}Object(u["a"])(e,[{key:"fetchYouTubeTitle",value:function(e,t){var n=ENV.JWT
var i=ENV.RICH_CONTENT_APP_HOST
var r="//".concat(i,"/api/youtube_title?vid_id=").concat(e)
o.a.ajax({headers:{Authorization:"Bearer ".concat(n)},url:r}).success(function(n){n.id===e&&t(n.title)}).error(function(e){t(null,e)})}},{key:"titleYouTubeText",value:function(e){var t=o.a.youTubeID(e.attr("href"))
this.fetchYouTubeTitle(t,function(n,i){if(i){console.error('failed to get video title from youtube for "'.concat(t,'":'),i.responseText)
var r=(+e.attr("data-ytt-failcnt")||0)+1
e.attr("data-ytt-failcnt",r)}else{e.text(n)
e.attr("data-preview-alt",n)}})}}])
return e}()
var R=["instructure_scribd_file"]
var B=["instructure_scribd_file"]
var F=new WeakMap
function L(e){var t=e.closest("img").attr("src")
return"<img src='"+Object(T["a"])(t)+"'/>"}function N(e){e.nodeChanged()
return new O(e)}function S(e,t){var n=e.replace(/(auto_open|inline_disabled)/g,"")
t.find(".auto_show_inline_content").attr("checked")&&(n+=" auto_open")
t.find(".disable_inline_content").attr("checked")&&(n+=" inline_disabled")
return n}function I(e,t,n,i){var r=e.find("#instructure_link_prompt_form")
r.off("submit")
r.on("submit",function(r){r.preventDefault()
r.stopPropagation()
e.data("editor")
var a=o()(this).find(".prompt").val()
var s=e.find(".inst-link-preview-alt input").val()
var c=S(n.call(),e)
var l={"preview-alt":s}
e.dialog("close")
t.createLink(a,c,l)
i.call()})}function D(e){var t=N(e)
var n=t.getEditor()
var i=o()("#instructure_link_prompt")
var r=""
i.removeClass("for_inline_content").find(".disable_enhancement").hide().end().find(".auto_show").hide().end().find(".insert_button").text("Insert Link").end().find(".disable_inline_content").attr("checked",false).end().find(".auto_show_inline_content").attr("checked",false)
if(0==i.length){i=o()(document.createElement("div"))
Object(A["b"])("BookmarkService",function(e){var t=i.data("editor")
var n=o()("<div style='text-align: left; margin-left: 20px;'/>")
var a,s
for(var c in e){a=e[c].user_service
if(a){s=o()("<a href='#' class='bookmark_service no-hover'/>")
s.addClass(a.service)
s.data("service",a)
s.attr("title","Find links using "+a.service)
var l=o()("<img/>")
l.attr("src","/images/"+a.service+"_small_icon.png")
s.append(l)
s.click(function(e){e.preventDefault()
o()("#instructure_link_prompt").dialog("close")
Object(A["a"])(o()(this).data("service").service,function(e){o()("#instructure_link_prompt").dialog("close")
Object(z["d"])(t,"create_link",{title:e.title,url:e.url,classes:r})})})
n.append(s)
n.append("&nbsp;&nbsp;")}}i.find("#instructure_link_prompt_form").after(n)})
i.append("<p><em>This will make the selected text a link, or insert a new link if nothing is selected.</em></p> <label for='instructure_link_prompt_form_input'>Paste or type a url or wiki page in the box below:</label><form id='instructure_link_prompt_form' class='form-inline'><input type='text' id='instructure_link_prompt_form_input' class='prompt' class='btn' value='http://'/> <button type='submit' class='insert_button btn'>Insert Link</button></form>").append("<div class='actions'></div><div class='clear'></div>").append('<div class="inst-link-preview-alt" style="display: none;"><label>Alt text for inline preview: <input type="text" style="display: block;" /></label></div>').append("<div class='disable_enhancement' style='display: none;'><input type='checkbox' class='disable_inline_content' id='disable_inline_content'/><label for='disable_inline_content'> Disable inline previews for this link</label></div>").append("<div class='auto_show' style='display: none;'><input type='checkbox' class='auto_show_inline_content' id='auto_show_inline_content'/><label for='auto_show_inline_content'> Auto-open the inline preview for this link</label></div>")
i.find(".disable_inline_content").change(function(){o()(this).attr("checked")&&i.find(".auto_show_inline_content").attr("checked",false)
i.find(".auto_show").showIf(!o()(this).attr("checked")&&i.hasClass("for_inline_content_can_auto_show"))})
i.find(".actions").delegate(".embed_image_link","click",function(e){var t=i.data("editor")
var n=o()(e.target)
e.preventDefault()
Object(z["d"])(t,"insert_code",L(n))
i.dialog("close")})
i.find(".actions").delegate(".embed_youtube_link","click",function(e){e.preventDefault()
i.find("#instructure_link_prompt_form").triggerHandler("submit")})
i.find("#instructure_link_prompt_form .prompt").bind("change keyup",function(){var e=i.find(".inst-link-preview-alt")
e.hide()
o()("#instructure_link_prompt .actions").empty()
var t=o()(this).val()
var n=i.data("original_data")
if(n&&t==n.url){i.toggleClass("for_inline_content",n.for_inline_content).toggleClass("for_inline_content_can_auto_show",n.for_inline_content_can_auto_show).find(".disable_enhancement").showIf(n.for_inline_content).end().find(".auto_show").showIf(n.for_inline_content_can_auto_show)
r=n.prior_classes}else{i.removeClass("for_inline_content").removeClass("for_inline_content_can_auto_show")
var a=new RegExp("("+R.join("|")+")","g")
r=r.replace(a,"")}var s=!i.hasClass("for_inline_content")
var c=!i.hasClass("for_inline_content_can_auto_show")
if(t.match(/\.(gif|png|jpg|jpeg)$/)){var l=o()(document.createElement("div"))
l.css("textAlign","center")
var d=o()(document.createElement("img"))
d.attr("src",t)
d.addClass("embed_image_link")
d.css("cursor","pointer")
var u=new Image
u.src=t
var h=function e(){u.complete?(u.height<100||u.height>100&&u.height<200)&&d.height(u.height):setTimeout(e,500)}
setTimeout(h,500)
d.height(100)
d.attr("title","Click to Embed the Image")
l.append(d)
o()("#instructure_link_prompt .actions").append(l)}else if(t.match(INST.youTubeRegEx)){e.show()
var f=o.a.youTubeID(t)
l=o()(document.createElement("div"))
l.css("textAlign","center")
!i.find(".disable_inline_content").attr("checked")&&i.hasClass("for_inline_content_can_auto_show")&&i.find(".auto_show").show()
s=false
i.find(".disable_enhancement").show()
d=o()(document.createElement("img"))
d.attr("src","http://img.youtube.com/vi/"+f+"/2.jpg")
d.css({paddingLeft:100,background:"url(/images/youtube_logo.png) no-repeat left center",height:90,display:"inline-block"})
d.attr("alt",t)
d.addClass("embed_youtube_link")
d.css("cursor","pointer")
d.attr("title","Click to Embed YouTube Video")
l.append(d)
o()("#instructure_link_prompt .actions").append(l)}if(s){i.find(".disable_enhancement").hide()
i.find(".disable_inline_content").attr("checked",false)}if(c){i.find(".auto_show").hide()
i.find(".auto_show_inline_content").attr("checked",false)}})
i.attr("id","instructure_link_prompt")
o()("body").append(i)}var a=function(){return r}
var s=function(){V(e,true)}
I(i,t,a,s)
i.data("editor",n)
i.data("original_data",null)
var c=e.selection.getNode()
while("A"!=c.nodeName&&"BODY"!=c.nodeName&&c.parentNode)c=c.parentNode
var l="A"==c.nodeName?o()(c):null
if(l){i.find(".prompt").val(l.attr("href")).change()
i.find(".inst-link-preview-alt input").val(l.data("preview-alt"))
r=(l.attr("class")||"").replace(/youtube_link_to_box/,"")
var d=new RegExp("("+R.join("|")+")");(l.attr("class")||"").match(d)&&i.addClass("for_inline_content").find(".disable_enhancement").show()
d=new RegExp("("+B.join("|")+")");(l.attr("class")||"").match(d)&&i.addClass("for_inline_content_can_auto_show").find(".auto_show").show()
i.data("original_data",{url:l.attr("href"),for_inline_content:i.hasClass("for_inline_content"),for_inline_content_can_auto_show:i.hasClass("for_inline_content_can_auto_show"),prior_classes:r,preview_alt:l.data("preview-alt")})
i.find(".disable_inline_content").attr("checked",l.hasClass("inline_disabled")).triggerHandler("change")
i.find(".auto_show_inline_content").attr("checked",l.hasClass("auto_open")).triggerHandler("change")
i.find(".insert_button").text("Update Link")}else i.find(".prompt").val("").change()
i.dialog({width:425,height:"auto",title:"Link to Website URL",open:function(){o()(this).find(".prompt").focus().select()}})}function V(e,t){V.counter=V.counter||0
true==t&&0!=V.counter?V.counter=(V.counter+1)%5:o()(e.getBody()).find("a").each(function(){var e=new P
var t=o()(this)
if(t.attr("href")&&!t.hasClass("inline_disabled")&&t.attr("href").match(INST.youTubeRegEx)){var n=+t.attr("data-ytt-failcnt")||0
t.addClass("youtube_link_to_box")
t.text()===t.attr("href")&&n<1&&e.titleYouTubeText(t)}})}function M(e){if(F.get(e)||void 0===e.on)return
e.on("PreProcess",function(e){o()(e.node).find("a.youtube_link_to_box").removeClass("youtube_link_to_box")
o()(e.node).find("img.iframe_placeholder").each(function(){var e=o()(this)
var t=o()("<iframe/>")
var n=e.attr("height")||e.css("height")
var i=e.hasClass("fullWidth")?"100%":e.attr("width")||e.css("width")
e.attr("width",i)
e.css("width",i)
t.attr("src",e.attr("rel"))
t.attr("style",e.attr("_iframe_style"))
if(!t[0].style.height.length){t.attr("height",n)
t.css("height",n)}if(!t[0].style.width.length){t.attr("width",i)
t.css("width",i)}o()(this).after(t)
o()(this).remove()})})
e.on("change",function(){V(e)})
e.on("SetContent",function(){V(e,"contentJustSet")})
F.set(e,true)}var q={buttonToImg:L,prepEditorForDialog:N,buildLinkClasses:S,bindLinkSubmit:I,renderDialog:D,updateLinks:V,initEditor:M}
n("q1tI")
var G=n("i8i4")
var H=n.n(G)
var W={more_external_tools:Object(T["a"])(x.t("more_external_tools","More External Tools"))}
var U={init:function(e,t,i){q.initEditor(e)
if(!i||!i.editorButtons||!i.editorButtons.length)return
var r={open:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return setTimeout(function(){var e
return(e=r).open.apply(e,t)},50)}}
Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(5),n.e(7),n.e(11),n.e(13),n.e(551)]).then(n.bind(null,"/wcz")).then(function(t){var n=t.default
var i=document.createElement("div")
document.body.appendChild(i)
H.a.render(Object(k["a"])(n,{win:window,editor:e,contextAssetString:ENV.context_asset_string,iframeAllowances:Object(E["a"])(),resourceSelectionUrl:o()("#context_external_tool_resource_selection_url").attr("href"),deepLinkingOrigin:ENV.DEEP_LINKING_POST_MESSAGE_ORIGIN}),i,function(){r=this})})
var a=[]
var s=[]
var c=function(t){var n=i.editorButtons[t]
var o=function(){return r.open(n)}
if(ENV.use_rce_enhancements){s.push(C.buttonConfig(n,e))
e.addCommand("instructureExternalButton".concat(n.id),o)}else if(i.editorButtons.length>i.maxVisibleEditorButtons&&t>=i.maxVisibleEditorButtons-1)a.push(n)
else{e.addCommand("instructureExternalButton".concat(n.id),o)
e.addButton("instructure_external_button_".concat(n.id),C.buttonConfig(n,e))}}
for(var l=0;i.editorButtons&&l<i.editorButtons.length;l++)c(l)
s.length&&ENV.use_rce_enhancements&&e.ui.registry.addMenuButton("lti_tool_dropdown",{fetch:function(e){e(s)},icon:"lti",tooltip:"LTI Tools"})
if(a.length){var d=function(){var t=C.clumpedButtonMapping(a,e,function(e){return r.open(e)})
C.attachClumpedDropdown(o()("#".concat(this._id)),t,e)}
ENV.use_rce_enhancements?e.ui.registry.addButton("instructure_external_button_clump",{title:W.more_external_tools,image:"/images/downtick.png",onAction:d}):e.addButton("instructure_external_button_clump",{title:W.more_external_tools,image:"/images/downtick.png",onkeyup:function(e){if(32===e.keyCode||13===e.keyCode){e.stopPropagation()
d.call(this)}},onclick:d})}}}
var K=U
function Y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
var t=["equationCB","linksCB","imagePickerCB","equellaCB","externalToolCB","recordCB"]
t.forEach(function(t){void 0===e[t]&&(e[t]=function(){})})
document.addEventListener("tinyRCE/initEquation",function(t){var i=t.detail
Promise.all([n.e(6),n.e(557)]).then(n.bind(null,"F+Bh")).then(function(t){var n=t.default
var r=new n(i.ed)
e.equationCB(r)})})
document.addEventListener("tinyRCE/initLinks",function(t){var n=t.detail
q.renderDialog(n.ed)
e.linksCB()})
document.addEventListener("tinyRCE/initImagePicker",function(t){Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(5),n.e(6),n.e(11),n.e(16),n.e(15),n.e(86),n.e(96),n.e(566)]).then(n.bind(null,"Dwgn")).then(function(n){var i=n.default
var r=new i(t.detail.ed,t.detail.selectedNode)
e.imagePickerCB(r)})})
document.addEventListener("tinyRCE/initEquella",function(t){n.e(583).then(n.bind(null,"gg/z")).then(function(n){var i=n.default
i(t.detail.ed)
e.equellaCB()})})
document.addEventListener("tinyRCE/initExternalTools",function(t){K.init(t.detail.ed,t.detail.url,p["a"])
e.externalToolCB()})
document.addEventListener("tinyRCE/initRecord",function(t){Promise.all([n.e(16),n.e(39),n.e(584)]).then(n.bind(null,"xR7n")).then(function(n){var i=n.default
i.insertEditor(t.detail.ed)
e.recordCB()})})}function J(e,t){var n=Object.keys(e)
Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e))
t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))
return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?J(n,true).forEach(function(t){Object(i["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var Q={call:function(e){if("exists?"===e)return true
for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i]
return this[e].apply(this,n)},focus:function(){if(void 0!==tinymce){var e=tinymce.get(this._textareaEl.id)
e&&e.focus(true)}}}
var X={show:function(){$("#editor_tabs").show()},hide:function(){$("#editor_tabs").hide()}}
var ee={wrapEditor:function(e){var t=Z({},Q,{},e)
return Object.assign(e,t)},wrapSidebar:function(e){var t=Z({},X,{},e)
return Object.assign(e,t)}}
var te=ee
var ne=n("Cf7h")
function ie(e,t){var n=Object.keys(e)
Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(e))
t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))
return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?ie(n,true).forEach(function(t){Object(i["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ie(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function oe(){if(!ENV.context_asset_string)return null
var e=Object(ne["a"])(ENV.context_asset_string)
return{canUploadFiles:ENV.RICH_CONTENT_CAN_UPLOAD_FILES,contextId:e[1],contextType:e[0],filesTabDisabled:ENV.RICH_CONTENT_FILES_TAB_DISABLED,host:ENV.RICH_CONTENT_APP_HOST,jwt:ENV.JWT,refreshToken:l(ENV.JWT),themeUrl:ENV.active_brand_config_json_url,liveRegion:function(){return document.getElementById("flash_screenreader_holder")}}}var ae
var se={preload:function(e){this.loadRCE(e)},loadOnTarget:function(e,t,n){var i=this.getTargetTextarea(e)
var r=this.getRenderingTarget(i,t.getRenderingTarget)
var o=this.createRCEProps(i,t)
this.loadRCE(function(e){e.renderIntoDiv(r,o,function(e){e.mceInstance().on("init",function(){return n(i,te.wrapEditor(e))})})})},loadSidebarOnTarget:function(e,t){if(ENV.RICH_CONTENT_SKIP_SIDEBAR)return
var n=oe()
this.loadRCE(function(i){i.renderSidebarIntoDiv(e,n,function(e){t(te.wrapSidebar(e))})})},loadingCallbacks:[],RCE:null,loadRCE:function(){var e=this
var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){}
ae||(ae=(window.ENV.use_rce_enhancements?Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(5),n.e(7),n.e(8),n.e(9),n.e(10),n.e(11),n.e(12),n.e(18),n.e(20),n.e(22),n.e(30),n.e(34),n.e(43),n.e(49),n.e(65),n.e(64),n.e(77),n.e(94),n.e(99),n.e(211),n.e(253)]).then(n.bind(null,"Idzl")):Promise.all([n.e(1),n.e(2),n.e(3),n.e(4),n.e(5),n.e(7),n.e(8),n.e(9),n.e(10),n.e(12),n.e(18),n.e(20),n.e(22),n.e(26),n.e(28),n.e(30),n.e(34),n.e(43),n.e(49),n.e(65),n.e(64),n.e(77),n.e(94),n.e(254)]).then(n.bind(null,"66gZ"))).then(function(t){e.RCE=t
Y()
return t}))
return ae.then(function(){e.loadingCallbacks.forEach(function(t){return t(e.RCE)})
e.loadingCallbacks=[]
t(e.RCE)})},getTargetTextarea:function(e){return"textarea"==o()(e).get(0).type?o()(e).get(0):o()(e).find("textarea").get(0)},getRenderingTarget:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0
var n
n="undefined"===typeof t?o()(e).parent().get(0):t(e)
o()(n).addClass("ic-RichContentEditor")
return n},_attrsToMirror:function(e){var t=["name"]
var n=s.a.reduce(e.attributes,function(e,t){e[t.name]=t.value
return e},{})
return s.a.pick(n,t)},createRCEProps:function(e,t){var n=e.offsetWidth
var i=e.offsetHeight
i&&(t.tinyOptions=re({height:i},t.tinyOptions||{}))
return{defaultContent:e.value||t.defaultContent,editorOptions:v.bind(null,n,e.id,t,null),language:ENV.LOCALE,mirroredAttrs:this._attrsToMirror(e),onFocus:t.onFocus,onBlur:t.onBlur,textareaClassName:e.className,textareaId:e.id,trayProps:oe()}}}
t["a"]=se}}])

//# sourceMappingURL=23-c-aacdbcb666.js.map