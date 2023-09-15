

interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}

interface Story {
    createStory(): void
}

class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
    detail(): void{
        console.log(this.cameraMode," ", this.filter, " ", this.burst)
    }

    get check(): string{
        return "ok"
    }
}

const obj = new Instagram("selfie","dark",200)
obj.check
obj.detail()


class Youtube implements TakePhoto, Story{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string
    ){}

    createStory(): void {
        console.log("Story was created");
        
    }
}

const obj1 = new Youtube("selfie","dark",200,"low")
obj1.createStory