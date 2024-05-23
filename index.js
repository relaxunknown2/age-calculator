document.addEventListener("DOMContentLoaded", function () {
    var dayOfBirthInput = document.getElementById("dayOfBirth");
    var monthOfBirthInput = document.getElementById("monthOfBirth");
    var yearOfBirthInput = document.getElementById("yearOfBirth");
    var calculateAgeButton = document.getElementById("calculateAgeButton");

    calculateAgeButton.addEventListener("click", function () {
        var dayOfBirth = dayOfBirthInput.value;
        var monthOfBirth = monthOfBirthInput.value;
        var yearOfBirth = yearOfBirthInput.value;

        var age = ageCalculator(dayOfBirth, monthOfBirth, yearOfBirth);

        document.getElementById("years").innerHTML = age.years;
        document.getElementById("months").innerHTML = age.months;
        document.getElementById("days").innerHTML = age.days;
        
    });

    function ageCalculator(day, month, year) {
        var currentDate = new Date();
        var currentDay = currentDate.getDate();
        var currentMonth = currentDate.getMonth() + 1;
        var currentYear = currentDate.getFullYear();

        var ageYear = currentYear - year;
        var ageMonth = currentMonth - month;
        var ageDay = currentDay - day;

        return { years: ageYear, months: ageMonth, days: ageDay };
    }


});