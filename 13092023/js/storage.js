
function fnPersistirUsers(){
    let str = JSON.stringify(g_users);
    localStorage.setItem("tmp-users", str);
}

const fnPersistUsers = () => {
    let str = JSON.stringify(g_users);
    localStorage.setItem("tmp-users", str);
}

function add(a, b){
    return a + b;
}

const add2 = (a, b) => a + b

function mult2(a){
    return a * 2;
}

const mult2x = a => a *2
