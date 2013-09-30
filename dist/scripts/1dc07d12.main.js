!function(){window.Tranquility=Ember.Application.create({LOG_TRANSITIONS:!0,LOG_BINDINGS:!0,LOG_VIEW_LOOKUPS:!0,LOG_STACKTRACE_ON_DEPRECATION:!0,LOG_VERSION:!0,debugMode:!0}),Tranquility.AuthenticatedRoute=Ember.Route.extend({beforeModel:function(a){Tranquility.AuthManager.isAuthenticated()||this.redirectToLogin(a)},redirectToLogin:function(a){var b=this.controllerFor("auth.login");b.set("attemptedTransition",a),this.transitionTo("auth.login")},getJSONWithToken:function(a){return $.getJSON(a)},events:{error:function(a,b){this.redirectToLogin(b)}}}),Tranquility.AuthenticationRoute=Ember.Route.extend({beforeModel:function(){Tranquility.AuthManager.isAuthenticated()&&this.transitionTo("index")}})}(),function(){Tranquility.TodoItemComponent=Ember.Component.extend({item:null,keyDown:function(a){if(13===a.which){a.preventDefault();var b=this.get("item"),c=this.$(".todo-editable");b.set("name",c.text()),b.save(),c.prop("contenteditable",!1).blur()}},actions:{edit:function(){this.$(".todo-editable").prop("contenteditable",!0).focus()},"delete":function(){var a=this.get("item");a.deleteRecord()}}})}(),function(){Tranquility.Authenticator=Ember.Object.extend({init:function(){this._super();var a=$.cookie("auth_token"),b=$.cookie("auth_user");Ember.isEmpty(a)||Ember.isEmpty(b)||this.authenticate(a,b)},isAuthenticated:function(){return!Ember.isEmpty(this.get("sessionToken.token"))&&!Ember.isEmpty(this.get("sessionToken.user"))},authenticate:function(a,b){$.ajaxSetup({headers:{token:a}}),this.set("sessionToken",Tranquility.SessionToken.create({token:a,user:b}))},reset:function(){Tranquility.__container__.lookup("route:application").transitionTo("index"),Ember.run.sync(),Ember.run.next(this,function(){this.set("sessionToken",null),$.ajaxSetup({headers:{token:null}})})},sessionTokenObserver:function(){Ember.isEmpty(this.get("sessionToken"))?($.removeCookie("auth_token"),$.removeCookie("auth_user")):($.cookie("auth_token",this.get("sessionToken.token")),$.cookie("auth_user",this.get("sessionToken.user")))}.observes("sessionToken")})}(),function(){Tranquility.SessionToken=Ember.Object.extend({token:"",user:null})}(),function(){Tranquility.ApplicationAdapter=DS.RESTAdapter.extend({host:"http://localhost:3000",namespace:"api"})}(),function(){Tranquility.User=DS.Model.extend({fullname:DS.attr("string"),email:DS.attr("string"),username:DS.attr("string"),password:DS.attr("string")})}(),function(){Tranquility.AuthLoginRoute=Tranquility.AuthenticationRoute.extend({exit:function(){var a=this.controllerFor("auth.login");a.reset()}})}(),function(){Tranquility.AuthSignupRoute=Tranquility.AuthenticationRoute.extend({})}(),function(){Tranquility.AboutRoute=Tranquility.AuthenticatedRoute.extend({model:function(){var a=this.controllerFor("auth.login");return a.get("token"),this.getJSONWithToken("/about.json")}})}(),function(){Tranquility.ApplicationRoute=Ember.Route.extend({init:function(){this._super(),Tranquility.AuthManager=Tranquility.Authenticator.create()},actions:{logout:function(){Tranquility.AuthManager.reset(),this.transitionTo("index")}}})}(),function(){Tranquility.AuthLoginController=Ember.Controller.extend({reset:function(){this.setProperties({username:"",password:"",errorMessage:""})},actions:{login:function(){var a=this,b=this.getProperties("username","password");this.set("errorMessage",null),$.post("/login.json",b).then(function(b){if(b.success){Tranquility.AuthManager.authenticate(b.token,b.user);var c=a.get("attemptedTransition");c?(c.retry(),a.set("attemptedTransition",null)):a.transitionToRoute("index")}else a.set("errorMessage",b.message)})}}})}(),function(){Tranquility.AuthSignupController=Ember.Controller.extend({actions:{signup:function(){var a=this.get("store"),b=a.createRecord("user",{fullname:this.get("fullname"),email:this.get("email"),username:this.get("username"),password:this.get("password")});b.save()}}})}(),function(){Tranquility.AboutController=Ember.Controller.extend({someText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque libero massa, mollis."})}(),function(){Tranquility.ApplicationController=Ember.Controller.extend({isAuthenticated:function(){return Tranquility.AuthManager.isAuthenticated()}.property("Tranquility.AuthManager.sessionToken")})}(),function(){Tranquility.IndexView=Ember.View.extend({})}(),function(){Ember.Handlebars.registerBoundHelper("wordCount",function(a){var b;return"string"==typeof a&&a.length?(b=a.trim().match(/\s+/g).length)>0?b+1:1:"0"})}(),function(){Tranquility.Router.map(function(){this.route("about",{path:"/about"}),this.resource("auth",function(){this.route("login",{path:"/login"}),this.route("logout",{path:"/logout"}),this.route("signup",{path:"/signup"})})})}(),Ember.TEMPLATES.application=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,h,i,j="";return b.buffer.push("\n          <li>"),f={},h={},i={hash:{},inverse:p.noop,fn:p.program(2,g,b),contexts:[a],types:["STRING"],hashContexts:h,hashTypes:f,data:b},d=c["link-to"]||a["link-to"],e=d?d.call(a,"about",i):q.call(a,"link-to","about",i),(e||0===e)&&b.buffer.push(e),b.buffer.push("</li>\n        "),j}function g(a,b){b.buffer.push("About")}function h(a,b){var d,e,f="";return b.buffer.push("\n          <li><a "),d={},e={},b.buffer.push(r(c.action.call(a,"logout",{hash:{},contexts:[a],types:["STRING"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push(' href="">Logout</a></li>\n        '),f}function i(a,b){var d,e,f,g,h,i="";return b.buffer.push("\n          <li>"),f={},g={},h={hash:{},inverse:p.noop,fn:p.program(7,j,b),contexts:[a],types:["STRING"],hashContexts:g,hashTypes:f,data:b},d=c["link-to"]||a["link-to"],e=d?d.call(a,"auth.signup",h):q.call(a,"link-to","auth.signup",h),(e||0===e)&&b.buffer.push(e),b.buffer.push("</li>\n          <li>"),f={},g={},h={hash:{},inverse:p.noop,fn:p.program(9,k,b),contexts:[a],types:["STRING"],hashContexts:g,hashTypes:f,data:b},d=c["link-to"]||a["link-to"],e=d?d.call(a,"auth.login",h):q.call(a,"link-to","auth.login",h),(e||0===e)&&b.buffer.push(e),b.buffer.push("</li>\n        "),i}function j(a,b){b.buffer.push("Sign Up")}function k(a,b){b.buffer.push("Login")}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var l,m,n,o="",p=this,q=c.helperMissing,r=this.escapeExpression;return e.buffer.push('<div class="wrapper">\n<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">\n  <!-- Brand and toggle get grouped for better mobile display -->\n  <div class="container">\n    <div class="navbar-header">\n      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">\n        <span class="sr-only">Toggle navigation</span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </button>\n      <a class="navbar-brand" href="#"><img src="../assets/img/logo2.png"/> Tranquility</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class="collapse navbar-collapse navbar-ex1-collapse">\n      <ul class="nav navbar-nav">\n        '),m={},n={},l=c["if"].call(b,"isAuthenticated",{hash:{},inverse:p.noop,fn:p.program(1,f,e),contexts:[b],types:["ID"],hashContexts:n,hashTypes:m,data:e}),(l||0===l)&&e.buffer.push(l),e.buffer.push('\n      </ul>\n      <ul class="nav navbar-nav navbar-right">\n        '),m={},n={},l=c["if"].call(b,"isAuthenticated",{hash:{},inverse:p.program(6,i,e),fn:p.program(4,h,e),contexts:[b],types:["ID"],hashContexts:n,hashTypes:m,data:e}),(l||0===l)&&e.buffer.push(l),e.buffer.push("\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div>\n</nav>\n\n"),m={},n={},e.buffer.push(r(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:n,hashTypes:m,data:e}))),e.buffer.push('\n\n<div class="push"></div>\n</div>\n<footer>\n  <div class="align-center">&copy; 2013 Tranquility.</div>\n</footer>'),o}),Ember.TEMPLATES["components/todo-item"]=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h,i,j="",k=this.escapeExpression,l=c.helperMissing;return e.buffer.push('<div class="todo-item" '),g={"class":b},h={"class":"STRING"},e.buffer.push(k(c.bindAttr.call(b,{hash:{"class":"item.isDone:done"},contexts:[],types:[],hashContexts:g,hashTypes:h,data:e}))),e.buffer.push(">\n  "),g={"class":b,type:b,checked:b},h={"class":"STRING",type:"STRING",checked:"ID"},i={hash:{"class":"todo-checkbox",type:"checkbox",checked:"item.isDone"},contexts:[],types:[],hashContexts:g,hashTypes:h,data:e},e.buffer.push(k((f=c.input||b.input,f?f.call(b,i):l.call(b,"input",i)))),e.buffer.push('\n  <span class="todo-editable" '),h={},g={},e.buffer.push(k(c.action.call(b,"edit",{hash:{},contexts:[b],types:["ID"],hashContexts:g,hashTypes:h,data:e}))),e.buffer.push(">"),h={},g={},e.buffer.push(k(c._triageMustache.call(b,"item.name",{hash:{},contexts:[b],types:["ID"],hashContexts:g,hashTypes:h,data:e}))),e.buffer.push('</span>\n  <a href="#" class="todo-delete" '),h={},g={},e.buffer.push(k(c.action.call(b,"delete",{hash:{},contexts:[b],types:["ID"],hashContexts:g,hashTypes:h,data:e}))),e.buffer.push(' title="Delete todo">&times;</a>\n</div>\n'),j}),Ember.TEMPLATES["auth/login"]=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return b.buffer.push('\n					<div class="alert alert-danger">'),d={},e={},b.buffer.push(l(c._triageMustache.call(a,"errorMessage",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("</div>\n				"),f}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var g,h,i,j,k="",l=this.escapeExpression,m=this,n=c.helperMissing;return e.buffer.push('<section class="section">\n	<div class="container">\n	  <div class="row">\n	    <div class="col-lg-12">\n			<h3 class="page-title">Login <small>Enter your credentials to securely access your account</small></h3>\n			<div class="page-body">\n				'),h={},i={},g=c["if"].call(b,"errorMessage",{hash:{},inverse:m.noop,fn:m.program(1,f,e),contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}),(g||0===g)&&e.buffer.push(g),e.buffer.push("\n				<form "),i={on:b},h={on:"STRING"},e.buffer.push(l(c.action.call(b,"login",{hash:{on:"submit"},contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push(' role="form">\n					<div class="form-group">\n						<label for="username">Username</label>\n						'),i={value:b,type:b,id:b,"class":b},h={value:"ID",type:"STRING",id:"STRING","class":"STRING"},j={hash:{value:"username",type:"text",id:"username","class":"form-control"},contexts:[],types:[],hashContexts:i,hashTypes:h,data:e},e.buffer.push(l((g=c.input||b.input,g?g.call(b,j):n.call(b,"input",j)))),e.buffer.push('\n					</div>\n					<div class="form-group">\n						<label for="password">Password</label>\n						'),i={value:b,type:b,id:b,"class":b},h={value:"ID",type:"STRING",id:"STRING","class":"STRING"},j={hash:{value:"password",type:"password",id:"password","class":"form-control"},contexts:[],types:[],hashContexts:i,hashTypes:h,data:e},e.buffer.push(l((g=c.input||b.input,g?g.call(b,j):n.call(b,"input",j)))),e.buffer.push("\n					</div>\n					"),i={"class":b,type:b,value:b},h={"class":"STRING",type:"STRING",value:"STRING"},j={hash:{"class":"btn btn-primary",type:"submit",value:"Login"},contexts:[],types:[],hashContexts:i,hashTypes:h,data:e},e.buffer.push(l((g=c.input||b.input,g?g.call(b,j):n.call(b,"input",j)))),e.buffer.push("\n				</form>\n			</div>\n\n	    </div>\n	  </div>\n	</div>\n</section>"),k}),Ember.TEMPLATES["auth/signup"]=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return b.buffer.push('\n						<div class="alert alert-danger">'),d={},e={},b.buffer.push(l(c._triageMustache.call(a,"errorMessage",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("</div>\n					"),f}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var g,h,i,j,k="",l=this.escapeExpression,m=this,n=c.helperMissing;return e.buffer.push('<section class="section">\n	<div class="container">\n	  <div class="row">\n	    <div class="col-lg-12">\n			<h3 class="page-title">Sign Up <small>Create a new account to start tracking issues</small></h3>\n				<div class="page-body">\n					'),h={},i={},g=c["if"].call(b,"errorMessage",{hash:{},inverse:m.noop,fn:m.program(1,f,e),contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}),(g||0===g)&&e.buffer.push(g),e.buffer.push("\n					<form "),i={on:b},h={on:"STRING"},e.buffer.push(l(c.action.call(b,"signup",{hash:{on:"submit"},contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push(' role="form">\n						<div class="form-group">\n							<label for="fullname">Full Name</label>\n							'),i={value:b,type:b,id:b,"class":b},h={value:"ID",type:"STRING",id:"STRING","class":"STRING"},j={hash:{value:"fullname",type:"text",id:"fullname","class":"form-control"},contexts:[],types:[],hashContexts:i,hashTypes:h,data:e},e.buffer.push(l((g=c.input||b.input,g?g.call(b,j):n.call(b,"input",j)))),e.buffer.push('\n						</div>\n						<div class="form-group">\n							<label for="email">Email Address</label>\n							'),i={value:b,type:b,id:b,"class":b},h={value:"ID",type:"STRING",id:"STRING","class":"STRING"},j={hash:{value:"email",type:"text",id:"email","class":"form-control"},contexts:[],types:[],hashContexts:i,hashTypes:h,data:e},e.buffer.push(l((g=c.input||b.input,g?g.call(b,j):n.call(b,"input",j)))),e.buffer.push('\n						</div>\n						<div class="form-group">\n							<label for="username">Username</label>\n							'),i={value:b,type:b,id:b,"class":b},h={value:"ID",type:"STRING",id:"STRING","class":"STRING"},j={hash:{value:"username",type:"text",id:"username","class":"form-control"},contexts:[],types:[],hashContexts:i,hashTypes:h,data:e},e.buffer.push(l((g=c.input||b.input,g?g.call(b,j):n.call(b,"input",j)))),e.buffer.push('\n						</div>\n						<div class="form-group">\n							<label for="password">Password</label>\n							'),i={value:b,type:b,id:b,"class":b},h={value:"ID",type:"STRING",id:"STRING","class":"STRING"},j={hash:{value:"password",type:"password",id:"password","class":"form-control"},contexts:[],types:[],hashContexts:i,hashTypes:h,data:e},e.buffer.push(l((g=c.input||b.input,g?g.call(b,j):n.call(b,"input",j)))),e.buffer.push("\n						</div>\n						"),i={"class":b,type:b,value:b},h={"class":"STRING",type:"STRING",value:"STRING"},j={hash:{"class":"btn btn-primary",type:"submit",value:"Sign Up"},contexts:[],types:[],hashContexts:i,hashTypes:h,data:e},e.buffer.push(l((g=c.input||b.input,g?g.call(b,j):n.call(b,"input",j)))),e.buffer.push("\n					</form>\n				</div>\n	    </div>\n	  </div>\n	</div>\n</section>"),k}),Ember.TEMPLATES.about=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h,i,j="",k=this.escapeExpression,l=c.helperMissing;return e.buffer.push("<h3>Hello World!</h3>\n<p>"),g={},h={},e.buffer.push(k(c._triageMustache.call(b,"someText",{hash:{},contexts:[b],types:["ID"],hashContexts:h,hashTypes:g,data:e}))),e.buffer.push("</p>\n<p>Word Count: "),g={},h={},i={hash:{},contexts:[b],types:["ID"],hashContexts:h,hashTypes:g,data:e},e.buffer.push(k((f=c.wordCount||b.wordCount,f?f.call(b,"someText",i):l.call(b,"wordCount","someText",i)))),e.buffer.push("</p>\n"),j}),Ember.TEMPLATES.index=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push('<section class="section">\n	<div class="container">\n	  <div class="row">\n	    <div class="col-lg-6">\n	    	<h2>Stabilize Your Workflow.</h2>\n	    	<p class="callout">\n	    		Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur.\n	    	</p>\n	    	<p class="callout">\n		    	Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum. \n		    </p>\n	    </div>\n	    <div class="col-lg-6 align-right">\n	    	<img src="assets/img/mac.png" />\n	    </div>\n	  </div>\n	</div>\n</section>\n<section class="section striped">\n	<div class="container">\n	  <div class="row">\n	    <div class="col-lg-6">\n	    	<img src="assets/img/laptop.png" />\n	    </div>\n	    <div class="col-lg-6">\n	    	<h2>Another Great Point.</h2>\n	    	<p class="callout">\n	    		Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur.\n	    	</p>\n	    </div>\n	  </div>\n	</div>\n</section>\n<section class="section">\n	<div class="container">\n	  <div class="row">\n	    <div class="col-lg-12">\n	    	<a class="btn btn-primary">Test</a>\n			<a class="btn btn-success">Test</a>\n			<a class="btn btn-info">Test</a>\n			<a class="btn btn-warning">Test</a>\n			<a class="btn btn-danger">Test</a>\n	    </div>\n	  </div>\n	</div>\n</section>\n')});