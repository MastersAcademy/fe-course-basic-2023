import { developers } from './developers.js';

developers.sort(() => Math.random() - 0.5);
const cardContainer = document.querySelector('[data-card-container]');
const cardTemplate = document.querySelector('[data-template]');
const cardTemplateName = cardTemplate.content.querySelector('[data-template-name]');
const cardTemplateProjectName = cardTemplate.content.querySelector('[data-template-project-name]');
const cardTemplateImage = cardTemplate.content.querySelector('[data-template-image]');
const cardTemplateForm = cardTemplate.content.querySelector('[data-template-form]');
const cardSocialTelegramLink = cardTemplate.content.querySelector('[data-telegram-link]');
// const cardSocialGithubLink = cardTemplate.content.querySelector('[data-github-link]');
// const cardSocialGmailLink = cardTemplate.content.querySelector('[data-gmail-link]');

function addSocialLinks(link, object, field) {
    if (field in object) {
        link.href = object[field];
    } else {
        console.log(1);
    }
}

developers.forEach((element) => {
    cardTemplateName.innerText = `${element.firstName} ${element.lastName}`;
    cardTemplateForm.action = element.action;
    cardTemplateProjectName.innerText = element.project;
    cardTemplateImage.src = element.image;
    addSocialLinks(cardSocialTelegramLink, element, 'telegram');
    const cardEl = cardTemplate.content.cloneNode(true);
    cardSocialTelegramLink.href = '#';
    cardContainer.append(cardEl);
});
