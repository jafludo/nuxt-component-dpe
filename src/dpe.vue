<template>
    <div id="dpe_div">
        <div class="div_left">
            <div class="legend_top">
                <p>{{ title_haut }}</p>
            </div>
            <div id='etiquette_ener_dpe' class="etiquette">
                <div v-for="(e, index) in dpe">
                    <div class="grp-et">
                        <div class="etiquette_base" :style="'background : ' + e.color + ' ; width: ' + e.width">
                            <p :style="'color : ' + e.colortext + ' ; padding-left: 8px;font-size: 13px;'">{{ e.text }}</p>
                            <p :style="'color : ' + e.colortext + ' ; padding-right: 8px'">{{ e.letter }}</p>
                        </div>
                        <div class="triangle-code" :style="'border-left: 18px solid ' + e.color + ';'"></div>
                    </div>
                    <p class="space_between_class"></p>
                </div>
            </div>
        </div>
        <div class="div_right">
            <div class="legend_top_r" style="font-size: 13px;">
                {{ typeBatiment }}
            </div>
            <div style="width:5rem">
                <div class="space_beetween"></div>
                <div class="grp-et">
                    <div class="triangle-leftcode" :style="'border-right: 18px solid black;'"></div>
                    <div class="slider_number">
                        <p class="number_slider" style="z-index: 9;">{{ this.value }}</p>
                        <div class="aim_line" :style="'width: ' + this.widthDaron + 'px'"></div>
                    </div>
                </div>
                <div v-if="displayunite" class="custom_unite">
                    <p>{{ displayunite }}</p>
                </div>
            </div>
            <div v-if="objectifs" class="">
                <div class="space_beetweenobj"></div>
                <div class="grp-et">
                    <div class="triangle-leftcode" :style="'border-right: 18px solid black;'"></div>
                    <div class="slider_number">
                        <div v-if="multi" class="multiobj">
                            <p class="number_slider" style="z-index: 8;">{{ value }} |</p>
                            <p class="number_slider" style="z-index: 8;color: #ffff00;"> {{ objectifs[indexActif].value }}
                            </p>
                        </div>
                        <div v-else>
                            <p class="number_slider" style="z-index: 8;color: #ffff00;"> {{ objectifs[indexActif].value }}
                            </p>
                        </div>
                        <div class="aim_line" :style="'width: ' + this.widthDaron + 'px'"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="legend_bottom">
            <p>{{ title_bas }}</p>
            <div class="options_bot_right">
                <div v-if="objectifs" id="dropdown">
                    <button id="button_drop" class="droplistbody">
                        <svg @click="objectifsselector" class="objectifs_selector" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 512 512">
                            <path d="M176 64h64v384h-64z" fill="currentColor" />
                            <path d="M80 336h64v112H80z" fill="currentColor" />
                            <path d="M272 272h64v176h-64z" fill="currentColor" />
                            <path d="M368 176h64v272h-64z" fill="currentColor" />
                        </svg>
                    </button>
                    <div id="dropdown_body">
                        <input type="checkbox" style="width: 18px;" id="scales" name="scales" checked>
                        <select @change="onChangeSelect($event)" id="selection_objectifs">
                            <option v-for="(objectif, index) in objectifs" :value="objectif.value">{{ objectif.name
                            }}</option>
                        </select>
                    </div>
                </div>
                <div class='export_div' title="Exporter" v-if="exportMode == 'active'" @click="exporttopng">
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
        </div>
    </div>
</template>
<script lang="js">
import * as htmlToImage from 'html-to-image';
export default {
    name: 'dpe',
    props: ['value', 'exportMode', 'type', 'objectifs', 'displayunite'],
    data() {
        return {
            dpe: [
                { text: "≤ 50", letter: "A", color: "#319834", width: '35%', colortext: 'black', minrange: 0, maxrange: 50.99, min: 0, index: 0 },
                { text: "51 à 90", letter: "B", color: "#33cc31", width: '45%', colortext: 'black', minrange: 51, maxrange: 90.99, min: '2.25rem', index: 1 },
                { text: "91 à 150", letter: "C", color: "#cbfc34", width: '55%', colortext: 'black', minrange: 91, maxrange: 150.99, min: '4.5rem', index: 2 },
                { text: "151 à 230", letter: "D", color: "#fbfe06", width: '65%', colortext: 'black', minrange: 151, maxrange: 230.99, min: '6.75rem', index: 3 },
                { text: "231 à 330", letter: "E", color: "#fbcc05", width: '75%', colortext: 'black', minrange: 231, maxrange: 330.99, min: '9rem', index: 4 },
                { text: "331 à 450", letter: "F", color: "#fc9935", width: '85%', colortext: 'black', minrange: 331, maxrange: 450.99, min: '11.25rem', index: 5 },
                { text: "> 450", letter: "G", color: "#fc0205", width: '100%', colortext: 'white', minrange: 450, maxrange: 9999999999.99, min: '13.5rem', index: 6 },
            ],
            dpeTertiaire: [
                { text: "≤ 50", letter: "A", color: "#319834", width: '34%', colortext: 'black', minrange: 0, maxrange: 50.99, min: 0, index: 0 },
                { text: "51 à 90", letter: "B", color: "#33cc31", width: '41%', colortext: 'black', minrange: 51, maxrange: 90.99, min: '2.25rem', index: 1 },
                { text: "91 à 150", letter: "C", color: "#cbfc34", width: '48%', colortext: 'black', minrange: 91, maxrange: 150.99, min: '4.5rem', index: 2 },
                { text: "150 à 230", letter: "D", color: "#fbfe06", width: '56%', colortext: 'black', minrange: 150, maxrange: 230.99, min: '6.75rem', index: 3 },
                { text: "231 à 330", letter: "E", color: "#fbcc05", width: '64%', colortext: 'black', minrange: 231, maxrange: 330.99, min: '9rem', index: 4 },
                { text: "331 à 450", letter: "F", color: "#fc9935", width: '71%', colortext: 'black', minrange: 331, maxrange: 450.99, min: '11.25rem', index: 5 },
                { text: "451 à 590", letter: "G", color: "#fc0205", width: '78%', colortext: 'black', minrange: 451, maxrange: 590.99, min: '13.5rem', index: 6 },
                { text: "591 à 750", letter: "H", color: "#4d4d4d", width: '85%', colortext: 'black', minrange: 591, maxrange: 750.99, min: '15.75rem', index: 7 },
                { text: "> 750", letter: "I", color: "#000000", width: '100%', colortext: 'white', minrange: 750, maxrange: 9999999999.99, min: '18rem', index: 8 },
            ],
            dpePublic: [
                { text: "≤ 30", letter: "A", color: "#319834", width: '35%', colortext: 'black', minrange: 0, maxrange: 50.99, min: 0, index: 0 },
                { text: "31 à 90", letter: "B", color: "#33cc31", width: '45%', colortext: 'black', minrange: 51, maxrange: 90.99, min: '2.25rem', index: 1 },
                { text: "91 à 170", letter: "C", color: "#cbfc34", width: '55%', colortext: 'black', minrange: 91, maxrange: 170.99, min: '4.5rem', index: 2 },
                { text: "171 à 270", letter: "D", color: "#fbfe06", width: '65%', colortext: 'black', minrange: 171, maxrange: 270.99, min: '6.75rem', index: 3 },
                { text: "271 à 380", letter: "E", color: "#fbcc05", width: '75%', colortext: 'black', minrange: 271, maxrange: 380.99, min: '9rem', index: 4 },
                { text: "381 à 510", letter: "F", color: "#fc9935", width: '85%', colortext: 'black', minrange: 381, maxrange: 510.99, min: '11.25rem', index: 5 },
                { text: "> 510", letter: "G", color: "#fc0205", width: '100%', colortext: 'white', minrange: 510, maxrange: 9999999999.99, min: '13.5rem', index: 6 },
            ],
            dpeBureaux: [
                { text: "≤ 50", letter: "A", color: "#319834", width: '35%', colortext: 'black', minrange: 0, maxrange: 50.99, more: 0, min: 0, index: 0 },
                { text: "51 à 110", letter: "B", color: "#33cc31", width: '45%', colortext: 'black', minrange: 51, maxrange: 110.99, min: '2.25rem', index: 1 },
                { text: "111 à 210", letter: "C", color: "#cbfc34", width: '55%', colortext: 'black', minrange: 111, maxrange: 210.99, min: '4.5rem', index: 2 },
                { text: "211 à 350", letter: "D", color: "#fbfe06", width: '65%', colortext: 'black', minrange: 211, maxrange: 350.99, min: '6.75rem', index: 3 },
                { text: "351 à 540", letter: "E", color: "#fbcc05", width: '75%', colortext: 'black', minrange: 351, maxrange: 540.99, min: '9rem', index: 4 },
                { text: "541 à 750", letter: "F", color: "#fc9935", width: '85%', colortext: 'black', minrange: 541, maxrange: 750.99, min: '11.25rem', index: 5 },
                { text: "> 750", letter: "G", color: "#fc0205", width: '100%', colortext: 'white', minrange: 750, maxrange: 9999999999.99, min: '13.5rem', index: 6 },
            ],
            dpecentre_commerciaux: [
                { text: "≤ 80", letter: "A", color: "#f2eff4", width: '30%', colortext: 'black', minrange: 0, maxrange: 80.0, min: 0, index: 0 },
                { text: "81 à 120", letter: "B", color: "#dfc1f7", width: '40%', colortext: 'black', minrange: 81, maxrange: 120.0, min: '2.25rem', index: 1 },
                { text: "121 à 180", letter: "C", color: "#d6aaf4", width: '50%', colortext: 'black', minrange: 121, maxrange: 180.0, min: '4.5rem', index: 2 },
                { text: "181 à 230", letter: "D", color: "#cc93f4", width: '60%', colortext: 'black', minrange: 181, maxrange: 230.0, min: '6.75rem', index: 3 },
                { text: "231 à 330", letter: "E", color: "#bb72f3", width: '70%', colortext: 'black', minrange: 231, maxrange: 330.0, min: '9rem', index: 4 },
                { text: "331 à 450", letter: "F", color: "#a94cee", width: '80%', colortext: 'black', minrange: 331, maxrange: 450.0, min: '11.25rem', index: 5 },
                { text: "> 450", letter: "G", color: "#8b1ae1", width: '90%', colortext: 'white', minrange: 450, maxrange: 99999999.99, min: '13.5rem', index: 6 },
            ],
            dpeOccContinue: [
                { text: "≤ 100", letter: "A", color: "#319834", width: '35%', colortext: 'black', minrange: 0, maxrange: 100.99, min: 0, index: 0 },
                { text: "101 à 210", letter: "B", color: "#33cc31", width: '45%', colortext: 'black', minrange: 101, maxrange: 210.99, min: '2.25rem', index: 1 },
                { text: "211 à 370", letter: "C", color: "#cbfc34", width: '55%', colortext: 'black', minrange: 211, maxrange: 370.99, min: '4.5rem', index: 2 },
                { text: "371 à 580", letter: "D", color: "#fbfe06", width: '65%', colortext: 'black', minrange: 371, maxrange: 580.99, min: '6.75rem', index: 3 },
                { text: "581 à 830", letter: "E", color: "#fbcc05", width: '75%', colortext: 'black', minrange: 581, maxrange: 830.99, min: '9rem', index: 4 },
                { text: "831 à 1130", letter: "F", color: "#fc9935", width: '85%', colortext: 'black', minrange: 831, maxrange: 1130.99, min: '11.25rem', index: 5 },
                { text: "> 1130", letter: "G", color: "#fc0205", width: '100%', colortext: 'white', minrange: 1130, maxrange: 9999999999.99, min: '13.5rem', index: 6 },
            ],
            assocDPE: [
                { type: 'logement', ref: 'dpe', title_haut: 'Logement économe', title_bas: 'Logement énergivore', typeBatiment: 'Logement' },
                { type: 'tertiaire', ref: 'dpeTertiaire', title_haut: 'Bâtiment économe', title_bas: 'Bâtiment énergivore', typeBatiment: 'Bâtiment' },
                { type: 'public', ref: 'dpePublic', title_haut: 'Bâtiment économe', title_bas: 'Bâtiment énergivore', typeBatiment: 'Bâtiment' },
                { type: 'bureaux', ref: 'dpeBureaux', title_haut: 'Bâtiment économe', title_bas: 'Bâtiment énergivore', typeBatiment: 'Bâtiment' },
                { type: 'centre_commerciaux', ref: 'dpecentre_commerciaux', title_haut: 'Faible émission de GES', title_bas: 'Forte émission de GES', typeBatiment: 'Bâtiment' },
                { type: 'OccContinue', ref: 'dpeOccContinue', title_haut: 'Bâtiment économe', title_bas: 'Bâtiment énergivore', typeBatiment: 'Bâtiment' },
            ],
            widthDaron: 0,
            title_haut: '',
            title_bas: '',
            typeBatiment: '',
            indexActif: 0,
            multi: false
        }
    },
    created() {
        this.$watch('value', (newValue) => {
            this.refreshHeight(newValue, false);
            this.objectifs ? this.checkrange() : '';
        })
    },
    destroyed() {
    },
    mounted() {
        if (typeof window !== 'undefined') {
            //Value
            let dpefind = this.type ? this.assocDPE.find(ass => ass.type == this.type) : this.dpe;
            this.type ? this.dpe = this[dpefind.ref] : this.dpe;
            this.heightCell = (document.getElementById('dpe_div').offsetHeight / this[dpefind.ref].length) - 12;
            dpefind ? this.title_haut = dpefind.title_haut : '';
            dpefind ? this.title_bas = dpefind.title_bas : '';
            dpefind ? this.typeBatiment = dpefind.typeBatiment : '';
            let dperange = this.dpe.find(item => item.minrange <= this.value && item.maxrange >= this.value);
            dperange == undefined ? dperange = this.dpe[this.dpe.length - 1] : '';
            this.widthDaron = document.getElementById('dpe_div').offsetWidth - 24;
            let DynamicHeight = (dperange.index * this.heightCell) + 4 * dperange.index;
            var r = document.querySelector(':root');
            r.style.setProperty('--heightDPE', DynamicHeight + 24 + 'px');
            r.style.setProperty('--heightCell', this.heightCell + 'px');
            r.style.setProperty('--heightTriangle', this.heightCell / 2 + 'px');

            //Objectif
            if (this.objectifs) {
                let dperangeObj = this.dpe.find(item => item.minrange <= parseFloat(this.objectifs[this.indexActif].value) && item.maxrange >= parseFloat(this.objectifs[this.indexActif].value));
                dperangeObj == undefined ? dperangeObj = this.dpe[this.dpe.length - 1] : '';
                let DynamicHeightObj = (dperangeObj.index * this.heightCell) + 4 * dperangeObj.index;
                var r = document.querySelector(':root');
                r.style.setProperty('--heightDPEobj', DynamicHeightObj + 24 + 'px');
            }
        }
    },
    methods: {
        getExportMode: function () {
            return this.exportMode
        },
        setExportMode: function (mode) {
            this.exportMode = mode;
        },
        exporttopng() {
            var node = document.querySelector("#dpe_div");
            let acc = this;
            htmlToImage.toPng(node)
                .then(function (dataUrl) {
                    var link = document.createElement('a');
                    var img = new Image();
                    img.src = dataUrl;
                    link.download = 'etiquette_dpe.jpeg';
                    link.href = dataUrl;
                    link.click();
                    acc.setExportMode('active');
                })
                .catch(function (error) {
                    console.error('oops, something went wrong!', error);
                });
        },
        refreshHeight(newValue, obj = false) {
            //Value
            let dpefind = this.type ? this.assocDPE.find(ass => ass.type == this.type) : this.dpe;
            this.type ? this.dpe = this[dpefind.ref] : this.dpe;
            dpefind ? this.title_haut = dpefind.title_haut : '';
            dpefind ? this.title_bas = dpefind.title_bas : '';
            dpefind ? this.typeBatiment = dpefind.typeBatiment : '';
            if (obj == false) {
                this.value = newValue;
                let dperange = this.dpe.find(item => item.minrange <= this.value && item.maxrange >= this.value);
                dperange == undefined ? dperange = this.dpe[this.dpe.length - 1] : '';
                this.widthDaron = document.getElementById('dpe_div').offsetWidth - 24;
                let DynamicHeight = (dperange.index * this.heightCell) + 4 * dperange.index;
                var r = document.querySelector(':root');
                r.style.setProperty('--heightDPE', DynamicHeight + 24 + 'px')
            }

            //Objectif
            if (obj == true && this.objectifs) {
                let dperangeObj = this.dpe.find(item => item.minrange <= parseFloat(this.objectifs[this.indexActif].value) && item.maxrange >= parseFloat(this.objectifs[this.indexActif].value));
                dperangeObj == undefined ? dperangeObj = this.dpe[this.dpe.length - 1] : '';
                let DynamicHeightObj = (dperangeObj.index * this.heightCell) + 4 * dperangeObj.index;
                var r = document.querySelector(':root');
                r.style.setProperty('--heightDPEobj', DynamicHeightObj + 24 + 'px');
            }
        },
        objectifsselector: function () {
            let visibility = document.getElementById('dropdown_body').style.visibility;
            visibility == 'visible' ? document.getElementById('dropdown_body').setAttribute("style", "visibility:hidden;") : document.getElementById('dropdown_body').setAttribute("style", "visibility:visible;");
        },
        onChangeSelect: function (e) {
            this.objectifs.map((objectif, index) => {
                if (objectif.value == e.target.value) {
                    this.indexActif = index;
                    this.refreshHeight(parseInt(objectif.value), true);
                    this.checkrange();
                }
            })
        },
        checkrange() {
            let dperangevalue = this.dpe.find(item => item.minrange <= this.value && item.maxrange >= this.value);
            let dperangeobj = this.dpe.find(item => item.minrange <= this.objectifs[this.indexActif].value && item.maxrange >= this.objectifs[this.indexActif].value);
            dperangevalue.index == dperangeobj.index ? this.multi = true : this.multi = false;
        }
    }
}
</script>
<style lang="scss">
:root {
    --heightDPE: 0px;
    --heightDPEobj: 0px;
    --heightCell: 2rem;
    --heightTriangle: 1rem;
}

#dpe_div {
    position: relative;
    min-height: fit-content;
    height: fit-content;
    width: 100%;
    display: flex;


    .options_bot_right {
        display: flex;

        .objectifs_selector {
            cursor: pointer;
        }

    }

    #dropdown {
        position: relative;
    }

    #dropdown_body {
        display: flex;
        position: absolute;
        visibility: hidden;
        background-color: white;
        min-width: 5rem;
        -webkit-box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.75);
        box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.75);
        -webkit-border-radius: 8px;
        -moz-border-radius: 8px;
        border-radius: 8px;
        margin-top: 1px;
        padding: 8px;
        font: 10px;
        right: 0px;
        bottom: 100%;
    }

    #selection_objectifs {
        padding-left: 8px;
    }

    .space_beetween {
        height: var(--heightDPE);
    }

    .space_beetweenobj {
        height: var(--heightDPEobj);
    }

    .custom_unite {
        font-size: 10px;
        font-weight: bold;
        text-align: right;
        padding-top: 4px;
    }

    .number_slider {
        margin-right: 4px;
    }

    .multiobj {
        display: flex;
        font-size: 9.5px;
    }

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

    .legend_top {
        height: 24px;
        text-align: initial;
    }

    .legend_bottom {
        display: flex;
        bottom: 0;
        position: absolute;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    .export_div {
        cursor: pointer;
        right: 0;
        margin-right: 8px;
    }

    .div_right {
        display: flex;
        justify-content: flex-end;
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
        padding: 0px;
        padding-left: 2px;
        z-index: 2;
    }

    .space_between_class {
        padding: 2px 0px 2px 0px;
    }

    .etiquette {
        .etiquette_base {
            height: var(--heightCell);
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
        }
    }

    .triangle-code {
        border-top: var(--heightTriangle) solid transparent;
        border-bottom: var(--heightTriangle) solid transparent;
    }

    .triangle-leftcode {
        border-top: var(--heightTriangle) solid transparent;
        border-bottom: var(--heightTriangle) solid transparent;
    }

    .aim_line {
        border-style: dotted;
        border-color: black;
        border-width: 1px;
        position: absolute;
        right: 0;
        z-index: -2;
    }


}
</style>