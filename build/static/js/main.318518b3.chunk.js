(this["webpackJsonpx-box"]=this["webpackJsonpx-box"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(8),r=n.n(a),A=(n(17),n(18),"be249e2c68439c3d6848c7d94d088a68"),o={fetchTrending:"https://api.themoviedb.org/3/trending/all/week?api_key=".concat(A,"&language=en-US"),fetchNetflixOriginals:"https://api.themoviedb.org/3/discover/tv?api_key=".concat(A,"&with_networks=213"),fetchTopRated:"https://api.themoviedb.org/3/movie/top_rated?api_key=".concat(A,"&language=en-US"),fetchActionMovies:"https://api.themoviedb.org/3/discover/movie?api_key=".concat(A,"&with_genres=28"),fetchComedyMovies:"https://api.themoviedb.org/3/discover/movie?api_key=".concat(A,"&with_genres=35"),fetchHorrorMovies:"https://api.themoviedb.org/3/discover/movie?api_key=".concat(A,"&with_genres=27"),fetchRomanceMovies:"https://api.themoviedb.org/3/discover/movie?api_key=".concat(A,"&with_genres=10749"),fetchDocumentaries:"https://api.themoviedb.org/3/discover/movie?api_key=".concat(A,"&with_genres=99")},s=n(3),g=n.n(s),l=n(5),d=n(4),h=(n(20),n(9)),u=n(12),v=n.n(u),b=n(0);var f=function(e){var t=e.title,n=e.fetchUrl,i=e.isLargeRow,a=Object(c.useState)([]),r=Object(d.a)(a,2),A=r[0],o=r[1],s=Object(c.useState)(""),u=Object(d.a)(s,2),f=u[0],B=u[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(g.a.mark((function e(){var t,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,o(c.results);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),console.log(A),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"category",children:[Object(b.jsx)("h2",{children:t}),Object(b.jsx)("div",{className:"categories",children:A.map((function(e){return Object(b.jsx)("img",{onClick:function(){return function(e){f?B(""):v()((null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);B(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)},className:"posterCategory ".concat(i&&"posterCategoryLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(i?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))}),f&&Object(b.jsx)(h.a,{videoId:f,opts:{height:"350",width:"100%",playerVars:{autoPlay:1}}})]})})},B=(n(44),n.p+"static/media/netflix-logo.8ecf90c9.jpg");var w=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?i(!0):i(!1)})),function(){window.removeEventListener("scroll")}}),[]),Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"Nav ".concat(n&&"nav_black"),children:[Object(b.jsx)("img",{className:"nav_logo",src:B,alt:""}),Object(b.jsx)("img",{className:"nav_avatar",src:"data:image/png;base64,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",alt:""})]})})};n(45);var j=function(){var e,t,n=Object(c.useState)([]),i=Object(d.a)(n,2),a=i[0],r=i[1];return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(o.fetchNetflixOriginals);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n.results[Math.floor(Math.random()*n.results.length-1)]);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(a),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===a||void 0===a?void 0:a.backdrop_path,'")'),backgroundPosition:"center center"},children:[Object(b.jsxs)("div",{className:"banner_contents",children:[Object(b.jsx)("h1",{className:"banner_title",children:(null===a||void 0===a?void 0:a.title)||(null===a||void 0===a?void 0:a.name)||(null===a||void 0===a?void 0:a.original_name)}),Object(b.jsxs)("div",{className:"banner_buttons",children:[Object(b.jsx)("button",{className:"banner_button",children:"Play"}),Object(b.jsx)("button",{className:"banner_button",children:"My List"})]}),Object(b.jsx)("h1",{className:"banner_description",children:(e=null===a||void 0===a?void 0:a.overview,t=150,(null===e||void 0===e?void 0:e.lenght)>t?e.substr(0,t-1)+"...":e)})]}),Object(b.jsx)("div",{className:"banner_fade"})]})})};var E=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(w,{}),Object(b.jsx)(j,{}),Object(b.jsx)(f,{title:"NETFLIX ORIGINALS",fetchUrl:o.fetchNetflixOriginals,isLargeCategory:!0}),Object(b.jsx)(f,{title:"TRENDING NOW",fetchUrl:o.fetchTrending}),Object(b.jsx)(f,{title:"TOP RATED MOVIES",fetchUrl:o.fetchTopRated}),Object(b.jsx)(f,{title:"ACTION MOVIES",fetchUrl:o.fetchActionMovies}),Object(b.jsx)(f,{title:"COMEDY MOVIES",fetchUrl:o.fetchComedyMovies}),Object(b.jsx)(f,{title:"HORROR MOVIES",fetchUrl:o.fetchHorrorMovies}),Object(b.jsx)(f,{title:"ROMANCE MOVIES",fetchUrl:o.fetchRomanceMovies}),Object(b.jsx)(f,{title:"DOCUMENTRIES",fetchUrl:o.fetchDocumentaries})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))};r.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(E,{})}),document.getElementById("root")),p()}},[[46,1,2]]]);
//# sourceMappingURL=main.318518b3.chunk.js.map