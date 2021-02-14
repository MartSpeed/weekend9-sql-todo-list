//const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');

console.log('client: weekend todo list');
// start the jQuery
$(document).ready(onReady);

function onReady() {
  console.log('DOM ready');
  $('#button_addTask').on('click', addTask);
}

// $.ajax() function call to server to POST task data
// function saveKoala(newKoala) {
//   console.log('in saveKoala', newKoala);
//   $.ajax({
//     method: 'POST',
//     url: '/koalas',
//     data: newKoala,
//   }).then(function (response) {
//     $('#viewKoalas').empty();
//     $('#nameIn').val('');
//     $('#ageIn').val('');
//     $('#genderIn').val('');
//     $('#readyForTransferIn').val('');
//     $('#notesIn').val('');
//     getKoalas();
//   });
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
  console.log('task is', task);

  $('#table_input').append(`
    <tr>
        <td>${task}</td>
        <td><button id="button_complete">complete</button></td>
        <td><button id="button_delete">delete</button></td>
    </tr>
  `);
  // $.ajax({
  //   method: 'POST',
  //   url: '/task',
  //   data: weekend_to_do_app,
  // }).then(function (response) {
  //   // clear the task list input button
  //   $('#button_addTask').empty();
  // });
}
