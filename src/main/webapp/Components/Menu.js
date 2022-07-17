document.write(`
    <script type="text/x-template" id = "menu-template">
      <div id = "calc-menu">
        <button class="menu-btn" @click="toCalc()">Calc</button>
        <button class="menu-btn" @click="toCalc()">Conf</button>
      </div>
    </script>

    <style>
        #calc-menu {
            color:#D4D4D2;
        }
    </style>
`);

Vue.component('calc-menu', {
        template: '#menu-template',
        data() {
            return {
                decimals: 4,
            }
        },
        methods: {
            toCalc: function() {
            },
            toConf: function() {
            },
        }
});