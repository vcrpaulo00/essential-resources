function externa() {

        function interna(){
            console.log('Interna!')
        }

        interna();

        console.log('Externa')
}

externa();