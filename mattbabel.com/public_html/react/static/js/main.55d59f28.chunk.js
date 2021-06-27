(this["webpackJsonpcover-letter-builder"]=this["webpackJsonpcover-letter-builder"]||[]).push([[0],{17:function(e){e.exports=JSON.parse('[{"name":"eight years of development experience","selected":false},{"name":"three fully developed projects","selected":false},{"name":"a portfolio website","selected":false},{"name":"hands-on professional experience working as a Full Stack Developer","selected":false},{"name":"a strong background in Java","selected":false},{"name":"hands-on professional experience working with .Net, C#, Javascript and SQL as an Applications Developer","selected":false},{"name":"hands-on professional experience working as an Applications Developer","selected":false},{"name":"three fully developed projects in Java","selected":false},{"name":"a published Android App","selected":false},{"name":"hands-on professional experience working as a Full Stack Applications Developer","selected":false},{"name":"hands-on professional experience working as a Full Stack Developer for an e-commerce company","selected":false},{"name":"seven years of Java development experience","selected":false},{"name":"seven years of Computer Science study and development experience","selected":false}]')},25:function(e,t,a){},27:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(16),c=a.n(r),o=(a(25),a(5)),i=a(6),l=a(8),d=a(7),h=(a(26),a(27),a(10)),j=a(4),b=a(20),p=a(9),u=a(1),x="selected";var m=function(e){var t=s.a.useState({boxOneData:e.data,boxTwoData:[],draggedItem:{},addValue:""}),a=Object(b.a)(t,2),n=a[0],r=a[1],c=function(e,t,a){var s;r(Object(j.a)(Object(j.a)({},n),{},(s={},Object(h.a)(s,t,n[t].map((function(t){return t.name===e.dataItem.name?t.selected=!t.selected:e.nativeEvent.ctrlKey||(t.selected=!1),t}))),Object(h.a)(s,a,n[a].map((function(e){return e.selected=!1,e}))),s)))},o=function(e){var t=e.toolName||"",a=Object(p.c)(n.boxOneData,n.boxTwoData,t,x);r(Object(j.a)(Object(j.a)({},n),{},{boxOneData:a.listBoxOneData,boxTwoData:a.listBoxTwoData}),d(a.listBoxTwoData))},i=function(e){r(Object(j.a)(Object(j.a)({},n),{},{draggedItem:e.dataItem}))},l=function(e){var t=Object(p.d)(n.boxOneData,n.boxTwoData,n.draggedItem,e.dataItem,"name");r(Object(j.a)(Object(j.a)({},n),{},{boxOneData:t.listBoxOneData,boxTwoData:t.listBoxTwoData}),d(t.listBoxTwoData))},d=function(t){var a=[];t.forEach((function(e){return a.push(e.name)})),e.update(a)};return Object(u.jsx)("div",{className:"container mt-3",children:Object(u.jsxs)("div",{className:"row justify-content-center",children:[Object(u.jsxs)("div",{className:"col k-pr-3",children:[Object(u.jsx)("label",{for:"add",children:e.addHeader}),Object(u.jsx)("input",{type:"text",id:"add",name:"add",required:!0,minLength:"4",maxLength:"200",size:"20",value:n.addValue,onChange:function(e){return r(Object(j.a)(Object(j.a)({},n),{},{addValue:e.target.value}))},onKeyDown:function(e){return function(e){13===e.keyCode&&(n.boxOneData.push({name:n.addValue,selected:!1}),r(Object(j.a)(Object(j.a)({},n),{},{addValue:""})))}(e)}})]}),Object(u.jsxs)("div",{className:"col k-pr-2",children:[Object(u.jsx)("h6",{children:e.boxOneHeader}),Object(u.jsx)(p.a,{style:{height:e.boxOneHeight,width:"100%"},data:n.boxOneData,textField:"name",selectedField:x,onItemClick:function(e){return c(e,"boxOneData","boxTwoData")},onDragStart:i,onDrop:l,toolbar:function(){return Object(u.jsx)(p.b,{tools:["moveUp","moveDown","transferTo","transferFrom","transferAllTo","transferAllFrom","remove"],data:n.boxOneData,dataConnected:n.boxTwoData,onToolClick:o})}})]}),Object(u.jsxs)("div",{className:"col k-pl-0",children:[Object(u.jsx)("h6",{children:e.boxTwoHeader}),Object(u.jsx)(p.a,{style:{height:e.boxTwoHeight,width:"100%"},data:n.boxTwoData,textField:"name",selectedField:x,onItemClick:function(e){return c(e,"boxTwoData","boxOneData")},onDragStart:i,onDrop:l})]})]})})},O=a(17),g=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{for:"dear",children:"Dear input: "}),Object(u.jsx)("input",{type:"text",id:"dear",name:"dear",required:!0,minLength:"4",maxLength:"30",size:"30",value:this.props.dearValue,onChange:function(t){return e.props.dearInputChange(t.target.value)}}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{for:"jobsite",children:"Job Site: "}),Object(u.jsx)("input",{type:"text",id:"jobsite",name:"jobsite",required:!0,minLength:"4",maxLength:"50",size:"30",value:this.props.jobSiteValue,onChange:function(t){return e.props.jobSiteChange(t.target.value)}}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{for:"jobtitle",children:"Job Title: "}),Object(u.jsx)("input",{type:"text",id:"jobtitle",name:"jobtitle",required:!0,minLength:"4",maxLength:"50",size:"30",value:this.props.jobTitleValue,onChange:function(t){return e.props.jobTitleChange(t.target.value)}}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{for:"company",children:"Company Name: "}),Object(u.jsx)("input",{type:"text",id:"company",name:"company",required:!0,minLength:"4",maxLength:"50",size:"30",value:this.props.companyValue,onChange:function(t){return e.props.companyChange(t.target.value)}}),Object(u.jsx)(m,{update:this.props.experienceChange,data:O,addHeader:"Add Thing to Say",boxOneHeader:"Possible Things to Say",boxTwoHeader:"Currently Saying",boxOneHeight:400,boxTwoHeight:300}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"checkbox",id:"secondParagraph",name:"secondParagraph",checked:this.props.secondParagraph,onChange:this.props.secondParagraphChange}),Object(u.jsx)("label",{for:"secondParagraph",children:"\u2003Second Paragraph"}),Object(u.jsx)(m,{update:this.props.requirementsChange,data:[],addHeader:"Add Highlighted Requirement",boxOneHeader:"Possible Requirements",boxTwoHeader:"Current Requirements",boxOneHeight:250,boxTwoHeight:250})]})}}]),a}(n.Component),f=(n.Component,n.Component,function(e){var t=e.jobsite,a=e.jobtitle,n=e.company;return Object(u.jsxs)("span",{children:["This letter is to express my interest in your posting on ",t," for a ",a," at ",n,"."]})}),v=function(e){var t=e.person;return Object(u.jsxs)("p",{children:["Dear ",t,":"]})};var y=function(e){return Object(u.jsxs)("span",{children:[" With ",function(){var t=e.arr.length-1,a="";return e.arr.forEach((function(e,n){a=n===t&&0!==n?a.concat("and "+e+", "):a.concat(e+", ")})),a}(),"I am confident I will be an asset to your organization."]})},w=function(){return Object(u.jsx)("p",{children:"I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, as continuing to learn new languages and development techniques are important to me and the success of your organization."})};var C=function(e){return Object(u.jsxs)("p",{children:[Object(u.jsx)("span",{children:"Your listed requirements closely match my background and skills. A few I would like to highlight that would enable me to contribute to your bottom line are:"}),Object(u.jsx)("ul",{children:e.points.map((function(e){return Object(u.jsx)("li",{children:e})}))})]})},k=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"I\u2019ve attached a copy of my resume that details my projects and experience in software development. I can be reached via my cell phone, ***-***-****, or via email at mattababel@gmail.com."}),Object(u.jsx)("p",{children:"Thank you for your time and consideration. I look forward to speaking with you about this opportunity."}),Object(u.jsx)("p",{children:"Sincerely,"}),Object(u.jsx)("p",{children:"Matthew Babel"})]})},D=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.secondParagraph?Object(u.jsx)(w,{}):"";return Object(u.jsxs)("div",{align:"left",children:[Object(u.jsx)(v,{person:this.props.dearPerson}),Object(u.jsxs)("p",{children:[Object(u.jsx)(f,{jobsite:this.props.jobsite,jobtitle:this.props.jobtitle,company:this.props.company}),Object(u.jsx)(y,{arr:this.props.exp})]}),Object(u.jsx)("p",{children:e}),Object(u.jsx)(C,{points:this.props.requirements}),Object(u.jsx)(k,{})]})}}]),a}(n.Component),T=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).dearInputChange=function(e){n.setState({dearPerson:e})},n.jobSiteChange=function(e){n.setState({jobsite:e})},n.jobTitleChange=function(e){n.setState({jobtitle:e})},n.companyChange=function(e){n.setState({company:e})},n.experienceChange=function(e){n.setState({experience:e})},n.requirementsChange=function(e){console.log(JSON.stringify(e)),n.setState({requirementPoints:e})},n.secondParagraphChange=function(){n.setState({secondParagraph:!n.state.secondParagraph})},n.state={dearPerson:"Hiring Manager",jobsite:"indeed.com",jobtitle:"Software Developer",company:"your company",experience:[],requirementPoints:[],secondParagraph:!0},n}return Object(i.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"container-fluid mt-4",children:[Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"Cover Letter Builder"})}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-md-6 text-left",children:Object(u.jsx)(g,{dearInputChange:this.dearInputChange,dearValue:this.state.dearPerson,jobSiteChange:this.jobSiteChange,jobSiteValue:this.state.jobsite,jobTitleChange:this.jobTitleChange,jobTitleValue:this.state.jobtitle,companyChange:this.companyChange,companyValue:this.state.company,experienceChange:this.experienceChange,requirementsChange:this.requirementsChange,secondParagraphChange:this.secondParagraphChange,secondParagraph:this.state.secondParagraph})}),Object(u.jsx)("div",{className:"col-md-6",children:Object(u.jsx)(D,{dearPerson:this.state.dearPerson,jobsite:this.state.jobsite,jobtitle:this.state.jobtitle,company:this.state.company,exp:this.state.experience,requirements:this.state.requirementPoints,secondParagraph:this.state.secondParagraph})})]})]})}}]),a}(n.Component),S=a(19),P=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(u.jsx)(S.a,{basename:"/react",children:Object(u.jsxs)("body",{children:[Object(u.jsx)("header",{children:Object(u.jsxs)("div",{class:"myheader container-fluid",children:[Object(u.jsx)("div",{id:"nameLink",children:Object(u.jsx)("a",{href:"/",children:Object(u.jsx)("h1",{class:"textshadow",children:"Matthew Babel"})})}),Object(u.jsxs)("nav",{children:[Object(u.jsxs)("ul",{class:"desktop-nav",children:[Object(u.jsxs)("li",{children:[" ",Object(u.jsx)("a",{class:"textshadow",href:"http://www.linkedin.com/in/matthew-babel",target:"_blank",children:"Linkedin"})]}),Object(u.jsxs)("li",{children:[" ",Object(u.jsx)("a",{class:"textshadow",href:"https://github.com/matthewBabel",target:"_blank",children:"Github"})]}),Object(u.jsxs)("li",{children:[" ",Object(u.jsx)("a",{class:"textshadow",href:"/about/",children:"About"})]}),Object(u.jsxs)("li",{children:[" ",Object(u.jsx)("a",{class:"textshadow",href:"/contact/",children:"Contact"})]}),Object(u.jsxs)("li",{children:[" ",Object(u.jsx)("a",{class:"textshadow",href:"/react/",children:"More"})]})]}),Object(u.jsxs)("ul",{class:"menu",children:[Object(u.jsx)("li",{class:"logo textshadow",children:Object(u.jsx)("b",{children:"Menu"})}),Object(u.jsxs)("li",{class:"item",children:[" ",Object(u.jsx)("a",{class:"textshadow",href:"http://www.linkedin.com/in/matthew-babel",target:"_blank",children:"Linkedin"})]}),Object(u.jsxs)("li",{class:"item",children:[" ",Object(u.jsx)("a",{class:"textshadow",href:"https://github.com/matthewBabel",target:"_blank",children:"Github"})]}),Object(u.jsxs)("li",{class:"item",children:[" ",Object(u.jsx)("a",{class:"textshadow",href:"/about/",children:"About"})]}),Object(u.jsxs)("li",{class:"item",children:[" ",Object(u.jsx)("a",{class:"textshadow",href:"/contact/",children:"Contact"})]}),Object(u.jsxs)("li",{class:"item",children:[" ",Object(u.jsx)("a",{class:"textshadow",href:"/react/",children:"More"})]}),Object(u.jsx)("li",{class:"toggle",children:Object(u.jsx)("a",{href:"#",children:Object(u.jsx)("i",{class:"fas fa-bars"})})})]})]})]})}),Object(u.jsx)("div",{className:"App header-margin",children:Object(u.jsx)(T,{})})]})})}}]),a}(n.Component),I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,35)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),r(e),c(e)}))};c.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(P,{})}),document.getElementById("root")),I()}},[[34,1,2]]]);
//# sourceMappingURL=main.55d59f28.chunk.js.map