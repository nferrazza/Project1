
function showOffers(snapshot) {
  $("#prices").empty();

  // Log everything that's coming out of snapshot
  console.log("length:" + snapshot.offers.length);

  for (i = 0; i < snapshot.offers.length; i++) {
    // Create a new variable that will hold a "<th>" tag.
    var vg = $("#prices");
    var newrow = $("<tr>");
    var newtd = $("<td>");
    var cover = $("<img>");
    var subHeading = $("#selectedGame")
    cover.addClass("img-responsive thumb");

    subHeading.text(snapshot.offers[i]["product-name"]);
    newrow.append(newtd);
    newrow.append("<td>" + snapshot.offers[i]["product-name"] + "</td>" +  "<td>" + (snapshot.offers[i]["price"] / 100) + "</td>");


    vg.append(newrow);

    // Handle the errors
  }
}