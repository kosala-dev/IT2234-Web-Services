//write recursive function to print numbers from 1 to n
function recursive(n) {
    if (n <= 0) {
        console.log("Invalid");
        return;
    }
    recursive(n - 1); 
    console.log(n);   
}
recursive(5);
