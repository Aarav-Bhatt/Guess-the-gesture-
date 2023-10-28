prediction1="";



Webcam.set({
    width:350,
    height:300,
    image_format:'jpeg',
    jpeg_quality:100

}

)
Webcam.attach(camera);

function snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("camera2").innerHTML='<img src="'+data_uri+'">';
})
}