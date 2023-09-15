

interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string
    // startTrail: () => string  //interface also have an advantages of having method calling
    startTrail(): string
    getCoupon(couponname: string, value: number): number
}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}


//while assigning values it checks for parameters and their values
const leela: Admin = { dbId: 22, email: "h@h.com", userId: 2211, role: "admin", githubToken: "github",
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name: "hitesh10", off: 10) => {
        return 10
    }
}


leela.email = "h@hc.com"

console.log(leela)
// hitesh.dbId = 33

export{}