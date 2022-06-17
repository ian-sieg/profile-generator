const fs = require('fs')

newManager = (staff) => {
    return `<div class="row justify-content-center">
    <div class="card col-3 m-3" style="padding-left: 0; padding-right: 0;">
        <div class="card-header text-bg-warning">
            <h3>${staff.name}</h3>
            <h5><i class="fa-solid fa-mug-hot"></i> ${staff.role}</h5>
        </div>
        <div class="card-body text-bg-light">
            <ul class="list-group list-group pt-2">
                <li class="list-group-item">ID: ${staff.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${staff.email}">${staff.email}</a></li>
                <li class="list-group-item">Office Number: ${staff.special}</li>
            </ul>
        </div>
    </div>`;
}

newEngineer = (staff) => {
    return `<div class="card col-3 m-3" style="padding-left: 0; padding-right: 0;">
    <div class="card-header text-bg-warning">
        <h3>${staff.name}</h3>
        <h5><i class="fa-solid fa-gear"></i> ${staff.role}</h5>
    </div>
    <div class="card-body text-bg-light">
        <ul class="list-group list-group pt-2">
            <li class="list-group-item">ID: ${staff.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${staff.email}">${staff.email}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${staff.special}">${staff.special}</a></li>
        </ul>
    </div>
</div>`;
}

newIntern = (staff) => {
    return `<div class="card col-3 m-3" style="padding-left: 0; padding-right: 0;">
    <div class="card-header text-bg-warning">
        <h3>${staff.name}</h3>
        <h5><i class="fa-solid fa-graduation-cap"></i> ${staff.role}</h5>
    </div>
    <div class="card-body text-bg-light">
        <ul class="list-group list-group pt-2">
            <li class="list-group-item">ID: ${staff.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${staff.email}">${staff.email}</a></li>
            <li class="list-group-item">School: ${staff.special}</a></li>
        </ul>
    </div>
</div>`;
}

makeTeam = (staff) => {
    let staffArr = [];

    for (let i = 0; i < staff.length; i++) {
        const employee = staff[i];

        if (employee.role === 'Manager') {
            let managerCard = newManager(employee)
            staffArr.push(managerCard)
        } else if (employee.role === 'Engineer') {
            let engineerCard = newEngineer(employee)
            staffArr.push(engineerCard)
        } else {
            let internCard = newIntern(employee)
            staffArr.push(internCard)
        }
    }

    teamRoster = staffArr.join('')
    mainHtml(teamRoster);
}

mainHtml = (teamRoster) => {
    let team = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" rel="stylesheet">
        <title>Team Roster</title>
    </head>
    <body>
        <div class='container-fluid'>
            <div class="row bg-info rounded-bottom p-3 mb-2">
                <h1 class="text-white text-center col">Team Roster</h1>
            </div>
        </div>

        ${teamRoster}

    </body>
    </html>`;

    writeTeam(team)
}

writeTeam = (team) => {
    fs.writeFile('./dists/index.html', team, (err) => {
        err ? console.log(err) : console.log('Success! Your roster has been created')
})
}

module.exports = makeTeam;