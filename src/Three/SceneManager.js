import * as THREE from 'three';
import SceneSubject from './SceneSubject';
import GeneralLights from './GeneralLights';

class SceneManager {
    canvas;
    clock;
    origin;
    screenDimensions;
    mousePosition;
    scene;
    renderer;
    camera;
    sceneSubjects;

    model;

    constructor(canvas, model) {
        this.model = model;
        this.canvas = canvas;

        this.clock = new THREE.Clock();
        this.origin = new THREE.Vector3(0,0,0);
    
        this.screenDimensions = {
            width: this.canvas.width,
            height: this.canvas.height
        }
    
        this.mousePosition = {
            x: 0,
            y: 0
        }
    
        this.scene = this.buildScene();
        this.camera = this.buildCamera(this.screenDimensions);
        this.renderer = this.buildRender(this.screenDimensions);
        this.sceneSubjects = this.createSceneSubjects(this.scene);
    }

    buildScene() {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color("white");

        return scene;
    }

    buildRender({ width, height }) {
        const renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: true }); 
        const DPR = window.devicePixelRatio ? window.devicePixelRatio : 1;
        renderer.setPixelRatio(DPR);
        renderer.setSize(width, height);

        renderer.gammaInput = true;
        renderer.gammaOutput = true; 

        return renderer;
    }

    buildCamera({ width, height }) {
        const aspectRatio = 1;
        const fieldOfView = 1000;
        const nearPlane = 20;
        const farPlane = 800; 
        const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);

        camera.zoom = 1.2;

        return camera;
    }

    createSceneSubjects(scene) {
        const sceneSubjects = [
            new GeneralLights(scene),
            new SceneSubject(scene, this.model)
        ];

        return sceneSubjects;
    }

    update() {
        const elapsedTime = this.clock.getElapsedTime();

        for(let i=0; i<this.sceneSubjects.length; i++)
            this.sceneSubjects[i].update(elapsedTime);

        this.updateCameraPositionRelativeToMouse();

        this.renderer.render(this.scene, this.camera);
    }

    updateCameraPositionRelativeToMouse() {
        this.camera.position.x += (  (this.mousePosition.x * 0.05) + 200 - this.camera.position.x ) * 0.1;
        this.camera.position.y += ( -(this.mousePosition.y * 0.05) + 50 - this.camera.position.y ) * 0.1;
        this.camera.lookAt(this.origin);
    }

    onWindowResize() {
        const { width, height } = this.canvas;
        
        this.screenDimensions.width = width;
        this.screenDimensions.height = height;

        // this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        
        this.renderer.setSize(width, height);
    }

    onMouseMove(x, y) {
        this.mousePosition.x = x;
        this.mousePosition.y = y;
    }

    // return {
    //     update,
    //     onWindowResize,
    //     onMouseMove
    // }
}

export default SceneManager;