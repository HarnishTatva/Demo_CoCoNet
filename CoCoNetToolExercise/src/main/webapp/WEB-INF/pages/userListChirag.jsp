<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="">
<meta name="author" content="">
<title>TatvaSoft_CoCoNet</title>
<!-- Bootstrap Core CSS -->
<script src="${pageContext.request.contextPath}/resources/app/angular.js"></script>
	<script src="${pageContext.request.contextPath}/resources/app/angular-route.min.js"></script>
	<script src="${pageContext.request.contextPath}/resources/app/angular-sanitize.js"></script>
	<script src="${pageContext.request.contextPath}/resources/app/ui-bootstrap-tpls-0.13.4.js"></script>	
	<link href="https://bootswatch.com/cerulean/bootstrap.min.css" rel="stylesheet" />
    <link href="https://bootswatch.com/assets/css/custom.min.css" rel="stylesheet" />
    <link href="http://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/css/datepicker3.css" rel="stylesheet" />
    <script src="https://npmcdn.com/tether@1.2.4/dist/js/tether.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.5/js/bootstrap.min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/js/bootstrap-datepicker.js"></script>
    <script src="${pageContext.request.contextPath}/resources/app/Demo/DemoAPP.js"></script>
    <script src="${pageContext.request.contextPath}/resources/app/Demo/Services/UserServiceChirag.js"></script>
    <script src="${pageContext.request.contextPath}/resources/app/Demo/Directive/FileUploadChirag.js"></script>     
	<script src="${pageContext.request.contextPath}/resources/app/Demo/Services/FileUploadServiceChirag.js"></script>     
	<script src="${pageContext.request.contextPath}/resources/app/Demo/Services/IFileUploadServiceChirag.js"></script>
    <script src="${pageContext.request.contextPath}/resources/app/Demo/Controller/BaseController.js"></script>
    <script src="${pageContext.request.contextPath}/resources/app/Demo/Controller/UserPopupControllerChirag.js"></script>
    <script src="${pageContext.request.contextPath}/resources/app/Demo/Controller/UserControllerChirag.js"></script>
</head>
<body>
<body ng-app="Demo">
   <div class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <a href="UsersList.html" class="navbar-brand">Demo Application</a>
                <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>
            <div class="navbar-collapse collapse" id="navbar-main">
                <ul class="nav navbar-nav">
                    <li>
                        <a href="${pageContext.request.contextPath}/userChirag/userList">Manage Users</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="container" ng-controller="userControllerChirag as ctrl">
        <div class="row">
            <div class="col-lg-12">
                <h2>Manage Users</h2>
                <hr />
                <div class="alert alert-success" ng-show="status != undefined && status != '' && status !='conflict' && status != null">
                  <strong>Success!</strong> <span ng-show="status == 'save'">User created successfully.</span>
                  <span ng-show="status == 'update'">User updated successfully.</span>
                  <span ng-show="status == 'delete'">User deleted successfully.</span>
				</div>
				<div class="alert alert-danger" ng-show="status != undefined && status != '' && status !='success' && status !='delete' && status !='save' && status !='update' && status != null">
					<strong>ERROR! </strong><span ng-show="status == 'conflict'">User is already exist.</span>
				</div>
                <a href="${pageContext.request.contextPath}/userChirag/addUser" class="btn btn-primary"
						style="float: right; margin: 10px;">Add</a>
            </div>
        </div>
        <br/>
        <div class="row">
            <div class="col-lg-12">
                <table class="table table-striped table-hover table-responsive">
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Gender </th>
                            <th>Email</th>
                            <th>Date of birth</th>
                            <th>Phone</th>
                            <th>Hobbies </th>
                            <th>City</th>
                            <th>Address</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr ng-repeat="userMasterList in ctrl.userMasterList">
								<td>{{userMasterList.fname}}</td>								
								<td>{{userMasterList.gender}}</td>
								<td>{{userMasterList.emailid}}</td>
								<td>{{userMasterList.birthdate | date:'dd-MM-yyyy'}}</td>
								<td>{{userMasterList.phone}}</td>
								<td>{{userMasterList.hobbies}}</td>
								<td>{{userMasterList.city}}</td>
								<td>{{userMasterList.address}}</td>
								<td><img ng-if="userMasterList.imageFilePath!=null" src="/resources/images/{{userMasterList.imageFilePath}}" alt="" class="img-thumbnail" style="width: 50px;height: 50px;" /></td>
								<td><a href="#" ng-click="ctrl.onEdit(userMasterList.userid)">Edit</a>&nbsp;|&nbsp;<a
									href="#" ng-click="ctrl.onDelete(userMasterList.userid)">Delete</a></td>
                        </tr>                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</body>
</html>

