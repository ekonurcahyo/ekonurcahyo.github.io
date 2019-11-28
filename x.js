$(document).ready(function(){
    $.getJSON('list.json',
            function(data){
                for(var i = 0 ; i < data.thumbnail.length; i++){
                    $('#x').append("<div class='media' id='btn"+i+"'>"+"<div class='media-left'>"+"<a  href='#omed'"+data.thumbnail[i].link+"'>"+"<img src='images/popular/"+data.thumbnail[i].gbr+"' alt=''>"+"<span class='duration'>17:30</span>"+"</a>"+"</div>"+"<div class='media-body'>"+"<a  href='#omed'"+data.thumbnail[i].link+"<h5>"+data.thumbnail[i].judul+"</h5>"+"</a>"+"<div class='row m0 meta_info views'>34,000 views</div>"+"<div class='row m0 meta_info posted'>1 year ago</div>"+"</div>"+"</div><br>")
                }

                $("#btn00").click(function() {
                    $("#omed").html(data.thumbnail[0].embad);
                    $("#imed").html(data.thumbnail[0].judul);
                })

                $("#btn01").click(function() {
                    $("#omed").html(data.thumbnail[1].embad);
                    $("#imed").html(data.thumbnail[1].judul);
                })

                $("#btn0").click(function() {
                    $("#omed").html(data.thumbnail[0].embad);
                    $("#imed").html(data.thumbnail[0].judul);
                })

                $("#btn1").click(function() {
                    $("#omed").html(data.thumbnail[1].embad);
                    $("#imed").html(data.thumbnail[1].judul);
                })

                $("#btn2").click(function() {
                    $("#omed").html(data.thumbnail[2].embad);
                    $("#imed").html(data.thumbnail[2].judul);
                })

                $("#btn3").click(function() {
                    $("#omed").html(data.thumbnail[3].embad);
                    $("#imed").html(data.thumbnail[3].judul);
                })

                $("#btn4").click(function() {
                    $("#omed").html(data.thumbnail[4].embad);
                    $("#imed").html(data.thumbnail[4].judul);
                })

                $("#btn5").click(function() {
                    $("#omed").html(data.thumbnail[5].embad);
                    $("#imed").html(data.thumbnail[5].judul);
                })

                $("#btn6").click(function() {
                    $("#omed").html(data.thumbnail[6].embad);
                    $("#imed").html(data.thumbnail[6].judul);
                })

                $("#btn7").click(function() {
                    $("#omed").html(data.thumbnail[7].embad);
                    $("#imed").html(data.thumbnail[7].judul);
                })

                $("#btn8").click(function() {
                    $("#omed").html(data.thumbnail[8].embad);
                    $("#imed").html(data.thumbnail[8].judul);
                })
                
                $("#btn9").click(function() {
                    $("#omed").html(data.thumbnail[9].embad);
                    $("#imed").html(data.thumbnail[9].judul);
                })
            }); 
        });