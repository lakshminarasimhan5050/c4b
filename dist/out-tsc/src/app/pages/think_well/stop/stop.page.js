import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
let StopPage = class StopPage {
    constructor(platform, router) {
        this.platform = platform;
        this.router = router;
        this.platform.ready().then(() => {
            $(document).ready(function () {
                $(".mainContainer").css('display', 'none');
                $(".mainContainerOnLoad").css('display', 'block');
                setTimeout(function () { $(".red").css("transform", "scale(1.5, 1.5)"); }, 500);
                setTimeout(function () { $(".red").css("transform", "scale(1, 1)"); }, 1000);
                setTimeout(function () { $(".yellow").css("transform", "scale(1.5, 1.5)"); }, 1500);
                setTimeout(function () { $(".yellow").css("transform", "scale(1, 1)"); }, 2000);
                setTimeout(function () { $(".green").css("transform", "scale(1.5, 1.5)"); }, 2500);
                setTimeout(function () { $(".green").css("transform", "scale(1, 1)"); }, 3000);
                setTimeout(function () { $(".mainContainerOnLoad").css("transform", "scale(0.2, 0.2)"); }, 3500);
                setTimeout(function () { $(".mainContainerOnLoad").css("display", "none"); }, 4000);
                setTimeout(function () { $(".mainContainer").css("display", "block"); }, 4100);
                $(".startStop").click(function () {
                    $("#c1").css("display", "none");
                    $("#c2").css("display", "none");
                    $("#c3").css("display", "none");
                    $("#pushToStart").html("INHALE");
                    $(this).html("STOP");
                    $("#pushToStart").removeClass("blinking").addClass("noBlink");
                    setTimeout(function () { $("#c1").attr("stroke-opacity", "1"); }, 500);
                    setTimeout(function () { $("#c2").attr("stroke-opacity", "1"); }, 1000);
                    setTimeout(function () { $("#c3").attr("stroke-opacity", "1"); }, 1500);
                    setTimeout(function () { $("#c4").attr("stroke-opacity", "1"); }, 1000);
                    setTimeout(function () { $("#c5").attr("stroke-opacity", "1"); }, 2000);
                    setTimeout(function () { $("#c6").attr("stroke-opacity", "1"); }, 3000);
                    setTimeout(function () { $("#c7").attr("stroke-opacity", "1"); }, 4000);
                    setTimeout(function () { $("#counterValue").html("4"); }, 1000);
                    setTimeout(function () { $("#counterValue").html("3"); }, 2000);
                    setTimeout(function () { $("#counterValue").html("2"); }, 3000);
                    setTimeout(function () { $("#counterValue").html("1"); }, 4000);
                    setTimeout(function () { $("#counterValue").html("0"); }, 4500);
                    setTimeout(function () { $("#pushToStart").html("HOLD"); }, 4500);
                    setTimeout(function () { $("#counterValue").html("4"); }, 5000);
                    setTimeout(function () { $("#counterValue").html("3"); }, 6000);
                    setTimeout(function () { $("#counterValue").html("2"); }, 7000);
                    setTimeout(function () { $("#counterValue").html("1"); }, 8000);
                    setTimeout(function () { $("#counterValue").html("0"); }, 8500);
                    setTimeout(function () { $("#pushToStart").html("EXHALE"); }, 10000);
                    setTimeout(function () { $("#counterValue").html("4"); }, 11000);
                    setTimeout(function () { $("#counterValue").html("3"); }, 12000);
                    setTimeout(function () { $("#counterValue").html("2"); }, 13000);
                    setTimeout(function () { $("#counterValue").html("1"); }, 14000);
                    setTimeout(function () { $("#counterValue").html("0"); }, 15000);
                    setTimeout(function () { $("#c1").attr("stroke-opacity", "0.3"); }, 17000);
                    setTimeout(function () { $("#c2").attr("stroke-opacity", "0.3"); }, 16000);
                    setTimeout(function () { $("#c3").attr("stroke-opacity", "0.3"); }, 15000);
                    setTimeout(function () { $("#c4").attr("stroke-opacity", "0.3"); }, 14000);
                    setTimeout(function () { $("#c5").attr("stroke-opacity", "0.3"); }, 13000);
                    setTimeout(function () { $("#c6").attr("stroke-opacity", "0.3"); }, 12000);
                    setTimeout(function () { $("#c7").attr("stroke-opacity", "0.3"); }, 11000);
                    setTimeout(function () { $("#pushToStart").html("HOLD"); }, 15000);
                    setTimeout(function () { $("#counterValue").html("4"); }, 16000);
                    setTimeout(function () { $("#counterValue").html("3"); }, 17000);
                    setTimeout(function () { $("#counterValue").html("2"); }, 18000);
                    setTimeout(function () { $("#counterValue").html("1"); }, 19000);
                    setTimeout(function () { $("#counterValue").html("0"); }, 20000);
                    //$("#pushToStart").removeClass("noBlink").addClass("blinking");}, 15000);
                });
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
            });
        });
    }
    ngOnInit() {
    }
};
StopPage = tslib_1.__decorate([
    Component({
        selector: 'app-stop',
        templateUrl: './stop.page.html',
        styleUrls: ['./stop.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Platform,
        Router])
], StopPage);
export { StopPage };
//# sourceMappingURL=stop.page.js.map