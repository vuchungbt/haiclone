package com.vuchungbt.model;

import java.util.ArrayList;
import java.util.List;

public class PostModel extends AbstractModel {
    private List<String> tab = new ArrayList<>();
    private String source,refer,shortdescription,content;

    public String getShortdescription() {
        return shortdescription;
    }

    public void setShortdescription(String shortdescription) {
        this.shortdescription = shortdescription;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public List<String> getTab() {
        return tab;
    }

    public void setTab(List<String> tab) {
        this.tab = tab;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public String getRefer() {
        return refer;
    }

    public void setRefer(String refer) {
        this.refer = refer;
    }
}
