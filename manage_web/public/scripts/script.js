$(document).ready(function() {
    $(function() {
        // login
        $("#dialog_login").dialog({
            autoOpen: false,
            width: 500,
            show: "blind",
            hide: "explode",
            buttons: {
                "Ok": function() { // On open, hide the original submit button
                    $("#dialog_login").submit()
                },
                "Cancel": function() { $(this).dialog("close"); }
            }
        });
        $("#opener_login").click(function() {
            $("#dialog_login").dialog("open");
            return false;
        });
        // logout
        $("#logout").click(function() {
            $("#dialog_logout").submit();
        });
        // add vm
        $("#dialog_addvm").dialog({
            autoOpen: false,
            width: 500,
            show: "blind",
            hide: "explode",
            buttons: {
                "Ok": function() { // On open, hide the original submit button
                    $("#dialog_addvm").submit()
                },
                "Cancel": function() { $(this).dialog("close"); }
            }
        });
        $("#opener_addvm").click(function() {
            $("#dialog_addvm").dialog("open");
            return false;
        });
        // remove vm
        $("#dialog_rmvm").dialog({
            autoOpen: false,
            show: "blind",
            width: 500,
            hide: "explode",
            buttons: {
                "Ok": function() { // On open, hide the original submit button
                    $("#dialog_rmvm").submit()
                },
                "Cancel": function() { $(this).dialog("close"); }
            }
        });
        $("#opener_rmvm").click(function() {
            $("#dialog_rmvm").dialog("open");
            return false;
        });
        // add service
        $("#dialog_addService").dialog({
            autoOpen: false,
            show: "blind",
            width: 500,
            hide: "explode",
            buttons: {
                "Ok": function() { // On open, hide the original submit button
                    $("#dialog_addService").submit()
                },
                "Cancel": function() { $(this).dialog("close"); }
            }
        });
        $("#opener_addService").click(function() {
            $("#dialog_addService").dialog("open");
            return false;
        });
        // remoce service
        $("#dialog_rmService").dialog({
            autoOpen: false,
            show: "blind",
            width: 500,
            hide: "explode",
            buttons: {
                "Ok": function() { // On open, hide the original submit button
                    $("#dialog_rmService").submit()
                },
                "Cancel": function() { $(this).dialog("close"); }
            }
        });
        $("#opener_rmService").click(function() {
            $("#dialog_rmService").dialog("open");
            return false;
        });
        //change Load balancer method
        $("#dialog_cgMethod").dialog({
            autoOpen: false,
            show: "blind",
            width: 500,
            hide: "explode",
            buttons: {
                "Ok": function() { // On open, hide the original submit button
                    $("#dialog_cgMethod").submit()
                },
                "Cancel": function() { $(this).dialog("close"); }
            }
        });
        $("#opener_cgMethod").click(function() {
            $("#dialog_cgMethod").dialog("open");
            return false;
        });
        // statistics
        // vm dialog

        $("#ovs_dialog").dialog({
            autoOpen: false,
            width: 800,
            show: {
                effect: "blind",
                duration: 1000
            },
            hide: {
                effect: "explode",
                duration: 1000
            }
        });


        $("#vm_setting_form").dialog({
            autoOpen: false,
            show: "blind",
            width: 500,
            hide: "explode",
            buttons: [{
                id: "is_manager_button",
                disabled: true,
                text: "OK",
                click: function() {
                    $("#vm_setting_form").submit();
                }
            }, {
                text: "Cancel",
                click: function() {
                    $(this).dialog("close");
                }
            }]
        });
    });










});