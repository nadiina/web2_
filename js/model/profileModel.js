// models/profileModel.js
window.ProfileModel = class ProfileModel {
    constructor() {
        this.name = '';
        this.email = '';
        this.gender = '';
        this.dob = '';
    }

    saveProfile(name, email, gender, dob) {
        this.name = name;
        this.email = email;
        this.gender = gender;
        this.dob = dob;

        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('gender', gender);
        localStorage.setItem('dob', dob);
    }

    loadProfile() {
        this.name = localStorage.getItem('name') || '';
        this.email = localStorage.getItem('email') || '';
        this.gender = localStorage.getItem('gender') || '';
        this.dob = localStorage.getItem('dob') || '';
    }
};
