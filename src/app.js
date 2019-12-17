new Vue({
    el: '#app',

    data() {
        return {
            name: 'Bitcoin',
            symbol: 'BTC',
            img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
            changePercent: 0,
            price: 8613,
            pricesWithDays: [{
                    day: 'Lunes',
                    value: 8613
                },
                {
                    day: 'Martes',
                    value: 473
                },
                {
                    day: 'Miércoles',
                    value: 7532
                },
                {
                    day: 'Jueves',
                    value: 8615
                },
                {
                    day: 'Viernes',
                    value: 7613
                },
                {
                    day: 'Sábado',
                    value: 45670
                },
                {
                    day: 'Domingo',
                    value: 78930
                }
            ],
            showPrices: false
        }
    },
    computed: {
        title() {
            return `${this.name} - ${this.symbol}`
        }
    },
    watch: {
        showPrices(newVal, oldVal) {
            console.log(newVal, oldVal)
        }
    },
    methods: {
        toggleShowPrices() {
            this.showPrices = !this.showPrices
        }
    }
})