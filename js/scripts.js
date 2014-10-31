function NavController($scope) {
    $scope.navItems = [ { title: 'home', id: 'nav-home' ,  style:'bg-orange', section: 'nav-panel' },
                        { title: 'services', id:  'nav-services', style: 'bg-yellow', section: 'services-header' },
                        { title: 'portfolio', id: 'nav-portfolio' , style:  'bg-green', section: 'portfolio-header' },
                        { title: 'abaout', id: 'nav-abaout' , style:  'bg-purple',  section: 'abaout-header' },
                        { title: 'contacts', id: 'nav-contract' , style: 'bg-blue', section: 'contacts-header'    }  ];
    
    $scope.scrollToElement = function( eID ) 
    {
       
       var startY = currentYPosition();
       var stopY = elmYPosition( eID );
       var distance = stopY > startY ? stopY - startY : startY - stopY;
       var speed = Math.round(distance / 100);
       if (speed >= 20) 
           speed = 20;
       var step = Math.round(distance / 50 );
       var leapY = stopY > startY ? startY + step : startY - step;
       var timer = 0;
       if (stopY > startY ) 
       {
            for ( var i= startY; i<stopY; i+=step ) 
            {
                setTimeout("window.scrollTo(0, "+leapY+")", timer );
                leapY += step; if (leapY > stopY) leapY = stopY; timer+=10;
            } 
            return;
       }
       for ( var i=startY; i>stopY; i-= step ) 
       {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
       }
    }
    
    function currentYPosition() {
            if (self.pageYOffset) return self.pageYOffset;
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
    };
        
    function elmYPosition( eID ) {
            var elm = document.getElementById( eID );
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            } return y;
    };
}

var app = angular.module('site', ['ngAnimate']);
app.controller( 'SliderController', function($scope){
    $scope.images = [ { source: "img/portfolio.jpg" },
                      { source: "img/img2.jpg" }, 
                      { source: "img/img3.jpg" }, 
                      { source: "img/img4.jpg" } ];
    $scope.currentIndex = 0;
    $scope.slideDir = 'slide-right';
         
    $scope.isCurrentSlideIndex = function ( index ){
        return $scope.currentIndex == index;
    };
    
    $scope.prevSlide = function(){
        $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex  : $scope.images.length - 1;
        $scope.slideDir = 'slide-left';
    };
         
    $scope.nextSlide = function(){
        $scope.currentIndex = ( $scope.currentIndex < ( $scope.images.length - 1 ) ) ? ++$scope.currentIndex : 0;
        $scope.slideDir = 'slide-right';
    };      
});
