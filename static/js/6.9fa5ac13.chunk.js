(this["webpackJsonpboxgreen-ecommerce-replica"]=this["webpackJsonpboxgreen-ecommerce-replica"]||[]).push([[6],{73:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=(a(73),a(11)),l=a(5),o=a(14);t.default=function(){var e=Object(r.c)((function(e){return e.cartReducer.cartItems})),t=Object(r.b)(),a=e.reduce((function(e,t){return e+t.count}),0),c=e.reduce((function(e,t){return e+t.count*t.price}),0);return n.a.createElement("section",{className:"cart-page-container"},n.a.createElement("div",{className:"cart-page-left-container"},0===e.length?n.a.createElement("div",{className:"empty-cart-container"},n.a.createElement("img",{alt:"empty-cart",src:"".concat("","/images/empty-cart.png")}),n.a.createElement("p",null,"oops, your cart is empty"),n.a.createElement(l.b,{className:"btn btn-primary btn-lg",to:"/shop"},"start adding snacks")):n.a.createElement("div",{className:"full-cart-container"},n.a.createElement("h3",null,"Shopping Cart"),n.a.createElement("div",{className:"cart-item-list"},e.map((function(a){return n.a.createElement("div",{className:"cart-individual-item",key:a.id},n.a.createElement("img",{alt:a.title,src:"".concat("","/products/").concat(a.id,".jpg")}),n.a.createElement("div",{className:"cart-individual-item-title"},n.a.createElement("p",null,a.title)),n.a.createElement("input",{onChange:function(c){return t(o.a.cartActions.updateProductCount(e,a,c.target.value))},className:"form-control line-item-quantity",min:"1",type:"number",value:a.count}),n.a.createElement("p",null,"$".concat((a.count*a.price).toFixed(2))),n.a.createElement("div",{className:"remove-item-from-cart"},n.a.createElement("button",{onClick:function(){return t(o.a.cartActions.removeFromCart(e,a))}},"X"),n.a.createElement("p",{onClick:function(){return t(o.a.cartActions.removeFromCart(e,a))}},"remove")))}))))),n.a.createElement("div",{className:"cart-page-right-container"},n.a.createElement("h2",null,"total"),n.a.createElement("hr",null),n.a.createElement("div",{className:"subtotal-section"},"subtotal (".concat(a," items) $").concat(c.toFixed(2))),n.a.createElement("hr",null),n.a.createElement("div",{className:"total-section"},"total $".concat(c.toFixed(2))),n.a.createElement("hr",null),n.a.createElement("div",{className:"cart-buttons-section"},n.a.createElement(l.b,{className:"btn btn-primary btn-checkout",to:"/shop"},"subscriber login"),n.a.createElement(l.b,{className:"btn btn-primary btn-checkout btn-checkout-2",to:"/shop"},"checkout as guest")),n.a.createElement("p",{className:"free-shipping"}," free shipping if you spend $30 and above!"),n.a.createElement("div",{className:"coupon-container"},n.a.createElement("input",{type:"search",placeholder:"Coupon code"}),n.a.createElement("button",null,"apply"))))}}}]);
//# sourceMappingURL=6.9fa5ac13.chunk.js.map