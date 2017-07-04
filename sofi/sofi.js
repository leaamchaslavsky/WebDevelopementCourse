(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"sofi_atlas_", frames: [[3448,3268,625,406],[2187,3460,444,364],[2987,3460,350,356],[862,917,325,388],[3785,798,159,243],[0,0,1197,915],[3946,798,128,128],[3785,1043,203,134],[3448,1384,626,626],[3785,600,231,196],[1724,3460,461,415],[2633,3460,352,382],[3785,0,307,320],[3785,322,239,276],[2187,3826,358,297],[2547,3844,358,297],[0,3685,358,297],[3339,3676,358,297],[2907,3844,358,297],[1724,3877,358,297],[360,3685,358,297],[3699,3676,358,297],[3448,2012,626,626],[3448,2640,626,626],[1199,0,860,690],[3267,3975,358,297],[0,3984,358,297],[3627,3975,358,297],[1724,2076,860,690],[0,1609,860,690],[2586,2076,860,690],[2061,0,860,690],[2586,1384,860,690],[2923,692,860,690],[1724,1384,860,690],[0,2301,860,690],[2923,0,860,690],[1199,692,860,690],[2061,692,860,690],[0,917,860,690],[862,2076,860,690],[862,1384,860,690],[862,2768,860,690],[0,2993,860,690],[862,3460,860,690],[1080,4152,358,297],[3524,4274,358,297],[3164,4274,358,297],[2444,4143,358,297],[1724,2768,860,690],[360,3984,358,297],[2586,2768,860,690],[1440,4176,358,297],[2804,4143,358,297],[2084,4125,358,297],[720,4152,358,297]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._1 = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._6 = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._9 = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Capture = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.clownhats_31883942 = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.cut = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.multipleuserssilhouette_31849546 = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.פתק10 = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.פתק3 = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.פתק5 = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.פתק7 = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.פתק9 = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.צפוףצפוף = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.ציורמשותף = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.קוביותקרח = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.רביעיות = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.שתיאמיתותושקר = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.שילובזרועות = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.שמותעםכדור = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.תןקו = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.איקס = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.איקס1 = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.ברכותגדולמקוריות = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.ברכותמקוריות = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.בינגו = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.בליעיןהרע = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.גדולצפוףצפוף = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.גדולציורמשותף = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.גדולקוביתקרח = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.גדולרביעיות = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.גדולשתיאמיתות = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.גדולשילובזרועות = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.גדולשמותעםכדור = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.גדולתןקו = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.גדולבינגו = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.גדולבליעיןהרע = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.גדולזההסודשלי = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.גדולזוגמשלים = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.גדולזיכרוןלבוש = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.גדוללחטוףסיפור = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.גדולמהאתיודעת = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.גדולמהמשותף = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.גדולמילתהקסם = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.הסודשלי = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.זוגמשלים = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.זיכרוןלבוש = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.טעימותבקבוצה = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.טעימותגדולבקבוצה = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.לחטוףסיפור = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.משחקגדולההרגלים = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.משחקההרגלים = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.מהאתיודעתעל = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.מהמשותף = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.מילתהקסם = function() {
	this.spriteSheet = ss["sofi_atlas_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ללאאביזרים = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgBA5IAAgLQAAgKABgFQABgFAFgFIAEgGQADgEACgEIABgIIAAgLIgtAAIAAgsIAOAAIAAAfIAtAAIAAAVQAAAIgBAFQgCAGgEAFIgEAGQgHAIAAAKIAAANg");
	this.shape.setTransform(172.8,-68.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgCA5IAAgLQABgKABgFQACgFADgFIAFgGQAEgEAAgEIABgIIAAgLIgtAAIAAgsIAQAAIAAAfIAsAAIAAAVQABAIgCAFQgCAGgEAFIgEAGQgGAIgBAKIAAANg");
	this.shape_1.setTransform(165.4,-68.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAUApIgegsQgIAEgBAMIgEAcIgPAAIADgcQADgTAOgHIgTgbIASAAIAaAkQAEgCACgFQACgEABgIIACgRIAQAAIgCARQgBALgEAHQgEAGgJAFIAZAjg");
	this.shape_2.setTransform(157.6,-67);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAVApIgggsQgGAEgCAMIgDAcIgQAAIAEgcQACgTAOgHIgUgbIATAAIAZAkQAFgCACgFQACgEABgIIACgRIAPAAIgBARQgCALgDAHQgEAGgJAFIAZAjg");
	this.shape_3.setTransform(144.1,-67);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgnAqIAAgNIAzAAIAAgcQgBgLgCgFQgDgGgGgEQgGgDgPAAIgPABIgCgMQALgCAMAAQAWAAAJAKQALAKAAATIAAAfIANAAIAAANg");
	this.shape_4.setTransform(135.1,-67.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgHAWIAAgqIAPAAIAAAqg");
	this.shape_5.setTransform(128.8,-69);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgMApIAAgNIgBgZIgBgJQAAgNALgJIgVAAIAAgMIAxAAIAAAKQgMAAgHAHQgGAHAAAMIABAHIABAbIAAALg");
	this.shape_6.setTransform(124,-67);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AATAqIAAgpQAAgKgDgGQgCgGgHgEQgHgDgLAAIgUACIgBgNQAMgCAJAAQAZAAAKAKQAJAKAAATIAAAsg");
	this.shape_7.setTransform(116.2,-67.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgHAWIAAgqIAPAAIAAAqg");
	this.shape_8.setTransform(110.6,-69);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgjAqIAAhQQARgDAOAAQAOAAAJAFQAKAEADAHQAEAIAAANIAAAugAgUgbIAAA4IApAAIAAgfQAAgJgCgGQgCgEgGgEQgGgDgKAAIgPABg");
	this.shape_9.setTransform(103.8,-67.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ללאאביזרים, new cjs.Rectangle(97,-79.4,81.9,21.9), null);


(lib.ימיהולדת = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAVIAAgqIAPAAIAAAqg");
	this.shape.setTransform(169.4,-145);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgDAqIAAgMIAbAAIAAgZIgBgTQgBgGgDgEQgEgEgGAAQgJAAgFAJQgGAJgEAWIgGAeIgPAAIAGggIAEgPIgMgjIAOAAIAGASQAEgIAIgFQAHgGAIAAQAKAAAHAFQAHAFADAJQADAKAAARIAAAlg");
	this.shape_1.setTransform(162.4,-143.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHAVIAAgqIAPAAIAAAqg");
	this.shape_2.setTransform(155.9,-145);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAWAqIAAgpQAAgLgDgGQgDgGgHgDQgHgDgNAAQgKAAgNADIgCgOQAPgCANAAQAZAAAKAKQAKAJAAAUIAAAsgAgjAqIAAguIAPAAIAAAug");
	this.shape_3.setTransform(144.6,-143.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgHAqIAAhTIAPAAIAABTg");
	this.shape_4.setTransform(137.8,-143);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgCA5IAAgLQAAgKACgFQACgFADgFIAFgGQADgEABgEIABgIIAAgLIgtAAIAAgsIAQAAIAAAfIAtAAIAAAVQgBAIgBAFQgCAGgEAFIgEAGQgGAIgBAKIAAANg");
	this.shape_5.setTransform(132,-144.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAIAqIAAhGIgsAAIAAgNIBJAAIAAANIgOAAIAABGg");
	this.shape_6.setTransform(124.4,-143);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgrAoIACgLIAJABQAGAAACgCQACgDAAgGIAAgvIgRACIgBgNQASgCASAAQASAAAKADQAKADAFAJQAFAIAAAQIAAAsIgPAAIAAgpQAAgLgBgGQgCgFgHgEQgGgDgNAAIgHAAIAAAxQAAAIgCAEQgBAEgFADQgEACgKAAQgHAAgHgCg");
	this.shape_7.setTransform(114.7,-143.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ימיהולדת, new cjs.Rectangle(108,-155.4,65.6,21.9), null);


(lib.היכרות = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAWAqIAAgpQAAgLgDgGQgDgGgHgDQgHgDgNAAQgKAAgNACIgCgNQAPgCANAAQAZAAAKAKQAKAJAAAUIAAAsgAgjAqIAAgtIAPAAIAAAtg");
	this.shape.setTransform(142.6,-117.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHAVIAAgqIAPAAIAAAqg");
	this.shape_1.setTransform(135.8,-119);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdAoIACgNQAHADAIgBQAIAAAGgDQAFgEAEgGQADgHAAgJQAAgMgHgIQgHgJgMABQgIAAgHACIgCgOQAJgCAHAAQAUAAAMANQALALAAASQAAANgFAIQgFAKgJAGQgKAGgOAAQgHAAgJgDg");
	this.shape_2.setTransform(130.1,-117);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AATAqIAAgpQAAgKgCgGQgDgFgHgEQgHgEgLAAIgUABIgCgMQAMgCALAAQAYAAAKAKQAKAJAAAUIAAAsg");
	this.shape_3.setTransform(121.9,-117.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgHAqIAAhTIAPAAIAABTg");
	this.shape_4.setTransform(116.3,-117);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgrAoIACgLIAJABQAGAAACgCQACgDAAgGIAAgvIgRACIgBgNQASgCASAAQASAAAKADQAKADAFAJQAFAIAAAQIAAAsIgPAAIAAgpQAAgLgBgGQgCgFgHgEQgGgDgNAAIgHAAIAAAxQAAAIgCAEQgBAEgFADQgEACgKAAQgHAAgHgCg");
	this.shape_5.setTransform(108.7,-117.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.היכרות, new cjs.Rectangle(102,-129.4,47.6,21.9), null);


(lib.גיבוש = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.גיבוש, null, null);


(lib.גדולהמכירים = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAOAqIgGgUQgJAAgGAMIgFAIIgPAAIAHgNQAFgLAIgDQAHgFAFAAIAAgUIAAgKQgCgEgDgCQgCgCgGAAIgIABIgCgMQAGgCAIAAQAJAAAGAEQAGAEABAGQADAGAAALIAAAYIAHAcg");
	this.shape.setTransform(164.2,-110.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAIApIAAhFIgsAAIAAgNIBJAAIAAANIgOAAIAABFg");
	this.shape_1.setTransform(157.1,-110);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHApIAAhSIAPAAIAABSg");
	this.shape_2.setTransform(151,-110);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgCA5IAAgLQAAgKACgFQACgFAEgFIAEgGQADgEACgEIAAgIIAAgLIgsAAIAAgsIAPAAIAAAfIAtAAIAAAVQAAAIgCAFQgCAGgEAFIgEAGQgHAIABAKIAAANg");
	this.shape_3.setTransform(145.2,-111.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAWAqIAAgpQAAgLgDgGQgDgGgHgDQgHgDgNAAQgKAAgNACIgCgMQAPgDANAAQAZAAAKAKQAKAKAAATIAAAsgAgjAqIAAgtIAPAAIAAAtg");
	this.shape_4.setTransform(136.8,-110.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVAHIAAgNIArAAIAAANg");
	this.shape_5.setTransform(129.3,-110);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgDAqIAAgNIAbAAIAAgYIgBgTQgBgGgDgEQgEgEgGAAQgJAAgFAJQgGAJgEAVIgGAfIgPAAIAGghIAEgPIgMgiIAOAAIAGATQAEgJAIgFQAHgGAIAAQAKAAAHAFQAHAFADAKQADAIAAATIAAAkg");
	this.shape_6.setTransform(121.6,-110.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgdAoIACgNQAHACAIAAQAIAAAGgDQAGgEADgHQADgGAAgJQAAgMgHgIQgHgJgMAAQgIAAgHADIgCgOQAJgCAHAAQAUAAALAMQAMANAAARQAAAMgFAJQgFAKgJAGQgKAGgOAAQgHAAgJgDg");
	this.shape_7.setTransform(113.3,-110);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgHAWIAAgrIAPAAIAAArg");
	this.shape_8.setTransform(107.7,-112);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AATAqIAAgpQAAgKgCgGQgDgGgHgEQgHgDgLAAIgUABIgCgMQAMgCALAAQAYAAAKAKQAKAKAAATIAAAsg");
	this.shape_9.setTransform(101.2,-110.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgHAWIAAgrIAPAAIAAArg");
	this.shape_10.setTransform(95.6,-112);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgjAqIAAhQQARgDAOAAQAOAAAJAEQAKAFADAHQAEAIAAAOIAAAtgAgUgbIAAA4IApAAIAAgfQAAgJgCgGQgCgEgGgEQgGgDgKAAIgPABg");
	this.shape_11.setTransform(88.8,-110.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.גדולהמכירים, new cjs.Rectangle(82,-122.4,87.8,21.9), null);


(lib.גדולהחדשים = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AANAqIgFgUQgJAAgGAMIgFAIIgPAAIAHgNQAFgLAIgDQAHgFAGAAIAAgUIgCgKQAAgEgEgCQgCgCgGAAIgIABIgBgMQAFgCAHAAQAKAAAGAEQAFAEACAGQACAGAAALIAAAYIAIAcg");
	this.shape.setTransform(112.9,-83.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAIApIAAhFIgsAAIAAgNIBJAAIAAANIgOAAIAABFg");
	this.shape_1.setTransform(105.8,-83);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHApIAAhSIAPAAIAABSg");
	this.shape_2.setTransform(99.8,-83);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgBA5IAAgLQAAgKABgFQABgFAEgFIAFgGQAEgEAAgEIACgIIAAgLIguAAIAAgsIAPAAIAAAfIAtAAIAAAVQABAIgCAFQgCAGgEAFIgEAGQgGAIgBAKIAAANg");
	this.shape_3.setTransform(93.9,-84.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAWAqIAAgpQAAgLgDgGQgDgGgHgDQgHgDgNAAQgKAAgNACIgCgMQAPgDANAAQAZAAAKAKQAKAKAAATIAAAsgAgjAqIAAgtIAPAAIAAAtg");
	this.shape_4.setTransform(85.6,-83.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVAHIAAgNIArAAIAAANg");
	this.shape_5.setTransform(78.1,-83);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAVAqIAAgsQAAgJgCgGQgCgEgGgEQgGgDgKAAIgPABIAABFIgPAAIAAhQQARgDAOAAQAOAAAJAEQAKAFADAHQAEAIAAAOIAAAtg");
	this.shape_6.setTransform(70.6,-83.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAIApIAAhFIgsAAIAAgNIBJAAIAAANIgOAAIAABFg");
	this.shape_7.setTransform(61.7,-83);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgaAjQgKgHgFgNQgFgNAAgVIgBgXIAPAAIABAOIABAcQAJAAAGgEQAHgEAAgLIACgXIAOAAIgCAaIgCALIgEAGQgCAEgHADQgHACgLABQACAJAHAFQAHAFAKAAQAJAAAHgFQAHgEADgHQADgIABgMIAEgkIAPAAIgDAfQgCAQgEAMQgEALgLAHQgKAIgQAAQgOAAgKgIg");
	this.shape_8.setTransform(52.1,-82.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgHAWIAAgrIAPAAIAAArg");
	this.shape_9.setTransform(44.6,-85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgjAqIAAhQQARgDAOAAQAOAAAJAEQAKAFADAHQAEAIAAAOIAAAtgAgUgbIAAA4IApAAIAAgfQAAgJgCgGQgCgEgGgEQgGgDgKAAIgPABg");
	this.shape_10.setTransform(37.8,-83.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.גדולהחדשים, new cjs.Rectangle(31,-95.4,87.5,21.9), null);


(lib.בחראתסוג = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgsAvIAAgOIA5AAIAAggQAAgMgDgGQgDgHgHgEQgHgDgQAAIgSABIgBgOQAMgCANAAQAYAAALALQAMALAAAWIAAAjIAOAAIAAAOg");
	this.shape.setTransform(218.4,-110.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAYAvIAAgxQAAgLgCgFQgDgGgGgEQgHgDgMAAIgRABIAABNIgRAAIAAhaQATgDAQAAQAQAAALAFQAKAFAEAIQAFAJAAAPIAAAzg");
	this.shape_1.setTransform(208.1,-110.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAVAvIAAguQAAgLgDgHQgCgGgIgEQgIgEgNAAIgWABIgCgOQAOgCALAAQAbAAAMALQALALAAAWIAAAxg");
	this.shape_2.setTransform(197.7,-110.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAXAvIgjgyQgIAEgBANIgEAhIgSAAIAEghQADgVAQgIIgWgfIAUAAIAdAqQAGgDACgFQACgEABgLIADgTIARAAIgCAUQgCAMgEAIQgEAHgKAGIAcAog");
	this.shape_3.setTransform(183.7,-110.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgxAtIADgNQAFACAFAAQAGAAACgDQADgDAAgGIAAg1IgTABIgBgOQAUgCAUgBQAUABAMADQALAEAGAJQAGAKAAARIAAAyIgRAAIAAguQAAgNgCgGQgCgGgHgEQgHgEgPAAIgJAAIAAA3QAAAKgBAEQgCAEgFADQgFAEgKAAQgJAAgIgDg");
	this.shape_4.setTransform(172.2,-110.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgfAkQgMgNAAgWQAAgWAMgNQAMgOATAAQAMAAAJAFQAKAFAGALQAHAMAAAQQAAANgFALQgFALgKAHQgKAGgOAAQgTAAgMgNgAgSgYQgGAKAAAPQAAAQAGAJQAHAJALAAQANAAAGgKQAHgJAAgQQAAgQgHgJQgHgJgMAAQgMAAgGAKg");
	this.shape_5.setTransform(156.7,-110.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgIAvIAAhdIARAAIAABdg");
	this.shape_6.setTransform(149.3,-110.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAPAvIgGgXQgKAAgHANIgFAKIgSAAIAIgOQAGgNAJgEQAIgEAGAAIAAgYIgBgLQgBgEgEgCQgDgDgGAAIgJABIgCgNQAGgCAJAAQALAAAGAEQAGAFADAHQACAGAAAMIAAAcIAJAfg");
	this.shape_7.setTransform(143.2,-110.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAZAvIAAguQAAgNgEgGQgDgHgIgDQgIgDgOAAQgMAAgPACIgBgOQAQgDAPAAQAcAAALALQALALAAAWIAAAxgAgnAvIAAgzIARAAIAAAzg");
	this.shape_8.setTransform(129.4,-110.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgDAvIAAgOIAeAAIAAgbIgBgWQgBgHgEgEQgEgFgGAAQgKAAgGALQgHAKgFAYIgHAiIgQAAIAHgkIAEgRIgOgnIAQAAIAHAVQAEgJAJgHQAIgGAKAAQALAAAHAFQAIAGAEAKQADALAAAUIAAApg");
	this.shape_9.setTransform(118.3,-110.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeAoQgLgIgFgPQgGgOABgYIgCgaIARAAIAAAPQABAXACAJQAJAAAHgEQAIgEAAgNIACgaIAPAAIgCAdIgBAMQgBAEgEADQgDAFgHACQgIAEgMABQABAJAIAGQAJAGALAAQAKAAAHgGQAJgFADgHQAEgJABgOIAEgoIAQAAIgDAjQgCASgEANQgFANgMAIQgLAIgSAAQgRAAgLgIg");
	this.shape_10.setTransform(107,-110.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAYAvIAAgxQAAgLgCgFQgDgGgGgEQgHgDgMAAIgRABIAABNIgRAAIAAhaQATgDAQAAQAQAAALAFQAKAFAEAIQAFAJAAAPIAAAzg");
	this.shape_11.setTransform(95.4,-110.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgkBBIAAhYIAQAAIAABYgAABAdIAAgNQAAgJACgGQACgFAFgHIAFgHIAFgIIABgLIAAgMIg6AAIAAgPIBLAAIAAAYQAAAKgCAGQgCAGgEAGIgFAGQgHAJAAALIAAAPg");
	this.shape_12.setTransform(85.2,-109);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAZAvIAAguQAAgNgEgGQgDgHgIgDQgIgDgOAAQgMAAgPACIgBgOQAQgDAPAAQAcAAALALQALALAAAWIAAAxgAgnAvIAAgzIARAAIAAAzg");
	this.shape_13.setTransform(69.6,-110.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgDAvIAAgOIAeAAIAAgbIgBgWQgBgHgEgEQgEgFgGAAQgKAAgGALQgHAKgFAYIgHAiIgQAAIAHgkIAEgRIgOgnIAQAAIAHAVQAEgJAJgHQAIgGAKAAQALAAAHAFQAIAGAEAKQADALAAAUIAAApg");
	this.shape_14.setTransform(58.5,-110.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgxAtIADgNQAFACAFAAQAGAAACgDQADgDAAgGIAAg1IgTABIgBgOQAUgCAUgBQAUABAMADQALAEAGAJQAGAKAAARIAAAyIgRAAIAAguQAAgNgCgGQgCgGgHgEQgHgEgPAAIgJAAIAAA3QAAAKgBAEQgCAEgFADQgFAEgKAAQgJAAgIgDg");
	this.shape_15.setTransform(47.2,-110.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAXAvIgjgyQgIAEgBANIgEAhIgSAAIAEghQADgVAQgIIgWgfIAUAAIAdAqQAGgDACgFQACgEABgLIADgTIARAAIgCAUQgCAMgEAIQgEAHgKAGIAcAog");
	this.shape_16.setTransform(37,-110.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgIAYIAAgvIARAAIAAAvg");
	this.shape_17.setTransform(29.5,-113);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgoAvIAAhaQATgDAQAAQAQAAALAFQAKAFAEAIQAFAJAAAPIAAAzgAgXgeIAAA/IAvAAIAAgjQAAgLgCgFQgDgGgGgEQgHgDgMAAIgRABg");
	this.shape_18.setTransform(21.9,-110.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgCBAIAAgMQAAgLACgGQACgGAEgFIAFgHIAGgJIABgJIAAgNIgzAAIAAgxIARAAIAAAjIAyAAIAAAXQAAAKgCAFQgBAHgFAGIgFAGQgHAKAAAKIAAAPg");
	this.shape_19.setTransform(7.1,-112.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAVBBIAAhRQAAgPgEgGQgEgHgIgDQgHgCgLAAIgWABIgCgOQAOgCALAAQAZAAAMAKQANAKAAAYIAABVg");
	this.shape_20.setTransform(-1.9,-109);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAXAvIgjgyQgIAEgBANIgEAhIgSAAIAEghQADgVAQgIIgWgfIAUAAIAdAqQAGgDACgFQACgEABgLIADgTIARAAIgCAUQgCAMgEAIQgEAHgKAGIAcAog");
	this.shape_21.setTransform(-15.9,-110.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgIAvIAAhdIARAAIAABdg");
	this.shape_22.setTransform(-23.4,-110.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgCBAIAAgMQAAgLACgGQACgGAEgFIAFgHIAGgJIAAgJIAAgNIgyAAIAAgxIAQAAIAAAjIAzAAIAAAXQAAAKgBAFQgCAHgFAGIgFAGQgHAKAAAKIAAAPg");
	this.shape_23.setTransform(-35,-112.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAYAvIAAgxQAAgLgCgFQgDgGgGgEQgHgDgMAAIgRABIAABNIgRAAIAAhaQATgDAQAAQAQAAALAFQAKAFAEAIQAFAJAAAPIAAAzg");
	this.shape_24.setTransform(-44.4,-110.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgIBBIAAhGIgcg7IASAAIAWAvQAHgEADgFQACgFABgJIACgYIASAAIgDAbQgDAYgXAJIAABFg");
	this.shape_25.setTransform(-54.2,-109);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgoAkQAQgCAKgDIgQhRIASAAIAMBMQAPgGAEgLQAEgKAAgRIABggIARAAIgBAZIgCAZQgBAGgDAJQgEAIgHAHQgHAHgOAEQgNAGgaAEg");
	this.shape_26.setTransform(-68.4,-110.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgCBAIAAgMQAAgLACgGQABgGAFgFIAGgHIAEgJIABgJIAAgNIgyAAIAAgxIAQAAIAAAjIAzAAIAAAXQAAAKgCAFQgCAHgEAGIgFAGQgHAKAAAKIAAAPg");
	this.shape_27.setTransform(-77,-112.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgDAvIAAgOIAeAAIAAgbIgBgWQgBgHgEgEQgEgFgGAAQgKAAgGALQgHAKgFAYIgHAiIgQAAIAHgkIAEgRIgOgnIAQAAIAHAVQAEgJAJgHQAIgGAKAAQALAAAHAFQAIAGAEAKQADALAAAUIAAApg");
	this.shape_28.setTransform(-91.7,-110.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgdAoQgLgIgGgPQgFgOgBgYIgBgaIARAAIAAAPQABAXABAJQAKAAAHgEQAIgEAAgNIACgaIAPAAIgBAdIgCAMQgBAEgEADQgCAFgIACQgHAEgNABQABAJAJAGQAHAGAMAAQAKAAAIgGQAHgFAEgHQAEgJABgOIAEgoIAQAAIgCAjQgCASgFANQgFANgMAIQgLAIgSAAQgRAAgKgIg");
	this.shape_29.setTransform(-103,-110.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAYAvIAAgxQAAgLgCgFQgDgGgGgEQgHgDgMAAIgRABIAABNIgRAAIAAhaQATgDAQAAQAQAAALAFQAKAFAEAIQAFAJAAAPIAAAzg");
	this.shape_30.setTransform(-114.6,-110.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgkBBIAAhYIAQAAIAABYgAABAdIAAgNQAAgJACgGQACgFAFgHIAFgHIAFgIIABgLIAAgMIg6AAIAAgPIBLAAIAAAYQAAAKgCAGQgCAGgEAGIgFAGQgHAJAAALIAAAPg");
	this.shape_31.setTransform(-124.8,-109);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgIAvIAAhdIARAAIAABdg");
	this.shape_32.setTransform(-137.2,-110.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAPAvIgGgXQgKAAgHANIgFAKIgSAAIAIgOQAGgNAJgEQAIgEAGAAIAAgYIgBgLQgBgEgEgCQgDgDgGAAIgJABIgCgNQAGgCAJAAQALAAAGAEQAGAFADAHQACAGAAAMIAAAcIAJAfg");
	this.shape_33.setTransform(-143.2,-110.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgCBAIAAgMQAAgLACgGQACgGAEgFIAFgHIAGgJIABgJIAAgNIgzAAIAAgxIARAAIAAAjIAyAAIAAAXQAAAKgCAFQgCAHgEAGIgFAGQgHAKAAAKIAAAPg");
	this.shape_34.setTransform(-151,-112.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAZAvIAAguQAAgNgEgGQgDgHgIgDQgIgDgOAAQgMAAgPACIgBgOQAQgDAPAAQAcAAALALQALALAAAWIAAAxgAgnAvIAAgzIARAAIAAAzg");
	this.shape_35.setTransform(-160.4,-110.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgCBAIAAgMQAAgLACgGQACgGAEgFIAFgHIAGgJIABgJIAAgNIgzAAIAAgxIARAAIAAAjIAyAAIAAAXQAAAKgCAFQgBAHgFAGIgFAGQgHAKAAAKIAAAPg");
	this.shape_36.setTransform(-175.2,-112.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgDAvIAAgOIAeAAIAAgbIgBgWQgBgHgEgEQgEgFgGAAQgKAAgGALQgHAKgFAYIgHAiIgQAAIAHgkIAEgRIgOgnIAQAAIAHAVQAEgJAJgHQAIgGAKAAQALAAAHAFQAIAGAEAKQADALAAAUIAAApg");
	this.shape_37.setTransform(-184.8,-110.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAZAvIAAguQAAgNgEgGQgDgHgIgDQgIgDgOAAQgMAAgPACIgBgOQAQgDAPAAQAcAAALALQALALAAAWIAAAxgAgnAvIAAgzIARAAIAAAzg");
	this.shape_38.setTransform(-195.4,-110.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAZAvIAAguQAAgNgEgGQgDgHgIgDQgIgDgOAAQgMAAgPACIgBgOQAQgDAPAAQAcAAALALQALALAAAWIAAAxgAgnAvIAAgzIARAAIAAAzg");
	this.shape_39.setTransform(-211.2,-110.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgIAvIAAhdIARAAIAABdg");
	this.shape_40.setTransform(-218.9,-110.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAXAvIgjgyQgIAEgBANIgEAhIgSAAIAEghQADgVAQgIIgWgfIAUAAIAdAqQAGgDACgFQACgEABgLIADgTIARAAIgCAUQgCAMgEAIQgEAHgKAGIAcAog");
	this.shape_41.setTransform(-226,-110.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgDAvIAAgOIAeAAIAAgbIgBgWQgBgHgEgEQgEgFgGAAQgKAAgGALQgHAKgFAYIgHAiIgQAAIAHgkIAEgRIgOgnIAQAAIAHAVQAEgJAJgHQAIgGAKAAQALAAAHAFQAIAGAEAKQADALAAAUIAAApg");
	this.shape_42.setTransform(-241.9,-110.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgxAtIADgNQAFACAFAAQAGAAACgDQADgDAAgGIAAg1IgTABIgBgOQAUgCAUgBQAUABAMADQALAEAGAJQAGAKAAARIAAAyIgRAAIAAguQAAgNgCgGQgCgGgHgEQgHgEgPAAIgJAAIAAA3QAAAKgBAEQgCAEgFADQgFAEgKAAQgJAAgIgDg");
	this.shape_43.setTransform(-253.3,-110.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAXAvIgjgyQgIAEgBANIgEAhIgSAAIAEghQADgVAQgIIgWgfIAUAAIAdAqQAGgDACgFQACgEABgLIADgTIARAAIgCAUQgCAMgEAIQgEAHgKAGIAcAog");
	this.shape_44.setTransform(-263.5,-110.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgIAYIAAgvIARAAIAAAvg");
	this.shape_45.setTransform(-271,-113);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgoAvIAAhaQATgDAQAAQAQAAALAFQAKAFAEAIQAFAJAAAPIAAAzgAgXgeIAAA/IAvAAIAAgjQAAgLgCgFQgDgGgGgEQgHgDgMAAIgRABg");
	this.shape_46.setTransform(-278.6,-110.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.בחראתסוג, new cjs.Rectangle(-286,-124.4,511.5,24.1), null);


(lib.איקס_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.איקס();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.איקס_1, new cjs.Rectangle(0,0,626,626), null);


(lib.אביזריםשישבבית = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAUApIgegsQgIADgBANIgEAcIgPAAIAEgcQACgTAOgHIgTgbIASAAIAaAlQAFgEABgEQACgEABgIIACgRIAQAAIgCARQgBAKgEAIQgEAGgJAFIAZAjg");
	this.shape.setTransform(95.7,-140);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgnAqIAAgNIAyAAIAAgcQABgKgDgGQgDgGgGgEQgGgDgPAAIgPABIgBgMQAKgCAMAAQAVAAALAKQAJAJABAUIAAAfIAMAAIAAANg");
	this.shape_1.setTransform(86.7,-140.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHAWIAAgqIAPAAIAAAqg");
	this.shape_2.setTransform(80.4,-142);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgLApIAAgNIgCgZIgBgJQAAgNALgJIgVAAIAAgMIAxAAIAAAKQgMAAgGAHQgHAHAAAMIAAAHIACAbIAAALg");
	this.shape_3.setTransform(75.6,-140);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AATAqIAAgpQAAgKgCgGQgDgGgHgEQgHgDgLAAIgUACIgCgNQANgCAKAAQAYAAAKAKQAKAJAAAUIAAAsg");
	this.shape_4.setTransform(67.8,-140.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgHAWIAAgqIAPAAIAAAqg");
	this.shape_5.setTransform(62.2,-142);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgjAqIAAhQQARgDAOAAQAOAAAJAFQAKAEADAHQAEAIAAANIAAAugAgUgbIAAA4IApAAIAAgfQAAgJgCgFQgCgFgGgEQgGgDgKAAIgPABg");
	this.shape_6.setTransform(55.4,-140.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgaAjQgKgHgFgNQgFgNAAgVIgBgXIAPAAIABAOIABAcQAJAAAGgEQAHgEAAgLIACgXIAOAAIgCAaIgCALIgEAGQgCAEgHADQgHACgLABQACAJAHAFQAHAFAKAAQAJAAAHgFQAHgEADgHQADgIABgMIAEgkIAPAAIgDAfQgCAQgEAMQgEALgLAHQgKAIgQAAQgOAAgKgIg");
	this.shape_7.setTransform(40.6,-139.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgHAWIAAgqIAPAAIAAAqg");
	this.shape_8.setTransform(33.1,-142);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgaAjQgKgHgFgNQgFgNAAgVIgBgXIAPAAIABAOIABAcQAJAAAGgEQAHgEAAgLIACgXIAOAAIgCAaIgCALIgEAGQgCAEgHADQgHACgLABQACAJAHAFQAHAFAKAAQAJAAAHgFQAHgEADgHQADgIABgMIAEgkIAPAAIgDAfQgCAQgEAMQgEALgLAHQgKAIgQAAQgOAAgKgIg");
	this.shape_9.setTransform(25.6,-139.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgnAqIAAgNIAzAAIAAgcQgBgKgCgGQgCgGgHgEQgGgDgPAAIgPABIgCgMQALgCAMAAQAWAAAJAKQAKAJAAAUIAAAfIAOAAIAAANg");
	this.shape_10.setTransform(11.3,-140.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgnAqIAAgNIAzAAIAAgcQAAgKgDgGQgCgGgHgEQgGgDgPAAIgPABIgCgMQALgCAMAAQAVAAAKAKQAKAJAAAUIAAAfIAOAAIAAANg");
	this.shape_11.setTransform(2.6,-140.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgHAWIAAgqIAPAAIAAAqg");
	this.shape_12.setTransform(-3.7,-142);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgrAoIACgLIAJABQAGAAACgCQACgDAAgGIAAgvIgRACIgBgNQASgCASAAQASAAAKADQAKADAFAJQAFAIAAAQIAAAsIgPAAIAAgpQAAgLgBgGQgCgFgHgEQgGgDgNAAIgHAAIAAAxQAAAIgCAEQgBAEgFADQgEACgKAAQgHAAgHgCg");
	this.shape_13.setTransform(-11.3,-140.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.אביזריםשישבבית, new cjs.Rectangle(-18,-152.4,120.2,21.9), null);


(lib.אביזריםשצריךלהכין = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAUApIgfgsQgGAEgCAMIgEAcIgPAAIAEgcQACgTAOgHIgUgbIATAAIAZAkQAGgCABgFQACgEABgIIACgRIAPAAIgBARQgCALgDAHQgEAGgJAFIAZAjg");
	this.shape.setTransform(300.4,-103);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgnAqIAAgNIAyAAIAAgcQAAgLgCgFQgDgGgGgEQgGgDgPAAIgPABIgCgMQALgCAMAAQAWAAAKAKQAJAKABATIAAAfIAMAAIAAANg");
	this.shape_1.setTransform(291.4,-103.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHAWIAAgqIAPAAIAAAqg");
	this.shape_2.setTransform(285,-105);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMApIAAgNIgBgZIgBgJQAAgNALgJIgVAAIAAgMIAxAAIAAAKQgMAAgGAHQgHAHAAAMIABAHIABAbIAAALg");
	this.shape_3.setTransform(280.2,-103);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AATAqIAAgpQAAgKgCgGQgDgGgHgEQgHgDgLAAIgUACIgBgNQAMgCAJAAQAZAAAKAKQAKAKgBATIAAAsg");
	this.shape_4.setTransform(272.5,-103.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgHAWIAAgqIAPAAIAAAqg");
	this.shape_5.setTransform(266.8,-105);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgjAqIAAhQQARgDAOAAQAOAAAJAFQAKAEADAHQAEAIAAANIAAAugAgUgbIAAA4IApAAIAAgfQAAgJgCgGQgCgEgGgEQgGgDgKAAIgPABg");
	this.shape_6.setTransform(260.1,-103.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgaAjQgKgHgFgNQgFgNAAgVIgBgXIAPAAIABAOIABAcQAJAAAGgEQAHgEAAgLIACgXIAOAAIgCAaIgCALIgEAGQgCAEgHADQgHACgLABQACAJAHAFQAHAFAKAAQAJAAAHgFQAHgEADgHQADgIABgMIAEgkIAPAAIgDAfQgCAQgEAMQgEALgLAHQgKAIgQAAQgOAAgKgIg");
	this.shape_7.setTransform(245.3,-102.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgcApIAAgMIAoAAIgthFIARAAIAXAkQAFgEADgFQACgEAAgKIABgNIAQAAIgBAPQgBAHgBAFQgCAEgDAFQgFAEgIAFIARAbIAAAJg");
	this.shape_8.setTransform(235.5,-103);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AATAqIAAgpQAAgKgCgGQgDgGgHgEQgHgDgLAAIgUACIgCgNQANgCAKAAQAYAAAKAKQAKAKAAATIAAAsg");
	this.shape_9.setTransform(227.6,-103.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgHAWIAAgqIAPAAIAAAqg");
	this.shape_10.setTransform(221.9,-105);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AASA6IAAhIQAAgNgDgGQgDgGgHgDQgHgCgJAAIgUACIgBgNQALgCAKAAQAXAAALAJQAKAJAAAVIAABMg");
	this.shape_11.setTransform(215.5,-101.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgBA5IAAgLQAAgKABgFQABgFAFgFIAEgGQAEgEABgEIABgIIAAgLIgtAAIAAgsIAOAAIAAAfIAtAAIAAAVQAAAIgBAFQgCAGgEAFIgEAGQgHAIAAAKIAAANg");
	this.shape_12.setTransform(203.5,-104.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAWAqIAAgpQAAgLgDgGQgDgGgHgDQgHgDgNAAQgKAAgNACIgCgMQAPgDANAAQAZAAAKAKQAKAKAAATIAAAsgAgjAqIAAguIAPAAIAAAug");
	this.shape_13.setTransform(195.1,-103.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgdAoIACgNQAHACAIABQAJAAAEgFQAHgDADgHQADgGAAgJQAAgMgHgIQgHgJgMAAQgIABgHACIgCgOQAJgCAHAAQAUAAALAMQAMANAAARQAAAMgFAKQgFAJgKAGQgJAGgOAAQgHAAgJgDg");
	this.shape_14.setTransform(186.6,-103);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgHAWIAAgqIAPAAIAAAqg");
	this.shape_15.setTransform(180.9,-105);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgHA6IAAhyIAPAAIAAByg");
	this.shape_16.setTransform(177,-101.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.אביזריםשצריךלהכין, new cjs.Rectangle(173,-115.4,133.9,21.9), null);


(lib.שתיה = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgaAjQgKgHgFgNQgFgNAAgVIgBgXIAPAAIABAOIABAcQAJAAAGgEQAHgEAAgLIACgXIAOAAIgCAaIgCALIgEAGQgCAEgHADQgHACgLABQACAJAHAFQAHAFAKAAQAJAAAHgFQAHgEADgHQADgIABgMIAEgkIAPAAIgDAfQgCAQgEAMQgEALgLAHQgKAIgQAAQgOAAgKgIg");
	this.shape.setTransform(121.5,-36.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgrAoIACgLIAJABQAGAAACgCQACgDAAgGIAAgvIgRACIgBgNQASgCASAAQASAAAKADQAKADAFAJQAFAIAAAQIAAAsIgPAAIAAgpQAAgLgBgGQgCgFgHgEQgGgDgNAAIgHAAIAAAxQAAAIgCAEQgBAEgFADQgEACgKAAQgHAAgHgCg");
	this.shape_1.setTransform(110.3,-37.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHAVIAAgqIAPAAIAAAqg");
	this.shape_2.setTransform(103.6,-39);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAWAqIAAgpQAAgLgDgGQgDgGgHgDQgHgDgNAAQgKAAgNACIgCgMQAPgDANAAQAZAAAKAKQAKAKAAATIAAAsgAgjAqIAAgtIAPAAIAAAtg");
	this.shape_3.setTransform(96.8,-37.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.שתיה, new cjs.Rectangle(90,-49.4,39.2,21.9), null);


(lib.רמתהשקעה = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAUA/IAAg9QAAgTgKgJQgJgIgVAAIgdACIgDgaQARgEAWAAQAhAAAQAOQARAOAAAfIAABCg");
	this.shape.setTransform(339.1,-547.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AABA/IAAgdIAfAAIAAgZQAAgXgEgKQgEgKgKAAQgLAAgGAMQgHAMgGAfIgIAqIgjAAIAGgbQAFgYAFgMIgVg9IAdAAIAIAbQASgcAaAAQAWAAANASQANARAAAmIAAA0g");
	this.shape_1.setTransform(325.4,-547.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhFA7IAFgVQAHACAFAAQAHAAADgEQACgDAAgKIAAg6IgZACIgDgaQAfgDAgAAQAbAAAQAEQAQAFAIANQAIANAAAXIAABCIghAAIAAg9QAAgXgIgHQgIgHgcAAIAAA9QAAAQgDAHQgCAGgIAFQgHAEgOAAQgPAAgNgEg");
	this.shape_2.setTransform(309.7,-547.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAaA/IAAg7QAAgWgMgIQgLgJgWAAQgQAAgVADIgCgbQATgDAaAAQAbAAAQAIQAQAIAGANQAHAMAAAVIAAA/gAg5A/IAAhAIAiAAIAABAg");
	this.shape_3.setTransform(288.1,-547.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag2ArQgTgWAAgqIgCgqIAhAAIAAAhIABATIAAAHQAIAAAGgDQAHgEABgGQACgHABgRIABgWIAfAAIgBAfIgDASQgBAHgFAHQgFAGgKAEQgKAFgRACQADAJAJAHQAKAGAMAAQATAAAKgMQALgMACggIAEguIAgAAIgEAvQgDAegHAOQgHAPgQALQgQAKgZAAQghAAgTgVg");
	this.shape_4.setTransform(272.2,-547.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag2BWIAAhvIAhAAIAABvgAABAmIAAgWQgBgKADgGQACgGAIgKIAEgFQAFgIAAgMIAAgQIhMAAIAAgcIBtAAIAAAgQAAARgBAJQgCAIgFAHIgFAIQgFAHgCAEQgBAFAAAGIAAAUg");
	this.shape_5.setTransform(256.8,-545.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag5AsQASgCAOgDIgVhuIAhAAIAQBjQANgEAEgJQAEgKABgQIABg8IAhAAIgCAtIgCAfQgCAKgFAKQgFAKgLAIQgLAJgVAIQgXAGgeAFg");
	this.shape_6.setTransform(242.7,-546.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAaA/IAAg7QAAgWgMgIQgLgJgWAAQgQAAgVADIgCgbQAUgDAaAAQAaAAAQAIQAPAIAHANQAHAMAAAVIAAA/gAg5A/IAAhAIAiAAIAABAg");
	this.shape_7.setTransform(229.4,-547.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.רמתהשקעה, new cjs.Rectangle(220,-565.4,128,30.9), null);


(lib.רווקים = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgDAqIAAgNIAbAAIAAgYIgBgTQgBgGgDgEQgEgEgGAAQgJAAgFAJQgGAJgEAVIgGAfIgPAAIAGggIAEgQIgMgiIAOAAIAGASQAEgHAIgGQAHgGAIAAQAKAAAHAFQAHAFADAJQADAKAAARIAAAlg");
	this.shape.setTransform(278.8,-97);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgcAgQgKgMAAgUQAAgTAKgMQAMgMAQAAQALAAAIAFQAIAEAGAKQAGAKAAAOQAAAMgFAKQgEAKgJAGQgJAGgMAAQgQAAgMgMgAgQgWQgFAJgBANQAAAPAHAIQAFAIAKAAQAMAAAFgJQAFgIAAgOQABgOgHgIQgFgJgLAAQgKAAgGAJg");
	this.shape_1.setTransform(269.7,-96.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHAVIAAgpIAPAAIAAApg");
	this.shape_2.setTransform(263.1,-98.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgnAqIAAgNIAyAAIAAgcQABgLgDgFQgDgGgGgDQgGgEgPAAIgPABIgBgMQAKgCAMAAQAVAAALAKQAJAJABAUIAAAfIAMAAIAAANg");
	this.shape_3.setTransform(256.8,-97);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgrAoIACgLQAFABAEAAQAGAAACgCQACgDAAgGIAAgvIgRACIgBgNQASgCASAAQASAAAKADQAKADAFAJQAFAIAAAQIAAAsIgPAAIAAgpQAAgLgBgGQgCgFgHgEQgGgDgNAAIgHAAIAAAxQAAAIgCAEQgBAEgFADQgEACgKAAQgHAAgHgCg");
	this.shape_4.setTransform(246.9,-97);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AATAqIAAgpQAAgKgDgGQgCgGgHgDQgHgEgLAAIgUACIgBgNQAMgCAJAAQAZAAAKAKQAJAJAAAUIAAAsg");
	this.shape_5.setTransform(233.2,-97);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgHAqIAAhSIAPAAIAABSg");
	this.shape_6.setTransform(227.6,-96.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgHAqIAAhSIAPAAIAABSg");
	this.shape_7.setTransform(223.6,-96.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AggA5IAAhNIAPAAIAABNgAABAaIAAgLQAAgJABgGQACgDAFgHIAFgGQADgEABgEIABgJIAAgLIg0AAIAAgMIBDAAIAAAUQAAAJgBAGQgCAFgEAGIgEAFQgHAIAAAJIAAAOg");
	this.shape_8.setTransform(217.4,-95.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgHAVIAAgpIAPAAIAAApg");
	this.shape_9.setTransform(210.9,-98.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgjAqIAAhQQARgDAOAAQAOAAAJAFQAKAEADAIQAEAHAAANIAAAugAgUgbIAAA4IApAAIAAgfQAAgJgCgFQgCgGgGgCQgGgEgKAAIgPABg");
	this.shape_10.setTransform(204.1,-97);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgVA7IAgh1IALAAIggB1g");
	this.shape_11.setTransform(197.1,-98.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AATAqIAAgpQAAgKgDgGQgCgGgHgDQgHgEgLAAIgUACIgBgNQALgCAKAAQAZAAAKAKQAJAJAAAUIAAAsg");
	this.shape_12.setTransform(190.4,-97);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgHAqIAAhSIAPAAIAABSg");
	this.shape_13.setTransform(184.7,-96.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgHAqIAAhSIAPAAIAABSg");
	this.shape_14.setTransform(180.8,-96.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AggA5IAAhNIAPAAIAABNgAABAaIAAgLQAAgJABgGQACgDAFgHIAEgGQAEgEABgEIABgJIAAgLIg0AAIAAgMIBDAAIAAAUQAAAJgBAGQgDAFgDAGIgFAFQgGAIAAAJIAAAOg");
	this.shape_15.setTransform(174.6,-95.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgHAqIAAhSIAPAAIAABSg");
	this.shape_16.setTransform(168,-96.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgrAoIACgLQAFABAEAAQAGAAACgCQACgDAAgGIAAgvIgRACIgBgNQASgCASAAQASAAAKADQAKADAFAJQAFAIAAAQIAAAsIgPAAIAAgpQAAgLgBgGQgCgFgHgEQgGgDgNAAIgHAAIAAAxQAAAIgCAEQgBAEgFADQgEACgKAAQgHAAgHgCg");
	this.shape_17.setTransform(160.5,-97);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFCC").s().p("AreB9IAAj5IW9AAIAAD5g");
	this.shape_18.setTransform(204.2,-102.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.רווקים, new cjs.Rectangle(130.7,-115.3,155.4,27.9), null);


(lib.קטנהמכירים = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgfA5IAAhNIAOAAIAABNgAABAaIAAgLQAAgJACgGQABgDAFgHIAEgGQAEgEABgEIABgJIAAgLIg0AAIAAgMIBDAAIAAAUQAAAJgCAGQgCAFgDAGIgFAFQgGAIAAAJIAAAOg");
	this.shape.setTransform(178.3,-67.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUAlQgJgFgDgKQgEgIAAgQIAAgnIAPAAIAAAqQAAASAHAHQAHAFAHAAQAJAAAFgEQAFgEACgGQABgIAAgJIAAgLQAAgSgKgBQgIAAgFAJIgEgHQAHgOANgBQALABAGAIQAFAJAAAQIAAAGQAAAPgDAJQgDAJgJAHQgIAHgOAAQgMgBgIgGg");
	this.shape_1.setTransform(169.1,-69);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTAqIAAgNIAYAAIAAgnIAAgLQgCgDgDgCQgDgCgFAAIgIABIgCgMQAGgCAIAAQAJAAAGAEQAFAEACAGQACAGAAAKIAAA1g");
	this.shape_2.setTransform(161.1,-69.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAWAqIAAgpQAAgLgDgGQgDgGgHgDQgHgDgNAAQgKAAgNADIgCgOQAPgCANAAQAZAAAKAKQAKAJAAAUIAAAsgAgjAqIAAguIAPAAIAAAug");
	this.shape_3.setTransform(153.8,-69.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgVAHIAAgNIArAAIAAANg");
	this.shape_4.setTransform(146.3,-69);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgDAqIAAgNIAbAAIAAgYIgBgTQgBgGgDgEQgEgEgGAAQgJAAgFAJQgGAJgEAVIgGAfIgPAAIAGggIAEgQIgMgiIAOAAIAGASQAEgHAIgGQAHgGAIAAQAKAAAHAFQAHAFADAJQADAKAAARIAAAlg");
	this.shape_5.setTransform(138.6,-69.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgdApIACgOQAHADAIAAQAJgBAEgEQAHgDADgHQADgGAAgJQAAgMgHgIQgHgIgMgBQgIABgHACIgCgNQAJgDAHAAQAUAAALANQAMALAAASQAAANgFAJQgFAJgKAGQgJAGgOAAQgHAAgJgCg");
	this.shape_6.setTransform(130.3,-69);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgHAVIAAgpIAPAAIAAApg");
	this.shape_7.setTransform(124.7,-71);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AATAqIAAgpQAAgKgCgGQgDgGgHgDQgHgEgLAAIgUACIgCgNQANgCAKAAQAYAAAKAKQAKAJAAAUIAAAsg");
	this.shape_8.setTransform(118.2,-69.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgHAVIAAgpIAPAAIAAApg");
	this.shape_9.setTransform(112.6,-71);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgjAqIAAhQQARgDAOAAQAOAAAJAFQAKAEADAIQAEAHAAANIAAAugAgUgbIAAA4IApAAIAAgfQAAgJgCgFQgCgGgGgCQgGgEgKAAIgPABg");
	this.shape_10.setTransform(105.8,-69.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.קטנהמכירים, new cjs.Rectangle(99,-81.4,85.8,21.9), null);


(lib.קטנהחדשים = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgfA5IAAhNIAOAAIAABNgAABAaIAAgLQAAgJACgGQABgDAFgHIAEgGQAEgEABgEIABgJIAAgLIg0AAIAAgMIBDAAIAAAUQAAAJgCAGQgBAFgFAGIgDAFQgHAIAAAJIAAAOg");
	this.shape.setTransform(166.1,-130.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUAlQgJgFgDgKQgEgIAAgQIAAgnIAPAAIAAAqQAAASAHAHQAHAFAHAAQAJAAAFgEQAFgEACgGQABgIAAgJIAAgLQAAgSgKgBQgIAAgFAJIgEgHQAHgOANgBQALABAGAIQAFAJAAAQIAAAGQAAAPgDAJQgDAJgJAHQgIAHgOAAQgMgBgIgGg");
	this.shape_1.setTransform(156.9,-132);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTAqIAAgNIAYAAIAAgnIAAgLQgCgDgDgCQgDgCgFAAIgJABIgBgMQAGgCAIAAQAJAAAGAEQAFAEACAGQACAGAAAKIAAA1g");
	this.shape_2.setTransform(148.9,-132.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAWAqIAAgpQAAgLgDgGQgDgGgHgDQgHgDgNAAQgKAAgNADIgCgOQAPgCANAAQAZAAAKAKQAKAJAAAUIAAAsgAgjAqIAAguIAPAAIAAAug");
	this.shape_3.setTransform(141.6,-132.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgVAHIAAgNIArAAIAAANg");
	this.shape_4.setTransform(134.1,-132);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAVAqIAAgsQAAgJgCgFQgCgGgGgCQgGgEgKAAIgPABIAABFIgPAAIAAhQQARgDAOAAQAOAAAJAFQAKAEADAIQAEAHAAANIAAAug");
	this.shape_5.setTransform(126.6,-132.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAIAqIAAhGIgsAAIAAgMIBJAAIAAAMIgOAAIAABGg");
	this.shape_6.setTransform(117.7,-132);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgaAjQgKgHgFgNQgFgNAAgVIgBgXIAPAAIABAOIABAcQAJAAAGgEQAHgEAAgLIACgXIAOAAIgCAaIgCALIgEAGQgCAEgHADQgHACgLABQACAJAHAFQAHAFAKAAQAJAAAHgFQAHgEADgHQADgIABgMIAEgkIAPAAIgDAfQgCAQgEAMQgEALgLAHQgKAIgQAAQgOAAgKgIg");
	this.shape_7.setTransform(108.1,-131.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgHAVIAAgpIAPAAIAAApg");
	this.shape_8.setTransform(100.6,-134);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgjAqIAAhQQARgDAOAAQAOAAAJAFQAKAEADAIQAEAHAAANIAAAugAgUgbIAAA4IApAAIAAgfQAAgJgCgFQgCgGgGgCQgGgEgKAAIgPABg");
	this.shape_9.setTransform(93.8,-132.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.קטנהחדשים, new cjs.Rectangle(87,-144.4,85.5,21.9), null);


(lib.פעילותמשפחתית = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgjAlIAEgMQAHAFAMAAQANAAAJgIQAKgHAAgPQAAgNgIgIQgHgJgMABIgNABIAAAPQAAAKAKAAIAGgBIACAKQgFABgGAAQgKAAgGgFQgFgFAAgKIAAgYQANgFAPAAQARAAAMALQANAKAAAVQAAATgNAMQgMAMgWAAQgPAAgJgGg");
	this.shape.setTransform(233.6,-115);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgjAgQAOgCAJgCIgPhIIAQAAIALBDQAOgFADgKQAEgJAAgPIAAgcIAPAAIgBAWIgBAWQgBAFgDAIQgDAIgHAGQgGAFgMAFQgMAFgXADg");
	this.shape_1.setTransform(224.5,-114.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHAVIAAgpIAPAAIAAApg");
	this.shape_2.setTransform(218.7,-117);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgBA5IAAgLQAAgKABgFQABgFAFgFIAEgGQADgEACgEIABgIIAAgLIgtAAIAAgsIAOAAIAAAfIAtAAIAAAVQAAAIgBAFQgCAGgEAFIgEAGQgHAIAAAKIAAANg");
	this.shape_3.setTransform(212.8,-116.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgHAqIAAhSIAPAAIAABSg");
	this.shape_4.setTransform(207.3,-115);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgrAoIACgLIAJABQAGAAACgCQACgDAAgGIAAgvIgRACIgBgNQASgCASAAQASAAAKADQAKADAFAJQAFAIAAAQIAAAsIgPAAIAAgpQAAgLgBgGQgCgFgHgEQgGgDgNAAIgHAAIAAAxQAAAIgCAEQgBAEgFADQgEACgKAAQgHAAgHgCg");
	this.shape_5.setTransform(199.8,-115.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgDAqIAAgMIAbAAIAAgZIgBgTQgBgGgDgEQgEgEgGAAQgJAAgFAJQgGAJgEAWIgGAeIgPAAIAGggIAEgPIgMgjIAOAAIAGASQAEgHAIgGQAHgGAIAAQAKAAAHAFQAHAFADAJQADAKAAARIAAAlg");
	this.shape_6.setTransform(185.6,-115.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgaAjQgKgHgFgNQgFgNAAgVIgBgXIAPAAIABAOIABAcQAJAAAGgEQAHgEAAgLIACgXIAOAAIgCAaIgCALIgEAGQgCAEgHADQgHACgLABQACAJAHAFQAHAFAKAAQAJAAAHgFQAHgEADgHQADgIABgMIAEgkIAPAAIgDAfQgCAQgEAMQgEALgLAHQgKAIgQAAQgOAAgKgIg");
	this.shape_7.setTransform(175.5,-114.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgjAlIAEgMQAHAFAMAAQANAAAJgIQAKgHAAgPQAAgNgIgIQgHgJgMABIgNABIAAAPQAAAKAKAAIAGgBIACAKQgFABgGAAQgKAAgGgFQgFgFAAgKIAAgYQANgFAPAAQARAAAMALQANAKAAAVQAAATgNAMQgMAMgWAAQgPAAgJgGg");
	this.shape_8.setTransform(165.6,-115);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAVAqIAAgsQAAgJgCgFQgCgGgGgCQgGgEgKAAIgPABIAABFIgPAAIAAhQQARgDAOAAQAOAAAJAEQAKAFADAIQAEAHAAANIAAAug");
	this.shape_9.setTransform(156.4,-115.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgrAoIACgLIAJABQAGAAACgCQACgDAAgGIAAgvIgRACIgBgNQASgCASAAQASAAAKADQAKADAFAJQAFAIAAAQIAAAsIgPAAIAAgpQAAgLgBgGQgCgFgHgEQgGgDgNAAIgHAAIAAAxQAAAIgCAEQgBAEgFADQgEACgKAAQgHAAgHgCg");
	this.shape_10.setTransform(146,-115.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgHAVIAAgpIAPAAIAAApg");
	this.shape_11.setTransform(139.3,-117);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgrAoIACgLIAJABQAGAAACgCQACgDAAgGIAAgvIgRACIgBgNQASgCASAAQASAAAKADQAKADAFAJQAFAIAAAQIAAAsIgPAAIAAgpQAAgLgBgGQgCgFgHgEQgGgDgNAAIgHAAIAAAxQAAAIgCAEQgBAEgFADQgEACgKAAQgHAAgHgCg");
	this.shape_12.setTransform(131.7,-115.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.פעילותמשפחתית, new cjs.Rectangle(125,-127.4,115.1,21.9), null);


(lib.סוגהאירוע = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgtAvQgSgRAAgdQAAgdARgSQASgSAcAAQATAAAOAIQAPAJAIAOQAIAOAAATQAAAbgSATQgSATgcAAQgcAAgRgSgAgWgaQgIALAAAPQAAARAJAKQAIALANAAQAOAAAIgLQAIgKAAgRQAAgRgIgKQgIgLgOAAQgOAAgIAMg");
	this.shape.setTransform(271.9,-115.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgQA+IAAh7IAhAAIAAB7g");
	this.shape_1.setTransform(261.2,-115.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AARA/IgIgdQgLACgHAMIgIAPIggAAIAHgQQAPggAggDIAAgXQgBgMgEgGQgFgGgOAAIgJABIgCgaQAIgCAOAAQAXAAALALQALAMAAAZIAAAdIAOAwg");
	this.shape_2.setTransform(252.2,-115.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAaA/IAAg7QAAgWgMgIQgLgJgWAAQgQAAgVADIgCgbQAUgDAaAAQAaAAAQAIQAPAIAHANQAHAMAAAVIAAA/gAg5A/IAAhAIAiAAIAABAg");
	this.shape_3.setTransform(233,-115.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAYA+Igqg9QgIAIgCAdIgCAYIggAAIACgaQADgbAGgLQAHgLALgHIgdgpIAmAAIAjAzQAJgHACgYIACgUIAeAAIgBAPQgCAagHAMQgHAKgLAHIAlA1g");
	this.shape_4.setTransform(219,-115.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgQAjIAAhFIAhAAIAABFg");
	this.shape_5.setTransform(208.3,-118.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAUA/IAAg9QAAgTgJgJQgLgIgUAAIgdACIgDgaQARgEAWAAQAhAAAQAOQARAOAAAfIAABCg");
	this.shape_6.setTransform(198.4,-115.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgQA+IAAh7IAhAAIAAB7g");
	this.shape_7.setTransform(189.3,-115.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag6AsQAUgCANgDIgVhuIAhAAIAQBjQANgEAEgJQAEgKABgQIABg8IAgAAIgBAtIgCAfQgCAKgFAKQgFALgLAHQgLAJgVAIQgXAGgeAFg");
	this.shape_8.setTransform(179,-114.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.סוגהאירוע, new cjs.Rectangle(171,-133.4,110.4,30.9), null);


(lib.סוגהקבוצה = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgtAvQgSgSAAgcQAAgdARgSQASgSAcAAQATAAAOAIQAPAIAIAPQAIAOAAATQAAAbgSATQgSATgcAAQgcAAgRgSgAgWgaQgIALAAAPQAAARAJALQAIAKANAAQAOAAAIgKQAIgLAAgRQAAgRgIgKQgIgLgOAAQgOAAgIAMg");
	this.shape.setTransform(283.4,-112.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgQA+IAAh7IAhAAIAAB7g");
	this.shape_1.setTransform(272.8,-112.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AARA/IgHgdQgMACgHAMIgHAPIghAAIAHgQQAPggAfgDIAAgXQABgMgFgGQgFgGgOAAIgJABIgDgaQAKgCAOAAQAWAAALALQAMAMAAAZIAAAdIAMAwg");
	this.shape_2.setTransform(263.7,-112.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAaA/IAAg7QAAgWgMgIQgKgJgWAAQgSAAgUADIgCgbQATgDAaAAQAbAAAQAIQAQAIAGANQAHAMAAAVIAAA/gAg5A/IAAhAIAhAAIAABAg");
	this.shape_3.setTransform(244.6,-112.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag2BWIAAhvIAhAAIAABvgAABAmIAAgWQAAgKACgGQADgGAHgKIADgFQAGgIAAgMIAAgQIhMAAIAAgcIBtAAIAAAgQAAARgCAJQgBAIgFAHIgFAIQgGAHgBAEQgBAFgBAGIAAAUg");
	this.shape_4.setTransform(230.4,-110.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag8A/IAAgdIBDAAIAAggQAAgUgIgIQgIgJgWAAQgMAAgQADIgDgaQATgEASAAQAhAAAQAOQAQAOAAAfIAAAlIAXAAIAAAdg");
	this.shape_5.setTransform(216.6,-112.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgQA+IAAh7IAhAAIAAB7g");
	this.shape_6.setTransform(206.3,-112.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AguA+IAAgcIA2AAIg+hfIAjAAIAfAwQAFgBACgFQACgEABgSIABgUIAgAAIgBATIgBALQAAAFgCAGQgBAFgEAFQgDAGgFAEIgNAIIAaAoIAAAOg");
	this.shape_7.setTransform(196.4,-112.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAaA/IAAg7QAAgWgLgIQgLgJgXAAQgRAAgUADIgCgbQAUgDAaAAQAbAAAPAIQAPAIAHANQAHAMAAAVIAAA/gAg4A/IAAhAIAhAAIAABAg");
	this.shape_8.setTransform(183.4,-112.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.סוגהקבוצה, new cjs.Rectangle(174,-130.4,119,30.9), null);


(lib.ס = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.איקס1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.035,0.035);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ס, new cjs.Rectangle(0,0,21.9,21.9), null);


(lib.zug_gadol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.גדולזוגמשלים();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.zug_gadol, new cjs.Rectangle(0,0,860,690), null);


(lib.zrout_gadol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.גדולשילובזרועות();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.zrout_gadol, new cjs.Rectangle(0,0,860,690), null);


(lib.zior_gadol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.גדולציורמשותף();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.zior_gadol, new cjs.Rectangle(0,0,860,690), null);


(lib.zilom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Capture();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.806,0.806);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.zilom, new cjs.Rectangle(0,0,965,737.7), null);


(lib.zafof_gadol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.גדולצפוףצפוף();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.zafof_gadol, new cjs.Rectangle(0,0,860,690), null);


(lib.yodaat_gadol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.גדולמהאתיודעת();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.yodaat_gadol, new cjs.Rectangle(0,0,860,690), null);


(lib.tenkav_gadol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.גדולתןקו();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tenkav_gadol, new cjs.Rectangle(0,0,860,690), null);


(lib.teimot_gadol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.טעימותגדולבקבוצה();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.teimot_gadol, new cjs.Rectangle(0,0,860,690), null);


(lib.sod_gadol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.גדולזההסודשלי();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sod_gadol, new cjs.Rectangle(0,0,860,690), null);


(lib.sipor_gadol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.גדוללחטוףסיפור();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sipor_gadol, new cjs.Rectangle(0,0,860,690), null);


(lib.sibooshhovet_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AAOAqIgGgUQgJAAgGAMIgFAIIgPAAIAHgNQAFgLAIgDQAHgFAGAAIAAgUIgBgKQgBgEgEgCQgCgCgGAAIgIABIgCgMQAGgCAIAAQAJAAAGAEQAFAEACAGQACAGABALIAAAYIAHAcg");
	this.shape.setTransform(32.7,12.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AgHAWIAAgrIAPAAIAAArg");
	this.shape_1.setTransform(27.7,10.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AgmAqIAAgNIAyAAIAAgcQAAgLgDgFQgCgGgHgEQgGgDgOAAIgQABIgCgMQALgCAMAAQAVAAAKAKQALAKgBATIAAAfIAOAAIAAANg");
	this.shape_2.setTransform(21.4,12.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("AgHApIAAhSIAPAAIAABSg");
	this.shape_3.setTransform(15.1,12.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("AgaAjQgKgHgFgNQgFgNAAgVIgBgXIAPAAIABAOIABAcQAJAAAGgEQAHgEAAgLIACgXIAOAAIgCAaIgCALIgEAGQgCAEgHADQgHACgLABQACAJAHAFQAHAFAKAAQAJAAAHgFQAHgEADgHQADgIABgMIAEgkIAPAAIgDAfQgCAQgEAMQgEALgLAHQgKAIgQAAQgOAAgKgIg");
	this.shape_4.setTransform(7.6,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sibooshhovet_txt, new cjs.Rectangle(0,0,38.3,21.9), null);


(lib.shtiyared_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AgaAjQgKgHgFgNQgFgNAAgVIgBgXIAPAAIABAOIABAcQAJAAAGgEQAHgEAAgLIACgXIAOAAIgCAaIgCALIgEAGQgCAEgHADQgHACgLABQACAJAHAFQAHAFAKAAQAJAAAHgFQAHgEADgHQADgIABgMIAEgkIAPAAIgDAfQgCAQgEAMQgEALgLAHQgKAIgQAAQgOAAgKgIg");
	this.shape.setTransform(92.5,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AgrAoIACgLIAJABQAGAAACgCQACgDAAgGIAAgvIgRACIgBgNQASgCASAAQASAAAKADQAKADAFAJQAFAIAAAQIAAAsIgPAAIAAgpQAAgLgBgGQgCgFgHgEQgGgDgNAAIgHAAIAAAxQAAAIgCAEQgBAEgFADQgEACgKAAQgHAAgHgCg");
	this.shape_1.setTransform(81.3,12.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AgHAWIAAgrIAPAAIAAArg");
	this.shape_2.setTransform(74.6,10.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("AAWAqIAAgpQAAgLgDgGQgDgGgHgDQgHgDgNAAQgKAAgNACIgCgMQAPgDANAAQAZAAAKAKQAKAKAAATIAAAsgAgjAqIAAgtIAPAAIAAAtg");
	this.shape_3.setTransform(67.8,12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.shtiyared_txt, new cjs.Rectangle(61,0,39.2,21.9), null);


(lib.shemot_gadol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.גדולשמותעםכדור();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shemot_gadol, new cjs.Rectangle(0,0,860,690), null);


(lib.reviyot_gadol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.גדולרביעיות();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.reviyot_gadol, new cjs.Rectangle(0,0,860,690), null);


(lib.ravakimred_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AgDAqIAAgNIAbAAIAAgYIgBgTQgBgGgDgEQgEgEgGAAQgJAAgFAJQgGAJgEAVIgGAfIgPAAIAGghIAEgPIgMgiIAOAAIAGATQAEgJAIgFQAHgGAIAAQAKAAAHAFQAHAFADAKQADAIAAATIAAAkg");
	this.shape.setTransform(133.1,12.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AgcAgQgKgMAAgUQAAgTAKgMQALgMARAAQAKAAAJAFQAIAEAGAKQAGAKAAAOQAAAMgFAKQgEAKgIAGQgJAGgNAAQgRAAgLgMgAgQgWQgGAJABANQAAAPAFAIQAGAIAKAAQAMAAAFgJQAGgIAAgOQgBgOgFgIQgHgJgKAAQgLAAgFAJg");
	this.shape_1.setTransform(123.9,12.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AgHAWIAAgrIAPAAIAAArg");
	this.shape_2.setTransform(117.3,10.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("AgnAqIAAgNIAzAAIAAgcQAAgLgDgFQgCgGgHgEQgGgDgOAAIgQABIgCgMQALgCAMAAQAVAAAKAKQAKAKAAATIAAAfIAOAAIAAANg");
	this.shape_3.setTransform(111.1,12.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("AgrAoIACgLIAJABQAGAAACgCQACgDAAgGIAAgvIgRACIgBgNQASgCASAAQASAAAKADQAKADAFAJQAFAIAAAQIAAAsIgPAAIAAgpQAAgLgBgGQgCgFgHgEQgGgDgNAAIgHAAIAAAxQAAAIgCAEQgBAEgFADQgEACgKAAQgHAAgHgCg");
	this.shape_4.setTransform(101.1,12.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066FF").s().p("AATAqIAAgpQAAgKgDgGQgCgGgHgEQgHgDgLAAIgUABIgCgMQAMgCALAAQAYAAAKAKQAKAKAAATIAAAsg");
	this.shape_5.setTransform(87.5,12.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066FF").s().p("AgHApIAAhSIAPAAIAABSg");
	this.shape_6.setTransform(81.8,12.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066FF").s().p("AgHApIAAhSIAPAAIAABSg");
	this.shape_7.setTransform(77.9,12.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0066FF").s().p("AgfA6IAAhOIAOAAIAABOgAABAZIAAgLQAAgIACgFQABgFAFgGIAEgGQAEgEABgDIABgJIAAgMIg0AAIAAgNIBDAAIAAAVQAAAJgCAFQgCAGgDAFIgFAGQgGAIAAAJIAAANg");
	this.shape_8.setTransform(71.7,14);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0066FF").s().p("AgHAWIAAgrIAPAAIAAArg");
	this.shape_9.setTransform(65.1,10.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0066FF").s().p("AgjAqIAAhQQARgDAOAAQAOAAAJAFQAKAEADAHQAEAIAAAOIAAAtgAgUgbIAAA4IApAAIAAgfQAAgJgCgGQgCgEgGgEQgGgDgKAAIgPABg");
	this.shape_10.setTransform(58.4,12.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0066FF").s().p("AgVA7IAgh1IALAAIggB1g");
	this.shape_11.setTransform(51.3,10.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0066FF").s().p("AATAqIAAgpQAAgKgCgGQgDgGgHgEQgHgDgLAAIgUABIgCgMQAMgCALAAQAYAAAKAKQAKAKAAATIAAAsg");
	this.shape_12.setTransform(44.6,12.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0066FF").s().p("AgHApIAAhSIAPAAIAABSg");
	this.shape_13.setTransform(39,12.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0066FF").s().p("AgHApIAAhSIAPAAIAABSg");
	this.shape_14.setTransform(35,12.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0066FF").s().p("AgfA6IAAhOIAOAAIAABOgAABAZIAAgLQAAgIACgFQABgFAFgGIAEgGQAEgEABgDIABgJIAAgMIg0AAIAAgNIBDAAIAAAVQAAAJgCAFQgBAGgFAFIgEAGQgGAIAAAJIAAANg");
	this.shape_15.setTransform(28.8,14);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0066FF").s().p("AgHApIAAhSIAPAAIAABSg");
	this.shape_16.setTransform(22.3,12.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0066FF").s().p("AgrAoIACgLIAJABQAGAAACgCQACgDAAgGIAAgvIgRACIgBgNQASgCASAAQASAAAKADQAKADAFAJQAFAIAAAQIAAAsIgPAAIAAgpQAAgLgBgGQgCgFgHgEQgGgDgNAAIgHAAIAAAxQAAAIgCAEQgBAEgFADQgEACgKAAQgHAAgHgCg");
	this.shape_17.setTransform(14.7,12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ravakimred_txt, new cjs.Rectangle(8,0,132.3,21.9), null);


(lib.r13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFCC").s().p("AnoBxIAAjhIPRAAIAADhg");
	this.shape.setTransform(48.9,11.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,97.8,22.6);


(lib.r12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFCC").s().p("AnoBvIAAjdIPRAAIAADdg");
	this.shape.setTransform(48.9,11.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,97.8,22.2);


(lib.r11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFCC").s().p("AnoB5IAAjxIPRAAIAADxg");
	this.shape.setTransform(48.9,12.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,97.8,24.2);


(lib.r10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFCC").s().p("AnoB7IAAj1IPRAAIAAD1g");
	this.shape.setTransform(48.9,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,97.8,24.6);


(lib.r9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFCC").s().p("AqDBwIAAjfIUHAAIAADfg");
	this.shape.setTransform(64.4,11.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,128.8,22.3);


(lib.r8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFCC").s().p("AqDB3IAAjtIUHAAIAADtg");
	this.shape.setTransform(64.4,11.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,128.8,23.8);


(lib.r7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFCC").s().p("AoBBoIAAjQIQDAAIAADQg");
	this.shape.setTransform(51.4,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,102.8,20.9);


(lib.r6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFCC").s().p("AqXBeIAAi7IUvAAIAAC7g");
	this.shape.setTransform(66.4,9.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,132.8,18.8);


(lib.r5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFCC").s().p("AmOBwIAAjfIMdAAIAADfg");
	this.shape.setTransform(39.9,11.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79.8,22.3);


(lib.r4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFCC").s().p("Al6BdIAAi5IL1AAIAAC5g");
	this.shape.setTransform(37.9,9.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75.8,18.7);


(lib.r3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFCC").s().p("AlmBuIAAjbILNAAIAADbg");
	this.shape.setTransform(35.9,11);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71.8,22);


(lib.r2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFCC").s().p("AmOBmIAAjLIMdAAIAADLg");
	this.shape.setTransform(39.9,10.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79.7,20.5);


(lib.petek10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.פתק10();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.465,0.465);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.petek10, new cjs.Rectangle(0,0,107.5,91.2), null);


(lib.multi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.multipleuserssilhouette_31849546();
	this.instance.parent = this;
	this.instance.setTransform(5,5,0.057,0.057);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.multi, new cjs.Rectangle(5,5,35.8,35.8), null);


(lib.mishred_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AgjAlIAEgMQAHAFAMAAQANAAAJgIQAKgIAAgOQAAgNgIgJQgHgHgMgBIgNACIAAAPQAAAJAKAAIAGAAIACAJQgFACgGABQgKAAgGgGQgFgFAAgKIAAgZQANgEAPAAQARAAAMALQANAKAAAVQAAATgNAMQgMAMgWAAQgPAAgJgGg");
	this.shape.setTransform(117.6,12.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AgjAgQAOgCAIgCIgOhIIAQAAIAMBDQANgFADgKQADgJABgPIAAgcIAPAAIgBAWIgBAWQAAAFgEAIQgDAIgHAGQgGAFgMAFQgMAFgXADg");
	this.shape_1.setTransform(108.5,12.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AgHAWIAAgrIAPAAIAAArg");
	this.shape_2.setTransform(102.7,10.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("AgBA5IAAgLQAAgKABgFQABgFAFgFIAEgGQAEgEABgEIABgIIAAgLIgtAAIAAgsIAOAAIAAAfIAtAAIAAAVQAAAIgBAFQgCAGgEAFIgEAGQgHAIAAAKIAAANg");
	this.shape_3.setTransform(96.8,10.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("AgHApIAAhSIAPAAIAABSg");
	this.shape_4.setTransform(91.3,12.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066FF").s().p("AgrAoIACgLIAJABQAGAAACgCQACgDAAgGIAAgvIgRACIgBgNQASgCASAAQASAAAKADQAKADAFAJQAFAIAAAQIAAAsIgPAAIAAgpQAAgLgBgGQgCgFgHgEQgGgDgNAAIgHAAIAAAxQAAAIgCAEQgBAEgFADQgEACgKAAQgHAAgHgCg");
	this.shape_5.setTransform(83.8,12.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066FF").s().p("AgDAqIAAgNIAbAAIAAgYIgBgTQgBgGgDgEQgEgEgGAAQgJAAgFAJQgGAJgEAVIgGAfIgPAAIAGghIAEgPIgMgiIAOAAIAGATQAEgJAIgFQAHgGAIAAQAKAAAHAFQAHAFADAKQADAIAAATIAAAkg");
	this.shape_6.setTransform(69.6,12.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066FF").s().p("AgaAjQgKgHgFgNQgFgNAAgVIgBgXIAPAAIABAOIABAcQAJAAAGgEQAHgEAAgLIACgXIAOAAIgCAaIgCALIgEAGQgCAEgHADQgHACgLABQACAJAHAFQAHAFAKAAQAJAAAHgFQAHgEADgHQADgIABgMIAEgkIAPAAIgDAfQgCAQgEAMQgEALgLAHQgKAIgQAAQgOAAgKgIg");
	this.shape_7.setTransform(59.5,12.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0066FF").s().p("AgjAlIAEgMQAHAFAMAAQANAAAJgIQAKgIAAgOQAAgNgIgJQgHgHgMgBIgNACIAAAPQAAAJAKAAIAGAAIACAJQgFACgGABQgKAAgGgGQgFgFAAgKIAAgZQANgEAPAAQARAAAMALQANAKAAAVQAAATgNAMQgMAMgWAAQgPAAgJgGg");
	this.shape_8.setTransform(49.6,12.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0066FF").s().p("AAVAqIAAgsQAAgJgCgGQgCgEgGgEQgGgDgKAAIgPABIAABFIgPAAIAAhQQARgDAOAAQAOAAAJAFQAKAEADAHQAEAIAAAOIAAAtg");
	this.shape_9.setTransform(40.4,12.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0066FF").s().p("AgrAoIACgLIAJABQAGAAACgCQACgDAAgGIAAgvIgRACIgBgNQASgCASAAQASAAAKADQAKADAFAJQAFAIAAAQIAAAsIgPAAIAAgpQAAgLgBgGQgCgFgHgEQgGgDgNAAIgHAAIAAAxQAAAIgCAEQgBAEgFADQgEACgKAAQgHAAgHgCg");
	this.shape_10.setTransform(30,12.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0066FF").s().p("AgHAWIAAgrIAPAAIAAArg");
	this.shape_11.setTransform(23.3,10.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0066FF").s().p("AgrAoIACgLIAJABQAGAAACgCQACgDAAgGIAAgvIgRACIgBgNQASgCASAAQASAAAKADQAKADAFAJQAFAIAAAQIAAAsIgPAAIAAgpQAAgLgBgGQgCgFgHgEQgGgDgNAAIgHAAIAAAxQAAAIgCAEQgBAEgFADQgEACgKAAQgHAAgHgCg");
	this.shape_12.setTransform(15.7,12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mishred_txt, new cjs.Rectangle(9,0,115.1,21.9), null);


(lib.meshotap_gadol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.גדולמהמשותף();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.meshotap_gadol, new cjs.Rectangle(0,0,860,690), null);


(lib.lhhchinred_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AAUApIgegsQgIAEgBAMIgEAcIgPAAIADgcQADgTAOgHIgTgcIASAAIAaAlQAFgCABgFQACgDABgKIACgRIAQAAIgCARQgBAMgEAHQgEAGgJAFIAZAjg");
	this.shape.setTransform(131.8,12.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AgmAqIAAgNIAxAAIAAgcQABgLgDgFQgDgGgGgEQgGgDgOAAIgQABIgBgMQAKgCAMAAQAVAAALAKQAKAKAAATIAAAfIAMAAIAAANg");
	this.shape_1.setTransform(122.8,12.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AgHAWIAAgrIAPAAIAAArg");
	this.shape_2.setTransform(116.5,10.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("AgLApIAAgNIgCgaIgBgIQAAgNALgJIgVAAIAAgNIAxAAIAAALQgMAAgGAHQgHAHAAALIAAAIIACAbIAAALg");
	this.shape_3.setTransform(111.7,12.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("AATAqIAAgpQAAgKgCgGQgDgGgHgEQgHgDgLAAIgUABIgCgMQAMgCALAAQAYAAAKAKQAKAKAAATIAAAsg");
	this.shape_4.setTransform(103.9,12.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066FF").s().p("AgHAWIAAgrIAPAAIAAArg");
	this.shape_5.setTransform(98.3,10.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066FF").s().p("AgjAqIAAhQQARgDAOAAQAOAAAJAFQAKAEADAHQAEAIAAAOIAAAtgAgUgbIAAA4IApAAIAAgfQAAgJgCgGQgCgEgGgEQgGgDgKAAIgPABg");
	this.shape_6.setTransform(91.5,12.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066FF").s().p("AgaAjQgKgHgFgNQgFgNAAgVIgBgXIAPAAIABAOIABAcQAJAAAGgEQAHgEAAgLIACgXIAOAAIgCAaIgCALIgEAGQgCAEgHADQgHACgLABQACAJAHAFQAHAFAKAAQAJAAAHgFQAHgEADgHQADgIABgMIAEgkIAPAAIgDAfQgCAQgEAMQgEALgLAHQgKAIgQAAQgOAAgKgIg");
	this.shape_7.setTransform(76.7,12.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0066FF").s().p("AgdApIAAgMIApAAIgshGIAQAAIAWAlQAGgEADgFQACgFAAgIIABgPIAPAAIgBAQQAAAHgBAEQgBAFgFAFQgEAEgIAFIARAbIAAAJg");
	this.shape_8.setTransform(67,12.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0066FF").s().p("AATAqIAAgpQAAgKgCgGQgDgGgHgEQgHgDgLAAIgUABIgCgMQAMgCALAAQAYAAAKAKQAKAKAAATIAAAsg");
	this.shape_9.setTransform(59,12.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0066FF").s().p("AgHAWIAAgrIAPAAIAAArg");
	this.shape_10.setTransform(53.4,10.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0066FF").s().p("AATA6IAAhIQAAgOgEgFQgDgGgIgDQgGgCgJAAIgUABIgBgMQAMgCAJAAQAXAAALAJQAKAJAAAVIAABMg");
	this.shape_11.setTransform(46.9,13.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0066FF").s().p("AgCA5IAAgLQAAgKACgFQACgFAEgFIAEgGQADgEACgEIABgIIAAgLIgtAAIAAgsIAPAAIAAAfIAtAAIAAAVQAAAIgCAFQgCAGgEAFIgEAGQgHAIABAKIAAANg");
	this.shape_12.setTransform(34.9,10.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0066FF").s().p("AAWAqIAAgpQAAgLgDgGQgDgGgHgDQgHgDgNAAQgKAAgNACIgCgMQAPgDANAAQAZAAAKAKQAKAKAAATIAAAsgAgjAqIAAgtIAPAAIAAAtg");
	this.shape_13.setTransform(26.6,12.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0066FF").s().p("AgdAoIACgNQAHACAIABQAIgBAGgDQAFgEAEgHQADgGAAgJQAAgMgHgIQgHgJgMAAQgIAAgHADIgCgOQAJgCAHAAQAUAAAMAMQALANAAARQAAAMgFAJQgFAKgJAGQgKAGgOAAQgHAAgJgDg");
	this.shape_14.setTransform(18,12.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0066FF").s().p("AgHAWIAAgrIAPAAIAAArg");
	this.shape_15.setTransform(12.4,10.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0066FF").s().p("AgHA6IAAhzIAPAAIAABzg");
	this.shape_16.setTransform(8.4,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.lhhchinred_txt, new cjs.Rectangle(0,0,138.3,21.9), null);


(lib.levosh_gadol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.גדולזיכרוןלבוש();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.91,0.91);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.levosh_gadol, new cjs.Rectangle(0,0,782.6,627.9), null);


(lib.lelored_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AgBA5IAAgLQAAgKABgFQABgFAFgFIAEgGQAEgEABgEIABgIIAAgLIgtAAIAAgsIAOAAIAAAfIAuAAIAAAVQAAAIgCAFQgCAGgEAFIgEAGQgHAIABAKIAAANg");
	this.shape.setTransform(75.8,10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AgBA5IAAgLQAAgKABgFQABgFAFgFIAEgGQADgEACgEIABgIIAAgLIgtAAIAAgsIAOAAIAAAfIAtAAIAAAVQAAAIgBAFQgCAGgEAFIgEAGQgHAIAAAKIAAANg");
	this.shape_1.setTransform(68.4,10.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AAVApIgggsQgHAEgBAMIgDAcIgQAAIADgcQADgTAOgHIgTgcIASAAIAaAlQAEgCACgFQACgDABgKIACgRIAQAAIgCARQgCAMgDAHQgEAGgJAFIAZAjg");
	this.shape_2.setTransform(60.6,12.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("AAUApIgegsQgIAEgBAMIgEAcIgPAAIAEgcQACgTAOgHIgTgcIASAAIAaAlQAFgCABgFQACgDABgKIACgRIAQAAIgCARQgBAMgEAHQgEAGgJAFIAZAjg");
	this.shape_3.setTransform(47.1,12.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("AgnAqIAAgNIAyAAIAAgcQABgLgDgFQgDgGgGgEQgGgDgPAAIgPABIgBgMQAKgCAMAAQAVAAALAKQAJAKABATIAAAfIAMAAIAAANg");
	this.shape_4.setTransform(38.1,12.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066FF").s().p("AgHAWIAAgrIAPAAIAAArg");
	this.shape_5.setTransform(31.8,10.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066FF").s().p("AgLApIAAgNIgCgaIgBgIQAAgNALgJIgVAAIAAgNIAxAAIAAALQgMAAgGAHQgHAHAAALIABAIIABAbIAAALg");
	this.shape_6.setTransform(27,12.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066FF").s().p("AATAqIAAgpQAAgKgCgGQgDgGgHgEQgHgDgLAAIgUABIgCgMQANgCAKAAQAYAAAKAKQAKAKAAATIAAAsg");
	this.shape_7.setTransform(19.2,12.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0066FF").s().p("AgHAWIAAgrIAPAAIAAArg");
	this.shape_8.setTransform(13.6,10.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0066FF").s().p("AgjAqIAAhQQARgDAOAAQAOAAAJAFQAKAEADAHQAEAIAAAOIAAAtgAgUgbIAAA4IApAAIAAgfQAAgJgCgGQgCgEgGgEQgGgDgKAAIgPABg");
	this.shape_9.setTransform(6.8,12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.lelored_txt, new cjs.Rectangle(0,0,81.9,21.9), null);


(lib.kubia_gadol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.גדולקוביתקרח();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.kubia_gadol, new cjs.Rectangle(0,0,860,690), null);


(lib.Kmekirimred_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AggA6IAAhOIAPAAIAABOgAABAZIAAgLQAAgIACgFQABgFAFgGIAEgGQAEgEABgDIABgJIAAgMIg0AAIAAgNIBDAAIAAAVQAAAJgCAFQgCAGgDAFIgFAGQgGAIAAAJIAAANg");
	this.shape.setTransform(79.3,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AgUAlQgJgGgDgIQgEgJAAgQIAAgnIAPAAIAAAqQAAATAHAFQAHAGAHAAQAJAAAFgEQAFgEACgHQABgGAAgLIAAgKQAAgSgKAAQgIAAgFAIIgEgIQAHgOANAAQALAAAGAJQAFAIAAARIAAAGQAAAPgDAJQgDAJgJAHQgIAGgOAAQgMABgIgHg");
	this.shape_1.setTransform(70.1,12.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AgTAqIAAgNIAYAAIAAgnIgBgKQgBgEgDgCQgDgCgFAAIgIABIgCgMQAGgCAIAAQAJAAAGAEQAFAEACAGQACAGAAALIAAA0g");
	this.shape_2.setTransform(62.1,12.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("AAWAqIAAgpQAAgLgDgGQgDgGgHgDQgHgDgNAAQgKAAgNACIgCgMQAPgDANAAQAZAAAKAKQAKAKAAATIAAAsgAgjAqIAAgtIAPAAIAAAtg");
	this.shape_3.setTransform(54.8,12.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("AgVAHIAAgNIArAAIAAANg");
	this.shape_4.setTransform(47.3,12.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066FF").s().p("AgDAqIAAgNIAbAAIAAgYIgBgTQgBgGgDgEQgEgEgGAAQgJAAgFAJQgGAJgEAVIgGAfIgPAAIAGghIAEgPIgMgiIAOAAIAGATQAEgJAIgFQAHgGAIAAQAKAAAHAFQAHAFADAKQADAIAAATIAAAkg");
	this.shape_5.setTransform(39.6,12.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066FF").s().p("AgdAoIACgNQAHACAIABQAJgBAEgDQAHgEADgHQADgGAAgJQAAgMgHgIQgHgJgMAAQgIAAgHADIgCgOQAJgCAHAAQAUAAALAMQAMANAAARQAAAMgFAJQgFAKgKAGQgJAGgOAAQgHAAgJgDg");
	this.shape_6.setTransform(31.3,12.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066FF").s().p("AgHAWIAAgrIAPAAIAAArg");
	this.shape_7.setTransform(25.7,10.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0066FF").s().p("AATAqIAAgpQAAgKgCgGQgDgGgHgEQgHgDgLAAIgUABIgCgMQANgCAKAAQAYAAAKAKQAKAKAAATIAAAsg");
	this.shape_8.setTransform(19.2,12.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0066FF").s().p("AgHAWIAAgrIAPAAIAAArg");
	this.shape_9.setTransform(13.6,10.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0066FF").s().p("AgjAqIAAhQQARgDAOAAQAOAAAJAFQAKAEADAHQAEAIAAAOIAAAtgAgUgbIAAA4IApAAIAAgfQAAgJgCgGQgCgEgGgEQgGgDgKAAIgPABg");
	this.shape_10.setTransform(6.8,12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Kmekirimred_txt, new cjs.Rectangle(0,0,85.8,21.9), null);


(lib.Khadashimred_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AggA6IAAhOIAPAAIAABOgAABAZIAAgLQAAgIABgFQACgFAFgGIAEgGQAEgEABgDIABgJIAAgMIg0AAIAAgNIBDAAIAAAVQAAAJgCAFQgCAGgDAFIgFAGQgGAIAAAJIAAANg");
	this.shape.setTransform(87.1,14);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AgUAlQgJgGgDgIQgEgJAAgQIAAgnIAPAAIAAAqQAAATAHAFQAGAGAIAAQAIAAAGgEQAFgEACgHQABgGAAgLIAAgKQAAgSgKAAQgIAAgFAIIgEgIQAHgOANAAQALAAAGAJQAFAIAAARIAAAGQAAAPgDAJQgDAJgJAHQgJAGgNAAQgLABgJgHg");
	this.shape_1.setTransform(77.9,12.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AgTAqIAAgNIAYAAIAAgnIgBgKQgBgEgDgCQgCgCgGAAIgIABIgBgMQAEgCAIAAQAKAAAGAEQAFAEACAGQACAGAAALIAAA0g");
	this.shape_2.setTransform(69.9,12.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("AAWAqIAAgpQAAgLgDgGQgDgGgHgDQgHgDgNAAQgKAAgNACIgCgMQAPgDANAAQAZAAAKAKQAKAKAAATIAAAsgAgjAqIAAgtIAPAAIAAAtg");
	this.shape_3.setTransform(62.6,12.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("AgVAHIAAgNIArAAIAAANg");
	this.shape_4.setTransform(55.1,12.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066FF").s().p("AAVAqIAAgsQAAgJgCgGQgCgEgGgEQgGgDgKAAIgPABIAABFIgPAAIAAhQQARgDAOAAQAOAAAJAFQAKAEADAHQAEAIAAAOIAAAtg");
	this.shape_5.setTransform(47.6,12.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066FF").s().p("AAIApIAAhFIgsAAIAAgNIBJAAIAAANIgOAAIAABFg");
	this.shape_6.setTransform(38.7,12.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066FF").s().p("AgaAjQgKgHgFgNQgFgNAAgVIgBgXIAPAAIABAOIABAcQAJAAAGgEQAHgEAAgLIACgXIAOAAIgCAaIgCALIgEAGQgCAEgHADQgHACgLABQACAJAHAFQAHAFAKAAQAJAAAHgFQAHgEADgHQADgIABgMIAEgkIAPAAIgDAfQgCAQgEAMQgEALgLAHQgKAIgQAAQgOAAgKgIg");
	this.shape_7.setTransform(29.1,12.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0066FF").s().p("AgHAWIAAgrIAPAAIAAArg");
	this.shape_8.setTransform(21.6,10.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0066FF").s().p("AgjAqIAAhQQARgDAOAAQAOAAAJAFQAKAEADAHQAEAIAAAOIAAAtgAgUgbIAAA4IApAAIAAgfQAAgJgCgGQgCgEgGgEQgGgDgKAAIgPABg");
	this.shape_9.setTransform(14.8,12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Khadashimred_txt, new cjs.Rectangle(8,0,85.5,21.9), null);


(lib.kesem_gadol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.גדולמילתהקסם();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.kesem_gadol, new cjs.Rectangle(0,0,860,690), null);


(lib.holedetred_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AgHAVIAAgqIAPAAIAAAqg");
	this.shape.setTransform(15.4,4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AgDAqIAAgMIAbAAIAAgZIgBgTQgBgGgDgEQgEgEgGAAQgJAAgFAJQgGAJgEAWIgGAeIgPAAIAGggIAEgPIgMgjIAOAAIAGASQAEgIAIgFQAHgGAIAAQAKAAAHAFQAHAFADAJQADAKAAARIAAAlg");
	this.shape_1.setTransform(8.4,6.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AgHAVIAAgqIAPAAIAAAqg");
	this.shape_2.setTransform(1.9,4.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("AAWAqIAAgpQAAgLgDgGQgDgGgHgDQgHgDgNAAQgKAAgNADIgCgOQAPgCANAAQAZAAAKAKQAKAJAAAUIAAAsgAgjAqIAAguIAPAAIAAAug");
	this.shape_3.setTransform(-9.4,6.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("AgHAqIAAhTIAPAAIAABTg");
	this.shape_4.setTransform(-16.2,6.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066FF").s().p("AgCA5IAAgLQAAgKACgFQACgFADgFIAFgGQADgEABgEIABgIIAAgLIgtAAIAAgsIAQAAIAAAfIAtAAIAAAVQgBAIgBAFQgCAGgEAFIgEAGQgGAIAAAKIAAANg");
	this.shape_5.setTransform(-22,4.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066FF").s().p("AAIAqIAAhGIgsAAIAAgNIBJAAIAAANIgOAAIAABGg");
	this.shape_6.setTransform(-29.6,6.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066FF").s().p("AgrAoIACgLIAJABQAGAAACgCQACgDAAgGIAAgvIgRACIgBgNQASgCASAAQASAAAKADQAKADAFAJQAFAIAAAQIAAAsIgPAAIAAgpQAAgLgBgGQgCgFgHgEQgGgDgNAAIgHAAIAAAxQAAAIgCAEQgBAEgFADQgEACgKAAQgHAAgHgCg");
	this.shape_7.setTransform(-39.3,6.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.holedetred_txt, new cjs.Rectangle(-46,-6,65.6,21.9), null);


(lib.hikrothover_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AAWAqIAAgpQAAgLgDgGQgDgGgHgDQgHgDgNAAQgKAAgNACIgCgMQAPgDANAAQAZAAAKAKQAKAKAAATIAAAsgAgjAqIAAguIAPAAIAAAug");
	this.shape.setTransform(44.6,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AgHAWIAAgqIAPAAIAAAqg");
	this.shape_1.setTransform(37.8,-0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AgdApIACgOQAHACAIABQAIAAAGgFQAFgDAEgHQADgGAAgJQAAgMgHgIQgHgJgMAAQgIABgHACIgCgOQAJgCAHAAQAUAAAMAMQALANAAARQAAAMgFAKQgFAJgJAGQgKAGgOAAQgHAAgJgCg");
	this.shape_2.setTransform(32.1,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("AATAqIAAgpQAAgKgCgGQgDgGgHgEQgHgDgLAAIgUACIgCgNQAMgCALAAQAYAAAKAKQAKAKAAATIAAAsg");
	this.shape_3.setTransform(23.9,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("AgHApIAAhRIAPAAIAABRg");
	this.shape_4.setTransform(18.3,1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066FF").s().p("AgrAoIACgLIAJABQAGAAACgCQACgDAAgGIAAgvIgRACIgBgNQASgCASAAQASAAAKADQAKADAFAJQAFAIAAAQIAAAsIgPAAIAAgpQAAgLgBgGQgCgFgHgEQgGgDgNAAIgHAAIAAAxQAAAIgCAEQgBAEgFADQgEACgKAAQgHAAgHgCg");
	this.shape_5.setTransform(10.7,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hikrothover_txt, new cjs.Rectangle(4,-11,47.6,21.9), null);


(lib.herglim_gadol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.משחקגדולההרגלים();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.herglim_gadol, new cjs.Rectangle(0,0,860,690), null);


(lib.hat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.clownhats_31883942();
	this.instance.parent = this;
	this.instance.setTransform(46,46,0.281,0.281);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hat, new cjs.Rectangle(46,46,36,36), null);


(lib.Gmekir_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AAOAqIgGgUQgJAAgGAMIgFAIIgPAAIAHgNQAFgLAIgDQAHgFAGAAIAAgUIgBgKQgBgEgEgCQgCgCgGAAIgIABIgCgMQAGgCAIAAQAJAAAGAEQAFAEACAGQACAGABALIAAAYIAHAcg");
	this.shape.setTransform(82.2,12.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AAIApIAAhFIgsAAIAAgNIBJAAIAAANIgOAAIAABFg");
	this.shape_1.setTransform(75.1,12.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AgHApIAAhSIAPAAIAABSg");
	this.shape_2.setTransform(69,12.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("AgBA5IAAgLQAAgKABgFQABgFAFgFIAEgGQAEgEABgEIABgIIAAgLIgtAAIAAgsIAOAAIAAAfIAuAAIAAAVQAAAIgCAFQgCAGgEAFIgEAGQgHAIABAKIAAANg");
	this.shape_3.setTransform(63.2,10.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("AAWAqIAAgpQAAgLgDgGQgDgGgHgDQgHgDgNAAQgKAAgNACIgCgMQAPgDANAAQAZAAAKAKQAKAKAAATIAAAsgAgjAqIAAgtIAPAAIAAAtg");
	this.shape_4.setTransform(54.8,12.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066FF").s().p("AgVAHIAAgNIArAAIAAANg");
	this.shape_5.setTransform(47.3,12.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066FF").s().p("AgDAqIAAgNIAbAAIAAgYIgBgTQgBgGgDgEQgEgEgGAAQgJAAgFAJQgGAJgEAVIgGAfIgPAAIAGghIAEgPIgMgiIAOAAIAGATQAEgJAIgFQAHgGAIAAQAKAAAHAFQAHAFADAKQADAIAAATIAAAkg");
	this.shape_6.setTransform(39.6,12.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066FF").s().p("AgdAoIACgNQAHACAIABQAJgBAEgDQAHgEADgHQADgGAAgJQAAgMgHgIQgHgJgMAAQgIAAgHADIgCgOQAJgCAHAAQAUAAALAMQAMANAAARQAAAMgFAJQgFAKgKAGQgJAGgOAAQgHAAgJgDg");
	this.shape_7.setTransform(31.3,12.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0066FF").s().p("AgHAWIAAgrIAPAAIAAArg");
	this.shape_8.setTransform(25.7,10.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0066FF").s().p("AATAqIAAgpQAAgKgCgGQgDgGgHgEQgHgDgLAAIgUABIgCgMQANgCAKAAQAYAAAKAKQAKAKAAATIAAAsg");
	this.shape_9.setTransform(19.2,12.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0066FF").s().p("AgHAWIAAgrIAPAAIAAArg");
	this.shape_10.setTransform(13.6,10.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0066FF").s().p("AgjAqIAAhQQARgDAOAAQAOAAAJAFQAKAEADAHQAEAIAAAOIAAAtgAgUgbIAAA4IApAAIAAgfQAAgJgCgGQgCgEgGgEQgGgDgKAAIgPABg");
	this.shape_11.setTransform(6.8,12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Gmekir_txt, new cjs.Rectangle(0,0,87.8,21.9), null);


(lib.gibush_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAMAlIgFgSQgIAAgFAKIgEAIIgOAAIAGgLQAFgKAHgEQAGgDAFAAIAAgSIgBgJQgBgDgDgCQgCgBgFAAIgHAAIgBgKQAFgCAGAAQAJAAAEAEQAFADACAGQACAFAAAJIAAAVIAHAZg");
	this.shape.setTransform(28.8,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGATIAAglIANAAIAAAlg");
	this.shape_1.setTransform(24.5,9.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiAlIAAgLIAsAAIAAgZQAAgJgCgFQgDgFgFgDQgFgDgNAAIgOABIgBgLQAJgCALAAQASAAAJAJQAJAIAAASIAAAbIAMAAIAAALg");
	this.shape_2.setTransform(19,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGAkIAAhHIANAAIAABHg");
	this.shape_3.setTransform(13.4,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgXAfQgIgGgFgMQgEgLAAgSIgBgUIANAAIABALIABAZQAHAAAGgDQAGgEAAgKIABgTIANAAIgCAXIgBAIIgEAGQgCADgGADQgGACgKABQACAHAGAFQAGAEAJAAQAIAAAGgEQAGgEADgGQADgGABgLIACgfIAOAAIgDAbQgBAOgEAKQgEAKgJAGQgJAGgNAAQgNAAgJgGg");
	this.shape_4.setTransform(6.9,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40,19.6);


(lib.Ghadash_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AANAqIgFgUQgJAAgGAMIgFAIIgPAAIAGgNQAHgLAHgDQAHgFAFAAIAAgUIgBgKQgBgEgDgCQgCgCgFAAIgJABIgCgMQAGgCAIAAQAJAAAGAEQAFAEADAGQACAGAAALIAAAYIAHAcg");
	this.shape.setTransform(81.9,12.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AAIApIAAhFIgsAAIAAgNIBJAAIAAANIgOAAIAABFg");
	this.shape_1.setTransform(74.8,12.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AgHApIAAhSIAPAAIAABSg");
	this.shape_2.setTransform(68.8,12.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("AgCA5IAAgLQAAgKACgFQABgFAFgFIAEgGQADgEABgEIABgIIAAgLIgtAAIAAgsIAQAAIAAAfIAtAAIAAAVQgBAIgBAFQgCAGgEAFIgEAGQgGAIAAAKIAAANg");
	this.shape_3.setTransform(62.9,10.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("AAWAqIAAgpQAAgLgDgGQgDgGgHgDQgHgDgNAAQgKAAgNACIgCgMQAPgDANAAQAZAAAKAKQAKAKAAATIAAAsgAgjAqIAAgtIAPAAIAAAtg");
	this.shape_4.setTransform(54.6,12.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066FF").s().p("AgVAHIAAgNIArAAIAAANg");
	this.shape_5.setTransform(47.1,12.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066FF").s().p("AAVAqIAAgsQAAgJgCgGQgCgEgGgEQgGgDgKAAIgPABIAABFIgPAAIAAhQQARgDAOAAQAOAAAJAFQAKAEADAHQAEAIAAAOIAAAtg");
	this.shape_6.setTransform(39.6,12.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066FF").s().p("AAIApIAAhFIgsAAIAAgNIBJAAIAAANIgOAAIAABFg");
	this.shape_7.setTransform(30.7,12.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0066FF").s().p("AgaAjQgKgHgFgNQgFgNAAgVIgBgXIAPAAIABAOIABAcQAJAAAGgEQAHgEAAgLIACgXIAOAAIgCAaIgCALIgEAGQgCAEgHADQgHACgLABQACAJAHAFQAHAFAKAAQAJAAAHgFQAHgEADgHQADgIABgMIAEgkIAPAAIgDAfQgCAQgEAMQgEALgLAHQgKAIgQAAQgOAAgKgIg");
	this.shape_8.setTransform(21.1,12.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0066FF").s().p("AgHAWIAAgrIAPAAIAAArg");
	this.shape_9.setTransform(13.6,10.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0066FF").s().p("AgjAqIAAhQQARgDAOAAQAOAAAJAFQAKAEADAHQAEAIAAAOIAAAtgAgUgbIAAA4IApAAIAAgfQAAgJgCgGQgCgEgGgEQgGgDgKAAIgPABg");
	this.shape_10.setTransform(6.8,12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Ghadash_txt, new cjs.Rectangle(0,0,87.5,21.9), null);


(lib.cut_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cut();
	this.instance.parent = this;
	this.instance.setTransform(517,31,0.269,0.269);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cut_1, new cjs.Rectangle(517,31,54.6,36.1), null);


(lib.cotert = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AADB2IAAg1IA5AAIAAgvQAAgtgHgSQgIgTgTAAQgVAAgLAXQgOAVgLA8IgOBOIhBAAIALgzQAJgtAIgVIgnhzIA4AAIAOAxQAjg0AwAAQApAAAZAhQAYAhAABJIAABgg");
	this.shape.setTransform(465.6,31);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhnBQQgjgogBhQIgChPIA9AAIABA+IABAjIAAAPQAQAAALgIQAMgHADgMQAEgNABgeIACgqIA7AAIgDA6QgCAWgCANQgEAMgIANQgKALgSAJQgUAJggADQAFASATAMQARAMAXAAQAkAAATgWQAUgXAFg9IAHhWIA8AAIgHBZQgGA4gMAbQgNAbgfAUQgfAUgvAAQg9AAglgog");
	this.shape_1.setTransform(436.3,31.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAvB2IAAh5QAAgfgNgPQgOgQgigBQgUABgMACIAAC1Ig+AAIAAjkQArgHArAAQA2AAAbAOQAbAOAMAWQALAWAAAmIAAB9g");
	this.shape_2.setTransform(406.2,31);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhmChIAAjRIA9AAIAADRgAABBIIAAgqQAAgSAFgMQAEgMAPgTIAFgIQAMgQAAgXIAAgdIiQAAIAAg1IDNAAIAAA8QAAAhgDAPQgCAPgKAOIgJAOQgLAOgDAJQgCAIAAALIAAAng");
	this.shape_3.setTransform(379.8,35.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhmChIAAjRIA9AAIAADRgAABBIIAAgqQAAgSAFgMQAEgMAPgTIAFgIQAMgQAAgXIAAgdIiQAAIAAg1IDNAAIAAA8QAAAhgDAPQgCAPgKAOIgJAOQgLAOgDAJQgCAIAAALIAAAng");
	this.shape_4.setTransform(341.5,35.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhyB2IAAg1IB/AAIAAg9QAAgmgPgPQgQgQgpgBQgXABgeAEIgEgxQAigHAiAAQA/AAAeAaQAeAbAAA5IAABIIAqAAIAAA1g");
	this.shape_5.setTransform(315.6,31);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgfB0IAAjoIA/AAIAADog");
	this.shape_6.setTransform(296.3,31.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhZB0IAAg1IBnAAIh0izIBDAAIA5BbQALgDADgIQAEgIABgjIACglIA8AAIgCAkIgCAVQAAAKgDAKQgDAKgGAKQgHAKgJAJQgKAHgNAIIAvBKIAAAbg");
	this.shape_7.setTransform(277.6,31.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AiDBvIAKgpQANAFALAAQANAAAEgHQAEgGAAgSIAAhvQgPABggADIgFgwQA5gHA9AAQAzAAAeAJQAeAJAPAYQAQAYAAAsIAAB9Ig+AAIAAhyQAAgsgPgOQgPgOg2AAIAAB0QAAAdgFANQgEANgOAJQgOAIgaAAQgcAAgagIg");
	this.shape_8.setTransform(251,31.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgfBBIAAiBIA/AAIAACBg");
	this.shape_9.setTransform(230.6,26);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AADB2IAAg1IA5AAIAAgvQAAgtgHgSQgIgTgTAAQgVAAgMAXQgNAVgLA8IgOBOIhBAAIALgzQAKgtAHgVIgnhzIA4AAIANAxQAjg0AxAAQApAAAZAhQAYAhAABJIAABgg");
	this.shape_10.setTransform(197.1,31);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgfB0IAAjoIA/AAIAADog");
	this.shape_11.setTransform(177.5,31.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AiDBvIAKgpQANAFALAAQANAAAEgHQAEgGAAgSIAAhvQgPABggADIgFgwQA5gHA9AAQAzAAAeAJQAeAJAPAYQAQAYAAAsIAAB9Ig+AAIAAhyQAAgsgPgOQgPgOg2AAIAAB0QAAAdgFANQgEANgOAJQgOAIgaAAQgcAAgagIg");
	this.shape_12.setTransform(155.2,31.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAuB0IhRhzQgPAPgDA2IgEAuIg8AAIAEgxQAFgyAMgVQAOgWATgMIg2hOIBIAAIBCBgQASgNADgtIADgmIA5AAIgDAcQgEAygNAVQgMAUgWAOIBGBjg");
	this.shape_13.setTransform(128.7,31.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhsB2IAAjkQAqgHAsAAQA3AAAbAOQAbAOALAWQALAWAAAmIAAB9gAgug/IAACAIBdAAIAAhEQAAgfgNgPQgOgQgigBQgUABgMACg");
	this.shape_14.setTransform(101.2,31);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhyB2IAAg1IB/AAIAAg9QAAgmgPgPQgQgQgpgBQgXABgeAEIgEgxQAigHAiAAQA/AAAeAaQAeAbAAA5IAABIIAqAAIAAA1g");
	this.shape_15.setTransform(62.1,31);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhmBQQgkgoAAhQIgDhPIA9AAIAAA+IACAjIAAAPQAQAAALgIQALgHAEgMQAEgNABgeIADgqIA6AAIgDA6QgCAWgCANQgDAMgKANQgJALgTAJQgTAJggADQAFASATAMQARAMAWAAQAlAAAUgWQATgXAFg9IAGhWIA9AAIgIBZQgEA4gOAbQgNAbgeAUQgfAUguAAQg/AAgjgog");
	this.shape_16.setTransform(33,31.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhyB2IAAg1IB/AAIAAg9QAAgmgPgPQgQgQgpgBQgXABgeAEIgEgxQAigHAiAAQA/AAAeAaQAeAbAAA5IAABIIAqAAIAAA1g");
	this.shape_17.setTransform(4.1,31);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgfBBIAAiBIA/AAIAACBg");
	this.shape_18.setTransform(-15.3,26);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgIChIAAgpQAAgTAFgNQADgMAOgTIAGgIQALgQAAgWIAAgdIh7AAIAAiOIA+AAIAABZIB7AAIAAA8QAAAggDAPQgDAPgJAOIgKAOQgJAOgDAIQgEAIAAANIAAAng");
	this.shape_19.setTransform(-33,26.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgfBBIAAiBIA/AAIAACBg");
	this.shape_20.setTransform(-49.9,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cotert, new cjs.Rectangle(-58,0,540.8,54.3), null);


(lib.bracha_gadol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ברכותגדולמקוריות();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bracha_gadol, new cjs.Rectangle(0,0,860,690), null);


(lib.box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("EhKHA3yMAAAhvjMCUPAAAMAAABvjg");
	this.shape.setTransform(474.4,357);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.box, new cjs.Rectangle(0,0,948.8,714.1), null);


(lib.bliayn_gadol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.גדולבליעיןהרע();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bliayn_gadol, new cjs.Rectangle(0,0,860,690), null);


(lib.bingo_gadol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.גדולבינגו();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bingo_gadol, new cjs.Rectangle(0,0,860,690), null);


(lib.babaitred_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066FF").s().p("AAUApIgegsQgIAEgBAMIgEAcIgPAAIAEgcQACgTAOgHIgTgcIASAAIAaAlQAFgCABgFQACgDABgKIACgRIAQAAIgCARQgBAMgEAHQgEAGgJAFIAZAjg");
	this.shape.setTransform(114.7,12.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AgmAqIAAgNIAxAAIAAgcQABgLgDgFQgDgGgGgEQgGgDgOAAIgQABIgBgMQAKgCAMAAQAVAAALAKQAKAKAAATIAAAfIAMAAIAAANg");
	this.shape_1.setTransform(105.7,12.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0066FF").s().p("AgHAWIAAgrIAPAAIAAArg");
	this.shape_2.setTransform(99.4,10.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066FF").s().p("AgLApIAAgNIgCgaIgBgIQAAgNALgJIgVAAIAAgNIAxAAIAAALQgMAAgGAHQgHAHAAALIAAAIIACAbIAAALg");
	this.shape_3.setTransform(94.6,12.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("AATAqIAAgpQAAgKgCgGQgDgGgHgEQgHgDgLAAIgUABIgCgMQAMgCALAAQAYAAAKAKQAKAKAAATIAAAsg");
	this.shape_4.setTransform(86.8,12.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066FF").s().p("AgHAWIAAgrIAPAAIAAArg");
	this.shape_5.setTransform(81.2,10.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0066FF").s().p("AgjAqIAAhQQARgDAOAAQAOAAAJAFQAKAEADAHQAEAIAAAOIAAAtgAgUgbIAAA4IApAAIAAgfQAAgJgCgGQgCgEgGgEQgGgDgKAAIgPABg");
	this.shape_6.setTransform(74.4,12.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066FF").s().p("AgaAjQgKgHgFgNQgFgNAAgVIgBgXIAPAAIABAOIABAcQAJAAAGgEQAHgEAAgLIACgXIAOAAIgCAaIgCALIgEAGQgCAEgHADQgHACgLABQACAJAHAFQAHAFAKAAQAJAAAHgFQAHgEADgHQADgIABgMIAEgkIAPAAIgDAfQgCAQgEAMQgEALgLAHQgKAIgQAAQgOAAgKgIg");
	this.shape_7.setTransform(59.6,12.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0066FF").s().p("AgHAWIAAgrIAPAAIAAArg");
	this.shape_8.setTransform(52.1,10.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0066FF").s().p("AgaAjQgKgHgFgNQgFgNAAgVIgBgXIAPAAIABAOIABAcQAJAAAGgEQAHgEAAgLIACgXIAOAAIgCAaIgCALIgEAGQgCAEgHADQgHACgLABQACAJAHAFQAHAFAKAAQAJAAAHgFQAHgEADgHQADgIABgMIAEgkIAPAAIgDAfQgCAQgEAMQgEALgLAHQgKAIgQAAQgOAAgKgIg");
	this.shape_9.setTransform(44.6,12.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0066FF").s().p("AgnAqIAAgNIAzAAIAAgcQgBgLgCgFQgDgGgGgEQgGgDgPAAIgPABIgCgMQALgCAMAAQAWAAAJAKQALAKAAATIAAAfIANAAIAAANg");
	this.shape_10.setTransform(30.3,12.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0066FF").s().p("AgnAqIAAgNIAzAAIAAgcQgBgLgCgFQgCgGgHgEQgGgDgPAAIgPABIgCgMQALgCAMAAQAWAAAJAKQAKAKAAATIAAAfIAOAAIAAANg");
	this.shape_11.setTransform(21.6,12.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0066FF").s().p("AgHAWIAAgrIAPAAIAAArg");
	this.shape_12.setTransform(15.3,10.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0066FF").s().p("AgrAoIACgLIAJABQAGAAACgCQACgDAAgGIAAgvIgRACIgBgNQASgCASAAQASAAAKADQAKADAFAJQAFAIAAAQIAAAsIgPAAIAAgpQAAgLgBgGQgCgFgHgEQgGgDgNAAIgHAAIAAAxQAAAIgCAEQgBAEgFADQgEACgKAAQgHAAgHgCg");
	this.shape_13.setTransform(7.7,12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.babaitred_txt, new cjs.Rectangle(1,0,120.2,21.9), null);


(lib.amitot_gadol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.גדולשתיאמיתות();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.amitot_gadol, new cjs.Rectangle(0,0,860,690), null);


(lib.משחקקבוצתי = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.cotert = new lib.cotert();
	this.cotert.parent = this;
	this.cotert.setTransform(23.3,-3,1,1,0,0,0,258.3,31.4);

	this.timeline.addTween(cjs.Tween.get(this.cotert).wait(1));

}).prototype = getMCSymbolPrototype(lib.משחקקבוצתי, new cjs.Rectangle(-293,-34.4,540.8,54.3), null);


(lib.zyor_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.instance = new lib.ציורמשותף();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.368,0.368);

	this.instance_1 = new lib._1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8,3,0.251,0.251);

	this.instance_2 = new lib._3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(9,12,0.275,0.275);

	this.instance_3 = new lib._5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(28,12,0.28,0.28);

	this.instance_4 = new lib._6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(27,-3,0.289,0.289);

	this.instance_5 = new lib._9();
	this.instance_5.parent = this;
	this.instance_5.setTransform(32,9,0.421,0.421);

	this.sagor = new lib.petek10();
	this.sagor.parent = this;
	this.sagor.setTransform(154.1,105.2,1,1,0,0,0,140.3,96.8);
	this.sagor.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.sagor}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131.9,109.4);


(lib.zug_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.instance = new lib.זוגמשלים();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.375,0.375);

	this.instance_1 = new lib._1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8,4,0.215,0.215);

	this.instance_2 = new lib.פתק3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(15,13,0.194,0.194);

	this.instance_3 = new lib.פתק5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(24,18,0.204,0.204);

	this.instance_4 = new lib.פתק7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(19,9,0.246,0.246);

	this.instance_5 = new lib.פתק9();
	this.instance_5.parent = this;
	this.instance_5.setTransform(27,13,0.291,0.291);

	this.instance_6 = new lib.petek10();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150.2,100.7,0.944,0.944,0,0,0,140.3,96.8);
	this.instance_6.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,134.3,111.4);


(lib.zafof_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.instance = new lib.צפוףצפוף();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.395,0.395);

	this.instance_1 = new lib._1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8,4,0.215,0.215);

	this.instance_2 = new lib.פתק3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(15,13,0.194,0.194);

	this.instance_3 = new lib.פתק5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(24,18,0.204,0.204);

	this.instance_4 = new lib.פתק7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(19,9,0.246,0.246);

	this.instance_5 = new lib.פתק9();
	this.instance_5.parent = this;
	this.instance_5.setTransform(27,13,0.291,0.291);

	this.instance_6 = new lib.petek10();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150.2,100.7,0.944,0.944,0,0,0,140.3,96.8);
	this.instance_6.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,141.4,117.3);


(lib.x = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ס();
	this.instance.parent = this;
	this.instance.setTransform(11,11,1,1,0,0,0,11,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.x, new cjs.Rectangle(0,0,21.9,21.9), null);


(lib.tenkav_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.instance = new lib.תןקו();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.381,0.381);

	this.instance_1 = new lib._1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8,3,0.251,0.251);

	this.instance_2 = new lib._3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(9,12,0.275,0.275);

	this.instance_3 = new lib._5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(28,12,0.28,0.28);

	this.instance_4 = new lib._6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(27,-3,0.289,0.289);

	this.instance_5 = new lib._9();
	this.instance_5.parent = this;
	this.instance_5.setTransform(32,9,0.421,0.421);

	this.sagor = new lib.petek10();
	this.sagor.parent = this;
	this.sagor.setTransform(154.1,105.2,1,1,0,0,0,140.3,96.8);
	this.sagor.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.sagor}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,136.5,113.3);


(lib.teimot_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.instance = new lib.טעימותבקבוצה();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.367,0.367);

	this.instance_1 = new lib._1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8,4,0.215,0.215);

	this.instance_2 = new lib.פתק3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(15,13,0.194,0.194);

	this.instance_3 = new lib.פתק5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(24,18,0.204,0.204);

	this.instance_4 = new lib.פתק7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(19,9,0.246,0.246);

	this.instance_5 = new lib.פתק9();
	this.instance_5.parent = this;
	this.instance_5.setTransform(27,13,0.291,0.291);

	this.instance_6 = new lib.petek10();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150.2,100.7,0.944,0.944,0,0,0,140.3,96.8);
	this.instance_6.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,131.4,109);


(lib.sod_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.instance = new lib.הסודשלי();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.387,0.387);

	this.instance_1 = new lib._1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8,4,0.215,0.215);

	this.instance_2 = new lib.פתק3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(15,13,0.194,0.194);

	this.instance_3 = new lib.פתק5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(24,18,0.204,0.204);

	this.instance_4 = new lib.פתק7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(19,9,0.246,0.246);

	this.instance_5 = new lib.פתק9();
	this.instance_5.parent = this;
	this.instance_5.setTransform(27,13,0.291,0.291);

	this.instance_6 = new lib.petek10();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150.2,100.7,0.944,0.944,0,0,0,140.3,96.8);
	this.instance_6.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,138.5,114.9);


(lib.sipor_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.instance = new lib.לחטוףסיפור();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.391,0.391);

	this.instance_1 = new lib._1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8,3,0.251,0.251);

	this.instance_2 = new lib._3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(9,12,0.275,0.275);

	this.instance_3 = new lib._5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(28,12,0.28,0.28);

	this.instance_4 = new lib._6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(27,-3,0.289,0.289);

	this.instance_5 = new lib._9();
	this.instance_5.parent = this;
	this.instance_5.setTransform(32,9,0.421,0.421);

	this.sagor = new lib.petek10();
	this.sagor.parent = this;
	this.sagor.setTransform(154.1,105.2,1,1,0,0,0,140.3,96.8);
	this.sagor.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.sagor}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140.1,116.2);


(lib.shtiya_txt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shtiya_txt = new lib.שתיה();
	this.shtiya_txt.parent = this;
	this.shtiya_txt.setTransform(-90,49.4);
	new cjs.ButtonHelper(this.shtiya_txt, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.shtiya_txt).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.2,21.9);


(lib.shikov_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.instance = new lib.שילובזרועות();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.396,0.396);

	this.instance_1 = new lib._1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8,3,0.251,0.251);

	this.instance_2 = new lib._3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(9,12,0.275,0.275);

	this.instance_3 = new lib._5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(28,12,0.28,0.28);

	this.instance_4 = new lib._6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(27,-3,0.289,0.289);

	this.instance_5 = new lib._9();
	this.instance_5.parent = this;
	this.instance_5.setTransform(32,9,0.421,0.421);

	this.sagor = new lib.petek10();
	this.sagor.parent = this;
	this.sagor.setTransform(154.1,105.2,1,1,0,0,0,140.3,96.8);
	this.sagor.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.sagor}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,141.9,117.7);


(lib.shemot_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.instance = new lib.שמותעםכדור();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.391,0.391);

	this.instance_1 = new lib._1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8,3,0.251,0.251);

	this.instance_2 = new lib._3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(9,12,0.275,0.275);

	this.instance_3 = new lib._5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(28,12,0.28,0.28);

	this.instance_4 = new lib._6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(27,-3,0.289,0.289);

	this.instance_5 = new lib._9();
	this.instance_5.parent = this;
	this.instance_5.setTransform(32,9,0.421,0.421);

	this.sagor = new lib.petek10();
	this.sagor.parent = this;
	this.sagor.setTransform(154.1,105.2,1,1,0,0,0,140.3,96.8);
	this.sagor.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.sagor}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,116.2);


(lib.reviot_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.instance = new lib.רביעיות();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.403,0.403);

	this.instance_1 = new lib._1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8,4,0.215,0.215);

	this.instance_2 = new lib.פתק3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(15,13,0.194,0.194);

	this.instance_3 = new lib.פתק5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(24,18,0.204,0.204);

	this.instance_4 = new lib.פתק7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(19,9,0.246,0.246);

	this.instance_5 = new lib.פתק9();
	this.instance_5.parent = this;
	this.instance_5.setTransform(27,13,0.291,0.291);

	this.instance_6 = new lib.petek10();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150.2,100.7,0.944,0.944,0,0,0,140.3,96.8);
	this.instance_6.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,144.1,119.6);


(lib.milatkesem_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.instance = new lib.מילתהקסם();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.407,0.407);

	this.instance_1 = new lib._1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8,3,0.251,0.251);

	this.instance_2 = new lib._3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(9,12,0.275,0.275);

	this.instance_3 = new lib._5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(28,12,0.28,0.28);

	this.instance_4 = new lib._6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(27,-3,0.289,0.289);

	this.instance_5 = new lib._9();
	this.instance_5.parent = this;
	this.instance_5.setTransform(32,9,0.421,0.421);

	this.sagor = new lib.petek10();
	this.sagor.parent = this;
	this.sagor.setTransform(154.1,105.2,1,1,0,0,0,140.3,96.8);
	this.sagor.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.sagor}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,145.9,121);


(lib.meshotaf_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.instance = new lib.מהמשותף();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.374,0.374);

	this.instance_1 = new lib._1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8,3,0.251,0.251);

	this.instance_2 = new lib._3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(9,12,0.275,0.275);

	this.instance_3 = new lib._5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(28,12,0.28,0.28);

	this.instance_4 = new lib._6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(27,-3,0.289,0.289);

	this.instance_5 = new lib._9();
	this.instance_5.parent = this;
	this.instance_5.setTransform(32,9,0.421,0.421);

	this.sagor = new lib.petek10();
	this.sagor.parent = this;
	this.sagor.setTransform(154.1,105.2,1,1,0,0,0,140.3,96.8);
	this.sagor.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.sagor}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,133.8,111);


(lib.mayodat_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.instance = new lib.מהאתיודעתעל();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.396,0.396);

	this.instance_1 = new lib._1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8,4,0.215,0.215);

	this.instance_2 = new lib.פתק3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(15,13,0.194,0.194);

	this.instance_3 = new lib.פתק5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(24,18,0.204,0.204);

	this.instance_4 = new lib.פתק7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(19,9,0.246,0.246);

	this.instance_5 = new lib.פתק9();
	this.instance_5.parent = this;
	this.instance_5.setTransform(27,13,0.291,0.291);

	this.instance_6 = new lib.petek10();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150.2,100.7,0.944,0.944,0,0,0,140.3,96.8);
	this.instance_6.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,141.8,117.7);


(lib.levush_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.instance = new lib.זיכרוןלבוש();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.33,0.33);

	this.instance_1 = new lib._1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8,4,0.215,0.215);

	this.instance_2 = new lib.פתק3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(15,13,0.194,0.194);

	this.instance_3 = new lib.פתק5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(24,18,0.204,0.204);

	this.instance_4 = new lib.פתק7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(19,9,0.246,0.246);

	this.instance_5 = new lib.פתק9();
	this.instance_5.parent = this;
	this.instance_5.setTransform(27,13,0.291,0.291);

	this.instance_6 = new lib.petek10();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150.2,100.7,0.944,0.944,0,0,0,140.3,96.8);
	this.instance_6.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,118.3,98.1);


(lib.kerach_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.instance = new lib.קוביותקרח();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.408,0.408);

	this.instance_1 = new lib._1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8,4,0.215,0.215);

	this.instance_2 = new lib.פתק3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(15,13,0.194,0.194);

	this.instance_3 = new lib.פתק5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(24,18,0.204,0.204);

	this.instance_4 = new lib.פתק7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(19,9,0.246,0.246);

	this.instance_5 = new lib.פתק9();
	this.instance_5.parent = this;
	this.instance_5.setTransform(27,13,0.291,0.291);

	this.instance_6 = new lib.petek10();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150.2,100.7,0.944,0.944,0,0,0,140.3,96.8);
	this.instance_6.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,146.1,121.2);


(lib.hergelim_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.instance = new lib.משחקההרגלים();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.401,0.401);

	this.instance_1 = new lib._1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8,3,0.251,0.251);

	this.instance_2 = new lib._3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(9,12,0.275,0.275);

	this.instance_3 = new lib._5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(28,12,0.28,0.28);

	this.instance_4 = new lib._6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(27,-3,0.289,0.289);

	this.instance_5 = new lib._9();
	this.instance_5.parent = this;
	this.instance_5.setTransform(32,9,0.421,0.421);

	this.sagor = new lib.petek10();
	this.sagor.parent = this;
	this.sagor.setTransform(154.1,105.2,1,1,0,0,0,140.3,96.8);
	this.sagor.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.sagor}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,143.5,119);


(lib.clean_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVAqIAAgTIAWAAIAAgeQAAgKgDgCQgEgEgIAAIgHAAIgBgRQAGgBAKAAQAOAAAHAIQAIAHAAASIAAAyg");
	this.shape.setTransform(136.1,22);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkA6IAAhLIAWAAIAABLgAAAAZIAAgPQAAgGACgEQACgEAFgGIACgDQAEgGAAgIIAAgLIgzAAIAAgSIBJAAIAAAVIgBARQgBAFgEAFIgDAGIgFAHIgBAHIAAANg");
	this.shape_1.setTransform(128.7,23.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AARAqIAAgnQAAgOgHgGQgIgGgOAAQgLAAgOACIgBgRQANgDARAAQASAAAKAGQAKAFAFAIQAEAJAAANIAAAqgAglAqIAAgqIAWAAIAAAqg");
	this.shape_2.setTransform(119.1,22);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAQApIgcgoQgFAFgCATIgBAQIgVAAIABgRQACgSAFgHQAEgHAHgFIgTgbIAZAAIAXAiQAGgFACgQIABgNIAUAAIgBAJQgBASgFAIQgEAGgIAFIAZAjg");
	this.shape_3.setTransform(105.4,22.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgNApIAAgKIgBgYIAAgIQAAgNAKgIIgXAAIAAgSIA3AAIAAAQQgLAAgGAEQgHAFAAALIABAHQACAOAAAMIAAAMg");
	this.shape_4.setTransform(97.4,22.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgKApIAAhRIAVAAIAABRg");
	this.shape_5.setTransform(91.7,22.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAOAqIAAgpQAAgMgHgGQgHgGgNAAIgTACIgCgRQALgDAPAAQAVAAALAJQALAKAAAUIAAAsg");
	this.shape_6.setTransform(85,22);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgKAXIAAgtIAVAAIAAAtg");
	this.shape_7.setTransform(79,20.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgmAqIAAhQQAPgDAQAAQATAAAJAFQAKAFAEAIQAEAIAAANIAAAsgAgQgWIAAAtIAhAAIAAgXQAAgLgFgGQgFgGgLAAIgMABg");
	this.shape_8.setTransform(72,22);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AABAqIAAgTIAUAAIAAgQQAAgQgCgHQgDgGgHAAQgHAAgEAIQgFAHgDAVIgFAcIgYAAIAEgSIAGgYIgNgoIATAAIAFASQANgTAQAAQAPAAAJAMQAIAMAAAZIAAAig");
	this.shape_9.setTransform(57.3,22);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeAfQgMgLAAgTQAAgTAMgMQAMgMASAAQANAAAJAFQAKAGAFAJQAGAKAAAMQAAASgMANQgMAMgTAAQgSAAgMgMgAgOgRQgFAIAAAJQAAALAFAIQAGAGAIAAQAJAAAGgGQAFgIAAgLQAAgKgFgIQgGgGgJAAQgJgBgFAIg");
	this.shape_10.setTransform(47.6,22.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgKApIAAhRIAVAAIAABRg");
	this.shape_11.setTransform(40.5,22.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AABAqIAAgTIAUAAIAAgQQAAgQgCgHQgDgGgHAAQgHAAgEAIQgFAHgDAVIgFAcIgYAAIAEgSIAGgYIgNgoIATAAIAFASQANgTAQAAQAPAAAJAMQAIAMAAAZIAAAig");
	this.shape_12.setTransform(33,22);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgVAqIAAgTIAWAAIAAgeQAAgKgDgCQgEgEgIAAIgGAAIgCgRQAGgBAJAAQAPAAAHAIQAIAHAAASIAAAyg");
	this.shape_13.setTransform(25,22);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgKAXIAAgtIAVAAIAAAtg");
	this.shape_14.setTransform(19.9,20.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgmAqIAAhQQAPgDAQAAQATAAAJAFQAKAFAEAIQAEAIAAANIAAAsgAgQgWIAAAtIAhAAIAAgXQAAgLgFgGQgFgGgLAAIgMABg");
	this.shape_15.setTransform(12.9,22);

	this.instance = new lib.x();
	this.instance.parent = this;
	this.instance.setTransform(169,21.1,1.896,1.896,0,0,0,11.1,11.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFCC").s().p("AtMB4IAAjvIaZAAIAADvg");
	this.shape_16.setTransform(84.5,21.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.instance},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,189.4,41.5);


(lib.clean = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.clean_all = new lib.clean_all();
	this.clean_all.parent = this;
	this.clean_all.setTransform(95.7,18.8,1,1,0,0,0,94.7,20.8);
	new cjs.ButtonHelper(this.clean_all, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFCC").ss(1,1,1).p("AJhgPIAAAfAphAQIAAgf");
	this.shape.setTransform(93.9,39.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFCC").s().p("AK7CVIzCAAIlKAAIAAkpIAKAAIAADvIaZAAIAAA6g");
	this.shape_1.setTransform(85,22.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.clean_all}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.clean, new cjs.Rectangle(0,-2,190.4,43.7), null);


(lib.bracha_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.instance = new lib.ברכותמקוריות();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.382,0.382);

	this.instance_1 = new lib._1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8,4,0.215,0.215);

	this.instance_2 = new lib.פתק3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(15,13,0.194,0.194);

	this.instance_3 = new lib.פתק5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(24,18,0.204,0.204);

	this.instance_4 = new lib.פתק7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(19,9,0.246,0.246);

	this.instance_5 = new lib.פתק9();
	this.instance_5.parent = this;
	this.instance_5.setTransform(27,13,0.291,0.291);

	this.instance_6 = new lib.petek10();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150.2,100.7,0.944,0.944,0,0,0,140.3,96.8);
	this.instance_6.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,136.9,113.5);


(lib.blyain_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.instance = new lib.בליעיןהרע();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.386,0.386);

	this.instance_1 = new lib._1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8,3,0.251,0.251);

	this.instance_2 = new lib._3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(9,12,0.275,0.275);

	this.instance_3 = new lib._5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(28,12,0.28,0.28);

	this.instance_4 = new lib._6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(27,-3,0.289,0.289);

	this.instance_5 = new lib._9();
	this.instance_5.parent = this;
	this.instance_5.setTransform(32,9,0.421,0.421);

	this.sagor = new lib.petek10();
	this.sagor.parent = this;
	this.sagor.setTransform(154.1,105.2,1,1,0,0,0,140.3,96.8);
	this.sagor.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.sagor}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,138.1,114.6);


(lib.bingo_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.instance = new lib.בינגו();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.386,0.386);

	this.instance_1 = new lib._1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8,4,0.215,0.215);

	this.instance_2 = new lib.פתק3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(15,13,0.194,0.194);

	this.instance_3 = new lib.פתק5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(24,18,0.204,0.204);

	this.instance_4 = new lib.פתק7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(19,9,0.246,0.246);

	this.instance_5 = new lib.פתק9();
	this.instance_5.parent = this;
	this.instance_5.setTransform(27,13,0.291,0.291);

	this.instance_6 = new lib.petek10();
	this.instance_6.parent = this;
	this.instance_6.setTransform(150.2,100.7,0.944,0.944,0,0,0,140.3,96.8);
	this.instance_6.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,138.3,114.8);


(lib.amitot_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.instance = new lib.שתיאמיתותושקר();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.406,0.406);

	this.instance_1 = new lib._1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8,3,0.251,0.251);

	this.instance_2 = new lib._3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(9,12,0.275,0.275);

	this.instance_3 = new lib._5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(28,12,0.28,0.28);

	this.instance_4 = new lib._6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(27,-3,0.289,0.289);

	this.instance_5 = new lib._9();
	this.instance_5.parent = this;
	this.instance_5.setTransform(32,9,0.421,0.421);

	this.sagor = new lib.petek10();
	this.sagor.parent = this;
	this.sagor.setTransform(154.1,105.2,1,1,0,0,0,140.3,96.8);
	this.sagor.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.sagor}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,145.5,120.7);


(lib.x_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.x();
	this.instance.parent = this;
	this.instance.setTransform(11,11,1,1,0,0,0,11,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.9,21.9);


// stage content:
(lib.sofileaadishir = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{x:0});

	// timeline functions:
	this.frame_0 = function() {
		this.bracha_gadol.alpha=0;
		this.stop();
		this.meshotap_gadol.alpha=0;
		this.stop();
		this.zug_gadol.alpha=0;
		this.stop();
		this.sod_gadol.alpha=0;
		this.stop();
		this.kesem_gadol.alpha=0;
		this.stop();
		this.teimot_gadol.alpha=0;
		this.stop();
		this.stop();
		this.tenkav_gadol.alpha=0;
		this.stop();
		this.levosh_gadol.alpha=0;
		this.x_clalli.alpha=0;
		this.box.alpha=0;
		this.sipor_gadol.alpha=0;
		this.stop();
		this.stop();
		this.zafof_gadol.alpha=0;
		this.stop();
		this.reviyot_gadol.alpha=0;
		this.stop();
		this.zior_gadol.alpha=0;
		this.stop();
		this.kubia_gadol.alpha=0;
		this.stop();
		this.bingo_gadol.alpha=0;
		this.stop();
		this.amitot_gadol.alpha=0;
		this.stop();
		this.herglim_gadol.alpha=0;
		this.stop();
		this.yodaat_gadol.alpha=0;
		this.stop();
		this.shemot_gadol.alpha=0;
		this.stop();
		this.bliayn_gadol.alpha=0;
		this.zrout_gadol.alpha=0;
		this.stop();
		this.clean.alpha=0;
		this.stop();
		this.stop();
		this.zilom.alpha=0;
		this.stop();
		//רווקות
		this.x_button.alpha=0;	
		this.x_button.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			this.zug_mc.gotoAndPlay(0);
			this.sod_mc.gotoAndPlay(0);
			this.tenkav_mc.gotoAndPlay(0);
			this.shikov_mc.gotoAndPlay(0);
			this.meshotaf_mc.gotoAndPlay(0);
			this.reviot_mc.gotoAndPlay(0);
			this.shemot_mc.gotoAndPlay(0);
			this.sipor_mc.gotoAndPlay(0);
			this.bingo_mc.gotoAndPlay(0);
			this.amitot_mc.gotoAndPlay(0);
			this.kerach_mc.gotoAndPlay(0);
			this.zyor_mc.gotoAndPlay(0);
		    this.x_button.alpha=0;	
			
		}
		//היכרות
		this.x_1.addEventListener("click", fl_MouseClickHandler1.bind(this));
		
		function fl_MouseClickHandler1()
		{
			this.shikov_mc.gotoAndPlay(0);
			this.teimot_mc.gotoAndPlay(0);
			this.tenkav_mc.gotoAndPlay(0);
			this.levush_mc.gotoAndPlay(0);
			this.mayodat_mc.gotoAndPlay(0);
			this.bracha_mc.gotoAndPlay(0);
			this.meshotaf_mc.gotoAndPlay(0);
			this.hergelim_mc.gotoAndPlay(0);
			this.blyain_mc.gotoAndPlay(0);
			this.zafof_mc.gotoAndPlay(0);
			this.sipor_mc.gotoAndPlay(0);
			this.amitot_mc.gotoAndPlay(0);
			this.zyor_mc.gotoAndPlay(0);
			this.x_1.alpha=0;	
		}
		//גיבוש
		this.x_2.addEventListener("click", fl_MouseClickHandler2.bind(this));
		
		function fl_MouseClickHandler2()
		{
		this.sod_mc.gotoAndPlay(0);
			this.mayodat_mc.gotoAndPlay(0);
			this.bracha_mc.gotoAndPlay(0);
			this.hergelim_mc.gotoAndPlay(0);
			this.blyain_mc.gotoAndPlay(0);
			this.x_2.alpha=0;
		}
		this.x_3.addEventListener("click", fl_MouseClickHandler3.bind(this));
		
		function fl_MouseClickHandler3()
		{
		
			this.sod_mc.gotoAndPlay(0);
			this.tenkav_mc.gotoAndPlay(0);
			this.zug_mc.gotoAndPlay(0);
			this.reviot_mc.gotoAndPlay(0);
			this.blyain_mc.gotoAndPlay(0);
			this.sipor_mc.gotoAndPlay(0);
			this.bingo_mc.gotoAndPlay(0);
			this.amitot_mc.gotoAndPlay(0);
			this.kerach_mc.gotoAndPlay(0);
			this.x_3.alpha=0;
		}
		this.x_4.addEventListener("click", fl_MouseClickHandler4.bind(this));
		
		function fl_MouseClickHandler4()
		{
			this.sod_mc.gotoAndPlay(0);
			this.milatkesem_mc.gotoAndPlay(0)
			this.bracha_mc.gotoAndPlay(0);;
			this.zug_mc.gotoAndPlay(0);
			this.tenkav_mc.gotoAndPlay(0);
			this.meshotaf_mc.gotoAndPlay(0);
			this.reviot_mc.gotoAndPlay(0);
			this.hergelim_mc.gotoAndPlay(0);
			this.blyain_mc.gotoAndPlay(0);
			this.bingo_mc.gotoAndPlay(0);
			this.sipor_mc.gotoAndPlay(0);
			this.amitot_mc.gotoAndPlay(0);
			this.shemot_mc.gotoAndPlay(0);
			this.kerach_mc.gotoAndPlay(0);
			this.x_4.alpha=0;
		}
		this.x_5.addEventListener("click", fl_MouseClickHandler5.bind(this));
		
		function fl_MouseClickHandler5()
		{
			this.sod_mc.gotoAndPlay(0);
			this.teimot_mc.gotoAndPlay(0);
			this.mayodat_mc.gotoAndPlay(0);
			this.bracha_mc.gotoAndPlay(0);
			this.zug_mc.gotoAndPlay(0);
			this.hergelim_mc.gotoAndPlay(0);
			this.reviot_mc.gotoAndPlay(0);
			this.blyain_mc.gotoAndPlay(0);
			this.amitot_mc.gotoAndPlay(0);
			this.kerach_mc.gotoAndPlay(0);
			this.x_5.alpha=0;
		}
		this.x_6.addEventListener("click", fl_MouseClickHandler6.bind(this));
		
		function fl_MouseClickHandler6()
		{
			this.tenkav_mc.gotoAndPlay(0);
			this.levush_mc.gotoAndPlay(0);
			this.mayodat_mc.gotoAndPlay(0);
			this.shikov_mc.gotoAndPlay(0);
			this.bracha_mc.gotoAndPlay(0);
			this.zug_mc.gotoAndPlay(0);
			this.hergelim_mc.gotoAndPlay(0);
			this.reviot_mc.gotoAndPlay(0);
			this.zafof_mc.gotoAndPlay(0);
			this.sipor_mc.gotoAndPlay(0);
			this.shemot_mc.gotoAndPlay(0);
			this.bingo_mc.gotoAndPlay(0);
			this.amitot_mc.gotoAndPlay(0);
			this.kerach_mc.gotoAndPlay(0);
			this.zyor_mc.gotoAndPlay(0);
			this.x_6.alpha=0;
		}
		this.x_7.addEventListener("click", fl_MouseClickHandler7.bind(this));
		
		function fl_MouseClickHandler7()
		{
			this.sod_mc.gotoAndPlay(0);
			this.tenkav_mc.gotoAndPlay(0);
			this.milatkesem_mc.gotoAndPlay(0);
			this.mayodat_mc.gotoAndPlay(0);
			this.meshotaf_mc.gotoAndPlay(0);
			this.zug_mc.gotoAndPlay(0);
			this.hergelim_mc.gotoAndPlay(0);
			this.reviot_mc.gotoAndPlay(0);
			this.zafof_mc.gotoAndPlay(0);
			this.blyain_mc.gotoAndPlay(0);
			this.bingo_mc.gotoAndPlay(0);
			this.amitot_mc.gotoAndPlay(0);
			this.x_7.alpha=0;
		}
		this.x_8.addEventListener("click", fl_MouseClickHandler8.bind(this));
		
		function fl_MouseClickHandler8()
		{
		    this.sod_mc.gotoAndPlay(0);
			this.teimot_mc.gotoAndPlay(0);
			this.levush_mc.gotoAndPlay(0);
			this.shikov_mc.gotoAndPlay(0);
			this.bracha_mc.gotoAndPlay(0);
			this.blyain_mc.gotoAndPlay(0);
			this.bingo_mc.gotoAndPlay(0);
			this.amitot_mc.gotoAndPlay(0);
			this.sipor_mc.gotoAndPlay(0);
			this.x_8.alpha=0;
		}
		this.x_9.addEventListener("click", fl_MouseClickHandler9.bind(this));
		
		function fl_MouseClickHandler9()
		{
		    this.sod_mc.gotoAndPlay(0);
			this.shikov_mc.gotoAndPlay(0);
			this.zug_mc.gotoAndPlay(0);
			this.reviot_mc.gotoAndPlay(0);
			this.kerach_mc.gotoAndPlay(0);
			this.x_9.alpha=0;
		}
		this.x_10.addEventListener("click", fl_MouseClickHandler10.bind(this));
		
		function fl_MouseClickHandler10()
		{
		this.milatkesem_mc.gotoAndPlay(0);
			this.teimot_mc.gotoAndPlay(0);
			this.tenkav_mc.gotoAndPlay(0);
		    this.levush_mc.gotoAndPlay(0);
			this.mayodat_mc.gotoAndPlay(0);
			this.shikov_mc.gotoAndPlay(0);
			this.bracha_mc.gotoAndPlay(0);
			this.reviot_mc.gotoAndPlay(0);
			this.hergelim_mc.gotoAndPlay(0);
			this.zafof_mc.gotoAndPlay(0);
			this.sipor_mc.gotoAndPlay(0);
			this.amitot_mc.gotoAndPlay(0);
			this.zyor_mc.gotoAndPlay(0);
			this.x_10.alpha=0;
		}
		this.x_11.addEventListener("click", fl_MouseClickHandler11.bind(this));
		
		function fl_MouseClickHandler11()
		{
		    this.sod_mc.gotoAndPlay(0);
			this.milatkesem_mc.gotoAndPlay(0);
			this.teimot_mc.gotoAndPlay(0);
		    this.levush_mc.gotoAndPlay(0);
			this.zug_mc.gotoAndPlay(0);
			this.meshotaf_mc.gotoAndPlay(0);
			this.reviot_mc.gotoAndPlay(0);
			this.zafof_mc.gotoAndPlay(0);
			this.sipor_mc.gotoAndPlay(0);
			this.kerach_mc.gotoAndPlay(0);
			this.bingo_mc.gotoAndPlay(0);
			this.shemot_mc.gotoAndPlay(0);
			this.x_11.alpha=0;
		}
		this.x_12.addEventListener("click", fl_MouseClickHandler12.bind(this));
		
		function fl_MouseClickHandler12()
		{
		    this.milatkesem_mc.gotoAndPlay(0);
			this.teimot_mc.gotoAndPlay(0);
			this.tenkav_mc.gotoAndPlay(0);
		    this.levush_mc.gotoAndPlay(0);
			this.zug_mc.gotoAndPlay(0);
			this.meshotaf_mc.gotoAndPlay(0);
			this.bracha_mc.gotoAndPlay(0);
			this.zafof_mc.gotoAndPlay(0);
			this.sipor_mc.gotoAndPlay(0);
			this.amitot_mc.gotoAndPlay(0);
			this.bingo_mc.gotoAndPlay(0);
			this.shemot_mc.gotoAndPlay(0);
			this.zyor_mc.gotoAndPlay(0);
			this.x_12.alpha=0;
		}
		
		
		
		
		
		
		
		
		
		this.levush_mc.addEventListener("click", fl_MouseClickHandler_8.bind(this));
		
		function fl_MouseClickHandler_8()
		{
		this.levosh_gadol.alpha=1;	
			this.x_clalli.alpha=1;
			this.box.alpha=0.81;
			this.zilom.alpha=1;
		}
		
		
		this.x_clalli.addEventListener("click", fl_MouseClickHandler_9.bind(this));
		
		function fl_MouseClickHandler_9()
		{
		this.levosh_gadol.alpha=0;
		this.tenkav_gadol.alpha=0;
		this.teimot_gadol.alpha=0;
		this.kesem_gadol.alpha=0;
		this.sod_gadol.alpha=0;
		this.zug_gadol.alpha=0;
		this.bracha_gadol.alpha=0;	
		this.meshotap_gadol.alpha=0;
		this.zrout_gadol.alpha=0;
		this.yodaat_gadol.alpha=0;	
		this.x_clalli.alpha=0;
		this.zilom.alpha=0;	
		this.box.alpha=0;
		this.sipor_gadol.alpha=0;
		this.zafof_gadol.alpha=0;
		this.bliayn_gadol.alpha=0;
		this.reviyot_gadol.alpha=0;
		this.herglim_gadol.alpha=0;
		this.zior_gadol.alpha=0;
		this.kubia_gadol.alpha=0;
		this.amitot_gadol.alpha=0;
		this.bingo_gadol.alpha=0;
		this.shemot_gadol.alpha=0;
		}
		
		
		this.tenkav_mc.addEventListener("click", fl_MouseClickHandler_10.bind(this));
		
		function fl_MouseClickHandler_10()
		{
			this.tenkav_gadol.alpha=1;
			this.x_clalli.alpha=1;
			this.box.alpha=0.81;
			this.zilom.alpha=1;
		}
		
		
		this.teimot_mc.addEventListener("click", fl_MouseClickHandler_11.bind(this));
		
		function fl_MouseClickHandler_11()
		{
			this.teimot_gadol.alpha=1;
			this.x_clalli.alpha=1;
			this.box.alpha=0.81;
			this.zilom.alpha=1;
		}
		
		
		
		this.milatkesem_mc.addEventListener("click", fl_MouseClickHandler_12.bind(this));
		
		function fl_MouseClickHandler_12()
		{
		this.kesem_gadol.alpha=1;
			this.x_clalli.alpha=1;
			this.box.alpha=0.81;
			this.zilom.alpha=1;
		}
		
		
		this.sod_mc.addEventListener("click", fl_MouseClickHandler_13.bind(this));
		
		function fl_MouseClickHandler_13()
		{
		this.sod_gadol.alpha=1;
		this.x_clalli.alpha=1;
		this.box.alpha=0.81;
		this.zilom.alpha=1;
		}
		
		
		this.zug_mc.addEventListener("click", fl_MouseClickHandler_14.bind(this));
		
		function fl_MouseClickHandler_14()
		{
		this.zug_gadol.alpha=1;
		this.x_clalli.alpha=1;
		this.box.alpha=0.81;
		this.zilom.alpha=1;	
		}
		
		
		
		this.meshotaf_mc.addEventListener("click", fl_MouseClickHandler_15.bind(this));
		
		function fl_MouseClickHandler_15()
		{
		this.meshotap_gadol.alpha=1;
		this.x_clalli.alpha=1;
		this.box.alpha=0.81;
		this.zilom.alpha=1;
			
		}
		
		
		this.bracha_mc.addEventListener("click", fl_MouseClickHandler_16.bind(this));
		
		function fl_MouseClickHandler_16()
		{ 
		this.bracha_gadol.alpha=1;
		this.x_clalli.alpha=1;
		this.box.alpha=0.81;
		this.zilom.alpha=1;	
			
		}
		
		
		
		this.shikov_mc.addEventListener("click", fl_MouseClickHandler_17.bind(this));
		
		function fl_MouseClickHandler_17()
		{
		this.zrout_gadol.alpha=1;
		this.x_clalli.alpha=1;
		this.box.alpha=0.81;
		this.zilom.alpha=1;	
		}
		
		
		
		this.mayodat_mc.addEventListener("click", fl_MouseClickHandler_18.bind(this));
		
		function fl_MouseClickHandler_18()
		{
		this.yodaat_gadol.alpha=1;
		this.x_clalli.alpha=1;
		this.box.alpha=0.81;
			this.zilom.alpha=1;
		}
		
		
		this.sipor_mc.addEventListener("click", fl_MouseClickHandler_19.bind(this));
		
		function fl_MouseClickHandler_19()
		{
		this.sipor_gadol.alpha=1;
		this.x_clalli.alpha=1;
		this.box.alpha=0.81;
		this.zilom.alpha=1;
		}
		
		this.zafof_mc.addEventListener("click", fl_MouseClickHandler_20.bind(this));
		
		function fl_MouseClickHandler_20()
		{
		this.zafof_gadol.alpha=1;
		this.x_clalli.alpha=1;
		this.box.alpha=0.81;
		this.zilom.alpha=1;
		}
		
		
		
		this.blyain_mc.addEventListener("click", fl_MouseClickHandler_21.bind(this));
		
		function fl_MouseClickHandler_21()
		{
		this.bliayn_gadol.alpha=1;
		this.x_clalli.alpha=1;
		this.box.alpha=0.81;
		this.zilom.alpha=1;
		}
		
		this.reviot_mc.addEventListener("click", fl_MouseClickHandler_22.bind(this));
		
		function fl_MouseClickHandler_22()
		{
		this.reviyot_gadol.alpha=1;
		this.x_clalli.alpha=1;
		this.box.alpha=0.81;
		this.zilom.alpha=1;
		}
		
		
		
		this.hergelim_mc.addEventListener("click", fl_MouseClickHandler_23.bind(this));
		
		function fl_MouseClickHandler_23()
		{
		this.herglim_gadol.alpha=1;
		this.x_clalli.alpha=1;
		this.box.alpha=0.81;
		this.zilom.alpha=1;
		}
		
		this.zyor_mc.addEventListener("click", fl_MouseClickHandler_24.bind(this));
		
		function fl_MouseClickHandler_24()
		{
		this.zior_gadol.alpha=1;
		this.x_clalli.alpha=1;
		this.box.alpha=0.81;
		this.zilom.alpha=1;
		}
		
		
		this.kerach_mc.addEventListener("click", fl_MouseClickHandler_25.bind(this));
		
		function fl_MouseClickHandler_25()
		{
		this.kubia_gadol.alpha=1;
		this.x_clalli.alpha=1;
		this.box.alpha=0.81;
		this.zilom.alpha=1;
		}
		
		
		this.amitot_mc.addEventListener("click", fl_MouseClickHandler_26.bind(this));
		
		function fl_MouseClickHandler_26()
		{
		this.amitot_gadol.alpha=1;
		this.x_clalli.alpha=1;
		this.box.alpha=0.81;
		this.zilom.alpha=1;
		}
		
		this.bingo_mc.addEventListener("click", fl_MouseClickHandler_27.bind(this));
		
		function fl_MouseClickHandler_27()
		{
		this.bingo_gadol.alpha=1;
		this.x_clalli.alpha=1;
		this.box.alpha=0.81;
		this.zilom.alpha=1;
		}
		
		this.shemot_mc.addEventListener("click", fl_MouseClickHandler_28.bind(this));
		
		function fl_MouseClickHandler_28()
		{
		this.shemot_gadol.alpha=1;
		this.x_clalli.alpha=1;
		this.box.alpha=0.81;
		this.zilom.alpha=1;
		}
		
		this.x_1.alpha=0;
		this.r2.addEventListener("click", fl_Click1_2.bind(this));
		
		function fl_Click1_2()
		{
			this.shikov_mc.gotoAndPlay(2);
			this.teimot_mc.gotoAndPlay(2);
			this.tenkav_mc.gotoAndPlay(2);
			this.levush_mc.gotoAndPlay(2);
			this.mayodat_mc.gotoAndPlay(2);
			this.bracha_mc.gotoAndPlay(2);
			this.meshotaf_mc.gotoAndPlay(2);
			this.hergelim_mc.gotoAndPlay(2);
			this.blyain_mc.gotoAndPlay(2);
			this.zafof_mc.gotoAndPlay(2);
			this.sipor_mc.gotoAndPlay(2);
			this.amitot_mc.gotoAndPlay(2);
			this.zyor_mc.gotoAndPlay(2);
			this.x_1.alpha=1;
		}
		this.x_2.alpha=0;
		this.r3.addEventListener("click", fl_Click2_2.bind(this));
		
		function fl_Click2_2()
		{
			this.sod_mc.gotoAndPlay(2);
			this.mayodat_mc.gotoAndPlay(2);
			this.bracha_mc.gotoAndPlay(2);
			this.hergelim_mc.gotoAndPlay(2);
			this.blyain_mc.gotoAndPlay(2);
			this.x_2.alpha=1;
		
		}
		this.x_3.alpha=0;
		this.r4.addEventListener("click", fl_Click3_2.bind(this));
		
		function fl_Click3_2()
		{
		    this.sod_mc.gotoAndPlay(2);
			this.tenkav_mc.gotoAndPlay(2);
			this.zug_mc.gotoAndPlay(2);
			this.reviot_mc.gotoAndPlay(2);
			this.blyain_mc.gotoAndPlay(2);
			this.sipor_mc.gotoAndPlay(2);
			this.bingo_mc.gotoAndPlay(2);
			this.amitot_mc.gotoAndPlay(2);
			this.kerach_mc.gotoAndPlay(2);
			this.x_3.alpha=1;
		
		}
		this.x_4.alpha=0;
		this.r5.addEventListener("click", fl_Click4_2.bind(this));
		
		function fl_Click4_2()
		{
			this.sod_mc.gotoAndPlay(2);
			this.milatkesem_mc.gotoAndPlay(2)
			this.bracha_mc.gotoAndPlay(2);;
			this.zug_mc.gotoAndPlay(2);
			this.tenkav_mc.gotoAndPlay(2);
			this.meshotaf_mc.gotoAndPlay(2);
			this.reviot_mc.gotoAndPlay(2);
			this.hergelim_mc.gotoAndPlay(2);
			this.blyain_mc.gotoAndPlay(2);
			this.bingo_mc.gotoAndPlay(2);
			this.sipor_mc.gotoAndPlay(2);
			this.amitot_mc.gotoAndPlay(2);
			this.shemot_mc.gotoAndPlay(2);
			this.kerach_mc.gotoAndPlay(2);
		    this.x_4.alpha=1;
		
		}
		this.x_5.alpha=0;
		this.r6.addEventListener("click", fl_Click5_2.bind(this));
		
		function fl_Click5_2()
		{
			this.sod_mc.gotoAndPlay(2);
			this.teimot_mc.gotoAndPlay(2);
			this.mayodat_mc.gotoAndPlay(2);
			this.bracha_mc.gotoAndPlay(2);
			this.zug_mc.gotoAndPlay(2);
			this.hergelim_mc.gotoAndPlay(2);
			this.reviot_mc.gotoAndPlay(2);
			this.blyain_mc.gotoAndPlay(2);
			this.amitot_mc.gotoAndPlay(2);
			this.kerach_mc.gotoAndPlay(2);
		    this.x_5.alpha=1;
		
		}
		this.x_6.alpha=0;
		this.r7.addEventListener("click", fl_Click6_2.bind(this));
		
		function fl_Click6_2()
		{
			this.tenkav_mc.gotoAndPlay(2);
			this.levush_mc.gotoAndPlay(2);
			this.mayodat_mc.gotoAndPlay(2);
			this.shikov_mc.gotoAndPlay(2);
			this.bracha_mc.gotoAndPlay(2);
			this.zug_mc.gotoAndPlay(2);
			this.hergelim_mc.gotoAndPlay(2);
			this.reviot_mc.gotoAndPlay(2);
			this.zafof_mc.gotoAndPlay(2);
			this.sipor_mc.gotoAndPlay(2);
			this.shemot_mc.gotoAndPlay(2);
			this.bingo_mc.gotoAndPlay(2);
			this.amitot_mc.gotoAndPlay(2);
			this.kerach_mc.gotoAndPlay(2);
			this.zyor_mc.gotoAndPlay(2);
		    this.x_6.alpha=1;
		
		}
		this.x_7.alpha=0;
		this.r8.addEventListener("click", fl_Click7_2.bind(this));
		
		function fl_Click7_2()
		{
			this.sod_mc.gotoAndPlay(2);
			this.tenkav_mc.gotoAndPlay(2);
			this.milatkesem_mc.gotoAndPlay(2);
			this.mayodat_mc.gotoAndPlay(2);
			this.meshotaf_mc.gotoAndPlay(2);
			this.zug_mc.gotoAndPlay(2);
			this.hergelim_mc.gotoAndPlay(2);
			this.reviot_mc.gotoAndPlay(2);
			this.zafof_mc.gotoAndPlay(2);
			this.blyain_mc.gotoAndPlay(2);
			this.bingo_mc.gotoAndPlay(2);
			this.amitot_mc.gotoAndPlay(2);
		    this.x_7.alpha=1;
		
		}
		this.x_8.alpha=0;
		this.r9.addEventListener("click", fl_Click8_2.bind(this));
		
		function fl_Click8_2()
		{
		    this.sod_mc.gotoAndPlay(2);
			this.teimot_mc.gotoAndPlay(2);
			this.levush_mc.gotoAndPlay(2);
			this.shikov_mc.gotoAndPlay(2);
			this.bracha_mc.gotoAndPlay(2);
			this.blyain_mc.gotoAndPlay(2);
			this.bingo_mc.gotoAndPlay(2);
			this.amitot_mc.gotoAndPlay(2);
			this.sipor_mc.gotoAndPlay(2);
		    this.x_8.alpha=1;
		
		}
		
		this.x_9.alpha=0;
		this.r10.addEventListener("click", fl_Click9_2.bind(this));
		
		function fl_Click9_2()
		{
		    this.sod_mc.gotoAndPlay(2);
			this.shikov_mc.gotoAndPlay(2);
			this.zug_mc.gotoAndPlay(2);
			this.reviot_mc.gotoAndPlay(2);
			this.kerach_mc.gotoAndPlay(2);
		    this.x_9.alpha=1;
		
		}
		this.x_10.alpha=0;
		this.r11.addEventListener("click", fl_Click10_2.bind(this));
		
		function fl_Click10_2()
		{
		    this.milatkesem_mc.gotoAndPlay(2);
			this.teimot_mc.gotoAndPlay(2);
			this.tenkav_mc.gotoAndPlay(2);
		    this.levush_mc.gotoAndPlay(2);
			this.mayodat_mc.gotoAndPlay(2);
			this.shikov_mc.gotoAndPlay(2);
			this.bracha_mc.gotoAndPlay(2);
			this.reviot_mc.gotoAndPlay(2);
			this.hergelim_mc.gotoAndPlay(2);
			this.zafof_mc.gotoAndPlay(2);
			this.sipor_mc.gotoAndPlay(2);
			this.amitot_mc.gotoAndPlay(2);
			this.zyor_mc.gotoAndPlay(2);
		    this.x_10.alpha=1;
		
		}
		this.x_11.alpha=0;
		this.r12.addEventListener("click", fl_Click11_2.bind(this));
		
		function fl_Click11_2()
		{
		this.sod_mc.gotoAndPlay(2);
			this.milatkesem_mc.gotoAndPlay(2);
			this.teimot_mc.gotoAndPlay(2);
		    this.levush_mc.gotoAndPlay(2);
			this.zug_mc.gotoAndPlay(2);
			this.meshotaf_mc.gotoAndPlay(2);
			this.reviot_mc.gotoAndPlay(2);
			this.zafof_mc.gotoAndPlay(2);
			this.sipor_mc.gotoAndPlay(2);
			this.kerach_mc.gotoAndPlay(2);
			this.bingo_mc.gotoAndPlay(2);
			this.shemot_mc.gotoAndPlay(2);
		    this.x_11.alpha=1;
		
		}
		this.x_12.alpha=0;
		this.r13.addEventListener("click", fl_Click12_2.bind(this));
		
		function fl_Click12_2()
		{
		    this.milatkesem_mc.gotoAndPlay(2);
			this.teimot_mc.gotoAndPlay(2);
			this.tenkav_mc.gotoAndPlay(2);
		    this.levush_mc.gotoAndPlay(2);
			this.zug_mc.gotoAndPlay(2);
			this.meshotaf_mc.gotoAndPlay(2);
			this.bracha_mc.gotoAndPlay(2);
			this.zafof_mc.gotoAndPlay(2);
			this.sipor_mc.gotoAndPlay(2);
			this.amitot_mc.gotoAndPlay(2);
			this.bingo_mc.gotoAndPlay(2);
			this.shemot_mc.gotoAndPlay(2);
			this.zyor_mc.gotoAndPlay(2);
		    this.x_12.alpha=1;
		
		}
		
		
		
		
		
		this.clean.addEventListener("click", fl_MouseClickHandler_47.bind(this));
		
		function fl_MouseClickHandler_47()   
		{
		this.clean.alpha=0;
		this.ravakot_txt.mouseEnabled=true;	
		this.ravakot_txt.alpha=1;	
		this.r2.mouseEnabled=true;	
		this.hicerot_txt.mouseEnabled=true;	
		this.hicerot_txt.alpha=1;
		this.r3.mouseEnabled=true;	
		this.gibush_txt.mouseEnabled=true;	
		this.gibush_txt.alpha=1;
		this.r4.mouseEnabled=true;	
		this.holedet_txt.mouseEnabled=true;	
		this.holedet_txt.alpha=1;
		this.r5.mouseEnabled=true;	
		this.shtiya_txt.mouseEnabled=true;	
		this.shtiya_txt.alpha=1;
		this.r6.mouseEnabled=true;	
		this.mishpach_txt.mouseEnabled=true;	
		this.mishpach_txt.alpha=1;
		this.r7.mouseEnabled=true;	
		this.lelo_txt.mouseEnabled=true;	
		this.lelo_txt.alpha=1;
		this.r8.mouseEnabled=true;	
		this.babait_txt.mouseEnabled=true;	
		this.babait_txt.alpha=1;
		this.r9.mouseEnabled=true;	
		this.lehachin_txt.mouseEnabled=true;	
		this.lehachin_txt.alpha=1;
		this.r10.mouseEnabled=true;	
		this.Gmekirim_txt.mouseEnabled=true;	
		this.Gmekirim_txt.alpha=1;
		this.r11.mouseEnabled=true;	
		this.Ghadashim_txt.mouseEnabled=true;	
		this.Ghadashim_txt.alpha=1;
		this.r12.mouseEnabled=true;	
		this.Kmekirim_txt.mouseEnabled=true;	
		this.Kmekirim_txt.alpha=1;
		this.r13.mouseEnabled=true;	
		this.Khadashim_txt.mouseEnabled=true;	
		this.Khadashim_txt.alpha=1;
		
		this.teimot_mc.mouseEnabled=true;
		this.sod_mc.mouseEnabled=true;
		this.milatkesem_mc.mouseEnabled=true;
		this.tenkav_mc.mouseEnabled=true;
		this.levush_mc.mouseEnabled=true;
		this.mayodat_mc.mouseEnabled=true;
		this.shikov_mc.mouseEnabled=true;
		this.bracha_mc.mouseEnabled=true;
		this.zug_mc.mouseEnabled=true;
		this.hergelim_mc.mouseEnabled=true;
		this.reviot_mc.mouseEnabled=true;
		this.zafof_mc.mouseEnabled=true;
		this.sipor_mc.mouseEnabled=true;
		this.shemot_mc.mouseEnabled=true;
		this.bingo_mc.mouseEnabled=true;
		this.amitot_mc.mouseEnabled=true;
		this.kerach_mc.mouseEnabled=true;
		this.zyor_mc.mouseEnabled=true;
		this.meshotaf_mc.mouseEnabled=true;
		this.blyain_mc.mouseEnabled=true;
		
		this.teimot_mc.gotoAndStop(0);
		this.sod_mc.gotoAndStop(0);
		this.milatkesem_mc.gotoAndStop(0);
		this.tenkav_mc.gotoAndStop(0);
		this.levush_mc.gotoAndStop(0);
		this.mayodat_mc.gotoAndStop(0);
		this.shikov_mc.gotoAndStop(0);
		this.bracha_mc.gotoAndStop(0);
		this.zug_mc.gotoAndStop(0);
		this.hergelim_mc.gotoAndStop(0);
		this.reviot_mc.gotoAndStop(0);
		this.zafof_mc.gotoAndStop(0);
		this.sipor_mc.gotoAndStop(0);
		this.shemot_mc.gotoAndStop(0);
		this.bingo_mc.gotoAndStop(0);
		this.amitot_mc.gotoAndStop(0);
		this.kerach_mc.gotoAndStop(0);
		this.zyor_mc.gotoAndStop(0);
		this.meshotaf_mc.gotoAndStop(0);
		this.blyain_mc.gotoAndStop(0);
		
		}
		this.stop();
		
		                    
		
		//מעבר עכבר זוג משלים//
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.zug_mc.addEventListener("mouseover", fl_mouse.bind(this));
		this.hikrothover_txt.alpha=0;
		this.giboosh_txt.alpha=0;
		this.mishred_txt.alpha=0;
		this.lhhchinred_txt.alpha=0;
		this.Gmekir_txt.alpha=0;
		this.Ghadash_txt.alpha=0;
		this.holedetred_txt.alpha=0;
		this.shtiyared_txt.alpha=0;
		this.babaitred_txt.alpha=0;
		this.Kmekirimred_txt.alpha=0;
		this.lelored_txt.alpha=0;
		this.Khadashimred_txt.alpha=0;
		this.ravakimred_txt.alpha=0;
		
		
		
		function fl_mouse(){
		
		this.teimot_mc.cursor = "pointer";
		this.sod_mc.cursor = "pointer";
		this.milatkesem_mc.cursor = "pointer";
		this.tenkav_mc.cursor = "pointer";
		this.levush_mc.cursor = "pointer";
		this.mayodat_mc.cursor = "pointer";
		this.shikov_mc.cursor = "pointer";
		this.bracha_mc.cursor = "pointer";
		this.zug_mc.cursor = "pointer";
		this.hergelim_mc.cursor = "pointer";
		this.reviot_mc.cursor = "pointer";
		this.zafof_mc.cursor = "pointer";
		this.sipor_mc.cursor = "pointer";
		this.shemot_mc.cursor = "pointer";
		this.bingo_mc.cursor = "pointer";
		this.amitot_mc.cursor = "pointer";
		this.kerach_mc.cursor = "pointer";
		this.zyor_mc.cursor = "pointer";
		this.meshotaf_mc.cursor = "pointer";
		this.blyain_mc.cursor = "pointer";
		
			this.levush_mc.alpha=0.2;
		    this.tenkav_mc.alpha=0.2;
			this.teimot_mc.alpha=0.2;
			this.milatkesem_mc.alpha=0.2;
			this.sod_mc.alpha=0.2;
			this.meshotaf_mc.alpha=0.2;
			this.bracha_mc.alpha=0.2;
			this.shikov_mc.alpha=0.2;
			this.mayodat_mc.alpha=0.2;
			this.sipor_mc.alpha=0.2;
			this.zafof_mc.alpha=0.2;
			this.blyain_mc.alpha=0.2;
			this.reviot_mc.alpha=0.2;
			this.hergelim_mc.alpha=0.2;
			this.zyor_mc.alpha=0.2;
			this.kerach_mc.alpha=0.2;
			this.amitot_mc.alpha=0.2;
			this.bingo_mc.alpha=0.2;
			this.shemot_mc.alpha=0.2;
			this.ravakot_txt.alpha=0.1;
			this.shtiya_txt.alpha=0.1;
			this.holedet_txt.alpha=0.1;
			this.mishpach_txt.alpha=0.1;
			this.lelo_txt.alpha=0.1;
			this.babait_txt.alpha=0.1;
			this.Kmekirim_txt.alpha=0.1;
			this.Khadashim_txt.alpha=0.1;
			this.hicerot_txt.alpha=0;
			this.gibush_txt.alpha=0;
			this.hikrothover_txt.alpha=1;
			this.giboosh_txt.alpha=1;
			this.mishred_txt.alpha=1;
			this.mishpach_txt.alpha=0;
			this.lhhchinred_txt.alpha=1;
			this.lehachin_txt.alpha=0;
			this.Gmekir_txt.alpha=1;
			this.Gmekirim_txt.alpha=0;
			this.Ghadash_txt.alpha=1;
			this.Ghadashim_txt.alpha=0;	
		}
		
		
		//יציאת עכבר זוג משלים//
		this.zug_mc.addEventListener("mouseout", fl_MouseOutHandler.bind(this));
		this.zug_mc.alpha=1;
		function fl_MouseOutHandler()
		{
		
			this.levush_mc.alpha=1;
			this.tenkav_mc.alpha=1;
			this.teimot_mc.alpha=1;
			this.milatkesem_mc.alpha=1;
			this.sod_mc.alpha=1;
			this.meshotaf_mc.alpha=1;
			this.bracha_mc.alpha=1;
			this.shikov_mc.alpha=1;
			this.mayodat_mc.alpha=1;
			this.sipor_mc.alpha=1;
			this.zafof_mc.alpha=1;
			this.blyain_mc.alpha=1;
			this.reviot_mc.alpha=1;
			this.hergelim_mc.alpha=1;
			this.zyor_mc.alpha=1;
			this.kerach_mc.alpha=1;
			this.amitot_mc.alpha=1;
			this.bingo_mc.alpha=1;
			this.shemot_mc.alpha=1;
			this.ravakot_txt.alpha=1;
			this.shtiya_txt.alpha=1;
			this.holedet_txt.alpha=1;
			this.mishpach_txt.alpha=1;
			this.lelo_txt.alpha=1;
			this.babait_txt.alpha=1;
			this.Kmekirim_txt.alpha=1;
			this.Khadashim_txt.alpha=1;
			this.hikrothover_txt.alpha=0;
			this.giboosh_txt.alpha=0;
			this.gibush_txt.alpha=1;
			this.hicerot_txt.alpha=1;
			this.mishred_txt.alpha=0;
			this.mishpach_txt.alpha=1;
			this.lhhchinred_txt.alpha=0;
			this.lehachin_txt.alpha=1;
			this.Gmekir_txt.alpha=0;
			this.Gmekirim_txt.alpha=1;
			this.Ghadash_txt.alpha=0;
			this.Ghadashim_txt.alpha=1;
		
			}
			//לבוש//
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.levush_mc.addEventListener("mouseover", fl_MouseOverHandler_2.bind(this));
		
		function fl_MouseOverHandler_2()
		{
		this.zug_mc.alpha=0.2;
		    this.tenkav_mc.alpha=0.2;
			this.teimot_mc.alpha=0.2;
			this.milatkesem_mc.alpha=0.2;
			this.sod_mc.alpha=0.2;
			this.meshotaf_mc.alpha=0.2;
			this.bracha_mc.alpha=0.2;
			this.shikov_mc.alpha=0.2;
			this.mayodat_mc.alpha=0.2;
			this.sipor_mc.alpha=0.2;
			this.zafof_mc.alpha=0.2;
			this.blyain_mc.alpha=0.2;
			this.reviot_mc.alpha=0.2;
			this.hergelim_mc.alpha=0.2;
			this.zyor_mc.alpha=0.2;
			this.kerach_mc.alpha=0.2;
			this.amitot_mc.alpha=0.2;
			this.bingo_mc.alpha=0.2;
			this.shemot_mc.alpha=0.2;
			this.giboosh_txt.alpha=1;
			this.gibush_txt.alpha=0;
			this.mishred_txt.alpha=1;
			this.mishpach_txt.alpha=0;
			this.Gmekir_txt.alpha=1;
			this.Gmekirim_txt.alpha=0;
			this.holedetred_txt.alpha=1;
			this.holedet_txt.alpha=0;
			this.shtiyared_txt.alpha=1;
			this.shtiya_txt.alpha=0;
			this.babaitred_txt.alpha=1;
			this.babait_txt.alpha=0;
			this.ravakot_txt.alpha=0.1;
			this.hicerot_txt.alpha=0.1;
			this.lehachin_txt.alpha=0.1;
			this.lelo_txt.alpha=0.1;
			this.Ghadashim_txt.alpha=0.1;
			this.Kmekirim_txt.alpha=0.1;
			this.Khadashim_txt.alpha=0.1;
			
		}
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.levush_mc.addEventListener("mouseout", fl_MouseOutHandler_4.bind(this));
		
		function fl_MouseOutHandler_4()
		{
		this.zug_mc.alpha=1;
			this.tenkav_mc.alpha=1;
			this.teimot_mc.alpha=1;
			this.milatkesem_mc.alpha=1;
			this.sod_mc.alpha=1;
			this.meshotaf_mc.alpha=1;
			this.bracha_mc.alpha=1;
			this.shikov_mc.alpha=1;
			this.mayodat_mc.alpha=1;
			this.sipor_mc.alpha=1;
			this.zafof_mc.alpha=1;
			this.blyain_mc.alpha=1;
			this.reviot_mc.alpha=1;
			this.hergelim_mc.alpha=1;
			this.zyor_mc.alpha=1;
			this.kerach_mc.alpha=1;
			this.amitot_mc.alpha=1;
			this.bingo_mc.alpha=1;
			this.shemot_mc.alpha=1;	
			this.giboosh_txt.alpha=0;
			this.gibush_txt.alpha=1;
			this.mishred_txt.alpha=0;
			this.mishpach_txt.alpha=1;
			this.Gmekir_txt.alpha=0;
			this.Gmekirim_txt.alpha=1;
			this.holedetred_txt.alpha=0;
			this.holedet_txt.alpha=1;
			this.shtiyared_txt.alpha=0;
			this.shtiya_txt.alpha=1;
			this.babaitred_txt.alpha=0;
			this.babait_txt.alpha=1;
			this.ravakot_txt.alpha=1;
			this.hicerot_txt.alpha=1;
			this.lehachin_txt.alpha=1;
			this.lelo_txt.alpha=1;
			this.Ghadashim_txt.alpha=1;
			this.Kmekirim_txt.alpha=1;
			this.Khadashim_txt.alpha=1;
			
			
		}
		
		//לחטוף סיפור
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.sipor_mc.addEventListener("mouseover", fl_MouseOverHandler_3.bind(this));
		
		function fl_MouseOverHandler_3()
		{
		this.zug_mc.alpha=0.2;
		    this.tenkav_mc.alpha=0.2;
			this.teimot_mc.alpha=0.2;
			this.milatkesem_mc.alpha=0.2;
			this.sod_mc.alpha=0.2;
			this.meshotaf_mc.alpha=0.2;
			this.bracha_mc.alpha=0.2;
			this.shikov_mc.alpha=0.2;
			this.mayodat_mc.alpha=0.2;
			this.levush_mc.alpha=0.2;
			this.zafof_mc.alpha=0.2;
			this.blyain_mc.alpha=0.2;
			this.reviot_mc.alpha=0.2;
			this.hergelim_mc.alpha=0.2;
			this.zyor_mc.alpha=0.2;
			this.kerach_mc.alpha=0.2;
			this.amitot_mc.alpha=0.2;
			this.bingo_mc.alpha=0.2;
			this.shemot_mc.alpha=0.2;
			this.giboosh_txt.alpha=1;
			this.gibush_txt.alpha=0;
			this.mishred_txt.alpha=1;
			this.mishpach_txt.alpha=0;
			this.Gmekir_txt.alpha=1;
			this.Gmekirim_txt.alpha=0;
			this.babaitred_txt.alpha=1;
			this.babait_txt.alpha=0;
			this.lehachin_txt.alpha=0.1;
			this.lelo_txt.alpha=0.1;
			this.Ghadashim_txt.alpha=0.1;
			this.Kmekirim_txt.alpha=0.1;
			this.Khadashim_txt.alpha=0.1;
			this.ravakot_txt.alpha=0.1;
			this.shtiya_txt.alpha=0.1;
			this.holedet_txt.alpha=0.1;
			this.hicerot_txt.alpha=0.1;
		}
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.sipor_mc.addEventListener("mouseout", fl_MouseOutHandler_5.bind(this));
		
		function fl_MouseOutHandler_5()
		{
		this.zug_mc.alpha=1;
			this.tenkav_mc.alpha=1;
			this.teimot_mc.alpha=1;
			this.milatkesem_mc.alpha=1;
			this.sod_mc.alpha=1;
			this.meshotaf_mc.alpha=1;
			this.bracha_mc.alpha=1;
			this.shikov_mc.alpha=1;
			this.mayodat_mc.alpha=1;
			this.levush_mc.alpha=1;
			this.zafof_mc.alpha=1;
			this.blyain_mc.alpha=1;
			this.reviot_mc.alpha=1;
			this.hergelim_mc.alpha=1;
			this.zyor_mc.alpha=1;
			this.kerach_mc.alpha=1;
			this.amitot_mc.alpha=1;
			this.bingo_mc.alpha=1;
			this.shemot_mc.alpha=1;
			this.giboosh_txt.alpha=0;
			this.gibush_txt.alpha=1;
			this.mishred_txt.alpha=0;
			this.mishpach_txt.alpha=1;
			this.Gmekir_txt.alpha=0;
			this.Gmekirim_txt.alpha=1;
			this.babaitred_txt.alpha=0;
			this.babait_txt.alpha=1;
			this.lehachin_txt.alpha=1;
			this.lelo_txt.alpha=1;
			this.Ghadashim_txt.alpha=1;
			this.Kmekirim_txt.alpha=1;
			this.Khadashim_txt.alpha=1;
			this.ravakot_txt.alpha=1;
			this.shtiya_txt.alpha=1;
			this.holedet_txt.alpha=1;
			this.hicerot_txt.alpha=1;
		}
		
		//ציור משותף//
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.zyor_mc.addEventListener("mouseover", fl_MouseOverHandler_4.bind(this));
		
		function fl_MouseOverHandler_4()
		{
		this.zug_mc.alpha=0.2;
		    this.tenkav_mc.alpha=0.2;
			this.teimot_mc.alpha=0.2;
			this.milatkesem_mc.alpha=0.2;
			this.sod_mc.alpha=0.2;
			this.meshotaf_mc.alpha=0.2;
			this.bracha_mc.alpha=0.2;
			this.shikov_mc.alpha=0.2;
			this.mayodat_mc.alpha=0.2;
			this.levush_mc.alpha=0.2;
			this.zafof_mc.alpha=0.2;
			this.blyain_mc.alpha=0.2;
			this.reviot_mc.alpha=0.2;
			this.hergelim_mc.alpha=0.2;
			this.sipor_mc.alpha=0.2;
			this.kerach_mc.alpha=0.2;
			this.amitot_mc.alpha=0.2;
			this.bingo_mc.alpha=0.2;
			this.shemot_mc.alpha=0.2;
			this.giboosh_txt.alpha=1;
			this.gibush_txt.alpha=0;
			this.mishred_txt.alpha=1;
			this.mishpach_txt.alpha=0;
			this.holedetred_txt.alpha=1;
			this.holedet_txt.alpha=0;
			this.shtiyared_txt.alpha=1;
			this.shtiya_txt.alpha=0
			this.Gmekir_txt.alpha=1;
			this.Gmekirim_txt.alpha=0
			this.babaitred_txt.alpha=1;
			this.babait_txt.alpha=0;
			this.ravakot_txt.alpha=0.1;
			this.hicerot_txt.alpha=0.1;
			this.lehachin_txt.alpha=0.1;
			this.lelo_txt.alpha=0.1;
			this.Ghadashim_txt.alpha=0.1;
			this.Kmekirim_txt.alpha=0.1;
			this.Khadashim_txt.alpha=0.1;
		}
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.zyor_mc.addEventListener("mouseout", fl_MouseOutHandler_6.bind(this));
		
		function fl_MouseOutHandler_6()
		{
		this.zug_mc.alpha=1;
			this.tenkav_mc.alpha=1;
			this.teimot_mc.alpha=1;
			this.milatkesem_mc.alpha=1;
			this.sod_mc.alpha=1;
			this.meshotaf_mc.alpha=1;
			this.bracha_mc.alpha=1;
			this.shikov_mc.alpha=1;
			this.mayodat_mc.alpha=1;
			this.levush_mc.alpha=1;
			this.zafof_mc.alpha=1;
			this.blyain_mc.alpha=1;
			this.reviot_mc.alpha=1;
			this.hergelim_mc.alpha=1;
			this.sipor_mc.alpha=1;
			this.kerach_mc.alpha=1;
			this.amitot_mc.alpha=1;
			this.bingo_mc.alpha=1;
			this.shemot_mc.alpha=1;
			this.giboosh_txt.alpha=0;
			this.gibush_txt.alpha=1;
			this.mishred_txt.alpha=0;
			this.mishpach_txt.alpha=1;
			this.holedetred_txt.alpha=0;
			this.holedet_txt.alpha=1;
			this.shtiyared_txt.alpha=0;
			this.shtiya_txt.alpha=1
			this.Gmekir_txt.alpha=0;
			this.Gmekirim_txt.alpha=1
			this.babaitred_txt.alpha=0;
			this.babait_txt.alpha=1;
			this.ravakot_txt.alpha=1;
			this.hicerot_txt.alpha=1;
			this.lehachin_txt.alpha=1;
			this.lelo_txt.alpha=1;
			this.Ghadashim_txt.alpha=1;
			this.Kmekirim_txt.alpha=1;
			this.Khadashim_txt.alpha=1;
		}
		
		//תן קו//
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.tenkav_mc.addEventListener("mouseover", fl_MouseOverHandler_5.bind(this));
		
		function fl_MouseOverHandler_5()
		{
		this.zug_mc.alpha=0.2;
		    this.zyor_mc.alpha=0.2;
			this.teimot_mc.alpha=0.2;
			this.milatkesem_mc.alpha=0.2;
			this.sod_mc.alpha=0.2;
			this.meshotaf_mc.alpha=0.2;
			this.bracha_mc.alpha=0.2;
			this.shikov_mc.alpha=0.2;
			this.mayodat_mc.alpha=0.2;
			this.levush_mc.alpha=0.2;
			this.zafof_mc.alpha=0.2;
			this.blyain_mc.alpha=0.2;
			this.reviot_mc.alpha=0.2;
			this.hergelim_mc.alpha=0.2;
			this.sipor_mc.alpha=0.2;
			this.kerach_mc.alpha=0.2;
			this.amitot_mc.alpha=0.2;
			this.bingo_mc.alpha=0.2;
			this.shemot_mc.alpha=0.2;
			this.giboosh_txt.alpha=1;
			this.gibush_txt.alpha=0;
			this.mishred_txt.alpha=1;
			this.mishpach_txt.alpha=0;
			this.holedetred_txt.alpha=1;
			this.holedet_txt.alpha=0;
			this.Gmekir_txt.alpha=1;
			this.Gmekirim_txt.alpha=0
			this.Kmekirimred_txt.alpha=1;
			this.Kmekirim_txt.alpha=0;
			this.lhhchinred_txt.alpha=1;
			this.lehachin_txt.alpha=0;
			this.ravakot_txt.alpha=0.1;
			this.hicerot_txt.alpha=0.1;
			this.shtiya_txt.alpha=0.1;
			this.Khadashim_txt.alpha=0.1;
			this.Ghadashim_txt.alpha=0.1;
			this.lelo_txt.alpha=0.1;
			this.babait_txt.alpha=0.1;
		
		}
		
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.tenkav_mc.addEventListener("mouseout", fl_MouseOutHandler_8.bind(this));
		
		function fl_MouseOutHandler_8()
		{
		this.zug_mc.alpha=1;
			this.zyor_mc.alpha=1;
			this.teimot_mc.alpha=1;
			this.milatkesem_mc.alpha=1;
			this.sod_mc.alpha=1;
			this.meshotaf_mc.alpha=1;
			this.bracha_mc.alpha=1;
			this.shikov_mc.alpha=1;
			this.mayodat_mc.alpha=1;
			this.levush_mc.alpha=1;
			this.zafof_mc.alpha=1;
			this.blyain_mc.alpha=1;
			this.reviot_mc.alpha=1;
			this.hergelim_mc.alpha=1;
			this.sipor_mc.alpha=1;
			this.kerach_mc.alpha=1;
			this.amitot_mc.alpha=1;
			this.bingo_mc.alpha=1;
			this.shemot_mc.alpha=1;
			this.giboosh_txt.alpha=0;
			this.gibush_txt.alpha=1;
			this.mishred_txt.alpha=0;
			this.mishpach_txt.alpha=1;
			this.holedetred_txt.alpha=0;
			this.holedet_txt.alpha=1;
			this.Gmekir_txt.alpha=0;
			this.Gmekirim_txt.alpha=1
			this.Kmekirimred_txt.alpha=0;
			this.Kmekirim_txt.alpha=1;
			this.lhhchinred_txt.alpha=0;
			this.lehachin_txt.alpha=1;
			this.ravakot_txt.alpha=1;
			this.hicerot_txt.alpha=1;
			this.shtiya_txt.alpha=1;
			this.Khadashim_txt.alpha=1;
			this.Ghadashim_txt.alpha=1;
			this.lelo_txt.alpha=1;
			this.babait_txt.alpha=1;
		}
		
		//מה משותף?//
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.meshotaf_mc.addEventListener("mouseover", fl_MouseOverHandler_6.bind(this));
		
		function fl_MouseOverHandler_6()
		{
		this.zug_mc.alpha=0.2;
		    this.zyor_mc.alpha=0.2;
			this.teimot_mc.alpha=0.2;
			this.milatkesem_mc.alpha=0.2;
			this.sod_mc.alpha=0.2;
			this.tenkav_mc.alpha=0.2;
			this.bracha_mc.alpha=0.2;
			this.shikov_mc.alpha=0.2;
			this.mayodat_mc.alpha=0.2;
			this.levush_mc.alpha=0.2;
			this.zafof_mc.alpha=0.2;
			this.blyain_mc.alpha=0.2;
			this.reviot_mc.alpha=0.2;
			this.hergelim_mc.alpha=0.2;
			this.sipor_mc.alpha=0.2;
			this.kerach_mc.alpha=0.2;
			this.amitot_mc.alpha=0.2;
			this.bingo_mc.alpha=0.2;
			this.shemot_mc.alpha=0.2;
			this.giboosh_txt.alpha=1;
			this.gibush_txt.alpha=0;
			this.mishred_txt.alpha=1;
			this.mishpach_txt.alpha=0;
			this.holedetred_txt.alpha=1;
			this.holedet_txt.alpha=0;
			this.Gmekir_txt.alpha=1;
			this.Gmekirim_txt.alpha=0;
			this.lelored_txt.alpha=1;
			this.lelo_txt.alpha=0;
			this.Ghadash_txt.alpha=1;
			this.Ghadashim_txt.alpha=0;
			this.ravakot_txt.alpha=0.1;
			this.hicerot_txt.alpha=0.1;
			this.shtiya_txt.alpha=0.1;
			this.lehachin_txt.alpha=0.1;
			this.babait_txt.alpha=0.1;
			this.Kmekirim_txt.alpha=0.1;
			this.Khadashim_txt.alpha=0.1;
		}
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.meshotaf_mc.addEventListener("mouseout", fl_MouseOutHandler_9.bind(this));
		
		function fl_MouseOutHandler_9()
		{
		this.zug_mc.alpha=1;
			this.zyor_mc.alpha=1;
			this.teimot_mc.alpha=1;
			this.milatkesem_mc.alpha=1;
			this.sod_mc.alpha=1;
			this.tenkav_mc.alpha=1;
			this.bracha_mc.alpha=1;
			this.shikov_mc.alpha=1;
			this.mayodat_mc.alpha=1;
			this.levush_mc.alpha=1;
			this.zafof_mc.alpha=1;
			this.blyain_mc.alpha=1;
			this.reviot_mc.alpha=1;
			this.hergelim_mc.alpha=1;
			this.sipor_mc.alpha=1;
			this.kerach_mc.alpha=1;
			this.amitot_mc.alpha=1;
			this.bingo_mc.alpha=1;
			this.shemot_mc.alpha=1;
			this.giboosh_txt.alpha=0;
			this.gibush_txt.alpha=1;
			this.mishred_txt.alpha=0;
			this.mishpach_txt.alpha=1;
			this.holedetred_txt.alpha=0;
			this.holedet_txt.alpha=1;
			this.Gmekir_txt.alpha=0;
			this.Gmekirim_txt.alpha=1
			this.lelored_txt.alpha=0;
			this.lelo_txt.alpha=1;
			this.Ghadash_txt.alpha=0;
			this.Ghadashim_txt.alpha=1;
			this.ravakot_txt.alpha=1;
			this.hicerot_txt.alpha=1;
			this.shtiya_txt.alpha=1;
			this.lehachin_txt.alpha=1;
			this.babait_txt.alpha=1;
			this.Kmekirim_txt.alpha=1;
			this.Khadashim_txt.alpha=1;
		}
		
		//צפוף//
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.zafof_mc.addEventListener("mouseover", fl_MouseOverHandler_7.bind(this));
		
		function fl_MouseOverHandler_7()
		{
		this.zug_mc.alpha=0.2;
		    this.zyor_mc.alpha=0.2;
			this.teimot_mc.alpha=0.2;
			this.milatkesem_mc.alpha=0.2;
			this.sod_mc.alpha=0.2;
			this.tenkav_mc.alpha=0.2;
			this.bracha_mc.alpha=0.2;
			this.shikov_mc.alpha=0.2;
			this.mayodat_mc.alpha=0.2;
			this.levush_mc.alpha=0.2;
			this.meshotaf_mc.alpha=0.2;
			this.blyain_mc.alpha=0.2;
			this.reviot_mc.alpha=0.2;
			this.hergelim_mc.alpha=0.2;
			this.sipor_mc.alpha=0.2;
			this.kerach_mc.alpha=0.2;
			this.amitot_mc.alpha=0.2;
			this.bingo_mc.alpha=0.2;
			this.shemot_mc.alpha=0.2;
			this.giboosh_txt.alpha=1;
			this.gibush_txt.alpha=0;
			this.mishred_txt.alpha=1;
			this.mishpach_txt.alpha=0;
			this.holedetred_txt.alpha=1;
			this.holedet_txt.alpha=0;
			this.Gmekir_txt.alpha=1;
			this.Gmekirim_txt.alpha=0
			this.lhhchinred_txt.alpha=1;
			this.lehachin_txt.alpha=0;
			this.Kmekirim_txt.alpha=0.1;
			this.Khadashim_txt.alpha=0.1;
			this.Ghadashim_txt.alpha=0.1;
			this.lelo_txt.alpha=0.1;
			this.babait_txt.alpha=0.1;
			this.ravakot_txt.alpha=0.1;
			this.hicerot_txt.alpha=0.1;
			this.shtiya_txt.alpha=0.1;
		}
		
		 
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.zafof_mc.addEventListener("mouseout", fl_MouseOutHandler_10.bind(this));
		
		function fl_MouseOutHandler_10()
		{
		this.zug_mc.alpha=1;
			this.zyor_mc.alpha=1;
			this.teimot_mc.alpha=1;
			this.milatkesem_mc.alpha=1;
			this.sod_mc.alpha=1;
			this.tenkav_mc.alpha=1;
			this.bracha_mc.alpha=1;
			this.shikov_mc.alpha=1;
			this.mayodat_mc.alpha=1;
			this.levush_mc.alpha=1;
			this.meshotaf_mc.alpha=1;
			this.mayodat_mc.alpha=1;
			this.blyain_mc.alpha=1;
			this.reviot_mc.alpha=1;
			this.hergelim_mc.alpha=1;
			this.sipor_mc.alpha=1;
			this.kerach_mc.alpha=1;
			this.amitot_mc.alpha=1;
			this.bingo_mc.alpha=1;
			this.shemot_mc.alpha=1;
			this.giboosh_txt.alpha=0;
			this.gibush_txt.alpha=1;
			this.mishred_txt.alpha=0;
			this.mishpach_txt.alpha=1;
			this.holedetred_txt.alpha=0;
			this.holedet_txt.alpha=1;
			this.Gmekir_txt.alpha=0;
			this.Gmekirim_txt.alpha=1;
			this.lhhchinred_txt.alpha=0;
			this.lehachin_txt.alpha=1;
			this.Kmekirim_txt.alpha=1;
			this.Khadashim_txt.alpha=1;
			this.Ghadashim_txt.alpha=1;
			this.lelo_txt.alpha=1;
			this.babait_txt.alpha=0;
			this.ravakot_txt.alpha=1;
			this.hicerot_txt.alpha=1;
			this.shtiya_txt.alpha=1;
		}
		
		//קרח//
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.kerach_mc.addEventListener("mouseover", fl_MouseOverHandler_8.bind(this));
		
		function fl_MouseOverHandler_8()
		{
		this.zug_mc.alpha=0.2;
		    this.zyor_mc.alpha=0.2;
			this.teimot_mc.alpha=0.2;
			this.milatkesem_mc.alpha=0.2;
			this.sod_mc.alpha=0.2;
			this.tenkav_mc.alpha=0.2;
			this.bracha_mc.alpha=0.2;
			this.shikov_mc.alpha=0.2;
			this.mayodat_mc.alpha=0.2;
			this.levush_mc.alpha=0.2;
			this.meshotaf_mc.alpha=0.2;
			this.blyain_mc.alpha=0.2;
			this.reviot_mc.alpha=0.2;
			this.hergelim_mc.alpha=0.2;
			this.sipor_mc.alpha=0.2;
			this.zafof_mc.alpha=0.2;
			this.amitot_mc.alpha=0.2;
			this.bingo_mc.alpha=0.2;
			this.shemot_mc.alpha=0.2;
			this.Khadashimred_txt.alpha=1;
			this.Khadashim_txt.alpha=0;
			this.Ghadash_txt.alpha=1;
			this.Ghadashim_txt.alpha=0;
			this.babaitred_txt.alpha=1;
			this.babait_txt.alpha=0;
			this.hikrothover_txt.alpha=1;
			this.hicerot_txt.alpha=0;
			this.Gmekirim_txt.alpha=0.1;
			this.Kmekirim_txt.alpha=0.1;
			this.lelo_txt.alpha=0.1;
			this.lehachin_txt.alpha=0.1;
			this.ravakot_txt.alpha=0.1;
			this.shtiya_txt.alpha=0.1;
			this.holedet_txt.alpha=0.1;
			this.mishpach_txt.alpha=0.1;
			this.gibush_txt.alpha=0.1;
			
		}
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.kerach_mc.addEventListener("mouseout", fl_MouseOutHandler_11.bind(this));
		
		function fl_MouseOutHandler_11()
		{
		this.zug_mc.alpha=1;
			this.zyor_mc.alpha=1;
			this.teimot_mc.alpha=1;
			this.milatkesem_mc.alpha=1;
			this.sod_mc.alpha=1;
			this.tenkav_mc.alpha=1;
			this.bracha_mc.alpha=1;
			this.shikov_mc.alpha=1;
			this.mayodat_mc.alpha=1;
			this.levush_mc.alpha=1;
			this.meshotaf_mc.alpha=1;
			this.mayodat_mc.alpha=1;
			this.blyain_mc.alpha=1;
			this.reviot_mc.alpha=1;
			this.hergelim_mc.alpha=1;
			this.sipor_mc.alpha=1;
			this.zafof_mc.alpha=1;
			this.amitot_mc.alpha=1;
			this.bingo_mc.alpha=1;
			this.shemot_mc.alpha=1;	
			this.Khadashimred_txt.alpha=0;
			this.Khadashim_txt.alpha=1;
			this.Ghadash_txt.alpha=0;
			this.Ghadashim_txt.alpha=1;
			this.babaitred_txt.alpha=0;
			this.babait_txt.alpha=1;
			this.hikrothover_txt.alpha=0;
			this.hicerot_txt.alpha=1;
			this.Gmekirim_txt.alpha=1;
			this.Kmekirim_txt.alpha=1;
			this.lelo_txt.alpha=1;
			this.lehachin_txt.alpha=1;
			this.ravakot_txt.alpha=1;
			this.shtiya_txt.alpha=1;
			this.holedet_txt.alpha=1;
			this.mishpach_txt.alpha=1;
			this.gibush_txt.alpha=1;
		}
		//טעימות//
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.teimot_mc.addEventListener("mouseover", fl_MouseOverHandler_9.bind(this));
		
		function fl_MouseOverHandler_9()
		{
		    this.zug_mc.alpha=0.2;
		    this.zyor_mc.alpha=0.2;
			this.kerach_mc.alpha=0.2;
			this.milatkesem_mc.alpha=0.2;
			this.sod_mc.alpha=0.2;
			this.tenkav_mc.alpha=0.2;
			this.bracha_mc.alpha=0.2;
			this.shikov_mc.alpha=0.2;
			this.mayodat_mc.alpha=0.2;
			this.levush_mc.alpha=0.2;
			this.meshotaf_mc.alpha=0.2;
			this.blyain_mc.alpha=0.2;
			this.reviot_mc.alpha=0.2;
			this.hergelim_mc.alpha=0.2;
			this.sipor_mc.alpha=0.2;
			this.zafof_mc.alpha=0.2;
			this.amitot_mc.alpha=0.2;
			this.bingo_mc.alpha=0.2;
			this.shemot_mc.alpha=0.2;
			this.ravakot_txt.alpha=0;
			this.ravakimred_txt.alpha=1;
			this.giboosh_txt.alpha=1;
			this.shtiyared_txt.alpha=1;
		    this.Gmekirim_txt.alpha=0.1;
			this.Kmekirim_txt.alpha=0.1;
			this.lelo_txt.alpha=0.1;
			this.lehachin_txt.alpha=0.1;
			this.ravakot_txt.alpha=0.1;
			this.shtiya_txt.alpha=0.1;
			this.holedet_txt.alpha=0.1;
			this.mishpach_txt.alpha=0.1;
			this.gibush_txt.alpha=0.1;
			this.hicerot_txt.alpha=0.1;
			this.holedetred_txt.alpha=1;
			this.babaitred_txt.alpha=1;
			this.Gmekir_txt.alpha=1;
			this.Ghadashim_txt.alpha=0.1;
		    this.Khadashim_txt.alpha=0.1;
			
			
		}
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.teimot_mc.addEventListener("mouseout", fl_MouseOutHandler_12.bind(this));
		
		function fl_MouseOutHandler_12()
		{
		this.zug_mc.alpha=1;
			this.zyor_mc.alpha=1;
			this.kerach_mc.alpha=1;
			this.milatkesem_mc.alpha=1;
			this.sod_mc.alpha=1;
			this.tenkav_mc.alpha=1;
			this.bracha_mc.alpha=1;
			this.shikov_mc.alpha=1;
			this.mayodat_mc.alpha=1;
			this.levush_mc.alpha=1;
			this.meshotaf_mc.alpha=1;
			this.mayodat_mc.alpha=1;
			this.blyain_mc.alpha=1;
			this.reviot_mc.alpha=1;
			this.hergelim_mc.alpha=1;
			this.sipor_mc.alpha=1;
			this.zafof_mc.alpha=1;
			this.amitot_mc.alpha=1;
			this.bingo_mc.alpha=1;
			this.shemot_mc.alpha=1;		
			this.Gmekirim_txt.alpha=1;
			this.Kmekirim_txt.alpha=1;
			this.lelo_txt.alpha=1;
			this.lehachin_txt.alpha=1;
			this.ravakot_txt.alpha=1;
			this.shtiya_txt.alpha=1;
			this.holedet_txt.alpha=1;
			this.mishpach_txt.alpha=1;
			this.gibush_txt.alpha=1;
			this.shtiyared_txt.alpha=0;
			this.ravakimred_txt.alpha=0;
			this.giboosh_txt.alpha=0;
			this.hicerot_txt.alpha=1;
			this.holedetred_txt.alpha=0;
			this.babaitred_txt.alpha=0;
			this.Gmekir_txt.alpha=0;
			this.Ghadashim_txt.alpha=1;
			this.Khadashim_txt.alpha=1;
		
		}
		
		//brachot//
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.bracha_mc.addEventListener("mouseover", fl_MouseOverHandler_10.bind(this));
		
		function fl_MouseOverHandler_10()
		{
		 this.zug_mc.alpha=0.2;
		    this.zyor_mc.alpha=0.2;
			this.kerach_mc.alpha=0.2;
			this.milatkesem_mc.alpha=0.2;
			this.sod_mc.alpha=0.2;
			this.tenkav_mc.alpha=0.2;
			this.teimot_mc.alpha=0.2;
			this.shikov_mc.alpha=0.2;
			this.mayodat_mc.alpha=0.2;
			this.levush_mc.alpha=0.2;
			this.meshotaf_mc.alpha=0.2;
			this.blyain_mc.alpha=0.2;
			this.reviot_mc.alpha=0.2;
			this.hergelim_mc.alpha=0.2;
			this.sipor_mc.alpha=0.2;
			this.zafof_mc.alpha=0.2;
			this.amitot_mc.alpha=0.2;
			this.bingo_mc.alpha=0.2;
			this.shemot_mc.alpha=0.2;
			this.ravakot_txt.alpha=0;
			this.ravakimred_txt.alpha=1;
			this.giboosh_txt.alpha=0;
			this.shtiyared_txt.alpha=0;
		    this.Gmekirim_txt.alpha=0.1;
			this.Kmekirim_txt.alpha=0.1;
			this.lelo_txt.alpha=0.1;
			this.lehachin_txt.alpha=0.1;
			this.ravakot_txt.alpha=0.1;
			this.shtiya_txt.alpha=0.1;
			this.holedet_txt.alpha=0.1;
			this.mishpach_txt.alpha=0.1;
			this.gibush_txt.alpha=0.1;
			this.hicerot_txt.alpha=0.1;
			this.holedetred_txt.alpha=1;
			this.babaitred_txt.alpha=1;
			this.babait_txt.alpha=0.1;
			this.Gmekir_txt.alpha=1;
			this.Ghadashim_txt.alpha=0.1;
		    this.Khadashim_txt.alpha=0.1;
			this.Kmekirimred_txt.alpha=1;
		
		}
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.bracha_mc.addEventListener("mouseout", fl_MouseOutHandler_14.bind(this));
		
		function fl_MouseOutHandler_14()
		{
		this.zug_mc.alpha=1;
			this.zyor_mc.alpha=1;
			this.kerach_mc.alpha=1;
			this.milatkesem_mc.alpha=1;
			this.sod_mc.alpha=1;
			this.tenkav_mc.alpha=1;
			this.teimot_mc.alpha=1;
			this.shikov_mc.alpha=1;
			this.mayodat_mc.alpha=1;
			this.levush_mc.alpha=1;
			this.meshotaf_mc.alpha=1;
			this.mayodat_mc.alpha=1;
			this.blyain_mc.alpha=1;
			this.reviot_mc.alpha=1;
			this.hergelim_mc.alpha=1;
			this.sipor_mc.alpha=1;
			this.zafof_mc.alpha=1;
			this.amitot_mc.alpha=1;
			this.bingo_mc.alpha=1;
			this.shemot_mc.alpha=1;		
			this.Gmekirim_txt.alpha=1;
			this.Kmekirim_txt.alpha=1;
			this.lelo_txt.alpha=1;
			this.lehachin_txt.alpha=1;
			this.ravakot_txt.alpha=1;
			this.shtiya_txt.alpha=1;
			this.holedet_txt.alpha=1;
			this.mishpach_txt.alpha=1;
			this.gibush_txt.alpha=1;
			this.shtiyared_txt.alpha=0;
			this.ravakimred_txt.alpha=0;
			this.giboosh_txt.alpha=0;
			this.hicerot_txt.alpha=1;
			this.holedetred_txt.alpha=0;
			this.babaitred_txt.alpha=0;
			this.Gmekir_txt.alpha=0;
			this.Ghadashim_txt.alpha=1;
			this.Khadashim_txt.alpha=1;
			this.Kmekirimred_txt.alpha=0;
			this.Kmekirim_txt.alpha=1;
			this.babait_txt.alpha=1;
		}
		
		//בלי עין הרע//
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.blyain_mc.addEventListener("mouseover", fl_MouseOverHandler_12.bind(this));
		
		function fl_MouseOverHandler_12()
		{
		this.zug_mc.alpha=0.2;
		    this.zyor_mc.alpha=0.2;
			this.kerach_mc.alpha=0.2;
			this.milatkesem_mc.alpha=0.2;
			this.sod_mc.alpha=0.2;
			this.tenkav_mc.alpha=0.2;
			this.teimot_mc.alpha=0.2;
			this.shikov_mc.alpha=0.2;
			this.mayodat_mc.alpha=0.2;
			this.levush_mc.alpha=0.2;
			this.meshotaf_mc.alpha=0.2;
			this.bracha_mc.alpha=0.2;
			this.reviot_mc.alpha=0.2;
			this.hergelim_mc.alpha=0.2;
			this.sipor_mc.alpha=0.2;
			this.zafof_mc.alpha=0.2;
			this.amitot_mc.alpha=0.2;
			this.bingo_mc.alpha=0.2;
			this.shemot_mc.alpha=0.2;
			this.ravakot_txt.alpha=0;
			this.ravakimred_txt.alpha=1;
			this.giboosh_txt.alpha=0;
			this.shtiyared_txt.alpha=0;
		    this.Gmekirim_txt.alpha=0.1;
			this.Kmekirim_txt.alpha=0.1;
			this.lelo_txt.alpha=0.1;
			this.lehachin_txt.alpha=0.1;
			this.ravakot_txt.alpha=0.1;
			this.shtiya_txt.alpha=0.1;
			this.holedet_txt.alpha=0.1;
			this.mishpach_txt.alpha=0.1;
			this.gibush_txt.alpha=0.1;
			this.hicerot_txt.alpha=0.1;
			this.holedetred_txt.alpha=0;
			this.babaitred_txt.alpha=0;
			this.babait_txt.alpha=0.1;
			this.Gmekir_txt.alpha=1;
			this.Ghadashim_txt.alpha=0.1;
		    this.Khadashim_txt.alpha=0.1;
			this.lelored_txt.alpha=1;
			this.Ghadash_txt.alpha=1;
			this.Khadashimred_txt.alpha=1;
			this.Ghadashim_txt.alpha=0;
			this.Khadashim_txt.alpha=0;
			this.Kmekirimred_txt.alpha=1;
		}
			
		
		
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.blyain_mc.addEventListener("mouseout", fl_MouseOutHandler_15.bind(this));
		
		function fl_MouseOutHandler_15()
		{
		this.zug_mc.alpha=1;
			this.zyor_mc.alpha=1;
			this.kerach_mc.alpha=1;
			this.milatkesem_mc.alpha=1;
			this.sod_mc.alpha=1;
			this.tenkav_mc.alpha=1;
			this.teimot_mc.alpha=1;
			this.shikov_mc.alpha=1;
			this.mayodat_mc.alpha=1;
			this.levush_mc.alpha=1;
			this.meshotaf_mc.alpha=1;
			this.mayodat_mc.alpha=1;
			this.bracha_mc.alpha=1;
			this.reviot_mc.alpha=1;
			this.hergelim_mc.alpha=1;
			this.sipor_mc.alpha=1;
			this.zafof_mc.alpha=1;
			this.amitot_mc.alpha=1;
			this.bingo_mc.alpha=1;
			this.shemot_mc.alpha=1;		
			this.Gmekirim_txt.alpha=1;
			this.Kmekirim_txt.alpha=1;
			this.lelo_txt.alpha=1;
			this.lehachin_txt.alpha=1;
			this.ravakot_txt.alpha=1;
			this.shtiya_txt.alpha=1;
			this.holedet_txt.alpha=1;
			this.mishpach_txt.alpha=1;
			this.gibush_txt.alpha=1;
			this.shtiyared_txt.alpha=0;
			this.ravakimred_txt.alpha=0;
			this.giboosh_txt.alpha=0;
			this.hicerot_txt.alpha=1;
			this.holedetred_txt.alpha=0;
			this.babaitred_txt.alpha=0;
			this.Gmekir_txt.alpha=0;
			this.Ghadashim_txt.alpha=1;
			this.Khadashim_txt.alpha=1;
			this.Kmekirimred_txt.alpha=0;
			this.Kmekirim_txt.alpha=1;
			this.lelo_txt.alpha=1;
			this.lelored_txt.alpha=0;
			this.Ghadash_txt.alpha=0;
			this.Kmekirimred_txt.alpha=0;
			this.Ghadashim_txt.alpha=1;
			this.Khadashim_txt.alpha=1;
			this.Khadashimred_txt.alpha=0;
		}
		
		//שתי אמיתות//
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.amitot_mc.addEventListener("mouseover", fl_MouseOverHandler_13.bind(this));
		
		function fl_MouseOverHandler_13()
		{
		this.zug_mc.alpha=0.2;
		    this.zyor_mc.alpha=0.2;
			this.kerach_mc.alpha=0.2;
			this.milatkesem_mc.alpha=0.2;
			this.sod_mc.alpha=0.2;
			this.tenkav_mc.alpha=0.2;
			this.teimot_mc.alpha=0.2;
			this.shikov_mc.alpha=0.2;
			this.mayodat_mc.alpha=0.2;
			this.levush_mc.alpha=0.2;
			this.meshotaf_mc.alpha=0.2;
			this.bracha_mc.alpha=0.2;
			this.reviot_mc.alpha=0.2;
			this.hergelim_mc.alpha=0.2;
			this.sipor_mc.alpha=0.2;
			this.zafof_mc.alpha=0.2;
			this.blyain_mc.alpha=0.2;
			this.bingo_mc.alpha=0.2;
			this.shemot_mc.alpha=0.2;
			this.ravakot_txt.alpha=0;
			this.ravakimred_txt.alpha=0;
			this.giboosh_txt.alpha=1;
			this.shtiyared_txt.alpha=1;
		    this.Gmekirim_txt.alpha=0.1;
			this.Kmekirim_txt.alpha=0.1;
			this.lelo_txt.alpha=0.1;
			this.lehachin_txt.alpha=0.1;
			this.ravakot_txt.alpha=0.1;
			this.shtiya_txt.alpha=0.1;
			this.holedet_txt.alpha=0.1;
			this.mishpach_txt.alpha=0.1;
			this.gibush_txt.alpha=0.1;
			this.hicerot_txt.alpha=0.1;
			this.holedetred_txt.alpha=0;
			this.babaitred_txt.alpha=1;
			this.babait_txt.alpha=0.1;
			this.Gmekir_txt.alpha=1;
			this.Ghadashim_txt.alpha=0.1;
		    this.Khadashim_txt.alpha=0.1;
			this.lelored_txt.alpha=0;
			this.Ghadash_txt.alpha=0.1;
			this.Khadashimred_txt.alpha=0;
			this.Ghadashim_txt.alpha=0;
			this.Khadashim_txt.alpha=0.1;
			this.Kmekirimred_txt.alpha=1;
			
		}
		
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.amitot_mc.addEventListener("mouseout", fl_MouseOutHandler_16.bind(this));
		
		function fl_MouseOutHandler_16()
		{
		this.zug_mc.alpha=1;
			this.zyor_mc.alpha=1;
			this.kerach_mc.alpha=1;
			this.milatkesem_mc.alpha=1;
			this.sod_mc.alpha=1;
			this.tenkav_mc.alpha=1;
			this.teimot_mc.alpha=1;
			this.shikov_mc.alpha=1;
			this.blyain_mc.alpha=1;
			this.levush_mc.alpha=1;
			this.meshotaf_mc.alpha=1;
			this.mayodat_mc.alpha=1;
			this.bracha_mc.alpha=1;
			this.reviot_mc.alpha=1;
			this.hergelim_mc.alpha=1;
			this.sipor_mc.alpha=1;
			this.zafof_mc.alpha=1;
			this.amitot_mc.alpha=1;
			this.bingo_mc.alpha=1;
			this.shemot_mc.alpha=1;		
			this.Gmekirim_txt.alpha=1;
			this.Kmekirim_txt.alpha=1;
			this.lelo_txt.alpha=1;
			this.lehachin_txt.alpha=1;
			this.ravakot_txt.alpha=1;
			this.shtiya_txt.alpha=1;
			this.holedet_txt.alpha=1;
			this.mishpach_txt.alpha=1;
			this.gibush_txt.alpha=1;
			this.shtiyared_txt.alpha=0;
			this.ravakimred_txt.alpha=0;
			this.giboosh_txt.alpha=0;
			this.hicerot_txt.alpha=1;
			this.holedetred_txt.alpha=0;
			this.babaitred_txt.alpha=0;
			this.Gmekir_txt.alpha=0;
			this.Ghadashim_txt.alpha=1;
			this.Khadashim_txt.alpha=1;
			this.Kmekirimred_txt.alpha=0;
			this.Kmekirim_txt.alpha=1;
			this.lelo_txt.alpha=1;
			this.lelored_txt.alpha=0;
			this.Ghadash_txt.alpha=0;
			this.Kmekirimred_txt.alpha=0;
			this.Ghadashim_txt.alpha=1;
			this.Khadashim_txt.alpha=1;
			this.Khadashimred_txt.alpha=0;
			this.giboosh_txt.alpha=0;
			this.babait_txt.alpha=1;
		}
		//מילת הקסם//
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.milatkesem_mc.addEventListener("mouseover", fl_MouseOverHandler_14.bind(this));
		
		function fl_MouseOverHandler_14()
		{
		this.zug_mc.alpha=0.2;
		    this.zyor_mc.alpha=0.2;
			this.kerach_mc.alpha=0.2;
			this.amitot_mc.alpha=0.2;
			this.sod_mc.alpha=0.2;
			this.tenkav_mc.alpha=0.2;
			this.teimot_mc.alpha=0.2;
			this.shikov_mc.alpha=0.2;
			this.mayodat_mc.alpha=0.2;
			this.levush_mc.alpha=0.2;
			this.meshotaf_mc.alpha=0.2;
			this.bracha_mc.alpha=0.2;
			this.reviot_mc.alpha=0.2;
			this.hergelim_mc.alpha=0.2;
			this.sipor_mc.alpha=0.2;
			this.zafof_mc.alpha=0.2;
			this.blyain_mc.alpha=0.2;
			this.bingo_mc.alpha=0.2;
			this.shemot_mc.alpha=0.2;
			this.ravakot_txt.alpha=0;
			this.ravakimred_txt.alpha=1;
			this.giboosh_txt.alpha=1;
			this.shtiyared_txt.alpha=0;
		    this.Gmekirim_txt.alpha=0.1;
			this.Kmekirim_txt.alpha=0.1;
			this.lelo_txt.alpha=0.1;
			this.lehachin_txt.alpha=0.1;
			this.ravakot_txt.alpha=0.1;
			this.shtiya_txt.alpha=0.1;
			this.holedet_txt.alpha=0.1;
			this.mishpach_txt.alpha=0.1;
			this.gibush_txt.alpha=0.1;
			this.hicerot_txt.alpha=0.1;
			this.holedetred_txt.alpha=1;
			this.babaitred_txt.alpha=0;
			this.babait_txt.alpha=0.1;
			this.Gmekir_txt.alpha=1;
			this.Ghadashim_txt.alpha=0.1;
		    this.Khadashim_txt.alpha=0.1;
			this.lelored_txt.alpha=0;
			this.Ghadash_txt.alpha=0.1;
			this.Khadashimred_txt.alpha=0;
			this.Ghadashim_txt.alpha=0;
			this.Khadashim_txt.alpha=0.1;
			this.Kmekirimred_txt.alpha=0;
			this.mishred_txt.alpha=1;
			this.lhhchinred_txt.alpha=1;
		}
		
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.milatkesem_mc.addEventListener("mouseout", fl_MouseOutHandler_17.bind(this));
		
		function fl_MouseOutHandler_17()
		{
		this.zug_mc.alpha=1;
			this.zyor_mc.alpha=1;
			this.kerach_mc.alpha=1;
			this.amitot_mc.alpha=1;
			this.sod_mc.alpha=1;
			this.tenkav_mc.alpha=1;
			this.teimot_mc.alpha=1;
			this.shikov_mc.alpha=1;
			this.blyain_mc.alpha=1;
			this.levush_mc.alpha=1;
			this.meshotaf_mc.alpha=1;
			this.mayodat_mc.alpha=1;
			this.bracha_mc.alpha=1;
			this.reviot_mc.alpha=1;
			this.hergelim_mc.alpha=1;
			this.sipor_mc.alpha=1;
			this.zafof_mc.alpha=1;
			this.amitot_mc.alpha=1;
			this.bingo_mc.alpha=1;
			this.shemot_mc.alpha=1;		
			this.Gmekirim_txt.alpha=1;
			this.Kmekirim_txt.alpha=1;
			this.lelo_txt.alpha=1;
			this.lehachin_txt.alpha=1;
			this.ravakot_txt.alpha=1;
			this.shtiya_txt.alpha=1;
			this.holedet_txt.alpha=1;
			this.mishpach_txt.alpha=0;
			this.gibush_txt.alpha=1;
			this.shtiyared_txt.alpha=0;
			this.ravakimred_txt.alpha=0;
			this.giboosh_txt.alpha=0;
			this.hicerot_txt.alpha=1;
			this.holedetred_txt.alpha=0;
			this.babaitred_txt.alpha=0;
			this.Gmekir_txt.alpha=0;
			this.Ghadashim_txt.alpha=1;
			this.Khadashim_txt.alpha=1;
			this.Kmekirimred_txt.alpha=0;
			this.Kmekirim_txt.alpha=1;
			this.lelo_txt.alpha=1;
			this.lelored_txt.alpha=0;
			this.Ghadash_txt.alpha=0;
			this.Kmekirimred_txt.alpha=0;
			this.Ghadashim_txt.alpha=1;
			this.Khadashim_txt.alpha=1;
			this.Khadashimred_txt.alpha=0;
			this.giboosh_txt.alpha=0;
			this.babait_txt.alpha=1;
			this.mishred_txt.alpha=0;
			this.lhhchinred_txt.alpha=0;
			this.mishpach_txt.alpha=1;
		}
		
		//שילוב זרועות//
		
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.shikov_mc.addEventListener("mouseover", fl_MouseOverHandler_15.bind(this));
		
		function fl_MouseOverHandler_15()
		{
		this.zug_mc.alpha=0.2;
		    this.zyor_mc.alpha=0.2;
			this.kerach_mc.alpha=0.2;
			this.amitot_mc.alpha=0.2;
			this.sod_mc.alpha=0.2;
			this.tenkav_mc.alpha=0.2;
			this.teimot_mc.alpha=0.2;
			this.milatkesem_mc.alpha=0.2;
			this.mayodat_mc.alpha=0.2;
			this.levush_mc.alpha=0.2;
			this.meshotaf_mc.alpha=0.2;
			this.bracha_mc.alpha=0.2;
			this.reviot_mc.alpha=0.2;
			this.hergelim_mc.alpha=0.2;
			this.sipor_mc.alpha=0.2;
			this.zafof_mc.alpha=0.2;
			this.blyain_mc.alpha=0.2;
			this.bingo_mc.alpha=0.2;
			this.shemot_mc.alpha=0.2;
			this.ravakot_txt.alpha=0.1;
			this.ravakimred_txt.alpha=0;
			this.giboosh_txt.alpha=1;
			this.shtiyared_txt.alpha=1;
		    this.Gmekirim_txt.alpha=0.1;
			this.Kmekirim_txt.alpha=0.1;
			this.lelo_txt.alpha=0.1;
			this.lehachin_txt.alpha=0.1;
			this.ravakot_txt.alpha=0.1;
			this.shtiya_txt.alpha=0.1;
			this.holedet_txt.alpha=0.1;
			this.mishpach_txt.alpha=0.1;
			this.gibush_txt.alpha=0.1;
			this.hicerot_txt.alpha=0.1;
			this.holedetred_txt.alpha=1;
			this.babaitred_txt.alpha=1;
			this.babait_txt.alpha=0.1;
			this.Gmekir_txt.alpha=0;
			this.Ghadashim_txt.alpha=0.1;
		    this.Khadashim_txt.alpha=0.1;
			this.lelored_txt.alpha=0;
			this.Ghadash_txt.alpha=0.1;
			this.Khadashimred_txt.alpha=1;
			this.Ghadashim_txt.alpha=0;
			this.Khadashim_txt.alpha=0.1;
			this.Kmekirimred_txt.alpha=1;
			this.mishred_txt.alpha=1;
			this.lhhchinred_txt.alpha=0;
			this.hikrothover_txt.alpha=1;
			this.hicerot_txt.alpha=0;
		}
		
		
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.shikov_mc.addEventListener("mouseout", fl_MouseOutHandler_19.bind(this));
		
		function fl_MouseOutHandler_19()
		{
		this.zug_mc.alpha=1;
			this.zyor_mc.alpha=1;
			this.kerach_mc.alpha=1;
			this.amitot_mc.alpha=1;
			this.sod_mc.alpha=1;
			this.tenkav_mc.alpha=1;
			this.teimot_mc.alpha=1;
			this.milatkesem_mc.alpha=1;
			this.blyain_mc.alpha=1;
			this.levush_mc.alpha=1;
			this.meshotaf_mc.alpha=1;
			this.mayodat_mc.alpha=1;
			this.bracha_mc.alpha=1;
			this.reviot_mc.alpha=1;
			this.hergelim_mc.alpha=1;
			this.sipor_mc.alpha=1;
			this.zafof_mc.alpha=1;
			this.amitot_mc.alpha=1;
			this.bingo_mc.alpha=1;
			this.shemot_mc.alpha=1;		
			this.Gmekirim_txt.alpha=1;
			this.Kmekirim_txt.alpha=1;
			this.lelo_txt.alpha=1;
			this.lehachin_txt.alpha=1;
			this.ravakot_txt.alpha=1;
			this.shtiya_txt.alpha=1;
			this.holedet_txt.alpha=1;
			this.mishpach_txt.alpha=0;
			this.gibush_txt.alpha=1;
			this.shtiyared_txt.alpha=0;
			this.ravakimred_txt.alpha=0;
			this.giboosh_txt.alpha=0;
			this.hicerot_txt.alpha=1;
			this.holedetred_txt.alpha=0;
			this.babaitred_txt.alpha=0;
			this.Gmekir_txt.alpha=0;
			this.Ghadashim_txt.alpha=1;
			this.Khadashim_txt.alpha=1;
			this.Kmekirimred_txt.alpha=0;
			this.Kmekirim_txt.alpha=1;
			this.lelo_txt.alpha=1;
			this.lelored_txt.alpha=0;
			this.Ghadash_txt.alpha=0;
			this.Kmekirimred_txt.alpha=0;
			this.Ghadashim_txt.alpha=1;
			this.Khadashim_txt.alpha=1;
			this.Khadashimred_txt.alpha=0;
			this.giboosh_txt.alpha=0;
			this.babait_txt.alpha=1;
			this.mishred_txt.alpha=0;
			this.lhhchinred_txt.alpha=0;
			this.mishpach_txt.alpha=1;
			this.hikrothover_txt.alpha=0;
		}
		//רביעיות//
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.reviot_mc.addEventListener("mouseover", fl_MouseOverHandler_16.bind(this));
		
		function fl_MouseOverHandler_16()
		{
		this.zug_mc.alpha=0.2;
		    this.zyor_mc.alpha=0.2;
			this.kerach_mc.alpha=0.2;
			this.amitot_mc.alpha=0.2;
			this.sod_mc.alpha=0.2;
			this.tenkav_mc.alpha=0.2;
			this.teimot_mc.alpha=0.2;
			this.milatkesem_mc.alpha=0.2;
			this.mayodat_mc.alpha=0.2;
			this.levush_mc.alpha=0.2;
			this.meshotaf_mc.alpha=0.2;
			this.bracha_mc.alpha=0.2;
			this.shikov_mc.alpha=0.2;
			this.hergelim_mc.alpha=0.2;
			this.sipor_mc.alpha=0.2;
			this.zafof_mc.alpha=0.2;
			this.blyain_mc.alpha=0.2;
			this.bingo_mc.alpha=0.2;
			this.shemot_mc.alpha=0.2;
			this.ravakot_txt.alpha=0.1;
			this.ravakimred_txt.alpha=0;
			this.giboosh_txt.alpha=1;
			this.shtiyared_txt.alpha=0;
		    this.Gmekirim_txt.alpha=0.1;
			this.Kmekirim_txt.alpha=0.1;
			this.lelo_txt.alpha=0.1;
			this.lehachin_txt.alpha=0.1;
			this.ravakot_txt.alpha=0.1;
			this.shtiya_txt.alpha=0.1;
			this.holedet_txt.alpha=0.1;
			this.mishpach_txt.alpha=0.1;
			this.gibush_txt.alpha=0.1;
			this.hicerot_txt.alpha=0.1;
			this.holedetred_txt.alpha=0;
			this.babaitred_txt.alpha=0;
			this.babait_txt.alpha=0.1;
			this.Gmekir_txt.alpha=0;
			this.Ghadashim_txt.alpha=0.1;
		    this.Khadashim_txt.alpha=0.1;
			this.lelored_txt.alpha=0;
			this.Ghadash_txt.alpha=0.1;
			this.Khadashimred_txt.alpha=1;
			this.Ghadashim_txt.alpha=0;
			this.Khadashim_txt.alpha=0.1;
			this.Kmekirimred_txt.alpha=0;
			this.mishred_txt.alpha=0;
			this.lhhchinred_txt.alpha=1;
			this.hikrothover_txt.alpha=1;
			this.hicerot_txt.alpha=0;	
		}
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.reviot_mc.addEventListener("mouseout", fl_MouseOutHandler_20.bind(this));
		
		function fl_MouseOutHandler_20()
		{
		this.zug_mc.alpha=1;
			this.zyor_mc.alpha=1;
			this.kerach_mc.alpha=1;
			this.amitot_mc.alpha=1;
			this.sod_mc.alpha=1;
			this.tenkav_mc.alpha=1;
			this.teimot_mc.alpha=1;
			this.milatkesem_mc.alpha=1;
			this.blyain_mc.alpha=1;
			this.levush_mc.alpha=1;
			this.meshotaf_mc.alpha=1;
			this.mayodat_mc.alpha=1;
			this.bracha_mc.alpha=1;
			this.shikov_mc.alpha=1;
			this.hergelim_mc.alpha=1;
			this.sipor_mc.alpha=1;
			this.zafof_mc.alpha=1;
			this.amitot_mc.alpha=1;
			this.bingo_mc.alpha=1;
			this.shemot_mc.alpha=1;		
			this.Gmekirim_txt.alpha=1;
			this.Kmekirim_txt.alpha=1;
			this.lelo_txt.alpha=1;
			this.lehachin_txt.alpha=1;
			this.ravakot_txt.alpha=1;
			this.shtiya_txt.alpha=1;
			this.holedet_txt.alpha=1;
			this.mishpach_txt.alpha=0;
			this.gibush_txt.alpha=1;
			this.shtiyared_txt.alpha=0;
			this.ravakimred_txt.alpha=0;
			this.giboosh_txt.alpha=0;
			this.hicerot_txt.alpha=1;
			this.holedetred_txt.alpha=0;
			this.babaitred_txt.alpha=0;
			this.Gmekir_txt.alpha=0;
			this.Ghadashim_txt.alpha=1;
			this.Khadashim_txt.alpha=1;
			this.Kmekirimred_txt.alpha=0;
			this.Kmekirim_txt.alpha=1;
			this.lelo_txt.alpha=1;
			this.lelored_txt.alpha=0;
			this.Ghadash_txt.alpha=0;
			this.Kmekirimred_txt.alpha=0;
			this.Ghadashim_txt.alpha=1;
			this.Khadashim_txt.alpha=1;
			this.Khadashimred_txt.alpha=0;
			this.giboosh_txt.alpha=0;
			this.babait_txt.alpha=1;
			this.mishred_txt.alpha=0;
			this.lhhchinred_txt.alpha=0;
			this.mishpach_txt.alpha=1;
			this.hikrothover_txt.alpha=0;	
		}
		//בינגו//
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.bingo_mc.addEventListener("mouseover", fl_MouseOverHandler_17.bind(this));
		
		function fl_MouseOverHandler_17()
		{
		this.zug_mc.alpha=0.2;
		    this.zyor_mc.alpha=0.2;
			this.kerach_mc.alpha=0.2;
			this.amitot_mc.alpha=0.2;
			this.sod_mc.alpha=0.2;
			this.tenkav_mc.alpha=0.2;
			this.teimot_mc.alpha=0.2;
			this.milatkesem_mc.alpha=0.2;
			this.mayodat_mc.alpha=0.2;
			this.levush_mc.alpha=0.2;
			this.meshotaf_mc.alpha=0.2;
			this.bracha_mc.alpha=0.2;
			this.shikov_mc.alpha=0.2;
			this.hergelim_mc.alpha=0.2;
			this.sipor_mc.alpha=0.2;
			this.zafof_mc.alpha=0.2;
			this.blyain_mc.alpha=0.2;
			this.reviot_mc.alpha=0.2;
			this.shemot_mc.alpha=0.2;
			this.ravakot_txt.alpha=0.1;
			this.ravakimred_txt.alpha=0;
			this.giboosh_txt.alpha=1;
			this.shtiyared_txt.alpha=0;
		    this.Gmekirim_txt.alpha=0.1;
			this.Kmekirim_txt.alpha=0.1;
			this.lelo_txt.alpha=0.1;
			this.lehachin_txt.alpha=0.1;
			this.ravakot_txt.alpha=0.1;
			this.shtiya_txt.alpha=0.1;
			this.holedet_txt.alpha=0.1;
			this.mishpach_txt.alpha=0.1;
			this.gibush_txt.alpha=0.1;
			this.hicerot_txt.alpha=0.1;
			this.holedetred_txt.alpha=0;
			this.babaitred_txt.alpha=0;
			this.babait_txt.alpha=0.1;
			this.Gmekir_txt.alpha=1;
			this.Ghadashim_txt.alpha=0.1;
		    this.Khadashim_txt.alpha=0.1;
			this.lelored_txt.alpha=0;
			this.Ghadash_txt.alpha=1;
			this.Khadashimred_txt.alpha=0;
			this.Ghadashim_txt.alpha=0;
			this.Khadashim_txt.alpha=0.1;
			this.Kmekirimred_txt.alpha=0;
			this.mishred_txt.alpha=1;
			this.lhhchinred_txt.alpha=1;
			this.hikrothover_txt.alpha=1;
			this.hicerot_txt.alpha=0;	
		}
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.bingo_mc.addEventListener("mouseout", fl_MouseOutHandler_21.bind(this));
		
		function fl_MouseOutHandler_21()
		{
		this.zug_mc.alpha=1;
			this.zyor_mc.alpha=1;
			this.kerach_mc.alpha=1;
			this.amitot_mc.alpha=1;
			this.sod_mc.alpha=1;
			this.tenkav_mc.alpha=1;
			this.teimot_mc.alpha=1;
			this.milatkesem_mc.alpha=1;
			this.blyain_mc.alpha=1;
			this.levush_mc.alpha=1;
			this.meshotaf_mc.alpha=1;
			this.mayodat_mc.alpha=1;
			this.bracha_mc.alpha=1;
			this.shikov_mc.alpha=1;
			this.hergelim_mc.alpha=1;
			this.sipor_mc.alpha=1;
			this.zafof_mc.alpha=1;
			this.amitot_mc.alpha=1;
			this.reviot_mc.alpha=1;
			this.shemot_mc.alpha=1;		
			this.Gmekirim_txt.alpha=1;
			this.Kmekirim_txt.alpha=1;
			this.lelo_txt.alpha=1;
			this.lehachin_txt.alpha=1;
			this.ravakot_txt.alpha=1;
			this.shtiya_txt.alpha=1;
			this.holedet_txt.alpha=1;
			this.mishpach_txt.alpha=0;
			this.gibush_txt.alpha=1;
			this.shtiyared_txt.alpha=0;
			this.ravakimred_txt.alpha=0;
			this.giboosh_txt.alpha=0;
			this.hicerot_txt.alpha=1;
			this.holedetred_txt.alpha=0;
			this.babaitred_txt.alpha=0;
			this.Gmekir_txt.alpha=0;
			this.Ghadashim_txt.alpha=1;
			this.Khadashim_txt.alpha=1;
			this.Kmekirimred_txt.alpha=0;
			this.Kmekirim_txt.alpha=1;
			this.lelo_txt.alpha=1;
			this.lelored_txt.alpha=0;
			this.Ghadash_txt.alpha=0;
			this.Kmekirimred_txt.alpha=0;
			this.Ghadashim_txt.alpha=1;
			this.Khadashim_txt.alpha=1;
			this.Khadashimred_txt.alpha=0;
			this.giboosh_txt.alpha=0;
			this.babait_txt.alpha=1;
			this.mishred_txt.alpha=0;
			this.lhhchinred_txt.alpha=0;
			this.mishpach_txt.alpha=1;
			this.hikrothover_txt.alpha=0;	
		}
		//סוד//
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.sod_mc.addEventListener("mouseover", fl_MouseOverHandler_18.bind(this));
		
		function fl_MouseOverHandler_18()
		{
		this.zug_mc.alpha=0.2;
		    this.zyor_mc.alpha=0.2;
			this.kerach_mc.alpha=0.2;
			this.amitot_mc.alpha=0.2;
			this.bingo_mc.alpha=0.2;
			this.tenkav_mc.alpha=0.2;
			this.teimot_mc.alpha=0.2;
			this.milatkesem_mc.alpha=0.2;
			this.mayodat_mc.alpha=0.2;
			this.levush_mc.alpha=0.2;
			this.meshotaf_mc.alpha=0.2;
			this.bracha_mc.alpha=0.2;
			this.shikov_mc.alpha=0.2;
			this.hergelim_mc.alpha=0.2;
			this.sipor_mc.alpha=0.2;
			this.zafof_mc.alpha=0.2;
			this.blyain_mc.alpha=0.2;
			this.reviot_mc.alpha=0.2;
			this.shemot_mc.alpha=0.2;
			this.ravakot_txt.alpha=0.1;
			this.ravakimred_txt.alpha=0;
			this.giboosh_txt.alpha=0;
			this.shtiyared_txt.alpha=0;
		    this.Gmekirim_txt.alpha=0.1;
			this.Kmekirim_txt.alpha=0.1;
			this.lelo_txt.alpha=0.1;
			this.lehachin_txt.alpha=0.1;
			this.ravakot_txt.alpha=0.1;
			this.shtiya_txt.alpha=0.1;
			this.holedet_txt.alpha=0.1;
			this.mishpach_txt.alpha=0.1;
			this.gibush_txt.alpha=0.1;
			this.hicerot_txt.alpha=0.1;
			this.holedetred_txt.alpha=0;
			this.babaitred_txt.alpha=0;
			this.babait_txt.alpha=0.1;
			this.Gmekir_txt.alpha=1;
			this.Ghadashim_txt.alpha=0.1;
		    this.Khadashim_txt.alpha=0.1;
			this.lelored_txt.alpha=1;
			this.Ghadash_txt.alpha=1;
			this.Khadashimred_txt.alpha=0;
			this.Ghadashim_txt.alpha=0;
			this.Khadashim_txt.alpha=0.1;
			this.Kmekirimred_txt.alpha=0;
			this.mishred_txt.alpha=0;
			this.lhhchinred_txt.alpha=0;
			this.hikrothover_txt.alpha=1;
			this.hicerot_txt.alpha=0;	
		}
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.sod_mc.addEventListener("mouseout", fl_MouseOutHandler_22.bind(this));
		
		function fl_MouseOutHandler_22()
		{
		this.zug_mc.alpha=1;
			this.zyor_mc.alpha=1;
			this.kerach_mc.alpha=1;
			this.amitot_mc.alpha=1;
			this.bingo_mc.alpha=1;
			this.tenkav_mc.alpha=1;
			this.teimot_mc.alpha=1;
			this.milatkesem_mc.alpha=1;
			this.blyain_mc.alpha=1;
			this.levush_mc.alpha=1;
			this.meshotaf_mc.alpha=1;
			this.mayodat_mc.alpha=1;
			this.bracha_mc.alpha=1;
			this.shikov_mc.alpha=1;
			this.hergelim_mc.alpha=1;
			this.sipor_mc.alpha=1;
			this.zafof_mc.alpha=1;
			this.amitot_mc.alpha=1;
			this.reviot_mc.alpha=1;
			this.shemot_mc.alpha=1;		
			this.Gmekirim_txt.alpha=1;
			this.Kmekirim_txt.alpha=1;
			this.lelo_txt.alpha=1;
			this.lehachin_txt.alpha=1;
			this.ravakot_txt.alpha=1;
			this.shtiya_txt.alpha=1;
			this.holedet_txt.alpha=1;
			this.mishpach_txt.alpha=0;
			this.gibush_txt.alpha=1;
			this.shtiyared_txt.alpha=0;
			this.ravakimred_txt.alpha=0;
			this.giboosh_txt.alpha=0;
			this.hicerot_txt.alpha=1;
			this.holedetred_txt.alpha=0;
			this.babaitred_txt.alpha=0;
			this.Gmekir_txt.alpha=0;
			this.Ghadashim_txt.alpha=1;
			this.Khadashim_txt.alpha=1;
			this.Kmekirimred_txt.alpha=0;
			this.Kmekirim_txt.alpha=1;
			this.lelo_txt.alpha=1;
			this.lelored_txt.alpha=0;
			this.Ghadash_txt.alpha=0;
			this.Kmekirimred_txt.alpha=0;
			this.Ghadashim_txt.alpha=1;
			this.Khadashim_txt.alpha=1;
			this.Khadashimred_txt.alpha=0;
			this.giboosh_txt.alpha=0;
			this.babait_txt.alpha=1;
			this.mishred_txt.alpha=0;
			this.lhhchinred_txt.alpha=0;
			this.mishpach_txt.alpha=1;
			this.hikrothover_txt.alpha=0;	
		}
		//מה אתיודעת//
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.mayodat_mc.addEventListener("mouseover", fl_MouseOverHandler_19.bind(this));
		
		function fl_MouseOverHandler_19()
		{
		this.zug_mc.alpha=0.2;
		    this.zyor_mc.alpha=0.2;
			this.kerach_mc.alpha=0.2;
			this.amitot_mc.alpha=0.2;
			this.bingo_mc.alpha=0.2;
			this.tenkav_mc.alpha=0.2;
			this.teimot_mc.alpha=0.2;
			this.milatkesem_mc.alpha=0.2;
			this.sod_mc.alpha=0.2;
			this.levush_mc.alpha=0.2;
			this.meshotaf_mc.alpha=0.2;
			this.bracha_mc.alpha=0.2;
			this.shikov_mc.alpha=0.2;
			this.hergelim_mc.alpha=0.2;
			this.sipor_mc.alpha=0.2;
			this.zafof_mc.alpha=0.2;
			this.blyain_mc.alpha=0.2;
			this.reviot_mc.alpha=0.2;
			this.shemot_mc.alpha=0.2;
			this.ravakot_txt.alpha=0.1;
			this.ravakimred_txt.alpha=1;
			this.giboosh_txt.alpha=0;
			this.shtiyared_txt.alpha=1;
		    this.Gmekirim_txt.alpha=0.1;
			this.Kmekirim_txt.alpha=0.1;
			this.lelo_txt.alpha=0.1;
			this.lehachin_txt.alpha=0.1;
			this.ravakot_txt.alpha=0.1;
			this.shtiya_txt.alpha=0.1;
			this.holedet_txt.alpha=0.1;
			this.mishpach_txt.alpha=0.1;
			this.gibush_txt.alpha=0.1;
			this.hicerot_txt.alpha=0.1;
			this.holedetred_txt.alpha=1;
			this.babaitred_txt.alpha=0;
			this.babait_txt.alpha=0.1;
			this.Gmekir_txt.alpha=1;
			this.Ghadashim_txt.alpha=0.1;
		    this.Khadashim_txt.alpha=0.1;
			this.lelored_txt.alpha=0;
			this.Ghadash_txt.alpha=1;
			this.Khadashimred_txt.alpha=0;
			this.Ghadashim_txt.alpha=0;
			this.Khadashim_txt.alpha=0.1;
			this.Kmekirimred_txt.alpha=0;
			this.mishred_txt.alpha=0;
			this.lhhchinred_txt.alpha=1;
			this.hikrothover_txt.alpha=1;
			this.hicerot_txt.alpha=0.1;	
		}	
		
		
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.mayodat_mc.addEventListener("mouseout", fl_MouseOutHandler_23.bind(this));
		
		function fl_MouseOutHandler_23()
		{
		this.zug_mc.alpha=1;
			this.zyor_mc.alpha=1;
			this.kerach_mc.alpha=1;
			this.amitot_mc.alpha=1;
			this.bingo_mc.alpha=1;
			this.tenkav_mc.alpha=1;
			this.teimot_mc.alpha=1;
			this.milatkesem_mc.alpha=1;
			this.blyain_mc.alpha=1;
			this.levush_mc.alpha=1;
			this.meshotaf_mc.alpha=1;
			this.sod_mc.alpha=1;
			this.bracha_mc.alpha=1;
			this.shikov_mc.alpha=1;
			this.mayodat_mc.alpha=1;
			this.sipor_mc.alpha=1;
			this.zafof_mc.alpha=1;
			this.amitot_mc.alpha=1;
			this.reviot_mc.alpha=1;
			this.shemot_mc.alpha=1;		
			this.Gmekirim_txt.alpha=1;
			this.Kmekirim_txt.alpha=1;
			this.lelo_txt.alpha=1;
			this.lehachin_txt.alpha=1;
			this.ravakot_txt.alpha=1;
			this.shtiya_txt.alpha=1;
			this.holedet_txt.alpha=1;
			this.mishpach_txt.alpha=0;
			this.gibush_txt.alpha=1;
			this.shtiyared_txt.alpha=0;
			this.ravakimred_txt.alpha=0;
			this.giboosh_txt.alpha=0;
			this.hicerot_txt.alpha=1;
			this.holedetred_txt.alpha=0;
			this.babaitred_txt.alpha=0;
			this.Gmekir_txt.alpha=0;
			this.Ghadashim_txt.alpha=1;
			this.Khadashim_txt.alpha=1;
			this.Kmekirimred_txt.alpha=0;
			this.Kmekirim_txt.alpha=1;
			this.lelo_txt.alpha=1;
			this.lelored_txt.alpha=0;
			this.Ghadash_txt.alpha=0;
			this.Kmekirimred_txt.alpha=0;
			this.Ghadashim_txt.alpha=1;
			this.Khadashim_txt.alpha=1;
			this.Khadashimred_txt.alpha=0;
			this.giboosh_txt.alpha=0;
			this.babait_txt.alpha=1;
			this.mishred_txt.alpha=0;
			this.lhhchinred_txt.alpha=0;
			this.mishpach_txt.alpha=1;
			this.hikrothover_txt.alpha=0;
			 this.hergelim_mc.alpha=1;
		}
		//הרגלים//
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.hergelim_mc.addEventListener("mouseover", fl_MouseOverHandler_20.bind(this));
		
		function fl_MouseOverHandler_20()
		{
		this.zug_mc.alpha=0.2;
		    this.zyor_mc.alpha=0.2;
			this.kerach_mc.alpha=0.2;
			this.amitot_mc.alpha=0.2;
			this.bingo_mc.alpha=0.2;
			this.tenkav_mc.alpha=0.2;
			this.teimot_mc.alpha=0.2;
			this.milatkesem_mc.alpha=0.2;
			this.sod_mc.alpha=0.2;
			this.levush_mc.alpha=0.2;
			this.meshotaf_mc.alpha=0.2;
			this.bracha_mc.alpha=0.2;
			this.shikov_mc.alpha=0.2;
			this.mayodat_mc.alpha=0.2;
			this.sipor_mc.alpha=0.2;
			this.zafof_mc.alpha=0.2;
			this.blyain_mc.alpha=0.2;
			this.reviot_mc.alpha=0.2;
			this.shemot_mc.alpha=0.2;
			this.ravakot_txt.alpha=0.1;
			this.ravakimred_txt.alpha=1;
			this.giboosh_txt.alpha=0;
			this.shtiyared_txt.alpha=0;
		    this.Gmekirim_txt.alpha=0.1;
			this.Kmekirim_txt.alpha=0.1;
			this.lelo_txt.alpha=0.1;
			this.lehachin_txt.alpha=0.1;
			this.ravakot_txt.alpha=0.1;
			this.shtiya_txt.alpha=0.1;
			this.holedet_txt.alpha=0.1;
			this.mishpach_txt.alpha=0.1;
			this.gibush_txt.alpha=0.1;
			this.hicerot_txt.alpha=0.1;
			this.holedetred_txt.alpha=1;
			this.babaitred_txt.alpha=0;
			this.babait_txt.alpha=0.1;
			this.Gmekir_txt.alpha=1;
			this.Ghadashim_txt.alpha=0.1;
		    this.Khadashim_txt.alpha=0.1;
			this.lelored_txt.alpha=0;
			this.Ghadash_txt.alpha=1;
			this.Khadashimred_txt.alpha=0;
			this.Ghadashim_txt.alpha=0;
			this.Khadashim_txt.alpha=0.1;
			this.Kmekirimred_txt.alpha=0;
			this.mishred_txt.alpha=0;
			this.lhhchinred_txt.alpha=1;
			this.hikrothover_txt.alpha=1;
			this.hicerot_txt.alpha=0.1;
		}
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.hergelim_mc.addEventListener("mouseout", fl_MouseOutHandler_24.bind(this));
		
		function fl_MouseOutHandler_24()
		{
		this.zug_mc.alpha=1;
			this.zyor_mc.alpha=1;
			this.kerach_mc.alpha=1;
			this.amitot_mc.alpha=1;
			this.bingo_mc.alpha=1;
			this.tenkav_mc.alpha=1;
			this.teimot_mc.alpha=1;
			this.milatkesem_mc.alpha=1;
			this.blyain_mc.alpha=1;
			this.levush_mc.alpha=1;
			this.meshotaf_mc.alpha=1;
			this.sod_mc.alpha=1;
			this.bracha_mc.alpha=1;
			this.shikov_mc.alpha=1;
			this.mayodat_mc.alpha=1;
			this.sipor_mc.alpha=1;
			this.zafof_mc.alpha=1;
			this.amitot_mc.alpha=1;
			this.reviot_mc.alpha=1;
			this.shemot_mc.alpha=1;		
			this.Gmekirim_txt.alpha=1;
			this.Kmekirim_txt.alpha=1;
			this.lelo_txt.alpha=1;
			this.lehachin_txt.alpha=1;
			this.ravakot_txt.alpha=1;
			this.shtiya_txt.alpha=1;
			this.holedet_txt.alpha=1;
			this.mishpach_txt.alpha=0;
			this.gibush_txt.alpha=1;
			this.shtiyared_txt.alpha=0;
			this.ravakimred_txt.alpha=0;
			this.giboosh_txt.alpha=0;
			this.hicerot_txt.alpha=1;
			this.holedetred_txt.alpha=0;
			this.babaitred_txt.alpha=0;
			this.Gmekir_txt.alpha=0;
			this.Ghadashim_txt.alpha=1;
			this.Khadashim_txt.alpha=1;
			this.Kmekirimred_txt.alpha=0;
			this.Kmekirim_txt.alpha=1;
			this.lelo_txt.alpha=1;
			this.lelored_txt.alpha=0;
			this.Ghadash_txt.alpha=0;
			this.Kmekirimred_txt.alpha=0;
			this.Ghadashim_txt.alpha=1;
			this.Khadashim_txt.alpha=1;
			this.Khadashimred_txt.alpha=0;
			this.giboosh_txt.alpha=0;
			this.babait_txt.alpha=1;
			this.mishred_txt.alpha=0;
			this.lhhchinred_txt.alpha=0;
			this.mishpach_txt.alpha=1;
			this.hikrothover_txt.alpha=0;
		    this.hergelim_mc.alpha=1;
		}
		//כדור//
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.shemot_mc.addEventListener("mouseover", fl_MouseOverHandler_21.bind(this));
		
		function fl_MouseOverHandler_21()
		{
		this.zug_mc.alpha=0.2;
		    this.zyor_mc.alpha=0.2;
			this.kerach_mc.alpha=0.2;
			this.amitot_mc.alpha=0.2;
			this.bingo_mc.alpha=0.2;
			this.tenkav_mc.alpha=0.2;
			this.teimot_mc.alpha=0.2;
			this.milatkesem_mc.alpha=0.2;
			this.sod_mc.alpha=0.2;
			this.levush_mc.alpha=0.2;
			this.meshotaf_mc.alpha=0.2;
			this.bracha_mc.alpha=0.2;
			this.shikov_mc.alpha=0.2;
			this.mayodat_mc.alpha=0.2;
			this.sipor_mc.alpha=0.2;
			this.zafof_mc.alpha=0.2;
			this.blyain_mc.alpha=0.2;
			this.reviot_mc.alpha=0.2;
			this.hergelim_mc.alpha=0.2;
			this.ravakot_txt.alpha=0.1;
			this.ravakimred_txt.alpha=0;
			this.giboosh_txt.alpha=1;
			this.shtiyared_txt.alpha=0;
		    this.Gmekirim_txt.alpha=0.1;
			this.Kmekirim_txt.alpha=0.1;
			this.lelo_txt.alpha=0.1;
			this.lehachin_txt.alpha=0.1;
			this.ravakot_txt.alpha=0.1;
			this.shtiya_txt.alpha=0.1;
			this.holedet_txt.alpha=0.1;
			this.mishpach_txt.alpha=0.1;
			this.gibush_txt.alpha=0.1;
			this.hicerot_txt.alpha=0.1;
			this.holedetred_txt.alpha=1;
			this.babaitred_txt.alpha=1;
			this.babait_txt.alpha=0.1;
			this.Gmekir_txt.alpha=1;
			this.Ghadashim_txt.alpha=0.1;
		    this.Khadashim_txt.alpha=0.1;
			this.lelored_txt.alpha=0;
			this.Ghadash_txt.alpha=1;
			this.Khadashimred_txt.alpha=0;
			this.Ghadashim_txt.alpha=0;
			this.Khadashim_txt.alpha=0.1;
			this.Kmekirimred_txt.alpha=0;
			this.mishred_txt.alpha=1;
			this.lhhchinred_txt.alpha=1;
			this.hikrothover_txt.alpha=1;
			this.hicerot_txt.alpha=0;	
		}
		
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.shemot_mc.addEventListener("mouseout", fl_MouseOutHandler_25.bind(this));
		
		function fl_MouseOutHandler_25()
		{
		this.zug_mc.alpha=1;
			this.zyor_mc.alpha=1;
			this.kerach_mc.alpha=1;
			this.amitot_mc.alpha=1;
			this.bingo_mc.alpha=1;
			this.tenkav_mc.alpha=1;
			this.teimot_mc.alpha=1;
			this.milatkesem_mc.alpha=1;
			this.blyain_mc.alpha=1;
			this.levush_mc.alpha=1;
			this.meshotaf_mc.alpha=1;
			this.sod_mc.alpha=1;
			this.bracha_mc.alpha=1;
			this.shikov_mc.alpha=1;
			this.mayodat_mc.alpha=1;
			this.sipor_mc.alpha=1;
			this.zafof_mc.alpha=1;
			this.amitot_mc.alpha=1;
			this.reviot_mc.alpha=1;
			this.hergelim_mc.alpha=1;		
			this.Gmekirim_txt.alpha=1;
			this.Kmekirim_txt.alpha=1;
			this.lelo_txt.alpha=1;
			this.lehachin_txt.alpha=1;
			this.ravakot_txt.alpha=1;
			this.shtiya_txt.alpha=1;
			this.holedet_txt.alpha=1;
			this.mishpach_txt.alpha=0;
			this.gibush_txt.alpha=1;
			this.shtiyared_txt.alpha=0;
			this.ravakimred_txt.alpha=0;
			this.giboosh_txt.alpha=0;
			this.hicerot_txt.alpha=1;
			this.holedetred_txt.alpha=0;
			this.babaitred_txt.alpha=0;
			this.Gmekir_txt.alpha=0;
			this.Ghadashim_txt.alpha=1;
			this.Khadashim_txt.alpha=1;
			this.Kmekirimred_txt.alpha=0;
			this.Kmekirim_txt.alpha=1;
			this.lelo_txt.alpha=1;
			this.lelored_txt.alpha=0;
			this.Ghadash_txt.alpha=0;
			this.Kmekirimred_txt.alpha=0;
			this.Ghadashim_txt.alpha=1;
			this.Khadashim_txt.alpha=1;
			this.Khadashimred_txt.alpha=0;
			this.giboosh_txt.alpha=0;
			this.babait_txt.alpha=1;
			this.mishred_txt.alpha=0;
			this.lhhchinred_txt.alpha=0;
			this.mishpach_txt.alpha=1;
			this.hikrothover_txt.alpha=0;	
		}
		
		//רווקות
		
		this.ravakot_txt.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_2()
		{
			
			this.zug_mc.gotoAndPlay(2);
		    this.sod_mc.gotoAndPlay(2);
			this.tenkav_mc.gotoAndPlay(2);
			this.shikov_mc.gotoAndPlay(2);
			this.meshotaf_mc.gotoAndPlay(2);
			this.reviot_mc.gotoAndPlay(2);
			this.shemot_mc.gotoAndPlay(2);
			this.sipor_mc.gotoAndPlay(2);
			this.bingo_mc.gotoAndPlay(2);
			this.amitot_mc.gotoAndPlay(2);
			this.kerach_mc.gotoAndPlay(2);
			this.zyor_mc.gotoAndPlay(2);
			this.clean.alpha=1;
			this.hicerot_txt.mouseEnabled=false;
			this.r2.mouseEnabled=false;
			this.hicerot_txt.alpha=0.1;
			this.gibush_txt.mouseEnabled=false;
			this.r3.mouseEnabled=false;
			this.gibush_txt.alpha=0.1;
			this.holedet_txt.mouseEnabled=false;
			this.r4.mouseEnabled=false;
			this.holedet_txt.alpha=0.1;
			this.shtiya_txt.mouseEnabled=false;
			this.r5.mouseEnabled=false;
			this.shtiya_txt.alpha=0.1;
			this.mishpach_txt.mouseEnabled=false;
			this.r6.mouseEnabled=false;
			this.mishpach_txt.alpha=0.1;
			this.zug_mc.mouseEnabled=false;
		    this.sod_mc.mouseEnabled=false;
			this.tenkav_mc.mouseEnabled=false;
			this.shikov_mc.mouseEnabled=false;
			this.meshotaf_mc.mouseEnabled=false;
			this.reviot_mc.mouseEnabled=false;
			this.shemot_mc.mouseEnabled=false;
			this.sipor_mc.mouseEnabled=false;
			this.bingo_mc.mouseEnabled=false;
			this.amitot_mc.mouseEnabled=false;
			this.kerach_mc.mouseEnabled=false;
			this.zyor_mc.mouseEnabled=false;
		
		
		}
		
		//היכרות
		
		this.hicerot_txt.addEventListener("click", fl_Click1_2.bind(this));
		
		function fl_Click1_2()
		{
			
			this.shikov_mc.gotoAndPlay(2);
			this.teimot_mc.gotoAndPlay(2);
			this.tenkav_mc.gotoAndPlay(2);
			this.levush_mc.gotoAndPlay(2);
			this.mayodat_mc.gotoAndPlay(2);
			this.bracha_mc.gotoAndPlay(2);
			this.meshotaf_mc.gotoAndPlay(2);
			this.hergelim_mc.gotoAndPlay(2);
			this.blyain_mc.gotoAndPlay(2);
			this.zafof_mc.gotoAndPlay(2);
			this.sipor_mc.gotoAndPlay(2);
			this.amitot_mc.gotoAndPlay(2);
			this.zyor_mc.gotoAndPlay(2);
			this.clean.alpha=1;
			this.ravakot_txt.mouseEnabled=false;
			this.ravakot_txt.alpha=0.1;
			this.gibush_txt.mouseEnabled=false;
			this.r3.mouseEnabled=false;
			this.gibush_txt.alpha=0.1;
			this.holedet_txt.mouseEnabled=false;
			this.r4.mouseEnabled=false;
			this.holedet_txt.alpha=0.1;
			this.shtiya_txt.mouseEnabled=false;
			this.r5.mouseEnabled=false;
			this.shtiya_txt.alpha=0.1;
			this.mishpach_txt.mouseEnabled=false;
			this.r6.mouseEnabled=false;
			this.mishpach_txt.alpha=0.1;
			this.shikov_mc.mouseEnabled=false;
			this.teimot_mc.mouseEnabled=false;
			this.tenkav_mc.mouseEnabled=false;
			this.levush_mc.mouseEnabled=false;
			this.mayodat_mc.mouseEnabled=false;
			this.bracha_mc.mouseEnabled=false;
			this.meshotaf_mc.mouseEnabled=false;
			this.hergelim_mc.mouseEnabled=false;
			this.blyain_mc.mouseEnabled=false;
			this.zafof_mc.mouseEnabled=false;
			this.sipor_mc.mouseEnabled=false;
			this.amitot_mc.mouseEnabled=false;
			this.zyor_mc.mouseEnabled=false;
		
		
		}
		
		//גיבוש
		
		this.gibush_txt.addEventListener("click", fl_Click2_2.bind(this));
		
		function fl_Click2_2()
		{
			this.sod_mc.gotoAndPlay(2);
			this.mayodat_mc.gotoAndPlay(2);
			this.bracha_mc.gotoAndPlay(2);
			this.hergelim_mc.gotoAndPlay(2);
			this.blyain_mc.gotoAndPlay(2);
			this.clean.alpha=1;
			this.ravakot_txt.mouseEnabled=false;
			this.ravakot_txt.alpha=0.1;
			this.hicerot_txt.mouseEnabled=false;
			this.r2.mouseEnabled=false;
			this.hicerot_txt.alpha=0.1;
			this.holedet_txt.mouseEnabled=false;
			this.r4.mouseEnabled=false;
			this.holedet_txt.alpha=0.1;
			this.shtiya_txt.mouseEnabled=false;
			this.r5.mouseEnabled=false;
			this.shtiya_txt.alpha=0.1;
			this.mishpach_txt.mouseEnabled=false;
			this.r6.mouseEnabled=false;
			this.mishpach_txt.alpha=0.1;
			this.sod_mc.mouseEnabled=false;
			this.mayodat_mc.mouseEnabled=false;
			this.bracha_mc.mouseEnabled=false;
			this.hergelim_mc.mouseEnabled=false;
			this.blyain_mc.mouseEnabled=false;
		
		
		}
		//ימי הודלת
		
		this.holedet_txt.addEventListener("click", fl_Click3_2.bind(this));
		
		function fl_Click3_2()
		{
		    this.sod_mc.gotoAndPlay(2);
			this.tenkav_mc.gotoAndPlay(2);
			this.zug_mc.gotoAndPlay(2);
			this.reviot_mc.gotoAndPlay(2);
			this.blyain_mc.gotoAndPlay(2);
			this.sipor_mc.gotoAndPlay(2);
			this.bingo_mc.gotoAndPlay(2);
			this.amitot_mc.gotoAndPlay(2);
			this.kerach_mc.gotoAndPlay(2);
			this.clean.alpha=1;
			this.ravakot_txt.mouseEnabled=false;
			this.ravakot_txt.alpha=0.1;
			this.hicerot_txt.mouseEnabled=false;
			this.r2.mouseEnabled=false;
			this.hicerot_txt.alpha=0.1;
			this.gibush_txt.mouseEnabled=false;
			this.r3.mouseEnabled=false;
			this.gibush_txt.alpha=0.1;
			this.shtiya_txt.mouseEnabled=false;
			this.r5.mouseEnabled=false;
			this.shtiya_txt.alpha=0.1;
			this.mishpach_txt.mouseEnabled=false;
			this.r6.mouseEnabled=false;
			this.mishpach_txt.alpha=0.1;
			this.sod_mc.mouseEnabled=false;
			this.tenkav_mc.mouseEnabled=false;
			this.zug_mc.mouseEnabled=false;
			this.reviot_mc.mouseEnabled=false;
			this.blyain_mc.mouseEnabled=false;
			this.sipor_mc.mouseEnabled=false;
			this.bingo_mc.mouseEnabled=false;
			this.amitot_mc.mouseEnabled=false;
			this.kerach_mc.mouseEnabled=false;
		
		}
		//שתיה
		
		this.shtiya_txt.addEventListener("click", fl_Click4_2.bind(this));
		
		function fl_Click4_2()
		{
			this.sod_mc.gotoAndPlay(2);
			this.milatkesem_mc.gotoAndPlay(2)
			this.bracha_mc.gotoAndPlay(2);;
			this.zug_mc.gotoAndPlay(2);
			this.tenkav_mc.gotoAndPlay(2);
			this.meshotaf_mc.gotoAndPlay(2);
			this.reviot_mc.gotoAndPlay(2);
			this.hergelim_mc.gotoAndPlay(2);
			this.blyain_mc.gotoAndPlay(2);
			this.bingo_mc.gotoAndPlay(2);
			this.sipor_mc.gotoAndPlay(2);
			this.amitot_mc.gotoAndPlay(2);
			this.shemot_mc.gotoAndPlay(2);
			this.kerach_mc.gotoAndPlay(2);
		    this.clean.alpha=1;
			this.ravakot_txt.mouseEnabled=false;
			this.ravakot_txt.alpha=0.1;
			this.hicerot_txt.mouseEnabled=false;
			this.r2.mouseEnabled=false;
			this.hicerot_txt.alpha=0.1;
			this.gibush_txt.mouseEnabled=false;
			this.r3.mouseEnabled=false;
			this.gibush_txt.alpha=0.1;
		    this.holedet_txt.mouseEnabled=false;
			this.r4.mouseEnabled=false;
			this.holedet_txt.alpha=0.1;
			this.mishpach_txt.mouseEnabled=false;
			this.r6.mouseEnabled=false;
			this.mishpach_txt.alpha=0.1;
			this.sod_mc.mouseEnabled=false;
			this.milatkesem_mc.mouseEnabled=false;
			this.bracha_mc.mouseEnabled=false;
			this.zug_mc.mouseEnabled=false;
			this.tenkav_mc.mouseEnabled=false;
			this.meshotaf_mc.mouseEnabled=false;
			this.reviot_mc.mouseEnabled=false;
			this.hergelim_mc.mouseEnabled=false;
			this.blyain_mc.mouseEnabled=false;
			this.bingo_mc.mouseEnabled=false;
			this.sipor_mc.mouseEnabled=false;
			this.amitot_mc.mouseEnabled=false;
			this.shemot_mc.mouseEnabled=false;
			this.kerach_mc.mouseEnabled=false;
		
		
		
		}
		//משפחה
		
		this.mishpach_txt.addEventListener("click", fl_Click5_2.bind(this));
		
		function fl_Click5_2()
		{
			this.sod_mc.gotoAndPlay(2);
			this.teimot_mc.gotoAndPlay(2);
			this.mayodat_mc.gotoAndPlay(2);
			this.bracha_mc.gotoAndPlay(2);
			this.zug_mc.gotoAndPlay(2);
			this.hergelim_mc.gotoAndPlay(2);
			this.reviot_mc.gotoAndPlay(2);
			this.blyain_mc.gotoAndPlay(2);
			this.amitot_mc.gotoAndPlay(2);
			this.kerach_mc.gotoAndPlay(2);
		    this.clean.alpha=1;
			this.ravakot_txt.mouseEnabled=false;
			this.ravakot_txt.alpha=0.1;
			this.hicerot_txt.mouseEnabled=false;
			this.r2.mouseEnabled=false;
			this.hicerot_txt.alpha=0.1;
			this.gibush_txt.mouseEnabled=false;
			this.r3.mouseEnabled=false;
			this.gibush_txt.alpha=0.1;
			this.holedet_txt.mouseEnabled=false;
			this.r4.mouseEnabled=false;
			this.holedet_txt.alpha=0.1;
			this.shtiya_txt.mouseEnabled=false;
			this.r5.mouseEnabled=false;
			this.shtiya_txt.alpha=0.1;
			this.sod_mc.mouseEnabled=false;
			this.teimot_mc.mouseEnabled=false;
			this.mayodat_mc.mouseEnabled=false;
			this.bracha_mc.mouseEnabled=false;
			this.zug_mc.mouseEnabled=false;
			this.hergelim_mc.mouseEnabled=false;
			this.reviot_mc.mouseEnabled=false;
			this.blyain_mc.mouseEnabled=false;
			this.amitot_mc.mouseEnabled=false;
			this.kerach_mc.mouseEnabled=false;
		
		}
		
		
		this.lelo_txt.addEventListener("click", fl_Click6_2.bind(this));
		
		function fl_Click6_2()
		{
			this.tenkav_mc.gotoAndPlay(2);
			this.levush_mc.gotoAndPlay(2);
			this.mayodat_mc.gotoAndPlay(2);
			this.shikov_mc.gotoAndPlay(2);
			this.bracha_mc.gotoAndPlay(2);
			this.zug_mc.gotoAndPlay(2);
			this.hergelim_mc.gotoAndPlay(2);
			this.reviot_mc.gotoAndPlay(2);
			this.zafof_mc.gotoAndPlay(2);
			this.sipor_mc.gotoAndPlay(2);
			this.shemot_mc.gotoAndPlay(2);
			this.bingo_mc.gotoAndPlay(2);
			this.amitot_mc.gotoAndPlay(2);
			this.kerach_mc.gotoAndPlay(2);
			this.zyor_mc.gotoAndPlay(2);
			this.clean.alpha=1;
			this.babait_txt.mouseEnabled=false;
			this.r8.mouseEnabled=false;
			this.babait_txt.alpha=0.1;
			this.lehachin_txt.mouseEnabled=false;
			this.r9.mouseEnabled=false;
			this.lehachin_txt.alpha=0.1;
			this.tenkav_mc.mouseEnabled=false;
			this.levush_mc.mouseEnabled=false;
			this.mayodat_mc.mouseEnabled=false;
			this.shikov_mc.mouseEnabled=false;
			this.bracha_mc.mouseEnabled=false;
			this.zug_mc.mouseEnabled=false;
			this.hergelim_mc.mouseEnabled=false;
			this.reviot_mc.mouseEnabled=false;
			this.zafof_mc.mouseEnabled=false;
			this.sipor_mc.mouseEnabled=false;
			this.shemot_mc.mouseEnabled=false;
			this.bingo_mc.mouseEnabled=false;
			this.amitot_mc.mouseEnabled=false;
			this.kerach_mc.mouseEnabled=false;
			this.zyor_mc.mouseEnabled=false;
		
		}
		
		this.babait_txt.addEventListener("click", fl_Click7_2.bind(this));
		
		function fl_Click7_2()
		{
			this.sod_mc.gotoAndPlay(2);
			this.tenkav_mc.gotoAndPlay(2);
			this.milatkesem_mc.gotoAndPlay(2);
			this.mayodat_mc.gotoAndPlay(2);
			this.meshotaf_mc.gotoAndPlay(2);
			this.zug_mc.gotoAndPlay(2);
			this.hergelim_mc.gotoAndPlay(2);
			this.reviot_mc.gotoAndPlay(2);
			this.zafof_mc.gotoAndPlay(2);
			this.blyain_mc.gotoAndPlay(2);
			this.bingo_mc.gotoAndPlay(2);
			this.amitot_mc.gotoAndPlay(2);
		    this.clean.alpha=1;
			this.lelo_txt.mouseEnabled=false;
			this.r7.mouseEnabled=false;
			this.lelo_txt.alpha=0.1;
			this.lehachin_txt.mouseEnabled=false;
			this.r9.mouseEnabled=false;
			this.lehachin_txt.alpha=0.1;
			this.sod_mc.mouseEnabled=false;
			this.tenkav_mc.mouseEnabled=false;
			this.milatkesem_mc.mouseEnabled=false;
			this.mayodat_mc.mouseEnabled=false;
			this.meshotaf_mc.mouseEnabled=false;
			this.zug_mc.mouseEnabled=false;
			this.hergelim_mc.mouseEnabled=false;
			this.reviot_mc.mouseEnabled=false;
			this.zafof_mc.mouseEnabled=false;
			this.blyain_mc.mouseEnabled=false;
			this.bingo_mc.mouseEnabled=false;
			this.amitot_mc.mouseEnabled=false;
		
		}
		
		this.lehachin_txt.addEventListener("click", fl_Click8_2.bind(this));
		
		function fl_Click8_2()
		{
		    this.sod_mc.gotoAndPlay(2);
			this.teimot_mc.gotoAndPlay(2);
			this.levush_mc.gotoAndPlay(2);
			this.shikov_mc.gotoAndPlay(2);
			this.bracha_mc.gotoAndPlay(2);
			this.blyain_mc.gotoAndPlay(2);
			this.bingo_mc.gotoAndPlay(2);
			this.amitot_mc.gotoAndPlay(2);
			this.sipor_mc.gotoAndPlay(2);
			this.clean.alpha=1;
			this.lelo_txt.mouseEnabled=false;
			this.r7.mouseEnabled=false;
			this.lelo_txt.alpha=0.1;
			this.babait_txt.mouseEnabled=false;
			this.r8.mouseEnabled=false;
			this.babait_txt.alpha=0.1;
			this.sod_mc.mouseEnabled=false;
			this.teimot_mc.mouseEnabled=false;
			this.levush_mc.mouseEnabled=false;
			this.shikov_mc.mouseEnabled=false;
			this.bracha_mc.mouseEnabled=false;
			this.blyain_mc.mouseEnabled=false;
			this.bingo_mc.mouseEnabled=false;
			this.amitot_mc.mouseEnabled=false;
			this.sipor_mc.mouseEnabled=false;
		
		}
		
		this.Gmekirim_txt.addEventListener("click", fl_Click9_2.bind(this));
		
		function fl_Click9_2()
		{
		    this.sod_mc.gotoAndPlay(2);
			this.shikov_mc.gotoAndPlay(2);
			this.zug_mc.gotoAndPlay(2);
			this.reviot_mc.gotoAndPlay(2);
			this.kerach_mc.gotoAndPlay(2);
			this.clean.alpha=1;
			this.Ghadashim_txt.mouseEnabled=false;
			this.r11.mouseEnabled=false;
			this.Ghadashim_txt.alpha=0.1;
			this.Kmekirim_txt.mouseEnabled=false;
			this.r12.mouseEnabled=false;
			this.Kmekirim_txt.alpha=0.1;
			this.Khadashim_txt.mouseEnabled=false;
			this.r13.mouseEnabled=false;
			this.Khadashim_txt.alpha=0.1;
			this.sod_mc.mouseEnabled=false;
			this.shikov_mc.mouseEnabled=false;
			this.zug_mc.mouseEnabled=false;
			this.reviot_mc.mouseEnabled=false;
			this.kerach_mc.mouseEnabled=false;
		
		
		}
		
		this.Ghadashim_txt.addEventListener("click", fl_Click10_2.bind(this));
		
		function fl_Click10_2()
		{
		    this.milatkesem_mc.gotoAndPlay(2);
			this.teimot_mc.gotoAndPlay(2);
			this.tenkav_mc.gotoAndPlay(2);
		    this.levush_mc.gotoAndPlay(2);
			this.mayodat_mc.gotoAndPlay(2);
			this.shikov_mc.gotoAndPlay(2);
			this.bracha_mc.gotoAndPlay(2);
			this.reviot_mc.gotoAndPlay(2);
			this.hergelim_mc.gotoAndPlay(2);
			this.zafof_mc.gotoAndPlay(2);
			this.sipor_mc.gotoAndPlay(2);
			this.amitot_mc.gotoAndPlay(2);
			this.zyor_mc.gotoAndPlay(2);
			this.clean.alpha=1;
			this.Gmekirim_txt.mouseEnabled=false;
			this.r10.mouseEnabled=false;
			this.Gmekirim_txt.alpha=0.1;
			this.Kmekirim_txt.mouseEnabled=false;
			this.r12.mouseEnabled=false;
			this.Kmekirim_txt.alpha=0.1;
			this.Khadashim_txt.mouseEnabled=false;
			this.r13.mouseEnabled=false;
			this.Khadashim_txt.alpha=0.1;
			this.milatkesem_mc.mouseEnabled=false;
			this.teimot_mc.mouseEnabled=false;
			this.tenkav_mc.mouseEnabled=false;
		    this.levush_mc.mouseEnabled=false;
			this.mayodat_mc.mouseEnabled=false;
			this.shikov_mc.mouseEnabled=false;
			this.bracha_mc.mouseEnabled=false;
			this.reviot_mc.mouseEnabled=false;
			this.hergelim_mc.mouseEnabled=false;
			this.zafof_mc.mouseEnabled=false;
			this.sipor_mc.mouseEnabled=false;
			this.amitot_mc.mouseEnabled=false;
			this.zyor_mc.mouseEnabled=false;
		}
		
		this.Kmekirim_txt.addEventListener("click", fl_Click11_2.bind(this));
		
		function fl_Click11_2()
		{
		this.sod_mc.gotoAndPlay(2);
			this.milatkesem_mc.gotoAndPlay(2);
			this.teimot_mc.gotoAndPlay(2);
		    this.levush_mc.gotoAndPlay(2);
			this.zug_mc.gotoAndPlay(2);
			this.meshotaf_mc.gotoAndPlay(2);
			this.reviot_mc.gotoAndPlay(2);
			this.zafof_mc.gotoAndPlay(2);
			this.sipor_mc.gotoAndPlay(2);
			this.kerach_mc.gotoAndPlay(2);
			this.bingo_mc.gotoAndPlay(2);
			this.shemot_mc.gotoAndPlay(2);
			this.clean.alpha=1;
			this.Gmekirim_txt.mouseEnabled=false;
			this.r10.mouseEnabled=false;
			this.Gmekirim_txt.alpha=0.1;
			this.Ghadashim_txt.mouseEnabled=false;
			this.r11.mouseEnabled=false;
			this.Ghadashim_txt.alpha=0.1;
			this.Khadashim_txt.mouseEnabled=false;
			this.r13.mouseEnabled=false;
			this.Khadashim_txt.alpha=0.1;
			this.sod_mc.mouseEnabled=false;
			this.milatkesem_mc.mouseEnabled=false;
			this.teimot_mc.mouseEnabled=false;
		    this.levush_mc.mouseEnabled=false;
			this.zug_mc.mouseEnabled=false;
			this.meshotaf_mc.mouseEnabled=false;
			this.reviot_mc.mouseEnabled=false;
			this.zafof_mc.mouseEnabled=false;
			this.sipor_mc.mouseEnabled=false;
			this.kerach_mc.mouseEnabled=false;
			this.bingo_mc.mouseEnabled=false;
			this.shemot_mc.mouseEnabled=false;
		
		}
		
		this.Khadashim_txt.addEventListener("click", fl_Click12_2.bind(this));
		
		function fl_Click12_2()
		{
		    this.milatkesem_mc.gotoAndPlay(2);
			this.teimot_mc.gotoAndPlay(2);
			this.tenkav_mc.gotoAndPlay(2);
		    this.levush_mc.gotoAndPlay(2);
			this.zug_mc.gotoAndPlay(2);
			this.meshotaf_mc.gotoAndPlay(2);
			this.bracha_mc.gotoAndPlay(2);
			this.zafof_mc.gotoAndPlay(2);
			this.sipor_mc.gotoAndPlay(2);
			this.amitot_mc.gotoAndPlay(2);
			this.bingo_mc.gotoAndPlay(2);
			this.shemot_mc.gotoAndPlay(2);
			this.zyor_mc.gotoAndPlay(2);
			this.clean.alpha=1;
			this.Gmekirim_txt.mouseEnabled=false;
			this.r10.mouseEnabled=false;
			this.Gmekirim_txt.alpha=0.1;
			this.Ghadashim_txt.mouseEnabled=false;
			this.r11.mouseEnabled=false;
			this.Ghadashim_txt.alpha=0.1;
			this.Kmekirim_txt.mouseEnabled=false;
			this.r13.mouseEnabled=false;
			this.Kmekirim_txt.alpha=0.1;
			this.milatkesem_mc.mouseEnabled=false;
			this.teimot_mc.mouseEnabled=false;
			this.tenkav_mc.mouseEnabled=false;
		    this.levush_mc.mouseEnabled=false;
			this.zug_mc.mouseEnabled=false;
			this.meshotaf_mc.mouseEnabled=false;
			this.bracha_mc.mouseEnabled=false;
			this.zafof_mc.mouseEnabled=false;
			this.sipor_mc.mouseEnabled=false;
			this.amitot_mc.mouseEnabled=false;
			this.bingo_mc.mouseEnabled=false;
			this.shemot_mc.mouseEnabled=false;
			this.zyor_mc.mouseEnabled=false;
		}
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// איקס גדול
	this.x_clalli = new lib.איקס_1();
	this.x_clalli.parent = this;
	this.x_clalli.setTransform(882.8,65.3,0.1,0.1,0,0,0,313.6,313.1);
	new cjs.ButtonHelper(this.x_clalli, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.x_clalli).wait(2));

	// ברכה גדול
	this.bracha_gadol = new lib.bracha_gadol();
	this.bracha_gadol.parent = this;
	this.bracha_gadol.setTransform(492,379.3,1,1,0,0,0,430,345);

	this.timeline.addTween(cjs.Tween.get(this.bracha_gadol).wait(2));

	// משותף גדול
	this.meshotap_gadol = new lib.meshotap_gadol();
	this.meshotap_gadol.parent = this;
	this.meshotap_gadol.setTransform(492,370,1,1,0,0,0,430,345);

	this.timeline.addTween(cjs.Tween.get(this.meshotap_gadol).wait(2));

	// זוג גדול
	this.zug_gadol = new lib.zug_gadol();
	this.zug_gadol.parent = this;
	this.zug_gadol.setTransform(484,382,1,1,0,0,0,430,345);

	this.timeline.addTween(cjs.Tween.get(this.zug_gadol).wait(2));

	// סוד גדול
	this.sod_gadol = new lib.sod_gadol();
	this.sod_gadol.parent = this;
	this.sod_gadol.setTransform(483,387,1,1,0,0,0,430,345);

	this.timeline.addTween(cjs.Tween.get(this.sod_gadol).wait(2));

	// מילת הקסם
	this.kesem_gadol = new lib.kesem_gadol();
	this.kesem_gadol.parent = this;
	this.kesem_gadol.setTransform(483,380,1,1,0,0,0,430,345);

	this.timeline.addTween(cjs.Tween.get(this.kesem_gadol).wait(2));

	// טעימות גדול
	this.teimot_gadol = new lib.teimot_gadol();
	this.teimot_gadol.parent = this;
	this.teimot_gadol.setTransform(484,379,1,1,0,0,0,430,345);

	this.timeline.addTween(cjs.Tween.get(this.teimot_gadol).wait(2));

	// תן קו גדול
	this.tenkav_gadol = new lib.tenkav_gadol();
	this.tenkav_gadol.parent = this;
	this.tenkav_gadol.setTransform(484,379,1,1,0,0,0,430,345);

	this.timeline.addTween(cjs.Tween.get(this.tenkav_gadol).wait(2));

	// לבוש גדול
	this.levosh_gadol = new lib.levosh_gadol();
	this.levosh_gadol.parent = this;
	this.levosh_gadol.setTransform(513,359.3,1,1,0,0,0,391.3,313.9);

	this.timeline.addTween(cjs.Tween.get(this.levosh_gadol).wait(2));

	// סיפור גדול
	this.sipor_gadol = new lib.sipor_gadol();
	this.sipor_gadol.parent = this;
	this.sipor_gadol.setTransform(495,371,1,1,0,0,0,430,345);

	this.timeline.addTween(cjs.Tween.get(this.sipor_gadol).wait(2));

	// צפוף צפוף גדול
	this.zafof_gadol = new lib.zafof_gadol();
	this.zafof_gadol.parent = this;
	this.zafof_gadol.setTransform(496,372,1,1,0,0,0,430,345);

	this.timeline.addTween(cjs.Tween.get(this.zafof_gadol).wait(2));

	// רביעיות גדול
	this.reviyot_gadol = new lib.reviyot_gadol();
	this.reviyot_gadol.parent = this;
	this.reviyot_gadol.setTransform(495,368,1,1,0,0,0,430,345);

	this.timeline.addTween(cjs.Tween.get(this.reviyot_gadol).wait(2));

	// ציור משותף גדול
	this.zior_gadol = new lib.zior_gadol();
	this.zior_gadol.parent = this;
	this.zior_gadol.setTransform(488,383,1,1,0,0,0,430,345);

	this.timeline.addTween(cjs.Tween.get(this.zior_gadol).wait(2));

	// קוביות קרח גדולה
	this.kubia_gadol = new lib.kubia_gadol();
	this.kubia_gadol.parent = this;
	this.kubia_gadol.setTransform(493,374,1,1,0,0,0,430,345);

	this.timeline.addTween(cjs.Tween.get(this.kubia_gadol).wait(2));

	// בינגו גדול
	this.bingo_gadol = new lib.bingo_gadol();
	this.bingo_gadol.parent = this;
	this.bingo_gadol.setTransform(485,379,1,1,0,0,0,430,345);

	this.timeline.addTween(cjs.Tween.get(this.bingo_gadol).wait(2));

	// שתי אמיתות גדול
	this.amitot_gadol = new lib.amitot_gadol();
	this.amitot_gadol.parent = this;
	this.amitot_gadol.setTransform(506,358,1,1,0,0,0,430,345);

	this.timeline.addTween(cjs.Tween.get(this.amitot_gadol).wait(2));

	// משחק הרגלים גדול
	this.herglim_gadol = new lib.herglim_gadol();
	this.herglim_gadol.parent = this;
	this.herglim_gadol.setTransform(495,371,1,1,0,0,0,430,345);

	this.timeline.addTween(cjs.Tween.get(this.herglim_gadol).wait(2));

	// יודעת גדול
	this.yodaat_gadol = new lib.yodaat_gadol();
	this.yodaat_gadol.parent = this;
	this.yodaat_gadol.setTransform(481.9,379,1,1,0,0,0,430,345);

	this.timeline.addTween(cjs.Tween.get(this.yodaat_gadol).wait(2));

	// שמות גדול
	this.shemot_gadol = new lib.shemot_gadol();
	this.shemot_gadol.parent = this;
	this.shemot_gadol.setTransform(504,367,1,1,0,0,0,430,345);

	this.timeline.addTween(cjs.Tween.get(this.shemot_gadol).wait(2));

	// בלי העין גדול
	this.bliayn_gadol = new lib.bliayn_gadol();
	this.bliayn_gadol.parent = this;
	this.bliayn_gadol.setTransform(506,372,1,1,0,0,0,430,345);

	this.timeline.addTween(cjs.Tween.get(this.bliayn_gadol).wait(2));

	// שילוב גדול
	this.zrout_gadol = new lib.zrout_gadol();
	this.zrout_gadol.parent = this;
	this.zrout_gadol.setTransform(468,375,1,1,0,0,0,430,345);

	this.timeline.addTween(cjs.Tween.get(this.zrout_gadol).wait(2));

	// box
	this.box = new lib.box();
	this.box.parent = this;
	this.box.setTransform(476.1,381.7,1.02,1.1,0,0,0,474.4,357);
	this.box.alpha = 0.809;

	this.timeline.addTween(cjs.Tween.get(this.box).wait(2));

	// איקס מנקה
	this.clean = new lib.clean();
	this.clean.parent = this;
	this.clean.setTransform(834.5,590.2,1,1,0,0,0,98.2,20.8);
	new cjs.ButtonHelper(this.clean, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFCC").ss(1,1,1).p("AJhgDIAAAHIzCAAIAAgH");
	this.shape.setTransform(830.2,610.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.clean}]}).wait(2));

	// צילום
	this.zilom = new lib.zilom();
	this.zilom.parent = this;
	this.zilom.setTransform(484.5,376.8,1,1,0,0,0,482.5,368.8);

	this.timeline.addTween(cjs.Tween.get(this.zilom).wait(2));

	// איקס
	this.x_12 = new lib.x_1();
	this.x_12.parent = this;
	this.x_12.setTransform(890.4,537.7,0.843,0.843);
	new cjs.ButtonHelper(this.x_12, 0, 1, 1);

	this.x_11 = new lib.x_1();
	this.x_11.parent = this;
	this.x_11.setTransform(890.4,513.5,0.843,0.843);
	new cjs.ButtonHelper(this.x_11, 0, 1, 1);

	this.x_10 = new lib.x_1();
	this.x_10.parent = this;
	this.x_10.setTransform(890.4,489.4,0.843,0.843);
	new cjs.ButtonHelper(this.x_10, 0, 1, 1);

	this.x_9 = new lib.x_1();
	this.x_9.parent = this;
	this.x_9.setTransform(890.4,464.7,0.843,0.843);
	new cjs.ButtonHelper(this.x_9, 0, 1, 1);

	this.x_8 = new lib.x_1();
	this.x_8.parent = this;
	this.x_8.setTransform(890.4,388.1,0.843,0.843);
	new cjs.ButtonHelper(this.x_8, 0, 1, 1);

	this.x_7 = new lib.x_1();
	this.x_7.parent = this;
	this.x_7.setTransform(890.4,364,0.843,0.843);
	new cjs.ButtonHelper(this.x_7, 0, 1, 1);

	this.x_6 = new lib.x_1();
	this.x_6.parent = this;
	this.x_6.setTransform(890.4,339.8,0.843,0.843);
	new cjs.ButtonHelper(this.x_6, 0, 1, 1);

	this.x_5 = new lib.x_1();
	this.x_5.parent = this;
	this.x_5.setTransform(890.4,265.5,0.843,0.843);
	new cjs.ButtonHelper(this.x_5, 0, 1, 1);

	this.x_4 = new lib.x_1();
	this.x_4.parent = this;
	this.x_4.setTransform(890.4,240.4,0.843,0.843);
	new cjs.ButtonHelper(this.x_4, 0, 1, 1);

	this.x_3 = new lib.x_1();
	this.x_3.parent = this;
	this.x_3.setTransform(890.4,215.3,0.843,0.843);
	new cjs.ButtonHelper(this.x_3, 0, 1, 1);

	this.x_2 = new lib.x_1();
	this.x_2.parent = this;
	this.x_2.setTransform(890.4,190.1,0.843,0.843);
	new cjs.ButtonHelper(this.x_2, 0, 1, 1);

	this.x_1 = new lib.x_1();
	this.x_1.parent = this;
	this.x_1.setTransform(890.4,165,0.843,0.843);
	new cjs.ButtonHelper(this.x_1, 0, 1, 1);

	this.x_button = new lib.איקס_1();
	this.x_button.parent = this;
	this.x_button.setTransform(899.4,149.1,0.03,0.03,0,0,0,313.4,315);
	new cjs.ButtonHelper(this.x_button, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.x_button},{t:this.x_1},{t:this.x_2},{t:this.x_3},{t:this.x_4},{t:this.x_5},{t:this.x_6},{t:this.x_7},{t:this.x_8},{t:this.x_9},{t:this.x_10},{t:this.x_11},{t:this.x_12}]}).wait(2));

	// פתקים
	this.shemot_mc = new lib.shemot_mc();
	this.shemot_mc.parent = this;
	this.shemot_mc.setTransform(615,524.1,1,1,0,0,0,70,58.1);

	this.bingo_mc = new lib.bingo_mc();
	this.bingo_mc.parent = this;
	this.bingo_mc.setTransform(460,523,1,1,0,0,0,50.1,57.4);

	this.amitot_mc = new lib.amitot_mc();
	this.amitot_mc.parent = this;
	this.amitot_mc.setTransform(343.8,521.4,1,1,0,0,0,72.8,60.4);

	this.kerach_mc = new lib.kerach_mc();
	this.kerach_mc.parent = this;
	this.kerach_mc.setTransform(206.1,519.6,0.932,0.932,0,0,0,73,60.6);

	this.zyor_mc = new lib.zyor_mc();
	this.zyor_mc.parent = this;
	this.zyor_mc.setTransform(74.9,514.7,1,1,0,0,0,65.9,54.7);

	this.hergelim_mc = new lib.hergelim_mc();
	this.hergelim_mc.parent = this;
	this.hergelim_mc.setTransform(617.7,403.5,1,1,0,0,0,71.7,59.5);

	this.reviot_mc = new lib.reviot_mc();
	this.reviot_mc.parent = this;
	this.reviot_mc.setTransform(408,342);

	this.blyain_mc = new lib.blyain_mc();
	this.blyain_mc.parent = this;
	this.blyain_mc.setTransform(275,339);

	this.zafof_mc = new lib.zafof_mc();
	this.zafof_mc.parent = this;
	this.zafof_mc.setTransform(213.7,394.9,1,1,0,0,0,70.7,58.6);

	this.sipor_mc = new lib.sipor_mc();
	this.sipor_mc.parent = this;
	this.sipor_mc.setTransform(10,335.7,0.971,0.971);

	this.mayodat_mc = new lib.mayodat_mc();
	this.mayodat_mc.parent = this;
	this.mayodat_mc.setTransform(615.9,282.8,1,1,0,0,0,70.9,58.8);

	this.shikov_mc = new lib.shikov_mc();
	this.shikov_mc.parent = this;
	this.shikov_mc.setTransform(479.1,277,0.96,0.96,0,0,0,71,58.9);

	this.bracha_mc = new lib.bracha_mc();
	this.bracha_mc.parent = this;
	this.bracha_mc.setTransform(274,218);

	this.meshotaf_mc = new lib.meshotaf_mc();
	this.meshotaf_mc.parent = this;
	this.meshotaf_mc.setTransform(209.9,274.5,1,1,0,0,0,66.9,55.5);

	this.zug_mc = new lib.zug_mc();
	this.zug_mc.parent = this;
	this.zug_mc.setTransform(77.1,273.7,1,1,0,0,0,67.1,55.7);

	this.sod_mc = new lib.sod_mc();
	this.sod_mc.parent = this;
	this.sod_mc.setTransform(548,103);

	this.milatkesem_mc = new lib.milatkesem_mc();
	this.milatkesem_mc.parent = this;
	this.milatkesem_mc.setTransform(485,155.2,0.945,0.945,0,0,0,72.9,60.6);

	this.teimot_mc = new lib.teimot_mc();
	this.teimot_mc.parent = this;
	this.teimot_mc.setTransform(348.1,155.6,1.037,1.037,0,0,0,65.8,54.6);

	this.tenkav_mc = new lib.tenkav_mc();
	this.tenkav_mc.parent = this;
	this.tenkav_mc.setTransform(211.7,155.6,1,1,0,0,0,68.3,56.6);

	this.levush_mc = new lib.levush_mc();
	this.levush_mc.parent = this;
	this.levush_mc.setTransform(10,99.4,1.102,1.102);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.levush_mc},{t:this.tenkav_mc},{t:this.teimot_mc},{t:this.milatkesem_mc},{t:this.sod_mc},{t:this.zug_mc},{t:this.meshotaf_mc},{t:this.bracha_mc},{t:this.shikov_mc},{t:this.mayodat_mc},{t:this.sipor_mc},{t:this.zafof_mc},{t:this.blyain_mc},{t:this.reviot_mc},{t:this.hergelim_mc},{t:this.zyor_mc},{t:this.kerach_mc},{t:this.amitot_mc},{t:this.bingo_mc},{t:this.shemot_mc}]}).wait(2));

	// שם כחול
	this.Khadashimred_txt = new lib.Khadashimred_txt();
	this.Khadashimred_txt.parent = this;
	this.Khadashimred_txt.setTransform(833,545.3,1,1,0,0,0,40.4,9.5);

	this.Kmekirimred_txt = new lib.Kmekirimred_txt();
	this.Kmekirimred_txt.parent = this;
	this.Kmekirimred_txt.setTransform(841,520.1,1,1,0,0,0,40.6,9.5);

	this.Ghadash_txt = new lib.Ghadash_txt();
	this.Ghadash_txt.parent = this;
	this.Ghadash_txt.setTransform(841,497,1,1,0,0,0,42.5,9.5);

	this.Gmekir_txt = new lib.Gmekir_txt();
	this.Gmekir_txt.parent = this;
	this.Gmekir_txt.setTransform(841.1,472.8,1,1,0,0,0,42.8,9.5);

	this.lelored_txt = new lib.lelored_txt();
	this.lelored_txt.parent = this;
	this.lelored_txt.setTransform(843.6,346.3,1,1,0,0,0,39.6,9.5);

	this.babaitred_txt = new lib.babaitred_txt();
	this.babaitred_txt.parent = this;
	this.babaitred_txt.setTransform(820.1,370.5,1,1,0,0,0,55.9,9.5);

	this.lhhchinred_txt = new lib.lhhchinred_txt();
	this.lhhchinred_txt.parent = this;
	this.lhhchinred_txt.setTransform(747.9,385.2);

	this.shtiyared_txt = new lib.shtiyared_txt();
	this.shtiyared_txt.parent = this;
	this.shtiyared_txt.setTransform(803.3,246.6,1,1,0,0,0,17.4,9.5);

	this.holedetred_txt = new lib.holedetred_txt();
	this.holedetred_txt.parent = this;
	this.holedetred_txt.setTransform(897,226.7,1,1,0,0,0,31,9.5);

	this.ravakimred_txt = new lib.ravakimred_txt();
	this.ravakimred_txt.parent = this;
	this.ravakimred_txt.setTransform(808.1,147,1,1,0,0,0,62.6,9.5);

	this.mishred_txt = new lib.mishred_txt();
	this.mishred_txt.parent = this;
	this.mishred_txt.setTransform(816.4,271.6,1,1,0,0,0,53.9,9.5);

	this.giboosh_txt = new lib.sibooshhovet_txt();
	this.giboosh_txt.parent = this;
	this.giboosh_txt.setTransform(866.3,193.8,1,1,0,0,0,17.6,9.5);

	this.hikrothover_txt = new lib.hikrothover_txt();
	this.hikrothover_txt.parent = this;
	this.hikrothover_txt.setTransform(857,180.9,1,1,0,0,0,22.3,9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hikrothover_txt},{t:this.giboosh_txt},{t:this.mishred_txt},{t:this.ravakimred_txt},{t:this.holedetred_txt},{t:this.shtiyared_txt},{t:this.lhhchinred_txt},{t:this.babaitred_txt},{t:this.lelored_txt},{t:this.Gmekir_txt},{t:this.Ghadash_txt},{t:this.Kmekirimred_txt},{t:this.Khadashimred_txt}]}).wait(2));

	// שם שחור
	this.gibush_txt = new lib.gibush_txt();
	this.gibush_txt.parent = this;
	this.gibush_txt.setTransform(851.1,185.7);
	new cjs.ButtonHelper(this.gibush_txt, 0, 1, 1);

	this.shtiya_txt = new lib.shtiya_txt();
	this.shtiya_txt.parent = this;
	this.shtiya_txt.setTransform(846.9,236.7);
	new cjs.ButtonHelper(this.shtiya_txt, 0, 1, 1);

	this.Khadashim_txt = new lib.קטנהחדשים();
	this.Khadashim_txt.parent = this;
	this.Khadashim_txt.setTransform(713.6,679.6);
	new cjs.ButtonHelper(this.Khadashim_txt, 0, 1, 1);

	this.Kmekirim_txt = new lib.קטנהמכירים();
	this.Kmekirim_txt.parent = this;
	this.Kmekirim_txt.setTransform(701.3,592.4);
	new cjs.ButtonHelper(this.Kmekirim_txt, 0, 1, 1);

	this.Ghadashim_txt = new lib.גדולהחדשים();
	this.Ghadashim_txt.parent = this;
	this.Ghadashim_txt.setTransform(840.5,496.3,1,1,0,0,0,72.9,-86);
	new cjs.ButtonHelper(this.Ghadashim_txt, 0, 1, 1);

	this.Gmekirim_txt = new lib.גדולהמכירים();
	this.Gmekirim_txt.parent = this;
	this.Gmekirim_txt.setTransform(840.5,472.1,1,1,0,0,0,124.2,-113);
	new cjs.ButtonHelper(this.Gmekirim_txt, 0, 1, 1);

	this.lehachin_txt = new lib.אביזריםשצריךלהכין();
	this.lehachin_txt.parent = this;
	this.lehachin_txt.setTransform(815,394.5,1,1,0,0,0,235.8,-106);
	new cjs.ButtonHelper(this.lehachin_txt, 0, 1, 1);

	this.babait_txt = new lib.אביזריםשישבבית();
	this.babait_txt.parent = this;
	this.babait_txt.setTransform(821.4,370.4,1,1,0,0,0,37.5,-143);
	new cjs.ButtonHelper(this.babait_txt, 0, 1, 1);

	this.lelo_txt = new lib.ללאאביזרים();
	this.lelo_txt.parent = this;
	this.lelo_txt.setTransform(843.7,346.2,1,1,0,0,0,136.5,-70);
	new cjs.ButtonHelper(this.lelo_txt, 0, 1, 1);

	this.mishpach_txt = new lib.פעילותמשפחתית();
	this.mishpach_txt.parent = this;
	this.mishpach_txt.setTransform(824.8,271.7,1,1,0,0,0,178.8,-118);
	new cjs.ButtonHelper(this.mishpach_txt, 0, 1, 1);

	this.holedet_txt = new lib.ימיהולדת();
	this.holedet_txt.parent = this;
	this.holedet_txt.setTransform(851,220.6,1,1,0,0,0,138.5,-146);
	new cjs.ButtonHelper(this.holedet_txt, 0, 1, 1);

	this.gibush_txt_1 = new lib.גיבוש();
	this.gibush_txt_1.parent = this;
	this.gibush_txt_1.setTransform(856.3,199.3,1,1,0,0,0,257.4,-73);
	new cjs.ButtonHelper(this.gibush_txt_1, 0, 1, 1);

	this.hicerot_txt = new lib.היכרות();
	this.hicerot_txt.parent = this;
	this.hicerot_txt.setTransform(739.4,289.6,0.98,1);
	new cjs.ButtonHelper(this.hicerot_txt, 0, 1, 1);

	this.ravakot_txt = new lib.רווקים();
	this.ravakot_txt.parent = this;
	this.ravakot_txt.setTransform(600,247);
	new cjs.ButtonHelper(this.ravakot_txt, 0, 1, 1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFCC").ss(1,1,1).p("AJckGIBqAAAFqkGIDQAAAJWhBIgmAAAKHgRIgxAAALGgRIg+AAAGchBIggAAAJcEHIgqAAALGEHIg3AAAiVEHIgeAAIAAgUADAgRIj5AAIqMAAIAAj1IOFAA");
	this.shape_1.setTransform(815,158.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFCC").s().p("AIjLEIAAiqIBlAAIAAg0IgPAAIAAi/IAPAAIAAhPIgPAAIAAjJIAPAAIAAgcIgPAAIAAgKIA+AAIAAAKIgKAAIAAAcIAKAAIAADJIgKAAIAABPIAKAAIAAC/IgKAAIAAA0IAKAAIAACqgApSLEIAAiqIMDAAIAACqgAFtJpIAAiqIAgAAIAACqgAIjHmIAAi/IBVAAIAAC/gAFtF0IAAi+IAgAAIAAC+gAIjDYIAAjJIBVAAIAADJgAFtB6IAAjHIAgAAIAADHgAIjgNIAAgKIBVAAIAAAKgAhUgNIAAgKIEFAAIAAAKgAJ5gqIAAh6IA+AAIAAB6gAIjgqIAAh6IBVAAIAAB6gAFtiJIAAgKIAgAAIAAAKgAJ5izIAAgYIA+AAIAAAYgAIjizIAAgYIBVAAIAAAYgAhUizIAAgYIEFAAIAAAYgAJ5oZIgBAAIgxAAIAAgdIAAgUIgmAAIAAhfIACAAIAAgCIgCAAIAAAAIiUAAIAAAAIgyAAIAAgYIFcAAIAACqgAq2oZIAAiqINnAAIAACqgAFtpKIAAhfIAgAAIAABfg");
	this.shape_2.setTransform(816.5,208.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,204,0.8)").s().p("AhyF5IAAiqIAoAAIEFAAIAAAPIkFAAIAAB5IEFAAIAAAUIkFAAIgUAAIAAAOgAKDFrIAAgUIA+AAIAAAUgAIuFrIAAgUIBVAAIAAAUgAF3DvIAAgTIAhAAIAAATgAKDDeIAAgPIA+AAIAAAPgAIuDeIAAgPIBVAAIAAAPgAKLCVIAAgHIgIAAIAAgNIA+AAIAAAUgAIuCVIAAgUIBVAAIAAANIgsAAIAAAHgAKPB7IAAiLIA8AAIAACLgAKDg8IAAhHIAAgUIA+AAIAAAUIg+AAIA+AAIAABHgAIug8IAAgxIgDAAIAAhGIAAgUIAmAAIAAAUIgmAAIAmAAIAAAcIAyAAIAAAUIgyAAIAyAAIAABHgAg+g8IAAhHID5AAIAABHgAF3htIAAhGIAhAAIghAAIAAgUIAhAAIAAAUIAABGgALBiDgAKDiDgAg+iDIqMAAIAAj1IOFAAIAAA3ItnAAIAACqINnAAIAAAUgAJRizgAF3izgAFllBIAAg3IDQAAIAiAAIBqAAIAAA3g");
	this.shape_3.setTransform(815.5,169.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.ravakot_txt},{t:this.hicerot_txt},{t:this.gibush_txt_1},{t:this.holedet_txt},{t:this.mishpach_txt},{t:this.lelo_txt},{t:this.babait_txt},{t:this.lehachin_txt},{t:this.Gmekirim_txt},{t:this.Ghadashim_txt},{t:this.Kmekirim_txt},{t:this.Khadashim_txt},{t:this.shtiya_txt},{t:this.gibush_txt}]}).wait(2));

	// ריבוע
	this.r13 = new lib.r13();
	this.r13.parent = this;
	this.r13.setTransform(838,550.5,1,1,0,0,0,48.9,11.3);
	new cjs.ButtonHelper(this.r13, 0, 1, 1);

	this.r12 = new lib.r12();
	this.r12.parent = this;
	this.r12.setTransform(838,526.1,1,1,0,0,0,48.9,11.1);
	new cjs.ButtonHelper(this.r12, 0, 1, 1);

	this.r11 = new lib.r11();
	this.r11.parent = this;
	this.r11.setTransform(838,501,1,1,0,0,0,48.9,12.1);
	new cjs.ButtonHelper(this.r11, 0, 1, 1);

	this.r10 = new lib.r10();
	this.r10.parent = this;
	this.r10.setTransform(838,474.6,1,1,0,0,0,48.9,12.3);
	new cjs.ButtonHelper(this.r10, 0, 1, 1);

	this.r9 = new lib.r9();
	this.r9.parent = this;
	this.r9.setTransform(816.4,400.6,1,1,0,0,0,64.3,11.2);
	new cjs.ButtonHelper(this.r9, 0, 1, 1);

	this.r8 = new lib.r8();
	this.r8.parent = this;
	this.r8.setTransform(816.4,375.3,1,1,0,0,0,64.3,11.9);
	new cjs.ButtonHelper(this.r8, 0, 1, 1);

	this.r7 = new lib.r7();
	this.r7.parent = this;
	this.r7.setTransform(829.4,350.6,1,1,0,0,0,51.4,10.5);
	new cjs.ButtonHelper(this.r7, 0, 1, 1);

	this.r6 = new lib.r6();
	this.r6.parent = this;
	this.r6.setTransform(814.3,276.5,1,1,0,0,0,66.3,9.4);
	new cjs.ButtonHelper(this.r6, 0, 1, 1);

	this.r5 = new lib.r5();
	this.r5.parent = this;
	this.r5.setTransform(844.9,248.9,1,1,0,0,0,39.9,11.2);
	new cjs.ButtonHelper(this.r5, 0, 1, 1);

	this.r4 = new lib.r4();
	this.r4.parent = this;
	this.r4.setTransform(842.9,226.4,1,1,0,0,0,37.9,9.3);
	new cjs.ButtonHelper(this.r4, 0, 1, 1);

	this.r3 = new lib.r3();
	this.r3.parent = this;
	this.r3.setTransform(848.9,200,1,1,0,0,0,35.9,11);
	new cjs.ButtonHelper(this.r3, 0, 1, 1);

	this.r2 = new lib.r2();
	this.r2.parent = this;
	this.r2.setTransform(845,171.4,1,1,0,0,0,39.9,10.2);
	new cjs.ButtonHelper(this.r2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.r2,p:{x:845,y:171.4}},{t:this.r3,p:{x:848.9,y:200}},{t:this.r4,p:{x:842.9,y:226.4}},{t:this.r5,p:{x:844.9,y:248.9}},{t:this.r6,p:{x:814.3,y:276.5}},{t:this.r7},{t:this.r8},{t:this.r9},{t:this.r10,p:{x:838}},{t:this.r11,p:{x:838}},{t:this.r12,p:{x:838}},{t:this.r13,p:{x:838}}]}).to({state:[{t:this.r2,p:{x:840,y:172.4}},{t:this.r3,p:{x:843.9,y:199}},{t:this.r4,p:{x:837.9,y:225.4}},{t:this.r5,p:{x:839.9,y:247.9}},{t:this.r6,p:{x:809.3,y:275.5}},{t:this.r7},{t:this.r8},{t:this.r9},{t:this.r10,p:{x:828}},{t:this.r11,p:{x:828}},{t:this.r12,p:{x:828}},{t:this.r13,p:{x:828}}]},1).wait(1));

	// כותרות
	this.kvoza_txt = new lib.סוגהקבוצה();
	this.kvoza_txt.parent = this;
	this.kvoza_txt.setTransform(803.8,438.3,1,1,0,0,0,210.7,-121);

	this.anashim = new lib.multi();
	this.anashim.parent = this;
	this.anashim.setTransform(916.2,441.4,1,1,0,0,0,22.9,22.9);

	this.misparim = new lib.cut_1();
	this.misparim.parent = this;
	this.misparim.setTransform(484.8,329,0.959,0.959,0,0,0,101.5,67);

	this.hashkaa_txt = new lib.רמתהשקעה();
	this.hashkaa_txt.parent = this;
	this.hashkaa_txt.setTransform(823.9,309.4,1,1,0,0,0,285.8,-557);

	this.sog_txt = new lib.סוגהאירוע();
	this.sog_txt.parent = this;
	this.sog_txt.setTransform(604.7,231.5);

	this.kova = new lib.hat();
	this.kova.parent = this;
	this.kova.setTransform(912.1,111.4,1.167,1.167,0,0,0,64,64);

	this.horaa = new lib.בחראתסוג();
	this.horaa.parent = this;
	this.horaa.setTransform(546.4,44.2,1,1,0,0,0,15.7,-133.9);

	this.coteret = new lib.משחקקבוצתי();
	this.coteret.parent = this;
	this.coteret.setTransform(655.1,19.8,1,1,0,0,0,-8.4,-22.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.coteret},{t:this.horaa},{t:this.kova},{t:this.sog_txt},{t:this.hashkaa_txt},{t:this.misparim},{t:this.anashim},{t:this.kvoza_txt}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(472.3,364,974.8,785.4);
// library properties:
lib.properties = {
	width: 960,
	height: 750,
	fps: 24,
	color: "#FFFFCC",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/sofi_atlas_.png", id:"sofi_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;