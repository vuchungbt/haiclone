package com.vuchungbt.model;

public class CommentModel extends AbstractModel{
    private String content;
    private int level;

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }
}
