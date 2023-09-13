var APP_DATA = {
  "scenes": [
    {
      "id": "0-gabinet",
      "name": "gabinet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.778567097019754,
          "pitch": 0.3764373349442032,
          "rotation": 0,
          "target": "1-hol"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-hol",
      "name": "hol",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0508630814356508,
          "pitch": 0.04864181579856819,
          "rotation": 0,
          "target": "0-gabinet"
        },
        {
          "yaw": 2.606118690390467,
          "pitch": 0.09555409110457269,
          "rotation": 0,
          "target": "2-korytarz"
        },
        {
          "yaw": -0.4903296956193266,
          "pitch": 0.034738265745096086,
          "rotation": 0,
          "target": "4-wejscie"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-korytarz",
      "name": "korytarz",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.983384387700724,
          "pitch": 0.02648235715009406,
          "rotation": 0,
          "target": "0-gabinet"
        },
        {
          "yaw": -2.387568063795074,
          "pitch": 0.23247402230820668,
          "rotation": 0,
          "target": "1-hol"
        },
        {
          "yaw": 0.9819874919335803,
          "pitch": 0.21873543380733906,
          "rotation": 0,
          "target": "3-kuchnia"
        },
        {
          "yaw": 0.5157908889456326,
          "pitch": -0.01603507136123561,
          "rotation": 0,
          "target": "6-azienka2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kuchnia",
      "name": "kuchnia",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3983471986497662,
          "pitch": 0.07038554434900135,
          "rotation": 0,
          "target": "2-korytarz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-wejscie",
      "name": "wejscie",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.2733100027309607,
          "pitch": 0.05010347387414171,
          "rotation": 0,
          "target": "0-gabinet"
        },
        {
          "yaw": -1.9419362552651513,
          "pitch": 0.04311284665194748,
          "rotation": 0,
          "target": "1-hol"
        },
        {
          "yaw": -0.19762316051469142,
          "pitch": 0.17209864077800496,
          "rotation": 0,
          "target": "5-wejscie-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-wejscie-1",
      "name": "WEJSCIE 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8741801573135959,
          "pitch": 0.1044493091076788,
          "rotation": 0,
          "target": "1-hol"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-azienka2",
      "name": "łazienka2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5818490899470579,
          "pitch": 0.05558481004021587,
          "rotation": 0,
          "target": "2-korytarz"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
