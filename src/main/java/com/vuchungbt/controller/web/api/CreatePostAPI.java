package com.vuchungbt.controller.web.api;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.rmi.ServerException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.vuchungbt.model.PostModel;
import com.vuchungbt.utils.HttpUtil;

@WebServlet(urlPatterns = "/api-create-post")
public class CreatePostAPI {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServerException, IOException {
        request.setCharacterEncoding("UTF-8");
        ObjectMapper mapper = new ObjectMapper();

        response.setContentType("application/json");
        PostModel postModel = HttpUtil.of(request.getReader()).toModel(PostModel.class);
        Cookie[]cookies = request.getCookies();
        Cookie tokenCookie = null;
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals("token")) {
                    tokenCookie = cookie;
                    break;
                }
            }
        }



    }
}
