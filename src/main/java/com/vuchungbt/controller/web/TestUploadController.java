package com.vuchungbt.controller.web;

import com.vuchungbt.service.ImageService;
import com.vuchungbt.service.impl.ImageServiceImpl;

import javax.inject.Inject;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;
import java.io.File;
import java.io.IOException;


@WebServlet("/upload")
@MultipartConfig(
        fileSizeThreshold = 1024 * 1024 * 2, // 2MB
        maxFileSize = 1024 * 1024 * 25, // 25MB
        maxRequestSize = 1024 * 1024 * 25) // 25MB
public class TestUploadController extends HttpServlet {

    private static final long serialVersionUID = 1L;

    @Inject
    private ImageServiceImpl imageService;
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        for (Part part : request.getParts()) {

            imageService.setPath(part);
            imageService.saveImageToDisk();
            imageService.resizeKeepAspectRatio();
            imageService.createWatermark();
            imageService.createThumbnail();

            File rez = imageService.resize();
            request.setAttribute("message", "Upload File Success! "+rez.getAbsolutePath());
            request.setAttribute("messageName", "Upload File Success! "+imageService.getWatermarkName());
        }

        RequestDispatcher rd = request.getRequestDispatcher("/views/web/test_result.jsp");
        rd.forward(request, response);
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        imageService.makeDir();
        RequestDispatcher rd = request.getRequestDispatcher("/views/web/test.jsp");
        rd.forward(request, response);
    }
}
