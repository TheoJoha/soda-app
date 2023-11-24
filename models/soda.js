const Soda = {
    data: [
        {
            name: "Orange oda",
            color: "orange",
            readyToSEll: true
        },
        {
            name: "Root beer",
            color: "brown",
            readyToSell: false
        }
    ],
    getAll: function(){
        return this.data
    },
    getOne: function(index){
        return this.data[index]
    }
}

module.exports = Soda