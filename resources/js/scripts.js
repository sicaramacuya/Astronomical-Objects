import planets from './planets.js'

console.log("Hello!")





const rightSectionContainer = document.getElementById('right-section-container')

// right section container and its childs
// the length of the planets.js determines how many times this loops goes around
for (let index=0; index < planets.length; ++index) {
    // creating an article element for the right section container articles and appending it to the right section container
    let rightSectionContainerArticle = document.createElement('article')
    rightSectionContainerArticle.className = "right-section-container-articles"
    rightSectionContainerArticle.id = planets[index].id
    rightSectionContainer.appendChild(rightSectionContainerArticle)

    // creating a div element for the object name and appending it to the right section container article
    let objectNameDiv = document.createElement('div')
    objectNameDiv.className = 'object-name'
    rightSectionContainerArticle.appendChild(objectNameDiv)

    // creating a h4 element for the name text, giving it the innerText and appending it to the objectNameDiv
    let nameTextH4 = document.createElement('h4')
    nameTextH4.className = 'name-text'
    nameTextH4.innerText = planets[index].name
    objectNameDiv.appendChild(nameTextH4)

    // creating a div element for the right upper section container where is going to be appended the image and append it to the right section container
    let rightUpperSectionContainerDiv = document.createElement('div')
    rightUpperSectionContainerDiv.className =  'right-upper-section-container'
    rightSectionContainerArticle.appendChild(rightUpperSectionContainerDiv)

    // creating an image element, giving it a picture and appending it to the right upper section container
    let img = document.createElement('img')
    img.src = planets[index].image
    rightUpperSectionContainerDiv.appendChild(img)

    // creating a div element for the right lower section container and appending it to the right section container for articles
    let rightLowerSectionContainerDiv = document.createElement('div')
    rightLowerSectionContainerDiv.className = 'right-lower-section-container'
    rightSectionContainerArticle.appendChild(rightLowerSectionContainerDiv)

    // creating a div element for the information card container and appending it to the right lower section container.
    let informationCardContainerDiv = document.createElement('div')
    informationCardContainerDiv.className = 'information-card-container'
    rightLowerSectionContainerDiv.appendChild(informationCardContainerDiv)

    // creating a div element for the information card text and appending it to the information card container
    let informationCardTextDiv = document.createElement('div')
    informationCardTextDiv.className = 'information-card-text'
    informationCardContainerDiv.appendChild(informationCardTextDiv)

    // creating a h6 element for the quick facts text and set the innerText to "Quick Facts"
    let quickFactsTextH6 = document.createElement('h6')
    quickFactsTextH6.className = 'quick-facts-text'
    quickFactsTextH6.innerText = 'Quick Facts'
    informationCardTextDiv.appendChild(quickFactsTextH6)

    // creating a div element for the information card clipboard and appending it to the information card container
    let informationCardClipboardDiv = document.createElement('div')
    informationCardClipboardDiv.className = 'information-card-clipboard'
    informationCardContainerDiv.appendChild(informationCardClipboardDiv)

    // a loop that will run over every fact inside planets.js and create a div element for each fact
    for (let facts=6, i = 0; facts < 22; ++facts, ++i) {
        // names of each facts and keys of json file
        const facts = ['Orbit Distance', 'Radius', 'Volume', 'Mass', 'Density', 'Surface Gravity', 'Escape Velocity', 'Rotational Period', 'Orbit Period', 'Orbit Velocity', 'Eccentricity', 'Inclination', 'Surface Temperature', 'Atmosphere', 'Moons', 'Rings']
        const keys = ['obrit_distance', 'radius', 'volume', 'mass', 'density', 'surface_gravity', 'escape_velocity', 'rotation_period', 'orbit_period', 'mean_orbit_velocity', 'orbit_eccentricity', 'equatorial_inclination', 'surface_temperature', 'atmosphere', 'moons', 'rings']

        // creating a div element for the quick fact and appending it to the information clipboard
        let quickFactDiv = document.createElement('div')
        quickFactDiv.className = 'quick-fact'
        informationCardClipboardDiv.appendChild(quickFactDiv)

        // creating a header element for the fact header and appending it to the quick fact div
        let factHeader = document.createElement('header')
        factHeader.className = 'fact-header'
        quickFactDiv.appendChild(factHeader)

        // creating a h6 element for the fact name, setting it an innerText for the name of the fact and appending it to fact header
        let factNameH6 = document.createElement('h6')
        factNameH6.className = 'fact-name'
        factNameH6.innerText = facts[i]
        factHeader.appendChild(factNameH6)

        // creating a div element for the fact description container and appending it to the quick fact div
        let factDescriptionContainerDiv = document.createElement('div')
        factDescriptionContainerDiv.className = 'fact-description-container'
        quickFactDiv.appendChild(factDescriptionContainerDiv)

        // creating a p element for the fact description, using innerText to add the description and appending it to the fact description container div
        let factDescriptionP = document.createElement('p')
        factDescriptionP.className = 'fact-description'
        factDescriptionP.innerText = planets[index][keys[i]] // planets[index][key]
        factDescriptionContainerDiv.appendChild(factDescriptionP)
    }

    // creating a div element for object description and appending it to information card container
    let objectDescriptionDiv = document.createElement('div')
    objectDescriptionDiv.className = 'object-description'
    informationCardContainerDiv.appendChild(objectDescriptionDiv)

    // creating and h5 element for object description text, adding innerText and appending it to object description
    let objectDescriptionTextH5 = document.createElement('h5')
    objectDescriptionTextH5.className = 'object-description-text'
    objectDescriptionTextH5.innerText = 'Description'
    objectDescriptionDiv.appendChild(objectDescriptionTextH5)

    // creating a div element for paragraph container and appending it to information card contiainer
    let paragraphContainerDiv = document.createElement('div')
    paragraphContainerDiv.className = 'paragraph-container'
    informationCardContainerDiv.appendChild(paragraphContainerDiv)

    // creating a p elements for the paragraph content, add the content with innerText and append them to the paragraph container
    let paragraphOneP = document.createElement('p')
    let paragraphTwoP = document.createElement('p')
    let paragraphThreeP = document.createElement('p')
    paragraphOneP.className = 'paragraph-1'
    paragraphTwoP.className = 'paragraph-2'
    paragraphThreeP.className = 'paragraph-3'
    paragraphOneP.innerText = planets[index].desc1
    paragraphTwoP.innerText = planets[index].desc2
    paragraphThreeP.innerText = planets[index].desc3
    paragraphContainerDiv.appendChild(paragraphOneP)
    paragraphContainerDiv.appendChild(paragraphTwoP)
    paragraphContainerDiv.appendChild(paragraphThreeP)
} 