let inputArray = [];

function addToArray() {
    let input = document.getElementById("email").value;
    if (input.trim() !== "") {
        inputArray.push(input);
        document.getElementById("email").value = "";
        console.log("Current array:", inputArray);
    }
}

//u user eamples
const user1  = ["Male", "Strongly agree", "Night Owl"];
const user2 = ["Female", "Agree" , "Early bird"];
const user3 = ["Male", "Strongly agree", "Night Owl"];
const user4 = ["Male", "Strongly disagree", "Early bird"];
const user5 = ["Female", "Neutral", "Night Owl"];
const user6 = ["Female", "Neutral", "Early bird"];

let myArray = [];

function addToArray() {
    let selectedGender = document.querySelector('input[name="gender"]:checked');
    if (selectedGender) {
        console.log("Selected gender:", selectedGender.value);
        myArray.push(selectedGender.value);
        console.log("Current array:", myArray);
        updateResult();
        selectedGender.checked = false;
    } else {
        console.log("No gender selected");
        alert("Please select an option")
    }
}

function updateResult() {
    console.log("updateResult function called");
    document.getElementById("result").innerHTML = "Array: " + myArray.join(", ");
}




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