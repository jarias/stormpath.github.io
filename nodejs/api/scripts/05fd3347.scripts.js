"use strict";function anchor(a,b){return{name:a,aName:b?b:a}}function item(a,b,c){var d={name:a,href:b?b:a.toLowerCase()};if(c){for(var e=[],f=0;f<c.length;f++){var g=c[f],h={name:g.name,href:d.href+"#"+g.aName};e.push(h)}d.children=e}return d}function items(){return[item("Overview","home",[anchor("Install","install"),anchor("Quickstart","quickstart")]),item("Client",null,[anchor("Overview","top"),anchor("Client","ctor"),anchor("createApplication"),anchor("createDirectory"),anchor("getAccount"),anchor("getApplication"),anchor("getApplications"),anchor("getCurrentTenant"),anchor("getDirectories"),anchor("getDirectory"),anchor("getGroup"),anchor("getGroupMembership")]),item("ApiKey","apiKey",[anchor("Overview","top"),anchor("ApiKey","ctor"),anchor("toString")]),item("Account",null,[anchor("Overview","top"),anchor("addToGroup"),anchor("createApiKey"),anchor("getApiKeys"),anchor("getGroups"),anchor("getGroupMemberships"),anchor("getDirectory"),anchor("getTenant"),anchor("getCustomData"),anchor("getProviderData")]),item("AccountStoreMapping","accountStoreMapping",[anchor("Overview","top"),anchor("getApplication"),anchor("setApplication"),anchor("getAccountStore"),anchor("setAccountStore")]),item("Application",null,[anchor("Overview","top"),anchor("authenticateAccount"),anchor("authenticateApiRequest"),anchor("createAccount"),anchor("createGroup"),anchor("getAccounts"),anchor("getApiKey"),anchor("getGroups"),anchor("getTenant"),anchor("sendPasswordResetEmail"),anchor("verifyPasswordResetToken"),anchor("resetPassword"),anchor("getAccount"),anchor("getAccountStoreMappings"),anchor("getDefaultAccountStore"),anchor("setDefaultAccountStore"),anchor("getDefaultGroupStore"),anchor("setDefaultGroupStore"),anchor("createAccountStoreMapping"),anchor("addAccountStore")]),item("AuthenticationResult","authenticationResult",[anchor("Overview","top"),anchor("getAccount")]),item("Cache","cache",[anchor("Overview","top"),anchor("get"),anchor("put"),anchor("delete"),anchor("clear"),anchor("size")]),item("Cache manager","cacheManager",[anchor("Overview","top"),anchor("getCache"),anchor("createCache")]),item("CollectionResource","collectionResource",[anchor("Overview","top"),anchor("each"),anchor("eachSeries"),anchor("eachLimit"),anchor("map"),anchor("mapSeries"),anchor("mapLimit"),anchor("filter"),anchor("filterSeries"),anchor("reject"),anchor("rejectSeries"),anchor("reduce"),anchor("reduceRight"),anchor("detect"),anchor("detectSeries"),anchor("sortBy"),anchor("some"),anchor("every"),anchor("concat"),anchor("concatSeries")]),item("CustomData","customData",[anchor("Overview","top"),anchor("get","get"),anchor("delete","delete"),anchor("remove","remove"),anchor("save","save")]),item("Directory",null,[anchor("Overview","top"),anchor("createAccount"),anchor("createGroup"),anchor("getAccounts"),anchor("getGroups"),anchor("getTenant"),anchor("getProvider")]),item("Group",null,[anchor("Overview","top"),anchor("addAccount"),anchor("getAccounts"),anchor("getAccountMemberships"),anchor("getDirectory"),anchor("getTenant"),anchor("getCustomData")]),item("GroupMembership","groupMembership",[anchor("Overview","top"),anchor("getAccount"),anchor("getGroup")]),item("ResourceError","resourceError",[anchor("Overview","top")]),item("Tenant",null,[anchor("Overview","top"),anchor("createApplication"),anchor("createDirectory"),anchor("getApplications"),anchor("getDirectories"),anchor("verifyAccountEmail")])]}angular.module("docsApp",["ngCookies","ngRoute","ngSanitize","ui.bootstrap"]).config(["$routeProvider","$locationProvider",function(a,b){b.html5Mode(!0),a.when("/home",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/client",{templateUrl:"views/client.html",controller:"MainCtrl"}).when("/apiKey",{templateUrl:"views/apiKey.html",controller:"MainCtrl"}).when("/account",{templateUrl:"views/account.html",controller:"MainCtrl"}).when("/accountStoreMapping",{templateUrl:"views/accountStoreMapping.html",controller:"MainCtrl"}).when("/application",{templateUrl:"views/application.html",controller:"MainCtrl"}).when("/authenticationResult",{templateUrl:"views/authenticationResult.html",controller:"MainCtrl"}).when("/cache",{templateUrl:"views/cache.html",controller:"MainCtrl"}).when("/cacheManager",{templateUrl:"views/cacheManager.html",controller:"MainCtrl"}).when("/collectionResource",{templateUrl:"views/collectionResource.html",controller:"MainCtrl"}).when("/customData",{templateUrl:"views/customData.html",controller:"MainCtrl"}).when("/directory",{templateUrl:"views/directory.html",controller:"MainCtrl"}).when("/group",{templateUrl:"views/group.html",controller:"MainCtrl"}).when("/groupMembership",{templateUrl:"views/groupMembership.html",controller:"MainCtrl"}).when("/resourceError",{templateUrl:"views/resourceError.html",controller:"MainCtrl"}).when("/tenant",{templateUrl:"views/tenant.html",controller:"MainCtrl"}).otherwise({redirectTo:"/home"})}]),angular.module("docsApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("docsApp").controller("MainNavController",["$scope","$location","$window",function(a,b,c){a.oneAtATime=!0,a.items=items(),a.changeView=function(a){b.path(a),c.scrollTo(0,0)},a.$on("$viewContentLoaded",function(){Prism.highlightAll(),angular.element(document.getElementsByTagName("table")).addClass("table table-striped table-hover table-curved")})}]);