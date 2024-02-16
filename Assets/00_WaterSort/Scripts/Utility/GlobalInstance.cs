using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GlobalInstance : Singleton<GlobalInstance>
{
    public GameManager1 gameManagerInstance = GameManager1.Instance;
}