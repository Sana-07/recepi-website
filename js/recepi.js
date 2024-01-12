window.addEventListener('load', () => {
    const form = document.querySelector("#new-recepi-form");
    const input = document.querySelector("#new-recepi-input");
    const list_el = document.querySelector("#recepi");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const recepi = input.value;

        const recepi_el = document.createElement('div');
        recepi_el.classList.add('recepi');

        const recepi_content_el = document.createElement('div');
        recepi_content_el.classList.add('content');

        recepi_el.appendChild(recepi_content_el);

        const recepi_input_el = document.createElement('input');
        recepi_input_el.classList.add('text');
        recepi_input_el.type = 'text';
        recepi_input_el.value = recepi;
        recepi_input_el.setAttribute('readonly', 'readonly');

        recepi_content_el.appendChild(recepi_input_el);

        const recepi_actions_el = document.createElement('div');
        recepi_actions_el.classList.add('actions');

        const recepi_edit_el = document.createElement('button');
        recepi_edit_el.classList.add('edit');
        recepi_edit_el.innerText = 'Edit';

        const recepi_delete_el = document.createElement('button');
        recepi_delete_el.classList.add('delete');
        recepi_delete_el.innerText = 'Delete';

        recepi_actions_el.appendChild(recepi_edit_el);
        recepi_actions_el.appendChild(recepi_delete_el);

        recepi_el.appendChild(recepi_actions_el);

        list_el.appendChild(recepi_el);

        input.value = '';

        recepi_edit_el.addEventListener('click', (e) => {
            if (recepi_edit_el.innerText.toLowerCase() == "edit") {
                recepi_edit_el.innerText = "Save";
                recepi_input_el.removeAttribute("readonly");
                recepi_input_el.focus();
            } else {
                recepi_edit_el.innerText = "Edit";
                recepi_input_el.setAttribute("readonly", "readonly");
            }
        });

        recepi_delete_el.addEventListener('click', (e) => {
            list_el.removeChild(recepi_el);
        });
    });
});