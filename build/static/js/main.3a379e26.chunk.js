(this["webpackJsonpux-projects"]=this["webpackJsonpux-projects"]||[]).push([[0],{34:function(e,t,n){e.exports=n(47)},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var l=n(0),r=n.n(l),a=n(28),u=n.n(a),c=(n(39),n(40),function(){return l.createElement("div",null,l.createElement("h2",null,"SHOPPINCO"))}),i=n(5),m=n(9),o=(n(41),function(){return l.createElement("div",null,l.createElement("h3",null,"Ich m\xf6chte..."),l.createElement(i.b,{to:"/help"},l.createElement("h2",null,"helfen")),l.createElement(i.b,{to:"/get-help"},l.createElement("h2",null,"Hilfe")),l.createElement("br",null),l.createElement("br",null),l.createElement("sub",null,"Icons by ",l.createElement("a",{href:"https://www.flaticon.com/authors/freepik"},"Freepik@Flaticon")),l.createElement(i.b,{to:"/about"},l.createElement("h4",{id:"about-link"},"Anleitung")))}),s=function(){return l.createElement("div",null,l.createElement("h4",null,"Anleitung f\xfcr die, die Hilfe ben\xf6tigen"),l.createElement("ul",null,l.createElement("li",null,"Dr\xfccke auf den Hilfe Button, wenn du Hilfe ben\xf6tigst(Wenn du helfen m\xf6chtest siehe unten). Du wirst dann sofort auf den Anmeldescreen weitergeleitet, gib dort deine Daten ein und dr\xfccke anschlie\xdfend auf weiter."),l.createElement("li",null,"Nun kannst du eine neue Bestellung aufgeben, dr\xfccke daf\xfcr den Button \u201eneue Bestellung aufgeben\u201c. Gib deine gew\xfcnschten Lebensmittel ein und dr\xfccke anschlie\xdfend aufsuchen. Neben der Eingabe gibt es einen Filterbutton. Bet\xe4tige diesen, wenn du nach einer bestimmten Gruppe suchen m\xf6chtest oder dr\xfccke auf den Plusbutton um die Lebensmittel hinzuzuf\xfcgen. Bei der Funktion Kommentare kannst du noch einen zus\xe4tzlichen Kommentar, wie z. B. den Fettanteil von Milch, hinzuf\xfcgen."),l.createElement("li",null,"Wenn du alle deine Lebensmittel eingegeben hast, dr\xfccke auf weiter. Nun siehst du eine \xdcbersicht deiner Bestellung, wenn du nichts mehr hinzuzuf\xfcgen hast, klicke auf best\xe4tigen."),l.createElement("li",null,"Nun kannst du deinen aktuellen Bestellstaus sehen. Du kannst die Bestellung nur so lange l\xf6schen, solange der aktuelle Bestellstatus unbearbeitet ist."),l.createElement("li",null,"Sobald deine Bestellung eingekauft wurde, bekommst du ein Bild des Kassenzettels. Bitte halte das Geld m\xf6glichst passend bereit.")),l.createElement("h4",null,"Anleitung f\xfcr Helfer:"),l.createElement("ul",null,l.createElement("li",null,"Dr\xfccke auf den helfen Button. Du wirst dann sofort auf den Anmeldescreen weitergeleitet, gib dort deine Daten ein und dr\xfccke anschlie\xdfend auf weiter."),l.createElement("li",null,"Dir wird nun eine Karte angezeigt, auf dieser kannst du sehen, wo Personen sind, denen du helfen kannst. W\xe4hle eine Person deiner Wahl aus. Anschlie\xdfend siehst du den gew\xfcnschten Einkaufszettel der Person nach Kategorien sortiert. Achte auf pers\xf6nliche Kommentare, die hinzugef\xfcgt wurden. Solltest du Fragen zum Einkaufszettel haben, kannst die Person auch gerne anrufen."),l.createElement("li",null,"Sobald du den Kassenzettel erhalten hast und fotografiere ihn ab. Zum Schluss siehst du nochmal die Adresse und kannst den Einkauf abliefern."),l.createElement("li",null,"Bleib gesund!")),l.createElement(i.b,{to:"/"},l.createElement("h4",null,"Zur\xfcck")))},d=function(){return l.createElement("div",null,l.createElement("input",{type:"text",placeholder:"Name"}),l.createElement("input",{type:"number",placeholder:"Alter",step:"1",min:"0"}),l.createElement("input",{type:"text",placeholder:"Stra\xdfe, Hausnummer"}),l.createElement("input",{type:"text",placeholder:"Ort"}),l.createElement("input",{type:"text",placeholder:"Postleitzahl"}),l.createElement("input",{type:"text",placeholder:"Telefonnummer"}),l.createElement("input",{type:"text",placeholder:"Email (optional)"}),l.createElement(i.b,{to:"/orders"},l.createElement("h4",null,"Weiter")))},E=function(){return l.createElement("div",null,l.createElement("input",{type:"text",placeholder:"Name"}),l.createElement("input",{type:"number",placeholder:"Alter",step:"1",min:"0"}),l.createElement("input",{type:"text",placeholder:"Stra\xdfe, Hausnummer"}),l.createElement("input",{type:"text",placeholder:"Ort"}),l.createElement("input",{type:"text",placeholder:"Postleitzahl"}),l.createElement("input",{type:"text",placeholder:"Telefonnummer"}),l.createElement("input",{type:"text",placeholder:"Email (optional)"}),l.createElement(i.b,{to:"/map"},l.createElement("h4",null,"Weiter")))},h=n(12),f=n(24),p=function(){var e=Object(m.e)(),t=l.useState({width:400,height:400,latitude:49.0090167,longitude:8.4008933,zoom:14}),n=Object(h.a)(t,2),r=n[0],a=n[1],u=l.useMemo((function(){return Array.from({length:20},(function(){return{latitude:49.0090167+.01*(2*Math.random()-1),longitude:8.4008933+.01*(2*Math.random()-1)}}))}),[]);return l.createElement("div",{style:{height:"80vh",width:"100%"}},l.createElement(f.b,Object.assign({},r,{onViewportChange:a,mapboxApiAccessToken:"pk.eyJ1Ijoiam9uYXN3aWxtcyIsImEiOiJhNTFmYWY1YzNmN2ViOTkxYmM0MjE3NWU1MWFmY2E3YyJ9.QF9e0dR74ojhTLnIPi48Jg",width:"100%",height:"100%"}),u.map((function(t,n){return l.createElement(b,{latitude:t.latitude,longitude:t.longitude,index:""+n,onClick:function(){return e.push("/show-list")}})}))))},b=function(e){var t=e.latitude,n=e.longitude,r=e.index,a=e.onClick;return l.createElement(f.a,{key:"marker-".concat(r),longitude:n,latitude:t},l.createElement("svg",{height:40,viewBox:"0 0 24 24",style:{cursor:"pointer",fill:"var(--text)",stroke:"none",transform:"translate(".concat(-20,"px,").concat(-40,"px)")},onClick:a},l.createElement("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3\n  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9\n  C20.1,15.8,20.2,15.8,20.2,15.7z"})))},g=n(33),v=["Bananen - 2 St\xfcck","Milch - 5L","Nutella - 100g"],k="./img/recipe.jpg";function y(){var e=Object(l.useState)(v),t=Object(h.a)(e,2),n=t[0],r=t[1];Object(l.useEffect)((function(){v=n}),[n]);return{items:n,addItem:function(e){return r((function(t){return[].concat(Object(g.a)(t),[e])}))},removeItem:function(e){return r((function(t){return t.filter((function(t){return t!==e}))}))},setItems:r}}function w(){var e=Object(l.useState)(k),t=Object(h.a)(e,2),n=t[0],r=t[1];return Object(l.useEffect)((function(){k=n}),[n]),{recipe:n,setRecipe:r}}var B=function(){var e=y().items;return l.createElement("div",null,l.createElement("h4",null,"f\xfcr Klaus R."),l.createElement("ul",{className:"list"},e.map((function(e){return l.createElement("li",null,e)}))),l.createElement(i.b,{to:"/map"},l.createElement("h4",{className:"back"},"Zur\xfcck")),l.createElement(i.b,{to:"/buy"},l.createElement("h4",null,"Annehmen")))},x=n(19),O=n(32),j=function(){var e=l.useState({}),t=Object(h.a)(e,2),n=t[0],r=t[1],a=function(e){var t=e.item;return l.createElement("li",{onClick:function(){return function(e){return r((function(t){return Object(O.a)({},t,Object(x.a)({},e,!t[e]))}))}(t)},className:n[t]?"selected":""},t)},u=y().items,c=(u.every((function(e){return n[e]})),u.some((function(e){return n[e]})));return l.createElement("div",null,l.createElement("ul",{className:"list"},u.map((function(e){return l.createElement(a,{item:e})}))),!c&&l.createElement("i",null,"Klicke auf gekaufte Sachen!"),c&&l.createElement(i.b,{to:"/recipe"},l.createElement("h4",null,"Gekauft!")))},N=function(){var e=l.useRef(null),t=w(),n=t.recipe,r=t.setRecipe;return l.createElement("div",null,l.createElement("h4",{onClick:function(){var t;return null===(t=e.current)||void 0===t?void 0:t.click()}},"Foto hochladen"),n&&l.createElement(l.Fragment,null,l.createElement("img",{src:n,style:{width:"90%",height:"auto"}}),l.createElement(i.b,{to:"/delivery"},l.createElement("h4",null,"Liefern"))),l.createElement("input",{ref:e,accept:"image/*",capture:"environment",id:"file-upload",style:{display:"none"},type:"file",onChange:function(){var t,n,l;if(e&&(null===e||void 0===e||null===(t=e.current)||void 0===t?void 0:t.files)&&!((null===e||void 0===e||null===(n=e.current)||void 0===n||null===(l=n.files)||void 0===l?void 0:l.length)<1)){var a=new FileReader;a.readAsDataURL(e.current.files[0]),a.onloadend=function(){var e=a.result;r(e),console.log(e)}}}}))},z=function(){return l.createElement("div",null,l.createElement("ul",{className:"list"},l.createElement("li",null,"Klaus R."),l.createElement("li",null,"Hauptstra\xdfe 24"),l.createElement("li",null,"1. OG"),l.createElement("li",null,"77815 B\xfchl")),l.createElement(i.b,{to:"/"},l.createElement("h4",null,"Fertig!")))},A=function(){return l.createElement("div",null,l.createElement("i",null,"Bisher noch keine Bestellungen"),l.createElement("br",null),l.createElement("br",null),l.createElement(i.b,{to:"/add-order"},l.createElement("h4",null,"Bestellung aufgeben")))},S=function(){var e=y(),t=e.items,n=e.addItem,r=e.removeItem,a=l.useRef(null);return l.createElement("div",null,l.createElement("ul",{className:"list"},l.createElement("input",{ref:a,type:"text",placeholder:"Warenname",onKeyDown:function(e){if("Enter"===e.key){var t;if(!(null===(t=a.current)||void 0===t?void 0:t.value))return;n(a.current.value),a.current.value=""}}}),t.map((function(e){return l.createElement("li",{onClick:function(){return r(e)}},e)})),!!t.length&&l.createElement(i.b,{to:"/check-order"},l.createElement("h4",null,"Weiter"))))},I=function(){var e=y().items;return l.createElement("div",null,l.createElement("ul",null,e.map((function(e){return l.createElement("li",null,e)}))),l.createElement(i.b,{to:"/add-order"},l.createElement("h4",{className:"back"},"Bearbeiten")),l.createElement(i.b,{to:"/order-status"},l.createElement("h4",null,"Absenden")))},F=function(){var e=l.useState("In Warteschlange"),t=Object(h.a)(e,2),n=t[0],r=t[1],a=Object(m.e)();l.useEffect((function(){setTimeout((function(){return r("In Bearbeitung")}),5e3),setTimeout((function(){return r("Auf dem Weg")}),1e4),setTimeout((function(){return a.push("/arrival")}),15e3)}),[]);var u=y().items;return l.createElement("div",null,l.createElement("h4",null,"Bestellstatus: ",n," "),l.createElement("ul",null,u.map((function(e){return l.createElement("li",null,e)}))))},W=function(){var e=w().recipe;return l.createElement("div",null,l.createElement("h4",null,"Bestellung ist gleich da!"),"Hier die Rechnung:",l.createElement("img",{src:e,style:{width:"90%",height:"auto"}}),l.createElement("br",null),"Bitte halte ",l.createElement("b",null,"17,50\u20ac")," bereit.",l.createElement("br",null),l.createElement("i",null,"Mit einem Trinkgeld kannst du deinem Helfer eine Freude machen!"))};var H=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(c,null),r.a.createElement(i.a,null,r.a.createElement(m.a,{path:"/",exact:!0},r.a.createElement(o,null)),r.a.createElement(m.a,{path:"/about"},r.a.createElement(s,null)),r.a.createElement(m.a,{path:"/get-help"},r.a.createElement(d,null)),r.a.createElement(m.a,{path:"/help"},r.a.createElement(E,null)),r.a.createElement(m.a,{path:"/map"},r.a.createElement(p,null)),r.a.createElement(m.a,{path:"/show-list"},r.a.createElement(B,null)),r.a.createElement(m.a,{path:"/buy"},r.a.createElement(j,null)),r.a.createElement(m.a,{path:"/recipe"},r.a.createElement(N,null)),r.a.createElement(m.a,{path:"/delivery"},r.a.createElement(z,null)),r.a.createElement(m.a,{path:"/orders"},r.a.createElement(A,null)),r.a.createElement(m.a,{path:"/add-order"},r.a.createElement(S,null)),r.a.createElement(m.a,{path:"/check-order"},r.a.createElement(I,null)),r.a.createElement(m.a,{path:"/order-status"},r.a.createElement(F,null)),r.a.createElement(m.a,{path:"/arrival"},r.a.createElement(W,null))))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.3a379e26.chunk.js.map