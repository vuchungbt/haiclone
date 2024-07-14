package com.vuchungbt.model;

public class CommentModel extends AbstractModel{
    private String content;
    private int level;
    private Long forPost,parentId;

    public Long getParentId() {
        return parentId;
    }

    public void setParentId(Long parentId) {
        this.parentId = parentId;
    }

    public Long getForPost() {
        return forPost;
    }

    public void setForPost(Long forPost) {
        this.forPost = forPost;
    }

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
