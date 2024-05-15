
function spin(modelId) {
    var rotationElement = document.getElementById(modelId + '__'+modelId+'RotationTimerX');
    if (rotationElement) {
        var isEnabled = rotationElement.getAttribute('enabled') === 'true';
        rotationElement.setAttribute('enabled', (!isEnabled).toString());
    } else {
        console.error('No element found with ID:', modelId + '__'+modelId+'RotationTimerX');
    }
}

function resetPosition(modelId) {
    var wrapperId = modelId + '__' + modelId + '-Wrapper';
    var wrapper = document.getElementById(wrapperId);

    if (wrapper) {
        // Stop any ongoing rotation animations
        document.getElementById(modelId + '__' + modelId + 'RotationTimerX').setAttribute('enabled', 'false');
        document.getElementById(modelId + '__' + modelId + 'RotationTimerY').setAttribute('enabled', 'false');
        document.getElementById(modelId + '__' + modelId + 'RotationTimerZ').setAttribute('enabled', 'false');

        // Reset translation and rotation
        wrapper.setAttribute('translation', '0 0 0');
        wrapper.setAttribute('rotation', '0 0 0 0');
    } else {
        console.error('No element found with ID:', wrapperId);
    }

    // Reset camera view
    var cameraFront = document.getElementById(modelId + '__' + modelId + 'CameraFront');
    if (cameraFront) {
        cameraFront.setAttribute('bind', 'true');
    } else {
        console.error('No element found with ID:', modelId + '__' + modelId + 'CameraFront');
    }
}

function swapView(page, view) {
    let modelInline;
    
    switch (page) {
        case 'coke':
            modelInline = document.querySelector('#cokewire inline');
            break;
        case 'sprite':
            modelInline = document.querySelector('#spritewire inline');
            break;
        case 'fanta':
            modelInline = document.querySelector('#fantawire inline');
            break;
        default:
            console.error('Invalid page specified');
            return;
    }

    if (view === 'can') {
        modelInline.setAttribute('url', `assets/models/${page}Can.x3d`);
    } else if (view === 'bottle') {
        modelInline.setAttribute('url', `assets/models/${page}Bottle.x3d`);
    }
}

function stopRotation(modelId) {
    const axes = ['X', 'Y', 'Z'];

    axes.forEach(axis => {
        var rotationElementId = modelId + '__' + modelId + 'RotationTimer' + axis;
        var rotationElement = document.getElementById(rotationElementId);
        if (rotationElement && rotationElement.getAttribute('enabled') === 'true') {
            rotationElement.setAttribute('enabled', 'false');
        } else {
            console.error('No active rotation element found with ID:', rotationElementId);
        }
    });
}



function rotateY(modelId) {
    var rotationElement = document.getElementById(modelId + '__'+modelId+'RotationTimerY');
    if (rotationElement) {
        var isEnabled = rotationElement.getAttribute('enabled') === 'true';
        rotationElement.setAttribute('enabled', (!isEnabled).toString());
    } else {
        console.error('No element found with ID:', modelId + '__'+modelId+'RotationTimerY');
    }
}

function rotateZ(modelId) {
    var rotationElement = document.getElementById(modelId + '__'+modelId+'RotationTimerZ');
    if (rotationElement) {
        var isEnabled = rotationElement.getAttribute('enabled') === 'true';
        rotationElement.setAttribute('enabled', (!isEnabled).toString());
    } else {
        console.error('No element found with ID:', modelId + '__'+modelId+'RotationTimerZ');
    }
}



function wireFrame(modelId)
{
    var ElementId = modelId + 'wire';
	var e = document.getElementById(ElementId);
	e.runtime.togglePoints(true);
	e.runtime.togglePoints(true);
}

var lightOn = true;

function headlight(modelId)
{
	lightOn = !lightOn;
	document.getElementById(modelId + '__'+modelId+ 'headlight').setAttribute('headlight', lightOn.toString());
    console.log(lightOn);
}

function Polygon(modelId)
{
    var ElementId = modelId + 'wire';
	var e = document.getElementById(ElementId);
	e.runtime.togglePoints(false);
	e.runtime.toggleLines(false);
}

function Vertex(modelId)
{
    
    var ElementId = modelId + 'wire';
	var e = document.getElementById(ElementId);
    e.runtime.togglePoints(false);
    e.runtime.toggleLines(true);
}

function cameraFront(modelId) {
    var cameraElementId = modelId + '__' + modelId + 'CameraFront';
    var cameraElement = document.getElementById(cameraElementId);
    if (cameraElement) {
        cameraElement.setAttribute('bind', 'true');
    }
}



function cameraBack(modelId) {
    var cameraElementId = modelId + '__' + modelId + 'CameraBack';
    var cameraElement = document.getElementById(cameraElementId);
    if (cameraElement) {
        cameraElement.setAttribute('bind', 'true');
    }
}

function cameraLeft(modelId) {
    var cameraElementId = modelId + '__' + modelId + 'CameraLeft';
    var cameraElement = document.getElementById(cameraElementId);
    if (cameraElement) {
        cameraElement.setAttribute('bind', 'true');
    }
}

function cameraRight(modelId) {
    var cameraElementId = modelId + '__' + modelId + 'CameraRight';
    var cameraElement = document.getElementById(cameraElementId);
    if (cameraElement) {
        cameraElement.setAttribute('bind', 'true');
    }
}

function cameraTop(modelId) {
    var cameraElementId = modelId + '__' + modelId + 'CameraTop';
    var cameraElement = document.getElementById(cameraElementId);
    if (cameraElement) {
        cameraElement.setAttribute('bind', 'true');
    }
}

function cameraBottom(modelId) {
    var cameraElementId = modelId + '__' + modelId + 'CameraBottom';
    var cameraElement = document.getElementById(cameraElementId);
    if (cameraElement) {
        cameraElement.setAttribute('bind', 'true');
    }
}