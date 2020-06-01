// inicjalizacja potrzebnych zmiennych
const plotno = document.getElementById("plotno");
const ctx = plotno.getContext("2d");
const kwadrat = { a:20, x:0, y:0, dx:1, dy:0 };
const pause_button = document.querySelector("#pause_button");
let isRunning = false;

// dodajemy obsługę zdarzenia dla przycisku
document.addEventListener("DOMContentLoaded", function() {
    
    pause_button.addEventListener("click", (event) =>{
        isRunning = !isRunning;
        event.target.innerHTML = (isRunning) ? "Zatrzymaj" : "Wznów";
        (isRunning) ? wznow() : zatrzymaj();
    });
});

// funkcja uruchamiająca animację
function wznow(){
    isRunning = true;
    aktualizuj();
}

// aby zatrzymać animację
function zatrzymaj(){
    isRunning = false;
}

// dla ułatwienia obsługi wielu animacji stworzymy funkcję, w której będzie umieszczany kod
// generujacy kolejne klatki animacji
function aktualizuj(){
    if(isRunning){
        rysuj_kwadrat();
        // inne funkcje zmieniające stan klatki do wyrysowania
        requestAnimationFrame(aktualizuj);
    }
}

// funkcja rysująca kwadrat - jaka jest różnica między taką deklaracją funkcji (wyrażenie funkcyjne)
// a sposobem dla funkcji start()/stop()/update() ?
const rysuj_kwadrat = function() {
    console.log(kwadrat.x)
    console.log(kwadrat.y)
    console.log(plotno.height)

    // obliczenia
    // trzeba zaimplementować "odbijanie się od krawędzi"
    // sprawdzamy czy przesunięcie kwadratu o kolejny krok nie przesunie go poza obszar płótna
    // załóżmy na razie, że tylko w poziomie
    // do kwadratu zostala dodana kolejna zmienna dx, która przechowuje wartość zmiany pozycji na osi x

    if(kwadrat.dx > 0 && (kwadrat.x+kwadrat.dx + kwadrat.a) > plotno.width){
        kwadrat.dx = 0;
        kwadrat.dy = 1;
    }
    else if(kwadrat.dy == 1 && (kwadrat.y + kwadrat.dy + kwadrat.a) > plotno.height){
        kwadrat.dx = -1;
        kwadrat.dy = 0;
    }
    else if(kwadrat.dx == -1 && kwadrat.dy == 0 && (kwadrat.x + kwadrat.dx) < 0){
        kwadrat.dx = 0;
        kwadrat.dy = -1;
    }
    else if(kwadrat.dx == 0 && kwadrat.dy == -1 && (kwadrat.y+kwadrat.dy < 0)){
        kwadrat.dx = 1;
        kwadrat.dy = 0;
    }
    kwadrat.x+=kwadrat.dx;
    kwadrat.y+=kwadrat.dy;

    // czyścimy płótno
    ctx.clearRect(0, 0, plotno.width, plotno.height);

    // rysujemy 
    ctx.fillStyle = 'red';
    ctx.fillRect(kwadrat.x, kwadrat.y, kwadrat.a, kwadrat.a);
}