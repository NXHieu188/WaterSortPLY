using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AudioManager : Singleton<AudioManager>
{
    public AudioSource audioSourceFX;
    public AudioSource audioSourceBG;
    public AudioClip clipWaterDrop, clipClick, clickCompleteBottle, clipWin;

    public void PlaySoundBG()
    {
        audioSourceBG.Play();
    }

    public void PlaySoundWaterDrop()
    {
        PlaySoundFX(clipWaterDrop);
    }

    public void PlaySoundClick()
    {
        PlaySoundFX(clipClick);
    }

    public void PlaySoundCompleteBottle()
    {
        PlaySoundFX(clickCompleteBottle);
    }

    public void PlaySoundWin()
    {
        PlaySoundFX(clipWin);
    }


    void PlaySoundFX(AudioClip audioClip)
    {
        //audioSourceFX.PlayOneShot(audioClip);
        audioSourceFX.clip = audioClip;
        audioSourceFX.Play();
    }

    public void OnSound()
    {
        audioSourceBG.volume = 1;
        audioSourceFX.volume = 1;
    }

    public void MuteSound()
    {
        audioSourceBG.volume = 0;
        audioSourceFX.volume = 0;
    }

    public void StopSound()
    {
        audioSourceFX.clip = null;
    }
}