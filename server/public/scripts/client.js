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
function addTask(weekend_to_do_app) {
  console.log('this is the addTask function');
  console.log('inside weekend to do app', weekend_to_do_app);

  $('#table_input').append(`
    <tr>
        <td>this row is the value of the click button, what is the value of the click butt called in a template literal?</td>
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
