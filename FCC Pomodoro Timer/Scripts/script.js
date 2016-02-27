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
        sessionLength = $('#sessionLength');
    breakMinusFive.click(function () {
        console.log("BMF Val=" + sessionLength.val());
        if (sessionLength.val() > 5) {
            breakLength.val(breakLength.val() - 5);
        }
    });

    breakMinusOne.click(function () {
        if (breakLength.val() > 1) {
            breakLength.val(breakLength.val() - 1);
        }
    });

    breakPlusFive.click(function () {
        console.log("BMF Val=" + breakLength.val());
        if (parseInt(breakLength.val(), 10) <= 94) {
            breakLength.val(parseInt(breakLength.val(), 10) + 5);
        }
    });

    breakPlusOne.click(function () {
        console.log("BMF Val=" + breakLength.val());
        if (parseInt(breakLength.val(), 10) <= 98) {
            breakLength.val(parseInt(breakLength.val(), 10) + 1);
        }
    });

    sessionMinusFive.click(function () {
        console.log("BMF Val=" + sessionLength.val());
        if (sessionLength.val() > 5) {
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

    $('#startSession').click(function () {
        console.log("start session " + $('#timer').val());
        $('#timer').val(sessionLength.val());
    });
});
