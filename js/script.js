welcomeMessage();
function welcomeMessage() {
    let name = prompt("Please enter your name:");
    if (name != "null" && name != "") {
        document.getElementById("welcome-message").innerHTML = "Hi " + name + ", Welcome to My Website!";
    }
}

const Nama = document.getElementById("Nama");
const Tanggal_lahir = document.getElementById("Tanggal_lahir");
const Jenis_Kelamin = document.querySelector('input[name="Jenis_Kelamin"]:checked');
const Pesan = document.getElementById("Pesan");

function submitForm() {
    if (!Nama.value || !Tanggal_lahir.value || !document.querySelector('input[name="Jenis_Kelamin"]:checked') || !Pesan.value) {
        alert("Please fill in all fields before submitting the form.");
    } else {
        document.getElementById("submitted-form").innerHTML = Nama.value + "<br>" +
            Tanggal_lahir.value + "<br>" +
            document.querySelector('input[name="Jenis_Kelamin"]:checked').value + "<br>" +
            Pesan.value;
    }
}