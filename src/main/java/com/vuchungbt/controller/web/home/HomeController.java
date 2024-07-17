package com.vuchungbt.controller.web.home;

import com.vuchungbt.model.PostModel;
import com.vuchungbt.service.IPostService;
import com.vuchungbt.utils.RouterUtil;

import javax.inject.Inject;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;


@WebServlet(urlPatterns = {"/home","/trending","/top","/ask","/like-post"})
public class HomeController extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Inject
    private IPostService postService;

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String pth_request = (String) request.getAttribute("router");
        System.out.println(pth_request);

        String page = RouterUtil.getRouter(2,request);
        int pageNumber = 1 ;
        try{
                pageNumber = Integer.parseInt(page);
                if(pageNumber==0) pageNumber=1;
            }
        catch (Exception e){
            //Log 404
        }
        List<PostModel> list = null;

        switch (pth_request) {
            case "":
            case "home":
                list = postService.findAll(pageNumber);
                break;
            case "top":
                list = postService.findTop(pageNumber);
                break;
            case "trending":
                list = postService.findTrending(pageNumber);
                break;
        }

        request.setAttribute("posts", list);

        RequestDispatcher rd = request.getRequestDispatcher("/views/home.jsp");
        rd.forward(request, response);
    }
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
        RequestDispatcher rd = request.getRequestDispatcher("/views/home.jsp");
        rd.forward(request, response);
    }


}
