import { series } from './data.js';
import { Serie } from './Serie.js';

const seriesTbody: HTMLElement = document.getElementById("series")!;

function renderSeriesInTable(series: Serie[]): void {
  series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.id}</td>
                           <td>${c.name}</td>
                           <td>${c.chanel}</td>
                           <td>${c.seasons}</td>`;
  seriesTbody.appendChild(trElement);
  });
}

function getTotalSeasons(series: Serie[]): number {
  let totalSeason: number = 0;
  let totalSeries: number = 0;
  series.forEach((serie) => totalSeries = totalSeries + 1);
  series.forEach((serie) => totalSeason = totalSeason + serie.seasons);
  if (totalSeries === 0) {
    return 0;
  }
  let average: number = 0;
  average = totalSeason / totalSeries;
  return totalSeason;
}

function renderTotalSeasons(series: Serie[]): void {
  const totalSeasons = getTotalSeasons(series);
  const totalSeasonsElement = document.createElement("p");
  totalSeasonsElement.textContent = `Seasons average: ${totalSeasons}`;
  
  const averageContainer = document.getElementById("seasons-average")!;
  averageContainer.appendChild(totalSeasonsElement); 
}

renderSeriesInTable(series);
renderTotalSeasons(series);
