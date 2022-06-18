function _interopDefault(ex) {
  return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
}

var React = _interopDefault(require("react"));
var reactRouterDom = require("react-router-dom");

function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var GuardedRoute = function GuardedRoute(_ref) {
  var Component = _ref.component,
    validatorFunction = _ref.validatorFunction,
    redirectTo = _ref.redirectTo,
    rest = _objectWithoutPropertiesLoose(_ref, [
      "component",
      "validatorFunction",
      "redirectTo",
    ]);

  return /*#__PURE__*/ React.createElement(
    reactRouterDom.Route,
    _extends({}, rest, {
      render: function render(props) {
        if (validatorFunction) {
          return /*#__PURE__*/ React.createElement(Component, props);
        } else {
          return /*#__PURE__*/ React.createElement(reactRouterDom.Redirect, {
            to: {
              pathname: redirectTo ? redirectTo : "/",
              state: {
                from: props.location,
              },
            },
          });
        }
      },
    })
  );
};

module.exports = GuardedRoute;
//# sourceMappingURL=index.js.map
