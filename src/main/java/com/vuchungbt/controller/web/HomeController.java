package com.vuchungbt.controller.web;

import com.vuchungbt.model.Account;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(urlPatterns = {"/login"})
public class HomeController extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException{
        RequestDispatcher rd =request.getRequestDispatcher("/views/login.jsp");
        rd.forward(request, response);
        String code = request.getParameter("code");
        if(code!=null){
            FacebookLogin fb = new FacebookLogin();
            String accessToken = fb.getToken(code);
            Account acc = fb.getUserInfo(accessToken);
            if(acc!= null){
                System.out.println(acc.toString());
                //-- save information to database ---
                //--- userService.save(account)

            }else{
                System.out.println("Không lấy được thông tin tài khoản từ Facebook");
            }
        }
    }

}
