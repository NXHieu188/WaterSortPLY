using System;
using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;

public class GameManager1 : Singleton<GameManager1>
{
    public GamePlayController gamePlayController;
    public AudioManager audioManager;
    public int indexBottleComplete;
    public List<Image> lstImageColor;
    public List<BottleController> lstBottleController = new List<BottleController>();
    public GameObject handGuide;
    public Color colorGuideCache;
    private BottleController bottleTarget;
    public GameObject vfxWin;
    public GameObject endCard;
    public GameObject txtTapToPour;
    public GameObject logo, txtName, btnDown;
    private bool isEndGame;

    private void Start()
    {
        gamePlayController.isCanControll = true;
        Luna.Unity.LifeCycle.GameStarted();
    }

    private void Update()
    {
        if (isEndGame)
        {
            if (Input.GetMouseButtonDown(0))
            {
                InstallAllGame();
            }
        }
    }

    public void EndGame()
    {
        GlobalInstance.Instance.gameManagerInstance.audioManager.PlaySoundWin();
        for (int i = 0; i < lstBottleController.Count; i++)
        {
            lstBottleController[i].transform.DOScale(0, 0.6f);
        }

        for (int i = 0; i < lstImageColor.Count; i++)
        {
            lstImageColor[i].transform.DOScale(0, 0.6f);
        }
        DOVirtual.DelayedCall(0.85f, () =>
        {
            vfxWin.SetActive(true);
            endCard.SetActive(true);
            logo.transform.DOScale(1, 0.4f);
            txtName.transform.DOScale(1, 0.4f);
            btnDown.transform.DOScale(1, 0.4f).OnComplete(() =>
            {
                isEndGame = true;
                Luna.Unity.LifeCycle.GameEnded();
            });
        });
    }

    IEnumerator IEEndGame()
    {
        yield return new WaitForSeconds(1f);
        EndGame();
    }

    public void InstallAllGame()
    {
        Luna.Unity.Playable.InstallFullGame();
    }

    public float CalculateRatio(Camera cam)
    {
        return (float) cam.pixelHeight / cam.pixelWidth;
    }

    public void LogEventCompleteBottle(Color color)
    {
        indexBottleComplete++;
        Luna.Unity.Analytics.LogEvent("CompleteBottle", indexBottleComplete);
        for (int i = 0; i < lstImageColor.Count; i++)
        {
            if (lstImageColor[i].color == color)
            {
                lstImageColor[i].transform.GetChild(1).transform.DOScale(1, 0.3f).SetEase(Ease.OutBack);
            }
        }

        gamePlayController.isCanControll = false;
        if (coroutine != null)
            StopCoroutine(coroutine);
        handGuide.SetActive(false);
        StartCoroutine(IEEndGame());
        txtTapToPour.SetActive(false);
    }

    public void FindGuide()
    {
        if (coroutine != null)
            StopCoroutine(coroutine);
        for (int i = 0; i < lstBottleController.Count; i++)
        {
            if (gamePlayController.firstBottle.topColor == lstBottleController[i].topColor &&
                lstBottleController[i].numberOfColorInBottle < 4 &&
                gamePlayController.firstBottle != lstBottleController[i])
            {
                bottleTarget = lstBottleController[i];
                break;
            }

            if (lstBottleController[i].numberOfColorInBottle == 0)
            {
                bottleTarget = lstBottleController[i];
                break;
            }
        }

        if (bottleTarget != null)
        {
            handGuide.transform.position = bottleTarget.transform.position;
            bottleTarget = null;
        }
    }

    private int totalGuide = 4;
    private int indexGuide = 0;

    public void HideGuide()
    {
        handGuide.SetActive(false);
        indexGuide++;
        if (indexGuide < totalGuide)
        {
            if (coroutine != null)
                StopCoroutine(coroutine);
            coroutine = StartCoroutine(IEShowNextGuide(4f));
        }
    }

    private Coroutine coroutine;

    IEnumerator IEShowNextGuide(float time)
    {
        yield return new WaitForSeconds(time);
        for (int i = 0; i < lstBottleController.Count; i++)
        {
            if (colorGuideCache == lstBottleController[i].topColor)
            {
                bottleTarget = lstBottleController[i];
                break;
            }
        }

        handGuide.SetActive(true);
        handGuide.transform.position = bottleTarget.transform.position;
        bottleTarget = null;
    }
}