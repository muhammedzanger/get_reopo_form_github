

let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");





getButton.onclick = function () {
    getRepos ();
};


// get repos function

function getRepos () {
    if ( theInput.value == "") {
        reposData.innerHTML = `<span>Please Write Your Github Username.</span>`;
    } else {
        fetch (`https://api.github.com/users/${theInput.value}/repos`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // console.log(data)
            reposData.innerHTML = "";
            // loop on data reposietories
            data.forEach((repo) => {
                // console.log(repo.full_/name)
                // create main div element
                let mainDiv = document.createElement("div");
                // create repo text name
                let repoName = document.createTextNode(repo.name);
                // append repo to the mainDiv
                mainDiv.appendChild(repoName);
                
                // create url repo
                let urlRepo = document.createElement("a");
                // create url repo text
                let urlRepoText = document.createTextNode("Visit");
                // append url repo text to the urlrepo
                urlRepo.appendChild(urlRepoText);
                // add the "href"
                urlRepo.href = `https://github.com/${theInput.value}/${repo.name}`;
                // setAttribute blanc
                urlRepo.setAttribute = ("target", "_blank");
                // append urlrepo to the maindiv
                mainDiv.appendChild(urlRepo);

                // create stars count span
                let starsSpan = document.createElement("span");
                // create text stars
                let textStars = document.createTextNode(`Stars ${repo.stargazers_count}`);
                // append startext to span
                starsSpan.appendChild(textStars);
                // append starsspan to the maindiv
                mainDiv.appendChild(starsSpan);

                // add class to maindiv
                mainDiv.className = "repo-box";

                // apped mainDiv to showdata
                reposData.appendChild(mainDiv);
            });
        })
    }
};