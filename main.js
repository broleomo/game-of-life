//Choose Spouse
const chooseSpouse = people => {
    people = [
        'Barb from Stranger Things', 'Scooby Doo', 'Lady Gaga', 'Hayley Costas', 'Ellen Degeneres', 'John Cena', 'Guy Fieri', 'Oprah', 'Sal the Cat'
    ];
    let randSpouse = Math.floor(Math.random() * people.length);
    return people[randSpouse];
};
document.getElementById('spouse-button').addEventListener('click', displaySpouse);

function displaySpouse() {
    document.getElementById('spouse-display').innerHTML = chooseSpouse();
}

document.getElementById('reset').addEventListener('click', reloadForm)

//reset form
function reloadForm() {
    location.reload();
}

//Choose Occupation
const chooseOccupation = jobs => {
    jobs = [
        {
        name:'Lunch Lady',
        image: 'lunch-lady.png',
        },
        {
        name:'CEO',
        image: 'CEO-icon.png',
        }, 
        {
        name:'ER Nurse',
        image: 'nurse-icon.png',
        }, 
        {
        name:'Clown',
        image: 'clown-icon.png',
        }, 
        {
        name:'Bartender',
        image: 'bartender-icon.png'
        },
        {
        name:'Firefighter',
        image: 'firefighter-icon',
        },
        {
        name:'Software Engineer',
        image: 'programmer-icon.png'
        }
    ];
    let randOccupation = Math.floor(Math.random() * jobs.length);
    return  jobs[randOccupation].name
}

document.getElementById('occupation-button').addEventListener('click', displayOccupation)

function displayOccupation() {
    document.getElementById('occupation-display').innerHTML = chooseOccupation();
}

//Choose House
const chooseHouse = houses => {
    houses = [
        'Beach House', 'Shack', 'Mountain Yurt', 'Treehouse', 'Cardboard Box', 'German Castle', 'Carriage House', 'Tiny House', 'Adobe'
    ];
    let randHouse = Math.floor(Math.random() * houses.length);
    return houses[randHouse];
};
document.getElementById('house-button').addEventListener('click', displayHouse)

function displayHouse() {
    document.getElementById('house-display').innerHTML = chooseHouse();
}