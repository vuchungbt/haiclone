package com.vuchungbt.filter;

import com.vuchungbt.constant.IConstant;
import com.vuchungbt.model.RoleModel;
import com.vuchungbt.model.UserModel;
import com.vuchungbt.utils.JWTUtil;

import javax.servlet.*;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class AuthorizationFilter implements Filter {

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
        if(tokenCookie!=null){
            String token = tokenCookie.getValue();
            String roleCode = JWTUtil.getRoleCodeFromToken(token);
            if(url.startsWith("/admin")){
                if(roleCode.equalsIgnoreCase(IConstant.ADMIN)){
                    filterChain.doFilter(servletRequest,servletResponse);
                }else{
                    ////
                    response.sendRedirect(request.getContextPath() +"/login?message=not_permission&alert=danger");
                }
            }else if(url.startsWith("/moderator")){
                if(roleCode.equalsIgnoreCase(IConstant.ADMIN)||roleCode.equalsIgnoreCase(IConstant.MODERATOR)){
                    filterChain.doFilter(servletRequest,servletResponse);
                }else{
                    //
                    response.sendRedirect(request.getContextPath() +"/login?message=not_permission&alert=danger");
                }
            }else if(url.startsWith("/manager")){
                if (roleCode.equalsIgnoreCase(IConstant.ADMIN)||roleCode.equalsIgnoreCase(IConstant.MODERATOR)||roleCode.equalsIgnoreCase(IConstant.MANAGER)){
                    filterChain.doFilter(servletRequest, servletResponse);
                }else{
                    //
                    response.sendRedirect(request.getContextPath() +"/login?message=not_permission&alert=danger");
                }
            }else{
                filterChain.doFilter(servletRequest, servletResponse);
            }
        }else{
            if(!url.startsWith("/admin")&&!url.startsWith("/moderator")&&!url.startsWith("/manager")){
                filterChain.doFilter(servletRequest, servletResponse);
            }else{
                response.sendRedirect(request.getContextPath() +"/login?message=not_login&alert=danger");
            }
        }
    }

    @Override
    public void destroy() {

    }
}
