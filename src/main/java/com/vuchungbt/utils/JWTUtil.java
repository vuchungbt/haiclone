package com.vuchungbt.utils;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.vuchungbt.model.UserModel;
import com.auth0.jwt.JWTCreator.Builder;
import com.vuchungbt.service.IUserService;

import javax.inject.Inject;
import javax.servlet.http.Cookie;
import java.util.Date;
import java.util.ResourceBundle;
import java.util.UUID;

public class JWTUtil {
    @Inject
    private IUserService userService;
    private static final String SECRET = ResourceBundle.getBundle("secret").getString("SECRET");
//    private static final long EXPIRATION_TIME = 2 * 60 * 60 * 1000;
    private static final long EXPIRATION_TIME = 2*60*1000 ;

    public static String generateToken(UserModel user){
        Algorithm algorithm = Algorithm.HMAC384(SECRET);
        Builder builderToken = JWT.create()
                .withClaim("id", user.getId())
                .withClaim("name", user.getName())
                .withClaim("roleId",user.getRoleId())
                .withExpiresAt(new Date(System.currentTimeMillis()+ EXPIRATION_TIME))
                .withIssuedAt(new Date()) // Thời điểm phát hành
                .withJWTId(UUID.randomUUID().toString()); // thêm id
        if(user.getEmail()!=null){
           builderToken.withClaim("email", user.getEmail());
        }
        if(user.getFbID()!=null){
            builderToken.withClaim("FbID", user.getFbID());
        }
        if(user.getGgID()!=null){
            builderToken.withClaim("GgID",user.getGgID());
        }
        String token = builderToken.sign(algorithm);

        Cookie tokenCookie = new Cookie("token", token);
        tokenCookie.setPath("/");
        tokenCookie.setHttpOnly(true);

        return token;
    }
    public static DecodedJWT verifyToken(String token){
        Algorithm algorithm = Algorithm.HMAC384(SECRET);
        JWTVerifier verifier = JWT.require(algorithm).build();
        return verifier.verify(token);
    }
    public static String getUserEmailFromToken(String token){
        DecodedJWT jwt = verifyToken(token);
        return jwt.getClaim("email").asString();
    }
}
