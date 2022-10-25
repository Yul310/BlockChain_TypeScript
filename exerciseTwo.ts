type PlayerA = {
    name:string
}

type PlayerAA = PlayerA &{
    lastName:string
}
const playerA: PlayerAA = {
    name:'nico',
    lastName:'lee'
}

//////////////////////////
interface PlayerB{
    name:string
}
const playerB: PlayerB = {
    name: "nico"
}
interface PlayerBB extends PlayerB{
    lastName:string
}
interface PlayerBB{
    health:number
}
const playerBB: PlayerBB = {
    name: "nico",
    lastName: "lee",
    health:1
}
