//Q1.Write an asynchronous function that accepts a message string and a delay time in milliseconds.
// The function should log the message to the console after the specified delay time.

async function messageDetail(message, delayTime) {
 await new Promise(resolve => setTimeout(resolve,delayTime));
 console.log(message);
} 
messageDetail("You will make it.",2000)


//Q2.You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given a user ID. 
// Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.


const userIds = [2061, 2040, 2066, 2045];
function getUserData(id) {
 return newPromise((resolve, reject) =>{
 setTimeout(() => {
 
 const userData = { id, name: `User ${id}` };
 resolve(userData);
 }, 1500);
 });
}
async function logUserData(){
 for (const userId of userIds) {
 try {
 const userData = await getUserData(userId);
 console.log(`User ID ${userId}: ${userData.name}`);
 } catch (error) {
 console.error(`Error fetching data for User ID ${userId}: ${error.message}`);
 }
 }
 }
 logUserData()

//Q3.You have an asynchronous function performTask() that returns a Promise. 
// The Promise resolves if the task is successful and rejects if there's an error. Write a function that calls performTask()
// and logs a custom success message if the task is successful, and a custom error message if there's an error.


async function performTask() {
 return new Promise((resolve, reject) => {
 setTimeout(() => {
 
 resolve('Succeful');
 reject('An error occured')
 
 },1500);
 });
}

const newTask = async ()=>{
 
 try{
 performTask
 console.log('message: Successful');
 }catch{
 console.log('error:An error occured');
 }
}
newTask();

//Q4. Retry Logic:
// Scenario:
// Write a function unstableTask that:

// 1.Accepts a taskName and failureProbability (a number between 0 and 1).
// 2. Returns a Promise that:
// Resolves immediately with a success message if a randomly generated number is greater than failureProbability.
// Rejects immediately with a failure message if a randomly generated number is less than or equal to failureProbability.
// Write another function executeWithRetry that:

// Accepts a taskName, retries, and failureProbability.
// Uses a retry mechanism to attempt the unstableTask up to retries times.
// Logs whether the task succeeded or failed after all attempts.


function unstableTask(taskName, failureProbability){
 return new Promise((resolve, reject) => {
 const randomValue = Math.random();
 if (randomValue > failureProbability) {
 
 resolve(`Task "${taskName}" succeeded`);
 } else {
 reject(new Error(`Task "${taskName}" failed`));
 }
 });
}
async function executeWithRetry(taskName, retries, failureProbability){
 for (let attempt = 2; attempt => retries; attempt++) {
 try {
 await unstableTask(taskName, failureProbability);
 console.log(`Attempt ${attempt}: Task "${taskName}" succeeded`);
 return;
 } catch (error) {
 console.error(`Attempt ${attempt}: ${error.message}`);
 }
 }
 console.log(`All ${retries} attempts failed for task "${taskName}"`);
}
 
executeWithRetry('Runtime', 2, 0);

function LeanersTrackingProgress() {
    this.quizzes = {};
    this.progress = {};
    this.addQuiz = function(language, proficiencyLevel, quiz) {
        var key = language + " " + proficiencyLevel;
        if (!this.quizzes[key]) {
            this.quizzes[key] = [];
        }
        this.quizzes[key].push(quiz);
    };
    this.getQuizzes = function(language, proficiencyLevel) {
        var key = language + " " + proficiencyLevel;
        return this.quizzes[key]? this.quizzes[key] : [];
    };
    this.trackProgress = function(userId, correctAnswers) {
        if (!this.progress[userId]) {
            this.progress[userId] = 0;
        }
        this.progress[userId] += correctAnswers;
    };
    this.getProgress = function(userId) {
        return this.progress[userId] || 0;
    };
}
function main() {
    var app = new LeanersTrackingProgress();
    app.addQuiz("Kotlin", "Intermediate", "How do you use pointers to reverse a string?");
    app.addQuiz("Python", "Beginner", "How does split work?");
    var user1 = "Linet";
    app.trackProgress(user1, 2);
    console.log("User " + user1 + " progress: " + app.getProgress(user1) + " correct answers");
    var englishIntermediateQuizzes = app.getQuizzes("Kotlin", "Intermediate");
    console.log("Kotlin Intermediate Quizzes:");
    englishIntermediateQuizzes.forEach(function(quiz, index) {
        console.log((index + 1) + ". " + quiz);
    });
    var user2 = "Karen";
    app.trackProgress(user2, 2);
    console.log("User " + user2 + " progress: " + app.getProgress(user2) + " correct answers");
    var javaScriptBeginnerQuizzes = app.getQuizzes("Python", "Beginner");
    console.log("Python Beginner Quizzes:");
    javaScriptBeginnerQuizzes.forEach(function(quiz, index) {
        console.log((index + 1) + ". " + quiz);
    });
}
main()


class Weather {
    constructor(windspeed, temperature, humidity) {
        this.windspeed = windspeed;
        this.temperature = temperature;
        this.humidity = humidity;
    }
}

class City {
    constructor(name) {
        this.name = name;
        this.weatherData = [];
    }

    addWeather(windspeed, temperature, humidity) {
        const weather = new Weather(windspeed, temperature, humidity);
        this.weatherData.push(weather);
    }

    getWeatherData() {
        return this.weatherData;
    }
}

// Example usage
const city = new City("New York");
city.addWeather(10.5, 22.3, 65.0);
city.addWeather(12.0, 24.1, 70.0);//

console.log(`Weather data for ${city.name}:`);
city.getWeatherData().forEach(weather => {
    console.log(`Windspeed: ${weather.windspeed}, Temperature: ${weather.temperature}, Humidity: ${weather.humidity}`);
}); 


