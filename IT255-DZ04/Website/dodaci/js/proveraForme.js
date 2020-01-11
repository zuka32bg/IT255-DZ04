function proveraFormeIme() {
    var x = document.forms["kontaktForma"]["ime"].value;
    if (x == "") {
        alert("Nepravilno unešeno ime!");
        return false;
    }
}

function proveraFormePrezime() {
    var x = document.forms["kontaktForma"]["prezime"].value;
    if (x == "") {
        alert("Nepravilno unešeno prezime!");
        return false;
    }
}

function proveraFormeEmail() {
    var x = document.forms["kontaktForma"]["email"].value;
    if (x == "") {
        alert("Nepravilno unešena E-Mail adresa!");
        return false;
    }
}

function proveraFormeTelefon() {
    var x = document.forms["kontaktForma"]["telefon"].value;
    if (x == "") {
        alert("Nepravilno unešen broj telefona!");
        return false;
    }
}

function proveraFormeAdresa() {
    var x = document.forms["kontaktForma"]["adresa"].value;
    if (x == "") {
        alert("Nepravilno unešena adresa!");
        return false;
    }
	
}