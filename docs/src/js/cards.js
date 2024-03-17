import { developers } from './developers.js';

developers.sort(() => Math.random() - 0.5);
const cardContainer = document.querySelector('[data-card-container]');
const cardTemplate = document.querySelector('[data-template]');
const cardTemplateName = cardTemplate.content.querySelector('[data-template-name]');
const cardTemplateProjectName = cardTemplate.content.querySelector('[data-template-project-name]');
const cardTemplateImage = cardTemplate.content.querySelector('[data-template-image]');
const cardTemplateForm = cardTemplate.content.querySelector('[data-template-form]');
const cardSocialTelegram = cardTemplate.content.querySelector('[data-telegram]');

developers.forEach((element) => {
    cardTemplateName.innerText = `${element.firstName} ${element.lastName}`;
    cardTemplateForm.action = element.action;
    cardTemplateProjectName.innerText = element.project;
    cardTemplateImage.src = element.image;
    cardSocialTelegram && (cardSocialTelegram.href = element.telegram);
    const cardEl = cardTemplate.content.cloneNode(true);

    cardContainer.append(cardEl);
});
