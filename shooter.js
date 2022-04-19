AFRAME.registerComponent("bullets",{
    init:function(){

    },
shootBullet:function(){
    window.addEventListener("keydown",(e)=>{
        if(e.key==="space"){
            var bullet=document.createElement("a-entity")

            bullet.setAttribute("geometry",{radius:4,primitive:"sphere"})
            bullet.setAttribute("material","color","black")
            var cam=document.querySelector("#camera")
            pos=cam.getAttribute("position")
            bullet.setAttribute("position",{
                x:pos.x,
                y:pos.y,
                z:pos.z})

                var camera=document.querySelector("#camera").object3D
                //get camera direction as Three.js vector
                var direction=new THREE.Vector3()
                camera.getWorldDirection(direction)
                // set the velocity and the direction
                bullet.setAttribute("velocity",direction.multiplyScaler(-8))
                var scene=document.querySelector("#scene")
                scene.appendChild(bullet)
        }
    })
}
})