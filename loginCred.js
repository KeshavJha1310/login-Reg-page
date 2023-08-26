document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login').addEventListener('submit',function(event){
        event.preventDefault();
        var hasAccount = login();
        if (hasAccount){
            window.location.href = "http://127.0.0.1:5500/welcome.html";
    const clearLocalStorageAfter = 60000; // 1 min in milliseconds
    console.log("deleting.....")
            setTimeout(function() {
                localStorage.clear(); // Clear all data from localStorage
                console.log('localStorage has been cleared.');
            }, clearLocalStorageAfter);
            console.log("deleted")
        }else{
            alert('No such Account Exist!')
        }
    })

    function login(){
        var user = document.getElementById('user').value
        var userpassword = document.getElementById('userpassword').value
        const userinlocalasString =  localStorage.getItem('userName')
        const userInLocal = JSON.parse(userinlocalasString)
        console.log(userInLocal)
        const passwordinlocalasString = localStorage.getItem('Password')
        const passwordInLocal = JSON.parse(passwordinlocalasString)
        console.log(passwordInLocal)
        if(userInLocal === null || passwordInLocal === null){
            return false
        }else{
        for (var i = 0; i < userInLocal.length; i++) {
            // console.log(userInLocal[i])
            // console.log(passwordInLocal[i])
            if (userInLocal[i] === user && passwordInLocal[i] === userpassword) {
                alert('Successfully Logged in!');
                return true;
            }
        }
    }
        return false
    }
});