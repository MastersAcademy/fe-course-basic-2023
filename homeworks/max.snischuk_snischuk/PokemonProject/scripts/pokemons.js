const CARDS_CONTAINER_ELEMENT = document.querySelector('[data-cards-container]');

function createCardElement() {
    const CARD_TEMPLATE_ELEMENT = document.querySelector('[data-type="card-template"]');
    return CARD_TEMPLATE_ELEMENT.content.cloneNode(true);
}

function renderCards(container, cardsAmount) {
    const FRAGMENT_NODE = new DocumentFragment();

    for (let i = 1; i <= cardsAmount; i++) {
        const card = createCardElement();
        FRAGMENT_NODE.append(card);
    }

    container.append(FRAGMENT_NODE);
}

renderCards(CARDS_CONTAINER_ELEMENT, 10);
