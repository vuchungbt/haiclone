<ul class="comment-wrap list-unstyled">
                              <!-- Comment item START
                              <li class="comment-item">
                                <div class="d-flex position-relative">
                                  <!-- Avatar -->
                                  <div class="avatar avatar-xs">
                                    <a href="#!"><img class="avatar-img rounded-circle" src="img/avatar/05.jpg"
                                        alt=""></a>
                                  </div>
                                  <div class="ms-2">
                                    <!-- Comment by -->
                                    <div class="bg-light rounded-start-top-0 p-1 rounded">
                                      <div class="d-flex justify-content-between">
                                        <h6 class="mb-1"> <a href="#!"> Frances Guerrero </a></h6>
                                        <small class="ms-2">5hr</small>
                                      </div>
                                      <p class="small mb-0">Removed demands expense account in outward tedious do.
                                        Particular way
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
                                        <a href="#!"><img class="avatar-img rounded-circle" src="img/avatar/06.jpg"
                                            alt=""></a>
                                      </div>
                                      <!-- Comment by -->
                                      <div class="ms-2">
                                        <div class="bg-light p-1 rounded">
                                          <div class="d-flex justify-content-between">
                                            <h6 class="mb-1"> <a href="#!"> Lori Stevens </a> </h6>
                                            <small class="ms-2">2hr</small>
                                          </div>
                                          <p class="small mb-0">See resolved goodness felicity shy civility domestic had
                                            but
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
                                        <a href="#!"><img class="avatar-img rounded-circle" src="img/avatar/07.jpg"
                                            alt=""></a>
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

                              <c:forEach var="comment" items="${post.comments}">




                              <!-- Comment item START -->
                              <li class="comment-item">
                                <div class="d-flex">
                                  <!-- Avatar -->
                                  <div class="avatar avatar-xs">
                                    <a href="#!"><img class="avatar-img rounded-circle" src="${comment.created.thumbnail}"
                                        alt=""></a>
                                  </div>
                                  <!-- Comment by -->
                                  <div class="ms-2">
                                    <div class="bg-light p-1 rounded">
                                      <div class="d-flex justify-content-between">
                                        <h6 class="mb-1"> <a href="#!"> ${comment.created.name} </a> </h6>
                                        <small class="ms-2 timestamp">${comment.createdDate}</small>
                                      </div>
                                      <div class="content-comment-alt">
                                        <p class="small mb-0 content-comment">${comment.content}</p>
                                      </div>
                                    </div>
                                    <!-- Comment react -->
                                    <ul class="nav nav-divider pt-2 small">
                                      <li class="nav-item">
                                        <a class="nav-link" href="#!"> <i class="fa fa-star" aria-hidden="true"></i> 1</a>
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

                              </c:forEach>

                            </ul>