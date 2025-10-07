function showLocalizedDateExamples() {
    const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    const localized = `
        🌍 Przykładowa data (20 grudnia 2012):<br>
        en-US: ${date.toLocaleDateString("en-US", options)}<br>
        ko-KR: ${date.toLocaleDateString("ko-KR", options)}<br>
        ar-EG: ${date.toLocaleDateString("ar-EG", options)}<br>
        en-GB: ${date.toLocaleDateString("en-GB", options)}<br>
    `;

    document.getElementById("output").innerHTML = localized;
}


function getDateFromForm() {
    const inputValue = document.getElementById("dateInput").value;
    if (!inputValue) {
        document.getElementById("output").innerHTML = "⚠️ Proszę wybrać datę.";
        return;
    }

    const selectedDate = new Date(inputValue);
    const valueOfDate = selectedDate.valueOf();

    document.getElementById("output").innerHTML = `
        📅 Wybrana data: ${inputValue}<br>
        🔢 ValueOf: ${valueOfDate}
    `;
}


function calculateDateDifference() {
    const start = document.getElementById("startDate").value;
    const end = document.getElementById("endDate").value;

    if (!start || !end) {
        document.getElementById("output").innerHTML = "⚠️ Proszę podać obie daty.";
        return;
    }

    const startDate = new Date(start);
    const endDate = new Date(end);

    const diffInMs = endDate - startDate;
    var diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInDays < 0){
        document.getElementById("output").innerHTML = `
        📆 Data pierwsza: ${start}<br>
        📆 Data  druga: ${end}<br>
        📏 Upłynęło: ${diffInDays * -1} dni! <br>
    `;
    }
    else if(diffInDays > 0){
        document.getElementById("output").innerHTML = `
        📆 Data pierwsza: ${start}<br>
        📆 Data  druga: ${end}<br>
        📏 Pozostało: ${diffInDays} dni! <br>
        `;
    }
    else{
        document.getElementById("output").innerHTML = `
        📆 Data pierwsza: ${start}<br>
        📆 Data  druga: ${end}<br>
        📏 To ten sam dzień! <br>
    `;
    }

        
    
}




