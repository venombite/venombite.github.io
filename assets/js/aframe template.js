AFRAME.registerComponent('foo', {
  schema: {
    bar: {type: 'number'},
    baz: {type: 'string'}
  },
  init: function () {
    // Do something when component first attached.
  },
  update: function () {
    // Do something when component's data is updated.
  },
  remove: function () {
    // Do something the component or its entity is detached.
  },
  tick: function (time, timeDelta) {
    // Do something on every scene tick or frame.
  }
});

<a-entity foo="bar: 5; baz: bazValue"></a-entity>

syntax
<a-entity ${componentName}="${propertyName1}: ${propertyValue1}; ${propertyName2:}: ${propertyValue2}">
ex:


//CURSOR
<a-entity cursor="fuse: true;"
          position="0 0 -3"
          geometry="primitive: ring"
          material="color: black; shader: flat">
  <a-animation begin="click" easing="ease-in" attribute="scale" dur="150"
               fill="forwards" from="0.1 0.1 0.1" to="1 1 1"></a-animation>
  <a-animation begin="cursor-fusing" easing="ease-in" attribute="scale" dur="1500"
               fill="backwards" from="1 1 1" to="0.1 0.1 0.1"></a-animation>
</a-entity>


<a-entity camera look-controls>
  <a-entity cursor="fuse: true; fuseTimeout: 500"
            position="0 0 -1"
            geometry="primitive: ring; radiusInner: 0.02; radiusOuter: 0.03"
            material="color: black; shader: flat">
  </a-entity>
</a-entity>
<a-entity id="box" cursor-listener geometry="primitive: box" material="color: blue"></a-entity>

// Component to change to a sequential color on click.
AFRAME.registerComponent('cursor-listener', {
  init: function () {
    var lastIndex = -1;
    var COLORS = ['red', 'green', 'blue'];
    this.el.addEventListener('click', function (evt) {
      lastIndex = (lastIndex + 1) % COLORS.length;
      this.setAttribute('material', 'color', COLORS[lastIndex]);
      console.log('I was clicked at: ', evt.detail.intersection.point);
    });
  }
});