"use client"

import * as THREE from "three";
import { useEffect } from "react";
import "@/app/ui/components/three.css";
class ThreeApplication {
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    
    constructor(elementId: string){
        const element = document.getElementById(elementId);
        if (element == null){
            throw new Error("Element not found in DOM");
        }
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, element?.clientWidth/element?.clientHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(element.clientWidth, element.clientHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        element.appendChild(this.renderer.domElement);
        window.addEventListener("resize", this.onWindowResize.bind(this));
        this.setupScene();
    }

    private setupScene():void{
        // Cube Creation
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshStandardMaterial();
        const cube = new THREE.Mesh(geometry, material);
        this.scene.add(cube);
        this.camera.position.z = 5;
        this.renderer.setAnimationLoop(()=>{
            cube.rotateX(0.01);
            cube.rotateY(0.01);
            this.renderer!.render(this.scene, this.camera);
        });
        // Light Creation
        const light = new THREE.PointLight(0xffffff,16);
        this.scene.add(light);
        light.position.set(3,3,3);
        console.log(this.scene.children);
    }
    private onWindowResize(): void {
        const element = this.renderer.domElement.parentElement;
        if(element){
            this.camera.aspect = element.clientWidth/element.clientHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(element.clientWidth, element.clientHeight);
        }
    }
    dispose(): void {
        this.renderer.dispose();
        if (this.renderer.domElement.parentElement){
            this.renderer.domElement.parentElement.removeChild(this.renderer.domElement);
        }
        window.removeEventListener("resize", this.onWindowResize.bind(this))
    }
}

function ThreeCanvas() {
    useEffect(() => {
        const threeApp: ThreeApplication = new ThreeApplication("three-canvas-laboratory");
        return ()=>{
            threeApp.dispose();
        } 
    }, []);
    return (
        <div id="three-canvas-laboratory">
        </div>
    )
}

export default ThreeCanvas;