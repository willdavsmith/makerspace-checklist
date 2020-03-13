var $ = require("jquery");

$(document).ready(function() {
    $(".startup_items").hide();
    $(".shutdown_items").hide();
    $("#Startup").click(function() {
        if ($("#Startup").prop('checked')) $(".startup_items").show();
	else $(".startup_items").hide();
    });
    $("#Shutdown").click(function() {
	if ($("#Shutdown").prop('checked')) $(".shutdown_items").show();
	else $(".shutdown_items").hide();
    });
    $("#submit").click(function() {
        let newLine = "";
        let fields = ["Initials", "TimeIn", "TimeOut", "Startup", "Shutdown", "LightsOn", "DoorsOpen", "TestPrints", "LensCleaned", "TestCut", "Website", "HoursScreen", "FilterCheck", "IronsCheck", "AppliancesOff", "ToolsClean", "ProjectsClean", "KeysAway", "DoorsClosed"];
        fields.forEach((field) => {
            if (["Initials", "TimeIn", "TimeOut"].indexOf(field) != -1) {
  	        newLine += $(`#${field}`).val();
            }
            else {
                newLine += $(`#${field}`).prop('checked');
            }
  	    newLine += ',';
        });
  	newLine = newLine.toUpperCase();
  	newLine += $("#Notes").val();
  	newLine += '\n';
        $.post("http://localhost:25485/api/send", 
                {data: newLine}, 
                (data) => window.location.href = window.location.href);
    });
});
