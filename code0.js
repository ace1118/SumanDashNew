gdjs.NoteCode = {};
gdjs.NoteCode.localVariables = [];
gdjs.NoteCode.idToCallbackMap = new Map();
gdjs.NoteCode.GDName_9595InputObjects1= [];
gdjs.NoteCode.GDName_9595InputObjects2= [];
gdjs.NoteCode.GDBackgroundObjects1= [];
gdjs.NoteCode.GDBackgroundObjects2= [];
gdjs.NoteCode.GDSTARTObjects1= [];
gdjs.NoteCode.GDSTARTObjects2= [];
gdjs.NoteCode.GDNoteObjects1= [];
gdjs.NoteCode.GDNoteObjects2= [];
gdjs.NoteCode.GDStartObjects1= [];
gdjs.NoteCode.GDStartObjects2= [];
gdjs.NoteCode.GDgame_9595logoObjects1= [];
gdjs.NoteCode.GDgame_9595logoObjects2= [];
gdjs.NoteCode.GDhouse_9595logoObjects1= [];
gdjs.NoteCode.GDhouse_9595logoObjects2= [];
gdjs.NoteCode.GDBackgroundObjects1= [];
gdjs.NoteCode.GDBackgroundObjects2= [];


gdjs.NoteCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.NoteCode.GDBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("START"), gdjs.NoteCode.GDSTARTObjects1);
gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.NoteCode.GDStartObjects1);
{for(var i = 0, len = gdjs.NoteCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.NoteCode.GDBackgroundObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}
{for(var i = 0, len = gdjs.NoteCode.GDSTARTObjects1.length ;i < len;++i) {
    gdjs.NoteCode.GDSTARTObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}
{for(var i = 0, len = gdjs.NoteCode.GDStartObjects1.length ;i < len;++i) {
    gdjs.NoteCode.GDStartObjects1[i].setCenterPositionInScene((( gdjs.NoteCode.GDSTARTObjects1.length === 0 ) ? 0 :gdjs.NoteCode.GDSTARTObjects1[0].getAABBCenterX()),(( gdjs.NoteCode.GDSTARTObjects1.length === 0 ) ? 0 :gdjs.NoteCode.GDSTARTObjects1[0].getAABBCenterY()) - 15);
}
}
{gdjs.deviceSensors.orientation.activateOrientationSensor();
}
{gdjs.evtTools.advancedWindow.setFullScreenable(true, runtimeScene);
}
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(22968420);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-our-nights-627.mp3", false, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("START"), gdjs.NoteCode.GDSTARTObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.NoteCode.GDSTARTObjects1.length;i<l;++i) {
    if ( gdjs.NoteCode.GDSTARTObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.NoteCode.GDSTARTObjects1[k] = gdjs.NoteCode.GDSTARTObjects1[i];
        ++k;
    }
}
gdjs.NoteCode.GDSTARTObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Credits", false);
}
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}
}

}


};

gdjs.NoteCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NoteCode.GDName_9595InputObjects1.length = 0;
gdjs.NoteCode.GDName_9595InputObjects2.length = 0;
gdjs.NoteCode.GDBackgroundObjects1.length = 0;
gdjs.NoteCode.GDBackgroundObjects2.length = 0;
gdjs.NoteCode.GDSTARTObjects1.length = 0;
gdjs.NoteCode.GDSTARTObjects2.length = 0;
gdjs.NoteCode.GDNoteObjects1.length = 0;
gdjs.NoteCode.GDNoteObjects2.length = 0;
gdjs.NoteCode.GDStartObjects1.length = 0;
gdjs.NoteCode.GDStartObjects2.length = 0;
gdjs.NoteCode.GDgame_9595logoObjects1.length = 0;
gdjs.NoteCode.GDgame_9595logoObjects2.length = 0;
gdjs.NoteCode.GDhouse_9595logoObjects1.length = 0;
gdjs.NoteCode.GDhouse_9595logoObjects2.length = 0;
gdjs.NoteCode.GDBackgroundObjects1.length = 0;
gdjs.NoteCode.GDBackgroundObjects2.length = 0;

gdjs.NoteCode.eventsList0(runtimeScene);
gdjs.NoteCode.GDName_9595InputObjects1.length = 0;
gdjs.NoteCode.GDName_9595InputObjects2.length = 0;
gdjs.NoteCode.GDBackgroundObjects1.length = 0;
gdjs.NoteCode.GDBackgroundObjects2.length = 0;
gdjs.NoteCode.GDSTARTObjects1.length = 0;
gdjs.NoteCode.GDSTARTObjects2.length = 0;
gdjs.NoteCode.GDNoteObjects1.length = 0;
gdjs.NoteCode.GDNoteObjects2.length = 0;
gdjs.NoteCode.GDStartObjects1.length = 0;
gdjs.NoteCode.GDStartObjects2.length = 0;
gdjs.NoteCode.GDgame_9595logoObjects1.length = 0;
gdjs.NoteCode.GDgame_9595logoObjects2.length = 0;
gdjs.NoteCode.GDhouse_9595logoObjects1.length = 0;
gdjs.NoteCode.GDhouse_9595logoObjects2.length = 0;
gdjs.NoteCode.GDBackgroundObjects1.length = 0;
gdjs.NoteCode.GDBackgroundObjects2.length = 0;


return;

}

gdjs['NoteCode'] = gdjs.NoteCode;
