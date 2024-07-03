package com.vuchungbt.constant;

public interface IConstant {
    public static final String FACEBOOK_CLIENT_ID = "1027609085753624" ;
    public static final String FACEBOOK_CLIENT_SECRET = "4f4a62194a1560b486a1fe351a54595f";
    public static final String FACEBOOK_REDIRECT_URI ="http://localhost:8080/login";
    public static final String FACEBOOK_LINK_GET_TOKEN ="https://graph.facebook.com/v19.0/oauth/access_token" ;
    public static final String FACEBOOK_LINK_GET_USER_INFO ="https://graph.facebook.com/me?fields=id,name,email,picture,link&access_token=";

    public static final String GOOGLE_CLIENT_ID = "849071406479-n1efj6bifntnb87eqphc2qm5ggsdgr9i.apps.googleusercontent.com";

    public static final String GOOGLE_CLIENT_SECRET = "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";

    public static final String GOOGLE_REDIRECT_URI = "http://localhost:8080/login";

    public static final String GOOGLE_GRANT_TYPE = "authorization_code";

    public static final String GOOGLE_LINK_GET_TOKEN = "https://accounts.google.com/o/oauth2/token";

    public static final String GOOGLE_LINK_GET_USER_INFO = "https://www.googleapis.com/oauth2/v1/userinfo?access_token=";

    public static final String ADMIN = "admin";
    public static final String USER = "user101";
    public static final String MODERATOR = "moderator101";
    public static final String MANAGER ="manager101";

    public static final String UPLOAD_DIR = "upload";
    public static final String UPLOAD_DIR_ROOT = "upload/root";
    public static final String UPLOAD_DIR_RESIZE = "upload/resize";
    public static final String UPLOAD_DIR_THUMBNAIL = "upload/thumbnail";
    public static final String FILE_WATERMARK = "watermark.png";

}
