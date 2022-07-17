document.write(`
    <script type="text/x-template" id = "conf-template">
      <div id = "configurator">
        <p>About page</p>
      </div>
    </script>

    <script type="text/x-template" id = "configurator-template">
        <configurator>
        </configurator>
    </script>
    <style>
    </style>
`);

Vue.component('configurator', {
        template: '#configurator-template',
        data() {
            return {
                decimals: 4,
            }
        },
        methods: {

        }
});