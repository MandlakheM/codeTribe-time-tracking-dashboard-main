let nameSurname = "Jeremy Robson";

document.getElementById("name").textContent = nameSurname;

window.addEventListener("load", function () {
  showTimes("weekly");
});

document.getElementById("daily").addEventListener("click", function () {
  showTimes("daily");
});

document.getElementById("weekly").addEventListener("click", function () {
  showTimes("weekly");
});

document.getElementById("monthly").addEventListener("click", function () {
  showTimes("monthly");
});

function showTimes(period) {
  const activities = {
    work: {
      daily: { current: 5, previous: 7 },
      weekly: { current: 32, previous: 36 },
      monthly: { current: 103, previous: 128 },
    },
    play: {
      daily: { current: 1, previous: 2 },
      weekly: { current: 10, previous: 8 },
      monthly: { current: 23, previous: 29 },
    },
    study: {
      daily: { current: 0, previous: 1 },
      weekly: { current: 4, previous: 7 },
      monthly: { current: 13, previous: 19 },
    },
    exercise: {
      daily: { current: 1, previous: 1 },
      weekly: { current: 4, previous: 5 },
      monthly: { current: 11, previous: 18 },
    },
    social: {
      daily: { current: 1, previous: 3 },
      weekly: { current: 5, previous: 10 },
      monthly: { current: 21, previous: 23 },
    },
    selfCare: {
      daily: { current: 0, previous: 1 },
      weekly: { current: 2, previous: 2 },
      monthly: { current: 7, previous: 11 },
    },
  };

  Object.keys(activities).forEach((activity) => {
    document.getElementById(
      `${activity}-current`
    ).textContent = `${activities[activity][period].current} hrs`;
    document.getElementById(
      `${activity}-previous`
    ).textContent = `Last Week - ${activities[activity][period].previous}hrs`;
  });
}
