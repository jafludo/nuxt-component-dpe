<template>
    <div id="dpe_div" class="flex">
        <div class="div_left">
            <div class="legend_top">
                <p>Logement économe</p>
            </div>
            <div id='etiquette_ener' class="etiquette">
                <div v-for="(e, index) in dpe" :key="index">
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
                    <p style="z-index: 8;">{{ valueDPE }}</p>
                    <div class="aim_line" :style="'width: ' + this.widthDaron + 'px'"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="js">
export default {
    name: 'DpeGes',
    props: ['isdpe', 'valueDPE', 'others'],
    data() {
        return {
            dpe: [
                { text: "≤ 50", letter: "A", color: "#319834", width: '35%', colortext: 'black', minrange: 0, maxrange: 50, more: 0, min: 0 },
                { text: "51 à 110", letter: "B", color: "#33cc31", width: '45%', colortext: 'black', minrange: 51, maxrange: 110, more: 4, min: 36, max: 72 },
                { text: "111 à 210", letter: "C", color: "#cbfc34", width: '55%', colortext: 'black', minrange: 111, maxrange: 210, more: 8, min: 72, max: 108 },
                { text: "211 à 350", letter: "D", color: "#fbfe06", width: '65%', colortext: 'black', minrange: 211, maxrange: 350, more: 12, min: 108, max: 144 },
                { text: "351 à 540", letter: "E", color: "#fbcc05", width: '75%', colortext: 'black', minrange: 351, maxrange: 540, more: 16, min: 144, max: 180 },
                { text: "541 à 750", letter: "F", color: "#fc9935", width: '85%', colortext: 'black', minrange: 541, maxrange: 750, more: 20, min: 180, max: 214 },
                { text: "> 750", letter: "G", color: "#fc0205", width: '100%', colortext: 'white', minrange: 750, maxrange: 9999, more: 24, min: 214, max: 250 },
            ],
            ges: [
                { text: "≤ 5", letter: "A", color: "#f2eff4" },
                { text: "6 à 15", letter: "B", color: "#dfc1f7" },
                { text: "16 à 30", letter: "C", color: "#d6aaf4" },
                { text: "31 à 60", letter: "D", color: "#cc93f4" },
                { text: "61 à 100", letter: "E", color: "#bb72f3" },
                { text: "101 à 145", letter: "F", color: "#a94cee" },
                { text: "> 145", letter: "G", color: "#8b1ae1" },
            ],
            widthDaron: 0,
        }
    },
    created() {
    },
    destroyed() {
    },
    mounted() {
        let dpefind = this.dpe.find(item => item.minrange <= this.valueDPE && item.maxrange >= this.valueDPE);
        dpefind == undefined ? dpefind = this.dpe[this.dpe.length - 1] : '';
        console.log(dpefind)
        this.widthDaron = document.getElementById('dpe_div').offsetWidth;
        let heightDaron = document.getElementById('etiquette_ener').offsetHeight;
        // let step = (dpefind.max / (dpefind.maxrange - dpefind.minrange));
        let DynamicHeight = dpefind.min;
        console.log(DynamicHeight)
        var r = document.querySelector(':root');
        r.style.setProperty('--height', (DynamicHeight) + "px");
    },
    methods: {
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
}
</style>