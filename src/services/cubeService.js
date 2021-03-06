const fs = require('fs/promises');
const path = require('path');
const cubes = require('../db.json');

exports.getAll = (search = '',fromInput,toInput)=> {
    const from = Number(fromInput) || 1;
    const to = Number(toInput) ||6;

    const result = cubes
    .filter(x=>x.name.toLowerCase().includes(search.toLowerCase()))
    .filter(x=>x.difficultyLevel>= from && x.difficultyLevel<=to);

    return result;
}

exports.getOne = (cubeId) => cubes[cubeId];

exports.save = (cube) =>{
    cubes.push({_id: cubes[cubes.length -1 ]._id + 1, ...cubes});
    let data = JSON.stringify(cubes, '',4);
    return fs.writeFile(path.resolve('src','db.json'),data ,{encoding: 'utf-8'})
}