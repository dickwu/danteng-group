import { Notice } from './utils.js';

//adds an event listener to execute onLoad method when page finished loading
document.addEventListener("DOMContentLoaded", load);

//function to execute when page finished loading
function load() {
    const feedback_form = document.getElementById('feed_back_form');
    const name_input = document.getElementById('name');
    const email_input = document.getElementById('email');
    const feedback_type_input = document.getElementById('feedback-type');
    const message_input = document.getElementById('message');
    const result_div = document.getElementById('result');


    feedback_form.addEventListener('submit', async (event) => {
        event.preventDefault();
        result_div.innerText = 'sending...';
        
        const message = `
Topic: DanTeng Group Feedback - ${feedback_type_input.value}

 - Name: ${name_input.value}
 - Email: ${email_input.value}
 - Message: ${message_input.value}
`;
        Notice("79wvwHuOPawAoCeCJcl98N5evoBIxAunFtq7msSup1mT8Wo4NEUPnAg62yRy5sTwdUwrdEBHG", message).then(result => {
            if (result.message == "send") {
                result_div.innerText = "Feedback sent successfully, Thank you for your feedback!";
                // clear the form after 1 second
                setTimeout(() => {
                    location.reload();
                }, 1000);
            }
        })
      });
}
