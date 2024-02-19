var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.JointSpring' )
  var i539 = data
  i538.spring = i539[0]
  i538.damper = i539[1]
  i538.targetPosition = i539[2]
  return i538
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.JointMotor' )
  var i541 = data
  i540.m_TargetVelocity = i541[0]
  i540.m_Force = i541[1]
  i540.m_FreeSpin = i541[2]
  return i540
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.JointLimits' )
  var i543 = data
  i542.m_Min = i543[0]
  i542.m_Max = i543[1]
  i542.m_Bounciness = i543[2]
  i542.m_BounceMinVelocity = i543[3]
  i542.m_ContactDistance = i543[4]
  i542.minBounce = i543[5]
  i542.maxBounce = i543[6]
  return i542
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.JointDrive' )
  var i545 = data
  i544.m_PositionSpring = i545[0]
  i544.m_PositionDamper = i545[1]
  i544.m_MaximumForce = i545[2]
  return i544
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i547 = data
  i546.m_Spring = i547[0]
  i546.m_Damper = i547[1]
  return i546
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i549 = data
  i548.m_Limit = i549[0]
  i548.m_Bounciness = i549[1]
  i548.m_ContactDistance = i549[2]
  return i548
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i551 = data
  i550.m_ExtremumSlip = i551[0]
  i550.m_ExtremumValue = i551[1]
  i550.m_AsymptoteSlip = i551[2]
  i550.m_AsymptoteValue = i551[3]
  i550.m_Stiffness = i551[4]
  return i550
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i553 = data
  i552.m_LowerAngle = i553[0]
  i552.m_UpperAngle = i553[1]
  return i552
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i555 = data
  i554.m_MotorSpeed = i555[0]
  i554.m_MaximumMotorTorque = i555[1]
  return i554
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i556 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i557 = data
  i556.m_DampingRatio = i557[0]
  i556.m_Frequency = i557[1]
  i556.m_Angle = i557[2]
  return i556
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i559 = data
  i558.m_LowerTranslation = i559[0]
  i558.m_UpperTranslation = i559[1]
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i560 = root || new pc.UnityMaterial()
  var i561 = data
  i560.name = i561[0]
  request.r(i561[1], i561[2], 0, i560, 'shader')
  i560.renderQueue = i561[3]
  i560.enableInstancing = !!i561[4]
  var i563 = i561[5]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i563[i + 0]) );
  }
  i560.floatParameters = i562
  var i565 = i561[6]
  var i564 = []
  for(var i = 0; i < i565.length; i += 1) {
    i564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i565[i + 0]) );
  }
  i560.colorParameters = i564
  var i567 = i561[7]
  var i566 = []
  for(var i = 0; i < i567.length; i += 1) {
    i566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i567[i + 0]) );
  }
  i560.vectorParameters = i566
  var i569 = i561[8]
  var i568 = []
  for(var i = 0; i < i569.length; i += 1) {
    i568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i569[i + 0]) );
  }
  i560.textureParameters = i568
  var i571 = i561[9]
  var i570 = []
  for(var i = 0; i < i571.length; i += 1) {
    i570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i571[i + 0]) );
  }
  i560.materialFlags = i570
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i575 = data
  i574.name = i575[0]
  i574.value = i575[1]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i579 = data
  i578.name = i579[0]
  i578.value = new pc.Color(i579[1], i579[2], i579[3], i579[4])
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i583 = data
  i582.name = i583[0]
  i582.value = new pc.Vec4( i583[1], i583[2], i583[3], i583[4] )
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i587 = data
  i586.name = i587[0]
  request.r(i587[1], i587[2], 0, i586, 'value')
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i591 = data
  i590.name = i591[0]
  i590.enabled = !!i591[1]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i593 = data
  i592.name = i593[0]
  i592.width = i593[1]
  i592.height = i593[2]
  i592.mipmapCount = i593[3]
  i592.anisoLevel = i593[4]
  i592.filterMode = i593[5]
  i592.hdr = !!i593[6]
  i592.format = i593[7]
  i592.wrapMode = i593[8]
  i592.alphaIsTransparency = !!i593[9]
  i592.alphaSource = i593[10]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i595 = data
  i594.name = i595[0]
  i594.halfPrecision = !!i595[1]
  i594.vertexCount = i595[2]
  i594.aabb = i595[3]
  var i597 = i595[4]
  var i596 = []
  for(var i = 0; i < i597.length; i += 1) {
    i596.push( !!i597[i + 0] );
  }
  i594.streams = i596
  i594.vertices = i595[5]
  var i599 = i595[6]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i599[i + 0]) );
  }
  i594.subMeshes = i598
  var i601 = i595[7]
  var i600 = []
  for(var i = 0; i < i601.length; i += 16) {
    i600.push( new pc.Mat4().setData(i601[i + 0], i601[i + 1], i601[i + 2], i601[i + 3],  i601[i + 4], i601[i + 5], i601[i + 6], i601[i + 7],  i601[i + 8], i601[i + 9], i601[i + 10], i601[i + 11],  i601[i + 12], i601[i + 13], i601[i + 14], i601[i + 15]) );
  }
  i594.bindposes = i600
  var i603 = i595[8]
  var i602 = []
  for(var i = 0; i < i603.length; i += 1) {
    i602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i603[i + 0]) );
  }
  i594.blendShapes = i602
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i609 = data
  i608.triangles = i609[0]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i615 = data
  i614.name = i615[0]
  var i617 = i615[1]
  var i616 = []
  for(var i = 0; i < i617.length; i += 1) {
    i616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i617[i + 0]) );
  }
  i614.frames = i616
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i619 = data
  i618.name = i619[0]
  i618.index = i619[1]
  i618.startup = !!i619[2]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i621 = data
  i620.position = new pc.Vec3( i621[0], i621[1], i621[2] )
  i620.scale = new pc.Vec3( i621[3], i621[4], i621[5] )
  i620.rotation = new pc.Quat(i621[6], i621[7], i621[8], i621[9])
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i623 = data
  i622.enabled = !!i623[0]
  i622.aspect = i623[1]
  i622.orthographic = !!i623[2]
  i622.orthographicSize = i623[3]
  i622.backgroundColor = new pc.Color(i623[4], i623[5], i623[6], i623[7])
  i622.nearClipPlane = i623[8]
  i622.farClipPlane = i623[9]
  i622.fieldOfView = i623[10]
  i622.depth = i623[11]
  i622.clearFlags = i623[12]
  i622.cullingMask = i623[13]
  i622.rect = i623[14]
  request.r(i623[15], i623[16], 0, i622, 'targetTexture')
  i622.usePhysicalProperties = !!i623[17]
  i622.focalLength = i623[18]
  i622.sensorSize = new pc.Vec2( i623[19], i623[20] )
  i622.lensShift = new pc.Vec2( i623[21], i623[22] )
  i622.gateFit = i623[23]
  return i622
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i625 = data
  i624.m_RenderShadows = !!i625[0]
  i624.m_RequiresDepthTextureOption = i625[1]
  i624.m_RequiresOpaqueTextureOption = i625[2]
  i624.m_CameraType = i625[3]
  var i627 = i625[4]
  var i626 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i627.length; i += 2) {
  request.r(i627[i + 0], i627[i + 1], 1, i626, '')
  }
  i624.m_Cameras = i626
  i624.m_RendererIndex = i625[5]
  i624.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i625[6] )
  request.r(i625[7], i625[8], 0, i624, 'm_VolumeTrigger')
  i624.m_VolumeFrameworkUpdateModeOption = i625[9]
  i624.m_RenderPostProcessing = !!i625[10]
  i624.m_Antialiasing = i625[11]
  i624.m_AntialiasingQuality = i625[12]
  i624.m_StopNaN = !!i625[13]
  i624.m_Dithering = !!i625[14]
  i624.m_ClearDepth = !!i625[15]
  i624.m_AllowXRRendering = !!i625[16]
  i624.m_RequiresDepthTexture = !!i625[17]
  i624.m_RequiresColorTexture = !!i625[18]
  i624.m_Version = i625[19]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i631 = data
  i630.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i631[0], i630.main)
  i630.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i631[1], i630.colorBySpeed)
  i630.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i631[2], i630.colorOverLifetime)
  i630.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i631[3], i630.emission)
  i630.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i631[4], i630.rotationBySpeed)
  i630.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i631[5], i630.rotationOverLifetime)
  i630.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i631[6], i630.shape)
  i630.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i631[7], i630.sizeBySpeed)
  i630.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i631[8], i630.sizeOverLifetime)
  i630.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i631[9], i630.textureSheetAnimation)
  i630.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i631[10], i630.velocityOverLifetime)
  i630.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i631[11], i630.noise)
  i630.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i631[12], i630.inheritVelocity)
  i630.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i631[13], i630.forceOverLifetime)
  i630.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i631[14], i630.limitVelocityOverLifetime)
  i630.useAutoRandomSeed = !!i631[15]
  i630.randomSeed = i631[16]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i632 = root || new pc.ParticleSystemMain()
  var i633 = data
  i632.duration = i633[0]
  i632.loop = !!i633[1]
  i632.prewarm = !!i633[2]
  i632.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[3], i632.startDelay)
  i632.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[4], i632.startLifetime)
  i632.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[5], i632.startSpeed)
  i632.startSize3D = !!i633[6]
  i632.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[7], i632.startSizeX)
  i632.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[8], i632.startSizeY)
  i632.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[9], i632.startSizeZ)
  i632.startRotation3D = !!i633[10]
  i632.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[11], i632.startRotationX)
  i632.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[12], i632.startRotationY)
  i632.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[13], i632.startRotationZ)
  i632.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i633[14], i632.startColor)
  i632.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[15], i632.gravityModifier)
  i632.simulationSpace = i633[16]
  request.r(i633[17], i633[18], 0, i632, 'customSimulationSpace')
  i632.simulationSpeed = i633[19]
  i632.useUnscaledTime = !!i633[20]
  i632.scalingMode = i633[21]
  i632.playOnAwake = !!i633[22]
  i632.maxParticles = i633[23]
  i632.emitterVelocityMode = i633[24]
  i632.stopAction = i633[25]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i634 = root || new pc.MinMaxCurve()
  var i635 = data
  i634.mode = i635[0]
  i634.curveMin = new pc.AnimationCurve( { keys_flow: i635[1] } )
  i634.curveMax = new pc.AnimationCurve( { keys_flow: i635[2] } )
  i634.curveMultiplier = i635[3]
  i634.constantMin = i635[4]
  i634.constantMax = i635[5]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i636 = root || new pc.MinMaxGradient()
  var i637 = data
  i636.mode = i637[0]
  i636.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i637[1], i636.gradientMin)
  i636.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i637[2], i636.gradientMax)
  i636.colorMin = new pc.Color(i637[3], i637[4], i637[5], i637[6])
  i636.colorMax = new pc.Color(i637[7], i637[8], i637[9], i637[10])
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i639 = data
  i638.mode = i639[0]
  var i641 = i639[1]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i641[i + 0]) );
  }
  i638.colorKeys = i640
  var i643 = i639[2]
  var i642 = []
  for(var i = 0; i < i643.length; i += 1) {
    i642.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i643[i + 0]) );
  }
  i638.alphaKeys = i642
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i647 = data
  i646.color = new pc.Color(i647[0], i647[1], i647[2], i647[3])
  i646.time = i647[4]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i651 = data
  i650.alpha = i651[0]
  i650.time = i651[1]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i652 = root || new pc.ParticleSystemColorBySpeed()
  var i653 = data
  i652.enabled = !!i653[0]
  i652.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i653[1], i652.color)
  i652.range = new pc.Vec2( i653[2], i653[3] )
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i654 = root || new pc.ParticleSystemColorOverLifetime()
  var i655 = data
  i654.enabled = !!i655[0]
  i654.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i655[1], i654.color)
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i656 = root || new pc.ParticleSystemEmitter()
  var i657 = data
  i656.enabled = !!i657[0]
  i656.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[1], i656.rateOverTime)
  i656.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[2], i656.rateOverDistance)
  var i659 = i657[3]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i659[i + 0]) );
  }
  i656.bursts = i658
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i662 = root || new pc.ParticleSystemBurst()
  var i663 = data
  i662.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[0], i662.count)
  i662.cycleCount = i663[1]
  i662.minCount = i663[2]
  i662.maxCount = i663[3]
  i662.repeatInterval = i663[4]
  i662.time = i663[5]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i664 = root || new pc.ParticleSystemRotationBySpeed()
  var i665 = data
  i664.enabled = !!i665[0]
  i664.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[1], i664.x)
  i664.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[2], i664.y)
  i664.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[3], i664.z)
  i664.separateAxes = !!i665[4]
  i664.range = new pc.Vec2( i665[5], i665[6] )
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i666 = root || new pc.ParticleSystemRotationOverLifetime()
  var i667 = data
  i666.enabled = !!i667[0]
  i666.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[1], i666.x)
  i666.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[2], i666.y)
  i666.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[3], i666.z)
  i666.separateAxes = !!i667[4]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i668 = root || new pc.ParticleSystemShape()
  var i669 = data
  i668.enabled = !!i669[0]
  i668.shapeType = i669[1]
  i668.randomDirectionAmount = i669[2]
  i668.sphericalDirectionAmount = i669[3]
  i668.randomPositionAmount = i669[4]
  i668.alignToDirection = !!i669[5]
  i668.radius = i669[6]
  i668.radiusMode = i669[7]
  i668.radiusSpread = i669[8]
  i668.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[9], i668.radiusSpeed)
  i668.radiusThickness = i669[10]
  i668.angle = i669[11]
  i668.length = i669[12]
  i668.boxThickness = new pc.Vec3( i669[13], i669[14], i669[15] )
  i668.meshShapeType = i669[16]
  request.r(i669[17], i669[18], 0, i668, 'mesh')
  request.r(i669[19], i669[20], 0, i668, 'meshRenderer')
  request.r(i669[21], i669[22], 0, i668, 'skinnedMeshRenderer')
  i668.useMeshMaterialIndex = !!i669[23]
  i668.meshMaterialIndex = i669[24]
  i668.useMeshColors = !!i669[25]
  i668.normalOffset = i669[26]
  i668.arc = i669[27]
  i668.arcMode = i669[28]
  i668.arcSpread = i669[29]
  i668.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[30], i668.arcSpeed)
  i668.donutRadius = i669[31]
  i668.position = new pc.Vec3( i669[32], i669[33], i669[34] )
  i668.rotation = new pc.Vec3( i669[35], i669[36], i669[37] )
  i668.scale = new pc.Vec3( i669[38], i669[39], i669[40] )
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i670 = root || new pc.ParticleSystemSizeBySpeed()
  var i671 = data
  i670.enabled = !!i671[0]
  i670.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[1], i670.x)
  i670.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[2], i670.y)
  i670.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[3], i670.z)
  i670.separateAxes = !!i671[4]
  i670.range = new pc.Vec2( i671[5], i671[6] )
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i672 = root || new pc.ParticleSystemSizeOverLifetime()
  var i673 = data
  i672.enabled = !!i673[0]
  i672.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[1], i672.x)
  i672.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[2], i672.y)
  i672.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[3], i672.z)
  i672.separateAxes = !!i673[4]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i674 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i675 = data
  i674.enabled = !!i675[0]
  i674.mode = i675[1]
  i674.animation = i675[2]
  i674.numTilesX = i675[3]
  i674.numTilesY = i675[4]
  i674.useRandomRow = !!i675[5]
  i674.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[6], i674.frameOverTime)
  i674.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[7], i674.startFrame)
  i674.cycleCount = i675[8]
  i674.rowIndex = i675[9]
  i674.flipU = i675[10]
  i674.flipV = i675[11]
  i674.spriteCount = i675[12]
  var i677 = i675[13]
  var i676 = []
  for(var i = 0; i < i677.length; i += 2) {
  request.r(i677[i + 0], i677[i + 1], 2, i676, '')
  }
  i674.sprites = i676
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i680 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i681 = data
  i680.enabled = !!i681[0]
  i680.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[1], i680.x)
  i680.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[2], i680.y)
  i680.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[3], i680.z)
  i680.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[4], i680.radial)
  i680.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[5], i680.speedModifier)
  i680.space = i681[6]
  i680.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[7], i680.orbitalX)
  i680.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[8], i680.orbitalY)
  i680.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[9], i680.orbitalZ)
  i680.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[10], i680.orbitalOffsetX)
  i680.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[11], i680.orbitalOffsetY)
  i680.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[12], i680.orbitalOffsetZ)
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i682 = root || new pc.ParticleSystemNoise()
  var i683 = data
  i682.enabled = !!i683[0]
  i682.separateAxes = !!i683[1]
  i682.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[2], i682.strengthX)
  i682.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[3], i682.strengthY)
  i682.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[4], i682.strengthZ)
  i682.frequency = i683[5]
  i682.damping = !!i683[6]
  i682.octaveCount = i683[7]
  i682.octaveMultiplier = i683[8]
  i682.octaveScale = i683[9]
  i682.quality = i683[10]
  i682.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[11], i682.scrollSpeed)
  i682.scrollSpeedMultiplier = i683[12]
  i682.remapEnabled = !!i683[13]
  i682.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[14], i682.remapX)
  i682.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[15], i682.remapY)
  i682.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[16], i682.remapZ)
  i682.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[17], i682.positionAmount)
  i682.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[18], i682.rotationAmount)
  i682.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[19], i682.sizeAmount)
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i684 = root || new pc.ParticleSystemInheritVelocity()
  var i685 = data
  i684.enabled = !!i685[0]
  i684.mode = i685[1]
  i684.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[2], i684.curve)
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i686 = root || new pc.ParticleSystemForceOverLifetime()
  var i687 = data
  i686.enabled = !!i687[0]
  i686.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[1], i686.x)
  i686.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[2], i686.y)
  i686.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[3], i686.z)
  i686.space = i687[4]
  i686.randomized = !!i687[5]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i688 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i689 = data
  i688.enabled = !!i689[0]
  i688.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[1], i688.limit)
  i688.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[2], i688.limitX)
  i688.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[3], i688.limitY)
  i688.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[4], i688.limitZ)
  i688.dampen = i689[5]
  i688.separateAxes = !!i689[6]
  i688.space = i689[7]
  i688.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[8], i688.drag)
  i688.multiplyDragByParticleSize = !!i689[9]
  i688.multiplyDragByParticleVelocity = !!i689[10]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i691 = data
  i690.enabled = !!i691[0]
  request.r(i691[1], i691[2], 0, i690, 'sharedMaterial')
  var i693 = i691[3]
  var i692 = []
  for(var i = 0; i < i693.length; i += 2) {
  request.r(i693[i + 0], i693[i + 1], 2, i692, '')
  }
  i690.sharedMaterials = i692
  i690.receiveShadows = !!i691[4]
  i690.shadowCastingMode = i691[5]
  i690.sortingLayerID = i691[6]
  i690.sortingOrder = i691[7]
  i690.lightmapIndex = i691[8]
  i690.lightmapSceneIndex = i691[9]
  i690.lightmapScaleOffset = new pc.Vec4( i691[10], i691[11], i691[12], i691[13] )
  i690.lightProbeUsage = i691[14]
  i690.reflectionProbeUsage = i691[15]
  request.r(i691[16], i691[17], 0, i690, 'mesh')
  i690.meshCount = i691[18]
  i690.activeVertexStreamsCount = i691[19]
  i690.alignment = i691[20]
  i690.renderMode = i691[21]
  i690.sortMode = i691[22]
  i690.lengthScale = i691[23]
  i690.velocityScale = i691[24]
  i690.cameraVelocityScale = i691[25]
  i690.normalDirection = i691[26]
  i690.sortingFudge = i691[27]
  i690.minParticleSize = i691[28]
  i690.maxParticleSize = i691[29]
  i690.pivot = new pc.Vec3( i691[30], i691[31], i691[32] )
  request.r(i691[33], i691[34], 0, i690, 'trailMaterial')
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i697 = data
  i696.name = i697[0]
  i696.tagId = i697[1]
  i696.enabled = !!i697[2]
  i696.isStatic = !!i697[3]
  i696.layer = i697[4]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i699 = data
  i698.enabled = !!i699[0]
  i698.type = i699[1]
  i698.color = new pc.Color(i699[2], i699[3], i699[4], i699[5])
  i698.cullingMask = i699[6]
  i698.intensity = i699[7]
  i698.range = i699[8]
  i698.spotAngle = i699[9]
  i698.shadows = i699[10]
  i698.shadowNormalBias = i699[11]
  i698.shadowBias = i699[12]
  i698.shadowStrength = i699[13]
  i698.shadowResolution = i699[14]
  i698.lightmapBakeType = i699[15]
  i698.renderMode = i699[16]
  request.r(i699[17], i699[18], 0, i698, 'cookie')
  i698.cookieSize = i699[19]
  return i698
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i701 = data
  i700.m_Version = i701[0]
  i700.m_UsePipelineSettings = !!i701[1]
  i700.m_AdditionalLightsShadowResolutionTier = i701[2]
  i700.m_LightLayerMask = i701[3]
  i700.m_CustomShadowLayers = !!i701[4]
  i700.m_ShadowLayerMask = i701[5]
  i700.m_LightCookieSize = new pc.Vec2( i701[6], i701[7] )
  i700.m_LightCookieOffset = new pc.Vec2( i701[8], i701[9] )
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i703 = data
  i702.enabled = !!i703[0]
  request.r(i703[1], i703[2], 0, i702, 'sharedMaterial')
  var i705 = i703[3]
  var i704 = []
  for(var i = 0; i < i705.length; i += 2) {
  request.r(i705[i + 0], i705[i + 1], 2, i704, '')
  }
  i702.sharedMaterials = i704
  i702.receiveShadows = !!i703[4]
  i702.shadowCastingMode = i703[5]
  i702.sortingLayerID = i703[6]
  i702.sortingOrder = i703[7]
  i702.lightmapIndex = i703[8]
  i702.lightmapSceneIndex = i703[9]
  i702.lightmapScaleOffset = new pc.Vec4( i703[10], i703[11], i703[12], i703[13] )
  i702.lightProbeUsage = i703[14]
  i702.reflectionProbeUsage = i703[15]
  i702.color = new pc.Color(i703[16], i703[17], i703[18], i703[19])
  request.r(i703[20], i703[21], 0, i702, 'sprite')
  i702.flipX = !!i703[22]
  i702.flipY = !!i703[23]
  i702.drawMode = i703[24]
  i702.size = new pc.Vec2( i703[25], i703[26] )
  i702.tileMode = i703[27]
  i702.adaptiveModeThreshold = i703[28]
  i702.maskInteraction = i703[29]
  i702.spriteSortPoint = i703[30]
  return i702
}

Deserializers["BottleController"] = function (request, data, root) {
  var i706 = root || request.c( 'BottleController' )
  var i707 = data
  var i709 = i707[0]
  var i708 = []
  for(var i = 0; i < i709.length; i += 4) {
    i708.push( new pc.Color(i709[i + 0], i709[i + 1], i709[i + 2], i709[i + 3]) );
  }
  i706.arrColor = i708
  request.r(i707[1], i707[2], 0, i706, 'bottleMaskSR')
  request.r(i707[3], i707[4], 0, i706, 'top')
  var i711 = i707[5]
  var i710 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i711.length; i += 2) {
  request.r(i711[i + 0], i711[i + 1], 1, i710, '')
  }
  i706.lstWaterSurfaceTop = i710
  var i713 = i707[6]
  var i712 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i713.length; i += 2) {
  request.r(i713[i + 0], i713[i + 1], 1, i712, '')
  }
  i706.lstWaterSurface = i712
  i706.fillAmountCur = new pc.AnimationCurve( { keys_flow: i707[7] } )
  i706.scaleAndRotationMultiplierCur = new pc.AnimationCurve( { keys_flow: i707[8] } )
  i706.rotationSpeedMultipiler = new pc.AnimationCurve( { keys_flow: i707[9] } )
  i706.arrFillAmount = i707[10]
  i706.arrRotationValues = i707[11]
  i706.numberOfColorInBottle = i707[12]
  i706.numberOfTopColorLayers = i707[13]
  i706.topColor = new pc.Color(i707[14], i707[15], i707[16], i707[17])
  request.r(i707[18], i707[19], 0, i706, 'otherBottleControllerRef')
  request.r(i707[20], i707[21], 0, i706, 'leftPoint')
  request.r(i707[22], i707[23], 0, i706, 'rightPoint')
  request.r(i707[24], i707[25], 0, i706, 'choosenPoint')
  request.r(i707[26], i707[27], 0, i706, 'lineRenderer')
  request.r(i707[28], i707[29], 0, i706, 'fxBotNuoc')
  request.r(i707[30], i707[31], 0, i706, 'boxCollider2D')
  request.r(i707[32], i707[33], 0, i706, 'done')
  request.r(i707[34], i707[35], 0, i706, 'stroke')
  i706.isCanController = !!i707[36]
  i706.timeRotate = i707[37]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i719 = data
  i718.usedByComposite = !!i719[0]
  i718.autoTiling = !!i719[1]
  i718.size = new pc.Vec2( i719[2], i719[3] )
  i718.edgeRadius = i719[4]
  i718.enabled = !!i719[5]
  i718.isTrigger = !!i719[6]
  i718.usedByEffector = !!i719[7]
  i718.density = i719[8]
  i718.offset = new pc.Vec2( i719[9], i719[10] )
  request.r(i719[11], i719[12], 0, i718, 'material')
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i721 = data
  i720.enabled = !!i721[0]
  request.r(i721[1], i721[2], 0, i720, 'sharedMaterial')
  var i723 = i721[3]
  var i722 = []
  for(var i = 0; i < i723.length; i += 2) {
  request.r(i723[i + 0], i723[i + 1], 2, i722, '')
  }
  i720.sharedMaterials = i722
  i720.receiveShadows = !!i721[4]
  i720.shadowCastingMode = i721[5]
  i720.sortingLayerID = i721[6]
  i720.sortingOrder = i721[7]
  i720.lightmapIndex = i721[8]
  i720.lightmapSceneIndex = i721[9]
  i720.lightmapScaleOffset = new pc.Vec4( i721[10], i721[11], i721[12], i721[13] )
  i720.lightProbeUsage = i721[14]
  i720.reflectionProbeUsage = i721[15]
  i720.frontSortingLayerID = i721[16]
  i720.frontSortingOrder = i721[17]
  i720.backSortingLayerID = i721[18]
  i720.backSortingOrder = i721[19]
  i720.alphaCutoff = i721[20]
  request.r(i721[21], i721[22], 0, i720, 'sprite')
  i720.tileMode = i721[23]
  i720.isCustomRangeActive = !!i721[24]
  i720.spriteSortPoint = i721[25]
  return i720
}

Deserializers["FxBubblesBottle"] = function (request, data, root) {
  var i724 = root || request.c( 'FxBubblesBottle' )
  var i725 = data
  i724.lifeTime = i725[0]
  request.r(i725[1], i725[2], 0, i724, 'fxBubbles')
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i727 = data
  request.r(i727[0], i727[1], 0, i726, 'animatorController')
  request.r(i727[2], i727[3], 0, i726, 'avatar')
  i726.updateMode = i727[4]
  i726.hasTransformHierarchy = !!i727[5]
  i726.applyRootMotion = !!i727[6]
  var i729 = i727[7]
  var i728 = []
  for(var i = 0; i < i729.length; i += 2) {
  request.r(i729[i + 0], i729[i + 1], 2, i728, '')
  }
  i726.humanBones = i728
  i726.enabled = !!i727[8]
  return i726
}

Deserializers["SurfaceColor"] = function (request, data, root) {
  var i732 = root || request.c( 'SurfaceColor' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, '_fxSurface')
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, 'sharedMesh')
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i737 = data
  request.r(i737[0], i737[1], 0, i736, 'additionalVertexStreams')
  i736.enabled = !!i737[2]
  request.r(i737[3], i737[4], 0, i736, 'sharedMaterial')
  var i739 = i737[5]
  var i738 = []
  for(var i = 0; i < i739.length; i += 2) {
  request.r(i739[i + 0], i739[i + 1], 2, i738, '')
  }
  i736.sharedMaterials = i738
  i736.receiveShadows = !!i737[6]
  i736.shadowCastingMode = i737[7]
  i736.sortingLayerID = i737[8]
  i736.sortingOrder = i737[9]
  i736.lightmapIndex = i737[10]
  i736.lightmapSceneIndex = i737[11]
  i736.lightmapScaleOffset = new pc.Vec4( i737[12], i737[13], i737[14], i737[15] )
  i736.lightProbeUsage = i737[16]
  i736.reflectionProbeUsage = i737[17]
  return i736
}

Deserializers["Spine.Unity.SkeletonAnimation"] = function (request, data, root) {
  var i740 = root || request.c( 'Spine.Unity.SkeletonAnimation' )
  var i741 = data
  i740.loop = !!i741[0]
  i740.timeScale = i741[1]
  request.r(i741[2], i741[3], 0, i740, 'skeletonDataAsset')
  i740.initialSkinName = i741[4]
  i740.initialFlipX = !!i741[5]
  i740.initialFlipY = !!i741[6]
  i740.updateWhenInvisible = i741[7]
  i740.zSpacing = i741[8]
  i740.useClipping = !!i741[9]
  i740.immutableTriangles = !!i741[10]
  i740.pmaVertexColors = !!i741[11]
  i740.clearStateOnDisable = !!i741[12]
  i740.tintBlack = !!i741[13]
  i740.singleSubmesh = !!i741[14]
  i740.fixDrawOrder = !!i741[15]
  i740.addNormals = !!i741[16]
  i740.calculateTangents = !!i741[17]
  i740.maskInteraction = i741[18]
  i740.maskMaterials = request.d('Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials', i741[19], i740.maskMaterials)
  i740.disableRenderingOnOverride = !!i741[20]
  i740._animationName = i741[21]
  var i743 = i741[22]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( i743[i + 0] );
  }
  i740.separatorSlotNames = i742
  return i740
}

Deserializers["Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials"] = function (request, data, root) {
  var i744 = root || request.c( 'Spine.Unity.SkeletonRenderer+SpriteMaskInteractionMaterials' )
  var i745 = data
  var i747 = i745[0]
  var i746 = []
  for(var i = 0; i < i747.length; i += 2) {
  request.r(i747[i + 0], i747[i + 1], 2, i746, '')
  }
  i744.materialsMaskDisabled = i746
  var i749 = i745[1]
  var i748 = []
  for(var i = 0; i < i749.length; i += 2) {
  request.r(i749[i + 0], i749[i + 1], 2, i748, '')
  }
  i744.materialsInsideMask = i748
  var i751 = i745[2]
  var i750 = []
  for(var i = 0; i < i751.length; i += 2) {
  request.r(i751[i + 0], i751[i + 1], 2, i750, '')
  }
  i744.materialsOutsideMask = i750
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i755 = data
  i754.textureMode = i755[0]
  i754.alignment = i755[1]
  i754.widthCurve = new pc.AnimationCurve( { keys_flow: i755[2] } )
  i754.colorGradient = i755[3] ? new pc.ColorGradient(i755[3][0], i755[3][1], i755[3][2]) : null
  var i757 = i755[4]
  var i756 = []
  for(var i = 0; i < i757.length; i += 3) {
    i756.push( new pc.Vec3( i757[i + 0], i757[i + 1], i757[i + 2] ) );
  }
  i754.positions = i756
  i754.positionCount = i755[5]
  i754.widthMultiplier = i755[6]
  i754.startWidth = i755[7]
  i754.endWidth = i755[8]
  i754.numCornerVertices = i755[9]
  i754.numCapVertices = i755[10]
  i754.useWorldSpace = !!i755[11]
  i754.loop = !!i755[12]
  i754.startColor = new pc.Color(i755[13], i755[14], i755[15], i755[16])
  i754.endColor = new pc.Color(i755[17], i755[18], i755[19], i755[20])
  i754.generateLightingData = !!i755[21]
  i754.enabled = !!i755[22]
  request.r(i755[23], i755[24], 0, i754, 'sharedMaterial')
  var i759 = i755[25]
  var i758 = []
  for(var i = 0; i < i759.length; i += 2) {
  request.r(i759[i + 0], i759[i + 1], 2, i758, '')
  }
  i754.sharedMaterials = i758
  i754.receiveShadows = !!i755[26]
  i754.shadowCastingMode = i755[27]
  i754.sortingLayerID = i755[28]
  i754.sortingOrder = i755[29]
  i754.lightmapIndex = i755[30]
  i754.lightmapSceneIndex = i755[31]
  i754.lightmapScaleOffset = new pc.Vec4( i755[32], i755[33], i755[34], i755[35] )
  i754.lightProbeUsage = i755[36]
  i754.reflectionProbeUsage = i755[37]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i763 = data
  i762.pivot = new pc.Vec2( i763[0], i763[1] )
  i762.anchorMin = new pc.Vec2( i763[2], i763[3] )
  i762.anchorMax = new pc.Vec2( i763[4], i763[5] )
  i762.sizeDelta = new pc.Vec2( i763[6], i763[7] )
  i762.anchoredPosition3D = new pc.Vec3( i763[8], i763[9], i763[10] )
  i762.rotation = new pc.Quat(i763[11], i763[12], i763[13], i763[14])
  i762.scale = new pc.Vec3( i763[15], i763[16], i763[17] )
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i765 = data
  i764.enabled = !!i765[0]
  i764.planeDistance = i765[1]
  i764.referencePixelsPerUnit = i765[2]
  i764.isFallbackOverlay = !!i765[3]
  i764.renderMode = i765[4]
  i764.renderOrder = i765[5]
  i764.sortingLayerName = i765[6]
  i764.sortingOrder = i765[7]
  i764.scaleFactor = i765[8]
  request.r(i765[9], i765[10], 0, i764, 'worldCamera')
  i764.overrideSorting = !!i765[11]
  i764.pixelPerfect = !!i765[12]
  i764.targetDisplay = i765[13]
  i764.overridePixelPerfect = !!i765[14]
  return i764
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i767 = data
  i766.m_UiScaleMode = i767[0]
  i766.m_ReferencePixelsPerUnit = i767[1]
  i766.m_ScaleFactor = i767[2]
  i766.m_ReferenceResolution = new pc.Vec2( i767[3], i767[4] )
  i766.m_ScreenMatchMode = i767[5]
  i766.m_MatchWidthOrHeight = i767[6]
  i766.m_PhysicalUnit = i767[7]
  i766.m_FallbackScreenDPI = i767[8]
  i766.m_DefaultSpriteDPI = i767[9]
  i766.m_DynamicPixelsPerUnit = i767[10]
  i766.m_PresetInfoIsWorld = !!i767[11]
  return i766
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i769 = data
  i768.m_IgnoreReversedGraphics = !!i769[0]
  i768.m_BlockingObjects = i769[1]
  i768.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i769[2] )
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i771 = data
  i770.cullTransparentMesh = !!i771[0]
  return i770
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.UI.Image' )
  var i773 = data
  request.r(i773[0], i773[1], 0, i772, 'm_Sprite')
  i772.m_Type = i773[2]
  i772.m_PreserveAspect = !!i773[3]
  i772.m_FillCenter = !!i773[4]
  i772.m_FillMethod = i773[5]
  i772.m_FillAmount = i773[6]
  i772.m_FillClockwise = !!i773[7]
  i772.m_FillOrigin = i773[8]
  i772.m_UseSpriteMesh = !!i773[9]
  i772.m_PixelsPerUnitMultiplier = i773[10]
  request.r(i773[11], i773[12], 0, i772, 'm_Material')
  i772.m_Maskable = !!i773[13]
  i772.m_Color = new pc.Color(i773[14], i773[15], i773[16], i773[17])
  i772.m_RaycastTarget = !!i773[18]
  i772.m_RaycastPadding = new pc.Vec4( i773[19], i773[20], i773[21], i773[22] )
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i775 = data
  i774.playAutomatically = !!i775[0]
  request.r(i775[1], i775[2], 0, i774, 'clip')
  var i777 = i775[3]
  var i776 = []
  for(var i = 0; i < i777.length; i += 2) {
  request.r(i777[i + 0], i777[i + 1], 2, i776, '')
  }
  i774.clips = i776
  i774.wrapMode = i775[4]
  i774.enabled = !!i775[5]
  return i774
}

Deserializers["Spine.Unity.SkeletonGraphic"] = function (request, data, root) {
  var i780 = root || request.c( 'Spine.Unity.SkeletonGraphic' )
  var i781 = data
  request.r(i781[0], i781[1], 0, i780, 'skeletonDataAsset')
  i780.initialSkinName = i781[2]
  i780.initialFlipX = !!i781[3]
  i780.initialFlipY = !!i781[4]
  i780.startingAnimation = i781[5]
  i780.startingLoop = !!i781[6]
  i780.timeScale = i781[7]
  i780.freeze = !!i781[8]
  i780.updateWhenInvisible = i781[9]
  i780.unscaledTime = !!i781[10]
  i780.allowMultipleCanvasRenderers = !!i781[11]
  var i783 = i781[12]
  var i782 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.CanvasRenderer')))
  for(var i = 0; i < i783.length; i += 2) {
  request.r(i783[i + 0], i783[i + 1], 1, i782, '')
  }
  i780.canvasRenderers = i782
  i780.enableSeparatorSlots = !!i781[13]
  i780.updateSeparatorPartLocation = !!i781[14]
  var i785 = i781[15]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( i785[i + 0] );
  }
  i780.separatorSlotNames = i784
  var i787 = i781[16]
  var i786 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i787.length; i += 2) {
  request.r(i787[i + 0], i787[i + 1], 1, i786, '')
  }
  i780.separatorParts = i786
  i780.meshGenerator = request.d('Spine.Unity.MeshGenerator', i781[17], i780.meshGenerator)
  request.r(i781[18], i781[19], 0, i780, 'm_Material')
  i780.m_Maskable = !!i781[20]
  i780.m_Color = new pc.Color(i781[21], i781[22], i781[23], i781[24])
  i780.m_RaycastTarget = !!i781[25]
  i780.m_RaycastPadding = new pc.Vec4( i781[26], i781[27], i781[28], i781[29] )
  return i780
}

Deserializers["Spine.Unity.MeshGenerator"] = function (request, data, root) {
  var i792 = root || request.c( 'Spine.Unity.MeshGenerator' )
  var i793 = data
  i792.settings = request.d('Spine.Unity.MeshGenerator+Settings', i793[0], i792.settings)
  return i792
}

Deserializers["Spine.Unity.MeshGenerator+Settings"] = function (request, data, root) {
  var i794 = root || request.c( 'Spine.Unity.MeshGenerator+Settings' )
  var i795 = data
  i794.useClipping = !!i795[0]
  i794.zSpacing = i795[1]
  i794.pmaVertexColors = !!i795[2]
  i794.tintBlack = !!i795[3]
  i794.canvasGroupTintBlack = !!i795[4]
  i794.calculateTangents = !!i795[5]
  i794.addNormals = !!i795[6]
  i794.immutableTriangles = !!i795[7]
  return i794
}

Deserializers["GameManager1"] = function (request, data, root) {
  var i796 = root || request.c( 'GameManager1' )
  var i797 = data
  request.r(i797[0], i797[1], 0, i796, 'gamePlayController')
  request.r(i797[2], i797[3], 0, i796, 'audioManager')
  i796.indexBottleComplete = i797[4]
  var i799 = i797[5]
  var i798 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Image')))
  for(var i = 0; i < i799.length; i += 2) {
  request.r(i799[i + 0], i799[i + 1], 1, i798, '')
  }
  i796.lstImageColor = i798
  var i801 = i797[6]
  var i800 = new (System.Collections.Generic.List$1(Bridge.ns('BottleController')))
  for(var i = 0; i < i801.length; i += 2) {
  request.r(i801[i + 0], i801[i + 1], 1, i800, '')
  }
  i796.lstBottleController = i800
  request.r(i797[7], i797[8], 0, i796, 'handGuide')
  i796.colorGuideCache = new pc.Color(i797[9], i797[10], i797[11], i797[12])
  request.r(i797[13], i797[14], 0, i796, 'vfxWin')
  request.r(i797[15], i797[16], 0, i796, 'endCard')
  request.r(i797[17], i797[18], 0, i796, 'txtTapToPour')
  request.r(i797[19], i797[20], 0, i796, 'logo')
  request.r(i797[21], i797[22], 0, i796, 'txtName')
  request.r(i797[23], i797[24], 0, i796, 'btnDown')
  return i796
}

Deserializers["GamePlayController"] = function (request, data, root) {
  var i806 = root || request.c( 'GamePlayController' )
  var i807 = data
  request.r(i807[0], i807[1], 0, i806, 'firstBottle')
  request.r(i807[2], i807[3], 0, i806, 'secondBottle')
  i806.isCanControll = !!i807[4]
  return i806
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i808 = root || request.c( 'AudioManager' )
  var i809 = data
  request.r(i809[0], i809[1], 0, i808, 'audioSourceFX')
  request.r(i809[2], i809[3], 0, i808, 'audioSourceBG')
  request.r(i809[4], i809[5], 0, i808, 'clipWaterDrop')
  request.r(i809[6], i809[7], 0, i808, 'clipClick')
  request.r(i809[8], i809[9], 0, i808, 'clickCompleteBottle')
  request.r(i809[10], i809[11], 0, i808, 'clipWin')
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'clip')
  request.r(i811[2], i811[3], 0, i810, 'outputAudioMixerGroup')
  i810.playOnAwake = !!i811[4]
  i810.loop = !!i811[5]
  i810.time = i811[6]
  i810.volume = i811[7]
  i810.pitch = i811[8]
  i810.enabled = !!i811[9]
  return i810
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i812 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i813 = data
  request.r(i813[0], i813[1], 0, i812, 'm_FirstSelected')
  i812.m_sendNavigationEvents = !!i813[2]
  i812.m_DragThreshold = i813[3]
  return i812
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i814 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i815 = data
  i814.m_HorizontalAxis = i815[0]
  i814.m_VerticalAxis = i815[1]
  i814.m_SubmitButton = i815[2]
  i814.m_CancelButton = i815[3]
  i814.m_InputActionsPerSecond = i815[4]
  i814.m_RepeatDelay = i815[5]
  i814.m_ForceModuleActive = !!i815[6]
  i814.m_SendPointerHoverToParent = !!i815[7]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i817 = data
  i816.ambientIntensity = i817[0]
  i816.reflectionIntensity = i817[1]
  i816.ambientMode = i817[2]
  i816.ambientLight = new pc.Color(i817[3], i817[4], i817[5], i817[6])
  i816.ambientSkyColor = new pc.Color(i817[7], i817[8], i817[9], i817[10])
  i816.ambientGroundColor = new pc.Color(i817[11], i817[12], i817[13], i817[14])
  i816.ambientEquatorColor = new pc.Color(i817[15], i817[16], i817[17], i817[18])
  i816.fogColor = new pc.Color(i817[19], i817[20], i817[21], i817[22])
  i816.fogEndDistance = i817[23]
  i816.fogStartDistance = i817[24]
  i816.fogDensity = i817[25]
  i816.fog = !!i817[26]
  request.r(i817[27], i817[28], 0, i816, 'skybox')
  i816.fogMode = i817[29]
  var i819 = i817[30]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i819[i + 0]) );
  }
  i816.lightmaps = i818
  i816.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i817[31], i816.lightProbes)
  i816.lightmapsMode = i817[32]
  i816.mixedBakeMode = i817[33]
  i816.environmentLightingMode = i817[34]
  i816.ambientProbe = new pc.SphericalHarmonicsL2(i817[35])
  i816.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i817[36])
  i816.useReferenceAmbientProbe = !!i817[37]
  request.r(i817[38], i817[39], 0, i816, 'customReflection')
  request.r(i817[40], i817[41], 0, i816, 'defaultReflection')
  i816.defaultReflectionMode = i817[42]
  i816.defaultReflectionResolution = i817[43]
  i816.sunLightObjectId = i817[44]
  i816.pixelLightCount = i817[45]
  i816.defaultReflectionHDR = !!i817[46]
  i816.hasLightDataAsset = !!i817[47]
  i816.hasManualGenerate = !!i817[48]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i823 = data
  request.r(i823[0], i823[1], 0, i822, 'lightmapColor')
  request.r(i823[2], i823[3], 0, i822, 'lightmapDirection')
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i824 = root || new UnityEngine.LightProbes()
  var i825 = data
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i831 = data
  var i833 = i831[0]
  var i832 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i833.length; i += 1) {
    i832.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i833[i + 0]));
  }
  i830.ShaderCompilationErrors = i832
  i830.name = i831[1]
  i830.guid = i831[2]
  var i835 = i831[3]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( i835[i + 0] );
  }
  i830.shaderDefinedKeywords = i834
  var i837 = i831[4]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i837[i + 0]) );
  }
  i830.passes = i836
  var i839 = i831[5]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i839[i + 0]) );
  }
  i830.usePasses = i838
  var i841 = i831[6]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i841[i + 0]) );
  }
  i830.defaultParameterValues = i840
  request.r(i831[7], i831[8], 0, i830, 'unityFallbackShader')
  i830.readDepth = !!i831[9]
  i830.isCreatedByShaderGraph = !!i831[10]
  i830.usedBatchUniforms = i831[11]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i845 = data
  i844.shaderName = i845[0]
  i844.errorMessage = i845[1]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i848 = root || new pc.UnityShaderPass()
  var i849 = data
  i848.id = i849[0]
  i848.subShaderIndex = i849[1]
  i848.name = i849[2]
  i848.passType = i849[3]
  i848.grabPassTextureName = i849[4]
  i848.usePass = !!i849[5]
  i848.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[6], i848.zTest)
  i848.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[7], i848.zWrite)
  i848.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[8], i848.culling)
  i848.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i849[9], i848.blending)
  i848.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i849[10], i848.alphaBlending)
  i848.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[11], i848.colorWriteMask)
  i848.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[12], i848.offsetUnits)
  i848.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[13], i848.offsetFactor)
  i848.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[14], i848.stencilRef)
  i848.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[15], i848.stencilReadMask)
  i848.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[16], i848.stencilWriteMask)
  i848.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i849[17], i848.stencilOp)
  i848.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i849[18], i848.stencilOpFront)
  i848.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i849[19], i848.stencilOpBack)
  var i851 = i849[20]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i851[i + 0]) );
  }
  i848.tags = i850
  var i853 = i849[21]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( i853[i + 0] );
  }
  i848.passDefinedKeywords = i852
  var i855 = i849[22]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i855[i + 0]) );
  }
  i848.passDefinedKeywordGroups = i854
  var i857 = i849[23]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i857[i + 0]) );
  }
  i848.variants = i856
  var i859 = i849[24]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i859[i + 0]) );
  }
  i848.excludedVariants = i858
  i848.hasDepthReader = !!i849[25]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i861 = data
  i860.val = i861[0]
  i860.name = i861[1]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i863 = data
  i862.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i863[0], i862.src)
  i862.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i863[1], i862.dst)
  i862.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i863[2], i862.op)
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i865 = data
  i864.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i865[0], i864.pass)
  i864.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i865[1], i864.fail)
  i864.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i865[2], i864.zFail)
  i864.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i865[3], i864.comp)
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i869 = data
  i868.name = i869[0]
  i868.value = i869[1]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i873 = data
  var i875 = i873[0]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( i875[i + 0] );
  }
  i872.keywords = i874
  i872.hasDiscard = !!i873[1]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i879 = data
  i878.passId = i879[0]
  i878.subShaderIndex = i879[1]
  var i881 = i879[2]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( i881[i + 0] );
  }
  i878.keywords = i880
  i878.vertexProgram = i879[3]
  i878.fragmentProgram = i879[4]
  i878.readDepth = !!i879[5]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i885 = data
  request.r(i885[0], i885[1], 0, i884, 'shader')
  i884.pass = i885[2]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i889 = data
  i888.name = i889[0]
  i888.type = i889[1]
  i888.value = new pc.Vec4( i889[2], i889[3], i889[4], i889[5] )
  i888.textureValue = i889[6]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i891 = data
  i890.name = i891[0]
  request.r(i891[1], i891[2], 0, i890, 'texture')
  i890.aabb = i891[3]
  i890.vertices = i891[4]
  i890.triangles = i891[5]
  i890.textureRect = UnityEngine.Rect.MinMaxRect(i891[6], i891[7], i891[8], i891[9])
  i890.packedRect = UnityEngine.Rect.MinMaxRect(i891[10], i891[11], i891[12], i891[13])
  i890.border = new pc.Vec4( i891[14], i891[15], i891[16], i891[17] )
  i890.transparency = i891[18]
  i890.bounds = i891[19]
  i890.pixelsPerUnit = i891[20]
  i890.textureWidth = i891[21]
  i890.textureHeight = i891[22]
  i890.nativeSize = new pc.Vec2( i891[23], i891[24] )
  i890.pivot = new pc.Vec2( i891[25], i891[26] )
  i890.textureRectOffset = new pc.Vec2( i891[27], i891[28] )
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i893 = data
  i892.name = i893[0]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i895 = data
  i894.name = i895[0]
  i894.wrapMode = i895[1]
  i894.isLooping = !!i895[2]
  i894.length = i895[3]
  var i897 = i895[4]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i897[i + 0]) );
  }
  i894.curves = i896
  var i899 = i895[5]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i899[i + 0]) );
  }
  i894.events = i898
  i894.halfPrecision = !!i895[6]
  i894.frameRate = i895[7]
  i894.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i895[8], i894.localBounds)
  i894.hasMuscleCurves = !!i895[9]
  var i901 = i895[10]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( i901[i + 0] );
  }
  i894.clipMuscleConstant = i900
  i894.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i895[11], i894.clipBindingConstant)
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i905 = data
  i904.path = i905[0]
  i904.componentType = i905[1]
  i904.property = i905[2]
  i904.keys = i905[3]
  var i907 = i905[4]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i907[i + 0]) );
  }
  i904.objectReferenceKeys = i906
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i911 = data
  i910.time = i911[0]
  request.r(i911[1], i911[2], 0, i910, 'value')
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i915 = data
  i914.functionName = i915[0]
  i914.floatParameter = i915[1]
  i914.intParameter = i915[2]
  i914.stringParameter = i915[3]
  request.r(i915[4], i915[5], 0, i914, 'objectReferenceParameter')
  i914.time = i915[6]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i917 = data
  i916.center = new pc.Vec3( i917[0], i917[1], i917[2] )
  i916.extends = new pc.Vec3( i917[3], i917[4], i917[5] )
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i921 = data
  var i923 = i921[0]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( i923[i + 0] );
  }
  i920.genericBindings = i922
  var i925 = i921[1]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( i925[i + 0] );
  }
  i920.pptrCurveMapping = i924
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i927 = data
  i926.name = i927[0]
  var i929 = i927[1]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i929[i + 0]) );
  }
  i926.states = i928
  var i931 = i927[2]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i931[i + 0]) );
  }
  i926.layers = i930
  var i933 = i927[3]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i933[i + 0]) );
  }
  i926.parameters = i932
  i926.animationClips = i927[4]
  i926.HasSubStateMachines = !!i927[5]
  i926.avatarUnsupported = i927[6]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i937 = data
  i936.cycleOffset = i937[0]
  i936.cycleOffsetParameter = i937[1]
  i936.cycleOffsetParameterActive = !!i937[2]
  i936.mirror = !!i937[3]
  i936.mirrorParameter = i937[4]
  i936.mirrorParameterActive = !!i937[5]
  i936.motionId = i937[6]
  i936.nameHash = i937[7]
  i936.fullPathHash = i937[8]
  i936.speed = i937[9]
  i936.speedParameter = i937[10]
  i936.speedParameterActive = !!i937[11]
  i936.tag = i937[12]
  i936.name = i937[13]
  i936.layer = i937[14]
  i936.writeDefaultValues = !!i937[15]
  var i939 = i937[16]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i939[i + 0]) );
  }
  i936.transitions = i938
  var i941 = i937[17]
  var i940 = []
  for(var i = 0; i < i941.length; i += 2) {
  request.r(i941[i + 0], i941[i + 1], 2, i940, '')
  }
  i936.behaviours = i940
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i945 = data
  i944.fullPath = i945[0]
  i944.canTransitionToSelf = !!i945[1]
  i944.duration = i945[2]
  i944.exitTime = i945[3]
  i944.hasExitTime = !!i945[4]
  i944.hasFixedDuration = !!i945[5]
  i944.interruptionSource = i945[6]
  i944.offset = i945[7]
  i944.orderedInterruption = !!i945[8]
  i944.destinationStateNameHash = i945[9]
  i944.destinationStateMachineId = i945[10]
  i944.isExit = !!i945[11]
  i944.mute = !!i945[12]
  i944.solo = !!i945[13]
  var i947 = i945[14]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i947[i + 0]) );
  }
  i944.conditions = i946
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i953 = data
  i952.blendingMode = i953[0]
  i952.defaultWeight = i953[1]
  i952.name = i953[2]
  i952.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i953[3], i952.stateMachine)
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i955 = data
  i954.id = i955[0]
  i954.defaultStateNameHash = i955[1]
  var i957 = i955[2]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i957[i + 0]) );
  }
  i954.entryTransitions = i956
  var i959 = i955[3]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i959[i + 0]) );
  }
  i954.anyStateTransitions = i958
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i963 = data
  i962.destinationStateNameHash = i963[0]
  i962.destinationStateMachineId = i963[1]
  i962.isExit = !!i963[2]
  i962.mute = !!i963[3]
  i962.solo = !!i963[4]
  var i965 = i963[5]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i965[i + 0]) );
  }
  i962.conditions = i964
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i969 = data
  i968.defaultBool = !!i969[0]
  i968.defaultFloat = i969[1]
  i968.defaultInt = i969[2]
  i968.name = i969[3]
  i968.nameHash = i969[4]
  i968.type = i969[5]
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i971 = data
  i970.name = i971[0]
  i970.bytes64 = i971[1]
  i970.data = i971[2]
  return i970
}

Deserializers["Spine.Unity.SkeletonDataAsset"] = function (request, data, root) {
  var i972 = root || request.c( 'Spine.Unity.SkeletonDataAsset' )
  var i973 = data
  var i975 = i973[0]
  var i974 = []
  for(var i = 0; i < i975.length; i += 2) {
  request.r(i975[i + 0], i975[i + 1], 2, i974, '')
  }
  i972.atlasAssets = i974
  i972.scale = i973[1]
  request.r(i973[2], i973[3], 0, i972, 'skeletonJSON')
  i972.isUpgradingBlendModeMaterials = !!i973[4]
  i972.blendModeMaterials = request.d('Spine.Unity.BlendModeMaterials', i973[5], i972.blendModeMaterials)
  var i977 = i973[6]
  var i976 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.SkeletonDataModifierAsset')))
  for(var i = 0; i < i977.length; i += 2) {
  request.r(i977[i + 0], i977[i + 1], 1, i976, '')
  }
  i972.skeletonDataModifiers = i976
  var i979 = i973[7]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( i979[i + 0] );
  }
  i972.fromAnimation = i978
  var i981 = i973[8]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( i981[i + 0] );
  }
  i972.toAnimation = i980
  i972.duration = i973[9]
  i972.defaultMix = i973[10]
  request.r(i973[11], i973[12], 0, i972, 'controller')
  return i972
}

Deserializers["Spine.Unity.BlendModeMaterials"] = function (request, data, root) {
  var i984 = root || request.c( 'Spine.Unity.BlendModeMaterials' )
  var i985 = data
  i984.applyAdditiveMaterial = !!i985[0]
  var i987 = i985[1]
  var i986 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i987.length; i += 1) {
    i986.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i987[i + 0]));
  }
  i984.additiveMaterials = i986
  var i989 = i985[2]
  var i988 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i989.length; i += 1) {
    i988.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i989[i + 0]));
  }
  i984.multiplyMaterials = i988
  var i991 = i985[3]
  var i990 = new (System.Collections.Generic.List$1(Bridge.ns('Spine.Unity.BlendModeMaterials+ReplacementMaterial')))
  for(var i = 0; i < i991.length; i += 1) {
    i990.add(request.d('Spine.Unity.BlendModeMaterials+ReplacementMaterial', i991[i + 0]));
  }
  i984.screenMaterials = i990
  i984.requiresBlendModeMaterials = !!i985[4]
  return i984
}

Deserializers["Spine.Unity.BlendModeMaterials+ReplacementMaterial"] = function (request, data, root) {
  var i994 = root || request.c( 'Spine.Unity.BlendModeMaterials+ReplacementMaterial' )
  var i995 = data
  i994.pageName = i995[0]
  request.r(i995[1], i995[2], 0, i994, 'material')
  return i994
}

Deserializers["Spine.Unity.SpineAtlasAsset"] = function (request, data, root) {
  var i998 = root || request.c( 'Spine.Unity.SpineAtlasAsset' )
  var i999 = data
  request.r(i999[0], i999[1], 0, i998, 'atlasFile')
  var i1001 = i999[2]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 2) {
  request.r(i1001[i + 0], i1001[i + 1], 2, i1000, '')
  }
  i998.materials = i1000
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1003 = data
  var i1005 = i1003[0]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1005[i + 0]) );
  }
  i1002.files = i1004
  i1002.componentToPrefabIds = i1003[1]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1009 = data
  i1008.path = i1009[0]
  request.r(i1009[1], i1009[2], 0, i1008, 'unityObject')
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1011 = data
  var i1013 = i1011[0]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1013[i + 0]) );
  }
  i1010.scriptsExecutionOrder = i1012
  var i1015 = i1011[1]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1015[i + 0]) );
  }
  i1010.sortingLayers = i1014
  var i1017 = i1011[2]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1017[i + 0]) );
  }
  i1010.cullingLayers = i1016
  i1010.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1011[3], i1010.timeSettings)
  i1010.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1011[4], i1010.physicsSettings)
  i1010.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1011[5], i1010.physics2DSettings)
  i1010.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1011[6], i1010.qualitySettings)
  i1010.enableRealtimeShadows = !!i1011[7]
  i1010.enableAutoInstancing = !!i1011[8]
  i1010.enableDynamicBatching = !!i1011[9]
  i1010.lightmapEncodingQuality = i1011[10]
  i1010.desiredColorSpace = i1011[11]
  var i1019 = i1011[12]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( i1019[i + 0] );
  }
  i1010.allTags = i1018
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1023 = data
  i1022.name = i1023[0]
  i1022.value = i1023[1]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1027 = data
  i1026.id = i1027[0]
  i1026.name = i1027[1]
  i1026.value = i1027[2]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1031 = data
  i1030.id = i1031[0]
  i1030.name = i1031[1]
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1033 = data
  i1032.fixedDeltaTime = i1033[0]
  i1032.maximumDeltaTime = i1033[1]
  i1032.timeScale = i1033[2]
  i1032.maximumParticleTimestep = i1033[3]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1035 = data
  i1034.gravity = new pc.Vec3( i1035[0], i1035[1], i1035[2] )
  i1034.defaultSolverIterations = i1035[3]
  i1034.bounceThreshold = i1035[4]
  i1034.autoSyncTransforms = !!i1035[5]
  i1034.autoSimulation = !!i1035[6]
  var i1037 = i1035[7]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1037[i + 0]) );
  }
  i1034.collisionMatrix = i1036
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1041 = data
  i1040.enabled = !!i1041[0]
  i1040.layerId = i1041[1]
  i1040.otherLayerId = i1041[2]
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1043 = data
  request.r(i1043[0], i1043[1], 0, i1042, 'material')
  i1042.gravity = new pc.Vec2( i1043[2], i1043[3] )
  i1042.positionIterations = i1043[4]
  i1042.velocityIterations = i1043[5]
  i1042.velocityThreshold = i1043[6]
  i1042.maxLinearCorrection = i1043[7]
  i1042.maxAngularCorrection = i1043[8]
  i1042.maxTranslationSpeed = i1043[9]
  i1042.maxRotationSpeed = i1043[10]
  i1042.baumgarteScale = i1043[11]
  i1042.baumgarteTOIScale = i1043[12]
  i1042.timeToSleep = i1043[13]
  i1042.linearSleepTolerance = i1043[14]
  i1042.angularSleepTolerance = i1043[15]
  i1042.defaultContactOffset = i1043[16]
  i1042.autoSimulation = !!i1043[17]
  i1042.queriesHitTriggers = !!i1043[18]
  i1042.queriesStartInColliders = !!i1043[19]
  i1042.callbacksOnDisable = !!i1043[20]
  i1042.reuseCollisionCallbacks = !!i1043[21]
  i1042.autoSyncTransforms = !!i1043[22]
  var i1045 = i1043[23]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1045[i + 0]) );
  }
  i1042.collisionMatrix = i1044
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1049 = data
  i1048.enabled = !!i1049[0]
  i1048.layerId = i1049[1]
  i1048.otherLayerId = i1049[2]
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1051 = data
  var i1053 = i1051[0]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1053[i + 0]) );
  }
  i1050.qualityLevels = i1052
  var i1055 = i1051[1]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( i1055[i + 0] );
  }
  i1050.names = i1054
  i1050.shadows = i1051[2]
  i1050.anisotropicFiltering = i1051[3]
  i1050.antiAliasing = i1051[4]
  i1050.lodBias = i1051[5]
  i1050.shadowCascades = i1051[6]
  i1050.shadowDistance = i1051[7]
  i1050.shadowmaskMode = i1051[8]
  i1050.shadowProjection = i1051[9]
  i1050.shadowResolution = i1051[10]
  i1050.softParticles = !!i1051[11]
  i1050.softVegetation = !!i1051[12]
  i1050.activeColorSpace = i1051[13]
  i1050.desiredColorSpace = i1051[14]
  i1050.masterTextureLimit = i1051[15]
  i1050.maxQueuedFrames = i1051[16]
  i1050.particleRaycastBudget = i1051[17]
  i1050.pixelLightCount = i1051[18]
  i1050.realtimeReflectionProbes = !!i1051[19]
  i1050.shadowCascade2Split = i1051[20]
  i1050.shadowCascade4Split = new pc.Vec3( i1051[21], i1051[22], i1051[23] )
  i1050.streamingMipmapsActive = !!i1051[24]
  i1050.vSyncCount = i1051[25]
  i1050.asyncUploadBufferSize = i1051[26]
  i1050.asyncUploadTimeSlice = i1051[27]
  i1050.billboardsFaceCameraPosition = !!i1051[28]
  i1050.shadowNearPlaneOffset = i1051[29]
  i1050.streamingMipmapsMemoryBudget = i1051[30]
  i1050.maximumLODLevel = i1051[31]
  i1050.streamingMipmapsAddAllCameras = !!i1051[32]
  i1050.streamingMipmapsMaxLevelReduction = i1051[33]
  i1050.streamingMipmapsRenderersPerFrame = i1051[34]
  i1050.resolutionScalingFixedDPIFactor = i1051[35]
  i1050.streamingMipmapsMaxFileIORequests = i1051[36]
  i1050.currentQualityLevel = i1051[37]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i1059 = data
  i1058.AdditionalLightsPerObjectLimit = i1059[0]
  i1058.AdditionalLightsRenderingMode = i1059[1]
  i1058.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1059[2], i1058.LightRenderingMode)
  i1058.ColorGradingLutSize = i1059[3]
  i1058.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i1059[4], i1058.ColorGradingMode)
  i1058.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1059[5], i1058.MainLightRenderingMode)
  i1058.MainLightRenderingModeValue = i1059[6]
  i1058.MainLightShadowsSupported = !!i1059[7]
  i1058.MixedLightingSupported = !!i1059[8]
  i1058.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i1059[9], i1058.MsaaQuality)
  i1058.MSAA = i1059[10]
  i1058.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i1059[11], i1058.OpaqueDownsampling)
  i1058.RenderScale = i1059[12]
  i1058.RequireDepthTexture = !!i1059[13]
  i1058.RequireOpaqueTexture = !!i1059[14]
  i1058.ShadowAtlasResolution = i1059[15]
  i1058.ShadowDepthBias = i1059[16]
  i1058.SupportsHDR = !!i1059[17]
  i1058.SupportsTerrainHoles = !!i1059[18]
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i1061 = data
  i1060.Disabled = i1061[0]
  i1060.PerVertex = i1061[1]
  i1060.PerPixel = i1061[2]
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i1063 = data
  i1062.LowDynamicRange = i1063[0]
  i1062.HighDynamicRange = i1063[1]
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i1065 = data
  i1064.Disabled = i1065[0]
  i1064._2x = i1065[1]
  i1064._4x = i1065[2]
  i1064._8x = i1065[3]
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i1067 = data
  i1066.None = i1067[0]
  i1066._2xBilinear = i1067[1]
  i1066._4xBox = i1067[2]
  i1066._4xBilinear = i1067[3]
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1071 = data
  i1070.weight = i1071[0]
  i1070.vertices = i1071[1]
  i1070.normals = i1071[2]
  i1070.tangents = i1071[3]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1075 = data
  i1074.mode = i1075[0]
  i1074.parameter = i1075[1]
  i1074.threshold = i1075[2]
  return i1074
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"frontSortingLayerID":16,"frontSortingOrder":17,"backSortingLayerID":18,"backSortingOrder":19,"alphaCutoff":20,"sprite":21,"tileMode":23,"isCustomRangeActive":24,"spriteSortPoint":25},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5,"avatarUnsupported":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"MainLightShadowsSupported":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"RenderScale":12,"RequireDepthTexture":13,"RequireOpaqueTexture":14,"ShadowAtlasResolution":15,"ShadowDepthBias":16,"SupportsHDR":17,"SupportsTerrainHoles":18},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[55],"56":[3],"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[58],"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[66],"73":[66],"74":[66],"75":[66],"76":[66],"77":[66],"78":[66],"79":[3],"80":[25],"81":[82],"83":[82],"29":[28],"84":[3],"6":[3],"11":[10],"85":[28],"26":[23,25],"37":[33,28],"86":[20,23,25],"87":[23,25],"88":[25,23],"89":[58],"90":[66],"91":[92],"93":[94],"95":[28],"96":[25,28],"97":[28,33],"98":[28],"99":[33,28],"100":[25],"101":[33,28],"102":[28],"103":[104],"105":[28],"106":[28],"32":[29],"34":[33,28],"107":[28],"31":[29],"108":[28],"109":[28],"110":[28],"111":[28],"112":[28],"113":[28],"114":[28],"115":[28],"116":[28],"117":[33,28],"118":[28],"119":[28],"120":[28],"121":[28],"122":[33,28],"123":[28],"124":[43],"125":[43],"44":[43],"126":[43],"127":[3],"128":[3],"129":[28],"130":[104],"131":[104]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.SpriteRenderer","UnityEngine.Sprite","BottleController","UnityEngine.LineRenderer","FxBubblesBottle","UnityEngine.BoxCollider2D","UnityEngine.GameObject","UnityEngine.SpriteMask","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","SurfaceColor","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","Spine.Unity.SkeletonAnimation","Spine.Unity.SkeletonDataAsset","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Animation","UnityEngine.AnimationClip","Spine.Unity.SkeletonGraphic","GameManager1","GamePlayController","AudioManager","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","Spine.Unity.SpineAtlasAsset","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","Spine.Unity.BoneFollowerGraphic","Spine.Unity.SkeletonMecanim","Spine.Unity.SkeletonRenderer","Spine.Unity.SkeletonPartsRenderer","Spine.Unity.FollowLocationRigidbody","Spine.Unity.FollowLocationRigidbody2D","Spine.Unity.SkeletonUtility","Spine.Unity.ISkeletonAnimation","Spine.Unity.SkeletonUtilityConstraint","Spine.Unity.SkeletonUtilityBone","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.Rendering.UI.UIFoldout","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.15f1";

Deserializers.productName = "WaterSortProject";

Deserializers.lunaInitializationTime = "02/19/2024 02:12:45";

Deserializers.lunaDaysRunning = "0.4";

Deserializers.lunaVersion = "5.5.0";

Deserializers.lunaSHA = "aa8b6dc467b3eacc9168b32bb8d120b69b67a956";

Deserializers.creativeName = "PLY01_HieuNX_Luna";

Deserializers.lunaAppID = "13792";

Deserializers.projectId = "99b4639c3679c3243a0d2947cf59479c";

Deserializers.packagesInfo = "com.unity.render-pipelines.universal: 12.1.8\ncom.unity.textmeshpro: 3.0.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1797";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4994";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, prefabs";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "True";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.WaterSortProject";

Deserializers.disableAntiAliasing = true;

Deserializers.preferWebGl2 = false;

Deserializers.buildID = "0f184859-8ef0-4144-9c9a-ec3bea64e0e5";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

