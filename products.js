import { Notice } from './utils.js';

//adds an event listener to execute onLoad method when page finished loading
document.addEventListener("DOMContentLoaded", load);

//function to execute when page finished loading
function load() {
    const test_notice_form = document.getElementById('test_notice_form');
    const token_input = document.getElementById('token');
    const message_input = document.getElementById('message');
    const result_div = document.getElementById('result');


    // fill in the token field with the token from local storage
    token_input.value = localStorage.getItem("token");

    // add event listener to the token field to save the token to local storage
    token_input.addEventListener("change", function () {
        localStorage.setItem("token", token_input.value);
    });


    test_notice_form.addEventListener('submit', async (event) => {
        event.preventDefault();
        result_div.innerText = 'sending...';
        const token = token_input.value;
        const message = message_input.value;
        Notice(token, message).then(result => {
            result_div.innerText = JSON.stringify(result);
        })
      });
}

