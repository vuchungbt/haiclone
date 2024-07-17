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
  <link rel="stylesheet" href="<c:url value='/template/web/css/bootstrap.min.css' />" />
  <link rel="stylesheet" href="<c:url value='/template/web/css/customize.css' />" />
  <link rel="stylesheet" href="<c:url value='/template/web/css/dropify.min.css' />" />

  <script src="<c:url value='/template/web/js/kit.42d5adcbca.js' />" ></script>
  <!-- Dark mode -->
  <script src="<c:url value='/template/web/js/theme.js' />"></script>

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
            <form class="w-100" action="">
            <textarea  class="form-control pe-4 border-0" rows="1" maxlength="100" data-autoresize=""
                            placeholder="Title..."></textarea>
            <textarea maxlength="1200" class="form-control pe-4 border-0" rows="2" data-autoresize=""
                placeholder="Content..."></textarea>
                <div>

                              <input type="file" id="input-file-to-destroy" class="dropify" data-allowed-formats="portrait square"
                                data-max-file-size="25M" data-max-height="3000" />

                                <button type="submit" class="btn btn-sm btn-info" style="margin:5px; float:right" href="/login">Post</button>
                            </div>
            </form>


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

  <%@ include file="/common/web/footer.jsp" %>

  <script src="<c:url value='/template/web/js/jquery-3.5.1.js' />"></script>
  <script src="<c:url value='/template/web/js/bootstrap.bundle.min.js' />"></script>
  <script src="<c:url value='/template/web/js/customize.js' />"></script>
  <script src="<c:url value='/template/web/js/dropify.js' />"></script>
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