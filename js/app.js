const loadComment = async() =>{
    const url = "https://jsonplaceholder.typicode.com/comments"
    const dataLoad  = await fetch(url);
    const loadJson = await dataLoad.json();
    retriveEachData(loadJson);
}

const retriveEachData = comments =>{
    console.log(comments);
    comments.forEach(element => {
        displayRetrivedData(element);
    });
}

const displayRetrivedData = singleData =>{
    // console.log(singleData)
    const holder = document.getElementById('comment-holder');
    const div  = document.createElement('div')
    div.innerHTML = `
    <h3> ${ singleData.name }</h3>
    <p> ${ singleData.id } </p>
    `
    div.addEventListener('click',async()=>{
        console.log('im clicked');
        const url = `https://jsonplaceholder.typicode.com/comments/${singleData.id}`;
        const datasingleLoad  = await fetch(url);
        const loadsingleJson = await datasingleLoad.json();
        loadSingleData(loadsingleJson);
    })
    holder.appendChild(div);
}

const loadSingleData = (singledata) => {
    const singldataLoader = document.getElementById('specialComment');
    singldataLoader.innerHTML = ` 
    <h2 style="color:red">${singledata.body}</h2>

    `
}