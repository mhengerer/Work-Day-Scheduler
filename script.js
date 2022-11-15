// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  var today = dayjs(); 
  var CurTime = dayjs().hour();
  
  $(".saveBtn").on("click", function () {
    // get the hour
    var hourVal = $(this).parent().attr('id').split('hour-')[1];

    var textVal = $(this).siblings('.description').val();

    // set the item in localStorage
    localStorage.setItem(hourVal, textVal);

    // alert the value to check if we got it
    alert(localStorage.getItem(hourVal, textVal));
  });
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  $(".time-block").each(function () {
    var hour = parseInt(this.id.split("hour-")[1]);
    if (hour < CurTime){
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("past");
    }else if (hour === CurTime){
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    }else{
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  
  })
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  $('hour-9').children('.description').val(localStorage.getitem('9'));
  $('hour-10').children('.description').val(localStorage.getitem("10"));
  $('hour-11').children('.description').val(localStorage.getitem('11'));
  $('hour-12').children('.description').val(localStorage.getitem('12'));
  $('hour-13').children('.description').val(localStorage.getitem('13'));
  $('hour-14').children('.description').val(localStorage.getitem('14'));
  $('hour-15').children('.description').val(localStorage.getitem('15'));
  $('hour-16').children('.description').val(localStorage.getitem('16'));
  $('hour-17').children('.description').val(localStorage.getitem('17'));


  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').text(today.format('MMM D, YYYY'));
});
