Webcam.set({
    height: 300,
    width: 350,
    image_format:"jpeg",
    jpeg_quality:90
})
Webcam.attach("#camera")
function capture() {
    Webcam.snap(
        function(img){
            document.getElementById("snapshot").innerHTML = `<img id="capturedimage" src=${img}>`
            
        }
    )
}
console.log("Version of ML5 ="+ml5.version)
var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/4Z_vc18RD/model.json",getModel)
function getModel () {
    console.log("Model Uploaded!!!!!!!!!!!!!!")
}
function speak() {
    API = window.speechSynthesis()
    speechData1 = "The first prediction is" + prediction1
    speechData2 = "The second prediction is" + prediction2
 utterthis= new SpeechSynthesisUtterance(speechData1 + speechData2)
}