'use strict';

const forms = document.querySelectorAll('form');

forms.forEach((form) => {
  const inputs = form.querySelectorAll('input');

  inputs.forEach((input) => {
    if (!input.id) {
      input.id = `input-${input.name || Math.random().toString(36).slice(2)}`;
    }

    const label = document.createElement('label');

    label.classList.add('field-label');

    label.setAttribute('for', input.id);

    label.textContent = input.name;

    input.parentElement.insertBefore(label, input);

    const base = input.name || input.id || '';

    input.placeholder = base
      ? base.charAt(0).toUpperCase() + base.slice(1)
      : '';
  });
});
