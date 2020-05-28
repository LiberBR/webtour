// Garden Gnome Software - Skin
// Pano2VR 6.1.8/17956
// Filename: galeria360.ggsk
// Generated 2020-05-27T19:18:10

function pano2vrSkin(player,base) {
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs=basePath + 'images/image_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=0;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 375px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 600px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_1.onclick=function (e) {
			me._image_1.style[domTransition]='none';
			me._image_1.style.visibility='hidden';
			me._image_1.ggVisible=false;
			me._rectangle_1.style[domTransition]='none';
			me._rectangle_1.style.visibility='hidden';
			me._rectangle_1.ggVisible=false;
			if (me._map_1.ggMapNotLoaded) {
				me._map_1.ggInitMap(false);
				me._map_1.ggInitMapMarkers(true);
			}
			me._map_1.style[domTransition]='none';
			me._map_1.style.visibility=(Number(me._map_1.style.opacity)>0||!me._map_1.style.opacity)?'inherit':'hidden';
			me._map_1.ggVisible=true;
			me._btn_map.style[domTransition]='none';
			me._btn_map.style.visibility=(Number(me._btn_map.style.opacity)>0||!me._btn_map.style.opacity)?'inherit':'hidden';
			me._btn_map.ggVisible=true;
			me._btn_full.style[domTransition]='none';
			me._btn_full.style.visibility=(Number(me._btn_full.style.opacity)>0||!me._btn_full.style.opacity)?'inherit':'hidden';
			me._btn_full.ggVisible=true;
			me._btn_home.style[domTransition]='none';
			me._btn_home.style.visibility=(Number(me._btn_home.style.opacity)>0||!me._btn_home.style.opacity)?'inherit':'hidden';
			me._btn_home.ggVisible=true;
			me._btn_marion.style[domTransition]='none';
			me._btn_marion.style.visibility=(Number(me._btn_marion.style.opacity)>0||!me._btn_marion.style.opacity)?'inherit':'hidden';
			me._btn_marion.ggVisible=true;
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._image_1);
		el=me._map_1=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggId="Map 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 104px;';
		hs+='opacity : 0.4;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='right : 42px;';
		hs+='top : 9px;';
		hs+='visibility : hidden;';
		hs+='width : 256px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_1.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (!(mapDetails.hasOwnProperty('title'))) return;
			me._map_1.ggCalculateFloorplanSize(mapDetails);
			me._map_1.ggShowSimpleFloorplan(mapDetails);
			me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			me._map_1.ggRadar.update();
		}
		me._map_1.ggUpdateConditionTimer=function () {
			me._map_1.ggRadar.update();
		}
		me._map_1.ggUpdatePosition=function (useTransition) {
			me._map_1.ggUpdateConditionResize();
		}
		me._map_1.ggNodeChange=function () {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (!(mapDetails.hasOwnProperty('title'))) return;
			me._map_1.ggCalculateFloorplanSize(mapDetails);
			me._map_1.ggShowSimpleFloorplan(mapDetails);
			me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			me._map_1.ggRadar.update();
			if (me._map_1.ggLastNodeId) {
				var lastActiveMarker = me._map_1.ggSimpleFloorplanMarkerArray[me._map_1.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_1.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_1.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_1.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_1.ggChangeMap(mapId);
					}
				}
			}
			me._map_1.ggLastNodeId = id;
		}
		me.divSkin.appendChild(me._map_1);
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: -1;';
		hs+='background : #000000;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._rectangle_1);
		el=me._btn_map=document.createElement('div');
		els=me._btn_map__img=document.createElement('img');
		els.className='ggskin ggskin_btn_map';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAABk0lEQVRYhe3XTWoUYRDG8XoTyQkMIejcwI0u40IFvYBuvIAfKAS/dl5BhEjwA7PKRnApbuJCF5oDxJxAI4NoDjAwSX4uehraYbrzThsCQv+XL1VPPV3Vi6qI/wHM4yY+4CfWcAWzLfUW8AjbWGsKXMRdfMKeyfzCC1zEzCGF53AN7zGsaAzGA3u4jy84qClcRx/PcB6ponlu9L5bkzeoGljNLLyOjbGvGec7XmIrQ+8vE4OMBLg+ij+JW4px7Wfm1pponGUdKaXdlNKrlNKliDgdEcsRsRkR2ui16kSDTg8P8HWaTpxo7XwCKaWdiHiKfkS8yc1rNY6jpjNR0pko6UyUdCZKOhMlnYmSzkTJtPvEY5yKiLej3eFImLYTZyLiSUR8wyaWsXjcJkpSRC'+
			'xFxEpE/FAsvLcx39pJ5o65pVjldxpihopLbT1D7wCrOSZ+YwVnK7EJS6P3fkaxKvv4jHvoNXViiHe4irlDOjiDC3iuOAsnsYePuKPp/1Ecudt4iIWWI53FZbxWHM4buOFf/pPj5A9V9KDUHaXFSwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_map";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 4px;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._btn_map.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_map.onclick=function (e) {
			me._map_1.ggVisible = !me._map_1.ggVisible;
			var flag=me._map_1.ggVisible;
			if (me._map_1.ggMapNotLoaded) {
				me._map_1.ggInitMap(false);
				me._map_1.ggInitMapMarkers(true);
			}
			else {
				me._map_1.ggClearMap();
			}
			me._map_1.style[domTransition]='none';
			me._map_1.style.visibility=((flag)&&(Number(me._map_1.style.opacity)>0||!me._map_1.style.opacity))?'inherit':'hidden';
		}
		me._btn_map.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._btn_map);
		el=me._btn_full=document.createElement('div');
		els=me._btn_full__img=document.createElement('img');
		els.className='ggskin ggskin_btn_full';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAA6ElEQVRYhe2XO25CMRBFz0X8NpDUtMk2IkVAkYYlhGXBEmjSJIqSddC+Gio6PsWlwdJDssUTypOsyKfzHXvmSrbsMWSAAGzvgUHDNY+Stqmg7Qdg0zDXQdKw03ByqxQTgW5CXwKrRGx3I+cOmCZiM+C9qYm1pM8bxaJIOgLRtbafY3oW21FMBLIwEQ7mN9Cr6VVL9SrgqzY+tVSnUCj8M0J798H1ZbWQlHrK78b2DJjXpJOkt3BjvnLdY/78tYELI2BcGx8gk7ejmAhkYSLVYz7ZniRiv5c+MortPvCSyhsTyw8sUExkxRkmrzgA8Wz1NAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_full";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._btn_full.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_full.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._btn_full.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._btn_full);
		el=me._btn_home=document.createElement('div');
		els=me._btn_home__img=document.createElement('img');
		els.className='ggskin ggskin_btn_home';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAB+UlEQVRYhe2VO2gUURSGvyNxDShBFLugnUm0CATBLcRHo2g6iY2CFgG1EBvFwtYtYid2EgshvZ2FWIi9VSAPUsdYBFFCGk3ws8gsbsY7O9nNbgKSv5q555z/fPcxc2FP/4vUPnVC7dstgH512g1Nq/07DTCsLrpZi+rwTgFcUVdMa0W93G2AcXWtAKCuNXW8WwC1kuZ5Petk84o61SJAXVNqpaxHlAAcBt4Cl3Kh38A74DOwAJwEzgCjwL5c7kfgekT82Nq0NwOcUGcSs5tVqwU11Sye14x6vFWAEfVrwuyLeqSk9qi6lKhdUke2CjCqrhbs8dVE/kCBR0qr6rUygPvqeoHBt1zukDqfxebVoYZYqN8LfNbVe6nmoT4vKKrrfa5mMhefzMU/lPhNqA'+
			'HQk9XcBc4Cn7L3Y8CpHGtv02X8VwcSY7PAcvZczfq+SlarYwnyn+rBhpxm23FI/ZXwGEv1y3/TzVQBLtRfImIuIgaBgYgYjIi5htyLwP6tGrcCAXAjPxARC4m85Iw7BXFHPdcsQT0P3O4mRACv1dShQ+0FJim5DrYLATAA1ApiNTbukZbUDgTAY/VB44D6EHjUjlm7EAAv1ZsZwC3gRbtGPeUphQrgjXoaeEKL56BTELDxL3i6TY9tbUfHVLQSy/y9Rzqp5fKUPe2y/gCUDeDrRR6/9gAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_home";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 57px;';
		hs+='visibility : hidden;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._btn_home.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_home.onclick=function (e) {
			player.openNext("{node1}","");
		}
		me._btn_home.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._btn_home);
		el=me._btn_marion=document.createElement('div');
		els=me._btn_marion__img=document.createElement('img');
		els.className='ggskin ggskin_btn_marion';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_marion";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 156px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._btn_marion.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_marion.onclick=function (e) {
			player.openUrl("https:\/\/www.mariongallery.com\/","");
		}
		me._btn_marion.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._btn_marion);
		me._map_1.ggMarkerInstances=[];
		me._map_1.ggMapId = 'FloorPlan01';
		me._map_1.ggLastNodeId=null;
		me._map_1.ggSimpleFloorplanMarkerArray=[];
		me._map_1.ggFloorplanWidth=0;
		me._map_1.ggFloorplanHeight=0;
		me._map_1__mapdiv=document.createElement('div');
		me._map_1__mapdiv.className='ggskin ggskin_map';
		me._map_1.appendChild(me._map_1__mapdiv);
		me._map_1__img=document.createElement('img');
		me._map_1__img.className='ggskin ggskin_map';
		me._map_1__mapdiv.appendChild(me._map_1__img);
		me._map_1.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_1.ggRadar.update=function() {
			var radar=me._map_1.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_1.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_1.ggFilteredIds.length > 0 && me._map_1.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_1.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_1.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_1__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',500);
				radar.radarElement.setAttributeNS(null,'height',500);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 500 500');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 250 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 250 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 250 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 250 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 250;
				arcY1 += 250;
				arcX2 += 250;
				arcY2 += 250;
				var radarPathString = 'M250,250 L' + arcX1 + ',' + arcY1 + ' A 250 250 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#ff0000');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#ff0000');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_1__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 250;
				var radarYPos = activeMarker.radarYPos - 250;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_1.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_1__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_1.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_1.clientWidth;
			var mapHeight = me._map_1.clientHeight;
			var levelLimit = 500;
			var level = 1;
			while (mapWidth > levelLimit && mapHeight > levelLimit) {
				levelLimit *= 2;
				if (mapDetails['width'] < levelLimit || mapDetails['height'] < levelLimit) break;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_1.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_1__img.setAttribute('src', imageFilename);
		me._map_1__mapdiv.setAttribute('style','position: absolute; left: 0px; top: 0px;width:' + me._map_1.ggFloorplanWidth + 'px;height:' + me._map_1.ggFloorplanHeight + 'px;overflow:hidden;;');
		me._map_1__img.setAttribute('style','width:' + me._map_1.ggFloorplanWidth + 'px;height:' + me._map_1.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;');
		}
		me._map_1.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_1.clientWidth / me._map_1.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_1.ggFloorplanHeight = me._map_1.clientHeight;
				me._map_1.ggFloorplanWidth = me._map_1.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_1.ggFloorplanWidth = me._map_1.clientWidth;
				me._map_1.ggFloorplanHeight = me._map_1.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_1.ggInitMap=function() {
			me._map_1.ggMapNotLoaded = false;
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			me._map_1.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_1.ggPermeableMap = true;
			} else {
				me._map_1.ggPermeableMap = false;
			}
			me._map_1.ggCalculateFloorplanSize(mapDetails);
			me._map_1.ggShowSimpleFloorplan(mapDetails);
			me._map_1.ggFloorplanNorth = mapDetails['floorplannorth'];
		}
		me._map_1.ggClearMap=function() {
			me._map_1.ggClearMapMarkers();
			me._map_1.ggMapNotLoaded = true;
		}
		me._map_1.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_1.ggMapId = mapId;
			me._map_1.ggClearMap();
			me._map_1.ggInitMap();
			me._map_1.ggInitMapMarkers();
		}
		me._map_1.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_1.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_1.ggMapId);
					var xPos = (me._map_1.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_1.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_1.ggHMarkerAnchorOffset;
					yPos -= me._map_1.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_1.style['z-index'] + 2;
				}
			}
		}
		me._map_1.ggInitMapMarkers=function() {
			me._map_1.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_1.ggFilteredIds = [];
			if (me._map_1.ggFilter != '') {
				var filter = me._map_1.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_1.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_1.ggFilteredIds.length > 0) ids = me._map_1.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_1.ggMapId);
				if (coords.length>=2) {
					me._map_1.ggHMarkerAnchorOffset = 20;
					me._map_1.ggVMarkerAnchorOffset = 40;
					var marker = document.createElement('img');
					marker.setAttribute('src', basePath + 'images/_ggMapPin.png');
					marker.setAttribute('title', player.getNodeTitle(id));
					marker.style['width'] = '40px';
					marker.style['width'] = '40px';
					marker.style['cursor'] = 'pointer';
					marker.ggId = id;
					marker.onclick = function() {
						player.openNext('{' + this.ggId + '}');
					}
					me._map_1.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_1__mapdiv.appendChild(marker);
				}
			}
			me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_1);
		}
		me._map_1.ggClearMapMarkers=function() {
			for (id in me._map_1.ggSimpleFloorplanMarkerArray) {
				if (me._map_1.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_1__mapdiv.removeChild(me._map_1.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_1.ggMarkerInstances=[];
			me._map_1.ggSimpleFloorplanMarkerArray=[];
		}
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			if (me._map_1.ggMapNotLoaded == false) {
				me._map_1.ggClearMap();
				me._map_1.ggInitMap(false);
				me._map_1.ggInitMapMarkers(true);
			}
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		me._map_1.ggUpdateConditionTimer();
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_hotspot_next(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_next=document.createElement('div');
		el.ggId="Hotspot_next";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 469px;';
		hs+='position : absolute;';
		hs+='top : 165px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_next.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hotspot_next.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_next.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_next.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_next.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_next.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspot_1_customimage0=document.createElement('div');
		els=me._hotspot_1_customimage0__img=document.createElement('img');
		els.className='ggskin ggskin_hotspot_1_customimage0';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAACQ0lEQVRYhdWXu09UQRSHvyuGx2oCixXSrCZYiC+o9B/QqJXaqNTaUmlrY6UNJZ2PAhsNDSHR1hehwEelJppYrUaMGBQMMfws7tlkcrMzs/dB1ElOZmfmd875bu7MubPwD7Qkr4NgELgAjJvtA94BS2YzCXyrEjILcE7wSaCANQVntyJ5l+BeJHnWZgRdVUJczQnQsitVAYwJNgpCbAiOVAExF0iyKXhpvU8zVxYgESx7gt8RNEzXENz16L6owCl0IfZ6Av8QDGS0A4KfHn0jlGdbhGO/Z34+gRV3wsbzHv1oJI+/2aZs92TLgr6Mti/w6g6XgdgZ2HDXBTXT1Wzs09YKQ1iC54HgK4L71vs0z0oBGMTlgjWiZZeqgOgXrBYEWBX0l4YwkL9btg2iW/'+
			'A2J8AbQXdlEAZyIifE8UoBHJDZDgEebAmAQewRrEUA1hQp00USJ4K6M74YgTjvaOsq8/GyIOOCp4IXgh5n/qYH4Iaj6VH6mX8iGCuSfIdgWuk9YV1wTdDrrG8XPMoAPJRznRP0mt8vizOtPOVbcNsJftSjGRR8MM17pbfwdrpjTqxbnQLsdpwWI9pDgs+CgxHdohNzqBOIA47Db8FIRF+PrI9YnFbMILDruOA4NQUTeXe5naoJ82/FWsgT4JRtyGwZnhKcFgwrU5KVlvZhW58yveu/LjiZ50EQjApeR2rCd8FH60O6Vyp6xbNjNil4rPC1vp1tmt+ke7zbtY7fs+3qM6R/gocc2wV8BZqOLQGzSfr7/2h/AL+d9B4s/xh1AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Hotspot 1_CustomImage";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 46px;';
		hs+='left : -25px;';
		hs+='position : absolute;';
		hs+='top : -22px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_1_customimage0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_1_customimage0.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}",me.hotspot.target);
		}
		me._hotspot_1_customimage0.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_next.appendChild(me._hotspot_1_customimage0);
		me.__div = me._hotspot_next;
	};
	function SkinHotspotClass_hotspot_prev(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_prev=document.createElement('div');
		el.ggId="Hotspot_prev";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 576px;';
		hs+='position : absolute;';
		hs+='top : 166px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_prev.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hotspot_prev.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_prev.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_prev.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_prev.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_prev.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspot_1_customimage=document.createElement('div');
		els=me._hotspot_1_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_hotspot_1_customimage';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAACQ0lEQVRYhdWXu09UQRSHvyuGx2oCixXSrCZYiC+o9B/QqJXaqNTaUmlrY6UNJZ2PAhsNDSHR1hehwEelJppYrUaMGBQMMfws7tlkcrMzs/dB1ElOZmfmd875bu7MubPwD7Qkr4NgELgAjJvtA94BS2YzCXyrEjILcE7wSaCANQVntyJ5l+BeJHnWZgRdVUJczQnQsitVAYwJNgpCbAiOVAExF0iyKXhpvU8zVxYgESx7gt8RNEzXENz16L6owCl0IfZ6Av8QDGS0A4KfHn0jlGdbhGO/Z34+gRV3wsbzHv1oJI+/2aZs92TLgr6Mti/w6g6XgdgZ2HDXBTXT1Wzs09YKQ1iC54HgK4L71vs0z0oBGMTlgjWiZZeqgOgXrBYEWBX0l4YwkL9btg2iW/'+
			'A2J8AbQXdlEAZyIifE8UoBHJDZDgEebAmAQewRrEUA1hQp00USJ4K6M74YgTjvaOsq8/GyIOOCp4IXgh5n/qYH4Iaj6VH6mX8iGCuSfIdgWuk9YV1wTdDrrG8XPMoAPJRznRP0mt8vizOtPOVbcNsJftSjGRR8MM17pbfwdrpjTqxbnQLsdpwWI9pDgs+CgxHdohNzqBOIA47Db8FIRF+PrI9YnFbMILDruOA4NQUTeXe5naoJ82/FWsgT4JRtyGwZnhKcFgwrU5KVlvZhW58yveu/LjiZ50EQjApeR2rCd8FH60O6Vyp6xbNjNil4rPC1vp1tmt+ke7zbtY7fs+3qM6R/gocc2wV8BZqOLQGzSfr7/2h/AL+d9B4s/xh1AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Hotspot 1_CustomImage";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 46px;';
		hs+='left : -25px;';
		hs+='position : absolute;';
		hs+='top : -22px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_1_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_1_customimage.onclick=function (e) {
			player.openNext("{"+player.getPrevNode()+"}",me.hotspot.target);
		}
		me._hotspot_1_customimage.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_prev.appendChild(me._hotspot_1_customimage);
		me.__div = me._hotspot_prev;
	};
	function SkinHotspotClass_hotspot_cisco_ave(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_cisco_ave=document.createElement('div');
		el.ggId="Hotspot_cisco_ave";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_cisco_ave.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hotspot_cisco_ave.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_cisco_ave.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_cisco_ave.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_cisco_ave.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_cisco_ave.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspot_2_customimage=document.createElement('div');
		els=me._hotspot_2_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_hotspot_2_customimage';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAACRElEQVRYhc2Xv09TURzFz220hoTNSKhErIlxw5IaXRidwV0GC+o/4dJO/hPuTuJQB8HEVQhSA4xCoomCiUQNC8Q6fBy8z369vr4fpU05SfPa7z3n3HP7Xt79XukUwOUhA1ckzUq6LemSpJKk85K+Sfoi6ZOk15JeOOc+9DUpcAdokQ8tYK4fk08DqzknD/EGmO41wDxwFBgeA03gIVAFxoGiv1Z9vel5FkfA3bwB6jEreglMZtRPAssxHvWsARYD4XeglmsVHa+a11sspIlmgLYRrALjvQQwniVgzXi2gZlu5AKwZciHwOUE8yLQMJ9iArfs/SJsAoU44v3gb7uXssLRgD+awq8F/MU40q4hPEsy7CWE1ywZ/k5Ud36wImnT135JmnDOHaQYFiU9Mq'+
			'XHzrl2imZM0mdJZ32p4pzbjgYbJuFK2opOAuCVmashSdHDccvwmoMMEfjflKQz/seEGdjN4tTL7Yjx78wLHJi/aCpjiNwPptdNGc1XqXM7hoooxL6pXRzwnPbW79sQe2bg6oBDWP89G2LdDJy8EUmG9X/79xtQMQ9LG7iQ5tTjG3OMfzfI6yFhxwwuDSjE87jXtiWcig2swJ8tNsIhUE4w7f9W7slhU7MGlJJWmAbyNDVGFLZ3P0hrybp7LXi9RS2ruM7/WCZfo7sS4xHb6HY9gQHzkp5IGjHln5K2JL2T1PLX95KuSapKuuGvFUnnjO5Y0gPn3NMsiwiDDPfwE4SZAzZyTr4BzGbxz3sgLiv7gfhjHu+h4zdAOHnQLoHTvgAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Hotspot 2_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 31px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_2_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_2_customimage.onclick=function (e) {
			me._cisco_ave.style[domTransition]='none';
			me._cisco_ave.style.visibility=(Number(me._cisco_ave.style.opacity)>0||!me._cisco_ave.style.opacity)?'inherit':'hidden';
			me._cisco_ave.ggVisible=true;
			skin._rectangle_1.style[domTransition]='none';
			skin._rectangle_1.style.visibility=(Number(skin._rectangle_1.style.opacity)>0||!skin._rectangle_1.style.opacity)?'inherit':'hidden';
			skin._rectangle_1.ggVisible=true;
			player.videoPanoPause();
			skin._map_1.ggClearMap();
			skin._map_1.style[domTransition]='none';
			skin._map_1.style.visibility='hidden';
			skin._map_1.ggVisible=false;
			skin._btn_map.style[domTransition]='none';
			skin._btn_map.style.visibility='hidden';
			skin._btn_map.ggVisible=false;
			skin._btn_full.style[domTransition]='none';
			skin._btn_full.style.visibility='hidden';
			skin._btn_full.ggVisible=false;
			skin._btn_home.style[domTransition]='none';
			skin._btn_home.style.visibility='hidden';
			skin._btn_home.ggVisible=false;
			skin._btn_marion.style[domTransition]='none';
			skin._btn_marion.style.visibility='hidden';
			skin._btn_marion.ggVisible=false;
		}
		me._hotspot_2_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._hotspot_cisco_ave.appendChild(me._hotspot_2_customimage);
		el=me._cisco_ave=document.createElement('div');
		els=me._cisco_ave__img=document.createElement('img');
		els.className='ggskin ggskin_cisco_ave';
		hs=basePath + 'images/cisco_ave.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="cisco_ave";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 375px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 600px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._cisco_ave.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._cisco_ave.onclick=function (e) {
			me._cisco_ave.style[domTransition]='none';
			me._cisco_ave.style.visibility='hidden';
			me._cisco_ave.ggVisible=false;
			skin._rectangle_1.style[domTransition]='none';
			skin._rectangle_1.style.visibility='hidden';
			skin._rectangle_1.ggVisible=false;
			if (skin._map_1.ggMapNotLoaded) {
				skin._map_1.ggInitMap(false);
				skin._map_1.ggInitMapMarkers(true);
			}
			skin._map_1.style[domTransition]='none';
			skin._map_1.style.visibility=(Number(skin._map_1.style.opacity)>0||!skin._map_1.style.opacity)?'inherit':'hidden';
			skin._map_1.ggVisible=true;
			skin._btn_map.style[domTransition]='none';
			skin._btn_map.style.visibility=(Number(skin._btn_map.style.opacity)>0||!skin._btn_map.style.opacity)?'inherit':'hidden';
			skin._btn_map.ggVisible=true;
			skin._btn_full.style[domTransition]='none';
			skin._btn_full.style.visibility=(Number(skin._btn_full.style.opacity)>0||!skin._btn_full.style.opacity)?'inherit':'hidden';
			skin._btn_full.ggVisible=true;
			skin._btn_home.style[domTransition]='none';
			skin._btn_home.style.visibility=(Number(skin._btn_home.style.opacity)>0||!skin._btn_home.style.opacity)?'inherit':'hidden';
			skin._btn_home.ggVisible=true;
			skin._btn_marion.style[domTransition]='none';
			skin._btn_marion.style.visibility=(Number(skin._btn_marion.style.opacity)>0||!skin._btn_marion.style.opacity)?'inherit':'hidden';
			skin._btn_marion.ggVisible=true;
		}
		me._cisco_ave.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._hotspot_cisco_ave.appendChild(me._cisco_ave);
		me.__div = me._hotspot_cisco_ave;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='Hotspot_next') {
			hotspot.skinid = 'Hotspot_next';
			hsinst = new SkinHotspotClass_hotspot_next(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='Hotspot_prev') {
			hotspot.skinid = 'Hotspot_prev';
			hsinst = new SkinHotspotClass_hotspot_prev(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
			hotspot.skinid = 'Hotspot_cisco_ave';
			hsinst = new SkinHotspotClass_hotspot_cisco_ave(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['Hotspot_next']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot_next'].length; i++) {
				hotspotTemplates['Hotspot_next'][i] = null;
			}
		}
		if(hotspotTemplates['Hotspot_prev']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot_prev'].length; i++) {
				hotspotTemplates['Hotspot_prev'][i] = null;
			}
		}
		if(hotspotTemplates['Hotspot_cisco_ave']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot_cisco_ave'].length; i++) {
				hotspotTemplates['Hotspot_cisco_ave'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me.skinTimerEvent();
};