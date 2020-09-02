// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$.get("https://localhost:44356/api/productlist").done(function (response) {

    response.forEach(function (element) {
        console.log(element);
        $("#tableBody").append("<tr><th scope='row'>" + element.productId + "</th><td>"+element.name+"</td><td>"+element.description+"</td><td>"+ element.productId +"</td>");

    });
});