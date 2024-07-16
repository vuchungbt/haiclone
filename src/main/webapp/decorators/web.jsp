<%@include file="/common/tablib.jsp"%>
<html lang="en">
<head>
    <title><dec:title default="Home"/></title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="<c:url value='/template/web/css/bootstrap.min.css'/>" rel="stylesheet" type="text/css" media="all">
    <link href="<c:url value='/template/web/css/customize.css'/> " rel="stylesheet" type="text/css" media="all">
    <link href="<c:url value='/template/web/css/dropzone.css'/> " rel="stylesheet" type="text/css" media="all">
    <link href="<c:url value='/template/web/css/glightbox.min.css'/> " rel="stylesheet" type="text/css" media="all">

    <script src="<c:url value='/template/web/js/kit.42d5adcbca.js' />"></script>

    <!-- Dark mode -->
    <script  src="<c:url value='/template/web/js/theme.js' />"></script>

    <script  src="/template/web/js/token/refreshToken.js"></script>
</head>

<body>
    <%--header--%>
    <%@include file="/common/web/header-bar.jsp"%>
    <%--header--%>

    <dec:body/>

    <%--footer--%>
    <%@include file="/common/web/footer.jsp"%>
    <%--footer--%>

    <script   src="<c:url value='/template/web/js/bootstrap.bundle.min.js'/>"></script>
    <script   src="<c:url value='/template/web/js/customize.js'/> "></script>


</body>

</html>
