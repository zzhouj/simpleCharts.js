simpleCharts.js
===============

A simple charts using html5 canvas

Features
========

+ Small size with only **2.96 kB** when minified.
+ Pure javascript and no other dependencies.
+ Animation.
+ Many custom options supported.

Snapshots
=========

[snapshot]: https://github.com/zzhouj/simpleCharts.js/raw/master/snapshot.png "snapshot"

![snapshot][snapshot]

Usage
=====

1. Import js or minified js:

        <script type="text/javascript" src="simpleCharts.min.js"></script>

2. Add canvas elements:

        <canvas id="simple-charts" width="400" height="300"></canvas>

3. Render canvas with custom options:

        simpleCharts({
            id: 'simple-charts',
            duration: 300, // default: 1000
            fontSize: 14, // default: 14 px
            series: {
                data: data,
                color: 'green', // default: '#808080'
                suffix: '%'
            },
            xAxis: {
                categories: categories,
                color: 'blue' // default: '#808080'
            },
            yAxis: {
                title: 'Percent%',
                color: 'red', // default: '#808080'
                lineColor: 'rgb(225, 225, 225)', // default: '#808080'
                step: 5 // default: 5
            }
        });

License
=======

	The MIT License (MIT)
	
	Copyright (c) 2014 justin
	
	Permission is hereby granted, free of charge, to any person obtaining a copy of
	this software and associated documentation files (the "Software"), to deal in
	the Software without restriction, including without limitation the rights to
	use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
	the Software, and to permit persons to whom the Software is furnished to do so,
	subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
	FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
	COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
	IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
	CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
