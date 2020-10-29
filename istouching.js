function isTouching(v1,v2){
    v1.width/2 +v2.width/2>v2.x-v1.x &&
    v1.width/2 +v2.width/2>v1.x-v2.x &&
    v1.height/2 +v2.height/2>v2.y-v1.y &&
    v1.height/2 +v2.height/2>v1.y-v2.y
}