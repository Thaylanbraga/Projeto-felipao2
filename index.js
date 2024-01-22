winningBalance("Thill", 106, 5)

function winningBalance(name, vitory, defeat){
	let level = vitory - defeat
    if  (level <= 10) {
    	console.log("The name player " + name + " is at the level Ferro")	
    }else if  (level > 10 && level <= 20) {
    	console.log("The name player " + name + " is at the level Bronze")	
    }else if  (level > 20 && level <= 50) {
    	console.log("The name player " + name + " is at the level Prata")	
    }else if  (level > 50 && level <= 80) {
    	console.log("The name player " + name + " is at the level Ouro")	
    }else if  (level > 80 && level <= 90) {
    	console.log("The name player " + name + " is at the level Diamante")	
    }else if  (level > 90 && level <= 100) {
    	console.log("The name player " + name + " is at the level Lendário")	
    }else if  (level > 100) {
    	console.log("The name player " + name + " is at the level Imortal")	
    }
}

winningBalance2("Thill", 30, 5)

function winningBalance2(name, vitory, defeat){
	let level = vitory - defeat
    result = levelPlayer(vitory, defeat)
    if  (level <= 10) {
    	console.log("The name player " + name + " has a winning balance " + level + " is at the level " + result)
    }else if  (level > 10 && level <= 20) {
    	console.log("The name player " + name +  " has a winning balance " + level + " is at the level " + result)	
    }else if  (level > 20 && level <= 50) {
    	console.log("The name player " + name +  " has a winning balance " + level + " is at the level " + result)	
    }else if  (level > 50 && level <= 80) {
    	console.log("The name player " + name +  " has a winning balance " + level + " is at the level " + result)	
    }else if  (level > 80 && level <= 90) {
    	console.log("The name player " + name +  " has a winning balance " + level + " is at the level " + result)	
    }else if  (level > 90 && level <= 100) {
    	console.log("The name player " + name +  " has a winning balance " + level + " is at the level " + result)	
    }else if  (level > 100) {
    	console.log("The name player " + name +  " has a winning balance " + level + " is at the level " + result)	
    }
}
function levelPlayer(vitory, defeat){
	let level = vitory - defeat
    if  (level <= 10) {
    	return "Ferro"	
    }else if  (level > 10 && level <= 20) {
    	return "Bronze"	
    }else if  (level > 20 && level <= 50) {
    	return "Prata"	
    }else if  (level > 50 && level <= 80) {
    	return "Ouro"	
    }else if  (level > 80 && level <= 90) {
    	return "Diamante"
    }else if  (level > 90 && level <= 100) {
    	return "Lendário"	
    }else if  (level > 100) {
    	return "Imortal"	
    }
}