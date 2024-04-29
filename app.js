function calculateAge() {
    let dayInput = parseInt(document.querySelector(".day").value);
    let monthInput = parseInt(document.querySelector(".month").value);
    let yearInput = parseInt(document.querySelector(".year").value);

    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1;
    let currentDay = currentDate.getDate();
    let yearsCalculated = currentYear - yearInput;
    let monthsCalculated = currentMonth - monthInput;
    let daysCalculated = currentDay - dayInput;

    if (currentMonth < monthInput || (currentMonth === monthInput && currentDay < dayInput)) {
        yearsCalculated--;
        monthsCalculated = 12 - monthInput + currentMonth;
        const daysInPrevMonth = new Date(yearInput, monthInput - 1, 0).getDate();
        daysCalculated = daysInPrevMonth - dayInput + currentDay;
    }

    if (monthsCalculated < 0) {
        monthsCalculated += 12;
    }

    while (daysCalculated > 31) {
        monthsCalculated++;
        const daysInCurrMonth = new Date(yearInput, monthInput + monthsCalculated - 1, 0).getDate();
        daysCalculated -= daysInCurrMonth;
    }

    if (daysCalculated < 0) {
        const daysInPrevMonth = new Date(yearInput, monthInput, 0).getDate();
        daysCalculated = daysInPrevMonth + daysCalculated;
        monthsCalculated--;
    }

    document.querySelector(".calculated-age").style.display = 'block';
    document.querySelector(".number-years").textContent = `${yearsCalculated}`;
    document.querySelector(".number-months").textContent = `${monthsCalculated}`;
    document.querySelector(".number-days").textContent = `${daysCalculated}`;
}

function validYear(){
    document.querySelector(".valid-year").style.display=`block`;
    document.querySelector(".year").style.border="red 2px solid";
}
function validMonth(){
    document.querySelector(".valid-month").style.display=`block`;
    document.querySelector(".month").style.border="red 2px solid";
}
function validDay(){
    document.querySelector(".valid-day").style.display=`block`;
    document.querySelector(".day").style.border="red 2px solid";

}
document.querySelector(".arrow").addEventListener("click", () => {
    let dayInput = parseInt(document.querySelector(".day").value);
    let monthInput = parseInt(document.querySelector(".month").value);
    let yearInput = parseInt(document.querySelector(".year").value);

    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();

    if (dayInput <= 0 || dayInput > 31) {
        validDay();
    } else {
        document.querySelector(".valid-day").style.display = 'none';
        document.querySelector(".day").style.border="1.5px solid var(--light-grey)"

        
    }


    if (monthInput <= 0 || monthInput > 12) {
        validMonth();
    } else {
        document.querySelector(".valid-month").style.display = 'none';   
        document.querySelector(".month").style.border="1.5px solid var(--light-grey)"

    }


    if (yearInput <= 0 || yearInput > currentYear) {
        validYear();
    } else {
        document.querySelector(".valid-year").style.display = 'none';    
            document.querySelector(".year").style.border="1.5px solid var(--light-grey)"

    }

    if (dayInput > 0 && dayInput <= 31 && monthInput > 0 && monthInput <= 12 && yearInput > 0 && yearInput <= currentYear) {
        calculateAge();document.querySelector(".container").style.paddingBottom = `${50}px`;
    }

    
});


