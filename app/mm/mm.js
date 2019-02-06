$(function () {


  // ACTUAL

  $('.code-button').on('click', () => {
    let code = $('.code-entry').val().toUpperCase();
    //console.log("code", code);

    let requestUrl = location.protocol + '//' + location.host + '/mm/api?code=' + code;
    //console.log("sending request to ", requestUrl);

    $.getJSON(requestUrl, (data) => {

      console.log("response", data);


      if ('error' in data) {
        console.log("WRONG");
        Swal.fire({
          title: 'Error!',
          text: "That isn't a valid code!",
          type: 'error',
          confirmButtonText: 'Oops'
        });
      } else {
        let character = data.character;
        $('.code-form').remove();
        loadCharacter(character);


        $('.how-it-works-section').removeClass('hidden');


        $('#character-icon').on('click', () => {
          $('html, body').animate({scrollTop: $('.name-section').offset().top}, 1000);
        });

        $('#question-icon').on('click', () => {
          $('html, body').animate({scrollTop: $('.how-it-works-section').offset().top}, 1000);
        });

      }
    });

  });



  // TESTING

  // let requestUrl = location.protocol + '//' + location.host + '/mm/api?code=DUCK';
  // //console.log("sending request to ", requestUrl);
  //
  // $.getJSON(requestUrl, (data) => {
  //
  //   console.log("response", data);
  //
  //
  //   if ('error' in data) {
  //     console.log("WRONG");
  //     Swal.fire({
  //       title: 'Error!',
  //       text: "That isn't a valid code!",
  //       type: 'error',
  //       confirmButtonText: 'Oops'
  //     });
  //   } else {
  //     let character = data.character;
  //     $('.code-form').remove();
  //     loadCharacter(character);
  //
  //
  //     $('#character-icon').on('click', () => {
  //       $('html, body').animate({scrollTop: $('.name-section').offset().top}, 1000);
  //     });
  //
  //     $('#question-icon').on('click', () => {
  //       $('html, body').animate({scrollTop: $('.how-it-works-section').offset().top}, 1000);
  //     });
  //
  //   }
  // });


}); // this one is important



let loadCharacter = function(character) {
  // https://tutorialzine.com/2015/01/learn-handlebars-in-10-minutes

  // retrieve the template data from the html
  let template = $('#handlebars-character').html();

  // compile the template data into a function
  let templateScript = Handlebars.compile(template);

  // create html code from context
  let html = templateScript(character);

  // insert the html
  $(document.body).append(html);
}
