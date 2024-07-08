<%--
  Created by IntelliJ IDEA.
  User: Thinh
  Date: 7/1/2024
  Time: 8:37 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@include file="/common/tablib.jsp"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <title><dec:title default="Home"/></title>
    <link href="<c:url value='/template/web/css/bootstrap.min.css'/>" rel="stylesheet" type="text/css" media="all">
    <link href="<c:url value='/template/web/css/customize.css'/> " rel="stylesheet" type="text/css" media="all">
    <link href="<c:url value='/template/web/css/dropzone.css'/> " rel="stylesheet" type="text/css" media="all">
    <link href="<c:url value='/template/web/css/glightbox.min.css'/> " rel="stylesheet" type="text/css" media="all">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css">

<%--    <link rel="stylesheet" href="<c:url value='/public/web/css/bootstrap.min.css' />" />--%>
<%--    <link rel="stylesheet" href="<c:url value='/public/web/css/customize.css' />" />--%>
    <script src="<c:url value='/public/web/js/kit.42d5adcbca.js' />"></script>

    <!-- Dark mode -->
    <script src="<c:url value='/public/web/js/theme.js' />"></script>

    <link rel="stylesheet" href = "<c:url value="/template/web/css/style.css" />" type="text/css" media="all">

    <script type="text/javascript" src="/template/web/js/token/refreshToken.js"></script>
</head>

<body>
    <%--header--%>
    <%@include file="/common/web/header-bar.jsp"%>
    <%--header--%>

    <dec:body/>

    <%--footer--%>
    <%@include file="/common/web/footer.jsp"%>
    <%--footer--%>

    <script type="text/javascript" src="<c:url value='/template/web/js/bootstrap.bundle.min.js'/>"></script>
    <script type="text/javascript" src="<c:url value='/public/web/js/customize.js'/> "></script>


</body>

</html>
