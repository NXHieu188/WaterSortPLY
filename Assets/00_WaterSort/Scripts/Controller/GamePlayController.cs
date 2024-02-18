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
                            firstBottle.BottleIsSelected();
                        }
                        else
                        {
                            if (firstBottle == hitBottleContorller)
                            {
                                firstBottle.BottleIsUnSelected();
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
                                    isCanControll = false;
                                    firstBottle = null;
                                    secondBottle = null;
                                }
                                else
                                {
                                    firstBottle.BottleIsUnSelected();
                                    firstBottle = null;
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