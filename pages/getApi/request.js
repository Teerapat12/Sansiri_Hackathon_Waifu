exports.getProjectData = function (Datas) {
    const requestApiProject = new XMLHttpRequest();

    requestApiProject.open("GET", "http://localhost:3000/api/projects", true);
    requestApiProject.setRequestHeader('Content-type', 'application/json; ');
    requestApiProject.send();

    requestApiProject.onreadystatechange = function () {
        if (requestApiProject.readyState == 4 && requestApiProject.status == "200") {
            let data = JSON.parse(requestApiProject.response);
            let user = data.result
            console.log(data);
            
            Datas(data)
            indexedDB.getData()
            console.log(user);
        } else if (requestApiProject.readyState == 4 && requestApiProject.status == "401") {
            let data = JSON.parse(requestApiProject.response);
            let user = data.result
            Datas(data)
            console.log(user);
        }
    }
}

exports.getCampsData = function (Datas) {
    const requestApiCamps = new XMLHttpRequest();

    requestApiCamps.open("GET", "http://localhost:3000/api/camps", true);
    requestApiCamps.setRequestHeader('Content-type', 'application/json; ');
    requestApiCamps.send();

    requestApiCamps.onreadystatechange = function () {
        if (requestApiCamps.readyState == 4 && requestApiCamps.status == "200") {
            let data = JSON.parse(requestApiCamps.response);
            let user = data.result
            console.log(data);
            
            Datas(data)
            indexedDB.getData()
            console.log(user);
        } else if (requestApiCamps.readyState == 4 && requestApiCamps.status == "401") {
            let data = JSON.parse(requestApiCamps.response);
            let user = data.result
            Datas(data)
            console.log(user);
        }
    }
}

exports.getWorkersData = function (Datas) {
    const requestApiWorkers = new XMLHttpRequest();

    requestApiWorkers.open("GET", "http://localhost:3000/api/workers", true);
    requestApiWorkers.setRequestHeader('Content-type', 'application/json; ');
    requestApiWorkers.send();

    requestApiWorkers.onreadystatechange = function () {
        if (requestApiWorkers.readyState == 4 && requestApiWorkers.status == "200") {
            let data = JSON.parse(requestApiWorkers.response);
            let user = data.result
            console.log(data);
            
            Datas(data)
            indexedDB.getData()
            console.log(user);
        } else if (requestApiWorkers.readyState == 4 && requestApiWorkers.status == "401") {
            let data = JSON.parse(requestApiWorkers.response);
            let user = data.result
            Datas(data)
            console.log(user);
        }
    }
}

exports.getFollowersData = function (Datas) {
    const requestApiFollowers = new XMLHttpRequest();

    requestApiFollowers.open("GET", "http://localhost:3000/api/followers", true);
    requestApiFollowers.setRequestHeader('Content-type', 'application/json; ');
    requestApiFollowers.send();

    requestApiFollowers.onreadystatechange = function () {
        if (requestApiFollowers.readyState == 4 && requestApiFollowers.status == "200") {
            let data = JSON.parse(requestApiFollowers.response);
            let user = data.result
            console.log(data);
            
            Datas(data)
            indexedDB.getData()
            console.log(user);
        } else if (requestApiFollowers.readyState == 4 && requestApiFollowers.status == "401") {
            let data = JSON.parse(requestApiFollowers.response);
            let user = data.result
            Datas(data)
            console.log(user);
        }
    }
}