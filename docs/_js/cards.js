import { developers } from './developers.js';

developers.sort(() => Math.random() - 0.5);
const cardContainer = document.querySelector('[data-card-container]');
const cardTemplate = document.querySelector('[data-template]');
const cardTemplateName = cardTemplate.content.querySelector('[data-template-name]');
const cardTemplateForm = cardTemplate.content.querySelector('[data-template-form]');
developers.forEach((element) => {
    cardTemplateName.innerText = `${element.firstName} ${element.lastName}`;
    cardTemplateForm.action = element.action;
    const cardEl = cardTemplate.content.cloneNode(true);
    cardContainer.append(cardEl);
});
