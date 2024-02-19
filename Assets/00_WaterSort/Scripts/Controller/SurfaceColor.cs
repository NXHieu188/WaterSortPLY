using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SurfaceColor : MonoBehaviour
{
    [SerializeField] private ParticleSystem _fxSurface;
    public float CamRatio { get; private set; }
    public void ActiveFx(bool isActive) {
        _fxSurface.Clear();
        _fxSurface.gameObject.SetActive(isActive);
        if (!isActive) return;
        _fxSurface.Play();
    }
    // public InfoPoint CalculateLocalSurfacePoint(Transform owner, float angle, SpriteRenderer sprite, float ySizeMask) {
    //     CamRatio = GlobalInstance.Instance.gameManagerInstance.CalculateRatio(Camera.main);
    //     float ratioFill = 0.75f * sprite.material.GetFloat("_FillAmount");
    //     float scaleRatio = GUIManager.Instance.ScaleCanvas / owner.localScale.y;
    //
    //     float sizeLiquid = sprite.material.GetFloat("_SARM");
    //     float camRatio = CamRatio / (16/9);
    //     float localPosY = sprite.transform.localPosition.y;
    //     InfoPoint infoPoint = CalculatePosLayer(angle, ratioFill, scaleRatio, camRatio, sizeLiquid, localPosY, ySizeMask);
    //     Vector3 pos = owner.TransformPoint(infoPoint.position);
    //     infoPoint.UpdatePosition(pos);
    //     return infoPoint;
    // }
}
// public class InfoPoint {
//     public Vector3 position;
//     public bool isOutYSize;
//     public InfoPoint(Vector3 position, bool isOutYSize) {
//         this.position = position;
//         this.isOutYSize = isOutYSize;
//     }
//     public void UpdatePosition(Vector3 position) {
//         this.position = position;
//     }
// }
