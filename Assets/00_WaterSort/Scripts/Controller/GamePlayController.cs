using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GamePlayController : MonoBehaviour
{
    public BottleController firstBottle, secondBottle;
    [HideInInspector] public bool isCanControll;
    void Update()
    {
        if (isCanControll)
        {
            if (Input.GetMouseButtonDown(0))
            {
                Vector3 mousePos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
                Vector3 mousePos2D = new Vector2(mousePos.x, mousePos.y);
                RaycastHit2D hit = Physics2D.Raycast(mousePos2D, Vector2.zero);
                if (hit.collider != null)
                {
                    BottleController hitBottleContorller = hit.collider.GetComponent<BottleController>();
                    if (hitBottleContorller != null && hitBottleContorller.isCanController)
                    {
                        if (firstBottle == null)
                        {
                            firstBottle = hitBottleContorller;
                            GlobalInstance.Instance.gameManagerInstance.audioManager.PlaySoundClick();
                            firstBottle.stroke.SetActive(true);
                            firstBottle.BottleIsSelected();
                            GlobalInstance.Instance.gameManagerInstance.FindGuide();
                        }
                        else
                        {
                            if (firstBottle == hitBottleContorller)
                            {
                                firstBottle.BottleIsUnSelected();
                                firstBottle.stroke.SetActive(false);
                                firstBottle = null;
                            }
                            else
                            {
                                secondBottle = hitBottleContorller;
                                firstBottle.otherBottleControllerRef = secondBottle;
                                firstBottle.UpdateTopColorValues();
                                secondBottle.UpdateTopColorValues();
                                if (secondBottle.FillBottleCheck(firstBottle.topColor))
                                {
                                    firstBottle.TransferColor();
                                    GlobalInstance.Instance.gameManagerInstance.HideGuide();
                                    isCanControll = false;
                                    firstBottle = null;
                                    secondBottle = null;
                                }
                                else
                                {
                                    firstBottle.BottleIsUnSelected();
                                    firstBottle.stroke.SetActive(false);
                                    firstBottle = secondBottle;
                                    GlobalInstance.Instance.gameManagerInstance.audioManager.PlaySoundClick();
                                    firstBottle.stroke.SetActive(true);
                                    firstBottle.BottleIsSelected();
                                    GlobalInstance.Instance.gameManagerInstance.FindGuide();
                                    secondBottle = null;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}