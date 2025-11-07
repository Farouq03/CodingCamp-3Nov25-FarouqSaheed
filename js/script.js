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
const Email = document.getElementById("Email");
const No_Telepon = document.getElementById("No_Telepon");

function submitForm() {
    if (!Nama.value || !Email.value || !No_Telepon.value || !Tanggal_lahir.value || !document.querySelector('input[name="Jenis_Kelamin"]:checked') || !Pesan.value) {
        alert("Please fill in all fields before submitting the form.");
    }  else if (!/\S+@\S+\.\S+/.test(Email.value)) {
        alert("Please enter a valid email address.");
    } else if (!/^\d{8,15}$/.test(No_Telepon.value)) {
        alert("Please enter a valid phone number (8-15 digits).");
    } else {
        document.getElementById("submitted-form").innerHTML = "Nama: " + Nama.value + "<br>" +
            "Email: " + Email.value + "<br>" +
            "No Telepon: " + No_Telepon.value + "<br>" +
            "Tanggal Lahir: " + Tanggal_lahir.value + "<br>" +
            "Jenis Kelamin: " + document.querySelector('input[name="Jenis_Kelamin"]:checked').value + "<br>" +
            "Pesan: " + Pesan.value;
    }
}