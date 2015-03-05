var alien = {
        skills: ['morhp']
    }

    var zorg = {}
    zorg.__proto__ = alien

    zorg.skills.push('clone')

    console.log(zorg.skills);
    //=> morhp, clone
    // we expected this

    console.log(alien.skills);
    //=> morhp, clone
    // maybe we didn't expect this, we have modified the array in the prototype object.