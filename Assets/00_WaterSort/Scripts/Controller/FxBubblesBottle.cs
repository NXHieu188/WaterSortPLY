using System.Collections;
using UnityEngine;

public class FxBubblesBottle : MonoBehaviour {
    public float lifeTime;
    float RatioDefault = 16f / 9;
    public float CamRatio { get; private set; }
    public ParticleSystem fxBubbles;
    public void ActiveFx(bool isActive, float ratioLifeTime = 0f) {
        CamRatio = GlobalInstance.Instance.gameManagerInstance.CalculateRatio(Camera.main);
        gameObject.SetActive(isActive);
        if (!isActive) return;
        UpdateFx(ratioLifeTime);
    }
    public void UpdateFx(float ratioLifeTime = 0f) {
        ParticleSystem.MainModule psMain = fxBubbles.main;
        float ratioScreen = RatioDefault / CamRatio;
        float realLifeTime = lifeTime * ratioLifeTime * ratioScreen;
        psMain.startLifetime = realLifeTime/2.2f;
        //Debug.Log(realLifeTime);
    }
}