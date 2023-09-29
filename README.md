before insert those code

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="jqPlugin.js"></script>

after use this code

this code show your output

setInterval(function(){ $("#output").html($("#inputDate").formatDate("MM-DD-YYYY")) }, 1000);

here you can change #output for your needed.

this resource need for select which format you want to select

$("#formatOptions li").click(function() { 
  $("#inputDate").formatDate($(this).text());
      $("#output").html($("#inputDate").formatDate($(this).text()));
  }
);
