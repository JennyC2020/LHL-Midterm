$(() => {
  //original skeleton
  // $.ajax({
  //   method: "GET",
  //   url: "/api/users"
  // }).done((users) => {
  //   for (user of users) {
  //     $("<div>").text(user.name).appendTo($("body"));
  //   }
  // });;

  $('#order-now').click( function() {
    event.preventDefault();
    $.ajax({
      method: "POST",
      url: "/api/orders/1/submit/"
    })
    localStorage.clear();
  });

  $('#logout').click(() => {
    return $.ajax({
      method: "POST",
      url: "/api/users/logout",
    })
  });
});

