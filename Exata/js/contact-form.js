(function() {
    var floatingLabel;
  
    floatingLabel = (function() {
      function floatingLabel(form, options) {
        var event, input, label, _i, _j, _len, _len1, _ref, _ref1;
        if (options == null) {
          options = {};
        }
        if (!form) {
          return;
        }
        options.focusClass || (options.focusClass = "focus");
        options.activeClass || (options.activeClass = "active");
        options.errorClass || (options.errorClass = "error");
        form.classList.add('has-floated-label');
        _ref = form.querySelectorAll('label');
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          label = _ref[_i];
          if (!(input = document.querySelector("#" + (label.getAttribute('for'))))) {
            return;
          }
          _ref1 = ['keyup', 'input', 'change'];
          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
            event = _ref1[_j];
            input.addEventListener(event, function() {
              this.parentNode.classList.remove(options.errorClass);
              return this.parentNode.classList.toggle(options.activeClass, !!this.value);
            });
          }
          input.addEventListener('focus', function() {
            return this.parentNode.classList.add(options.focusClass);
          });
          input.addEventListener('blur', function() {
            return this.parentNode.classList.remove(options.focusClass);
          });
          input.parentNode.classList.toggle(options.activeClass, !!input.value);
        }
      }
  
      return floatingLabel;
  
    })();
  
    window.floatingLabel = new floatingLabel(document.querySelector('.form'));
  
  }).call(this);