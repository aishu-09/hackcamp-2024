let inputArray = [];

function addToArray() {
    let input = document.getElementById("email").value;
    if (input.trim() !== "") {
        inputArray.push(input);
        document.getElementById("email").value = "";
        console.log("Current array:", inputArray);
    }
}

let users = [];
let gender = "";
let cleanliness = "";
let sleepTime = "";
let name = "";

function addGender() {
    let selectedGender = document.querySelector('input[name="gender"]:checked');
    if (selectedGender) {
        gender = selectedGender.value
    }
}

function addCleanliness() {
    let selectedClean = document.querySelector('input[name="clealiness"]:checked');
    if (selectedClean) {
        cleanliness = selectedClean.value
    }
}

function addSleepTime() {
    let selectedSleepTime = document.querySelector('input[name="sleep-time"]:checked');
    if (selectedSleepTime) {
        sleepTime = selectedSleepTime.value
    }
}

function addName() {
    let selectedName = document.getElementById('name');
    if (selectedName.value.trim() !== "") {
        name = selectedName.value.trim();
    }
}

function submitForm() {
    addName();
    addGender();
    addCleanliness();
    addSleepTime();

    if (name && gender && cleanliness && sleepTime) {
        let user = [name, gender, cleanliness, sleepTime];
        users.push(user);
        console.log("New user added:", user);
        console.log("All users:", users);
        
        // Clear the form
        document.getElementById('name').value = '';
        document.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false);
        
        // Reset variables
        name = gender = cleanliness = sleepTime = "";

        // Optionally, update some UI element to show the user was added
        document.getElementById('result').textContent = `User ${name} added successfully!`;
    } else {
        alert("Please fill in all fields");
    }

    window.location.href = 'match-page.html';
}


//u user eamples
// const user1  = ["Male", "Strongly agree", "Night Owl"];
// const user2 = ["Female", "Agree" , "Early bird"];
// const user3 = ["Male", "Strongly agree", "Night Owl"];
// const user4 = ["Male", "Strongly disagree", "Early bird"];
// const user5 = ["Female", "Neutral", "Night Owl"];
// const user6 = ["Female", "Neutral", "Early bird"];

// console.log(user7)
// const userList = [user2, user3, user4, user5, user6]


// function compareUsers(user1, usersArray) {
//   // Initialize an array to store the matching user objects
//   let matchingUsers = [];

//   // Iterate through the users array
//   for (let i = 0; i < usersArray.length; i++) {
//     const user = usersArray[i];
//     let hasMatch = false;  // Track if there was any match
    
//     // Compare each property of user1 with the current user
//     for (let key1 in user1) {
//       for (let key2 in user) {
//         if (user1[key1] === user[key2]) {
//           hasMatch = true;
//           matchingUsers.push(user);
//           break; // Exit once we find a match
//         }
//       }
//       if (hasMatch) 
//         break; // Exit the outer loop if a match is found
//     }
//   }
  
//   return matchingUsers;
// }

// const result = compareUsers(user1, userList);

// if (result.length > 0) {
//   console.log("Matching users:", result);
// } else {
//   console.log("No match found.");
// }