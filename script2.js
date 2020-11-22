var scene = new THREE.Scene();

        var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
        //sets camera position to see object
        camera.position.z = 5;
        
        var renderer = new THREE.WebGLRenderer({antialias: true});
        renderer.setClearColor("#ffffff");
        renderer.setSize(window.innerWidth,window.innerHeight);

        document.body.appendChild(renderer.domElement);

        window.addEventListener('resize', () => {
            renderer.setSize(window.innerWidth,window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;

            camera.updateProjectionMatrix();
        })

        //var raycaster = new THREE.Raycaster();
        //var mouse = new THREE.Vector2();

        var geometry = new THREE.SphereGeometry(1, 10, 10);
        //var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshLambertMaterial({color: 0xEE82EE});
        var mesh = new THREE.Mesh(geometry, material);

        scene.add(mesh);

        var light = new THREE.PointLight(0xFFFFFF, 1, 500)
        light.position.set(10,0,25);
        scene.add(light);

	renderer.render(scene, camera);

   
