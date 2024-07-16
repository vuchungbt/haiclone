package com.vuchungbt.model;

public class CommentModel extends AbstractModel{
    private String content;
    private int level;
    private Long forPost,authId,parentId;
    private int voteCount;

    public int getVoteCount() {
        return voteCount;
    }

    public void setVoteCount(int voteCount) {
        this.voteCount = voteCount;
    }

    private UserModel created;

    public UserModel getCreated() {
        return created;
    }

    public Long getAuthId() {
        return authId;
    }

    public void setAuthId(Long authId) {
        this.authId = authId;
    }

    public void setCreated(UserModel created) {
        this.created = created;
    }

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
