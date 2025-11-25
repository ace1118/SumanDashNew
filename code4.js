gdjs.WinnerCode = {};
gdjs.WinnerCode.localVariables = [];
gdjs.WinnerCode.idToCallbackMap = new Map();
gdjs.WinnerCode.GDYouWinObjects1= [];
gdjs.WinnerCode.GDYouWinObjects2= [];
gdjs.WinnerCode.GDTryAgain_9595BUTTONObjects1= [];
gdjs.WinnerCode.GDTryAgain_9595BUTTONObjects2= [];
gdjs.WinnerCode.GDTryAgainObjects1= [];
gdjs.WinnerCode.GDTryAgainObjects2= [];
gdjs.WinnerCode.GDSCOREObjects1= [];
gdjs.WinnerCode.GDSCOREObjects2= [];
gdjs.WinnerCode.GDgame_9595logoObjects1= [];
gdjs.WinnerCode.GDgame_9595logoObjects2= [];
gdjs.WinnerCode.GDhouse_9595logoObjects1= [];
gdjs.WinnerCode.GDhouse_9595logoObjects2= [];
gdjs.WinnerCode.GDBackgroundObjects1= [];
gdjs.WinnerCode.GDBackgroundObjects2= [];


gdjs.WinnerCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(24059628);
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
gdjs.copyArray(runtimeScene.getObjects("SCORE"), gdjs.WinnerCode.GDSCOREObjects1);
gdjs.copyArray(runtimeScene.getObjects("TryAgain"), gdjs.WinnerCode.GDTryAgainObjects1);
gdjs.copyArray(runtimeScene.getObjects("TryAgain_BUTTON"), gdjs.WinnerCode.GDTryAgain_9595BUTTONObjects1);
gdjs.copyArray(runtimeScene.getObjects("YouWin"), gdjs.WinnerCode.GDYouWinObjects1);
{for(var i = 0, len = gdjs.WinnerCode.GDTryAgain_9595BUTTONObjects1.length ;i < len;++i) {
    gdjs.WinnerCode.GDTryAgain_9595BUTTONObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}
{for(var i = 0, len = gdjs.WinnerCode.GDSCOREObjects1.length ;i < len;++i) {
    gdjs.WinnerCode.GDSCOREObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}
{for(var i = 0, len = gdjs.WinnerCode.GDYouWinObjects1.length ;i < len;++i) {
    gdjs.WinnerCode.GDYouWinObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}
{for(var i = 0, len = gdjs.WinnerCode.GDTryAgainObjects1.length ;i < len;++i) {
    gdjs.WinnerCode.GDTryAgainObjects1[i].setCenterPositionInScene((( gdjs.WinnerCode.GDTryAgain_9595BUTTONObjects1.length === 0 ) ? 0 :gdjs.WinnerCode.GDTryAgain_9595BUTTONObjects1[0].getAABBCenterX()),(( gdjs.WinnerCode.GDTryAgain_9595BUTTONObjects1.length === 0 ) ? 0 :gdjs.WinnerCode.GDTryAgain_9595BUTTONObjects1[0].getAABBCenterY()) - 15);
}
}
{for(var i = 0, len = gdjs.WinnerCode.GDSCOREObjects1.length ;i < len;++i) {
    gdjs.WinnerCode.GDSCOREObjects1[i].getBehavior("Text").setText("SCORE : " + runtimeScene.getGame().getVariables().getFromIndex(5).getAsString());
}
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
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GamePlay", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TryAgain_BUTTON"), gdjs.WinnerCode.GDTryAgain_9595BUTTONObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WinnerCode.GDTryAgain_9595BUTTONObjects1.length;i<l;++i) {
    if ( gdjs.WinnerCode.GDTryAgain_9595BUTTONObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.WinnerCode.GDTryAgain_9595BUTTONObjects1[k] = gdjs.WinnerCode.GDTryAgain_9595BUTTONObjects1[i];
        ++k;
    }
}
gdjs.WinnerCode.GDTryAgain_9595BUTTONObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GamePlay", false);
}
}

}


};

gdjs.WinnerCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WinnerCode.GDYouWinObjects1.length = 0;
gdjs.WinnerCode.GDYouWinObjects2.length = 0;
gdjs.WinnerCode.GDTryAgain_9595BUTTONObjects1.length = 0;
gdjs.WinnerCode.GDTryAgain_9595BUTTONObjects2.length = 0;
gdjs.WinnerCode.GDTryAgainObjects1.length = 0;
gdjs.WinnerCode.GDTryAgainObjects2.length = 0;
gdjs.WinnerCode.GDSCOREObjects1.length = 0;
gdjs.WinnerCode.GDSCOREObjects2.length = 0;
gdjs.WinnerCode.GDgame_9595logoObjects1.length = 0;
gdjs.WinnerCode.GDgame_9595logoObjects2.length = 0;
gdjs.WinnerCode.GDhouse_9595logoObjects1.length = 0;
gdjs.WinnerCode.GDhouse_9595logoObjects2.length = 0;
gdjs.WinnerCode.GDBackgroundObjects1.length = 0;
gdjs.WinnerCode.GDBackgroundObjects2.length = 0;

gdjs.WinnerCode.eventsList0(runtimeScene);
gdjs.WinnerCode.GDYouWinObjects1.length = 0;
gdjs.WinnerCode.GDYouWinObjects2.length = 0;
gdjs.WinnerCode.GDTryAgain_9595BUTTONObjects1.length = 0;
gdjs.WinnerCode.GDTryAgain_9595BUTTONObjects2.length = 0;
gdjs.WinnerCode.GDTryAgainObjects1.length = 0;
gdjs.WinnerCode.GDTryAgainObjects2.length = 0;
gdjs.WinnerCode.GDSCOREObjects1.length = 0;
gdjs.WinnerCode.GDSCOREObjects2.length = 0;
gdjs.WinnerCode.GDgame_9595logoObjects1.length = 0;
gdjs.WinnerCode.GDgame_9595logoObjects2.length = 0;
gdjs.WinnerCode.GDhouse_9595logoObjects1.length = 0;
gdjs.WinnerCode.GDhouse_9595logoObjects2.length = 0;
gdjs.WinnerCode.GDBackgroundObjects1.length = 0;
gdjs.WinnerCode.GDBackgroundObjects2.length = 0;


return;

}

gdjs['WinnerCode'] = gdjs.WinnerCode;
