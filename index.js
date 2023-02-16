function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier =  ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/uldhgo0ou/model.json', modelLoaded);
}

function modelLoaded() {
    classifier.classify(gotResults);
}

var dog_count = 0;
var cat_count = 0;
var cow_count = 0;
var tiger_count = 0;

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);

        red = Math.floor(Math.random() * 255) + 1;
        green = Math.floor(Math.random() * 255) + 1;
        blue = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result-count").innerHTML = 'Detected Dog - ' + dog_count + ' Detected Cat - ' + cat_count + ' Detected Cow - ' + cow_count + ' Detected Tiger - ' + tiger_count;
        document.getElementById("result-label").innerHTML = 'Detected voice is of - ' + results[0].label;

        document.getElementById("result-count").style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
        document.getElementById("result-label").style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
        
        animal_imgs = document.getElementById("animal-imgs");

        if (results[0].label == "Bark") {
            animal_imgs.src = "barkl.gif";
            dog_count = dog_count + 1;
        } else if (results[0].label == "Meow") {
            animal_imgs.src = "meow.gif";
        } else if (results[0].label == "Moo") {
            animal_imgs.src = "moo.gif";
        } else if (results[0].label == "Roar") {
            animal_imgs.src = "roar.gif";
        } else {
            animal_imgs.src = "listen.gif";
        }
    }
}