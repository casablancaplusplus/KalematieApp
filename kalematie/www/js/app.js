// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('kalematieApp', ['ionic']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/quotes");

    $stateProvider.state("quotes", {
        abstract: true,
        url: "/quotes",
        views: {
            quotes: {
                template: "<ion-nav-view></ion-nav-view>"
            }
        }
    });

    // Quotes Index
    $stateProvider.state("quotes.index", {
        url: "",
        templateUrl: "quotes.html",
        controller: "quotesCtrl"
    });

    $stateProvider.state("authors", {
        abstract: true,
        url: "/authors",
        views: {
            authors: {
                template: "<ion-nav-view></ion-nav-view>"
            }
        }
    });

    // Authors Index
    $stateProvider.state("authors.index", {
        url: "",
        templateUrl: "authors.html",
        controller: "authorsCtrl"
    });

});

// Quote index controller
app.controller("quotesCtrl", function($scope, $ionicModal, $ionicPopup) {
    $scope.quotes = [
        {
            text : "You can do it",
            author : "John Doe"
        }, {
            text : "Its okay to feel disapointed sometimes",
            author : "Nazar"
        }, {
            text : "Sometimes I feel like only google understands me",
            author : "Goog.le"
        }, {
            text : "Go Go Go GO GO GO Go GO Go GO Go Go Go Go Go GO Go",
            author: "Mr. Go"
        }, {
            text : "Ja Ja Ja Celebrate tonight",
            author: "Yah Guy"
        }, {
            text: "آن الانسان مخلوق من طین",
            author: "کلام الله"
        }

    ];
    $scope.modalQuoteIndex = 0;

    $scope.showQuoteModal = function (index) {
        $scope.modalQuoteIndex = index;
        $scope.showModal("quoteModal.html");
    };

    $scope.showComposeModal = function () {
        $scope.showModal("composeModal.html");
    };

    $scope.showModal = function(tempUrl) {
        $ionicModal.fromTemplateUrl(tempUrl, {
            scope : $scope,
            animation : "slide-in-up"
        }).then(function(modal){
            $scope.modal = modal;
            $scope.modal.show();
        });
    };

    // Close the modal
    $scope.closeModal = function() {
        $scope.modal.hide();
        $scope.modal.remove();
    };

    // categories popup
    
    $scope.showCatPopup = function() {
        var myPopup = $ionicPopup.show({
            templateUrl : 'catPopupTemp.html',
            title : 'Choose a quote category',
            scope : $scope,
            buttons : [
                {
                    text : 'Cancel',
                    type : 'button button-assertive button-full',
                }
            ]
        });
    };

});

// Authors index controller TODO : tidy up 
app.controller("authorsCtrl", function($scope) {
    $scope.authors = [
    {
        id : 1,
        username: "nazar",
        rating : 8.2
    }, {
        id : 2,
        username: "jacob",
        rating: 4.3
    }, {
        id: 3,
        username: "perry",
        rating: 6
    }, {
        id: 4,
        username: "kat",
        rating: 2.2
    }, {
        id: 5,
        username: "Ali",
        rating: 5.1
    }, {
        id: 6,
        username : "John",
        rating: 6.6
    }

    ];
});
