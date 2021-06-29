$(document).ready(function() {
    var d = new Date();
    var n = d.getFullYear() + "  ";
    document.getElementById("date").innerHTML = n;
});

$(".project-panel").each(function (index) {
    $(this).on("click", function () {
        var modal = document.getElementById("imgModal");
        var folder = modal.getAttribute("folder");
        var modalImg = document.getElementById("img");
        var img = this.getAttribute("imgId");

        modal.style.display = "block";
        modalImg.setAttribute('src', 'Content/images/' + folder + '/' + img + '.jpg');

        var span = document.getElementsByClassName("close")[0];

        span.onclick = function () {
            modal.style.display = "none";
        }
    });
});