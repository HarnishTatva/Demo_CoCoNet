<!DOCTYPE html>
<html>
<head>
    <title>Demo Application</title>
    <link href="${pageContext.request.contextPath}/resources/content/bootstrap.min.css" rel="stylesheet" />
    <link href="${pageContext.request.contextPath}/resources/content/custom.min.css" rel="stylesheet" />
    
    <script src="${pageContext.request.contextPath}/resources/app/angular.js"></script>
	<script src="${pageContext.request.contextPath}/resources/app/angular-sanitize.js"></script>
    
    <script src="${pageContext.request.contextPath}/resources/app/ui-bootstrap-tpls-0.13.4.js"></script>
	<script src="${pageContext.request.contextPath}/resources/app/jquery.min.js"></script>
	<script src="${pageContext.request.contextPath}/resources/app/bootstrap.min.js"></script>   
	
	<script src="${pageContext.request.contextPath}/resources/app/Demo/DemoAppChandni.js"></script>
	<script src="${pageContext.request.contextPath}/resources/app/Demo/Services/UserChandniService.js"></script>
    <script src="${pageContext.request.contextPath}/resources/app/Demo/Controller/BaseChandniController.js"></script>
    <script src="${pageContext.request.contextPath}/resources/app/Demo/Controller/UserChandniController.js"></script>
    <script src="${pageContext.request.contextPath}/resources/app/Demo/Controller/ModalInstanceChandniController.js"></script>
    
</head>
<body ng-app="DemoChandni">
    <div class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <a href="chandni-user-list" class="navbar-brand">Demo Application</a>
                <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>
            <div class="navbar-collapse collapse" id="navbar-main">
                <ul class="nav navbar-nav">
                    <li>
                        <a href="chandni-user-list">Manage Users</a>
                    </li>
                    <li>
                        <a href="#">Manage Employees</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <h2>Manage Users</h2>
                <hr />
                <a class="btn btn-info" href="chandni-user-form">Add new</a>
            </div>
        </div>
        <br/>
        <div class="row">
            <div class="col-lg-4">
                <input type="text" ng-model="search" class="form-control" placeholder="Search">
            </div>
        </div>
        <br/>
     	<div class="row" ng-controller="userChandniController as ctrl" data-ng-init="ctrl.GetUserList()" >
            <div class="col-lg-12">
            	<div class="alert alert-success" ng-show="statusMessageFlag == true" >{{statusMessage}}</div>
            	<br/>
                <table class="table table-striped table-hover table-responsive">
                    <thead>
                        <tr>
                            <th>
                              <a href="#" ng-click="sortType = 'userFirstName'; sortReverse = !sortReverse" class="no-text-decoration">
        						Full name
        						<span ng-show="sortType == 'userFirstName' && !sortReverse">&#x2193;</span>
						        <span ng-show="sortType == 'userFirstName' && sortReverse">&#x2191;</span>
						      </a>
                            </th>
                            <th>
                              <a href="#" ng-click="sortType = 'userEmail'; sortReverse = !sortReverse" class="no-text-decoration">
        						Email
        						<span ng-show="sortType == 'userEmail' && !sortReverse">&#x2193;</span>
						        <span ng-show="sortType == 'userEmail' && sortReverse">&#x2191;</span>
						      </a>
                            </th>
                            <th>
                              <a href="#" ng-click="sortType = 'userDob'; sortReverse = !sortReverse" class="no-text-decoration">
        						Date Of Birth
        						<span ng-show="sortType == 'userDob' && !sortReverse">&#x2193;</span>
						        <span ng-show="sortType == 'userDob' && sortReverse">&#x2191;</span>
						      </a>
                            </th>
                            <th>
                              <a href="#" ng-click="sortType = 'userPhoneNumber'; sortReverse = !sortReverse" class="no-text-decoration">
        						Phone number
        						<span ng-show="sortType == 'userPhoneNumber' && !sortReverse">&#x2193;</span>
						        <span ng-show="sortType == 'userPhoneNumber' && sortReverse">&#x2191;</span>
						      </a>
                            </th>
                            <th>
	                            <a href="#" ng-click="sortType = 'userHobbies'; sortReverse = !sortReverse" class="no-text-decoration">
	        						Hobbies
	        						<span ng-show="sortType == 'userHobbies' && !sortReverse">&#x2193;</span>
							        <span ng-show="sortType == 'userHobbies' && sortReverse">&#x2191;</span>
							    </a>
                            </th>
                            <th>
                               <a href="#" ng-click="sortType = 'userCity'; sortReverse = !sortReverse" class="no-text-decoration">
	        						City
	        						<span ng-show="sortType == 'userCity' && !sortReverse">&#x2193;</span>
							        <span ng-show="sortType == 'userCity' && sortReverse">&#x2191;</span>
							    </a>
                            </th>
                            <th>
                               <a href="#" ng-click="sortType = 'userAddress'; sortReverse = !sortReverse" class="no-text-decoration">
	        						Address
	        						<span ng-show="sortType == 'userAddress' && !sortReverse">&#x2193;</span>
							        <span ng-show="sortType == 'userAddress' && sortReverse">&#x2191;</span>
							    </a>
							</th>
                            <th>User Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       <tr ng-repeat="user in userChandniList.slice(((currentPage-1)*itemsPerPage), ((currentPage)*itemsPerPage)) | orderBy:sortType:sortReverse | filter: search">
								<td>{{user.userFirstName + " " + user.userLastName}}</td>
								<td>{{user.userEmail}}</td>
								<td>{{ctrl.convertDate(user.userDob)}}</td>
								<td>{{user.userPhoneNumber}}</td>
								<td>{{user.userHobbies}}</td>
								<td>{{user.userCity}}</td>
								<td>{{user.userAddress}}</td>
								<td><img ng-show='user.userImage == ""' ng-src="${pageContext.request.contextPath}/resources/images_chandni/default.png" class="img-thumbnail" style="width: 50px;height: 50px;" />
								<img ng-show='user.userImage != ""' ng-src="${pageContext.request.contextPath}/resources/images_chandni/{{user.userImage}}" class="img-thumbnail" style="width: 50px;height: 50px;" /></td>
								<td><a class="btn btn-primary btn-xs" href="#" ng-click="ctrl.onEdit(user.userId)">Edit</a>&nbsp;<a
									class="btn btn-danger btn-xs" href="#" ng-click="ctrl.onDelete(user.userId)">Delete</a></td>
						</tr>
						<tr ng-show="!(userChandniList| filter:search).length">
        					<td colspan="9" style="text-align: center;font-weight: bold;">
            					No record to display               
        					</td>
    					</tr>
                    </tbody>
                </table>
                
                <div class="text-center">
            		 <pagination total-items="totalItems" ng-model="currentPage" max-size="maxSize" class="pagination-sm" boundary-links="true" rotate="false" num-pages="numPages" items-per-page="itemsPerPage"></pagination>
          		</div>	
            </div>
        </div>
    </div>
</body>
</html> 