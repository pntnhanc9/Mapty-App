'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        function (position) {
            const latitude = position.coords.latitude; 
            const longitude = position.coords.longitude;
            console.log(`https://www.google.com/maps/@${latitude},${longitude},13z?entry=ttu&g_ep=EgoyMDI1MDMxOC4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D`);
        },
        function () {
            alert('Could not get your position');
        }
    );
} else {
    alert('Geolocation is not supported by this browser.');
}
