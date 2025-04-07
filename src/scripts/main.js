import { series } from './data.js';
const seriesTbody = document.getElementById("series");
function renderSeriesInTable(series) {
    series.forEach(c => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${c.id}</td>
                           <td>${c.name}</td>
                           <td>${c.chanel}</td>
                           <td>${c.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
}
function getTotalSeasons(series) {
    let totalSeason = 0;
    let totalSeries = 0;
    series.forEach((serie) => totalSeries = totalSeries + 1);
    series.forEach((serie) => totalSeason = totalSeason + serie.seasons);
    if (totalSeries === 0) {
        return 0;
    }
    let average = 0;
    average = totalSeason / totalSeries;
    return totalSeason;
}
function renderTotalSeasons(series) {
    const totalSeasons = getTotalSeasons(series);
    const totalSeasonsElement = document.createElement("p");
    totalSeasonsElement.textContent = `Seasons average: ${totalSeasons}`;
    const averageContainer = document.getElementById("seasons-average");
    averageContainer.appendChild(totalSeasonsElement);
}
renderSeriesInTable(series);
renderTotalSeasons(series);
