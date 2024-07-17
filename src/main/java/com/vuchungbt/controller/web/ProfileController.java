package com.vuchungbt.controller.web;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(urlPatterns = {"/profile"})
public class ProfileController extends HttpServlet {
    private static final long serialVersionUID = 1L;
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        Cookie []cookies = request.getCookies();
        String token = null;
        if(cookies!=null){
            for(Cookie cookie : cookies){
                if(cookie.getName().equals("token")){
                    token = cookie.getValue();
                    System.out.println(token);
                }
            }
        }
        if(token!=null){
            RequestDispatcher rd = request.getRequestDispatcher("/views/web/create-post.jsp");
            rd.forward(request, response);

        }else{
            System.out.println("Dont have token");
//            path = "/views/login.jsp";
            response.sendRedirect(request.getContextPath() + "/login");
        }

        RequestDispatcher rd = request.getRequestDispatcher("/views/web/profile.jsp");
        rd.forward(request, response);
    }
}
