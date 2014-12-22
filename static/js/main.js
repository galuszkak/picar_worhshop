(function() {
  var s = new WebSocket("ws://" + document.location.host + "/control-panel");
    s.onopen = function() {
  };

  s.onmessage = function(e) {
    var bb = document.getElementById('blackboard')
    var html = bb.innerHTML;
    bb.innerHTML = html + '<br/>' + e.data;
  };

  s.onerror = function(e) {
    alert(e);
  }
    
  s.onclose = function(e) {
  }
            
  function invia() {
    var value = document.getElementById('testo').value;
    s.send(value);
  }

  var listener = new window.keypress.Listener();
  var my_scope = this;
  var my_combos = listener.register_many([
      {
        "keys"           : "up",
        "is_exclusive"   : true,
        "prevent_repeat" : "true",
        "on_keydown"     : function() {
            msg = "car forward";
            s.send(msg)
            console.log(msg);
        },
        "on_keyup"       : function(e) {
            msg = "car stop_moving";
            s.send(msg)
            console.log(msg);
        },
        "this"           : my_scope
      },
      {
        "keys"           : "down",
        "is_exclusive"   : true,
        "prevent_repeat" : "true",
        "on_keydown"     : function() {
            msg = "car backward";
            s.send(msg)
            console.log(msg);
        },
        "on_keyup"       : function(e) {
            msg = "car stop_moving";
            s.send(msg)
            console.log(msg);
        },
        "this"           : my_scope
      },
      {
        "keys"           : "left",
        "is_exclusive"   : true,
        "prevent_repeat" : "true",
        "on_keydown"     : function() {
            msg = "car left";
            s.send(msg)
            console.log(msg);
        },
        "on_keyup"       : function(e) {
            msg = "car straight";
            s.send(msg)
            console.log(msg);
        },
        "this"           : my_scope
      },
      {
        "keys"           : "right",
        "is_exclusive"   : true,
        "prevent_repeat" : "true",
        "on_keydown"     : function() {
            msg = "car right";
            s.send(msg)
            console.log(msg);
        },
        "on_keyup"       : function(e) {
            msg = "car straight";
            s.send(msg)
            console.log(msg);
        },
        "this"           : my_scope
      },
      {
        "keys"           : "space",
        "is_exclusive"   : true,
        "prevent_repeat" : "true",
        "on_keydown"     : function() {
            msg = "stop";
            s.send(msg)
            console.log(msg);
        },
        "this"           : my_scope
      },
      {
        "keys"           : "x",
        "is_exclusive"   : true,
        "prevent_repeat" : "true",
        "on_keydown"     : function() {
            msg = "car slower";
            s.send(msg)
            console.log(msg);
        },
        "this"           : my_scope
      },
      {
        "keys"           : "z",
        "is_exclusive"   : true,
        "prevent_repeat" : "true",
        "on_keydown"     : function() {
            msg = "car faster";
            s.send(msg)
            console.log(msg);
        },
        "this"           : my_scope
      }
  ]);

  var vertical_slider = new Slider("#vertical");
  var horizontal_slider = new Slider("#horizontal");
  
  vertical_slider.on("change", function(values) {
    msg = "fpv vertical_angle " + values.newValue;
    s.send(msg)
    console.log(msg);
  });

  horizontal_slider.on("change", function(values) {
    msg = "fpv horizontal_angle " + values.newValue;
    s.send(msg)
    console.log(msg);
  });

}).call(this);


