package com.vuchungbt.service.impl;

import com.vuchungbt.constant.IConstant;
import com.vuchungbt.service.ImageService;

import java.awt.image.BufferedImage;
import net.coobird.thumbnailator.Thumbnails;
import net.coobird.thumbnailator.geometry.Positions;
import java.io.IOException;
import javax.imageio.ImageIO;
import javax.servlet.http.Part;
import java.io.File;
import java.util.UUID;

public class ImageServiceImpl implements ImageService {
    private  int width, height;
    private String fileName,resizeName,thumbnailName,id,watermarkName;
    Part path;

    public String getWatermarkName() {
        return watermarkName;
    }

    public String getResizeName() {
        return resizeName;
    }

    public String getThumbnailName() {
        return thumbnailName;
    }

    public int getWidth() {
        return  this.width!=0 & this.height!=0? this.width : getBufferedImage().getWidth();
    }

    public void setWidth(int width) {
        this.width = width;
    }

    public int getHeight() {
        return  this.height!=0 & this.height!=0? this.width : getBufferedImage().getWidth();
    }

    public void setHeight(int height) {
        this.height = height;
    }

    public Part getPath() {
        return path;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setPath(Part path) {
        this.path = path;
        this.fileName = path.getSubmittedFileName();
        UUID uuid = UUID.randomUUID();
        this.id = uuid.toString();
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getId() {
        return id;
    }

    @Override
    public BufferedImage getBufferedImage() {
        try {
            return  ImageIO.read(getFile());

        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public File getFile() {
        return new File(getFolderUpload() + File.separator + IConstant.UPLOAD_DIR_ROOT+ File.separator + this.id +DOT_EXTENDS);

    }

    @Override
    public String getFolderUpload() {
        return System.getProperty("user.dir");
    }

    public void makeDir(){
        File f = new File(getFolderUpload()+File.separator+IConstant.UPLOAD_DIR_RESIZE);
        if(!f.exists()) f.mkdirs();
        File f1 = new File(getFolderUpload()+File.separator+IConstant.UPLOAD_DIR_THUMBNAIL);
        if(!f1.exists()) f1.mkdirs();

    };
    @Override
    public void saveImageToDisk() {
        try {
            path.write(getFile().getAbsolutePath());
            this.width=this.width>0?this.width: getBufferedImage().getWidth();
            this.height=this.height>0?this.height: getBufferedImage().getWidth();

        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
    }

    @Override
    public void createThumbnail() {
        this.thumbnailName = File.separator + IConstant.UPLOAD_DIR_THUMBNAIL+ File.separator+ id + DOT_EXTENDS;
        File resizedFile = new File(getFolderUpload()+ this.thumbnailName);
        try {
            Thumbnails.of(getFile())
                    .size(DEFAULT_WIDTH, DEFAULT_HEIGHT)
                    .toFile(resizedFile);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public File resize() {
        UUID uuid = UUID.randomUUID();
        this.resizeName = File.separator + IConstant.UPLOAD_DIR_RESIZE + File.separator+ uuid +"_resize"+ DOT_EXTENDS;
        File targetFile = new File(getFolderUpload() + resizeName);
        try {
            Thumbnails.of(getFile()).size(width, height).keepAspectRatio(false).toFile(targetFile);
        } catch (IOException ignored) {
        }
        return targetFile;
    }
    public File resizeKeepAspectRatio() {
        UUID uuid = UUID.randomUUID();
        this.resizeName = File.separator + IConstant.UPLOAD_DIR_RESIZE + File.separator+ uuid +"_resize"+ DOT_EXTENDS;
        File targetFile = new File(getFolderUpload() + resizeName);
        try {
            Thumbnails.of(getFile()).size(width, height).keepAspectRatio(true).toFile(targetFile);
        } catch (IOException ignored) {
        }
        return targetFile;
    }

    @Override
    public File scale(double scale) {
        UUID uuid = UUID.randomUUID();
        File targetFile = new File(getFolderUpload() + File.separator + IConstant.UPLOAD_DIR_RESIZE + File.separator+ uuid +"_scale_"+scale+ DOT_EXTENDS);
        try {
            Thumbnails.of(getBufferedImage()).scale(scale).toFile(targetFile.getAbsoluteFile());
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return targetFile;
    }

    @Override
    public File createWatermark() {
        UUID uuid = UUID.randomUUID();
        this.watermarkName = File.separator + IConstant.UPLOAD_DIR_RESIZE + File.separator+ uuid +  DOT_EXTENDS;
        File watermark = new File(getFolderUpload()+File.separator+IConstant.UPLOAD_DIR+File.separator+IConstant.FILE_WATERMARK);
        File targetFile = new File(getFolderUpload() + watermarkName);
        try {
            Thumbnails.of(getFile())
                    .size(width, height)
                    .watermark(Positions.TOP_RIGHT, ImageIO.read(watermark), 0.5f)
                    .outputQuality(0.8)
                    .toFile(targetFile);
        } catch (IOException e) {
            System.out.println(e.getMessage());
            throw new RuntimeException(e);
        }
        return targetFile;
    }


}
