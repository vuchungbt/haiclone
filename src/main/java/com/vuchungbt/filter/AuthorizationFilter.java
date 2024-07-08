package com.vuchungbt.filter;

import com.auth0.jwt.exceptions.TokenExpiredException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.vuchungbt.constant.IConstant;
import com.vuchungbt.service.IUserService;
import com.vuchungbt.utils.JWTUtil;

import javax.inject.Inject;
import javax.servlet.*;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class AuthorizationFilter implements Filter {

    @Inject
    private IUserService userService;
    private ServletContext context;
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        this.context = filterConfig.getServletContext();
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest)servletRequest;
        HttpServletResponse response = (HttpServletResponse) servletResponse;

        String url = request.getRequestURI();
        Cookie[]cookies = request.getCookies();
        Cookie tokenCookie = null;
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals("token")) {
                    tokenCookie = cookie;
                    break;
                }
            }
        }
        if(tokenCookie!=null&&!tokenCookie.getValue().isEmpty()){

            try {
                String token = tokenCookie.getValue();
                handleValidToken(token,url,request,response,filterChain);

            }catch (TokenExpiredException e){
                handleExpiredToken(url,request,response,filterChain);

            }catch (Exception e){
                System.out.println("Invalid token: " + e.getMessage());
                handleInvalidToken(request,response);
            }
        }else{
            handleNoToken(url,request,response,filterChain);
        }
    }
    private void handleValidToken(String token, String url, HttpServletRequest request,HttpServletResponse response,FilterChain filterChain)
            throws ServletException, IOException {
        String roleCode = null;
//        Long roleID = userService.getRoleIDByRoleCode(IConstant.USER);
        if(url.startsWith("/login")){
            //
            String path = "";
            //
            RequestDispatcher rd = request.getRequestDispatcher(path);
            rd.forward(request, response);
        }else if (url.startsWith("/admin")) {
            if (roleCode.equalsIgnoreCase(IConstant.ADMIN)) {
                filterChain.doFilter(request, response);
            } else {
                ////
                response.sendRedirect(request.getContextPath() + "/login?message=not_permission&alert=danger");
            }
        } else if (url.startsWith("/moderator")) {
            if (roleCode.equalsIgnoreCase(IConstant.ADMIN) || roleCode.equalsIgnoreCase(IConstant.MODERATOR)) {
                filterChain.doFilter(request, response);
            } else {
                //
                response.sendRedirect(request.getContextPath() + "/login?message=not_permission&alert=danger");
            }
        } else if (url.startsWith("/manager")) {
            if (roleCode.equalsIgnoreCase(IConstant.ADMIN) || roleCode.equalsIgnoreCase(IConstant.MODERATOR) || roleCode.equalsIgnoreCase(IConstant.MANAGER)) {
                filterChain.doFilter(request, response);
            } else {
                //
                response.sendRedirect(request.getContextPath() + "/login?message=not_permission&alert=danger");
            }
        } else {
            filterChain.doFilter(request, response);
        }

    }
    private void handleExpiredToken( String url,HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
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
        if(checkURLForNoToken(url)){
            filterChain.doFilter(request, response);
        }else{
            response.sendRedirect(request.getContextPath() + "/login?message=token_expired&alert=danger");
        }
    }
    private void handleInvalidToken( HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        response.sendRedirect(request.getContextPath() + "/login?message=token_invalid&alert=danger");
    }
    private void handleNoToken(String url, HttpServletRequest request, HttpServletResponse response, FilterChain filterChain )
            throws ServletException, IOException{
        if(checkURLForNoToken(url)) {
            filterChain.doFilter(request, response);
        }else{
            response.sendRedirect(request.getContextPath()+"/login?message=not_permission&alert=danger");
        }
    }
    private boolean checkURLForNoToken(String url){
        return !url.startsWith("/admin") && !url.startsWith("/moderator") && !url.startsWith("/manager");
    }

    @Override
    public void destroy() {

    }
}
