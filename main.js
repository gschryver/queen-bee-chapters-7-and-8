// CHAPTER SEVEN - PAYING TRIBUTE 

// previous chapter code: 

const queens = []
const tributeChest = []


const createQueen = (queenID, queenName) => {
    const queenObject = {
        id: queenID,
        name: queenName
    }

    queens.push(queenObject);   
}

for (const queenObject of queens) {
    const hailMessage = hailTheQueen(queenObject.name)  
    console.log(hailMessage)
}

const hailTheQueen = function(nameString) {
    return `Hail Her Majesty, ${nameString}.`
}

const linda = createQueen(1, "Linda K")
const ashley = createQueen(2, "Ashley V")
const becky = createQueen(3, "Becky T")

// CHAPTER 7. TRIBUTE 

// tribute object 
const payTribute = (tributeItem, tributeDesc, queenID) => {
    const tributeObject = {
        item: tributeItem,
        description: tributeDesc,
        queenID: queenID
    }
    tributeChest.push(tributeObject)
}

payTribute(1, "a very fine cat", 2) // Ashley has a fine cat 
payTribute(2, "a very fine crow", 3) // Becky has a fine crow
payTribute(3, "a very fine otter", 1) // Linda has a fine otter


// CHAPTER 8 - SHOW TRIBUTE 

// iterate the queen objects to show tribute for each one
for (const queenObject of queens) {
    
    for (const tribute of tributeChest) {
        if (tribute.queenID === queenObject.id){
            console.log(`${queenObject.name} has tribute: ${tribute.description}`)

        }
    }
}








