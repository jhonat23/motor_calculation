//TESTING CALCULATION:
// const MotorVoltage = 440;
// const pw = .745;
// const PF = 0.8;
// const efficiency = 0.95

// const I = (pw * 1000) / (MotorVoltage * PF * efficiency * Math.sqrt(3));
// console.log(I);

function MotorLoad(mVoltage, pw, pf, n){
    const I = (pw * 1000) / (mVoltage * pf * n *Math.sqrt(3));
    return I;
}
function iLoad(){
    const MotorVoltage = document.getElementById("motorVoltage");
    const MV = MotorVoltage.value;

    const power = document.getElementById("power");
    const pw = power.value;

    const PF = document.getElementById("PF");
    const pf = PF.value;

    const n = document.getElementById("efficiency");
    const ef = n.value;

    const Imot = MotorLoad(MV, pw, pf, ef);
    alert(Imot);
}

