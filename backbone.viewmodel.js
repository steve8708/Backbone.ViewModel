/* backbone.viewmodel.js v0.0.2 (coffeescript output) */ 

(function() {
  var method, viewModelMethods, _fn, _i, _len,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice;

  Backbone.ViewModel = (function(_super) {
    __extends(ViewModel, _super);

    function ViewModel() {
      var _this = this;
      this.state = new Backbone.Model;
      ViewModel.__super__.constructor.apply(this, arguments);
      this.listenTo(this.state, 'all', function() {
        return _this.trigger.apply(_this, [eventName].concat(__slice.call(arguments)));
      });
    }

    return ViewModel;

  })(Backbone.View);

  viewModelMethods = ['get', 'set', 'toJSON', 'has', 'unset', 'escape', 'changed', 'fetch', 'sync', 'clone', 'keys', 'values', 'pairs', 'invert', 'pick', 'omit', 'clear', 'toggle'];

  _fn = function(method) {
    var _base;
    return (_base = Backbone.ViewModel.prototype)[method] || (_base[method] = function() {
      var _ref;
      return (_ref = this.state)[method].apply(_ref, arguments);
    });
  };
  for (_i = 0, _len = viewModelMethods.length; _i < _len; _i++) {
    method = viewModelMethods[_i];
    _fn(method);
  }

}).call(this);
