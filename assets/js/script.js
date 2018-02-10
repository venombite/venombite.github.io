/* Sky texture changer*/
$(function() {

	$('.img-thumbnail').on('click', function() {
		var panoId = '#'+ $(this).attr('data-pano');	
		//alert(panoId);
		document.querySelector('#background').setAttribute('src', panoId);
	});
	
});

/* Sky texture changer Target*/
AFRAME.registerComponent('button-interaction-handler', {
	schema: {
	    skytextID: {default: '#skyTexture'}
	    },

	init: function () {
	var data = this.data;
	var skyEl = this.el.sceneEl.querySelector('#background');

	this.el.addEventListener('click', function () {
	skyEl.setAttribute('src', data.skytextID);  
	});

	}  
});
