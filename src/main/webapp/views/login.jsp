<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: Thinh
  Date: 6/19/2024
  Time: 12:13 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Đăng nhập</title>
</head>
<body>
<div class="container ">

    <div class="row">
        <aside class="col-sm-4 mx-auto">
            <div class="card">
                <article class="card-body">
                    <a href="" class="float-right btn btn-outline-primary">Sign up</a>
                    <h4 class="card-title mb-4 mt-1">Sign in</h4>
                    <p>
                        <a href="https://accounts.google.com/o/oauth2/auth?scope=email profile openid&redirect_uri=http://localhost:8080/login&state=google&response_type=code&client_id=849071406479-n1efj6bifntnb87eqphc2qm5ggsdgr9i.apps.googleusercontent.com&approval_prompt=force"
                           class="btn btn-block btn-outline-info"> <i class="fab fa-google"></i>   Login via Google</a>
                        <a href="https://www.facebook.com/v20.0/dialog/oauth?client_id=1027609085753624&redirect_uri=http://localhost:8080/login&state=facebook&scope=email,public_profile" class="btn btn-block btn-outline-primary">
                            <i class="fab fa-facebook-f"></i>   Login via facebook
                        </a>
                    </p>
                    <hr>
                    <form>
                        <div class="form-group">
                            <input name="" class="form-control" placeholder="Email or login" type="email">
                        </div> <!-- form-group// -->
                        <div class="form-group">
                            <input class="form-control" placeholder="******" type="password">
                        </div> <!-- form-group// -->
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <button type="submit" class="btn btn-primary btn-block"> Login  </button>
                                </div> <!-- form-group// -->
                            </div>
                            <div class="col-md-6 text-right">
                                <a class="small" href="#">Forgot password?</a>
                            </div>
                        </div> <!-- .row// -->
                    </form>
                </article>
            </div> <!-- card.// -->

        </aside> <!-- col.// -->
    </div> <!-- row.// -->

</div>
<!--container end.//-->

</body>
</html>