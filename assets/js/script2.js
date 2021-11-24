$(function() {
$(".saveBtn").on("click", function() {



    // create var for text value
    let textInput = $("#text").val();
    console.log(textInput);
    //save input in tasks array
    let temp = JSON.parse(window.localStorage.getItem("text")) || [];
    console.log("getValueFired");
    temp.push({l: textInput});
    localStorage.setItem("text", JSON.stringify(temp))
    console.log(temp);
    console.log("input is working");
});
});