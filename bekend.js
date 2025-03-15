function generateQRCode() {
    const qrContainer = document.getElementById("qrcode");
    const textInput = document.getElementById("text").value.trim();
    
    if (!textInput) {
        document.getElementById("text").classList.add('error');
        return;
    }

    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text: textInput,
        width: 200,
        height: 200,
        colorDark: "#2d3436",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    qrContainer.classList.add('show');
    document.querySelector('.download-btn').classList.add('show');
}

function downloadQR() {
    const canvas = document.querySelector('#qrcode canvas');
    const url = canvas.toDataURL();
    const link = document.createElement('a');
    link.download = 'qrcode.png';
    link.href = url;
    link.click();
}

function handleEnter(e) {
    if(e.key === 'Enter') generateQRCode();
}


// test

/* function generateQRCode() {
    const qrContainer = document.getElementById("qrcode");
    const textInput = document.getElementById("text").value.trim();
    
    if (!textInput) {
        document.getElementById("text").classList.add('error');
        return;
    }

    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text: textInput,
        width: 200,
        height: 200,
        colorDark: "#2d3436",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    qrContainer.classList.add('show');
    document.querySelector('.download-btn').classList.add('show');
}

function downloadQR() {
    const canvas = document.querySelector('#qrcode canvas');
    const url = canvas.toDataURL();
    const link = document.createElement('a');
    link.download = 'qrcode.png';
    link.href = url;
    link.click();
}

function handleEnter(e) {
    if(e.key === 'Enter') generateQRCode();
}
