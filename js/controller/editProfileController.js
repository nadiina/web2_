// controllers/editProfileController.js
import ProfileModel from '../model/profileModel.js';

const profileModel = new ProfileModel();

document.getElementById("editProfileForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const gender = document.getElementById("gender").value;
    const dob = document.getElementById("dob").value;

    profileModel.saveProfile(name, email, gender, dob);

    // Update the displayed profile details
    document.getElementById("userName").textContent = name;
    document.getElementById("userEmail").textContent = email;
    document.getElementById("userGender").textContent = gender;
    document.getElementById("userDob").textContent = dob;

    // Hide the edit profile form after saving the changes
    document.getElementById("editProfileForm").classList.add("d-none");
});

document.getElementById("editProfileButton").addEventListener("click", function() {
    profileModel.loadProfile();

    document.getElementById("name").value = profileModel.name;
    document.getElementById("email").value = profileModel.email;
    document.getElementById("gender").value = profileModel.gender;
    document.getElementById("dob").value = profileModel.dob;
    document.getElementById("editProfileForm").classList.toggle("d-none");
});
