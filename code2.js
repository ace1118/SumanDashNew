gdjs.Name_32InputCode = {};
gdjs.Name_32InputCode.localVariables = [];
gdjs.Name_32InputCode.idToCallbackMap = new Map();
gdjs.Name_32InputCode.GDName_9595InputObjects1= [];
gdjs.Name_32InputCode.GDName_9595InputObjects2= [];
gdjs.Name_32InputCode.GDBackgroundObjects1= [];
gdjs.Name_32InputCode.GDBackgroundObjects2= [];
gdjs.Name_32InputCode.GDPLAY_9595BUTTONObjects1= [];
gdjs.Name_32InputCode.GDPLAY_9595BUTTONObjects2= [];
gdjs.Name_32InputCode.GDPLAYObjects1= [];
gdjs.Name_32InputCode.GDPLAYObjects2= [];
gdjs.Name_32InputCode.GDgame_9595logoObjects1= [];
gdjs.Name_32InputCode.GDgame_9595logoObjects2= [];
gdjs.Name_32InputCode.GDhouse_9595logoObjects1= [];
gdjs.Name_32InputCode.GDhouse_9595logoObjects2= [];
gdjs.Name_32InputCode.GDBackgroundObjects1= [];
gdjs.Name_32InputCode.GDBackgroundObjects2= [];


gdjs.Name_32InputCode.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.Name_32InputCode.GDPLAY_9595BUTTONObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Name_32InputCode.GDPLAY_9595BUTTONObjects1.length;i<l;++i) {
    if ( gdjs.Name_32InputCode.GDPLAY_9595BUTTONObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Name_32InputCode.GDPLAY_9595BUTTONObjects1[k] = gdjs.Name_32InputCode.GDPLAY_9595BUTTONObjects1[i];
        ++k;
    }
}
gdjs.Name_32InputCode.GDPLAY_9595BUTTONObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Name_32InputCode.GDName_9595InputObjects1 */
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GamePlay", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(8).setString((( gdjs.Name_32InputCode.GDName_9595InputObjects1.length === 0 ) ? "" :gdjs.Name_32InputCode.GDName_9595InputObjects1[0].getBehavior("Text").getText()));
}
}

}


};gdjs.Name_32InputCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.Name_32InputCode.GDPLAY_9595BUTTONObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Name_32InputCode.GDPLAY_9595BUTTONObjects1.length;i<l;++i) {
    if ( gdjs.Name_32InputCode.GDPLAY_9595BUTTONObjects1[i].IsActivated(null) ) {
        isConditionTrue_0 = true;
        gdjs.Name_32InputCode.GDPLAY_9595BUTTONObjects1[k] = gdjs.Name_32InputCode.GDPLAY_9595BUTTONObjects1[i];
        ++k;
    }
}
gdjs.Name_32InputCode.GDPLAY_9595BUTTONObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PLAY"), gdjs.Name_32InputCode.GDPLAYObjects1);
/* Reuse gdjs.Name_32InputCode.GDPLAY_9595BUTTONObjects1 */
{for(var i = 0, len = gdjs.Name_32InputCode.GDPLAY_9595BUTTONObjects1.length ;i < len;++i) {
    gdjs.Name_32InputCode.GDPLAY_9595BUTTONObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.Name_32InputCode.GDPLAYObjects1.length ;i < len;++i) {
    gdjs.Name_32InputCode.GDPLAYObjects1[i].getBehavior("Opacity").setOpacity(255);
}
}

{ //Subevents
gdjs.Name_32InputCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Name_32InputCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(23022972);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-our-nights-627.mp3", false, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Name_Input"), gdjs.Name_32InputCode.GDName_9595InputObjects1);
gdjs.copyArray(runtimeScene.getObjects("PLAY"), gdjs.Name_32InputCode.GDPLAYObjects1);
gdjs.copyArray(runtimeScene.getObjects("PLAY_BUTTON"), gdjs.Name_32InputCode.GDPLAY_9595BUTTONObjects1);
gdjs.copyArray(runtimeScene.getObjects("game_logo"), gdjs.Name_32InputCode.GDgame_9595logoObjects1);
{for(var i = 0, len = gdjs.Name_32InputCode.GDgame_9595logoObjects1.length ;i < len;++i) {
    gdjs.Name_32InputCode.GDgame_9595logoObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}
{for(var i = 0, len = gdjs.Name_32InputCode.GDPLAY_9595BUTTONObjects1.length ;i < len;++i) {
    gdjs.Name_32InputCode.GDPLAY_9595BUTTONObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 + 100);
}
}
{for(var i = 0, len = gdjs.Name_32InputCode.GDName_9595InputObjects1.length ;i < len;++i) {
    gdjs.Name_32InputCode.GDName_9595InputObjects1[i].setCenterPositionInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2 - 50);
}
}
{for(var i = 0, len = gdjs.Name_32InputCode.GDPLAYObjects1.length ;i < len;++i) {
    gdjs.Name_32InputCode.GDPLAYObjects1[i].setCenterPositionInScene((( gdjs.Name_32InputCode.GDPLAY_9595BUTTONObjects1.length === 0 ) ? 0 :gdjs.Name_32InputCode.GDPLAY_9595BUTTONObjects1[0].getAABBCenterX()),(( gdjs.Name_32InputCode.GDPLAY_9595BUTTONObjects1.length === 0 ) ? 0 :gdjs.Name_32InputCode.GDPLAY_9595BUTTONObjects1[0].getAABBCenterY()) - 15);
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Name_Input"), gdjs.Name_32InputCode.GDName_9595InputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Name_32InputCode.GDName_9595InputObjects1.length;i<l;++i) {
    if ( gdjs.Name_32InputCode.GDName_9595InputObjects1[i].getBehavior("Text").getText() == "" ) {
        isConditionTrue_0 = true;
        gdjs.Name_32InputCode.GDName_9595InputObjects1[k] = gdjs.Name_32InputCode.GDName_9595InputObjects1[i];
        ++k;
    }
}
gdjs.Name_32InputCode.GDName_9595InputObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PLAY"), gdjs.Name_32InputCode.GDPLAYObjects1);
gdjs.copyArray(runtimeScene.getObjects("PLAY_BUTTON"), gdjs.Name_32InputCode.GDPLAY_9595BUTTONObjects1);
{for(var i = 0, len = gdjs.Name_32InputCode.GDPLAY_9595BUTTONObjects1.length ;i < len;++i) {
    gdjs.Name_32InputCode.GDPLAY_9595BUTTONObjects1[i].Activate(false, null);
}
}
{for(var i = 0, len = gdjs.Name_32InputCode.GDPLAYObjects1.length ;i < len;++i) {
    gdjs.Name_32InputCode.GDPLAYObjects1[i].getBehavior("Opacity").setOpacity(150);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Name_Input"), gdjs.Name_32InputCode.GDName_9595InputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Name_32InputCode.GDName_9595InputObjects1.length;i<l;++i) {
    if ( !(gdjs.Name_32InputCode.GDName_9595InputObjects1[i].getBehavior("Text").getText() == "") ) {
        isConditionTrue_0 = true;
        gdjs.Name_32InputCode.GDName_9595InputObjects1[k] = gdjs.Name_32InputCode.GDName_9595InputObjects1[i];
        ++k;
    }
}
gdjs.Name_32InputCode.GDName_9595InputObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PLAY_BUTTON"), gdjs.Name_32InputCode.GDPLAY_9595BUTTONObjects1);
{for(var i = 0, len = gdjs.Name_32InputCode.GDPLAY_9595BUTTONObjects1.length ;i < len;++i) {
    gdjs.Name_32InputCode.GDPLAY_9595BUTTONObjects1[i].Activate(true, null);
}
}

{ //Subevents
gdjs.Name_32InputCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.Name_32InputCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Name_32InputCode.GDName_9595InputObjects1.length = 0;
gdjs.Name_32InputCode.GDName_9595InputObjects2.length = 0;
gdjs.Name_32InputCode.GDBackgroundObjects1.length = 0;
gdjs.Name_32InputCode.GDBackgroundObjects2.length = 0;
gdjs.Name_32InputCode.GDPLAY_9595BUTTONObjects1.length = 0;
gdjs.Name_32InputCode.GDPLAY_9595BUTTONObjects2.length = 0;
gdjs.Name_32InputCode.GDPLAYObjects1.length = 0;
gdjs.Name_32InputCode.GDPLAYObjects2.length = 0;
gdjs.Name_32InputCode.GDgame_9595logoObjects1.length = 0;
gdjs.Name_32InputCode.GDgame_9595logoObjects2.length = 0;
gdjs.Name_32InputCode.GDhouse_9595logoObjects1.length = 0;
gdjs.Name_32InputCode.GDhouse_9595logoObjects2.length = 0;
gdjs.Name_32InputCode.GDBackgroundObjects1.length = 0;
gdjs.Name_32InputCode.GDBackgroundObjects2.length = 0;

gdjs.Name_32InputCode.eventsList2(runtimeScene);
gdjs.Name_32InputCode.GDName_9595InputObjects1.length = 0;
gdjs.Name_32InputCode.GDName_9595InputObjects2.length = 0;
gdjs.Name_32InputCode.GDBackgroundObjects1.length = 0;
gdjs.Name_32InputCode.GDBackgroundObjects2.length = 0;
gdjs.Name_32InputCode.GDPLAY_9595BUTTONObjects1.length = 0;
gdjs.Name_32InputCode.GDPLAY_9595BUTTONObjects2.length = 0;
gdjs.Name_32InputCode.GDPLAYObjects1.length = 0;
gdjs.Name_32InputCode.GDPLAYObjects2.length = 0;
gdjs.Name_32InputCode.GDgame_9595logoObjects1.length = 0;
gdjs.Name_32InputCode.GDgame_9595logoObjects2.length = 0;
gdjs.Name_32InputCode.GDhouse_9595logoObjects1.length = 0;
gdjs.Name_32InputCode.GDhouse_9595logoObjects2.length = 0;
gdjs.Name_32InputCode.GDBackgroundObjects1.length = 0;
gdjs.Name_32InputCode.GDBackgroundObjects2.length = 0;


return;

}

gdjs['Name_32InputCode'] = gdjs.Name_32InputCode;
