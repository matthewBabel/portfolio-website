(this["webpackJsonpcover-letter-builder"]=this["webpackJsonpcover-letter-builder"]||[]).push([[0],{17:function(e){e.exports=JSON.parse('[{"name":"eight years of development experience","selected":false},{"name":"three fully developed projects","selected":false},{"name":"a portfolio website","selected":false},{"name":"hands-on professional experience working as a Full Stack Developer","selected":false},{"name":"a strong background in Java","selected":false},{"name":"hands-on professional experience working with .Net, C#, Javascript and SQL as an Applications Developer","selected":false},{"name":"hands-on professional experience working as an Applications Developer","selected":false},{"name":"three fully developed projects in Java","selected":false},{"name":"a published Android App","selected":false},{"name":"hands-on professional experience working as a Full Stack Applications Developer","selected":false},{"name":"hands-on professional experience working as a Full Stack Developer for an e-commerce company","selected":false},{"name":"seven years of Java development experience","selected":false},{"name":"seven years of Computer Science study and development experience","selected":false}]')},25:function(e,t,a){},27:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),i=a.n(o),s=(a(25),a(5)),c=a(6),l=a(8),d=a(7),b=(a(26),a(27),a(10)),j=a(4),h=a(20),u=a(9),p=a(1),m="selected";var x=function(e){var t=r.a.useState({boxOneData:e.data,boxTwoData:[],draggedItem:{},addValue:""}),a=Object(h.a)(t,2),n=a[0],o=a[1],i=function(e,t,a){var r;o(Object(j.a)(Object(j.a)({},n),{},(r={},Object(b.a)(r,t,n[t].map((function(t){return t.name===e.dataItem.name?t.selected=!t.selected:e.nativeEvent.ctrlKey||(t.selected=!1),t}))),Object(b.a)(r,a,n[a].map((function(e){return e.selected=!1,e}))),r)))},s=function(e){var t=e.toolName||"",a=Object(u.c)(n.boxOneData,n.boxTwoData,t,m);o(Object(j.a)(Object(j.a)({},n),{},{boxOneData:a.listBoxOneData,boxTwoData:a.listBoxTwoData}),d(a.listBoxTwoData))},c=function(e){o(Object(j.a)(Object(j.a)({},n),{},{draggedItem:e.dataItem}))},l=function(e){var t=Object(u.d)(n.boxOneData,n.boxTwoData,n.draggedItem,e.dataItem,"name");o(Object(j.a)(Object(j.a)({},n),{},{boxOneData:t.listBoxOneData,boxTwoData:t.listBoxTwoData}),d(t.listBoxTwoData))},d=function(t){var a=[];t.forEach((function(e){return a.push(e.name)})),e.update(a)};return Object(p.jsx)("div",{className:"container mt-3",children:Object(p.jsxs)("div",{className:"row justify-content-center",children:[Object(p.jsxs)("div",{className:"col k-pr-3",children:[Object(p.jsx)("label",{for:"add",children:e.addHeader}),Object(p.jsx)("input",{type:"text",id:"add",name:"add",required:!0,minLength:"4",maxLength:"200",size:"20",value:n.addValue,onChange:function(e){return o(Object(j.a)(Object(j.a)({},n),{},{addValue:e.target.value}))},onKeyDown:function(e){return function(e){13===e.keyCode&&(n.boxOneData.push({name:n.addValue,selected:!1}),o(Object(j.a)(Object(j.a)({},n),{},{addValue:""})))}(e)}})]}),Object(p.jsxs)("div",{className:"col k-pr-2",children:[Object(p.jsx)("h6",{children:e.boxOneHeader}),Object(p.jsx)(u.a,{style:{height:e.boxOneHeight,width:"100%"},data:n.boxOneData,textField:"name",selectedField:m,onItemClick:function(e){return i(e,"boxOneData","boxTwoData")},onDragStart:c,onDrop:l,toolbar:function(){return Object(p.jsx)(u.b,{tools:["moveUp","moveDown","transferTo","transferFrom","transferAllTo","transferAllFrom","remove"],data:n.boxOneData,dataConnected:n.boxTwoData,onToolClick:s})}})]}),Object(p.jsxs)("div",{className:"col k-pl-0",children:[Object(p.jsx)("h6",{children:e.boxTwoHeader}),Object(p.jsx)(u.a,{style:{height:e.boxTwoHeight,width:"100%"},data:n.boxTwoData,textField:"name",selectedField:m,onItemClick:function(e){return i(e,"boxTwoData","boxOneData")},onDragStart:c,onDrop:l})]})]})})},O=a(17),g=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{for:"dear",children:"Dear input: "}),Object(p.jsx)("input",{type:"text",id:"dear",name:"dear",required:!0,minLength:"4",maxLength:"30",size:"30",value:this.props.dearValue,onChange:function(t){return e.props.dearInputChange(t.target.value)}}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{for:"jobsite",children:"Job Site: "}),Object(p.jsx)("input",{type:"text",id:"jobsite",name:"jobsite",required:!0,minLength:"4",maxLength:"50",size:"30",value:this.props.jobSiteValue,onChange:function(t){return e.props.jobSiteChange(t.target.value)}}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{for:"jobtitle",children:"Job Title: "}),Object(p.jsx)("input",{type:"text",id:"jobtitle",name:"jobtitle",required:!0,minLength:"4",maxLength:"50",size:"30",value:this.props.jobTitleValue,onChange:function(t){return e.props.jobTitleChange(t.target.value)}}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{for:"company",children:"Company Name: "}),Object(p.jsx)("input",{type:"text",id:"company",name:"company",required:!0,minLength:"4",maxLength:"50",size:"30",value:this.props.companyValue,onChange:function(t){return e.props.companyChange(t.target.value)}}),Object(p.jsx)(x,{update:this.props.experienceChange,data:O,addHeader:"Add Thing to Say",boxOneHeader:"Possible Things to Say",boxTwoHeader:"Currently Saying",boxOneHeight:400,boxTwoHeight:300}),Object(p.jsx)("br",{}),Object(p.jsx)("input",{type:"checkbox",id:"secondParagraph",name:"secondParagraph",checked:this.props.secondParagraph,onChange:this.props.secondParagraphChange}),Object(p.jsx)("label",{for:"secondParagraph",children:"\u2003Second Paragraph"}),Object(p.jsx)(x,{update:this.props.requirementsChange,data:[],addHeader:"Add Highlighted Requirement",boxOneHeader:"Possible Requirements",boxTwoHeader:"Current Requirements",boxOneHeight:250,boxTwoHeight:250})]})}}]),a}(n.Component),f=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("div",{align:"center",children:[Object(p.jsx)("h1",{children:"Matthew Babel"}),Object(p.jsx)("p",{children:"Robesonia, PA 19551 \xb7 610-334-7967 \xb7 www.mattbabel.com \xb7 mattababel@gmail.com"}),Object(p.jsx)("br",{})]})}}]),a}(n.Component),v=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"],e.getFormattedDate=function(t,a,n){return[e.monthNames[t]," ",a,", ",n].join("")},e}return Object(c.a)(a,[{key:"render",value:function(){var e=new Date,t=this.getFormattedDate(e.getMonth(),e.getDay(),e.getFullYear());return Object(p.jsx)("div",{children:Object(p.jsx)("p",{children:t})})}}]),a}(n.Component),y=function(e){var t=e.jobsite,a=e.jobtitle,n=e.company;return Object(p.jsxs)("span",{children:["This letter is to express my interest in your posting on ",t," for a ",a," at ",n,"."]})},C=function(e){var t=e.person;return Object(p.jsxs)("p",{children:["Dear ",t,":"]})};var w=function(e){return Object(p.jsxs)("span",{children:[" With ",function(){var t=e.arr.length-1,a="";return e.arr.forEach((function(e,n){a=n===t&&0!==n?a.concat("and "+e+", "):a.concat(e+", ")})),a}(),"I am confident I will be an asset to your organization."]})},D=function(){return Object(p.jsx)("p",{children:"I enjoy being challenged and engaging with projects that require me to work outside my comfort and knowledge set, as continuing to learn new languages and development techniques are important to me and the success of your organization."})};var T=function(e){return Object(p.jsxs)("p",{children:[Object(p.jsx)("span",{children:"Your listed requirements closely match my background and skills. A few I would like to highlight that would enable me to contribute to your bottom line are:"}),Object(p.jsx)("ul",{children:e.points.map((function(e){return Object(p.jsx)("li",{children:e})}))})]})},k=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:"I\u2019ve attached a copy of my resume that details my projects and experience in software development. I can be reached via my cell phone, 610-334-7967, or via email at mattababel@gmail.com."}),Object(p.jsx)("p",{children:"Thank you for your time and consideration. I look forward to speaking with you about this opportunity."}),Object(p.jsx)("p",{children:"Sincerely,"}),Object(p.jsx)("p",{children:"Matthew Babel"})]})},S=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.secondParagraph?Object(p.jsx)(D,{}):"";return Object(p.jsxs)("div",{align:"left",children:[Object(p.jsx)(f,{}),Object(p.jsx)(v,{}),Object(p.jsx)(C,{person:this.props.dearPerson}),Object(p.jsxs)("p",{children:[Object(p.jsx)(y,{jobsite:this.props.jobsite,jobtitle:this.props.jobtitle,company:this.props.company}),Object(p.jsx)(w,{arr:this.props.exp})]}),Object(p.jsx)("p",{children:e}),Object(p.jsx)(T,{points:this.props.requirements}),Object(p.jsx)(k,{})]})}}]),a}(n.Component),P=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).dearInputChange=function(e){n.setState({dearPerson:e})},n.jobSiteChange=function(e){n.setState({jobsite:e})},n.jobTitleChange=function(e){n.setState({jobtitle:e})},n.companyChange=function(e){n.setState({company:e})},n.experienceChange=function(e){n.setState({experience:e})},n.requirementsChange=function(e){console.log(JSON.stringify(e)),n.setState({requirementPoints:e})},n.secondParagraphChange=function(){n.setState({secondParagraph:!n.state.secondParagraph})},n.state={dearPerson:"Hiring Manager",jobsite:"indeed.com",jobtitle:"Software Developer",company:"your company",experience:[],requirementPoints:[],secondParagraph:!0},n}return Object(c.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"container-fluid mt-4",children:[Object(p.jsx)("div",{children:Object(p.jsx)("h1",{children:"Cover Letter Builder"})}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-md-6 text-left",children:Object(p.jsx)(g,{dearInputChange:this.dearInputChange,dearValue:this.state.dearPerson,jobSiteChange:this.jobSiteChange,jobSiteValue:this.state.jobsite,jobTitleChange:this.jobTitleChange,jobTitleValue:this.state.jobtitle,companyChange:this.companyChange,companyValue:this.state.company,experienceChange:this.experienceChange,requirementsChange:this.requirementsChange,secondParagraphChange:this.secondParagraphChange,secondParagraph:this.state.secondParagraph})}),Object(p.jsx)("div",{className:"col-md-6",children:Object(p.jsx)(S,{dearPerson:this.state.dearPerson,jobsite:this.state.jobsite,jobtitle:this.state.jobtitle,company:this.state.company,exp:this.state.experience,requirements:this.state.requirementPoints,secondParagraph:this.state.secondParagraph})})]})]})}}]),a}(n.Component),I=a(19),q=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(p.jsx)(I.a,{basename:"/react",children:Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(P,{})})})}}]),a}(n.Component),N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,35)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),o(e),i(e)}))};i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(q,{})}),document.getElementById("root")),N()}},[[34,1,2]]]);
//# sourceMappingURL=main.0a9205c2.chunk.js.map