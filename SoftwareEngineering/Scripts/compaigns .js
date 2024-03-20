// İlerleme miktarını değiştirmek için:
function setProgress(progressPercentage) {
    var progressElement = document.getElementById('progress');
    var dashOffset = 100 - progressPercentage;
    progressElement.style.strokeDashoffset = dashOffset;
}

// Örnek olarak, ilerleme oranını yüzde 50 olarak ayarlayın:
setProgress(50);

function redirectToComp1() {
    window.location.href = "comp1.html"; // comp1.html sayfasına yönlendir
}

function redirectToComp2() {
    window.location.href = "comp2.html"; // comp2.html sayfasına yönlendir
}

function redirectToComp3() {
    window.location.href = "comp3.html"; // comp3.html sayfasına yönlendir
}

function redirectToComp4() {
    window.location.href = "comp4.html"; // comp4.html sayfasına yönlendir
}