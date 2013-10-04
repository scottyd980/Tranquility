!function(){window.Tranquility=Ember.Application.create({LOG_TRANSITIONS:!0,LOG_BINDINGS:!0,LOG_VIEW_LOOKUPS:!0,LOG_STACKTRACE_ON_DEPRECATION:!0,LOG_VERSION:!0,debugMode:!0}),Tranquility.AuthenticatedRoute=Ember.Route.extend({beforeModel:function(a){Tranquility.AuthManager.isAuthenticated()||this.redirectToLogin(a)},redirectToLogin:function(a){var b=this.controllerFor("auth.login");b.set("attemptedTransition",a),this.transitionTo("auth.login")},getJSONWithToken:function(a){return $.getJSON(a)},events:{error:function(a,b){this.redirectToLogin(b)}}}),Tranquility.AuthenticationRoute=Ember.Route.extend({beforeModel:function(){Tranquility.AuthManager.isAuthenticated()&&this.transitionTo("index")}})}(),function(){Tranquility.Authenticator=Ember.Object.extend({init:function(){this._super();var a=$.cookie("auth_token"),b=$.cookie("auth_user");if(!Ember.isEmpty(a)&&!Ember.isEmpty(b)){var c=$.cookie("remember");this.authenticate(a,b,c)}},isAuthenticated:function(){return!Ember.isEmpty(this.get("sessionToken.token"))&&!Ember.isEmpty(this.get("sessionToken.user"))},authenticate:function(a,b,c){$.ajaxSetup({headers:{token:a}}),this.set("sessionToken",Tranquility.SessionToken.create({token:a,user:b,remember:c}))},reset:function(){Tranquility.__container__.lookup("route:application").transitionTo("index"),Ember.run.sync(),Ember.run.next(this,function(){this.set("sessionToken",null),$.ajaxSetup({headers:{token:null}})})},sessionTokenObserver:function(){Ember.isEmpty(this.get("sessionToken"))?($.removeCookie("auth_token"),$.removeCookie("auth_user"),$.removeCookie("remember")):this.get("sessionToken.remember")?($.cookie("auth_token",this.get("sessionToken.token"),{expires:365}),$.cookie("auth_user",this.get("sessionToken.user"),{expires:365}),$.cookie("remember",!0,{expires:365})):($.cookie("auth_token",this.get("sessionToken.token")),$.cookie("auth_user",this.get("sessionToken.user")),$.cookie("remember",this.get("sessionToken.remember")))}.observes("sessionToken")})}(),function(){Tranquility.SessionToken=Ember.Object.extend({token:"",user:null,remember:!1})}(),function(){Tranquility.AuthLoginRoute=Tranquility.AuthenticationRoute.extend({exit:function(){var a=this.controllerFor("auth.login");a.reset()}})}(),function(){Tranquility.AuthSignupRoute=Tranquility.AuthenticationRoute.extend({setupController:function(a){a.reset()}})}(),function(){Tranquility.AboutRoute=Tranquility.AuthenticatedRoute.extend({model:function(){return this.getJSONWithToken("/about.json")}})}(),function(){Tranquility.ApplicationRoute=Ember.Route.extend({init:function(){this._super(),Tranquility.AuthManager=Tranquility.Authenticator.create()},actions:{logout:function(){Tranquility.AuthManager.reset(),this.transitionTo("index")}}})}(),function(){Tranquility.AuthLoginController=Ember.Controller.extend({remember:!0,reset:function(){this.setProperties({username:"",password:"",remember:!0,errorMessage:""})},actions:{login:function(){var a=this,b=this.getProperties("username","password");this.set("errorMessage",null),$.post("/api/auth/login",b).then(function(b){if(b.success){Tranquility.AuthManager.authenticate(b.token,b.user,a.get("remember"));var c=a.get("attemptedTransition");c?(c.retry(),a.set("attemptedTransition",null)):a.transitionToRoute("index")}else a.set("errorMessage",b.message)})}}})}(),function(){Tranquility.AuthSignupController=Ember.Controller.extend({reset:function(){this.setProperties({fullname:"",email:"",username:"",password:""}),this.resetErrors()},resetErrors:function(){this.setProperties({errorMessage:"",fullnameError:"",emailError:"",passwordError:"",usernameError:""})},actions:{signup:function(){var a=this,b=this.getProperties("fullname","email","username","password");this.resetErrors(),$.post("/api/auth/signup",{user:b},function(b){if(b.success)Tranquility.AuthManager.authenticate(b.token,b.user_id,!1),a.transitionToRoute("index");else{var c=b.err.errors;$.each(c,function(b,c){switch(b){case"fullname":"required"===c.type&&a.set(b+"Error","A full name is required.");break;case"email":"required"===c.type?a.set(b+"Error","An email is required."):"unique"===c.type&&a.set(b+"Error","That email is already in use.");break;case"username":"required"===c.type?a.set(b+"Error","A username is required."):"unique"===c.type&&a.set(b+"Error","That username is already in use.");break;case"password":"required"===c.type&&a.set(b+"Error","A password is required.")}})}})}}})}(),function(){Tranquility.AboutController=Ember.Controller.extend({someText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque libero massa, mollis."})}(),function(){Tranquility.ApplicationController=Ember.Controller.extend({isAuthenticated:function(){return Tranquility.AuthManager.isAuthenticated()}.property("Tranquility.AuthManager.sessionToken"),currentPathDidChange:function(){window.scrollTo(0,0)}.observes("currentPath")})}(),function(){Tranquility.IndexView=Ember.View.extend({})}(),function(){Tranquility.Router.map(function(){this.route("about",{path:"/about"}),this.route("pricing",{path:"/pricing"}),this.resource("auth",function(){this.route("login",{path:"/login"}),this.route("logout",{path:"/logout"}),this.route("signup",{path:"/signup"})})})}(),Ember.TEMPLATES.application=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,h,i,j="";return b.buffer.push("\n          <li>"),f={},h={},i={hash:{},inverse:q.noop,fn:q.program(2,g,b),contexts:[a],types:["STRING"],hashContexts:h,hashTypes:f,data:b},d=c["link-to"]||a["link-to"],e=d?d.call(a,"about",i):r.call(a,"link-to","about",i),(e||0===e)&&b.buffer.push(e),b.buffer.push("</li>\n        "),j}function g(a,b){b.buffer.push("About")}function h(a,b){var d,e,f="";return b.buffer.push("\n          <li><a "),d={},e={},b.buffer.push(s(c.action.call(a,"logout",{hash:{},contexts:[a],types:["STRING"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push(' href="">Logout</a></li>\n        '),f}function i(a,b){var d,e,f,g,h,i="";return b.buffer.push("\n          <li>"),f={},g={},h={hash:{},inverse:q.noop,fn:q.program(7,j,b),contexts:[a],types:["STRING"],hashContexts:g,hashTypes:f,data:b},d=c["link-to"]||a["link-to"],e=d?d.call(a,"pricing",h):r.call(a,"link-to","pricing",h),(e||0===e)&&b.buffer.push(e),b.buffer.push("</li>\n          <li>"),f={},g={},h={hash:{},inverse:q.noop,fn:q.program(9,k,b),contexts:[a],types:["STRING"],hashContexts:g,hashTypes:f,data:b},d=c["link-to"]||a["link-to"],e=d?d.call(a,"auth.signup",h):r.call(a,"link-to","auth.signup",h),(e||0===e)&&b.buffer.push(e),b.buffer.push("</li>\n          <li>"),f={},g={},h={hash:{},inverse:q.noop,fn:q.program(11,l,b),contexts:[a],types:["STRING"],hashContexts:g,hashTypes:f,data:b},d=c["link-to"]||a["link-to"],e=d?d.call(a,"auth.login",h):r.call(a,"link-to","auth.login",h),(e||0===e)&&b.buffer.push(e),b.buffer.push("</li>\n        "),i}function j(a,b){b.buffer.push("Pricing")}function k(a,b){b.buffer.push("Sign Up")}function l(a,b){b.buffer.push("Login")}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var m,n,o,p="",q=this,r=c.helperMissing,s=this.escapeExpression;return e.buffer.push('<div class="wrapper">\n<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">\n  <!-- Brand and toggle get grouped for better mobile display -->\n  <div class="container">\n    <div class="navbar-header">\n      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">\n        <span class="sr-only">Toggle navigation</span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </button>\n      <a class="navbar-brand" href="#"><img src="../assets/img/logo2.png"/> Tranquility</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class="collapse navbar-collapse navbar-ex1-collapse">\n      <ul class="nav navbar-nav">\n        '),n={},o={},m=c["if"].call(b,"isAuthenticated",{hash:{},inverse:q.noop,fn:q.program(1,f,e),contexts:[b],types:["ID"],hashContexts:o,hashTypes:n,data:e}),(m||0===m)&&e.buffer.push(m),e.buffer.push('\n      </ul>\n      <ul class="nav navbar-nav navbar-right">\n        '),n={},o={},m=c["if"].call(b,"isAuthenticated",{hash:{},inverse:q.program(6,i,e),fn:q.program(4,h,e),contexts:[b],types:["ID"],hashContexts:o,hashTypes:n,data:e}),(m||0===m)&&e.buffer.push(m),e.buffer.push("\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div>\n</nav>\n\n"),n={},o={},e.buffer.push(s(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:o,hashTypes:n,data:e}))),e.buffer.push('\n\n<div class="push"></div>\n</div>\n<footer>\n  <div class="align-center">&copy; 2013 Tranquility</div>\n</footer>'),p}),Ember.TEMPLATES["auth/login"]=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return b.buffer.push('\n					<div class="alert alert-danger">'),d={},e={},b.buffer.push(l(c._triageMustache.call(a,"errorMessage",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("</div>\n				"),f}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var g,h,i,j,k="",l=this.escapeExpression,m=this,n=c.helperMissing;return e.buffer.push('<section class="section">\n	<div class="container">\n	  <div class="row">\n	    <div class="col-lg-12">\n			<h3 class="page-title">Login <small>Enter your credentials to securely access your account</small></h3>\n			<div class="page-body">\n				'),h={},i={},g=c["if"].call(b,"errorMessage",{hash:{},inverse:m.noop,fn:m.program(1,f,e),contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}),(g||0===g)&&e.buffer.push(g),e.buffer.push("\n				<form "),i={on:b},h={on:"STRING"},e.buffer.push(l(c.action.call(b,"login",{hash:{on:"submit"},contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push(' role="form">\n					<div class="form-group">\n						<label for="username">Username</label>\n						'),i={value:b,type:b,id:b,"class":b},h={value:"ID",type:"STRING",id:"STRING","class":"STRING"},j={hash:{value:"username",type:"text",id:"username","class":"form-control"},contexts:[],types:[],hashContexts:i,hashTypes:h,data:e},e.buffer.push(l((g=c.input||b.input,g?g.call(b,j):n.call(b,"input",j)))),e.buffer.push('\n					</div>\n					<div class="form-group">\n						<label for="password">Password</label>\n						'),i={value:b,type:b,id:b,"class":b},h={value:"ID",type:"STRING",id:"STRING","class":"STRING"},j={hash:{value:"password",type:"password",id:"password","class":"form-control"},contexts:[],types:[],hashContexts:i,hashTypes:h,data:e},e.buffer.push(l((g=c.input||b.input,g?g.call(b,j):n.call(b,"input",j)))),e.buffer.push('\n					</div>\n					<div class="checkbox">\n						<label>\n							'),i={checkedBinding:b},h={checkedBinding:"STRING"},e.buffer.push(l(c.view.call(b,"Ember.Checkbox",{hash:{checkedBinding:"remember"},contexts:[b],types:["ID"],hashContexts:i,hashTypes:h,data:e}))),e.buffer.push(" Remember me\n						</label>\n					</div>\n\n					"),i={"class":b,type:b,value:b},h={"class":"STRING",type:"STRING",value:"STRING"},j={hash:{"class":"btn btn-primary",type:"submit",value:"Login"},contexts:[],types:[],hashContexts:i,hashTypes:h,data:e},e.buffer.push(l((g=c.input||b.input,g?g.call(b,j):n.call(b,"input",j)))),e.buffer.push("\n				</form>\n			</div>\n\n	    </div>\n	  </div>\n	</div>\n</section>"),k}),Ember.TEMPLATES["auth/signup"]=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f="";return b.buffer.push('\n						<div class="alert alert-danger">'),d={},e={},b.buffer.push(q(c._triageMustache.call(a,"errorMessage",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("</div>\n					"),f}function g(a,b){var d,e,f="";return b.buffer.push('<span class="help-block">'),d={},e={},b.buffer.push(q(c._triageMustache.call(a,"fullnameError",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("</span>"),f}function h(a,b){var d,e,f="";return b.buffer.push('<span class="help-block">'),d={},e={},b.buffer.push(q(c._triageMustache.call(a,"emailError",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("</span>"),f}function i(a,b){var d,e,f="";return b.buffer.push('<span class="help-block">'),d={},e={},b.buffer.push(q(c._triageMustache.call(a,"usernameError",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("</span>"),f}function j(a,b){var d,e,f="";return b.buffer.push('<span class="help-block">'),d={},e={},b.buffer.push(q(c._triageMustache.call(a,"passwordError",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("</span>"),f}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var k,l,m,n,o,p="",q=this.escapeExpression,r=this,s=c.helperMissing;return e.buffer.push('<section class="section">\n	<div class="container">\n	  <div class="row">\n	    <div class="col-lg-12">\n			<h3 class="page-title">Sign Up <small>Create a new account to start tracking issues</small></h3>\n				<div class="page-body">\n					'),m={},n={},k=c["if"].call(b,"errorMessage",{hash:{},inverse:r.noop,fn:r.program(1,f,e),contexts:[b],types:["ID"],hashContexts:n,hashTypes:m,data:e}),(k||0===k)&&e.buffer.push(k),e.buffer.push("\n					<form "),n={on:b},m={on:"STRING"},e.buffer.push(q(c.action.call(b,"signup",{hash:{on:"submit"},contexts:[b],types:["ID"],hashContexts:n,hashTypes:m,data:e}))),e.buffer.push(' role="form">\n						<div '),n={"class":b},m={"class":"STRING"},o={hash:{"class":":form-group fullnameError:has-error"},contexts:[],types:[],hashContexts:n,hashTypes:m,data:e},e.buffer.push(q((k=c["bind-attr"]||b["bind-attr"],k?k.call(b,o):s.call(b,"bind-attr",o)))),e.buffer.push('>\n							<label for="fullname">Full Name '),m={},n={},l=c["if"].call(b,"fullnameError",{hash:{},inverse:r.noop,fn:r.program(3,g,e),contexts:[b],types:["ID"],hashContexts:n,hashTypes:m,data:e}),(l||0===l)&&e.buffer.push(l),e.buffer.push("</label>\n							"),n={value:b,type:b,id:b,"class":b},m={value:"ID",type:"STRING",id:"STRING","class":"STRING"},o={hash:{value:"fullname",type:"text",id:"fullname","class":"form-control"},contexts:[],types:[],hashContexts:n,hashTypes:m,data:e},e.buffer.push(q((k=c.input||b.input,k?k.call(b,o):s.call(b,"input",o)))),e.buffer.push("\n						</div>\n						<div "),n={"class":b},m={"class":"STRING"},o={hash:{"class":":form-group emailError:has-error"},contexts:[],types:[],hashContexts:n,hashTypes:m,data:e},e.buffer.push(q((k=c["bind-attr"]||b["bind-attr"],k?k.call(b,o):s.call(b,"bind-attr",o)))),e.buffer.push('>\n							<label for="email">Email Address '),m={},n={},l=c["if"].call(b,"emailError",{hash:{},inverse:r.noop,fn:r.program(5,h,e),contexts:[b],types:["ID"],hashContexts:n,hashTypes:m,data:e}),(l||0===l)&&e.buffer.push(l),e.buffer.push("</label>\n							"),n={value:b,type:b,id:b,"class":b},m={value:"ID",type:"STRING",id:"STRING","class":"STRING"},o={hash:{value:"email",type:"text",id:"email","class":"form-control"},contexts:[],types:[],hashContexts:n,hashTypes:m,data:e},e.buffer.push(q((k=c.input||b.input,k?k.call(b,o):s.call(b,"input",o)))),e.buffer.push("\n						</div>\n						<div "),n={"class":b},m={"class":"STRING"},o={hash:{"class":":form-group usernameError:has-error"},contexts:[],types:[],hashContexts:n,hashTypes:m,data:e},e.buffer.push(q((k=c["bind-attr"]||b["bind-attr"],k?k.call(b,o):s.call(b,"bind-attr",o)))),e.buffer.push('>\n							<label for="username">Username '),m={},n={},l=c["if"].call(b,"usernameError",{hash:{},inverse:r.noop,fn:r.program(7,i,e),contexts:[b],types:["ID"],hashContexts:n,hashTypes:m,data:e}),(l||0===l)&&e.buffer.push(l),e.buffer.push("</label>\n							"),n={value:b,type:b,id:b,"class":b},m={value:"ID",type:"STRING",id:"STRING","class":"STRING"},o={hash:{value:"username",type:"text",id:"username","class":"form-control"},contexts:[],types:[],hashContexts:n,hashTypes:m,data:e},e.buffer.push(q((k=c.input||b.input,k?k.call(b,o):s.call(b,"input",o)))),e.buffer.push("\n						</div>\n						<div "),n={"class":b},m={"class":"STRING"},o={hash:{"class":":form-group passwordError:has-error"},contexts:[],types:[],hashContexts:n,hashTypes:m,data:e},e.buffer.push(q((k=c["bind-attr"]||b["bind-attr"],k?k.call(b,o):s.call(b,"bind-attr",o)))),e.buffer.push('>\n							<label for="password">Password '),m={},n={},l=c["if"].call(b,"passwordError",{hash:{},inverse:r.noop,fn:r.program(9,j,e),contexts:[b],types:["ID"],hashContexts:n,hashTypes:m,data:e}),(l||0===l)&&e.buffer.push(l),e.buffer.push("</label>\n							"),n={value:b,type:b,id:b,"class":b},m={value:"ID",type:"STRING",id:"STRING","class":"STRING"},o={hash:{value:"password",type:"password",id:"password","class":"form-control"},contexts:[],types:[],hashContexts:n,hashTypes:m,data:e},e.buffer.push(q((k=c.input||b.input,k?k.call(b,o):s.call(b,"input",o)))),e.buffer.push("\n						</div>\n						"),n={"class":b,type:b,value:b},m={"class":"STRING",type:"STRING",value:"STRING"},o={hash:{"class":"btn btn-primary",type:"submit",value:"Sign Up"},contexts:[],types:[],hashContexts:n,hashTypes:m,data:e},e.buffer.push(q((k=c.input||b.input,k?k.call(b,o):s.call(b,"input",o)))),e.buffer.push("\n					</form>\n				</div>\n	    </div>\n	  </div>\n	</div>\n</section>"),p}),Ember.TEMPLATES.about=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push('<section class="section">\n	<div class="container">\n	  <div class="row">\n	    <div class="col-sm-6 col-md-3">\n			<div class="panel panel-pricing panel-primary">\n				<div class="panel-heading">\n				  <h3 class="panel-title">Basic</h3>\n				</div>\n				<div class="panel-body">\n					<h4>$5 <sup>/ month</sup></h4>\n				 	<p><span class="icon icon-ok"></span> 1 active project</p>\n				 	<p><span class="icon icon-ok"></span> 5 members</p>\n				 	<p><span class="icon icon-ok"></span> 1 GB file storage</p>\n				 	<h5>All plans include:</h5>\n				 	<p class="all"><span class="icon icon-ok"></span> SSL encrpytion</p>\n				 	<p class="all"><span class="icon icon-ok"></span> Database backups</p>\n				 	<p class="all"><span class="icon icon-ok"></span> Easy data export</p>\n				 	<hr>\n				 	<a class="btn btn-primary">Sign Up</a>\n				</div>\n			</div>\n		</div>\n		<div class="col-sm-6 col-md-3">\n			<div class="panel panel-pricing panel-primary">\n				<div class="panel-heading">\n				  <h3 class="panel-title">Standard</h3>\n				</div>\n				<div class="panel-body">\n					<h4>$15 <sup>/ month</sup></h4>\n				 	<p><span class="icon icon-ok"></span> 10 active projects</p>\n				 	<p><span class="icon icon-ok"></span> Unlimited members</p>\n				 	<p><span class="icon icon-ok"></span> 5 GB file storage</p>\n				 	<h5>All plans include:</h5>\n				 	<p class="all"><span class="icon icon-ok"></span> SSL encrpytion</p>\n				 	<p class="all"><span class="icon icon-ok"></span> Database backups</p>\n				 	<p class="all"><span class="icon icon-ok"></span> Easy data export</p>\n				 	<hr>\n				 	<a class="btn btn-primary">Sign Up</a>\n				</div>\n			</div>\n		</div>\n		<div class="col-sm-6 col-md-3">\n			<div class="panel panel-pricing panel-success">\n				<div class="panel-heading">\n				  <h3 class="panel-title">Advanced</h3>\n				</div>\n				<div class="panel-body">\n					<h4>$25 <sup>/ month</sup></h4>\n				 	<p><span class="icon icon-ok"></span> 50 active projects</p>\n				 	<p><span class="icon icon-ok"></span> Unlimited members</p>\n				 	<p><span class="icon icon-ok"></span> 10 GB file storage</p>\n				 	<h5>All plans include:</h5>\n				 	<p class="all"><span class="icon icon-ok"></span> SSL encrpytion</p>\n				 	<p class="all"><span class="icon icon-ok"></span> Database backups</p>\n				 	<p class="all"><span class="icon icon-ok"></span> Easy data export</p>\n				 	<hr>\n				 	<a class="btn btn-success">Sign Up</a>\n				</div>\n			</div>\n		</div>\n		<div class="col-sm-6 col-md-3">\n			<div class="panel panel-pricing panel-primary">\n				<div class="panel-heading">\n				  <h3 class="panel-title">Professional</h3>\n				</div>\n				<div class="panel-body">\n					<h4>$50 <sup>/ month</sup></h4>\n				 	<p><span class="icon icon-ok"></span> 100 active projects</p>\n				 	<p><span class="icon icon-ok"></span> Unlimited members</p>\n				 	<p><span class="icon icon-ok"></span> 30 GB file storage</p>\n				 	<h5>All plans include:</h5>\n				 	<p class="all"><span class="icon icon-ok"></span> SSL encrpytion</p>\n				 	<p class="all"><span class="icon icon-ok"></span> Database backups</p>\n				 	<p class="all"><span class="icon icon-ok"></span> Easy data export</p>\n				 	<hr>\n				 	<a class="btn btn-primary">Sign Up</a>\n				</div>\n			</div>\n		</div>\n	  </div>\n	</div>\n</section>\n')}),Ember.TEMPLATES.index=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f="";return e.buffer.push('<section class="section">\n	<div class="container">\n	  <div class="row front">\n	    <div class="col-md-6">\n	    	<h2>Stabilize Your Workflow.</h2>\n	    	<p class="callout">\n	    		Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur.\n	    	</p>\n	    	<p class="callout">\n		    	Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum. \n		    </p>\n	    </div>\n	    <div class="col-md-6 align-right visible-md visible-lg">\n	    	<img src="assets/img/mac.png" />\n	    </div>\n	  </div>\n	</div>\n</section>\n<section class="section striped">\n	<div class="container">\n	  <div class="row points">\n	    <div class="col-md-4 point-block align-center">\n	    	<i class="icon-group icon-4x"></i>\n	    	<h4>Easy Collaboration</h4>\n	    	<p>Watching the progress of your group and seeing their actions in real-time has never been easier.</p>\n	    </div>\n	    <div class="col-md-4 point-block align-center">\n	    	<i class="icon-bug icon-4x"></i>\n	    	<h4>Intuitive Issue Tracking</h4>\n	    	<p>Create and view issues easily and quickly from a simple dashboard.</p>\n	    </div>\n	    <div class="col-md-4 point-block align-center">\n	    	<i class="icon-envelope icon-4x"></i>\n	    	<h4>Automatic Updates</h4>\n	    	<p>A simple click and you\'ll receive updates by email on the status of your project any time you choose.</p>\n	    </div>\n	  </div>\n	</div>\n</section>\n<section class="section">\n	<div class="container">\n	  <div class="row front">\n	    <div class="col-lg-6 align-left visible-lg">\n	    	<img src="assets/img/laptop.png" />\n	    </div>\n	    <div class="col-lg-6">\n	    	<h2>Organize Your Projects.</h2>\n	    	<p class="callout">\n	    		Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam.\n	    	</p>\n	    	<p class="callout">\n		    	Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum. \n		    </p>\n	    </div>\n	  </div>\n	</div>\n</section>\n'),e.buffer.push("\n"),f}),Ember.TEMPLATES.pricing=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{},e.buffer.push('<section class="section">\n	<div class="container">\n	  <div class="row">\n	    <div class="col-sm-6 col-md-3">\n			<div class="panel panel-pricing panel-primary">\n				<div class="panel-heading">\n				  <h3 class="panel-title">Basic</h3>\n				</div>\n				<div class="panel-body">\n					<h4>$5 <sup>/ month</sup></h4>\n				 	<p><span class="icon icon-ok"></span> 1 active project</p>\n				 	<p><span class="icon icon-ok"></span> 5 members</p>\n				 	<p><span class="icon icon-ok"></span> 1 GB file storage</p>\n				 	<h5>All plans include:</h5>\n				 	<p class="all"><span class="icon icon-ok"></span> SSL encrpytion</p>\n				 	<p class="all"><span class="icon icon-ok"></span> Database backups</p>\n				 	<p class="all"><span class="icon icon-ok"></span> Easy data export</p>\n				 	<hr>\n				 	<a class="btn btn-primary">Sign Up</a>\n				</div>\n			</div>\n		</div>\n		<div class="col-sm-6 col-md-3">\n			<div class="panel panel-pricing panel-primary">\n				<div class="panel-heading">\n				  <h3 class="panel-title">Standard</h3>\n				</div>\n				<div class="panel-body">\n					<h4>$15 <sup>/ month</sup></h4>\n				 	<p><span class="icon icon-ok"></span> 10 active projects</p>\n				 	<p><span class="icon icon-ok"></span> Unlimited members</p>\n				 	<p><span class="icon icon-ok"></span> 5 GB file storage</p>\n				 	<h5>All plans include:</h5>\n				 	<p class="all"><span class="icon icon-ok"></span> SSL encrpytion</p>\n				 	<p class="all"><span class="icon icon-ok"></span> Database backups</p>\n				 	<p class="all"><span class="icon icon-ok"></span> Easy data export</p>\n				 	<hr>\n				 	<a class="btn btn-primary">Sign Up</a>\n				</div>\n			</div>\n		</div>\n		<div class="col-sm-6 col-md-3">\n			<div class="panel panel-pricing panel-success">\n				<div class="panel-heading">\n				  <h3 class="panel-title">Advanced</h3>\n				</div>\n				<div class="panel-body">\n					<h4>$25 <sup>/ month</sup></h4>\n				 	<p><span class="icon icon-ok"></span> 50 active projects</p>\n				 	<p><span class="icon icon-ok"></span> Unlimited members</p>\n				 	<p><span class="icon icon-ok"></span> 10 GB file storage</p>\n				 	<h5>All plans include:</h5>\n				 	<p class="all"><span class="icon icon-ok"></span> SSL encrpytion</p>\n				 	<p class="all"><span class="icon icon-ok"></span> Database backups</p>\n				 	<p class="all"><span class="icon icon-ok"></span> Easy data export</p>\n				 	<hr>\n				 	<a class="btn btn-success">Sign Up</a>\n				</div>\n			</div>\n		</div>\n		<div class="col-sm-6 col-md-3">\n			<div class="panel panel-pricing panel-primary">\n				<div class="panel-heading">\n				  <h3 class="panel-title">Professional</h3>\n				</div>\n				<div class="panel-body">\n					<h4>$50 <sup>/ month</sup></h4>\n				 	<p><span class="icon icon-ok"></span> 100 active projects</p>\n				 	<p><span class="icon icon-ok"></span> Unlimited members</p>\n				 	<p><span class="icon icon-ok"></span> 30 GB file storage</p>\n				 	<h5>All plans include:</h5>\n				 	<p class="all"><span class="icon icon-ok"></span> SSL encrpytion</p>\n				 	<p class="all"><span class="icon icon-ok"></span> Database backups</p>\n				 	<p class="all"><span class="icon icon-ok"></span> Easy data export</p>\n				 	<hr>\n				 	<a class="btn btn-primary">Sign Up</a>\n				</div>\n			</div>\n		</div>\n	  </div>\n	</div>\n</section>\n')});