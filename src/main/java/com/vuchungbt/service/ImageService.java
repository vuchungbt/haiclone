package com.vuchungbt.service;

import java.awt.image.BufferedImage;
import java.io.File;

public interface ImageService {
    int DEFAULT_WIDTH=200 ;
    int DEFAULT_HEIGHT=200 ;
    String DOT_EXTENDS =".JPG";
    BufferedImage getBufferedImage();
    File getFile();
    String getFolderUpload();
    void saveImageToDisk();
    void createThumbnail();
    File resize();
    File scale(double scale);
    File createWatermark();

}
