import imgSrc from "../assets/imeges/deep_blue_1.jpg";
import imgSrc2 from "../assets/imeges/deep_blue_2.jpg";
import imgSrc3 from "../assets/imeges/deep_blue_3.jpg";

import db1 from "../assets/music/zapsplat_pack_lukas_tvrdon_deep_dive_2_freebie_mp3/lukas_tvrdon_Bubbles_Lapp_Gas_Detail_Drips_Boiling_Flowing_Underwater_Dive_Deep_2_Freebie_088.mp3";
import db2 from "../assets/music/zapsplat_pack_lukas_tvrdon_deep_dive_2_freebie_mp3/lukas_tvrdon_Otherworld_Flat_Ghostly_Breaths_Spacious_Eerie_Drone_Evolving_Flowing_Underwater_Dive_Deep_2_Freebie_076.mp3";
import db3 from "../assets/music/zapsplat_pack_lukas_tvrdon_deep_dive_2_freebie_mp3/lukas_tvrdon_Otherworld_Flat_Nether_Passage_2_Dark_Spacious_Trickling_Eerie_Drone_Flowing_Underwater_Dive_Deep_2_Freebie_078.mp3";

let initialState = {
    songs: [
        {
            title: "Bubbles Lapp",
            artist: "ZapSplat",
            audioSrc: db1,
            image: imgSrc,
            color: "#00aeb0"
        },
        {
            title: "Otherworld Flat Ghostly",
            artist: "ZapSplat",
            audioSrc: db2,
            image: imgSrc2,
            color: "#ffb77a"
        },
        {
            title: "Otherworld Flat Nether",
            artist: "ZapSplat",
            audioSrc: db3,
            image: imgSrc3,
            color: "#5f9fff"
        }
    ]
}

const musicPage = (state = initialState, action) => {
    switch(action.type){

        default: return state;
    }
}

export default musicPage;