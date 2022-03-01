import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
let ObservePage = class ObservePage {
    constructor(platform, router) {
        this.platform = platform;
        this.router = router;
        this.platform.ready().then(() => {
            $(document).ready(function () {
                $('.q1').click(function () {
                    $(".logoContainer").css('display', 'none');
                    if ($(this).is(".q1.shrink")) {
                        $(this).siblings().removeClass('active');
                        $(".q1").addClass('active');
                        $(this).siblings().removeClass('active');
                        var k = $(this).attr('title');
                        k = 'q1Kids';
                        $("." + k).addClass('show');
                        $("." + k).css('display', 'block');
                        $("." + k + 'List li').css('display', 'block');
                        $("." + k + 'List li').css('width', '0');
                        $(".q1KidsList li:first-child").delay(0).animate({ width: '99%' });
                        $(".q1KidsList li:nth-child(2)").delay(500).animate({ width: '99%' });
                        $(".q1KidsList li:nth-child(3)").delay(700).animate({ width: '99%' });
                        $(".q1KidsList li:nth-child(4)").delay(900).animate({ width: '99%' });
                        $(".q1KidsList li:nth-child(5)").delay(1100).animate({ width: '99%' });
                        $(".q1KidsList li:nth-child(6)").delay(1300).animate({ width: '99%' });
                        $(".q1KidsList li:nth-child(7)").delay(1500).animate({ width: '99%' });
                        $(".q1KidsList li:nth-child(8)").delay(1700).animate({ width: '99%' });
                        $(".q2Kids").css('display', 'none');
                        $(".q3Kids").css('display', 'none');
                        $(".q4Kids").css('display', 'none');
                        $(".q5Kids").css('display', 'none');
                        $(".q6Kids").css('display', 'none');
                        $(".q7Kids").css('display', 'none');
                        $(".q2Kids").removeClass('show');
                        $(".q3Kids").removeClass('show');
                        $(".q4Kids").removeClass('show');
                        $(".q5Kids").removeClass('show');
                        $(".q6Kids").removeClass('show');
                        $(".q7Kids").removeClass('show');
                        $("span.qTitle").css('display', 'none');
                        $(".q5.shrink").css('display', 'block');
                        $(".q6.shrink").css('display', 'block');
                        $(".q7.shrink").css('display', 'block');
                        $(".mcButtons").css('display', 'none');
                        $(".summaryPopup").css('display', 'none');
                    }
                    else if ($(this).is(".q1")) {
                        $(this).toggleClass('shrink');
                        $(this).siblings().removeClass('active');
                        $(".q2").addClass('active');
                        $(this).siblings().toggleClass('shrink');
                        var k = $(this).attr('title');
                        k = 'q2Kids';
                        $("." + k).toggleClass('show');
                        //$(".mcGraphics").toggleClass('flexChange');
                        $(".q2KidsList li:first-child").delay(0).animate({ width: '99%' });
                        $(".q2KidsList li:nth-child(2)").delay(200).animate({ width: '99%' });
                        $(".q2KidsList li:nth-child(3)").delay(400).animate({ width: '99%' });
                        $(".q2KidsList li:nth-child(4)").delay(600).animate({ width: '99%' });
                        $(".q2KidsList li:nth-child(5)").delay(800).animate({ width: '99%' });
                        $(".q2KidsList li:nth-child(6)").delay(1000).animate({ width: '99%' });
                        $(".q2KidsList li:nth-child(7)").delay(1200).animate({ width: '99%' });
                        $(".q2KidsList li:nth-child(8)").delay(1400).animate({ width: '99%' });
                        $("span.qTitle").css('display', 'none');
                        $(".q5.shrink").css('display', 'block');
                        $(".q6.shrink").css('display', 'block');
                        $(".q7.shrink").css('display', 'block');
                        $(".mcButtons").css('display', 'none');
                        $(".summaryPopup").css('display', 'none');
                    }
                });
                $('.q2').click(function () {
                    $(".logoContainer").css('display', 'none');
                    if ($(this).is(".q2.shrink")) {
                        $(this).addClass('shrink');
                        $(this).siblings().removeClass('active');
                        $(".q2").addClass('active');
                        var k = $(this).attr('title');
                        k = 'q2Kids';
                        $("." + k).addClass('show');
                        $("." + k).css('display', 'block');
                        $("." + k + 'List li').css('display', 'block');
                        $("." + k + 'List li').css('width', '0');
                        $(".q2KidsList li:first-child").delay(300).animate({ width: '99%' });
                        $(".q2KidsList li:nth-child(2)").delay(500).animate({ width: '99%' });
                        $(".q2KidsList li:nth-child(3)").delay(700).animate({ width: '99%' });
                        $(".q2KidsList li:nth-child(4)").delay(900).animate({ width: '99%' });
                        $(".q2KidsList li:nth-child(5)").delay(1100).animate({ width: '99%' });
                        $(".q1Kids").css('display', 'none');
                        $(".q3Kids").css('display', 'none');
                        $(".q4Kids").css('display', 'none');
                        $(".q5Kids").css('display', 'none');
                        $(".q6Kids").css('display', 'none');
                        $(".q1Kids").removeClass('show');
                        $(".q3Kids").removeClass('show');
                        $(".q4Kids").removeClass('show');
                        $(".q5Kids").removeClass('show');
                        $(".q6Kids").removeClass('show');
                        $("span.qTitle").css('display', 'none');
                        $(".q5.shrink").css('display', 'block');
                        $(".q6.shrink").css('display', 'block');
                        $(".q7.shrink").css('display', 'block');
                        $(".mcButtons").css('display', 'none');
                        $(".summaryPopup").css('display', 'none');
                    }
                    else if ($(this).is(".q2")) {
                        $(this).toggleClass('shrink');
                        $(this).siblings().removeClass('active');
                        $(".q1").addClass('active');
                        $(this).siblings().toggleClass('shrink');
                        var k = $(this).attr('title');
                        k = 'q1Kids';
                        $("." + k).toggleClass('show');
                        //$(".mcGraphics").toggleClass('flexChange');
                        $(".q1KidsList li:first-child").delay(0).animate({ width: '99%' });
                        $(".q1KidsList li:nth-child(2)").delay(200).animate({ width: '99%' });
                        $(".q1KidsList li:nth-child(3)").delay(400).animate({ width: '99%' });
                        $(".q1KidsList li:nth-child(4)").delay(600).animate({ width: '99%' });
                        $(".q1KidsList li:nth-child(5)").delay(800).animate({ width: '99%' });
                        $(".q1KidsList li:nth-child(6)").delay(1000).animate({ width: '99%' });
                        $(".q1KidsList li:nth-child(7)").delay(1200).animate({ width: '99%' });
                        $(".q1KidsList li:nth-child(8)").delay(1400).animate({ width: '99%' });
                        $("span.qTitle").css('display', 'none');
                        $(".q5.shrink").css('display', 'block');
                        $(".q6.shrink").css('display', 'block');
                        $(".q7.shrink").css('display', 'block');
                        $(".mcButtons").css('display', 'none');
                        $(".summaryPopup").css('display', 'none');
                    }
                });
                $('.q3').click(function () {
                    $(".logoContainer").css('display', 'none');
                    if ($(this).is(".q3.shrink")) {
                        $(this).addClass('shrink');
                        $(this).addClass('active');
                        $(this).siblings().removeClass('active');
                        //$(".mcGraphics").addClass('flexChange');
                        var k = $(this).attr('title');
                        k = k + 'Kids';
                        $("." + k).addClass('show');
                        $("." + k).css('display', 'block');
                        $("." + k + 'List li').css('display', 'block');
                        $("." + k + 'List li').css('width', '0');
                        $(".q3KidsList li:first-child").delay(0).animate({ width: '99%' });
                        $(".q3KidsList li:nth-child(2)").delay(500).animate({ width: '99%' });
                        $(".q3KidsList li:nth-child(3)").delay(700).animate({ width: '99%' });
                        $(".q3KidsList li:nth-child(4)").delay(900).animate({ width: '99%' });
                        $(".q3KidsList li:nth-child(5)").delay(1100).animate({ width: '99%' });
                        $(".q3KidsList li:nth-child(6)").delay(1300).animate({ width: '99%' });
                        $(".q3KidsList li:nth-child(7)").delay(1500).animate({ width: '99%' });
                        $(".q3KidsList li:nth-child(8)").delay(1700).animate({ width: '99%' });
                        $(".q1Kids").css('display', 'none');
                        $(".q2Kids").css('display', 'none');
                        $(".q4Kids").css('display', 'none');
                        $(".q5Kids").css('display', 'none');
                        $(".q6Kids").css('display', 'none');
                        $(".q1Kids").removeClass('show');
                        $(".q2Kids").removeClass('show');
                        $(".q4Kids").removeClass('show');
                        $(".q5Kids").removeClass('show');
                        $(".q6Kids").removeClass('show');
                        $("span.qTitle").css('display', 'none');
                        $(".q5.shrink").css('display', 'block');
                        $(".q6.shrink").css('display', 'block');
                        $(".q7.shrink").css('display', 'block');
                        $(".mcButtons").css('display', 'none');
                        $(".summaryPopup").css('display', 'none');
                    }
                    else if ($(this).is(".q3")) {
                        $(this).toggleClass('shrink');
                        $(this).addClass('active');
                        $(this).siblings().removeClass('active');
                        $(this).siblings().toggleClass('shrink');
                        var k = $(this).attr('title');
                        k = k + 'Kids';
                        $("." + k).toggleClass('show');
                        $(".mcGraphics").toggleClass('flexChange');
                        $(".q3KidsList li:first-child").delay(0).animate({ width: '99%' });
                        $(".q3KidsList li:nth-child(2)").delay(200).animate({ width: '99%' });
                        $(".q3KidsList li:nth-child(3)").delay(400).animate({ width: '99%' });
                        $(".q3KidsList li:nth-child(4)").delay(600).animate({ width: '99%' });
                        $(".q3KidsList li:nth-child(5)").delay(800).animate({ width: '99%' });
                        $(".q3KidsList li:nth-child(6)").delay(1000).animate({ width: '99%' });
                        $(".q3KidsList li:nth-child(7)").delay(1020).animate({ width: '99%' });
                        $(".q3KidsList li:nth-child(8)").delay(1040).animate({ width: '99%' });
                        $("span.qTitle").css('display', 'none');
                        $(".q5.shrink").css('display', 'block');
                        $(".q6.shrink").css('display', 'block');
                        $(".q7.shrink").css('display', 'block');
                        $(".mcButtons").css('display', 'none');
                        $(".summaryPopup").css('display', 'none');
                    }
                });
                $('.q4').click(function () {
                    $(".logoContainer").css('display', 'none');
                    if ($(this).is(".q4.shrink")) {
                        $(this).addClass('shrink');
                        $(this).addClass('active');
                        $(this).siblings().removeClass('active');
                        //  $(".mcGraphics").addClass('flexChange');
                        var k = $(this).attr('title');
                        k = k + 'Kids';
                        $("." + k).addClass('show');
                        $("." + k).css('display', 'block');
                        $("." + k + 'List li').css('display', 'block');
                        $("." + k + 'List li').css('width', '0');
                        $(".q4KidsList li:first-child").delay(0).animate({ width: '99%' });
                        $(".q4KidsList li:nth-child(2)").delay(500).animate({ width: '99%' });
                        $(".q4KidsList li:nth-child(3)").delay(700).animate({ width: '99%' });
                        $(".q4KidsList li:nth-child(4)").delay(900).animate({ width: '99%' });
                        $(".q4KidsList li:nth-child(5)").delay(1100).animate({ width: '99%' });
                        $(".q4KidsList li:nth-child(6)").delay(1300).animate({ width: '99%' });
                        $(".q4KidsList li:nth-child(7)").delay(1500).animate({ width: '99%' });
                        $(".q4KidsList li:nth-child(8)").delay(1700).animate({ width: '99%' });
                        $(".q1Kids").css('display', 'none');
                        $(".q2Kids").css('display', 'none');
                        $(".q3Kids").css('display', 'none');
                        $(".q5Kids").css('display', 'none');
                        $(".q6Kids").css('display', 'none');
                        $(".q1Kids").removeClass('show');
                        $(".q2Kids").removeClass('show');
                        $(".q3Kids").removeClass('show');
                        $(".q5Kids").removeClass('show');
                        $(".q6Kids").removeClass('show');
                        $("span.qTitle").css('display', 'none');
                        $(".q5.shrink").css('display', 'block');
                        $(".q6.shrink").css('display', 'block');
                        $(".q7.shrink").css('display', 'block');
                        $(".mcButtons").css('display', 'none');
                        $(".summaryPopup").css('display', 'none');
                    }
                    else if ($(this).is(".q4")) {
                        $(this).toggleClass('shrink');
                        $(this).addClass('active');
                        $(this).siblings().removeClass('active');
                        $(this).siblings().toggleClass('shrink');
                        var k = $(this).attr('title');
                        k = k + 'Kids';
                        $("." + k).toggleClass('show');
                        $(".mcGraphics").toggleClass('flexChange');
                        $(".q4KidsList li:first-child").delay(0).animate({ width: '99%' });
                        $(".q4KidsList li:nth-child(2)").delay(200).animate({ width: '99%' });
                        $(".q4KidsList li:nth-child(3)").delay(400).animate({ width: '99%' });
                        $(".q4KidsList li:nth-child(4)").delay(600).animate({ width: '99%' });
                        $(".q4KidsList li:nth-child(5)").delay(800).animate({ width: '99%' });
                        $(".q4KidsList li:nth-child(6)").delay(1000).animate({ width: '99%' });
                        $(".q4KidsList li:nth-child(7)").delay(1020).animate({ width: '99%' });
                        $(".q4KidsList li:nth-child(8)").delay(1040).animate({ width: '99%' });
                        $("span.qTitle").css('display', 'none');
                        $(".q5.shrink").css('display', 'block');
                        $(".q6.shrink").css('display', 'block');
                        $(".q7.shrink").css('display', 'block');
                        $(".mcButtons").css('display', 'none');
                        $(".summaryPopup").css('display', 'none');
                    }
                });
                $('.q5').click(function () {
                    $(".logoContainer").css('display', 'none');
                    if ($(this).is(".q5.shrink")) {
                        $(this).addClass('shrink');
                        $(this).addClass('active');
                        $(this).siblings().removeClass('active');
                        //  $(".mcGraphics").addClass('flexChange');
                        var k = $(this).attr('title');
                        k = k + 'Kids';
                        $("." + k).addClass('show');
                        $("." + k).css('display', 'block');
                        $("." + k + 'List li').css('display', 'block');
                        $("." + k + 'List li').css('width', '0');
                        $(".q5KidsList li:first-child").delay(0).animate({ width: '99%' });
                        $(".q5KidsList li:nth-child(2)").delay(500).animate({ width: '99%' });
                        $(".q5KidsList li:nth-child(3)").delay(700).animate({ width: '99%' });
                        $(".q5KidsList li:nth-child(4)").delay(900).animate({ width: '99%' });
                        $(".q5KidsList li:nth-child(5)").delay(1100).animate({ width: '99%' });
                        $(".q5KidsList li:nth-child(6)").delay(1300).animate({ width: '99%' });
                        $(".q5KidsList li:nth-child(7)").delay(1500).animate({ width: '99%' });
                        $(".q1Kids").css('display', 'none');
                        $(".q2Kids").css('display', 'none');
                        $(".q3Kids").css('display', 'none');
                        $(".q4Kids").css('display', 'none');
                        $(".q6Kids").css('display', 'none');
                        $(".q7Kids").css('display', 'none');
                        $(".q1Kids").removeClass('show');
                        $(".q2Kids").removeClass('show');
                        $(".q3Kids").removeClass('show');
                        $(".q4Kids").removeClass('show');
                        $(".q6Kids").removeClass('show');
                        $(".q7Kids").removeClass('show');
                        $("span.qTitle").css('display', 'none');
                        $(".q5.shrink").css('display', 'block');
                        $(".q6.shrink").css('display', 'block');
                        $(".q7.shrink").css('display', 'block');
                        $(".mcButtons").css('display', 'none');
                        $(".summaryPopup").css('display', 'none');
                    }
                    else if ($(this).is(".q5")) {
                        $(this).toggleClass('shrink');
                        $(this).addClass('active');
                        $(this).siblings().removeClass('active');
                        $(this).siblings().toggleClass('shrink');
                        var k = $(this).attr('title');
                        k = k + 'Kids';
                        $("." + k).toggleClass('show');
                        $(".q5KidsList li:first-child").delay(300).animate({ width: '99%' });
                        $(".q5KidsList li:nth-child(2)").delay(500).animate({ width: '99%' });
                        $(".q5KidsList li:nth-child(3)").delay(700).animate({ width: '99%' });
                        $(".q5KidsList li:nth-child(4)").delay(900).animate({ width: '99%' });
                        $(".q5KidsList li:nth-child(5)").delay(1100).animate({ width: '99%' });
                        $(".q5KidsList li:nth-child(6)").delay(1300).animate({ width: '99%' });
                        $(".q5KidsList li:nth-child(7)").delay(1500).animate({ width: '99%' });
                        $("span.qTitle").css('display', 'none');
                        $(".q5.shrink").css('display', 'block');
                        $(".q6.shrink").css('display', 'block');
                        $(".q7.shrink").css('display', 'block');
                        $(".mcButtons").css('display', 'none');
                        $(".summaryPopup").css('display', 'none');
                    }
                });
                $('.q6').click(function () {
                    $(".logoContainer").css('display', 'none');
                    if ($(this).is(".q6.shrink")) {
                        $(this).addClass('shrink');
                        $(this).addClass('active');
                        $(this).siblings().removeClass('active');
                        //  $(".mcGraphics").addClass('flexChange');
                        var k = $(this).attr('title');
                        k = k + 'Kids';
                        $("." + k).addClass('show');
                        $("." + k).css('display', 'block');
                        $("." + k + 'List li').css('display', 'block');
                        $("." + k + 'List li').css('width', '0');
                        $(".q6KidsList li:first-child").delay(0).animate({ width: '99%' });
                        $(".q6KidsList li:nth-child(2)").delay(500).animate({ width: '99%' });
                        $(".q6KidsList li:nth-child(3)").delay(700).animate({ width: '99%' });
                        $(".q6KidsList li:nth-child(4)").delay(900).animate({ width: '99%' });
                        $(".q6KidsList li:nth-child(5)").delay(1100).animate({ width: '99%' });
                        $(".q6KidsList li:nth-child(6)").delay(1300).animate({ width: '99%' });
                        $(".q6KidsList li:nth-child(7)").delay(1500).animate({ width: '99%' });
                        $(".q6KidsList li:nth-child(8)").delay(1700).animate({ width: '99%' });
                        $(".q6KidsList li:nth-child(9)").delay(1900).animate({ width: '99%' });
                        $(".q1Kids").css('display', 'none');
                        $(".q2Kids").css('display', 'none');
                        $(".q3Kids").css('display', 'none');
                        $(".q4Kids").css('display', 'none');
                        $(".q5Kids").css('display', 'none');
                        $(".q7Kids").css('display', 'none');
                        $(".q1Kids").removeClass('show');
                        $(".q2Kids").removeClass('show');
                        $(".q3Kids").removeClass('show');
                        $(".q4Kids").removeClass('show');
                        $(".q5Kids").removeClass('show');
                        $(".q7Kids").removeClass('show');
                        $("span.qTitle").css('display', 'none');
                        $(".q5.shrink").css('display', 'block');
                        $(".q6.shrink").css('display', 'block');
                        $(".q7.shrink").css('display', 'block');
                        $(".mcButtons").css('display', 'none');
                        $(".summaryPopup").css('display', 'none');
                    }
                    else if ($(this).is(".q6")) {
                        $(this).toggleClass('shrink');
                        $(this).addClass('active');
                        $(this).siblings().removeClass('active');
                        $(this).siblings().toggleClass('shrink');
                        var k = $(this).attr('title');
                        k = k + 'Kids';
                        $("." + k).toggleClass('show');
                        $(".q6KidsList li:first-child").delay(0).animate({ width: '99%' });
                        $(".q6KidsList li:nth-child(2)").delay(500).animate({ width: '99%' });
                        $(".q6KidsList li:nth-child(3)").delay(700).animate({ width: '99%' });
                        $(".q6KidsList li:nth-child(4)").delay(900).animate({ width: '99%' });
                        $(".q6KidsList li:nth-child(5)").delay(1100).animate({ width: '99%' });
                        $(".q6KidsList li:nth-child(6)").delay(1300).animate({ width: '99%' });
                        $(".q6KidsList li:nth-child(7)").delay(1500).animate({ width: '99%' });
                        $(".q6KidsList li:nth-child(8)").delay(1700).animate({ width: '99%' });
                        $(".q6KidsList li:nth-child(9)").delay(1900).animate({ width: '99%' });
                        $("span.qTitle").css('display', 'none');
                        $(".q5.shrink").css('display', 'block');
                        $(".q6.shrink").css('display', 'block');
                        $(".q7.shrink").css('display', 'block');
                        $(".mcButtons").css('display', 'none');
                        $(".summaryPopup").css('display', 'none');
                    }
                });
                $('.q7').click(function () {
                    $(".logoContainer").css('display', 'none');
                    if ($(this).is(".q7.shrink")) {
                        $(this).addClass('shrink');
                        $(this).addClass('active');
                        $(this).siblings().removeClass('active');
                        //  $(".mcGraphics").addClass('flexChange');
                        var k = $(this).attr('title');
                        k = k + 'Kids';
                        $("." + k).addClass('show');
                        $("." + k).css('display', 'block');
                        $("." + k + 'List li').css('display', 'block');
                        $("." + k + 'List li').css('width', '0');
                        $(".q7KidsList li:first-child").delay(300).animate({ width: '99%' });
                        $(".q7KidsList li:nth-child(2)").delay(500).animate({ width: '99%' });
                        $(".q7KidsList li:nth-child(3)").delay(700).animate({ width: '99%' });
                        $(".q7KidsList li:nth-child(4)").delay(900).animate({ width: '99%' });
                        $(".q1Kids").css('display', 'none');
                        $(".q2Kids").css('display', 'none');
                        $(".q3Kids").css('display', 'none');
                        $(".q4Kids").css('display', 'none');
                        $(".q5Kids").css('display', 'none');
                        $(".q6Kids").css('display', 'none');
                        $(".q1Kids").removeClass('show');
                        $(".q2Kids").removeClass('show');
                        $(".q3Kids").removeClass('show');
                        $(".q4Kids").removeClass('show');
                        $(".q5Kids").removeClass('show');
                        $(".q6Kids").removeClass('show');
                        $("span.qTitle").css('display', 'none');
                        $(".q5.shrink").css('display', 'block');
                        $(".q6.shrink").css('display', 'block');
                        $(".q7.shrink").css('display', 'block');
                        $(".mcButtons").css('display', 'none');
                        $(".summaryPopup").css('display', 'none');
                    }
                    else if ($(this).is(".q6")) {
                        $(this).toggleClass('shrink');
                        $(this).addClass('active');
                        $(this).siblings().removeClass('active');
                        $(this).siblings().toggleClass('shrink');
                        var k = $(this).attr('title');
                        k = k + 'Kids';
                        $("." + k).toggleClass('show');
                        $(".q7KidsList li:first-child").delay(300).animate({ width: '99%' });
                        $(".q7KidsList li:nth-child(2)").delay(500).animate({ width: '99%' });
                        $(".q7KidsList li:nth-child(3)").delay(700).animate({ width: '99%' });
                        $(".q7KidsList li:nth-child(4)").delay(900).animate({ width: '99%' });
                        $("span.qTitle").css('display', 'none');
                        $(".q5.shrink").css('display', 'block');
                        $(".q6.shrink").css('display', 'block');
                        $(".q7.shrink").css('display', 'block');
                        $(".mcButtons").css('display', 'none');
                        $(".summaryPopup").css('display', 'none');
                    }
                });
                /*
                $('.q5').click(function() {
                
                      $(this).addClass('active');
                  $(this).siblings().removeClass('active');
                
                      var k = $(this).attr('title');
                    var k = k+'Kids';
                    $("." + k).addClass('show');
                    $("." + k).css('display','block');
                
                    
                    $(".q1Kids").css('display','none');
                    $(".q2Kids").css('display','none');$(".q3Kids").css('display','none');
                    $(".q4Kids").css('display','none');$(".q6Kids").css('display','none');
                    
                    $(".q1Kids").removeClass('show');
                    $(".q2Kids").removeClass('show');
                    $(".q3Kids").removeClass('show');$(".q4Kids").removeClass('show');	  $(".q6Kids").removeClass('show');
                    
                    
                    $("span.qTitle").css('display','none');
                    
                    $(".q5.shrink").css('display','block');
                    $(".q6.shrink").css('display','block');
                    $(".mcButtons").css('display','none');
                
                    });
                  
                $('.q6').click(function() {
                
                      $(this).addClass('active');
                  $(this).siblings().removeClass('active');
                
                      var k = $(this).attr('title');
                    var k = k+'Kids';
                    $("." + k).addClass('show');
                    $("." + k).css('display','block');
                
                    
                    $(".q1Kids").css('display','none');
                    $(".q2Kids").css('display','none');$(".q3Kids").css('display','none');
                    $(".q4Kids").css('display','none');$(".q5Kids").css('display','none');
                    
                    $(".q1Kids").removeClass('show');
                    $(".q2Kids").removeClass('show');
                    $(".q3Kids").removeClass('show');$(".q4Kids").removeClass('show');	  $(".q5Kids").removeClass('show');
                    
                    
                    $("span.qTitle").css('display','none');
                    
                    $(".q5.shrink").css('display','block');
                    $(".q6.shrink").css('display','block');
                    $(".mcButtons").css('display','none');
                
                    });
                
                */
                $('.copingBtn').click(function () {
                    $(".q5").addClass('active');
                    $(".mcGraphics").children().addClass('shrink');
                    $(".q5Kids").addClass('show');
                    $(".q5Kids").css('display', 'block');
                    $(".q1Kids").css('display', 'none');
                    $(".q2Kids").css('display', 'none');
                    $(".q3Kids").css('display', 'none');
                    $(".q4Kids").css('display', 'none');
                    $(".q6Kids").css('display', 'none');
                    $(".q5KidsList li:first-child").delay(300).animate({ width: '99%' });
                    $(".q5KidsList li:nth-child(2)").delay(500).animate({ width: '99%' });
                    $(".q5KidsList li:nth-child(3)").delay(700).animate({ width: '99%' });
                    $(".q5KidsList li:nth-child(4)").delay(900).animate({ width: '99%' });
                    $(".q5KidsList li:nth-child(5)").delay(1100).animate({ width: '99%' });
                    $(".q5KidsList li:nth-child(6)").delay(1300).animate({ width: '99%' });
                    $("span.qTitle").css('display', 'none');
                    $(".q5.shrink").css('display', 'block');
                    $(".q6.shrink").css('display', 'block');
                    $(".q7.shrink").css('display', 'block');
                    $(".mcButtons").css('display', 'none');
                });
                $('.communityBtn').click(function () {
                    $(".q6").addClass('active');
                    $(".mcGraphics").children().addClass('shrink');
                    $(".q6Kids").addClass('show');
                    $(".q6Kids").css('display', 'block');
                    $(".q1Kids").css('display', 'none');
                    $(".q2Kids").css('display', 'none');
                    $(".q3Kids").css('display', 'none');
                    $(".q4Kids").css('display', 'none');
                    $(".q5Kids").css('display', 'none');
                    $(".q6KidsList li:first-child").delay(300).animate({ width: '99%' });
                    $(".q6KidsList li:nth-child(2)").delay(500).animate({ width: '99%' });
                    $(".q6KidsList li:nth-child(3)").delay(700).animate({ width: '99%' });
                    $(".q6KidsList li:nth-child(4)").delay(900).animate({ width: '99%' });
                    $(".q6KidsList li:nth-child(5)").delay(1100).animate({ width: '99%' });
                    $(".q6KidsList li:nth-child(6)").delay(1300).animate({ width: '99%' });
                    $(".q6KidsList li:nth-child(7)").delay(1500).animate({ width: '99%' });
                    $(".q6KidsList li:nth-child(8)").delay(1700).animate({ width: '99%' });
                    $("span.qTitle").css('display', 'none');
                    $(".q5.shrink").css('display', 'block');
                    $(".q6.shrink").css('display', 'block');
                    $(".q7.shrink").css('display', 'block');
                    $(".mcButtons").css('display', 'none');
                });
                $('.resourcesBtn').click(function () {
                    $(".q7").addClass('active');
                    $(".mcGraphics").children().addClass('shrink');
                    $(".q7Kids").addClass('show');
                    $(".q7Kids").css('display', 'block');
                    $(".q1Kids").css('display', 'none');
                    $(".q2Kids").css('display', 'none');
                    $(".q3Kids").css('display', 'none');
                    $(".q4Kids").css('display', 'none');
                    $(".q5Kids").css('display', 'none');
                    $(".q6Kids").css('display', 'none');
                    $(".q7KidsList li:first-child").delay(300).animate({ width: '99%' });
                    $(".q7KidsList li:nth-child(2)").delay(500).animate({ width: '99%' });
                    $(".q7KidsList li:nth-child(3)").delay(700).animate({ width: '99%' });
                    $(".q7KidsList li:nth-child(4)").delay(900).animate({ width: '99%' });
                    $("span.qTitle").css('display', 'none');
                    $(".q5.shrink").css('display', 'block');
                    $(".q6.shrink").css('display', 'block');
                    $(".q7.shrink").css('display', 'block');
                    $(".mcButtons").css('display', 'none');
                });
                $('#inCrisis').click(function () {
                    $(".popOverlay").css('display', 'block');
                    $(".inCrisisPopup").css('display', 'block');
                });
                $('.notNowBtn').click(function () {
                    $(".popOverlay").css('display', 'none');
                    $(".inCrisisPopup").css('display', 'none');
                });
                $('.topNavAnchor').click(function () {
                    $(".mainNav").css('display', 'block');
                    $(".mainNav").delay(100).animate({ left: '0' });
                });
                $('.closeMainNav').click(function () {
                    $(".mainNav").css('display', 'none');
                    $(".mainNav").delay(100).animate({ left: '-100%' });
                });
                $('.mainNavList li').click(function () {
                    $(".mainNav").css('display', 'none');
                    $(".mainNav").delay(100).animate({ left: '-100%' });
                });
                $('.qkidsList li .infoPopup').click(function () {
                    $(this).parent().css('overflow', 'unset');
                    $(this).parent().siblings(".summaryPopup").css('display', 'block');
                });
                $('.infoPopup').click(function () {
                    $(this).parent().css('overflow', 'unset');
                    $(this).siblings(".summaryPopup").css('display', 'block');
                });
                $('.infoPopupHowWorks').click(function () {
                    $(".howitworksPop").css('display', 'block');
                });
                $('.abtPopup').click(function () {
                    $(this).css('overflow', 'unset');
                    $(this).siblings(".abtSummaryPopup").css('display', 'block');
                });
                $('.saLeft').click(function () {
                    $(this).parent().parent().css('display', 'none');
                });
                $('h3.codeStep').click(function () {
                    $(".codeDetail").css('display', 'none');
                    $(this).siblings(".codeDetail").css('display', 'block');
                });
                setTimeout(function () { $("#sa1").show(); }, 6050);
                $('#sa1').click(function () {
                    $(this).css('display', 'none');
                    $("#sa2").css('display', 'none');
                    $("#sa2").css('display', 'block');
                    $("#sa3").css('display', 'block');
                    //setTimeout(function(){$("#sa2").hide();},15050);
                    setTimeout(function () { $("#sa2").css('display', 'none'); }, 15050);
                    //setTimeout(function(){$("#sa1").css('display','block');},15051);
                    var cycle = parseInt($(".sosCount").html());
                    var cycleVal = cycle + 1;
                    setTimeout(function () { $(".sosCount").html(cycleVal); }, 15000);
                });
                $('#sa3').click(function () {
                    $(this).css('display', 'none');
                    $("#sa1").css('display', 'block');
                });
                $(".meter-tabs li").click(function () {
                    $(this).siblings().removeClass("active");
                    $(this).removeClass("inactive").addClass("active");
                    $(".metermatr").css("display", "none");
                    var tit = $(this).attr("title");
                    $("." + tit + "Matr").css("display", "block");
                });
                $("#ccircle circle").click(function () {
                    $(".meterTabsContent").css("display", "none");
                    var tit = $(this).attr("id");
                    $("#" + tit + "Tabs").css("display", "block");
                    //$(this).sibligs("circle").attr('stroke-opacity','0');
                    $("#angerMeter").attr('stroke-opacity', '0');
                    $("#guiltMeter").attr('stroke-opacity', '0');
                    $("#discontentMeter").attr('stroke-opacity', '0');
                    $("#envyMeter").attr('stroke-opacity', '0');
                    $("#sadMeter").attr('stroke-opacity', '0');
                    $("#anxietyMeter").attr('stroke-opacity', '0');
                    $("#lonelinessMeter").attr('stroke-opacity', '0');
                    $("#angerMeter").attr('r', '10%');
                    $("#guiltMeter").attr('r', '10%');
                    $("#discontentMeter").attr('r', '10%');
                    $("#envyMeter").attr('r', '10%');
                    $("#sadMeter").attr('r', '10%');
                    $("#anxietyMeter").attr('r', '10%');
                    $("#lonelinessMeter").attr('r', '10%');
                    $(this).attr('stroke-opacity', '1');
                    $(this).attr('r', '12%');
                    if (tit == "angerMeter") {
                        $("#angerMeter").attr('cx', '50%');
                        $("#angerMeter").attr('cy', '15%');
                        $("#guiltMeter").attr('cx', '78%');
                        $("#guiltMeter").attr('cy', '28%');
                        $("#discontentMeter").attr('cx', '85%');
                        $("#discontentMeter").attr('cy', '55%');
                        $("#envyMeter").attr('cx', '68%');
                        $("#envyMeter").attr('cy', '79%');
                        $("#sadMeter").attr('cx', '34%');
                        $("#sadMeter").attr('cy', '79%');
                        $("#anxietyMeter").attr('cx', '15%');
                        $("#anxietyMeter").attr('cy', '55%');
                        $("#lonelinessMeter").attr('cx', '22%');
                        $("#lonelinessMeter").attr('cy', '28%');
                        $(".angerMeter").attr('x', '50%');
                        $(".angerMeter").attr('y', '15%');
                        $(".guiltMeter").attr('x', '78%');
                        $(".guiltMeter").attr('y', '28%');
                        $(".discontentMeter").attr('x', '85%');
                        $(".discontentMeter").attr('y', '55%');
                        $(".envyMeter").attr('x', '68%');
                        $(".envyMeter").attr('y', '79%');
                        $(".sadMeter").attr('x', '34%');
                        $(".sadMeter").attr('y', '79%');
                        $(".anxietyMeter").attr('x', '15%');
                        $(".anxietyMeter").attr('y', '55%');
                        $(".lonelinessMeter").attr('x', '22%');
                        $(".lonelinessMeter").attr('y', '28%');
                    }
                    if (tit == "guiltMeter") {
                        $("#angerMeter").attr('cx', '22%');
                        $("#angerMeter").attr('cy', '28%');
                        $("#guiltMeter").attr('cx', '50%');
                        $("#guiltMeter").attr('cy', '15%');
                        $("#discontentMeter").attr('cx', '78%');
                        $("#discontentMeter").attr('cy', '28%');
                        $("#envyMeter").attr('cx', '85%');
                        $("#envyMeter").attr('cy', '55%');
                        $("#sadMeter").attr('cx', '68%');
                        $("#sadMeter").attr('cy', '79%');
                        $("#anxietyMeter").attr('cx', '34%');
                        $("#anxietyMeter").attr('cy', '79%');
                        $("#lonelinessMeter").attr('cx', '15%');
                        $("#lonelinessMeter").attr('cy', '55%');
                        $(".angerMeter").attr('x', '22%');
                        $(".angerMeter").attr('y', '28%');
                        $(".guiltMeter").attr('x', '50%');
                        $(".guiltMeter").attr('y', '15%');
                        $(".discontentMeter").attr('x', '78%');
                        $(".discontentMeter").attr('y', '28%');
                        $(".envyMeter").attr('x', '85%');
                        $(".envyMeter").attr('y', '55%');
                        $(".sadMeter").attr('x', '68%');
                        $(".sadMeter").attr('y', '79%');
                        $(".anxietyMeter").attr('x', '34%');
                        $(".anxietyMeter").attr('y', '79%');
                        $(".lonelinessMeter").attr('x', '15%');
                        $(".lonelinessMeter").attr('y', '55%');
                    }
                    if (tit == "discontentMeter") {
                        $("#angerMeter").attr('cx', '15%');
                        $("#angerMeter").attr('cy', '55%');
                        $("#guiltMeter").attr('cx', '22%');
                        $("#guiltMeter").attr('cy', '28%');
                        $("#discontentMeter").attr('cx', '50%');
                        $("#discontentMeter").attr('cy', '15%');
                        $("#envyMeter").attr('cx', '78%');
                        $("#envyMeter").attr('cy', '28%');
                        $("#sadMeter").attr('cx', '85%');
                        $("#sadMeter").attr('cy', '55%');
                        $("#anxietyMeter").attr('cx', '68%');
                        $("#anxietyMeter").attr('cy', '79%');
                        $("#lonelinessMeter").attr('cx', '34%');
                        $("#lonelinessMeter").attr('cy', '79%');
                        $(".angerMeter").attr('x', '15%');
                        $(".angerMeter").attr('y', '55%');
                        $(".guiltMeter").attr('x', '22%');
                        $(".guiltMeter").attr('y', '28%');
                        $(".discontentMeter").attr('x', '50%');
                        $(".discontentMeter").attr('y', '15%');
                        $(".envyMeter").attr('x', '78%');
                        $(".envyMeter").attr('y', '28%');
                        $(".sadMeter").attr('x', '85%');
                        $(".sadMeter").attr('y', '55%');
                        $(".anxietyMeter").attr('x', '68%');
                        $(".anxietyMeter").attr('y', '79%');
                        $(".lonelinessMeter").attr('x', '34%');
                        $(".lonelinessMeter").attr('y', '79%');
                    }
                    if (tit == "envyMeter") {
                        $("#angerMeter").attr('cx', '34%');
                        $("#angerMeter").attr('cy', '79%');
                        $("#guiltMeter").attr('cx', '15%');
                        $("#guiltMeter").attr('cy', '55%');
                        $("#discontentMeter").attr('cx', '22%');
                        $("#discontentMeter").attr('cy', '28%');
                        $("#envyMeter").attr('cx', '50%');
                        $("#envyMeter").attr('cy', '15%');
                        $("#sadMeter").attr('cx', '78%');
                        $("#sadMeter").attr('cy', '28%');
                        $("#anxietyMeter").attr('cx', '85%');
                        $("#anxietyMeter").attr('cy', '55%');
                        $("#lonelinessMeter").attr('cx', '68%');
                        $("#lonelinessMeter").attr('cy', '79%');
                        $(".angerMeter").attr('x', '34%');
                        $(".angerMeter").attr('y', '79%');
                        $(".guiltMeter").attr('x', '15%');
                        $(".guiltMeter").attr('y', '55%');
                        $(".discontentMeter").attr('x', '22%');
                        $(".discontentMeter").attr('y', '28%');
                        $(".envyMeter").attr('x', '50%');
                        $(".envyMeter").attr('y', '15%');
                        $(".sadMeter").attr('x', '78%');
                        $(".sadMeter").attr('y', '28%');
                        $(".anxietyMeter").attr('x', '85%');
                        $(".anxietyMeter").attr('y', '55%');
                        $(".lonelinessMeter").attr('x', '68%');
                        $(".lonelinessMeter").attr('y', '79%');
                    }
                    if (tit == "sadMeter") {
                        $("#angerMeter").attr('cx', '68%');
                        $("#angerMeter").attr('cy', '79%');
                        $("#guiltMeter").attr('cx', '34%');
                        $("#guiltMeter").attr('cy', '79%');
                        $("#discontentMeter").attr('cx', '15%');
                        $("#discontentMeter").attr('cy', '55%');
                        $("#envyMeter").attr('cx', '22%');
                        $("#envyMeter").attr('cy', '28%');
                        $("#sadMeter").attr('cx', '50%');
                        $("#sadMeter").attr('cy', '15%');
                        $("#anxietyMeter").attr('cx', '78%');
                        $("#anxietyMeter").attr('cy', '28%');
                        $("#lonelinessMeter").attr('cx', '85%');
                        $("#lonelinessMeter").attr('cy', '55%');
                        $(".angerMeter").attr('x', '68%');
                        $(".angerMeter").attr('y', '79%');
                        $(".guiltMeter").attr('x', '34%');
                        $(".guiltMeter").attr('y', '79%');
                        $(".discontentMeter").attr('x', '15%');
                        $(".discontentMeter").attr('y', '55%');
                        $(".envyMeter").attr('x', '22%');
                        $(".envyMeter").attr('y', '28%');
                        $(".sadMeter").attr('x', '50%');
                        $(".sadMeter").attr('y', '15%');
                        $(".anxietyMeter").attr('x', '78%');
                        $(".anxietyMeter").attr('y', '28%');
                        $(".lonelinessMeter").attr('x', '85%');
                        $(".lonelinessMeter").attr('y', '55%');
                    }
                    if (tit == "anxietyMeter") {
                        $("#angerMeter").attr('cx', '85%');
                        $("#angerMeter").attr('cy', '55%');
                        $("#guiltMeter").attr('cx', '68%');
                        $("#guiltMeter").attr('cy', '79%');
                        $("#discontentMeter").attr('cx', '34%');
                        $("#discontentMeter").attr('cy', '79%');
                        $("#envyMeter").attr('cx', '15%');
                        $("#envyMeter").attr('cy', '55%');
                        $("#sadMeter").attr('cx', '22%');
                        $("#sadMeter").attr('cy', '28%');
                        $("#anxietyMeter").attr('cx', '50%');
                        $("#anxietyMeter").attr('cy', '15%');
                        $("#lonelinessMeter").attr('cx', '78%');
                        $("#lonelinessMeter").attr('cy', '28%');
                        $(".angerMeter").attr('x', '85%');
                        $(".angerMeter").attr('y', '55%');
                        $(".guiltMeter").attr('x', '68%');
                        $(".guiltMeter").attr('y', '79%');
                        $(".discontentMeter").attr('x', '34%');
                        $(".discontentMeter").attr('y', '79%');
                        $(".envyMeter").attr('x', '15%');
                        $(".envyMeter").attr('y', '55%');
                        $(".sadMeter").attr('x', '22%');
                        $(".sadMeter").attr('y', '28%');
                        $(".anxietyMeter").attr('x', '50%');
                        $(".anxietyMeter").attr('y', '15%');
                        $(".lonelinessMeter").attr('x', '78%');
                        $(".lonelinessMeter").attr('y', '28%');
                    }
                    if (tit == "lonelinessMeter") {
                        $("#angerMeter").attr('cx', '78%');
                        $("#angerMeter").attr('cy', '28%');
                        $("#guiltMeter").attr('cx', '85%');
                        $("#guiltMeter").attr('cy', '55%');
                        $("#discontentMeter").attr('cx', '68%');
                        $("#discontentMeter").attr('cy', '79%');
                        $("#envyMeter").attr('cx', '34%');
                        $("#envyMeter").attr('cy', '79%');
                        $("#sadMeter").attr('cx', '15%');
                        $("#sadMeter").attr('cy', '55%');
                        $("#anxietyMeter").attr('cx', '22%');
                        $("#anxietyMeter").attr('cy', '28%');
                        $("#lonelinessMeter").attr('cx', '50%');
                        $("#lonelinessMeter").attr('cy', '15%');
                        $(".angerMeter").attr('x', '78%');
                        $(".angerMeter").attr('y', '28%');
                        $(".guiltMeter").attr('x', '85%');
                        $(".guiltMeter").attr('y', '55%');
                        $(".discontentMeter").attr('x', '68%');
                        $(".discontentMeter").attr('y', '79%');
                        $(".envyMeter").attr('x', '34%');
                        $(".envyMeter").attr('y', '79%');
                        $(".sadMeter").attr('x', '15%');
                        $(".sadMeter").attr('y', '55%');
                        $(".anxietyMeter").attr('x', '22%');
                        $(".anxietyMeter").attr('y', '28%');
                        $(".lonelinessMeter").attr('x', '50%');
                        $(".lonelinessMeter").attr('y', '15%');
                    }
                });
                $("#ccircle text").click(function () {
                    $(".meterTabsContent").css("display", "none");
                    var tit = $(this).attr("class");
                    $("#" + tit + "Tabs").css("display", "block");
                    $("#angerMeter").attr('stroke-opacity', '0');
                    $("#guiltMeter").attr('stroke-opacity', '0');
                    $("#discontentMeter").attr('stroke-opacity', '0');
                    $("#envyMeter").attr('stroke-opacity', '0');
                    $("#sadMeter").attr('stroke-opacity', '0');
                    $("#anxietyMeter").attr('stroke-opacity', '0');
                    $("#lonelinessMeter").attr('stroke-opacity', '0');
                    $("#angerMeter").attr('r', '10%');
                    $("#guiltMeter").attr('r', '10%');
                    $("#discontentMeter").attr('r', '10%');
                    $("#envyMeter").attr('r', '10%');
                    $("#sadMeter").attr('r', '10%');
                    $("#anxietyMeter").attr('r', '10%');
                    $("#lonelinessMeter").attr('r', '10%');
                    if (tit == "angerMeter") {
                        $("#angerMeter").attr('stroke-opacity', '1');
                    }
                    if (tit == "guiltMeter") {
                        $("#guiltMeter").attr('stroke-opacity', '1');
                    }
                    if (tit == "discontentMeter") {
                        $("#discontentMeter").attr('stroke-opacity', '1');
                    }
                    if (tit == "envyMeter") {
                        $("#envyMeter").attr('stroke-opacity', '1');
                    }
                    if (tit == "sadMeter") {
                        $("#sadMeter").attr('stroke-opacity', '1');
                    }
                    if (tit == "anxietyMeter") {
                        $("#anxietyMeter").attr('stroke-opacity', '1');
                    }
                    if (tit == "lonelinessMeter") {
                        $("#lonelinessMeter").attr('stroke-opacity', '1');
                    }
                    if (tit == "angerMeter") {
                        $("#angerMeter").attr('stroke-opacity', '1');
                        $("#angerMeter").attr('r', '12%');
                        $("#angerMeter").attr('cx', '50%');
                        $("#angerMeter").attr('cy', '15%');
                        $("#guiltMeter").attr('cx', '78%');
                        $("#guiltMeter").attr('cy', '28%');
                        $("#discontentMeter").attr('cx', '85%');
                        $("#discontentMeter").attr('cy', '55%');
                        $("#envyMeter").attr('cx', '68%');
                        $("#envyMeter").attr('cy', '79%');
                        $("#sadMeter").attr('cx', '34%');
                        $("#sadMeter").attr('cy', '79%');
                        $("#anxietyMeter").attr('cx', '15%');
                        $("#anxietyMeter").attr('cy', '55%');
                        $("#lonelinessMeter").attr('cx', '22%');
                        $("#lonelinessMeter").attr('cy', '28%');
                        $(".angerMeter").attr('x', '50%');
                        $(".angerMeter").attr('y', '15%');
                        $(".guiltMeter").attr('x', '78%');
                        $(".guiltMeter").attr('y', '28%');
                        $(".discontentMeter").attr('x', '85%');
                        $(".discontentMeter").attr('y', '55%');
                        $(".envyMeter").attr('x', '68%');
                        $(".envyMeter").attr('y', '79%');
                        $(".sadMeter").attr('x', '34%');
                        $(".sadMeter").attr('y', '79%');
                        $(".anxietyMeter").attr('x', '15%');
                        $(".anxietyMeter").attr('y', '55%');
                        $(".lonelinessMeter").attr('x', '22%');
                        $(".lonelinessMeter").attr('y', '28%');
                    }
                    if (tit == "guiltMeter") {
                        $("#guiltMeter").attr('stroke-opacity', '1');
                        $("#guiltMeter").attr('r', '12%');
                        $("#angerMeter").attr('cx', '22%');
                        $("#angerMeter").attr('cy', '28%');
                        $("#guiltMeter").attr('cx', '50%');
                        $("#guiltMeter").attr('cy', '15%');
                        $("#discontentMeter").attr('cx', '78%');
                        $("#discontentMeter").attr('cy', '28%');
                        $("#envyMeter").attr('cx', '85%');
                        $("#envyMeter").attr('cy', '55%');
                        $("#sadMeter").attr('cx', '68%');
                        $("#sadMeter").attr('cy', '79%');
                        $("#anxietyMeter").attr('cx', '34%');
                        $("#anxietyMeter").attr('cy', '79%');
                        $("#lonelinessMeter").attr('cx', '15%');
                        $("#lonelinessMeter").attr('cy', '55%');
                        $(".angerMeter").attr('x', '22%');
                        $(".angerMeter").attr('y', '28%');
                        $(".guiltMeter").attr('x', '50%');
                        $(".guiltMeter").attr('y', '15%');
                        $(".discontentMeter").attr('x', '78%');
                        $(".discontentMeter").attr('y', '28%');
                        $(".envyMeter").attr('x', '85%');
                        $(".envyMeter").attr('y', '55%');
                        $(".sadMeter").attr('x', '68%');
                        $(".sadMeter").attr('y', '79%');
                        $(".anxietyMeter").attr('x', '34%');
                        $(".anxietyMeter").attr('y', '79%');
                        $(".lonelinessMeter").attr('x', '15%');
                        $(".lonelinessMeter").attr('y', '55%');
                    }
                    if (tit == "discontentMeter") {
                        $("#discontentMeter").attr('stroke-opacity', '1');
                        $("#discontentMeter").attr('r', '12%');
                        $("#angerMeter").attr('cx', '15%');
                        $("#angerMeter").attr('cy', '55%');
                        $("#guiltMeter").attr('cx', '22%');
                        $("#guiltMeter").attr('cy', '28%');
                        $("#discontentMeter").attr('cx', '50%');
                        $("#discontentMeter").attr('cy', '15%');
                        $("#envyMeter").attr('cx', '78%');
                        $("#envyMeter").attr('cy', '28%');
                        $("#sadMeter").attr('cx', '85%');
                        $("#sadMeter").attr('cy', '55%');
                        $("#anxietyMeter").attr('cx', '68%');
                        $("#anxietyMeter").attr('cy', '79%');
                        $("#lonelinessMeter").attr('cx', '34%');
                        $("#lonelinessMeter").attr('cy', '79%');
                        $(".angerMeter").attr('x', '15%');
                        $(".angerMeter").attr('y', '55%');
                        $(".guiltMeter").attr('x', '22%');
                        $(".guiltMeter").attr('y', '28%');
                        $(".discontentMeter").attr('x', '50%');
                        $(".discontentMeter").attr('y', '15%');
                        $(".envyMeter").attr('x', '78%');
                        $(".envyMeter").attr('y', '28%');
                        $(".sadMeter").attr('x', '85%');
                        $(".sadMeter").attr('y', '55%');
                        $(".anxietyMeter").attr('x', '68%');
                        $(".anxietyMeter").attr('y', '79%');
                        $(".lonelinessMeter").attr('x', '34%');
                        $(".lonelinessMeter").attr('y', '79%');
                    }
                    if (tit == "envyMeter") {
                        $("#envyMeter").attr('stroke-opacity', '1');
                        $("#envyMeter").attr('r', '12%');
                        $("#angerMeter").attr('cx', '34%');
                        $("#angerMeter").attr('cy', '79%');
                        $("#guiltMeter").attr('cx', '15%');
                        $("#guiltMeter").attr('cy', '55%');
                        $("#discontentMeter").attr('cx', '22%');
                        $("#discontentMeter").attr('cy', '28%');
                        $("#envyMeter").attr('cx', '50%');
                        $("#envyMeter").attr('cy', '15%');
                        $("#sadMeter").attr('cx', '78%');
                        $("#sadMeter").attr('cy', '28%');
                        $("#anxietyMeter").attr('cx', '85%');
                        $("#anxietyMeter").attr('cy', '55%');
                        $("#lonelinessMeter").attr('cx', '68%');
                        $("#lonelinessMeter").attr('cy', '79%');
                        $(".angerMeter").attr('x', '34%');
                        $(".angerMeter").attr('y', '79%');
                        $(".guiltMeter").attr('x', '15%');
                        $(".guiltMeter").attr('y', '55%');
                        $(".discontentMeter").attr('x', '22%');
                        $(".discontentMeter").attr('y', '28%');
                        $(".envyMeter").attr('x', '50%');
                        $(".envyMeter").attr('y', '15%');
                        $(".sadMeter").attr('x', '78%');
                        $(".sadMeter").attr('y', '28%');
                        $(".anxietyMeter").attr('x', '85%');
                        $(".anxietyMeter").attr('y', '55%');
                        $(".lonelinessMeter").attr('x', '68%');
                        $(".lonelinessMeter").attr('y', '79%');
                    }
                    if (tit == "sadMeter") {
                        $("#sadMeter").attr('stroke-opacity', '1');
                        $("#sadMeter").attr('r', '12%');
                        $("#angerMeter").attr('cx', '68%');
                        $("#angerMeter").attr('cy', '79%');
                        $("#guiltMeter").attr('cx', '34%');
                        $("#guiltMeter").attr('cy', '79%');
                        $("#discontentMeter").attr('cx', '15%');
                        $("#discontentMeter").attr('cy', '55%');
                        $("#envyMeter").attr('cx', '22%');
                        $("#envyMeter").attr('cy', '28%');
                        $("#sadMeter").attr('cx', '50%');
                        $("#sadMeter").attr('cy', '15%');
                        $("#anxietyMeter").attr('cx', '78%');
                        $("#anxietyMeter").attr('cy', '28%');
                        $("#lonelinessMeter").attr('cx', '85%');
                        $("#lonelinessMeter").attr('cy', '55%');
                        $(".angerMeter").attr('x', '68%');
                        $(".angerMeter").attr('y', '79%');
                        $(".guiltMeter").attr('x', '34%');
                        $(".guiltMeter").attr('y', '79%');
                        $(".discontentMeter").attr('x', '15%');
                        $(".discontentMeter").attr('y', '55%');
                        $(".envyMeter").attr('x', '22%');
                        $(".envyMeter").attr('y', '28%');
                        $(".sadMeter").attr('x', '50%');
                        $(".sadMeter").attr('y', '15%');
                        $(".anxietyMeter").attr('x', '78%');
                        $(".anxietyMeter").attr('y', '28%');
                        $(".lonelinessMeter").attr('x', '85%');
                        $(".lonelinessMeter").attr('y', '55%');
                    }
                    if (tit == "anxietyMeter") {
                        $("#anxietyMeter").attr('stroke-opacity', '1');
                        $("#anxietyMeter").attr('r', '12%');
                        $("#angerMeter").attr('cx', '85%');
                        $("#angerMeter").attr('cy', '55%');
                        $("#guiltMeter").attr('cx', '68%');
                        $("#guiltMeter").attr('cy', '79%');
                        $("#discontentMeter").attr('cx', '34%');
                        $("#discontentMeter").attr('cy', '79%');
                        $("#envyMeter").attr('cx', '15%');
                        $("#envyMeter").attr('cy', '55%');
                        $("#sadMeter").attr('cx', '22%');
                        $("#sadMeter").attr('cy', '28%');
                        $("#anxietyMeter").attr('cx', '50%');
                        $("#anxietyMeter").attr('cy', '15%');
                        $("#lonelinessMeter").attr('cx', '78%');
                        $("#lonelinessMeter").attr('cy', '28%');
                        $(".angerMeter").attr('x', '85%');
                        $(".angerMeter").attr('y', '55%');
                        $(".guiltMeter").attr('x', '68%');
                        $(".guiltMeter").attr('y', '79%');
                        $(".discontentMeter").attr('x', '34%');
                        $(".discontentMeter").attr('y', '79%');
                        $(".envyMeter").attr('x', '15%');
                        $(".envyMeter").attr('y', '55%');
                        $(".sadMeter").attr('x', '22%');
                        $(".sadMeter").attr('y', '28%');
                        $(".anxietyMeter").attr('x', '50%');
                        $(".anxietyMeter").attr('y', '15%');
                        $(".lonelinessMeter").attr('x', '78%');
                        $(".lonelinessMeter").attr('y', '28%');
                    }
                    if (tit == "lonelinessMeter") {
                        $("#lonelinessMeter").attr('stroke-opacity', '1');
                        $("#lonelinessMeter").attr('r', '12%');
                        $("#angerMeter").attr('cx', '78%');
                        $("#angerMeter").attr('cy', '28%');
                        $("#guiltMeter").attr('cx', '85%');
                        $("#guiltMeter").attr('cy', '55%');
                        $("#discontentMeter").attr('cx', '68%');
                        $("#discontentMeter").attr('cy', '79%');
                        $("#envyMeter").attr('cx', '34%');
                        $("#envyMeter").attr('cy', '79%');
                        $("#sadMeter").attr('cx', '15%');
                        $("#sadMeter").attr('cy', '55%');
                        $("#anxietyMeter").attr('cx', '22%');
                        $("#anxietyMeter").attr('cy', '28%');
                        $("#lonelinessMeter").attr('cx', '50%');
                        $("#lonelinessMeter").attr('cy', '15%');
                        $(".angerMeter").attr('x', '78%');
                        $(".angerMeter").attr('y', '28%');
                        $(".guiltMeter").attr('x', '85%');
                        $(".guiltMeter").attr('y', '55%');
                        $(".discontentMeter").attr('x', '68%');
                        $(".discontentMeter").attr('y', '79%');
                        $(".envyMeter").attr('x', '34%');
                        $(".envyMeter").attr('y', '79%');
                        $(".sadMeter").attr('x', '15%');
                        $(".sadMeter").attr('y', '55%');
                        $(".anxietyMeter").attr('x', '22%');
                        $(".anxietyMeter").attr('y', '28%');
                        $(".lonelinessMeter").attr('x', '50%');
                        $(".lonelinessMeter").attr('y', '15%');
                    }
                });
                $('.closeBtn').click(function () {
                    $(this).parent().css('display', 'none');
                });
                $('.closePopup').click(function () {
                    $(this).parent().css('display', 'none');
                });
                $('#sleepHours').change(function () {
                    $(".swp").css('display', 'none');
                    if (this.value == "1") {
                        $(".sleepWarnPopup").css('display', 'block');
                        $("#swp1").css('display', 'block');
                    }
                    if (this.value == "2") {
                        $(".sleepWarnPopup").css('display', 'block');
                        $("#swp2").css('display', 'block');
                    }
                    if (this.value == "3") {
                        $(".sleepWarnPopup").css('display', 'block');
                        $("#swp3").css('display', 'block');
                    }
                });
                /***************************************************************************************/
                (function ($) {
                    $.fn.clickToggle = function (func1, func2) {
                        var funcs = [func1, func2];
                        this.data('toggleclicked', 0);
                        this.click(function () {
                            var data = $(this).data();
                            var tc = data.toggleclicked;
                            $.proxy(funcs[tc], this)();
                            data.toggleclicked = (tc + 1) % 2;
                        });
                        return this;
                    };
                }($));
                /***************************************************************************************/
                $('.readToggle').clickToggle(function () {
                    $(this).next(".readMatter").css("display", "block");
                    $(this).children('.readIcon').css("opacity", "0");
                    $(this).children('i').css("opacity", "1");
                }, function () {
                    $(this).next(".readMatter").css("display", "none");
                    $(this).children('.readIcon').css("opacity", "1");
                    $(this).children('i').css("opacity", "0");
                });
                /***************************************************************************************/
                $(document).mouseup(function (e) {
                    var container = $(".summaryPopup");
                    // if the target of the click isn't the container nor a descendant of the container
                    if (!container.is(e.target) && container.has(e.target).length === 0) {
                        container.hide();
                    }
                    var container = $(".abtSummaryPopup");
                    // if the target of the click isn't the container nor a descendant of the container
                    if (!container.is(e.target) && container.has(e.target).length === 0) {
                        container.hide();
                    }
                });
            });
        });
    }
    ngOnInit() { }
};
ObservePage = tslib_1.__decorate([
    Component({
        selector: 'app-observe',
        templateUrl: './observe.page.html',
        styleUrls: ['./observe.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Platform,
        Router])
], ObservePage);
export { ObservePage };
//# sourceMappingURL=observe.page.js.map