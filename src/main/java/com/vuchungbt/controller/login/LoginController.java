package com.vuchungbt.controller.login;

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

@WebServlet(urlPatterns = {"/login"})
public class LoginController extends HttpServlet {
    private static final long serialVersionUID = 1L;
    @Inject
    private IUserService userService;
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String code = request.getParameter("code");
        String state = request.getParameter("state");
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
                    userService.save(acc);
                }else{
                    System.out.println("Không lấy được thông tin tài khoản");
                }
            } else {
                System.out.println("Sate is null");
            }
        } else {
            RequestDispatcher rd = request.getRequestDispatcher("/views/login.jsp");
            rd.forward(request, response);
        }
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
        RequestDispatcher rd = request.getRequestDispatcher("/views/web/home.jsp");
        rd.forward(request,response);

    }
}
