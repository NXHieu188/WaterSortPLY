using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BottleController : MonoBehaviour
{
    public Color[] arrColor;
    public SpriteRenderer bottleMaskSR;
    public List<SpriteRenderer> lstWaterSurfaceTop = new List<SpriteRenderer>();
    public List<SpriteRenderer> lstWaterSurface = new List<SpriteRenderer>();
    
    public AnimationCurve fillAmountCur;
    public AnimationCurve scaleAndRotationMultiplierCur;
    public AnimationCurve rotationSpeedMultipiler;

    private void Start()
    {
        UpdateColor();
    }

    private void Update()
    {
        if (Input.GetKeyUp(KeyCode.A))
        {
            StartCoroutine(IERotateBottle());
        }
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

    IEnumerator IERotateBottle()
    {
        float t = 0;
        float lerpValue;
        float angleValue;
        while (t < timeRotate)
        {
            lerpValue = t / timeRotate;
            angleValue = Mathf.Lerp(0.0f, 90.0f, lerpValue);
            transform.eulerAngles = new Vector3(0, 0, angleValue);

            bottleMaskSR.material.SetFloat("_SARM", scaleAndRotationMultiplierCur.Evaluate(angleValue));
            bottleMaskSR.material.SetFloat("_FillAmount", fillAmountCur.Evaluate(angleValue));

            t += Time.deltaTime * rotationSpeedMultipiler.Evaluate(angleValue);
            yield return new WaitForEndOfFrame();
        }

        angleValue = 90.0f;
        transform.eulerAngles = new Vector3(0, 0, angleValue);
        bottleMaskSR.material.SetFloat("_SARM", scaleAndRotationMultiplierCur.Evaluate(angleValue));
        bottleMaskSR.material.SetFloat("_FillAmount", fillAmountCur.Evaluate(angleValue));

        //StartCoroutine(IERotateBottleBack());
    }

    IEnumerator IERotateBottleBack()
    {
        float t = 0;
        float lerpValue;
        float angleValue;
        while (t < timeRotate)
        {
            lerpValue = t / timeRotate;
            angleValue = Mathf.Lerp(90.0f, 0.0f, lerpValue);
            transform.eulerAngles = new Vector3(0, 0, angleValue);

            bottleMaskSR.material.SetFloat("_SARM", scaleAndRotationMultiplierCur.Evaluate(angleValue));

            t += Time.deltaTime;
            yield return new WaitForEndOfFrame();
        }

        angleValue = 0f;
        transform.eulerAngles = new Vector3(0, 0, angleValue);
        bottleMaskSR.material.SetFloat("_SARM", scaleAndRotationMultiplierCur.Evaluate(angleValue));
    }

    public void SetColorTop(Color color)
    {
        Color targetColor = HelperUtility.GetSurfaceColor(color);
        foreach (var spriteRenderer in lstWaterSurfaceTop)
        {
            spriteRenderer.color = targetColor;
        }
    }

    void UpdateColorTop()
    {
    }
}