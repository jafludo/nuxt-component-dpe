<template>
    <div id="ges_div" class="flex">
        <div class="div_left">
            <div class="legend_top">
                <p>Logement économe</p>
            </div>
            <div id='etiquette_ener' class="etiquette">
                <div v-for="(e, index) in dpe" :key="refreshGES">
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
                <p>Logement énergivore</p>
            </div>
        </div>
        <div class="div_right">
            <div class="legend_top_r">
                Logement
            </div>
            <div class="space_beetween"></div>
            <div class="grp-et">
                <div class="triangle-leftcode" :style="'border-right: 24px solid black;'"></div>
                <div class="slider_number">
                    <p style="z-index: 8;">{{ valueGES }}</p>
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
    name: 'ges',
    props: ['valueGES', 'exportMode', 'typeGES'],
    data() {
        return {
            ges: [
                { text: "≤ 5", letter: "A", color: "#f2eff4" },
                { text: "6 à 15", letter: "B", color: "#dfc1f7" },
                { text: "16 à 30", letter: "C", color: "#d6aaf4" },
                { text: "31 à 60", letter: "D", color: "#cc93f4" },
                { text: "61 à 100", letter: "E", color: "#bb72f3" },
                { text: "101 à 145", letter: "F", color: "#a94cee" },
                { text: "> 145", letter: "G", color: "#8b1ae1" },
            ],
            gesTertiaire: [
                { text: "≤ 5", letter: "A", color: "#f2eff4" },
                { text: "6 à 15", letter: "B", color: "#dfc1f7" },
                { text: "16 à 30", letter: "C", color: "#d6aaf4" },
                { text: "31 à 60", letter: "D", color: "#cc93f4" },
                { text: "61 à 100", letter: "E", color: "#bb72f3" },
                { text: "101 à 145", letter: "F", color: "#a94cee" },
                { text: "> 145", letter: "G", color: "#8b1ae1" },
            ],
            gesPublic: [
                { text: "≤ 5", letter: "A", color: "#f2eff4" },
                { text: "6 à 15", letter: "B", color: "#dfc1f7" },
                { text: "16 à 30", letter: "C", color: "#d6aaf4" },
                { text: "31 à 60", letter: "D", color: "#cc93f4" },
                { text: "61 à 100", letter: "E", color: "#bb72f3" },
                { text: "101 à 145", letter: "F", color: "#a94cee" },
                { text: "> 145", letter: "G", color: "#8b1ae1" },
            ],
            gesBureaux: [
                { text: "≤ 5", letter: "A", color: "#f2eff4" },
                { text: "6 à 15", letter: "B", color: "#dfc1f7" },
                { text: "16 à 30", letter: "C", color: "#d6aaf4" },
                { text: "31 à 60", letter: "D", color: "#cc93f4" },
                { text: "61 à 100", letter: "E", color: "#bb72f3" },
                { text: "101 à 145", letter: "F", color: "#a94cee" },
                { text: "> 145", letter: "G", color: "#8b1ae1" },
            ],
            gesOccContinue: [
                { text: "≤ 5", letter: "A", color: "#f2eff4" },
                { text: "6 à 15", letter: "B", color: "#dfc1f7" },
                { text: "16 à 30", letter: "C", color: "#d6aaf4" },
                { text: "31 à 60", letter: "D", color: "#cc93f4" },
                { text: "61 à 100", letter: "E", color: "#bb72f3" },
                { text: "101 à 145", letter: "F", color: "#a94cee" },
                { text: "> 145", letter: "G", color: "#8b1ae1" },
            ],
            assocGES: [
                { type: 'logement', ref: 'ges' },
                { type: 'tertiaire', ref: 'gesTertiaire' },
                { type: 'public', ref: 'gesPublic' },
                { type: 'bureaux', ref: 'gesBureaux' },
                { type: 'OccContinue', ref: 'gesOccContinue' },
            ],
            widthDaron: 0,
            exportMode: null,
            refreshGES: 0
        }
    },
    created() {
    },
    destroyed() {
    },
    mounted() {
        let gesfind = this.typeGES ? this.assocGES.find(ass => ass.type == this.typeGES) : this.ges;
        this.typeDPE ? this.dpe = this[dpefind.ref] : this.ges;
        dpefind = this.typeGES ? this.assocGES.find(ass => ass.type == this.typeGES) : this.fes;
        this.typeGES ? this.ges = this[gesfind.ref] : this.ges;
        let gesrange = this.ges.find(item => item.minrange <= this.valueGES && item.maxrange >= this.valueGES);
        gesrange == undefined ? gesrange = this.ges[this.ges.length - 1] : '';
        this.widthDaron = document.getElementById('ges_div').offsetWidth;
        let DynamicHeight = gesrange.min;
        var r = document.querySelector(':root');
        r.style.setProperty('--height', (DynamicHeight) + "px");
        this.refreshGES++;
    },
    computed: {
    },
    methods: {
        exporttopng() {
            var node = document.querySelector("#ges_div");
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

#ges_div {
    position: relative;
    max-height: fit-content;
    height: fit-content;
    width: 100%;

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
        height: 1px;
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