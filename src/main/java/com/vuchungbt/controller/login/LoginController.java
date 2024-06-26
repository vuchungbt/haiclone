package com.vuchungbt.controller.login;

import com.vuchungbt.model.UserModel;
import com.vuchungbt.service.IUserService;
import com.vuchungbt.utils.JWTUtil;

import javax.inject.Inject;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(urlPatterns = {"/login"})
public class LoginController extends HttpServlet {
    private static final long serialVersionUID = 1L;
    @Inject
    private IUserService userService;
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String code = request.getParameter("code");
        String state = request.getParameter("state");
        String path="";
        if (code != null) {
            if (state != null) {
                UserModel acc= null;
                if (state.equals("google")) {
                    GoogleLogin gg = new GoogleLogin();
                    String accessToken = gg.getToken(code);
                    acc = gg.getUserInfo(accessToken);
                } else if (state.equals("facebook")) {
                    FacebookLogin fb = new FacebookLogin();
                    String accessToken = fb.getToken(code);
                    acc = fb.getUserInfo(accessToken);
                } else {
                    System.out.println("Unknown provider: " + state);
                }
                if(acc!=null){
                    handleUserLogin(acc,state,request,response);
                    return;

                }else{
                    request.setAttribute("status", 401);
                    request.setAttribute("msg", "User does not exists");
                    path = "/views/login.jsp";
                }
            } else {
                System.out.println("Sate is null");
                path = "/views/login.jsp";
            }
        } else {
            path = "/views/login.jsp";
        }
        RequestDispatcher rd = request.getRequestDispatcher(path);
        rd.forward(request,response);
    }
    public void handleUserLogin(UserModel userModel, String state, HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException{
        UserModel existingUser = null;
        if(state.equals("google")){
            existingUser=userService.findByGgID(userModel.getGgID());
        }else{
            existingUser=userService.findByFbID(userModel.getFbID());
        }
        if (existingUser == null) {
            userService.save(userModel);
        }
        String jwtToken = JWTUtil.generateToken(userModel);
        Cookie cookie = new Cookie("token",jwtToken);
        response.addCookie(cookie);
        request.setAttribute("token",jwtToken);
        request.setAttribute("status",200);
        request.setAttribute("user", userModel);
        RequestDispatcher rd = request.getRequestDispatcher("/views/login.jsp");
        rd.forward(request,response);
    }
}
