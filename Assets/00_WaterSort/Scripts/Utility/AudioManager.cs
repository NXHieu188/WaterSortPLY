using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AudioManager : Singleton<AudioManager>
{
    public AudioSource audioSourceFX;
    public AudioSource audioSourceBG;
    public AudioClip clipCarMove,clipCarCrash, clipWin, clipLose;

    public void PlaySoundBG()
    {
        audioSourceBG.Play();
    }
    public void PlaySoundCarMove()
    {
        PlaySoundFX(clipCarMove);
    }
    public void PlaySoundCarCrash()
    {
        PlaySoundFX(clipCarCrash);
    }
    

    public void PlaySoundWin()
    {
        PlaySoundFX(clipWin);
    }

    public void PlaySoundLose()
    {
        PlaySoundFX(clipLose);
    }
    void PlaySoundFX(AudioClip audioClip)
    {
        audioSourceFX.PlayOneShot(audioClip);
    }

    public void PlaySound()
    {
        audioSourceBG.volume = 1;
        audioSourceFX.volume = 1;
    }

    public void StopSound()
    {
        audioSourceBG.volume = 0;
        audioSourceFX.volume = 0;
    }
}