var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i228 = root || request.c( 'UnityEngine.JointSpring' )
  var i229 = data
  i228.spring = i229[0]
  i228.damper = i229[1]
  i228.targetPosition = i229[2]
  return i228
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i230 = root || request.c( 'UnityEngine.JointMotor' )
  var i231 = data
  i230.m_TargetVelocity = i231[0]
  i230.m_Force = i231[1]
  i230.m_FreeSpin = i231[2]
  return i230
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i232 = root || request.c( 'UnityEngine.JointLimits' )
  var i233 = data
  i232.m_Min = i233[0]
  i232.m_Max = i233[1]
  i232.m_Bounciness = i233[2]
  i232.m_BounceMinVelocity = i233[3]
  i232.m_ContactDistance = i233[4]
  i232.minBounce = i233[5]
  i232.maxBounce = i233[6]
  return i232
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i234 = root || request.c( 'UnityEngine.JointDrive' )
  var i235 = data
  i234.m_PositionSpring = i235[0]
  i234.m_PositionDamper = i235[1]
  i234.m_MaximumForce = i235[2]
  return i234
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i236 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i237 = data
  i236.m_Spring = i237[0]
  i236.m_Damper = i237[1]
  return i236
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i238 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i239 = data
  i238.m_Limit = i239[0]
  i238.m_Bounciness = i239[1]
  i238.m_ContactDistance = i239[2]
  return i238
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i240 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i241 = data
  i240.m_ExtremumSlip = i241[0]
  i240.m_ExtremumValue = i241[1]
  i240.m_AsymptoteSlip = i241[2]
  i240.m_AsymptoteValue = i241[3]
  i240.m_Stiffness = i241[4]
  return i240
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i242 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i243 = data
  i242.m_LowerAngle = i243[0]
  i242.m_UpperAngle = i243[1]
  return i242
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i244 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i245 = data
  i244.m_MotorSpeed = i245[0]
  i244.m_MaximumMotorTorque = i245[1]
  return i244
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i246 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i247 = data
  i246.m_DampingRatio = i247[0]
  i246.m_Frequency = i247[1]
  i246.m_Angle = i247[2]
  return i246
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i248 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i249 = data
  i248.m_LowerTranslation = i249[0]
  i248.m_UpperTranslation = i249[1]
  return i248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i250 = root || new pc.UnityMaterial()
  var i251 = data
  i250.name = i251[0]
  request.r(i251[1], i251[2], 0, i250, 'shader')
  i250.renderQueue = i251[3]
  i250.enableInstancing = !!i251[4]
  var i253 = i251[5]
  var i252 = []
  for(var i = 0; i < i253.length; i += 1) {
    i252.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i253[i + 0]) );
  }
  i250.floatParameters = i252
  var i255 = i251[6]
  var i254 = []
  for(var i = 0; i < i255.length; i += 1) {
    i254.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i255[i + 0]) );
  }
  i250.colorParameters = i254
  var i257 = i251[7]
  var i256 = []
  for(var i = 0; i < i257.length; i += 1) {
    i256.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i257[i + 0]) );
  }
  i250.vectorParameters = i256
  var i259 = i251[8]
  var i258 = []
  for(var i = 0; i < i259.length; i += 1) {
    i258.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i259[i + 0]) );
  }
  i250.textureParameters = i258
  var i261 = i251[9]
  var i260 = []
  for(var i = 0; i < i261.length; i += 1) {
    i260.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i261[i + 0]) );
  }
  i250.materialFlags = i260
  return i250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i265 = data
  i264.name = i265[0]
  i264.value = i265[1]
  return i264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i269 = data
  i268.name = i269[0]
  i268.value = new pc.Color(i269[1], i269[2], i269[3], i269[4])
  return i268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i273 = data
  i272.name = i273[0]
  i272.value = new pc.Vec4( i273[1], i273[2], i273[3], i273[4] )
  return i272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i277 = data
  i276.name = i277[0]
  request.r(i277[1], i277[2], 0, i276, 'value')
  return i276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i281 = data
  i280.name = i281[0]
  i280.enabled = !!i281[1]
  return i280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i283 = data
  i282.name = i283[0]
  i282.width = i283[1]
  i282.height = i283[2]
  i282.mipmapCount = i283[3]
  i282.anisoLevel = i283[4]
  i282.filterMode = i283[5]
  i282.hdr = !!i283[6]
  i282.format = i283[7]
  i282.wrapMode = i283[8]
  i282.alphaIsTransparency = !!i283[9]
  i282.alphaSource = i283[10]
  return i282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i285 = data
  i284.name = i285[0]
  i284.atlasId = i285[1]
  i284.mipmapCount = i285[2]
  i284.hdr = !!i285[3]
  i284.size = i285[4]
  i284.anisoLevel = i285[5]
  i284.filterMode = i285[6]
  i284.wrapMode = i285[7]
  var i287 = i285[8]
  var i286 = []
  for(var i = 0; i < i287.length; i += 4) {
    i286.push( UnityEngine.Rect.MinMaxRect(i287[i + 0], i287[i + 1], i287[i + 2], i287[i + 3]) );
  }
  i284.rects = i286
  return i284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i291 = data
  i290.name = i291[0]
  i290.index = i291[1]
  i290.startup = !!i291[2]
  return i290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i293 = data
  i292.position = new pc.Vec3( i293[0], i293[1], i293[2] )
  i292.scale = new pc.Vec3( i293[3], i293[4], i293[5] )
  i292.rotation = new pc.Quat(i293[6], i293[7], i293[8], i293[9])
  return i292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i295 = data
  i294.enabled = !!i295[0]
  i294.aspect = i295[1]
  i294.orthographic = !!i295[2]
  i294.orthographicSize = i295[3]
  i294.backgroundColor = new pc.Color(i295[4], i295[5], i295[6], i295[7])
  i294.nearClipPlane = i295[8]
  i294.farClipPlane = i295[9]
  i294.fieldOfView = i295[10]
  i294.depth = i295[11]
  i294.clearFlags = i295[12]
  i294.cullingMask = i295[13]
  i294.rect = i295[14]
  request.r(i295[15], i295[16], 0, i294, 'targetTexture')
  i294.usePhysicalProperties = !!i295[17]
  i294.focalLength = i295[18]
  i294.sensorSize = new pc.Vec2( i295[19], i295[20] )
  i294.lensShift = new pc.Vec2( i295[21], i295[22] )
  i294.gateFit = i295[23]
  return i294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i297 = data
  i296.name = i297[0]
  i296.tagId = i297[1]
  i296.enabled = !!i297[2]
  i296.isStatic = !!i297[3]
  i296.layer = i297[4]
  return i296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i299 = data
  i298.enabled = !!i299[0]
  i298.type = i299[1]
  i298.color = new pc.Color(i299[2], i299[3], i299[4], i299[5])
  i298.cullingMask = i299[6]
  i298.intensity = i299[7]
  i298.range = i299[8]
  i298.spotAngle = i299[9]
  i298.shadows = i299[10]
  i298.shadowNormalBias = i299[11]
  i298.shadowBias = i299[12]
  i298.shadowStrength = i299[13]
  i298.shadowResolution = i299[14]
  i298.lightmapBakeType = i299[15]
  i298.renderMode = i299[16]
  request.r(i299[17], i299[18], 0, i298, 'cookie')
  i298.cookieSize = i299[19]
  return i298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i301 = data
  i300.enabled = !!i301[0]
  request.r(i301[1], i301[2], 0, i300, 'sharedMaterial')
  var i303 = i301[3]
  var i302 = []
  for(var i = 0; i < i303.length; i += 2) {
  request.r(i303[i + 0], i303[i + 1], 2, i302, '')
  }
  i300.sharedMaterials = i302
  i300.receiveShadows = !!i301[4]
  i300.shadowCastingMode = i301[5]
  i300.sortingLayerID = i301[6]
  i300.sortingOrder = i301[7]
  i300.lightmapIndex = i301[8]
  i300.lightmapSceneIndex = i301[9]
  i300.lightmapScaleOffset = new pc.Vec4( i301[10], i301[11], i301[12], i301[13] )
  i300.lightProbeUsage = i301[14]
  i300.reflectionProbeUsage = i301[15]
  i300.color = new pc.Color(i301[16], i301[17], i301[18], i301[19])
  request.r(i301[20], i301[21], 0, i300, 'sprite')
  i300.flipX = !!i301[22]
  i300.flipY = !!i301[23]
  i300.drawMode = i301[24]
  i300.size = new pc.Vec2( i301[25], i301[26] )
  i300.tileMode = i301[27]
  i300.adaptiveModeThreshold = i301[28]
  i300.maskInteraction = i301[29]
  i300.spriteSortPoint = i301[30]
  return i300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteMask"] = function (request, data, root) {
  var i306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteMask' )
  var i307 = data
  i306.enabled = !!i307[0]
  request.r(i307[1], i307[2], 0, i306, 'sharedMaterial')
  var i309 = i307[3]
  var i308 = []
  for(var i = 0; i < i309.length; i += 2) {
  request.r(i309[i + 0], i309[i + 1], 2, i308, '')
  }
  i306.sharedMaterials = i308
  i306.receiveShadows = !!i307[4]
  i306.shadowCastingMode = i307[5]
  i306.sortingLayerID = i307[6]
  i306.sortingOrder = i307[7]
  i306.lightmapIndex = i307[8]
  i306.lightmapSceneIndex = i307[9]
  i306.lightmapScaleOffset = new pc.Vec4( i307[10], i307[11], i307[12], i307[13] )
  i306.lightProbeUsage = i307[14]
  i306.reflectionProbeUsage = i307[15]
  i306.frontSortingLayerID = i307[16]
  i306.frontSortingOrder = i307[17]
  i306.backSortingLayerID = i307[18]
  i306.backSortingOrder = i307[19]
  i306.alphaCutoff = i307[20]
  request.r(i307[21], i307[22], 0, i306, 'sprite')
  i306.tileMode = i307[23]
  i306.isCustomRangeActive = !!i307[24]
  i306.spriteSortPoint = i307[25]
  return i306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i311 = data
  i310.ambientIntensity = i311[0]
  i310.reflectionIntensity = i311[1]
  i310.ambientMode = i311[2]
  i310.ambientLight = new pc.Color(i311[3], i311[4], i311[5], i311[6])
  i310.ambientSkyColor = new pc.Color(i311[7], i311[8], i311[9], i311[10])
  i310.ambientGroundColor = new pc.Color(i311[11], i311[12], i311[13], i311[14])
  i310.ambientEquatorColor = new pc.Color(i311[15], i311[16], i311[17], i311[18])
  i310.fogColor = new pc.Color(i311[19], i311[20], i311[21], i311[22])
  i310.fogEndDistance = i311[23]
  i310.fogStartDistance = i311[24]
  i310.fogDensity = i311[25]
  i310.fog = !!i311[26]
  request.r(i311[27], i311[28], 0, i310, 'skybox')
  i310.fogMode = i311[29]
  var i313 = i311[30]
  var i312 = []
  for(var i = 0; i < i313.length; i += 1) {
    i312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i313[i + 0]) );
  }
  i310.lightmaps = i312
  i310.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i311[31], i310.lightProbes)
  i310.lightmapsMode = i311[32]
  i310.mixedBakeMode = i311[33]
  i310.environmentLightingMode = i311[34]
  i310.ambientProbe = new pc.SphericalHarmonicsL2(i311[35])
  i310.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i311[36])
  i310.useReferenceAmbientProbe = !!i311[37]
  request.r(i311[38], i311[39], 0, i310, 'customReflection')
  request.r(i311[40], i311[41], 0, i310, 'defaultReflection')
  i310.defaultReflectionMode = i311[42]
  i310.defaultReflectionResolution = i311[43]
  i310.sunLightObjectId = i311[44]
  i310.pixelLightCount = i311[45]
  i310.defaultReflectionHDR = !!i311[46]
  i310.hasLightDataAsset = !!i311[47]
  i310.hasManualGenerate = !!i311[48]
  return i310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i317 = data
  request.r(i317[0], i317[1], 0, i316, 'lightmapColor')
  request.r(i317[2], i317[3], 0, i316, 'lightmapDirection')
  return i316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i318 = root || new UnityEngine.LightProbes()
  var i319 = data
  return i318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i327 = data
  var i329 = i327[0]
  var i328 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i329.length; i += 1) {
    i328.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i329[i + 0]));
  }
  i326.ShaderCompilationErrors = i328
  i326.name = i327[1]
  i326.guid = i327[2]
  var i331 = i327[3]
  var i330 = []
  for(var i = 0; i < i331.length; i += 1) {
    i330.push( i331[i + 0] );
  }
  i326.shaderDefinedKeywords = i330
  var i333 = i327[4]
  var i332 = []
  for(var i = 0; i < i333.length; i += 1) {
    i332.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i333[i + 0]) );
  }
  i326.passes = i332
  var i335 = i327[5]
  var i334 = []
  for(var i = 0; i < i335.length; i += 1) {
    i334.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i335[i + 0]) );
  }
  i326.usePasses = i334
  var i337 = i327[6]
  var i336 = []
  for(var i = 0; i < i337.length; i += 1) {
    i336.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i337[i + 0]) );
  }
  i326.defaultParameterValues = i336
  request.r(i327[7], i327[8], 0, i326, 'unityFallbackShader')
  i326.readDepth = !!i327[9]
  i326.isCreatedByShaderGraph = !!i327[10]
  i326.usedBatchUniforms = i327[11]
  return i326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i341 = data
  i340.shaderName = i341[0]
  i340.errorMessage = i341[1]
  return i340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i346 = root || new pc.UnityShaderPass()
  var i347 = data
  i346.id = i347[0]
  i346.subShaderIndex = i347[1]
  i346.name = i347[2]
  i346.passType = i347[3]
  i346.grabPassTextureName = i347[4]
  i346.usePass = !!i347[5]
  i346.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i347[6], i346.zTest)
  i346.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i347[7], i346.zWrite)
  i346.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i347[8], i346.culling)
  i346.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i347[9], i346.blending)
  i346.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i347[10], i346.alphaBlending)
  i346.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i347[11], i346.colorWriteMask)
  i346.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i347[12], i346.offsetUnits)
  i346.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i347[13], i346.offsetFactor)
  i346.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i347[14], i346.stencilRef)
  i346.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i347[15], i346.stencilReadMask)
  i346.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i347[16], i346.stencilWriteMask)
  i346.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i347[17], i346.stencilOp)
  i346.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i347[18], i346.stencilOpFront)
  i346.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i347[19], i346.stencilOpBack)
  var i349 = i347[20]
  var i348 = []
  for(var i = 0; i < i349.length; i += 1) {
    i348.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i349[i + 0]) );
  }
  i346.tags = i348
  var i351 = i347[21]
  var i350 = []
  for(var i = 0; i < i351.length; i += 1) {
    i350.push( i351[i + 0] );
  }
  i346.passDefinedKeywords = i350
  var i353 = i347[22]
  var i352 = []
  for(var i = 0; i < i353.length; i += 1) {
    i352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i353[i + 0]) );
  }
  i346.passDefinedKeywordGroups = i352
  var i355 = i347[23]
  var i354 = []
  for(var i = 0; i < i355.length; i += 1) {
    i354.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i355[i + 0]) );
  }
  i346.variants = i354
  var i357 = i347[24]
  var i356 = []
  for(var i = 0; i < i357.length; i += 1) {
    i356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i357[i + 0]) );
  }
  i346.excludedVariants = i356
  i346.hasDepthReader = !!i347[25]
  return i346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i359 = data
  i358.val = i359[0]
  i358.name = i359[1]
  return i358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i361 = data
  i360.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i361[0], i360.src)
  i360.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i361[1], i360.dst)
  i360.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i361[2], i360.op)
  return i360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i363 = data
  i362.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i363[0], i362.pass)
  i362.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i363[1], i362.fail)
  i362.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i363[2], i362.zFail)
  i362.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i363[3], i362.comp)
  return i362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i367 = data
  i366.name = i367[0]
  i366.value = i367[1]
  return i366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i370 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i371 = data
  var i373 = i371[0]
  var i372 = []
  for(var i = 0; i < i373.length; i += 1) {
    i372.push( i373[i + 0] );
  }
  i370.keywords = i372
  i370.hasDiscard = !!i371[1]
  return i370
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i377 = data
  i376.passId = i377[0]
  i376.subShaderIndex = i377[1]
  var i379 = i377[2]
  var i378 = []
  for(var i = 0; i < i379.length; i += 1) {
    i378.push( i379[i + 0] );
  }
  i376.keywords = i378
  i376.vertexProgram = i377[3]
  i376.fragmentProgram = i377[4]
  i376.readDepth = !!i377[5]
  return i376
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i383 = data
  request.r(i383[0], i383[1], 0, i382, 'shader')
  i382.pass = i383[2]
  return i382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i387 = data
  i386.name = i387[0]
  i386.type = i387[1]
  i386.value = new pc.Vec4( i387[2], i387[3], i387[4], i387[5] )
  i386.textureValue = i387[6]
  return i386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i388 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i389 = data
  i388.name = i389[0]
  request.r(i389[1], i389[2], 0, i388, 'texture')
  i388.aabb = i389[3]
  i388.vertices = i389[4]
  i388.triangles = i389[5]
  i388.textureRect = UnityEngine.Rect.MinMaxRect(i389[6], i389[7], i389[8], i389[9])
  i388.packedRect = UnityEngine.Rect.MinMaxRect(i389[10], i389[11], i389[12], i389[13])
  i388.border = new pc.Vec4( i389[14], i389[15], i389[16], i389[17] )
  i388.transparency = i389[18]
  i388.bounds = i389[19]
  i388.pixelsPerUnit = i389[20]
  i388.textureWidth = i389[21]
  i388.textureHeight = i389[22]
  i388.nativeSize = new pc.Vec2( i389[23], i389[24] )
  i388.pivot = new pc.Vec2( i389[25], i389[26] )
  i388.textureRectOffset = new pc.Vec2( i389[27], i389[28] )
  return i388
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i391 = data
  var i393 = i391[0]
  var i392 = []
  for(var i = 0; i < i393.length; i += 1) {
    i392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i393[i + 0]) );
  }
  i390.files = i392
  i390.componentToPrefabIds = i391[1]
  return i390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i397 = data
  i396.path = i397[0]
  request.r(i397[1], i397[2], 0, i396, 'unityObject')
  return i396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i399 = data
  var i401 = i399[0]
  var i400 = []
  for(var i = 0; i < i401.length; i += 1) {
    i400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i401[i + 0]) );
  }
  i398.scriptsExecutionOrder = i400
  var i403 = i399[1]
  var i402 = []
  for(var i = 0; i < i403.length; i += 1) {
    i402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i403[i + 0]) );
  }
  i398.sortingLayers = i402
  var i405 = i399[2]
  var i404 = []
  for(var i = 0; i < i405.length; i += 1) {
    i404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i405[i + 0]) );
  }
  i398.cullingLayers = i404
  i398.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i399[3], i398.timeSettings)
  i398.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i399[4], i398.physicsSettings)
  i398.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i399[5], i398.physics2DSettings)
  i398.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i399[6], i398.qualitySettings)
  i398.enableRealtimeShadows = !!i399[7]
  i398.enableAutoInstancing = !!i399[8]
  i398.enableDynamicBatching = !!i399[9]
  i398.lightmapEncodingQuality = i399[10]
  i398.desiredColorSpace = i399[11]
  var i407 = i399[12]
  var i406 = []
  for(var i = 0; i < i407.length; i += 1) {
    i406.push( i407[i + 0] );
  }
  i398.allTags = i406
  return i398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i411 = data
  i410.name = i411[0]
  i410.value = i411[1]
  return i410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i415 = data
  i414.id = i415[0]
  i414.name = i415[1]
  i414.value = i415[2]
  return i414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i419 = data
  i418.id = i419[0]
  i418.name = i419[1]
  return i418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i421 = data
  i420.fixedDeltaTime = i421[0]
  i420.maximumDeltaTime = i421[1]
  i420.timeScale = i421[2]
  i420.maximumParticleTimestep = i421[3]
  return i420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i423 = data
  i422.gravity = new pc.Vec3( i423[0], i423[1], i423[2] )
  i422.defaultSolverIterations = i423[3]
  i422.bounceThreshold = i423[4]
  i422.autoSyncTransforms = !!i423[5]
  i422.autoSimulation = !!i423[6]
  var i425 = i423[7]
  var i424 = []
  for(var i = 0; i < i425.length; i += 1) {
    i424.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i425[i + 0]) );
  }
  i422.collisionMatrix = i424
  return i422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i429 = data
  i428.enabled = !!i429[0]
  i428.layerId = i429[1]
  i428.otherLayerId = i429[2]
  return i428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i431 = data
  request.r(i431[0], i431[1], 0, i430, 'material')
  i430.gravity = new pc.Vec2( i431[2], i431[3] )
  i430.positionIterations = i431[4]
  i430.velocityIterations = i431[5]
  i430.velocityThreshold = i431[6]
  i430.maxLinearCorrection = i431[7]
  i430.maxAngularCorrection = i431[8]
  i430.maxTranslationSpeed = i431[9]
  i430.maxRotationSpeed = i431[10]
  i430.baumgarteScale = i431[11]
  i430.baumgarteTOIScale = i431[12]
  i430.timeToSleep = i431[13]
  i430.linearSleepTolerance = i431[14]
  i430.angularSleepTolerance = i431[15]
  i430.defaultContactOffset = i431[16]
  i430.autoSimulation = !!i431[17]
  i430.queriesHitTriggers = !!i431[18]
  i430.queriesStartInColliders = !!i431[19]
  i430.callbacksOnDisable = !!i431[20]
  i430.reuseCollisionCallbacks = !!i431[21]
  i430.autoSyncTransforms = !!i431[22]
  var i433 = i431[23]
  var i432 = []
  for(var i = 0; i < i433.length; i += 1) {
    i432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i433[i + 0]) );
  }
  i430.collisionMatrix = i432
  return i430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i437 = data
  i436.enabled = !!i437[0]
  i436.layerId = i437[1]
  i436.otherLayerId = i437[2]
  return i436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i439 = data
  var i441 = i439[0]
  var i440 = []
  for(var i = 0; i < i441.length; i += 1) {
    i440.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i441[i + 0]) );
  }
  i438.qualityLevels = i440
  var i443 = i439[1]
  var i442 = []
  for(var i = 0; i < i443.length; i += 1) {
    i442.push( i443[i + 0] );
  }
  i438.names = i442
  i438.shadows = i439[2]
  i438.anisotropicFiltering = i439[3]
  i438.antiAliasing = i439[4]
  i438.lodBias = i439[5]
  i438.shadowCascades = i439[6]
  i438.shadowDistance = i439[7]
  i438.shadowmaskMode = i439[8]
  i438.shadowProjection = i439[9]
  i438.shadowResolution = i439[10]
  i438.softParticles = !!i439[11]
  i438.softVegetation = !!i439[12]
  i438.activeColorSpace = i439[13]
  i438.desiredColorSpace = i439[14]
  i438.masterTextureLimit = i439[15]
  i438.maxQueuedFrames = i439[16]
  i438.particleRaycastBudget = i439[17]
  i438.pixelLightCount = i439[18]
  i438.realtimeReflectionProbes = !!i439[19]
  i438.shadowCascade2Split = i439[20]
  i438.shadowCascade4Split = new pc.Vec3( i439[21], i439[22], i439[23] )
  i438.streamingMipmapsActive = !!i439[24]
  i438.vSyncCount = i439[25]
  i438.asyncUploadBufferSize = i439[26]
  i438.asyncUploadTimeSlice = i439[27]
  i438.billboardsFaceCameraPosition = !!i439[28]
  i438.shadowNearPlaneOffset = i439[29]
  i438.streamingMipmapsMemoryBudget = i439[30]
  i438.maximumLODLevel = i439[31]
  i438.streamingMipmapsAddAllCameras = !!i439[32]
  i438.streamingMipmapsMaxLevelReduction = i439[33]
  i438.streamingMipmapsRenderersPerFrame = i439[34]
  i438.resolutionScalingFixedDPIFactor = i439[35]
  i438.streamingMipmapsMaxFileIORequests = i439[36]
  i438.currentQualityLevel = i439[37]
  return i438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i447 = data
  i446.AdditionalLightsPerObjectLimit = i447[0]
  i446.AdditionalLightsRenderingMode = i447[1]
  i446.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i447[2], i446.LightRenderingMode)
  i446.ColorGradingLutSize = i447[3]
  i446.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i447[4], i446.ColorGradingMode)
  i446.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i447[5], i446.MainLightRenderingMode)
  i446.MainLightRenderingModeValue = i447[6]
  i446.MainLightShadowsSupported = !!i447[7]
  i446.MixedLightingSupported = !!i447[8]
  i446.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i447[9], i446.MsaaQuality)
  i446.MSAA = i447[10]
  i446.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i447[11], i446.OpaqueDownsampling)
  i446.RenderScale = i447[12]
  i446.RequireDepthTexture = !!i447[13]
  i446.RequireOpaqueTexture = !!i447[14]
  i446.ShadowAtlasResolution = i447[15]
  i446.ShadowDepthBias = i447[16]
  i446.SupportsHDR = !!i447[17]
  i446.SupportsTerrainHoles = !!i447[18]
  return i446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i449 = data
  i448.Disabled = i449[0]
  i448.PerVertex = i449[1]
  i448.PerPixel = i449[2]
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i451 = data
  i450.LowDynamicRange = i451[0]
  i450.HighDynamicRange = i451[1]
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i453 = data
  i452.Disabled = i453[0]
  i452._2x = i453[1]
  i452._4x = i453[2]
  i452._8x = i453[3]
  return i452
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i455 = data
  i454.None = i455[0]
  i454._2xBilinear = i455[1]
  i454._4xBox = i455[2]
  i454._4xBilinear = i455[3]
  return i454
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.SpriteMask":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"frontSortingLayerID":16,"frontSortingOrder":17,"backSortingLayerID":18,"backSortingOrder":19,"alphaCutoff":20,"sprite":21,"tileMode":23,"isCustomRangeActive":24,"spriteSortPoint":25},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"MainLightShadowsSupported":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"RenderScale":12,"RequireDepthTexture":13,"RequireOpaqueTexture":14,"ShadowAtlasResolution":15,"ShadowDepthBias":16,"SupportsHDR":17,"SupportsTerrainHoles":18},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3}}

Deserializers.requiredComponents = {"11":[12],"13":[12],"14":[12],"15":[12],"16":[12],"17":[12],"18":[19],"20":[2],"21":[22],"23":[22],"24":[22],"25":[22],"26":[22],"27":[22],"28":[22],"29":[30],"31":[30],"32":[30],"33":[30],"34":[30],"35":[30],"36":[30],"37":[30],"38":[30],"39":[30],"40":[30],"41":[30],"42":[30],"43":[2],"44":[45],"46":[47],"48":[47],"49":[50],"51":[2],"52":[2],"53":[4],"54":[50],"55":[45,50],"56":[50,57],"58":[50],"59":[57,50],"60":[45],"61":[57,50],"62":[50],"63":[64],"65":[50],"66":[50],"67":[49],"68":[57,50],"69":[50],"70":[49],"71":[50],"72":[50],"73":[50],"74":[50],"75":[50],"76":[50],"77":[50],"78":[50],"79":[50],"80":[57,50],"81":[50],"82":[50],"83":[50],"84":[50],"85":[57,50],"86":[50],"87":[88],"89":[88],"90":[88],"91":[88],"92":[2],"93":[2],"94":[50],"95":[64],"96":[64]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.SpriteMask","UnityEngine.Cubemap","UnityEngine.Texture2D","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Canvas","UnityEngine.RectTransform","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Image","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.CanvasScaler","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.Rendering.UI.UIFoldout","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.15f1";

Deserializers.productName = "WaterSortProject";

Deserializers.lunaInitializationTime = "02/15/2024 11:48:44";

Deserializers.lunaDaysRunning = "0.6";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1763";

Deserializers.runtimeAnalysisExcludedMethodsCount = "2640";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, reflection, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "True";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.WaterSortProject";

Deserializers.disableAntiAliasing = true;

Deserializers.preferWebGl2 = false;

Deserializers.buildID = "32ff8b07-6d97-47c5-a242-626129b72fa7";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

