using System;
using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;
using UnityEngine.Rendering.Universal;
using UnityEngine.Serialization;

public class BottleController : MonoBehaviour
{
    public Color[] arrColor;
    public SpriteRenderer bottleMaskSR;
    public SpriteRenderer top;
    public List<SpriteRenderer> lstWaterSurfaceTop = new List<SpriteRenderer>();
    public List<SpriteRenderer> lstWaterSurface = new List<SpriteRenderer>();

    public AnimationCurve fillAmountCur;

    [FormerlySerializedAs("twoScaleAndRotationMultiplierCur")]
    public AnimationCurve scaleAndRotationMultiplierCur;

    public AnimationCurve rotationSpeedMultipiler;

    [FormerlySerializedAs("fillAmount")] public float[] arrFillAmount;

    [FormerlySerializedAs("rotationValues")]
    public float[] arrRotationValues;

    private int rotationIndex = 0;

    [Range(0, 4)] public int numberOfColorInBottle = 4;
    public int numberOfTopColorLayers = 1;
    public Color topColor;

    [FormerlySerializedAs("otherBottleController")]
    public BottleController otherBottleControllerRef;

    private int numberOfColorToTransfer = 0;


    public Transform leftPoint;
    public Transform rightPoint;
    [HideInInspector] public Transform choosenPoint;

    private float directionMultiplier = 1.0f;

    private Vector3 originPos;
    private Vector3 startPos;
    private Vector3 endPos;
    public LineRenderer lineRenderer;
    public FxBubblesBottle fxBotNuoc;
    public BoxCollider2D boxCollider2D;
    public GameObject done;
    public GameObject stroke;

    [HideInInspector] public bool isCanController;

    //public SurfaceColor surfaceColor;
    private void Start()
    {
        bottleMaskSR.material.SetFloat("_FillAmount", arrFillAmount[numberOfColorInBottle]);
        originPos = transform.position;
        UpdateColor();
        UpdateTopColorValues();
        fxBotNuoc.ActiveFx(numberOfColorInBottle > 0, arrFillAmount[numberOfColorInBottle]);
        isCanController = true;

        // var infoPoint = surfaceColor.CalculateLocalSurfacePoint(Transform, 0f, bottleMaskObject, _ySizeMask);
        // surfaceColor.transform.position = infoPoint.position;
        // surfaceColor.transform.localEulerAngles = Vector3.zero;
    }

    public void BottleIsSelected()
    {
        StartCoroutine(IEBottleMoveY(0.5f));
    }

    public void BottleIsUnSelected()
    {
        StartCoroutine(IEBottleMoveY(0));
    }

    IEnumerator IEBottleMoveY(float y)
    {
        float t = 0;
        while (t <= 0.3f)
        {
            transform.position = Vector3.Lerp(transform.position,
                new Vector2(originPos.x, originPos.y + y), t);
            t += Time.deltaTime * 2;
            yield return new WaitForEndOfFrame();
        }

        transform.position = new Vector2(originPos.x, originPos.y + y);
    }

    public void TransferColor()
    {
        ChooseRotationAndDirection();
        numberOfColorToTransfer =
            Mathf.Min(numberOfTopColorLayers, 4 - otherBottleControllerRef.numberOfColorInBottle);
        for (int i = 0; i < numberOfColorToTransfer; i++)
        {
            otherBottleControllerRef.arrColor[otherBottleControllerRef.numberOfColorInBottle + i] = topColor;
        }

        otherBottleControllerRef.UpdateColor();
        CalculateRotationIndex(4 - otherBottleControllerRef.numberOfColorInBottle);

        transform.GetComponent<SpriteRenderer>().sortingOrder += 2;
        bottleMaskSR.sortingOrder += 2;
        top.sortingOrder += 2;
        stroke.SetActive(false);
        StartCoroutine(IEMoveBottle());
    }

    IEnumerator IEMoveBottle()
    {
        isCanController = false;
        startPos = transform.position;
        if (choosenPoint == leftPoint)
        {
            endPos = otherBottleControllerRef.rightPoint.position;
        }
        else
        {
            endPos = otherBottleControllerRef.leftPoint.position;
        }

        float t = 0;
        while (t <= 1f)
        {
            transform.position = Vector3.Lerp(startPos, endPos, t);
            t += Time.deltaTime * 2;
            yield return new WaitForEndOfFrame();
        }

        fxBotNuoc.ActiveFx(false);
        otherBottleControllerRef.fxBotNuoc.ActiveFx(true, GetCurrentFill());
        DisableAnimLine();
        transform.position = endPos;
        StartCoroutine(IERotateBottle());
    }

    IEnumerator IEMoveBottleBack()
    {
        startPos = transform.position;
        endPos = originPos;
        float t = 0;
        while (t <= 1f)
        {
            transform.position = Vector3.Lerp(startPos, endPos, t);
            t += Time.deltaTime * 2;
            yield return new WaitForEndOfFrame();
        }

        transform.position = endPos;
        transform.GetComponent<SpriteRenderer>().sortingOrder -= 2;
        bottleMaskSR.sortingOrder -= 2;
        top.sortingOrder -= 2;
        isCanController = true;
    }

    void UpdateColor()
    {
        bottleMaskSR.material.SetColor("_C1", arrColor[0]);
        bottleMaskSR.material.SetColor("_C2", arrColor[1]);
        bottleMaskSR.material.SetColor("_C3", arrColor[2]);
        bottleMaskSR.material.SetColor("_C4", arrColor[3]);

        for (int i = 0; i < lstWaterSurface.Count; i++)
        {
            lstWaterSurface[i].color = arrColor[i + 1];
        }

        SetColorTop(arrColor[arrColor.Length - 1]);
    }

    public float timeRotate = 1.0f;
    private bool playSoundWaterDropOneTime = true;

    IEnumerator IERotateBottle()
    {
        float t = 0;
        float lerpValue;
        float angleValue;
        float lastAngleValue = 0;
        float startAngleValue = directionMultiplier * arrRotationValues[4 - numberOfColorInBottle];
        //float startSurfacePosY = surfaceColor.transform.localPosition.y;
        //otherBottleControllerRef.surfaceColor.transform.DOLocalMoveY(startSurfacePosY * numberOfColorToTransfer, timeRotate);
        while (t < timeRotate)
        {
            lerpValue = t / timeRotate;
            angleValue = Mathf.Lerp(startAngleValue,
                directionMultiplier * arrRotationValues[rotationIndex], lerpValue);
            //transform.eulerAngles = new Vector3(0, 0, angleValue);
            transform.RotateAround(choosenPoint.position, Vector3.forward, lastAngleValue - angleValue);

            bottleMaskSR.material.SetFloat("_SARM", scaleAndRotationMultiplierCur.Evaluate(angleValue));
            if (arrFillAmount[numberOfColorInBottle] > fillAmountCur.Evaluate(angleValue) + 0.005f)
            {
                if (playSoundWaterDropOneTime)
                {
                    GlobalInstance.Instance.gameManagerInstance.audioManager.PlaySoundWaterDrop();
                    playSoundWaterDropOneTime = false;
                }

                if (!lineRenderer.enabled)
                {
                    lineRenderer.startColor = topColor;
                    lineRenderer.endColor = topColor;
                    lineRenderer.startWidth = 0.125f;
                    lineRenderer.SetPosition(0, choosenPoint.position);
                    lineRenderer.SetPosition(1, choosenPoint.position - Vector3.up * 5.5f);
                    lineRenderer.enabled = true;
                    AnimDoneLine(timeRotate);
                }

                bottleMaskSR.material.SetFloat("_FillAmount", fillAmountCur.Evaluate(angleValue));
                otherBottleControllerRef.FillUp(
                    fillAmountCur.Evaluate(lastAngleValue) - fillAmountCur.Evaluate(angleValue));
                //otherBottleControllerRef.surfaceColor.ActiveFx(true);
            }

            t += Time.deltaTime /* rotationSpeedMultipiler.Evaluate(angleValue)*/;
            lastAngleValue = angleValue;
            yield return new WaitForEndOfFrame();
        }

        playSoundWaterDropOneTime = true;
        angleValue = directionMultiplier * arrRotationValues[rotationIndex];
        //transform.eulerAngles = new Vector3(0, 0, angleValue);
        bottleMaskSR.material.SetFloat("_SARM", scaleAndRotationMultiplierCur.Evaluate(angleValue));
        bottleMaskSR.material.SetFloat("_FillAmount", fillAmountCur.Evaluate(angleValue));
        numberOfColorInBottle -= numberOfColorToTransfer;
        otherBottleControllerRef.numberOfColorInBottle += numberOfColorToTransfer;
        lineRenderer.enabled = false;
        GlobalInstance.Instance.gameManagerInstance.audioManager.StopSound();
        StartCoroutine(IERotateBottleBack());
        otherBottleControllerRef.CheckCompleteBottle();
        GlobalInstance.Instance.gameManagerInstance.gamePlayController.isCanControll = true;
    }

    IEnumerator IERotateBottleBack()
    {
        float t = 0;
        float lerpValue;
        float angleValue;
        float lastAngleValue = directionMultiplier * arrRotationValues[rotationIndex];
        while (t < timeRotate)
        {
            lerpValue = t / timeRotate;
            angleValue = Mathf.Lerp(directionMultiplier * arrRotationValues[rotationIndex], 0.0f, lerpValue);
            //transform.eulerAngles = new Vector3(0, 0, angleValue);

            transform.RotateAround(choosenPoint.position, Vector3.forward, lastAngleValue - angleValue);

            bottleMaskSR.material.SetFloat("_SARM", scaleAndRotationMultiplierCur.Evaluate(angleValue));

            lastAngleValue = angleValue;
            t += Time.deltaTime;
            yield return new WaitForEndOfFrame();
        }

        UpdateTopColorValues();
        angleValue = 0f;
        transform.eulerAngles = new Vector3(0, 0, angleValue);
        bottleMaskSR.material.SetFloat("_SARM", scaleAndRotationMultiplierCur.Evaluate(angleValue));
        StartCoroutine(IEMoveBottleBack());
        fxBotNuoc.ActiveFx(true, GetCurrentFill());
        //otherBottleControllerRef.surfaceColor.ActiveFx(false);
    }

    public void SetColorTop(Color color)
    {
        Color targetColor = HelperUtility.GetSurfaceColor(color);
        foreach (var spriteRenderer in lstWaterSurfaceTop)
        {
            spriteRenderer.color = targetColor;
        }
    }

    public void UpdateTopColorValues()
    {
        topColor = Color.clear;
        if (numberOfColorInBottle == 0) return;
        numberOfTopColorLayers = 1;
        topColor = arrColor[numberOfColorInBottle - 1];
        for (int i = numberOfColorInBottle; i > 1; i--)
        {
            if (!arrColor[i - 1].Equals(arrColor[i - 2])) break;
            numberOfTopColorLayers++;
        }

        rotationIndex = 4 - (numberOfColorInBottle - numberOfTopColorLayers);

        // if (numberOfColorInBottle == 4)
        // {
        //     if (arrColor[3].Equals(arrColor[2]))
        //     {
        //         numberOfTopColorLayers = 2;
        //         if (arrColor[2].Equals(arrColor[1]))
        //         {
        //             numberOfTopColorLayers = 3;
        //             if (arrColor[1].Equals(arrColor[0]))
        //             {
        //                 numberOfTopColorLayers = 4;
        //             }
        //         }
        //     }
        // }
        // else if (numberOfColorInBottle == 3)
        // {
        //     if (arrColor[2].Equals(arrColor[1]))
        //     {
        //         numberOfTopColorLayers = 2;
        //         if (arrColor[1].Equals(arrColor[0]))
        //         {
        //             numberOfTopColorLayers = 3;
        //         }
        //     }
        // }
        // else if (numberOfColorInBottle == 2)
        // {
        //     if (arrColor[1].Equals(arrColor[0]))
        //     {
        //         numberOfTopColorLayers = 2;
        //     }
        // }
        //
        // rotationIndex = 3 - (numberOfColorInBottle - numberOfTopColorLayers);
    }

    public bool FillBottleCheck(Color colorToCheck)
    {
        if (numberOfColorInBottle == 0)
        {
            return true;
        }
        else
        {
            if (numberOfColorInBottle == 4)
            {
                return false;
            }
            else
            {
                if (topColor.Equals(colorToCheck))
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }
    }

    public void CheckCompleteBottle()
    {
        bool isDone = true;
        for (int i = 0; i < arrColor.Length - 1; i++)
        {
            for (int j = 1; j < arrColor.Length; j++)
            {
                if (arrColor[i] != arrColor[j])
                {
                    isDone = false;
                    break;
                }
            }
        }

        if (numberOfColorInBottle != 4)
        {
            isDone = false;
        }

        if (isDone)
        {
            done.SetActive(true);
            ParticleSystem.MainModule psMain = done.transform.GetChild(2).GetComponent<ParticleSystem>().main;
            psMain.startColor = arrColor[0];
            fxBotNuoc.ActiveFx(true, GetCurrentFill());
            boxCollider2D.enabled = false;
            GlobalInstance.Instance.gameManagerInstance.audioManager.PlaySoundCompleteBottle();
            GlobalInstance.Instance.gameManagerInstance.LogEventCompleteBottle(arrColor[0]);
        }
    }

    private void CalculateRotationIndex(int numberOfEmptySpaceInSecondBottle)
    {
        rotationIndex =
            4 - (numberOfColorInBottle - Mathf.Min(numberOfEmptySpaceInSecondBottle, numberOfTopColorLayers));
    }

    private void FillUp(float fillAmountToAdd)
    {
        bottleMaskSR.material.SetFloat("_FillAmount", bottleMaskSR.material.GetFloat("_FillAmount") + fillAmountToAdd);
    }

    private void ChooseRotationAndDirection()
    {
        // if (transform.position.x > otherBottleControllerRef.transform.position.x)
        // {
        //     choosenPoint = leftPoint;
        //     directionMultiplier = -1.0f;
        // }
        // else
        // {
        //     choosenPoint = rightPoint;
        //     directionMultiplier = 1.0f;
        // }
        choosenPoint = rightPoint;
        directionMultiplier = 1.0f;
    }

    private Tweener _tweenAnimLine;

    public void AnimDoneLine(float time)
    {
        float startWidth = lineRenderer.startWidth;
        _tweenAnimLine = DOTween.To(() => startWidth, x => lineRenderer.startWidth = x, 0f, time)
            .SetEase(Ease.Linear);
    }

    public void DisableAnimLine()
    {
        _tweenAnimLine?.Kill();
    }

    public float GetCurrentFill()
    {
        return bottleMaskSR.material.GetFloat("_FillAmount");
    }
}