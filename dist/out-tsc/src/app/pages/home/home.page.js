import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
let HomePage = class HomePage {
    constructor(platform, router, alertController, storage) {
        this.platform = platform;
        this.router = router;
        this.alertController = alertController;
        this.storage = storage;
        this.platform.ready().then(() => {
            //alert("Radhaswami")
            jQuery(document).ready(function () {
                jQuery(".qOverlay,.hideLogo").click(function () {
                    jQuery(".logoContainer").hide();
                });
                jQuery('.q1').click(function () {
                    if (jQuery(this).is(".q1.shrink")) {
                        jQuery(this).addClass('shrink');
                        jQuery(this).addClass('active');
                        jQuery(this).siblings().removeClass('active');
                        var k = jQuery(this).attr('title');
                        k = k + 'Kids';
                        jQuery("." + k).addClass('show');
                        jQuery("." + k).css('display', 'block');
                        jQuery("." + k + 'List li').css('display', 'block');
                        jQuery("." + k + 'List li').css('width', '0');
                        jQuery(".q1KidsList li:first-child").delay(0).animate({ width: '95%' });
                        jQuery(".q1KidsList li:nth-child(2)").delay(500).animate({ width: '95%' });
                        jQuery(".q1KidsList li:nth-child(3)").delay(700).animate({ width: '95%' });
                        jQuery(".q1KidsList li:nth-child(4)").delay(900).animate({ width: '95%' });
                        jQuery(".q1KidsList li:nth-child(5)").delay(1100).animate({ width: '95%' });
                        jQuery(".q1KidsList li:nth-child(6)").delay(1300).animate({ width: '95%' });
                        jQuery(".q1KidsList li:nth-child(7)").delay(1500).animate({ width: '95%' });
                        jQuery(".q1KidsList li:nth-child(8)").delay(1700).animate({ width: '95%' });
                        jQuery(".q2Kids").css('display', 'none');
                        jQuery(".q3Kids").css('display', 'none');
                        jQuery(".q4Kids").css('display', 'none');
                        jQuery(".q5Kids").css('display', 'none');
                        jQuery(".q6Kids").css('display', 'none');
                        jQuery(".q7Kids").css('display', 'none');
                        jQuery(".q2Kids").removeClass('show');
                        jQuery(".q3Kids").removeClass('show');
                        jQuery(".q4Kids").removeClass('show');
                        jQuery(".q5Kids").removeClass('show');
                        jQuery(".q6Kids").removeClass('show');
                        jQuery(".q7Kids").removeClass('show');
                        jQuery("span.qTitle").css('display', 'none');
                        jQuery(".q5.shrink").css('display', 'block');
                        jQuery(".q6.shrink").css('display', 'block');
                        jQuery(".q7.shrink").css('display', 'block');
                        jQuery(".mcButtons").css('display', 'none');
                        jQuery(".summaryPopup").css('display', 'none');
                    }
                    else if (jQuery(this).is(".q1")) {
                        jQuery(this).toggleClass('shrink');
                        jQuery(this).addClass('active');
                        jQuery(this).siblings().removeClass('active');
                        jQuery(this).siblings().toggleClass('shrink');
                        var k = jQuery(this).attr('title');
                        k = k + 'Kids';
                        jQuery("." + k).toggleClass('show');
                        //jQuery(".mcGraphics").toggleClass('flexChange');
                        jQuery(".q1KidsList li:first-child").delay(0).animate({ width: '95%' });
                        jQuery(".q1KidsList li:nth-child(2)").delay(200).animate({ width: '95%' });
                        jQuery(".q1KidsList li:nth-child(3)").delay(400).animate({ width: '95%' });
                        jQuery(".q1KidsList li:nth-child(4)").delay(600).animate({ width: '95%' });
                        jQuery(".q1KidsList li:nth-child(5)").delay(800).animate({ width: '95%' });
                        jQuery(".q1KidsList li:nth-child(6)").delay(1000).animate({ width: '95%' });
                        jQuery(".q1KidsList li:nth-child(7)").delay(1020).animate({ width: '95%' });
                        jQuery(".q1KidsList li:nth-child(8)").delay(1040).animate({ width: '95%' });
                        jQuery("span.qTitle").css('display', 'none');
                        jQuery(".q5.shrink").css('display', 'block');
                        jQuery(".q6.shrink").css('display', 'block');
                        jQuery(".q7.shrink").css('display', 'block');
                        jQuery(".mcButtons").css('display', 'none');
                        jQuery(".summaryPopup").css('display', 'none');
                    }
                });
                jQuery('.q2').click(function () {
                    if (jQuery(this).is(".q2.shrink")) {
                        jQuery(this).addClass('shrink');
                        jQuery(this).addClass('active');
                        jQuery(this).siblings().removeClass('active');
                        var k = jQuery(this).attr('title');
                        k = k + 'Kids';
                        jQuery("." + k).addClass('show');
                        jQuery("." + k).css('display', 'block');
                        jQuery("." + k + 'List li').css('display', 'block');
                        jQuery("." + k + 'List li').css('width', '0');
                        jQuery(".q2KidsList li:first-child").delay(300).animate({ width: '95%' });
                        jQuery(".q2KidsList li:nth-child(2)").delay(500).animate({ width: '95%' });
                        jQuery(".q2KidsList li:nth-child(3)").delay(700).animate({ width: '95%' });
                        jQuery(".q2KidsList li:nth-child(4)").delay(900).animate({ width: '95%' });
                        jQuery(".q2KidsList li:nth-child(5)").delay(900).animate({ width: '95%' });
                        jQuery(".q2KidsList li:nth-child(6)").delay(1300).animate({ width: '95%' });
                        jQuery(".q2KidsList li:nth-child(7)").delay(1500).animate({ width: '95%' });
                        jQuery(".q2KidsList li:nth-child(8)").delay(1700).animate({ width: '95%' });
                        jQuery(".q1Kids").css('display', 'none');
                        jQuery(".q3Kids").css('display', 'none');
                        jQuery(".q4Kids").css('display', 'none');
                        jQuery(".q5Kids").css('display', 'none');
                        jQuery(".q6Kids").css('display', 'none');
                        jQuery(".q1Kids").removeClass('show');
                        jQuery(".q3Kids").removeClass('show');
                        jQuery(".q4Kids").removeClass('show');
                        jQuery(".q5Kids").removeClass('show');
                        jQuery(".q6Kids").removeClass('show');
                        jQuery("span.qTitle").css('display', 'none');
                        jQuery(".q5.shrink").css('display', 'block');
                        jQuery(".q6.shrink").css('display', 'block');
                        jQuery(".q7.shrink").css('display', 'block');
                        jQuery(".mcButtons").css('display', 'none');
                        jQuery(".summaryPopup").css('display', 'none');
                    }
                    else if (jQuery(this).is(".q2")) {
                        jQuery(this).toggleClass('shrink');
                        jQuery(this).addClass('active');
                        jQuery(this).siblings().removeClass('active');
                        jQuery(this).siblings().toggleClass('shrink');
                        var k = jQuery(this).attr('title');
                        k = k + 'Kids';
                        jQuery("." + k).toggleClass('show');
                        //jQuery(".mcGraphics").toggleClass('flexChange');
                        jQuery(".q2KidsList li:first-child").delay(0).animate({ width: '95%' });
                        jQuery(".q2KidsList li:nth-child(2)").delay(200).animate({ width: '95%' });
                        jQuery(".q2KidsList li:nth-child(3)").delay(400).animate({ width: '95%' });
                        jQuery(".q2KidsList li:nth-child(4)").delay(600).animate({ width: '95%' });
                        jQuery(".q2KidsList li:nth-child(5)").delay(800).animate({ width: '95%' });
                        jQuery(".q2KidsList li:nth-child(6)").delay(1300).animate({ width: '95%' });
                        jQuery(".q2KidsList li:nth-child(7)").delay(1500).animate({ width: '95%' });
                        jQuery(".q2KidsList li:nth-child(8)").delay(1700).animate({ width: '95%' });
                        jQuery("span.qTitle").css('display', 'none');
                        jQuery(".q5.shrink").css('display', 'block');
                        jQuery(".q6.shrink").css('display', 'block');
                        jQuery(".q7.shrink").css('display', 'block');
                        jQuery(".mcButtons").css('display', 'none');
                        jQuery(".summaryPopup").css('display', 'none');
                    }
                });
                jQuery('.q3').click(function () {
                    if (jQuery(this).is(".q3.shrink")) {
                        jQuery(this).addClass('shrink');
                        jQuery(this).addClass('active');
                        jQuery(this).siblings().removeClass('active');
                        //jQuery(".mcGraphics").addClass('flexChange');
                        var k = jQuery(this).attr('title');
                        k = k + 'Kids';
                        jQuery("." + k).addClass('show');
                        jQuery("." + k).css('display', 'block');
                        jQuery("." + k + 'List li').css('display', 'block');
                        jQuery("." + k + 'List li').css('width', '0');
                        jQuery(".q3KidsList li:first-child").delay(0).animate({ width: '95%' });
                        jQuery(".q3KidsList li:nth-child(2)").delay(500).animate({ width: '95%' });
                        jQuery(".q3KidsList li:nth-child(3)").delay(700).animate({ width: '95%' });
                        jQuery(".q3KidsList li:nth-child(4)").delay(900).animate({ width: '95%' });
                        jQuery(".q3KidsList li:nth-child(5)").delay(1100).animate({ width: '95%' });
                        jQuery(".q3KidsList li:nth-child(6)").delay(1300).animate({ width: '95%' });
                        jQuery(".q3KidsList li:nth-child(7)").delay(1500).animate({ width: '95%' });
                        jQuery(".q3KidsList li:nth-child(8)").delay(1700).animate({ width: '95%' });
                        jQuery(".q1Kids").css('display', 'none');
                        jQuery(".q2Kids").css('display', 'none');
                        jQuery(".q4Kids").css('display', 'none');
                        jQuery(".q5Kids").css('display', 'none');
                        jQuery(".q6Kids").css('display', 'none');
                        jQuery(".q1Kids").removeClass('show');
                        jQuery(".q2Kids").removeClass('show');
                        jQuery(".q4Kids").removeClass('show');
                        jQuery(".q5Kids").removeClass('show');
                        jQuery(".q6Kids").removeClass('show');
                        jQuery("span.qTitle").css('display', 'none');
                        jQuery(".q5.shrink").css('display', 'block');
                        jQuery(".q6.shrink").css('display', 'block');
                        jQuery(".q7.shrink").css('display', 'block');
                        jQuery(".mcButtons").css('display', 'none');
                        jQuery(".summaryPopup").css('display', 'none');
                    }
                    else if (jQuery(this).is(".q3")) {
                        jQuery(this).toggleClass('shrink');
                        jQuery(this).addClass('active');
                        jQuery(this).siblings().removeClass('active');
                        jQuery(this).siblings().toggleClass('shrink');
                        var k = jQuery(this).attr('title');
                        k = k + 'Kids';
                        jQuery("." + k).toggleClass('show');
                        jQuery(".mcGraphics").toggleClass('flexChange');
                        jQuery(".q3KidsList li:first-child").delay(0).animate({ width: '95%' });
                        jQuery(".q3KidsList li:nth-child(2)").delay(200).animate({ width: '95%' });
                        jQuery(".q3KidsList li:nth-child(3)").delay(400).animate({ width: '95%' });
                        jQuery(".q3KidsList li:nth-child(4)").delay(600).animate({ width: '95%' });
                        jQuery(".q3KidsList li:nth-child(5)").delay(800).animate({ width: '95%' });
                        jQuery(".q3KidsList li:nth-child(6)").delay(1000).animate({ width: '95%' });
                        jQuery(".q3KidsList li:nth-child(7)").delay(1020).animate({ width: '95%' });
                        jQuery(".q3KidsList li:nth-child(8)").delay(1040).animate({ width: '95%' });
                        jQuery("span.qTitle").css('display', 'none');
                        jQuery(".q5.shrink").css('display', 'block');
                        jQuery(".q6.shrink").css('display', 'block');
                        jQuery(".q7.shrink").css('display', 'block');
                        jQuery(".mcButtons").css('display', 'none');
                        jQuery(".summaryPopup").css('display', 'none');
                    }
                });
                jQuery('.q4').click(function () {
                    if (jQuery(this).is(".q4.shrink")) {
                        jQuery(this).addClass('shrink');
                        jQuery(this).addClass('active');
                        jQuery(this).siblings().removeClass('active');
                        //  jQuery(".mcGraphics").addClass('flexChange');
                        var k = jQuery(this).attr('title');
                        k = k + 'Kids';
                        jQuery("." + k).addClass('show');
                        jQuery("." + k).css('display', 'block');
                        jQuery("." + k + 'List li').css('display', 'block');
                        jQuery("." + k + 'List li').css('width', '0');
                        jQuery(".q4KidsList li:first-child").delay(0).animate({ width: '95%' });
                        jQuery(".q4KidsList li:nth-child(2)").delay(500).animate({ width: '95%' });
                        jQuery(".q4KidsList li:nth-child(3)").delay(700).animate({ width: '95%' });
                        jQuery(".q4KidsList li:nth-child(4)").delay(900).animate({ width: '95%' });
                        jQuery(".q4KidsList li:nth-child(5)").delay(1100).animate({ width: '95%' });
                        jQuery(".q4KidsList li:nth-child(6)").delay(1300).animate({ width: '95%' });
                        jQuery(".q4KidsList li:nth-child(7)").delay(1500).animate({ width: '95%' });
                        jQuery(".q4KidsList li:nth-child(8)").delay(1700).animate({ width: '95%' });
                        jQuery(".q1Kids").css('display', 'none');
                        jQuery(".q2Kids").css('display', 'none');
                        jQuery(".q3Kids").css('display', 'none');
                        jQuery(".q5Kids").css('display', 'none');
                        jQuery(".q6Kids").css('display', 'none');
                        jQuery(".q1Kids").removeClass('show');
                        jQuery(".q2Kids").removeClass('show');
                        jQuery(".q3Kids").removeClass('show');
                        jQuery(".q5Kids").removeClass('show');
                        jQuery(".q6Kids").removeClass('show');
                        jQuery("span.qTitle").css('display', 'none');
                        jQuery(".q5.shrink").css('display', 'block');
                        jQuery(".q6.shrink").css('display', 'block');
                        jQuery(".q7.shrink").css('display', 'block');
                        jQuery(".mcButtons").css('display', 'none');
                        jQuery(".summaryPopup").css('display', 'none');
                    }
                    else if (jQuery(this).is(".q4")) {
                        jQuery(this).toggleClass('shrink');
                        jQuery(this).addClass('active');
                        jQuery(this).siblings().removeClass('active');
                        jQuery(this).siblings().toggleClass('shrink');
                        var k = jQuery(this).attr('title');
                        k = k + 'Kids';
                        jQuery("." + k).toggleClass('show');
                        jQuery(".mcGraphics").toggleClass('flexChange');
                        jQuery(".q4KidsList li:first-child").delay(0).animate({ width: '95%' });
                        jQuery(".q4KidsList li:nth-child(2)").delay(200).animate({ width: '95%' });
                        jQuery(".q4KidsList li:nth-child(3)").delay(400).animate({ width: '95%' });
                        jQuery(".q4KidsList li:nth-child(4)").delay(600).animate({ width: '95%' });
                        jQuery(".q4KidsList li:nth-child(5)").delay(800).animate({ width: '95%' });
                        jQuery(".q4KidsList li:nth-child(6)").delay(1000).animate({ width: '95%' });
                        jQuery(".q4KidsList li:nth-child(7)").delay(1020).animate({ width: '95%' });
                        jQuery(".q4KidsList li:nth-child(8)").delay(1040).animate({ width: '95%' });
                        jQuery("span.qTitle").css('display', 'none');
                        jQuery(".q5.shrink").css('display', 'block');
                        jQuery(".q6.shrink").css('display', 'block');
                        jQuery(".q7.shrink").css('display', 'block');
                        jQuery(".mcButtons").css('display', 'none');
                        jQuery(".summaryPopup").css('display', 'none');
                    }
                });
                jQuery('.q5').click(function () {
                    if (jQuery(this).is(".q5.shrink")) {
                        jQuery(this).addClass('shrink');
                        jQuery(this).addClass('active');
                        jQuery(this).siblings().removeClass('active');
                        //  jQuery(".mcGraphics").addClass('flexChange');
                        var k = jQuery(this).attr('title');
                        k = k + 'Kids';
                        jQuery("." + k).addClass('show');
                        jQuery("." + k).css('display', 'block');
                        jQuery("." + k + 'List li').css('display', 'block');
                        jQuery("." + k + 'List li').css('width', '0');
                        jQuery(".q5KidsList li:first-child").delay(0).animate({ width: '95%' });
                        jQuery(".q5KidsList li:nth-child(2)").delay(500).animate({ width: '95%' });
                        jQuery(".q5KidsList li:nth-child(3)").delay(700).animate({ width: '95%' });
                        jQuery(".q5KidsList li:nth-child(4)").delay(900).animate({ width: '95%' });
                        jQuery(".q5KidsList li:nth-child(5)").delay(1100).animate({ width: '95%' });
                        jQuery(".q5KidsList li:nth-child(6)").delay(1300).animate({ width: '95%' });
                        jQuery(".q5KidsList li:nth-child(7)").delay(1500).animate({ width: '95%' });
                        jQuery(".q1Kids").css('display', 'none');
                        jQuery(".q2Kids").css('display', 'none');
                        jQuery(".q3Kids").css('display', 'none');
                        jQuery(".q4Kids").css('display', 'none');
                        jQuery(".q6Kids").css('display', 'none');
                        jQuery(".q7Kids").css('display', 'none');
                        jQuery(".q1Kids").removeClass('show');
                        jQuery(".q2Kids").removeClass('show');
                        jQuery(".q3Kids").removeClass('show');
                        jQuery(".q4Kids").removeClass('show');
                        jQuery(".q6Kids").removeClass('show');
                        jQuery(".q7Kids").removeClass('show');
                        jQuery("span.qTitle").css('display', 'none');
                        jQuery(".q5.shrink").css('display', 'block');
                        jQuery(".q6.shrink").css('display', 'block');
                        jQuery(".q7.shrink").css('display', 'block');
                        jQuery(".mcButtons").css('display', 'none');
                        jQuery(".summaryPopup").css('display', 'none');
                    }
                    else if (jQuery(this).is(".q5")) {
                        jQuery(this).toggleClass('shrink');
                        jQuery(this).addClass('active');
                        jQuery(this).siblings().removeClass('active');
                        jQuery(this).siblings().toggleClass('shrink');
                        var k = jQuery(this).attr('title');
                        k = k + 'Kids';
                        jQuery("." + k).toggleClass('show');
                        jQuery(".q5KidsList li:first-child").delay(300).animate({ width: '95%' });
                        jQuery(".q5KidsList li:nth-child(2)").delay(500).animate({ width: '95%' });
                        jQuery(".q5KidsList li:nth-child(3)").delay(700).animate({ width: '95%' });
                        jQuery(".q5KidsList li:nth-child(4)").delay(900).animate({ width: '95%' });
                        jQuery(".q5KidsList li:nth-child(5)").delay(1100).animate({ width: '95%' });
                        jQuery(".q5KidsList li:nth-child(6)").delay(1300).animate({ width: '95%' });
                        jQuery(".q5KidsList li:nth-child(7)").delay(1500).animate({ width: '95%' });
                        jQuery("span.qTitle").css('display', 'none');
                        jQuery(".q5.shrink").css('display', 'block');
                        jQuery(".q6.shrink").css('display', 'block');
                        jQuery(".q7.shrink").css('display', 'block');
                        jQuery(".mcButtons").css('display', 'none');
                        jQuery(".summaryPopup").css('display', 'none');
                    }
                });
                jQuery('.q6').click(function () {
                    if (jQuery(this).is(".q6.shrink")) {
                        jQuery(this).addClass('shrink');
                        jQuery(this).addClass('active');
                        jQuery(this).siblings().removeClass('active');
                        //  jQuery(".mcGraphics").addClass('flexChange');
                        var k = jQuery(this).attr('title');
                        k = k + 'Kids';
                        jQuery("." + k).addClass('show');
                        jQuery("." + k).css('display', 'block');
                        jQuery("." + k + 'List li').css('display', 'block');
                        jQuery("." + k + 'List li').css('width', '0');
                        jQuery(".q6KidsList li:first-child").delay(0).animate({ width: '95%' });
                        jQuery(".q6KidsList li:nth-child(2)").delay(500).animate({ width: '95%' });
                        jQuery(".q6KidsList li:nth-child(3)").delay(700).animate({ width: '95%' });
                        jQuery(".q6KidsList li:nth-child(4)").delay(900).animate({ width: '95%' });
                        jQuery(".q6KidsList li:nth-child(5)").delay(1100).animate({ width: '95%' });
                        jQuery(".q6KidsList li:nth-child(6)").delay(1300).animate({ width: '95%' });
                        jQuery(".q6KidsList li:nth-child(7)").delay(1500).animate({ width: '95%' });
                        jQuery(".q6KidsList li:nth-child(8)").delay(1700).animate({ width: '95%' });
                        jQuery(".q6KidsList li:nth-child(9)").delay(1900).animate({ width: '95%' });
                        jQuery(".q1Kids").css('display', 'none');
                        jQuery(".q2Kids").css('display', 'none');
                        jQuery(".q3Kids").css('display', 'none');
                        jQuery(".q4Kids").css('display', 'none');
                        jQuery(".q5Kids").css('display', 'none');
                        jQuery(".q7Kids").css('display', 'none');
                        jQuery(".q1Kids").removeClass('show');
                        jQuery(".q2Kids").removeClass('show');
                        jQuery(".q3Kids").removeClass('show');
                        jQuery(".q4Kids").removeClass('show');
                        jQuery(".q5Kids").removeClass('show');
                        jQuery(".q7Kids").removeClass('show');
                        jQuery("span.qTitle").css('display', 'none');
                        jQuery(".q5.shrink").css('display', 'block');
                        jQuery(".q6.shrink").css('display', 'block');
                        jQuery(".q7.shrink").css('display', 'block');
                        jQuery(".mcButtons").css('display', 'none');
                        jQuery(".summaryPopup").css('display', 'none');
                    }
                    else if (jQuery(this).is(".q6")) {
                        jQuery(this).toggleClass('shrink');
                        jQuery(this).addClass('active');
                        jQuery(this).siblings().removeClass('active');
                        jQuery(this).siblings().toggleClass('shrink');
                        var k = jQuery(this).attr('title');
                        k = k + 'Kids';
                        jQuery("." + k).toggleClass('show');
                        jQuery(".q6KidsList li:first-child").delay(0).animate({ width: '95%' });
                        jQuery(".q6KidsList li:nth-child(2)").delay(500).animate({ width: '95%' });
                        jQuery(".q6KidsList li:nth-child(3)").delay(700).animate({ width: '95%' });
                        jQuery(".q6KidsList li:nth-child(4)").delay(900).animate({ width: '95%' });
                        jQuery(".q6KidsList li:nth-child(5)").delay(1100).animate({ width: '95%' });
                        jQuery(".q6KidsList li:nth-child(6)").delay(1300).animate({ width: '95%' });
                        jQuery(".q6KidsList li:nth-child(7)").delay(1500).animate({ width: '95%' });
                        jQuery(".q6KidsList li:nth-child(8)").delay(1700).animate({ width: '95%' });
                        jQuery(".q6KidsList li:nth-child(9)").delay(1900).animate({ width: '95%' });
                        jQuery("span.qTitle").css('display', 'none');
                        jQuery(".q5.shrink").css('display', 'block');
                        jQuery(".q6.shrink").css('display', 'block');
                        jQuery(".q7.shrink").css('display', 'block');
                        jQuery(".mcButtons").css('display', 'none');
                        jQuery(".summaryPopup").css('display', 'none');
                    }
                });
                jQuery('.q7').click(function () {
                    if (jQuery(this).is(".q7.shrink")) {
                        jQuery(this).addClass('shrink');
                        jQuery(this).addClass('active');
                        jQuery(this).siblings().removeClass('active');
                        //  jQuery(".mcGraphics").addClass('flexChange');
                        var k = jQuery(this).attr('title');
                        k = k + 'Kids';
                        jQuery("." + k).addClass('show');
                        jQuery("." + k).css('display', 'block');
                        jQuery("." + k + 'List li').css('display', 'block');
                        jQuery("." + k + 'List li').css('width', '0');
                        jQuery(".q7KidsList li:first-child").delay(300).animate({ width: '95%' });
                        jQuery(".q7KidsList li:nth-child(2)").delay(500).animate({ width: '95%' });
                        jQuery(".q7KidsList li:nth-child(3)").delay(700).animate({ width: '95%' });
                        jQuery(".q7KidsList li:nth-child(4)").delay(900).animate({ width: '95%' });
                        jQuery(".q1Kids").css('display', 'none');
                        jQuery(".q2Kids").css('display', 'none');
                        jQuery(".q3Kids").css('display', 'none');
                        jQuery(".q4Kids").css('display', 'none');
                        jQuery(".q5Kids").css('display', 'none');
                        jQuery(".q6Kids").css('display', 'none');
                        jQuery(".q1Kids").removeClass('show');
                        jQuery(".q2Kids").removeClass('show');
                        jQuery(".q3Kids").removeClass('show');
                        jQuery(".q4Kids").removeClass('show');
                        jQuery(".q5Kids").removeClass('show');
                        jQuery(".q6Kids").removeClass('show');
                        jQuery("span.qTitle").css('display', 'none');
                        jQuery(".q5.shrink").css('display', 'block');
                        jQuery(".q6.shrink").css('display', 'block');
                        jQuery(".q7.shrink").css('display', 'block');
                        jQuery(".mcButtons").css('display', 'none');
                        jQuery(".summaryPopup").css('display', 'none');
                    }
                    else if (jQuery(this).is(".q6")) {
                        jQuery(this).toggleClass('shrink');
                        jQuery(this).addClass('active');
                        jQuery(this).siblings().removeClass('active');
                        jQuery(this).siblings().toggleClass('shrink');
                        var k = jQuery(this).attr('title');
                        k = k + 'Kids';
                        jQuery("." + k).toggleClass('show');
                        jQuery(".q7KidsList li:first-child").delay(300).animate({ width: '95%' });
                        jQuery(".q7KidsList li:nth-child(2)").delay(500).animate({ width: '95%' });
                        jQuery(".q7KidsList li:nth-child(3)").delay(700).animate({ width: '95%' });
                        jQuery(".q7KidsList li:nth-child(4)").delay(900).animate({ width: '95%' });
                        jQuery("span.qTitle").css('display', 'none');
                        jQuery(".q5.shrink").css('display', 'block');
                        jQuery(".q6.shrink").css('display', 'block');
                        jQuery(".q7.shrink").css('display', 'block');
                        jQuery(".mcButtons").css('display', 'none');
                        jQuery(".summaryPopup").css('display', 'none');
                    }
                });
                jQuery('.copingBtn').click(function () {
                    jQuery(".q5").addClass('active');
                    jQuery(".mcGraphics").children().addClass('shrink');
                    jQuery(".q5Kids").addClass('show');
                    jQuery(".q5Kids").css('display', 'block');
                    jQuery(".q1Kids").css('display', 'none');
                    jQuery(".q2Kids").css('display', 'none');
                    jQuery(".q3Kids").css('display', 'none');
                    jQuery(".q4Kids").css('display', 'none');
                    jQuery(".q6Kids").css('display', 'none');
                    jQuery(".q5KidsList li:first-child").delay(300).animate({ width: '95%' });
                    jQuery(".q5KidsList li:nth-child(2)").delay(500).animate({ width: '95%' });
                    jQuery(".q5KidsList li:nth-child(3)").delay(700).animate({ width: '95%' });
                    jQuery(".q5KidsList li:nth-child(4)").delay(900).animate({ width: '95%' });
                    jQuery(".q5KidsList li:nth-child(5)").delay(1100).animate({ width: '95%' });
                    jQuery(".q5KidsList li:nth-child(6)").delay(1300).animate({ width: '95%' });
                    jQuery("span.qTitle").css('display', 'none');
                    jQuery(".q5.shrink").css('display', 'block');
                    jQuery(".q6.shrink").css('display', 'block');
                    jQuery(".q7.shrink").css('display', 'block');
                    jQuery(".mcButtons").css('display', 'none');
                });
                jQuery('.communityBtn').click(function () {
                    jQuery(".q6").addClass('active');
                    jQuery(".mcGraphics").children().addClass('shrink');
                    jQuery(".q6Kids").addClass('show');
                    jQuery(".q6Kids").css('display', 'block');
                    jQuery(".q1Kids").css('display', 'none');
                    jQuery(".q2Kids").css('display', 'none');
                    jQuery(".q3Kids").css('display', 'none');
                    jQuery(".q4Kids").css('display', 'none');
                    jQuery(".q5Kids").css('display', 'none');
                    jQuery(".q6KidsList li:first-child").delay(300).animate({ width: '95%' });
                    jQuery(".q6KidsList li:nth-child(2)").delay(500).animate({ width: '95%' });
                    jQuery(".q6KidsList li:nth-child(3)").delay(700).animate({ width: '95%' });
                    jQuery(".q6KidsList li:nth-child(4)").delay(900).animate({ width: '95%' });
                    jQuery(".q6KidsList li:nth-child(5)").delay(1100).animate({ width: '95%' });
                    jQuery(".q6KidsList li:nth-child(6)").delay(1300).animate({ width: '95%' });
                    jQuery(".q6KidsList li:nth-child(7)").delay(1500).animate({ width: '95%' });
                    jQuery(".q6KidsList li:nth-child(8)").delay(1700).animate({ width: '95%' });
                    jQuery("span.qTitle").css('display', 'none');
                    jQuery(".q5.shrink").css('display', 'block');
                    jQuery(".q6.shrink").css('display', 'block');
                    jQuery(".q7.shrink").css('display', 'block');
                    jQuery(".mcButtons").css('display', 'none');
                });
                jQuery('.resourcesBtn').click(function () {
                    jQuery(".q7").addClass('active');
                    jQuery(".mcGraphics").children().addClass('shrink');
                    jQuery(".q7Kids").addClass('show');
                    jQuery(".q7Kids").css('display', 'block');
                    jQuery(".q1Kids").css('display', 'none');
                    jQuery(".q2Kids").css('display', 'none');
                    jQuery(".q3Kids").css('display', 'none');
                    jQuery(".q4Kids").css('display', 'none');
                    jQuery(".q5Kids").css('display', 'none');
                    jQuery(".q6Kids").css('display', 'none');
                    jQuery(".q7KidsList li:first-child").delay(300).animate({ width: '95%' });
                    jQuery(".q7KidsList li:nth-child(2)").delay(500).animate({ width: '95%' });
                    jQuery(".q7KidsList li:nth-child(3)").delay(700).animate({ width: '95%' });
                    jQuery(".q7KidsList li:nth-child(4)").delay(900).animate({ width: '95%' });
                    jQuery("span.qTitle").css('display', 'none');
                    jQuery(".q5.shrink").css('display', 'block');
                    jQuery(".q6.shrink").css('display', 'block');
                    jQuery(".q7.shrink").css('display', 'block');
                    jQuery(".mcButtons").css('display', 'none');
                });
                jQuery('.notNowBtn').click(function () {
                    jQuery(".popOverlay").css('display', 'none');
                    jQuery(".inCrisisPopup").css('display', 'none');
                });
                jQuery('.mainNavList li').click(function () {
                    jQuery(".mainNav").css('display', 'none');
                    jQuery(".mainNav").delay(100).animate({ left: '-100%' });
                });
                jQuery('.qkidsList li .infoPopup').click(function () {
                    jQuery(this).parent().css('overflow', 'unset');
                    jQuery(this).parent().siblings(".summaryPopup").css('display', 'block');
                });
                jQuery('.infoPopup').click(function () {
                    jQuery(this).parent().css('overflow', 'unset');
                    jQuery(this).siblings(".summaryPopup").css('display', 'block');
                });
                jQuery('.abtPopup').click(function () {
                    jQuery(this).css('overflow', 'unset');
                    jQuery(this).siblings(".abtSummaryPopup").css('display', 'block');
                });
                jQuery('.saLeft').click(function () {
                    jQuery(this).parent().parent().css('display', 'none');
                });
                jQuery('h3.codeStep').click(function () {
                    jQuery(".codeDetail").css('display', 'none');
                    jQuery(this).siblings(".codeDetail").css('display', 'block');
                });
                setTimeout(function () { jQuery("#sa1").show(); }, 6050);
                jQuery('#sa1').click(function () {
                    jQuery(this).css('display', 'none');
                    jQuery("#sa2").css('display', 'none');
                    jQuery("#sa2").css('display', 'block');
                    jQuery("#sa3").css('display', 'block');
                    //setTimeout(function(){jQuery("#sa2").hide();},15050);
                    setTimeout(function () { jQuery("#sa2").css('display', 'none'); }, 15050);
                    //setTimeout(function(){jQuery("#sa1").css('display','block');},15051);
                    var cycle = parseInt(jQuery(".sosCount").html());
                    var cycleVal = cycle + 1;
                    setTimeout(function () { jQuery(".sosCount").html(cycleVal); }, 15000);
                });
                jQuery('#sa3').click(function () {
                    jQuery(this).css('display', 'none');
                    jQuery("#sa1").css('display', 'block');
                });
                jQuery(".sos-tabs li").click(function () {
                    jQuery(".sosCount").html("0");
                    jQuery('#sa2Img').removeAttr('src', '');
                    jQuery("#sa1").css('display', 'none');
                    jQuery("#sa2").css('display', 'none');
                    jQuery("#sa3").css('display', 'block');
                    if (jQuery(this).is("#stop")) {
                        jQuery("#sa1").css('display', 'block');
                        jQuery("#sa2").css('display', 'none');
                        jQuery("#sa3").css('display', 'block');
                        //var attr = 	jQuery('#stop').attr('class'); 
                        //alert(attr);
                        if (jQuery('#stop').attr('class') == 'active') {
                            //alert("1");
                            jQuery('#stop').addClass('againActive');
                            jQuery('#sa2Img').removeAttr('src', '');
                            jQuery('#sa2Img').attr('src', 'images/sos22.gif');
                        }
                        else {
                            //alert("2");
                            jQuery('#stop').removeClass('againActive');
                            jQuery('#sa2Img').removeAttr('src', '');
                            jQuery('#sa2Img').attr('src', 'images/sos33.gif');
                        }
                    }
                    jQuery(this).siblings().removeClass("active");
                    jQuery(this).removeClass("inactive").addClass("active");
                    jQuery(".sosmatr").css("display", "none");
                    var tit = jQuery(this).attr("id");
                    jQuery("#" + tit + "Matr").css("display", "block");
                });
                jQuery(".meter-tabs li").click(function () {
                    jQuery(this).siblings().removeClass("active");
                    jQuery(this).removeClass("inactive").addClass("active");
                    jQuery(".metermatr").css("display", "none");
                    var tit = jQuery(this).attr("id");
                    jQuery("#" + tit + "Matr").css("display", "block");
                });
                jQuery(".slides-holder img").click(function () {
                    jQuery(".meterTabsContent").css("display", "none");
                    var tit = jQuery(this).attr("id");
                    jQuery("#" + tit + "Tabs").css("display", "block");
                });
                jQuery('.closeBtn').click(function () {
                    jQuery(this).parent().css('display', 'none');
                });
                jQuery('#sleepHours').change(function () {
                    jQuery(".swp").css('display', 'none');
                    if (this.value == "1") {
                        jQuery(".sleepWarnPopup").css('display', 'block');
                        jQuery("#swp1").css('display', 'block');
                    }
                    if (this.value == "2") {
                        jQuery(".sleepWarnPopup").css('display', 'block');
                        jQuery("#swp2").css('display', 'block');
                    }
                    if (this.value == "3") {
                        jQuery(".sleepWarnPopup").css('display', 'block');
                        jQuery("#swp3").css('display', 'block');
                    }
                });
                /***************************************************************************************/
                (function (jQuery) {
                    jQuery.fn.clickToggle = function (func1, func2) {
                        var funcs = [func1, func2];
                        this.data('toggleclicked', 0);
                        this.click(function () {
                            var data = jQuery(this).data();
                            var tc = data.toggleclicked;
                            jQuery.proxy(funcs[tc], this)();
                            data.toggleclicked = (tc + 1) % 2;
                        });
                        return this;
                    };
                }(jQuery));
                /***************************************************************************************/
                jQuery(document).mouseup(function (e) {
                    var container = jQuery(".summaryPopup");
                    // if the target of the click isn't the container nor a descendant of the container
                    if (!container.is(e.target) && container.has(e.target).length === 0) {
                        container.hide();
                    }
                    var container = jQuery(".abtSummaryPopup");
                    // if the target of the click isn't the container nor a descendant of the container
                    if (!container.is(e.target) && container.has(e.target).length === 0) {
                        container.hide();
                    }
                });
            });
        });
    }
    /**
     *
     */
    /* ionViewDidEnter() {
      document.addEventListener("backbutton", async () => {
        // code that is executed when the user pressed the back button
        if(this.router.url === '/home') {
          // if (new Date().getTime() - this.lastTimeBackPress < this.timePeriodToExit) {
          //   // this.platform.exitApp(); // Exit from app
          //   navigator['app'].exitApp(); // work in ionic 4
          // } else {
            let alert = await this.alertController.create({
              header: '',
              message: 'Do you want to close the app?',
              buttons: [{
                  text: 'Cancel',
                  role: 'cancel',
                  handler: () => {
                      console.log('Application exit prevented!');
                  }
              },{
                  text: 'Close',
                  handler: () => {
                      // this.platform.exitApp(); // Close this application
                      navigator['app'].exitApp();
                  }
              }]
            });
            alert.present();
            this.lastTimeBackPress = new Date().getTime();
          //}
        }
        return false;
      });
    } */
    goToPage(page) {
        var url = '';
        switch (page) {
            case "biohack":
                url = "move-well/bio-hack-details";
                break;
            case "sos":
                url = "think-well/sos-emotion-process-details";
                break;
            case "stop":
                url = "think-well/stop";
                break;
            case "assessment":
                url = "eat-well/assessment";
                break;
            case "balanced_plate":
                url = "eat-well/balanced-plate";
                break;
            case "nutrition":
                url = "eat-well/nutrition";
                break;
            default:
                break;
        }
        this.router.navigateByUrl(url);
    }
};
HomePage = tslib_1.__decorate([
    Component({
        selector: 'app-home',
        templateUrl: 'home.page.html',
        styleUrls: ['home.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Platform,
        Router,
        AlertController,
        Storage])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.page.js.map