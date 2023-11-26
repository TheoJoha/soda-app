const Soda = {
    data: [
        {
            name: "Orange soda",
            color: "orange",
            readyToSell: true
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
    },
    createSoda: function(newSoda) {
        this.data.push(newSoda)
    },
    update: function(index, updates) {
        this.data[index] = updates
    },
    destroy: function(index) {
        this.data.splice(index, 1)
    }
}

module.exports = Soda