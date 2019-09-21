import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

class SceneSubject {
    group;
    // subjectGeometry;
    // subjectMaterial;
    // subjectMesh;
    // subjectWireframe;
    speed;
    textureOffsetSpeed;

    constructor(scene, model) {
        this.group = new THREE.Group();

        // this.subjectGeometry = this.deformGeometry(new THREE.IcosahedronGeometry(10, 1));
        
        // this.subjectMaterial = new THREE.MeshStandardMaterial({ color: "#000", transparent: true, side: THREE.DoubleSide, alphaTest: 0.5 });
        // this.subjectMaterial.alphaMap = new THREE.TextureLoader().load(watercolor);
        // this.subjectMaterial.alphaMap.magFilter = THREE.NearestFilter;
        // this.subjectMaterial.alphaMap.wrapT = THREE.RepeatWrapping;
        // this.subjectMaterial.alphaMap.repeat.y = 1;
    
        // this.subjectMesh = new THREE.Mesh(this.subjectGeometry, this.subjectMaterial);
            
        // this.subjectWireframe = new THREE.LineSegments(
        //     new THREE.EdgesGeometry(this.subjectGeometry),
        //     new THREE.LineBasicMaterial()
        // );

        // let diffuse = THREE.TextureLoader( "https://s3-us-west-2.amazonaws.com/s.cdpn.io/25480/Misc_WoodBarrelOldMold_2k_d.jpg" );
        // let specular = THREE.TextureLoader( "https://s3-us-west-2.amazonaws.com/s.cdpn.io/25480/Misc_WoodBarrelOldMold_2k_s.jpg" );
        // let normal = THREE.TextureLoader( "https://s3-us-west-2.amazonaws.com/s.cdpn.io/25480/Misc_WoodBarrelOldMold_2k_n.jpg" );

        // let material = new THREE.MeshPhongMaterial({
        //     map: diffuse,
        //     specular: 0xffffff,
        //     specularMap: specular,
        //     shininess: 10,
        //     normalMap: normal
        // });

        let loader = new GLTFLoader();
        let object = new THREE.Object3D();
        loader.load(process.env.PUBLIC_URL + '/crate/scene.gltf', (geometry => {
            //let mesh = new THREE.Mesh(geometry, material);
            object = geometry.scene;
            object.position.set(0,-70,0);
            object.scale.set(0.7,0.7,0.9);
            object.rotation.z = Math.PI/7;
            this.group.add(object);
        }));

        loader.load(process.env.PUBLIC_URL + '/laptop/scene.gltf', (geometry => {
            object = geometry.scene;
            object.position.set(-70,35,0);
            object.rotation.set(Math.PI/4,Math.PI/2,Math.PI/12);
            object.scale.set(5,5,5);
            this.group.add(object);
        }));

        loader.load(process.env.PUBLIC_URL + '/grass/scene.gltf', (geometry => {
            object = geometry.scene;
            object.position.set(0,-80,0);
            this.group.add(object);
        }));

        loader.load(process.env.PUBLIC_URL + '/coffee/scene.gltf', (geometry => {
            object = geometry.scene;
            object.scale.set(5,3,5);
            object.position.set(-70,-80,-40);
            object.rotation.y = Math.PI;
            this.group.add(object);
        }));

        //this.group.add(this.subjectMesh);
        //this.group.add(this.subjectWireframe);
        //scene.add(this.group);
    
        this.group.rotation.z = Math.PI;

        scene.add(this.group);
    
        this.speed = 0.01;
        this.textureOffsetSpeed = 0.01;
    }

    deformGeometry(geometry) {
        // for (let i=0; i<geometry.vertices.length; i+=2) {
        //     const scalar = 1 + Math.random()*0.8;
        //     geometry.vertices[i].multiplyScalar(scalar)
        // }

        // return geometry;
    }

    update(time) {
        const angle = time * this.speed;

        this.group.rotation.y = angle;

        // this.subjectMaterial.alphaMap.offset.y = 0.55 + time * this.textureOffsetSpeed;

        // this.subjectWireframe.material.color.setHSL( Math.sin(angle*2), 0.5, 0.5 );
        
        // const scale = (Math.sin(angle*8)+6.4)/5;
        // this.subjectWireframe.scale.set(scale, scale, scale)
    }
}

export default SceneSubject;
