// 1st btn
document.getElementById('mobile-btn').addEventListener('click',function(){
    const title = document.getElementById('mobile-title').innerText;
    console.log(title);

    const history = document.getElementById('main-container')
    const newDiv = document.createElement('div');
    newDiv.classList.add("bg-[#f4f7ff]","rounded-xl","p-4","mb-3");
    newDiv.innerHTML= `       
                    <p class="text-sm">You have completed the task <span id="task-title"></span> at <span id="time-display"></span> </p>
    `
   newDiv.querySelector('#task-title').innerText=title;
   newDiv.querySelector('#time-display').innerText = getTime ();
   
   history.appendChild(newDiv);


});

// 2nd btn
document.getElementById('dark-btn').addEventListener('click',function(){
    const title = document.getElementById('dark-title').innerText;
    console.log(title);

    const history = document.getElementById('main-container')
    const newDiv = document.createElement('div');
    newDiv.classList.add("bg-[#f4f7ff]","rounded-xl","p-4","mb-3");
    newDiv.innerHTML= `       
                    <p class="text-sm">You have completed the task <span id="task-title"></span> at <span id="time-display"></span> </p>
    `
   newDiv.querySelector('#task-title').innerText=title;
   newDiv.querySelector('#time-display').innerText = getTime ();
   
   history.appendChild(newDiv);


});

// 3rd btn

document.getElementById('homepage-btn').addEventListener('click',function(){
    const title = document.getElementById('homepage-title').innerText;
    console.log(title);

    const history = document.getElementById('main-container')
    const newDiv = document.createElement('div');
    newDiv.classList.add("bg-[#f4f7ff]","rounded-xl","p-4","mb-3");
    newDiv.innerHTML= `       
                    <p class="text-sm">You have completed the task <span id="task-title"></span> at <span id="time-display"></span> </p>
    `
   newDiv.querySelector('#task-title').innerText=title;
   newDiv.querySelector('#time-display').innerText = getTime ();
   
   history.appendChild(newDiv);


});

// 4th btn
document.getElementById('emoji-btn').addEventListener('click',function(){
    const title = document.getElementById('emoji-title').innerText;
    console.log(title);

    const history = document.getElementById('main-container')
    const newDiv = document.createElement('div');
    newDiv.classList.add("bg-[#f4f7ff]","rounded-xl","p-4","mb-3");
    newDiv.innerHTML= `       
                    <p class="text-sm">You have completed the task <span id="task-title"></span> at <span id="time-display"></span> </p>
    `
   newDiv.querySelector('#task-title').innerText=title;
   newDiv.querySelector('#time-display').innerText = getTime ();
   
   history.appendChild(newDiv);


});

// 5th btn
document.getElementById('ai-btn').addEventListener('click',function(){
    const title = document.getElementById('ai-title').innerText;
    console.log(title);

    const history = document.getElementById('main-container')
    const newDiv = document.createElement('div');
    newDiv.classList.add("bg-[#f4f7ff]","rounded-xl","p-4","mb-3");
    newDiv.innerHTML= `       
                    <p class="text-sm">You have completed the task <span id="task-title"></span> at <span id="time-display"></span> </p>
    `
   newDiv.querySelector('#task-title').innerText=title;
   newDiv.querySelector('#time-display').innerText = getTime ();
   
   history.appendChild(newDiv);


});

// 6th btn
document.getElementById('job-btn').addEventListener('click',function(){
    const title = document.getElementById('job-title').innerText;
    console.log(title);

    const history = document.getElementById('main-container')
    const newDiv = document.createElement('div');
    newDiv.classList.add("bg-[#f4f7ff]","rounded-xl","p-4","mb-3");
    newDiv.innerHTML= `       
                    <p class="text-sm">You have completed the task <span id="task-title"></span> at <span id="time-display"></span> </p>
    `
   newDiv.querySelector('#task-title').innerText=title;
   newDiv.querySelector('#time-display').innerText = getTime ();
   
   history.appendChild(newDiv);


});

document.getElementById('clear').addEventListener('click',function(){
    document.getElementById('main-container').classList.add('hidden');
});




