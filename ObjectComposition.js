/*
    object composition adalah menganggap semua function adalah object dan dapat dipadukan
*/


class Developer{
    constructor(name){
        this.name = name;
    }

    commitChanges(){
        console.log(`${this.name} is commit changes...`);
    }
}

function canBuildApi(developer){
    return {
        buildApi: ()=>{
            console.log(`${developer.name} is building API...`);
        }
    }
}

function canBuildUi(developer){
    return {
        buildUi: ()=>{
            console.log(`${developer.name} is building UI...`);
        }
    }
}

function canDeployApp(developer){
    return {
        deployApp: ()=>{
            console.log(`${developer.name} is deploying app...`);
        }
    }
}

// membuat blueprint menggunakan object assign

/* Object.assign(target, source) */

function createFrontEndDeveloper(name){
    const developer = new Developer(name);
    return Object.assign(developer, canBuildUi(developer));
}

function createBackEndDeveloper(name){
    const developer = new Developer(name);
    return Object.assign(developer, canBuildApi(developer));
}

function createDevOps(name){
    const developer = new Developer(name);
    return Object.assign(developer, canDeployApp(developer));
}

function createFullStack(name){
    const developer = new Developer(name);
    return Object.assign(developer,canBuildApi(developer), canBuildUi(developer), canDeployApp(developer));
}

// membuat object

//frontend
const aditya = createFrontEndDeveloper('aditya');
aditya.buildUi();
aditya.commitChanges();

// backend
const fano = createBackEndDeveloper('fano');
fano.buildApi();
fano.commitChanges();

// devops
const kamado = createDevOps('kamado');
kamado.deployApp();
kamado.commitChanges();

// fullstack
const tanjiro = createFullStack('tanjiro');
tanjiro.buildApi();
tanjiro.buildUi();
tanjiro.deployApp();
tanjiro.commitChanges();