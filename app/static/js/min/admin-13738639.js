var AdminCtrl;AdminCtrl=function($scope,$resource,$rootScope,$compile){var check_remove_hidden;$rootScope.items_list=[];$scope.tab_menu={selected:"account"};$scope.select_tab=function(tab_selected){return $scope.tab_menu.selected=tab_selected};$scope.remove=function(id_item,index){$scope.id_item=id_item;$scope.index_item=index;return $(".check_remove").removeClass("hidden")};$scope.pop_item_from_list=function(resource){return $scope.items_list.splice($scope.index_item,1)};$scope.remove_item=function(check,index){var params;if(check){params={_id:$scope.id_item,token:app.token};$scope.ajaxAdminRemoveItem=$resource($rootScope.API+"/"+$rootScope.admin_module+"/remove.json",{callback:"JSON_CALLBACK"},$rootScope.request_with_token);$scope.ajaxAdminRemoveItem.get(params,function(resource){if(resource.success){return $scope.pop_item_from_list()}else{return alert("You can't remove this element")}})}return check_remove_hidden()};check_remove_hidden=function(){return $(".check_remove").addClass("hidden")}};AdminCtrl.$inject=["$scope","$resource","$rootScope"];