before insert those code <br> <br> 

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script> <br> <br>
<script src="jqPlugin.js"></script> <br> <br>

after use this code <br> <br>

this code show your output <br> <br>

setInterval(function(){ $("#output").html($("#inputDate").formatDate("MM-DD-YYYY")) }, 1000); <br> <br>

here you can change #output for your needed. <br> <br>

this resource need for select which format you want to select <br> <br>

$("#formatOptions li").click(function() { <br> <br>
$("#inputDate").formatDate($(this).text()); <br> <br>
$("#output").html($("#inputDate").formatDate($(this).text())); <br> <br>
} <br> <br>
); <br> <br>
