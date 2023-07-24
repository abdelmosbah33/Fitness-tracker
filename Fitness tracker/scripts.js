const activitiesData = [
    { name: "Running", duration: 30, date: "2023-07-15" },
    { name: "Weightlifting", duration: 45, date: "2023-07-16" },
    // Add more sample activities here
];

// Function to display activities in the UI
function displayActivities() {
    const activitiesList = document.getElementById("activities-list");
    activitiesList.innerHTML = "";
    
    activitiesData.forEach(activity => {
        const activityItem = document.createElement("li");
        activityItem.textContent = `${activity.name} - ${activity.duration} minutes on ${activity.date}`;
        activitiesList.appendChild(activityItem);
    });
}

// Function to add a new activity
function addActivity() {
    const activityName = document.getElementById("activity-name").value;
    const activityDuration = document.getElementById("activity-duration").value;
    const activityDate = document.getElementById("activity-date").value;

    activitiesData.push({
        name: activityName,
        duration: activityDuration,
        date: activityDate
    });

    displayActivities();
}

// Function to create a progress chart
function createProgressChart() {
    const ctx = document.getElementById("progress-chart").getContext("2d");

    const dates = activitiesData.map(activity => activity.date);
    const durations = activitiesData.map(activity => activity.duration);

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [{
                label: 'Activity Duration (minutes)',
                data: durations,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function initApp() {
    displayActivities();
    createProgressChart();

    const addButton = document.getElementById("add-activity-btn");
    addButton.addEventListener("click", addActivity);
}

initApp(); 