package com.vuchungbt.utils;

import com.vuchungbt.constant.IConstant;
import net.coobird.thumbnailator.Thumbnails;
import net.coobird.thumbnailator.geometry.Positions;

import javax.imageio.ImageIO;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.io.File;

public class ImageUtil {
    public static final Positions Positions_BOTTOM_RIGHT = Positions.BOTTOM_RIGHT ;

    public File saveImage(Part filePart,String disk){
        File file =null;
        try {
            String fileName = filePart.getSubmittedFileName();
            String uploadPath = disk + File.separator + IConstant.UPLOAD_DIR_ROOT;
            file = new File(uploadPath + File.separator + fileName);
            filePart.write(file.getAbsolutePath());

        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return file;
    }

    public static BufferedImage
    resizeImageManual(BufferedImage originalImage, int width, int height) {
        Image tmp = originalImage.getScaledInstance(width, height, Image.SCALE_SMOOTH);
        BufferedImage resizedImage = new BufferedImage(width, height, BufferedImage.TYPE_INT_ARGB);
        Graphics2D g2d = resizedImage.createGraphics();
        g2d.drawImage(tmp, 0, 0, null);
        g2d.dispose();
        return resizedImage;
    }
    public static void resizeImageThumbnail(File file,File resizedFile,int width, int height) throws IOException {
        Thumbnails.of(file)
                .size(width, height)
                .toFile(resizedFile);
    }
    public static void resizeImageWatermark(File file,File resizedFile,BufferedImage watermark,int width, int height) throws IOException {
        Thumbnails.of(file)
                .size(width, height)
                .rotate(90)
                .watermark(Positions_BOTTOM_RIGHT, watermark, 0.5f)
                .outputQuality(0.8)
                .toFile(resizedFile);
    }

}
