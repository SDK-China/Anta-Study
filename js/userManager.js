const createUserManager = () => {
    let users = []
    let loginUser = null

    
    // let autoLogin = false
    try {
        const data = window.localStorage.getItem("users");
        if (data !== null) {
            const array = JSON.parse(data);
            Object.prototype.toString.call(JSON.parse(data)) === "[object Array]" && (users = array);
        }
    } catch (e) {
        users = []
        throw e
    }

    try {
        const user = window.localStorage.getItem("loginUser")
        if (user !== null) loginUser = JSON.parse(user)
    } catch(e) {
        loginUser = null
        throw e
    }
    
    // try {
    //     const str = window.localStorage.getItem("autoLogin")
    //     if (str !== "1") {
    //         window.localStorage.removeItem("loginUser")
    //     }
    // } catch(e) {
    //     window.localStorage.removeItem("loginUser")
    //     throw e
    // }

    const userManager = {
        users,
        loginUser,
        
        setUser(user) {
            if (this.users.length >= 10) return
                this.users.push(user);
            try {
                window.localStorage.setItem("users", JSON.stringify(this.users))
                return true
            } catch(e) {
                this.users.pop()
                return false
            }
        },
       
        toLogin(user) {
            if (this.users.indexOf(user) !== -1) {
                this.loginUser = user;
                window.localStorage.setItem("loginUser", JSON.stringify(user))
            }
        }
    }

    return userManager
}