const loadRandomUser  = async()=>{
    const url = "https://randomuser.me/api/?results=30"
    const loadedRandomUser = await fetch(url);
    const randomuserJson = await loadedRandomUser.json();
    logData(randomuserJson.results);

}

const logData = (data) =>{
    data.forEach(singleuser => {
        console.log(singleuser.name.first);
        
    });

}

console.log("result is ::"  )
loadRandomUser();