greet();

/// Greet the user
function greet() {
    /// Get the username from the prompt
    let username = prompt("Please enter your name:");

    /// Display the username on the webpage
    document.getElementById('username').innerText = username;
}

/// Validate the form and display result
function displayFormResult() {
    let name = document.getElementById('name-input').value;
    let email = document.getElementById('email-input').value;
    let birth = document.getElementById('birth-input').value;
    let genderEls = document.querySelectorAll('input[name="gender"]');
    let gender = '';
    genderEls.forEach(el => { if (el.checked) gender = el.value; });

    // Validasi email harus ada @ dan .com
    let emailValid = email.includes('@') && email.endsWith('.com');

    // Validasi tanggal lahir antara tahun 1900 dan tahun sekarang
    let birthYear = birth ? new Date(birth).getFullYear() : null;
    let currentYear = new Date().getFullYear();
    let birthValid = birthYear && birthYear >= 1900 && birthYear <= currentYear;

    let now = new Date();
    let tanggal = now.toLocaleDateString();
    let waktu = now.toLocaleTimeString();

    document.getElementById('form-result').innerHTML = `
        <div>
            <strong>Current Time:</strong> ${waktu}<br>
            <strong>Name:</strong> <span id="result-nama">${name}</span><br>
            <strong>Email:</strong> <span id="result-email">${email}</span><br>
            <strong>Date Of Birth:</strong> <span id="result-birth">${birth}</span><br>
            <strong>Gender:</strong> <span id="result-gender">${gender}</span>
        </div>
    `;

    if (name === "" || email === "" || birth === "" || gender === "") {
        alert("All fields must be filled in!");
    } else if (!emailValid) {
        alert("Email must contain '@' and end with '.com'!");
    } else if (!birthValid) {
        alert("Date of Birth must be between year 1900 and current year!");
    } else {
        alert("Thank You, " + name + "!");
    }
}

document.querySelectorAll('section.section-fade').forEach(section => {
    section.classList.remove('active');
});

// Fungsi untuk fade in section yang sedang terlihat
function fadeVisibleSection() {
    document.querySelectorAll('section.section-fade').forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', fadeVisibleSection);
window.addEventListener('DOMContentLoaded', fadeVisibleSection);
