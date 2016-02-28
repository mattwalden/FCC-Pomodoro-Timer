/// <reference path="_references.js" />
/*jslint browser: true*/
/*global $, jQuery, alert*/
/* global $breakLength */
/* global $breakMinusFive */

$(document).ready(function () {
    "use strict";
    var breakMinusFive = $('#breakMinusFive'),
        breakLength = $('#breakLength'),
        breakMinusOne = $('#breakMinusOne'),
        breakPlusFive = $('#breakPlusFive'),
        breakPlusOne = $('#breakPlusOne'),
        sessionPlusOne = $('#sessionPlusOne'),
        sessionPlusFive = $('#sessionPlusFive'),
        sessionMinusOne = $('#sessionMinusOne'),
        sessionMinusFive = $('#sessionMinusFive'),
        sessionLength = $('#sessionLength'),
        sessionStart = $('#sessionStart'),
        sessionPause = $('#sessionPause'),
        time = 0,
        endTime = 0,
        totalTime,
        $status = $('#status'),
        $progBar = $('#progBar'),
    running = false,
     prevTime = (new Date()).getTime(),
     workAudio = new Audio('/media/crack_the_whip.mp3');

    // #region Break Slider
    var breakSlider = document.getElementById('breakSlider');

    noUiSlider.create(breakSlider, {
        start: [10],
        step: 1,
        range: {
            'min': 1,
            'max': 99
        },
        format: wNumb({
            decimals: 0,


        })
    });



    breakSlider.noUiSlider.on('update', function (values) {
        var value = values;

        breakLength.val(value);
    });

    // #endregion

    // #region Session Slider 

    var sessionSlider = document.getElementById('sessionSlider');

    noUiSlider.create(sessionSlider, {
        start: [10],
        step: 1,
        range: {
            'min': 1,
            'max': 99
        },
        format: wNumb({
            decimals: 0,

        })
    });



    sessionSlider.noUiSlider.on('update', function (values) {
        var value = values;

        sessionLength.val(value);
    })
    // #endregion


    breakMinusFive.click(function () {
        console.log("BMF Val=" + breakLength.val());
        if (breakLength.val() >= 6) {
            breakLength.val(breakLength.val() - 5);
        }
    });

    breakMinusOne.click(function () {
        if (breakLength.val() > 1) {
            breakLength.val(breakLength.val() - 1);
        }
    });

    breakPlusFive.click(function () {
        //console.log("BMF Val=" + breakLength.val());
        if (parseInt(breakLength.val(), 10) <= 94) {
            breakLength.val(parseInt(breakLength.val(), 10) + 5);
        }
    });

    breakPlusOne.click(function () {
        //console.log("BMF Val=" + breakLength.val());
        if (parseInt(breakLength.val(), 10) <= 98) {
            breakLength.val(parseInt(breakLength.val(), 10) + 1);
        }
    });

    sessionMinusFive.click(function () {
        console.log("BMF Val=" + sessionLength.val());
        if (sessionLength.val() >= 6) {
            sessionLength.val(sessionLength.val() - 5);
        }
    });

    sessionMinusOne.click(function () {
        console.log("BMF Val=" + sessionLength.val());
        if (sessionLength.val() > 1) {
            sessionLength.val(sessionLength.val() - 1);
        }
    });

    sessionPlusFive.click(function () {
        console.log("BMF Val=" + sessionLength.val());
        if (parseInt(sessionLength.val(), 10) <= 94) {
            sessionLength.val(parseInt(sessionLength.val(), 10) + 5);
        }
    });

    sessionPlusOne.click(function () {
        console.log("BMF Val=" + sessionLength.val());
        if (parseInt(sessionLength.val(), 10) <= 98) {
            sessionLength.val(parseInt(sessionLength.val(), 10) + 1);
        }
    });

    function update() {
        console.log($status.text());

        if (time <= 0.0) {
            return;
        }

        elapsedTime();
        if ($status.text() == "Work Time") {
            totalTime = (parseInt(sessionLength.val(), 10) * 60);
        }
        if (time <= 0.0) {
            console.log('TIME:  ' + time);
            if ($status.text() == "Work Time") {
                console.log('WORKTIME:  ');
                alarm();
                $status.text("Break");
                time = parseInt(breakLength.val()) * 60;
                totalTime = time;
            }
            else {
                console.log('break:  ');
                alarm();
                $status.html('Work Time');
                time = parseInt(sessionLength.val()) * 60;
                totalTime = time;

            }
        }
        updateDisplay();
        if (running) {
            requestAnimationFrame(update);
        }
    }

    sessionStart.click(function () {
        $status.html('Work Time');

        if (time <= 0.0) {
            time = parseInt(sessionLength.val()) * 60;
        }
        prevTime = (new Date()).getTime();

        running = true;
        requestAnimationFrame(update);
    });

    sessionPause.click(function pause() {
        if (running) {
            running = false;
            sessionPause.text("Resume");
        } else {
            running = true;
            sessionPause.text("Pause");
            prevTime = (new Date()).getTime();
            requestAnimationFrame(update);
        }
    });

    function updateDisplay() {
        var minutes = Math.floor(time / 60);
        var seconds = Math.floor(time % 60);

        minutes = pad(minutes);
        seconds = pad(seconds);
        $('#timer').val(minutes + ":" + seconds);
        updateProgressBar();
    };

    function pad(val) {
        return ('00' + val).slice(-2);
    }

    function alarm() {
    }

    function elapsedTime() {
        var timeNow = (new Date().getTime());
        var dt = (timeNow - prevTime) / 1000;
        prevTime = timeNow;
        time -= dt;
        return time;
    }

    function updateProgressBar() {
        var value = 100 * (1 - (time / totalTime));
        console.log("Percent: " + value)
        $progBar
            .attr("aria-valuenow", value)
            .css("width", value + "%")
        .text(Math.floor(value) + "%");

    }


})