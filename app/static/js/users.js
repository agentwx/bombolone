// Generated by CoffeeScript 1.6.3
var UsersCtrl;

UsersCtrl = function($scope, $resource, $rootScope) {
  var upload, user_value, __init_submit;
  user_value = page["user"] || {};
  $scope.user = {
    _id: user_value["_id"] || "",
    username: user_value["username"] || "",
    email: user_value["email"] || "",
    rank: user_value["rank"] || "",
    lan: user_value["lan"] || "",
    time_zone: user_value["time_zone"] || "",
    name: user_value["name"] || "",
    location: user_value["location"] || "",
    web: user_value["web"] || "",
    description: user_value["description"] || "",
    password: "",
    password_new: "",
    password_check: "",
    image_show: user_value["image_show"] || "/static/avatars/default.jpg",
    image_uploaded: "",
    status: user_value["status"] || 0
  };
  $scope.description_counter = 200;
  if (path.match(/^\/admin\/users\/new\/?$/i) || path.match(/^\/admin\/users\/([^\/]+)\/?$/i)) {
    upload = {
      module: "avatars",
      frame_class: "upload_target",
      action: "/upload_avatar/",
      action_iframe: "/upload_avatar_iframe/",
      action_base: "{{ url_for('users.update', _id=_id) }}"
    };
  }
  __init_submit = function() {
    var params;
    $rootScope.message_show = false;
    params = $scope.user;
    params["token"] = app["token"];
    return params;
  };
  $scope.save = function() {
    var params;
    params = __init_submit();
    return $scope.ajaxAccountUpdate.save(params, function(resource) {
      $scope.user = resource.user;
      return $scope.show_message(resource);
    });
  };
  $scope.create = function() {
    var params;
    params = __init_submit();
    return $scope.ajaxUsersNew.save(params, function(resource) {
      $scope.user = resource.user;
      return $scope.show_message(resource);
    });
  };
  $scope.update_profile = function() {
    var params;
    params = __init_submit();
    return $scope.ajaxAccountUpdateProfile.save(params, function(resource) {
      $scope.user = resource.user;
      return $scope.show_message(resource);
    });
  };
  $scope.update_account = function() {
    var params;
    params = __init_submit();
    return $scope.ajaxAccountUpdateAccount.save(params, function(resource) {
      $scope.user = resource.user;
      return $scope.show_message(resource);
    });
  };
  return $scope.update_password = function() {
    var params;
    params = __init_submit();
    return $scope.ajaxAccountUpdatePassword.save(params, function(resource) {
      $scope.user = resource.user;
      return $scope.show_message(resource);
    });
  };
};

UsersCtrl.$inject = ["$scope", "$resource", "$rootScope"];
