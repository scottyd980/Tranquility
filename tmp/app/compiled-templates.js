Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n          <li>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "about", options) : helperMissing.call(depth0, "link-to", "about", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n        ");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("About");
  }

function program4(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n          <li><a ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "logout", {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" href=\"\">Logout</a></li>\n        ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, stack2, hashTypes, hashContexts, options;
  data.buffer.push("\n          <li>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "auth.signup", options) : helperMissing.call(depth0, "link-to", "auth.signup", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n          <li>");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to'] || depth0['link-to']),stack1 ? stack1.call(depth0, "auth.login", options) : helperMissing.call(depth0, "link-to", "auth.login", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("</li>\n        ");
  return buffer;
  }
function program7(depth0,data) {
  
  
  data.buffer.push("Sign Up");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("Login");
  }

  data.buffer.push("<div class=\"wrapper\">\n<nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n  <!-- Brand and toggle get grouped for better mobile display -->\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\"><img src=\"../assets/img/logo2.png\"/> Tranquility</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\n      <ul class=\"nav navbar-nav\">\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isAuthenticated", {hash:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        ");
  hashTypes = {};
  hashContexts = {};
  stack1 = helpers['if'].call(depth0, "isAuthenticated", {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </ul>\n    </div><!-- /.navbar-collapse -->\n  </div>\n</nav>\n\n");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("\n\n<div class=\"push\"></div>\n</div>\n<footer>\n  <div class=\"align-center\">&copy; 2013 Tranquility</div>\n</footer>");
  return buffer;
  
});

Ember.TEMPLATES["components/todo-item"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashContexts, hashTypes, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<div class=\"todo-item\" ");
  hashContexts = {'class': depth0};
  hashTypes = {'class': "STRING"};
  data.buffer.push(escapeExpression(helpers.bindAttr.call(depth0, {hash:{
    'class': ("item.isDone:done")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">\n  ");
  hashContexts = {'class': depth0,'type': depth0,'checked': depth0};
  hashTypes = {'class': "STRING",'type': "STRING",'checked': "ID"};
  options = {hash:{
    'class': ("todo-checkbox"),
    'type': ("checkbox"),
    'checked': ("item.isDone")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n  <span class=\"todo-editable\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "edit", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "item.name", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</span>\n  <a href=\"#\" class=\"todo-delete\" ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "delete", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push(" title=\"Delete todo\">&times;</a>\n</div>\n");
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
  data.buffer.push("\n					</div>\n					");
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
  var buffer = '', stack1, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', hashTypes, hashContexts;
  data.buffer.push("\n						<div class=\"alert alert-danger\">");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "errorMessage", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</div>\n					");
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
  data.buffer.push(" role=\"form\">\n						<div class=\"form-group\">\n							<label for=\"fullname\">Full Name</label>\n							");
  hashContexts = {'value': depth0,'type': depth0,'id': depth0,'class': depth0};
  hashTypes = {'value': "ID",'type': "STRING",'id': "STRING",'class': "STRING"};
  options = {hash:{
    'value': ("fullname"),
    'type': ("text"),
    'id': ("fullname"),
    'class': ("form-control")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n						</div>\n						<div class=\"form-group\">\n							<label for=\"email\">Email Address</label>\n							");
  hashContexts = {'value': depth0,'type': depth0,'id': depth0,'class': depth0};
  hashTypes = {'value': "ID",'type': "STRING",'id': "STRING",'class': "STRING"};
  options = {hash:{
    'value': ("email"),
    'type': ("text"),
    'id': ("email"),
    'class': ("form-control")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n						</div>\n						<div class=\"form-group\">\n							<label for=\"username\">Username</label>\n							");
  hashContexts = {'value': depth0,'type': depth0,'id': depth0,'class': depth0};
  hashTypes = {'value': "ID",'type': "STRING",'id': "STRING",'class': "STRING"};
  options = {hash:{
    'value': ("username"),
    'type': ("text"),
    'id': ("username"),
    'class': ("form-control")
  },contexts:[],types:[],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.input || depth0.input),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n						</div>\n						<div class=\"form-group\">\n							<label for=\"password\">Password</label>\n							");
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
  var buffer = '', stack1, hashTypes, hashContexts, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<h3>Hello World!</h3>\n<p>");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "someText", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("</p>\n<p>Word Count: ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.wordCount || depth0.wordCount),stack1 ? stack1.call(depth0, "someText", options) : helperMissing.call(depth0, "wordCount", "someText", options))));
  data.buffer.push("</p>\n");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<section class=\"section\">\n	<div class=\"container\">\n	  <div class=\"row\">\n	    <div class=\"col-lg-6\">\n	    	<h2>Stabilize Your Workflow.</h2>\n	    	<p class=\"callout\">\n	    		Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur.\n	    	</p>\n	    	<p class=\"callout\">\n		    	Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum. \n		    </p>\n	    </div>\n	    <div class=\"col-lg-6 align-right\">\n	    	<img src=\"assets/img/mac.png\" />\n	    </div>\n	  </div>\n	</div>\n</section>\n<section class=\"section striped\">\n	<div class=\"container\">\n	  <div class=\"row\">\n	    <div class=\"col-lg-6\">\n	    	<img src=\"assets/img/laptop.png\" />\n	    </div>\n	    <div class=\"col-lg-6\">\n	    	<h2>Another Great Point.</h2>\n	    	<p class=\"callout\">\n	    		Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean lacinia bibendum nulla sed consectetur.\n	    	</p>\n	    </div>\n	  </div>\n	</div>\n</section>\n<section class=\"section\">\n	<div class=\"container\">\n	  <div class=\"row\">\n	    <div class=\"col-lg-12\">\n	    	<a class=\"btn btn-primary\">Test</a>\n			<a class=\"btn btn-success\">Test</a>\n			<a class=\"btn btn-info\">Test</a>\n			<a class=\"btn btn-warning\">Test</a>\n			<a class=\"btn btn-danger\">Test</a>\n	    </div>\n	  </div>\n	</div>\n</section>\n");
  
});