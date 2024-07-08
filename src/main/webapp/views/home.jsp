<%@include file="/common/tablib.jsp" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="en">
<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Meme World</title>

  <!-- Bootstrap CSS -->
<%--  <link href="/public/web/css/bootstrap.min.css" rel="stylesheet">--%>
<%--  <link href="/public/web/css/customize.css" rel="stylesheet">--%>
<%--  <link href="/public/web/css/dropzone.css" rel="stylesheet">--%>
<%--  <link href="/public/web/css/glightbox.min.css" rel="stylesheet">--%>
<%--  <script src="https://kit.fontawesome.com/42d5adcbca.js"></script>--%>
<%--  <link rel="stylesheet" href="<c:url value='/public/web/css/bootstrap.min.css' />" />--%>
<%--  <link rel="stylesheet" href="<c:url value='/public/web/css/customize.css' />" />--%>
<%--  <script src="<c:url value='/public/web/js/kit.42d5adcbca.js' />"></script>--%>

<%--  <!-- Dark mode -->--%>
<%--  <script src="<c:url value='/public/web/js/theme.js' />"></script>--%>

</head>

<body>
<%--    <%@ include file="/common/web/header-bar.jsp" %>--%>

  <!-- **************** MAIN CONTENT START **************** -->
  <main class="container">

    <div class="row py-2">

      <div class="col-md-3 py-1">
        <div class="d-grid gap-2 px-2 pb-2">
          <a href="<c:url value='/create-post'/>" role="button" class="btn btn-sm btn-info">
            + new post
          </a>
        </div>
        <div class="card">
          <div class="card-header border-0 pb-0">
            <h5 class="card-title">About</h5>
            <!-- Button modal -->
          </div>
          <!-- Card body START -->
          <div class="card-body position-relative pt-0">
            <p>He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay
              assistance joy.</p>
          </div>
          <!-- Card body END -->
        </div>
      </div>

      <div class="col-md-8">
        <article class="blog-post py-1">
          <div class="card">
            <div class="row">
              <div class="row">
                <div class="d-flex justify-content-between p-2 px-3">
                  <div class="d-flex flex-row align-items-center"> <img src="https://i.imgur.com/UXdKE3o.jpg" width="50"
                      class="rounded-circle">
                    <div class="d-flex flex-column ml-2 px-2"> <span class="fw-semibold">Jeanette Sun</span> <small
                        class="mr-2">20 mins</small> </div>

                  </div>
                  <div class="dropdown float-lg-end ">
                    <a class="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="dropdownTable2"
                      data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="fa fa-ellipsis-v text-secondary" aria-hidden="true"></i>
                    </a>
                    <ul class="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5" aria-labelledby="dropdownTable">
                      <li><a class="dropdown-item border-radius-md" href="#">Hide</a></li>
                      <li><a class="dropdown-item border-radius-md" href="javascript:;">Report</a></li>
                      <li><a class="dropdown-item border-radius-md" href="javascript:;">Turn on notify</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-md-6">

               <div class="card">
                <img src="https://i.imgur.com/xhzhaGA.jpg" class="card-img">
               </div>

                <div class="ms-sm-1">
                  <p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt.</p>

                </div>
              </div>

              <div class="col-md-6">
                <div class="me-sm-1">
                  <div class="d-flex justify-content-between align-items-center bg-dark rounded">
                    <div class="d-flex flex-row icons d-flex align-items-center ">
                      <div class="cont">
                        <div class="stars">
                          <form action="">
                            <input class="star star-5" id="star-5-2" type="radio" name="star" />
                            <label class="star star-5" for="star-5-2"></label>
                            <input class="star star-4" id="star-4-2" type="radio" name="star" />
                            <label class="star star-4" for="star-4-2"></label>
                            <input class="star star-3" id="star-3-2" type="radio" name="star" />
                            <label class="star star-3" for="star-3-2"></label>
                            <input class="star star-2" id="star-2-2" type="radio" name="star" />
                            <label class="star star-2" for="star-2-2"></label>
                            <input class="star star-1" id="star-1-2" type="radio" name="star" />
                            <label class="star star-1" for="star-1-2"></label>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex flex-row muted-color px-2"> <span class="ml-2"> <i class="fa fa-star"
                          aria-hidden="true"></i>4.55/5</span>
                    </div>
                  </div>
                  <hr>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex flex-row icons d-flex align-items-center">
                      <i class="fa fa-thumbs-up" aria-hidden="true"></i>Source: <a href="#"> xxxxxxxxxxxxxx......xx </a>
                    </div>

                    <div class="d-flex flex-row muted-color"> <span class="ml-2"> <i class="fa fa-envelope-open-o"
                          aria-hidden="true"></i>Khiếu nại</span>
                    </div>
                  </div>
                  <hr>

                  <!-- Comments -->
                  <ul class="comment-wrap list-unstyled">
                    <!-- Comment item START -->
                    <li class="comment-item">
                      <div class="d-flex position-relative">
                        <!-- Avatar -->
                        <div class="avatar avatar-xs">
                          <a href="#!"><img class="avatar-img rounded-circle" src="img/avatar/05.jpg" alt=""></a>
                        </div>
                        <div class="ms-2">
                          <!-- Comment by -->
                          <div class="bg-light rounded-start-top-0 p-1 rounded">
                            <div class="d-flex justify-content-between">
                              <h6 class="mb-1"> <a href="#!"> Frances Guerrero </a></h6>
                              <small class="ms-2">5hr</small>
                            </div>
                            <p class="small mb-0">Removed demands expense account in outward tedious do. Particular way
                              thoroughly unaffected projection.</p>
                          </div>
                          <!-- Comment react -->
                          <ul class="nav nav-divider py-2 small">
                            <li class="nav-item">
                              <a class="nav-link" href="#!"> Like (3)</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="#!"> Reply</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="#!"> View 5 replies</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <!-- Comment item nested START -->
                      <ul class="comment-item-nested list-unstyled">
                        <!-- Comment item START -->
                        <li class="comment-item">
                          <div class="d-flex">
                            <!-- Avatar -->
                            <div class="avatar avatar-xs">
                              <a href="#!"><img class="avatar-img rounded-circle" src="img/avatar/06.jpg" alt=""></a>
                            </div>
                            <!-- Comment by -->
                            <div class="ms-2">
                              <div class="bg-light p-1 rounded">
                                <div class="d-flex justify-content-between">
                                  <h6 class="mb-1"> <a href="#!"> Lori Stevens </a> </h6>
                                  <small class="ms-2">2hr</small>
                                </div>
                                <p class="small mb-0">See resolved goodness felicity shy civility domestic had but
                                  Drawings
                                  offended yet answered Jennings perceive.</p>
                              </div>
                              <!-- Comment react -->
                              <ul class="nav nav-divider py-2 small">
                                <li class="nav-item">
                                  <a class="nav-link" href="#!"> Like (5)</a>
                                </li>
                                <li class="nav-item">
                                  <a class="nav-link" href="#!"> Reply</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <!-- Comment item END -->
                        <!-- Comment item START -->
                        <li class="comment-item">
                          <div class="d-flex">
                            <!-- Avatar -->
                            <div class="avatar avatar-story avatar-xs">
                              <a href="#!"><img class="avatar-img rounded-circle" src="img/avatar/07.jpg" alt=""></a>
                            </div>
                            <!-- Comment by -->
                            <div class="ms-2">
                              <div class="bg-light p-1 rounded">
                                <div class="d-flex justify-content-between">
                                  <h6 class="mb-1"> <a href="#!"> Billy Vasquez </a> </h6>
                                  <small class="ms-2">15min</small>
                                </div>
                                <p class="small mb-0">Wishing calling is warrant settled was lucky.</p>
                              </div>
                              <!-- Comment react -->
                              <ul class="nav nav-divider py-2 small">
                                <li class="nav-item">
                                  <a class="nav-link" href="#!"> Like</a>
                                </li>
                                <li class="nav-item">
                                  <a class="nav-link" href="#!"> Reply</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <!-- Comment item END -->
                      </ul>
                      <!-- Load more replies -->
                      <a href="#!" role="button"
                        class="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center mb-3 ms-5"
                        data-bs-toggle="button" aria-pressed="true">
                        <div class="spinner-dots me-2">
                          <span class="spinner-dot"></span>
                          <span class="spinner-dot"></span>
                          <span class="spinner-dot"></span>
                        </div>
                        Load more replies
                      </a>
                      <!-- Comment item nested END -->
                    </li>
                    <!-- Comment item END -->
                    <!-- Comment item START -->
                    <li class="comment-item">
                      <div class="d-flex">
                        <!-- Avatar -->
                        <div class="avatar avatar-xs">
                          <a href="#!"><img class="avatar-img rounded-circle" src="img/avatar/05.jpg" alt=""></a>
                        </div>
                        <!-- Comment by -->
                        <div class="ms-2">
                          <div class="bg-light p-1 rounded">
                            <div class="d-flex justify-content-between">
                              <h6 class="mb-1"> <a href="#!"> Frances Guerrero </a> </h6>
                              <small class="ms-2">4min</small>
                            </div>
                            <p class="small mb-0">Removed demands expense account in outward tedious do. Particular way
                              thoroughly unaffected projection.</p>
                          </div>
                          <!-- Comment react -->
                          <ul class="nav nav-divider pt-2 small">
                            <li class="nav-item">
                              <a class="nav-link" href="#!"> Like (1)</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="#!"> Reply</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="#!"> View 6 replies</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <!-- Comment item END -->
                  </ul>
                  <!-- Reply -->
                  <div class="d-flex mb-3">
                    <!-- Avatar -->
                    <div class="avatar avatar-xs me-2">
                      <a href="#!"> <img class="avatar-img rounded-circle" src="img/avatar/12.jpg" alt=""> </a>
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
                </div>
              </div>
            </div>
          </div>
        </article>
        
        <div class="d-grid gap-2 pt-2">
                <a href="#!" role="button" class="btn btn-sm btn-loader btn-info" data-bs-toggle="button"
                  aria-pressed="true">
                  <span class="load-text"> Load more... </span>
                  <div class="load-icon">
                    <div class="spinner-grow spinner-grow-sm" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </a>
              </div>



      </div>

      <div class="col-md-3 py-1">
        <div class="position-sticky " style="top: 2rem;">
          <div class="card">
            <div class="card-header border-0 pb-0">
              <h5 class="card-title">About</h5>
              <!-- Button modal -->
            </div>
            <!-- Card body START -->
            <div class="card-body position-relative pt-0">
              <p>He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay
                assistance joy.</p>
            </div><!-- Card body END -->
          </div>


          <div class="p-4">
            <h4 class="fst-italic">Archives</h4>
            <ol class="list-unstyled mb-0">

              <li><a href="#">March 2021</a></li>
              <li><a href="#">February 2021</a></li>
              <li><a href="#">January 2021</a></li>
              <li><a href="#">December 2020</a></li>
              <li><a href="#">November 2020</a></li>
              <li><a href="#">October 2020</a></li>
              <li><a href="#">September 2020</a></li>
              <li><a href="#">August 2020</a></li>
              <li><a href="#">July 2020</a></li>
              <li><a href="#">June 2020</a></li>
              <li><a href="#">May 2020</a></li>
              <li><a href="#">April 2020</a></li>
            </ol>
          </div>

          <div class="p-4">
            <h4 class="fst-italic">Elsewhere</h4>
            <ol class="list-unstyled">
              <li><a href="#">GitHub</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Facebook</a></li>
            </ol>
          </div>
        </div>
      </div>
</div>
  </main>

<%--  <script src="/public/web/js/bootstrap.bundle.min.js"></script>--%>
<%--  <script src="/public/web/js/customize.js"></script>--%>
  <script src="<c:url value='/public/web/js/bootstrap.bundle.min.js' />"></script>
  <script src="<c:url value='/public/web/js/customize.js' />"></script>
</body>
</html>