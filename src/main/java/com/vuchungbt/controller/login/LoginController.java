package com.vuchungbt.controller.login;

import com.vuchungbt.constant.IConstant;
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
import java.util.ResourceBundle;

@WebServlet(urlPatterns = {"/login","/logout"})
public class LoginController extends HttpServlet {
    private static final long serialVersionUID = 1L;
    @Inject
    private IUserService userService;
    ResourceBundle resourceBundle = ResourceBundle.getBundle("message");
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String code = request.getParameter("code");
        String state = request.getParameter("state");


        String path="";
        if (code != null) {
            if (state != null) {
                UserModel acc= null;
                if (state.equals("google")) {
                    String accessToken = GoogleLogin.getToken(code);
                    acc = GoogleLogin.getUserInfo(accessToken);
                } else if (state.equals("facebook")) {
                    String accessToken = FacebookLogin.getToken(code);
                    acc = FacebookLogin.getUserInfo(accessToken);
                } else {
                    System.out.println("Unknown provider: " + state);
                }
                if(acc != null){
                    handleUserLogin(acc,state,request,response);
                    System.out.println(acc);
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
        String action = request.getParameter("action");
        if(action!=null &&action.equals("logout")){
            handleUserLogout(request,response);
            return;
        }
        RequestDispatcher rd = request.getRequestDispatcher(path);
        rd.forward(request,response);
    }

    public void handleUserLogin(UserModel userModel, String state, HttpServletRequest request, HttpServletResponse response)
            throws IOException{
        UserModel existingUser = null;

        if(state.equals("google")){
            existingUser = userService.findByGgID(userModel.getGgID());
        }else{
            existingUser = userService.findByFbID(userModel.getFbID());
        }

        if (existingUser == null) {
            userModel.setRoleId(userService.getRoleIDByRoleCode(IConstant.USER));

            System.out.println("save+ ID :"+userModel.getId());
            userModel = userService.save(userModel);
        }else{
            userModel.setId(existingUser.getId());
            userModel.setRoleId(existingUser.getRoleId());
            userModel = userService.update(userModel);
        }


        response.setContentType("application/json");
        String jwtToken = JWTUtil.generateToken(userModel);

        System.out.println("Generated JWT Token: " + jwtToken);

        Cookie cookie = new Cookie("token",jwtToken);
//        cookie.setPath("/");
//        cookie.setHttpOnly(true);
        response.addCookie(cookie);
        request.getSession().setAttribute("status", 200);
        request.getSession().setAttribute("name", userModel.getName());
        request.getSession().setAttribute("thumbnail",userModel.getThumbnail());
        response.sendRedirect(request.getContextPath() + "/home");
    }
    public void handleUserLogout(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException{
        Cookie []cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals("token")) {
                    cookie.setValue("");
                    cookie.setMaxAge(0);
                    response.addCookie(cookie);
                    break;
                }
            }
        }
        response.sendRedirect(request.getContextPath() + "/login");
    }
}


