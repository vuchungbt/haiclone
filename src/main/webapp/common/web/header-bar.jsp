<!--menu-->
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" language="java" %>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Eighth navbar example">
      <div class="container">
        <a class="navbar-brand " href="<c:url value='/'/>">Meme World</a>

        <div>
          <a href="<c:url value='/notifications'/>" class="position-relative mx-2"><i class="fa fa-envelope-o fa-lg" aria-hidden="true">
          </i><span class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border
               border-light rounded-circle"><span class="visually-hidden">New alerts</span></span></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07"
            aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarsExample07">
          <ul class="navbar-nav me-auto mb-lg-0">
            <li class="nav-item">
              <a class="nav-link
                <c:choose>
                    <c:when test="${router == 'home' or router == ''}">
                            active
                    </c:when>
                </c:choose>
                " aria-current="page" href="<c:url value='/'/>">Trang chủ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link
                <c:choose>
                    <c:when test="${router == 'trending' }">
                            active
                    </c:when>
                </c:choose>
                " href="/trending">Xu hướng</a>
            </li>
            <li class="nav-item">
              <a class="nav-link
                <c:choose>
                    <c:when test="${router == 'top'  }">
                            active
                    </c:when>
                </c:choose>
                " href="/top">Phổ biến</a>
            </li>
            <li class="nav-item">
              <a class="nav-link
                <c:choose>
                    <c:when test="${router == 'ask' }">
                            active
                    </c:when>
                </c:choose>
                " href="/ask">Câu hỏi</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Chat với người lạ</a>
            </li>
            <!-- <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="dropdown07" data-bs-toggle="dropdown"
                aria-expanded="false">Dropdown</a>
              <ul class="dropdown-menu" aria-labelledby="dropdown07">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            -->

          </ul>
          <c:if test="${not empty cookie.token}">
            <div class="dropdown border-bottom-menu">
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
                <li><a class="dropdown-item" href="<c:url value='/create-post'/>">Viết bài</a></li>
                <li><a class="dropdown-item" href="<c:url value='/settings'/>">Cài đặt</a></li>
                <li><a class="dropdown-item" href="<c:url value='/profile'/>">Trang cá nhân</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li>
                  <div class="ms-sm-3 theme-icon-active">
                    <input type="checkbox" class="checkbox" id="checkbox">
                    <label for="checkbox" class="checkbox-label">
                      <i  class="nav-link text-primary-hover mb-0 active" data-bs-theme-value="light" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Light">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-sun fa-fw mode-switch" viewBox="0 0 16 16">
                          <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
                          <use href="#"></use>
                        </svg>
                      </i>
                      <i class=" nav-link text-primary-hover mb-0" data-bs-theme-value="dark" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Dark">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-moon-stars fa-fw mode-switch" viewBox="0 0 16 16">
                          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"></path>
                          <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path>
                          <use href="#"></use>
                        </svg>
                      </i>
                      <span class="ball" id="ball24"></span>
                    </label>
                  </div>
                </li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href='<c:url value="/logout?action=logout"/> '>Thoát</a></li>
              </ul>
            </div>
          </c:if>

          <c:if test="${empty cookie.token}">
            <a role"button" style="margin:5px 10px 5px 25px;" class="login-link btn btn-sm btn-info" href='<c:url value="/login" />'>Đăng nhập</a>
          </c:if>

          <form class="m-2">
            <input class="form-control" type="text" placeholder="Tìm kiếm" aria-label="Search">
          </form>
        </div>
      </div>
    </nav>