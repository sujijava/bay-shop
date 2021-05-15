(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{111:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(31),r=c.n(n),i=(c(79),c(80),c(81),c(82),c(23)),l=c(9),j=c(117),o=c(118),d=c(120),b=c(121),u=c(11),h=c(68),x=(c(83),h.a.initializeApp({apiKey:"AIzaSyCib9KGQ8qhcx7ErSLi6VNhKUxdui8AIeU",authDomain:"bay-shop.firebaseapp.com",projectId:"bay-shop",storageBucket:"bay-shop.appspot.com",messagingSenderId:"389844844820",appId:"1:389844844820:web:954a5d462c596b2dfe4201"})),O=x.auth(),p=c(1),f=s.a.createContext();function m(){return Object(a.useContext)(f)}function g(e){var t=e.children,c=Object(a.useState)(),s=Object(u.a)(c,2),n=s[0],r=s[1],i=Object(a.useState)(!0),l=Object(u.a)(i,2),j=l[0],o=l[1];Object(a.useEffect)((function(){return O.onAuthStateChanged((function(e){r(e),o(!1)}))}),[]);var d={currentUser:n,login:function(e,t){return O.signInWithEmailAndPassword(e,t)},signup:function(e,t){return O.createUserWithEmailAndPassword(e,t)},logout:function(){return O.signOut()}};return Object(p.jsx)(f.Provider,{value:d,children:!j&&t})}var v=function(){var e=m().currentUser,t=Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(o.a.Item,{href:"/login",children:"Log In"}),Object(p.jsx)(o.a.Item,{href:"/signup",children:"Sign up"})]}),c=Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(o.a.Item,{href:"/logout",onClick:function(){return logOutHandler()},children:"Log out"})});return Object(p.jsxs)(d.a,{bg:"light",expand:"lg",style:{zIndex:"100"},children:[Object(p.jsx)(d.a.Brand,{href:"/",children:"Bay Shop"}),Object(p.jsx)(d.a.Toggle,{"aria-controls":"navbarScroll"}),Object(p.jsxs)(d.a.Collapse,{id:"navbarScroll",children:[Object(p.jsxs)(b.a,{className:"mr-auto my-2 my-lg-0",style:{maxHeight:"100px"},navbarScroll:!0,children:[Object(p.jsx)(b.a.Link,{href:"/electronics",children:"Electronics"}),Object(p.jsx)(b.a.Link,{href:"/jewelery",children:"Jewelery"}),Object(p.jsx)(b.a.Link,{href:"/men_clothing",children:"Men"}),Object(p.jsx)(b.a.Link,{href:"/women_clothing",children:"Women"}),Object(p.jsx)(b.a.Link,{variant:"success",href:"/custom",children:Object(p.jsxs)("span",{style:{color:"#81b214"},children:[Object(p.jsx)("i",{class:"fas fa-award"}),"Custom"]})})]}),Object(p.jsxs)(b.a,{className:"ml-auto",children:[Object(p.jsxs)(b.a.Link,{href:"/search",children:["Search",Object(p.jsx)("i",{class:"fas fa-search"})]}),Object(p.jsxs)(b.a.Link,{href:"/cart",children:["Shopping Cart",Object(p.jsx)("i",{style:{fontSize:"15px",color:"black"},class:"fas fa-shopping-cart"})]}),Object(p.jsxs)(o.a,{title:e?"Welcome, ".concat(e.email):"Welcome to our shop",id:"navbarScrollingDropdown",children:[e?c:t,Object(p.jsx)(o.a.Divider,{}),Object(p.jsx)(o.a.Item,{href:"/admin/login",children:"Admin Sign In"})]})]})]})]})},y=c(46),w=c(47),N=c(50),S=c(48),k=function(e){Object(N.a)(c,e);var t=Object(S.a)(c);function c(){return Object(y.a)(this,c),t.apply(this,arguments)}return Object(w.a)(c,[{key:"render",value:function(){this.props.resumeData;return Object(p.jsx)("footer",{style:{display:"flex"},children:Object(p.jsxs)("div",{children:[Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{style:{justifyContent:"center"},children:Object(p.jsxs)("p",{style:{fontSize:"13px",textAlign:"center"},children:["\u2003 \xa9 2021 ",Object(p.jsx)("a",{href:"https://github.com/sujijava",children:"Sujijava"})," | susieoh8@gmail.com"]})}),Object(p.jsx)("br",{})]})})}}]),c}(a.Component),C=c(17),L=c.n(C),I=c(71);function T(e){var t=e.eachProduct,c=Object(l.e)();return Object(p.jsxs)("div",{class:"d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded",children:[Object(p.jsx)("div",{class:"mr-1",children:Object(p.jsx)("img",{class:"rounded",src:t.Image,width:"70"})}),Object(p.jsxs)("div",{class:"d-flex flex-column align-items-center product-details",style:{maxWidth:"30%"},children:[Object(p.jsx)("span",{class:"font-weight-bold",children:t.Title}),Object(p.jsx)("div",{class:"d-flex flex-row product-desc"})]}),Object(p.jsx)("div",{children:Object(p.jsxs)("h5",{class:"text-grey",children:["$",t.Price]})}),Object(p.jsx)("div",{children:Object(p.jsxs)("h5",{class:"text-grey",children:["Qty: ",t.Qty]})}),Object(p.jsx)("div",{class:"d-flex align-items-center",children:Object(p.jsx)(I.a,{variant:"light",onClick:function(){return e=t,console.log(e.Title),L.a.delete("http://localhost:5000/server/cart/"+e._id),void c.go(0);var e},children:Object(p.jsx)("i",{class:"fa fa-trash mb-1 text-danger"})})})]})}var P=function(e){Object(N.a)(c,e);var t=Object(S.a)(c);function c(e){var a;return Object(y.a)(this,c),(a=t.call(this,e)).state={myList:[],myTotal:0},a}return Object(w.a)(c,[{key:"componentDidMount",value:function(){var e=this;L.a.get("http://localhost:5000/server/cart").then((function(t){e.setState({myList:t.data}),console.log(t.data);var c=e.state.myList.reduce((function(e,t){return e+t.Price}),0);console.log(c),e.setState({myTotal:c.toFixed(2)})}))}},{key:"render",value:function(){var e=this.state.myList.map((function(e){return Object(p.jsx)(T,{eachProduct:e})}));return Object(p.jsx)("div",{class:"container mt-5 mb-5",children:Object(p.jsx)("div",{class:"d-flex justify-content-center row",children:Object(p.jsxs)("div",{class:"col-md-8",children:[Object(p.jsxs)("div",{class:"p-2",children:[Object(p.jsx)("h4",{children:"Shopping cart"}),Object(p.jsx)("p",{children:"Thank you for shopping with us! "})]}),e,Object(p.jsx)("div",{class:"d-flex flex-row justify-content-end mt-3 p-2 bg-white rounded",children:Object(p.jsx)("div",{children:Object(p.jsxs)("p",{children:["Total: ",this.state.myTotal]})})}),Object(p.jsx)("div",{class:"d-flex flex-row align-items-center mt-3 p-2 bg-white rounded",children:Object(p.jsx)("button",{class:"btn btn-outline-secondary btn-block btn-lg ml-2 pay-button",type:"button",children:"Check out"})})]})})})}}]),c}(a.Component),E=function(e){var t=Object(a.useState)({}),c=Object(u.a)(t,2),s=c[0],n=c[1];return Object(a.useEffect)((function(){L.a.get("https://fakestoreapi.com/products/".concat(e.match.params.productId)).then((function(e){n(e.data),console.log(s)}))}),s),Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"card",children:Object(p.jsx)("div",{className:"container-fliud",children:Object(p.jsxs)("div",{className:"wrapper row product_detail_container",children:[Object(p.jsx)("div",{className:"preview col-md-6",children:Object(p.jsx)("div",{className:"preview-pic tab-content",children:Object(p.jsx)("div",{className:"tab-pane active",id:"pic-1",children:Object(p.jsx)("img",{src:s.image,style:{width:"400px"}})})})}),Object(p.jsxs)("div",{className:"details col-md-6",children:[Object(p.jsx)("h3",{className:"product-title",children:s.title}),Object(p.jsx)("div",{className:"rating",children:Object(p.jsxs)("div",{className:"stars",children:[Object(p.jsx)("span",{className:"fa fa-star checked"}),Object(p.jsx)("span",{className:"fa fa-star checked"}),Object(p.jsx)("span",{className:"fa fa-star checked"}),Object(p.jsx)("span",{className:"fa fa-star"}),Object(p.jsx)("span",{className:"fa fa-star"})]})}),Object(p.jsx)("br",{}),Object(p.jsx)("p",{className:"product-description",children:s.description}),Object(p.jsxs)("h4",{className:"price",children:["current price: ",Object(p.jsxs)("span",{children:["$ ",s.price]})]}),Object(p.jsxs)("div",{className:"action",children:[Object(p.jsx)("br",{}),Object(p.jsxs)("button",{className:"add-to-cart btn btn-outline-secondary",type:"button",children:[Object(p.jsx)("i",{className:"fa fa-shopping-basket","aria-hidden":"true"}),"\u2800add to cart"]}),Object(p.jsx)("button",{className:"like btn btn-default",type:"button",children:Object(p.jsx)("span",{className:"fa fa-heart"})})]})]})]})})})})},F=function(e){console.log(e.product);return Object(p.jsx)("div",{class:"col-md-4 mb-3",children:Object(p.jsxs)("div",{className:"card h-100",children:[Object(p.jsxs)("div",{className:"labels d-flex justify-content-between position-absolute w-100",children:[Object(p.jsx)("div",{className:"label-new"}),Object(p.jsx)("div",{className:"label-sale",children:Object(p.jsxs)("span",{className:"text-white bg-primary small d-flex align-items-center px-2 py-1",children:[Object(p.jsx)("i",{className:"fa fa-tag","aria-hidden":"true"}),Object(p.jsx)("span",{className:"ml-1",children:"Sale"})]})})]}),Object(p.jsx)("a",{href:"product/".concat(e.product.id),style:{justifyContent:"center",display:"flex"},children:Object(p.jsx)("img",{style:{width:"100px",height:"100px",marginTop:"10%"},src:e.product.image,className:"card-img-top",alt:"Product"})}),Object(p.jsxs)("div",{className:"card-body px-2 pb-2 pt-1 d-flex flex-column",children:[Object(p.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(p.jsx)("div",{children:Object(p.jsxs)("p",{className:"h4 text-primary",children:["$",e.product.price]})}),Object(p.jsx)("div",{children:Object(p.jsx)("a",{href:"#",className:"text-secondary lead","data-toggle":"tooltip","data-placement":"left",title:"","data-original-title":"Compare",children:Object(p.jsx)("i",{className:"fa fa-line-chart","aria-hidden":"true"})})})]}),Object(p.jsxs)("p",{className:"text-warning d-flex align-items-center mb-2",children:[Object(p.jsx)("i",{className:"fa fa-star","aria-hidden":"true"}),Object(p.jsx)("i",{className:"fa fa-star","aria-hidden":"true"}),Object(p.jsx)("i",{className:"fa fa-star","aria-hidden":"true"}),Object(p.jsx)("i",{className:"fa fa-star","aria-hidden":"true"}),Object(p.jsx)("i",{className:"fa fa-star","aria-hidden":"true"})]}),Object(p.jsx)("p",{className:"mb-0",children:Object(p.jsx)("strong",{children:Object(p.jsx)("a",{href:"#",className:"text-secondary",children:e.product.title})})}),Object(p.jsx)("p",{}),Object(p.jsxs)("div",{className:"d-flex justify-content-between mt-auto",children:[Object(p.jsx)("div",{className:"col px-0",children:Object(p.jsxs)("button",{className:"btn btn-outline-primary btn-block",onClick:function(){return function(e){console.log("".concat(e.title," is added")),console.log(e),L.a.post("http://localhost:5000/server/cart",e).then((function(e){return console.log(e.data)}))}(e.product)},children:["Add To Cart",Object(p.jsx)("i",{className:"fa fa-shopping-basket","aria-hidden":"true"})]})}),Object(p.jsx)("div",{className:"ml-2",children:Object(p.jsx)("a",{href:"#",className:"btn btn-outline-success","data-toggle":"tooltip","data-placement":"left",title:"","data-original-title":"Add to Wishlist",children:Object(p.jsx)("i",{className:"fa fa-heart","aria-hidden":"true"})})})]})]})]})})};function A(e){console.log(e.match.params.searchTerm);var t=Object(a.useState)([]),c=Object(u.a)(t,2),s=(c[0],c[1]),n=Object(a.useState)([]),r=Object(u.a)(n,2);r[0],r[1];return Object(a.useEffect)((function(){console.log("search mounted"),L.a.get("https://fakestoreapi.com/products").then((function(e){s(e.data)}))}),[]),Object(p.jsx)("div",{className:"container",style:{display:"flex",flexWrap:"wrap",marginTop:"2%"}})}var W=c(21),D=c.n(W),q=c(30),B=c(122),G=c(116),U=c(73),_=c(119),R=c(74),z=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)([]),r=Object(u.a)(n,2),i=r[0],l=r[1],o=Object(a.useState)([]),d=Object(u.a)(o,2),b=d[0],h=d[1];Object(a.useEffect)((function(){console.log("search results changed"),console.log(b)}),[b]),Object(a.useEffect)((function(){console.log("search mounted"),L.a.get("https://fakestoreapi.com/products").then((function(e){l(e.data)}))}),[]);var x=function(){var e=Object(q.a)(D.a.mark((function e(){var t;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("search clicked"),console.log(c),console.log(i),t=i.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())})),h(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=b.map((function(e){return Object(p.jsx)(F,{product:e},e.id)}));B.a;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(G.a,{children:Object(p.jsx)(U.a,{style:{display:"flex",justifyContent:"center",marginTop:"7%"},children:Object(p.jsxs)(_.a,{inline:!0,children:[Object(p.jsx)(R.a,{type:"text",placeholder:"Search",className:"mr-sm-2",value:c,onChange:function(e){return s(e.target.value)}}),Object(p.jsxs)(I.a,{variant:"outline-success",onClick:function(){return x()},children:["Search ",Object(p.jsx)("i",{class:"fas fa-search"})]})]})})}),Object(p.jsx)(G.a,{children:Object(p.jsx)(U.a,{style:{marginTop:"7%"},children:Object(p.jsx)(j.a,{style:{display:"flex",flexWrap:"wrap"},children:0!=b.length?O:""})})})]})};function J(e){var t="https://fakestoreapi.com/products/".concat(e.category),c=Object(a.useState)([]),s=Object(u.a)(c,2),n=s[0],r=s[1];Object(a.useEffect)((function(){L.a.get(t).then((function(e){r(e.data)})),console.log(n)}),[]);var i=n.map((function(e){return Object(p.jsx)(F,{product:e},e.id)}));return Object(p.jsx)("div",{className:"container",style:{display:"flex",flexWrap:"wrap",marginTop:"2%"},children:i})}var K=c(123);function M(){var e=Object(a.useRef)(),t=Object(a.useRef)(),c=m().login,s=Object(a.useState)(""),n=Object(u.a)(s,2),r=n[0],j=n[1],o=Object(l.e)();function d(){return(d=Object(q.a)(D.a.mark((function a(s){return D.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s.preventDefault(),a.prev=1,j(""),a.next=5,c(e.current.value,t.current.value);case 5:o.push("/"),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),j("Failed to log in");case 11:case"end":return a.stop()}}),a,null,[[1,8]])})))).apply(this,arguments)}return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(K.a,{children:Object(p.jsxs)(K.a.Body,{children:[Object(p.jsx)("h2",{className:"text-center mb-4",children:"Log In"}),r&&Object(p.jsx)(B.a,{variant:"danger",children:r}),Object(p.jsxs)(_.a,{onSubmit:function(e){return d.apply(this,arguments)},children:[Object(p.jsxs)(_.a.Group,{id:"email",children:[Object(p.jsx)(_.a.Label,{children:"Email"}),Object(p.jsx)(_.a.Control,{type:"email",ref:e,required:!0})]}),Object(p.jsxs)(_.a.Group,{id:"password",children:[Object(p.jsx)(_.a.Label,{children:"Password"}),Object(p.jsx)(_.a.Control,{type:"password",ref:t,required:!0})]}),Object(p.jsx)(I.a,{className:"w-100",type:"submit",children:"Log In"})]}),Object(p.jsx)("div",{className:"w-100 text-center mt-3",children:Object(p.jsx)(i.b,{to:"/forgot-password",children:"Forgot Password?"})})]})}),Object(p.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(p.jsx)(i.b,{to:"/signup",children:"Sign Up"})]})]})}function Q(){var e=Object(l.e)(),t=m().logout;return Object(a.useEffect)((function(){t(),e.push("/")}),[]),Object(p.jsx)("div",{})}function $(){var e=Object(a.useRef)(),t=Object(a.useRef)(),c=Object(a.useRef)(),s=m().signup,n=Object(a.useState)(""),r=Object(u.a)(n,2),j=r[0],o=r[1],d=Object(l.e)();function b(){return(b=Object(q.a)(D.a.mark((function a(n){return D.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.preventDefault(),t.current.value===c.current.value){a.next=3;break}return a.abrupt("return",o("Passwords do not match"));case 3:return a.prev=3,o(""),a.next=7,s(e.current.value,t.current.value);case 7:d.push("/"),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(3),o("Failed to create an account");case 13:case"end":return a.stop()}}),a,null,[[3,10]])})))).apply(this,arguments)}return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(K.a,{children:Object(p.jsxs)(K.a.Body,{children:[Object(p.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),j&&Object(p.jsx)(B.a,{variant:"danger",children:j}),Object(p.jsxs)(_.a,{onSubmit:function(e){return b.apply(this,arguments)},children:[Object(p.jsxs)(_.a.Group,{id:"email",children:[Object(p.jsx)(_.a.Label,{children:"Email"}),Object(p.jsx)(_.a.Control,{type:"email",ref:e,required:!0})]}),Object(p.jsxs)(_.a.Group,{id:"password",children:[Object(p.jsx)(_.a.Label,{children:"Password"}),Object(p.jsx)(_.a.Control,{type:"password",ref:t,required:!0})]}),Object(p.jsxs)(_.a.Group,{id:"password-confirm",children:[Object(p.jsx)(_.a.Label,{children:"Password Confirmation"}),Object(p.jsx)(_.a.Control,{type:"password",ref:c,required:!0})]}),Object(p.jsx)(I.a,{className:"w-100",type:"submit",children:"Sign Up"})]})]})}),Object(p.jsxs)("div",{className:"w-100 text-center mt-2",children:["Already have an account? ",Object(p.jsx)(i.b,{to:"/login",children:"Log In"})]})]})}function H(){var e=Object(a.useRef)(),t=Object(a.useRef)(),c=m().login,s=Object(a.useState)(""),n=Object(u.a)(s,2),r=n[0],i=n[1],j=Object(l.e)();function o(){return(o=Object(q.a)(D.a.mark((function a(s){return D.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s.preventDefault(),a.prev=1,i(""),a.next=5,c(e.current.value,t.current.value);case 5:j.push("/"),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(1),i("Failed to log in");case 11:case"end":return a.stop()}}),a,null,[[1,8]])})))).apply(this,arguments)}return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(K.a,{children:Object(p.jsxs)(K.a.Body,{children:[Object(p.jsx)("h2",{className:"text-center mb-4",children:"Admin Log In"}),r&&Object(p.jsx)(B.a,{variant:"danger",children:r}),Object(p.jsxs)(_.a,{onSubmit:function(e){return o.apply(this,arguments)},children:[Object(p.jsxs)(_.a.Group,{id:"email",children:[Object(p.jsx)(_.a.Label,{children:"Email"}),Object(p.jsx)(_.a.Control,{type:"email",ref:e,required:!0,placeholder:"admin@gmail.com"})]}),Object(p.jsxs)(_.a.Group,{id:"password",children:[Object(p.jsx)(_.a.Label,{children:"Password"}),Object(p.jsx)(_.a.Control,{type:"password",ref:t,required:!0})]}),Object(p.jsx)(I.a,{className:"w-100",type:"submit",children:"Log In"})]})]})})})}var V=function(){return Object(p.jsx)(i.a,{children:Object(p.jsxs)(g,{children:[Object(p.jsx)(v,{}),Object(p.jsxs)(j.a,{children:[Object(p.jsx)(l.a,{path:"/",component:function(){return Object(p.jsx)(J,{category:""})},exact:!0}),Object(p.jsx)(l.a,{path:"/electronics",component:function(){return Object(p.jsx)(J,{category:"category/electronics"})}}),Object(p.jsx)(l.a,{path:"/jewelery",component:function(){return Object(p.jsx)(J,{category:"category/jewelery"})}}),Object(p.jsx)(l.a,{path:"/men_clothing",component:function(){return Object(p.jsx)(J,{category:"category/men's%20clothing"})}}),Object(p.jsx)(l.a,{path:"/women_clothing",component:function(){return Object(p.jsx)(J,{category:"category/women's%20clothing"})}}),Object(p.jsx)(l.a,{path:"/cart",component:P}),Object(p.jsx)(l.a,{path:"/product/:productId",component:E}),Object(p.jsx)(l.a,{path:"/search",component:z}),Object(p.jsx)(l.a,{path:"/search_result/:searchTerm",component:A}),Object(p.jsx)(l.a,{path:"/login",component:M}),Object(p.jsx)(l.a,{path:"/admin/login",component:H}),Object(p.jsx)(l.a,{path:"/signup",component:$}),Object(p.jsx)(l.a,{path:"/logout",component:Q})]}),Object(p.jsx)(k,{})]})})},X=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,124)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))};r.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(V,{})}),document.getElementById("root")),X()},79:function(e,t,c){},80:function(e,t,c){},82:function(e,t,c){}},[[111,1,2]]]);
//# sourceMappingURL=main.21ee2402.chunk.js.map