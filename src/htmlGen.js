const fs = require('fs')

makeTeam = (staff) => {
    let staffArr = [];

    for (let i = 0; i < staff.length; i++) {
        const employee = staff[i];

        if (employee.role === 'Manager') {
            employee.icon = 'fa-mug-hot'
            employee.specLine = `<li class="list-group-item">Office Number: ${employee.special}</li>`;
        } else if (employee.role === 'Engineer') {
            employee.icon = 'fa-gear'
            employee.specLine = `<li class="list-group-item">GitHub: <a href="https://github.com/${employee.special}" target="_blank">${employee.special}</a></li>`
        } else {
            employee.icon = 'fa-graduation-cap'
            employee.specLine = `<li class="list-group-item">School: ${employee.special}</a></li>`
        }
        staffArr.push(newStaff(employee))
    }

    teamRoster = staffArr.join('')
    mainHtml(teamRoster);
}

newStaff = (staff) => {
    return `<div class="card col-3 m-3" style="padding-left: 0; padding-right: 0;">
        <div class="card-header text-bg-warning">
            <h3>${staff.name}</h3>
            <h5><i class="fa-solid ${staff.icon}"></i> ${staff.role}</h5>
        </div>
        <div class="card-body text-bg-light">
            <ul class="list-group list-group pt-2">
                <li class="list-group-item">ID: ${staff.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${staff.email}">${staff.email}</a></li>
                ${staff.specLine}
            </ul>
        </div>
    </div>`;
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
            <div class="row justify-content-center">
                ${teamRoster}
            </div>
        </div>

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