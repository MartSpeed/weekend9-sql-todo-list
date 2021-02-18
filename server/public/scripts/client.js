console.log('client: weekend todo list');
// start the jQuery
$(document).ready(onReady);

function onReady() {
  console.log('DOM ready');
  $('#button_addTask').on('click', addTask);
  getTask();

  // click listeners
  // complete function turn the <td> element green and clears the input value
  $(document).on('click', '#button_complete', completeClick);
  // delete function removes the <td> element and clears it from the database value
  $(document).on('click', '#button_delete', deleteTask);
}

/**
 * POST INCANTATION
 *
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
  //console.log('this is the addTask function');
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

function completeClick() {
  //let task = $('#table_input').val();

  console.log('inside the complete button');

  $(this).parent().parent().addClass('green');

  /**
   * when clicked
   * the current table will turn green
   * and append the information to the completed list
   */
  insertTask();
  
}


/**
 * GET INCANTATION
 *
 * NAME: function getTask()
 * DESCRIPTION: grab the information from the server and give it to the database.
 * using the response[i].task for the 'GET' INCANTATION that takes in an array from the
 * [sqlArgs] variable and appends the information to the DOM and record the information
 * on the weekend-to-do-app database.
 *
 * NOTE: This accepts JSON which is why it requires an object to read the information
 */
function getTask() {
  console.log('in the getTask() function');
  $.ajax({
    method: 'GET',
    url: '/task',
  }).then(function (response) {
    console.log('GET response', response);
    for (let i = 0; i < response.length; i++) {
      $('#table_input').append(`
      <tr>

        <td>${response[i].task}</td>
        <td><button id="button_complete">complete</button></td>
        <td><button id="button_delete">delete</button></td>

        <td>${response[i].task}
        <span>
        <button id="button_complete">complete</button>
        <button id="button_delete">delete</button>
        </span>
        </td>

      </tr>
      `);
    }
  });
}
/**
 * PUT INCANTATION
 * 
 * NAME:
 * DESCRIPTION:
 */

function insertTask (taskId) {
  console.log('inside of the insertTask function');

  // client to server handshake
  $.ajax.put(`/task${taskId}`, {taskId})
    .then((res) => {
      console.log(res);
      $('#task_to_insert').empty();
      getTask();
    }).catch((err) => console.error(err));
}

// function taskTransfer() {
//   $.ajax.put('/:id' {task})
// }

// function onTransfer(koalaId) {
//   // console.log('transfer btn clicked');
//   // console.log($(this).data('id'));

//   $.ajax({
//     method: 'PUT',
//     url: `/koalas/readyForTransfer/${koalaId}`,
//     data: {
//       koalaId,
//     },
//   })
//     .then((res) => {
//       console.log(res);
//       $('#viewKoalas').empty();
//       getKoalas();
//     })
//     .catch((err) => console.error(err));
// }

/**
 * DELETE INCANTATION
 */



// <td><button id="button_complete">complete</button></td>
// <td><button id="button_delete">delete</button></td>
function deleteTask() {
  console.log('inside the deleteTask function');
}
