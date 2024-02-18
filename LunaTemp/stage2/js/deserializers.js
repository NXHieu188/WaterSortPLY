var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i428 = root || request.c( 'UnityEngine.JointSpring' )
  var i429 = data
  i428.spring = i429[0]
  i428.damper = i429[1]
  i428.targetPosition = i429[2]
  return i428
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i430 = root || request.c( 'UnityEngine.JointMotor' )
  var i431 = data
  i430.m_TargetVelocity = i431[0]
  i430.m_Force = i431[1]
  i430.m_FreeSpin = i431[2]
  return i430
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i432 = root || request.c( 'UnityEngine.JointLimits' )
  var i433 = data
  i432.m_Min = i433[0]
  i432.m_Max = i433[1]
  i432.m_Bounciness = i433[2]
  i432.m_BounceMinVelocity = i433[3]
  i432.m_ContactDistance = i433[4]
  i432.minBounce = i433[5]
  i432.maxBounce = i433[6]
  return i432
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i434 = root || request.c( 'UnityEngine.JointDrive' )
  var i435 = data
  i434.m_PositionSpring = i435[0]
  i434.m_PositionDamper = i435[1]
  i434.m_MaximumForce = i435[2]
  return i434
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i436 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i437 = data
  i436.m_Spring = i437[0]
  i436.m_Damper = i437[1]
  return i436
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i438 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i439 = data
  i438.m_Limit = i439[0]
  i438.m_Bounciness = i439[1]
  i438.m_ContactDistance = i439[2]
  return i438
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i440 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i441 = data
  i440.m_ExtremumSlip = i441[0]
  i440.m_ExtremumValue = i441[1]
  i440.m_AsymptoteSlip = i441[2]
  i440.m_AsymptoteValue = i441[3]
  i440.m_Stiffness = i441[4]
  return i440
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i442 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i443 = data
  i442.m_LowerAngle = i443[0]
  i442.m_UpperAngle = i443[1]
  return i442
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i444 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i445 = data
  i444.m_MotorSpeed = i445[0]
  i444.m_MaximumMotorTorque = i445[1]
  return i444
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i446 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i447 = data
  i446.m_DampingRatio = i447[0]
  i446.m_Frequency = i447[1]
  i446.m_Angle = i447[2]
  return i446
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i448 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i449 = data
  i448.m_LowerTranslation = i449[0]
  i448.m_UpperTranslation = i449[1]
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i450 = root || new pc.UnityMaterial()
  var i451 = data
  i450.name = i451[0]
  request.r(i451[1], i451[2], 0, i450, 'shader')
  i450.renderQueue = i451[3]
  i450.enableInstancing = !!i451[4]
  var i453 = i451[5]
  var i452 = []
  for(var i = 0; i < i453.length; i += 1) {
    i452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i453[i + 0]) );
  }
  i450.floatParameters = i452
  var i455 = i451[6]
  var i454 = []
  for(var i = 0; i < i455.length; i += 1) {
    i454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i455[i + 0]) );
  }
  i450.colorParameters = i454
  var i457 = i451[7]
  var i456 = []
  for(var i = 0; i < i457.length; i += 1) {
    i456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i457[i + 0]) );
  }
  i450.vectorParameters = i456
  var i459 = i451[8]
  var i458 = []
  for(var i = 0; i < i459.length; i += 1) {
    i458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i459[i + 0]) );
  }
  i450.textureParameters = i458
  var i461 = i451[9]
  var i460 = []
  for(var i = 0; i < i461.length; i += 1) {
    i460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i461[i + 0]) );
  }
  i450.materialFlags = i460
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i465 = data
  i464.name = i465[0]
  i464.value = i465[1]
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i469 = data
  i468.name = i469[0]
  i468.value = new pc.Color(i469[1], i469[2], i469[3], i469[4])
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i473 = data
  i472.name = i473[0]
  i472.value = new pc.Vec4( i473[1], i473[2], i473[3], i473[4] )
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i477 = data
  i476.name = i477[0]
  request.r(i477[1], i477[2], 0, i476, 'value')
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i481 = data
  i480.name = i481[0]
  i480.enabled = !!i481[1]
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i483 = data
  i482.name = i483[0]
  i482.width = i483[1]
  i482.height = i483[2]
  i482.mipmapCount = i483[3]
  i482.anisoLevel = i483[4]
  i482.filterMode = i483[5]
  i482.hdr = !!i483[6]
  i482.format = i483[7]
  i482.wrapMode = i483[8]
  i482.alphaIsTransparency = !!i483[9]
  i482.alphaSource = i483[10]
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i485 = data
  i484.name = i485[0]
  i484.atlasId = i485[1]
  i484.mipmapCount = i485[2]
  i484.hdr = !!i485[3]
  i484.size = i485[4]
  i484.anisoLevel = i485[5]
  i484.filterMode = i485[6]
  i484.wrapMode = i485[7]
  var i487 = i485[8]
  var i486 = []
  for(var i = 0; i < i487.length; i += 4) {
    i486.push( UnityEngine.Rect.MinMaxRect(i487[i + 0], i487[i + 1], i487[i + 2], i487[i + 3]) );
  }
  i484.rects = i486
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i491 = data
  i490.name = i491[0]
  i490.index = i491[1]
  i490.startup = !!i491[2]
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i493 = data
  i492.position = new pc.Vec3( i493[0], i493[1], i493[2] )
  i492.scale = new pc.Vec3( i493[3], i493[4], i493[5] )
  i492.rotation = new pc.Quat(i493[6], i493[7], i493[8], i493[9])
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i495 = data
  i494.enabled = !!i495[0]
  i494.aspect = i495[1]
  i494.orthographic = !!i495[2]
  i494.orthographicSize = i495[3]
  i494.backgroundColor = new pc.Color(i495[4], i495[5], i495[6], i495[7])
  i494.nearClipPlane = i495[8]
  i494.farClipPlane = i495[9]
  i494.fieldOfView = i495[10]
  i494.depth = i495[11]
  i494.clearFlags = i495[12]
  i494.cullingMask = i495[13]
  i494.rect = i495[14]
  request.r(i495[15], i495[16], 0, i494, 'targetTexture')
  i494.usePhysicalProperties = !!i495[17]
  i494.focalLength = i495[18]
  i494.sensorSize = new pc.Vec2( i495[19], i495[20] )
  i494.lensShift = new pc.Vec2( i495[21], i495[22] )
  i494.gateFit = i495[23]
  return i494
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i497 = data
  i496.m_RenderShadows = !!i497[0]
  i496.m_RequiresDepthTextureOption = i497[1]
  i496.m_RequiresOpaqueTextureOption = i497[2]
  i496.m_CameraType = i497[3]
  var i499 = i497[4]
  var i498 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i499.length; i += 2) {
  request.r(i499[i + 0], i499[i + 1], 1, i498, '')
  }
  i496.m_Cameras = i498
  i496.m_RendererIndex = i497[5]
  i496.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i497[6] )
  request.r(i497[7], i497[8], 0, i496, 'm_VolumeTrigger')
  i496.m_VolumeFrameworkUpdateModeOption = i497[9]
  i496.m_RenderPostProcessing = !!i497[10]
  i496.m_Antialiasing = i497[11]
  i496.m_AntialiasingQuality = i497[12]
  i496.m_StopNaN = !!i497[13]
  i496.m_Dithering = !!i497[14]
  i496.m_ClearDepth = !!i497[15]
  i496.m_AllowXRRendering = !!i497[16]
  i496.m_RequiresDepthTexture = !!i497[17]
  i496.m_RequiresColorTexture = !!i497[18]
  i496.m_Version = i497[19]
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i503 = data
  i502.name = i503[0]
  i502.tagId = i503[1]
  i502.enabled = !!i503[2]
  i502.isStatic = !!i503[3]
  i502.layer = i503[4]
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i505 = data
  i504.enabled = !!i505[0]
  i504.type = i505[1]
  i504.color = new pc.Color(i505[2], i505[3], i505[4], i505[5])
  i504.cullingMask = i505[6]
  i504.intensity = i505[7]
  i504.range = i505[8]
  i504.spotAngle = i505[9]
  i504.shadows = i505[10]
  i504.shadowNormalBias = i505[11]
  i504.shadowBias = i505[12]
  i504.shadowStrength = i505[13]
  i504.shadowResolution = i505[14]
  i504.lightmapBakeType = i505[15]
  i504.renderMode = i505[16]
  request.r(i505[17], i505[18], 0, i504, 'cookie')
  i504.cookieSize = i505[19]
  return i504
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i506 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i507 = data
  i506.m_Version = i507[0]
  i506.m_UsePipelineSettings = !!i507[1]
  i506.m_AdditionalLightsShadowResolutionTier = i507[2]
  i506.m_LightLayerMask = i507[3]
  i506.m_CustomShadowLayers = !!i507[4]
  i506.m_ShadowLayerMask = i507[5]
  i506.m_LightCookieSize = new pc.Vec2( i507[6], i507[7] )
  i506.m_LightCookieOffset = new pc.Vec2( i507[8], i507[9] )
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i509 = data
  i508.enabled = !!i509[0]
  request.r(i509[1], i509[2], 0, i508, 'sharedMaterial')
  var i511 = i509[3]
  var i510 = []
  for(var i = 0; i < i511.length; i += 2) {
  request.r(i511[i + 0], i511[i + 1], 2, i510, '')
  }
  i508.sharedMaterials = i510
  i508.receiveShadows = !!i509[4]
  i508.shadowCastingMode = i509[5]
  i508.sortingLayerID = i509[6]
  i508.sortingOrder = i509[7]
  i508.lightmapIndex = i509[8]
  i508.lightmapSceneIndex = i509[9]
  i508.lightmapScaleOffset = new pc.Vec4( i509[10], i509[11], i509[12], i509[13] )
  i508.lightProbeUsage = i509[14]
  i508.reflectionProbeUsage = i509[15]
  i508.color = new pc.Color(i509[16], i509[17], i509[18], i509[19])
  request.r(i509[20], i509[21], 0, i508, 'sprite')
  i508.flipX = !!i509[22]
  i508.flipY = !!i509[23]
  i508.drawMode = i509[24]
  i508.size = new pc.Vec2( i509[25], i509[26] )
  i508.tileMode = i509[27]
  i508.adaptiveModeThreshold = i509[28]
  i508.maskInteraction = i509[29]
  i508.spriteSortPoint = i509[30]
  return i508
}

Deserializers["BottleController"] = function (request, data, root) {
  var i514 = root || request.c( 'BottleController' )
  var i515 = data
  var i517 = i515[0]
  var i516 = []
  for(var i = 0; i < i517.length; i += 4) {
    i516.push( new pc.Color(i517[i + 0], i517[i + 1], i517[i + 2], i517[i + 3]) );
  }
  i514.arrColor = i516
  request.r(i515[1], i515[2], 0, i514, 'bottleMaskSR')
  var i519 = i515[3]
  var i518 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i519.length; i += 2) {
  request.r(i519[i + 0], i519[i + 1], 1, i518, '')
  }
  i514.lstWaterSurfaceTop = i518
  var i521 = i515[4]
  var i520 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i521.length; i += 2) {
  request.r(i521[i + 0], i521[i + 1], 1, i520, '')
  }
  i514.lstWaterSurface = i520
  i514.fillAmountCur = new pc.AnimationCurve( { keys_flow: i515[5] } )
  i514.scaleAndRotationMultiplierCur = new pc.AnimationCurve( { keys_flow: i515[6] } )
  i514.rotationSpeedMultipiler = new pc.AnimationCurve( { keys_flow: i515[7] } )
  i514.arrFillAmount = i515[8]
  i514.arrRotationValues = i515[9]
  i514.numberOfColorInBottle = i515[10]
  i514.numberOfTopColorLayers = i515[11]
  i514.topColor = new pc.Color(i515[12], i515[13], i515[14], i515[15])
  request.r(i515[16], i515[17], 0, i514, 'otherBottleControllerRef')
  request.r(i515[18], i515[19], 0, i514, 'leftPoint')
  request.r(i515[20], i515[21], 0, i514, 'rightPoint')
  request.r(i515[22], i515[23], 0, i514, 'choosenPoint')
  request.r(i515[24], i515[25], 0, i514, 'lineRenderer')
  request.r(i515[26], i515[27], 0, i514, 'fxBotNuoc')
  request.r(i515[28], i515[29], 0, i514, 'boxCollider2D')
  request.r(i515[30], i515[31], 0, i514, 'done')
  i514.isCanController = !!i515[32]
  i514.timeRotate = i515[33]
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i527 = data
  i526.usedByComposite = !!i527[0]
  i526.autoTiling = !!i527[1]
  i526.size = new pc.Vec2( i527[2], i527[3] )
  i526.edgeRadius = i527[4]
  i526.enabled = !!i527[5]
  i526.isTrigger = !!i527[6]
  i526.usedByEffector = !!i527[7]
  i526.density = i527[8]
  i526.offset = new pc.Vec2( i527[9], i527[10] )
  request.r(i527[11], i527[12], 0, i526, 'material')
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i529 = data
  i528.enabled = !!i529[0]
  request.r(i529[1], i529[2], 0, i528, 'sharedMaterial')
  var i531 = i529[3]
  var i530 = []
  for(var i = 0; i < i531.length; i += 2) {
  request.r(i531[i + 0], i531[i + 1], 2, i530, '')
  }
  i528.sharedMaterials = i530
  i528.receiveShadows = !!i529[4]
  i528.shadowCastingMode = i529[5]
  i528.sortingLayerID = i529[6]
  i528.sortingOrder = i529[7]
  i528.lightmapIndex = i529[8]
  i528.lightmapSceneIndex = i529[9]
  i528.lightmapScaleOffset = new pc.Vec4( i529[10], i529[11], i529[12], i529[13] )
  i528.lightProbeUsage = i529[14]
  i528.reflectionProbeUsage = i529[15]
  i528.frontSortingLayerID = i529[16]
  i528.frontSortingOrder = i529[17]
  i528.backSortingLayerID = i529[18]
  i528.backSortingOrder = i529[19]
  i528.alphaCutoff = i529[20]
  request.r(i529[21], i529[22], 0, i528, 'sprite')
  i528.tileMode = i529[23]
  i528.isCustomRangeActive = !!i529[24]
  i528.spriteSortPoint = i529[25]
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i533 = data
  i532.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i533[0], i532.main)
  i532.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i533[1], i532.colorBySpeed)
  i532.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i533[2], i532.colorOverLifetime)
  i532.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i533[3], i532.emission)
  i532.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i533[4], i532.rotationBySpeed)
  i532.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i533[5], i532.rotationOverLifetime)
  i532.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i533[6], i532.shape)
  i532.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i533[7], i532.sizeBySpeed)
  i532.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i533[8], i532.sizeOverLifetime)
  i532.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i533[9], i532.textureSheetAnimation)
  i532.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i533[10], i532.velocityOverLifetime)
  i532.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i533[11], i532.noise)
  i532.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i533[12], i532.inheritVelocity)
  i532.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i533[13], i532.forceOverLifetime)
  i532.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i533[14], i532.limitVelocityOverLifetime)
  i532.useAutoRandomSeed = !!i533[15]
  i532.randomSeed = i533[16]
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i534 = root || new pc.ParticleSystemMain()
  var i535 = data
  i534.duration = i535[0]
  i534.loop = !!i535[1]
  i534.prewarm = !!i535[2]
  i534.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i535[3], i534.startDelay)
  i534.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i535[4], i534.startLifetime)
  i534.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i535[5], i534.startSpeed)
  i534.startSize3D = !!i535[6]
  i534.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i535[7], i534.startSizeX)
  i534.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i535[8], i534.startSizeY)
  i534.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i535[9], i534.startSizeZ)
  i534.startRotation3D = !!i535[10]
  i534.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i535[11], i534.startRotationX)
  i534.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i535[12], i534.startRotationY)
  i534.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i535[13], i534.startRotationZ)
  i534.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i535[14], i534.startColor)
  i534.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i535[15], i534.gravityModifier)
  i534.simulationSpace = i535[16]
  request.r(i535[17], i535[18], 0, i534, 'customSimulationSpace')
  i534.simulationSpeed = i535[19]
  i534.useUnscaledTime = !!i535[20]
  i534.scalingMode = i535[21]
  i534.playOnAwake = !!i535[22]
  i534.maxParticles = i535[23]
  i534.emitterVelocityMode = i535[24]
  i534.stopAction = i535[25]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i536 = root || new pc.MinMaxCurve()
  var i537 = data
  i536.mode = i537[0]
  i536.curveMin = new pc.AnimationCurve( { keys_flow: i537[1] } )
  i536.curveMax = new pc.AnimationCurve( { keys_flow: i537[2] } )
  i536.curveMultiplier = i537[3]
  i536.constantMin = i537[4]
  i536.constantMax = i537[5]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i538 = root || new pc.MinMaxGradient()
  var i539 = data
  i538.mode = i539[0]
  i538.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i539[1], i538.gradientMin)
  i538.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i539[2], i538.gradientMax)
  i538.colorMin = new pc.Color(i539[3], i539[4], i539[5], i539[6])
  i538.colorMax = new pc.Color(i539[7], i539[8], i539[9], i539[10])
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i541 = data
  i540.mode = i541[0]
  var i543 = i541[1]
  var i542 = []
  for(var i = 0; i < i543.length; i += 1) {
    i542.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i543[i + 0]) );
  }
  i540.colorKeys = i542
  var i545 = i541[2]
  var i544 = []
  for(var i = 0; i < i545.length; i += 1) {
    i544.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i545[i + 0]) );
  }
  i540.alphaKeys = i544
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i546 = root || new pc.ParticleSystemColorBySpeed()
  var i547 = data
  i546.enabled = !!i547[0]
  i546.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i547[1], i546.color)
  i546.range = new pc.Vec2( i547[2], i547[3] )
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i551 = data
  i550.color = new pc.Color(i551[0], i551[1], i551[2], i551[3])
  i550.time = i551[4]
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i555 = data
  i554.alpha = i555[0]
  i554.time = i555[1]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i556 = root || new pc.ParticleSystemColorOverLifetime()
  var i557 = data
  i556.enabled = !!i557[0]
  i556.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i557[1], i556.color)
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i558 = root || new pc.ParticleSystemEmitter()
  var i559 = data
  i558.enabled = !!i559[0]
  i558.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[1], i558.rateOverTime)
  i558.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i559[2], i558.rateOverDistance)
  var i561 = i559[3]
  var i560 = []
  for(var i = 0; i < i561.length; i += 1) {
    i560.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i561[i + 0]) );
  }
  i558.bursts = i560
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i564 = root || new pc.ParticleSystemBurst()
  var i565 = data
  i564.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[0], i564.count)
  i564.cycleCount = i565[1]
  i564.minCount = i565[2]
  i564.maxCount = i565[3]
  i564.repeatInterval = i565[4]
  i564.time = i565[5]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i566 = root || new pc.ParticleSystemRotationBySpeed()
  var i567 = data
  i566.enabled = !!i567[0]
  i566.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[1], i566.x)
  i566.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[2], i566.y)
  i566.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i567[3], i566.z)
  i566.separateAxes = !!i567[4]
  i566.range = new pc.Vec2( i567[5], i567[6] )
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i568 = root || new pc.ParticleSystemRotationOverLifetime()
  var i569 = data
  i568.enabled = !!i569[0]
  i568.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[1], i568.x)
  i568.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[2], i568.y)
  i568.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i569[3], i568.z)
  i568.separateAxes = !!i569[4]
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i570 = root || new pc.ParticleSystemShape()
  var i571 = data
  i570.enabled = !!i571[0]
  i570.shapeType = i571[1]
  i570.randomDirectionAmount = i571[2]
  i570.sphericalDirectionAmount = i571[3]
  i570.randomPositionAmount = i571[4]
  i570.alignToDirection = !!i571[5]
  i570.radius = i571[6]
  i570.radiusMode = i571[7]
  i570.radiusSpread = i571[8]
  i570.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[9], i570.radiusSpeed)
  i570.radiusThickness = i571[10]
  i570.angle = i571[11]
  i570.length = i571[12]
  i570.boxThickness = new pc.Vec3( i571[13], i571[14], i571[15] )
  i570.meshShapeType = i571[16]
  request.r(i571[17], i571[18], 0, i570, 'mesh')
  request.r(i571[19], i571[20], 0, i570, 'meshRenderer')
  request.r(i571[21], i571[22], 0, i570, 'skinnedMeshRenderer')
  i570.useMeshMaterialIndex = !!i571[23]
  i570.meshMaterialIndex = i571[24]
  i570.useMeshColors = !!i571[25]
  i570.normalOffset = i571[26]
  i570.arc = i571[27]
  i570.arcMode = i571[28]
  i570.arcSpread = i571[29]
  i570.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[30], i570.arcSpeed)
  i570.donutRadius = i571[31]
  i570.position = new pc.Vec3( i571[32], i571[33], i571[34] )
  i570.rotation = new pc.Vec3( i571[35], i571[36], i571[37] )
  i570.scale = new pc.Vec3( i571[38], i571[39], i571[40] )
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i572 = root || new pc.ParticleSystemSizeBySpeed()
  var i573 = data
  i572.enabled = !!i573[0]
  i572.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[1], i572.x)
  i572.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[2], i572.y)
  i572.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[3], i572.z)
  i572.separateAxes = !!i573[4]
  i572.range = new pc.Vec2( i573[5], i573[6] )
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i574 = root || new pc.ParticleSystemSizeOverLifetime()
  var i575 = data
  i574.enabled = !!i575[0]
  i574.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[1], i574.x)
  i574.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[2], i574.y)
  i574.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[3], i574.z)
  i574.separateAxes = !!i575[4]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i576 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i577 = data
  i576.enabled = !!i577[0]
  i576.mode = i577[1]
  i576.animation = i577[2]
  i576.numTilesX = i577[3]
  i576.numTilesY = i577[4]
  i576.useRandomRow = !!i577[5]
  i576.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[6], i576.frameOverTime)
  i576.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[7], i576.startFrame)
  i576.cycleCount = i577[8]
  i576.rowIndex = i577[9]
  i576.flipU = i577[10]
  i576.flipV = i577[11]
  i576.spriteCount = i577[12]
  var i579 = i577[13]
  var i578 = []
  for(var i = 0; i < i579.length; i += 2) {
  request.r(i579[i + 0], i579[i + 1], 2, i578, '')
  }
  i576.sprites = i578
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i582 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i583 = data
  i582.enabled = !!i583[0]
  i582.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[1], i582.x)
  i582.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[2], i582.y)
  i582.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[3], i582.z)
  i582.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[4], i582.radial)
  i582.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[5], i582.speedModifier)
  i582.space = i583[6]
  i582.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[7], i582.orbitalX)
  i582.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[8], i582.orbitalY)
  i582.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[9], i582.orbitalZ)
  i582.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[10], i582.orbitalOffsetX)
  i582.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[11], i582.orbitalOffsetY)
  i582.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[12], i582.orbitalOffsetZ)
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i584 = root || new pc.ParticleSystemNoise()
  var i585 = data
  i584.enabled = !!i585[0]
  i584.separateAxes = !!i585[1]
  i584.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[2], i584.strengthX)
  i584.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[3], i584.strengthY)
  i584.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[4], i584.strengthZ)
  i584.frequency = i585[5]
  i584.damping = !!i585[6]
  i584.octaveCount = i585[7]
  i584.octaveMultiplier = i585[8]
  i584.octaveScale = i585[9]
  i584.quality = i585[10]
  i584.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[11], i584.scrollSpeed)
  i584.scrollSpeedMultiplier = i585[12]
  i584.remapEnabled = !!i585[13]
  i584.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[14], i584.remapX)
  i584.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[15], i584.remapY)
  i584.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[16], i584.remapZ)
  i584.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[17], i584.positionAmount)
  i584.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[18], i584.rotationAmount)
  i584.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i585[19], i584.sizeAmount)
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i586 = root || new pc.ParticleSystemInheritVelocity()
  var i587 = data
  i586.enabled = !!i587[0]
  i586.mode = i587[1]
  i586.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i587[2], i586.curve)
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i588 = root || new pc.ParticleSystemForceOverLifetime()
  var i589 = data
  i588.enabled = !!i589[0]
  i588.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[1], i588.x)
  i588.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[2], i588.y)
  i588.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[3], i588.z)
  i588.space = i589[4]
  i588.randomized = !!i589[5]
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i590 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i591 = data
  i590.enabled = !!i591[0]
  i590.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[1], i590.limit)
  i590.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[2], i590.limitX)
  i590.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[3], i590.limitY)
  i590.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[4], i590.limitZ)
  i590.dampen = i591[5]
  i590.separateAxes = !!i591[6]
  i590.space = i591[7]
  i590.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[8], i590.drag)
  i590.multiplyDragByParticleSize = !!i591[9]
  i590.multiplyDragByParticleVelocity = !!i591[10]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i593 = data
  i592.enabled = !!i593[0]
  request.r(i593[1], i593[2], 0, i592, 'sharedMaterial')
  var i595 = i593[3]
  var i594 = []
  for(var i = 0; i < i595.length; i += 2) {
  request.r(i595[i + 0], i595[i + 1], 2, i594, '')
  }
  i592.sharedMaterials = i594
  i592.receiveShadows = !!i593[4]
  i592.shadowCastingMode = i593[5]
  i592.sortingLayerID = i593[6]
  i592.sortingOrder = i593[7]
  i592.lightmapIndex = i593[8]
  i592.lightmapSceneIndex = i593[9]
  i592.lightmapScaleOffset = new pc.Vec4( i593[10], i593[11], i593[12], i593[13] )
  i592.lightProbeUsage = i593[14]
  i592.reflectionProbeUsage = i593[15]
  request.r(i593[16], i593[17], 0, i592, 'mesh')
  i592.meshCount = i593[18]
  i592.activeVertexStreamsCount = i593[19]
  i592.alignment = i593[20]
  i592.renderMode = i593[21]
  i592.sortMode = i593[22]
  i592.lengthScale = i593[23]
  i592.velocityScale = i593[24]
  i592.cameraVelocityScale = i593[25]
  i592.normalDirection = i593[26]
  i592.sortingFudge = i593[27]
  i592.minParticleSize = i593[28]
  i592.maxParticleSize = i593[29]
  i592.pivot = new pc.Vec3( i593[30], i593[31], i593[32] )
  request.r(i593[33], i593[34], 0, i592, 'trailMaterial')
  return i592
}

Deserializers["FxBubblesBottle"] = function (request, data, root) {
  var i596 = root || request.c( 'FxBubblesBottle' )
  var i597 = data
  i596.lifeTime = i597[0]
  request.r(i597[1], i597[2], 0, i596, 'fxBubbles')
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i599 = data
  request.r(i599[0], i599[1], 0, i598, 'animatorController')
  request.r(i599[2], i599[3], 0, i598, 'avatar')
  i598.updateMode = i599[4]
  i598.hasTransformHierarchy = !!i599[5]
  i598.applyRootMotion = !!i599[6]
  var i601 = i599[7]
  var i600 = []
  for(var i = 0; i < i601.length; i += 2) {
  request.r(i601[i + 0], i601[i + 1], 2, i600, '')
  }
  i598.humanBones = i600
  i598.enabled = !!i599[8]
  return i598
}

Deserializers["GameManager1"] = function (request, data, root) {
  var i604 = root || request.c( 'GameManager1' )
  var i605 = data
  request.r(i605[0], i605[1], 0, i604, 'gamePlayController')
  return i604
}

Deserializers["GamePlayController"] = function (request, data, root) {
  var i606 = root || request.c( 'GamePlayController' )
  var i607 = data
  request.r(i607[0], i607[1], 0, i606, 'firstBottle')
  request.r(i607[2], i607[3], 0, i606, 'secondBottle')
  i606.isCanControll = !!i607[4]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.LineRenderer"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.LineRenderer' )
  var i609 = data
  i608.textureMode = i609[0]
  i608.alignment = i609[1]
  i608.widthCurve = new pc.AnimationCurve( { keys_flow: i609[2] } )
  i608.colorGradient = i609[3] ? new pc.ColorGradient(i609[3][0], i609[3][1], i609[3][2]) : null
  var i611 = i609[4]
  var i610 = []
  for(var i = 0; i < i611.length; i += 3) {
    i610.push( new pc.Vec3( i611[i + 0], i611[i + 1], i611[i + 2] ) );
  }
  i608.positions = i610
  i608.positionCount = i609[5]
  i608.widthMultiplier = i609[6]
  i608.startWidth = i609[7]
  i608.endWidth = i609[8]
  i608.numCornerVertices = i609[9]
  i608.numCapVertices = i609[10]
  i608.useWorldSpace = !!i609[11]
  i608.loop = !!i609[12]
  i608.startColor = new pc.Color(i609[13], i609[14], i609[15], i609[16])
  i608.endColor = new pc.Color(i609[17], i609[18], i609[19], i609[20])
  i608.generateLightingData = !!i609[21]
  i608.enabled = !!i609[22]
  request.r(i609[23], i609[24], 0, i608, 'sharedMaterial')
  var i613 = i609[25]
  var i612 = []
  for(var i = 0; i < i613.length; i += 2) {
  request.r(i613[i + 0], i613[i + 1], 2, i612, '')
  }
  i608.sharedMaterials = i612
  i608.receiveShadows = !!i609[26]
  i608.shadowCastingMode = i609[27]
  i608.sortingLayerID = i609[28]
  i608.sortingOrder = i609[29]
  i608.lightmapIndex = i609[30]
  i608.lightmapSceneIndex = i609[31]
  i608.lightmapScaleOffset = new pc.Vec4( i609[32], i609[33], i609[34], i609[35] )
  i608.lightProbeUsage = i609[36]
  i608.reflectionProbeUsage = i609[37]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i617 = data
  i616.pivot = new pc.Vec2( i617[0], i617[1] )
  i616.anchorMin = new pc.Vec2( i617[2], i617[3] )
  i616.anchorMax = new pc.Vec2( i617[4], i617[5] )
  i616.sizeDelta = new pc.Vec2( i617[6], i617[7] )
  i616.anchoredPosition3D = new pc.Vec3( i617[8], i617[9], i617[10] )
  i616.rotation = new pc.Quat(i617[11], i617[12], i617[13], i617[14])
  i616.scale = new pc.Vec3( i617[15], i617[16], i617[17] )
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i619 = data
  i618.enabled = !!i619[0]
  i618.planeDistance = i619[1]
  i618.referencePixelsPerUnit = i619[2]
  i618.isFallbackOverlay = !!i619[3]
  i618.renderMode = i619[4]
  i618.renderOrder = i619[5]
  i618.sortingLayerName = i619[6]
  i618.sortingOrder = i619[7]
  i618.scaleFactor = i619[8]
  request.r(i619[9], i619[10], 0, i618, 'worldCamera')
  i618.overrideSorting = !!i619[11]
  i618.pixelPerfect = !!i619[12]
  i618.targetDisplay = i619[13]
  i618.overridePixelPerfect = !!i619[14]
  return i618
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i621 = data
  i620.m_UiScaleMode = i621[0]
  i620.m_ReferencePixelsPerUnit = i621[1]
  i620.m_ScaleFactor = i621[2]
  i620.m_ReferenceResolution = new pc.Vec2( i621[3], i621[4] )
  i620.m_ScreenMatchMode = i621[5]
  i620.m_MatchWidthOrHeight = i621[6]
  i620.m_PhysicalUnit = i621[7]
  i620.m_FallbackScreenDPI = i621[8]
  i620.m_DefaultSpriteDPI = i621[9]
  i620.m_DynamicPixelsPerUnit = i621[10]
  i620.m_PresetInfoIsWorld = !!i621[11]
  return i620
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i622 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i623 = data
  i622.m_IgnoreReversedGraphics = !!i623[0]
  i622.m_BlockingObjects = i623[1]
  i622.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i623[2] )
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i625 = data
  i624.cullTransparentMesh = !!i625[0]
  return i624
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.UI.Image' )
  var i627 = data
  request.r(i627[0], i627[1], 0, i626, 'm_Sprite')
  i626.m_Type = i627[2]
  i626.m_PreserveAspect = !!i627[3]
  i626.m_FillCenter = !!i627[4]
  i626.m_FillMethod = i627[5]
  i626.m_FillAmount = i627[6]
  i626.m_FillClockwise = !!i627[7]
  i626.m_FillOrigin = i627[8]
  i626.m_UseSpriteMesh = !!i627[9]
  i626.m_PixelsPerUnitMultiplier = i627[10]
  request.r(i627[11], i627[12], 0, i626, 'm_Material')
  i626.m_Maskable = !!i627[13]
  i626.m_Color = new pc.Color(i627[14], i627[15], i627[16], i627[17])
  i626.m_RaycastTarget = !!i627[18]
  i626.m_RaycastPadding = new pc.Vec4( i627[19], i627[20], i627[21], i627[22] )
  return i626
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i628 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i629 = data
  request.r(i629[0], i629[1], 0, i628, 'm_FirstSelected')
  i628.m_sendNavigationEvents = !!i629[2]
  i628.m_DragThreshold = i629[3]
  return i628
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i630 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i631 = data
  i630.m_HorizontalAxis = i631[0]
  i630.m_VerticalAxis = i631[1]
  i630.m_SubmitButton = i631[2]
  i630.m_CancelButton = i631[3]
  i630.m_InputActionsPerSecond = i631[4]
  i630.m_RepeatDelay = i631[5]
  i630.m_ForceModuleActive = !!i631[6]
  i630.m_SendPointerHoverToParent = !!i631[7]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i633 = data
  i632.ambientIntensity = i633[0]
  i632.reflectionIntensity = i633[1]
  i632.ambientMode = i633[2]
  i632.ambientLight = new pc.Color(i633[3], i633[4], i633[5], i633[6])
  i632.ambientSkyColor = new pc.Color(i633[7], i633[8], i633[9], i633[10])
  i632.ambientGroundColor = new pc.Color(i633[11], i633[12], i633[13], i633[14])
  i632.ambientEquatorColor = new pc.Color(i633[15], i633[16], i633[17], i633[18])
  i632.fogColor = new pc.Color(i633[19], i633[20], i633[21], i633[22])
  i632.fogEndDistance = i633[23]
  i632.fogStartDistance = i633[24]
  i632.fogDensity = i633[25]
  i632.fog = !!i633[26]
  request.r(i633[27], i633[28], 0, i632, 'skybox')
  i632.fogMode = i633[29]
  var i635 = i633[30]
  var i634 = []
  for(var i = 0; i < i635.length; i += 1) {
    i634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i635[i + 0]) );
  }
  i632.lightmaps = i634
  i632.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i633[31], i632.lightProbes)
  i632.lightmapsMode = i633[32]
  i632.mixedBakeMode = i633[33]
  i632.environmentLightingMode = i633[34]
  i632.ambientProbe = new pc.SphericalHarmonicsL2(i633[35])
  i632.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i633[36])
  i632.useReferenceAmbientProbe = !!i633[37]
  request.r(i633[38], i633[39], 0, i632, 'customReflection')
  request.r(i633[40], i633[41], 0, i632, 'defaultReflection')
  i632.defaultReflectionMode = i633[42]
  i632.defaultReflectionResolution = i633[43]
  i632.sunLightObjectId = i633[44]
  i632.pixelLightCount = i633[45]
  i632.defaultReflectionHDR = !!i633[46]
  i632.hasLightDataAsset = !!i633[47]
  i632.hasManualGenerate = !!i633[48]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i639 = data
  request.r(i639[0], i639[1], 0, i638, 'lightmapColor')
  request.r(i639[2], i639[3], 0, i638, 'lightmapDirection')
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i640 = root || new UnityEngine.LightProbes()
  var i641 = data
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i647 = data
  var i649 = i647[0]
  var i648 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i649.length; i += 1) {
    i648.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i649[i + 0]));
  }
  i646.ShaderCompilationErrors = i648
  i646.name = i647[1]
  i646.guid = i647[2]
  var i651 = i647[3]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( i651[i + 0] );
  }
  i646.shaderDefinedKeywords = i650
  var i653 = i647[4]
  var i652 = []
  for(var i = 0; i < i653.length; i += 1) {
    i652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i653[i + 0]) );
  }
  i646.passes = i652
  var i655 = i647[5]
  var i654 = []
  for(var i = 0; i < i655.length; i += 1) {
    i654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i655[i + 0]) );
  }
  i646.usePasses = i654
  var i657 = i647[6]
  var i656 = []
  for(var i = 0; i < i657.length; i += 1) {
    i656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i657[i + 0]) );
  }
  i646.defaultParameterValues = i656
  request.r(i647[7], i647[8], 0, i646, 'unityFallbackShader')
  i646.readDepth = !!i647[9]
  i646.isCreatedByShaderGraph = !!i647[10]
  i646.usedBatchUniforms = i647[11]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i661 = data
  i660.shaderName = i661[0]
  i660.errorMessage = i661[1]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i666 = root || new pc.UnityShaderPass()
  var i667 = data
  i666.id = i667[0]
  i666.subShaderIndex = i667[1]
  i666.name = i667[2]
  i666.passType = i667[3]
  i666.grabPassTextureName = i667[4]
  i666.usePass = !!i667[5]
  i666.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i667[6], i666.zTest)
  i666.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i667[7], i666.zWrite)
  i666.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i667[8], i666.culling)
  i666.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i667[9], i666.blending)
  i666.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i667[10], i666.alphaBlending)
  i666.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i667[11], i666.colorWriteMask)
  i666.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i667[12], i666.offsetUnits)
  i666.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i667[13], i666.offsetFactor)
  i666.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i667[14], i666.stencilRef)
  i666.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i667[15], i666.stencilReadMask)
  i666.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i667[16], i666.stencilWriteMask)
  i666.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i667[17], i666.stencilOp)
  i666.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i667[18], i666.stencilOpFront)
  i666.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i667[19], i666.stencilOpBack)
  var i669 = i667[20]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i669[i + 0]) );
  }
  i666.tags = i668
  var i671 = i667[21]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( i671[i + 0] );
  }
  i666.passDefinedKeywords = i670
  var i673 = i667[22]
  var i672 = []
  for(var i = 0; i < i673.length; i += 1) {
    i672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i673[i + 0]) );
  }
  i666.passDefinedKeywordGroups = i672
  var i675 = i667[23]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i675[i + 0]) );
  }
  i666.variants = i674
  var i677 = i667[24]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i677[i + 0]) );
  }
  i666.excludedVariants = i676
  i666.hasDepthReader = !!i667[25]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i679 = data
  i678.val = i679[0]
  i678.name = i679[1]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i681 = data
  i680.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i681[0], i680.src)
  i680.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i681[1], i680.dst)
  i680.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i681[2], i680.op)
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i683 = data
  i682.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i683[0], i682.pass)
  i682.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i683[1], i682.fail)
  i682.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i683[2], i682.zFail)
  i682.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i683[3], i682.comp)
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i687 = data
  i686.name = i687[0]
  i686.value = i687[1]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i691 = data
  var i693 = i691[0]
  var i692 = []
  for(var i = 0; i < i693.length; i += 1) {
    i692.push( i693[i + 0] );
  }
  i690.keywords = i692
  i690.hasDiscard = !!i691[1]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i697 = data
  i696.passId = i697[0]
  i696.subShaderIndex = i697[1]
  var i699 = i697[2]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( i699[i + 0] );
  }
  i696.keywords = i698
  i696.vertexProgram = i697[3]
  i696.fragmentProgram = i697[4]
  i696.readDepth = !!i697[5]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i703 = data
  request.r(i703[0], i703[1], 0, i702, 'shader')
  i702.pass = i703[2]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i707 = data
  i706.name = i707[0]
  i706.type = i707[1]
  i706.value = new pc.Vec4( i707[2], i707[3], i707[4], i707[5] )
  i706.textureValue = i707[6]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i709 = data
  i708.name = i709[0]
  request.r(i709[1], i709[2], 0, i708, 'texture')
  i708.aabb = i709[3]
  i708.vertices = i709[4]
  i708.triangles = i709[5]
  i708.textureRect = UnityEngine.Rect.MinMaxRect(i709[6], i709[7], i709[8], i709[9])
  i708.packedRect = UnityEngine.Rect.MinMaxRect(i709[10], i709[11], i709[12], i709[13])
  i708.border = new pc.Vec4( i709[14], i709[15], i709[16], i709[17] )
  i708.transparency = i709[18]
  i708.bounds = i709[19]
  i708.pixelsPerUnit = i709[20]
  i708.textureWidth = i709[21]
  i708.textureHeight = i709[22]
  i708.nativeSize = new pc.Vec2( i709[23], i709[24] )
  i708.pivot = new pc.Vec2( i709[25], i709[26] )
  i708.textureRectOffset = new pc.Vec2( i709[27], i709[28] )
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i711 = data
  i710.name = i711[0]
  i710.wrapMode = i711[1]
  i710.isLooping = !!i711[2]
  i710.length = i711[3]
  var i713 = i711[4]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i713[i + 0]) );
  }
  i710.curves = i712
  var i715 = i711[5]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i715[i + 0]) );
  }
  i710.events = i714
  i710.halfPrecision = !!i711[6]
  i710.frameRate = i711[7]
  i710.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i711[8], i710.localBounds)
  i710.hasMuscleCurves = !!i711[9]
  var i717 = i711[10]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( i717[i + 0] );
  }
  i710.clipMuscleConstant = i716
  i710.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i711[11], i710.clipBindingConstant)
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i721 = data
  i720.path = i721[0]
  i720.componentType = i721[1]
  i720.property = i721[2]
  i720.keys = i721[3]
  var i723 = i721[4]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i723[i + 0]) );
  }
  i720.objectReferenceKeys = i722
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i727 = data
  i726.time = i727[0]
  request.r(i727[1], i727[2], 0, i726, 'value')
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i731 = data
  i730.functionName = i731[0]
  i730.floatParameter = i731[1]
  i730.intParameter = i731[2]
  i730.stringParameter = i731[3]
  request.r(i731[4], i731[5], 0, i730, 'objectReferenceParameter')
  i730.time = i731[6]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i733 = data
  i732.center = new pc.Vec3( i733[0], i733[1], i733[2] )
  i732.extends = new pc.Vec3( i733[3], i733[4], i733[5] )
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i737 = data
  var i739 = i737[0]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( i739[i + 0] );
  }
  i736.genericBindings = i738
  var i741 = i737[1]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( i741[i + 0] );
  }
  i736.pptrCurveMapping = i740
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i743 = data
  i742.name = i743[0]
  var i745 = i743[1]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i745[i + 0]) );
  }
  i742.states = i744
  var i747 = i743[2]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i747[i + 0]) );
  }
  i742.layers = i746
  var i749 = i743[3]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i749[i + 0]) );
  }
  i742.parameters = i748
  i742.animationClips = i743[4]
  i742.HasSubStateMachines = !!i743[5]
  i742.avatarUnsupported = i743[6]
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i753 = data
  i752.cycleOffset = i753[0]
  i752.cycleOffsetParameter = i753[1]
  i752.cycleOffsetParameterActive = !!i753[2]
  i752.mirror = !!i753[3]
  i752.mirrorParameter = i753[4]
  i752.mirrorParameterActive = !!i753[5]
  i752.motionId = i753[6]
  i752.nameHash = i753[7]
  i752.fullPathHash = i753[8]
  i752.speed = i753[9]
  i752.speedParameter = i753[10]
  i752.speedParameterActive = !!i753[11]
  i752.tag = i753[12]
  i752.name = i753[13]
  i752.layer = i753[14]
  i752.writeDefaultValues = !!i753[15]
  var i755 = i753[16]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i755[i + 0]) );
  }
  i752.transitions = i754
  var i757 = i753[17]
  var i756 = []
  for(var i = 0; i < i757.length; i += 2) {
  request.r(i757[i + 0], i757[i + 1], 2, i756, '')
  }
  i752.behaviours = i756
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i761 = data
  i760.fullPath = i761[0]
  i760.canTransitionToSelf = !!i761[1]
  i760.duration = i761[2]
  i760.exitTime = i761[3]
  i760.hasExitTime = !!i761[4]
  i760.hasFixedDuration = !!i761[5]
  i760.interruptionSource = i761[6]
  i760.offset = i761[7]
  i760.orderedInterruption = !!i761[8]
  i760.destinationStateNameHash = i761[9]
  i760.destinationStateMachineId = i761[10]
  i760.isExit = !!i761[11]
  i760.mute = !!i761[12]
  i760.solo = !!i761[13]
  var i763 = i761[14]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i763[i + 0]) );
  }
  i760.conditions = i762
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i769 = data
  i768.blendingMode = i769[0]
  i768.defaultWeight = i769[1]
  i768.name = i769[2]
  i768.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i769[3], i768.stateMachine)
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i771 = data
  i770.id = i771[0]
  i770.defaultStateNameHash = i771[1]
  var i773 = i771[2]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i773[i + 0]) );
  }
  i770.entryTransitions = i772
  var i775 = i771[3]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i775[i + 0]) );
  }
  i770.anyStateTransitions = i774
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i779 = data
  i778.destinationStateNameHash = i779[0]
  i778.destinationStateMachineId = i779[1]
  i778.isExit = !!i779[2]
  i778.mute = !!i779[3]
  i778.solo = !!i779[4]
  var i781 = i779[5]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i781[i + 0]) );
  }
  i778.conditions = i780
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i785 = data
  i784.defaultBool = !!i785[0]
  i784.defaultFloat = i785[1]
  i784.defaultInt = i785[2]
  i784.name = i785[3]
  i784.nameHash = i785[4]
  i784.type = i785[5]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i787 = data
  var i789 = i787[0]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i789[i + 0]) );
  }
  i786.files = i788
  i786.componentToPrefabIds = i787[1]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i793 = data
  i792.path = i793[0]
  request.r(i793[1], i793[2], 0, i792, 'unityObject')
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i795 = data
  var i797 = i795[0]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i797[i + 0]) );
  }
  i794.scriptsExecutionOrder = i796
  var i799 = i795[1]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i799[i + 0]) );
  }
  i794.sortingLayers = i798
  var i801 = i795[2]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i801[i + 0]) );
  }
  i794.cullingLayers = i800
  i794.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i795[3], i794.timeSettings)
  i794.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i795[4], i794.physicsSettings)
  i794.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i795[5], i794.physics2DSettings)
  i794.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i795[6], i794.qualitySettings)
  i794.enableRealtimeShadows = !!i795[7]
  i794.enableAutoInstancing = !!i795[8]
  i794.enableDynamicBatching = !!i795[9]
  i794.lightmapEncodingQuality = i795[10]
  i794.desiredColorSpace = i795[11]
  var i803 = i795[12]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( i803[i + 0] );
  }
  i794.allTags = i802
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i807 = data
  i806.name = i807[0]
  i806.value = i807[1]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i811 = data
  i810.id = i811[0]
  i810.name = i811[1]
  i810.value = i811[2]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i815 = data
  i814.id = i815[0]
  i814.name = i815[1]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i817 = data
  i816.fixedDeltaTime = i817[0]
  i816.maximumDeltaTime = i817[1]
  i816.timeScale = i817[2]
  i816.maximumParticleTimestep = i817[3]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i819 = data
  i818.gravity = new pc.Vec3( i819[0], i819[1], i819[2] )
  i818.defaultSolverIterations = i819[3]
  i818.bounceThreshold = i819[4]
  i818.autoSyncTransforms = !!i819[5]
  i818.autoSimulation = !!i819[6]
  var i821 = i819[7]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i821[i + 0]) );
  }
  i818.collisionMatrix = i820
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i825 = data
  i824.enabled = !!i825[0]
  i824.layerId = i825[1]
  i824.otherLayerId = i825[2]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i827 = data
  request.r(i827[0], i827[1], 0, i826, 'material')
  i826.gravity = new pc.Vec2( i827[2], i827[3] )
  i826.positionIterations = i827[4]
  i826.velocityIterations = i827[5]
  i826.velocityThreshold = i827[6]
  i826.maxLinearCorrection = i827[7]
  i826.maxAngularCorrection = i827[8]
  i826.maxTranslationSpeed = i827[9]
  i826.maxRotationSpeed = i827[10]
  i826.baumgarteScale = i827[11]
  i826.baumgarteTOIScale = i827[12]
  i826.timeToSleep = i827[13]
  i826.linearSleepTolerance = i827[14]
  i826.angularSleepTolerance = i827[15]
  i826.defaultContactOffset = i827[16]
  i826.autoSimulation = !!i827[17]
  i826.queriesHitTriggers = !!i827[18]
  i826.queriesStartInColliders = !!i827[19]
  i826.callbacksOnDisable = !!i827[20]
  i826.reuseCollisionCallbacks = !!i827[21]
  i826.autoSyncTransforms = !!i827[22]
  var i829 = i827[23]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i829[i + 0]) );
  }
  i826.collisionMatrix = i828
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i833 = data
  i832.enabled = !!i833[0]
  i832.layerId = i833[1]
  i832.otherLayerId = i833[2]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i835 = data
  var i837 = i835[0]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i837[i + 0]) );
  }
  i834.qualityLevels = i836
  var i839 = i835[1]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( i839[i + 0] );
  }
  i834.names = i838
  i834.shadows = i835[2]
  i834.anisotropicFiltering = i835[3]
  i834.antiAliasing = i835[4]
  i834.lodBias = i835[5]
  i834.shadowCascades = i835[6]
  i834.shadowDistance = i835[7]
  i834.shadowmaskMode = i835[8]
  i834.shadowProjection = i835[9]
  i834.shadowResolution = i835[10]
  i834.softParticles = !!i835[11]
  i834.softVegetation = !!i835[12]
  i834.activeColorSpace = i835[13]
  i834.desiredColorSpace = i835[14]
  i834.masterTextureLimit = i835[15]
  i834.maxQueuedFrames = i835[16]
  i834.particleRaycastBudget = i835[17]
  i834.pixelLightCount = i835[18]
  i834.realtimeReflectionProbes = !!i835[19]
  i834.shadowCascade2Split = i835[20]
  i834.shadowCascade4Split = new pc.Vec3( i835[21], i835[22], i835[23] )
  i834.streamingMipmapsActive = !!i835[24]
  i834.vSyncCount = i835[25]
  i834.asyncUploadBufferSize = i835[26]
  i834.asyncUploadTimeSlice = i835[27]
  i834.billboardsFaceCameraPosition = !!i835[28]
  i834.shadowNearPlaneOffset = i835[29]
  i834.streamingMipmapsMemoryBudget = i835[30]
  i834.maximumLODLevel = i835[31]
  i834.streamingMipmapsAddAllCameras = !!i835[32]
  i834.streamingMipmapsMaxLevelReduction = i835[33]
  i834.streamingMipmapsRenderersPerFrame = i835[34]
  i834.resolutionScalingFixedDPIFactor = i835[35]
  i834.streamingMipmapsMaxFileIORequests = i835[36]
  i834.currentQualityLevel = i835[37]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i843 = data
  i842.AdditionalLightsPerObjectLimit = i843[0]
  i842.AdditionalLightsRenderingMode = i843[1]
  i842.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i843[2], i842.LightRenderingMode)
  i842.ColorGradingLutSize = i843[3]
  i842.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i843[4], i842.ColorGradingMode)
  i842.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i843[5], i842.MainLightRenderingMode)
  i842.MainLightRenderingModeValue = i843[6]
  i842.MainLightShadowsSupported = !!i843[7]
  i842.MixedLightingSupported = !!i843[8]
  i842.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i843[9], i842.MsaaQuality)
  i842.MSAA = i843[10]
  i842.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i843[11], i842.OpaqueDownsampling)
  i842.RenderScale = i843[12]
  i842.RequireDepthTexture = !!i843[13]
  i842.RequireOpaqueTexture = !!i843[14]
  i842.ShadowAtlasResolution = i843[15]
  i842.ShadowDepthBias = i843[16]
  i842.SupportsHDR = !!i843[17]
  i842.SupportsTerrainHoles = !!i843[18]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i845 = data
  i844.Disabled = i845[0]
  i844.PerVertex = i845[1]
  i844.PerPixel = i845[2]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i847 = data
  i846.LowDynamicRange = i847[0]
  i846.HighDynamicRange = i847[1]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i849 = data
  i848.Disabled = i849[0]
  i848._2x = i849[1]
  i848._4x = i849[2]
  i848._8x = i849[3]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i851 = data
  i850.None = i851[0]
  i850._2xBilinear = i851[1]
  i850._4xBox = i851[2]
  i850._4xBilinear = i851[3]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i855 = data
  i854.mode = i855[0]
  i854.parameter = i855[1]
  i854.threshold = i855[2]
  return i854
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"frontSortingLayerID":16,"frontSortingOrder":17,"backSortingLayerID":18,"backSortingOrder":19,"alphaCutoff":20,"sprite":21,"tileMode":23,"isCustomRangeActive":24,"spriteSortPoint":25},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.LineRenderer":{"textureMode":0,"alignment":1,"widthCurve":2,"colorGradient":3,"positions":4,"positionCount":5,"widthMultiplier":6,"startWidth":7,"endWidth":8,"numCornerVertices":9,"numCapVertices":10,"useWorldSpace":11,"loop":12,"startColor":13,"endColor":17,"generateLightingData":21,"enabled":22,"sharedMaterial":23,"sharedMaterials":25,"receiveShadows":26,"shadowCastingMode":27,"sortingLayerID":28,"sortingOrder":29,"lightmapIndex":30,"lightmapSceneIndex":31,"lightmapScaleOffset":32,"lightProbeUsage":36,"reflectionProbeUsage":37},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5,"avatarUnsupported":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"MainLightShadowsSupported":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"RenderScale":12,"RequireDepthTexture":13,"RequireOpaqueTexture":14,"ShadowAtlasResolution":15,"ShadowDepthBias":16,"SupportsHDR":17,"SupportsTerrainHoles":18},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"34":[35],"36":[35],"37":[35],"38":[35],"39":[35],"40":[35],"41":[42],"43":[3],"44":[45],"46":[45],"47":[45],"48":[45],"49":[45],"50":[45],"51":[45],"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[53],"60":[53],"61":[53],"62":[53],"63":[53],"64":[53],"65":[53],"66":[3],"67":[68],"69":[70],"71":[70],"25":[24],"72":[3],"6":[3],"8":[7],"73":[24],"74":[68,24],"75":[24,29],"76":[24],"77":[29,24],"78":[68],"79":[29,24],"80":[24],"81":[82],"83":[24],"84":[24],"28":[25],"30":[29,24],"85":[24],"27":[25],"86":[24],"87":[24],"88":[24],"89":[24],"90":[24],"91":[24],"92":[24],"93":[24],"94":[24],"95":[29,24],"96":[24],"97":[24],"98":[24],"99":[24],"100":[29,24],"101":[24],"102":[31],"103":[31],"32":[31],"104":[31],"105":[3],"106":[3],"107":[24],"108":[82],"109":[82]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","BottleController","UnityEngine.LineRenderer","FxBubblesBottle","UnityEngine.BoxCollider2D","UnityEngine.GameObject","UnityEngine.SpriteMask","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","GameManager1","GamePlayController","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.Rendering.UI.UIFoldout","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.15f1";

Deserializers.productName = "WaterSortProject";

Deserializers.lunaInitializationTime = "02/17/2024 07:32:00";

Deserializers.lunaDaysRunning = "1.3";

Deserializers.lunaVersion = "5.5.0";

Deserializers.lunaSHA = "aa8b6dc467b3eacc9168b32bb8d120b69b67a956";

Deserializers.creativeName = "";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1730";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4024";

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

Deserializers.buildID = "28fb7412-3dae-40cd-8647-8ef4eebef216";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

