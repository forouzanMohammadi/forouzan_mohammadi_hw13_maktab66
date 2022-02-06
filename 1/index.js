$(function(){
  $("#all-rows span").text(1);
  // add
    $('#addrow').click(function(){
        let tRow = $('<tr></tr>')
        let col1 = $(` <th scope="row">
        <button id='remove' type="button" class="btn btn-sm btn-danger d-inline"><i class="fas fa-trash"></i> Delete</button>
        <button id="copy" type="button" class="btn btn-sm btn-primary"><i class="fas fa-clone"></i> clone</button>
        </th>`)    
        let col2 = $(`<td>
        <input type="number" name="number" id="number" >
        </td>`)
        let col3 = $(`<td>
        <input type="text" name="text" id="text">
        </td>`)
        let col4 = $(`<td>
        <div class="mx-1 d-inline">
          <input type="radio" name="status" id="new" value="New">
          <label for="new">New</label>
        </div>
        <div class="mx-1 d-inline">
          <input type="radio" name="status" id="in_progress" value="In progress">
          <label for="in_progress">In progress</label>
        </div>
        <div class="mx-1 d-inline">
          <input type="radio" name="status" id="confirmed" value="Confirmed">
          <label for="confirmed">Confirmed</label>
        </div>
        </td>`)
        tRow.append(col1,col2,col3,col4).prependTo("tbody"); 
        let rowCount = $(".table tr").length-1;
        $( "#all-rows span" ).text(rowCount);
    })
    // delete
    $('.table tbody').on('click', '#remove', function () {
        $(this).closest('tr').remove();
        let rowCount = $(".table tr").length-1;
        $( "#all-rows span" ).text(rowCount);

    }) 
    // clone  
       $('.table tbody').on('click', '#copy', function () {
      let p = $('tr').length;
      let cloned = $('tbody tr:last-child').clone(true)
      .find('.radio-button').attr('name','status' + ++p).end()
      .appendTo('tbody')
        let rowCount = $(".table tr").length-1;
        $( "#all-rows span" ).text(rowCount);


    })   

    $("tr").on('click', '#confirmed', function (){
      $("#number").prop( "disabled", true );
      $("#text").prop( "disabled", true );
    })
    $("tr").on('click', '#in_progress', function (){
      $("#number").prop( "disabled", false );
      $("#text").prop( "disabled", false );
    })
    $("tr").on('click', '#new', function (){
      $("#number").prop( "disabled", false);
      $("#text").prop( "disabled", false );
    })

})