using System.Collections;
using System.Collections.Generic;
using UnityEngine;
public class DefineHelper
{
    public const string Movement = "Movement";
    public const string Rotate = "Rotate";
}
public class NameTag
{
    public const string Player = "Player";
}
public enum EventID
{
    CheckBoadDone = 0,
    CheckEndGame = 1,
    CheckMove = 2,
}
public enum TypePlayer
{
    Player = 0,
    Enemy = 1,
}

