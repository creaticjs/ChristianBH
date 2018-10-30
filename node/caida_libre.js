
module.exports = {
    g : 9.8,
    h_max : function(a,b){
        console.log(a+b);
    },
    t : function(h,g){
        return Math.sqrt(2*h/g);
    },
    v : function(t,g){
        return g*t;
    }
}