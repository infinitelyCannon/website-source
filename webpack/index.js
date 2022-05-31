import * as Three from 'three';
import Stats from 'three/examples/jsm/libs/stats.module';
//import { GUI } from 'three/examples/jsm/libs/dat.gui.module';

// Data for movement.
// Stuff that was exposed through a control panel.
var Data = {
	radius: 1,
	color: 0x89ac9,
	count: 50000,
	Speed: 0.1,
	RotationSpeed: -0.5
};

var stats, gui;
var scene, renderer, camera, mesh;
var GetPrimes_exec, pointer;
var CurrentIdx = 0, NextIdx = 1, CurrentAlpha = 0, isForward = true;
var Time, LastTime;

// List of Camera/Dot values to lerp through.
var Pairs = [{ zoom: 25, radius: 0.4 }, { zoom: 8.0883, radius: 1 }, { zoom: 1.5668, radius: 2.4 }, { zoom: 0.4346, radius: 8.5 }, { zoom: 0.0886, radius: 20.5 }, { zoom: 0.0272, radius: 34.5 }, { zoom: 0.0126, radius: 64.8 }, { zoom: 0.0052, radius: 90.8 }, { zoom: 0.002708580514381735, radius: 268.8597895610033 }, { zoom: 0.0013209069457838427, radius: 474.76406164727456 }, { zoom: 0.0008325008228814031, radius: 908.2467397236351 }];

function AddMeshes()
{
	Clear();

	const matrix = new Three.Matrix4();
	const geometry = new Three.CircleGeometry(1, 64);
	const material = new Three.MeshBasicMaterial({ color: Data.color });
	mesh = new Three.InstancedMesh(geometry, material, Data.count);
	let ptr = GetPrimes(Data.count);

	for (let i = 0; i < Data.count; ++i)
	{
		let p = GetPolarPoint(Module.HEAPU32[ptr / Uint32Array.BYTES_PER_ELEMENT + i]);
		matrix.set(
			1, 0, 0, p.x,
			0, 1, 0, p.y,
			0, 0, 1, p.z,
			0, 0, 0, 1
		);
		mesh.setMatrixAt(i, matrix);
	}

	scene.add(mesh);
}

function Clear()
{
	const meshes = [];
	scene.traverse(function (obj)
	{
		if (obj.isMesh) meshes.push(obj);
	});

	for (let i = 0; i < meshes.length; ++i)
	{
		const mesh = meshes[i];
		mesh.material.dispose();
		mesh.geometry.dispose();

		scene.remove(mesh);
	}
}

function GetPolarPoint(prime)
{
	return new Three.Vector3(
		prime * Math.cos(prime),
		prime * Math.sin(prime),
		0
	);
}

function GetPrimes(count)
{
	var buffer, error, result;
	count = Math.floor(count);

	try
	{
		const typedArray = new Uint32Array(count);

		for (let i = 0; i < typedArray.length; ++i)
			typedArray[i] = 0;
		
		buffer = Module._malloc(typedArray.length * typedArray.BYTES_PER_ELEMENT);
		Module.HEAPU32.set(typedArray, buffer >> 2);
		result = GetPrimes_exec(buffer, typedArray.length);
		pointer = result;
	}
	catch (e)
	{
		error = e;
	}
	finally
	{
		Module._free(buffer);
	}

	if (error) throw error;

	return result;
}

window.InitCanvas = function ()
{
	GetPrimes_exec = Module.cwrap('GetPrimes', 'number', ['number', 'number']);
	let canvas = document.querySelector("canvas");

	canvas.width = canvas.parentElement.clientWidth;
	canvas.height = canvas.parentElement.clientHeight;

	scene = new Three.Scene();
	camera = new Three.OrthographicCamera(
		canvas.width / -2,
		canvas.width / 2,
		canvas.height / 2,
		canvas.height / -2,
		1,
		20000
	);
	renderer = new Three.WebGLRenderer({ canvas: canvas, antialias: true });
	renderer.setSize(canvas.width, canvas.height);

	camera.position.z = 32;
	camera.zoom = 25;
	camera.lookAt(0, 0, 0);
	camera.updateProjectionMatrix();

	AddMeshes();

	stats = new Stats();
	stats.dom.id = "canvas-stats";
	canvas.parentElement.appendChild(stats.dom);

	/*
	gui = new GUI();
	gui.add(Data, 'radius', 0.1, 1000).listen();
	gui.addColor(Data, 'color').onChange(AddMeshes);
	gui.add(Data, 'count', 1, 50000).onChange(AddMeshes);
	gui.add(Data, 'Speed', 0, 10);
	gui.add(Data, 'RotationSpeed', -10, 10);
	*/

	LastTime = Date.now();
	Tick();
}

function MorphMeshes(deltaTime)
{
	let matrix = new Three.Matrix4();
	let scale = new Three.Matrix4();
	let position = new Three.Vector3();

	for (let i = 0; i < Data.count; ++i)
	{
		let radius = Module.HEAPU32[pointer / Uint32Array.BYTES_PER_ELEMENT + i];
		let angle;

		scale.set(
			Data.radius, 0, 0, 0,
			0, Data.radius, 0, 0,
			0, 0, Data.radius, 0,
			0, 0, 0, 1
		);
		mesh.getMatrixAt(i, matrix);
		position.setFromMatrixPosition(matrix);
		angle = Math.atan2(position.y, position.x);
		angle += Data.RotationSpeed * deltaTime;
		position.set(radius * Math.cos(angle), radius * Math.sin(angle), 0);
		scale.setPosition(position);
		mesh.setMatrixAt(i, scale);
	}

	mesh.instanceMatrix.needsUpdate = true;
}

function Tick()
{
	requestAnimationFrame(Tick);

	Time = Date.now();

	let delta = (Time - LastTime) / 1000.0;

	if (isForward)
	{
		CurrentAlpha += delta * Data.Speed;

		if (CurrentAlpha >= 1)
		{
			if (NextIdx < Pairs.length - 1)
			{
				CurrentIdx = Math.min(CurrentIdx + 1, Pairs.length - 2);
				NextIdx = Math.min(NextIdx + 1, Pairs.length - 1);
				CurrentAlpha -= 1;
			}
			else
			{
				CurrentIdx = Pairs.length - 2;
				NextIdx = Pairs.length - 1;
				CurrentAlpha = 1;
				isForward = false;
			}
		}
	}
	else
	{
		CurrentAlpha -= delta * Data.Speed;

		if (CurrentAlpha < 0)
		{
			if(CurrentIdx > 0)
			{
				CurrentIdx = Math.max(CurrentIdx - 1, 0);
				NextIdx = Math.max(NextIdx - 1, 1);
				CurrentAlpha += 1;
			}
			else
			{
				CurrentIdx = 0;
				NextIdx = 1;
				CurrentAlpha = 0;
				isForward = true;
			}
		}
	}

	camera.zoom = Three.MathUtils.lerp(
		Pairs[CurrentIdx].zoom,
		Pairs[NextIdx].zoom,
		CurrentAlpha);
	
	Data.radius = Three.MathUtils.lerp(
		Pairs[CurrentIdx].radius,
		Pairs[NextIdx].radius,
		CurrentAlpha
	);

	camera.updateProjectionMatrix();
	MorphMeshes(delta);

	stats.update();
	renderer.render(scene, camera);
	LastTime = Time;
}

// Other Index Page Stuff
document.querySelector(".pronouce").addEventListener("click", function () {
	speechSynthesis.speak(new SpeechSynthesisUtterance("Duh-car-ree"));
});

window.addEventListener("resize", function ()
{
	let canvas = document.querySelector("canvas");
	var parentWidth = canvas.parentElement.clientWidth,
		parentHeight = canvas.parentElement.clientHeight;
	
	canvas.width = parentWidth;
	canvas.height = parentHeight;
	
	camera.aspect = parentWidth / parentHeight;
	camera.left = canvas.width / -2,
	camera.right = canvas.width / 2,
	camera.top = canvas.height / 2,
	camera.bottom = canvas.height / -2,

	camera.lookAt(0, 0, 0);
	camera.updateProjectionMatrix();

	renderer.setSize(parentWidth, parentHeight);
}, false);