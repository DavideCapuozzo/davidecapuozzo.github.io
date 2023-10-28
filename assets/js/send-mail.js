const contactForm = document.querySelector('#contact-form')
const submitBtn = document.querySelector('.submit-btn')
const nameInput = document.querySelector('#your-name')
const mailInput = document.querySelector('#your-mail')
const messageInput = document.querySelector('#message')
/* const projectInput = document.querySelector('#your-project')*/
/* const budjettInput = document.querySelector('#your-budjet')*/
const publicKey = "rbPdxiZpPtq79nG0A";
const serviceId = "service_p6t18ki";
const templateId = "template_db56ipd";

emailjs.init(publicKey);
contactForm.addEventListener("submit", e => {

    e.preventDefault();
    submitBtn.innerText = "Just A Moment..."

    const inputFields = {
        name: nameInput.value,
        email: mailInput.value,
        message: messageInput.value,
    }

    

    emailjs.send(serviceId, templateId, inputFields)
        .then(() => {
            submitBtn.innerText = "Message Sent Successfully";
            nameInput.value = "";
            mailInput.value = "";
            messageInput.value = "";
            /* projectInput.value = ""; */
            /* budjettInput.value = ""; */
        }, (error) => {
            console.log(error);
            submitBtn.innerText = "Error Sent";
        });

});