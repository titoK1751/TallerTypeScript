import { series } from './data.js';
import { Serie } from './Serie.js';

const seriesTbody: HTMLElement = document.getElementById("series")!;
const detailContainer: HTMLElement = document.getElementById("detail")!;

function renderSeriesInTable(series: Serie[]): void {
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

function renderSerieDetail(serie: Serie): void {
  detailContainer.innerHTML = `<div class="card" style="width: 18rem;">
                               <img class="card-img-top" src="${serie.image}" alt="${serie.name}">
                               <div class="card-body">
                               <h5 class="card-title">${serie.name}</h5>
                               <p class="card-text">${serie.description}</p>
                               <a href="${serie.url}" class="btn btn-primary" target="_blank">Go to ${serie.chanel}</a>
                                </div>
                                </div>`;
}

function getAverageSeasons(series: Serie[]): number {
  let totalSeason: number = 0;
  let totalSeries: number = 0;
  series.forEach((serie) => totalSeries = totalSeries + 1);
  series.forEach((serie) => totalSeason = totalSeason + serie.seasons);
  if (totalSeries === 0) {
    return 0;
  }
  let average: number = 0;
  average = totalSeason / totalSeries;
  return average;
}

function renderAverageSeasons(series: Serie[]): void {
  const averageSeasons = getAverageSeasons(series);
  const averageSeasonsElement = document.createElement("p");
  averageSeasonsElement.textContent = `Seasons average: ${averageSeasons}`;
  
  const averageContainer = document.getElementById("seasons-average")!;
  averageContainer.appendChild(averageSeasonsElement); 
}

renderSeriesInTable(series);
renderAverageSeasons(series);
