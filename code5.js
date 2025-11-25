gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.localVariables = [];
gdjs.Game_32OverCode.idToCallbackMap = new Map();
gdjs.Game_32OverCode.GDGameOverObjects1= [];
gdjs.Game_32OverCode.GDGameOverObjects2= [];
gdjs.Game_32OverCode.GDTryAgain_9595BUTTONObjects1= [];
gdjs.Game_32OverCode.GDTryAgain_9595BUTTONObjects2= [];
gdjs.Game_32OverCode.GDTryAgainObjects1= [];
gdjs.Game_32OverCode.GDTryAgainObjects2= [];
gdjs.Game_32OverCode.GDSCOREObjects1= [];
gdjs.Game_32OverCode.GDSCOREObjects2= [];
gdjs.Game_32OverCode.GDgame_9595logoObjects1= [];
gdjs.Game_32OverCode.GDgame_9595logoObjects2= [];
gdjs.Game_32OverCode.GDhouse_9595logoObjects1= [];
gdjs.Game_32OverCode.GDhouse_9595logoObjects2= [];
gdjs.Game_32OverCode.GDBackgroundObjects1= [];
gdjs.Game_32OverCode.GDBackgroundObjects2= [];


gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24081060);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "mixkit-our-nights-627.mp3", false, 100, 1);
}
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "590c3836-7993-4f70-ad71-4a2c8971ff85", runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(8).getAsString());
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("GameOver"), gdjs.Game_32OverCode.GDGameOverObjects1);
gdjs.copyArray(runtimeScene.getObjects("SCORE"), gdjs.Game_32OverCode.GDSCOREObjects1);
gdjs.copyArray(runtimeScene.getObjects("TryAgain"), gdjs.Game_32OverCode.GDTryAgainObjects1);
gdjs.copyArray(runtimeScene.getObjects("TryAgain_BUTTON"), gdjs.Game_32OverCode.GDTryAgain_9595BUTTONObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDTryAgain_9595BUTTONObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDTryAgain_9595BUTTONObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}
{for(var i = 0, len = gdjs.Game_32OverCode.GDSCOREObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDSCOREObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}
{for(var i = 0, len = gdjs.Game_32OverCode.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDGameOverObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}
{for(var i = 0, len = gdjs.Game_32OverCode.GDTryAgainObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDTryAgainObjects1[i].setCenterPositionInScene((( gdjs.Game_32OverCode.GDTryAgain_9595BUTTONObjects1.length === 0 ) ? 0 :gdjs.Game_32OverCode.GDTryAgain_9595BUTTONObjects1[0].getAABBCenterX()),(( gdjs.Game_32OverCode.GDTryAgain_9595BUTTONObjects1.length === 0 ) ? 0 :gdjs.Game_32OverCode.GDTryAgain_9595BUTTONObjects1[0].getAABBCenterY()) - 15);
}
}
{for(var i = 0, len = gdjs.Game_32OverCode.GDSCOREObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDSCOREObjects1[i].getBehavior("Text").setText("SCORE : " + runtimeScene.getGame().getVariables().getFromIndex(5).getAsString());
}
}
{gdjs.evtTools.advancedWindow.setFullScreenable(true, runtimeScene);
}
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TryAgain_BUTTON"), gdjs.Game_32OverCode.GDTryAgain_9595BUTTONObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32OverCode.GDTryAgain_9595BUTTONObjects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDTryAgain_9595BUTTONObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32OverCode.GDTryAgain_9595BUTTONObjects1[k] = gdjs.Game_32OverCode.GDTryAgain_9595BUTTONObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDTryAgain_9595BUTTONObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GamePlay", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GamePlay", false);
}
}

}


{



}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDGameOverObjects1.length = 0;
gdjs.Game_32OverCode.GDGameOverObjects2.length = 0;
gdjs.Game_32OverCode.GDTryAgain_9595BUTTONObjects1.length = 0;
gdjs.Game_32OverCode.GDTryAgain_9595BUTTONObjects2.length = 0;
gdjs.Game_32OverCode.GDTryAgainObjects1.length = 0;
gdjs.Game_32OverCode.GDTryAgainObjects2.length = 0;
gdjs.Game_32OverCode.GDSCOREObjects1.length = 0;
gdjs.Game_32OverCode.GDSCOREObjects2.length = 0;
gdjs.Game_32OverCode.GDgame_9595logoObjects1.length = 0;
gdjs.Game_32OverCode.GDgame_9595logoObjects2.length = 0;
gdjs.Game_32OverCode.GDhouse_9595logoObjects1.length = 0;
gdjs.Game_32OverCode.GDhouse_9595logoObjects2.length = 0;
gdjs.Game_32OverCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32OverCode.GDBackgroundObjects2.length = 0;

gdjs.Game_32OverCode.eventsList0(runtimeScene);
gdjs.Game_32OverCode.GDGameOverObjects1.length = 0;
gdjs.Game_32OverCode.GDGameOverObjects2.length = 0;
gdjs.Game_32OverCode.GDTryAgain_9595BUTTONObjects1.length = 0;
gdjs.Game_32OverCode.GDTryAgain_9595BUTTONObjects2.length = 0;
gdjs.Game_32OverCode.GDTryAgainObjects1.length = 0;
gdjs.Game_32OverCode.GDTryAgainObjects2.length = 0;
gdjs.Game_32OverCode.GDSCOREObjects1.length = 0;
gdjs.Game_32OverCode.GDSCOREObjects2.length = 0;
gdjs.Game_32OverCode.GDgame_9595logoObjects1.length = 0;
gdjs.Game_32OverCode.GDgame_9595logoObjects2.length = 0;
gdjs.Game_32OverCode.GDhouse_9595logoObjects1.length = 0;
gdjs.Game_32OverCode.GDhouse_9595logoObjects2.length = 0;
gdjs.Game_32OverCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32OverCode.GDBackgroundObjects2.length = 0;


return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
