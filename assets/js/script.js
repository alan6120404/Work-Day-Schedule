// TODO: display the day, month, and day on the header tab
var input = {};
var currentDay = moment().format("dddd, MMMM Do");

var displayTime = function() {
    var timeEl = $("<p>").addClass("time-block").text(currentDay);
    $("#currentDay").append(timeEl);
}

// TODO: save task to localStorage 
var getValue = function() {
    // create var for text value
    var textInput = $("#text").val();
    //save input in tasks array
    input.push({textInput});
};

var saveInput = function() {
    localStorage.setItem("text", JSON.stringify(input))
    console.log(input);
};

// TODO: load task from localStorage
var loadInput = function() {
    input = JSON.parse(localStorage.getItem("text"));
}

// TODO: create 9 <div> within the .container
var h = 9;

var createListRow = function() {
    for (var i = 0; i <= 9; i++) {
        // creating hours applying to taskHour
    // TODO: within the <div> created, there should be 3 parts to it
    // ! one containing the time of the day
    // ! one containing the description
    // ! one containing the save button
        var currentHour = moment().hour(h).format("h A");

        var taskRow = $("<div>").addClass("row");
        var taskHour = $("<p>").addClass("hour").text(currentHour);
        var taskText = $("<textarea>").addClass("description").attr("id", "text");
        var taskSave = $("<button>").addClass("saveBtn").text("save");


            taskRow.append(taskHour, taskText, taskSave);

            $(".container").append(taskRow);

        h++;
    };
}
//TODO: press button to save the text within the area
var saveButton = function() {
    
}

// TODO: adding edit function to the description tab
// TODO: description should display color that represent if it's past due, current, or future.
// TODO: clicking the save button icon should save the description in place.

displayTime();
createListRow();
