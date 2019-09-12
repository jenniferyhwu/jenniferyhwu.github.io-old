import * as THREE from 'three'

class GeneralLights {
    lightIn;
    lightOut;
    rad;

    constructor(scene) {
        this.lightIn = new THREE.PointLight("pink", 2, 0, 2);
        this.lightOut = new THREE.PointLight("pink", 5, 0, 2);
        this.lightOut.position.set(40, 20, 40);
        this.lightIn.position.set(80, 20, 400);

        scene.add(this.lightIn);
        scene.add(this.lightOut);

        this.rad = 80;
    }

    update(time) {
        const x = this.rad * Math.sin(time*0.2)
        this.lightOut.position.x = x;
    }
}

export default GeneralLights;