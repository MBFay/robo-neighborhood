# Mr. Roboger's Neighborhood (Epicodus Project)

#### _DATE CREATED NOV 21, 2021_

#### ✒️ By _**Matthew Banse-Fay**_

## 📋 Description

A webpage that takes a number and converts it to an array of words and numbers based on their digits. (Epicodus Project)

## ⚙️ Setup/Installation Requirements 

Software Requirements
* An internet browser of your choice
* A code or text editor

Open via Github Pages, Downloading or Cloning
* Navigate to: https://mbfay.github.io/robo-neighborhood
* Or download this repository to your computer by clicking the green Code button and 'Download Zip'
* Or clone the repository

Setup Instructions 
* Open HTML file with preferred browser


## 🐜 Known Bugs

This project has no known bugs. 

## ☎️ Support and Contact Details

Please feel free to contact me with issues anytime at <matthew.bansefay@gmail.com>

## 💾 Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript / jQuery

### License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Copyright (c) 2021 **_Matthew Banse-Fay_**

## Tests

>**Describe:** convertToNeighborhood()  
>>**Test:** "It should return an array with a 0 if the number 0 is inputted"  
>**Code:** convertToNeighborhood(0);  
>**Expected Output:** 0  
>
>>**Test**: "It should return an array with a 0 and 'Beep!' if the number 1 is inputted"  
>**Code**: convertToNeighborhood(1);  
>**Expected Output:** [0, "Beep!"]  
>
>>**Test**: "It should return an array with a 0, 'Beep!', and 'Boop!' if the number 2 is inputted"  
>**Code**: convertToNeighborhood(2);  
>**Expected Output:** [0, "Beep!", "Boop!"]  
>
>>**Test:** "It should return an array with a 0, 'Beep!', 'Boop!', and 'Won't you be my neighbor?' if the number 3 is inputted"  
>**Code:** convertToNeighborhood(3);  
>**Expected Output:** [0, "Beep!", "Boop!", "Won't you be my neighbor?"]  
>
>>**Test:** "It should return an array with a 0, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 4, and 5 if the number 5 is inputted"  
>**Code:** convertToNeighborhood(5);  
>**Expected Output**: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5]  
>
>>**Test:** "It should return an array with a 0, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 4, 5, 6, 7, 8, 9,'Beep!' if the number 10 is inputted"  
>**Code:** convertToNeighborhood(10);  
>**Expected Output:** [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!"]
>
>>**Test:** "It should return an array with a 0, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 4, 5, 6, 7, 8, 9,'Beep!', 'Beep!', 'Boop!', 'Won't you be my neighbor?', 'Beep!','Beep!','Beep!','Beep!','Beep!','Beep!','Boop!' if the number 20 is inputted"  
>**Code**: convertToNeighborhood(20);  
>**Expected Output**: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!', "Won't you be my neighbor?", "Beep!', "Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Boop!']