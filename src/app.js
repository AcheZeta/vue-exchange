new Vue({
    el: '#app',

    data() {
        return {
            name: 'Bitcoin',
            img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
            changePercent: 0,
            pricesWithDays: [{
                    day: 'Lunes',
                    value: 8613
                },
                {
                    day: 'Martes',
                    value: 41373
                },
                {
                    day: 'Miércoles',
                    value: 45768
                },
                {
                    day: 'Jueves',
                    value: 56780
                },
                {
                    day: 'Viernes',
                    value: 19942
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
    methods: {
        toggleShowPrices() {
            this.showPrices = !this.showPrices
        }
    }
})