document.getElementById("editProfileForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const gender = document.getElementById("gender").value;
    const dob = document.getElementById("dob").value;

    // Save the edited profile details to localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('gender', gender);
    localStorage.setItem('dob', dob);

    // Update the displayed profile details
    document.getElementById("userName").textContent = name;
    document.getElementById("userEmail").textContent = email;
    document.getElementById("userGender").textContent = gender;
    document.getElementById("userDob").textContent = dob;

    // Hide the edit profile form after saving the changes
    document.getElementById("editProfileForm").classList.add("d-none");
});

document.getElementById("editProfileButton").addEventListener("click", function() {
    document.getElementById("editProfileForm").classList.toggle("d-none");
});
