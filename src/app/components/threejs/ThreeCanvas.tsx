"use client"

import * as THREE from "three";
import { useEffect } from "react";
import "@/app/ui/components/three.css";
class ThreeApplication {
    scene: THREE.Scene;
    camera: THREE.Camera;
    renderer: THREE.WebGLRenderer;

    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer();
    }
    // loop(){
    //     cube.rotateX(0.01);
    //     cube.rotateY(0.02);
    //     this.renderer.render(this.scene, this.camera);
    // }
    init(elementId: string): boolean {
        const element = document.getElementById(elementId);
        if (element == null)
            return false;

        this.renderer.setSize(element.offsetWidth, element.offsetHeight);
        element.appendChild(this.renderer.domElement);
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        this.scene.add(cube);
        this.camera.position.z = 5;
        this.renderer.setAnimationLoop(()=>{
            cube.rotateX(0.01);
            cube.rotateY(0.02);
            this.renderer.render(this.scene, this.camera);
        });
        return true;
    }
}

function ThreeCanvas() {
    useEffect(() => {
        const threeApp: ThreeApplication = new ThreeApplication();
        if (!threeApp.init("three-canvas-laboratory")) {
            throw new Error("THREE Failed");
        }
    }, []);
    return (
        <div id="three-canvas-laboratory">
        </div>
    )
}

export default ThreeCanvas;