package com.vuchungbt.controller.login;

import com.auth0.jwt.interfaces.DecodedJWT;
import com.google.gson.Gson;
import com.vuchungbt.model.UserModel;
import com.vuchungbt.service.IUserService;
import com.vuchungbt.utils.JWTUtil;

import javax.inject.Inject;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@WebServlet(urlPatterns = {"/refreshAuthToken"})
public class RefreshTokenServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Inject
    private IUserService userService;
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {

        String oldToken = request.getHeader("Authorization").replace("Bearer ", "");
        DecodedJWT decodedJWT = JWTUtil.verifyToken(oldToken);
        response.setContentType("application/json");
        response.setCharacterEncoding("utf-8");
        if (decodedJWT != null) {
            Long name = decodedJWT.getClaim("name").asLong();
            Long id = decodedJWT.getClaim("id").asLong();
            UserModel userModel = userService.findByID(id);
            String token = JWTUtil.generateToken(userModel);
            Cookie tokenCookie = new Cookie("token", token);
//            tokenCookie.setPath("/");
//            tokenCookie.setHttpOnly(true);
            response.addCookie(tokenCookie);

            Map<String,Object> responseData = new HashMap<>();
            responseData.put("valid",true);
            responseData.put("token",token);
            responseData.put("name", userModel.getName());
            responseData.put("thumbnail",userModel.getThumbnail());
            response.getWriter().write(new Gson().toJson(responseData));
        }else{
            Map<String, Object> responseData = new HashMap<>();
            responseData.put("valid", false);
            response.getWriter().write(new Gson().toJson(responseData));}
    }

}
