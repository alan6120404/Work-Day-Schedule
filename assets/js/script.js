$(function() {
    console.log( "ready!" );

// TODO: display the day, month, and day on the header tab
var storageInput = JSON.parse(localStorage.getItem("text"));
console.log(storageInput);
var currentDay = moment().format("dddd, MMMM Do");

var displayTime = function() {
    var timeEl = $("<p>").addClass("time-block").text(currentDay);
    $("#currentDay").append(timeEl);
}


// TODO: load task from localStorage
/*var loadInput = function() {


    // display the content when the page is refreshed
    var taskText = $("<textarea>").text(storageInput);

}*/

//TODO: press button to save the text within the area
$(".saveBtn").on("click", function() {



    // create var for text value
    let textInput = $(this).siblings(".description").val();
    let time = $(this).siblings(".hour").attr("id");
    console.log(textInput);
    //save input in tasks array
    let temp = JSON.parse(window.localStorage.getItem("text")) || [];
    console.log("getValueFired");
    temp.push({textInput, time});
    localStorage.setItem("text", JSON.stringify(temp))
    console.log(temp);
    console.log("input is working");
});


    $(".description").each(function() {
        let id = $(this).siblings(".hour").attr("id");
        for (let i = 0; i < storageInput.length; i++) {
            const element = storageInput[i];
            if (id === element.time) {
                $(this).text(element.textInput)
            }
            var time = $(".hour").attr("id");
            var current = 16;//moment().format("H");
            var text = $(".description");
            console.log(current);
            if ( current < time) {
                text.addClass("past");
            }else if ( current == time) {
                text.addClass("present");
            }else if ( current > time) {
                text.addClass("future");
            };
        }  
    });



displayTime();
//timeCheck();

});