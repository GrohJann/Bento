// Get the hour
var today2 = new Date();
var Hr2 = today2.getHours();

// Here you can change your name
var name = 'Jannis';

// Here you can change your greetings
var gree1 = 'Go to Sleep! ';
var gree2 = 'Good morning! ';
var gree3 = 'Good afternoon ';
var gree4 = 'Good evening ';
var gree5 = 'Good evening ';
var gree6 = 'Good evening ';

// Define the hours of the greetings
if (Hr2 >= 23 && Hr2 < 5) {
    document.getElementById('greetings').innerText = gree1 + name;
} else if (Hr2 >= 6 && Hr2 < 12) {
    document.getElementById('greetings').innerText = gree2 + name;
} else if (Hr2 >= 12 && Hr2 < 17) {
    document.getElementById('greetings').innerText = gree3 + name;
} else if (Hr2 >= 17 && Hr2 < 23) {
    document.getElementById('greetings').innerText = gree4 + name;
}
