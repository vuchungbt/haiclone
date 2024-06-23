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

@WebServlet(urlPatterns = {"/home"})
public class HomeController extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Inject
    private IUserService userService;
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {


    }
}
