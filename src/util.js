import { v4 as uuidv4 } from "uuid";

function chillHop(){

    return [

        {
            name: "Bravo",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/49da9d86e294b025a386f0366188c4429b5562a0-1024x1024.jpg",
            artist: "Moose Dawa",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=12997",
            color: [ "#393940", "#D19375"],
            id: uuidv4(),
            active: true, 
        },

        {
            name: "Longing",
            cover: "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
            artist: "Makzo",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11777",
            color: [ "#31508E", "#E78B73"],
            id: uuidv4(),
            active: false, 

        },

        {
            name: "Today Feels Like Everyday",
            cover: "https://chillhop.com/wp-content/uploads/2021/01/6b1bb8736ee3e972747bc11f312e31cf7f5823e4-1024x1024.jpg",
            artist: "Mama Aiuto",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=12128",
            color: [ "#101D25", "#1B5968"],
            id: uuidv4(),
            active: false, 

        },

        {
            name: "Splendour",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",
            artist: "Aarigod",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=13013",
            color: [ "#5F7C3D", "#AAC370"],
            id: uuidv4(),
            active: false, 

        },

        {
            name: "ebb//flo",
            cover: "https://chillhop.com/wp-content/uploads/2020/07/5c2d5b05dfc98afb5ed850ca918f732445b8ca1e-1024x1024.jpg",
            artist: "invention_",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=8741",
            color: [ "#513C61", "#6E8DA1"],
            id: uuidv4(),
            active: false, 

        },

        {
            name: "Sugarless",
            cover: "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
            artist: "The Field Tapes, Aviino",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11243",
            color: [ "#363B56", "#95B0B0"],
            id: uuidv4(),
            active: false, 

        },

        {
            name: "Going Back",
            cover: "https://chillhop.com/wp-content/uploads/2020/10/737bb830d34592344eb4a2a1d2c006cdbfc811d9-1024x1024.jpg",
            artist: "Swørn",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10310",
            color: [ "#335561", "#DDE2E8"],
            id: uuidv4(),
            active: false, 

        },
    ]
}

export default chillHop;