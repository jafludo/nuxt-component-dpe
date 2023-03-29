<template>
    <div id="dpe_div">
        <div class="div_left">
            <div class="legend_top">
                <p>{{ title_haut }}</p>
            </div>
            <div id='etiquette_ener' class="etiquette">
                <div v-for="(e, index) in dpe">
                    <div class="grp-et">
                        <div class="etiquette_base" :style="'background : ' + e.color + ' ; width: ' + e.width">
                            <p :style="'color : ' + e.colortext + ' ; padding-left: 8px'">{{ e.text }}</p>
                            <p :style="'color : ' + e.colortext + ' ; padding-right: 8px'">{{ e.letter }}</p>
                        </div>
                        <div class="triangle-code" :style="'border-left: 24px solid ' + e.color + ';'"></div>
                    </div>
                    <p class="space_between_class"></p>
                </div>
            </div>
            <div class="legend_bottom">
                <p>{{ title_bas }}</p>
            </div>
        </div>
        <div class="div_right">
            <div class="legend_top_r">
                {{ typeBatiment }}
            </div>
            <div class="space_beetween"></div>
            <div class="grp-et">
                <div class="triangle-leftcode" :style="'border-right: 24px solid black;'"></div>
                <div class="slider_number">
                    <p style="z-index: 8;">{{ value }}</p>
                    <div class="aim_line" :style="'width: ' + this.widthDaron + 'px'"></div>
                </div>
            </div>
        </div>
        <div class='export_div' v-if="exportMode == 'active'" @click="exporttopng">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g fill="none" fill-rule="evenodd">
                    <path
                        d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                    <path fill="currentColor"
                        d="M13.586 2a2 2 0 0 1 1.284.467l.13.119L19.414 7a2 2 0 0 1 .578 1.238l.008.176V12h-2v-2h-4.5a1.5 1.5 0 0 1-1.493-1.356L12 8.5V4H6v16h6v2H6a2 2 0 0 1-1.995-1.85L4 20V4a2 2 0 0 1 1.85-1.995L6 2h7.586Zm5.121 12.464l2.828 2.829a1 1 0 0 1 0 1.414l-2.828 2.828a1 1 0 1 1-1.414-1.414L18.414 19H14a1 1 0 1 1 0-2h4.414l-1.121-1.121a1 1 0 0 1 1.414-1.415ZM14 4.414V8h3.586L14 4.414Z" />
                </g>
            </svg>
        </div>
        <div v-else></div>
    </div>
</template>
<script lang="js">
import * as htmlToImage from 'html-to-image';
export default {
    name: 'dpe',
    props: ['value', 'exportMode', 'type'],
    data() {
        return {
            dpe: [
                { text: "≤ 50", letter: "A", color: "#319834", width: '35%', colortext: 'black', minrange: 0, maxrange: 50, min: 0 },
                { text: "51 à 90", letter: "B", color: "#33cc31", width: '45%', colortext: 'black', minrange: 51, maxrange: 90, min: 36 },
                { text: "91 à 150", letter: "C", color: "#cbfc34", width: '55%', colortext: 'black', minrange: 91, maxrange: 150, min: 72 },
                { text: "151 à 230", letter: "D", color: "#fbfe06", width: '65%', colortext: 'black', minrange: 151, maxrange: 230, min: 108 },
                { text: "231 à 330", letter: "E", color: "#fbcc05", width: '75%', colortext: 'black', minrange: 231, maxrange: 330, min: 144 },
                { text: "331 à 450", letter: "F", color: "#fc9935", width: '85%', colortext: 'black', minrange: 331, maxrange: 450, min: 180 },
                { text: "> 450", letter: "G", color: "#fc0205", width: '100%', colortext: 'white', minrange: 450, maxrange: 9999, min: 216 },
            ],
            dpeTertiaire: [
                { text: "≤ 50", letter: "A", color: "#319834", width: '34%', colortext: 'black', minrange: 0, maxrange: 50, min: 0 },
                { text: "51 à 90", letter: "B", color: "#33cc31", width: '41%', colortext: 'black', minrange: 51, maxrange: 90, min: 36 },
                { text: "91 à 150", letter: "C", color: "#cbfc34", width: '48%', colortext: 'black', minrange: 91, maxrange: 150, min: 72 },
                { text: "150 à 230", letter: "D", color: "#fbfe06", width: '56%', colortext: 'black', minrange: 150, maxrange: 230, min: 108 },
                { text: "231 à 330", letter: "E", color: "#fbcc05", width: '64%', colortext: 'black', minrange: 231, maxrange: 330, min: 144 },
                { text: "331 à 450", letter: "F", color: "#fc9935", width: '71%', colortext: 'black', minrange: 331, maxrange: 450, min: 180 },
                { text: "451 à 590", letter: "G", color: "#fc0205", width: '78%', colortext: 'black', minrange: 451, maxrange: 590, min: 216 },
                { text: "591 à 750", letter: "H", color: "#4d4d4d", width: '85%', colortext: 'black', minrange: 591, maxrange: 750, min: 252 },
                { text: "> 750", letter: "I", color: "#000000", width: '100%', colortext: 'white', minrange: 750, maxrange: 9999, min: 288 },
            ],
            dpePublic: [
                { text: "≤ 30", letter: "A", color: "#319834", width: '35%', colortext: 'black', minrange: 0, maxrange: 30, min: 0 },
                { text: "31 à 90", letter: "B", color: "#33cc31", width: '45%', colortext: 'black', minrange: 51, maxrange: 90, min: 36 },
                { text: "91 à 170", letter: "C", color: "#cbfc34", width: '55%', colortext: 'black', minrange: 91, maxrange: 170, min: 72 },
                { text: "171 à 270", letter: "D", color: "#fbfe06", width: '65%', colortext: 'black', minrange: 171, maxrange: 270, min: 108 },
                { text: "271 à 380", letter: "E", color: "#fbcc05", width: '75%', colortext: 'black', minrange: 271, maxrange: 380, min: 144 },
                { text: "381 à 510", letter: "F", color: "#fc9935", width: '85%', colortext: 'black', minrange: 381, maxrange: 510, min: 180 },
                { text: "> 510", letter: "G", color: "#fc0205", width: '100%', colortext: 'white', minrange: 510, maxrange: 9999, min: 214 },
            ],
            dpeBureaux: [
                { text: "≤ 50", letter: "A", color: "#319834", width: '35%', colortext: 'black', minrange: 0, maxrange: 50, more: 0, min: 0 },
                { text: "51 à 110", letter: "B", color: "#33cc31", width: '45%', colortext: 'black', minrange: 51, maxrange: 110, min: 36, max: 72 },
                { text: "111 à 210", letter: "C", color: "#cbfc34", width: '55%', colortext: 'black', minrange: 111, maxrange: 210, min: 72, max: 108 },
                { text: "211 à 350", letter: "D", color: "#fbfe06", width: '65%', colortext: 'black', minrange: 211, maxrange: 350, min: 108, max: 144 },
                { text: "351 à 540", letter: "E", color: "#fbcc05", width: '75%', colortext: 'black', minrange: 351, maxrange: 540, min: 144, max: 180 },
                { text: "541 à 750", letter: "F", color: "#fc9935", width: '85%', colortext: 'black', minrange: 541, maxrange: 750, min: 180, max: 214 },
                { text: "> 750", letter: "G", color: "#fc0205", width: '100%', colortext: 'white', minrange: 750, maxrange: 9999, min: 214, max: 250 },
            ],
            dpeOccContinue: [
                { text: "≤ 100", letter: "A", color: "#319834", width: '35%', colortext: 'black', minrange: 0, maxrange: 100, min: 0 },
                { text: "101 à 210", letter: "B", color: "#33cc31", width: '45%', colortext: 'black', minrange: 101, maxrange: 210, min: 36 },
                { text: "211 à 370", letter: "C", color: "#cbfc34", width: '55%', colortext: 'black', minrange: 211, maxrange: 370, min: 72 },
                { text: "371 à 580", letter: "D", color: "#fbfe06", width: '65%', colortext: 'black', minrange: 371, maxrange: 580, min: 108 },
                { text: "581 à 830", letter: "E", color: "#fbcc05", width: '75%', colortext: 'black', minrange: 581, maxrange: 830, min: 144 },
                { text: "831 à 1130", letter: "F", color: "#fc9935", width: '85%', colortext: 'black', minrange: 831, maxrange: 1130, min: 180 },
                { text: "> 1130", letter: "G", color: "#fc0205", width: '100%', colortext: 'white', minrange: 1130, maxrange: 9999, min: 214 },
            ],
            assocDPE: [
                { type: 'logement', ref: 'dpe', title_haut: 'Logement économe', title_bas: 'Logement énergivore', typeBatiment: 'Logement' },
                { type: 'tertiaire', ref: 'dpeTertiaire', title_haut: 'Bâtiment économe', title_bas: 'Bâtiment énergivore', typeBatiment: 'Bâtiment' },
                { type: 'public', ref: 'dpePublic', title_haut: 'Bâtiment économe', title_bas: 'Bâtiment énergivore', typeBatiment: 'Bâtiment' },
                { type: 'bureaux', ref: 'dpeBureaux', title_haut: 'Bâtiment économe', title_bas: 'Bâtiment énergivore', typeBatiment: 'Bâtiment' },
                { type: 'OccContinue', ref: 'dpeOccContinue', title_haut: 'Bâtiment économe', title_bas: 'Bâtiment énergivore', typeBatiment: 'Bâtiment' },
            ],
            widthDaron: 0,
            title_haut: '',
            title_bas: '',
            typeBatiment: ''
        }
    },
    created() {
    },
    destroyed() {
    },
    mounted() {
        let dpefind = this.type ? this.assocDPE.find(ass => ass.type == this.type) : this.dpe;
        this.type ? this.dpe = this[dpefind.ref] : this.dpe;
        dpefind = this.type ? this.assocDPE.find(ass => ass.type == this.type) : this.dpe;
        this.type ? this.dpe = this[dpefind.ref] : this.dpe;
        dpefind ? this.title_haut = dpefind.title_haut : '';
        dpefind ? this.title_bas = dpefind.title_bas : '';
        dpefind ? this.typeBatiment = dpefind.typeBatiment : '';
        let dperange = this.dpe.find(item => item.minrange <= this.value && item.maxrange >= this.value);
        dperange == undefined ? dperange = this.dpe[this.dpe.length - 1] : '';
        this.widthDaron = document.getElementById('dpe_div').offsetWidth - 24;
        let DynamicHeight = dperange.min;
        var r = document.querySelector(':root');
        r.style.setProperty('--height', (DynamicHeight) + "px");
    },
    computed: {
    },
    methods: {
        exporttopng() {
            var node = document.querySelector("#dpe_div");
            let acc = this;
            this.exportMode = ''
            htmlToImage.toPng(node)
                .then(function (dataUrl) {
                    var link = document.createElement('a');
                    var img = new Image();
                    img.src = dataUrl;
                    link.download = 'etiquette.jpeg';
                    link.href = dataUrl;
                    link.click();
                    acc.exportMode = 'active'
                })
                .catch(function (error) {
                    console.error('oops, something went wrong!', error);
                });
        }
    }
}
</script>
<style lang="scss">
:root {
    --height: 216px;
}

.space_beetween {
    height: var(--height);
}

#dpe_div {
    position: relative;
    max-height: fit-content;
    height: fit-content;
    width: 100%;
    display: flex;

    * {
        margin: 0;
    }

    .grp-et {
        display: flex;
    }

    .div_left {
        width: 100%;
        z-index: 5;
    }

    .div_right {
        display: flex;
        flex-direction: column;
        height: 100%;
        position: relative;
    }

    .slider_number {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: black;
        color: white;
        width: 100%;
        z-index: 2;
    }

    .space_between_class {
        padding: 2px 0px 2px 0px;
    }

    .etiquette {
        .etiquette_base {
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
        }
    }

    .triangle-code {
        border-top: 16px solid transparent;
        border-bottom: 16px solid transparent;
    }

    .triangle-leftcode {
        border-top: 16px solid transparent;
        border-bottom: 16px solid transparent;
    }

    .aim_line {
        border-style: dotted;
        border-color: black;
        border-width: 1px;
        position: absolute;
        right: 0;
        z-index: 1;
    }

    .export_div {
        position: absolute;
        bottom: 0;
        right: 0;
        cursor: pointer;
    }
}
</style>