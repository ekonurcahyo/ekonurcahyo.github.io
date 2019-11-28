
$(document).ready(function(){
    $.getJSON('assets/js/identitas.json',
            function(data){
                for(var i = 0 ; i < data.barang.length; i++){
                    $('.cbarang').append(
                        
                        "<div class='barang'>" +
                        "<div class='gambar' style='background-image: url(assets/images/"+data.barang[i].img+".jpg);'></div>" +
                        "<div class='desk'>" +
                            data.barang[i].nama +
                        "</div>" +
                        "<div class='price'>"+data.barang[i].harga+"</div>" +
                        "<div class='rating'><img src='assets/images/r.png'>" +
                                            "<img src='assets/images/r.png'>" +
                                            "<img src='assets/images/r.png'>" +
                                            "<img src='assets/images/r.png'>" +
                                            "<img src='assets/images/r.png'></div>" +
                        "<div class='btn1'><a href='#' class='btn btn-primary'>Tambah Ke Keranjang</a></div>" +
                        "</div>"
                    )}
            });
});  