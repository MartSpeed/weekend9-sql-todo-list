//const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');

//const { response } = require('express');

console.log('client: weekend todo list');
// start the jQuery
$(document).ready(onReady);

function onReady() {
  console.log('DOM ready');
  $('#button_addTask').on('click', addTask);

  // click listeners
  //$(document).on('click', '#button_complete', completeClick);
}

// }
// $.ajax() function call to server to POST task data
function saveTask() {
  console.log('saveTask function has been clicked');
}

/**
 * NAME: addTask() function
 * DESCRIPTION: when the "submit button" is clicked append the ('#button_addTask').val()
 * into the "table id" from the "task" value in the database to input the information
 *
 * inside of the "table id" create "button for complete" and a "button for delete"
 *
 * "button for complete" will change the $(this).class() of the task to a color for complete
 * and then remove the "button for delete"
 *
 * "button for delete" will delete the $(this).data() from the DOM
 */
function addTask(event) {
  event.preventDefault();
  console.log('this is the addTask function');
  let task = $('#task_to_insert').val();
  //console.log('task is', task);

  /**
   * pushes the the value of the input element into the <td> of the <tr> on the DOM
   * then we need to send th is information to the server and POST that information in
   * console log.
   */
  $('#table_input').append(`
    <tr>
        <td>${task}</td>
        <td><button id="button_complete">complete</button></td>
        <td><button id="button_delete">delete</button></td>
    </tr>
  `);
  $.ajax({
    method: 'POST',
    url: '/task',
    data: { task },
  })
    .then(function (response) {
      // clear the task list input button
      $('#button_addTask').empty();
      console.log('this is the then function', response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

/**
 * NAME: function completeClick()
 * DESCRIPTION: when the new task appears with the complete button it will
 * change the task from false to true and and then change the class of the
 * table item to green.
 */
// function completeClick() {
//   console.log('inside the complete button');
//   $('#input_complete_cg').addClass('green');
// }
