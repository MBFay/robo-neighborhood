Describe: convertToNeighborhood()

Test: "It should return an array with a 0 if the number 0 is inputted"
Code: convertToNeighborhood(0);
Expected Output: 0

Test: "It should return an array with a 0 and 'Beep!' if the number 1 is inputted"
code: convertToNeighborhood(1);
Expected Output: [0, "Beep!"]

Test: "It should return an array with a 0, 'Beep!', and 'Boop!' if the number 2 is inputted"
code: convertToNeighborhood(2);
Expected Output: [0, "Beep!", "Boop!"]

Test: "It should return an array with a 0, 'Beep!', 'Boop!', and 'Won't you be my neighbor?' if the number 3 is inputted"
code: convertToNeighborhood(3);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?"]

Test: "It should return an array with a 0, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 4, and 5 if the number 5 is inputted"
code: convertToNeighborhood(5);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5]

Test: "It should return an array with a 0, 'Beep!', 'Boop!', 'Won't you be my neighbor?', 4, 5, 6, 7, 8, 9,'Beep!' if the number 10 is inputted"
code: convertToNeighborhood(10);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!"]