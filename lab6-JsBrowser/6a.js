(function() {
    let val = document.getElementById("value");
    let res = document.getElementById("result");
    let unitSelect = document.getElementById("unit");


    function getUnit(unitSelect) {
        var unit;
        for ( var i = 0, len = unitSelect.options.length; i < len; i++ ) {
            unit = unitSelect.options[i];
            if ( unit.selected === true ) {
                break;
            }
        }
        return unit.value;
    }

    document.getElementById('convert').onclick = function () {
        let unit = getUnit(unitSelect);
        if(unit === "c"){
            res.textContent = (val.value*1.8)+32 + " °F";
        }else{
             res.textContent = (val.value-32)/1.8 + " °C";
        }
    }
    
}());

