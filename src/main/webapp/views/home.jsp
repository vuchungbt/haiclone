<%@include file="/common/tablib.jsp" %>
  <%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" language="java" %>
    <html lang="en">

    <head>
      <!-- Required meta tags -->

      <title>Meme World</title>

    </head>

    <body>
      <%-- <%@ include file="/common/web/header-bar.jsp" %>--%>

        <!-- **************** MAIN CONTENT START **************** -->
        <main class="container">

          <div class="row py-2">

            <div class="col-md-3 py-1">
              <div class="d-grid gap-2 px-2 pb-2">
                <a href="<c:url value='/create-post'/>" role="button" class="btn btn-sm btn-info">
                  + viết bài
                </a>
              </div>
              <div class="card">
                <div class="card-header border-0 pb-0">
                  <h5 class="card-title">Chú ý</h5>
                  <!-- Button modal -->
                </div>
                <!-- Card body START -->
                <div class="card-body position-relative pt-0">
                  <p>Đăng bài đi. Rồi chờ kiểm duyệt họ duyệt cho lên trang chủ. Rán đợi đi nha heehee.</p>
                </div>
                <!-- Card body END -->
              </div>
            </div>

            <div class="col-md-9">


              <c:forEach var="post" items="${posts}">
                <article class="blog-post py-1">
                  <div class="card">
                    <div class="row">
                      <div class="row">
                        <div class="d-flex justify-content-between p-2 px-3">
                          <div class="d-flex flex-row align-items-center">
                            <img src="${post.created.thumbnail}" width="40" class="rounded-circle">
                            <div class="d-flex flex-column ml-2 px-2">
                              <span class="fw-semibold"><a href="#"> ${post.created.name} </a></span>
                              <small class="timestamp mr-2">${post.createdDate}</small>
                            </div>

                          </div>
                          <div class="dropdown float-lg-end" style="margin-right:-15px">
                            <a class="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="dropdownTable2"
                              data-bs-toggle="dropdown" aria-expanded="false">
                              <i class="fa fa-ellipsis-v text-secondary" aria-hidden="true"></i>
                            </a>
                            <ul class="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5" aria-labelledby="dropdownTable">
                              <li><a class="dropdown-item border-radius-md" href="#">Ẩn</a></li>
                              <li><a class="dropdown-item border-radius-md" href="javascript:;">Báo cáo</a></li>
                              <li><a class="dropdown-item border-radius-md" href="javascript:;">Bật thông báo</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">

                        <div class="p-2">
                          <h6 class="text-justify">${post.title}</h6>
                        </div>

                        <div class="card">
                          <img src="https://i.imgur.com/xhzhaGA.jpg" class="card-img">
                        </div>

                        <div class="p-2 content-container">
                          <p class="text-justify content">${post.content}</p>
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="me-sm-1">
                          <div class="d-flex justify-content-between align-items-center bg-dark rounded">
                            <div class="d-flex flex-row icons d-flex align-items-center ">
                              <div class="cont">
                                <div class="stars py-1" data-vote-value="">
                                  <form action="">
                                    <input class="star star-5" id="star-5-${post.id}" type="radio" name="star" />
                                    <label class="star star-5" for="star-5-${post.id}"></label>
                                    <input class="star star-4" id="star-4-${post.id}" type="radio" name="star" />
                                    <label class="star star-4" for="star-4-${post.id}"></label>
                                    <input class="star star-3" id="star-3-${post.id}" type="radio" name="star" />
                                    <label class="star star-3" for="star-3-${post.id}"></label>
                                    <input class="star star-2" id="star-2-${post.id}" type="radio" name="star" />
                                    <label class="star star-2" for="star-2-${post.id}"></label>
                                    <input class="star star-1" id="star-1-${post.id}" type="radio" name="star" />
                                    <label class="star star-1" for="star-1-${post.id}"></label>
                                  </form>
                                </div>
                              </div>
                            </div>
                            <div class="d-flex flex-row muted-color px-2"> <span class="ml-2"> <i class="fa fa-star"
                                  aria-hidden="true"></i> ${post.avgVote} /<c:choose>
                                  <c:when test="${post.voteCount == 0}">
                                    0
                                  </c:when>
                                  <c:otherwise>
                                    5
                                  </c:otherwise>
                                </c:choose>
                              </span>
                            </div>
                          </div>
                          <hr>

                          <c:if test="${not empty post.source}">
                            <div class="d-flex justify-content-between align-items-center">
                              <div class="d-flex flex-row icons d-flex align-items-center">
                                <i class="fa fa-duotone fa-link" aria-hidden="true"></i>Nguồn: <a
                                  href="${post.source}">
                                  <c:if test="${not empty post.sourceName}"> ${post.sourceName}</c:if>
                                  <c:if test="${empty post.sourceName}">${post.source}</c:if>
                                </a>
                              </div>

                              <div class="d-flex flex-row muted-color"> <span class="ml-2"> <i
                                    class="fa fa-envelope-open-o" aria-hidden="true"></i></span>
                              </div>
                            </div>
                            <hr>
                          </c:if>


                          <!-- Comments -->
                          <c:if test="${empty post.comments}">
                            <div class="card mb-2">
                              <h2 class="text-center text-muted p-3"> Không có bình luận </h2>
                            </div>
                          </c:if>
                          <c:if test="${not empty post.comments}">

                            <ul class="comment-wrap list-unstyled">
                              <!-- Comment item START
                              <c:forEach var="comment" items="${post.comments}">

                              <!-- Comment item START -->
                              <li class="comment-item">
                                <div class="d-flex">
                                  <!-- Avatar -->
                                  <div class="avatar avatar-xs ms-1">
                                    <a href="#!"><img class="avatar-img rounded-circle"
                                        src="${comment.created.thumbnail}" alt=""></a>
                                  </div>
                                  <!-- Comment by -->
                                  <div class="ms-2">
                                    <div class="bg-light p-1 rounded">
                                      <div class="d-flex justify-content-between">
                                        <div class="mb-1 fw-semibold"> <a href="#!"> ${comment.created.name} </a> </div>
                                        <small class="ms-2 timestamp">${comment.createdDate}</small>
                                      </div>
                                      <div class="content-comment-alt">
                                        <p class="small mb-0 content-comment">${comment.content}</p>
                                      </div>
                                    </div>
                                    <!-- Comment react -->
                                    <ul class="nav nav-divider pt-2 small">
                                      <li class="nav-item">
                                        <a class="nav-link" href="#!"> <i class="fa fa-star" aria-hidden="true"></i>
                                          <c:choose>
                                            <c:when test="${comment.voteCount != 0}">
                                              ${comment.voteCount}
                                            </c:when>
                                          </c:choose>

                                        </a>
                                      </li>
                                      <li class="nav-item">
                                        <a class="nav-link" href="#!"> Trả lời</a>
                                      </li>
                                      <li class="nav-item">
                                        <a class="nav-link" href="#!"> Xem 6 câu trả lời</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                              <!-- Comment item END -->

              </c:forEach>

              </ul>

              </c:if>


              <c:if test="${not empty cookie.token}">
                <!-- Reply -->
                <div class="d-flex mb-3">
                  <!-- Avatar -->
                  <div class="avatar avatar-xs me-2">
                    <a href="#!"> <img class="avatar-img rounded-circle" src="${thumbnail}" alt=""> </a>
                  </div>
                  <!-- Comment box  -->
                  <form class="nav nav-item w-100 position-relative">
                    <textarea data-autoresize="" class="form-control pe-5 bg-light" rows="1"
                      placeholder="Add a comment..."></textarea>
                    <button
                      class="nav-link bg-transparent px-3 position-absolute top-50 end-0 translate-middle-y border-0"
                      type="submit">
                      <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
                    </button>
                  </form>
                </div>
              </c:if>

              <c:if test="${empty cookie.token}">
                <div class="p-2 text-center">
                  <a href="/login" role="button" class="btn btn-sm btn-info">Đăng nhập để bình luận</a>
                </div>
              </c:if>


            </div>
          </div>
          </div>
          </div>
          </article>

          </c:forEach>
          <c:if test="${empty posts}">
            <article class="blog-post py-1">
              <div class="card">
                <h2 class="text-center text-muted p-5"> Trống </h2>
              </div>
            </article>
          </c:if>
          <c:if test="${not empty posts}">
            <div class="d-grid gap-2 pt-2">
              <a href="#!" role="button" class="btn btn-sm btn-loader btn-info" data-bs-toggle="button"
                aria-pressed="true">
                <span class="load-text"> Xem thêm... </span>
                <div class="load-icon">
                  <div class="spinner-grow spinner-grow-sm" role="status">
                    <span class="visually-hidden">Đang tải...</span>
                  </div>
                </div>
              </a>
            </div>
          </c:if>

          </div>

          </div>
        </main>


    </body>

    </html>