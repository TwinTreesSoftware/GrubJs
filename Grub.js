/**
 * Grub.js - Javascript library created for make work with HTML DOM simpless.
 * Copyright 2016. Semen Beliy.
 * v.16.02
 * Maked under MIT License
 * It's source code of Grub.js.
 */
/*
 * GitHub: https://github.com/TwinTreesSoftware/GrubJs
 */
(function() {
	// Construct grub
	var Grub = function(elem) {
		return new Grub.foo.init(elem);
	}
	
	// Information
	Grub.inf = {
		desc: "Grub.js - Javascript library created for make work with HTML DOM simpless.",
		copyright: "Copyright 2016. Semen Beliy",
		ver: "16.01"
	};
	
	// Functions
	Grub.foo = {
		//It's selector function
		init: function(elem) {
			// Getting element
			elem = typeof elem == 'string' ? document.getElementById(elem) : elem;
			// This[0] == selected element
			this[0] = elem
			// Return element data
			return this;
		},
		
		// GetNodeName
		getNodeName: function(){
			return this[0].nodeName.toUpperCase();
		},
		
		// Function to change or get html content of element
		html: function(content){
			if(content == undefined){ // If we not specify content
			return this[0].innerHTML; // Return content
			} else { // Else...
			return this[0].innerHTML=content; // Set content
			}
		},
		
		append: function(content){
			var old = this[0].innerHTML; // Get old content of element
			return this[0].innerHTML=old+content; // Set first old content and second new content
		},
		
		preappend: function(content){
			var old = this[0].innerHTML; // Get old content of element
			return this[0].innerHTML=content+old; // Set first new content and second old content
		},
		
		attr: function(attr,value){
			if(value == undefined){ // If we not specify value
				return this[0].getAttribute(attr); // Return attribute value
			} else { // Else...
				return this[0].setAttribute(attr,value); // Set attribute value
			}
		},
		
		del: function(){
			this[0].parentNode.removeChild(this[0]);
		},
		
		removeAttr: function(attr){
			this[0].removeAttribute(attr);
		},
		
		isHasAttr: function(attr){
			return this[0].hasAttribute(attr);
		},
		
		show: function(){
			this[0].style.display = "block";
		},
		
		hide: function(){
			this[0].style.display = "none";
		}
		
	}
	
	// Prototype as foo(functions list)
	Grub.foo.init.prototype = Grub.foo;
	
	// Grub.foo == select(selector)
	window.Grub = window.select = Grub;
})(); // It's means: by creation - execute

// By Semen Beliy. 