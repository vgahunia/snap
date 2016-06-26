

window.onload = function() {
	var s = Snap(800,600);
	var bigCircle = s.circle(150, 150, 100);
	bigCircle.attr({
    fill: "#bada55",
    stroke: "#000",
    strokeWidth: 5
	});
	var smallCircle = s.circle(100, 150, 70);
	var discs = s.group(smallCircle, s.circle(200, 150, 70));
	discs.attr({
    fill: "#fff"
	});
	bigCircle.attr({
    mask: discs
	});
	smallCircle.animate({r: 50}, 1000);
	discs.select("circle:nth-child(2)").animate({r: 50}, 1000);
	var p = s.path("M10-5-10,15M15,0,0,15M0-5-20,15").attr({
        fill: "none",
        stroke: "#bada55",
        strokeWidth: 5
    });
	p = p.pattern(0, 0, 10, 10);

	bigCircle.attr({
	    fill: p
	});

	discs.attr({fill: "r()#fff-#000"});
	discs.attr({fill: "R(150, 150, 100)#fff-#000"});
	p.select("path").animate({stroke: "#f00"}, 1000);


	var svgNode = Snap('#svg-node');
	var svgElement = svgNode.select('#svg-element');
	svgElement.attr({
	    fill: "red",
	    stroke: "green",
	    strokeWidth: 5,
	    x: 250,
	    y: 100
	});

	s = Snap("#mysvg");
	var circleFromDom1 = Snap("#circle1");
	console.log('circleFromDom1', circleFromDom1);
	circleFromDom1.animate({ fill: 'blue' }, 2000);

	var circleFromDom2 = Snap.select("#circle2");
	console.log('circleFromDom2', circleFromDom2);
	circleFromDom2.animate({ fill: 'red' }, 2000);

	var circle3 = s.circle(100,300,20)
	         .animate({ fill: 'yellow' }, 2000);

	var circle4 = s.circle(100,400,20).attr({ id: 'circle4' });

	s.select("#circle4").animate({ fill: 'green' }, 2000);
}