
gsap.set('.page-1',{
	scale:0.5,
})

function LoaderInit() {
	let t1 = gsap.timeline();

	t1.from(".loader-txt > span", {
		x: 40,
		duration: 1,
		opacity: 0,
		stagger: 0.3,
	});
	t1.to(".loader-txt > span", {
		x: -40,
		duration: 1,
		opacity: 0,
		stagger: 0.3,
	});
	t1.to(".loader", {
		opacity: 0,
	});
	t1.to(".loader", {
		display: "none",
	});
	
	t1.to(".page-1", {
		scale: 1,
	},"-=0.5")
}

function LenisScrollInit(){
	const lenis = new Lenis()

	lenis.on('scroll', (e) => {
		
	})

	function raf(time) {
		lenis.raf(time)
		requestAnimationFrame(raf)
	}

	requestAnimationFrame(raf)
}

LoaderInit();
LenisScrollInit();

function navigationOpenClose() {
	const closeTag = document.querySelector("#closeTag");
	const openTag = document.querySelector("#openTag");
	const navigationWrapper = document.querySelector(".navigation-wrapper");

	let navTimeLine = gsap.timeline();

	openTag.addEventListener("click", function () {
		console.log("clicked has done");
		gsap.to(navigationWrapper, {
			top: 0,
		});
	});

	closeTag.addEventListener("click", function () {
		console.log("clicked has done");
		gsap.to(navigationWrapper, {
			top: "-80vh",
		});
	});
}

navigationOpenClose();

Shery.mouseFollower({
	skew: true,
	ease: "cubic-bezier(0.23, 1, 0.320, 1)",
	duration: 1,
});

Shery.makeMagnet("#openTag", {
	ease: "cubic-bezier(0.23, 1, 0.320, 1)",
	duration: 1,
});

const stringEle = document.getElementById("line");
const rect = stringEle.getBoundingClientRect();
gsap.set("svg", {
	attr: {
		width: rect.width,
	},
});

const initialPath = `M 10 80 Q ${rect.width / 2} 80 ${rect.width} 80`;
let finalPath = `M 10 80 Q ${rect.width / 2} 80 ${rect.width} 80`;

stringEle.addEventListener("mousemove", function (event) {
	const rect = stringEle.getBoundingClientRect();
	const relativeY = event.clientY - rect.top;

	// Use these values for your SVG path or other calculations
	const finalPath = `M 0 80 Q ${rect.width / 2} ${relativeY} ${rect.width} 80`;

	gsap.to("svg path", {
		attr: {
			d: finalPath,
		},
	});
});

stringEle.addEventListener("mouseleave", function (event) {
	gsap.to("svg path", {
		ease: "elastic.out(1,0.1)",
		duration: 0.6,
		attr: {
			d: initialPath,
		},
	});
});

Shery.imageEffect(".img-wrapper ", {
	style: 1,
	gooey: true,
	config: {
		a: { value: 0, range: [0, 30] },
		b: { value: -0.54, range: [-1, 1] },
		zindex: { value: "9996999", range: [-9999999, 9999999] },
		aspect: { value: 0.75 },
		ignoreShapeAspect: { value: true },
		shapePosition: { value: { x: 0, y: 0 } },
		shapeScale: { value: { x: 1, y: 0.85 } },
		shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
		shapeRadius: { value: 0, range: [0, 2] },
		currentScroll: { value: 0 },
		scrollLerp: { value: 0.07 },
		gooey: { value: true },
		infiniteGooey: { value: false },
		growSize: { value: 4, range: [1, 15] },
		durationOut: { value: 1, range: [0.1, 5] },
		durationIn: { value: 1.5, range: [0.1, 5] },
		displaceAmount: { value: 0.5 },
		masker: { value: true },
		maskVal: { value: 1.52, range: [1, 5] },
		scrollType: { value: 0 },
		geoVertex: { range: [1, 64], value: 1 },
		noEffectGooey: { value: true },
		onMouse: { value: 1 },
		noise_speed: { value: 1.68, range: [0, 10] },
		metaball: { value: 0.38, range: [0, 2] },
		discard_threshold: { value: 0.5, range: [0, 1] },
		antialias_threshold: { value: 0, range: [0, 0.1] },
		noise_height: { value: 0.5, range: [0, 2] },
		noise_scale: { value: 10, range: [0, 100] },
	},
});




function circleRotatorInit(){

	let active = 3;


	const miniCircle = document.querySelectorAll('.mini-dot');
	const stripes = document.querySelectorAll('.stripe')
	gsap.set(miniCircle[active - 1], {
		scale: 1.4,
		opacity: 0.9,
		backgroundColor: "#e76f51"
	})

	miniCircle.forEach(function (item, index) {
		item.addEventListener('click', function () {
			gsap.to('.circle-rotator', {
				rotate: (3 - (index + 1)) * 10
			})
			inActiveMiniDot()
			gsap.to(this, {
				scale: 1.4,
				opacity: 1,
				backgroundColor: "#e76f51"
			})
		})




	})

	function inActiveMiniDot() {
		gsap.to(miniCircle, {
			opacity: .3,
			scale: 1
		})
	}

	gsap.to(".circle-rotator", {
		rotate: 0,
		duration: 1.4,
		ease: "linear"
	})
}

circleRotatorInit();



document.addEventListener('wheel',function(event){
	const { deltaY } = event;
	
	// positive value
	if(deltaY > 0){
		gsap.to('.marquee-text-img',{
			transform:`translate(-200%,0)`,
			duration:4,
			repeat:-1,
			ease:"linear"
		})
		
		gsap.to('.marquee-text-img > img',{
			rotate:180
		})
	}else{
		gsap.to('.marquee-text-img', {
			transform: `translate(0%,0)`,
			duration: 4,
			repeat: -1,
			ease: "linear"
		})
		gsap.to('.marquee-text-img > img', {
			rotate: 0
		})
	}
})