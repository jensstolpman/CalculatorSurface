Vue.axios=axios;
new Vue({
    el: '#calculator',
    data: {
        value: 0,
        command: '',
        logs: [],
        errors: []
    },
    newEnter: 0,
    methods: {
        addExpression: function (e) {
            if (this.newEnter==1){
                this.value = '';
                this.newEnter = 0;
            }
            this.value += e;
        },
        getResult: function () {
            var log = this.value;
            this.value = eval(this.value);
            this.logs.push(log + ("=" + this.value));
        },
        clear: function () {
            this.value = 0;
        },
        del: function () {
            this.value = this.value.slice(0, -1);
        },
        enter: function () {
           this.calculate('enter')
        },
        calculate: function (e) {
           this.newEnter = 1;
           this.command=e;
           Vue.axios.post('/Calculator/Calculate', this.$data)
            .then(response => { this.value = response.data.value})
            .catch(e => {
              this.errors.push(e.message)
            })
        }
    }
});