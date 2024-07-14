package com.vuchungbt.controller.test;

public class test {
    public static void main(String[] args) {
        String uri = "/a/b/c";
        String part = null;
        part = uri.split("/")[5];

        System.out.println("rs:"+part);
    }
}