<%@include file="/common/tablib.jsp" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
  <!-- Required meta tags -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Create Post</title>

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="<c:url value='/public/web/css/bootstrap.min.css' />" />
  <link rel="stylesheet" href="<c:url value='/public/web/css/customize.css' />" />
  <link rel="stylesheet" href="<c:url value='/public/web/css/dropify.min.css' />" />

  <script src="<c:url value='/public/web/js/kit.42d5adcbca.js' />" ></script>
  <!-- Dark mode -->
  <script src="<c:url value='/public/web/js/theme.js' />"></script>

  <style>
    textarea {
      width: 100%;
      overflow: hidden;
      resize: none;
    }
  </style>
</head>


<body>

    <%@ include file="/common/web/header-bar.jsp" %>

  <!-- **************** MAIN CONTENT START **************** -->
  <main class="py-2">

    <!-- Container START -->
    <div class="container">
      <div class="row g-4">

        <!-- Main content START -->
        <div class="col-lg-8 vstack gap-4">
          <!-- Card START -->
          <div class="card card-body">
            <!-- Post input -->
            <form class="w-100">
              <textarea maxlength="1000" class="form-control pe-4 border-0" rows="2" data-autoresize=""
                placeholder="Share your thoughts..."></textarea>
            </form>
            <div>
              <input type="file" id="input-file-to-destroy" class="dropify" data-allowed-formats="portrait square"
                data-max-file-size="2M" data-max-height="2000" />
            </div>
            <!-- Share feed toolbar END -->
          </div>
        </div>
        <!-- Main content END -->

        <!-- Right sidebar START -->
        <div class="col-lg-4">
 
          <div class="row g-4">

            <!-- Card START -->
            <div class="col-sm-6 col-lg-12">
              <div class="card">
                <div class="card-header border-0 pb-0">
                  <h5 class="card-title">About</h5>
                  <!-- Button modal -->
                </div>
                <!-- Card body START -->
                <div class="card-body position-relative pt-0">
                  <p>He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay
                    assistance joy.</p>
                  <!-- Date time -->
                  <ul class="list-unstyled mt-3 mb-0">
                    <li class="mb-2"> <i class="bi bi-calendar-date fa-fw pe-1"></i> Born: <strong> October 20, 1990
                      </strong> </li>
                    <li class="mb-2"> <i class="bi bi-heart fa-fw pe-1"></i> Status: <strong> Single </strong> </li>
                    <li> <i class="bi bi-envelope fa-fw pe-1"></i> Email: <strong> webestica@gmail.com </strong> </li>
                  </ul>
                </div>
                <!-- Card body END -->
              </div>
            </div>
            <!-- Card END -->

            <!-- Card START -->
            <div class="col-sm-6 col-lg-12">
              <div class="card">
                <!-- Card header START -->
                <div class="card-header d-flex justify-content-between border-0">
                  <h5 class="card-title">Experience</h5>
                  <a class="btn btn-primary-soft btn-sm" href="#!"> <i class="fa-solid fa-plus"></i> </a>
                </div>
                <!-- Card header END -->
                <!-- Card body START -->
                <div class="card-body position-relative pt-0">
                  <!-- Experience item START -->
                  <div class="d-flex">
                    <!-- Avatar -->
                    <div class="avatar me-3">
                      <a href="#!"> <img class="avatar-img rounded-circle" src="img/logo/08.svg" alt=""> </a>
                    </div>
                    <!-- Info -->
                    <div>
                      <h6 class="card-title mb-0"><a href="#!"> Apple Computer, Inc. </a></h6>
                      <p class="small">May 2015 – Present Employment Duration 8 mos <a
                          class="btn btn-primary-soft btn-xs ms-2" href="#!">Edit </a></p>
                    </div>
                  </div>
                  <!-- Experience item END -->

                  <!-- Experience item START -->
                  <div class="d-flex">
                    <!-- Avatar -->
                    <div class="avatar me-3">
                      <a href="#!"> <img class="avatar-img rounded-circle" src="img/logo/09.svg" alt=""> </a>
                    </div>
                    <!-- Info -->
                    <div>
                      <h6 class="card-title mb-0"><a href="#!"> Microsoft Corporation </a></h6>
                      <p class="small">May 2017 – Present Employment Duration 1 yrs 5 mos <a
                          class="btn btn-primary-soft btn-xs ms-2" href="#!">Edit </a></p>
                    </div>
                  </div>
                  <!-- Experience item END -->

                  <!-- Experience item START -->
                  <div class="d-flex">
                    <!-- Avatar -->
                    <div class="avatar me-3">
                      <a href="#!"> <img class="avatar-img rounded-circle" src="img/logo/10.svg" alt=""> </a>
                    </div>
                    <!-- Info -->
                    <div>
                      <h6 class="card-title mb-0"><a href="#!"> Tata Consultancy Services. </a></h6>
                      <p class="small mb-0">May 2022 – Present Employment Duration 6 yrs 10 mos <a
                          class="btn btn-primary-soft btn-xs ms-2" href="#!">Edit </a></p>
                    </div>
                  </div>
                  <!-- Experience item END -->

                </div>
                <!-- Card body END -->
              </div>
            </div>
            <!-- Card END -->
          </div>
        </div>
        <!-- Right sidebar END -->

      </div> <!-- Row END -->
    </div>
    <!-- Container END -->

  </main>

  <div class="modal fade" id="feedActionPhoto" tabindex="-1" aria-labelledby="feedActionPhotoLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <!-- Modal feed header START -->
        <div class="modal-header">
          <h5 class="modal-title" id="feedActionPhotoLabel">Add post photo</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <!-- Modal feed header END -->

        <!-- Modal feed body START -->
        <div class="modal-body">
          <!-- Add Feed -->
          <div class="d-flex mb-3">
            <!-- Avatar -->
            <div class="avatar avatar-xs me-2">
              <img class="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="">
            </div>
            <!-- Feed box  -->
            <form class="w-100">
              <textarea id="text" class="form-control pe-4 fs-3 lh-1 border-0" rows="2"
                placeholder="Share your thoughts..."></textarea>
              
            </form>
          </div>

          <!-- Dropzone photo START -->
          <div>
            <input type="file" id="input-file-to-destroy" class="dropify" data-allowed-formats="portrait square"
              data-max-file-size="2M" data-max-height="2000" />
            <p class="help">Only portrait or square images, 2M max and 2000px max-height.</p>
          </div>
          <!-- Dropzone photo END -->

        </div>
        <!-- Modal feed body END -->

        <!-- Modal feed footer -->
        <div class="modal-footer ">
          <!-- Button -->
          <button type="button" class="btn btn-danger-soft me-2" data-bs-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-success-soft">Post</button>
        </div>
        <!-- Modal feed footer -->
      </div>
    </div>
  </div>

  <div class="modal fade" id="modalCreateFeed" tabindex="-1" aria-labelledby="modalLabelCreateFeed" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <!-- Modal feed header START -->
        <div class="modal-header">
          <h5 class="modal-title" id="modalLabelCreateFeed">Create post</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <!-- Modal feed header END -->

        <!-- Modal feed body START -->
        <div class="modal-body">
          <!-- Add Feed -->
          <div class="d-flex mb-3">
            <!-- Avatar -->
            <div class="avatar avatar-xs me-2">
              <img class="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="">
            </div>
            <!-- Feed box  -->
            <form class="w-100">
              <textarea class="form-control pe-4 fs-3 lh-1 border-0" rows="4" placeholder="Share your thoughts..."
                autofocus=""></textarea>
            </form>
          </div>
          <!-- Feed rect START -->
          <div class="hstack gap-2">
            <a class="icon-md bg-success bg-opacity-10 text-success rounded-circle" href="#" data-bs-toggle="tooltip"
              data-bs-placement="top" aria-label="Photo" data-bs-original-title="Photo"> <i
                class="bi bi-image-fill"></i> </a>
            <a class="icon-md bg-info bg-opacity-10 text-info rounded-circle" href="#" data-bs-toggle="tooltip"
              data-bs-placement="top" aria-label="Video" data-bs-original-title="Video"> <i
                class="bi bi-camera-reels-fill"></i> </a>
            <a class="icon-md bg-danger bg-opacity-10 text-danger rounded-circle" href="#" data-bs-toggle="tooltip"
              data-bs-placement="top" aria-label="Events" data-bs-original-title="Events"> <i
                class="bi bi-calendar2-event-fill"></i> </a>
            <a class="icon-md bg-warning bg-opacity-10 text-warning rounded-circle" href="#" data-bs-toggle="tooltip"
              data-bs-placement="top" aria-label="Feeling/Activity" data-bs-original-title="Feeling/Activity"> <i
                class="bi bi-emoji-smile-fill"></i> </a>
            <a class="icon-md bg-light text-secondary rounded-circle" href="#" data-bs-toggle="tooltip"
              data-bs-placement="top" aria-label="Check in" data-bs-original-title="Check in"> <i
                class="bi bi-geo-alt-fill"></i> </a>
            <a class="icon-md bg-primary bg-opacity-10 text-primary rounded-circle" href="#" data-bs-toggle="tooltip"
              data-bs-placement="top" aria-label="Tag people on top" data-bs-original-title="Tag people on top"> <i
                class="bi bi-tag-fill"></i> </a>
          </div>
          <!-- Feed rect END -->
        </div>
        <!-- Modal feed body END -->

        <!-- Modal feed footer -->
        <div class="modal-footer row justify-content-between">
          <!-- Select -->
          <div class="col-lg-3">
            <div class="choices" data-type="select-one" tabindex="0" role="listbox" aria-haspopup="true"
              aria-expanded="false">
              <div class="choices__inner"><select class="form-select js-choice choice-select-text-none choices__input"
                  data-position="top" data-search-enabled="false" hidden="" tabindex="-1" data-choice="active">
                  <option value="PB" data-custom-properties="[object Object]">Public</option>
                </select>
                <div class="choices__list choices__list--single">
                  <div class="choices__item choices__item--selectable" data-item="" data-id="1" data-value="PB"
                    data-custom-properties="[object Object]" aria-selected="true">Public</div>
                </div>
              </div>
              <div class="choices__list choices__list--dropdown" aria-expanded="false">
                <div class="choices__list" role="listbox">
                  <div id="choices--asen-item-choice-1"
                    class="choices__item choices__item--choice choices__item--selectable is-highlighted" role="option"
                    data-choice="" data-id="1" data-value="PV" data-select-text="Press to select"
                    data-choice-selectable="" aria-selected="true">Custom</div>
                  <div id="choices--asen-item-choice-2"
                    class="choices__item choices__item--choice choices__item--selectable" role="option" data-choice=""
                    data-id="2" data-value="PV" data-select-text="Press to select" data-choice-selectable="">Friends
                  </div>
                  <div id="choices--asen-item-choice-3"
                    class="choices__item choices__item--choice choices__item--selectable" role="option" data-choice=""
                    data-id="3" data-value="PV" data-select-text="Press to select" data-choice-selectable="">Only me
                  </div>
                  <div id="choices--asen-item-choice-4"
                    class="choices__item choices__item--choice is-selected choices__item--selectable" role="option"
                    data-choice="" data-id="4" data-value="PB" data-select-text="Press to select"
                    data-choice-selectable="">Public</div>
                </div>
              </div>
            </div>
            <!-- Button -->
          </div>
          <div class="col-lg-8 text-sm-end">
            <button type="button" class="btn btn-danger-soft me-2"> <i class="bi bi-camera-video-fill pe-1"></i> Live
              video</button>
            <button type="button" class="btn btn-success-soft">Post</button>
          </div>
        </div>
        <!-- Modal feed footer -->

      </div>
    </div>
  </div>
  <footer class="py-2 bg-dark mt-auto" style="position: absolute; bottom: 0; width: 100%;">
    <div class="container px-4">
      <div class="d-flex align-items-center justify-content-between small">
        <div class="text-white">Copyright © vuchung 2024</div>
        <div>
          <a href="#">Privacy Policy</a>
          ·
          <a href="#">Terms &amp; Conditions</a>
        </div>
      </div>
    </div>
  </footer>
  <script src="<c:url value='/public/web/js/jquery-3.5.1.js' />"></script>
  <script src="<c:url value='/public/web/js/bootstrap.bundle.min.js' />"></script>
  <script src="<c:url value='/public/web/js/customize.js' />"></script>
  <script src="<c:url value='/public/web/js/dropify.js' />"></script>
  <script>
    $(document).ready(function () {
      // Basic
      $('.dropify').dropify();

      // Translated
      $('.dropify-fr').dropify({
        messages: {
          default: 'Glissez-déposez un fichier ici ou cliquez',
          replace: 'Glissez-déposez un fichier ou cliquez pour remplacer',
          remove: 'Supprimer',
          error: 'Désolé, le fichier trop volumineux'
        }
      });

      // Used events
      var drEvent = $('#input-file-events').dropify();

      drEvent.on('dropify.beforeClear', function (event, element) {
        return confirm("Do you really want to delete \"" + element.file.name + "\" ?");
      });

      drEvent.on('dropify.afterClear', function (event, element) {
        alert('File deleted');
      });

      drEvent.on('dropify.errors', function (event, element) {
        console.log('Has Errors');
      });

      var drDestroy = $('#input-file-to-destroy').dropify();
      drDestroy = drDestroy.data('dropify')
      $('#toggleDropify').on('click', function (e) {
        e.preventDefault();
        if (drDestroy.isDropified()) {
          drDestroy.destroy();
        } else {
          drDestroy.init();
        }
      })
    });
    document.querySelectorAll('[data-autoresize]').forEach(function (element) {
			var offset = element.offsetHeight - element.clientHeight;
			element.addEventListener('input', function (event) {
				event.target.style.height = 'auto';
				event.target.style.height = event.target.scrollHeight + offset + 'px';
			});
		});
  </script>
</body>

</html>