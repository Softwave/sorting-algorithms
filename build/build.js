var ColorHelper = (function () {
    function ColorHelper() {
    }
    ColorHelper.getColorVector = function (c) {
        return createVector(red(c), green(c), blue(c));
    };
    ColorHelper.rainbowColorBase = function () {
        return [
            color('red'),
            color('orange'),
            color('yellow'),
            color('green'),
            color(38, 58, 150),
            color('indigo'),
            color('violet')
        ];
    };
    ColorHelper.getColorsArray = function (total, baseColorArray) {
        var _this = this;
        if (baseColorArray === void 0) { baseColorArray = null; }
        if (baseColorArray == null) {
            baseColorArray = ColorHelper.rainbowColorBase();
        }
        var rainbowColors = baseColorArray.map(function (x) { return _this.getColorVector(x); });
        ;
        var colours = new Array();
        for (var i = 0; i < total; i++) {
            var colorPosition = i / total;
            var scaledColorPosition = colorPosition * (rainbowColors.length - 1);
            var colorIndex = Math.floor(scaledColorPosition);
            var colorPercentage = scaledColorPosition - colorIndex;
            var nameColor = this.getColorByPercentage(rainbowColors[colorIndex], rainbowColors[colorIndex + 1], colorPercentage);
            colours.push(color(nameColor.x, nameColor.y, nameColor.z));
        }
        return colours;
    };
    ColorHelper.getColorByPercentage = function (firstColor, secondColor, percentage) {
        var firstColorCopy = firstColor.copy();
        var secondColorCopy = secondColor.copy();
        var deltaColor = secondColorCopy.sub(firstColorCopy);
        var scaledDeltaColor = deltaColor.mult(percentage);
        return firstColorCopy.add(scaledDeltaColor);
    };
    return ColorHelper;
}());
var values = [];
var i = 0;
var j = 0;
var comparisons = 0;
var sortNumber = 1;
var sizeMod = 4;
var setup = function () {
    createCanvas(windowWidth, windowHeight);
    for (var i_1 = 0; i_1 < width / sizeMod; i_1++) {
        values.push(random(height));
    }
    console.log(values);
};
var resetSort = function () {
    values = [];
    for (var i_2 = 0; i_2 < width / sizeMod; i_2++) {
        values.push(random(height));
    }
    i = 0;
    j = 0;
    loop();
    console.log(sortNumber);
    comparisons = 0;
};
var draw = function () {
    background(0);
    if (sortNumber === 1) {
        bubbleSort(values, 1);
    }
    if (sortNumber === 2) {
        insertionSort(values, 1);
    }
    if (sortNumber === 3) {
        selectionSort(values, 1);
    }
    if (sortNumber === 4) {
        bubbleSort(values, 1);
    }
    simulateSorting(values);
};
var bubbleSort = function (inArray, speed) {
    var arrayLength = inArray.length;
    for (var k = 0; k < speed; k++) {
        if (i < arrayLength) {
            for (j = 0; j < arrayLength - i - 1; j++) {
                var temp = inArray[j];
                if (inArray[j] > inArray[j + 1]) {
                    inArray[j] = inArray[j + 1];
                    inArray[j + 1] = temp;
                    comparisons++;
                }
            }
        }
        else {
            noLoop();
            resetSort();
            i = 0;
            sortNumber = 2;
        }
        i++;
    }
};
var insertionSort = function (inArray, speed) {
    var arrayLength = inArray.length;
    for (var k = 0; k < speed; k++) {
        if (i < arrayLength) {
            var temp = inArray[i];
            for (j = i; j > 0 && inArray[j - 1] > temp; j--) {
                inArray[j] = inArray[j - 1];
                comparisons++;
            }
            inArray[j] = temp;
        }
        else {
            noLoop();
            resetSort();
            sortNumber = 3;
            i = -1;
        }
        i++;
    }
};
var selectionSort = function (inArray, speed) {
    var arrayLength = inArray.length;
    for (var k = 0; k < speed; k++) {
        if (i < arrayLength - 1) {
            for (var j_1 = i + 1; j_1 < arrayLength; j_1++) {
                comparisons++;
                if (inArray[i] > inArray[j_1]) {
                    var temp = inArray[i];
                    inArray[i] = inArray[j_1];
                    inArray[j_1] = temp;
                }
            }
        }
        else {
            noLoop();
            resetSort();
            sortNumber = 1;
        }
        i++;
    }
};
var simulateSorting = function (inArray) {
    for (var k = 0; k < inArray.length; k++) {
        if (k == i) {
            fill("#ff00aa");
        }
        else if (k == j && j != 0) {
            fill("#FF001E");
        }
        else {
            stroke("#ff00aa");
            fill("#4a4edd");
        }
        rect(k * sizeMod, height, sizeMod, -inArray[k]);
    }
    fill("4a4edd");
    textSize(20);
    if (sortNumber === 1) {
        text("Bubble Sort", 20, 20);
    }
    else if (sortNumber === 2) {
        text("Insertion Sort", 20, 20);
    }
    else if (sortNumber === 3) {
        text("Selection Sort", 20, 20);
    }
    text("Sorted Lines: " + (i - 1) + "\nComparisons: " + comparisons, 20, 40);
};
//# sourceMappingURL=../sketch/sketch/build.js.map