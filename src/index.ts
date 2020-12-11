import { formData } from "./forms";

const form = document.querySelector('form')!;   //  ! - this is definitely gonna be found, otherwise TS complains

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = formData(form);
    console.log(data);
});