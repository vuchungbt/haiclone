package com.vuchungbt.controller.web.home;

import com.vuchungbt.service.IUserService;

import javax.inject.Inject;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;



@WebServlet(urlPatterns = {"/home","/trending","/top","/ask","/like-post"})
public class HomeController extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Inject
    private IUserService userService;
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String pth_request = (String) request.getAttribute("router");
        System.out.println(pth_request);
        switch (pth_request) {
            case "":

                break;
            case "home":

                break;
            case "top":
                break;
            case "trending":

                break;
        }

        RequestDispatcher rd = request.getRequestDispatcher("/views/home.jsp");
        rd.forward(request, response);
    }
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
        RequestDispatcher rd = request.getRequestDispatcher("/views/home.jsp");
        rd.forward(request, response);
    }


}
