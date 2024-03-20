import { developers } from './developers.js';

developers.sort(() => Math.random() - 0.5);
const cardContainer = document.querySelector('[data-card-container]');
const cardTemplate = document.querySelector('[data-template]');
const cardTemplateName = cardTemplate.content.querySelector('[data-template-name]');
const cardTemplateProjectName = cardTemplate.content.querySelector('[data-template-project-name]');
const cardTemplateImage = cardTemplate.content.querySelector('[data-template-image]');
const cardTemplateForm = cardTemplate.content.querySelector('[data-template-form]');
const cardTemplateSocialContainer = cardTemplate.content.querySelector('[data-template-social-container]');
const socialTemplate = document.querySelector('[data-template-social]');
const cardSocialTemplateLink = socialTemplate.content.querySelector('[data-template-social-link]');
const cardSocialTemplateIcon = socialTemplate.content.querySelector('[data-template-social-icon]');

function addSocialLinks(container, object) {
    container.innerHTML = '';
    Object.entries(object).forEach((element) => {
        const [socialName, link] = element;
        cardSocialTemplateIcon.classList.add(`social__img-${socialName}`);
        cardSocialTemplateLink.href = link;
        const icon = socialTemplate.content.cloneNode(true);
        container.append(icon);
        cardSocialTemplateIcon.classList.remove(`social__img-${element[0]}`);
    });
}

developers.forEach((element) => {
    cardTemplateName.innerText = `${element.firstName} ${element.lastName}`;
    cardTemplateForm.action = element.action;
    cardTemplateProjectName.innerText = element.project;
    cardTemplateImage.src = element.image;
    addSocialLinks(cardTemplateSocialContainer, element.links);
    const cardEl = cardTemplate.content.cloneNode(true);
    cardContainer.append(cardEl);
});
