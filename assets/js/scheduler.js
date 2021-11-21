
//adding current date to Hero using Moment.js

var today = moment().format('dddd, MMMM Do YYYY');

$("#currentDay").text(today);
console.log(today);

//current time
var current_time = moment().format("hh:mm a");
console.log(current_time);

//work day time blocks
var workDay = [
    { time: "8 am", event:""},
    { time: "9 am", event:""},
    { time: "10 am", event:""},
    { time: "11 am", event:""},
    { time: "12 pm", event:""},
    { time: "1 pm", event:""},
    { time: "2 pm", event:""},
    { time: "3 pm", event:""},
    { time: "4 pm", event:""},
    { time: "5 pm", event:""},
];
console.log(workDay);

function currentColor(timeLabel) {
    var planNow = moment(current_time, "hh:mm a");
    var planEntry = moment(timeLabel, "hh:mm a");
    if (planNow.isBefore(planEntry) === true){
        return "future";
    }else if (planNow.isAfter(planEntry) === true) {
        return "past";
    }else {
        return "present";
    }

}
//rows for time blocks


workDay.forEach(function(workDay, index) {
    var timeLabel = workDay.time;
    var colorTime = currentColor(timeLabel);
    var row = '<div class="time-block" id=" ' + index + ' "><div class="row no-gutters input-group"><div class="col-sm col-lg-1 input-group-prepend hour jsutify-content-sm-end pr-3 pt-3">'+ timeLabel + '</div><textarea class"form-control '+ colorTime +'">' 
    + workDay.event + '</textarea><div class="col-sm col-lg-1 input-group-append"><button class="saveBtn btn-block" type="submit"><i class="fas fa-save></i></button></div></div></div>';
$(".container").append(row);
console.log(colorTime);
});






