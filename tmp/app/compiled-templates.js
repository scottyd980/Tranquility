Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, hashContexts, hashTypes;
  data.buffer.push("\n\n	<div class=\"wrapper\">\n  	\n		<a ");
  hashContexts = {'bubbles': depth0};
  hashTypes = {'bubbles': "BOOLEAN"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleMenu", {hash:{
    'bubbles': (false)
  },contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">Menu</a>\n\n		");
  hashContexts = {'tagName': depth0,'class': depth0,'classBinding': depth0};
  hashTypes = {'tagName': "STRING",'class': "STRING",'classBinding': "STRING"};
  stack1 = helpers.view.call(depth0, "Tranquility.SideMenuView", {hash:{
    'tagName': ("nav"),
    'class': ("cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left"),
    'classBinding': ("menuToggled:cbp-spmenu-open")
  },inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n		<div id=\"main\">\n	  		");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n	  	</div>\n\n	  <div class=\"push\"></div>\n	</div>\n	<footer>\n	  <div class=\"align-center\">&copy; 2013 Tranquility</div>\n	</footer>	\n\n");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("\n			<h3>Menu</h3>\n			<a href=\"#\">Celery seakale</a>\n			<a href=\"#\">Dulse daikon</a>\n			<a href=\"#\">Zucchini garlic</a>\n			<a href=\"#\">Catsear azuki bean</a>\n			<a href=\"#\">Dandelion bunya</a>\n			<a href=\"#\">Rutabaga</a>\n		");
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, hashTypes, hashContexts;
  data.buffer.push("\n  \n	<div class=\"wrapper\">\n		<nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n		  <!-- Brand and toggle get grouped for better mobile display -->\n		  <div class=\"container\">\n		    <div class=\"navbar-header\">\n		      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\n		        <span class=\"sr-only\">Toggle navigation</span>\n		        <span class=\"icon-bar\"></span>\n		        <span class=\"icon-bar\"></span>\n		        <span class=\"icon-bar\"></span>\n		      </button>\n		      ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isAuthenticated", {hash:{},inverse:self.program(8, program8, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		    </div>\n\n		    <!-- Collect the nav links, forms, and other content for toggling -->\n		    <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\n		      <ul class=\"nav navbar-nav\">\n		        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isAuthenticated", {hash:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		      </ul>\n		      <ul class=\"nav navbar-nav navbar-right\">\n		        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isAuthenticated", {hash:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		      </ul>\n		    </div><!-- /.navbar-collapse -->\n		  </div>\n		</nav>\n\n		");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n		<div class=\"push\"></div>\n		</div>\n		<footer>\n		  <div class=\"align-center\">&copy; 2013 Tranquility</div>\n		</footer>\n\n");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n		        ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("navbar-brand")
  },inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "dashboard", options) : helperMissing.call(depth0, "link-to", "dashboard", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n		      ");
  return buffer;
  }
function program6(depth0,data) {
  
  
  data.buffer.push("<img src=\"../assets/img/logo2.png\"/> Tranquility");
  }

function program8(depth0,data) {
  
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options;
  data.buffer.push("\n		        ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("navbar-brand")
  },inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n		      ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n		          <li>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "about", options) : helperMissing.call(depth0, "link-to", "about", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n		        ");
  return buffer;
  }
function program11(depth0,data) {
  
  
  data.buffer.push("About");
  }

function program13(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n		          <li><a ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "logout", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" href=\"\">Logout</a></li>\n		        ");
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n		          <li>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "pricing", options) : helperMissing.call(depth0, "link-to", "pricing", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n		          <li>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "auth.signup", options) : helperMissing.call(depth0, "link-to", "auth.signup", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n		          <li>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "auth.login", options) : helperMissing.call(depth0, "link-to", "auth.login", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n		        ");
  return buffer;
  }
function program16(depth0,data) {
  
  
  data.buffer.push("Pricing");
  }

function program18(depth0,data) {
  
  
  data.buffer.push("Sign Up");
  }

function program20(depth0,data) {
  
  
  data.buffer.push("Login");
  }

  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isAuthenticated", {hash:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["components/issue-panel"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', hashContexts, hashTypes;
  data.buffer.push("<i ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("icon")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("></i>");
  return buffer;
  }

  data.buffer.push("<div class=\"panel-heading\">\r\n	<h3 class=\"panel-title\">");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "icon", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</h3>\r\n</div>\r\n<div class=\"panel-body\">\r\n	");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "yield", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["auth/login"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n					<div class=\"alert alert-danger\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "errorMessage", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n				");
  return buffer;
  }

  data.buffer.push("<section class=\"section\">\n	<div class=\"container\">\n	  <div class=\"row\">\n	    <div class=\"col-lg-12\">\n			<h3 class=\"page-title\">Login <small>Enter your credentials to securely access your account</small></h3>\n			<div class=\"page-body\">\n				");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "errorMessage", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				<form ");
  hashContexts = {'on': depth0};
  hashTypes = {'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "login", {hash:{
    'on': ("submit")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" role=\"form\">\n					<div class=\"form-group\">\n						<label for=\"username\">Username</label>\n						");
  hashContexts = {'value': depth0,'type': depth0,'id': depth0,'class': depth0};
  hashTypes = {'value': "ID",'type': "STRING",'id': "STRING",'class': "STRING"};
  options = {hash:{
    'value': ("username"),
    'type': ("text"),
    'id': ("username"),
    'class': ("form-control")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n					</div>\n					<div class=\"form-group\">\n						<label for=\"password\">Password</label>\n						");
  hashContexts = {'value': depth0,'type': depth0,'id': depth0,'class': depth0};
  hashTypes = {'value': "ID",'type': "STRING",'id': "STRING",'class': "STRING"};
  options = {hash:{
    'value': ("password"),
    'type': ("password"),
    'id': ("password"),
    'class': ("form-control")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n					</div>\n					<div class=\"checkbox\">\n						<label>\n							");
  hashContexts = {'checkedBinding': depth0};
  hashTypes = {'checkedBinding': "STRING"};
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Checkbox", {hash:{
    'checkedBinding': ("remember")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" Remember me\n						</label>\n					</div>\n\n					");
  hashContexts = {'class': depth0,'type': depth0,'value': depth0};
  hashTypes = {'class': "STRING",'type': "STRING",'value': "STRING"};
  options = {hash:{
    'class': ("btn btn-primary"),
    'type': ("submit"),
    'value': ("Login")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n				</form>\n			</div>\n\n	    </div>\n	  </div>\n	</div>\n</section>");
  return buffer;
  
});

Ember.TEMPLATES["auth/signup"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n						<div class=\"alert alert-danger\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "errorMessage", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n					");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("<span class=\"help-block\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "fullnameError", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("<span class=\"help-block\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "emailError", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("<span class=\"help-block\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "usernameError", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("<span class=\"help-block\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "passwordError", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>");
  return buffer;
  }

  data.buffer.push("<section class=\"section\">\n	<div class=\"container\">\n	  <div class=\"row\">\n	    <div class=\"col-lg-12\">\n			<h3 class=\"page-title\">Sign Up <small>Create a new account to start tracking issues</small></h3>\n				<div class=\"page-body\">\n					");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "errorMessage", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n					<form ");
  hashContexts = {'on': depth0};
  hashTypes = {'on': "STRING"};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "signup", {hash:{
    'on': ("submit")
  },contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" role=\"form\">\n						<div ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":form-group fullnameError:has-error")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n							<label for=\"fullname\">Full Name ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "fullnameError", {hash:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</label>\n							");
  hashContexts = {'value': depth0,'type': depth0,'id': depth0,'class': depth0};
  hashTypes = {'value': "ID",'type': "STRING",'id': "STRING",'class': "STRING"};
  options = {hash:{
    'value': ("fullname"),
    'type': ("text"),
    'id': ("fullname"),
    'class': ("form-control")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n						</div>\n						<div ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":form-group emailError:has-error")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n							<label for=\"email\">Email Address ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "emailError", {hash:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</label>\n							");
  hashContexts = {'value': depth0,'type': depth0,'id': depth0,'class': depth0};
  hashTypes = {'value': "ID",'type': "STRING",'id': "STRING",'class': "STRING"};
  options = {hash:{
    'value': ("email"),
    'type': ("text"),
    'id': ("email"),
    'class': ("form-control")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n						</div>\n						<div ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":form-group usernameError:has-error")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n							<label for=\"username\">Username ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "usernameError", {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</label>\n							");
  hashContexts = {'value': depth0,'type': depth0,'id': depth0,'class': depth0};
  hashTypes = {'value': "ID",'type': "STRING",'id': "STRING",'class': "STRING"};
  options = {hash:{
    'value': ("username"),
    'type': ("text"),
    'id': ("username"),
    'class': ("form-control")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n						</div>\n						<div ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': (":form-group passwordError:has-error")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers['bind-attr'] || depth0['bind-attr']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "bind-attr", options))));
  data.buffer.push(">\n							<label for=\"password\">Password ");
  hashTypes = {};
  hashContexts = {};
  stack2 = helpers['if'].call(depth0, "passwordError", {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</label>\n							");
  hashContexts = {'value': depth0,'type': depth0,'id': depth0,'class': depth0};
  hashTypes = {'value': "ID",'type': "STRING",'id': "STRING",'class': "STRING"};
  options = {hash:{
    'value': ("password"),
    'type': ("password"),
    'id': ("password"),
    'class': ("form-control")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n						</div>\n						");
  hashContexts = {'class': depth0,'type': depth0,'value': depth0};
  hashTypes = {'class': "STRING",'type': "STRING",'value': "STRING"};
  options = {hash:{
    'class': ("btn btn-primary"),
    'type': ("submit"),
    'value': ("Sign Up")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n					</form>\n				</div>\n	    </div>\n	  </div>\n	</div>\n</section>");
  return buffer;
  
});

Ember.TEMPLATES["about"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<section class=\"section\">\n	<div class=\"container\">\n	  <div class=\"row\">\n	    <div class=\"col-sm-6 col-md-3\">\n			<div class=\"panel panel-pricing panel-primary\">\n				<div class=\"panel-heading\">\n				  <h3 class=\"panel-title\">Basic</h3>\n				</div>\n				<div class=\"panel-body\">\n					<h4>$5 <sup>/ month</sup></h4>\n				 	<p><span class=\"icon icon-ok\"></span> 1 active project</p>\n				 	<p><span class=\"icon icon-ok\"></span> 5 members</p>\n				 	<p><span class=\"icon icon-ok\"></span> 1 GB file storage</p>\n				 	<h5>All plans include:</h5>\n				 	<p class=\"all\"><span class=\"icon icon-ok\"></span> SSL encrpytion</p>\n				 	<p class=\"all\"><span class=\"icon icon-ok\"></span> Database backups</p>\n				 	<p class=\"all\"><span class=\"icon icon-ok\"></span> Easy data export</p>\n				 	<hr>\n				 	<a class=\"btn btn-primary\">Sign Up</a>\n				</div>\n			</div>\n		</div>\n		<div class=\"col-sm-6 col-md-3\">\n			<div class=\"panel panel-pricing panel-primary\">\n				<div class=\"panel-heading\">\n				  <h3 class=\"panel-title\">Standard</h3>\n				</div>\n				<div class=\"panel-body\">\n					<h4>$15 <sup>/ month</sup></h4>\n				 	<p><span class=\"icon icon-ok\"></span> 10 active projects</p>\n				 	<p><span class=\"icon icon-ok\"></span> Unlimited members</p>\n				 	<p><span class=\"icon icon-ok\"></span> 5 GB file storage</p>\n				 	<h5>All plans include:</h5>\n				 	<p class=\"all\"><span class=\"icon icon-ok\"></span> SSL encrpytion</p>\n				 	<p class=\"all\"><span class=\"icon icon-ok\"></span> Database backups</p>\n				 	<p class=\"all\"><span class=\"icon icon-ok\"></span> Easy data export</p>\n				 	<hr>\n				 	<a class=\"btn btn-primary\">Sign Up</a>\n				</div>\n			</div>\n		</div>\n		<div class=\"col-sm-6 col-md-3\">\n			<div class=\"panel panel-pricing panel-success\">\n				<div class=\"panel-heading\">\n				  <h3 class=\"panel-title\">Advanced</h3>\n				</div>\n				<div class=\"panel-body\">\n					<h4>$25 <sup>/ month</sup></h4>\n				 	<p><span class=\"icon icon-ok\"></span> 50 active projects</p>\n				 	<p><span class=\"icon icon-ok\"></span> Unlimited members</p>\n				 	<p><span class=\"icon icon-ok\"></span> 10 GB file storage</p>\n				 	<h5>All plans include:</h5>\n				 	<p class=\"all\"><span class=\"icon icon-ok\"></span> SSL encrpytion</p>\n				 	<p class=\"all\"><span class=\"icon icon-ok\"></span> Database backups</p>\n				 	<p class=\"all\"><span class=\"icon icon-ok\"></span> Easy data export</p>\n				 	<hr>\n				 	<a class=\"btn btn-success\">Sign Up</a>\n				</div>\n			</div>\n		</div>\n		<div class=\"col-sm-6 col-md-3\">\n			<div class=\"panel panel-pricing panel-primary\">\n				<div class=\"panel-heading\">\n				  <h3 class=\"panel-title\">Professional</h3>\n				</div>\n				<div class=\"panel-body\">\n					<h4>$50 <sup>/ month</sup></h4>\n				 	<p><span class=\"icon icon-ok\"></span> 100 active projects</p>\n				 	<p><span class=\"icon icon-ok\"></span> Unlimited members</p>\n				 	<p><span class=\"icon icon-ok\"></span> 30 GB file storage</p>\n				 	<h5>All plans include:</h5>\n				 	<p class=\"all\"><span class=\"icon icon-ok\"></span> SSL encrpytion</p>\n				 	<p class=\"all\"><span class=\"icon icon-ok\"></span> Database backups</p>\n				 	<p class=\"all\"><span class=\"icon icon-ok\"></span> Easy data export</p>\n				 	<hr>\n				 	<a class=\"btn btn-primary\">Sign Up</a>\n				</div>\n			</div>\n		</div>\n	  </div>\n	</div>\n</section>\n");
  
});

Ember.TEMPLATES["dashboard"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n				Hello.\n			");
  }

  data.buffer.push("<section class=\"section\">\n	<div class=\"container\">\n	  <div class=\"row\">\n	  	<div class=\"col-lg-3\">\n			");
  hashContexts = {'title': depth0,'type': depth0};
  hashTypes = {'title': "STRING",'type': "STRING"};
  options = {hash:{
    'title': ("hello"),
    'type': ("success")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['issue-panel'] || depth0['issue-panel']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "issue-panel", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n		</div>\n		<div class=\"col-lg-3\">\n			");
  hashContexts = {'title': depth0,'type': depth0};
  hashTypes = {'title': "STRING",'type': "STRING"};
  options = {hash:{
    'title': ("hello"),
    'type': ("primary")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['issue-panel'] || depth0['issue-panel']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "issue-panel", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n		</div>\n		<div class=\"col-lg-3\">\n			");
  hashContexts = {'title': depth0,'type': depth0};
  hashTypes = {'title': "STRING",'type': "STRING"};
  options = {hash:{
    'title': ("hello"),
    'type': ("warning")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['issue-panel'] || depth0['issue-panel']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "issue-panel", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n		</div>\n		<div class=\"col-lg-3\">\n			");
  hashContexts = {'title': depth0,'type': depth0};
  hashTypes = {'title': "STRING",'type': "STRING"};
  options = {hash:{
    'title': ("hello"),
    'type': ("danger")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['issue-panel'] || depth0['issue-panel']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "issue-panel", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n		</div>\n	  </div>\n	</div>\n</section>");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  data.buffer.push("<section class=\"section\">\n	<div class=\"container\">\n	  <div class=\"row front\">\n	    <div class=\"col-md-6\">\n	    	<h2>Stabilize Your Workflow.</h2>\n	    	<p class=\"callout\">\n	    		Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur.\n	    	</p>\n	    	<p class=\"callout\">\n		    	Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum. \n		    </p>\n	    </div>\n	    <div class=\"col-md-6 align-right visible-md visible-lg\">\n	    	<img src=\"assets/img/mac.png\" />\n	    </div>\n	  </div>\n	</div>\n</section>\n<section class=\"section striped\">\n	<div class=\"container\">\n	  <div class=\"row points\">\n	    <div class=\"col-md-4 point-block align-center\">\n	    	<i class=\"icon-group icon-4x\"></i>\n	    	<h4>Easy Collaboration</h4>\n	    	<p>Watching the progress of your group and seeing their actions in real-time has never been easier.</p>\n	    </div>\n	    <div class=\"col-md-4 point-block align-center\">\n	    	<i class=\"icon-bug icon-4x\"></i>\n	    	<h4>Intuitive Issue Tracking</h4>\n	    	<p>Create and view issues easily and quickly from a simple dashboard.</p>\n	    </div>\n	    <div class=\"col-md-4 point-block align-center\">\n	    	<i class=\"icon-envelope icon-4x\"></i>\n	    	<h4>Automatic Updates</h4>\n	    	<p>A simple click and you'll receive updates by email on the status of your project any time you choose.</p>\n	    </div>\n	  </div>\n	</div>\n</section>\n<section class=\"section\">\n	<div class=\"container\">\n	  <div class=\"row front\">\n	    <div class=\"col-lg-6 align-left visible-lg\">\n	    	<img src=\"assets/img/laptop.png\" />\n	    </div>\n	    <div class=\"col-lg-6\">\n	    	<h2>Organize Your Projects.</h2>\n	    	<p class=\"callout\">\n	    		Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam.\n	    	</p>\n	    	<p class=\"callout\">\n		    	Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum. \n		    </p>\n	    </div>\n	  </div>\n	</div>\n</section>\n");
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["pricing"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, stack2, hashContexts, hashTypes, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Free Trial <i class=\"icon-double-angle-right\"></i>");
  }

  data.buffer.push("<section class=\"section\">\n	<div class=\"container\">\n	  <div class=\"row\">\n	  	<div class=\"col-lg-12 align-center section-header\">\n	  		<h1>Free 14 Day Trial. No Credit Card Required.</h1>\n	  		<hr>\n	  		<h2>No commitment. Cancel anytime.\n	  	</div>\n	  </div>\n	</div>\n</section>\n\n<section class=\"section striped\">\n	<div class=\"container\">\n	  <div class=\"row\">\n	    <div class=\"col-sm-6 col-md-3\">\n			<div class=\"panel panel-pricing panel-primary\">\n				<div class=\"panel-heading\">\n				  <h3 class=\"panel-title\">Basic</h3>\n				</div>\n				<div class=\"panel-body\">\n					<h4>$5 <sup>/ month</sup></h4>\n				 	<p><span class=\"icon icon-ok\"></span> 1 active project</p>\n				 	<p><span class=\"icon icon-ok\"></span> 5 members</p>\n				 	<p><span class=\"icon icon-ok\"></span> 1 GB file storage</p>\n				 	<h5>All plans include:</h5>\n				 	<p class=\"all\"><span class=\"icon icon-ok\"></span> SSL encrpytion</p>\n				 	<p class=\"all\"><span class=\"icon icon-ok\"></span> Database backups</p>\n				 	<p class=\"all\"><span class=\"icon icon-ok\"></span> Easy data export</p>\n				 	<hr>\n				 	");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("btn btn-primary")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "auth.signup", options) : helperMissing.call(depth0, "link-to", "auth.signup", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n				</div>\n			</div>\n		</div>\n		<div class=\"col-sm-6 col-md-3\">\n			<div class=\"panel panel-pricing panel-primary\">\n				<div class=\"panel-heading\">\n				  <h3 class=\"panel-title\">Standard</h3>\n				</div>\n				<div class=\"panel-body\">\n					<h4>$15 <sup>/ month</sup></h4>\n				 	<p><span class=\"icon icon-ok\"></span> 10 active projects</p>\n				 	<p><span class=\"icon icon-ok\"></span> Unlimited members</p>\n				 	<p><span class=\"icon icon-ok\"></span> 5 GB file storage</p>\n				 	<h5>All plans include:</h5>\n				 	<p class=\"all\"><span class=\"icon icon-ok\"></span> SSL encrpytion</p>\n				 	<p class=\"all\"><span class=\"icon icon-ok\"></span> Database backups</p>\n				 	<p class=\"all\"><span class=\"icon icon-ok\"></span> Easy data export</p>\n				 	<hr>\n				 	");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("btn btn-primary")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "auth.signup", options) : helperMissing.call(depth0, "link-to", "auth.signup", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n				</div>\n			</div>\n		</div>\n		<div class=\"col-sm-6 col-md-3\">\n			<div class=\"panel panel-pricing panel-success\">\n				<div class=\"panel-heading\">\n				  <h3 class=\"panel-title\">Advanced</h3>\n				</div>\n				<div class=\"panel-body\">\n					<h4>$25 <sup>/ month</sup></h4>\n				 	<p><span class=\"icon icon-ok\"></span> 50 active projects</p>\n				 	<p><span class=\"icon icon-ok\"></span> Unlimited members</p>\n				 	<p><span class=\"icon icon-ok\"></span> 10 GB file storage</p>\n				 	<h5>All plans include:</h5>\n				 	<p class=\"all\"><span class=\"icon icon-ok\"></span> SSL encrpytion</p>\n				 	<p class=\"all\"><span class=\"icon icon-ok\"></span> Database backups</p>\n				 	<p class=\"all\"><span class=\"icon icon-ok\"></span> Easy data export</p>\n				 	<hr>\n				 	");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("btn btn-success")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "auth.signup", options) : helperMissing.call(depth0, "link-to", "auth.signup", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n				</div>\n			</div>\n		</div>\n		<div class=\"col-sm-6 col-md-3\">\n			<div class=\"panel panel-pricing panel-primary\">\n				<div class=\"panel-heading\">\n				  <h3 class=\"panel-title\">Professional</h3>\n				</div>\n				<div class=\"panel-body\">\n					<h4>$50 <sup>/ month</sup></h4>\n				 	<p><span class=\"icon icon-ok\"></span> 100 active projects</p>\n				 	<p><span class=\"icon icon-ok\"></span> Unlimited members</p>\n				 	<p><span class=\"icon icon-ok\"></span> 30 GB file storage</p>\n				 	<h5>All plans include:</h5>\n				 	<p class=\"all\"><span class=\"icon icon-ok\"></span> SSL encrpytion</p>\n				 	<p class=\"all\"><span class=\"icon icon-ok\"></span> Database backups</p>\n				 	<p class=\"all\"><span class=\"icon icon-ok\"></span> Easy data export</p>\n				 	<hr>\n				 	");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("btn btn-primary")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "auth.signup", options) : helperMissing.call(depth0, "link-to", "auth.signup", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\n				</div>\n			</div>\n		</div>\n	  </div>\n	</div>\n</section>\n\n<section class=\"section faq\">\n	<div class=\"container\">\n	  <div class=\"row\">\n	  	<div class=\"col-lg-12\">\n	  		<h4>What can I use during the free trial?</h4>\n	  		<p>Once you pick a plan to test the free trial, you'll recieve exactly what's listed in the plan, free for the first two weeks. Nothing is different about the free trial and the paid account, so you can try out every last part of Tranquility for free. Once you reach the end of the free trial, you'll be prompted to enter your credit card to continue using the site. We'll make sure to remind you a few days in advance so there's no lapse in service.</p>\n	  		<h4>What do you mean by \"active\" projects?</h4>\n	  		<p>Each plan has a number of \"active\" projects included in the plan. An active project is a project that is currently being worked on. Once you complete a project, you can choose to archive it. This way you will keep all the data from the project, but no users will be able to contribute to it anymore, unless it is re-activated. While it's in an archived state, a project does not count towards your number of total active projects.</p>\n	  		<h4>What browsers do you support?</h4>\n	  		<p>We officially support all modern browsers, including current versions of Chrome, Safari, Opera, and Internet Explorer. Internet Explorer 9 and up is officially supported, although older versions may continue to work with Tranquility.</p>\n	  		<h4>What happens if I decide to cancel?</h4>\n	  		<p>If you cancel prior to the free trial being over, you're all set. We won't bother you, unless you come back to try us out again. If you've begun paying for our service, it's also just as easy to cancel. We'll pro-rate the monthly charge so you only have to pay for what you used, and there's no commitment, so there's no cancellation fees.</p>\n	  	</div>\n	  </div>\n	</div>\n</section>\n");
  return buffer;
  
});