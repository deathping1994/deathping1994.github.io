"use strict";angular.module("deathping1994githubioApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","angular-loading-bar"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/skills",{templateUrl:"views/skills.html",controller:"SkillsCtrl",controllerAs:"skills"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/contact",{templateUrl:"views/contact.html"}).when("/kidding",{templateUrl:"views/kidding.html"}).when("/hiring",{templateUrl:"views/hire.html"}).when("/projects",{templateUrl:"views/projects.html",controller:"ProjectCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("deathping1994githubioApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("deathping1994githubioApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("deathping1994githubioApp").controller("SkillsCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("deathping1994githubioApp").controller("ProjectCtrl",["$scope","$http",function(a,b){a.projects,b.get("https://api.github.com/users/deathping1994/repos").then(function(b){a.projects=b.data}),a.sortproject=function(a){var b=new Date(a.updated_at);return-b},a.contributions=[{name:"Air Mozilla",url:"https://github.com/mozilla/airmozilla",description:"AirMozilla is the video broadcasting site for the Mozilla project"},{name:"Apache Concerted",url:"https://github.com/apache/incubator-concerted",description:"Concerted is a next generation big data engine aimed at supporting massive in memory reads for OLAP support.The engine is flexible, with no single point of entry and flexibility to use APIs suited for each use case with full scalability.Concerted allows applications to use the native APIs to have the flexibility to store, access, scale data in memory on demand. No auxillary infrastructure is needed.Concerted implements its own locking manager and transaction manager utilizing the object oriented model,thus greatly simplifying the management of processes like commit and abort, depending a lot on the OS's native support."},{name:"Mozilla Treeherder",url:"https://github.com/mozilla/treeherder",description:"A reporting dashboard & service for managing CI data for commits to Mozilla projects"},{name:"Moz-Games",url:"https://github.com/mozilla/moz-games",description:"Mozilla Games site"}]}]),angular.module("deathping1994githubioApp").run(["$templateCache",function(a){a.put("views/about.html",'<div class="container"> <h2 class="text-center">About me!</h2> <p class="well text-muted">I am a <mark><b>full stack developer</b></mark>, I code everything be it front end, back end android app or anything else if it is even remotely related to computers I am up for it. I am currently enrolled as a <mark>student in Jaypee institute of information Technology</mark> in B.Tech Computer Science. </p> <h3>Expertise</h3> <p class="well text-muted"> My area of <mark><b>expertise is Scalable web apps and Restfull web services</b></mark> but frankly I am a Jack of all trades, infact I\'ve always aimed to be a one stop shop for all queries regarding I project. I strongly oppose the Idea of having a team of 20 for a 10 week project for the sake of having experts of each field. </p> <h3>Interests</h3> <p class="well text-muted"> My interests include networking and distributed systems, most of my works involve porting some desktop app or solution to a web based platform. I love working with Api based restfull backends and like to keep my stuff modular. </p> <p class="well text-muted"> Most Importantly I am a problem solver and a fast learner, you come to me with a problem and leave with a solution, might not be the best solution but <i><b>It Works!</b></i> and that\'s what matters. </p> </div>'),a.put("views/contact.html",'<div class="jumbotron ng-scope"> <h2 class="text-info">Want to get in touch ?</h2> <br> <div class="container"> <table class="table table-hover table-bordered"> <tbody> <tr> <td>Email</td> <td><a href="mailto:gaurav@gauravshukla.xyz">gaurav@gauravshukla.xyz</a></td> </tr> <tr> <td>Facebook</td> <td><a href="https://facebook.com/deathping1994">deathping1994</a></td> </tr> <tr> <td>Phone</td> <td><a href="tel:+91-837-584-7862">+91-837-584-7862</a></td> </tr> <tr> <td>Have a Question?</td> <td><a href="https://github.com/deathping1994/deathping1994.github.io/issues/new">Ask me anything</a></td> </tr> </tbody> </table> </div> <br> <strong>Report issues realted to website on <a href="https://github.com/deathping1994/deathping1994.github.io/issues/new">Github Issue tracker</a> </strong> </div>'),a.put("views/hire.html",'<h2>Interested in hiring me?</h2> <div class="panel"> <p class="well text-info"> I am a <mark><b>full stack developer</b></mark>, I code everything be it front end, back end android app or anything else if it is even remotely related to computers I am up for it. <br> I have a knack for perfection so you can expect nothing less from me. Also I fit very well in any team. I beleive in emergent roles so I can be a newbie in one team while mentor in other. I find my spot very quickly in a team. </p> <p class="well text-info"> I am quite an explorer, the same is visible from my work, I explore new technologies, I have varied field of interests. My expertise is Building scalable and restful web apps. I am not much of a designer but then I know bootstrap. </p> <p class="text-warning"> I work best when requirements are clear or when I can relate to a problem. So that\'s one of the short comings that has worked well for me till now. </p> <p class="well text-info"> As I am currently pursuing my Graduation so I am not vailable fulltime but I freelance and I can also manage part time. So if you are interested then give me a call on <b><a href="tel:+918375847862">+91-837-584-7862</a></b>, for other options to get in touch wth me see <a href="#contact">contact page.</a> </p> <h3>Still Confused?</h3> <p class="well"> <a href="#/kidding">Checkout this list of Ten Reasons Why you should hire me.</a> Also have a look at <a href="#/skills">Skills Page</a> and my <a href="#/Projects">Projects</a> </p> </div>'),a.put("views/kidding.html",'<div class="jumbotron"> <h1 class="text-warning">Really!! you want 10 reasons ?? !%#&* </h1> <h3> Well I was just kidding, I haven\'t given much thought to it. You can come back later or just get in touch with me I assure you will get more then 10 reasons. </h3> </div>'),a.put("views/main.html",'<div class="jumbotron"> <h1>Hi! I am Gaurav Shukla</h1> <p class="text-muted"> <img src="images/gaurav.a23a7dbd.jpg" class="profile-pic img-circle" alt="Gaurav Shukla"><br> Always pleasure crafting the <i>Web</i>.<br>I am available as Freelance Web Developer/Designer. </p> <p class="text-info"> <a class="" href="https://github.com/deathping1994">Checkout my work on<img src="images/github.719b8da2.png" class="icon"></a> </p> <p><a class="btn btn-lg btn-success" ng-href="#/hiring">Hire Me<span class="glyphicon glyphicon-ok"></span></a></p> </div>'),a.put("views/projects.html",'<div class="container"> <h2>Open Source Projects I contribute to..</h2> <ul> <li ng-repeat="contribution in contributions"><h4 class="text-success"><a ng-href="{{contribution.url}}">{{contribution.name}}</a></h4> <p class="text-success well" ng-bind="contribution.description"></p> </li> </ul> </div> <h2>Some of My open source Projects</h2> <p class="text-info"> <a class="" href="https://github.com/deathping1994">Checkout my work on<img src="images/github.719b8da2.png" class="icon"></a> </p> <div class="container"> <ul><li ng-repeat="project in projects|filter:{fork:false}|orderBy: sortproject"><h4 class="text-success"><a ng-href="{{project.html_url}}">{{project.name}}</a></h4> <p class="text-success well">{{project.description}}<br><span class="glyphicon glyphicon-star pull-right">{{project.stargazers_count}}</span></p> </li> </ul> </div>'),a.put("views/skills.html",'<div class="container"> <p class="text-info text-center">Here\'s a complete list of Technologies I use and know.</p> <div class="well"> <p><h3>Languages</h3> <div class="progress"> <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:50%"> Python </div> </div> <div class="progress"> <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:70%"> C++/C </div> </div> <div class="progress"> <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="68" aria-valuemin="0" aria-valuemax="100" style="width:68%"> JavaScript </div> </div> <div class="progress"> <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width:45%"> Java </div> </div> <div class="progress"> <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width:60%"> CSS </div> </div> <h4>Other languages that I know include Visual Basic,PHP,Html and Shell.</h4> </p> </div> <div class="well"> <p><h3>Frameworks|Toolkits|Libraries</h3> <div class="progress"> <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:70%"> BootStrap </div> </div> <div class="progress"> <div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="73" aria-valuemin="0" aria-valuemax="100" style="width:73%"> Flask </div> </div> <div class="progress"> <div class="progress-bar progress-bar-info progress-bar-striped active" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" style="width:55%"> Nodejs/Sailsjs </div> </div> <div class="progress"> <div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="83" aria-valuemin="0" aria-valuemax="100" style="width:83%"> AngularJS </div> </div> <div class="progress"> <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width:60%"> SQLAlchemy </div> </div> </p> </div> <div class="well"> <p><h3>Developer Tools</h3> <div class="progress"> <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:70%"> Git/ Mercurial </div> </div> <div class="progress"> <div class="progress-bar progress-bar-info progress-bar-striped active" role="progressbar" aria-valuenow="63" aria-valuemin="0" aria-valuemax="100" style="width:63%"> Android Studio </div> </div> <div class="progress"> <div class="progress-bar progress-bar-info progress-bar-striped active" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" style="width:55%"> Eclipse </div> </div> <div class="progress"> <div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="83" aria-valuemin="0" aria-valuemax="100" style="width:83%"> Sublime Text /Atom/nano </div> </div> <div class="progress"> <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width:60%"> Pycharm </div> </div> </p> </div> <div class="well"> <p><h3>Databases and Key Stores</h3> <div class="progress"> <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:50%"> Rabbit MQ </div> </div> <div class="progress"> <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style="width:70%"> MySql/Sql-Server </div> </div> <div class="progress"> <div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="73" aria-valuemin="0" aria-valuemax="100" style="width:73%"> Mongodb </div> </div> <div class="progress"> <div class="progress-bar progress-bar-info progress-bar-striped active" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" style="width:55%"> Sqlite/Postgres </div> </div> <div class="progress"> <div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="83" aria-valuemin="0" aria-valuemax="100" style="width:83%"> Elastic Search </div> </div> <div class="progress"> <div class="progress-bar progress-bar-warning progress-bar-striped active" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width:45%"> Redis </div> </div> </p> </div> </div>')}]);