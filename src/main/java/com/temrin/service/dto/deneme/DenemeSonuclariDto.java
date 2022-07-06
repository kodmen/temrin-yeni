package com.temrin.service.dto.deneme;

import java.util.ArrayList;
import java.util.List;

enum cevaplar {
    dogru,
    yanlis,
    bos,
}

public class DenemeSonuclariDto {

    private int dogru;
    private int yanlis;
    private int bos;
    private List<cevaplar> sonuclar;

    public DenemeSonuclariDto() {
        sonuclar = new ArrayList<>();
        dogru = 0;
        yanlis = 0;
        bos = 0;
    }

    public float getPuan() {
        int toplanSoru = dogru + yanlis + bos;
        float tekSoru = 100 / toplanSoru;
        return tekSoru * dogru;
    }

    public void dogruArttir() {
        dogru++;
        sonuclar.add(cevaplar.dogru);
    }

    public void yanlisArttir() {
        yanlis++;
        sonuclar.add(cevaplar.yanlis);
    }

    public void bosArttir() {
        bos++;
        sonuclar.add(cevaplar.bos);
    }

    public int getDogru() {
        return dogru;
    }

    public void setDogru(int dogru) {
        this.dogru = dogru;
    }

    public int getYanlis() {
        return yanlis;
    }

    public void setYanlis(int yanlis) {
        this.yanlis = yanlis;
    }

    public int getBos() {
        return bos;
    }

    public void setBos(int bos) {
        this.bos = bos;
    }
}
