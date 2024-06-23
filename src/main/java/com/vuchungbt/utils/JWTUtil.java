package com.vuchungbt.utils;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.vuchungbt.model.UserModel;
import com.auth0.jwt.JWTCreator.Builder;

import java.util.ResourceBundle;

public class JWTUtil {
    private static final String SECRET = ResourceBundle.getBundle("secret").getString("secret");
    public static String generateToken(UserModel user){
        Algorithm algorithm = Algorithm.HMAC384(SECRET);
        Builder builderToken = JWT.create()
                .withClaim("id", user.getId())
                .withClaim("name", user.getName());
        if(user.getEmail()!=null){
           builderToken.withClaim("email", user.getEmail());
        }
        if(user.getFbID()!=null){
            builderToken.withClaim("FbID", user.getFbID());
        }
        if(user.getGgID()!=null){
            builderToken.withClaim("GgID",user.getGgID());
        }
        return builderToken.sign(algorithm);
    }
    public static DecodedJWT verifyToken(String token){
        Algorithm algorithm = Algorithm.HMAC384(SECRET);
        JWTVerifier verifier = JWT.require(algorithm).build();
        return verifier.verify(token);
    }
}
