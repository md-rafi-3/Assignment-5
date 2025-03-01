// disabled
const buttons = document.querySelectorAll('.complete-btn');

let count = 0;

for(let i = 0; i<buttons.length;i++){
    const button = buttons[i];
    button.addEventListener('click',function(event){
       count++;
    alert("Board updated successfully!");
       
        event.target.disabled = true;
        event.target.innerText = "Completed";
        const inCompleteTask = document.getElementById('task-done').innerText;
        const convertedInCompleteTask = parseFloat(inCompleteTask);
        const buttonClicked = convertedInCompleteTask - 1;
        document.getElementById('task-done').innerText = buttonClicked;

        const totalTask = document.getElementById('total-task-done').innerText;
        const convertedtotalTask = parseFloat(totalTask);
        const buttonClickedTotalTask = convertedtotalTask + 1;
        document.getElementById('total-task-done').innerText = buttonClickedTotalTask;
       
        if(count === 6){
            alert("Congratulation! You have completed all current tasks..!")
        }
       
               
             
    })
    
}







