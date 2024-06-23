package com.vuchungbt.controller.web;

import com.vuchungbt.controller.login.FacebookLogin;
import com.vuchungbt.controller.login.GoogleLogin;
import com.vuchungbt.model.UserModel;
import com.vuchungbt.service.IUserService;
import com.vuchungbt.service.impl.UserService;


import javax.inject.Inject;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(urlPatterns = {"/login1"})
public class HomeController extends HttpServlet {
    private static final long serialVersionUID = 1L;


    @Inject
    private IUserService userService;
//    private UserService userService = new UserService();
    private UserService us = new UserService();
//    protected void doGet(HttpServletRequest request, HttpServletResponse response)
//            throws ServletException, IOException{
//
//        String code = request.getParameter("code");
//        String provider = request.getParameter("provider");
//        if(code!=null){
//            if(provider.equals("google")){
//                GoogleLogin gg = new GoogleLogin();
//                String accessToken = gg.getToken(code);
//                System.out.println(accessToken);
//                UserModel acc = gg.getUserInfo(accessToken);
//                System.out.println(acc);
//            }else{
//                FacebookLogin fb = new FacebookLogin();
//                String accessToken = fb.getToken(code);
//                UserModel acc = fb.getUserInfo(accessToken);
//                if(acc!= null){
////                    userService.save(acc);
//                    System.out.println(acc);
//                }else{
//                    System.out.println("Không lấy được thông tin tài khoản từ Facebook");
//                }
//            }
//
//        }else{
//            RequestDispatcher rd =request.getRequestDispatcher("/views/login.jsp");
//            rd.forward(request, response);
//        }
//    }
protected void doGet(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {

    String code = request.getParameter("code");
    String state = request.getParameter("state");
    if (code != null) {
        if (state != null) {
            if (state.equals("google")) {
                GoogleLogin gg = new GoogleLogin();
                String accessToken = gg.getToken(code);
                System.out.println(accessToken);
                UserModel acc = gg.getUserInfo(accessToken);
                System.out.println(acc);
                userService.save(acc);
            } else if (state.equals("facebook")) {
                FacebookLogin fb = new FacebookLogin();
                String accessToken = fb.getToken(code);
                UserModel acc = fb.getUserInfo(accessToken);
                if (acc != null) {
                     userService.save(acc);
                    System.out.println(acc);
                } else {
                    System.out.println("Không lấy được thông tin tài khoản từ Facebook");
                }
            } else {
                System.out.println("Unknown provider: " + state);
            }
        } else {
            System.out.println("Provider is null");
        }
    } else {
        RequestDispatcher rd = request.getRequestDispatcher("/views/login.jsp");
        rd.forward(request, response);
    }
}


}
