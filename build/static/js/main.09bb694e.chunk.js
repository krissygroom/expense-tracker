(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(3),a=n.n(s),i=(n(9),n(10),n(4)),l=(n(11),n(0)),r=function(e){var t=e.date,n=t.toLocaleString("en-US",{day:"2-digit"}),c=t.toLocaleString("en-US",{month:"long"}),s=t.getFullYear();return Object(l.jsxs)("div",{className:"expense-item__date",children:[Object(l.jsx)("div",{className:"expense-item__date-month",children:c}),Object(l.jsx)("div",{className:"expense-item__date-year",children:s}),Object(l.jsx)("div",{className:"expense-item__date-day",children:n})]})},d=(n(13),n(14),function(e){var t="card "+e.className;return Object(l.jsx)("div",{className:t,children:e.children})}),j=function(e){var t=Object(c.useState)(e.title),n=Object(i.a)(t,2),s=n[0],a=n[1];console.log("ExpenseItem evaluated by React");return Object(l.jsxs)(d,{className:"expense-item",children:[Object(l.jsx)(r,{date:e.date}),Object(l.jsxs)("div",{className:"expense-item__description",children:[Object(l.jsx)("h2",{children:s}),Object(l.jsx)("div",{className:"expense-item__price",children:"$".concat(e.amount)})]}),Object(l.jsx)("button",{onClick:function(){a("Updated!!"),console.log(s)},children:"Change Title"})]})},o=(n(15),function(e){var t=e.expenses;return Object(l.jsx)("div",{children:Object(l.jsx)(d,{className:"expenses card-lg",children:t.map((function(e){return Object(l.jsx)(j,{date:e.date,title:e.title,amount:e.amount},e.id)}))})})}),x=(n(16),n(17),n.p+"static/media/money.07003eb2.png"),m=function(){return Object(l.jsxs)("form",{children:[Object(l.jsx)("div",{className:"new-expense__form",children:Object(l.jsxs)("div",{className:"new-expense__controls",children:[Object(l.jsxs)("div",{className:"new-expense__control",children:[Object(l.jsx)("label",{children:"Title"}),Object(l.jsx)("input",{type:"text",placeholder:"Enter expense description"})]}),Object(l.jsxs)("div",{className:"new-expense__control",children:[Object(l.jsx)("label",{children:"Amount"}),Object(l.jsx)("input",{type:"number",min:"0.01",step:"0.01",placeholder:"Enter expense amount"})]}),Object(l.jsxs)("div",{className:"new-expense__control date",children:[Object(l.jsx)("label",{children:"Date"}),Object(l.jsx)("input",{type:"date",min:"2019-01-01",max:"2022-12-31"})]})]})}),Object(l.jsx)("div",{className:"new-expense__photo",children:Object(l.jsx)("img",{src:x,alt:"Piggy Bank"})}),Object(l.jsx)("div",{className:"new-expense__actions",children:Object(l.jsx)("button",{type:"submit",children:"Add Expense"})})]})},b=function(){return Object(l.jsx)(d,{className:"new-expense card-lg",children:Object(l.jsx)(m,{})})},p=function(){var e=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,10,12)}];return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"expense-tracker__header",children:Object(l.jsx)("h2",{className:"expense-tracker__title",children:"Expense Tracker"})}),Object(l.jsx)(b,{}),Object(l.jsx)(o,{expenses:e})]})};a.a.render(Object(l.jsx)(p,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.09bb694e.chunk.js.map