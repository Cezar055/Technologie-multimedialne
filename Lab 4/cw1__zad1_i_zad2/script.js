kolory = ["#800080", "#c0d727", "#00ffff"];
kolory1 = ["red", "green", "blue","yellow"];

for (a = 0; a <= 2; a++){
    const blok = document.createElement('div');
    blok.innerText = 0;
    blok.className = `Wybierz pole do wyzerowania: ${a+1}`
    blok.style.backgroundColor = kolory[a];
    blok.style.height = '200px';
    blok.style.width = '1500px';
    blok.style.textAlign = 'center';
    document.body.append(blok);
}

const tablica_div = document.querySelectorAll('div');
tablica_div.forEach(function(div) {
    div.addEventListener('click', function() {
        div.innerText = parseInt(div.innerText) + 1;
    });
});

var select = document.querySelector('select'); 

for(b = 0; b <= tablica_div.length-1; b++) {
    var opcja_do_wyboru = document.createElement('option');
    opcja_do_wyboru.text = `Wybierz pole do wyzerowania: ${b+1}`;
    select.appendChild(opcja_do_wyboru);
}

select.addEventListener('change', (event) => {
    if(event.target.selectedIndex > 0) {
        const wybrany_do_wyzerowania = document.getElementsByClassName(event.target.value)[0];
		var liczba=Math.floor(Math.random()*3);
		wybrany_do_wyzerowania.style.backgroundColor=kolory1[liczba];
        wybrany_do_wyzerowania.innerText = 0;
    } 
})