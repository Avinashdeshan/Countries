loadItems();

async function loadItems() {

    let res = await fetch("https://restcountries.com/v3.1/all");
    let items = await res.json();
    let body = "";
    items.forEach(element => {
        console.log(element);
        body += `
            <div class="col">
                <div class="card shadow-sm">
                  <img src=${element.flags.png
            } alt="">
                  <div class="card-body">
                  <h2>${element.continents}</h2>
                    <p class="card-text">${element.maps.googleMaps}</p>
                    <p class="card-text">${element.capital}</p>timezones

                    <p class="card-text">${element.name.common
            }</p>
                    <p class="card-text">${element.timezones}</p>
                    <p class="card-text">${element.borders}</p>
                    <p class="card-text">${element.capitalInfo.latlng}</p>
                  </div>
                </div>
              </div>
        `;
    });
    console.log(body);
    document.getElementById("row").innerHTML = body;
}

function searchCountry() {
    console.log("Search!!");
    let txtSearch = document.getElementById("txtSearch").value;

    fetch(`https://restcountries.com/v3.1/name/${txtSearch}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let body = "";
            data.forEach(element => {
                body += `
            <div class="bg-body-tertiary p-5 rounded" style="background-image: url(${element.flags.png}); background-repeat: no-repeat; background-size: cover;">
                <div class="col-sm-8 py-5 mx-auto">
                    <h1 class="display-5 fw-normal text-white">${element.name.common}</h1>
                    <p class="fs-5 text-white">${element.flags.alt}</p>
                    <h2 class="text-white">${element.capital[0]}</h2>
                    <p>From the top down, you'll see a dark navbar, light navbar and a responsive navbar—each with offcanvases built in. Resize your browser window to the large breakpoint to see the toggle for the offcanvas.</p>
                 <p>
                    <a class="btn btn-primary" href="/docs/5.3/components/navbar/#offcanvas" role="button">Learn more about offcanvas navbars &raquo;</a>
                </p>
                </div>
            </div>
            `
            });
            document.getElementById("row").innerHTML = body;
        })
}