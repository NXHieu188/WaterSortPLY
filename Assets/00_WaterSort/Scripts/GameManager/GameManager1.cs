using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameManager1 : Singleton<GameManager1>
{
    public GamePlayController gamePlayController;

    private void Start()
    {
        gamePlayController.isCanControll = true;
        Luna.Unity.LifeCycle.GameStarted();
    }

    public void EndGame()
    {
        Luna.Unity.LifeCycle.GameEnded();
    }

    public void InstallAllGame()
    {
        Luna.Unity.Playable.InstallFullGame();
    }
    public float CalculateRatio(Camera cam) {
        return (float)cam.pixelHeight / cam.pixelWidth;
    }
}