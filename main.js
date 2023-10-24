let baseSalary = 30000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary,overtime,rate){
    return baseSalary + (overtime * rate);
}
let result = getWage();
document.getElementById('demo').innerHTML = result; 

let employee ={
    baseSalary: 30000,
    overtime:10,
    rate: 20,
    getWage:function(){
          return this.baseSalary + (this.overtime * this.rate);
    }
};
    employee.getWage();
  
    function createCircle(radius){
        return {
            radius,
            draw: function(){
                console.log('draw');
            }
        }
    }
    const createCirclecircle = createCircle(1);


 function createCircle(){
    this.radius = this.radius,
    this.draw = function(){
        console.log(this.draw);
    }
 }
  const circle = new createCircle(10);
  