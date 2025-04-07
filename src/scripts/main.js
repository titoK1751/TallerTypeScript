import { series } from './data.js';
const seriesTbody = document.getElementById("series");
const detailContainer = document.getElementById("detail");
function renderSeriesInTable(series) {
    series.forEach(c => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${c.id}</td>
                          <td>${c.name}</td>
                          <td>${c.chanel}</td>
                          <td>${c.seasons}</td>`;
        trElement.addEventListener("click", () => renderSerieDetail(c));
        seriesTbody.appendChild(trElement);
    });
}
function renderSerieDetail(serie) {
    detailContainer.innerHTML = `<div class="card" style="width: 18rem;">
                               <img class="card-img-top" src="${serie.image}" alt="${serie.name}">
                               <div class="card-body">
                               <h5 class="card-title">${serie.name}</h5>
                               <p class="card-text">${serie.description}</p>
                               <a href="${serie.url}" class="btn btn-primary" target="_blank">Go to ${serie.chanel}</a>
                                </div>
                                </div>`;
}
function getAverageSeasons(series) {
    let totalSeason = 0;
    let totalSeries = 0;
    series.forEach((serie) => totalSeries = totalSeries + 1);
    series.forEach((serie) => totalSeason = totalSeason + serie.seasons);
    if (totalSeries === 0) {
        return 0;
    }
    let average = 0;
    average = totalSeason / totalSeries;
    return average;
}
function renderAverageSeasons(series) {
    const averageSeasons = getAverageSeasons(series);
    const averageSeasonsElement = document.createElement("p");
    averageSeasonsElement.textContent = `Seasons average: ${averageSeasons}`;
    const averageContainer = document.getElementById("seasons-average");
    averageContainer.appendChild(averageSeasonsElement);
}
renderSeriesInTable(series);
renderAverageSeasons(series);
