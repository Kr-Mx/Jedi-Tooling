const links = {
    'github': 'https://github.com/Kr-Mx',
        'telegram': 'https://t.me/Mx_Kr',
        'e-mail': 'mailto:maks.kryshnev@gmail.com',
        'linkedin': 'https://www.linkedin.com/in/maksim-kryshneu/'
}

const PROJECT_CONSTANTS = {
    links,
    classNames: ['container', 'heading', 'linksWrapper', ...new Array(Object.keys(links).length).fill('link')]
}

export default PROJECT_CONSTANTS
