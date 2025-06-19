const seriesData = {
  goYounjung: {
    name: "Go Younjung",
    series: ["Alchemy of Souls", "Moving", "Sweet Home", "Law School"],
  },
  kimHyeyoon: {
    name: "Kim Hye-yoon",
    series: [
      "Extraordinary You",
      "Snowdrop",
      "SKY Castle",
      "Secret Royal Inspector & Joy",
    ],
  },
  kimYoojung: {
    name: "Kim Yoo-jung",
    series: [
      "Love in the Moonlight",
      "Backstreet Rookie",
      "The 8th Night",
      "My Demon",
    ],
  },
  kimHyewon: {
    name: "Kim Hye-won",
    series: [
      "You Raise Me Up",
      "Love Revolution",
      "My ID is Gangnam Beauty",
      "School 2021",
    ],
  },
  shinEunsoo: {
    name: "Shin Eun-soo",
    series: [
      "The Legend of the Blue Sea",
      "Bad Papa",
      "SF8",
      "The Moment the Heart Shines",
    ],
  },
};

function showSeries(actressKey) {
  const container = document.getElementById("series-container");
  const actress = seriesData[actressKey];
  const html = `
    <h3>${actress.name}'s Series:</h3>
    <ul>
      ${actress.series.map((series) => `<li>${series}</li>`).join("")}
    </ul>
  `;
  container.innerHTML = html;
}
