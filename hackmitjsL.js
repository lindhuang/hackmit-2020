// json string of computer data
var computerdata = '{"computers":{"Surface Book":{ "off": "0.49", "sleep":"2.03", "idle":"7.10", "active":"23.06","Power supply efficiency":"0.856"},"Surface Go":{ "off": "0.38","sleep":"1.55","idle":"5.79","active":"18.60","Power supply efficiency":"0.878"},"Surface Laptop":{ "off": "0.23","sleep":"1.16","idle":"5.05","active":"15.70","Power supply efficiency":"0.87"}, "Macbook air":{ "off": "0.17","sleep":"0.73","idle":"4.0","active":"8.8","Power supply efficiency":"0.877"}}}';
var computerJson = JSON.parse(computerdata);
// jsoon string of state data
var statedata = '{"states": {"AL": {"Coal": "0.247","Natural Gas":"0.346","Petroleum":"0.001","Renewable":"0.084","Nuclear":"0.322"},"AK": {"Coal": "0.187","Natural Gas":"0.456","Petroleum":"0.087","Renewable":"0.269","Nuclear":"0"},"AZ": {"Coal": "0.305","Natural Gas":"0.278","Petroleum":"0.001","Renewable":"0.111","Nuclear":"0.305"}, "AR": {"Coal": "0.483","Natural Gas":"0.251","Petroleum":"0.001","Renewable":"0.052","Nuclear":"0.214"   },"CA": {"Coal": "0","Natural Gas":"0.394","Petroleum":"0","Renewable":"0.487","Nuclear":"0.118"   },"CO": {"Coal": "0.523","Natural Gas":"0.258","Petroleum":"0","Renewable":"0.218","Nuclear":"0"   },"CT": {"Coal": "0.012","Natural Gas":"0.408","Petroleum":"0.009","Renewable":"0.055","Nuclear":"0.515"   },"DE" : {"Coal": "0.096","Natural Gas":"0.839","Petroleum":"0.044","Renewable":"0.021","Nuclear":"0"   },"FL": {"Coal": "0.156","Natural Gas":"0.156","Petroleum":"0.011","Renewable":"0.043","Nuclear":"0.151"   },"GA": {"Coal": "0.291","Natural Gas":"0.337","Petroleum":"0.002","Renewable":"0.055","Nuclear":"0.315"   },"HI": {"Coal": "0.16","Natural Gas":"0","Petroleum":"0.726","Renewable":"0.113","Nuclear":"0"   },"ID": {"Coal": "0","Natural Gas":"0.154","Petroleum":"0","Renewable":"0.846","Nuclear":"0"   },"IL": {"Coal": "0.326","Natural Gas":"0.075","Petroleum":"0","Renewable":"0.061","Nuclear":"0.538"   },"IN":  {"Coal": "0.757","Natural Gas":"0.188","Petroleum":"0.001","Renewable":"0.054","Nuclear":"0"   },"IA":  {"Coal": "0.476","Natural Gas":"0.087","Petroleum":"0.001","Renewable":"0.349","Nuclear":"0.087"   },"KS":  {"Coal": "0.43","Natural Gas":"0.056","Petroleum":"0.001","Renewable":"0.033","Nuclear":"0.183"   },"KY":  {"Coal": "0.798","Natural Gas":"0.148","Petroleum":"0.001","Renewable":"0.053","Nuclear":"0"   },"LA": {"Coal": "0.197","Natural Gas":"0.454","Petroleum":"0.069","Renewable":"0.018","Nuclear":"0.263"   },"ME": {"Coal": "0.017","Natural Gas":"0.151","Petroleum":"0.021","Renewable":"0.811","Nuclear":"0"   },"MD": {"Coal": "0.27","Natural Gas":"0.244","Petroleum":"0.008","Renewable":"0.101","Nuclear":"0.377"   },"MA":  {"Coal": "0","Natural Gas":"0.6","Petroleum":"0.02","Renewable":"0.178","Nuclear":"0.202"   },"MI": {"Coal": "0.397","Natural Gas":"0.233","Petroleum":"0.014","Renewable":"0.077","Nuclear":"0.279"   },"MN": {"Coal": "0.406","Natural Gas":"0.113","Petroleum":"0.001","Renewable":"0.224","Nuclear":"0.141"   },"MS": {"Coal": "0.117","Natural Gas":"0.736","Petroleum":"0.001","Renewable":"0.006","Nuclear":"0.129"   },"MO":  {"State":"MO","Coal": "0.753","Natural Gas":"0.075","Petroleum":"0.001","Renewable":"0.041","Nuclear":"0.322"   },"MT": {"Coal": "0.52","Natural Gas":"0.019","Petroleum":"0.025","Renewable":"0.435","Nuclear":"0"},"NE": {"Coal": "0.647","Natural Gas":"0.026","Petroleum":"0.001","Renewable":"0.17","Nuclear":"0.156"},"NV": {"Coal": "0.085","Natural Gas":"0.628","Petroleum":"0","Renewable":"0.286","Nuclear":"0"},"NH": {"Coal": "0.045","Natural Gas":"0.128","Petroleum":"0.01","Renewable":"0.209","Nuclear":"0.608"},"NJ": {"Coal": "0.025","Natural Gas":"0.441","Petroleum":"0.002","Renewable":"0.031","Nuclear":"0.5"},"NM": {"Coal": "0.44","Natural Gas":"0.333","Petroleum":"0.001","Renewable":"0.227","Nuclear":"0"},"NY": {"Coal": "0.006","Natural Gas":"0.346","Petroleum":"0.012","Renewable":"0.274","Nuclear":"0.363"},"NC": {"Coal": "0.252","Natural Gas":"0.274","Petroleum":"0.006","Renewable":"0.112","Nuclear":"0.355"},"ND": {"Coal": "0.693","Natural Gas":"0.023","Petroleum":"0.001","Renewable":"0.282","Nuclear":"0"},"OH": {"Coal": "0.512","Natural Gas":"0.289","Petroleum":"0.015","Renewable":"0.021","Nuclear":"0.162"},"OK": {"Coal": "0.216","Natural Gas":"0.43","Petroleum":"0","Renewable":"0.353","Nuclear":"0"},"OR": {"Coal": "0.028","Natural Gas":"0.236","Petroleum":"0","Renewable":"0.735","Nuclear":"0"},"PA": {"Coal": "0.233","Natural Gas":"0.278","Petroleum":"0.004","Renewable":"0.049","Nuclear":"0.435"},"RI": {"Coal": "0","Natural Gas":"0.931","Petroleum":"0.001","Renewable":"0.059","Nuclear":"0"},"SC": {"Coal": "0.204","Natural Gas":"0.182","Petroleum":"0.003","Renewable":"0.049","Nuclear":"0.566"},"SD": {"Coal": "0.21","Natural Gas":"0.084","Petroleum":"0.01","Renewable":"0.706","Nuclear":"0"},"TN": {"Coal": "0.271","Natural Gas":"0.13","Petroleum":"0.002","Renewable":"0.121","Nuclear":"0.476"},"TX": {"Coal": "0.292","Natural Gas":"0.419","Petroleum":"0","Renewable":"0.182","Nuclear":"0.107"},"UT": {"Coal": "0.717","Natural Gas":"0.171","Petroleum":"0.01","Renewable":"0.111","Nuclear":"0"},"VT": {"Coal": "0","Natural Gas":"0","Petroleum":"0.002","Renewable":"0.998","Nuclear":"0"},"VA": {"Coal": "0.124","Natural Gas":"0.438","Petroleum":"0.011","Renewable":"0.069","Nuclear":"0.358"},"WA": {"Coal": "0.056","Natural Gas":"0.079","Petroleum":"0","Renewable":"0.769","Nuclear":"0.096"},"WV": {"Coal": "0.941","Natural Gas":"0.017","Petroleum":"0.002","Renewable":"0.04","Nuclear":"0"},"WI": {"Coal": "0.542","Natural Gas":"0.209","Petroleum":"0.003","Renewable":"0.078","Nuclear":"0.168"},"WY": {"Coal": "0.898","Natural Gas":"0.004","Petroleum":"0.001","Renewable":"0.097","Nuclear":"0"}},"equiv": {"Coal": "2.21","Natural Gas":"0.92","Petroleum":"2.11","Renewable":"0.011","Nuclear":"0.009"}}';
var stateJson = JSON.parse(statedata);

function buildDropdown(json, ddName)
{
    // get the dropdown list
    var ddlist = document.getElementById(ddName);
    var comps = json.computers;
    //console.log(comps);
    for(element in comps)
    {
        var option = document.createElement("option");
        //set the computer type in the dropdown
        option.innerHTML = element;
        // make the name the value
        option.value = element;
        //Add the Option element to DropDownList.
        ddlist.options.add(option);
    }
}

function buildDropdownState(json, ddName)
{
    // get the dropdown list
    var ddlist = document.getElementById(ddName);
    var comps = json.states;
    //console.log(comps);
    for(element in comps)
    {
        var option = document.createElement("option");
        //set the computer type in the dropdown
        option.innerHTML = element;
        // make the name the value
        option.value = element;
        //Add the Option element to DropDownList.
        ddlist.options.add(option);
    }
}


function computeValues(name, off, sleep, idle, active, state){
    // calculate watts divide by efficiency < return this value
    // values are percentages!!!!
    // return one day is this many
    // get user state; state has different regulations for power creation %
    // amt watts are from nonrenewable and turn this into carbon < return as image
    

    // get values from the JSON
    var computerVals = computerJson["computers"][name];
    var offWeight = Number(computerVals["off"]);
    var sleepWeight = Number(computerVals["sleep"]);
    var idleWeight = Number(computerVals["idle"]);
    var activeWeight = Number(computerVals["active"]);
    var supplyEfficiencyWeight = Number(computerVals["Power supply efficiency"]);
    
    // multiply the percentages by values
    var computerPower = off*offWeight + sleep*sleepWeight + idle*idleWeight + active*activeWeight;
    
    // devide the efficeincy < return actual value
    var kwattH = computerPower / supplyEfficiencyWeight; //kWh
    
    // multiply by state nonrenewable <return images
    var stateVal = stateJson["states"][state];
    var coalSt = Number(stateVal["Coal"]);
    var ngasSt = Number(stateVal["Natural Gas"]);
    var renSt = Number(stateVal["Renewable"]);
    var nukeSt = Number(stateVal["Nuclear"]);

    var energyVal = stateJson["equiv"];
    var coalVal = Number(energyVal["Coal"]);
    var ngasVal = Number(energyVal["Natural Gas"]);
    var renVal = Number(energyVal["Renewable"]);
    var nukeVal = Number(energyVal["Nuclear"]);

    var stateCarbonLbsPerKwH = coalSt*coalVal + ngasSt*ngasVal + renSt*renVal + nukeSt*nukeVal;
    
    var carbonLbs = stateCarbonLbsPerKwH * kwattH;
    return carbonLbs;
    

    // console.log('sent from: ' + $(form).serialize());
    // return true;
}

var activeslider = document.getElementById("activeHoursSlider");
var activeoutput = document.getElementById("numActiveHours");
activeoutput.innerHTML = activeslider.value;

var sleepslider = document.getElementById("sleepHoursSlider");
var sleepoutput = document.getElementById("numSleepHours");
sleepoutput.innerHTML = sleepslider.value;

var idleslider = document.getElementById("idleHoursSlider");
var idleoutput = document.getElementById("numIdleHours");
idleoutput.innerHTML = idleslider.value;

activeslider.oninput = function() {
  activeoutput.innerHTML = this.value;
}

sleepslider.oninput = function() {
    sleepoutput.innerHTML = this.value;
}

idleslider.oninput = function() {
    idleoutput.innerHTML = this.value;
}

console.log(computerJson);
console.log(stateJson);
buildDropdown(computerJson, "computerOptions");
buildDropdownState(stateJson, "stateOptions")

// global variables
var name = "";
var state = "";
var active = "";
var sleep = "";
var idle = "";
var off = "";
document.getElementById('submitButton').onclick = function() { 
    name = document.getElementById("computerOptions").value;
    state = document.getElementById('stateOptions').value;
    active = activeoutput.innerHTML;
    sleep = sleepoutput.innerHTML;
    idle = idleoutput.innerHTML;
    off = 24-active-idle-sleep;
    console.log(name, state, active, sleep, idle);
    var carbon = computeValues(name, off, sleep, idle, active, state);
    var carbonInt = Math.round(carbon);
    var trees = Math.round(carbon*.0068*10);
    var miles = Math.round(carbon*1.1255);
    console.log(carbon);
    document.getElementById("carbonLbs").style = "block";
    document.getElementById("dispCarbonNum").innerHTML= carbonInt;
    document.getElementById("trees").style = "block";
    document.getElementById("dispTreeNum").innerHTML= trees;

    document.getElementById("miles").style = "block";
    document.getElementById("dispMileNum").innerHTML= miles;

    buildTrees(number,image);

    dispTreeNum
}

function buildTrees(number, image)
{
    // get the number of trees needed
    var img = document.createElement(green-tree-md.png);
    var numb=number;
    //console.log(comps);
    for(item in numb):
        <img class="w3-image" src=":./green-tree-md.png"alt="tree" width="800" height="800">
    
    
    
}





