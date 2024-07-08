
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" aria-label="Eighth navbar example">
    <div class="container">
        <a class="navbar-brand" href="#">Meme World</a>
        <div class="collapse navbar-collapse" id="navbarsExample07">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">Top</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">Ask</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">Chat</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="dropdown07" data-bs-toggle="dropdown"
                       aria-expanded="false">Dropdown</a>
                    <ul class="dropdown-menu" aria-labelledby="dropdown07">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>



            </ul>


                <c:if test="${not empty cookie.token}">
                    <div class="dropdown mx-2">
                        <a href="#" class="d-blockdropdown-toggle" data-bs-toggle="dropdown"
                           aria-expanded="false">
                            <c:if test="${not empty thumbnail}">
                                <img src="${thumbnail}" alt="mdo" width="32" height="32" class="rounded-circle">
                            </c:if>
                            <c:if test="${empty thumbnail}">
                                <img src='<c:url value = "/template/web/img/avatar/user.png"/>' alt="mdo" width="32" height="32" class="rounded-circle">
                            </c:if>

                        </a>
                        <ul class="dropdown-menu text-small">
                            <li><a class="dropdown-item" href="#">New post</a></li>
                            <li><a class="dropdown-item" href="#">Settings</a></li>
                            <li><a class="dropdown-item" href="#">Profile</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li>
                                <div class="ms-sm-1">
                                    <input type="checkbox" class="checkbox" id="checkbox">
                                    <label for="checkbox" class="checkbox-label">
                                        <i class="fas fa-moon"></i>
                                        <i class="fas fa-sun"></i>
                                        <span class="ball"></span>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href='<c:url value="/logout?action=logout"/> '>Sign out</a></li>
                        </ul>
                    </div>
                </c:if>

            <c:if test="${empty cookie.token}">
                <a class="login-link" href='<c:url value="/login" />'>Login</a>
            </c:if>
            <form class="form-search">
                <input class="form-control" type="text" placeholder="Search" aria-label="Search">
            </form>
        </div>
    </div>
</nav>

