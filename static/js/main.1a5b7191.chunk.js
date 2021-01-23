(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={form:"ContactForm_form__2IF4m",label:"ContactForm_label__2mfXY",input:"ContactForm_input__3dHde",example:"ContactForm_example__15KCe",button:"ContactForm_button__3oBpw"}},16:function(t,e,n){t.exports={title:"ContactList_title__3t1iA",list:"ContactList_list__2cE9S",item:"ContactList_item__MbtlS",button:"ContactList_button__3KnM2"}},24:function(t,e,n){t.exports={container:"Filter_container__1zC8G",label:"Filter_label__19jWm",input:"Filter_input__2CEsa"}},25:function(t,e,n){t.exports={mainDiv:"App_mainDiv__3UoZL",container:"App_container__1uyUS",title:"App_title__21udz"}},41:function(t,e,n){},46:function(t,e,n){t.exports={contact:"Contact_contact__3wrT3"}},47:function(t,e,n){t.exports={alert:"Alert_alert__fM2df"}},80:function(t,e,n){},81:function(t,e,n){"use strict";n.r(e);var c,a,r,o=n(1),u=n(0),i=n.n(u),s=n(9),l=n.n(s),b=n(8),j=n(14),f=n(3),p=n(43),m=n.n(p),O=n(2),h=Object(f.b)("contacts/fetchRequest"),d=Object(f.b)("contacts/fetchSuccess"),x=Object(f.b)("contacts/fetchError"),v=Object(f.b)("contacts/createRequest"),_=Object(f.b)("contacts/createSuccess"),C=Object(f.b)("contacts/createError"),w=Object(f.b)("contacts/deleteRequest"),N=Object(f.b)("contacts/deleteSuccess"),y=Object(f.b)("contacts/deleteError"),g=Object(f.c)([],(c={},Object(O.a)(c,d,(function(t,e){var n=e.payload;return Object(j.a)(n)})),Object(O.a)(c,_,(function(t,e){var n=e.payload;return[].concat(Object(j.a)(t),[n])})),Object(O.a)(c,N,(function(t,e){var n=e.payload;return Object(j.a)(t.filter((function(t){return t.id!==n})))})),c)),k=Object(f.c)(!1,(a={},Object(O.a)(a,h,(function(){return!0})),Object(O.a)(a,d,(function(){return!1})),Object(O.a)(a,x,(function(){return!1})),Object(O.a)(a,v,(function(){return!0})),Object(O.a)(a,_,(function(){return!1})),Object(O.a)(a,C,(function(){return!1})),Object(O.a)(a,w,(function(){return!0})),Object(O.a)(a,N,(function(){return!1})),Object(O.a)(a,y,(function(){return!1})),a)),S=Object(f.c)(null,(r={},Object(O.a)(r,x,(function(t){return t})),Object(O.a)(r,C,(function(t){return t})),Object(O.a)(r,y,(function(t){return t})),r)),L=Object(f.b)("filter/changed"),A={contacts:g,filter:Object(f.c)("",Object(O.a)({},L,(function(t,e){return e.payload}))),error:S,loading:k},F=Object(f.a)({reducer:A,middleware:[].concat(Object(j.a)(Object(f.d)()),[m.a]),devTools:!1}),E=n(19),D=n(20),q=n(22),I=n(21),M=n(44),T=n(45),R=n(18),U=function(t){return t.contacts},z=function(t){return t.filter},B=function(t){return U(t).length},J=Object(R.a)([U,z],(function(t,e){return t.filter((function(t){var n=t.name;return n&&n.toLowerCase().includes(e.toLowerCase())}))})),K=n(11),P=n.n(K),G=n(23),H=n(15),W=n.n(H);W.a.defaults.baseURL="http://localhost:4000";var X=n(10),Y=n.n(X),Z=function(t){Object(q.a)(n,t);var e=Object(I.a)(n);function n(){var t;Object(E.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.heandleInput=function(e){t.setState(Object(O.a)({},e.currentTarget.name,e.currentTarget.value))},t.createNewContact=function(e){e.preventDefault(),t.verifyNewContact(t.state)&&t.props.onSubmit(Object(M.a)({id:Object(T.v4)()},t.state)),t.setState({name:"",number:""})},t.verifyNewContact=function(e){var n=e.name,c=e.number,a=!0;return t.props.contacts.forEach((function(e){var r=e.name,o=e.number;r.toLowerCase()!==n.toLowerCase()&&c!==o||(t.props.showAlert(),a=!1)})),a},t}return Object(D.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("form",{className:Y.a.form,onSubmit:this.createNewContact,children:[Object(o.jsxs)("label",{className:Y.a.label,children:["Name:",Object(o.jsx)("input",{className:Y.a.input,name:"name",type:"text",placeholder:"Awesome name",value:this.state.name,onChange:this.heandleInput,required:!0})]}),Object(o.jsxs)("label",{className:Y.a.label,children:["Phone ",Object(o.jsx)("span",{className:Y.a.example,children:"(000-00-00)"}),":",Object(o.jsx)("input",{className:Y.a.input,name:"number",type:"tel",pattern:"[0-9]{3}-[0-9]{2}-[0-9]{2}",maxLength:"9",placeholder:"Cool phonenumber",value:this.state.number,onChange:this.heandleInput,required:!0})]}),Object(o.jsx)("button",{className:Y.a.button,type:"submit",children:"Create contact"})]})}}]),n}(u.Component),Q=Object(b.b)((function(t){return{contacts:U(t)}}),(function(t){return{onSubmit:function(e){return t(function(t){return function(){var e=Object(G.a)(P.a.mark((function e(n){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(v()),W.a.post("/contacts",t).then((function(t){var e=t.data;return n(_(e))})).catch((function(t){return n(C(t))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(e))}}}))(Z),V=n(83),$=n(82),tt=n(46),et=n.n(tt),nt=function(t){var e=t.name,n=t.number;return Object(o.jsxs)("div",{className:et.a.contact,children:[Object(o.jsx)("span",{children:e}),Object(o.jsx)("span",{children:n})]})},ct=n(16),at=n.n(ct),rt=(n(41),Object(b.b)((function(t){return{contacts:J(t)}}),(function(t){return{deleteOnClick:function(e){return t((n=e.target.id,function(){var t=Object(G.a)(P.a.mark((function t(e){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(w()),W.a.delete("/contacts/".concat(n)).then((function(t){var n=t.data;return e(N(n))})).catch((function(t){return e(y(t))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));var n}}}))((function(t){var e=t.contacts,n=t.deleteOnClick;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{className:at.a.title,children:"Contacts"}),Object(o.jsx)(V.a,Object(O.a)({appear:!1,component:"ul",children:"li",className:at.a.list},"children",e.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(o.jsx)($.a,{classNames:"contacts",timeout:250,children:Object(o.jsxs)("li",{className:at.a.item,children:[Object(o.jsx)(nt,{name:c,number:a}),Object(o.jsx)("button",{className:at.a.button,id:e,onClick:n,children:"Delete"})]})},e)}))))]})}))),ot=n(24),ut=n.n(ot),it=Object(b.b)((function(t){return{value:z(t)}}),(function(t){return{onChange:function(e){return t(L(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(o.jsx)("div",{className:ut.a.container,children:Object(o.jsxs)("label",{className:ut.a.label,children:["Filter:",Object(o.jsx)("input",{className:ut.a.input,type:"text",value:e,onChange:n})]})})})),st=n(47),lt=n.n(st),bt=function(t){var e=t.text;return Object(o.jsx)("div",{className:lt.a.alert,children:e})},jt=n(25),ft=n.n(jt),pt=(n(80),function(t){Object(q.a)(n,t);var e=Object(I.a)(n);function n(){var t;Object(E.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={alert:!1},t.showAlert=function(){t.setState({alert:!0}),setTimeout((function(){return t.setState({alert:!1})}),2e3)},t}return Object(D.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){var t=this.props.contactsLength,e=this.state.alert;return Object(o.jsx)("div",{className:ft.a.mainDiv,children:Object(o.jsxs)("div",{className:ft.a.container,children:[Object(o.jsx)($.a,{in:!0,appear:!0,timeout:250,classNames:"title",unmountOnExit:!0,children:Object(o.jsx)("h1",{className:ft.a.title,children:"Phonebook"})}),Object(o.jsx)(Q,{showAlert:this.showAlert}),Object(o.jsx)($.a,{in:t>1,appear:!0,timeout:250,classNames:"fade",unmountOnExit:!0,children:Object(o.jsx)(it,{})}),Object(o.jsx)(rt,{}),Object(o.jsx)($.a,{in:e,appear:!0,timeout:250,classNames:"fade",unmountOnExit:!0,children:Object(o.jsx)(bt,{text:"Contact is already exist"})})]})})}}]),n}(u.Component)),mt=Object(b.b)((function(t){return{contactsLength:B(t)}}),(function(t){return{fetchContacts:function(){return t(function(){var t=Object(G.a)(P.a.mark((function t(e){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(h()),W.a.get("/contacts").then((function(t){var n=t.data;return e(d(n))})).catch((function(t){return e(x(t))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}}))(pt);l.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(b.a,{store:F,children:Object(o.jsx)(mt,{})})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.1a5b7191.chunk.js.map