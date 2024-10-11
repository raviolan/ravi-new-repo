const monthNames = {
    "January": "jahanuahary",
    "February": "fekibruahary",
    "March": "maharch",
    "April": "ahapril",
    "May": "mahay",
    "June": "juneki",
    "July": "july",
    "August": "ahaugust",
    "September": "sekiptekimbekir",
    "October": "octobekir",
    "November": "novekimbekir",
    "December": "dekicekimbekir"
};

// Get the current date
const now = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };

// Format the date to get the full month name
const formattedDate = now.toLocaleDateString('en-US', options);

// Split the date to get the month name
const [month, day, year] = formattedDate.split(' ');

// Replace the month name using the mapping
const customMonth = monthNames[month] || month;

// Create the final date string
const customDateString = `${customMonth} ${day}, ${year}`;

// Display the date in the designated field
document.getElementById('dateField').innerText = customDateString;