!function(){window.Tranquility=Ember.Application.create({LOG_TRANSITIONS:!0,LOG_BINDINGS:!0,LOG_VIEW_LOOKUPS:!0,LOG_STACKTRACE_ON_DEPRECATION:!0,LOG_VERSION:!0,debugMode:!0}),Tranquility.AuthenticatedRoute=Ember.Route.extend({redirectToLogin:function(a){var b=this.controllerFor("auth.login");b.set("attemptedTransition",a),this.transitionTo("auth.login")},actions:{error:function(a,b){401===a.status?this.redirectToLogin(b):this.redirectToLogin(b)}}})}(),function(){Tranquility.TodoItemComponent=Ember.Component.extend({item:null,keyDown:function(a){if(13===a.which){a.preventDefault();var b=this.get("item"),c=this.$(".todo-editable");b.set("name",c.text()),b.save(),c.prop("contenteditable",!1).blur()}},actions:{edit:function(){this.$(".todo-editable").prop("contenteditable",!0).focus()},"delete":function(){var a=this.get("item");a.deleteRecord()}}})}(),function(){Tranquility.Store=DS.Store.extend({revision:12,adapter:DS.FixtureAdapter.create()})}(),function(){Tranquility.Site=DS.Model.extend({title:DS.attr("string"),link:DS.attr("string")}),Tranquility.Site.FIXTURES=[{id:1,title:"About",link:"about"},{id:2,title:"Contact",link:"contact"},{id:3,title:"Todos",link:"todos"}]}(),function(){Tranquility.Todo=DS.Model.extend({name:DS.attr("string"),isDone:DS.attr("boolean")}),Tranquility.Todo.FIXTURES=[{id:"a",name:"Walk the dog",isDone:!1},{id:"b",name:"Buy groceries",isDone:!1}]}(),function(){Tranquility.AuthLoginRoute=Ember.Route.extend({setupController:function(a){a.reset()}})}(),function(){Tranquility.AboutRoute=Tranquility.AuthenticatedRoute.extend({model:function(){var a=this.controllerFor("auth.login"),b=a.get("token");return $.getJSON("/about.json",{token:b})}})}(),function(){Tranquility.ApplicationRoute=Ember.Route.extend({model:function(){return this.store.find("site")}})}(),function(){Tranquility.AuthenticatedRoute=Ember.Route.extend({redirectToLogin:function(a){var b=this.controllerFor("login");b.set("attemptedTransition",a),this.transitionTo("login")},events:{error:function(a,b){401===a.status?this.redirectToLogin(b):alert("Something went wrong")}}})}(),function(){Tranquility.TodosRoute=Ember.Route.extend({model:function(){return this.store.find("todo")}})}(),function(){Tranquility.AuthLoginController=Ember.Controller.extend({actions:{login:function(){var a=this.getProperties("username","password"),b=this;Ember.$.post("http://localhost:3000/login.json",a).then(function(a){b.set("errorMessage",null),a.success?b.set("token",a.token):b.set("errorMessage",a.message)})}},reset:function(){this.setProperties({username:"",password:"",errorMessage:null})}})}(),function(){Tranquility.AboutController=Ember.Controller.extend({someText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque libero massa, mollis."})}(),function(){Tranquility.ApplicationController=Ember.ArrayController.extend({})}(),function(){Tranquility.TodosIndexController=Ember.Controller.extend({needs:["todos"],actions:{newTodo:function(){this.store.createRecord("todo",{name:"Get r done"})},clearDone:function(){for(var a=this.get("controllers.todos"),b=a.filter(function(a){return a.get("isDone")});b.length>0;){var c=b.pop();c.deleteRecord()}}}})}(),function(){Tranquility.TodosController=Ember.ArrayController.extend({})}(),function(){Tranquility.IndexView=Ember.View.extend({})}(),function(){Ember.Handlebars.registerBoundHelper("wordCount",function(a){var b;return"string"==typeof a&&a.length?(b=a.trim().match(/\s+/g).length)>0?b+1:1:"0"})}(),function(){Tranquility.Router.map(function(){this.route("about",{path:"/about"}),this.resource("auth",function(){this.route("login",{path:"/login"}),this.route("signup",{path:"/signup"})}),this.resource("todos",function(){this.route("index",{path:"/"})})})}(),Ember.TEMPLATES.application=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){b.buffer.push("About")}function g(a,b){b.buffer.push("Sign Up")}function h(a,b){b.buffer.push("Login")}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var i,j,k,l,m,n="",o=this,p=c.helperMissing,q=this.escapeExpression;return e.buffer.push('<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">\n  <!-- Brand and toggle get grouped for better mobile display -->\n  <div class="container">\n    <div class="navbar-header">\n      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">\n        <span class="sr-only">Toggle navigation</span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </button>\n      <a class="navbar-brand" href="#"><img src="../assets/img/logo.png"/> Tranquility</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class="collapse navbar-collapse navbar-ex1-collapse">\n      <ul class="nav navbar-nav">\n        <li>'),k={},l={},m={hash:{},inverse:o.noop,fn:o.program(1,f,e),contexts:[b],types:["STRING"],hashContexts:l,hashTypes:k,data:e},i=c["link-to"]||b["link-to"],j=i?i.call(b,"about",m):p.call(b,"link-to","about",m),(j||0===j)&&e.buffer.push(j),e.buffer.push('</li>\n      </ul>\n      <ul class="nav navbar-nav navbar-right">\n        <li>'),k={},l={},m={hash:{},inverse:o.noop,fn:o.program(3,g,e),contexts:[b],types:["STRING"],hashContexts:l,hashTypes:k,data:e},i=c["link-to"]||b["link-to"],j=i?i.call(b,"auth.signup",m):p.call(b,"link-to","auth.signup",m),(j||0===j)&&e.buffer.push(j),e.buffer.push("</li>\n        <li>"),k={},l={},m={hash:{},inverse:o.noop,fn:o.program(5,h,e),contexts:[b],types:["STRING"],hashContexts:l,hashTypes:k,data:e},i=c["link-to"]||b["link-to"],j=i?i.call(b,"auth.login",m):p.call(b,"link-to","auth.login",m),(j||0===j)&&e.buffer.push(j),e.buffer.push('</li>\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div>\n</nav>\n<div class="container">\n  <div class="row">\n    <div class="col-lg-12">\n      '),k={},l={},e.buffer.push(q(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:l,hashTypes:k,data:e}))),e.buffer.push("\n    </div>\n  </div>\n</div>\n"),n}),Ember.TEMPLATES["components/todo-item"]=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h,i,j="",k=this.escapeExpression,l=c.helperMissing;return e.buffer.push('<div class="todo-item" '),g={"class":b},h={"class":"STRING"},e.buffer.push(k(c.bindAttr.call(b,{hash:{"class":"item.isDone:done"},contexts:[],types:[],hashContexts:g,hashTypes:h,data:e}))),e.buffer.push(">\n  "),g={"class":b,type:b,checked:b},h={"class":"STRING",type:"STRING",checked:"ID"},i={hash:{"class":"todo-checkbox",type:"checkbox",checked:"item.isDone"},contexts:[],types:[],hashContexts:g,hashTypes:h,data:e},e.buffer.push(k((f=c.input||b.input,f?f.call(b,i):l.call(b,"input",i)))),e.buffer.push('\n  <span class="todo-editable" '),h={},g={},e.buffer.push(k(c.action.call(b,"edit",{hash:{},contexts:[b],types:["ID"],hashContexts:g,hashTypes:h,data:e}))),e.buffer.push(">"),h={},g={},e.buffer.push(k(c._triageMustache.call(b,"item.name",{hash:{},contexts:[b],types:["ID"],hashContexts:g,hashTypes:h,data:e}))),e.buffer.push('</span>\n  <a href="#" class="todo-delete" '),h={},g={},e.buffer.push(k(c.action.call(b,"delete",{hash:{},contexts:[b],types:["ID"],hashContexts:g,hashTypes:h,data:e}))),e.buffer.push(' title="Delete todo">&times;</a>\n</div>\n'),j}),Ember.TEMPLATES["auth/login"]=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return b.buffer.push('\n			<div class="alert alert-danger">'),d={},e={},b.buffer.push(l(c._triageMustache.call(a,"errorMessage",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("</div>\n		"),f}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var g,h,i,j,k="",l=this.escapeExpression,m=this,n=c.helperMissing;return e.buffer.push('<div class="block">\n	<div class="title">\n		<h3>Login <small>Enter your credentials to access your account</small></h3>\n	</div>\n	<div class="body">\n		'),h={},i={},g=c["if"].call(b,"errorMessage",{hash:{},inverse:m.noop,fn:m.program(1,f,e),contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}),(g||0===g)&&e.buffer.push(g),e.buffer.push("\n		<form "),i={on:b},h={on:"STRING"},e.buffer.push(l(c.action.call(b,"login",{hash:{on:"submit"},contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push(' role="form">\n			<div class="form-group">\n				<label for="username">Username / email address</label>\n				'),i={value:b,type:b,id:b,"class":b},h={value:"ID",type:"STRING",id:"STRING","class":"STRING"},j={hash:{value:"username",type:"text",id:"username","class":"form-control"},contexts:[],types:[],hashContexts:i,hashTypes:h,data:e},e.buffer.push(l((g=c.input||b.input,g?g.call(b,j):n.call(b,"input",j)))),e.buffer.push('\n			</div>\n			<div class="form-group">\n				<label for="password">Password</label>\n				'),i={value:b,type:b,id:b,"class":b},h={value:"ID",type:"STRING",id:"STRING","class":"STRING"},j={hash:{value:"password",type:"password",id:"password","class":"form-control"},contexts:[],types:[],hashContexts:i,hashTypes:h,data:e},e.buffer.push(l((g=c.input||b.input,g?g.call(b,j):n.call(b,"input",j)))),e.buffer.push("\n			</div>\n			"),i={"class":b,type:b,value:b},h={"class":"STRING",type:"STRING",value:"STRING"},j={hash:{"class":"btn btn-primary",type:"submit",value:"Login"},contexts:[],types:[],hashContexts:i,hashTypes:h,data:e},e.buffer.push(l((g=c.input||b.input,g?g.call(b,j):n.call(b,"input",j)))),e.buffer.push("\n		</form>\n	</div>\n</div>"),k}),Ember.TEMPLATES._link=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return b.buffer.push('<a href="#">'),d={},e={},b.buffer.push(m(c._triageMustache.call(a,"title",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("</a>"),f}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var g,h,i,j,k,l="",m=this.escapeExpression,n=this,o=c.helperMissing;return e.buffer.push("\n"),i={tagName:b},j={tagName:"STRING"},k={hash:{tagName:"li"},inverse:n.noop,fn:n.program(1,f,e),contexts:[b],types:["ID"],hashContexts:i,hashTypes:j,data:e},g=c["link-to"]||b["link-to"],h=g?g.call(b,"link",k):o.call(b,"link-to","link",k),(h||0===h)&&e.buffer.push(h),e.buffer.push("\n"),l}),Ember.TEMPLATES.about=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h,i,j="",k=this.escapeExpression,l=c.helperMissing;return e.buffer.push("<h3>Hello World!</h3>\n<p>"),g={},h={},e.buffer.push(k(c._triageMustache.call(b,"someText",{hash:{},contexts:[b],types:["ID"],hashContexts:h,hashTypes:g,data:e}))),e.buffer.push("</p>\n<p>Word Count: "),g={},h={},i={hash:{},contexts:[b],types:["ID"],hashContexts:h,hashTypes:g,data:e},e.buffer.push(k((f=c.wordCount||b.wordCount,f?f.call(b,"someText",i):l.call(b,"wordCount","someText",i)))),e.buffer.push("</p>\n"),j}),Ember.TEMPLATES.contact=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push("<h3>Contact Me!</h3>\n")}),Ember.TEMPLATES.index=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push("<h3>Index Template</h3>\n")}),Ember.TEMPLATES["todos/index"]=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h="",i=this.escapeExpression;return e.buffer.push('<p>\n  <a href="#" '),f={},g={},e.buffer.push(i(c.action.call(b,"newTodo",{hash:{},contexts:[b],types:["ID"],hashContexts:g,hashTypes:f,data:e}))),e.buffer.push('>+ Todo</a> | <a href="#" '),f={},g={},e.buffer.push(i(c.action.call(b,"clearDone",{hash:{},contexts:[b],types:["ID"],hashContexts:g,hashTypes:f,data:e}))),e.buffer.push(">Clear Done</a>\n</p>\n"),h}),Ember.TEMPLATES.todos=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,g,h="";return b.buffer.push("\n  "),e={item:a},f={item:"ID"},g={hash:{item:"todo"},contexts:[],types:[],hashContexts:e,hashTypes:f,data:b},b.buffer.push(l((d=c["todo-item"]||a["todo-item"],d?d.call(a,g):k.call(a,"todo-item",g)))),b.buffer.push("\n"),h}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var g,h,i,j="",k=c.helperMissing,l=this.escapeExpression,m=this;return h={},i={},g=c.each.call(b,"todo","in","controller",{hash:{},inverse:m.noop,fn:m.program(1,f,e),contexts:[b,b,b],types:["ID","ID","ID"],hashContexts:i,hashTypes:h,data:e}),(g||0===g)&&e.buffer.push(g),e.buffer.push("\n\n"),h={},i={},e.buffer.push(l(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push("\n"),j});